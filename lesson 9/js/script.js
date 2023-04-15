// console.log('satart')
// const promise = new Promise((resolve, reject) => {
//     console.log("promise body")
//     setTimeout(() => {reject('error')}, 500) 
//     setTimeout(() => {resolve('done')}, 1000) 
// })

// promise.then((data) => {
//     console.log(data)
// }).catch((data) => {
//     console.log(data)
// }).finally(() => {
//     console.log('finally')
// })

// console.log('end')






// console.log('start')

// const promise = new Promise((resolve, reject) => {

//     console.log('promise')
    
//    setTimeout(() => resolve('done'), Math.random * 1000)
//    setTimeout(() => reject('error'), Math.random * 1000)

// })

// promise.then((data) => {
//     console.log(data)
// }).catch((data) => {
//     console.error(data)
// }).finally(() => {
//     console.log('finally')
// })

// console.log('end')












// const createScript = (path, resolve, reject) => {
//     const script = document.createElement('script')
//     script.src = path;

//     if(resolve) script.onload = resolve;
//     if(reject) script.onerror = reject;

//     document.body.append(script)
// };

// createScript('js/index.js', 
// () => test(),
// () => console.log('script does not exist'))




// const createScript = (path) => { 
//     return new Promise((resolve, reject) => {

//         const script = document.createElement('script')
//         script.src = path;

//         script.onload = resolve;
//         script.onerror = reject;

//         document.body.append(script)

// })};

// createScript('js/index.js')
// .then(() => test()) 
// .then(data => {
//     console.log(data)
// })
// .then(() => {
//     return console.log(3)
// })
// .then(() => {
//     return console.log(4)
// })
// .catch(() => console.log('script does not exist'))














// const createScript = (path, resolve, reject) => {
//     const script = document.createElement('script')
//     script.src = path;

//     if(resolve) script.onload = resolve;
//     if(reject) script.onerror = reject;

//     document.body.append(script)
// };

// createScript('js/index.js', 
// () => test(),
// () => console.log('script does not exist'))

// async function func () {


//     const promise = new Promise ((resolve, reject) => {
//         setTimeout(() => resolve('done'), 1000)
//     })

//     const result = await promise;

//     console.log(result)

//     console.log('hello')
// }

// func()







// async function func () {

//     const promise = new Promise ((resolve, reject) => {
//         setTimeout(() => reject('error'), 1000)
//     })

//     try {
//         const result = await promise;

//         console.log(result)
//     } catch(e) {
//         console.log(e)
//     }

//     console.log('hello')
// }

// func()









//   (async () => {
//     const createScript = (path, resolve, reject) => {
//         return new Promise((resolve, reject) => {
//             const script = document.createElement('script')
//             script.src = path;
        
//             script.onload = resolve;
//             script.onerror = reject;
        
//             document.documentElement.append(script)
//         }
//         )
    
//     };

//   try{
//     const res = await Promise.race([createScript('js/index.js'), createScript('js/index.js')])
//     console.log(res)
//   }catch {
//     console.log('script does not exist')
//   }

// })()