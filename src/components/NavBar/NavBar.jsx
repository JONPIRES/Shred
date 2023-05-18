import React from "react";
import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";
import "../NavBar/navbar.css";
import * as usersAPI from "../../utilities/users-api";

export default function NavBar({ user, setUser }) {
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await usersAPI.deleteUser(user);
      userService.logout();
      setUser(null);
    } catch (error) {
      console.log(error);
    }
  }

  function handleLogout() {
    userService.logout();
    setUser(null);
  }
  return (
    <div className="custom-navbar">
      {user ? (
        <nav
          className="navbar navbar-expand-lg bg-dark "
          style={{ height: "3em" }}>
          <div className="container-fluid d-flex justify-content-around">
            <Link
              to="/"
              className="text-light link-offset-2 link-offset-3-hover
       link-underline-light link-underline-opacity-0 link-underline-opacity-75-hover navbar-brand navbar-heading shred-bounce ">
              SHRED
            </Link>

            <div className="nav-item dropdown ">
              <Link
                className="nav-link dropdown-toggle text-light"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false">
                Workouts{" "}
              </Link>
              <div className="dropdown-menu">
                <div>
                  <Link className="dropdown-item" to="/workout">
                    My Workouts
                  </Link>
                </div>
                <div>
                  <Link className="dropdown-item" to="/workout/create">
                    Create Workout
                  </Link>
                </div>
              </div>
            </div>

            <div className="nav-item dropdown ">
              <Link
                className="nav-link dropdown-toggle text-light"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false">
                Exercises{" "}
              </Link>
              <div className="dropdown-menu">
                <div>
                  <Link className="dropdown-item " to="/exercise">
                    Available Exercises
                  </Link>
                </div>
                <div>
                  <Link className="dropdown-item " to="/create-exercise">
                    Add Exercise
                  </Link>
                </div>
              </div>
            </div>

            <div className="nav-item dropdown ">
              <Link
                className="nav-link dropdown-toggle text-light"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false">
                {user && user.name}
              </Link>
              <div className="dropdown-menu">
                <div>
                  <Link className="dropdown-item" to={`/profile/${user._id}`}>
                    Update Profile
                  </Link>
                </div>

                <div>
                  <form onSubmit={handleSubmit} className="dropdown-item">
                    <button className="btn" type="submit">
                      Delete Profile
                    </button>
                  </form>
                </div>

                <div>
                  <Link
                    className="dropdown-item "
                    onClick={handleLogout}
                    to="/login">
                    Logout
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      ) : (
        <nav
          className="navbar navbar-expand-lg bg-dark"
          style={{ height: "3em" }}>
          <div className="container-fluid d-flex justify-content-around">
            <Link
              to="/"
              className="text-light link-offset-2 link-offset-3-hover
       link-underline-light link-underline-opacity-0 link-underline-opacity-75-hover navbar-brand navbar-heading">
              SHRED
            </Link>
            <Link
              to="/exercise"
              className="text-light link-offset-2 link-offset-3-hover 
      link-underline-light link-underline-opacity-0 link-underline-opacity-75-hover">
              Exercises
            </Link>

            <Link
              to="/login"
              className="text-light link-offset-2 link-offset-3-hover 
      link-underline-light link-underline-opacity-0 link-underline-opacity-75-hover">
              Login
            </Link>
          </div>
        </nav>
      )}
    </div>
  );
}
