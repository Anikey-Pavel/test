// const user = {
//     name:'pavel',
//     role: 'user',
//     avatar: 'https',
// }

// // console.log(Object.getOwnPropertyDescriptor(user,name))

// Object.defineProperty(user, 'id', {
//     value: '122',
//     writable: false,
//     enumerable: false,
//     configurable: false,
// })

// delete user.id

// console.log(user)

// function User(name, age) {
//     this.name = name;
//     this.age = age;

//     // this.sayHi = function(){
//     //     console.log(`Hello my name is ${this.name}`)
//     // }

//         this.sayHi = function(...text){
//         console.log(`${text.join(' - ')} ${this.name}`)
//     }

// }

// const Petr = new User('Petr', 22);
// const Sergey = new User('Sergey', 35);

// console.log(Petr, Sergey);


// Petr.sayHi()

// Sergey.sayHi()

// Petr.sayHi.call(Sergey)


// Petr.sayHi('text1', 'text2', 'text3');


// const binded = Petr.sayHi.bind(Sergey, 'text 1', 'text 2')


// binded()





// function Calc(a, b) {

//     this.plus = function (){
//         return  a + b
//     }
//     this.minuse = function(){
//         return  a - b
//     }

//     this.multiple = function(){
//         return  a * b
//     }

//     this.divide = function(){
//         return  a / b
//     }

// }

// const calculate = new Calc(1, 10);
// console.log(calculate.plus());
// console.log(calculate.minuse());
// console.log(calculate.multiple());
// console.log(calculate.divide());



// class User {
//     constructor(name, surname) {
//         this.name = name;
//         this.surname = surname;
//     }

//     sayHi() {
//         console.log(`Hello my name is ${this.name}`)
//     }
// }

// class AccessibleUser extends User{
//     constructor(name, surname, accessLevel) {
//         super(name, surname);
//         this.accessLevel = accessLevel
//     }

//     sayHi() {
//         console.log(`Hello my name is ${this.name}`)
//         super.sayHi();
//         console.log(22)
//     }
// }

// const vasya = new User('vasya', 'glybin');
// const admin = new AccessibleUser('vasya', 'shyroki', 10);

// console.log(admin)
// admin.sayHi()





// Array.prototype.squared = function() {
//     return this.map(item => item ** 2)
// }

// const arr = [2, 4, 8, 16]
// console.log(arr.squared());



// const user = {
//     name: 'Pavel',
//     surname: 'Anikey',
//     get fullName(){
//         return `${this.name} ${this.surname}`
//     },

//     set fullName(value){
//         [this.name, this.surname] = value.split(' ');
//     },
// }

// user.fullName = 'Maksim Anikey2'

// console.log(user.fullName)




// const user = {

//     get name() {
//         return this._name
//     },
    

//     set name (value) {
//         if(value.length > 4){
//             this._name = value
//         }else{
//             console.error(`${value} to short`)
//         }
//     }
// }


// user.name = 'aas'

// console.log(user.name)