import{_ as d,d as m,i as p,r as h,c as a,a as o,e as c,w as u,T as v,n as f,o as t,F as w,b as k,j as M,k as i,t as y,h as g,p as S,g as b}from"./entry-a8a30c8e.mjs";import{u as C}from"./useMenuEl-b3ca2a71.mjs";const E=m({setup(){let e=p(!1);const s=C();function r(){e.value=!e.value,e.value===!0?document.body.style.overflow="hidden":document.body.style.overflow="auto"}return{showMenu:e,menuEl:s,changeShowMenu:r}}}),l=e=>(S("data-v-e9865f40"),e=e(),b(),e),N=l(()=>o("div",{class:"menu-btn__line"},null,-1)),L=l(()=>o("div",{class:"menu-btn__line"},null,-1)),B=l(()=>o("div",{class:"menu-btn__line"},null,-1)),I=[N,L,B],V={class:"menu-nav__ul"},$=i("\u0414\u043E\u043C\u043E\u0439");function j(e,s,r,T,x,F){const _=h("NuxtLink");return t(),a("menu",{class:f({menu:!0,"stop-scroll":e.showMenu})},[o("div",{class:"menu-btn",onClick:s[0]||(s[0]=(...n)=>e.changeShowMenu&&e.changeShowMenu(...n))},I),c(v,{name:"fade"},{default:u(()=>[e.showMenu?(t(),a("nav",{key:0,class:"menu-nav",onClick:s[1]||(s[1]=(...n)=>e.changeShowMenu&&e.changeShowMenu(...n))},[o("ul",V,[c(_,{to:"/",class:"menu-nav__li"},{default:u(()=>[$]),_:1}),(t(!0),a(w,null,k(e.menuEl,n=>(t(),M(_,{key:n.id,to:n.srcLink,class:"menu-nav__li"},{default:u(()=>[i(y(n.title),1)]),_:2},1032,["to"]))),128))])])):g("",!0)]),_:1})],2)}var q=d(E,[["render",j],["__scopeId","data-v-e9865f40"]]);export{q as default};