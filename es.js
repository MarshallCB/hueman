let t=(t,a=1)=>+t.toFixed(a),a=(t,a,h=.5)=>t*(1-h)+a*h,h=t=>Math.max(Math.min(1,t),0),r=t=>Math.round(t+360)%360,e=(t,h,e=.5)=>(t=r(t),h=r(h),Math.abs(t-h)>=180&&(t<h?t+=360:h+=360),r(a(t,h,e))),n=[[90,91,94,99,103,104,102,102,100,99,98,97,97,97,99,102,106,110,111,110,105,100,97,97,97,97,97,97,97,97,97,98,98,95,93,91],[100,99,94,88,82,75,70,71,72,73,74,75,75,75,74,74,74,73,73,80,89,100,112,123,127,126,121,114,107,100,94,96,98,99,100,100]],l=(h,e=1,l=.5)=>n.map(n=>{return t(a(1,(o=n,M=r(h)/10,$=Math.floor(M),a(o[$],o[($+1)%o.length],M-$)/100),e*(1-2*Math.abs(.5-l))),4);var o,M,$});function o(a,e=.5,n=.5,o=1,M){a=r(a),e=h(e),n=h(n),o=h(o);let[$,s]=l(a,e,n);return M=`${a},${t(100*h(e*$))}%,${t(100*h(n*s))}%`,1===o?`hsl(${M})`:`hsla(${M},${t(o,3)})`}export{l as correction,o as hueman,e as mix};
