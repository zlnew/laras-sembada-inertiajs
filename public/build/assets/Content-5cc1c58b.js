import{d as v,o as u,c as h,a as e,t as f,F as x,b as _,e as w,f as b,g as m,x as g,u as n,h as a,l as B,y,A as P,B as S,C as T,n as E,j as L,i as M,p as C,D as F,E as I,G as A,r as k,H as D}from"./app-d8617931.js";import{u as N}from"./Modal.vue_vue_type_style_index_0_scoped_fdb70d85_lang-e5086b2c.js";import{_ as $}from"./_plugin-vue_export-helper-c27b6911.js";const R={class:"flex flex-wrap pt-1 mr-12 bg-transparent rounded-lg sm:mr-16"},V={class:"text-sm leading-normal"},U={class:"opacity-50 text-dark",href:"javascript:;"},Y={class:"text-sm pl-2 capitalize leading-normal text-dark before:float-left before:pr-2 before:text-gray-600 before:content-['/']","aria-current":"page"},G={class:"mb-0 font-bold capitalize text-dark"},Me=v({__name:"Breadrumb",props:{first:{default:"Pages"},second:{},current:{}},setup(d){return(s,t)=>(u(),h(x,null,[e("ol",R,[e("li",V,[e("a",U,f(s.first),1)]),e("li",Y,f(s.second),1)]),e("h6",G,f(s.current),1)],64))}}),c=v({__name:"NavLink",props:{name:{},icon:{},href:{},active:{type:Boolean}},setup(d){const s=d,t=_(()=>{const o=["my-0 mx-4 py-2.7 px-4 text-sm","ease-nav-brand","flex items-center","rounded-lg whitespace-nowrap transition"],i=["font-bold","text-dark bg-white","shadow-soft-xl"],r=["font-medium","text-dark/70"];return[s.active?i:r,...o]}),l=_(()=>{const o=["mr-2 h-8 w-8 xl:p-2.5","flex items-center justify-center","bg-center text-center stroke-0","shadow-soft-2xl rounded-md"],i=["bg-gradient-to-tr from-primary to-secondary"],r=["bg-white"];return[s.active?i:r,...o]}),p=_(()=>s.active?"text-white":"");return(o,i)=>{const r=w("FasIcon");return u(),b(n(y),{href:o.href,class:g(t.value)},{default:m(()=>[e("div",{class:g(l.value)},[a(r,{icon:o.icon,class:g(p.value)},null,8,["icon","class"])],2),B(" "+f(o.name),1)]),_:1},8,["href","class"])}}}),H={},K=v({...H,__name:"Modal",setup(d){const s=N();function t(l){l.key==="Escape"&&s.close()}return P(()=>{document.addEventListener("keydown",t)}),S(()=>{document.removeEventListener("keydown",t)}),(l,p)=>(u(),b(I,{to:"body"},[a(F,{name:"modal-fade"},{default:m(()=>{var o,i,r;return[(o=n(s).state)!=null&&o.component?(u(),h("div",{key:0,onClick:p[0]||(p[0]=M((...z)=>n(s).close&&n(s).close(...z),["self"])),class:"fixed z-[999] h-full inset-0 flex justify-center items-start bg-gray-600/50"},[(u(),b(T((i=n(s).state)==null?void 0:i.component),E(L((r=n(s).state)==null?void 0:r.props)),null,16))])):C("",!0)]}),_:1})]))}}),W=$(K,[["__scopeId","data-v-fdb70d85"]]),j={message:null,type:null,duration:null},q=A("toast-store",{state:()=>({state:j}),actions:{open(d){const{message:s,type:t,duration:l}=d;this.state={message:s,type:t,duration:l},l&&setTimeout(()=>{this.close()},l)},close(){this.state=j}},getters:{}}),J={class:"flex justify-between items-center space-x-2"},O=v({__name:"Toast",setup(d){const s=q(),t=_(()=>{switch(s.state.type){case"success":return"bg-success text-white";case"error":return"bg-danger text-white"}}),l=_(()=>{switch(s.state.type){case"success":return"fa-solid fa-check-circle";case"error":return"fa-solid fa-times-circle"}});return(p,o)=>{const i=w("FasIcon");return u(),b(I,{to:"body"},[a(F,{name:"toast-fade"},{default:m(()=>{var r;return[(r=n(s).state)!=null&&r.message?(u(),h("div",{key:0,class:g([t.value,"fixed bottom-5 right-5 px-4 py-4 rounded-lg shadow-soft-lg"])},[e("div",J,[a(i,{icon:l.value},null,8,["icon"]),e("span",null,f(n(s).state.message),1),e("button",null,[a(i,{onClick:n(s).close,icon:"fa-solid fa-times"},null,8,["onClick"])])])],2)):C("",!0)]}),_:1})])}}});const Q=$(O,[["__scopeId","data-v-dc83d31a"]]),X={class:"max-w-62.5 ease-nav-brand z-990 fixed inset-y-0 my-4 ml-4 block w-full -translate-x-full flex-wrap items-center justify-between overflow-y-hidden rounded-2xl border-0 bg-white p-0 antialiased shadow-none transition-transform duration-200 xl:left-0 xl:translate-x-0 xl:bg-transparent"},Z=D('<div class="h-19.5"><a class="block px-4 py-4 m-0 text-sm whitespace-nowrap text-dark" href="#"><img src="/storage/logo.png" class="inline h-full max-w-full transition-all duration-200 ease-nav-brand border border-primary" alt="main_logo"><span class="ml-1 font-semibold transition-all duration-200 ease-nav-brand"></span></a></div><hr class="h-px my-4 bg-transparent bg-gradient-to-r from-transparent via-dark/40 to-transparent">',2),ee={class:"items-center block w-auto max-h-screen overflow-auto h-sidenav grow basis-full"},te={class:"flex flex-col pl-0 mb-0"},se={class:"mt-0.5 w-full"},ae=e("li",{class:"w-full mt-8 mb-2"},[e("h6",{class:"pl-6 ml-2 font-bold leading-tight uppercase text-xs opacity-60"},"Master")],-1),oe={class:"mt-0.5 w-full"},ne={class:"mt-0.5 w-full"},le={class:"mt-0.5 w-full"},re=e("li",{class:"w-full mt-8 mb-2"},[e("h6",{class:"pl-6 ml-2 font-bold leading-tight uppercase text-xs opacity-60"},"Main")],-1),ie={class:"mt-0.5 w-full"},ce={class:"mt-0.5 w-full"},ue={class:"mt-0.5 w-full"},de={class:"mt-0.5 w-full"},fe=e("li",{class:"w-full mt-8 mb-2"},[e("h6",{class:"pl-6 ml-2 font-bold leading-tight uppercase text-xs opacity-60"},"Reports")],-1),pe={class:"mt-0.5 w-full"},me={class:"mt-0.5 w-full"},he={class:"ease-soft-in-out xl:ml-68.5 relative h-full max-h-screen rounded-xl transition-all duration-200"},_e={class:"relative flex flex-wrap items-center justify-between px-0 py-2 mx-6 transition-all shadow-none duration-250 ease-soft-in rounded-2xl lg:flex-nowrap lg:justify-start","navbar-main":"","navbar-scroll":"true"},ge={class:"flex items-center justify-between w-full px-4 py-1 mx-auto flex-wrap-inherit"},ve={class:"flex flex-row justify-end pl-0 mb-0 list-none md-max:w-full"},we={class:"flex items-center gap-4"},be=["src"],xe={class:"font-semibold text-dark text-sm no-underline"},ye={class:"capitalize text-xs"},ke={class:"w-full px-6 py-6 mx-auto"},Ce={class:"pt-4"},$e={class:"w-full px-6 mx-auto"},je={class:"flex flex-wrap items-center -mx-3 lg:justify-between"},Be={class:"w-full max-w-full px-3 mt-0 mb-6 shrink-0 lg:mb-0 lg:w-1/2 lg:flex-none"},Fe={class:"text-sm leading-normal text-center text-slate-500 lg:text-left"},Ae=v({__name:"AuthenticatedLayout",setup(d){const s=new Date().getFullYear();return(t,l)=>{const p=w("FasIcon"),o=w("EaseButton");return u(),h(x,null,[e("aside",X,[Z,e("div",ee,[e("ul",te,[e("li",se,[a(c,{name:"Dashboard",icon:"fa-solid fa-gauge",href:t.route("dashboard"),active:t.route().current("dashboard")},null,8,["href","active"])]),t.$page.props.role==="admin"?(u(),h(x,{key:0},[ae,e("li",oe,[a(c,{name:"Users",icon:"fa-solid fa-users",href:t.route("users"),active:t.route().current("users")},null,8,["href","active"])]),e("li",ne,[a(c,{name:"Satuan",icon:"fa-solid fa-ruler-horizontal",href:t.route("satuan"),active:t.route().current("satuan")},null,8,["href","active"])]),e("li",le,[a(c,{name:"Rekening",icon:"fa-solid fa-credit-card",href:t.route("rekening"),active:t.route().current("rekening")},null,8,["href","active"])])],64)):C("",!0),re,e("li",ie,[a(c,{name:"Proyek",icon:"fa-solid fa-diagram-project",href:t.route("proyek"),active:t.route().current("proyek")},null,8,["href","active"])]),e("li",ce,[a(c,{name:"RAB",icon:"fa-solid fa-window-restore",href:t.route("rab"),active:t.route().current("rab")||t.route().current("detail_rab")},null,8,["href","active"])]),e("li",ue,[a(c,{name:"RAPP",icon:"fa-solid fa-window-restore",href:t.route("rap"),active:t.route().current("rap")||t.route().current("detail_rap")},null,8,["href","active"])]),e("li",de,[a(c,{name:"Keuangan",icon:"fa-solid fa-money-bill",href:t.route("keuangan"),active:t.route().current("keuangan")||t.route().current("pengajuan_dana.detail")||t.route().current("pencairan_dana.detail")},null,8,["href","active"])]),fe,e("li",pe,[a(c,{name:"Pengajuan Dana",icon:"fa-solid fa-file-lines",href:t.route("laporan.pengajuan_dana"),active:t.route().current("laporan.pengajuan_dana")},null,8,["href","active"])]),e("li",me,[a(c,{name:"Penagihan/Invoice",icon:"fa-solid fa-file-lines",href:t.route("laporan.pencairan_dana"),active:t.route().current("laporan.pencairan_dana")},null,8,["href","active"])])])])]),e("main",he,[e("nav",_e,[e("div",ge,[e("nav",null,[k(t.$slots,"breadcrumb")]),e("ul",ve,[e("li",we,[a(n(y),{href:t.route("profile.edit"),class:g([{"bg-white shadow-soft-xl":t.route().current("profile.edit")},"transition flex items-center gap-4 p-2 pr-4 rounded-lg hover:bg-white hover:shadow-soft-xl"])},{default:m(()=>[e("img",{src:`https://ui-avatars.com/api/?name=${t.$page.props.auth.user.name}`,alt:"User Avatar",class:"w-10 rounded-full"},null,8,be),e("div",null,[e("span",xe,f(t.$page.props.auth.user.name),1),e("p",ye,f(t.$page.props.role),1)])]),_:1},8,["href","class"]),a(n(y),{href:t.route("logout"),method:"post",as:"button"},{default:m(()=>[a(o,{variant:"danger-transparent",slotted:""},{default:m(()=>[a(p,{icon:"fa-solid fa-sign-out-alt",class:"mr-2"}),B(" Logout ")]),_:1})]),_:1},8,["href"])])])])]),e("div",ke,[k(t.$slots,"default"),e("footer",Ce,[e("div",$e,[e("div",je,[e("div",Be,[e("div",Fe," © "+f(n(s))+" Creatoku All rigths reserved. ",1)])])])])])]),a(n(W)),a(Q)],64)}}}),Ie={},ze={class:"flex flex-wrap"},Pe={class:"flex-none w-full max-w-full px-3"};function Se(d,s){return u(),h("div",ze,[e("div",Pe,[k(d.$slots,"default")])])}const De=$(Ie,[["render",Se]]);export{De as C,Ae as _,Me as a,q as u};
