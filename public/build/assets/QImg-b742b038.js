import{a0 as p,P as O,L as Y,M as N,ax as I,a4 as V,l as h,U as c,a7 as H,bo as G,a3 as Q,m as k,R as E,aa as U,aR as J,a_ as j,bp as X,bq as Z,j as b,br as A,ag as F,bf as B,bs as P,bt as ee,Y as te,ah as ne,bu as ie}from"./app-a9c22e82.js";const de=p({name:"QPageContainer",setup(e,{slots:u}){const{proxy:{$q:t}}=O(),n=Y(I,N);if(n===N)return console.error("QPageContainer needs to be child of QLayout"),N;V(G,!0);const s=h(()=>{const i={};return n.header.space===!0&&(i.paddingTop=`${n.header.size}px`),n.right.space===!0&&(i[`padding${t.lang.rtl===!0?"Left":"Right"}`]=`${n.right.size}px`),n.footer.space===!0&&(i.paddingBottom=`${n.footer.size}px`),n.left.space===!0&&(i[`padding${t.lang.rtl===!0?"Right":"Left"}`]=`${n.left.size}px`),i});return()=>c("div",{class:"q-page-container",style:s.value},H(u.default))}}),fe=p({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:u}){const t=h(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>c("div",{class:t.value},H(u.default))}}),ge=p({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:u}){const t=h(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>c("div",{class:t.value,role:"toolbar"},H(u.default))}}),{passive:M}=j,le=["both","horizontal","vertical"],oe=p({name:"QScrollObserver",props:{axis:{type:String,validator:e=>le.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:u}){const t={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let n=null,s,i;Q(()=>e.scrollTarget,()=>{a(),f()});function d(){n!==null&&n();const y=Math.max(0,X(s)),w=Z(s),m={top:y-t.position.top,left:w-t.position.left};if(e.axis==="vertical"&&m.top===0||e.axis==="horizontal"&&m.left===0)return;const q=Math.abs(m.top)>=Math.abs(m.left)?m.top<0?"up":"down":m.left<0?"left":"right";t.position={top:y,left:w},t.directionChanged=t.direction!==q,t.delta=m,t.directionChanged===!0&&(t.direction=q,t.inflectionPoint=t.position),u("scroll",{...t})}function f(){s=J(i,e.scrollTarget),s.addEventListener("scroll",l,M),l(!0)}function a(){s!==void 0&&(s.removeEventListener("scroll",l,M),s=void 0)}function l(y){if(y===!0||e.debounce===0||e.debounce==="0")d();else if(n===null){const[w,m]=e.debounce?[setTimeout(d,e.debounce),clearTimeout]:[requestAnimationFrame(d),cancelAnimationFrame];n=()=>{m(w),n=null}}}const{proxy:v}=O();return Q(()=>v.$q.lang.rtl,d),k(()=>{i=v.$el.parentNode,f()}),E(()=>{n!==null&&n(),a()}),Object.assign(v,{trigger:l,getPosition:()=>t}),U}});function re(){const e=b(!A.value);return e.value===!1&&k(()=>{e.value=!0}),e}const K=typeof ResizeObserver<"u",W=K===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"},D=p({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:u}){let t=null,n,s={width:-1,height:-1};function i(a){a===!0||e.debounce===0||e.debounce==="0"?d():t===null&&(t=setTimeout(d,e.debounce))}function d(){if(t!==null&&(clearTimeout(t),t=null),n){const{offsetWidth:a,offsetHeight:l}=n;(a!==s.width||l!==s.height)&&(s={width:a,height:l},u("resize",s))}}const{proxy:f}=O();if(K===!0){let a;const l=v=>{n=f.$el.parentNode,n?(a=new ResizeObserver(i),a.observe(n),d()):v!==!0&&F(()=>{l(!0)})};return k(()=>{l()}),E(()=>{t!==null&&clearTimeout(t),a!==void 0&&(a.disconnect!==void 0?a.disconnect():n&&a.unobserve(n))}),U}else{let v=function(){t!==null&&(clearTimeout(t),t=null),l!==void 0&&(l.removeEventListener!==void 0&&l.removeEventListener("resize",i,j.passive),l=void 0)},y=function(){v(),n&&n.contentDocument&&(l=n.contentDocument.defaultView,l.addEventListener("resize",i,j.passive),d())};const a=re();let l;return k(()=>{F(()=>{n=f.$el,n&&y()})}),E(v),f.trigger=i,()=>{if(a.value===!0)return c("object",{style:W.style,tabindex:-1,type:"text/html",data:W.url,"aria-hidden":"true",onLoad:y})}}}}),ve=p({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:u,emit:t}){const{proxy:{$q:n}}=O(),s=b(null),i=b(n.screen.height),d=b(e.container===!0?0:n.screen.width),f=b({position:0,direction:"down",inflectionPoint:0}),a=b(0),l=b(A.value===!0?0:B()),v=h(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),y=h(()=>e.container===!1?{minHeight:n.screen.height+"px"}:null),w=h(()=>l.value!==0?{[n.lang.rtl===!0?"left":"right"]:`${l.value}px`}:null),m=h(()=>l.value!==0?{[n.lang.rtl===!0?"right":"left"]:0,[n.lang.rtl===!0?"left":"right"]:`-${l.value}px`,width:`calc(100% + ${l.value}px)`}:null);function q(o){if(e.container===!0||document.qScrollPrevented!==!0){const g={position:o.position.top,direction:o.direction,directionChanged:o.directionChanged,inflectionPoint:o.inflectionPoint.top,delta:o.delta.top};f.value=g,e.onScroll!==void 0&&t("scroll",g)}}function $(o){const{height:g,width:S}=o;let z=!1;i.value!==g&&(z=!0,i.value=g,e.onScrollHeight!==void 0&&t("scrollHeight",g),x()),d.value!==S&&(z=!0,d.value=S),z===!0&&e.onResize!==void 0&&t("resize",o)}function R({height:o}){a.value!==o&&(a.value=o,x())}function x(){if(e.container===!0){const o=i.value>a.value?B():0;l.value!==o&&(l.value=o)}}let C=null;const _={instances:{},view:h(()=>e.view),isContainer:h(()=>e.container),rootRef:s,height:i,containerHeight:a,scrollbarWidth:l,totalWidth:h(()=>d.value+l.value),rows:h(()=>{const o=e.view.toLowerCase().split(" ");return{top:o[0].split(""),middle:o[1].split(""),bottom:o[2].split("")}}),header:P({size:0,offset:0,space:!1}),right:P({size:300,offset:0,space:!1}),footer:P({size:0,offset:0,space:!1}),left:P({size:300,offset:0,space:!1}),scroll:f,animate(){C!==null?clearTimeout(C):document.body.classList.add("q-body--layout-animate"),C=setTimeout(()=>{C=null,document.body.classList.remove("q-body--layout-animate")},155)},update(o,g,S){_[o][g]=S}};if(V(I,_),B()>0){let S=function(){o=null,g.classList.remove("hide-scrollbar")},z=function(){if(o===null){if(g.scrollHeight>n.screen.height)return;g.classList.add("hide-scrollbar")}else clearTimeout(o);o=setTimeout(S,300)},r=function(T){o!==null&&T==="remove"&&(clearTimeout(o),S()),window[`${T}EventListener`]("resize",z)},o=null;const g=document.body;Q(()=>e.container!==!0?"add":"remove",r),e.container!==!0&&r("add"),ee(()=>{r("remove")})}return()=>{const o=te(u.default,[c(oe,{onScroll:q}),c(D,{onResize:$})]),g=c("div",{class:v.value,style:y.value,ref:e.container===!0?void 0:s,tabindex:-1},o);return e.container===!0?c("div",{class:"q-layout-container overflow-hidden",ref:s},[c(D,{onResize:R}),c("div",{class:"absolute-full",style:w.value},[c("div",{class:"scroll",style:m.value},[g])])]):g}}}),he=(e,u)=>{const t=e.__vccOpts||e;for(const[n,s]of u)t[n]=s;return t},ae={ratio:[String,Number]};function se(e,u){return h(()=>{const t=Number(e.ratio||(u!==void 0?u.value:void 0));return isNaN(t)!==!0&&t>0?{paddingBottom:`${100/t}%`}:null})}const ue=16/9,me=p({name:"QImg",props:{...ae,src:String,srcset:String,sizes:String,alt:String,crossorigin:String,decoding:String,referrerpolicy:String,draggable:Boolean,loading:{type:String,default:"lazy"},fetchpriority:{type:String,default:"auto"},width:String,height:String,initialRatio:{type:[Number,String],default:ue},placeholderSrc:String,fit:{type:String,default:"cover"},position:{type:String,default:"50% 50%"},imgClass:String,imgStyle:Object,noSpinner:Boolean,noNativeMenu:Boolean,noTransition:Boolean,spinnerColor:String,spinnerSize:String},emits:["load","error"],setup(e,{slots:u,emit:t}){const n=b(e.initialRatio),s=se(e,n);let i=null,d=!1;const f=[b(null),b(R())],a=b(0),l=b(!1),v=b(!1),y=h(()=>`q-img q-img--${e.noNativeMenu===!0?"no-":""}menu`),w=h(()=>({width:e.width,height:e.height})),m=h(()=>`q-img__image ${e.imgClass!==void 0?e.imgClass+" ":""}q-img__image--with${e.noTransition===!0?"out":""}-transition`),q=h(()=>({...e.imgStyle,objectFit:e.fit,objectPosition:e.position}));Q(()=>$(),x);function $(){return e.src||e.srcset||e.sizes?{src:e.src,srcset:e.srcset,sizes:e.sizes}:null}function R(){return e.placeholderSrc!==void 0?{src:e.placeholderSrc}:null}function x(r){i!==null&&(clearTimeout(i),i=null),v.value=!1,r===null?(l.value=!1,f[a.value^1].value=R()):l.value=!0,f[a.value].value=r}function C({target:r}){d!==!0&&(i!==null&&(clearTimeout(i),i=null),n.value=r.naturalHeight===0?.5:r.naturalWidth/r.naturalHeight,_(r,1))}function _(r,T){d===!0||T===1e3||(r.complete===!0?o(r):i=setTimeout(()=>{i=null,_(r,T+1)},50))}function o(r){d!==!0&&(a.value=a.value^1,f[a.value].value=null,l.value=!1,v.value=!1,t("load",r.currentSrc||r.src))}function g(r){i!==null&&(clearTimeout(i),i=null),l.value=!1,v.value=!0,f[a.value].value=null,f[a.value^1].value=R(),t("error",r)}function S(r){const T=f[r].value,L={key:"img_"+r,class:m.value,style:q.value,crossorigin:e.crossorigin,decoding:e.decoding,referrerpolicy:e.referrerpolicy,height:e.height,width:e.width,loading:e.loading,fetchpriority:e.fetchpriority,"aria-hidden":"true",draggable:e.draggable,...T};return a.value===r?(L.class+=" q-img__image--waiting",Object.assign(L,{onLoad:C,onError:g})):L.class+=" q-img__image--loaded",c("div",{class:"q-img__container absolute-full",key:"img"+r},c("img",L))}function z(){return l.value!==!0?c("div",{key:"content",class:"q-img__content absolute-full q-anchor--skip"},H(u[v.value===!0?"error":"default"])):c("div",{key:"loading",class:"q-img__loading absolute-full flex flex-center"},u.loading!==void 0?u.loading():e.noSpinner===!0?void 0:[c(ie,{color:e.spinnerColor,size:e.spinnerSize})])}return x($()),E(()=>{d=!0,i!==null&&(clearTimeout(i),i=null)}),()=>{const r=[];return s.value!==null&&r.push(c("div",{key:"filler",style:s.value})),v.value!==!0&&(f[0].value!==null&&r.push(S(0)),f[1].value!==null&&r.push(S(1))),r.push(c(ne,{name:"q-transition--fade"},z)),c("div",{class:y.value,style:w.value,role:"img","aria-label":e.alt},r)}}});export{de as Q,he as _,ge as a,fe as b,ve as c,me as d,D as e};
