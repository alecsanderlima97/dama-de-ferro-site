import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = { title: 'Dama de Ferro Academia', description: 'Forca, disciplina e pertencimento. Conheca a Dama de Ferro Academia.' };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
