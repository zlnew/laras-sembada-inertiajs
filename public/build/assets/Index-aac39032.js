import{_ as W,a as Z,C as G}from"./Content-5cc1c58b.js";import{C as J,a as Q,_ as X}from"./Card-7cb1e392.js";import{T as Y,a as aa,_ as f,b as c,c as ta,d as l}from"./Table-c8958af1.js";import{_ as N}from"./Input.vue_vue_type_script_setup_true_lang-62b0e882.js";import{d as ea,K as na,b as p,T as la,k as sa,e as R,c as B,h as t,u as a,g as e,F as j,o as i,Z as ra,n as k,j as U,a as y,f as _,l as o,p as x,q as oa,t as u,m as M}from"./app-d8617931.js";import{t as v}from"./number-6d20867b.js";import{M as A}from"./modal-bcd44fbd.js";import{T as E}from"./toastify-87749bbf.js";import{_ as ia}from"./Create.m.vue_vue_type_script_setup_true_lang-1c8161f4.js";import{_ as ua}from"./Edit.m.vue_vue_type_script_setup_true_lang-ebfe3183.js";import{_ as _a}from"./Delete.m.vue_vue_type_script_setup_true_lang-0140cabd.js";import{_ as da}from"./Informasi.p.vue_vue_type_script_setup_true_lang-c56b710a.js";import{_ as ca}from"./Timeline.p.vue_vue_type_script_setup_true_lang-78cf928c.js";import{_ as pa}from"./Pengajuan.p.vue_vue_type_script_setup_true_lang-a785ad6f.js";import{_ as ma}from"./Persetujuan.p.vue_vue_type_script_setup_true_lang-4b9c4abc.js";import{T as fa}from"./Foot-ac28a225.js";import"./Modal.vue_vue_type_style_index_0_scoped_fdb70d85_lang-e5086b2c.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Footer-83a73d6d.js";import"./Head.vue_vue_type_script_setup_true_lang-d7fd5c8e.js";import"./Label.vue_vue_type_script_setup_true_lang-add11eb1.js";import"./Error.vue_vue_type_script_setup_true_lang-83417469.js";import"./Select.vue_vue_type_script_setup_true_lang-5a994cba.js";import"./Textarea.vue_vue_type_script_setup_true_lang-bacc59bf.js";import"./date-7cb373b2.js";const ba={class:"flex justify-between items-center"},ga=y("h5",{class:"font-bold text-xl text-dark"},"Uraian Rencana Anggaran Biaya",-1),ha={class:"flex"},xa={key:1},va={key:1},ka={class:"grid grid-cols-3 gap-6"},ya={class:"col-span-2"},Za=ea({__name:"Index",props:{rab:{},detail_rab:{},satuan:{},timeline:{}},setup(H){const s=H,b=na(),L=p(()=>b.props.role),T=p(()=>b.props.permissions),P=p(()=>{const n=s.rab.status_rab==400?"Closed":"On Progress";return{...s.rab,status_rab_in_string:n}}),w=p(()=>s.detail_rab.map(n=>{const d=v(n.harga_satuan),h=v(n.harga_satuan*n.volume);return{...n,harga_satuan_in_rupiah:d,total_harga_in_rupiah:h}})),D=p(()=>{const n=s.detail_rab.reduce(($,r)=>$+parseFloat(r.harga_satuan.toString())*parseFloat(r.volume.toString()),0),d=s.rab.tax/100*n,h=s.rab.additional_tax/100*n,V=n+d+h;return{rab:v(n),tax:v(d),additional_tax:v(h),rab_with_tax:v(V)}}),g=p(()=>!!(L.value==="admin"||T.value.includes("create rab")&&T.value.includes("update rab")&&T.value.includes("delete rab"))),C=p(()=>s.rab.status_aktivitas==="Dibuat"),O=p(()=>!!(T.value.includes("approve rab")&&s.rab.status_aktivitas==="Diajukan")),m=la({tax:s.rab.tax,additional_tax:s.rab.additional_tax});function F(){m.patch(route("rab.update_tax",s.rab.id_rab))}function S(){A.pop(ia,{id_rab:s.rab.id_rab,satuan:s.satuan})}function I(n){A.pop(ua,{detail_rab:n,satuan:s.satuan})}function K(n){A.pop(_a,{id_detail_rab:n})}return sa(()=>{b.props.flash.success&&E.success(b.props.flash.success),b.props.flash.error&&E.error(b.props.flash.error)}),(n,d)=>{const h=R("fas-icon"),V=R("ease-button"),$=R("EaseButton");return i(),B(j,null,[t(a(ra),{title:"Detail RAB"}),t(W,null,{breadcrumb:e(()=>[t(Z,k(U({second:"RAB",current:s.rab.nama_proyek+" - "+s.rab.tahun_anggaran})),null,16)]),default:e(()=>[t(G,null,{default:e(()=>[t(da,k(U({rab:P.value})),null,16),t(a(J),null,{default:e(()=>[t(a(Q),null,{default:e(()=>[y("div",ba,[ga,g.value&&C.value?(i(),_(V,{key:0,onClick:S,slotted:""},{default:e(()=>[t(h,{icon:"fa-solid fa-plus",class:"mr-1"}),o(" Tambah Uraian ")]),_:1})):x("",!0)])]),_:1}),t(a(X),{table:""},{default:e(()=>[t(a(Y),null,{default:e(()=>[t(a(aa),null,{default:e(()=>[t(a(f),null,{default:e(()=>[t(a(c),{value:"#"}),t(a(c),{value:"Uraian"}),t(a(c),{value:"Satuan"}),t(a(c),{"text-align":"right",value:"Harga"}),t(a(c),{"text-align":"center",value:"Volume"}),t(a(c),{"text-align":"right",value:"Total Harga"}),t(a(c),{value:"Keterangan"}),g.value&&C.value?(i(),_(a(c),{key:0})):x("",!0)]),_:1})]),_:1}),t(a(ta),null,{default:e(()=>[w.value.length?(i(!0),B(j,{key:0},oa(w.value,(r,q)=>(i(),_(a(f),{key:r.id_detail_rab},{default:e(()=>[t(a(l),null,{default:e(()=>[o(u(q+1),1)]),_:2},1024),t(a(l),{whitespace:"nowrap",class:"font-semibold text-dark"},{default:e(()=>[o(u(r.uraian),1)]),_:2},1024),t(a(l),{whitespace:"nowrap"},{default:e(()=>[o(u(r.nama_satuan),1)]),_:2},1024),t(a(l),{whitespace:"nowrap","text-align":"right"},{default:e(()=>[o(u(r.harga_satuan_in_rupiah),1)]),_:2},1024),t(a(l),{whitespace:"nowrap","text-align":"center"},{default:e(()=>[o(u(r.volume),1)]),_:2},1024),t(a(l),{whitespace:"nowrap","text-align":"right"},{default:e(()=>[o(u(r.total_harga_in_rupiah),1)]),_:2},1024),t(a(l),{whitespace:"normal"},{default:e(()=>[o(u(r.keterangan),1)]),_:2},1024),g.value&&C.value?(i(),_(a(l),{key:0,whitespace:"nowrap"},{default:e(()=>[y("div",ha,[t($,{onClick:z=>I(r),variant:"link",text:"Edit"},null,8,["onClick"]),t($,{onClick:z=>K(r.id_detail_rab),variant:"danger-link",text:"Delete"},null,8,["onClick"])])]),_:2},1024)):x("",!0)]),_:2},1024))),128)):(i(),_(a(f),{key:1,last:""},{default:e(()=>[t(a(l),{colspan:"8",textAlign:"center"},{default:e(()=>[o(" Uraian tidak ditemukan ")]),_:1})]),_:1}))]),_:1}),w.value.length?(i(),_(a(fa),{key:0},{default:e(()=>[t(a(f),{last:""},{default:e(()=>[t(a(l),{"text-align":"right",colspan:"5",class:"font-semibold"},{default:e(()=>[o(" PPN ")]),_:1}),t(a(l),{"text-align":"right",colspan:"1",class:"font-semibold"},{default:e(()=>[g.value?(i(),_(a(N),{key:0,modelValue:a(m).tax,"onUpdate:modelValue":d[0]||(d[0]=r=>a(m).tax=r),onInput:F,type:"number",min:"0",max:"100"},null,8,["modelValue"])):(i(),B("span",xa,u(a(m).tax)+"%",1))]),_:1})]),_:1}),t(a(f),{last:""},{default:e(()=>[t(a(l),{"text-align":"right",colspan:"5",class:"font-semibold"},{default:e(()=>[o(" Additional Tax ")]),_:1}),t(a(l),{"text-align":"right",colspan:"1",class:"font-semibold"},{default:e(()=>[g.value?(i(),_(a(N),{key:0,modelValue:a(m).additional_tax,"onUpdate:modelValue":d[1]||(d[1]=r=>a(m).additional_tax=r),onInput:F,type:"number",min:"0",max:"100"},null,8,["modelValue"])):(i(),B("span",va,u(a(m).additional_tax)+"%",1))]),_:1})]),_:1}),t(a(f),{last:""},{default:e(()=>[t(a(l),{"text-align":"right",colspan:"5",class:"font-semibold"},{default:e(()=>[o(" Total RAB ")]),_:1}),t(a(l),{"text-align":"right",colspan:"1",class:"font-semibold"},{default:e(()=>[o(u(D.value.rab),1)]),_:1})]),_:1}),t(a(f),{last:""},{default:e(()=>[t(a(l),{"text-align":"right",colspan:"5",class:"font-semibold"},{default:e(()=>[o(" Total RAB (Termasuk PPN) ")]),_:1}),t(a(l),{"text-align":"right",colspan:"1",class:"font-semibold"},{default:e(()=>[o(u(D.value.rab_with_tax),1)]),_:1})]),_:1})]),_:1})):x("",!0)]),_:1})]),_:1})]),_:1}),y("div",ka,[y("div",ya,[t(ca,k(U({timeline:n.timeline})),null,16)]),g.value&&C.value?(i(),_(pa,k(M({key:0},{id_rab:P.value.id_rab,uraian_length:w.value.length})),null,16)):x("",!0),O.value?(i(),_(ma,k(M({key:1},{id_rab:P.value.id_rab})),null,16)):x("",!0)])]),_:1})]),_:1})],64)}}});export{Za as default};
