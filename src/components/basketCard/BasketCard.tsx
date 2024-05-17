type BasketCardProps= {
    name:string,
    quantity:number,
    price:number
}

function BasketCard({name,quantity,price}:BasketCardProps) {
  return (
    <div className="bg-gray-300">
      <p className="text-xl">{name}</p>
      <div className="bg-blue-400">{quantity} piece for {quantity*price}$</div>
    </div>
  )
}

export default BasketCard
