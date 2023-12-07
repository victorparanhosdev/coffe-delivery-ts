import { createContext, useContext } from "react";

const CartContext = createContext({})

export function CartProvider({children}:any){


    return(
        <CartContext.Provider value={{}}>
            {children}
        </CartContext.Provider>
    )
}

export function useCart(){
    const context = useContext(CartContext)
    return context
}