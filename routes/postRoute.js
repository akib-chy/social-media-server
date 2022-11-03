const express = require("express");
const PostController = require("../controllers/postController");
const router = express.Router();

// Public Routes
router
  .route("/")
  .post(PostController.uploadPost)
  .get(PostController.findAllPost);

module.exports = router;
