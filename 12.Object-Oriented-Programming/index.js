// 01.Object Oriented Programming
// Procedural
// var width = 10
// var height = 20

// function calculateArea() {
//     return width * height
// }

// function calculateRange() {
//     return 2 * (width + height)
// }

// var area = calculateArea(width, height)
// var range = calculateRange(width, height)
// console.log(area, range)


// Object Oriented 
// var rect = {
//     width: 10,
//     height: 20,

// calculateArea: function() {
//     return this.width * this.height
// },

// calculateRange: function() {
//     return 2 * (this.width + this.height)
// }
// }

// var area = rect.calculateArea()
// var range = rect.calculateRange()
// console.log(area, range)



// 02.Class in OOP
// Class is just a template of an Object
// class Person {
// private String name //normal state
// public static int key  // static state
// public Person(String name) { //constructor
// this.name = name;
// } 
// public String getName() { normal method
//     return this.name;
// }
// public static Person(String name) { static method
//     return new Person(name)
// }
// }

// class Rect {
//     constructor(width, height) {
//         this.width = width
//         this.height = height
//     }
//     calculateArea() {
//         return this.width * this.height
//     }
//     calculateRange() {
//         return 2 * (this.width + this.height)
//     }
// }
// var rect1 = new Rect(10, 20) //object
// var rect2 = new Rect(12, 24)
// console.log(rect1.calculateArea())
// console.log(rect2.calculateRange())




// 03.Four Main Pillars of OOP
// 1. Abstraction (Hiding unnecessery details)
// 2. Encapsulation (Bundling Data and Method)
// 3. Inheritence
// 4. Polymorphism




// 04. Object Literal with Methods
// var rect = {
//     width: 10,
//     height: 20,

//     draw: function () {
//         console.log('My width is ' + this.width)
//         console.log('My height is ' + this.height)
//     }
// }
// rect['width'] = 20
// rect.draw()




// 05."THIS" Keyword: How it Works ('this' term of oop)
// function thisFunc() {
//     console.log(this)
// }
// thisFunc()
// new thisFunc()

// var rect = {
//     width: 10,
//     height: 20,

//     draw: function () {
//         // console.log('My width is ' + this.width)
//         // console.log('My height is ' + this.height)
//         this.printProperties()
//         console.log(this)
//     },

//     printProperties: function () {
//         console.log('My width is ' + this.width)
//         console.log('My height is ' + this.height)
//     }
// }
// rect.draw()

// var another = {
//     width: 11,
//     height: 12,
//     print: rect.printProperties
// }
// another.print()




// 06. Create Class Using Factory pattern // er constructor hisebe thakbe object
// var createRect = function (width, height) {
//     return {
//         width: width,
//         height: height,

//         draw: function () {
//             this.printProperties()
//             console.log('drawing')
//         },

//         printProperties: function () {
//             console.log('My width is ' + this.width)
//             console.log('My height is ' + this.height)
//         }
//     }
// }
// var rect1 = createRect(10, 20)
// // rect1.draw()
// console.log(rect1)

// var rect2 = createRect(11, 22)
// rect2.draw()




// 07.Creating Class Using Constructor Pattern
// var Rectangle = function (width, height) { //Rectangle is a constructor function, constructor pattern, class
//     this.width = width
//     this.height = height

//     this.draw = function () {
//         this.printProperties()
//     }

//     this.printProperties = function () {
//         console.log('My width is ' + this.width)
//         console.log('My height is ' + this.height)
//     }
// }
// // var rect3 = new Rectangle(10, 20) //new keyword create an object in Reactangle function
// var rect4 = new Rectangle(10, 20)
// rect4.draw()

// var rect5 = new Rectangle(11, 22)  //object constructor
// rect5.draw()




// 08. "New" Keyword: Create Your Own
// var Rectangle = function (width, height) { //Rectangle is a constructor function, constructor pattern, class
//     this.width = width
//     this.height = height

//     this.draw = function () {
//         this.printProperties()
//     }

