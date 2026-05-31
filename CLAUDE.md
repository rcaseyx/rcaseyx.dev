# rcaseyx.dev — Claude working instructions

## Repo

https://github.com/rcaseyx/rcaseyx.dev

## Branch and commit workflow

Until the first production deploy, push directly to `main`.

Once deployed, switch to the full workflow:
1. `git checkout main`
2. `git pull origin main`
3. `git checkout -b <descriptive-branch-name>`

Ask before committing. Ask separately before pushing. These are two distinct confirmation gates — **pushing triggers a Railway deploy**.

Never push to a branch whose PR has already been merged.

## Architecture

Single Railway service:

- **rcaseyx-dev** — Next.js frontend, deployed from repo root

Pushes to `main` deploy automatically via Railway.

## Running locally

```bash
npm run dev
```

## Environment variables

TBD — add to `.env.local` for local dev; set in Railway dashboard for production.
