import "./globals.css";
import type { Metadata } from "next";
import { Provider } from "@/components/provider";

import localFont from "next/font/local";

const spaceMono = localFont({
  src: [
    {
      path: "../public/fonts/space-mono/SpaceMono-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/space-mono/SpaceMono-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/space-mono/SpaceMono-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/space-mono/SpaceMono-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
});

export const metadata: Metadata = {
  title: "Priyanshu",
  generator: "Next.js",
  applicationName: "Gupta's info",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Next.js",
    "React",
    "JavaScript",
    "Artist",
    "Developer",
    "Biography",
  ],
  authors: [{ name: "Priyanshu", url: "https://instagram.com/priyansxu_gupta" }],
  creator: "Priyanshu",
  publisher: "Priyanshu",
  alternates: {},
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://priyanshu.is-a.dev"),
  openGraph: {
    title: "Priyanshu",
    description: "Shadowed soul from world unknown.",
    url: "https://priyanshu.is-a.dev",
    siteName: "Priyanshu",
    images: [
      {
        url: "https://priyanshu.is-a.dev/dark.jpg",
        width: 800,
        height: 600,
      },
      {
        url: "https://priyanshu.is-a.dev/dark.jpg",
        width: 1800,
        height: 1600,
        alt: "Developer// Designer//",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${spaceMono.className}`}>
        <Provider attribute="class" defaultTheme="system" enableSystem>
          <main
            className={`text-zinc-700 bg-white dark:text-zinc-400 dark:bg-black`}
          >
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
}
