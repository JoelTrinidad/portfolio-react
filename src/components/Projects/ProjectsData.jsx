import chakraImage from "../../assets/images/techs/chakra.png";
import reactBootstrapImage from "../../assets/images/techs/react-bootstrap.png";
import reactRouterdomImage from "../../assets/images/techs/react-router-dom.png";
import sassImage from "../../assets/images/techs/sass.png";
import reactImage from "../../assets/images/techs/react.png";
import semanticImage from "../../assets/images/techs/semantic.png";
import styledImage from "../../assets/images/techs/styled-logo.png";
import viteImage from "../../assets/images/techs/vite.png";
import cssImage from "../../assets/images/techs/css.png";
import simpsonProject from "../../assets/images/projects/simpson.jpg";
import dymamicFormProject from "../../assets/images/projects/dynamic.jpg";
import gasolineraProject from "../../assets/images/projects/gasolinera.jpg";
import marvelProject from "../../assets/images/projects/marvel.jpg";
import rickMorty from "../../assets/images/projects/rick-morty.jpg";
import tareasProject from "../../assets/images/projects/todo.jpg";

export const projectsPortfolio = [
  {
    title: "Rick & Morty API",
    image: rickMorty,
    techs: [
      { name: "React", src: reactImage },
      { name: "CSS", src: cssImage },
    ],
    description:
      "A simple API to search for characters and episodes from the Rick and Morty series.",
    repository: "https://github.com/JoelTrinidad/Rick-and-morty",
    website: "https://rick-morty-jt.netlify.app",
  },
  {
    title: "Lists To do",
    image: tareasProject,
    techs: [
      { name: "Vite", src: viteImage },
      { name: "React ", src: reactImage },
      { name: "Semantic UI React", src: semanticImage },
    ],
    description:
      "Application created with React JS and Semantic UI to make a list of tasks where you can add or remove it.",
    repository: "https://github.com/JoelTrinidad/To-do-list",
    website: "https://to-do-list-jt.netlify.app",
  },
  {
    title: "Simpson API",
    image: simpsonProject,
    techs: [
      { name: "Vite", src: viteImage },
      { name: "React JS ", src: reactImage },
      { name: "Styled Components", src: styledImage },
    ],
    description:
      "Application created with React JS and Styled Components to make a request an external API of Simpsons.",
    repository: "https://github.com/JoelTrinidad/phrases-simpson",
    website: "https://phrases-simpson-jt.netlify.app",
  },
  {
    title: "Marvel API",
    image: marvelProject,
    techs: [
      { name: "Vite", src: viteImage },
      { name: "React", src: reactImage },
      { name: "React Router ", src: reactRouterdomImage },
      { name: "Sass", src: sassImage },
      { name: "Semantic", src: semanticImage },
    ],
    description:
      "Application created with React JS, React Router and Sass to make a request an external API of Marvel.",
    repository: "https://github.com/JoelTrinidad/marvel-react",
    website: "https://marvel-react-jt.netlify.app",
  },
  {
    title: "Dynamic Form",
    image: dymamicFormProject,
    techs: [
      { name: "Vite", src: viteImage },
      { name: "React JS", src: reactImage },
      { name: "React Bootstrap", src: reactBootstrapImage },
    ],
    description:
      "Application of a landing page created with React JS and React Bootstrap to make a form with dynamic fields.",
    repository: "https://github.com/JoelTrinidad/dynamic-form",
    website: "https://dynamic-form-jt.netlify.app",
  },
  {
    title: "Fuel Station",
    image: gasolineraProject,
    techs: [
      { name: "Vite", src: viteImage },
      { name: "Chakra", src: chakraImage },
      { name: "React Router DOM", src: reactRouterdomImage },
    ],
    description:
      "Application created with Vite where you can save the information and see it on a summary",
    repository: "https://github.com/JoelTrinidad/gasolinera-react",
    website: "https://gasolinera-react-jt.netlify.app",
  },
];
