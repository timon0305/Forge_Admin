(this.webpackJsonpForgePC=this.webpackJsonpForgePC||[]).push([[10],{753:function(e,t,a){"use strict";function n(e,t,a,n,r,c,l){try{var o=e[c](l),s=o.value}catch(i){return void a(i)}o.done?t(s):Promise.resolve(s).then(n,r)}function r(e){return function(){var t=this,a=arguments;return new Promise((function(r,c){var l=e.apply(t,a);function o(e){n(l,r,c,o,s,"next",e)}function s(e){n(l,r,c,o,s,"throw",e)}o(void 0)}))}}a.d(t,"a",(function(){return r}))},754:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(206);function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var a=[],n=!0,r=!1,c=void 0;try{for(var l,o=e[Symbol.iterator]();!(n=(l=o.next()).done)&&(a.push(l.value),!t||a.length!==t);n=!0);}catch(s){r=!0,c=s}finally{try{n||null==o.return||o.return()}finally{if(r)throw c}}return a}}(e,t)||Object(n.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},755:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(208),r=function(e){return console.log("action",e),{type:n.a,payload:{product:e}}}},789:function(e,t,a){"use strict";a.r(t);var n=a(42),r=a.n(n),c=a(753),l=a(754),o=a(1),s=a.n(o),i=a(74),m=a(752),u=a(207),f=a(755),E=a(91),p=a(54),d=["image","name","factor","efficiency","wattage","modular","color","price","actions"],g=function(){return s.a.createElement("div",{className:"d-flex justify-content-center",style:{height:"100vh",flexDirection:"row",alignItems:"center"}},s.a.createElement("div",{className:"spinner-border text-primary",role:"status",style:{width:100,height:100}},s.a.createElement("span",{className:"sr-only"},"Loading...")))};t.default=Object(i.c)((function(e){return{isLoading:1===e.loadingIndicator.counter}}),(function(e){return{callApi:function(t){for(var a=arguments.length,n=new Array(a>1?a-1:0),r=1;r<a;r++)n[r-1]=arguments[r];return new Promise((function(a,r){e(u.a.callApi.apply(u.a,[t,a].concat(n)),r)}))},callApi2:function(t,a){for(var n=arguments.length,r=new Array(n>2?n-2:0),c=2;c<n;c++)r[c-2]=arguments[c];return e(u.a.callApi.apply(u.a,[t,a].concat(r)))},toast:function(t,a){return e(Object(p.b)(t,a))}}}))((function(e){var t=Object(i.d)(),a=Object(o.useState)([]),n=Object(l.a)(a,2),u=n[0],p=n[1],h=Object(o.useState)([]),v=Object(l.a)(h,2),x=v[0],N=v[1],w=Object(o.useState)(null),y=Object(l.a)(w,2),b=y[0],O=y[1],S=Object(o.useState)(!1),j=Object(l.a)(S,2),F=j[0],J=j[1],P=function(){var t=Object(c.a)(r.a.mark((function t(){var a,n,c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.callApi(E.a.getPowerSupply);case 3:a=t.sent,n=a.ok,c=a.data,n&&(N(c.power),O(c.power[0])),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.log("Page::Users","FETCH_USER_ERROR",t.t0.message);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(){return t.apply(this,arguments)}}(),I=function(e){J(e)};return Object(o.useEffect)((function(){P(),function(){var e=null===JSON.parse(sessionStorage.getItem("listItems"))?[]:JSON.parse(sessionStorage.getItem("listItems"));p(e)}()}),[]),s.a.createElement(s.a.Fragment,null,s.a.createElement(m.R,null,s.a.createElement(m.m,{xs:"12",lg:"12"},!1===e.isLoading?s.a.createElement(m.h,null,s.a.createElement(m.l,null,"Power Supply"),s.a.createElement(m.i,null,s.a.createElement(m.p,{items:x,fields:d,itemsPerPage:10,pagination:!0,scopedSlots:{image:function(e){return s.a.createElement("td",{className:"text-left v-align"},s.a.createElement("div",{className:"c-avatar"},s.a.createElement("img",{src:e.image,className:"c-avatar-img",style:{borderRadius:"none!important"},alt:"avatar"})))},name:function(e){return s.a.createElement("td",{className:"v-align"},s.a.createElement("div",{className:"h6"},e.name))},factor:function(e){return s.a.createElement("td",{className:"v-align"},s.a.createElement("div",{className:"h6"},e.factor))},efficiency:function(e){return s.a.createElement("td",{className:"v-align"},s.a.createElement("div",{className:"h6"},e.efficiency))},wattage:function(e){return s.a.createElement("td",{className:"v-align"},s.a.createElement("div",{className:"h6"},e.wattage))},modular:function(e){return s.a.createElement("td",{className:"v-align"},s.a.createElement("div",{className:"h6"},e.modular))},color:function(e){return s.a.createElement("td",{className:"v-align"},s.a.createElement("div",{className:"h6"},e.color))},price:function(e){return s.a.createElement("td",{className:"v-align"},s.a.createElement("div",{className:"h6"},e.price))},actions:function(a){return s.a.createElement("td",{className:"v-align"},s.a.createElement(m.e,{active:!0,variant:"ghost",color:"info","aria-pressed":"true",size:"sm",className:"btn-pill",onClick:function(){return O(a),void I(!0)}},"View"),"\xa0",s.a.createElement(m.e,{active:!0,variant:"ghost",color:"success","aria-pressed":"true",size:"sm",className:"btn-pill",onClick:function(){return function(a){if(0===u.length)a.component="motherboard",u.push(a);else{var n=u.findIndex((function(e){return"motherboard"===e.component}));-1===n?(a.component="motherboard",u.push(a)):(a.component="motherboard",u[n]=a)}sessionStorage.setItem("listItems",JSON.stringify(u)),t(Object(f.a)(u)),e.history.push("/list")}(a)}},"Add"),"\xa0")}}}))):s.a.createElement(g,null))),b&&s.a.createElement(s.a.Fragment,null,s.a.createElement(m.L,{show:F,onClose:function(){return I(!1)},size:"lg",color:"info"},s.a.createElement(m.O,{closeButton:!0},s.a.createElement(m.P,null,b.name)),s.a.createElement(m.M,null,s.a.createElement(m.R,null,s.a.createElement(m.m,{xs:"12",md:"12"},s.a.createElement(m.h,null,s.a.createElement(m.i,null,s.a.createElement(m.w,{action:"",method:"post",encType:"multipart/form-data",className:"form-horizontal"},s.a.createElement(m.x,{row:!0},s.a.createElement(m.m,{xs:"12",md:"12"},s.a.createElement("div",{style:{width:200,height:200,margin:"auto"}},s.a.createElement(m.D,{src:b.image,className:"c-avatar-img",style:{borderRadius:"0!important"},alt:b.image})))),s.a.createElement(m.x,{row:!0},s.a.createElement(m.m,{xs:"6",className:"text-left text-lg-right"},s.a.createElement(m.J,{htmlFor:"text-input"},"Name")),s.a.createElement(m.m,{xs:"6"},s.a.createElement("p",{className:"form-control-static"},b.name.toString().toUpperCase()))),s.a.createElement(m.x,{row:!0},s.a.createElement(m.m,{xs:"6",className:"text-left text-lg-right"},s.a.createElement(m.J,{htmlFor:"password-input"},"Form Factor")),s.a.createElement(m.m,{xs:"6"},s.a.createElement("p",{className:"form-control-static"},b.factor))),s.a.createElement(m.x,{row:!0},s.a.createElement(m.m,{xs:"6",className:"text-left text-lg-right"},s.a.createElement(m.J,{htmlFor:"password-input"},"Efficiency Rating")),s.a.createElement(m.m,{xs:"6"},s.a.createElement("p",{className:"form-control-static"},b.efficiency))),s.a.createElement(m.x,{row:!0},s.a.createElement(m.m,{xs:"6",className:"text-left text-lg-right"},s.a.createElement(m.J,{htmlFor:"password-input"},"Wattage")),s.a.createElement(m.m,{xs:"6"},s.a.createElement("p",{className:"form-control-static"},b.wattage))),s.a.createElement(m.x,{row:!0},s.a.createElement(m.m,{xs:"6",className:"text-left text-lg-right"},s.a.createElement(m.J,{htmlFor:"password-input"},"Modular")),s.a.createElement(m.m,{xs:"6"},s.a.createElement("p",{className:"form-control-static"},b.modular))),s.a.createElement(m.x,{row:!0},s.a.createElement(m.m,{xs:"6",className:"text-left text-lg-right"},s.a.createElement(m.J,{htmlFor:"password-input"},"Color")),s.a.createElement(m.m,{xs:"6"},s.a.createElement("p",{className:"form-control-static"},b.color))),s.a.createElement(m.x,{row:!0},s.a.createElement(m.m,{xs:"6",className:"text-left text-lg-right"},s.a.createElement(m.J,{htmlFor:"password-input"},"Price")),s.a.createElement(m.m,{xs:"6"},s.a.createElement("p",{className:"form-control-static"},b.price))))))))),s.a.createElement(m.N,null,s.a.createElement(m.e,{color:"info",onClick:function(){return I(!1)}},"Close")))))}))}}]);
//# sourceMappingURL=10.a0cc4f50.chunk.js.map