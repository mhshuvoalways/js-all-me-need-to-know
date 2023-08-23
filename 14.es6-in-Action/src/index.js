import "./styles.css";

// 01. what is es6
// 02. environment setup




// 03.How to Use Template String
// var s = `   how to
// dfdf 
//  dfdf  
//  ffdf`
// console.log(s.trim()) // trim is es5

// var name = 'MH Shuvo '
// var age = 17
// console.log(`my name is ${name} and age is ${age}. I am ${age < 18 ? 'not': ''} adult` )
// console.log(name.padStart(10, '*'))
// console.log(name.padEnd(10, '*'))
// console.log(name.repeat(10))





// 04. Let vs Const vs Var: What is the Difference
// let a= 10;
// a = 100
// console.log(a)

// const a= 10; // only read
// a = 100 
// console.log(a)


// if (true) {
//         var a = 10;
//         let a = 10;
// }
// console.log(a)

// for (var i = 0; i < 5; i++) {
// for (let i = 0; i < 5; i++) {

// }
// console.log(i)

// {
//         let a = 10;
// }
// console.log(a)





// 05.Arrow Function Syntax in ES6
// function add(a, b) {
//         return a + b;
// }

// let add = () => {
//         return a + b;
// }
// let add = (a, b) => a + b;
// let sqr = a => a * a




//06. Arrow Functions and This: What is the Benefit
// function my() {
//         console.log(this) // it return undefine bcz it is run on bable or use stric mood or webpack
// }
// my()

// let my = () => console.log(this)
// my()

// let obj = {
//         a: 10,
//         // print: function () {
//         //         console.log(this)
//         // }
//         print: () => {
//                 console.log(this)
//         }
// }
// obj.print()

// let obj = {
//         name: 'MH Shuvo',
//         print: function () {
//                 console.log(this)
//                 setTimeout(function () {
//                         console.log(this)
//                 })
//         }.bind(this)
// }
// obj.print()

// let obj = {
//         name: 'MH Shuvo',
//         print: function () {
//                 var myVar = this
//                 console.log(this.name)
//                 setTimeout(function () {
//                         console.log(myVar.name)
//                 })
//         }
// }
// obj.print()

// let obj = {
//         name: 'MH Shuvo',
//         print: function() { // here we will use normal function
//                 console.log(this)
//                 setTimeout(() => { // here we will use arrow function
//                         console.log(this.name)
//                 }, 1000)
//         }
// }
// obj.print()





// 07.How to Use Default Parameter in ES6
// function sqr(n) {
//     if (!n) {
//         n = 1
//     }
//     // n = n || 1
//     return n * n
// }

// function sqr(n = 1) {
//     return n * n
// }
// console.log(sqr())

// function greet(msg = 'Hello', name = 'MH Shuvo') { // if I use default parameter we can not pass as argument null
//     // console.log(name.length) 
//     console.log(`${msg}! ${name}`)
// }
// greet(null, null) 




// 08.Rest and Spread Operator in ES6
// function sumFunc() {
//     // console.log(arguments)
//     // let sum = 0;
//     // for( let i = 0; i < arguments.length; i++) {
//     //     sum += arguments[i]
//     // }
//     // console.log(sum)
//     console.log(arguments.reduce((a, b) => a + b)) // it is not working
// }
// sumFunc(1,2, 3, 4, 5)


// function sumFunc(...rest) { // at last
//     console.log(rest)
//     console.log(rest.reduce((a, b) => a + b))
// }
// sumFunc(1,2, 3, 4, 5)

// let a = [1, 2, 3, 4, 5]
// console.log(...a)

// let obj = {
//     a: 10,
//     b: 20, 
//     c: 30
// }

// let obj2 = { // obj er belay amra spread opetator use kori clone korar kaje
//     ...obj
// }
// obj2.a = 50
// console.log(obj2)
// console.log(obj)





// 09.Enhance Object in ES6
// just object literals change
// let a = 10, b = 11, c = 12
// let obj = {
//     a,
//     b,
//     c, 
//     print: function () {
//         console.log(this)
//     }
//     // print() {
//     //     console.log(this)
//     // }
// }
// obj.print()





