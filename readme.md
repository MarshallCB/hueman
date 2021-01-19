<div align="center">
  <img src="https://github.com/marshallcb/hueman/raw/main/meta/hueman.png" alt="hueman" width="100" />
</div>

<h1 align="center">hueman</h1>
<div align="center">
  <a href="https://npmjs.org/package/hueman">
    <img src="https://badgen.now.sh/npm/v/hueman" alt="version" />
  </a>
  <a href="https://bundlephobia.com/result?p=hueman">
    <img src="https://img.badgesize.io/MarshallCB/hueman/main/es.js?compression=brotli" alt="install size" />
  </a>
</div>

<div align="center">Color space based on human perception</div>

## Features
- Brightness / Saturation calibration across hues
- Find intermediate hues (good for programmatic gradients)
- Works on both server and client
- Pairs well with [`themepark`](https://github.com/MarshallCB/themepark)

# Usage

## Installation

Via NPM:
```sh
npm install hueman
```

NodeJS
```js
// CJS syntax
var { hueman, mix, correction } = require('hueman');

// ES6 Syntax
import { hueman, mix, correction } from 'hueman';
```

Script tag (via unpkg):
```html
<!-- Available as global variable hueman -->
<script src="https://unpkg.com/hueman"></script>
<!-- Later -->
<script>
  console.log(hueman(120,1.0,0.5)); // "hsl(120,97%,37.5%)"
  console.log(hueman.mix(120,160,0.75)); // "150"
  console.log(hueman.correction(120)); // "[0.97, 0.75]"
</script>
```

Browser: Module (via snowpack):
```js
import { hueman, mix, correction } from 'https://cdn.skypack.dev/hueman';
```

## API


### `hueman(h,s,l,a)`

- `h: [0,360]` (values will automatically wrap if outside of this range)
- `s: [0.0,1.0]` (defaults to 1.0)
- `l: [0.0,1.0]` (defaults to 0.5)
- `a: [0.0,1.0]` (defaults to 1.0)

```js
  import { hueman } from 'hueman';
  hueman(210, 1.0, 0.5) // -> "hsl(210,100%,50%)"
  hueman(110, 1.0, 0.5, 0.5) // -> "hsla(110,97%,37.5%,0.5)"
  hueman(50, 1.0, 0.5) // -> "hsl(50,100%,37.5%)"
```


### `mix(hue1,hue2,ratio)`

Returns the mixed hue between `hue1` and `hue2` at a desired ratio, where `ratio = 0` results in hue1, and `ratio = 1` results in `hue2`. Will correctly wrap across 0/360 (both 0 and 360 are red in HSL)

```js
  import { mix } from 'hueman';
  mix(100, 200, 0.5) // -> 150
  mix(340, 100, 0.1) // -> 352
  mix(0, 200, 0.75) // -> 240 (closer distance between 200 and 360 than 0 and 200)
```

### `correction(hue)`

Returns `[chroma, lightness]` correction coefficient compared to base hue (210). Useful for calculating opacity for transparent overlays and other indirect hue-influenced calculations.

```js
  import { correction } from 'hueman';
  // correction(h,s,l) => [chroma, lightness]
  correction(0) // [0.9, 1] (reduce chroma, don't alter lightness)
  correction(120) // [0.97, 0.75] (slightly reduce chroma, reduce lightness)
  correction(240) // [0.97, 1.27]
  correction(240,0.2,0.2) // [ 0.9976, 1.0216 ] (reduced effect since hue is less vibrant)
```

# Development

### Roadmap
- Color generator webapp
- Examples + Explanations in readme
- Reduced import size (encode hue biases more efficiently)
- Add luminance / chroma testing for formula refinements

## Acknowledgements
- [HSLuv](https://www.hsluv.org/comparison/)
- [Color Vision](https://en.wikipedia.org/wiki/Color_vision)
- [Luminance Formulas](https://stackoverflow.com/questions/596216/formula-to-determine-brightness-of-rgb-color)

## License

MIT © [Marshall Brandt](https://m4r.sh)
