---
name: artifacts
description: Decide what kind of Artifact a write-up is before producing it. Use whenever about to write something meant to outlast this turn — a plan, spec, analysis, tutorial, how-to, reference, or explanation — and the kind isn't already obvious from how the user asked.
---

# Artifacts

Two kinds of Artifact exist — see [GLOSSARY.md](../../../GLOSSARY.md) for the full definitions:

- **Design Doc** (Spec, Plan, Analysis) — work-shaping, tied to work being done now.
- **Diataxis Doc** (tutorial, how-to, reference, explanation) — lasting documentation, meant to outlive the task that prompted it.

## Deciding

Ask: once this is written, does anything about it change — open `#todo` items to close, a plan to execute, a decision to act on? If yes, it's a Design Doc. If it's just true, meant to be read later by someone who wasn't here for this conversation, it's a Diataxis Doc.

Then hand off — don't scaffold it here:

- Design Doc → invoke [design-docs](../design-docs/SKILL.md).
- Diataxis Doc → invoke [diataxis](../diataxis/SKILL.md).

Both handle numbering, frontmatter, filing, and MOC linking; this skill's only job is the fork above.

## Location

File it under `<Project>/artifacts/` when the work is about that Project's Repo, or vault-root `artifacts/` when it's about the Grimoire itself.
