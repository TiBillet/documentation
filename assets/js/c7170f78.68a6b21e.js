"use strict";(self.webpackChunktibillet=self.webpackChunktibillet||[]).push([[479],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,b=d["".concat(o,".").concat(m)]||d[m]||c[m]||l;return n?a.createElement(b,i(i({ref:t},u),{},{components:n})):a.createElement(b,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9456:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const l={sidebar_position:11,slug:"reservations",title:"R\xe9servations et billets",description:"Cr\xe9ez un \xe9v\xe8nement avec entr\xe9e libre.",keywords:["cashless","billetterie","ticketing","cli","curl","python"],wiktags:["cashless","billetterie","ticketing","curl","python"],authors:"jonas"},i=void 0,s={unversionedId:"api/11 Reservations",id:"api/11 Reservations",title:"R\xe9servations et billets",description:"Cr\xe9ez un \xe9v\xe8nement avec entr\xe9e libre.",source:"@site/docs/api/11 Reservations.md",sourceDirName:"api",slug:"/api/reservations",permalink:"/docs/api/reservations",draft:!1,editUrl:"https://github.com/TiBillet/documentation/tree/main/tibillet/docs/api/11 Reservations.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11,slug:"reservations",title:"R\xe9servations et billets",description:"Cr\xe9ez un \xe9v\xe8nement avec entr\xe9e libre.",keywords:["cashless","billetterie","ticketing","cli","curl","python"],wiktags:["cashless","billetterie","ticketing","curl","python"],authors:"jonas"},sidebar:"api",previous:{title:"\xc9v\xe8nements",permalink:"/docs/api/events"}},o={},p=[{value:"Reservations",id:"reservations",level:2},{value:"Billet",id:"billet",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"reservations"},"Reservations"),(0,r.kt)("p",null,"Une reservation peut avoir plusieurs billets."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# List all :\nGET /api/reservations/\n# Retrieve one :\nGET /api/reservations/<uuid>\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Reservations state"',title:'"Reservations','state"':!0},"\n# several possible states for one reservation\nCANCELED, CREATED, UNPAID, FREERES, FREERES_USERACTIV, PAID, PAID_ERROR, PAID_NOMAIL, VALID, = 'C', 'R', 'U', 'F', 'FA', 'P', 'PE', 'PN', 'V',\nTYPE_CHOICES = [\n    (CANCELED, _('Annul\xe9e')),\n    (CREATED, _('Cr\xe9e')),\n    (UNPAID, _('Non pay\xe9e')),\n    (FREERES, _('Mail non v\xe9rifi\xe9')),\n    (FREERES_USERACTIV, _('Mail user v\xe9rifi\xe9')),\n    (PAID, _('Pay\xe9e')),\n    (PAID_ERROR, _('Pay\xe9e mais mail non valide')),\n    (PAID_NOMAIL, _('Pay\xe9e mais mail non envoy\xe9')),\n    (VALID, _('Valid\xe9e')),\n]\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Python Variable"),(0,r.kt)("th",{parentName:"tr",align:null},"String"),(0,r.kt)("th",{parentName:"tr",align:null},"Traduction"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CANCELED"),(0,r.kt)("td",{parentName:"tr",align:null},"C"),(0,r.kt)("td",{parentName:"tr",align:null},"Annul\xe9e")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CREATED"),(0,r.kt)("td",{parentName:"tr",align:null},"R"),(0,r.kt)("td",{parentName:"tr",align:null},"Cr\xe9e")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"UNPAID"),(0,r.kt)("td",{parentName:"tr",align:null},"U"),(0,r.kt)("td",{parentName:"tr",align:null},"Non pay\xe9e")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"FREERES"),(0,r.kt)("td",{parentName:"tr",align:null},"F"),(0,r.kt)("td",{parentName:"tr",align:null},"Mail non v\xe9rifi\xe9")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"FREERES_USERACTIV"),(0,r.kt)("td",{parentName:"tr",align:null},"FA"),(0,r.kt)("td",{parentName:"tr",align:null},"Mail user v\xe9rifi\xe9")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PAID"),(0,r.kt)("td",{parentName:"tr",align:null},"P"),(0,r.kt)("td",{parentName:"tr",align:null},"Pay\xe9e")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PAID_ERROR"),(0,r.kt)("td",{parentName:"tr",align:null},"PE"),(0,r.kt)("td",{parentName:"tr",align:null},"Pay\xe9e mais mail non valide")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PAID_NOMAIL"),(0,r.kt)("td",{parentName:"tr",align:null},"PN"),(0,r.kt)("td",{parentName:"tr",align:null},"Pay\xe9e mais mail non envoy\xe9")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"VALID"),(0,r.kt)("td",{parentName:"tr",align:null},"V"),(0,r.kt)("td",{parentName:"tr",align:null},"Valid\xe9e")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Reservations"',title:'"Reservations"'},'[\n    {\n        "uuid": "8b375e71-52b2-422a-ab2d-5f1b4b2b12ac",\n        "datetime": "2022-10-18T10:05:31.985512+04:00",\n        "user_mail": "jturbeaux@pm.me",\n        "event": "17dc4020-521b-4a74-a823-df65229eb724",\n        "status": "V",\n        "options": [\n            "0fba6d07-555a-40d3-94aa-9edd97d1487c",\n            "da35d52a-39fe-4674-b879-995fc50ea970"\n        ],\n        "tickets": [\n            "d875a95b-24f8-4f5a-b910-1e59ea52b615"\n        ],\n        "paiements": [\n            "db55449c-5edd-4c89-bb18-0f3da867d6fa"\n        ]\n    },\n    {\n        "uuid": "e8ac055b-ab50-42db-8989-a36bec9e6862",\n        "datetime": "2022-10-18T09:44:42.388278+04:00",\n        "user_mail": "jturbeaux@pm.me",\n        "event": "a4b5f5e2-a6e7-4162-bb06-0fe58647dd64",\n        "status": "V",\n        "options": [],\n        "tickets": [\n            "41d7fd2e-bc3b-440d-a75b-172be06c6d90"\n        ],\n        "paiements": []\n    }\n]\n')),(0,r.kt)("h2",{id:"billet"},"Billet"),(0,r.kt)("p",null,"Un billet par personne."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# List all ticket for the current event : datetime.now().date() :\nGET /api/ticket/\n# Retrieve one :\nGET /api/ticket/<uuid>\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="ticket state"',title:'"ticket','state"':!0},"# several possible states for one ticket\nCREATED, NOT_ACTIV, NOT_SCANNED, SCANNED = 'C', 'N', 'K', 'S'\nSCAN_CHOICES = [\n    (CREATED, _('Cr\xe9e')),\n    (NOT_ACTIV, _('Non actif')),\n    (NOT_SCANNED, _('Non scann\xe9')),\n    (SCANNED, _('scann\xe9')),\n]\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Billet"',title:'"Billet"'},'[\n  {\n    "uuid": "d875a95b-24f8-4f5a-b910-1e59ea52b615",\n    "first_name": "Terry",\n    "last_name": "Pratchett",\n    "status": "K",\n    "seat": "L",\n    "options": [\n      "Fosse",\n      "Je viens avec mon gobelin"\n    ]\n  }\n]\n')))}c.isMDXComponent=!0}}]);