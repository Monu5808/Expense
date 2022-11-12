
import ExpenseItem from "./components/ExpenseItem";

function App() {

  let expenseDate = new Date(2021, 3, 28);
  let expenseTitle = "School Fee";
  let expenseAmount = 300;

  return (
    <div>
    <h2>let's get started</h2>
    <ExpenseItem 
          date={expenseDate} 
          title={expenseTitle} 
          amount={expenseAmount}
    ></ExpenseItem>
    <ExpenseItem 
          date={expenseDate} 
          title={expenseTitle} 
          amount={expenseAmount}
    ></ExpenseItem><ExpenseItem 
          date={expenseDate} 
          title={expenseTitle} 
          amount={expenseAmount}
    ></ExpenseItem>
    </div>
  );
}

export default App;
