import React, { ReactNode, createContext, useContext, useReducer } from "react";
import CafeGelado from '../assets/Café Gelado.svg'
import Americano from '../assets/Americano.svg'
import CafeComLeite from '../assets/Café com Leite.svg'
import Capuccino from '../assets/Capuccino.svg'
import Cubano from '../assets/Cubano.svg'
import ExpressoCremoso from '../assets/Expresso Cremoso.svg'
import Havaiano from '../assets/Havaiano.svg'
//import { produce } from "immer";

export const DataCoffeeInfo = [
  {
    id: String(1),
    urlimg: CafeGelado,
    tag: ['Tradicional', 'Tag2'],
    title: 'Title1',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.99,
  },
  {
    id: String(2),
    urlimg: Americano,
    tag: ['Tag1', 'Tag2'],
    title: 'Title2',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 15.99,
  },
  {
    id: String(3),
    urlimg: CafeComLeite,
    tag: ['Tag1', 'Tag2'],
    title: 'Title10',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 29.99,
  },
  {
    id: String(4),
    urlimg: Capuccino,
    tag: ['Tag1', 'Tag2'],
    title: 'Title10',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 29.99,
  },
  {
    id: String(5),
    urlimg: Cubano,
    tag: ['Tag1', 'Tag2'],
    title: 'Latte',
    description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 29.99,
  },
  {
    id: String(6),
    urlimg: Havaiano,
    tag: ['Tag1', 'Tag2'],
    title: 'Title10',
    description: 'Description10',
    price: 29.99,
  },
  {
    id: String(7),
    urlimg: ExpressoCremoso,
    tag: ['Tag1', 'Tag2', 'tag3', 'Tag1', 'Tag2', 'tag3'],
    title: 'Title10',
    description: 'Description10',
    price: 29.99,
  }]

interface PropsContextCart {
  children: ReactNode
}


interface PropsDataInfo2 {
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
  DataCoffeeInfo: PropsDataInfo[],
  dispatch: React.Dispatch<PropsActionReducer>;
}



const CartContext = createContext({} as PropsDataContext)

interface PropsReducerCart {
  type: string,
  payloads: {
    items: PropsDataInfo2[],

  }

}

function CartProvider({ children }: PropsContextCart) {


  const [ExemploDispatch, dispatch] = useReducer((state: PropsReducerCart, action: PropsActionReducer) => {

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


    return state;

  }, {
    type: '',
    payloads: {
      items: []
    }
  });


  console.log(ExemploDispatch)
  const { payloads: { items } } = ExemploDispatch
  console.log(items)


  return (
    <CartContext.Provider value={{ DataCoffeeInfo, dispatch }}>
      {children}
    </CartContext.Provider>
  )
}

function useCart() {
  const context = useContext(CartContext)
  return context
}

export { CartProvider, useCart }