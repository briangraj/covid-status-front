import React from 'react';
import {FormControl} from "@mui/material";

const SelectFilter = (props) => {
  return (
    <FormControl>
      <label>
        {props.title}:
        <select
          name={props.name}
          value={props.value}
          onChange={props.onChange}
        >
          <option value={""}>Any</option>
          {props.possibleValues.map(possibleValue => (
            <option key={possibleValue} value={possibleValue}>{possibleValue}</option>
          ))}
        </select>
      </label>
    </FormControl>
  );
};

export default SelectFilter;
