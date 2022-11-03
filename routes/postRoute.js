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
// router.patch("/update/:id", PostController.updatePost);
// router.delete("/delete/:id", PostController.deletePost);

module.exports = router;
