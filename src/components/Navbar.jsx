import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <NavLink to="planets">Planets</NavLink>
      <NavLink to="people">People</NavLink>
    </nav>
  );
}

export default Navbar;
