<<<<<<<< HEAD:public/build/assets/Create.m.vue_vue_type_script_setup_true_lang-697b0182.js
import{d as z,T as x,e as $,c as m,h as s,g as i,u as a,i as P,o as d,a as l,m as n,F as c,q as v,w as h,s as V,t as _,n as B,j as M}from"./app-d8617931.js";import{u as F}from"./Modal.vue_vue_type_style_index_0_scoped_fdb70d85_lang-e5086b2c.js";import{M as H,a as R,_ as T}from"./Footer-83a73d6d.js";import{_ as j}from"./Head.vue_vue_type_script_setup_true_lang-d7fd5c8e.js";import{_ as p}from"./Input.vue_vue_type_script_setup_true_lang-62b0e882.js";import{_ as u}from"./Label.vue_vue_type_script_setup_true_lang-add11eb1.js";import{_ as r}from"./Error.vue_vue_type_script_setup_true_lang-83417469.js";import{_ as b}from"./Select.vue_vue_type_script_setup_true_lang-5a994cba.js";import{_ as D}from"./Textarea.vue_vue_type_script_setup_true_lang-bacc59bf.js";import{t as S}from"./number-6d20867b.js";const K=["onSubmit"],L={class:"w-full mb-4"},N={class:"w-full mb-4 grid grid-cols-2 gap-4"},q=l("option",{value:""},"Pilih Satuan",-1),A=["value"],E={class:"w-full mb-4"},G={class:"grid grid-cols-2 gap-4"},I={class:"ml-1"},J={class:"w-full mb-4"},O=l("option",{value:""},"Pilih Status",-1),Q=["value"],W={class:"w-full"},ua=z({__name:"Create.m",props:{id_rap:{},satuan:{}},setup(k){const w=k,g=F(),C=["Gaji","Sewa","Beli","Subkon/Vendor"],e=x({uraian:null,id_satuan:null,volume:0,harga_satuan:0,keterangan:null,status_uraian:null});function U(){e.post(route("detail_rap.store",w.id_rap),{onSuccess:()=>{g.close()}})}return(y,o)=>{const f=$("ease-button");return d(),m("form",{onSubmit:P(U,["prevent"])},[s(a(T),{size:"lg"},{default:i(()=>[s(a(j),{title:"Form Tambah Uraian RAP"}),s(a(H),null,{default:i(()=>[l("div",L,[s(a(u),{for:"uraian",value:"Uraian"}),s(a(p),n({modelValue:a(e).uraian,"onUpdate:modelValue":o[0]||(o[0]=t=>a(e).uraian=t)},{type:"text",id:"uraian",size:"lg",autocomplete:"off",placeholder:"Uraian"}),null,16,["modelValue"]),s(a(r),{class:"mt-2",message:a(e).errors.uraian},null,8,["message"])]),l("div",N,[l("div",null,[s(a(u),{for:"volume",value:"Volume"}),s(a(p),n({modelValue:a(e).volume,"onUpdate:modelValue":o[1]||(o[1]=t=>a(e).volume=t)},{type:"number",id:"volume",size:"lg",autocomplete:"off",placeholder:"Volume"}),null,16,["modelValue"]),s(a(r),{class:"mt-2",message:a(e).errors.volume},null,8,["message"])]),l("div",null,[s(a(u),{for:"id_satuan",value:"Satuan"}),s(a(b),n({modelValue:a(e).id_satuan,"onUpdate:modelValue":o[2]||(o[2]=t=>a(e).id_satuan=t)},{id:"id_satuan",size:"lg"}),{default:i(()=>[q,(d(!0),m(c,null,v(y.satuan,t=>(d(),m("option",{value:t.id_satuan},_(t.nama_satuan),9,A))),256))]),_:1},16,["modelValue"]),s(a(r),{class:"mt-2",message:a(e).errors.id_satuan},null,8,["message"])])]),l("div",E,[l("div",G,[l("div",null,[s(a(u),{for:"harga_satuan",value:"Harga Satuan"}),h(l("small",{class:"ml-1"},": "+_(a(S)(a(e).harga_satuan)),513),[[V,a(e).harga_satuan]])]),h(l("div",null,[s(a(u),{for:"harga_satuan",value:"Harga Total"}),l("small",I,": "+_(a(S)(a(e).harga_satuan*a(e).volume)),1)],512),[[V,a(e).harga_satuan]])]),s(a(p),n({modelValue:a(e).harga_satuan,"onUpdate:modelValue":o[3]||(o[3]=t=>a(e).harga_satuan=t)},{type:"number",id:"harga_satuan",size:"lg",autocomplete:"off",placeholder:"Harga Satuan"}),null,16,["modelValue"]),s(a(r),{class:"mt-2",message:a(e).errors.harga_satuan},null,8,["message"])]),l("div",J,[s(a(u),{for:"status_uraian",value:"Status"}),s(a(b),n({modelValue:a(e).status_uraian,"onUpdate:modelValue":o[4]||(o[4]=t=>a(e).status_uraian=t)},{id:"status_uraian",size:"lg"}),{default:i(()=>[O,(d(),m(c,null,v(C,t=>l("option",{value:t},_(t),9,Q)),64))]),_:1},16,["modelValue"]),s(a(r),{class:"mt-2",message:a(e).errors.status_uraian},null,8,["message"])]),l("div",W,[s(a(u),{for:"keterangan",value:"Keterangan"}),s(a(D),n({modelValue:a(e).keterangan,"onUpdate:modelValue":o[5]||(o[5]=t=>a(e).keterangan=t)},{type:"text",id:"keterangan",size:"lg",autocomplete:"off",placeholder:"Keterangan"}),null,16,["modelValue"]),s(a(r),{class:"mt-2",message:a(e).errors.keterangan},null,8,["message"])])]),_:1}),s(a(R),null,{default:i(()=>[s(f,n({onClick:a(g).close},{variant:"transparent",type:"button",text:"Close"}),null,16,["onClick"]),s(f,B(M({type:"submit",text:"Create",loading:a(e).processing,onLoading:()=>({text:"Creating data..."})})),null,16)]),_:1})]),_:1})],40,K)}}});export{ua as _};
========
import{d as y,T as z,e as $,c as m,h as s,g as i,u as a,i as P,o as d,a as l,m as n,F as c,s as v,w as h,x as V,t as _,n as B,j as M}from"./app-75a3a99f.js";import{u as F}from"./Modal.vue_vue_type_style_index_0_scoped_fdb70d85_lang-9b77fc3b.js";import{M as H,a as R,_ as T}from"./Footer-8b073701.js";import{_ as j}from"./Head.vue_vue_type_script_setup_true_lang-0b8949ad.js";import{_ as p}from"./Input.vue_vue_type_script_setup_true_lang-8599c816.js";import{_ as u}from"./Label.vue_vue_type_script_setup_true_lang-21506f02.js";import{_ as r}from"./Error.vue_vue_type_script_setup_true_lang-f9f51393.js";import{_ as b}from"./Select.vue_vue_type_script_setup_true_lang-f552b2ec.js";import{_ as D}from"./Textarea.vue_vue_type_script_setup_true_lang-3b042892.js";import{t as S}from"./number-6d20867b.js";const K=["onSubmit"],L={class:"w-full mb-4"},N={class:"w-full mb-4 grid grid-cols-2 gap-4"},A=l("option",{value:""},"Pilih Satuan",-1),E=["value"],G={class:"w-full mb-4"},q={class:"grid grid-cols-2 gap-4"},I={class:"ml-1"},J={class:"w-full mb-4"},O=l("option",{value:""},"Pilih Status",-1),Q=["value"],W={class:"w-full"},ua=y({__name:"Create.m",props:{id_rap:{},satuan:{}},setup(k){const w=k,g=F(),C=["Gaji","Sewa","Beli","Subkon/Vendor"],e=z({uraian:null,id_satuan:null,volume:0,harga_satuan:0,keterangan:null,status_uraian:null});function U(){e.post(route("detail_rap.store",w.id_rap),{onSuccess:()=>{g.close()}})}return(x,o)=>{const f=$("ease-button");return d(),m("form",{onSubmit:P(U,["prevent"])},[s(a(T),{size:"lg"},{default:i(()=>[s(a(j),{title:"Form Tambah Uraian RAP"}),s(a(H),null,{default:i(()=>[l("div",L,[s(a(u),{for:"uraian",value:"Uraian"}),s(a(p),n({modelValue:a(e).uraian,"onUpdate:modelValue":o[0]||(o[0]=t=>a(e).uraian=t)},{type:"text",id:"uraian",size:"lg",autocomplete:"off",placeholder:"Uraian"}),null,16,["modelValue"]),s(a(r),{class:"mt-2",message:a(e).errors.uraian},null,8,["message"])]),l("div",N,[l("div",null,[s(a(u),{for:"volume",value:"Volume"}),s(a(p),n({modelValue:a(e).volume,"onUpdate:modelValue":o[1]||(o[1]=t=>a(e).volume=t)},{type:"number",id:"volume",size:"lg",autocomplete:"off",placeholder:"Volume"}),null,16,["modelValue"]),s(a(r),{class:"mt-2",message:a(e).errors.volume},null,8,["message"])]),l("div",null,[s(a(u),{for:"id_satuan",value:"Satuan"}),s(a(b),n({modelValue:a(e).id_satuan,"onUpdate:modelValue":o[2]||(o[2]=t=>a(e).id_satuan=t)},{id:"id_satuan",size:"lg"}),{default:i(()=>[A,(d(!0),m(c,null,v(x.satuan,t=>(d(),m("option",{value:t.id_satuan},_(t.nama_satuan),9,E))),256))]),_:1},16,["modelValue"]),s(a(r),{class:"mt-2",message:a(e).errors.id_satuan},null,8,["message"])])]),l("div",G,[l("div",q,[l("div",null,[s(a(u),{for:"harga_satuan",value:"Harga Satuan"}),h(l("small",{class:"ml-1"},": "+_(a(S)(a(e).harga_satuan)),513),[[V,a(e).harga_satuan]])]),h(l("div",null,[s(a(u),{for:"harga_satuan",value:"Harga Total"}),l("small",I,": "+_(a(S)(a(e).harga_satuan*a(e).volume)),1)],512),[[V,a(e).harga_satuan]])]),s(a(p),n({modelValue:a(e).harga_satuan,"onUpdate:modelValue":o[3]||(o[3]=t=>a(e).harga_satuan=t)},{type:"number",id:"harga_satuan",size:"lg",autocomplete:"off",placeholder:"Harga Satuan"}),null,16,["modelValue"]),s(a(r),{class:"mt-2",message:a(e).errors.harga_satuan},null,8,["message"])]),l("div",J,[s(a(u),{for:"status_uraian",value:"Status"}),s(a(b),n({modelValue:a(e).status_uraian,"onUpdate:modelValue":o[4]||(o[4]=t=>a(e).status_uraian=t)},{id:"status_uraian",size:"lg"}),{default:i(()=>[O,(d(),m(c,null,v(C,t=>l("option",{value:t},_(t),9,Q)),64))]),_:1},16,["modelValue"]),s(a(r),{class:"mt-2",message:a(e).errors.status_uraian},null,8,["message"])]),l("div",W,[s(a(u),{for:"keterangan",value:"Keterangan"}),s(a(D),n({modelValue:a(e).keterangan,"onUpdate:modelValue":o[5]||(o[5]=t=>a(e).keterangan=t)},{type:"text",id:"keterangan",size:"lg",autocomplete:"off",placeholder:"Keterangan"}),null,16,["modelValue"]),s(a(r),{class:"mt-2",message:a(e).errors.keterangan},null,8,["message"])])]),_:1}),s(a(R),null,{default:i(()=>[s(f,n({onClick:a(g).close},{variant:"transparent",type:"button",text:"Close"}),null,16,["onClick"]),s(f,B(M({type:"submit",text:"Create",loading:a(e).processing,onLoading:()=>({text:"Creating data..."})})),null,16)]),_:1})]),_:1})],40,K)}}});export{ua as _};
>>>>>>>> dev:public/build/assets/Create.m.vue_vue_type_script_setup_true_lang-4442e29e.js
