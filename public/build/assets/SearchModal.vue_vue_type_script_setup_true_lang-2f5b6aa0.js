import{d as b,K as v,T as V,e as h,c as i,h as a,g as n,u as e,i as S,o as u,a as s,m as r,F as x,q as y,n as C,j as k,t as M}from"./app-803e4503.js";import{u as w}from"./Modal.vue_vue_type_style_index_0_scoped_fdb70d85_lang-e580dfec.js";import{M as z,a as P,_ as $}from"./Footer-87f34d66.js";import{_ as B}from"./Head.vue_vue_type_script_setup_true_lang-5a39fa07.js";import{_}from"./Input.vue_vue_type_script_setup_true_lang-15558a1c.js";import{_ as d}from"./Label.vue_vue_type_script_setup_true_lang-9987f883.js";import{_ as F}from"./Select.vue_vue_type_script_setup_true_lang-a0912154.js";import"./vue-select-834fdd5f.js";const U=["onSubmit"],q={class:"w-full mb-4"},N={class:"w-full mb-4"},j={class:"w-full mb-4"},E=s("option",{value:""},"Semua role/jabatan",-1),L=["value"],R={class:"space-x-2"},W=b({__name:"SearchModal",props:{roles:{}},setup(D){const p=w(),m=v().props.query,o=V({name:m.name,email:m.email,role:m.role});function f(){o.get(route("users"),{onSuccess:()=>{p.close()}})}return(g,l)=>{const c=h("ease-button");return u(),i("form",{onSubmit:S(f,["prevent"])},[a(e($),{size:"xl"},{default:n(()=>[a(e(B),{title:"Form Pencarian User"}),a(e(z),null,{default:n(()=>[s("div",q,[a(e(d),{for:"name",value:"Nama"}),a(e(_),r({modelValue:e(o).name,"onUpdate:modelValue":l[0]||(l[0]=t=>e(o).name=t)},{type:"text",id:"name",size:"lg",autocomplete:"off",placeholder:"Cari berdasarkan nama"}),null,16,["modelValue"])]),s("div",N,[a(e(d),{for:"email",value:"Email"}),a(e(_),r({modelValue:e(o).email,"onUpdate:modelValue":l[1]||(l[1]=t=>e(o).email=t)},{type:"email",id:"email",size:"lg",autocomplete:"off",placeholder:"Cari berdasarkan email"}),null,16,["modelValue"])]),s("div",j,[a(e(d),{for:"role",value:"Role/Jabatan"}),a(e(F),r({modelValue:e(o).role,"onUpdate:modelValue":l[2]||(l[2]=t=>e(o).role=t)},{id:"role",size:"lg"}),{default:n(()=>[E,(u(!0),i(x,null,y(g.roles,t=>(u(),i("option",{value:t.name},M(t.name),9,L))),256))]),_:1},16,["modelValue"])])]),_:1}),a(e(P),null,{default:n(()=>[a(c,r({onClick:e(p).close},{variant:"transparent",type:"button",text:"Close"}),null,16,["onClick"]),s("div",R,[a(c,C(k({type:"submit",text:"Search",loading:e(o).processing,onLoading:()=>({text:"Searching data..."})})),null,16)])]),_:1})]),_:1})],40,U)}}});export{W as _};