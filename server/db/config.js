const mongoose = require('mongoose');
const dotenv = require("dotenv").config();

mongoose.set("strictQuery", false);
mongoose
   .connect(process.env.MONGODB_URL)
   .then(() => console.log("connected to database"))
   .catch((err) => console.log(err));