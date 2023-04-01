import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import bodyParser from "body-parser";

// routes
import connectDB from "./src/config/connection.js";
import ChatRoutes from "./src/Routes/chatRoutes.js";
import messageRoutes from "./src/Routes/messageRoutes.js";

const app = express();

// dotenv config
dotenv.config();
// mongodb connection
connectDB();

// middlewares
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use(morgan("dev"));
// to serve images inside public folder
app.use(express.static("public"));
app.use("/images", express.static("images"));

// routes
app.use("/chat", ChatRoutes);
app.use("/message", messageRoutes);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
