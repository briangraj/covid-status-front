import axios from "axios";
import urls from "./urls";

// TODO handle error
const statsService = {};

statsService.getCasesCount = (params) => {
  return axios.get(urls.total, { params })
    .then(res => res.data);
};

statsService.getDeathsCount = (params) => {
  return axios.get(urls.deaths, { params })
    .then(res => res.data);
};

statsService.getStats = (params) => {
  return Promise.all([
    statsService.getCasesCount(params),
    statsService.getDeathsCount(params)
  ])
    .then(([resCases, resDeaths]) => {
      return {
        casesCount: resCases.count,
        deathsCount: resDeaths.count,
      };
    });
};

export default statsService;