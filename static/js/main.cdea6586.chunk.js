(this["webpackJsonptombola-react"]=this["webpackJsonptombola-react"]||[]).push([[0],{60:function(e,t,a){e.exports=a(79)},65:function(e,t,a){},76:function(e,t,a){},79:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),l=a.n(c),o=(a(65),a(56)),i=a(4),s=a(19),m=a.n(s),u=a(82),d=a(83),b=a(84),E=a(86),f=function(e){return{type:"ADD_DREW_NUMBER",drewNumber:e}},g=function(){var e=Object(i.b)(),t=Object(E.a)().t,a=Object(i.c)((function(e){return e.undoRedoManagement.past.length}))>0,n=Object(i.c)((function(e){return e.undoRedoManagement.future.length}))>0;return r.a.createElement("div",{className:"card border-0"},r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row justify-content-between"},r.a.createElement("div",{className:"btn-group d-flex "},r.a.createElement((function(){return r.a.createElement("button",{className:"btn btn-sm btn-warning mx-1 my-1","data-toggle":"back-arrow",title:t("game-page.go-back"),onClick:function(){e(s.ActionCreators.undo())},disabled:!a},r.a.createElement(u.a,{size:"20",color:"white"}))}),null),r.a.createElement((function(){return r.a.createElement("button",{className:"btn btn-sm btn-warning mx-1 my-1","data-toggle":"forth-arrow",title:t("game-page.go-forth"),onClick:function(){e(s.ActionCreators.redo())},disabled:!n},r.a.createElement(d.a,{size:"20",color:"white"}))}),null)),r.a.createElement((function(){return r.a.createElement("button",{className:"btn btn-danger mx-1 my-1","data-toggle":"settings-button",title:t("generics.settings")},r.a.createElement(b.a,{size:"20",color:"white",onClick:function(){e({type:"SWITCH_IN_GAME_SETTINGS"})}}))}),null)))))},N=a(27),v=a(44),p=a(45),h=a(18),w={rangeRightEdgeExcluded:function(e,t){return Object(h.a)(Array(t-e)).map((function(t,a){return a+e}))},range:function(e,t){return Array.from({length:t-e+1},(function(t,a){return e+a}))},chunkArray:function(e,t){for(var a=[],n=Object(h.a)(e);n.length;)a.push(n.splice(0,t));return a},randomNumber:function(e){return e[Math.floor(Math.random()*e.length)]}},y={getNumbers:function(e){return e.filter((function(e){return!isNaN(e)}))},getNotNumbers:function(e){return e.filter((function(e){return isNaN(e)}))},getCheckedPrizes:function(e){return e.filter((function(e){return e.checked}))}};function j(){var e=Object(v.a)(["\n  pointer-events: none;\n  position: relative;\n  width: calc(50% * (9/16));\n  padding-bottom: calc(50% * (9/16));\n  \n  border-radius: 50%;\n  color: #fff;\n  background-color: #007bff;\n  border-color: #007bff;\n\n  div {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    font-size: calc(5em *(9/16));\n    transform: translate(-50%, -50%);\n  }\n"]);return j=function(){return e},e}var O=p.a.div(j()),k=function(){var e=Object(E.a)().t,t=Object(i.b)(),a=Object(i.c)((function(e){return y.getNumbers(e.undoRedoManagement.present)})),n=Object(i.c)((function(e){return e.managePrizesSettings.automaticDraw})),c=Object(i.c)((function(e){return e.manageDrewNumbers.availableNumbers})),l=function(){var e=w.randomNumber(c.filter((function(e){return!a.includes(e)})));t(f(e))};return r.a.createElement("button",{className:"btn btn-success ".concat(n?"":"disabled"),style:{pointerEvents:n?"":"none"},onClick:function(){return l()}},e("generics.draw"))},S=function(){var e=Object(E.a)().t,t=Object(n.useState)(!1),a=Object(N.a)(t,1)[0],c=Object(i.c)((function(e){return y.getNumbers(e.undoRedoManagement.present)})),l=c[c.length-1];return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"row justify-content-center text-center"},r.a.createElement("h3",null,e("game-page.last-draw-number"))),r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement(O,{className:"my-4"},a?"INSERT HTML CODE SPINNER":r.a.createElement("div",null,null==l?"#":l)))),r.a.createElement("div",{className:"card-footer border-0 d-flex flex-wrap justify-content-center"},r.a.createElement(k,null)))},A=function(){return r.a.createElement("div",{className:"card border-0"},r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement(S,null))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement(g,null))))))},_=function(){var e=Object(i.b)(),t=Object(E.a)().t,a=Object(i.c)((function(e){return y.getCheckedPrizes(e.managePrizesSettings.prizes)})),n=Object(i.c)((function(e){return y.getNotNumbers(e.undoRedoManagement.present)})),c=a.filter((function(e){return!n.includes(e)})),l=c.reduce((function(e,t){return e.id<t.id?e:t}),0),o=c.length>1,s=0===c.length;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row justify-content-between align-items-center"},r.a.createElement("ul",{className:"list-inline"},r.a.createElement("li",{className:"list-inline-item"},r.a.createElement("h5",{className:"align-center text-muted"},t("game-page.actual-prize"))),r.a.createElement("li",{className:"list-inline-item"},r.a.createElement("h2",{className:"align-center text-uppercase",style:{letterSpacing:"0.03em"}},t(s?"welcome-page.no-prize":"welcome-page.prizes.".concat(l.name))))),r.a.createElement("button",{className:"btn btn-info",onClick:function(){e({type:"ADD_ASSIGNED_PRIZE",assignedPrize:l})},disabled:!o},t("generics.award"))))},I=function(e){var t=e.array,a=Object(i.b)(),n=Object(i.c)((function(e){return y.getNumbers(e.undoRedoManagement.present)}));return r.a.createElement("div",{key:t},t.map((function(e){return r.a.createElement("div",{className:"container-fluid",key:"container-".concat(e)},r.a.createElement("div",{className:"row justify-content-between",key:e},e.map((function(e){return r.a.createElement("button",{className:"btn btn-outline-warning col mx-1 my-1 ".concat(n.includes(e)?"active none":""),key:e,value:e,onClick:function(){a(f(e))},style:{pointerEvents:n.includes(e)?"none":""}},r.a.createElement("span",{style:{fontSize:"calc(1.993em * (9/16))",fontWeight:"bold"}},e))}))))})))},D=function(e){var t=e.array;return r.a.createElement(r.a.Fragment,null,t.map((function(e){return r.a.createElement("div",{className:"col-md-6 my-2 col-12",key:"box-".concat(e)},r.a.createElement("div",{className:"card border-0",key:e},r.a.createElement(I,{array:w.chunkArray(e,5)})))})))},x=function(){var e=Object(i.b)(),t=w.range(1,90),a=w.chunkArray(t,15);return Object(n.useEffect)((function(){e({type:"ADD_INITIAL_NUMBERS",numbers:t})})),r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header border-0"},r.a.createElement(_,null)),r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row my-3"},r.a.createElement(D,{array:a})))))},R=a(85),C=function(){var e=Object(E.a)().t,t=Object(i.b)(),a=Object(i.c)((function(e){return e.managePrizesSettings.automaticDraw}));return r.a.createElement("div",{className:"custom-control custom-switch"},r.a.createElement("input",{type:"checkbox",className:"custom-control-input",onChange:function(){t({type:"CHANGE_AUTOMATIC_DRAW_STATE"})},defaultChecked:a,id:"automaticDrawSwitch"}),r.a.createElement("label",{className:"custom-control-label",htmlFor:"automaticDrawSwitch"},e("welcome-page.automatic-draw")))},T=function(){var e=Object(E.a)().t,t=Object(i.b)(),a=Object(i.c)((function(e){return e.managePrizesSettings.prizes})),n=function(e){t({type:"CHANGE_PRIZE_ACTIVATION",id:parseInt(e.target.id)})},c=a.map((function(t){return r.a.createElement("div",{className:"col-lg-2 col-md-4 col-sm-6 col-12",key:"col-".concat(t.id)},r.a.createElement("div",{className:"custom-control custom-checkbox custom-control-inline"},r.a.createElement("input",{type:"checkbox",className:"custom-control-input",onChange:n,checked:t.checked,id:t.id}),r.a.createElement("label",{htmlFor:t.id,className:"custom-control-label"},e("welcome-page.prizes.".concat(t.name)))))}));return r.a.createElement(r.a.Fragment,null,c)},z=function(){var e=Object(E.a)().t;return r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("small",{className:"form-check-label"},e("welcome-page.settings-checkbox-tip")),r.a.createElement("div",{className:"row"},r.a.createElement(T,null))),r.a.createElement("div",{className:"form-group d-flex flex-wrap"},r.a.createElement(C,null)))},M=function(){var e=Object(E.a)().t,t=Object(n.useState)(!0),a=Object(N.a)(t,2),c=a[0],l=a[1];return r.a.createElement(R.a,{show:c,backdrop:"static",size:"lg",centered:!0},r.a.createElement(R.a.Header,null,r.a.createElement(R.a.Title,null,e("generics.welcome"))),r.a.createElement(R.a.Body,null,r.a.createElement(z,null)),r.a.createElement(R.a.Footer,null,r.a.createElement("button",{className:"btn btn-primary",onClick:function(){l(!c)}},e("generics.start-the-game"))))},G=function(){var e=Object(E.a)().t,t=Object(i.b)(),a=Object(i.c)((function(e){return e.managePrizesSettings.showInGameSettings}));return r.a.createElement(R.a,{show:a,backdrop:"static",size:"lg",centered:!0},r.a.createElement(R.a.Header,null,r.a.createElement(R.a.Title,null,e("generics.settings"))),r.a.createElement(R.a.Body,null,r.a.createElement(z,null)),r.a.createElement(R.a.Footer,null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row justify-content-between"},r.a.createElement("button",{className:"btn btn-outline-danger",onClick:function(){return window.location.reload(),!1}},e("generics.reset")),r.a.createElement("button",{className:"btn btn-primary",onClick:function(){t({type:"SWITCH_IN_GAME_SETTINGS"})}},e("generics.save"))))))},P=function(){return r.a.createElement("div",{className:"d-flex justify-content-center align-items-md-center"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row my-2"},r.a.createElement("div",{className:"col-xl-4 col-lg-4 col-12 order-lg-1"},r.a.createElement(A,null)),r.a.createElement("div",{className:"col-xl-8 col-lg-8 col-12 order-lg-0"},r.a.createElement(x,null))),r.a.createElement(M,null),r.a.createElement(G,null)))},W=a(34),H=function(){return r.a.createElement("footer",{className:"footer mt-auto py-3 bg-light text-white"},r.a.createElement("div",{className:"container justify-content-between"},r.a.createElement("span",{className:"text-muted"},"Made with"," ",r.a.createElement("a",{href:"https://it.reactjs.org/",target:"_blank",rel:"noopener noreferrer",className:"text-decoration-none a"},r.a.createElement(W.b,null)),"."," "),r.a.createElement("span",{className:"text-muted"},"For other projects check my ",r.a.createElement(W.a,null)," ",r.a.createElement("a",{href:"https://github.com/albertoforcato/",target:"_blank",rel:"noopener noreferrer",className:"text-decoration-none"},"GitHub")," ","repo.")))},B=(a(76),function(){return r.a.createElement("div",{className:"container d-flex justify-content-center align-items-center"},r.a.createElement("div",{className:"spinner-border text-primary",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")))}),U=function(){return r.a.createElement(n.Suspense,{fallback:r.a.createElement(B,null)},r.a.createElement(o.a,{basename:"/react-tombola"},r.a.createElement("main",{role:"main",className:"flex-shrink-0"},r.a.createElement(P,null)),r.a.createElement(H,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var F=a(12),L=a(10),Z={prizes:[{id:1,name:"ambo",checked:!0},{id:2,name:"terno",checked:!0},{id:3,name:"quaterna",checked:!0},{id:4,name:"cinquina",checked:!0},{id:5,name:"tombola",checked:!0},{id:6,name:"tombolino",checked:!0}],automaticDraw:!1,showInGameSettings:!1},V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_PRIZE_ACTIVATION":var a=e.prizes.map((function(e){return e.id===t.id&&(e.checked=!e.checked),e}));return Object(L.a)({},e,{prizes:a});case"CHANGE_AUTOMATIC_DRAW_STATE":return Object(L.a)({},e,{automaticDraw:!e.automaticDraw});case"SWITCH_IN_GAME_SETTINGS":return Object(L.a)({},e,{showInGameSettings:!e.showInGameSettings});default:return Object(L.a)({},e)}},q={availableNumbers:null},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_INITIAL_NUMBERS":return Object(L.a)({},e,{availableNumbers:t.numbers});case"REMOVE_DREW_NUMBERS":var a=null;return Object(L.a)({},e,{availableNumbers:a});default:return Object(L.a)({},e)}},$=[],K=function(e,t){switch(t.type){case"ADD_DREW_NUMBER":return t.drewNumber;default:return e}},Q=function(e,t){switch(t.type){case"ADD_ASSIGNED_PRIZE":return t.assignedPrize;default:return e}},X=m()((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_DREW_NUMBER":return[].concat(Object(h.a)(e),[K(void 0,t)]);case"ADD_ASSIGNED_PRIZE":return[].concat(Object(h.a)(e),[Q(void 0,t)]);default:return e}})),Y=Object(F.combineReducers)({undoRedoManagement:X,managePrizesSettings:V,manageDrewNumbers:J}),ee=a(53),te=a(54),ae=(a(78),a(33)),ne=a(21),re=a(55),ce=a(57);ae.a.use(ce.a).use(re.a).use(ne.e).init({fallbackLng:"it",debug:!1,interpolation:{escapeValue:!1},ns:["translation"],defaultNS:"translation",backend:{loadPath:"locales/{{lng}}/{{ns}}.json"}});ae.a;var le=Object(te.composeWithDevTools)({}),oe=Object(F.createStore)(Y,le(Object(F.applyMiddleware)(ee.a)));l.a.render(r.a.createElement(i.a,{store:oe},r.a.createElement(U,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[60,1,2]]]);
//# sourceMappingURL=main.cdea6586.chunk.js.map