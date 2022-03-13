import React from 'react';
import FromToFilter from "./FromToFilter";
import {paramNames} from "./utils";

const DateFilter = (props) => {
  return (
    <div>
      <FromToFilter
        title="Date"
        from={
          <input
            type="date"
            name={paramNames.dateFrom}
            value={props.query[paramNames.dateFrom]}
            onChange={props.onChange}
          />
        }
        to={
          <input
            type="date"
            name={paramNames.dateTo}
            value={props.query[paramNames.dateTo]}
            onChange={props.onChange}
          />
        }
      />
    </div>
  );
};

export default DateFilter;
