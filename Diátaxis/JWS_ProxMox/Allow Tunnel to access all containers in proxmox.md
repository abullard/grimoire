To allow your WireGuard tunnel to reach other containers or VMs on your Proxmox box, you'll need to configure routing and possibly adjust firewall rules. Here’s how you can set this up step-by-step:

## Step 1: Configure WireGuard to Allow Traffic to Other Containers

1) **Update WireGuard Configuration**: You need to modify the WireGuard configuration on both ends to allow traffic to the subnet where your other containers or VMs reside. For example, if your other containers are on the `10.0.0.0/24` subnet, your configuration might look like this:
    
    On your Proxmox WireGuard container (`wg0.conf`):

```ini
[Interface]
PrivateKey = <Your Private Key>
Address = 10.0.0.1/24

[Peer]
PublicKey = <Friend's Public Key>
Endpoint = <Friend's External IP>:<Port>
AllowedIPs = 10.0.0.2/32, 10.0.0.0/24  # Add your container subnet here
PersistentKeepalive = 25
```

On your friend's Proxmox WireGuard container:

```ini
[Interface]
PrivateKey = <Friend's Private Key>
Address = 10.0.0.2/24

[Peer]
PublicKey = <Your Public Key>
Endpoint = <Your External IP>:<Port>
AllowedIPs = 10.0.0.1/32, 10.0.0.0/24  # Add your container subnet here
PersistentKeepalive = 25
```

## Step 2: Enable IP Forwarding

Ensure that IP forwarding is enabled on both WireGuard containers. This allows the containers to route traffic between different interfaces.

```bash
echo "net.ipv4.ip_forward=1" >> /etc/sysctl.conf
sysctl -p
```

## Step 3: Configure Firewall Rules

If you're using `iptables` or any other firewall on your Proxmox host or within the containers, you need to allow traffic to pass through. Here’s an example of how to set the rules using `iptables`:

1) **Allow WireGuard Traffic**:

    ```bash
    iptables -A INPUT -p udp --dport <WireGuard Port> -j ACCEPT
    iptables -A INPUT -i wg0 -j ACCEPT
    iptables -A FORWARD -i wg0 -j ACCEPT
    iptables -A FORWARD -o wg0 -j ACCEPT
    ```

2) **Allow Traffic to Other Containers**: If your Node.js API container is on the same subnet (for example, `10.0.0.0/24`), you may not need additional rules. However, ensure that the API container itself allows incoming traffic on the relevant port (e.g., port 3000 for Node.js).

## Step 4: Test the Connection

1) **Start the Node.js API**: Run your Node.js API in its container and ensure it is listening on the correct port.
2) **Ping or Access the API**: From the WireGuard tunnel, try to access the Node.js API using its internal IP address (e.g., `http://10.0.0.x:3000`).

## Additional Notes

- Make sure that the containers are on the same virtual network or have routing set up correctly.
- If your containers are using Docker, ensure that the Docker network allows communication with the WireGuard interface.
- Test connectivity with tools like `curl` or `wget` to verify that you can access services across the tunnel.

If you have any further questions or need clarification on any of these steps, feel free to ask!
