// 01.Introduction to Inheritance (parrent class)
// 2 type Inheritance we can see. 1. classical inheritance 2. prototypical inheritance
// js er protita object er e ekta object base thake without capital Object

// function Person(name) {
//     this.name = name
// }
// var p1 = new Person('MH Shuvo')
// console.log(p1)




// 02.Property Descriptor in Javascript
// var person = {
//     name: 'MH Shuvo',
//     age: 27
// }
// // console.log(person)

// // for(var i in person) {
// //     console.log(i)
// // }

// // console.log(Object.keys(person))

// // var descriptor = Object.getOwnPropertyDescriptor(person, 'name')
// // console.log(descriptor)

// var baseObj = Object.getPrototypeOf(person)
// var descriptor = Object.getOwnPropertyDescriptor(baseObj, 'toString')
// console.log(descriptor)

// Object.defineProperty(person, 'name', {
//     enumerable: false, //iterable
//     writable: false,
//     configurable: false,
//     value: 'mahamudul hasan shuvo'
// })

// for (var i in person) {
//     console.log(i)
// }

// person.name = 'mahamudul hasan'
// delete person.name
// console.log(person.name)




// 03.Constructor Prototype Object of Any Constructor Function
// function Person(name) { // protita constructor function er sathe ekta property ase jar nam prototype. eta change korte pari and extend korte pari
// this.name = name
// }
// var p1 = new Person('MH Shuvo')
// console.log(p1)
// console.log(Object.getPrototypeOf(p1))
// console.log(Person.prototype)

// Array.prototype.myFunc = function () {
//     console.log('I am parent prototype')
// }

// arr.__proto__.myFunc = function () { // this is depricated
//     console.log('I am parent prototype')
// }




// 04.Instance vs Prototype Members
// We can access intence member from prototype members and prototype members from intence member
// function Square(width) {
//     this.width = width

//     this.getWidth = function() {
//         console.log('Width is ' + this.width)
//     }
//     this.draw()
// }

// // Prototype Members
// Square.prototype = {
//     draw: function () {
//         // this.getWidth()
//         // console.log('draw')
//     },
//     toString: function () { //method override
//         // return ('My width is ' + this.width)
//         return('My width is ' + this.getWidth)
//     }
// }

// var sqr1 = new Square(10)
// var sqr2 = new Square(5)




// 05.Iterate Object Properties and hasOwnProperty Method
// sqr1.hasOwnProperty('width') // check own property and method in browser
// Object.keys(sqr1) // in browser
// for(var i in sqr1) { // if we want to get Instance or Prototype Members of an object in browser
//     console.log(i)
// }







// Prototypical-Inheritance  =====

// 06.Our First Own Prototypical Inheritance
// step1 (this is code duplicate)
// function Square(width) {
//     this.width = width
// }

// Square.prototype = {
//     draw: function () {
//         console.log('Drawing')
//     },
//     common: function () {
//         console.log('I am common method')
//     }
// }

// function Circle() {

// }

// Circle.prototype = {
//     common: function () {
//         console.log('I am common method')
//     }
// }



// step2
// function Shape() {

// }

// Shape.prototype = {
//     common: function () {
//         console.log('I am common method')
//     }
// }

// function Square(width) {
//     this.width = width
// }

// Square.prototype = {
//     draw: function () {
//         console.log('Drawing')
//     }
// }
// var shape = new Shape()
// var sqr = new Square(10)

// shape-> Shape-> Object
// sqr-> Square-> Object

// sqr -> Square -> Shape -> Object


// step3
// function Shape() {

// }

// Shape.prototype = {
//     common: function () {
//         console.log('I am common method')
//     }
// }

// function Square(width) {
//     this.width = width
// }

// Square.prototype = Object.create(Shape.prototype)

// // Square.prototype = { // method override. jodi amra constructor func er sathe directly equal sign dia bosay di tahole eta override hoa jabe
// //     draw: function () {
// //         console.log('Drawing')
// //     }
// // }
// Square.prototype.draw = function () {
//     console.log('Drawing')
// }

// function Circle() {

// }
// Circle.prototype = Object.create(Shape.prototype)


// var shape = new Shape()
// var sqr = new Square(10)
// var circle = new Circle()

// shape-> Shape-> Object
// sqr-> Square-> Object

// sqr -> Square -> Shape -> Object




// 07. Reset Constructor Property After Inheritance
// function Shape() {

// }

// Shape.prototype.common = function () {
//     console.log('I am common method')
// }

// function Square(width) {
//     this.width = width
// }

// Square.prototype = Object.create(Shape.prototype)// prototype reset
// Square.prototype.constructor = Square //constructor reset

// Square.prototype.draw = function () {
//     console.log('Drawing')
// }
// // new Square.prototype.constructor(20) // ey vabeu ekta constructor func er object create kora jay in browser

// var shape = new Shape()
// var sqr = new Square(10)




