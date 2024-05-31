import React from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Services from "./components/services/Services";
import Skills from "./components/skills/Skills";
import Contact from "./components/contact/Contact";
import ContactForm from "./components/contactForm/ContactForm2";
import Footer from "./components/footer/Footer";
import { HashRouter, Route, Switch } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
library.add(fab, faCode);

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Switch>
          <Route exact path="/contactForm" component={ContactForm} />
          <Route>
            <Navbar />
            <Hero />
            <About />
            <Services />
            <Projects />
            <Skills />
            <Contact />
            <Footer />
          </Route>
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
