import{c,g as D,h as d,w as F,k as N,T as z,U as Q,V as H,d as X,W as Y,X as W,Y as Z,Z as G,_ as J}from"./index.206569e8.js";function me(e){if(Object(e.$parent)===e.$parent)return e.$parent;let{parent:t}=e.$;for(;Object(t)===t;){if(Object(t.proxy)===t.proxy)return t.proxy;t=t.parent}}function ee(e){return e.appContext.config.globalProperties.$router!==void 0}function ge(e){return e.isUnmounted===!0||e.isDeactivated===!0}function A(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}function P(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function te(e,t){for(const n in t){const r=t[n],s=e[n];if(typeof r=="string"){if(r!==s)return!1}else if(Array.isArray(s)===!1||s.length!==r.length||r.some((u,i)=>u!==s[i]))return!1}return!0}function L(e,t){return Array.isArray(t)===!0?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function re(e,t){return Array.isArray(e)===!0?L(e,t):Array.isArray(t)===!0?L(t,e):e===t}function ne(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(re(e[n],t[n])===!1)return!1;return!0}const ae={to:[String,Object],replace:Boolean,href:String,target:String,disable:Boolean},he={...ae,exact:Boolean,activeClass:{type:String,default:"q-router-link--active"},exactActiveClass:{type:String,default:"q-router-link--exact-active"}};function ye({fallbackTag:e,useDisableForRouterLinkProps:t=!0}={}){const n=D(),{props:r,proxy:s,emit:u}=n,i=ee(n),a=c(()=>r.disable!==!0&&r.href!==void 0),g=t===!0?c(()=>i===!0&&r.disable!==!0&&a.value!==!0&&r.to!==void 0&&r.to!==null&&r.to!==""):c(()=>i===!0&&a.value!==!0&&r.to!==void 0&&r.to!==null&&r.to!==""),f=c(()=>g.value===!0?w(r.to):null),o=c(()=>f.value!==null),p=c(()=>a.value===!0||o.value===!0),y=c(()=>r.type==="a"||p.value===!0?"a":r.tag||e||"div"),m=c(()=>a.value===!0?{href:r.href,target:r.target}:o.value===!0?{href:f.value.href,target:r.target}:{}),k=c(()=>{if(o.value===!1)return-1;const{matched:l}=f.value,{length:v}=l,$=l[v-1];if($===void 0)return-1;const b=s.$route.matched;if(b.length===0)return-1;const x=b.findIndex(P.bind(null,$));if(x!==-1)return x;const O=A(l[v-2]);return v>1&&A($)===O&&b[b.length-1].path!==O?b.findIndex(P.bind(null,l[v-2])):x}),h=c(()=>o.value===!0&&k.value!==-1&&te(s.$route.params,f.value.params)),S=c(()=>h.value===!0&&k.value===s.$route.matched.length-1&&ne(s.$route.params,f.value.params)),q=c(()=>o.value===!0?S.value===!0?` ${r.exactActiveClass} ${r.activeClass}`:r.exact===!0?"":h.value===!0?` ${r.activeClass}`:"":"");function w(l){try{return s.$router.resolve(l)}catch{}return null}function R(l,{returnRouterError:v,to:$=r.to,replace:b=r.replace}={}){if(r.disable===!0)return l.preventDefault(),Promise.resolve(!1);if(l.metaKey||l.altKey||l.ctrlKey||l.shiftKey||l.button!==void 0&&l.button!==0||r.target==="_blank")return Promise.resolve(!1);l.preventDefault();const x=s.$router[b===!0?"replace":"push"]($);return v===!0?x:x.then(()=>{}).catch(()=>{})}function _(l){if(o.value===!0){const v=$=>R(l,$);u("click",l,v),l.defaultPrevented!==!0&&v()}else u("click",l)}return{hasRouterLink:o,hasHrefLink:a,hasLink:p,linkTag:y,resolvedLink:f,linkIsActive:h,linkIsExactActive:S,linkClass:q,linkAttrs:m,getLink:w,navigateToRouterLink:R,navigateOnClick:_}}function se(e,t){return e!==void 0&&e()||t}function ke(e,t){if(e!==void 0){const n=e();if(n!=null)return n.slice()}return t}function E(e,t){return e!==void 0?t.concat(e()):t}function $e(e,t){return e===void 0?t:t!==void 0?t.concat(e()):e()}function be(e,t,n,r,s,u){t.key=r+s;const i=d(e,t,n);return s===!0?F(i,u()):i}const j="0 0 24 24",M=e=>e,C=e=>`ionicons ${e}`,K={"mdi-":e=>`mdi ${e}`,"icon-":M,"bt-":e=>`bt ${e}`,"eva-":e=>`eva ${e}`,"ion-md":C,"ion-ios":C,"ion-logo":C,"iconfont ":M,"ti-":e=>`themify-icon ${e}`,"bi-":e=>`bootstrap-icons ${e}`},V={o_:"-outlined",r_:"-round",s_:"-sharp"},U={sym_o_:"-outlined",sym_r_:"-rounded",sym_s_:"-sharp"},ie=new RegExp("^("+Object.keys(K).join("|")+")"),oe=new RegExp("^("+Object.keys(V).join("|")+")"),B=new RegExp("^("+Object.keys(U).join("|")+")"),ue=/^[Mm]\s?[-+]?\.?\d/,le=/^img:/,ce=/^svguse:/,fe=/^ion-/,de=/^(fa-(sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /;var xe=N({name:"QIcon",props:{...z,tag:{type:String,default:"i"},name:String,color:String,left:Boolean,right:Boolean},setup(e,{slots:t}){const{proxy:{$q:n}}=D(),r=Q(e),s=c(()=>"q-icon"+(e.left===!0?" on-left":"")+(e.right===!0?" on-right":"")+(e.color!==void 0?` text-${e.color}`:"")),u=c(()=>{let i,a=e.name;if(a==="none"||!a)return{none:!0};if(n.iconMapFn!==null){const o=n.iconMapFn(a);if(o!==void 0)if(o.icon!==void 0){if(a=o.icon,a==="none"||!a)return{none:!0}}else return{cls:o.cls,content:o.content!==void 0?o.content:" "}}if(ue.test(a)===!0){const[o,p=j]=a.split("|");return{svg:!0,viewBox:p,nodes:o.split("&&").map(y=>{const[m,k,h]=y.split("@@");return d("path",{style:k,d:m,transform:h})})}}if(le.test(a)===!0)return{img:!0,src:a.substring(4)};if(ce.test(a)===!0){const[o,p=j]=a.split("|");return{svguse:!0,src:o.substring(7),viewBox:p}}let g=" ";const f=a.match(ie);if(f!==null)i=K[f[1]](a);else if(de.test(a)===!0)i=a;else if(fe.test(a)===!0)i=`ionicons ion-${n.platform.is.ios===!0?"ios":"md"}${a.substring(3)}`;else if(B.test(a)===!0){i="notranslate material-symbols";const o=a.match(B);o!==null&&(a=a.substring(6),i+=U[o[1]]),g=a}else{i="notranslate material-icons";const o=a.match(oe);o!==null&&(a=a.substring(2),i+=V[o[1]]),g=a}return{cls:i,content:g}});return()=>{const i={class:s.value,style:r.value,"aria-hidden":"true",role:"presentation"};return u.value.none===!0?d(e.tag,i,se(t.default)):u.value.img===!0?d(e.tag,i,E(t.default,[d("img",{src:u.value.src})])):u.value.svg===!0?d(e.tag,i,E(t.default,[d("svg",{viewBox:u.value.viewBox||"0 0 24 24"},u.value.nodes)])):u.value.svguse===!0?d(e.tag,i,E(t.default,[d("svg",{viewBox:u.value.viewBox},[d("use",{"xlink:href":u.value.src})])])):(u.value.cls!==void 0&&(i.class+=" "+u.value.cls),d(e.tag,i,E(t.default,[u.value.content])))}}});function pe(e,t=250){let n=!1,r;return function(){return n===!1&&(n=!0,setTimeout(()=>{n=!1},t),r=e.apply(this,arguments)),r}}function I(e,t,n,r){n.modifiers.stop===!0&&Z(e);const s=n.modifiers.color;let u=n.modifiers.center;u=u===!0||r===!0;const i=document.createElement("span"),a=document.createElement("span"),g=G(e),{left:f,top:o,width:p,height:y}=t.getBoundingClientRect(),m=Math.sqrt(p*p+y*y),k=m/2,h=`${(p-m)/2}px`,S=u?h:`${g.left-f-k}px`,q=`${(y-m)/2}px`,w=u?q:`${g.top-o-k}px`;a.className="q-ripple__inner",J(a,{height:`${m}px`,width:`${m}px`,transform:`translate3d(${S},${w},0) scale3d(.2,.2,1)`,opacity:0}),i.className=`q-ripple${s?" text-"+s:""}`,i.setAttribute("dir","ltr"),i.appendChild(a),t.appendChild(i);const R=()=>{i.remove(),clearTimeout(_)};n.abort.push(R);let _=setTimeout(()=>{a.classList.add("q-ripple__inner--enter"),a.style.transform=`translate3d(${h},${q},0) scale3d(1,1,1)`,a.style.opacity=.2,_=setTimeout(()=>{a.classList.remove("q-ripple__inner--enter"),a.classList.add("q-ripple__inner--leave"),a.style.opacity=0,_=setTimeout(()=>{i.remove(),n.abort.splice(n.abort.indexOf(R),1)},275)},250)},50)}function T(e,{modifiers:t,value:n,arg:r}){const s=Object.assign({},e.cfg.ripple,t,n);e.modifiers={early:s.early===!0,stop:s.stop===!0,center:s.center===!0,color:s.color||r,keyCodes:[].concat(s.keyCodes||13)}}var Re=H({name:"ripple",beforeMount(e,t){const n=t.instance.$.appContext.config.globalProperties.$q.config||{};if(n.ripple===!1)return;const r={cfg:n,enabled:t.value!==!1,modifiers:{},abort:[],start(s){r.enabled===!0&&s.qSkipRipple!==!0&&s.type===(r.modifiers.early===!0?"pointerdown":"click")&&I(s,e,r,s.qKeyEvent===!0)},keystart:pe(s=>{r.enabled===!0&&s.qSkipRipple!==!0&&X(s,r.modifiers.keyCodes)===!0&&s.type===`key${r.modifiers.early===!0?"down":"up"}`&&I(s,e,r,!0)},300)};T(r,t),e.__qripple=r,Y(r,"main",[[e,"pointerdown","start","passive"],[e,"click","start","passive"],[e,"keydown","keystart","passive"],[e,"keyup","keystart","passive"]])},updated(e,t){if(t.oldValue!==t.value){const n=e.__qripple;n!==void 0&&(n.enabled=t.value!==!1,n.enabled===!0&&Object(t.value)===t.value&&T(n,t))}},beforeUnmount(e){const t=e.__qripple;t!==void 0&&(t.abort.forEach(n=>{n()}),W(t,"main"),delete e._qripple)}});export{xe as Q,Re as R,ye as a,se as b,ke as c,ae as d,be as e,$e as f,ee as g,E as h,me as i,he as u,ge as v};
