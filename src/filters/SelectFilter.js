import React, {useState} from 'react';
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";

const SelectFilter = (props) => {
  const labelId = "select-" + props.labelId;

  return (
    <FormControl style={{ minWidth: 120 }}>
      <InputLabel id={labelId}>{props.title}</InputLabel>
      <Select
        labelId={labelId}
        value={props.value}
        label={props.title}
        onChange={props.onChange}
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
