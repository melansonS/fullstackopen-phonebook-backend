(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{41:function(e,n,t){},42:function(e,n,t){"use strict";t.r(n);var r=t(17),c=t.n(r),a=t(8),o=t(3),u=t(1),i=t(4),s=t.n(i),l="http://localhost:3001/api/persons",d={getAll:function(){return s.a.get(l).then((function(e){return e.data}))},createPerson:function(e){return s.a.post(l,e).then((function(e){return e.data}))},updatePerson:function(e,n){return s.a.put("".concat(l,"/").concat(e),n).then((function(e){return e.data}))},deletePerson:function(e){return s.a.delete("".concat(l,"/").concat(e)).then((function(e){return e.data}))}},b=t(0),j=function(e){var n=e.searchValue,t=e.setSearchValue;return Object(b.jsxs)("div",{children:["filter shown with",Object(b.jsx)("input",{type:"text",value:n,onChange:function(e){return t(e.target.value)}})]})},h=function(e){var n=e.addPerson,t=e.setNewName,r=e.newName,c=e.setNewNumber,a=e.newNumber;return Object(b.jsxs)("form",{onSubmit:n,children:[Object(b.jsxs)("div",{children:["name:"," ",Object(b.jsx)("input",{required:!0,onChange:function(e){return t(e.target.value)},value:r})]}),Object(b.jsxs)("div",{children:["number:"," ",Object(b.jsx)("input",{required:!0,onChange:function(e){return c(e.target.value)},value:a})]}),Object(b.jsx)("div",{children:Object(b.jsx)("button",{type:"submit",children:"add"})})]})},f=function(e){var n=e.person,t=e.handleDelete;return Object(b.jsxs)("p",{children:[n.name," ",n.number," ",Object(b.jsx)("button",{onClick:function(){return t(n.id,n.name)},children:"delete"})]})},m=function(e){var n=e.peopleToShow,t=e.handleDelete;return Object(b.jsx)(b.Fragment,{children:n.map((function(e){return Object(b.jsx)(f,{person:e,handleDelete:t},e.id)}))})},O=function(e){var n=e.message,t=e.error;return null===n?null:Object(b.jsx)("div",{className:"alert-box ".concat(t?"error":""),children:n})},p=function(){var e=Object(u.useState)([]),n=Object(o.a)(e,2),t=n[0],r=n[1],c=Object(u.useState)(""),i=Object(o.a)(c,2),s=i[0],l=i[1],f=Object(u.useState)(""),p=Object(o.a)(f,2),v=p[0],x=p[1],w=Object(u.useState)(""),N=Object(o.a)(w,2),g=N[0],S=N[1],P=Object(u.useState)(null),k=Object(o.a)(P,2),T=k[0],C=k[1],D=Object(u.useState)(!1),y=Object(o.a)(D,2),L=y[0],V=y[1];Object(u.useEffect)((function(){d.getAll().then((function(e){return r(e)}))}),[]);var A=""===g?t:t.filter((function(e){return e.name.toLocaleLowerCase().includes(g.toLocaleLowerCase())}));return Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:"Phonebook"}),Object(b.jsx)(j,{searchValue:g,setSearchValue:S}),Object(b.jsx)("h3",{children:"Add a new"}),Object(b.jsx)(O,{message:T,error:L}),Object(b.jsx)(h,{addPerson:function(e){e.preventDefault();var n=t.find((function(e){return e.name===s}));if(n){window.confirm("".concat(s," is already added to phonebook, replace the old number with a new one?"))&&d.updatePerson(n.id,Object(a.a)(Object(a.a)({},n),{},{number:v})).then((function(e){V(!1),C("".concat(e.name,"'s number has been updated!")),r(t.map((function(n){return n.id!==e.id?n:e}))),setTimeout((function(){return C(null)}),4e3)})).catch((function(e){V(!0),C("Information on ".concat(n.name," has been removed from the server")),setTimeout((function(){V(!1),C(null)}),4e3)}))}else{var c={name:s,number:v};d.createPerson(c).then((function(e){V(!1),C("".concat(e.name," was added!")),r(t.concat(e)),setTimeout((function(){return C(null)}),4e3)}))}l(""),x("")},setNewName:l,newName:s,setNewNumber:x,newNumber:v}),Object(b.jsx)("h2",{children:"Numbers"}),Object(b.jsx)(m,{peopleToShow:A,handleDelete:function(e,n){window.confirm("Delete ".concat(n," ?"))&&(d.deletePerson(e).then((function(){V(!1),C("".concat(n," has been deleted!")),setTimeout((function(){return C(null)}),4e3)})).catch((function(e){V(!0),C("Information on ".concat(n," has already been removed from the server")),setTimeout((function(){V(!1),C(null)}),4e3)})),r(t.filter((function(n){return n.id!==e}))))}})]})};t(41);c.a.render(Object(b.jsx)(p,{}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.3050e954.chunk.js.map