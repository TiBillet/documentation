"use strict";(self.webpackChunktibillet=self.webpackChunktibillet||[]).push([[9230],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var c=n.createContext({}),o=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=o(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=o(r),d=s,h=m["".concat(c,".").concat(d)]||m[d]||p[d]||a;return r?n.createElement(h,l(l({ref:t},u),{},{components:r})):n.createElement(h,l({ref:t},u))}));function d(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=r.length,l=new Array(a);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:s,l[1]=i;for(var o=2;o<a;o++)l[o]=r[o];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9536:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>o});var n=r(7462),s=(r(7294),r(3905));const a={sidebar_position:200,slug:"cashback",title:"Cashback",description:"R\xe9compensez les recharges en ligne",keywords:["cashless","billetterie","ticketing","cashback","stripe"],wiktags:["cashless","billetterie","ticketing","cashback","stripe"],authors:"jonas"},l=void 0,i={unversionedId:"Utilisateur/Cashless/200 Cashback",id:"Utilisateur/Cashless/200 Cashback",title:"Cashback",description:"R\xe9compensez les recharges en ligne",source:"@site/docs/Utilisateur/Cashless/200 Cashback.md",sourceDirName:"Utilisateur/Cashless",slug:"/Utilisateur/Cashless/cashback",permalink:"/docs/Utilisateur/Cashless/cashback",draft:!1,editUrl:"https://github.com/TiBillet/documentation/tree/main/tibillet/docs/Utilisateur/Cashless/200 Cashback.md",tags:[],version:"current",sidebarPosition:200,frontMatter:{sidebar_position:200,slug:"cashback",title:"Cashback",description:"R\xe9compensez les recharges en ligne",keywords:["cashless","billetterie","ticketing","cashback","stripe"],wiktags:["cashless","billetterie","ticketing","cashback","stripe"],authors:"jonas"},sidebar:"tutorialSidebar",previous:{title:"Suppression des commandes",permalink:"/docs/Utilisateur/Cashless/admin_supp"},next:{title:"Billetterie",permalink:"/docs/category/billetterie"}},c={},o=[{value:"R\xe9compensez les recharges de sommes importantes en ligne.",id:"r\xe9compensez-les-recharges-de-sommes-importantes-en-ligne",level:2},{value:"Exemple :",id:"exemple-",level:3}],u={toc:o};function p(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"r\xe9compensez-les-recharges-de-sommes-importantes-en-ligne"},"R\xe9compensez les recharges de sommes importantes en ligne."),(0,s.kt)("p",null,"Nous avons impl\xe9ment\xe9 un syst\xe8me de cashback en token cadeau suite \xe0 la demande de nos clients."),(0,s.kt)("p",null,"L'id\xe9e est d'encourager les personnes \xe0 effectuer eux m\xeame leurs rechargements en ligne pour soulager les points\nd'acceuil et de rechargement cashless d'un site."),(0,s.kt)("p",null,'Dans l\'administration de votre page cashless, allez dans "Configuration G\xe9n\xe9rale", puis sur l\'onglet "CASHBACK".\nIndiquez la somme \xe0 partir de laquelle la r\xe9compense s\'active, la valeur de la r\xe9compense, puis activez la case "Activez le cashback pour les paiements en ligne".\nEnfin, validez avec le bouton "Enregistrer".'),(0,s.kt)("p",null,'R\xe9sultat : Sur Stripe et uniquement sur Stripe, si la somme recharg\xe9e d\xe9passe le montant pr\xe9vu, des tokens "Cadeau" sont\ncr\xe9dit\xe9s sur la carte.'),(0,s.kt)("p",null,'\xc0 noter que ces tokens "Cadeau" sont consid\xe9r\xe9 diff\xe9remment par la comptabilit\xe9 et ne rentrent pas dans les\nchiffres du calcul du b\xe9n\xe9fice (m\xeame monnaie que pour les b\xe9n\xe9voles, par exemple. Cf documentation a venir ^^).'),(0,s.kt)("h3",{id:"exemple-"},"Exemple :"),(0,s.kt)("p",null,"Par exemple :"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Cashback start = 50"),(0,s.kt)("li",{parentName:"ul"},"Cashback value = 2.50")),(0,s.kt)("p",null,"Si la personne recharge 55\u20ac, elle gagne 2.50 en cadeau.\nSi elle recharge 101\u20ac, elle gagne 5 en cadeau (x2)."))}p.isMDXComponent=!0}}]);