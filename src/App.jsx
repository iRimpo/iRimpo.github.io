import { BrowserRouter } from 'react-router-dom';
import {About, Contact, Cursor, Experience, Feedbacks, Hero, Navbar, Playbutton, Tech, Works, StarsCanvas } from './components';


function App () {
  return (
    <BrowserRouter>
  
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Cursor />
          <Navbar />
          <Hero />
          <Playbutton />
        </div>
        <About />
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
