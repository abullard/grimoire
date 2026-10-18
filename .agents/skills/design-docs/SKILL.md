---
name: design-docs
description: Scaffold a Design Doc — Spec, Plan, or Analysis. Use once `artifacts` has identified the work as a Design Doc, or the user names one of these three directly (e.g. "save this plan", "write a spec for X", "analyze the risk of Y").
---

# Design Docs

A Design Doc is work-shaping, not lasting reference — see [GLOSSARY.md](../../../GLOSSARY.md) for the full definition. Pick the leaf folder by what's left when the doc is written:

- **Plan**: a plan-mode plan, saved once the user approves it. → `plans/`
- **Spec**: defines remaining work as `- [ ] #todo` checkboxes. → `specs/`
- **Analysis**: a report or recommendation with no remaining steps of its own. → `analyses/`

## Steps

1. **Number it.** Scan the leaf folder for the highest `NNNN-` prefix; use the next integer, 4 digits, followed by a slug: `NNNN-slug.md`.
2. **Set frontmatter**: `type: design-doc`, `subtype: spec|plan|analysis`, `status: draft|active|done|superseded`, `created: <today>`, `project: <Project folder name, or "grimoire" at vault root>`.
3. **Specs only**: every remaining step is its own `- [ ] #todo` line. A step already done is a plain checked box, not a `#todo` — the tag marks work still ahead, not history.
4. **Link it**: append a relative Markdown link (`[title](NNNN-slug.md)`) to the leaf folder's `moc.md` — see [obsidian-cli](../obsidian-cli/SKILL.md) for how.
5. **Write it** to the [writing standard](../../../CLAUDE.md): readable by a mid-level engineer, dense terms glossed on first use. Point at [GLOSSARY.md](../../../GLOSSARY.md) for vault vocabulary instead of redefining it.

Done when the file exists at its numbered path with full frontmatter and the leaf `moc.md` links it.
