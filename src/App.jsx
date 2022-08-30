import Navbar from "./components/Navbar";
import "./App.css";
import Container from "./components/Container";
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <AboutMe/>
      </Container>
    </>
  );
}

export default App;
