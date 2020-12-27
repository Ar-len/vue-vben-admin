import{a as e,r as i,h as t,f as o,i as s,o as n,j as a,k as l,w as r,p as c}from"./index.25aba1cb.js";import"./xlsx.a48e520c.js";import"./index.134fae12.js";import"./index.5ada528d.js";import"./Trigger.0e177197.js";import"./omit.460af33c.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.28915039.js";import"./CheckOutlined.32318d9a.js";import"./index.fc3b8375.js";import"./colors.979a11b4.js";import"./index.0f8d0dc5.js";import"./RightOutlined.6f004af7.js";import"./index.c946b280.js";import"./types.43c7aaee.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.31549d71.js";import"./_baseFor.f4e5f03f.js";import"./index.836663cb.js";import"./index.a172b251.js";import"./index.f1ffca81.js";import"./index.8d15915b.js";import"./UpOutlined.e1b6c92f.js";import"./LeftOutlined.73eae9fb.js";import"./index.bd3e88ef.js";import"./index.a42d24ff.js";import"./index.6a540922.js";import"./index.868fcd95.js";import"./index.723246ef.js";import"./zh_CN.0242bd16.js";import"./TableAction.5b533915.js";import"./index.524b5daf.js";import"./CaretDownFilled.707298b9.js";import"./index.396bbc0e.js";import"./CheckOutlined.9461d66f.js";import"./CloseOutlined.102bb4f4.js";import{s as d}from"./EditTableHeaderIcon.ef7e104f.js";import"./DownOutlined.d1a8c093.js";import"./FullscreenOutlined.83e15126.js";import"./functional.dfd5141f.js";import"./LoadingOutlined.e80e544c.js";import"./RedoOutlined.8bbda621.js";import"./RightOutlined.002e1fbb.js";import"./SettingOutlined.dac539ab.js";import"./useTimeout.e32b1def.js";import"./tsxHelper.be4c819f.js";import"./index.5097c654.js";import"./domUtils.c0c8d1ed.js";import"./index.f86555be.js";import"./animation.bb1b8414.js";import"./useScrollTo.ca25ec83.js";import"./useAttrs.1d23af87.js";import"./index.29c225f3.js";import"./index.20e01bfc.js";import"./useForm.0665dd15.js";import"./index.f91c8fa5.js";import"./useWindowSizeFn.f3a1a2ad.js";import"./useFullScreen.9b0b8316.js";import"./uuid.40269c00.js";import"./useExpose.2895e2fc.js";import"./index.74f2d40e.js";import{getBasicColumns as m,getBasicShortColumns as f}from"./tableData.ec1fb215.js";import{d as p}from"./table.7b2121b2.js";var u=e({components:{BasicTable:d},setup(){const e=i(null),{createMessage:s}=t();function n(){const i=o(e);if(!i)throw new Error("tableAction is null");return i}return{tableRef:e,api:p,columns:m(),changeLoading:function(){n().setLoading(!0),setTimeout((()=>{n().setLoading(!1)}),1e3)},changeColumns:function(){n().setColumns(f())},reloadTable:function(){n().setColumns(m()),n().reload({page:1})},getColumn:function(){s.info("请在控制台查看！")},getTableData:function(){s.info("请在控制台查看！")},getPagination:function(){s.info("请在控制台查看！")},setPaginationInfo:function(){n().setPagination({current:2}),n().reload()},getSelectRowList:function(){s.info("请在控制台查看！")},getSelectRowKeyList:function(){s.info("请在控制台查看！")},setSelectedRowKeyList:function(){n().setSelectedRowKeys(["0","1","2"])},clearSelect:function(){n().clearSelectedRowKeys()}}}});const j={class:"p-4"},b={class:"mb-4"},C=c("还原"),g=c("开启loading"),x=c("更改Columns"),k=c("获取Columns"),w=c("获取表格数据"),R=c("跳转到第2页"),S={class:"mb-4"},_=c("获取选中行"),T=c("获取选中行Key"),O=c("设置选中行"),h=c("清空选中行"),L=c("获取分页信息");u.render=function(e,i,t,o,c,d){const m=s("a-button"),f=s("BasicTable");return n(),a("div",j,[l("div",b,[l(m,{class:"mr-2",onClick:e.reloadTable},{default:r((()=>[C])),_:1},8,["onClick"]),l(m,{class:"mr-2",onClick:e.changeLoading},{default:r((()=>[g])),_:1},8,["onClick"]),l(m,{class:"mr-2",onClick:e.changeColumns},{default:r((()=>[x])),_:1},8,["onClick"]),l(m,{class:"mr-2",onClick:e.getColumn},{default:r((()=>[k])),_:1},8,["onClick"]),l(m,{class:"mr-2",onClick:e.getTableData},{default:r((()=>[w])),_:1},8,["onClick"]),l(m,{class:"mr-2",onClick:e.setPaginationInfo},{default:r((()=>[R])),_:1},8,["onClick"])]),l("div",S,[l(m,{class:"mr-2",onClick:e.getSelectRowList},{default:r((()=>[_])),_:1},8,["onClick"]),l(m,{class:"mr-2",onClick:e.getSelectRowKeyList},{default:r((()=>[T])),_:1},8,["onClick"]),l(m,{class:"mr-2",onClick:e.setSelectedRowKeyList},{default:r((()=>[O])),_:1},8,["onClick"]),l(m,{class:"mr-2",onClick:e.clearSelect},{default:r((()=>[h])),_:1},8,["onClick"]),l(m,{class:"mr-2",onClick:e.getPagination},{default:r((()=>[L])),_:1},8,["onClick"])]),l(f,{canResize:!1,title:"RefTable示例",titleHelpMessage:"使用Ref调用表格内方法",ref:"tableRef",api:e.api,columns:e.columns,rowKey:"id",rowSelection:{type:"checkbox"}},null,8,["api","columns"])])};export default u;