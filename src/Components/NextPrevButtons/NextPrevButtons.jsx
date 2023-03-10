import { useState } from "react";
import useCharacter from "../../Hooks/useCharacter";
import styled from "styled-components";

const ContentButtonsNext = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 100px;
  min-height: 200px;
`;

const ButtonNext = styled.button`
  font-size: 18px;
  border: none;
  background: none;
  margin: 0 5px;
  cursor: pointer;
  color: rgb(22, 121, 252);
  font-weight: 600;
  padding: 10px;
`;

export default function NextPrevButtons({ getNextPage, nextPage, pages }) {
  const pagesArray = [];
  for (let i = 1; i <= pages; i++) {
    pagesArray.push(i);
  }

  const [primero, setPrimero] = useState(0);
  const [segundo, setSegundo] = useState(1);
  const [tercero, setTercero] = useState(2);

  const handleClick = (e, num) => {
    const numNextAndPrev = parseInt(e.target.textContent);
    if (num == 0) {
      if (numNextAndPrev !== nextPage) {
        if (numNextAndPrev == 1) {
          getNextPage(1);
        } else {
          getNextPage(numNextAndPrev);
          setPrimero((prev) => prev - 3);
          setSegundo((prev) => prev - 3);
          setTercero((prev) => prev - 3);
        }
      } else return;
    }

    if (num == 1) {
      if (numNextAndPrev !== nextPage) {
        getNextPage(numNextAndPrev);
      } else return;
    }

    if (num == 2) {
      if (numNextAndPrev == pagesArray.length) {
        getNextPage(numNextAndPrev);
        return;
      }

      if (numNextAndPrev !== nextPage) {
        getNextPage(numNextAndPrev);
        setPrimero((prev) => prev + 3);
        setSegundo((prev) => prev + 3);
        setTercero((prev) => prev + 3);
      } else return;
    }
  };

  return (
    <ContentButtonsNext>
      {pagesArray.length >= 3 ? (
        <div>
          <ButtonNext onClick={(e) => handleClick(e, 0)}>
            {pagesArray[primero]}
          </ButtonNext>
          <ButtonNext onClick={(e) => handleClick(e, 1)}>
            {pagesArray[segundo]}
          </ButtonNext>
          <ButtonNext onClick={(e) => handleClick(e, 2)}>
            {pagesArray[tercero]}
          </ButtonNext>
          <span>...</span>
          <ButtonNext onClick={handleClick}>
            {pagesArray[pagesArray.length - 1]}
          </ButtonNext>
        </div>
      ) : (
        pagesArray.map((res) => <ButtonNext key={res}>{res}</ButtonNext>)
      )}
    </ContentButtonsNext>
  );
}
