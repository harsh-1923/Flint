const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  premium: {
    type: Boolean,
    default: false,
  },
  url: {
    type: String,
    required: false,
  },
  userNoteID: {
    type: String,
    required: true,
  },
  userTodoID: {
    type: String,
    required: true,
  },
  userLinksID: {
    type: String,
    req: true,
  },
  workspaceID: {
    type: String,
    req: true,
  },
});

module.exports = mongoose.model("User", UserSchema);
