"use client";
import React, { useContext, useEffect, useState } from "react";
import Style from "./Transaction.css";
import TransactionItems from "./TransactionItems";
import { ExpenseContext } from "../Context/ExpenseContext";
import { AuthContext } from "../Context/AuthContext";

const TransactionList = (props) => {
  const { setID, setupdatetransaction, ConditionalTransactionList } = props;
  const { AuthData } = useContext(AuthContext);

  const {
    transactions,
    getTransactions,
    showIncomeTransactions,
    showExpenseTransactions,
  } = useContext(ExpenseContext);
  let userID = {
    USERID: AuthData.UserID,
  };
  useEffect(() => {
    if (ConditionalTransactionList === "IncomeList") {
      showIncomeTransactions(userID);
    } else if (ConditionalTransactionList === "ExpenseList") {
      showExpenseTransactions(userID);
    } else {
      getTransactions(userID);
    }
  }, [transactions]);

 // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const transactionsPerPage = 5;

  // Calculate total number of pages
  const totalPages = Math.ceil(transactions.length / transactionsPerPage);

  // Get current transactions
  const indexOfLastTransaction = currentPage * transactionsPerPage;
  const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;
  const currentTransactions = transactions.slice(indexOfFirstTransaction, indexOfLastTransaction);

  // Function to sort expenses by date
const sortExpensesByDate = (currentTransactions) => {
  return currentTransactions.sort((a, b) => new Date(b.date) - new Date(a.date));
};

    const sortedExpenses = sortExpensesByDate(currentTransactions);
  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  let totalbalance = 0;
  let totalincome = 0;
  let totalexpense = 0;
  transactions.forEach((entry) => {
    if (entry.TransactionType === "Income") {
      totalincome += entry.Amount;
      totalbalance += entry.Amount;
    } else {
      totalbalance -= entry.Amount;
      totalexpense += entry.Amount;
    }
  });

  return (
    <>
      <div className="headercontainer">
        <div class="totals">
          <div class="total income shadow-lg">
            <h5 className="text-warning">Total Income</h5>
            <p id="total-income">₹ {totalincome}.00</p>
          </div>
          <div class="total expenses shadow-lg">
            <h5 className="text-danger">Total Expenses</h5>
            <p id="total-expenses">₹ {totalexpense}.00</p>
          </div>
          <div class="total balance  text-success shadow-lg">
            <h5>Total Balance</h5>
            <p id="total-balance">₹ {totalbalance}.00</p>
          </div>
          <div class="total balance shadow-lg">
            <h5>Hello,</h5>
            <p id="total-balance">{AuthData.Username}</p>
          </div>
        </div>
      </div>
      <div class="container shadow-lg">
      <div className="transaction-list">
          {sortedExpenses.length === 0 ? (
            <h2 className="text-dark">No Transaction To Show</h2>
          ) : (
            sortedExpenses.map((items) => {
              return (
                <TransactionItems
                  key={items.id}
                  items={items}
                  setupdatetransaction={setupdatetransaction}
                  setID={setID}
                />
              );
            })
          )}
        </div>
        <div className="contianer-fluid d-flex justify-content-center align-content-center ">
        <div className="pagination w-25  d-flex justify-content-center align-content-center gap-2" >
        
          { transactions.length>5 ?
            
            [...Array(totalPages)].map((_, index) => (
            <button 
              key={index + 1}
              onClick={() => paginate(index + 1)}
              className={currentPage === index + 1 ? "active btn btn-sm btn-outline-warning shadow" : "btn btn-sm btn-outline-warning shadow"}
            >
              {index + 1}
            </button>
          )) :""}
         
        </div>
        </div>
      </div>
    </>
  );
};

export default TransactionList;
