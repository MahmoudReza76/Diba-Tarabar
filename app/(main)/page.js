import Hero from "@/components/Hero";
import Features from "@/components/Features";
import localFont from "next/font/local";
import LandingBlog from "@/components/LandingBlog";

const iranSans = localFont({
  src: "../../public/fonts/IRANSansXV.woff",
});
const iranSans2 = localFont({
  src: "../../public/fonts/IRANSansXV.woff2",
});
export default function Home() {
  return (
    <main className="h-auto bg-white flex flex-col ">
      <Hero />
      <Features />
      <LandingBlog />
    </main>
  );
}
