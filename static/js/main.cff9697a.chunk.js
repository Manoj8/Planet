(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,n){},29:function(e,t,n){e.exports=n(42)},34:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(25),i=n.n(r),c=(n(34),n(10)),s=n(11),l=n(13),u=n(12),h=n(14),m=(n(19),n(16)),d=n(17),v=n(43),f=n(9),p=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={id:null},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.data,n=[],a=t.map(function(t,a){return t.isFavourite&&n.push(t),o.a.createElement("div",{key:a},o.a.createElement(v.a,{className:"card"},o.a.createElement(m.a,{id:a,icon:d.a,onClick:function(n){t.isFavourite=!t.isFavourite,e.setState({id:a})},className:t.isFavourite?"like heart":"dislike heart"}),o.a.createElement("h2",null,t.name)))});return o.a.createElement("div",{className:"app"},a,o.a.createElement(f.b,{to:{pathname:"/Favourite",data:n}},o.a.createElement("button",{className:"open-fav"})))}}]),t}(a.Component),w=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={items:n.props.location.data},n.removeItem=function(e){var t=n.state.items;t.splice(e,1),n.setState({items:t})},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e,t=this,n=this.state.items;return e=void 0===n?"":n.map(function(e,n){return e.isFavourite?o.a.createElement("div",{key:n},o.a.createElement(v.a,{className:"card"},o.a.createElement(m.a,{icon:d.a,id:n,onClick:function(a){e.isFavourite=!1,t.removeItem(n)},className:e.isFavourite?"like heart":"dislike heart"}),o.a.createElement("h2",null,e.name))):""}),o.a.createElement("div",{className:"app"},0===e.length?o.a.createElement("h2",{className:"text"},"No Planets are selected as Favourite"):"",e,o.a.createElement(f.b,{to:"/"},o.a.createElement("button",{className:"go-back"})))}}]),t}(a.Component),b=n(3),g=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={i1:[]},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://assignment-machstatz.herokuapp.com/planet").then(function(e){return e.json()}).then(function(t){e.setState({i1:t})})}},{key:"render",value:function(){var e=this.state.i1;return o.a.createElement("div",null,o.a.createElement("h1",{className:"text"}," Planets "),o.a.createElement(b.a,{exact:!0,path:"/",render:function(){return o.a.createElement(p,{data:e})}}),o.a.createElement(b.a,{exact:!0,path:"/Favourite",component:w}))}}]),t}(a.Component),k=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function E(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}i.a.render(o.a.createElement(f.a,null,o.a.createElement(g,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/Planet",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/Planet","/service-worker.js");k?(function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):E(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):E(t,e)})}}()}},[[29,1,2]]]);
//# sourceMappingURL=main.cff9697a.chunk.js.map