import React from 'react';
import SelectFilter from "./SelectFilter";

const genders = ["F", "M"];

const Filters = () => {
  return (
    <form>
      <SelectFilter
        name="Gender"
        labelId="gender"
        possibleValues={genders}
      />
    </form>
  );
};

export default Filters;
