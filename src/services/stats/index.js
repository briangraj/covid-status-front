import urls from "./urls";

// TODO handle error
const statsService = {};

statsService.getCasesCount = () => {
  return fetch(urls.total)
    .then(res => res.json());
};

export default statsService;