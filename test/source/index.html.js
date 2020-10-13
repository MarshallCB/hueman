import { html } from 'ucontent'
import { man, mix } from '../../es'
import { correction } from '../../src'

let page=html`
<!doctype html>
<html>
<head>
  <title>Hueman</title>
  <style>
    .row{
      display: flex;
      width: 100vw;
      height: 1vh;
    }
    .box{
      height: 100%;
      width: 1%;
      text-align: center;
      line-height: 0.7;
    }
  </style>
</head>
<body>
    ${[...Array(101).keys()].map(row => html`
      <div class="row">
        ${[...Array(360).keys()].map(col => html`
          <div class="box" style=${`background-color: ${man(col, 1.0, row / 100, 1.0)}`}>
            <!-- <p>${col*18}</p>
            <p>${correction(col * 18).chroma} , ${correction(col * 18).lightness}</p> -->
          </div>
        `)}
      </div>
    `)}
    ${[...Array(101).keys()].map(row => html`
      <div class="row">
        ${[...Array(360).keys()].map(col => html`
          <div class="box" style=${`background-color: hsl(${col}, 100%,${row}%)`}>

          </div>
        `)}
      </div>
    `)}
</body>
</html>
`.min().toString()

export default page