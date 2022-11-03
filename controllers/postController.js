const socialPostModel = require("../models/socialPost.models");
const date = new Date();
class PostController {
  static uploadPost = async (req, res) => {
    try {
      const data = req.body;
      const postData = new socialPostModel({
        ...data,
        date,
      });
      await postData.save();
      res.status(201).send({
        status: "success",
        message: "Post Added Successfull",
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        status: "failed",
        message: "Post Uploaded Failed Something went Wrong",
      });
    }
  };
  static findAllPost = async (req, res) => {
    try {
      const result = await socialPostModel.find();
      res.status(201).json({
        status: "success",
        message: "Find All Post Successful",
        post: result,
      });
    } catch (error) {
      console.log(error);
      res.status(50).json({
        status: "faild",
        message: "Find Fail All Post",
      });
    }
  };
}

module.exports = PostController;
