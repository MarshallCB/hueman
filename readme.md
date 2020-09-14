<div align="center">
  <img src="https://github.com/marshallcb/hueman/raw/master/hueman.png" alt="hueman" width="100" />
</div>

<h1 align="center">Hueman (WIP)</h1>
Under active development, come back soon!
<div align="center">
  <a href="https://npmjs.org/package/hueman">
    <img src="https://badgen.now.sh/npm/v/hueman" alt="version" />
  </a>
  <a href="https://bundlephobia.com/result?p=hueman">
    <img src="https://img.badgesize.io/MarshallCB/hueman/master/min.js?compression=brotli" alt="install size" />
  </a>
</div>

<div align="center">Human color percpetion transforms</div>

## Features
- Brightness / Saturation calibration across hues
- Find intermediate hues (good for gradients)
- Works on both server and client
- Calculate accessibility of color pairings

# Usage

## Installation

Guided tutorial on path.cafe (coming soon)

Via NPM:
```sh
npm install hueman
```

Script tag (via unpkg):
```html
<!-- Available as global variable hueman -->
<script src="https://unpkg.com/hueman" />
```

Browser Module (via snowpack):
```js
// OR import hueman from 'https://cdn.skypack.dev/hueman'
import { mix, correction, hum } from 'https://cdn.skypack.dev/hueman';
```
## API

### `mix(hue1,hue2,ratio)`

Returns the mixed hue between `hue1` and `hue2` at a desired ratio, where `ratio = 0` results in hue1, and `ratio = 1` results in `hue2`. Will correctly wrap across 0/360 (both 0 and 360 are red in HSL)

```js
  import { mix } from 'hueman';
  mix(100, 200, 0.5) // -> 150
  mix(340, 100, 0.1) // -> 352
  mix(0, 200, 0.75) // -> 150
```

### `correction(hue)`

Returns a `{ chroma, lightness }` correction coefficient compared to base hue (210)
WIP - formula bound to change (!)

```js
  import { correction } from 'hueman';
  correction(0) // { chroma: 0.66, lightness: 1.03 }
  correction(120) // { chroma: 0.82, lightness: 0.64 }
  correction(240) // { chroma: 0.82, lightness: 1.51 }
```

### `hum(h,s,l)`

Returns a CSS string with corrected saturation and luminance values

```js
  import { man } from 'hueman';
  man(210, 100, 50) // -> "hsl(210, 100%, 50%)"
  man(110, 100, 50) // -> "hsl(110, 83%, 32%)"
  man(50, 100, 50) // -> "hsl(50, 98%, 31%)"
```

## Details

<details>
  <summary><strong>HSL based themes</strong></summary>
  <div>
    Coming soon
  </div>
</details>
<details>
  <summary><strong>Luminance Calculations</strong></summary>
  <div>
    Coming soon
  </div>
</details>

- - -

# Development

### Contributing Guidelines

### Commands

Guided process to commit changes and/or submit a pull request
```sh
npm run save
```

### Roadmap
- Accessibility contrast guarantees with automated browser testing
- Alternate formulations
- Webapp color generator
- Examples & Tutorials

## Acknowledgements
- [HSLuv](https://www.hsluv.org/comparison/)
- [Color Vision](https://en.wikipedia.org/wiki/Color_vision)
- [Luminance Formulas](https://stackoverflow.com/questions/596216/formula-to-determine-brightness-of-rgb-color)

## License

MIT © [Marshall Brandt](https://m4r.sh)
