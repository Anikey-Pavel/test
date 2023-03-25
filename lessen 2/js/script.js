// const array = [1, 2, 3, 4, 5];
// const copy = [];

// const array2 = array;

// console.log(array === array2)

// array.length = 0;

// console.log(array)

// for(let i = 0; i < array.length; i++){
//     copy[i] = array[i]
// }

// console.log(copy == array)

// for(let i = 0; i < array.length; i++){
//     copy[i] = array[i]
// }

// console.log(copy == array)

// const someFunc = (func , a) =>{
//     func(a)
// }

// someFunc(alert, 'text')



// const array = [1, 2, 3, 4, 5 ,8 ,9, 1, 22];
// const filtersArray = array.filter((element, index, array) => {
//     // console.log(element, index ,array)
//     // return element > 6;
//     return !(element % 2); // !(element % 2) > !0 > !false > true
// });

// console.log(filtersArray)




// const array = [1, 2, 3, 4, 5 ,8 ,9, 1, 22];
// const copy = [];

// array.forEach((element) => {
//     copy.push(element)
// })

// console.log(copy)



// const matrix = [
//     [1, 4, 6, 8 , [1,2,3]],
//     [2, 6, 7 ,11],
//     [3, 5, 78]
// ]


// const callback = (value) => {
//     // if(typeof value === 'number'){
//     //     sum += value;
//     // } else {
//     //     value.forEach(callback);
//     // }
//      sum += value;
// }   

// matrix.flat(Infinity).forEach(callback)

// console.log(sum)



// const callback = (accumulator, currentValue) => {
//     return accumulator += currentValue
// }   

// const newValue = matrix.flat(Infinity).reduce(callback, 0);


// console.log(newValue)









// const user = {
//     name: 'Pavel',
//     role: 'Admin',
//     isAccess: false,
// };

// user.sayHello = function() {
//     console.log(`hello, my name is ${this.name}`)
// }

// user.sayHello()



// if(user.role === 'Admin'){
//    user.isAccess = true
// }

// for(let key in user){
//     console.log(key)
// }





// const array = [1, 2, 3];

// let result = array.map(function(item){
//     return item **= 2;
// })

// console.log(result)




const obj = {
    name: 'Pavel',
    age: 22,
};

const obj2 = {};


Object.keys(obj).forEach((element) => {
    obj2[element] = obj[element]
})

console.log(obj2)