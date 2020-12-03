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

const StyledPaper = styled(Paper)({
  height: 400,
  width: "100%",
  padding: 10,
});

const API = "https://github-monitor.services.dev.propelleraero.com/";

interface Data {
  position: number;
  name: string;
  reviews: number;
}

const username = "TEST";
const password = "TEST";

const fetcher = (url: string) => {
  let headers = new Headers();
  headers.set("Authorization", "Basic " + btoa(username + ":" + password));
  return fetch(url, { method: "GET", headers }).then((response) =>
    response.json()
  );
};

export default function Leaderboard() {
  let { data, error } = useSWR<Data[]>(API, fetcher);

  if (!data) data = [{ position: 1, name: "Bob", reviews: 2 }];

  return (
    <StyledPaper>
      <Toolbar>
        <Typography variant="h6" component="div">
          Leaderboard
        </Typography>
      </Toolbar>
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
            {data.map((datum) => (
              <TableRow>
                <TableCell>{datum.position}</TableCell>
                <TableCell>{datum.name}</TableCell>
                <TableCell>{datum.reviews}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </StyledPaper>
  );
}