// 08. Calling super with Call method
// function Shape(color) {
//     this.color = color
// }

// Shape.prototype.common = function () {
//     console.log('I am common method')
// }

// function Square(width, color) {
//     this.width = width
//     // new Shape(color) //ekhane ekta instace toyri hoa jasse
//     Shape.call(this, color) // bayre theke ekta function call korar smy tar instance or this er value ta amra bole dite pari. parent func er constructor tak super call er moto ekhane kaz holo
// }

// Square.prototype = Object.create(Shape.prototype) // prototype reset
// Square.prototype.constructor = Square //constructor reset

// Square.prototype.draw = function () {
//     console.log('Drawing')
// }

// var sqr = new Square(10, 'green')





// 09.Creating Extends Function to Reduce Repeating Code
// function extend(Parent, Child) {
//     Child.prototype = Object.create(Parent.prototype)
//     Child.prototype.constructor = Child 
// }

// function Shape(color) {
//     this.color = color
// }

// Shape.prototype.common = function () {
//     console.log('I am common method')
// }

// function Square(width, color) {
//     Shape.call(this, color)
//     this.width = width
// }

// extend(Shape, Square)

// Square.prototype.draw = function () {
//     console.log('Drawing')
// }

// function Circle() {
   
// }

// extend(Shape, Circle)

// var shape = new Shape()
// var sqr = new Square(10, 'green')
// var circle = new Circle()




// 10.Method Overriding in Javascript
// function extend(Parent, Child) {
//     Child.prototype = Object.create(Parent.prototype)
//     Child.prototype.constructor = Child 
// }

// function Shape(color) {
//     this.color = color
// }

// Shape.prototype.common = function () {
//     console.log('I am common method')
// }

// function Square(width, color) {
//     this.width = width
//     Shape.call(this, color)
// }

// extend(Shape, Square)

// Square.prototype.draw = function () {
//     console.log('Drawing')
// }

// function Circle(redius, color) {
//     this.redius = redius
//     Shape.call(this, color)
// }

// extend(Shape, Circle)

// Circle.prototype.common = function () {
//     Shape.prototype.common.call(this) // jodi amder parent class er prototype dorkar hoy
//     console.log('I am calling from common and overriding')
// }

// var shape = new Shape()
// var sqr = new Square(10, 'green')
// var circle = new Circle(4, 'black')





// 11.Polymorphism in Javascript
// function extend(Parent, Child) {
//     Child.prototype = Object.create(Parent.prototype)
//     Child.prototype.constructor = Child 
// }

// function Shape(color) {
//     this.color = color
// }

// Shape.prototype.common = function () {
//     console.log('I am common method')
// }

// function Square(width, color) {
//     this.width = width
//     Shape.call(this, color)
// }

// extend(Shape, Square)

// Square.prototype.common = function () {
//     console.log('I am calling from square and overriding')
// }

// function Circle(redius, color) {
//     this.redius = redius
//     Shape.call(this, color)
// }

// extend(Shape, Circle)

// Circle.prototype.common = function () {
//     console.log('I am calling from common and overriding')
// }

// var shape = new Shape('pirple')
// var sqr = new Square(10, 'green')
// var circle = new Circle(4, 'black')

// var arr = [shape, sqr, circle]
// for(var i of arr) {
//    i.common()
// }

// // in browser
// // circle instanceof Circle
// // circle instanceof Shape
// // sqr instanceof Square
// // sqr instanceof Shape





// 13.Inheritance and Composition Mixing Together
// maximum 2 level inheritance
// // step1
// var canWalk = {
//     walk: function () {
//         console.log('Walking...')
//     }
// }

// var canEat = {
//     eat: function () {
//         console.log('Eating...')
//     }
// }

// var person = Object.assign({}, canWalk, canEat) // Object.assign es6. empty obj er sathe onno obj gula concat hoa jay.
// person.name = 'MH Shuvo'
// console.log(person)


// function Person(name) {
//     this.name = name
// }
// Object.assign(Person.prototype, canWalk, canEat) 
// var person = new Person('MH Shuvo')
// console.log(person)


// step2
// function mixin(target, ...source) { // ro
//     Object.assign(target, ...source) // so
// }

// var canWalk = {
//     walk: function () {
//         console.log('Walking...')
//     }
// }

// var canEat = {
//     eat: function () {
//         console.log('Eating...')
//     }
// }

// var canSwim = {
//     swim: function () {
//         console.log('Swimming...')
//     }
// }

// function Person(name) {
//     this.name = name
// }

// mixin(Person.prototype, canWalk, canEat)

// var person = new Person('MH Shuvo')
// console.log(person)

// function GoldFish(name) {
//     this.name = name
// }

// mixin(GoldFish.prototype, canEat, canSwim)
// var goldfish = new GoldFish('bla bla bla')
// console.log(goldfish)
