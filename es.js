let t=(t,a=1)=>+t.toFixed(a),a=(t,a,e=.5)=>t*(1-e)+a*e,e=t=>Math.max(Math.min(1,t),0),n=(t,a=360)=>Math.round(t+a)%a;function r(t,e,r=.5){return t=n(t),e=n(e),Math.abs(t-e)>=180&&(t<e?t+=360:e+=360),n(a(t,e,r))}let h=[[90,91,94,99,103,104,102,102,100,99,98,97,97,97,99,102,106,110,111,110,105,100,97,97,97,97,97,97,97,97,97,98,98,95,93,91],[100,99,94,88,82,75,70,71,72,73,74,75,75,75,74,74,74,73,73,80,89,100,112,123,127,126,121,114,107,100,94,96,98,99,100,100]];let l=(e,r=1,l=.5)=>h.map(h=>{return t(a(1,(o=h,u=n(e)/10,M=Math.floor(u),a(o[M],o[(M+1)%o.length],u-M)/100),r*(1-2*Math.abs(.5-l))),4);var o,u,M});function o(a,r=.5,h=.5,o=1){a=n(a),r=e(r),h=e(h),o=e(o);let[u,M]=l(a,r,h),$=`${a},${t(100*e(r*u))}%,${t(100*e(h*M))}%`;return 1===o?`hsl(${$})`:`hsla(${$},${t(o,3)})`}export{l as correction,o as hueman,r as mix};
