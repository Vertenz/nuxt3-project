import{_ as B,d as v,c as b,b as s,t as o,o as $}from"./entry-c82175cc.mjs";const N=v({name:"BaseNewsBlock",props:{news:Object},setup(e){return{props:e}}}),j={class:"news-block"},C=["href"],E={class:"news-header"},D={class:"news-header__h"},F={class:"news-header__type"},O={class:"text-block"},S=["src","alt"],V={class:"text-block__description"},q={class:"news-footer"},z=["src"];function A(e,G,H,I,J,K){var t,n,r,c,a,p,l,_,i,d,h,u,w,f,g,k,y,m;return $(),b("div",j,[s("a",{href:(n=(t=e.props)==null?void 0:t.news)==null?void 0:n.link,target:"_blank",rel:"noopener noreferrer"},[s("header",E,[s("h4",D,o((c=(r=e.props)==null?void 0:r.news)==null?void 0:c.title),1),s("p",F,o((p=(a=e.props)==null?void 0:a.news)==null?void 0:p.type),1)]),s("div",O,[s("img",{src:"../static/news/"+((_=(l=e.props)==null?void 0:l.news)==null?void 0:_.technology)+".svg",alt:`\u0441\u0442\u0430\u0442\u044C\u044F \u043E ${(d=(i=e.props)==null?void 0:i.news)==null?void 0:d.technology}`,class:"text-block__img"},null,8,S),s("p",V,o((u=(h=e.props)==null?void 0:h.news)==null?void 0:u.description),1)]),s("footer",q,[s("p",null,"\u0422\u0435\u0433\u0438: "+o((f=(w=e.props)==null?void 0:w.news)==null?void 0:f.technology)+", "+o((k=(g=e.props)==null?void 0:g.news)==null?void 0:k.type),1),s("img",{src:`/news/${(m=(y=e.props)==null?void 0:y.news)==null?void 0:m.technology}.svg`,alt:"test1"},null,8,z)])],8,C)])}var M=B(N,[["render",A]]);export{M as default};