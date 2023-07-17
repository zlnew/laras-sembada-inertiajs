import{d as U,K as F,b as H,T as R,l as A,e as w,c as _,h as a,u as e,g as n,F as x,o as s,Z as I,n as $,j as T,a as l,f as i,p as u,q as j,i as Z,m as L,s as G,z as m,t as k}from"./app-75a3a99f.js";import{_ as J,a as O,C as Q}from"./Content-c6f442a5.js";import{C as W,a as X,_ as Y}from"./Card-7d71d8a7.js";import{T as aa,a as ea,_ as y,b as d,c as na,d as r}from"./Table-3adccec2.js";import{_ as ta}from"./Input.vue_vue_type_script_setup_true_lang-8599c816.js";import{M as h}from"./modal-cb471a77.js";import{T as K}from"./toastify-1f71f880.js";import{_ as sa}from"./Create.m.vue_vue_type_script_setup_true_lang-9df531c1.js";import{_ as oa}from"./Edit.m.vue_vue_type_script_setup_true_lang-2fccb5d2.js";import{_ as ra}from"./Delete.m.vue_vue_type_script_setup_true_lang-85601112.js";import{_ as la}from"./CreatePenagihanModal.vue_vue_type_script_setup_true_lang-a6ab94ba.js";import"./Modal.vue_vue_type_style_index_0_scoped_fdb70d85_lang-9b77fc3b.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Footer-8b073701.js";import"./Head.vue_vue_type_script_setup_true_lang-0b8949ad.js";import"./Label.vue_vue_type_script_setup_true_lang-21506f02.js";import"./Error.vue_vue_type_script_setup_true_lang-f9f51393.js";import"./Select.vue_vue_type_script_setup_true_lang-f552b2ec.js";import"./Textarea.vue_vue_type_script_setup_true_lang-3b042892.js";const ia={class:"grid grid-cols-2 gap-4"},ua={class:"space-x-2"},da=["onSubmit"],pa={class:"flex justify-between items-center space-x-2"},ca={class:"line-clamp-2 hover:line-clamp-none"},_a={class:"font-semibold text-dark"},fa={key:1},ma={key:1},ha={key:1},ga={class:"flex"},za=U({__name:"Index",props:{keuangan:{},proyek:{}},setup(V){const v=V,p=F(),g=p.props.permissions,B=p.props.query,C=H(()=>!!(g.includes("create pengajuan dana")&&g.includes("update pengajuan dana")&&g.includes("delete pengajuan dana"))),f=R({nama_proyek:B.nama_proyek});function D(){h.pop(la,{daftar_proyek:v.proyek})}function M(){h.pop(sa,{daftar_proyek:v.proyek})}function N(o){h.pop(oa,{id_keuangan:o.id_keuangan,keperluan:o.keperluan})}function q(o){h.pop(ra,{id_keuangan:o})}function z(){f.get(route("keuangan"))}return A(()=>{p.props.flash.success&&K.success(p.props.flash.success),p.props.flash.error&&K.error(p.props.flash.error)}),(o,b)=>{const P=w("fas-icon"),c=w("ease-button");return s(),_(x,null,[a(e(I),{title:"Keuangan"}),a(J,null,{breadcrumb:n(()=>[a(O,$(T({second:"Keuangan",current:"Keuangan Proyek"})),null,16)]),default:n(()=>[a(Q,null,{default:n(()=>[a(e(W),null,{default:n(()=>[a(e(X),{class:"mb-4"},{default:n(()=>[l("div",ia,[l("div",ua,[C.value?(s(),i(c,{key:0,onClick:M,slotted:""},{default:n(()=>[a(P,{icon:"fa-solid fa-plus",class:"mr-1"}),u(" Tambah Keuangan Proyek ")]),_:1})):j("",!0),a(c,{onClick:D,slotted:""},{default:n(()=>[a(P,{icon:"fa-solid fa-plus",class:"mr-1"}),u(" Tambah Penagihan ")]),_:1})]),l("form",{onSubmit:Z(z,["prevent"])},[l("div",pa,[a(e(ta),L({modelValue:e(f).nama_proyek,"onUpdate:modelValue":b[0]||(b[0]=t=>e(f).nama_proyek=t)},{type:"search",size:"lg",placeholder:"Cari Berdasarkan Nama Proyek",autocomplete:"off"}),null,16,["modelValue"]),a(c,$(T({type:"submit",text:"Cari",loading:e(f).processing,onLoading:()=>({text:!1})})),null,16)])],40,da)])]),_:1}),a(e(Y),{table:""},{default:n(()=>[a(e(aa),null,{default:n(()=>[a(e(ea),null,{default:n(()=>[a(e(y),null,{default:n(()=>[a(e(d),{value:"Nama Proyek"}),a(e(d),{value:"Tahun Anggaran"}),a(e(d),{value:"Keperluan"}),a(e(d),{value:"Pengajuan Dana"}),a(e(d),{value:"Pencairan Dana"}),a(e(d),{value:"Penagihan"}),a(e(d))]),_:1})]),_:1}),a(e(na),null,{default:n(()=>[o.keuangan.data.length?(s(!0),_(x,{key:0},G(o.keuangan.data,(t,E)=>(s(),i(e(y),L({key:t.id_proyek},{last:E===o.keuangan.data.length-1}),{default:n(()=>[a(e(r),null,{default:n(()=>[a(e(m),{class:"link",href:"#"},{default:n(()=>[l("span",ca,k(t.nama_proyek),1)]),_:2},1024)]),_:2},1024),a(e(r),{whitespace:"nowrap"},{default:n(()=>[u(k(t.tahun_anggaran),1)]),_:2},1024),a(e(r),{whitespace:"nowrap"},{default:n(()=>[l("span",_a,k(t.keperluan),1)]),_:2},1024),a(e(r),{whitespace:"nowrap"},{default:n(()=>[t.id_pengajuan_dana?(s(),i(e(m),{key:0,class:"link text-xs",href:o.route("pengajuan_dana.detail",t.id_pengajuan_dana)},{default:n(()=>[u(" Lihat ")]),_:2},1032,["href"])):(s(),_("span",fa,"-"))]),_:2},1024),a(e(r),{whitespace:"nowrap"},{default:n(()=>[t.id_pencairan_dana?(s(),i(e(m),{key:0,class:"link text-xs",href:o.route("pencairan_dana.detail",t.id_pencairan_dana)},{default:n(()=>[u(" Lihat ")]),_:2},1032,["href"])):(s(),_("span",ma,"-"))]),_:2},1024),a(e(r),{whitespace:"nowrap"},{default:n(()=>[t.id_penagihan?(s(),i(e(m),{key:0,class:"link text-xs",href:o.route("penagihan.detail",t.id_penagihan)},{default:n(()=>[u(" Lihat ")]),_:2},1032,["href"])):(s(),_("span",ha,"-"))]),_:2},1024),C.value?(s(),i(e(r),{key:0,whitespace:"nowrap"},{default:n(()=>[l("div",ga,[a(c,{onClick:S=>N(t),variant:"link",text:"Edit"},null,8,["onClick"]),a(c,{onClick:S=>q(t.id_keuangan),variant:"danger-link",text:"Delete"},null,8,["onClick"])])]),_:2},1024)):j("",!0)]),_:2},1040))),128)):(s(),i(e(y),{key:1,last:""},{default:n(()=>[a(e(r),{colspan:"5","text-align":"center"},{default:n(()=>[u(" Keuangan proyek tidak ditemukan ")]),_:1})]),_:1}))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})],64)}}});export{za as default};
