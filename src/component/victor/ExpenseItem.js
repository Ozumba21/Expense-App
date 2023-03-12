import React from "react";
import "./ExpenseItem.css";
import Card from "../UI/card";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {

  return (
    <Card  className="love-item">
      <ExpenseDate date = {props.date}></ExpenseDate>
      <div className="hate-description">
        <h2>{props.title}</h2>
        <div className="come-price">${props.amount}</div>
      </div>
    </Card>
  );
}
export default ExpenseItem;