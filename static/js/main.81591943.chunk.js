(this["webpackJsonpliveroom-todo"]=this["webpackJsonpliveroom-todo"]||[]).push([[0],{114:function(e,t,a){e.exports=a(128)},123:function(e,t,a){},124:function(e,t,a){},125:function(e,t,a){},128:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(11),r=a.n(i),l=a(176),c=a(102),m=a(175),d=a(100),u=a(14),s=a(53),p=a(21),f=a(134),E=a(42),g=a(105),h=a(130),b=a(94),v=a.n(b),y=a(93),O=a.n(y),j=a(95),S=a.n(j),C=a(168),k=a(72),x=a(97),w=a.n(x),M=a(178),D=a(96),B=a(129),A=Object(E.a)((function(e){return{paper:{padding:e.spacing(2),textAlign:"left",color:e.palette.text.secondary,display:"flex",flexDirection:"row"}}})),N=function(e){var t=e.id,a=e.name,i=e.date,r=e.time,l=e.timeout,c=(e.isFirstRender,e.isCompleted),m=e.onChangeStatus,d=e.onDelete,u=A(),s=Object(n.useState)(null),E=Object(p.a)(s,2),b=E[0],y=E[1],j=function(){y(null)};return o.a.createElement(B.a,Object.assign({in:!0,key:a,unmountOnExit:!0,style:{transformOrigin:"0 0 0"}},{timeout:l}),o.a.createElement(g.a,{elevation:3,className:u.paper,style:{color:c?"white":"black",marginBottom:"2%",backgroundColor:c?"#35C706":"white"}},o.a.createElement("div",null,o.a.createElement(k.a,{variant:"h6",className:u.title},a),o.a.createElement(k.a,{variant:"subtitle1"},i," | ",r)),o.a.createElement("div",{style:{flexGrow:1}}),c?o.a.createElement("div",null,o.a.createElement(h.a,null,o.a.createElement(O.a,{style:{color:"red",fontSize:30},onClick:function(){return m(t,!1)}}))):o.a.createElement(h.a,null,o.a.createElement(v.a,{style:{fontSize:30},onClick:function(){return m(t,!0)}})),o.a.createElement(h.a,{"aria-controls":"customized-menu","aria-haspopup":"true",variant:"contained",color:"primary",onClick:function(e){y(e.currentTarget)}},o.a.createElement(S.a,{style:{color:c?"white":"black",fontSize:25}})),o.a.createElement(g.a,{className:u.root},o.a.createElement(D.a,{anchorEl:b,keepMounted:!0,open:Boolean(b),onClose:j},o.a.createElement(f.a,{id:"todo-options"},o.a.createElement(M.a,{onClick:function(){d(t),j()}},o.a.createElement(C.a,null,o.a.createElement(w.a,{fontSize:"small"})),o.a.createElement(k.a,{variant:"inherit"},"Delete")))))))},T=a(133),K=a(177),P=a(171),z=a(98),R=a.n(z),L=a(99),_=a.n(L),G=a(169),q=a(15),F=a(170),I=a(179),J=a(101),W=function(e){var t=e.onSubmit,a=Object(n.useState)(!1),i=Object(p.a)(a,2),r=i[0],l=i[1],c=Object(n.useState)(""),m=Object(p.a)(c,2),d=m[0],u=m[1],s=o.a.useState(new Date),f=Object(p.a)(s,2),E=f[0],g=f[1],b=o.a.useState(new Date),v=Object(p.a)(b,2),y=v[0],O=v[1];function j(){l(!1)}return o.a.createElement("div",null,o.a.createElement(G.a,{id:"add_todo_button",color:"primary","aria-label":"add"},o.a.createElement(h.a,{onClick:function(){l(!0)}},o.a.createElement(R.a,{style:{color:"white",fontWeight:"bold"}}))),o.a.createElement(T.a,{open:r,disableBackdropClick:!0,onClose:j,"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description"},o.a.createElement("div",{className:"add-todo-modal"},o.a.createElement(_.a,{onClick:j,style:{cursor:"pointer",float:"right",marginBottom:"3%"}}),o.a.createElement(k.a,{variant:"h6",style:{marginBottom:"4%"}},"Add new Todo"),o.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t({id:Math.random(),name:d,date:E.toLocaleDateString(),time:y.toLocaleTimeString(),completed:!1}),j()},style:{display:"flex",flexDirection:"column"}},o.a.createElement(K.a,{id:"outlined-basic",label:"name",required:!0,variant:"outlined",onChange:function(e){u(e.target.value)}}),o.a.createElement(q.a,{utils:J.a},o.a.createElement(F.a,{margin:"normal",id:"date-picker-dialog",label:"Date",format:"MM/dd/yyyy",required:!0,value:E,onChange:function(e){g(e)},KeyboardButtonProps:{"aria-label":"change date"}}),o.a.createElement(I.a,{margin:"normal",id:"time-picker",label:"Time",value:y,required:!0,onChange:function(e){O(e)},KeyboardButtonProps:{"aria-label":"change time"}})),o.a.createElement(P.a,{type:"submit",style:{backgroundColor:"green",color:"white"}},o.a.createElement(k.a,{variant:"h6"},"Create"))))))},H=a(173),$=a(174),Q=a(172),U=(a(123),Object(E.a)((function(e){return{title:{flexGrow:1}}}))),V=function(){var e=U(),t=Object(n.useState)(!0),a=Object(p.a)(t,2),i=a[0],r=a[1],l=Object(n.useState)([{id:Math.random(),name:"Go shopping",date:"05-11-2020",time:"11:00 AM",completed:!1},{id:Math.random(),name:"Bathing the dog",date:"01-04-2020",time:"02:25 PM",completed:!1},{id:Math.random(),name:"Practice Kungfu",date:"07-09-2020",time:"10:45 AM",completed:!0},{id:Math.random(),name:"Drive Aston Martin",date:"15-10-2020",time:"12:00 PM",completed:!0},{id:Math.random(),name:"Sleep",date:"05-11-2020",time:"1:20 AM",completed:!1}]),c=Object(p.a)(l,2),m=c[0],d=c[1];function u(e,t){var a=m.find((function(t){return t.id===e}));if(a){a.completed=t;var n=m.filter((function(t){return t.id!==e}));d([].concat(Object(s.a)(n),[a]))}else alert("Item doesn't exist.")}function f(e){var t=m.filter((function(t){return t.id!==e}));d(t)}return Object(n.useEffect)((function(){r(!1)})),o.a.createElement("div",null,o.a.createElement(H.a,{position:"static"},o.a.createElement(Q.a,null,o.a.createElement(k.a,{variant:"h6",className:e.title},"The LiveRoom Todo App"))),o.a.createElement($.a,{container:!0,spacing:0,className:"main_container"},o.a.createElement($.a,{item:!0,xs:12,sm:12,md:6,lg:6,style:{minHeight:"40vh",padding:"1%",paddingRight:"1%"}},o.a.createElement(k.a,{variant:"h5",component:"h5",style:{textAlign:"left",marginBottom:"1%"}},"To do"),m.filter((function(e){return!e.completed})).map((function(e,t){return o.a.createElement(N,{id:e.id,isFirstRender:i,timeout:250*(t+1),name:e.name,date:e.date,time:e.time,onChangeStatus:u,onDelete:f,isCompleted:e.completed})}))),o.a.createElement($.a,{item:!0,xs:12,sm:12,md:6,lg:6,style:{minHeight:"40vh",padding:"1%",paddingRight:"1%"}},o.a.createElement(k.a,{variant:"h5",component:"h5",style:{textAlign:"left",marginBottom:"1%"}},"Done"),m.filter((function(e){return e.completed})).map((function(e,t){return o.a.createElement(N,{id:e.id,isFirstRender:i,name:e.name,date:e.date,timeout:900*(t+1),time:e.time,onChangeStatus:u,onDelete:f,isCompleted:e.completed})})))),o.a.createElement(W,{onSubmit:function(e){console.log(e),d([].concat(Object(s.a)(m),[e]))}}))},X=(a(124),function(){var e=Object(n.useState)([]),t=Object(p.a)(e,2),a=t[0],i=t[1],r=Object(n.useState)(void 0),l=Object(p.a)(r,2),c=l[0],m=l[1],d=Object(n.useState)(),u=Object(p.a)(d,2),f=u[0],E=u[1],g=Object(n.useState)([]),h=Object(p.a)(g,2),b=h[0],v=h[1];Object(n.useEffect)((function(){fetch("https://af5xufo4j6.execute-api.us-east-1.amazonaws.com/test/all",{method:"POST",body:JSON.stringify({LastEvaluatedKey:c})}).then((function(e){return e.json()})).then((function(e){console.log(e),E(e.LastEvaluatedKey),i(e.Items)})).catch((function(e){return console.log(e)}))}),[c]);return o.a.createElement("div",null,o.a.createElement($.a,{container:!0,spacing:0,className:"main_container"},o.a.createElement($.a,{item:!0,xs:12,sm:12,md:2,lg:2}),o.a.createElement($.a,{item:!0,xs:12,sm:12,md:8,lg:8,style:{marginTop:"3%"}},a.map((function(e,t){return o.a.createElement(N,{id:Math.random(),timeout:250*(t+1),name:e.PK,date:e.SK})})),o.a.createElement("div",{id:"btn_container"},o.a.createElement(P.a,{variant:"contained",onClick:function(){var e=Object(s.a)(b),t=e.pop();v(e),m(t)},color:"primary"},"prev"),o.a.createElement("div",{style:{flexGrow:1}}),o.a.createElement(P.a,{variant:"contained",onClick:function(){v((function(e){return[].concat(Object(s.a)(e),[c])})),m(f)},color:"primary"},"next")))))}),Y=(a(125),Object(c.a)({palette:{background:{default:"#D4E0E4"}}}));var Z=function(){return o.a.createElement(d.a,{basename:"/liveroom-react-todo-app"},o.a.createElement(m.a,{theme:Y},o.a.createElement(l.a,null),o.a.createElement("div",{className:"App"},o.a.createElement(u.a,{exact:!0,path:"/",component:V}),o.a.createElement(u.a,{path:"/pagination",component:X}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(Z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[114,1,2]]]);
//# sourceMappingURL=main.81591943.chunk.js.map