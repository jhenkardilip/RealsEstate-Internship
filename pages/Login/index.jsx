import React, { useState } from "react";
import "./styles.css";
import SignInForm from "./SignIn";
import SignUpForm from "./SignUp";

export default function GetStarted() {
  const [type, setType] = useState("signIn");
  const handleOnClick = (text) => {
    if (text !== type) {
      setType(text);
      return;
    }
  };
  const containerClass =
    "container " + (type === "signUp" ? "right-panel-active" : "");
  return (
    <div className="App sm:scale-75 sm:flex sm:justify-center sm:items-center sm:w-screen">
      <div className={containerClass} id="container">
        <SignUpForm />
        <SignInForm />
        <div className="overlay-container ">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1 className="text-2xl">Welcome Back!</h1>
              <p className="text-left text-lg">
                To keep using your existing account please login with your
                details.
              </p>
              <button
                className="ghost rounded-lg text-md"
                id="signIn"
                onClick={() => handleOnClick("signIn")}
              >
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1 className="text-2xl">Hello, User!</h1>
              <p className="text-left text-lg">
                Enter your personal details and start your journey with us
              </p>
              <button
                className="ghost rounded-lg text-md"
                id="signUp"
                onClick={() => handleOnClick("signUp")}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
