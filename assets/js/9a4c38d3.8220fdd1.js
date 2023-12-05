"use strict";(self.webpackChunktibillet=self.webpackChunktibillet||[]).push([[9591],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var i=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,s=function(e,t){if(null==e)return{};var n,i,s={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var o=i.createContext({}),c=function(e){var t=i.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=s,g=p["".concat(o,".").concat(m)]||p[m]||d[m]||a;return n?i.createElement(g,r(r({ref:t},u),{},{components:n})):i.createElement(g,r({ref:t},u))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,r=new Array(a);r[0]=p;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:s,r[1]=l;for(var c=2;c<a;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4988:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var i=n(7462),s=(n(7294),n(3905));const a={sidebar_position:5,slug:"demonstration",title:"D\xe9monstration",description:"Instances de d\xe9monstration de la billetterie ( TiBillet/Event ) et de la caisse enregistreuse ( TiBillet/LaBoutik ) qui accepte les paiements en monnaie locale et/ou en cashless, et qui permet de g\xe9rer les commandes de buvette et de restauration.",image:"/img/demo/maq2-420.jpg",keywords:["cashless","billetterie","ticketing","monnaie locale","caisse enregistreuse","d\xe9monstration","festival","tiers-lieux"],tags:["cashless","billetterie","ticketing","monnaie locale","caisse enregistreuse","d\xe9monstration","festival","tiers-lieux"],authors:"jonas"},r=void 0,l={unversionedId:"presentation/Demonstration",id:"presentation/Demonstration",title:"D\xe9monstration",description:"Instances de d\xe9monstration de la billetterie ( TiBillet/Event ) et de la caisse enregistreuse ( TiBillet/LaBoutik ) qui accepte les paiements en monnaie locale et/ou en cashless, et qui permet de g\xe9rer les commandes de buvette et de restauration.",source:"@site/docs/presentation/07-Demonstration.md",sourceDirName:"presentation",slug:"/presentation/demonstration",permalink:"/docs/presentation/demonstration",draft:!1,editUrl:"https://github.com/TiBillet/documentation/tree/main/tibillet/docs/presentation/07-Demonstration.md",tags:[{label:"cashless",permalink:"/docs/tags/cashless"},{label:"billetterie",permalink:"/docs/tags/billetterie"},{label:"ticketing",permalink:"/docs/tags/ticketing"},{label:"monnaie locale",permalink:"/docs/tags/monnaie-locale"},{label:"caisse enregistreuse",permalink:"/docs/tags/caisse-enregistreuse"},{label:"d\xe9monstration",permalink:"/docs/tags/demonstration"},{label:"festival",permalink:"/docs/tags/festival"},{label:"tiers-lieux",permalink:"/docs/tags/tiers-lieux"}],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,slug:"demonstration",title:"D\xe9monstration",description:"Instances de d\xe9monstration de la billetterie ( TiBillet/Event ) et de la caisse enregistreuse ( TiBillet/LaBoutik ) qui accepte les paiements en monnaie locale et/ou en cashless, et qui permet de g\xe9rer les commandes de buvette et de restauration.",image:"/img/demo/maq2-420.jpg",keywords:["cashless","billetterie","ticketing","monnaie locale","caisse enregistreuse","d\xe9monstration","festival","tiers-lieux"],tags:["cashless","billetterie","ticketing","monnaie locale","caisse enregistreuse","d\xe9monstration","festival","tiers-lieux"],authors:"jonas"},sidebar:"presentation",previous:{title:"Usages",permalink:"/docs/presentation/usages"},next:{title:"Philosophie",permalink:"/docs/presentation/philosophie"}},o={},c=[{value:"Billetterie ( nighty build ) :",id:"billetterie--nighty-build--",level:3},{value:"Tenant (une instance solo, un lieu, un organisateur, un artiste) :",id:"tenant-une-instance-solo-un-lieu-un-organisateur-un-artiste-",level:4},{value:"Agenda (Recense tous les \xe9v\xe8nements du r\xe9seau):",id:"agenda-recense-tous-les-\xe9v\xe8nements-du-r\xe9seau",level:4},{value:"Caisse enregistreuse / Cashless / Monnaie locale ( nighty build ) :",id:"caisse-enregistreuse--cashless--monnaie-locale--nighty-build--",level:3},{value:"administration :",id:"administration-",level:4},{value:"Interface de caisse :",id:"interface-de-caisse-",level:4}],u={toc:c};function d(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,i.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("admonition",{type:"caution"},(0,s.kt)("p",{parentName:"admonition"},"Le d\xe9veloppement de TiBillet est tr\xe9s actif. Ces instances de d\xe9monstrations sont des \"nighty build\", c'est \xe0 dire des\nversions de d\xe9veloppement. Il se peut aussi que les instances soient en maintenance. Si vous avez des questions,\nn'h\xe9sitez pas \xe0 nous contacter par ",(0,s.kt)("a",{parentName:"p",href:"mailto:contact@tibillet.re"},"mail"),",\nsur ",(0,s.kt)("a",{parentName:"p",href:"https://chat.communecter.org/channel/Tibillet/"},"Rocket Chat")," ou sur ",(0,s.kt)("a",{parentName:"p",href:"https://discord.gg/ecb5jtP7vY"},"Discord")," si\nvous avez la moindre question.")),(0,s.kt)("h1",{id:"d\xe9monstration"},"D\xe9monstration"),(0,s.kt)("h3",{id:"billetterie--nighty-build--"},"Billetterie ( nighty build ) :"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"BilletDemo1.jpg",src:n(603).Z,width:"1078",height:"702"})),(0,s.kt)("h4",{id:"tenant-une-instance-solo-un-lieu-un-organisateur-un-artiste-"},"Tenant (une instance solo, un lieu, un organisateur, un artiste) :"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("a",{parentName:"strong",href:"https://demo.betabillet.tech"},"https://demo.betabillet.tech"))),(0,s.kt)("h4",{id:"agenda-recense-tous-les-\xe9v\xe8nements-du-r\xe9seau"},"Agenda (Recense tous les \xe9v\xe8nements du r\xe9seau):"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("a",{parentName:"strong",href:"https://agenda.betabillet.tech"},"https://agenda.betabillet.tech"))),(0,s.kt)("p",null,"Pour tester le paiement sur Stripe, utilisez la carte du plus grand routard galactique :"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Douglas ADAM        \n4242 4242 4242 4242 \n02/42 / 424\n")),(0,s.kt)("h3",{id:"caisse-enregistreuse--cashless--monnaie-locale--nighty-build--"},"Caisse enregistreuse / Cashless / Monnaie locale ( nighty build ) :"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"maq2-420.jpg",src:n(2013).Z,width:"480",height:"320"})),(0,s.kt)("h4",{id:"administration-"},"administration :"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("a",{parentName:"strong",href:"https://cashless.betabillet.tech"},"https://cashless.betabillet.tech"))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"login : TestAdmin\npassword : mi5Iechi\n")),(0,s.kt)("h4",{id:"interface-de-caisse-"},"Interface de caisse :"),(0,s.kt)("p",null,'Cliquez sur " voir le site " tout en haut du menu, ou visitez\n',(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("a",{parentName:"strong",href:"https://cashless.betabillet.tech/wv/"},"https://cashless.betabillet.tech/wv/"))," apr\xe8s vous \xeatre loggu\xe9."))}d.isMDXComponent=!0},603:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/BilletDemo1-3c8987755ca1af68b45182f20aff0b5b.jpg"},2013:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/maq2-420-ec49d41bd9f8e858d691fe0e86b4f3dc.jpg"}}]);