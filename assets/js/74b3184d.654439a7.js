"use strict";(self.webpackChunktibillet=self.webpackChunktibillet||[]).push([[2715],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var o=n.createContext({}),u=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),m=i,f=p["".concat(o,".").concat(m)]||p[m]||d[m]||a;return r?n.createElement(f,s(s({ref:t},c),{},{components:r})):n.createElement(f,s({ref:t},c))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,s=new Array(a);s[0]=p;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:i,s[1]=l;for(var u=2;u<a;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},2900:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=r(7462),i=(r(7294),r(3905));const a={sidebar_position:20,slug:"admin_add_article",title:"Articles",description:"Ajouter un ou plusieurs articles dans des cat\xe9gories et point de vente et leur assigner un prix.",keywords:["cashless","android"],wiktags:["cashless","android"],authors:"Axel"},s=void 0,l={unversionedId:"Utilisateur/Cashless/20 Articles",id:"Utilisateur/Cashless/20 Articles",title:"Articles",description:"Ajouter un ou plusieurs articles dans des cat\xe9gories et point de vente et leur assigner un prix.",source:"@site/docs/Utilisateur/Cashless/20 Articles.md",sourceDirName:"Utilisateur/Cashless",slug:"/Utilisateur/Cashless/admin_add_article",permalink:"/docs/Utilisateur/Cashless/admin_add_article",draft:!1,editUrl:"https://github.com/TiBillet/documentation/tree/main/tibillet/docs/Utilisateur/Cashless/20 Articles.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20,slug:"admin_add_article",title:"Articles",description:"Ajouter un ou plusieurs articles dans des cat\xe9gories et point de vente et leur assigner un prix.",keywords:["cashless","android"],wiktags:["cashless","android"],authors:"Axel"},sidebar:"tutorialSidebar",previous:{title:"Cat\xe9gories d'articles",permalink:"/docs/Utilisateur/Cashless/admin_add_categorie"},next:{title:"Impression des commandes",permalink:"/docs/Utilisateur/Cashless/impression_preparation"}},o={},u=[{value:"1- Cr\xe9er un nouvel article",id:"1--cr\xe9er-un-nouvel-article",level:2},{value:"2- L&#39;ajouter \xe0 un point de vente",id:"2--lajouter-\xe0-un-point-de-vente",level:2}],c={toc:u};function d(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"C'est ici que vous choisissez quels articles seront pr\xe9sents dans vos interfaces ainsi que leur prix et les points de\nventes auquels ils sont rattach\xe9s."),(0,i.kt)("h2",{id:"1--cr\xe9er-un-nouvel-article"},"1- Cr\xe9er un nouvel article"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Cliquez sur "Articles et tarifs" dans le menu de gauche.'),(0,i.kt)("li",{parentName:"ul"},'Cliquez sur le bouton "Ajouter article" en haut \xe0 droite.'),(0,i.kt)("li",{parentName:"ul"},"Renseignez le prix de vente."),(0,i.kt)("li",{parentName:"ul"},"Le prix d'achat sert \xe0 estimer les b\xe9n\xe9fices d'une soir\xe9e affich\xe9s sur le rapprot comptable quotidient. Ce n'est pas\nune valeur obligatoire."),(0,i.kt)("li",{parentName:"ul"},"Renseignez la cat\xe9gorie de l'article (Cela determine la fa\xe7on dont il est affich\xe9 sur l'interface cashless. Cf\nCat\xe9gorie.)"),(0,i.kt)("li",{parentName:"ul"},"Changez la couleur du texte si vous souhaitez un meilleur contraste d'affincahge."),(0,i.kt)("li",{parentName:"ul"},"Enregistrez")),(0,i.kt)("h2",{id:"2--lajouter-\xe0-un-point-de-vente"},"2- L'ajouter \xe0 un point de vente"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Cliquez sur la cat\xe9gorie "Points de vente" dans la colonne de gauche.'),(0,i.kt)("li",{parentName:"ul"},"Cliquez sur le nom d'un point de vente existant auquel vous voulez ajouter votre article."),(0,i.kt)("li",{parentName:"ul"},'Renseignez les articles qui seront disponibles dans le champ "Articles". Vous pouvez en selectionner plusieurs en maintenant la touche ctrl.'),(0,i.kt)("li",{parentName:"ul"},"Enregistrez")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Pour qu'un point de vente soit visible dans l'interface, il faut qu'il contienne des articles. Il est pr\xe9f\xe9rable de cr\xe9er\nles articles en premier et de les assigner par la suite \xe0 un point de vente.")),(0,i.kt)("video",{width:"100%",controls:!0,src:"/img/addarticles.mp4"}))}d.isMDXComponent=!0}}]);