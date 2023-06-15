
import { TOTAL_MACHINE_CASH_ADMIN,INC_QUANTITY_ITEM_ADMIN,DEC_QUANTITY_ITEM_ADMIN,INC_PRICE_ITEM_ADMIN,DEC_PRICE_ITEM_ADMIN,TOTAL_ENERGY_CONSUPTION_ADMIN,RESET,SET_TIMER} from './action-types/admin-actions'


//add cart action
export const setTotalCashMachine= (id)=>{
    return{
        type: TOTAL_MACHINE_CASH_ADMIN,
        id
    }
}
//remove item action
export const incQuantityItem=(id)=>{
    return{
        type: INC_QUANTITY_ITEM_ADMIN,
        id
    }
}
//remove item action
export const decQuantityItem=(id)=>{
    return{
        type: DEC_QUANTITY_ITEM_ADMIN,
        id
    }
}
//set item price as increase
export const incPrice=(id)=>{  
    return{
        type: INC_PRICE_ITEM_ADMIN,
        id
    }
}
//set item price as decrease
export const decPrice=(id)=>{
    return{
        type: DEC_PRICE_ITEM_ADMIN,
        id
        
    }
}
//set total energy consuption
export const setTotalEnergy=(id)=>{    
    return{
        type: TOTAL_ENERGY_CONSUPTION_ADMIN ,
        id      
    }
}
    //set total energy consuption
export const reset=()=>{    
    return{
        type: RESET
          
    }

}    //set total energy consuption
export const setTimer=(id)=>{    
    return{
        type: SET_TIMER ,
        id
    }
}



