const mongoose = require("mongoose");

const connection = {
  isConnected: false
};

export const connectToDB = async () => {
  if (connection.isConnected) {
    console.log("Using existing connection");
    return;
  }

  try {
    console.log("MONGO_URI:", process.env.MONGO_URI);
    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI is not defined");
    }
    await mongoose.connect(process.env.MONGO_URI || '');
    connection.isConnected = mongoose.connection.readyState;
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
    throw new Error("Error connecting to database");
  }
};
