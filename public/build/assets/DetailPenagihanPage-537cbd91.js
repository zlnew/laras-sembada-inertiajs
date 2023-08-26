import{i as K,d as O,e as E,f as ue,g as pe,Q as Y,a as Z,b as ce,h as ge,_ as me,c as _e}from"./AuthenticatedLayout.vue_vue_type_script_setup_true_lang-d717bd64.js";import{d as F,l as he,j as N,T as B,o as _,e as A,a,C as fe,w as n,b as c,t as m,u as e,c as b,Q as D,h as f,i as q,A as T,g as i,y as be,F as z,k as X,f as oe,s as I,p as G,q as R,v as W,x as L,D as ve,m as ke,Z as ye,n as we}from"./app-a381cf6c.js";import{f as M}from"./ProyekDeleteDialog.vue_vue_type_script_setup_true_lang-77014158.js";import{a as U,b as p,c as le,d as ie,Q as ee}from"./QTable-ab6886a4.js";import{Q as ae}from"./QTooltip-f4dd372e.js";import{Q as J}from"./QPopupEdit-25d79f7a.js";import{u as ne}from"./use-quasar-4af1b296.js";import{a as g,t as k}from"./money-3074a8fc.js";import{u as j,Q as te}from"./use-dialog-plugin-component-e21d1e74.js";import{Q as se}from"./QForm-50cc0db7.js";import{m as re}from"./options-4b88285e.js";import{Q as de,_ as Ce}from"./ModuleTopSection.vue_vue_type_script_setup_true_lang-84b1bb82.js";import"./QImg-e011ca0f.js";const Ve={class:"q-pa-md"},xe={class:"q-gutter-sm"},$e={key:1},Pe=F({__name:"PenagihanItemTable",props:{rows:{},data:{},formOptions:{}},setup($){const u=$,w=he(()=>{const v=u.rows.reduce((l,d)=>l+g(d.harga_satuan_penagihan)*g(d.volume_penagihan),0),s=v-g(t.potongan_ppn)-g(t.potongan_pph)-g(t.potongan_lainnya);return{penagihan:v,pencairan:s}}),r=ne();function x(){r.dialog({component:je,componentProps:{penagihan:u.data.penagihan,options:u.formOptions}}).onOk(v=>{r.notify({type:v.type,message:v.message,position:"top"})})}function P(v){r.dialog({component:Ze,componentProps:{detailPenagihan:v,options:u.formOptions}}).onOk(s=>{r.notify({type:s.type,message:s.message,position:"top"})})}function y(v){r.dialog({component:We,componentProps:{id_detail_penagihan:v}}).onOk(s=>{r.notify({type:s.type,message:s.message,position:"top"})})}const S=[{name:"index",label:"#",field:"index"},{name:"uraian",label:"Uraian",field:"uraian",align:"left",sortable:!0},{name:"harga_satuan",label:"Harga Satuan",field:"harga_satuan",align:"right",sortable:!0},{name:"volume",label:"Volume",field:"volume",align:"right",sortable:!0},{name:"total_harga",label:"Total Harga",field:"total_harga",align:"right",sortable:!0},{name:"actions",label:"Actions",field:"",align:"left"}],C=N(!1);function o(){C.value=!C.value}const H=N(""),V=N([]),t=B({potongan_ppn:u.data.penagihan.potongan_ppn,potongan_pph:u.data.penagihan.potongan_pph,potongan_lainnya:u.data.penagihan.potongan_lainnya,keterangan_potongan_lainnya:u.data.penagihan.keterangan_potongan_lainnya});function h(){t.put(route("penagihan.tax",u.data.penagihan.id_penagihan),{preserveScroll:!0,onSuccess:()=>!0})}return(v,s)=>(_(),A("div",Ve,[a(le,{flat:"",bordered:"","row-key":"id_detail_penagihan",rows:v.rows,columns:S,"rows-per-page-options":[10,15,20,25,50,0],fullscreen:C.value,filter:H.value,selection:"multiple",selected:V.value,"onUpdate:selected":s[13]||(s[13]=l=>V.value=l),class:"no-border"},fe({"top-left":n(()=>[i("div",xe,[e(K)()||e(O)("create & modify penagihan")&&e(E)(v.data.penagihan)?(_(),b(f,{key:0,"no-caps":"",label:"Tambah Uraian",icon:"add",color:"primary",onClick:x})):T("",!0)])]),"top-right":n(()=>[a(D,{dense:"",debounce:"300",modelValue:H.value,"onUpdate:modelValue":s[0]||(s[0]=l=>H.value=l),placeholder:"Search"},{append:n(()=>[a(be,{name:"search"})]),_:1},8,["modelValue"]),a(f,{flat:"",dense:"",icon:C.value?"fullscreen_exit":"fullscreen",onClick:o,class:"q-ml-md"},null,8,["icon"])]),header:n(l=>[a(U,{props:l},{default:n(()=>[(_(!0),A(z,null,X(l.cols,d=>(_(),b(ie,{key:d.name,props:l,style:{"font-weight":"bold"}},{default:n(()=>[d.name==="penerimaan"?(_(),b(oe,{key:0,modelValue:l.selected,"onUpdate:modelValue":Q=>l.selected=Q,label:"Penerimaan"},null,8,["modelValue","onUpdate:modelValue"])):(_(),A("span",$e,m(d.label),1))]),_:2},1032,["props"]))),128))]),_:2},1032,["props"])]),body:n(l=>[a(U,{props:l},{default:n(()=>[a(p,{key:"index",props:l},{default:n(()=>[c(m(++l.rowIndex),1)]),_:2},1032,["props"]),a(p,{key:"uraian",props:l},{default:n(()=>[c(m(l.row.uraian),1)]),_:2},1032,["props"]),a(p,{key:"harga_satuan",props:l},{default:n(()=>[c(m(e(k)(e(g)(l.row.harga_satuan_penagihan))),1)]),_:2},1032,["props"]),a(p,{key:"volume",props:l},{default:n(()=>[c(m(e(g)(l.row.volume_penagihan)),1)]),_:2},1032,["props"]),a(p,{key:"total_harga",props:l},{default:n(()=>[c(m(e(k)(e(g)(l.row.harga_satuan_penagihan)*e(g)(l.row.volume_penagihan))),1)]),_:2},1032,["props"]),a(p,{key:"penerimaan",props:l},{default:n(()=>[a(oe,{modelValue:l.selected,"onUpdate:modelValue":d=>l.selected=d},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["props"]),a(p,{key:"actions",props:l},{default:n(()=>[e(K)()||e(O)("create & modify penagihan")&&e(E)(v.data.penagihan)?(_(),b(f,{key:0,dense:"",flat:"",color:"blue-grey",icon:"more_vert"},{default:n(()=>[a(ue,{"auto-close":"","transition-show":"scale","transition-hide":"scale"},{default:n(()=>[a(pe,{dense:"",style:{"min-width":"100px"}},{default:n(()=>[a(Y,{clickable:""},{default:n(()=>[a(Z,{onClick:d=>P(l.row)},{default:n(()=>[c(" Edit ")]),_:2},1032,["onClick"])]),_:2},1024),a(I),a(Y,{clickable:""},{default:n(()=>[a(Z,{class:"text-red",onClick:d=>y(l.row.id_detail_penagihan)},{default:n(()=>[c(" Delete ")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)):(_(),b(f,{key:1,dense:"",flat:"",color:"grey-6",icon:"block"},{default:n(()=>[a(ae,null,{default:n(()=>[c("Required permission")]),_:1})]),_:1}))]),_:2},1032,["props"])]),_:2},1032,["props"])]),_:2},[v.rows.length?{name:"bottom-row",fn:n(()=>[a(U,{"no-hover":""},{default:n(()=>[a(p,{colspan:"3",style:{border:"none"}}),a(p,{class:"text-right"},{default:n(()=>[c(" Total Penagihan ")]),_:1}),a(p,{class:"text-right text-weight-bold"},{default:n(()=>[c(m(e(k)(w.value.penagihan)),1)]),_:1}),a(p,{style:{border:"none"}})]),_:1}),a(U,{"no-hover":""},{default:n(()=>[a(p,{colspan:"3",style:{border:"none"}}),a(p,{class:"text-right"},{default:n(()=>[c(" Total Diterima ")]),_:1}),a(p,{class:"text-right text-weight-bold"},{default:n(()=>[c(m(e(k)(e(g)(v.data.penagihan.jumlah_diterima))),1)]),_:1}),a(p,{style:{border:"none"}})]),_:1}),a(U,{"no-hover":""},{default:n(()=>[a(p,{colspan:"3",style:{border:"none"}}),a(p,{class:"text-right"},{default:n(()=>[c(" Potongan PPN ")]),_:1}),a(p,{class:"text-right text-weight-bold"},{default:n(()=>[c(m(e(k)(e(g)(e(t).potongan_ppn)))+" ",1),e(K)()||e(O)("create & modify penagihan")&&e(E)(v.data.penagihan)?(_(),b(J,{key:0,modelValue:e(t).potongan_ppn,"onUpdate:modelValue":s[3]||(s[3]=l=>e(t).potongan_ppn=l),modelModifiers:{number:!0}},{default:n(l=>[a(D,{flat:"",dense:"","hide-bottom-space":"","reverse-fill-mask":"",mask:"#.##","fill-mask":"0",modelValue:e(t).potongan_ppn,"onUpdate:modelValue":s[2]||(s[2]=d=>e(t).potongan_ppn=d),hint:e(k)(e(g)(e(t).potongan_ppn)),error:!!e(t).errors.potongan_ppn,"error-message":e(t).errors.potongan_ppn,"input-class":"text-right"},{after:n(()=>[a(f,{flat:"",dense:"",color:"negative",icon:"cancel",onClick:q(l.cancel,["stop","prevent"])},null,8,["onClick"]),a(f,{flat:"",dense:"",color:"positive",icon:"check_circle",disable:!e(t).isDirty,onClick:[s[1]||(s[1]=q(d=>h(),["stop","prevent"])),l.set]},null,8,["disable","onClick"])]),_:2},1032,["modelValue","hint","error","error-message"])]),_:1},8,["modelValue"])):T("",!0)]),_:1}),a(p,{style:{border:"none"}})]),_:1}),a(U,{"no-hover":""},{default:n(()=>[a(p,{colspan:"3",style:{border:"none"}}),a(p,{class:"text-right"},{default:n(()=>[c(" Potongan PPH ")]),_:1}),a(p,{class:"text-right text-weight-bold"},{default:n(()=>[c(m(e(k)(e(g)(e(t).potongan_pph)))+" ",1),e(K)()||e(O)("create & modify penagihan")&&e(E)(v.data.penagihan)?(_(),b(J,{key:0,modelValue:e(t).potongan_pph,"onUpdate:modelValue":s[6]||(s[6]=l=>e(t).potongan_pph=l),modelModifiers:{number:!0}},{default:n(l=>[a(D,{flat:"",dense:"","hide-bottom-space":"","reverse-fill-mask":"",mask:"#.##","fill-mask":"0",modelValue:e(t).potongan_pph,"onUpdate:modelValue":s[5]||(s[5]=d=>e(t).potongan_pph=d),hint:e(k)(e(g)(e(t).potongan_pph)),error:!!e(t).errors.potongan_pph,"error-message":e(t).errors.potongan_pph,"input-class":"text-right"},{after:n(()=>[a(f,{flat:"",dense:"",color:"negative",icon:"cancel",onClick:q(l.cancel,["stop","prevent"])},null,8,["onClick"]),a(f,{flat:"",dense:"",color:"positive",icon:"check_circle",disable:!e(t).isDirty,onClick:[s[4]||(s[4]=q(d=>h(),["stop","prevent"])),l.set]},null,8,["disable","onClick"])]),_:2},1032,["modelValue","hint","error","error-message"])]),_:1},8,["modelValue"])):T("",!0)]),_:1}),a(p,{style:{border:"none"}})]),_:1}),a(U,{"no-hover":""},{default:n(()=>[a(p,{colspan:"3",style:{border:"none"}}),a(p,{class:"text-right"},{default:n(()=>[c(" Potongan Lainnya ")]),_:1}),a(p,{class:"text-right text-weight-bold"},{default:n(()=>[c(m(e(k)(e(g)(e(t).potongan_lainnya)))+" ",1),e(K)()||e(O)("create & modify penagihan")&&e(E)(v.data.penagihan)?(_(),b(J,{key:0,modelValue:e(t).potongan_lainnya,"onUpdate:modelValue":s[9]||(s[9]=l=>e(t).potongan_lainnya=l),modelModifiers:{number:!0}},{default:n(l=>[a(D,{flat:"",dense:"","hide-bottom-space":"","reverse-fill-mask":"",mask:"#.##","fill-mask":"0",modelValue:e(t).potongan_lainnya,"onUpdate:modelValue":s[8]||(s[8]=d=>e(t).potongan_lainnya=d),hint:e(k)(e(g)(e(t).potongan_lainnya)),error:!!e(t).errors.potongan_lainnya,"error-message":e(t).errors.potongan_lainnya,"input-class":"text-right"},{after:n(()=>[a(f,{flat:"",dense:"",color:"negative",icon:"cancel",onClick:q(l.cancel,["stop","prevent"])},null,8,["onClick"]),a(f,{flat:"",dense:"",color:"positive",icon:"check_circle",disable:!e(t).isDirty,onClick:[s[7]||(s[7]=q(d=>h(),["stop","prevent"])),l.set]},null,8,["disable","onClick"])]),_:2},1032,["modelValue","hint","error","error-message"])]),_:1},8,["modelValue"])):T("",!0)]),_:1}),a(p,null,{default:n(()=>[c(m(e(t).keterangan_potongan_lainnya||"Tambah Keterangan")+" ",1),e(K)()||e(O)("create & modify penagihan")&&e(E)(v.data.penagihan)?(_(),b(J,{key:0,modelValue:e(t).keterangan_potongan_lainnya,"onUpdate:modelValue":s[12]||(s[12]=l=>e(t).keterangan_potongan_lainnya=l)},{default:n(l=>[a(D,{flat:"",dense:"",autogrow:"","hide-bottom-space":"",label:"Tambah Keterangan",modelValue:e(t).keterangan_potongan_lainnya,"onUpdate:modelValue":s[11]||(s[11]=d=>e(t).keterangan_potongan_lainnya=d),error:!!e(t).errors.keterangan_potongan_lainnya,"error-message":e(t).errors.keterangan_potongan_lainnya},{after:n(()=>[a(f,{flat:"",dense:"",color:"negative",icon:"cancel",onClick:q(l.cancel,["stop","prevent"])},null,8,["onClick"]),a(f,{flat:"",dense:"",color:"positive",icon:"check_circle",disable:!e(t).isDirty,onClick:[s[10]||(s[10]=q(d=>h(),["stop","prevent"])),l.set]},null,8,["disable","onClick"])]),_:2},1032,["modelValue","error","error-message"])]),_:1},8,["modelValue"])):T("",!0)]),_:1})]),_:1}),a(U,{"no-hover":""},{default:n(()=>[a(p,{colspan:"3",style:{border:"none"}}),a(p,{class:"text-right"},{default:n(()=>[c(" Total Pencairan/Netto ")]),_:1}),a(p,{class:"text-right text-weight-bold"},{default:n(()=>[c(m(e(k)(w.value.pencairan)),1)]),_:1}),a(p,{style:{border:"none"}})]),_:1})]),key:"0"}:void 0]),1032,["rows","fullscreen","filter","selected"])]))}}),De=i("div",{class:"text-h6"},"Tambah Uraian Penagihan",-1),Se={class:"q-gutter-md"},Qe={class:"row"},qe={class:"col-12 col-md-6 q-pr-sm"},Ue={class:"col-12 col-md-6 q-pl-sm"},Te={class:"row"},Re=i("div",{class:"col-12 col-md-6 q-pr-sm"},null,-1),He={class:"col-12 col-md-6 q-pl-sm text-right"},Oe=i("div",{class:"text-secondary text-caption"},"Total Harga",-1),Ie={class:"text-weight-bold text-subtitle1"},je=F({__name:"PenagihanItemCreateDialog",props:{penagihan:{},options:{}},emits:[...j.emits],setup($){const u=$,{dialogRef:w,onDialogOK:r,onDialogCancel:x,onDialogHide:P}=j(),y=N(u.options.detailRab);function S(V,t){t(()=>{y.value=re(V,u.options.detailRab,["uraian"])})}function C(V){const t=u.options.detailRab.find(h=>h.id_detail_rab===V);t&&t.harga_satuan&&(o.harga_satuan_penagihan=t.harga_satuan)}const o=B({id_detail_rab:null,volume_penagihan:"0",harga_satuan_penagihan:"0"});function H(){o.post(route("detail_penagihan.store",u.penagihan.id_penagihan),{onSuccess:V=>{r({type:"positive",message:V.props.flash.success})}})}return(V,t)=>(_(),b(G,{ref_key:"dialogRef",ref:w,"no-backdrop-dismiss":!0,onHide:e(P)},{default:n(()=>[a(L,{style:{width:"700px","max-width":"80vw"}},{default:n(()=>[a(R,{class:"row items-center q-pb-none"},{default:n(()=>[De,a(te),a(f,{flat:"",round:"",dense:"",icon:"close",onClick:e(x)},null,8,["onClick"])]),_:1}),a(I),a(se,{onSubmit:q(H,["prevent"])},{default:n(()=>[a(R,{class:"scroll"},{default:n(()=>[i("div",Se,[a(ee,{outlined:"","use-input":"","emit-value":"","map-options":"","hide-bottom-space":"","input-debounce":"500",label:"Uraian RAB","option-value":"id_detail_rab","option-label":"uraian","model-value":e(o).id_detail_rab,options:y.value,error:!!e(o).errors.id_detail_rab,"error-message":e(o).errors.id_detail_rab,onFilter:S,"onUpdate:modelValue":t[0]||(t[0]=h=>{e(o).id_detail_rab=h,C(h)})},{"no-option":n(()=>[a(Y,null,{default:n(()=>[a(Z,{class:"text-grey"},{default:n(()=>[c(" No results ")]),_:1})]),_:1})]),_:1},8,["model-value","options","error","error-message"]),i("div",Qe,[i("div",qe,[a(D,{outlined:"","hide-bottom-space":"",label:"Harga Satuan",modelValue:e(o).harga_satuan_penagihan,"onUpdate:modelValue":t[1]||(t[1]=h=>e(o).harga_satuan_penagihan=h),hint:e(k)(e(g)(e(o).harga_satuan_penagihan)),"hide-hint":e(g)(e(o).harga_satuan_penagihan)<1,error:!!e(o).errors.harga_satuan_penagihan,"error-message":e(o).errors.harga_satuan_penagihan,"input-class":"text-right"},null,8,["modelValue","hint","hide-hint","error","error-message"])]),i("div",Ue,[a(D,{outlined:"","hide-bottom-space":"",label:"Volume",modelValue:e(o).volume_penagihan,"onUpdate:modelValue":t[2]||(t[2]=h=>e(o).volume_penagihan=h),error:!!e(o).errors.volume_penagihan,"error-message":e(o).errors.volume_penagihan,"input-class":"text-right"},null,8,["modelValue","error","error-message"])])]),i("div",Te,[Re,i("div",He,[Oe,i("div",Ie,m(e(k)(e(g)(e(o).harga_satuan_penagihan)*e(g)(e(o).volume_penagihan))),1)])])])]),_:1}),a(I),a(W,{align:"right"},{default:n(()=>[e(o).hasErrors?(_(),b(f,{key:0,flat:"",label:"Clear Errors",color:"red",onClick:t[3]||(t[3]=h=>e(o).clearErrors())})):T("",!0),a(f,{flat:"",label:"Reset",color:"secondary",onClick:t[4]||(t[4]=h=>e(o).reset())}),a(f,{flat:"",type:"submit",label:"Submit",color:"primary",loading:e(o).processing},null,8,["loading"])]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1},8,["onHide"]))}}),Fe=i("div",{class:"text-h6"},"Edit Uraian Penagihan",-1),Ee={class:"q-gutter-md"},Ne={class:"row"},Ae={class:"col-12 col-md-6 q-pr-sm"},Ke={class:"col-12 col-md-6 q-pl-sm"},Be={class:"row"},Le=i("div",{class:"col-12 col-md-6 q-pr-sm"},null,-1),Me={class:"col-12 col-md-6 q-pl-sm text-right"},Je=i("div",{class:"text-secondary text-caption"},"Total Harga",-1),Ye={class:"text-weight-bold text-subtitle1"},Ze=F({__name:"PenagihanItemEditDialog",props:{detailPenagihan:{},options:{}},emits:[...j.emits],setup($){const u=$,{dialogRef:w,onDialogOK:r,onDialogCancel:x,onDialogHide:P}=j(),y=N(u.options.detailRab);function S(V,t){t(()=>{y.value=re(V,u.options.detailRab,["uraian"])})}function C(V){const t=u.options.detailRab.find(h=>h.id_detail_rab===V);t&&t.harga_satuan&&(o.harga_satuan_penagihan=t.harga_satuan)}const o=B({id_detail_rab:u.detailPenagihan.id_detail_rab,volume_penagihan:u.detailPenagihan.volume_penagihan,harga_satuan_penagihan:u.detailPenagihan.harga_satuan_penagihan});function H(){o.patch(route("detail_penagihan.update",u.detailPenagihan.id_detail_penagihan),{onSuccess:V=>{r({type:"positive",message:V.props.flash.success})}})}return(V,t)=>(_(),b(G,{ref_key:"dialogRef",ref:w,"no-backdrop-dismiss":!0,onHide:e(P)},{default:n(()=>[a(L,{style:{width:"700px","max-width":"80vw"}},{default:n(()=>[a(R,{class:"row items-center q-pb-none"},{default:n(()=>[Fe,a(te),a(f,{flat:"",round:"",dense:"",icon:"close",onClick:e(x)},null,8,["onClick"])]),_:1}),a(I),a(se,{onSubmit:q(H,["prevent"])},{default:n(()=>[a(R,{class:"scroll"},{default:n(()=>[i("div",Ee,[a(ee,{outlined:"","use-input":"","emit-value":"","map-options":"","hide-bottom-space":"","input-debounce":"500",label:"Uraian RAB","option-value":"id_detail_rab","option-label":"uraian","model-value":e(o).id_detail_rab,options:y.value,error:!!e(o).errors.id_detail_rab,"error-message":e(o).errors.id_detail_rab,onFilter:S,"onUpdate:modelValue":t[0]||(t[0]=h=>{e(o).id_detail_rab=h,C(h)})},{"no-option":n(()=>[a(Y,null,{default:n(()=>[a(Z,{class:"text-grey"},{default:n(()=>[c(" No results ")]),_:1})]),_:1})]),_:1},8,["model-value","options","error","error-message"]),i("div",Ne,[i("div",Ae,[a(D,{outlined:"","hide-bottom-space":"",label:"Harga Satuan",modelValue:e(o).harga_satuan_penagihan,"onUpdate:modelValue":t[1]||(t[1]=h=>e(o).harga_satuan_penagihan=h),hint:e(k)(e(g)(e(o).harga_satuan_penagihan)),"hide-hint":e(g)(e(o).harga_satuan_penagihan)<1,error:!!e(o).errors.harga_satuan_penagihan,"error-message":e(o).errors.harga_satuan_penagihan,"input-class":"text-right"},null,8,["modelValue","hint","hide-hint","error","error-message"])]),i("div",Ke,[a(D,{outlined:"","hide-bottom-space":"",label:"Volume",modelValue:e(o).volume_penagihan,"onUpdate:modelValue":t[2]||(t[2]=h=>e(o).volume_penagihan=h),error:!!e(o).errors.volume_penagihan,"error-message":e(o).errors.volume_penagihan,"input-class":"text-right"},null,8,["modelValue","error","error-message"])])]),i("div",Be,[Le,i("div",Me,[Je,i("div",Ye,m(e(k)(e(g)(e(o).harga_satuan_penagihan)*e(g)(e(o).volume_penagihan))),1)])])])]),_:1}),a(I),a(W,{align:"right"},{default:n(()=>[e(o).hasErrors?(_(),b(f,{key:0,flat:"",label:"Clear Errors",color:"red",onClick:t[3]||(t[3]=h=>e(o).clearErrors())})):T("",!0),a(f,{flat:"",label:"Reset",color:"secondary",onClick:t[4]||(t[4]=h=>e(o).reset())}),a(f,{flat:"",type:"submit",label:"Update",color:"primary",loading:e(o).processing},null,8,["loading"])]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1},8,["onHide"]))}}),ze=i("div",{class:"text-h6"},"Delete Confirmation",-1),Ge=i("span",{class:"q-ml-sm"},"Are you sure want to delete this data?",-1),We=F({__name:"PenagihanItemDeleteDialog",props:{id_detail_penagihan:{}},emits:[...j.emits],setup($){const u=$,{dialogRef:w,onDialogOK:r,onDialogCancel:x,onDialogHide:P}=j(),y=B({id_detail_penagihan:u.id_detail_penagihan});function S(){y.delete(route("detail_penagihan.destroy",u.id_detail_penagihan),{onSuccess:C=>{r({type:"positive",message:C.props.flash.success})}})}return(C,o)=>(_(),b(G,{ref_key:"dialogRef",ref:w,"no-backdrop-dismiss":!0,onHide:e(P)},{default:n(()=>[a(L,null,{default:n(()=>[a(R,{class:"row items-center q-pb-none"},{default:n(()=>[ze]),_:1}),a(I),a(R,{class:"row items-center"},{default:n(()=>[a(ve,{icon:"dangerous",color:"red","text-color":"white"}),Ge]),_:1}),a(W,{align:"right"},{default:n(()=>[a(f,{flat:"",label:"Cancel",color:"primary",onClick:e(x)},null,8,["onClick"]),a(f,{flat:"",label:"Yes, delete it",color:"red",onClick:S})]),_:1})]),_:1})]),_:1},8,["onHide"]))}}),Xe=i("div",{class:"text-h6"},"Lembar Evaluasi",-1),ea={class:"q-gutter-md"},aa={class:"q-mb-md row q-col-gutter-md"},na={class:"col-12 col-md-6"},ta={class:"col-12 col-md-6"},oa=F({__name:"PenagihanConfirmDialog",props:{data:{}},emits:[...j.emits],setup($){const u=$,{dialogRef:w,onDialogOK:r,onDialogCancel:x,onDialogHide:P}=j(),S=N(["Diterima","Diterima Sebagian","Tolak"]),C=N(null),o=B({id_penagihan:u.data.id_penagihan,jumlah_diterima:u.data.jumlah_diterima,catatan:null});function H(){C.value==="Diterima"?V():C.value==="Diterima Sebagian"?t():C.value==="Tolak"&&h()}function V(){o.transform(s=>({...s,bertahap:!1,jumlah_diterima:1})).post(route("penagihan.confirm",u.data.id_penagihan),{onSuccess:s=>{r({type:"positive",message:s.props.flash.success})}})}function t(){o.transform(s=>({...s,bertahap:!0})).post(route("penagihan.confirm",u.data.id_penagihan),{onSuccess:s=>{r({type:"positive",message:s.props.flash.success})}})}function h(){o.post(route("penagihan.reject",u.data.id_penagihan),{onSuccess:s=>{r({type:"positive",message:s.props.flash.success})}})}const v=[{name:"nilai_kontrak",label:"Nilai Kontrak",field:"nilai_kontrak",align:"right",sortable:!0},{name:"invoice_sebelumnya",label:"Invoice Sebelumnya",field:"invoice_sebelumnya",align:"right",sortable:!0},{name:"invoice_saat_ini",label:"Invoice Saat Ini",field:"invoice_saat_ini",align:"right",sortable:!0},{name:"sisa_netto_kontrak",label:"Sisa Netto Kontrak",field:"sisa_netto_kontrak",align:"right",sortable:!0}];return(s,l)=>(_(),b(G,{ref_key:"dialogRef",ref:w,"no-backdrop-dismiss":!0,onHide:e(P)},{default:n(()=>[a(L,{style:{"max-width":"100vw"}},{default:n(()=>[a(R,{class:"row items-center q-pb-none"},{default:n(()=>[Xe,a(te),a(f,{flat:"",round:"",dense:"",icon:"close",onClick:e(x)},null,8,["onClick"])]),_:1}),a(I),a(R,{class:"scroll"},{default:n(()=>[i("div",ea,[a(le,{flat:"","row-key":"id_proyek",rows:s.data.evaluasi,columns:v,"rows-per-page-options":[0],"hide-bottom":""},{header:n(d=>[a(U,{props:d},{default:n(()=>[(_(!0),A(z,null,X(d.cols,Q=>(_(),b(ie,{key:Q.name,props:d,style:{"font-weight":"bold"}},{default:n(()=>[c(m(Q.label),1)]),_:2},1032,["props"]))),128))]),_:2},1032,["props"])]),body:n(d=>[a(U,{props:d},{default:n(()=>[a(p,{key:"nilai_kontrak",props:d},{default:n(()=>[c(m(e(k)(e(g)(d.row.nilai_kontrak))),1)]),_:2},1032,["props"]),a(p,{key:"invoice_sebelumnya",props:d},{default:n(()=>[c(m(e(k)(e(g)(d.row.invoice_sebelumnya))),1)]),_:2},1032,["props"]),a(p,{key:"invoice_saat_ini",props:d},{default:n(()=>[c(m(e(k)(e(g)(d.row.invoice_saat_ini))),1)]),_:2},1032,["props"]),a(p,{key:"sisa_netto_kontrak",props:d},{default:n(()=>[c(m(e(k)(e(g)(d.row.sisa_netto_kontrak))),1)]),_:2},1032,["props"])]),_:2},1032,["props"])]),_:1},8,["rows"])])]),_:1}),a(R,null,{default:n(()=>{var d;return[i("div",aa,[i("div",na,[a(ee,{outlined:"",modelValue:C.value,"onUpdate:modelValue":l[0]||(l[0]=Q=>C.value=Q),label:"Pilih Aksi*",options:S.value},null,8,["modelValue","options"])]),i("div",ta,[a(D,{outlined:"",autogrow:"",modelValue:e(o).catatan,"onUpdate:modelValue":l[1]||(l[1]=Q=>e(o).catatan=Q),label:"Catatan"},null,8,["modelValue"])])]),C.value==="Diterima Sebagian"?(_(),b(D,{key:0,outlined:"","hide-bottom-space":"",modelValue:e(o).jumlah_diterima,"onUpdate:modelValue":l[2]||(l[2]=Q=>e(o).jumlah_diterima=Q),label:"Jumlah Diterima*",hint:e(k)(e(g)(e(o).jumlah_diterima)),error:!!((d=e(o).errors.jumlah_diterima)!=null&&d.length),"error-message":e(o).errors.jumlah_diterima,"input-class":"text-right"},null,8,["modelValue","hint","error","error-message"])):T("",!0)]}),_:1}),a(I),a(W,{align:"right"},{default:n(()=>[a(f,{flat:"",label:"Confirm",color:"primary",loading:e(o).processing,onClick:H},null,8,["loading"])]),_:1})]),_:1})]),_:1},8,["onHide"]))}}),la=F({__name:"PenagihanConfirmForm",props:{data:{}},setup($){const u=$,w=ne();function r(){w.dialog({component:oa,componentProps:{data:u.data}}).onOk(x=>{w.notify({type:x.type,message:x.message,position:"top"})})}return(x,P)=>(_(),b(de,{position:"bottom-right",offset:[18,18]},{default:n(()=>[a(f,{rounded:"",label:"Konfirmasi Penerimaan",color:"primary",icon:"keyboard_arrow_left",onClick:r,class:"q-pa-md"},{default:n(()=>[a(ae,null,{default:n(()=>[c("Konfirmasi Penerimaan")]),_:1})]),_:1})]),_:1}))}}),ia=F({__name:"PenagihanSubmissionForm",props:{data:{}},setup($){const u=$,w=ne(),r=B({catatan:""});function x(){r.post(route("penagihan.submit",u.data.id_penagihan),{onSuccess:y=>{w.notify({type:"positive",message:y.props.flash.success,position:"top"})}})}function P(){w.dialog({title:"Submission Confirmation",message:"Are you sure want to submit this data?",prompt:{outlined:!0,autogrow:!0,model:"",type:"text",placeholder:"Tambahkan Catatan"},color:"primary",cancel:!0,persistent:!0}).onOk(y=>{r.catatan=y,x()})}return(y,S)=>(_(),b(de,{position:"bottom-right",offset:[18,18]},{default:n(()=>[a(f,{rounded:"",color:"primary",label:"Submit","icon-right":"check",onClick:P,class:"q-pa-md"},{default:n(()=>[a(ae,null,{default:n(()=>[c("Click to submit")]),_:1})]),_:1})]),_:1}))}}),sa={class:"q-px-md q-pt-md"},ra={class:"row q-col-gutter-md"},da={class:"col-12 col-md-6"},ua={class:"row"},pa=i("div",{class:"col-4 text-caption"}," Keperluan ",-1),ca={class:"col-8 text-subtitle2"},ga=i("div",{class:"col-4 text-caption"}," Tanggal Pengajuan ",-1),ma={class:"col-8 text-subtitle2"},_a=i("div",{class:"col-4 text-caption"}," Nomor Rekening Tujuan ",-1),ha={class:"col-8 text-subtitle2"},fa=i("div",{class:"col-4 text-caption"}," Nomor SP2D ",-1),ba={class:"col-8 text-subtitle2"},va=i("div",{class:"col-4 text-caption"}," Tanggal SP2D ",-1),ka={class:"col-8 text-subtitle2"},ya=i("div",{class:"col-4 text-caption"}," Tanggal Terbit ",-1),wa={class:"col-8 text-subtitle2"},Ca=i("div",{class:"col-4 text-caption"}," Tanggal Cair ",-1),Va={class:"col-8 text-subtitle2"},xa=i("div",{class:"col-4 text-caption"}," Nilai Netto ",-1),$a={class:"col-8 text-subtitle2"},Pa=i("div",{class:"col-4 text-caption"}," Faktur ",-1),Da={class:"col-8 text-subtitle2"},Sa={key:1},Ka=F({__name:"DetailPenagihanPage",props:{penagihan:{},detailPenagihan:{},evaluasi:{},formOptions:{},timeline:{}},setup($){const u=$,w=[{label:"Keuangan",url:"#"},{label:"Penagihan/Invoice",url:route("penagihan")},{label:u.penagihan.nama_proyek,url:"#"}];return(r,x)=>{const P=ke("in-link");return _(),A(z,null,[a(e(ye),{title:"Penagihan"}),a(me,null,{breadcrumbs:n(()=>[a(ce,{align:"left"},{default:n(()=>[(_(),A(z,null,X(w,y=>we(a(_e,{key:y.label,label:y.label},null,8,["label"]),[[P,y.url]])),64))]),_:1})]),default:n(()=>[a(Ce,{title:"Penagihan","timeline-title":"Timeline Penagihan",data:{proyek:r.penagihan,status:r.penagihan.status_penagihan,timeline:r.timeline}},null,8,["data"]),i("div",sa,[i("div",ra,[i("div",da,[a(L,{flat:"",bordered:""},{default:n(()=>[a(R,null,{default:n(()=>[i("div",ua,[pa,i("div",ca," : "+m(r.penagihan.keperluan),1),ga,i("div",ma," : "+m(e(M)(r.penagihan.tanggal_pengajuan)||"-"),1),_a,i("div",ha," : "+m(r.penagihan.nama_bank_pg)+" | "+m(r.penagihan.nomor_rekening_pg)+" - "+m(r.penagihan.nama_rekening_pg),1),fa,i("div",ba," : "+m(r.penagihan.nomor_sp2d||"-"),1),va,i("div",ka," : "+m(e(M)(r.penagihan.tanggal_sp2d)||"-"),1),ya,i("div",wa," : "+m(e(M)(r.penagihan.tanggal_terbit)||"-"),1),Ca,i("div",Va," : "+m(e(M)(r.penagihan.tanggal_cair)||"-"),1),xa,i("div",$a," : "+m(e(k)(e(g)(r.penagihan.nilai_netto))),1),Pa,i("div",Da,[c(" : "),r.penagihan.faktur?(_(),b(f,{key:0,flat:"",dense:"","no-caps":"",label:"Lihat Faktur",color:"primary",href:r.penagihan.faktur,target:"_blank"},null,8,["href"])):(_(),A("span",Sa,"-"))])])]),_:1})]),_:1})])])]),a(e(Pe),{rows:r.detailPenagihan,data:{penagihan:r.penagihan},"form-options":r.formOptions},null,8,["rows","data","form-options"]),e(O)("create & modify penagihan")&&e(E)(r.penagihan)&&r.detailPenagihan.length?(_(),b(e(ia),{key:0,data:{id_penagihan:r.penagihan.id_penagihan}},null,8,["data"])):T("",!0),e(O)("confirm penagihan")&&e(ge)(r.penagihan)?(_(),b(e(la),{key:1,data:{id_penagihan:r.penagihan.id_penagihan,jumlah_diterima:r.penagihan.jumlah_diterima,evaluasi:r.evaluasi}},null,8,["data"])):T("",!0)]),_:1})],64)}}});export{Ka as default};