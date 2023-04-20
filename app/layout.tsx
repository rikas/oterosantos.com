import './globals.css';

import { Navbar, Sidebar } from '@components/layout';
import { Providers } from './providers';

export const metadata = {
  title: 'Ricardo Otero',
  description: 'Ricardo Otero personal website',
  creator: 'Ricardo Otero',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'cyan' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-wotfard overflow-auto">
        <Providers>
          <div className="bg-zinc-100 dark:bg-dark-900 min-h-screen pt-8">
            <div className="max-w-5xl mx-auto flex h-16 sticky left-0 top-0">
              <header className="grow bg-zinc-100 dark:bg-dark-900">
                <Navbar />
              </header>
            </div>

            <div className="bg-white dark:bg-dark-800 flex flex-row max-w-5xl mx-auto shadow-md">
              {children}
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
