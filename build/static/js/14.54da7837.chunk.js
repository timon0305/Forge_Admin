(this.webpackJsonpForgePC=this.webpackJsonpForgePC||[]).push([[14],{752:function(e,t,a){"use strict";function n(e,t,a,n,r,c,l){try{var s=e[c](l),m=s.value}catch(i){return void a(i)}s.done?t(m):Promise.resolve(m).then(n,r)}function r(e){return function(){var t=this,a=arguments;return new Promise((function(r,c){var l=e.apply(t,a);function s(e){n(l,r,c,s,m,"next",e)}function m(e){n(l,r,c,s,m,"throw",e)}s(void 0)}))}}a.d(t,"a",(function(){return r}))},753:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(205);function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var a=[],n=!0,r=!1,c=void 0;try{for(var l,s=e[Symbol.iterator]();!(n=(l=s.next()).done)&&(a.push(l.value),!t||a.length!==t);n=!0);}catch(m){r=!0,c=m}finally{try{n||null==s.return||s.return()}finally{if(r)throw c}}return a}}(e,t)||Object(n.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},785:function(e,t,a){"use strict";a.r(t);var n=a(43),r=a.n(n),c=a(752),l=a(753),s=a(1),m=a.n(s),i=a(74),o=a(751),u=a(206),E=a(91),f=a(54),p=["image","name","capacity","gbprice","type","cache","factor","interface","price","actions"],d=function(){return m.a.createElement("div",{className:"d-flex justify-content-center",style:{height:"100vh",flexDirection:"row",alignItems:"center"}},m.a.createElement("div",{className:"spinner-border text-primary",role:"status",style:{width:100,height:100}},m.a.createElement("span",{className:"sr-only"},"Loading...")))};t.default=Object(i.c)((function(e){return{isLoading:1===e.loadingIndicator.counter}}),(function(e){return{callApi:function(t){for(var a=arguments.length,n=new Array(a>1?a-1:0),r=1;r<a;r++)n[r-1]=arguments[r];return new Promise((function(a,r){e(u.a.callApi.apply(u.a,[t,a].concat(n)),r)}))},callApi2:function(t,a){for(var n=arguments.length,r=new Array(n>2?n-2:0),c=2;c<n;c++)r[c-2]=arguments[c];return e(u.a.callApi.apply(u.a,[t,a].concat(r)))},toast:function(t,a){return e(Object(f.b)(t,a))}}}))((function(e){var t=Object(s.useState)([]),a=Object(l.a)(t,2),n=a[0],i=a[1],u=Object(s.useState)(null),f=Object(l.a)(u,2),g=f[0],h=f[1],v=Object(s.useState)(!1),x=Object(l.a)(v,2),N=x[0],y=x[1],w=function(){var t=Object(c.a)(r.a.mark((function t(){var a,n,c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.callApi(E.a.getStorage);case 3:a=t.sent,n=a.ok,c=a.data,n&&(i(c.storage),h(c.storage[0])),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.log("Page::Users","FETCH_USER_ERROR",t.t0.message);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(){return t.apply(this,arguments)}}(),b=function(e){y(e)};return Object(s.useEffect)((function(){w()}),[]),m.a.createElement(m.a.Fragment,null,m.a.createElement(o.R,null,m.a.createElement(o.m,{xs:"12",lg:"12"},!1===e.isLoading?m.a.createElement(o.h,null,m.a.createElement(o.l,null,"Storage"),m.a.createElement(o.i,null,m.a.createElement(o.p,{items:n,fields:p,itemsPerPage:10,pagination:!0,scopedSlots:{image:function(e){return m.a.createElement("td",{className:"text-left v-align"},m.a.createElement("div",{className:"c-avatar"},m.a.createElement("img",{src:e.image,className:"c-avatar-img",style:{borderRadius:"none!important"},alt:"avatar"})))},name:function(e){return m.a.createElement("td",{className:"v-align"},m.a.createElement("div",{className:"h6"},e.name))},capacity:function(e){return m.a.createElement("td",{className:"v-align"},m.a.createElement("div",{className:"h6"},e.capacity))},gbprice:function(e){return m.a.createElement("td",{className:"v-align"},m.a.createElement("div",{className:"h6"},e.gbprice))},type:function(e){return m.a.createElement("td",{className:"v-align"},m.a.createElement("div",{className:"h6"},e.type))},cache:function(e){return m.a.createElement("td",{className:"v-align"},m.a.createElement("div",{className:"h6"},e.cache))},factor:function(e){return m.a.createElement("td",{className:"v-align"},m.a.createElement("div",{className:"h6"},e.factor))},interface:function(e){return m.a.createElement("td",{className:"v-align"},m.a.createElement("div",{className:"h6"},e.interface))},price:function(e){return m.a.createElement("td",{className:"v-align"},m.a.createElement("div",{className:"h6"},e.price))},actions:function(e){return m.a.createElement("td",{className:"v-align"},m.a.createElement(o.e,{active:!0,variant:"ghost",color:"info","aria-pressed":"true",size:"sm",className:"btn-pill",onClick:function(){return h(e),void b(!0)}},"View"),"\xa0",m.a.createElement(o.e,{active:!0,variant:"ghost",color:"success","aria-pressed":"true",size:"sm",className:"btn-pill",onClick:function(){h(e)}},"Add"),"\xa0")}}}))):m.a.createElement(d,null))),g&&m.a.createElement(m.a.Fragment,null,m.a.createElement(o.L,{show:N,onClose:function(){return b(!1)},size:"xl",color:"info"},m.a.createElement(o.O,{closeButton:!0},m.a.createElement(o.P,null,g.name)),m.a.createElement(o.M,null,m.a.createElement(o.R,null,m.a.createElement(o.m,{xs:"12",md:"12"},m.a.createElement(o.h,null,m.a.createElement(o.i,null,m.a.createElement(o.w,{action:"",method:"post",encType:"multipart/form-data",className:"form-horizontal"},m.a.createElement(o.x,{row:!0},m.a.createElement(o.m,{xs:"12",md:"12"},m.a.createElement("div",{style:{width:200,height:200,margin:"auto"}},m.a.createElement(o.D,{src:g.image,className:"c-avatar-img",style:{borderRadius:"0!important"},alt:g.image})))),m.a.createElement(o.x,{row:!0},m.a.createElement(o.m,{xs:"6",className:"text-left text-lg-right"},m.a.createElement(o.J,{htmlFor:"text-input"},"Name")),m.a.createElement(o.m,{xs:"6"},m.a.createElement("p",{className:"form-control-static"},g.name.toString().toUpperCase()))),m.a.createElement(o.x,{row:!0},m.a.createElement(o.m,{xs:"6",className:"text-left text-lg-right"},m.a.createElement(o.J,{htmlFor:"password-input"},"Capacity")),m.a.createElement(o.m,{xs:"6"},m.a.createElement("p",{className:"form-control-static"},g.coreCount))),m.a.createElement(o.x,{row:!0},m.a.createElement(o.m,{xs:"6",className:"text-left text-lg-right"},m.a.createElement(o.J,{htmlFor:"password-input"},"Price/GB")),m.a.createElement(o.m,{xs:"6"},m.a.createElement("p",{className:"form-control-static"},g.gbprice))),m.a.createElement(o.x,{row:!0},m.a.createElement(o.m,{xs:"6",className:"text-left text-lg-right"},m.a.createElement(o.J,{htmlFor:"password-input"},"Type")),m.a.createElement(o.m,{xs:"6"},m.a.createElement("p",{className:"form-control-static"},g.type))),m.a.createElement(o.x,{row:!0},m.a.createElement(o.m,{xs:"6",className:"text-left text-lg-right"},m.a.createElement(o.J,{htmlFor:"password-input"},"Cache")),m.a.createElement(o.m,{xs:"6"},m.a.createElement("p",{className:"form-control-static"},g.cache))),m.a.createElement(o.x,{row:!0},m.a.createElement(o.m,{xs:"6",className:"text-left text-lg-right"},m.a.createElement(o.J,{htmlFor:"password-input"},"Form Factor")),m.a.createElement(o.m,{xs:"6"},m.a.createElement("p",{className:"form-control-static"},g.factor))),m.a.createElement(o.x,{row:!0},m.a.createElement(o.m,{xs:"6",className:"text-left text-lg-right"},m.a.createElement(o.J,{htmlFor:"password-input"},"Interface")),m.a.createElement(o.m,{xs:"6"},m.a.createElement("p",{className:"form-control-static"},g.interface))),m.a.createElement(o.x,{row:!0},m.a.createElement(o.m,{xs:"6",className:"text-left text-lg-right"},m.a.createElement(o.J,{htmlFor:"password-input"},"Price")),m.a.createElement(o.m,{xs:"6"},m.a.createElement("p",{className:"form-control-static"},g.price))))))))),m.a.createElement(o.N,null,m.a.createElement(o.e,{color:"info",onClick:function(){return b(!1)}},"Close")))))}))}}]);
//# sourceMappingURL=14.54da7837.chunk.js.map