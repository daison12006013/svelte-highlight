import{S as s,i as r,s as a,e as t,t as e,c as o,a as n,g as c,d as u,f as p,F as i,h as l,k as f,l as d,n as m,C as h}from"./chunks/index-9a4b3482.js";function k(s){let r,a,f=s[1].stack+"";return{c(){r=t("pre"),a=e(f)},l(s){r=o(s,"PRE",{});var t=n(r);a=c(t,f),t.forEach(u)},m(s,t){p(s,r,t),i(r,a)},p(s,r){2&r&&f!==(f=s[1].stack+"")&&l(a,f)},d(s){s&&u(r)}}}function x(s){let r,a,x,E,g,v,P,$=s[1].message+"",b=s[1].stack&&k(s);return{c(){r=t("h1"),a=e(s[0]),x=f(),E=t("p"),g=e($),v=f(),b&&b.c(),P=d()},l(t){r=o(t,"H1",{});var e=n(r);a=c(e,s[0]),e.forEach(u),x=m(t),E=o(t,"P",{});var p=n(E);g=c(p,$),p.forEach(u),v=m(t),b&&b.l(t),P=d()},m(s,t){p(s,r,t),i(r,a),p(s,x,t),p(s,E,t),i(E,g),p(s,v,t),b&&b.m(s,t),p(s,P,t)},p(s,[r]){1&r&&l(a,s[0]),2&r&&$!==($=s[1].message+"")&&l(g,$),s[1].stack?b?b.p(s,r):(b=k(s),b.c(),b.m(P.parentNode,P)):b&&(b.d(1),b=null)},i:h,o:h,d(s){s&&u(r),s&&u(x),s&&u(E),s&&u(v),b&&b.d(s),s&&u(P)}}}function E({error:s,status:r}){return{props:{error:s,status:r}}}function g(s,r,a){let{status:t}=r,{error:e}=r;return s.$$set=s=>{"status"in s&&a(0,t=s.status),"error"in s&&a(1,e=s.error)},[t,e]}export default class extends s{constructor(s){super(),r(this,s,g,x,a,{status:0,error:1})}}export{E as load};
