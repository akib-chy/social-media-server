require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/connectdb");
const userRoutes = require("./routes/userRoute");
const postRoutes = require("./routes/postRoute");

const app = express();
const port = process.env.PORT || 5000;
const DATABASE_URL = process.env.DATABASE_URL;

// CORS Policy
app.use(cors());

// Database Connection
connectDB(DATABASE_URL);

// JSON
app.use(express.json());

// Load Routes
app.use("/api/user", userRoutes);
app.use("/api/post", postRoutes);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
app.get("/", (req, res) => {
  res.send("Social Media Server Is Ruing");
});
