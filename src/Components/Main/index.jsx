import styled from "styled-components";
import imgMain from "../../../public/Assets/Rick-And-Morty-free-Picture-PNG.png";
import "./main.css";

const MainSection = styled.main`
  min-height: 100vh;
  width: 100%;
  margin: auto;
  max-width: 1600px;
`;

const ImgMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  order: 1;
  flex-grow: 1;
`;

const TitleMain = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;


const Title = styled.h1`
  display: flex;
  flex-direction: column;
`

export default function Main() {
  return (
    <MainSection className="main">
      <TitleMain className="content-title">
        <Title>
          <span className="title-main">The</span>
          <span className="title-main">Rick and</span>
          <span className="title-main">Morty API</span>
        </Title>
      </TitleMain>
      <ImgMain className="content-img-main">
        <img src={imgMain} className="img-main"/>
      </ImgMain>
    </MainSection>
  );
}
