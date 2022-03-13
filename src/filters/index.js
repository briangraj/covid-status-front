import React from 'react';
import SelectFilter from "./SelectFilter";

const genders = ["F", "M"];

const Filters = (props) => {
  return (
    <form>
      <SelectFilter
        title="Gender"
        labelId="gender"
        possibleValues={genders}
        onChange={props.onChange}
        value={props.query.gender}
      />
    </form>
  );
};

export default Filters;
