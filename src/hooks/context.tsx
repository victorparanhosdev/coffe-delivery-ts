import { ReactNode, createContext, useContext } from "react";



interface PropsContextCart {
    children: ReactNode
}

const CartContext = createContext({})



function CartProvider({children}: PropsContextCart){
 
    return(
        <CartContext.Provider value={{}}>
            {children}
        </CartContext.Provider>
    )
}

function useCart(){
    const context = useContext(CartContext)
    return context
}

export {CartProvider, useCart}