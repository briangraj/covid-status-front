import React, {useState} from 'react';
import {InputLabel, MenuItem, Select} from "@mui/material";

const SelectFilter = (props) => {
  const labelId = "select-" + props.labelId;
  const [value, setValue] = useState();

  const handleChange = event => {
    setValue(event.target.value);
  };

  return (
    <div>
      <InputLabel id={labelId}>{props.name}</InputLabel>
      <Select
        labelId={labelId}
        value={value}
        label={props.name}
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {props.possibleValues.map(possibleValue => (
          <MenuItem value={possibleValue}>{possibleValue}</MenuItem>
        ))}
      </Select>
    </div>
  );
};

export default SelectFilter;
