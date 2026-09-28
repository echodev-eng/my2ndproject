# my2ndproject

Vite + React + TypeScript app. Run `npm install`, then `npm run dev` / `npm run build` / `npm run lint`.

## UI components

Build all interactive UI with [React Aria Components](https://react-spectrum.adobe.com/react-aria/) (`react-aria-components`). Don't hand-roll buttons, inputs, dialogs, menus, etc. with raw HTML elements.

- Wrap each RAC component once in `src/components/` (see `Button.tsx`, `TextField.tsx`) with its own CSS file, and import the wrapper from app code rather than the raw RAC component.
- Merge caller classNames with `composeRenderProps` so render-prop classNames still work.
- Style states with RAC's data attributes (`[data-hovered]`, `[data-pressed]`, `[data-focus-visible]`, `[data-invalid]`, `[data-disabled]`) instead of `:hover`/`:focus`.
- Use RAC's `Form` + `FieldError` for validation.
