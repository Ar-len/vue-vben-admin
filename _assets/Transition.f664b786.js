let e=document.createElement("style");e.innerHTML=".lazy-base-demo-wrap{display:flex;width:50%;height:2000px;margin:20px auto;text-align:center;background:#fff;justify-content:center;flex-direction:column;align-items:center}.lazy-base-demo-box{width:300px;height:300px}.lazy-base-demo h1{height:1300px;margin:20px 0}.custom-enter{opacity:0;transform:scale(.4) translate(100%)}.custom-enter-to{opacity:1}.custom-enter-active{position:absolute;top:0;width:100%;transition:.5s}.custom-leave{opacity:1}.custom-leave-to{opacity:0;transform:scale(.4) translate(-100%)}.custom-leave-active{transition:.5s}",document.head.appendChild(e);import{a as t,i as o,o as a,j as i,k as s,w as n}from"./index.25aba1cb.js";import"./xlsx.a48e520c.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.28915039.js";import{A as r}from"./index.e2241bfe.js";import"./RightOutlined.6f004af7.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.31549d71.js";import"./index.ca9dc8d5.js";import"./UpOutlined.e1b6c92f.js";import"./LeftOutlined.73eae9fb.js";import"./index.9a09da4b.js";import{b as m,S as c}from"./index.396bbc0e.js";import"./RightOutlined.002e1fbb.js";import"./useTimeout.e32b1def.js";import"./tsxHelper.be4c819f.js";import"./index.5097c654.js";import"./domUtils.c0c8d1ed.js";import"./index.f86555be.js";import"./animation.bb1b8414.js";import"./useScrollTo.ca25ec83.js";import p from"./TargetContent.ba3fd2cb.js";var d=t({components:{LazyContainer:m,TargetContent:p,Skeleton:c,Alert:r},setup:()=>({})});const l={class:"p-4 lazy-base-demo"},b={class:"lazy-base-demo-wrap"},u=s("h1",null,"向下滚动",-1),f={class:"lazy-base-demo-box"};d.render=function(e,t,r,m,c,p){const d=o("Alert"),j=o("TargetContent"),x=o("LazyContainer");return a(),i("div",l,[s(d,{message:"自定义动画",description:"懒加载组件显示动画",type:"info","show-icon":""}),s("div",b,[u,s("div",f,[s(x,{transitionName:"custom"},{default:n((()=>[s(j)])),_:1})])])])};export default d;