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

## Cloudflare runtime

Production runs as a Cloudflare Worker through the OpenNext adapter. D1 is the authoritative database; KV is limited to cache and best-effort rate-limit counters because KV is eventually consistent.

The committed `wrangler.jsonc` contains placeholder resource IDs. Provision the resources once, then replace the zero IDs with the values returned by Wrangler:

```bash
npx wrangler d1 create opensource-elixpo
npx wrangler kv namespace create CACHE
npx wrangler kv namespace create RATE_LIMITS
npm run cf:typegen
```

Apply and inspect the versioned D1 schema:

```bash
npm run db:migrations:list:local
npm run db:migrate:local
npm run db:migrations:list:remote
npm run db:migrate:remote
```

Remote migrations should only run through the deployment workflow after review. Build and test the Worker runtime with `npm run cf:preview`; deploy with `npm run cf:deploy`.

Production deployment is intentionally manual through the `Deploy Cloudflare Worker` GitHub Actions workflow. Its protected `production` environment must provide `CLOUDFLARE_ACCOUNT_ID` and `CLOUDFLARE_API_TOKEN`. The workflow type-checks, builds, applies pending remote D1 migrations, and only then deploys the Worker.

Bindings available to server-only application code:

- `DB`: contest, membership, GitHub activity, points, invitations, and audit data.
- `CACHE`: disposable computed views and dashboard caches.
- `RATE_LIMITS`: best-effort request quotas; never authorization or payout state.

Use the helpers in `lib/cloudflare.ts` rather than importing runtime globals directly. The initial normalized schema is in `workers/migrations/0001_initial_schema.sql`.

Wrangler commands explicitly disable automatic `.env` loading. The repository's `.env` is SOPS ciphertext and must never be exposed as Worker bindings. Runtime secrets are declared under `secrets.required` and should be uploaded with `wrangler secret put`; CI receives Cloudflare deployment credentials through its secret store.

## Environment and SOPS

- `.env.example` documents every expected variable and is safe to commit.
- `.env.local` contains plaintext developer values and is gitignored.
- `.env` is the committed, SOPS-encrypted shared environment file.
- `.sops.yaml` contains the team's public age recipients; private keys never enter the repository.

```bash
npm run env:decrypt   # .env -> .env.local
npm run env:encrypt   # .env.local -> .env
```

The repository follows the same age recipient and `sops-reencrypt.sh` workflow as the other Elixpo properties. Never edit encrypted values by hand or commit `.env.local`.

Server secrets are accessed through `requireServerEnv` in `lib/env.ts`, which fails clearly when a required value is absent. Only `NEXT_PUBLIC_*` values may be imported into client code.

## Current scope

This kick-start includes the public landing page, responsive navigation, role-aware host panel, contest-creation foundation, domain contracts, SEO routes, environment contract, and SOPS workflow. The next implementation slice is Elixpo identity plus GitHub App onboarding.
