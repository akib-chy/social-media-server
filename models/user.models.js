const client = require("..");
const userCollection = client.db("social-media").collection("user");
module.exports = userCollection;
