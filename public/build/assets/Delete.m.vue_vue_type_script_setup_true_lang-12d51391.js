import{d as c,T as d,e as m,f as u,g as o,u as e,o as _,h as a,m as r,i as f,a as k}from"./app-f3d06840.js";import{u as g}from"./Modal.vue_vue_type_style_index_0_scoped_fdb70d85_lang-9839c54d.js";import{M as y,a as h,_ as C}from"./Footer-31cf0e06.js";import{_ as x}from"./Head.vue_vue_type_script_setup_true_lang-0b0294fa.js";const b=k("p",null,"Apakah anda yakin ingin menghapus proyek ini? Semua data yang berkaitan dengan proyek ini akan hilang.",-1),D=c({__name:"Delete.m",props:{id_proyek:{}},setup(i){const l=i,t=g(),n=d({});function p(){n.delete(route("proyek.destroy",l.id_proyek),{onSuccess:()=>{t.close()}})}return(M,v)=>{const s=m("ease-button");return _(),u(e(C),{size:"md"},{default:o(()=>[a(e(x),{title:"Konfirmasi Penghapusan Proyek"}),a(e(y),null,{default:o(()=>[b]),_:1}),a(e(h),null,{default:o(()=>[a(s,r({onClick:e(t).close},{type:"button",text:"Close",variant:"transparent"}),null,16,["onClick"]),a(s,r({onClick:f(p,["prevent"])},{variant:"danger-transparent",type:"submit",text:"Yes, delete it!",loading:e(n).processing,onLoading:()=>({text:"Deleting data..."})}),null,16,["onClick"])]),_:1})]),_:1})}}});export{D as _};
