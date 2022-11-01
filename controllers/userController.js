const bcrypt = require("bcrypt");
const userCollection = require("../models/user.models");

const signUp = async (req, res) => {
  const { userName, email, password } = req.body;
  console.log(req.body);
  try {
    const existingUser = await userCollection.findOne({ email: email });
    if (!existingUser) {
      return res.status(400).json({ message: "User Already Existing" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await userCollection.create({
      userName: userName,
      email: email,
      password: hashedPassword,
    });
    res.status(200).json({ user: result });
  } catch (error) {
    console.log(error.message, error);
    res.status(500).json({ message: "Something Went Wrong" });
  }
};
const signIn = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await userCollection.findOne({ email: email });
    if (!existingUser) {
      return res.status(400).json({ message: "User Already Existing" });
    }
    const matchPassword = await bcrypt.compare(password, existingUser.password);
    if (!matchPassword) {
      return res.status(400).json({ message: "Invalid Creadiancial" });
    }
    res.status(201).json({ user: existingUser });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something Is Wrong" });
  }
};

module.exports = { signUp, signIn };
