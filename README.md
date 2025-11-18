# Grimoire

## Core Concept

- create a `/docs` folder, and place consistently structured Markdown logs in here
  - Architectual Design Records
  - Backlog Refinement notes (AI transcription?)
  - Pull Request Summaries (template human defined & summary AI generated)
  - Technical Documentation (Diátaxis format)
  - etc.
- embed these documents into [chromaDb](https://www.trychroma.com/)
- expose a GET endpoint via HapiJS that semantically queries ChromaDB for your context and returns the filenames of the context files to supply with your Prompt.
- this API sits live with the rest of your infrastructre, similiar to an Observability Stack
  - I think this means `/docs` would need to live in some kind of storage (S3, etc)?
    - no deploy necessary to update, just write new docs to storage

## Nice-to-Haves

- PR summaries auto-generated via Github Actions on Merge to `main`
- `chromaDB` query happens automatically every time you prompt Copilot/Codex/Claude to supply proper context
- MCP server opened once `/docs` are robust enough.
  - cross functional communication with other teams can start with the MCP server
  - request a feature via MCP and have Agents open a PR for devs to review
  - linked with JIRA MCP, Azure DevOps MCP, etc. to explode context on stories for backlog refinement?
  - what else?
