import React, {useState} from 'react';
import Stat from "./Stat";

const Stats = () => {
  const [casesCount, setCasesCount] = useState(0);
  const [deathsCount, setDeathsCount] = useState(0);

  return (
    <div>
      <Stat description="Registered cases" count={casesCount} />
      <Stat description="Deaths" count={deathsCount} />
    </div>
  );
};

export default Stats;
