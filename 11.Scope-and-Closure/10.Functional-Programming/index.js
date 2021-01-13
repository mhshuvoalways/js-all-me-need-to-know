// 01.Javascript Engine Works
// code porbe, bujhbe and machine code a translate korbe
// google crome 'v8', Mozila FF 'Spider monkey', Microsoft 'chakra', appler er safari holo 'javascript core'
// Sourse code -> Parser -> Abstract window tree(Data stucture) -> Machine code -> Execution




// 02.Compiled vs Interpreted
// Compiled 
// * ekta file create hoy puro code er jonno and run hoy
// * Time kom lage excusion hote
// * debuging a problem

// Interpreted
// * jeta call hobe setay run hoa jabe
// * Time besi lage excusion hote
// * debuging sohoz

// js type language na

// google crome er boss ra ntoun engine make korlo jar name holo "JIT = just in time". jar moddhe Compiled interpreted 2tar mix e ase




// 03. What is Execution Context (LIFO)
// * Context ekta container moto. Real world a ey context ta ekta object
// * jkhn e func toyri hoy tkhn e new Execution context ba block toyri hoy

// function a () {
//     b()
//     console.log('I am function A')
// }
// function b () {
//     d()
//     console.log('I am function B')
// }
// function c () {
//     console.log('I am function C')
// }
// function d () {
//     c()
//     console.log('I am function D')
// }

// var x = 5
// a()
// console.log('I am global')

// excusion of c cotext   1.remove from context stack (lifo)
// excusion of d cotext   2.remove from context stack
// excusion of b cotext     3.remove from context stack
// excusion of a cotext     4.remove from context stack
// excusion of global cotext    5.remove from context stack




// 04. Creation and Execution of a Execution Context
// creational phase (var declare, scope chain maintain, func call hobe and sathe er ekta reference rakhbe exicutional phase a)
// exicutional phase  (j kono logical code, exicusional code excute hobe ey exicutional phase a)





// 05. How does Variable Object Works
// var a = 10
// var b
// console.log(a);
// console.log(b);
// var b = 2
// console.log(c);
// var c = 30

// // creational phase
// a = undeifned
// b = undefined
// c = undefined

// // exicutional phase
// a = 10
// b = 20



// 06. Execution Context and Function
// abc() //creational phase
// function abc() {
//     console.log('I am calling')  //executional phase
// }
// abc() //creational phase



// 090. What is Hoisting Actually 
// *kothay ekta var, func declare hosse ba kothay ekta value assign hosse eta Hoisting. Hoisting er mul goal order maintain kora
// 05, 06 jeta korlam muloto etay hoisting

// var a = 100
// // newPrint(a)
// print(20)
// var newPrint = print
// newPrint(45)
// function print(a) {
//     console.log(a)
// }
// print(a)

// // creational phase 
// a  = undefined 
// newPrint = undefined 
// print = ref

// // excutional phase
// a = 100
// newPrint = ref





// 10. Function Declaration vs Expression: What is The Difference
// abc()
// function abc() {
//     console.log('I am abc func')
// }

// // newabc()
// var newabc = function(){
//     console.log('I am newAbc func')
// }
// newabc()

// // creational phase 
// // abc = ref
// // newabc = undefined

// // excutional phase




// 11. Scope: A Deep Look
// {
//     var x = 10
//     function a() {
//         // var x = 10 // jodi eta na thak tkhn bayre jabe
//         console.log(x)
//     }
//     a()
// }



// 11. What is Nested Scope
// var x = 10
// function a() {
//     var x = 20 // jodi eta na thak tkhn bayre jabe
//     console.log(x)
//     function nested() {
//         // var y = 20
//         console.log(x)
//     }
//     // console.log(y)
//     nested()
// }
// a()



// 12. What is Lexical Scope in Javascript
// soto soto akare vag hoa compiler er kase jasse etay holo lexical scope. k kotha thke access nite parbe etay lexical scope




// 13. Scope Chain
// Kon kon func er moddhe kon kon var er access ase etay holo scope chain
// var a = 11
// function A() {
//     var b = 12
//     function B() {
//         var c = 23
//         console.log(c)
//     }
//     function C() {
//         var d = 56
//         console.log(d)
//         D(d)
//     }
//     console.log(b)
//     // D(b)
//     B()
//     C()
// }
// A()
// function D(n) {
//     // return n + a
//     console.log(n)
// }

// ( A )-> a, b, B(), C(), D() // D func bayre holeu amra issa korle A func er moddhe thke call korte pari
// ( B )-> a, b, c, B(), C(), D()
// ( C )-> a, b, d, B(), C(), D()
// ( D )-> a, n, A()




// 14. Closure: A Deep Look
// * closuer is when a function is able to  remember and access its lexical scope even when that function exicuting outside its lexical scope

// * closure ekta system jar maddhome amra ekta data k store kore rakhte pari and onno ekta func er vitore bebohirto ekta data jeta bayre theke asche

// able to remember and access its lexical scope
// function test() {
//     var msz = 'I am learning lexical scope and closure'
//     function sayMsz() {
//         console.log(msz)
//     }
//     sayMsz()
// }
// test()

// function exicuting outside its lexical scope
// function test() {
//     var msz = 'I am learning lexical scope and closure'
//     return function () {
//         console.log(msz)
//     }
// }
// var sayMsz = test()
// sayMsz()




// 15. Closure and Loops Tied Together
// // step 1. eta ekta prblm create kore tay step 2 nia kaz korte hobe
// for (var i = 1; i <= 5; i++) {
//     setTimeout(function () {
//         console.log(i)
//     }, 1000*1)
// }

// // step 2 ey prblm ta slv korar jonno ase ifi
// for (var i = 1; i <= 20; i++) { // looper sathe closure nia kaz korsi
//     (function (n) {
//         setTimeout(function () {
//             console.log(n)
//         }, 1000 * n)
//     }) (i) 
// }
