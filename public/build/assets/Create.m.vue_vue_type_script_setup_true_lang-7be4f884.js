import{d as _,T as f,e as c,c as k,h as e,g as m,u as a,i as v,o as w,a as n,m as t,w as V,s as y,t as b,n as h,j as x}from"./app-7652bf12.js";import{u as P}from"./Modal.vue_vue_type_style_index_0_scoped_fdb70d85_lang-6da5b1e0.js";import{M as z,a as C,_ as S}from"./Footer-cad56d32.js";import{_ as T}from"./Head.vue_vue_type_script_setup_true_lang-70f25432.js";import{_ as u}from"./Input.vue_vue_type_script_setup_true_lang-615dbe85.js";import{_ as r}from"./Label.vue_vue_type_script_setup_true_lang-528e2482.js";import{_ as i}from"./Error.vue_vue_type_script_setup_true_lang-0ad18481.js";import{t as j}from"./number-6d20867b.js";const M=["onSubmit"],U={class:"w-full mb-4"},N={class:"w-full mb-4 grid grid-cols-3 gap-4"},B={class:"col-span-2"},$={class:"w-full mb-4 grid grid-cols-2 gap-4"},J={class:"w-full mb-4 grid grid-cols-2 gap-4"},I=_({__name:"Create.m",setup(A){const g=P(),l=f({nama_proyek:null,tahun_anggaran:null,pengguna_jasa:null,waktu_mulai:null,waktu_selesai:null,nilai_kontrak:null,pic:null});function p(){l.post(route("proyek.store"),{onSuccess:()=>{g.close()}})}return(D,o)=>{const d=c("ease-button");return w(),k("form",{onSubmit:v(p,["prevent"])},[e(a(S),{size:"5xl"},{default:m(()=>[e(a(T),{title:"Form Tambah Proyek Baru"}),e(a(z),null,{default:m(()=>[n("div",U,[e(a(r),{for:"nama_proyek",value:"Nama Proyek"}),e(a(u),t({modelValue:a(l).nama_proyek,"onUpdate:modelValue":o[0]||(o[0]=s=>a(l).nama_proyek=s)},{type:"text",id:"nama_proyek",size:"lg",autocomplete:"off",placeholder:"Nama Proyek"}),null,16,["modelValue"]),e(a(i),{class:"mt-2",message:a(l).errors.nama_proyek},null,8,["message"])]),n("div",N,[n("div",B,[e(a(r),{for:"pengguna_jasa",value:"Pengguna Jasa"}),e(a(u),t({modelValue:a(l).pengguna_jasa,"onUpdate:modelValue":o[1]||(o[1]=s=>a(l).pengguna_jasa=s)},{type:"text",id:"pengguna_jasa",size:"lg",autocomplete:"off",placeholder:"Pengguna Jasa"}),null,16,["modelValue"]),e(a(i),{class:"mt-2",message:a(l).errors.pengguna_jasa},null,8,["message"])]),n("div",null,[e(a(r),{for:"tahun_anggaran",value:"Tahun Anggaran"}),e(a(u),t({modelValue:a(l).tahun_anggaran,"onUpdate:modelValue":o[2]||(o[2]=s=>a(l).tahun_anggaran=s)},{type:"text",id:"tahun_anggaran",size:"lg",autocomplete:"off",placeholder:"Tahun Anggaran"}),null,16,["modelValue"]),e(a(i),{class:"mt-2",message:a(l).errors.tahun_anggaran},null,8,["message"])])]),n("div",$,[n("div",null,[e(a(r),{for:"waktu_mulai",value:"Tanggal Mulai"}),e(a(u),t({modelValue:a(l).waktu_mulai,"onUpdate:modelValue":o[3]||(o[3]=s=>a(l).waktu_mulai=s)},{type:"date",id:"waktu_mulai",size:"lg",autocomplete:"off",placeholder:"Tanggal Mulai"}),null,16,["modelValue"]),e(a(i),{class:"mt-2",message:a(l).errors.waktu_mulai},null,8,["message"])]),n("div",null,[e(a(r),{for:"waktu_selesai",value:"Tanggal Selesai"}),e(a(u),t({modelValue:a(l).waktu_selesai,"onUpdate:modelValue":o[4]||(o[4]=s=>a(l).waktu_selesai=s)},{type:"date",id:"waktu_selesai",size:"lg",autocomplete:"off",placeholder:"Tanggal Selesai"}),null,16,["modelValue"]),e(a(i),{class:"mt-2",message:a(l).errors.waktu_selesai},null,8,["message"])])]),n("div",J,[n("div",null,[e(a(r),{for:"nilai_kontrak",value:"Nilai Kontrak"}),V(n("small",{class:"ml-1"},": "+b(a(j)(a(l).nilai_kontrak)),513),[[y,a(l).nilai_kontrak]]),e(a(u),t({modelValue:a(l).nilai_kontrak,"onUpdate:modelValue":o[5]||(o[5]=s=>a(l).nilai_kontrak=s)},{type:"number",id:"nilai_kontrak",size:"lg",autocomplete:"off",placeholder:"Nilai Kontrak"}),null,16,["modelValue"]),e(a(i),{class:"mt-2",message:a(l).errors.nilai_kontrak},null,8,["message"])]),n("div",null,[e(a(r),{for:"pic",value:"Penanggung Jawab"}),e(a(u),t({modelValue:a(l).pic,"onUpdate:modelValue":o[6]||(o[6]=s=>a(l).pic=s)},{type:"text",id:"pic",size:"lg",autocomplete:"off",placeholder:"Penanggung Jawab"}),null,16,["modelValue"]),e(a(i),{class:"mt-2",message:a(l).errors.pic},null,8,["message"])])])]),_:1}),e(a(C),null,{default:m(()=>[e(d,t({onClick:a(g).close},{variant:"transparent",type:"button",text:"Close"}),null,16,["onClick"]),e(d,h(x({type:"submit",text:"Create",loading:a(l).processing,onLoading:()=>({text:"Creating data..."})})),null,16)]),_:1})]),_:1})],40,M)}}});export{I as _};