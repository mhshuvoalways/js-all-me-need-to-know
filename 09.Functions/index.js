// 01.Define a Function
// function add() {
//     var x = 20
//     var y = 10
//     console.log(x - y)
// }



// 02.Invoke a Function
// function add() {
//     var x = 20
//     var y = 10
//     console.log(x - y)
// }
// // add()
// for(var i = 0; i < 10; i++) {
//     add()
// }



// 03.Arguments and Parameter of a Function
// function add(x, y) {
//     console.log(x - y)
// }
// add(20, 10)
// add(30, 10)


// var arr = [2, 4, 4]
// var arr1 = [9, 4, 2]
// var arr2 = [9, 4, 2]

// var sum = 0
// for(var i = 0; i < arr.length; i++) {
//     sum = sum + arr[i]
// }
// console.log(sum)

// var sum1 = 0
// for (var i = 0; i < arr1.length; i++) {
//     sum1 = sum1 + arr1[i]
// }
// console.log(sum1)

// function add(arr) {
//     var sum = 0
//     for (var i = 0; i < arr.length; i++) {
//         sum = sum + arr[i]
//     }
// console.log(sum)
// }

// add(arr)
// add(arr1)
// add(arr2)



// 04.Argument Object in Javascript Function
// when we do not know how many arguments will be passed to the function, we will use arguments.
// function test() {
//     console.log(arguments) // array like data structure
// }
// test(1, 2, 2)

// function test() {
//     for (var i = 0; i < arguments.length; i++) {
//         console.log(arguments[i]); //arguments is an object
//     }
// }
// test(1, 2, 2)

// function sumAnynumber() {
//     var sum = 0;
//     for (var i = 0; i < arguments.length; i++) {
//         sum += arguments[i]
//     }
//     console.log(sum);
// }
// sumAnynumber(1, 2, 3, 4, 5)
// sumAnynumber(1, 7, 4, 2, 1)



// 05.Return Anything from a Function
// function person(name, email) {
//     return {
//         name: name,
//         email: email
//     }
// }
// var p1 = person('mh shuvo', 'mhshuvoit@gmail.com')
// console.log(p1)

// function sumAnynumber() {
//     var sum = 0;
//     for (var i = 0; i < arguments.length; i++) {
//         sum += arguments[i]
//     }
//     return sum
// }
// var p1 = sumAnynumber(1, 2, 3, 4, 5)
// console.log(p1)




// 06. Function Expressions
// var addition = function(name, email) { also called anonimous function
//     return {
//         name: name,
//         email: email
//     }
// }
// // var another = addition
// console.log(addition('mh shuvo', 'mhs@gmail.com'))




// 07.Inner/ nested Functions 
// function something(greet, name) {
//     function getFirstName() {
//         if(name) {
//             console.log(name.split(' ')[0])
//             return name.split(' ')[0]
//         } else {
//             return ''
//         }
//     }
//     var message = greet + ' ' + getFirstName()
//     return message
// }
// var result = something('good morning', 'mhshuvoit')
// console.log(result)



// 08.Function Scoping
// function test(n) {
//     function a() {
//         return n % 3 === 0
//     }
//     function b() {
//         return n % 5 === 0
//     }
//     if (a() && b()) {
//         console.log(n + ' is divisible by 3 and 5')
//     } else {
//         console.log(n + ' is not divisible by 3 and 5')
//     }
// }
// test(15)