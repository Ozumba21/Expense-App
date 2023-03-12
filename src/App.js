import React, {useState} from "react";
import Expenses from "./component/victor/Expense";
import NewExpense from "./component/NewExpense/NewExpense";
const DUMMY = [
  {
    id: "1",
    titles: "Victor",
    amount: 98.3,
    date: new Date(2020, 7, 3),
  },

  {
    id: "2",
    titles: "Praise",
    amount: 94.3,
    date: new Date(2023, 7, 14),
  },
  {
    id: "3",
    titles: "Nancy",
    amount: 96.3,
    date: new Date(2020, 7, 6),
  },
  {
    id: "4",
    titles: "Micheal",
    amount: 99.3,
    date: new Date(2021, 7, 9),
  },
];
function App() {
   const [expenses, setExpenses] = useState(DUMMY);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
    
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
