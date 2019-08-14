//things that are highly related go together
// Cohesion
//Public interface
const Circle = require('./circle')


const c = new Circle(10)

// _radius.get(c)   // we can no longer get this
c.draw()