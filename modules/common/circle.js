//Implementation of detail

const _radius = new WeakMap()

class Circle {
  constructor(radius){
    _radius.set(this, radius)
  }
  draw() {
    console.log(`Circle with the radius of ${_radius.get(this)}`)
  }
}

module.exports = Circle

// module.exports.Circle = Circle
// module.exports.Square = Square