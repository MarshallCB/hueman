import { suite } from 'uvu';
import * as assert from 'uvu/assert';
var { hueman, mix, correction } = require('../dist/index')

const outputs = suite('outputs');

outputs('color tests', () => {
  assert.is(hueman(120,1.0,0.5),"hsl(120,97%,37.5%)")
  assert.is(hueman(210, 1.0, 0.5),"hsl(210,100%,50%)")
  assert.is(hueman(110, 1.0, 0.5, 0.5),"hsla(110,97%,37.5%,0.5)")
  assert.is(hueman(50,1.0,0.5),"hsl(50,100%,37.5%)")
})

outputs('mix', () => {
  assert.is(mix(100, 200, 0.5),150)
  assert.is(mix(340, 100, 0.1),352)
  assert.is(mix(0, 200, 0.75),240)
})

outputs('correction', () => {
  assert.equal(correction(0), [0.9, 1])
  assert.equal(correction(120), [0.97, 0.75])
  assert.equal(correction(240), [0.97, 1.27])
  assert.equal(correction(240,0.2,0.2), [0.9976, 1.0216])
})

outputs.run()