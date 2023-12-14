import { PropsReducerCart, PropsActionReducer } from "../reducers/actions";
import { ActionTypes } from "./actions";




export function reducersCart(state: PropsReducerCart, action: PropsActionReducer) {
 
  switch (action.type) {
    case ActionTypes.ADD_ITEM: {
      const verifyAdd = state.payloads.items.findIndex(dataDispatch => dataDispatch.id === action.payloads.items.id);

      if (verifyAdd > -1) {
        // Se o item já existe no carrinho, atualize a quantidade
        const newArray = [...state.payloads.items];
        newArray[verifyAdd].quantity += action.payloads.items.quantity;

        return {
          ...state,
          payloads: {
            items: newArray,
          },
        };
      } else {
        // Se o item não existe no carrinho, adicione-o
        return {
          ...state,
          payloads: {
            items: [...state.payloads.items, action.payloads.items],
          },
        };
      }
    }
    break;

    case ActionTypes.ADD_INCREMENT: {
      const verifyInc = state.payloads.items.findIndex(dataDispatch => dataDispatch.id === action.payloads.items.id);

      if (verifyInc > -1) {
        // Se o item já existe no carrinho, atualize a quantidade
        const newArray = [...state.payloads.items];
        newArray[verifyInc].quantity += action.payloads.items.quantity;

        return {
          ...state,
          payloads: {
            items: newArray,
          },
        };
      }
    }
    break;

    case ActionTypes.ADD_DECREMENT: {
      const verifyDec = state.payloads.items.findIndex(dataDispatch => dataDispatch.id === action.payloads.items.id);

      if (verifyDec > -1) {
        // Se o item já existe no carrinho, atualize a quantidade
        const newArray = [...state.payloads.items];
        newArray[verifyDec].quantity = action.payloads.items.quantity;

        return {
          ...state,
          payloads: {
            items: newArray,
          },
        };
      }
    }
    break;

    case ActionTypes.REMOVE_ITEM: {
      const newArray = state.payloads.items.filter(dataDispatch => dataDispatch.id !== action.payloads.items.id);
      return {
        ...state,
        payloads: {
          items: newArray,
        },
      };
    }
    default:
        return state
 
  }

  return state
}