(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(7),c=n.n(o),i=(n(13),n(14),n(1)),l=n(2),s=n(4),u=n(3),h=n(5),m=function(e){var t=e.name,n=e.id,a=e.email;return r.a.createElement("div",{className:"bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},r.a.createElement("img",{src:"https://robohash.org/test".concat(n,"?200x200"),height:"400px",width:"300px",alt:"robot"}),r.a.createElement("div",null,r.a.createElement("h2",null,t),r.a.createElement("p",null,a)))},d=function(e){var t=e.robot,n=t.map((function(e,n){return r.a.createElement(m,{name:t[n].name,key:t[n].id,id:t[n].id,email:t[n].email})}));return r.a.createElement("div",null,n)},b=function(e){var t=e.onLiveSearch;return r.a.createElement("div",{className:""},r.a.createElement("input",{type:"search",className:"tc pa3 ba b--green bg-lightest-blue",placeholder:"Search Robots",onChange:t}))},f=(n(15),function(e){return r.a.createElement("div",{style:{overflowY:"scroll",border:"5px solid black",height:"800px"}},e.children)}),v=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={errorFound:!1},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({errorFound:!0})}},{key:"render",value:function(){return this.state.errorFound?r.a.createElement("h1",null,"Ooops Something went wrong"):this.props.children}}]),t}(a.Component),p=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).onLiveSearch=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchfield;if(t.length){var a=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f1"},"Robofriends"),r.a.createElement(b,{onLiveSearch:this.onLiveSearch}),r.a.createElement(f,null,r.a.createElement(v,null,r.a.createElement(d,{robot:a}))))}return r.a.createElement("h1",null,"Loading")}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,t,n){e.exports=n(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.37265be6.chunk.js.map