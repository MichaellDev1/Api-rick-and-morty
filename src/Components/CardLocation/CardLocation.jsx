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

export default function CardLocation({ episodes }) {
  const { dimension, name, type  } = episodes;
  return (
    <Card>
      <h2>{name}</h2>
      <p>{dimension}</p>
      <p>{type}</p>
    </Card>
  );
}
