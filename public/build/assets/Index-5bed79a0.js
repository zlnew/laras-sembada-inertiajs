import{_ as L,a as N,C as P}from"./Content-2100571c.js";import{C as j,a as M,_ as V}from"./Card-7904da0e.js";import{T as D,a as E,_ as f,b as p,c as F,d as r}from"./Table-22ce2a28.js";import{T as k}from"./toastify-a8957f2e.js";import{d as H,K as q,k as z,e as g,c as h,h as a,u as e,g as n,F as b,o as _,Z as I,n as K,j as S,a as o,l as m,q as U,f as y,m as Z,t as i}from"./app-7652bf12.js";import{M as d}from"./modal-9886d17c.js";import{_ as A}from"./SearchModal.vue_vue_type_script_setup_true_lang-0461861b.js";import{_ as G}from"./CreateModal.vue_vue_type_script_setup_true_lang-3b93c551.js";import{_ as J}from"./EditModal.vue_vue_type_script_setup_true_lang-2e362ea3.js";import{_ as O}from"./DeleteModal.vue_vue_type_script_setup_true_lang-946946a6.js";import"./Modal.vue_vue_type_style_index_0_scoped_fdb70d85_lang-6da5b1e0.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Footer-cad56d32.js";import"./Head.vue_vue_type_script_setup_true_lang-70f25432.js";import"./Input.vue_vue_type_script_setup_true_lang-615dbe85.js";import"./Label.vue_vue_type_script_setup_true_lang-528e2482.js";import"./Select.vue_vue_type_script_setup_true_lang-c17ebf97.js";import"./Error.vue_vue_type_script_setup_true_lang-0ad18481.js";const Q={class:"flex justify-between items-center"},W={class:"font-semibold text-primary"},X={class:"font-semibold text-primary/60"},Y={class:"font-semibold text-primary"},aa={class:"font-semibold text-primary"},ea={class:"text-primary/60"},na={class:"flex"},va=H({__name:"Index",props:{rekening:{},banks:{}},setup(C){const v=C,l=q();function x(){d.pop(A,{banks:v.banks})}function $(){d.pop(G)}function R(t){d.pop(J,{rekening:t})}function w(t){d.pop(O,{id_rekening:t})}return z(()=>{l.props.flash.success&&k.success(l.props.flash.success),l.props.flash.error&&k.error(l.props.flash.error)}),(t,sa)=>{const u=g("fas-icon"),c=g("ease-button");return _(),h(b,null,[a(e(I),{title:"Rekening"}),a(L,null,{breadcrumb:n(()=>[a(N,K(S({second:"Master",current:"Rekening"})),null,16)]),default:n(()=>[a(P,null,{default:n(()=>[a(e(j),null,{default:n(()=>[a(e(M),{class:"mb-4"},{default:n(()=>[o("div",Q,[a(c,{onClick:$,slotted:""},{default:n(()=>[a(u,{icon:"fa-solid fa-plus",class:"mr-1"}),m(" Tambah Rekening ")]),_:1}),a(c,{onClick:x,variant:"transparent",slotted:""},{default:n(()=>[a(u,{icon:"fa-solid fa-search",class:"mr-1"}),m(" Pencarian ")]),_:1})])]),_:1}),a(e(V),{table:""},{default:n(()=>[a(e(D),null,{default:n(()=>[a(e(E),null,{default:n(()=>[a(e(f),null,{default:n(()=>[a(e(p),{value:"Nama"}),a(e(p),{value:"Bank"}),a(e(p),{value:"Rekening"}),a(e(p))]),_:1})]),_:1}),a(e(F),null,{default:n(()=>[t.rekening.data.length?(_(!0),h(b,{key:0},U(t.rekening.data,(s,T)=>(_(),y(e(f),Z({key:s.id},{last:T===t.rekening.data.length-1}),{default:n(()=>[a(e(r),{whitespace:"nowrap"},{default:n(()=>[o("span",W,i(s.nama),1),o("p",X,i(s.jabatan),1)]),_:2},1024),a(e(r),{whitespace:"nowrap"},{default:n(()=>[o("span",Y,i(s.nama_bank),1)]),_:2},1024),a(e(r),{whitespace:"normal"},{default:n(()=>[o("span",aa,i(s.nomor_rekening)+", ",1),o("span",ea,i(s.nama_rekening),1)]),_:2},1024),a(e(r),{whitespace:"nowrap"},{default:n(()=>[o("div",na,[a(c,{onClick:B=>R(s),variant:"link",text:"Edit"},null,8,["onClick"]),a(c,{onClick:B=>w(s.id_rekening),variant:"danger-link",text:"Delete"},null,8,["onClick"])])]),_:2},1024)]),_:2},1040))),128)):(_(),y(e(f),{key:1,last:""},{default:n(()=>[a(e(r),{colspan:"4","text-align":"center"},{default:n(()=>[m(" Rekening tidak ditemukan ")]),_:1})]),_:1}))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})],64)}}});export{va as default};
