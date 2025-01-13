import { React, useState, useContext, useEffect } from "react";
import ExpenseForm from "./ExpenseForm";
import Navigation from "./Navigation";
import TransactionList from "./TransactionList";

const Expense = (props) => {
  const { userLoggediN } = props;
  const [updatetransaction, setupdatetransaction] = useState(false);
  const [ConditionalTransactionList, setConditionalTransactionList] =
    useState("Alltransaction");

  const [ID, setID] = useState("");
  const [formData, setFormData] = useState({
    Description: "",
    Amount: "",
    TransactionType: "Income",
    Date: "",
    Time: "",
  });

  return (
    <>
      <div className="Main p-2">
        <div className="formNavContainer">
          <Navigation
            setConditionalTransactionList={setConditionalTransactionList}
          />
          <ExpenseForm
            updatetransaction={updatetransaction}
            ID={ID}
            userLoggediN={userLoggediN}
            setupdatetransaction={setupdatetransaction}
            formData={formData}
          />
        </div>
        <div className="transactionContainer">
          <TransactionList
            setFormData={setFormData}
            formData={formData}
            setupdatetransaction={setupdatetransaction}
            setID={setID}
            ConditionalTransactionList={ConditionalTransactionList}
          />
        </div>
      </div>
    </>
  );
};

export default Expense;
