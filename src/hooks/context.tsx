import React, { ReactNode, createContext, useContext, useReducer } from "react";
//import { produce } from "immer";
import { coffees} from '../../data.json'



interface PropsContextCart {
  children: ReactNode
}


export interface PropsDataInfo2 {
  id: string,
  urlimg: string,
  tag: string[],
  title: string,
  description: string,
  price: number,
  quantity: number
}

export interface PropsDataInfo {
  id: string,
  urlimg: string,
  tag: string[],
  title: string,
  description: string,
  price: number,
  quantity?: number
}

interface PropsActionReducer {
  type: string,
  payloads: {
    items: PropsDataInfo2
  }
}

interface PropsDataContext {
  coffees: PropsDataInfo[],
  dispatch: React.Dispatch<PropsActionReducer>;
  items: PropsDataInfo2[]
}



const CartContext = createContext({} as PropsDataContext)

interface PropsReducerCart {
  type: string,
  payloads: {
    items: PropsDataInfo2[],

  }

}

function CartProvider({ children }: PropsContextCart) {


  const [CartDispatch, dispatch] = useReducer((state: PropsReducerCart, action: PropsActionReducer) => {

    if (action.type === 'ADD_CART') {
      const verify = state.payloads.items.findIndex(dataDispatch => dataDispatch.id === action.payloads.items.id);

      if (verify > -1) {
        // Se o item já existe no carrinho, atualize a quantidade
        const newArray = [...state.payloads.items];
        newArray[verify].quantity += action.payloads.items.quantity;

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
    if(action.type === 'ADD_INCREMENT'){
      const verify = state.payloads.items.findIndex(dataDispatch => dataDispatch.id === action.payloads.items.id);

      if (verify > -1) {
        // Se o item já existe no carrinho, atualize a quantidade
        const newArray = [...state.payloads.items];
        newArray[verify].quantity = action.payloads.items.quantity;

        return {
          ...state,
          payloads: {
            items: newArray,
          },
        }
      }
    }
    if(action.type === 'ADD_DECREMENT'){
      const verify = state.payloads.items.findIndex(dataDispatch => dataDispatch.id === action.payloads.items.id);

      if (verify > -1) {
        // Se o item já existe no carrinho, atualize a quantidade
        const newArray = [...state.payloads.items];
        newArray[verify].quantity = action.payloads.items.quantity;

        return {
          ...state,
          payloads: {
            items: newArray,
          },
        }
      }
    }
    if(action.type === 'REMOVE_ITEM') {

      const newArray = state.payloads.items.filter(dataDispatch => dataDispatch.id !== action.payloads.items.id);
        return {
          ...state,
          payloads: {
            items: newArray,
          },
        }
      
      
    }




    return state;

  }, {
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