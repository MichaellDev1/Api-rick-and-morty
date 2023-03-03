import styled from "styled-components";
import Spinner from "../../Components/Spinner/Spinner";
import FormSearch from "../../Components/FormSearch/FormSearch";
import CardLocation from "../../Components/CardLocation/CardLocation";
import { Helmet } from "react-helmet";
import useLocationSearch from "../../Hooks/useLocationSearch";
import NextPrevButtons from '../../Components/NextPrevButtons/NextPrevButtons'

const ContentTitle = styled.div``;

const ContentCharacter = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  width: 100%;
  padding: 0 100px;
  place-content: center;
`;

const Title = styled.h1`
  color: #000;
  text-align: center;
  font-weight: 500;
  font-size: 35px;
`;

const Error = styled.h3`
  font-size: 20px;
  text-align: center;
`;

export default function Location() {
  const { loading, error, handleSearchLocation, location, getNextPage, nextPage, pages} = useLocationSearch();
  return (
    <>
      <Helmet>
        <title>Location | API</title>
        <meta name="description" content={"Character placement"} />
        <meta name="rating" content="General" />
      </Helmet>
      <ContentTitle>
        <Title>Location</Title>
      </ContentTitle>
      <FormSearch
        placeholder={"location"}
        searchFunction={handleSearchLocation}
      />
      {loading ? (
        <Spinner />
      ) : error ? (
        <Error>No se a encontrado resultado</Error>
      ) : (
        <ContentCharacter>
          {location.map((singleLocation) => (
            <CardLocation episodes={singleLocation} key={singleLocation.name}/>
          ))}
        </ContentCharacter>
      )}
      <NextPrevButtons getNextPage={getNextPage} nextPage={nextPage} pages={pages}/>
    </>
  );
}
