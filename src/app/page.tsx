import Contact from "@/components/landing_page/Contact";
import Features from "@/components/landing_page/Features";
import Footer from "@/components/landing_page/Footer";
import GetStarted from "@/components/landing_page/GetStarted";
import Header from "@/components/landing_page/Header";
import Intro from "@/components/landing_page/Intro";
import MoreFeatures from "@/components/landing_page/MoreFeatures";

export default function Home() {
  return (
    <main>
      <Header />
      <Intro />
      <Features />
      <MoreFeatures />
      <GetStarted />
      <Contact />
      <Footer />
    </main>
  );
}
