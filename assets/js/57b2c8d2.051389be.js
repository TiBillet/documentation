"use strict";(self.webpackChunktibillet=self.webpackChunktibillet||[]).push([[5267],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>c});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(n),c=r,b=m["".concat(s,".").concat(c)]||m[c]||d[c]||l;return n?a.createElement(b,i(i({ref:t},p),{},{components:n})):a.createElement(b,i({ref:t},p))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),r=n(6010);const l="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(7462),r=n(7294),l=n(6010),i=n(2389),o=n(7392),s=n(7094),u=n(2466);const p="tabList__CuJ",d="tabItem_LNqP";function m(e){var t,n;const{lazy:i,block:m,defaultValue:c,values:b,groupId:g,className:v}=e,k=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=b?b:k.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),f=(0,o.l)(h,((e,t)=>e.value===t.value));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const N=null===c?c:null!=(t=null!=c?c:null==(n=k.find((e=>e.props.default)))?void 0:n.props.value)?t:k[0].props.value;if(null!==N&&!h.some((e=>e.value===N)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+h.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:y,setTabGroupChoices:_}=(0,s.U)(),[T,w]=(0,r.useState)(N),O=[],{blockElementScrollPositionUntilNextRender:E}=(0,u.o5)();if(null!=g){const e=y[g];null!=e&&e!==T&&h.some((t=>t.value===e))&&w(e)}const x=e=>{const t=e.currentTarget,n=O.indexOf(t),a=h[n].value;a!==T&&(E(t),w(a),null!=g&&_(g,String(a)))},P=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=O.indexOf(e.currentTarget)+1;n=null!=(a=O[t])?a:O[0];break}case"ArrowLeft":{var r;const t=O.indexOf(e.currentTarget)-1;n=null!=(r=O[t])?r:O[O.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":m},v)},h.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>O.push(e),onKeyDown:P,onFocus:x,onClick:x},i,{className:(0,l.Z)("tabs__item",d,null==i?void 0:i.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),i?(0,r.cloneElement)(k.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function c(e){const t=(0,i.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}},1218:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>u,toc:()=>d});var a=n(7462),r=(n(7294),n(3905)),l=n(5488),i=n(5162);const o={sidebar_position:10,slug:"events",title:"\xc9v\xe8nements",description:"Cr\xe9ez un \xe9v\xe8nement avec entr\xe9e libre.",keywords:["cashless","billetterie","ticketing","cli","curl","python"],wiktags:["cashless","billetterie","ticketing","curl","python"],authors:"jonas"},s=void 0,u={unversionedId:"api/10 Event",id:"api/10 Event",title:"\xc9v\xe8nements",description:"Cr\xe9ez un \xe9v\xe8nement avec entr\xe9e libre.",source:"@site/docs/api/10 Event.md",sourceDirName:"api",slug:"/api/events",permalink:"/docs/api/events",draft:!1,editUrl:"https://github.com/TiBillet/documentation/tree/main/tibillet/docs/api/10 Event.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,slug:"events",title:"\xc9v\xe8nements",description:"Cr\xe9ez un \xe9v\xe8nement avec entr\xe9e libre.",keywords:["cashless","billetterie","ticketing","cli","curl","python"],wiktags:["cashless","billetterie","ticketing","curl","python"],authors:"jonas"},sidebar:"api",previous:{title:"Produits",permalink:"/docs/api/products"},next:{title:"R\xe9servations et billets",permalink:"/docs/api/reservations"}},p={},d=[{value:"\xc9v\xe8nement sans artiste avec entr\xe9e libre",id:"\xe9v\xe8nement-sans-artiste-avec-entr\xe9e-libre",level:2}],m={toc:d};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"La documentation est en cours de r\xe9daction."),(0,r.kt)("p",{parentName:"admonition"},"N'h\xe9sitez pas \xe0 venir discuter avec nous sur ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://discord.gg/7FJvtYx"},"Discord"))," pour avoir plus d'informations !")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"POST /api/events/\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Item"),(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"Requis"),(0,r.kt)("th",{parentName:"tr",align:null},"Exemple"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"datetime"),(0,r.kt)("td",{parentName:"tr",align:null},"datetime"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"2029-12-21T18:30")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"text"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"42\xe8me anniversaire d'Adam")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"short_description"),(0,r.kt)("td",{parentName:"tr",align:null},"text"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"Pas de panique !")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"long_description"),(0,r.kt)("td",{parentName:"tr",align:null},"text"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"Un dernier restaurant avant la fin du monde ?")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"img_url"),(0,r.kt)("td",{parentName:"tr",align:null},"url"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://picsum.photos/1920/1080"},"https://picsum.photos/1920/1080"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"artists"),(0,r.kt)("td",{parentName:"tr",align:null},"list"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},'["uuid4","uuid4"]')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"products"),(0,r.kt)("td",{parentName:"tr",align:null},"list"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},'["uuid4","uuid4"]')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"options_radio"),(0,r.kt)("td",{parentName:"tr",align:null},"list"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},'["uuid4","uuid4"]')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"options_checkbox"),(0,r.kt)("td",{parentName:"tr",align:null},"list"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},'["uuid4","uuid4"]')))),(0,r.kt)("p",null,'Si aucun "products", l\'\xe9v\xe8nement sera consid\xe9r\xe9 comme entr\xe9e libre.'),(0,r.kt)("p",null,"Exemples complets sur\nla ",(0,r.kt)("a",{parentName:"p",href:"https://documenter.getpostman.com/view/17519122/UVeDtTFC#faef2591-ef11-4860-8561-66b76dbf5bf7"},"documentation Postman"),"."),(0,r.kt)("h2",{id:"\xe9v\xe8nement-sans-artiste-avec-entr\xe9e-libre"},"\xc9v\xe8nement sans artiste avec entr\xe9e libre"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Python",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import requests\n\nurl = "https://demo.betabillet.tech/api/events/"\n\ndata = {\n    "datetime": "2029-12-21T18:30",\n    "name": "42\xe8me anniversaire d\'Adam",\n    "short_description": "Pas de panique ! Un dernier restaurant avant la fin du monde ?",\n    "long_description": "J\'adore les dates limites. J\'aime le son qu\'elles font lorsque on les d\xe9passe \xe0 toute allure.",\n    "img_url": "https://picsum.photos/1920/1080"\n}\nheaders = {\n    "Authorization": "Api-Key Map0K71T.rcs82Q66NuCUCuyTmnjVhmwhfl0VnOsW",\n    "Content-Type": "application/json"\n}\n\nresponse = requests.request("POST", url, json=data, headers=headers)\n\nprint(response.text)\n'))),(0,r.kt)(i.Z,{value:"Javascript",label:"json",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Json (Postman body)"',title:'"Json',"(Postman":!0,'body)"':!0},'{\n    "datetime": "{{random_date}}T18:30",\n    "name": "{{$randomWords}}",\n    "short_description": "{{$randomLoremSentence}}",\n    "long_description": "{{$randomLoremParagraph}}",\n    "img_url": "https://picsum.photos/1920/1080"\n}\n')))),(0,r.kt)("p",null,"Exemple de r\xe9ponse :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="HTTP Response (json)"',title:'"HTTP',Response:!0,'(json)"':!0},'{\n    "uuid": "24b96716-c676-43e8-904f-baa93f66968a",\n    "name": "42\xe8me anniversaire d\'Adam",\n    "slug": "42eme-anniversaire-dadam-122129-1830",\n    "short_description": "Pas de panique ! Un dernier restaurant avant la fin du monde ?",\n    "long_description": "J\'adore les dates limites. J\'aime le son qu\'elles font lorsque on les d\xe9passe \xe0 toute allure.",\n    "event_facebook_url": null,\n    "datetime": "2029-12-21T18:30:00+04:00",\n    "products": [\n        {\n            "uuid": "06948793-da03-47c4-9d56-6350b7e87034",\n            "name": "Reservation",\n            "short_description": null,\n            "long_description": null,\n            "terms_and_conditions_document": null,\n            "publish": false,\n            "img": null,\n            "categorie_article": "F",\n            "send_to_cashless": false,\n            "prices": [\n                {\n                    "uuid": "b4086a22-fee6-4a85-81bb-3b85a8e19d74",\n                    "short_description": null,\n                    "long_description": null,\n                    "name": "gratuite",\n                    "prix": 0.0,\n                    "vat": "NA",\n                    "stock": null,\n                    "max_per_user": 10,\n                    "subscription_type": "N",\n                    "product": "06948793-da03-47c4-9d56-6350b7e87034",\n                    "adhesion_obligatoire": null\n                }\n            ]\n        }\n    ],\n    "options_radio": [],\n    "options_checkbox": [],\n    "img_variations": {\n        "fhd": "/media/images/c371b9a0d21391a6998150ec49e6c833.fhd.png",\n        "hdr": "/media/images/c371b9a0d21391a6998150ec49e6c833.hdr.png",\n        "med": "/media/images/c371b9a0d21391a6998150ec49e6c833.med.png",\n        "thumbnail": "/media/images/c371b9a0d21391a6998150ec49e6c833.thumbnail.png"\n    },\n    "reservations": 0,\n    "complet": false,\n    "artists": [],\n    "url": "https://demo.betabillet.tech/event/42eme-anniversaire-dadam-122129-1830/",\n    "place": "DemoSt\xe8ne"\n}\n')))}c.isMDXComponent=!0}}]);