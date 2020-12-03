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

export const getDailyReviewRaiseCount = (data: any, team?: string) => {
  let prList = data?.data?.search?.edges;
  if (!prList) return;

  const repoNameRegex = /https:\/\/github.com\/PropellerAero\/(.*?)\//;
  if (team)
    prList =
      team &&
      prList.filter((pr: any) => {
        const nameMatch = repoNameRegex.exec(pr?.node?.url);
        return TEAMS[team] === repoToTeamMapping[nameMatch ? nameMatch[1] : ""];
      });

  const prByDay: any = [
    { day: 0, count: 0, dayName: "Sunday" },
    { day: 1, count: 0, dayName: "Monday" },
    { day: 2, count: 0, dayName: "Tuesday" },
    { day: 3, count: 0, dayName: "Wednesday" },
    { day: 4, count: 0, dayName: "Thursday" },
    { day: 5, count: 0, dayName: "Friday" },
    { day: 6, count: 0, dayName: "Saturday" },
  ];

  //assuming we have only one week of data
  prList.forEach((pr: any) => {
    let day = new Date(pr?.node?.createdAt).getDay();
    prByDay.find((p: any) => p.day === day).count++;
  });

  return prByDay;
};
