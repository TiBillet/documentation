"use strict";(self.webpackChunkdocumentation_v_2=self.webpackChunkdocumentation_v_2||[]).push([[5267],{7843:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var s=n(141),r=n(5213),i=n(3102),a=n(2584);const l={sidebar_position:10,slug:"events",title:"\xc9v\xe8nements",description:"Cr\xe9ez un \xe9v\xe8nement avec entr\xe9e libre.",keywords:["cashless","billetterie","ticketing","cli","curl","python"],wiktags:["cashless","billetterie","ticketing","curl","python"],authors:"jonas"},o=void 0,d={id:"api/10 Event",title:"\xc9v\xe8nements",description:"Cr\xe9ez un \xe9v\xe8nement avec entr\xe9e libre.",source:"@site/docs/api/10 Event.md",sourceDirName:"api",slug:"/api/events",permalink:"/docs/api/events",draft:!1,unlisted:!1,editUrl:"https://github.com/TiBillet/documentation/tree/main/tibillet/docs/api/10 Event.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,slug:"events",title:"\xc9v\xe8nements",description:"Cr\xe9ez un \xe9v\xe8nement avec entr\xe9e libre.",keywords:["cashless","billetterie","ticketing","cli","curl","python"],wiktags:["cashless","billetterie","ticketing","curl","python"],authors:"jonas"},sidebar:"tutorialSidebar",previous:{title:"Produits",permalink:"/docs/api/products"},next:{title:"R\xe9servations et billets",permalink:"/docs/api/reservations"}},c={},u=[{value:"Tips :",id:"tips-",level:4},{value:"\xc9v\xe8nement sans artiste avec entr\xe9e libre",id:"\xe9v\xe8nement-sans-artiste-avec-entr\xe9e-libre",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.admonition,{type:"caution",children:[(0,s.jsx)(t.p,{children:"La documentation est en cours de r\xe9daction."}),(0,s.jsxs)(t.p,{children:["N'h\xe9sitez pas \xe0 venir discuter avec nous sur ",(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.a,{href:"https://discord.gg/7FJvtYx",children:"Discord"})})," pour avoir plus d'informations !"]})]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"POST /api/events/\n"})}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Item"}),(0,s.jsx)(t.th,{children:"type"}),(0,s.jsx)(t.th,{children:"Requis"}),(0,s.jsx)(t.th,{children:"Exemple"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"datetime"}),(0,s.jsx)(t.td,{children:"datetime"}),(0,s.jsx)(t.td,{children:"Y"}),(0,s.jsx)(t.td,{children:"2029-12-21T18:30"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"name"}),(0,s.jsx)(t.td,{children:"text"}),(0,s.jsx)(t.td,{children:"Y"}),(0,s.jsx)(t.td,{children:"42\xe8me anniversaire d'Adam"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"short_description"}),(0,s.jsx)(t.td,{children:"text"}),(0,s.jsx)(t.td,{children:"N"}),(0,s.jsx)(t.td,{children:"Pas de panique !"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"long_description"}),(0,s.jsx)(t.td,{children:"text"}),(0,s.jsx)(t.td,{children:"N"}),(0,s.jsx)(t.td,{children:"Un dernier restaurant avant la fin du monde ?"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"img_url"}),(0,s.jsx)(t.td,{children:"url"}),(0,s.jsx)(t.td,{children:"N"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://picsum.photos/1920/1080",children:"https://picsum.photos/1920/1080"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"category"}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"N"}),(0,s.jsx)(t.td,{children:"LIV"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"max_per_ser"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"N"}),(0,s.jsx)(t.td,{children:"10"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"tags"}),(0,s.jsx)(t.td,{children:"list"}),(0,s.jsx)(t.td,{children:"N"}),(0,s.jsx)(t.td,{children:'["Rock","D\xe9guis\xe9"]'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"artists"}),(0,s.jsx)(t.td,{children:"list"}),(0,s.jsx)(t.td,{children:"N"}),(0,s.jsx)(t.td,{children:'["uuid4","uuid4"]'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"products"}),(0,s.jsx)(t.td,{children:"list"}),(0,s.jsx)(t.td,{children:"N"}),(0,s.jsx)(t.td,{children:'["uuid4","uuid4"]'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"options_radio"}),(0,s.jsx)(t.td,{children:"list"}),(0,s.jsx)(t.td,{children:"N"}),(0,s.jsx)(t.td,{children:'["uuid4","uuid4"]'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"options_checkbox"}),(0,s.jsx)(t.td,{children:"list"}),(0,s.jsx)(t.td,{children:"N"}),(0,s.jsx)(t.td,{children:'["uuid4","uuid4"]'})]})]})]}),"\n",(0,s.jsx)(t.p,{children:"liste des cat\xe9gories disponibles :"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:'    CONCERT = "LIV" #Default\n    FESTIVAL = "FES"\n    REUNION = "REU"\n    CONFERENCE = "CON"\n    RESTAURATION = "RES"\n'})}),"\n",(0,s.jsx)(t.h4,{id:"tips-",children:"Tips :"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Si aucun ",(0,s.jsx)(t.strong,{children:"products"})," :  l'\xe9v\xe8nement sera consid\xe9r\xe9 comme entr\xe9e libre."]}),"\n",(0,s.jsxs)(t.li,{children:["Si ",(0,s.jsx)(t.strong,{children:"artist"})," :  les informations de l'\xe9v\xe8nement seront automatiquement compl\xe9t\xe9es avec les informations de l'artiste, pas besoin de renseigner ",(0,s.jsx)(t.strong,{children:"name"}),", ",(0,s.jsx)(t.strong,{children:"short_description"}),", ",(0,s.jsx)(t.strong,{children:"long_description"})," et ",(0,s.jsx)(t.strong,{children:"img_url"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"options_radio"})," et ",(0,s.jsx)(t.strong,{children:"options_checkbox"})," :  uuid des options \xe0 ajouter \xe0 l'\xe9v\xe8nement. Les options peuvent \xeatre cr\xe9\xe9es au pr\xe9alable via l'api ou l'administration.","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"radio : une option \xe0 choix unique parmis plusieurs ( ex : taille de t-shirt, etc... )"}),"\n",(0,s.jsx)(t.li,{children:"checkbox : une option \xe0 choix multiple parmis plusieurs ( ex : repas v\xe9g\xe9tarien, newsletter, etc... )"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"tags"})," :  liste de tags \xe0 ajouter \xe0 l'\xe9v\xe8nement. Renseignez le nom du tag. Les tags sont cr\xe9\xe9s automatiquement si ils n'existent pas d\xe9j\xe0."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"max_per_user"})," : D\xe9faut \xe0 10 si non renseign\xe9. Si == 1, et si tarifs == 1 alors le champs nom/premon sera automatiquement affich\xe9 lors de la commande et il n'y aura pas de choix de quantit\xe9."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"\xe9v\xe8nement-sans-artiste-avec-entr\xe9e-libre",children:"\xc9v\xe8nement sans artiste avec entr\xe9e libre"}),"\n","\n","\n",(0,s.jsxs)(i.Z,{children:[(0,s.jsx)(a.Z,{value:"Python",label:"Python",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:'import requests\n\nurl = "https://demo.betabillet.tech/api/events/"\n\ndata = {\n    "datetime": "2029-12-21T18:30",\n    "name": "42\xe8me anniversaire d\'Adam",\n    "short_description": "Pas de panique ! Un dernier restaurant avant la fin du monde ?",\n    "long_description": "J\'adore les dates limites. J\'aime le son qu\'elles font lorsque on les d\xe9passe \xe0 toute allure.",\n    "img_url": "https://picsum.photos/1920/1080"\n}\nheaders = {\n    "Authorization": "Api-Key Map0K71T.rcs82Q66NuCUCuyTmnjVhmwhfl0VnOsW",\n    "Content-Type": "application/json"\n}\n\nresponse = requests.request("POST", url, json=data, headers=headers)\n\nprint(response.text)\n'})})}),(0,s.jsx)(a.Z,{value:"Javascript",label:"json",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",metastring:'title="Json (Postman body)"',children:'{\n    "datetime": "{{random_date}}T18:30",\n    "name": "{{$randomWords}}",\n    "short_description": "{{$randomLoremSentence}}",\n    "long_description": "{{$randomLoremParagraph}}",\n    "img_url": "https://picsum.photos/1920/1080"\n}\n'})})})]}),"\n",(0,s.jsx)(t.p,{children:"Exemple de r\xe9ponse :"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",metastring:'title="HTTP Response (json)"',children:'{\n\t"uuid": "24b96716-c676-43e8-904f-baa93f66968a",\n\t"name": "42\xe8me anniversaire d\'Adam",\n\t"slug": "42eme-anniversaire-dadam-122129-1830",\n\t"short_description": "Pas de panique ! Un dernier restaurant avant la fin du monde ?",\n\t"long_description": "J\'adore les dates limites. J\'aime le son qu\'elles font lorsque on les d\xe9passe \xe0 toute allure.",\n\t"event_facebook_url": null,\n\t"datetime": "2029-12-21T18:30:00+04:00",\n\t"products": [\n\t\t{\n\t\t\t"uuid": "06948793-da03-47c4-9d56-6350b7e87034",\n\t\t\t"name": "Reservation",\n\t\t\t"short_description": null,\n\t\t\t"long_description": null,\n\t\t\t"terms_and_conditions_document": null,\n\t\t\t"publish": false,\n\t\t\t"img": null,\n\t\t\t"categorie_article": "F",\n\t\t\t"send_to_cashless": false,\n\t\t\t"prices": [\n\t\t\t\t{\n\t\t\t\t\t"uuid": "b4086a22-fee6-4a85-81bb-3b85a8e19d74",\n\t\t\t\t\t"short_description": null,\n\t\t\t\t\t"long_description": null,\n\t\t\t\t\t"name": "gratuite",\n\t\t\t\t\t"prix": 0.0,\n\t\t\t\t\t"vat": "NA",\n\t\t\t\t\t"stock": null,\n\t\t\t\t\t"max_per_user": 10,\n\t\t\t\t\t"subscription_type": "N",\n\t\t\t\t\t"product": "06948793-da03-47c4-9d56-6350b7e87034",\n\t\t\t\t\t"adhesion_obligatoire": null\n\t\t\t\t}\n\t\t\t]\n\t\t}\n\t],\n\t"options_radio": [],\n\t"options_checkbox": [],\n\t"img_variations": {\n\t\t"fhd": "/media/images/c371b9a0d21391a6998150ec49e6c833.fhd.png",\n\t\t"hdr": "/media/images/c371b9a0d21391a6998150ec49e6c833.hdr.png",\n\t\t"med": "/media/images/c371b9a0d21391a6998150ec49e6c833.med.png",\n\t\t"thumbnail": "/media/images/c371b9a0d21391a6998150ec49e6c833.thumbnail.png"\n\t},\n\t"reservations": 0,\n\t"complet": false,\n\t"artists": [],\n\t"url": "https://demo.betabillet.tech/event/42eme-anniversaire-dadam-122129-1830/",\n\t"place": "DemoSt\xe8ne"\n}\n'})})]})}function p(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},2584:(e,t,n)=>{n.d(t,{Z:()=>a});n(4673);var s=n(8632);const r={tabItem:"tabItem_PSFz"};var i=n(141);function a(e){let{children:t,hidden:n,className:a}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,s.Z)(r.tabItem,a),hidden:n,children:t})}},3102:(e,t,n)=>{n.d(t,{Z:()=>y});var s=n(4673),r=n(8632),i=n(5767),a=n(8528),l=n(4468),o=n(706),d=n(7032),c=n(2609);function u(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,s.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:s,default:r}}=e;return{value:t,label:n,attributes:s,default:r}}))}(n);return function(e){const t=(0,d.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const r=(0,a.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o._X)(i),(0,s.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(r.location.search);t.set(i,e),r.replace({...r.location,search:t.toString()})}),[i,r])]}function x(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,i=h(e),[a,o]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=n.find((e=>e.default))??n[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:i}))),[d,u]=m({queryString:n,groupId:r}),[x,j]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,i]=(0,c.Nk)(n);return[r,(0,s.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:r}),b=(()=>{const e=d??x;return p({value:e,tabValues:i})?e:null})();(0,l.Z)((()=>{b&&o(b)}),[b]);return{selectedValue:a,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),j(e)}),[u,j,i]),tabValues:i}}var j=n(5317);const b={tabList:"tabList_U0tv",tabItem:"tabItem_znfN"};var v=n(141);function g(e){let{className:t,block:n,selectedValue:s,selectValue:a,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),c=e=>{const t=e.currentTarget,n=o.indexOf(t),r=l[n].value;r!==s&&(d(t),a(r))},u=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;t=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;t=o[n]??o[o.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:i}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>o.push(e),onKeyDown:u,onClick:c,...i,className:(0,r.Z)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":s===t}),children:n??t},t)}))})}function f(e){let{lazy:t,children:n,selectedValue:r}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===r));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function _(e){const t=x(e);return(0,v.jsxs)("div",{className:(0,r.Z)("tabs-container",b.tabList),children:[(0,v.jsx)(g,{...e,...t}),(0,v.jsx)(f,{...e,...t})]})}function y(e){const t=(0,j.Z)();return(0,v.jsx)(_,{...e,children:u(e.children)},String(t))}},5213:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>a});var s=n(4673);const r={},i=s.createContext(r);function a(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);