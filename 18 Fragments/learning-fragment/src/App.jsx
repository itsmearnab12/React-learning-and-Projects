import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import FoodItems from "./components/Fooditems";
import ErrorMessage from "./components/ErrorMessage";

function App() {

  let foodItems = ['Apple', 'Green veg', 'Chapati', 'Rice', 'Milk']

  // if(foodItems.length === 0){ 
  //   return <h2>No food on the list</h2>
  // }


  return (
    <React.Fragment>
      <h1 className="re-heading">Healthy Food</h1>
      <ErrorMessage items={foodItems}></ErrorMessage>
      <FoodItems items={foodItems}></FoodItems>
    </React.Fragment>
  )
}
export default App;
  