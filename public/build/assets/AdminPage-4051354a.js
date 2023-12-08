import{Q as O,a as U,b as L,_ as V,c as Z}from"./AuthenticatedLayout.vue_vue_type_script_setup_true_lang-b69e3ed2.js";import{d as F,j as h,K as z,o as g,c as T,w as e,g as S,a,b as n,e as C,k as A,F as R,t as s,u as t,O as B,l as I,h as j,m as Q,n as G,Z as H,p as W}from"./app-a9c22e82.js";import{t as b,a as c}from"./money-915f7772.js";import{_ as X}from"./DashboardOverview.vue_vue_type_script_setup_true_lang-612445b2.js";import{Q as Y,a as v,b as u,c as K,d as q}from"./QTable-0e41b0f2.js";import{f as ee}from"./options-4b88285e.js";import{Q as $}from"./datetime-dc60c162.js";import{u as N}from"./use-quasar-954ed4d5.js";import{_ as ae,a as le,b as ne}from"./PenarikanFilterDialog.vue_vue_type_script_setup_true_lang-e3cbf025.js";import{c as E,e as M,t as J}from"./pdf-4d5b7e28.js";import{_ as oe}from"./PiutangFilterDialog.vue_vue_type_script_setup_true_lang-4a7fedf5.js";import"./QImg-b742b038.js";import"./use-dialog-plugin-component-646efe56.js";import"./QForm-332245d0.js";const te={class:"row items-center q-col-gutter-sm"},re=S("div",{class:"text-caption"},"Filter by",-1),se=F({__name:"ProyekTable",props:{rows:{},options:{}},setup(D){const P=D,w=[{name:"index",label:"#",field:"index"},{name:"proyek",label:"Proyek",field:"nama_proyek",align:"left",sortable:!0},{name:"penyedia_jasa",label:"Penyedia Jasa",field:"penyedia_jasa",align:"left",sortable:!0},{name:"nilai_kontrak",label:"Nilai Kontrak",field:"nilai_kontrak",align:"right",sortable:!0},{name:"rap",label:"RAP",field:"rap",align:"right",sortable:!0},{name:"pengajuan_sebelumnya",label:"Pengajuan Sebelumnya",field:"pengajuan_sebelumnya",align:"right",sortable:!0},{name:"pengajuan_dalam_proses",label:"Pengajuan Dalam Proses",field:"pengajuan_dalam_proses",align:"right",sortable:!0},{name:"total_pengajuan",label:"Total Pengajuan",field:"total_pengajuan",align:"right",sortable:!0},{name:"sisa_anggaran",label:"Sisa Anggaran",field:"sisa_anggaran",align:"right",sortable:!0},{name:"estimasi_laba",label:"Estimasi Laba",field:"estimasi_laba",align:"right",sortable:!0}],k=h(P.options.tahunAnggaran);function _(p,d){d(()=>{k.value=ee(p,P.options.tahunAnggaran)})}const f=z().props.query,y=h(f.tahun_anggaran);function i(p){B.get(route("dashboard.admin",{proyek_query:"true",proyek_tahun_anggaran:p}),void 0,{preserveScroll:!0,preserveState:!0})}return(p,d)=>(g(),T(K,{flat:"",bordered:"",title:"Proyek Aktif",rows:p.rows,columns:w,"row-key":"id_proyek"},{"top-right":e(()=>[S("div",te,[re,a(Y,{dense:"",filled:"","use-input":"","input-debounce":"500",label:"Tahun Anggaran",modelValue:y.value,"onUpdate:modelValue":[d[0]||(d[0]=o=>y.value=o),i],options:k.value,onFilter:_},{"no-option":e(()=>[a(O,null,{default:e(()=>[a(U,{class:"text-grey"},{default:e(()=>[n(" No results ")]),_:1})]),_:1})]),_:1},8,["modelValue","options"])])]),header:e(o=>[a(v,{props:o},{default:e(()=>[(g(!0),C(R,null,A(o.cols,r=>(g(),T(q,{key:r.name,props:o,style:{"font-weight":"bold"}},{default:e(()=>[n(s(r.label),1)]),_:2},1032,["props"]))),128))]),_:2},1032,["props"])]),body:e(o=>[a(v,{props:o},{default:e(()=>[a(u,{key:"index",props:o},{default:e(()=>[n(s(++o.rowIndex),1)]),_:2},1032,["props"]),a(u,{key:"proyek",props:o},{default:e(()=>[n(s(o.row.nama_proyek),1)]),_:2},1032,["props"]),a(u,{key:"penyedia_jasa",props:o},{default:e(()=>[n(s(o.row.penyedia_jasa),1)]),_:2},1032,["props"]),a(u,{key:"nilai_kontrak",props:o},{default:e(()=>[n(s(t(b)(t(c)(o.row.nilai_kontrak))),1)]),_:2},1032,["props"]),a(u,{key:"rap",props:o},{default:e(()=>[n(s(t(b)(t(c)(o.row.rap))),1)]),_:2},1032,["props"]),a(u,{key:"pengajuan_sebelumnya",props:o},{default:e(()=>[n(s(t(b)(t(c)(o.row.pengajuan_sebelumnya))),1)]),_:2},1032,["props"]),a(u,{key:"pengajuan_dalam_proses",props:o},{default:e(()=>[n(s(t(b)(t(c)(o.row.pengajuan_dalam_proses))),1)]),_:2},1032,["props"]),a(u,{key:"total_pengajuan",props:o},{default:e(()=>[n(s(t(b)(t(c)(o.row.total_pengajuan))),1)]),_:2},1032,["props"]),a(u,{key:"sisa_anggaran",props:o},{default:e(()=>[n(s(t(b)(t(c)(o.row.sisa_anggaran))),1)]),_:2},1032,["props"]),a(u,{key:"estimasi_laba",props:o},{default:e(()=>[n(s(t(b)(t(c)(o.row.estimasi_laba)))+" ("+s(t(c)(o.row.persentase_laba).toFixed(2))+" %) ",1)]),_:2},1032,["props"])]),_:2},1032,["props"])]),_:1},8,["rows"]))}}),ue=F({__name:"SisaDanaRekeningTable",props:{rows:{}},setup(D){const P=D,w=I(()=>P.rows.map(i=>{const p=c(i.nilai_kontrak),d=c(i.total_pengajuan_dana),o=c(i.total_pencairan_dana)+c(i.total_penagihan_diterima);return{...i,sisa_dana:p+d-o}})),k=[{name:"index",label:"#",field:"index"},{name:"rekening",label:"Rekening",field:"nama_rekening",align:"left",sortable:!0},{name:"sisa_dana",label:"Sisa Dana",field:"",align:"right",sortable:!0}],_=h(!1);function m(){_.value=!_.value}const f=h(),y=I(()=>{var p;return{sisaDana:(p=f.value)==null?void 0:p.computedRows.reduce((d,o)=>d+c(o.sisa_dana),0)}});return(i,p)=>(g(),T(t(K),{ref_key:"table",ref:f,flat:"",bordered:"",title:"Sisa Dana Rekening",fullscreen:_.value,rows:w.value,columns:k,"row-key":"id_rekening",class:"table"},{"top-right":e(()=>[a(j,{flat:"",dense:"",icon:_.value?"fullscreen_exit":"fullscreen",onClick:m,class:"q-ml-md"},null,8,["icon"])]),header:e(d=>[a(v,{props:d},{default:e(()=>[(g(!0),C(R,null,A(d.cols,o=>(g(),T(q,{key:o.name,props:d,style:{"font-weight":"bold"}},{default:e(()=>[n(s(o.label),1)]),_:2},1032,["props"]))),128))]),_:2},1032,["props"])]),body:e(d=>[a(v,{props:d},{default:e(()=>[a(u,{key:"index",props:d},{default:e(()=>[n(s(++d.rowIndex),1)]),_:2},1032,["props"]),a(u,{key:"rekening",props:d},{default:e(()=>[n(s(d.row.nama_rekening),1)]),_:2},1032,["props"]),a(u,{key:"sisa_dana",props:d},{default:e(()=>[n(s(t(b)(d.row.sisa_dana)),1)]),_:2},1032,["props"])]),_:2},1032,["props"])]),"bottom-row":e(()=>[a(v,{"no-hover":"",class:"text-weight-bold text-right"},{default:e(()=>[a(u,{colspan:"2"},{default:e(()=>[n("Total Sisa Dana")]),_:1}),a(u,null,{default:e(()=>[n(s(t(b)(y.value.sisaDana)),1)]),_:1})]),_:1})]),_:1},8,["fullscreen","rows"]))}});const ie=F({__name:"ProyeksiInvoiceProyekTable",props:{rows:{}},setup(D){const P=[{name:"index",label:"#",field:"index"},{name:"proyek",label:"Proyek",field:"nama_proyek",align:"left",sortable:!0},{name:"invoice_sebelumnya",label:"Invoice Sebelumnya",field:"invoice_sebelumnya",align:"right",sortable:!0},{name:"invoice_saat_ini",label:"Invoice Saat Ini",field:"invoice_saat_ini",align:"right",sortable:!0},{name:"sisa_netto_kontrak",label:"Sisa Netto Kontrak",field:"sisa_netto_kontrak",align:"right",sortable:!0}],w=h(!1);function k(){w.value=!w.value}const _=h(),m=I(()=>{var p,d,o;const f=(p=_.value)==null?void 0:p.computedRows.reduce((r,l)=>r+c(l.invoice_sebelumnya),0),y=(d=_.value)==null?void 0:d.computedRows.reduce((r,l)=>r+c(l.invoice_saat_ini),0),i=(o=_.value)==null?void 0:o.computedRows.reduce((r,l)=>r+c(l.sisa_netto_kontrak),0);return{invoiceSebelumnya:f,invoiceSaatIni:y,sisaNettoKontrak:i}});return(f,y)=>(g(),T(t(K),{ref_key:"table",ref:_,flat:"",bordered:"",title:"Proyeksi Invoice Proyek",fullscreen:w.value,rows:f.rows,columns:P,"row-key":"id_proyek",class:"table"},{"top-right":e(()=>[a(j,{flat:"",dense:"",icon:w.value?"fullscreen_exit":"fullscreen",onClick:k,class:"q-ml-md"},null,8,["icon"])]),header:e(i=>[a(v,{props:i},{default:e(()=>[(g(!0),C(R,null,A(i.cols,p=>(g(),T(q,{key:p.name,props:i,style:{"font-weight":"bold"}},{default:e(()=>[n(s(p.label),1)]),_:2},1032,["props"]))),128))]),_:2},1032,["props"])]),body:e(i=>[a(v,{props:i},{default:e(()=>[a(u,{key:"index",props:i},{default:e(()=>[n(s(++i.rowIndex),1)]),_:2},1032,["props"]),a(u,{key:"proyek",props:i},{default:e(()=>[n(s(i.row.nama_proyek),1)]),_:2},1032,["props"]),a(u,{key:"invoice_sebelumnya",props:i},{default:e(()=>[n(s(t(b)(t(c)(i.row.invoice_sebelumnya))),1)]),_:2},1032,["props"]),a(u,{key:"invoice_saat_ini",props:i},{default:e(()=>[n(s(t(b)(t(c)(i.row.invoice_saat_ini))),1)]),_:2},1032,["props"]),a(u,{key:"sisa_netto_kontrak",props:i},{default:e(()=>[n(s(t(b)(t(c)(i.row.sisa_netto_kontrak))),1)]),_:2},1032,["props"])]),_:2},1032,["props"])]),"bottom-row":e(()=>[a(v,{"no-hover":"",class:"text-weight-bold text-right"},{default:e(()=>[a(u,{colspan:"4"},{default:e(()=>[n("Total Invoice Sebelumnya")]),_:1}),a(u,null,{default:e(()=>[n(s(t(b)(m.value.invoiceSebelumnya)),1)]),_:1})]),_:1}),a(v,{"no-hover":"",class:"text-weight-bold text-right"},{default:e(()=>[a(u,{colspan:"4"},{default:e(()=>[n("Total Invoice Saat Ini")]),_:1}),a(u,null,{default:e(()=>[n(s(t(b)(m.value.invoiceSaatIni)),1)]),_:1})]),_:1}),a(v,{"no-hover":"",class:"text-weight-bold text-right"},{default:e(()=>[a(u,{colspan:"4"},{default:e(()=>[n("Total Sisa Netto Kontrak")]),_:1}),a(u,null,{default:e(()=>[n(s(t(b)(m.value.sisaNettoKontrak)),1)]),_:1})]),_:1})]),_:1},8,["fullscreen","rows"]))}});const de=F({__name:"ProyeksiKebutuhanDanaProyekTable",props:{rows:{}},setup(D){const P=[{name:"index",label:"#",field:"index"},{name:"proyek",label:"Proyek",field:"nama_proyek",align:"left",sortable:!0},{name:"total_pengajuan",label:"Total Pengajuan",field:"total_pengajuan",align:"left",sortable:!0},{name:"jumlah_belum_dibayar",label:"Jumlah Belum Dibayar",field:"jumlah_belum_dibayar",align:"right",sortable:!0}],w=h(!1);function k(){w.value=!w.value}const _=h(),m=I(()=>{var y;return{jumlahBelumDibayar:(y=_.value)==null?void 0:y.computedRows.reduce((i,p)=>i+c(p.jumlah_belum_dibayar),0)}});return(f,y)=>(g(),T(t(K),{ref_key:"table",ref:_,flat:"",bordered:"",title:"Proyeksi Kebutuhan Dana Proyek",fullscreen:w.value,rows:f.rows,columns:P,"row-key":"id_proyek",class:"table"},{"top-right":e(()=>[a(j,{flat:"",dense:"",icon:w.value?"fullscreen_exit":"fullscreen",onClick:k,class:"q-ml-md"},null,8,["icon"])]),header:e(i=>[a(v,{props:i},{default:e(()=>[(g(!0),C(R,null,A(i.cols,p=>(g(),T(q,{key:p.name,props:i,style:{"font-weight":"bold"}},{default:e(()=>[n(s(p.label),1)]),_:2},1032,["props"]))),128))]),_:2},1032,["props"])]),body:e(i=>[a(v,{props:i},{default:e(()=>[a(u,{key:"index",props:i},{default:e(()=>[n(s(++i.rowIndex),1)]),_:2},1032,["props"]),a(u,{key:"proyek",props:i},{default:e(()=>[n(s(i.row.nama_proyek),1)]),_:2},1032,["props"]),a(u,{key:"total_pengajuan",props:i},{default:e(()=>[n(s(i.row.total_pengajuan)+" Pengajuan ",1)]),_:2},1032,["props"]),a(u,{key:"jumlah_belum_dibayar",props:i},{default:e(()=>[n(s(t(b)(t(c)(i.row.jumlah_belum_dibayar))),1)]),_:2},1032,["props"])]),_:2},1032,["props"])]),"bottom-row":e(()=>[a(v,{"no-hover":"",class:"text-weight-bold text-right"},{default:e(()=>[a(u,{colspan:"3"},{default:e(()=>[n("Total Belum Dibayar")]),_:1}),a(u,null,{default:e(()=>[n(s(t(b)(m.value.jumlahBelumDibayar)),1)]),_:1})]),_:1})]),_:1},8,["fullscreen","rows"]))}});const _e=F({__name:"ProyeksiUtangTable",props:{rows:{},options:{}},setup(D){const P=D,w=[{name:"index",label:"#",field:"index"},{name:"nama_proyek",label:"Proyek",field:"nama_proyek",align:"left",sortable:!0},{name:"keperluan",label:"Keperluan",field:"keperluan",align:"left",sortable:!0},{name:"jumlah_utang",label:"Jumlah Utang",field:"jumlah_utang",align:"right",sortable:!0}],k=h(!1);function _(){k.value=!k.value}const m=h(),f=h(),y=h(),i=I(()=>{var r;return{utang:(r=m.value)==null?void 0:r.computedRows.reduce((l,x)=>l+c(x.jumlah_utang),0)}}),p=N();function d(){p.dialog({component:ae,componentProps:{options:P.options,data:{route:route("dashboard.admin")}}})}return Q(()=>{var o,r,l;f.value={columns:(o=m.value)==null?void 0:o.columns,body:{rows:(r=m.value)==null?void 0:r.computedRows,props:["index","nama_proyek","keperluan","jumlah_utang"]}},y.value=E({rows:(l=m.value)==null?void 0:l.computedRows,props:["nama_proyek","keperluan","jumlah_utang"]})}),(o,r)=>(g(),T(t(K),{ref_key:"table",ref:m,flat:"",bordered:"",title:"Proyeksi Utang",fullscreen:k.value,rows:o.rows,columns:w,"row-key":"id_pencairan_dana",class:"table"},{"top-right":e(()=>[a(j,{flat:"","no-caps":"",label:"Pencarian",icon:"search",color:"primary",onClick:d}),a(j,{flat:"",dense:"",label:"xls",color:"green",onClick:r[0]||(r[0]=l=>t(M)().exportDataFromJSON({data:y.value,name:"proyeksi-utang",type:"xls"}))},{default:e(()=>[a($,null,{default:e(()=>[n("Export to xls")]),_:1})]),_:1}),a(j,{flat:"",dense:"",label:"pdf",color:"red-8",onClick:r[1]||(r[1]=l=>t(J)({filename:"proyeksi_utang",header:"Proyeksi Utang",columns:f.value.columns,body:f.value.body}))},{default:e(()=>[a($,null,{default:e(()=>[n("Export to pdf")]),_:1})]),_:1}),a(j,{flat:"",dense:"",icon:k.value?"fullscreen_exit":"fullscreen",onClick:_,class:"q-ml-md"},null,8,["icon"])]),header:e(l=>[a(v,{props:l},{default:e(()=>[(g(!0),C(R,null,A(l.cols,x=>(g(),T(q,{key:x.name,props:l,style:{"font-weight":"bold"}},{default:e(()=>[n(s(x.label),1)]),_:2},1032,["props"]))),128))]),_:2},1032,["props"])]),body:e(l=>[a(v,{props:l,onClick:x=>t(B).visit(o.route("detail_pencairan_dana",l.row.id_pencairan_dana)),style:{cursor:"pointer"}},{default:e(()=>[a(u,{key:"index",props:l},{default:e(()=>[n(s(++l.rowIndex),1)]),_:2},1032,["props"]),a(u,{key:"nama_proyek",props:l},{default:e(()=>[n(s(l.row.nama_proyek),1)]),_:2},1032,["props"]),a(u,{key:"keperluan",props:l},{default:e(()=>[n(s(l.row.keperluan),1)]),_:2},1032,["props"]),a(u,{key:"jumlah_utang",props:l},{default:e(()=>[n(s(t(b)(t(c)(l.row.jumlah_utang))),1)]),_:2},1032,["props"]),a($,null,{default:e(()=>[n("Lihat Detail")]),_:1})]),_:2},1032,["props","onClick"])]),"bottom-row":e(()=>[a(v,{"no-hover":"",class:"text-weight-bold text-right"},{default:e(()=>[a(u,{colspan:"3"},{default:e(()=>[n("Total")]),_:1}),a(u,null,{default:e(()=>[n(s(t(b)(i.value.utang)),1)]),_:1})]),_:1})]),_:1},8,["fullscreen","rows"]))}});const pe=F({__name:"ProyeksiPiutangTable",props:{rows:{},options:{}},setup(D){const P=D,w=[{name:"index",label:"#",field:"index"},{name:"nama_proyek",label:"Proyek",field:"nama_proyek",align:"left",sortable:!0},{name:"keperluan",label:"Keperluan",field:"keperluan",align:"left",sortable:!0},{name:"jumlah_piutang",label:"Jumlah Piutang",field:"jumlah_piutang",align:"right",sortable:!0}],k=h(!1);function _(){k.value=!k.value}const m=h(),f=h(),y=h(),i=I(()=>{var r;return{piutang:(r=m.value)==null?void 0:r.computedRows.reduce((l,x)=>l+c(x.jumlah_piutang),0)}}),p=N();function d(){p.dialog({component:oe,componentProps:{options:P.options,data:{route:route("dashboard.admin")}}})}return Q(()=>{var o,r,l;f.value={columns:(o=m.value)==null?void 0:o.columns,body:{rows:(r=m.value)==null?void 0:r.computedRows,props:["index","nama_proyek","keperluan","jumlah_piutang"]}},y.value=E({rows:(l=m.value)==null?void 0:l.computedRows,props:["nama_proyek","keperluan","jumlah_piutang"]})}),(o,r)=>(g(),T(t(K),{ref_key:"table",ref:m,flat:"",bordered:"",title:"Proyeksi Piutang",fullscreen:k.value,rows:o.rows,columns:w,class:"table"},{"top-right":e(()=>[a(j,{flat:"","no-caps":"",label:"Pencarian",icon:"search",color:"primary",onClick:d}),a(j,{flat:"",dense:"",label:"xls",color:"green",onClick:r[0]||(r[0]=l=>t(M)().exportDataFromJSON({data:y.value,name:"proyeksi-piutang",type:"xls"}))},{default:e(()=>[a($,null,{default:e(()=>[n("Export to xls")]),_:1})]),_:1}),a(j,{flat:"",dense:"",label:"pdf",color:"red-8",onClick:r[1]||(r[1]=l=>t(J)({filename:"proyeksi_piutang",header:"Proyeksi Piutang",columns:f.value.columns,body:f.value.body}))},{default:e(()=>[a($,null,{default:e(()=>[n("Export to pdf")]),_:1})]),_:1}),a(j,{flat:"",dense:"",icon:k.value?"fullscreen_exit":"fullscreen",onClick:_,class:"q-ml-md"},null,8,["icon"])]),header:e(l=>[a(v,{props:l},{default:e(()=>[(g(!0),C(R,null,A(l.cols,x=>(g(),T(q,{key:x.name,props:l,style:{"font-weight":"bold"}},{default:e(()=>[n(s(x.label),1)]),_:2},1032,["props"]))),128))]),_:2},1032,["props"])]),body:e(l=>[a(v,{props:l,onClick:x=>t(B).visit(l.row.id_penagihan?o.route("detail_penagihan",l.row.id_penagihan):o.route("detail_pencairan_dana",l.row.id_pencairan_dana)),style:{cursor:"pointer"}},{default:e(()=>[a(u,{key:"index",props:l},{default:e(()=>[n(s(++l.rowIndex),1)]),_:2},1032,["props"]),a(u,{key:"nama_proyek",props:l},{default:e(()=>[n(s(l.row.nama_proyek),1)]),_:2},1032,["props"]),a(u,{key:"keperluan",props:l},{default:e(()=>[n(s(l.row.keperluan),1)]),_:2},1032,["props"]),a(u,{key:"jumlah_piutang",props:l},{default:e(()=>[n(s(t(b)(t(c)(l.row.jumlah_piutang))),1)]),_:2},1032,["props"]),a($,null,{default:e(()=>[n("Lihat Detail")]),_:1})]),_:2},1032,["props","onClick"])]),"bottom-row":e(()=>[a(v,{"no-hover":"",class:"text-weight-bold text-right"},{default:e(()=>[a(u,{colspan:"3"},{default:e(()=>[n("Total")]),_:1}),a(u,null,{default:e(()=>[n(s(t(b)(i.value.piutang)),1)]),_:1})]),_:1})]),_:1},8,["fullscreen","rows"]))}});const ce=F({__name:"ProyeksiSetoranModalTable",props:{rows:{},options:{}},setup(D){const P=D,w=[{name:"index",label:"#",field:"index"},{name:"nama_proyek",label:"Proyek",field:"nama_proyek",align:"left",sortable:!0},{name:"keperluan",label:"Keperluan",field:"keperluan",align:"left",sortable:!0},{name:"jumlah_setoran_modal",label:"Jumlah Setoran Modal",field:"jumlah_setoran_modal",align:"right",sortable:!0}],k=h(!1);function _(){k.value=!k.value}const m=h(),f=h(),y=h(),i=I(()=>{var r;return{setoranModal:(r=m.value)==null?void 0:r.computedRows.reduce((l,x)=>l+c(x.jumlah_setoran_modal),0)}}),p=N();function d(){p.dialog({component:le,componentProps:{options:P.options,data:{route:route("dashboard.admin")}}})}return Q(()=>{var o,r,l;f.value={columns:(o=m.value)==null?void 0:o.columns,body:{rows:(r=m.value)==null?void 0:r.computedRows,props:["index","nama_proyek","keperluan","jumlah_setoran_modal"]}},y.value=E({rows:(l=m.value)==null?void 0:l.computedRows,props:["nama_proyek","keperluan","jumlah_setoran_modal"]})}),(o,r)=>(g(),T(t(K),{ref_key:"table",ref:m,flat:"",bordered:"",title:"Proyeksi Setoran Modal",fullscreen:k.value,rows:o.rows,columns:w,"row-key":"id_pencairan_dana",class:"table"},{"top-right":e(()=>[a(j,{flat:"","no-caps":"",label:"Pencarian",icon:"search",color:"primary",onClick:d}),a(j,{flat:"",dense:"",label:"xls",color:"green",onClick:r[0]||(r[0]=l=>t(M)().exportDataFromJSON({data:y.value,name:"proyeksi-setoran_modal",type:"xls"}))},{default:e(()=>[a($,null,{default:e(()=>[n("Export to xls")]),_:1})]),_:1}),a(j,{flat:"",dense:"",label:"pdf",color:"red-8",onClick:r[1]||(r[1]=l=>t(J)({filename:"proyeksi_setoran_modal",header:"Proyeksi Setoran Modal",columns:f.value.columns,body:f.value.body}))},{default:e(()=>[a($,null,{default:e(()=>[n("Export to pdf")]),_:1})]),_:1}),a(j,{flat:"",dense:"",icon:k.value?"fullscreen_exit":"fullscreen",onClick:_,class:"q-ml-md"},null,8,["icon"])]),header:e(l=>[a(v,{props:l},{default:e(()=>[(g(!0),C(R,null,A(l.cols,x=>(g(),T(q,{key:x.name,props:l,style:{"font-weight":"bold"}},{default:e(()=>[n(s(x.label),1)]),_:2},1032,["props"]))),128))]),_:2},1032,["props"])]),body:e(l=>[a(v,{props:l,onClick:x=>t(B).visit(o.route("detail_pencairan_dana",l.row.id_pencairan_dana)),style:{cursor:"pointer"}},{default:e(()=>[a(u,{key:"index",props:l},{default:e(()=>[n(s(++l.rowIndex),1)]),_:2},1032,["props"]),a(u,{key:"nama_proyek",props:l},{default:e(()=>[n(s(l.row.nama_proyek),1)]),_:2},1032,["props"]),a(u,{key:"keperluan",props:l},{default:e(()=>[n(s(l.row.keperluan),1)]),_:2},1032,["props"]),a(u,{key:"jumlah_setoran_modal",props:l},{default:e(()=>[n(s(t(b)(t(c)(l.row.jumlah_setoran_modal))),1)]),_:2},1032,["props"]),a($,null,{default:e(()=>[n("Lihat Detail")]),_:1})]),_:2},1032,["props","onClick"])]),"bottom-row":e(()=>[a(v,{"no-hover":"",class:"text-weight-bold text-right"},{default:e(()=>[a(u,{colspan:"3"},{default:e(()=>[n("Total")]),_:1}),a(u,null,{default:e(()=>[n(s(t(b)(i.value.setoranModal)),1)]),_:1})]),_:1})]),_:1},8,["fullscreen","rows"]))}});const me=F({__name:"ProyeksiPenarikanTable",props:{rows:{},options:{}},setup(D){const P=D,w=[{name:"index",label:"#",field:"index"},{name:"nama_proyek",label:"Proyek",field:"nama_proyek",align:"left",sortable:!0},{name:"keperluan",label:"Keperluan",field:"keperluan",align:"left",sortable:!0},{name:"jumlah_penarikan",label:"Jumlah Penarikan",field:"jumlah_penarikan",align:"right",sortable:!0}],k=h(!1);function _(){k.value=!k.value}const m=h(),f=h(),y=h(),i=I(()=>{var r;return{penarikan:(r=m.value)==null?void 0:r.computedRows.reduce((l,x)=>l+c(x.jumlah_penarikan),0)}}),p=N();function d(){p.dialog({component:ne,componentProps:{options:P.options,data:{route:route("dashboard.admin")}}})}return Q(()=>{var o,r,l;f.value={columns:(o=m.value)==null?void 0:o.columns,body:{rows:(r=m.value)==null?void 0:r.computedRows,props:["index","nama_proyek","keperluan","jumlah_penarikan"]}},y.value=E({rows:(l=m.value)==null?void 0:l.computedRows,props:["nama_proyek","keperluan","jumlah_penarikan"]})}),(o,r)=>(g(),T(t(K),{ref_key:"table",ref:m,flat:"",bordered:"",title:"Proyeksi Penarikan",fullscreen:k.value,rows:o.rows,columns:w,"row-key":"id_pencairan_dana",class:"table"},{"top-right":e(()=>[a(j,{flat:"","no-caps":"",label:"Pencarian",icon:"search",color:"primary",onClick:d}),a(j,{flat:"",dense:"",label:"xls",color:"green",onClick:r[0]||(r[0]=l=>t(M)().exportDataFromJSON({data:y.value,name:"proyeksi-penarikan",type:"xls"}))},{default:e(()=>[a($,null,{default:e(()=>[n("Export to xls")]),_:1})]),_:1}),a(j,{flat:"",dense:"",label:"pdf",color:"red-8",onClick:r[1]||(r[1]=l=>t(J)({filename:"proyeksi_penarikan",header:"Proyeksi Penarikan",columns:f.value.columns,body:f.value.body}))},{default:e(()=>[a($,null,{default:e(()=>[n("Export to pdf")]),_:1})]),_:1}),a(j,{flat:"",dense:"",icon:k.value?"fullscreen_exit":"fullscreen",onClick:_,class:"q-ml-md"},null,8,["icon"])]),header:e(l=>[a(v,{props:l},{default:e(()=>[(g(!0),C(R,null,A(l.cols,x=>(g(),T(q,{key:x.name,props:l,style:{"font-weight":"bold"}},{default:e(()=>[n(s(x.label),1)]),_:2},1032,["props"]))),128))]),_:2},1032,["props"])]),body:e(l=>[a(v,{props:l,onClick:x=>t(B).visit(o.route("detail_pencairan_dana",l.row.id_pencairan_dana)),style:{cursor:"pointer"}},{default:e(()=>[a(u,{key:"index",props:l},{default:e(()=>[n(s(++l.rowIndex),1)]),_:2},1032,["props"]),a(u,{key:"nama_proyek",props:l},{default:e(()=>[n(s(l.row.nama_proyek),1)]),_:2},1032,["props"]),a(u,{key:"keperluan",props:l},{default:e(()=>[n(s(l.row.keperluan),1)]),_:2},1032,["props"]),a(u,{key:"jumlah_penarikan",props:l},{default:e(()=>[n(s(t(b)(t(c)(l.row.jumlah_penarikan))),1)]),_:2},1032,["props"]),a($,null,{default:e(()=>[n("Lihat Detail")]),_:1})]),_:2},1032,["props","onClick"])]),"bottom-row":e(()=>[a(v,{"no-hover":"",class:"text-weight-bold text-right"},{default:e(()=>[a(u,{colspan:"3"},{default:e(()=>[n("Total")]),_:1}),a(u,null,{default:e(()=>[n(s(t(b)(i.value.penarikan)),1)]),_:1})]),_:1})]),_:1},8,["fullscreen","rows"]))}});const fe={class:"q-pa-md"},ke={class:"row q-col-gutter-md"},ye={class:"col-12"},be={class:"col-12 col-md-6"},ge={class:"col-12 col-md-6"},ve={class:"col-12"},he={class:"col-12 col-md-6"},we={class:"col-12 col-md-6"},xe={class:"col-12 col-md-6"},Pe={class:"col-12 col-md-6"},Ne=F({__name:"AdminPage",props:{proyek:{},sisaDanaRekening:{},proyeksiInvoiceProyek:{},proyeksiKebutuhanDanaProyek:{},proyeksiUtang:{},proyeksiPiutang:{},proyeksiSetoranModal:{},proyeksiPenarikan:{},overview:{},options:{}},setup(D){const P=D,w=[{label:"Dashboard",url:"#"},{label:"Overview",url:"#"}],k=I(()=>{const _=P.overview,m=P.sisaDanaRekening.reduce((p,d)=>{const o=c(d.nilai_kontrak),r=c(d.total_pengajuan_dana),l=c(d.total_pencairan_dana)+c(d.total_penagihan_diterima);return p+(o+r-l)},0),f=P.proyeksiInvoiceProyek.reduce((p,d)=>{const o=c(d.invoice_sebelumnya),r=c(d.invoice_saat_ini);return p+(o+r)},0),y=P.proyeksiKebutuhanDanaProyek.reduce((p,d)=>p+c(d.jumlah_belum_dibayar),0),i=m+f-y;return[..._,{title:"Proyeksi Kas Akhir Bulan",color:"positive",data:b(i)}]});return(_,m)=>{const f=G("in-link");return g(),C(R,null,[a(t(H),{title:"Dashboard"}),a(V,null,{breadcrumbs:e(()=>[a(L,{align:"left"},{default:e(()=>[(g(),C(R,null,A(w,y=>W(a(Z,{key:y.label,label:y.label},null,8,["label"]),[[f,y.url]])),64))]),_:1})]),default:e(()=>[a(t(X),{overview:k.value},null,8,["overview"]),S("div",fe,[S("div",ke,[S("div",ye,[a(t(se),{rows:_.proyek,options:_.options},null,8,["rows","options"])]),S("div",be,[a(t(ue),{rows:_.sisaDanaRekening},null,8,["rows"])]),S("div",ge,[a(t(de),{rows:_.proyeksiKebutuhanDanaProyek},null,8,["rows"])]),S("div",ve,[a(t(ie),{rows:_.proyeksiInvoiceProyek},null,8,["rows"])]),S("div",he,[a(t(_e),{rows:_.proyeksiUtang,options:_.options},null,8,["rows","options"])]),S("div",we,[a(t(pe),{rows:_.proyeksiPiutang,options:_.options},null,8,["rows","options"])]),S("div",xe,[a(t(ce),{rows:_.proyeksiSetoranModal,options:_.options},null,8,["rows","options"])]),S("div",Pe,[a(t(me),{rows:_.proyeksiPenarikan,options:_.options},null,8,["rows","options"])])])])]),_:1})],64)}}});export{Ne as default};