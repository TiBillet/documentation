"use strict";(self.webpackChunktibillet=self.webpackChunktibillet||[]).push([[8958],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>b});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(r),b=i,d=m["".concat(s,".").concat(b)]||m[b]||c[b]||o;return r?n.createElement(d,a(a({ref:t},p),{},{components:r})):n.createElement(d,a({ref:t},p))}));function b(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5767:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=r(7462),i=(r(7294),r(3905));const o={sidebar_position:41,slug:"iframe",title:"Int\xe9gration",description:"Envoyer un POST pour chaque reservation valid\xe9e.",keywords:["ticketing","billetterie","webhook","api"],wiktags:["ticketing","billetterie","webhook","api"],image:"https://tibillet.org/img/embed_email.jpg",authors:"Jonas"},a=void 0,l={unversionedId:"Utilisateur/Billetterie/41 Int\xe9gration",id:"Utilisateur/Billetterie/41 Int\xe9gration",title:"Int\xe9gration",description:"Envoyer un POST pour chaque reservation valid\xe9e.",source:"@site/docs/Utilisateur/Billetterie/41 Int\xe9gration.md",sourceDirName:"Utilisateur/Billetterie",slug:"/Utilisateur/Billetterie/iframe",permalink:"/docs/Utilisateur/Billetterie/iframe",draft:!1,editUrl:"https://github.com/TiBillet/documentation/tree/main/tibillet/docs/Utilisateur/Billetterie/41 Int\xe9gration.md",tags:[],version:"current",sidebarPosition:41,frontMatter:{sidebar_position:41,slug:"iframe",title:"Int\xe9gration",description:"Envoyer un POST pour chaque reservation valid\xe9e.",keywords:["ticketing","billetterie","webhook","api"],wiktags:["ticketing","billetterie","webhook","api"],image:"https://tibillet.org/img/embed_email.jpg",authors:"Jonas"},sidebar:"tutorialSidebar",previous:{title:"Webhook",permalink:"/docs/Utilisateur/Billetterie/webhook"},next:{title:"Flux RSS",permalink:"/docs/Utilisateur/Billetterie/rss"}},s={},u=[{value:"1 - route existante, ajouter un alias :",id:"1---route-existante-ajouter-un-alias-",level:3},{value:"2 - nouvelle route :",id:"2---nouvelle-route-",level:3}],p={toc:u};function c(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Vous pouvez int\xe9grer la billetterie \xe0 votre site web en utilisant une balise iframe en modifiant la route ad\xe9quate",(0,i.kt)("br",{parentName:"p"}),"\n",'dans "../Front/src/router/routes.js", 2 possibilit\xe9s :'),(0,i.kt)("h3",{id:"1---route-existante-ajouter-un-alias-"},"1 - route existante, ajouter un alias :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"{\n    path: '/event/:slug',\n    // si iframe\n    alias: '/event/embed/:slug',\n    name: 'Event',\n    component: () => import(/* webpackChunkName: \"Event\" */ '../views/Event.vue')\n}\n")),(0,i.kt)("p",null,"Exemple : "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"lien de l'\xe9v\xe8nenement : ",(0,i.kt)("a",{parentName:"li",href:"https://demo.betabillet.tech/event/esbjorn-svensson-trio-080223-1830/"},"https://demo.betabillet.tech/event/esbjorn-svensson-trio-080223-1830/")),(0,i.kt)("li",{parentName:"ul"},"lien embed : ",(0,i.kt)("a",{parentName:"li",href:"https://demo.betabillet.tech/event/embed/esbjorn-svensson-trio-080223-1830/"},"https://demo.betabillet.tech/event/embed/esbjorn-svensson-trio-080223-1830/"))),(0,i.kt)("h3",{id:"2---nouvelle-route-"},"2 - nouvelle route :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"{\n    path: '/event/embed/:slug',\n    name: 'Event',\n    component: () => import(/* webpackChunkName: \"Event\" */ '../views/Event.vue')\n}\n")),(0,i.kt)("p",null,"Exemple : "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"lien embed : ",(0,i.kt)("a",{parentName:"li",href:"https://demo.betabillet.tech/event/embed/esbjorn-svensson-trio-080223-1830/"},"https://demo.betabillet.tech/event/embed/esbjorn-svensson-trio-080223-1830/"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="iframe"',title:'"iframe"'},'<iframe src="https://demo.betabillet.tech/event/embed/esbjorn-svensson-trio-080223-1830/" width="100%" height="1000px" frameborder="0"></iframe>\n')),(0,i.kt)("iframe",{src:"https://demo.betabillet.tech/event/embed/esbjorn-svensson-trio-080223-1830/",width:"100%",height:"1000px",frameborder:"0"}))}c.isMDXComponent=!0}}]);