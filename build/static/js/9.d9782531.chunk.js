(this.webpackJsonpForgePC=this.webpackJsonpForgePC||[]).push([[9],{752:function(e,t,a){"use strict";function n(e,t,a,n,r,l,c){try{var o=e[l](c),s=o.value}catch(i){return void a(i)}o.done?t(s):Promise.resolve(s).then(n,r)}function r(e){return function(){var t=this,a=arguments;return new Promise((function(r,l){var c=e.apply(t,a);function o(e){n(c,r,l,o,s,"next",e)}function s(e){n(c,r,l,o,s,"throw",e)}o(void 0)}))}}a.d(t,"a",(function(){return r}))},753:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(205);function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var a=[],n=!0,r=!1,l=void 0;try{for(var c,o=e[Symbol.iterator]();!(n=(c=o.next()).done)&&(a.push(c.value),!t||a.length!==t);n=!0);}catch(s){r=!0,l=s}finally{try{n||null==o.return||o.return()}finally{if(r)throw l}}return a}}(e,t)||Object(n.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},788:function(e,t,a){"use strict";a.r(t);var n=a(43),r=a.n(n),l=a(752),c=a(753),o=a(1),s=a.n(o),i=a(74),m=a(751),u=a(206),E=a(91),f=a(54),p=["image","name","rpm","noise","color","radiator","price","actions"],d=function(){return s.a.createElement("div",{className:"d-flex justify-content-center",style:{height:"100vh",flexDirection:"row",alignItems:"center"}},s.a.createElement("div",{className:"spinner-border text-primary",role:"status",style:{width:100,height:100}},s.a.createElement("span",{className:"sr-only"},"Loading...")))};t.default=Object(i.c)((function(e){return{isLoading:1===e.loadingIndicator.counter}}),(function(e){return{callApi:function(t){for(var a=arguments.length,n=new Array(a>1?a-1:0),r=1;r<a;r++)n[r-1]=arguments[r];return new Promise((function(a,r){e(u.a.callApi.apply(u.a,[t,a].concat(n)),r)}))},callApi2:function(t,a){for(var n=arguments.length,r=new Array(n>2?n-2:0),l=2;l<n;l++)r[l-2]=arguments[l];return e(u.a.callApi.apply(u.a,[t,a].concat(r)))},toast:function(t,a){return e(Object(f.b)(t,a))}}}))((function(e){var t=Object(o.useState)([]),a=Object(c.a)(t,2),n=a[0],i=a[1],u=Object(o.useState)(null),f=Object(c.a)(u,2),g=f[0],h=f[1],v=Object(o.useState)(!1),x=Object(c.a)(v,2),N=x[0],w=x[1],b=function(){var t=Object(l.a)(r.a.mark((function t(){var a,n,l;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.callApi(E.a.getCpuCooler);case 3:a=t.sent,n=a.ok,l=a.data,n&&(i(l.cooler),h(l.cooler[0])),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.log("Page::Users","FETCH_USER_ERROR",t.t0.message);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(){return t.apply(this,arguments)}}(),y=function(e){w(e)};return Object(o.useEffect)((function(){b()}),[]),s.a.createElement(s.a.Fragment,null,s.a.createElement(m.R,null,s.a.createElement(m.m,{xs:"12",lg:"12"},!1===e.isLoading?s.a.createElement(m.h,null,s.a.createElement(m.l,null,"CPU Cooler"),s.a.createElement(m.i,null,s.a.createElement(m.p,{items:n,fields:p,itemsPerPage:10,pagination:!0,scopedSlots:{image:function(e){return s.a.createElement("td",{className:"text-left v-align"},s.a.createElement("div",{className:"c-avatar"},s.a.createElement("img",{src:e.image,className:"c-avatar-img",style:{borderRadius:"none!important"},alt:"avatar"})))},name:function(e){return s.a.createElement("td",{className:"v-align"},s.a.createElement("div",{className:"h6"},e.name))},rpm:function(e){return s.a.createElement("td",{className:"v-align"},s.a.createElement("div",{className:"h6"},e.rpm))},noise:function(e){return s.a.createElement("td",{className:"v-align"},s.a.createElement("div",{className:"h6"},e.noise))},color:function(e){return s.a.createElement("td",{className:"v-align"},s.a.createElement("div",{className:"h6"},e.color))},radiator:function(e){return s.a.createElement("td",{className:"v-align"},s.a.createElement("div",{className:"h6"},e.radiator))},price:function(e){return s.a.createElement("td",{className:"v-align"},s.a.createElement("div",{className:"h6"},e.price))},actions:function(e){return s.a.createElement("td",{className:"v-align"},s.a.createElement(m.e,{active:!0,variant:"ghost",color:"info","aria-pressed":"true",size:"sm",className:"btn-pill",onClick:function(){return h(e),void y(!0)}},"View"),"\xa0",s.a.createElement(m.e,{active:!0,variant:"ghost",color:"success","aria-pressed":"true",size:"sm",className:"btn-pill",onClick:function(){h(e)}},"Add"),"\xa0")}}}))):s.a.createElement(d,null))),g&&s.a.createElement(s.a.Fragment,null,s.a.createElement(m.L,{show:N,onClose:function(){return y(!1)},size:"xl",color:"info"},s.a.createElement(m.O,{closeButton:!0},s.a.createElement(m.P,null,g.name)),s.a.createElement(m.M,null,s.a.createElement(m.R,null,s.a.createElement(m.m,{xs:"12",md:"12"},s.a.createElement(m.h,null,s.a.createElement(m.i,null,s.a.createElement(m.w,{action:"",method:"post",encType:"multipart/form-data",className:"form-horizontal"},s.a.createElement(m.x,{row:!0},s.a.createElement(m.m,{xs:"12",md:"12"},s.a.createElement("div",{style:{width:200,height:200,margin:"auto"}},s.a.createElement(m.D,{src:g.image,className:"c-avatar-img",style:{borderRadius:"0!important"},alt:g.image})))),s.a.createElement(m.x,{row:!0},s.a.createElement(m.m,{xs:"6",className:"text-left text-lg-right"},s.a.createElement(m.J,{htmlFor:"text-input"},"Name")),s.a.createElement(m.m,{xs:"6"},s.a.createElement("p",{className:"form-control-static"},g.name.toString().toUpperCase()))),s.a.createElement(m.x,{row:!0},s.a.createElement(m.m,{xs:"6",className:"text-left text-lg-right"},s.a.createElement(m.J,{htmlFor:"password-input"},"Fan RPM")),s.a.createElement(m.m,{xs:"6"},s.a.createElement("p",{className:"form-control-static"},g.rpm))),s.a.createElement(m.x,{row:!0},s.a.createElement(m.m,{xs:"6",className:"text-left text-lg-right"},s.a.createElement(m.J,{htmlFor:"password-input"},"Noise Level")),s.a.createElement(m.m,{xs:"6"},s.a.createElement("p",{className:"form-control-static"},g.noise))),s.a.createElement(m.x,{row:!0},s.a.createElement(m.m,{xs:"6",className:"text-left text-lg-right"},s.a.createElement(m.J,{htmlFor:"password-input"},"Color")),s.a.createElement(m.m,{xs:"6"},s.a.createElement("p",{className:"form-control-static"},g.color))),s.a.createElement(m.x,{row:!0},s.a.createElement(m.m,{xs:"6",className:"text-left text-lg-right"},s.a.createElement(m.J,{htmlFor:"password-input"},"Radiator")),s.a.createElement(m.m,{xs:"6"},s.a.createElement("p",{className:"form-control-static"},g.radiator))),s.a.createElement(m.x,{row:!0},s.a.createElement(m.m,{xs:"6",className:"text-left text-lg-right"},s.a.createElement(m.J,{htmlFor:"password-input"},"Price")),s.a.createElement(m.m,{xs:"6"},s.a.createElement("p",{className:"form-control-static"},g.price))))))))),s.a.createElement(m.N,null,s.a.createElement(m.e,{color:"info",onClick:function(){return y(!1)}},"Close")))))}))}}]);
//# sourceMappingURL=9.d9782531.chunk.js.map