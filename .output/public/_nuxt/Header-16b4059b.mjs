import{u as l}from"./states-baed341b.mjs";import{_ as u,d as c,f as p,c as h,a as s,t as g,p as m,g as b,o as v}from"./entry-a8a30c8e.mjs";const x=c({setup(){async function e(o,t){return new Promise(i=>{setTimeout(()=>{t++,o.style.background=`linear-gradient(-70deg, var(--block-bg) ${t}%, rgba(0, 0, 0, 0) 31%), url('/bg1.jpg')`,o.style.backgroundSize="cover",o.style.backgroundPosition="50% 21%",o.style.backgroundRepeat="no-repeat",i(t)},35)})}async function r(){const o=document.getElementById("header");let t=-10;for(;t<30;)t=await e(o,t).then(n=>n)}p(r);const d=()=>{document.getElementById("header").classList.toggle("small-height"),document.getElementById("arrow-box").classList.toggle("top-position")};return{title:l(),openHeader:d}}}),a=e=>(m("data-v-747779ea"),e=e(),b(),e),w={class:"header",id:"header"},y={class:"header__text"},f=a(()=>s("h1",{class:"header__text_h"},"\u041F\u0440\u0438\u0432\u0435\u0442!",-1)),B=a(()=>s("p",null,"\u0442\u044B \u0441\u0435\u0439\u0447\u0430\u0441 \u0432 \u0440\u0430\u0437\u0434\u0435\u043B\u0435:",-1)),k={class:"header__text_h2"},I=a(()=>s("div",{class:"line"},null,-1)),S=a(()=>s("div",{class:"arrow-box__el arrow-box__el_left"},null,-1)),$=a(()=>s("div",{class:"arrow-box__el arrow-box__el_right"},null,-1)),E=[S,$];function H(e,r,d,_,o,t){return v(),h("header",w,[s("div",y,[f,B,s("h2",k,g(e.title),1)]),I,s("div",{class:"arrow-box",id:"arrow-box",onClick:r[0]||(r[0]=(...n)=>e.openHeader&&e.openHeader(...n))},E)])}var L=u(x,[["render",H],["__scopeId","data-v-747779ea"]]);export{L as default};
