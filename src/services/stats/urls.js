const host = process.env.REACT_APP_CSB_BASE_URL;

const statsUrls = {
  total: host + "/covid/total",
  deaths: host + "/covid/deaths",
  update: host + "/covid/update",
};

export default statsUrls;