// 10. What is Destructuring in ES6
// let obj = {
//     name: 'MH Shuvo', 
//     age: 27, 
//     address: {
//         country: 'Bangladesh',
//         city: 'Kushtia'
//     }
// }
// let {name, age, address: {country, city}} = obj
// console.log(name, age, country, city)

// let arr = [1, 2, 3, 4, 5]
// let [first, second, third, , fifth] = arr
// console.log(first, second, third, fifth)





//11. Object fromEntries Method in ES6
// let obj = {
//     a: 10,
//     b: 20, 
//     c: 30
// }
// console.log(Object.entries(obj)) // object to array

// let arr = [
//     ['a', 10],
//     ['b', 20],
//     ['c', 30]
// ]
// console.log(Object.fromEntries(arr)) // arrary to object





// 12.What are Symbols in ES6
// symbols is a primitive data type. 
// it must be unique. it generate always unique number, unique identity.
// we can use symbol to private and method in object
// var s1 = Symbol();
// var s2 = Symbol()
// console.log(s1)
// console.log(s2)
// console.log(s1 === s2)


// enum
// let toss = {
//     HEAD: Symbol('HEAD'),
//     TAIL: Symbol('TAIL')
// }  
// console.log(toss)





//13. What is Iterator: Iterator Basic Idea
// array, string, set, map these are iterable object. this is also called collection
// iterator is nothing but an object. it return an object
// let arr = [4, 2, 7];
// // for (var i = 0; i < arr.length; i++) {
// //     console.log(arr[i]);
// // }

// // this is way of es5
// function createIterator(collection) { // iterator interface
//     let i = 0;
//     return {
//         next: function() { // next method return an object
//             return {
//                 done: i >= collection.length,
//                 value: collection[i++]
//             }
//         }
//     }
// }
// let iterator = createIterator(arr)
// console.log(iterator)
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.dir(iterator.next)




// 14. Create Iterator with ES6 Symbol.Iterator Function
// let arr = [1, 2, 3];
// console.log(arr[Symbol.iterator]())
// console.log('test'[Symbol.iterator]())

// let iterator = arr[Symbol.iterator]() // Symbol.iterator is a property 
// console.log(iterator)
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())

// let str = 'TEXT'
// let iteratorText = str[Symbol.iterator]()
// console.log(iteratorText)
// console.log(iteratorText.next())
// console.log(iteratorText.next())
// console.log(iteratorText.next())
// console.log(iteratorText.next())





// 15.How does for of Loop Work
// let arr = [4, 2, 7, 3];
// for (let v of arr) {
//     console.log(v)
// }
// for (let v of 'MH Shuvo') {
//     console.log(v)
// }

// object has no iterable interface that's why it doesn't work
// let object = {
//     a: 10,
//     b: 20
// };
// for (let v of object) {
//     console.log(v)
// }




//16. How to Create Custom Iterable Object
// let obj = {
//     a: 10,
//     b: 20
// };

// for (let v of obj) {
//     console.log(v)
// }

// let obj = {
//     start: 1,
//     end: 4, 
//     [Symbol.iterator]: function () {
//         let currentValue = this.start;
//         const self = this;
//         return {
//             next() {
//                 return {
//                     done: currentValue > self.end,
//                     value: currentValue > self.end? undefined : currentValue++
//                 }
//             }
//         }
//     }
// }

// for (let v of obj) {
//     console.log(v)
// }

// let iterators = obj[Symbol.iterator]()
// console.log(iterators.next())
// console.log(iterators.next())
// console.log(iterators.next())
// console.log(iterators.next())
// console.log(iterators.next())





// 17.What is Generator Functions in es6 
// it is working only browser but why I don't' know
// generator return  iterators
// function* generate() {
//     yield 1
//     yield 2
//     yield 3
// }
// let it = generate()
// console.log(it)

// let obj = {
//     start: 1,
//     end: 4,
//     [Symbol.iterator]: function* () {
//         let currentValue = this.start;
//         while (currentValue <= this.end) {
//             yield currentValue++ // yield means pause
//         }
//     }
// }

// let iterators = obj[Symbol.iterator]()
// console.log(iterators.next())
// console.log(iterators.next())
// console.log(iterators.next())
// console.log(iterators.next())
// console.log(iterators.next())

