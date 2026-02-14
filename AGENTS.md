# Agent Guidelines for @rafaremo/links-page

## Build & Development Commands

```bash
# Install dependencies
npm install

# Start development server (localhost:3000)
npm run dev
npm start        # alias for dev

# Production build
npm run build    # outputs to ./dist/

# Preview production build locally
npm run preview
```

**Note**: This project has no test suite configured. No linting or formatting tools (ESLint, Prettier) are set up.

## Project Structure

- `src/pages/` - Astro routes (file-based routing)
- `src/components/` - Svelte components
- `src/layouts/` - Astro layout templates
- `src/content/` - Content collections (blog posts)
- `src/styles/` - Global CSS with Tailwind
- `src/data/` - JSON data files
- `public/` - Static assets (icons, favicons)

## Code Style Guidelines

### Astro Files (.astro)
- Use PascalCase for component names (e.g., `MainLayout.astro`)
- Frontmatter uses `---` delimiters
- Props destructuring preferred: `const { title, description } = Astro.props`
- Use double quotes for imports and attributes
- Component imports use relative paths: `import Component from "../components/Component.svelte"`

### Svelte Components (.svelte)
- Use camelCase for props: `export let perLink`
- Event handlers defined as functions: `function handleClick(event) { ... }`
- Client-side hydration with `client:load` directive
- 2-space indentation

### TypeScript
- Extends `astro/tsconfigs/base` with `strictNullChecks: true`
- Type imports use `type` keyword: `import type { APIRoute } from "astro"`
- Define interfaces/types with PascalCase

### Styling (Tailwind CSS)
- Use Tailwind utility classes exclusively
- Dark mode classes with `dark:` prefix
- Custom component styles in `src/styles/base.css` using `@layer components`
- Font family: `font-mono` for consistent typography

### Naming Conventions
- **Components**: PascalCase (`MainLayout`, `Icon`)
- **Files**: camelCase for configs, PascalCase for components
- **Variables**: camelCase
- **CSS Classes**: kebab-case (Tailwind standard)
- **JSON Keys**: camelCase

### Imports
- Group imports: Astro core → Integrations → Components → Styles → Data
- Use double quotes consistently
- Relative paths for project files

### Error Handling
- Minimal error handling in current codebase
- For API routes, type parameters appropriately
- Use optional chaining for potentially undefined values: `frontmatter?.title`

## Key Dependencies

- **Framework**: Astro v4.16.18
- **UI**: Svelte v5.16.0, TailwindCSS v3.2.7
- **Content**: @astrojs/mdx, @astrojs/sitemap
- **Analytics**: @astrojs/partytown for Google Analytics

## Notes

- Site URL: https://rafa.page/
- No automated testing or CI/CD configured
- Partytown enabled for third-party script offloading
