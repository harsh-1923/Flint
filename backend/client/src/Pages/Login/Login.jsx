import React, { useState, useContext, useEffect } from "react";
import "./login.css";

import { useNavigate } from "react-router-dom";
import GoogleLogin from "react-google-login";

import AuthServices from "../../Services/AuthServices.js";
import { AuthContext } from "../../Context/AuthContext.js";

const Login = () => {
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);

  useEffect(() => {
    if (authContext.isAuthenticated) {
      navigate("/userhome");
    }
  }, []);

  const responseGoogle = (response) => {
    console.log(response.profileObj);
    const { email, name, imageUrl, googleId } = response.profileObj;

    const user = { email, password: googleId };

    AuthServices.login(user).then((res) => {
      if (res.isAuthenticated) {
        console.log(res);
        const { username, email, url, premium } = res.user;
        const newUser = { username, email, link: imageUrl, p: premium };

        // console.log(newUser);
        authContext.setUser(newUser);
        authContext.setIsAuthenticated(true);

        localStorage.setItem("user", JSON.stringify(newUser));
        navigate("/userhome");
      }
    });
  };

  const responseErrorGoogle = (response) => {};

  return (
    <div className="login-wrapper">
      <GoogleLogin
        className="google-login"
        clientId="475369169265-k0v6g1q8eu63ebgorprqovppcd3do3tq.apps.googleusercontent.com"
        buttonText="Login with Google"
        onSuccess={responseGoogle}
        onFailure={responseErrorGoogle}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
};

export default Login;
