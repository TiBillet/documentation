"use strict";(self.webpackChunktibillet=self.webpackChunktibillet||[]).push([[7300],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>b});var i=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=i.createContext({}),p=function(e){var t=i.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(r),b=n,m=d["".concat(s,".").concat(b)]||d[b]||u[b]||o;return r?i.createElement(m,a(a({ref:t},c),{},{components:r})):i.createElement(m,a({ref:t},c))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var p=2;p<o;p++)a[p]=r[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,r)}d.displayName="MDXCreateElement"},698:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var i=r(7462),n=(r(7294),r(3905));const o={sidebar_position:40,slug:"webhook",title:"Webhook",description:"Envoyer un POST pour chaque reservation valid\xe9e.",keywords:["ticketing","billetterie","webhook","api"],wiktags:["ticketing","billetterie","webhook","api"],authors:"Jonas"},a=void 0,l={unversionedId:"Utilisateur/Billetterie/40 webhook",id:"Utilisateur/Billetterie/40 webhook",title:"Webhook",description:"Envoyer un POST pour chaque reservation valid\xe9e.",source:"@site/docs/Utilisateur/Billetterie/40 webhook.md",sourceDirName:"Utilisateur/Billetterie",slug:"/Utilisateur/Billetterie/webhook",permalink:"/docs/Utilisateur/Billetterie/webhook",draft:!1,editUrl:"https://github.com/TiBillet/documentation/tree/main/tibillet/docs/Utilisateur/Billetterie/40 webhook.md",tags:[],version:"current",sidebarPosition:40,frontMatter:{sidebar_position:40,slug:"webhook",title:"Webhook",description:"Envoyer un POST pour chaque reservation valid\xe9e.",keywords:["ticketing","billetterie","webhook","api"],wiktags:["ticketing","billetterie","webhook","api"],authors:"Jonas"},sidebar:"tutorialSidebar",previous:{title:"Billetterie",permalink:"/docs/category/billetterie"},next:{title:"Syndication par flux RSS",permalink:"/docs/Utilisateur/Billetterie/rss"}},s={},p=[],c={toc:p};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,i.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Il est possible de r\xe9aliser des webhook apr\xe8s chaque \xe9v\xe8nement r\xe9alis\xe9 sur la billetterie dans l'interface\nd'administration."),(0,n.kt)("p",null,"exemple : ",(0,n.kt)("a",{parentName:"p",href:"https://demo.betabillet.tech/adminBaseBillet/webhook/"},"https://demo.betabillet.tech/adminBaseBillet/webhook/")),(0,n.kt)("p",null,"Le webhook se d\xe9clenche \xe0 chaque validation de reservation gratuite ou payante, en m\xeame temps que l'envoi des billets\npar email."),(0,n.kt)("p",null,'Il est possible de voir la derni\xe8re r\xe9ponse de la requete dans le champ "Last response".'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Reservation"',title:'"Reservation"'},'# Celery task : Billetterie/DjangoFiles/BaseBillet/tasks.py\n\njson = {\n    "object": "reservation",\n    "uuid": f"{reservation.uuid}",\n    "state": f"{reservation.status}",\n    "datetime": f"{reservation.datetime}",\n}\n')),(0,n.kt)("p",null,"Il est ensuite possible de r\xe9cup\xe9rer plus d'information sur la reservation via l'API standard ",(0,n.kt)("a",{parentName:"p",href:"/docs/api/reservations"},"/docs/api/reservations")))}u.isMDXComponent=!0}}]);