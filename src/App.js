import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/newExpense/NewExpese";
import { useState } from "react";

function App() {
  const [expenses, setExpenses] = useState([]);

  return (
    <div className="app">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
