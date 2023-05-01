import { Component } from "react";
import { signUp } from "../../utilities/users-service";

export default class SignUpForm extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    confirm: "",
    error: "",
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: "",
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    window.location.replace('/login')
    try {
      const { name, email, password } = this.state;
      const formData = { name, email, password };
      // The promise returned by the signUp service
      // method will resolve to the user object included
      // in the payload of the JSON Web Token (JWT)
      const user = await signUp(formData);
      // Baby step!
      this.props.setUser(user);
    } catch {
      // An error occurred
      // Probably due to a duplicate email
      this.setState({ error: "Sign Up Failed - Try Again" });
    }
  };

  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
      <div style={{ minHeight: '100vh', height: 'auto', marginTop:'10em'}} className=" container container-fluid fade-down">
        <div className="container-fluid container ">
          <form autoComplete="off" onSubmit={this.handleSubmit}>
            <label className="form-label">Name</label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              required
              className="form-control"
            />
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              required
              className="form-control"
            />
            <label className="form-label">Password</label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              required
              className="form-control"
            />
            <label className="form-label">Confirm</label>
            <input
              type="password"
              name="confirm"
              value={this.state.confirm}
              onChange={this.handleChange}
              required
              className="form-control"
            />
            <button type="submit" disabled={disable} className="btn btn-dark mt-3" >
              SIGN UP
            </button>
          </form>
        </div>
        <p className="error-message text-dark">&nbsp;{this.state.error}</p>
      </div>
    );
  }
}
