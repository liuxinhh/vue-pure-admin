import{S as m}from"./sortable.esm-CkCitmyH.js";import{a as o,a8 as i,m as b,y as l}from"./index-CocNYPzQ.js";import{a as v}from"./data-Buzjdn8h.js";function y(){const t=o(i(v,!0)),e=o([{label:"ID",prop:"id"},{label:"日期",prop:"date"},{label:"姓名",prop:"name"}]),p=o([{label:"ID",prop:a=>e.value[a].prop},{label:"日期",prop:a=>e.value[a].prop},{label:"姓名",prop:a=>e.value[a].prop}]),n=a=>{a.preventDefault(),l(()=>{const s=document.querySelector(".el-table__header-wrapper tr");m.create(s,{animation:300,delay:0,onEnd:({newIndex:u,oldIndex:r})=>{const c=e.value[r];e.value.splice(r,1),e.value.splice(u,0,c)}})})};return b(()=>{l(()=>{n(event)})}),{columns:p,dataList:t,columnsDrag:e}}export{y as useColumns};
