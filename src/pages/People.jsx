import { useState } from "react";
import { useQuery } from "react-query";
import PersonCard from "../components/PersonCard";
import Pagination from "../components/Pagination";

function People() {
  //Page State
  const [page, setPage] = useState(1);
  //Query Function
  const fetchPeople = async (page = 1) => {
    const res = await fetch("https://swapi.dev/api/people?page=" + page);
    return res.json();
  };
  const { data, status, isPreviousData } = useQuery({
    queryKey: ["people", page],
    queryFn: () => fetchPeople(page),
    keepPreviousData: true,
  });

  return (
    <div>
      <h2>People</h2>
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
          {data.results.map((person) => (
            <PersonCard key={person.name} person={person} />
          ))}
        </div>
      )}
    </div>
  );
}

export default People;
