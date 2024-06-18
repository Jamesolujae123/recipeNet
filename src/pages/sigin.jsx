import React, { useState, useEffect, useContext } from "react";
import "./signin.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Toaster, toast } from "sonner";
import { User, Welcome } from "../AppContext";
import { AppContext } from "../AppContext";
import axios from "axios";

const Sigin = () => {
  const [signValues, setSignValues] = useState({
    username: "",
    Password: "",
  });

  const data = useContext(AppContext);
  const usr = useContext(User);

  const welc = useContext(Welcome);

  const [pending, setPending] = useState(false);

  const navigateTo = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignValues((prevVal) => ({ ...prevVal, [name]: value }));
  };

  const validateInputs = () => {
    let errors = {};
    if (!signValues.username || signValues.username.length == 0) {
      errors.username = "username cannot be empty";
    }
    if (!signValues.Password) {
      errors.Password = "password cannot be empty";
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPending(true);
    const validated = validateInputs();
    console.log(validated);
    console.log(Object.keys(validated));
    // If no errros
    if (Object.keys(validated).length == 0) {
      setTimeout(() => {
        // console.log("Submitted Successfully!");
        toast.success("Sign up successful!");
        setPending(false);
      }, 2000);
      data.setIsLoggedin(true);
      welc.setWelcome(true);
      navigateTo("/");
      usr.setUser(signValues.username);
    } else {
      toast("Invalid inputs, please try");
      setPending(false);
    }
  };

  return (
    <div className="s-bk">
      <Toaster />
      <div className="wrappert">
        <h1 className="headd">Hello Again!</h1>
        <p className="tooo">
          Welcome back you've <br /> been missed!
        </p>
        <form onSubmit={handleSubmit} className="bacc">
          <input
            name="username"
            type="text"
            value={signValues.username}
            onChange={handleChange}
            placeholder="Enter username"
          />
          <input
            name="Password"
            type="password"
            value={signValues.Password}
            onChange={handleChange}
            placeholder="Password"
          />
          <p className="recover">
            <a className="tingww" href="#">
              Recover Password
            </a>
          </p>
          <button disabled={pending} className="m">
            {pending ? "Signing" : "Sign in"}
          </button>
        </form>

        <p className="or">----- or continue with -----</p>
        <div className="icons">
          <i className="fab fa-google"></i>
          <i className="fab fa-github"></i>
          <i className="fab fa-facebook"></i>
        </div>
        <div className="not-member">
          Not a member? <Link to={"/sign-up"}>Register Now</Link>
        </div>
      </div>
    </div>
  );
};

export default Sigin;
