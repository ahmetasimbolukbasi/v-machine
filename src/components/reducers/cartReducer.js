import Item1 from '../../images/item1.jpg'
import Item2 from '../../images/item2.jpg'
import Item3 from '../../images/item3.jpg'
import { ADD_TO_CART, REMOVE_ITEM, SUB_QUANTITY, ADD_QUANTITY, ADD_MONEY, CHECK_OUT, REFUND } from '../actions/action-types/cart-actions'
import { TOTAL_MACHINE_CASH_ADMIN, INC_QUANTITY_ITEM_ADMIN, DEC_QUANTITY_ITEM_ADMIN, INC_PRICE_ITEM_ADMIN, DEC_PRICE_ITEM_ADMIN, RESET, SET_TIMER } from '../actions/action-types/admin-actions'

const initStateOfCart = {
    items: [
        { id: 1, title: 'Water', desc: "Erikli", price: 25, sayi: 5, img: Item1 },
        { id: 2, title: 'S.Water', desc: "Beypazarı", price: 35, sayi: 5, img: Item2 },
        { id: 3, title: 'Coke', desc: "Pepsi", price: 45, sayi: 5, img: Item3 },
    ],
    consuptions: [
        { id: 1, title: 'Lightining', desc: "", price: 2, sayi: 0 },
        { id: 2, title: 'Robotics', desc: "", price: 2, sayi: 0 }
    ],
    addedItems: [],
    total: 0,
    zaman: new Date(),
    totalEnergyConsumption: 0,
    consumerCashTotal: 0,
    adminCashTotal: 0
}
const cartReducer = (state = initStateOfCart, action) => {

    //INSIDE HOME COMPONENT
    if (action.type === ADD_TO_CART) {
        let addedItem = state.items.find(item => item.id === action.id)

        //check if the action id exists in the addedItems
        let existed_item = state.addedItems.find(item => action.id === item.id)
        if (existed_item) {
            addedItem.quantity += 1
            addedItem.sayi -= 1
            return {
                ...state,
                total: state.total + addedItem.price
            }
        }
        else {
            addedItem.quantity = 1;
            addedItem.sayi -= 1
            //calculating the total
            let newTotal = state.total + addedItem.price
            return {
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total: newTotal,
            }

        }
    }
    if (action.type === REMOVE_ITEM) {
        let itemToRemove = state.addedItems.find(item => action.id === item.id)
        let new_items = state.addedItems.filter(item => action.id !== item.id)

        //calculating the total
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity)
        itemToRemove.sayi += itemToRemove.quantity

        console.log(itemToRemove)
        return {
            ...state,
            addedItems: new_items,
            total: newTotal

        }
    }
    //INSIDE CART COMPONENT
    if (action.type === ADD_QUANTITY) {
        let addedItem = state.items.find(item => item.id === action.id)
        if (addedItem.sayi > 0) {
            addedItem.sayi -= 1
            addedItem.quantity += 1
            let newTotal = state.total + addedItem.price
            state.total = newTotal;
        }
        return {
            ...state,
        }
    }
    if (action.type === SUB_QUANTITY) {
        let addedItem = state.items.find(item => item.id === action.id)
        //if the qt == 0 then it should be removed
        if (addedItem.quantity === 1) {
            addedItem.sayi += 1
            let new_items = state.addedItems.filter(item => item.id !== action.id)
            let newTotal = state.total - addedItem.price
            return {
                ...state,
                addedItems: new_items,
                total: newTotal,
            }
        }
        else {
            addedItem.quantity -= 1
            addedItem.sayi += 1
            let newTotal = state.total - addedItem.price
            return {
                ...state,
                total: newTotal,
            }
        }

    }

    if (action.type === ADD_MONEY) {
        if (action.id === undefined)
            action.id = 25;
        return {
            ...state,
            consumerCashTotal: state.consumerCashTotal + action.id
        }
    }
    if (action.type === CHECK_OUT) {
       
        if (state.consumerCashTotal >= state.total) {    console.log( state.addedItems.length)        
            for ( let i = 0; i < state.addedItems.length; i++) {
                console.log('ahmet asim bol')
                state.consuptions[1].sayi += state.addedItems[i].quantity };
            state.adminCashTotal += state.total;
            state.consumerCashTotal = state.consumerCashTotal - state.total;
            state.total = 0;
            state.addedItems = [];

            return {
                ...state

            }
        }
        else {
            return {
                ...state

            }
        }
    }
    if (action.type === INC_QUANTITY_ITEM_ADMIN) {
        let selectedItem = state.items.find(item => item.id === action.id)
        selectedItem.sayi++

        return {
            ...state
        }
    }

    if (action.type === DEC_QUANTITY_ITEM_ADMIN) {
        let selectedItem = state.items.find(item => item.id === action.id)
        if(selectedItem.sayi>0){
        selectedItem.sayi--}

        return {
            ...state
        }
    }

    if (action.type === INC_PRICE_ITEM_ADMIN) {
        let selectedItem = state.items.find(item => item.id === action.id)
        selectedItem.price++

        return {
            ...state
        }
    }

    if (action.type === DEC_PRICE_ITEM_ADMIN) {
        let selectedItem = state.items.find(item => item.id === action.id)
        selectedItem.price--

        return {
            ...state
        }
    }

    if (action.type === RESET) {
        state = initStateOfCart;
        state.consuptions[0].sayi=0;

        return {
            ...state

        }
    }

    if (action.type === REFUND) {
        state.consumerCashTotal = 0;
        state.addedItems = [];
        state.total = 0;
        
        return {
            ...state

        }
    } if (action.type === SET_TIMER) {
      
            state.consuptions[0].sayi += 1;
            state.totalEnergyConsumption = 0;
            state.totalEnergyConsumption = (state.consuptions[0].price * state.consuptions[0].sayi) + ((state.consuptions[1].price * state.consuptions[1].sayi))            
            return {
                ...state

            }    
    }

    if (action.type === TOTAL_MACHINE_CASH_ADMIN) {
        state.adminCashTotal = 0;
       
        return {
            ...state

        }
    }
    else {
        return state
    }
}

export default cartReducer
