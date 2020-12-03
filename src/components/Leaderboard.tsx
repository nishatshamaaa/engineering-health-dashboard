import {
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableBody,
  TableRow,
  Typography,
  styled,
  TableHead,
  Toolbar,
} from "@material-ui/core";
import React from "react";

import { getLeaderBoard } from "../utils/getLeaderBoard";
import Spinner from "./Spinner";

const StyledPaper = styled(Paper)({
  minHeight: 450,
  width: "100%",
  padding: 30,
  overFlowY: "scroll",
});

export default function Leaderboard(props: any) {
  const { data } = props;
  const leaderBoard = data ? getLeaderBoard(data) : null;

  return (
    <>
      <Toolbar>
        <Typography variant="h6" component="div">
          Pull Request Leaderboard
        </Typography>
      </Toolbar>
      {!leaderBoard ? (
        <Spinner />
      ) : (
        <TableContainer>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Position</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>PRs Opened</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {leaderBoard.map((author: any, index: number) => (
                <TableRow>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{author[0]}</TableCell>
                  <TableCell>{author[1]}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
}
