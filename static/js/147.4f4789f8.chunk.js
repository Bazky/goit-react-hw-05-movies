"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[147],{147:function(e,t,n){function r(e,t,n,r,a,c,o){try{var u=e[c](o),i=u.value}catch(s){return void n(s)}u.done?t(i):Promise.resolve(i).then(r,a)}n.r(t),n.d(t,{default:function(){return d}});var a=n(439),c=n(757),o=n.n(c),u=n(791),i=n(243),s=n(87),l=n(184);function d(){var e=(0,u.useState)(""),t=(0,a.Z)(e,2),n=t[0],c=t[1],d=(0,u.useState)([]),h=(0,a.Z)(d,2),p=h[0],f=h[1],v=function(){var e,t=(e=o().mark((function e(t){var r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("https://api.themoviedb.org/3/search/movie?api_key=".concat("718f2a56dca2d55e08ad2e8b7789586d","&query=").concat(n,"&include_adult=false&language=en-US&page=1"));case 3:r=e.sent,f(r.data.results),window.history.replaceState(null,"","/movies?query=".concat(n)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error("B\u0142\u0105d podczas wyszukiwania film\xf3w:",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})),function(){var t=this,n=arguments;return new Promise((function(a,c){var o=e.apply(t,n);function u(e){r(o,a,c,u,i,"next",e)}function i(e){r(o,a,c,u,i,"throw",e)}u(void 0)}))});return function(e){return t.apply(this,arguments)}}();return(0,l.jsxs)("div",{children:[(0,l.jsx)("h1",{children:"Wyszukaj filmy"}),(0,l.jsx)("input",{type:"text",placeholder:"Wpisz s\u0142owo kluczowe",value:n,onChange:function(e){return c(e.target.value)}}),(0,l.jsx)("button",{onClick:function(){v(),c("")},children:"Szukaj"}),(0,l.jsx)("ul",{children:p.map((function(e){return(0,l.jsx)("li",{children:(0,l.jsx)(s.rU,{to:"/movies/".concat(e.id),children:e.title})},e.id)}))})]})}}}]);
//# sourceMappingURL=147.4f4789f8.chunk.js.map