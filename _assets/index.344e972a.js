let e=document.createElement("style");e.innerHTML=".high-form[data-v-bfd3b41a]{padding-bottom:48px}",document.head.appendChild(e);import{ao as o,a as t,r as i,c$ as r,d0 as s,i as a,o as n,j as l,k as d,aS as p,p as m}from"./index.25aba1cb.js";import"./xlsx.a48e520c.js";import"./index.134fae12.js";import"./index.5ada528d.js";import"./Trigger.0e177197.js";import"./omit.460af33c.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.28915039.js";import"./CheckOutlined.32318d9a.js";import{s as c}from"./index.fc3b8375.js";import"./colors.979a11b4.js";import"./index.0f8d0dc5.js";import"./RightOutlined.6f004af7.js";import"./index.c946b280.js";import"./types.43c7aaee.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.31549d71.js";import"./_baseFor.f4e5f03f.js";import"./index.836663cb.js";import"./index.a172b251.js";import"./index.f1ffca81.js";import"./index.8d15915b.js";import"./UpOutlined.e1b6c92f.js";import"./LeftOutlined.73eae9fb.js";import"./index.bd3e88ef.js";import"./index.a42d24ff.js";import"./index.6a540922.js";import"./index.868fcd95.js";import"./index.723246ef.js";import"./zh_CN.0242bd16.js";import"./TableAction.5b533915.js";import"./index.524b5daf.js";import"./CaretDownFilled.707298b9.js";import"./index.396bbc0e.js";import"./CheckOutlined.9461d66f.js";import"./CloseOutlined.102bb4f4.js";import"./EditTableHeaderIcon.ef7e104f.js";import"./DownOutlined.d1a8c093.js";import"./FullscreenOutlined.83e15126.js";import"./functional.dfd5141f.js";import"./LoadingOutlined.e80e544c.js";import"./RedoOutlined.8bbda621.js";import"./RightOutlined.002e1fbb.js";import"./SettingOutlined.dac539ab.js";import"./useTimeout.e32b1def.js";import"./tsxHelper.be4c819f.js";import"./index.5097c654.js";import"./domUtils.c0c8d1ed.js";import"./index.f86555be.js";import"./animation.bb1b8414.js";import"./useScrollTo.ca25ec83.js";import"./useAttrs.1d23af87.js";import"./index.29c225f3.js";import"./index.20e01bfc.js";import{u as f}from"./useForm.0665dd15.js";import"./index.f91c8fa5.js";import"./useWindowSizeFn.f3a1a2ad.js";import"./useFullScreen.9b0b8316.js";import"./uuid.40269c00.js";import"./useExpose.2895e2fc.js";import"./index.74f2d40e.js";import"./useTable.0c261acf.js";import b from"./PersonTable.01ce50cd.js";const u=o((()=>import("./PageFooter.345fab25.js"))),j=[{label:"付晓晓",value:"1"},{label:"周毛毛",value:"2"}],x=[{label:"私密",value:"1"},{label:"公开",value:"2"}],P=[{field:"f1",component:"Input",label:"仓库名",required:!0},{field:"f2",component:"Input",label:"仓库域名",required:!0,componentProps:{addonBefore:"http://",addonAfter:"com"},colProps:{offset:2}},{field:"f3",component:"Select",label:"仓库管理员",componentProps:{options:j},required:!0,colProps:{offset:2}},{field:"f4",component:"Select",label:"审批人",componentProps:{options:j},required:!0},{field:"f5",component:"RangePicker",label:"生效日期",required:!0,colProps:{offset:2}},{field:"f6",component:"Select",label:"仓库类型",componentProps:{options:x},required:!0,colProps:{offset:2}}],g=[{field:"t1",component:"Input",label:"任务名",required:!0},{field:"t2",component:"Input",label:"任务描述",required:!0,colProps:{offset:2}},{field:"t3",component:"Select",label:"执行人",componentProps:{options:j},required:!0,colProps:{offset:2}},{field:"t4",component:"Select",label:"责任人",componentProps:{options:j},required:!0},{field:"t5",component:"TimePicker",label:"生效日期",required:!0,componentProps:{style:{width:"100%"}},colProps:{offset:2}},{field:"t6",component:"Select",label:"任务类型",componentProps:{options:x},required:!0,colProps:{offset:2}}];var h=t({components:{BasicForm:c,PersonTable:b,PageFooter:u},setup(){const e=i(null),[o,{validate:t}]=f({baseColProps:{span:6},schemas:P,showActionButtonGroup:!1}),[r,{validate:s}]=f({baseColProps:{span:6},schemas:g,showActionButtonGroup:!1});return{register:o,registerTask:r,submitAll:async function(){try{e.value;const[o,i]=await Promise.all([t(),s()])}catch(e){}},tableRef:e}}});const v=p("data-v-bfd3b41a");r("data-v-bfd3b41a");const T={class:"high-form"},O=m(" 高级表单常见于一次性输入和提交大批量数据的场景。 "),q={class:"m-5"},F=m("提交");s();const S=v(((e,o,t,i,r,s)=>{const p=a("a-page-header"),m=a("BasicForm"),c=a("a-card"),f=a("PersonTable"),b=a("a-button"),u=a("PageFooter");return n(),l("div",T,[d(p,{title:"高级表单",ghost:!1},{default:v((()=>[O])),_:1}),d("div",q,[d(c,{title:"仓库管理",bordered:!1},{default:v((()=>[d(m,{onRegister:e.register,layout:"vertical"},null,8,["onRegister"])])),_:1}),d(c,{title:"任务管理",bordered:!1,class:"mt-5"},{default:v((()=>[d(m,{onRegister:e.registerTask,layout:"vertical"},null,8,["onRegister"])])),_:1}),d(c,{title:"成员管理",bordered:!1,class:"mt-5"},{default:v((()=>[d(f,{ref:"tableRef"},null,512)])),_:1})]),d(u,null,{right:v((()=>[d(b,{type:"primary",onClick:e.submitAll},{default:v((()=>[F])),_:1},8,["onClick"])])),_:1})])}));h.render=S,h.__scopeId="data-v-bfd3b41a";export default h;