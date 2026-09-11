import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import About from "./component/About";
import Skills from "./component/Skill";
import Projects from "./component/project";
import Contact from "./component/Contact";
import Footer from "./component/Footer";

import "./App.css";

function App() {

    return (
        <div>
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
             <Footer />
        </div>
    );
}

export default App;