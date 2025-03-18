"use strict";(self.webpackChunksunstoriy=self.webpackChunksunstoriy||[]).push([[644],{4263:(e,t,i)=>{i.d(t,{AE:()=>r,bq:()=>n,iu:()=>o,wS:()=>a});const a=e=>e.children.child,r=e=>e.children.pagination,n=e=>e.children.operetion,o=e=>e.children.marker},5057:(e,t,i)=>{i.d(t,{A:()=>h});var a=i(5043),r=i(1529),n=i(2127);const o=r.Ay.div`
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
`,c=(0,r.Ay)(n.CLX)`
  width: 30px;
  height: 30px;
  fill: #808080;
`;var p=i(579);const h=function(e){let{setFieldValue:t,avatar:i,fileName:r}=e;const n=(0,a.useRef)(null),[h,x]=(0,a.useState)(i);return(0,a.useEffect)((()=>{x(i)}),[i]),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("input",{type:"file",hidden:!0,ref:n,onChange:e=>{const i=e.target.files[0];t(`${r}`,i);const a=new FileReader;a.readAsDataURL(i),a.onload=()=>{x(a.result)}}}),(0,p.jsxs)(s,{children:[h?(0,p.jsx)(d,{src:h,alt:"preview",width:130,height:110}):(0,p.jsx)(o,{children:(0,p.jsx)(c,{})}),(0,p.jsx)(l,{type:"button",onClick:()=>{n.current.click()},children:"\u0414\u043e\u0434\u0430\u0439\u0442\u0435 \u0444\u043e\u0442\u043e"})]})]})}},6644:(e,t,i)=>{i.r(t),i.d(t,{default:()=>ne});var a=i(3516),r=i(5043),n=i(3035),o=i(9456),l=i(3216),s=i(1529);const d=(0,s.Ay)(a.lV)`
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
`,p=s.Ay.p`
  color: red;
`,h=(0,s.Ay)(a.D0)`
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
`,u=((0,s.Ay)(a.D0)`
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
`,b=(0,s.Ay)(a.D0)`
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
`,v=(0,s.Ay)(a.D0)`
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
`,w=s.Ay.label`
  font-family: 'RobotoSlab';
  font-weight: 500;
  font-size: 16px;
  color: var(--main-green);

  @media (min-width: 768px) {
    width: 110px;
  }
`,j=s.Ay.div`
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
`;var A=i(579);const S=function(e){let{title:t,touched:i,errors:a,inputName:r,inputPhone:n}=e;return(0,A.jsx)(A.Fragment,{children:(0,A.jsxs)(j,{children:[(0,A.jsxs)(w,{children:[t," \u0434\u0438\u0442\u0438\u043d\u0438:"]}),(0,A.jsxs)("div",{children:[(0,A.jsx)(v,{name:r,type:"text",placeholder:"\u0406\u043c'\u044f"}),i[r]&&a[r]&&(0,A.jsx)(p,{children:a[r]})]}),(0,A.jsxs)("div",{children:[(0,A.jsx)(v,{name:n,type:"tel",placeholder:"380........"}),i[n]&&a[n]&&(0,A.jsx)(p,{children:a[n]})]})]})})};var k=i(899);const F={name:"",surname:"",birthDate:"",age:"",childImage:"",mather:"",matherPhone:"",father:"",fatherPhone:"",about:"",sensornaya:"",logoped:"",correction:"",tutor:"",rehabilitation:"",childFiles:""},P=k.Ik().shape({name:k.Yj().required("\u0406\u043c'\u044f \u043e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0435!").min(2,"\u0417\u0430\u043a\u043e\u0440\u043e\u0442\u043a\u0435!").max(40,"\u0417\u0430\u0434\u043e\u0432\u0433\u0435!"),surname:k.Yj().min(2,"\u0417\u0430\u043a\u043e\u0440\u043e\u0442\u043a\u0435!").max(40,"\u0417\u0430\u0434\u043e\u0432\u0433\u0435!"),mather:k.Yj().min(2,"\u0417\u0430\u043a\u043e\u0440\u043e\u0442\u043a\u0435!").max(40,"\u0417\u0430\u0434\u043e\u0432\u0433\u0435!"),matherPhone:k.Yj().required("\u041d\u043e\u043c\u0435\u0440 \u043e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0438\u0439!").matches(/^\d{12}$/,"\u041d\u043e\u043c\u0435\u0440 \u043f\u043e\u0432\u0438\u043d\u0435\u043d \u043c\u0456\u0441\u0442\u0438\u0442\u0438 \u0440\u0456\u0432\u043d\u043e 12 \u0446\u0438\u0444\u0440!"),father:k.Yj().min(2,"\u0417\u0430\u043a\u043e\u0440\u043e\u0442\u043a\u0435!").max(40,"\u0417\u0430\u0434\u043e\u0432\u0433\u0435!"),fatherPhone:k.Yj()});var R=i(585),C=i(5057),z=i(4263),D=i(3530),V=i(5613),I=i(446),N=i.n(I);const E=e=>{let{setFieldValue:t,valueBirthDate:i}=e;const[a,n]=(0,r.useState)(N()());return(0,A.jsx)(A.Fragment,{children:(0,A.jsx)(D.A,{size:"middle",locale:V.A,format:"DD/MM/YYYY",value:i?N()(i):N()(a),onChange:(e,i)=>{n(null===e||void 0===e?void 0:e.valueOf()),t("birthDate",null===e||void 0===e?void 0:e.valueOf());const a=N()(),r=N()(null===e||void 0===e?void 0:e.valueOf()),o=a.diff(r,"year");t("age",o)}})})};var Y=i(1434),O=i(2127),L=i(5206);const q=(0,s.Ay)(O.Ecc)`
  width: 20px;
  height: 20px;
  color: var(--main-green);
`,B=((0,s.Ay)(O.chC)`
  width: 50px;
  height: 50px;
  fill: #a9a9a9;
`,s.Ay.p`
  font-size: 16px;
  margin-bottom: 10px;
  color: var(--main-green);
  font-family: 'RobotoSlab';
`),M=s.Ay.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px;
  border: 1px solid var(--bg-main-color);
  border-radius: 4px;
  margin-bottom: 8px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #f5f5f5;
    border-color: var(--main-green);
  }
`,J=s.Ay.div`
  margin-top: 15px;
`,U=(s.Ay.div`
  margin-bottom: 10px;
`,s.Ay.span`
  flex: 1;
  font-family: 'RobotoSlab';
  font-weight: 500;
  font-size: 14px;
  color: #2a2a2a;
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    color: var(--main-green);
  }
