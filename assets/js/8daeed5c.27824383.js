"use strict";(self.webpackChunktibillet=self.webpackChunktibillet||[]).push([[517],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>m});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),d=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},s=function(t){var e=d(t.components);return a.createElement(o.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,s=p(t,["components","mdxType","originalType","parentName"]),c=d(n),m=r,k=c["".concat(o,".").concat(m)]||c[m]||u[m]||l;return n?a.createElement(k,i(i({ref:e},s),{},{components:n})):a.createElement(k,i({ref:e},s))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=c;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},409:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const l={sidebar_position:5,slug:"products",title:"Produits",description:"Cr\xe9ez et listez les produits",keywords:["cashless","billetterie","ticketing","cli","curl","python"],wiktags:["cashless","billetterie","ticketing","curl","python"],authors:"jonas"},i=void 0,p={unversionedId:"api/05 Products",id:"api/05 Products",title:"Produits",description:"Cr\xe9ez et listez les produits",source:"@site/docs/api/05 Products.md",sourceDirName:"api",slug:"/api/products",permalink:"/docs/api/products",draft:!1,editUrl:"https://github.com/TiBillet/documentation/tree/main/tibillet/docs/api/05 Products.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,slug:"products",title:"Produits",description:"Cr\xe9ez et listez les produits",keywords:["cashless","billetterie","ticketing","cli","curl","python"],wiktags:["cashless","billetterie","ticketing","curl","python"],authors:"jonas"},sidebar:"api",previous:{title:"Tenants",permalink:"/docs/api/tenants"},next:{title:"\xc9v\xe8nements.",permalink:"/docs/api/events"}},o={},d=[{value:"Lister les produits",id:"lister-les-produits",level:2},{value:"Lister les tarifs",id:"lister-les-tarifs",level:2},{value:"Cr\xe9ation de produit",id:"cr\xe9ation-de-produit",level:2},{value:"Type de produits possible",id:"type-de-produits-possible",level:3},{value:"Cr\xe9ation de tarif",id:"cr\xe9ation-de-tarif",level:2},{value:"subscription_type",id:"subscription_type",level:3},{value:"adhesion_obligatoire",id:"adhesion_obligatoire",level:3}],s={toc:d};function u(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"lister-les-produits"},"Lister les produits"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"GET /api/products/\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "uuid": "ac87a79f-792a-4c68-9ad3-2e04b417078e",\n    "name": "Adh\xe9sion Asso",\n    "short_description": null,\n    "long_description": null,\n    "terms_and_conditions_document": null,\n    "publish": true,\n    "img": "http://billetistan.django-local.org/media/images/300_CQusv1A.jpg",\n    "categorie_article": "A",\n    "send_to_cashless": true,\n    "prices": [\n      {\n        "uuid": "989f53f7-7241-4b56-8c85-410edda76d2f",\n        "short_description": null,\n        "long_description": null,\n        "name": "Tarif solidaires",\n        "prix": 10.0,\n        "vat": "NA",\n        "stock": null,\n        "max_per_user": 10,\n        "subscription_type": "Y",\n        "product": "ac87a79f-792a-4c68-9ad3-2e04b417078e",\n        "adhesion_obligatoire": null\n      },\n      {\n        "uuid": "9a719f4e-2d14-4e5c-8963-14d9d726bd79",\n        "short_description": null,\n        "long_description": null,\n        "name": "Plein Tarif",\n        "prix": 20.0,\n        "vat": "NA",\n        "stock": null,\n        "max_per_user": 10,\n        "subscription_type": "Y",\n        "product": "ac87a79f-792a-4c68-9ad3-2e04b417078e",\n        "adhesion_obligatoire": null\n      }\n    ]\n  }\n]\n')),(0,r.kt)("h2",{id:"lister-les-tarifs"},"Lister les tarifs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"POST /api/prices/\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "uuid": "e4980a38-e8ec-4bca-ad8c-59f9a64646c2",\n    "product": "bd8bcd60-0a5f-4fdb-bdb1-1fa12392d56a",\n    "name": "Par mois",\n    "short_description": "Payez au mois",\n    "long_description": null,\n    "prix": 30.0,\n    "vat": "NA",\n    "stock": null,\n    "max_per_user": 10,\n    "adhesion_obligatoire": null,\n    "subscription_type": "M"\n  },\n  {\n    "uuid": "6c2456d7-585c-4e33-9a4d-27ff38932481",\n    "product": "bd8bcd60-0a5f-4fdb-bdb1-1fa12392d56a",\n    "name": "A l\'ann\xe9e Y",\n    "short_description": "Payez \xe0 l\'ann\xe9e",\n    "long_description": null,\n    "prix": 360.0,\n    "vat": "NA",\n    "stock": null,\n    "max_per_user": 10,\n    "adhesion_obligatoire": null,\n    "subscription_type": "Y"\n  }\n]\n')),(0,r.kt)("h2",{id:"cr\xe9ation-de-produit"},"Cr\xe9ation de produit"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"POST /api/products/\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Item"),(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"Requis"),(0,r.kt)("th",{parentName:"tr",align:null},"Exemple"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"text"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"Billet")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"categorie_article"),(0,r.kt)("td",{parentName:"tr",align:null},"text"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"B")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"send_to_cashless"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"img"),(0,r.kt)("td",{parentName:"tr",align:null},"binary"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"/home/jojo/img.jpg")))),(0,r.kt)("p",null,"send_to_cashless : Pour indiquer une adh\xe9sion associative enregistr\xe9e sur carte cashless TiBillet. Un seul produit\npossible par instance."),(0,r.kt)("h3",{id:"type-de-produits-possible"},"Type de produits possible"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"String"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Billet"),(0,r.kt)("td",{parentName:"tr",align:null},"B")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Pack d'objets"),(0,r.kt)("td",{parentName:"tr",align:null},"P")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Recharge cashless"),(0,r.kt)("td",{parentName:"tr",align:null},"R")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Vetement"),(0,r.kt)("td",{parentName:"tr",align:null},"T")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Merchandasing"),(0,r.kt)("td",{parentName:"tr",align:null},"M")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Abonnement / Adh\xe9sion"),(0,r.kt)("td",{parentName:"tr",align:null},"A")))),(0,r.kt)("h2",{id:"cr\xe9ation-de-tarif"},"Cr\xe9ation de tarif"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"POST /api/prices/\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Item"),(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"Requis"),(0,r.kt)("th",{parentName:"tr",align:null},"Exemple"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"product"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"uuid4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"text"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"Demi tarif")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"prix"),(0,r.kt)("td",{parentName:"tr",align:null},"decimal"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"vat"),(0,r.kt)("td",{parentName:"tr",align:null},"decimal"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"NA")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"max_per_ser"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"10")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"stock"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"300")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"subscription_type"),(0,r.kt)("td",{parentName:"tr",align:null},"text"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"Null / Y / M")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"adhesion_obligatoire"),(0,r.kt)("td",{parentName:"tr",align:null},"text"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"uuid4 product")))),(0,r.kt)("h3",{id:"subscription_type"},"subscription_type"),(0,r.kt)("p",null,"Y for years\nM for Month"),(0,r.kt)("h3",{id:"adhesion_obligatoire"},"adhesion_obligatoire"),(0,r.kt)("p",null,"Exemple : Tarif abonn\xe9 disponible uniquement si utilisateur connect\xe9 et ayant souscrit \xe0 l'abonnement correspondant."))}u.isMDXComponent=!0}}]);