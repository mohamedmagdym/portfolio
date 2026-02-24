import Aboutus from "./componantes/Aboutus";
import Contact from "./componantes/Contact";
import Footer from "./componantes/Footer";
import Home from "./componantes/Home";
import BottomNav from "./componantes/Nav";
import Projects from "./componantes/Projects";
import ServicesCards from "./componantes/Services";
import Skills from "./componantes/Skills";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster position="top-right" />
      <BottomNav />
      <Home />
      <Aboutus />
      <Skills />
      <ServicesCards />
      <Projects />
      <Contact />
      <Footer/>
    </>
  );
}

export default App;
