import { useState} from 'react';
import {CardContainer, Buy, Action} from './style'

import { ShoppingCart, Minus, Plus } from "@phosphor-icons/react";


export interface PropsDataInfo {
    id: string,
    urlimg: string,
    tag: string[],
    title: string,
    description: string,
    price: number,

}

export interface PropsCard {
    datainfo: PropsDataInfo,
    onChangeValue: (value: number, data: string)=> void

}

export function Card({datainfo, onChangeValue }: PropsCard){

    const [dataValue, setdataValue] = useState<number>(1);

    
      const decrementValue = () => {
        const min = Math.max(dataValue - 1, 1)
        setdataValue(min);
        onChangeValue(min, datainfo.id)
      };
    
      const incrementValue = () => {
        const max = dataValue + 1
        setdataValue(max);
        onChangeValue(max, datainfo.id)
     
      };

      const numero = datainfo.price;
      const formatoPadrao = numero.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
      const numeroFormatado = formatoPadrao.replace('R$', '').trim();



    return(
        <CardContainer>
        <img src={datainfo.urlimg} alt={datainfo.title} />
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
                    <button name='buttonminus' onClick={decrementValue} type="button"><Minus size={14} /></button>
                    <input type="text" readOnly disabled value={dataValue} />
                    <button name='buttonmax' onClick={incrementValue} type="button"><Plus size={14} /></button>
                </div>
                <button><ShoppingCart size={22} weight="fill" /></button>
            </Action>
        </Buy>
    </CardContainer>
    )
}