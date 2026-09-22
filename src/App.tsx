import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import { CursorTrail } from "./components/CursorTrail";
import { ServicePage } from "./components/ServicePage";
import { HomePage } from "./pages/Home";
import { NotFoundPage } from "./pages/NotFound";
import { ContactPage } from "./pages/Contact";
import { PrivacyPage } from "./pages/Privacy";
import { TermsPage } from "./pages/Terms";
import { CaseStudiesPage } from "./pages/CaseStudies";
import { CaseStudyPage } from "./pages/CaseStudy";
import { CASE_STUDIES_PATH, getCaseStudyBySlug } from "./data/caseStudies";
import { getServiceBySlug } from "./data/services";
import { useRouter } from "./lib/router";

function App() {
  const { pathname } = useRouter();
  const slug = pathname === "/" ? "" : pathname.slice(1);
  const service = slug ? getServiceBySlug(slug) : undefined;
  const caseStudy = pathname.startsWith(`${CASE_STUDIES_PATH}/`)
    ? getCaseStudyBySlug(pathname.slice(CASE_STUDIES_PATH.length + 1))
    : undefined;

  let content;
  if (pathname === "/") {
    content = <HomePage />;
  } else if (pathname === "/contact") {
    content = <ContactPage />;
  } else if (pathname === "/privacy") {
    content = <PrivacyPage />;
  } else if (pathname === "/terms") {
    content = <TermsPage />;
  } else if (pathname === CASE_STUDIES_PATH) {
    content = <CaseStudiesPage />;
  } else if (caseStudy) {
    content = <CaseStudyPage study={caseStudy} />;
  } else if (service) {
    content = <ServicePage service={service} />;
  } else {
    content = <NotFoundPage />;
  }

  return (
    <div className="min-h-screen bg-ink text-bone">
      <CursorTrail />
      <Navbar />
      <main>{content}</main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
