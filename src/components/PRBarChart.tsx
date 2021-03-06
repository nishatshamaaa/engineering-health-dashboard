import { ResponsiveBar } from "@nivo/bar";

import React from "react";
import { Typography, Toolbar } from "@material-ui/core";

import { DARKER_NAVY, NAVY } from "../Constants";
import { getDailyReviewRaiseCount } from "../utils/getPRCount";
import { Data } from "./Dashboard";

export default function PRBarChart({ data, team }: { data: Data; team: any }) {
  const prCountByDay = getDailyReviewRaiseCount(data, team);

  return (
    <>
      <Toolbar>
        <Typography variant="h6" component="div">
          Pull Requests Raised Across Propeller
        </Typography>
      </Toolbar>
      <ResponsiveBar
        margin={{ top: 30, right: 80, bottom: 80, left: 80 }}
        data={prCountByDay as any}
        indexBy="dayName"
        keys={["count"]}
        labelTextColor={NAVY}
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
    </>
  );
}
