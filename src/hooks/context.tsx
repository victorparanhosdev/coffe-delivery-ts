import React, { ReactNode, createContext, useContext, useEffect, useReducer } from "react";
import { coffees} from '../../data.json'
import {PropsOrderFormAll} from '../pages/Payment'
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
  items: CartSelectWithQuantity[],
  CartSelectedWithForm: PropsForm | undefined
}



export interface PropsForm extends PropsOrderFormAll {
  CartSelect: CartSelectWithQuantity[]
  
}

interface StateReducerProps {
  type: string, 
  payloads: { 
    items: CartSelectWithQuantity[], 
    CartSelectedWithForm?: PropsForm
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
          newArray[verifyInc].quantity = action.payloads.items.quantity;
  
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
            items: [],
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
  }, (prevState)=> {
    const StorageData = localStorage.getItem("@coffeeCart:")
    if(StorageData) {
      const FilterStorage = JSON.parse(StorageData)

      return FilterStorage
    }

    return prevState


  });

  const { payloads: { items, CartSelectedWithForm } } = CartDispatch


  useEffect(()=> {

    localStorage.setItem("@coffeeCart:", JSON.stringify(CartDispatch))


  }, [items])
  return (
    <CartContext.Provider value={{ coffees, dispatch, items, CartSelectedWithForm }}>
      {children}
    </CartContext.Provider>
  )
}

function useCart() {
  const context = useContext(CartContext)
  return context
}

export { CartProvider, useCart }