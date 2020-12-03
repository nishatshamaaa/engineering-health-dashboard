import countBy from "lodash/countBy";

export const getLeaderBoard = (data: any) => {
  const prList = data?.data?.search?.edges;
  const authors = prList.map((pr: any) => pr?.node?.author?.login);
  return Object.entries(countBy(authors))
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);
};
