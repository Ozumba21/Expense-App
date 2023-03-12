import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [EnteredTitle, setEnteredTitle] = useState("");
  const [EnteredAmount, SetEnteredAmount] = useState("");
  const [EnteredDate, setEnteredDate] = useState("");
  // const [hate, setSubmit] = useState("")

  const titleHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountHandler = (event) => {
    SetEnteredAmount(event.target.value);
  };
  const DateHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  const submitHandler = (e) => {
    const expenseData = {
      titles: EnteredTitle,
      amount: EnteredAmount,
      date: new Date(EnteredDate),
    };

    // console.log(expenseData);
    setEnteredTitle("");
    SetEnteredAmount("");
    setEnteredDate("");

    props.onSaveExpenseData(expenseData);
    // EnteredTitle("");
    // EnteredAmount("");
    // EnteredDate("");

    e.preventDefault();
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense_controls">
        <div className="new-expose_control">
          <label>Title</label>
          <input type="text" value={EnteredTitle} onChange={titleHandler} />
        </div>
        <div className="new-expose_control">
          <label>Amount</label>
          <input
            type="Number"
            min="0.01"
            step="0.01"
            value={EnteredAmount}
            onChange={amountHandler}
          />
        </div>
        <div className="new-expose_control">
          <label>Date</label>
          <input
            type="date"
            min="2000-01-01"
            max="2090-12-31"
            value={EnteredDate}
            onChange={DateHandler}
          />
        </div>
      </div>
      <div className="button">
        <button type="submit"> ADD EXPENSE</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
