import React from 'react';
import Stat from "./Stat";

const Stats = () => {
  return (
    <div>
      <Stat description="Registered cases" count={0} />
      <Stat description="Deaths" count={1} />
    </div>
  );
};

export default Stats;
