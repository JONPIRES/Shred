import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import * as usersAPI from "../../utilities/users-api";

function UpdateUser({ user, setUser }) {
  const navigate = useNavigate();
  const [updateUser, setUpdateUser] = useState({
    name: user.name,
    email: user.email,
    password: "",
    confirm: "",
    error: "",
    id: user._id,
  });

  const [error, setError] = useState("");

  function handleChange(e) {
    setUpdateUser({ ...updateUser, [e.target.name]: e.target.value });
    setError("");
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const { name, email, password, id } = updateUser;
      const form = { name, email, password, id };

      const userUpdate = await usersAPI.updateUser(form);
      setUser(userUpdate);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }
  const disable = updateUser.password !== updateUser.confirm;
  return (
    <div
      style={{ minHeight: "100vh", height: "auto", marginTop: "10em" }}
      className=" container container-fluid">
      <div className="container-fluid container ">
        <h1>Update {user?.name}</h1>
        <form autoComplete="off" onSubmit={handleSubmit}>
          <label className="form-label">Name</label>
          <input
            type="text"
            name="name"
            value={updateUser.name}
            onChange={handleChange}
            required
            className="form-control"
          />
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            value={updateUser.email}
            onChange={handleChange}
            required
            className="form-control"
          />
          <label className="form-label">Password</label>
          <input
            type="password"
            name="password"
            value={updateUser.password}
            onChange={handleChange}
            required
            className="form-control"
          />
          <label className="form-label">Confirm</label>
          <input
            type="password"
            name="confirm"
            value={updateUser.confirm}
            onChange={handleChange}
            required
            className="form-control"
          />
          <button
            type="submit"
            disabled={disable}
            className="btn btn-dark mt-3">
            Update
          </button>
        </form>
      </div>
      <p className="error-message text-dark">&nbsp;{updateUser.error}</p>
    </div>
  );
}

export default UpdateUser;
