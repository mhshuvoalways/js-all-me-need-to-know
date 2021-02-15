// 177-01. Understanding Asynchronous Programming in Javascript
// JS Asynchronous
// synchronous - only one thing execute at a time
// asynchronous - multiple thing execute at a time and don't' have finish executing the current thing in order to move on to the next one.




// 178-02. Asynchronous Programming is Action (Simulate Using Java & Javascript)
// console.log('Line 1') //synchronous

// setTimeout(()=> {
//     console.log('Line 2')
// }, 3000)

// setTimeout(()=> { 
//     console.log('Line 3') 
// }, 0)

// console.log('Line 4') //synchronous

// setTimeout(()=> {
//     console.log('Line 5')
// }, 1000)





// 179-03. How to Store Result Returned from Asynchronous Function
// we can not store return value in a variable because it is asynchronous
// // step 1
// function sayMyName(name) {
//     let result
//     setTimeout(()=> {
//         result = name
//         console.log('I have done')
//     }, 2000)
//     return result
// }
// let res = sayMyName('MH Shuvo')
// console.log(res)

// step 2
// function sayMyName(name) {
//     setTimeout(() => {
//         console.log(name)
//     }, 2000)
// }
// sayMyName('MH Shuvo')





//  180-04. Why does Javascript Act Like Asynchronous
// js is a single thretend language that means process one task at a time.
// js behind the scene 2 dhoroner kaz kore thak var and func call handler er jonno
// js use two data structure to handle variables and function calls. 1. heap 2. stack call
// Heap to manage var and stack to manage function call
// js engine jevabe Asynchronous task handle kore jar moddhe ase: 1.call stack 2.web api 3.event loop 4.callback/task queue. This is also data structure. 
//js is a single thretend language but eta multi task er kaz handle kore Asynchronous sahajje





// 181-05. How does Javascript Handle Asynchronous Programming
// these are not js features but provided by js engine, browser these are called web api
// if synchronous : call stack -> console
// if asynchronous : call stack-> web api-> callback -> event loop -> call stack -> console





// 182-06. NodeJS vs Browser: Does Javascript Act Same [V8 Engine]
// js two platforms 1. Node and 2.Browser
// setTimeout, file system, databse, web, ajax, rest api esob nia jkhn kaz korbo tkhn amra Asynchronous pabo and egula holo web api but dom sudhu browser

// v8 do: 
// 01. v8 which is reveive code -> compile-> execute
// 02. handeling call stack 
// 03. heap memory to alocate memory for variable
// 04. collect garbage
// 05. provide data type, operator, object and function
// v8 can not do: 
// 06. but don't support dom
// 07. multiple v8 engine never share variables and context





// 183-07. How to Handle Asynchronous Operations in Javascript
// there three way to hndle Asynchronous. 1. callback 2. promise 3. async func/ async a wait
// both 3 aynce version. handle collection on async operation . 1. async iterator 2. for await of loop 3. aynce generator





// 184-08. What is Ajax (Asynchronous Javascript and XML(JSON))
// ajax privided by web api. ajax get just data not html or css




// 185-09. How to Handle XMLHttpRequest(ajax) Using Callback
// it is working just one request
// const xhr = new XMLHttpRequest() // provided by web api because it is ajax
// xhr.open('GET', 'https://jsonplaceholder.typicode.com/users')

// xhr.onreadystatechange = function (e) {
//     if (xhr.readyState === 4) {
//         if (xhr.status === 200) {
//             let users = JSON.parse(xhr.responseText);
//             // console.log(xhr.response)
//             console.log(users)
//         } else {
//             console.log(xhr.status)
//         }
//     }
// }
// xhr.send()

// callback
// function getRequest(url, callback) {
//     const xhr = new XMLHttpRequest();
//     xhr.open('GET', url)

//     xhr.onreadystatechange = function (e) {
//         if (xhr.readyState === 4) {
//             if (xhr.status === 200) {
//                 let response = JSON.parse(xhr.responseText);
//                 return callback(null, response)
//             } else {
//                 return callback(xhr.status, null)
//             }
//         }
//     }

//     xhr.send()
// }

// let result = getRequest('https://jsonplaceholder.typicode.com/users', (err, res) => {
//     if (err) console.log(err)
//     if (res) console.log(res)
// })
// console.log(result)




