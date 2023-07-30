import{b as W,c as X,d as V,e as w,Q as ee,_ as le,a as oe}from"./AuthenticatedLayout.vue_vue_type_script_setup_true_lang-da018ec7.js";import{d as S,t as E,o as p,e as q,a as e,w as l,h as u,c as h,u as o,ac as se,z as N,F as z,p as Y,b as y,x as $,g as v,k as x,K as ae,T as P,U as F,j as U,i as T,Q as C,ad as B,ae as A,f as re,l as O,m as H,V as te,n as ne,Z as ie,q as ue}from"./app-71b10028.js";import{u as de,Q as L,a as R,d as me,b as ce,c as pe,e as Q,f as K,g as I}from"./use-dialog-plugin-component-d7386d46.js";import{Q as J}from"./QForm-04ce2fd3.js";import{m as j}from"./options-964f32b0.js";import"./QImg-8a570513.js";import"./_plugin-vue_export-helper-c27b6911.js";const fe={class:"q-pa-md"},ge={class:"text-blue-grey-8"},be=S({__name:"UsersTable",props:{rows:{},roles:{}},setup(g){const n=g,i=de();function b(){i.dialog({component:ve,componentProps:{roles:n.roles}})}function f(){i.dialog({component:Ce,componentProps:{roles:n.roles}}).onOk(t=>{i.notify({type:t.type,message:t.message,position:"top"})})}function m(t){i.dialog({component:xe,componentProps:{user:t,roles:n.roles}}).onOk(r=>{i.notify({type:r.type,message:r.message,position:"top"})})}function c(t){i.dialog({component:De,componentProps:{id:t}}).onOk(r=>{i.notify({type:r.type,message:r.message,position:"top"})})}const k=[{name:"index",label:"#",field:"index"},{name:"name",label:"User",field:"name",align:"left",sortable:!0},{name:"role_name",label:"Role/Jabatan",field:"role_name",align:"left",sortable:!0},{name:"actions",label:"Actions",field:"",align:"left"}],s=E(!1);function _(){s.value=!s.value}return(t,r)=>(p(),q("div",fe,[e(ce,{flat:"",bordered:"","row-key":"id",rows:t.rows,columns:k,"rows-per-page-options":[5,10,15,20,25,50,0],fullscreen:s.value},{"top-left":l(()=>[e(u,{"no-caps":"",label:"Tambah User",icon:"add",color:"primary",onClick:f})]),"top-right":l(()=>[Object.keys(t.$page.props.query).length?(p(),h(u,{key:0,flat:"","no-caps":"",label:"Clear Filter",icon:"clear",color:"secondary",onClick:r[0]||(r[0]=a=>o(se).visit(t.route("users")))})):N("",!0),e(u,{flat:"","no-caps":"",label:"Pencarian",icon:"search",color:"primary",onClick:b}),e(u,{flat:"",dense:"",icon:s.value?"fullscreen_exit":"fullscreen",onClick:_,class:"q-ml-md"},null,8,["icon"])]),header:l(a=>[e(L,{props:a},{default:l(()=>[(p(!0),q(z,null,Y(a.cols,d=>(p(),h(pe,{key:d.name,props:a,style:{"font-weight":"bold"}},{default:l(()=>[y($(d.label),1)]),_:2},1032,["props"]))),128))]),_:2},1032,["props"])]),body:l(a=>[e(L,{props:a},{default:l(()=>[e(R,{key:"index",props:a},{default:l(()=>[y($(++a.rowIndex),1)]),_:2},1032,["props"]),e(R,{key:"name",props:a},{default:l(()=>[v("div",null,$(a.row.name),1),v("div",ge,$(a.row.email),1)]),_:2},1032,["props"]),e(R,{key:"role_name",props:a,class:"text-capitalize"},{default:l(()=>[e(me,{size:"sm",label:a.row.role_name,ripple:!1},null,8,["label"])]),_:2},1032,["props"]),e(R,{key:"actions",props:a},{default:l(()=>[e(u,{dense:"",flat:"",color:"blue-grey",icon:"more_vert"},{default:l(()=>[e(W,{"auto-close":"","transition-show":"scale","transition-hide":"scale"},{default:l(()=>[e(X,{dense:"",style:{"min-width":"100px"}},{default:l(()=>[e(V,{clickable:""},{default:l(()=>[e(w,{onClick:d=>m(a.row)},{default:l(()=>[y(" Edit ")]),_:2},1032,["onClick"])]),_:2},1024),e(x),e(V,{clickable:""},{default:l(()=>[e(w,{class:"text-red",onClick:d=>c(a.row.id)},{default:l(()=>[y(" Delete ")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1032,["props"])]),_:2},1032,["props"])]),_:1},8,["rows","fullscreen"])]))}}),_e=v("div",{class:"text-h6"},"Pencarian User",-1),ye={class:"q-gutter-md"},ve=S({__name:"UsersSearchDialog",props:{roles:{}},emits:[...Q.emits],setup(g){const n=g,{dialogRef:i,onDialogOK:b,onDialogCancel:f,onDialogHide:m}=Q(),c=E(n.roles);function k(a,d){d(()=>{c.value=j(a,n.roles,["name"])})}const _=ae().props.query,t=P({name:_.name,email:_.email,role:_.role});function r(){t.get(route("users"),{onSuccess:a=>{b({type:"positive",message:a.props.flash.success})}})}return(a,d)=>(p(),h(F,{ref_key:"dialogRef",ref:i,"no-backdrop-dismiss":!0,onHide:o(m)},{default:l(()=>[e(H,{style:{width:"700px","max-width":"80vw"}},{default:l(()=>[e(U,{class:"row items-center q-pb-none"},{default:l(()=>[_e,e(K),e(u,{flat:"",round:"",dense:"",icon:"close",onClick:o(f)},null,8,["onClick"])]),_:1}),e(x),e(J,{onSubmit:T(r,["prevent"])},{default:l(()=>[e(U,{class:"scroll"},{default:l(()=>[v("div",ye,[e(C,{outlined:"",clearable:"","hide-bottom-space":"",label:"Name",modelValue:o(t).name,"onUpdate:modelValue":d[0]||(d[0]=D=>o(t).name=D)},null,8,["modelValue"]),e(C,{outlined:"",clearable:"","hide-bottom-space":"",type:"email",label:"Email Address",modelValue:o(t).email,"onUpdate:modelValue":d[1]||(d[1]=D=>o(t).email=D)},null,8,["modelValue"]),e(I,{outlined:"",clearable:"","use-input":"","use-chips":"",multiple:"","emit-value":"","map-options":"","input-debounce":"500",label:"Role/Jabatan",modelValue:o(t).role,"onUpdate:modelValue":d[2]||(d[2]=D=>o(t).role=D),"option-value":"name","option-label":"name",options:c.value,onFilter:k,class:"text-capitalize"},{option:l(({itemProps:D,opt:M,selected:Z,toggleOption:G})=>[e(V,B(A(D)),{default:l(()=>[e(w,{side:""},{default:l(()=>[e(re,{size:"sm","model-value":Z,"onUpdate:modelValue":$e=>G(M)},null,8,["model-value","onUpdate:modelValue"])]),_:2},1024),e(w,{class:"text-capitalize"},{default:l(()=>[y($(M.name),1)]),_:2},1024)]),_:2},1040)]),"no-option":l(()=>[e(V,null,{default:l(()=>[e(w,{class:"text-grey"},{default:l(()=>[y(" No results ")]),_:1})]),_:1})]),_:1},8,["modelValue","options"])])]),_:1}),e(x),e(O,{align:"right"},{default:l(()=>[e(u,{flat:"",type:"submit",label:"Search",color:"primary",loading:o(t).processing},null,8,["loading"])]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1},8,["onHide"]))}}),ke=v("div",{class:"text-h6"},"Tambah User Baru",-1),we={class:"q-gutter-md"},Ce=S({__name:"UsersCreateDialog",props:{roles:{}},emits:[...Q.emits],setup(g){const n=g,{dialogRef:i,onDialogOK:b,onDialogCancel:f,onDialogHide:m}=Q(),c=E(n.roles);function k(t,r){r(()=>{c.value=j(t,n.roles,["name"])})}const s=P({name:null,email:null,password:null,role:null});function _(){s.post(route("users.store"),{onSuccess:t=>{b({type:"positive",message:t.props.flash.success})}})}return(t,r)=>(p(),h(F,{ref_key:"dialogRef",ref:i,"no-backdrop-dismiss":!0,onHide:o(m)},{default:l(()=>[e(H,{style:{width:"700px","max-width":"80vw"}},{default:l(()=>[e(U,{class:"row items-center q-pb-none"},{default:l(()=>[ke,e(K),e(u,{flat:"",round:"",dense:"",icon:"close",onClick:o(f)},null,8,["onClick"])]),_:1}),e(x),e(J,{onSubmit:T(_,["prevent"])},{default:l(()=>[e(U,{class:"scroll"},{default:l(()=>[v("div",we,[e(C,{outlined:"","hide-bottom-space":"","clear-icon":"close",label:"Name",modelValue:o(s).name,"onUpdate:modelValue":r[0]||(r[0]=a=>o(s).name=a),error:!!o(s).errors.name,"error-message":o(s).errors.name},null,8,["modelValue","error","error-message"]),e(C,{outlined:"","hide-bottom-space":"",type:"email","clear-icon":"close",label:"Email Address",modelValue:o(s).email,"onUpdate:modelValue":r[1]||(r[1]=a=>o(s).email=a),error:!!o(s).errors.email,"error-message":o(s).errors.email},null,8,["modelValue","error","error-message"]),e(C,{outlined:"","hide-bottom-space":"",type:"password","clear-icon":"close",label:"Password",modelValue:o(s).password,"onUpdate:modelValue":r[2]||(r[2]=a=>o(s).password=a),hint:"Default: 'password', jika tidak diisi.",error:!!o(s).errors.password,"error-message":o(s).errors.password},null,8,["modelValue","error","error-message"]),e(I,{outlined:"",clearable:"","use-input":"","use-chips":"","emit-value":"","input-debounce":"500",label:"Role/Jabatan",modelValue:o(s).role,"onUpdate:modelValue":r[3]||(r[3]=a=>o(s).role=a),"option-value":"name","option-label":"name",options:c.value,error:!!o(s).errors.role,"error-message":o(s).errors.role,onFilter:k,class:"text-capitalize"},{option:l(a=>[e(V,B(A(a.itemProps)),{default:l(()=>[e(w,{class:"text-capitalize"},{default:l(()=>[y($(a.opt.name),1)]),_:2},1024)]),_:2},1040)]),"no-option":l(()=>[e(V,null,{default:l(()=>[e(w,{class:"text-grey"},{default:l(()=>[y(" No results ")]),_:1})]),_:1})]),_:1},8,["modelValue","options","error","error-message"])])]),_:1}),e(x),e(O,{align:"right"},{default:l(()=>[o(s).hasErrors?(p(),h(u,{key:0,flat:"",label:"Clear Errors",color:"red",onClick:r[4]||(r[4]=a=>o(s).clearErrors())})):N("",!0),e(u,{flat:"",label:"Reset",color:"secondary",onClick:r[5]||(r[5]=a=>o(s).reset())}),e(u,{flat:"",type:"submit",label:"Submit",color:"primary",loading:o(s).processing},null,8,["loading"])]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1},8,["onHide"]))}}),Ve=v("div",{class:"text-h6"},"Edit User",-1),he={class:"q-gutter-md"},xe=S({__name:"UsersEditDialog",props:{user:{},roles:{}},emits:[...Q.emits],setup(g){const n=g,{dialogRef:i,onDialogOK:b,onDialogCancel:f,onDialogHide:m}=Q(),c=E(n.roles);function k(t,r){r(()=>{c.value=j(t,n.roles,["name"])})}const s=P({id:n.user.id,name:n.user.name,email:n.user.email,password:null,role:n.user.role_name});function _(){s.patch(route("users.update",n.user.id),{onSuccess:t=>{b({type:"positive",message:t.props.flash.success})}})}return(t,r)=>(p(),h(F,{ref_key:"dialogRef",ref:i,"no-backdrop-dismiss":!0,onHide:o(m)},{default:l(()=>[e(H,{style:{width:"700px","max-width":"80vw"}},{default:l(()=>[e(U,{class:"row items-center q-pb-none"},{default:l(()=>[Ve,e(K),e(u,{flat:"",round:"",dense:"",icon:"close",onClick:o(f)},null,8,["onClick"])]),_:1}),e(x),e(J,{onSubmit:T(_,["prevent"])},{default:l(()=>[e(U,{class:"scroll"},{default:l(()=>[v("div",he,[e(C,{outlined:"","hide-bottom-space":"","clear-icon":"close",label:"Name",modelValue:o(s).name,"onUpdate:modelValue":r[0]||(r[0]=a=>o(s).name=a),error:!!o(s).errors.name,"error-message":o(s).errors.name},null,8,["modelValue","error","error-message"]),e(C,{outlined:"","hide-bottom-space":"",type:"email","clear-icon":"close",label:"Email Address",modelValue:o(s).email,"onUpdate:modelValue":r[1]||(r[1]=a=>o(s).email=a),error:!!o(s).errors.email,"error-message":o(s).errors.email},null,8,["modelValue","error","error-message"]),e(C,{outlined:"","hide-bottom-space":"",type:"password","clear-icon":"close",label:"Password",modelValue:o(s).password,"onUpdate:modelValue":r[2]||(r[2]=a=>o(s).password=a),error:!!o(s).errors.password,"error-message":o(s).errors.password},null,8,["modelValue","error","error-message"]),e(I,{outlined:"",clearable:"","use-input":"","use-chips":"","emit-value":"","input-debounce":"500",label:"Role/Jabatan",modelValue:o(s).role,"onUpdate:modelValue":r[3]||(r[3]=a=>o(s).role=a),"option-value":"name","option-label":"name",options:c.value,error:!!o(s).errors.role,"error-message":o(s).errors.role,onFilter:k,class:"text-capitalize"},{option:l(a=>[e(V,B(A(a.itemProps)),{default:l(()=>[e(w,{class:"text-capitalize"},{default:l(()=>[y($(a.opt.name),1)]),_:2},1024)]),_:2},1040)]),"no-option":l(()=>[e(V,null,{default:l(()=>[e(w,{class:"text-grey"},{default:l(()=>[y(" No results ")]),_:1})]),_:1})]),_:1},8,["modelValue","options","error","error-message"])])]),_:1}),e(x),e(O,{align:"right"},{default:l(()=>[o(s).hasErrors?(p(),h(u,{key:0,flat:"",label:"Clear Errors",color:"red",onClick:r[4]||(r[4]=a=>o(s).clearErrors())})):N("",!0),e(u,{flat:"",label:"Reset",color:"secondary",onClick:r[5]||(r[5]=a=>o(s).reset())}),e(u,{flat:"",type:"submit",label:"Update",color:"primary",loading:o(s).processing},null,8,["loading"])]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1},8,["onHide"]))}}),Ue=v("div",{class:"text-h6"},"Delete Confirmation",-1),Qe=v("span",{class:"q-ml-sm"},"Are you sure want to delete this data?",-1),De=S({__name:"UsersDeleteDialog",props:{id:{}},emits:[...Q.emits],setup(g){const n=g,{dialogRef:i,onDialogOK:b,onDialogCancel:f,onDialogHide:m}=Q(),c=P({id:n.id});function k(){c.delete(route("users.destroy",n.id),{onSuccess:s=>{b({type:"positive",message:s.props.flash.success})}})}return(s,_)=>(p(),h(F,{ref_key:"dialogRef",ref:i,"no-backdrop-dismiss":!0,onHide:o(m)},{default:l(()=>[e(H,null,{default:l(()=>[e(U,{class:"row items-center q-pb-none"},{default:l(()=>[Ue]),_:1}),e(x),e(U,{class:"row items-center"},{default:l(()=>[e(te,{icon:"dangerous",color:"red","text-color":"white"}),Qe]),_:1}),e(O,{align:"right"},{default:l(()=>[e(u,{flat:"",label:"Cancel",color:"primary",onClick:o(f)},null,8,["onClick"]),e(u,{flat:"",label:"Yes, delete it",color:"red",onClick:k})]),_:1})]),_:1})]),_:1},8,["onHide"]))}}),He=S({__name:"UsersPage",props:{users:{},roles:{}},setup(g){const n=[{label:"Master",url:"#"},{label:"Users",url:"#"}];return(i,b)=>{const f=ne("in-link");return p(),q(z,null,[e(o(ie),{title:"Users"}),e(le,null,{breadcrumbs:l(()=>[e(ee,{align:"left"},{default:l(()=>[(p(),q(z,null,Y(n,m=>ue(e(oe,{label:m.label},null,8,["label"]),[[f,m.url]])),64))]),_:1})]),default:l(()=>[e(o(be),{rows:i.users,roles:i.roles},null,8,["rows","roles"])]),_:1})],64)}}});export{He as default};
