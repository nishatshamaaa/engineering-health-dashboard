import { ResponsiveNetwork } from "@nivo/network";
import { Typography, Toolbar } from "@material-ui/core";

import { getPRNetwork } from "../utils/getPRNetwork";

export default function PRNetwork(props: any) {
  const { nodes, links } = getPRNetwork(props.data);

  return (
    <>
      <Toolbar>
        <Typography variant="h6" component="div">
          Propeller PR Review Network
        </Typography>
      </Toolbar>
      <ResponsiveNetwork
        nodes={nodes}
        links={links}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        repulsivity={30}
        iterations={500}
        nodeColor={function (e) {
          return e.color;
        }}
        nodeBorderWidth={1}
        nodeBorderColor={{ from: "color", modifiers: [["darker", 0.8]] }}
        linkThickness={function (e) {
          return 2 * (2 - e.source.depth);
        }}
        motionStiffness={160}
        motionDamping={12}
      />
    </>
  );
}
