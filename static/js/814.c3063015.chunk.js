"use strict";(self.webpackChunkradiont=self.webpackChunkradiont||[]).push([[814],{2658:function(n,e,t){t.r(e),t.d(e,{Tutorial:function(){return w},default:function(){return L}});var i,r=t(9439),c=t(2791),a=t(1413),s=t(168),l=t.p+"static/media/csharpicon.c928a1354cf9f3a16875.png",o=t.p+"static/media/unityIcon.c6e30764fb3c7ed5e56e.png",d=t(6895),u=t(6444),h=t(184),x=(0,u.ZP)(d.E.div)(i||(i=(0,s.Z)(["\n    box-shadow: ",";\n    border:5px solid ",";\n     .card-text-conteiner{\n        border-top: 5px solid ",";\n    }\n    .card-text-conteiner > h2{\n        color:rgba(45, 52, 54,1.0);\n    }\n    .card:hover{\n    transition: all 0.3s linear;\n    }\n    &:hover .card-text-conteiner{\n        transition: all 0.2s linear;\n        font-size: 20px;\n        color:white;\n        background-color:",";\n    }\n    &:hover .card-text-conteiner> p {\n        display: -webkit-box;\n        font-weight:400;\n        visibility: visible;\n        opacity: 1;\n    }\n    &:hover .card-text-conteiner> h2 {\n        color:white;\n        text-shadow: 1px 1.2px #2d3436;\n    }\n"])),(function(n){return n.color}),(function(n){return n.color}),(function(n){return n.color}),(function(n){return n.color}));var m,f=function(n){var e=n._id,t=n.title,i=n.summary,r=n.cover,c=n.color,a=n.icon;return(0,h.jsx)(x,{layout:!0,initial:{opacity:0,scale:0},animate:{opacity:1,scale:1},exit:{opacity:0,scale:0},transition:{duration:.2},className:"card",color:c,children:(0,h.jsx)("a",{href:"tutorial/post/".concat(e),children:(0,h.jsxs)("div",{className:"card-body",children:[(0,h.jsx)("div",{className:"card-icon-image",children:(0,h.jsx)("img",{src:"Unity"===a?o:l,alt:""})}),(0,h.jsx)("div",{className:"card-image",children:(0,h.jsx)("img",{src:"http://localhost:4000/"+r,alt:""})}),(0,h.jsxs)("div",{className:"card-text-conteiner",children:[(0,h.jsx)("h2",{className:"card-tittle",children:t}),(0,h.jsx)("p",{className:"card-text text-secondary",children:i||"El creador de esta p\xe1gina se olvid\xf3 de agregar contenido en esta secci\xf3n. "})]})]})})})},p=t(1187),j=t(1632),v=t.p+"static/media/QuestionGrey.a33b9aa434193b154c1a.png",g=t(3791),b=function(n){var e=n.lists;return(0,h.jsxs)("div",{className:"miniCard",children:[(0,h.jsx)("div",{className:"headline",children:(0,h.jsx)("h2",{children:"Art\xedculos Recientes"})}),(0,h.jsx)("div",{className:"miniCard-div",children:e.slice(Object.keys(e).length-6,Object.keys(e).length).map((function(n){return(0,h.jsxs)("div",{className:"miniCard-container",children:[(0,h.jsx)("div",{className:"miniCard-img",children:(0,h.jsx)("a",{href:"tutorial/post/".concat(n._id),children:(0,h.jsx)("img",{src:"Unity"===n.icon?o:l,alt:""})})}),(0,h.jsxs)("div",{className:"miniCard-txt",children:[(0,h.jsx)("h2",{children:n.title}),(0,h.jsx)("p",{children:n.summary})]})]})}))})]})},y=t(9806),N=u.ZP.div(m||(m=(0,s.Z)(["\npadding-bottom:1rem;\n.headline{\n    margin-left:1rem;\n}\n.headline > h2{\n    display: inline-block;\n    border-bottom: 3px solid #0984e3;\n}\n .marker-icon{\n    padding-right:0.5rem;\n\n }\n .article-list {\n    box-sizing: border-box;\n    column-count: 1;\n    margin-top:0px;\n    padding:0px;\n}\n.article-list > div {\n    display: list-item;\n    padding-left:1rem;\n    padding-bottom:1rem;\n    list-style-type: none;\n}\n.article-list > p {\n    padding-left:1rem;\n\n}\n .article-list > div > a{\n    text-decoration: none;\n }\n .article-list > div > a:hover{\n    text-decoration: underline;\n }\n @media (min-width: 720px) {\n    .article-list {\n        column-count: 2;\n    }\n\n"]))),k=function(n){var e=n.title,t=n.lists,i=n.marker;return(0,h.jsxs)(N,{children:[(0,h.jsx)("div",{className:"headline",children:(0,h.jsx)("h2",{children:e})}),(0,h.jsx)("div",{children:(0,h.jsx)("ul",{className:"article-list",children:Object.keys(t).length>0?t.map((function(n){return(0,h.jsxs)("div",{children:[(0,h.jsx)(y.G,{icon:i,className:"marker-icon"}),(0,h.jsxs)("a",{href:"tutorial/post/".concat(n._id),id:"".concat(n._id),children:[" ",n.title]})]},n._id)})):(0,h.jsx)("p",{children:"No se escontr\xf3 ning\xfan articulo."})})})]})};var C=function(n){var e=n.search,t=n.language,i=(0,c.useState)([]),s=(0,r.Z)(i,2),l=s[0],o=s[1];(0,c.useEffect)((function(){fetch("http://localhost:4000/post").then((function(n){n.json().then((function(n){o(n)}))})).catch((function(n){console.log("Error getting fake data: "+n)}))}),[]);var u=l.filter((function(n){return""===t&&""===e.toLowerCase()?n:n.icon.toLowerCase().includes(t)&&n.title.toLowerCase().includes(e)}));return function(){var n=0,e=["#55efc4","#81ecec","#74b9ff","#a29bfe","#fab1a0","#fd79a8"];l.forEach((function(t){t.color=e[n],++n>=e.length&&(n=0)}))}(),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(d.E.div,{layout:!0,initial:{opacity:0},animate:{opacity:1},className:"cards",children:(0,h.jsx)(g.M,{children:u.length>0?u.map((function(n){return(0,h.jsx)("div",{className:"cards-conteiner",children:(0,h.jsx)(f,(0,a.Z)({},n))},n._id)})):(0,h.jsxs)(d.E.div,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.2},className:"cards-error",children:[(0,h.jsx)("img",{src:v,alt:""}),(0,h.jsx)("p",{children:"ART\xcdCULO NO ENCONTRADO."})]})})}),(0,h.jsx)("div",{children:(0,h.jsx)(b,{lists:u})}),(0,h.jsx)(k,{title:"Art\xedculos de Unity",marker:p.Vrw,lists:l.filter((function(n){return n.icon.toLowerCase().includes("unity")}))}),(0,h.jsx)(k,{title:"Art\xedculos de C#",marker:j.dT$,lists:l.filter((function(n){return n.icon.toLowerCase().includes("csharp")}))})]})},w=function(n){var e=n.searchText,t=(0,c.useState)(""),i=(0,r.Z)(t,2),a=i[0],s=i[1],l=(0,c.useRef)(),o=(0,c.useRef)(),d=function(n,e){n.currentTarget.classList.contains("selected-button")?(n.currentTarget.classList.remove("selected-button"),s("")):(l.current.classList.remove("selected-button"),o.current.classList.remove("selected-button"),n.currentTarget.classList.add("selected-button"),s(e))};return(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)("div",{className:"tutorial-conteiner",children:[(0,h.jsxs)("div",{className:"buttons",children:[(0,h.jsx)("button",{className:"btn",ref:l,onClick:function(n){return d(n,"unity")},children:"UNITY"}),(0,h.jsx)("button",{className:"btn",ref:o,onClick:function(n){return d(n,"csharp")},children:"C#"})]}),(0,h.jsx)("div",{className:"all-cards-containter",children:(0,h.jsx)(C,{search:e,language:a})})]})})},L=w}}]);
//# sourceMappingURL=814.c3063015.chunk.js.map