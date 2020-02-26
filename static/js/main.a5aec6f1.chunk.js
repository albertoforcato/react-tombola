(this["webpackJsonptombola-react"]=this["webpackJsonptombola-react"]||[]).push([[0],{65:function(e,t,a){e.exports=a(87)},70:function(e,t,a){},87:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(13),l=a.n(r),o=(a(70),a(36)),i=a(22),s=a(31),m=a(47),u=a(52),d=a(6),b=a(17),E=a(29),f=a.n(E),g=a(91),v=a(92),p=a(93);function h(){var e=Object(m.a)(["\n  pointer-events: none;\n  position: relative;\n  width: 50%;\n  padding-bottom: 50%;\n  border-radius: 50%;\n  color: #fff;\n  background-color: #007bff;\n  border-color: #007bff;\n\n  div {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    font-size: 6vw;\n    transform: translate(-50%, -50%);\n  }\n"]);return h=function(){return e},e}var N=u.a.div(h()),w=function(e){var t=e.toggleModal,a=Object(b.b)().t,n=Object(d.b)(),r=Object(d.c)((function(e){return e.drewNumbers.present})),l=Object(d.c)((function(e){return e.drewNumbers.past.length}))>0,o=Object(d.c)((function(e){return e.drewNumbers.future.length}))>0;console.log(l,o);return c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-body"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-header"},c.a.createElement("div",{className:"card-title"},a("game-page.last-draw-number"))),c.a.createElement("div",{className:"card-body d-flex justify-content-center"},c.a.createElement(N,null,c.a.createElement("div",null,null==r[r.length-1]?"#":r[r.length-1]))),c.a.createElement("div",{className:"card-footer d-flex flex-wrap justify-content-between"},c.a.createElement("div",{className:"btn-group d-flex "},c.a.createElement("button",{className:"btn btn-sm btn-warning mx-1 my-1","data-toggle":"back-arrow",title:a("game-page.go-back"),onClick:function(){return console.log("UNDO"),void n(E.ActionCreators.undo())},disabled:!l},c.a.createElement(g.a,{size:"20",color:"white"})),c.a.createElement("button",{className:"btn btn-sm btn-warning mx-1 my-1","data-toggle":"forth-arrow",title:a("game-page.go-forth"),onClick:function(){return console.log("REDO"),void n(E.ActionCreators.redo())},disabled:!o},c.a.createElement(v.a,{size:"20",color:"white"}))),c.a.createElement("div",{className:"btn btn-sm btn-danger mx-1 my-1"},c.a.createElement(p.a,{size:"20",color:"white",onClick:function(){return console.log("SETTINGS"),void t()}})))))))))},y=function(e){return{type:"CHANGE_PRIZE_ACTIVATION",id:e}},k=a(23),j={rangeRightEdgeExcluded:function(e,t){return Object(k.a)(Array(t-e)).map((function(t,a){return a+e}))},range:function(e,t){return Array.from({length:t-e+1},(function(t,a){return e+a}))},chunkArray:function(e,t){for(var a=[],n=Object(k.a)(e);n.length;)a.push(n.splice(0,t));return a}},O=a(94),A=function(e){var t=e.items,a=e.handleFunction,n=e.labelTip,r=e.i18nPath,l=Object(b.b)().t,o=Object(d.b)(),i=function(e){o(a(parseInt(e.target.id)))},s=t.map((function(e){return c.a.createElement("div",{className:"custom-control custom-checkbox custom-control-inline",key:e.id},c.a.createElement("input",{type:"checkbox",className:"custom-control-input",onChange:i,checked:e.checked,id:e.id}),c.a.createElement("label",{htmlFor:e.id,className:"custom-control-label"},l("".concat(r,".").concat(e.name))))}));return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"d-flex flex-wrap justify-content-lg-between justify-content-md-between justify-content-xs-center"},s),c.a.createElement("small",{className:"form-check-label"},n))},x=function(){var e=Object(b.b)().t,t=Object(d.c)((function(e){return e.managePrizesSettings.prizes})),a=Object(d.c)((function(e){return e.managePrizesSettings.automaticDraw})),n=Object(d.b)();return c.a.createElement("form",null,c.a.createElement("div",{className:"form-group"},c.a.createElement(A,{items:t,handleFunction:y,labelTip:e("welcome-page.settings-checkbox-tip"),i18nPath:"welcome-page.prizes"})),c.a.createElement("div",{className:"form-group d-flex flex-wrap"},c.a.createElement("div",{className:"custom-control custom-switch"},c.a.createElement("input",{type:"checkbox",className:"custom-control-input",onChange:function(){n({type:"CHANGE_AUTOMATIC_DRAW_STATE"})},defaultChecked:a,id:"customSwitch1"}),c.a.createElement("label",{className:"custom-control-label",htmlFor:"customSwitch1"},e("welcome-page.automatic-draw")))))},D=function(){var e=Object(b.b)().t,t=Object(d.b)(),a=Object(n.useState)(!0),r=Object(s.a)(a,2),l=r[0],o=r[1],i=function(){o(!l)},m=j.range(1,90);console.log(m);var u=j.chunkArray(m,15);Object(n.useEffect)((function(){t({type:"ADD_INITIAL_NUMBERS",numbers:m})}),[]),console.log(u);var E=function(e){var a=e.array;return c.a.createElement("div",{key:a},a.map((function(e){return c.a.createElement("div",{className:"container-fluid",key:"container-".concat(e)},c.a.createElement("div",{className:"row justify-content-between",key:e},e.map((function(e){return c.a.createElement("div",{className:"btn btn-outline-warning col mx-1 my-1",key:e,value:e,onClick:function(){return a=e,console.log(a),void t(function(e){return{type:"ADD_DREW_NUMBER",drewNumber:e}}(a));var a}},c.a.createElement("div",null,e))}))))})))},f=function(e){var t=e.array;return c.a.createElement(c.a.Fragment,null,t.map((function(e){return c.a.createElement("div",{className:"col-md-6 my-1 col-12",key:"box-".concat(e)},c.a.createElement("div",{className:"card",key:e},c.a.createElement("div",{className:"card-body"},c.a.createElement(E,{array:j.chunkArray(e,5)}))))})))};return c.a.createElement("div",{className:"d-flex justify-content-center align-items-md-center"},c.a.createElement("div",{className:"container-fluid"},c.a.createElement("div",{className:"row my-2"},c.a.createElement("div",{className:"col-xl-4  col-md-4 offset-md-0 col-12 order-md-1"},c.a.createElement(w,{toggleModal:i})),c.a.createElement("div",{className:"col-xl-8             col-md-8             col-12 order-md-0"},c.a.createElement((function(){return c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-header"},c.a.createElement("div",{className:"card-title"},e("game-page.actual-prize"),": ",e("welcome-page.prizes.tombola"))),c.a.createElement("div",{className:"card-body"},c.a.createElement("div",{className:"container-fluid"},c.a.createElement("div",{className:"row my-3"},c.a.createElement(f,{array:u})))))}),null))),c.a.createElement((function(t){var a=t.show,n=t.toggle;return c.a.createElement(O.a,{show:a,onHide:n,backdrop:"static",size:"lg",centered:!0},c.a.createElement(O.a.Header,{closeButton:!0},c.a.createElement(O.a.Title,null,e("generics.settings"))),c.a.createElement(O.a.Body,null,c.a.createElement(x,null)),c.a.createElement(O.a.Footer,null,c.a.createElement("button",{className:"btn btn-primary",onClick:n},e("generics.save"))))}),{show:l,toggle:i})))};var T=function(){return c.a.createElement("div",{className:"spinner-border text-primary",role:"status"},c.a.createElement("span",{className:"sr-only"},"Loading..."))},_=function(){return c.a.createElement(n.Suspense,{fallback:c.a.createElement(T,null)},c.a.createElement(o.a,{basename:"/react-tombola"},c.a.createElement("div",{className:"App"},c.a.createElement(i.c,null,c.a.createElement(i.a,{exact:!0,path:"/",component:D})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var C=a(19),I=[],z=function(e,t){switch(t.type){case"ADD_DREW_NUMBER":return t.drewNumber;default:return e}},R=f()((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_DREW_NUMBER":return[].concat(Object(k.a)(e),[z(void 0,t)]);default:return e}})),S=a(33),M={prizes:[{id:1,name:"ambo",checked:!0},{id:2,name:"terna",checked:!0},{id:3,name:"quaterna",checked:!0},{id:4,name:"cinquina",checked:!0},{id:5,name:"tombola",checked:!0},{id:6,name:"tombolino",checked:!0}],automaticDraw:!1},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(console.log("ACTION: ",t),t.type){case"CHANGE_PRIZE_ACTIVATION":var a=e.prizes.map((function(e){return e.id===t.id&&(e.checked=!e.checked),e}));return Object(S.a)({},e,{prizes:a});case"CHANGE_AUTOMATIC_DRAW_STATE":return Object(S.a)({},e,{automaticDraw:!e.automaticDraw});case"ADD_INITIAL_NUMBERS":return console.log(t.numbers),Object(S.a)({},e,{numbers:t.numbers});default:return Object(S.a)({},e)}},P=Object(C.combineReducers)({drewNumbers:R,managePrizesSettings:B}),U=a(59),W=a(60),F=(a(86),a(42)),H=a(61),G=a(62);F.a.use(G.a).use(H.a).use(b.a).init({fallbackLng:"it",debug:!0,interpolation:{escapeValue:!1},ns:["translation"],defaultNS:"translation",backend:{loadPath:"locales/{{lng}}/{{ns}}.json"}});F.a;var L=Object(W.composeWithDevTools)({}),V=Object(C.createStore)(P,L(Object(C.applyMiddleware)(U.a)));l.a.render(c.a.createElement(d.a,{store:V},c.a.createElement(_,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[65,1,2]]]);
//# sourceMappingURL=main.a5aec6f1.chunk.js.map