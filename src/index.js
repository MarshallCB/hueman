let fix = (n) => +n.toFixed(2)
let rawmix = (x, y, ratio) => x * (1-ratio) + y * ratio
let fence = (min,x,max) => Math.max(Math.min(max,x),min)

export function mix(x, y, ratio = 0.5){
  x = x % 360
  y = y % 360
  if(Math.abs(x - y) >= 180){
    // if they're closer wrapped, wrap the lower across 360
    if(x < y){
      x = x + 360
    } else {
      y = y + 360
    }
  }
  // Perform ratio, and mod by 360 in case of wrap
  return Math.round(rawmix(x,y,ratio)) % 360
}


let scores = [
  {
    hue: 15,
    chroma: 74,
    lightness: 56
  },
  {
    hue: 45,
    chroma: 30, // originally 46
    lightness: 81 // originally 81
  },
  {
    hue: 75,
    chroma: 51,
    lightness: 85 // originally 93
  },
  {
    hue: 105,
    chroma: 60,
    lightness: 87
  },
  {
    hue: 135,
    chroma: 59,
    lightness: 80 // originally 87
  },
  {
    hue: 165,
    chroma: 39,
    lightness: 89
  },
  {
    hue: 195,
    chroma: 38,
    lightness: 73
  },
  {
    hue: 225,
    chroma: 60,
    lightness: 49 // originally 39
  },
  {
    hue: 255,
    chroma: 60,
    lightness: 45 // originally 35
  },
  {
    hue: 285,
    chroma: 60,
    lightness: 49
  },
  {
    hue: 315,
    chroma: 58,
    lightness: 56
  },
  {
    hue: 345,
    chroma: 74,
    lightness: 53
  }
]

// hue --> expected chroma / lightness
// multiply hsl values by inverse ratio compared to 50/50

export function correction(hue){
  hue = hue % 360
  let p = hue / 30 - 0.5 // hue --> [0.5, 12.5] (because we have "middle" values (starts at 15, 30 increments))
  let l = p - Math.floor(p); // decimal distance from Math.floor
  let r = 1 - l; // decimal distance from Math.ceil
  let left = scores[(Math.floor(p) + 12) % 12]
  let right = scores[(Math.ceil(p)) % 12]

  let position = {
    chroma: (left.chroma * l + right.chroma * r),
    lightness: (left.lightness * l + right.lightness * r),
    hue: (left.hue * l + right.hue * r)
  }
  // using 210 hue as base (where 49 and 56 come from)
  let chromaCoef = Math.pow(49 / position.chroma, 1)
  let lightnessCoef = Math.pow(56 / position.lightness, 1)
  return { 
    chroma: fix(chromaCoef),
    lightness: fix(lightnessCoef)
  }
}
export function man(h,s=0.5,l=0.5, a=1.0){
  h = h % 360
  s = fence(0, s, 1)
  l = fence(0, l, 1)
  let { chroma, lightness } = correction(h,s,l)
  let weight = Math.sqrt(s * (1 - Math.abs(0.5 - l) * 2))
  let hue = h
  let sat = fence(0,rawmix(s* 100, s * 100 * chroma, weight),100)
  let lit = fence(0,rawmix(l* 100, l * 100 * lightness, weight ),100)
  let alpha = a
  return `hsla(${hue}, ${fix(sat)}%, ${fix(lit)}%, ${fix(alpha)})`
}