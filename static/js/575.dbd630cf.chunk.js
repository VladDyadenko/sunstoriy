"use strict";(self.webpackChunksunstoriy=self.webpackChunksunstoriy||[]).push([[575],{89:(e,t,n)=>{n.d(t,{J:()=>i});const{useEffect:o}=n(5043),i=(e,t,n)=>{o((()=>{if(e&&n&&n.length>0){const o=null===e||void 0===e?void 0:e.filter((e=>{const t=`${e.teacherName} ${e.teacherSurname}`;return n.includes(t)}));t(o)}else t(e)}),[e,t,n])}},2288:(e,t,n)=>{n.d(t,{A:()=>L});var o=n(5475),i=n(5043),s=n(9783),r=n(2252),a=n(945),l=n(1529),d=n(2127);const c=l.Ay.ul`
  width: 50px;
  display: block;
  padding: 0 5px;
  margin-right: 10px;
  @media screen and (min-width: 375.1px) {
    display: block;
  }
`,p=l.Ay.li`
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
`,u=(0,l.Ay)(d.USk)`
  width: 30px;
  height: 30px;
  fill: #a9a9a9;
  transition: cubic-bezier(0.4, 0, 0.2, 1) 100ms;

  &:hover {
    fill: var(--main-dark-blue);
  }
`;var m=n(579);const g=function(e){let{timeLessonOnList:t,officeName:n}=e;const i=JSON.stringify({office:n});return(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)(c,{children:[(0,m.jsx)(f,{children:(0,m.jsx)(o.N_,{to:`/lesson?lessonCopy=${i}`,children:(0,m.jsx)(u,{})})}),null===t||void 0===t?void 0:t.map(((e,t)=>(0,m.jsx)(p,{children:(0,m.jsx)(x,{children:(0,a.sH)(e)})},e+t)))]})})},h=l.Ay.div`
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
`,w=l.Ay.p`
  font-family: 'RobotoSlab';
  font-weight: 900;
  text-align: center;
  /* color: var(--main-green); */
  /* margin-bottom: 10px; */
`,j=l.Ay.div`
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
`;const L=function(e){let{lessons:t,onLessonsDelete:n,office:l}=e;const[d,c]=(0,i.useState)(null),[p,x]=(0,i.useState)(null),[f,u]=(0,i.useState)(null),L=e=>new Date(e).toLocaleTimeString("en-US",{timeZone:"UTC"});return(0,i.useEffect)((()=>{if(t){const e=(e,t)=>{const n=e.map(L),o=t.map(L);return n[0]===o[0]&&n[1]===o[1]},n=t.map((e=>e.timeLesson)).filter(((t,n,o)=>o.findIndex((n=>e(n,t)))===n)).sort(((e,t)=>{const n=e[0].split("T")[1],o=t[0].split("T")[1];return n.localeCompare(o)}));c(n);const o=[...new Set(t.map((e=>e.dateLesson)))].map((e=>new Date(e))).sort(((e,t)=>e-t)).map((e=>e.toISOString()));x(o);const i=o.map((e=>t.filter((t=>t.dateLesson===e))));u(i)}}),[t]),(0,m.jsxs)(y,{children:[(0,m.jsx)(g,{timeLessonOnList:d,officeName:l}),(0,m.jsx)(b,{children:(0,m.jsx)(h,{children:null===p||void 0===p?void 0:p.map(((e,t)=>(0,m.jsxs)(j,{children:[(0,m.jsxs)(v,{children:[(0,m.jsx)(w,{children:(0,a.tX)(e)}),(0,m.jsx)(w,{children:(0,a.im)(e)})]}),(0,m.jsx)(A,{children:null===d||void 0===d?void 0:d.map(((i,a)=>{const d=f[t].filter((e=>{const t=e.timeLesson.map((e=>{const t=new Date(e);return{hours:t.getHours(),minutes:t.getMinutes(),seconds:t.getSeconds()}})),n=i.map((e=>{const t=new Date(e);return{hours:t.getHours(),minutes:t.getMinutes(),seconds:t.getSeconds()}}));return t.some((e=>n.some((t=>e.hours===t.hours&&e.minutes===t.minutes&&e.seconds===t.seconds))))})),c=d.length>0?d[0]:null;return(0,m.jsx)(S,{"aria-description":c?c.status:"","aria-current":c?c.teacherColor:"",children:c?(0,m.jsx)(r.A,{lesson:c,onLessonsDelete:n}):(0,m.jsx)(o.N_,{to:`/lesson?dateFreeLesson=${e}&officeFreeLesson=${l}&timeFreeLesson=${JSON.stringify(i)}`,children:(0,m.jsx)(s.A,{})})},a)}))})]},t)))})})]})}},2575:(e,t,n)=>{n.r(t),n.d(t,{default:()=>b});var o=n(9456),i=n(5043),s=n(2288),r=n(9615),a=n(93),l=n(7583),d=n(433),c=n(2012),p=n(4502),x=n(7784),f=n(8234),u=n(6673),m=n(89),g=n(5138),h=n(579);const b=()=>{const e=(0,o.d4)(l.w),[t,n]=(0,i.useState)(null),[b,y]=(0,i.useState)([]),[v,w]=(0,i.useState)(null),[j,A]=(0,i.useState)(x.n.getData("Logoped")),[S,L]=(0,i.useState)("\u041f\u0435\u0440\u0456\u043e\u0434"),k=(0,o.wA)();(0,g._)("Logoped",A,d.M,["\u041b\u043e\u0433\u043e\u043f\u0435\u0434"]),(0,u.h)(e,n),(0,m.J)(e,w,b);const D=[{key:1,label:"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438 \u0432\u0456\u0434\u0431\u043e\u0440\u0443",children:(0,h.jsx)(p.A,{pageName:"Logoped",office:"\u041b\u043e\u0433\u043e\u043f\u0435\u0434",type:S,setType:L,setLessonDates:A,dateCurrentLesson:j,teachers:t,teacher:b,setTeacher:y,onLessonsChange:e=>k((0,d.M)(e))})}];return(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)(a.A,{children:[(0,h.jsx)(c.A,{currentItems:D}),0===(null===e||void 0===e?void 0:e.length)&&(0,h.jsx)(f.A,{pageName:"\u041b\u043e\u0433\u043e\u043f\u0435\u0434"}),(0,h.jsx)(r.f,{children:(null===v||void 0===v?void 0:v.length)>0&&(0,h.jsx)(s.A,{lessons:v,onLessonsDelete:e=>k((0,d.x)(e._id)),office:"\u041b\u043e\u0433\u043e\u043f\u0435\u0434"})})]})})}},5138:(e,t,n)=>{n.d(t,{_:()=>d});var o=n(5043),i=n(9456),s=n(446),r=n.n(s),a=n(7784),l=n(6581);const d=(e,t,n,s)=>{const d=(0,i.wA)();(0,o.useEffect)((()=>{const o=a.n.getData(e);if(o){const e={offices:s,dateCurrentLesson:o};t(o),d(n(e))}else{const i=[r()().startOf("week").format("YYYY-MM-DD"),r()().endOf("week").format("YYYY-MM-DD")],c=new Date(i[0]),p=new Date(i[1]),x=(0,l.Y)(c,p),f=null===x||void 0===x?void 0:x.map((e=>e.valueOf())),u=null===f||void 0===f?void 0:f.map((e=>e.valueOf()));if(t(u),a.n.setData(e,u),u.length>0){d(n({offices:s,dateCurrentLesson:o}))}}}),[d,n,t])}},6673:(e,t,n)=>{n.d(t,{h:()=>i});var o=n(5043);const i=(e,t)=>{(0,o.useEffect)((()=>{const n=Array.from(new Set(null===e||void 0===e?void 0:e.map((e=>`${e.teacherName} ${e.teacherSurname}`))));t(n)}),[e,t])}},8234:(e,t,n)=>{n.d(t,{A:()=>c});var o=n(5475),i=n(1529);const s=(0,i.Ay)(o.N_)`
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
//# sourceMappingURL=575.dbd630cf.chunk.js.map