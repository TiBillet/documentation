"use strict";(self.webpackChunktibillet=self.webpackChunktibillet||[]).push([[7903],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=i,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||l;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,a=new Array(l);a[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var u=2;u<l;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9028:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var r=n(7462),i=(n(7294),n(3905));const l={slug:"federation-part1",title:"F\xe9d\xe9ration 1/3 - Introduction",authors:"jonas",wiktags:["cashless","f\xe9d\xe9ration","portefeuille","waller"],image:"/img/cr_220310_portefeuille_partage/FEDERONS-01.png",description:"F\xe9d\xe9rons TiBillet, premi\xe8re partie."},a="F\xe9d\xe9rons TiBillet. Premi\xe8re partie.",o={permalink:"/blog/federation-part1",editUrl:"https://github.com/TiBillet/documentation/tree/main/tibillet/blog/2022-10-09-Federation-Part1.md",source:"@site/blog/2022-10-09-Federation-Part1.md",title:"F\xe9d\xe9ration 1/3 - Introduction",description:"F\xe9d\xe9rons TiBillet, premi\xe8re partie.",date:"2022-10-09T00:00:00.000Z",formattedDate:"9 octobre 2022",tags:[],readingTime:2.435,hasTruncateMarker:!1,authors:[{name:"Jonas TURBEAUX",title:"Niveau 42.",url:"https://github.com/Nasjoe",imageURL:"https://avatars.githubusercontent.com/u/2736977?s=96&v=4",key:"jonas"}],frontMatter:{slug:"federation-part1",title:"F\xe9d\xe9ration 1/3 - Introduction",authors:"jonas",wiktags:["cashless","f\xe9d\xe9ration","portefeuille","waller"],image:"/img/cr_220310_portefeuille_partage/FEDERONS-01.png",description:"F\xe9d\xe9rons TiBillet, premi\xe8re partie."},prevItem:{title:"F\xe9d\xe9ration 2/3 - L'agenda partag\xe9",permalink:"/blog/federation-part2"},nextItem:{title:"RTL - Compte rendu 03-10-2022",permalink:"/blog/rtl-cr"}},s={authorsImageUrls:[void 0]},u=[{value:"Introduction",id:"introduction",level:2},{value:"TiBillet ?",id:"tibillet-",level:2},{value:"R\xe9union des Tiers-Lieux",id:"r\xe9union-des-tiers-lieux",level:2}],p={toc:u};function c(e){let{components:t,...l}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Cet article est un tout petit peu technique, mais tout \xe0 fait accessible \xe0 quiconque souhaite\nplus d'information sur le chantier en cours."),(0,i.kt)("p",null,"Avec le collectif ",(0,i.kt)("strong",{parentName:"p"},"La R\xe9union des Tiers Lieux")," (RTL) se lance un grand chantier autour des outils\ncommuns. Nous d\xe9taillons ici une partie, celle de la construction et la decentralisation d'un",(0,i.kt)("br",{parentName:"p"}),"\n","agenda et d'un portefeuille cashless partag\xe9 \xe0 tout un territoire."),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"Aujourd'hui, lorsque l'on veut organiser\ndes \xe9v\xe8nements, beaucoup de solutions existent."),(0,i.kt)("p",null,"Et rare sont les routes pour\ncommuniquer entre ces solutions : il faut\nsouvent apprendre \xe0 jongler."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"/img/federons/01-jongler.png",src:n(4019).Z,width:"819",height:"438"})),(0,i.kt)("p",null,"De plus, chaque acteur de la fili\xe8re\ns'affaire souvent dans son coin, multipliant ainsi\nles donn\xe9es souvent redondantes."),(0,i.kt)("p",null,"Parfois m\xeame, nous alimentons des plateformes\nsilo qui enferment et captent nos donn\xe9es sans\navoir la main sur la visibilit\xe9 de nos actions :\nnous sommes souvent devenus d\xe9pendant des algorithmes\ndes GAFAM qui d\xe9cident de notre visibilit\xe9."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"/img/federons/02-silo.png",src:n(1606).Z,width:"1049",height:"780"})),(0,i.kt)("h2",{id:"tibillet-"},"TiBillet ?"),(0,i.kt)("p",null,"Avec TiBillet, nous participons aussi malgr\xe9 nous \xe0 cette isolation.\nDepuis 2010, nous construisons des outils num\xe9riques pour l'\xe9v\xe8nementiel culturel :\nChaque lieu peut posseder une carte d'adh\xe9sion et de paiement sans contact (Cashless) et son instance de billetterie\navec son agenda."),(0,i.kt)("p",null,"Le public peut r\xe9server sa place de concert et recharger sa carte en ligne.\nChaque lieu \xe0 son instance, ses membres et utilisateurs bien \xe0 lui."),(0,i.kt)("p",null,"Et sur un petit territoire comme la R\xe9union, c'est souvent les m\xeames\nutilisateurs ..."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"/img/federons/03-multiples.png",src:n(8516).Z,width:"783",height:"673"})),(0,i.kt)("h2",{id:"r\xe9union-des-tiers-lieux"},"R\xe9union des Tiers-Lieux"),(0,i.kt)("p",null,"Avec la R\xe9union des Tiers-lieux, nous avons lanc\xe9\nle chantier Outil Commun pour f\xe9d\xe9rer les pratiques,\n\xe9viter de multiplier les donn\xe9es et mutualiser le mat\xe9riel."),(0,i.kt)("p",null,"Du c\xf4t\xe9 de la team TiBillet, nous nous sommes affair\xe9s \xe0 construire\nles briques d'un logiciel libre utilisable par tout un territoire."),(0,i.kt)("p",null,"Depuis plusieurs mois, nous changeons le moteur de notre application pour pouvoir construire un outil commun\net f\xe9d\xe9r\xe9 de billetterie, d'agenda culturel et de cashless."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"/img/federons/04-start_fede.png",src:n(6619).Z,width:"1005",height:"608"})),(0,i.kt)("p",null,"Pour r\xe9ussir \xe0 construire TiBillet en outil f\xe9d\xe9r\xe9,\ntechniquement, il a fallu changer pas mal de choses.\nEt pas uniquement notre vision globale :)"),(0,i.kt)("p",null,"Au tout d\xe9but, la \"Stack' TiBillet (ensemble de boites techniques)\n\xe9tait tr\xe8s centralis\xe9 :"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"/img/federons/05-stackblock.png",src:n(534).Z,width:"862",height:"1045"})),(0,i.kt)("p",null,"En 2018 vient un premier int\xe9r\xeat\npublic avec l'aide du PRMA\n(Pole R\xe9gional des musique actuelles)\nde la R\xe9union."),(0,i.kt)("p",null,"On commence \xe0 penser fort \xe0\nlib\xe9rer le code et cr\xe9er une\ncoop\xe9rative pour supporter\nle d\xe9veloppement."),(0,i.kt)("p",null,"Puis vient la rencontre avec les\ntiers-lieux de La Raffinerie, de Vavang'Art,\net avec le r\xe9seau social libre Communecter."),(0,i.kt)("p",null,"Le projet de portefeuille f\xe9d\xe9r\xe9\nde RTL ne fait que confirmer\nnos envies communes et nous donne les moyens\nde d\xe9velopper un nouveau mod\xe8le."),(0,i.kt)("p",null,"Aujourd'hui (Octobre 2022), le chantier \xe0 beaucoup avanc\xe9.\nIl reste beaucoup \xe0 faire et ",(0,i.kt)("a",{parentName:"p",href:"https://nuage.tierslieux.re/s/sMPScgSPNgwRrWD"},"la feuille de route"),"\ncommence \xe0 bien se dessiner."),(0,i.kt)("p",null,"Pour r\xe9sumer, nous souhaitons s\xe9parer le d\xe9veloppement\net l'exp\xe9rimentation en trois grandes \xe9tapes."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/blog/federation-part2"},"L'agenda partag\xe9")),(0,i.kt)("li",{parentName:"ul"},"Le portefeuille f\xe9d\xe9r\xe9"),(0,i.kt)("li",{parentName:"ul"},"Les monnaies locales")),(0,i.kt)("p",null,"\xc0 suivre dans la ",(0,i.kt)("a",{parentName:"p",href:"/blog/federation-part2"},"deuxi\xe8me partie")," ..."))}c.isMDXComponent=!0},4019:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/01-jongler-cf0e5024d9ebbc7a15e8e783eec8df56.png"},1606:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/02-silo-14978438f18a13d21deabcf40135b9d0.png"},8516:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/03-multiples-e3f6af5180f6f1154b2b54aa03c013fc.png"},6619:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/04-start_fede-f6f6016596b3da3d772f0170f9cd115a.png"},534:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/05-stackblock-94fffbe18d1e6194eb5c0e433e4f4be2.png"}}]);