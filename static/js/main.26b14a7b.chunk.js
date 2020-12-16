(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{27:function(e,n,t){},28:function(e,n,t){},29:function(e,n,t){},31:function(e,n,t){"use strict";t.r(n);var o=t(1),r=t(0),i=t.n(r),c=t(3),s=t.n(c),a=t(6),l=t(2),u="CHANGE_SEARCH_FIELD",d="REQUEST_ROBOTS_PENDING",h="REQUEST_ROBOTS_SUCCESS",b="REQUEST_ROBOTS_FAILED",f={searchField:""},g={isPending:!1,robots:[],error:""},j=t(15),p=t(16),v=(t(27),t(4)),O=t(5),m=t(8),w=t(7),y=function(e){var n=e.id,t=e.name,r=e.email;return Object(o.jsxs)("div",{className:"bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(o.jsx)("img",{src:"https://robohash.org/".concat(n,"?size=200x200"),alt:"robots"}),Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{className:"mt2 mb1",children:t}),Object(o.jsx)("p",{className:"mt1 mb1",children:r})]})]})},x=function(e){var n=e.robots,t=n.map((function(e,t){return Object(o.jsx)(y,{id:n[t].id,name:n[t].name,email:n[t].email},t)}));return Object(o.jsx)("div",{children:t})},R=(t(28),function(e){var n=e.searchChange;return Object(o.jsx)("div",{className:"pa2 mt1 mb2",children:Object(o.jsx)("input",{className:"pa3 br-pill w6 ba b--green bg-lightest-blue",type:"search",placeholder:"Search Robots",onChange:n})})}),S=function(e){Object(m.a)(t,e);var n=Object(w.a)(t);function t(e){var o;return Object(v.a)(this,t),(o=n.call(this,e)).state={hasError:!1},o}return Object(O.a)(t,[{key:"componentDidCatch",value:function(e,n){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(o.jsx)("h1",{className:"tc",children:"Oooops. That is not good!"}):this.props.children}}]),t}(r.Component),C=(t(29),function(e){Object(m.a)(t,e);var n=Object(w.a)(t);function t(){return Object(v.a)(this,t),n.apply(this,arguments)}return Object(O.a)(t,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,n=e.searchField,t=e.onSearchChange,r=e.robots,i=e.isPending,c=r.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return i?Object(o.jsx)("h1",{className:"tc",children:"Loading"}):Object(o.jsxs)("div",{className:"tc",children:[Object(o.jsx)("h1",{className:"f2 mb0",children:"RoboFriends"}),Object(o.jsx)(R,{searchChange:t}),Object(o.jsx)(S,{children:Object(o.jsx)(x,{robots:c})})]})}}]),t}(r.Component)),E=Object(a.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}}),(function(e){return{onSearchChange:function(n){return e((t=n.target.value,{type:u,payload:t}));var t},onRequestRobots:function(){return function(e){e({type:d}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(n){e({type:h,payload:n})})).catch((function(n){return e({type:b,payload:n})}))}(e)}}}))(C),k=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function N(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var F=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,32)).then((function(n){var t=n.getCLS,o=n.getFID,r=n.getFCP,i=n.getLCP,c=n.getTTFB;t(e),o(e),r(e),i(e),c(e)}))},P=(t(30),Object(j.createLogger)()),T=Object(l.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(n.type){case u:return Object.assign({},e,{searchField:n.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(n.type){case d:return Object.assign({},e,{isPending:!0});case h:return Object.assign({},e,{robots:n.payload,isPending:!1});case b:return Object.assign({},e,{error:n.payload,isPending:!1});default:return e}}}),L=Object(l.d)(T,Object(l.a)(p.a,P));s.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(a.a,{store:L,children:Object(o.jsx)(E,{})})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/robofriends",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/robofriends","/service-worker.js");k?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):N(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):N(n,e)}))}}(),F()}},[[31,1,2]]]);
//# sourceMappingURL=main.26b14a7b.chunk.js.map