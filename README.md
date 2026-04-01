# Claude Code Atlas

Public-facing Atlas app for exploring Claude Code as a terminal-native agent runtime.

## Routes

- `/` cinematic landing page and war-room thesis
- `/deep-cuts` hidden secrets, buried bets, and codebase gems
- `/control-plane` the agent operating system hidden inside the CLI
- `/futures` product archaeology and forked futures
- `/xray` repository structure, hotspot, and scale analysis
- `/safety` permission and execution-safety story
- `/compare/claw-code` runtime artifact versus parity scaffold

## Local Development

```bash
npm install
npm run dev
```

The app ships with a checked-in snapshot of atlas data under `data/atlas/`.

## Preview The Static Export

```bash
npm run build
npm run preview
```

## Refresh Data

If the source analysis repo changes, refresh the JSON snapshot:

```bash
npm run sync:data
```

You can override the source path with `ATLAS_SOURCE_DATA_DIR=/absolute/path`.

## Deployment

A GitHub Actions workflow in `.github/workflows/deploy.yml` builds and deploys the static export to GitHub Pages on every push to `main`.
