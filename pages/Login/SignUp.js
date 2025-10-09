import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import googleSVG from "../../assets/images/google.svg";
import facebookSVG from "../../assets/images/facebook.svg";
import linkedinSVG from "../../assets/images/linkedin.svg";

function SignUpForm() {
  const [isPwdMatching, setIsPwdMatching] = useState(null);
  const navigate = useNavigate();
  const [state, setState] = React.useState({
    name: "",
    identifier: "",
    password: "",
    re_password: "",
    type: "",
    registration_type: "email",
    signupOption: "email",
  });

  const handleChange = (evt) => {
    const { name, value, type, checked } = evt.target;
    setState((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? (checked ? value : "") : value,
    }));
  };

  const handleSignupOptionChange = (option) => {
    const registration_type = option === "phone" ? "phone" : "email";
    setState((prevState) => ({
      ...prevState,
      signupOption: option,
      registration_type: registration_type,
      identifier: "",
    }));
  };

  const handleOnSubmit = async (evt) => {
    evt.preventDefault();
    const { name, identifier, password, re_password, registration_type, type } = state;

    if (!name || !identifier || !password || !re_password) {
      console.log('Required fields are empty, aborting submission');
      return;
    }

    try {
      if (password !== re_password) {
        setIsPwdMatching(false);
        alert('Passwords do not match');
        return;
      }

      if (!registration_type) {
        alert('Please select phone or email registration');
        return;
      }

      const response = await axios.post(
        'http://localhost:8000/api/user/register/',
        {
          name,
          identifier,
          password,
          re_password,
          registration_type,
          type,
        }
      );

      setIsPwdMatching(true);
      alert(response.data.message);

      // Store the token in localStorage (adjust based on your backend response structure)
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
      } else {
        console.warn("No token received from backend. User might need to log in manually.");
      }

      setState({
        name: "",
        identifier: "",
        password: "",
        re_password: "",
        type: "",
        registration_type: "email",
        signupOption: "email",
      });

      // window.open('/new-profile', '_blank');
      // navigate('/Login');
      navigate('/account');


    } catch (error) {
      console.error('Error during registration:', error);
      setIsPwdMatching(null);
      const errorMessage =
        error.response?.data?.message ||
        error.response?.statusText ||
        'Registration failed due to server error';
      alert(`Registration error: ${errorMessage}`);
    }
  };

  const handleSocialLogin = (platform) => {
    console.log(`Initiating ${platform} login`);
  };

  const handleKeyDown = (platform, event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleSocialLogin(platform);
    }
  };

  return (
    <div className="form-container sign-up-container">
      <form
        onSubmit={handleOnSubmit}
        className="sm:flex sm:overflow-auto sm:gap-2 sm:h-screen"
        autoComplete="off"
      >
        <h1>Create Account</h1>
        <div className="social-container sm:flex">
          <a
            className="social"
            role="button"
            tabIndex="0"
            onClick={() => handleSocialLogin("Facebook")}
            onKeyDown={(e) => handleKeyDown("Facebook", e)}
            aria-label="Sign up with Facebook"
          >
            <img src={facebookSVG} alt="Facebook" />
          </a>
          <a
            className="social"
            role="button"
            tabIndex="0"
            onClick={() => handleSocialLogin("Google")}
            onKeyDown={(e) => handleKeyDown("Google", e)}
            aria-label="Sign up with Google"
          >
            <img src={googleSVG} alt="Google" />
          </a>
          <a
            className="social"
            role="button"
            tabIndex="0"
            onClick={() => handleSocialLogin("LinkedIn")}
            onKeyDown={(e) => handleKeyDown("LinkedIn", e)}
            aria-label="Sign up with LinkedIn"
          >
            <img src={linkedinSVG} alt="LinkedIn" />
          </a>
        </div>
        <span className="sm:flex-col">
          <input
            className="rounded-lg text-md mr-2 border-2 border-solid border-slate-500 sm:flex sm:mx-auto"
            type="radio"
            name="signupOption"
            value="phone"
            checked={state.signupOption === "phone"}
            onChange={() => handleSignupOptionChange("phone")}
            id="signphone"
          />
          <label
            className="text-blue-500 cursor-pointer text-md"
            htmlFor="signphone"
          >
            Sign up with phone
          </label>
            
          <input
            className="rounded-lg text-md mr-2 border-2 border-solid border-slate-500 sm:flex sm:mx-auto"
            type="radio"
            name="signupOption"
            value="email"
            checked={state.signupOption === "email"}
            onChange={() => handleSignupOptionChange("email")}
            id="signmail"
          />
          <label
            className="text-blue-500 cursor-pointer text-md"
            htmlFor="signmail"
          >
            Sign up with email
          </label>
        </span>
        <input
          type={state.signupOption === "phone" ? "tel" : "text"}
          name="identifier"
          value={state.identifier}
          onChange={handleChange}
          placeholder={state.signupOption === "phone" ? "Phone Number" : "Email"}
          className="inp"
          required
          minLength={state.signupOption === "phone" ? "10" : ""}
          maxLength={state.signupOption === "phone" ? "10" : ""}
        />
        <input
          type="text"
          name="name"
          value={state.name}
          onChange={handleChange}
          placeholder="Full Name"
          className="inp"
          required
        />
        <div className="flex items-center my-2 gap-2 sm:flex-col">
          Are you a broker?
          <input
            type="checkbox"
            id="brokerCheckbox"
            name="type"
            value="Broker"
            checked={state.type === "Broker"}
            onChange={handleChange}
            className="rounded-lg text-md mr-2 border-2 border-solid border-slate-500"
          />
          <label
            htmlFor="brokerCheckbox"
            className="text-sm font-medium text-gray-600"
          >
            Broker
          </label>
        </div>
        <input
          type="password"
          name="password"
          value={state.password}
          onChange={handleChange}
          placeholder="Enter Password"
          className="inp"
          required
          minLength="8"
        />
        <input
          type="password"
          name="re_password"
          value={state.re_password}
          onChange={handleChange}
          placeholder="Confirm Password"
          className="inp"
          required
          minLength="8"
        />
        {isPwdMatching === false && (
          <p className="text-red-500 m-0">Passwords do not match</p>
        )}
        <button className="rounded-lg text-md mt-2">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUpForm;