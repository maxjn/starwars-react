import { useQuery } from "react-query";
import PersonCard from "../components/PersonCard";

const fetchPeople = async () => {
  const res = await fetch("https://swapi.dev/api/people");
  return res.json();
};

function People() {
  const { data, status } = useQuery("people", fetchPeople);

  return (
    <div>
      <h2>People</h2>
      {status == "loading" && <div>Loading Data...</div>}
      {status == "error" && <div>Error Fetching Data...</div>}
      {status == "success" && (
        <div>
          {data.results.map((person) => (
            <PersonCard key={person.name} person={person} />
          ))}
        </div>
      )}
    </div>
  );
}

export default People;
