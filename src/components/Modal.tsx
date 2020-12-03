import React from "react";
import Modal from "@material-ui/core/Modal";
import { styled as style } from "@material-ui/core/styles";
import styled from "styled-components";

import {
  Typography,
  Select,
  Toolbar,
  FormControl,
  MenuItem,
  InputLabel,
  Grid,
  Paper,
} from "@material-ui/core";
import { TEAMS } from "../Constants";

const StyledContainer = styled.div`
  min-height: 450px;
  width: 100%;
  top: 0;
`;

const StyledModal = style(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
const StyledSelect = style(Select)({
  width: 200,
});

const StyledPaper = style(Paper)({
  width: "60%",
  outline: "none",
});

type Props = {
  chart: React.ReactElement;
  closeModal: () => void;
  selectTeam: (team: any) => void;
  team: string;
};

export default function ChartModal(props: Props) {
  const rootRef = React.useRef(null);

  return (
    <div ref={rootRef}>
      <StyledModal
        disablePortal
        disableEnforceFocus
        disableAutoFocus
        open
        aria-labelledby="server-modal-title"
        aria-describedby="server-modal-description"
        onBackdropClick={props.closeModal}
      >
        <StyledPaper>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={10}
          >
            <Grid xs={8} item>
              {props.chart}
            </Grid>
            <Grid xs={4} item>
              <StyledContainer>
                <Toolbar>
                  <Typography component="div">Filters:</Typography>
                </Toolbar>
                <FormControl>
                  <InputLabel id="demo-simple-select-label">By team</InputLabel>
                  <StyledSelect
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={props.team}
                    onChange={(e) => props.selectTeam(e.target.value)}
                  >
                    <MenuItem value="">None</MenuItem>
                    {Object.entries(TEAMS).map(([value, team]) => (
                      <MenuItem value={value}>{String(team)}</MenuItem>
                    ))}
                  </StyledSelect>
                </FormControl>
              </StyledContainer>
            </Grid>
          </Grid>
        </StyledPaper>
      </StyledModal>
    </div>
  );
}
