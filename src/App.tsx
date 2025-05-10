import Layout from './components/layout/Layout';
import Hero from './components/sections/Hero';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';

function App() {
  return (
    <Layout>
      <Hero />
      <Experience />
      <Projects />
      <Contact />
    </Layout>
  );
}

export default App;
