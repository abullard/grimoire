---
name: diataxis
description: Scaffold a Diataxis Doc — tutorial, how-to, reference, or explanation. Use once `artifacts` has identified the work as lasting documentation, or the user names one of these four directly (e.g. "write a how-to for X", "add a reference doc for Y").
---

# Diataxis Docs

A Diataxis Doc is lasting documentation — see [GLOSSARY.md](../../../GLOSSARY.md). Pick the leaf folder by what the reader needs:

- **Tutorial**: learning by doing, for someone new to this. → `tutorials/`
- **How-to**: a goal, for someone who already has the basics. → `how-to/`
- **Reference**: a dry, complete lookup. → `reference/`
- **Explanation**: understanding why something is the way it is. → `explanation/`

## Steps

1. **Number it**: scan the leaf folder for the highest `NNNN-` prefix, use the next integer, 4 digits: `NNNN-slug.md`.
2. **Set frontmatter**: `type: diataxis`, `subtype: tutorial|how-to|reference|explanation`, `status: draft|active|done|superseded`, `created: <today>`, `project: <Project folder name, or "grimoire" at vault root>`.
3. **Link it**: append a relative Markdown link to the leaf folder's `moc.md` — see [obsidian-cli](../obsidian-cli/SKILL.md) for how.
4. **Write it** to the [writing standard](../../../CLAUDE.md): readable by a mid-level engineer, dense terms glossed on first use.

## Pending

There's no house style yet for how each of the four types should actually read — the user has their own Diataxis prompt to paste in here (`#todo` in [the foundation spec](../../../artifacts/design-docs/specs/0001-grimoire-foundation.md)). Until it lands, the steps above are the whole skill: file it right, number it, link it, write it plainly. If the shape of a specific doc is unclear, ask rather than guessing a convention that hasn't been set.
