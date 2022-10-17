// 195-01. Introduction to DOM - Document Object Model
// dom is an api. jar maddhome html ekta website er bebohar ta change kore tar nam dom. it is also a tree like data structure. ey dom jey data struture ta use kore html element gula k js language use kore amader bebohar upjogi kore sey data struture er nam holo dom
// main 4 node of dom
// 1. element node
// 2. text node
// 3. atribute node
// 4. comment node




// 196-02. Understanding The Window Object in DOM
// parents of documents is window


// 197-03. Understanding The Document Object in DOM


// 198-04. Basic Selectors in DOM Manipulation
// id, class, tagName, atributeName
// let title = document.getElementById('title');
// console.log(title);

// let className = document.getElementsByClassName('lead') // array like data structure
// console.log(className);

// let tagName = document.getElementsByTagName('li')
// console.log(tagName);

// let listItemOne = document.getElementsByName('list-item-one')
// console.log(listItemOne);




// 199-05. Query Selectors in DOM Manipulation
// css style
// let title = document.querySelector('#title')
// console.log(title)

// let paragraph = document.querySelector('.lead') //first element return
// console.log(paragraph)

// let paragraph = document.querySelectorAll('.lead') //all element return
// console.log(paragraph)

// let paragraphs = document.querySelectorAll('li') 
// console.log(paragraphs)

// let listItemOne = document.querySelector('[name^="list-item-one"]')
// console.log(listItemOne)





// 200-06. What is The Difference Between Two Selectors (getElement vs Query Selector)
// let tagName = document.getElementsByTagName('li') // Html Elements Node 
// console.log(tagName);
// console.log(tagName.constructor.name)

// let lists = document.querySelectorAll('li') // Node [Element Node, text node, atribute node, comment node ] 
// console.log(lists)
// console.log(lists.constructor.name)

// let ul = document.querySelector('ul') 
// console.dir(ul)
// console.log(ul.children)
// console.log(ul.childNodes)




// 201-07. How to Traverse DOM Elements
// let list = document.getElementById('list')
// console.log(list.parentElement)
// console.log(list.firstElementChild)
// console.log(list.lastElementChild)
// console.log(list.children)
// console.log(list.previousSibling)
// console.log(list.previousElementSibling)

// let li = document.querySelector('li')
// console.log(li.nextElementSibling)




// 202-08. How to Loop Throw HTML Collections
// let listItems = document.getElementsByTagName('li')
// // let arrItems = Array.from(listItems)
// let arrItems = Array.prototype.slice.apply(listItems)
// // let arrItems = [...listItems]
// arrItems.forEach(function(li, index) {
//     li.innerHTML = `(${index + 1}) ${li.innerHTML}`
// })





// 203-09. How to Create DOM Elements
// let li = document.createElement('li')
// console.dir(li);
// li.className = 'list-group-item'
// // li.setAttribute('title', 'I am Fourth Item')
// li.title = 'I am Fourth Item Another'
// li.innerHTML = 'Four'
// console.log(li)
// let list = document.getElementById('list')
// list.appendChild(li) // append refer node. append js er methor that is why you should use append

// function createElement(tagName, className, innerHTML) {
//     let tag = document.createElement(tagName)
//     tag.innerHTML = innerHTML || ''
//     tag.className = className || ''
//     return tag
// }

// function append(parent, children) {
//     children.forEach(child => parent.appendChild(child))
// }

// let list = document.getElementById('list')
// let li = createElement('p', 'list-group-item', 'Four')
// append(list, [li])

// let p1 = createElement('p', 'lead', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum consequatur, quam fuga corrupti voluptas sunt accusantium iste iusto. Reiciendis esse quaerat veritatis impedit natus numquam rerum iste incidunt dignissimos voluptatum.')

// let div = createElement('div')
// append(div, [p1])

// let container = document.getElementsByClassName('container')[0]
// append(container, [div])




// 204-10. Insert Created Element Using Adjacent Element
// list.insertAdjacentElement('beforebegin', div)
// list.insertAdjacentElement('afterbegin', div)
// list.insertAdjacentElement('beforeend', div)
// list.insertAdjacentElement('afterend', div)




// 205-11. Update and Remove any DOM Element
// let list = document.getElementById('list')
// let firstElemet = list.firstElementChild
// setTimeout(function () {
//     firstElemet.innerHTML = 'Update this Item'
//     firstElemet.classList.add('text-success')
//     firstElemet.style.background = 'green'
//     list.lastElementChild.remove()
// }, 3000)




// 206-12. How to Clone Node Include It's Child Elements
// let list  = document.getElementById('list')
// let lastElement = list.lastElementChild.cloneNode() // if provide true then clone deeply

// lastElement.innerHTML = 'Four'
// list.appendChild(lastElement)





// 07-13. How to Deal with Attributes in DOM Manipulation
// let list  = document.getElementById('list')
// console.log(list.attributes)
// console.log(list.getAttributeNames())
// console.log(list.getAttributeNode('class'))
// console.log(list.getAttribute('id'))
// console.log(list.id)
// list.lastElementChild.id = 'test'
// console.log(list.className)
// list.setAttribute('className', 'test')
// list.firstElementChild.setAttribute('title', 'test')

// let attr = document.createAttribute('title')
// attr.value = 'I am title'
// list.lastElementChild.setAttributeNode(attr)




// 208-14. How to Work with Style in DOM
// let title = document.getElementById('title')
// title.style.color = 'orange', '#f00'
// title.style.color = 'rgb(255, 0, 0)'

// let objStyle = {
//     background: 'black',
//     fontSize: '30px',
//     color: '#efefef'
// }

