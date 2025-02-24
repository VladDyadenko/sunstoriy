"use strict";(self.webpackChunksunstoriy=self.webpackChunksunstoriy||[]).push([[990],{4263:(e,t,a)=>{a.d(t,{AE:()=>r,bq:()=>o,iu:()=>n,wS:()=>i});const i=e=>e.children.child,r=e=>e.children.pagination,o=e=>e.children.operetion,n=e=>e.children.marker},5057:(e,t,a)=>{a.d(t,{A:()=>p});var i=a(5043),r=a(1529),o=a(2127);const n=r.Ay.div`
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
`,d=r.Ay.img`
  display: block;
  border-radius: 4px;
`,c=(0,r.Ay)(o.CLX)`
  width: 30px;
  height: 30px;
  fill: #808080;
`;var h=a(579);const p=function(e){let{setFieldValue:t,avatar:a,fileName:r}=e;const o=(0,i.useRef)(null),[p,x]=(0,i.useState)(a);return(0,i.useEffect)((()=>{x(a)}),[a]),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("input",{type:"file",hidden:!0,ref:o,onChange:e=>{const a=e.target.files[0];t(`${r}`,a);const i=new FileReader;i.readAsDataURL(a),i.onload=()=>{x(i.result)}}}),(0,h.jsxs)(s,{children:[p?(0,h.jsx)(d,{src:p,alt:"preview",width:130,height:110}):(0,h.jsx)(n,{children:(0,h.jsx)(c,{})}),(0,h.jsx)(l,{type:"button",onClick:()=>{o.current.click()},children:"\u0414\u043e\u0434\u0430\u0439\u0442\u0435 \u0444\u043e\u0442\u043e"})]})]})}},7990:(e,t,a)=>{a.r(t),a.d(t,{default:()=>O});var i=a(3516),r=a(5043),o=a(3035),n=a(9456),l=a(3216),s=a(1529);const d=(0,s.Ay)(i.lV)`
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
`,c=s.Ay.div`
  display: flex;
  width: 100%;
  gap: 10px;
  margin: 20px 0;

  @media (min-width: 768px) {
    gap: 30px;
  }
`,h=s.Ay.p`
  color: red;
`,p=(0,s.Ay)(i.D0)`
  width: 100%;
  height: 40px;
  max-width: 600px;

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
`,x=s.Ay.div`
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  width: 100%;
  gap: 20px;
`,m=s.Ay.button`
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
`,u=((0,s.Ay)(i.D0)`
  height: 40px;
  max-width: 300px;
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
`,s.Ay.div`
  height: 40px;
  max-width: 100px;
  padding: 5px 20px;
  color: #2a2a2a;
  font-family: 'RobotoSlab';
  font-weight: 500;
  font-size: 18px;
  line-height: normal;
  letter-spacing: -0.28px;
  border: solid 2px var(--bg-main-color);
  border-radius: 6px;
  opacity: 0.8;
  background-color: transparent;
  margin-left: 10px;
  @media (min-width: 768px) {
    margin-left: 0;
  }
`),f=s.Ay.div`
  display: flex;
  align-items: center;
  justify-content: start;
  width: 100%;
  max-width: 600px;
`,g=s.Ay.span`
  display: none;
  margin-left: 25px;
  margin-right: 5px;
  font-family: 'RobotoSlab';
  font-weight: 400;
  font-size: 18px;
  color: #2a2a2a;

  @media (min-width: 768px) {
    display: block;
  }
`,b=(0,s.Ay)(i.D0)`
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
`,y=s.Ay.label`
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
`,w=(0,s.Ay)(i.D0)`
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
    max-width: 285px;
    flex: 1;
  }
`,j=s.Ay.label`
  font-family: 'RobotoSlab';
  font-weight: 500;
  font-size: 16px;
  color: var(--main-green);

  @media (min-width: 768px) {
    width: 110px;
  }
`,v=s.Ay.div`
  padding: 5px 0;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: start;
  gap: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    padding: 15px 0;
    gap: 30px;
  }
`;var A=a(579);const k=function(e){let{title:t,touched:a,errors:i,inputName:r,inputPhone:o}=e;return(0,A.jsx)(A.Fragment,{children:(0,A.jsxs)(v,{children:[(0,A.jsxs)(j,{children:[t," \u0434\u0438\u0442\u0438\u043d\u0438:"]}),(0,A.jsxs)("div",{children:[(0,A.jsx)(w,{name:r,type:"text",placeholder:"\u0406\u043c'\u044f"}),a[r]&&i[r]&&(0,A.jsx)(h,{children:i[r]})]}),(0,A.jsxs)("div",{children:[(0,A.jsx)(w,{name:o,type:"tel",placeholder:"380........"}),a[o]&&i[o]&&(0,A.jsx)(h,{children:i[o]})]})]})})};var S=a(899);const P={name:"",surname:"",birthDate:"",age:"",childImage:"",mather:"",matherPhone:"",father:"",fatherPhone:"",about:"",sensornaya:"",logoped:"",correction:"",tutor:"",rehabilitation:"",childFiles:""},R=S.Ik().shape({name:S.Yj().required("\u0406\u043c'\u044f \u043e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0435!").min(2,"\u0417\u0430\u043a\u043e\u0440\u043e\u0442\u043a\u0435!").max(40,"\u0417\u0430\u0434\u043e\u0432\u0433\u0435!"),surname:S.Yj().min(2,"\u0417\u0430\u043a\u043e\u0440\u043e\u0442\u043a\u0435!").max(40,"\u0417\u0430\u0434\u043e\u0432\u0433\u0435!"),mather:S.Yj().min(2,"\u0417\u0430\u043a\u043e\u0440\u043e\u0442\u043a\u0435!").max(40,"\u0417\u0430\u0434\u043e\u0432\u0433\u0435!"),matherPhone:S.Yj().required("\u041d\u043e\u043c\u0435\u0440 \u043e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0438\u0439!").matches(/^\d{12}$/,"\u041d\u043e\u043c\u0435\u0440 \u043f\u043e\u0432\u0438\u043d\u0435\u043d \u043c\u0456\u0441\u0442\u0438\u0442\u0438 \u0440\u0456\u0432\u043d\u043e 12 \u0446\u0438\u0444\u0440!"),father:S.Yj().min(2,"\u0417\u0430\u043a\u043e\u0440\u043e\u0442\u043a\u0435!").max(40,"\u0417\u0430\u0434\u043e\u0432\u0433\u0435!"),fatherPhone:S.Yj()});var D=a(585),F=a(5057),z=a(4263),C=a(3530),Y=a(5613),I=a(446),V=a.n(I);const N=e=>{let{setFieldValue:t,valueBirthDate:a}=e;const[i,o]=(0,r.useState)(V()());return(0,A.jsx)(A.Fragment,{children:(0,A.jsx)(C.A,{size:"middle",locale:Y.A,format:"DD/MM/YYYY",value:a?V()(a):V()(i),onChange:(e,a)=>{o(null===e||void 0===e?void 0:e.valueOf()),t("birthDate",null===e||void 0===e?void 0:e.valueOf());const i=V()(),r=V()(null===e||void 0===e?void 0:e.valueOf()),n=i.diff(r,"year");t("age",n)}})})};const E=function(e){let{child:t}=e;const[a,s]=(0,r.useState)(P),[w,j]=(0,r.useState)(""),[v,S]=(0,r.useState)(!0),C=(0,l.zy)(),Y=(0,n.d4)(z.bq),I=new URLSearchParams(C.search).get("source");(0,r.useEffect)((()=>{"buttonViewing"===I&&S(!1)}),[I]);const V=(0,l.Zp)(),E=(0,n.wA)();return(0,r.useEffect)((()=>{if(t){const e={name:t.name?t.name:"",surname:t.surname?t.surname:"",birthDate:t.birthDate?t.birthDate:"",age:t.age?t.age:"",childImage:t.childImage?t.childImage:"",mather:t.mather?t.mather:"",matherPhone:t.matherPhone?t.matherPhone:"",father:t.father?t.father:"",fatherPhone:t.fatherPhone?t.fatherPhone:"",about:t.about?t.about:"",sensornaya:t.sensornaya?t.sensornaya:"",logoped:t.logoped?t.logoped:"",correction:t.correction?t.correction:"",tutor:t.tutor?t.tutor:"",reabilitation:t.reabilitation?t.reabilitation:"",childFiles:t.childFiles?t.childFiles:""};s(e),j(e.childImage)}}),[t]),(0,A.jsx)(i.l1,{enableReinitialize:!0,initialValues:a,validationSchema:R,onSubmit:e=>{if(v)if(t){const a={id:t._id,values:e};E((0,D.KB)(a)).then((()=>{V("/children")}))}else E((0,D.oS)(e)).then((()=>{V("/lesson"===I?-1:"/children")}));else V(-1)},children:e=>{let{errors:t,touched:a,values:i,setFieldValue:r}=e;return(0,A.jsxs)(d,{children:[(0,A.jsxs)(c,{children:[(0,A.jsx)(F.A,{avatar:w,fileName:"childImage",setFieldValue:r}),(0,A.jsxs)(x,{children:[(0,A.jsx)(p,{name:"name",type:"text",placeholder:"\u0406\u043c'\u044f"}),a.name&&t.name&&(0,A.jsx)(h,{children:t.name}),(0,A.jsx)(p,{name:"surname",type:"text",placeholder:"\u0424\u0430\u043c\u0456\u043b\u0456\u044f"}),t.surname&&(0,A.jsx)(h,{children:t.surname}),(0,A.jsxs)(f,{children:[(0,A.jsx)(N,{valueBirthDate:i.birthDate,setFieldValue:r}),(0,A.jsx)(g,{children:"\u0420\u043e\u043a\u0456\u0432:"}),(0,A.jsx)(u,{children:i.age})]})]})]}),(0,A.jsx)(k,{title:"\u041c\u0430\u043c\u0430",inputName:"mather",inputPhone:"matherPhone",touched:a,errors:t}),(0,A.jsx)(k,{title:"\u0411\u0430\u0442\u044c\u043a\u043e",inputName:"father",inputPhone:"fatherPhone",touched:a,errors:t}),(0,A.jsx)(y,{children:"\u0417\u0430\u043f\u0438\u0442 \u0431\u0430\u0442\u044c\u043a\u0456\u0432:"}),(0,A.jsx)(b,{name:"about",component:"textarea",rows:6}),(0,A.jsx)(y,{children:"\u0421\u0435\u043d\u0441\u043e\u0440\u043d\u0430:"}),(0,A.jsx)(b,{name:"sensornaya",component:"textarea",rows:6}),(0,A.jsx)(y,{children:"\u041b\u043e\u0433\u043e\u043f\u0435\u0434:"}),(0,A.jsx)(b,{name:"logoped",component:"textarea",rows:6}),(0,A.jsx)(y,{children:"\u041a\u043e\u0440\u0435\u043a\u0446\u0456\u0439\u043d\u0438\u0439 \u043f\u0435\u0434\u0430\u0433\u043e\u0433:"}),(0,A.jsx)(b,{name:"correction",component:"textarea",rows:6}),(0,A.jsx)(y,{children:"\u041f\u0456\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0430 \u0434\u043e \u0448\u043a\u043e\u043b\u0438:"}),(0,A.jsx)(b,{name:"tutor",component:"textarea",rows:6}),(0,A.jsx)(y,{children:"\u0420\u0435\u0430\u0431\u0456\u043b\u0456\u0442\u043e\u043b\u043e\u0433:"}),(0,A.jsx)(b,{name:"reabilitation",component:"textarea",rows:6}),(0,A.jsx)(m,{type:"submit",children:"updateChild"===Y||"addChild"===Y?(0,A.jsx)(o.pR,{height:"21",width:"50",color:"#ffffff",wrapperStyle:{display:"flex",alignItems:"center",justifyContent:"center"},visible:!0,ariaLabel:"circles-with-bar-loading"}):v?"\u0417\u0431\u0435\u0440\u0435\u0433\u0442\u0438 \u0437\u043c\u0456\u043d\u0438":"\u041d\u0430\u0437\u0430\u0434"})]})}})};var q=a(8611),L=a(6213);const B=new AbortController;const O=function(){const{childId:e}=(0,l.g)(),[t,a]=(0,r.useState)("");return(0,r.useEffect)((()=>{if(e)return async function(){try{console.log("Component mounted");const t=await(async e=>{try{const{data:t}=await L.A.get(`/child/children/${e}`);return t}catch(t){console.log(t.message)}})(e);if(!t)return;a(t)}catch(t){q.Notify.failure("Child not found")}}(),()=>{B.abort()}}),[e]),(0,A.jsx)(A.Fragment,{children:(0,A.jsx)(E,{child:t})})}}}]);
//# sourceMappingURL=990.36f28397.chunk.js.map