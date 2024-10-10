import { NavLink } from "react-router-dom";

export function Navigation() {
  return (
    <nav>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/other"}>Other</NavLink>
    </nav>
  );
}
