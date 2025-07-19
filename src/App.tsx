import { ToastContainer } from "react-toastify";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ContactInfo from "./components/contact-info";
import HeroTerminal from "./components/hero-terminal";
import Projects from "./components/lists-projects";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-back",
    });
  }, []);

  return (
    <main className="min-h-screen bg-custom text-white overflow-x-hidden">
      <section>
        <HeroTerminal />
      </section>

      <section className="py-12 md:py-16">
        <Projects />
      </section>

      <footer className="py-20 px-4 bg-gray-900/50 backdrop-blur-sm">
        <ContactInfo />
      </footer>
      <ToastContainer />
    </main>
  );
}

export default App;
