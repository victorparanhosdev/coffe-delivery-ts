import { Check, Minus, Plus, ShoppingCart } from "@phosphor-icons/react";
import { Action } from "./style";
import { useCart } from "../../hooks/context";
import { PropsDataInfo } from "../Card";
import { useState, useEffect } from "react";
interface PropsAction {
  ActionInfo: PropsDataInfo
}

export function ActionButton({ActionInfo}: PropsAction){

  const {setSelectDataFun, dataLocalStorage, selectData} = useCart()
  const [isActive, setisActive] = useState<boolean>(false);
  const [dataValue, setdataValue] = useState(1);

  function handleCart() {
    setdataValue(1)
    setisActive(true)

    const SelectCoffe = {
      ...ActionInfo,
      dataValue
    }
    const existData = dataLocalStorage.find(response => response.id === ActionInfo.id)
    if (existData) {
      const newUpdate = dataLocalStorage.map(dataCoffe => {
        if (dataCoffe.id === ActionInfo.id) {
          return { ...dataCoffe, value: dataValue + (dataCoffe.value || dataValue) }
        }
        return dataCoffe
      })
      setSelectDataFun(newUpdate)
      localStorage.setItem("@coffe-select_1.0.0:", JSON.stringify(newUpdate))


    } else {
      const newArrayCoffe = [...selectData, SelectCoffe]
      setSelectDataFun(newArrayCoffe)
      localStorage.setItem("@coffe-select_1.0.0:", JSON.stringify(newArrayCoffe))

    }


  }

      const decrementValue = () => {
        const min = Math.max(dataValue - 1, 1)
        setdataValue(min);

      };
    
      const incrementValue = () => {
        const max = dataValue + 1
        setdataValue(max);
     
      };


      useEffect(()=>{

        let timerout: number
        if(isActive){
            timerout = setTimeout(()=>{
                setisActive(false)
            }, 400)
        }

        return ()=> {
            clearInterval(timerout)
        }

      },[isActive])
      
      
    return(
            <Action>
                <div>
                    <button name='buttonminus' onClick={decrementValue} type="button"><Minus weight='bold' size={14} /></button>
                    <input type="text" readOnly disabled value={dataValue} />
                    <button name='buttonmax' onClick={incrementValue} type="button"><Plus weight='bold' size={14} /></button>
                </div>
                <button disabled={isActive} onClick={handleCart}>{isActive ? <Check weight="bold"size={22} />:<ShoppingCart size={22} weight="fill" />}</button>
            </Action>
    )
}