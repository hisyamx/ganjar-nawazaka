import "./globals.css";

import type { Metadata, Viewport } from "next";

// import { PretendardFont } from "@/style/fonts";
import { JakartaFont } from "@/style/fonts";
import { ToastProvider } from "@/components/toast/ToastProvider";

export const metadata: Metadata = {
  title: "Ganjar & Nawazaka - Wedding Invitation from Baseec - Wedding app♡",
  description:
    "Wedding Invitation Ganjar & Nawazaka Sabtu, 14 September, jam 7 pagi Indonesia",
  openGraph: {
    type: "website",

    title: "Ganjar & Nawazaka - Wedding Invitation from Baseec - Wedding app♡",
    locale: "id_ID",
    description:
      "Wedding Invitation Ganjar & Nawazaka Sabtu, 14 September, jam 7 pagi Indonesia",
    images: [
      {
        // url: "https://cdn.jsdelivr.net/gh/Hal-ang/wedding_CDN_repo@master/sns.png", // Must be an absolute URL
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
  userScalable: false
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={
          JakartaFont.className + " text-black font-normal relative"
        }
      >
        <ToastProvider>{children}</ToastProvider>

        <div id="portal" className="relative"></div>
      </body>
    </html>
  );
}
