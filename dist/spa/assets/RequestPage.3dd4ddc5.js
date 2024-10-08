import{Q as Y}from"./QBtn.5c40fb14.js";import{k as O,c as T,h as x,g as ne,J as R,K as ve,L as M,M as m,$ as H,a0 as ae,V as De,d as ye,a1 as oe,a2 as se,a3 as Me,r as y,N as re,w as we,a4 as g,P as Z,l as _e,a5 as Se,a as Ye}from"./index.206569e8.js";import{b as I}from"./Ripple.1e741cf3.js";import{Q as xe,a as be,p as h,c as qe,b as F,d as $e}from"./QTable.8aacb1a8.js";import{u as le}from"./requests.cc403a9f.js";import{Q as S}from"./QInput.f4b69dff.js";import{u as Ve,a as Ce,g as ke,c as He}from"./use-key-composition.aef8c646.js";import"./rtl.276c3f1b.js";import"./use-timeout.3bb44be2.js";var K=O({name:"QTd",props:{props:Object,autoWidth:Boolean,noHover:Boolean},setup(e,{slots:t}){const o=ne(),n=T(()=>"q-td"+(e.autoWidth===!0?" q-table--col-auto-width":"")+(e.noHover===!0?" q-td--no-hover":"")+" ");return()=>{if(e.props===void 0)return x("td",{class:n.value},I(t.default));const s=o.vnode.key,a=(e.props.colsMap!==void 0?e.props.colsMap[s]:null)||e.props.col;if(a===void 0)return;const{row:i}=e.props;return x("td",{class:n.value+a.__tdClass(i),style:a.__tdStyle(i)},I(t.default))}}});const Ie={__name:"RequestGrid",props:{rows:Array,columns:Array},setup(e){const t={init:{color:"orange",textColor:"white"},waitformeeting:{color:"red",textColor:"white"},meeting:{color:"pink",textColor:"white"},default:{color:"gray",textColor:"white"}},o=s=>t[s]?t[s]:t.default,n=s=>{alert(s)};return(s,a)=>(R(),ve(be,{rows:e.rows,columns:e.columns,"row-key":"id"},{"body-cell-action":M(i=>[m(K,{props:i},{default:M(()=>[m(Y,{flat:"",round:"",icon:"arrow_right",onClick:r=>s.$emit("click-btn",i.row.id),onRowClick:n},null,8,["onClick"])]),_:2},1032,["props"])]),"body-cell-state":M(i=>[m(K,{props:i},{default:M(()=>[m(xe,{dense:"",color:o(i.row.state).color,"text-color":o(i.row.state).textColor},{default:M(()=>[H(ae(i.row.state),1)]),_:2},1032,["color","text-color"])]),_:2},1032,["props"])]),_:1},8,["rows","columns"]))}},Oe=x("div",{class:"q-space"});var Te=O({name:"QSpace",setup(){return()=>Oe}}),z=O({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(e,{slots:t}){const o=T(()=>`q-card__section q-card__section--${e.horizontal===!0?"horiz row no-wrap":"vert"}`);return()=>x(e.tag,{class:o.value},I(t.default))}}),Qe=O({name:"QCard",props:{...Ve,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(e,{slots:t}){const{proxy:{$q:o}}=ne(),n=Ce(e,o),s=T(()=>"q-card"+(n.value===!0?" q-card--dark q-dark":"")+(e.bordered===!0?" q-card--bordered":"")+(e.square===!0?" q-card--square no-border-radius":"")+(e.flat===!0?" q-card--flat no-shadow":""));return()=>x(e.tag,{class:s.value},I(t.default))}});function W(e){if(e===!1)return 0;if(e===!0||e===void 0)return 1;const t=parseInt(e,10);return isNaN(t)?0:t}var Fe=De({name:"close-popup",beforeMount(e,{value:t}){const o={depth:W(t),handler(n){o.depth!==0&&setTimeout(()=>{const s=ke(e);s!==void 0&&He(s,n,o.depth)})},handlerKey(n){ye(n,13)===!0&&o.handler(n)}};e.__qclosepopup=o,e.addEventListener("click",o.handler),e.addEventListener("keyup",o.handlerKey)},updated(e,{value:t,oldValue:o}){t!==o&&(e.__qclosepopup.depth=W(t))},beforeUnmount(e){const t=e.__qclosepopup;e.removeEventListener("click",t.handler),e.removeEventListener("keyup",t.handlerKey),delete e.__qclosepopup}});const C=[-61,9,38,199,426,686,756,818,1111,1181,1210,1635,2060,2097,2192,2262,2324,2394,2456,3178];function ze(e){return Ue(e)===0}function Ne(e,t){return t<=6?31:t<=11||ze(e)?30:29}function Ue(e){const t=C.length;let o=C[0],n,s,a,i,r;if(e<o||e>=C[t-1])throw new Error("Invalid Jalaali year "+e);for(r=1;r<t&&(n=C[r],s=n-o,!(e<n));r+=1)o=n;return i=e-o,s-i<6&&(i=i-s+Ze(s+4,33)*33),a=J(J(i+1,33)-1,4),a===-1&&(a=4),a}function Ze(e,t){return~~(e/t)}function J(e,t){return e-~~(e/t)*t}const ue=864e5,Ee=36e5,E=6e4,ie="YYYY-MM-DDTHH:mm:ss.SSSZ",Le=/\[((?:[^\]\\]|\\]|\\)*)\]|d{1,4}|M{1,4}|m{1,2}|w{1,2}|Qo|Do|D{1,4}|YY(?:YY)?|H{1,2}|h{1,2}|s{1,2}|S{1,3}|Z{1,2}|a{1,2}|[AQExX]/g,Ae=/(\[[^\]]*\])|d{1,4}|M{1,4}|m{1,2}|w{1,2}|Qo|Do|D{1,4}|YY(?:YY)?|H{1,2}|h{1,2}|s{1,2}|S{1,3}|Z{1,2}|a{1,2}|[AQExX]|([.*+:?^,\s${}()|\\]+)/g,N={};function Re(e,t){const o="("+t.days.join("|")+")",n=e+o;if(N[n]!==void 0)return N[n];const s="("+t.daysShort.join("|")+")",a="("+t.months.join("|")+")",i="("+t.monthsShort.join("|")+")",r={};let u=0;const v=e.replace(Ae,d=>{switch(u++,d){case"YY":return r.YY=u,"(-?\\d{1,2})";case"YYYY":return r.YYYY=u,"(-?\\d{1,4})";case"M":return r.M=u,"(\\d{1,2})";case"MM":return r.M=u,"(\\d{2})";case"MMM":return r.MMM=u,i;case"MMMM":return r.MMMM=u,a;case"D":return r.D=u,"(\\d{1,2})";case"Do":return r.D=u++,"(\\d{1,2}(st|nd|rd|th))";case"DD":return r.D=u,"(\\d{2})";case"H":return r.H=u,"(\\d{1,2})";case"HH":return r.H=u,"(\\d{2})";case"h":return r.h=u,"(\\d{1,2})";case"hh":return r.h=u,"(\\d{2})";case"m":return r.m=u,"(\\d{1,2})";case"mm":return r.m=u,"(\\d{2})";case"s":return r.s=u,"(\\d{1,2})";case"ss":return r.s=u,"(\\d{2})";case"S":return r.S=u,"(\\d{1})";case"SS":return r.S=u,"(\\d{2})";case"SSS":return r.S=u,"(\\d{3})";case"A":return r.A=u,"(AM|PM)";case"a":return r.a=u,"(am|pm)";case"aa":return r.aa=u,"(a\\.m\\.|p\\.m\\.)";case"ddd":return s;case"dddd":return o;case"Q":case"d":case"E":return"(\\d{1})";case"Qo":return"(1st|2nd|3rd|4th)";case"DDD":case"DDDD":return"(\\d{1,3})";case"w":return"(\\d{1,2})";case"ww":return"(\\d{2})";case"Z":return r.Z=u,"(Z|[+-]\\d{2}:\\d{2})";case"ZZ":return r.ZZ=u,"(Z|[+-]\\d{2}\\d{2})";case"X":return r.X=u,"(-?\\d+)";case"x":return r.x=u,"(-?\\d{4,})";default:return u--,d[0]==="["&&(d=d.substring(1,d.length-1)),d.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}}),l={map:r,regex:new RegExp("^"+v)};return N[n]=l,l}function ce(e,t){return e!==void 0?e:t!==void 0?t.date:Me.date}function G(e,t=""){const o=e>0?"-":"+",n=Math.abs(e),s=Math.floor(n/60),a=n%60;return o+h(s)+t+h(a)}function Be(e,t,o){let n=e.getFullYear(),s=e.getMonth();const a=e.getDate();return t.year!==void 0&&(n+=o*t.year,delete t.year),t.month!==void 0&&(s+=o*t.month,delete t.month),e.setDate(1),e.setMonth(2),e.setFullYear(n),e.setMonth(s),e.setDate(Math.min(a,P(e))),t.date!==void 0&&(e.setDate(e.getDate()+o*t.date),delete t.date),e}function Pe(e,t,o){const n=t.year!==void 0?t.year:e[`get${o}FullYear`](),s=t.month!==void 0?t.month-1:e[`get${o}Month`](),a=new Date(n,s+1,0).getDate(),i=Math.min(a,t.date!==void 0?t.date:e[`get${o}Date`]());return e[`set${o}Date`](1),e[`set${o}Month`](2),e[`set${o}FullYear`](n),e[`set${o}Month`](s),e[`set${o}Date`](i),delete t.year,delete t.month,delete t.date,e}function B(e,t,o){const n=de(t),s=new Date(e),a=n.year!==void 0||n.month!==void 0||n.date!==void 0?Be(s,n,o):s;for(const i in n){const r=qe(i);a[`set${r}`](a[`get${r}`]()+o*n[i])}return a}function de(e){const t={...e};return e.years!==void 0&&(t.year=e.years,delete t.years),e.months!==void 0&&(t.month=e.months,delete t.months),e.days!==void 0&&(t.date=e.days,delete t.days),e.day!==void 0&&(t.date=e.day,delete t.day),e.hour!==void 0&&(t.hours=e.hour,delete t.hour),e.minute!==void 0&&(t.minutes=e.minute,delete t.minute),e.second!==void 0&&(t.seconds=e.second,delete t.second),e.millisecond!==void 0&&(t.milliseconds=e.millisecond,delete t.millisecond),t}function me(e,t,o){const n=de(t),s=o===!0?"UTC":"",a=new Date(e),i=n.year!==void 0||n.month!==void 0||n.date!==void 0?Pe(a,n,s):a;for(const r in n){const u=r.charAt(0).toUpperCase()+r.slice(1);i[`set${s}${u}`](n[r])}return i}function Xe(e,t,o){const n=je(e,t,o),s=new Date(n.year,n.month===null?null:n.month-1,n.day===null?1:n.day,n.hour,n.minute,n.second,n.millisecond),a=s.getTimezoneOffset();return n.timezoneOffset===null||n.timezoneOffset===a?s:B(s,{minutes:n.timezoneOffset-a},1)}function je(e,t,o,n,s){const a={year:null,month:null,day:null,hour:null,minute:null,second:null,millisecond:null,timezoneOffset:null,dateHash:null,timeHash:null};if(s!==void 0&&Object.assign(a,s),e==null||e===""||typeof e!="string")return a;t===void 0&&(t=ie);const i=ce(o,oe.props),r=i.months,u=i.monthsShort,{regex:v,map:l}=Re(t,i),d=e.match(v);if(d===null)return a;let w="";if(l.X!==void 0||l.x!==void 0){const p=parseInt(d[l.X!==void 0?l.X:l.x],10);if(isNaN(p)===!0||p<0)return a;const D=new Date(p*(l.X!==void 0?1e3:1));a.year=D.getFullYear(),a.month=D.getMonth()+1,a.day=D.getDate(),a.hour=D.getHours(),a.minute=D.getMinutes(),a.second=D.getSeconds(),a.millisecond=D.getMilliseconds()}else{if(l.YYYY!==void 0)a.year=parseInt(d[l.YYYY],10);else if(l.YY!==void 0){const p=parseInt(d[l.YY],10);a.year=p<0?p:2e3+p}if(l.M!==void 0){if(a.month=parseInt(d[l.M],10),a.month<1||a.month>12)return a}else l.MMM!==void 0?a.month=u.indexOf(d[l.MMM])+1:l.MMMM!==void 0&&(a.month=r.indexOf(d[l.MMMM])+1);if(l.D!==void 0){if(a.day=parseInt(d[l.D],10),a.year===null||a.month===null||a.day<1)return a;const p=n!=="persian"?new Date(a.year,a.month,0).getDate():Ne(a.year,a.month);if(a.day>p)return a}l.H!==void 0?a.hour=parseInt(d[l.H],10)%24:l.h!==void 0&&(a.hour=parseInt(d[l.h],10)%12,(l.A&&d[l.A]==="PM"||l.a&&d[l.a]==="pm"||l.aa&&d[l.aa]==="p.m.")&&(a.hour+=12),a.hour=a.hour%24),l.m!==void 0&&(a.minute=parseInt(d[l.m],10)%60),l.s!==void 0&&(a.second=parseInt(d[l.s],10)%60),l.S!==void 0&&(a.millisecond=parseInt(d[l.S],10)*10**(3-d[l.S].length)),(l.Z!==void 0||l.ZZ!==void 0)&&(w=l.Z!==void 0?d[l.Z].replace(":",""):d[l.ZZ],a.timezoneOffset=(w[0]==="+"?-1:1)*(60*w.slice(1,3)+1*w.slice(3,5)))}return a.dateHash=h(a.year,6)+"/"+h(a.month)+"/"+h(a.day),a.timeHash=h(a.hour)+":"+h(a.minute)+":"+h(a.second)+w,a}function Ke(e){return typeof e=="number"?!0:isNaN(Date.parse(e))===!1}function We(e,t){return me(new Date,e,t)}function Je(e){const t=new Date(e).getDay();return t===0?7:t}function L(e){const t=new Date(e.getFullYear(),e.getMonth(),e.getDate());t.setDate(t.getDate()-(t.getDay()+6)%7+3);const o=new Date(t.getFullYear(),0,4);o.setDate(o.getDate()-(o.getDay()+6)%7+3);const n=t.getTimezoneOffset()-o.getTimezoneOffset();t.setHours(t.getHours()-n);const s=(t-o)/(ue*7);return 1+Math.floor(s)}function Ge(e){return e.getFullYear()*1e4+e.getMonth()*100+e.getDate()}function U(e,t){const o=new Date(e);return t===!0?Ge(o):o.getTime()}function et(e,t,o,n={}){const s=U(t,n.onlyDate),a=U(o,n.onlyDate),i=U(e,n.onlyDate);return(i>s||n.inclusiveFrom===!0&&i===s)&&(i<a||n.inclusiveTo===!0&&i===a)}function tt(e,t){return B(e,t,1)}function nt(e,t){return B(e,t,-1)}function _(e,t,o){const n=new Date(e),s=`set${o===!0?"UTC":""}`;switch(t){case"year":case"years":n[`${s}Month`](0);case"month":case"months":n[`${s}Date`](1);case"day":case"days":case"date":n[`${s}Hours`](0);case"hour":case"hours":n[`${s}Minutes`](0);case"minute":case"minutes":n[`${s}Seconds`](0);case"second":case"seconds":n[`${s}Milliseconds`](0)}return n}function at(e,t,o){const n=new Date(e),s=`set${o===!0?"UTC":""}`;switch(t){case"year":case"years":n[`${s}Month`](11);case"month":case"months":n[`${s}Date`](P(n));case"day":case"days":case"date":n[`${s}Hours`](23);case"hour":case"hours":n[`${s}Minutes`](59);case"minute":case"minutes":n[`${s}Seconds`](59);case"second":case"seconds":n[`${s}Milliseconds`](999)}return n}function ot(e){let t=new Date(e);return Array.prototype.slice.call(arguments,1).forEach(o=>{t=Math.max(t,new Date(o))}),t}function st(e){let t=new Date(e);return Array.prototype.slice.call(arguments,1).forEach(o=>{t=Math.min(t,new Date(o))}),t}function k(e,t,o){return(e.getTime()-e.getTimezoneOffset()*E-(t.getTime()-t.getTimezoneOffset()*E))/o}function fe(e,t,o="days"){const n=new Date(e),s=new Date(t);switch(o){case"years":case"year":return n.getFullYear()-s.getFullYear();case"months":case"month":return(n.getFullYear()-s.getFullYear())*12+n.getMonth()-s.getMonth();case"days":case"day":case"date":return k(_(n,"day"),_(s,"day"),ue);case"hours":case"hour":return k(_(n,"hour"),_(s,"hour"),Ee);case"minutes":case"minute":return k(_(n,"minute"),_(s,"minute"),E);case"seconds":case"second":return k(_(n,"second"),_(s,"second"),1e3)}}function A(e){return fe(e,_(e,"year"),"days")+1}function rt(e){return se(e)===!0?"date":typeof e=="number"?"number":"string"}function lt(e,t,o){const n=new Date(e);if(t){const s=new Date(t);if(n<s)return s}if(o){const s=new Date(o);if(n>s)return s}return n}function ut(e,t,o){const n=new Date(e),s=new Date(t);if(o===void 0)return n.getTime()===s.getTime();switch(o){case"second":case"seconds":if(n.getSeconds()!==s.getSeconds())return!1;case"minute":case"minutes":if(n.getMinutes()!==s.getMinutes())return!1;case"hour":case"hours":if(n.getHours()!==s.getHours())return!1;case"day":case"days":case"date":if(n.getDate()!==s.getDate())return!1;case"month":case"months":if(n.getMonth()!==s.getMonth())return!1;case"year":case"years":if(n.getFullYear()!==s.getFullYear())return!1;break;default:throw new Error(`date isSameDate unknown unit ${o}`)}return!0}function P(e){return new Date(e.getFullYear(),e.getMonth()+1,0).getDate()}function ee(e){if(e>=11&&e<=13)return`${e}th`;switch(e%10){case 1:return`${e}st`;case 2:return`${e}nd`;case 3:return`${e}rd`}return`${e}th`}const te={YY(e,t,o){const n=this.YYYY(e,t,o)%100;return n>=0?h(n):"-"+h(Math.abs(n))},YYYY(e,t,o){return o!=null?o:e.getFullYear()},M(e){return e.getMonth()+1},MM(e){return h(e.getMonth()+1)},MMM(e,t){return t.monthsShort[e.getMonth()]},MMMM(e,t){return t.months[e.getMonth()]},Q(e){return Math.ceil((e.getMonth()+1)/3)},Qo(e){return ee(this.Q(e))},D(e){return e.getDate()},Do(e){return ee(e.getDate())},DD(e){return h(e.getDate())},DDD(e){return A(e)},DDDD(e){return h(A(e),3)},d(e){return e.getDay()},dd(e,t){return this.dddd(e,t).slice(0,2)},ddd(e,t){return t.daysShort[e.getDay()]},dddd(e,t){return t.days[e.getDay()]},E(e){return e.getDay()||7},w(e){return L(e)},ww(e){return h(L(e))},H(e){return e.getHours()},HH(e){return h(e.getHours())},h(e){const t=e.getHours();return t===0?12:t>12?t%12:t},hh(e){return h(this.h(e))},m(e){return e.getMinutes()},mm(e){return h(e.getMinutes())},s(e){return e.getSeconds()},ss(e){return h(e.getSeconds())},S(e){return Math.floor(e.getMilliseconds()/100)},SS(e){return h(Math.floor(e.getMilliseconds()/10))},SSS(e){return h(e.getMilliseconds(),3)},A(e){return this.H(e)<12?"AM":"PM"},a(e){return this.H(e)<12?"am":"pm"},aa(e){return this.H(e)<12?"a.m.":"p.m."},Z(e,t,o,n){const s=n==null?e.getTimezoneOffset():n;return G(s,":")},ZZ(e,t,o,n){const s=n==null?e.getTimezoneOffset():n;return G(s)},X(e){return Math.floor(e.getTime()/1e3)},x(e){return e.getTime()}};function it(e,t,o,n,s){if(e!==0&&!e||e===1/0||e===-1/0)return;const a=new Date(e);if(isNaN(a))return;t===void 0&&(t=ie);const i=ce(o,oe.props);return t.replace(Le,(r,u)=>r in te?te[r](a,i,n,s):u===void 0?r:u.split("\\]").join("]"))}function ct(e){return se(e)===!0?new Date(e.getTime()):e}var dt={isValid:Ke,extractDate:Xe,buildDate:We,getDayOfWeek:Je,getWeekOfYear:L,isBetweenDates:et,addToDate:tt,subtractFromDate:nt,adjustDate:me,startOfDate:_,endOfDate:at,getMaxDate:ot,getMinDate:st,getDateDiff:fe,getDayOfYear:A,inferDateFormat:rt,getDateBetween:lt,isSameDate:ut,daysInMonth:P,formatDate:it,clone:ct};const mt=g("div",{class:"text-h6"},"\u0414\u0430\u043D\u043D\u044B\u0435",-1),ft={class:"row"},ht={class:"col-12 col-md-6"},gt={class:"col-12 col-md-6"},pt={class:"col-12 col-md-6"},vt={class:"col-12 col-md-6"},Dt={class:"col-12 col-md-6"},yt={class:"col-12 col-md-6"},Mt={class:"col-12 col-md-6"},wt=g("h5",null,"\u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435",-1),_t={class:"row"},St={class:"col-12 col-md-6"},Yt={class:"col-12 col-md-6"},xt={class:"col-12 col-md-6"},bt={class:"col-12 col-md-6"},qt={__name:"RequestForm",emits:["add"],setup(e,{emit:t}){const o=le(),n=y(5),s=t,a={},i=["init","waitformeeting","meeting","waitforcoownersdata","waitforuploaddocs","process","success","decline","client","archive","double","lol"],r=["\u0418\u041F","OOO"],u=["\u041D\u0430\u043B\u043E\u0433\u043E\u0432\u0430\u044F \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u044F","SMM - \u0441\u043E\u043F\u0440\u043E\u0432\u043E\u0436\u0434\u0435\u043D\u0438\u0435","\u041F\u043E\u0438\u0441\u043A \u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u043E\u0432"],v=y(""),l=y(""),d=y(""),w=y(""),p=y(""),D=y(""),b=y(""),q=y(""),Q=y(""),$=y(""),V=y(""),he=()=>{v.value="",l.value="",d.value="",w.value="",p.value="",D.value="",b.value="",q.value="",$.value="",V.value=""},ge=()=>{o.isShow=!1},X=()=>{he(),ge()},pe=()=>{const j=Date.now();n.value=n.value+1,a.id=n.value,a.num=n.value+5e3,a.dadd=dt.formatDate(j,"YYYY-MM-DDTHH:mm:ss.SSS"),a.state=v.value,a.lastUpd=a.dadd,a.stg=l.value,a.inn=d.value,a.company_name=V.value,a.person_phone=p.value,a.company_type=Q.value,a.person_fullname=D.value,a.person_email=b.value,a.extra={partner:{client_name:w.value,inn:$.value},crm_source_type:q.value},console.log(a),s("add",a),console.log("rows",o.rows),X()};return(j,f)=>(R(),re("div",null,[m($e,{modelValue:Z(o).isShow,"onUpdate:modelValue":f[11]||(f[11]=c=>Z(o).isShow=c)},{default:M(()=>[m(Qe,null,{default:M(()=>[m(z,{class:"row items-center q-pb-none"},{default:M(()=>[mt,m(Te),we(m(Y,{icon:"close",flat:"",round:"",dense:""},null,512),[[Fe]])]),_:1}),m(z,null,{default:M(()=>[g("div",ft,[g("div",ht,[m(S,{class:"q-ma-xs",label:"\u0424\u0418\u041E",outlined:"",modelValue:D.value,"onUpdate:modelValue":f[0]||(f[0]=c=>D.value=c)},null,8,["modelValue"])]),g("div",gt,[m(S,{class:"q-ma-xs",label:"\u0422\u0435\u043B\u0435\u0444\u043E\u043D",outlined:"",type:"tel",modelValue:p.value,"onUpdate:modelValue":f[1]||(f[1]=c=>p.value=c),rules:[c=>!!c||"\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435!"],mask:"+7 (###) ###-##-##"},null,8,["modelValue","rules"])]),g("div",pt,[m(S,{class:"q-ma-xs",label:"Email",outlined:"",modelValue:b.value,"onUpdate:modelValue":f[2]||(f[2]=c=>b.value=c)},null,8,["modelValue"])]),g("div",vt,[m(S,{class:"q-ma-xs",label:"\u0418\u041D\u041D",outlined:"",modelValue:d.value,"onUpdate:modelValue":f[3]||(f[3]=c=>d.value=c),counter:"",maxlength:"12",mask:"############"},null,8,["modelValue"])]),g("div",Dt,[m(F,{class:"q-ma-xs",label:"\u0421\u0442\u0430\u0442\u0443\u0441*",outlined:"",modelValue:v.value,"onUpdate:modelValue":f[4]||(f[4]=c=>v.value=c),options:i,rules:[c=>!!c||"\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435!"]},null,8,["modelValue","rules"])]),g("div",yt,[m(F,{class:"q-ma-xs",label:"\u0422\u0438\u043F \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438",outlined:"",modelValue:Q.value,"onUpdate:modelValue":f[5]||(f[5]=c=>Q.value=c),options:r},null,8,["modelValue"])]),g("div",Mt,[m(F,{class:"q-ma-xs",label:"\u041F\u0440\u043E\u0434\u0443\u043A\u0442*",rules:[c=>!!c||"\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435!"],outlined:"",modelValue:l.value,"onUpdate:modelValue":f[6]||(f[6]=c=>l.value=c),options:u},null,8,["rules","modelValue"])])]),wt,g("div",_t,[g("div",St,[m(S,{class:"q-ma-xs",label:"\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438*",outlined:"",modelValue:V.value,"onUpdate:modelValue":f[7]||(f[7]=c=>V.value=c),rules:[c=>!!c||"\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435!"]},null,8,["modelValue","rules"])]),g("div",Yt,[m(S,{class:"q-ma-xs",label:"\u041A\u043B\u0438\u0435\u043D\u0442*",outlined:"",modelValue:w.value,"onUpdate:modelValue":f[8]||(f[8]=c=>w.value=c),rules:[c=>!!c||"\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435!"]},null,8,["modelValue","rules"])]),g("div",xt,[m(S,{class:"q-ma-xs",label:"\u0418\u041D\u041D \u043F\u0430\u0440\u0442\u043D\u0435\u0440\u0430",outlined:"",counter:"",maxlength:"12",mask:"############",modelValue:$.value,"onUpdate:modelValue":f[9]||(f[9]=c=>$.value=c)},null,8,["modelValue"])]),g("div",bt,[m(S,{class:"q-ma-xs",label:"CRM",outlined:"",modelValue:q.value,"onUpdate:modelValue":f[10]||(f[10]=c=>q.value=c)},null,8,["modelValue"])])])]),_:1}),m(z,null,{default:M(()=>[m(Y,{color:"primary",class:"q-ml-md",size:"sm",onClick:pe},{default:M(()=>[H("\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C")]),_:1}),m(Y,{color:"grey",class:"q-ml-md",size:"sm",onClick:X},{default:M(()=>[H("\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]))}},$t={class:"q-pa-md d-flex flex-column"},Vt={class:"q-mb-md"},Nt={__name:"RequestPage",setup(e){const t=le(),o=T(()=>t.rows);_e(()=>t.rows,u=>{console.log("novoe znachenie",u)});const n=u=>{t.addNewReq(u)},s=[{name:"num",label:"\u2116 \u0417\u0430\u044F\u0432\u043A\u0438",field:"num"},{name:"stg",label:"\u041F\u0440\u043E\u0434\u0443\u043A\u0442",field:"stg"},{name:"dadd",label:"\u0414\u0430\u0442\u0430",field:u=>a(u.dadd)},{name:"client_name",label:"\u041A\u043B\u0438\u0435\u043D\u0442",field:"client_name"},{name:"state",label:"\u0421\u0442\u0430\u0442\u0443\u0441",field:"state"},{name:"person_phone",label:"\u0422\u0435\u043B\u0435\u0444\u043E\u043D",field:"person_phone"},{name:"action",label:"",field:"id"}],a=u=>{const v=new Date(u),l={year:"numeric",month:"numeric",day:"numeric",hour:"2-digit",minute:"2-digit"};return v.toLocaleDateString("ru-RU",l)},i=Se();async function r(u){await t.getDetails(u),i.push(`/request/${u}`)}return Ye(t.fetchData),(u,v)=>(R(),re("div",$t,[g("div",Vt,[m(Y,{color:"grey-4","text-color":"black",glossy:"",unelevated:"",icon:"add",label:"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443",onClick:v[0]||(v[0]=l=>Z(t).isShow=!0)})]),H(" "+ae(o.value.length)+" ",1),g("div",null,[m(Ie,{columns:s,rows:o.value,onClickBtn:r},null,8,["rows"])]),m(qt,{onAdd:n})]))}};export{Nt as default};
