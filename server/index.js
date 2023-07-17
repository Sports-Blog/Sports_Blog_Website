const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const multer = require("multer");
const cors = require('cors')

dotenv.config();
app.use(express.json());
app.use(cors())

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Connected"))
  .catch((err) => console.log(err));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, "hello.jpg");
  },
});

const upload = multer({ storage: storage });
app.post("/server/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded!");
});

app.use("/server/auth", authRoute);
app.use("/server/users", userRoute);
app.use("/server/posts", postRoute);

app.listen("5000", () => {
  console.log("Server is running on port 5000");
});
