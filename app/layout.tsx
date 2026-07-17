import type { Metadata } from "next";
import { Poppins, Share_Tech, Share_Tech_Mono } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

const shareTech = Share_Tech({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-display",
});

const shareTechMono = Share_Tech_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Assembly — student programming club",
  description:
    "A hands-on programming club for students who'd rather ship something than just talk about it.",
};

// Runs before paint so a saved "light" preference applies with no flash.
// Dark is the default theme: no class needed, it's what :root already is.
const themeInitScript = `
try {
  var t = localStorage.getItem('asm-theme');
  if (t === 'light') document.documentElement.classList.add('light');
} catch (e) {}
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${shareTech.variable} ${shareTechMono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
