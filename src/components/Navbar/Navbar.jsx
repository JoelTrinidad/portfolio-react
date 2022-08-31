import { useState } from "react";
import * as S from "./Navbar.styles";

export default function Navbar() {
  const [showMenuBurger, setshowMenuBurger] = useState(false);

  const clickItemNav = (item) => {
    document.getElementById(item).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <S.ContainerNavbar>
      <S.ContainerLogo>
        <S.ImageLogo src="/img/logo.png" alt="Logo Joel Trinidad" />
        <div>
          <h1>Joel Trinidad</h1>
          <h2>Frontend Developer</h2>
        </div>
      </S.ContainerLogo>

      <S.ContainerBurger onClick={() => setshowMenuBurger(!showMenuBurger)}>
        <S.BurgerMenu />
        <S.BurgerMenu />
        <S.BurgerMenu />
      </S.ContainerBurger>

      <S.ContainerItems showMenuBurger={showMenuBurger}>
        <p onClick={() => clickItemNav("about-me")}>About me</p>
        <p onClick={() => clickItemNav("projects")}>Projects</p>
        <S.Button onClick={() => clickItemNav("contact")}>Contact me</S.Button>
      </S.ContainerItems>
    </S.ContainerNavbar>
  );
}
