const username = "propeller";
const password = "x";

export const fetcher = (url: string) => {
  let headers = new Headers();
  headers.set("Authorization", "Basic " + btoa(username + ":" + password));
  return fetch(url, { method: "GET", headers }).then((response) =>
    response.json()
  );
};
