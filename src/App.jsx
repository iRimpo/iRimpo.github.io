import { BrowserRouter } from 'react-router-dom';
import {About, AudioPlayer, Contact, Cursor, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from './components';

function App () {
  return (
    <BrowserRouter>
  
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Cursor />
          <Navbar />
          <Hero />
        </div>
        <About />
        <AudioPlayer />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>

      </div>
    </BrowserRouter>
  )
}

export default App
