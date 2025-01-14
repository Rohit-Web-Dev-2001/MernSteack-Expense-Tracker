const express = require("express");
const ExpanseRouter = require("./Routes/ExpanseRoute");
const dotenv = require("dotenv");
const cors = require("cors");
const { connectDB } = require("./config/db");
const bodyParser = require("body-parser");
const AuthRouter = require("./Routes/auth");
dotenv.config({ path: "./config/config.env" });

connectDB();
const app = express();
const PORT = 8000
app.use(bodyParser.json({ 
  origin: 'https://expense-tracker-phi-lake.vercel.app/',  
  methods: 'GET,POST,PUT,DELETE',
  credentials: true,
}));
app.use(cors());
app.use("/auth", AuthRouter);
app.use("/epxense", ExpanseRouter);
app.get("/",(req,res)=>{
  res.json({msg:"SERVER IS READY TO USE"})
})
app.listen(PORT, () => {
  console.log(`Server Started ${PORT}`);
});

// src/app/Projects/Expensetracker/server
// npm command path
