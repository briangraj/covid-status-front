import React, {useState} from 'react';
import Stat from "./Stat";
import SyncData from "./SyncData";

const Stats = (props) => {
  return (
    <section>
      <Stat description="Registered cases" count={props.casesCount} />
      <Stat description="Deaths" count={props.deathsCount} />
      <SyncData />
    </section>
  );
};

export default Stats;
