import styles from "./Item.module.css";

const Item = ({ foodItem }) => {
  return (
    <li className={`list-group-item ${styles.myItem}`}>
      <span className={styles.mySpan}>{foodItem}</span>
    </li>
  );
};
export default Item;
