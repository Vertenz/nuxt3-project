import{u as i}from"./states-e0cfe737.mjs";import{_ as l,d as c,f as p,c as h,b as s,t as g,p as b,g as m,o as f}from"./entry-bdb9b50d.mjs";const v=c({setup(){async function e(o,t){return new Promise(u=>{setTimeout(()=>{t++,o.style.background=`linear-gradient(-70deg, var(--block-bg) ${t}%, rgba(0, 0, 0, 0) 31%), url('/bg1.jpg')`,o.style.backgroundSize="cover",o.style.backgroundPosition="50% 21%",o.style.backgroundRepeat="no-repeat",u(t)},35)})}async function r(){const o=document.getElementById("header");let t=-10;for(;t<30;)t=await e(o,t).then(n=>n)}p(r);const d=()=>{document.getElementById("header").classList.toggle("small-height"),document.getElementById("arrow-box").classList.toggle("top-position")};return{title:i(),openHeader:d}}}),a=e=>(b("data-v-3af6ba33"),e=e(),m(),e),x={class:"header",id:"header"},w={class:"header__text"},y=a(()=>s("h1",{class:"header__text_h"},"\u041F\u0440\u0438\u0432\u0435\u0442! \u042D\u0442\u043E ",-1)),B=a(()=>s("p",null,"\u0442\u044B \u0441\u0435\u0439\u0447\u0430\u0441 \u0432 \u0440\u0430\u0437\u0434\u0435\u043B\u0435:",-1)),k={class:"header__text_h2"},I=a(()=>s("div",{class:"line"},null,-1)),E=a(()=>s("div",{class:"arrow-box__el arrow-box__el_left"},null,-1)),S=a(()=>s("div",{class:"arrow-box__el arrow-box__el_right"},null,-1)),$=[E,S];function H(e,r,d,_,o,t){return f(),h("header",x,[s("div",w,[y,B,s("h2",k,g(e.title),1)]),I,s("div",{class:"arrow-box",id:"arrow-box",onClick:r[0]||(r[0]=(...n)=>e.openHeader&&e.openHeader(...n))},$)])}var D=l(v,[["render",H],["__scopeId","data-v-3af6ba33"]]);export{D as default};
