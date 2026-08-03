# Elixpo Open Source

The Next.js frontend for `opensource.elixpo.com`: a platform for running open-source competitions, mentorship programs, bounties, and sustained initiatives.

## Local development

Requirements: Node.js 20+, npm, and SOPS for secret management.

```bash
cp .env.example .env.local
npm install
npm run dev
```

The app runs at `http://localhost:3000`.

## Environment and SOPS

- `.env.example` documents every expected variable and is safe to commit.
- `.env.local` contains plaintext developer values and is gitignored.
- `.env` is the committed, SOPS-encrypted shared environment file.
- `.sops.yaml` contains the team's public age recipients; private keys never enter the repository.

```bash
npm run env:decrypt   # .env -> .env.local
npm run env:encrypt   # .env.local -> .env
```

Server secrets are accessed through `requireServerEnv` in `lib/env.ts`, which fails clearly when a required value is absent. Only `NEXT_PUBLIC_*` values may be imported into client code.

## Current scope

This kick-start includes the public landing page, responsive navigation, workspace preview, SEO routes, environment contract, and SOPS workflow. The next implementation slice is Elixpo identity plus GitHub App onboarding.
