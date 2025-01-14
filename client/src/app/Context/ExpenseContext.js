"use client";

// import { API } from "@/Utils/Utils";
import axios from "axios";
const { createContext, useReducer } = require("react");

// intial state
let initialState = {
  transactions: [],
};

// creact Context
export const ExpenseContext = createContext(initialState);

// Reducers
const transactionReducer = (state, action) => {
  switch (action.type) {
    case "GET_TRANSACTIONS":
      return {
        ...state,
        transactions: action.payload,
      };
    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [ action.payload],
      };

    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };

    case "UPDATE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.map((transaction) =>
          transaction.id === action.payload.id ? action.payload : transaction
        ),
      };

    default:
      return state;
  }
};

// Provider component

export const TransactionProvider = ({ children }) => {
  const [state, dispatch] = useReducer(transactionReducer, initialState);
  // Action
  // const addTransactions = (transaction) => {
  //   dispatch({
  //     type: "Add_Transaction",
  //     payload: transaction,
  //   });
  // };

  // beckend actions for fetching data from Db
  const getTransactions = async (body) => {
    try {
      const res = await axios.post("https://mernstack-expense-tracker-beckend.vercel.app/epxense/getExpense",body);
      dispatch({ type: "GET_TRANSACTIONS", payload:res.data });
      
    } catch (error) {
      console.log(error);
    }
  };

  const showIncomeTransactions = async (body) => {
    try {
      const res = await axios.post("https://mernstack-expense-tracker-beckend.vercel.app/epxense/getOnlyIncome",body);
      dispatch({ type: "GET_TRANSACTIONS", payload:res.data });
      
    } catch (error) {
      console.log(error);
    }
  };

  const showExpenseTransactions = async (body) => {
    try {
      const res = await axios.post("https://mernstack-expense-tracker-beckend.vercel.app/epxense/getOnlyExepense",body);
      dispatch({ type: "GET_TRANSACTIONS", payload:res.data });
      
    } catch (error) {
      console.log(error);
    }
  };
  const addTransaction = async (transaction) => {
    try {
      const res = await axios.post(
        "https://mernstack-expense-tracker-beckend.vercel.app/epxense/addExpense",
        transaction
      );
      dispatch({ type: "ADD_TRANSACTION", payload: res.data });
    } catch (error) {
      console.log(error);
    }
  };

  // Deleting Transaction
  const deleteTransaction = async (id) => {
    try {
      await axios.delete(`https://mernstack-expense-tracker-beckend.vercel.app/epxense/deleteExpense/${id}`);

      dispatch({
        type: "DELETE_TRANSACTION",
        payload: id,
      });
    } catch (error) {
      console.log(error);
    }
  };

  // Update Transaction
  const updateTransaction = async (id, Updatedtransaction) => {
    try {
      await axios.put(
        `https://mernstack-expense-tracker-beckend.vercel.app/epxense/updateExpense/${id}`,
        Updatedtransaction
      );

      // dispatch({
      //   type: "DELETE_TRANSACTION",
      //   payload: id,
      // });
    } catch (error) {
      console.log(error);
    }
  };

  
  
  return (
    <ExpenseContext.Provider
      value={{
        transactions: state.transactions,
        authenticatorId: state.LoginID,
        getTransactions,
        addTransaction,
        deleteTransaction,
        updateTransaction,
        showIncomeTransactions,
        showExpenseTransactions,
      }}
    >
      {children}
    </ExpenseContext.Provider>
  );
};
