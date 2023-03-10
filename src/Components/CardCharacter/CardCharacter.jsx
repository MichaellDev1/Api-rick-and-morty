import styled from "styled-components";
import useVisibilityModal from "../../Hooks/useVisibilityModal";

const Card = styled.div`
  margin: 10px;
  min-height: 300px;
  position: relative;
  box-shadow: 0 5px 15px rgba(0 0 0 / 15%);
  background: #fff;
  cursor: pointer;
  padding: 10px;
`;

const ContentImg = styled.div`
  width: 100%;
  height: 180px;
  position: relative;
`;

const Img = styled.img`
  width: 100%;
  object-fit: cover;
  height: 100%;
`;

const ContentInfo = styled.div`
    display: flex;
    padding: 10px 0;
    flex-direction: column;
`
const Name = styled.h4`
    font-size: 18px;

`

const Status = styled.span`
  font-size: 14px;
  color: #fff;
  font-weight: 600;
  position: absolute;
  padding: 2px 10px;
  left: 0;
  top: 0;
  z-index: 99;
`

const InfoCharacter = styled.span`
  font-size: 17px;
  font-weight: 400;
`

export default function CardCharacter({ character, handleOpenModal}) {
  const { gender, image, name, species, status } = character;

  return (
    <Card onClick={()=>handleOpenModal({image,gender,species,status,name})}>

      {status == 'Alive' ? <Status style={{background: 'rgb(37,172,77)'}}>{status}</Status>  : status == "Dead" ? <Status style={{background: 'rgb(235,38,38)'}}>{status}</Status> : status == 'unknown' ? <Status style={{background: '#888'}}>{status}</Status> : <Status>{status}</Status>}
        <ContentImg>
          <Img src={image} />
        </ContentImg>
        <ContentInfo>
           <Name>{name}</Name>
           <InfoCharacter>{gender}</InfoCharacter>
           <InfoCharacter>{species}</InfoCharacter>
        </ContentInfo>
    </Card>
  );
}
