# Jack -- 3D Creator

A responsive single-page 3D creator portfolio built with React, TypeScript, Vite, Tailwind CSS, Framer Motion, and Lucide React.

## Setup

```sh
npm install
npm run dev
```

## Scripts

- `npm run dev` — start Vite development mode
- `npm run build` — strict TypeScript check and production build
- `npm run preview` — preview the production build
- `npm run typecheck` — run TypeScript without emitting files
- `npm run lint` — lint TypeScript and React code
- `npm run format` — check Prettier formatting
- `npm test` — run content-integrity and motion-math tests

## Structure

- `src/sections/` — page sections, including the contact form
- `src/components/motion/` — reveal, magnetic, and animated-text behavior
- `src/components/projects/` — sticky project card
- `src/components/ui/` — shared pill controls
- `src/data/` — typed services, projects, marquee data, and source URL manifest
- `public/assets/` — locally served images, GIF animations, and Kanit fonts

## Asset traceability

`src/data/assetSources.ts` records every exact original visual source URL and its local runtime file. The application renders only local paths, so third-party media hosts are not runtime dependencies. The exact Celestia URL returned `404` during setup; its archived original response was recovered from the Internet Archive. The supplied Skyelite `.gif` URL currently returns PNG bytes (despite an `image/gif` header), which are preserved verbatim.

## Contact form configuration

Set `VITE_CONTACT_FORM_ENDPOINT` in a local `.env` file to the HTTPS endpoint that accepts contact form POST requests. The form remains visible but its submit button is disabled until a real endpoint is configured, so the interface never pretends to deliver a message.

The brief does not provide destinations for any `Live Project` control. Add real URLs through the project `liveUrl` fields when they are available.
