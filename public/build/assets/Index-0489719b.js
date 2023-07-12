import{d as F,K as H,b as $,T as I,k as J,e as h,c as w,h as a,u as e,g as t,F as T,o,Z as K,n as y,j as v,a as l,f as c,l as m,p as R,i as O,m as V,q as Z,y as A,t as C}from"./app-f3d06840.js";import{_ as G,a as Q,C as W}from"./Content-285b962e.js";import{C as X,a as Y,_ as aa}from"./Card-4262b7f5.js";import{T as ea,a as ta,_ as x,b as d,c as sa,d as i}from"./Table-f54ef66a.js";import{_ as na}from"./Input.vue_vue_type_script_setup_true_lang-2aad7bcd.js";import{M as P}from"./modal-3b9703f4.js";import{T as M}from"./toastify-519f6f42.js";import{_ as ra}from"./Create.m.vue_vue_type_script_setup_true_lang-1b699edb.js";import{_ as oa}from"./Edit.m.vue_vue_type_script_setup_true_lang-2f974efa.js";import{_ as la}from"./Delete.m.vue_vue_type_script_setup_true_lang-6f59d503.js";import"./Modal.vue_vue_type_style_index_0_scoped_fdb70d85_lang-9839c54d.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Footer-31cf0e06.js";import"./Head.vue_vue_type_script_setup_true_lang-0b0294fa.js";import"./Label.vue_vue_type_script_setup_true_lang-9c91305f.js";import"./Error.vue_vue_type_script_setup_true_lang-8a3419fd.js";import"./Select.vue_vue_type_script_setup_true_lang-7cc7d137.js";const ia={class:"grid grid-cols-2 gap-4"},ua=["onSubmit"],da={class:"flex justify-between items-center space-x-2"},_a={class:"line-clamp-2 hover:line-clamp-none"},pa={class:"flex"},Va=F({__name:"Index",props:{rab:{},proyek:{}},setup(N){const f=N,r=H(),g=r.props.permissions,E=r.props.query,B=$(()=>!!(g.includes("create rab")&&g.includes("update rab")&&g.includes("delete rab"))),k=$(()=>({data:f.rab.data.map(u=>{const b=u.status_rab==400?"Closed":"On Progress";return{...u,status_rab_in_string:b}})})),_=I({nama_proyek:E.nama_proyek});function L(){P.pop(ra,{daftar_proyek:f.proyek})}function D(n){P.pop(oa,{id_rab:n.id_rap,id_proyek:n.id_proyek,nama_proyek:n.nama_proyek,daftar_proyek:f.proyek})}function S(n){P.pop(la,{id_rab:n})}function j(){_.get(route("rab"))}return J(()=>{r.props.flash.success&&M.success(r.props.flash.success),r.props.flash.error&&M.error(r.props.flash.error)}),(n,u)=>{const b=h("fas-icon"),p=h("ease-button"),q=h("EaseButton");return o(),w(T,null,[a(e(K),{title:"RAP"}),a(G,null,{breadcrumb:t(()=>[a(Q,y(v({second:"RAB",current:"Rencana Anggaran Biaya"})),null,16)]),default:t(()=>[a(W,null,{default:t(()=>[a(e(X),null,{default:t(()=>[a(e(Y),{class:"mb-4"},{default:t(()=>[l("div",ia,[l("div",null,[B.value?(o(),c(p,{key:0,onClick:L,slotted:""},{default:t(()=>[a(b,{icon:"fa-solid fa-plus",class:"mr-1"}),m(" Buat RAB Proyek ")]),_:1})):R("",!0)]),l("form",{onSubmit:O(j,["prevent"])},[l("div",da,[a(e(na),V({modelValue:e(_).nama_proyek,"onUpdate:modelValue":u[0]||(u[0]=s=>e(_).nama_proyek=s)},{type:"search",size:"lg",placeholder:"Cari Berdasarkan Nama Proyek",autocomplete:"off"}),null,16,["modelValue"]),a(p,y(v({type:"submit",text:"Cari",loading:e(_).processing,onLoading:()=>({text:!1})})),null,16)])],40,ua)])]),_:1}),a(e(aa),{table:""},{default:t(()=>[a(e(ea),null,{default:t(()=>[a(e(ta),null,{default:t(()=>[a(e(x),null,{default:t(()=>[a(e(d),{value:"Nama Proyek"}),a(e(d),{value:"Tahun Anggaran"}),a(e(d),{value:"Pengguna Jasa"}),a(e(d),{"text-align":"center",value:"Status"}),a(e(d))]),_:1})]),_:1}),a(e(sa),null,{default:t(()=>[k.value.data.length?(o(!0),w(T,{key:0},Z(k.value.data,(s,U)=>(o(),c(e(x),V({key:s.id_proyek},{last:U===k.value.data.length-1}),{default:t(()=>[a(e(i),null,{default:t(()=>[a(e(A),{class:"link",href:n.route("detail_rab",s.id_rab)},{default:t(()=>[l("span",_a,C(s.nama_proyek),1)]),_:2},1032,["href"])]),_:2},1024),a(e(i),{whitespace:"nowrap"},{default:t(()=>[m(C(s.tahun_anggaran),1)]),_:2},1024),a(e(i),{whitespace:"nowrap"},{default:t(()=>[m(C(s.pengguna_jasa),1)]),_:2},1024),a(e(i),{whitespace:"nowrap","text-align":"center"},{default:t(()=>[a(e(A),{href:n.route("detail_rab",s.id_rab)},{default:t(()=>[a(q,y(v({text:s.status_rab_in_string,variant:s.status_rab==400?"danger-transparent":"transparent"})),null,16)]),_:2},1032,["href"])]),_:2},1024),B.value?(o(),c(e(i),{key:0,whitespace:"nowrap"},{default:t(()=>[l("div",pa,[a(p,{onClick:z=>D(s),variant:"link",text:"Edit"},null,8,["onClick"]),a(p,{onClick:z=>S(s.id_rab),variant:"danger-link",text:"Delete"},null,8,["onClick"])])]),_:2},1024)):R("",!0)]),_:2},1040))),128)):(o(),c(e(x),{key:1,last:""},{default:t(()=>[a(e(i),{colspan:"5","text-align":"center"},{default:t(()=>[m(" RAB tidak ditemukan ")]),_:1})]),_:1}))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})],64)}}});export{Va as default};
