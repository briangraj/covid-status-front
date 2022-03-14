import axios from "axios";
import urls from "./urls";

// TODO handle error
const statsService = {};

statsService.getCasesCount = (params) => {
  return axios.get(urls.total, { params: removeEmptyStrings(params) })
    .then(res => res.data);
};

statsService.getDeathsCount = (params) => {
  return axios.get(urls.deaths, { params: removeEmptyStrings(params) })
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

statsService.getUpdate = () => {
  return axios.get(urls.update)
    .then(res => res.data);
};

statsService.postUpdate = () => {
  return axios.post(urls.update);
};

const removeEmptyStrings = (params) => {
  // Create new object so "params" is not modified
  const returnParams = {};

  Object.keys(params).forEach(key => {
    if (params[key] !== "")
      returnParams[camelToSnakeCase(key)] = params[key];
  });

  return returnParams;
};

const camelToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);

export default statsService;