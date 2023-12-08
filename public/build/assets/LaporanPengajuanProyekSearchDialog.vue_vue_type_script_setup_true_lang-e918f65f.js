import{u as b,Q as H}from"./use-dialog-plugin-component-646efe56.js";import{d as q,j as R,K as F,T as N,o as T,c as I,w as a,u as n,q as z,a as e,s as h,h as V,v,i as B,g as m,I as P,J as S,f as K,t as u,b as d,an as L,x as J,y as M}from"./app-a9c22e82.js";import{Q as p,a as i}from"./AuthenticatedLayout.vue_vue_type_script_setup_true_lang-b69e3ed2.js";import{Q as y}from"./QTable-0e41b0f2.js";import{Q as A}from"./ProyekDeleteDialog.vue_vue_type_script_setup_true_lang-29a71a0e.js";import{Q as E}from"./QForm-332245d0.js";import{m as G}from"./options-4b88285e.js";const W=m("div",{class:"text-h6"},"Pencarian Penagihan/Invoice",-1),X={class:"q-gutter-md"},Y={class:"text-primary"},fe=q({__name:"LaporanPenagihanSearchDialog",props:{options:{}},emits:[...b.emits],setup(x){const c=x,{dialogRef:C,onDialogOK:D,onDialogCancel:j,onDialogHide:$}=b(),_=R(c.options.proyek);function U(g,r){r(()=>{_.value=G(g,c.options.proyek,["nama_proyek","tahun_anggaran"])})}const f=F().props.query,l=N({id_proyek:f.id_proyek,status_penagihan:f.status_penagihan,ditolak:!1});function s(){l.get(route("laporan.penagihan"),{onSuccess:()=>{D()}})}return(g,r)=>(T(),I(z,{ref_key:"dialogRef",ref:C,onHide:n($)},{default:a(()=>[e(M,{style:{width:"700px","max-width":"80vw"}},{default:a(()=>[e(h,{class:"row items-center q-pb-none"},{default:a(()=>[W,e(H),e(V,{flat:"",round:"",dense:"",icon:"close",onClick:n(j)},null,8,["onClick"])]),_:1}),e(v),e(E,{onSubmit:B(s,["prevent"])},{default:a(()=>[e(h,{class:"scroll"},{default:a(()=>[m("div",X,[e(y,{outlined:"",clearable:"","use-input":"","use-chips":"","emit-value":"","map-options":"",multiple:"","hide-bottom-space":"","input-debounce":"500",label:"Proyek",modelValue:n(l).id_proyek,"onUpdate:modelValue":r[0]||(r[0]=o=>n(l).id_proyek=o),"option-value":"id_proyek","option-label":o=>`${o.nama_proyek} | ${o.tahun_anggaran}`,options:_.value,error:!!n(l).errors.id_proyek,"error-message":n(l).errors.id_proyek,onFilter:U},{option:a(({itemProps:o,opt:t,selected:k,toggleOption:w})=>[e(p,P(S(o)),{default:a(()=>[e(i,{side:""},{default:a(()=>[e(K,{size:"sm","model-value":k,"onUpdate:modelValue":O=>w(t)},null,8,["model-value","onUpdate:modelValue"])]),_:2},1024),e(i,null,{default:a(()=>[m("strong",Y,u(t.nama_proyek),1),d(" "+u(t.tahun_anggaran),1)]),_:2},1024)]),_:2},1040)]),"no-option":a(()=>[e(p,null,{default:a(()=>[e(i,{class:"text-grey"},{default:a(()=>[d(" No results ")]),_:1})]),_:1})]),_:1},8,["modelValue","option-label","options","error","error-message"]),e(y,{outlined:"",clearable:"","fill-input":"",label:"Status Penagihan/Invoice",modelValue:n(l).status_penagihan,"onUpdate:modelValue":r[1]||(r[1]=o=>n(l).status_penagihan=o),options:[100,400]},{"selected-item":a(o=>[e(A,{color:o.opt==400?"red":"primary",label:o.opt==400?"Closed":"Open"},null,8,["color","label"])]),option:a(o=>[e(p,P(S(o.itemProps)),{default:a(()=>[e(i,null,{default:a(()=>[d(u(o.opt==400?"Closed":"Open"),1)]),_:2},1024)]),_:2},1040)]),_:1},8,["modelValue"]),e(L,{"checked-icon":"check","unchecked-icon":"clear",label:"Hanya tampilkan Penagihan/Invoice yang ditolak",modelValue:n(l).ditolak,"onUpdate:modelValue":r[2]||(r[2]=o=>n(l).ditolak=o)},null,8,["modelValue"])])]),_:1}),e(v),e(J,{align:"right"},{default:a(()=>[e(V,{flat:"",type:"submit",label:"Search",color:"primary",loading:n(l).processing},null,8,["loading"])]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1},8,["onHide"]))}}),Z=m("div",{class:"text-h6"},"Pencarian Pencairan Dana",-1),ee={class:"q-gutter-md"},ae={class:"text-primary"},ke=q({__name:"LaporanPencairanDanaSearchDialog",props:{options:{}},emits:[...b.emits],setup(x){const c=x,{dialogRef:C,onDialogOK:D,onDialogCancel:j,onDialogHide:$}=b(),_=R(c.options.proyek);function U(g,r){r(()=>{_.value=G(g,c.options.proyek,["nama_proyek","tahun_anggaran"])})}const f=F().props.query,l=N({id_proyek:f.id_proyek,status_pencairan:f.status_pencairan,ditolak:!1});function s(){l.get(route("laporan.pencairan_dana"),{onSuccess:()=>{D()}})}return(g,r)=>(T(),I(z,{ref_key:"dialogRef",ref:C,onHide:n($)},{default:a(()=>[e(M,{style:{width:"700px","max-width":"80vw"}},{default:a(()=>[e(h,{class:"row items-center q-pb-none"},{default:a(()=>[Z,e(H),e(V,{flat:"",round:"",dense:"",icon:"close",onClick:n(j)},null,8,["onClick"])]),_:1}),e(v),e(E,{onSubmit:B(s,["prevent"])},{default:a(()=>[e(h,{class:"scroll"},{default:a(()=>[m("div",ee,[e(y,{outlined:"",clearable:"","use-input":"","use-chips":"","emit-value":"","map-options":"",multiple:"","hide-bottom-space":"","input-debounce":"500",label:"Proyek",modelValue:n(l).id_proyek,"onUpdate:modelValue":r[0]||(r[0]=o=>n(l).id_proyek=o),"option-value":"id_proyek","option-label":o=>`${o.nama_proyek} | ${o.tahun_anggaran}`,options:_.value,error:!!n(l).errors.id_proyek,"error-message":n(l).errors.id_proyek,onFilter:U},{option:a(({itemProps:o,opt:t,selected:k,toggleOption:w})=>[e(p,P(S(o)),{default:a(()=>[e(i,{side:""},{default:a(()=>[e(K,{size:"sm","model-value":k,"onUpdate:modelValue":O=>w(t)},null,8,["model-value","onUpdate:modelValue"])]),_:2},1024),e(i,null,{default:a(()=>[m("strong",ae,u(t.nama_proyek),1),d(" "+u(t.tahun_anggaran),1)]),_:2},1024)]),_:2},1040)]),"no-option":a(()=>[e(p,null,{default:a(()=>[e(i,{class:"text-grey"},{default:a(()=>[d(" No results ")]),_:1})]),_:1})]),_:1},8,["modelValue","option-label","options","error","error-message"]),e(y,{outlined:"",clearable:"","fill-input":"",label:"Status Pencairan Dana",modelValue:n(l).status_pencairan,"onUpdate:modelValue":r[1]||(r[1]=o=>n(l).status_pencairan=o),options:[100,400]},{"selected-item":a(o=>[e(A,{color:o.opt==400?"red":"primary",label:o.opt==400?"Closed":"Open"},null,8,["color","label"])]),option:a(o=>[e(p,P(S(o.itemProps)),{default:a(()=>[e(i,null,{default:a(()=>[d(u(o.opt==400?"Closed":"Open"),1)]),_:2},1024)]),_:2},1040)]),_:1},8,["modelValue"]),e(L,{"checked-icon":"check","unchecked-icon":"clear",label:"Hanya tampilkan Pencairan Dana yang ditolak",modelValue:n(l).ditolak,"onUpdate:modelValue":r[2]||(r[2]=o=>n(l).ditolak=o)},null,8,["modelValue"])])]),_:1}),e(v),e(J,{align:"right"},{default:a(()=>[e(V,{flat:"",type:"submit",label:"Search",color:"primary",loading:n(l).processing},null,8,["loading"])]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1},8,["onHide"]))}}),oe=m("div",{class:"text-h6"},"Pencarian Pengajuan Direct",-1),ne={class:"q-gutter-md"},le={class:"text-primary"},ye=q({__name:"LaporanPengajuanDirectSearchDialog",props:{options:{}},emits:[...b.emits],setup(x){const c=x,{dialogRef:C,onDialogOK:D,onDialogCancel:j,onDialogHide:$}=b(),_=R(c.options.proyek),U=["Setoran Modal","Penarikan","Utang","Piutang"];function Q(r,o){o(()=>{_.value=G(r,c.options.proyek,["nama_proyek","tahun_anggaran"])})}const l=F().props.query,s=N({id_proyek:l.id_proyek,jenis_transaksi:l.jenis_transaksi,status_pengajuan:l.status_pengajuan,ditolak:!1});function g(){s.get(route("laporan.pengajuan_direct"),{onSuccess:()=>{D()}})}return(r,o)=>(T(),I(z,{ref_key:"dialogRef",ref:C,onHide:n($)},{default:a(()=>[e(M,{style:{width:"700px","max-width":"80vw"}},{default:a(()=>[e(h,{class:"row items-center q-pb-none"},{default:a(()=>[oe,e(H),e(V,{flat:"",round:"",dense:"",icon:"close",onClick:n(j)},null,8,["onClick"])]),_:1}),e(v),e(E,{onSubmit:B(g,["prevent"])},{default:a(()=>[e(h,{class:"scroll"},{default:a(()=>[m("div",ne,[e(y,{outlined:"",clearable:"","use-input":"","use-chips":"","emit-value":"","map-options":"",multiple:"","hide-bottom-space":"","input-debounce":"500",label:"Proyek",modelValue:n(s).id_proyek,"onUpdate:modelValue":o[0]||(o[0]=t=>n(s).id_proyek=t),"option-value":"id_proyek","option-label":t=>`${t.nama_proyek} | ${t.tahun_anggaran}`,options:_.value,error:!!n(s).errors.id_proyek,"error-message":n(s).errors.id_proyek,onFilter:Q},{option:a(({itemProps:t,opt:k,selected:w,toggleOption:O})=>[e(p,P(S(t)),{default:a(()=>[e(i,{side:""},{default:a(()=>[e(K,{size:"sm","model-value":w,"onUpdate:modelValue":ie=>O(k)},null,8,["model-value","onUpdate:modelValue"])]),_:2},1024),e(i,null,{default:a(()=>[m("strong",le,u(k.nama_proyek),1),d(" "+u(k.tahun_anggaran),1)]),_:2},1024)]),_:2},1040)]),"no-option":a(()=>[e(p,null,{default:a(()=>[e(i,{class:"text-grey"},{default:a(()=>[d(" No results ")]),_:1})]),_:1})]),_:1},8,["modelValue","option-label","options","error","error-message"]),e(y,{outlined:"","hide-bottom-space":"","input-debounce":"500",label:"Jenis Transaksi",modelValue:n(s).jenis_transaksi,"onUpdate:modelValue":o[1]||(o[1]=t=>n(s).jenis_transaksi=t),options:U,error:!!n(s).errors.jenis_transaksi,"error-message":n(s).errors.jenis_transaksi},null,8,["modelValue","error","error-message"]),e(y,{outlined:"",clearable:"","fill-input":"",label:"Status Pengajuan Dana",modelValue:n(s).status_pengajuan,"onUpdate:modelValue":o[2]||(o[2]=t=>n(s).status_pengajuan=t),options:[100,400]},{"selected-item":a(t=>[e(A,{color:t.opt==400?"red":"primary",label:t.opt==400?"Closed":"Open"},null,8,["color","label"])]),option:a(t=>[e(p,P(S(t.itemProps)),{default:a(()=>[e(i,null,{default:a(()=>[d(u(t.opt==400?"Closed":"Open"),1)]),_:2},1024)]),_:2},1040)]),_:1},8,["modelValue"]),e(L,{"checked-icon":"check","unchecked-icon":"clear",label:"Hanya tampilkan Pengajuan Transaksi yang ditolak",modelValue:n(s).ditolak,"onUpdate:modelValue":o[3]||(o[3]=t=>n(s).ditolak=t)},null,8,["modelValue"])])]),_:1}),e(v),e(J,{align:"right"},{default:a(()=>[e(V,{flat:"",type:"submit",label:"Search",color:"primary",loading:n(s).processing},null,8,["loading"])]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1},8,["onHide"]))}}),te=m("div",{class:"text-h6"},"Pencarian Pengajuan Proyek",-1),re={class:"q-gutter-md"},se={class:"text-primary"},be=q({__name:"LaporanPengajuanProyekSearchDialog",props:{options:{}},emits:[...b.emits],setup(x){const c=x,{dialogRef:C,onDialogOK:D,onDialogCancel:j,onDialogHide:$}=b(),_=R(c.options.proyek);function U(g,r){r(()=>{_.value=G(g,c.options.proyek,["nama_proyek","tahun_anggaran"])})}const f=F().props.query,l=N({id_proyek:f.id_proyek,status_pengajuan:f.status_pengajuan,ditolak:!1});function s(){l.get(route("laporan.pengajuan_proyek"),{onSuccess:()=>{D()}})}return(g,r)=>(T(),I(z,{ref_key:"dialogRef",ref:C,onHide:n($)},{default:a(()=>[e(M,{style:{width:"700px","max-width":"80vw"}},{default:a(()=>[e(h,{class:"row items-center q-pb-none"},{default:a(()=>[te,e(H),e(V,{flat:"",round:"",dense:"",icon:"close",onClick:n(j)},null,8,["onClick"])]),_:1}),e(v),e(E,{onSubmit:B(s,["prevent"])},{default:a(()=>[e(h,{class:"scroll"},{default:a(()=>[m("div",re,[e(y,{outlined:"",clearable:"","use-input":"","use-chips":"","emit-value":"","map-options":"",multiple:"","hide-bottom-space":"","input-debounce":"500",label:"Proyek",modelValue:n(l).id_proyek,"onUpdate:modelValue":r[0]||(r[0]=o=>n(l).id_proyek=o),"option-value":"id_proyek","option-label":o=>`${o.nama_proyek} | ${o.tahun_anggaran}`,options:_.value,error:!!n(l).errors.id_proyek,"error-message":n(l).errors.id_proyek,onFilter:U},{option:a(({itemProps:o,opt:t,selected:k,toggleOption:w})=>[e(p,P(S(o)),{default:a(()=>[e(i,{side:""},{default:a(()=>[e(K,{size:"sm","model-value":k,"onUpdate:modelValue":O=>w(t)},null,8,["model-value","onUpdate:modelValue"])]),_:2},1024),e(i,null,{default:a(()=>[m("strong",se,u(t.nama_proyek),1),d(" "+u(t.tahun_anggaran),1)]),_:2},1024)]),_:2},1040)]),"no-option":a(()=>[e(p,null,{default:a(()=>[e(i,{class:"text-grey"},{default:a(()=>[d(" No results ")]),_:1})]),_:1})]),_:1},8,["modelValue","option-label","options","error","error-message"]),e(y,{outlined:"",clearable:"","fill-input":"",label:"Status Pengajuan Dana",modelValue:n(l).status_pengajuan,"onUpdate:modelValue":r[1]||(r[1]=o=>n(l).status_pengajuan=o),options:[100,400]},{"selected-item":a(o=>[e(A,{color:o.opt==400?"red":"primary",label:o.opt==400?"Closed":"Open"},null,8,["color","label"])]),option:a(o=>[e(p,P(S(o.itemProps)),{default:a(()=>[e(i,null,{default:a(()=>[d(u(o.opt==400?"Closed":"Open"),1)]),_:2},1024)]),_:2},1040)]),_:1},8,["modelValue"]),e(L,{"checked-icon":"check","unchecked-icon":"clear",label:"Hanya tampilkan Pengajuan Transaksi yang ditolak",modelValue:n(l).ditolak,"onUpdate:modelValue":r[2]||(r[2]=o=>n(l).ditolak=o)},null,8,["modelValue"])])]),_:1}),e(v),e(J,{align:"right"},{default:a(()=>[e(V,{flat:"",type:"submit",label:"Search",color:"primary",loading:n(l).processing},null,8,["loading"])]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1},8,["onHide"]))}});export{fe as _,ke as a,ye as b,be as c};
