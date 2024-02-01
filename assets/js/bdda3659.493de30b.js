"use strict";(self.webpackChunkdocumentation_v_2=self.webpackChunkdocumentation_v_2||[]).push([[810],{8523:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var i=t(141),l=t(5213);const r={sidebar_position:1,slug:"install_ticketing",title:"Installation",description:"Installation de la billetterie f\xe9d\xe9r\xe9 via Docker.",keywords:["cashless","billetterie","ticketing"],wiktags:["cashless","billetterie","ticketing"],authors:"jonas"},a="Installation",o={id:"install/install_ticketing",title:"Installation",description:"Installation de la billetterie f\xe9d\xe9r\xe9 via Docker.",source:"@site/docs/install/install_ticketing.md",sourceDirName:"install",slug:"/install/install_ticketing",permalink:"/docs/install/install_ticketing",draft:!1,unlisted:!1,editUrl:"https://github.com/TiBillet/documentation/tree/main/tibillet/docs/install/install_ticketing.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"install_ticketing",title:"Installation",description:"Installation de la billetterie f\xe9d\xe9r\xe9 via Docker.",keywords:["cashless","billetterie","ticketing"],wiktags:["cashless","billetterie","ticketing"],authors:"jonas"},sidebar:"tutorialSidebar",previous:{title:"Auto Hebergement",permalink:"/docs/category/auto-hebergement"},next:{title:"Install_Raspberry",permalink:"/docs/install/Install_Raspberry"}},s={},d=[{value:"Ticketing :",id:"ticketing-",level:2},{value:"No Reverse proxy",id:"no-reverse-proxy",level:2},{value:"Admin Root :",id:"admin-root-",level:4},{value:"Admin Tenant :",id:"admin-tenant-",level:4},{value:"Front Tenant",id:"front-tenant",level:4},{value:"Front Meta",id:"front-meta",level:4},{value:"With Traefik as reverse proxy",id:"with-traefik-as-reverse-proxy",level:2},{value:"Admin Root :",id:"admin-root--1",level:4},{value:"Admin Tenant :",id:"admin-tenant--1",level:4},{value:"Front Tenant",id:"front-tenant-1",level:4},{value:"Front Meta",id:"front-meta-1",level:4}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"installation",children:"Installation"}),"\n",(0,i.jsxs)(n.p,{children:["Une ",(0,i.jsx)(n.a,{href:"/docs/presentation/demonstration",children:"version de d\xe9monstration"})," est disponible en ligne."]}),"\n",(0,i.jsx)(n.h2,{id:"ticketing-",children:"Ticketing :"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://docs.docker.com/engine/install/",children:"Install Docker"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"git clone git@github.com:TiBillet/TiBillet.git\n\n# Change branch to PreProd\ncd TiBillet\ngit checkout PreProd\n\n# Change environment credential inside .env\ncd Docker/Development\ncp env_example .env\nnano .env\n\n# if not created before (with Traefik)\ndocker network create frontend\n\n# Launch in detached mode\ndocker compose up -d\n"})}),"\n",(0,i.jsx)(n.p,{children:"Launch the backend service for dev :"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"# Go inside the django container :\ndocker exec -ti billetterie_django bash\nbash ./install.sh \npython /DjangoFiles/manage.py runserver 0.0.0.0:8002\n"})}),"\n",(0,i.jsx)(n.p,{children:"Launch the frontend service for dev' :"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"docker exec -ti billetterie_nodejs_dev bash\nnpm install\nnpm run dev\n"})}),"\n",(0,i.jsx)(n.h2,{id:"no-reverse-proxy",children:"No Reverse proxy"}),"\n",(0,i.jsx)(n.p,{children:"No reverse proxy ? No problem with linux !"}),"\n",(0,i.jsx)(n.p,{children:"Just add to /etc/hosts the domain and subdomain of your choice."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"172.17.0.1       tibillet.local\n172.17.0.1       m.tibillet.local\n172.17.0.1       demo.tibillet.local\n"})}),"\n",(0,i.jsx)(n.h4,{id:"admin-root-",children:"Admin Root :"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"http://www.tibillet.local:8002/admin",children:"http://www.tibillet.local:8002/admin"})}),"\n",(0,i.jsx)(n.h4,{id:"admin-tenant-",children:"Admin Tenant :"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"http://demo.tibillet.local:8002/admin",children:"http://demo.tibillet.local:8002/admin"})}),"\n",(0,i.jsx)(n.h4,{id:"front-tenant",children:"Front Tenant"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"http://demo.tibillet.local:8004",children:"http://demo.tibillet.local:8004"})}),"\n",(0,i.jsx)(n.h4,{id:"front-meta",children:"Front Meta"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"http://m.tibillet.local:8004",children:"http://m.tibillet.local:8004"})}),"\n",(0,i.jsx)(n.h2,{id:"with-traefik-as-reverse-proxy",children:"With Traefik as reverse proxy"}),"\n",(0,i.jsx)(n.p,{children:"Example for Widlcard with Traefik and OVH DNS Challenge :"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/TiBillet/Traefik-reverse-proxy/tree/main/wildcard",children:"https://github.com/TiBillet/Traefik-reverse-proxy/tree/main/wildcard"})}),"\n",(0,i.jsx)(n.h4,{id:"admin-root--1",children:"Admin Root :"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://www.tibillet.local/admin",children:"https://www.tibillet.local/admin"})}),"\n",(0,i.jsx)(n.h4,{id:"admin-tenant--1",children:"Admin Tenant :"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://demo.tibillet.local/admin",children:"https://demo.tibillet.local/admin"})}),"\n",(0,i.jsx)(n.h4,{id:"front-tenant-1",children:"Front Tenant"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://demo.tibillet.local",children:"https://demo.tibillet.local"})}),"\n",(0,i.jsx)(n.h4,{id:"front-meta-1",children:"Front Meta"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://m.tibillet.local",children:"https://m.tibillet.local"})}),"\n",(0,i.jsx)(n.h1,{id:"update",children:"Update"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"git pull\ncd Docker/Development\ndocker compose pull\ndocker compose down\ndocker compose up -d\ndocker exec -ti billetterie_django /usr/local/bin/python /DjangoFiles/manage.py migrate\n"})})]})}function h(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},5213:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>a});var i=t(4673);const l={},r=i.createContext(l);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);