//     this.printProperties = function () {
//         console.log('My width is ' + this.width)
//         console.log('My height is ' + this.height)
//     }
// }

// function myNew(constructor) {
//     var obj = {}
//     Object.setPrototypeOf(obj, constructor.prototype)
//     var argsArr = Array.prototype.slice.apply(arguments)
//     constructor.apply(obj, argsArr.slice(1))

//     return obj
// }
// var rect3 = myNew(Rectangle, 10, 20)
// rect3.draw()





//09. Constructor Property of a Constructor Function
// constructor property holo jey func ta use kore ey object ta build kora hoyese tar ekta refference
// protita object er sathe ekta constructor thak. new call na kora porjonto constructor call hoy na.





//10. Functions are Object in Javascript: Create Function with Function Constructor
// js a function ekta special type object
// prov1
// var Rect = new Function('width', 'height',  
//     `this.width = width
//     this.height = height

//     this.draw = function () {
//         this.printProperties()
//     }

//     this.printProperties = function () {
//         console.log('My width is ' + this.width)
//         console.log('My height is ' + this.height)
//     }`
// )
// var rect = new Rect(4, 5)
// console.log(rect.draw())

// prov2
// function test() {
//     console.log('I am test')
// }
// console.log(test.length, test.name)





// 11.Bind, Call, Apply: Call Your Function with Your Custom "This" Value
// when a function share defferent object we need Bind, Call, Apply
// function myFunc(c, d) {
//     console.log(this)
//     console.log(this.a + this.b + c + d)
// }
// myFunc({a: 10, b: 11}) //object associate
// myFunc.call({ a: 10, b: 11 }, 10, 5)
// // myFunc.apply({ a: 10, b: 20 }, [5, 8])
// var bindtest = myFunc.bind({ a: 10, b: 11 }, 10, 5)
// bindtest()
// var bindtest = myFunc.bind({ a: 10, b: 11 })
// bindtest(2, 5)





// 12.Pass By Value vs Pass by Reference(Call By Value vs Call by Reference) - Mutable vs Immutable
// var n = 10
// function passByValue(n) { //Immutable
//     n = n + 20
//     console.log(n)
// }
// passByValue(n)
// console.log(n)


// var object = {
//     a: 10
// }
// function passByReference(obj) { //Mutable
//     obj.a = obj.a + 20
//     console.log(obj.a)
// }
// passByReference(object)
// console.log(object.a)




// 13.Hide Private Properties in Javascript
// var Rectangle = function (width, height, pos) {
//     this.width = width
//     this.height = height
//     var position = {
//         x: pos
//     }

//     var printProperties = function () {
//         console.log('My width is ' + this.width)
//         console.log('My height is ' + this.height)
//         console.log('My position is = ' + position.x) // closure
//     }.bind(this)

//     this.draw = function () {
//         printProperties()
//     }
// }

// var rect3 = new Rectangle(10, 20, 40)
// rect3.draw()
// console.log(rect3)




//14. How to Use Getter Setter in Javascript
// var Rectangle = function (width, height) {
//     this.width = width
//     this.height = height

//     var position = {
//         x: 10
//     }

//     this.getPosition = function () {
//         return position
//     }

//     var printProperties = function () {
//         console.log('My width is ' + this.width)
//         console.log('My height is ' + this.height)
//         console.log('My position is = ' + position.x) // closure
//     }.bind(this)

//     this.draw = function () {
//         printProperties()
//     }
// }

// var rect3 = new Rectangle(10, 20)
// console.log(rect3.getPosition())


// var Rectangle = function () {
//     var position = {
//         x: 10
//     }

//     Object.defineProperty(this, 'position', {
//         get: function () {
//             return position
//         },
//         set: function (value) {
//             position = value
//         }
//     })
// }

// var rect3 = new Rectangle(10, 20)
// console.log(rect3.position)
// rect3.position = {
//     a: 20
// }
// console.log(rect3.position)




// * make myNew function
