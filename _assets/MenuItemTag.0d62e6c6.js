import{a as t,au as e,s,o as r,j as a,n,m as o}from"./index.25aba1cb.js";import"./xlsx.a48e520c.js";import{c as i}from"./props.601643f8.js";var g=t({name:"MenuItemTag",props:i,setup(t){const{prefixCls:r}=e("basic-menu-item-tag"),a=s((()=>{const{item:e,showTitle:s,isHorizontal:r}=t;if(!e||s||r)return!1;const{tag:a}=e;if(!a)return!1;const{dot:n,content:o}=a;return!(!n&&!o)})),n=s((()=>{if(!a.value)return"";const{item:e}=t,{tag:s}=e,{dot:r,content:n}=s;return r?"":n})),o=s((()=>{const{item:e}=t,{tag:s={}}=e||{},{dot:a,type:n="error"}=s;return[r,[`${r}--${n}`],{[`${r}--dot`]:a}]}));return{prefixCls:r,getTagClass:o,getShowTag:a,getContent:n}}});g.render=function(t,e,s,i,g,u){return t.getShowTag?(r(),a("span",{key:0,class:t.getTagClass},n(t.getContent),3)):o("v-if",!0)};export default g;