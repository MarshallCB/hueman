!function(e,h){"object"==typeof exports&&"undefined"!=typeof module?h(exports):"function"==typeof define&&define.amd?define(["exports"],h):h((e=e||self).hueman={})}(this,(function(e){"use strict";let h=e=>+e.toFixed(2),t=(e,h,t)=>e*(1-t)+h*t,s=(e,h,t)=>Math.max(Math.min(t,h),e);let n=[{hue:15,chroma:74,lightness:56},{hue:45,chroma:46,lightness:81},{hue:75,chroma:51,lightness:93},{hue:105,chroma:60,lightness:87},{hue:135,chroma:59,lightness:87},{hue:165,chroma:39,lightness:89},{hue:195,chroma:38,lightness:73},{hue:225,chroma:60,lightness:39},{hue:255,chroma:60,lightness:35},{hue:285,chroma:60,lightness:49},{hue:315,chroma:58,lightness:56},{hue:345,chroma:74,lightness:53}];function o(e){let t=(e%=360)/30-.5,s=t-Math.floor(t),o=1-s,a=n[(Math.floor(t)+12)%12],r=n[Math.ceil(t)%12],i=a.chroma*s+r.chroma*o,u=a.lightness*s+r.lightness*o,c=(a.hue,r.hue,Math.sqrt(49/i)),l=Math.sqrt(56/u);return{chroma:h(c),lightness:h(l)}}e.correction=o,e.man=function(e,n=.5,a=.5,r=1){e%=360,n=s(0,n,1),a=s(0,a,1);let{chroma:i,lightness:u}=o(e),c=1-Math.abs(1-n)*(1-2*Math.abs(.5-a)),l=e,m=s(0,t(100*n,100*n*i,c),100),f=s(0,t(100*a,100*a*u,c),100),g=r;return`hsla(${l}, ${h(m)}%, ${h(f)}%, ${h(g)})`},e.mix=function(e,h,s=.5){return e%=360,h%=360,Math.abs(e-h)>=180&&(e<h?e+=360:h+=360),Math.round(t(e,h,s))%360},Object.defineProperty(e,"__esModule",{value:!0})}));
