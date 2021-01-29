// 01. Declare an Array
// array literal
// var arr = [1, 2, 3, 4, 5, 6, 7, 8]
// console.log(arr[3])
// arr[5] = 12
// console.log(arr)
// console.log(arr.length)

// // array constructor
// var arr2 = Array(1, 2, 3, 4, 5, 6, 7, 8)
// console.log(arr2)



// 02. Traverse an Array 
// var arr = [3, 9, 6, 5, 2]
// //  console.log(arr)

// for (var i = 0; i < arr.length; i++) {
//     console.log(arr[i])
//     arr[i] = arr[i] + 2
//     console.log(arr[i])
// }
// console.log(arr)

// var sum = 0
// for(var i = 0; i < arr.length; i++) {
//     var allArray = arr[i]
//     sum = sum + allArray
// }
// console.log(sum)

// var sum = 0
// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//         sum += arr[i]
//     }
// }
// console.log(sum)



// 03. Insert, Remove and Replace Elements in an Array
// var arr = [1, 2, 3, 4, 5, 6, 7, 8]
// arr[1] = 10
// console.log(arr)
// arr.push(10)
// arr.unshift(20)
// arr.pop()
// arr.shift()
// arr.splice(2, 0, 12)
// console.log(arr)



//04. Search Data from an Array
// var arr = [10, 22, 83, 42, 53, 61, 17, 68]
// var isFound = false

// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] === 10) {
//         isFound = true
//         console.log('Data found')
//     }
// }
// if (isFound === false) {
//     console.log('Data not found')
// }



// 05.Multidimensional Array
// var arr = [
//     [59, 93, 17, 22],
//     [34, 43, 72, 29],
//     [54, 34, 74, 72]
// ]
// // console.log(arr.length)
// // console.log(arr)
// for (var i = 0; i < arr.length; i++) {
//     console.log(arr[i])
//     for (var j = 0; j < arr[i].length; j++) {
//         console.log('Index ' + i + ' : ' + arr[i][j])
//     }
// }



// 06.Reverse Array Elements Completely
// var arr = [1, 2, 3, 4, 5]

// for (var i = 0; i < arr.length / 2; i++) {
//     // console.log(arr[i])
//     var temp = arr[i]
//     arr[i] = arr[arr.length - 1 - i]
//     // console.log(arr[i])
//     arr[arr.length - 1 - i] = temp
// }
// console.log(arr)

// console.log(arr.reverse())



// 07. Array Methods Provided
// array is a mutable object
// var arr = [1, 2, 3, 4, 5]
// var arr2 = [3, 5, 9, 1, 5]
// console.log(arr.join(', '))
// arr.fill(true)
// console.log(arr)
// var arr3 = arr.concat(arr2)
// console.log(arr3)
// console.log(Array.isArray(arr))

// var newArray = arr
// newArray[5] = 6
// console.log(newArray)
// console.log(arr)

// var newArray = Array.from(arr)
// newArray[5] = 6
// console.log(newArray)
// console.log(arr)




// * reverse array