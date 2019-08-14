// 'use strict'
// will not allow us to modify global objects
//! classes are essentially functions

class Circle {
  //Everything in the constructor is in the prototype
  constructor(radius){
    this.radius = radius
    this.move = function() {}
  }

  draw() {
    console.log(`DRAW`)
  }
}
const c = new Circle(4)
// c.draw()

//! HOISTING :)
//only put a semi colon at the end of expression not function
// const a = amber;
//function() { }    //NO SEMI COLON
//u can call a function above thte decleration

// Class Decleration
// class Punkin {

// }
//Class Expression  //semi colon
// hardly ever used
// const Punkin = class {

// };

//do not declare new Punkin before class declaration
// const p = new Punkin


//!static
class Square {
  constructor(number){
    this.number = number
  }
  // instance
  draw() {

  }
  //static
  //this means u will not be able to call Square.parse() on the class
  // not the decleration of a new Square
  static parse(str) {
    JSON.parse(str).number
    return new Square(radius)
  }
}

const sq = new Square('{"number": 1}')
// console.log(sq)

//* STATIC is like MATH.FLOOR
// class Math {
//   static floor(value) {
//     ...
//   }
// }
// Math.floor()


//! THIS KEYWORD
// NODE ONLY HAS GLOBAL OBJECTS, not window objects

//!Private with symbols. PRIMITIVE SYMBOL
//  _radius assumes its private. it doesnt actually prevent it 
// Symbol() === Symbol() => flase because it creates a new symbol everytime

const _radius = Symbol()
const _draw = Symbol()

class Private {
  constructor(radius) {
    this[_radius] = radius
  }

  [_draw]() {

  }
}

//Object.getOwnPropertyNames(c)  DOESNT WORK
const p = new Private(1)

// DONT DO THAT
// const key = Object.getOwnPropertySymbols(p)[0]
// console.log(p[key])

//! WeakMap 
//absolutly no reference to this outside of this class
const _privateRadius = new WeakMap()
const _privateMove = new WeakMap()

class Map {
  constructor(radius){
    _privateRadius.set(this, radius) 

    
    _privateMove.set(this, () => {
      console.log(`In the move`)
    })
  }

  draw() {
    _privateMove.get(this)()
    // _privateRadius.get(this)
    console.log(_privateRadius.get(this))
  }
}

const m = new Map(1)
m.draw()