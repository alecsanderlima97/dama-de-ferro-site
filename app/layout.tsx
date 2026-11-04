import type { Metadata, Viewport } from 'next';
import './globals.css';

const title = 'Dama de Ferro Academia';
const description = 'Força, disciplina e pertencimento. Conheça a Dama de Ferro Academia.';

const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  icons: { icon: '/favicon.svg' },
  openGraph: { title, description, type: 'website', locale: 'pt_BR', images: [{ url: '/dama-de-ferro.jpeg', alt: title }] },
  twitter: { card: 'summary_large_image', title, description, images: ['/dama-de-ferro.jpeg'] },
};

export const viewport: Viewport = { themeColor: '#101110' };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
