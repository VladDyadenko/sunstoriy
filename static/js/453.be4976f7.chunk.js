"use strict";(self.webpackChunksunstoriy=self.webpackChunksunstoriy||[]).push([[453],{2288:(e,t,n)=>{n.d(t,{A:()=>k});var o=n(5475),i=n(5043),s=n(9783),r=n(7738),a=n(1529),l=n(2127);const d=a.Ay.ul`
  width: 50px;
  display: block;
  padding: 0 5px;
  margin-right: 10px;
  @media screen and (min-width: 375.1px) {
    display: block;
  }
`,c=a.Ay.li`
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
`,x=(a.Ay.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
  background-color: var(--main-blue);
  border: 2px solid var(--main-green);
  height: 70px;
  min-width: 50px;
  margin-bottom: 10px;
`,a.Ay.p`
  font-family: 'RobotoSlab';
  font-weight: 900;
  font-size: 14px;
  width: 100%;
  padding: 5px;
  text-align: center;
`),p=a.Ay.li`
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
`,m=(0,a.Ay)(l.USk)`
  width: 30px;
  height: 30px;
  fill: #a9a9a9;
  transition: cubic-bezier(0.4, 0, 0.2, 1) 100ms;

  &:hover {
    fill: var(--main-dark-blue);
  }
`;var u=n(2142),h=n(579);const g=function(e){let{timeLessonOnList:t,officeName:n}=e;const i=JSON.stringify({office:n});return(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)(d,{children:[(0,h.jsx)(p,{children:(0,h.jsx)(o.N_,{to:`/lesson?lessonCopy=${i}`,children:(0,h.jsx)(m,{})})}),null===t||void 0===t?void 0:t.map(((e,t)=>(0,h.jsx)(c,{children:(0,h.jsx)(x,{children:(0,u.sH)(e)})},e+t)))]})})},f=a.Ay.div`
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
`,b=a.Ay.div`
  width: 100%;
  overflow-x: auto;
  padding: 0 10px;
`,y=a.Ay.div`
  width: 100%;
  display: flex;
  align-items: start;
  justify-content: center;
  gap: 15px;
`,w=a.Ay.div`
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
`,j=a.Ay.p`
  font-family: 'RobotoSlab';
  font-weight: 900;
  text-align: center;
  /* color: var(--main-green); */
  /* margin-bottom: 10px; */
`,v=a.Ay.div`
  width: 300px;
  text-align: center;
  border-radius: 8px;
  margin-bottom: 10px;

  @media screen and (min-width: 376px) {
    margin-right: 10px;
  }
`,A=a.Ay.ul``,S=a.Ay.li`
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
`;a.Ay.p`
  font-family: 'RobotoSlab';
  font-weight: 500;
  font-size: 14px;
  padding: 5px;
  text-align: center;
`,a.Ay.ul`
  padding: 0 5px;
  :not(:last-child) {
    margin-right: 5px;
  }
`,a.Ay.li`
  height: 70px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;const k=function(e){let{lessons:t,onLessonsDelete:n,office:a}=e;const[l,d]=(0,i.useState)(null),[c,x]=(0,i.useState)(null),[p,m]=(0,i.useState)(null),k=e=>new Date(e).toLocaleTimeString("en-US",{timeZone:"UTC"});return(0,i.useEffect)((()=>{if(t){const e=(e,t)=>{const n=e.map(k),o=t.map(k);return n[0]===o[0]&&n[1]===o[1]},n=t.map((e=>e.timeLesson)).filter(((t,n,o)=>o.findIndex((n=>e(n,t)))===n)).sort(((e,t)=>{const n=e[0].split("T")[1],o=t[0].split("T")[1];return n.localeCompare(o)}));d(n);const o=[...new Set(t.map((e=>e.dateLesson)))].map((e=>new Date(e))).sort(((e,t)=>e-t)).map((e=>e.toISOString()));x(o);const i=o.map((e=>t.filter((t=>t.dateLesson===e))));m(i)}}),[t]),(0,h.jsxs)(y,{children:[(0,h.jsx)(g,{timeLessonOnList:l,officeName:a}),(0,h.jsx)(b,{children:(0,h.jsx)(f,{children:null===c||void 0===c?void 0:c.map(((e,t)=>(0,h.jsxs)(v,{children:[(0,h.jsxs)(w,{children:[(0,h.jsx)(j,{children:(0,u.tX)(e)}),(0,h.jsx)(j,{children:(0,u.im)(e)})]}),(0,h.jsx)(A,{children:null===l||void 0===l?void 0:l.map(((i,l)=>{const d=p[t].filter((e=>{const t=e.timeLesson.map((e=>{const t=new Date(e);return{hours:t.getHours(),minutes:t.getMinutes(),seconds:t.getSeconds()}})),n=i.map((e=>{const t=new Date(e);return{hours:t.getHours(),minutes:t.getMinutes(),seconds:t.getSeconds()}}));return t.some((e=>n.some((t=>e.hours===t.hours&&e.minutes===t.minutes&&e.seconds===t.seconds))))})),c=d.length>0?d[0]:null;return(0,h.jsx)(S,{"aria-description":c?c.status:"","aria-current":c?c.teacherColor:"",children:c?(0,h.jsx)(r.A,{lesson:c,onLessonsDelete:n}):(0,h.jsx)(o.N_,{to:`/lesson?dateFreeLesson=${e}&officeFreeLesson=${a}&timeFreeLesson=${JSON.stringify(i)}`,children:(0,h.jsx)(s.A,{})})},l)}))})]},t)))})})]})}},5453:(e,t,n)=>{n.r(t),n.d(t,{default:()=>y});var o=n(9456),i=n(5043),s=n(7583),r=n(433),a=n(93),l=n(2012),d=n(9615),c=n(2288),x=n(4502),p=n(7784),m=n(8234),u=n(5138),h=n(6673),g=n(89),f=n(579);const b=()=>{const e=(0,o.d4)(s.xZ),[t,n]=(0,i.useState)(null),[b,y]=(0,i.useState)([]),[w,j]=(0,i.useState)(null),[v,A]=(0,i.useState)(p.n.getData("PreschoolInclusion")),[S,k]=(0,i.useState)("\u041f\u0435\u0440\u0456\u043e\u0434"),L=(0,o.wA)();(0,u._)("PreschoolInclusion",A,r.M,["Preschool-\u0456\u043d\u043a\u043b\u044e\u0437\u0456\u044f"]),(0,h.h)(e,n),(0,g.J)(e,j,b);const N=[{key:1,label:"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438 \u0432\u0456\u0434\u0431\u043e\u0440\u0443",children:(0,f.jsx)(x.A,{pageName:"PreschoolInclusion",office:"Preschool-\u0456\u043d\u043a\u043b\u044e\u0437\u0456\u044f",type:S,setType:k,setLessonDates:A,dateCurrentLesson:v,teachers:t,teacher:b,setTeacher:y,onLessonsChange:e=>L((0,r.M)(e))})}];return(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)(a.A,{children:[(0,f.jsx)(l.A,{currentItems:N}),0===(null===e||void 0===e?void 0:e.length)&&(0,f.jsx)(m.A,{pageName:"Preschool-\u0456\u043d\u043a\u043b\u044e\u0437\u0456\u044f"}),(0,f.jsx)(d.f,{children:(null===w||void 0===w?void 0:w.length)>0&&(0,f.jsx)(c.A,{lessons:w,onLessonsDelete:e=>L((0,r.x)(e._id)),office:"Preschool-\u0456\u043d\u043a\u043b\u044e\u0437\u0456\u044f"})})]})})},y=(0,i.memo)(b)},8234:(e,t,n)=>{n.d(t,{A:()=>c});var o=n(5475),i=n(1529);const s=(0,i.Ay)(o.N_)`
  width: 90%;
  height: 50px;
`,r=i.Ay.div`
  width: 100%;
  min-height: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin: 10px 0;
`,a=i.Ay.p`
  font-family: 'RobotoSlab';
  font-weight: 500;
  font-size: 20px;
  color: var(--main-dark-blue);
`;var l=n(9783),d=n(579);const c=e=>{let{pageName:t}=e;const n=JSON.stringify({office:t});return(0,d.jsxs)(r,{children:[(0,d.jsx)(a,{children:"\u0414\u043e\u0434\u0430\u0442\u0438 \u0443\u0440\u043e\u043a:"}),(0,d.jsx)(s,{to:`/lesson?lessonCopy=${n}`,children:(0,d.jsx)(l.A,{})})]})}},9615:(e,t,n)=>{n.d(t,{f:()=>o});const o=n(1529).Ay.div`
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
//# sourceMappingURL=453.be4976f7.chunk.js.map