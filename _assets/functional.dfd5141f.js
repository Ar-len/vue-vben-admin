import{k as e,v as t,cB as n,a as i,b as o,r,s,ae as c,W as a,bK as l,f as m,di as u,dj as g}from"./index.25aba1cb.js";import{C as d}from"./CloseOutlined.102bb4f4.js";import{L as v}from"./LoadingOutlined.e80e544c.js";import{R as f}from"./RightOutlined.002e1fbb.js";var p={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"}}]},name:"left",theme:"outlined"};function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var h=function(i,o){var r=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?Object(arguments[t]):{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){w(e,t,n[t])}))}return e}({},i,o.attrs);return e(n,t(r,{icon:p}),null)};h.displayName="LeftOutlined",h.inheritAttrs=!1;const b={show:{type:Boolean,default:!1},imageList:{type:[Array],default:null},index:{type:Number,default:0}};var L,_;(_=L||(L={}))[_.LOADING=0]="LOADING",_[_.DONE=1]="DONE",_[_.FAIL=2]="FAIL";const x="img-preview";var O=i({name:"ImagePreview",props:b,setup(e){const t=o({currentUrl:"",imgScale:1,imgRotate:0,imgTop:0,imgLeft:0,status:0,currentIndex:0,moveX:0,moveY:0,show:e.show}),n=r(null),i=r(null);function u(){!function(){const e=m(n);if(!e)return;e.onmousewheel=p,document.body.addEventListener("DOMMouseScroll",p),document.ondragstart=function(){return!1}}();const{index:i,imageList:o}=e;if(!o||!o.length)throw new Error("imageList is undefined");t.currentIndex=i,_(o[i])}function g(){t.imgScale=1,t.imgRotate=0,t.imgTop=0,t.imgLeft=0}function p(e){(e=e||window.event).delta=e.wheelDelta||-e.detail,e.preventDefault(),e.delta>0&&w(.015),e.delta<0&&w(-.015)}function w(e){t.imgScale<=.2&&e<0||(t.imgScale+=e)}function b(e){t.imgRotate+=e}function L(){const e=m(i);e&&(e.onmousemove=null)}function _(e){t.status=0;const n=new Image;n.src=e,n.onload=()=>{t.currentUrl=e,t.status=1},n.onerror=()=>{t.status=2}}function O(e){e&&e.stopPropagation(),t.show=!1,document.body.removeEventListener("DOMMouseScroll",p),document.ondragstart=null}function y(){g()}function I(e){e=e||window.event,t.moveX=e.clientX,t.moveY=e.clientY;const n=m(i);n&&(n.onmousemove=j)}function j(e){(e=e||window.event).preventDefault();const n=e.clientX-t.moveX,i=e.clientY-t.moveY;t.imgLeft+=n,t.imgTop+=i,t.moveX=e.clientX,t.moveY=e.clientY}const C=s((()=>{const{imgScale:e,imgRotate:n,imgTop:i,imgLeft:o}=t;return{transform:`scale(${e}) rotate(${n}deg)`,marginTop:`${i}px`,marginLeft:`${o}px`}})),D=s((()=>{const{imageList:t}=e;return t.length>1}));c((()=>{e.show&&u(),e.imageList&&g()}));const k=n=>m(D)?a("div",{class:["img-preview__arrow",n],onClick:()=>function(n){const{currentIndex:i}=t,{imageList:o}=e;"left"===n&&(t.currentIndex--,i<=0&&(t.currentIndex=o.length-1)),"right"===n&&(t.currentIndex++,i>=o.length-1&&(t.currentIndex=0)),_(o[t.currentIndex])}(n)},a("left"===n?h:f,null)):null;return()=>t.show&&a("div",{class:x,ref:n,onMouseup:L},a("div",{class:"img-preview-content"},a(l,{indicator:a(v,{style:"font-size: 24px",spin:!0}),spinning:!0,class:["img-preview-image",{hidden:0!==t.status}]}),a("img",{style:m(C),class:["img-preview-image",1===t.status?"":"hidden"],ref:i,src:t.currentUrl,onMousedown:I}),a("div",{class:"img-preview__close",onClick:O},a(d,{class:"img-preview__close-icon"})),(()=>{if(!m(D))return null;const{currentIndex:n}=t,{imageList:i}=e;return a("div",{class:"img-preview__index"},n+1," / ",i.length)})(),a("div",{class:"img-preview__controller"},a("div",{class:"img-preview__controller-item",onClick:()=>w(-.15)},a("img",{src:"./_assets/unscale.50a147e7.svg"})),a("div",{class:"img-preview__controller-item",onClick:()=>w(.15)},a("img",{src:"./_assets/scale.5b254733.svg"})),a("div",{class:"img-preview__controller-item",onClick:y},a("img",{src:"./_assets/resume.7a838909.svg"})),a("div",{class:"img-preview__controller-item",onClick:()=>b(-90)},a("img",{src:"./_assets/unrotate.a3dc2050.svg"})),a("div",{class:"img-preview__controller-item",onClick:()=>b(90)},a("img",{src:"./_assets/p-rotate.54a3ac67.svg"}))),k("left"),k("right")))}});let y=null;function I(t){if(!u)return;const{imageList:n,show:i=!0,index:o=0}=t,r={},s=document.createElement("div");r.imageList=n,r.show=i,r.index=o,y=e(O,r),g(y,s),document.body.appendChild(s)}export{h as L,I as c};