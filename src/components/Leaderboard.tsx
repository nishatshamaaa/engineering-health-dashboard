import {
  Table,
  TableCell,
  TableContainer,
  TableBody,
  TableRow,
  Typography,
  TableHead,
  Toolbar,
} from "@material-ui/core";
import React from "react";

import { getLeaderBoard } from "../utils/getLeaderBoard";

export default function Leaderboard(props: any) {
  const { data } = props;
  const leaderBoard = data ? getLeaderBoard(data) : [];

  return (
    <>
      <Toolbar>
        <Typography variant="h6" component="div">
          Pull Request Leaderboard
        </Typography>
      </Toolbar>
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
              <TableRow key={index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>
                  {index === 0 && <span>👑 </span>}
                  {author[0]}
                </TableCell>
                <TableCell>{author[1]}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
