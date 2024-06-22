import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Education from "./pages/Education/Education";
import Projects from "./pages/Projects/Projects";
import Techstack from "./pages/Techstack/Techstack";
import WorkExp from "./pages/WorkExp/WorkExp";
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from "./context/ThemeContext";
import MobileNav from "./components/MobileNav/MobileNav";
import './App.css';

function App() {
  const [theme]=useTheme();
  return (
    <>
    <div id={theme}>
      <MobileNav/>
    <Layout/>
    <div className="container">
      <About/>
      <Education/>
      <Techstack/>
      <Projects/>
      <WorkExp/>
      <Contact/>
    </div>
    
      
    
    <div className="footer bg-black text-white p-20">
   
      <h6 className="text-center mb-0 ml-5em">
      Made by Simran &copy; 
      </h6>
      
    </div>
    
    </div>
    <ScrollToTop smooth color="#f29f67" style={{backgroundColor:'#1e1e2c', borderRadius:'80px' }} className="scrollTop" />
    
    </>
  );
}

export default App;
