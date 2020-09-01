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

export function correction(hue){
  const scales = [0.8,0.6,1] // r,g,b
  let p = (hue % 360) / 120 // hue --> [0,3]
  let l = p - Math.floor(p); // decimal distance from Math.floor
  let r = 1 - l; // decimal distance from Math.ceil
  let lum =  fix( scales[Math.floor(p)] * r + scales[Math.ceil(p) % 3] * l ); // Get intermediate value from scales
  return lum;
}

export function hum(h,s,l){
  let coefficient = correction(h)
  return `hsl(${h}, ${fix(s * coefficient)}, ${fix(l * coefficient)})`
}