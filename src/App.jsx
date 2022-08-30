import Navbar from "./components/Navbar";
import "./App.css";
import Container from "./components/Container";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <AboutMe/>
        <Projects/>
        <Contact/>
      </Container>
    </>
  );
}

export default App;
