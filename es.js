let t=(t,a=1)=>+t.toFixed(a),a=(t,a,h=.5)=>t*(1-h)+a*h,h=(t,a=0,h=1)=>Math.max(Math.min(h,t),a),o=t=>Math.round(t+360)%360;function n(t,h,n=.5){return t=o(t),h=o(h),Math.abs(t-h)>=180&&(t<h?t+=360:h+=360),o(a(t,h,n))}let e=[90,91,94,99,103,104,102,102,100,99,98,97,97,97,99,102,106,110,111,110,105,100,97,97,97,97,97,97,97,97,97,98,98,95,93,91],r=[100,99,94,88,82,75,70,71,72,73,74,75,75,75,74,74,74,73,73,80,89,100,112,123,127,126,121,114,107,100,94,96,98,99,100,100];function M(h,n=1,M=.5,l=1){let u=(h=o(h))/10,$=u-Math.floor(u),i=1-$,f=Math.floor(u),c=Math.ceil(u)%36,s=n*(1-2*Math.abs(.5-M)),p=(e[f]*i+e[c]*$)/100,x=(r[f]*i+r[c]*$)/100;return[t(a(1,Math.pow(p,l),s),4),t(a(1,Math.pow(x,l),s),4)]}function l(a,n=.5,e=.5,r=1,l=1){a=o(a),n=h(n),e=h(e),r=h(r);let[u,$]=M(a,n,e,l);return n=h(100*n*u,0,100),e=h(100*e*$,0,100),1===r?`hsl(${a},${t(n)}%,${t(e)}%)`:`hsla(${a},${t(n)}%,${t(e)}%,${t(r,3)})`}export{M as correction,l as man,n as mix};