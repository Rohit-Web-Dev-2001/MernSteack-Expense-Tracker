const { default: mongoose } = require("mongoose");

const ExpenseSchema = mongoose.Schema({
  User_ID:{
    type: "string",
    required: true,
  },
  Description: {
    type: String,
    required: true,
  },
  Amount: {
    type: Number,
    required: true,
  },
  TransactionType: {
    type: String,
    required: true,
  },
  Date: {
    type: String,
    required: true,
  },
  Time: {
    type: String,
    required: true,
  },
 
});

const ETmodel = mongoose.model("Expenses", ExpenseSchema);

module.exports = ETmodel;
