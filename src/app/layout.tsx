// src/app/layout.tsx

import "./globals.css";
import type { Metadata, Viewport } from "next";
import { JakartaFont } from "@/style/fonts";
import { ToastProvider } from "@/components/toast/ToastProvider";
import InspectorWarning from "@/components/InspectorWarning";
import ScreenshotWarning from "@/components/ScreenshotWarning";
import Script from "next/script"; // Import Script from next/script

export const metadata: Metadata = {
  title: "Ganjar & Nawazaka - Wedding Invitation from Baseec♡",
  description:
    "Wedding Invitation Ganjar & Nawazaka Sabtu, 14 September, jam 7 pagi Indonesia",
  openGraph: {
    type: "website",
    title: "Ganjar & Nawazaka - Wedding Invitation from Baseec♡",
    locale: "id_ID",
    description:
      "Wedding Invitation Ganjar & Nawazaka Sabtu, 14 September, jam 7 pagi Indonesia",
    images: [
      {
        url: "", // Must be an absolute URL
        width: 720,
        height: 720,
      },
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <head>
        {/* Google Tag (gtag.js) */}
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-3F9MPE4K7V`}
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-3F9MPE4K7V');
          `}
        </Script>
      </head>
      <body
        className={JakartaFont.className + " text-black font-normal relative"}
      >
        <ToastProvider>
          <InspectorWarning />
          <ScreenshotWarning />
          {children}
        </ToastProvider>
        <div id="portal"></div>
      </body>
    </html>
  );
}
