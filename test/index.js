import { test } from 'uvu';
import * as assert from 'uvu/assert';
import { mix, correction, man } from '../src';

test('Mix', () => {
  assert.is(mix(220, 240), 230)
  assert.is(mix(0, 360), 0)
  assert.is(mix(360, 0), 0)
  assert.is(mix(200, 200), 200)
  assert.is(mix(10,350),0)
  assert.is(mix(30, 300), 345)
})

test.run()