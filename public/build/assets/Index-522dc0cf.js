<<<<<<<< HEAD:public/build/assets/Index-522dc0cf.js
import{_ as F,a as H,C as K}from"./Content-5cc1c58b.js";import{C as U,a as W,_ as q}from"./Card-7cb1e392.js";import{T as z,a as A,_ as w,b as r,c as I,d as s}from"./Table-c8958af1.js";import{_ as J}from"./Create.m.vue_vue_type_script_setup_true_lang-21a09023.js";import{_ as O}from"./Edit.m.vue_vue_type_script_setup_true_lang-ebf864fe.js";import{_ as Z}from"./Delete.m.vue_vue_type_script_setup_true_lang-082b3838.js";import{_ as G}from"./Search.m.vue_vue_type_script_setup_true_lang-71064b5a.js";import{t as Q}from"./number-6d20867b.js";import{l as C}from"./date-7cb373b2.js";import{M as f}from"./modal-bcd44fbd.js";import{T as y}from"./toastify-87749bbf.js";import{d as X,K as Y,b as P,k as aa,e as $,c as b,h as a,u as e,g as t,F as T,o as u,Z as ea,n as M,j as B,a as m,f as k,l as o,p as D,q as ta,m as na,y as sa,t as _}from"./app-d8617931.js";import"./Modal.vue_vue_type_style_index_0_scoped_fdb70d85_lang-e5086b2c.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Footer-83a73d6d.js";import"./Head.vue_vue_type_script_setup_true_lang-d7fd5c8e.js";import"./Input.vue_vue_type_script_setup_true_lang-62b0e882.js";import"./Label.vue_vue_type_script_setup_true_lang-add11eb1.js";import"./Error.vue_vue_type_script_setup_true_lang-83417469.js";import"./Select.vue_vue_type_script_setup_true_lang-5a994cba.js";const la={class:"flex justify-between items-center"},ra={class:"line-clamp-2 hover:line-clamp-none"},oa={class:"flex"},Ma=X({__name:"Index",props:{daftar_proyek:{}},setup(N){const L=N,c=Y(),g=c.props.permissions,x=P(()=>!!(g.includes("create proyek")&&g.includes("update proyek")&&g.includes("delete proyek"))),h=P(()=>({data:L.daftar_proyek.data.map(l=>{const d=C(l.waktu_mulai),i=C(l.waktu_selesai),n=l.status_proyek==400?"Closed":"On Progress",v=Q(l.nilai_kontrak);return{...l,waktu_mulai_in_ll:d,waktu_selesai_in_ll:i,status_proyek_in_string:n,nilai_kontrak_in_rupiah:v}})}));function S(){f.pop(J)}function V(p){f.pop(O,{proyek:p})}function j(p){f.pop(Z,{id_proyek:p})}function E(){f.pop(G)}return aa(()=>{c.props.flash.success&&y.success(c.props.flash.success),c.props.flash.error&&y.error(c.props.flash.error)}),(p,l)=>{const d=$("fas-icon"),i=$("ease-button");return u(),b(T,null,[a(e(ea),{title:"Daftar Proyek"}),a(F,null,{breadcrumb:t(()=>[a(H,M(B({second:"Proyek",current:"Daftar Proyek"})),null,16)]),default:t(()=>[a(K,null,{default:t(()=>[a(e(U),null,{default:t(()=>[a(e(W),null,{default:t(()=>[m("div",la,[m("div",null,[x.value?(u(),k(i,{key:0,onClick:S,slotted:""},{default:t(()=>[a(d,{icon:"fa-solid fa-plus",class:"mr-1"}),o(" Proyek Baru ")]),_:1})):D("",!0)]),a(i,{onClick:l[0]||(l[0]=n=>E()),variant:"transparent",slotted:""},{default:t(()=>[a(d,{icon:"fa-solid fa-search",class:"mr-1"}),o(" Pencarian ")]),_:1})])]),_:1}),a(e(q),{table:""},{default:t(()=>[a(e(z),null,{default:t(()=>[a(e(A),null,{default:t(()=>[a(e(w),null,{default:t(()=>[a(e(r),{value:"Nama Proyek"}),a(e(r),{value:"Tahun Anggaran"}),a(e(r),{value:"Pengguna Jasa"}),a(e(r),{"text-align":"center",value:"Waktu Mulai"}),a(e(r),{"text-align":"center",value:"Waktu Selesai"}),a(e(r),{"text-align":"right",value:"Nilai Kontrak"}),a(e(r),{"text-align":"center",value:"Status"}),a(e(r))]),_:1})]),_:1}),a(e(I),null,{default:t(()=>[h.value.data.length?(u(!0),b(T,{key:0},ta(h.value.data,(n,v)=>(u(),k(e(w),na({key:n.id_proyek},{last:v===h.value.data.length-1}),{default:t(()=>[a(e(s),null,{default:t(()=>[a(e(sa),{class:"link",href:"#"},{default:t(()=>[m("span",ra,_(n.nama_proyek),1)]),_:2},1024)]),_:2},1024),a(e(s),{whitespace:"nowrap"},{default:t(()=>[o(_(n.tahun_anggaran),1)]),_:2},1024),a(e(s),{whitespace:"normal"},{default:t(()=>[o(_(n.pengguna_jasa),1)]),_:2},1024),a(e(s),{whitespace:"nowrap","text-align":"center"},{default:t(()=>[o(_(n.waktu_mulai_in_ll),1)]),_:2},1024),a(e(s),{whitespace:"nowrap","text-align":"center"},{default:t(()=>[o(_(n.waktu_selesai_in_ll),1)]),_:2},1024),a(e(s),{whitespace:"nowrap","text-align":"right"},{default:t(()=>[o(_(n.nilai_kontrak_in_rupiah),1)]),_:2},1024),a(e(s),{whitespace:"nowrap","text-align":"center"},{default:t(()=>[a(i,M(B({text:n.status_proyek_in_string,variant:n.status_proyek==400?"danger-transparent":"transparent"})),null,16)]),_:2},1024),x.value?(u(),k(e(s),{key:0,whitespace:"nowrap"},{default:t(()=>[m("div",oa,[a(i,{onClick:R=>V(n),variant:"link",text:"Edit"},null,8,["onClick"]),a(i,{onClick:R=>j(n.id_proyek),variant:"danger-link",text:"Delete"},null,8,["onClick"])])]),_:2},1024)):D("",!0)]),_:2},1040))),128)):(u(),k(e(w),{key:1,last:""},{default:t(()=>[a(e(s),{colspan:"7","text-align":"center"},{default:t(()=>[o(" Proyek tidak ditemukan ")]),_:1})]),_:1}))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})],64)}}});export{Ma as default};
========
import{_ as z,a as F,C as H}from"./Content-c6f442a5.js";import{C as K,a as U,_ as W}from"./Card-7d71d8a7.js";import{T as q,a as A,_ as w,b as r,c as I,d as s}from"./Table-3adccec2.js";import{_ as J}from"./Create.m.vue_vue_type_script_setup_true_lang-2dac1e87.js";import{_ as O}from"./Edit.m.vue_vue_type_script_setup_true_lang-46067580.js";import{_ as Z}from"./Delete.m.vue_vue_type_script_setup_true_lang-d01d4578.js";import{_ as G}from"./Search.m.vue_vue_type_script_setup_true_lang-824ad1ff.js";import{t as Q}from"./number-6d20867b.js";import{l as C}from"./date-7cb373b2.js";import{M as f}from"./modal-cb471a77.js";import{T as P}from"./toastify-1f71f880.js";import{d as X,K as Y,b as y,l as aa,e as $,c as b,h as a,u as e,g as t,F as T,o as u,Z as ea,n as M,j as B,a as m,f as k,p as o,q as D,s as ta,m as na,z as sa,t as _}from"./app-75a3a99f.js";import"./Modal.vue_vue_type_style_index_0_scoped_fdb70d85_lang-9b77fc3b.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Footer-8b073701.js";import"./Head.vue_vue_type_script_setup_true_lang-0b8949ad.js";import"./Input.vue_vue_type_script_setup_true_lang-8599c816.js";import"./Label.vue_vue_type_script_setup_true_lang-21506f02.js";import"./Error.vue_vue_type_script_setup_true_lang-f9f51393.js";import"./Select.vue_vue_type_script_setup_true_lang-f552b2ec.js";const la={class:"flex justify-between items-center"},ra={class:"line-clamp-2 hover:line-clamp-none"},oa={class:"flex"},Ma=X({__name:"Index",props:{daftar_proyek:{}},setup(N){const L=N,c=Y(),g=c.props.permissions,x=y(()=>!!(g.includes("create proyek")&&g.includes("update proyek")&&g.includes("delete proyek"))),h=y(()=>({data:L.daftar_proyek.data.map(l=>{const d=C(l.waktu_mulai),i=C(l.waktu_selesai),n=l.status_proyek==400?"Closed":"On Progress",v=Q(l.nilai_kontrak);return{...l,waktu_mulai_in_ll:d,waktu_selesai_in_ll:i,status_proyek_in_string:n,nilai_kontrak_in_rupiah:v}})}));function S(){f.pop(J)}function V(p){f.pop(O,{proyek:p})}function j(p){f.pop(Z,{id_proyek:p})}function E(){f.pop(G)}return aa(()=>{c.props.flash.success&&P.success(c.props.flash.success),c.props.flash.error&&P.error(c.props.flash.error)}),(p,l)=>{const d=$("fas-icon"),i=$("ease-button");return u(),b(T,null,[a(e(ea),{title:"Daftar Proyek"}),a(z,null,{breadcrumb:t(()=>[a(F,M(B({second:"Proyek",current:"Daftar Proyek"})),null,16)]),default:t(()=>[a(H,null,{default:t(()=>[a(e(K),null,{default:t(()=>[a(e(U),null,{default:t(()=>[m("div",la,[m("div",null,[x.value?(u(),k(i,{key:0,onClick:S,slotted:""},{default:t(()=>[a(d,{icon:"fa-solid fa-plus",class:"mr-1"}),o(" Proyek Baru ")]),_:1})):D("",!0)]),a(i,{onClick:l[0]||(l[0]=n=>E()),variant:"transparent",slotted:""},{default:t(()=>[a(d,{icon:"fa-solid fa-search",class:"mr-1"}),o(" Pencarian ")]),_:1})])]),_:1}),a(e(W),{table:""},{default:t(()=>[a(e(q),null,{default:t(()=>[a(e(A),null,{default:t(()=>[a(e(w),null,{default:t(()=>[a(e(r),{value:"Nama Proyek"}),a(e(r),{value:"Tahun Anggaran"}),a(e(r),{value:"Pengguna Jasa"}),a(e(r),{"text-align":"center",value:"Waktu Mulai"}),a(e(r),{"text-align":"center",value:"Waktu Selesai"}),a(e(r),{"text-align":"right",value:"Nilai Kontrak"}),a(e(r),{"text-align":"center",value:"Status"}),a(e(r))]),_:1})]),_:1}),a(e(I),null,{default:t(()=>[h.value.data.length?(u(!0),b(T,{key:0},ta(h.value.data,(n,v)=>(u(),k(e(w),na({key:n.id_proyek},{last:v===h.value.data.length-1}),{default:t(()=>[a(e(s),null,{default:t(()=>[a(e(sa),{class:"link",href:"#"},{default:t(()=>[m("span",ra,_(n.nama_proyek),1)]),_:2},1024)]),_:2},1024),a(e(s),{whitespace:"nowrap"},{default:t(()=>[o(_(n.tahun_anggaran),1)]),_:2},1024),a(e(s),{whitespace:"normal"},{default:t(()=>[o(_(n.pengguna_jasa),1)]),_:2},1024),a(e(s),{whitespace:"nowrap","text-align":"center"},{default:t(()=>[o(_(n.waktu_mulai_in_ll),1)]),_:2},1024),a(e(s),{whitespace:"nowrap","text-align":"center"},{default:t(()=>[o(_(n.waktu_selesai_in_ll),1)]),_:2},1024),a(e(s),{whitespace:"nowrap","text-align":"right"},{default:t(()=>[o(_(n.nilai_kontrak_in_rupiah),1)]),_:2},1024),a(e(s),{whitespace:"nowrap","text-align":"center"},{default:t(()=>[a(i,M(B({text:n.status_proyek_in_string,variant:n.status_proyek==400?"danger-transparent":"transparent"})),null,16)]),_:2},1024),x.value?(u(),k(e(s),{key:0,whitespace:"nowrap"},{default:t(()=>[m("div",oa,[a(i,{onClick:R=>V(n),variant:"link",text:"Edit"},null,8,["onClick"]),a(i,{onClick:R=>j(n.id_proyek),variant:"danger-link",text:"Delete"},null,8,["onClick"])])]),_:2},1024)):D("",!0)]),_:2},1040))),128)):(u(),k(e(w),{key:1,last:""},{default:t(()=>[a(e(s),{colspan:"7","text-align":"center"},{default:t(()=>[o(" Proyek tidak ditemukan ")]),_:1})]),_:1}))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})],64)}}});export{Ma as default};
>>>>>>>> dev:public/build/assets/Index-85a4cf72.js
