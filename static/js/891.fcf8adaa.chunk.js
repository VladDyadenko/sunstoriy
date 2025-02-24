"use strict";(self.webpackChunksunstoriy=self.webpackChunksunstoriy||[]).push([[891],{4263:(e,t,a)=>{a.d(t,{AE:()=>i,bq:()=>r,iu:()=>n,wS:()=>o});const o=e=>e.children.child,i=e=>e.children.pagination,r=e=>e.children.operetion,n=e=>e.children.marker},7221:(e,t,a)=>{a.d(t,{A:()=>p});var o=a(1529),i=a(2127);const r=o.I4.div`
  position: relative;
  width: 295px;
`,n=o.I4.input`
  border-radius: 24px 24px;
  width: 280px;
  padding: 10px 25px;

  outline: #cfd0d0 1px solid;
  border: none;

  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  &:hover {
    outline: var(--main-green) 1px solid;
  }
  &:focus {
    outline: var(--main-green) 1px solid;
  }

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 16px;
  }
`,s=o.I4.button`
  cursor: pointer;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 100%;
  top: 0;
  right: 15px;
  border-radius: 24px 24px;

  outline: none;
  border: none;

  background-color: var(--bg-main-color);

  &:hover {
    background-color: var(--main-green);
    transition: 0.6s;
    animation: easeIn;
  }

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`,l=(0,o.I4)(i.wrV)`
  width: 25px;
  height: 25px;
  fill: #fff;
`;var c=a(3035),d=a(579);const p=e=>{let{operetion:t,userSearch:a,setUserSearch:o}=e;return(0,d.jsxs)(r,{children:[(0,d.jsx)(n,{type:"text",name:"searchChild",value:a||"",onChange:e=>{const t=e.target.value.trim();o(t),localStorage.setItem("currentChildSearch",t.toString())},placeholder:"\u041f\u043e\u0448\u0443\u043a: \u043f\u043e\u0447\u043d\u0456\u0442\u044c \u0432\u0432\u043e\u0434\u0438\u0442\u0438 \u0456\u043c'\u044f"}),(0,d.jsx)(s,{type:"button",onClick:()=>{o(""),localStorage.setItem("currentChildSearch","")},children:"fatchChildByName"===t?(0,d.jsx)(c.pR,{height:"25",width:"50",color:"#ffffff",wrapperStyle:{display:"flex",alignItems:"center",justifyContent:"center"},visible:!0,ariaLabel:"circles-with-bar-loading"}):(0,d.jsx)(l,{})})]})}},9449:(e,t,a)=>{a.d(t,{BB:()=>s,__:()=>l,s7:()=>n});var o=a(1529),i=a(5475),r=a(2127);const n=o.I4.div`
  margin: 15px auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  gap: 10px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`,s=(0,o.I4)(r.LIJ)`
  width: 20px;
  height: 20px;
  fill: #fff;
  margin-left: 10px;
`,l=(0,o.I4)(i.k2)`
  width: 200px;
  margin: 0 auto;
  padding: 8px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-family: 'RobotoSlab';
  font-weight: 500;
  font-size: 16px;
  border-radius: 8px;
  color: var(--header-main-color);
  background: var(--bg-main-color);
  border: 1px solid var(--bg-main-color);

  cursor: pointer;
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  &:hover {
    background-color: var(--main-green);
    color: var(--header-main-color);
    border: 1px solid transparent;
  }
`},9820:(e,t,a)=>{a.r(t),a.d(t,{default:()=>me});var o=a(5043),i=a(1529),r=a(8168),n=a(8587),s=a(8387),l=a(8610),c=a(6431),d=a(2532),p=a(2372);function u(e){return(0,p.Ay)("MuiPagination",e)}(0,d.A)("MuiPagination",["root","ul","outlined","text"]);var g=a(1052);const h=["boundaryCount","componentName","count","defaultPage","disabled","hideNextButton","hidePrevButton","onChange","page","showFirstButton","showLastButton","siblingCount"];var m=a(7266),x=a(875);function b(e){return(0,p.Ay)("MuiPaginationItem",e)}const v=(0,d.A)("MuiPaginationItem",["root","page","sizeSmall","sizeLarge","text","textPrimary","textSecondary","outlined","outlinedPrimary","outlinedSecondary","rounded","ellipsis","firstLast","previousNext","focusVisible","disabled","selected","icon","colorPrimary","colorSecondary"]);var f=a(2949),y=a(6803),w=a(9662),A=a(579);const C=(0,w.A)((0,A.jsx)("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),"FirstPage"),j=(0,w.A)((0,A.jsx)("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),"LastPage"),S=(0,w.A)((0,A.jsx)("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"NavigateBefore"),k=(0,w.A)((0,A.jsx)("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext");var z=a(4535);const I=["className","color","component","components","disabled","page","selected","shape","size","slots","type","variant"],M=(e,t)=>{const{ownerState:a}=e;return[t.root,t[a.variant],t[`size${(0,y.A)(a.size)}`],"text"===a.variant&&t[`text${(0,y.A)(a.color)}`],"outlined"===a.variant&&t[`outlined${(0,y.A)(a.color)}`],"rounded"===a.shape&&t.rounded,"page"===a.type&&t.page,("start-ellipsis"===a.type||"end-ellipsis"===a.type)&&t.ellipsis,("previous"===a.type||"next"===a.type)&&t.previousNext,("first"===a.type||"last"===a.type)&&t.firstLast]},P=(0,z.Ay)("div",{name:"MuiPaginationItem",slot:"Root",overridesResolver:M})((e=>{let{theme:t,ownerState:a}=e;return(0,r.A)({},t.typography.body2,{borderRadius:16,textAlign:"center",boxSizing:"border-box",minWidth:32,padding:"0 6px",margin:"0 3px",color:(t.vars||t).palette.text.primary,height:"auto",[`&.${v.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity}},"small"===a.size&&{minWidth:26,borderRadius:13,margin:"0 1px",padding:"0 4px"},"large"===a.size&&{minWidth:40,borderRadius:20,padding:"0 10px",fontSize:t.typography.pxToRem(15)})})),$=(0,z.Ay)(f.A,{name:"MuiPaginationItem",slot:"Root",overridesResolver:M})((e=>{let{theme:t,ownerState:a}=e;return(0,r.A)({},t.typography.body2,{borderRadius:16,textAlign:"center",boxSizing:"border-box",minWidth:32,height:32,padding:"0 6px",margin:"0 3px",color:(t.vars||t).palette.text.primary,[`&.${v.focusVisible}`]:{backgroundColor:(t.vars||t).palette.action.focus},[`&.${v.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity},transition:t.transitions.create(["color","background-color"],{duration:t.transitions.duration.short}),"&:hover":{backgroundColor:(t.vars||t).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${v.selected}`]:{backgroundColor:(t.vars||t).palette.action.selected,"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette.action.selectedChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))`:(0,m.X4)(t.palette.action.selected,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:(t.vars||t).palette.action.selected}},[`&.${v.focusVisible}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.action.selectedChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.focusOpacity}))`:(0,m.X4)(t.palette.action.selected,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)},[`&.${v.disabled}`]:{opacity:1,color:(t.vars||t).palette.action.disabled,backgroundColor:(t.vars||t).palette.action.selected}}},"small"===a.size&&{minWidth:26,height:26,borderRadius:13,margin:"0 1px",padding:"0 4px"},"large"===a.size&&{minWidth:40,height:40,borderRadius:20,padding:"0 10px",fontSize:t.typography.pxToRem(15)},"rounded"===a.shape&&{borderRadius:(t.vars||t).shape.borderRadius})}),(e=>{let{theme:t,ownerState:a}=e;return(0,r.A)({},"text"===a.variant&&{[`&.${v.selected}`]:(0,r.A)({},"standard"!==a.color&&{color:(t.vars||t).palette[a.color].contrastText,backgroundColor:(t.vars||t).palette[a.color].main,"&:hover":{backgroundColor:(t.vars||t).palette[a.color].dark,"@media (hover: none)":{backgroundColor:(t.vars||t).palette[a.color].main}},[`&.${v.focusVisible}`]:{backgroundColor:(t.vars||t).palette[a.color].dark}},{[`&.${v.disabled}`]:{color:(t.vars||t).palette.action.disabled}})},"outlined"===a.variant&&{border:t.vars?`1px solid rgba(${t.vars.palette.common.onBackgroundChannel} / 0.23)`:"1px solid "+("light"===t.palette.mode?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),[`&.${v.selected}`]:(0,r.A)({},"standard"!==a.color&&{color:(t.vars||t).palette[a.color].main,border:`1px solid ${t.vars?`rgba(${t.vars.palette[a.color].mainChannel} / 0.5)`:(0,m.X4)(t.palette[a.color].main,.5)}`,backgroundColor:t.vars?`rgba(${t.vars.palette[a.color].mainChannel} / ${t.vars.palette.action.activatedOpacity})`:(0,m.X4)(t.palette[a.color].main,t.palette.action.activatedOpacity),"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette[a.color].mainChannel} / calc(${t.vars.palette.action.activatedOpacity} + ${t.vars.palette.action.focusOpacity}))`:(0,m.X4)(t.palette[a.color].main,t.palette.action.activatedOpacity+t.palette.action.focusOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${v.focusVisible}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette[a.color].mainChannel} / calc(${t.vars.palette.action.activatedOpacity} + ${t.vars.palette.action.focusOpacity}))`:(0,m.X4)(t.palette[a.color].main,t.palette.action.activatedOpacity+t.palette.action.focusOpacity)}},{[`&.${v.disabled}`]:{borderColor:(t.vars||t).palette.action.disabledBackground,color:(t.vars||t).palette.action.disabled}})})})),B=(0,z.Ay)("div",{name:"MuiPaginationItem",slot:"Icon",overridesResolver:(e,t)=>t.icon})((e=>{let{theme:t,ownerState:a}=e;return(0,r.A)({fontSize:t.typography.pxToRem(20),margin:"0 -8px"},"small"===a.size&&{fontSize:t.typography.pxToRem(18)},"large"===a.size&&{fontSize:t.typography.pxToRem(22)})})),R=o.forwardRef((function(e,t){const a=(0,c.b)({props:e,name:"MuiPaginationItem"}),{className:o,color:i="standard",component:d,components:p={},disabled:u=!1,page:g,selected:h=!1,shape:m="circular",size:v="medium",slots:f={},type:w="page",variant:z="text"}=a,M=(0,n.A)(a,I),R=(0,r.A)({},a,{color:i,disabled:u,selected:h,shape:m,size:v,type:w,variant:z}),L=(0,x.I)(),N=(e=>{const{classes:t,color:a,disabled:o,selected:i,size:r,shape:n,type:s,variant:c}=e,d={root:["root",`size${(0,y.A)(r)}`,c,n,"standard"!==a&&`color${(0,y.A)(a)}`,"standard"!==a&&`${c}${(0,y.A)(a)}`,o&&"disabled",i&&"selected",{page:"page",first:"firstLast",last:"firstLast","start-ellipsis":"ellipsis","end-ellipsis":"ellipsis",previous:"previousNext",next:"previousNext"}[s]],icon:["icon"]};return(0,l.A)(d,b,t)})(R),O=(L?{previous:f.next||p.next||k,next:f.previous||p.previous||S,last:f.first||p.first||C,first:f.last||p.last||j}:{previous:f.previous||p.previous||S,next:f.next||p.next||k,first:f.first||p.first||C,last:f.last||p.last||j})[w];return"start-ellipsis"===w||"end-ellipsis"===w?(0,A.jsx)(P,{ref:t,ownerState:R,className:(0,s.A)(N.root,o),children:"\u2026"}):(0,A.jsxs)($,(0,r.A)({ref:t,ownerState:R,component:d,disabled:u,className:(0,s.A)(N.root,o)},M,{children:["page"===w&&g,O?(0,A.jsx)(B,{as:O,ownerState:R,className:N.icon}):null]}))})),L=["boundaryCount","className","color","count","defaultPage","disabled","getItemAriaLabel","hideNextButton","hidePrevButton","onChange","page","renderItem","shape","showFirstButton","showLastButton","siblingCount","size","variant"],N=(0,z.Ay)("nav",{name:"MuiPagination",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,t[a.variant]]}})({}),O=(0,z.Ay)("ul",{name:"MuiPagination",slot:"Ul",overridesResolver:(e,t)=>t.ul})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"});function F(e,t,a){return"page"===e?`${a?"":"Go to "}page ${t}`:`Go to ${e} page`}const T=o.forwardRef((function(e,t){const a=(0,c.b)({props:e,name:"MuiPagination"}),{boundaryCount:o=1,className:i,color:d="standard",count:p=1,defaultPage:m=1,disabled:x=!1,getItemAriaLabel:b=F,hideNextButton:v=!1,hidePrevButton:f=!1,renderItem:y=e=>(0,A.jsx)(R,(0,r.A)({},e)),shape:w="circular",showFirstButton:C=!1,showLastButton:j=!1,siblingCount:S=1,size:k="medium",variant:z="text"}=a,I=(0,n.A)(a,L),{items:M}=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{boundaryCount:t=1,componentName:a="usePagination",count:o=1,defaultPage:i=1,disabled:s=!1,hideNextButton:l=!1,hidePrevButton:c=!1,onChange:d,page:p,showFirstButton:u=!1,showLastButton:m=!1,siblingCount:x=1}=e,b=(0,n.A)(e,h),[v,f]=(0,g.A)({controlled:p,default:i,name:a,state:"page"}),y=(e,t)=>{p||f(t),d&&d(e,t)},w=(e,t)=>{const a=t-e+1;return Array.from({length:a},((t,a)=>e+a))},A=w(1,Math.min(t,o)),C=w(Math.max(o-t+1,t+1),o),j=Math.max(Math.min(v-x,o-t-2*x-1),t+2),S=Math.min(Math.max(v+x,t+2*x+2),C.length>0?C[0]-2:o-1),k=[...u?["first"]:[],...c?[]:["previous"],...A,...j>t+2?["start-ellipsis"]:t+1<o-t?[t+1]:[],...w(j,S),...S<o-t-1?["end-ellipsis"]:o-t>t?[o-t]:[],...C,...l?[]:["next"],...m?["last"]:[]],z=e=>{switch(e){case"first":return 1;case"previous":return v-1;case"next":return v+1;case"last":return o;default:return null}},I=k.map((e=>"number"===typeof e?{onClick:t=>{y(t,e)},type:"page",page:e,selected:e===v,disabled:s,"aria-current":e===v?"true":void 0}:{onClick:t=>{y(t,z(e))},type:e,page:z(e),selected:!1,disabled:s||-1===e.indexOf("ellipsis")&&("next"===e||"last"===e?v>=o:v<=1)}));return(0,r.A)({items:I},b)}((0,r.A)({},a,{componentName:"Pagination"})),P=(0,r.A)({},a,{boundaryCount:o,color:d,count:p,defaultPage:m,disabled:x,getItemAriaLabel:b,hideNextButton:v,hidePrevButton:f,renderItem:y,shape:w,showFirstButton:C,showLastButton:j,siblingCount:S,size:k,variant:z}),$=(e=>{const{classes:t,variant:a}=e,o={root:["root",a],ul:["ul"]};return(0,l.A)(o,u,t)})(P);return(0,A.jsx)(N,(0,r.A)({"aria-label":"pagination navigation",className:(0,s.A)($.root,i),ownerState:P,ref:t},I,{children:(0,A.jsx)(O,{className:$.ul,ownerState:P,children:M.map(((e,t)=>(0,A.jsx)("li",{children:y((0,r.A)({},e,{color:d,"aria-label":b(e.type,e.page,e.selected),shape:w,size:k,variant:z}))},t)))})}))})),E=i.Ay.div`
  width: 100%;
  padding: 15px 0;
  display: flex;
  flex-wrap: wrap;
  align-items: start;
  justify-content: center;
  gap: 30px;
