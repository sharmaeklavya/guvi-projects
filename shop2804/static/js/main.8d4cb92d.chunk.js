(this.webpackJsonpreactapp=this.webpackJsonpreactapp||[]).push([[0],{12:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var s=a(1),c=a.n(s),i=a(7),l=a.n(i),n=(a(12),a(6)),r=a(3),d=a(0);function o(e){return Object(d.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("a",{className:"navbar-brand",href:"#",children:"Digital Shop"}),Object(d.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(d.jsx)("span",{className:"navbar-toggler-icon"})}),Object(d.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(d.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(d.jsx)("li",{className:"nav-item active",children:Object(d.jsxs)("a",{className:"nav-link",href:"#",children:["Home ",Object(d.jsx)("span",{className:"sr-only",children:"(current)"})]})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)("a",{className:"nav-link",href:"#",children:"About"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)("a",{className:"nav-link",href:"#",children:"Service"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)("a",{className:"nav-link",href:"#",children:"Contact"})})]})})]})})}function j(e){return Object(d.jsxs)("div",{id:"carouselExampleIndicators",className:"carousel slide","data-ride":"carousel",children:[Object(d.jsxs)("ol",{className:"carousel-indicators",children:[Object(d.jsx)("li",{"data-target":"#carouselExampleIndicators","data-slide-to":"0",className:"active"}),Object(d.jsx)("li",{"data-target":"#carouselExampleIndicators","data-slide-to":"1"}),Object(d.jsx)("li",{"data-target":"#carouselExampleIndicators","data-slide-to":"2"})]}),Object(d.jsxs)("div",{className:"carousel-inner my-4",children:[Object(d.jsx)("div",{className:"carousel-item active",children:Object(d.jsx)("img",{src:"https://loremflickr.com/540/260",className:"d-block w-100",alt:"cat-images"})}),Object(d.jsx)("div",{className:"carousel-item",children:Object(d.jsx)("img",{src:"http://placeimg.com/540/260/any",className:"d-block w-100",alt:"Humans"})}),Object(d.jsx)("div",{className:"carousel-item",children:Object(d.jsx)("img",{src:"https://placekitten.com/540/260",className:"d-block w-100",alt:"cat-images"})})]}),Object(d.jsxs)("a",{className:"carousel-control-prev",href:"#carouselExampleIndicators",role:"button","data-slide":"prev",children:[Object(d.jsx)("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),Object(d.jsx)("span",{className:"sr-only",children:"Previous"})]}),Object(d.jsxs)("a",{className:"carousel-control-next",href:"#carouselExampleIndicators",role:"button","data-slide":"next",children:[Object(d.jsx)("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),Object(d.jsx)("span",{className:"sr-only",children:"Next"})]})]})}function m(e){var t=e.disableState.includes(e.data.id);return Object(d.jsx)("div",{className:"col-lg-4",children:Object(d.jsxs)("div",{className:"card my-2",children:[Object(d.jsx)("img",{src:e.data.img,className:"card-img-top",alt:"..."}),Object(d.jsxs)("div",{className:"card-body",children:[Object(d.jsx)("h4",{className:"card-title text-primary",children:Object(d.jsx)("a",{href:"#",className:"text-decoration-none",children:e.data.title})}),Object(d.jsxs)("h5",{className:"card-title font-weight-bold",children:["$",e.data.price]}),Object(d.jsx)("p",{className:"card-text",children:e.data.desc}),Object(d.jsxs)("div",{className:"card__footer d-flex justify-content-between align-items-center",children:[Object(d.jsx)("span",{className:"stars",children:function(e){for(var t=5,a=[],s=0;s<e;s++)a.push(Object(d.jsx)("i",{className:"fas fa-star"}));for(;e<t;)a.push(Object(d.jsx)("i",{className:"far fa-star"})),t--;return a}(e.data.stars)}),Object(d.jsx)("span",{className:"",children:Object(d.jsx)("button",{className:"btn btn-primary text-right",onClick:function(){e.handleClick(e.data)},disabled:t,children:"Add Item"})})]})]})]})})}function b(){var e=Object(s.useState)([]),t=Object(r.a)(e,2),a=t[0],c=t[1],i=Object(s.useState)(0),l=Object(r.a)(i,2),b=l[0],u=l[1],p=Object(s.useState)(0),x=Object(r.a)(p,2),h=x[0],O=x[1],g=Object(s.useState)([]),N=Object(r.a)(g,2),v=N[0],f=N[1],k=function(e){c([].concat(Object(n.a)(a),[e])),u(+(b+e.price).toFixed(2)),O(h+1),f([].concat(Object(n.a)(v),[e.id]))};return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(o,{}),Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsxs)("div",{className:"col-lg-9",children:[Object(d.jsx)(j,{}),Object(d.jsx)("div",{className:"row",children:[{id:1,img:"http://placeimg.com/340/160/any",title:"Product One",price:25.99,desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",stars:5},{id:2,img:"https://placebear.com/340/160",title:"Product Two",price:20.52,desc:"dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",stars:2},{id:3,img:"https://picsum.photos/340/160",title:"Product Three",price:39.45,desc:"amet, consectetur adipisicing elit. Amet numquam aspernatur!",stars:4},{id:4,img:"http://placeimg.com/340/160/any",title:"Product Four",price:59.32,desc:"consectetur adipisicing elit. Amet numquam aspernatur! ipsum dolor sit amet, consectetur adipisicing elit.",stars:3},{id:5,img:"https://loremflickr.com/340/160",title:"Product Five",price:42.15,desc:"adipisicing elit. Amet numquam aspernatur! ipsum dolor sit amet, consectetur adipisicing elit.",stars:5},{id:6,img:"https://placebeard.it/340x160",title:"Product Six",price:15.99,desc:"elit. Amet numquam aspernatur! ipsum dolor sit amet, consectetur adipisicing elit.",stars:2}].map((function(e){return Object(d.jsx)(m,{data:e,handleClick:k,disableState:v})}))})]}),Object(d.jsxs)("div",{className:"col-lg-3",children:[Object(d.jsx)("h2",{className:"h5 my-4 text-center",children:"Items in cart"}),a.map((function(e){return Object(d.jsx)("ul",{className:"list-group",children:Object(d.jsxs)("li",{className:"list-group-item d-flex justify-content-between",children:[Object(d.jsx)("span",{children:e.title}),Object(d.jsxs)("span",{children:["$",e.price]}),Object(d.jsx)("span",{children:Object(d.jsx)("i",{className:"fas fa-minus-square btn",onClick:function(){!function(e){c(a.filter((function(t){return t.id!==e.id}))),u(+(b-e.price).toFixed(2)),O(h-1),f(v.filter((function(t){return t!==e.id})))}(e)}})})]})})})),Object(d.jsx)("ul",{className:"list-group",children:Object(d.jsxs)("li",{className:"list-group-item d-flex justify-content-between",children:[Object(d.jsx)("span",{className:"font-weight-bold",children:"Total"}),Object(d.jsxs)("span",{className:"font-weight-bold ml-5 pl-2",children:["$",b]}),Object(d.jsxs)("span",{children:[h,Object(d.jsx)("small",{children:" Pcs"})]})]})})]})]})})]})}var u=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,15)).then((function(t){var a=t.getCLS,s=t.getFID,c=t.getFCP,i=t.getLCP,l=t.getTTFB;a(e),s(e),c(e),i(e),l(e)}))};l.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(b,{})}),document.getElementById("root")),u()}},[[14,1,2]]]);
//# sourceMappingURL=main.8d4cb92d.chunk.js.map