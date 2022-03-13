import React from 'react';
import {FormControl} from "@mui/material";

const FromToFilter = (props) => {
  return (
    <FormControl>
      <h2>{props.title}</h2>
      <label>
        From: {props.from}
      </label>
      <label>
        To: {props.to}
      </label>
    </FormControl>
  );
};

export default FromToFilter;
