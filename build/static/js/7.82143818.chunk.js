(this.webpackJsonpForgePC=this.webpackJsonpForgePC||[]).push([[7],{753:function(e,t,a){"use strict";function n(e,t,a,n,r,c,l){try{var s=e[c](l),o=s.value}catch(m){return void a(m)}s.done?t(o):Promise.resolve(o).then(n,r)}function r(e){return function(){var t=this,a=arguments;return new Promise((function(r,c){var l=e.apply(t,a);function s(e){n(l,r,c,s,o,"next",e)}function o(e){n(l,r,c,s,o,"throw",e)}s(void 0)}))}}a.d(t,"a",(function(){return r}))},754:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(206);function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var a=[],n=!0,r=!1,c=void 0;try{for(var l,s=e[Symbol.iterator]();!(n=(l=s.next()).done)&&(a.push(l.value),!t||a.length!==t);n=!0);}catch(o){r=!0,c=o}finally{try{n||null==s.return||s.return()}finally{if(r)throw c}}return a}}(e,t)||Object(n.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},755:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(208),r=function(e){return console.log("action",e),{type:n.a,payload:{product:e}}}},784:function(e,t,a){"use strict";a.r(t);var n=a(42),r=a.n(n),c=a(753),l=a(754),s=a(1),o=a.n(s),m=a(74),i=a(752),u=a(207),p=a(755),f=a(91),E=a(54),d=["image","name","coreCount","coreClock","boostClock","graphics","smt","tdp","price","actions"],g=function(){return o.a.createElement("div",{className:"d-flex justify-content-center",style:{height:"100vh",flexDirection:"row",alignItems:"center"}},o.a.createElement("div",{className:"spinner-border text-primary",role:"status",style:{width:100,height:100}},o.a.createElement("span",{className:"sr-only"},"Loading...")))};t.default=Object(m.c)((function(e){return{isLoading:1===e.loadingIndicator.counter}}),(function(e){return{callApi:function(t){for(var a=arguments.length,n=new Array(a>1?a-1:0),r=1;r<a;r++)n[r-1]=arguments[r];return new Promise((function(a,r){e(u.a.callApi.apply(u.a,[t,a].concat(n)),r)}))},callApi2:function(t,a){for(var n=arguments.length,r=new Array(n>2?n-2:0),c=2;c<n;c++)r[c-2]=arguments[c];return e(u.a.callApi.apply(u.a,[t,a].concat(r)))},toast:function(t,a){return e(Object(E.b)(t,a))}}}))((function(e){var t=Object(m.d)(),a=Object(s.useState)([]),n=Object(l.a)(a,2),u=n[0],E=n[1],h=Object(s.useState)([]),v=Object(l.a)(h,2),x=v[0],N=v[1],b=Object(s.useState)(null),w=Object(l.a)(b,2),y=w[0],C=w[1],O=Object(s.useState)(!1),j=Object(l.a)(O,2),k=j[0],S=j[1],F=function(){var t=Object(c.a)(r.a.mark((function t(){var a,n,c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.callApi(f.a.getCPU);case 3:a=t.sent,n=a.ok,c=a.data,n&&(E(c.cpu),C(c.cpu[0])),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.log("Page::Users","FETCH_USER_ERROR",t.t0.message);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(){return t.apply(this,arguments)}}(),J=function(){var e=Object(c.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{t=null===JSON.parse(sessionStorage.getItem("listItem"))?[]:JSON.parse(sessionStorage.getItem("listItem")),N(t)}catch(a){console.log("Get list products",a.message)}case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),P=function(e){S(e)};return Object(s.useEffect)((function(){F(),J()}),[]),o.a.createElement(o.a.Fragment,null,o.a.createElement(i.R,null,o.a.createElement(i.m,{xs:"12",lg:"12"},!1===e.isLoading?o.a.createElement(i.h,null,o.a.createElement(i.l,null,"CPU"),o.a.createElement(i.i,null,o.a.createElement(i.p,{items:u,fields:d,itemsPerPage:10,pagination:!0,scopedSlots:{image:function(e){return o.a.createElement("td",{className:"text-left v-align"},o.a.createElement("div",{className:"c-avatar"},o.a.createElement("img",{src:e.image,className:"c-avatar-img",style:{borderRadius:"none!important"},alt:"avatar"})))},name:function(e){return o.a.createElement("td",{className:"v-align"},o.a.createElement("div",{className:"h6"},e.name))},coreCount:function(e){return o.a.createElement("td",{className:"v-align"},o.a.createElement("div",{className:"h6"},e.coreCount))},coreClock:function(e){return o.a.createElement("td",{className:"v-align"},o.a.createElement("div",{className:"h6"},e.coreClock))},boostClock:function(e){return o.a.createElement("td",{className:"v-align"},o.a.createElement("div",{className:"h6"},e.boostClock))},graphics:function(e){return o.a.createElement("td",{className:"v-align"},o.a.createElement("div",{className:"h6"},e.graphics))},smt:function(e){return o.a.createElement("td",{className:"v-align"},o.a.createElement("div",{className:"h6"},e.smt))},tdp:function(e){return o.a.createElement("td",{className:"v-align"},o.a.createElement("div",{className:"h6"},e.tdp))},price:function(e){return o.a.createElement("td",{className:"v-align"},o.a.createElement("div",{className:"h6"},e.price))},actions:function(a){return o.a.createElement("td",{className:"v-align"},o.a.createElement(i.e,{active:!0,variant:"ghost",color:"info","aria-pressed":"true",size:"sm",className:"btn-pill",onClick:function(){return function(e){C(e),P(!0)}(a)}},"View"),"\xa0",o.a.createElement(i.e,{active:!0,variant:"ghost",color:"success","aria-pressed":"true",size:"sm",className:"btn-pill",onClick:function(){return function(a){if(0===x.length)a.component="cpu",x.push(a);else{var n=x.findIndex((function(e){return"cpu"===e.component}));-1===n?(a.component="cpu",x.push(a)):(a.component="cpu",x[n]=a)}sessionStorage.setItem("listItems",JSON.stringify(x)),t(Object(p.a)(x)),e.history.push("/list")}(a)}},"Add"),"\xa0")}}}))):o.a.createElement(g,null))),y&&o.a.createElement(o.a.Fragment,null,o.a.createElement(i.L,{show:k,onClose:function(){return P(!1)},size:"lg",color:"info"},o.a.createElement(i.O,{closeButton:!0},o.a.createElement(i.P,null,y.name)),o.a.createElement(i.M,null,o.a.createElement(i.R,null,o.a.createElement(i.m,{xs:"12",md:"12"},o.a.createElement(i.h,null,o.a.createElement(i.i,null,o.a.createElement(i.w,{action:"",method:"post",encType:"multipart/form-data",className:"form-horizontal"},o.a.createElement(i.x,{row:!0},o.a.createElement(i.m,{xs:"12",md:"12"},o.a.createElement("div",{style:{width:200,height:200,margin:"auto"}},o.a.createElement(i.D,{src:y.image,className:"c-avatar-img",style:{borderRadius:"0!important"},alt:y.image})))),o.a.createElement(i.x,{row:!0},o.a.createElement(i.m,{xs:"6",className:"text-left text-lg-right"},o.a.createElement(i.J,{htmlFor:"text-input"},"Name")),o.a.createElement(i.m,{xs:"6"},o.a.createElement("p",{className:"form-control-static"},y.name.toString().toUpperCase()))),o.a.createElement(i.x,{row:!0},o.a.createElement(i.m,{xs:"6",className:"text-left text-lg-right"},o.a.createElement(i.J,{htmlFor:"password-input"},"Core Count")),o.a.createElement(i.m,{xs:"6"},o.a.createElement("p",{className:"form-control-static"},y.coreCount))),o.a.createElement(i.x,{row:!0},o.a.createElement(i.m,{xs:"6",className:"text-left text-lg-right"},o.a.createElement(i.J,{htmlFor:"password-input"},"Core Clock")),o.a.createElement(i.m,{xs:"6"},o.a.createElement("p",{className:"form-control-static"},y.coreClock))),o.a.createElement(i.x,{row:!0},o.a.createElement(i.m,{xs:"6",className:"text-left text-lg-right"},o.a.createElement(i.J,{htmlFor:"password-input"},"Boost Clock")),o.a.createElement(i.m,{xs:"6"},o.a.createElement("p",{className:"form-control-static"},y.boostClock))),o.a.createElement(i.x,{row:!0},o.a.createElement(i.m,{xs:"6",className:"text-left text-lg-right"},o.a.createElement(i.J,{htmlFor:"password-input"},"TDP")),o.a.createElement(i.m,{xs:"6"},o.a.createElement("p",{className:"form-control-static"},y.tdp))),o.a.createElement(i.x,{row:!0},o.a.createElement(i.m,{xs:"6",className:"text-left text-lg-right"},o.a.createElement(i.J,{htmlFor:"password-input"},"Integrated Graphics")),o.a.createElement(i.m,{xs:"6"},o.a.createElement("p",{className:"form-control-static"},y.graphics))),o.a.createElement(i.x,{row:!0},o.a.createElement(i.m,{xs:"6",className:"text-left text-lg-right"},o.a.createElement(i.J,{htmlFor:"password-input"},"SMT")),o.a.createElement(i.m,{xs:"6"},o.a.createElement("p",{className:"form-control-static"},y.smt))),o.a.createElement(i.x,{row:!0},o.a.createElement(i.m,{xs:"6",className:"text-left text-lg-right"},o.a.createElement(i.J,{htmlFor:"password-input"},"Price")),o.a.createElement(i.m,{xs:"6"},o.a.createElement("p",{className:"form-control-static"},y.price))))))))),o.a.createElement(i.N,null,o.a.createElement(i.e,{color:"info",onClick:function(){return P(!1)}},"Close")))))}))}}]);
//# sourceMappingURL=7.82143818.chunk.js.map