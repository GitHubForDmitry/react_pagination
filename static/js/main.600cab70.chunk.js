(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){e.exports=n(27)},20:function(e,t,n){},22:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(11),s=n.n(c),l=(n(20),n(5)),o=n.n(l),u=n(12),i=n(2),m=n(3),p=(n(22),function(e){var t=e.posts;return r.a.createElement("ul",{className:"list-group mb-4 posts"},t.map(function(e){return r.a.createElement("li",{key:e.id,className:"list-group-item"},e.body)}))}),f=function(e){for(var t=e.postsPerPage,n=e.totalPosts,a=e.paginate,c=e.currentPage,s=[],l=Math.ceil(n/t),o=1;o<=l;o++)s.push(o);var u=function(e){if("prev"===e&&1===c)return 1;if("next"===e&&c===l)return l;switch(e){case"next":return c+=1;case"prev":return c-=1}};return r.a.createElement("div",null,r.a.createElement("nav",null,r.a.createElement("ul",{className:"pagination"},r.a.createElement("li",null,r.a.createElement("button",{onClick:function(){return a(u("prev"))},className:"btn btn-primary mr-5",disabled:1===c},"Prev")),s.map(function(e){return r.a.createElement("li",{key:e,className:"page-item"},r.a.createElement(m.b,{className:"page-link",onClick:function(){return a(e)},to:"/"},e))}),r.a.createElement("li",null,r.a.createElement("button",{onClick:function(){return a(u("next"))},className:"btn btn-primary ml-5",disabled:c===l},"Next")))))},b=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(!1),l=Object(i.a)(s,2),b=l[0],E=l[1],v=Object(a.useState)(1),d=Object(i.a)(v,2),g=d[0],N=d[1],h=Object(a.useState)(10),j=Object(i.a)(h,2),y=j[0],P=j[1];Object(a.useEffect)(function(){!function(){var e=Object(u.a)(o.a.mark(function e(){var t,n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return E(!0),e.next=3,fetch("https://jsonplaceholder.typicode.com/posts");case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,c(n),E(!1);case 9:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()()},[]);var x=g*y,O=x-y,k=n.slice(O,x);return b?r.a.createElement("div",{className:"center spinner-border text-primary",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")):r.a.createElement("div",{className:"container"},r.a.createElement(m.a,null,r.a.createElement("h1",{className:"text-primary mb-3"},"Pagination"),r.a.createElement("select",{className:"form-control",onChange:function(e){P(+e.target.value)}},r.a.createElement("option",{value:10},"10"),r.a.createElement("option",{value:5},"5"),r.a.createElement("option",{value:3},"3")),r.a.createElement(p,{posts:k,loading:b}),r.a.createElement(f,{postsPerPage:y,totalPosts:n.length,paginate:function(e){return N(e)},currentPosts:k,currentPage:g})))};s.a.render(r.a.createElement(b,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.600cab70.chunk.js.map