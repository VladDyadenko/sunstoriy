"use strict";(self.webpackChunksunstoriy=self.webpackChunksunstoriy||[]).push([[575],{2288:(e,t,n)=>{n.d(t,{A:()=>L});var i=n(5475),o=n(5043),r=n(9783),s=n(2265),a=n(945),l=n(1529),d=n(2127);const c=l.Ay.ul`
  width: 50px;
  display: block;
  padding: 0 5px;
  margin-right: 10px;
  @media screen and (min-width: 375.1px) {
    display: block;
  }
`,p=l.Ay.li`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 8px;
  min-width: 50px;
  height: 80px;
  margin-bottom: 10px;
  background-color: var(--main-blue);
  color: var(--main-green);
  border: 2px solid var(--main-green);
`,x=(l.Ay.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
  background-color: var(--main-blue);
  border: 2px solid var(--main-green);
  height: 70px;
  min-width: 50px;
  margin-bottom: 10px;
`,l.Ay.p`
  font-family: 'RobotoSlab';
  font-weight: 900;
  font-size: 14px;
  width: 100%;
  padding: 5px;
  text-align: center;
`),m=l.Ay.li`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background-color: var(--main-blue);
  border: 2px solid var(--main-green);
  height: 70px;
  min-width: 50px;
  margin-bottom: 10px;
`,u=(0,l.Ay)(d.USk)`
  width: 30px;
  height: 30px;
  fill: #a9a9a9;
  transition: cubic-bezier(0.4, 0, 0.2, 1) 100ms;

  &:hover {
    fill: var(--main-dark-blue);
  }
`;var f=n(579);const h=function(e){let{timeLessonOnList:t,officeName:n}=e;const o=JSON.stringify({office:n});return(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)(c,{children:[(0,f.jsx)(m,{children:(0,f.jsx)(i.N_,{to:`/lesson?lessonCopy=${o}`,children:(0,f.jsx)(u,{})})}),null===t||void 0===t?void 0:t.map(((e,t)=>(0,f.jsx)(p,{children:(0,f.jsx)(x,{children:(0,a.sH)(e)})},e+t)))]})})},g=l.Ay.div`
  width: 100%;
  display: flex;
  align-items: start;
  justify-content: start;
  flex-direction: row;
  gap: 10px;

  @media screen and (min-width: 768px) {
    width: 100%;
    flex-direction: row;
    align-items: center;
  }
`,y=l.Ay.div`
  width: 100%;
  overflow-x: auto;
  padding: 0 10px;
`,b=l.Ay.div`
  width: 100%;
  display: flex;
  align-items: start;
  justify-content: center;
  gap: 15px;
`,v=l.Ay.div`
  font-family: 'RobotoSlab';
  font-weight: 400;
  border-radius: 8px;
  height: 70px;
  width: 100%;
  min-width: 200px;
  max-width: 250px;
  padding: 5px;
  margin-bottom: 10px;
  background-color: var(--main-blue);
  border: 2px solid var(--main-green);
`,w=l.Ay.p`
  font-family: 'RobotoSlab';
  font-weight: 900;
  text-align: center;
  color: var(--main-green);
  margin-bottom: 10px;
`,j=l.Ay.div`
  width: 250px;
  text-align: center;
  border-radius: 8px;
  margin-bottom: 10px;

  @media screen and (min-width: 376px) {
    margin-right: 10px;
  }
`,A=l.Ay.ul``,S=l.Ay.li`
  font-family: 'RobotoSlab';
  font-weight: 400;
  cursor: pointer;
  height: 80px;
  width: 250px;
  flex-direction: column;
  border-radius: 8px;
  margin-bottom: 10px;
  border-width: 2px;
  border-style: solid;
  transition: cubic-bezier(0.4, 0, 0.2, 1) 250ms;
  ${e=>"cancel"===e["aria-description"]?"border-color: #a9a9a9; color: #a9a9a9":e["aria-current"]?`border-color: ${e["aria-current"]}; color:${e["aria-current"]}`:"border-color: #fff; color: #fff"}
`;l.Ay.p`
  font-family: 'RobotoSlab';
  font-weight: 500;
  font-size: 14px;
  padding: 5px;
  text-align: center;
`,l.Ay.ul`
  padding: 0 5px;
  :not(:last-child) {
    margin-right: 5px;
  }
`,l.Ay.li`
  height: 70px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;const L=function(e){let{lessons:t,onLessonsDelete:n,office:l}=e;const[d,c]=(0,o.useState)(null),[p,x]=(0,o.useState)(null),[m,u]=(0,o.useState)(null),L=e=>new Date(e).toLocaleTimeString("en-US",{timeZone:"UTC"});return(0,o.useEffect)((()=>{if(t){const e=(e,t)=>{const n=e.map(L),i=t.map(L);return n[0]===i[0]&&n[1]===i[1]},n=t.map((e=>e.timeLesson)).filter(((t,n,i)=>i.findIndex((n=>e(n,t)))===n)).sort(((e,t)=>{const n=e[0].split("T")[1],i=t[0].split("T")[1];return n.localeCompare(i)}));c(n);const i=[...new Set(t.map((e=>e.dateLesson)))].map((e=>new Date(e))).sort(((e,t)=>e-t)).map((e=>e.toISOString()));x(i);const o=i.map((e=>t.filter((t=>t.dateLesson===e))));u(o)}}),[t]),(0,f.jsxs)(b,{children:[(0,f.jsx)(h,{timeLessonOnList:d,officeName:l}),(0,f.jsx)(y,{children:(0,f.jsx)(g,{children:null===p||void 0===p?void 0:p.map(((e,t)=>(0,f.jsxs)(j,{children:[(0,f.jsxs)(v,{children:[(0,f.jsx)(w,{children:(0,a.tX)(e)}),(0,f.jsx)(w,{children:(0,a.im)(e)})]}),(0,f.jsx)(A,{children:null===d||void 0===d?void 0:d.map(((o,a)=>{const d=m[t].filter((e=>{const t=e.timeLesson.map((e=>{const t=new Date(e);return{hours:t.getHours(),minutes:t.getMinutes(),seconds:t.getSeconds()}})),n=o.map((e=>{const t=new Date(e);return{hours:t.getHours(),minutes:t.getMinutes(),seconds:t.getSeconds()}}));return t.some((e=>n.some((t=>e.hours===t.hours&&e.minutes===t.minutes&&e.seconds===t.seconds))))})),c=d.length>0?d[0]:null;return(0,f.jsx)(S,{"aria-description":c?c.status:"","aria-current":c?c.teacherColor:"",children:c?(0,f.jsx)(s.A,{lesson:c,onLessonsDelete:n}):(0,f.jsx)(i.N_,{to:`/lesson?dateFreeLesson=${e}&officeFreeLesson=${l}&timeFreeLesson=${JSON.stringify(o)}`,children:(0,f.jsx)(r.A,{})})},a)}))})]},t)))})})]})}},2575:(e,t,n)=>{n.r(t),n.d(t,{default:()=>y});var i=n(9456),o=n(5043),r=n(446),s=n.n(r),a=n(2288),l=n(9615),d=n(93),c=n(7583),p=n(6581),x=n(433),m=n(2012),u=n(4502),f=n(7784),h=n(8234),g=n(579);const y=()=>{const e=(0,i.d4)(c.w),[t,n]=(0,o.useState)(null),[r,y]=(0,o.useState)([]),[b,v]=(0,o.useState)(null),[w,j]=(0,o.useState)(f.n.getData("Logoped")),[A,S]=(0,o.useState)("\u041f\u0435\u0440\u0456\u043e\u0434"),L=(0,i.wA)();(0,o.useEffect)((()=>{const e=f.n.getData("Logoped");if(e)j(e),L((0,x.gd)(e));else{const e=[s()().startOf("week").format("YYYY-MM-DD"),s()().endOf("week").format("YYYY-MM-DD")],t=new Date(e[0]),n=new Date(e[1]),i=(0,p.Y)(t,n),o=null===i||void 0===i?void 0:i.map((e=>e.valueOf())),r=null===o||void 0===o?void 0:o.map((e=>e.valueOf()));j(r),f.n.setData("Logoped",r),r.length>0&&L((0,x.gd)(r))}}),[L]),(0,o.useEffect)((()=>{const t=Array.from(new Set(null===e||void 0===e?void 0:e.map((e=>`${e.teacherName} ${e.teacherSurname}`))));n(t)}),[e]),(0,o.useEffect)((()=>{if(e&&r&&r.length>0){const t=null===e||void 0===e?void 0:e.filter((e=>{const t=`${e.teacherName} ${e.teacherSurname}`;return r.includes(t)}));v(t)}else v(e)}),[e,r]);const D=[{key:1,label:"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438 \u0432\u0456\u0434\u0431\u043e\u0440\u0443",children:(0,g.jsx)(u.A,{pageName:"Logoped",type:A,setType:S,setLessonDates:j,dateCurrentLesson:w,teachers:t,teacher:r,setTeacher:y,onLessonsChange:e=>L((0,x.gd)(e))})}];return(0,g.jsx)(g.Fragment,{children:(0,g.jsxs)(d.A,{children:[(0,g.jsx)(m.A,{currentItems:D}),0===(null===e||void 0===e?void 0:e.length)&&(0,g.jsx)(h.A,{pageName:"\u041b\u043e\u0433\u043e\u043f\u0435\u0434"}),(0,g.jsx)(l.f,{children:(null===b||void 0===b?void 0:b.length)>0&&(0,g.jsx)(a.A,{lessons:b,onLessonsDelete:e=>L((0,x.Sn)(e._id)),office:"\u041b\u043e\u0433\u043e\u043f\u0435\u0434"})})]})})}},8234:(e,t,n)=>{n.d(t,{A:()=>c});var i=n(5475),o=n(1529);const r=(0,o.Ay)(i.N_)`
  width: 90%;
  height: 50px;
`,s=o.Ay.div`
  width: 100%;
  min-height: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin: 10px 0;
`,a=o.Ay.p`
  font-family: 'RobotoSlab';
  font-weight: 500;
  font-size: 20px;
  color: var(--main-dark-blue);
`;var l=n(9783),d=n(579);const c=e=>{let{pageName:t}=e;const n=JSON.stringify({office:t});return(0,d.jsxs)(s,{children:[(0,d.jsx)(a,{children:"\u0414\u043e\u0434\u0430\u0442\u0438 \u0443\u0440\u043e\u043a:"}),(0,d.jsx)(r,{to:`/lesson?lessonCopy=${n}`,children:(0,d.jsx)(l.A,{})})]})}},9615:(e,t,n)=>{n.d(t,{f:()=>i});const i=n(1529).Ay.div`
  width: 100%;
  padding: 5px 5px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  gap: 10px;
`}}]);
//# sourceMappingURL=575.d07bb201.chunk.js.map