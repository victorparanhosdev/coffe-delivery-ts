import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { PropsDataInfo } from "../components/Card";


interface PropsCardContext {
dataLocalStorage: PropsDataInfo[],
selectData: PropsDataInfo[] | [],
isActive: boolean,
setSelectDataFun: (value: PropsDataInfo[])=> void,
setdataLocalStorage: (v: PropsDataInfo[])=> void,
setisActive: React.Dispatch<React.SetStateAction<boolean>>

}

interface PropsContextCart {
    children: ReactNode
}

const CartContext = createContext({} as PropsCardContext)



function CartProvider({children}: PropsContextCart){

    const [dataLocalStorage, setdataLocalStorage] = useState<PropsDataInfo[]>([])
    const [selectData, setselectData] = useState<PropsDataInfo[] | []>([])
    const [isActive, setisActive] = useState<boolean>(false);

    function setSelectDataFun(value: PropsDataInfo[]){
        setselectData(value)
    }

    
    useEffect(() => {
        const LocalStorageCoffe = localStorage.getItem('@coffe-select_1.0.0:') || '[]';
        const LocalStorageParse = JSON.parse(LocalStorageCoffe)
        if (LocalStorageParse.length > 0) {
          setdataLocalStorage(LocalStorageParse)
    
        }
    
    
    
      }, [selectData])

    return(
        <CartContext.Provider value={{dataLocalStorage, selectData, setSelectDataFun, setdataLocalStorage, setisActive, isActive}}>
            {children}
        </CartContext.Provider>
    )
}

function useCart(){
    const context = useContext(CartContext)
    return context
}

export {CartProvider, useCart}