// let arr = [4, 2, 7];
// function* generate(collection) {
//     for (var i = 0; i <= collection.length; i++) {
//         yield collection[i]
//     }
// }
// let it = generate(arr)
// console.log(it.next())




// 18. Check which is Iterable
// function isIterable(obj) {
//     return typeof obj[Symbol.iterator] === 'function'
// }

// console.log(isIterable({}))
// // console.log(isIterable(obj))
// console.log(isIterable([]))
// console.log(isIterable('test'))
// console.log(isIterable(new Number(45)))
// console.log(isIterable(new Map()))
// console.log(isIterable(new Set()))




// 19. Understanding Sets collection in ES6
// set, map is a data structure
// data gula organized way te store korar jonno set and map use kora hoy
// set duplicat data skip
// in set we can store any primitive or objective data
// let set = new Set([1,2, 3]) // must be array
// set.add(4) 
// set.add(5)
// set.add(5)
// console.log(set)
// console.log(set.size)
// console.log(set.clear)
// console.log(set.delete(2))
// console.log(set.has(2))
// console.log(set.keys())
// console.log(set.values())
// console.log(set.entries())
// let keyIterator = set.keys()
// console.log(keyIterator.next())
// console.log(set) // this is an object

// for(let key of set) {
//     console.log(key)
// }




// 20.Understanding Map collection in ES6
// map er main concept is key value like js object
// map also is a data structure
// let map = new Map([
//     ['a', 10],
//     ['b', 20],
//     ['c', 30]
// ])
// map.set({name: 'mh shuvo'}, 50) // Anything can be key of map method
// map.set(['d', 40])
// map.delete( 'a')
// console.log(map)
// console.log(map.size)
// console.log(map.get('a'))
// console.log(map.keys())
// console.log(map.values())
// console.log(map.entries())

// map.forEach((v, k) => {
//     console.log(k, v)
// })

// for(let [k, v] of map) {
//     console.log(k, v)
// }




// 21. What is Weak Set
// normaly set use korle and tar moddhe jodi object thak tahole garbage clean hoy na mane null korle hoyna
// let a = {a: 10}, b = {b: 20}
// let set = new Set([a, b])
// a = null
// console.log(set)    
// let arr = [...set]
// console.log(arr)

// let weakset = new WeakSet([a, b])
// // a = null
// console.log(weakset.has('a'))
// console.log(weakset)





// 21. What is Weak Map
// let weakMap = new WeakMap([
//     ['a', 10],
//     ['b', 20]
// ])
// a = null
// console.log(weakMap)
// console.log(weakMap.has('b'))





// 22.New Class Syntax in ES6
// function Rectangle (width, height) {
//     this.width = width
//     this.height = height

//     this.draw = function () {
//         console.log('drawing')
//     }
// }

// let rect = new Rectangle(10, 20)
// console.log(rect)

// class Rectangle {
//     constructor(width, height) {
//         this.width = width
//         this.height = height
//     }
//     draw() {
//         console.log('drawing')
//     }
// }
// let rect = new Rectangle(10, 20)
// console.log(rect)





// 23.ES6 Class Properties
class Rectangle {
    constructor(width, height) {
        this.width = width
        this.height = height
        this.another = function() {} //jodi amra na chay j eta prototype er moddhe jak
    }
    test = function() {} //jodi amra na chay j eta prototype er moddhe jak ar eta kaz korse bcz "@babel/plugin-proposal-class-properties" dia ase tay
    test2 = () => {}  // eta k//jodi amra na chay j eta prototype er moddhe jak ar eta kaz korse bcz "@babel/plugin-proposal-class-properties" dia ase tay
    name = "rectangle"  //bayre jodi property diclare korte chay. jodi amra na chay j eta prototype er moddhe jak ar eta kaz korse bcz "@babel/plugin-proposal-class-properties" dia ase tay
    draw() {
        console.log('drawing')
    }
}

let rect = new Rectangle(10, 20) // class instance
console.log(rect)
// console.log(rect.name)





// 24. ES6 Static Method
// Math.random() this is static method

