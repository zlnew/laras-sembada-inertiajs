import{l as R,b as E,_ as V,c as S}from"./AuthenticatedLayout.vue_vue_type_script_setup_true_lang-84cf796f.js";import{d as F,l as z,j as b,W as A,o as p,e as v,a as e,w as n,g as J,c as P,u as l,O as _,h as u,A as Q,b as o,F as T,k as N,t as d,i as m,z as M,m as I,Z as K,n as W}from"./app-456b7b81.js";import{Q as y}from"./QTooltip-5a592d07.js";import{a as O,b as i,c as Z,d as G}from"./QTable-777e4ca6.js";import{Q as H,_ as U}from"./ProyekDeleteDialog.vue_vue_type_script_setup_true_lang-10c56c26.js";import{c as X,e as Y,t as aa,b as ea}from"./LaporanPengajuanDanaSearchDialog.vue_vue_type_script_setup_true_lang-1b78c362.js";import{u as na}from"./use-quasar-53e0b1d3.js";import{t as x,a as B}from"./money-915f7772.js";import"./QImg-62f985a3.js";import"./use-dialog-plugin-component-b08011d3.js";import"./QForm-1fc4bb1a.js";import"./options-4b88285e.js";const la={class:"q-pa-md"},ta={class:"q-gutter-sm"},ra=F({__name:"LaporanPengajuanDanaTable",props:{rows:{},formOptions:{}},setup($){const f=$,g=z(()=>f.rows.map(t=>{const r=t.status_pengajuan==="400"?"Closed":"Open";return{...t,status:r}})),w=na();function h(t){w.dialog({component:U,componentProps:{proyek:t}})}function c(){w.dialog({component:ea,componentProps:{options:f.formOptions}})}const L=[{name:"index",label:"#",field:"index"},{name:"nama_proyek",label:"Nama Proyek",field:"nama_proyek",align:"left",sortable:!0},{name:"tahun_anggaran",label:"Tahun Anggaran",field:"tahun_anggaran",align:"left",sortable:!0},{name:"keperluan",label:"Keperluan",field:"keperluan",align:"left",sortable:!0},{name:"jenis_transaksi",label:"Jenis Transaksi",field:"jenis_transaksi",align:"left",sortable:!0},{name:"nilai_pengajuan",label:"Nilai Pengajuan Dana",field:"nilai_pengajuan",align:"right",sortable:!0},{name:"jumlah_disetujui",label:"Disetujui",field:"jumlah_disetujui",align:"right",sortable:!0},{name:"status",label:"Status",field:"status_pengajuan",align:"left",sortable:!0}],k=b(!1);function q(){k.value=!k.value}const j=b(),C=b(),D=b();return A(()=>{var t,r,a;C.value={columns:(t=j.value)==null?void 0:t.columns,body:{rows:(r=j.value)==null?void 0:r.computedRows,props:["index","nama_proyek","tahun_anggaran","keperluan","jenis_transaksi","nilai_pengajuan","jumlah_disetujui","status"]}},D.value=X({rows:(a=j.value)==null?void 0:a.computedRows,props:["nama_proyek","tahun_anggaran","keperluan","jenis_transaksi","nilai_pengajuan","jumlah_disetujui","status"]})}),(t,r)=>(p(),v("div",la,[e(l(Z),{ref_key:"table",ref:j,flat:"",bordered:"","row-key":"id_rab",title:"Laporan Pengajuan Transaksi",rows:g.value,columns:L,"rows-per-page-options":[10,15,20,25,50,0],fullscreen:k.value},{"top-right":n(()=>[J("div",ta,[Object.keys(t.$page.props.query).length?(p(),P(u,{key:0,flat:"","no-caps":"",label:"Clear Filter",icon:"clear",color:"secondary",onClick:r[0]||(r[0]=a=>l(_).visit(t.route("laporan.pengajuan_dana")))})):Q("",!0),e(u,{flat:"","no-caps":"",label:"Pencarian",icon:"search",color:"primary",onClick:c}),e(u,{flat:"",dense:"",label:"xls",color:"green",onClick:r[1]||(r[1]=a=>l(Y)().exportDataFromJSON({data:D.value,name:"pengajuan-dana",type:"xls"}))},{default:n(()=>[e(y,null,{default:n(()=>[o("Export to xls")]),_:1})]),_:1}),e(u,{flat:"",dense:"",label:"pdf",color:"red-8",onClick:r[2]||(r[2]=a=>l(aa)({filename:"pengajuan_dana",header:"Pengajuan Dana",columns:C.value.columns,body:C.value.body}))},{default:n(()=>[e(y,null,{default:n(()=>[o("Export to pdf")]),_:1})]),_:1}),e(u,{flat:"",dense:"",icon:k.value?"fullscreen_exit":"fullscreen",onClick:q,class:"q-ml-md"},null,8,["icon"])])]),header:n(a=>[e(O,{props:a},{default:n(()=>[(p(!0),v(T,null,N(a.cols,s=>(p(),P(G,{key:s.name,props:a,style:{"font-weight":"bold"}},{default:n(()=>[o(d(s.label),1)]),_:2},1032,["props"]))),128))]),_:2},1032,["props"])]),body:n(a=>[e(O,{props:a},{default:n(()=>[e(i,{key:"index",props:a},{default:n(()=>[o(d(++a.rowIndex),1)]),_:2},1032,["props"]),e(i,{key:"nama_proyek",props:a},{default:n(()=>[e(u,{flat:"","no-caps":"",dense:"",color:"primary",ripple:!1,label:a.row.nama_proyek,onClick:s=>h(a.row)},{default:n(()=>[e(y,{anchor:"bottom middle",self:"top middle"},{default:n(()=>[o(" Lihat Detail ")]),_:1})]),_:2},1032,["label","onClick"])]),_:2},1032,["props"]),e(i,{key:"tahun_anggaran",props:a,onClick:m(s=>l(_).visit(t.route("detail_pengajuan_dana",a.row.id_pengajuan_dana)),["prevent"]),style:{cursor:"pointer"}},{default:n(()=>[o(d(a.row.tahun_anggaran),1)]),_:2},1032,["props","onClick"]),e(i,{key:"keperluan",props:a,onClick:m(s=>l(_).visit(t.route("detail_pengajuan_dana",a.row.id_pengajuan_dana)),["prevent"]),style:{cursor:"pointer"}},{default:n(()=>[o(d(a.row.keperluan),1)]),_:2},1032,["props","onClick"]),e(i,{key:"jenis_transaksi",props:a,onClick:m(s=>l(_).visit(t.route("detail_pengajuan_dana",a.row.id_pengajuan_dana)),["prevent"]),style:{cursor:"pointer"}},{default:n(()=>[o(d(a.row.jenis_transaksi),1)]),_:2},1032,["props","onClick"]),e(i,{key:"nilai_pengajuan",props:a,onClick:m(s=>l(_).visit(t.route("detail_pengajuan_dana",a.row.id_pengajuan_dana)),["prevent"]),style:{cursor:"pointer"}},{default:n(()=>[o(d(l(x)(l(B)(a.row.nilai_pengajuan))),1)]),_:2},1032,["props","onClick"]),e(i,{key:"jumlah_disetujui",props:a,onClick:m(s=>l(_).visit(t.route("detail_pengajuan_dana",a.row.id_pengajuan_dana)),["prevent"]),style:{cursor:"pointer"}},{default:n(()=>[o(d(l(x)(l(B)(a.row.jumlah_disetujui))),1)]),_:2},1032,["props","onClick"]),e(i,{key:"status",props:a},{default:n(()=>[l(R)(a.row.status_aktivitas)?(p(),P(u,{key:0,flat:"",dense:"",round:"",color:"grey-6",icon:"warning",size:"sm"},{default:n(()=>[e(y,null,{default:n(()=>[o("Ditolak")]),_:1})]),_:1})):Q("",!0),e(l(M),{href:t.route("detail_pengajuan_dana",a.row.id_pengajuan_dana)},{default:n(()=>[e(H,{color:a.row.status_pengajuan==400?"red":"primary",label:a.row.status_pengajuan==400?"Closed":"Open"},null,8,["color","label"])]),_:2},1032,["href"])]),_:2},1032,["props"])]),_:2},1032,["props"])]),_:1},8,["rows","fullscreen"])]))}}),ja=F({__name:"LaporanPengajuanDanaPage",props:{pengajuanDana:{},formOptions:{}},setup($){const f=[{label:"Reports",url:"#"},{label:"Pengajuan Transaksi",url:"#"}];return(g,w)=>{const h=I("in-link");return p(),v(T,null,[e(l(K),{title:"Laporan Pengajuan Transaksi"}),e(V,null,{breadcrumbs:n(()=>[e(E,{align:"left"},{default:n(()=>[(p(),v(T,null,N(f,c=>W(e(S,{key:c.label,label:c.label},null,8,["label"]),[[h,c.url]])),64))]),_:1})]),default:n(()=>[e(l(ra),{rows:g.pengajuanDana,"form-options":g.formOptions},null,8,["rows","form-options"])]),_:1})],64)}}});export{ja as default};
