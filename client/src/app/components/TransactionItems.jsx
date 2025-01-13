import React, { useContext } from "react";
import { ExpenseContext } from "../Context/ExpenseContext";

const TransactionItems = (props) => {
  const { deleteTransaction } = useContext(ExpenseContext);

  const { setID, setupdatetransaction, items, setFormData, formData } = props;

  return (
    <div class="transaction" key={items._id}>
      <div class="transaction-details">
        <span class="transaction-name text-warning">{items.Description}</span>
        <span class="transaction-id text-success">
          Amount: $ {items.Amount}.00,
          <span className="text-danger"> Type: {items.TransactionType}</span>
        </span>
      </div>
      <div class="transaction-timestamp">
        <span class="transaction-date text-black-50">{items.Date}</span>
        <span class="transaction-time text-black-50">{items.Time}</span>
      </div>

      <div class="transaction-buttons">
        <button
          class="update-btn"
          onClick={() => {
            setupdatetransaction(true);
            setID(items._id);

            // updateTransaction(items._id)
          }}
        >
          Update
        </button>
        <button
          class="delete-btn"
          onClick={() => {
            if (
              window.confirm("Do you want to delete this transaction") == true
            ) {
              deleteTransaction(items._id);
            }
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TransactionItems;
