# Removal-Risk Analysis: SerenityOS Build Setup on macOS (work machine)

## Context

The user wants to build SerenityOS locally per `Documentation/BuildInstructions.md` and
`Documentation/BuildInstructionsMacOS.md`, but this is a work machine (Intune-enrolled,
though no restrictive configuration profile was found, and the user has local admin rights).
The blocker isn't the build itself — it's uncertainty about whether the install can be
cleanly and fully undone later. This is an analysis to de-risk that decision before any
install commands are run. No code changes are involved; this produces a report plus a
recommended command sequence, to be run only once the user is comfortable.

Decisions already made in conversation:
- **Architecture: aarch64** (native Apple Silicon target) → `x86_64-elf-gdb` is not needed
  (that package is only for cross-debugging an x86_64 SerenityOS build from Apple Silicon).
- **Disk image approach: genext2fs**, not macfuse+fuse-ext2 → avoids installing any
  kernel/system extension entirely.

## Analysis

### 1. Homebrew formulae — lowest risk, trivially reversible

```console
brew install coreutils e2fsprogs qemu bash imagemagick ninja cmake ccache rsync zstd genext2fs
```

All of these are ordinary userspace Homebrew formulae (same category as installing `jq` or
`wget`). None of them:
- require `sudo`
- install a LaunchDaemon/LaunchAgent or background service
- install a kernel extension or system extension
- touch System Settings, security approvals, or require a reboot
- show up differently in MDM/Intune app inventory than any other CLI dev tool

Full removal, at any point:
```console
brew uninstall coreutils e2fsprogs qemu bash imagemagick ninja cmake ccache rsync zstd genext2fs
brew autoremove   # removes now-unused deps these pulled in transitively
brew cleanup      # clears cached download bottles
```
No reboot, no residue.

### 2. SerenityOS repo + build artifacts — fully self-contained

Once dependencies are installed, `Meta/serenity.sh run` downloads the cross-compiler
toolchain and builds everything **inside the git checkout** (`Toolchain/`, `Build/<arch>/`).
Nothing is installed system-wide, added permanently to `PATH`, or registered as a login
item — the build script sets up its environment per-invocation only.

Full removal:
```console
rm -rf /path/to/your/serenity/checkout
```
That single step removes 100% of the SerenityOS-specific footprint — toolchain, build
output, disk images, everything.

### 3. Xcode Command Line Tools — likely already present, no new footprint

Since the user already develops on this machine, Xcode CLT is almost certainly already
installed for unrelated reasons — this guide doesn't require installing anything new here.
The optional `xcode-select --switch` step only applies if they have the full Xcode app *and*
hit CMake compatibility issues; it is itself a one-line, instantly reversible path change,
and can be skipped going in (revisit only if `cmake` complains about a stale compiler path).

### 4. What's being deliberately avoided (and why it matters for a work machine)

The **only** component in the macOS guide with a real system-level footprint is **macFUSE**
(option 1, `brew install --cask macfuse` + `Toolchain/BuildFuseExt2.sh`). That path:
- installs a system extension, requiring explicit approval in
  System Settings → Privacy & Security, plus a reboot to activate
- is exactly the category of change endpoint security / MDM tooling (Intune, CrowdStrike,
  Defender for Endpoint, etc.) is most likely to flag or block, independent of whether a
  restrictive configuration profile is present
- doesn't fully clean up with a plain `brew uninstall --cask macfuse` — macFUSE ships its
  own uninstaller under `/Library/Filesystems/macfuse.fs/Contents/Resources/`, and full
  deregistration can require another reboot

By choosing **genext2fs** instead, this entire category of risk is sidestepped — there is
no kernel/system extension anywhere in the user's install, now or in the removal path.

## Bottom line

With the aarch64 + genext2fs choices already made, **every single step in this install is
either an ordinary `brew` formula (one-command uninstall, no reboot) or confined entirely to
a folder (one `rm -rf`)**. There is no step here that touches macOS security approvals, the
kernel, or anything an MDM/EDR agent would treat specially. Nothing in this plan requires a
reboot to install *or* to remove.

## Recommended command sequence

```console
# 1. Install dependencies (no casks, no kernel/system extensions)
brew install coreutils e2fsprogs qemu bash imagemagick ninja cmake ccache rsync zstd genext2fs

# 2. Clone and build (self-contained; skip if already cloned)
git clone https://github.com/SerenityOS/serenity.git
cd serenity
Meta/serenity.sh run
```

## Full removal checklist (for later, if ever needed)

```console
brew uninstall coreutils e2fsprogs qemu bash imagemagick ninja cmake ccache rsync zstd genext2fs
brew autoremove
brew cleanup
rm -rf /path/to/serenity
```

## Residual caution

If the user later finds they need actual FUSE-mounted ext2 images for some other workflow
(not required by the base build), that reintroduces the macFUSE tradeoff above — worth
re-evaluating at that point rather than installing it preemptively now.

## Verification

This is an analysis/report, not a code change — there is nothing to test. If the user
chooses to proceed, "verification" is simply running the two install/build commands above
and confirming `Meta/serenity.sh run` successfully boots SerenityOS in QEMU.
