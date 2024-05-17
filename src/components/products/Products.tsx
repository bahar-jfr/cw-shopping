import { fruits } from "../../data/data";
import Card from "../card/Card";

const Products = () => {
  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-4xl">Some Products</h2>
      <div className="flex gap-5">
      {fruits.map((fruit) => {
        return <Card key={fruit.id} name={fruit.name} imgURL={fruit.imgURL} price={fruit.price} id={fruit.id}/>;
      })}
      </div>
    </div>
  );
};

export default Products;
