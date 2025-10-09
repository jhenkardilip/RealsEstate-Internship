import React, { useState } from "react";
function SignUpForm() {
  const [state, setState] = React.useState({
    name: "",
    email: "",
    password: "",
    type: "",
  });
  const handleChange = (evt) => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  };

  const handleOnSubmit = (evt) => {
    evt.preventDefault();

    const { name, email, password } = state;
    alert(
      `You have signed up with name: ${name} email: ${email} and password: ${password}`
    );

    for (const key in state) {
      setState({
        ...state,
        [key]: "",
      });
    }
  };

  return (
    <div className="form-container sign-up-container">
      <form onSubmit={handleOnSubmit}>
        <h1>Create Account</h1>
        <div className="social-container">
          <a href="#" className="social">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="#" className="social">
            <i className="fab fa-google-plus-g" />
          </a>
          <a href="#" className="social">
            <i className="fab fa-linkedin-in" />
          </a>
        </div>
        <span>or use your email for registration</span>
        <input
          type="text"
          name="name"
          value={state.name}
          onChange={handleChange}
          placeholder="Full Name"
        />
        <div className="flex flex-col">
        <label
              for="Type"
              className="block text-sm font-medium text-gray-600 rounded-lg"
            >
              Type
            </label>
        <select
        id="Type"
          type="radio"
          name="Type"
          value={state.type}
          onChange={handleChange}
          className="rounded-lg text-md my-2"
        >
          <option label="Broker"></option>
          <option label="Buyer"></option>
          <option label="Investor"></option>
        </select></div>
        <input
          type="email"
          name="email"
          value={state.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          value={state.password}
          onChange={handleChange}
          placeholder="Password"
        />
        <button className="rounded-lg text-md mt-2">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUpForm;
