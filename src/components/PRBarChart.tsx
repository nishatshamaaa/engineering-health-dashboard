import { Bar } from "@nivo/bar";

import React from "react";
import { Typography, Toolbar } from "@material-ui/core";

import { DARKER_NAVY, TEAMS } from "../Constants";
import Spinner from "./Spinner";
import { getPRCountByDay } from "../utils/getPRCount";

const MyResponsiveBar = ({ data, team }: any) => {
  const prCountByDay = getPRCountByDay(data, team);

  return (
    <>
      <Toolbar>
        <Typography variant="h6" component="div">
          Pull Requests Across Propeller
        </Typography>
      </Toolbar>
      {!data ? (
        <Spinner />
      ) : (
        <Bar
          width={700}
          height={400}
          margin={{ top: 30, right: 80, bottom: 80, left: 80 }}
          data={prCountByDay}
          indexBy="dayName"
          keys={["count"]}
          labelTextColor="inherit:darker(1.4)"
          enableGridX={false}
          colors={"#28AFB0"}
          theme={{
            axis: {
              ticks: {
                line: {
                  stroke: DARKER_NAVY,
                },
                text: {
                  fill: DARKER_NAVY,
                },
              },
            },
          }}
        />
      )}
    </>
  );
};

export default MyResponsiveBar;
