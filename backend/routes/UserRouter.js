const express = require("express");
const userRouter = express.Router();
const User = require("../models/User");
//const bcrypt = require("bcrypt");
const UserSchema = require("../models/User");

userRouter.post("/create", (req, res) => {
  const { username, email, password, url } = req.body;


  if (!username || !email || !password || !url) {
    return res.status(400).json({
      error: true,
      message: "Missing credentials",
      isAuthenticated: false,
    });
  }

  User.findOne({ email }, (err, user) => {
    if (err)
      return res.status(500).json({
        error: true,
        message: "Unexpected error, Please try again latter",
        isAuthenticated: false,
      });

    if (user) {
      return res.status(400).json({
        error: true,
        message: "Authentication failed - User already exists",
        isAuthenticated: false,
      });
    } else {
      const userNoteID = email.split("@")[0] + "-note-" + Date.now();
      const userTodoID = email.split("@")[0] + "-todo-" + Date.now();
      const userLinkID = email.split("@")[0] + "-link-" + Date.now();
      const workspaceID = email.split("@")[0] + "-ws-" + Date.now();

      const newUser = new UserSchema({
        username,
        email,
        password,
        url,
        userNoteID,
        userTodoID,
        userLinkID,
        workspaceID,
      });
      newUser.save((err) => {
        if (err)
          return res.status(400).json({
            error: true,
            message: "Couldnt create user",
            isAuthenticated: false,
          });
        else
          return res.status(200).json({
            error: false,
            message: "Welcome to Sagrid, user created",
            isAuthenticated: true,
            newUser,
          });
      });
    }
  });
});

userRouter.post("/login", (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);

  User.findOne({ email }, (err, user) => {
    if (err)
      return res.status(500).json({
        error: true,
        message: "Internal server error",
        isAuthenticated: false,
      });
    else {
      if (user) {
        if (user.password === password) {
          return res.status(200).json({
            error: false,
            message: "Welcome back to Flint",
            isAuthenticated: true,
            user,
          });
        } else {
          return res.status(201).json({
            error: false,
            message: "Incorrent credentials",
            isAuthenticated: false,
          });
        }
      } else {
        return res.status(201).json({
          error: false,
          message: "No Such user Exists",
          isAuthenticated: false,
        });
      }
    }
  });
});

module.exports = userRouter;
