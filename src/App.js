
import React from 'react';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Services from './components/services/Services';
import Skills from './components/skills/Skills';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import {BrowserRouter} from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {faCode} from '@fortawesome/free-solid-svg-icons'
library.add(fab,faCode)

function App() {
  
  return (
    <BrowserRouter>
      <div className="App">
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <Projects/>
      <Skills/>
      <Contact/>
      <Footer/>
    </div>
   </BrowserRouter>
  );
}

export default App;

//fotolari degistir. Lorem ipsum lari vakit olursa degistir
//hero fotoyu duzenle
//responsive???nav-ok!others?
//hire me ve contact me yi bir formular a bagla!!!
//icon lari duzenle!!! bagla!
//style.css deki primary color lari duzenle!!!!

