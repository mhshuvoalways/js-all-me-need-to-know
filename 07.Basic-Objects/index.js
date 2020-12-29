// 01.Object Literal vs Constructor
// Literal 
// var obj = {}
// obj.a = 100
// console.log(obj)

// var obj2 = {
//     a: 100
// }
// obj2.b = 200
// console.log(obj2)

// Constructor
// var obj3 = Object()
// obj3.a = 100

// var obj4 = new Object()
// obj4.a = 100
// console.log(obj4)



// 02.Accessing Object Properties
// var obj2 = {
//     a: 100,
//     b: 200,
//     c: 300
// }
// // dot notation
// console.log(obj2.a)

// when we want to dynamically
// // array notation
// console.log(obj2['b'])

// var show = 'a'
// console.log(obj2[show])



// 03.Setting Object Properties
// // dot notation
// var obj1 = {
//     a: 100,
//     b: 200,
//     c: 300
// }

// obj1.d = 400
// console.log(obj1)

//array notation
// obj1['d'] = 400
// console.log(obj1)
// var prop = 'd'
// obj1[prop] = 400
// console.log(obj1)



// 04.Remove Object Properties 
// var obj1 = {
//     a: 100,
//     b: 200,
//     c: 300
// }
// delete obj1['a']
// console.log(obj1)



// 05.Compare Two Objects 
// var obj1 = {
//     a: 100,
//     b: 200,
//     c: 300
// }
// var obj2 = {
//     a: 100,
//     b: 200,
//     c: 300
// }

// if (obj1.a === obj2.a && obj1.b === obj2.b && obj1.c === obj2.c) {
//     console.log(true)
// } else {
//     console.log(false)
// }
// console.log(JSON.stringify(obj1) === JSON.stringify(obj2))



// 06. Iterate Object Properties
// var obj1 = {
//     a: 100,
//     b: 200,
//     c: 300
// }
// // operator
// console.log('a' in obj1)
// for(var i in obj1) {
//     console.log(i)
//     console.log(obj1[i])
// }




// Object Methods Provided
// var obj1 = {
//     a: 100,
//     b: 200,
//     c: 300
// }
// console.log(Object.keys(obj1))
// console.log(Object.values(obj1))
// console.log(Object.entries(obj1))

// var newObj = Object.assign({}, obj1)
// newObj.c= 500
// console.log(newObj)