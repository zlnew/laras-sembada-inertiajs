import{o as i,c as p,w as s,a as o,r as f,b,d as _,T as h,e as c,Q as m,u as t,f as w,g as r,h as x,i as y,Z as Q,F as V}from"./app-1e8a9b5f.js";import{_ as g,Q as v,a as $,b as k,c as B,d as u}from"./QImg-678f09c2.js";import{Q as L}from"./QForm-b5dff3de.js";const C={};function F(n,e){return i(),p(B,{view:"hHh lpR fFf",class:"bg-blue-grey-1"},{default:s(()=>[o(v,null,{default:s(()=>[f(n.$slots,"default")]),_:3}),o($,{class:"q-pa-lg bg-blue-grey-1"},{default:s(()=>[o(k,{class:"text-center text-secondary text-subtitle2"},{default:s(()=>[b(" Copyright © 2023 Creatoku All Rights Reserved. ")]),_:1})]),_:1})]),_:3})}const T=g(C,[["render",F]]),P={class:"q-pa-xl col-12 col-sm-6 row justify-end items-center",style:{height:"90vh"}},R=r("h1",{class:"text-h5 text-primary text-weight-bold"},"Welcome Back",-1),q=r("p",{class:"text-secondary"},"Please login to your account",-1),M=_({__name:"LoginForm",setup(n){const e=h({email:null,password:null,remember:!1});function d(){e.post(route("login.attempt"))}return(H,a)=>(i(),c("div",P,[o(L,{onSubmit:y(d,["prevent"]),class:"col col-md-10 q-gutter-md",style:{"max-width":"400px"}},{default:s(()=>[R,q,o(m,{outlined:"","hide-bottom-space":"","clear-icon":"close",label:"Email address",modelValue:t(e).email,"onUpdate:modelValue":a[0]||(a[0]=l=>t(e).email=l),error:!!t(e).errors.email,"error-message":t(e).errors.email},null,8,["modelValue","error","error-message"]),o(m,{outlined:"","hide-bottom-space":"","clear-icon":"close",label:"Password",type:"password",modelValue:t(e).password,"onUpdate:modelValue":a[1]||(a[1]=l=>t(e).password=l),error:!!t(e).errors.password,"error-message":t(e).errors.password},null,8,["modelValue","error","error-message"]),o(w,{label:"Remember me",modelValue:t(e).remember,"onUpdate:modelValue":a[2]||(a[2]=l=>t(e).remember=l)},null,8,["modelValue"]),r("div",null,[o(x,{type:"submit",label:"Login",color:"primary",class:"full-width",loading:t(e).processing},null,8,["loading"])])]),_:1},8,["onSubmit"])]))}}),N={},S={class:"col-12 col-sm-6 gt-xs self-start"},U={class:"absolute-bottom-right text-right bg-transparent gt-sm"},E={class:"bg-white"},I=r("h2",{class:"text-h5"}," Membangun Masa Depan Bersama ",-1);function j(n,e){return i(),c("div",S,[o(u,{src:"/storage/background/login_bg.webp",ratio:1,height:"90vh"},{default:s(()=>[r("div",U,[r("div",E,[o(u,{width:"30rem",src:"/storage/logo/logo.webp"})]),I])]),_:1})])}const A=g(N,[["render",j]]),D={class:"row items-center bg-white"},G=_({__name:"LoginPage",setup(n){return(e,d)=>(i(),c(V,null,[o(t(Q),{title:"Login to your account"}),o(T,null,{default:s(()=>[r("div",D,[o(t(M)),o(t(A))])]),_:1})],64))}});export{G as default};