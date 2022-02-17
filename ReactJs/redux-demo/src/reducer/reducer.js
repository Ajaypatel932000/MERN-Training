const reducer=function(state,action){
       
  console.log("Reducer is Called ");
   switch(action.type)
    {
       case 'COUNTER-INCREASE': 
                              return {...state,counterValue:action.payload.countervalue}
       case 'COUNTER-DECREASE': 
                              return {...state,counterValue:action.payload.countervalue}                         
        default :
                 return null;
    }
    
}
export default reducer;