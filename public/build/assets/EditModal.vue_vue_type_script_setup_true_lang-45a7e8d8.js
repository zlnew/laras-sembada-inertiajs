import{d as b,T as V,e as h,c as u,h as s,g as n,u as e,i as x,o as p,a as t,m as r,F as y,q as U,n as k,j as z,t as C}from"./app-4ca9d8d6.js";import{u as M}from"./Modal.vue_vue_type_style_index_0_scoped_fdb70d85_lang-3af0e63c.js";import{M as $,a as P,_ as S}from"./Footer-ec59c2ed.js";import{_ as B}from"./Head.vue_vue_type_script_setup_true_lang-ccd69e66.js";import{_ as f}from"./Input.vue_vue_type_script_setup_true_lang-d52ac3f0.js";import{_ as i}from"./Label.vue_vue_type_script_setup_true_lang-73da207e.js";import{_ as d}from"./Error.vue_vue_type_script_setup_true_lang-65ee1b9f.js";import{_ as E}from"./Select.vue_vue_type_script_setup_true_lang-da965e7d.js";const F=["onSubmit"],L={class:"w-full mb-4"},N={class:"w-full mb-4"},T={class:"w-full mb-4"},A={class:"w-full mb-4"},J=t("option",{value:""},"Pilih Jabatan",-1),R=["value"],j={class:"space-x-2"},W=b({__name:"EditModal",props:{user:{},roles:{}},setup(g){const m=g,_=M(),a=V({name:m.user.name,email:m.user.email,password:null,role:m.user.role_name});function v(){a.patch(route("users.update",m.user.id),{onSuccess:()=>{_.close()}})}return(w,l)=>{const c=h("ease-button");return p(),u("form",{onSubmit:x(v,["prevent"])},[s(e(S),{size:"xl"},{default:n(()=>[s(e(B),{title:"Form Tambah User"}),s(e($),null,{default:n(()=>[t("div",L,[s(e(i),{for:"name",value:"Nama Lengkap"}),s(e(f),r({modelValue:e(a).name,"onUpdate:modelValue":l[0]||(l[0]=o=>e(a).name=o)},{type:"text",id:"name",size:"lg",autocomplete:"off",placeholder:"Nama Lengkap"}),null,16,["modelValue"]),s(e(d),{class:"mt-2",message:e(a).errors.name},null,8,["message"])]),t("div",N,[s(e(i),{for:"email",value:"Email Address"}),s(e(f),r({modelValue:e(a).email,"onUpdate:modelValue":l[1]||(l[1]=o=>e(a).email=o)},{type:"email",id:"email",size:"lg",autocomplete:"off",placeholder:"Email Address"}),null,16,["modelValue"]),s(e(d),{class:"mt-2",message:e(a).errors.email},null,8,["message"])]),t("div",T,[s(e(i),{for:"password",value:"Password"}),s(e(f),r({modelValue:e(a).password,"onUpdate:modelValue":l[2]||(l[2]=o=>e(a).password=o)},{type:"password",id:"password",size:"lg",autocomplete:"off",placeholder:"(Opsional). The default password is: password"}),null,16,["modelValue"]),s(e(d),{class:"mt-2",message:e(a).errors.password},null,8,["message"])]),t("div",A,[s(e(i),{for:"role",value:"Role/Jabatan"}),s(e(E),r({modelValue:e(a).role,"onUpdate:modelValue":l[3]||(l[3]=o=>e(a).role=o)},{id:"role",size:"lg"}),{default:n(()=>[J,(p(!0),u(y,null,U(w.roles,o=>(p(),u("option",{value:o.name},C(o.name),9,R))),256))]),_:1},16,["modelValue"]),s(e(d),{class:"mt-2",message:e(a).errors.role},null,8,["message"])])]),_:1}),s(e(P),null,{default:n(()=>[s(c,r({onClick:e(_).close},{variant:"transparent",type:"button",text:"Close"}),null,16,["onClick"]),t("div",j,[s(c,k(z({type:"submit",text:"Update",loading:e(a).processing,onLoading:()=>({text:"Updating data..."})})),null,16)])]),_:1})]),_:1})],40,F)}}});export{W as _};
