import axios from "axios";
import urls from "./urls";

// TODO handle error
const statsService = {};

statsService.getCasesCount = () => {
  return axios.get(urls.total)
    .then(res => res.data);
};

statsService.getDeathsCount = () => {
  return axios.get(urls.deaths)
    .then(res => res.data);
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