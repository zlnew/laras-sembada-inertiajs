import{a as m,_ as p,C as k}from"./Card-7d71d8a7.js";import{T as h,a as b,_,b as r,c as y,d as s}from"./Table-3adccec2.js";import{l as T}from"./date-7cb373b2.js";import{d as x,f as o,g as t,u as a,o as u,h as e,c as g,s as v,F as C,p as n,a as f,t as i}from"./app-75a3a99f.js";const B=f("div",{class:"flex justify-between items-center"},[f("h5",{class:"font-bold text-xl text-dark"},"Timeline")],-1),H=x({__name:"TimelinePartial",props:{timeline:{}},setup($){return(d,L)=>(u(),o(a(k),{class:"h-fit"},{default:t(()=>[e(a(m),{class:"mb-2"},{default:t(()=>[B]),_:1}),e(a(p),{table:""},{default:t(()=>[e(a(h),null,{default:t(()=>[e(a(b),null,{default:t(()=>[e(a(_),null,{default:t(()=>[e(a(r),{value:"Status"}),e(a(r),{value:"Oleh"}),e(a(r),{value:"Jabatan"}),e(a(r),{value:"Catatan"})]),_:1})]),_:1}),e(a(y),null,{default:t(()=>[d.timeline.length?(u(!0),g(C,{key:0},v(d.timeline,(l,c)=>(u(),o(a(_),{key:l.id_timeline,last:c===d.timeline.length-1},{default:t(()=>[e(a(s),{class:"font-semibold text-dark"},{default:t(()=>[n(i(l.status_aktivitas)+" pada "+i(a(T)(l.created_at)),1)]),_:2},1024),e(a(s),null,{default:t(()=>[n(i(l.user_name),1)]),_:2},1024),e(a(s),{class:"capitalize"},{default:t(()=>[n(i(l.user_role),1)]),_:2},1024),e(a(s),null,{default:t(()=>[n(i(l.catatan||"-"),1)]),_:2},1024)]),_:2},1032,["last"]))),128)):(u(),o(a(_),{key:1,last:""},{default:t(()=>[e(a(s),{colspan:"8",textAlign:"center"},{default:t(()=>[n(" Timeline tidak ditemukan ")]),_:1})]),_:1}))]),_:1})]),_:1})]),_:1})]),_:1}))}});export{H as _};
