var { hueman, mix, correction } = require('../dist/index')

console.log(hueman(120,1.0,0.5))

console.log(mix(100, 200, 0.5))
console.log(mix(340, 100, 0.1))
console.log(mix(0, 200, 0.75))

console.log(correction(0))
console.log(correction(120))
console.log(correction(240))
console.log(correction(240,0.2,0.2))

console.log(hueman(210,1.0,0.5))
console.log(hueman(110,1.0,0.5,0.5))
console.log(hueman(50,1.0,0.5))