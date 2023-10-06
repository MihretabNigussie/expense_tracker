import "./ExpensesFilter.css";
const ExpensesFilter = (props) => {
  const { onChangeFilter, selected } = props;
  const years = [];
  for (let i = 2019; i <= 2023; i++) {
    years.push(<option value={i}>{i}</option>);
  }

  const handleDropDown = (event) => {
    onChangeFilter(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label htmlFor="byYear">Filter by year</label>
        <select
          value={selected}
          onChange={handleDropDown}
          name="selectedYear"
          id="byYear"
        >
          {years}
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
