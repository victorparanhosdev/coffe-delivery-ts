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
    datainfo: PropsDataInfo
}

export function Card({datainfo}: PropsCard){

    const localimg = '/src/assets/'

    return(
        <CardContainer>
        <img src={localimg+datainfo.urlimg} alt={datainfo.title} />
        <div>
          {datainfo.tag.map(tag=> {
                return <span>{tag}</span>
            })}
        </div>
        <h1>{datainfo.title}</h1>
        <label>{datainfo.description}</label>
        <Buy>
            <p>R$ <strong>{datainfo.price}</strong> </p>
            <Action>
                <div>
                    <button type="button"><Minus size={14} /></button>
                    <input type="text" readOnly disabled value={1} />
                    <button type="button"><Plus size={14} /></button>
                </div>
                <button><ShoppingCart size={22} weight="fill" /></button>
            </Action>
        </Buy>
    </CardContainer>
    )
}