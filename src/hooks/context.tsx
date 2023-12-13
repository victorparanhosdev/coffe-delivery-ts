import { ReactNode, createContext, useContext, useReducer } from "react";
import CafeGelado from '../assets/Café Gelado.svg'
import Americano from '../assets/Americano.svg'
import CafeComLeite from '../assets/Café com Leite.svg'
import Capuccino from '../assets/Capuccino.svg'
import Cubano from '../assets/Cubano.svg'
import ExpressoCremoso from '../assets/Expresso Cremoso.svg'
import Havaiano from '../assets/Havaiano.svg'


interface PropsContextCart {
    children: ReactNode
}

export interface PropsDataInfo {
    id: string,
    urlimg: string,
    tag: string[],
    title: string,
    description: string,
    price: number,
    value?: number
}

interface PropsDataContext {
    DataCoffeeInfo: PropsDataInfo[],
    dispatch: React.Dispatch<React.SetStateAction<any>>
}

const CartContext = createContext({} as PropsDataContext)

const DataCoffeeInfo = [
    {
      id:String(1),
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
    }
  ]


function CartProvider({children}: PropsContextCart){

  const [selectedCard, dispatch] = useReducer((state: any, action: any) => {
 
    if (action.type === 'ADD_CART') {

      return {
        cartItems: [...state.cartItems, action.payload.datainfo],
      };
    }

    return state;
  }, { cartItems: [] });

  
  console.log(selectedCard)

    return(
        <CartContext.Provider value={{DataCoffeeInfo, dispatch}}>
            {children}
        </CartContext.Provider>
    )
}

function useCart(){
    const context = useContext(CartContext)
    return context
}

export {CartProvider, useCart}