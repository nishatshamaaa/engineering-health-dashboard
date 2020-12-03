import React, { useState } from "react";

import { TextField, Button } from "@material-ui/core";
import GenericModal from "./GenericModal";

type Props = {
  onSubmit: (password: string) => void;
};

export default function AuthModal(props: Props) {
  const [password, setPassword] = useState("");
  const handleOnClick = (e: React.MouseEvent) => {
    props.onSubmit(password);
  };
  return (
    <GenericModal>
      <TextField
        type="password"
        label="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <br />
      <Button color="primary" variant="contained" onClick={handleOnClick}>
        Login
      </Button>
    </GenericModal>
  );
}
