import{d as h,T as b,e as d,c as l,h as a,g as r,u as e,i as v,o as i,a as t,m as u,F as x,s as C,p as P,n as V,j as $,t as p}from"./app-75a3a99f.js";import{u as w}from"./Modal.vue_vue_type_style_index_0_scoped_fdb70d85_lang-9b77fc3b.js";import{M,a as S,_ as z}from"./Footer-8b073701.js";import{_ as B}from"./Head.vue_vue_type_script_setup_true_lang-0b8949ad.js";import{_ as c}from"./Label.vue_vue_type_script_setup_true_lang-21506f02.js";import{_ as f}from"./Error.vue_vue_type_script_setup_true_lang-f9f51393.js";import{_ as F}from"./Select.vue_vue_type_script_setup_true_lang-f552b2ec.js";import{_ as T}from"./Textarea.vue_vue_type_script_setup_true_lang-3b042892.js";const j=["onSubmit"],K={class:"w-full mb-4"},N=t("option",{value:""},"Pilih",-1),D=["value"],L={class:"w-full mb-4"},U={class:"w-full"},E={class:"text-primary text-sm"},W=h({__name:"Create.m",props:{daftar_proyek:{}},setup(R){const m=w(),o=b({id_proyek:null,keperluan:null,for:"pengajuan dana"});function k(){o.post(route("keuangan.store"),{onSuccess:()=>{m.close()}})}return(g,n)=>{const y=d("fas-icon"),_=d("ease-button");return i(),l("form",{onSubmit:v(k,["prevent"])},[a(e(z),{size:"5xl"},{default:r(()=>[a(e(B),{title:"Form Tambah Keuangan Proyek"}),a(e(M),null,{default:r(()=>[t("div",K,[a(e(c),{for:"id_proyek",value:"Pilih Proyek"}),a(e(F),u({modelValue:e(o).id_proyek,"onUpdate:modelValue":n[0]||(n[0]=s=>e(o).id_proyek=s)},{id:"id_proyek",size:"lg"}),{default:r(()=>[N,(i(!0),l(x,null,C(g.daftar_proyek,s=>(i(),l("option",{value:s.id_proyek},p(s.nama_proyek)+" - "+p(s.tahun_anggaran),9,D))),256))]),_:1},16,["modelValue"]),a(e(f),{class:"mt-2",message:e(o).errors.id_proyek},null,8,["message"])]),t("div",L,[a(e(c),{for:"keperluan",value:"Keperluan"}),a(e(T),u({modelValue:e(o).keperluan,"onUpdate:modelValue":n[1]||(n[1]=s=>e(o).keperluan=s)},{id:"keperluan",placeholder:"Tulis keperluan"}),null,16,["modelValue"]),a(e(f),{class:"mt-2",message:e(o).errors.keperluan},null,8,["message"])]),t("div",U,[t("strong",E,[a(y,{icon:"fa-solid fa-info-circle",size:"lg",class:"mr-1"}),P(" Pengajuan Dana akan otomatis terbuat setelah Keuangan Proyek ditambahkan. ")])])]),_:1}),a(e(S),null,{default:r(()=>[a(_,u({onClick:e(m).close},{variant:"transparent",type:"button",text:"Close"}),null,16,["onClick"]),a(_,V($({type:"submit",text:"Create",loading:e(o).processing,onLoading:()=>({text:"Creating data..."})})),null,16)]),_:1})]),_:1})],40,j)}}});export{W as _};
