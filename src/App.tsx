import Layout from './components/layout/Layout';
import Hero from './components/sections/Hero';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Certifications from './components/sections/Certifications';
import Contact from './components/sections/Contact';
import ResumePrintTemplate from './components/print/ResumePrintTemplate';
import { ThemeContextProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeContextProvider>
      <Layout>
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </Layout>
      <ResumePrintTemplate />
    </ThemeContextProvider>
  );
}

export default App;
