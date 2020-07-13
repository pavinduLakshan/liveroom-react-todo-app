(this["webpackJsonpliveroom-todo"]=this["webpackJsonpliveroom-todo"]||[]).push([[0],{104:function(e,t,a){},109:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(11),r=a.n(l),i=a(64),c=a(26),m=a(38),d=a(153),u=a(154),s=a(152),f=a(65),p=(a(104),a(113)),E=a(110),v=a(111),b=a(83),g=a.n(b),h=a(82),y=a.n(h),k=a(84),C=a.n(k),w=a(149),j=a(86),O=a.n(j),S=a(157),x=a(85),D=Object(m.a)((function(e){return{paper:{padding:e.spacing(2),textAlign:"left",color:e.palette.text.secondary,display:"flex",flexDirection:"row"}}})),N=function(e){var t=e.id,a=e.name,l=e.date,r=e.time,i=e.isCompleted,m=e.onComplete,d=e.onDelete,u=e.onReverse,s=D(),b=Object(n.useState)(null),h=Object(c.a)(b,2),k=h[0],j=h[1],N=function(){j(null)};return o.a.createElement(E.a,{elevation:3,className:s.paper,style:{color:i?"white":"black",marginBottom:"2%",backgroundColor:i?"#35C706":"white"}},o.a.createElement("div",null,o.a.createElement(f.a,{variant:"h6",className:s.title},a),o.a.createElement(f.a,{variant:"subtitle1"},l," | ",r)),o.a.createElement("div",{style:{flexGrow:1}}),i?o.a.createElement("div",null,o.a.createElement(v.a,null,o.a.createElement(y.a,{style:{color:"red",fontSize:30},onClick:function(){return u(t)}}))):o.a.createElement(v.a,null,o.a.createElement(g.a,{style:{fontSize:30},onClick:function(){return m(t)}})),o.a.createElement(v.a,{"aria-controls":"customized-menu","aria-haspopup":"true",variant:"contained",color:"primary",onClick:function(e){j(e.currentTarget)}},o.a.createElement(C.a,{style:{color:i?"white":"black",fontSize:25}})),o.a.createElement(E.a,{className:s.root},o.a.createElement(x.a,{anchorEl:k,keepMounted:!0,open:Boolean(k),onClose:N},o.a.createElement(p.a,{id:"todo-options"},o.a.createElement(S.a,{onClick:function(){d(t,i),N()}},o.a.createElement(w.a,null,o.a.createElement(O.a,{fontSize:"small"})),o.a.createElement(f.a,{variant:"inherit"},"Delete"))))))},B=a(156),T=a(155),A=a(150),z=a(87),M=a.n(z),R=a(13),q=a(151),L=a(158),_=a(88),G=function(e){var t=e.onSubmit,a=Object(n.useState)(!1),l=Object(c.a)(a,2),r=l[0],i=l[1],m=Object(n.useState)(""),d=Object(c.a)(m,2),u=d[0],s=d[1],p=o.a.useState(new Date),E=Object(c.a)(p,2),v=E[0],b=E[1],g=o.a.useState(new Date),h=Object(c.a)(g,2),y=h[0],k=h[1];function C(){i(!1)}return o.a.createElement("div",null,o.a.createElement(A.a,{id:"add_todo_button",onClick:function(){i(!0)}},"Add Todo"),o.a.createElement(B.a,{open:r,disableBackdropClick:!0,onClose:C,"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description"},o.a.createElement("div",{className:"add-todo-modal"},o.a.createElement(M.a,{onClick:C,style:{float:"right",marginBottom:"3%"}}),o.a.createElement(f.a,{variant:"h6",style:{marginBottom:"4%"}},"Add new Todo"),o.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t({id:Math.random(),name:u,date:v.toLocaleDateString(),time:y.toLocaleTimeString(),completed:!1}),C()},style:{display:"flex",flexDirection:"column"}},o.a.createElement(T.a,{id:"outlined-basic",label:"name",required:!0,variant:"outlined",onChange:function(e){s(e.target.value)}}),o.a.createElement(R.a,{utils:_.a},o.a.createElement(q.a,{margin:"normal",id:"date-picker-dialog",label:"Date",format:"MM/dd/yyyy",required:!0,value:v,onChange:function(e){b(e)},KeyboardButtonProps:{"aria-label":"change date"}}),o.a.createElement(L.a,{margin:"normal",id:"time-picker",label:"Time",value:y,required:!0,onChange:function(e){k(e)},KeyboardButtonProps:{"aria-label":"change time"}})),o.a.createElement(A.a,{type:"submit",style:{backgroundColor:"green",color:"white"}},o.a.createElement(f.a,{variant:"h6"},"Create"))))))},J=Object(m.a)((function(e){return{title:{flexGrow:1}}}));var K=function(){var e=J(),t=Object(n.useState)([]),a=Object(c.a)(t,2),l=a[0],r=a[1],m=Object(n.useState)([]),p=Object(c.a)(m,2),E=p[0],v=p[1];function b(e){var t=l.find((function(t){return t.id===e}));t.completed=!0,v([].concat(Object(i.a)(E),[t]));var a=l.filter((function(t){return t.id!==e}));r(a)}function g(e){var t=E.find((function(t){return t.id===e}));t.completed=!1,r([].concat(Object(i.a)(l),[t]));var a=E.filter((function(t){return t.id!==e}));v(a)}function h(e,t){if(t){var a=E.filter((function(t){return t.id!==e}));v(a)}else{var n=l.filter((function(t){return t.id!==e}));r(n)}}return o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:e.root},o.a.createElement(d.a,{position:"static"},o.a.createElement(s.a,null,o.a.createElement(f.a,{variant:"h6",className:e.title},"The LiveRoom Todo App"))),o.a.createElement(G,{onSubmit:function(e){console.log(e),r([].concat(Object(i.a)(l),[e]))}}),o.a.createElement(u.a,{container:!0,spacing:5,className:"main_container"},o.a.createElement(u.a,{item:!0,xs:12,sm:12,md:6,lg:6},o.a.createElement(f.a,{variant:"h5",component:"h5",style:{textAlign:"left"}},"To do"),l.length>0?l.map((function(e){return o.a.createElement(N,{id:e.id,name:e.name,date:e.date,time:e.time,onComplete:b,onDelete:h,onReverse:g,isCompleted:e.completed})})):o.a.createElement(f.a,{variant:"subtitle1",style:{padding:"2%",color:"grey"}},"No tasks yet")),o.a.createElement(u.a,{item:!0,xs:12,sm:12,md:6,lg:6},o.a.createElement(f.a,{variant:"h5",component:"h5",style:{textAlign:"left"}},"Done"),E.length>0?E.map((function(e){return o.a.createElement(N,{id:e.id,name:e.name,date:e.date,time:e.time,onDelete:h,isCompleted:e.completed,onReverse:g})})):o.a.createElement(f.a,{variant:"subtitle1",style:{padding:"2%",color:"grey"}},"No completed tasks yet")))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(K,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},99:function(e,t,a){e.exports=a(109)}},[[99,1,2]]]);
//# sourceMappingURL=main.a5aa3d6d.chunk.js.map