
import localFont from "next/font/local";
import "./globals.css";
import { icons } from 'lucide-react';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "HRM System",
  description: "Job Postings and Application",
 icons:{
  icon: [
    '/favicon.ico?v=4',
  ],
  apple: [
    '/apple-touch-icon.png?v=4',
  ],
  shortcut: [
    '/apple-touch-icon.png',
  ],
},
 menifest: '/site.webmaifest'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
