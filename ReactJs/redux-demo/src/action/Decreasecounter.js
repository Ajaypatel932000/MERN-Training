
const Decreasecounter=function(cnt){

    console.log("Action is called ");
    return {type:'COUNTER-DECREASE',payload:{decValue:cnt}}
}
export default Decreasecounter;

