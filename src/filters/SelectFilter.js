import React, {useState} from 'react';
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";

const SelectFilter = (props) => {
  const labelId = "select-" + props.labelId;
  const [value, setValue] = useState("");

  const handleChange = event => {
    setValue(event.target.value);
  };

  return (
    <FormControl style={{ minWidth: 120 }}>
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
          <MenuItem key={possibleValue} value={possibleValue}>{possibleValue}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectFilter;
