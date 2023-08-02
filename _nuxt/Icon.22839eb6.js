import{a as Ft,r as te,b as ee,e as tt,h as R,f as ne,i as oe,j as C,w as re,k as ie,u as x,o as E,l as at,m as O,c as ut,p as se,t as ce,q as le,s as ae}from"./entry.1f2b4186.js";function ue(){const t=Ft();return t._appConfig||(t._appConfig=te(ee)),t._appConfig}const Pt=Object.freeze({left:0,top:0,width:16,height:16}),Mt=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),et=Object.freeze({...Pt,...Mt});Object.freeze({...et,body:"",hidden:!1});({...Pt});const Et=Object.freeze({width:null,height:null}),Ot=Object.freeze({...Et,...Mt});function fe(t,o){const n={...t};for(const r in o){const e=o[r],i=typeof e;r in Et?(e===null||e&&(i==="string"||i==="number"))&&(n[r]=e):i===typeof n[r]&&(n[r]=r==="rotate"?e%4:e)}return n}const he=/[\s,]+/;function de(t,o){o.split(he).forEach(n=>{switch(n.trim()){case"horizontal":t.hFlip=!0;break;case"vertical":t.vFlip=!0;break}})}function pe(t,o=0){const n=t.replace(/^-?[0-9.]*/,"");function r(e){for(;e<0;)e+=4;return e%4}if(n===""){const e=parseInt(t);return isNaN(e)?0:r(e)}else if(n!==t){let e=0;switch(n){case"%":e=25;break;case"deg":e=90}if(e){let i=parseFloat(t.slice(0,t.length-n.length));return isNaN(i)?0:(i=i/e,i%1===0?r(i):0)}}return o}const ge=/(-?[0-9.]*[0-9]+[0-9.]*)/g,me=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function ft(t,o,n){if(o===1)return t;if(n=n||100,typeof t=="number")return Math.ceil(t*o*n)/n;if(typeof t!="string")return t;const r=t.split(ge);if(r===null||!r.length)return t;const e=[];let i=r.shift(),s=me.test(i);for(;;){if(s){const c=parseFloat(i);isNaN(c)?e.push(i):e.push(Math.ceil(c*o*n)/n)}else e.push(i);if(i=r.shift(),i===void 0)return e.join("");s=!s}}function ye(t,o){const n={...et,...t},r={...Ot,...o},e={left:n.left,top:n.top,width:n.width,height:n.height};let i=n.body;[n,r].forEach(b=>{const h=[],p=b.hFlip,f=b.vFlip;let y=b.rotate;p?f?y+=2:(h.push("translate("+(e.width+e.left).toString()+" "+(0-e.top).toString()+")"),h.push("scale(-1 1)"),e.top=e.left=0):f&&(h.push("translate("+(0-e.left).toString()+" "+(e.height+e.top).toString()+")"),h.push("scale(1 -1)"),e.top=e.left=0);let m;switch(y<0&&(y-=Math.floor(y/4)*4),y=y%4,y){case 1:m=e.height/2+e.top,h.unshift("rotate(90 "+m.toString()+" "+m.toString()+")");break;case 2:h.unshift("rotate(180 "+(e.width/2+e.left).toString()+" "+(e.height/2+e.top).toString()+")");break;case 3:m=e.width/2+e.left,h.unshift("rotate(-90 "+m.toString()+" "+m.toString()+")");break}y%2===1&&(e.left!==e.top&&(m=e.left,e.left=e.top,e.top=m),e.width!==e.height&&(m=e.width,e.width=e.height,e.height=m)),h.length&&(i='<g transform="'+h.join(" ")+'">'+i+"</g>")});const s=r.width,c=r.height,l=e.width,a=e.height;let u,d;return s===null?(d=c===null?"1em":c==="auto"?a:c,u=ft(d,l/a)):(u=s==="auto"?l:s,d=c===null?ft(u,a/l):c==="auto"?a:c),{attributes:{width:u.toString(),height:d.toString(),viewBox:e.left.toString()+" "+e.top.toString()+" "+l.toString()+" "+a.toString()},body:i}}const we=/\sid="(\S+)"/g,be="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let xe=0;function Se(t,o=be){const n=[];let r;for(;r=we.exec(t);)n.push(r[1]);return n.length&&n.forEach(e=>{const i=typeof o=="function"?o(e):o+(xe++).toString(),s=e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");t=t.replace(new RegExp('([#;"])('+s+')([")]|\\.[a-z])',"g"),"$1"+i+"$3")}),t}function ve(t,o){let n=t.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const r in o)n+=" "+r+'="'+o[r]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+t+"</svg>"}function Ie(t){return t.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function ke(t){return'url("data:image/svg+xml,'+Ie(t)+'")'}const ht={...Ot,inline:!1},Ce={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},je={display:"inline-block"},U={backgroundColor:"currentColor"},At={backgroundColor:"transparent"},dt={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},pt={webkitMask:U,mask:U,background:At};for(const t in pt){const o=pt[t];for(const n in dt)o[t+n]=dt[n]}const L={};["horizontal","vertical"].forEach(t=>{const o=t.slice(0,1)+"Flip";L[t+"-flip"]=o,L[t.slice(0,1)+"-flip"]=o,L[t+"Flip"]=o});function gt(t){return t+(t.match(/^[-0-9.]+$/)?"px":"")}const _e=(t,o)=>{const n=fe(ht,o),r={...Ce},e=o.mode||"svg",i={},s=o.style,c=typeof s=="object"&&!(s instanceof Array)?s:{};for(let p in o){const f=o[p];if(f!==void 0)switch(p){case"icon":case"style":case"onLoad":case"mode":break;case"inline":case"hFlip":case"vFlip":n[p]=f===!0||f==="true"||f===1;break;case"flip":typeof f=="string"&&de(n,f);break;case"color":i.color=f;break;case"rotate":typeof f=="string"?n[p]=pe(f):typeof f=="number"&&(n[p]=f);break;case"ariaHidden":case"aria-hidden":f!==!0&&f!=="true"&&delete r["aria-hidden"];break;default:{const y=L[p];y?(f===!0||f==="true"||f===1)&&(n[y]=!0):ht[p]===void 0&&(r[p]=f)}}}const l=ye(t,n),a=l.attributes;if(n.inline&&(i.verticalAlign="-0.125em"),e==="svg"){r.style={...i,...c},Object.assign(r,a);let p=0,f=o.id;return typeof f=="string"&&(f=f.replace(/-/g,"_")),r.innerHTML=Se(l.body,f?()=>f+"ID"+p++:"iconifyVue"),R("svg",r)}const{body:u,width:d,height:g}=t,b=e==="mask"||(e==="bg"?!1:u.indexOf("currentColor")!==-1),h=ve(u,{...a,width:d+"",height:g+""});return r.style={...i,"--svg":ke(h),width:gt(a.width),height:gt(a.height),...je,...b?U:At,...c},R("span",r)},Te=Object.create(null),$e=tt({inheritAttrs:!1,render(){const t=this.$attrs,o=t.icon,n=typeof o=="string"?Te[o]:typeof o=="object"?o:null;return n===null||typeof n!="object"||typeof n.body!="string"?this.$slots.default?this.$slots.default():null:_e({...et,...n},t)}}),_=/^[a-z0-9]+(-[a-z0-9]+)*$/,F=(t,o,n,r="")=>{const e=t.split(":");if(t.slice(0,1)==="@"){if(e.length<2||e.length>3)return null;r=e.shift().slice(1)}if(e.length>3||!e.length)return null;if(e.length>1){const c=e.pop(),l=e.pop(),a={provider:e.length>0?e[0]:r,prefix:l,name:c};return o&&!N(a)?null:a}const i=e[0],s=i.split("-");if(s.length>1){const c={provider:r,prefix:s.shift(),name:s.join("-")};return o&&!N(c)?null:c}if(n&&r===""){const c={provider:r,prefix:"",name:i};return o&&!N(c,n)?null:c}return null},N=(t,o)=>t?!!((t.provider===""||t.provider.match(_))&&(o&&t.prefix===""||t.prefix.match(_))&&t.name.match(_)):!1,Lt=Object.freeze({left:0,top:0,width:16,height:16}),H=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),P=Object.freeze({...Lt,...H}),G=Object.freeze({...P,body:"",hidden:!1});function Fe(t,o){const n={};!t.hFlip!=!o.hFlip&&(n.hFlip=!0),!t.vFlip!=!o.vFlip&&(n.vFlip=!0);const r=((t.rotate||0)+(o.rotate||0))%4;return r&&(n.rotate=r),n}function mt(t,o){const n=Fe(t,o);for(const r in G)r in H?r in t&&!(r in n)&&(n[r]=H[r]):r in o?n[r]=o[r]:r in t&&(n[r]=t[r]);return n}function Pe(t,o){const n=t.icons,r=t.aliases||Object.create(null),e=Object.create(null);function i(s){if(n[s])return e[s]=[];if(!(s in e)){e[s]=null;const c=r[s]&&r[s].parent,l=c&&i(c);l&&(e[s]=[c].concat(l))}return e[s]}return(o||Object.keys(n).concat(Object.keys(r))).forEach(i),e}function Me(t,o,n){const r=t.icons,e=t.aliases||Object.create(null);let i={};function s(c){i=mt(r[c]||e[c],i)}return s(o),n.forEach(s),mt(t,i)}function Nt(t,o){const n=[];if(typeof t!="object"||typeof t.icons!="object")return n;t.not_found instanceof Array&&t.not_found.forEach(e=>{o(e,null),n.push(e)});const r=Pe(t);for(const e in r){const i=r[e];i&&(o(e,Me(t,e,i)),n.push(e))}return n}const Ee={provider:"",aliases:{},not_found:{},...Lt};function q(t,o){for(const n in o)if(n in t&&typeof t[n]!=typeof o[n])return!1;return!0}function zt(t){if(typeof t!="object"||t===null)return null;const o=t;if(typeof o.prefix!="string"||!t.icons||typeof t.icons!="object"||!q(t,Ee))return null;const n=o.icons;for(const e in n){const i=n[e];if(!e.match(_)||typeof i.body!="string"||!q(i,G))return null}const r=o.aliases||Object.create(null);for(const e in r){const i=r[e],s=i.parent;if(!e.match(_)||typeof s!="string"||!n[s]&&!r[s]||!q(i,G))return null}return o}const yt=Object.create(null);function Oe(t,o){return{provider:t,prefix:o,icons:Object.create(null),missing:new Set}}function I(t,o){const n=yt[t]||(yt[t]=Object.create(null));return n[o]||(n[o]=Oe(t,o))}function nt(t,o){return zt(o)?Nt(o,(n,r)=>{r?t.icons[n]=r:t.missing.add(n)}):[]}function Ae(t,o,n){try{if(typeof n.body=="string")return t.icons[o]={...n},!0}catch{}return!1}let T=!1;function Dt(t){return typeof t=="boolean"&&(T=t),T}function Rt(t){const o=typeof t=="string"?F(t,!0,T):t;if(o){const n=I(o.provider,o.prefix),r=o.name;return n.icons[r]||(n.missing.has(r)?null:void 0)}}function Le(t,o){const n=F(t,!0,T);if(!n)return!1;const r=I(n.provider,n.prefix);return Ae(r,n.name,o)}function Ne(t,o){if(typeof t!="object")return!1;if(typeof o!="string"&&(o=t.provider||""),T&&!o&&!t.prefix){let e=!1;return zt(t)&&(t.prefix="",Nt(t,(i,s)=>{s&&Le(i,s)&&(e=!0)})),e}const n=t.prefix;if(!N({provider:o,prefix:n,name:"a"}))return!1;const r=I(o,n);return!!nt(r,t)}const Ht=Object.freeze({width:null,height:null}),Bt=Object.freeze({...Ht,...H}),ze=/(-?[0-9.]*[0-9]+[0-9.]*)/g,De=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function wt(t,o,n){if(o===1)return t;if(n=n||100,typeof t=="number")return Math.ceil(t*o*n)/n;if(typeof t!="string")return t;const r=t.split(ze);if(r===null||!r.length)return t;const e=[];let i=r.shift(),s=De.test(i);for(;;){if(s){const c=parseFloat(i);isNaN(c)?e.push(i):e.push(Math.ceil(c*o*n)/n)}else e.push(i);if(i=r.shift(),i===void 0)return e.join("");s=!s}}function Re(t,o){const n={...P,...t},r={...Bt,...o},e={left:n.left,top:n.top,width:n.width,height:n.height};let i=n.body;[n,r].forEach(b=>{const h=[],p=b.hFlip,f=b.vFlip;let y=b.rotate;p?f?y+=2:(h.push("translate("+(e.width+e.left).toString()+" "+(0-e.top).toString()+")"),h.push("scale(-1 1)"),e.top=e.left=0):f&&(h.push("translate("+(0-e.left).toString()+" "+(e.height+e.top).toString()+")"),h.push("scale(1 -1)"),e.top=e.left=0);let m;switch(y<0&&(y-=Math.floor(y/4)*4),y=y%4,y){case 1:m=e.height/2+e.top,h.unshift("rotate(90 "+m.toString()+" "+m.toString()+")");break;case 2:h.unshift("rotate(180 "+(e.width/2+e.left).toString()+" "+(e.height/2+e.top).toString()+")");break;case 3:m=e.width/2+e.left,h.unshift("rotate(-90 "+m.toString()+" "+m.toString()+")");break}y%2===1&&(e.left!==e.top&&(m=e.left,e.left=e.top,e.top=m),e.width!==e.height&&(m=e.width,e.width=e.height,e.height=m)),h.length&&(i='<g transform="'+h.join(" ")+'">'+i+"</g>")});const s=r.width,c=r.height,l=e.width,a=e.height;let u,d;return s===null?(d=c===null?"1em":c==="auto"?a:c,u=wt(d,l/a)):(u=s==="auto"?l:s,d=c===null?wt(u,a/l):c==="auto"?a:c),{attributes:{width:u.toString(),height:d.toString(),viewBox:e.left.toString()+" "+e.top.toString()+" "+l.toString()+" "+a.toString()},body:i}}const He=/\sid="(\S+)"/g,Be="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let Ve=0;function qe(t,o=Be){const n=[];let r;for(;r=He.exec(t);)n.push(r[1]);return n.length&&n.forEach(e=>{const i=typeof o=="function"?o(e):o+(Ve++).toString(),s=e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");t=t.replace(new RegExp('([#;"])('+s+')([")]|\\.[a-z])',"g"),"$1"+i+"$3")}),t}const W=Object.create(null);function Qe(t,o){W[t]=o}function K(t){return W[t]||W[""]}function ot(t){let o;if(typeof t.resources=="string")o=[t.resources];else if(o=t.resources,!(o instanceof Array)||!o.length)return null;return{resources:o,path:t.path||"/",maxURL:t.maxURL||500,rotate:t.rotate||750,timeout:t.timeout||5e3,random:t.random===!0,index:t.index||0,dataAfterTimeout:t.dataAfterTimeout!==!1}}const rt=Object.create(null),j=["https://api.simplesvg.com","https://api.unisvg.com"],z=[];for(;j.length>0;)j.length===1||Math.random()>.5?z.push(j.shift()):z.push(j.pop());rt[""]=ot({resources:["https://api.iconify.design"].concat(z)});function Ue(t,o){const n=ot(o);return n===null?!1:(rt[t]=n,!0)}function it(t){return rt[t]}const Ge=()=>{let t;try{if(t=fetch,typeof t=="function")return t}catch{}};let bt=Ge();function We(t,o){const n=it(t);if(!n)return 0;let r;if(!n.maxURL)r=0;else{let e=0;n.resources.forEach(s=>{e=Math.max(e,s.length)});const i=o+".json?icons=";r=n.maxURL-e-n.path.length-i.length}return r}function Ke(t){return t===404}const Je=(t,o,n)=>{const r=[],e=We(t,o),i="icons";let s={type:i,provider:t,prefix:o,icons:[]},c=0;return n.forEach((l,a)=>{c+=l.length+1,c>=e&&a>0&&(r.push(s),s={type:i,provider:t,prefix:o,icons:[]},c=l.length),s.icons.push(l)}),r.push(s),r};function Xe(t){if(typeof t=="string"){const o=it(t);if(o)return o.path}return"/"}const Ye=(t,o,n)=>{if(!bt){n("abort",424);return}let r=Xe(o.provider);switch(o.type){case"icons":{const i=o.prefix,c=o.icons.join(","),l=new URLSearchParams({icons:c});r+=i+".json?"+l.toString();break}case"custom":{const i=o.uri;r+=i.slice(0,1)==="/"?i.slice(1):i;break}default:n("abort",400);return}let e=503;bt(t+r).then(i=>{const s=i.status;if(s!==200){setTimeout(()=>{n(Ke(s)?"abort":"next",s)});return}return e=501,i.json()}).then(i=>{if(typeof i!="object"||i===null){setTimeout(()=>{i===404?n("abort",i):n("next",e)});return}setTimeout(()=>{n("success",i)})}).catch(()=>{n("next",e)})},Ze={prepare:Je,send:Ye};function tn(t){const o={loaded:[],missing:[],pending:[]},n=Object.create(null);t.sort((e,i)=>e.provider!==i.provider?e.provider.localeCompare(i.provider):e.prefix!==i.prefix?e.prefix.localeCompare(i.prefix):e.name.localeCompare(i.name));let r={provider:"",prefix:"",name:""};return t.forEach(e=>{if(r.name===e.name&&r.prefix===e.prefix&&r.provider===e.provider)return;r=e;const i=e.provider,s=e.prefix,c=e.name,l=n[i]||(n[i]=Object.create(null)),a=l[s]||(l[s]=I(i,s));let u;c in a.icons?u=o.loaded:s===""||a.missing.has(c)?u=o.missing:u=o.pending;const d={provider:i,prefix:s,name:c};u.push(d)}),o}function Vt(t,o){t.forEach(n=>{const r=n.loaderCallbacks;r&&(n.loaderCallbacks=r.filter(e=>e.id!==o))})}function en(t){t.pendingCallbacksFlag||(t.pendingCallbacksFlag=!0,setTimeout(()=>{t.pendingCallbacksFlag=!1;const o=t.loaderCallbacks?t.loaderCallbacks.slice(0):[];if(!o.length)return;let n=!1;const r=t.provider,e=t.prefix;o.forEach(i=>{const s=i.icons,c=s.pending.length;s.pending=s.pending.filter(l=>{if(l.prefix!==e)return!0;const a=l.name;if(t.icons[a])s.loaded.push({provider:r,prefix:e,name:a});else if(t.missing.has(a))s.missing.push({provider:r,prefix:e,name:a});else return n=!0,!0;return!1}),s.pending.length!==c&&(n||Vt([t],i.id),i.callback(s.loaded.slice(0),s.missing.slice(0),s.pending.slice(0),i.abort))})}))}let nn=0;function on(t,o,n){const r=nn++,e=Vt.bind(null,n,r);if(!o.pending.length)return e;const i={id:r,icons:o,callback:t,abort:e};return n.forEach(s=>{(s.loaderCallbacks||(s.loaderCallbacks=[])).push(i)}),e}function rn(t,o=!0,n=!1){const r=[];return t.forEach(e=>{const i=typeof e=="string"?F(e,o,n):e;i&&r.push(i)}),r}var sn={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function cn(t,o,n,r){const e=t.resources.length,i=t.random?Math.floor(Math.random()*e):t.index;let s;if(t.random){let w=t.resources.slice(0);for(s=[];w.length>1;){const S=Math.floor(Math.random()*w.length);s.push(w[S]),w=w.slice(0,S).concat(w.slice(S+1))}s=s.concat(w)}else s=t.resources.slice(i).concat(t.resources.slice(0,i));const c=Date.now();let l="pending",a=0,u,d=null,g=[],b=[];typeof r=="function"&&b.push(r);function h(){d&&(clearTimeout(d),d=null)}function p(){l==="pending"&&(l="aborted"),h(),g.forEach(w=>{w.status==="pending"&&(w.status="aborted")}),g=[]}function f(w,S){S&&(b=[]),typeof w=="function"&&b.push(w)}function y(){return{startTime:c,payload:o,status:l,queriesSent:a,queriesPending:g.length,subscribe:f,abort:p}}function m(){l="failed",b.forEach(w=>{w(void 0,u)})}function lt(){g.forEach(w=>{w.status==="pending"&&(w.status="aborted")}),g=[]}function Zt(w,S,k){const M=S!=="success";switch(g=g.filter(v=>v!==w),l){case"pending":break;case"failed":if(M||!t.dataAfterTimeout)return;break;default:return}if(S==="abort"){u=k,m();return}if(M){u=k,g.length||(s.length?V():m());return}if(h(),lt(),!t.random){const v=t.resources.indexOf(w.resource);v!==-1&&v!==t.index&&(t.index=v)}l="completed",b.forEach(v=>{v(k)})}function V(){if(l!=="pending")return;h();const w=s.shift();if(w===void 0){if(g.length){d=setTimeout(()=>{h(),l==="pending"&&(lt(),m())},t.timeout);return}m();return}const S={status:"pending",resource:w,callback:(k,M)=>{Zt(S,k,M)}};g.push(S),a++,d=setTimeout(V,t.rotate),n(w,o,S.callback)}return setTimeout(V),y}function qt(t){const o={...sn,...t};let n=[];function r(){n=n.filter(c=>c().status==="pending")}function e(c,l,a){const u=cn(o,c,l,(d,g)=>{r(),a&&a(d,g)});return n.push(u),u}function i(c){return n.find(l=>c(l))||null}return{query:e,find:i,setIndex:c=>{o.index=c},getIndex:()=>o.index,cleanup:r}}function xt(){}const Q=Object.create(null);function ln(t){if(!Q[t]){const o=it(t);if(!o)return;const n=qt(o),r={config:o,redundancy:n};Q[t]=r}return Q[t]}function an(t,o,n){let r,e;if(typeof t=="string"){const i=K(t);if(!i)return n(void 0,424),xt;e=i.send;const s=ln(t);s&&(r=s.redundancy)}else{const i=ot(t);if(i){r=qt(i);const s=t.resources?t.resources[0]:"",c=K(s);c&&(e=c.send)}}return!r||!e?(n(void 0,424),xt):r.query(o,e,n)().abort}const St="iconify2",$="iconify",Qt=$+"-count",vt=$+"-version",Ut=36e5,un=168;function J(t,o){try{return t.getItem(o)}catch{}}function st(t,o,n){try{return t.setItem(o,n),!0}catch{}}function It(t,o){try{t.removeItem(o)}catch{}}function X(t,o){return st(t,Qt,o.toString())}function Y(t){return parseInt(J(t,Qt))||0}const B={local:!0,session:!0},Gt={local:new Set,session:new Set};let ct=!1;function fn(t){ct=t}let A=typeof window>"u"?{}:window;function Wt(t){const o=t+"Storage";try{if(A&&A[o]&&typeof A[o].length=="number")return A[o]}catch{}B[t]=!1}function Kt(t,o){const n=Wt(t);if(!n)return;const r=J(n,vt);if(r!==St){if(r){const c=Y(n);for(let l=0;l<c;l++)It(n,$+l.toString())}st(n,vt,St),X(n,0);return}const e=Math.floor(Date.now()/Ut)-un,i=c=>{const l=$+c.toString(),a=J(n,l);if(typeof a=="string"){try{const u=JSON.parse(a);if(typeof u=="object"&&typeof u.cached=="number"&&u.cached>e&&typeof u.provider=="string"&&typeof u.data=="object"&&typeof u.data.prefix=="string"&&o(u,c))return!0}catch{}It(n,l)}};let s=Y(n);for(let c=s-1;c>=0;c--)i(c)||(c===s-1?(s--,X(n,s)):Gt[t].add(c))}function Jt(){if(!ct){fn(!0);for(const t in B)Kt(t,o=>{const n=o.data,r=o.provider,e=n.prefix,i=I(r,e);if(!nt(i,n).length)return!1;const s=n.lastModified||-1;return i.lastModifiedCached=i.lastModifiedCached?Math.min(i.lastModifiedCached,s):s,!0})}}function hn(t,o){const n=t.lastModifiedCached;if(n&&n>=o)return n===o;if(t.lastModifiedCached=o,n)for(const r in B)Kt(r,e=>{const i=e.data;return e.provider!==t.provider||i.prefix!==t.prefix||i.lastModified===o});return!0}function dn(t,o){ct||Jt();function n(r){let e;if(!B[r]||!(e=Wt(r)))return;const i=Gt[r];let s;if(i.size)i.delete(s=Array.from(i).shift());else if(s=Y(e),!X(e,s+1))return;const c={cached:Math.floor(Date.now()/Ut),provider:t.provider,data:o};return st(e,$+s.toString(),JSON.stringify(c))}o.lastModified&&!hn(t,o.lastModified)||!Object.keys(o.icons).length||(o.not_found&&(o=Object.assign({},o),delete o.not_found),n("local")||n("session"))}function kt(){}function pn(t){t.iconsLoaderFlag||(t.iconsLoaderFlag=!0,setTimeout(()=>{t.iconsLoaderFlag=!1,en(t)}))}function gn(t,o){t.iconsToLoad?t.iconsToLoad=t.iconsToLoad.concat(o).sort():t.iconsToLoad=o,t.iconsQueueFlag||(t.iconsQueueFlag=!0,setTimeout(()=>{t.iconsQueueFlag=!1;const{provider:n,prefix:r}=t,e=t.iconsToLoad;delete t.iconsToLoad;let i;if(!e||!(i=K(n)))return;i.prepare(n,r,e).forEach(c=>{an(n,c,l=>{if(typeof l!="object")c.icons.forEach(a=>{t.missing.add(a)});else try{const a=nt(t,l);if(!a.length)return;const u=t.pendingIcons;u&&a.forEach(d=>{u.delete(d)}),dn(t,l)}catch(a){console.error(a)}pn(t)})})}))}const Xt=(t,o)=>{const n=rn(t,!0,Dt()),r=tn(n);if(!r.pending.length){let l=!0;return o&&setTimeout(()=>{l&&o(r.loaded,r.missing,r.pending,kt)}),()=>{l=!1}}const e=Object.create(null),i=[];let s,c;return r.pending.forEach(l=>{const{provider:a,prefix:u}=l;if(u===c&&a===s)return;s=a,c=u,i.push(I(a,u));const d=e[a]||(e[a]=Object.create(null));d[u]||(d[u]=[])}),r.pending.forEach(l=>{const{provider:a,prefix:u,name:d}=l,g=I(a,u),b=g.pendingIcons||(g.pendingIcons=new Set);b.has(d)||(b.add(d),e[a][u].push(d))}),i.forEach(l=>{const{provider:a,prefix:u}=l;e[a][u].length&&gn(l,e[a][u])}),o?on(o,r,i):kt},mn=t=>new Promise((o,n)=>{const r=typeof t=="string"?F(t,!0):t;if(!r){n(t);return}Xt([r||t],e=>{if(e.length&&r){const i=Rt(r);if(i){o({...P,...i});return}}n(t)})});function yn(t,o){const n={...t};for(const r in o){const e=o[r],i=typeof e;r in Ht?(e===null||e&&(i==="string"||i==="number"))&&(n[r]=e):i===typeof n[r]&&(n[r]=r==="rotate"?e%4:e)}return n}const wn=/[\s,]+/;function bn(t,o){o.split(wn).forEach(n=>{switch(n.trim()){case"horizontal":t.hFlip=!0;break;case"vertical":t.vFlip=!0;break}})}function xn(t,o=0){const n=t.replace(/^-?[0-9.]*/,"");function r(e){for(;e<0;)e+=4;return e%4}if(n===""){const e=parseInt(t);return isNaN(e)?0:r(e)}else if(n!==t){let e=0;switch(n){case"%":e=25;break;case"deg":e=90}if(e){let i=parseFloat(t.slice(0,t.length-n.length));return isNaN(i)?0:(i=i/e,i%1===0?r(i):0)}}return o}function Sn(t,o){let n=t.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const r in o)n+=" "+r+'="'+o[r]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+t+"</svg>"}function vn(t){return t.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function In(t){return'url("data:image/svg+xml,'+vn(t)+'")'}const Ct={...Bt,inline:!1},kn={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},Cn={display:"inline-block"},Z={backgroundColor:"currentColor"},Yt={backgroundColor:"transparent"},jt={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},_t={webkitMask:Z,mask:Z,background:Yt};for(const t in _t){const o=_t[t];for(const n in jt)o[t+n]=jt[n]}const D={};["horizontal","vertical"].forEach(t=>{const o=t.slice(0,1)+"Flip";D[t+"-flip"]=o,D[t.slice(0,1)+"-flip"]=o,D[t+"Flip"]=o});function Tt(t){return t+(t.match(/^[-0-9.]+$/)?"px":"")}const $t=(t,o)=>{const n=yn(Ct,o),r={...kn},e=o.mode||"svg",i={},s=o.style,c=typeof s=="object"&&!(s instanceof Array)?s:{};for(let p in o){const f=o[p];if(f!==void 0)switch(p){case"icon":case"style":case"onLoad":case"mode":break;case"inline":case"hFlip":case"vFlip":n[p]=f===!0||f==="true"||f===1;break;case"flip":typeof f=="string"&&bn(n,f);break;case"color":i.color=f;break;case"rotate":typeof f=="string"?n[p]=xn(f):typeof f=="number"&&(n[p]=f);break;case"ariaHidden":case"aria-hidden":f!==!0&&f!=="true"&&delete r["aria-hidden"];break;default:{const y=D[p];y?(f===!0||f==="true"||f===1)&&(n[y]=!0):Ct[p]===void 0&&(r[p]=f)}}}const l=Re(t,n),a=l.attributes;if(n.inline&&(i.verticalAlign="-0.125em"),e==="svg"){r.style={...i,...c},Object.assign(r,a);let p=0,f=o.id;return typeof f=="string"&&(f=f.replace(/-/g,"_")),r.innerHTML=qe(l.body,f?()=>f+"ID"+p++:"iconifyVue"),R("svg",r)}const{body:u,width:d,height:g}=t,b=e==="mask"||(e==="bg"?!1:u.indexOf("currentColor")!==-1),h=Sn(u,{...a,width:d+"",height:g+""});return r.style={...i,"--svg":In(h),width:Tt(a.width),height:Tt(a.height),...Cn,...b?Z:Yt,...c},R("span",r)};Dt(!0);Qe("",Ze);if(typeof document<"u"&&typeof window<"u"){Jt();const t=window;if(t.IconifyPreload!==void 0){const o=t.IconifyPreload,n="Invalid IconifyPreload syntax.";typeof o=="object"&&o!==null&&(o instanceof Array?o:[o]).forEach(r=>{try{(typeof r!="object"||r===null||r instanceof Array||typeof r.icons!="object"||typeof r.prefix!="string"||!Ne(r))&&console.error(n)}catch{console.error(n)}})}if(t.IconifyProviders!==void 0){const o=t.IconifyProviders;if(typeof o=="object"&&o!==null)for(let n in o){const r="IconifyProviders["+n+"] is invalid.";try{const e=o[n];if(typeof e!="object"||!e||e.resources===void 0)continue;Ue(n,e)||console.error(r)}catch{console.error(r)}}}}const jn={...P,body:""};tt({inheritAttrs:!1,data(){return{iconMounted:!1,counter:0}},mounted(){this._name="",this._loadingIcon=null,this.iconMounted=!0},unmounted(){this.abortLoading()},methods:{abortLoading(){this._loadingIcon&&(this._loadingIcon.abort(),this._loadingIcon=null)},getIcon(t,o){if(typeof t=="object"&&t!==null&&typeof t.body=="string")return this._name="",this.abortLoading(),{data:t};let n;if(typeof t!="string"||(n=F(t,!1,!0))===null)return this.abortLoading(),null;const r=Rt(n);if(!r)return(!this._loadingIcon||this._loadingIcon.name!==t)&&(this.abortLoading(),this._name="",r!==null&&(this._loadingIcon={name:t,abort:Xt([n],()=>{this.counter++})})),null;this.abortLoading(),this._name!==t&&(this._name=t,o&&o(t));const e=["iconify"];return n.prefix!==""&&e.push("iconify--"+n.prefix),n.provider!==""&&e.push("iconify--"+n.provider),{data:r,classes:e}}},render(){this.counter;const t=this.$attrs,o=this.iconMounted?this.getIcon(t.icon,t.onLoad):null;if(!o)return $t(jn,t);let n=t;return o.classes&&(n={...t,class:(typeof t.class=="string"?t.class+" ":"")+o.classes.join(" ")}),$t({...P,...o.data},n)}});const _n=["width","height"],Tn=tt({__name:"Icon",props:{name:{type:String,required:!0},size:{type:String,default:""}},async setup(t){let o,n;const r=t,e=Ft(),i=ue(),s=ne("icons",()=>({})),c=oe(!1),l=C(()=>{var h;return(((h=i.nuxtIcon)==null?void 0:h.aliases)||{})[r.name]||r.name}),a=C(()=>{var h;return(h=s.value)==null?void 0:h[l.value]}),u=C(()=>e.vueApp.component(l.value)),d=C(()=>{var p;const h=r.size||((p=i.nuxtIcon)==null?void 0:p.size)||"1em";return String(Number(h))===h?`${h}px`:h}),g=C(()=>{var h,p;return(p=(h=i.nuxtIcon)==null?void 0:h.class)!=null?p:"icon"});async function b(){var h;u.value||(h=s.value)!=null&&h[l.value]||(c.value=!0,s.value[l.value]=await mn(l.value).catch(()=>{}),c.value=!1)}return re(()=>l.value,b),!u.value&&([o,n]=ie(()=>b()),o=await o,n()),(h,p)=>x(c)?(E(),at("span",{key:0,class:O(x(g)),width:x(d),height:x(d)},null,10,_n)):x(a)?(E(),ut(x($e),{key:1,icon:x(a),class:O(x(g)),width:x(d),height:x(d)},null,8,["icon","class","width","height"])):x(u)?(E(),ut(se(x(u)),{key:2,class:O(x(g)),width:x(d),height:x(d)},null,8,["class","width","height"])):(E(),at("span",{key:3,class:O(x(g)),style:le({fontSize:x(d),lineHeight:x(d),width:x(d),height:x(d)})},ce(t.name),7))}});const Fn=ae(Tn,[["__scopeId","data-v-414902b3"]]);export{Fn as default};
