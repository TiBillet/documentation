"use strict";(self.webpackChunktibillet=self.webpackChunktibillet||[]).push([[5586],{3905:(e,t,s)=>{s.d(t,{Zo:()=>c,kt:()=>m});var r=s(7294);function n(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function i(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,r)}return s}function a(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?i(Object(s),!0).forEach((function(t){n(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):i(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function l(e,t){if(null==e)return{};var s,r,n=function(e,t){if(null==e)return{};var s,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)s=i[r],t.indexOf(s)>=0||(n[s]=e[s]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)s=i[r],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(n[s]=e[s])}return n}var o=r.createContext({}),u=function(e){var t=r.useContext(o),s=t;return e&&(s="function"==typeof e?e(t):a(a({},t),e)),s},c=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var s=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(s),m=n,f=p["".concat(o,".").concat(m)]||p[m]||d[m]||i;return s?r.createElement(f,a(a({ref:t},c),{},{components:s})):r.createElement(f,a({ref:t},c))}));function m(e,t){var s=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=s.length,a=new Array(i);a[0]=p;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var u=2;u<i;u++)a[u]=s[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,s)}p.displayName="MDXCreateElement"},3072:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=s(7462),n=(s(7294),s(3905));const i={sidebar_position:3,slug:"cashless",title:"Cashless",description:"Pour cr\xe9er un syst\xe8me de monnaie \"temps\" pour la gestion du b\xe9n\xe9volat, et de monnaie locale \xe0 l'\xe9chelle d'un territoire.",image:"https://tibillet.org/img/logoTibMJ4300.png",keywords:["cashless","billetterie","ticketing"],wiktags:["cashless","billetterie","ticketing"],authors:"jonas"},a="Cashless",l={unversionedId:"exDoc/Cashless",id:"exDoc/Cashless",title:"Cashless",description:"Pour cr\xe9er un syst\xe8me de monnaie \"temps\" pour la gestion du b\xe9n\xe9volat, et de monnaie locale \xe0 l'\xe9chelle d'un territoire.",source:"@site/docs/exDoc/03-Cashless.md",sourceDirName:"exDoc",slug:"/exDoc/cashless",permalink:"/docs/exDoc/cashless",draft:!1,editUrl:"https://github.com/TiBillet/documentation/tree/main/tibillet/docs/exDoc/03-Cashless.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,slug:"cashless",title:"Cashless",description:"Pour cr\xe9er un syst\xe8me de monnaie \"temps\" pour la gestion du b\xe9n\xe9volat, et de monnaie locale \xe0 l'\xe9chelle d'un territoire.",image:"https://tibillet.org/img/logoTibMJ4300.png",keywords:["cashless","billetterie","ticketing"],wiktags:["cashless","billetterie","ticketing"],authors:"jonas"},sidebar:"tutorialSidebar",previous:{title:"R\xe9servations et billets",permalink:"/docs/api/reservations"},next:{title:"Agenda et billeterie",permalink:"/docs/exDoc/billetterie"}},o={},u=[{value:"Vous avez dit Cashless f\xe9d\xe9r\xe9 ?",id:"vous-avez-dit-cashless-f\xe9d\xe9r\xe9-",level:2}],c={toc:u};function d(e){let{components:t,...s}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"cashless"},"Cashless"),(0,n.kt)("h2",{id:"vous-avez-dit-cashless-f\xe9d\xe9r\xe9-"},"Vous avez dit Cashless f\xe9d\xe9r\xe9 ?"),(0,n.kt)("p",null,"Le cashless est un syst\xe8me de paiement sans esp\xe8ces qui permet de r\xe9gler ses achats de mani\xe8re \xe9lectronique.\nIl se pr\xe9sente sous la forme d'une carte ou d'un bracelet \xe9quip\xe9 d'une puce NFC (Near Field Communication)\nqui permet de communiquer avec autant de terminaux que de points de vente souhait\xe9s."),(0,n.kt)("p",null,"Le cashless est souvent utilis\xe9 dans les festivals et \xe9v\xe8nements pour simplifier les transactions et \xe9viter\nles files d'attente aux caisses.\nLes participants peuvent recharger leur carte ou bracelet en ligne ou sur place pendant l'\xe9v\xe8nement,\ndans des bornes de recharge ou en totale autonomie via le qr code imprimm\xe9 sur leur carte,\net utiliser leur cr\xe9dit pour acheter de la nourriture, des boissons ou des souvenirs sur place."),(0,n.kt)("p",null,"Le cashless de TiBillet est un syst\xe8me f\xe9d\xe9r\xe9, c'est-\xe0-dire qu'il est utilis\xe9 par plusieurs organisateurs d'\xe9v\xe8nements\net lieux culturels. Les utilisateurs peuvent donc utiliser leur portefeuille cashless dans diff\xe9rents endroits\net b\xe9n\xe9ficient d'une carte valable \xe0 vie sans frais d'activation ni de rechargement.\nCela permet de cr\xe9er un r\xe9seau de coop\xe9rants r\xe9unis autour d'une monnaie locale destin\xe9e \xe0 100% \xe0 la culture,\net encourage la circulation des artistes et des publics."),(0,n.kt)("p",null,"Le cashless est \xe9galement tr\xe8s pratique pour les organisateurs, qui peuvent suivre en temps r\xe9el les transactions et\nles ventes sur leur \xe9v\xe8nement. Cela leur permet d'optimiser leur gestion de salle et de pr\xe9paration de commande,\nainsi que de fluidifier les ventes qui augmentent de 30% en moyenne."),(0,n.kt)("p",null,"Au dela d'un syst\xe8me bien connu des festivaliers, TiBillet propose une solution de gestion de salle de restauration\nen plus de son syst\xe8me de cashless. "),(0,n.kt)("p",null,"Cela permet aux restaurateurs de g\xe9rer les commandes, les pr\xe9parations et les paiements de mani\xe8re efficace et en temps r\xe9el.\nLes utilisateurs peuvent par exemple passer commande depuis leur table gr\xe2ce \xe0 leur carte NFC, qui est enregistr\xe9e dans le syst\xe8me et associ\xe9e \xe0 leur portefeuille cashless. "),(0,n.kt)("p",null,"Les restaurateurs peuvent \xe9galement utiliser des terminaux de commande pour saisir les commandes et imprimer les tickets de pr\xe9paration en cuisine. "),(0,n.kt)("p",null,"Cette solution permet de simplifier la gestion de la salle de restauration et de r\xe9duire les erreurs de commande.\nElle est \xe9galement adapt\xe9e aux \xe9v\xe8nements en ext\xe9rieur, gr\xe2ce \xe0 la possibilit\xe9 de travailler sans connexion Internet. "),(0,n.kt)("p",null,"Enfin, le syst\xe8me de cashless de TiBillet est compatible avec la plupart des imprimantes thermiques et des terminaux de paiement,\nce qui permet aux restaurateurs de s'int\xe9grer facilement \xe0 leur infrastructure existante."))}d.isMDXComponent=!0}}]);