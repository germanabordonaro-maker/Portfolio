import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Work } from "./sections/Work";
import { Services } from "./sections/Services";
import { Approach } from "./sections/Approach";
import { Contact } from "./sections/Contact";

export default function App() {
  return (
    <>
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-ink focus:px-4 focus:py-2 focus:text-ivory"
      >
        Vai ai contenuti
      </a>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Work />
        <Services />
        <Approach />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
