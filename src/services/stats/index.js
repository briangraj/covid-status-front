import axios from "axios";
import urls from "./urls";

const statsService = {};

statsService.getCasesCount = (params) => {
  return axiosWithErrorHandling({
    method: "get",
    url: urls.total,
    params: removeEmptyStrings(params),
  });
};

statsService.getDeathsCount = (params) => {
  return axiosWithErrorHandling({
    method: "get",
    url: urls.deaths,
    params: removeEmptyStrings(params),
  });
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
  return axiosWithErrorHandling({
    method: "get",
    url: urls.update,
  });
};

statsService.postUpdate = () => {
  return axiosWithErrorHandling({
    method: "post",
    url: urls.update,
  });
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

const axiosWithErrorHandling = (config) => {
  return axios(config)
    .then(res => res.data)
    .catch(err => {
      let errorMessage;
      if (err.response) {
        const status = err.response.status;
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        if (status >= 500)
          errorMessage = "An error occurred on the server";
        // TODO handle more codes
      } else if (err.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        errorMessage = "Can't connect to the server";
      } else {
        // Something happened in setting up the request that triggered an Error
        errorMessage = "An error occurred on the client";
      }

      return Promise.reject(errorMessage);
    });
};

export default statsService;