# The Grimoire

This vault is the Grimoire: application-development notes and documentation that sit *above* every Repo it covers, version-controlled on its own ([[docs/adr/0001-grimoire-repo-above-repos|ADR-0001]]). Terms capitalized below — Project, Repo, MOC, Artifact, Session, Sub-agent, and the rest — are defined once in [[GLOSSARY.md]]; read it first if one is unfamiliar. A Repo's own domain vocabulary lives in its own `GLOSSARY.md` instead, indexed from [[GLOSSARY-MAP.md]].

## Layout

```
grimoire/
├── CLAUDE.md, GLOSSARY.md, GLOSSARY-MAP.md, docs/adr/
├── table of contents.md        ← root MOC
├── artifacts/                  ← vault-wide Artifacts
├── tasks.md                    ← vault-wide #todo Dashboard
└── <Project>/                  ← e.g. serenityOS/, trellis/
    ├── CLAUDE.md                  thin: Repo location, clone URL, quirks
    ├── moc.md                     Project MOC
    ├── devlog.md, techdebt.kanban.md, tasks.md
    ├── artifacts/                 this Project's Artifacts
    └── <repo>/                    the cloned Repo — not vault content
```

## Launch point and Repo access

A Session starts inside the Project it's working on (`cd grimoire/<Project> && claude`); only use the vault root for Grimoire-wide work (editing this file, the root glossary, cross-Project notes). Root `.claude/skills` are reachable from every Project folder.

Inside `<Project>/<repo>/`: read freely. Write only `GLOSSARY.md` and `docs/adr/` there, and only while doing domain-modeling work. Touch any other file in the Repo only on an explicit code task from the user, and never `git commit` or `git push` inside it unasked.

## Obsidian

Vault-aware operations — moving or renaming a note, appending to a MOC or Devlog, setting frontmatter, ticking a Spec checkbox, or reading backlinks/tags/search — go through the Obsidian CLI; see [obsidian-cli](.agents/skills/obsidian-cli/SKILL.md) for the current fallback status. Use Write/Edit directly only to draft an Artifact's own body text.

## Artifacts

Producing a Spec, Plan, Analysis, Tutorial, How-to, Reference, or Explanation is producing an Artifact — see [[GLOSSARY.md]] for what each means. [artifacts](.agents/skills/artifacts/SKILL.md) decides which kind and hands off to the skill that scaffolds it (numbering, frontmatter, filing, MOC linking); don't scaffold one by hand.

## Dashboards and `#todo`

Dataview/Tasks queries live only in a Dashboard (`tasks.md`) — never in a MOC, Devlog, or Artifact. `#todo` marks a Spec's remaining work; a Session's open design questions stay `[?]` in that Project's Devlog instead, and parked work stays in Devlog LOT or the Tech Debt Board. This `tasks.md` convention is new and may change if it turns out to bloat.

## Writing standard

Every note and Artifact should read cleanly to a mid-level software engineer: dense terms are fine, glossed in a clause the first time they appear.

## Sessions and Sub-agents

A Session writes only the Project it was launched in (or vault-root files, from a root Session) — never another Project's notes. A Sub-agent reads, researches, and reports back; it never writes a vault note itself. Two Sessions touching the same Repo's code each work from their own git worktree.

## Skills

- [artifacts](.agents/skills/artifacts/SKILL.md) — deciding and scaffolding any Artifact (see above).
- [diataxis](.agents/skills/diataxis/SKILL.md) — Diataxis Doc scaffolding; invoked by `artifacts`.
- [design-docs](.agents/skills/design-docs/SKILL.md) — Spec/Plan/Analysis scaffolding; invoked by `artifacts`.
- [obsidian-cli](.agents/skills/obsidian-cli/SKILL.md) — when to use the Obsidian CLI vs. Write/Edit.
- [domain-modeling](.agents/skills/domain-modeling/SKILL.md) — a Repo's own `GLOSSARY.md` and `docs/adr/`.

## Pending

`mise` for Project replication is undecided — needs its own ADR before adopting. Other open follow-ups are tracked as `#todo` in [[artifacts/design-docs/specs/0001-grimoire-foundation|the foundation spec]].
