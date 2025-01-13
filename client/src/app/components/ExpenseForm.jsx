"use client";
import React, { useContext, useState } from "react";
import { ExpenseContext } from "../Context/ExpenseContext";
// import {TransactionContext} from '../Context/ExpenseContext'
import { AuthContext } from "../Context/AuthContext";

const ExpenseForm = (props) => {
  const { updatetransaction, setupdatetransaction, ID } = props;
  const { AuthData } = useContext(AuthContext);
  const { addTransaction, updateTransaction } = useContext(ExpenseContext);
  const [formData, setFormData] = useState({
    User_ID: "",
    Description: "",
    Amount: "",
    TransactionType: "Income",
    Date: "",
    Time: "",
  });

  function handlesubmit(e) {
    e.preventDefault();
    let date = new Date();
    let newtransaction = {
      ...formData,
      User_ID: AuthData.UserID,
      Date: `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`,
      Time: `${date.getHours()}-${date.getMinutes()}`,
    };
    addTransaction(newtransaction);
    setFormData((prev) => {
      return {
        ...prev,
        Description: "",
        Amount: "",
        TransactionType: "Income",
      };
    });
  }

  return (
    <>
      <div className="FormContinaer shadow-lg">
        <h3
          className="text-center py-1 text-warning"
          style={{ letterSpacing: "2px", fontWeight: "700" }}
        >
          {updatetransaction == false
            ? "ADD TRANSACTION"
            : "UPDATE TRANSACTION"}
        </h3>
        <form onSubmit={handlesubmit}>
          <div class="mb-3 w-75">
            <label for="exampleInputEmail1" class="form-label w-100">
              Description
            </label>
            <input
              type="text"
              name="Description"
              autoComplete="off"
              required
              value={formData.Description}
              onChange={(e) => {
                setFormData((prev) => {
                  return { ...prev, Description: e.target.value };
                });
              }}
              class="form-control "
            />
          </div>
          <div class="mb-3 w-75">
            <label class="form-label">Amount</label>
            <input
              type="number"
              name="Amount"
              value={formData.Amount}
              autoComplete="off"
              required
              onChange={(e) => {
                setFormData((prev) => {
                  return { ...prev, Amount: e.target.value };
                });
              }}
              class="form-control"
            />
          </div>

          <div class="mb-3 w-75">
            <label class="form-label">Select Transaction Type</label>
            <select
              id="disabledSelect"
              name="Type"
              value={formData.TransactionType}
              class="form-select"
              onChange={(e) => {
                setFormData((prev) => {
                  return { ...prev, TransactionType: e.target.value };
                });
              }}
            >
              <option value="Income">Income</option>
              <option value="Expense">Expense</option>
            </select>
          </div>
          {updatetransaction == false ? (
            <button type="submit" class="btn btn-warning w-50">
              Add Transaction
            </button>
          ) : (
            <button
              onClick={(e) => {
                e.preventDefault();
                if (confirm("Press ok to update Transaction") === true) {
                  let date = new Date();
                  let Updatedtransaction = {
                    ...formData,
                    User_ID: AuthData.UserID,
                    Date: `${date.getDate()}-${
                      date.getMonth() + 1
                    }-${date.getFullYear()}`,
                    Time: `${date.getHours()}-${date.getMinutes()}`,
                  };
                  // addTransaction(newtransaction);
                  updateTransaction(ID, Updatedtransaction);
                  setFormData((prev) => {
                    return {
                      ...prev,
                      User_ID: "",
                      Description: "",
                      Amount: "",
                      TransactionType: "Income",
                    };
                  });
                }
                setupdatetransaction(false);
              }}
              class="btn btn-warning w-50"
            >
              Update Transaction
            </button>
          )}
        </form>
        <div className="d-flex justify-content-end mx-3 mb-3">
          <button
            className="btn btn-danger shadow"
            style={{
              width: "25%",
              margin: "1px 0px  ",
            }}
            onClick={() => {
              localStorage.clear();
              window.location.reload();
            }}
          >
            Sign Out
          </button>
        </div>
      </div>
    </>
  );
};

export default ExpenseForm;
