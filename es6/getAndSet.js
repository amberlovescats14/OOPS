//!define a setter with a function

// const _radius = new WeakMap()

// class Circle {
//   constructor(radius) {
//     _radius.set(this, radius)
//   }

//   getRadius() {
//     return _radius.get(this)
//   }
// }

// const c = new Circle(4)
// console.log(c.getRadius())

//! OR just a Circle method and then updating the radius
// const _radius = new WeakMap()

// class Circle {
//   constructor(radius) {
//     _radius.set(this, radius)
//   }

//   get radius() {
//     return _radius.get(this)
//   }

//   set radius(value) {
//     if(value <= 0 ) throw new Error(`Invalid Radius`)
//     _radius.set(this, value)
//   }
// }

// const c = new Circle(4)
// console.log(c.radius) // 4

// c.radius = 10
// console.log(c.radius) //10

// c.radius = -1
// console.log(c.radius) // error


//! Inheritance
//! BOILER PLATE

// class Shape {
//   constructor(color) {
//     this.color = color
//   }
//   move() {
//     console.log(`Move`)
//   }
// }
// class Circle extends Shape {
//   constructor(color, radius){
//     super(color, radius)
//     this.radius = radius
//   }
//   draw() {
//     console.log(`Draw`)
//   }
// }
// //* 
// // const c = new Circle()
// // Draw and Move are both in the prototype
// // U dont have to reset the constructor
// // c.move()
// // c.draw()
// //*
// const c = new Circle('red', 2)
// console.log(c)

//! Method Overide
// class Shape {
//   move(){
//     console.log(`move`)
//   }
// }

// class Circle extends Shape {
//   move() {  
//     super.move()
//   console.log(`Circle Move`)
//   }
// }

// const c = new Circle()
// c.move() // will return both move and Circle Move

//! EXERCISE
const _items = new WeakMap()
class Stack {
  constructor(){
    _items.set(this, [])
  }


  push(obj) {
    const items = _items.get(this)

    items.push(obj)
  }

  pop(){
    const items = _items.get(this)

    if(items.length === 0)
      throw new Error(`Stack is empty`)
    items.pop()
  }

  peek(){
    const items = _items.get(this)

    if(items.length === 0 )
      throw new Error(`Stack is empty`)
    return items[items.length -1]
  }
  
  //because its read only
  get count(){
    return _items.get(this).length
  }
}
let s = new Stack()
s.push(1)
s.push(2)
console.log(s.peek())
console.log(_items.get(s)) // this is how u  show the actual value of the weakmap
