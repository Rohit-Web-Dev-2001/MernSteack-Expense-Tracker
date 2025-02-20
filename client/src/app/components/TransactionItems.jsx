import React, { useContext, useState } from "react";
import { ExpenseContext } from "../Context/ExpenseContext";
import style from "./Modal.css";
import Modal from "./Modal";

const TransactionItems = (props) => {
  const { deleteTransaction } = useContext(ExpenseContext);
  const { setID, setupdatetransaction, items, setFormData, formData } = props;
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const confirmDelete = () => {
    deleteTransaction(items._id);
    setShowModal(false);
  };

  return (
    <>
      <div class="transaction" key={items._id}>
        <div class="transaction-details">
          <span class="transaction-name text-warning">{items.Description}</span>
          <span class="transaction-id text-success">
            Amount: ₹ {items.Amount}.00,
            <span className="text-danger"> Type: {items.TransactionType}</span>
          </span>
        </div>
        <div class="transaction-timestamp">
          <span class="transaction-date text-black-50">{items.Date}</span>
          <span class="transaction-time text-black-50">{items.Time}</span>
        </div>

        <div class="transaction-buttons">
          <button
            class=" btn btn-warning"
            onClick={() => {
              setupdatetransaction(true);
              setID(items._id);
            }}
          >
            Update
          </button>
          <button class="delete-btn btn btn-danger" onClick={handleOpenModal}>
            Delete
          </button>
        </div>
      </div>
      {/* Modal */}
      <Modal show={showModal} handleClose={handleCloseModal} >
        <p>Are you sure you want to delete this transaction?</p>
       <div className="d-flex  gap-2  justify-content-end">
       <button onClick={confirmDelete} className="btn btn-warning shadow">
          Confirm
        </button>
        <button onClick={handleCloseModal} className="btn btn-danger shadow">
          Cancel
        </button>
       </div>
      </Modal>
    </>
  );
};

export default TransactionItems;
