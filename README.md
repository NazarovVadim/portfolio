# Фуллстак-разработчик

Адаптивное портфолио фуллстак-разработчика на React, TypeScript, Vite, Tailwind CSS, Framer Motion и Lucide React.

https://nazarovvadim.github.io/portfolio

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
- `public/assets/` — локальные изображения проектов, авторские SVG-карточки и шрифты

## Asset traceability

`src/data/assetSources.ts` хранит исходные URL визуальных материалов и локальные пути. Двенадцать изображений проектов — локальные скриншоты сайтов `sootechestvenniki-rf.ru`, `crism-prometey.ru`, `командор-авто.рф` и `marki-sng.ru`. Marquee полностью состоит из 21 локальной SVG-композиции о fullstack-разработке, интеграциях и продуктовой инженерии; проектные скриншоты в нём не используются. Старые MotionSites-источники помечены в manifest как `retired`, а их тяжёлые GIF-файлы удалены. Рантайм не загружает изображения со сторонних доменов.

Kanit сохранён для исходной латинской стилистики. Поскольку Kanit не содержит кириллицу, интерфейс использует локально размещённый Exo 2 с кириллическим и латинским variable-начертанием 300–900; лицензии обоих шрифтов находятся в `public/assets/fonts/`.

## Настройка контактной формы

Укажите `VITE_CONTACT_FORM_ENDPOINT` в локальном `.env` — это должен быть HTTPS endpoint, принимающий POST-запрос формы. До настройки реального обработчика кнопка отправки остаётся отключённой.

Кнопки проектов ведут на реальные сайты, указанные в `src/data/projects.ts`. Блок отзывов использует демонстрационные тексты из `src/data/reviews.ts`, и каждая карточка явно помечена как демо.
