import{b as ee,c as oe,d as R,e as w,Q as ae,_ as te,a as le}from"./AuthenticatedLayout.vue_vue_type_script_setup_true_lang-da018ec7.js";import{d as A,t as F,n as J,o as f,e as O,a as e,w as o,h as d,c as Q,u as t,ac as ne,z as U,F as N,p as Y,b as _,x as y,q as Z,k as P,K as re,T as H,U as E,j as x,i as K,g as k,ad as S,ae as V,f as se,l as T,m as j,af as ie,V as ue,Z as de}from"./app-71b10028.js";import{u as pe,Q as I,a as D,b as ce,c as _e,e as B,f as M,g as q}from"./use-dialog-plugin-component-d7386d46.js";import{Q as me,a as G,_ as fe}from"./ProyekDeleteDialog.vue_vue_type_script_setup_true_lang-7ccad254.js";import{Q as z}from"./QForm-04ce2fd3.js";import{m as L}from"./options-964f32b0.js";import"./QImg-8a570513.js";import"./_plugin-vue_export-helper-c27b6911.js";const ge={class:"q-pa-md"},be=A({__name:"RABTable",props:{rows:{},formOptions:{}},setup(h){const r=h,i=pe();function v(n){i.dialog({component:fe,componentProps:{proyek:n}})}function g(){i.dialog({component:ve,componentProps:{options:r.formOptions}})}function m(){i.dialog({component:Re,componentProps:{options:r.formOptions}}).onOk(n=>{i.notify({type:n.type,message:n.message,position:"top"})})}function b(n){i.dialog({component:Be,componentProps:{rab:n,options:r.formOptions}}).onOk(l=>{i.notify({type:l.type,message:l.message,position:"top"})})}function C(n){i.dialog({component:Oe,componentProps:{id_rab:n}}).onOk(l=>{i.notify({type:l.type,message:l.message,position:"top"})})}const p=[{name:"nama_proyek",label:"Nama Proyek",field:"nama_proyek",align:"left",sortable:!0},{name:"pengguna_jasa",label:"Pengguna Jasa",field:"pengguna_jasa",align:"left",sortable:!0},{name:"penyedia_jasa",label:"Penyedia Jasa",field:"penyedia_jasa",align:"left",sortable:!0},{name:"tahun_anggaran",label:"Tahun Anggaran",field:"tahun_anggaran",align:"left",sortable:!0},{name:"status_rab",label:"Status",field:"status_rab",align:"left",sortable:!0},{name:"actions",label:"Actions",field:"",align:"left"}],s=F(!1);function c(){s.value=!s.value}return(n,l)=>{const u=J("in-link");return f(),O("div",ge,[e(ce,{flat:"",bordered:"","row-key":"id_rab",rows:n.rows,columns:p,"rows-per-page-options":[5,10,15,20,25,50,0],fullscreen:s.value},{"top-left":o(()=>[e(d,{"no-caps":"",label:"Tambah RAB",icon:"add",color:"primary",onClick:m})]),"top-right":o(()=>[Object.keys(n.$page.props.query).length?(f(),Q(d,{key:0,flat:"","no-caps":"",label:"Clear Filter",icon:"clear",color:"secondary",onClick:l[0]||(l[0]=a=>t(ne).visit(n.route("rab")))})):U("",!0),e(d,{flat:"","no-caps":"",label:"Pencarian",icon:"search",color:"primary",onClick:g}),e(d,{flat:"",dense:"",icon:s.value?"fullscreen_exit":"fullscreen",onClick:c,class:"q-ml-md"},null,8,["icon"])]),header:o(a=>[e(I,{props:a},{default:o(()=>[(f(!0),O(N,null,Y(a.cols,$=>(f(),Q(_e,{key:$.name,props:a,style:{"font-weight":"bold"}},{default:o(()=>[_(y($.label),1)]),_:2},1032,["props"]))),128))]),_:2},1032,["props"])]),body:o(a=>[e(I,{props:a},{default:o(()=>[e(D,{key:"nama_proyek",props:a},{default:o(()=>[e(d,{flat:"","no-caps":"",dense:"",color:"primary",ripple:!1,label:a.row.nama_proyek,onClick:$=>v(a.row)},{default:o(()=>[e(me,{anchor:"bottom middle",self:"top middle"},{default:o(()=>[_(" Lihat Detail ")]),_:1})]),_:2},1032,["label","onClick"])]),_:2},1032,["props"]),e(D,{key:"pengguna_jasa",props:a},{default:o(()=>[_(y(a.row.pengguna_jasa),1)]),_:2},1032,["props"]),e(D,{key:"penyedia_jasa",props:a},{default:o(()=>[_(y(a.row.penyedia_jasa),1)]),_:2},1032,["props"]),e(D,{key:"tahun_anggaran",props:a},{default:o(()=>[_(y(a.row.tahun_anggaran),1)]),_:2},1032,["props"]),e(D,{key:"status_rab",props:a},{default:o(()=>[Z(e(G,{color:a.row.status_rab==400?"red":"primary",label:a.row.status_rab==400?"Closed":"Open"},null,8,["color","label"]),[[u,n.route("detail_rab",a.row.id_rab)]])]),_:2},1032,["props"]),e(D,{key:"actions",props:a},{default:o(()=>[e(d,{dense:"",flat:"",color:"blue-grey",icon:"more_vert"},{default:o(()=>[e(ee,{"auto-close":"","transition-show":"scale","transition-hide":"scale"},{default:o(()=>[e(oe,{dense:"",style:{"min-width":"100px"}},{default:o(()=>[e(R,{clickable:""},{default:o(()=>[e(w,{onClick:$=>b(a.row)},{default:o(()=>[_(" Edit ")]),_:2},1032,["onClick"])]),_:2},1024),e(P),e(R,{clickable:""},{default:o(()=>[e(w,{class:"text-red",onClick:$=>C(a.row.id_rab)},{default:o(()=>[_(" Delete ")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1032,["props"])]),_:2},1032,["props"])]),_:1},8,["rows","fullscreen"])])}}}),ye=k("div",{class:"text-h6"},"Pencarian RAB",-1),ke={class:"q-gutter-md"},he={class:"text-primary"},ve=A({__name:"RABSearchDialog",props:{options:{}},emits:[...B.emits],setup(h){const r=h,{dialogRef:i,onDialogOK:v,onDialogCancel:g,onDialogHide:m}=B(),b=F(r.options.currentProyek);function C(l,u){u(()=>{b.value=L(l,r.options.currentProyek,["nama_proyek","tahun_anggaran"])})}const s=re().props.query,c=H({id_proyek:s.id_proyek,status_rab:s.status_rab});function n(){c.get(route("rab"),{onSuccess:()=>v()})}return(l,u)=>(f(),Q(E,{ref_key:"dialogRef",ref:i,onHide:t(m)},{default:o(()=>[e(j,{style:{width:"700px","max-width":"80vw"}},{default:o(()=>[e(x,{class:"row items-center q-pb-none"},{default:o(()=>[ye,e(M),e(d,{flat:"",round:"",dense:"",icon:"close",onClick:t(g)},null,8,["onClick"])]),_:1}),e(P),e(z,{onSubmit:K(n,["prevent"])},{default:o(()=>[e(x,{class:"scroll"},{default:o(()=>[k("div",ke,[e(q,{outlined:"",clearable:"","use-input":"","use-chips":"","emit-value":"","map-options":"",multiple:"","hide-bottom-space":"","input-debounce":"500",label:"Proyek",modelValue:t(c).id_proyek,"onUpdate:modelValue":u[0]||(u[0]=a=>t(c).id_proyek=a),"option-value":"id_proyek","option-label":a=>`${a.nama_proyek} | ${a.tahun_anggaran}`,options:b.value,error:!!t(c).errors.id_proyek,"error-message":t(c).errors.id_proyek,onFilter:C},{option:o(({itemProps:a,opt:$,selected:W,toggleOption:X})=>[e(R,S(V(a)),{default:o(()=>[e(w,{side:""},{default:o(()=>[e(se,{size:"sm","model-value":W,"onUpdate:modelValue":Se=>X($)},null,8,["model-value","onUpdate:modelValue"])]),_:2},1024),e(w,null,{default:o(()=>[k("strong",he,y($.nama_proyek),1),_(" "+y($.tahun_anggaran),1)]),_:2},1024)]),_:2},1040)]),"no-option":o(()=>[e(R,null,{default:o(()=>[e(w,{class:"text-grey"},{default:o(()=>[_(" No results ")]),_:1})]),_:1})]),_:1},8,["modelValue","option-label","options","error","error-message"]),e(q,{outlined:"",clearable:"","fill-input":"",label:"Status RAB",modelValue:t(c).status_rab,"onUpdate:modelValue":u[1]||(u[1]=a=>t(c).status_rab=a),options:[100,400]},{"selected-item":o(a=>[e(G,{color:a.opt==400?"red":"primary",label:a.opt==400?"Closed":"Open"},null,8,["color","label"])]),option:o(a=>[e(R,S(V(a.itemProps)),{default:o(()=>[e(w,null,{default:o(()=>[_(y(a.opt==400?"Closed":"Open"),1)]),_:2},1024)]),_:2},1040)]),_:1},8,["modelValue"])])]),_:1}),e(P),e(T,{align:"right"},{default:o(()=>[e(d,{flat:"",type:"submit",label:"Search",color:"primary",loading:t(c).processing},null,8,["loading"])]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1},8,["onHide"]))}}),Ce=k("div",{class:"text-h6"},"Tambah RAB",-1),we={class:"q-gutter-md"},$e={class:"text-primary"},Re=A({__name:"RABCreateDialog",props:{options:{}},emits:[...B.emits],setup(h){const r=h,{dialogRef:i,onDialogOK:v,onDialogCancel:g,onDialogHide:m}=B(),b=F(r.options.proyek);function C(c,n){n(()=>{b.value=L(c,r.options.proyek,["nama_proyek","tahun_anggaran"])})}const p=H({id_proyek:null});function s(){p.post(route("rab.store"),{onSuccess:c=>{v({type:"positive",message:c.props.flash.success})}})}return(c,n)=>(f(),Q(E,{ref_key:"dialogRef",ref:i,"no-backdrop-dismiss":!0,onHide:t(m)},{default:o(()=>[e(j,{style:{width:"700px","max-width":"80vw"}},{default:o(()=>[e(x,{class:"row items-center q-pb-none"},{default:o(()=>[Ce,e(M),e(d,{flat:"",round:"",dense:"",icon:"close",onClick:t(g)},null,8,["onClick"])]),_:1}),e(P),e(z,{onSubmit:K(s,["prevent"])},{default:o(()=>[e(x,{class:"scroll"},{default:o(()=>[k("div",we,[e(q,{outlined:"",clearable:"","use-input":"","use-chips":"","emit-value":"","map-options":"","hide-bottom-space":"","input-debounce":"500",label:"Pilih Proyek",modelValue:t(p).id_proyek,"onUpdate:modelValue":n[0]||(n[0]=l=>t(p).id_proyek=l),"option-value":"id_proyek","option-label":l=>`${l.nama_proyek} | ${l.tahun_anggaran}`,options:b.value,error:!!t(p).errors.id_proyek,"error-message":t(p).errors.id_proyek,onFilter:C},{option:o(l=>[e(R,S(V(l.itemProps)),{default:o(()=>[e(w,null,{default:o(()=>[k("strong",$e,y(l.opt.nama_proyek),1),_(" "+y(l.opt.tahun_anggaran),1)]),_:2},1024)]),_:2},1040)]),"no-option":o(()=>[e(R,null,{default:o(()=>[e(w,{class:"text-grey"},{default:o(()=>[_(" No results ")]),_:1})]),_:1})]),_:1},8,["modelValue","option-label","options","error","error-message"])])]),_:1}),e(P),e(T,{align:"right"},{default:o(()=>[t(p).hasErrors?(f(),Q(d,{key:0,flat:"",label:"Clear Errors",color:"red",onClick:n[1]||(n[1]=l=>t(p).clearErrors())})):U("",!0),e(d,{flat:"",label:"Reset",color:"secondary",onClick:n[2]||(n[2]=l=>t(p).reset())}),e(d,{flat:"",type:"submit",label:"Submit",color:"primary",loading:t(p).processing},null,8,["loading"])]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1},8,["onHide"]))}}),Qe=k("div",{class:"text-h6"},"Edit RAB",-1),Pe={class:"q-gutter-md"},xe={class:"text-primary"},Be=A({__name:"RABEditDialog",props:{rab:{},options:{}},emits:[...B.emits],setup(h){const r=h,{dialogRef:i,onDialogOK:v,onDialogCancel:g,onDialogHide:m}=B(),b={id_proyek:r.rab.id_proyek,nama_proyek:r.rab.nama_proyek,tahun_anggaran:r.rab.tahun_anggaran};ie(()=>{r.options.proyek.push(b)});const C=F(r.options.proyek);function p(n,l){l(()=>{C.value=L(n,r.options.proyek,["nama_proyek","tahun_anggaran"])})}const s=H({id_rab:r.rab.id_rab,id_proyek:r.rab.id_proyek});function c(){s.patch(route("rab.update",r.rab.id_rab),{onSuccess:n=>{v({type:"positive",message:n.props.flash.success})}})}return(n,l)=>(f(),Q(E,{ref_key:"dialogRef",ref:i,"no-backdrop-dismiss":!0,onHide:t(m)},{default:o(()=>[e(j,{style:{width:"700px","max-width":"80vw"}},{default:o(()=>[e(x,{class:"row items-center q-pb-none"},{default:o(()=>[Qe,e(M),e(d,{flat:"",round:"",dense:"",icon:"close",onClick:t(g)},null,8,["onClick"])]),_:1}),e(P),e(z,{onSubmit:K(c,["prevent"])},{default:o(()=>[e(x,{class:"scroll"},{default:o(()=>[k("div",Pe,[e(q,{outlined:"",clearable:"","use-input":"","use-chips":"","emit-value":"","map-options":"","hide-bottom-space":"","input-debounce":"500",label:"Pilih Proyek",modelValue:t(s).id_proyek,"onUpdate:modelValue":l[0]||(l[0]=u=>t(s).id_proyek=u),"option-value":"id_proyek","option-label":u=>`${u.nama_proyek} | ${u.tahun_anggaran}`,options:C.value,error:!!t(s).errors.id_proyek,"error-message":t(s).errors.id_proyek,onFilter:p},{option:o(u=>[e(R,S(V(u.itemProps)),{default:o(()=>[e(w,null,{default:o(()=>[k("strong",xe,y(u.opt.nama_proyek),1),_(" "+y(u.opt.tahun_anggaran),1)]),_:2},1024)]),_:2},1040)]),"no-option":o(()=>[e(R,null,{default:o(()=>[e(w,{class:"text-grey"},{default:o(()=>[_(" No results ")]),_:1})]),_:1})]),_:1},8,["modelValue","option-label","options","error","error-message"])])]),_:1}),e(P),e(T,{align:"right"},{default:o(()=>[t(s).hasErrors?(f(),Q(d,{key:0,flat:"",label:"Clear Errors",color:"red",onClick:l[1]||(l[1]=u=>t(s).clearErrors())})):U("",!0),e(d,{flat:"",label:"Reset",color:"secondary",onClick:l[2]||(l[2]=u=>t(s).reset())}),e(d,{flat:"",type:"submit",label:"Update",color:"primary",loading:t(s).processing},null,8,["loading"])]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1},8,["onHide"]))}}),De=k("div",{class:"text-h6"},"Delete Confirmation",-1),Ae=k("span",{class:"q-ml-sm"},"Are you sure want to delete this data?",-1),Oe=A({__name:"RABDeleteDialog",props:{id_rab:{}},emits:[...B.emits],setup(h){const r=h,{dialogRef:i,onDialogOK:v,onDialogCancel:g,onDialogHide:m}=B(),b=H({id_rab:r.id_rab});function C(){b.delete(route("rab.destroy",r.id_rab),{onSuccess:p=>{v({type:"positive",message:p.props.flash.success})}})}return(p,s)=>(f(),Q(E,{ref_key:"dialogRef",ref:i,"no-backdrop-dismiss":!0,onHide:t(m)},{default:o(()=>[e(j,null,{default:o(()=>[e(x,{class:"row items-center q-pb-none"},{default:o(()=>[De]),_:1}),e(P),e(x,{class:"row items-center"},{default:o(()=>[e(ue,{icon:"dangerous",color:"red","text-color":"white"}),Ae]),_:1}),e(T,{align:"right"},{default:o(()=>[e(d,{flat:"",label:"Cancel",color:"primary",onClick:t(g)},null,8,["onClick"]),e(d,{flat:"",label:"Yes, delete it",color:"red",onClick:C})]),_:1})]),_:1})]),_:1},8,["onHide"]))}}),Ue=A({__name:"RABPage",props:{rab:{},formOptions:{}},setup(h){const r=[{label:"Main",url:"#"},{label:"RAB",url:"#"}];return(i,v)=>{const g=J("in-link");return f(),O(N,null,[e(t(de),{title:"RAB"}),e(te,null,{breadcrumbs:o(()=>[e(ae,{align:"left"},{default:o(()=>[(f(),O(N,null,Y(r,m=>Z(e(le,{label:m.label},null,8,["label"]),[[g,m.url]])),64))]),_:1})]),default:o(()=>[e(t(be),{rows:i.rab,"form-options":i.formOptions},null,8,["rows","form-options"])]),_:1})],64)}}});export{Ue as default};
