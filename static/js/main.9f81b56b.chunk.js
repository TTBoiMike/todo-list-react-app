(this["webpackJsonptodo-list-react-app"]=this["webpackJsonptodo-list-react-app"]||[]).push([[0],{18:function(t,e,o){},20:function(t,e,o){"use strict";o.r(e);var i=o(0),n=o(1),s=o.n(n),l=o(9),a=o.n(l),r=(o(18),o(11)),c=o(2),d=o(3),u=o(5),h=o(4),b=o(12),p=(o(19),o(8),o(6)),j=function(t){Object(u.a)(o,t);var e=Object(h.a)(o);function o(t){var i;return Object(c.a)(this,o),(i=e.call(this,t)).state={title:"",duration:""},i.handleSubmit=i.handleSubmit.bind(Object(p.a)(i)),i}return Object(d.a)(o,[{key:"handleChange",value:function(t){var e={};e[t.target.name]=t.target.value,this.setState(e)}},{key:"handleSubmit",value:function(t){t.preventDefault(),this.props.onsubmit(this.state.title,this.state.duration),t.currentTarget.title.value="",t.currentTarget.duration.value=""}},{key:"render",value:function(){var t=this;return Object(i.jsxs)("div",{children:[Object(i.jsxs)("form",{className:"create-form",onChange:function(e){return t.handleChange(e)},onSubmit:function(e){return t.handleSubmit(e)},children:[Object(i.jsx)("input",{type:"text",id:"title",placeholder:"Add a task",name:"title",required:!0}),Object(i.jsxs)("select",{name:"duration",id:"duration",required:!0,children:[Object(i.jsx)("option",{value:"",children:"How long will it take?"}),Object(i.jsx)("option",{value:"15 minutes",children:"15 minutes"}),Object(i.jsx)("option",{value:"30 minutes",children:"30 minutes"}),Object(i.jsx)("option",{value:"45 minutes",children:"45 minutes"}),Object(i.jsx)("option",{value:"1 hour",children:"1 hour"}),Object(i.jsx)("option",{value:"1 hour 15 minutes",children:"1 hour 15 minutes"}),Object(i.jsx)("option",{value:"1 hour 30 minutes",children:"1 hour 30 minutes"}),Object(i.jsx)("option",{value:"1 hour 45 minutes",children:"1 hour 45 minutes"}),Object(i.jsx)("option",{value:"2 hours",children:"2 hours"})]}),Object(i.jsx)("button",{type:"submit",className:"button-add",children:"Add"})]}),Object(i.jsx)("button",{className:"button-clear",onClick:this.props.clearlist,children:"Clear List"})]})}}]),o}(s.a.Component),f=function(t){return Object(i.jsx)("div",{children:Object(i.jsxs)("div",{className:"todo-app-meta",children:[Object(i.jsxs)("button",{style:"all"===t.appinfo.visibility?{backgroundColor:"#50E3A4"}:{backgroundColor:""},id:"all",onClick:function(e){return t.filter(e.target.id)},children:["All ",Object(i.jsx)("span",{className:"info-icon",children:t.appinfo.allTodos.length})]}),Object(i.jsxs)("button",{style:"inprogress"===t.appinfo.visibility?{backgroundColor:"#50E3A4"}:{backgroundColor:""},id:"inprogress",onClick:function(e){return t.filter(e.target.id)},children:["In Progress ",Object(i.jsx)("span",{className:"info-icon",children:t.appinfo.inProgress})]}),Object(i.jsxs)("button",{style:"completed"===t.appinfo.visibility?{backgroundColor:"#50E3A4"}:{backgroundColor:""},id:"completed",onClick:function(e){return t.filter(e.target.id)},children:["Completed ",Object(i.jsx)("span",{className:"info-icon",children:t.appinfo.completedTodos})]})]})})},m=o.p+"static/media/clock-solid.e9b1650f.svg",O=function(t){Object(u.a)(o,t);var e=Object(h.a)(o);function o(){return Object(c.a)(this,o),e.apply(this,arguments)}return Object(d.a)(o,[{key:"buildListingHTML",value:function(){var t=this;return this.props.todoinfo.map((function(e){return Object(i.jsxs)("div",{className:"todo-container",children:[Object(i.jsxs)("div",{children:[Object(i.jsx)("p",{children:e.title}),Object(i.jsxs)("div",{className:"todo-info",children:[Object(i.jsx)("img",{className:"meta-icon",src:m,alt:"clock icon"}),e.duration]})]}),Object(i.jsx)("input",{id:e.id,onClick:function(e){return t.props.handleCheckBox(e)},type:"checkbox",name:"completed",checked:e.completed?"checked":""})]},e.id)}))}},{key:"render",value:function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)(f,{appinfo:this.props.appinfo,clearlist:this.props.clearlist,filter:this.props.filter}),this.buildListingHTML()]})}}]),o}(s.a.Component),v=function(t){Object(u.a)(o,t);var e=Object(h.a)(o);function o(t){var i;return Object(c.a)(this,o),(i=e.call(this,t)).state={date:new Date},i}return Object(d.a)(o,[{key:"render",value:function(){return Object(i.jsx)("div",{className:"timestamp",children:Object(i.jsxs)("h4",{children:["Todo List - ",this.state.date.getDate()," / ",this.state.date.getMonth()+1," / ",this.state.date.getFullYear()]})})}}]),o}(s.a.Component),g=function(t){Object(u.a)(o,t);var e=Object(h.a)(o);function o(t){var i;return Object(c.a)(this,o),(i=e.call(this,t)).updateAllTodos=function(t,e){var o={title:t,duration:e,id:i.state.allTodos.length,completed:!1},n=[].concat(Object(r.a)(i.state.allTodos),[o]);i.setState((function(t){return{allTodos:n,publishedTodos:n,inProgress:t.inProgress+1,totalTodos:t.totalTodos+1,visibility:"all"}}),(function(){return localStorage.setItem("todo",JSON.stringify(i.state.allTodos))}))},i.handleCheckBox=function(t){var e=i.state.allTodos;e[t.target.id].completed=t.target.checked,t.target.checked?i.setState((function(t){return{allTodos:e,completedTodos:t.completedTodos+1,inProgress:0!==t.inProgress?t.inProgress-1:t.inProgress}})):i.setState((function(t){return{allTodos:e,completedTodos:t.completedTodos-1,inProgress:t.inProgress+1}})),setTimeout((function(){i.filterPublishedTodos(i.state.visibility)}),250)},i.clearList=function(){localStorage.clear(),i.setState({allTodos:[],publishedTodos:[],completedTodos:0,inProgress:0,totalTodos:0,visibility:"all"})},i.filterPublishedTodos=function(t){if("completed"===t){var e=i.state.allTodos.filter((function(t){return!0===t.completed}));i.setState({publishedTodos:e,visibility:"completed"})}else if("inprogress"===t){var o=i.state.allTodos.filter((function(t){return!1===t.completed}));i.setState({publishedTodos:o,visibility:"inprogress"})}else i.setState((function(t){return{publishedTodos:t.allTodos,visibility:"all"}}))},i.state={allTodos:[],publishedTodos:[],completedTodos:0,inProgress:0,totalTodos:0,visibility:"all"},i}return Object(d.a)(o,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("todo");this.setState((function(e){return{allTodos:JSON.parse(t)||[],publishedTodos:e.allTodos}})),this.filterPublishedTodos("all")}},{key:"render",value:function(){return console.log(this.state),Object(i.jsx)(b.a,{children:Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(v,{}),Object(i.jsx)(j,{onsubmit:this.updateAllTodos,clearlist:this.clearList}),Object(i.jsx)(O,{todoinfo:this.state.publishedTodos,handleCheckBox:this.handleCheckBox,appinfo:this.state,clearlist:this.clearList,filter:this.filterPublishedTodos})]})})}}]),o}(s.a.Component),T=function(t){t&&t instanceof Function&&o.e(3).then(o.bind(null,21)).then((function(e){var o=e.getCLS,i=e.getFID,n=e.getFCP,s=e.getLCP,l=e.getTTFB;o(t),i(t),n(t),s(t),l(t)}))};a.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(g,{})}),document.getElementById("root")),T()},8:function(t,e,o){}},[[20,1,2]]]);
//# sourceMappingURL=main.9f81b56b.chunk.js.map