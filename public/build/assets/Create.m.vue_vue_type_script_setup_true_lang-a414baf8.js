import{d as f,T as j,e as g,c as b,h as e,g as i,u as n,i as y,o as v,a,t as s,w,x as C,m,n as P,j as S}from"./app-75a3a99f.js";import{u as x}from"./Modal.vue_vue_type_style_index_0_scoped_fdb70d85_lang-9b77fc3b.js";import{M as B,a as J,_ as M}from"./Footer-8b073701.js";import{_ as V}from"./Head.vue_vue_type_script_setup_true_lang-0b8949ad.js";import{_ as $}from"./Input.vue_vue_type_script_setup_true_lang-8599c816.js";import{_ as k}from"./Label.vue_vue_type_script_setup_true_lang-21506f02.js";import{_ as D}from"./Error.vue_vue_type_script_setup_true_lang-f9f51393.js";import{t as o}from"./number-6d20867b.js";const U=["onSubmit"],z={class:"w-full mb-4"},F=a("td",null,"Uraian",-1),N=a("td",{class:"pl-6 pr-3"},":",-1),R={class:"font-medium text-primary"},E=a("td",null,"Jumlah Pengajuan",-1),L=a("td",{class:"pl-6 pr-3"},":",-1),T={class:"font-medium text-primary"},q=a("td",null,"Jumlah Sudah Dibayar",-1),A=a("td",{class:"pl-6 pr-3"},":",-1),G={class:"font-medium text-primary"},H=a("td",null,"Jumlah Belum Dibayar",-1),I=a("td",{class:"pl-6 pr-3"},":",-1),K={class:"font-medium text-primary"},O={class:"w-full"},ta=f({__name:"Create.m",props:{id_pencairan_dana:{},detail_pengajuan_dana:{},jumlah_pencairan:{}},setup(p){const r=p,_=x(),t=j({id_detail_pengajuan_dana:r.detail_pengajuan_dana.id_detail_pengajuan_dana,jumlah_pencairan:0});function c(){t.post(route("pencairan_dana.store",r.id_pencairan_dana),{onSuccess:()=>{_.close()}})}return(l,u)=>{const d=g("ease-button");return v(),b("form",{onSubmit:y(c,["prevent"])},[e(n(M),{size:"2xl"},{default:i(()=>[e(n(V),{title:"Form Pembayaran"}),e(n(B),null,{default:i(()=>[a("div",z,[a("table",null,[a("tbody",null,[a("tr",null,[F,N,a("td",null,[a("span",R,s(l.detail_pengajuan_dana.uraian),1)])]),a("tr",null,[E,L,a("td",null,[a("span",T,s(n(o)(l.detail_pengajuan_dana.jumlah_pengajuan)),1)])]),a("tr",null,[q,A,a("td",null,[a("span",G,s(n(o)(l.detail_pengajuan_dana.jumlah_pencairan)),1)])]),a("tr",null,[H,I,a("td",null,[a("span",K,s(n(o)(l.detail_pengajuan_dana.jumlah_pengajuan-l.detail_pengajuan_dana.jumlah_pencairan)),1)])])])])]),a("div",O,[e(n(k),{for:"jumlah_pencairan",value:"Jumlah Pembayaran"}),w(a("small",{class:"ml-1"},": "+s(n(o)(n(t).jumlah_pencairan)),513),[[C,n(t).jumlah_pencairan]]),e(n($),m({modelValue:n(t).jumlah_pencairan,"onUpdate:modelValue":u[0]||(u[0]=h=>n(t).jumlah_pencairan=h)},{type:"number",id:"jumlah_pencairan",size:"lg",min:"1",max:l.detail_pengajuan_dana.jumlah_pengajuan-l.detail_pengajuan_dana.jumlah_pencairan,autocomplete:"off",placeholder:"Jumlah Pembayaran"}),null,16,["modelValue"]),e(n(D),{class:"mt-2",message:n(t).errors.jumlah_pencairan},null,8,["message"])])]),_:1}),e(n(J),null,{default:i(()=>[e(d,m({onClick:n(_).close},{variant:"transparent",type:"button",text:"Close"}),null,16,["onClick"]),e(d,P(S({type:"submit",text:"Update",loading:n(t).processing,onLoading:()=>({text:"Updating data..."})})),null,16)]),_:1})]),_:1})],40,U)}}});export{ta as _};
