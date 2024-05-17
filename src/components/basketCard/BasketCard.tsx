type BasketCardProps= {
    name:string,
    quantity:number,
    price:number
}

function BasketCard({name,quantity,price}:BasketCardProps) {
  return (
    <div className="bg-gray-200 p-4 flex flex-col gap-2">
      <p className="text-xl">{name}</p>
      <div className="bg-blue-400 w-fit p-1 text-white">{quantity} piece for {quantity*price}$</div>
    </div>
  )
}

export default BasketCard
