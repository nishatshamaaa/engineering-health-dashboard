import React from "react";
import { styled } from "@material-ui/core/styles";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import { DARKER_NAVY, YELLOW } from "../Constants";

const StyledAppBar = styled(AppBar)({
  background: YELLOW,
  color: DARKER_NAVY,
});

export default function Navbar() {
  return (
    <>
      <CssBaseline />
      <StyledAppBar>
        <Toolbar>
          <Typography variant="h6">Engineering Health Dashboard</Typography>
        </Toolbar>
      </StyledAppBar>
      <Toolbar />
    </>
  );
}
