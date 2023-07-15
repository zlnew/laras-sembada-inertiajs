import{_ as W,a as X,C as Y}from"./Content-5cc1c58b.js";import{C as aa,a as ea,_ as na}from"./Card-7cb1e392.js";import{d as ta,K as ua,b as y,z as P,k as la,e as H,c as U,h as e,u as a,g as n,F as q,o as r,Z as sa,n as b,j as E,a as k,f as d,l as i,p,q as oa,t as c,m as L}from"./app-d8617931.js";import{T as ia,a as ra,_ as g,b as m,c as da,d as u}from"./Table-c8958af1.js";import{t as $,f as _a}from"./number-6d20867b.js";import{M}from"./modal-bcd44fbd.js";import{T as I}from"./toastify-87749bbf.js";import{_ as pa}from"./Create.m.vue_vue_type_script_setup_true_lang-15c606e6.js";import{_ as ca}from"./Update.m.vue_vue_type_script_setup_true_lang-4d1f43c5.js";import{_ as fa}from"./Delete.m.vue_vue_type_script_setup_true_lang-5ef5e07f.js";import{_ as ma}from"./Informasi.p.vue_vue_type_script_setup_true_lang-8091e0aa.js";import{_ as ga}from"./Timeline.p.vue_vue_type_script_setup_true_lang-4d57c03b.js";import{_ as ka}from"./Persetujuan.p.vue_vue_type_script_setup_true_lang-491d723b.js";import{_ as ja}from"./Pengajuan.p.vue_vue_type_script_setup_true_lang-710068b7.js";import{T as ha}from"./Foot-ac28a225.js";import"./Modal.vue_vue_type_style_index_0_scoped_fdb70d85_lang-e5086b2c.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Footer-83a73d6d.js";import"./Head.vue_vue_type_script_setup_true_lang-d7fd5c8e.js";import"./Input.vue_vue_type_script_setup_true_lang-62b0e882.js";import"./Label.vue_vue_type_script_setup_true_lang-add11eb1.js";import"./Error.vue_vue_type_script_setup_true_lang-83417469.js";import"./Select.vue_vue_type_script_setup_true_lang-5a994cba.js";import"./date-7cb373b2.js";import"./Textarea.vue_vue_type_script_setup_true_lang-bacc59bf.js";const va={class:"flex justify-between items-center"},ya=k("h5",{class:"font-bold text-xl text-dark"},"List Pengajuan Dana",-1),ba={class:"flex"},Ca={class:"grid grid-cols-3 gap-6"},Ta={class:"col-span-2"},Qa=ta({__name:"Detail",props:{keuangan:{},detail_pengajuan_dana:{},pengajuan_dana:{},detail_rap:{},timeline:{},rekening:{}},setup(R){const f=R,j=ua(),C=j.props.role,T=j.props.permissions,w=y(()=>!!(C==="admin"||T.includes("create pengajuan dana")&&T.includes("update pengajuan dana")&&T.includes("delete pengajuan dana"))),x=y(()=>f.pengajuan_dana.status_aktivitas==="Dibuat"),h=y(()=>{const t=f.pengajuan_dana.status_aktivitas;if(T.includes("approve pengajuan dana")){if(C==="admin")return!0;if(C==="kepala divisi")switch(t){case"Diajukan":return!0;default:return!1}if(C==="direktur utama")switch(t){case"Dievaluasi":return!0;default:return!1}}return!1}),D=y(()=>f.detail_pengajuan_dana.map(t=>{const l=$(t.jumlah_pengajuan);return{...t,jumlah_pengajuan_in_rupiah:l}})),v=y(()=>{const t=f.detail_pengajuan_dana.reduce((l,s)=>l+parseFloat(s.jumlah_pengajuan.toString()),0);return{pengajuan_dana:$(t),disetujui:$(F.value),ditolak:$(A.value)}}),S=P(),F=P(0),A=P(0);function N(t){const l=t.target;document.querySelectorAll(".persetujuan-checkbox").forEach(_=>{_ instanceof HTMLInputElement&&(_.checked=l.checked)}),B()}function B(){V(),O(),z()}function V(){const t=document.querySelectorAll(".persetujuan-checkbox");let l=[];t.forEach(s=>{s instanceof HTMLInputElement&&s.checked&&s.dataset.id&&l.push(parseFloat(s.dataset.id))}),S.value=l}function O(){const t=document.querySelectorAll(".persetujuan-checkbox");let l=0;t.forEach(s=>{if(s instanceof HTMLInputElement&&s.checked){const _=parseFloat(s.dataset.amount||"0");l+=_}}),F.value=l}function z(){const t=document.querySelectorAll(".persetujuan-checkbox"),l=_a(v.value.pengajuan_dana||"0");let s=0;t.forEach(_=>{if(_ instanceof HTMLInputElement&&_.checked){const o=parseFloat(_.dataset.amount||"0");s+=o}}),l&&(A.value=l-s)}function J(){M.pop(pa,{id_pengajuan_dana:f.pengajuan_dana.id_pengajuan_dana,detail_rap:f.detail_rap,rekening:f.rekening})}function K(t){M.pop(ca,{detail_pengajuan_dana:t,detail_rap:f.detail_rap,rekening:f.rekening})}function Z(t){M.pop(fa,{id_detail_pengajuan_dana:t})}return la(()=>{j.props.flash.success&&I.success(j.props.flash.success),j.props.flash.error&&I.error(j.props.flash.error)}),(t,l)=>{const s=H("fas-icon"),_=H("ease-button");return r(),U(q,null,[e(a(sa),{title:"Pengajuan Dana"}),e(W,null,{breadcrumb:n(()=>[e(X,b(E({second:"Keuangan",current:f.keuangan.nama_proyek})),null,16)]),default:n(()=>[e(Y,null,{default:n(()=>[e(ma,b(E({keuangan:t.keuangan,pengajuan_dana:t.pengajuan_dana})),null,16),e(a(aa),null,{default:n(()=>[e(a(ea),null,{default:n(()=>[k("div",va,[ya,w.value&&x.value?(r(),d(_,{key:0,onClick:J,slotted:""},{default:n(()=>[e(s,{icon:"fa-solid fa-plus",class:"mr-1"}),i(" Tambah Uraian ")]),_:1})):p("",!0)])]),_:1}),e(a(na),{table:""},{default:n(()=>[e(a(ia),null,{default:n(()=>[e(a(ra),null,{default:n(()=>[e(a(g),null,{default:n(()=>[e(a(m),{value:"#"}),e(a(m),{value:"Uraian"}),e(a(m),{value:"Pos"}),e(a(m),{value:"Jenis Pembayaran"}),e(a(m),{value:"Rekening"}),e(a(m),{value:"Bank"}),e(a(m),{"text-align":"right",value:"Jumlah Pengajuan"}),h.value?(r(),d(a(m),{key:0,value:"Persetujuan"})):p("",!0),w.value&&x.value?(r(),d(a(m),{key:1})):p("",!0)]),_:1})]),_:1}),e(a(da),null,{default:n(()=>[D.value.length?(r(!0),U(q,{key:0},oa(D.value,(o,G)=>(r(),d(a(g),{key:o.id_detail_pengajuan_dana},{default:n(()=>[e(a(u),null,{default:n(()=>[i(c(G+1),1)]),_:2},1024),e(a(u),{whitespace:"nowrap",class:"font-semibold text-dark"},{default:n(()=>[i(c(o.uraian),1)]),_:2},1024),e(a(u),{whitespace:"nowrap"},{default:n(()=>[i(c(o.uraian_rap),1)]),_:2},1024),e(a(u),{whitespace:"nowrap"},{default:n(()=>[i(c(o.jenis_pembayaran),1)]),_:2},1024),e(a(u),{whitespace:"nowrap"},{default:n(()=>[i(c(o.nomor_rekening)+" - "+c(o.nama_rekening),1)]),_:2},1024),e(a(u),{whitespace:"nowrap"},{default:n(()=>[i(c(o.nama_bank),1)]),_:2},1024),e(a(u),{whitespace:"nowrap","text-align":"right"},{default:n(()=>[i(c(o.jumlah_pengajuan_in_rupiah),1)]),_:2},1024),h.value?(r(),d(a(u),{key:0},{default:n(()=>[k("input",L({onChange:B},{type:"checkbox",class:"persetujuan-checkbox","data-id":o.id_detail_pengajuan_dana,"data-amount":o.jumlah_pengajuan}),null,16)]),_:2},1024)):p("",!0),w.value&&x.value?(r(),d(a(u),{key:1,whitespace:"nowrap"},{default:n(()=>[k("div",ba,[e(_,{variant:"link",text:"Edit",onClick:Q=>K(o)},null,8,["onClick"]),e(_,{variant:"danger-link",text:"Delete",onClick:Q=>Z(o.id_detail_pengajuan_dana)},null,8,["onClick"])])]),_:2},1024)):p("",!0)]),_:2},1024))),128)):(r(),d(a(g),{key:1,last:""},{default:n(()=>[e(a(u),{colspan:"8","text-align":"center"},{default:n(()=>[i(" Uraian tidak ditemukan ")]),_:1})]),_:1}))]),_:1}),D.value.length?(r(),d(a(ha),{key:0},{default:n(()=>[h.value?(r(),d(a(g),{key:0,last:""},{default:n(()=>[e(a(u),{colspan:"6"}),e(a(u),{"text-align":"right"},{default:n(()=>[i(" Setujui Semua ")]),_:1}),e(a(u),null,{default:n(()=>[k("input",{onChange:l[0]||(l[0]=o=>N(o)),type:"checkbox",title:"Setujui semua"},null,32)]),_:1})]),_:1})):p("",!0),e(a(g),{last:""},{default:n(()=>[e(a(u),{colspan:"5"}),e(a(u),{class:"font-semibold"},{default:n(()=>[i(" Total Pengajuan ")]),_:1}),e(a(u),{"text-align":"right",class:"font-semibold"},{default:n(()=>[i(c(v.value.pengajuan_dana),1)]),_:1})]),_:1}),h.value?(r(),d(a(g),{key:1,last:""},{default:n(()=>[e(a(u),{colspan:"5"}),e(a(u),{class:"font-semibold"},{default:n(()=>[i(" Disetujui ")]),_:1}),e(a(u),{"text-align":"right",class:"font-semibold"},{default:n(()=>[i(c(v.value.disetujui),1)]),_:1})]),_:1})):p("",!0),h.value?(r(),d(a(g),{key:2,last:""},{default:n(()=>[e(a(u),{colspan:"5"}),e(a(u),{class:"font-semibold"},{default:n(()=>[i(" Tidak Disetujui ")]),_:1}),e(a(u),{"text-align":"right",class:"font-semibold"},{default:n(()=>[i(c(v.value.ditolak),1)]),_:1})]),_:1})):p("",!0)]),_:1})):p("",!0)]),_:1})]),_:1})]),_:1}),k("div",Ca,[k("div",Ta,[e(ga,b(E({timeline:t.timeline})),null,16)]),w.value&&x.value?(r(),d(ja,b(L({key:0},{id_pengajuan_dana:t.pengajuan_dana.id_pengajuan_dana,detail_pengajuan_dana_length:D.value.length})),null,16)):p("",!0),h.value?(r(),d(ka,b(L({key:1},{id_pengajuan_dana:t.pengajuan_dana.id_pengajuan_dana,group_of_id_detail_pengajuan_dana:S.value,total_amount:v.value})),null,16)):p("",!0)])]),_:1})]),_:1})],64)}}});export{Qa as default};
