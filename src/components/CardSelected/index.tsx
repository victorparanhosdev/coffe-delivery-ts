
import { Minus, Plus, Trash } from '@phosphor-icons/react'
import { CardSelect } from './style'
import { PropsDataInfo2 } from '../../reducers/actions'
import { useState } from 'react'
import { useCart } from '../../hooks/context'
import {ActionTypes} from '../../reducers/actions'
interface PropsCoffeSelected {
  coffeSelecteds: PropsDataInfo2,
}

export function CardSelected({ coffeSelecteds }: PropsCoffeSelected) {

  const { dispatch } = useCart()

  const [dataValue, setdataValue] = useState<number>(coffeSelecteds.quantity);



  function removeItems() {
    dispatch({
      type: ActionTypes.REMOVE_ITEM,
      payloads: {
        items: { ...coffeSelecteds }
      }
    })

  }


  const decrementValue = () => {
    if (dataValue === 1) {
      return
    }
    const min = Math.max(dataValue - 1, 1)
    setdataValue(min);
    dispatch({
      type: ActionTypes.ADD_DECREMENT,
      payloads: {
        items: { ...coffeSelecteds, quantity: min }
      }
    })

  };

  const incrementValue = () => {
    const max = dataValue + 1
    setdataValue(max);
    dispatch({
      type: ActionTypes.ADD_INCREMENT,
      payloads: {
        items: { ...coffeSelecteds, quantity: max }
      }
    })
  };



  return (
    <CardSelect>
      <div>
        <img src={coffeSelecteds.urlimg} alt={coffeSelecteds.title} />
        <div className="details">
          <h2>{coffeSelecteds.title}</h2>
          <div>
            <div className="box-buttonmaxminus">
              <button onClick={decrementValue} name='buttonminus' type="button"><Minus weight="bold" size={14} /></button>
              <input type="text" readOnly disabled value={dataValue} />
              <button onClick={incrementValue} name='buttonmax' type="button"><Plus weight="bold" size={14} /></button>
            </div>
            <button onClick={removeItems}><Trash size={16} />Remover</button>
          </div>
        </div>
      </div>
      <span>{(coffeSelecteds.price * dataValue).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
    </CardSelect>

  )
}