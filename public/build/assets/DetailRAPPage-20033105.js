import{i as Y,d as F,e as j,f as de,g as pe,Q as T,a as U,b as ce,h as me,o as fe,_ as _e,c as ge}from"./AuthenticatedLayout.vue_vue_type_script_setup_true_lang-ca464798.js";import{d as P,l as be,j as H,o as _,e as N,a as e,C as he,w as t,b as m,t as w,u as a,g as d,c as v,h as b,A as $,Q as A,y as ve,F as Z,k as re,s as Q,T as q,p as L,q as D,i as J,v as M,x as G,D as ke,E as se,m as ye,Z as we,n as Ce}from"./app-820d56a8.js";import{a as E,b as g,c as Re,d as xe,Q as B}from"./QTable-7858290f.js";import{Q as W}from"./QTooltip-60a2bd3d.js";import{u as X}from"./use-quasar-d1cd8476.js";import{a as V,t as S}from"./money-3074a8fc.js";import{u as O,Q as ee}from"./use-dialog-plugin-component-0650bf81.js";import{c as Ve,Q as K,a as le,b as ae,_ as Se}from"./QFile-ffbf936a.js";import{Q as te}from"./QForm-406a8856.js";import{m as ne,f as ie}from"./options-964f32b0.js";import"./QImg-adc75621.js";import"./ProyekDeleteDialog.vue_vue_type_script_setup_true_lang-32232352.js";const Ae={class:"q-pa-md"},Pe={class:"q-gutter-sm"},$e={class:"text-caption"},Qe=P({__name:"RAPItemTable",props:{rows:{},data:{},formOptions:{}},setup(k){const l=k,p=be(()=>{const f=l.rows.reduce((z,I)=>z+V(I.harga_satuan)*V(I.volume),0),c=l.data.detailRab.reduce((z,I)=>z+V(I.harga_satuan)*V(I.volume),0),r=V(l.data.rab.additional_tax)/100*c,n=c-r,oe=n-f,ue=oe/n*100;return{rap:f,netto:n,laba:oe,labaPercentage:ue}}),s=X();function C(){s.dialog({component:qe,componentProps:{id_rap:l.data.rap.id_rap}}).onOk(f=>{s.notify({type:f.type,message:f.message,position:"top"})})}function y(){s.dialog({component:Le,componentProps:{rap:l.data.rap,options:l.formOptions}}).onOk(f=>{s.notify({type:f.type,message:f.message,position:"top"})})}function i(f){s.dialog({component:ta,componentProps:{detailRap:f,options:l.formOptions}}).onOk(c=>{s.notify({type:c.type,message:c.message,position:"top"})})}function R(f){s.dialog({component:sa,componentProps:{id_detail_rap:f}}).onOk(c=>{s.notify({type:c.type,message:c.message,position:"top"})})}const u=[{name:"index",label:"#",field:"index"},{name:"uraian",label:"Uraian",field:"uraian",align:"left",sortable:!0},{name:"status_uraian",label:"Status",field:"status_uraian",align:"left",sortable:!0},{name:"nama_satuan",label:"Satuan",field:"nama_satuan",align:"left",sortable:!0},{name:"harga_satuan",label:"Harga Satuan",field:"harga_satuan",align:"right",sortable:!0},{name:"volume",label:"Volume",field:"volume",align:"left",sortable:!0},{name:"total_harga",label:"Total Harga",field:"",align:"right",sortable:!0},{name:"keterangan",label:"Ket",field:"keterangan",align:"left",sortable:!0},{name:"actions",label:"Actions",field:"",align:"left"}],h=H(!1);function x(){h.value=!h.value}const o=H("");return(f,c)=>(_(),N("div",Ae,[e(Re,{flat:"",bordered:"","row-key":"id_detail_rap",rows:f.rows,columns:u,"rows-per-page-options":[10,15,20,25,50,0],fullscreen:h.value,filter:o.value},he({"top-left":t(()=>[d("div",Pe,[a(Y)()||a(F)("create & modify rap")&&a(j)(f.data.rap)?(_(),v(b,{key:0,"no-caps":"",label:"Tambah Uraian RAP",icon:"add",color:"primary",onClick:y})):$("",!0),a(Y)()||a(F)("create & modify rap")&&a(j)(f.data.rab)?(_(),v(b,{key:1,"no-caps":"",label:"Import dari CSV/XLS",icon:"upload_file",color:"green-8",onClick:C})):$("",!0)])]),"top-right":t(()=>[e(A,{dense:"",debounce:"300",modelValue:o.value,"onUpdate:modelValue":c[0]||(c[0]=r=>o.value=r),placeholder:"Search"},{append:t(()=>[e(ve,{name:"search"})]),_:1},8,["modelValue"]),e(b,{flat:"",dense:"",icon:h.value?"fullscreen_exit":"fullscreen",onClick:x,class:"q-ml-md"},null,8,["icon"])]),header:t(r=>[e(E,{props:r},{default:t(()=>[(_(!0),N(Z,null,re(r.cols,n=>(_(),v(xe,{key:n.name,props:r,style:{"font-weight":"bold"}},{default:t(()=>[m(w(n.label),1)]),_:2},1032,["props"]))),128))]),_:2},1032,["props"])]),body:t(r=>[e(E,{props:r},{default:t(()=>[e(g,{key:"index",props:r},{default:t(()=>[m(w(++r.rowIndex),1)]),_:2},1032,["props"]),e(g,{key:"uraian",props:r},{default:t(()=>[m(w(r.row.uraian),1)]),_:2},1032,["props"]),e(g,{key:"status_uraian",props:r},{default:t(()=>[m(w(r.row.status_uraian),1)]),_:2},1032,["props"]),e(g,{key:"nama_satuan",props:r},{default:t(()=>[m(w(r.row.nama_satuan),1)]),_:2},1032,["props"]),e(g,{key:"harga_satuan",props:r},{default:t(()=>[m(w(a(S)(r.row.harga_satuan)),1)]),_:2},1032,["props"]),e(g,{key:"volume",props:r},{default:t(()=>[m(w(r.row.volume),1)]),_:2},1032,["props"]),e(g,{key:"total_harga",props:r},{default:t(()=>[m(w(a(S)(r.row.harga_satuan*r.row.volume)),1)]),_:2},1032,["props"]),e(g,{key:"keterangan",props:r},{default:t(()=>[m(w(r.row.keterangan),1)]),_:2},1032,["props"]),e(g,{key:"actions",props:r},{default:t(()=>[a(Y)()||a(F)("create & modify rap")&&a(j)(f.data.rap)?(_(),v(b,{key:0,dense:"",flat:"",color:"blue-grey",icon:"more_vert"},{default:t(()=>[e(de,{"auto-close":"","transition-show":"scale","transition-hide":"scale"},{default:t(()=>[e(pe,{dense:"",style:{"min-width":"100px"}},{default:t(()=>[e(T,{clickable:""},{default:t(()=>[e(U,{onClick:n=>i(r.row)},{default:t(()=>[m(" Edit ")]),_:2},1032,["onClick"])]),_:2},1024),e(Q),e(T,{clickable:""},{default:t(()=>[e(U,{class:"text-red",onClick:n=>R(r.row.id_detail_rap)},{default:t(()=>[m(" Delete ")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)):(_(),v(b,{key:1,dense:"",flat:"",color:"grey-6",icon:"block"},{default:t(()=>[e(W,null,{default:t(()=>[m("Required permission")]),_:1})]),_:1}))]),_:2},1032,["props"])]),_:2},1032,["props"])]),_:2},[f.rows.length?{name:"bottom-row",fn:t(()=>[e(E,{"no-hover":""},{default:t(()=>[e(g,{colspan:"5",style:{border:"none"}}),e(g,{class:"text-right"},{default:t(()=>[m(" Total RAP ")]),_:1}),e(g,{class:"text-right text-weight-bold"},{default:t(()=>[m(w(a(S)(p.value.rap)),1)]),_:1}),e(g,{colspan:"2",style:{border:"none"}})]),_:1}),e(E,{"no-hover":""},{default:t(()=>[e(g,{colspan:"5",style:{border:"none"}}),e(g,{class:"text-right"},{default:t(()=>[m(" Nilai Netto ")]),_:1}),e(g,{class:"text-right text-weight-bold"},{default:t(()=>[m(w(a(S)(p.value.netto)),1)]),_:1}),e(g,{colspan:"2",style:{border:"none"}})]),_:1}),e(E,{"no-hover":""},{default:t(()=>[e(g,{colspan:"5",style:{border:"none"}}),e(g,{class:"text-right"},{default:t(()=>[m(" Proyeksi Laba ")]),_:1}),e(g,{class:"text-right text-weight-bold"},{default:t(()=>[m(w(a(S)(p.value.laba))+" ",1),d("span",$e," ("+w(p.value.labaPercentage.toFixed(2)+"%")+") ",1)]),_:1}),e(g,{colspan:"2",style:{border:"none"}})]),_:1})]),key:"0"}:void 0]),1032,["rows","fullscreen","filter"])]))}}),De=d("div",{class:"text-h6"},"Import Uraian RAP",-1),Oe={class:"q-gutter-md"},qe=P({__name:"RAPItemImportDialog",props:{id_rap:{}},emits:[...O.emits],setup(k){const l=k,{dialogRef:p,onDialogOK:s,onDialogCancel:C,onDialogHide:y}=O(),i=q({file:null});function R(){i.post(route("detail_rap.import",l.id_rap),{onSuccess:u=>{s({type:"positive",message:u.props.flash.success})}})}return(u,h)=>(_(),v(L,{ref_key:"dialogRef",ref:p,"no-backdrop-dismiss":!0,onHide:a(y)},{default:t(()=>[e(G,{style:{width:"500px","max-width":"80vw"}},{default:t(()=>[e(D,{class:"row items-center q-pb-none"},{default:t(()=>[De,e(ee),e(b,{flat:"",round:"",dense:"",icon:"close",onClick:a(C)},null,8,["onClick"])]),_:1}),e(Q),e(te,{onSubmit:J(R,["prevent"])},{default:t(()=>[e(D,{class:"scroll"},{default:t(()=>[d("div",Oe,[e(b,{color:"green-8",icon:"download",label:"Template",href:"/storage/uploads/template_uraian_rap.xlsx"},{default:t(()=>[e(W,null,{default:t(()=>[m("Download template CSV/XLS")]),_:1})]),_:1}),e(Ve,{outlined:"",counter:"","hide-bottom-space":"",modelValue:a(i).file,"onUpdate:modelValue":h[0]||(h[0]=x=>a(i).file=x),label:"Pick file",hint:"Format: csv, xls, xlsx",error:!!a(i).errors.file,"error-message":a(i).errors.file},null,8,["modelValue","error","error-message"])])]),_:1}),e(Q),e(M,{align:"right"},{default:t(()=>[a(i).hasErrors?(_(),v(b,{key:0,flat:"",label:"Clear Errors",color:"red",onClick:h[1]||(h[1]=x=>a(i).clearErrors())})):$("",!0),e(b,{flat:"",label:"Reset",color:"secondary",onClick:h[2]||(h[2]=x=>a(i).reset())}),e(b,{flat:"",type:"submit",label:"Import",color:"primary",loading:a(i).processing},null,8,["loading"])]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1},8,["onHide"]))}}),Fe=d("div",{class:"text-h6"},"Tambah Uraian RAP",-1),Te={class:"q-gutter-md"},Ue={class:"row"},He={class:"col-12 col-md-6 q-pr-sm"},Ie={class:"col-12 col-md-6 q-pl-sm"},Ee={class:"row"},je={class:"col-12 col-md-6 q-pr-sm"},Ne={class:"col-12 col-md-6 q-pl-sm text-right"},Be=d("div",{class:"text-secondary text-caption"},"Total Harga",-1),Ke={class:"text-weight-bold text-subtitle1"},Le=P({__name:"RAPItemCreateDialog",props:{rap:{},options:{}},emits:[...O.emits],setup(k){const l=k,{dialogRef:p,onDialogOK:s,onDialogCancel:C,onDialogHide:y}=O(),i=["Gaji","Sewa","Beli","Subkon/Vendor"],R=H(i),u=H(l.options.satuan);function h(c,r){r(()=>{u.value=ne(c,l.options.satuan,["nama_satuan"])})}function x(c,r){r(()=>{R.value=ie(c,i)})}const o=q({uraian:null,status_uraian:null,harga_satuan:0,volume:0,keterangan:null,id_satuan:null});function f(){o.post(route("detail_rap.store",l.rap.id_rap),{onSuccess:c=>{s({type:"positive",message:c.props.flash.success})}})}return(c,r)=>(_(),v(L,{ref_key:"dialogRef",ref:p,"no-backdrop-dismiss":!0,onHide:a(y)},{default:t(()=>[e(G,{style:{width:"700px","max-width":"80vw"}},{default:t(()=>[e(D,{class:"row items-center q-pb-none"},{default:t(()=>[Fe,e(ee),e(b,{flat:"",round:"",dense:"",icon:"close",onClick:a(C)},null,8,["onClick"])]),_:1}),e(Q),e(te,{onSubmit:J(f,["prevent"])},{default:t(()=>[e(D,{class:"scroll"},{default:t(()=>[d("div",Te,[e(A,{outlined:"",autogrow:"","hide-bottom-space":"",label:"Uraian",modelValue:a(o).uraian,"onUpdate:modelValue":r[0]||(r[0]=n=>a(o).uraian=n),error:!!a(o).errors.uraian,"error-message":a(o).errors.uraian},null,8,["modelValue","error","error-message"]),e(B,{outlined:"",clearable:"","use-input":"","hide-bottom-space":"","input-debounce":"500",label:"Status",modelValue:a(o).status_uraian,"onUpdate:modelValue":r[1]||(r[1]=n=>a(o).status_uraian=n),options:R.value,error:!!a(o).errors.status_uraian,"error-message":a(o).errors.status_uraian,onFilter:x},{"no-option":t(()=>[e(T,null,{default:t(()=>[e(U,{class:"text-grey"},{default:t(()=>[m(" No results ")]),_:1})]),_:1})]),_:1},8,["modelValue","options","error","error-message"]),e(B,{outlined:"",clearable:"","use-input":"","use-chips":"","emit-value":"","map-options":"","hide-bottom-space":"","input-debounce":"500",label:"Satuan",modelValue:a(o).id_satuan,"onUpdate:modelValue":r[2]||(r[2]=n=>a(o).id_satuan=n),"option-value":"id_satuan","option-label":"nama_satuan",options:u.value,error:!!a(o).errors.id_satuan,"error-message":a(o).errors.id_satuan,onFilter:h},{"no-option":t(()=>[e(T,null,{default:t(()=>[e(U,{class:"text-grey"},{default:t(()=>[m(" No results ")]),_:1})]),_:1})]),_:1},8,["modelValue","options","error","error-message"]),d("div",Ue,[d("div",He,[e(A,{outlined:"","reverse-fill-mask":"","hide-bottom-space":"",label:"Harga Satuan",mask:"#.##","fill-mask":"0",modelValue:a(o).harga_satuan,"onUpdate:modelValue":r[3]||(r[3]=n=>a(o).harga_satuan=n),hint:a(S)(a(o).harga_satuan),"hide-hint":a(o).harga_satuan<1,error:!!a(o).errors.harga_satuan,"error-message":a(o).errors.harga_satuan,"input-class":"text-right"},null,8,["modelValue","hint","hide-hint","error","error-message"])]),d("div",Ie,[e(A,{outlined:"","reverse-fill-mask":"","hide-bottom-space":"",label:"Volume",mask:"#.##","fill-mask":"0",modelValue:a(o).volume,"onUpdate:modelValue":r[4]||(r[4]=n=>a(o).volume=n),error:!!a(o).errors.volume,"error-message":a(o).errors.volume,"input-class":"text-right"},null,8,["modelValue","error","error-message"])])]),d("div",Ee,[d("div",je,[e(A,{outlined:"",autogrow:"","hide-bottom-space":"",label:"Keterangan",modelValue:a(o).keterangan,"onUpdate:modelValue":r[5]||(r[5]=n=>a(o).keterangan=n),error:!!a(o).errors.keterangan,"error-message":a(o).errors.keterangan},null,8,["modelValue","error","error-message"])]),d("div",Ne,[Be,d("div",Ke,w(a(S)(a(o).harga_satuan*a(o).volume)),1)])])])]),_:1}),e(Q),e(M,{align:"right"},{default:t(()=>[a(o).hasErrors?(_(),v(b,{key:0,flat:"",label:"Clear Errors",color:"red",onClick:r[6]||(r[6]=n=>a(o).clearErrors())})):$("",!0),e(b,{flat:"",label:"Reset",color:"secondary",onClick:r[7]||(r[7]=n=>a(o).reset())}),e(b,{flat:"",type:"submit",label:"Submit",color:"primary",loading:a(o).processing},null,8,["loading"])]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1},8,["onHide"]))}}),Me=d("div",{class:"text-h6"},"Edit Uraian RAP",-1),Ge={class:"q-gutter-md"},Xe={class:"row"},ze={class:"col-12 col-md-6 q-pr-sm"},Ye={class:"col-12 col-md-6 q-pl-sm"},Ze={class:"row"},Je={class:"col-12 col-md-6 q-pr-sm"},We={class:"col-12 col-md-6 q-pl-sm text-right"},ea=d("div",{class:"text-secondary text-caption"},"Total Harga",-1),aa={class:"text-weight-bold text-subtitle1"},ta=P({__name:"RAPItemEditDialog",props:{detailRap:{},options:{}},emits:[...O.emits],setup(k){const l=k,{dialogRef:p,onDialogOK:s,onDialogCancel:C,onDialogHide:y}=O(),i=["Gaji","Sewa","Beli","Subkon/Vendor"],R=H(i),u=H(l.options.satuan);function h(c,r){r(()=>{u.value=ne(c,l.options.satuan,["nama_satuan"])})}function x(c,r){r(()=>{R.value=ie(c,i)})}const o=q({uraian:l.detailRap.uraian,status_uraian:l.detailRap.status_uraian,harga_satuan:l.detailRap.harga_satuan,volume:l.detailRap.volume,keterangan:l.detailRap.keterangan,id_satuan:l.detailRap.id_satuan});function f(){o.patch(route("detail_rap.update",l.detailRap.id_detail_rap),{onSuccess:c=>{s({type:"positive",message:c.props.flash.success})}})}return(c,r)=>(_(),v(L,{ref_key:"dialogRef",ref:p,"no-backdrop-dismiss":!0,onHide:a(y)},{default:t(()=>[e(G,{style:{width:"700px","max-width":"80vw"}},{default:t(()=>[e(D,{class:"row items-center q-pb-none"},{default:t(()=>[Me,e(ee),e(b,{flat:"",round:"",dense:"",icon:"close",onClick:a(C)},null,8,["onClick"])]),_:1}),e(Q),e(te,{onSubmit:J(f,["prevent"])},{default:t(()=>[e(D,{class:"scroll"},{default:t(()=>[d("div",Ge,[e(A,{outlined:"",autogrow:"","hide-bottom-space":"",label:"Uraian",modelValue:a(o).uraian,"onUpdate:modelValue":r[0]||(r[0]=n=>a(o).uraian=n),error:!!a(o).errors.uraian,"error-message":a(o).errors.uraian},null,8,["modelValue","error","error-message"]),e(B,{outlined:"",clearable:"","use-input":"","hide-bottom-space":"","input-debounce":"500",label:"Status",modelValue:a(o).status_uraian,"onUpdate:modelValue":r[1]||(r[1]=n=>a(o).status_uraian=n),options:R.value,error:!!a(o).errors.status_uraian,"error-message":a(o).errors.status_uraian,onFilter:x},{"no-option":t(()=>[e(T,null,{default:t(()=>[e(U,{class:"text-grey"},{default:t(()=>[m(" No results ")]),_:1})]),_:1})]),_:1},8,["modelValue","options","error","error-message"]),e(B,{outlined:"",clearable:"","use-input":"","use-chips":"","emit-value":"","map-options":"","hide-bottom-space":"","input-debounce":"500",label:"Satuan",modelValue:a(o).id_satuan,"onUpdate:modelValue":r[2]||(r[2]=n=>a(o).id_satuan=n),"option-value":"id_satuan","option-label":"nama_satuan",options:u.value,error:!!a(o).errors.id_satuan,"error-message":a(o).errors.id_satuan,onFilter:h},{"no-option":t(()=>[e(T,null,{default:t(()=>[e(U,{class:"text-grey"},{default:t(()=>[m(" No results ")]),_:1})]),_:1})]),_:1},8,["modelValue","options","error","error-message"]),d("div",Xe,[d("div",ze,[e(A,{outlined:"","reverse-fill-mask":"","hide-bottom-space":"",label:"Harga Satuan",mask:"#.##","fill-mask":"0",modelValue:a(o).harga_satuan,"onUpdate:modelValue":r[3]||(r[3]=n=>a(o).harga_satuan=n),hint:a(S)(a(V)(a(o).harga_satuan)),"hide-hint":a(V)(a(o).harga_satuan)<1,error:!!a(o).errors.harga_satuan,"error-message":a(o).errors.harga_satuan,"input-class":"text-right"},null,8,["modelValue","hint","hide-hint","error","error-message"])]),d("div",Ye,[e(A,{outlined:"","reverse-fill-mask":"","hide-bottom-space":"",label:"Volume",mask:"#.##","fill-mask":"0",modelValue:a(o).volume,"onUpdate:modelValue":r[4]||(r[4]=n=>a(o).volume=n),error:!!a(o).errors.volume,"error-message":a(o).errors.volume,"input-class":"text-right"},null,8,["modelValue","error","error-message"])])]),d("div",Ze,[d("div",Je,[e(A,{outlined:"",autogrow:"","hide-bottom-space":"",label:"Keterangan",modelValue:a(o).keterangan,"onUpdate:modelValue":r[5]||(r[5]=n=>a(o).keterangan=n),error:!!a(o).errors.keterangan,"error-message":a(o).errors.keterangan},null,8,["modelValue","error","error-message"])]),d("div",We,[ea,d("div",aa,w(a(S)(a(V)(a(o).harga_satuan)*a(V)(a(o).volume))),1)])])])]),_:1}),e(Q),e(M,{align:"right"},{default:t(()=>[a(o).hasErrors?(_(),v(b,{key:0,flat:"",label:"Clear Errors",color:"red",onClick:r[6]||(r[6]=n=>a(o).clearErrors())})):$("",!0),e(b,{flat:"",label:"Reset",color:"secondary",onClick:r[7]||(r[7]=n=>a(o).reset())}),e(b,{flat:"",type:"submit",label:"Update",color:"primary",loading:a(o).processing},null,8,["loading"])]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1},8,["onHide"]))}}),oa=d("div",{class:"text-h6"},"Delete Confirmation",-1),ra=d("span",{class:"q-ml-sm"},"Are you sure want to delete this data?",-1),sa=P({__name:"RAPItemDeleteDialog",props:{id_detail_rap:{}},emits:[...O.emits],setup(k){const l=k,{dialogRef:p,onDialogOK:s,onDialogCancel:C,onDialogHide:y}=O(),i=q({id_detail_rap:l.id_detail_rap});function R(){i.delete(route("detail_rap.destroy",l.id_detail_rap),{onSuccess:u=>{s({type:"positive",message:u.props.flash.success})}})}return(u,h)=>(_(),v(L,{ref_key:"dialogRef",ref:p,"no-backdrop-dismiss":!0,onHide:a(y)},{default:t(()=>[e(G,null,{default:t(()=>[e(D,{class:"row items-center q-pb-none"},{default:t(()=>[oa]),_:1}),e(Q),e(D,{class:"row items-center"},{default:t(()=>[e(ke,{icon:"dangerous",color:"red","text-color":"white"}),ra]),_:1}),e(M,{align:"right"},{default:t(()=>[e(b,{flat:"",label:"Cancel",color:"primary",onClick:a(C)},null,8,["onClick"]),e(b,{flat:"",label:"Yes, delete it",color:"red",onClick:R})]),_:1})]),_:1})]),_:1},8,["onHide"]))}}),la=P({__name:"RAPEvaluateForm",props:{data:{}},setup(k){const l=k,p=X(),s=q({catatan:""});function C(){s.post(route("rap.evaluate",l.data.id_rap),{onSuccess:u=>{p.notify({type:"positive",message:u.props.flash.success,position:"top"})}})}function y(){s.post(route("rap.reject",l.data.id_rap),{onSuccess:u=>{p.notify({type:"positive",message:u.props.flash.success,position:"top"})}})}function i(){p.dialog({title:"Approval Confirmation",message:"Are you sure want to approve this data?",prompt:{model:s.catatan,type:"text",placeholder:"Tambahkan Catatan",autogrow:!0},cancel:{flat:!0,color:"secondary"},ok:"Confirm",persistent:!0}).onOk(u=>{s.catatan=u,C()})}function R(){p.dialog({title:"Rejection Confirmation",message:"Are you sure want to reject this data?",prompt:{model:s.catatan,type:"text",placeholder:"Tambahkan Catatan",autogrow:!0},cancel:{flat:!0,color:"secondary"},ok:"Confirm",persistent:!0}).onOk(u=>{s.catatan=u,y()})}return(u,h)=>(_(),v(ae,{position:"bottom-right",offset:[18,18]},{default:t(()=>[e(le,{color:"primary",icon:"keyboard_arrow_left",direction:"left"},{label:t(({opened:x})=>[d("div",{class:se({"example-fab-animate--hover":x!==!0})},w(x!==!0?"Approval":"Close"),3)]),default:t(()=>[e(K,{color:"green-5",label:"Setujui",icon:"check",onClick:i}),e(K,{color:"red",label:"Tolak",icon:"clear",onClick:R})]),_:1})]),_:1}))}}),na=P({__name:"RAPApprovalForm",props:{data:{}},setup(k){const l=k,p=X(),s=q({catatan:""});function C(){s.post(route("rap.approve",l.data.id_rap),{onSuccess:u=>{p.notify({type:"positive",message:u.props.flash.success,position:"top"})}})}function y(){s.post(route("rap.reject",l.data.id_rap),{onSuccess:u=>{p.notify({type:"positive",message:u.props.flash.success,position:"top"})}})}function i(){p.dialog({title:"Approval Confirmation",message:"Are you sure want to perform this action?",prompt:{outlined:!0,autogrow:!0,model:"",type:"text",placeholder:"Tambahkan Catatan"},color:"positive",cancel:!0,persistent:!0}).onOk(u=>{s.catatan=u,C()})}function R(){p.dialog({title:"Rejection Confirmation",message:"Are you sure want to perform this action?",prompt:{outlined:!0,autogrow:!0,model:"",type:"text",placeholder:"Tambahkan Catatan"},color:"negative",cancel:!0,persistent:!0}).onOk(u=>{s.catatan=u,y()})}return(u,h)=>(_(),v(ae,{position:"bottom-right",offset:[18,18]},{default:t(()=>[e(le,{color:"primary",icon:"keyboard_arrow_left",direction:"left"},{label:t(({opened:x})=>[d("div",{class:se({"example-fab-animate--hover":x!==!0})},w(x!==!0?"Approval":"Close"),3)]),default:t(()=>[e(K,{color:"green-5",label:"Setujui",icon:"check",onClick:i}),e(K,{color:"red",label:"Tolak",icon:"clear",onClick:R})]),_:1})]),_:1}))}}),ia=P({__name:"RAPSubmissionForm",props:{data:{}},setup(k){const l=k,p=X(),s=q({catatan:""});function C(){s.post(route("rap.submit",l.data.id_rap),{onSuccess:i=>{p.notify({type:"positive",message:i.props.flash.success,position:"top"})}})}function y(){p.dialog({title:"Submission Confirmation",message:"Are you sure want to submit this data?",prompt:{outlined:!0,autogrow:!0,model:"",type:"text",placeholder:"Tambahkan Catatan"},color:"primary",cancel:!0,persistent:!0}).onOk(i=>{s.catatan=i,C()})}return(i,R)=>(_(),v(ae,{position:"bottom-right",offset:[18,18]},{default:t(()=>[e(b,{rounded:"",color:"primary",label:"Submit","icon-right":"check",onClick:y},{default:t(()=>[e(W,null,{default:t(()=>[m("Click to submit")]),_:1})]),_:1})]),_:1}))}}),ya=P({__name:"DetailRAPPage",props:{rap:{},detailRap:{},rab:{},detailRab:{},formOptions:{},timeline:{}},setup(k){const l=k,p=[{label:"Main",url:"#"},{label:"RAP",url:route("rap")},{label:l.rap.nama_proyek,url:"#"}];return(s,C)=>{const y=ye("in-link");return _(),N(Z,null,[e(a(we),{title:"RAPP"}),e(_e,null,{breadcrumbs:t(()=>[e(ce,{align:"left"},{default:t(()=>[(_(),N(Z,null,re(p,i=>Ce(e(ge,{label:i.label},null,8,["label"]),[[y,i.url]])),64))]),_:1})]),default:t(()=>[e(Se,{title:"RAP","timeline-title":"Timeline Pengajuan RAP",data:{proyek:s.rap,status:s.rap.status_rap,timeline:s.timeline}},null,8,["data"]),e(a(Qe),{rows:s.detailRap,data:{rap:s.rap,rab:s.rab,detailRab:s.detailRab},"form-options":s.formOptions},null,8,["rows","data","form-options"]),a(F)("create & modify rap")&&a(j)(s.rap)&&s.detailRap.length?(_(),v(a(ia),{key:0,data:{id_rap:s.rap.id_rap}},null,8,["data"])):$("",!0),a(F)("evaluate rap")&&a(me)(s.rap)?(_(),v(a(la),{key:1,data:{id_rap:s.rap.id_rap}},null,8,["data"])):$("",!0),a(F)("approve rap")&&a(fe)(s.rap)?(_(),v(a(na),{key:2,data:{id_rap:s.rap.id_rap}},null,8,["data"])):$("",!0)]),_:1})],64)}}});export{ya as default};