"use strict";(self.webpackChunktibillet=self.webpackChunktibillet||[]).push([[810],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var l=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,i=function(e,t){if(null==e)return{};var n,l,i={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=l.createContext({}),c=function(e){var t=l.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return l.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(n),u=i,h=m["".concat(s,".").concat(u)]||m[u]||d[u]||a;return n?l.createElement(h,r(r({ref:t},p),{},{components:n})):l.createElement(h,r({ref:t},p))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var c=2;c<a;c++)r[c]=n[c];return l.createElement.apply(null,r)}return l.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1499:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var l=n(7462),i=(n(7294),n(3905));const a={sidebar_position:1,slug:"install_ticketing",title:"Installation",description:"Installation de la billetterie f\xe9d\xe9r\xe9 via Docker.",keywords:["cashless","billetterie","ticketing"],wiktags:["cashless","billetterie","ticketing"],authors:"jonas"},r="Installation",o={unversionedId:"install/install_ticketing",id:"install/install_ticketing",title:"Installation",description:"Installation de la billetterie f\xe9d\xe9r\xe9 via Docker.",source:"@site/docs/install/install_ticketing.md",sourceDirName:"install",slug:"/install/install_ticketing",permalink:"/docs/install/install_ticketing",draft:!1,editUrl:"https://github.com/TiBillet/documentation/tree/main/tibillet/docs/install/install_ticketing.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"install_ticketing",title:"Installation",description:"Installation de la billetterie f\xe9d\xe9r\xe9 via Docker.",keywords:["cashless","billetterie","ticketing"],wiktags:["cashless","billetterie","ticketing"],authors:"jonas"},sidebar:"tutorialSidebar",previous:{title:"Auto Hebergement",permalink:"/docs/category/auto-hebergement"},next:{title:"API",permalink:"/docs/category/api"}},s={},c=[{value:"Ticketing :",id:"ticketing-",level:2},{value:"No Reverse proxy",id:"no-reverse-proxy",level:2},{value:"Admin Root :",id:"admin-root-",level:4},{value:"Admin Tenant :",id:"admin-tenant-",level:4},{value:"Front Tenant",id:"front-tenant",level:4},{value:"Front Meta",id:"front-meta",level:4},{value:"With Traefik as reverse proxy",id:"with-traefik-as-reverse-proxy",level:2},{value:"Admin Root :",id:"admin-root--1",level:4},{value:"Admin Tenant :",id:"admin-tenant--1",level:4},{value:"Front Tenant",id:"front-tenant-1",level:4},{value:"Front Meta",id:"front-meta-1",level:4}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,l.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"installation"},"Installation"),(0,i.kt)("p",null,"Une ",(0,i.kt)("a",{parentName:"p",href:"/docs/presentation/Demonstration"},"version de d\xe9monstration")," est disponible en ligne."),(0,i.kt)("h2",{id:"ticketing-"},"Ticketing :"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/install/"},"Install Docker")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"git clone git@github.com:TiBillet/TiBillet.git\n\n# Change branch to PreProd\ncd TiBillet\ngit checkout origin/PreProd\n\n# Change environment credential inside .env\ncd Docker/Development\ncp env_example .env\nnano .env\n\n# Launch in detached mode\ndocker compose up -d\n")),(0,i.kt)("p",null,"Launch the backend service for dev :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"# Go inside the django container :\ndocker exec -ti billetterie_django bash\nbash ./install.sh \npython /DjangoFiles/manage.py runserver 0.0.0.0:8002\n")),(0,i.kt)("p",null,"Launch the frontend service for dev' : "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"docker exec -ti billetterie_nodejs_dev bash\nnpm install\nnpm run dev\n")),(0,i.kt)("h2",{id:"no-reverse-proxy"},"No Reverse proxy"),(0,i.kt)("p",null,"No reverse proxy ? No problem with linux !"),(0,i.kt)("p",null,"Just add to /etc/hosts the domain and subdomain of your choice."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"172.17.0.1       tibillet.local\n172.17.0.1       m.tibillet.local\n172.17.0.1       demo.tibillet.local\n")),(0,i.kt)("h4",{id:"admin-root-"},"Admin Root :"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"http://www.tibillet.local:8002/admin"},"http://www.tibillet.local:8002/admin")),(0,i.kt)("h4",{id:"admin-tenant-"},"Admin Tenant :"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"http://demo.tibillet.local:8002/admin"},"http://demo.tibillet.local:8002/admin")),(0,i.kt)("h4",{id:"front-tenant"},"Front Tenant"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"http://demo.tibillet.local:8004"},"http://demo.tibillet.local:8004")),(0,i.kt)("h4",{id:"front-meta"},"Front Meta"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"http://m.tibillet.local:8004"},"http://m.tibillet.local:8004")),(0,i.kt)("h2",{id:"with-traefik-as-reverse-proxy"},"With Traefik as reverse proxy"),(0,i.kt)("p",null,"Example for Widlcard with Traefik and OVH DNS Challenge :"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/TiBillet/Traefik-reverse-proxy/tree/main/wildcard"},"https://github.com/TiBillet/Traefik-reverse-proxy/tree/main/wildcard")),(0,i.kt)("h4",{id:"admin-root--1"},"Admin Root :"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.tibillet.local/admin"},"https://www.tibillet.local/admin")),(0,i.kt)("h4",{id:"admin-tenant--1"},"Admin Tenant :"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://demo.tibillet.local/admin"},"https://demo.tibillet.local/admin")),(0,i.kt)("h4",{id:"front-tenant-1"},"Front Tenant"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://demo.tibillet.local"},"https://demo.tibillet.local")),(0,i.kt)("h4",{id:"front-meta-1"},"Front Meta"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://m.tibillet.local"},"https://m.tibillet.local")))}d.isMDXComponent=!0}}]);