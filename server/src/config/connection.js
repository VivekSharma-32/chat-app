import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECTION);
    console.log(`Connected to MongoDB ${mongoose.connection.host}`);
  } catch (err) {
    console.log(`MongoDB server issue`);
  }
};
export default connectDB;
