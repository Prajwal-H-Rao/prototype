## Prototype

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build (runs `npm run check` automatically via `prebuild`):

```bash
npm run build
```

## Scripts

- `npm run lint`: lint + formatting rules (ESLint)
- `npm run format`: auto-fix with ESLint
- `npm run check`: runs `lint` (used by `prebuild`)

## Structure

- `app/`: routes and layouts (App Router)
- `components/`: shared UI components
- `lib/`: shared utilities
- `hooks/`: shared hooks
- `types/`: shared types
