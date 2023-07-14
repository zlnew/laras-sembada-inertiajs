import{d as b,T as V,e as h,c as u,h as s,g as n,u as e,i as x,o as p,a as t,m,F as U,q as y,n as k,j as z,t as C}from"./app-7652bf12.js";import{u as M}from"./Modal.vue_vue_type_style_index_0_scoped_fdb70d85_lang-6da5b1e0.js";import{M as $,a as P,_ as S}from"./Footer-cad56d32.js";import{_ as B}from"./Head.vue_vue_type_script_setup_true_lang-70f25432.js";import{_ as f}from"./Input.vue_vue_type_script_setup_true_lang-615dbe85.js";import{_ as i}from"./Label.vue_vue_type_script_setup_true_lang-528e2482.js";import{_ as d}from"./Error.vue_vue_type_script_setup_true_lang-0ad18481.js";import{_ as E}from"./Select.vue_vue_type_script_setup_true_lang-c17ebf97.js";const F=["onSubmit"],L={class:"w-full mb-4"},N={class:"w-full mb-4"},A={class:"w-full mb-4"},J={class:"w-full mb-4"},R=t("option",{value:""},"Pilih Jabatan",-1),T=["value"],j={class:"space-x-2"},W=b({__name:"EditModal",props:{user:{},roles:{}},setup(g){const r=g,_=M(),a=V({id:r.user.id,name:r.user.name,email:r.user.email,password:null,role:r.user.role_name});function v(){a.patch(route("users.update",r.user.id),{onSuccess:()=>{_.close()}})}return(w,l)=>{const c=h("ease-button");return p(),u("form",{onSubmit:x(v,["prevent"])},[s(e(S),{size:"xl"},{default:n(()=>[s(e(B),{title:"Form Ubah User"}),s(e($),null,{default:n(()=>[t("div",L,[s(e(i),{for:"name",value:"Nama Lengkap"}),s(e(f),m({modelValue:e(a).name,"onUpdate:modelValue":l[0]||(l[0]=o=>e(a).name=o)},{type:"text",id:"name",size:"lg",autocomplete:"off",placeholder:"Nama Lengkap"}),null,16,["modelValue"]),s(e(d),{class:"mt-2",message:e(a).errors.name},null,8,["message"])]),t("div",N,[s(e(i),{for:"email",value:"Email Address"}),s(e(f),m({modelValue:e(a).email,"onUpdate:modelValue":l[1]||(l[1]=o=>e(a).email=o)},{type:"email",id:"email",size:"lg",autocomplete:"off",placeholder:"Email Address"}),null,16,["modelValue"]),s(e(d),{class:"mt-2",message:e(a).errors.email},null,8,["message"])]),t("div",A,[s(e(i),{for:"password",value:"Password"}),s(e(f),m({modelValue:e(a).password,"onUpdate:modelValue":l[2]||(l[2]=o=>e(a).password=o)},{type:"password",id:"password",size:"lg",autocomplete:"off",placeholder:"(Opsional). The default password is: password"}),null,16,["modelValue"]),s(e(d),{class:"mt-2",message:e(a).errors.password},null,8,["message"])]),t("div",J,[s(e(i),{for:"role",value:"Role/Jabatan"}),s(e(E),m({modelValue:e(a).role,"onUpdate:modelValue":l[3]||(l[3]=o=>e(a).role=o)},{id:"role",size:"lg"}),{default:n(()=>[R,(p(!0),u(U,null,y(w.roles,o=>(p(),u("option",{value:o.name},C(o.name),9,T))),256))]),_:1},16,["modelValue"]),s(e(d),{class:"mt-2",message:e(a).errors.role},null,8,["message"])])]),_:1}),s(e(P),null,{default:n(()=>[s(c,m({onClick:e(_).close},{variant:"transparent",type:"button",text:"Close"}),null,16,["onClick"]),t("div",j,[s(c,k(z({type:"submit",text:"Update",loading:e(a).processing,onLoading:()=>({text:"Updating data..."})})),null,16)])]),_:1})]),_:1})],40,F)}}});export{W as _};
