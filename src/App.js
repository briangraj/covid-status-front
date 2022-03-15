import "./App.css"
import Stats from "./stats";
import Filters from "./filters";
import {useEffect, useState} from "react";
import statsService from "./services/stats";

function App() {
  const [casesCount, setCasesCount] = useState(0);
  const [deathsCount, setDeathsCount] = useState(0);

  const refreshStats = (query = {}) => {
    return statsService.getStats(query)
      .then(stats => {
        setCasesCount(stats.casesCount);
        setDeathsCount(stats.deathsCount);
      });
  };

  useEffect(() => {
    refreshStats()
      .catch(alert);
  }, []);

  return (
    <div className="App">
      <Filters refreshStats={refreshStats} />
      <hr />
      <Stats casesCount={casesCount} deathsCount={deathsCount} />
    </div>
  );
}

export default App;
