import React, { ReactNode, createContext, useContext, useReducer } from "react";
import { coffees} from '../../data.json'
import { reducersCart } from "../reducers/reducers";
import { PropsActionReducer, PropsDataInfo, PropsDataInfo2 } from "../reducers/actions";

interface PropsContextCart {
  children: ReactNode
}

const CartContext = createContext({} as PropsDataContext)

interface PropsDataContext {
  coffees: PropsDataInfo[],
  dispatch: React.Dispatch<PropsActionReducer>;
  items: PropsDataInfo2[]
}


function CartProvider({ children }: PropsContextCart) {

  const [CartDispatch, dispatch] = useReducer(reducersCart, {
    type: '',
    payloads: {
      items: []
    }
  });
  const { payloads: { items } } = CartDispatch


  return (
    <CartContext.Provider value={{ coffees, dispatch, items }}>
      {children}
    </CartContext.Provider>
  )
}

function useCart() {
  const context = useContext(CartContext)
  return context
}

export { CartProvider, useCart }