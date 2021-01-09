// There are three different patterns of for loop. 
// for loop, for in, for of loop

// 01. For Loop
// There are three different types of for loop. 
// 1. for loop 2. while loop. 3. do while loop.
// for (var i = 0; i <= 100; i ++) {
//     console.log(i + ' mh shuvo')
// }

// for (var i = 0; i <= 100; i ++) {
//     console.log(i)
//     if(i % 2 === 0) {
//         console.log(i)
//     }
// }

// var sum = 0;
// for (var i = 1; i <= 10; i++) {
//     // console.log(i)
//     sum = sum + i
//     console.log(i + ' ' + sum)
// }

// var sum = 0;
// for (var i = 1; i <= 10; i++) {
//     // console.log(i)
//     console.log(sum + ' + ' + i + ' = ' + (sum + i))
//     sum = sum + i
// }

// var sum = 0;
// for (var i = 1; i <= 10; i++) {
//     if (i % 2 == 0) {
//         console.log(sum + ' + ' + i + ' = ' + (sum + i))
//         console.log(sum)
//         sum = sum + i
//     }
// }



// 02. While Loop
// var i = 5
// while (i <= 10) {
//     console.log(i + ' mh shuvo')
//     i++
// }

// isRunning = true;
// while (isRunning) {
//     var rand = Math.floor(Math.random() * 10 + 1)
//     if (rand === 5) {
//         console.log('Winner winner chicken dinner')
//         isRunning = false
//     } else {
//         console.log('We have got ' + rand)
//     }
// }



// 03. Do While Loop
// isRunning = false
// do {
//     console.log('I am running')
// } while (isRunning)



// 04. Nested Loop
var n = 5
for (var i = 1; i <= n; i++) {
    var result = ''
    for (var j = 1; j <= i; j++) {
        result = result + j + ' '
    }
    console.log(result)
}

var n = 6
for (var i = 1; i <= n; i++) {
    var result = ''
    for (var j = 1; j <= n; j++) {
        result = result + ' *'
    }
    console.log(result)
}



// 05. Break Statement
// while (true) {
//     var rand = Math.floor(Math.random() * 10 + 1)
//     if (rand === 5) {
//         console.log('Winner winner chicken dinner')
//         break
//     } else {
//         console.log('We have got ' + rand)
//     }
// }

// for (var i = 1; i <= 10; i++) {
//     if (i > 5) {
//         break
//     } else {
//         console.log(i)
//     }
// }



// 06.Continue Statement 
// for (var i = 0; i <= 10; i++) {
//     if (i === 2 || i === 3 || i === 7) {
//         continue
//     } else {
//         console.log(i)
//     }
// }



// 07.Infinity For Loop 
// for (; ;) {
//     var rand = Math.floor(Math.random() * 100 + 1)
//     if (rand === 5) {
//         console.log('Winner winner chicken dinner')
//         break
//     } else {
//         console.log('We have got' + rand)
//     }
// }