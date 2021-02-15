// 170 - 01. Errors in Javascript: How to Handle
// error 3 ta main jinis hosse message, fileName, lineNumber
// let i = 4
// if (i < 10) {
//     // throw new Error('I is smaller than 10')
//     throw new RangeError('I is smaller than 10')
// }

// console.log('missing brackets' // syntax error

// we can get all error documents in mozilla firefox





// 171 -02. Error Handling with If Else Condition Check [Logical Errors]
// function checkToInteger(v) {
//     // return Number.parseInt(v)
//     let result = Number.parseInt(v)
//     // if (result === NaN) { // NaN === NaN always false return but undefined === undefined always true return.
//     if (!result) {
//         return 'Please provide a value which is able to convert to an integer'
//     }
//     return result
// }
// let res = checkToInteger('   dsdsdsds  ')
// console.log(res)





// 172-03. Error Handling with Try Catch Block [Runtime Errors]
// function makeWord(texts) {
//     // let text = texts.trim();
//     // let words = text.split('');
//     // return words
//     try {
//         let text = texts.trim();
//         let words = text.split('');
//         return words
//     } catch(e) {
//         // console.log(e)
//         return 'Please provide a valid text'
//     }
// }
// let res = makeWord(55454)
// console.log(res)





// 173- 04. How to Throw an Error in Javascript

// try {
//     console.log('I am line 1')
//     throw new Error('I am throw new Error') // this is not a specific error. same for all.
//     console.log('I am line 1')
//     console.log('I am line 1')
//     console.log('I am line 1')
// } catch(e) {
//     console.log(e.message)
// }



// 174-05. Optional Finally Block in Javascript
// try {
//     console.log('I am line 1')
//     throw new Error('I am throw new Error')
//     console.log('I am line 1')
//     console.log('I am line 1')
//     console.log('I am line 1')
// } catch(e) {
//     console.log(e.message)
// } finally {
//     console.log('I am finally block')
// }





// 175-06. Optional Catch Binding in ESNext
// try {
//     console.log('I am line 1')
//     throw new Error('I am throw new Error')
//     console.log('I am line 1')
//     console.log('I am line 1')
//     console.log('I am line 1')
// } catch { // jate paramiter na dia lage @babel/plugin-proposal-optional-catch-binding
//     console.log('e.message')
// } finally {
//     console.log('I am finally block')
// }





// 176-07. How to Create a Custom Error in ES6
// database connection, api call a problem api error, json conversion error in this place we can use custome error
// class CustomError extends Error {
//     constructor(message) {
//         super(message)

//         if (Error.captureStackTrace) {
//             Error.captureStackTrace(this, CustomError)
//         }
//     }
// }

// try {
//     console.log('I am line 1')
//     throw new CustomError('I am throw new Error')
// } catch (e) {
//     // console.dir(e)
//     console.log(e.message)
// }