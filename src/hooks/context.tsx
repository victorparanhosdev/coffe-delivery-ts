import { createContext, useContext, useEffect, useState } from "react";
import { PropsDataInfo } from "../components/Card";


interface PropsCardContext {
dataLocalStorage: PropsDataInfo[] | undefined,
selectData: any
setselectData: any

}

const CartContext = createContext({} as PropsCardContext)



export function CartProvider({children}:any){

    const [dataLocalStorage, setdataLocalStorage] = useState<PropsDataInfo[]>([])
    const [selectData, setselectData] = useState<any[]>([])

    useEffect(() => {
        const LocalStorageCoffe = localStorage.getItem('@coffe-select_1.0.0:') || '[]';
    
        if (JSON.parse(LocalStorageCoffe).length > 0) {
          setdataLocalStorage(JSON.parse(LocalStorageCoffe))
    
        }
    
    
    
      }, [selectData])

    return(
        <CartContext.Provider value={{dataLocalStorage, selectData, setselectData}}>
            {children}
        </CartContext.Provider>
    )
}

export function useCart(){
    const context = useContext(CartContext)
    return context
}