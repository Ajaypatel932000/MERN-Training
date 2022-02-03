class Car{
    constructor(name,year)
    {
        this.name=name;
        this.year=year;
    }

}

const c1=new Car("BMW",2020);
const c2=new Car("LMQ",2011);
console.log(c1);
console.log(c2);

arg=[20,30,40,50]
console.log(Array.from(arg));
const keys=arg.keys();
for(let x of keys)
{
    console.log(x);
}
console.log("\n")
marr=[[1,2,3],[4,5,6]]
console.log(marr[1][2])