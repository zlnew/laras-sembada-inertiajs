import{_ as L,a as N,C as P}from"./Content-5cc1c58b.js";import{C as j,a as M,_ as V}from"./Card-7cb1e392.js";import{T as D,a as E,_ as f,b as _,c as F,d as r}from"./Table-c8958af1.js";import{T as k}from"./toastify-87749bbf.js";import{d as H,K as q,k as z,e as g,c as h,h as a,u as e,g as n,F as b,o as d,Z as I,n as K,j as S,a as o,l as u,q as U,f as x,m as Z,t as l}from"./app-d8617931.js";import{M as p}from"./modal-bcd44fbd.js";import{_ as A}from"./SearchModal.vue_vue_type_script_setup_true_lang-242ca6f2.js";import{_ as G}from"./CreateModal.vue_vue_type_script_setup_true_lang-e19b70e9.js";import{_ as J}from"./EditModal.vue_vue_type_script_setup_true_lang-fb76145d.js";import{_ as O}from"./DeleteModal.vue_vue_type_script_setup_true_lang-39a3f3d7.js";import"./Modal.vue_vue_type_style_index_0_scoped_fdb70d85_lang-e5086b2c.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Footer-83a73d6d.js";import"./Head.vue_vue_type_script_setup_true_lang-d7fd5c8e.js";import"./Input.vue_vue_type_script_setup_true_lang-62b0e882.js";import"./Label.vue_vue_type_script_setup_true_lang-add11eb1.js";import"./Select.vue_vue_type_script_setup_true_lang-5a994cba.js";import"./Error.vue_vue_type_script_setup_true_lang-83417469.js";const Q={class:"flex justify-between items-center"},W={class:"font-semibold text-dark"},X={class:"text-dark/60"},Y={class:"font-semibold text-dark"},aa={class:"font-semibold text-dark"},ea={class:"text-dark/60"},na={class:"flex"},va=H({__name:"Index",props:{rekening:{},banks:{}},setup(C){const v=C,i=q();function $(){p.pop(A,{banks:v.banks})}function R(){p.pop(G)}function w(s){p.pop(J,{rekening:s})}function y(s){p.pop(O,{id_rekening:s})}return z(()=>{i.props.flash.success&&k.success(i.props.flash.success),i.props.flash.error&&k.error(i.props.flash.error)}),(s,ta)=>{const m=g("fas-icon"),c=g("ease-button");return d(),h(b,null,[a(e(I),{title:"Rekening"}),a(L,null,{breadcrumb:n(()=>[a(N,K(S({second:"Master",current:"Rekening"})),null,16)]),default:n(()=>[a(P,null,{default:n(()=>[a(e(j),null,{default:n(()=>[a(e(M),{class:"mb-4"},{default:n(()=>[o("div",Q,[a(c,{onClick:R,slotted:""},{default:n(()=>[a(m,{icon:"fa-solid fa-plus",class:"mr-1"}),u(" Tambah Rekening ")]),_:1}),a(c,{onClick:$,variant:"transparent",slotted:""},{default:n(()=>[a(m,{icon:"fa-solid fa-search",class:"mr-1"}),u(" Pencarian ")]),_:1})])]),_:1}),a(e(V),{table:""},{default:n(()=>[a(e(D),null,{default:n(()=>[a(e(E),null,{default:n(()=>[a(e(f),null,{default:n(()=>[a(e(_),{value:"Nama"}),a(e(_),{"text-align":"right",value:"Bank"}),a(e(_),{value:"Rekening"}),a(e(_))]),_:1})]),_:1}),a(e(F),null,{default:n(()=>[s.rekening.data.length?(d(!0),h(b,{key:0},U(s.rekening.data,(t,T)=>(d(),x(e(f),Z({key:t.id},{last:T===s.rekening.data.length-1}),{default:n(()=>[a(e(r),{whitespace:"nowrap"},{default:n(()=>[o("span",W,l(t.nama),1),o("p",X,l(t.jabatan),1)]),_:2},1024),a(e(r),{"text-align":"right",whitespace:"nowrap"},{default:n(()=>[o("span",Y,l(t.nama_bank),1)]),_:2},1024),a(e(r),{whitespace:"normal"},{default:n(()=>[o("span",aa,l(t.nomor_rekening),1),o("p",ea,l(t.nama_rekening),1)]),_:2},1024),a(e(r),{whitespace:"nowrap"},{default:n(()=>[o("div",na,[a(c,{onClick:B=>w(t),variant:"link",text:"Edit"},null,8,["onClick"]),a(c,{onClick:B=>y(t.id_rekening),variant:"danger-link",text:"Delete"},null,8,["onClick"])])]),_:2},1024)]),_:2},1040))),128)):(d(),x(e(f),{key:1,last:""},{default:n(()=>[a(e(r),{colspan:"4","text-align":"center"},{default:n(()=>[u(" Rekening tidak ditemukan ")]),_:1})]),_:1}))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})],64)}}});export{va as default};
