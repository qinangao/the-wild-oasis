import styled from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";
import Row from "./ui/Row";

const StyledApp = styled.div`
  padding: 2em;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <StyledApp>
        <Row type="vertical">
          <Row type="horizontal">
            <Heading type="h1">The Wild Oasis</Heading>
            <div>
              <Heading as="h2">Check in and out</Heading>
              <Button
                variation="primary"
                size="medium"
                onClick={() => alert("hello")}
              >
                Check in
              </Button>
              <Button
                variation="secondary"
                size="small"
                onClick={() => alert("hello")}
              >
                Check out
              </Button>
            </div>
          </Row>
          <Row type="vertical">
            <Heading as="h3">Form</Heading>
            <form>
              <Input type="number" placeholder="Number of Guests" />
              <Input type="number" placeholder="Number of Guests" />
            </form>
          </Row>
        </Row>
      </StyledApp>
    </>
  );
}

export default App;
