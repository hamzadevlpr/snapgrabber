import FAQ from "@/components/HomePage/FAQ";
import Hero from "@/components/HomePage/Hero";
import UseOf from "@/components/HomePage/UseOf";

export default function Home() {
  return (
    <>
      <Hero
        title="Download Facebook Reels"
        description="Grab Facebook, Instagram, TikTok, and Twitter videos in Full HD, 2K, or 4K quality instantly. No software required."
        route="/fb-download"
      />
      <UseOf />
      <FAQ />
    </>
  );
}
