// const div = document.querySelector('#div');

// div.addEventListener("mouseover", (e) => {
//     e.target.style.width = `${e.target.offsetWidth}px`
//     const width = e.target.offsetWidth;
    
//     const id = setInterval(() => {
//         if(width > 50){
//             e.target.style.width = `${parseInt(width) - 1}px`;
//         } else {
//             clearInterval(id)
//         }
//     }, 100)
// })













// const form = document.querySelector('#form');

// const data = [];

// try {
//     if(!data.length) throw new Error('empty data')
//     data.array.forEach(element => {
//         console.log(element)
//     });
// } catch (e) {
//     console.log(e)
// }


// try {
//     if(!data.length) throw new Error('empty data')
//     data.array.forEach(element => {
//         console.log(element)
//     });
// } catch (e) {
//     if(e.message === 'empty data'){
//         form.innerText = 'нет данных'
//         console.log(e)
//     }else {
//         throw e
//     }
// }







// class MyError extends Error {
//     constructor(messege) {
//         super(messege)
//         this.name = 'MyError'
//     }
// }

// throw new MyError('my error')









// const form = document.querySelector('#form');

// const data = undefined;

// try {
//     if(!data.length) throw new Error('empty data')
//     data.array.forEach(element => {
//         console.log(element)
//     });
//     try {
//         if(!(data === undefined)) throw new Error ('Масиива нет')
//             data.array.forEach(element => {
//                 console.log(element)
//         });

//     try{
//         if(form) throw new Error ('нет формы')
//             const form = document.querySelector('#form');

//     }catch(e){
//         console.log(e)
//     }
//     }catch (e){
//             console.log(e)
//     }
// } catch (e) {
//     console.log(e)
// }









// const noDataErrorMessege = 'invalide data';
// const emptyDataErrorMessege = 'empty data';
// const noFormElementsMessege = 'form elements does not exist';

// window.onerror = (e) => {
//     console.log('unexpe')
// }

// try{
//     const data = [];
//     const form = document.querySelector('#form');
//     let formElements;
//     formElements = data.map((el) => el); 

// try{
//     try{
//         if(!data.length) throw Error(noDataErrorMessege)
//         formElements = data.map((el) => el);
//     } catch (e) {
//         if(e.message === emptyDataErrorMessege) console.log(e);
//         else throw new Error(noDataErrorMessege);
//     }
// }catch (e) {
//     if(e.message === noDataErrorMessege) console.log(e);
//     else throw e;
// }

//     if(form)form.append(...formElements);
//     else throw new Error(noFormElementsMessege)


// } catch (e) {
//     if(e.message === noFormElementsMessege) console.log(e);
// }