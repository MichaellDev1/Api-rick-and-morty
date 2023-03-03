import ItemCarrousel from "../ItemCarrousel";
import Carrousel from "../Carrousel";
import "./sectioncarrousel.css";
import useCharacter from "../../Hooks/useCharacter";

export default function SectionCarrousel() {
  const storage = localStorage.getItem("character");
  const { character } = storage !== "undefined" ? useCharacter({ page: 1, characterSearch: storage }) : useCharacter({});

  return (
    <section className="section-carrousel-content">
      <Carrousel title={"Last character search:"}>

        {character.map((singleItems,inx)=> <ItemCarrousel data={singleItems} key={inx}/>)}

      </Carrousel>
    </section>
  );
}
