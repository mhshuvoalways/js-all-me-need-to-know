// 01. Logic and Condition in programming
// if condition, else condition, else if condition, switch statement



// 02. If Conditions
// var a = 11
// var b = 3
// if (a > b) {
//     console.log('B is greater then A')
// }
// if (a < b) {
//     console.log('A is greater then B')
// }

// var n = 5
// if (n % 2 === 0) {
//     console.log(n + ' is even number')
// }
// if (n % 2 === 1) {
//     console.log(n + ' is odd number')
// }



//03. Else Condition
// var a = 11
// var b = 3
// if (a > b) {
//     console.log('B is greater then A')
// } else {
//     console.log('A is greater then B')
// }

// var n = 5
// if (n % 2 === 0) {
//     console.log(n + ' is even number')
// } else {
//     console.log(n + ' is odd number')
// }



// 04.Else If Condition 
// var a = 3
// var b = 3
// if (a > b) {
//     console.log('B is greater then A')
// } else if (a < b) {
//     console.log('A is greater then B')
// } else {
//     console.log(a + ' and ' + b + ' both are same')
// }

// var n = 0
// if (n === 0) {
//     console.log(n + ' is zero')
// } else if (n % 2 === 0) {
//     console.log(n + ' is even number')
// } else if (n % 2 === 1) {
//     console.log(n + ' is odd number')
// }



//05. Switch Statements 
// var date = new Date()
// var today = date.getDay()
// console.log(today)

// switch (today) {
//     case 0:
//         console.log('Today is Sunday')
//         break;
//     case 1:
//         console.log('Today is Monday')
//         break;
//     case 2:
//         console.log('Today is Tuesday')
//         break;
//     case 3:
//         console.log('Today is Wednesday')
//         break;
//     case 4:
//         console.log('Today is Thusday')
//         break;
//     case 5:
//         console.log('Today is Friday')
//         break;
//     case 6:
//         console.log('Today is Saturday')
//         break;
//     default: console.log('Not a valid number')
// }



// 06. Logical Operators
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



// 07.Ternary Operator
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



// 08. Shorthand by logical operator
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
var name = ''
var fullName = ''

var fullName = name || 'mh shuvo'
console.log(fullName)