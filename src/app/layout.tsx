// This file is the root layout for the application, but it is not used for rendering.
// The actual root layout is in src/app/[lang]/layout.tsx.
// This file is required by Next.js to exist.

import '../app/globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
