import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";
export default function NavBar({ user, setUser }) {
  function handleLogout() {
    userService.logout();
    setUser(null);
  }
  return (
    <nav className="navbar bg-dark text-light">
      <Link to="/create-exercise" className="text-light link-offset-2 link-offset-3-hover
       link-underline-light link-underline-opacity-0 link-underline-opacity-75-hover">Create Exercise</Link>
      &nbsp; | &nbsp;
      <Link to="/workout" className="text-light link-offset-2 link-offset-3-hover
       link-underline-light link-underline-opacity-0 link-underline-opacity-75-hover">Workout Plan</Link>
      &nbsp; | &nbsp;
      <Link to="/exercise" className="text-light link-offset-2 link-offset-3-hover 
      link-underline-light link-underline-opacity-0 link-underline-opacity-75-hover">Exercises</Link>
      &nbsp; | &nbsp;

      <span className="nav-item dropdown"> {user && user.name} </span>
      &nbsp; | &nbsp;
      <Link to="/exercise" onClick={handleLogout} className="text-light link-offset-2 link-offset-3-hover 
      link-underline-light link-underline-opacity-0 link-underline-opacity-75-hover">
        Log Out
      </Link>
    </nav>
  );
}
