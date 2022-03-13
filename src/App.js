import Stats from "./stats";
import Filters from "./filters";
import {useEffect, useState} from "react";
import statsService from "./services/stats";

function App() {
  const [casesCount, setCasesCount] = useState(0);
  const [deathsCount, setDeathsCount] = useState(0);
  const [query, setQuery] = useState({});

  const refreshStats = () => {
    statsService.getStats()
      .then(stats => {
        setCasesCount(stats.casesCount);
        setDeathsCount(stats.deathsCount);
      });
  };

  useEffect(refreshStats, []);

  const handleInputChange = (event) => {
    const { value, name } = event.target;

    setQuery({
      [name]: value
    })
  };

  return (
    <div>
      <Filters onChange={handleInputChange} query={query} />
      <hr />
      <Stats casesCount={casesCount} deathsCount={deathsCount} />
    </div>
  );
}

export default App;
