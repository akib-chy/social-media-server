const express = require("express");
const port = process.env.PORT || 5000;
const app = express();
const cors = require("cors");
require("dotenv").config();
// MiddleWere
app.use(express.json());
app.use(cors());

const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.0lpuf.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

module.exports = client;
// IMPORT ROUTES

const userRoute = require("./routes/userRoute.js");

async function run() {
  // JWT USER ROUTE
  app.use(userRoute);
  try {
    await client.connect();
  } finally {
    // console.log(error);
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Hello from Shohoj Pay!");
});

app.use((req, res, next) => {
  res.status(404).json({
    message: "Resource Not Found",
  });
});

app.listen(port, () => {
  console.log("Responding to", port);
});
