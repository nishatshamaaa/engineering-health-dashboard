import React from "react";
import styled from "styled-components";

import "./App.css";
import Navbar from "./components/Navbar";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
function App() {
  return (
    <Container>
      <Navbar />
    </Container>
  );
}

export default App;
