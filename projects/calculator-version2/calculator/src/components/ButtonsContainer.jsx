import styles from "./ButtonsContainer.module.css";

const ButtonsContainer = ({ onButtonClick }) => {
  const button = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className={styles.buttonsContainer}>
      {button.map((name) => (
        <button
          key={Math.random() * 10 + 1}
          className={styles.buttons}
          onClick={() => onButtonClick(name)}
        >
          {name}
        </button>
      ))}
    </div>
  );
};

export default ButtonsContainer;
