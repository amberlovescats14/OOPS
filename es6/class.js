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
