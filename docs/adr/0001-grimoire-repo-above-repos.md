# The Grimoire is its own git repo, one level above every Repo it documents

The Grimoire holds development notes, decisions, and Artifacts for multiple Repos (`serenityOS/serenity/`, `trellis/trellis/`), and needs version history independent of any one of them. We version the Grimoire itself, nesting each Repo one folder down inside its Project and excluding it from the Grimoire's git and from Obsidian's indexer (`.gitignore`, `.obsidian/app.json` `userIgnoreFilters`) — a Repo is swappable: delete the folder and re-clone from the URL recorded in that Project's `CLAUDE.md`.

## Considered options

- **A `docs/` folder inside each Repo.** Rejected: can't be used on a Repo we don't control the structure of (e.g. upstream SerenityOS), and has to be re-scaffolded per Project instead of reusing one shared layout.
- **Git submodules**, Repo as submodule of the Grimoire. Rejected: couples the Grimoire's commit history to each Repo's, and submodule checkout/update friction isn't worth it for notes that only ever *read* the Repo.
