const mongoose = require("mongoose");

// Defining Schema
const socialPostSchema = new mongoose.Schema({
  authorName: { type: String, required: true, trim: true },
  authorImg: { type: String, required: true, trim: true },
  image: { type: String, required: true, trim: true },
  title: { type: String, required: true, trim: true },
  shortTitle: { type: String, required: true, trim: true },
  bodyText: { type: String, required: true, trim: true },
});

// Model
const socialPostModel = mongoose.model("all-post", socialPostSchema);
module.exports = socialPostModel;