// 186-10. Callback Not Always Mean Asynchronous
// there are two task of callback. normal callback and asyncronous task
// step1
// let arr = [5, 2, 7, 1]
// // // let add = arr.map(v => v + v) // no relation with asyncronous
// // // console.log(add)

// // // step2
// function asyncMap (arr, callback) {
//     return arr.map(v => {
//         // setTimeout(callback(v), 0)
//         // setTimeout(callback.bind(null, v), 0)
//         setTimeout(() => callback(v), 0)
//     })
// }

// let res = asyncMap(arr, function (v) {
//     console.log(v)
//     return v
// })
// console.log(res)




// 187-11. Callback is Not Always a Good Solution
// function getRequest(url, callback) {
//     const xhr = new XMLHttpRequest();
//     xhr.open('GET', url)

//     xhr.onreadystatechange = function (e) {
//         if (xhr.readyState === 4) {
//             if (xhr.status === 200) {
//                 let response = JSON.parse(xhr.responseText);
//                 return callback(null, response)
//             } else {
//                 return callback(xhr.status, null)
//             }
//         }
//     }
//     xhr.send()
// }

// let BASE_URL = 'https://jsonplaceholder.typicode.com'
// getRequest(`${BASE_URL}/posts/1`, function (err, res) {
//     if (err) {
//         throw new Error('Error Occurred')
//     }
//     let { userId } = res

//     getRequest(`${BASE_URL}/users/${userId}`, function (err, res) {
//         if (err) {
//             throw new Error('Error Occurred')
//         }
//         getRequest(`${BASE_URL}/comments/${res.id}`, function (err, res) {
//             if (err) {
//                 throw new Error('Error Occurred')
//             }
//             console.log(res)
//         })
//     })
// })




// 188-12. What is Promise, Take a Look at It(es6 or 2015 version)
// let p1 = new Promise((resolve, reject) => {
//     resolve('One')
//     // setTimeout(resolve, 3000, 'One')
// })

// let p2 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 2000, 'Two')
// })

// console.log(p1)
// console.log(p2)

// p1.then(v => {
//     console.log(v)
// }).catch(err => {
//     console.log(err)
// })

// p2.then((v) => {
//     console.log(v)
// }).catch((err) => {
//     console.log(err)
// })


// function getIphone(isPassed) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (isPassed) {
//                 resolve('I have passed and I have got an Iphone') // by resolve we can pass and get by .then
//             } else {
//                 reject(new Error('I have filed'))
//             }
//         }, 2000)
//     })
// }
// let result = getIphone(true)
// console.log(result)
// getIphone(false)
//     .then(function (res) {
//         console.log(res)
//     })
//     .catch(function (err) {
//         console.log(err.message)
//     })




// 189-13. Implement Your Own Version of Fetch API
// fetch api return a promise
// let BASE_URL = 'https://jsonplaceholder.typicode.com'
// let res = fetch(`${BASE_URL}/users/1`)
// console.log(res)

// fetch(`${BASE_URL}/users/1`)
//     .then(res => {
//         return res.json() // return promise
//         // console.log(res.json())
//         // .then()
//         // .catch()
//     })
//     .then(data => {
//         console.log(data)
//         return Promise.resolve('Something')
//     })
//     .then(str => {
//         console.log(str)
//         return Promise.resolve('Another promise')
//     })
//     .then(another => {
//         console.log(another)
//     })
//     .catch(err => {
//         console.log(err)
//     })

// getRequest(function () {
//     getRequest(function () {
//         getRequest(function () {
//             getRequest(function () {
//             })
//         })
//     })
// })

// function getRequest(url) {
//     return new Promise(function (resolve, reject) {
//         let xhr = new XMLHttpRequest();
//         xhr.open('GET', url)

// xhr.onreadystatechange = function() {
// if (xhr.readyState === 4) {
//     if (xhr.status === 200) {
//         resolve(xhr.responseText)
//         } else {
//             reject(new Error('Error Occurred'))
//         }
//     }
// }
// xhr.send();
//     })
// }

// getRequest(`${BASE_URL}/users/1`)
//     .then(data => {
//         console.log(data)
//     })
//     .catch(err => {
//         console.log(err)
//     })





// 190-14. Functionalities Came with Promise
// const delay = s => new Promise(resolve => setTimeout(resolve, s))
// const delay = function (s) {
//     return new Promise(resolve => {
//         return setTimeout(resolve, s*1000)
//     })
// }

