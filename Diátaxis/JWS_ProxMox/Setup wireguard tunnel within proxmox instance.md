Certainly! Setting up a WireGuard VPN tunnel between two Proxmox environments using Docker containers involves several steps. Here’s a general outline of the process:

## Step 1: Prepare Your Proxmox Environment

1) **Install Proxmox**: Ensure you have Proxmox installed and running on your server.
2) **Create a Container**: Use the Proxmox web interface to create a new LXC container for WireGuard. You can use an Ubuntu or Debian template for this purpose.

## Step 2: Set Up WireGuard in the Container

1) **Access the Container**: Use SSH or the Proxmox console to access your new container.
2) **Install WireGuard**:

    ```bash
    apt update
    apt install wireguard
    ```

3) **Generate Keys**: Generate a private and public key for WireGuard:

    ```bash
    wg genkey | tee privatekey | wg pubkey > publickey
    ```

4) **Configure WireGuard**: Create a configuration file, typically located at `/etc/wireguard/wg0.conf`. Here’s a basic example:

```ini
[Interface]
PrivateKey = <Your Private Key>
Address = 10.0.0.1/24  # Adjust as needed

[Peer]
PublicKey = <Friend's Public Key>
Endpoint = <Friend's External IP>:<Port>
AllowedIPs = 10.0.0.2/32  # Adjust as needed
PersistentKeepalive = 25
```

## Step 3: Set Up the Dockerized WireGuard on Your Friend's Proxmox

1) **Create a Docker Container**: On your friend's Proxmox, create a Docker container for WireGuard.
2) **Install WireGuard**: Follow similar steps to install WireGuard in their Docker container.
3) **Configure WireGuard**: Create a similar configuration file on their side with their keys and your public key.

## Step 4: Start WireGuard

1) **Enable IP Forwarding**: Ensure IP forwarding is enabled on both containers:

    ```bash
    echo "net.ipv4.ip_forward=1" >> /etc/sysctl.conf
    sysctl -p
    ```

2) **Start WireGuard**: Use the following command to start the WireGuard interface:

    ```bash
    wg-quick up wg0
    ```

## Step 5: Test the Connection

1) **Ping Test**: Try to ping the VPN IP of the other container to ensure the tunnel is working.
2) **Troubleshooting**: If you encounter issues, check firewall settings, ensure the correct ports are open, and verify that both WireGuard configurations are correct.

## Optional: Automate with Docker Compose

You can also use Docker Compose to manage your WireGuard container if you prefer a more automated setup.

## Additional Resources

For more detailed configurations and advanced setups, you might want to check the official WireGuard documentation or community forums related to Proxmox and Docker.

If you have any further questions or need more specific guidance, feel free to ask!
