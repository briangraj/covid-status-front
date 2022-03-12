import Stats from "./stats";
import Filters from "./filters";
import {useEffect, useState} from "react";
import statsService from "./services/stats";

function App() {
  const [casesCount, setCasesCount] = useState(0);
  const [deathsCount, setDeathsCount] = useState(0);

  useEffect(() => {
    // TODO should be done separately?
    Promise.all([
      statsService.getCasesCount(),
      statsService.getDeathsCount()
    ])
      .then(([resCases, resDeaths]) => {
        setCasesCount(resCases.count);
        setDeathsCount(resDeaths.count);
      });
  }, []);

  return (
    <div>
      <Filters />
      <hr />
      <Stats casesCount={casesCount} deathsCount={deathsCount} />
    </div>
  );
}

export default App;
