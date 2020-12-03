import React from "react";
import Modal from "@material-ui/core/Modal";
import { styled } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const StyledPaper = styled(Paper)({
  width: "80%",
});

type Props = {
  chart: React.ReactElement;
  closeModal: () => void;
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
        <StyledPaper>{props.chart}</StyledPaper>
      </StyledModal>
    </div>
  );
}
