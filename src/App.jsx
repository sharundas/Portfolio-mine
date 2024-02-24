import { BrowserRouter,Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Resume from "./components/Resume";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Contacts from "./components/Contacts";
import Projects from "./components/Projects";
import Footer from "./components/Footer";


function App() {

  return (

   <BrowserRouter>
    <Header/>
    
    <Home/>
     <About/>
     <Resume/>
     <Services/>
     <Skills/>
     
     <Contacts/>
     <Projects/>
     <Footer/>
   </BrowserRouter>
  )
}

export default App
