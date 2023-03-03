import { Helmet } from "react-helmet";
import styled from "styled-components";
import CardEpisode from "../../Components/CardEpisode/CardEpisode";
import NextPrevButtons from "../../Components/NextPrevButtons/NextPrevButtons";
import useEpisode from "../../Hooks/useEpisode";

const ContentTitle = styled.div``;

const Title = styled.h1`
  color: #000;
  text-align: center;
  font-weight: 500;
  font-size: 35px;
  padding: 20px 0 ;
`;

const CardContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  width: 100%;
  padding: 0 100px;
  place-content: center;
`;

const Error = styled.h3`
  font-size: 20px;
  text-align: center;
`;

export default function Episode() {
  const { episode, error, loading, handleSearchEpisode, getNextPage, nextPage ,pages} = useEpisode();

  return (
    <>
      <Helmet>
        <title>Episode | API</title>
        <meta name="description" content={"Episodes"} />
        <meta name="rating" content="General" />
      </Helmet>
      <ContentTitle>
        <Title>Episodes</Title>
      </ContentTitle>
      <CardContent>
          {episode.map((singleEpisode) => (
            <CardEpisode episodes={singleEpisode} key={singleEpisode.name} />
          ))}
        </CardContent>
      <NextPrevButtons getNextPage={getNextPage} nextPage={nextPage} pages={pages}/>
    </>
  );
}
