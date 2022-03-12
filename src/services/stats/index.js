import urls from "./urls";

export const getCasesCount = () => {
  // TODO handel error
  return fetch(urls.total)
    .then(res => res.json());
};