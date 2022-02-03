var a=function(x,y){
    return x*y;
}
console.log(a(4,4))


f1=(a,b)=>a*b

console.log(f1(3,4))

const apples={name:'Banana'}
const bananas={name:'Apples'}
const oranges={name:'Oranges'}

const fruits=new Map()
fruits.set(apples,44);
fruits.set(bananas,445);
fruits.set(oranges,4);

console.log(fruits);

// const m=new Map()
// m.set({"name":"Ajay"});
// m.set({"name":"Vijay"});
// console.log(m);

const s=new Set()
s.add("A")
s.add("B");
s.add("C");
console.log(s.size);
console.log(s);