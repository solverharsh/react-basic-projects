import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";

function App() {
  // let foodItems = [
  //   "chapati",
  //   "Salad",
  //   "Dal",
  //   "Milk",
  //   "Green Vegetables",
  //   "Ghee",
  // ];

  let [foodItems, setFoodItems] = useState([
    // "chapati",
    // "Salad",
    // "Dal",
    // "Milk",
    // "Green Vegetables",
    // "Ghee",
  ]);
  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      let newFoodItem = e.target.value;
      let newItems = [...foodItems, newFoodItem];
      setFoodItems(newItems);
      e.target.value = " ";
      // console.log(newFoodItem);
    }
  };
  return (
    <>
      <Container>
        <h1 className="myHeading">Healthy Food</h1>
        <FoodInput handleOnKeyDown={onKeyDown}></FoodInput>
        <ErrorMessage foodItems={foodItems}></ErrorMessage>
        <FoodItems foodItems={foodItems}></FoodItems>
      </Container>
      {/* <Container>
        <p>
          💊Above is the list of foods that is good for your health and
          well-being.
        </p>
      </Container> */}
    </>
  );
}

export default App;
