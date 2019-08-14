import { Circle } from './circle.js'
// this requires a little bit of adjustment in an html file.
// this is usually used in react

const c = new Circle(10)
c.draw()

//! Transpiler
// turns all files into javascript that is readable by all browser
//webpack is good for this
// it will clean it up to, take out spaces and stuff

