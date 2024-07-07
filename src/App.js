import React,{ Fragment, useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  const [CartIsShown,setCartShown]=useState(false);
  const showCartHandler=()=>{
    setCartShown(true);
  }
  const hideCartHandler=()=>{
    setCartShown(false);
  }
  return (
     <Fragment>
      {CartIsShown && <Cart onClose={hideCartHandler}/>}
      <Header onClick={showCartHandler}/>
      <Meals/>
     </Fragment>
  );
}

export default App;
