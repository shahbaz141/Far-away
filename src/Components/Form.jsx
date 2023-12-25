import React, { useState } from "react";
import Item from "./Item";

const Form = ({setItems}) => {
  const [quantity, setQuantity] = useState("1");
  const [description, setDescription] = useState("");
  console.log("the qunatity is",description);
  console.log("the item is ",quantity);
  
  
  // const clear=()=>{
  //   setQuantity("");
  //   setDescription(" ");
  // }
  const handle=(e)=>{
    e.preventDefault();
    const newItem={
      id:Date.now(),
      description,
      quantity,
      package:false
    };
   setItems((item)=>[...item,newItem]);
    setDescription("");
    setQuantity("");
  }
  return (
    <form className="add-form" onSubmit={handle}>
      <h2>What do you need for the trip?😊</h2>
      <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
      <input
          type="text"
          placeholder="packing item"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      <button >Add</button>
    </form>
  );
};

export default Form;
