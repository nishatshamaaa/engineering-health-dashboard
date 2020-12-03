import Grid from "@material-ui/core/Grid";
import React, { useState } from "react";
import ExampleBarChart from "./ExampleBarChart";
import Leaderboard from "./Leaderboard";
import Modal from "./Modal";

const data = [
  {
    country: "AD",
    "hot dog": 99,
    "hot dogColor": "hsl(84, 70%, 50%)",
    burger: 118,
    burgerColor: "hsl(180, 70%, 50%)",
    sandwich: 84,
    sandwichColor: "hsl(162, 70%, 50%)",
    kebab: 55,
    kebabColor: "hsl(208, 70%, 50%)",
    fries: 136,
    friesColor: "hsl(251, 70%, 50%)",
    donut: 4,
    donutColor: "hsl(14, 70%, 50%)",
  },
  {
    country: "AE",
    "hot dog": 173,
    "hot dogColor": "hsl(113, 70%, 50%)",
    burger: 58,
    burgerColor: "hsl(342, 70%, 50%)",
    sandwich: 31,
    sandwichColor: "hsl(119, 70%, 50%)",
    kebab: 8,
    kebabColor: "hsl(281, 70%, 50%)",
    fries: 190,
    friesColor: "hsl(315, 70%, 50%)",
    donut: 50,
    donutColor: "hsl(145, 70%, 50%)",
  },
  {
    country: "AF",
    "hot dog": 151,
    "hot dogColor": "hsl(273, 70%, 50%)",
    burger: 24,
    burgerColor: "hsl(209, 70%, 50%)",
    sandwich: 91,
    sandwichColor: "hsl(106, 70%, 50%)",
    kebab: 142,
    kebabColor: "hsl(222, 70%, 50%)",
    fries: 73,
    friesColor: "hsl(61, 70%, 50%)",
    donut: 8,
    donutColor: "hsl(235, 70%, 50%)",
  },
  {
    country: "AG",
    "hot dog": 107,
    "hot dogColor": "hsl(137, 70%, 50%)",
    burger: 0,
    burgerColor: "hsl(147, 70%, 50%)",
    sandwich: 66,
    sandwichColor: "hsl(63, 70%, 50%)",
    kebab: 179,
    kebabColor: "hsl(9, 70%, 50%)",
    fries: 70,
    friesColor: "hsl(245, 70%, 50%)",
    donut: 117,
    donutColor: "hsl(44, 70%, 50%)",
  },
  {
    country: "AI",
    "hot dog": 54,
    "hot dogColor": "hsl(224, 70%, 50%)",
    burger: 55,
    burgerColor: "hsl(351, 70%, 50%)",
    sandwich: 22,
    sandwichColor: "hsl(49, 70%, 50%)",
    kebab: 16,
    kebabColor: "hsl(95, 70%, 50%)",
    fries: 157,
    friesColor: "hsl(352, 70%, 50%)",
    donut: 42,
    donutColor: "hsl(13, 70%, 50%)",
  },
  {
    country: "AL",
    "hot dog": 12,
    "hot dogColor": "hsl(282, 70%, 50%)",
    burger: 78,
    burgerColor: "hsl(98, 70%, 50%)",
    sandwich: 106,
    sandwichColor: "hsl(307, 70%, 50%)",
    kebab: 127,
    kebabColor: "hsl(297, 70%, 50%)",
    fries: 85,
    friesColor: "hsl(357, 70%, 50%)",
    donut: 127,
    donutColor: "hsl(288, 70%, 50%)",
  },
  {
    country: "AM",
    "hot dog": 26,
    "hot dogColor": "hsl(174, 70%, 50%)",
    burger: 180,
    burgerColor: "hsl(4, 70%, 50%)",
    sandwich: 86,
    sandwichColor: "hsl(332, 70%, 50%)",
    kebab: 87,
    kebabColor: "hsl(19, 70%, 50%)",
    fries: 155,
    friesColor: "hsl(124, 70%, 50%)",
    donut: 92,
    donutColor: "hsl(51, 70%, 50%)",
  },
];

const GridItem = (props: any) => {
  const [modalOpen, setModalOpen] = useState(false);

  const onGridClick = () => setModalOpen(true);

  return (
    <>
      {modalOpen && (
        <Modal
          closeModal={() => setModalOpen(false)}
          chart={props.children}
        ></Modal>
      )}
      <Grid onClick={onGridClick} xs={6} item>
        {props.children}
      </Grid>
    </>
  );
};

export default function Dashboard() {
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      spacing={10}
    >
      <GridItem>
        <Leaderboard />
      </GridItem>
      <GridItem>
        <ExampleBarChart data={data} />
      </GridItem>
    </Grid>
  );
}
