import styled from "styled-components";
import "./modal.css";

const ModalContent = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  background: rgba(0 0 0 / 20%);
  z-index: 999999;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  top: 0;
`;

const Modaal = styled.div`
  max-width: 700px;
  width: 700px;
  position: relative;
  min-height: 400px;
  box-shadow: 0 0 20px rgba(0 0 0 / 20%);
  background: #fff;
  display: flex;
  justify-content: spece-between;
  align-items: center;
`;

const ButtonCloseModal = styled.button`
  position: absolute;
  right: 25px;
  top: 25px;
  background: none;
  border: none;
  width: 27px;
  height: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const ContentImg = styled.div`
  max-width: 50%;
  height: 400px;
  position: relative;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ContentInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 25px;
`;

const NameCaracter = styled.h2`
  font-size: 30px;
  font-weight: 900;
`;

const Status = styled.span``;

const Specie = styled.span``;

const Gender = styled.span``;

export default function Modal({ handleClose, visibility, dataModal }) {
  const { image, gender, species, status, name } = dataModal;

  return visibility ? null : (
    <ModalContent>
      <Modaal>
        <div>
          <ButtonCloseModal onClick={handleClose}>
            <span className="modal-bar"></span>
            <span className="modal-bar"></span>
          </ButtonCloseModal>
        </div>
        <ContentImg>
          <Img src={image} />
        </ContentImg>
        <ContentInfo>
          <NameCaracter>{name}</NameCaracter>
          <div>
            <Specie>Especie: {species}</Specie>
          </div>
          <Gender>{gender}</Gender>
          <Status>{status}</Status>
        </ContentInfo>
      </Modaal>
    </ModalContent>
  );
}
