
import { Minus, Plus, Trash } from '@phosphor-icons/react'
import { CardSelect } from './style'
import Coffe from '../../assets/Americano.svg'

import { useState } from 'react'



export function CardSelected(){

   
   const [dataValue, setdataValue] = useState(1);

  
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
            <img src={Coffe} alt="" />
            <div className="details">
                <h2>Americano</h2>
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
        <span>R$9,90</span>
    </CardSelect>
       
    )
}