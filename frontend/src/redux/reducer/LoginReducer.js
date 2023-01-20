import { GET_DATA, LOGOUT } from "../actionTypes/LoginactionTypes";
import { FILTER_DATA } from '../actionTypes/LoginactionTypes'
import { USER_EMAIL} from '../actionTypes/LoginactionTypes';

const initState = {
    pages : [],
    sorted : [],
    email : "",
    isAuth:false,
}

const reducer = ( store = initState , {type , payload}) =>{
    switch (type) {
        case GET_DATA : {
                return { 
                    ...store , pages : payload ,
                     sorted : payload,

                 }
        }

        case FILTER_DATA : {
            if( payload == ""){
                return  { ...store , sorted : store.pages , isAuth:false }
            }
            
            const filter = store.pages.filter( a =>{
                return a.type == payload
            });
            console.log(filter, "filter")
            return { ...store , sorted : filter,
            isAuth:false }
        }

        case USER_EMAIL : {
                return { ...store , 
                    email : payload,
                    isAuth:true,
                 }
        }
         case LOGOUT:{
            return{
                ...store,
                email:payload,
                isAuth:false,
            }
         }   
        default:
            return store;
    }
}

export {reducer};