import{_ as L,a as N,C as P}from"./Content-e6324e0d.js";import{C as E,a as M,_ as V}from"./Card-0a4ead6f.js";import{T as j,a as z,_ as d,b as c,c as D,d as l}from"./Table-39fba157.js";import{T as h}from"./toastify-f2a1b97e.js";import{d as F,K as H,k as R,e as k,c as C,h as a,u as e,g as s,F as b,o as m,Z as q,n as I,j as K,a as v,l as r,q as S,f as $,m as Z,t as _}from"./app-4ca9d8d6.js";import{M as p}from"./modal-4ebc21a1.js";import{_ as A}from"./SearchModal.vue_vue_type_script_setup_true_lang-00d4a595.js";import{_ as G}from"./CreateModal.vue_vue_type_script_setup_true_lang-433f570e.js";import{_ as J}from"./EditModal.vue_vue_type_script_setup_true_lang-45a7e8d8.js";import{_ as O}from"./DeleteModal.vue_vue_type_script_setup_true_lang-35e37029.js";import"./Modal.vue_vue_type_style_index_0_scoped_fdb70d85_lang-3af0e63c.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Footer-ec59c2ed.js";import"./Head.vue_vue_type_script_setup_true_lang-ccd69e66.js";import"./Input.vue_vue_type_script_setup_true_lang-d52ac3f0.js";import"./Label.vue_vue_type_script_setup_true_lang-73da207e.js";import"./Select.vue_vue_type_script_setup_true_lang-da965e7d.js";import"./Error.vue_vue_type_script_setup_true_lang-65ee1b9f.js";const Q={class:"flex justify-between items-center"},W={class:"flex"},ka=F({__name:"Index",props:{users:{},roles:{}},setup(y){const f=y,n=H();function g(){p.pop(A,{roles:f.roles})}function w(){p.pop(G,{roles:f.roles})}function x(t){p.pop(J,{user:t,roles:f.roles})}function U(t){p.pop(O,{id:t})}return R(()=>{n.props.flash.success&&h.success(n.props.flash.success),n.props.flash.error&&h.error(n.props.flash.error)}),(t,X)=>{const u=k("fas-icon"),i=k("ease-button");return m(),C(b,null,[a(e(q),{title:"Users"}),a(L,null,{breadcrumb:s(()=>[a(N,I(K({second:"Master",current:"Users"})),null,16)]),default:s(()=>[a(P,null,{default:s(()=>[a(e(E),null,{default:s(()=>[a(e(M),{class:"mb-4"},{default:s(()=>[v("div",Q,[a(i,{onClick:w,slotted:""},{default:s(()=>[a(u,{icon:"fa-solid fa-plus",class:"mr-1"}),r(" Tambah User ")]),_:1}),a(i,{onClick:g,variant:"transparent",slotted:""},{default:s(()=>[a(u,{icon:"fa-solid fa-search",class:"mr-1"}),r(" Pencarian ")]),_:1})])]),_:1}),a(e(V),{table:""},{default:s(()=>[a(e(j),null,{default:s(()=>[a(e(z),null,{default:s(()=>[a(e(d),null,{default:s(()=>[a(e(c),{value:"Nama"}),a(e(c),{value:"Email"}),a(e(c),{value:"Role"}),a(e(c))]),_:1})]),_:1}),a(e(D),null,{default:s(()=>[t.users.data.length?(m(!0),C(b,{key:0},S(t.users.data,(o,T)=>(m(),$(e(d),Z({key:o.id},{last:T===t.users.data.length-1}),{default:s(()=>[a(e(l),{whitespace:"nowrap",class:"font-semibold text-primary"},{default:s(()=>[r(_(o.name),1)]),_:2},1024),a(e(l),{whitespace:"nowrap"},{default:s(()=>[r(_(o.email),1)]),_:2},1024),a(e(l),{whitespace:"normal",class:"capitalize font-semibold text-primary"},{default:s(()=>[r(_(o.role_name),1)]),_:2},1024),a(e(l),{whitespace:"nowrap"},{default:s(()=>[v("div",W,[a(i,{onClick:B=>x(o),variant:"link",text:"Edit"},null,8,["onClick"]),a(i,{onClick:B=>U(o.id),variant:"danger-link",text:"Delete"},null,8,["onClick"])])]),_:2},1024)]),_:2},1040))),128)):(m(),$(e(d),{key:1,last:""},{default:s(()=>[a(e(l),{colspan:"4","text-align":"center"},{default:s(()=>[r(" User tidak ditemukan ")]),_:1})]),_:1}))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})],64)}}});export{ka as default};
