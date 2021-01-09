// code manage korar kotha asley ekta term chole ase seta holo programming paradigm. er porey ase object oriented programming tarporeu amader kisu prolem thekey gelo sey jonnoy functional programming.

// Three main term of functional programming
// 1. Pure functional
// 2. First class functional
// 3. Higer order functional



// 01.Pure Function
// * It given the same result if given the same arguments
// * It does not couse any observable side effects

// It given the same result if given the same arguments
// function sqr(n) {
//     return n * n
// }
// console.log(sqr(3))
// console.log(sqr(4))

// It does not couse any observable side effects
// var n = 10
// function change() { //it is not pure function
//     n = 100
// }
// change()
// console.log(n)

// var point = {
//     x: 10,
//     y: 20
// }
// function change(point) {
//     point.x = 100
//     point.y = 200
// }
// change(point)
// console.log(point)




// 2. First class functional
// 1. A function can be stored in a variable
// function add(a, b) {
//     return a + b
// }
// var sum = add
// console.log(sum(4, 5))
// console.log(typeof sum)

// 2. A function can be stored in an arrey
// function add(a, b) {
//     return a + b
// }
// var sum = add
// var arr = []
// arr.push(sum)
// console.log(arr[0](5, 3))

// 3. A function can be stored in an object
// function add(a, b) {
//     return a + b
// }
// var obj = {
//     sum: add
// }
// console.log(obj.sum(3, 7))

// 4. We can create function as need
// setTimeout(function () {
//     console.log('I am creating a function')
// }, 1000)



// 3. Higer order functional
// function add(a, b) {
//     return a + b
// }
// // 5. we can pass function as an argument
// function manipulate(a, b, func) {
//     var c = a + b
//     var d = a - b

// // 6. we can return functions from another function
//     function multiply() {
//         var m = func(a, b)
//         return m * c * d
//     }
//     return multiply

//     // return function multiply() {
//     //     var m = func(a, b)
//     //     return m * c * d
//     // }

// }

// var result = manipulate(3, 4, add)
// console.log(result())



// 04.Closure First Look
// var b = 10
// function a() {
//     console.log(b)
//     var x = 20
//     return function () {
//         console.log(x)
//     }
// }
// var result = a()
// console.dir(result())



// 05. Callback Function
// // step1
// function sample(a, b) {
//     var c = a + b
//     var d = a - b
//     return s = c + d
// }
// console.log(sample(5, 4))

// step2
// function sample(a, b) {
//     var c = a + b
//     var d = a - b
//     return sum(c, d)
// }
// function sum(a, b) {
//     return a - b
// }
// console.log(sample(5, 4))

// step3
// function sample(a, b, cb) {
//     var c = a + b
//     var d = a - b
//     return cb(c, d)
// }
// function sum(a, b) {
//     return a - b
// }
// console.log(sample(5, 4, sum))

// step4
// function sample(a, b, cb) {
//     var c = a + b
//     var d = a - b
//     return cb(c, d)
// }

// var result = sample(5, 4, function (c, d) {
//     console.log(c, d)
//     return c -d
// })
// console.log(result)



// 06.ForEach Function
// step1
// var arr = [2,4,3,4,5]
// var sum = 0
// arr.forEach(function(value, index, arr) {
//     // console.log(value, index, arr)
//     sum+=value
// })
// console.log(sum)

// step2
// var arr = [2, 4, 3, 4, 5]
// function forEach(arr, cb) {
//     for (var i = 0; i < arr.length; i++) {
//         cb(arr[i], i, arr)
//     }
// }
// var sum = 0
// forEach(arr, function (value, index, arr) {
//     // console.log(value, index, arr)
//     sum += value
// })
// console.log(sum)

// forEach(arr, function (value, index, arr) {
//     console.log(arr[index] + 5)
// })


// 07.Map Function (map function return a new array)
// var arr = [2, 4, 3, 4, 5]
// step1
// arr.map(function (value, index, arr) {
//     console.log(value, index, arr)
// })

// step2
// var sqrArray = arr.map(function (value, index, arr) {
//     return value * value
// })
// console.log(arr)
// console.log(sqrArray)

// // step3
// var arr = [2, 4, 3, 4, 5]
// function myMap(arr) {
//     var newArray = []
//     for (var i = 0; i < arr.length; i++) {
//         var temp = arr[i] * arr[i]
//         newArray.push(temp)
//     }
//     return newArray
// }
// console.log(myMap(arr))
// console.log(arr)

// step4
// var arr = [2, 4, 3, 4, 5]
// function myMap(arr, cb) {
//     var newArray = []
//     for (var i = 0; i < arr.length; i++) {
//         var temp = cb(arr[i], i, arr)
//         newArray.push(temp)
//     }
//     return newArray
// }
// var qb = myMap(arr, function (value, index, arr) {
//     return value * value
// })
// console.log(arr)
// console.log(qb)



//08. Filter Function (filter function return a new array)
// step1
// var arr = [2, 4, 3, 4, 5, 6, 8, 1]
// var newFilter = arr.filter(function (value, index, arr) {
//     return value % 2 == 0
// })
// console.log(newFilter)

// step2
// var arr = [2, 4, 3, 4, 5, 6, 8, 1]
// function myFilter(arr) {
//     var newArray = []
//     for (var i = 0; i < arr.length; i++) {
//         if(arr[i] % 2 === 0) {
//             newArray.push(arr[i])
//         }
//     }
//     return newArray
// }
// console.log(myFilter(arr))


// step3
// var arr = [2, 4, 3, 4, 5, 6, 8, 1]
// function myFilter(arr, cb) {
//     var newArray = []
//     for (var i = 0; i < arr.length; i++) {
//         if (cb(arr[i], i, arr)) {
//             newArray.push(arr[i])
//         }
//     }
//     return newArray
// }
// var result = myFilter(arr, function (value, index, arr) {
//     return value % 2 === 0
// })
// console.log(result)



// 09. Reduce Function
// step1
// var arr = [2, 4, 3, 12, 5, 6, 8, 1]
// var sum = arr.reduce(function (prev, cur, index, arr) { 
//     console.log(prev, cur, index, arr)
//     // return prev + cur
// }, 10) //acumulator

// var max = arr.reduce(function(prev, cur, index, arr) {
//     return Math.max(prev, cur)
// }, 10)
// console.log(max)


// // step2
// var arr = [2, 4, 3, 12, 5, 6, 8, 1]
// function myReducer(arr, cb, acc) {
//     for (var i = 0; i < arr.length; i++) {
//         acc = cb(acc, arr[i], i, arr)
//     }
//     return acc
// }
// var sum = arr.reduce(function (prev, cur, index, arr) { 
//     return prev + cur
// }, 10)

// var max = arr.reduce(function(prev, cur, index, arr) {
//     return Math.max(prev, cur)
// }, 15)
// console.log(sum, max)