import React, { useContext } from "react";
import { ExpenseContext } from "../Context/ExpenseContext";
import style from "./Modal.css";

const TransactionItems = (props) => {
  const { deleteTransaction } = useContext(ExpenseContext);
  const { setID, setupdatetransaction, items, setFormData, formData } = props;
  const [modalMessage, setModalMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeModal = () => {
    setIsModalOpen(false);
    setModalMessage("");
  };
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
              setIsModalOpen(true);
           
            }
          }}
        >
          Delete
        </button>
      </div>
    </div>
     <div
        className="modal11"
        style={{
          display: `${isModalOpen ? "block" : "none"} `,
        }}
      >
        {" "}

        {/* Modal  */}
        <div className="modal1-content">
          <p className="text-center">{modalMessage}</p>
          <div className="d-flex justify-content-end gap-2">
            <button
              className="close1 btn btn-outline-warning"
              onClick={() => {
                deleteTransaction(items._id);
                setIsModalOpen(false);
              }}
            >
              Confirm
            </button>{" "}
            <button className="close1 btn btn-outline-danger" onClick={closeModal}>
              Cencel
            </button>{" "}
          </div>
        </div>{" "}
      </div>
  );
};

export default TransactionItems;
