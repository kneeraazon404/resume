// app/layout.tsx
import './globals.css';
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: {
    template: '%s | Resume',
    default: 'Resume - Nirajan Karki',
  },
  description: 'Senior Python Developer and Full-Stack Engineer with 7+ years of experience in Python, Django, FastAPI, React, and Next.js. View my professional resume and portfolio.',
  keywords: ['Nirajan Karki', 'Resume', 'Python Developer', 'Full-Stack Engineer', 'Django', 'FastAPI', 'React', 'Next.js', 'AWS', 'AI', 'Machine Learning'],
  authors: [{ name: 'Nirajan Karki', url: 'https://kneeraazon.com' }],
  creator: 'Nirajan Karki',
  openGraph: {
    title: 'Resume - Nirajan Karki',
    description: 'Senior Python Developer and Full-Stack Engineer. Expert in building scalable web apps and AI solutions.',
    url: 'https://kneeraazon.com',
    siteName: 'Nirajan Karki Resume',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resume - Nirajan Karki',
    description: 'Senior Python Developer and Full-Stack Engineer. Expert in building scalable web apps and AI solutions.',
    creator: '@kneeraazon', // Assuming a handle, or remove if unknown. Keeping it generic if needed.
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-96x96.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body suppressHydrationWarning={true} className="bg-[#121212]">
        {children}
      </body>
    </html>
  );
}
