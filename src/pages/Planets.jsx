import { useQuery } from "react-query";

import PlanetCard from "./../components/PlanetCard";

const fetchPlanets = async () => {
  const res = await fetch("https://swapi.dev/api/planets");
  return res.json();
};

function Planets() {
  const { data, status } = useQuery("planets", fetchPlanets);

  return (
    <div>
      <h2>Planets</h2>
      {status == "loading" && <div>Loading Data...</div>}
      {status == "error" && <div>Error Fetching Data...</div>}
      {status == "success" && (
        <div>
          {data.results.map((planet) => (
            <PlanetCard key={planet.name} planet={planet} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Planets;
