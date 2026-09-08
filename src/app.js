const express = require('express');
const connectDB = require('./config/database');
const User = require('./models/user');
const cookieParser = require("cookie-parser");


const dns = require("node:dns/promises");
dns.setServers(["1.1.1.1", "1.0.0.1"]);

const app = express();

connectDB().
  then(() => {
    console.log("database connected");

    app.listen(3000, () => {
      console.log("Server is listening on port 3000");
    })
  })
  .catch((err) => {
    console.error("database connection error (" + err + ")");
  })

app.use(express.json()); //this is needed to read the req.body which is send with request body as json and it parse into js object 
app.use(cookieParser()); //this middleware is needed to read the cookies

//routes
const authRouter = require("./src/routes/auth");
const profileRouter = require("./src/routes/profile");
const requestRouter = require("./src/routes/request");
const userRouter = require("./src/routes/user");

app.use("/", authRouter);
app.use("/", profileRouter);
app.use("/", requestRouter);
app.use("/", userRouter);

app.delete("/user", async (req, res) => {
  const userId = req.body.userId;

  try {
    const user = await User.findByIdAndDelete(userId);

    console.log(user);
    res.send("User deleted successfully");
  } catch (err) {
    res.status(400).send("DELETE FAILED: " + err.message);
  }
});






