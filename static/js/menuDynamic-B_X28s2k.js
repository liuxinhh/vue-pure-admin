import{C as _,a as p,b as C,c as v,d as f,e as F}from"./index.esm-Bj3eM9-v.js";import{d as g,_ as y,e as m,A as I,f as s,k as c,B as A,i as t,w as e,h as o,F as x,l as w,b as r,t as E,C as S,D as N,g as D}from"./index-CocNYPzQ.js";const V=g({name:"ExampleDynamic",components:{[_.name]:_,[p.name]:p,[C.name]:C,[v.name]:v,[f.name]:f},directives:{contextmenu:F},data(){return{extra:[]}},methods:{addItem(u="item"){this.extra.push(u)},removeItem(){this.extra.pop()}}}),k=u=>(S("data-v-a005b502"),u=u(),N(),u),G=k(()=>D("p",{class:"mb-2"},"动态菜单",-1)),L={class:"wrapper"},T=k(()=>D("code",null,"右键点击此区域",-1)),j=[T];function q(u,a,z,H,J,K){const n=m("v-contextmenu-item"),d=m("v-contextmenu-group"),h=m("v-contextmenu-divider"),B=m("v-contextmenu-submenu"),b=m("v-contextmenu"),$=I("contextmenu");return s(),c("div",null,[G,A((s(),c("div",L,j)),[[$,void 0,"contextmenu"]]),t(b,{ref:"contextmenu"},{default:e(()=>[t(d,{title:"操作"},{default:e(()=>[t(n,{"hide-on-click":!1,onClick:a[0]||(a[0]=l=>u.extra.push("item"))},{default:e(()=>[o(" 添加菜单 ")]),_:1}),t(n,{"hide-on-click":!1,onClick:a[1]||(a[1]=l=>u.extra.push("group"))},{default:e(()=>[o(" 添加菜单组 ")]),_:1}),t(n,{"hide-on-click":!1,onClick:a[2]||(a[2]=l=>u.extra.push("submenu"))},{default:e(()=>[o(" 添加子菜单 ")]),_:1}),t(n,{"hide-on-click":!1,onClick:a[3]||(a[3]=l=>u.extra.pop())},{default:e(()=>[o(" 删除 ")]),_:1})]),_:1}),(s(!0),c(x,null,w(u.extra,(l,i)=>(s(),c(x,{key:i},[t(h),l==="group"?(s(),r(d,{key:0,title:`菜单组 ${i+1}`},{default:e(()=>[t(n,null,{default:e(()=>[o("菜单1")]),_:1}),t(n,null,{default:e(()=>[o("菜单2")]),_:1}),t(n,null,{default:e(()=>[o("菜单3")]),_:1})]),_:2},1032,["title"])):l==="submenu"?(s(),r(B,{key:1,title:`子菜单 ${i+1}`},{default:e(()=>[t(n,null,{default:e(()=>[o("菜单1")]),_:1}),t(n,null,{default:e(()=>[o("菜单2")]),_:1}),t(n,null,{default:e(()=>[o("菜单3")]),_:1})]),_:2},1032,["title"])):(s(),r(n,{key:2},{default:e(()=>[o("菜单 "+E(i+1),1)]),_:2},1024))],64))),128))]),_:1},512)])}const P=y(V,[["render",q],["__scopeId","data-v-a005b502"]]);export{P as default};
