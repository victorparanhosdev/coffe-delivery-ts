
import { Minus, Plus, Trash } from '@phosphor-icons/react'
import { CardSelect } from './style'
import { PropsDataInfo2 } from '../../hooks/context'
import { useState } from 'react'


interface PropsCoffeSelected {
  coffeSelecteds: PropsDataInfo2
}

export function CardSelected({coffeSelecteds}: PropsCoffeSelected){

   
   const [dataValue, setdataValue] = useState<number>(coffeSelecteds.quantity);

    
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
            <img src={coffeSelecteds.urlimg} alt={coffeSelecteds.title} />
            <div className="details">
                <h2>{coffeSelecteds.title}</h2>
                    <div>
                    <div className="box-buttonmaxminus">
                        <button onClick={decrementValue} name='buttonminus' type="button"><Minus weight="bold" size={14} /></button>
                        <input type="text" readOnly disabled value={dataValue}/>
                        <button onClick={incrementValue} name='buttonmax' type="button"><Plus weight="bold" size={14} /></button>
                    </div>
                    <button><Trash size={16} />Remover</button>
                    </div>
            </div>
        </div>
        <span>{(coffeSelecteds.price).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
    </CardSelect>
       
    )
}