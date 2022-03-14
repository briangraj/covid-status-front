import Stats from "./stats";
import Filters from "./filters";
import {useEffect, useState} from "react";
import statsService from "./services/stats";

function App() {
  const [casesCount, setCasesCount] = useState(0);
  const [deathsCount, setDeathsCount] = useState(0);

  const refreshStats = (query = {}) => {
    statsService.getStats(query)
      .then(stats => {
        setCasesCount(stats.casesCount);
        setDeathsCount(stats.deathsCount);
      });
  };

  useEffect(refreshStats, []);

  return (
    <div>
      <Filters refreshStats={refreshStats} />
      <hr />
      <Stats casesCount={casesCount} deathsCount={deathsCount} />
    </div>
  );
}

export default App;
