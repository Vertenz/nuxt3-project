import{u as n}from"./states-baed341b.mjs";import{u as t,_ as a,d as r,r as o,c as E,F,b as l,o as B,e as C}from"./entry-a8a30c8e.mjs";import c from"./BaseTaskBlock-4873acd4.mjs";const i=()=>t("task",()=>[{id:1,title:"\u0422\u0438\u043F\u044B \u0434\u0430\u043D\u043D\u044B \u0432 JavaScript",description:"\u041F\u0435\u0440\u0435\u0447\u0438\u043B\u0438\u0441\u0442\u044C \u0432\u0441\u0435 \u0442\u0438\u043F\u044B \u0434\u0430\u043D\u043D\u044B\u0445 \u0438 \u0438\u0445 \u043E\u0442\u043B\u0438\u0447\u0438\u044F",answer:`\u0412 JavaScript \u0435\u0441\u0442\u044C 8 \u043E\u0441\u043D\u043E\u0432\u043D\u044B\u0445 \u0442\u0438\u043F\u043E\u0432.
        number \u0434\u043B\u044F \u043B\u044E\u0431\u044B\u0445 \u0447\u0438\u0441\u0435\u043B: \u0446\u0435\u043B\u043E\u0447\u0438\u0441\u043B\u0435\u043D\u043D\u044B\u0445 \u0438\u043B\u0438 \u0447\u0438\u0441\u0435\u043B \u0441 \u043F\u043B\u0430\u0432\u0430\u044E\u0449\u0435\u0439 \u0442\u043E\u0447\u043A\u043E\u0439; \u0446\u0435\u043B\u043E\u0447\u0438\u0441\u043B\u0435\u043D\u043D\u044B\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u044B \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D\u043E\u043C \xB1(253-1).
        bigint \u0434\u043B\u044F \u0446\u0435\u043B\u044B\u0445 \u0447\u0438\u0441\u0435\u043B \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u043B\u044C\u043D\u043E\u0439 \u0434\u043B\u0438\u043D\u044B.
        string \u0434\u043B\u044F \u0441\u0442\u0440\u043E\u043A. \u0421\u0442\u0440\u043E\u043A\u0430 \u043C\u043E\u0436\u0435\u0442 \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0442\u044C \u043D\u043E\u043B\u044C \u0438\u043B\u0438 \u0431\u043E\u043B\u044C\u0448\u0435 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432, \u043D\u0435\u0442 \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u043E\u0433\u043E \u0441\u0438\u043C\u0432\u043E\u043B\u044C\u043D\u043E\u0433\u043E \u0442\u0438\u043F\u0430.
        boolean \u0434\u043B\u044F true/false.
        null \u0434\u043B\u044F \u043D\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043D\u044B\u0445 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0439 \u2013 \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u044B\u0439 \u0442\u0438\u043F, \u0438\u043C\u0435\u044E\u0449\u0438\u0439 \u043E\u0434\u043D\u043E \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 null.
        undefined \u0434\u043B\u044F \u043D\u0435\u043F\u0440\u0438\u0441\u0432\u043E\u0435\u043D\u043D\u044B\u0445 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0439 \u2013 \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u044B\u0439 \u0442\u0438\u043F, \u0438\u043C\u0435\u044E\u0449\u0438\u0439 \u043E\u0434\u043D\u043E \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 undefined.
        object \u0434\u043B\u044F \u0431\u043E\u043B\u0435\u0435 \u0441\u043B\u043E\u0436\u043D\u044B\u0445 \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440 \u0434\u0430\u043D\u043D\u044B\u0445.
        symbol \u0434\u043B\u044F \u0443\u043D\u0438\u043A\u0430\u043B\u044C\u043D\u044B\u0445 \u0438\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440\u043E\u0432.
        \u041E\u043F\u0435\u0440\u0430\u0442\u043E\u0440 typeof \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u043D\u0430\u043C \u0443\u0432\u0438\u0434\u0435\u0442\u044C, \u043A\u0430\u043A\u043E\u0439 \u0442\u0438\u043F \u0434\u0430\u043D\u043D\u044B\u0445 \u0441\u043E\u0445\u0440\u0430\u043D\u0451\u043D \u0432 \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0439.
        
        \u0418\u043C\u0435\u0435\u0442 \u0434\u0432\u0435 \u0444\u043E\u0440\u043C\u044B: typeof x \u0438\u043B\u0438 typeof(x).
        \u0412\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0441\u0442\u0440\u043E\u043A\u0443 \u0441 \u0438\u043C\u0435\u043D\u0435\u043C \u0442\u0438\u043F\u0430. \u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, "string".
        \u0414\u043B\u044F null \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442\u0441\u044F "object" \u2013 \u044D\u0442\u043E \u043E\u0448\u0438\u0431\u043A\u0430 \u0432 \u044F\u0437\u044B\u043A\u0435, \u043D\u0430 \u0441\u0430\u043C\u043E\u043C \u0434\u0435\u043B\u0435 \u044D\u0442\u043E \u043D\u0435 \u043E\u0431\u044A\u0435\u043A\u0442. 

        \u0412 TypeScript \u0438\u043C\u0435\u044E\u0442\u0441\u044F \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0435 \u0431\u0430\u0437\u043E\u0432\u044B\u0435 \u0442\u0438\u043F\u044B:

            boolean: \u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 true \u0438\u043B\u0438 false

            number: \u0447\u0438\u0441\u043B\u043E\u0432\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435

            string: \u0441\u0442\u0440\u043E\u043A\u0438

            Array: \u043C\u0430\u0441\u0441\u0438\u0432\u044B

            \u043A\u043E\u0440\u0442\u0435\u0436\u0438

            Enum: \u043F\u0435\u0440\u0435\u0447\u0438\u0441\u043B\u0435\u043D\u0438\u044F

            Any: \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u043B\u044C\u043D\u044B\u0439 \u0442\u0438\u043F

            Symbol

            null \u0438 undefined: \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044E\u0442 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F\u043C null \u0438 undefined \u0432 javascript

            Never: \u0442\u0430\u043A\u0436\u0435 \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0438\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F \u0438 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F \u0432 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043C\u043E\u0433\u043E \u0442\u0438\u043F\u0430 \u0444\u0443\u043D\u043A\u0446\u0438\u0439, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0433\u0435\u043D\u0435\u0440\u0438\u0440\u0443\u044E\u0442 \u0438\u043B\u0438 \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u044E\u0442 \u043E\u0448\u0438\u0431\u043A\u0443
        `,code:!1}]),p=r({components:{BaseTaskBlock:c},setup(){const u=n();return u.value="\u0417\u0430\u0434\u0430\u0447\u043A\u0438 \u043F\u043E JS",{arrTasks:i()}}});function d(u,D,A,m,f,k){const s=o("BaseTaskBlock");return B(),E("div",null,[(B(!0),E(F,null,l(u.arrTasks,e=>(B(),E("div",{key:e.id},[C(s,{task:e},null,8,["task"])]))),128))])}var T=a(p,[["render",d]]);export{T as default};