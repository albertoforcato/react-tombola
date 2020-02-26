(this["webpackJsonptombola-react"]=this["webpackJsonptombola-react"]||[]).push([[0],{65:function(e,t,a){e.exports=a(87)},70:function(e,t,a){},87:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(14),l=a.n(r),o=(a(70),a(57)),i=a(22),m=a(32),s=a(46),u=a(51),d=a(4),b=a(12),f=a(30),E=a.n(f),g=a(91),v=a(92),N=a(93),p=a(24),h={rangeRightEdgeExcluded:function(e,t){return Object(p.a)(Array(t-e)).map((function(t,a){return a+e}))},range:function(e,t){return Array.from({length:t-e+1},(function(t,a){return e+a}))},chunkArray:function(e,t){for(var a=[],n=Object(p.a)(e);n.length;)a.push(n.splice(0,t));return a},randomNumber:function(e){return e[Math.floor(Math.random()*e.length)]}},w=function(e){return{type:"CHANGE_PRIZE_ACTIVATION",id:e}},y=function(e){return{type:"ADD_DREW_NUMBER",drewNumber:e}};function j(){var e=Object(s.a)(["\n  pointer-events: none;\n  position: relative;\n  width: 50%;\n  padding-bottom: 50%;\n  border-radius: 50%;\n  color: #fff;\n  background-color: #007bff;\n  border-color: #007bff;\n\n  div {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    font-size: 6vw;\n    transform: translate(-50%, -50%);\n  }\n"]);return j=function(){return e},e}var k=u.a.div(j()),O=function(e){var t=e.toggleModal,a=Object(b.b)().t,n=Object(d.b)(),r=Object(d.c)((function(e){return e.drewNumbers.present})),l=Object(d.c)((function(e){return e.drewNumbers.past.length}))>0,o=Object(d.c)((function(e){return e.drewNumbers.future.length}))>0,i=Object(d.c)((function(e){return e.managePrizesSettings.automaticDraw}));console.log("AUTOMATIC DRAW",i);var m=Object(d.c)((function(e){return e.drewNumbers.present})),s=Object(d.c)((function(e){return e.manageDrewNumbers.availableNumbers})),u=r[r.length-1],E=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"btn-group d-flex "},c.a.createElement("button",{className:"btn btn-sm btn-warning mx-1 my-1","data-toggle":"back-arrow",title:a("game-page.go-back"),onClick:function(){n(f.ActionCreators.undo())},disabled:!l},c.a.createElement(g.a,{size:"20",color:"white"})),c.a.createElement("button",{className:"btn btn-sm btn-warning mx-1 my-1","data-toggle":"forth-arrow",title:a("game-page.go-forth"),onClick:function(){n(f.ActionCreators.redo())},disabled:!o},c.a.createElement(v.a,{size:"20",color:"white"}))),c.a.createElement("div",{className:"btn btn-sm btn-danger mx-1 my-1"},c.a.createElement(N.a,{size:"20",color:"white",onClick:function(){t()}})))};return c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-body"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col"},c.a.createElement((function(){return c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-header"},c.a.createElement("div",{className:"card-title"},a("game-page.last-draw-number"))),c.a.createElement("div",{className:"card-body d-flex justify-content-center"},c.a.createElement(k,null,c.a.createElement("div",null,null==u?"#":u))),c.a.createElement("div",{className:"card-footer d-flex flex-wrap justify-content-between"},c.a.createElement(E,null)))}),null))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col"},c.a.createElement((function(){return c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-body d-flex justify-content-center"},c.a.createElement("button",{className:"btn btn-success ".concat(i?"":"disabled"),style:{pointerEvents:i?"":"none"},onClick:function(){return function(){var e=s.filter((function(e){return!m.includes(e)})),t=h.randomNumber(e);n(y(t)),console.log(t)}()}},a("generics.draw"))))}),null))))))},A=a(94),D=function(e){var t=e.items,a=e.handleFunction,n=e.labelTip,r=e.i18nPath,l=Object(b.b)().t,o=Object(d.b)(),i=function(e){o(a(parseInt(e.target.id)))},m=t.map((function(e){return c.a.createElement("div",{className:"custom-control custom-checkbox custom-control-inline",key:e.id},c.a.createElement("input",{type:"checkbox",className:"custom-control-input",onChange:i,checked:e.checked,id:e.id}),c.a.createElement("label",{htmlFor:e.id,className:"custom-control-label"},l("".concat(r,".").concat(e.name))))}));return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"d-flex flex-wrap justify-content-lg-between justify-content-md-between justify-content-xs-center"},m),c.a.createElement("small",{className:"form-check-label"},n))},x=function(){var e=Object(b.b)().t,t=Object(d.c)((function(e){return e.managePrizesSettings.prizes})),a=Object(d.c)((function(e){return e.managePrizesSettings.automaticDraw})),n=Object(d.b)();return c.a.createElement("form",null,c.a.createElement("div",{className:"form-group"},c.a.createElement(D,{items:t,handleFunction:w,labelTip:e("welcome-page.settings-checkbox-tip"),i18nPath:"welcome-page.prizes"})),c.a.createElement("div",{className:"form-group d-flex flex-wrap"},c.a.createElement("div",{className:"custom-control custom-switch"},c.a.createElement("input",{type:"checkbox",className:"custom-control-input",onChange:function(){n({type:"CHANGE_AUTOMATIC_DRAW_STATE"})},defaultChecked:a,id:"automaticDrawSwitch"}),c.a.createElement("label",{className:"custom-control-label",htmlFor:"automaticDrawSwitch"},e("welcome-page.automatic-draw")))))},_=function(e){var t=e.show,a=e.toggle,n=Object(b.b)().t;return c.a.createElement(A.a,{show:t,onHide:a,backdrop:"static",size:"lg",centered:!0},c.a.createElement(A.a.Header,{closeButton:!0},c.a.createElement(A.a.Title,null,n("generics.settings"))),c.a.createElement(A.a.Body,null,c.a.createElement(x,null)),c.a.createElement(A.a.Footer,null,c.a.createElement("button",{className:"btn btn-primary",onClick:a},n("generics.save"))))},C=function(e){var t=e.gameNumber,a=Object(b.b)().t,n=Object(d.b)(),r=Object(d.c)((function(e){return e.drewNumbers.present})),l=Object(d.c)((function(e){return e.manageDrewNumbers.availableNumbers}));console.log(l);var o=function(e){var t=e.array;return c.a.createElement("div",{key:t},t.map((function(e){return c.a.createElement("div",{className:"container-fluid",key:"container-".concat(e)},c.a.createElement("div",{className:"row justify-content-between",key:e},e.map((function(e){return c.a.createElement("button",{className:"btn btn-outline-warning col mx-1 my-1 ".concat(r.includes(e)?"active none":""),key:e,value:e,onClick:function(){n(y(e))},style:{pointerEvents:r.includes(e)?"none":""}},c.a.createElement("div",null,e))}))))})))};return c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-header"},c.a.createElement("div",{className:"card-title"},a("game-page.actual-prize"),": ",a("welcome-page.prizes.tombola"))),c.a.createElement("div",{className:"card-body"},c.a.createElement("div",{className:"container-fluid"},c.a.createElement("div",{className:"row my-3"},c.a.createElement((function(e){var t=e.array;return c.a.createElement(c.a.Fragment,null,t.map((function(e){return c.a.createElement("div",{className:"col-md-6 my-1 col-12",key:"box-".concat(e)},c.a.createElement("div",{className:"card",key:e},c.a.createElement("div",{className:"card-body"},c.a.createElement(o,{array:h.chunkArray(e,5)}))))})))}),{array:t})))))},T=function(){var e=Object(d.b)(),t=Object(n.useState)(!1),a=Object(m.a)(t,2),r=a[0],l=a[1],o=function(){l(!r)},i=h.range(1,90),s=h.chunkArray(i,15);return Object(n.useEffect)((function(){e({type:"ADD_INITIAL_NUMBERS",numbers:i})})),c.a.createElement("div",{className:"d-flex justify-content-center align-items-md-center"},c.a.createElement("div",{className:"container-fluid"},c.a.createElement("div",{className:"row my-2"},c.a.createElement("div",{className:"col-xl-4  col-md-4 offset-md-0 col-12 order-md-1"},c.a.createElement(O,{toggleModal:o})),c.a.createElement("div",{className:"col-xl-8             col-md-8             col-12 order-md-0"},c.a.createElement(C,{gameNumber:s}))),c.a.createElement(_,{show:r,toggle:o})))};var R=function(){return c.a.createElement("div",{className:"spinner-border text-primary",role:"status"},c.a.createElement("span",{className:"sr-only"},"Loading..."))},I=function(){return c.a.createElement(n.Suspense,{fallback:c.a.createElement(R,null)},c.a.createElement(o.a,{basename:"/react-tombola"},c.a.createElement("div",{className:"App"},c.a.createElement(i.c,null,c.a.createElement(i.a,{exact:!0,path:"/",component:T})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var z=a(19),M=[],S=function(e,t){switch(t.type){case"ADD_DREW_NUMBER":return t.drewNumber;default:return e}},B=E()((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_DREW_NUMBER":return[].concat(Object(p.a)(e),[S(void 0,t)]);default:return e}})),W=a(23),P={prizes:[{id:1,name:"ambo",checked:!0},{id:2,name:"terna",checked:!0},{id:3,name:"quaterna",checked:!0},{id:4,name:"cinquina",checked:!0},{id:5,name:"tombola",checked:!0},{id:6,name:"tombolino",checked:!0}],automaticDraw:!1},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_PRIZE_ACTIVATION":var a=e.prizes.map((function(e){return e.id===t.id&&(e.checked=!e.checked),e}));return Object(W.a)({},e,{prizes:a});case"CHANGE_AUTOMATIC_DRAW_STATE":return Object(W.a)({},e,{automaticDraw:!e.automaticDraw});default:return Object(W.a)({},e)}},F={availableNumbers:null},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_INITIAL_NUMBERS":return console.log(t.numbers),Object(W.a)({},e,{availableNumbers:t.numbers});case"REMOVE_DREW_NUMBERS":console.log(t.numbers);var a=null;return Object(W.a)({},e,{availableNumbers:a});default:return Object(W.a)({},e)}},G=Object(z.combineReducers)({drewNumbers:B,managePrizesSettings:U,manageDrewNumbers:H}),L=a(59),V=a(60),q=(a(86),a(41)),J=a(61),Z=a(62);q.a.use(Z.a).use(J.a).use(b.a).init({fallbackLng:"it",debug:!1,interpolation:{escapeValue:!1},ns:["translation"],defaultNS:"translation",backend:{loadPath:"locales/{{lng}}/{{ns}}.json"}});q.a;var $=Object(V.composeWithDevTools)({}),K=Object(z.createStore)(G,$(Object(z.applyMiddleware)(L.a)));l.a.render(c.a.createElement(d.a,{store:K},c.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[65,1,2]]]);
//# sourceMappingURL=main.8461d6e3.chunk.js.map