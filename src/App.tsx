import { ToastContainer } from "react-toastify";
import ContactInfo from "./components/ContactInfo";
import HeroTerminal from "./components/HeroTerminal";
import Projects from "./components/Projects";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-back",
    });
  }, []);

  return (
    <main className=" min-h-screen bg-custom text-white overflow-x-hidden">
      <section>
        <HeroTerminal />
      </section>

      <section className=" py-12 md:py-16">
        <Projects />
      </section>

      <footer className=" py-20 px-4">
        <ContactInfo />
      </footer>
      <ToastContainer />
    </main>
  );
}

export default App;
