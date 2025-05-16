# Login Auth Template

This is a modern authentication template built with Next.js and shadcn/ui. It includes login and registration pages styled with Tailwind CSS and uses Zustand for state management.

## Features

- Login and registration pages with form validation using React Hook Form and Zod.
- Client-side state management with Zustand.
- Responsive and accessible UI components.
- Dark mode support.
- Button colors customized to #212735 as per user request.

## Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd login-auth-template
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

## Project Structure

- `src/app/page.tsx`: Login page (root route).
- `src/app/auth/register/page.tsx`: Registration page.
- `src/components/auth/login-form.tsx`: Login form component.
- `src/components/auth/register-form.tsx`: Registration form component.
- `src/lib/store.ts`: Zustand store for authentication state.
- `src/app/layout.tsx`: Root layout with global styles and fonts.

## Customization

- Button colors are set to `#212735` with hover effects.
- Forms use React Hook Form and Zod for validation.
- Tailwind CSS is used for styling.

## Notes

- The app uses client-side rendering for forms to avoid hydration errors.
- ESLint warnings about `any` types in form components can be addressed with stricter typing if needed.

## License

MIT License
