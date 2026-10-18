# Glossary Map

Where domain vocabulary lives. Two layers, never mixed:

| Scope | File | Covers |
|---|---|---|
| Grimoire (vault-level) | [`GLOSSARY.md`](GLOSSARY.md) | Project, Repo, MOC, Artifact, Session, Sub-agent — words about the vault itself |
| Each Repo | `<Project>/<repo>/GLOSSARY.md` | that codebase's own domain terms |

Repo glossaries are created lazily by [domain-modeling](.agents/skills/domain-modeling/SKILL.md), one per Repo, the first time a term needs pinning down. None exist yet. When one is added, list it below so a Session can find every glossary in the vault without searching:

- `serenityOS/serenity/GLOSSARY.md` — not yet created
- `trellis/trellis/GLOSSARY.md` — not yet created

Repo-level ADRs (`<Project>/<repo>/docs/adr/`) follow the same lazy-creation rule and are not tracked here — `domain-modeling` and each Repo's own `docs/adr/` directory are the source of truth for those.
