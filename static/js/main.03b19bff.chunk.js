(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(1),s=n.n(r),a=n(7),o=n.n(a),i=(n(13),n(2)),h=n(3),b=n(5),l=n(4),u=function(e){var t=e.id,n=e.name,r=e.email;return Object(c.jsxs)("div",{className:"bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(c.jsx)("img",{src:"https://robohash.org/".concat(t,"?size=200x200"),alt:"robots"}),Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{className:"mt2 mb1",children:n}),Object(c.jsx)("p",{className:"mt1 mb1",children:r})]})]})},j=function(e){var t=e.robots,n=t.map((function(e,n){return Object(c.jsx)(u,{id:t[n].id,name:t[n].name,email:t[n].email},n)}));return Object(c.jsx)("div",{children:n})},d=(n(14),function(e){var t=e.searchChange;return Object(c.jsx)("div",{className:"pa2 mt1 mb2",children:Object(c.jsx)("input",{className:"pa3 br-pill w6 ba b--green bg-lightest-blue",type:"search",placeholder:"Search Robots",onChange:t})})}),m=function(e){Object(b.a)(n,e);var t=Object(l.a)(n);function n(e){var c;return Object(i.a)(this,n),(c=t.call(this,e)).state={hasError:!1},c}return Object(h.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(c.jsx)("h1",{className:"tc",children:"Oooops. That is not good!"}):this.props.children}}]),n}(r.Component),f=(n(15),function(e){Object(b.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchfield,r=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return t.length?Object(c.jsxs)("div",{className:"tc",children:[Object(c.jsx)("h1",{className:"f2 mb0",children:"RoboFriends"}),Object(c.jsx)(d,{searchChange:this.onSearchChange}),Object(c.jsx)(m,{children:Object(c.jsx)(j,{robots:r})})]}):Object(c.jsx)("h1",{className:"tc",children:"Loading"})}}]),n}(r.Component)),O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),s(e),a(e)}))};n(16);o.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(f,{})}),document.getElementById("root")),O()}},[[17,1,2]]]);
//# sourceMappingURL=main.03b19bff.chunk.js.map