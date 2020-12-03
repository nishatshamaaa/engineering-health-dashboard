import React, { ReactElement } from "react";
import Modal from "@material-ui/core/Modal";
import { styled as style } from "@material-ui/core/styles";
import styled from "styled-components";

import {
  Typography,
  Toolbar,
  FormControl,
  InputLabel,
  Grid,
  Paper,
} from "@material-ui/core";

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

const StyledPaper = style(Paper)({
  width: "60%",
  outline: "none",
  padding: 100,
  textAlign: "center",
});

type Props = {
  children: ReactElement | ReactElement[];
};

export default function GenericModal(props: Props) {
  const rootRef = React.useRef(null);
  const closeModal = () => {};

  return (
    <div ref={rootRef}>
      <StyledModal
        disablePortal
        disableEnforceFocus
        disableAutoFocus
        open
        aria-labelledby="server-modal-title"
        aria-describedby="server-modal-description"
        onBackdropClick={closeModal}
      >
        <StyledPaper>{props.children}</StyledPaper>
      </StyledModal>
    </div>
  );
}
