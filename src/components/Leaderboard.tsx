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

const StyledPaper = styled(Paper)({
  height: 400,
  width: "100%",
  padding: 10,
});

const data = [
  {
    position: 1,
    name: "Jonar",
    reviews: 7,
  },
  {
    position: 2,
    name: "Peg",
    reviews: 5,
  },
  {
    position: 3,
    name: "Duncam",
    reviews: 3,
  },
];

export default function Leaderboard() {
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
