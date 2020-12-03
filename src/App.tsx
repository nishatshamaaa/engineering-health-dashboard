import React from "react";
import styled from "styled-components";

import "./App.css";
import Navbar from "./components/Navbar";
import ExampleBarChart from "./components/ExampleBarChart";
import Dashboard from "./components/Dashboard";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 100px;
`;

function App() {
  return (
    <Container>
      <Navbar />
      <Dashboard />
    </Container>
  );
}

export default App;
