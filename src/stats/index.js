import React, {useEffect, useState} from 'react';
import Stat from "./Stat";
import {getCasesCount} from "../services/stats";

const Stats = () => {
  const [casesCount, setCasesCount] = useState(0);
  const [deathsCount, setDeathsCount] = useState(0);

  useEffect(() => {
    getCasesCount()
      .then(res => setCasesCount(res.count));
  }, []);

  return (
    <div>
      <Stat description="Registered cases" count={casesCount} />
      <Stat description="Deaths" count={deathsCount} />
    </div>
  );
};

export default Stats;