// delay(5).then(() => console.log('Five second delay'))
// delay(2).then(() => console.log('Two second delay'))
// delay(1).then(() => console.log('One second delay'))
// delay(3).then(() => console.log('Three second delay'))
// delay(2).then(() => console.log('Two second delay'))


// for instantly resolve making promise
// let p1 = Promise.resolve('Test')
// p1.then(v => console.log(v))
// for instantly reject
// let p2 = Promise.resolve('Reject')
// p2.catch(v => console.log(v))



// let p1 = Promise.resolve('One')
// let p2 = Promise.resolve('Two')
// let p3 = Promise.resolve('Three')
// let pormiseArr = [p1, p2, p3]
// Promise.all(pormiseArr)
//     .then((arr) => {
//         console.log(arr)
//     })

// let p1 = new Promise((resolve) => {
//     setTimeout(resolve, 5000, 'One')
// })
// let p2 = new Promise((resolve) => {
//     setTimeout(resolve, 3000, 'Two')
// })
// let p3 = new Promise((resolve) => {
//     setTimeout(resolve, 4000, 'Three')
// })

// let pormiseArr = [p1, p2, p3]
// Promise.all(pormiseArr)
//     .then((arr) => console.log(arr))

// Promise.race(pormiseArr)
//     .then((v) => console.log(v))





// 191-15. Async Function with Await Keyword
// don't need to work with new Promise, Promise, then, catch 
// // step1
// function myPromise() {
//     return Promise.resolve('Something')
// }
// console.log(myPromise())

// step2
// async function myPromise() {
//     return 'Test'
// }
// console.log(myPromise())

// // step3
// let p1 = new Promise(resolve => {
//     setTimeout(resolve, 4000, 'Test')
// })
// async function myAsyncFunc() {
//     let v = await p1
//     console.log('Waiting')
//     console.log(v)
// }
// myAsyncFunc()

// step4
// async function fetchData() {
//    try{
//     let res = await fetch('https://jsonplaceholder.typicode.com/users')
//     let data = await res.json() // for resolving we have to provide await keyword
//     console.log(data)
//    } catch (e){
//        console.log(e)
//    }
// }
// fetchData()


// async function promiseAll() {
//     let p1 = new Promise((resolve) => {
//         setTimeout(resolve, 5000, 'One')
//     })
//     let p2 = new Promise((resolve) => {
//         setTimeout(resolve, 3000, 'Two')
//     })
//     let p3 = new Promise((resolve) => {
//         setTimeout(resolve, 4000, 'Three')
//     })

//     let pormiseArr = [p1, p2, p3]
//     let result = await Promise.all(pormiseArr)
//     console.log(result)
// }
// promiseAll()




// 192-16. Async Iterator in Action
// // So much time we have to handle collection of promise or collection of asyncronous task. In this way we we can convert syncronous to asyncronous.
// let asyncIterable = { // async iterable object
//     [Symbol.asyncIterator]: function () {
//         let i = 0
//         return {
//             next: () => {
//                 if (i < 3) {
//                     return Promise.resolve({
//                         value: i++,
//                         done: false
//                     })
//                 } else {
//                     return Promise.resolve({
//                         done: true
//                     })
//                 }
//             }
//         }
//     }
// };
// let it = asyncIterable[Symbol.asyncIterator](); // must provide a semicolon bcz of efi
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// it.next().then(done => {
//     console.log(done)
// })
// it.next().then(done => {
//     console.log(done)
// })
// it.next().then(done => {
//     console.log(done)
// })
// it.next().then(done => {
//     console.log(done)
// })

// (async function test() {
//     console.log(await it.next())
//     console.log(await it.next())
//     console.log(await it.next())
//     console.log(await it.next())
// })()




// 193-17. Async Iterator and For Await Of Loop
// (async function () {
//     for await (let v of asyncIterable) { // every promise will be resolve and store in v
//         console.log(v)
//     }
// })()




// 194-18. Create Async Iterator Using Async Generators
// function* myAsyncGenerator() {
//     let i = 1

//     while (true) {
//         if (i > 3)
//             return
//         yield Promise.resolve(i++)
//     }
// };

// let it = myAsyncGenerator()
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())

// (async function () {
//     for await (let v of myAsyncGenerator()) {
//         console.log(v)
//     }
// })()