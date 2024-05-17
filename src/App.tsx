import { createContext } from "react";
import Basket from "./components/basket/Basket"
import Products from "./components/products/Products"


function App() {
 
  return (
    <div className="flex justify-center items-center h-screen gap-12">
      <Basket/>
      <Products/>
    </div>
  )
}

export default App
