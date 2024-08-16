import WeddingScroll from "@/components/WeddingScroll";
import GoogleAnalytics from "@/components/GoogleAnalytics";

export default function Home() {
  return (
    <>
      {/* Add GoogleAnalytics component here */}
      <GoogleAnalytics trackingId="G-3F9MPE4K7V" />

      {/* Existing content */}
      <WeddingScroll />
    </>
  );
}
