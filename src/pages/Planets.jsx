import { useState } from "react";
import { useQuery } from "react-query";

import PlanetCard from "./../components/PlanetCard";
import Pagination from "../components/Pagination";

function Planets() {
  //Page State
  const [page, setPage] = useState(1);
  //Query Function
  const fetchPlanets = async (page = 1) => {
    const res = await fetch("https://swapi.dev/api/planets?page=" + page);
    return res.json();
  };
  //useQuery
  const { data, status, isPreviousData } = useQuery({
    queryKey: ["planets", page],
    queryFn: () => fetchPlanets(page),
    keepPreviousData: true,
  });

  return (
    <div>
      <h2>Planets</h2>
      {status == "loading" && <div>Loading Data...</div>}
      {status == "error" && <div>Error Fetching Data...</div>}
      {status == "success" && (
        <div>
          <Pagination
            isPreviousData={isPreviousData}
            page={page}
            setPage={setPage}
            data={data}
          />

          {data.results.map((planet) => (
            <PlanetCard key={planet.name} planet={planet} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Planets;
