//! Mixins and Composition ES6
function mixin(target, ...sources) {
  Object.assign(target, ...sources)
}

const canEat = {
  eat: function () {
    this.hunger--
    console.log(`eating`)
  }
}
const canSwim = {
  swim: function () {
    console.log(`swim`)
  }
}

const canWalk = {
  walk: function () {
    console.log(`walking`)
  }
}

//! person
function Person() {

}

// Object.assign(Person.prototype, canEat, canWalk)
mixin(Person.prototype, canEat, canWalk)

const peep = new Person()

//!goldfish
function Goldfish() {

}
// Object.assign(Goldfish.prototype, canEat, canSwim)
mixin(Goldfish.prototype, canEat, canSwim)

const goldfish = new Goldfish()
