import Header from "@/components/Header";
import Contact from "@/components/landing_page/Contact";
import Features from "@/components/landing_page/Features";
import Intro from "@/components/landing_page/Intro";

export default function Home() {
  return (
    <main>
      <Header />
      <Intro />
      <Features />
      <Contact />
    </main>
  );
}
