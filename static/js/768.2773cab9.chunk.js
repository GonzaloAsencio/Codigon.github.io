"use strict";(self.webpackChunkradiont=self.webpackChunkradiont||[]).push([[768],{1768:function(n,r,o){o.r(r),o.d(r,{default:function(){return u}});var e=o(9439),t=o(2791),i=o(7689),a=o(1087),c=o(8044),s=o(659),d=o(184);function u(){var n=(0,t.useState)(null),r=(0,e.Z)(n,2),o=r[0],u=r[1],l=(0,t.useContext)(c.S).userInfo,f=(0,i.UO)().id;return(0,t.useEffect)((function(){fetch("http://localhost:4000/post/".concat(f)).then((function(n){n.json().then((function(n){u(n)}))}))}),[]),o?(0,d.jsxs)("div",{className:"post-container",children:[(0,d.jsx)("h2",{children:o.title}),(0,d.jsx)("div",{className:"post-summary",children:(0,d.jsx)("h4",{children:o.summary})}),(0,d.jsxs)("div",{className:"author",children:["Hecho por ",o.author.username]}),l.id===o.author._id&&(0,d.jsx)("div",{className:"edit-row",children:(0,d.jsxs)(a.rU,{className:"edit-btn",to:"/edit/".concat(o._id),children:[(0,d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6"}),"Edit this post"]})}),(0,d.jsx)("div",{className:"post-image",children:(0,d.jsx)("img",{src:"http://localhost:4000/".concat(o.cover),alt:""})}),(0,d.jsx)("div",{className:"content",dangerouslySetInnerHTML:{__html:o.content}}),(0,d.jsx)("div",{className:"post-button",children:(0,d.jsx)(s.Z,{text:"VER MAS TUTORIALES",path:"/tutorial"})})]}):""}},659:function(n,r,o){var e,t=o(168),i=(o(2791),o(7689)),a=o(6444),c=o(184),s={primary:{background:"#fdcb6e",borderColor:"#fdcb6e",backgroundDisabled:"#ffffff",colorDisabled:"#fdcb6e",backgroundHover:"#ffeaa7",backgroundColorHover:"#fdcb6e",color:"#ffffff"},secondary:{background:"#ffffff",borderColor:"#6c5ce7",backgroundDisabled:"#9B9B9B",backgroundHover:"#a29bfe",color:"#6c5ce7",backgroundColorHover:"#ffffff",colorDisabled:"#ffffff"}},d=a.ZP.button(e||(e=(0,t.Z)(["\n  background-color: ",";\n  border-radius: 0.5rem;\n  border: 1px solid ",";\n  cursor: ",";\n  color: ",";\n  padding: ",";\n  font-size: 1rem;\n  border-radius: 0.5rem;\n  font-weight: bold;\n  transition: background-color 0.25s ease-out;\n  &:active {\n    background-color: ",";\n    color: ",";\n  }\n  &:hover {\n    background-color: ",";\n    color: ",";\n  }\n  &:disabled {\n    background-color: ",";\n    color: ",";\n  }\n  @media (min-width: 720px) {\n    font-size: ",";\n  }\n"])),(function(n){return s[n.variant].background}),(function(n){return s[n.variant].borderColor}),(function(n){return n.disabled?"default":"pointer"}),(function(n){return s[n.variant].color}),(function(n){return"big"===n.size?"1.2rem 2rem":"medium"===n.size?"1.5rem 1.5rem":"1rem 1.2rem"}),(function(n){return s[n.variant].backgroundHover}),(function(n){return s[n.variant].backgroundColorHover}),(function(n){return s[n.variant].backgroundHover}),(function(n){return s[n.variant].backgroundColorHover}),(function(n){return s[n.variant].backgroundDisabled}),(function(n){return s[n.variant].colorDisabled}),(function(n){return"big"===n.textSizee?"2.3rem":"medium"===n.textSize?"1.8rem":"1.6rem"})),u=function(n){var r=n.text,o=n.variant,e=n.onClick,t=n.disabled,a=n.size,s=n.textSize,u=n.path,l=(0,i.s0)();return(0,c.jsx)("div",{children:(0,c.jsx)(d,{onClick:function(){void 0!==u?l(u):e()},disabled:t,size:a,textSize:s,variant:o,path:!0,children:r})})};u.defaultProps={onClick:function(){},isDisabled:!1,variant:"primary"},r.Z=u}}]);
//# sourceMappingURL=768.2773cab9.chunk.js.map