import React, { useState } from "react";
import Button from "../button/Button";

type FruitProps = {
  name: string;
  imgURL: string;
};

function Card({ name, imgURL }: FruitProps) {
  const [quantity, setQuantity] = useState<number>(1);
  function handelChange(e : React.ChangeEvent<HTMLInputElement>){
   setQuantity(+e.target.value)
  }
  console.log(quantity)
  return (
    <div className="flex flex-col items-center gap-3">
      <img src={imgURL} />
      <h1 className="w-full text-2xl">{name}</h1>
      <input
        className="shadow-inner p-2 border"
        type="number"
        max={5}
        value={quantity}
        onChange={handelChange}
      />
      <Button text="Add to cart" className="bg-blue-500" onAdd={}/>
    </div>
  );
}

export default Card;
