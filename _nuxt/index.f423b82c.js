import{B as d}from"./BtlInput.2a53a583.js";import{B as r}from"./BtlButton.585639b5.js";import{s as _,o as p,l as m,v as n,x as e,y as c,B as a,A as s,C as u,D as f}from"./entry.1f2b4186.js";const x={name:"register",components:{BtlButton:r,BtlInput:d}},B=t=>(u("data-v-cda41cf5"),t=t(),f(),t),h={id:"register"},v={class:"main-container flex flex-col gap-4 text-white"},g=B(()=>n("p",{class:"text-3xl font-semibold text-center"},"Create a new account",-1)),I={class:"additional-action sign-in"};function N(t,w,y,b,k,C){const o=s("BtlInput"),l=s("BtlButton"),i=s("RouterLink");return p(),m("div",h,[n("div",v,[g,e(o,{label:"First Name",placeholder:"First Name"}),e(o,{label:"Last Name",placeholder:"Last Name"}),e(o,{label:"Email",placeholder:"user@email.com",icon:"email"}),e(o,{placeholder:"********",label:"Password",type:"password",icon:"key"}),e(l,{class:"mt-1"},{default:c(()=>[a("Register")]),_:1}),n("div",I,[a(" Already have an account? "),e(i,{to:"/login"},{default:c(()=>[a("Sign In")]),_:1})])])])}const R=_(x,[["render",N],["__scopeId","data-v-cda41cf5"]]);export{R as default};