`,V=(0,i.Ay)(T)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0 20px 0;

  .MuiButtonBase-root.MuiPaginationItem-root.MuiPaginationItem-sizeMedium.MuiPaginationItem-text.MuiPaginationItem-circular.MuiPaginationItem-page.css-1xr9krm.Mui-selected {
    background-color: var(--bg-main-color);
    color: var(--header-main-color);
    font-family: 'RobotoSlab';
    font-size: 1rem;
    font-weight: 500;
  }
  .MuiButtonBase-root.MuiPaginationItem-root.MuiPaginationItem-sizeMedium.MuiPaginationItem-text.MuiPaginationItem-circular.MuiPaginationItem-page.css-1xr9krm {
    color: var(--bg-main-color);
    font-size: 1rem;
    font-family: 'RobotoSlab';
    font-weight: 500;
    &:hover {
      background-color: var(--main-green);
      color: var(--header-main-color);
    }
  }
  .MuiSvgIcon-root.MuiSvgIcon-fontSizeMedium.MuiPaginationItem-icon.css-lrb33l {
    color: var(--main-green);
    font-weight: 700;
    &:hover {
      background-color: var(--main-dark-blue);
      color: var(--header-main-color);
    }
  }
`;var W=a(1281),_=a(3035),X=a(2878),q=a(5475),J=a(5206),U=a(1434);const G=i.Ay.div`
  position: relative;
  width: 250px;
  min-height: 300px;
  padding: 15px 10px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2),
    0px 20px 31px 3px rgba(0, 0, 0, 0.14), 0px 8px 38px 7px rgba(0, 0, 0, 0.12);
`,H=(0,i.Ay)(U.op0)`
  width: 20px;
  height: 20px;
  fill: var(--header-main-color);
`,D=(0,i.Ay)(J.Ay)`
  position: absolute;
  width: 30px;
  height: 30px;
  top: -10px;
  right: -10px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: none;
  background-color: #fa4a3b;
  cursor: pointer;

  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  &:hover {
    background-color: #da292b;
  }
`,K=i.Ay.div`
  border-radius: 50%;
  margin-bottom: 10px;
`,Q=i.Ay.img`
  display: block;
  border-radius: 50%;
`,Y=i.Ay.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex: 1;
  margin-bottom: 15px;
