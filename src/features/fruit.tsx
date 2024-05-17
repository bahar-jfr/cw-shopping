import { ReactNode, createContext, useContext, useReducer } from "react";

type IFruit = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

const fruits = {fruitData:[],page:0};

export enum fruitsActionTypes {
  ADD_FRUITS = "ADD_FRUITS",
  CLEAR_CARD = "CLEAR_CARD",
  UPDATE_QUANTITY = "UPDATE_QUANTITY",
}

type Action =
  | { type: fruitsActionTypes.ADD_FRUITS; payload: [ fruit: IFruit ] }
  | { type: fruitsActionTypes.CLEAR_CARD }
  | {
      type: fruitsActionTypes.UPDATE_QUANTITY;
      payload: { id: number; quantity: number };
    };

    export function fruitReducer(state: any, action: any) {
      switch (action.type) {
      case fruitsActionTypes.ADD_FRUITS:
      return { ...state, fruitData: action.payload };
      
      case fruitsActionTypes.CLEAR_CARD:
      return { ...state, fruitData: [] };
      
      case fruitsActionTypes.UPDATE_QUANTITY:
      return {
      ...state,
      fruitData: state.fruitData.map((fruit) =>
      fruit.id === action.payload.id
      ? { ...fruit, quantity: fruit.quantity + action.payload.quantity }
      : fruit
      ),
      };
      
      default:
      return state;
      }
      }
  

type FruitContextType = {
  fruitState: IFruit[];
  fruitDispatch: React.Dispatch<Action>;
};

const FruitContext = createContext({});

export const useFruitContext = () => useContext(FruitContext)

type FruitProviderProps = {
  children: ReactNode;
};

export function FruitProvider({ children }: FruitProviderProps) {
  const [fruitState, fruitDispatch] = useReducer(fruitReducer, fruits);
  return (
    <FruitContext.Provider value={{ fruitState, fruitDispatch }}>
      {children}
    </FruitContext.Provider>
  );
}
