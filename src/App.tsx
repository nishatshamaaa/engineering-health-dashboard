import React, { useState } from "react";
import styled from "styled-components";

import "./App.css";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import AuthModal from "./components/AuthModal";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 100px;
`;

function App() {
  const [password, setPassword] = useState<string | null>(null);
  return (
    <Container>
      {password ? (
        <>
          {" "}
          <Navbar />
          <Dashboard password={password} />
        </>
      ) : (
        <AuthModal onSubmit={(password) => setPassword(password)} />
      )}
    </Container>
  );
}

export default App;
