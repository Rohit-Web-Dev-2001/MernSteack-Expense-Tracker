const express = require("express");
const {
  getExpense,
  addExpense,
  deleteExpense,
  updateExpense,
  getOnlyIncome,
  getOnlyExepense,
} = require("../Controllers/ExpnseController");
const ExpanseRouter = express.Router();
ExpanseRouter.post("/getExpense", getExpense);
ExpanseRouter.post("/getOnlyIncome", getOnlyIncome);
ExpanseRouter.post("/getOnlyExepense", getOnlyExepense);
ExpanseRouter.post("/addExpense", addExpense);
ExpanseRouter.delete("/deleteExpense/:id", deleteExpense);
ExpanseRouter.put("/updateExpense/:id", updateExpense);
module.exports = ExpanseRouter;
