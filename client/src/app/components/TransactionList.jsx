"use client";
import React, { useContext, useEffect, useState } from "react";
import style from "./Transaction.css";
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
            <p id="total-income">$ {totalincome}.00</p>
          </div>
          <div class="total expenses shadow-lg">
            <h5 className="text-danger">Total Expenses</h5>
            <p id="total-expenses">$ {totalexpense}.00</p>
          </div>
          <div class="total balance  text-success shadow-lg">
            <h5>Total Balance</h5>
            <p id="total-balance">$ {totalbalance}.00</p>
          </div>
          <div class="total balance shadow-lg">
            <h5>Hello,</h5>
            <p id="total-balance">{AuthData.Username}</p>
          </div>
        </div>
      </div>
      <div class="container shadow-lg">
        <div class="transaction-list">
          {/* <div class="transaction">
            <div class="transaction-details">
              <span class="transaction-name text-warning">Salary</span>
              <span class="transaction-id text-success">
                Amount: 2000,<span className="text-danger"> Type: Income</span>
              </span>
            </div>
            <div class="transaction-timestamp">
              <span class="transaction-date text-black-50">2024-12-18</span>
              <span class="transaction-time text-black-50">21:18</span>
            </div>
            <div class="transaction-buttons">
              <button class="update-btn">Update</button>
              <button class="delete-btn">Delete</button>
            </div>
          </div> */}

          {transactions == "" ? (
            <h2 className="text-dark">No Transaction To Show</h2>
          ) : (
            transactions.map((items) => {
              return (
                <TransactionItems
                  items={items}
                  setupdatetransaction={setupdatetransaction}
                  setID={setID}
                />
              );
            })
          )}
        </div>
      </div>
    </>
  );
};

export default TransactionList;
