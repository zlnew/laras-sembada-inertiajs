import{d as v,T as w,e as b,c as d,h as s,g as n,u as e,i as V,o as u,a as t,m as r,F as h,q as C,n as x,j as y,t as k}from"./app-4ca9d8d6.js";import{u as z}from"./Modal.vue_vue_type_style_index_0_scoped_fdb70d85_lang-3af0e63c.js";import{M,a as $,_ as P}from"./Footer-ec59c2ed.js";import{_ as S}from"./Head.vue_vue_type_script_setup_true_lang-ccd69e66.js";import{_ as p}from"./Input.vue_vue_type_script_setup_true_lang-d52ac3f0.js";import{_ as m}from"./Label.vue_vue_type_script_setup_true_lang-73da207e.js";import{_ as i}from"./Error.vue_vue_type_script_setup_true_lang-65ee1b9f.js";import{_ as U}from"./Select.vue_vue_type_script_setup_true_lang-da965e7d.js";const B=["onSubmit"],F={class:"w-full mb-4"},L={class:"w-full mb-4"},N={class:"w-full mb-4"},E={class:"w-full mb-4"},T=t("option",{value:""},"Pilih Jabatan",-1),A=["value"],J={class:"space-x-2"},Q=v({__name:"CreateModal",props:{roles:{}},setup(R){const _=z(),a=w({name:null,email:null,password:null,role:null});function c(){a.post(route("users.store"),{onSuccess:()=>{_.close()}})}return(g,l)=>{const f=b("ease-button");return u(),d("form",{onSubmit:V(c,["prevent"])},[s(e(P),{size:"xl"},{default:n(()=>[s(e(S),{title:"Form Tambah User"}),s(e(M),null,{default:n(()=>[t("div",F,[s(e(m),{for:"name",value:"Nama Lengkap"}),s(e(p),r({modelValue:e(a).name,"onUpdate:modelValue":l[0]||(l[0]=o=>e(a).name=o)},{type:"text",id:"name",size:"lg",autocomplete:"off",placeholder:"Nama Lengkap"}),null,16,["modelValue"]),s(e(i),{class:"mt-2",message:e(a).errors.name},null,8,["message"])]),t("div",L,[s(e(m),{for:"email",value:"Email Address"}),s(e(p),r({modelValue:e(a).email,"onUpdate:modelValue":l[1]||(l[1]=o=>e(a).email=o)},{type:"email",id:"email",size:"lg",autocomplete:"off",placeholder:"Email Address"}),null,16,["modelValue"]),s(e(i),{class:"mt-2",message:e(a).errors.email},null,8,["message"])]),t("div",N,[s(e(m),{for:"password",value:"Password"}),s(e(p),r({modelValue:e(a).password,"onUpdate:modelValue":l[2]||(l[2]=o=>e(a).password=o)},{type:"password",id:"password",size:"lg",autocomplete:"off",placeholder:"(Opsional). The default password is: password"}),null,16,["modelValue"]),s(e(i),{class:"mt-2",message:e(a).errors.password},null,8,["message"])]),t("div",E,[s(e(m),{for:"role",value:"Role/Jabatan"}),s(e(U),r({modelValue:e(a).role,"onUpdate:modelValue":l[3]||(l[3]=o=>e(a).role=o)},{id:"role",size:"lg"}),{default:n(()=>[T,(u(!0),d(h,null,C(g.roles,o=>(u(),d("option",{value:o.name},k(o.name),9,A))),256))]),_:1},16,["modelValue"]),s(e(i),{class:"mt-2",message:e(a).errors.role},null,8,["message"])])]),_:1}),s(e($),null,{default:n(()=>[s(f,r({onClick:e(_).close},{variant:"transparent",type:"button",text:"Close"}),null,16,["onClick"]),t("div",J,[s(f,x(y({type:"submit",text:"Create",loading:e(a).processing,onLoading:()=>({text:"Creating data..."})})),null,16)])]),_:1})]),_:1})],40,B)}}});export{Q as _};
