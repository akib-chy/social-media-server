const userCollection = require("../models/user.models");
const bcrypt = require("bcrypt");

const signUp = async (req, res) => {
  const { userName, email, password } = req.body;
  console.log(req.body);
  try {
    const existingUser = await userCollection.findOne({ email: email });
    console.log(existingUser);
    if (!existingUser) {
      return res.status(400).json({ message: "User Already Existing" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword);
    const result = await userCollection.create({
      userName: userName,
      email: email,
      password: hashedPassword,
    });
    res.status(200).json({ user: result });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something Went Wrong" });
  }
};
const signIn = (req, res) => {};

module.exports = { signUp, signIn };
