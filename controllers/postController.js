const { ObjectId } = require("mongodb");
const socialPostModel = require("../models/socialPost.models");
class PostController {
  // UPLOAD POST
  static uploadPost = async (req, res) => {
    try {
      const data = req.body;
      const postData = new socialPostModel({
        ...data,
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
  //   FIND ALL POST
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
        status: "failed",
        message: "Find Fail All Post",
      });
    }
  };
  //   UPDATE POST
  static updatePost = async (req, res) => {
    try {
      const updatedPostData = req.body;
      const filter = { _id: ObjectId(req.params.id) };
      const doc = {
        $set: {
          ...updatedPostData,
        },
      };
      const result = await socialPostModel.updateOne(filter, doc, {
        upsert: true,
      });
      res.status(201).json({
        status: "success",
        message: "Successfully Update Post",
        result: result,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        status: "failed",
        message: "Failed Update Post, Something Went Wrong",
      });
    }
  };
  //   DELETE POST
  static deletePost = async (req, res) => {
    try {
      const query = { _id: ObjectId(req.params.id) };
      const result = await socialPostModel.deleteOne(query);
      res.status(201).json({
        status: "success",
        message: "Post Delete Successfull",
        result: result,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        status: "failed",
        message: "Post Delete Failed, Try Again",
      });
    }
  };
  //   ADD POST COMMENT
  static addComment = async (req, res) => {
    const query = { _id: ObjectId(req.params.id) };

    const doc = {
      $set: {
        date: "20/45/54560",
        comment: [{ name: "akib" }],
      },
    };
    const result = await socialPostModel.updateOne(query, doc, {
      upsert: true,
    });
    res.send(result);
    //   const result = await socialPostModel.updateOne(query)
  };
}

module.exports = PostController;
