import styled from "styled-components";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";

const Container = styled.div``;
const Main = styled.div``;
const Wrapper = styled.div``;

function App() {
  return (
    <>
      <Container>
        <Menu />
        <Main>
          <Navbar />
          <Wrapper>Video Cards</Wrapper>
        </Main>
      </Container>
    </>
  );
}

export default App;
