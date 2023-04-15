// const data = JSON.stringify({

//         "title": "111",
// }) 

// const makeRequest = (method, url) => { return fetch
// (url, {
//     method,
// })
// }

// makeRequest('GET', 'https://jsonplaceholder.typicode.com/posts/1')
// .then(data => {
//       return data.json()
// })
// .then(data => {
//      console.log(data)
// })
// .catch(e => {
//     console.log(e)
// })





// const func = async () => {
//     try{
//         const data = await makeRequest('GET', 'https://jsonplaceholder.typicode.com/posts/1');
//         const json = await data.json();
//         console.log(json)
//     }catch(e){
//         console.log(e)
//     }
// }

// func()





// .then(data => {
//     if(data.ok) return data.json()
//     if(data.status === 404) throw new Error('requested data does not exist')
//     else if (data.status === 500) throw new Error('server is sleeping')
// })
// .then(data => {
//     console.log(data)
// })
// .catch(e => {
//     console.log(e)
// })





// const array = [1,2,3,4,5];

// const template = document.querySelector('#template');

// const conteiner = document.createElement('ul');

// array.forEach(el => {
//     const element = template.content.cloneNode(true)

//     element.querySelector('#span').textContent = el;

//     document.body.append(element)
// })