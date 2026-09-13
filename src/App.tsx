import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-pink-light font-sans text-ink">
      <div className="fixed inset-0 -z-10 bg-stripes" />
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
