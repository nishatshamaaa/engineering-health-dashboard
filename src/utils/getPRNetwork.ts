const nodeProps = {
  radius: 8,
  depth: 1,
  color: "rgb(97, 205, 187)",
};

export const getPRNetwork = (data: any) => {
  const nodes: any = [];
  const links: any = [];

  const prList = data?.data?.search?.edges;

  if (!prList) return { nodes, links };

  const nodeExists = (author: any) => nodes.find((n: any) => n.id === author);
  const findLink = (author: string, reviewer: string) =>
    links.find(
      (link: any) =>
        (link.source === author && link.target === reviewer) ||
        (link.source === reviewer && link.target === author)
    );

  prList.forEach((pr: any) => {
    const author = pr.node?.author?.login;
    const reviews = pr.node?.reviews?.nodes;
    if (!nodeExists(author))
      nodes.push({
        id: author,
        ...nodeProps,
      });

    if (reviews && reviews.length > 0) {
      reviews.forEach((review: any) => {
        const reviewer = review.author.login;
        const existingReviewer = nodeExists(reviewer);
        if (existingReviewer) {
          existingReviewer.radius += 1; //people who review more will have bigger nodes
          existingReviewer.color =
            Math.random() > 0.5 ? "rgb(232, 193, 160)" : "rgb(244, 117, 96)";
        } else {
          nodes.push({
            id: reviewer,
            ...nodeProps,
          });
        }
        const existingLink = findLink(author, reviewer);
        if (existingLink) existingLink.distance += 100;
        else
          links.push({
            source: author,
            target: reviewer,
            distance: 100,
          });
      });
    }
  });

  return { nodes, links };
};
