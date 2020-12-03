(this["webpackJsonpengineering-health-dashboard"]=this["webpackJsonpengineering-health-dashboard"]||[]).push([[0],{335:function(e,t,n){},336:function(e,t,n){},467:function(e,t,n){"use strict";n.r(t);var a=n(5),r=n(0),c=n.n(r),i=n(17),d=n.n(i),s=(n(335),n(19)),l=n(98),o=n(102),j=(n(336),n(564)),u=n(537),b=n(540),h=n(541),O=n(539),x="#1D2228",v={DE:"Data dev",INFRASTRUCTURE:"Infrastructure",NOMAD:"Nomad",HE:"Hardware"},m=Object(j.a)(u.a)({background:"#FFDD00",color:x});function f(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(O.a,{}),Object(a.jsx)(m,{children:Object(a.jsx)(b.a,{children:Object(a.jsx)(h.a,{variant:"h6",children:"Engineering Health Dashboard"})})}),Object(a.jsx)(b.a,{})]})}var p=n(557),g=n(305),y=n(468),F=n(288),w={"geospatial-growth-hack":v.DE,mothership:v.INFRASTRUCTURE,"web-server":v.INFRASTRUCTURE,dbt:v.INFRASTRUCTURE,partners:v.INFRASTRUCTURE,atlas:v.NOMAD,"dirtmate-edge":v.HE,"3p":v.DE,"aeropoints-fulfillers":v.HE,"aeropoints-firmware":v.HE};function R(e){var t=function(e,t){var n,a,r=null===e||void 0===e||null===(n=e.data)||void 0===n||null===(a=n.search)||void 0===a?void 0:a.edges;if(r){var c=/https:\/\/github.com\/PropellerAero\/(.*?)\//;t&&(r=t&&r.filter((function(e){var n,a=c.exec(null===e||void 0===e||null===(n=e.node)||void 0===n?void 0:n.url);return v[t]===w[a?a[1]:""]})));var i=[{day:0,count:0,dayName:"Sunday"},{day:1,count:0,dayName:"Monday"},{day:2,count:0,dayName:"Tuesday"},{day:3,count:0,dayName:"Wednesday"},{day:4,count:0,dayName:"Thursday"},{day:5,count:0,dayName:"Friday"},{day:6,count:0,dayName:"Saturday"}];return r.forEach((function(e){var t,n=new Date(null===e||void 0===e||null===(t=e.node)||void 0===t?void 0:t.createdAt).getDay();i.find((function(e){return e.day===n})).count++})),i}}(e.data,e.team);return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(b.a,{children:Object(a.jsx)(h.a,{variant:"h6",component:"div",children:"Pull Requests Raised Across Propeller"})}),Object(a.jsx)(F.a,{margin:{top:30,right:80,bottom:80,left:80},data:t,indexBy:"dayName",keys:["count"],labelTextColor:"#2C343F",enableGridX:!1,colors:"#28AFB0",theme:{axis:{ticks:{line:{stroke:x},text:{fill:x}}}}})]})}var C=n(549),T=n(550),E=n(551),N=n(552),S=n(553),k=n(554),A=n(301),D=n.n(A);function I(e){var t=e.data,n=t?function(e){var t,n,a=(null===e||void 0===e||null===(t=e.data)||void 0===t||null===(n=t.search)||void 0===n?void 0:n.edges).map((function(e){var t,n;return null===e||void 0===e||null===(t=e.node)||void 0===t||null===(n=t.author)||void 0===n?void 0:n.login}));return Object.entries(D()(a)).sort((function(e,t){return t[1]-e[1]})).slice(0,5)}(t):[];return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(b.a,{children:Object(a.jsx)(h.a,{variant:"h6",component:"div",children:"Pull Request Leaderboard"})}),Object(a.jsx)(C.a,{children:Object(a.jsxs)(T.a,{"aria-label":"simple table",children:[Object(a.jsx)(E.a,{children:Object(a.jsxs)(N.a,{children:[Object(a.jsx)(S.a,{children:"Position"}),Object(a.jsx)(S.a,{children:"Name"}),Object(a.jsx)(S.a,{children:"PRs Opened"})]})}),Object(a.jsx)(k.a,{children:n.map((function(e,t){return Object(a.jsxs)(N.a,{children:[Object(a.jsx)(S.a,{children:t+1}),Object(a.jsxs)(S.a,{children:[0===t&&Object(a.jsx)("span",{children:"\ud83d\udc51 "}),e[0]]}),Object(a.jsx)(S.a,{children:e[1]})]},t)}))})]})})]})}var P=n(562),U=n(561),B=n(558),H=n(566),M=n(567);function L(){var e=Object(l.a)(["\n  min-height: 450px;\n  width: 100%;\n  top: 0;\n"]);return L=function(){return e},e}var q=o.a.div(L()),G=Object(j.a)(P.a)({display:"flex",alignItems:"center",justifyContent:"center"}),J=Object(j.a)(U.a)({width:200}),_=Object(j.a)(y.a)({width:"60%",outline:"none"});function z(e){var t=c.a.useRef(null);return Object(a.jsx)("div",{ref:t,children:Object(a.jsx)(G,{disablePortal:!0,disableEnforceFocus:!0,disableAutoFocus:!0,open:!0,"aria-labelledby":"server-modal-title","aria-describedby":"server-modal-description",onBackdropClick:e.closeModal,children:Object(a.jsx)(_,{children:Object(a.jsxs)(p.a,{container:!0,direction:"row",justify:"center",alignItems:"center",spacing:10,children:[Object(a.jsx)(p.a,{xs:8,item:!0,children:e.chart}),Object(a.jsx)(p.a,{xs:4,item:!0,children:Object(a.jsxs)(q,{children:[Object(a.jsx)(b.a,{children:Object(a.jsx)(h.a,{component:"div",children:"Filters:"})}),Object(a.jsxs)(B.a,{children:[Object(a.jsx)(H.a,{id:"demo-simple-select-label",children:"By team"}),Object(a.jsxs)(J,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:e.team,onChange:function(t){return e.selectTeam(t.target.value)},children:[Object(a.jsx)(M.a,{value:"",children:"None"}),Object.entries(v).map((function(e){var t=Object(s.a)(e,2),n=t[0],r=t[1];return Object(a.jsx)(M.a,{value:n,children:String(r)})}))]})]})]})})]})})})})}var W=n.p+"static/media/spinner.df897d1b.gif";function X(){return Object(a.jsx)("img",{src:W,height:30,style:{margin:"30px"},alt:"loading..."})}var K=Object(j.a)(y.a)({height:500,width:"100%",padding:40,margin:20,outline:"none"}),Q=function(e){var t=Object(r.useState)(!1),n=Object(s.a)(t,2),c=n[0],i=n[1],d=e.isClickable,l=e.team,o=e.setTeam;return Object(a.jsxs)(a.Fragment,{children:[c&&Object(a.jsx)(z,{closeModal:function(){return i(!1)},chart:e.children,selectTeam:function(e){return o(e)},team:l}),Object(a.jsx)(p.a,{onClick:function(){return d&&i(!0)},md:12,lg:6,item:!0,children:Object(a.jsx)(K,{children:e.children})})]})};function V(e){var t,n=Object(g.a)("https://github-monitor.services.dev.propelleraero.com/prs_by_dev/",(t=e.password,function(e){var n=new Headers;return n.set("Authorization","Basic "+btoa("propeller:"+t)),fetch(e,{method:"GET",headers:n}).then((function(e){return e.json()}))})).data,c=Object(r.useState)(""),i=Object(s.a)(c,2),d=i[0],l=i[1];return Object(a.jsxs)(p.a,{container:!0,direction:"row",justify:"center",alignItems:"center",spacing:10,children:[Object(a.jsx)(Q,{children:n?Object(a.jsx)(I,{data:n}):Object(a.jsx)(X,{})}),Object(a.jsx)(Q,{isClickable:!0,team:d,setTeam:l,children:n?Object(a.jsx)(R,{data:n,team:d}):Object(a.jsx)(X,{})})]})}var Y=n(568),Z=n(559);function $(){var e=Object(l.a)(["\n  min-height: 450px;\n  width: 100%;\n  top: 0;\n"]);return $=function(){return e},e}o.a.div($());var ee=Object(j.a)(P.a)({display:"flex",alignItems:"center",justifyContent:"center"}),te=Object(j.a)(y.a)({width:"60%",outline:"none",padding:100,textAlign:"center"});function ne(e){var t=c.a.useRef(null);return Object(a.jsx)("div",{ref:t,children:Object(a.jsx)(ee,{disablePortal:!0,disableEnforceFocus:!0,disableAutoFocus:!0,open:!0,"aria-labelledby":"server-modal-title","aria-describedby":"server-modal-description",onBackdropClick:function(){},children:Object(a.jsx)(te,{children:e.children})})})}function ae(e){var t=Object(r.useState)(""),n=Object(s.a)(t,2),c=n[0],i=n[1];return Object(a.jsxs)(ne,{children:[Object(a.jsx)(Y.a,{type:"password",label:"Password",value:c,onChange:function(e){return i(e.target.value)}}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)(Z.a,{color:"primary",variant:"contained",onClick:function(t){e.onSubmit(c)},children:"Login"})]})}function re(){var e=Object(l.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n  padding: 100px;\n"]);return re=function(){return e},e}var ce=o.a.div(re());var ie=function(){var e=Object(r.useState)(null),t=Object(s.a)(e,2),n=t[0],c=t[1];return Object(a.jsx)(ce,{children:n?Object(a.jsxs)(a.Fragment,{children:[" ",Object(a.jsx)(f,{}),Object(a.jsx)(V,{password:n})]}):Object(a.jsx)(ae,{onSubmit:function(e){return c(e)}})})},de=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,569)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))};d.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(ie,{})}),document.getElementById("root")),de()}},[[467,1,2]]]);
//# sourceMappingURL=main.76dd78c3.chunk.js.map