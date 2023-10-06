import "./ExpenseForm.css";
import { useState } from "react";
const ExpenseForm = (props) => {
  const { onSaveExpenseData } = props;
  const [titleEntered, setTitle] = useState("");
  const [amountEntered, setAmount] = useState('');
  const [dateEntered, setDate] = useState("");
  const handleTitle = (event) => setTitle(event.target.value);
  const handleAmount = (event) => setAmount(event.target.value);
  const handleDate = (event) => setDate(event.target.value);
  const handleSubmit = (event) => {
    event.preventDefault();
    const expenseData = {
      title: titleEntered,
      amount: amountEntered,
      date: new Date(dateEntered),
    };
    onSaveExpenseData(expenseData);

    setTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="new-expense__controls">
        <div onChange={handleTitle} className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input id="title" type="text" value={titleEntered} />
        </div>
        <div onClick={handleAmount} className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input
            onChange={handleAmount}
            id="amount"
            type="number"
            min="0.01"
            step="0.01"
            value={amountEntered}
          />
        </div>
        <div onClick={handleDate} className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input
            onChange={handleDate}
            id="date"
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            value={dateEntered}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit"> Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
