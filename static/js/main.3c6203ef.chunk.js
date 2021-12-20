(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{13:function(t,e,n){t.exports={filter__text:"Filter_filter__text__2DSWa",filter__input:"Filter_filter__input__2Iawo"}},16:function(t,e,n){t.exports={section:"Section_section__37HnQ",section__title:"Section_section__title__2klMO"}},41:function(t,e,n){},43:function(t,e,n){},44:function(t,e,n){"use strict";n.r(e);var c,a=n(0),r=n.n(a),o=n(10),i=n.n(o),s=n(3),l=n(4),_=n(19),u=n.n(_),b=n(6),d=n(12),m=n(21),j=n(2),f=n(20),O=n.n(f),h={addContact:Object(l.b)("contacts/add",(function(t){var e=t.name,n=t.number;return{payload:{id:O.a.generate(),name:e,number:n}}})),deleteContact:Object(l.b)("contacts/delete"),changeFilter:Object(l.b)("contacts/filter")},p=Object(l.c)([],(c={},Object(d.a)(c,h.addContact,(function(t,e){var n=e.payload;return[].concat(Object(m.a)(t),[n])})),Object(d.a)(c,h.deleteContact,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),c)),x=Object(l.c)("",Object(d.a)({},h.changeFilter,(function(t,e){return e.payload}))),C=Object(j.b)({items:p,filter:x}),v=Object(l.a)({reducer:{contacts:C},middleware:function(t){return t({serializableCheck:{ignoredActions:[b.a,b.f,b.b,b.c,b.d,b.e]}})},myMiddleware:function(t){return function(t){return function(e){console.log("\u041c\u043e\u044f \u043f\u0440\u043e\u0441\u043b\u043e\u0439\u043a\u0430",e),t(e)}}},logger:u.a,devTools:!1}),g=(n(41),n(16)),N=n.n(g),y=n(1);var A=function(t){var e=t.title,n=t.children;return Object(y.jsxs)("section",{className:N.a.section,children:[e&&Object(y.jsx)("h2",{className:N.a.section__title,children:e}),n]})},w=n(17),F=function(t){return t.contacts.items},k=function(t){return t.contacts.filter},z=function(t){var e=F(t),n=k(t).toLowerCase().trim();return e.filter((function(t){return t.name.toLowerCase().includes(n)}))},L=n(5),S=n.n(L);var Z=function(){var t=Object(a.useState)(""),e=Object(w.a)(t,2),n=e[0],c=e[1],r=Object(a.useState)(""),o=Object(w.a)(r,2),i=o[0],l=o[1],_=Object(s.c)(F),u=Object(s.b)(),b=function(t){var e=t.currentTarget,n=e.name,a=e.value;switch(n){case"name":c(a);break;case"number":l(a);break;default:return}},d=function(){c(""),l("")};return Object(y.jsxs)("form",{className:S.a.form,onSubmit:function(t){t.preventDefault(),_.map((function(t){return t.name})).includes(n)?alert("".concat(n," is already in contacts.")):u(h.addContact({name:n,number:i})),d()},children:[Object(y.jsxs)("label",{className:S.a.form__label,children:["Name",Object(y.jsx)("input",{className:S.a.form__input,type:"text",name:"name",value:n,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:b})]}),Object(y.jsxs)("label",{className:S.a.form__label,children:["Number",Object(y.jsx)("input",{className:S.a.form__input,type:"tel",name:"number",value:i,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:b})]}),Object(y.jsx)("button",{className:S.a.form__btn,type:"submit",disabled:!n,children:"Add contact"})]})},M=n(13),q=n.n(M);var B=function(){var t=Object(s.c)(k),e=Object(s.b)();return Object(y.jsxs)("label",{className:q.a.filter__label,children:[Object(y.jsx)("p",{className:q.a.filter__text,children:"Find contacts by name"}),Object(y.jsx)("input",{className:q.a.filter__input,type:"text",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:t,onChange:function(t){return e(h.changeFilter(t.currentTarget.value))}})]})},D=n(7),J=n.n(D);var T=function(){var t=Object(s.c)(z),e=Object(s.b)();return Object(y.jsx)("ul",{className:J.a.contact__list,children:t.map((function(t){var n=t.id,c=t.name,a=t.number;return Object(y.jsxs)("li",{className:J.a.contact__item,children:[Object(y.jsxs)("p",{className:J.a.contact__text,children:[c,":"]}),Object(y.jsx)("p",{className:J.a.contact__text,children:a}),Object(y.jsx)("button",{className:J.a.contact__btn,type:"button",onClick:function(){return function(t){return e(h.deleteContact(t))}(n)},children:"Delete"})]},n)}))})};n(43);var I=function(){return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(A,{title:"Phonebook",children:Object(y.jsx)(Z,{})}),Object(y.jsxs)(A,{title:"Contacts",children:[Object(y.jsx)(B,{}),Object(y.jsx)(T,{})]})]})};i.a.render(Object(y.jsx)(r.a.StrictMode,{children:Object(y.jsx)(s.a,{store:v,children:Object(y.jsx)(I,{})})}),document.getElementById("root"))},5:function(t,e,n){t.exports={form:"ContactForm_form__3wVrG",form__label:"ContactForm_form__label__fmssH",form__input:"ContactForm_form__input__Tocm3",form__btn:"ContactForm_form__btn__t-mIo"}},7:function(t,e,n){t.exports={contact__list:"ContactList_contact__list__1VXB0",contact__item:"ContactList_contact__item__2Dfhq",contact__text:"ContactList_contact__text__1OGAs",contact__btn:"ContactList_contact__btn__2iW0L"}}},[[44,1,2]]]);
//# sourceMappingURL=main.3c6203ef.chunk.js.map