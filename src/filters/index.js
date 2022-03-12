import React from 'react';
import SelectFilter from "./SelecFilter";

const genders = ["F", "M"];

const Filters = () => {
  return (
    <div>
      <SelectFilter
        name="Gender"
        labelId="gender"
        possibleValues={genders}
      />
    </div>
  );
};

export default Filters;