// class Person {
//     constructor(name, email) {
//         this.name = name
//         this.email = email
//     }
//     print() {
//         console.log(this.name, this.email)
//     }
//     static createPerson(str) {
//         let person = JSON.parse(str)
//         console.log(person)
//         return new Person(person.name, person.email)
//     }
// }

// // when we dont need creating any instence or object we will use static
// let str = '{"name": "mh shuvo", "email": "mhs@gmail.com"}'

// let person = Person.createPerson(str)
// console.log(person)




// 25. "this" Property and It's Value in ES6 Class
// 'use strict'; // this is feature of ES5
// sudhu matro class er khetre amder jno window object na ase sey jonno ekta plugin "@babel/plugin-transform-strict-mode" use korte holo. but onno khetre 'use strict' use korley hobe
// function Shape() {
//     this.draw = function () {
//         console.log(this)
//     }
// }

// let shape = new Shape() // shape is method
// let another = shape.draw // another is not method
// another()




// 26.Hide Private Data with Symbol
// const _radius = Symbol()
// const _name = Symbol()
// const _draw = Symbol()
// class Circle {
//     constructor(radius, name, test) {
//         this.test = test
//         this[_radius] = radius
//         this[_name] = name
//     }
//     [_draw]() {
//         console.log('drawing')
//     }
// }

// let circle = new Circle(2, 'CRED', 'test')
// console.log(circle)
// console.log(Object.getOwnPropertyNames(circle))
// console.log(Object.getOwnPropertySymbols(circle))
// let key = Object.getOwnPropertySymbols(circle)[0]
// console.log(circle[key])


// 27.Hide Private Properties with Weak Map
// const _radius = new WeakMap();
// const _name = new WeakMap();
// const _resize = new WeakMap();

// class Circle {
//     constructor(radius, name, size) {
//         this.size = size
//         _radius.set(this, radius)
//         _name.set(this, name)
//         _resize.set(this, () => { // resize is method. if we want to private our method
//             console.log(this.size)
//         })
//     }

//     getDraw() {
//         console.log(_radius.get(this), _name.get(this))
//         _resize.get(this)()
//     }
// }

// let circle = new Circle(2, 'CRED', 100)
// circle.getDraw()




// 28.ES6 Getter and Setter
// const _radius = new WeakMap();

// class Circle {
//     constructor(radius) {
//         _radius.set(this, radius)
//     }
//     // getRadius() {
//     //     return _radius.get(this)
//     // }
//     get radius() {
//         return _radius.get(this)
//     }
//     set radius(v) {
//         _radius.get(this, v)
//     }
// }

// let circle = new Circle(2)
// // circle.radius = 100
// console.log(circle.radius())





// 29.Inheritance in ES6
// class Shape {
//     constructor(color) {
//         this.color = color
//     }

//     common() {
//         console.log('common')
//     }
// }

// class Rectangle extends Shape {
//     constructor(color, width, height) {
//         super(color) // Shape class er constructor keu call korte hobe
//         this.width = width
//         this.height = height
//     }

//     calcuter() {
//         return this.width * this.height
//     }
// }
// let rect5 = new Rectangle('blue', 4, 5)
// console.log(rect5)






// 30.Method Overriding in ES6
// class Shape {
//     constructor(color) {
//         this.color = color
//     }

//     common() {
//         console.log('common')
//     }
// }

// class Rectangle extends Shape {
//     constructor(color, width, height) {
//         super(color) // Shape class er constructor keu call korte hobe
//         this.width = width
//         this.height = height
//     }

//     common() {
//         console.log('I am overriding of Shape common method')
//     }
// }
// let rect = new Rectangle('blue', 4, 5)
// console.log(rect.common())






//31. ES6 Module System Explained
// for browser -> amd(befor)
// umd -> es5
// for nodejs -> commonjs(now)
// for browser-> es6 (now)
// commonjs -> nodejs
// import Rectangle from './es6-module/Rectangle'

// let rect = new Rectangle('blue', 4, 5)
// console.log(rect.common())



// import * as func from './es6-module/func' //asterisk or while card
// console.log(func.add(10, 5))



// import {add, sub} from './es6-module/func'
// console.log(add(10, 5), sub(10, 5))


// promise, async await, fetch api, async iterator, async generator these will be discuss in async chepter