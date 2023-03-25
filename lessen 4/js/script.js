// -----------------наследование---------------

// class Animal {
//     constructor(name, age){
//         this.name = name
//         this.age = age
//     }
//     walk = () => {
//         console.log('Animal is walking');
//     }
    
//     eat = () => {
//         console.log('Animal is eating')
//     }
// }

// class Cat extends Animal {
//     constructor(name, age){
//         super(name, age)
//         this.type = 'cat'
//     }
// }

// const mysa = new Cat('mysa', 4);

// mysa.eat()


// ----------инкопсуляция--------------------

// function User (login) {
//     this.login = login
//     // this._password = password

//     Object.defineProperty(this, 'password', {
//         get() {
//             return "******";
//         },
//         set (newPassword) {
//             if(newPassword.toUpperCase() === newPassword || newPassword.toLowerCase() === newPassword || newPassword.length < 8) {
//                 console.log('not allowe password')
//             }else{
//              this._password = newPassword
//             }
//         }
//     })
// }

// const test = new User('Ivan')

// console.log(test.password = '')


// ----------полиморфизм-----------------------

// class User {
//     constructor(name){
//         this.name = name;
//     }
//     sayHello = function() {
//         return `my name is ${this.name}`
//     }
// }

// const myCrew = [
// new User('Ivan'),
// new User('pavel'),
// new User('kasty'),
// new User('artyom'),
// new User('maksim'),
// ]

// const crewNames = myCrew.map((user) => {
//     return user.sayHello()
// })

// console.log(myCrew, crewNames)

// ------------композиция---------------------

// class Animal {
//     constructor(name){
//         this.name = name
//     }
// }

// class Cat extends Animal{
//     constructor(name, age){
//         super(name)
//         this.age = age
//     }
//     sleep = function () {
//         console.log(`${this.name} is sleeping`)
//     }
// }

// function hunt () {
//     console.log(`${this.name} is hunting`)
// }

// function learnHunting (cat) {
//     cat.hunt = hunt
//     return cat;
// }

// const murka = new Cat('murka', 28);
// console.log(murka)
// const pushok = learnHunting (new Cat('pushok', 2));
// console.log(pushok)
// const ryshik = learnHunting (new Cat('ryshik', 3));
// console.log(ryshik)
// const vasy = learnHunting (new Cat('vasy', 7));
// console.log(vasy)



// function calcFactorial (num) {
//     if(num === 0) return 1;
//     return num * calcFactorial(num - 1)
// };

// console.log(calcFactorial(5))


