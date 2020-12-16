let fix = (n,x=1) => +n.toFixed(x)
let rawmix = (x, y, ratio=0.5) => x * (1-ratio) + y * ratio
let fence = (x) => Math.max(Math.min(1,x),0)
let correct_hue=(h)=>Math.round(h+360)%360

let mix = (x, y, ratio = 0.5)=>{
  x = correct_hue(x)
  y = correct_hue(y)
  if(Math.abs(x - y) >= 180){
    // if they're closer wrapped, wrap the lower across 360
    if(x < y){
      x = x + 360
    } else {
      y = y + 360
    }
  }
  // Perform ratio, and mod by 360 in case of wrap
  return correct_hue(rawmix(x,y,ratio))
}

// Generated from HSL images on https://www.hsluv.org/comparison/
let scores = [
  [90,91,94,99,103,104,102,102,100,99,98,97,97,97,99,102,106,110,111,110,105,100,97,97,97,97,97,97,97,97,97,98,98,95,93,91],
  [100,99,94,88,82,75,70,71,72,73,74,75,75,75,74,74,74,73,73,80,89,100,112,123,127,126,121,114,107,100,94,96,98,99,100,100]
]

let est = (arr,p,x)=>{
  x=Math.floor(p)
  return rawmix(arr[x], arr[(x+1)%arr.length], p-x)
}

// Correction values to multiply chroma / lightness by based on hue
// let correction = (h,s=1,l=0.5) => scores.map(scoreArray => 
//   fix(rawmix(1,est(scoreArray, correct_hue(h) / 10) / 100,s * (1 - Math.abs(0.5 - l) * 2)), 4)
// )

let correction = (h,s=1,l=0.5) => scores.map(scoreArray => {
  let ratio = s * (1 - Math.abs(0.5 - l) * 2)
  let offset = est(scoreArray, correct_hue(h) / 10) / 100
  let x = rawmix(1,offset, ratio)
  return fix(x,4)
})

function hueman (h,s=0.5,l=0.5, a=1.0,mid){
  // correct inputs
  h = correct_hue(h)
  s = fence(s)
  l = fence(l)
  a = fence(a)
  // calculate correction coefficients
  let [chroma, lightness] = correction(h,s,l)
  // Apply coefficients and convert [0,1] -> [0%,100%]
  
  mid=`${h},${fix(fence(s*chroma)*100)}%,${fix(fence(l*lightness)*100)}%`
  return a===1 ? `hsl(${mid})` : `hsla(${mid},${fix(a,3)})`
}

export { hueman, mix, correction };
