import{i as la,d as K,e as X,f as ja,g as ka,Q,a as U,h as ia,b as ha,_ as ya,c as va}from"./AuthenticatedLayout.vue_vue_type_script_setup_true_lang-d717bd64.js";import{d as E,l as z,j as x,o as f,c as D,C as Da,w as e,a,b as i,t as d,u as n,A,g,h as w,y as ua,Q as N,e as L,k as aa,F as Y,f as oa,s as T,T as M,p as G,q,i as da,N as pa,P as ma,v as W,x as J,D as wa,m as Pa,Z as Va,n as Ca}from"./app-a381cf6c.js";import{Q as Sa,a as sa,b as $a,c as ra,_ as xa}from"./FileDeleteDialog.vue_vue_type_script_setup_true_lang-114744eb.js";import{f as Qa}from"./ProyekDeleteDialog.vue_vue_type_script_setup_true_lang-77014158.js";import{b as m,a as H,c as _a,d as ga,Q as B}from"./QTable-ab6886a4.js";import{Q as ea}from"./QTooltip-f4dd372e.js";import{u as na}from"./use-quasar-4af1b296.js";import{a as R,t as $}from"./money-3074a8fc.js";import{u as F,Q as ta}from"./use-dialog-plugin-component-e21d1e74.js";import{Q as ca}from"./QForm-50cc0db7.js";import{m as Z,f as fa}from"./options-4b88285e.js";import{Q as ba,_ as Ua}from"./ModuleTopSection.vue_vue_type_script_setup_true_lang-84b1bb82.js";import"./QImg-e011ca0f.js";import"./QFile-77b0914a.js";const qa={class:"q-gutter-sm"},Oa={key:1},Ra=E({__name:"PengajuanDanaItemTable",props:{rows:{},data:{},formOptions:{}},setup(P,{expose:u}){const j=P,k=z(()=>{const o=j.rows.reduce((C,I)=>C+R(I.jumlah_pengajuan),0),l=j.rows.reduce((C,I)=>s.value.includes(I.id_detail_pengajuan_dana)?C+R(I.jumlah_pengajuan):C,0),r=o-l;return{pengajuan:o,disetujui:l,ditolak:r}}),c=na();function p(){c.dialog({component:Na,componentProps:{pengajuanDana:j.data.pengajuanDana,options:j.formOptions}}).onOk(o=>{c.notify({type:o.type,message:o.message,position:"top"})})}function h(o){c.dialog({component:Ya,componentProps:{detailPengajuanDana:o,options:j.formOptions}}).onOk(l=>{c.notify({type:l.type,message:l.message,position:"top"})})}function v(o){c.dialog({component:Wa,componentProps:{id_detail_pengajuan_dana:o}}).onOk(l=>{c.notify({type:l.type,message:l.message,position:"top"})})}const y=[{name:"index",label:"#",field:"index"},{name:"uraian",label:"Uraian",field:"uraian",align:"left",sortable:!0},{name:"pos",label:"POS",field:"pos",align:"left",sortable:!0},{name:"jenis_pembayaran",label:"Jenis Pembayaran",field:"jenis_pembayaran",align:"left",sortable:!0},{name:"bank",label:"Bank",field:"nama_bank",align:"left",sortable:!0},{name:"rekening",label:"Rekening",field:"nomor_rekening",align:"left",sortable:!0},{name:"jumlah",label:"Jumlah Pengajuan",field:"jumlah_pengajuan",align:"right",sortable:!0},{name:"persetujuan",label:"Approval",field:"",align:"left"},{name:"actions",label:"Actions",field:"",align:"left"}],V=()=>{const o=[];return K("approve pengajuan dana")&&ia(j.data.pengajuanDana)?y.map(l=>o.push(l.name)):y.map(l=>{if(l.name!=="persetujuan")return o.push(l.name)}),o},S=x(!1);function O(){S.value=!S.value}const b=x(""),t=x([]),s=z(()=>{const o=[];return t.value&&t.value.map(l=>o.push(l.id_detail_pengajuan_dana)),o}),_=z(()=>t.value?t.value.reduce((l,r)=>{const C=l.find(I=>I.id_detail_rap===r.id_detail_rap);return C!=null?C.jumlah_pengajuan+=R(r.jumlah_pengajuan):l.push({id_detail_rap:r.id_detail_rap,jumlah_pengajuan:R(r.jumlah_pengajuan)}),l},[]):[]);return u({selectedIds:s,approvedPengajuanSaatIni:_}),(o,l)=>(f(),D(_a,{flat:"",bordered:"","row-key":"id_detail_pengajuan_dana",rows:o.rows,columns:y,"visible-columns":V(),"rows-per-page-options":[10,15,20,25,50,0],fullscreen:S.value,filter:b.value,selection:"multiple",selected:t.value,"onUpdate:selected":l[1]||(l[1]=r=>t.value=r),class:"no-border"},Da({"top-left":e(()=>[g("div",qa,[n(la)()||n(K)("create & modify pengajuan dana")&&n(X)(o.data.pengajuanDana)?(f(),D(w,{key:0,"no-caps":"",label:"Tambah Uraian",icon:"add",color:"primary",onClick:p})):A("",!0)])]),"top-right":e(()=>[a(N,{dense:"",debounce:"300",modelValue:b.value,"onUpdate:modelValue":l[0]||(l[0]=r=>b.value=r),placeholder:"Search"},{append:e(()=>[a(ua,{name:"search"})]),_:1},8,["modelValue"]),a(w,{flat:"",dense:"",icon:S.value?"fullscreen_exit":"fullscreen",onClick:O,class:"q-ml-md"},null,8,["icon"])]),header:e(r=>[a(H,{props:r},{default:e(()=>[(f(!0),L(Y,null,aa(r.cols,C=>(f(),D(ga,{key:C.name,props:r,style:{"font-weight":"bold"}},{default:e(()=>[C.name==="persetujuan"?(f(),D(oa,{key:0,modelValue:r.selected,"onUpdate:modelValue":I=>r.selected=I,label:"Approval"},null,8,["modelValue","onUpdate:modelValue"])):(f(),L("span",Oa,d(C.label),1))]),_:2},1032,["props"]))),128))]),_:2},1032,["props"])]),body:e(r=>[a(H,{props:r},{default:e(()=>[a(m,{key:"index",props:r},{default:e(()=>[i(d(++r.rowIndex),1)]),_:2},1032,["props"]),a(m,{key:"uraian",props:r},{default:e(()=>[i(d(r.row.uraian),1)]),_:2},1032,["props"]),a(m,{key:"pos",props:r},{default:e(()=>[i(d(r.row.pos),1)]),_:2},1032,["props"]),a(m,{key:"jenis_pembayaran",props:r},{default:e(()=>[i(d(r.row.jenis_pembayaran),1)]),_:2},1032,["props"]),a(m,{key:"bank",props:r},{default:e(()=>[i(d(r.row.nama_bank),1)]),_:2},1032,["props"]),a(m,{key:"rekening",props:r},{default:e(()=>[i(d(r.row.nomor_rekening)+" - "+d(r.row.nama_rekening),1)]),_:2},1032,["props"]),a(m,{key:"jumlah",props:r},{default:e(()=>[i(d(n($)(r.row.jumlah_pengajuan)),1)]),_:2},1032,["props"]),a(m,{key:"persetujuan",props:r},{default:e(()=>[a(oa,{modelValue:r.selected,"onUpdate:modelValue":C=>r.selected=C},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["props"]),a(m,{key:"actions",props:r},{default:e(()=>[n(la)()||n(K)("create & modify pengajuan dana")&&n(X)(o.data.pengajuanDana)?(f(),D(w,{key:0,dense:"",flat:"",color:"blue-grey",icon:"more_vert"},{default:e(()=>[a(ja,{"auto-close":"","transition-show":"scale","transition-hide":"scale"},{default:e(()=>[a(ka,{dense:"",style:{"min-width":"100px"}},{default:e(()=>[a(Q,{clickable:""},{default:e(()=>[a(U,{onClick:C=>h(r.row)},{default:e(()=>[i(" Edit ")]),_:2},1032,["onClick"])]),_:2},1024),a(T),a(Q,{clickable:""},{default:e(()=>[a(U,{class:"text-red",onClick:C=>v(r.row.id_detail_pengajuan_dana)},{default:e(()=>[i(" Delete ")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)):(f(),D(w,{key:1,dense:"",flat:"",color:"grey-6",icon:"block"},{default:e(()=>[a(ea,null,{default:e(()=>[i("Required permission")]),_:1})]),_:1}))]),_:2},1032,["props"])]),_:2},1032,["props"])]),_:2},[o.rows.length?{name:"bottom-row",fn:e(()=>[a(H,{"no-hover":""},{default:e(()=>[a(m,{colspan:"5",style:{border:"none"}}),a(m,{class:"text-right"},{default:e(()=>[i(" Total Pengajuan ")]),_:1}),a(m,{class:"text-right text-weight-bold"},{default:e(()=>[i(d(n($)(k.value.pengajuan)),1)]),_:1}),a(m,{style:{border:"none"}})]),_:1}),V().includes("persetujuan")?(f(),D(H,{key:0,"no-hover":""},{default:e(()=>[a(m,{colspan:"5",style:{border:"none"}}),a(m,{class:"text-right"},{default:e(()=>[i(" Total Disetujui ")]),_:1}),a(m,{class:"text-right text-weight-bold"},{default:e(()=>[i(d(n($)(k.value.disetujui)),1)]),_:1}),a(m,{style:{border:"none"}})]),_:1})):A("",!0),V().includes("persetujuan")?(f(),D(H,{key:1,"no-hover":""},{default:e(()=>[a(m,{colspan:"5",style:{border:"none"}}),a(m,{class:"text-right"},{default:e(()=>[i(" Total Ditolak ")]),_:1}),a(m,{class:"text-right text-weight-bold"},{default:e(()=>[i(d(n($)(k.value.ditolak)),1)]),_:1}),a(m,{style:{border:"none"}})]),_:1})):A("",!0)]),key:"0"}:void 0]),1032,["rows","visible-columns","fullscreen","filter","selected"]))}}),Ta=g("div",{class:"text-h6"},"Tambah Uraian Setoran/Penarikan",-1),Ia={class:"q-gutter-md"},Fa={class:"row"},Ea={class:"col-12 col-md-6 q-pr-sm"},Ha={class:"col-12 col-md-6 q-pl-sm"},Aa={class:"text-primary"},Na=E({__name:"PengajuanDanaItemCreateDialog",props:{pengajuanDana:{},options:{}},emits:[...F.emits],setup(P){const u=P,{dialogRef:j,onDialogOK:k,onDialogCancel:c,onDialogHide:p}=F(),h=["Cash","Transfer"],v=x(u.options.detailRap),y=x(u.options.rekening),V=x(h);function S(_,o){o(()=>{v.value=Z(_,u.options.detailRap,["uraian"])})}function O(_,o){o(()=>{y.value=Z(_,u.options.rekening,["nama_bank","nomor_rekening","nama_rekening"])})}function b(_,o){o(()=>{V.value=fa(_,h)})}const t=M({uraian:null,jumlah_pengajuan:0,jenis_pembayaran:null,id_detail_rap:null,id_rekening:null});function s(){t.post(route("detail_pengajuan_dana.store",u.pengajuanDana.id_pengajuan_dana),{onSuccess:_=>{k({type:"positive",message:_.props.flash.success})}})}return(_,o)=>(f(),D(G,{ref_key:"dialogRef",ref:j,"no-backdrop-dismiss":!0,onHide:n(p)},{default:e(()=>[a(J,{style:{width:"700px","max-width":"80vw"}},{default:e(()=>[a(q,{class:"row items-center q-pb-none"},{default:e(()=>[Ta,a(ta),a(w,{flat:"",round:"",dense:"",icon:"close",onClick:n(c)},null,8,["onClick"])]),_:1}),a(T),a(ca,{onSubmit:da(s,["prevent"])},{default:e(()=>[a(q,{class:"scroll"},{default:e(()=>[g("div",Ia,[a(B,{outlined:"","use-input":"","emit-value":"","map-options":"","hide-bottom-space":"","input-debounce":"500",label:"POS",modelValue:n(t).id_detail_rap,"onUpdate:modelValue":o[0]||(o[0]=l=>n(t).id_detail_rap=l),"option-value":"id_detail_rap","option-label":"uraian",options:v.value,error:!!n(t).errors.id_detail_rap,"error-message":n(t).errors.id_detail_rap,onFilter:S},{"no-option":e(()=>[a(Q,null,{default:e(()=>[a(U,{class:"text-grey"},{default:e(()=>[i(" No results ")]),_:1})]),_:1})]),_:1},8,["modelValue","options","error","error-message"]),a(N,{outlined:"",autogrow:"","hide-bottom-space":"",label:"Uraian",modelValue:n(t).uraian,"onUpdate:modelValue":o[1]||(o[1]=l=>n(t).uraian=l),error:!!n(t).errors.uraian,"error-message":n(t).errors.uraian},null,8,["modelValue","error","error-message"]),g("div",Fa,[g("div",Ea,[a(N,{outlined:"","hide-bottom-space":"",label:"Jumlah Pengajuan",modelValue:n(t).jumlah_pengajuan,"onUpdate:modelValue":o[2]||(o[2]=l=>n(t).jumlah_pengajuan=l),hint:n($)(n(t).jumlah_pengajuan),"hide-hint":n(t).jumlah_pengajuan<1,error:!!n(t).errors.jumlah_pengajuan,"error-message":n(t).errors.jumlah_pengajuan,"input-class":"text-right"},null,8,["modelValue","hint","hide-hint","error","error-message"])]),g("div",Ha,[a(B,{outlined:"","use-input":"","use-chips":"","hide-bottom-space":"","input-debounce":"500",label:"Jenis Pembayaran",modelValue:n(t).jenis_pembayaran,"onUpdate:modelValue":o[3]||(o[3]=l=>n(t).jenis_pembayaran=l),options:V.value,error:!!n(t).errors.jenis_pembayaran,"error-message":n(t).errors.jenis_pembayaran,onFilter:b},{"no-option":e(()=>[a(Q,null,{default:e(()=>[a(U,{class:"text-grey"},{default:e(()=>[i(" No results ")]),_:1})]),_:1})]),_:1},8,["modelValue","options","error","error-message"])])]),a(B,{outlined:"","use-input":"","use-chips":"","emit-value":"","map-options":"","hide-bottom-space":"","input-debounce":"500",label:"Rekening Pembayaran",modelValue:n(t).id_rekening,"onUpdate:modelValue":o[4]||(o[4]=l=>n(t).id_rekening=l),"option-value":"id_rekening","option-label":l=>`${l.nama_bank} | ${l.nomor_rekening} - ${l.nama_rekening}`,options:y.value,error:!!n(t).errors.id_rekening,"error-message":n(t).errors.id_rekening,onFilter:O},{option:e(l=>[a(Q,pa(ma(l.itemProps)),{default:e(()=>[a(U,null,{default:e(()=>[g("strong",Aa,d(l.opt.nama_bank),1),i(" "+d(l.opt.nomor_rekening)+" - "+d(l.opt.nama_rekening),1)]),_:2},1024)]),_:2},1040)]),"no-option":e(()=>[a(Q,null,{default:e(()=>[a(U,{class:"text-grey"},{default:e(()=>[i(" No results ")]),_:1})]),_:1})]),_:1},8,["modelValue","option-label","options","error","error-message"])])]),_:1}),a(T),a(W,{align:"right"},{default:e(()=>[n(t).hasErrors?(f(),D(w,{key:0,flat:"",label:"Clear Errors",color:"red",onClick:o[5]||(o[5]=l=>n(t).clearErrors())})):A("",!0),a(w,{flat:"",label:"Reset",color:"secondary",onClick:o[6]||(o[6]=l=>n(t).reset())}),a(w,{flat:"",type:"submit",label:"Submit",color:"primary",loading:n(t).processing},null,8,["loading"])]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1},8,["onHide"]))}}),Ba=g("div",{class:"text-h6"},"Edit Uraian Setoran/Penarikan",-1),Ja={class:"q-gutter-md"},Ka={class:"row"},La={class:"col-12 col-md-6 q-pr-sm"},Ma={class:"col-12 col-md-6 q-pl-sm"},za={class:"text-primary"},Ya=E({__name:"PengajuanDanaItemEditDialog",props:{detailPengajuanDana:{},options:{}},emits:[...F.emits],setup(P){const u=P,{dialogRef:j,onDialogOK:k,onDialogCancel:c,onDialogHide:p}=F(),h=["Cash","Transfer"],v=x(u.options.detailRap),y=x(u.options.rekening),V=x(h);function S(_,o){o(()=>{v.value=Z(_,u.options.detailRap,["uraian"])})}function O(_,o){o(()=>{y.value=Z(_,u.options.rekening,["nama_bank","nomor_rekening","nama_rekening"])})}function b(_,o){o(()=>{V.value=fa(_,h)})}const t=M({uraian:u.detailPengajuanDana.uraian,jumlah_pengajuan:u.detailPengajuanDana.jumlah_pengajuan,jenis_pembayaran:u.detailPengajuanDana.jenis_pembayaran,id_detail_rap:u.detailPengajuanDana.id_detail_rap,id_rekening:u.detailPengajuanDana.id_rekening});function s(){t.patch(route("detail_pengajuan_dana.update",u.detailPengajuanDana.id_detail_pengajuan_dana),{onSuccess:_=>{k({type:"positive",message:_.props.flash.success})}})}return(_,o)=>(f(),D(G,{ref_key:"dialogRef",ref:j,"no-backdrop-dismiss":!0,onHide:n(p)},{default:e(()=>[a(J,{style:{width:"700px","max-width":"80vw"}},{default:e(()=>[a(q,{class:"row items-center q-pb-none"},{default:e(()=>[Ba,a(ta),a(w,{flat:"",round:"",dense:"",icon:"close",onClick:n(c)},null,8,["onClick"])]),_:1}),a(T),a(ca,{onSubmit:da(s,["prevent"])},{default:e(()=>[a(q,{class:"scroll"},{default:e(()=>[g("div",Ja,[a(B,{outlined:"","use-input":"","emit-value":"","map-options":"","hide-bottom-space":"","input-debounce":"500",label:"POS",modelValue:n(t).id_detail_rap,"onUpdate:modelValue":o[0]||(o[0]=l=>n(t).id_detail_rap=l),"option-value":"id_detail_rap","option-label":"uraian",options:v.value,error:!!n(t).errors.id_detail_rap,"error-message":n(t).errors.id_detail_rap,onFilter:S},{"no-option":e(()=>[a(Q,null,{default:e(()=>[a(U,{class:"text-grey"},{default:e(()=>[i(" No results ")]),_:1})]),_:1})]),_:1},8,["modelValue","options","error","error-message"]),a(N,{outlined:"",autogrow:"","hide-bottom-space":"",label:"Uraian",modelValue:n(t).uraian,"onUpdate:modelValue":o[1]||(o[1]=l=>n(t).uraian=l),error:!!n(t).errors.uraian,"error-message":n(t).errors.uraian},null,8,["modelValue","error","error-message"]),g("div",Ka,[g("div",La,[a(N,{outlined:"","hide-bottom-space":"",label:"Jumlah Pengajuan",modelValue:n(t).jumlah_pengajuan,"onUpdate:modelValue":o[2]||(o[2]=l=>n(t).jumlah_pengajuan=l),hint:n($)(n(R)(n(t).jumlah_pengajuan)),"hide-hint":n(R)(n(t).jumlah_pengajuan)<1,error:!!n(t).errors.jumlah_pengajuan,"error-message":n(t).errors.jumlah_pengajuan,"input-class":"text-right"},null,8,["modelValue","hint","hide-hint","error","error-message"])]),g("div",Ma,[a(B,{outlined:"","use-input":"","use-chips":"","hide-bottom-space":"","input-debounce":"500",label:"Jenis Pembayaran",modelValue:n(t).jenis_pembayaran,"onUpdate:modelValue":o[3]||(o[3]=l=>n(t).jenis_pembayaran=l),options:V.value,error:!!n(t).errors.jenis_pembayaran,"error-message":n(t).errors.jenis_pembayaran,onFilter:b},{"no-option":e(()=>[a(Q,null,{default:e(()=>[a(U,{class:"text-grey"},{default:e(()=>[i(" No results ")]),_:1})]),_:1})]),_:1},8,["modelValue","options","error","error-message"])])]),a(B,{outlined:"","use-input":"","use-chips":"","emit-value":"","map-options":"","hide-bottom-space":"","input-debounce":"500",label:"Rekening Pembayaran",modelValue:n(t).id_rekening,"onUpdate:modelValue":o[4]||(o[4]=l=>n(t).id_rekening=l),"option-value":"id_rekening","option-label":l=>`${l.nama_bank} | ${l.nomor_rekening} - ${l.nama_rekening}`,options:y.value,error:!!n(t).errors.id_rekening,"error-message":n(t).errors.id_rekening,onFilter:O},{option:e(l=>[a(Q,pa(ma(l.itemProps)),{default:e(()=>[a(U,null,{default:e(()=>[g("strong",za,d(l.opt.nama_bank),1),i(" "+d(l.opt.nomor_rekening)+" - "+d(l.opt.nama_rekening),1)]),_:2},1024)]),_:2},1040)]),"no-option":e(()=>[a(Q,null,{default:e(()=>[a(U,{class:"text-grey"},{default:e(()=>[i(" No results ")]),_:1})]),_:1})]),_:1},8,["modelValue","option-label","options","error","error-message"])])]),_:1}),a(T),a(W,{align:"right"},{default:e(()=>[n(t).hasErrors?(f(),D(w,{key:0,flat:"",label:"Clear Errors",color:"red",onClick:o[5]||(o[5]=l=>n(t).clearErrors())})):A("",!0),a(w,{flat:"",label:"Reset",color:"secondary",onClick:o[6]||(o[6]=l=>n(t).reset())}),a(w,{flat:"",type:"submit",label:"Update",color:"primary",loading:n(t).processing},null,8,["loading"])]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1},8,["onHide"]))}}),Za=g("div",{class:"text-h6"},"Delete Confirmation",-1),Ga=g("span",{class:"q-ml-sm"},"Are you sure want to delete this data?",-1),Wa=E({__name:"PengajuanDanaItemDeleteDialog",props:{id_detail_pengajuan_dana:{}},emits:[...F.emits],setup(P){const u=P,{dialogRef:j,onDialogOK:k,onDialogCancel:c,onDialogHide:p}=F(),h=M({id_detail_pengajuan_dana:u.id_detail_pengajuan_dana});function v(){h.delete(route("detail_pengajuan_dana.destroy",u.id_detail_pengajuan_dana),{onSuccess:y=>{k({type:"positive",message:y.props.flash.success})}})}return(y,V)=>(f(),D(G,{ref_key:"dialogRef",ref:j,"no-backdrop-dismiss":!0,onHide:n(p)},{default:e(()=>[a(J,null,{default:e(()=>[a(q,{class:"row items-center q-pb-none"},{default:e(()=>[Za]),_:1}),a(T),a(q,{class:"row items-center"},{default:e(()=>[a(wa,{icon:"dangerous",color:"red","text-color":"white"}),Ga]),_:1}),a(W,{align:"right"},{default:e(()=>[a(w,{flat:"",label:"Cancel",color:"primary",onClick:n(c)},null,8,["onClick"]),a(w,{flat:"",label:"Yes, delete it",color:"red",onClick:v})]),_:1})]),_:1})]),_:1},8,["onHide"]))}}),Xa=E({__name:"PengajuanDanaSubmissionForm",props:{data:{}},setup(P){const u=P,j=na(),k=M({catatan:""});function c(){k.post(route("pengajuan_dana.submit",u.data.id_pengajuan_dana),{onSuccess:h=>{j.notify({type:"positive",message:h.props.flash.success,position:"top"})}})}function p(){j.dialog({title:"Submission Confirmation",message:"Are you sure want to use this action?",prompt:{outlined:!0,autogrow:!0,model:"",type:"text",placeholder:"Tambahkan Catatan"},color:"primary",cancel:!0,persistent:!0}).onOk(h=>{k.catatan=h,c()})}return(h,v)=>(f(),D(ba,{position:"bottom-right",offset:[18,18]},{default:e(()=>[a(w,{rounded:"",color:"primary",label:"Submit","icon-right":"check",onClick:p,class:"q-pa-md"},{default:e(()=>[a(ea,null,{default:e(()=>[i("Click to submit")]),_:1})]),_:1})]),_:1}))}}),ae=E({__name:"PengajuanDanaEvaluateForm",props:{data:{}},setup(P){const u=P,j=na();function k(){j.dialog({component:le,componentProps:{data:u.data}}).onOk(c=>{j.notify({type:c.type,message:c.message,position:"top"})})}return(c,p)=>(f(),D(ba,{position:"bottom-right",offset:[18,18]},{default:e(()=>[a(w,{rounded:"",label:"Evaluasi",color:"primary",icon:"keyboard_arrow_left",onClick:k,class:"q-pa-md"},{default:e(()=>[a(ea,null,{default:e(()=>[i("Evaluasi Pengajuan")]),_:1})]),_:1})]),_:1}))}}),ee=g("div",{class:"text-h6"},"Lembar Evaluasi",-1),ne={class:"q-gutter-md"},te={class:"q-gutter-md"},le=E({__name:"PengajuanDanaEvaluationDialog",props:{data:{}},emits:[...F.emits],setup(P){const u=P,{dialogRef:j,onDialogOK:k,onDialogCancel:c,onDialogHide:p}=F(),h=z(()=>u.data.evaluasi.map(b=>{if(b.pengajuan_saat_ini="0",u.data.approvedPengajuanSaatIni!=null){const o=u.data.approvedPengajuanSaatIni.find(l=>l.id_detail_rap===b.id_detail_rap);o&&(b.pengajuan_saat_ini+=o.jumlah_pengajuan)}const t=b.pengajuan_lalu?b.pengajuan_lalu:"0",s=R(t)+R(b.pengajuan_saat_ini),_=R(b.total_harga)-s;return{...b,total_pengajuan:s,sisa_anggaran:_}})),v=M({selected_ids_detail_pengajuan_dana:u.data.selected_ids_detail_pengajuan_dana,catatan:null});function y(){v.post(route("pengajuan_dana.approve",u.data.id_pengajuan_dana),{onSuccess:b=>{k({type:"positive",message:b.props.flash.success})}})}function V(){v.post(route("pengajuan_dana.reject",u.data.id_pengajuan_dana),{onSuccess:b=>{k({type:"positive",message:b.props.flash.success})}})}const S=[{name:"index",label:"#",field:"index"},{name:"uraian",label:"Uraian",field:"uraian",align:"left",sortable:!0},{name:"nama_satuan",label:"Satuan",field:"nama_satuan",align:"left",sortable:!0},{name:"harga_satuan",label:"Harga Satuan",field:"harga_satuan",align:"right",sortable:!0},{name:"volume",label:"Volume",field:"volume",align:"left",sortable:!0},{name:"total_harga",label:"Total Harga",field:"total_harga",align:"right",sortable:!0},{name:"pengajuan_lalu",label:"Pengajuan Sebelumnya",field:"pengajuan_lalu",align:"right",sortable:!0},{name:"pengajuan_saat_ini",label:"Pengajuan Saat Ini",field:"",align:"right",sortable:!0},{name:"total_pengajuan",label:"Total Pengajuan",field:"",align:"right",sortable:!0},{name:"sisa_anggaran",label:"Sisa Anggaran",field:"",align:"right",sortable:!0}],O=x();return(b,t)=>(f(),D(G,{ref_key:"dialogRef",ref:j,"no-backdrop-dismiss":!0,onHide:n(p)},{default:e(()=>[a(J,{style:{"max-width":"100vw"}},{default:e(()=>[a(q,{class:"row items-center q-pb-none"},{default:e(()=>[ee,a(ta),a(w,{flat:"",round:"",dense:"",icon:"close",onClick:n(c)},null,8,["onClick"])]),_:1}),a(T),a(q,{class:"scroll"},{default:e(()=>[g("div",ne,[a(_a,{flat:"",bordered:"","row-key":"id_detail_rap",rows:h.value,columns:S,filter:O.value,"rows-per-page-options":[0],title:"Evaluasi Pengajuan Dana",style:{"max-height":"100vh"},"virtual-scroll":""},{"top-right":e(()=>[a(N,{dense:"",debounce:"300",modelValue:O.value,"onUpdate:modelValue":t[0]||(t[0]=s=>O.value=s),placeholder:"Search"},{append:e(()=>[a(ua,{name:"search"})]),_:1},8,["modelValue"])]),header:e(s=>[a(H,{props:s},{default:e(()=>[(f(!0),L(Y,null,aa(s.cols,_=>(f(),D(ga,{key:_.name,props:s,style:{"font-weight":"bold"}},{default:e(()=>[i(d(_.label),1)]),_:2},1032,["props"]))),128))]),_:2},1032,["props"])]),body:e(s=>[a(H,{props:s},{default:e(()=>[a(m,{key:"index",props:s},{default:e(()=>[i(d(++s.rowIndex),1)]),_:2},1032,["props"]),a(m,{key:"uraian",props:s},{default:e(()=>[i(d(s.row.uraian),1)]),_:2},1032,["props"]),a(m,{key:"nama_satuan",props:s},{default:e(()=>[i(d(s.row.nama_satuan),1)]),_:2},1032,["props"]),a(m,{key:"harga_satuan",props:s},{default:e(()=>[i(d(n($)(s.row.harga_satuan)),1)]),_:2},1032,["props"]),a(m,{key:"volume",props:s},{default:e(()=>[i(d(s.row.volume),1)]),_:2},1032,["props"]),a(m,{key:"total_harga",props:s},{default:e(()=>[i(d(n($)(s.row.total_harga)),1)]),_:2},1032,["props"]),a(m,{key:"pengajuan_lalu",props:s},{default:e(()=>[i(d(n($)(s.row.pengajuan_lalu)),1)]),_:2},1032,["props"]),a(m,{key:"pengajuan_saat_ini",props:s},{default:e(()=>[i(d(n($)(s.row.pengajuan_saat_ini||0)),1)]),_:2},1032,["props"]),a(m,{key:"total_pengajuan",props:s},{default:e(()=>[i(d(n($)(s.row.total_pengajuan)),1)]),_:2},1032,["props"]),a(m,{key:"sisa_anggaran",props:s},{default:e(()=>[i(d(n($)(s.row.sisa_anggaran)),1)]),_:2},1032,["props"])]),_:2},1032,["props"])]),_:1},8,["rows","filter"])])]),_:1}),a(q,null,{default:e(()=>[g("div",te,[a(N,{outlined:"",autogrow:"",label:"Catatan",modelValue:n(v).catatan,"onUpdate:modelValue":t[1]||(t[1]=s=>n(v).catatan=s)},null,8,["modelValue"])])]),_:1}),a(T),a(W,{align:"right"},{default:e(()=>{var s,_;return[a(w,{flat:"",label:"Tolak",color:"red",loading:n(v).processing,disable:!!((s=b.data.selected_ids_detail_pengajuan_dana)!=null&&s.length),onClick:V},null,8,["loading","disable"]),a(w,{flat:"",label:"Approve",color:"primary",loading:n(v).processing,disable:!((_=b.data.selected_ids_detail_pengajuan_dana)!=null&&_.length),onClick:y},null,8,["loading","disable"])]}),_:1})]),_:1})]),_:1},8,["onHide"]))}}),oe={class:"q-px-md q-pt-md"},se={class:"row"},re=g("div",{class:"col-4 text-caption"}," Keperluan ",-1),ie={class:"col-8 text-subtitle2"},ue=g("div",{class:"col-4 text-caption"}," Jenis Transaksi ",-1),de={class:"col-8 text-subtitle2"},pe=g("div",{class:"col-4 text-caption"}," Tanggal Pengajuan ",-1),me={class:"col-8 text-subtitle2"},_e={class:"q-px-md q-pt-md"},Se=E({__name:"DetailPengajuanDanaPage",props:{pengajuanDana:{},detailPengajuanDana:{},dokumenPenunjang:{},evaluasi:{},formOptions:{},timeline:{}},setup(P){const u=P,j=[{label:"Keuangan",url:"#"},{label:"Setoran/Penarikan",url:route("pengajuan_dana")},{label:u.pengajuanDana.nama_proyek,url:"#"}],k=x("uraian"),c=x();return(p,h)=>{const v=Pa("in-link");return f(),L(Y,null,[a(n(Va),{title:"Setoran/Penarikan"}),a(ya,null,{breadcrumbs:e(()=>[a(ha,{align:"left"},{default:e(()=>[(f(),L(Y,null,aa(j,y=>Ca(a(va,{key:y.label,label:y.label},null,8,["label"]),[[v,y.url]])),64))]),_:1})]),default:e(()=>{var y,V;return[a(Ua,{title:"Setoran/Penarikan","timeline-title":"Timeline Setoran/Penarikan",data:{proyek:p.pengajuanDana,status:p.pengajuanDana.status_pengajuan,timeline:p.timeline}},null,8,["data"]),g("div",oe,[a(J,{flat:"",bordered:"",style:{"max-width":"500px"}},{default:e(()=>[a(q,null,{default:e(()=>[g("div",se,[re,g("div",ie," : "+d(p.pengajuanDana.keperluan),1),ue,g("div",de," : "+d(p.pengajuanDana.jenis_transaksi),1),pe,g("div",me," : "+d(n(Qa)(p.pengajuanDana.tanggal_pengajuan)||"-"),1)])]),_:1})]),_:1})]),g("div",_e,[a(J,{flat:"",bordered:""},{default:e(()=>[a(Sa,{modelValue:k.value,"onUpdate:modelValue":h[0]||(h[0]=S=>k.value=S),class:"text-grey","active-color":"primary","indicator-color":"primary",align:"justify","narrow-indicator":""},{default:e(()=>[a(sa,{"no-caps":"",name:"uraian",label:"Uraian"}),a(sa,{"no-caps":"",name:"dokumen",label:"Dokumen Penunjang"})]),_:1},8,["modelValue"]),a(T),a($a,{modelValue:k.value,"onUpdate:modelValue":h[1]||(h[1]=S=>k.value=S)},{default:e(()=>[a(ra,{class:"q-pa-none",name:"uraian"},{default:e(()=>[a(n(Ra),{ref_key:"table",ref:c,rows:p.detailPengajuanDana,data:{pengajuanDana:p.pengajuanDana},"form-options":p.formOptions},null,8,["rows","data","form-options"])]),_:1}),a(ra,{class:"q-pa-none",name:"dokumen"},{default:e(()=>[a(n(xa),{rows:p.dokumenPenunjang,data:{model_id:p.pengajuanDana.id_pengajuan_dana,permissions:"create & modify pengajuan dana",status_aktivitas:p.pengajuanDana.status_aktivitas}},null,8,["rows","data"])]),_:1})]),_:1},8,["modelValue"])]),_:1})]),n(K)("create & modify pengajuan dana")&&n(X)(p.pengajuanDana)&&p.detailPengajuanDana.length?(f(),D(n(Xa),{key:0,data:{id_pengajuan_dana:p.pengajuanDana.id_pengajuan_dana}},null,8,["data"])):A("",!0),n(K)("approve pengajuan dana")&&n(ia)(p.pengajuanDana)?(f(),D(n(ae),{key:1,data:{evaluasi:p.evaluasi,approvedPengajuanSaatIni:(y=c.value)==null?void 0:y.approvedPengajuanSaatIni,id_pengajuan_dana:p.pengajuanDana.id_pengajuan_dana,selected_ids_detail_pengajuan_dana:(V=c.value)==null?void 0:V.selectedIds}},null,8,["data"])):A("",!0)]}),_:1})],64)}}});export{Se as default};
