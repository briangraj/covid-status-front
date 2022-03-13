import React from 'react';
import FromToFilter from "./FromToFilter";
import {paramNames} from "./utils";

const AgeFilter = (props) => {
  return (
    <div>
      <FromToFilter
        title="Age"
        from={
          <input
            type="number"
            name={paramNames.ageFrom}
            value={props.query[paramNames.ageFrom]}
            onChange={props.onChange}
          />
        }
        to={
          <input
            type="number"
            name={paramNames.ageTo}
            value={props.query[paramNames.ageTo]}
            onChange={props.onChange}
          />
        }
      />
    </div>
  );
};

export default AgeFilter;
