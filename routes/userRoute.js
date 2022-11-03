const express = require("express");
const CommentController = require("../controllers/commentController");
const PostController = require("../controllers/commentController");
const router = express.Router();
const UserController = require("../controllers/userController");
const checkUserAuth = require("../middlewares/auth-middlewares");

// ROute Level Middleware - To Protect Route
router.use("/changepassword", checkUserAuth);
router.use("/loggeduser", checkUserAuth);

// Public Routes
router.post("/signUp", UserController.userRegistration);
router.post("/signIn", UserController.userLogin);
router.post(
  "/send-reset-password-email",
  UserController.sendUserPasswordResetEmail
);
router.post("/reset-password/:id/:token", UserController.userPasswordReset);

module.exports = router;
