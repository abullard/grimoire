---
name: obsidian-cli
description: Decide whether a vault edit goes through the Obsidian CLI or plain Write/Edit. Use before moving or renaming a note, appending to a MOC or Devlog, setting frontmatter, ticking a Spec checkbox, or reading backlinks/tags/search.
---

# Obsidian CLI

**Vault-aware** operations — anything that touches how notes link, are tagged, or are found — go through the Obsidian CLI, because it keeps links and backlinks consistent as part of the operation; a plain file move or rename does not, and silently breaks every link pointing at the old path. That covers: move/rename, appending a link to a MOC or Devlog, setting frontmatter properties, daily notes, ticking a Spec's `#todo` checkbox, and reads — backlinks, tags, search, base queries.

Drafting an Artifact's own body text is not vault-aware in this sense: write and edit that directly with Write/Edit.

Binary: `/Applications/Obsidian.app/Contents/MacOS/Obsidian` (the `obsidian` PATH entry is set only in `~/.zprofile`, so a non-login shell needs the full path). Requires the Obsidian app already running.

## Current status

Verified 2026-10-15: this machine's Obsidian installer predates full CLI support — invoking the binary prints "Your Obsidian installer is out of date" and offers no usable subcommands. Until the installer is updated (tracked as `#todo` in [the foundation spec](../../../artifacts/design-docs/specs/0001-grimoire-foundation.md)), fall back to Write/Edit for every operation above, including moves and MOC appends — there is no working alternative right now.

Once the installer is updated, re-run `Obsidian --help` to get the live command list rather than trusting a copy here — it's the one place that command surface can't go stale.
