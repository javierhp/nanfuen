(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[178],{6929:function(e,a,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/classes",function(){return s(388)}])},145:function(e,a,s){"use strict";s.d(a,{Z:function(){return h}});var r=s(5893);s(1664);var n=s(5675),i=s.n(n),t=s(1451),l=s(8516),o=s(1025);function c(){return(0,r.jsxs)(l.Z,{bg:"light",expand:"lg",children:[(0,r.jsx)(l.Z.Brand,{href:"#home",children:(0,r.jsx)(i(),{src:"/images/logo-iso.svg",className:"rounded",alt:"Nanfuen",width:60,height:45})}),(0,r.jsx)(l.Z.Toggle,{"aria-controls":"basic-navbar-nav"}),(0,r.jsx)(l.Z.Collapse,{id:"basic-navbar-nav",children:(0,r.jsxs)(t.Z,{className:"me-auto",children:[(0,r.jsx)(t.Z.Link,{href:"/#home",children:"Home"}),(0,r.jsx)(t.Z.Link,{href:"/about",children:"Acerca de nosotros"}),(0,r.jsx)(t.Z.Link,{href:"/classes",children:"Clases y Talleres"}),(0,r.jsxs)(o.Z,{title:"Catalogo",id:"basic-nav-dropdown",children:[(0,r.jsx)(o.Z.Item,{href:"/catalog",children:"Todo"}),(0,r.jsx)(o.Z.Item,{href:"/catalog/tree",children:"Arboles"}),(0,r.jsx)(o.Z.Item,{href:"/catalog/Pot",children:"Macetas"})]})]})})]})}var d=s(9008),p=s.n(d),m=s(682);let u="Nanfuen Sample Website";function h(e){let{children:a}=e;return(0,r.jsxs)(m.Z,{children:[(0,r.jsxs)(p(),{children:[(0,r.jsx)("title",{children:"Nanfuen"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,r.jsx)("meta",{name:"description",content:"Nanfuen bonsai Argentina"}),(0,r.jsx)("meta",{property:"og:image",content:"https://og-image.vercel.app/".concat(encodeURI(u),".png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg")}),(0,r.jsx)("meta",{name:"og:title",content:u}),(0,r.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"})]}),(0,r.jsx)("header",{children:(0,r.jsx)(c,{})}),(0,r.jsx)("div",{className:"d-flex h-100 p-3 mr-auto flex-column w-100",children:a})]})}},388:function(e,a,s){"use strict";s.r(a),s.d(a,{default:function(){return g}});var r=s(5893),n=s(145),i=s(5826),t=s(682),l=s(4051),o=s(1555),c=s(8182),d=s(5005);function p(e){let{plan:a}=e,{name:s,description:n,priceInUSD:i,priceInARS:t,category:l,pack:o,enabled:p}=a;return(0,r.jsxs)(c.Z,{style:{width:"18rem",textDecoration:a.enabled?"none":"line-through"},children:[(0,r.jsx)(c.Z.Header,{children:a.name}),(0,r.jsxs)(c.Z.Body,{children:[(0,r.jsx)(c.Z.Title,{children:a.pack}),a.priceUSD&&(0,r.jsxs)("p",{children:["Precio en USD: ",a.priceUSD]}),a.priceARS&&(0,r.jsxs)("p",{children:["Precio en Pesos Argentinos: ",a.priceARS]}),a.category&&(0,r.jsxs)("p",{children:["Tipo: ","in person"===a.category?"Presenciales":"Virtuales"]}),(0,r.jsx)("ul",{children:a.features.map(e=>(0,r.jsx)("li",{children:e},e))}),"in person"!==a.category&&(0,r.jsx)(d.Z,{variant:"primary",disabled:!a.enabled,href:"https://forms.gle/KKtXu8vW3k6s1fF57",children:a.enabled?"Inscribirse":"No disponible"}),"in person"===a.category&&(0,r.jsx)(d.Z,{variant:"primary",disabled:!a.enabled,children:a.enabled?"Escribinos por mail":"No disponible"})]})]},a.name)}function m(e){let{plans:a}=e;return(0,r.jsx)(t.Z,{children:(0,r.jsx)(l.Z,{xs:1,sm:1,md:2,lg:3,children:a.map(e=>(0,r.jsx)(o.Z,{className:"mb-4",children:(0,r.jsx)(p,{plan:e})},e.id))})})}var u=s(7294),h=s(2914);let x=e=>{let{plans:a,setFilteredPlans:s}=e,[n,i]=(0,u.useState)("all"),[t,l]=(0,u.useState)(!1),o=e=>{i(e.target.value),c(e.target.value,t)},c=(e,r)=>{let n=a;"all"!==e&&(n=a.filter(a=>a.category===e)),r&&n.sort((e,a)=>e.price-a.price),s(n)};return(0,r.jsx)(h.Z,{children:(0,r.jsxs)(h.Z.Group,{controlId:"category",children:[(0,r.jsx)(h.Z.Label,{children:"Categoria:"}),(0,r.jsxs)(h.Z.Control,{as:"select",value:n,onChange:o,children:[(0,r.jsx)("option",{value:"all",children:"Todos"}),(0,r.jsx)("option",{value:"virtual",children:"Virtuales"}),(0,r.jsx)("option",{value:"in person",children:"Presenciales"})]})]})})};function g(){let[e,a]=(0,u.useState)(i);return(0,r.jsxs)(n.Z,{children:[(0,r.jsx)("p",{children:"Estos son los formatos de talleres y clases que ofrecemos por el momento"}),(0,r.jsx)(x,{plans:i,setFilteredPlans:a}),(0,r.jsx)("p",{}),(0,r.jsx)(m,{plans:e})]})}},5826:function(e){"use strict";e.exports=JSON.parse('[{"name":"Clases semanales","category":"virtual","pack":"Por mes","priceUSD":"20","priceARS":"0","features":["Clases domingos de 7 a 9 PM Argentina","Acceso a mas de 70 clases grabadas","Trabajos enfocados en temporada"],"enabled":false},{"name":"Pack trimestral: Clases semanales","category":"virtual","pack":"3 meses","priceUSD":"50","priceARS":"0","features":["Ahorras 16%","Clases domingos de 7 a 9 PM Argentina","Acceso a mas de 70 clases grabadas","Trabajos enfocados en temporada"],"enabled":false},{"name":"Pack semestral: Clases semanales","category":"virtual","pack":"6 meses","priceUSD":"100","priceARS":"0","features":["1 mes gratis!","Clases domingos de 7 a 9 PM Argentina","Acceso a mas de 70 clases grabadas","Trabajos enfocados en temporada"],"enabled":false},{"name":"Clases regulares","category":"in person","priceUSD":"20","priceARS":"0","features":["Clases de 2hs","Orientado a los trabajos de la temporada","Materiales incluidos"],"enabled":false},{"name":"Workshop","category":"in person","priceUSD":"30","priceARS":"7000","features":["Taller intensivo de un dia","Podes traer tu material o usar el del vivero","Trabajos de temporada"],"enabled":true},{"name":"Trabajos particulares de coleccion","category":"in person","priceUSD":"Desde 50","priceARS":"Desde 12000","features":["Manetimientos","Dise\xf1os","Refinados","Precio final a acordar"],"enabled":true}]')}},function(e){e.O(0,[999,355,30,774,888,179],function(){return e(e.s=6929)}),_N_E=e.O()}]);