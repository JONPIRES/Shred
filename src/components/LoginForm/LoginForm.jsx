import { useState } from "react";
import * as usersService from "../../utilities/users-service";
import { Link } from "react-router-dom"

export default function LoginForm({ setUser }) {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError("");
  }

  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    // window.location.replace("/");
    try {
      // The promise returned by the signUp service method
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await usersService.login(credentials);
      setUser(user);
      window.location.replace('/')
      
     
    } catch {
      setError("Log In Failed - Try Again");
    }
  }

  return (
    <div className="container container-fluid " style={{ minHeight: '100vh', height: 'auto', marginTop: '10em' }}>
      <div className="container d-flex justify-content-center align-items-center mt-2" >
        <form autoComplete="off" onSubmit={handleSubmit} style={{ width: '25em', border: 'solid black 3px', borderRadius: '1.5em' }} className="p-4">
          <label className="form-label">Email</label>
          <input
            type="text"
            name="email"
            value={credentials.email}
            onChange={handleChange}
            required
            className="form-control"
          />
          <label className="form-label">Password</label>
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            required
            className="form-control"
          />
          <button type="submit" className="btn btn-dark " style={{marginRight:"1.5em", marginTop:'2em'}}>LOG IN</button>
          <Link className="text-light link-underline-opacity-0 btn btn-dark " to="/signup" style={{ marginTop: '2em' }}> SIGN UP</Link>
        </form>
       
      </div>
      <p className="error-message">&nbsp;{error}</p>
      
    </div>
  );
}
