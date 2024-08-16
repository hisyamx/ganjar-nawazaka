import "./globals.css";
import type { Metadata, Viewport } from "next";
import { JakartaFont } from "@/style/fonts";
import { ToastProvider } from "@/components/toast/ToastProvider";
import InspectorWarning from "@/components/InspectorWarning";
import ScreenshotWarning from "@/components/ScreenshotWarning";
import Script from "next/script";
import { useEffect } from "react";
import { useRouter } from "next/router";
// import Head from "next/head";

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

const GA_TRACKING_ID = "G-3F9MPE4K7V"; // Replace with your actual Google Analytics Tracking ID

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      if (typeof window !== "undefined") {
        window.gtag("config", GA_TRACKING_ID, {
          page_path: url,
        });
      }
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <html lang="id">
      <body
        className={JakartaFont.className + " text-black font-normal relative"}
      >
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
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
