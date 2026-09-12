import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import { CursorTrail } from "./components/CursorTrail";
import { ServicePage } from "./components/ServicePage";
import { HomePage } from "./pages/Home";
import { NotFoundPage } from "./pages/NotFound";
import { getServiceBySlug } from "./data/services";
import { useRouter } from "./lib/router";

function App() {
  const { pathname } = useRouter();
  const slug = pathname === "/" ? "" : pathname.slice(1);
  const service = slug ? getServiceBySlug(slug) : undefined;

  let content;
  if (pathname === "/") {
    content = <HomePage />;
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
