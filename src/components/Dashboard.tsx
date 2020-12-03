import Grid from "@material-ui/core/Grid";
import React, { useState } from "react";
import useSWR from "swr";
import { styled } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";

import PRBarChart from "./PRBarChart";
import Leaderboard from "./Leaderboard";
import Modal from "./Modal";
import { fetcher } from "../utils/githubApi";
interface Data {
  position: number;
  name: string;
  reviews: number;
}

const Chart = styled(Paper)({
  height: 480,
  width: "100%",
  padding: 40,
  margin: 20,
  outline: "none",
});

const API = "https://github-monitor.services.dev.propelleraero.com/prs_by_dev/";

const GridItem = (props: any) => {
  const [modalOpen, setModalOpen] = useState(false);
  const { isClickable, team, setTeam } = props;
  const onGridClick = () => isClickable && setModalOpen(true);

  return (
    <>
      {modalOpen && (
        <Modal
          closeModal={() => setModalOpen(false)}
          chart={props.children}
          selectTeam={(t: string) => setTeam(t)}
          team={team}
        ></Modal>
      )}
      <Grid onClick={onGridClick} xs={6} item>
        <Chart>{props.children}</Chart>
      </Grid>
    </>
  );
};

export default function Dashboard() {
  let { data } = useSWR<Data[]>(API, fetcher);
  const [team, setTeam] = useState("");
  console.log(team, "team");

  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      spacing={10}
    >
      <GridItem>
        <Leaderboard data={data} />
      </GridItem>
      <GridItem isClickable team={team} setTeam={setTeam}>
        <PRBarChart data={data} team={team} />
      </GridItem>
    </Grid>
  );
}
