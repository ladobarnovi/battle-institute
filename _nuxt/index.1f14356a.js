import{B as r}from"./BtlInput.2a53a583.js";import{B as _}from"./BtlButton.585639b5.js";import{s as p,o as u,l as m,v as e,x as t,y as n,B as o,A as a,C as f,D as h}from"./entry.1f2b4186.js";const x={name:"login",components:{BtlButton:_,BtlInput:r}},l=s=>(f("data-v-cdd10625"),s=s(),h(),s),B={id:"login"},v={class:"main-container flex flex-col gap-4 text-white"},g=l(()=>e("p",{class:"text-3xl font-semibold text-center"},"Log in to your account",-1)),I={class:"additional-action forgot-password"},w=l(()=>e("hr",null,null,-1)),y={class:"additional-action sign-up"};function k(s,L,S,$,b,C){const c=a("BtlInput"),i=a("BtlButton"),d=a("RouterLink");return u(),m("div",B,[e("div",v,[g,t(c,{label:"Email",placeholder:"user@email.com"}),t(c,{label:"Password",placeholder:"********",type:"password"}),t(i,{class:"mt-1"},{default:n(()=>[o(" Log In ")]),_:1}),e("div",I,[o(" Forgot your password? "),t(d,{to:"/recover"},{default:n(()=>[o("Recover")]),_:1})]),w,e("div",y,[o(" Don't have an account? "),t(d,{to:"/register"},{default:n(()=>[o("Sign Up")]),_:1})])])])}const D=p(x,[["render",k],["__scopeId","data-v-cdd10625"]]);export{D as default};
