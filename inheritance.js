//!Shape

function Shape(color) {
  this.color = color
}

Shape.prototype.duplicate = function(){
  return `duplicate`
}

function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype)
  Child.prototype.constructor = Parent
}

//!Circle

function Circle(size, color) {
  Shape.call(this, color)
  this.size = size
}
extend(Circle, Shape)

let c = new Circle(5, 'red')
// console.log(c)

Circle.prototype.duplicate = function() {
  console.log(Shape.prototype.duplicate.call(this))
  return `Circle Duplicate`
}
// console.log(c.duplicate())

//! Square

function Square(size, color) {
  Shape.call(this, color)
  this.size = size
}
extend(Square, Shape)

Square.prototype.duplicate = function() {
  console.log(Shape.prototype.duplicate.call(this))
  return `Square Duplicate`
}

let sq = new Square(10, 'green')
// console.log(sq)

let shapes = [c, sq]
for ( let s of shapes ) console.log(s.duplicate())