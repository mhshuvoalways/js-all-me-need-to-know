// 1. All Operators 
// Arithmetic operator
// + - * / % ++ -- 

// modulus operator/ remainder operator
// var a = 11
// var b = 3
// console.log(a % b) 

// pre incremental, post incremental, pre decremental, post decremental
// console.log(++a)
// console.log(a)
// console.log(a++) // a = a + 1
// console.log(a)
// // same behaviour of decremental

// Assignment operators
// a += b // a = a + b
// console.log(a)

// a -=b
// console.log(a)

// a *=b
// console.log(a)

// a /=b
// console.log(a)


// Comparison operators
// var a = 11
// var b = 3
// console.log(a == b)
// console.log(a != b)
// console.log(a > b)
// console.log(a < b)
// console.log(a <= b)
// console.log(a >= b)

// var a = 11
// var b = '11'
// console.log(a == b)
// console.log(a === b) // check type also


// Logical operators
// &&, ||, !


// Bitwise Operators (It is return bianry value)
// &, |, ~, ^, <<, >>
// Bitwise AND
// console.log(0 & 0)
// console.log(0 & 1)
// console.log(1 & 0)
// console.log(1 & 1)

// // Bitwise OR
// console.log(0 | 0)
// console.log(0 | 1)
// console.log(1 | 0)
// console.log(1 | 1)

// // Bitwise XOR
// console.log(0 ^ 0)
// console.log(0 ^ 1)
// console.log(1 ^ 0)
// console.log(1 ^ 1)



// 02. Logical Operators
// A && B
// true && true = true;
// true && false = false;
// false && true = false;
// false && false = false;

// A || B
// true || true = true;
// true || false = true;
// false || true = true;
// false || false = false;

// var a = 20
// var b = 12
// var c = 11
// var d = 15
// if (a > b && c > d) {
//     console.log('A is greater then B and C is greater than D')
// } else {
//     console.log('At least one condition is false')
// }

// if (a > b || c > d) {
//     console.log('A is greater then B and C is greater than D')
// } else {
//     console.log('At least one condition is false')
// }

// var check = !(a > b)
// console.log(check)



// 03. Shorthand by logical operator
// normal
// var name = ''
// var fullName = ''

// if (name.length === 0) {
//     fullName = 'mh shuvo'
// } else {
//     fullName = name
// }
// console.log(fullName)

// Shorthand
// var name = ''
// var fullName = ''

// var fullName = name || 'mh shuvo'
// console.log(fullName)




// 04.Ternary Operator
// normal
// var a = 10
// var result = ''
// if (a % 2 === 0) {
//     result = 'Even'
// } else {
//     result = 'Odd'
// }
// console.log(result)

// Ternary
// var result = a % 2 === 1 ? 'odd' : 'even'
// console.log(result)