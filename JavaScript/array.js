const arr=[10,20,304,40]

// 1. forEach

// arr.forEach(element=>{
//     console.log(element);
// })


// 2. includes()

// console.log( arr.includes(40)); // if elements exits it return true

// console.log( arr.includes(70)); // if elements exits it return false

//3. filter  => it return array

// const filterValue=arr.filter(element=>{
//     if(element>30)
//        return true;
//     else
//        return false;
// })

// console.log(filterValue)


// 4. map   this crate new array by calling the provided function in every element


// const myMap=arr.map(element=>{
//     if(element>10)
//     {
//        return element+=1;
//     }else
//     {
//        return element;
//     }
// })

// console.log(myMap);


// // 5. reduce 
const sum=arr.reduce((total,item)=>{
   return   total+item
})

// // const sum=arr.reduce(myFun)
// function myFun(total,item)
// {
//     return total+item;
// }
// console.log(sum)


// // 6. some
//   some method check one of condition is fullfilled it return true else false;

// const a=arr.some(item=>{
//     if(item>20)
//       return true
//       else
//       return false;
// })
// console.log(a); // true

// const b=arr.some(item=>{
//     if(item>5000)
//       return true
//       else
//       return false;
// })
// console.log(b); // false


// // 7. every  => it return true every item condition will fullfilled
// const a=arr.every(item=>{
//     if(item>20)
//       return true
//       else
//       return false;
// })
// console.log(a); // false

// const b=arr.every(item=>{
//     if(item>5)
//       return true
//       else
//       return false;
// })
// console.log(b); // true



// 8. sort

// const alpha=['c','b','d','a','c']

// asc=alpha.sort((a,b)=>{
//    return   a>b? -1: 1;
// })
// console.log(asc);

// asc=alpha.sort((a,b)=>{
//   return  a>b? 1: -1;
// })
// console.log(asc);


// 9. Array.from() =>   String change in array from 

// const test="Hello";
// const ans=Array.from(test);
// console.log(test);
// console.log(ans);

// // 10. Array.of() =>this create array every argument pass on it.
// const num=Array.of(21,3,40,23,0)
// console.log(num)


// 11.  Array.prototype.copyWithin(target,start,end) it will copy different array from different location 

const num=[11,22,33,44,55,66,77,88,99]
