import urls from "./urls";

// TODO handle error
const statsService = {};

statsService.getCasesCount = () => {
  return fetch(urls.total)
    .then(res => res.json());
};

statsService.getDeathsCount = () => {
  return fetch(urls.deaths)
    .then(res => res.json());
};

statsService.getStats = () => {
  return Promise.all([
    statsService.getCasesCount(),
    statsService.getDeathsCount()
  ])
    .then(([resCases, resDeaths]) => {
      return {
        casesCount: resCases.count,
        deathsCount: resDeaths.count,
      };
    });
};

export default statsService;