`),X=(s.Ay.input`
  margin: 10px 0;
`,(0,s.Ay)(L.Ay)`
  min-width: 150px;
  background: var(--main-green);
  cursor: pointer;

  &:hover {
    background: var(--bg-main-color) !important;
  }
`),$=(0,s.Ay)(Y.op0)`
  width: 20px;
  height: 20px;
`,H=s.Ay.button`
  background: none;
  border: none;
  color: #ff4444;
  cursor: pointer;
  padding: 5px;
  display: flex;
  align-items: center;

  &:hover {
    color: #cc0000;
  }

  &:disabled {
    color: rgba(169, 169, 169, 0.6);
    cursor: not-allowed;

    &:hover {
      color: rgba(169, 169, 169, 0.6);
    }
  }
`;s.Ay.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`,(0,s.Ay)(n.pR)`
  margin: 0 10px;
`;var T=i(1281),_=i(8168);const K={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M400 317.7h73.9V656c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V317.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 163a8 8 0 00-12.6 0l-112 141.7c-4.1 5.3-.4 13 6.3 13zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"}}]},name:"upload",theme:"outlined"};var Q=i(2172),W=function(e,t){return r.createElement(Q.A,(0,_.A)({},e,{ref:t,icon:K}))};const Z=r.forwardRef(W);var G=i(2878);const ee=e=>{let{arrayFile:t,childFiles:i=[],setFieldValue:a,childId:s}=e;const[d,c]=(0,r.useState)([]),[p,h]=(0,r.useState)(null),x=(0,o.wA)(),m=(0,o.d4)(z.bq),u=(0,l.zy)(),f=new URLSearchParams(u.search).get("source");(0,r.useEffect)((()=>{if(t){const e=Array.isArray(t)?t.map((e=>"string"===typeof e?{name:e,path:e,type:"unknown"}:{name:String(e.filename||e.originalname||e.name||e),path:String(e.path||e),type:String(e.mimetype||e.type||"unknown")})):"string"===typeof t?[{name:t,path:t,type:"unknown"}]:[];c(e),a("childFiles",JSON.parse(JSON.stringify(e)))}}),[t,a]);return(0,A.jsxs)("div",{children:[(0,A.jsx)(B,{children:"\u0414\u043e\u0434\u0430\u0442\u0438 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0438 (PDF, TXT, DOCX):"}),(0,A.jsxs)("div",{children:[(0,A.jsx)("input",{type:"file",accept:".pdf,.txt,.docx",onChange:async e=>{const t=e.target.files[0];if(t){try{const e=await x((0,R.QM)({file:t,childId:s}));if(e.payload){const t={name:String(e.payload.filename),path:String(e.payload.path),type:String(e.payload.mimetype||"unknown")};c((e=>[...e,t])),a("childFiles",[...i,JSON.parse(JSON.stringify(t))])}}catch(r){console.error("Upload failed:",r)}e.target.value=""}},disabled:"buttonViewing"===f,style:{display:"none"},id:"file-upload"}),(0,A.jsxs)(X,{type:"button",onClick:()=>document.getElementById("file-upload").click(),disabled:"buttonViewing"===f,children:[(0,A.jsx)(Z,{}),"\u0412\u0438\u0431\u0435\u0440\u0456\u0442\u044c \u0444\u0430\u0439\u043b"]})]}),(0,A.jsx)(J,{children:d.map(((e,t)=>{const i=e.name||e,r=p===i,o=m===i;return(0,A.jsxs)(M,{onClick:()=>(async e=>{if(!e)return;const t=e.name||("string"===typeof e?e:null);if(t){h(t);try{await x((0,R.PE)(t)).unwrap()}finally{h(null)}}})(e),title:"\u041d\u0430\u0442\u0438\u0441\u043d\u0456\u0442\u044c \u0434\u043b\u044f \u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u044f",style:{position:"relative"},children:[r||o?(0,A.jsx)(n.pR,{height:"20px",width:"20px",color:o?"#ff0000":"#006400",wrapperStyle:{display:"flex",alignItems:"center",justifyContent:"center"},visible:!0,ariaLabel:"circles-with-bar-loading"}):(0,A.jsx)(q,{}),(0,A.jsx)(U,{children:i}),(0,A.jsx)(T.A,{title:"\u0412\u0438\u0434\u0430\u043b\u0438\u0442\u0438 \u0444\u0430\u0439\u043b?",description:"\u0412\u0438 \u0432\u043f\u0435\u0432\u043d\u0435\u043d\u0456, \u0449\u043e \u0445\u043e\u0447\u0435\u0442\u0435 \u0432\u0438\u0434\u0430\u043b\u0438\u0442\u0438 \u0446\u0435\u0439 \u0444\u0430\u0439\u043b?",icon:(0,A.jsx)(G.A,{style:{color:"red"}}),onConfirm:t=>{t.stopPropagation(),(async e=>{if(!e||!s)return;const t=e.name||("string"===typeof e?e:null);if(t)try{await x((0,R.Ww)({fileName:t,childId:s})).unwrap();const e=d.filter((e=>(e.name||e)!==t));c(e),a("childFiles",e)}catch(i){console.error("Error deleting file:",i)}else console.error("No file name provided for deletion")})(e)},onCancel:e=>{e.stopPropagation()},children:(0,A.jsx)(H,{disabled:"buttonViewing"===f||o,type:"button",title:"\u0412\u0438\u0434\u0430\u043b\u0438\u0442\u0438 \u0444\u0430\u0439\u043b",onClick:e=>{e.stopPropagation()},children:(0,A.jsx)($,{})})})]},t)}))})]})};const te=function(e){let{child:t}=e;const[i,s]=(0,r.useState)(F),[v,w]=(0,r.useState)(""),[j,k]=(0,r.useState)(!0),D=(0,l.zy)(),V=(0,o.d4)(z.bq),I=new URLSearchParams(D.search).get("source");(0,r.useEffect)((()=>{"buttonViewing"===I&&k(!1)}),[I]);const N=(0,l.Zp)(),Y=(0,o.wA)();return(0,r.useEffect)((()=>{if(t){const e={name:t.name?t.name:"",surname:t.surname?t.surname:"",birthDate:t.birthDate?t.birthDate:"",age:t.age?t.age:"",childImage:t.childImage?t.childImage:"",mather:t.mather?t.mather:"",matherPhone:t.matherPhone?t.matherPhone:"",father:t.father?t.father:"",fatherPhone:t.fatherPhone?t.fatherPhone:"",about:t.about?t.about:"",sensornaya:t.sensornaya?t.sensornaya:"",logoped:t.logoped?t.logoped:"",correction:t.correction?t.correction:"",tutor:t.tutor?t.tutor:"",reabilitation:t.reabilitation?t.reabilitation:"",childFiles:t.childFiles?t.childFiles:""};s(e),w(e.childImage)}}),[t]),(0,A.jsx)(a.l1,{enableReinitialize:!0,initialValues:i,validationSchema:P,onSubmit:e=>{if(j)if(t){const i={id:t._id,values:e};Y((0,R.KB)(i)).then((()=>{N("/children")}))}else Y((0,R.oS)(e)).then((()=>{N("/lesson"===I?-1:"/children")}));else N(-1)},children:e=>{let{errors:i,touched:a,values:r,setFieldValue:o}=e;return(0,A.jsxs)(d,{children:[(0,A.jsxs)(c,{children:[(0,A.jsx)(C.A,{avatar:v,fileName:"childImage",setFieldValue:o}),(0,A.jsxs)(x,{children:[(0,A.jsx)(h,{name:"name",type:"text",placeholder:"\u0406\u043c'\u044f"}),a.name&&i.name&&(0,A.jsx)(p,{children:i.name}),(0,A.jsx)(h,{name:"surname",type:"text",placeholder:"\u0424\u0430\u043c\u0456\u043b\u0456\u044f"}),i.surname&&(0,A.jsx)(p,{children:i.surname}),(0,A.jsxs)(f,{children:[(0,A.jsx)(E,{valueBirthDate:r.birthDate,setFieldValue:o}),(0,A.jsx)(g,{children:"\u0420\u043e\u043a\u0456\u0432:"}),(0,A.jsx)(u,{children:r.age})]})]})]}),(0,A.jsx)(S,{title:"\u041c\u0430\u043c\u0430",inputName:"mather",inputPhone:"matherPhone",touched:a,errors:i}),(0,A.jsx)(S,{title:"\u0411\u0430\u0442\u044c\u043a\u043e",inputName:"father",inputPhone:"fatherPhone",touched:a,errors:i}),(0,A.jsx)(ee,{arrayFile:null===t||void 0===t?void 0:t.childFiles,childFiles:r.childFiles,setFieldValue:o,childId:t._id}),(0,A.jsx)(y,{children:"\u0417\u0430\u043f\u0438\u0442 \u0431\u0430\u0442\u044c\u043a\u0456\u0432:"}),(0,A.jsx)(b,{name:"about",component:"textarea",rows:6}),(0,A.jsx)(y,{children:"\u0421\u0435\u043d\u0441\u043e\u0440\u043d\u0430:"}),(0,A.jsx)(b,{name:"sensornaya",component:"textarea",rows:6}),(0,A.jsx)(y,{children:"\u041b\u043e\u0433\u043e\u043f\u0435\u0434:"}),(0,A.jsx)(b,{name:"logoped",component:"textarea",rows:6}),(0,A.jsx)(y,{children:"\u041a\u043e\u0440\u0435\u043a\u0446\u0456\u0439\u043d\u0438\u0439 \u043f\u0435\u0434\u0430\u0433\u043e\u0433:"}),(0,A.jsx)(b,{name:"correction",component:"textarea",rows:6}),(0,A.jsx)(y,{children:"\u041f\u0456\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0430 \u0434\u043e \u0448\u043a\u043e\u043b\u0438:"}),(0,A.jsx)(b,{name:"tutor",component:"textarea",rows:6}),(0,A.jsx)(y,{children:"\u0420\u0435\u0430\u0431\u0456\u043b\u0456\u0442\u043e\u043b\u043e\u0433:"}),(0,A.jsx)(b,{name:"reabilitation",component:"textarea",rows:6}),(0,A.jsx)(m,{type:"submit",children:"updateChild"===V||"addChild"===V?(0,A.jsx)(n.pR,{height:"21",width:"50",color:"#ffffff",wrapperStyle:{display:"flex",alignItems:"center",justifyContent:"center"},visible:!0,ariaLabel:"circles-with-bar-loading"}):j?"\u0417\u0431\u0435\u0440\u0435\u0433\u0442\u0438 \u0437\u043c\u0456\u043d\u0438":"\u041d\u0430\u0437\u0430\u0434"})]})}})};var ie=i(8611),ae=i(6213);const re=new AbortController;const ne=function(){const{childId:e}=(0,l.g)(),[t,i]=(0,r.useState)("");return(0,r.useEffect)((()=>{if(e)return async function(){try{const t=await(async e=>{try{const{data:t}=await ae.A.get(`/child/children/${e}`);return t}catch(t){console.log(t.message)}})(e);if(!t)return;i(t)}catch(t){ie.Notify.failure("Child not found")}}(),()=>{re.abort()}}),[e]),(0,A.jsx)(A.Fragment,{children:(0,A.jsx)(te,{child:t})})}}}]);
//# sourceMappingURL=644.5840fcfc.chunk.js.map