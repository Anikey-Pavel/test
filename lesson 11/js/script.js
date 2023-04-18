// const conteiner = document.querySelector('#conteiner')
// const loading = document.createElement('li');

// loading.innerText = 'Loading...';
// conteiner.append(loading)

// document.addEventListener('dataSuccessful', (props) => {
//     console.log(props.detail)
// })

// fetch('https://jsonplaceholder.typicode.com/todos')
//     .then(response => response.json())
//     .then(json => {
    //   console.log(json)
    //   document.dispatchEvent(new CustomEvent ('dataSuccessful', {
    //     detail: json
    //   }))
    //   conteiner.innerHTML = ''


    // const comleted = [];
    // const inProgress = [];

    // json.forEach(element => {
    //     if(element.comleted) comleted.push(element)
    //     else inProgress.push(element)
    //     console.log(comleted)
    //     console.log(inProgress)
    // });



//     const {completed, inProgress} = json.reduce((prev, cur) => {
//         if(cur.completed) prev.completed.push(cur)
//         else  prev.inProgress.push(cur)

//         return prev;
//     },{
//         completed: [],
//         inProgress: []
//     } )
//     console.log(completed)
//     console.log(inProgress)
//   })



const obj = {
    id: 1,
    name: 'hello'
}

localStorage.setItem('name', JSON.stringify(obj))


console.log(localStorage)
console.log(JSON.parse(localStorage.getItem('name')))