---
type: design-doc
subtype: spec
status: active
created: 2026-10-15
project: grimoire
---
# Grimoire Foundation

Lays the Grimoire's base layout: `CLAUDE.md` at vault root and in each Project, a `GLOSSARY.md`/`GLOSSARY-MAP.md` pair, an Artifact MOC tree (Design Docs vs. Diataxis Docs) under `artifacts/` at the root and in each Project, the four scaffolding skills (`artifacts`, `diataxis`, `design-docs`, `obsidian-cli`), and a `#todo` Dashboard per Project. Decided via `/grill-with-docs`, one question at a time.

## Done

- [x] Root `CLAUDE.md` — layout, launch point, Repo access, Obsidian rule, Artifacts, Dashboards, writing standard, Sessions/Sub-agents, Skills, pending decisions.
- [x] `GLOSSARY.md`, `GLOSSARY-MAP.md`, `docs/adr/0001-grimoire-repo-above-repos.md`.
- [x] `.obsidian/app.json`: `serenityOS/serenity/` and `trellis/trellis/` added to `userIgnoreFilters`; `useMarkdownLinks`/`newLinkFormat` set to relative.
- [x] Artifact MOC tree (`artifacts/moc.md` → `design-docs/{specs,plans,analyses}` and `diataxis/{tutorials,how-to,reference,explanation}`) at vault root and in both Projects; linked from `table of contents.md` / each Project `moc.md`.
- [x] `tasks.md` Dashboard (Dataview `#todo` count + Tasks query) at vault root and in both Projects; linked from the same MOCs.
- [x] `.agents/skills/{artifacts,diataxis,design-docs,obsidian-cli}/SKILL.md`, symlinked into `.claude/skills/`.
- [x] Thin `CLAUDE.md` in each Project (Repo name, clone URL, MOC link, quirks).
- [x] `serenityOS/moc.md` Tech Debt link fixed (pointed at `trellis/techdebt.kanban`, now points at its own).
- [x] Orphaned analysis moved to `serenityOS/artifacts/design-docs/analyses/0001-macos-build-removal-risk.md`, frontmatter added, listed in its `moc.md`.
- [x] ~~Add a private remote for the Grimoire's existing git repo~~ — already has one (`origin` → `github.com/abullard/grimoire.git`); no action needed.

## Remaining

- [ ] #todo `mise` for Project replication — needs its own ADR and doc review before adopting.
- [ ] #todo Grill session on "vault reflection as context-gathering."
- [ ] #todo Developer profile, likely `~/.claude/CLAUDE.md`.
- [ ] #todo Paste the user's Diataxis prompt into the `diataxis` skill — it's currently scaffolding-only (see that skill's Pending section).
- [ ] #todo Update the Obsidian installer — the current one only warns that CLI support is limited, with no working subcommands (see `obsidian-cli` skill's Current status); re-verify the CLI there once it's updated.
