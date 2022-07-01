import React, { useContext } from "react";
import "./signup.css";

import GoogleLogin from "react-google-login";
import AuthServices from "../../Services/AuthServices.js";
import { AuthContext } from "../../Context/AuthContext.js";

import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  const responseGoogle = (response) => {
    const { givenName, familyName, email, imageUrl, googleId } =
      response.profileObj;

    const user = {};
    user.username = givenName + " " + familyName;
    user.email = email;
    user.password = googleId.toString();
    user.url = imageUrl;

    AuthServices.signup(user).then((data) => {
      console.log(data);
      const { username, email, url, premium } = data.newUser;
      console.log(username, email, url, premium, "Check here");

      authContext.setUser({
        name: username,
        email: email,
        link: url,
        p: false,
      });
      authContext.setIsAuthenticated(false);
      console.log(authContext.isAuthenticated);

      console.log(authContext.user);
      localStorage.setItem("user", JSON.stringify(user));

      navigate("/userhome");
    });
  };

  const responseErrorGoogle = () => {
    console.log("here again");
  };

  return (
    <div className="signup-wrapper">
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

export default SignUp;
