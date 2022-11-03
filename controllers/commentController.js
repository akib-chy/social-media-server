const commentModel = require("../models/commentSchema");

class CommentController {
  static uploadPost = async (req, res) => {
    try {
      const data = req.body;
      const comment = new commentModel({
        ...data,
      });
      await comment.save();
      res.status(201).send({
        status: "success",
        Message: "Your Comment Upload Successfull",
        result: comment,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        status: "failed",
        Message: "Your Comment Upload failed, Try Again",
      });
    }
  };
}
module.exports = CommentController;
