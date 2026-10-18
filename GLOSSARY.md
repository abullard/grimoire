# Grimoire Glossary

Terms defined here are capitalized everywhere else in the Grimoire (`CLAUDE.md`, skills, MOCs) and used without re-explanation. If a Project's own Repo defines a conflicting term, the Repo's `GLOSSARY.md` wins inside that Repo; this file covers only vault-level vocabulary.

- **Grimoire**: the whole vault — this repo. Sits *above* every Repo it documents and is version-controlled on its own ([[docs/adr/0001-grimoire-repo-above-repos|ADR-0001]]).
- **Project**: a wrapper folder in the Grimoire (e.g. `serenityOS/`, `trellis/`) holding everything about one Repo: its `CLAUDE.md`, `moc.md`, `devlog.md`, `techdebt.kanban.md`, `tasks.md`, and `artifacts/`.
- **Repo**: the git repository nested one level inside a Project (e.g. `trellis/trellis/`). Ignored by the Grimoire's own git and by Obsidian's indexer — it is a clone, not vault content.
- **MOC** (Map of Contents): a note whose only job is linking other notes. MOCs nest: a MOC can link other MOCs (a MOC of MOCs), forming the vault's navigation tree.
- **Artifact**: a document Claude produces into a Project's (or the vault root's) `artifacts/` tree. Two kinds:
  - **Diataxis Doc**: lasting documentation — a tutorial, how-to, reference, or explanation.
  - **Design Doc**: a work-shaping document — a spec, plan, or analysis. Never call these a "planning doc" or "working note."
- **Spec**: a Design Doc whose `- [ ] #todo` checkboxes define the work still to do.
- **Dashboard**: a note built from Dataview or Tasks queries (e.g. a Project's `tasks.md`). Queries live only in Dashboards — never pasted into a MOC, Devlog, or Artifact.
- **Devlog**: a Project's running log, split into STACK (what's active now), NEXT (queued for the next session), and LOT (parked tech debt or refactor ideas).
- **Tech Debt Board**: a Project's kanban (`techdebt.kanban.md`) tracking debt from Backlog through Done.
- **Session**: a Claude instance the user starts directly (e.g. one herdr pane, one terminal).
- **Sub-agent**: a Claude instance a Session spawns internally. Reads, researches, and reports back — never writes vault notes itself.