`,Z=i.Ay.h4`
  text-align: center;
  color: var(--main-green);
  font-family: 'RobotoSlab';
  font-weight: 500;
  font-size: 18px;
`,ee=(0,i.Ay)(q.k2)`
  width: 70%;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-family: 'RobotoSlab';
  font-weight: 500;
  font-size: 16px;
  border-radius: 8px;
  color: var(--main-dark-blue);
  background: var(--header-main-color);
  border: 1px solid var(--main-dark-blue);

  cursor: pointer;
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  &:hover {
    background: var(--main-dark-blue);
    color: var(--header-main-color);
    border: 1px solid transparent;
  }
`,te=(0,i.Ay)(q.k2)`
  position: absolute;
  width: 30px;
  height: 30px;
  top: 30px;
  right: -10px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border-radius: 50%;
  background-color: var(--bg-main-color);
  cursor: pointer;
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  &:hover {
    background-color: var(--main-green);
    border: none;
  }
`,ae=(0,i.Ay)(U.EaJ)`
  width: 20px;
  height: 20px;
  fill: var(--header-main-color);
`,oe=i.Ay.h4`
  text-align: center;
  color: var(--main-green);
  font-family: 'RobotoSlab';
  font-weight: 400;
  font-size: 18px;
  margin-top: 5px;
  margin-bottom: 5px;
