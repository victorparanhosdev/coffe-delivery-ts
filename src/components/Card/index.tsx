import {CardContainer, Buy, Action} from './style'
import {useEffect, useState} from 'react'
import { Check, Minus, Plus, ShoppingCart } from "@phosphor-icons/react";
import { useTheme } from 'styled-components';
import { PropsDataInfo } from '../../hooks/context';
import { useCart } from '../../hooks/context';
export interface PropsCard {
    datainfo: PropsDataInfo,

}

export function Card({datainfo}: PropsCard){
    const { dispatch } = useCart()
    const theme = useTheme()
    const numero = datainfo.price;
    const formatoPadrao = numero.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    const numeroFormatado = formatoPadrao.replace('R$', '').trim();
    
      const [isActive, setisActive] = useState<boolean>(false);
      const [dataValue, setdataValue] = useState(1);
    

      function handleSelectCard() {
        setisActive(true)
        setdataValue(1)
        dispatch({
          type: 'ADD_CART',
          payload: {
            cartItems: {...datainfo, quantity: dataValue}
          },
        });
   
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
       
            }, 500)
        }

        return ()=> {
            clearInterval(timerout)
        }

      },[isActive])


    return(
        <CardContainer>
        <img src={(datainfo.urlimg)} alt={datainfo.title} />
        <div>
          {datainfo.tag.map((tag, index )=> {
                return <span key={String(index)}>{tag}</span>
            })}
        </div>
        <h1>{datainfo.title}</h1>
        <label>{datainfo.description}</label>
        <Buy>
            <p>R$<strong>{numeroFormatado}</strong> </p>
            <Action>
                <div>
                    <button name='buttonminus' onClick={decrementValue} type="button"><Minus weight='bold' size={14} /></button>
                    <input type="text" readOnly disabled value={dataValue} />
                    <button name='buttonmax' onClick={incrementValue} type="button"><Plus weight='bold' size={14} /></button>
                </div>
                <button onClick={handleSelectCard} style={isActive ? {background: theme['yellow-dark']}: {}} disabled={isActive}>{isActive ? <Check weight="bold"size={22} />:<ShoppingCart size={22} weight="fill" />}</button>
            </Action>
        </Buy>
    </CardContainer>
    )
}