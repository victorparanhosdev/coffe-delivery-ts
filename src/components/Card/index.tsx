import {CardContainer, Buy} from './style'
import { ActionButton } from '../ActionButton';


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

}

export function Card({datainfo}: PropsCard){

    const numero = datainfo.price;
      const formatoPadrao = numero.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
      const numeroFormatado = formatoPadrao.replace('R$', '').trim();




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
            <ActionButton ActionInfo={datainfo}/>
        </Buy>
    </CardContainer>
    )
}