const mongoose = require("mongoose");

// Defining Schema
const commentSchema = new mongoose.Schema({
  authorName: { type: String, required: true, trim: true },
  authorImg: { type: String, required: true, trim: true },
  comment: { type: String, required: true, trim: true },
  postId: { type: String, required: true, trim: true },
});

// Model
const commentModel = mongoose.model("post-comment", commentSchema);
module.exports = commentModel;
