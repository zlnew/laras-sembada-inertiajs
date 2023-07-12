import{d as x,T as $,e as C,c as d,h as t,g as m,u as a,i as P,o as _,a as l,m as u,F as v,q as h,w as V,s as b,t as p,n as B,j as M}from"./app-f3d06840.js";import{u as F}from"./Modal.vue_vue_type_style_index_0_scoped_fdb70d85_lang-9839c54d.js";import{M as H,a as R,_ as T}from"./Footer-31cf0e06.js";import{_ as j}from"./Head.vue_vue_type_script_setup_true_lang-0b0294fa.js";import{_ as g}from"./Input.vue_vue_type_script_setup_true_lang-2aad7bcd.js";import{_ as r}from"./Label.vue_vue_type_script_setup_true_lang-9c91305f.js";import{_ as i}from"./Error.vue_vue_type_script_setup_true_lang-8a3419fd.js";import{_ as S}from"./Select.vue_vue_type_script_setup_true_lang-7cc7d137.js";import{_ as D}from"./Textarea.vue_vue_type_script_setup_true_lang-8d6210da.js";import{t as k}from"./number-6d20867b.js";const E=["onSubmit"],K={class:"w-full mb-4"},L={class:"w-full mb-4 grid grid-cols-2 gap-4"},N=l("option",{value:""},"Pilih Satuan",-1),q=["value"],A={class:"w-full mb-4"},G={class:"grid grid-cols-2 gap-4"},I={class:"ml-1"},J={class:"w-full mb-4"},O=l("option",{value:""},"Pilih Status",-1),Q=["value"],W={class:"w-full"},ua=x({__name:"Edit.m",props:{detail_rap:{},satuan:{}},setup(w){const n=w,f=F(),U=["Gaji","Sewa","Beli","Subkon/Vendor"],e=$({uraian:n.detail_rap.uraian,id_satuan:n.detail_rap.id_satuan,volume:n.detail_rap.volume,harga_satuan:n.detail_rap.harga_satuan,keterangan:n.detail_rap.keterangan,status_uraian:n.detail_rap.status_uraian});function y(){e.patch(route("detail_rap.update",n.detail_rap.id_detail_rap),{onSuccess:()=>{f.close()}})}return(z,o)=>{const c=C("ease-button");return _(),d("form",{onSubmit:P(y,["prevent"])},[t(a(T),{size:"lg"},{default:m(()=>[t(a(j),{title:"Form Tambah Uraian RAP"}),t(a(H),null,{default:m(()=>[l("div",K,[t(a(r),{for:"uraian",value:"Uraian"}),t(a(g),u({modelValue:a(e).uraian,"onUpdate:modelValue":o[0]||(o[0]=s=>a(e).uraian=s)},{type:"text",id:"uraian",size:"lg",autocomplete:"off",placeholder:"Uraian"}),null,16,["modelValue"]),t(a(i),{class:"mt-2",message:a(e).errors.uraian},null,8,["message"])]),l("div",L,[l("div",null,[t(a(r),{for:"volume",value:"Volume"}),t(a(g),u({modelValue:a(e).volume,"onUpdate:modelValue":o[1]||(o[1]=s=>a(e).volume=s)},{type:"number",id:"volume",size:"lg",autocomplete:"off",placeholder:"Volume"}),null,16,["modelValue"]),t(a(i),{class:"mt-2",message:a(e).errors.volume},null,8,["message"])]),l("div",null,[t(a(r),{for:"id_satuan",value:"Satuan"}),t(a(S),u({modelValue:a(e).id_satuan,"onUpdate:modelValue":o[2]||(o[2]=s=>a(e).id_satuan=s)},{id:"id_satuan",size:"lg"}),{default:m(()=>[N,(_(!0),d(v,null,h(z.satuan,s=>(_(),d("option",{value:s.id_satuan},p(s.nama_satuan),9,q))),256))]),_:1},16,["modelValue"]),t(a(i),{class:"mt-2",message:a(e).errors.id_satuan},null,8,["message"])])]),l("div",A,[l("div",G,[l("div",null,[t(a(r),{for:"harga_satuan",value:"Harga Satuan"}),V(l("small",{class:"ml-1"},": "+p(a(k)(a(e).harga_satuan)),513),[[b,a(e).harga_satuan]])]),V(l("div",null,[t(a(r),{for:"harga_satuan",value:"Harga Total"}),l("small",I,": "+p(a(k)(a(e).harga_satuan*a(e).volume)),1)],512),[[b,a(e).harga_satuan]])]),t(a(g),u({modelValue:a(e).harga_satuan,"onUpdate:modelValue":o[3]||(o[3]=s=>a(e).harga_satuan=s)},{type:"number",id:"harga_satuan",size:"lg",autocomplete:"off",placeholder:"Harga Satuan"}),null,16,["modelValue"]),t(a(i),{class:"mt-2",message:a(e).errors.harga_satuan},null,8,["message"])]),l("div",J,[t(a(r),{for:"status_uraian",value:"Status"}),t(a(S),u({modelValue:a(e).status_uraian,"onUpdate:modelValue":o[4]||(o[4]=s=>a(e).status_uraian=s)},{id:"status_uraian",size:"lg"}),{default:m(()=>[O,(_(),d(v,null,h(U,s=>l("option",{value:s},p(s),9,Q)),64))]),_:1},16,["modelValue"]),t(a(i),{class:"mt-2",message:a(e).errors.status_uraian},null,8,["message"])]),l("div",W,[t(a(r),{for:"keterangan",value:"Keterangan"}),t(a(D),u({modelValue:a(e).keterangan,"onUpdate:modelValue":o[5]||(o[5]=s=>a(e).keterangan=s)},{type:"text",id:"keterangan",size:"lg",autocomplete:"off",placeholder:"Keterangan"}),null,16,["modelValue"]),t(a(i),{class:"mt-2",message:a(e).errors.keterangan},null,8,["message"])])]),_:1}),t(a(R),null,{default:m(()=>[t(c,u({onClick:a(f).close},{variant:"transparent",type:"button",text:"Close"}),null,16,["onClick"]),t(c,B(M({type:"submit",text:"Update",loading:a(e).processing,onLoading:()=>({text:"Updating data..."})})),null,16)]),_:1})]),_:1})],40,E)}}});export{ua as _};
