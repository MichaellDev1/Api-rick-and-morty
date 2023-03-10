import { useRef } from "react";
import styled from "styled-components";
import './index.css';
import { IoIosArrowBack } from "react-icons/io";

const ContainerCarrousel = styled.div`
  margin: 15px 0;
  overflow: hidden;
  position: relative;
`;

const CarrouselContent = styled.div`
  display: -webkit-box;
  overflow: hidden;
  position: relative;
  gap: 10px;
  scroll-behavior: smooth;
`;

const TitleCarrousel = styled.h2`
  font-size: 22px;
  padding: 10px 0;
`;

export default function Carrousel({ title, children }) {
  const refCarrousel = useRef();
  const NUM_SCROLL = 600;

  const handleClickLeft = () => {
    refCarrousel.current.scrollLeft <= 0
      ? (refCarrousel.current.scrollLeft = 0)
      : (refCarrousel.current.scrollLeft -= NUM_SCROLL);
  };
  const handleClickRight = () => {
    refCarrousel.current.scrollLeft >= refCarrousel.current.scrollWidth
      ? (refCarrousel.current.scrollLeft = refCarrousel.current.scrollWidth)
      : (refCarrousel.current.scrollLeft += NUM_SCROLL);
  };

  return (
    <ContainerCarrousel className="container-carrousel">
      <TitleCarrousel>{title}</TitleCarrousel>

      <div style={{ display: "flex", alignItems: "center" }}>

        <span 
          onClick={handleClickLeft} 
          className={'arrow-content arrow-carrousel-left'}>
          <IoIosArrowBack className="arrow-carrousel left-arrow"/>
        </span>

        <CarrouselContent ref={refCarrousel}>
          {children}
        </CarrouselContent>

        <span onClick={handleClickRight} 
            className={'arrow-content arrow-carrousel-right'}>
            <IoIosArrowBack className="arrow-carrousel right-arrow"/>
        </span>

      </div>
    </ContainerCarrousel>
  );
}