`,ie=a.p+"static/media/children_5.c9deba37ab0f871e149d.png";var re=a(9456),ne=a(585),se=a(4263);const le=function(e){let{child:t}=e;const{childImage:a,name:o,surname:i,_id:r,mather:n,age:s}=t,l=(0,re.wA)(),c=(0,re.d4)(se.bq);return(0,A.jsx)(A.Fragment,{children:(0,A.jsxs)(G,{children:[(0,A.jsx)(K,{children:(0,A.jsx)(Q,{src:a||ie,alt:"children",width:120,height:120})}),(0,A.jsxs)(Y,{children:[(0,A.jsx)(Z,{children:o}),(0,A.jsx)(Z,{children:i}),s&&(0,A.jsxs)(oe,{children:["\u0420\u043e\u043a\u0456\u0432: ",s]}),n&&(0,A.jsxs)(oe,{children:["\u041c\u0430\u043c\u0430: ",n]})]}),(0,A.jsx)(W.A,{title:"\u0412\u0438\u0434\u0430\u043b\u0438\u0442\u0438 \u043a\u0430\u0440\u0442\u043a\u0443",description:"\u0412\u0438 \u0432\u043f\u0435\u0432\u043d\u0435\u043d\u0456, \u0449\u043e \u0445\u043e\u0447\u0435\u0442\u0435 \u0432\u0438\u0434\u0430\u043b\u0438\u0442\u0438 \u0446\u044e \u043a\u0430\u0440\u0442\u043a\u0443?",icon:(0,A.jsx)(X.A,{style:{color:"red"}}),onConfirm:()=>l((0,ne.MJ)(r)),children:(0,A.jsx)(D,{primary:"true",children:c===r?(0,A.jsx)(_.pR,{height:"30",width:"30",color:"#ffffff",wrapperStyle:{},visible:!0,ariaLabel:"circles-with-bar-loading"}):(0,A.jsx)(H,{})})}),(0,A.jsx)(te,{to:`/child/${r}`,children:(0,A.jsx)(ae,{})}),(0,A.jsx)(ee,{to:`/child/${r}?source=buttonViewing`,children:"\u041f\u0435\u0440\u0435\u0433\u043b\u044f\u043d\u0443\u0442\u0438"})]})})};const ce=function(e){let{page:t,setPage:a}=e;const[i,r]=(0,o.useState)(1),n=(0,re.d4)(se.AE),s=(0,re.d4)(se.wS),l=(0,re.d4)(se.iu),c=(0,re.wA)();return(0,o.useEffect)((()=>{r(null===n||void 0===n?void 0:n.pageCount)}),[n]),(0,o.useEffect)((()=>{c((0,ne.st)(t)).then((()=>{window.scrollTo({top:0,behavior:"smooth"})}))}),[c,t]),(0,o.useEffect)((()=>{"fetchChildComplit"===l&&0===s.length&&t>1&&(a(t-1),localStorage.setItem("currentChildrenPage",(t-1).toString()))}),[s.length,l]),(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(E,{children:null===s||void 0===s?void 0:s.map((e=>(0,A.jsx)(le,{child:e},e._id)))}),(0,A.jsx)(V,{count:i||1,page:t,onChange:(e,t)=>{a(t),localStorage.setItem("currentChildrenPage",t.toString())},siblingCount:5,showFirstButton:!0,showLastButton:!0})]})};var de=a(93),pe=a(9449),ue=a(7221);const ge=e=>{let{page:t}=e;const[a,i]=(0,o.useState)((()=>localStorage.getItem("currentChildSearch"))),r=(0,re.wA)(),n=(0,re.d4)(se.bq);return(0,o.useEffect)((()=>{0===(null===a||void 0===a?void 0:a.length)?r((0,ne.st)(t)).then((()=>{window.scrollTo({top:0,behavior:"smooth"})})):(null===a||void 0===a?void 0:a.length)>=1&&r((0,ne.MO)(a))}),[r,t,a]),(0,A.jsxs)(pe.s7,{children:[(0,A.jsx)(ue.A,{operetion:n,userSearch:a,setUserSearch:i}),(0,A.jsxs)(pe.__,{to:"/child",children:["\u0414\u043e\u0434\u0430\u0442\u0438 \u0434\u0438\u0442\u0438\u043d\u0443 ",(0,A.jsx)(pe.BB,{})]})]})},he=i.Ay.h3`
  width: 100%;
  color: var(--main-green);
  font-family: 'RobotoSlab';
  font-weight: 500;
  font-size: 28px;
  text-align: center;
`;const me=function(){const[e,t]=(0,o.useState)((()=>parseInt(localStorage.getItem("currentChildrenPage"))||1));return(0,A.jsx)(A.Fragment,{children:(0,A.jsxs)(de.A,{children:[(0,A.jsx)(ge,{page:e}),(0,A.jsx)(he,{children:"\u041d\u0430\u0448\u0456 \u043c\u0440\u0456\u0439\u043d\u0438\u043a\u0456 \u0442\u0430 \u0444\u0430\u043d\u0442\u0430\u0437\u0435\u0440\u0438"}),(0,A.jsx)(ce,{page:e,setPage:t})]})})}}}]);
//# sourceMappingURL=891.fcf8adaa.chunk.js.map