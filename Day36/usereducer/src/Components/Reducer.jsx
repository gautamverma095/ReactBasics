
export const reducer = (state,action) => {
    if(action.type =="INCRE" ){
        return state+1
    }
    if(action.type =="DECRE" ){
       return state-1
   }
    if(action.type =="RESET" ){
       return 0
   }
   if(action.type == "INCE_BY_VAL")
   return state + action.payload

}