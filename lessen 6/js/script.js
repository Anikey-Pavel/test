// const divElement = document.querySelectorAll('.test');

// // divElement.forEach(elem => {
// //     elem.addEventListener('click', function() {
// //         console.log(this.dataset.property)
// //     },)
// // })


// const clickHandler = function (e) {
//     console.log(this);
//     console.log(e)
// };

// divElement.forEach(el => {
//     el.addEventListener('click', clickHandler)
// }) 


// const root = document.querySelector('#parent');

// root.addEventListener('click', (e) => {
//     const goalElement = e.target.closest('.test');

//     if(goalElement) {
//         goalElement.classList.toggle('transparent')
//     }






const root = document.querySelector('#parent');

const cleanStyles = () => root.querySelectorAll('li[style]').forEach(element => {
    element.style.background = ''
});

root.addEventListener('click', (e) =>{
    const goalElement = e.target.closest('.test');
    const randomColor ='#' + Math.floor(Math.random() * 16777215).toString(16);
    if(goalElement){
        goalElement.style.background = randomColor;
    } else {
        cleanStyles()
    }
})

  // goalElement.style.backround = '';
        // e.currentTarget.querySelectorAll('li[style]').forEach(element => {
        //     element.style.background = '';



    // e.target.dataset.property
    // if(e.target !== e.currentTarget && e.target.tagName === 'LI'){
    // console.log(e.target.dataset.property)
    // console.log(e.currentTarget)
    // }




    // const goalElement = e.target.closest('.test')
    // if(goalElement) {
    //     console.log(goalElement.dataset.property)
    // }


    

// })