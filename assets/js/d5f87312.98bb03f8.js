"use strict";(self.webpackChunktibillet=self.webpackChunktibillet||[]).push([[851],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),u=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(r),m=n,v=c["".concat(o,".").concat(m)]||c[m]||d[m]||i;return r?a.createElement(v,s(s({ref:t},p),{},{components:r})):a.createElement(v,s({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,s=new Array(i);s[0]=c;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,s[1]=l;for(var u=2;u<i;u++)s[u]=r[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},7545:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var a=r(7462),n=(r(7294),r(3905));const i={sidebar_position:2,slug:"admin_add",title:"Admin - Cr\xe9ation de Cartes Primaires",description:"Ajouter une ou plusieurs cartes primaires.",keywords:["cashless","android"],wiktags:["cashless","android"],authors:"Axel"},s=void 0,l={unversionedId:"Utilisateur/Cashless/AdminCartePrimaire",id:"Utilisateur/Cashless/AdminCartePrimaire",title:"Admin - Cr\xe9ation de Cartes Primaires",description:"Ajouter une ou plusieurs cartes primaires.",source:"@site/docs/Utilisateur/Cashless/AdminCartePrimaire.md",sourceDirName:"Utilisateur/Cashless",slug:"/Utilisateur/Cashless/admin_add",permalink:"/docs/Utilisateur/Cashless/admin_add",draft:!1,editUrl:"https://github.com/TiBillet/documentation/tree/main/tibillet/docs/Utilisateur/Cashless/AdminCartePrimaire.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,slug:"admin_add",title:"Admin - Cr\xe9ation de Cartes Primaires",description:"Ajouter une ou plusieurs cartes primaires.",keywords:["cashless","android"],wiktags:["cashless","android"],authors:"Axel"},sidebar:"tutorialSidebar",previous:{title:"Application Android",permalink:"/docs/Utilisateur/Cashless/android"},next:{title:"Admin - Suppression des commandes",permalink:"/docs/Utilisateur/Cashless/admin_supp"}},o={},u=[{value:"1- Enregistrez un nouveau membre.",id:"1--enregistrez-un-nouveau-membre",level:2},{value:"2- Cr\xe9ez la carte primaire.",id:"2--cr\xe9ez-la-carte-primaire",level:2},{value:"3- Tester la carte sur un point de vente",id:"3--tester-la-carte-sur-un-point-de-vente",level:2}],p={toc:u};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,'Les cartes primaires sont obligatoires pour ouvrir un point de vente (Android ou Boitiers). Ce sont elles qui\nd\xe9terminent le niveau d\'authorisation dont dispose l\'utilisateur : Vous pouvez authoriser par exemple uniquement l\'acc\xe9s\n\xe0 un\npoint de vente "BAR", sans donner acc\xe8s au point de vente "CASHLESS" qui permet les recharges.'),(0,n.kt)("p",null,"Pr\xe9f\xe9rez toujours ajouter des cartes primaires nominatives. C'est-\xe0-dire reli\xe9 \xe0 un utilisateur. De cette fa\xe7on, vous\npourrez retracer chaque transaction plus pr\xe9cis\xe9ment : La personne responsable du point de vente est visible dans chaque\npaiement."),(0,n.kt)("h2",{id:"1--enregistrez-un-nouveau-membre"},"1- Enregistrez un nouveau membre."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'Cliquez sur la cat\xe9gorie "Membres" dans la colonne de gauche.'),(0,n.kt)("li",{parentName:"ul"},'Cliquez sur le bouton "Ajouter Membre" en haut \xe0 droite.'),(0,n.kt)("li",{parentName:"ul"},"Vous pouvez ajouter ou pas une ahd\xe9sion associative."),(0,n.kt)("li",{parentName:"ul"},"Renseignez le num\xe9ro de la nouvelle carte dans le champ correspondant."),(0,n.kt)("li",{parentName:"ul"},"Enregistrez.")),(0,n.kt)("h2",{id:"2--cr\xe9ez-la-carte-primaire"},"2- Cr\xe9ez la carte primaire."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'Cliquez sur la cat\xe9gorie "Cartes Maitresse" dans le menu de gauche.'),(0,n.kt)("li",{parentName:"ul"},'Cliquez sur le bouton "Ajouter Carte Primaire" en haut \xe0 droite.'),(0,n.kt)("li",{parentName:"ul"},"Renseignez le num\xe9ro de la carte."),(0,n.kt)("li",{parentName:"ul"},"D\xe9signez les points de vente contr\xf4l\xe9s (ou non) par cette carte.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Vous pouvez ici determiner de quel niveau d'authorisation dispose votre utilisateur."))),(0,n.kt)("li",{parentName:"ul"},"Activez le mode g\xe9rant si vous le souhaitez.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Le \"Mode g\xe9rant\" permet d'annuler une commande d\xe9ja effecut\xe9, m\xeame si elle est pay\xe9e. C'est un super-pouvoir qui\nn\xe9c\xe9ssite de grandes responsabilit\xe9s :) ."))),(0,n.kt)("li",{parentName:"ul"},"Enregistrez.")),(0,n.kt)("h2",{id:"3--tester-la-carte-sur-un-point-de-vente"},"3- Tester la carte sur un point de vente"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"D\xe9marrez l'application TiBillet sur un boitier ou un smartphone.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Suivez la ",(0,n.kt)("a",{parentName:"li",href:"/docs/Utilisateur/Cashless/android"},"proc\xe9dure d'appairage")," si ce n'est pas d\xe9ja fait."))),(0,n.kt)("li",{parentName:"ul"},"Scanner la carte \xe0 la demande de l'application."),(0,n.kt)("li",{parentName:"ul"},"V\xe9rifiez que vous avez bien uniquement les points de ventes associ\xe9s \xe0 la carte.")),(0,n.kt)("video",{width:"100%",controls:!0,src:"/img/CartePrimaire.mp4"}))}d.isMDXComponent=!0}}]);