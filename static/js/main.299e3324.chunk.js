(this["webpackJsonptombola-react"]=this["webpackJsonptombola-react"]||[]).push([[0],{66:function(e,t,a){e.exports=a(88)},71:function(e,t,a){},88:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(14),l=a.n(r),o=(a(71),a(57)),i=a(24),s=a(4),m=a(31),u=a.n(m),d=a(91),b=a(92),E=a(93),f=a(5),N=function(e){return{type:"ADD_DREW_NUMBER",drewNumber:e}},g=function(){var e=Object(s.b)(),t=Object(f.b)().t,a=Object(s.c)((function(e){return e.undoRedoManagement.past.length}))>0,n=Object(s.c)((function(e){return e.undoRedoManagement.future.length}))>0;return c.a.createElement("div",{className:"card border-0"},c.a.createElement("div",{className:"card-body"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row justify-content-between"},c.a.createElement("div",{className:"btn-group d-flex "},c.a.createElement((function(){return c.a.createElement("button",{className:"btn btn-sm btn-warning mx-1 my-1","data-toggle":"back-arrow",title:t("game-page.go-back"),onClick:function(){e(m.ActionCreators.undo())},disabled:!a},c.a.createElement(d.a,{size:"20",color:"white"}))}),null),c.a.createElement((function(){return c.a.createElement("button",{className:"btn btn-sm btn-warning mx-1 my-1","data-toggle":"forth-arrow",title:t("game-page.go-forth"),onClick:function(){e(m.ActionCreators.redo())},disabled:!n},c.a.createElement(b.a,{size:"20",color:"white"}))}),null)),c.a.createElement((function(){return c.a.createElement("button",{className:"btn btn-danger mx-1 my-1"},c.a.createElement(E.a,{size:"20",color:"white",onClick:function(){e({type:"SWITCH_IN_GAME_SETTINGS"})}}))}),null)))))},v=a(25),p=a(50),h=a(51),w=a(23),y={rangeRightEdgeExcluded:function(e,t){return Object(w.a)(Array(t-e)).map((function(t,a){return a+e}))},range:function(e,t){return Array.from({length:t-e+1},(function(t,a){return e+a}))},chunkArray:function(e,t){for(var a=[],n=Object(w.a)(e);n.length;)a.push(n.splice(0,t));return a},randomNumber:function(e){return e[Math.floor(Math.random()*e.length)]}},j={getNumbers:function(e){return e.filter((function(e){return!isNaN(e)}))},getNotNumbers:function(e){return e.filter((function(e){return isNaN(e)}))},getCheckedPrizes:function(e){return e.filter((function(e){return e.checked}))}};function O(){var e=Object(p.a)(["\n  pointer-events: none;\n  position: relative;\n  width: 50%;\n  padding-bottom: 50%;\n  border-radius: 50%;\n  color: #fff;\n  background-color: #007bff;\n  border-color: #007bff;\n\n  div {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    font-size: 6vw;\n    transform: translate(-50%, -50%);\n  }\n"]);return O=function(){return e},e}var k=h.a.div(O()),S=function(){var e=Object(f.b)().t,t=Object(s.b)(),a=Object(s.c)((function(e){return j.getNumbers(e.undoRedoManagement.present)})),n=Object(s.c)((function(e){return e.managePrizesSettings.automaticDraw})),r=Object(s.c)((function(e){return e.manageDrewNumbers.availableNumbers})),l=function(){var e=y.randomNumber(r.filter((function(e){return!a.includes(e)})));t(N(e))};return c.a.createElement("button",{className:"btn btn-success ".concat(n?"":"disabled"),style:{pointerEvents:n?"":"none"},onClick:function(){return l()}},e("generics.draw"))},A=function(){var e=Object(f.b)().t,t=Object(n.useState)(!1),a=Object(v.a)(t,2),r=a[0],l=(a[1],Object(s.c)((function(e){return j.getNumbers(e.undoRedoManagement.present)}))),o=l[l.length-1];return c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-body"},c.a.createElement("div",{className:"row justify-content-center"},c.a.createElement("h3",{className:""},e("game-page.last-draw-number"))),c.a.createElement("div",{className:"row justify-content-center"},c.a.createElement(k,{className:"my-4"},r?"INSERT HTML CODE SPINNER":c.a.createElement("div",null,null==o?"#":o)))),c.a.createElement("div",{className:"card-footer border-0 d-flex flex-wrap justify-content-center"},c.a.createElement(S,null)))},I=function(){return c.a.createElement("div",{className:"card border-0"},c.a.createElement("div",{className:"card-body"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col"},c.a.createElement(g,null))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col"},c.a.createElement(A,null))))))},_=function(e){var t=e.gameNumber,a=Object(f.b)().t,n=Object(s.b)(),r=Object(s.c)((function(e){return j.getNumbers(e.undoRedoManagement.present)})),l=function(e){var t=e.array;return c.a.createElement("div",{key:t},t.map((function(e){return c.a.createElement("div",{className:"container-fluid",key:"container-".concat(e)},c.a.createElement("div",{className:"row justify-content-between",key:e},e.map((function(e){return c.a.createElement("button",{className:"btn btn-outline-warning col mx-1 my-1 ".concat(r.includes(e)?"active none":""),key:e,value:e,onClick:function(){n(N(e))},style:{pointerEvents:r.includes(e)?"none":""}},c.a.createElement("div",null,e))}))))})))};return c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-header"},c.a.createElement((function(){var e=Object(s.c)((function(e){return j.getCheckedPrizes(e.managePrizesSettings.prizes)}));console.log("CHECKED_PRIZES",e);var t=Object(s.c)((function(e){return j.getNotNumbers(e.undoRedoManagement.present)}));console.log("ASSIGNED_PRIZES",t);var r=e.filter((function(e){return!t.includes(e)}));console.log("AVAILABLE_PRIZES",r);var l=r.reduce((function(e,t){return e.id<t.id?e:t}));console.log("NEXT_PRIZE",l);return c.a.createElement("div",{className:"card-title"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row justify-content-between"},c.a.createElement("div",{className:""},c.a.createElement("h5",{className:"align-center",style:{display:"inline-block"}},a("game-page.actual-prize"),"\xa0\xa0"),c.a.createElement("h2",{className:"align-center",style:{display:"inline-block"}},a("welcome-page.prizes.".concat(l.name)))),c.a.createElement("button",{className:"btn btn-info",onClick:function(){n({type:"ADD_ASSIGNED_PRIZE",assignedPrize:l})}},a("generics.award")))))}),null)),c.a.createElement("div",{className:"card-body"},c.a.createElement("div",{className:"container-fluid"},c.a.createElement("div",{className:"row my-3"},c.a.createElement((function(e){var t=e.array;return c.a.createElement(c.a.Fragment,null,t.map((function(e){return c.a.createElement("div",{className:"col-md-6 my-1 col-12",key:"box-".concat(e)},c.a.createElement("div",{className:"card",key:e},c.a.createElement("div",{className:"card-body"},c.a.createElement(l,{array:y.chunkArray(e,5)}))))})))}),{array:t})))))},D=a(94),R=function(){var e=Object(f.b)().t,t=Object(s.b)(),a=Object(s.c)((function(e){return e.managePrizesSettings.automaticDraw}));return c.a.createElement("div",{className:"custom-control custom-switch"},c.a.createElement("input",{type:"checkbox",className:"custom-control-input",onChange:function(){t({type:"CHANGE_AUTOMATIC_DRAW_STATE"})},defaultChecked:a,id:"automaticDrawSwitch"}),c.a.createElement("label",{className:"custom-control-label",htmlFor:"automaticDrawSwitch"},e("welcome-page.automatic-draw")))},C=function(){var e=Object(f.b)().t,t=Object(s.b)(),a=Object(s.c)((function(e){return e.managePrizesSettings.prizes})),n=function(e){t({type:"CHANGE_PRIZE_ACTIVATION",id:parseInt(e.target.id)})},r=a.map((function(t){return c.a.createElement("div",{className:"col-lg-2 col-md-4 col-sm-6 col-12",key:"col-".concat(t.id)},c.a.createElement("div",{className:"custom-control custom-checkbox custom-control-inline"},c.a.createElement("input",{type:"checkbox",className:"custom-control-input",onChange:n,checked:t.checked,id:t.id}),c.a.createElement("label",{htmlFor:t.id,className:"custom-control-label"},e("welcome-page.prizes.".concat(t.name)))))}));return c.a.createElement(c.a.Fragment,null,r)},T=function(){var e=Object(f.b)().t;return c.a.createElement("form",null,c.a.createElement("div",{className:"form-group"},c.a.createElement("small",{className:"form-check-label"},e("welcome-page.settings-checkbox-tip")),c.a.createElement("div",{className:"row"},c.a.createElement(C,null))),c.a.createElement("div",{className:"form-group d-flex flex-wrap"},c.a.createElement(R,null)))},z=function(){var e=Object(f.b)().t,t=Object(n.useState)(!0),a=Object(v.a)(t,2),r=a[0],l=a[1];return c.a.createElement(D.a,{show:r,backdrop:"static",size:"lg",centered:!0},c.a.createElement(D.a.Header,null,c.a.createElement(D.a.Title,null,e("generics.welcome"))),c.a.createElement(D.a.Body,null,c.a.createElement(T,null)),c.a.createElement(D.a.Footer,null,c.a.createElement("button",{className:"btn btn-primary",onClick:function(){l(!r)}},e("generics.start-the-game"))))},M=function(){var e=Object(f.b)().t,t=Object(s.b)(),a=Object(s.c)((function(e){return e.managePrizesSettings.showInGameSettings})),n=function(){t({type:"SWITCH_IN_GAME_SETTINGS"})};return c.a.createElement(D.a,{show:a,backdrop:"static",size:"lg",centered:!0},c.a.createElement(D.a.Header,null,c.a.createElement(D.a.Title,null,e("generics.settings"))),c.a.createElement(D.a.Body,null,c.a.createElement(T,null)),c.a.createElement(D.a.Footer,null,c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row justify-content-between"},c.a.createElement("button",{className:"btn btn-outline-danger",onClick:n},e("generics.reset")),c.a.createElement("button",{className:"btn btn-primary",onClick:n},e("generics.save"))))))},P=function(){var e=Object(s.b)(),t=y.range(1,90),a=y.chunkArray(t,15);return Object(n.useEffect)((function(){e({type:"ADD_INITIAL_NUMBERS",numbers:t})})),c.a.createElement("div",{className:"d-flex justify-content-center align-items-md-center"},c.a.createElement("div",{className:"container-fluid"},c.a.createElement("div",{className:"row my-2"},c.a.createElement("div",{className:"col-xl-4 col-md-4 offset-md-0 col-12 order-md-1"},c.a.createElement(I,null)),c.a.createElement("div",{className:"col-xl-8 col-md-8 col-12 order-md-0"},c.a.createElement(_,{gameNumber:a}))),c.a.createElement(z,null),c.a.createElement(M,null)))};var x=function(){return c.a.createElement("div",{className:"spinner-border text-primary",role:"status"},c.a.createElement("span",{className:"sr-only"},"Loading..."))},G=function(){return c.a.createElement(n.Suspense,{fallback:c.a.createElement(x,null)},c.a.createElement(o.a,{basename:"/react-tombola"},c.a.createElement("div",{className:"App"},c.a.createElement(i.c,null,c.a.createElement(i.a,{exact:!0,path:"/",component:P})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var W=a(20),B=a(19),H={prizes:[{id:1,name:"ambo",checked:!0},{id:2,name:"terna",checked:!0},{id:3,name:"quaterna",checked:!0},{id:4,name:"cinquina",checked:!0},{id:5,name:"tombola",checked:!0},{id:6,name:"tombolino",checked:!0}],automaticDraw:!1,showInGameSettings:!1},Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_PRIZE_ACTIVATION":var a=e.prizes.map((function(e){return e.id===t.id&&(e.checked=!e.checked),e}));return Object(B.a)({},e,{prizes:a});case"CHANGE_AUTOMATIC_DRAW_STATE":return Object(B.a)({},e,{automaticDraw:!e.automaticDraw});case"SWITCH_IN_GAME_SETTINGS":return Object(B.a)({},e,{showInGameSettings:!e.showInGameSettings});default:return Object(B.a)({},e)}},U={availableNumbers:null},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_INITIAL_NUMBERS":return Object(B.a)({},e,{availableNumbers:t.numbers});case"REMOVE_DREW_NUMBERS":var a=null;return Object(B.a)({},e,{availableNumbers:a});default:return Object(B.a)({},e)}},F=[],V=function(e,t){switch(t.type){case"ADD_DREW_NUMBER":return t.drewNumber;default:return e}},q=function(e,t){switch(t.type){case"ADD_ASSIGNED_PRIZE":return console.log("ASSIGNED_PRIZE",t.assignedPrize),t.assignedPrize;default:return e}},J=u()((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_DREW_NUMBER":return[].concat(Object(w.a)(e),[V(void 0,t)]);case"ADD_ASSIGNED_PRIZE":return[].concat(Object(w.a)(e),[q(void 0,t)]);default:return e}})),K=Object(W.combineReducers)({undoRedoManagement:J,managePrizesSettings:Z,manageDrewNumbers:L}),X=a(59),$=a(60),Q=(a(87),a(41)),Y=a(61),ee=a(62);Q.a.use(ee.a).use(Y.a).use(f.a).init({fallbackLng:"it",debug:!1,interpolation:{escapeValue:!1},ns:["translation"],defaultNS:"translation",backend:{loadPath:"locales/{{lng}}/{{ns}}.json"}});Q.a;var te=Object($.composeWithDevTools)({}),ae=Object(W.createStore)(K,te(Object(W.applyMiddleware)(X.a)));l.a.render(c.a.createElement(s.a,{store:ae},c.a.createElement(G,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[66,1,2]]]);
//# sourceMappingURL=main.299e3324.chunk.js.map