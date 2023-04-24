import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";
export default function NavBar({ user, setUser }) {
  function handleLogout() {
    userService.logout();
    setUser(null);
  }
  return (
    <nav>
      <Link to="/create-workout">Create Workout Plan</Link>
      &nbsp; | &nbsp;
      <Link to="/workout">Workout Plan</Link>
      &nbsp; | &nbsp;
      <Link to="/exercise">Exercises</Link>
      &nbsp;&nbsp;
      
      <span>Welcome, {user && user.name} </span>
      &nbsp;&nbsp;
      <Link to="" onClick={handleLogout}>
        Log Out
      </Link>
    </nav>
  );
}
