// const input = document.querySelector('#text');
// const checkbox = document.querySelector('#checkbox');

// document.addEventListener("change", (e) => {
//     console.log(e.target.value)
// })









// const elements = document.querySelectorAll('*');

// root.addEventListener('click', (e) => {
//     console.log(e.target.tagName)
// })

// elements.forEach(element => {
//     element.addEventListener('click', (e) => {
//         console.log(`погружени`, e.currentTarget)
//         e.stopPropagation(); // запрещает всплытие
//     }, true)    
//     element.addEventListener('click', (e) => {
//         console.log(`всплытие`, e.currentTarget)
//     })  
// },);









// const root = document.querySelector('#parent');
// const body = document.body;

// root.addEventListener('click', (e) => {
//     console.log(e);
// })

// const customClick = new MouseEvent('click', {
//     clientX: 100,
//     clientY: 200
// })

// body.addEventListener('click', (e) => {
//     root.dispatchEvent(customClick);
// })
















// document.body.addEventListener('click', (e) => {
//     const x = e.clientX;
//     const y = e.clientY;
//     const height = e.target.offsetHeight;
//     const width = e.target.offsetWidth;
//     if(x <= width/2 && y <= height/2){
//         console.log(1)
//     }else if (x > width/2 && y <= height/2){
//         console.log(2)
//     }else if (x <= width/2 && y > height/2){
//         console.log(3)
//     }else if (x > width/2 && y > height/2){
//         console.log(4)
//     }
// })










// setTimeout(() => {
//     console.log(1)
// }, 4000, 12)

// setTimeout(() => {
//     console.log(2)
// }, 1000)






// setTimeout(() => {
//     console.log(1)
// setTimeout(() => {
//     console.log(2)
// }, 1000)
// }, 4000, 12)







// setTimeout(() => {
//     console.log(1)
// }, 0)

// console.log(2)








// const id = setTimeout(() => {
//     console.log('cd')
// }, 1000)

// clearTimeout(id)

// console.log(id) 






// let count = 0;

// let id = setInterval(() => {
//     if(count > 9){
//         clearInterval(id)
//     }
//     count++
//     console.log('tick')
// }, 1000);






// setTimeout(console.log, 1000, 1)









// let count = 0;

// let timeout = 200;

// let success = false

// let id = setTimeout(function request() {
//     if(count < 10 || success){
//         count++
//         console.log(count)
//         timeout *= 2
//         setTimeout(request, timeout)
//     }else {
//         clearTimeout(id)
//     }
// },timeout)



