// app/layout.tsx
import './globals.css';
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: "Nirajan\'s Resume",
  description: 'Nirajan Karki\'s Resume',

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
