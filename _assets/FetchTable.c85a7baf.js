import{a as e,i,o as t,j as o,k as r,w as s,p as d}from"./index.25aba1cb.js";import"./xlsx.a48e520c.js";import"./index.134fae12.js";import"./index.5ada528d.js";import"./Trigger.0e177197.js";import"./omit.460af33c.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.28915039.js";import"./CheckOutlined.32318d9a.js";import"./index.fc3b8375.js";import"./colors.979a11b4.js";import"./index.0f8d0dc5.js";import"./RightOutlined.6f004af7.js";import"./index.c946b280.js";import"./types.43c7aaee.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.31549d71.js";import"./_baseFor.f4e5f03f.js";import"./index.836663cb.js";import"./index.a172b251.js";import"./index.f1ffca81.js";import"./index.8d15915b.js";import"./UpOutlined.e1b6c92f.js";import"./LeftOutlined.73eae9fb.js";import"./index.bd3e88ef.js";import"./index.a42d24ff.js";import"./index.6a540922.js";import"./index.868fcd95.js";import"./index.723246ef.js";import"./zh_CN.0242bd16.js";import"./TableAction.5b533915.js";import"./index.524b5daf.js";import"./CaretDownFilled.707298b9.js";import"./index.396bbc0e.js";import"./CheckOutlined.9461d66f.js";import"./CloseOutlined.102bb4f4.js";import{s as a}from"./EditTableHeaderIcon.ef7e104f.js";import"./DownOutlined.d1a8c093.js";import"./FullscreenOutlined.83e15126.js";import"./functional.dfd5141f.js";import"./LoadingOutlined.e80e544c.js";import"./RedoOutlined.8bbda621.js";import"./RightOutlined.002e1fbb.js";import"./SettingOutlined.dac539ab.js";import"./useTimeout.e32b1def.js";import"./tsxHelper.be4c819f.js";import"./index.5097c654.js";import"./domUtils.c0c8d1ed.js";import"./index.f86555be.js";import"./animation.bb1b8414.js";import"./useScrollTo.ca25ec83.js";import"./useAttrs.1d23af87.js";import"./index.29c225f3.js";import"./index.20e01bfc.js";import"./useForm.0665dd15.js";import"./index.f91c8fa5.js";import"./useWindowSizeFn.f3a1a2ad.js";import"./useFullScreen.9b0b8316.js";import"./uuid.40269c00.js";import"./useExpose.2895e2fc.js";import"./index.74f2d40e.js";import{u as p}from"./useTable.0c261acf.js";import{getBasicColumns as n}from"./tableData.ec1fb215.js";import{d as m}from"./table.7b2121b2.js";var j=e({components:{BasicTable:a},setup(){const[e,{reload:i}]=p({title:"远程加载示例",api:m,columns:n()});return{registerTable:e,handleReloadCurrent:function(){i()},handleReload:function(){i({page:1})}}}});const l={class:"p-4"},c=d(" 刷新当前页 "),f=d(" 刷新并返回第一页 ");j.render=function(e,d,a,p,n,m){const j=i("a-button"),b=i("BasicTable");return t(),o("div",l,[r(b,{onRegister:e.registerTable},{toolbar:s((()=>[r(j,{type:"primary",onClick:e.handleReloadCurrent},{default:s((()=>[c])),_:1},8,["onClick"]),r(j,{type:"primary",onClick:e.handleReload},{default:s((()=>[f])),_:1},8,["onClick"])])),_:1},8,["onRegister"])])};export default j;