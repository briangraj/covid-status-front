import React, {useEffect, useState} from 'react';
import Stat from "./Stat";
import statsService from "../services/stats";

const Stats = () => {
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
      <Stat description="Registered cases" count={casesCount} />
      <Stat description="Deaths" count={deathsCount} />
    </div>
  );
};

export default Stats;
