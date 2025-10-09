import React from "react";
import { useNavigate } from "react-router-dom";
import googleSVG from "../../assets/images/google.svg";
import facebookSVG from "../../assets/images/facebook.svg";
import linkedinSVG from "../../assets/images/linkedin.svg";

function SignInForm() {
  const [state, setState] = React.useState({
    identifier: "", // Changed from email to identifier
    password: "",
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

    const { identifier, password } = state;
    if (identifier && password) {
      window.sessionStorage.setItem("Logged In", true);
      navigate("/account");
    }

    for (const key in state) {
      setState({
        ...state,
        [key]: "",
      });
    }
  };

  const navigate = useNavigate();

  return (
    <div className="form-container sign-in-container ">
      <form onSubmit={handleOnSubmit}>
        <h1>Sign in</h1>
        <div className="social-container sm:flex">
          <a href="#" className="social">
            <img src={facebookSVG} alt="Facebook" />
          </a>
          <a href="#" className="social">
            <img src={googleSVG} alt="Google" />
          </a>
          <a href="#" className="social">
            <img src={linkedinSVG} alt="LinkedIn" />
          </a>
        </div>
        <span>or use your account</span>
        <input
          type="text" // Change type to text for both email and phone
          placeholder="Email or Phone"
          name="identifier"
          value={state.identifier}
          onChange={handleChange}
          className="inp"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={state.password}
          onChange={handleChange}
          className="inp"
          minLength="8"
          required
        />
        <a
          onClick={() => navigate("/ResetPassword")}
          className=" text-blue-500 cursor-pointer"
        >
          Forgot your Password?
        </a>
        <button className="rounded-lg text-md">Sign In</button>
      </form>
    </div>
  );
}

export default SignInForm;
