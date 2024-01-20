import { useContext } from "react";
import styles from "./WelcomeMessage.module.css";
import { TodoItemsContext } from "./store/todo-item-store";

const WelcomeMessage = () => {
  const { todoItems } = useContext(TodoItemsContext);
  return (
    todoItems.length === 0 && (
      <p className={styles.myMessage}>No task to do ..Enjoy your Day 🤗</p>
    )
  );
};

export default WelcomeMessage;
