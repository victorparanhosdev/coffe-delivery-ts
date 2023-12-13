import { useEffect, useState} from 'react';
import {CardContainer, Buy, Action} from './style'
import { useCart } from '../../hooks/context';
import { ShoppingCart, Minus, Plus, Check } from "@phosphor-icons/react";


export interface PropsDataInfo {
    id: string,
    urlimg: string,
    tag: string[],
    title: string,
    description: string,
    price: number,
    value?: number
}

export interface PropsCard {
    datainfo: PropsDataInfo,
    onChangeValue: (value: number, data: PropsDataInfo)=> void,
}

export function Card({datainfo, onChangeValue}: PropsCard){

    const [dataValue, setdataValue] = useState(1);

    const {setisActive, isActive} = useCart()

    function handleCart(){
        onChangeValue(dataValue, datainfo)
        setdataValue(1)
        setisActive(true)

        
    }
    
      const decrementValue = () => {
        const min = Math.max(dataValue - 1, 1)
        setdataValue(min);

      };
    
      const incrementValue = () => {
        const max = dataValue + 1
        setdataValue(max);


     
      };

      const numero = datainfo.price;
      const formatoPadrao = numero.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
      const numeroFormatado = formatoPadrao.replace('R$', '').trim();

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

                <button disabled={isActive} onClick={handleCart}>{isActive ? <Check weight="bold"size={22} />:<ShoppingCart size={22} weight="fill" />}</button>
            </Action>
        </Buy>
    </CardContainer>
    )
}