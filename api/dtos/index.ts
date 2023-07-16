const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

export const dbConnection = async () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(console.log("Connected"))
    .catch((err) => {
      console.log(err);
    });
};
