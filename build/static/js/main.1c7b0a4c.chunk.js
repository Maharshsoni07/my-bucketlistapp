(this.webpackJsonptodoapp=this.webpackJsonptodoapp||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var c=n(2),i=n.n(c),s=n(9),a=n.n(s),l=(n(16),n(17),n(11)),j=n(8),r=n(5),o=n(4),u=n(10),d=n(1),b=function(){var e=Object(c.useState)(""),t=Object(r.a)(e,2),n=t[0],i=t[1],s=Object(c.useState)([]),a=Object(r.a)(s,2),b=a[0],m=a[1],O=Object(c.useState)(!0),f=Object(r.a)(O,2),p=f[0],h=f[1],x=Object(c.useState)(null),v=Object(r.a)(x,2),g=v[0],N=v[1],C=function(){if(n)if(n&&!p)m(b.reverse().map((function(e){return e.id===g?Object(j.a)(Object(j.a)({},e),{},{name:n}):e}))),h(!0),i(""),N(null);else{var e={id:(new Date).getTime().toString(),name:n};m([].concat(Object(l.a)(b),[e])),i(""),console.log(n)}else alert("PLEASE FILL YOUR BUCKET LIST !!!")};return Object(d.jsxs)("div",{className:"mainn",children:[Object(d.jsxs)("div",{className:"main ",children:[Object(d.jsx)("div",{className:"submain"}),Object(d.jsx)("figcaption",{className:"captions",children:"WIRTE YOUR BUCKET LIST"})]}),Object(d.jsxs)("div",{className:"Iput_items",children:[Object(d.jsx)("input",{type:"text",placeholder:" Icehotel, Skydiving, Rafting  ....",value:n,onChange:function(e){return i(e.target.value)}}),p?Object(d.jsxs)("i",{children:[Object(d.jsx)(o.b,{className:"plus",size:"2em",title:"Add items",onClick:C})," "]}):Object(d.jsx)(o.a,{className:"update",size:"2em",title:"Update Items",onClick:C})]}),Object(d.jsx)("div",{className:"All-items",children:b.map((function(e){return Object(d.jsxs)("div",{className:"each-items",children:[Object(d.jsx)("h1",{children:e.name}),Object(d.jsxs)("div",{children:[Object(d.jsx)(o.a,{size:"2em",className:"update",title:"Update Items",onClick:function(){return function(e){var t=b.find((function(t){return t.id===e}));console.log(t),h(!1),i(t.name),N(e)}(e.id)}}),Object(d.jsx)(u.a,{size:"2em",className:"delete",title:"Delete Items",onClick:function(){return function(e){var t=b.filter((function(t){return e!==t.id}));m(t)}(e.id)}})]})]},e.id)}))}),Object(d.jsx)("div",{className:"all items ",children:Object(d.jsx)("button",{onClick:function(){m([]),i("")},children:" CLEAR ALL"})})]})};var m=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(b,{})})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),i(e),s(e),a(e)}))};a.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(m,{})}),document.getElementById("root")),O()}},[[19,1,2]]]);
//# sourceMappingURL=main.1c7b0a4c.chunk.js.map