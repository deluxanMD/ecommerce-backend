const mongoose = require("mongoose");
const config = require("./keys");

const uri = config.mongoURI;

const connectDB = async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log(`Connected to mongo db`);
  } catch (error) {
    console.error(`Connection Failed`);
    console.error(error);
    process.exit(1);
  }
};

module.exports = connectDB;
