(this["webpackJsonptombola-react"]=this["webpackJsonptombola-react"]||[]).push([[0],{47:function(e){e.exports=JSON.parse('{"welcome-page":{"start-the-game":"Inizia a giocare","automatic-draw":"Estrazione automatica","settings-checkbox-tip":"Seleziona i premi","prizes":{"ambo":"Ambo","terna":"Terna","quaterna":"Quaterna","cinquina":"Cinquina","tombola":"Tombola","tombolino":"Tombolino"}},"game-page":{"last-draw-number":"Ultimo numero estratto","actual-prize":"Premio attualmente in palio","go-back":"Torna indietro","go-forth":"Vai avanti"}}')},48:function(e){e.exports=JSON.parse('{"welcome-page":{"start-the-game":"START","automatic-draw":"Automatic draw","settings-checkbox-tip":"Select the prizes","prizes":{"ambo":"Ambo","terna":"Terna","quaterna":"Quaterna","cinquina":"Cinquina","tombola":"Tombola","tombolino":"Tombolino"}},"game-page":{"last-draw-number":"Last draw number","actual-prize":"Actual prize","go-back":"Go back","go-forth":"Go forth"}}')},50:function(e,t,a){e.exports=a(73)},55:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(23),o=a.n(c),l=(a(55),a(24)),i=a(16),m=a(6),s=a(3),u=function(e){return{type:"CHANGE_PRIZE_ACTIVATION",id:e}},d=function(e){var t=e.items,a=e.handleFunction,n=e.labelTip,c=e.i18nPath,o=Object(m.b)().t,l=Object(s.b)(),i=function(e){l(a(parseInt(e.target.id)))},u=t.map((function(e){return r.a.createElement("div",{className:"custom-control custom-checkbox custom-control-inline",key:e.id},r.a.createElement("input",{type:"checkbox",className:"custom-control-input",onChange:i,checked:e.checked,id:e.id}),r.a.createElement("label",{htmlFor:e.id,className:"custom-control-label"},o("".concat(c,".").concat(e.name))))}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"d-flex flex-wrap justify-content-lg-between justify-content-md-between justify-content-xs-center"},u),r.a.createElement("small",{className:"form-check-label"},n))},b=function(){var e=Object(m.b)().t,t=Object(s.c)((function(e){return e.managePrizesSettings.prizes})),a=Object(s.c)((function(e){return e.managePrizesSettings.automaticDraw})),n=Object(s.b)();return r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement(d,{items:t,handleFunction:u,labelTip:e("welcome-page.settings-checkbox-tip"),i18nPath:"welcome-page.prizes"})),r.a.createElement("div",{className:"form-group d-flex flex-wrap"},r.a.createElement("div",{className:"custom-control custom-switch"},r.a.createElement("input",{type:"checkbox",className:"custom-control-input",onChange:function(){n({type:"CHANGE_AUTOMATIC_DRAW_STATE"})},defaultChecked:a,id:"customSwitch1"}),r.a.createElement("label",{className:"custom-control-label",htmlFor:"customSwitch1"},e("welcome-page.automatic-draw")))),r.a.createElement("div",{className:"d-flex justify-content-center "},r.a.createElement(l.b,{to:"/tombola_game",className:"btn btn-primary text-wrap",type:"submit"},e("welcome-page.start-the-game"))))},f=function(){var e=Object(m.b)().t;return r.a.createElement("div",{className:"container-fluid vh-100 d-flex justify-content-center align-items-center"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"card mx-5"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h1",{className:"card-title"},e("welcome-page.prizes.tombola")),r.a.createElement(b,null)))))},p=a(17),E=a(40),g=a(41),v=a(20),h=a.n(v),N=a(75),w=a(76),y=a(77);function k(){var e=Object(E.a)(["\n  pointer-events: none;\n  position: relative;\n  width: 50%;\n  padding-bottom: 50%;\n  border-radius: 50%;\n  color: #fff;\n  background-color: #007bff;\n  border-color: #007bff;\n\n  div {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    font-size: 6vw;\n    transform: translate(-50%, -50%);\n  }\n"]);return k=function(){return e},e}var A=g.a.div(k()),j=function(){var e=Object(m.b)().t,t=Object(s.b)(),a=Object(s.c)((function(e){return e.drewNumbers.present})),n=Object(s.c)((function(e){return e.drewNumbers.past.length}))>0,c=Object(s.c)((function(e){return e.drewNumbers.future.length}))>0;console.log(n,c);return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header"},r.a.createElement("div",{className:"card-title"},e("game-page.last-draw-number"))),r.a.createElement("div",{className:"card-body d-flex justify-content-center"},r.a.createElement(A,null,r.a.createElement("div",null,null==a[a.length-1]?"#":a[a.length-1]))),r.a.createElement("div",{className:"card-footer d-flex flex-wrap justify-content-between"},r.a.createElement("div",{className:"btn-group d-flex "},r.a.createElement("button",{className:"btn btn-sm btn-warning mx-1 my-1","data-toggle":"back-arrow",title:e("game-page.go-back"),onClick:function(){return console.log("UNDO"),void t(v.ActionCreators.undo())},disabled:!n},r.a.createElement(N.a,{size:"20",color:"white"})),r.a.createElement("button",{className:"btn btn-sm btn-warning mx-1 my-1","data-toggle":"forth-arrow",title:e("game-page.go-forth"),onClick:function(){return console.log("REDO"),void t(v.ActionCreators.redo())},disabled:!c},r.a.createElement(w.a,{size:"20",color:"white"}))),r.a.createElement("div",{className:"btn btn-sm btn-danger mx-1 my-1"},r.a.createElement(y.a,{size:"20",color:"white"})))))))))},O=function(){var e=Object(m.b)().t,t=Object(s.b)(),a=x.range(1,90);console.log(a);var c=x.chunkArray(a,15);Object(n.useEffect)((function(){t({type:"ADD_INITIAL_NUMBERS",numbers:a})}),[]),console.log(c);var o=function(e){var a=e.array;return r.a.createElement("div",{key:a},a.map((function(e){return r.a.createElement("div",{className:"container-fluid",key:"container-".concat(e)},r.a.createElement("div",{className:"row justify-content-between",key:e},e.map((function(e){return r.a.createElement("div",{className:"btn btn-outline-warning col mx-1 my-1",key:e,value:e,onClick:function(){return a=e,console.log(a),void t(function(e){return{type:"ADD_DREW_NUMBER",drewNumber:e}}(a));var a}},r.a.createElement("div",null,e))}))))})))},l=function(e){var t=e.array;return r.a.createElement(r.a.Fragment,null,t.map((function(e){return r.a.createElement("div",{className:"col-md-6 my-1 col-12",key:"box-".concat(e)},r.a.createElement("div",{className:"card",key:e},r.a.createElement("div",{className:"card-body"},r.a.createElement(o,{array:x.chunkArray(e,5)}))))})))};return r.a.createElement("div",{className:"d-flex justify-content-center align-items-md-center"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row my-2"},r.a.createElement("div",{className:"col-xl-4  col-md-4 offset-md-0 col-12 order-md-1"},r.a.createElement(j,null)),r.a.createElement("div",{className:"col-xl-8             col-md-8             col-12 order-md-0"},r.a.createElement((function(){return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header"},r.a.createElement("div",{className:"card-title"},e("game-page.actual-prize"),": ",e("welcome-page.prizes.tombola"))),r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row my-3"},r.a.createElement(l,{array:c})))))}),null)))))},x={rangeRightEdgeExcluded:function(e,t){return Object(p.a)(Array(t-e)).map((function(t,a){return a+e}))},range:function(e,t){return Array.from({length:t-e+1},(function(t,a){return e+a}))},chunkArray:function(e,t){for(var a=[],n=Object(p.a)(e);n.length;)a.push(n.splice(0,t));return a}};var T=function(){return r.a.createElement("div",{className:"spinner-border text-primary",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading..."))},z=function(){return r.a.createElement(n.Suspense,{fallback:r.a.createElement(T,null)},r.a.createElement(l.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/",component:f}),r.a.createElement(i.a,{path:"/tombola_game",component:O})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var D=a(14),_=[],C=function(e,t){switch(t.type){case"ADD_DREW_NUMBER":return t.drewNumber;default:return e}},I=h()((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_DREW_NUMBER":return[].concat(Object(p.a)(e),[C(void 0,t)]);default:return e}})),R=a(22),S={prizes:[{id:1,name:"ambo",checked:!0},{id:2,name:"terna",checked:!0},{id:3,name:"quaterna",checked:!0},{id:4,name:"cinquina",checked:!0},{id:5,name:"tombola",checked:!0},{id:6,name:"tombolino",checked:!0}],automaticDraw:!1},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(console.log("ACTION: ",t),t.type){case"CHANGE_PRIZE_ACTIVATION":var a=e.prizes.map((function(e){return e.id===t.id&&(e.checked=!e.checked),e}));return Object(R.a)({},e,{prizes:a});case"CHANGE_AUTOMATIC_DRAW_STATE":return Object(R.a)({},e,{automaticDraw:!e.automaticDraw});case"ADD_INITIAL_NUMBERS":return console.log(t.numbers),Object(R.a)({},e,{numbers:t.numbers});default:return Object(R.a)({},e)}},q=Object(D.combineReducers)({drewNumbers:I,managePrizesSettings:U}),M=a(45),P=a(46),W=(a(71),a(30)),B=a(47),F=a(48),G=(a(72),{fallbackLng:"it",debug:!0,interpolation:{escapeValue:!1},resources:{en:{translation:F},it:{translation:B}},react:{wait:!0}});W.a.use(m.a).init(G);W.a;var L=Object(P.composeWithDevTools)({}),H=Object(D.createStore)(q,L(Object(D.applyMiddleware)(M.a)));o.a.render(r.a.createElement(s.a,{store:H},r.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[50,1,2]]]);
//# sourceMappingURL=main.0782f27b.chunk.js.map