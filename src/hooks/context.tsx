import React, { ReactNode, createContext, useContext, useEffect, useReducer } from "react";
import { coffees} from '../../data.json'
import {PropsOrderFormAll} from '../pages/Payment'
import { ActionTypes } from "../reducers/actions";
import { produce } from "immer";
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
    const verifyItem = state.payloads.items.findIndex(dataDispatch => dataDispatch.id === action.payloads.items.id);

    switch (action.type) {
      case ActionTypes.ADD_ITEM: {

      return produce(state, (draft) => {
        if (verifyItem > -1) {
          draft.payloads.items[verifyItem].quantity += action.payloads.items.quantity
        }else {
          draft.payloads.items.push(action.payloads.items)
        }
      })
      }
  
      case ActionTypes.ADD_INCREMENT: {
     
        return produce(state, (draft)=> {
          if (verifyItem > -1) {
            draft.payloads.items[verifyItem].quantity = action.payloads.items.quantity
          }
          })
      }
      case ActionTypes.ADD_DECREMENT: {
        
        return produce(state, (draft)=> {
          if (verifyItem > -1) {
            draft.payloads.items[verifyItem].quantity = action.payloads.items.quantity
          }
          })
      }

      case ActionTypes.REMOVE_ITEM: {
        return produce(state, (draft)=> {
          draft.payloads.items = state.payloads.items.filter(dataDispatch => dataDispatch.id !== action.payloads.items.id);
        })

      }

      case ActionTypes.CART_CHECKOUT: {
        return produce(state, (draft)=> {
          draft.payloads.items = []
          draft.payloads.CartSelectedWithForm = action.payloads.CartSelectedWithForm
        })
      }
      default:
        return state
    }

 
  }, {
    type: '',
    payloads: {
      items: [],
    }
  }, (prevState)=> {
    const StorageData = localStorage.getItem("@coffee-delivery:cart-state-1.0.0")
    if(StorageData) {
      const FilterStorage = JSON.parse(StorageData)

      return FilterStorage
    }

    return prevState


  });

  const { payloads: { items, CartSelectedWithForm } } = CartDispatch
  console.log(CartDispatch)
  useEffect(()=> {

    localStorage.setItem("@coffee-delivery:cart-state-1.0.0", JSON.stringify(CartDispatch))


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