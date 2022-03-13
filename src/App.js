import Stats from "./stats";
import Filters from "./filters";
import {useEffect, useState} from "react";
import statsService from "./services/stats";
import {paramNames} from "./filters/utils";

function App() {
  const [casesCount, setCasesCount] = useState(0);
  const [deathsCount, setDeathsCount] = useState(0);
  const [query, setQuery] = useState({
    [paramNames.gender]: "",
    [paramNames.ageFrom]: "",
    [paramNames.ageTo]: "",
    [paramNames.dateFrom]: "",
    [paramNames.dateTo]: "",
  });

  const refreshStats = (query = {}) => {
    statsService.getStats(query)
      .then(stats => {
        setCasesCount(stats.casesCount);
        setDeathsCount(stats.deathsCount);
      });
  };

  useEffect(refreshStats, []);

  const handleInputChange = (event) => {
    const { value, name } = event.target;

    setQuery(currentQuery => ({
      ...currentQuery,
      [name]: value,
    }))
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    refreshStats(query);
  };

  return (
    <div>
      <Filters
        onChange={handleInputChange}
        handleSubmit={handleSubmit}
        query={query}
      />
      <hr />
      <Stats casesCount={casesCount} deathsCount={deathsCount} />
    </div>
  );
}

export default App;
