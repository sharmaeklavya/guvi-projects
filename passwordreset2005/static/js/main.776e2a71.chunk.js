(this.webpackJsonppasswordreset2005=this.webpackJsonppasswordreset2005||[]).push([[0],{37:function(e,t,s){},38:function(e,t,s){"use strict";s.r(t);var a=s(1),r=s.n(a),n=s(14),c=s.n(n),i=s(8),l=s(2),o=s(40),d=s(41),m=s(5),u=s(0),j=r.a.createContext(),b=j,p=function(e){var t=e.children,s=Object(a.useState)(""),r=Object(m.a)(s,2),n=r[0],c=r[1],i=Object(a.useState)(""),l=Object(m.a)(i,2),o=l[0],d=l[1];return Object(u.jsx)(j.Provider,{value:{username:n,setUserName:c,useremail:o,setUserEmail:d},children:t})},h=s(9),O=s.n(h),x=s(13);var g=function(){var e=document.querySelector(".invalid"),t=document.querySelector(".valid"),s=Object(a.useState)(""),r=Object(m.a)(s,2),n=r[0],c=r[1],o=Object(l.f)(),d=function(){var e=Object(x.a)(O.a.mark((function e(t){var s;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("https://noderesetpassword.herokuapp.com/forgotpassword",{method:"POST",body:JSON.stringify({email:n}),headers:{"Content-type":"application/json"}});case 3:s=e.sent,j(s);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(s){200===s.status?(t.classList.remove("hidden"),setTimeout((function(){t.classList.add("hidden"),o.push("/")}),4e3)):(e.classList.remove("hidden"),setTimeout((function(){e.classList.add("hidden")}),1e3))};return Object(u.jsxs)("div",{className:"card card__",children:[Object(u.jsx)("span",{className:"title",children:"Forgot Password?"}),Object(u.jsx)("div",{className:"forgot-img",children:Object(u.jsx)("img",{src:"/imgs/key.jpeg",className:"card-img-top real-img",alt:"forgotpassword-img"})}),Object(u.jsxs)("div",{className:"card-body",children:[Object(u.jsx)("p",{className:"hidden invalid",children:Object(u.jsx)("small",{className:"text-danger",children:"Invalid email. Please try again."})}),Object(u.jsx)("p",{className:"hidden valid",children:Object(u.jsx)("small",{className:"text-success",children:"Please check your email to verify if it's really you."})}),Object(u.jsxs)("form",{className:"reset-form",onSubmit:d,children:[Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{htmlFor:"inputEmail",children:"Username / Email"}),Object(u.jsx)("input",{type:"email",className:"form-control my-2",id:"inputEmail","aria-describedby":"emailHelp",required:!0,onChange:function(e){return c(e.target.value)}})]}),Object(u.jsx)("button",{type:"submit",className:"btn btn-primary my-2",children:"Reset"})]}),Object(u.jsx)("div",{className:"links",children:Object(u.jsx)(i.b,{to:"/",className:"link",children:"Sign in"})})]})]})};var v=function(e){var t=document.querySelector(".invalid"),s=document.querySelector(".valid"),r=document.querySelector(".unauthorized"),n=Object(l.f)(),c=Object(a.useState)(""),o=Object(m.a)(c,2),d=o[0],j=o[1],b=Object(a.useState)(""),p=Object(m.a)(b,2),h=p[0],g=p[1],v=function(){var t=Object(x.a)(O.a.mark((function t(s){var a;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(s.preventDefault(),void 0===f()){t.next=6;break}return t.next=4,fetch("https://noderesetpassword.herokuapp.com".concat(e.location.pathname),{method:"POST",body:JSON.stringify({password:f()}),headers:{"Content-type":"application/json"}});case 4:a=t.sent,N(a);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){if(d===h)return t.classList.add("hidden"),h;t.classList.remove("hidden")},N=function(e){200===e.status?(s.classList.remove("hidden"),r.classList.add("hidden"),setTimeout((function(){n.push("/")}),500)):(r.classList.remove("hidden"),s.classList.add("hidden"))};return Object(u.jsxs)("div",{className:"card card__",children:[Object(u.jsx)("p",{className:"title",children:"Update Password"}),Object(u.jsx)("div",{className:"reset-img",children:Object(u.jsx)("img",{src:"/imgs/key.jpeg",className:"card-img-top real-img",alt:"reset-password-img"})}),Object(u.jsxs)("div",{className:"card-body",children:[Object(u.jsx)("p",{className:"hidden invalid",children:Object(u.jsx)("small",{className:"text-danger",children:"Password do not match. Please try again."})}),Object(u.jsx)("p",{className:"hidden valid",children:Object(u.jsx)("small",{className:"text-success",children:"You have successfully registered your new password."})}),Object(u.jsx)("p",{className:"hidden unauthorized",children:Object(u.jsx)("small",{className:"text-danger",children:"Unauthorized Access. Reset your password again."})}),Object(u.jsxs)("form",{className:"reset-form",onSubmit:v,children:[Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{htmlFor:"inputPass1",children:"New Password"}),Object(u.jsx)("input",{type:"text",className:"form-control my-2",id:"inputPass1","aria-describedby":"passHelp",required:!0,onChange:function(e){return j(e.target.value)}}),Object(u.jsx)("label",{htmlFor:"inputPass2",children:"Repeat Password"}),Object(u.jsx)("input",{type:"password",className:"form-control my-2",id:"inputPass2","aria-describedby":"passHelp",required:!0,onChange:function(e){return g(e.target.value)}})]}),Object(u.jsx)("button",{type:"submit",className:"btn btn-primary my-2",children:"Reset"})]}),Object(u.jsx)("div",{className:"links",children:Object(u.jsx)(i.b,{to:"/forgotpassword",className:"link",children:"Forgot Password"})})]})]})};var f=function(){var e=document.querySelector(".invalid"),t=document.querySelector(".valid"),s=Object(a.useState)(""),r=Object(m.a)(s,2),n=r[0],c=r[1],o=Object(a.useState)(""),d=Object(m.a)(o,2),j=d[0],b=d[1],p=Object(a.useState)(""),h=Object(m.a)(p,2),g=h[0],v=h[1],f=Object(l.f)(),N=function(){var e=Object(x.a)(O.a.mark((function e(t){var s;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("https://noderesetpassword.herokuapp.com/register",{method:"POST",body:JSON.stringify({fullname:n,email:j,password:g}),headers:{"Content-type":"application/json"}});case 3:s=e.sent,y(s);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(s){200===s.status?(e.classList.add("hidden"),t.classList.remove("hidden"),setTimeout((function(){f.push("/")}),1500)):(e.classList.remove("hidden"),t.classList.add("hidden"))};return Object(u.jsxs)("div",{className:"card card__",children:[Object(u.jsx)("p",{className:"title",children:"Sign-up"}),Object(u.jsx)("div",{className:"welcome-img",children:Object(u.jsx)("img",{src:"/imgs/welcome.jpeg",className:"card-img-top real-img",alt:"login-img"})}),Object(u.jsxs)("div",{className:"card-body",children:[Object(u.jsx)("p",{className:"hidden invalid",children:Object(u.jsx)("small",{className:"text-danger",children:"User already registered. You may try logging in."})}),Object(u.jsx)("p",{className:"hidden valid",children:Object(u.jsx)("small",{className:"text-success",children:"Successfully registered."})}),Object(u.jsxs)("form",{className:"reset-form",onSubmit:N,children:[Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{htmlFor:"inputFullName",children:"Full Name"}),Object(u.jsx)("input",{type:"text",className:"form-control my-2",id:"inputFullName","aria-describedby":"fullName",required:!0,onChange:function(e){return c(e.target.value)}})]}),Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{htmlFor:"inputEmail",children:"Email"}),Object(u.jsx)("input",{type:"email",className:"form-control my-2",id:"inputEmail","aria-describedby":"emailHelp",required:!0,onChange:function(e){return b(e.target.value)}}),Object(u.jsx)("label",{htmlFor:"inputPassword",children:"Password"}),Object(u.jsx)("input",{type:"password",className:"form-control my-2",id:"inputPassword","aria-describedby":"passHelp",required:!0,onChange:function(e){return v(e.target.value)}})]}),Object(u.jsx)("button",{type:"submit",className:"btn btn-primary my-2",children:"Register"})]}),Object(u.jsx)("div",{className:"links",children:Object(u.jsx)(i.b,{to:"/",className:"link",children:"Login"})})]})]})};var N=function(){var e=document.querySelector(".invalid"),t=Object(a.useContext)(b),s=Object(a.useState)(""),r=Object(m.a)(s,2),n=r[0],c=r[1],o=Object(a.useState)(""),d=Object(m.a)(o,2),j=d[0],p=d[1],h=Object(l.f)(),g=function(){var e=Object(x.a)(O.a.mark((function e(s){var a,r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s.preventDefault(),e.next=3,fetch("https://noderesetpassword.herokuapp.com/login",{method:"POST",body:JSON.stringify({email:n,password:j}),headers:{"Content-type":"application/json"}});case 3:return 200===(a=e.sent).status&&h.push("/dashboard"),e.next=7,a.json();case 7:r=e.sent,t.setUserName(r.name),t.setUserEmail(r.email),v(a);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(t){200===t.status?e.classList.add("hidden"):e.classList.remove("hidden")};return Object(u.jsxs)("div",{className:"card card__",children:[Object(u.jsx)("p",{className:"title",children:"Sign-in"}),Object(u.jsx)("div",{className:"login-img",children:Object(u.jsx)("img",{src:"/imgs/hello.jpeg",className:"card-img-top real-img",alt:"login-img"})}),Object(u.jsxs)("div",{className:"card-body",children:[Object(u.jsx)("p",{className:"hidden invalid",children:Object(u.jsx)("small",{className:"text-danger",children:"Invalid username or password"})}),Object(u.jsxs)("form",{className:"reset-form",onSubmit:g,children:[Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{htmlFor:"inputEmail",children:"Username / Email"}),Object(u.jsx)("input",{type:"email",className:"form-control my-2",id:"inputEmail","aria-describedby":"emailHelp",required:!0,onChange:function(e){return c(e.target.value)}}),Object(u.jsx)("label",{htmlFor:"inputPassword",children:"Password"}),Object(u.jsx)("input",{type:"password",className:"form-control my-2",id:"inputPassword","aria-describedby":"passHelp",required:!0,onChange:function(e){return p(e.target.value)}})]}),Object(u.jsx)("button",{type:"submit",className:"btn btn-primary my-2",children:"Login"})]}),Object(u.jsxs)("div",{className:"links",children:[Object(u.jsx)(i.b,{to:"/forgotpassword",className:"link",children:"Forgot Password"}),Object(u.jsx)(i.b,{to:"/register",className:"link",children:"Sign up"})]})]})]})};var y=function(){var e=Object(l.f)(),t=Object(a.useContext)(b),s=t.username,r=t.useremail;""!==s&&(localStorage.setItem("username",s),localStorage.setItem("useremail",r));var n=localStorage.getItem("username"),c=localStorage.getItem("useremail");return Object(u.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:Object(u.jsxs)("div",{className:"container",children:[Object(u.jsxs)("span",{className:"navbar-brand",children:["Welcome, ",n]}),Object(u.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(u.jsx)("span",{className:"navbar-toggler-icon"})}),Object(u.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(u.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(u.jsx)("li",{className:"nav-item active ",children:Object(u.jsxs)("span",{className:"nav-link",children:[" ",c]})}),Object(u.jsx)("li",{className:"nav-item",children:Object(u.jsx)("button",{type:"button",className:"nav-link text-white btn btn-danger",id:"signout",onClick:function(){localStorage.setItem("username","Guest User"),localStorage.setItem("useremail",""),e.push("/")},children:"Sign out"})})]})})]})})};var w=function(){return Object(u.jsx)(i.a,{children:Object(u.jsx)(p,{children:Object(u.jsxs)("div",{className:"container px-0",children:[Object(u.jsx)(l.a,{path:"/dashboard",component:y}),Object(u.jsx)(l.a,{render:function(e){var t=e.location;return Object(u.jsx)(o.a,{children:Object(u.jsx)(d.a,{timeout:300,classNames:"fadeLeft",mountOnEnter:!0,unmountOnExit:!0,children:Object(u.jsxs)(l.c,{component:t,children:[Object(u.jsx)(l.a,{exact:!0,path:"/",component:N}),Object(u.jsx)(l.a,{path:"/forgotpassword",component:g}),Object(u.jsx)(l.a,{path:"/resetpassword",component:v}),Object(u.jsx)(l.a,{path:"/register",component:f})]})},t.key)})}})]})})})},S=(s(36),s(37),function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,42)).then((function(t){var s=t.getCLS,a=t.getFID,r=t.getFCP,n=t.getLCP,c=t.getTTFB;s(e),a(e),r(e),n(e),c(e)}))});c.a.render(Object(u.jsx)(w,{}),document.getElementById("root")),S()}},[[38,1,2]]]);
//# sourceMappingURL=main.776e2a71.chunk.js.map