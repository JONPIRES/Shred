const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE_URL);

const db = mongoose.connection;

db.on("connected", function () {
  console.log(
    `[${new Date().toLocaleTimeString()}] - Connected to ${db.name} at ${
      db.host
    }:${db.port}`
  );
});
db.on("error", (error) => {
  console.log("MongoDB connection error", error);
});
// disconnecting from mongoDB
db.on("disconnected", () => {
  console.log("MongoDB disconnected ⚡️ ⚡️");
});