// let list = document.getElementById('list');
// Object.assign(list.style, objStyle);
// [...list.children].forEach(li => Object.assign(li.style, objStyle))





// 209-15. Introducing Events in DOM Manipulation
// let list = document.getElementById('list');
// let btn = document.getElementById('btn');
// // btn.onclick = function(e) {
// //     console.log(e)
// // }

// btn.addEventListener('click', function () {
//     // alert('I have clicked')
//     let item = list.lastElementChild.cloneNode();
//     item.innerHTML = 'New item'
//     list.appendChild(item)
// });

// let box = document.getElementById('box')
// box.addEventListener('mousemove', function(e) {
//     document.getElementById('x-value').innerHTML = e.offsetX //depend on box
//     document.getElementById('y-value').innerHTML = e.clientY //depend on document
// })




// 210-16. Understanding Event Delegation in DOM Manipulation
// let list = document.getElementById('list');
// // Event Delegation Problem
// ;[...list.children].forEach(function (li) {
//     li.addEventListener('click', function (e) {
//         // li.remove()
//            e.target.remove()
//         console.log(e.target)
//     })
// })

// list.addEventListener('click', function (e) {
//     console.log(e.target);
//     if (this.contains(e.target)) {
//         e.target.remove()
//         console.dir(e.target)
//     }
// })



// 211-17. Input Elements and Event Handling
// let name = document.getElementById('name')
// let showName = document.getElementById('showName')
// name.addEventListener('keypress', function (e) {
//     if (e.key === 'Enter' && e.target.value) {
//         showName.append(e.target.value + ', ')
//         e.target.value = ''
//     }
// })



// 212-18. Check Box Element and Event Handling
// let skills = document.getElementsByName('skills')
// let result = document.getElementById('result')

// let skillsArr = [];
// [...skills].forEach(function (skill) {
//     skill.addEventListener('change', function (e) {
//         if (e.target.checked) {
//             skillsArr.push(e.target.value)
//             outputSkills(result, skillsArr)
//         } else {
//             let index = skillsArr.indexOf(e.target.value)
//             skillsArr.splice(index, 1)
//             outputSkills(result, skillsArr)
//         }
//     })
// })

// function outputSkills(parent, skillsArr) {
//     let result = ''
//     skillsArr.forEach(function (skill, index) {
//         result += `(${index + 1}) ${skill} `
//     })
//     parent.innerHTML = result
// }



// 213-18. List Item and Input Element Event Handling
// let list = document.getElementById('list')

// list.addEventListener('dblclick', function (event) {
//     if (this.contains(event.target)) {
//         let innerTxt = event.target.innerText
//         event.target.innerText = ''
//         let indexBox = createInputBox(innerTxt)
//         event.target.appendChild(indexBox)
//         indexBox.addEventListener('keypress', function (e) {
//             if(e.key === 'Enter') {
//                 event.target.innerText = e.target.value
//             }
//         })
//     }
// })

// function createInputBox(value) {
//     let input = document.createElement('input')
//     input.type = 'text'
//     input.className = 'form-control'
//     input.value = value

//     return input
// }




// 214-19. How to Handle Form Data in DOM
// let form = document.getElementById('form');
// form.addEventListener('submit', function (e) {
//     e.preventDefault();
//     [...this.elements].forEach(function (el) {
//         let formObj = {}
//         if (el.type !== 'submit') {
//             let isValid = validator(el)
//             if (isValid) {
//                 formObj[el.name] = el.value
//             } else {
//                 // alert(`${el.name} is not a valid`)
//                 el.classList.add('is-invalid')
//             }
//         }
//         console.log(formObj)
//     })
//     this.reset()
// })


// // // 215-20. How to Validate Form Data in DOM
// function validator(el) {
//     if (!el.value) {
//         return false
//     }
//     return true
// }




// 216-21. AJAX: How to Send Get Request and Display Data
// let load = document.getElementById('load');
// let posts = document.getElementById('posts');

// load.addEventListener('click', function () {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//         .then(response => response.json())
//         .then(data => {
//             // data.forEach((item, index) => {
//             //     posts.appendChild(itemGenerator(item, index))
//             // })
//             data.map((item, index) => {
//                 posts.appendChild(itemGenerator(item, index))
//             })
//         })
//         .catch(err => console.log(err))
// })

// function itemGenerator(item, no) {
//     let li = document.createElement('li')
//     li.className = 'list-group-item'
//     li.innerHTML = `${no + 1}.  ${item.title}`

//     return li
// }




// 217-22. AJAX: How to Send Post Request and Display Data
// let URL = 'https://jsonplaceholder.typicode.com/posts'
// let postForm = document.getElementById('post-form');
// let posts = document.getElementById('posts');

// postForm.addEventListener('submit', function (e) {
//     e.preventDefault();
//     let title = this.title.value || undefined;
//     let body = this.body.value || undefined;

//     if (title && body) {
//         let obj = {
//             userId: 100,
//             title: title,
//             body: body
//         }
//         fetch(URL, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/JSON'
//             },
//             body: JSON.stringify(obj)
//         })
//             .then(response => response.json())
//             .then(item => {
//                 posts.appendChild(itemGenerator(item))
//             })
//             .catch(err => console.log(err))
//     } else {
//         alert('Please provide valid data')
//     }
// })

// function itemGenerator(item) {
//     let li = document.createElement('li')
//     li.className = 'list-group-item'
//     li.innerHTML = `${item.userId}, ${item.id}, ${item.title}, ${item.body} `

//     return li
// }




// 218-23. Conclusion of DOM Manipulation
// more api

// Canvas
// SVG
// Drag and Drop
// Transition
// Location
// Audio, Video
// Speech recognition
// Web sockets
// Local Storage, Cookies and Browser Database