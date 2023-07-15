import{d as M,K as P,T as j,k as q,e as f,c as g,h as a,u as t,g as e,F as h,o as i,Z as z,n as k,j as C,a as r,l as c,i as D,m as b,q as E,f as y,t as F}from"./app-d8617931.js";import{_ as H,a as U,C as I}from"./Content-5cc1c58b.js";import{C as K,a as R,_ as Z}from"./Card-7cb1e392.js";import{T as A,a as G,_ as d,b as S,c as J,d as m}from"./Table-c8958af1.js";import{_ as O}from"./Input.vue_vue_type_script_setup_true_lang-62b0e882.js";import{T as v}from"./toastify-87749bbf.js";import{M as p}from"./modal-bcd44fbd.js";import{_ as Q}from"./CreateModal.vue_vue_type_script_setup_true_lang-7b61b029.js";import{_ as W}from"./EditModal.vue_vue_type_script_setup_true_lang-b212a7a3.js";import{_ as X}from"./DeleteModal.vue_vue_type_script_setup_true_lang-9730a4b4.js";import"./Modal.vue_vue_type_style_index_0_scoped_fdb70d85_lang-e5086b2c.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Footer-83a73d6d.js";import"./Head.vue_vue_type_script_setup_true_lang-d7fd5c8e.js";import"./Label.vue_vue_type_script_setup_true_lang-add11eb1.js";import"./Error.vue_vue_type_script_setup_true_lang-83417469.js";const Y={class:"grid grid-cols-2 gap-4"},aa=["onSubmit"],ta={class:"flex justify-between items-center space-x-2"},ea={class:"flex justify-end"},ba=M({__name:"Index",props:{satuan:{}},setup(sa){const o=P(),x=o.props.query,l=j({nama_satuan:x.nama_satuan});function $(){l.get(route("satuan"))}function T(){p.pop(Q)}function w(s){p.pop(W,{satuan:s})}function B(s){p.pop(X,{id_satuan:s})}return q(()=>{o.props.flash.success&&v.success(o.props.flash.success),o.props.flash.error&&v.error(o.props.flash.error)}),(s,_)=>{const V=f("fas-icon"),u=f("ease-button");return i(),g(h,null,[a(t(z),{title:"Satuan"}),a(H,null,{breadcrumb:e(()=>[a(U,k(C({second:"Master",current:"Satuan"})),null,16)]),default:e(()=>[a(I,null,{default:e(()=>[a(t(K),null,{default:e(()=>[a(t(R),{class:"mb-4"},{default:e(()=>[r("div",Y,[r("div",null,[a(u,{onClick:T,slotted:""},{default:e(()=>[a(V,{icon:"fa-solid fa-plus",class:"mr-1"}),c(" Tambah Satuan ")]),_:1})]),r("form",{onSubmit:D($,["prevent"])},[r("div",ta,[a(t(O),b({modelValue:t(l).nama_satuan,"onUpdate:modelValue":_[0]||(_[0]=n=>t(l).nama_satuan=n)},{type:"search",size:"lg",placeholder:"Cari Berdasarkan Nama Satuan",autocomplete:"off"}),null,16,["modelValue"]),a(u,k(C({type:"submit",text:"Cari",loading:t(l).processing,onLoading:()=>({text:!1})})),null,16)])],40,aa)])]),_:1}),a(t(Z),{table:""},{default:e(()=>[a(t(A),null,{default:e(()=>[a(t(G),null,{default:e(()=>[a(t(d),null,{default:e(()=>[a(t(S),{value:"Nama Satuan"}),a(t(S))]),_:1})]),_:1}),a(t(J),null,{default:e(()=>[s.satuan.data.length?(i(!0),g(h,{key:0},E(s.satuan.data,(n,L)=>(i(),y(t(d),b({key:n.id},{last:L===s.satuan.data.length-1}),{default:e(()=>[a(t(m),{whitespace:"nowrap",class:"font-semibold text-dark"},{default:e(()=>[c(F(n.nama_satuan),1)]),_:2},1024),a(t(m),{"text-align":"right",whitespace:"nowrap"},{default:e(()=>[r("div",ea,[a(u,{onClick:N=>w(n),variant:"link",text:"Edit"},null,8,["onClick"]),a(u,{onClick:N=>B(n.id_satuan),variant:"danger-link",text:"Delete"},null,8,["onClick"])])]),_:2},1024)]),_:2},1040))),128)):(i(),y(t(d),{key:1,last:""},{default:e(()=>[a(t(m),{colspan:"2","text-align":"center"},{default:e(()=>[c(" Satuan tidak ditemukan ")]),_:1})]),_:1}))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})],64)}}});export{ba as default};
