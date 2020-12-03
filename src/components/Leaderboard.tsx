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
import useSWR from "swr";

import { fetcher } from "../utils/githubApi";
import { getLeaderBoard } from "../utils/getLeaderBoard";
import spinner from "../assets/spinner.gif";

const StyledPaper = styled(Paper)({
  minHeight: 500,
  width: "100%",
  padding: 10,
  overFlowY: "scroll",
});

const API = "https://github-monitor.services.dev.propelleraero.com/prs_by_dev/";

interface Data {
  position: number;
  name: string;
  reviews: number;
}

export default function Leaderboard() {
  let { data } = useSWR<Data[]>(API, fetcher);

  const leaderBoard = data ? getLeaderBoard(data) : null;

  return (
    <StyledPaper>
      <Toolbar>
        <Typography variant="h6" component="div">
          Leaderboard
        </Typography>
      </Toolbar>
      {!leaderBoard ? (
        <img
          src={spinner}
          height={30}
          style={{ margin: "30px" }}
          alt="loading..."
        />
      ) : (
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Position</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>PRs Reviewed</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {leaderBoard.map((author: any, index: number) => (
                <TableRow>
                  <TableCell>{index}</TableCell>
                  <TableCell>{author[0]}</TableCell>
                  <TableCell>{author[1]}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </StyledPaper>
  );
}
