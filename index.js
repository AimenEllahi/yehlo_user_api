import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
const app = express();

import userRoute from "./routes/user.js";

//Configuration
dotenv.config();

const PORT = process.env.PORT || 8801;

app.use(bodyParser.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cors());

//importing routes
app.use("/users", userRoute);
//routes
app.get("/", (req, res) => {
  res.send("We are on home page");
});

mongoose.connect(
  process.env.MongoDB_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("connected to db")
);

//listens on port 8800
app.listen(PORT, () => console.log("Server Started"));
