import { BrowserRouter } from 'react-router-dom';
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  BallCanvas,
} from './components';
import Tech2 from './components/Tech2';
import { useEffect, useState } from 'react';
import Courses from './components/Courses';
import Contact2 from './components/Contact2';
const App = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width:700px)');
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (e) => {
      setIsMobile(e.matches);
    };
    mediaQuery.addEventListener('change', handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        {isMobile ? <Tech2 /> : <Tech />}
        <Courses />
        <Works />
        <Experience />
        {/* <Feedbacks /> */}
        <div className='relative z-0'>
          <Contact2 />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
