import React from 'react';
import Stat from "./Stat";

const Stats = (props) => {
  return (
    <div>
      <Stat description="Registered cases" count={props.casesCount} />
      <Stat description="Deaths" count={props.deathsCount} />
    </div>
  );
};

export default Stats;
