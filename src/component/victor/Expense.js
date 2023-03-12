import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/card";
import "./expense.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseChart from "./ExpensesChart";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2022");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filtererExpense = props.items.filter(
    single =>{
      return single.date.getFullYear().toString() === filteredYear
    }
  )
  return (
    <Card className="expense">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      ></ExpensesFilter>
      <ExpenseChart expenses = {filtererExpense} />
      {filtererExpense.length === 0 ? <p style = {{color: "white"}}>No Expense Found.</p>: (
         filtererExpense.map((single) => (
          <ExpenseItem
            key = {single.id}
            title={single.titles}
            amount={single.amount}
            date={single.date}
         />
        ))
      )
      }
     
    </Card>
  );
}

export default Expenses;
// ReactDom.render(<App />, document.getElementById("root"));
