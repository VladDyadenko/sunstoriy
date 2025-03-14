"use strict";(self.webpackChunksunstoriy=self.webpackChunksunstoriy||[]).push([[575],{2288:(e,t,n)=>{n.d(t,{A:()=>L});var i=n(5475),o=n(5043),s=n(9783),r=n(2252),a=n(945),l=n(1529),d=n(2127);const c=l.Ay.ul`
  width: 50px;
  display: block;
  padding: 0 5px;
  margin-right: 10px;
  @media screen and (min-width: 375.1px) {
    display: block;
  }
`,x=l.Ay.li`
  /* color: var(--main-green); */
  /* background-color: var(--main-blue); */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 8px;
  min-width: 50px;
  height: 90px;
  margin-bottom: 10px;
  color: var(--text-lessons-time);
  background: #fff;
  border: 1px solid #ddd;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.5);
`,p=(l.Ay.li`
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
`),g=l.Ay.li`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  /* background-color: var(--main-blue);
  border: 2px solid var(--main-green); */
  height: 80px;
  min-width: 50px;
  margin-bottom: 10px;
  color: var(--text-lessons-time);
  background: #fff;
  border: 1px solid #ddd;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.5);
`,m=(0,l.Ay)(d.USk)`
  width: 30px;
  height: 30px;
  fill: #a9a9a9;
  transition: cubic-bezier(0.4, 0, 0.2, 1) 100ms;

  &:hover {
    fill: var(--main-dark-blue);
  }
`;var u=n(579);const f=function(e){let{timeLessonOnList:t,officeName:n}=e;const o=JSON.stringify({office:n});return(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)(c,{children:[(0,u.jsx)(g,{children:(0,u.jsx)(i.N_,{to:`/lesson?lessonCopy=${o}`,children:(0,u.jsx)(m,{})})}),null===t||void 0===t?void 0:t.map(((e,t)=>(0,u.jsx)(x,{children:(0,u.jsx)(p,{children:(0,a.sH)(e)})},e+t)))]})})},h=l.Ay.div`
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
`,b=l.Ay.div`
  width: 100%;
  overflow-x: auto;
  padding: 0 10px;
`,y=l.Ay.div`
  width: 100%;
  display: flex;
  align-items: start;
  justify-content: center;
  gap: 15px;
`,w=l.Ay.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 5px;
  font-family: 'RobotoSlab';
  font-weight: 400;
  border-radius: 8px;
  height: 80px;
  /* width: 100%; */
  width: 300px;
  padding: 12px;
  margin-bottom: 10px;
  letter-spacing: 0.1rem;
  /* background-color: var(--main-blue);
  border: 2px solid var(--main-green); */
  color: var(--text-lessons-time);
  color: rgba(0, 0, 0, 0.45);
  background: #fff;
  border: 1px solid #ddd;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.5);
`,j=l.Ay.p`
  font-family: 'RobotoSlab';
  font-weight: 900;
  text-align: center;
  /* color: var(--main-green); */
  /* margin-bottom: 10px; */
`,v=l.Ay.div`
  width: 300px;
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
  height: 90px;
  width: 300px;
  flex-direction: column;
  border-radius: 8px;
  margin-bottom: 10px;
  background: #fff;
  border: 1px solid #ddd;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease-in-out;

  &:hover {
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
    transform: translateY(-2px);
  }
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
`;const L=function(e){let{lessons:t,onLessonsDelete:n,office:l}=e;const[d,c]=(0,o.useState)(null),[x,p]=(0,o.useState)(null),[g,m]=(0,o.useState)(null),L=e=>new Date(e).toLocaleTimeString("en-US",{timeZone:"UTC"});return(0,o.useEffect)((()=>{if(t){const e=(e,t)=>{const n=e.map(L),i=t.map(L);return n[0]===i[0]&&n[1]===i[1]},n=t.map((e=>e.timeLesson)).filter(((t,n,i)=>i.findIndex((n=>e(n,t)))===n)).sort(((e,t)=>{const n=e[0].split("T")[1],i=t[0].split("T")[1];return n.localeCompare(i)}));c(n);const i=[...new Set(t.map((e=>e.dateLesson)))].map((e=>new Date(e))).sort(((e,t)=>e-t)).map((e=>e.toISOString()));p(i);const o=i.map((e=>t.filter((t=>t.dateLesson===e))));m(o)}}),[t]),(0,u.jsxs)(y,{children:[(0,u.jsx)(f,{timeLessonOnList:d,officeName:l}),(0,u.jsx)(b,{children:(0,u.jsx)(h,{children:null===x||void 0===x?void 0:x.map(((e,t)=>(0,u.jsxs)(v,{children:[(0,u.jsxs)(w,{children:[(0,u.jsx)(j,{children:(0,a.tX)(e)}),(0,u.jsx)(j,{children:(0,a.im)(e)})]}),(0,u.jsx)(A,{children:null===d||void 0===d?void 0:d.map(((o,a)=>{const d=g[t].filter((e=>{const t=e.timeLesson.map((e=>{const t=new Date(e);return{hours:t.getHours(),minutes:t.getMinutes(),seconds:t.getSeconds()}})),n=o.map((e=>{const t=new Date(e);return{hours:t.getHours(),minutes:t.getMinutes(),seconds:t.getSeconds()}}));return t.some((e=>n.some((t=>e.hours===t.hours&&e.minutes===t.minutes&&e.seconds===t.seconds))))})),c=d.length>0?d[0]:null;return(0,u.jsx)(S,{"aria-description":c?c.status:"","aria-current":c?c.teacherColor:"",children:c?(0,u.jsx)(r.A,{lesson:c,onLessonsDelete:n}):(0,u.jsx)(i.N_,{to:`/lesson?dateFreeLesson=${e}&officeFreeLesson=${l}&timeFreeLesson=${JSON.stringify(o)}`,children:(0,u.jsx)(s.A,{})})},a)}))})]},t)))})})]})}},2575:(e,t,n)=>{n.r(t),n.d(t,{default:()=>b});var i=n(9456),o=n(5043),s=n(2288),r=n(9615),a=n(93),l=n(7583),d=n(433),c=n(2012),x=n(4502),p=n(7784),g=n(8234),m=n(6673),u=n(89),f=n(5138),h=n(579);const b=()=>{const e=(0,i.d4)(l.w),[t,n]=(0,o.useState)(null),[b,y]=(0,o.useState)([]),[w,j]=(0,o.useState)(null),[v,A]=(0,o.useState)(p.n.getData("Logoped")),[S,L]=(0,o.useState)("\u041f\u0435\u0440\u0456\u043e\u0434"),k=(0,i.wA)();(0,f._)("Logoped",A,d.M,["\u041b\u043e\u0433\u043e\u043f\u0435\u0434"]),(0,m.h)(e,n),(0,u.J)(e,j,b);const N=[{key:1,label:"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438 \u0432\u0456\u0434\u0431\u043e\u0440\u0443",children:(0,h.jsx)(x.A,{pageName:"Logoped",office:"\u041b\u043e\u0433\u043e\u043f\u0435\u0434",type:S,setType:L,setLessonDates:A,dateCurrentLesson:v,teachers:t,teacher:b,setTeacher:y,onLessonsChange:e=>k((0,d.M)(e))})}];return(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)(a.A,{children:[(0,h.jsx)(c.A,{currentItems:N}),0===(null===e||void 0===e?void 0:e.length)&&(0,h.jsx)(g.A,{pageName:"\u041b\u043e\u0433\u043e\u043f\u0435\u0434"}),(0,h.jsx)(r.f,{children:(null===w||void 0===w?void 0:w.length)>0&&(0,h.jsx)(s.A,{lessons:w,onLessonsDelete:e=>k((0,d.x)(e._id)),office:"\u041b\u043e\u0433\u043e\u043f\u0435\u0434"})})]})})}},8234:(e,t,n)=>{n.d(t,{A:()=>c});var i=n(5475),o=n(1529);const s=(0,o.Ay)(i.N_)`
  width: 90%;
  height: 50px;
`,r=o.Ay.div`
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
`;var l=n(9783),d=n(579);const c=e=>{let{pageName:t}=e;const n=JSON.stringify({office:t});return(0,d.jsxs)(r,{children:[(0,d.jsx)(a,{children:"\u0414\u043e\u0434\u0430\u0442\u0438 \u0443\u0440\u043e\u043a:"}),(0,d.jsx)(s,{to:`/lesson?lessonCopy=${n}`,children:(0,d.jsx)(l.A,{})})]})}},9615:(e,t,n)=>{n.d(t,{f:()=>i});const i=n(1529).Ay.div`
  width: 100%;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  gap: 10px;
  background-color: var(--lessons-background);
  margin-top: 10px;
  padding: 20px 5px;
`}}]);
//# sourceMappingURL=575.aaa4afef.chunk.js.map