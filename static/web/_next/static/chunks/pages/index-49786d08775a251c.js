(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5405],{48312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(6511)}])},37527:function(e,t,n){"use strict";n.d(t,{h:function(){return E},Z:function(){return M}});var o=n(85893),s=n(97183),l=n(94199),i=n(20550),a=n(94184),r=n.n(a),c=n(66516),d=n(38504),h=n(71577),u=n(26713),m=n(86548),x=n(94149),p=n(38545),f=n(87547),j=n(39398),_=n(4480),g=n(67294),w=n(49218),v=n(5152),y=n.n(v),b=n(77466),C=n(79252),k=n.n(C);let N=y()(()=>n.e(4761).then(n.bind(n,14761)).then(e=>e.Modal),{loadableGenerated:{webpack:()=>[14761]}}),S=y()(()=>Promise.all([n.e(8909),n.e(8119),n.e(9096)]).then(n.bind(n,59096)).then(e=>e.NameChangeModal),{loadableGenerated:{webpack:()=>[59096]}}),Z=y()(()=>Promise.all([n.e(575),n.e(4208)]).then(n.bind(n,44208)).then(e=>e.AuthModal),{loadableGenerated:{webpack:()=>[44208]}}),L=e=>{let{username:t}=e,[n,s]=(0,g.useState)(!1),[l,i]=(0,g.useState)(!1),[a,r]=(0,_.FV)(b.ZA),v=(0,_.sJ)(b.Q),y=()=>{r(!a)},C=()=>{s(!0)};(0,w.y1)("c",y,{enableOnContentEditable:!1},[a]);let L=(0,_.sJ)(b.db);if(!L)return null;let{displayName:F}=L,T=(0,o.jsxs)(c.Z,{children:[(0,o.jsx)(c.Z.Item,{icon:(0,o.jsx)(m.Z,{}),onClick:()=>C(),children:"Change name"},"0"),(0,o.jsx)(c.Z.Item,{icon:(0,o.jsx)(x.Z,{}),onClick:()=>i(!0),children:"Authenticate"},"1"),v.chatAvailable&&(0,o.jsx)(c.Z.Item,{icon:(0,o.jsx)(p.Z,{}),onClick:()=>y(),children:a?"Hide Chat":"Show Chat"},"3")]});return(0,o.jsxs)("div",{id:"user-menu",className:"".concat(k().root),children:[(0,o.jsx)(d.Z,{overlay:T,trigger:["click"],children:(0,o.jsx)(h.Z,{type:"primary",icon:(0,o.jsx)(f.Z,{style:{marginRight:".5rem"}}),children:(0,o.jsxs)(u.Z,{children:[t||F,(0,o.jsx)(j.Z,{})]})})}),(0,o.jsx)(N,{title:"Change Chat Display Name",open:n,handleCancel:()=>s(!1),children:(0,o.jsx)(S,{})}),(0,o.jsx)(N,{title:"Authenticate",open:l,handleCancel:()=>i(!1),children:(0,o.jsx)(Z,{})})]})};var F=n(50738),T=n(31764),A=n.n(T);let{Header:D}=s.Z,E=e=>{let{name:t="Your stream title",chatAvailable:n,chatDisabled:s}=e;return(0,o.jsxs)(D,{className:r()(["".concat(A().header)],"global-header"),children:[(0,o.jsxs)("div",{className:"".concat(A().logo),children:[(0,o.jsx)("div",{id:"header-logo",children:(0,o.jsx)(F.C,{variant:"contrast"})}),(0,o.jsx)("span",{id:"global-header-text",children:t})]}),n&&!s&&(0,o.jsx)(L,{}),!n&&!s&&(0,o.jsx)(l.Z,{title:"Chat is available when the stream is live.",placement:"left",children:(0,o.jsx)(i.Z,{style:{cursor:"pointer"},children:"Chat offline"})})]})};var M=E},14761:function(e,t,n){"use strict";n.r(t),n.d(t,{Modal:function(){return d}});var o=n(85893),s=n(85402),l=n(26303),i=n(11382),a=n(67294),r=n(77011),c=n.n(r);let d=e=>{let{title:t,url:n,open:r,handleOk:d,handleCancel:h,afterClose:u,height:m,width:x,children:p}=e,[f,j]=(0,a.useState)(!!n),_="100%",g="520px";n&&(_="70vh",g="900px");let w={padding:"0px",minHeight:m,height:null!=m?m:_},v=n&&(0,o.jsx)("iframe",{title:t,src:n,width:"100%",height:"100%",sandbox:"allow-same-origin allow-scripts allow-popups allow-forms",frameBorder:"0",allowFullScreen:!0,style:{display:"block"},onLoad:()=>j(!1)});return(0,o.jsx)(s.Z,{title:t,open:r,onOk:d,onCancel:h,afterClose:u,bodyStyle:w,width:null!=x?x:g,zIndex:999,footer:null,centered:!0,destroyOnClose:!0,children:(0,o.jsxs)("div",{id:"modal-container",style:{height:"100%"},children:[f&&(0,o.jsx)(l.Z,{active:f,style:{padding:"10px"},paragraph:{rows:10}}),v&&(0,o.jsx)("div",{style:{display:f?"none":"inline"},children:v}),p&&(0,o.jsx)("div",{className:c().content,children:p}),f&&(0,o.jsx)(i.Z,{className:c().spinner,spinning:f,size:"large"})]})})};t.default=d,d.defaultProps={url:void 0,children:void 0,handleOk:void 0,handleCancel:void 0,afterClose:void 0}},51513:function(e,t,n){"use strict";n.d(t,{R:function(){return c}});var o=n(85893),s=n(27049),l=n(24019),i=n(45938),a=n(88335),r=n.n(a);let c=e=>{let t,{streamName:n,customText:a,lastLive:c,notificationsEnabled:d,fediverseAccount:h,onNotifyClick:u,onFollowClick:m}=e;return t=a||(!a&&d&&h?(0,o.jsxs)("span",{children:["This stream is offline. You can"," ",(0,o.jsx)("span",{role:"link",tabIndex:0,className:r().actionLink,onClick:u,children:"be notified"})," ","the next time ",n," goes live or"," ",(0,o.jsx)("span",{role:"link",tabIndex:0,className:r().actionLink,onClick:m,children:"follow"})," ",h," on the Fediverse."]}):!a&&d?(0,o.jsxs)("span",{children:["This stream is offline."," ",(0,o.jsx)("span",{role:"link",tabIndex:0,className:r().actionLink,onClick:u,children:"Be notified"})," ","the next time ",n," goes live."]}):!a&&h?(0,o.jsxs)("span",{children:["This stream is offline."," ",(0,o.jsx)("span",{role:"link",tabIndex:0,className:r().actionLink,onClick:m,children:"Follow"})," ",h," on the Fediverse to see the next time ",n," goes live."]}):"This stream is offline. Check back soon!"),(0,o.jsx)("div",{id:"offline-banner",className:r().outerContainer,children:(0,o.jsxs)("div",{className:r().innerContainer,children:[(0,o.jsx)("div",{className:r().header,children:n}),(0,o.jsx)(s.Z,{className:r().separator}),(0,o.jsx)("div",{className:r().bodyText,children:t}),c&&(0,o.jsxs)("div",{className:r().lastLiveDate,children:[(0,o.jsx)(l.Z,{className:r().clockIcon}),"Last live ".concat((0,i.Z)(new Date(c))," ago.")]})]})})}},69357:function(e,t,n){"use strict";n.d(t,{X:function(){return d}});var o=n(85893),s=n(45938),l=n(68730),i=n(67294),a=n(31326),r=n(37970),c=n.n(r);let d=e=>{let t,{online:n,lastConnectTime:r,lastDisconnectTime:d,viewerCount:h}=e,[,u]=(0,i.useState)(new Date);(0,i.useEffect)(()=>{let e=setInterval(()=>u(new Date),1e3);return()=>{clearInterval(e)}},[]);let m="";if(n&&r){let x=function(e){let t=(0,l.Z)({start:e,end:new Date});return t.days>1?"".concat(t.days," days ").concat(t.hours," hours"):t.hours>=1?"".concat(t.hours," hours ").concat(t.minutes," minutes"):"".concat(t.minutes," minutes ").concat(t.seconds," seconds")}(new Date(r));m=n?"Live for  ".concat(x):"Offline",t=h>0&&(0,o.jsxs)("div",{className:c().right,children:[(0,o.jsx)("span",{children:(0,o.jsx)(a.Z,{})}),(0,o.jsx)("span",{children:" ".concat(h)})]})}else!n&&(m="Offline",d&&(t="Last live ".concat((0,s.Z)(new Date(d))," ago.")));return(0,o.jsxs)("div",{className:c().statusbar,children:[(0,o.jsx)("div",{children:m}),(0,o.jsx)("div",{children:t})]})};d.defaultProps={lastConnectTime:null,lastDisconnectTime:null}},6511:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return eq}});var o=n(85893),s=n(97183),l=n(4480),i=n(9008),a=n.n(i),r=n(67294),c=n(77466),d=n(90575),h=n(26303),u=n(94184),m=n.n(u),x=n(5152),p=n.n(x),f=n(72581),j=n(10808),_=n.n(j);let g=e=>{let{content:t}=e;return(0,o.jsx)("div",{className:_().pageContentContainer,id:"custom-page-content",children:(0,o.jsx)("div",{className:_().customPageContent,dangerouslySetInnerHTML:{__html:t}})})};var w=n(17725),v=n.n(w),y=n(87412),b=n(12341),C=n.n(b);let k=p()(()=>Promise.all([n.e(1272),n.e(8700),n.e(3729),n.e(4977),n.e(1496)]).then(n.bind(n,94977)).then(e=>e.ChatContainer),{loadableGenerated:{webpack:()=>[94977]}}),N=()=>{let e=(0,l.sJ)(c.db),t=(0,l.sJ)(c.pH);if(!e)return null;let{id:n,isModerator:s,displayName:i}=e;return(0,o.jsx)(y.ZP,{className:C().root,collapsedWidth:0,width:320,children:(0,o.jsx)(k,{messages:t,usernameToHighlight:i,chatUserId:n,isModerator:s})})};var S=n(67917),Z=n.n(S);let L=e=>{let{version:t}=e;return(0,o.jsxs)("footer",{className:Z().footer,children:[(0,o.jsxs)("span",{children:["Powered by ",(0,o.jsx)("a",{href:"https://owncast.online",children:t})]}),(0,o.jsxs)("span",{className:Z().links,children:[(0,o.jsx)("a",{href:"https://owncast.online/docs",target:"_blank",rel:"noreferrer",children:"Documentation"}),(0,o.jsx)("a",{href:"https://owncast.online/help",target:"_blank",rel:"noreferrer",children:"Contribute"}),(0,o.jsx)("a",{href:"https://github.com/owncast/owncast",target:"_blank",rel:"noreferrer",children:"Source"})]})]})};var F=n(12270),T=n.n(F);let A=e=>{let{children:t}=e;return(0,o.jsx)("div",{className:"".concat(T().row),children:t})};var D=n(71577),E=n(13959),M=n.n(E);let H=e=>{let{action:t,primary:n=!0,externalActionSelected:s}=e,{title:l,description:i,icon:a,color:r}=t;return(0,o.jsxs)(D.Z,{type:n?"primary":"default",className:m()(["".concat(M().button),"action-button"]),onClick:()=>s(t),style:{backgroundColor:r},children:[a&&(0,o.jsx)("img",{src:a,className:"".concat(M().icon),alt:i}),l]})};var I=n(51513),B=n(34447);let O=e=>{let{onClick:t,props:n}=e;return(0,o.jsx)(D.Z,{...n,type:"primary",className:M().button,icon:(0,o.jsx)(B.Z,{}),onClick:t,id:"follow-button",children:"Follow"})};var z=n(71578);let R=e=>{let{onClick:t,text:n}=e;return(0,o.jsx)(D.Z,{type:"primary",className:"".concat(M().button),icon:(0,o.jsx)(z.Z,{}),onClick:t,id:"notify-button",children:n||"Notify"})};var J=n(53731),P=n(79216),U=n(74933),G=n.n(U);let q=e=>{let{src:t}=e;return(0,o.jsx)("div",{className:G().root,children:(0,o.jsx)("div",{className:G().container,children:(0,o.jsx)(P.Z,{src:t,alt:"Logo",className:G().image,rootClassName:G().image})})})};var Y=n(25675),V=n.n(Y),Q=n(573),W=n.n(Q);let K=e=>{let{links:t}=e;return(0,o.jsx)("div",{className:W().links,children:t.map(e=>(0,o.jsx)("a",{href:e.url,className:W().link,target:"_blank",rel:"noreferrer me",children:(0,o.jsx)(V(),{src:e.icon||"/img/platformlogos/default.svg",alt:e.platform,title:e.platform,className:W().link,width:"30",height:"30"})},e.platform))})};var X=n(47900),$=n.n(X);let ee=e=>{let{name:t,title:n,summary:s,logo:l,tags:i,links:a}=e;return(0,o.jsx)("div",{className:$().root,children:(0,o.jsxs)("div",{className:$().logoTitleSection,children:[(0,o.jsx)("div",{className:$().logo,children:(0,o.jsx)(q,{src:l})}),(0,o.jsxs)("div",{className:$().titleSection,children:[(0,o.jsx)("div",{className:m()($().title,$().row,"header-title"),children:t}),(0,o.jsx)("div",{className:m()($().subtitle,$().row,"header-subtitle"),children:(0,o.jsx)(J.Z,{children:n||s})}),(0,o.jsx)("div",{className:m()($().tagList,$().row),children:i.length>0&&i.map(e=>(0,o.jsxs)("span",{children:["#",e,"\xa0"]},e))}),(0,o.jsx)("div",{className:m()($().socialLinks,$().row),children:(0,o.jsx)(K,{links:a})})]})]})})};var et=n(69357),en=n(71230),eo=n(15746),es=n(3698),el=n(24093),ei=n(69833),ea=n.n(ei);let er=e=>{let{follower:t}=e;return(0,o.jsx)("div",{className:m()([ea().follower,"followers-follower"]),children:(0,o.jsx)("a",{href:t.link,target:"_blank",rel:"noreferrer",children:(0,o.jsxs)(en.Z,{wrap:!1,children:[(0,o.jsx)(eo.Z,{span:6,children:(0,o.jsx)(el.C,{src:t.image,alt:"Avatar",className:ea().avatar,children:(0,o.jsx)("img",{src:"/logo",alt:"Logo",className:ea().placeholder})})}),(0,o.jsxs)(eo.Z,{children:[(0,o.jsx)(en.Z,{children:t.name}),(0,o.jsx)(en.Z,{className:ea().account,children:t.username})]})]})})})};var ec=n(21890),ed=n.n(ec);let eh=e=>{let{name:t,onFollowButtonClick:n}=e,[s,l]=(0,r.useState)([]),[i,a]=(0,r.useState)(0),[c,d]=(0,r.useState)(1),[u,m]=(0,r.useState)(!0),x=async()=>{try{let e=await fetch("".concat("/api/followers","?page=").concat(c)),t=await e.json(),{results:n,total:o}=t;l(n),a(o)}catch(s){console.error(s)}};(0,r.useEffect)(()=>{x()},[]),(0,r.useEffect)(()=>{x()},[c]),(0,r.useEffect)(()=>{m(!1)},[s]);let p=(0,o.jsxs)("div",{className:ed().noFollowers,id:"followers-collection",children:[(0,o.jsx)("h2",{children:"Be the first follower!"}),(0,o.jsxs)("p",{children:["Owncast"!==t?t:"This server"," is a part of the"," ",(0,o.jsx)("a",{href:"https://owncast.online/join-fediverse",children:"Fediverse"}),", an interconnected network of independent users and servers."]}),(0,o.jsxs)("p",{children:["By following ","Owncast"!==t?t:"this server"," you'll be able to get updates from the stream, share it with others, and show your appreciation when it goes live, all from your own Fediverse account."]}),(0,o.jsx)(O,{onClick:n})]}),f=(0,o.jsx)(h.Z,{active:!0,paragraph:{rows:3}});return u?f:(null==s?void 0:s.length)?(0,o.jsxs)("div",{className:ed().followers,id:"followers-collection",children:[(0,o.jsx)(en.Z,{wrap:!0,gutter:[10,10],children:s.map(e=>(0,o.jsx)(eo.Z,{children:(0,o.jsx)(er,{follower:e},e.link)},e.link))}),(0,o.jsx)(es.Z,{current:c,pageSize:24,total:Math.ceil(i/24)||1,onChange(e){d(e)},hideOnSinglePage:!0})]}):p};var eu=n(14761),em=n(66516),ex=n(38504),ep=n(49647),ef=n(60198),ej=n(89705),e_=n(97038),eg=n.n(e_);let ew="notify",ev="follow",ey=e=>{let{actions:t,externalActionSelected:n,notifyItemSelected:s,followItemSelected:l,showFollowItem:i,showNotifyItem:a}=e,r=e=>{if(e.key===ew){s();return}if(e.key===ev){l();return}let o=t.find(t=>t.url===e.key);n(o)},c=t.map(e=>({key:e.url,label:(0,o.jsxs)("span",{className:eg().item,children:[e.icon&&(0,o.jsx)("img",{className:eg().icon,src:e.icon,alt:e.title})," ",e.title]})}));i&&c.unshift({key:ev,label:(0,o.jsxs)("span",{className:eg().item,children:[(0,o.jsx)(ep.Z,{className:eg().icon})," Follow this stream"]})}),a&&c.unshift({key:ew,label:(0,o.jsxs)("span",{className:eg().item,children:[(0,o.jsx)(ef.Z,{className:eg().icon}),"Notify when live"]})});let d=(0,o.jsx)(em.Z,{items:c,onClick:r});return(0,o.jsx)(ex.Z,{overlay:d,placement:"bottomRight",trigger:["click"],className:eg().menu,children:(0,o.jsx)("div",{className:eg().buttonWrap,children:(0,o.jsx)(D.Z,{type:"default",onClick:e=>e.preventDefault(),size:"large",icon:(0,o.jsx)(ej.Z,{size:6,style:{rotate:"90deg"}})})})})};var eb=n(26713),eC=n(11382),ek=n(14670),eN=n(69677),eS=n(66009),eZ=n.n(eS);let eL=e=>{let{handleClose:t,account:n,name:s}=e,[l,i]=(0,r.useState)(null),[a,c]=(0,r.useState)(!1),[d,h]=(0,r.useState)(!1),[u,m]=(0,r.useState)(null),x=e=>{i(e),function(e){let t=e.replace(/^@+/,"");return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(t).toLowerCase())}(e)?c(!0):c(!1)},p=()=>{window.open("https://owncast.online/join-fediverse","_blank")},f=async()=>{if(a){h(!0);try{let e=l.replace(/^@+/,""),n=await fetch("/api/remotefollow",{method:"POST",body:JSON.stringify({account:e})}),o=await n.json();if(o.redirectUrl&&(window.open(o.redirectUrl,"_blank"),t()),!o.success){m(o.message),h(!1);return}if(!o.redirectUrl){m("Unable to follow."),h(!1);return}}catch(s){m(s.message)}h(!1)}};return(0,o.jsxs)(eb.Z,{direction:"vertical",id:"follow-modal",children:[(0,o.jsxs)("div",{className:eZ().header,children:["By following this stream you'll get notified on the Fediverse when it goes live. Now is a great time to",(0,o.jsx)("a",{href:"https://owncast.online/join-fediverse",target:"_blank",rel:"noreferrer",children:"\xa0learn about the Fediverse\xa0"}),"if it's new to you."]}),(0,o.jsxs)(eC.Z,{spinning:d,children:[u&&(0,o.jsx)(ek.Z,{message:"Follow Error",description:u,type:"error",showIcon:!0}),(0,o.jsxs)("div",{className:eZ().account,children:[(0,o.jsx)("img",{src:"/logo",alt:"logo",className:eZ().logo}),(0,o.jsxs)("div",{className:eZ().username,children:[(0,o.jsx)("div",{className:eZ().name,children:s}),(0,o.jsx)("div",{children:n})]})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{className:eZ().instructions,children:"Enter your username @server to follow"}),(0,o.jsx)(eN.Z,{value:l,size:"large",onChange:e=>x(e.target.value),placeholder:"Your fediverse account @account@server",defaultValue:l}),(0,o.jsx)("div",{className:eZ().footer,children:"You'll be redirected to your Fediverse server and asked to confirm the action."})]}),(0,o.jsxs)(eb.Z,{className:eZ().buttons,children:[(0,o.jsx)(D.Z,{disabled:!a,type:"primary",onClick:f,children:"Follow"}),(0,o.jsx)(D.Z,{onClick:p,type:"primary",children:"Join the Fediverse"})]})]})]})},{Content:eF}=s.Z,eT=p()(()=>n.e(6160).then(n.bind(n,66160)).then(e=>e.BrowserNotifyModal),{loadableGenerated:{webpack:()=>[66160]}}),eA=p()(()=>n.e(7815).then(n.bind(n,17815)).then(e=>e.NotifyReminderPopup),{loadableGenerated:{webpack:()=>[17815]}}),eD=p()(()=>Promise.all([n.e(2544),n.e(7902),n.e(2239),n.e(5202)]).then(n.bind(n,8888)).then(e=>e.OwncastPlayer),{loadableGenerated:{webpack:()=>[8888]}}),eE=p()(()=>Promise.all([n.e(1272),n.e(8700),n.e(3729),n.e(4977),n.e(1496)]).then(n.bind(n,94977)).then(e=>e.ChatContainer),{loadableGenerated:{webpack:()=>[94977]}}),eM=e=>{let{name:t,streamTitle:n,summary:s,tags:l,socialHandles:i,extraPageContent:a,setShowFollowModal:r}=e,c=(0,o.jsx)(g,{content:a}),h=(0,o.jsx)(eh,{name:t,onFollowButtonClick:()=>r(!0)});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{className:v().lowerHalf,children:(0,o.jsx)(ee,{name:t,title:n,summary:s,tags:l,links:i,logo:"/logo"})}),(0,o.jsx)("div",{className:v().lowerSection,children:(0,o.jsx)(d.Z,{defaultActiveKey:"0",items:[{label:"About",key:"2",children:c},{label:"Followers",key:"3",children:h}]})})]})},eH=e=>{let{name:t,streamTitle:n,summary:s,tags:l,socialHandles:i,extraPageContent:a,messages:c,currentUser:h,showChat:u,actions:x,setExternalActionToDisplay:p,setShowNotifyPopup:f,setShowFollowModal:j}=e;if(!h)return null;let _=(0,r.useRef)(),{id:w,displayName:y}=h,b=u&&(0,o.jsx)(eE,{messages:c,usernameToHighlight:y,chatUserId:w,isModerator:!1}),C=(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(ee,{name:t,title:n,summary:s,tags:l,links:i,logo:"/logo"}),(0,o.jsx)(g,{content:a})]}),k=(0,o.jsx)(eh,{name:t,onFollowButtonClick:()=>j(!0)}),N="".concat(function(e){let[t,n]=(0,r.useState)(0),o=()=>{if(!e.current)return;let t=e.current.getBoundingClientRect().top,{innerHeight:o}=window;n(o-t)};return(0,r.useEffect)(()=>(o(),window.addEventListener("resize",o),()=>{window.removeEventListener("resize",o)}),[]),t}(_),"px"),S=(e,t)=>(0,o.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"start"},children:[(0,o.jsx)(t,{...e,style:{width:"85%"}}),(0,o.jsx)(ey,{showFollowItem:!0,showNotifyItem:!0,actions:x,externalActionSelected:p,notifyItemSelected:()=>f(!0),followItemSelected:()=>j(!0)})]});return(0,o.jsx)("div",{className:m()(v().lowerSectionMobile),ref:_,style:{height:N},children:(0,o.jsx)(d.Z,{defaultActiveKey:"0",items:[u&&{label:"Chat",key:"0",children:b},{label:"About",key:"2",children:C},{label:"Followers",key:"3",children:k}],renderTabBar:S})})},eI=e=>{let{externalActionToDisplay:t,setExternalActionToDisplay:n}=e,{title:s,description:l,url:i}=t;return(0,o.jsx)(eu.Modal,{title:l||s,url:i,open:!!t,height:"80vh",handleCancel:()=>n(null)})},eB=()=>{let e=(0,l.sJ)(c.Q),t=(0,l.sJ)(c.g1),n=(0,l.sJ)(c.pT),s=(0,l.sJ)(c.di),i=(0,l.sJ)(c.db),[a,d]=(0,l.FV)(c.hz),u=(0,l.sJ)(c.j$),m=(0,l.sJ)(c.YW),{viewerCount:x,lastConnectTime:p,lastDisconnectTime:j,streamTitle:_}=(0,l.sJ)(c.RI),{extraPageContent:g,version:w,name:y,summary:b,socialHandles:C,tags:k,externalActions:S,offlineMessage:Z,chatDisabled:F,federation:T,notifications:D}=t,[E,M]=(0,r.useState)(!1),[B,z]=(0,r.useState)(!1),[J,P]=(0,r.useState)(!1),{account:U}=T,{browser:G}=D,{enabled:q}=G,[Y,V]=(0,r.useState)(null),Q=e=>{let{openExternally:t,url:n}=e;t?window.open(n,"_blank"):V(e)},W=S.map(e=>(0,o.jsx)(H,{action:e,externalActionSelected:Q},e.url)),K=()=>{let e=parseInt((0,f.$o)(f.dA.userVisitCount),10);Number.isNaN(e)&&(e=0),(0,f.qQ)(f.dA.userVisitCount,e+1),e>2&&!(0,f.$o)(f.dA.hasDisplayedNotificationModal)&&M(!0)},X=()=>{z(!1),M(!1),(0,f.qQ)(f.dA.hasDisplayedNotificationModal,!0)},$=()=>{let e=window.innerWidth;void 0===a&&(e<=768?d(!0):d(!1)),!a&&e<=768&&d(!0),a&&e>768&&d(!1)};(0,r.useEffect)(()=>(K(),$(),window.addEventListener("resize",$),()=>{window.removeEventListener("resize",$)}),[]);let ee=!F&&s&&n;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{className:v().main,children:[(0,o.jsxs)(eF,{className:v().root,children:[(0,o.jsxs)("div",{className:v().mainSection,children:[(0,o.jsxs)("div",{className:v().topSection,children:[e.appLoading&&(0,o.jsx)(h.Z,{loading:!0,active:!0,paragraph:{rows:7}}),m&&(0,o.jsx)(eD,{source:"/hls/stream.m3u8",online:m}),!m&&!e.appLoading&&(0,o.jsx)(I.R,{streamName:y,customText:Z,notificationsEnabled:q,fediverseAccount:U,lastLive:j,onNotifyClick:()=>z(!0),onFollowClick:()=>P(!0)}),m&&(0,o.jsx)(et.X,{online:m,lastConnectTime:p,lastDisconnectTime:j,viewerCount:x})]}),(0,o.jsx)("div",{className:v().midSection,children:(0,o.jsxs)("div",{className:v().buttonsLogoTitleSection,children:[!a&&(0,o.jsxs)(A,{children:[W,(0,o.jsx)(O,{size:"small",onClick:()=>P(!0)}),(0,o.jsx)(eA,{open:E,notificationClicked:()=>z(!0),notificationClosed:()=>X(),children:(0,o.jsx)(R,{onClick:()=>z(!0)})})]}),(0,o.jsx)(eu.Modal,{title:"Browser Notifications",open:B,afterClose:()=>X(),handleCancel:()=>X(),children:(0,o.jsx)(eT,{})})]})}),a?(0,o.jsx)(eH,{name:y,streamTitle:_,summary:b,tags:k,socialHandles:C,extraPageContent:g,messages:u,currentUser:i,showChat:ee,actions:S,setExternalActionToDisplay:Q,setShowNotifyPopup:z,setShowFollowModal:P}):(0,o.jsx)(eM,{name:y,streamTitle:_,summary:b,tags:k,socialHandles:C,extraPageContent:g,setShowFollowModal:P}),(0,o.jsx)(L,{version:w})]}),ee&&!a&&(0,o.jsx)(N,{})]}),!a&&!1]}),Y&&(0,o.jsx)(eI,{externalActionToDisplay:Y,setExternalActionToDisplay:V}),(0,o.jsx)(eu.Modal,{title:"Follow ".concat(y),open:J,handleCancel:()=>P(!1),width:"550px",children:(0,o.jsx)(eL,{account:U,name:y,handleClose:()=>P(!1)})})]})};var eO=n(37527),ez=n(85402);let eR=e=>{let{title:t,message:n}=e;return(0,o.jsx)(ez.Z,{title:t,visible:!0,footer:null,closable:!1,keyboard:!1,width:900,centered:!0,className:"modal",children:(0,o.jsx)("p",{style:{fontSize:"1.3rem"},children:n})})},eJ=()=>{let e=(0,l.sJ)(c.j$),t=(0,l.sJ)(c.RI),n=!1,o="",s=()=>{n=!0,o=window.document.title},i=()=>{n=!1,window.document.title=o},a=()=>{window.addEventListener("blur",s),window.addEventListener("focus",i)};return(0,r.useEffect)(()=>(o=window.document.title,a(),()=>{window.removeEventListener("focus",i),window.removeEventListener("blur",s)}),[]),(0,r.useEffect)(()=>{let{online:e}=t;n&&e&&(window.document.title="\uD83D\uDCAC :: ".concat(o))},[e]),(0,r.useEffect)(()=>{if(!n)return;let{online:e}=t;e?window.document.title=" \uD83D\uDFE2 :: ".concat(o):e||(window.document.title=" \uD83D\uDD34 :: ".concat(o))},[c.RI]),null},eP=()=>(0,o.jsx)("script",{id:"server-side-hydration",nonce:"{{.Nonce}}",dangerouslySetInnerHTML:{__html:"\n	window.configHydration = {{.ServerConfigJSON}};\n	window.statusHydration = {{.StatusJSON}};\n	"}}),eU=()=>{let e=(0,l.sJ)(c.g1),{appearanceVariables:t,customStyles:n}=e,s=Object.keys(t).filter(e=>!!t[e]).map(e=>"--".concat(e,": ").concat(t[e]));return(0,o.jsx)("style",{dangerouslySetInnerHTML:{__html:"\n				:root {\n					".concat(s.join(";\n"),"\n				}\n				").concat(n,"\n			")}})},eG=()=>{let e=(0,l.sJ)(c.g1),{name:t,title:n,customStyles:i}=e,d=(0,l.sJ)(c.di),h=(0,l.sJ)(c.ap),u=(0,r.useRef)(null),{chatDisabled:m}=e;return(0,r.useEffect)(()=>{!function(e){let t=e=>{let t=e.getAttribute("rel");e.setAttribute("rel","".concat(t," noopener noreferrer"))};e.querySelectorAll("a").forEach(e=>t(e));let n=new MutationObserver(function(e){for(let n of e)for(let o of n.addedNodes)o instanceof HTMLElement&&"a"===o.tagName.toLowerCase()&&t(o)});n.observe(e,{attributes:!1,childList:!0,subtree:!0})}(u.current)},[]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(a(),{children:[(0,o.jsx)(eP,{}),(0,o.jsx)("link",{rel:"apple-touch-icon",sizes:"57x57",href:"/img/favicon/apple-icon-57x57.png"}),(0,o.jsx)("link",{rel:"apple-touch-icon",sizes:"60x60",href:"/img/favicon/apple-icon-60x60.png"}),(0,o.jsx)("link",{rel:"apple-touch-icon",sizes:"72x72",href:"/img/favicon/apple-icon-72x72.png"}),(0,o.jsx)("link",{rel:"apple-touch-icon",sizes:"76x76",href:"/img/favicon/apple-icon-76x76.png"}),(0,o.jsx)("link",{rel:"apple-touch-icon",sizes:"114x114",href:"/img/favicon/apple-icon-114x114.png"}),(0,o.jsx)("link",{rel:"apple-touch-icon",sizes:"120x120",href:"/img/favicon/apple-icon-120x120.png"}),(0,o.jsx)("link",{rel:"apple-touch-icon",sizes:"144x144",href:"/img/favicon/apple-icon-144x144.png"}),(0,o.jsx)("link",{rel:"apple-touch-icon",sizes:"152x152",href:"/img/favicon/apple-icon-152x152.png"}),(0,o.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/img/favicon/apple-icon-180x180.png"}),(0,o.jsx)("link",{rel:"icon",type:"image/png",sizes:"192x192",href:"/img/favicon/android-icon-192x192.png"}),(0,o.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/img/favicon/favicon-32x32.png"}),(0,o.jsx)("link",{rel:"icon",type:"image/png",sizes:"96x96",href:"/img/favicon/favicon-96x96.png"}),(0,o.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/img/favicon/favicon-16x16.png"}),(0,o.jsx)("link",{rel:"manifest",href:"/manifest.json"}),(0,o.jsx)("link",{href:"/api/auth/provider/indieauth"}),(0,o.jsx)("meta",{name:"msapplication-TileColor",content:"#ffffff"}),(0,o.jsx)("meta",{name:"msapplication-TileImage",content:"/img/favicon/ms-icon-144x144.png"}),(0,o.jsx)("meta",{name:"theme-color",content:"#ffffff"}),(0,o.jsx)("style",{children:i}),(0,o.jsx)("base",{target:"_blank"})]}),(0,o.jsxs)(a(),{children:[t?(0,o.jsx)("title",{children:t}):(0,o.jsx)("title",{children:"{{.Name}}"}),(0,o.jsx)("meta",{name:"description",content:"{{.Summary}}"}),(0,o.jsx)("meta",{property:"og:title",content:"{{.Name}}"}),(0,o.jsx)("meta",{property:"og:site_name",content:"{{.Name}}"}),(0,o.jsx)("meta",{property:"og:url",content:"{{.RequestedURL}}"}),(0,o.jsx)("meta",{property:"og:description",content:"{{.Summary}}"}),(0,o.jsx)("meta",{property:"og:type",content:"video.other"}),(0,o.jsx)("meta",{property:"video:tag",content:"{{.TagsString}}"}),(0,o.jsx)("meta",{property:"og:image",content:"{{.RequestedURL}}{{.Thumbnail}}"}),(0,o.jsx)("meta",{property:"og:image:url",content:"{{.RequestedURL}}{{.Thumbnail}}"}),(0,o.jsx)("meta",{property:"og:image:alt",content:"{{.RequestedURL}}{{.Image}}"}),(0,o.jsx)("meta",{property:"og:video",content:"{{.RequestedURL}}/embed/video"}),(0,o.jsx)("meta",{property:"og:video:secure_url",content:"{{.RequestedURL}}/embed/video"}),(0,o.jsx)("meta",{property:"og:video:height",content:"315"}),(0,o.jsx)("meta",{property:"og:video:width",content:"560"}),(0,o.jsx)("meta",{property:"og:video:type",content:"text/html"}),(0,o.jsx)("meta",{property:"og:video:actor",content:"{{.Name}}"}),(0,o.jsx)("meta",{property:"twitter:title",content:"{{.Name}}"}),(0,o.jsx)("meta",{property:"twitter:url",content:"{{.RequestedURL}}"}),(0,o.jsx)("meta",{property:"twitter:description",content:"{{.Summary}}"}),(0,o.jsx)("meta",{property:"twitter:image",content:"{{.Image}}"}),(0,o.jsx)("meta",{property:"twitter:card",content:"player"}),(0,o.jsx)("meta",{property:"twitter:player",content:"{{.RequestedURL}}/embed/video"}),(0,o.jsx)("meta",{property:"twitter:player:width",content:"560"}),(0,o.jsx)("meta",{property:"twitter:player:height",content:"315"})]}),(0,o.jsx)(c.me,{}),(0,o.jsx)(eJ,{}),(0,o.jsx)(eU,{}),(0,o.jsxs)(s.Z,{ref:u,style:{minHeight:"100vh"},children:[(0,o.jsx)(eO.h,{name:n||t,chatAvailable:d,chatDisabled:m}),(0,o.jsx)(eB,{}),h&&(0,o.jsx)(eR,{title:h.title,message:h.message})]})]})};function eq(){return(0,o.jsx)(eG,{})}},13959:function(e){e.exports={button:"ActionButton_button__z5Z2c",icon:"ActionButton_icon__EPp7Q"}},97038:function(e){e.exports={item:"ActionButtonMenu_item__OJQdr",buttonWrap:"ActionButtonMenu_buttonWrap__WQ9kt",icon:"ActionButtonMenu_icon__edY1D",menu:"ActionButtonMenu_menu__GChDk"}},12270:function(e){e.exports={row:"ActionButtonRow_row__SiEGe"}},47900:function(e){e.exports={root:"ContentHeader_root__HaUG0",row:"ContentHeader_row__9Q8gH",logoTitleSection:"ContentHeader_logoTitleSection__Z8pUc",logo:"ContentHeader_logo__wo_HN",titleSection:"ContentHeader_titleSection___6Y15",title:"ContentHeader_title__E_DsI",subtitle:"ContentHeader_subtitle__n1Wew",tagList:"ContentHeader_tagList__rx3jY"}},79252:function(e){e.exports={root:"UserDropdown_root__IdxfQ","ant-space":"UserDropdown_ant-space__XJTZ3","ant-space-item":"UserDropdown_ant-space-item__w4nC2"}},66009:function(e){e.exports={header:"FollowModal_header__la1ji",buttons:"FollowModal_buttons__tt4Mc",instructions:"FollowModal_instructions__HiKFF",footer:"FollowModal_footer__AjucH",account:"FollowModal_account__cmHkm",logo:"FollowModal_logo__Ew8xK",username:"FollowModal_username__A_OTw",name:"FollowModal_name__Sf_TP"}},17725:function(e){e.exports={root:"Content_root__h1mNK",mainSection:"Content_mainSection__Gk78Y",topSection:"Content_topSection__JIZi0",lowerSection:"Content_lowerSection__BZHYI",lowerSectionMobile:"Content_lowerSectionMobile__hRr0_",leftCol:"Content_leftCol__U2TDq",loadingSpinner:"Content_loadingSpinner__mDlYC",main:"Content_main__XVf63"}},10808:function(e){e.exports={pageContentContainer:"CustomPageContent_pageContentContainer__EG4tU",customPageContent:"CustomPageContent_customPageContent__Mr981",summary:"CustomPageContent_summary___Zgps"}},67917:function(e){e.exports={footer:"Footer_footer__mPuvf",links:"Footer_links__7bBxV"}},31764:function(e){e.exports={header:"Header_header__U4Ro1",logo:"Header_logo__HLZ6Z"}},74933:function(e){e.exports={root:"Logo_root__jKiJC",container:"Logo_container__A4UYT",image:"Logo_image__Ahkom"}},77011:function(e){e.exports={spinner:"Modal_spinner__GiSS0",content:"Modal_content__h9my9"}},88335:function(e){e.exports={outerContainer:"OfflineBanner_outerContainer__3AbsB",innerContainer:"OfflineBanner_innerContainer__zTm13",bodyText:"OfflineBanner_bodyText__nNNy0",separator:"OfflineBanner_separator___j_Ss",lastLiveDate:"OfflineBanner_lastLiveDate___UZdO",clockIcon:"OfflineBanner_clockIcon__s0DB_",header:"OfflineBanner_header__Vu20o",footer:"OfflineBanner_footer__o3Zl5",actionLink:"OfflineBanner_actionLink__b4Mwa"}},12341:function(e){e.exports={root:"Sidebar_root__8HE0A"}},573:function(e){e.exports={link:"SocialLinks_link___CcSm",links:"SocialLinks_links__gOAb7"}},37970:function(e){e.exports={statusbar:"Statusbar_statusbar__AtVnB"}},21890:function(e){e.exports={followers:"FollowerCollection_followers__e_EUS",noFollowers:"FollowerCollection_noFollowers__UaCVW"}},69833:function(e){e.exports={follower:"SingleFollower_follower__EyBDI",avatar:"SingleFollower_avatar__V9jHG",account:"SingleFollower_account__Z66vo",placeholder:"SingleFollower_placeholder__CgsfJ"}}},function(e){e.O(0,[8909,3903,4267,575,5938,6395,1082,5360,8245,8793,7466,9774,2888,179],function(){return e(e.s=48312)}),_N_E=e.O()}]);