"use strict";(self.webpackChunktibillet=self.webpackChunktibillet||[]).push([[8966],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(r),m=s,f=d["".concat(l,".").concat(m)]||d[m]||c[m]||i;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function m(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=r.length,a=new Array(i);a[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:s,a[1]=o;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6831:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=r(7462),s=(r(7294),r(3905));const i={sidebar_position:30,slug:"admin_supp",title:"Suppression des commandes",description:"Supprimer plusieurs commande d'un coup.",keywords:["cashless","billetterie","ticketing","android"],wiktags:["cashless","billetterie","ticketing","android"],authors:"jonas"},a=void 0,o={unversionedId:"Utilisateur/Cashless/30 SuppCommande",id:"Utilisateur/Cashless/30 SuppCommande",title:"Suppression des commandes",description:"Supprimer plusieurs commande d'un coup.",source:"@site/docs/Utilisateur/Cashless/30 SuppCommande.md",sourceDirName:"Utilisateur/Cashless",slug:"/Utilisateur/Cashless/admin_supp",permalink:"/docs/Utilisateur/Cashless/admin_supp",draft:!1,editUrl:"https://github.com/TiBillet/documentation/tree/main/tibillet/docs/Utilisateur/Cashless/30 SuppCommande.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{sidebar_position:30,slug:"admin_supp",title:"Suppression des commandes",description:"Supprimer plusieurs commande d'un coup.",keywords:["cashless","billetterie","ticketing","android"],wiktags:["cashless","billetterie","ticketing","android"],authors:"jonas"},sidebar:"tutorialSidebar",previous:{title:"Impression des commandes",permalink:"/docs/Utilisateur/Cashless/impression_preparation"},next:{title:"Cashback",permalink:"/docs/Utilisateur/Cashless/cashback"}},l={},p=[{value:"Selectionner et supprimer des commandes",id:"selectionner-et-supprimer-des-commandes",level:2}],u={toc:p};function c(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"selectionner-et-supprimer-des-commandes"},"Selectionner et supprimer des commandes"),(0,s.kt)("p",null,"Plut\xf4t que de passer par le mode Gerant pour supprimer les commandes non servies ou non pay\xe9es, il est possible de toutes les supprimer d'un coup depuis l'interface admin."),(0,s.kt)("p",null,"Dans l'adminstration de votre instance cashless TiBillet, allez dans le menu VENTES / Commandes.\nFilter \xe0 l'aide du menu d\xe9roulant les commandes (Par table, par statuts, etc ...)\nSelectionnez-les une par une ou toute en m\xeame temps avec le bouton radio du menu, \xe0 gauche de TABLE."),(0,s.kt)("p",null,'Dans le menu d\xe9roulant en bas, \xe0 gauche de ENVOYER, selectionnez "Supprimez les commandes".'),(0,s.kt)("admonition",{type:"danger"},(0,s.kt)("p",{parentName:"admonition"},"Attention ! Il n'y aura pas de confirmation et impossible de revenir en arri\xe8re.")),(0,s.kt)("video",{width:"100%",controls:!0,src:"/img/suppcomm.mp4"}))}c.isMDXComponent=!0}}]);