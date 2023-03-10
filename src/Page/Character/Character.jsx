import FormSearch from "../../Components/FormSearch/FormSearch";
import styled from "styled-components";
import CardCharacter from "../../Components/CardCharacter/CardCharacter";
import Spinner from "../../Components/Spinner/Spinner";
import { Helmet } from "react-helmet";
import useCharacter from "../../Hooks/useCharacter";
import NextPrevButtons from "../../Components/NextPrevButtons/NextPrevButtons";
import Modal from "../../Components/Modal";
import useVisibilityModal from "../../Hooks/useVisibilityModal";

const ContentTitle = styled.div``;

const Title = styled.h1`
  color: #000;
  text-align: center;
  font-weight: 500;
  font-size: 35px;
`;

const ContentCharacter = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  width: 100%;
  padding: 0 100px;
  place-content: center;
`;

const Error = styled.h3`
  font-size: 20px;
  text-align: center;
  width: 100%;
`;

const ContentCard = styled.div`
    min-height: 50vh;
    display: flex;
    flex-direction: column:
    justify-content: center;
    align-item: center;
`;

const SectionCharacter = styled.section`
  width: 100%;
`;

export default function Character() {
  const {
    character,
    error,
    handleSearchCaracter,
    loading,
    getNextPage,
    nextPage,
    pages,
  } = useCharacter({});

  const { handleCloseClick, visibility, handleClickOpen, dataModal } =
    useVisibilityModal();

  return (
    <>
      <Helmet>
        <title>Character | API</title>
        <meta name="description" content={"Characters"} />
        <meta name="rating" content="General" />
      </Helmet>
      <Modal
          handleClose={handleCloseClick}
          visibility={visibility}
          dataModal={dataModal}
        />
      <SectionCharacter>
        <ContentTitle>
          <Title>Character</Title>
        </ContentTitle>

        <FormSearch
          placeholder={"character"}
          searchFunction={handleSearchCaracter}
        />
        
        <ContentCard>
          {loading ? (
            <Spinner />
          ) : error ? (
            <Error>No se a encontrado resultado</Error>
          ) : (
            <ContentCharacter>
              {character.map((res,inx) => (
                <CardCharacter
                  character={res}
                  key={inx}
                  handleOpenModal={handleClickOpen}
                />
              ))}
            </ContentCharacter>
          )}
        </ContentCard>
        <NextPrevButtons
          getNextPage={getNextPage}
          nextPage={nextPage}
          pages={pages}
        />
      </SectionCharacter>
    </>
  );
}
