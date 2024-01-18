import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";

function App() {
  const todoItems = [
    {
      name: "Bring Milk",
      date: "17-01-2024",
    },
    {
      name: "Go To College",
      date: "17-01-2024",
    },
    {
      name: "Have Snacks",
      date: "17-01-2024",
    },
  ];
  return (
    <div className="todoContainer">
      <AppName />
      <AddTodo />
      <TodoItems todoItems={todoItems}></TodoItems>
    </div>
  );
}

export default App;
