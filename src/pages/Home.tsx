import { Hero } from "../components/Hero";
import { LogoMarquee } from "../components/LogoMarquee";
import { Services } from "../components/Services";
import { About } from "../components/About";
import { HomeCaseStudies } from "../components/HomeCaseStudies";
import { Process } from "../components/Process";
import { FAQ } from "../components/FAQ";
import { Contact } from "../components/Contact";
import { SITE } from "../data/site";
import { useDocumentHead } from "../lib/head";

export function HomePage() {
  useDocumentHead({
    title: SITE.homeTitle,
    description: SITE.homeDescription,
    canonical: `${SITE.url}/`,
    ogImageAlt: SITE.homeOgImageAlt,
  });

  return (
    <>
      <Hero />
      <LogoMarquee />
      <Services />
      <HomeCaseStudies />
      <About />
      <Process />
      <FAQ />
      <Contact />
    </>
  );
}
