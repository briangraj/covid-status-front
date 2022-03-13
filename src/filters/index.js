import React from 'react';
import SelectFilter from "./SelectFilter";
import {Button} from "@mui/material";
import {paramNames} from "./utils";

const genders = ["F", "M"];

const Filters = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <SelectFilter
        title="Gender"
        labelId="gender"
        possibleValues={genders}
        onChange={props.onChange}
        name={paramNames.gender}
        value={props.query.gender}
      />
      <br/>
      <Button
        type="submit"
        variant="contained"
      >
        Filter
      </Button>
    </form>
  );
};

export default Filters;
