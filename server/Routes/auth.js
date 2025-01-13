const AuthModel = require("../Model/AuthModel");
const express = require("express");
const AuthRouter = express.Router();

// SingUP request
AuthRouter.post("/SignUp", async (req, res) => {
  const { Email } = req.body;
  const user = await AuthModel.findOne({ Email: Email });
  if (user) {
    res.send("Email Already Exists");
  } else {
    const newUser = new AuthModel(req.body);
    const saveduser = await newUser.save();
    res.send("Your account has been created")
  }
});

// SigninRequest

AuthRouter.post("/SignIn", async (req, res) => {
  const { Email, Password } = req.body;
  const user = await AuthModel.findOne({
    $and: [{ Email: Email }, { Password: Password }],
  });
  if (user) {
    res.send({ UserID: user._id, Username: user.Username });
  } else {
    res.send("User not founded");
  }
});

// "Email": "Arya123@gmail.com",  
// "Password": "123",

module.exports = AuthRouter;
