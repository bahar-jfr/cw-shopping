import React, { useState } from "react";
import Button from "../button/Button";
import { fruitsActionTypes, useFruitContext } from "../../features/fruit";

type FruitProps = {
  name: string;
  imgURL: string;
  price: number;
  id: number;
};

function Card({ name, imgURL, price, id }: FruitProps) {
  const { fruitState, fruitDispatch } = useFruitContext();
  const [quantity, setQuantity] = useState<number>(1);
  function handelChange(e: React.ChangeEvent<HTMLInputElement>) {
    setQuantity(+e.target.value);
  }

  console.log(fruitState);
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
      <Button
        text="Add to cart"
        className="bg-blue-500"
        onAdd={() => {
          const findFruit = fruitState?.fruitData?.find(
            (fruit) => fruit.id === id
          );
          console.log(findFruit);
          if (!findFruit) {
            fruitDispatch({
              type: fruitsActionTypes.ADD_FRUITS,
              payload: [...fruitState.fruitData, { id, name, price, quantity }],
            });
          } else {
            fruitDispatch({
              type: fruitsActionTypes.UPDATE_QUANTITY,
              payload: { id, quantity },
            });
          }
        }}
      />
    </div>
  );
}

export default Card;
