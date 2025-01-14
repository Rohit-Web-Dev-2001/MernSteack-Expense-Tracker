const express = require("express");
const ExpanseRouter = require("./Routes/ExpanseRoute");
const dotenv = require("dotenv");
const cors = require("cors");
const { connectDB } = require("./config/db");
const bodyParser = require("body-parser");
const AuthRouter = require("./Routes/auth");
dotenv.config({ path: "./config/config.env" });
const corsOptions = { 
  origin: 'https://expense-tracker-phi-lake.vercel.app/',  
  methods: 'GET,POST,PUT,DELETE', 
  credentials: true,
}
connectDB();
const app = express();
const PORT = 8000
app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use("/auth", AuthRouter);
app.use("/epxense", ExpanseRouter);
app.get("/",(req,res)=>{
  res.json({msg:"Server is ready to use"})
})
app.listen(PORT, () => {
  console.log(`Server Started ${PORT}`);
});

// src/app/Projects/Expensetracker/server
// npm command path
