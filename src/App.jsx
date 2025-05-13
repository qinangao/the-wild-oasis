import styled from "styled-components";

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
  background-color: yellow;
`;

const Button = styled.button`
  font-size: 1.4em;
  padding: 1.2em 1.6em;
  font-weight: 500;
  border: none;
  border-radius: 7px;
  background-color: purple;
  color: white;
  margin: 20px;
  cursor: pointer;
`;
const Input = styled.input`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 0.8em 1.2em;
`;
const StyledApp = styled.div`
  background-color: orange;
  padding: 2em;
`;

function App() {
  return (
    <StyledApp>
      <H1>The Wild Oasis</H1>
      <Button onClick={() => alert("hello")}>Check in</Button>
      <Button onClick={() => alert("hello")}>Check out</Button>
      <Input type="number" placeholder="Number of Guests" />
    </StyledApp>
  );
}

export default App;
