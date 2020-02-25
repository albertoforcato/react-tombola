(this["webpackJsonptombola-react"]=this["webpackJsonptombola-react"]||[]).push([[0],{51:function(e,t,a){e.exports=a(73)},56:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(25),l=a.n(r),o=(a(56),a(26)),i=a(17),m=a(8),s=a(3),u=function(e){return{type:"CHANGE_PRIZE_ACTIVATION",id:e}},d=function(e){var t=e.items,a=e.handleFunction,n=e.labelTip,r=Object(m.b)().t,l=Object(s.b)(),o=function(e){l(a(parseInt(e.target.id)))},i=t.map((function(e){return c.a.createElement("div",{className:"custom-control custom-checkbox custom-control-inline",key:e.id},c.a.createElement("input",{type:"checkbox",className:"custom-control-input",onChange:o,checked:e.checked,id:e.id}),c.a.createElement("label",{htmlFor:e.id,className:"custom-control-label"},r(e.name)))}));return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"d-flex flex-wrap justify-content-lg-between justify-content-md-between justify-content-xs-center"},i),c.a.createElement("small",{className:"form-check-label"},n))},b=function(){var e=Object(m.b)().t,t=Object(s.c)((function(e){return e.managePrizesSettings.prizes})),a=Object(s.c)((function(e){return e.managePrizesSettings.automaticDraw})),n=Object(s.b)();return c.a.createElement("form",null,c.a.createElement("div",{className:"form-group"},c.a.createElement(d,{items:t,handleFunction:u,labelTip:e("settings-checkbox-tip")})),c.a.createElement("div",{className:"form-group d-flex flex-wrap"},c.a.createElement("div",{className:"custom-control custom-switch"},c.a.createElement("input",{type:"checkbox",className:"custom-control-input",onChange:function(){n({type:"CHANGE_AUTOMATIC_DRAW_STATE"})},defaultChecked:a,id:"customSwitch1"}),c.a.createElement("label",{className:"custom-control-label",htmlFor:"customSwitch1"},e("automatic-draw")))),c.a.createElement("div",{className:"d-flex justify-content-center "},c.a.createElement(o.b,{to:"/tombola_game",className:"btn btn-primary text-wrap",type:"submit"},e("start-the-game"))))},f=function(){var e=Object(m.b)().t;return c.a.createElement("div",{className:"container-fluid vh-100 d-flex justify-content-center align-items-center"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"card mx-5"},c.a.createElement("div",{className:"card-body"},c.a.createElement("h1",{className:"card-title"},e("tombola")),c.a.createElement(b,null)))))},E=a(18),v=a(41),N=a(42),p=a(22),h=a.n(p),g=a(75),y=a(76),w=a(77);function k(){var e=Object(v.a)(["\n  pointer-events: none;\n  position: relative;\n  width: 50%;\n  padding-bottom: 50%;\n  border-radius: 50%;\n  color: #fff;\n  background-color: #007bff;\n  border-color: #007bff;\n\n  div {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    font-size: 6vw;\n    transform: translate(-50%, -50%);\n  }\n"]);return k=function(){return e},e}var j=N.a.div(k()),O=function(){var e=Object(m.b)().t,t=Object(s.b)(),a=Object(s.c)((function(e){return e.drewNumbers.present})),n=Object(s.c)((function(e){return e.drewNumbers.past.length}))>0,r=Object(s.c)((function(e){return e.drewNumbers.future.length}))>0;console.log(n,r);return c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-body"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-header"},c.a.createElement("div",{className:"card-title"},e("last-draw-number"))),c.a.createElement("div",{className:"card-body d-flex justify-content-center"},c.a.createElement(j,null,c.a.createElement("div",null,null==a[a.length-1]?"#":a[a.length-1]))),c.a.createElement("div",{className:"card-footer d-flex flex-wrap justify-content-between"},c.a.createElement("div",{className:"btn-group d-flex "},c.a.createElement("button",{className:"btn btn-sm btn-warning mx-1 my-1","data-toggle":"back-arrow",title:e("go-back"),onClick:function(){return console.log("UNDO"),void t(p.ActionCreators.undo())},disabled:!n},c.a.createElement(g.a,{size:"20",color:"white"})),c.a.createElement("button",{className:"btn btn-sm btn-warning mx-1 my-1","data-toggle":"forth-arrow",title:e("go-forth"),onClick:function(){return console.log("REDO"),void t(p.ActionCreators.redo())},disabled:!r},c.a.createElement(y.a,{size:"20",color:"white"}))),c.a.createElement("div",{className:"btn btn-sm btn-danger mx-1 my-1"},c.a.createElement(w.a,{size:"20",color:"white"})))))))))},A=function(){var e=Object(m.b)().t,t=Object(s.b)(),a=x.range(1,90);console.log(a);var r=x.chunkArray(a,15);Object(n.useEffect)((function(){t({type:"ADD_INITIAL_NUMBERS",numbers:a})}),[]),console.log(r);var l=function(e){var a=e.array;return c.a.createElement("div",{key:a},a.map((function(e){return c.a.createElement("div",{className:"container-fluid",key:"container-".concat(e)},c.a.createElement("div",{className:"row justify-content-between",key:e},e.map((function(e){return c.a.createElement("div",{className:"btn btn-outline-warning col mx-1 my-1",key:e,value:e,onClick:function(){return a=e,console.log(a),void t(function(e){return{type:"ADD_DREW_NUMBER",drewNumber:e}}(a));var a}},c.a.createElement("div",null,e))}))))})))},o=function(e){var t=e.array;return c.a.createElement(c.a.Fragment,null,t.map((function(e){return c.a.createElement("div",{className:"col-md-6 my-1 col-12",key:"box-".concat(e)},c.a.createElement("div",{className:"card",key:e},c.a.createElement("div",{className:"card-body"},c.a.createElement(l,{array:x.chunkArray(e,5)}))))})))};return c.a.createElement("div",{className:"d-flex justify-content-center align-items-md-center"},c.a.createElement("div",{className:"container-fluid"},c.a.createElement("div",{className:"row my-2"},c.a.createElement("div",{className:"col-xl-4  col-md-4 offset-md-0 col-12 order-md-1"},c.a.createElement(O,null)),c.a.createElement("div",{className:"col-xl-8             col-md-8             col-12 order-md-0"},c.a.createElement((function(){return c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-header"},c.a.createElement("div",{className:"card-title"},e("actual-prize"),": ",e("tombola"))),c.a.createElement("div",{className:"card-body"},c.a.createElement("div",{className:"container-fluid"},c.a.createElement("div",{className:"row my-3"},c.a.createElement(o,{array:r})))))}),null)))))},x={rangeRightEdgeExcluded:function(e,t){return Object(E.a)(Array(t-e)).map((function(t,a){return a+e}))},range:function(e,t){return Array.from({length:t-e+1},(function(t,a){return e+a}))},chunkArray:function(e,t){for(var a=[],n=Object(E.a)(e);n.length;)a.push(n.splice(0,t));return a}};var D=function(){return c.a.createElement("div",{className:"spinner-border text-primary",role:"status"},c.a.createElement("span",{className:"sr-only"},"Loading..."))},_=function(){return c.a.createElement(n.Suspense,{fallback:c.a.createElement(D,null)},c.a.createElement(o.a,null,c.a.createElement("div",{className:"App"},c.a.createElement(i.c,null,c.a.createElement(i.a,{exact:!0,path:"/",component:f}),c.a.createElement(i.a,{path:"/tombola_game",component:A})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var T=a(15),C=[],I=function(e,t){switch(t.type){case"ADD_DREW_NUMBER":return t.drewNumber;default:return e}},R=h()((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_DREW_NUMBER":return[].concat(Object(E.a)(e),[I(void 0,t)]);default:return e}})),z=a(24),S={prizes:[{id:1,name:"ambo",checked:!0},{id:2,name:"terna",checked:!0},{id:3,name:"quaterna",checked:!0},{id:4,name:"cinquina",checked:!0},{id:5,name:"tombola",checked:!0},{id:6,name:"tombolino",checked:!0}],automaticDraw:!1},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(console.log("ACTION: ",t),t.type){case"CHANGE_PRIZE_ACTIVATION":var a=e.prizes.map((function(e){return e.id===t.id&&(e.checked=!e.checked),e}));return Object(z.a)({},e,{prizes:a});case"CHANGE_AUTOMATIC_DRAW_STATE":return Object(z.a)({},e,{automaticDraw:!e.automaticDraw});case"ADD_INITIAL_NUMBERS":return console.log(t.numbers),Object(z.a)({},e,{numbers:t.numbers});default:return Object(z.a)({},e)}},U=Object(T.combineReducers)({drewNumbers:R,managePrizesSettings:M}),W=a(46),B=a(47),F=a(31),P=a(48),G=a(49);F.a.use(P.a).use(G.a).use(m.a).init({fallbackLng:"en",debug:!0,interpolation:{escapeValue:!1}});F.a;var H=Object(B.composeWithDevTools)({}),L=Object(T.createStore)(U,H(Object(T.applyMiddleware)(W.a)));l.a.render(c.a.createElement(s.a,{store:L},c.a.createElement(_,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[51,1,2]]]);
//# sourceMappingURL=main.904a06f4.chunk.js.map