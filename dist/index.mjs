let fix = (n,x=1) => +n.toFixed(x);
let rawmix = (x, y, ratio=0.5) => x * (1-ratio) + y * ratio;
let fence = (x,min=0,max=1) => Math.max(Math.min(max,x),min);
let correct_hue=(h)=>Math.round(h+360)%360;

function mix(x, y, ratio = 0.5){
  x = correct_hue(x);
  y = correct_hue(y);
  if(Math.abs(x - y) >= 180){
    // if they're closer wrapped, wrap the lower across 360
    if(x < y){
      x = x + 360;
    } else {
      y = y + 360;
    }
  }
  // Perform ratio, and mod by 360 in case of wrap
  return correct_hue(rawmix(x,y,ratio))
}

// Generated from HSL images on https://www.hsluv.org/comparison/
let chroma_scores = [90,91,94,99,103,104,102,102,100,99,98,97,97,97,99,102,106,110,111,110,105,100,97,97,97,97,97,97,97,97,97,98,98,95,93,91];
let lightness_scores = [100,99,94,88,82,75,70,71,72,73,74,75,75,75,74,74,74,73,73,80,89,100,112,123,127,126,121,114,107,100,94,96,98,99,100,100];

function est(arr, p){
  return rawmix(arr[Math.floor(p)], arr[Math.ceil(p)%36], p-Math.floor(p))
}

// Correction values to multiply chroma / lightness by based on hue
function correction(h,s=1,l=0.5){
  h = correct_hue(h);
  let p = h / 10;
  let weight = s * (1 - Math.abs(0.5 - l) * 2);
  let chroma = est(chroma_scores, p) / 100;
  let lightness = est(lightness_scores, p) / 100;
  return [
    fix(rawmix(1,chroma,weight), 4),
    fix(rawmix(1,lightness,weight), 4)
  ]
}
function hueman(h,s=0.5,l=0.5, a=1.0){
  // correct inputs
  h = correct_hue(h);
  s = fence(s);
  l = fence(l);
  a = fence(a);
  // calculate correction coefficients
  let [chroma, lightness] = correction(h,s,l);
  // Apply coefficients and convert [0,1] -> [0%,100%]
  s = fence(s*100*chroma,0,100);
  l = fence(l*100*lightness,0,100);
  return a===1 ? `hsl(${h},${fix(s)}%,${fix(l)}%)` : `hsla(${h},${fix(s)}%,${fix(l)}%,${fix(a,3)})`
}

let total = hueman.bind({});
Object.assign(total, { correction, mix });

export default total;
export { correction, hueman, mix };
