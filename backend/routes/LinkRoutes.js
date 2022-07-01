const express = require("express");
const LinkRouter = express.Router();

const { createLink } = require("../controllers/LinkContrlllers.js");

LinkRouter.post("/create", createLink);

module.exports = LinkRouter;
