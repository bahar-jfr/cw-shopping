import { useFruitContext } from "../../features/fruit";
import BasketCard from "../basketCard/BasketCard";
import Button from "../button/Button";

function Basket() {
  const { fruitState, fruitDispatch } = useFruitContext();
  return (
    <div className="flex flex-col gap-3 h-1/3 p-8 shadow-lg">
      <h1 className="text-4xl">Cart items</h1>

      <div className="flex gap-5">
        <Button text="Clear the Cart" className="bg-gray-400" />
        <Button text="Checkout" className="bg-blue-400" />
      </div>
      <div>
        {fruitState.fruitData.map((fruit) => {
          return (
            <BasketCard
              name={fruit.name}
              quantity={fruit.quantity}
              price={fruit.price}
            />
          );
        })}
      </div>
      <p>Total price: 0$</p>
    </div>
  );
}

export default Basket;
