let fix = (n) => +n.toFixed(2)

export function mix(zero, one, ratio = 0.5){
  zero = zero % 360
  one = one % 360
  if(Math.abs(zero - one) >= 180){
    // if they're closer wrapped, wrap the lower across 360
    if(zero < one){
      zero = zero + 360
    } else {
      one = one + 360
    }
  }
  // Perform ratio, and mod by 360 in case of wrap
  return Math.round((zero * (1-ratio) + one * ratio)) % 360
}

let scores = [
  {
    hue: 15,
    chroma: 74,
    lightness: 56
  },
  {
    hue: 45,
    chroma: 46,
    lightness: 81
  },
  {
    hue: 75,
    chroma: 51,
    lightness: 93
  },
  {
    hue: 105,
    chroma: 60,
    lightness: 87
  },
  {
    hue: 135,
    chroma: 59,
    lightness: 87
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
    lightness: 39
  },
  {
    hue: 255,
    chroma: 60,
    lightness: 35
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
  let p = (hue % 360) / 30 - 0.5 // hue --> [0.5, 12.5] (because we have "middle" values (starts at 15, 30 increments))
  let l = p - Math.floor(p); // decimal distance from Math.floor
  let r = 1 - l; // decimal distance from Math.ceil
  let left = scores[(Math.floor(p) + 12) % 12]
  let right = scores[(Math.ceil(p)) % 12]
  
  // using 210 hue as base (where 49 and 56 come from)
  return { 
    chroma: fix(49 / (left.chroma * l + right.chroma * r)),
    lightness: fix(56 / (left.lightness * l + right.lightness * r))
  }
}
export function man(h,s,l){
  let { chroma, lightness } = correction(h)
  return `hsl(${h}, ${fix(Math.min(100,s * chroma))}%, ${fix(Math.min(l * lightness))}%)`
}