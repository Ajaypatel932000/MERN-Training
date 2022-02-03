let sum=0
function sum_(...args)
{
    for(let i of args)
    {
        
        console.log("Sum is ",i);

    }
}

sum_(3,3,4,555)

let num=new Function('...args','return args')
console.log(num(9,3))

function mobile(model_no)
{
    this.model=model_no;
    this.color="White";
    this.ram='4GB';

}
var samsung=new mobile('Galaxy');
for(let property in samsung)
{
    console.log(property+" : "+samsung[property])
    ;
}
let a=[10,20,30,40]
for(let value of a)
{
    console.log(value);
}