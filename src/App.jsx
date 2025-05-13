import styled from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import Button from "./ui/Button";
import Input from "./ui/Input";

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
  background-color: yellow;
`;

const StyledApp = styled.div`
  background-color: orange;
  padding: 2em;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <StyledApp>
        <H1>The Wild Oasis</H1>
        <Button onClick={() => alert("hello")}>Check in</Button>
        <Button onClick={() => alert("hello")}>Check out</Button>
        <Input type="number" placeholder="Number of Guests" />
      </StyledApp>
    </>
  );
}

export default App;
