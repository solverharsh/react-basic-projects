import styles from "./ButtonsContainer.module.css";

const ButtonsContainer = ({ button }) => {
  return (
    <div className={styles.buttonsContainer}>
      {button.map((name) => (
        <button key={Math.random() * 10 + 1} className={styles.buttons}>
          {name}
        </button>
      ))}
    </div>
  );
};

export default ButtonsContainer;
