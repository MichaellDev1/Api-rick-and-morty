import { Helmet } from "react-helmet";
import Main from "../../Components/Main/index";
import SectionCarrousel from "../../Components/SectionCarrousel";

export default function Home() {

  return (
    <>
      <Helmet>
        <title>Home | API</title>
        <meta name="description" content={"Home Api Rick and Morty"} />
        <meta name="rating" content="General" />
      </Helmet>
      <Main/>
      <SectionCarrousel />
    </>
  );
}
