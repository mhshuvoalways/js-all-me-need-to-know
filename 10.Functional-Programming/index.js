// code manage korar kotha asley ekta term chole ase seta holo programming paradigm. er porey ase object oriented programming tarporeu amader kisu problem thekey gelo sey jonnoy functional programming.

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
// console.log(arr)
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

// var result = manipulate(4, 2, add)
// console.log(result())



// 04.Closure First Look
// var b = 10
// function a() {
//     console.log(b)
//     var b = 20
//     return function () {
//         console.log(b)
//     }
// }
// a()



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
// arr.forEach(function(value, index, arr) {
//     console.log(value, index, arr)
// })

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
// var arr = [9, 4, 3, 4, 5]
// // step1
// arr.map(function (value, index, arr) {
//     console.log(value, index, arr)
// })

// step2
// var sqrArray = arr.map(function (value, index, arr) {
//     return value * value
// })
// console.log(arr)
// console.log(sqrArray)


// step3
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
// var arr = [1, 2, 3,4, 5]
// var sum = arr.reduce(function (prev, cur, index, arr) { 
//     // console.log(prev)
//     return prev + cur
// }, 10) //acumulator
// console.log(sum)

// var max = arr.reduce(function(prev, cur, index, arr) {
//     return Math.max(prev, cur)
// }, 10)
// console.log(max)


// // step2
// var arr = [1, 2, 3, 4, 5]
// function myReducer(arr, cb, acc) {
//     for (var i = 0; i < arr.length; i++) {
//         acc = cb(acc, arr[i], i, arr)
//     }
//     return acc
// }

// var sum = myReducer(arr, function (prev, cur, index, arr) {
//     return prev + cur
// }, 10)

// var max = myReducer(arr, function (prev, cur, index, arr) {
//     return Math.max(prev, cur)
// }, 15)
// console.log(sum, max)




// 10.Find and FindIndex 
// step1
// Find
// var arr = [2, 4, 3, 12, 5, 6, 8, 1]
// var result = arr.find(function (value, index, arr) {
//     return value === 12
// })
// console.log(result)

// // FindIndex
// var result = arr.findIndex(function (value, index, arr) {
//     return value === 4
// })
// console.log(result)


// step2
// var arr = [2, 4, 3, 12, 5, 6, 8, 1]
// function myFind(arr, cb) {
//     for (var i = 0; i < arr.length; i++) {
//         if (cb(arr[i], i, arr)) {
//             return arr[i]; // find
//             // return i; //findIndex
//         }
//     }
// }
// var result = myFind(arr, function (value, index, arr) {
//     console.log(value, index, arr)
//     return value === 2
// })
// console.log(result)




//11. Sort, Some and Every Function Uses
// var arr = [2, 4, -3, 12, 5, 6, -8, -1]
// var person = [
//     { name: 'A', age: 20 },
//     { name: 'C', age: 15 },
//     { name: 'B', age: 25 },
// ]
// arr.sort()
// person.sort()
// arr.sort(function (a, b) {
//     if (a > b) {
//         return 1
//     } else if (a < b) {
//         return -1
//     } else {
//         return 0
//     }
// })
// console.log(arr)

// person.sort(function (a, b) {
//     if (a.name > b.name) {
//         return 1
//     } else if (a.name < b.name) {
//         return -1
//     } else {
//         return 0
//     }
// })

// console.log(person)


// // every
// var arr = [2, 4, 12, 5, 6, -8]
// var result = arr.every(function (value) {
//     console.log(value)
//     // return value % 2 === 0
// })
// console.log(result)

// var result = arr.every(function (value) {
//     return value > 0
// })
// console.log(result)

// // some
// var result = arr.some(function (value) {
//     return value % 2 === 0
// })
// console.log(result)

// var result = arr.some(function (value) {
//     return value > 0
// })
// console.log(result)



// 12.Return a Function from Another Function
// function base(b) {
//     return function (n) {
//         var result = 1
//         for (var i = 0; i < b; i++) {
//             result *= n
//         }
//         return result
//     }
// }
// console.log(base(5)(2))
// console.log(base(4)(3))




// 13.Recursive Function (This is a expensive function. Time and memory complexity ase)
// function recursive(n) {
//     if (n === 0) {
//         return 0
//     }
//     console.log('I am calling')
//     recursive(n - 1)
// }
// recursive(10)

// function sum(n) {
//     if (n === 1) {
//         return 1
//     }
//     return n + sum(n - 1)
// }
// console.log(sum(5))

// function fact(n) {
//     if (n === 1) {
//         return 1
//     }
//     return n * fact(n - 1)
// }
// console.log(fact(5))

// var arr = [1, 2, 3, 4, 5]
// function sumofArray(arr, lastIndex) {
//     if(lastIndex < 0) {
//         return 0
//     }
//     return arr[lastIndex] + sumofArray(arr, lastIndex - 1)
// }
// var result = sumofArray(arr, arr.length - 1)
// console.log(result)





//14. Currying 
// function add(a, b, c) {
//     return a + b + c
// }
// add(34, 36, 35)

// function add(a) {
//     return function (b) {
//         return function (c) {
//             return a + b + c
//         }
//     }
// }
// console.log(add(4)(3)(5))




// 15.Function Composition
// 1st function er input akare 2nd function er output
// function print(input) {
//     console.log(input)
// }

// function multiply(n) {
//     return n * 5
// }

// function add(a, b) {
//     return a + b
// }

// print(multiply(add(3, 5)))






// 1.recursive