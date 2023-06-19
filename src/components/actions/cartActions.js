
import { ADD_TO_CART, REMOVE_ITEM, SUB_QUANTITY, ADD_QUANTITY, ADD_MONEY, CHECK_OUT, REFUND } from './action-types/cart-actions'

//add cart action
export const addToCart = (id) => {
    return {
        type: ADD_TO_CART,
        id
    }
}
//remove item action
export const removeItem = (id) => {
    return {
        type: REMOVE_ITEM,
        id
    }
}
//subtract qt action
export const subtractQuantity = (id) => {
    return {
        type: SUB_QUANTITY,
        id
    }
}
//add qt action
export const addQuantity = (id) => {
    return {
        type: ADD_QUANTITY,
        id

    }
}
//add money
export const addMoney = (id) => {
    return {
        type: ADD_MONEY,
        id
    }
}

//checkout
export const checkOut = () => {
    return {
        type: CHECK_OUT
    }
}

//refund
export const refund = () => {
    return {
        type: REFUND
    }
}


