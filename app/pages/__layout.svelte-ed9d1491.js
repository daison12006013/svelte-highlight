import{D as t,S as e,i as s,s as n,R as $,j as a,k as r,m as o,n as c,o as l,f as i,v as f,r as p,w as g,d as m,E as u,L as d,e as h,t as b,c as x,a as v,g as w,b as y,F as S,G as k,H as N,I as O,J as H,K as P,M as _,N as j,O as E,P as A,z as G,Q as M,T as B,U as D,V as I,W as L,X as V,Y as W,Z as z,_ as F,$ as J,l as K,B as Q,u as R,a0 as T,a1 as U,h as X}from"../chunks/vendor-916835b6.js";import{r as Y}from"../chunks/singletons-bb9012b7.js";import{b as Z}from"../chunks/paths-45dac81d.js";const q=async function(t){const e=(t?Y.routes.filter((e=>t.some((t=>e[0].test(t))))):Y.routes).map((t=>1!==t.length&&Promise.all(t[1].map((t=>t())))));await Promise.all(e)};const C={subscribe:e=>(()=>{const e=t("__svelte__");return{page:{subscribe:e.page.subscribe},navigating:{subscribe:e.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:e.navigating.subscribe}},session:e.session}})().page.subscribe(e)};function tt(t){let e;return{c(){e=b("GitHub")},l(t){e=w(t,"GitHub")},m(t,s){i(t,e,s)},d(t){t&&m(e)}}}function et(t){let e;return{c(){e=b("NPM")},l(t){e=w(t,"NPM")},m(t,s){i(t,e,s)},d(t){t&&m(e)}}}function st(t){let e,s,n,$;return e=new d({props:{class:"mr-3",href:ot,target:"_blank",$$slots:{default:[tt]},$$scope:{ctx:t}}}),n=new d({props:{class:"mr-3",href:"https://www.npmjs.com/package/"+ct,target:"_blank",$$slots:{default:[et]},$$scope:{ctx:t}}}),{c(){a(e.$$.fragment),s=r(),a(n.$$.fragment)},l(t){o(e.$$.fragment,t),s=c(t),o(n.$$.fragment,t)},m(t,a){l(e,t,a),i(t,s,a),l(n,t,a),$=!0},p(t,s){const $={};1&s&&($.$$scope={dirty:s,ctx:t}),e.$set($);const a={};1&s&&(a.$$scope={dirty:s,ctx:t}),n.$set(a)},i(t){$||(f(e.$$.fragment,t),f(n.$$.fragment,t),$=!0)},o(t){p(e.$$.fragment,t),p(n.$$.fragment,t),$=!1},d(t){g(e,t),t&&m(s),g(n,t)}}}function nt(t){let e,s;return e=new u({props:{$$slots:{default:[st]},$$scope:{ctx:t}}}),{c(){a(e.$$.fragment)},l(t){o(e.$$.fragment,t)},m(t,n){l(e,t,n),s=!0},p(t,s){const n={};1&s&&(n.$$scope={dirty:s,ctx:t}),e.$set(n)},i(t){s||(f(e.$$.fragment,t),s=!0)},o(t){p(e.$$.fragment,t),s=!1},d(t){g(e,t)}}}function $t(t){let e,s,n;return{c(){e=h("span"),s=b("Site last updated "),n=b(lt),this.h()},l(t){e=x(t,"SPAN",{class:!0});var $=v(e);s=w($,"Site last updated "),n=w($,lt),$.forEach(m),this.h()},h(){y(e,"class","label-01 mr-3")},m(t,$){i(t,e,$),S(e,s),S(e,n)},p:k,d(t){t&&m(e)}}}function at(t){let e,s;return e=new u({props:{$$slots:{default:[$t]},$$scope:{ctx:t}}}),{c(){a(e.$$.fragment)},l(t){o(e.$$.fragment,t)},m(t,n){l(e,t,n),s=!0},p(t,s){const n={};1&s&&(n.$$scope={dirty:s,ctx:t}),e.$set(n)},i(t){s||(f(e.$$.fragment,t),s=!0)},o(t){p(e.$$.fragment,t),s=!1},d(t){g(e,t)}}}function rt(t){let e,s,n,u;return e=new $({props:{$$slots:{default:[nt]},$$scope:{ctx:t}}}),n=new $({props:{$$slots:{default:[at]},$$scope:{ctx:t}}}),{c(){a(e.$$.fragment),s=r(),a(n.$$.fragment)},l(t){o(e.$$.fragment,t),s=c(t),o(n.$$.fragment,t)},m(t,$){l(e,t,$),i(t,s,$),l(n,t,$),u=!0},p(t,[s]){const $={};1&s&&($.$$scope={dirty:s,ctx:t}),e.$set($);const a={};1&s&&(a.$$scope={dirty:s,ctx:t}),n.$set(a)},i(t){u||(f(e.$$.fragment,t),f(n.$$.fragment,t),u=!0)},o(t){p(e.$$.fragment,t),p(n.$$.fragment,t),u=!1},d(t){g(e,t),t&&m(s),g(n,t)}}}const ot="https://github.com/metonym/svelte-highlight",ct="svelte-highlight",lt="6/17/2021, 6:35:11 AM";class it extends e{constructor(t){super(),s(this,t,null,rt,n,{})}}function ft(t,e,s){const n=t.slice();return n[9]=e[s][0],n[10]=e[s][1],n}function pt(t){let e,s;return e=new F({props:{icon:J,href:kt,target:"_blank"}}),{c(){a(e.$$.fragment)},l(t){o(e.$$.fragment,t)},m(t,n){l(e,t,n),s=!0},p:k,i(t){s||(f(e.$$.fragment,t),s=!0)},o(t){p(e.$$.fragment,t),s=!1},d(t){g(e,t)}}}function gt(t){let e,s;return e=new D({props:{$$slots:{default:[pt]},$$scope:{ctx:t}}}),{c(){a(e.$$.fragment)},l(t){o(e.$$.fragment,t)},m(t,n){l(e,t,n),s=!0},p(t,s){const n={};256&s&&(n.$$scope={dirty:s,ctx:t}),e.$set(n)},i(t){s||(f(e.$$.fragment,t),s=!0)},o(t){p(e.$$.fragment,t),s=!1},d(t){g(e,t)}}}function mt(t){let e,s,n,$,a;return{c(){e=h("span"),s=b("Svelte Highlight\n    "),n=h("span"),$=b("v"),a=b(Nt),this.h()},l(t){e=x(t,"SPAN",{class:!0,slot:!0});var r=v(e);s=w(r,"Svelte Highlight\n    "),n=x(r,"SPAN",{class:!0,style:!0});var o=v(n);$=w(o,"v"),a=w(o,Nt),o.forEach(m),r.forEach(m),this.h()},h(){y(n,"class","code-01"),I(n,"color","#c6c6c6"),y(e,"class","flex align-baseline"),y(e,"slot","platform")},m(t,r){i(t,e,r),S(e,s),S(e,n),S(n,$),S(n,a)},p:k,d(t){t&&m(e)}}}function ut(t){let e,s,n;return s=new L({}),{c(){e=h("div"),a(s.$$.fragment),this.h()},l(t){e=x(t,"DIV",{slot:!0});var n=v(e);o(s.$$.fragment,n),n.forEach(m),this.h()},h(){y(e,"slot","skip-to-content")},m(t,$){i(t,e,$),l(s,e,null),n=!0},i(t){n||(f(s.$$.fragment,t),n=!0)},o(t){p(s.$$.fragment,t),n=!1},d(t){t&&m(e),g(s)}}}function dt(t){let e,s;return e=new U({props:{"sveltekit:prefetch":!0,href:""+(Z+t[9]),text:t[10],isSelected:t[0].path===t[9]}}),e.$on("click",t[6]),{c(){a(e.$$.fragment)},l(t){o(e.$$.fragment,t)},m(t,n){l(e,t,n),s=!0},p(t,s){const n={};1&s&&(n.isSelected=t[0].path===t[9]),e.$set(n)},i(t){s||(f(e.$$.fragment,t),s=!0)},o(t){p(e.$$.fragment,t),s=!1},d(t){g(e,t)}}}function ht(t){let e,s,n=Object.entries(t[3]),$=[];for(let r=0;r<n.length;r+=1)$[r]=dt(ft(t,n,r));const a=t=>p($[t],1,1,(()=>{$[t]=null}));return{c(){for(let t=0;t<$.length;t+=1)$[t].c();e=K()},l(t){for(let e=0;e<$.length;e+=1)$[e].l(t);e=K()},m(t,n){for(let e=0;e<$.length;e+=1)$[e].m(t,n);i(t,e,n),s=!0},p(t,s){if(11&s){let r;for(n=Object.entries(t[3]),r=0;r<n.length;r+=1){const a=ft(t,n,r);$[r]?($[r].p(a,s),f($[r],1)):($[r]=dt(a),$[r].c(),f($[r],1),$[r].m(e.parentNode,e))}for(Q(),r=n.length;r<$.length;r+=1)a(r);R()}},i(t){if(!s){for(let t=0;t<n.length;t+=1)f($[t]);s=!0}},o(t){$=$.filter(Boolean);for(let e=0;e<$.length;e+=1)p($[e]);s=!1},d(t){T($,t),t&&m(e)}}}function bt(t){let e,s;return e=new V({props:{$$slots:{default:[ht]},$$scope:{ctx:t}}}),{c(){a(e.$$.fragment)},l(t){o(e.$$.fragment,t)},m(t,n){l(e,t,n),s=!0},p(t,s){const n={};259&s&&(n.$$scope={dirty:s,ctx:t}),e.$set(n)},i(t){s||(f(e.$$.fragment,t),s=!0)},o(t){p(e.$$.fragment,t),s=!1},d(t){g(e,t)}}}function xt(t){let e,s;return{c(){e=h("h2"),s=b(t[2])},l(n){e=x(n,"H2",{});var $=v(e);s=w($,t[2]),$.forEach(m)},m(t,n){i(t,e,n),S(e,s)},p(t,e){4&e&&X(s,t[2])},d(t){t&&m(e)}}}function vt(t){let e,s;return e=new u({props:{$$slots:{default:[xt]},$$scope:{ctx:t}}}),{c(){a(e.$$.fragment)},l(t){o(e.$$.fragment,t)},m(t,n){l(e,t,n),s=!0},p(t,s){const n={};260&s&&(n.$$scope={dirty:s,ctx:t}),e.$set(n)},i(t){s||(f(e.$$.fragment,t),s=!0)},o(t){p(e.$$.fragment,t),s=!1},d(t){g(e,t)}}}function wt(t){let e,s,n,u,d;e=new $({props:{$$slots:{default:[vt]},$$scope:{ctx:t}}});const h=t[4].default,b=W(h,t,t[8],null);return u=new it({}),{c(){a(e.$$.fragment),s=r(),b&&b.c(),n=r(),a(u.$$.fragment)},l(t){o(e.$$.fragment,t),s=c(t),b&&b.l(t),n=c(t),o(u.$$.fragment,t)},m(t,$){l(e,t,$),i(t,s,$),b&&b.m(t,$),i(t,n,$),l(u,t,$),d=!0},p(t,s){const n={};260&s&&(n.$$scope={dirty:s,ctx:t}),e.$set(n),b&&b.p&&256&s&&z(b,h,t,t[8],s,null,null)},i(t){d||(f(e.$$.fragment,t),f(b,t),f(u.$$.fragment,t),d=!0)},o(t){p(e.$$.fragment,t),p(b,t),p(u.$$.fragment,t),d=!1},d(t){g(e,t),t&&m(s),b&&b.d(t),t&&m(n),g(u,t)}}}function yt(t){let e,s;return e=new M({props:{padding:!0,$$slots:{default:[wt]},$$scope:{ctx:t}}}),{c(){a(e.$$.fragment)},l(t){o(e.$$.fragment,t)},m(t,n){l(e,t,n),s=!0},p(t,s){const n={};260&s&&(n.$$scope={dirty:s,ctx:t}),e.$set(n)},i(t){s||(f(e.$$.fragment,t),s=!0)},o(t){p(e.$$.fragment,t),s=!1},d(t){g(e,t)}}}function St(t){let e,s,n,$,u,d,h,b,x,v;function w(e){t[5](e)}document.title=e=t[2];let y={"aria-label":"Navigation",platformName:"Svelte Highlight",href:Z+"/",$$slots:{"skip-to-content":[ut],platform:[mt],default:[gt]},$$scope:{ctx:t}};function S(e){t[7](e)}void 0!==t[1]&&(y.isSideNavOpen=t[1]),n=new N({props:y}),O.push((()=>H(n,"isSideNavOpen",w)));let k={$$slots:{default:[bt]},$$scope:{ctx:t}};return void 0!==t[1]&&(k.isOpen=t[1]),d=new P({props:k}),O.push((()=>H(d,"isOpen",S))),x=new _({props:{$$slots:{default:[yt]},$$scope:{ctx:t}}}),{c(){s=r(),a(n.$$.fragment),u=r(),a(d.$$.fragment),b=r(),a(x.$$.fragment)},l(t){j('[data-svelte="svelte-1258swp"]',document.head).forEach(m),s=c(t),o(n.$$.fragment,t),u=c(t),o(d.$$.fragment,t),b=c(t),o(x.$$.fragment,t)},m(t,e){i(t,s,e),l(n,t,e),i(t,u,e),l(d,t,e),i(t,b,e),l(x,t,e),v=!0},p(t,[s]){(!v||4&s)&&e!==(e=t[2])&&(document.title=e);const a={};256&s&&(a.$$scope={dirty:s,ctx:t}),!$&&2&s&&($=!0,a.isSideNavOpen=t[1],E((()=>$=!1))),n.$set(a);const r={};259&s&&(r.$$scope={dirty:s,ctx:t}),!h&&2&s&&(h=!0,r.isOpen=t[1],E((()=>h=!1))),d.$set(r);const o={};260&s&&(o.$$scope={dirty:s,ctx:t}),x.$set(o)},i(t){v||(f(n.$$.fragment,t),f(d.$$.fragment,t),f(x.$$.fragment,t),v=!0)},o(t){p(n.$$.fragment,t),p(d.$$.fragment,t),p(x.$$.fragment,t),v=!1},d(t){t&&m(s),g(n,t),t&&m(u),g(d,t),t&&m(b),g(x,t)}}}const kt="https://github.com/metonym/svelte-highlight",Nt="3.0.0";function Ot(t,e,s){let n,$;A(t,C,(t=>s(0,$=t)));let{$$slots:a={},$$scope:r}=e;G(q);const o={"/":"Getting started","/languages":"Languages","/styles":"Styles"};let c=!1;return t.$$set=t=>{"$$scope"in t&&s(8,r=t.$$scope)},t.$$.update=()=>{1&t.$$.dirty&&s(2,n="/"===$.path?"Svelte Highlight":o[$.path])},[$,c,n,o,a,function(t){c=t,s(1,c)},async()=>{await B(),window.innerWidth<1056&&s(1,c=!1)},function(t){c=t,s(1,c)},r]}export default class extends e{constructor(t){super(),s(this,t,Ot,St,n,{})}}
