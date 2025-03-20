
import "./App.css"; 
import { About } from "./Components/About/About";
import { Contact } from "./Components/Contact/Contact";
import { Experience } from "./Components/Experience/Experience";
import { Hero } from "./Components/Hero/Hero";
import { NavBar } from "./Components/NavBar/NavBar";
import {Projects} from "./Components/Projects/Projects"

function App() {

  return (
    <div className= "App">
      <NavBar/>
      <Hero/>
      <About/>
      <Experience/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default App
