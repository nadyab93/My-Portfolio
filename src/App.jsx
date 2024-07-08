import React from 'react';
import './index.css'; // Importing global styles if needed
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { ThemeProvider } from './context/ThemeContext'; // Import ThemeProvider

function App() {
    return (
        <ThemeProvider>
            <div className="App">
                <Navbar />
                <main>
                    <Home />
                    <About />
                    <Skills />
                    <Certifications />
                    <Projects />
                    <Contact />
                </main>
            </div>
        </ThemeProvider>
    );
}

export default App;


