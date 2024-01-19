import { useRef } from "react";
import { useState } from "react";

function AddTodo({ onNewItem }) {
  // const [todoName, setTodoName] = useState("");
  // const [dueDate, setDueDate] = useState("");

  // const handleNameChange = (e) => {
  //   setTodoName(e.target.value);
  // };
  // const handleDateChange = (e) => {
  //   setDueDate(e.target.value);
  // };

  const todoNameElement = useRef();
  const dueDateElement = useRef();

  const handleAddButtonClicked = (e) => {
    e.preventDefault();

    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    // console.log(todoName);
    // console.log(dueDate);
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    onNewItem(todoName, dueDate);
    // setTodoName("");
    // setDueDate("");
  };

  return (
    <div className="container text-center">
      <form className="row my-row" onSubmit={handleAddButtonClicked}>
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo Here"
            ref={todoNameElement}
          />
        </div>
        <div className="col-4">
          <input type="date" ref={dueDateElement} />
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-success my-button">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
