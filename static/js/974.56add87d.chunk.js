"use strict";(self.webpackChunksunstoriy=self.webpackChunksunstoriy||[]).push([[974],{5057:(e,a,t)=>{t.d(a,{A:()=>x});var i=t(5043),r=t(1529),o=t(2127);const n=r.Ay.div`
  width: 110px;
  height: 110px;
  background-color: #c0c0c0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
`,l=r.Ay.button`
  border-radius: 4px;
  background-color: var(--main-dark-blue);
  color: var(--header-main-color);
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 5px 10px;
  font-family: 'RobotoSlab';
  font-weight: 400;
  font-size: 13px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out,
    border-color 0.3s ease-in-out;

  &:hover,
  &:focus {
    background-color: var(--main-green);
    border-color: var(--header-main-color);
  }
`,s=r.Ay.div`
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`,c=r.Ay.img`
  display: block;
  border-radius: 4px;
`,d=(0,r.Ay)(o.CLX)`
  width: 30px;
  height: 30px;
  fill: #808080;
`;var p=t(579);const x=function(e){let{setFieldValue:a,avatar:t,fileName:r}=e;const o=(0,i.useRef)(null),[x,h]=(0,i.useState)(t);return(0,i.useEffect)((()=>{h(t)}),[t]),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("input",{type:"file",hidden:!0,ref:o,onChange:e=>{const t=e.target.files[0];a(`${r}`,t);const i=new FileReader;i.readAsDataURL(t),i.onload=()=>{h(i.result)}}}),(0,p.jsxs)(s,{children:[x?(0,p.jsx)(c,{src:x,alt:"preview",width:130,height:110}):(0,p.jsx)(n,{children:(0,p.jsx)(d,{})}),(0,p.jsx)(l,{type:"button",onClick:()=>{o.current.click()},children:"\u0414\u043e\u0434\u0430\u0439\u0442\u0435 \u0444\u043e\u0442\u043e"})]})]})}},7974:(e,a,t)=>{t.r(a),t.d(a,{default:()=>Y});var i=t(3216),r=t(8611),o=t(9456),n=t(5043),l=t(3516),s=t(4434),c=t(3035),d=t(899);const p={name:"",surname:"",teacherImage:"",phone:"",email:"",color:"",about:"",specialization:[],salaryRate:Number},x=d.Ik().shape({name:d.Yj().required("\u0406\u043c'\u044f \u043e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0435!").min(2,"\u0417\u0430\u043a\u043e\u0440\u043e\u0442\u043a\u0435!").max(40,"\u0417\u0430\u0434\u043e\u0432\u0433\u0435!"),surname:d.Yj().min(2,"\u0417\u0430\u043a\u043e\u0440\u043e\u0442\u043a\u0435!").max(40,"\u0417\u0430\u0434\u043e\u0432\u0433\u0435!"),price:d.ai(),salaryRate:d.ai().typeError("\u0412\u043a\u0430\u0436\u0456\u0442\u044c \u0434\u0430\u043d\u0456!").required("\u0421\u0442\u0430\u0432\u043a\u0430 \u043e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0430!")}),h=[{value:"\u0421\u043f\u0435\u0446\u0456\u0430\u043b\u0456\u0441\u0442 \u0437 \u0441\u0435\u043d\u0441\u043e\u0440\u043d\u043e\u0457 \u0456\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0456\u0457",label:"\u0421\u043f\u0435\u0446\u0456\u0430\u043b\u0456\u0441\u0442 \u0437 \u0441\u0435\u043d\u0441\u043e\u0440\u043d\u043e\u0457 \u0456\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0456\u0457"},{value:"\u041f\u0441\u0438\u0445\u043e\u043b\u043e\u0433",label:"\u041f\u0441\u0438\u0445\u043e\u043b\u043e\u0433"},{value:"\u041b\u043e\u0433\u043e\u043f\u0435\u0434",label:"\u041b\u043e\u0433\u043e\u043f\u0435\u0434"},{value:"\u041a\u043e\u0440\u0435\u043a\u0446\u0456\u0439\u043d\u0438\u0439 \u043f\u0435\u0434\u0430\u0433\u043e\u0433",label:"\u041a\u043e\u0440\u0435\u043a\u0446\u0456\u0439\u043d\u0438\u0439 \u043f\u0435\u0434\u0430\u0433\u043e\u0433"},{value:"\u041f\u0435\u0434\u0430\u0433\u043e\u0433 \u043f\u043e\u0447\u0430\u0442\u043a\u043e\u0432\u0438\u0445 \u043a\u043b\u0430\u0441\u0456\u0432",label:"\u041f\u0435\u0434\u0430\u0433\u043e\u0433 \u043f\u043e\u0447\u0430\u0442\u043a\u043e\u0432\u0438\u0445 \u043a\u043b\u0430\u0441\u0456\u0432"},{value:"\u0412\u0438\u0445\u043e\u0432\u0430\u0442\u0435\u043b\u044c",label:"\u0412\u0438\u0445\u043e\u0432\u0430\u0442\u0435\u043b\u044c"},{value:"\u041f\u0456\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0430 \u0434\u043e \u0448\u043a\u043e\u043b\u0438",label:"\u041f\u0456\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0430 \u0434\u043e \u0448\u043a\u043e\u043b\u0438"}];var m=t(1529);const u=(0,m.Ay)(l.lV)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 25px 15px 40px 15px;
  width: 375px;

  @media (min-width: 768px) {
    width: 768px;
  }
  @media (min-width: 1280px) {
    width: 1280px;
  }
  @media (min-width: 1440px) {
    width: 1440px;
  }
`,f=m.Ay.p`
  width: 100%;
  font-family: 'RobotoSlab';

  font-weight: 500;
  font-size: 24px;
  color: var(--main-green);
  margin: 0;
  text-align: center;
`,g=m.Ay.div`
  display: flex;
  width: 100%;
  gap: 10px;

  @media (min-width: 768px) {
    gap: 30px;
  }
`,b=m.Ay.div`
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  width: 100%;
  gap: 20px;
`,y=(0,m.Ay)(l.D0)`
  width: 100%;
  height: 40px;
  max-width: 400px;

  padding: 12px 20px;
  color: #2a2a2a;
  font-family: 'RobotoSlab';
  font-weight: 500;
  font-size: 16px;
  line-height: normal;
  letter-spacing: -0.28px;
  border: solid 2px var(--bg-main-color);
  border-radius: 6px;
  opacity: 0.8;
  background-color: transparent;

  &:focus-visible {
    border: solid 2px var(--main-green);
  }
`,w=m.Ay.p`
  color: red;
`,v=m.Ay.label`
  font-family: 'RobotoSlab';
  font-weight: 500;
  font-size: 18px;
  color: var(--main-green);
  margin-bottom: 5px;
  margin-top: 15px;
  text-align: center;

  @media (min-width: 768px) {
    text-align: start;
  }
`,j=m.Ay.label`
  display: flex;
  align-items: center;
  justify-content: start;
  min-width: 130px;
  font-family: 'RobotoSlab';
  font-weight: 500;
  font-size: 18px;
  color: var(--main-green);
  text-align: center;

  @media (min-width: 768px) {
    text-align: start;
  }
`,A=m.Ay.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  gap: 10px;
  text-align: center;
  justify-content: start;
`,R=m.Ay.label`
  display: flex;
  align-items: center;
  justify-content: start;
  font-family: 'RobotoSlab';
  font-weight: 500;
  font-size: 18px;
  color: var(--main-green);
  text-align: center;

  @media (min-width: 768px) {
    text-align: start;
  }
`,S=m.Ay.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: start;
  @media (min-width: 768px) {
    flex-direction: row;
    gap: 10px;
  }
`,z=(0,m.Ay)(l.D0)`
  width: 100%;
  padding: 12px 20px;
  color: #2a2a2a;
  font-family: 'RobotoSlab';
  font-weight: 500;
  font-size: 16px;
  line-height: normal;
  letter-spacing: -0.28px;
  border: solid 2px var(--bg-main-color);
  border-radius: 6px;
  opacity: 0.8;
  background-color: transparent;
  margin-bottom: 20px;

  &:focus-visible {
    border: solid 2px var(--main-green);
  }
`,k=m.Ay.button`
  border-radius: 4px;
  margin: 0 auto;
  width: 200px;
  background-color: var(--bg-main-color);
  color: var(--header-main-color);
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 10px 10px;
  font-family: 'RobotoSlab';
  font-weight: 400;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out,
    border-color 0.3s ease-in-out;

  &:hover,
  &:focus {
    background-color: var(--main-green);
    border-color: var(--header-main-color);
  }
`,C=m.Ay.div`
  width: 100%;
  max-width: 400px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 10px;
`,_=(0,m.Ay)(l.D0)`
  width: 100px;
  border-color: var(--main-green);
  cursor: pointer;
`,I=(0,m.Ay)(l.D0)`
  height: 40px;
  width: 100%;
  padding: 12px 20px;
  color: #2a2a2a;
  font-family: 'RobotoSlab';
  font-weight: 500;
  font-size: 16px;
  line-height: normal;
  letter-spacing: -0.28px;
  border: solid 2px var(--bg-main-color);
  border-radius: 6px;
  opacity: 0.8;
  background-color: transparent;

  &:focus-visible {
    border: solid 2px var(--main-green);
  }

  @media (min-width: 768px) {
    max-width: 400px;
    flex: 1;
  }
`;m.Ay.label`
  font-family: 'RobotoSlab';
  font-weight: 500;
  font-size: 16px;
  color: var(--main-green);

  @media (min-width: 768px) {
    width: 110px;
  }
`;var E=t(5057),F=t(205),V=t(8187),D=t(579);const L=e=>{let{teacher:a}=e;const[t,r]=(0,n.useState)(p),[d,m]=(0,n.useState)(""),[L,N]=(0,n.useState)([]),[Y,q]=(0,n.useState)("#0456BA"),[B,T]=(0,n.useState)(!0),U=(0,o.d4)(V.E),$=(0,i.zy)(),P=new URLSearchParams($.search).get("source");(0,n.useEffect)((()=>{"buttonViewing"===P&&T(!1)}),[P]);const W=(0,o.wA)(),X=(0,i.Zp)();return(0,n.useEffect)((()=>{if(a){const e={name:a.name?a.name:"",surname:a.surname?a.surname:"",salaryRate:a.salaryRate?a.salaryRate:"",teacherImage:a.teacherImage?a.teacherImage:"",phone:a.phone?a.phone:"",email:a.email?a.email:"",color:a.color?a.color:"#0456BA",about:a.about?a.about:"",specialization:a.specialization&&1===a.specialization.length&&""===a.specialization[0].trim()?[]:a.specialization};r(e),m(e.teacherImage),N(e.specialization),q(e.color)}}),[a]),(0,D.jsx)(D.Fragment,{children:(0,D.jsx)(l.l1,{enableReinitialize:!0,initialValues:t,validationSchema:x,onSubmit:e=>{if(B)if(a){const t={id:a._id,values:e};W((0,F.Sp)(t)).then((()=>{X("/teachers")}))}else W((0,F.Yw)(e)).then((()=>{X("/lesson"===P?-1:"/teachers")}));else X(-1),T(!0)},children:e=>{let{errors:a,touched:t,values:i,setFieldValue:r}=e;return(0,D.jsxs)(u,{children:[(0,D.jsx)(f,{children:"\u041a\u0430\u0440\u0442\u043a\u0430 \u0444\u0430\u0445\u0456\u0432\u0446\u044f"}),(0,D.jsxs)(g,{children:[(0,D.jsx)(E.A,{avatar:d,fileName:"teacherImage",setFieldValue:r}),(0,D.jsxs)(b,{children:[(0,D.jsx)(y,{name:"name",type:"text",placeholder:"\u0406\u043c'\u044f"}),t.name&&a.name&&(0,D.jsx)(w,{children:a.name}),(0,D.jsx)(y,{name:"surname",type:"text",placeholder:"\u0424\u0430\u043c\u0456\u043b\u0456\u044f"}),a.surname&&(0,D.jsx)(w,{children:a.surname}),(0,D.jsxs)(C,{children:[(0,D.jsx)(v,{children:"\u041a\u043e\u043b\u0456\u0440 \u0434\u043b\u044f \u0440\u043e\u0437\u043a\u043b\u0430\u0434\u0443:"}),(0,D.jsx)(_,{name:"color",type:"color",value:Y,onChange:e=>{const a=e.target.value;q(a),r("color",a)}})]})]})]}),(0,D.jsxs)(A,{children:[(0,D.jsx)(j,{children:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d:"}),(0,D.jsx)(I,{name:"phone",type:"tel",autoComplete:"off",placeholder:"+380(__)___ __ __"})]}),(0,D.jsxs)(A,{children:[(0,D.jsx)(j,{children:"e-mail:"}),(0,D.jsx)(I,{name:"email",type:"email",autoComplete:"off",placeholder:"example@example.com"})]}),(0,D.jsxs)(A,{children:[(0,D.jsx)(j,{children:"\u0417\u0430\u0440\u043f\u043b\u0430\u0442\u0430"}),(0,D.jsx)(I,{name:"salaryRate",type:"number",autoComplete:"off",placeholder:"\u0432\u043a\u0430\u0436\u0456\u0442\u044c \u0441\u0442\u0430\u0432\u043a\u0443"})]}),t.salaryRate&&a.salaryRate&&(0,D.jsx)(w,{children:a.salaryRate}),(0,D.jsxs)(S,{children:[(0,D.jsx)(R,{children:"\u0421\u043f\u0435\u0446\u0456\u0430\u043b\u0456\u0437\u0430\u0446\u0456\u044f:"}),(0,D.jsx)(s.A,{mode:"multiple",style:{width:"100%",maxWidth:"400px",marginTop:"10px",border:"2px solid #68bf48",borderRadius:"8px"},value:L,onChange:e=>{N(e),r("specialization",e||L)},options:h})]}),(0,D.jsx)(v,{children:"\u0414\u043e\u0434\u0430\u0442\u043a\u043e\u0432\u0430 \u0456\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0456\u044f:"}),(0,D.jsx)(z,{name:"about",component:"textarea",rows:6}),(0,D.jsx)(k,{type:"submit",children:"addTeacher"===U?(0,D.jsx)(c.pR,{height:"21",width:"50",color:"#ffffff",wrapperStyle:{display:"flex",alignItems:"center",justifyContent:"center"},visible:!0,ariaLabel:"circles-with-bar-loading"}):B?"\u0417\u0431\u0435\u0440\u0435\u0433\u0442\u0438 \u0437\u043c\u0456\u043d\u0438":"\u041d\u0430\u0437\u0430\u0434"})]})}})})};var N=t(6213);const Y=()=>{const[e,a]=(0,n.useState)(""),{teacherId:t}=(0,i.g)();return(0,n.useEffect)((()=>{t&&async function(){try{const e=await(async e=>{try{const{data:a}=await N.A.get(`/teacher/teacher/${e}`);return a}catch(a){console.log(a.message)}})(t);if(!e)return;a(e)}catch(e){r.Notify.failure("Child not found")}}()}),[t]),(0,D.jsx)(D.Fragment,{children:(0,D.jsx)(L,{teacher:e})})}},8187:(e,a,t)=>{t.d(a,{E:()=>r,i:()=>i});const i=e=>e.teachers.teacher,r=e=>e.teachers.operetion}}]);
//# sourceMappingURL=974.56add87d.chunk.js.map