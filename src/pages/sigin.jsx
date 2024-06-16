import React from "react";
import "./signin.css";
import { Link } from "react-router-dom";

const Sigin = () => {
  return (
    <div className="s-bk">
      <div className="wrappert">
        <h1 className="headd">Hello Again!</h1>
        <p className="tooo">
          Welcome back you've <br /> been missed!
        </p>
        <form className="bacc">
          <input type="texttt" placeholder="Enter username" />
          <input type="passwordd" placeholder="Password" />
          <p className="recover">
            <a className="tingww" href="#">
              Recover Password
            </a>
          </p>
        </form>
        <button className="m">Sign in</button>
        <p className="or">----- or continue with -----</p>
        <div className="icons">
          <i className="fab fa-google"></i>
          <i className="fab fa-github"></i>
          <i className="fab fa-facebook"></i>
        </div>
        <div className="not-member">
          Not a member? <Link to={"/sign-up"}> Register Now</Link>
        </div>
      </div>
    </div>
  );
};

export default Sigin;
