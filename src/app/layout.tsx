import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://stackfam.dyve.online"), // Replace with your production domain
  title: {
    default: "StackFam — GitHub Manager for Mobile Developers",
    template: "%s | StackFam",
  },
  description:
    "StackFam is a powerful mobile-first GitHub manager that lets you browse repositories, edit code, manage files, commit changes, deploy websites, and publish projects from anywhere.",

  keywords: [
    "StackFam",
    "GitHub Manager",
    "GitHub Mobile",
    "Git Client",
    "Code Editor",
    "Repository Manager",
    "Developer Tools",
    "Deploy Websites",
    "GitHub IDE",
    "Netlify",
    "Vercel",
    "GitHub Actions",
    "Mobile Coding",
    "Static Site Generator",
    "CMS",
    "SEO",
  ],

  authors: [
    {
      name: "StackFam",
    },
  ],

  creator: "StackFam",
  publisher: "StackFam",

  applicationName: "StackFam",

  category: "Developer Tools",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  openGraph: {
    title: "StackFam — GitHub Manager for Mobile Developers",
    description:
      "Manage GitHub repositories, edit code, upload files, deploy websites, and build projects directly from your phone.",
    url: "https://stackfam.dyve.online",
    siteName: "StackFam",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "StackFam",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "StackFam — GitHub Manager",
    description:
      "The complete developer stack, in your pocket.",
    images: ["/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  alternates: {
    canonical: "https://stackfam.dyve.online",
  },

  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-black text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}