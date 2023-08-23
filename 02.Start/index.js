// 01. Hello World and code structure
// console.log('Hello world')
// console.log(75)
// console.log('75.75')
// console.log('This is logo for Sakib al Hasan' + 75) // If we add string and number then it will be concurrent in string.
// console.log(10 + 9)
// console.log('9' + 9)




// 02. variables in js
// var name = 'MH Shuvo'
// var age = '26'
// var age = 25 // This age is working because it is bellow

// console.log('My name is ' + name)
// console.log('I am ' + age + ' old')

// console.log('This is ' + name)
// console.log('I am ' + age + ' old')




// 03.reserved-words-and-naming-convension

// we have to maintain js reserved words and naming convensing

// js reserved
// var else = 'mh shuvo'

// naming conversing
// var accountNumberID = 3434



// 04. Data types in js

// primitive data type
// It is defined by js
// Number
// String
// Boolean
// undefined
// null

// object data type
// User defined data type
// Array
// Object
// Function



// 05. Number
// js is a case sensitive language. var and VAR is not a same
// floating number(65.34) 64 bit and 54 bit integer(23)

// Number literal
// var n = 2433
// var f = 34.434
// console.log(n, f)

// // Number constructor
// var n = Number('43')
// console.log(n)

// var n = 24
// console.log(Number.parseFloat(n)) // ans is 24.50
// var n = 24.33
// console.log(Number.parseInt(n)) 

// console.log(Number.MAX_VALUE)
// console.log(Number.MIN_VALUE)



// 06. String
// String literal
// var str1 = 'This is String'
// console.log(str1)

// // String constructor
// var str2 = String(32)
// console.log(str2)

// var str3 = 2323
// console.log(String(str3))



// 07. Boolean
// Boolean literal
// var b1 = true
// var b2 = false

// // Boolean constructor
// var b3 = Boolean(true)
// var b4 = Boolean(false)
// console.log(b1, b2, b3, b4)



// 08. Null and undefined
// var nul = null // null is special type used as an abstract of an object
// var un = undefined
// var xyz = 'hi'
// console.log(xyz)
// console.log(nul, un)



// 09. Type Conversion with Truthy Falsy Value
// Type Conversion or change data type
// var str1 = '2323.323'
// console.log(Number(str1))
// console.log(parseInt(str1))
// console.log(Number.parseInt(str1))

// var str2 = 3232
// console.log(String(str2))
// console.log(str2.toString())

// console.log(Infinity)
// console.log(Number(Infinity))
// console.log(Infinity.toString())

// Truthy Falsy Value is working only for boolean
// console.log(Boolean(-Infinity))

// Falsy value
// 0, null, undefined, NaN
// console.log(Boolean())
// console.log(Boolean(''))
// console.log(Boolean(0))
// console.log(Boolean(null))
// console.log(Boolean(undefined))

// console.log(true)
// var x = false
// console.log(x.toString())

// constructor -> String, Number, Boolean, Object



// 10. Octal and Hexadecimal Number
// var hex = 0xff
// console.log(hex)
// var oct = 0434
// console.log(oct)



// 12. Math Functions Provided by Javascript
// console.log(Math.E)
// console.log(Math.PI)
// var n = '5.6200'
// console.log(n)
// console.log(Math.abs(n))
// console.log(Math.floor(n)) // floor and parseInt is working as same
// console.log(Math.ceil(n))
// console.log(Math.round(n))
// console.log(Math.min(32, 34, 56, 12))
// console.log(Math.max(32, 34, 56, 12))
// console.log(Math.pow(2, 3))
// console.log(Math.sqrt(64))
// console.log(Math.random())
// console.log(Math.round(Math.random() * 50 + 1))




// 13. Date Functions
// var date = new Date()
// console.log(date)
// console.log(date.toDateString())
// console.log(date.toTimeString())
// console.log(date.toLocaleString())
// console.log(date.getFullYear())
// console.log(date.getMonth())
// console.log(date.getDate())
// console.log(date.getHours())
// console.log(date.getMinutes())
// console.log(date.getSeconds())