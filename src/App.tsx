import Layout from './components/layout/Layout';
import Hero from './components/sections/Hero';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Certifications from './components/sections/Certifications';
import Contact from './components/sections/Contact';

function App() {
  return (
    <Layout>
      <Hero />
      <Experience />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
    </Layout>
  );
}

export default App;
