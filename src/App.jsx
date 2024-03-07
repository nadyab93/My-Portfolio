import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Certifications from "./components/Certifications"; // Import Certifications component

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Certifications /> {/* Include Certifications component */}
      <Work />
      <Contact />
    </div>
  );
}

export default App;