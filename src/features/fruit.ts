import { ReactNode, createContext, useContext, useReducer } from "react";

type IFruit = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

const fruits: IFruit[] = [];

export enum fruitsActionTypes {
  ADD_FRUITS = "ADD_FRUITS",
  CLEAR_CARD = "CLEAR_CARD",
  UPDATE_QUANTITY = "UPDATE_QUANTITY",
}

type Action =
  | { type: fruitsActionTypes.ADD_FRUITS; payload: { fruit: IFruit } }
  | { type: fruitsActionTypes.CLEAR_CARD }
  | {
      type: fruitsActionTypes.UPDATE_QUANTITY;
      payload: { id: number; quantity: number };
    };

export function fruitReducer(state: IFruit[], action: Action) {
  switch (action.type) {
    case fruitsActionTypes.ADD_FRUITS:
      return [...state, action.payload.fruit];
    case fruitsActionTypes.CLEAR_CARD:
      return [];
    case fruitsActionTypes.UPDATE_QUANTITY:
      return state.map((fruit) =>
        fruit.id === action.payload.id
          ? { ...fruit, quantity: action.payload.quantity }
          : fruit
      );
    default:
      return state;
  }
}

type FruitContextType = {
  fruitState: IFruit[];
  fruitDispatch: React.Dispatch<Action>;
};

const FruitContext = createContext<FruitContextType | undefined>(undefined);

export const useFruitContext = () => {
  const context = useContext(FruitContext);
  if (!context) {
    throw new Error("useFruitContext must be used within a FruitProvider");
  }
  return context;
};

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
