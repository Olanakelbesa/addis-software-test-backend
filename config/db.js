const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      process.env.MONGO_URL
    );
    console.log("MongoDb Connected");
  } catch (error) {
    console.error("MongoDB Connection Faild", error);
    process.exit(1);
  }
};

module.exports = connectDB;
