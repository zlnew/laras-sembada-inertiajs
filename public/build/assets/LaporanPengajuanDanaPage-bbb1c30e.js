import{l as L,b as q,_ as R,c as E}from"./AuthenticatedLayout.vue_vue_type_script_setup_true_lang-9d306835.js";import{d as $,l as V,j as g,W as S,o as p,e as b,a as e,w as n,g as z,c as v,u as l,O as A,h as u,A as C,b as s,F as P,k as B,t as i,z as J,m as I,Z as K,n as M}from"./app-1e8a9b5f.js";import{Q as k}from"./QTooltip-82b68aed.js";import{a as D,b as o,c as W,d as Z}from"./QTable-2bde6741.js";import{Q as G,_ as H}from"./ProyekDeleteDialog.vue_vue_type_script_setup_true_lang-d49c8ba4.js";import{c as U,e as X,t as Y,b as aa}from"./LaporanPengajuanDanaSearchDialog.vue_vue_type_script_setup_true_lang-df2328b1.js";import{u as ea}from"./use-quasar-254a32fc.js";import{t as Q,a as O}from"./money-915f7772.js";import"./QImg-678f09c2.js";import"./use-dialog-plugin-component-3afc8619.js";import"./QForm-b5dff3de.js";import"./options-4b88285e.js";const na={class:"q-pa-md"},la={class:"q-gutter-sm"},ta=$({__name:"LaporanPengajuanDanaTable",props:{rows:{},formOptions:{}},setup(T){const m=T,f=V(()=>m.rows.map(t=>{const r=t.status_pengajuan==="400"?"Closed":"Open";return{...t,status:r}})),j=ea();function y(t){j.dialog({component:H,componentProps:{proyek:t}})}function d(){j.dialog({component:aa,componentProps:{options:m.formOptions}})}const F=[{name:"index",label:"#",field:"index"},{name:"nama_proyek",label:"Nama Proyek",field:"nama_proyek",align:"left",sortable:!0},{name:"tahun_anggaran",label:"Tahun Anggaran",field:"tahun_anggaran",align:"left",sortable:!0},{name:"keperluan",label:"Keperluan",field:"keperluan",align:"left",sortable:!0},{name:"jenis_transaksi",label:"Jenis Transaksi",field:"jenis_transaksi",align:"left",sortable:!0},{name:"nilai_pengajuan",label:"Nilai Pengajuan Dana",field:"nilai_pengajuan",align:"right",sortable:!0},{name:"jumlah_disetujui",label:"Disetujui",field:"jumlah_disetujui",align:"right",sortable:!0},{name:"status",label:"Status",field:"status_pengajuan",align:"left",sortable:!0}],c=g(!1);function N(){c.value=!c.value}const _=g(),h=g(),x=g();return S(()=>{var t,r,a;h.value={columns:(t=_.value)==null?void 0:t.columns,body:{rows:(r=_.value)==null?void 0:r.computedRows,props:["index","nama_proyek","tahun_anggaran","keperluan","jenis_transaksi","nilai_pengajuan","jumlah_disetujui","status"]}},x.value=U({rows:(a=_.value)==null?void 0:a.computedRows,props:["nama_proyek","tahun_anggaran","keperluan","jenis_transaksi","nilai_pengajuan","jumlah_disetujui","status"]})}),(t,r)=>(p(),b("div",na,[e(l(W),{ref_key:"table",ref:_,flat:"",bordered:"","row-key":"id_rab",title:"Laporan Pengajuan Transaksi",rows:f.value,columns:F,"rows-per-page-options":[10,15,20,25,50,0],fullscreen:c.value},{"top-right":n(()=>[z("div",la,[Object.keys(t.$page.props.query).length?(p(),v(u,{key:0,flat:"","no-caps":"",label:"Clear Filter",icon:"clear",color:"secondary",onClick:r[0]||(r[0]=a=>l(A).visit(t.route("laporan.pengajuan_dana")))})):C("",!0),e(u,{flat:"","no-caps":"",label:"Pencarian",icon:"search",color:"primary",onClick:d}),e(u,{flat:"",dense:"",label:"xls",color:"green",onClick:r[1]||(r[1]=a=>l(X)().exportDataFromJSON({data:x.value,name:"pengajuan-dana",type:"xls"}))},{default:n(()=>[e(k,null,{default:n(()=>[s("Export to xls")]),_:1})]),_:1}),e(u,{flat:"",dense:"",label:"pdf",color:"red-8",onClick:r[2]||(r[2]=a=>l(Y)({filename:"pengajuan_dana",header:"Pengajuan Dana",columns:h.value.columns,body:h.value.body}))},{default:n(()=>[e(k,null,{default:n(()=>[s("Export to pdf")]),_:1})]),_:1}),e(u,{flat:"",dense:"",icon:c.value?"fullscreen_exit":"fullscreen",onClick:N,class:"q-ml-md"},null,8,["icon"])])]),header:n(a=>[e(D,{props:a},{default:n(()=>[(p(!0),b(P,null,B(a.cols,w=>(p(),v(Z,{key:w.name,props:a,style:{"font-weight":"bold"}},{default:n(()=>[s(i(w.label),1)]),_:2},1032,["props"]))),128))]),_:2},1032,["props"])]),body:n(a=>[e(D,{props:a},{default:n(()=>[e(o,{key:"index",props:a},{default:n(()=>[s(i(++a.rowIndex),1)]),_:2},1032,["props"]),e(o,{key:"nama_proyek",props:a},{default:n(()=>[e(u,{flat:"","no-caps":"",dense:"",color:"primary",ripple:!1,label:a.row.nama_proyek,onClick:w=>y(a.row)},{default:n(()=>[e(k,{anchor:"bottom middle",self:"top middle"},{default:n(()=>[s(" Lihat Detail ")]),_:1})]),_:2},1032,["label","onClick"])]),_:2},1032,["props"]),e(o,{key:"tahun_anggaran",props:a},{default:n(()=>[s(i(a.row.tahun_anggaran),1)]),_:2},1032,["props"]),e(o,{key:"keperluan",props:a},{default:n(()=>[s(i(a.row.keperluan),1)]),_:2},1032,["props"]),e(o,{key:"jenis_transaksi",props:a},{default:n(()=>[s(i(a.row.jenis_transaksi),1)]),_:2},1032,["props"]),e(o,{key:"nilai_pengajuan",props:a},{default:n(()=>[s(i(l(Q)(l(O)(a.row.nilai_pengajuan))),1)]),_:2},1032,["props"]),e(o,{key:"jumlah_disetujui",props:a},{default:n(()=>[s(i(l(Q)(l(O)(a.row.jumlah_disetujui))),1)]),_:2},1032,["props"]),e(o,{key:"status",props:a},{default:n(()=>[l(L)(a.row.status_aktivitas)?(p(),v(u,{key:0,flat:"",dense:"",round:"",color:"grey-6",icon:"warning",size:"sm"},{default:n(()=>[e(k,null,{default:n(()=>[s("Ditolak")]),_:1})]),_:1})):C("",!0),e(l(J),{href:t.route("detail_pengajuan_dana",a.row.id_pengajuan_dana)},{default:n(()=>[e(G,{color:a.row.status_pengajuan==400?"red":"primary",label:a.row.status_pengajuan==400?"Closed":"Open"},null,8,["color","label"])]),_:2},1032,["href"])]),_:2},1032,["props"])]),_:2},1032,["props"])]),_:1},8,["rows","fullscreen"])]))}}),ka=$({__name:"LaporanPengajuanDanaPage",props:{pengajuanDana:{},formOptions:{}},setup(T){const m=[{label:"Reports",url:"#"},{label:"Pengajuan Transaksi",url:"#"}];return(f,j)=>{const y=I("in-link");return p(),b(P,null,[e(l(K),{title:"Laporan Pengajuan Transaksi"}),e(R,null,{breadcrumbs:n(()=>[e(q,{align:"left"},{default:n(()=>[(p(),b(P,null,B(m,d=>M(e(E,{key:d.label,label:d.label},null,8,["label"]),[[y,d.url]])),64))]),_:1})]),default:n(()=>[e(l(ta),{rows:f.pengajuanDana,"form-options":f.formOptions},null,8,["rows","form-options"])]),_:1})],64)}}});export{ka as default};