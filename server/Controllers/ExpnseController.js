const ETmodel = require("../Model/ExpanseModel");

exports.getExpense = async (req, res) => {
  try {
    const { USERID } = req.body;
    const transactionlist = await ETmodel.find({ User_ID: USERID });
    if (transactionlist) {
      res.send(transactionlist);
    } else {
      res.send("Transaction not founded");
    }
  } catch (error) {
    console.log(error);
  }
};

exports.getOnlyIncome = async (req, res) => {
  try {
    const { USERID } = req.body;
    const transactionlist = await ETmodel.find({ User_ID: USERID });
    if (transactionlist) {
      const incomeTransactions = transactionlist.filter(
        (transaction) => transaction.TransactionType === "Income"
      );
      res.send(incomeTransactions);
    } else {
      res.send("Income Transactions not founded");
    }
  } catch (error) {
    console.log(error);
  }
};

exports.getOnlyExepense = async (req, res) => {
  try {
    const { USERID } = req.body;
    const transactionlist = await ETmodel.find({ User_ID: USERID });
    if (transactionlist) {
      const expenseTransactions = transactionlist.filter(
        (transaction) => transaction.TransactionType === "Expense"
      );
      res.send(expenseTransactions);
    } else {
      res.send("Expense Transactions not founded");
    }
  } catch (error) {
    console.log(error);
  }
};

exports.addExpense = async (req, res) => {
  try {
    const newExpense = new ETmodel(req.body);
    const saveExpanse = await newExpense.save();
    res.send(saveExpanse);
  } catch (error) {
    console.log(error);
  }
};

exports.deleteExpense = async (req, res) => {
  try {
    const { id } = req.params;
    const transaction = await ETmodel.findByIdAndDelete(id);
    console.log("Transaction has been deleted", transaction);
  } catch (error) {
    console.log(error);
  }
};

exports.updateExpense = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const updateTransaction = req.body;
    const transaction = await ETmodel.findByIdAndUpdate(id, updateTransaction);
    if (!transaction) {
      return res.status(404).send(transaction);
    }
    res.status(200).send(transaction);
  } catch (error) {
    console.log(error);
  }
};
