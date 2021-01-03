(this["webpackJsonptodo-list-react-app"]=this["webpackJsonptodo-list-react-app"]||[]).push([[0],{18:function(t,e,o){},20:function(t,e,o){"use strict";o.r(e);var i=o(0),s=o(1),n=o.n(s),l=o(9),a=o.n(l),c=(o(18),o(11)),r=o(3),d=o(4),u=o(2),h=o(6),b=o(5),p=o(12),j=(o(19),o(8),function(t){Object(h.a)(o,t);var e=Object(b.a)(o);function o(t){var i;return Object(r.a)(this,o),(i=e.call(this,t)).state={title:"",duration:""},i.handleSubmit=i.handleSubmit.bind(Object(u.a)(i)),i}return Object(d.a)(o,[{key:"handleChange",value:function(t){var e={};e[t.target.name]=t.target.value,this.setState(e)}},{key:"handleSubmit",value:function(t){t.preventDefault(),this.props.onsubmit(this.state.title,this.state.duration)}},{key:"render",value:function(){var t=this;return Object(i.jsxs)("form",{className:"create-form",onChange:function(e){return t.handleChange(e)},onSubmit:function(e){return t.handleSubmit(e)},children:[Object(i.jsx)("input",{type:"text",id:"title",placeholder:"What do you need to do?",name:"title",required:!0}),Object(i.jsxs)("select",{name:"duration",id:"duration",required:!0,children:[Object(i.jsx)("option",{value:"",children:"How long will it take?"}),Object(i.jsx)("option",{value:"15 minutes",children:"15 minutes"}),Object(i.jsx)("option",{value:"30 minutes",children:"30 minutes"}),Object(i.jsx)("option",{value:"45 minutes",children:"45 minutes"}),Object(i.jsx)("option",{value:"1 hour",children:"1 hour"}),Object(i.jsx)("option",{value:"1 hour 15 minutes",children:"1 hour 15 minutes"}),Object(i.jsx)("option",{value:"1 hour 30 minutes",children:"1 hour 30 minutes"}),Object(i.jsx)("option",{value:"1 hour 45 minutes",children:"1 hour 45 minutes"}),Object(i.jsx)("option",{value:"2 hours",children:"2 hours"})]}),Object(i.jsx)("button",{type:"submit",className:"button-add",children:"Add"})]})}}]),o}(n.a.Component)),f=function(t){return Object(i.jsxs)("div",{children:[Object(i.jsxs)("h5",{children:["All Tasks ",Object(i.jsxs)("span",{className:"info-icon",children:["( ",t.appinfo.totalTodos," )"]})]}),Object(i.jsxs)("div",{className:"todo-app-meta",children:[Object(i.jsxs)("button",{style:"all"===t.appinfo.visibility?{backgroundColor:"#50E3A4"}:{backgroundColor:""},id:"all",onClick:function(e){return t.filter(e.target.id)},children:["All ",Object(i.jsx)("span",{className:"info-icon",children:t.appinfo.allTodos.length})]}),Object(i.jsxs)("button",{style:"in_progress"===t.appinfo.visibility?{backgroundColor:"#50E3A4"}:{backgroundColor:""},id:"inprogress",onClick:function(e){return t.filter(e.target.id)},children:["In Progress ",Object(i.jsx)("span",{className:"info-icon",children:t.appinfo.inProgress})]}),Object(i.jsxs)("button",{style:"completed"===t.appinfo.visibility?{backgroundColor:"#50E3A4"}:{backgroundColor:""},id:"completed",onClick:function(e){return t.filter(e.target.id)},children:["Completed ",Object(i.jsx)("span",{className:"info-icon",children:t.appinfo.completedTodos})]})]})]})},m=o.p+"static/media/clock-solid.e9b1650f.svg",O=function(t){Object(h.a)(o,t);var e=Object(b.a)(o);function o(){return Object(r.a)(this,o),e.apply(this,arguments)}return Object(d.a)(o,[{key:"buildListingHTML",value:function(){var t=this;return this.props.todoinfo.map((function(e){return Object(i.jsxs)("div",{className:"todo-container",children:[Object(i.jsxs)("div",{children:[Object(i.jsx)("h5",{children:e.title}),Object(i.jsxs)("div",{className:"todo-info",children:[Object(i.jsx)("img",{className:"meta-icon",src:m,alt:"clock icon"}),e.duration]})]}),Object(i.jsx)("input",{id:e.id,onClick:function(e){return t.props.handleCheckBox(e)},type:"checkbox",name:"completed",checked:e.completed?"checked":""})]},e.id)}))}},{key:"render",value:function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)(f,{appinfo:this.props.appinfo,clearlist:this.props.clearlist,filter:this.props.filter}),this.buildListingHTML(),Object(i.jsx)("button",{className:"button-clear",onClick:this.props.clearlist,children:"Clear List"})]})}}]),o}(n.a.Component),v=function(t){Object(h.a)(o,t);var e=Object(b.a)(o);function o(t){var i;return Object(r.a)(this,o),(i=e.call(this,t)).state={date:new Date},i}return Object(d.a)(o,[{key:"render",value:function(){return Object(i.jsx)("div",{className:"timestamp",children:Object(i.jsxs)("p",{children:[this.state.date.getDate()," / ",this.state.date.getMonth()+1," / ",this.state.date.getFullYear()]})})}}]),o}(n.a.Component),g=function(t){Object(h.a)(o,t);var e=Object(b.a)(o);function o(t){var i;return Object(r.a)(this,o),(i=e.call(this,t)).state={allTodos:[],publishedTodos:[],completedTodos:0,inProgress:0,totalTodos:0,visibility:"all"},i.updateAllTodos=i.updateAllTodos.bind(Object(u.a)(i)),i.handleCheckBox=i.handleCheckBox.bind(Object(u.a)(i)),i.clearList=i.clearList.bind(Object(u.a)(i)),i.filterPublishedTodos=i.filterPublishedTodos.bind(Object(u.a)(i)),i}return Object(d.a)(o,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("todo");this.setState((function(e){return{allTodos:JSON.parse(t)||[],publishedTodos:e.allTodos}}))}},{key:"updateAllTodos",value:function(t,e){var o=this,i={title:t,duration:e,id:this.state.allTodos.length,completed:!1},s=[].concat(Object(c.a)(this.state.allTodos),[i]);this.setState((function(t){return{allTodos:s,publishedTodos:s,inProgress:t.inProgress+1,totalTodos:t.totalTodos+1,visibility:"all"}}),(function(){return localStorage.setItem("todo",JSON.stringify(o.state.allTodos))}))}},{key:"handleCheckBox",value:function(t){var e=this.state.allTodos;e[t.target.id].completed=t.target.checked,t.target.checked?this.setState((function(t){return{allTodos:e,completedTodos:t.completedTodos+1,inProgress:t.inProgress-1}})):this.setState((function(t){return{allTodos:e,completedTodos:t.completedTodos-1,inProgress:t.inProgress+1}}))}},{key:"clearList",value:function(){localStorage.clear(),this.setState({allTodos:[],publishedTodos:[],completedTodos:0,inProgress:0,totalTodos:0,visibility:"all"})}},{key:"filterPublishedTodos",value:function(t){if("completed"===t){var e=this.state.allTodos.filter((function(t){return!0===t.completed}));this.setState({publishedTodos:e,visibility:"completed"})}else if("inprogress"===t){var o=this.state.allTodos.filter((function(t){return!1===t.completed}));this.setState({publishedTodos:o,visibility:"in_progress"})}else this.setState((function(t){return{publishedTodos:t.allTodos,visibility:"all"}}))}},{key:"render",value:function(){return console.log(this.state),Object(i.jsx)(p.a,{children:Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(v,{}),Object(i.jsx)(j,{onsubmit:this.updateAllTodos}),Object(i.jsx)(O,{todoinfo:this.state.publishedTodos,handleCheckBox:this.handleCheckBox,appinfo:this.state,clearlist:this.clearList,filter:this.filterPublishedTodos})]})})}}]),o}(n.a.Component),x=function(t){t&&t instanceof Function&&o.e(3).then(o.bind(null,21)).then((function(e){var o=e.getCLS,i=e.getFID,s=e.getFCP,n=e.getLCP,l=e.getTTFB;o(t),i(t),s(t),n(t),l(t)}))};a.a.render(Object(i.jsx)(n.a.StrictMode,{children:Object(i.jsx)(g,{})}),document.getElementById("root")),x()},8:function(t,e,o){}},[[20,1,2]]]);
//# sourceMappingURL=main.5ebf615d.chunk.js.map