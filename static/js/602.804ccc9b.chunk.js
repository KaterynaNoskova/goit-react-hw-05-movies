"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[602],{602:function(e,t,r){r.r(t),r.d(t,{default:function(){return v}});var n=r(861),a=r(439),u=r(757),c=r.n(u),s=r(791),o=r(87),i=r(689),l=r(340),p=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.Z.get("https://api.themoviedb.org/3/search/movie",{params:{api_key:"1abb76271df016504764626124badd3a",query:t}});case 3:return r=e.sent,e.abrupt("return",r.data.results);case 7:throw e.prev=7,e.t0=e.catch(0),console.error("Error:",e.t0.message),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),f=r(184),h=function(e){var t=e.onSubmit,r=(0,s.useState)(""),n=(0,a.Z)(r,2),u=n[0],c=n[1];return(0,f.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(u),c()},children:[(0,f.jsx)("input",{type:"text",value:u,onChange:function(e){return c(e.target.value)}}),(0,f.jsx)("button",{type:"submit",children:"Search"})]})},v=function(){var e,t=(0,o.lr)(),r=(0,a.Z)(t,2),u=r[0],l=r[1],v=null!==(e=u.get("searchQuery"))&&void 0!==e?e:"",m=(0,s.useState)([]),d=(0,a.Z)(m,2),x=d[0],b=d[1],k=(0,i.TH)(),w=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p(t);case 3:r=e.sent,b(r),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("Error in movies:",e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();return(0,s.useEffect)((function(){""!==v&&w(v)}),[v]),(0,f.jsxs)("div",{children:[(0,f.jsx)(h,{value:v,onSubmit:function(e){""!==e&&(l({searchQuery:e}),w(e))}}),(0,f.jsx)("ul",{children:x.map((function(e){var t=e.id,r=e.title;return(0,f.jsx)("li",{children:(0,f.jsx)(o.rU,{to:"".concat(t),state:{from:k},children:r})},t)}))})]})}}}]);
//# sourceMappingURL=602.804ccc9b.chunk.js.map