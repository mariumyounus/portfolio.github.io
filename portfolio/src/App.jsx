import "./App.scss"
import Navbar from "./components/navbar/Navbar";
import Test from "./test";
import Hero from "./components/hero/hero"
import Parallax from "./components/parallax/parallax";
import Services from "./components/services/services";
import Portfolio from "./components/portfolio/portfolio";
import Contact from "./components/contact/contact";
import Cursor from "./components/cursor/cursor";
const App = () => {
  return <div>
  <Cursor/>
    <section  id="Homepage"><Navbar/>
    <Hero/></section>
    <section id="Services"><Parallax type="services"/></section>
    <section><Services/></section>
    <section id="Porfolio"><Parallax type="portfolio"/></section>
    <Portfolio/>
    
    <section id="Contact"><Contact/></section>
    

  </div>;
};

export default App;