import styled from "styled-components";

const Card = styled.div`
  margin: 10px;
  position: relative;
  min-height: 200px;
  box-shadow: 0 5px 15px rgba(0 0 0 / 15%);
  background: #fff;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Season = styled.span`
  background: rgb(22,121,252);
  position: absolute;
  top: 0;
  color: #fff;
  padding: 5px;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 1px;
  left: 0;

`

export default function CardEpisode({ episodes }) {
  const { name, air_date, episode } = episodes;
  return (
    <Card>
      <Season>{episode}</Season>
      <h2>{name}</h2>
      <p>{air_date}</p>
    </Card>
  );
}
