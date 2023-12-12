
import { Minus, Plus, Trash } from '@phosphor-icons/react'
import {CardSelect} from './style'
import { PropsDataInfo } from '../Card'
import {useState } from 'react'
import { useCart } from '../../hooks/context'

interface PropsCardSelected {
    coffe: PropsDataInfo,

}

export function CardSelected({coffe}: PropsCardSelected ){
   const {dataLocalStorage, setdataLocalStorage} = useCart()
    const [dataValue, setdataValue] = useState<number>(coffe.value || 0);

    function handleremoveItem(id: string){
        const newArrayLocalStorage = dataLocalStorage.filter(datacoffe => datacoffe.id !== id)
        setdataLocalStorage(newArrayLocalStorage)
        localStorage.setItem("@coffe-select_1.0.0:", JSON.stringify(newArrayLocalStorage))
    
    }
  
      const decrementValue = () => {
        const min = Math.max(dataValue - 1, 1)
        setdataValue(min);
 
      };
    
      const incrementValue = () => {
        const max = dataValue + 1
        setdataValue(max);     
      };
    
 
    return(
        <CardSelect>
        <div>
            <img src={coffe.urlimg} alt="" />
            <div className="details">
                <h2>{coffe.title}</h2>
                    <div>
                    <div className="box-buttonmaxminus">
                        <button onClick={decrementValue} name='buttonminus' type="button"><Minus weight="bold" size={14} /></button>
                        <input type="text" readOnly disabled value={dataValue}/>
                        <button onClick={incrementValue} name='buttonmax' type="button"><Plus weight="bold" size={14} /></button>
                    </div>
                    <button onClick={()=>handleremoveItem(coffe.id)}><Trash size={16} />Remover</button>
                    </div>
            </div>
        </div>
        <span>{(coffe.price * dataValue).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
    </CardSelect>
       
    )
}