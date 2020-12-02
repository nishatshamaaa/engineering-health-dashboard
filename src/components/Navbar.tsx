import React, { ReactElement } from "react";
import styled from "styled-components";
import { DARKER_NAVY } from "../Constants";

const StyledNavbar = styled.div`
  width: 100%;
  background-color: ${DARKER_NAVY};
  position: fixed;
  height: 40px;
  padding-top: 20px;
  padding-left: 50px;
  font-weight: 800;
  color: white;
`;

export default function Navbar(): ReactElement {
  return <StyledNavbar>Engineering Health Dashboard</StyledNavbar>;
}
