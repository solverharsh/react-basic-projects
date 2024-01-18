import { useState } from "react";
import Item from "./Item";

const FoodItems = ({ foodItems }) => {
  let [activeItems, setActiveItems] = useState([]);

  let onBuyButton = (item, e) => {
    let newItems = [...activeItems, item];
    setActiveItems(newItems);
  };
  return (
    <ul className="list-group">
      {foodItems.map((item) => (
        <Item
          key={item}
          foodItem={item}
          bought={activeItems.includes(item)}
          handleBuyButton={(e) => onBuyButton(item, e)}
        ></Item>
      ))}
    </ul>
  );
};
export default FoodItems;
