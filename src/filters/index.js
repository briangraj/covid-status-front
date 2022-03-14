import React, {useState} from 'react';
import SelectFilter from "./SelectFilter";
import {Button} from "@mui/material";
import {paramNames} from "./utils";
import AgeFilter from "./AgeFilter";
import DateFilter from "./DateFilter";

const genders = ["F", "M"];

const Filters = (props) => {
  const [query, setQuery] = useState({
    [paramNames.gender]: "",
    [paramNames.ageFrom]: "",
    [paramNames.ageTo]: "",
    [paramNames.dateFrom]: "",
    [paramNames.dateTo]: "",
  });

  const handleInputChange = (event) => {
    const { value, name } = event.target;

    setQuery(currentQuery => ({
      ...currentQuery,
      [name]: value,
    }))
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    props.refreshStats(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <SelectFilter
        title="Gender"
        labelId="gender"
        possibleValues={genders}
        onChange={handleInputChange}
        name={paramNames.gender}
        value={query.gender}
      />

      {/*TODO add state filter*/}

      <AgeFilter
        query={query}
        onChange={handleInputChange}
      />

      <DateFilter
        query={query}
        onChange={handleInputChange}
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
