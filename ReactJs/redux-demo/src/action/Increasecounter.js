
const Increasecounter=function(cnt){

    console.log("Action is called ");
    return {type:'COUNTER-INCREASE',payload:{countervalue:cnt}}
}
export default Increasecounter;

