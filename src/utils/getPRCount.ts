import { Data } from "../components/Dashboard";
import { TEAMS } from "../Constants";

const repoToTeamMapping: any = {
  "geospatial-growth-hack": TEAMS.DE,
  mothership: TEAMS.INFRASTRUCTURE,
  "web-server": TEAMS.INFRASTRUCTURE,
  dbt: TEAMS.INFRASTRUCTURE,
  partners: TEAMS.INFRASTRUCTURE,
  atlas: TEAMS.NOMAD,
  "dirtmate-edge": TEAMS.HE,
  "3p": TEAMS.DE,
  "aeropoints-fulfillers": TEAMS.HE,
  "aeropoints-firmware": TEAMS.HE,
};

// const authorToTeamMapping = {
//   martinlecs: TEAMS.HE,
//   krzyho: TEAMS.INFRASTRUCTURE,
//   fredgreer: TEAMS.HE,
//   RacingTadpole: TEAMS.NOMAD,
//   keithbro: TEAMS.NOMAD,
//   Westermann: TEAMS.DE,
//   rusteyy: TEAMS.DE,
// };

export const getDailyReviewRaiseCount = (data: Data, team?: string) => {
  let prList = data.data.search.edges;
  if (!prList) return;

  const repoNameRegex = /https:\/\/github.com\/PropellerAero\/(.*?)\//;
  if (team)
    prList = prList.filter((pr) => {
      const nameMatch = repoNameRegex.exec(pr.node.url);
      return nameMatch ? TEAMS[team] === repoToTeamMapping[nameMatch[1]] : null;
    });

  const prByDay = [
    { day: 0, count: 0, dayName: "Sunday" },
    { day: 1, count: 0, dayName: "Monday" },
    { day: 2, count: 0, dayName: "Tuesday" },
    { day: 3, count: 0, dayName: "Wednesday" },
    { day: 4, count: 0, dayName: "Thursday" },
    { day: 5, count: 0, dayName: "Friday" },
    { day: 6, count: 0, dayName: "Saturday" },
  ];

  //assuming we have only one week of data
  prList.forEach((pr) => {
    let day = new Date(pr.node.createdAt).getDay();
    const x = prByDay.find((p) => p.day === day);
    if (x) x.count++;
  });

  return prByDay;
};
