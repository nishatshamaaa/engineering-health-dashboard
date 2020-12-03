const username = "propeller";

export const fetcher = (password: string) => (url: string) => {
  let headers = new Headers();
  headers.set("Authorization", "Basic " + btoa(username + ":" + password));
  return fetch(url, { method: "GET", headers }).then((response) =>
    response.json()
  );
};
