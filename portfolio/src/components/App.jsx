import { useState, useEffect } from 'react';
import Header from './header/Header.jsx';
import Hero from './hero/Hero.jsx';
import About from './about/About.jsx';

function App() {
  const [windowDimension, setWindowDimension] = useState(null);

  useEffect(() => {
    setWindowDimension(window.innerWidth);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowDimension(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowDimension <= 640;

  return (
    <>
      <Header isMobile={isMobile} />
      <main>
        <Hero />
        <About />
      </main>
    </>
  );
}

export default App;
