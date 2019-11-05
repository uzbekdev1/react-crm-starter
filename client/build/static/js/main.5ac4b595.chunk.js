(this["webpackJsonpreact-cms"]=this["webpackJsonpreact-cms"]||[]).push([[0],{121:function(e,t,a){e.exports=a(136)},127:function(e,t,a){},134:function(e,t,a){},136:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(9),l=a.n(o),i=a(99),c=(a(126),a(127),a(14)),s=a(45),m=function(e){return console.log("Roots",e),console.log("state",e.store.getState()),r.a.createElement(c.a,{store:e.store},r.a.createElement(s.c,{history:e.history},e.routes.map((function(e,t){return r.a.createElement(s.b,{key:t,path:e.path,render:function(t){return r.a.createElement(e.component,Object.assign({},t,{routes:e.routes,title:e.title}))}})}))))},u=a(21),p=Object(u.a)();p.listen((function(e){console.log("history is listening: "+e)}));var d=p,h=a(54),f=a(91),g=a(17),b=a(16),E=a(24),v=a(25),y=a(27),O=function(e){function t(e){return Object(g.a)(this,t),Object(E.a)(this,Object(v.a)(t).call(this,e))}return Object(y.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){console.log("Profile",this.props);var e=this.props,t=e.name;e.match;return r.a.createElement("div",null,r.a.createElement("h2",null,"\u041f\u0440\u0438\u0432\u0435\u0442, ",t))}}]),t}(r.a.Component),j=Object(c.b)((function(e){return e.Profile}))(O),w=function(e,t,a){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e},r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null;return{title:e,path:t,component:a,reducer:n,onEnter:o,children:r}},q=function(e){return Object.keys(e).map((function(t){var a=Array.isArray(e[t])?e[t]:[e[t]];return a.forEach((function(e){return e.MODULE=t})),a})).reduce((function(e,t){return e.concat(t)}))},D=w("\u041b\u0438\u0447\u043d\u044b\u0439 \u043a\u0430\u0431\u0438\u043d\u0435\u0442","/profile",j,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{name:"\u0416\u0430\u0432\u043b\u043e\u043d\u0431\u0435\u043a"},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"Profile/SetName":return{name:t.name};default:return e}})),N=a(7),x=a(2),R=a(13),P=a(92),k=a(192),S=a(193),F=a(100),C=a(194),I=a(185),T=a(186),M=a(187),A=a(196),B=a(190),H=a(195),W=a(189),L=a(191),J=a(188),_=a(93),U=a.n(_),z=a(94),V=a.n(z),Y=a(56);function G(e){return r.a.createElement(Y.a,{component:"h2",variant:"h6",color:"primary",gutterBottom:!0},e.children)}function $(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var K=Object(P.a)((function(e){return{seeMore:{marginTop:e.spacing(3)},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)},paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"}}}));function X(e){var t=e.onClose,a=e.open,n=e.deleteId,o=Object(x.a)(e,["onClose","open","deleteId"]);return r.a.createElement(I.a,Object.assign({disableBackdropClick:!0,disableEscapeKeyDown:!0,maxWidth:"xs","aria-labelledby":"confirmation-dialog-title",open:a},o),r.a.createElement(T.a,{dividers:!0},"Are you sure to delete this item? You will not be able to recover this"),r.a.createElement(M.a,null,r.a.createElement(J.a,{autoFocus:!0,onClick:function(e){return t("cancel")},color:"primary"},"Cancel"),r.a.createElement(J.a,{onClick:function(e){return t("ok",n)},color:"primary"},"Ok")))}function Q(e){var t=e.requests,a=(e.loadRequests,e.path),n=e.showDeleteDialog,o=e.header,l=K();return t=t.map((function(e,t){return r.a.createElement(W.a,{key:t},r.a.createElement(B.a,null,e.name),r.a.createElement(B.a,null,e.email),r.a.createElement(B.a,null,e.theme),r.a.createElement(B.a,null,e.message),r.a.createElement(B.a,{align:"right"},r.a.createElement(R.a,{to:a+"/edit/"+e._id},r.a.createElement(L.a,{color:"secondary",size:"small","aria-label":"Edit"},r.a.createElement(U.a,null))),r.a.createElement(L.a,{size:"small","aria-label":"Delete",className:"ml-2",onClick:function(t){return n(e._id)}},r.a.createElement(V.a,null))))})),o=o?r.a.createElement(G,null,o):"",r.a.createElement(k.a,{maxWidth:"lg",className:l.container},r.a.createElement(S.a,{container:!0,spacing:3},r.a.createElement(S.a,{item:!0,xs:12},r.a.createElement(F.a,{className:l.paper},o,r.a.createElement(C.a,{size:"small"},r.a.createElement(H.a,null,r.a.createElement(W.a,null,r.a.createElement(B.a,null,"Name"),r.a.createElement(B.a,null,"Email"),r.a.createElement(B.a,null,"Theme"),r.a.createElement(B.a,null,"Message"),r.a.createElement(B.a,{align:"right"},"Action"))),r.a.createElement(A.a,null,t))))))}var Z=function(e){function t(e){return Object(g.a)(this,t),Object(E.a)(this,Object(v.a)(t).call(this,e))}return Object(y.a)(t,e),Object(b.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.requests,a=e.loadRequests;this.props.setTitle("Employees"),t&&t.length||a()}},{key:"render",value:function(){console.log("Request List",this.props);var e=this.props,t=e.match,a=e.requests,n=e.loadingRequests,o=e.showDeleteDialog,l=e.closeDeleteDialog,i=e.deleteDialogOpen,c=e.deleteId,s=e.header;return r.a.createElement(r.a.Fragment,null,r.a.createElement(Q,{requests:a,loading:n,path:t?t.path:"/admin/request",showDeleteDialog:o,header:s}),r.a.createElement(X,{id:"ringtone-menu",deleteId:c,keepMounted:!0,open:i,onClose:l}))}}]),t}(r.a.Component),ee=Object(c.b)((function(e){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?$(a,!0).forEach((function(t){Object(N.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):$(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e.Admin.Request)}),(function(e){return{loadRequests:function(){return e({type:fe}),fetch("/api/request/get").then((function(e){return e.ok?e.json():[]})).then((function(t){e({type:ge,payload:{requests:t}})}))},setTitle:function(t){e({type:qt,payload:t})},showDeleteDialog:function(t){e({type:Oe,payload:{deleteId:t}})},closeDeleteDialog:function(t,a){if(e({type:je}),console.log("close",t),"ok"===t&&a){var n={id:a};return fetch("/api/request/delete",{method:"POST",body:JSON.stringify(n),headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){return e.ok?e.json():{}})).then((function(t){t.result&&"success"===t.result&&e({type:we,payload:{request:t.data}})}))}}}}))(Z),te=a(44),ae=a(222),ne=a(201),re=a(220),oe=a(199),le=a(217),ie=Object(P.a)((function(e){return{seeMore:{marginTop:e.spacing(3)},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)},paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},textField:{width:"100%"},themesSelect:{width:"100%"},button:{float:"right"}}}));function ce(e){var t=e.request,a=e.match,n=e.themes,o=e.update,l=ie(),i=r.a.useState(""),c=Object(te.a)(i,2),m=c[0],u=c[1];return m?(console.log("redirecting",m),r.a.createElement(s.a,{to:m})):r.a.createElement(k.a,{maxWidth:"lg",className:l.container},r.a.createElement(S.a,{container:!0,spacing:3},r.a.createElement(S.a,{item:!0,xs:12},r.a.createElement(F.a,{className:l.paper},r.a.createElement("form",{onSubmit:function(e){var t=e.target.elements,n={id:a.params.requestId,name:t.name.value,email:t.email.value,theme:t.theme.value,message:t.message.value};o(n).then((function(e){"success"===e.result&&u("/admin/request")})),e.preventDefault()}},r.a.createElement(S.a,{container:!0,spacing:3},r.a.createElement(S.a,{item:!0,sm:6},r.a.createElement(ae.a,{id:"outlined-basic",className:l.textField,label:"Name",margin:"normal",variant:"outlined",name:"name",defaultValue:t.name})),r.a.createElement(S.a,{item:!0,sm:6},r.a.createElement(ae.a,{id:"outlined-basic",className:l.textField,label:"Email",margin:"normal",variant:"outlined",name:"email",defaultValue:t.email})),r.a.createElement(S.a,{item:!0,sm:12},r.a.createElement(se,{theme:t.theme,themes:n})),r.a.createElement(S.a,{item:!0,sm:12},r.a.createElement(ae.a,{id:"outlined-multiline-static",label:"Message",multiline:!0,rows:"4",defaultValue:t.message,className:l.textField,margin:"normal",variant:"outlined",name:"message"})),r.a.createElement(S.a,{item:!0,sm:12},r.a.createElement(J.a,{type:"submit",variant:"contained",color:"primary",className:l.button},"Save"))))))))}var se=function(e){var t=r.a.useState(e.theme),a=Object(te.a)(t,2),n=a[0],o=a[1],l=ie(),i=r.a.useRef(null),c=r.a.useState(0),s=Object(te.a)(c,2),m=s[0],u=s[1];r.a.useEffect((function(){u(i.current.offsetWidth)}),[]);var p=e.themes.map((function(e,t){return r.a.createElement(ne.a,{value:e.name},e.name)}));return r.a.createElement(oe.a,{variant:"outlined",className:l.themesSelect},r.a.createElement(re.a,{ref:i,id:"demo-simple-select-outlined-label"},"Theme"),r.a.createElement(le.a,{labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-outlined",name:"theme",value:n,onChange:function(e){o(e.target.value)},labelWidth:m},p))},me=function(e){function t(e){return Object(g.a)(this,t),Object(E.a)(this,Object(v.a)(t).call(this,e))}return Object(y.a)(t,e),Object(b.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=(e.requests,e.loadRequest),a=e.match;(0,e.setTitle)("Edit employee"),t(a.params.requestId)}},{key:"render",value:function(){console.log("Edit Request",this.props);var e=this.props,t=e.match,a=e.request,n=e.themes,o=e.update;return e.loadingRequest?r.a.createElement("div",null,"loading..."):r.a.createElement(ce,{request:a,match:t,themes:n,update:o})}}]),t}(r.a.Component),ue=Object(c.b)((function(e){var t=e.Admin.Request;return{requests:t.requests,request:t.request,loadingRequest:t.loadingRequest,themes:e.Form.themes}}),(function(e){return{loadRequest:function(t){return e({type:be}),fetch("/api/request/get?id="+t).then((function(e){return e.ok?e.json():{}})).then((function(t){e({type:Ee,payload:{request:t}})}))},setTitle:function(t){e({type:qt,payload:t})},update:function(t){return e({type:ve}),fetch("/api/request/store",{method:"POST",body:JSON.stringify(t),headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){return e.ok?e.json():{}})).then((function(t){return e({type:ye,payload:{request:t.data,result:t.result}}),t}))}}}))(me);function pe(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function de(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?pe(a,!0).forEach((function(t){Object(N.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):pe(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var he="Admin/Request/",fe=he+"LoadRequestsReq",ge=he+"LoadRequestsRes",be=he+"LoadRequestReq",Ee=he+"LoadRequestRes",ve=he+"UpdateReq",ye=he+"UpdateRes",Oe=he+"ShowDeleteDialog",je=he+"CloseDeleteDialog",we=he+"DeleteRes",qe={requests:[],loadingRequests:!1,request:{},loadingRequest:!1,deleteDialogOpen:!1,deleteId:""},De=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:qe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case be:return de({},e,{loadingRequest:!0});case Ee:return de({},e,{request:a=t.payload.request,loadingRequest:!1});case ge:return de({},e,{loadingRequests:!1,requests:t.payload.requests});case ye:var a=t.payload.request;return de({},e,{requests:e.requests.map((function(e,t){return e._id===a._id?a:e}))});case Oe:return de({},e,{deleteDialogOpen:!0,deleteId:t.payload.deleteId});case je:return de({},e,{deleteDialogOpen:!1});case we:a=t.payload.request;return de({},e,{requests:e.requests.filter((function(e){return e._id!==a._id}))});default:return e}},Ne=w("Requests","/request",(function(e){return r.a.createElement("div",null,r.a.createElement(s.b,{exact:!0,path:e.match.path,component:ee}),r.a.createElement(s.b,{exact:!0,path:e.match.path+"/edit/:requestId",component:ue}))}),De),xe=a(4),Re=a(202);function Pe(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var ke=Object(P.a)((function(e){return{container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)},paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"}}}));var Se=Object(c.b)((function(e){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Pe(a,!0).forEach((function(t){Object(N.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Pe(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e.Dashboard)}),(function(e){return{setTitle:function(t){e({type:qt,payload:t})}}}))((function(e){e.setTitle("Dashboard");var t=ke();return Object(xe.a)(t.paper,t.fixedHeight),console.log("Dashboard",e),r.a.createElement(r.a.Fragment,null,r.a.createElement(ee,{header:"Employees"}),r.a.createElement(k.a,{maxWidth:"lg",className:t.container},r.a.createElement(S.a,{container:!0,spacing:3},r.a.createElement(S.a,{item:!0,xs:12},r.a.createElement(F.a,{className:t.paper},"Some Dashboard Content")))))})),Fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{name:"DEFAULT"},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"Dashboard/FirstAction":return{name:"Javlonbek"};default:return e}},Ce=w("\u0414\u0435\u0448\u0431\u043e\u0430\u0440\u0434","/",Se,Fe),Ie=a(205),Te=a(219),Me=a(206),Ae=a(207),Be=a(200),He=a(210),We=a(208),Le=a(209),Je=a(74),_e=a.n(Je),Ue=a(76),ze=a.n(Ue),Ve=a(75),Ye=a.n(Ve),Ge=a(138),$e=a(203),Ke=a(204),Xe=a(96),Qe=a.n(Xe),Ze=a(97),et=a.n(Ze),tt=a(95),at=a.n(tt);function nt(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function rt(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?nt(a,!0).forEach((function(t){Object(N.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):nt(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function ot(){return r.a.createElement(Y.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement(R.a,{color:"inherit",to:"/"},"RJ")," ",(new Date).getFullYear(),".")}var lt=Object(P.a)((function(e){return{root:{display:"flex"},toolbar:{paddingRight:24},toolbarIcon:rt({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},menuButtonHidden:{display:"none"},title:{flexGrow:1},drawerPaper:{position:"relative",whiteSpace:"nowrap",width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerPaperClose:Object(N.a)({overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:e.spacing(7)},e.breakpoints.up("sm"),{width:e.spacing(9)}),appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto"},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)},paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},fixedHeight:{height:240}}})),it=function(e){var t=e.linkPrefix;return r.a.createElement("div",null,r.a.createElement(Ge.a,{button:!0},r.a.createElement($e.a,null,r.a.createElement(at.a,null)),r.a.createElement(R.a,{to:"/"},r.a.createElement(Ke.a,{primary:"Home"}))),r.a.createElement(Ge.a,{button:!0},r.a.createElement($e.a,null,r.a.createElement(Qe.a,null)),r.a.createElement(R.a,{to:t+""},r.a.createElement(Ke.a,{primary:"Dashboard"}))),r.a.createElement(Ge.a,{button:!0},r.a.createElement($e.a,null,r.a.createElement(et.a,null)),r.a.createElement(R.a,{to:t+"/request"},r.a.createElement(Ke.a,{primary:"Employees"}))))};var ct=function(e){var t=lt(),a=r.a.useState(!0),n=Object(te.a)(a,2),o=n[0],l=n[1];return Object(xe.a)(t.paper,t.fixedHeight),console.log("Layout",e),r.a.createElement("div",{className:t.root},r.a.createElement(Ie.a,null),r.a.createElement(Me.a,{position:"absolute",className:Object(xe.a)(t.appBar,o&&t.appBarShift)},r.a.createElement(Ae.a,{className:t.toolbar},r.a.createElement(We.a,{edge:"start",color:"inherit","aria-label":"open drawer",onClick:function(){l(!0)},className:Object(xe.a)(t.menuButton,o&&t.menuButtonHidden)},r.a.createElement(_e.a,null)),r.a.createElement(Y.a,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,className:t.title},e.title),r.a.createElement(We.a,{color:"inherit"},r.a.createElement(Le.a,{badgeContent:0,color:"secondary"},r.a.createElement(Ye.a,null))))),r.a.createElement(Te.a,{variant:"permanent",classes:{paper:Object(xe.a)(t.drawerPaper,!o&&t.drawerPaperClose)},open:o},r.a.createElement("div",{className:t.toolbarIcon},r.a.createElement(We.a,{onClick:function(){l(!1)}},r.a.createElement(ze.a,null))),r.a.createElement(He.a,null),r.a.createElement(Be.a,null,r.a.createElement(it,{linkPrefix:e.match.path}))),r.a.createElement("main",{className:t.content},r.a.createElement("div",{className:t.appBarSpacer}),e.children,r.a.createElement(ot,null)))},st=a(211),mt=a(212),ut=a(218),pt=a(216),dt=a(98),ht=a.n(dt);function ft(){return r.a.createElement(Y.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement(Re.a,{color:"inherit",href:"https://material-ui.com/"},"RJ")," ",(new Date).getFullYear(),".")}var gt=Object(P.a)((function(e){return{"@global":{body:{backgroundColor:e.palette.common.white}},paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}})),bt=function(e){function t(e){var a;return Object(g.a)(this,t),(a=Object(E.a)(this,Object(v.a)(t).call(this,e))).changeHandler=function(e,t){a.setState(Object(N.a)({},e,t))},a.submitHandler=function(){a.props.signIn(a.state.email,a.state.password)},a.state={email:"",password:""},a}return Object(y.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this.props,t=(e.signIn,e.user),a=(e.match,this.state);a.email,a.password;return t&&t.loggedIn?r.a.createElement(s.a,{to:"/admin"}):r.a.createElement(k.a,{component:"main",maxWidth:"xs"},r.a.createElement(Ie.a,null),r.a.createElement(Et,{changeHandler:this.changeHandler,submitHandler:this.submitHandler,failed:t.loginFailed}),r.a.createElement(pt.a,{mt:8},r.a.createElement(ft,null)))}}]),t}(r.a.Component),Et=function(e){var t=e.changeHandler,a=e.submitHandler,n=e.failed,o=gt();return r.a.createElement("div",{className:o.paper},r.a.createElement(st.a,{className:o.avatar},r.a.createElement(ht.a,null)),r.a.createElement(Y.a,{component:"h1",variant:"h5"},"Sign in"),r.a.createElement("form",{className:o.form,onSubmit:function(e){e.preventDefault(),a()}},r.a.createElement(ae.a,{error:n,variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"off",autoFocus:!0,onChange:function(e){return t("email",e.target.value)}}),r.a.createElement(ae.a,{error:n,variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"off",onChange:function(e){return t("password",e.target.value)}}),r.a.createElement(mt.a,{control:r.a.createElement(ut.a,{value:"remember",color:"primary"}),label:"Remember me"}),r.a.createElement(J.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:o.submit},"Sign In"),r.a.createElement(S.a,{container:!0},r.a.createElement(S.a,{item:!0,xs:!0},r.a.createElement(Re.a,{href:"#",variant:"body2"},"Forgot password?")),r.a.createElement(S.a,{item:!0},r.a.createElement(Re.a,{href:"#",variant:"body2"},"Don't have an account? Sign Up")))))},vt=Object(c.b)((function(e){return{user:e.Admin.user}}),(function(e){return{signIn:function(t,a){console.log("signing in"),e({type:wt,payload:{email:t,password:a}})}}}))(bt),yt=Object(c.b)((function(e){return{user:e.Admin.user,title:e.Admin.title}}))((function(e){console.log("Admin",e);var t=e.routes.map((function(t,a){return r.a.createElement(s.b,{exact:t.path===e.match.path+"/",path:t.path,key:t.path,component:t.component,title:t.title})}));if(!e.user&&e.location.pathname!==e.match.path+"/login")return r.a.createElement(s.a,{to:e.match.path+"/login"});if(e.location.pathname!==e.match.path+"/login")var a=r.a.createElement(ct,e,t);else a="";return r.a.createElement("div",null,r.a.createElement(s.b,{exact:!0,path:e.match.path+"/login",component:vt}),a)}));function Ot(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function jt(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Ot(a,!0).forEach((function(t){Object(N.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Ot(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var wt="Admin/SignIn",qt="Admin/SetTitle",Dt={title:"Dashboard"},Nt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{loggedIn:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case wt:var a=t.payload;return"admin"===a.email&&"123"===a.password?Object.assign({},e,jt({},t.payload,{loggedIn:!0})):jt({},e,{loginFailed:!0});default:return e}},xt=w("Admin","/admin",yt,(function(){var e,t,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Dt,n=arguments.length>1?arguments[1]:void 0;return{Dashboard:Fe(a.Dashboard,n),Request:De(a.Request,n),user:Nt(a.user,n),title:(e=a.title,t=n,t.type===qt?t.payload:e)}}),{Request:Ne,Dashboard:Ce}),Rt=a(213),Pt=(a(134),function(e){function t(e){var a;return Object(g.a)(this,t),(a=Object(E.a)(this,Object(v.a)(t).call(this,e))).validateField=function(e){var t=e.name,n=e.value,r=a.state.errors;switch(t){case"name":r.name=n?"":"empty";break;case"email":RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i).test(n)?r.email="":r.email="invalid";break;case"theme":r.theme=n?"":"empty";case"message":r.message=n?"":"empty"}a.setState({errors:r})},a.submit=function(e){var t=a.props,n=t.name,r=t.email,o=t.theme,l=t.message,i=t.submitForm,c=t.requestId,s=a.state.errors;n||(s.name="empty"),r||(s.email="empty"),o||(s.theme="empty"),l||(s.message="empty"),s.name||s.email||s.theme||s.message?e.preventDefault():i({name:n,email:r,theme:o.name,message:l,id:c}).then((function(e){"success"===e.result&&a.setState({redirect:"/"})})),a.setState({errors:s})},a.resetForm=function(){a.props.resetForm(),console.log("resetting"),a.inputName.value="",a.inputEmail.value="",a.inputMessage.value=""},a.state={errors:{name:"",email:"",message:"",theme:""},formIsReady:!1,redirect:""},a.setInputNameRef=function(e){a.inputName=e},a.setInputEmailRef=function(e){a.inputEmail=e},a.setInputMessageRef=function(e){a.inputMessage=e},a}return Object(y.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this.props,t=e.themes,a=e.themesMenuOpened,n=e.theme,o=e.name,l=e.email,i=e.message,c=e.toggleThemesMenu,m=e.selectTheme,u=e.inputName,p=e.inputMail,d=e.inputMessage,h=(e.submitting,e.submitted,e.requestId,this.state),f=h.errors,g=h.redirect;return g?r.a.createElement(s.a,{to:g}):r.a.createElement("div",{className:"form-page"},r.a.createElement("div",{className:"form-card"},r.a.createElement("div",{className:"form-card-body"},r.a.createElement("form",null,r.a.createElement("h2",{className:"form-title"},"\u0424\u043e\u0440\u043c\u0430 \u0434\u043b\u044f \u0442\u0435\u0431\u044f"),r.a.createElement(kt,{changeHandler:u,value:o,placeholder:"\u041f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u044c\u0442\u0435\u0441\u044c \u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430",name:"name",validator:this.validateField,error:f.name,setRef:this.setInputNameRef}),r.a.createElement(kt,{changeHandler:p,value:l,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448 e-mail",name:"email",cl:"mt-2",validator:this.validateField,error:f.email,setRef:this.setInputEmailRef}),r.a.createElement(St,{themes:t,opened:a,toggle:c,select:m,theme:n,error:f.theme,validator:this.validateField}),r.a.createElement(It,{changeHandler:d,value:i,validator:this.validateField,error:f.message,setRef:this.setInputMessageRef}),r.a.createElement("div",{className:"form-footer mt-2"},r.a.createElement(Rt.a,{className:"button reset-button",onClick:this.resetForm},"\u0421\u0431\u0440\u043e\u0441\u0438\u0442\u044c"),r.a.createElement(Rt.a,{className:"button ml-auto",onClick:this.submit},"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"))))))}}]),t}(r.a.Component));function kt(e){var t=e.changeHandler,a=e.value,n=e.placeholder,o=e.name,l=e.cl,i=e.validator,c=e.error,s=e.setRef;if(a)var m=r.a.createElement("span",{className:"placeholder"},n);return r.a.createElement("div",{className:l+" input-box "+(a?"filled ":"")+(c?"with-error ":"")},m,r.a.createElement("input",{ref:s,name:o,type:"text",placeholder:n,onFocus:function(e){e.target.placeholder="",console.log(e.target)},onBlur:function(e){e.target.placeholder=n,t(e.target.value),i(e.target)},defaultValue:a}))}function St(e){var t=e.themes,a=e.opened,n=e.toggle,o=e.select,l=e.theme,i=e.validator,c=e.error,s=function(e,t){o(e),i(t)};if(a)var m=t.map((function(e,t){return r.a.createElement(Ct,{key:t,theme:e,select:s})})),u=r.a.createElement("div",{className:"custom-select-dropdown"},m);else u="";return r.a.createElement("div",{className:"select-box mt-2"},r.a.createElement("div",{className:"input-box "+(c?"with-error ":"")+(l?"filled ":"")},r.a.createElement(Ft,{opened:a,toggle:n,theme:l}),u))}function Ft(e){var t=e.opened,a=e.toggle,n=e.theme;if(n&&n.value)var o=r.a.createElement("div",{className:"selected-item"},r.a.createElement("span",{className:"placeholder"},"\u0422\u0435\u043c\u0430 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f"),n.name);else o="\u0422\u0435\u043c\u0430 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f";return r.a.createElement("div",{className:"custom-select-area "+(t?"open":""),onClick:a},o)}function Ct(e){var t=e.theme,a=e.select,n={name:"theme",value:t.value};return r.a.createElement("div",{className:"custom-select-option",value:t.value,onClick:function(e){return a(t.value,n)}},t.name)}function It(e){var t=e.changeHandler,a=e.value,n=e.validator,o=e.error,l=e.setRef;return r.a.createElement("div",{className:"input-box mt-2 "+(o?"with-error ":"")+(a?"filled ":"")},r.a.createElement("textarea",{ref:l,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435",rows:"4",onFocus:function(e){e.target.placeholder=""},onBlur:function(e){e.target.placeholder="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435",t(e.target.value),n(e.target)},name:"message",defaultValue:a}))}var Tt,Mt=Object(c.b)((function(e){return e.Form}),(function(e){return{toggleThemesMenu:function(){e({type:Ht})},selectTheme:function(t){e({type:Bt,value:t})},inputName:function(t){e({type:Wt,name:t})},inputMail:function(t){e({type:Lt,email:t})},inputMessage:function(t){e({type:Jt,message:t})},resetForm:function(){e({type:_t})},submitForm:function(t){return e({type:Ut}),console.log("submitting",t),fetch("/api/request/store",{method:"POST",body:JSON.stringify(t),headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){return e.ok?e.json():{}})).then((function(t){return e({type:zt,payload:t||{result:"error",data:{}}}),t}))}}}))(Pt),At={themes:[{name:"\u0422\u0435\u043c\u0430 1",value:1},{name:"\u0422\u0435\u043c\u0430 2",value:2},{name:"\u0422\u0435\u043c\u0430 3",value:3},{name:"\u0422\u0435\u043c\u0430 4",value:4}],theme:"",message:"",name:"",email:"",themesMenuOpened:!1,submitted:!1,submitting:!1,requestId:""},Bt="Form/SelectTheme",Ht="Form/ToggleThemesMenu",Wt="Form/InputName",Lt="Form/InputEmail",Jt="Form/InputMessage",_t="Form/ResetForm",Ut="Form/SubmitFormReq",zt="Form/SubmitFormRes",Vt={Profile:D,Admin:xt,Form:w("\u0424\u043e\u0440\u043c\u0430","/form",(function(e){return r.a.createElement("div",null,r.a.createElement(s.b,{exact:!0,path:e.match.path,component:Mt}),r.a.createElement(s.b,{exact:!0,path:e.match.path+"/edit",component:Mt}))}),(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:At,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Bt:var a={};return e.themes.map((function(e,n){e.value==t.value&&(a=e)})),Object.assign({},e,{theme:a,themesMenuOpened:!1});case Ht:return Object.assign({},e,{themesMenuOpened:!e.themesMenuOpened});case Wt:return Object.assign({},e,{name:t.name});case Lt:return Object.assign({},e,{email:t.email});case Jt:return Object.assign({},e,{message:t.message});case _t:return Object.assign({},e,{name:"",email:"",theme:"",message:""});case Ut:return Object.assign({},e,{submitting:!0});case zt:return Object.assign({},e,{requestId:t.payload.data._id,submitted:!0,submitting:!1});default:return e}}))},Yt=(Tt=Object(h.c)(function(e){for(var t={},a=q(e),n=0;n<a.length;n++){var r=a[n].reducer;if("function"!==typeof r)throw new Error("Module "+n+" does not define reducer!");t[a[n].MODULE]=r}return t}(Vt)),Object(h.d)(Tt,Object(h.a)(Object(f.createLogger)()))),Gt=a(214),$t=a(215),Kt=function(e){function t(e){return Object(g.a)(this,t),Object(E.a)(this,Object(v.a)(t).call(this,e))}return Object(y.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){console.log("main page",this.props);var e=this.props,t=e.submitted,a=e.name,n=e.theme,o=e.email,l=e.message;if(t)var i=r.a.createElement(R.a,{to:"/form/edit"},r.a.createElement(Rt.a,{className:"button"},"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0444\u043e\u0440\u043c\u0443")),c=r.a.createElement(Xt,{name:a,email:o,theme:n,message:l});else i=r.a.createElement(R.a,{to:"/form"},r.a.createElement(Rt.a,{className:"button"},"\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u0444\u043e\u0440\u043c\u0443")),c=r.a.createElement("p",null,"\u0424\u043e\u0440\u043c\u0430 \u043f\u043e\u043a\u0430 \u043d\u0435 \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0430.");return r.a.createElement(Gt.a,null,r.a.createElement($t.a,{xs:"12"},r.a.createElement("div",{className:"main-page"},r.a.createElement("p",null,"Form data:"),c,i,r.a.createElement(R.a,{to:"/admin"},r.a.createElement(Rt.a,{className:"button ml-2",color:"info"},"\u041a\u0430\u0431\u0438\u043d\u0435\u0442")))))}}]),t}(r.a.Component);function Xt(e){var t=e.name,a=e.email,n=e.theme,o=e.message;return r.a.createElement("div",{className:"form-data"},r.a.createElement("p",null,"\u0418\u043c\u044f: ",r.a.createElement("span",{className:"form-value"},t)),r.a.createElement("p",null,"e-mail: ",r.a.createElement("span",{className:"form-value"},a)),r.a.createElement("p",null,"\u0422\u0435\u043c\u0430 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f: ",r.a.createElement("span",{className:"form-value"},n.name)),r.a.createElement("p",null,"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f: ",r.a.createElement("span",{className:"form-value"},o)))}var Qt=Object(c.b)((function(e){return{submitted:e.Form.submitted,name:e.Form.name,email:e.Form.email,theme:e.Form.theme,message:e.Form.message}}))(Kt),Zt=function(e,t,a,n){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f";return[{path:"/",title:r,component:a,routes:q(e).map((function(e){if(console.log("x",e),!e.component)throw new Error("Component for module "+e+" is not defined");var a={path:e.path,title:e.title,component:e.component,onEnter:e.onEnter?function(a){e.onEnter(a,t.dispatch)}:null};return e.children&&(a.routes=Object.keys(e.children).map((function(a){var n=e.children[a];if(!n.component)throw new Error("Component for module "+e+"/"+a+" is not defined");return{path:e.path+n.path,title:n.title,component:n.component,onEnter:n.onEnter?function(e){n.onEnter(e,t.dispatch)}:null}}))),a}))}]}(Vt,Yt,(function(e){console.log("App",e);var t=e.routes.map((function(e,t){return e.routes&&e.routes.length?r.a.createElement(s.b,{path:e.path,key:e.path,render:function(t){return r.a.createElement(e.component,Object.assign({},t,{title:e.title,routes:e.routes}))}}):r.a.createElement(s.b,{path:e.path,key:e.path,component:e.component})}));return r.a.createElement("div",null,r.a.createElement(s.b,{exact:!0,path:e.match.path,component:Qt}),t)}),(function(e){return r.a.createElement("div",null,r.a.createElement("h1",null,"Home"),e.children)}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));console.log("routes",Zt),console.log("store",Yt),l.a.render(r.a.createElement(i.AppContainer,null,r.a.createElement(m,{store:Yt,history:d,routes:Zt})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[121,1,2]]]);
//# sourceMappingURL=main.5ac4b595.chunk.js.map