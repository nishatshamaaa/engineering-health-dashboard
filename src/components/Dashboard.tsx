import Grid from "@material-ui/core/Grid";
import React, { useState } from "react";
import useSWR from "swr";
import { styled } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";

import PRBarChart from "./PRBarChart";
import Leaderboard from "./Leaderboard";
import Modal from "./Modal";
import { fetcher } from "../utils/githubApi";
// import PRNetwork from "./PRNetworkChart";
import Spinner from "./Spinner";
import PRHistogram from "./PRHistogram";

export interface Node {
  createdAt: string;
  closedAt: string;
}
export interface Edge {
  node: Node;
}
export interface Search {
  edges: Edge[];
}
export interface Data {
  data: InnerData;
}

interface InnerData {
  search: Search;
}

const Chart = styled(Paper)({
  height: 500,
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
      <Grid onClick={onGridClick} md={12} lg={6} item>
        <Chart>{props.children}</Chart>
      </Grid>
    </>
  );
};

interface DashboardProps {
  password: string;
}

export default function Dashboard(props: DashboardProps) {
  let { data } = useSWR<Data>(API, fetcher(props.password));
  const [team, setTeam] = useState("");

  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      spacing={10}
    >
      <GridItem>{!data ? <Spinner /> : <Leaderboard data={data} />}</GridItem>
      <GridItem isClickable team={team} setTeam={setTeam}>
        {!data ? <Spinner /> : <PRBarChart data={data} team={team} />}
      </GridItem>
      <GridItem>{!data ? <Spinner /> : <PRHistogram data={data} />}</GridItem>
      {/* <Grid xs={6} item>
        <Chart>{!data ? <Spinner /> : <PRNetwork data={data} />}</Chart>
      </Grid> */}
    </Grid>
  );
}
