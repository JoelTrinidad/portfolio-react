import Navbar from "./components/Navbar";
import "./App.css";
import Container from "./components/Container";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <AboutMe/>
        <Projects></Projects>
      </Container>
    </>
  );
}

export default App;
