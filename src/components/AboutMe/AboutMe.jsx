import * as S from "./AboutMe.styles";
import logoGithub from "../../assets/svg/github.svg";
import logoLinked from "../../assets/svg/linkedin.svg";

export default function AboutMe() {
  const socialNetworks = [
    {
      name: "Github",
      link: "https://github.com/JoelTrinidad",
      logo: logoGithub,
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/joel-trinidad-02a401228",
      logo: logoLinked,
    },
  ];

  return (
    <S.ContainerAboutMe id="about-me">
      <S.ContainerFlex>
        <S.ContainerText>
          <S.Title>
            <p>👋🏼 Hello, im</p>
            <p>Joel Trinidad</p>
            <p>Frontend Developer</p>
          </S.Title>
          <S.DescriptionText>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis autem
            praesentium consectetur nulla quisquam voluptatum dignissimos facere
            odit quod corrupti! Dolore neque, autem itaque voluptas eligendi et
            asperiores. Eligendi, laboriosam.
          </S.DescriptionText>
          <S.ContainerIcons>
            {socialNetworks.map((network, index) => (
              <a
                key={index}
                href={network.link}
                target="_blank"
                rel="noreferrer"
              >
                <img src={network.logo} alt={network.name} />
              </a>
            ))}
          </S.ContainerIcons>
        </S.ContainerText>
        <S.ContainerImage>
          <img src="/img/Joel.jpg" alt="Joel Trinidad" />
        </S.ContainerImage>
      </S.ContainerFlex>
    </S.ContainerAboutMe>
  );
}
