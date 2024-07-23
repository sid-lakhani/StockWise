import Contact from "@/components/landing_page/Contact";
import Features from "@/components/landing_page/Features";
import Footer from "@/components/landing_page/Footer";
import GetStarted from "@/components/landing_page/GetStarted";
import Header from "@/components/landing_page/Header";
import Intro from "@/components/landing_page/Intro";

export default function Home() {
  return (
    <main>
      <Header />
      <Intro />
      <Features />
      <GetStarted />
      <Contact />
      <Footer />
    </main>
  );
}
