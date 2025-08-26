import type { Metadata } from "next";
import { Geist, Geist_Mono, Sora } from "next/font/google";
import "../styles/index.css";
import Provider from "../context";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://thel.agency/";

export const metadata: Metadata = {
  title: "Thel LLC : A Modern Business Growth Consultancy",
  description:
    "We combine precision marketing, operational streamlining, and digital transformation to help brands like yours find their own way forward.",
  icons: {
    icon: [{ rel: "icon", url: "/assets/images/favicon/favicon-160x110.webp", sizes: "160x110" }],
    apple: "/assets/images/favicon/apple-icon.png",
  },
  openGraph: {
    title: "Thel LLC : A Modern Business Growth Consultancy",
    description:
      "We combine precision marketing, operational streamlining, and digital transformation to help brands like yours find their own way forward.",
    url: `${siteUrl}`,
    siteName: "Your Website Name",
    images: [`${siteUrl}/assets/images/og-image.webp`], //recomened sizes 1200x630, 1080 × 566, 600 × 315 | aspect ratio 1.91:1
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thel LLC : A Modern Business Growth Consultancy",
    description:
      "We combine precision marketing, operational streamlining, and digital transformation to help brands like yours find their own way forward.",
    images: [`${siteUrl}/assets/images/og-image.webp`], //recomened sizes 1200x630, 1080 × 566, 600 × 315 | aspect ratio 1.91:1
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XV7PDQFX1S"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XV7PDQFX1S');
            `,
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} ${sora.variable} antialiased`}>
        <Provider>
          {children}
          <Toaster />
        </Provider>
      </body>
    </html>
  );
}
