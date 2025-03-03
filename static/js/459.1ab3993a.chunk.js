"use strict";(self.webpackChunksunstoriy=self.webpackChunksunstoriy||[]).push([[459],{89:(e,t,n)=>{n.d(t,{J:()=>i});const{useEffect:o}=n(5043),i=(e,t,n)=>{o((()=>{if(e&&n&&n.length>0){const o=null===e||void 0===e?void 0:e.filter((e=>{const t=`${e.teacherName} ${e.teacherSurname}`;return n.includes(t)}));t(o)}else t(e)}),[e,t,n])}},2288:(e,t,n)=>{n.d(t,{A:()=>k});var o=n(5475),i=n(5043),s=n(9783),r=n(2252),a=n(945),l=n(1529),d=n(2127);const c=l.Ay.ul`
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
`),f=l.Ay.li`
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
`;var u=n(579);const h=function(e){let{timeLessonOnList:t,officeName:n}=e;const i=JSON.stringify({office:n});return(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)(c,{children:[(0,u.jsx)(f,{children:(0,u.jsx)(o.N_,{to:`/lesson?lessonCopy=${i}`,children:(0,u.jsx)(m,{})})}),null===t||void 0===t?void 0:t.map(((e,t)=>(0,u.jsx)(x,{children:(0,u.jsx)(p,{children:(0,a.sH)(e)})},e+t)))]})})},g=l.Ay.div`
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
`,v=l.Ay.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 5px;
  font-family: 'RobotoSlab';
  font-weight: 400;
  border-radius: 8px;
  height: 80px;
  width: 100%;
  min-width: 200px;
  max-width: 250px;
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
`,w=l.Ay.p`
  font-family: 'RobotoSlab';
  font-weight: 900;
  text-align: center;
  /* color: var(--main-green); */
  /* margin-bottom: 10px; */
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
  height: 90px;
  width: 250px;
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
`;const k=function(e){let{lessons:t,onLessonsDelete:n,office:l}=e;const[d,c]=(0,i.useState)(null),[x,p]=(0,i.useState)(null),[f,m]=(0,i.useState)(null),k=e=>new Date(e).toLocaleTimeString("en-US",{timeZone:"UTC"});return(0,i.useEffect)((()=>{if(t){const e=(e,t)=>{const n=e.map(k),o=t.map(k);return n[0]===o[0]&&n[1]===o[1]},n=t.map((e=>e.timeLesson)).filter(((t,n,o)=>o.findIndex((n=>e(n,t)))===n)).sort(((e,t)=>{const n=e[0].split("T")[1],o=t[0].split("T")[1];return n.localeCompare(o)}));c(n);const o=[...new Set(t.map((e=>e.dateLesson)))].map((e=>new Date(e))).sort(((e,t)=>e-t)).map((e=>e.toISOString()));p(o);const i=o.map((e=>t.filter((t=>t.dateLesson===e))));m(i)}}),[t]),(0,u.jsxs)(y,{children:[(0,u.jsx)(h,{timeLessonOnList:d,officeName:l}),(0,u.jsx)(b,{children:(0,u.jsx)(g,{children:null===x||void 0===x?void 0:x.map(((e,t)=>(0,u.jsxs)(j,{children:[(0,u.jsxs)(v,{children:[(0,u.jsx)(w,{children:(0,a.tX)(e)}),(0,u.jsx)(w,{children:(0,a.im)(e)})]}),(0,u.jsx)(A,{children:null===d||void 0===d?void 0:d.map(((i,a)=>{const d=f[t].filter((e=>{const t=e.timeLesson.map((e=>{const t=new Date(e);return{hours:t.getHours(),minutes:t.getMinutes(),seconds:t.getSeconds()}})),n=i.map((e=>{const t=new Date(e);return{hours:t.getHours(),minutes:t.getMinutes(),seconds:t.getSeconds()}}));return t.some((e=>n.some((t=>e.hours===t.hours&&e.minutes===t.minutes&&e.seconds===t.seconds))))})),c=d.length>0?d[0]:null;return(0,u.jsx)(S,{"aria-description":c?c.status:"","aria-current":c?c.teacherColor:"",children:c?(0,u.jsx)(r.A,{lesson:c,onLessonsDelete:n}):(0,u.jsx)(o.N_,{to:`/lesson?dateFreeLesson=${e}&officeFreeLesson=${l}&timeFreeLesson=${JSON.stringify(i)}`,children:(0,u.jsx)(s.A,{})})},a)}))})]},t)))})})]})}},4459:(e,t,n)=>{n.r(t),n.d(t,{default:()=>y});var o=n(9456),i=n(5043),s=n(7583),r=n(433),a=n(93),l=n(2012),d=n(9615),c=n(2288),x=n(4502),p=n(7784),f=n(8234),m=n(5138),u=n(6673),h=n(89),g=n(579);const b=()=>{const e=(0,o.d4)(s.pN),[t,n]=(0,i.useState)(null),[b,y]=(0,i.useState)([]),[v,w]=(0,i.useState)(null),[j,A]=(0,i.useState)(p.n.getData("Preschool")),[S,k]=(0,i.useState)("\u041f\u0435\u0440\u0456\u043e\u0434"),L=(0,o.wA)();(0,m._)("Preschool",A,r.M,["Preschool"]),(0,u.h)(e,n),(0,h.J)(e,w,b);const D=[{key:1,label:"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438 \u0432\u0456\u0434\u0431\u043e\u0440\u0443",children:(0,g.jsx)(x.A,{pageName:"Preschool",office:"Preschool",type:S,setType:k,setLessonDates:A,dateCurrentLesson:j,teachers:t,teacher:b,setTeacher:y,onLessonsChange:e=>L((0,r.M)(e))})}];return(0,g.jsx)(g.Fragment,{children:(0,g.jsxs)(a.A,{children:[(0,g.jsx)(l.A,{currentItems:D}),0===(null===e||void 0===e?void 0:e.length)&&(0,g.jsx)(f.A,{pageName:"Preschool"}),(0,g.jsx)(d.f,{children:(null===v||void 0===v?void 0:v.length)>0&&(0,g.jsx)(c.A,{lessons:v,onLessonsDelete:e=>L((0,r.x)(e._id)),office:"Preschool"})})]})})},y=(0,i.memo)(b)},5138:(e,t,n)=>{n.d(t,{_:()=>d});var o=n(5043),i=n(9456),s=n(446),r=n.n(s),a=n(7784),l=n(6581);const d=(e,t,n,s)=>{const d=(0,i.wA)();(0,o.useEffect)((()=>{const o=a.n.getData(e);if(o){const e={offices:s,dateCurrentLesson:o};t(o),d(n(e))}else{const i=[r()().startOf("week").format("YYYY-MM-DD"),r()().endOf("week").format("YYYY-MM-DD")],c=new Date(i[0]),x=new Date(i[1]),p=(0,l.Y)(c,x),f=null===p||void 0===p?void 0:p.map((e=>e.valueOf())),m=null===f||void 0===f?void 0:f.map((e=>e.valueOf()));if(t(m),a.n.setData(e,m),m.length>0){d(n({offices:s,dateCurrentLesson:o}))}}}),[d,n,t])}},6673:(e,t,n)=>{n.d(t,{h:()=>i});var o=n(5043);const i=(e,t)=>{(0,o.useEffect)((()=>{const n=Array.from(new Set(null===e||void 0===e?void 0:e.map((e=>`${e.teacherName} ${e.teacherSurname}`))));t(n)}),[e,t])}},8234:(e,t,n)=>{n.d(t,{A:()=>c});var o=n(5475),i=n(1529);const s=(0,i.Ay)(o.N_)`
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
  height: 100vh;
  margin-top: 10px;
  padding: 20px 5px;
`}}]);
//# sourceMappingURL=459.1ab3993a.chunk.js.map