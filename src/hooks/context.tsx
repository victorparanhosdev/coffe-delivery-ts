import React, { ReactNode, createContext, useContext, useReducer } from "react";
import { coffees} from '../../data.json'
import {PropsOrderForm} from '../pages/Payment'
import { ActionTypes } from "../reducers/actions";

interface PropsContextCart {
  children: ReactNode
}

export interface CoffeProps {
  id: string,
  title: string,
  description: string,
  tag: string[],
  price: number,
  urlimg: string
}

export interface CartSelectWithQuantity extends CoffeProps{
  quantity: number
}

interface PropsDataContext {
  coffees: CoffeProps[],
  dispatch: React.Dispatch<PropsActionReducer>;
  items: CartSelectWithQuantity[]
}



export interface PropsForm extends PropsOrderForm {
  MethodPayment: string | null,
  CartSelect: CartSelectWithQuantity[]
  
}

interface StateReducerProps {
  type: string, 
  payloads: { 
    items: CartSelectWithQuantity[], 

  }
}

interface PropsActionReducer {
  type: string,
  payloads: {
    items: CartSelectWithQuantity,
    CartSelectedWithForm?: PropsForm
  }
}

const CartContext = createContext({} as PropsDataContext)








function CartProvider({ children }: PropsContextCart) {

  const [CartDispatch, dispatch] = useReducer((state: StateReducerProps, action: PropsActionReducer) => {
 
    switch (action.type) {
      case ActionTypes.ADD_ITEM: {
        const verifyAdd = state.payloads.items.findIndex(dataDispatch => dataDispatch.id === action.payloads.items.id);
  
        if (verifyAdd > -1) {
          // Se o item já existe no carrinho, atualize a quantidade
          const newArray = [...state.payloads.items];
          newArray[verifyAdd].quantity += action.payloads.items.quantity;
  
          return {
            ...state,
            payloads: {
              items: newArray,
            },
          };
        } else {
          // Se o item não existe no carrinho, adicione-o
          return {
            ...state,
            payloads: {
              items: [...state.payloads.items, action.payloads.items],
            },
          };
        }
      }
     
  
      case ActionTypes.ADD_INCREMENT: {
        const verifyInc = state.payloads.items.findIndex(dataDispatch => dataDispatch.id === action.payloads.items.id);
  
        if (verifyInc > -1) {
          // Se o item já existe no carrinho, atualize a quantidade
          const newArray = [...state.payloads.items];
          newArray[verifyInc].quantity += action.payloads.items.quantity;
  
          return {
            ...state,
            payloads: {
              items: newArray,
            },
          };
        }
      }
      break;
  
      case ActionTypes.ADD_DECREMENT: {
        const verifyDec = state.payloads.items.findIndex(dataDispatch => dataDispatch.id === action.payloads.items.id);
  
        if (verifyDec > -1) {
          // Se o item já existe no carrinho, atualize a quantidade
          const newArray = [...state.payloads.items];
          newArray[verifyDec].quantity = action.payloads.items.quantity;
  
          return {
            ...state,
            payloads: {
              items: newArray,
            },
          };
        }
      }
      break;
  
      case ActionTypes.REMOVE_ITEM: {
        const newArray = state.payloads.items.filter(dataDispatch => dataDispatch.id !== action.payloads.items.id);
        return {
          ...state,
          payloads: {
            items: newArray,
          },
        };
      }

      case ActionTypes.CART_CHECKOUT: {
       
        return {
          ...state,
          payloads: {
            items: [...state.payloads.items],
            CartSelectedWithForm: action.payloads.CartSelectedWithForm  
          },
        };
      }
  
      default:
          return state
   
    }
  
    return state
  }, {
    type: '',
    payloads: {
      items: []
    }
  });

  const { payloads: { items } } = CartDispatch
  console.log(CartDispatch)

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