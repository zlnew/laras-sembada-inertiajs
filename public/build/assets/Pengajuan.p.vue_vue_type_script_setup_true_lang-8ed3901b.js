import{d as m,T as _,e as f,f as p,g as o,u as t,o as b,h as e,a,i as h,n as x,j as v}from"./app-75a3a99f.js";import{a as C,_ as g,C as j}from"./Card-7d71d8a7.js";import{_ as w}from"./Label.vue_vue_type_script_setup_true_lang-21506f02.js";import{_ as y}from"./Textarea.vue_vue_type_script_setup_true_lang-3b042892.js";const V=a("div",{class:"flex justify-between items-center"},[a("h5",{class:"font-bold text-xl text-dark"},"Submit")],-1),B={class:"flex justify-between items-center space-x-4"},S={class:"w-full mb-4"},k={class:"flex justify-end space-x-2"},P=["onSubmit"],L=m({__name:"Pengajuan.p",props:{id_rab:{},uraian_length:{}},setup(i){const l=i,s=_({catatan:null});function r(){s.post(route("rab.submit",l.id_rab))}return(u,n)=>{const c=f("ease-button");return b(),p(t(j),{class:"h-fit"},{default:o(()=>[e(t(C),{class:"mb-2"},{default:o(()=>[V]),_:1}),e(t(g),null,{default:o(()=>[a("div",B,[a("div",S,[e(t(w),{value:"Catatan"}),e(t(y),{modelValue:t(s).catatan,"onUpdate:modelValue":n[0]||(n[0]=d=>t(s).catatan=d),placeholder:"Beri catatan (Opsional)"},null,8,["modelValue"])]),a("div",k,[a("form",{onSubmit:h(r,["prevent"])},[e(c,x(v({type:"submit",text:"Submit",disabled:u.uraian_length<1})),null,16)],40,P)])])]),_:1})]),_:1})}}});export{L as _};
