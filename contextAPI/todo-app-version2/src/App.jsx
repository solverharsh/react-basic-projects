import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";
import WelcomeMessage from "./components/WelcomeMessage";
import TodoItemsContextProvider from "./components/store/todo-item-store";

function App() {
  return (
    <TodoItemsContextProvider>
      <div className="todoContainer">
        <AppName />
        <AddTodo />
        <WelcomeMessage></WelcomeMessage>
        <TodoItems></TodoItems>
      </div>
    </TodoItemsContextProvider>
  );
}

export default App;
