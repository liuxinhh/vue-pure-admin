var R=Object.defineProperty,B=Object.defineProperties;var D=Object.getOwnPropertyDescriptors;var x=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable;var S=(t,e,a)=>e in t?R(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,N=(t,e)=>{for(var a in e||(e={}))I.call(e,a)&&S(t,a,e[a]);if(x)for(var a of x(e))V.call(e,a)&&S(t,a,e[a]);return t},k=(t,e)=>B(t,D(e));var P=(t,e,a)=>new Promise((v,i)=>{var c=s=>{try{o(a.next(s))}catch(d){i(d)}},u=s=>{try{o(a.throw(s))}catch(d){i(d)}},o=s=>s.done?v(s.value):Promise.resolve(s.value).then(c,u);o((a=a.apply(t,e)).next())});import{d as $,a as p,R as g,p as X,n as m,k as Y,i as j,s as C,u as E,b as z,w as M,j as O,F as G,fS as H,fT as J,y as K,f as L,g as y,C as Q,D as U,h as W,_ as Z}from"./index-CocNYPzQ.js";import{P as q,u as ee,d as te,g as ae,e as se,f as ne}from"./vue-flow-core-hQSkf6Ml.js";const re=t=>(Q("data-v-2aba1cee"),t=t(),U(),t),oe=re(()=>y("span",{class:"truck"},[y("span",{class:"box"},"📦"),W(" 🚚 ")],-1)),ie=[oe],ue=$({__name:"animationEdge",props:{id:{type:String,required:!0},source:{type:String,required:!0},target:{type:String,required:!0},sourceX:{type:Number,required:!0},sourceY:{type:Number,required:!0},targetX:{type:Number,required:!0},targetY:{type:Number,required:!0},sourcePosition:{type:String,default:q.Right},targetPosition:{type:String,default:q.Left}},setup(t){const e=t,{findEdge:a}=ee(),v=te([e.target,e.source]),i=p(0),c=p(),u=p({x:0,y:0}),o=p(0),s=g(()=>v.value[0].data),d=g(()=>v.value[1].data),T=g(()=>d.value.isFinished),w=g(()=>s.value.isCancelled),l=p(!1),A=g(()=>s.value.hasError?"#f87171":s.value.isFinished?"#42B983":s.value.isCancelled||s.value.isSkipped?"#fbbf24":s.value.isRunning||l.value?"#2563eb":"#6b7280"),F=X(()=>ae(e));m(w,n=>{n&&b()}),m(l,n=>{const r=a(e.id);r&&(r.data=k(N({},r.data),{isAnimating:n}))}),m(i,n=>{var f;const r=(f=c.value)==null?void 0:f.pathEl;if(!r||n===0||!l.value)return;const h=r.getTotalLength();if(o.value!==h){_();return}u.value=r.getPointAtLength(n)}),m(T,n=>{n&&_()});function _(){return P(this,null,function*(){var f;const n=(f=c.value)==null?void 0:f.pathEl;if(!n)return;const r=n.getTotalLength(),h=i.value||0;u.value=n.getPointAtLength(h),l.value=!0,o.value!==r&&(o.value=r),yield H(i,h,r,{transition:J.easeInOutCubic,duration:Math.max(1500,r/2),abort:()=>!l.value}),b()})}function b(){K(()=>{i.value=0,o.value=0,u.value={x:0,y:0},l.value=!1})}return(n,r)=>(L(),Y(G,null,[j(E(se),{id:t.id,ref_key:"edgeRef",ref:c,path:F.value[0],style:C({stroke:A.value})},null,8,["id","path","style"]),l.value?(L(),z(E(ne),{key:0},{default:M(()=>[y("div",{style:C({transform:`translate(-50%, -50%) translate(${u.value.x}px,${u.value.y}px)`}),class:"nodrag nopan animated-edge-label"},ie,4)]),_:1})):O("",!0)],64))}}),fe=Z(ue,[["__scopeId","data-v-2aba1cee"]]);export{fe as default};
