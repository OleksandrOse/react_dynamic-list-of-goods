(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c=n(5),o=n.n(c),r=n(3),a=n(6),s=n(2),u=n.n(s),i=n(1),d=n.n(i),l=(n(12),n(0)),b=d.a.memo((function(t){var e=t.goods;return Object(l.jsx)("ul",{children:e.map((function(t){return Object(l.jsx)("li",{"data-cy":"good",style:{color:t.color},children:t.name},t.id)}))})}));function f(){return fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then((function(t){return t.json()}))}var j=function(){var t=Object(i.useState)([]),e=Object(a.a)(t,2),n=e[0],c=e[1],o=Object(i.useCallback)(Object(r.a)(u.a.mark((function t(){var e;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f();case 2:e=t.sent,c(e);case 4:case"end":return t.stop()}}),t)}))),[]),s=Object(i.useCallback)(Object(r.a)(u.a.mark((function t(){var e;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f().then((function(t){return t.sort((function(t,e){return t.name.localeCompare(e.name)})).slice(0,5)}));case 2:e=t.sent,c(e);case 4:case"end":return t.stop()}}),t)}))),[]),d=Object(i.useCallback)(Object(r.a)(u.a.mark((function t(){var e;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f().then((function(t){return t.filter((function(t){return"red"===t.color}))}));case 2:e=t.sent,c(e);case 4:case"end":return t.stop()}}),t)}))),[]);return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("h1",{children:"Dynamic list of Goods"}),Object(l.jsx)("button",{type:"button","data-cy":"all-button",onClick:o,children:"Load all goods"}),Object(l.jsx)("button",{type:"button","data-cy":"first-five-button",onClick:s,children:"Load 5 first goods"}),Object(l.jsx)("button",{type:"button","data-cy":"red-button",onClick:d,children:"Load red goods"}),Object(l.jsx)(b,{goods:n})]})};o.a.render(Object(l.jsx)(j,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.37202a1d.chunk.js.map