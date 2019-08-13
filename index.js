//prototyope is the Parent of another object

let x = {}
//every object has a constructor property
// toString
//valueOF
x.toString()

let y = {}
//both x & y reference object base or prototype
// === true

//!multi level inheritance
let myArr = []
// myArr => arrBase => ObjectBase

//!logging the keys
let person = {
  name: 'Amber',
  age: 32
}
for(let key in person) console.log(key)

//* or this way will give the keys as strings
let keys = Object.keys(person)

Object.defineProperty(person, 'name', {
  writable: false,
  enumerable: false,
  configurable: false
})
// person.name = 'John'   // WILL NOT WORK BECAUSE FALSE
// Also now we cannot run Object.keys(person)
//configurable means u cannot delete these properties

//! Object.getPrototypeOf(myObj)
//let obj = {}
// obj.__proto__
// this will give you all the properties and methods

//! This uses too much memory
// function Circle(radius) {
//   this.radius = radius;
//   this.draw = function() {
//     console.log(`Draw Function`)
//   }
// }
// const c1 = new Circle(1)
// const c2 = new Circle(2)

function Circle(radius) {
  this.radius = radius
  //this is just for example
  this.move = function() {
    console.log(`moving`)
  }
}

//u should really declare the functions outside of it so its not repetitive
Circle.prototype.draw = function() {
  this.move()
  console.log(`draw`)
}

// now it wont show the function
const c1 = new Circle(1)
//however u can still call
//* console.log(c1.draw)
// c1.draw()

Circle.prototype.makeAString = function() {
  return `Circle with radius ` + this.radius
}
// console.log(c1.makeAString())

//* YOU CAN create a call a method inside of the original class even if the method isnt created until later in a prototype

//! how to interate over instance vs prototype
// Object.keys() will only give original keys

// for(let key in c1 ) => will return all keys including prototypes

