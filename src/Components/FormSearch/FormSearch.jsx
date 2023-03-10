import { useRef} from "react";
import styled from "styled-components";

const Input = styled.input`
  border: none;
  font-size: 17px;
  padding: 7px 10px;
  border: 2px solid #1679fc;
  border-radius: 5px;
  margin-right: 10px;
  outline: none;
  width: 72%;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 100px;

`;

const Button = styled.button`
  border: none;
  font-size: 17px;
  padding: 9px 10px;
  border-radius: 5px;
  background: #1679fc;
  color: #fff;
  cursor: pointer;
  outline: none;
`;

export default function FormSearch({ placeholder, searchFunction }) {
  const refInput = useRef()
  
  const handleSubmit = (e)=>{
    e.preventDefault()
    if (refInput.current.value == '') searchFunction("Rick")
    else searchFunction(refInput.current.value)
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input type={"search"} placeholder={`Search for ${placeholder}`} autoFocus ref={refInput}/>
      <Button>Search</Button>
    </Form>
  );
}
