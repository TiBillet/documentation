"use strict";(self.webpackChunktibillet=self.webpackChunktibillet||[]).push([[8958],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>b});var i=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=i.createContext({}),c=function(e){var t=i.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),m=c(r),b=n,d=m["".concat(s,".").concat(b)]||m[b]||p[b]||o;return r?i.createElement(d,l(l({ref:t},u),{},{components:r})):i.createElement(d,l({ref:t},u))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=m;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:n,l[1]=a;for(var c=2;c<o;c++)l[c]=r[c];return i.createElement.apply(null,l)}return i.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5767:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var i=r(7462),n=(r(7294),r(3905));const o={sidebar_position:41,slug:"iframe",title:"Int\xe9gration",description:"Envoyer un POST pour chaque reservation valid\xe9e.",keywords:["ticketing","billetterie","webhook","api"],wiktags:["ticketing","billetterie","webhook","api"],image:"https://tibillet.org/img/embed_email.jpg",authors:"Jonas"},l=void 0,a={unversionedId:"Utilisateur/Billetterie/41 Int\xe9gration",id:"Utilisateur/Billetterie/41 Int\xe9gration",title:"Int\xe9gration",description:"Envoyer un POST pour chaque reservation valid\xe9e.",source:"@site/docs/Utilisateur/Billetterie/41 Int\xe9gration.md",sourceDirName:"Utilisateur/Billetterie",slug:"/Utilisateur/Billetterie/iframe",permalink:"/docs/Utilisateur/Billetterie/iframe",draft:!1,editUrl:"https://github.com/TiBillet/documentation/tree/main/tibillet/docs/Utilisateur/Billetterie/41 Int\xe9gration.md",tags:[],version:"current",sidebarPosition:41,frontMatter:{sidebar_position:41,slug:"iframe",title:"Int\xe9gration",description:"Envoyer un POST pour chaque reservation valid\xe9e.",keywords:["ticketing","billetterie","webhook","api"],wiktags:["ticketing","billetterie","webhook","api"],image:"https://tibillet.org/img/embed_email.jpg",authors:"Jonas"},sidebar:"tutorialSidebar",previous:{title:"Webhook",permalink:"/docs/Utilisateur/Billetterie/webhook"},next:{title:"Flux RSS",permalink:"/docs/Utilisateur/Billetterie/rss"}},s={},c=[],u={toc:c};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,i.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Vous pouvez int\xe9grer la billetterie \xe0 votre site web en utilisant une balise iframe : Il suffit de rajouter /embed/ dans l'url de votre \xe9v\xe8nement."),(0,n.kt)("p",null,"Exemple : "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"lien de l'\xe9v\xe8nenement : ",(0,n.kt)("a",{parentName:"li",href:"https://demo.betabillet.tech/event/esbjorn-svensson-trio-080223-1830/"},"https://demo.betabillet.tech/event/esbjorn-svensson-trio-080223-1830/")),(0,n.kt)("li",{parentName:"ul"},"lien embed : ",(0,n.kt)("a",{parentName:"li",href:"https://demo.betabillet.tech/event/embed/esbjorn-svensson-trio-080223-1830/"},"https://demo.betabillet.tech/event/embed/esbjorn-svensson-trio-080223-1830/"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="iframe"',title:'"iframe"'},'<iframe src="https://demo.betabillet.tech/event/embed/esbjorn-svensson-trio-080223-1830/" width="100%" height="1000px" frameborder="0"></iframe>\n')),(0,n.kt)("iframe",{src:"https://demo.betabillet.tech/event/embed/esbjorn-svensson-trio-080223-1830/",width:"100%",height:"1000px",frameborder:"0"}))}p.isMDXComponent=!0}}]);