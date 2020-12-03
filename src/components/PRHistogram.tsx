import { Toolbar, Typography } from "@material-ui/core";
import { ResponsiveBar } from "@nivo/bar";
import React from "react";
import {
  parseISO,
  differenceInMinutes,
  differenceInBusinessDays,
} from "date-fns";
import range from "lodash/range";

import { DARKER_NAVY, NAVY } from "../Constants";
import { Data } from "./Dashboard";

interface PRHistogramProps {
  data: Data;
}

interface RBData {
  id: string;
  value: number;
}

const makeData = (data: Data): RBData[] => {
  const timeToClose = data.data.search.edges.map((edge) => {
    const { createdAt, closedAt } = edge.node;
    const createdAtDate = parseISO(createdAt);
    const closedAtDate = parseISO(closedAt);
    const diff = differenceInBusinessDays(closedAtDate, createdAtDate);
    return diff;
  });

  console.log({ timeToClose });

  // const filteredTimeToClose = timeToClose.filter((ttc) => ttc < 200);

  const min = Math.min(...timeToClose);
  const max = Math.max(...timeToClose);
  const nBins = max;
  // const binSize = 1; // (max - min) / max;
  console.log({ min, max });

  // const bins = range(nBins).map((i) => {
  //   return [i * binSize, (i + 1) * binSize];
  // });

  const bins = range(nBins).map((i) => [i * 1, (i + 1) * 1]);
  console.log({ bins });

  const finalData = bins.map((bin) => {
    return {
      id: `${bin[0]} - ${bin[1]}`,
      value: timeToClose.filter((ttc) => ttc <= bin[1] && ttc > bin[0]).length,
    };
  });

  return finalData;
};

export default function PRHistogram(props: PRHistogramProps) {
  const data = makeData(props.data);
  console.log({ histData: data });
  return (
    <>
      <Toolbar>
        <Typography variant="h6" component="div">
          Pull Requests Business Days To Close
        </Typography>
      </Toolbar>
      <ResponsiveBar
        margin={{ top: 30, right: 80, bottom: 80, left: 80 }}
        data={data}
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
