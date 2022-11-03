const express = require("express");
const PostController = require("../controllers/postController");
const router = express.Router();

// Public Routes
router
  .route("/")
  .post(PostController.uploadPost)
  .get(PostController.findAllPost);
router
  .route("/:id")
  .patch(PostController.updatePost)
  .delete(PostController.deletePost);
router.post("/comment", PostController.addComment);
// router.delete("/delete/:id", PostController.deletePost);

module.exports = router;
