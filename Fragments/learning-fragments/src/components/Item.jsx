import styles from "./Item.module.css";

const Item = ({ foodItem, bought, handleBuyButton }) => {
  return (
    <li className={`list-group-item ${styles.myItem} ${bought && "active"}`}>
      <span className={styles.mySpan}>{foodItem}</span>
      <button
        className={`${styles.buttons} btn btn-info`}
        onClick={handleBuyButton}
      >
        Buy
      </button>
    </li>
  );
};
export default Item;
