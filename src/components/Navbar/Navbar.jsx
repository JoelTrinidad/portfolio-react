import { useState } from "react"
import * as S from "./Navbar.styles"

export default function Navbar() {
  const [showMenuBurger, setshowMenuBurger] = useState(false)
  
  console.log(showMenuBurger);
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
        <S.BurgerMenu/>
        <S.BurgerMenu/>
        <S.BurgerMenu/>
      </S.ContainerBurger>

      <S.ContainerItems showMenuBurger={showMenuBurger}>
        <p>About me</p>
        <p>Projects</p>
        <S.Button>Contact me</S.Button>
      </S.ContainerItems>
    </S.ContainerNavbar>
  )
}
