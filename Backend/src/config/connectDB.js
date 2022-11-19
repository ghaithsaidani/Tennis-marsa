let mongoose = require("mongoose");

let conectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE);
    console.log("data base is successfully conected");
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = conectDB;