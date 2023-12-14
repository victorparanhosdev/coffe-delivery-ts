export enum ActionTypes {
    ADD_ITEM = 'ADD_CART',
    REMOVE_ITEM = 'REMOVE_ITEM',
    ADD_DECREMENT = 'ADD_DECREMENT',
    ADD_INCREMENT = 'ADD_INCREMENT',
}

export interface PropsDataInfo {
    id: string,
    urlimg: string,
    tag: string[],
    title: string,
    description: string,
    price: number,
    quantity?: number
}

export interface PropsActionReducer {
    type: string,
    payloads: {
        items: PropsDataInfo2
    }
}

export interface PropsDataInfo2 {
    id: string,
    urlimg: string,
    tag: string[],
    title: string,
    description: string,
    price: number,
    quantity: number
}

export interface PropsReducerCart {
    type: string,
    payloads: {
        items: PropsDataInfo2[],

    }

}