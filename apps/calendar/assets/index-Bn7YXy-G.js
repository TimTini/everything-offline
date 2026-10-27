(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(e,n={},r=[]){let i=document.createElement(e);for(let[e,r]of Object.entries(n))if(!(r==null||r===!1))if(e===`class`)i.className=r;else if(e===`html`)i.innerHTML=r;else if(e===`text`)i.textContent=r;else if(e===`dataset`)Object.assign(i.dataset,r);else if(e===`style`&&typeof r==`object`)t(i,r);else if(e===`on`)for(let[e,t]of Object.entries(r))i.addEventListener(e,t);else e in i&&e!==`list`?i[e]=r:i.setAttribute(e,r);for(let e of[].concat(r))e==null||e===!1||i.append(e.nodeType?e:document.createTextNode(String(e)));return i}function t(e,t){for(let[n,r]of Object.entries(t))r!=null&&(n.startsWith(`--`)?e.style.setProperty(n,r):e.style[n]=r)}function n(e){return e&&e.replaceChildren(),e}var r=/\bhttps?:\/\/[^\s<>]+|\bwww\.[^\s<>]+|\b[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}\b/gi;function i(e){let t=e;for(;;)if(/[.,;:!?'"”’»]$/.test(t))t=t.slice(0,-1);else if(t.endsWith(`)`)&&(t.match(/\(/g)||[]).length<(t.match(/\)/g)||[]).length)t=t.slice(0,-1);else return t}function a(t){let n=String(t??``),a=[],o=0;for(let t of n.matchAll(r)){let r=i(t[0]);if(!r||/^www\.?$/i.test(r))continue;t.index>o&&a.push(n.slice(o,t.index));let s=/^https?:\/\//i.test(r)?r:r.toLowerCase().startsWith(`www.`)?`https://${r}`:`mailto:${r}`;a.push(e(`a`,{class:`linkified`,href:s,text:r,target:`_blank`,rel:`noopener noreferrer`})),o=t.index+r.length}return o<n.length&&a.push(n.slice(o)),a}var o={"chevron-left":`<polyline points="15 18 9 12 15 6"/>`,"chevron-right":`<polyline points="9 18 15 12 9 6"/>`,"chevron-down":`<polyline points="6 9 12 15 18 9"/>`,plus:`<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>`,menu:`<line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>`,close:`<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>`,trash:`<polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6M14 11v6"/><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/>`,edit:`<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4z"/>`,copy:`<rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>`,check:`<polyline points="20 6 9 17 4 12"/>`,calendar:`<rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>`,clock:`<circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15.5 14"/>`,"map-pin":`<path d="M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>`,"align-left":`<line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="12" x2="14" y2="12"/><line x1="4" y1="18" x2="18" y2="18"/>`,sun:`<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>`,moon:`<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>`,monitor:`<rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>`,search:`<circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>`,repeat:`<polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/>`,bell:`<path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>`,download:`<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>`,upload:`<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/>`,"swap-vertical":`<polyline points="17 3 21 7 17 11"/><line x1="21" y1="7" x2="9" y2="7"/><polyline points="7 21 3 17 7 13"/><line x1="3" y1="17" x2="15" y2="17"/>`,logout:`<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/>`,settings:`<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>`,plane:`<path d="M17.8 19.2 16 11l3.5-3.5c1-1 1-2.6.5-3.1s-2.1-.5-3.1.5L13.4 8.4 5.2 6.6c-.5-.1-1 0-1.4.4l-.7.7 5.5 3.6-3 3-2.5-.5-1 1 3.5 2 2 3.5 1-1-.5-2.5 3-3 3.6 5.5.7-.7c.4-.4.5-.9.4-1.4z"/>`,"calendar-blank":`<rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>`,grid:`<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>`,columns:`<rect x="3" y="4" width="7" height="16" rx="1"/><rect x="14" y="4" width="7" height="16" rx="1"/>`,users:`<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>`,mail:`<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2.5 6.5 8.4 5.6a2 2 0 0 0 2.2 0l8.4-5.6"/>`,link:`<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>`,video:`<path d="m22 8-6 4 6 4V8Z"/><rect x="2" y="6" width="14" height="12" rx="2"/>`,flag:`<path d="M4 21V4.5a.5.5 0 0 1 .3-.46C5.4 3.6 6.9 3.2 8.5 3.2c3 0 4.5 1.6 7 1.6 1.2 0 2.2-.2 3.1-.5a.5.5 0 0 1 .65.47V13a.5.5 0 0 1-.33.47c-.9.33-1.95.53-3.17.53-2.5 0-4-1.6-7-1.6-1.6 0-3.1.4-4.2.84"/>`};function s(e,{size:t=``,className:n=``}={}){let r=o[e];return r?`<span class="icon${t?` icon--${t}`:``}${n?` ${n}`:``}" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${r}</svg></span>`:``}var c=null;function l(){return(!c||!c.isConnected)&&(c=e(`div`,{class:`toaster`,role:`status`,"aria-live":`polite`}),document.body.append(c)),c}function u(t,n={}){let{variant:r=`default`,action:i}=n,a=n.duration??(i?8e3:4e3),o=l(),c=r===`success`?`check`:r===`danger`?`close`:null,u=e(`div`,{class:`toast toast--${r}`,role:r===`danger`?`alert`:`status`},[c?e(`span`,{class:`toast__icon`,html:s(c,{size:`sm`})}):null,e(`span`,{class:`toast__msg`,text:t})]),d,f=()=>{clearTimeout(d),u.classList.add(`is-leaving`),u.addEventListener(`animationend`,()=>u.remove(),{once:!0})};i&&u.append(e(`button`,{class:`toast__action`,type:`button`,text:i.label,on:{click:()=>{f(),i.onClick()}}}));let p=a,m=0,h=()=>{clearTimeout(d),m=Date.now(),d=setTimeout(f,p)},g=()=>{m&&(clearTimeout(d),p=Math.max(1500,p-(Date.now()-m)),m=0)};return u.addEventListener(`pointerenter`,g),u.addEventListener(`focusin`,g),u.addEventListener(`pointerleave`,h),u.addEventListener(`focusout`,e=>{u.contains(e.relatedTarget)||h()}),o.append(u),h(),f}function d(){return typeof puter<`u`&&puter.auth?puter.auth:null}function f(){try{return!!(d()&&d().isSignedIn())}catch{return!1}}async function p(){let e=d();if(!e)throw Error(`Puter SDK is not available.`);return e.signIn()}async function m(){let e=d();e&&await e.signOut()}async function h(){try{return await d().getUser()}catch{return null}}async function g(){try{let e=typeof puter<`u`?puter.perms:null;if(!e||typeof e.request!=`function`)return null;let t=await e.request(`email`);return typeof t==`string`&&t.trim()?t:null}catch{return null}}function _(e){return(e&&(e.username||e.email)||`?`).trim().charAt(0).toUpperCase()||`?`}var v=[{key:`blue`,label:`Blue`,hex:`#3171e0`,fg:`#ffffff`},{key:`indigo`,label:`Indigo`,hex:`#5b5ef4`,fg:`#ffffff`},{key:`violet`,label:`Violet`,hex:`#9355dc`,fg:`#ffffff`},{key:`pink`,label:`Pink`,hex:`#d52f85`,fg:`#ffffff`},{key:`red`,label:`Red`,hex:`#d73b3c`,fg:`#ffffff`},{key:`orange`,label:`Orange`,hex:`#f59e0b`,fg:`#101216`},{key:`green`,label:`Green`,hex:`#088657`,fg:`#ffffff`},{key:`teal`,label:`Teal`,hex:`#078477`,fg:`#ffffff`},{key:`graphite`,label:`Graphite`,hex:`#6b7280`,fg:`#ffffff`}],y=`indigo`,b=new Map(v.map(e=>[e.key,e]));function x(e){return b.has(e)}function S(e){return(b.get(e)||b.get(`indigo`)).hex}function C(e){return(b.get(e)||b.get(`indigo`)).fg}function w(e){return(b.get(e)||b.get(`indigo`)).label}function T(e,t){let n=t&&t[e];return typeof n==`string`&&n.trim()?n.trim():w(e)}function E(e){let t={};if(!e||typeof e!=`object`)return t;for(let[n,r]of Object.entries(e)){if(!x(n)||typeof r!=`string`)continue;let e=r.trim().slice(0,24).trim();!e||e===w(n)||(t[n]=e)}return t}var D=6e4,O=36e5,k=864e5,A=1440,j=[`Sunday`,`Monday`,`Tuesday`,`Wednesday`,`Thursday`,`Friday`,`Saturday`],M=[`Sun`,`Mon`,`Tue`,`Wed`,`Thu`,`Fri`,`Sat`],N=[`S`,`M`,`T`,`W`,`T`,`F`,`S`],P=[`January`,`February`,`March`,`April`,`May`,`June`,`July`,`August`,`September`,`October`,`November`,`December`],F=[`Jan`,`Feb`,`Mar`,`Apr`,`May`,`Jun`,`Jul`,`Aug`,`Sep`,`Oct`,`Nov`,`Dec`];function I(e){return e instanceof Date?new Date(e.getTime()):new Date(e)}function L(e,t){let n=I(e);return n.setDate(n.getDate()+t),n}function ee(e,t){return L(e,t*7)}function R(e,t){let n=I(e),r=n.getDate();return n.setDate(1),n.setFullYear(n.getFullYear()+t),n.setDate(Math.min(r,z(n.getFullYear(),n.getMonth()))),n}function te(e,t){let n=I(e),r=n.getDate();return n.setDate(1),n.setMonth(n.getMonth()+t),n.setDate(Math.min(r,z(n.getFullYear(),n.getMonth()))),n}function ne(e,t){return new Date(I(e).getTime()+t*D)}function z(e,t){return new Date(e,t+1,0).getDate()}function B(e){let t=I(e);return t.setHours(0,0,0,0),t}function V(e){let t=I(e);return t.setHours(23,59,59,999),t}function H(e,t=0){let n=B(e);return L(n,-((n.getDay()-t+7)%7))}function re(e,t=0){return V(L(H(e,t),6))}function U(e){let t=I(e);return new Date(t.getFullYear(),t.getMonth(),1,0,0,0,0)}function ie(e){let t=I(e);return new Date(t.getFullYear(),t.getMonth()+1,0,23,59,59,999)}function W(e,t){let n=I(e),r=I(t);return n.getFullYear()===r.getFullYear()&&n.getMonth()===r.getMonth()&&n.getDate()===r.getDate()}function G(e,t){let n=I(e),r=I(t);return n.getFullYear()===r.getFullYear()&&n.getMonth()===r.getMonth()}function K(e,t=new Date){return W(e,t)}function ae(e){let t=I(e).getDay();return t===0||t===6}function q(e,t){let n=B(t).getTime()-B(e).getTime();return Math.round(n/k)}function oe(e,t=0){let n=H(U(e),t),r=re(ie(e),t),i=[],a=n;for(;a.getTime()<=r.getTime();)i.push(a),a=L(a,1);for(;i.length<35;)i.push(a),a=L(a,1);return i}function se(e,t=0){let n=H(e,t);return Array.from({length:7},(e,t)=>L(n,t))}function J(e=0){let t=Number(e)||0;return Array.from({length:7},(e,n)=>(t+n)%7)}function Y(e){let t=I(e);return t.getHours()*60+t.getMinutes()}function ce(e){return String(e).padStart(2,`0`)}var le=`\xA0`;function X(e,{hour12:t=!0}={}){let n=I(e),r=n.getHours(),i=n.getMinutes();if(!t)return`${ce(r)}:${ce(i)}`;let a=r<12?`AM`:`PM`,o=r%12==0?12:r%12;return i===0?`${o}${le}${a}`:`${o}:${ce(i)}${le}${a}`}function ue(e,{hour12:t=!0}={}){if(!t)return`${ce(e)}:00`;let n=e<12?`AM`:`PM`;return`${e%12==0?12:e%12}${le}${n}`}function de(e){let t=I(e);return`${P[t.getMonth()]} ${t.getFullYear()}`}function fe(e){let t=I(e);return`${F[t.getMonth()]} ${t.getFullYear()}`}function pe(e){let t=I(e);return`${j[t.getDay()]}, ${P[t.getMonth()]} ${t.getDate()}`}function me(e){let t=I(e);return`${M[t.getDay()]}, ${P[t.getMonth()]} ${t.getDate()}, ${t.getFullYear()}`}function he(e,t){let n=I(e),r=I(t),i=F[n.getMonth()],a=F[r.getMonth()],o=n.getFullYear(),s=r.getFullYear();return o===s?n.getMonth()===r.getMonth()?`${i} ${n.getDate()} – ${r.getDate()}, ${o}`:`${i} ${n.getDate()} – ${a} ${r.getDate()}, ${o}`:`${i} ${n.getDate()}, ${o} – ${a} ${r.getDate()}, ${s}`}function ge(e,t=0){let n=H(e,t);return he(n,L(n,6))}function _e(e,t,n){return`${X(e,n)} – ${X(t,n)}`}var ve=[`UTC`,`America/Los_Angeles`,`America/Denver`,`America/Chicago`,`America/New_York`,`America/Sao_Paulo`,`Europe/London`,`Europe/Paris`,`Europe/Berlin`,`Europe/Athens`,`Europe/Moscow`,`Africa/Johannesburg`,`Asia/Dubai`,`Asia/Kolkata`,`Asia/Bangkok`,`Asia/Shanghai`,`Asia/Tokyo`,`Australia/Sydney`,`Pacific/Auckland`];function ye(e){if(!e||typeof e!=`string`)return!1;try{return new Intl.DateTimeFormat(`en-US`,{timeZone:e}),!0}catch{return!1}}function be(e,t,n,r,i,a,o){if(!ye(o))return NaN;let s=Date.UTC(e,t,n,r,i,a),c=xe(s,o),l=s-c,u=xe(l,o);if(u===c)return l;let d=s-u;return xe(d,o)===u?d:l}function xe(e,t){let n=new Intl.DateTimeFormat(`en-US`,{timeZone:t,hour12:!1,year:`numeric`,month:`2-digit`,day:`2-digit`,hour:`2-digit`,minute:`2-digit`,second:`2-digit`}).formatToParts(new Date(e)),r=e=>Number(n.find(t=>t.type===e)?.value);return Date.UTC(r(`year`),r(`month`)-1,r(`day`),r(`hour`),r(`minute`),r(`second`))-e}function Se(e,t){let n=new Intl.DateTimeFormat(`en-US`,{timeZone:t,hour12:!1,hour:`2-digit`,minute:`2-digit`}).formatToParts(I(e)),r=e=>Number(n.find(t=>t.type===e)?.value);return{hour:r(`hour`)%24,minute:r(`minute`)}}function Ce(e,t,{hour12:n=!0}={}){if(!ye(t))return``;let{hour:r,minute:i}=Se(e,t);if(!n)return`${ce(r)}:${ce(i)}`;let a=r<12?`AM`:`PM`,o=r%12==0?12:r%12;return i===0?`${o}${le}${a}`:`${o}:${ce(i)}${le}${a}`}function we(e,t){if(!ye(e))return``;try{return new Intl.DateTimeFormat(`en-US`,{timeZone:e,timeZoneName:`short`}).formatToParts(I(t)).find(e=>e.type===`timeZoneName`)?.value||``}catch{return``}}function Te(e){return e===`UTC`?`UTC`:String(e).split(`/`).pop().replace(/_/g,` `)}function Ee(e){return String(e).split(`/`).slice(1).map(e=>e.replace(/_/g,` `)).reverse().join(`, `)||String(e)}function De(e,t=new Date){if(!ye(e))return NaN;let n=I(t),r=new Intl.DateTimeFormat(`en-US`,{timeZone:e,hour12:!1,year:`numeric`,month:`2-digit`,day:`2-digit`,hour:`2-digit`,minute:`2-digit`}).formatToParts(n),i=e=>Number(r.find(t=>t.type===e)?.value),a=Date.UTC(i(`year`),i(`month`)-1,i(`day`),i(`hour`),i(`minute`)),o=Date.UTC(n.getUTCFullYear(),n.getUTCMonth(),n.getUTCDate(),n.getUTCHours(),n.getUTCMinutes());return Math.round((a-o)/6e4)}function Oe(e){if(!Number.isFinite(e))return``;let t=e<0?`-`:`+`,n=Math.abs(e),r=Math.floor(n/60),i=n%60;return`GMT${t}${r}${i?`:${ce(i)}`:``}`}var ke={America:`Americas`,Arctic:`Europe`,Atlantic:`Atlantic Ocean`,Indian:`Indian Ocean`,Pacific:`Pacific Ocean`},Ae=null,je=``;function Me(e=``){let t=new Date,n=t.toDateString();return(!Ae||je!==n)&&(Ae=Ne(typeof Intl.supportedValuesOf==`function`?Intl.supportedValuesOf(`timeZone`):ve,t),je=n),!e||e===`UTC`||Ae.some(t=>t.zones.some(t=>t.id===e))||!ye(e)?Ae:Ne(Ae.flatMap(e=>e.zones.map(e=>e.id)).concat(e),t)}function Ne(e,t){let n=new Map;for(let r of e){if(!r.includes(`/`))continue;let e=De(r,t);if(!Number.isFinite(e))continue;let i=r.split(`/`)[0],a=ke[i]||i;n.has(a)||n.set(a,[]),n.get(a).push({id:r,city:Ee(r),offset:e})}return[...n.entries()].sort(([e],[t])=>e.localeCompare(t)).map(([e,t])=>({label:e,zones:t.sort((e,t)=>e.city.localeCompare(t.city))}))}function Pe(e){let t=I(e);return`${t.getFullYear()}-${ce(t.getMonth()+1)}-${ce(t.getDate())}`}function Fe(e){let t=I(e);return`${ce(t.getHours())}:${ce(t.getMinutes())}`}function Ie(e,t=`00:00`){let[n,r,i]=e.split(`-`).map(Number),[a,o]=t.split(`:`).map(Number);return new Date(n,r-1,i,a||0,o||0,0,0)}function Le(e,t=30){let n=I(e),r=Math.round((n.getHours()*60+n.getMinutes()+n.getSeconds()/60)/t)*t;return Re(n,Math.min(r,A-t))}function Re(e,t){let n=B(e);return n.setHours(0,t,0,0),n}var ze=1440,Be=[{min:0,label:`At time of event`},{min:5,label:`5 minutes before`},{min:10,label:`10 minutes before`},{min:15,label:`15 minutes before`},{min:30,label:`30 minutes before`},{min:60,label:`1 hour before`},{min:120,label:`2 hours before`},{min:ze,label:`1 day before`}],Ve=12*36e5,He=6e4;function Ue(e){if(!Array.isArray(e))return[];let t=new Set;for(let n of e){if(typeof n!=`number`&&!(typeof n==`string`&&n.trim()!==``))continue;let e=Math.round(Number(n));Number.isFinite(e)&&e>=0&&e<=1440&&t.add(e)}return[...t].sort((e,t)=>e-t).slice(0,5)}function We(e){let t=Be.find(t=>t.min===e);if(t)return t.label;if(e<=0)return`At time of event`;if(e%1440==0){let t=e/1440;return`${t} day${t===1?``:`s`} before`}if(e%60==0){let t=e/60;return`${t} hour${t===1?``:`s`} before`}return`${e} minutes before`}function Ge(){return typeof Notification<`u`}function Ke(){return Ge()?Notification.permission:`denied`}async function qe(){if(!Ge())return`denied`;if(Notification.permission!=="default")return Notification.permission;try{return await Notification.requestPermission()}catch{return Notification.permission}}function Je({store:e,now:t=()=>Date.now()}){let n=new Map,r=new Set,i=null,a=null,o=null;function s(t,n){let r=new Map,i=new Set,a=e.getEventsInRange(t-Ve,t+Ve+ze*6e4,{includeHidden:!0});for(let e of a)if(!(e.allDay||e.declined||!Array.isArray(e.reminders)||!e.reminders.length))for(let a of e.reminders){let o=`${e.id}#${e.start}#${a}`;i.add(o);let s=e.start-a*6e4,c=s>t&&s<=t+Ve,l=n!=null&&s>n&&s<=t&&e.end>t;(c||l)&&r.set(o,{fireAt:s,id:e.id,min:a})}return{schedule:r,live:i}}function c(){if(!Ge()||Notification.permission!==`granted`)return;let e=t(),i=o;o=e;for(let t of r){let n=t.split(`#`),i=Number(n[n.length-2]);Number.isFinite(i)&&i<e-Ve&&r.delete(t)}let{schedule:a,live:c}=s(e,i);for(let[e,t]of n)c.has(e)||(clearTimeout(t),n.delete(e));for(let[t,i]of a){if(n.has(t)||r.has(t))continue;let a=setTimeout(()=>{n.delete(t),r.add(t),l(i)},Math.max(0,i.fireAt-e));n.set(t,a)}}function l({id:n,min:r}){if(!Ge()||Notification.permission!==`granted`)return;let i=e.getEvent(n);if(!i||i.end<=t())return;let a=e.getSettings().hour12,o=[_e(new Date(i.start),new Date(i.end),{hour12:a})];i.location&&o.push(i.location);try{let e=new Notification(i.title||`(Untitled)`,{body:`${Ye(r)}\n${o.join(` · `)}`,tag:`${i.id}#${i.start}#${r}`});e.onclick=()=>{window.focus(),e.close()}}catch{}}function u(){Ge()&&(a=e.subscribe(c),i=setInterval(c,He),c())}function d(){a&&a(),a=null,i&&clearInterval(i),i=null;for(let e of n.values())clearTimeout(e);n.clear(),r.clear(),o=null}return{start:u,stop:d,sync:c}}function Ye(e){if(e<=0)return`Starting now`;if(e>=1440)return`Starts in 1 day`;if(e%60==0){let t=e/60;return`Starts in ${t} hour${t===1?``:`s`}`}return`Starts in ${e} minute${e===1?``:`s`}`}var Xe=[`daily`,`weekly`,`monthly`,`yearly`],Ze=[1,2,3,4,5],Qe=[`first`,`second`,`third`,`fourth`,`fifth`],$e=1e4,et=5e5,tt=864e13;function nt(e,t){if(!e||typeof e!=`object`||!Xe.includes(e.freq))return null;let n=new Date(t),r=e.freq,i=Math.round(Number(e.interval));(!Number.isFinite(i)||i<1)&&(i=1),i=Math.min(i,999);let a=null,o=null;if(r===`weekly`){let t=Array.isArray(e.byWeekday)?e.byWeekday:[],r=new Set(t.map(e=>Math.trunc(Number(e))).filter(e=>Number.isInteger(e)&&e>=0&&e<=6));r.size===0&&r.add(n.getDay()),a=[...r].sort((e,t)=>e-t);let i=Math.trunc(Number(e.wkst));o=Number.isInteger(i)&&i>=0&&i<=6?i:0}let s=null,c=null;if(r===`monthly`&&(s=e.monthlyMode===`weekday`?`weekday`:`date`,s===`weekday`&&e.monthlyNth!=null)){let t=Math.trunc(Number(e.monthlyNth));(t===-1||t>=1&&t<=5)&&(c=t)}let l=null;e.count!=null&&(l=Math.round(Number(e.count)),(!Number.isFinite(l)||l<1)&&(l=1),l=Math.min(l,999));let u=null;if(e.until!=null){let t=Math.round(Number(e.until));Number.isFinite(t)&&(u=t)}return{freq:r,interval:i,byWeekday:a,wkst:o,monthlyMode:s,monthlyNth:c,count:l,until:u}}function rt(e,t=0){return L(e,-((e.getDay()-t+7)%7))}function it(e){let t=new Date(e),n=t.getDate();return{nth:Math.ceil(n/7),weekday:t.getDay(),isLast:n+7>z(t.getFullYear(),t.getMonth())}}function at(e,t,n,r){let i=1+(n-new Date(e,t,1).getDay()+7)%7+(r-1)*7;return i<=z(e,t)?i:null}function ot(e,t,n){let r=z(e,t);return r-(new Date(e,t,r).getDay()-n+7)%7}function st(e,t,n){let r=t.getHours(),i=t.getMinutes(),a=t.getSeconds(),o=t.getMilliseconds();if(e.freq===`daily`)return[L(t,n*e.interval)];if(e.freq===`weekly`){let r=e.wkst||0,i=(t.getDay()-r+7)%7,a=B(t).getTime(),o=[],s=[...e.byWeekday].sort((e,t)=>(e-r+7)%7-(t-r+7)%7);for(let c of s){let s=L(t,n*e.interval*7+(c-r+7)%7-i);s.getTime()>=a&&o.push(s)}return o}if(e.freq===`monthly`){let s=t.getMonth()+n*e.interval,c=t.getFullYear()+Math.floor(s/12),l=(s%12+12)%12;if(e.monthlyMode===`weekday`){let{nth:n,weekday:s}=it(t),u=e.monthlyNth==null?n:e.monthlyNth,d=u===-1?ot(c,l,s):at(c,l,s,u);if(d==null)return[];let f=new Date(c,l,d,r,i,a,o);return f.getTime()>=B(t).getTime()?[f]:[]}let u=t.getDate();return u>z(c,l)?[]:[new Date(c,l,u,r,i,a,o)]}let s=t.getFullYear()+n*e.interval,c=t.getMonth(),l=t.getDate();return l>z(s,c)?[]:[new Date(s,c,l,r,i,a,o)]}function ct(e,t,n){let r=new Date(n),i;if(e.freq===`daily`)i=Math.floor(q(t,r)/e.interval);else if(e.freq===`weekly`)i=Math.floor(q(rt(t,e.wkst||0),r)/7/e.interval);else if(e.freq===`monthly`){let n=(r.getFullYear()-t.getFullYear())*12+(r.getMonth()-t.getMonth());i=Math.floor(n/e.interval)}else i=Math.floor((r.getFullYear()-t.getFullYear())/e.interval);return Number.isFinite(i)?i:0}function lt(e,t,n,r){let i=[];if(!(n<r)||Math.abs(n)>tt||Math.abs(r)>tt)return i;let a=e.until;if(e.count!=null){let o=0,s=0,c=0;for(;c++<$e;){let c=st(e,t,o++);for(let t of c){if(s>=e.count)return i;let o=t.getTime();if(s++,a!=null&&o>a)return i;o>=n&&o<r&&i.push(o)}if(c.length&&c[0].getTime()>=r)return i}return i}let o=Math.max(0,ct(e,t,n)-2),s=0;for(;s++<$e;){let s=st(e,t,o++);if(s.length){for(let e of s){let t=e.getTime();if(a!=null&&t>a)return i;t>=n&&t<r&&i.push(t)}if(s[0].getTime()>=r)return i}}return i}function ut(e,t,n){let r=new Date(t),i=e.until,a=0,o=0,s=0,c=0;for(;c++<et;){let t=st(e,r,a++);for(let r of t){if(e.count!=null&&o>=e.count)return s;let t=r.getTime();if(o++,i!=null&&t>i)return s;if(t<n)s++;else return s}if(t.length&&t[0].getTime()>=n)return s}return s}function dt(e,t,n){let r=nt({...e,count:null},t);if(!r||!(n>=1))return null;let i=new Date(t),a=0,o=0,s=0;for(;s++<$e;)for(let e of st(r,i,a++)){let t=e.getTime();if(r.until!=null&&t>r.until)return null;if(++o===n)return t}return null}function ft(e,t){let n=nt(e,t);if(!n)return t;let r=new Date(t),i=0,a=0;for(;a++<et;)for(let e of st(n,r,i++)){let r=e.getTime();return n.until!=null&&r>n.until?t:r}return t}function pt(e,t,n,r){let i=t=>n&&n[t]!=null?n[t]:e[t],a=!!i(`allDay`),o=t;n&&Number.isFinite(n.start)&&(o=n.start);let s;if(n&&Number.isFinite(n.end))s=n.end;else if(a){let e=Math.max(1,Math.round(r/k));s=V(L(B(new Date(o)),e-1)).getTime()}else s=o+r;return s<=o&&(s=o+(r>0?r:1)),{id:`${e.id}::${t}`,seriesId:e.id,recurrenceId:t,title:i(`title`),description:i(`description`),location:i(`location`),allDay:!!i(`allDay`),color:i(`color`),reminders:Array.isArray(i(`reminders`))?i(`reminders`):[],start:o,end:s,organizer:e.organizer||null,guests:Array.isArray(e.guests)?e.guests:[],meeting:e.meeting||null,ooo:!!i(`ooo`),declined:!!e.declined,createdAt:e.createdAt,updatedAt:e.updatedAt,isOccurrence:!0,isException:!!n}}function mt(e,t){if(!e||!e.recurrence||!nt(e.recurrence,e.start))return null;let n=Math.max(0,e.end-e.start),r=e.overrides||{};return pt(e,Number(t),r[t],n)}function ht(e,t){let n=nt(e&&e.recurrence,e&&e.start);if(!n)return null;let r=new Date(e.start),i=n.until,a=new Set((e.exdates||[]).map(Number)),o=n.count!=null||i!=null?0:Math.max(0,ct(n,r,t)-2),s=0,c=null,l=0;for(;l++<et;){let l=st(n,r,o++);for(let r of l){if(n.count!=null&&s>=n.count)return mt(e,c??e.start);let o=r.getTime();if(s++,i!=null&&o>i)return mt(e,c??e.start);if(!a.has(o)){if(o>=t)return mt(e,o);c=o}}}return mt(e,c??e.start)}function gt(e,t,n){if(!e||!e.recurrence)return[];let r=nt(e.recurrence,e.start);if(!r)return[];let i=new Date(e.start),a=Math.max(0,e.end-e.start),o=new Set((e.exdates||[]).map(Number)),s=e.overrides||{},c=t-a,l=[],u=new Set;for(let d of lt(r,i,c,n)){if(u.add(d),o.has(d))continue;let r=pt(e,d,s[d],a);r.start<n&&r.end>t&&l.push(r)}let d=[];for(let e of Object.keys(s)){let t=Number(e);Number.isFinite(t)&&!u.has(t)&&!o.has(t)&&d.push(t)}let f=d.length&&r.count!=null?new Set(lt(r,i,-864e13,tt)):null;for(let i of d){if(!(f?f.has(i):_t(r,e.start,i)))continue;let o=pt(e,i,s[i],a);o.start<n&&o.end>t&&l.push(o)}return l}function _t(e,t,n){return lt(e,new Date(t),n,n+1).length>0}function vt(e,t){if(!e||!e.recurrence)return!1;let n=nt(e.recurrence,e.start);if(!n)return!1;let r=Number(t);return Number.isFinite(r)&&_t(n,e.start,r)}function yt(e){let t=new Date(e);return`${F[t.getMonth()]} ${t.getDate()}, ${t.getFullYear()}`}function bt(e){return Qe[e-1]||`${e}th`}function xt(e,t){if(!e)return`Does not repeat`;let n=nt(e,t);if(!n)return`Does not repeat`;let r=new Date(t),i=n.interval,a;if(n.freq===`daily`)a=i===1?`Daily`:`Every ${i} days`;else if(n.freq===`weekly`){let e=n.byWeekday;if(e.length===5&&Ze.every(t=>e.includes(t))&&i===1)a=`Every weekday`;else{let t=e.map(e=>M[e]).join(`, `);a=i===1?`Weekly on ${t}`:`Every ${i} weeks on ${t}`}}else if(n.freq===`monthly`)if(n.monthlyMode===`weekday`){let{nth:e,weekday:t}=it(r),o=n.monthlyNth==null?e:n.monthlyNth,s=`the ${o===-1?`last`:bt(o)} ${j[t]}`;a=i===1?`Monthly on ${s}`:`Every ${i} months on ${s}`}else a=i===1?`Monthly on day ${r.getDate()}`:`Every ${i} months on day ${r.getDate()}`;else{let e=`${P[r.getMonth()]} ${r.getDate()}`;a=i===1?`Annually on ${e}`:`Every ${i} years on ${e}`}return n.count==null?n.until!=null&&(a+=`, until ${yt(n.until)}`):a+=`, ${n.count} time${n.count===1?``:`s`}`,a}function St(e){let t=new Date(e),n=t.getDay(),{nth:r}=it(t),i={freq:`monthly`,interval:1,monthlyMode:`weekday`};return r===5&&(i.monthlyNth=-1),[{key:`none`,label:`Does not repeat`,rule:null},{key:`daily`,label:`Daily`,rule:{freq:`daily`,interval:1}},{key:`weekly`,label:`Weekly on ${j[n]}`,rule:{freq:`weekly`,interval:1,byWeekday:[n]}},{key:`monthly`,label:`Monthly on the ${r===5?`last`:bt(r)} ${j[n]}`,rule:i},{key:`yearly`,label:`Annually on ${P[t.getMonth()]} ${t.getDate()}`,rule:{freq:`yearly`,interval:1}},{key:`weekday`,label:`Every weekday (Monday to Friday)`,rule:{freq:`weekly`,interval:1,byWeekday:[...Ze]}},{key:`custom`,label:`Custom…`}]}function Ct(e,t){let n=nt(e,t);if(!n)return`none`;if(n.count!=null||n.until!=null||n.interval!==1)return`custom`;let r=new Date(t);if(n.freq===`daily`)return`daily`;if(n.freq===`weekly`){let e=n.byWeekday;return e.length===1&&e[0]===r.getDay()?`weekly`:e.length===5&&Ze.every(t=>e.includes(t))?`weekday`:`custom`}if(n.freq===`monthly`){if(n.monthlyMode!==`weekday`)return`custom`;let{nth:e}=it(r),t=e===5?-1:e;return(n.monthlyNth==null?e:n.monthlyNth)===t?`monthly`:`custom`}return n.freq===`yearly`?`yearly`:`custom`}var wt=864e5,Z=(e,t,n)=>Date.UTC(e,t-1,n)/wt;function Tt(e){let t=new Date(e*wt);return{y:t.getUTCFullYear(),m:t.getUTCMonth()+1,d:t.getUTCDate()}}var Et=e=>(e%7+11)%7;function Dt(e,t,n,r){if(n>0){let i=Z(e,t,1);return i+(r-Et(i)+7)%7+(n-1)*7}let i=Z(e,t+1,1)-1;return i-(Et(i)-r+7)%7}function Ot(e){let t=e%19,n=Math.floor(e/100),r=e%100,i=Math.floor(n/4),a=n%4,o=Math.floor((n+8)/25),s=Math.floor((n-o+1)/3),c=(19*t+n-i-s+15)%30,l=Math.floor(r/4),u=r%4,d=(32+2*a+2*l-c-u)%7,f=Math.floor((t+11*c+22*d)/451);return{month:Math.floor((c+d-7*f+114)/31),day:(c+d-7*f+114)%31+1}}var kt=e=>{let{month:t,day:n}=Ot(e);return Z(e,t,n)},At=[{id:`us`,name:`United States`,observe:`us`,rules:[{name:`New Year's Day`,month:1,day:1,observe:!0},{name:`Martin Luther King Jr. Day`,month:1,nth:3,dow:1,from:1986},{name:`Presidents' Day`,month:2,nth:3,dow:1},{name:`Memorial Day`,month:5,nth:-1,dow:1},{name:`Juneteenth`,month:6,day:19,from:2021,observe:!0},{name:`Independence Day`,month:7,day:4,observe:!0},{name:`Labor Day`,month:9,nth:1,dow:1},{name:`Columbus Day`,month:10,nth:2,dow:1},{name:`Veterans Day`,month:11,day:11,observe:!0},{name:`Thanksgiving Day`,month:11,nth:4,dow:4},{name:`Christmas Day`,month:12,day:25,observe:!0}]},{id:`uk`,name:`United Kingdom`,observe:`next-weekday`,rules:[{name:`New Year's Day`,month:1,day:1,observe:!0},{name:`Good Friday`,easter:-2},{name:`Easter Monday`,easter:1},{name:`Early May Bank Holiday`,month:5,nth:1,dow:1,from:1978,to:1994},{name:`Early May Bank Holiday`,on:()=>Z(1995,5,8),from:1995,to:1995},{name:`Early May Bank Holiday`,month:5,nth:1,dow:1,from:1996,to:2019},{name:`Early May Bank Holiday`,on:()=>Z(2020,5,8),from:2020,to:2020},{name:`Early May Bank Holiday`,month:5,nth:1,dow:1,from:2021},{name:`Spring Bank Holiday`,month:5,nth:-1,dow:1,to:1976},{name:`Spring Bank Holiday`,on:()=>Z(1977,6,6),from:1977,to:1977},{name:`Silver Jubilee Bank Holiday`,on:()=>Z(1977,6,7),from:1977,to:1977},{name:`Spring Bank Holiday`,month:5,nth:-1,dow:1,from:1978,to:2001},{name:`Golden Jubilee Bank Holiday`,on:()=>Z(2002,6,3),from:2002,to:2002},{name:`Spring Bank Holiday`,on:()=>Z(2002,6,4),from:2002,to:2002},{name:`Spring Bank Holiday`,month:5,nth:-1,dow:1,from:2003,to:2011},{name:`Spring Bank Holiday`,on:()=>Z(2012,6,4),from:2012,to:2012},{name:`Diamond Jubilee Bank Holiday`,on:()=>Z(2012,6,5),from:2012,to:2012},{name:`Spring Bank Holiday`,month:5,nth:-1,dow:1,from:2013,to:2021},{name:`Spring Bank Holiday`,on:()=>Z(2022,6,2),from:2022,to:2022},{name:`Platinum Jubilee Bank Holiday`,on:()=>Z(2022,6,3),from:2022,to:2022},{name:`Spring Bank Holiday`,month:5,nth:-1,dow:1,from:2023},{name:`Royal Wedding Bank Holiday`,on:()=>Z(1981,7,29),from:1981,to:1981},{name:`Millennium Bank Holiday`,on:()=>Z(1999,12,31),from:1999,to:1999},{name:`Royal Wedding Bank Holiday`,on:()=>Z(2011,4,29),from:2011,to:2011},{name:`Bank Holiday for the State Funeral of Queen Elizabeth II`,on:()=>Z(2022,9,19),from:2022,to:2022},{name:`Bank Holiday for the Coronation of King Charles III`,on:()=>Z(2023,5,8),from:2023,to:2023},{name:`Summer Bank Holiday`,month:8,nth:-1,dow:1},{name:`Christmas Day`,month:12,day:25,observe:!0},{name:`Boxing Day`,month:12,day:26,observe:!0}]},{id:`ca`,name:`Canada`,observe:`next-weekday`,rules:[{name:`New Year's Day`,month:1,day:1,observe:!0},{name:`Good Friday`,easter:-2},{name:`Victoria Day`,on:e=>{let t=Z(e,5,24);return t-(Et(t)-1+7)%7}},{name:`Canada Day`,month:7,day:1,observe:!0},{name:`Labour Day`,month:9,nth:1,dow:1},{name:`National Day for Truth and Reconciliation`,month:9,day:30,from:2021,observe:!0},{name:`Thanksgiving Day`,month:10,nth:2,dow:1},{name:`Remembrance Day`,month:11,day:11,observe:!0},{name:`Christmas Day`,month:12,day:25,observe:!0},{name:`Boxing Day`,month:12,day:26,observe:!0}]},{id:`au`,name:`Australia`,observe:`next-weekday`,rules:[{name:`New Year's Day`,month:1,day:1,observe:!0},{name:`Australia Day`,month:1,day:26,observe:!0},{name:`Good Friday`,easter:-2},{name:`Easter Monday`,easter:1},{name:`Anzac Day`,month:4,day:25},{name:`Queen's Birthday`,month:6,nth:2,dow:1,to:2022},{name:`King's Birthday`,month:6,nth:2,dow:1,from:2023},{name:`Christmas Day`,month:12,day:25,observe:!0},{name:`Boxing Day`,month:12,day:26,observe:!0}]},{id:`de`,name:`Germany`,rules:[{name:`New Year's Day`,month:1,day:1},{name:`Good Friday`,easter:-2},{name:`Easter Monday`,easter:1},{name:`Labour Day`,month:5,day:1},{name:`Ascension Day`,easter:39},{name:`Whit Monday`,easter:50},{name:`German Unity Day`,month:6,day:17,to:1990},{name:`German Unity Day`,month:10,day:3,from:1990},{name:`Day of Repentance and Prayer`,on:e=>{let t=Z(e,11,22);return t-(Et(t)-3+7)%7},to:1994},{name:`Christmas Day`,month:12,day:25},{name:`Second Day of Christmas`,month:12,day:26}]},{id:`fr`,name:`France`,rules:[{name:`New Year's Day`,month:1,day:1},{name:`Easter Monday`,easter:1},{name:`Labour Day`,month:5,day:1},{name:`Victory in Europe Day`,month:5,day:8},{name:`Ascension Day`,easter:39},{name:`Whit Monday`,easter:50},{name:`Bastille Day`,month:7,day:14},{name:`Assumption of Mary`,month:8,day:15},{name:`All Saints' Day`,month:11,day:1},{name:`Armistice Day`,month:11,day:11},{name:`Christmas Day`,month:12,day:25}]},{id:`nl`,name:`Netherlands`,rules:[{name:`New Year's Day`,month:1,day:1},{name:`Good Friday`,easter:-2},{name:`Easter Sunday`,easter:0},{name:`Easter Monday`,easter:1},{name:`Queen's Day`,on:e=>{let t=Z(e,4,30);return Et(t)===0?t-1:t},to:2013},{name:`King's Day`,on:e=>{let t=Z(e,4,27);return Et(t)===0?t-1:t},from:2014},{name:`Liberation Day`,month:5,day:5},{name:`Ascension Day`,easter:39},{name:`Whit Sunday`,easter:49},{name:`Whit Monday`,easter:50},{name:`Christmas Day`,month:12,day:25},{name:`Second Day of Christmas`,month:12,day:26}]},{id:`es`,name:`Spain`,rules:[{name:`New Year's Day`,month:1,day:1},{name:`Epiphany`,month:1,day:6},{name:`Good Friday`,easter:-2},{name:`Labour Day`,month:5,day:1},{name:`Assumption of Mary`,month:8,day:15},{name:`National Day`,month:10,day:12},{name:`All Saints' Day`,month:11,day:1},{name:`Constitution Day`,month:12,day:6},{name:`Immaculate Conception`,month:12,day:8},{name:`Christmas Day`,month:12,day:25}]},{id:`in`,name:`India`,rules:[{name:`Republic Day`,month:1,day:26},{name:`Independence Day`,month:8,day:15},{name:`Gandhi Jayanti`,month:10,day:2}]},{id:`jp`,name:`Japan`,observe:`sunday`,bridge:!0,bridgeName:`Citizens' Holiday`,rules:[{name:`New Year's Day`,month:1,day:1,observe:!0},{name:`Coming of Age Day`,month:1,day:15,to:1999,observe:!0},{name:`Coming of Age Day`,month:1,nth:2,dow:1,from:2e3},{name:`National Foundation Day`,month:2,day:11,observe:!0},{name:`Emperor's Birthday`,month:12,day:23,to:2018,observe:!0},{name:`Emperor's Birthday`,month:2,day:23,from:2020,observe:!0},{name:`Vernal Equinox Day`,on:e=>Z(e,3,Math.floor(20.8431+.242194*(e-1980)-Math.floor((e-1980)/4))),observe:!0},{name:`Greenery Day`,month:4,day:29,to:2006,observe:!0},{name:`Showa Day`,month:4,day:29,from:2007,observe:!0},{name:`Emperor's Enthronement Day`,on:()=>Z(2019,5,1),from:2019,to:2019},{name:`Constitution Memorial Day`,month:5,day:3,observe:!0},{name:`Greenery Day`,month:5,day:4,from:2007,observe:!0},{name:`Children's Day`,month:5,day:5,observe:!0},{name:`Marine Day`,month:7,day:20,from:1996,to:2002,observe:!0},{name:`Marine Day`,month:7,nth:3,dow:1,from:2003,to:2019},{name:`Marine Day`,on:()=>Z(2020,7,23),from:2020,to:2020},{name:`Marine Day`,on:()=>Z(2021,7,22),from:2021,to:2021},{name:`Marine Day`,month:7,nth:3,dow:1,from:2022},{name:`Mountain Day`,month:8,day:11,from:2016,to:2019,observe:!0},{name:`Mountain Day`,on:()=>Z(2020,8,10),from:2020,to:2020},{name:`Mountain Day`,on:()=>Z(2021,8,8),from:2021,to:2021,observe:!0},{name:`Mountain Day`,month:8,day:11,from:2022,observe:!0},{name:`Respect for the Aged Day`,month:9,day:15,to:2002,observe:!0},{name:`Respect for the Aged Day`,month:9,nth:3,dow:1,from:2003},{name:`Autumnal Equinox Day`,on:e=>Z(e,9,Math.floor(23.2488+.242194*(e-1980)-Math.floor((e-1980)/4))),observe:!0},{name:`Health and Sports Day`,month:10,nth:2,dow:1,to:2019},{name:`Sports Day`,on:()=>Z(2020,7,24),from:2020,to:2020},{name:`Sports Day`,on:()=>Z(2021,7,23),from:2021,to:2021},{name:`Sports Day`,month:10,nth:2,dow:1,from:2022},{name:`Enthronement Ceremony Day`,on:()=>Z(2019,10,22),from:2019,to:2019},{name:`Culture Day`,month:11,day:3,observe:!0},{name:`Labour Thanksgiving Day`,month:11,day:23,observe:!0}]}],jt=new Map(At.map(e=>[e.id,e])),Mt=At.map(({id:e,name:t})=>({id:e,name:t}));function Nt(e){return jt.has(e)}function Pt(e){let t=jt.get(e);return t?t.name:``}function Ft(e,t){return e.on?e.on(t):e.easter==null?e.nth==null?Z(t,e.month,e.day):Dt(t,e.month,e.nth,e.dow):kt(t)+e.easter}function It(e,t,n){let r=Et(t);if(e===`us`)return r===6?t-1:r===0?t+1:null;if(e===`next-weekday`){if(r!==0&&r!==6)return null;let e=t+(r===6?2:1);for(;Et(e)===0||Et(e)===6||n.has(e);)e+=1;return e}if(e===`sunday`){if(r!==0)return null;let e=t+1;for(;n.has(e);)e+=1;return e}return null}function Lt(e,t){let n=[];for(let r of e.rules){if(r.from!=null&&t<r.from||r.to!=null&&t>r.to)continue;let e=Ft(r,t);Number.isFinite(e)&&n.push({n:e,name:r.name,observe:!!r.observe})}n.sort((e,t)=>e.n-t.n);let r=new Set,i=new Set,a=[];for(let e of n){let t=`${e.n}|${e.name}`;i.has(t)||(i.add(t),r.add(e.n),a.push({n:e.n,name:e.name,observed:!1}))}if(e.observe)for(let t of n){if(!t.observe)continue;let n=It(e.observe,t.n,r);n==null||n===t.n||r.has(n)||(r.add(n),a.push({n,name:`${t.name} (observed)`,observed:!0}))}if(e.bridge){let t=[...r].sort((e,t)=>e-t),n=[];for(let e of t){let t=e+1;r.has(t)||!r.has(t+1)||Et(t)!==0&&n.push(t)}for(let t of n)r.has(t)||(r.add(t),a.push({n:t,name:e.bridgeName||`Public Holiday`,observed:!1,bridged:!0}))}return a.sort((e,t)=>e.n-t.n||e.name.localeCompare(t.name))}var Rt=96,zt=new Map;function Bt(e,t){let n=`${e.id}:${t}`,r=zt.get(n);if(r)return r;let i=new Map,a=Lt(e,t).map(t=>{let{y:n,m:r,d:a}=Tt(t.n),o=`${n}-${String(r).padStart(2,`0`)}-${String(a).padStart(2,`0`)}`,s=i.get(o)||0;return i.set(o,s+1),Object.freeze({id:`hol:${e.id}:${o}${s?`#${s+1}`:``}`,holiday:!0,readOnly:!0,title:t.name,allDay:!0,start:new Date(n,r-1,a).getTime(),end:new Date(n,r-1,a+1).getTime(),observed:!!t.observed,bridged:!!t.bridged,countryId:e.id,countryName:e.name})});return zt.size>=Rt&&zt.delete(zt.keys().next().value),zt.set(n,a),a}var Vt={US:`us`,GB:`uk`,CA:`ca`,AU:`au`,DE:`de`,FR:`fr`,NL:`nl`,ES:`es`,IN:`in`,JP:`jp`},Ht={"Europe/London":`uk`,"Europe/Berlin":`de`,"Europe/Busingen":`de`,"Europe/Paris":`fr`,"Europe/Amsterdam":`nl`,"Europe/Madrid":`es`,"Africa/Ceuta":`es`,"Atlantic/Canary":`es`,"Asia/Kolkata":`in`,"Asia/Calcutta":`in`,"Asia/Tokyo":`jp`,"America/New_York":`us`,"America/Detroit":`us`,"America/Chicago":`us`,"America/Menominee":`us`,"America/Denver":`us`,"America/Boise":`us`,"America/Phoenix":`us`,"America/Los_Angeles":`us`,"America/Anchorage":`us`,"America/Juneau":`us`,"America/Sitka":`us`,"America/Metlakatla":`us`,"America/Yakutat":`us`,"America/Nome":`us`,"America/Adak":`us`,"America/Puerto_Rico":`us`,"Pacific/Honolulu":`us`,"America/Toronto":`ca`,"America/Vancouver":`ca`,"America/Edmonton":`ca`,"America/Winnipeg":`ca`,"America/Halifax":`ca`,"America/St_Johns":`ca`,"America/Regina":`ca`,"America/Moncton":`ca`,"America/Whitehorse":`ca`,"America/Yellowknife":`ca`,"America/Iqaluit":`ca`,"America/Dawson_Creek":`ca`,"America/Fort_Nelson":`ca`,"America/Swift_Current":`ca`,"America/Goose_Bay":`ca`,"America/Glace_Bay":`ca`,"America/Blanc-Sablon":`ca`,"America/Atikokan":`ca`,"America/Cambridge_Bay":`ca`,"America/Inuvik":`ca`,"America/Rankin_Inlet":`ca`,"America/Resolute":`ca`,"America/Creston":`ca`,"America/Dawson":`ca`},Ut=[[`Australia/`,`au`],[`America/Indiana/`,`us`],[`America/Kentucky/`,`us`],[`America/North_Dakota/`,`us`],[`US/`,`us`],[`Canada/`,`ca`]];function Wt(e){if(!e)return``;if(Ht[e])return Ht[e];for(let[t,n]of Ut)if(e.startsWith(t))return n;return``}function Gt(){let e=[];typeof navigator<`u`&&(Array.isArray(navigator.languages)&&e.push(...navigator.languages),navigator.language&&e.push(navigator.language));for(let t of e){let e=``;try{e=new Intl.Locale(t).maximize().region||``}catch{let n=String(t).split(`-`);e=n.length>1?n[1].toUpperCase():``}if(Vt[e])return Vt[e]}return``}var Kt;function qt(){if(Kt!==void 0)return Kt;let e=``;try{e=Intl.DateTimeFormat().resolvedOptions().timeZone||``}catch{}return Kt=Wt(e)||Gt(),Kt}function Jt(e){return e===`auto`||e==null?qt():Nt(e)?e:``}function Yt(e,t,n){let r=jt.get(e);if(!r||!(n>t))return[];let i=new Date(t).getFullYear()-1,a=new Date(n-1).getFullYear()+1,o=[];for(let e=i;e<=a;e++)for(let i of Bt(r,e))i.start<n&&i.end>t&&o.push(i);return o.sort((e,t)=>e.start-t.start||e.title.localeCompare(t.title))}var Xt=6e4,Zt=1440*Xt;function Qt(){try{return Intl.DateTimeFormat().resolvedOptions().timeZone||``}catch{return``}}var $t=new Map;function en(e){let t=$t.get(e);return t||(t=new Intl.DateTimeFormat(`en-US`,{timeZone:e,hour12:!1,year:`numeric`,month:`2-digit`,day:`2-digit`,hour:`2-digit`,minute:`2-digit`}),$t.set(e,t)),t}function tn(e,t){let n=en(t).formatToParts(new Date(e)),r=e=>Number(n.find(t=>t.type===e)?.value),i=Date.UTC(r(`year`),r(`month`)-1,r(`day`),r(`hour`),r(`minute`));return Math.round((i-Math.floor(e/Xt)*Xt)/Xt)}var nn=new Map,rn=64;function an(e,t){let n=`${e}:${t}`,r=nn.get(n);if(r)return r;let i=[],a=Date.UTC(t+1,0,1),o=Date.UTC(t,0,1),s=tn(o,e);for(;o<a;){let t=Math.min(o+Zt,a),n=tn(t,e);if(n!==s){let r=o,a=t;for(;a-r>Xt;){let t=r+Math.floor((a-r)/2/Xt)*Xt;tn(t,e)===s?r=t:a=t}i.push(Object.freeze({at:a,before:s,after:n})),s=n}o=t}let c=Object.freeze(i);return nn.size>=rn&&nn.delete(nn.keys().next().value),nn.set(n,c),c}function on(e,t,n){if(!ye(e)||!(n>t))return[];let r=[],i=new Date(t).getFullYear()-1,a=new Date(n-1).getFullYear()+1;for(let o=i;o<=a;o++)for(let i of an(e,o)){let a=new Date(i.at),o=new Date(a.getFullYear(),a.getMonth(),a.getDate()).getTime(),s=new Date(a.getFullYear(),a.getMonth(),a.getDate()+1).getTime();if(o>=n||s<=t)continue;let c=`${a.getFullYear()}-${String(a.getMonth()+1).padStart(2,`0`)}-${String(a.getDate()).padStart(2,`0`)}`,l=i.after>i.before;r.push(Object.freeze({id:`dst:${e}:${c}`,dst:!0,readOnly:!0,title:l?`Clocks go forward`:`Clocks go back`,allDay:!0,start:o,end:s,at:i.at,before:i.before,after:i.after,zone:e}))}return r}function sn(e){let t=Math.abs(e);return t%60==0?`${t/60} hour${t===60?``:`s`}`:`${t} minutes`}var cn=`cal:evt:`,ln=`cal:task:`,un=`cal:settings`,dn=60*6e4,fn=864e5,pn=`::`,mn=365*fn;function Q(e){let t=2166136261;for(let n=0;n<e.length;n++)t^=e.charCodeAt(n),t=Math.imul(t,16777619);return t>>>0}var hn=25,gn=6,_n=500,vn=8e3;function yn(e){if(!e)return!1;let t=e.code??(e.error&&e.error.code)??e.status;if(t===`too_many_requests`||t===429)return!0;let n=typeof e==`string`?e:e.message||(typeof e.error==`string`?e.error:``);return/too many requests|rate.?limit/i.test(String(n))}var bn=`0123456789abcdef`,xn=500,Sn=512*1024,Cn=typeof TextEncoder<`u`?new TextEncoder:null,wn=e=>Cn?Cn.encode(e).length:e.length*3;function Tn(e){if(e.length>=xn)return!0;let t=0;for(let n of e){let e=n&&n.value;if(t+=wn(typeof e==`string`?e:e?JSON.stringify(e):``),t>=Sn)return!0}return!1}async function En(e,t,n=0){let r=await e.list(`${t}*`,!0)||[];if(n>=3||!Tn(r))return r;let i=await Promise.all([...bn].map(r=>En(e,t+r,n+1))),a=new Map;for(let e of r)e&&typeof e.key==`string`&&a.set(e.key,e);for(let e of i)for(let t of e)t&&typeof t.key==`string`&&a.set(t.key,t);return[...a.values()]}var Dn=Object.freeze({theme:`system`,weekStartsOn:0,hour12:!0,defaultView:`month`,hiddenColors:[],categoryNames:{},categoriesCollapsed:!1,bookingLinksCollapsed:!1,secondaryTz:``,holidayCountry:`auto`,clockChanges:!0,bookingName:``,mailInvites:`known`,mailInvitesCollapsed:!1,mailInvitesShowUnknown:!1});function On(e){return typeof e==`string`?e:``}var kn=new Set([`known`,`never`]);function An(e){return kn.has(e)?e:Dn.mailInvites}function jn(e){return e===!0}function Mn(){return typeof crypto<`u`&&crypto.randomUUID?crypto.randomUUID():`e-`+Math.random().toString(36).slice(2)+Date.now().toString(36)}function Nn(e){return Number.isFinite(e.updatedAt)?e.updatedAt:Date.now()}function Pn(e){if(e==null)return null;if(typeof e==`string`)try{return JSON.parse(e)}catch{return null}return e}var Fn=new Set([`accepted`,`declined`,`tentative`,`needs-action`]),In=200;function Ln(e){let t=typeof e==`string`?e.trim().toLowerCase():``;return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)&&t.length<=254?t:``}function Rn(e){if(!e||typeof e!=`object`)return null;let t=Ln(e.email);if(!t)return null;let n=typeof e.name==`string`?e.name.trim().slice(0,200):``;return n?{email:t,name:n}:{email:t}}function zn(e){if(!Array.isArray(e))return[];let t=[],n=new Set;for(let r of e){if(!r||typeof r!=`object`)continue;let e=Ln(r.email);if(!e||n.has(e))continue;n.add(e);let i=typeof r.name==`string`?r.name.trim().slice(0,200):``,a=Fn.has(r.status)?r.status:`needs-action`,o=i?{email:e,name:i,status:a}:{email:e,status:a};Number.isFinite(r.rsvpAt)&&(o.rsvpAt=Math.round(r.rsvpAt));let s=typeof r.comment==`string`?r.comment.trim().slice(0,500):``;if(s&&(o.comment=s),t.push(o),t.length>=In)break}return t}function Bn(e){if(!e||typeof e!=`object`)return null;let t=typeof e.id==`string`&&/^[a-z0-9]{6,64}$/.test(e.id)?e.id:``;if(!t)return null;let n={id:t};typeof e.pageId==`string`&&e.pageId&&(n.pageId=e.pageId.slice(0,64)),typeof e.pageTitle==`string`&&e.pageTitle.trim()&&(n.pageTitle=e.pageTitle.trim().slice(0,200));let r=Ln(e.email);return r&&(n.email=r),typeof e.name==`string`&&e.name.trim()&&(n.name=e.name.trim().slice(0,200)),n}function Vn(e){if(!e||typeof e!=`object`)return null;let t=typeof e.url==`string`?e.url.trim().slice(0,500):``;if(!/^https?:\/\//i.test(t))return null;let n={url:t};return typeof e.code==`string`&&e.code.trim()&&(n.code=e.code.trim().slice(0,100)),n}function Hn(e){if(!e||typeof e!=`object`)return null;let t=typeof e.uid==`string`?e.uid.trim().slice(0,255):``;if(!t)return null;let n={uid:t,seq:Number.isFinite(e.seq)?Math.max(0,Math.floor(e.seq)):0,stamp:Number.isFinite(e.stamp)?Math.round(e.stamp):0},r=Ln(e.from);r&&(n.from=r);let i=Ln(e.attendee);return i&&(n.attendee=i),n}function Un(e){if(!e||typeof e!=`object`)return null;let t={};return typeof e.title==`string`&&(t.title=e.title.slice(0,500)),typeof e.description==`string`&&(t.description=e.description.slice(0,5e3)),typeof e.location==`string`&&(t.location=e.location.slice(0,500)),typeof e.allDay==`boolean`&&(t.allDay=e.allDay),x(e.color)&&(t.color=e.color),Number.isFinite(e.start)&&(t.start=Math.round(e.start)),Number.isFinite(e.end)&&(t.end=Math.round(e.end)),Array.isArray(e.reminders)&&(t.reminders=Ue(e.reminders)),t}function Wn(e={},t=Date.now()){let n=Number.isFinite(e.start)?Math.round(e.start):t,r=Number.isFinite(e.end)?Math.round(e.end):n+dn,i=!!e.allDay;r<=n?r=i?Math.max(V(new Date(n)).getTime(),n+1):n+dn:i&&(r=Math.max(V(new Date(r-1)).getTime(),n+1));let a={id:typeof e.id==`string`&&e.id?e.id:Mn(),title:typeof e.title==`string`?e.title.slice(0,500):``,description:typeof e.description==`string`?e.description.slice(0,5e3):``,location:typeof e.location==`string`?e.location.slice(0,500):``,start:n,end:r,allDay:i,color:x(e.color)?e.color:y,reminders:Ue(e.reminders),ooo:!!e.ooo,declined:!!e.declined,organizer:Rn(e.organizer),guests:zn(e.guests),createdAt:Number.isFinite(e.createdAt)?e.createdAt:t,updatedAt:t},o=Bn(e.booking);o&&(a.booking=o);let s=Vn(e.meeting);s&&(a.meeting=s);let c=Hn(e.invite);c&&(a.invite=c);let l=nt(e.recurrence,n);if(l){a.recurrence=l,a.exdates=Array.isArray(e.exdates)?[...new Set(e.exdates.filter(Number.isFinite).map(Math.round))].sort((e,t)=>e-t):[],a.overrides={};let t=e.overrides&&typeof e.overrides==`object`?e.overrides:{};for(let[e,n]of Object.entries(t)){let t=Number(e);if(!Number.isFinite(t))continue;let r=Un(n);r&&(a.overrides[t]=r)}}return a}function Gn(e,t,n){return e.start<n&&e.end>t}function Kn(e={},t=Date.now()){let n=!!e.allDay,r=Number.isFinite(e.due)?Math.round(e.due):t;return n&&(r=B(new Date(r)).getTime()),{id:typeof e.id==`string`&&e.id?e.id:Mn(),title:typeof e.title==`string`?e.title.slice(0,500):``,notes:typeof e.notes==`string`?e.notes.slice(0,5e3):``,due:r,allDay:n,done:!!e.done,color:x(e.color)?e.color:y,createdAt:Number.isFinite(e.createdAt)?e.createdAt:t,updatedAt:t,isTask:!0}}function qn(e,t,n){return JSON.stringify(nt(e,n))===JSON.stringify(nt(t,n))}function Jn(e,t,n){let r=nt(e,n),i=nt(t,n);return!r||!i?r===i:r.freq===i.freq&&r.interval===i.interval&&JSON.stringify(r.byWeekday)===JSON.stringify(i.byWeekday)&&r.monthlyMode===i.monthlyMode&&r.monthlyNth===i.monthlyNth&&r.wkst===i.wkst}function Yn(e,t,n,r){if(r){let r=B(new Date(e)),i=Math.max(1,Math.round((n-t)/k));return{start:r.getTime(),end:V(L(r,i-1)).getTime()}}let i=new Date(e),a=new Date(t);i.setHours(a.getHours(),a.getMinutes(),i.getSeconds(),i.getMilliseconds());let o=i.getTime();return{start:o,end:o+Math.max(6e4,n-t)}}function Xn(e){let t=new Map,n=new Map,r={...Dn},i=new Set,a=!1,o=0,s=new Set,c=e=>{let t=Promise.resolve(e);return s.add(t),t.finally(()=>s.delete(t)).catch(()=>{}),e},l={get:(...t)=>e.get(...t),list:(...t)=>e.list(...t),set:(...t)=>(o+=1,c(e.set(...t))),del:(...t)=>(o+=1,c(e.del(...t)))};async function u(e=1e4){let t=Date.now()+e;for(;s.size&&Date.now()<t;){let e=[...s];await Promise.race([Promise.allSettled(e),new Promise(e=>setTimeout(e,Math.max(0,t-Date.now())))])}}function d(){for(let e of i)e()}async function f(e,t,n,r,i){try{return await i()}catch(i){throw e.get(t)===n&&(r?e.set(t,r):e.delete(t),d()),i}}function p(e){return i.add(e),()=>i.delete(e)}async function m(){let e,i,s;for(let t=0;t<3;t++){await u();let t=o;if([e,i,s]=await Promise.all([En(l,cn),En(l,ln),l.get(un)]),o===t)break}t.clear();for(let n of e||[]){let e=Pn(n&&n.value);if(!e||typeof e!=`object`)continue;let r=Wn(e,Nn(e));t.set(r.id,r)}n.clear();for(let e of i||[]){let t=Pn(e&&e.value);if(!t||typeof t!=`object`)continue;let r=Kn(t,Nn(t));n.set(r.id,r)}let c=Pn(s);return r={...Dn,...c||{}},Array.isArray(r.hiddenColors)||(r.hiddenColors=[]),r.bookingName=On(r.bookingName),r.mailInvites=An(r.mailInvites),r.mailInvitesShowUnknown=jn(r.mailInvitesShowUnknown),r.categoryNames=E(r.categoryNames),a=!0,d(),{events:g(),settings:W()}}function h(){if(!a)return null;let e=0;for(let n of t.values())e=e+Q(`${n.id}:${n.updatedAt}`)>>>0;return`${t.size}:${e}`}function g(){return[...t.values()]}function _(e){if(typeof e==`string`&&e.includes(pn)){let n=e.indexOf(pn),r=t.get(e.slice(0,n)),i=e.slice(n+2).trim(),a=i?Number(i):NaN;return r&&r.recurrence&&Number.isFinite(a)&&vt(r,a)&&!(r.exdates||[]).includes(a)?mt(r,a):null}return t.get(e)||null}function v(e,n,{includeHidden:i=!1,includeHolidays:a=!1}={}){let o=new Set(r.hiddenColors),s=[];for(let r of t.values())if(r.recurrence)for(let t of gt(r,e,n))s.push(t);else Gn(r,e,n)&&s.push(r);let c=s.filter(e=>i||!o.has(e.color));return a&&(c.push(...Yt(Jt(r.holidayCountry),e,n)),r.clockChanges&&c.push(...on(Qt(),e,n))),c.sort((e,t)=>Number(t.allDay)-Number(e.allDay)||e.start-t.start||Number(!!t.readOnly)-Number(!!e.readOnly)||Number(!!t.holiday)-Number(!!e.holiday)||t.end-t.start-(e.end-e.start))}function y(e){return e?JSON.parse(JSON.stringify(e)):null}function b(e){return t.set(e.id,e),l.set(cn+e.id,e)}function x(e){let n=Wn(e);return t.set(n.id,n),d(),l.set(cn+n.id,n)}function S(e,n,r,i,a){let o=t.get(e);if(!o||!o.recurrence)return x(a);let s=e=>{let t={...e.overrides||{}};r===void 0?delete t[n]:t[n]=r;let a=i?[...new Set([...e.exdates||[],n])]:(e.exdates||[]).filter(e=>e!==n);return{...e,overrides:t,exdates:a}},c=Wn(s(o));return t.set(c.id,c),d(),j(e,c,e=>!!e.recurrence,s,o).then(e=>(A(e,c)||d(),e))}async function C(e){let n=e.id?t.get(e.id):null,r=Wn({...n,...e});return t.set(r.id,r),d(),await f(t,r.id,r,n,()=>l.set(cn+r.id,r)),r}async function w(e){let n=t.get(e);return n?(t.delete(e),d(),await f(t,e,void 0,n,()=>l.del(cn+e)),n):null}let T=e=>new Promise(t=>setTimeout(t,e));async function D(e){let t=_n;for(let n=1;;n++)try{return await l.set(e.map(e=>({key:cn+e.id,value:e}))),!0}catch(e){if(n>=(yn(e)?gn:2))return!1;await T(t),t=Math.min(t*2,vn)}}async function O(e,{onProgress:n}={}){if(!Array.isArray(e))return{imported:0,failed:0,failedEvents:[]};let r=[];for(let n of e){if(!n||typeof n!=`object`||!Number.isFinite(n.start))continue;let e=Wn({...n,id:void 0});t.set(e.id,e),r.push(e)}if(!r.length)return{imported:0,failed:0,failedEvents:[]};d();let i=0,a=[],o=!1;for(let e=0;e<r.length;e+=hn){let s=r.slice(e,e+hn);if(await D(s))for(let e of s)t.has(e.id)||(t.set(e.id,e),o=!0);else a.push(...s);if(i+=s.length,n)try{n(i,r.length)}catch{}}if(a.length){for(let e of a)t.delete(e.id);d()}else o&&d();return{imported:r.length-a.length,failed:a.length,failedEvents:a}}function A(e,t){return JSON.stringify({...e,updatedAt:0})===JSON.stringify({...t,updatedAt:0})}async function j(e,n,r,i,a){let o=n;try{let t=Pn(await l.get(cn+e));if(t&&typeof t==`object`){let e=Wn(t,Nn(t));e.id===n.id&&r(e)&&(o=Wn(i(e)))}}catch{}return t.set(o.id,o),await f(t,o.id,o,a,()=>l.set(cn+o.id,o)),o}async function M(e,n,r){let i=t.get(e);if(!i||!i.recurrence)return null;let a=Number(n);if(!vt(i,a))return null;let o=i.overrides?i.overrides[a]:void 0,s=(i.exdates||[]).includes(a),c=y(i),l=e=>{let t={...e.overrides||{}};return t[a]={...t[a]||{},...r},{...e,overrides:t,exdates:(e.exdates||[]).filter(e=>e!==a)}},u=Wn(l(i));t.set(u.id,u),d();let f=await j(e,u,e=>!!e.recurrence,l,i);return A(f,u)||d(),{event:f,undo:()=>S(e,a,o,s,c)}}async function N(e,n){let r=t.get(e);if(!r||!r.recurrence)return null;let i=Number(n);if(!vt(r,i))return null;let a=r.overrides?r.overrides[i]:void 0,o=(r.exdates||[]).includes(i),s=y(r),c=e=>{let t={...e.overrides||{}};return delete t[i],{...e,exdates:[...new Set([...e.exdates||[],i])],overrides:t}},l=Wn(c(r));t.set(l.id,l),d();let u=await j(e,l,e=>!!e.recurrence,c,r);return A(u,l)||d(),{event:u,undo:()=>S(e,i,a,o,s)}}async function P(e,n){let r=t.get(e);if(!r||!r.recurrence)return null;let i=y(r),a=n.allDay==null?r.allDay:!!n.allDay,{start:o,end:s}=Number.isFinite(n.start)&&Number.isFinite(n.end)?Yn(r.start,n.start,n.end,a):{start:r.start,end:r.end},c=n.recurrence===void 0?r.recurrence:n.recurrence,u=o!==r.start||s-o!==r.end-r.start||a!==r.allDay,p=!qn(c,r.recurrence,o),m=!u&&!p,h=Wn({...r,title:n.title==null?r.title:n.title,description:n.description==null?r.description:n.description,location:n.location==null?r.location:n.location,color:n.color==null?r.color:n.color,reminders:n.reminders==null?r.reminders:n.reminders,guests:n.guests==null?r.guests:n.guests,organizer:n.organizer===void 0?r.organizer:n.organizer,meeting:n.meeting===void 0?r.meeting:n.meeting,allDay:a,start:o,end:s,recurrence:c,exdates:m?r.exdates:[],overrides:m?r.overrides:{}});return t.set(h.id,h),d(),await f(t,h.id,h,r,()=>l.set(cn+h.id,h)),{event:h,undo:()=>x(i)}}async function F(e,n,r){let i=t.get(e);if(!i||!i.recurrence)return null;let a=Number(n),o=nt(i.recurrence,i.start),s=ut(o,i.start,a);if(s<=0)return P(e,r);let c=y(i),u={...i.recurrence};o.count==null?u.until=B(new Date(a)).getTime()-1:(u.count=s,u.until=null);let p=Wn({...i,recurrence:u,exdates:(i.exdates||[]).filter(e=>e<a),overrides:Object.fromEntries(Object.entries(i.overrides||{}).filter(([e])=>Number(e)<a))}),m=r.allDay==null?i.allDay:!!r.allDay,{start:h,end:g}=Number.isFinite(r.start)&&Number.isFinite(r.end)?Yn(a,r.start,r.end,m):{start:a,end:a+(i.end-i.start)},_=r.recurrence===void 0?i.recurrence:r.recurrence,v=Jn(_,i.recurrence,i.start),x=(_?.count??null)===(o.count??null)&&(_?.until??null)===(o.until??null),S={..._};v&&x&&o.count!=null&&(S.count=Math.max(1,o.count-s));let C=m&&i.allDay?Math.max(1,Math.round((g-h)/k))===Math.max(1,Math.round((i.end-i.start)/k)):g-h===i.end-i.start,w=h!==a||!C||m!==i.allDay||!v,T=w?[]:(i.exdates||[]).filter(e=>e>a),E=w?{}:Object.fromEntries(Object.entries(i.overrides||{}).filter(([e])=>Number(e)>a)),D=Wn({id:void 0,title:r.title==null?i.title:r.title,description:r.description==null?i.description:r.description,location:r.location==null?i.location:r.location,color:r.color==null?i.color:r.color,reminders:r.reminders==null?i.reminders:r.reminders,ooo:i.ooo,declined:i.declined,guests:r.guests==null?i.guests:r.guests,organizer:r.organizer===void 0?i.organizer:r.organizer,meeting:r.meeting===void 0?i.meeting:r.meeting,allDay:m,start:h,end:g,recurrence:S,exdates:T,overrides:E,createdAt:i.createdAt});t.set(p.id,p),t.set(D.id,D),d();try{await b(D)}catch(e){throw t.get(D.id)===D&&t.delete(D.id),t.get(p.id)===p&&t.set(p.id,i),d(),e}return await f(t,p.id,p,i,()=>b(p)),{event:D,truncated:p,undo:async()=>{t.delete(D.id);let e=Wn(c);t.set(e.id,e),d(),await l.set(cn+e.id,e),await l.del(cn+D.id)}}}async function I(e,n){let r=t.get(e);if(!r||!r.recurrence)return null;let i=Number(n),a=nt(r.recurrence,r.start),o=ut(a,r.start,i),s=y(r);if(o<=0)return t.delete(e),d(),await f(t,e,void 0,r,()=>l.del(cn+e)),{undo:()=>x(s)};let c={...r.recurrence};a.count==null?c.until=B(new Date(i)).getTime()-1:(c.count=o,c.until=null);let u=Wn({...r,recurrence:c,exdates:(r.exdates||[]).filter(e=>e<i),overrides:Object.fromEntries(Object.entries(r.overrides||{}).filter(([e])=>Number(e)<i))});return t.set(u.id,u),d(),await f(t,u.id,u,r,()=>l.set(cn+u.id,u)),{event:u,undo:()=>x(s)}}function L(e,t){if(!e.recurrence)return[[e.start,e.end]];let n=Math.max(e.start,t)+mn;return gt(e,e.start,n).map(e=>[e.start,e.end])}async function ee(e,{now:n=Date.now()}={}){if(!e||!e.ooo||!Number.isFinite(e.start)||!Number.isFinite(e.end))return{declined:[],undo:()=>{}};let r=L(e,n),i=[];for(let n of t.values())n.id===e.id||n.ooo||n.allDay||n.recurrence||n.declined||r.some(([e,t])=>n.start<t&&n.end>e)&&i.push(n);if(!i.length)return{declined:[],undo:()=>{}};let a=i.map(e=>e.id);for(let e of i){let n=Wn({...e,declined:!0});t.set(n.id,n)}d();let o=a.map(e=>t.get(e)),s=[],c=!1;for(let e=0;e<o.length;e+=hn){let n=o.slice(e,e+hn);if(await D(n)){s.push(...n);for(let e of n){let n=t.get(e.id);n&&!n.declined&&n.updatedAt<=e.updatedAt&&(t.set(e.id,e),c=!0)}continue}for(let e of i)t.set(e.id,e);throw d(),s.length&&await D(i.filter(e=>s.some(t=>t.id===e.id))),Error(`out of office: could not update the overlapping events`)}return c&&d(),{declined:a,undo:async()=>{let e=[];for(let n of a){let r=t.get(n);if(!r||!r.declined)continue;let i=Wn({...r,declined:!1});t.set(i.id,i),e.push(i)}if(e.length){d();for(let t=0;t<e.length;t+=hn)if(!await D(e.slice(t,t+hn)))throw Error(`out of office: could not undo every event`)}}}}async function R(e,n){let r=t.get(e);return r?C({...r,declined:!!n}):null}async function te(e,n,r){let i=t.get(e),a=typeof r==`string`?r.trim().toLowerCase():``;if(!i||!a||!Fn.has(n)||!(i.guests||[]).some(e=>e.email===a))return null;let o=e=>({...e,guests:(e.guests||[]).map(e=>e.email===a?{...e,status:n}:e),declined:n===`declined`}),s=Wn(o(i));t.set(s.id,s),d();let c=await j(e,s,()=>!0,o,i);return A(c,s)||d(),c}async function ne(e,n){let r=t.get(e);if(!r||!Array.isArray(n))return null;let i=new Map;for(let e of n)e&&typeof e.email==`string`&&i.set(e.email.trim().toLowerCase(),e);let a=e=>{let t=!1,n=(e||[]).map(e=>{let n=i.get(e.email);if(!n||!Fn.has(n.status))return e;let r=Number.isFinite(n.respondedAt)?Math.round(n.respondedAt):0;if(r<=(e.rsvpAt||0))return e;t=!0;let a={...e,status:n.status,rsvpAt:r},o=typeof n.comment==`string`?n.comment.trim().slice(0,500):``;return o?a.comment=o:delete a.comment,a});return{changed:t,guests:n}};if(!a(r.guests).changed)return null;let o=e=>({...e,guests:a(e.guests).guests}),s=Wn(o(r));t.set(s.id,s),d();let c=await j(e,s,()=>!0,o,r);return A(c,s)||d(),c}function z(){return[...n.values()]}function V(e){return n.get(e)||null}function H(e,t,{includeHidden:i=!1}={}){let a=new Set(r.hiddenColors),o=[];for(let r of n.values())r.due<e||r.due>=t||!i&&a.has(r.color)||o.push(r);return o.sort((e,t)=>Number(e.done)-Number(t.done)||e.due-t.due||Number(e.allDay)-Number(t.allDay))}async function re(e){let t=e.id?n.get(e.id):null,r=Kn({...t,...e});return n.set(r.id,r),d(),await f(n,r.id,r,t,()=>l.set(ln+r.id,r)),r}async function U(e){let t=n.get(e);return t?re({...t,done:!t.done}):null}async function ie(e){let t=n.get(e);return t?(n.delete(e),d(),await f(n,e,void 0,t,()=>l.del(ln+e)),t):null}function W(){return{...r}}let G=Promise.resolve(),K=[];async function ae(e){let t={...r,...e};e.categoryNames&&(t.categoryNames={...r.categoryNames||{},...e.categoryNames}),r=t,d(),K.push(e);let n=G.then(async()=>{let e=K.slice();try{let e=Pn(await l.get(un));if(e&&typeof e==`object`){let t=K.reduce((e,t)=>{let n={...e,...t};return t.categoryNames&&(n.categoryNames={...e.categoryNames||{},...t.categoryNames}),n},{...Dn,...e});Array.isArray(t.hiddenColors)||(t.hiddenColors=[]),t.bookingName=On(t.bookingName),t.mailInvites=An(t.mailInvites),t.mailInvitesShowUnknown=jn(t.mailInvitesShowUnknown),t.categoryNames=E(t.categoryNames),JSON.stringify(t)!==JSON.stringify(r)&&(r=t,d())}}catch{}await l.set(un,r);for(let t of e){let e=K.indexOf(t);e!==-1&&K.splice(e,1)}});return G=n.catch(()=>{}),await n,W()}return{load:m,subscribe:p,revision:h,getAllEvents:g,getEvent:_,getEventsInRange:v,saveEvent:C,deleteEvent:w,importEvents:O,updateOccurrence:M,deleteOccurrence:N,updateSeries:P,updateFuture:F,deleteFuture:I,applyOutOfOffice:ee,setDeclined:R,rsvpEvent:te,applyRsvpResponses:ne,getAllTasks:z,getTask:V,getTasksInRange:H,saveTask:re,toggleTask:U,deleteTask:ie,getSettings:W,saveSettings:ae}}var Zn=class extends Error{constructor(){super(`Offline: writes are disabled until you reconnect.`),this.name=`OfflineWriteError`}};function Qn(e){return e instanceof Zn}var $n=`You're offline — reconnect to make changes`,er=3e3,tr=8e3,nr=new Set([`saveEvent`,`deleteEvent`,`importEvents`,`updateOccurrence`,`deleteOccurrence`,`updateSeries`,`updateFuture`,`deleteFuture`,`applyOutOfOffice`,`setDeclined`,`rsvpEvent`,`applyRsvpResponses`,`saveTask`,`toggleTask`,`deleteTask`]),rr=!1;function ir(){return rr}function ar({toast:t,onReconnectRefresh:n}){let r=null,i=!1,a=0,o=null,s=null;function c(){o||(o=e(`div`,{class:`offline-banner`,role:`status`,"aria-live":`polite`},[e(`span`,{class:`offline-banner__dot`,"aria-hidden":`true`}),e(`span`,{text:`Offline — showing your last synced calendar`})]),document.body.append(o)),document.documentElement.classList.add(`is-offline`)}function l(){document.documentElement.classList.remove(`is-offline`),o&&(o.remove(),o=null)}function u(e){rr=e,e?c():l()}function d(){let e=Date.now();if(e-a>er&&(a=e,t($n)),r)try{r()}catch{}}function f(){if(document.querySelector(`.modal-scrim, .dialog-scrim, .ctx-menu`))return!0;let e=document.activeElement,t=(e&&e.tagName||``).toLowerCase();return t===`input`||t===`textarea`||t===`select`}async function p(){if(!(!rr||i)&&!(!navigator.onLine||f())){i=!0;try{await n()&&u(!1)}catch{}finally{i=!1}}}window.addEventListener(`offline`,()=>u(!0)),window.addEventListener(`online`,()=>p()),s=setInterval(p,tr),window.addEventListener(`unhandledrejection`,e=>{Qn(e.reason)&&e.preventDefault()});function m(e){let t={};for(let n of Object.keys(e)){let r=e[n];typeof r==`function`?nr.has(n)?t[n]=(...t)=>rr?(d(),Promise.reject(new Zn)):r.apply(e,t):n===`saveSettings`?t[n]=(...t)=>Promise.resolve(r.apply(e,t)).catch(()=>{}):t[n]=(...t)=>r.apply(e,t):t[n]=r}return t}return{gate:m,bindRender(e){r=e},start({online:e}){u(!e)},isBlocked:ir,stop(){s&&clearInterval(s),s=null}}}function or(t,{onRetry:n}={}){t.replaceChildren(),t.removeAttribute(`aria-busy`);let r=e(`button`,{class:`btn btn--primary btn--block`,type:`button`,text:`Retry`});n&&r.addEventListener(`click`,()=>n()),t.append(e(`div`,{class:`screen`},[e(`div`,{class:`auth-card`},[e(`img`,{class:`auth-card__logo`,src:`/icon-192.png`,alt:`Calendar`,width:`56`,height:`56`}),e(`h1`,{class:`auth-card__title`,text:`You're offline`}),e(`p`,{class:`auth-card__sub`,text:`Reconnect to load your calendar. Your events are safe in your Puter storage.`}),r])]))}var sr=`cal:profile-pic`,cr=2*1024*1024;function lr(e){return typeof e==`string`&&/^data:image\//i.test(e)&&e.length<=cr}function ur(e){return typeof e==`string`&&/^[a-zA-Z0-9_.-]+$/.test(e)&&!e.startsWith(`.`)}var dr=()=>ir()||typeof navigator<`u`&&navigator.onLine===!1;async function fr(e){if(!ur(e)||dr())return{state:`unknown`};let t=typeof puter<`u`&&puter.auth;if(!t||typeof t.getProfilePicture!=`function`)return{state:`unknown`};try{let n=await t.getProfilePicture(e);return dr()?{state:`unknown`}:lr(n)?{state:`found`,picture:n}:{state:`none`}}catch{return{state:`unknown`}}}var pr=160,mr=64*1024;function hr(e){return new Promise(t=>{if(typeof Image!=`function`||typeof document>`u`)return t(null);let n=new Image;n.onload=()=>{try{let e=n.naturalWidth||n.width,r=n.naturalHeight||n.height,i=Math.min(e,r);if(!i)return t(null);let a=document.createElement(`canvas`);a.width=pr,a.height=pr;let o=typeof a.getContext==`function`?a.getContext(`2d`):null;if(!o||typeof a.toDataURL!=`function`)return t(null);o.fillStyle=`#ffffff`,o.fillRect(0,0,pr,pr),o.drawImage(n,(e-i)/2,(r-i)/2,i,i,0,0,pr,pr);let s=a.toDataURL(`image/jpeg`,.86);t(lr(s)?s:null)}catch{t(null)}},n.onerror=()=>t(null),n.src=e})}function gr(e){return e.length<=mr?Promise.resolve(e):hr(e).then(e=>e&&e.length<=mr?e:null)}async function _r(e){let t=e&&typeof e.username==`string`?e.username:``,n=e&&(e.uuid||e.id||e.username)||``,r=await fr(t),i=r.state===`found`?r.picture:r.state===`unknown`?yr(n):``;if(!i)return r;let a=await gr(i);return a?{state:`found`,picture:a}:{state:`unknown`}}var vr=0;function yr(e){try{let t=localStorage.getItem(sr);if(!t)return null;let n=JSON.parse(t);return!n||e&&n.user!==e?null:lr(n.picture)?n.picture:null}catch{return null}}function br(e,t,n){if(!(!e||n!==vr))try{localStorage.setItem(sr,JSON.stringify({user:e,picture:t}))}catch{}}function xr(){vr+=1,Sr()}function Sr(){try{localStorage.removeItem(sr)}catch{}}var Cr=new WeakMap;function wr(e){let t=Cr.get(e);return t||(t={seq:0,letter:e.textContent,src:null,inflight:null},Cr.set(e,t)),t}function Tr(e,t){if(!e||!lr(t))return Promise.resolve(!1);let n=wr(e);if(n.src===t)return Promise.resolve(!0);if(n.inflight&&n.inflight.src===t)return n.inflight.promise;if(typeof Image!=`function`)return Promise.resolve(!1);let r=++n.seq,i=new Image,a=new Promise(a=>{let o=e=>{n.inflight&&n.inflight.src===t&&(n.inflight=null),a(e)};i.onload=()=>{if(n.seq!==r)return o(!1);let a=typeof HTMLImageElement==`function`&&i instanceof HTMLImageElement?i:document.createElement(`img`);a.className=`avatar__img`,a.alt=``,a.draggable=!1,a!==i&&(a.src=t),e.replaceChildren(a),n.src=t,o(!0)},i.onerror=()=>o(!1)});return n.inflight={src:t,promise:a},i.src=t,a}function Er(e){let t=wr(e);t.seq+=1,t.src!=null&&(e.replaceChildren(document.createTextNode(t.letter)),t.src=null)}function Dr(e,t){let n=t&&typeof t.username==`string`?t.username:``,r=t&&(t.uuid||t.id||t.username)||``,i=vr,a=yr(r);return a&&Tr(e,a),fr(n).then(t=>{if(t.state===`found`)return Tr(e,t.picture).then(e=>{e&&t.picture!==a&&br(r,t.picture,i)});t.state===`none`&&(Sr(),Er(e))}).catch(()=>{})}var Or=`cal:snapshot`;function kr(){try{let e=localStorage.getItem(Or);if(!e)return null;let t=JSON.parse(e);return!t||typeof t!=`object`||!t.entries?null:t}catch{return null}}function Ar(e){let t=!0,n=null,r=0;function i(e){try{let t=kr()||{userId:n,ts:0,entries:{}};e(t),n&&(t.userId=n),t.ts=Date.now(),localStorage.setItem(Or,JSON.stringify(t))}catch{}}function a(e){return String(e??``).replace(/\*$/,``)}async function o(n,o){try{let t=await e.list(n,o),r=a(n),s=Array.isArray(t)?t:[],c=Tn(s);return i(e=>{if(!c)for(let t of Object.keys(e.entries))t.startsWith(r)&&delete e.entries[t];for(let t of s)t&&typeof t.key==`string`&&(e.entries[t.key]=t.value)}),t}catch(e){t=!1;let i=kr();if(!i)throw e;r+=1;let o=a(n);return Object.keys(i.entries).filter(e=>e.startsWith(o)).map(e=>({key:e,value:i.entries[e]}))}}async function s(n){try{let t=await e.get(n);return i(e=>{e.entries[n]=t}),t}catch(e){t=!1;let i=kr();if(!i)throw e;return r+=1,n in i.entries?i.entries[n]:null}}async function c(t,n){let r=await e.set(t,n);return i(e=>{if(Array.isArray(t))for(let n of t)n&&typeof n.key==`string`&&(e.entries[n.key]=n.value);else e.entries[t]=n}),r}async function l(t){let n=await e.del(t);return i(e=>{delete e.entries[t]}),n}return{list:o,get:s,set:c,del:l,resetReachable(){t=!0},wasOffline(){return t===!1},fallbackCount(){return r},hasSnapshot(){return kr()!=null},ensureUser(e){if(n=e||null,!n)return;let t=kr();t&&t.userId&&t.userId!==n&&this.clearSnapshot()},clearSnapshot(){try{localStorage.removeItem(Or)}catch{}}}}function jr(){try{localStorage.removeItem(Or)}catch{}}var Mr=15,Nr=1440,Pr=2,Fr=0;function Ir(){return typeof window<`u`&&typeof window.matchMedia==`function`&&window.matchMedia(`(pointer: coarse)`).matches}function Lr(e){return!!(e&&typeof e.getAttribute==`function`&&e.getAttribute(`aria-expanded`)===`true`)}function Rr(e){let t=String(e??``).trim().toLowerCase().replace(/\s+(?=[ap])/g,``);if(!t)return null;if(t===`noon`)return 720;if(t===`midnight`)return 0;t=t.replace(/(\d)\.(\d)/g,`$1:$2`).replace(/\./g,``);let n=/^(\d{1,2})(?::(\d{1,2}))?(am?|pm?)?$/.exec(t)||/^(\d{1,2})(\d{2})(am?|pm?)?$/.exec(t);if(!n)return null;let r=Number(n[1]),i=n[2]?Number(n[2]):0;if(i>59)return null;if(n[3]){if(r<1||r>12)return null;r=r%12+(n[3][0]===`p`?12:0)}else if(r>23)return null;return r*60+i}var zr=e=>String(e).padStart(2,`0`);function Br(e,t=!0){let n=Math.floor(e/60),r=e%60;return t?`${n%12==0?12:n%12}:${zr(r)} ${n<12?`AM`:`PM`}`:`${zr(n)}:${zr(r)}`}function Vr(e,{long:t=!1}={}){let n=Math.floor(e/60),r=e%60,i=[];return n&&i.push(t?`${n} ${n===1?`hour`:`hours`}`:`${n} hr`),(r||!n)&&i.push(t?`${r} ${r===1?`minute`:`minutes`}`:`${r} min`),i.join(` `)}function Hr(e){let t=/^(\d{1,2}):(\d{2})$/.exec(String(e??``).trim());if(!t)return null;let n=Number(t[1]),r=Number(t[2]);return n>23||r>59?null:n*60+r}function Ur(e){return`${zr(Math.floor(e/60))}:${zr(e%60)}`}function Wr(){let e=new Date;return e.getHours()*60+e.getMinutes()}var Gr=class extends EventTarget{constructor({label:t,hour12:n=!0,step:r=Mr,after:i=null,className:a=``,native:o=Ir()}={}){super(),this._hour12=n,this._after=i,this._step=r,this._native=o,this._minutes=null,this.el=e(`div`,{class:`time-field${a?` ${a}`:``}`}),o?this._buildNative(t):this._buildCombobox(t),this._render()}get value(){if(this._native)return this.input.value;let e=Rr(this.input.value)??this._minutes;return e==null?``:Ur(e)}set value(e){this._native?this.input.value=e??``:this._minutes=Hr(e),this._render()}get hidden(){return this.el.hidden}set hidden(e){this.el.hidden=!!e}focus(){this.input.focus()}_buildNative(t){this.input=e(`input`,{class:`input time-field__input`,type:`time`,"aria-label":t}),this.input.addEventListener(`change`,()=>{this._render(),this.dispatchEvent(new Event(`change`))}),this.el.append(this.input)}_buildCombobox(t){let n=`time-field-list-${++Fr}`;this.input=e(`input`,{class:`input time-field__input`,type:`text`,role:`combobox`,autocomplete:`off`,"aria-label":t,"aria-haspopup":`listbox`,"aria-expanded":`false`,"aria-autocomplete":`none`,"aria-controls":n}),this.input.setAttribute(`spellcheck`,`false`),this.list=e(`div`,{class:`time-field__list`,id:n,role:`listbox`,hidden:!0,"aria-label":t?`${t} choices`:`Time choices`}),this.options=[];for(let t=0;t<Nr;t+=this._step){let r=this.options.length,i=e(`div`,{class:`time-field__option`,role:`option`,id:`${n}-${r}`,"aria-selected":`false`,dataset:{min:String(t)}});i.addEventListener(`click`,()=>{this._commitMinutes(t),this._close()}),i.addEventListener(`pointermove`,()=>{let e=this._posOf[r];e>=0&&this._active!==e&&this._setActive(e,{reveal:!1})}),this.options.push(i),this.list.append(i)}this._order=this.options.map((e,t)=>t),this._posOf=this._order.slice(),this._afterMinutes=null,this._layoutKey=null,this._active=-1,this._floats=typeof this.list.showPopover==`function`,this._floats&&this.list.setAttribute(`popover`,`manual`),this._reposition=e=>{e&&e.target===this.list||(this.el.isConnected?this._position():this._close())},this.list.addEventListener(`pointerdown`,e=>e.preventDefault());let r=!1;this.input.addEventListener(`focus`,()=>{this.input.select(),r=!0,this._open()}),this.input.addEventListener(`mouseup`,e=>{r&&e.preventDefault(),r=!1}),this.input.addEventListener(`click`,()=>this._open()),this.input.addEventListener(`input`,()=>{this._open(),this._showMinutes(Rr(this.input.value))}),this.input.addEventListener(`keydown`,e=>this._onKeydown(e)),this.input.addEventListener(`change`,()=>this._commitText()),this.input.addEventListener(`blur`,()=>{this._close(),this._render()}),this.el.append(this.input,this.list)}_resolveHour12(){return typeof this._hour12==`function`?!!this._hour12():!!this._hour12}_render(){this._native||(this.input.value=this._minutes==null?``:Br(this._minutes,this._resolveHour12())),this.el.dataset.value=this.value}_resolveAfter(){return Hr(typeof this._after==`function`?this._after():this._after)}_offset(e){return this._afterMinutes==null?e:(e-this._afterMinutes+Nr)%Nr}_positionAtOrBefore(e){let t=this._offset(e),n=-1;for(let e=0;e<this._order.length&&this._offset(this._order[e]*this._step)<=t;e++)n=e;return n}_layout(){let t=this._resolveHour12(),n=this._resolveAfter(),r=`${t}|${n}`;if(r===this._layoutKey)return;this._setActive(-1),this._layoutKey=r,this._afterMinutes=n;let i=this.options.map((e,t)=>t);n==null?this._order=i:this._order=i.filter(e=>e*this._step!==n).sort((e,t)=>this._offset(e*this._step)-this._offset(t*this._step)),this._posOf=i.map(()=>-1),this._order.forEach((e,t)=>this._posOf[e]=t);for(let r of this._order){let i=this.options[r],a=r*this._step,o=Br(a,t);if(i.textContent=o,n==null)i.removeAttribute(`aria-label`);else{let t=this._offset(a);i.append(e(`span`,{class:`time-field__duration`,text:Vr(t)})),i.setAttribute(`aria-label`,`${o}, ${Vr(t,{long:!0})}`)}}this.list.replaceChildren(...this._order.map(e=>this.options[e]))}_open(){this.list.hidden&&(this._layout(),this.list.hidden=!1,this._floats&&(this.list.showPopover(),this._position(),document.addEventListener(`scroll`,this._reposition,!0),window.addEventListener(`resize`,this._reposition)),this.input.setAttribute(`aria-expanded`,`true`),this._showMinutes(this._minutes))}_close(){this.list.hidden||(this.list.hidden=!0,this._floats&&(this.list.matches(`:popover-open`)&&this.list.hidePopover(),document.removeEventListener(`scroll`,this._reposition,!0),window.removeEventListener(`resize`,this._reposition)),this.input.setAttribute(`aria-expanded`,`false`),this._setActive(-1))}_position(){let e=this.input.getBoundingClientRect();this.list.style.minWidth=`${e.width}px`;let t=this.list.scrollWidth+(this.list.offsetWidth-this.list.clientWidth);t>this.list.offsetWidth&&(this.list.style.minWidth=`${t}px`);let n=this.list.offsetWidth,r=this.list.offsetHeight,i=window.innerHeight-e.bottom-4,a=i<r&&e.top-4>i;this.list.style.left=`${Math.max(0,Math.min(e.left,window.innerWidth-4-n))}px`,this.list.style.top=`${a?e.top-4-r:e.bottom+4}px`}_showMinutes(e){let t=e??Wr(),n=this.options[this._order[Math.max(0,this._positionAtOrBefore(t))]];this.list.scrollTop=Math.max(0,n.offsetTop-Pr*n.offsetHeight);let r=e!=null&&e%this._step===0?this._posOf[e/this._step]:-1;this._setActive(r,{reveal:!1})}_setActive(e,{reveal:t=!0}={}){if(this._active>=0&&this.options[this._order[this._active]].setAttribute(`aria-selected`,`false`),this._active=e,e<0){this.input.removeAttribute(`aria-activedescendant`);return}let n=this.options[this._order[e]];n.setAttribute(`aria-selected`,`true`),this.input.setAttribute(`aria-activedescendant`,n.id),t&&this._reveal(n)}_reveal(e){let t=e.offsetTop,n=t+e.offsetHeight;t<this.list.scrollTop?this.list.scrollTop=t:n>this.list.scrollTop+this.list.clientHeight&&(this.list.scrollTop=n-this.list.clientHeight)}_move(e){this._open();let t;if(this._active>=0)t=this._active+e;else{let n=Rr(this.input.value)??this._minutes??Wr(),r=this._positionAtOrBefore(n),i=r>=0&&this._offset(this._order[r]*this._step)===this._offset(n);t=e>0&&!i?r+1:r}this._setActive(Math.max(0,Math.min(this._order.length-1,t)))}_onKeydown(e){if(e.isComposing||e.keyCode===229)return;let t=!this.list.hidden;if(e.key===`ArrowDown`||e.key===`ArrowUp`)e.preventDefault(),this._move(e.key===`ArrowDown`?1:-1);else if(e.key===`Enter`){if(!t){this._commitText();return}e.preventDefault(),this._active>=0?this._commitMinutes(this._order[this._active]*this._step):this._commitText(),this._close()}else e.key===`Escape`&&t&&(e.preventDefault(),e.stopPropagation(),this._render(),this._close())}_commitText(){let e=Rr(this.input.value);e==null?this._render():this._commitMinutes(e)}_commitMinutes(e){let t=e!==this._minutes;this._minutes=e,this._render(),t&&this.dispatchEvent(new Event(`change`))}};function Kr(e){return new Gr(e)}var qr=[{unit:`day`,freq:`daily`,label:`day`},{unit:`week`,freq:`weekly`,label:`week`},{unit:`month`,freq:`monthly`,label:`month`},{unit:`year`,freq:`yearly`,label:`year`}];function Jr(t,n){let r=document.activeElement,i=e(`div`,{class:`modal-scrim dialog-scrim`},[t]);function a(){document.removeEventListener(`keydown`,o,!0),i.remove(),r&&r.focus&&r.focus(),n&&n()}function o(e){let n=document.querySelectorAll(`.dialog-scrim`);if(n[n.length-1]!==i||e.isComposing||e.keyCode===229||e.key===`Escape`&&Lr(e.target))return;if(e.key===`Escape`){e.preventDefault(),e.stopPropagation(),a();return}if(e.key!==`Tab`)return;let r=[...t.querySelectorAll(`button, input, textarea, select, a[href], [tabindex]:not([tabindex="-1"])`)].filter(e=>e.offsetParent!==null||e===document.activeElement);if(!r.length)return;let o=r[0],s=r[r.length-1],c=document.activeElement,l=(e,t)=>e===t||e.type===`radio`&&t.type===`radio`&&!!e.name&&e.name===t.name,u=e=>e.type===`radio`&&r.find(t=>t.type===`radio`&&t.name===e.name&&t.checked)||e;t.contains(c)?e.shiftKey&&l(c,o)?(e.preventDefault(),u(s).focus()):!e.shiftKey&&l(c,s)&&(e.preventDefault(),u(o).focus()):(e.preventDefault(),u(e.shiftKey?s:o).focus())}return i.addEventListener(`pointerdown`,e=>{e.target===i&&a()}),document.addEventListener(`keydown`,o,!0),document.body.append(i),a}function Yr({rule:t,startMs:n,anchorMs:r=n,weekStartsOn:i=0,onDone:a}){let o=new Date(n),c=new Date(r),l=qr.find(e=>e.freq===(t&&t.freq))?.unit||`week`,u=new Set(t&&Array.isArray(t.byWeekday)&&t.byWeekday.length?t.byWeekday:[o.getDay()]),d=e(`input`,{class:`input rr-num`,type:`number`,min:`1`,max:`999`,value:String(t&&t.interval>1?t.interval:1),"aria-label":`Repeat interval`}),f=e(`select`,{class:`select rr-unit`,"aria-label":`Repeat unit`});qr.forEach(t=>{let n=e(`option`,{value:t.unit,text:t.label});t.unit===l&&(n.selected=!0),f.append(n)});let p=e(`div`,{class:`rr-weekdays`,role:`group`,"aria-label":`Repeat on`});J(i).forEach(t=>{let n=e(`button`,{class:`rr-weekday`,type:`button`,text:N[t],"aria-label":j[t],"aria-pressed":String(u.has(t)),on:{click:()=>{u.has(t)?u.delete(t):u.add(t),u.size===0&&u.add(t),n.setAttribute(`aria-pressed`,String(u.has(t))),h()}}});n.dataset.day=String(t),p.append(n)});let m=e(`div`,{class:`field rr-on`},[e(`span`,{class:`field__label`,text:`Repeat on`}),p]);function h(){p.querySelectorAll(`.rr-weekday`).forEach(e=>{e.setAttribute(`aria-pressed`,String(u.has(Number(e.dataset.day))))})}let g=t&&t.monthlyMode===`weekday`&&Number.isInteger(t.monthlyNth)&&t.monthlyNth>=1&&t.monthlyNth<=5?t.monthlyNth:null,_=o.getDate()+7>z(o.getFullYear(),o.getMonth()),v=e(`select`,{class:`select`,"aria-label":`Monthly repeat mode`});v.append(e(`option`,{value:`date`,text:`Monthly on day ${o.getDate()}`})),v.append(e(`option`,{value:`weekday`,text:Xr(o,g)})),(_||t&&t.monthlyNth===-1)&&v.append(e(`option`,{value:`weekday-last`,text:`Monthly on the last ${j[o.getDay()]}`})),t&&t.monthlyMode===`weekday`&&(v.value=t.monthlyNth===-1?`weekday-last`:`weekday`);let y=e(`div`,{class:`field rr-monthly`},[v]),b=t&&t.until?new Date(t.until):ee(o,13),x=t&&t.count!=null?`after`:t&&t.until!=null?`on`:`never`,S=e(`input`,{class:`input`,type:`date`,value:Pe(b),min:Pe(c),"aria-label":`End date`}),C=e(`input`,{class:`input rr-num`,type:`number`,min:`1`,max:`999`,value:String(t&&t.count!=null?t.count:13),"aria-label":`Number of occurrences`}),w={};function T(t,n){let r=e(`input`,{type:`radio`,name:`rr-ends`,value:t});return t===x&&(r.checked=!0),r.addEventListener(`change`,D),w[t]=r,e(`label`,{class:`rr-ends-row`},[r,n])}let E=e(`div`,{class:`field`},[e(`span`,{class:`field__label`,text:`Ends`}),T(`never`,e(`span`,{text:`Never`})),T(`on`,e(`span`,{class:`rr-ends-line`},[e(`span`,{text:`On`}),S])),T(`after`,e(`span`,{class:`rr-ends-line`},[e(`span`,{text:`After`}),C,e(`span`,{class:`muted`,text:`occurrences`})]))]);function D(){S.disabled=!w.on.checked,C.disabled=!w.after.checked}function O(){l=f.value,m.style.display=l===`week`?``:`none`,y.style.display=l===`month`?``:`none`}f.addEventListener(`change`,O);let k=e(`form`,{class:`modal rr-modal`,role:`dialog`,"aria-modal":`true`,"aria-labelledby":`rr-title`},[e(`div`,{class:`modal__head`},[e(`h2`,{class:`modal__title`,id:`rr-title`,text:`Custom recurrence`}),e(`button`,{class:`icon-btn`,type:`button`,"aria-label":`Close`,html:s(`close`),on:{click:()=>M()}})]),e(`div`,{class:`modal__body`},[e(`div`,{class:`field`},[e(`span`,{class:`field__label`,text:`Repeat every`}),e(`div`,{class:`rr-every`},[d,f])]),m,y,E]),e(`div`,{class:`modal__foot`},[e(`div`,{class:`spacer`}),e(`button`,{class:`btn`,type:`button`,text:`Cancel`,on:{click:()=>M()}}),e(`button`,{class:`btn btn--primary`,type:`submit`,text:`Done`})])]);k.addEventListener(`submit`,e=>{e.preventDefault(),a(A()),M()});function A(){let e=qr.find(e=>e.unit===f.value),n=Math.round(Number(d.value));(!Number.isFinite(n)||n<1)&&(n=1);let i={freq:e.freq,interval:n};if(e.freq===`weekly`&&(i.byWeekday=[...u].sort((e,t)=>e-t),t&&t.freq===`weekly`&&Number.isInteger(t.wkst)&&t.wkst>=1&&t.wkst<=6&&(i.wkst=t.wkst)),e.freq===`monthly`&&(i.monthlyMode=v.value===`date`?`date`:`weekday`,v.value===`weekday-last`?i.monthlyNth=-1:v.value===`weekday`&&g!=null&&(i.monthlyNth=g)),w.on.checked){let e=Ie(S.value,`00:00`),t=V(Number.isNaN(e.getTime())?ee(o,13):e).getTime();t<r&&(t=V(c).getTime()),i.until=t}else if(w.after.checked){let e=Math.round(Number(C.value));(!Number.isFinite(e)||e<1)&&(e=1),i.count=e}return i}let M=Jr(k);O(),D(),requestAnimationFrame(()=>d.focus())}function Xr(e,t=null){let n=t??Math.ceil(e.getDate()/7);return`Monthly on the ${[`first`,`second`,`third`,`fourth`,`fifth`][n-1]||`${n}th`} ${j[e.getDay()]}`}var Zr=[{value:`one`,label:`This event`},{value:`future`,label:`This and following events`},{value:`all`,label:`All events`}];function Qr({mode:t=`edit`,allowOne:n=!0,onConfirm:r}){let i=n?Zr:Zr.filter(e=>e.value!==`one`),a=i[0].value,o=t===`delete`?`Delete recurring event`:`Edit recurring event`,s=t===`delete`?`Delete`:`OK`,c=e(`div`,{class:`field`,role:`radiogroup`,"aria-label":o});i.forEach((t,n)=>{let r=e(`input`,{type:`radio`,name:`rr-scope`,value:t.value});n===0&&(r.checked=!0),r.addEventListener(`change`,()=>a=t.value),c.append(e(`label`,{class:`rr-ends-row`},[r,e(`span`,{text:t.label})]))});let l=e(`form`,{class:`modal rr-modal rr-scope`,role:`dialog`,"aria-modal":`true`,"aria-labelledby":`rr-scope-title`},[e(`div`,{class:`modal__head`},[e(`h2`,{class:`modal__title`,id:`rr-scope-title`,text:o})]),e(`div`,{class:`modal__body`},[c]),e(`div`,{class:`modal__foot`},[e(`div`,{class:`spacer`}),e(`button`,{class:`btn`,type:`button`,text:`Cancel`,on:{click:()=>u()}}),e(`button`,{class:`btn ${t===`delete`?`btn--danger`:`btn--primary`}`,type:`submit`,text:s})])]);l.addEventListener(`submit`,e=>{e.preventDefault();let t=a;u(),r(t)});let u=Jr(l);requestAnimationFrame(()=>l.querySelector(`input[type="radio"]`).focus())}var $r={"Dateline Standard Time":`Etc/GMT+12`,"UTC-11":`Etc/GMT+11`,"Aleutian Standard Time":`America/Adak`,"Hawaiian Standard Time":`Pacific/Honolulu`,"Marquesas Standard Time":`Pacific/Marquesas`,"Alaskan Standard Time":`America/Anchorage`,"UTC-09":`Etc/GMT+9`,"Pacific Standard Time (Mexico)":`America/Tijuana`,"UTC-08":`Etc/GMT+8`,"Pacific Standard Time":`America/Los_Angeles`,"US Mountain Standard Time":`America/Phoenix`,"Mountain Standard Time (Mexico)":`America/Chihuahua`,"Mountain Standard Time":`America/Denver`,"Central America Standard Time":`America/Guatemala`,"Central Standard Time":`America/Chicago`,"Easter Island Standard Time":`Pacific/Easter`,"Central Standard Time (Mexico)":`America/Mexico_City`,"Canada Central Standard Time":`America/Regina`,"SA Pacific Standard Time":`America/Bogota`,"Eastern Standard Time (Mexico)":`America/Cancun`,"Eastern Standard Time":`America/New_York`,"Haiti Standard Time":`America/Port-au-Prince`,"Cuba Standard Time":`America/Havana`,"US Eastern Standard Time":`America/Indianapolis`,"Turks And Caicos Standard Time":`America/Grand_Turk`,"Paraguay Standard Time":`America/Asuncion`,"Atlantic Standard Time":`America/Halifax`,"Venezuela Standard Time":`America/Caracas`,"Central Brazilian Standard Time":`America/Cuiaba`,"SA Western Standard Time":`America/La_Paz`,"Pacific SA Standard Time":`America/Santiago`,"Newfoundland Standard Time":`America/St_Johns`,"Tocantins Standard Time":`America/Araguaina`,"E. South America Standard Time":`America/Sao_Paulo`,"SA Eastern Standard Time":`America/Cayenne`,"Argentina Standard Time":`America/Buenos_Aires`,"Greenland Standard Time":`America/Godthab`,"Montevideo Standard Time":`America/Montevideo`,"Magallanes Standard Time":`America/Punta_Arenas`,"Saint Pierre Standard Time":`America/Miquelon`,"Bahia Standard Time":`America/Bahia`,"UTC-02":`Etc/GMT+2`,"Mid-Atlantic Standard Time":`Etc/GMT+2`,"Azores Standard Time":`Atlantic/Azores`,"Cape Verde Standard Time":`Atlantic/Cape_Verde`,UTC:`Etc/UTC`,"GMT Standard Time":`Europe/London`,"Greenwich Standard Time":`Atlantic/Reykjavik`,"Sao Tome Standard Time":`Africa/Sao_Tome`,"Morocco Standard Time":`Africa/Casablanca`,"W. Europe Standard Time":`Europe/Berlin`,"Central Europe Standard Time":`Europe/Budapest`,"Romance Standard Time":`Europe/Paris`,"Central European Standard Time":`Europe/Warsaw`,"W. Central Africa Standard Time":`Africa/Lagos`,"Jordan Standard Time":`Asia/Amman`,"GTB Standard Time":`Europe/Bucharest`,"Middle East Standard Time":`Asia/Beirut`,"Egypt Standard Time":`Africa/Cairo`,"E. Europe Standard Time":`Europe/Chisinau`,"Syria Standard Time":`Asia/Damascus`,"West Bank Standard Time":`Asia/Hebron`,"South Africa Standard Time":`Africa/Johannesburg`,"FLE Standard Time":`Europe/Kiev`,"Israel Standard Time":`Asia/Jerusalem`,"Kaliningrad Standard Time":`Europe/Kaliningrad`,"Sudan Standard Time":`Africa/Khartoum`,"Libya Standard Time":`Africa/Tripoli`,"Namibia Standard Time":`Africa/Windhoek`,"Arabic Standard Time":`Asia/Baghdad`,"Turkey Standard Time":`Europe/Istanbul`,"Arab Standard Time":`Asia/Riyadh`,"Belarus Standard Time":`Europe/Minsk`,"Russian Standard Time":`Europe/Moscow`,"E. Africa Standard Time":`Africa/Nairobi`,"Iran Standard Time":`Asia/Tehran`,"Arabian Standard Time":`Asia/Dubai`,"Astrakhan Standard Time":`Europe/Astrakhan`,"Azerbaijan Standard Time":`Asia/Baku`,"Russia Time Zone 3":`Europe/Samara`,"Mauritius Standard Time":`Indian/Mauritius`,"Saratov Standard Time":`Europe/Saratov`,"Georgian Standard Time":`Asia/Tbilisi`,"Volgograd Standard Time":`Europe/Volgograd`,"Caucasus Standard Time":`Asia/Yerevan`,"Afghanistan Standard Time":`Asia/Kabul`,"West Asia Standard Time":`Asia/Tashkent`,"Ekaterinburg Standard Time":`Asia/Yekaterinburg`,"Pakistan Standard Time":`Asia/Karachi`,"Qyzylorda Standard Time":`Asia/Qyzylorda`,"India Standard Time":`Asia/Calcutta`,"Sri Lanka Standard Time":`Asia/Colombo`,"Nepal Standard Time":`Asia/Katmandu`,"Central Asia Standard Time":`Asia/Almaty`,"Bangladesh Standard Time":`Asia/Dhaka`,"Omsk Standard Time":`Asia/Omsk`,"Myanmar Standard Time":`Asia/Rangoon`,"SE Asia Standard Time":`Asia/Bangkok`,"Altai Standard Time":`Asia/Barnaul`,"W. Mongolia Standard Time":`Asia/Hovd`,"North Asia Standard Time":`Asia/Krasnoyarsk`,"N. Central Asia Standard Time":`Asia/Novosibirsk`,"Tomsk Standard Time":`Asia/Tomsk`,"China Standard Time":`Asia/Shanghai`,"North Asia East Standard Time":`Asia/Irkutsk`,"Singapore Standard Time":`Asia/Singapore`,"W. Australia Standard Time":`Australia/Perth`,"Taipei Standard Time":`Asia/Taipei`,"Ulaanbaatar Standard Time":`Asia/Ulaanbaatar`,"Aus Central W. Standard Time":`Australia/Eucla`,"Transbaikal Standard Time":`Asia/Chita`,"Tokyo Standard Time":`Asia/Tokyo`,"North Korea Standard Time":`Asia/Pyongyang`,"Korea Standard Time":`Asia/Seoul`,"Yakutsk Standard Time":`Asia/Yakutsk`,"Cen. Australia Standard Time":`Australia/Adelaide`,"AUS Central Standard Time":`Australia/Darwin`,"E. Australia Standard Time":`Australia/Brisbane`,"AUS Eastern Standard Time":`Australia/Sydney`,"West Pacific Standard Time":`Pacific/Port_Moresby`,"Tasmania Standard Time":`Australia/Hobart`,"Vladivostok Standard Time":`Asia/Vladivostok`,"Lord Howe Standard Time":`Australia/Lord_Howe`,"Bougainville Standard Time":`Pacific/Bougainville`,"Russia Time Zone 10":`Asia/Srednekolymsk`,"Magadan Standard Time":`Asia/Magadan`,"Norfolk Standard Time":`Pacific/Norfolk`,"Sakhalin Standard Time":`Asia/Sakhalin`,"Central Pacific Standard Time":`Pacific/Guadalcanal`,"Russia Time Zone 11":`Asia/Kamchatka`,"New Zealand Standard Time":`Pacific/Auckland`,"UTC+12":`Etc/GMT-12`,"Fiji Standard Time":`Pacific/Fiji`,"Chatham Islands Standard Time":`Pacific/Chatham`,"UTC+13":`Etc/GMT-13`,"Tonga Standard Time":`Pacific/Tongatapu`,"Samoa Standard Time":`Pacific/Apia`,"Line Islands Standard Time":`Pacific/Kiritimati`};function ei(e){let t=typeof e==`string`?e.trim():``;if(!t)return``;let n=/^\/[^/]+\/[^/]+\/(.+)$/.exec(t);return n?n[1]:$r[t]||t}var ti=`-//Calendar//Puter//EN`,ni=[`SU`,`MO`,`TU`,`WE`,`TH`,`FR`,`SA`],ri={accepted:`ACCEPTED`,declined:`DECLINED`,tentative:`TENTATIVE`,"needs-action":`NEEDS-ACTION`},ii={ACCEPTED:`accepted`,DECLINED:`declined`,TENTATIVE:`tentative`,"NEEDS-ACTION":`needs-action`,DELEGATED:`needs-action`};function ai(e,{now:t=Date.now(),method:n=``,tzid:r=``,sequence:i=null,status:a=``,recurrenceId:o=null,recurrenceRange:s=``,uid:c=``}={}){if(s&&(s!==`THISANDFUTURE`||o==null))throw Error(`Invalid recurrence range.`);let l=[`BEGIN:VCALENDAR`,`VERSION:2.0`,`PRODID:${ti}`,`CALSCALE:GREGORIAN`];n&&l.push(`METHOD:${n}`);let u=/^[A-Za-z0-9_+/-]{1,80}$/.test(r)?r:``,d=/^[A-Za-z-]{1,40}$/.test(a)?a.toUpperCase():``,f=Number.isFinite(i)?Math.max(0,Math.floor(i)):null,p=vi(t),m=String(c||``).replace(/\p{Cc}/gu,``).trim().slice(0,255),h=!n;for(let t of e)oi(l,t,p,u,f,d,h,o,s,m);return l.push(`END:VCALENDAR`),l.map(xi).join(`\r
`)+`\r
`}function oi(e,t,n,r,i,a,o,s,c,l){let u=l||`${t.id}@calendar.puter.com`;if(s!=null){let l=Number.isFinite(s)&&mt(t,s);if(!l)throw Error(`Cannot export this occurrence.`);si(e,l,{uid:u,stamp:n,tzid:r,sequence:i,status:a,alarms:o,recurrenceId:s,recurrenceRange:c,isOverride:!0,masterAllDay:t.allDay});return}if(si(e,t,{uid:u,stamp:n,tzid:r,sequence:i,status:a,alarms:o}),t.recurrence&&t.overrides)for(let s of Object.keys(t.overrides)){let c=Number(s);if(!Number.isFinite(c))continue;let l=mt(t,c);l&&si(e,l,{uid:u,stamp:n,tzid:r,sequence:i,status:a,alarms:o,recurrenceId:c,isOverride:!0,masterAllDay:t.allDay})}}function si(e,t,{uid:n,stamp:r,tzid:i,sequence:a,status:o,alarms:s,recurrenceId:c,recurrenceRange:l,isOverride:u,masterAllDay:d}){let f=i?`;TZID=${i}`:``;if(e.push(`BEGIN:VEVENT`),e.push(`UID:${n}`),e.push(`DTSTAMP:${r}`),a!=null&&e.push(`SEQUENCE:${a}`),o&&e.push(`STATUS:${o}`),c!=null){let n=d??t.allDay,r=l?`;RANGE=${l}`:``;e.push(n?`RECURRENCE-ID;VALUE=DATE${r}:${_i(c)}`:`RECURRENCE-ID${f}${r}:${gi(c)}`)}let p=t.start,m=t.end;if(!u&&t.recurrence){let e=ft(t.recurrence,t.start);if(e!==t.start){if(t.allDay){let n=Math.max(1,Math.round((t.end-t.start)/k));m=V(L(B(new Date(e)),n-1)).getTime()}else m=e+(t.end-t.start);p=e}}t.allDay?(e.push(`DTSTART;VALUE=DATE:${_i(p)}`),e.push(`DTEND;VALUE=DATE:${_i(L(B(new Date(m)),1).getTime())}`)):(e.push(`DTSTART${f}:${gi(p)}`),e.push(`DTEND${f}:${gi(m)}`)),e.push(`SUMMARY:${yi(t.title||``)}`);let h=t.meeting&&t.meeting.url||``,g=h?`${t.description?`${t.description}\n\n`:``}Join: ${h}`:t.description;if(t.location&&e.push(`LOCATION:${yi(t.location)}`),g&&e.push(`DESCRIPTION:${yi(g)}`),h){let t=h.replace(/[\s\u0000-\u001f]/g,``);e.push(`URL:${t}`),e.push(`X-GOOGLE-CONFERENCE:${t}`),e.push(`CONFERENCE;VALUE=URI;FEATURE=VIDEO:${t}`)}t.organizer&&t.organizer.email&&e.push(`ORGANIZER${Ii(t.organizer.name)}:mailto:${t.organizer.email}`);for(let n of t.guests||[])!n||!n.email||e.push(`ATTENDEE${Ii(n.name)};PARTSTAT=${ri[n.status]||`NEEDS-ACTION`};RSVP=TRUE:mailto:${n.email}`);if(!u&&t.recurrence){let n=ci(t,i);n&&e.push(`RRULE:${n}`);let r=t.exdates||[];r.length&&e.push(t.allDay?`EXDATE;VALUE=DATE:${r.map(_i).join(`,`)}`:`EXDATE${f}:${r.map(gi).join(`,`)}`)}if(s)for(let n of Array.isArray(t.reminders)?t.reminders:[])!Number.isFinite(n)||n<0||(e.push(`BEGIN:VALARM`),e.push(`ACTION:DISPLAY`),e.push(`TRIGGER:${n>0?`-PT${Math.round(n)}M`:`PT0S`}`),e.push(`DESCRIPTION:${yi(t.title||`Reminder`)}`),e.push(`END:VALARM`));e.push(`END:VEVENT`)}function ci(e,t){let n=nt(e.recurrence,e.start);if(!n)return null;let r=[`FREQ=${n.freq.toUpperCase()}`];if(n.interval>1&&r.push(`INTERVAL=${n.interval}`),n.freq===`weekly`&&n.byWeekday&&(r.push(`BYDAY=${n.byWeekday.map(e=>ni[e]).join(`,`)}`),n.interval>1&&r.push(`WKST=${ni[n.wkst||0]}`)),n.freq===`monthly`)if(n.monthlyMode===`weekday`){let{nth:t,weekday:i}=it(new Date(e.start)),a=n.monthlyNth==null?t:n.monthlyNth;r.push(`BYDAY=${a}${ni[i]}`)}else r.push(`BYMONTHDAY=${new Date(e.start).getDate()}`);return n.count==null?n.until!=null&&r.push(`UNTIL=${e.allDay?_i(n.until):t?vi(n.until):gi(n.until)}`):r.push(`COUNT=${n.count}`),r.join(`;`)}function li(e){let t=Si(String(e)),n=[],r=null,i=0,a=null,o=``;for(let e of t)if(!r&&/^METHOD[;:]/i.test(e))o=e.slice(e.indexOf(`:`)+1).trim().toUpperCase();else if(/^BEGIN:VEVENT$/i.test(e))r=[],r.alarms=[],i=0,a=null;else if(/^END:VEVENT$/i.test(e))r&&n.push(r),r=null,i=0,a=null;else if(r){if(/^BEGIN:/i.test(e))i++,i===1&&/^BEGIN:VALARM$/i.test(e)&&(a=[]);else if(/^END:/i.test(e))i===1&&a&&(r.alarms.push(a),a=null),i>0&&i--;else if(i===0){let t=Ci(e);t&&r.push(t)}else if(i===1&&a){let t=Ci(e);t&&a.push(t)}}return{method:o,blocks:n}}function ui(e){let{method:t,blocks:n}=li(e),r=e=>t===`CANCEL`||(Ei(e,`STATUS`)||``).trim().toUpperCase()===`CANCELLED`,i=new Map,a=[];for(let e of n){let t=Ei(e,`UID`),n=!!wi(e,`RECURRENCE-ID`);if(!t){a.push(e);continue}i.has(t)||i.set(t,{master:null,overrides:[]});let r=i.get(t);n?r.overrides.push(e):r.master?a.push(e):r.master=e}let o=[];for(let e of i.values()){if(e.master&&r(e.master))continue;let t=e.master?pi(e.master):null,n=t&&t.recurrence;if(n&&e.overrides.length){t.overrides={};for(let n of e.overrides){let i=wi(n,`RECURRENCE-ID`),a=wi(e.master,`DTSTART`),o=t.allDay?Di(i&&{value:i.value,params:`VALUE=DATE`}).ms:ji(i,Ai(a),a,t.start);if(r(n)){Number.isFinite(o)&&(t.exdates||(t.exdates=[])).push(o);continue}let s=pi(n),c={};for(let e of[`title`,`description`,`location`,`allDay`])s[e]!==t[e]&&(c[e]=s[e]);JSON.stringify(s.reminders??null)!==JSON.stringify(t.reminders??null)&&(c.reminders=s.reminders||[]),Number.isFinite(s.start)&&(c.start=s.start),Number.isFinite(s.end)&&(c.end=s.end),t.overrides[o]=c}}if(t&&o.push(t),!n)for(let t of e.overrides)r(t)||o.push(pi(t))}for(let e of a)r(e)||o.push(pi(e));return o}function di(e){let{method:t,blocks:n}=li(e);return{method:t,items:n.map(e=>fi(e,t))}}function fi(e,t){let n=(Ei(e,`STATUS`)||``).trim().toUpperCase(),r=wi(e,`RECURRENCE-ID`),i=r?Di(r):null,a=r?(Pi(r.params,`RANGE`)||``).toUpperCase():``,o=Di(wi(e,`DTSTAMP`)).ms,s=parseInt(Ei(e,`SEQUENCE`),10),c=wi(e,`ORGANIZER`),l=null;if(c){let e=Fi(c.value);if(e){let t=Pi(c.params,`CN`);l=t?{email:e,name:t}:{email:e}}}let u=[];for(let t of Ti(e,`ATTENDEE`)){let e=Fi(t.value);if(!e)continue;let n=(Pi(t.params,`PARTSTAT`)||``).toUpperCase();u.push({email:e,name:Pi(t.params,`CN`)||``,status:ii[n]||`needs-action`,rsvp:(Pi(t.params,`RSVP`)||``).toUpperCase()===`TRUE`,role:(Pi(t.params,`ROLE`)||``).toUpperCase()})}return{uid:(Ei(e,`UID`)||``).trim().slice(0,255),sequence:Number.isFinite(s)&&s>=0?s:0,dtstamp:Number.isFinite(o)?o:0,status:n,cancelled:t===`CANCEL`||n===`CANCELLED`,recurrenceId:i&&Number.isFinite(i.ms)?{ms:i.ms,dateOnly:i.dateOnly}:null,recurrenceRange:a===`THISANDFUTURE`?`THISANDFUTURE`:``,organizer:l,attendees:u,comment:bi(Ei(e,`COMMENT`)||``).slice(0,500),event:pi(e)}}function pi(e){let t=wi(e,`DTSTART`),n=wi(e,`DTEND`),r=Di(t),i=r.dateOnly,a={title:bi(Ei(e,`SUMMARY`)||``),description:bi(Ei(e,`DESCRIPTION`)||``),location:bi(Ei(e,`LOCATION`)||``),allDay:i,start:r.ms},o=e=>/^https?:\/\//i.test(e)?e:``,s=t=>Ti(e,t).map(e=>o(bi(e.value||``).trim())).find(Boolean)||``,c=o(bi(Ei(e,`URL`)||``).trim()),l=s(`X-GOOGLE-CONFERENCE`)||s(`CONFERENCE`)||c;if(l&&(a.meeting={url:l},c===l)){a.location===l&&(a.location=``);let e=`Join: ${l}`;a.description===e?a.description=``:a.description.endsWith(`\n\n${e}`)&&(a.description=a.description.slice(0,-(e.length+2)))}if(n){let e=Di(n);a.end=i?V(L(B(new Date(e.ms)),-1)).getTime():e.ms}else{let t=Li(Ei(e,`DURATION`));if(t!=null&&t>0)if(i){let e=Math.max(1,Math.round(t/k));a.end=V(L(B(new Date(r.ms)),e-1)).getTime()}else a.end=r.ms+t;else i?a.end=V(new Date(r.ms)).getTime():a.end=r.ms}let u=wi(e,`ORGANIZER`);if(u){let e=Fi(u.value);if(e){let t=Pi(u.params,`CN`);a.organizer=t?{email:e,name:t}:{email:e}}}let d=Ti(e,`ATTENDEE`);if(d.length){let e=[];for(let t of d){let n=Fi(t.value);if(!n)continue;let r=Pi(t.params,`CN`),i={email:n,status:ii[(Pi(t.params,`PARTSTAT`)||``).toUpperCase()]||`needs-action`};r&&(i.name=r),e.push(i)}e.length&&(a.guests=e)}let f=Ri(e.alarms);f.length&&(a.reminders=f);let p=Ei(e,`RRULE`);if(p){let n=mi(p,i,t.value);if(n){if(n.freq===`weekly`&&Array.isArray(n.byWeekday)&&n.byWeekday.length&&Number.isFinite(a.start)&&!i){let e=(new Date(a.start).getDay()-Mi(t.value)+7)%7;e&&(n.byWeekday=n.byWeekday.map(t=>(t+e)%7).sort((e,t)=>e-t),n.wkst!=null&&(n.wkst=(n.wkst+e)%7))}if(n.count!=null&&n.count>999&&Number.isFinite(a.start)){let e=dt(n,a.start,n.count);delete n.count,e!=null&&(n.until=V(new Date(e)).getTime())}a.recurrence=n;let r=[],o=i?``:Ai(t);for(let n of Ti(e,`EXDATE`))for(let e of n.value.split(`,`)){let s={value:e.trim(),params:i?`VALUE=DATE`:n.params},c=i?Di(s).ms:ji(s,o,t,a.start);Number.isFinite(c)&&r.push(c)}r.length&&(a.exdates=r)}}return a}function mi(e,t,n=``){let r={};for(let t of e.split(`;`)){let e=t.indexOf(`=`);e!==-1&&(r[t.slice(0,e).toUpperCase()]=t.slice(e+1))}let i={DAILY:`daily`,WEEKLY:`weekly`,MONTHLY:`monthly`,YEARLY:`yearly`}[(r.FREQ||``).toUpperCase()];if(!i||r.BYHOUR||r.BYMINUTE||r.BYSECOND||r.BYWEEKNO||r.BYYEARDAY)return null;let a=/^(\d{4})(\d{2})(\d{2})/.exec(String(n).trim()),o=(e,t,n)=>{if(!r[e])return!0;if(!n.includes(i))return!1;let o=r[e].split(`,`).map(e=>parseInt(e,10));return o.length===1&&!!a&&o[0]===parseInt(a[t],10)};if(!o(`BYMONTHDAY`,3,[`monthly`,`yearly`])||!o(`BYMONTH`,2,[`yearly`])||r.BYSETPOS&&i!==`monthly`)return null;if(i===`daily`&&r.BYDAY){if((parseInt(r.INTERVAL,10)||1)!==1)return null;i=`weekly`}if(i===`yearly`&&r.BYDAY||i===`monthly`&&r.BYDAY&&r.BYDAY.split(`,`).length>1)return null;let s={freq:i,interval:Math.max(1,parseInt(r.INTERVAL,10)||1)};if(i===`weekly`&&r.BYDAY&&(s.byWeekday=r.BYDAY.split(`,`).map(e=>ni.indexOf(e.replace(/^[+-]?\d+/,``).toUpperCase())).filter(e=>e>=0)),i===`weekly`&&s.interval>=2){let e=ni.indexOf((r.WKST||``).toUpperCase());s.wkst=e>=0?e:1}if(i===`monthly`&&(s.monthlyMode=r.BYDAY?`weekday`:`date`,r.BYDAY)){let e=/^([+-]?\d{1,2})?[A-Za-z]{2}$/.exec(r.BYDAY.split(`,`)[0].trim()),t=e&&e[1]?parseInt(e[1],10):NaN;if(!Number.isFinite(t)&&r.BYSETPOS&&(t=/^[+-]?\d+$/.test(r.BYSETPOS.trim())?parseInt(r.BYSETPOS,10):NaN),!(t===-1||t>=1&&t<=5))return null;s.monthlyNth=t}if(r.COUNT)s.count=Math.max(1,parseInt(r.COUNT,10)||1);else if(r.UNTIL){let e=Di({value:r.UNTIL,params:t?`VALUE=DATE`:``});s.until=e.dateOnly?V(new Date(e.ms)).getTime():e.ms}return s}function hi(e,t=2){return String(e).padStart(t,`0`)}function gi(e){let t=new Date(e);return`${t.getFullYear()}${hi(t.getMonth()+1)}${hi(t.getDate())}T${hi(t.getHours())}${hi(t.getMinutes())}${hi(t.getSeconds())}`}function _i(e){let t=new Date(e);return`${t.getFullYear()}${hi(t.getMonth()+1)}${hi(t.getDate())}`}function vi(e){let t=new Date(e);return`${t.getUTCFullYear()}${hi(t.getUTCMonth()+1)}${hi(t.getUTCDate())}T${hi(t.getUTCHours())}${hi(t.getUTCMinutes())}${hi(t.getUTCSeconds())}Z`}function yi(e){return String(e).replace(/\\/g,`\\\\`).replace(/\r\n|\r|\n/g,`\\n`).replace(/,/g,`\\,`).replace(/;/g,`\\;`)}function bi(e){let t=``;for(let n=0;n<e.length;n++)if(e[n]===`\\`&&n+1<e.length){let r=e[++n];t+=r===`n`||r===`N`?`
`:r}else t+=e[n];return t}function xi(e){let t=e=>e<=127?1:e<=2047?2:e<=65535?3:4,n=``,r=0;for(let i of e){let e=t(i.codePointAt(0));r+e>75&&(n+=`\r
 `,r=1),n+=i,r+=e}return n}function Si(e){let t=e.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),n=[];for(let e of t)(e.startsWith(` `)||e.startsWith(`	`))&&n.length?n[n.length-1]+=e.slice(1):e.length&&n.push(e);return n}function Ci(e){let t=-1,n=!1;for(let r=0;r<e.length;r++){let i=e[r];if(i===`"`)n=!n;else if(i===`:`&&!n){t=r;break}}if(t===-1)return null;let r=e.slice(0,t),i=e.slice(t+1),a=r.indexOf(`;`);return{name:(a===-1?r:r.slice(0,a)).toUpperCase(),params:a===-1?``:r.slice(a+1),value:i}}function wi(e,t){return e.find(e=>e.name===t)||null}function Ti(e,t){return e.filter(e=>e.name===t)}function Ei(e,t){let n=wi(e,t);return n?n.value:null}function Di(e){if(!e||!e.value)return{ms:NaN,dateOnly:!1};let t=e.value.trim(),n=/VALUE=DATE(;|$)/i.test(e.params||``)||!t.includes(`T`),r=Number(t.slice(0,4)),i=Number(t.slice(4,6))-1,a=Number(t.slice(6,8));if(n)return{ms:new Date(r,i,a).getTime(),dateOnly:!0};let o=Number(t.slice(9,11)),s=Number(t.slice(11,13)),c=Number(t.slice(13,15))||0;if(/[zZ]$/.test(t))return{ms:Date.UTC(r,i,a,o,s,c),dateOnly:!1};let l=Ni(e.params);if(l&&ye(l)){let e=be(r,i,a,o,s,c,l);if(Number.isFinite(e))return{ms:e,dateOnly:!1}}return{ms:new Date(r,i,a,o,s,c).getTime(),dateOnly:!1}}function Oi(e){let t=String(e).trim();return Math.round(Date.UTC(Number(t.slice(0,4)),Number(t.slice(4,6))-1,Number(t.slice(6,8)))/k)}function ki(e,t){let n=new Intl.DateTimeFormat(`en-US`,{timeZone:t,year:`numeric`,month:`2-digit`,day:`2-digit`}).formatToParts(new Date(e)),r=e=>n.find(t=>t.type===e)?.value||``;return`${r(`year`)}${r(`month`)}${r(`day`)}`}function Ai(e){if(!e||!e.value)return``;let t=Ni(e.params);return t&&ye(t)?t:/[zZ]$/.test(e.value.trim())?`UTC`:``}function ji(e,t,n,r){let i=Di(e);if(!Number.isFinite(i.ms)||!t||!Number.isFinite(r))return i.ms;let a=(i.dateOnly?Oi(e.value):Oi(ki(i.ms,t)))-Oi(n.value);return L(new Date(r),a).getTime()}function Mi(e){let t=String(e).trim();return new Date(Number(t.slice(0,4)),Number(t.slice(4,6))-1,Number(t.slice(6,8))).getDay()}function Ni(e){if(!e)return null;let t=/TZID=(?:"([^"]+)"|([^;]+))/i.exec(e);return t?ei(t[1]||t[2]):null}function Pi(e,t){if(!e)return null;let n=RegExp(`(?:^|;)${t}=(?:"([^"]*)"|([^;]*))`,`i`).exec(e);return(n?(n[1]==null?n[2]||``:n[1]).trim():``)||null}function Fi(e){return String(e||``).trim().replace(/^"|"$/g,``).replace(/^mailto:/i,``).trim().toLowerCase()}function Ii(e){let t=typeof e==`string`?e.replace(/["\u0000-\u001f\u007f]/g,` `).replace(/\s+/g,` `).trim():``;return t?`;CN="${t}"`:``}function Li(e){if(!e)return null;let t=/^([+-]?)P(?:(\d+)W)?(?:(\d+)D)?(?:T(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?)?$/.exec(e.trim());if(!t)return null;let[,n,r,i,a,o,s]=t;if(!r&&!i&&!a&&!o&&!s)return null;let c=0;return r&&(c+=Number(r)*7*k),i&&(c+=Number(i)*k),a&&(c+=Number(a)*O),o&&(c+=Number(o)*D),s&&(c+=Number(s)*1e3),n===`-`?-c:c}function Ri(e){if(!Array.isArray(e)||!e.length)return[];let t=[];for(let n of e){let e=n.find(e=>e.name===`TRIGGER`);if(!e)continue;let r=e.params||``;if(/RELATED=END/i.test(r)||/VALUE=DATE-TIME/i.test(r))continue;let i=Li(e.value);i==null||i>0||t.push(Math.round(-i/D))}return t}var zi=`https://calendar-email.puter.work`,Bi=`cal:invite:`,Vi=`Invitations need your email address so guests can see who invited them. Allow Calendar to read it, then send again.`;function Hi(e){return typeof e==`string`?e.trim().toLowerCase():``}function Ui(e){if(e==null)return null;if(typeof e==`string`)try{return JSON.parse(e)}catch{return null}return e}function Wi(e){let t=JSON.stringify(e),n=2166136261,r=2166136261;for(let e=0;e<t.length;e++){let i=t.charCodeAt(e);n=Math.imul(n^i,16777619)>>>0,r=Math.imul(r^i+e,2246822507)>>>0}return n.toString(16).padStart(8,`0`)+r.toString(16).padStart(8,`0`)}function Gi(){try{return Intl.DateTimeFormat().resolvedOptions().timeZone||``}catch{return``}}function Ki(e,{hour12:t=!0,tz:n=Gi()}={}){let r=new Date(e.start),i=new Date(e.end);if(e.allDay)return W(r,i)?`${me(r)} · All day`:`${he(r,i)} · All day`;let a=we(n,r),o=a?` (${a})`:``;return W(r,i)?`${me(r)} · ${_e(r,i,{hour12:t})}${o}`:`${me(r)}, ${X(r,{hour12:t})} – ${me(i)}, ${X(i,{hour12:t})}${o}`}function qi(e){let t=e&&e.sent||0,n=e&&e.failed||0,r=e&&e.suppressed||0,i=e&&e.capped||0;return i?{variant:`danger`,message:t?`Sent ${t}, but ${i} could not be sent — today's email limit was reached.`:`Today's email limit was reached — try again tomorrow.`,quiet:!1}:n?{variant:`danger`,message:t?`Sent ${t}, but ${n} could not be delivered.`:`Those invitations could not be delivered.`,quiet:!1}:r?{variant:`default`,message:t?`Sent ${t}. ${r} guest${r===1?` has`:`s have`} opted out of these emails.`:`${r===1?`That guest has`:`Those guests have`} opted out of these emails.`,quiet:!1}:t?{variant:`success`,message:t===1?`Invitation sent`:`Invitations sent to ${t} guests`,quiet:!1}:{variant:`default`,message:`Everyone already has this invitation.`,quiet:!0}}function Ji(e){let t=e&&e.sent||0,n=e&&e.failed||0,r=e&&e.suppressed||0,i=e&&e.capped||0;return i?{variant:`danger`,message:t?`Sent ${t}, but ${i} could not be sent — today's email limit was reached.`:`Today's email limit was reached — the cancellation could not be sent.`,quiet:!1}:n?{variant:`danger`,message:t?`Sent ${t}, but ${n} could not be delivered.`:`The cancellation emails could not be delivered.`,quiet:!1}:r?{variant:`default`,message:t?`Sent ${t}. ${r} guest${r===1?` has`:`s have`} opted out of these emails.`:`${r===1?`That guest has`:`Those guests have`} opted out of these emails.`,quiet:!1}:t?{variant:`success`,message:t===1?`Cancellation sent`:`Cancellation emails sent: ${t}`,quiet:!1}:{variant:`default`,message:`Your guests have already been told.`,quiet:!0}}function Yi({kv:e,store:t,rsvp:n,user:r,workerUrl:i=zi,getPuter:a=()=>typeof puter<`u`?puter:null,blocked:o=ir,toast:s=u,requestUser:c=h,requestEmail:l=g,readyTimeoutMs:d=12e4}){let f=new Map,p=Hi(r&&r.email);async function m({prompt:e=!1}={}){if(p)return p;let t=``;try{if(e)t=Hi(await l());else{let e=await c();t=Hi(e&&e.email)}}catch{}return t&&(p=t),p}function _(){let e=a();return!!(e&&e.workers&&typeof e.workers.exec==`function`)}function v(e){if(!e)return null;let n=e.seriesId||e.id;return t.getEvent(n)||(e.id===n?e:null)}function y(e){return{title:e.title||``,when:Ki(e,{hour12:t.getSettings().hour12!==!1}),recurLabel:e.recurrence?xt(e.recurrence,e.start):``,location:e.location||``,meetingUrl:e.meeting&&e.meeting.url||``,description:e.description||``,organizerName:e.organizer&&e.organizer.name||``,organizerEmail:e.organizer&&e.organizer.email||p}}function b(e){if(!e.recurrence)return null;let t=[...new Set((e.exdates||[]).map(Number).filter(Number.isFinite))].sort((e,t)=>e-t),n=new Set(t),r=[],i={...e,overrides:{}};for(let t of Object.keys(e.overrides||{}).map(Number).filter(Number.isFinite).sort((e,t)=>e-t)){if(n.has(t))continue;let a=mt(e,t),o=mt(i,t);if(!a||!o)continue;let s=[`title`,`description`,`location`,`start`,`end`,`allDay`].filter(e=>a[e]!==o[e]).map(e=>[e,a[e]]);s.length&&r.push([t,s])}return t.length||r.length?[t,r]:null}function x(e,{previouslyInvitedOnly:t=!1}={}){let r=v(e),i={eventId:``,ready:[],pending:[],waiting:0,lastSentAt:0};if(!r||!n||!n.isHosted(r))return i;let a=n.linksFor(r.id)||{},o=y(r),s=b(r),c=f.get(r.id)||{},l=[],u=0,d=0;for(let e of n.linkableGuests(r)){if(t&&!c[e.email])continue;let n=a[e.email]||``;if(!n){u+=1;continue}let r=Wi(s?[o,n,s]:[o,n]),i=c[e.email]||null;i&&i.at>d&&(d=i.at),l.push({email:e.email,name:e.name||``,rsvpUrl:n,version:r,sentAt:i&&i.at||0,current:!!(i&&i.v===r)})}return{eventId:r.id,ready:l,pending:l.filter(e=>!e.current),waiting:u,lastSentAt:d}}async function S(t,n){f.set(t,n),await e.set(Bi+t,n)}async function C(e,{emails:t=null,note:n=``,force:r=!1,prompt:i=!0,canSend:a=()=>!0}={}){if(o())throw Error(`You're offline — reconnect to send invitations.`);if(!_())throw Error(`Sending invitations needs the Puter SDK.`);let s=v(e);if(!s||!x(e).eventId)throw Error(`Only the organizer can send invitations.`);let c=(w.get(s.id)||Promise.resolve()).catch(()=>{}).then(()=>T(e,{emails:t,note:n,force:r,prompt:i,canSend:a}));return w.set(s.id,c),c.catch(()=>{}).finally(()=>{w.get(s.id)===c&&w.delete(s.id)}),c}let w=new Map;async function T(e,{emails:t,note:n,force:r,prompt:o,canSend:s}){if(!s())return{ok:!0,sent:0,skipped:0,failed:0,results:[]};let c=v(e);if(!c||!x(e).eventId)throw Error(`Only the organizer can send invitations.`);if(!c.organizer&&!await m({prompt:o}))throw Error(Vi);let l=x(e),u=t?new Set(t):null,d=(u?l.ready.filter(e=>u.has(e.email)):l.pending).map(e=>({email:e.email,name:e.name,rsvpUrl:e.rsvpUrl,version:e.version}));if(!d.length)return{ok:!0,sent:0,skipped:0,failed:0,results:[]};let h=``;try{h=ai([c.organizer||!p?c:{...c,organizer:{email:p}}],{method:`REQUEST`,tzid:Gi(),sequence:Math.max(0,(c.updatedAt||0)-15778368e5)/1e3})}catch{}let g=y(c),_=e=>!!l.ready.find(t=>t.email===e.email).sentAt,b=[{kind:`invite`,recipients:d.filter(e=>!_(e))},{kind:`update`,recipients:d.filter(_)}].filter(e=>e.recipients.length),C={ok:!0,sent:0,skipped:0,failed:0,suppressed:0,capped:0,results:[]},w={...f.get(c.id)||{}},T=null;for(let e of b){let t=await a().workers.exec(`${i}/invites`,{method:`POST`,headers:{"content-type":`application/json`},body:JSON.stringify({event:{id:c.id,...g},recipients:e.recipients,kind:e.kind,note:n,ics:h,force:r})}),o=await t.json().catch(()=>null);if(!t.ok||!o||!o.ok){T=Error(P(t.status,o));break}C.sent+=o.sent||0,C.skipped+=o.skipped||0,C.failed+=o.failed||0,C.suppressed+=o.suppressed||0,C.results.push(...o.results||[]);for(let t of o.results||[]){if(t.status===`skipped`&&t.reason!==`already_sent`){C.capped+=1;continue}if(t.status!==`sent`&&t.status!==`skipped`)continue;let n=e.recipients.find(e=>e.email===t.email);n&&(w[t.email]={at:t.at||Date.now(),v:n.version})}}if(await S(c.id,w),T)throw T;return C}function E(e,{future:t=!1}={}){if(!_())return null;let n=v(e);if(!n)return null;let r=t&&n.recurrence&&ut(nt(n.recurrence,n.start),n.start,e.recurrenceId)===0,i=e.seriesId&&!r?e.recurrenceId:null,a=t&&i!=null?`THISANDFUTURE`:``,o=i!=null&&Number.isFinite(i)?mt(n,i):null;if(e.seriesId&&!r&&!o)return null;let s=f.get(n.id)||{},c=y(o||n),l=Wi(i==null?[`cancel`,c]:a?[`cancel`,i,a,c]:[`cancel`,i,c]),u=new Map((n.guests||[]).map(e=>[e.email,e.name||``])),d=Object.keys(s).map(e=>({email:e,name:u.get(e)||``,version:l}));return d.length?{eventId:n.id,event:{...n},details:c,recipients:d,...o?{recurrenceId:i}:{},...a?{recurrenceRange:a}:{}}:null}async function D(e,t,{recurrenceId:r=null}={}){if(!_()||!e||!t||!n||!n.isHosted(e))return null;await(w.get(e.id)||Promise.resolve()).catch(()=>{});let i=new Set((t.guests||[]).map(e=>Hi(e.email))),a=f.get(e.id)||{},o=(e.guests||[]).filter(t=>!i.has(Hi(t.email))&&a[Hi(t.email)]&&Hi(t.email)!==Hi(e.organizer?.email)&&Hi(t.email)!==p);if(!o.length)return null;let s=e.id!==t.id&&r!=null,c=s?mt(e,r):null;if(s&&!c)return null;let l=y(c||e),u=Wi([`removed-guests`,e.id,s?r:null,l]);return{eventId:e.id,membershipEventId:t.id,removedGuests:!0,event:{...e,guests:o.map(e=>({...e}))},details:l,recipients:o.map(e=>({email:Hi(e.email),name:e.name||``,version:u})),...s?{recurrenceId:r,recurrenceRange:`THISANDFUTURE`}:{}}}function O(e){let t=e&&e.eventId,n=(w.get(t)||Promise.resolve()).catch(()=>{}).then(()=>k(e));return w.set(t,n),n.catch(()=>{}).finally(()=>{w.get(t)===n&&w.delete(t)}),n}async function k(n){if(o())throw Error(`You're offline — reconnect to send the cancellation.`);if(!_())throw Error(`Sending the cancellation needs the Puter SDK.`);if(!n||!n.eventId||!(n.recipients||[]).length)throw Error(`There is nobody to notify about this event.`);if(!n.removedGuests&&n.recurrenceRange&&vt(t.getEvent(n.eventId),n.recurrenceId))throw Error(`The event was restored — no cancellation was sent.`);if(n.removedGuests){let e=t.getEvent(n.membershipEventId);if(!e)throw Error(`The event changed — no invitation cancellations were sent.`);let r=new Set((e.guests||[]).map(e=>Hi(e.email))),i=n.recipients.filter(e=>!r.has(e.email));if(!i.length)throw Error(`The guests were added back — no invitation cancellations were sent.`);let a=new Set(i.map(e=>e.email));n={...n,recipients:i,event:{...n.event,guests:n.event.guests.filter(e=>a.has(Hi(e.email)))}}}let r={...n.details};r.organizerEmail||(r.organizerEmail=await m());let s=``;try{let e=n.event;s=ai([e.organizer||!p?e:{...e,organizer:{email:p}}],{method:`CANCEL`,status:n.removedGuests?``:`CANCELLED`,tzid:Gi(),sequence:Math.floor(Math.max(0,Date.now()-15778368e5)/1e3)+1,recurrenceId:n.recurrenceId,recurrenceRange:n.recurrenceRange})}catch{if(n.removedGuests||n.recurrenceId!=null)throw Error(`Could not prepare the invitation cancellation.`)}let c={ok:!0,sent:0,skipped:0,failed:0,suppressed:0,capped:0,results:[]},l=new Set;for(let e=0;e<n.recipients.length;e+=50){let t=await a().workers.exec(`${i}/cancellations`,{method:`POST`,headers:{"content-type":`application/json`},body:JSON.stringify({event:{id:n.eventId,...r},recipients:n.recipients.slice(e,e+50),kind:`cancel`,cancellationScope:n.removedGuests?`guests`:`event`,note:n.removedGuests?n.recurrenceRange?`Your invitation is cancelled from this occurrence onward. Earlier occurrences are unchanged.`:`Your invitation has been withdrawn. The event remains scheduled for the other guests.`:n.recurrenceRange?`This and all following occurrences are cancelled. Earlier occurrences are unchanged.`:n.recurrenceId==null?``:`Only this occurrence is cancelled. The rest of the series is unchanged.`,ics:s})}),o=await t.json().catch(()=>null);if(!t.ok||!o||!o.ok){if(e===0)throw Error(A(t.status,o));for(let t of n.recipients.slice(e))l.add(t.email);c.failed+=n.recipients.length-e;break}c.sent+=o.sent||0,c.skipped+=o.skipped||0,c.failed+=o.failed||0,c.suppressed+=o.suppressed||0,c.results.push(...o.results||[]);for(let e of o.results||[]){if(!e||!e.email)continue;let t=e.status===`skipped`&&e.reason!==`already_sent`;t&&(c.capped+=1),(e.status===`failed`||t)&&l.add(e.email)}}if(n.removedGuests&&!n.recurrenceRange){let e={...f.get(n.eventId)||{}};for(let t of c.results)(t.status===`sent`||t.status===`suppressed`||t.status===`skipped`&&t.reason===`already_sent`)&&delete e[t.email];return await S(n.eventId,e),c}if(n.recurrenceId!=null)return c;if(l.size){let e=f.get(n.eventId)||{},t={};for(let[n,r]of Object.entries(e))l.has(n)&&(t[n]=r);return await S(n.eventId,t),c}return f.delete(n.eventId),await e.del(Bi+n.eventId).catch(()=>{}),c}function A(e,t){let n=t&&t.error||``;return e===401||n===`sign_in_required`?`Sign in to Puter again to send the cancellation.`:e===429||n===`daily_limit`?`You've reached today's email limit. Try again tomorrow.`:e===404||n===`invalid_ics`?`The email service needs an update before it can send cancellations.`:`Could not send the cancellation. Please try again.`}let j=new Map;function M(e){let t=j.get(e);t&&(clearTimeout(t.timer),t.off(),j.delete(e))}function N(e,{canSend:t=()=>!0,previouslyInvitedOnly:r=!1}={}){let i=v(e);if(!i||!_()||o()||!t())return;let a=i.id;M(a);let c=e=>{let n=x({id:a},{previouslyInvitedOnly:r});if(!n.eventId||!t())return void M(a);if(n.waiting&&!e)return;M(a);let i=n.pending.map(e=>e.email);e&&n.waiting&&s(`Could not prepare RSVP links for ${n.waiting} guest${n.waiting===1?``:`s`} — invite them from the event.`,{variant:`danger`}),i.length&&C({id:a},{emails:i,prompt:!1,canSend:t}).then(e=>{let{message:t,variant:n,quiet:r}=qi(e);r||s(t,{variant:n})}).catch(e=>s(e.message||`Could not send the invitations.`,{variant:`danger`}))},l=n.onUpdate(e=>{e===a&&c(!1)});j.set(a,{timer:setTimeout(()=>c(!0),d),off:l}),c(!1)}function P(e,t){let n=t&&t.error||``;return e===401||n===`sign_in_required`?`Sign in to Puter again to send invitations.`:e===429||n===`daily_limit`?`You've reached today's invitation limit. Try again tomorrow.`:e===404?`The invitation service is unavailable right now.`:e===403||n===`organizer_mismatch`?`Sign in to Puter again — this invitation would not be sent from your account.`:n===`invalid_ics`?`The email service needs an update before it can send this event.`:`Could not send the invitations. Please try again.`}async function F(){try{let n=await e.list(`${Bi}*`,!0)||[],r=t.revision()!==null,i=[];for(let e of n){if(!e||typeof e.key!=`string`)continue;let n=Ui(e.value);if(!n||typeof n!=`object`)continue;let a=e.key.slice(11);if(r&&!t.getEvent(a)){i.push(e.key);continue}f.set(a,n)}for(let t of i)await e.del(t).catch(()=>{})}catch{}}return{start:F,available:_,planFor:x,send:C,sendWhenReady:N,cancellationFor:E,removedGuestsFor:D,sendCancellation:O}}function Xi({invites:t,store:n,cancel:r,toast:i=u,onClose:a}){if(!t||!r||!(r.recipients||[]).length)return;let o=r.recipients.length,s=`${o} guest${o===1?``:`s`}`,c=r.details&&r.details.title||`this event`,l=e(`form`,{class:`modal rr-modal cancel-ask`,role:`dialog`,"aria-modal":`true`,"aria-labelledby":`cancel-ask-title`},[e(`div`,{class:`modal__head`},[e(`h2`,{class:`modal__title`,id:`cancel-ask-title`,text:r.removedGuests?`Notify removed guests?`:`Send cancellation emails?`})]),e(`div`,{class:`modal__body`},[e(`p`,{text:r.removedGuests?`${s} will get an email saying their invitation to “${c}” was cancelled${r.recurrenceRange?` from ${r.details.when} onward`:``}. The event will stay on the other guests’ calendars.`:r.recurrenceRange?`${s} will get an email saying this and all following occurrences of “${c}” (${r.details.when}) were cancelled. Earlier occurrences will stay on their calendars.`:r.recurrenceId==null?`${s} will get an email saying “${c}” was cancelled.`:`${s} will get an email saying this occurrence of “${c}” (${r.details.when}) was cancelled. The rest of the series will stay on their calendars.`}),...r.removedGuests?[]:[e(`p`,{text:`You’ll receive a cancellation email too, if your email address is available.`})]]),e(`div`,{class:`modal__foot`},[e(`div`,{class:`spacer`}),e(`button`,{class:`btn`,type:`button`,text:`Don't send`,on:{click:()=>d()}}),e(`button`,{class:`btn btn--primary`,type:`submit`,text:`Send`})])]);l.addEventListener(`submit`,e=>{e.preventDefault(),d();let a=n&&n.getEvent(r.eventId);if(!r.removedGuests&&a&&(r.recurrenceId==null||(r.recurrenceRange?vt(a,r.recurrenceId):!(a.exdates||[]).some(e=>Number(e)===r.recurrenceId)))){i(`The event was restored — no cancellation was sent.`);return}Promise.resolve(t.sendCancellation(r)).then(e=>{let{message:t,variant:n}=Ji(e);i(t,{variant:n})}).catch(e=>i(e.message||`Could not send the cancellation.`,{variant:`danger`}))});let d=Jr(l,a?()=>queueMicrotask(a):void 0);requestAnimationFrame(()=>l.querySelector(`.btn--primary`).focus())}function Zi({eventId:e,invites:t,store:n,canSend:r=()=>!0,previousEventId:i=null}){if(!e||!t||!t.available()||ir()||!r())return;let a=t.planFor({id:e}),o=a.pending.length+a.waiting,s=i?t.planFor({id:i},{previouslyInvitedOnly:!0}):null,c=s?s.pending.length+s.waiting:0;!o&&!c||Qi({count:o,split:!!i,updating:a.waiting===0&&a.pending.every(e=>e.sentAt),onConfirm:()=>{!r()||!n.getEvent(e)||(i?(t.sendWhenReady({id:i},{canSend:r,previouslyInvitedOnly:!0}),t.sendWhenReady({id:e},{canSend:r})):t.sendWhenReady({id:e}))}})}function Qi({count:t,updating:n,split:r,onConfirm:i}){let a=`${t} guest${t===1?``:`s`}`,o=e(`form`,{class:`modal rr-modal invite-ask`,role:`dialog`,"aria-modal":`true`,"aria-labelledby":`invite-ask-title`},[e(`div`,{class:`modal__head`},[e(`h2`,{class:`modal__title`,id:`invite-ask-title`,text:n||r?`Send updated invitations?`:`Send invitations?`})]),e(`div`,{class:`modal__body`},[e(`p`,{text:r?`Previously invited guests will get an update ending the original series before this occurrence. Guests on the future events will get a separate invitation with the new schedule and RSVP links.`:n?`${a} will get an email saying this event changed.`:`${a} will get an email with the details and their own Yes / No / Maybe link.`})]),e(`div`,{class:`modal__foot`},[e(`div`,{class:`spacer`}),e(`button`,{class:`btn`,type:`button`,text:`Don't send`,on:{click:()=>s()}}),e(`button`,{class:`btn btn--primary`,type:`submit`,text:`Send`})])]);o.addEventListener(`submit`,e=>{e.preventDefault(),s(),i()});let s=Jr(o);requestAnimationFrame(()=>o.querySelector(`.btn--primary`).focus())}function $i(e,t){try{if(typeof window>`u`||typeof window.plausible!=`function`)return;window.plausible(e,t?{props:t}:void 0)}catch{}}var ea=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;function ta({store:t,onChange:r,user:i,requestEmail:o=g,rsvp:c=null,invites:l=null,contacts:d=null,booking:f=null,meetings:p=null,onHolidaySettings:m=null,onClockChangeSettings:h=null,mail:_=null}){let b=null,x=null,S=`event`,C=y,w=null,E=[],D=[],O=`[]`,k=null,A=`null`,j=!1,M=i&&typeof i.email==`string`?i.email.trim().toLowerCase():``,N=null,P=!1,F=null,I=`none`,ee=`null`,R=null,te=null,z=!1,H={},re=`graphite`;function U(){return!!b}function ie(e){return e===`ooo`?`New out of office`:e===`task`?`New task`:`New event`}function G(e){if(e===S)return K();if(e===`ooo`)F={title:H.title.value,color:C,reminders:[...E]},S=`ooo`,H.title.value.trim()||(H.title.value=`Out of office`),C=re,se();else{let t=S===`ooo`;S=e,t&&F&&(H.title.value=F.title,C=F.color,E=[...F.reminders],F=null,se(),J())}x||(H.titleHeading.textContent=ie(S)),K()}function K(){let e=S===`ooo`,t=S===`task`;H.startLabel.textContent=t?`Due`:`Starts`,H.endRow.style.display=t?`none`:``,H.doneRow.style.display=t?``:`none`,H.repeatField.style.display=t?`none`:``,H.locationField.style.display=t?`none`:``,H.guestsField.style.display=e||t?`none`:``,dt(),H.descLabel.textContent=t?`Notes`:`Description`,H.description.placeholder=t?`Add notes`:`Add description`,H.modeToggle.querySelectorAll(`button`).forEach(e=>e.setAttribute(`aria-pressed`,String(e.dataset.mode===S))),Xe(),oe()}function ae(){H.modeToggle=e(`div`,{class:`segmented modal__mode`,role:`group`,"aria-label":`Create`,style:{display:`none`}},[e(`button`,{type:`button`,text:`Event`,dataset:{mode:`event`},"aria-pressed":`true`,on:{click:()=>G(`event`)}}),e(`button`,{type:`button`,text:`Out of office`,dataset:{mode:`ooo`},"aria-pressed":`false`,on:{click:()=>G(`ooo`)}}),e(`button`,{type:`button`,text:`Task`,dataset:{mode:`task`},"aria-pressed":`false`,on:{click:()=>G(`task`)}})]),H.title=e(`input`,{class:`input input--title`,type:`text`,placeholder:`Add title`,autocomplete:`off`,"aria-label":`Event title`}),H.allDay=e(`input`,{type:`checkbox`,role:`switch`});let n=e(`label`,{class:`inline-field`,style:{cursor:`pointer`}},[e(`span`,{class:`field__label`,text:`All day`}),e(`span`,{class:`switch`},[H.allDay,e(`span`,{class:`switch__track`}),e(`span`,{class:`switch__thumb`})])]);H.doneToggle=e(`input`,{type:`checkbox`,role:`switch`}),H.doneRow=e(`label`,{class:`inline-field`,style:{cursor:`pointer`,display:`none`}},[e(`span`,{class:`field__label`,text:`Completed`}),e(`span`,{class:`switch`},[H.doneToggle,e(`span`,{class:`switch__track`}),e(`span`,{class:`switch__thumb`})])]),H.startDate=e(`input`,{class:`input`,type:`date`,"aria-label":`Start date`});let r=()=>t.getSettings().hour12;H.startTime=Kr({label:`Start time`,hour12:r}),H.endDate=e(`input`,{class:`input`,type:`date`,"aria-label":`End date`}),H.endTime=Kr({label:`End time`,hour12:r,after:()=>H.endDate.value&&H.endDate.value===H.startDate.value?H.startTime.value:``}),H.startLabel=e(`span`,{class:`field__label`,text:`Starts`});let i=e(`div`,{class:`field`},[H.startLabel,e(`div`,{class:`form-row`},[H.startDate,H.startTime.el])]);H.endRow=e(`div`,{class:`field`},[e(`span`,{class:`field__label`,text:`Ends`}),e(`div`,{class:`form-row`},[H.endDate,H.endTime.el])]),H.tzHint=e(`div`,{class:`field__label modal__tz-hint`,style:{display:`none`}}),H.repeat=e(`select`,{class:`select`,"aria-label":`Repeat`}),H.repeat.addEventListener(`change`,Ye),H.repeatField=e(`div`,{class:`field`},[e(`span`,{class:`field__label`,text:`Repeat`}),H.repeat]),H.reminderList=e(`div`,{class:`reminders`}),H.reminderAdd=e(`button`,{class:`btn btn--ghost reminders__add`,type:`button`,html:s(`bell`,{size:`sm`})+`<span>Add notification</span>`,on:{click:le}}),H.reminderHint=e(`div`,{class:`field__label reminders__hint`,style:{display:`none`}}),H.remindersField=e(`div`,{class:`field`},[e(`span`,{class:`field__label`,text:`Notifications`}),H.reminderList,H.reminderAdd,H.reminderHint]),H.error=e(`div`,{class:`field__label modal__error`,style:{color:`var(--danger-ink)`,display:`none`},role:`alert`}),H.location=e(`input`,{class:`input`,type:`text`,placeholder:`Add location`,autocomplete:`off`,"aria-label":`Location`}),H.locationField=e(`div`,{class:`field`},[e(`span`,{class:`field__label`,text:`Location`}),H.location]),H.meetingBox=e(`div`,{class:`meeting`}),H.meetingField=e(`div`,{class:`field`},[e(`span`,{class:`field__label`,text:`Meeting`}),H.meetingBox]),ft();let a=De();H.guestInput=e(`input`,{class:`input`,type:`text`,inputmode:`email`,placeholder:a?`Add guests by name or email`:`Add guests`,autocomplete:`off`,"aria-label":a?`Add guest by name or email`:`Add guest by email`,role:`combobox`,"aria-expanded":`false`,"aria-controls":`guest-suggestions`,"aria-autocomplete":`list`}),H.guestInput.addEventListener(`keydown`,e=>{e.isComposing||e.keyCode===229||(e.key===`Enter`||e.key===`,`)&&(e.preventDefault(),Se())}),H.guestInput.addEventListener(`input`,()=>{H.guestInput.removeAttribute(`aria-invalid`),Me()}),H.guestInput.addEventListener(`focus`,()=>{if(!d)return;let e=H.guestInput,t=!e.value.trim()&&typeof d.revalidate==`function`?d.revalidate():typeof d.warm==`function`?d.warm():null;Promise.resolve(t).then(()=>{H.guestInput===e&&document.activeElement===e&&Me()}).catch(()=>{})}),H.guestInput.addEventListener(`blur`,()=>{Ae(),Se({quiet:!0}),d&&d.settle&&d.settle()}),H.guestList=e(`div`,{class:`guests`}),H.guestSuggest=e(`div`,{class:`guests__suggest`,id:`guest-suggestions`,role:`listbox`,"aria-label":`Guest suggestions`,hidden:!0}),H.guestsField=e(`div`,{class:`field`},[e(`span`,{class:`field__label`,text:`Guests`}),e(`div`,{class:`guests__entry`},[H.guestInput,H.guestSuggest]),H.guestList]),H.description=e(`textarea`,{class:`textarea`,placeholder:`Add description`,rows:`3`,"aria-label":`Description`}),H.descLabel=e(`span`,{class:`field__label`,text:`Description`}),H.descField=e(`div`,{class:`field`},[H.descLabel,H.description]),H.swatches=e(`div`,{class:`swatches`,role:`radiogroup`,"aria-label":`Event color`}),v.forEach(t=>{let n=e(`button`,{class:`swatch`,type:`button`,role:`radio`,title:t.label,"aria-label":t.label,style:{background:t.hex,"--swatch-color":t.hex},on:{click:()=>{C=t.key,se()}}});n.dataset.color=t.key,H.swatches.append(n)}),H.swatches.addEventListener(`keydown`,e=>{let t=[...H.swatches.querySelectorAll(`.swatch`)].filter(e=>!e.disabled),n=t.indexOf(document.activeElement);if(n<0)return;let r;if(e.key===`ArrowRight`||e.key===`ArrowDown`)r=(n+1)%t.length;else if(e.key===`ArrowLeft`||e.key===`ArrowUp`)r=(n-1+t.length)%t.length;else if(e.key===`Home`)r=0;else if(e.key===`End`)r=t.length-1;else return;e.preventDefault(),C=t[r].dataset.color,se(),t[r].focus()}),H.deleteBtn=e(`button`,{class:`btn btn--danger`,type:`button`,html:s(`trash`,{size:`sm`})+`<span>Delete</span>`,on:{click:Tt}});let o=e(`button`,{class:`btn`,type:`button`,text:`Cancel`,on:{click:Q}}),c=e(`button`,{class:`btn btn--primary`,type:`submit`,text:`Save`}),l=e(`form`,{class:`modal modal--editor`,role:`dialog`,"aria-modal":`true`,"aria-labelledby":`modal-title`},[e(`div`,{class:`modal__head`},[e(`h2`,{class:`modal__title`,id:`modal-title`,text:`Event`}),e(`button`,{class:`icon-btn`,type:`button`,"aria-label":`Close`,html:s(`close`),on:{click:Q}})]),e(`div`,{class:`modal__body`},[H.modeToggle,e(`div`,{class:`field field--title`},[H.title]),n,i,H.endRow,H.doneRow,H.tzHint,H.error,H.repeatField,H.remindersField,e(`hr`,{class:`modal__sep`}),H.guestsField,H.meetingField,H.locationField,H.descField,e(`div`,{class:`field`},[e(`span`,{class:`field__label`,text:`Color`}),H.swatches])]),e(`div`,{class:`modal__foot`},[H.deleteBtn,e(`div`,{class:`spacer`}),o,c])]);return H.titleHeading=l.querySelector(`#modal-title`),l.addEventListener(`submit`,e=>{e.preventDefault(),gt()}),H.allDay.addEventListener(`change`,()=>{if(Xe(),H.allDay.checked){it=Math.max(at(),it);let e=Ze();Number.isNaN(e.getTime())||(H.endDate.value=Pe(L(B(e),it-1)))}else{let e=Ze();Number.isNaN(e.getTime())||lt(new Date(e.getTime()+rt))}oe()}),H.startDate.addEventListener(`change`,ot),H.startTime.addEventListener(`change`,ot),H.startDate.addEventListener(`change`,Ue),H.endDate.addEventListener(`change`,st),H.endTime.addEventListener(`change`,st),[`startDate`,`startTime`,`endDate`,`endTime`].forEach(e=>H[e].addEventListener(`change`,()=>{tt()&&ut(``),oe()})),l}function oe(){let e=t.getSettings().secondaryTz,n=Ze(),r=Qe();if(S===`task`||!ye(e)||H.allDay.checked||Number.isNaN(n.getTime())||Number.isNaN(r.getTime())){H.tzHint.style.display=`none`;return}let i={hour12:t.getSettings().hour12};H.tzHint.textContent=`${Te(e)}: ${Ce(n.getTime(),e,i)} – ${Ce(r.getTime(),e,i)}`,H.tzHint.style.display=`block`}function se(){let e=t.getSettings().categoryNames,n=[...H.swatches.querySelectorAll(`.swatch`)],r=n.find(e=>e.dataset.color===C)||n[0];n.forEach(t=>{t.setAttribute(`aria-checked`,String(t.dataset.color===C)),t.tabIndex=t===r?0:-1;let n=T(t.dataset.color,e);t.title=n,t.setAttribute(`aria-label`,n)})}function J(){n(H.reminderList),E.forEach((t,n)=>{let r=e(`select`,{class:`select`,"aria-label":`Notification time`});if(!Be.some(e=>e.min===t)){let n=e(`option`,{value:String(t),text:We(t)});n.selected=!0,r.append(n)}Be.forEach(n=>{let i=e(`option`,{value:String(n.min),text:n.label});n.min===t&&(i.selected=!0),r.append(i)}),r.addEventListener(`change`,()=>Y(n,Number(r.value)));let i=e(`button`,{class:`icon-btn reminders__remove`,type:`button`,"aria-label":`Remove notification`,title:`Remove notification`,html:s(`close`,{size:`sm`}),on:{click:()=>ce(n)}});H.reminderList.append(e(`div`,{class:`reminders__row`},[r,i]))});let t=E.length>=Math.min(5,Be.length);H.reminderAdd.style.display=t?`none`:``,ue()}function Y(e,t){E[e]=t,E=[...new Set(E)],J();let n=[...H.reminderList.querySelectorAll(`select`)].find(e=>Number(e.value)===t);n&&n.focus()}function ce(e){E.splice(e,1),J();let t=H.reminderList.querySelectorAll(`.reminders__remove`),n=t[Math.min(e,t.length-1)]||H.reminderAdd;n&&n.focus()}function le(){let e=new Set(E),t=Be.find(t=>!e.has(t.min))||Be[0];E.push(t.min),J(),Promise.resolve(qe()).then(ue)}function ue(){let e=``;E.length&&(Ge()?Ke()===`denied`&&(e=`Notifications are blocked in your browser settings.`):e=`This browser does not support notifications.`),H.reminderHint.textContent=e,H.reminderHint.style.display=e?`block`:`none`}let de={accepted:`Yes`,declined:`No`,tentative:`Maybe`,"needs-action":`Awaiting`};function fe(){return!!(M&&!(x&&x.organizer&&x.organizer.email!==M))}function pe(){let t=fe(),r=x&&Ht(x)&&c.linksFor(Vt(x))||{};n(H.guestList),D.forEach((n,i)=>{let a=e(`button`,{class:`icon-btn reminders__remove`,type:`button`,"aria-label":`Remove ${n.email}`,title:`Remove guest`,html:s(`close`,{size:`sm`}),on:{click:()=>{n.email===M&&(j=!0),D.splice(i,1),pe()}}}),o=t&&n.email===M;H.guestList.append(e(`div`,{class:`guests__row`},[e(`span`,{class:`guests__email`,text:n.name?`${n.name} — ${n.email}`:n.email}),e(`span`,{class:`guests__status`,text:o?`Organizer`:de[n.status]||`Awaiting`}),!o&&r[n.email]?Gt(r[n.email],n.email):null,a]))})}function ge(){!b||z||S!==`event`||!fe()||j||!D.length||D.some(e=>e.email===M)||(D.unshift({email:M,status:`accepted`}),pe())}function ve(){return M||typeof o!=`function`?Promise.resolve(M):(N||(N=Promise.resolve().then(()=>o()).then(e=>(typeof e==`string`&&e.trim()&&(M=e.trim().toLowerCase()),M)).catch(()=>M)),N)}function be(e,t=``){D.some(t=>t.email===e)||(D.push(t?{email:e,name:t,status:`needs-action`}:{email:e,status:`needs-action`}),pe(),ve().then(ge))}function xe(){return H.guestInput.value.trim().replace(/,+$/,``).toLowerCase()}function Se({quiet:e}={}){let t=xe();return t?ea.test(t)?(d&&typeof d.noteTyped==`function`&&d.noteTyped(t),be(t),H.guestInput.value=``,H.guestInput.removeAttribute(`aria-invalid`),Ae(),!0):(e||H.guestInput.setAttribute(`aria-invalid`,`true`),e):!0}let we=[],Ee=-1;function De(){return!!(d&&d.ready&&d.ready())}function ke(){return!!(H.guestSuggest&&!H.guestSuggest.hidden&&we.length)}function Ae(){H.guestSuggest&&(we=[],Ee=-1,H.guestSuggest.hidden=!0,n(H.guestSuggest),H.guestInput.setAttribute(`aria-expanded`,`false`),H.guestInput.removeAttribute(`aria-activedescendant`))}function je(e){let t=String(e).toLowerCase();return D.some(e=>String(e.email).toLowerCase()===t)}function Me(){if(!H.guestSuggest)return;let e=H.guestInput.value.trim();if(e.length<1)return Ae();let t=[];if(De())try{t=d.suggest(e,6+D.length)||[]}catch{t=[]}let n=t.filter(e=>e&&e.email&&!je(e.email)).slice(0,6),r=xe();if(we=ea.test(r)&&!je(r)&&!n.some(e=>String(e.email).toLowerCase()===r)?[...n,{email:r,typed:!0}]:n,!we.length)return Ae();Ne()}d&&typeof d.onChange==`function`&&d.onChange(()=>{let e=H.guestInput;!e||!H.guestSuggest||document.activeElement!==e||e.isConnected&&Me()});function Ne(){let t=H.guestSuggest.hidden;n(H.guestSuggest),we.forEach((t,n)=>{let r=t.name||t.email,i=t.typed?`Add as guest`:[t.company,r===t.email?``:t.email].filter(Boolean).join(` · `),a=e(`div`,{class:`guests__suggestion${t.typed?` guests__suggestion--typed`:``}`,role:`option`,id:`guest-opt-${n}`,"aria-selected":`false`},[t.typed?e(`span`,{class:`guests__face`,html:s(`mail`,{size:`sm`})}):e(`span`,{class:`guests__face`,text:(r.trim()||String(t.email)).charAt(0),"aria-hidden":`true`}),e(`span`,{class:`guests__suggestion-text`},[e(`span`,{class:`guests__suggestion-name`,text:r}),i?e(`span`,{class:`guests__suggestion-meta`,text:i}):null])]);a.addEventListener(`pointerdown`,e=>e.preventDefault()),a.addEventListener(`click`,()=>ze(n)),a.addEventListener(`pointermove`,()=>{Ee!==n&&Re(n,!1)}),H.guestSuggest.append(a)}),H.guestSuggest.hidden=!1,H.guestInput.setAttribute(`aria-expanded`,`true`),t&&typeof H.guestSuggest.scrollIntoView==`function`&&H.guestSuggest.scrollIntoView({block:`nearest`}),Re(-1,!1)}function Re(e,t=!0){Ee=e<0?-1:Math.max(0,Math.min(e,we.length-1)),H.guestSuggest.querySelectorAll(`.guests__suggestion`).forEach((e,n)=>{let r=n===Ee;e.setAttribute(`aria-selected`,String(r)),r&&t&&e.scrollIntoView({block:`nearest`})}),Ee<0?H.guestInput.removeAttribute(`aria-activedescendant`):H.guestInput.setAttribute(`aria-activedescendant`,`guest-opt-${Ee}`)}function ze(e){let t=we[e];if(t){if(t.typed){if(!Se())return}else be(t.email,t.name),H.guestInput.value=``,H.guestInput.removeAttribute(`aria-invalid`),Ae();H.guestInput.focus()}}function Ve(e){return!ke()||document.activeElement!==H.guestInput||e.isComposing||e.keyCode===229?!1:e.key===`ArrowDown`?(Re(Ee+1),!0):e.key===`ArrowUp`?(Ee<=0?Re(-1,!1):Re(Ee-1),!0):e.key===`Escape`?(Ae(),!0):(e.key===`Enter`||e.key===`Tab`)&&Ee>=0?(ze(Ee),!0):!1}function He(){x&&x.seriesId||!w||w.freq!==`weekly`||I===`weekly`&&(w={...w,byWeekday:[Ze().getDay()]})}function Ue(){He(),Je()}function Je(){let t=Ze();if(Number.isNaN(t.getTime()))return;let r=t.getTime(),i=St(r),a=w?Ct(w,r):`none`;if(w&&a!==`custom`&&a!==`none`){let e=i.find(e=>e.key===a);e&&e.rule&&(w={...e.rule})}n(H.repeat),i.forEach(t=>{if(t.key===`custom`&&a===`custom`&&w){let t=e(`option`,{value:`__current`,text:xt(w,r)});t.selected=!0,H.repeat.append(t)}let n=e(`option`,{value:t.key,text:t.label});t.key===a&&a!==`custom`&&(n.selected=!0),H.repeat.append(n)}),I=H.repeat.value}function Ye(){let e=H.repeat.value;if(e===`__current`)return;let n=Ze();if(Number.isNaN(n.getTime())){H.repeat.value=I,ut(`Pick a start date before setting a repeat.`);return}if(e===`custom`){H.repeat.value=I;let e=x&&x.seriesId?t.getEvent(x.seriesId):null;Yr({rule:w,startMs:n.getTime(),anchorMs:e?e.start:n.getTime(),weekStartsOn:t.getSettings().weekStartsOn,onDone:e=>{w=e,Je()}});return}let r=St(n.getTime()).find(t=>t.key===e);w=r&&r.rule?{...r.rule}:null,Je()}function Xe(){let e=H.allDay.checked;H.startTime.hidden=e,H.endTime.hidden=e,H.remindersField.style.display=e||S===`ooo`||S===`task`?`none`:``}function Ze(){return Ie(H.startDate.value,H.allDay.checked?`00:00`:H.startTime.value)}function Qe(){return Ie(H.endDate.value,H.allDay.checked?`00:00`:H.endTime.value)}function $e(){return H.allDay.checked?!1:!H.startTime.value||S!==`task`&&!H.endTime.value}function et(){if(S===`task`)return``;let e=Ze(),t=Qe();if(Number.isNaN(e.getTime())||Number.isNaN(t.getTime()))return``;if(H.allDay.checked)return B(t)<B(e)?`The end date can't be before the start date.`:``;if(t>e)return``;let n=B(e).getTime()===B(t).getTime();return n&&t<e?``:n?`The end time must be after the start time.`:`The end can't be before the start.`}function tt(){return $e()||Number.isNaN(Ze().getTime())?!1:S===`task`||!Number.isNaN(Qe().getTime())&&!et()}let rt=60*6e4,it=1;function at(){let e=Ie(H.startDate.value,`00:00`),t=Ie(H.endDate.value,`00:00`);return Number.isNaN(e.getTime())||Number.isNaN(t.getTime())?1:Math.max(1,q(e,t)+1)}function ot(){let e=Ze();if(Number.isNaN(e.getTime()))return;if(H.allDay.checked){H.endDate.value=Pe(L(B(e),it-1));return}let t=new Date(e.getTime()+rt);H.endDate.value=Pe(t),H.endTime.value=Fe(t)}function st(){let e=Ze(),t=Qe();if(!(Number.isNaN(e.getTime())||Number.isNaN(t.getTime())))if(H.allDay.checked)it=at();else{let n=t.getTime();n<e.getTime()&&B(e).getTime()===B(t).getTime()&&(n=L(t,1).getTime()),n>e.getTime()&&(rt=n-e.getTime()),it=at()}}function ct(e){H.startDate.value=Pe(e),H.startTime.value=Fe(e)}function lt(e){H.endDate.value=Pe(e),H.endTime.value=Fe(e)}function ut(e){H.error.textContent=e,H.error.style.display=e?`block`:`none`}function dt(){if(!H.meetingField)return;let e=S===`event`&&H.meetingBox.childNodes.length>0;H.meetingField.style.display=e?``:`none`}function ft(){H.meetingBox&&(n(H.meetingBox),k&&k.url?H.meetingBox.append(e(`div`,{class:`meeting__row`},[e(`a`,{class:`linkified meeting__url`,href:k.url,text:k.url,target:`_blank`,rel:`noopener noreferrer`}),e(`button`,{class:`icon-btn meeting__action`,type:`button`,"aria-label":`Copy meeting link`,title:`Copy meeting link`,html:s(`copy`,{size:`sm`}),on:{click:()=>Ut(k.url,`Meeting link copied`)}}),e(`button`,{class:`icon-btn meeting__action`,type:`button`,"aria-label":`Remove meeting link`,title:`Remove meeting link`,html:s(`close`,{size:`sm`}),on:{click:ht}})])):p&&p.available()&&H.meetingBox.append(e(`button`,{class:`btn btn--ghost meeting__add`,type:`button`,html:s(`video`,{size:`sm`})+`<span>Add Puter Meetings link</span>`,on:{click:pt}})),dt())}function pt(){if(k&&k.url||!p||!p.available())return;let e=p.mintLink();k={url:e.url,code:e.code},$i(`Meeting Link Added`),ft(),H.meetingBox.querySelector(`.meeting__action`)?.focus()}function ht(){k=null,ft(),H.meetingBox.querySelector(`.meeting__add`)?.focus()}async function gt(){if(S===`task`)return _t();if(S===`event`&&!Se()){H.guestInput.focus();return}let e=()=>{let e=H.allDay.checked,t=Ze(),n=Qe();if($e()||Number.isNaN(t.getTime())||Number.isNaN(n.getTime()))return ut(`Please provide valid start and end times.`),null;let r=et();return r?(ut(r),null):(e?(t=B(t),n=V(n)):n<t&&(n=L(n,1)),{allDay:e,start:t,end:n})},n=e();if(!n)return;if(S===`event`&&D.length&&!M&&!(x&&x.organizer)){if(P)return;let t=b;P=!0;try{await ve()}finally{P=!1}if(!b||b!==t||z)return;if(S===`task`)return _t();if(n=e(),!n)return}let{allDay:i,start:a,end:o}=n,s=JSON.stringify(D);ge();let c=S===`ooo`,l=x&&x.organizer||(!c&&D.length&&M?{email:M}:null),d=!!(M&&l&&l.email===M),f={title:H.title.value.trim()||(c?`Out of office`:``),description:H.description.value.trim(),location:H.location.value.trim(),start:a.getTime(),end:o.getTime(),allDay:i,color:C,ooo:c,reminders:i||c?[]:[...E],guests:c?[]:D.map(e=>d&&e.email===M&&e.status===`needs-action`?{...e,status:`accepted`}:{...e}),organizer:l,meeting:!c&&k?{...k}:null};if(x&&x.seriesId){let e=x,t=w,n=JSON.stringify(nt(t,a.getTime())??null)!==ee,r=s!==O,i=JSON.stringify(k??null)!==A;Qr({mode:`edit`,allowOne:!n&&!r&&!i,onConfirm:n=>{bt(e,f,t,n),Q()}});return}let p=!!x,m={id:x?x.id:void 0,...f},h=w&&w.until!=null&&w.until<a.getTime()?{...w,until:V(a).getTime()}:w;h?m.recurrence=h:x&&x.recurrence&&(m.recurrence=null);let g=p&&x&&Array.isArray(x.reminders)&&x.reminders.length>0,_=f.reminders.length>0&&!g,v=p&&x&&x.booking&&(m.start!==x.start||m.end!==x.end)?x.booking.name||x.booking.email||`the guest`:``,y=x&&t.getEvent(x.id);Promise.resolve(t.saveEvent(m)).then(e=>(r&&r(),e&&e.ooo?Promise.all([Jt(y,e),yt(e,p)]):(u(p?v?`Event updated — ${v} won't be notified of the change`:`Event updated`:`Event created`,{variant:`success`}),p||$i(`Event Created`),_&&$i(`Reminder Set`),Jt(y,e)))).catch(e=>{Qn(e)||(console.error(e),u(`Could not save event. Please try again.`,{variant:`danger`}))}),Q()}function _t(){let e=H.allDay.checked,n=Ze();if($e()||Number.isNaN(n.getTime())){ut($e()?`Please provide a due time.`:`Please provide a valid due date.`);return}let i=!!x,a={id:x?x.id:void 0,title:H.title.value.trim(),notes:H.description.value.trim(),due:n.getTime(),allDay:e,done:H.doneToggle.checked,color:C};Promise.resolve(t.saveTask(a)).then(()=>{r&&r(),u(i?`Task updated`:`Task created`,{variant:`success`})}).catch(e=>{Qn(e)||(console.error(e),u(`Could not save task. Please try again.`,{variant:`danger`}))}),Q()}function yt(e,n,{quiet:i=!1}={}){return Promise.resolve(t.applyOutOfOffice(e)).then(e=>{r&&r();let t=e&&e.declined?e.declined.length:0;if(!t){i||u(n?`Out of office updated`:`Out of office set`,{variant:`success`});return}u(`Out of office set · ${t} event${t===1?``:`s`} declined`,{variant:`success`,action:{label:`Undo`,onClick:()=>{if(ir())return void u(`You're offline — reconnect to make changes`);Promise.resolve(e.undo()).then(()=>r&&r()).catch(Z)}}})})}function bt(e,n,i,a){let o=t.getEvent(e.seriesId),s;s=a===`one`?t.updateOccurrence(e.seriesId,e.recurrenceId,n):a===`future`?t.updateFuture(e.seriesId,e.recurrenceId,{...n,recurrence:i}):t.updateSeries(e.seriesId,{...n,recurrence:i}),Promise.resolve(s).then(t=>{r&&r();let n=!!(t&&t.event&&t.event.ooo);u(n?`Out of office updated`:`Event updated`,{variant:`success`,action:wt(t)});let i=Jt(o,t&&t.event,{recurrenceId:a===`future`?e.recurrenceId:null});if(!n)return i;let s=a===`one`?mt(t.event,e.recurrenceId):t.event;return Promise.all([i,s?yt(s,!0,{quiet:!0}):null])}).catch(e=>{Qn(e)||(console.error(e),u(`Could not save event. Please try again.`,{variant:`danger`}))})}function wt(e){if(!(!e||typeof e.undo!=`function`))return{label:`Undo`,onClick:()=>{if(ir())return void u(`You're offline — reconnect to make changes`);Promise.resolve(e.undo()).then(()=>r&&r()).catch(Z)}}}function Z(e){Qn(e)||(console.error(e),u(`Could not undo — please try again.`,{variant:`danger`}))}function Tt(){if(!x)return Q();if(S===`task`)return Et();let e=x;if(e.seriesId){Qr({mode:`delete`,onConfirm:t=>{Dt(e,t),Q()}});return}let n=l?l.cancellationFor(e):null;Promise.resolve(t.deleteEvent(e.id)).then(()=>{r&&r(),u(`Event deleted`,{variant:`default`,action:{label:`Undo`,onClick:()=>{Promise.resolve(t.saveEvent(e)).then(()=>r&&r()).catch(Z)}}}),n&&Xi({invites:l,store:t,cancel:n,toast:u})}).catch(e=>{Qn(e)||(console.error(e),u(`Could not delete event.`,{variant:`danger`}))}),Q()}function Et(){let e=x;if(!e)return Q();Promise.resolve(t.deleteTask(e.id)).then(()=>{r&&r(),u(`Task deleted`,{variant:`default`,action:{label:`Undo`,onClick:()=>Promise.resolve(t.saveTask(e)).then(()=>r&&r()).catch(Z)}})}).catch(e=>{Qn(e)||(console.error(e),u(`Could not delete task.`,{variant:`danger`}))}),Q()}function Dt(e,n){let i=l?n===`future`?l.cancellationFor(e,{future:!0}):l.cancellationFor(n===`one`?e:{id:e.seriesId}):null,a,o;a=n===`one`?t.deleteOccurrence(e.seriesId,e.recurrenceId):n===`future`?t.deleteFuture(e.seriesId,e.recurrenceId):Promise.resolve(t.deleteEvent(e.seriesId)).then(e=>(o=e?()=>t.saveEvent(e):null,null)),Promise.resolve(a).then(e=>{r&&r(),u(`Event deleted`,{variant:`default`,action:e&&e.undo?wt(e):wt({undo:o})}),i&&(n===`all`||e)&&Xi({invites:l,store:t,cancel:i,toast:u})}).catch(e=>{Qn(e)||(console.error(e),u(`Could not delete event.`,{variant:`danger`}))})}function Ot(e){if(e.key!==`Tab`||!b)return;let t=b.querySelectorAll(`button, input, textarea, select, a[href], [tabindex]:not([tabindex="-1"])`);if(!t.length)return;let n=[...t].filter(e=>e.offsetParent!==null||e===document.activeElement);if(!n.length)return;let r=n[0],i=n[n.length-1];b.contains(document.activeElement)?e.shiftKey&&document.activeElement===r?(e.preventDefault(),i.focus()):!e.shiftKey&&document.activeElement===i&&(e.preventDefault(),r.focus()):(e.preventDefault(),(e.shiftKey?i:r).focus())}function kt(e){if(!document.querySelector(`.dialog-scrim`)&&!(e.isComposing||e.keyCode===229)){if(Ve(e)){e.preventDefault(),e.stopPropagation();return}e.key===`Escape`&&Lr(e.target)||(e.key===`Escape`?(e.preventDefault(),Q()):(e.metaKey||e.ctrlKey)&&e.key===`Enter`?(e.preventDefault(),gt()):e.key===`Tab`&&Ot(e))}}function At(n,r){if(n&&n.readOnly)return fn(n);if(ir()){u(`You're offline — reconnect to make changes`),r&&r.onClose&&r.onClose();return}if(Q(),x=n,te=r&&r.onClose||null,S=n&&n.isTask?`task`:n&&n.ooo?`ooo`:r&&r.mode===`task`?`task`:r&&r.ooo?`ooo`:`event`,F=null,C=n&&n.color||r&&r.color||(S===`ooo`?re:`indigo`),n&&n.seriesId){let e=t.getEvent(n.seriesId);w=e&&e.recurrence?{...e.recurrence}:null}else w=n&&n.recurrence?{...n.recurrence}:null;if(R=document.activeElement,b=e(`div`,{class:`modal-scrim modal-scrim--anchored`},[ae()]),b.addEventListener(`pointerdown`,e=>{e.target===b&&Q()}),document.body.append(b),document.addEventListener(`keydown`,kt,!0),window.addEventListener(`resize`,Nt),E=n&&Array.isArray(n.reminders)?[...n.reminders]:[],D=n&&Array.isArray(n.guests)?n.guests.map(e=>({...e})):[],O=JSON.stringify(D),k=n&&n.meeting&&n.meeting.url?{...n.meeting}:null,A=JSON.stringify(k??null),j=!1,Ae(),d&&d.inUse&&d.inUse()&&d.revalidate(),H.modeToggle.style.display=n?`none`:``,n&&n.isTask)H.titleHeading.textContent=`Edit task`,H.title.value=n.title||``,H.description.value=n.notes||``,H.allDay.checked=!!n.allDay,H.doneToggle.checked=!!n.done,ct(new Date(n.due)),rt=60*6e4,H.deleteBtn.style.display=``;else if(n)H.titleHeading.textContent=S===`ooo`?`Edit out of office`:`Edit event`,H.title.value=n.title||``,H.description.value=n.description||``,H.location.value=n.location||``,H.allDay.checked=n.allDay,ct(new Date(n.start)),lt(new Date(n.end)),rt=n.allDay?60*6e4:Math.max(n.end-n.start,5*6e4),H.deleteBtn.style.display=``;else if(S===`task`){H.titleHeading.textContent=`New task`;let e=!!(r&&r.allDay),t=r&&r.due!=null?new Date(r.due):Le(new Date,30);H.allDay.checked=e,H.doneToggle.checked=!1,ct(e?B(t):t),lt(e?B(t):ne(t,60)),rt=60*6e4,H.deleteBtn.style.display=`none`}else if(S===`ooo`){H.titleHeading.textContent=`New out of office`;let e=r&&r.start?new Date(r.start):B(new Date),t=r&&r.allDay!=null?!!r.allDay:!0;H.allDay.checked=t,H.title.value=`Out of office`,ct(e),lt(t?e:ne(e,60)),rt=60*6e4,H.deleteBtn.style.display=`none`}else{H.titleHeading.textContent=`New event`;let e=new Date,t=r&&r.start?new Date(r.start):Le(e,30),n=!!(r&&r.allDay);H.allDay.checked=n;let i=r&&r.end!=null&&Number(r.end)>t.getTime(),a=i?new Date(r.end):n?t:ne(t,60);ct(t),lt(a),rt=i?a.getTime()-t.getTime():60*6e4,H.deleteBtn.style.display=`none`}it=H.allDay.checked?at():1,se(),J(),pe(),ft(),Je(),ee=JSON.stringify(nt(w,Ze().getTime())??null),K(),oe(),ut(``),jt(),requestAnimationFrame(()=>H.title.focus())}function jt(){if(!b)return;let e=b.firstElementChild;if(!e)return;let t=e.querySelector(`.modal__body`),n=t?t.scrollTop:0;e.style.setProperty(`--modal-anchor-top`,`0px`);let r=getComputedStyle(b),i=b.clientHeight-(parseFloat(r.paddingTop)||0)-(parseFloat(r.paddingBottom)||0),a=Math.max(0,Math.round((i-e.offsetHeight)/2));e.style.setProperty(`--modal-anchor-top`,a+`px`),t&&n&&t.scrollTop!==n&&(t.scrollTop=n)}let Mt=null;function Nt(){!b||Mt||(Mt=requestAnimationFrame(()=>{Mt=null,jt()}))}function Pt(){window.removeEventListener(`resize`,Nt),Mt&&cancelAnimationFrame(Mt),Mt=null}function Ft(e){let t=v.find(t=>t.key===e)||v.find(e=>e.key===`indigo`);return t?t.hex:`transparent`}function It(e){let n={hour12:t.getSettings().hour12};if(e.isTask){let t=new Date(e.due);return e.allDay?`Due ${me(t)}`:`Due ${me(t)} · ${X(t,n)}`}let r=new Date(e.start),i=new Date(e.end);return e.allDay?W(r,i)?`${me(r)} · All day`:`${he(r,i)} · All day`:W(r,i)?`${me(r)} · ${_e(r,i,n)}`:`${me(r)}, ${X(r,n)} – ${me(i)}, ${X(i,n)}`}function Lt(e){if(e.isTask)return``;let n=e.seriesId?t.getEvent(e.seriesId)||{}:e;return n.recurrence?xt(n.recurrence,n.start):``}function Rt(e){if(e.isTask||e.allDay)return``;let n=t.getSettings().secondaryTz;if(!ye(n))return``;let r={hour12:t.getSettings().hour12};return`${Te(n)}: ${Ce(e.start,n,r)} – ${Ce(e.end,n,r)}`}function zt(t,n){return e(`div`,{class:`view__row`},[e(`span`,{class:`view__row-icon`,html:s(t,{size:`sm`})}),e(`div`,{class:`view__row-main`},n)])}let Bt={accepted:`Accepted`,declined:`Declined`,tentative:`Maybe`,"needs-action":`Awaiting reply`};function Vt(e){return e.seriesId||e.id}function Ht(e){return!c||e.isTask||e.ooo||e.invite?!1:!e.organizer||!!(M&&e.organizer.email===M)}function Ut(e,t){(navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(e):Promise.reject(Error(`clipboard unavailable`))).then(()=>u(t,{variant:`success`})).catch(()=>u(`Could not copy — clipboard access was blocked.`,{variant:`danger`}))}function Wt(e){return`Yes: ${e}/accept\nNo: ${e}/decline\nMaybe: ${e}/maybe`}function Gt(t,n){return e(`button`,{class:`icon-btn guests__copy`,type:`button`,title:`Copy one-click RSVP links (Yes/No/Maybe)`,"aria-label":`Copy RSVP links for ${n}`,html:s(`copy`,{size:`sm`}),on:{click:()=>Ut(Wt(t),`RSVP links copied`)}})}let Kt=!1;function qt(e){let{message:t,variant:n}=qi(e);u(t,{variant:n})}async function Jt(e,n,{recurrenceId:r=null}={}){if(!n)return;let i=l&&l.removedGuestsFor?await l.removedGuestsFor(e,n,{recurrenceId:r}):null,a=e&&e.id!==n.id&&r!=null,o=()=>!!t.getEvent(n.id)&&(!a||!!t.getEvent(e.id)&&!vt(t.getEvent(e.id),r)),s=()=>Zi({eventId:n.id,previousEventId:a?e.id:null,invites:l,store:t,canSend:o});i?Xi({invites:l,store:t,cancel:i,onClose:s}):s()}function Yt(n,r){if(!r||!r.ready.length||ir())return null;let i=r.pending.filter(e=>!e.sentAt),a=r.pending.filter(e=>e.sentAt),o=r.pending.length===0,c;return c=o?`Resend invitations`:!a.length&&r.lastSentAt?`Email ${i.length} new guest${i.length===1?``:`s`}`:i.length?r.lastSentAt?`Send ${r.pending.length} invitations`:`Email invitation${r.ready.length===1?``:`s`}`:`Send updated invitations`,e(`button`,{class:`btn ${o?``:`btn--primary `}view__send-invites`,type:`button`,html:s(`mail`,{size:`sm`})+`<span>${c}</span>`,on:{click:e=>{if(Kt)return;Kt=!0,e.currentTarget.disabled=!0;let i=o?{emails:r.ready.map(e=>e.email),force:!0}:{};Promise.resolve(l.send(n,i)).then(qt).catch(e=>u(e.message||`Could not send the invitations.`,{variant:`danger`})).then(()=>{Kt=!1,!document.querySelector(`.dialog-scrim`)&&z&&x&&un(t.getEvent(x.id)||x)})}}})}function Xt(t,n){let r=l&&l.available()&&!ir();return e(`div`,{class:`view__guest view__suggestion`},[e(`div`,{class:`view__guest-main`},[e(`span`,{class:`view__guest-who`,text:n.name?`${n.name} — ${n.email}`:n.email}),e(`span`,{class:`view__muted view__guest-note`,text:`Suggested by ${n.by||`a guest`}`})]),e(`button`,{class:`btn btn--primary view__suggest-approve`,type:`button`,text:r?`Add & invite`:`Add guest`,on:{click:e=>Zt(e,t,n,!0)}}),e(`button`,{class:`btn view__suggest-dismiss`,type:`button`,text:`Dismiss`,on:{click:e=>Zt(e,t,n,!1)}})])}function Zt(e,n,r,i){if(ir())return void u(`You're offline — reconnect to make changes`);let a=e.currentTarget.closest(`.view__suggestion`),o=a?[...a.querySelectorAll(`button`)]:[];for(let e of o)e.disabled=!0;Promise.resolve(i?Qt(n,r):c.dismissSuggestion(Vt(n),r.email)).then(()=>{document.querySelector(`.dialog-scrim`)||z&&x&&un(t.getEvent(x.id)||x)}).catch(e=>{for(let e of o)e.disabled=!1;u(e.message||`Could not update the suggestion.`,{variant:`danger`})})}async function Qt(e,n){let r=t.getEvent(Vt(e));if(!r)throw Error(`This event no longer exists.`);let i=n.name?{email:n.email,name:n.name,status:`needs-action`}:{email:n.email,status:`needs-action`},a=await t.saveEvent({...r,guests:[...r.guests||[],i]});if(!a.guests.some(e=>e.email===n.email))throw Error(`Could not add them — the guest list is full.`);l&&l.available()&&l.sendWhenReady({id:a.id})}function $t(t){let n=t.guests,r=t.organizer?t.organizer.email:``,i=r&&!n.some(e=>e.email===r)?{...t.organizer,status:`accepted`}:null,a=i?[i,...n]:n,o={accepted:0,declined:0,tentative:0,"needs-action":0};for(let e of a)o[e.status]==null?o[`needs-action`]++:o[e.status]++;let u=[];o.accepted&&u.push(`${o.accepted} yes`),o.declined&&u.push(`${o.declined} no`),o.tentative&&u.push(`${o.tentative} maybe`),o[`needs-action`]&&u.push(`${o[`needs-action`]} awaiting`);let d=Ht(t),f=d&&c.linksFor(Vt(t))||{},p=d&&l&&l.available()?l.planFor(t):null,m=new Map((p?p.ready:[]).map(e=>[e.email,e])),h=t=>{let n=m.get(t);return!n||!n.sentAt?null:e(`span`,{class:`view__muted view__guest-sent`,text:n.current?`Invited`:`Update pending`,title:n.current?`Invitation emailed ${me(new Date(n.sentAt))}`:`This event changed after they were emailed`})},g=(t,n)=>e(`div`,{class:`view__guest`},[e(`span`,{class:`view__rsvp-dot`,dataset:{status:t.status||`needs-action`},role:`img`,title:Bt[t.status]||Bt[`needs-action`],"aria-label":Bt[t.status]||Bt[`needs-action`]}),e(`div`,{class:`view__guest-main`},[e(`span`,{class:`view__guest-who`,text:t.name?`${t.name} — ${t.email}`:t.email}),t.comment?e(`span`,{class:`view__muted view__guest-note`,text:`“${t.comment}”`}):null]),n?e(`span`,{class:`view__muted`,text:`Organizer`}):null,n?null:h(t.email),!n&&f[t.email]?Gt(f[t.email],t.email):null]),_=a.slice(0,8),v=_.map(e=>g(e,e.email===r));a.length>_.length&&v.push(e(`div`,{class:`view__muted`,text:`+ ${a.length-_.length} more`}));let y=[];if(d){let i=n.filter(e=>e.email!==r&&e.email!==M),a=i.filter(e=>f[e.email]),o=[],c=p?Yt(t,p):null;if(c&&o.push(c),a.length){let t=e=>`${e.email}\n${Wt(f[e.email]).replace(/^/gm,`  `)}`;o.push(e(`button`,{class:`btn view__copy-links`,type:`button`,html:s(`copy`,{size:`sm`})+`<span>Copy RSVP links</span>`,on:{click:()=>Ut(a.map(t).join(`

`),a.length===1?`RSVP links copied`:`RSVP links for ${a.length} guests copied`)}}))}o.length&&y.push(e(`div`,{class:`view__guest-actions`},o)),i.length>a.length&&!ir()&&y.push(e(`div`,{class:`view__muted`,text:`Preparing RSVP links…`}))}let b=d&&typeof c.suggestionsFor==`function`?c.suggestionsFor(Vt(t)):[],x=b.length?e(`div`,{class:`view__suggestions`},[e(`div`,{class:`view__muted`,text:`Guests suggested adding`}),...b.map(e=>Xt(t,e))]):null;return[e(`div`,{text:`${a.length} guest${a.length===1?``:`s`}`}),u.length?e(`div`,{class:`view__muted`,text:u.join(`, `)}):null,e(`div`,{class:`view__guests`},v),x,...y]}function en(e){let t=e&&e.guests||[];if(!t.length)return null;let n=e.invite&&e.invite.attendee;return M&&t.find(e=>e.email===M)||n&&t.find(e=>e.email===n)||null}function tn(e){if(ir())return void u(`You're offline — reconnect to make changes`);let n=x.seriesId||x.id,r=x,i=(en(x)||{}).email||M;Promise.resolve(t.rsvpEvent(n,e,i)).then(t=>{if(!t)return;un({...x,guests:t.guests,declined:t.declined});let n=t&&t.organizer||r.organizer;_&&_.reply&&r.invite&&n&&_.reply.offerReply(t||r,e)}).catch(e=>{Qn(e)||(console.error(e),u(`Could not save your response.`,{variant:`danger`}))})}function nn(){if(ir())return void u(`You're offline — reconnect to make changes`);let e=x.id;Promise.resolve(t.toggleTask(e)).then(()=>un(t.getTask(e))).catch(e=>{Qn(e)||(console.error(e),u(`Could not update task.`,{variant:`danger`}))})}function rn(){if(ir())return void u(`You're offline — reconnect to make changes`);let e=x.id;Promise.resolve(t.setDeclined(e,!1)).then(()=>un(t.getEvent(e))).catch(e=>{Qn(e)||(console.error(e),u(`Could not restore event.`,{variant:`danger`}))})}function an(t){if(ir())return void u(`You're offline — reconnect to make changes`);let n=t.booking.name||t.booking.email||`The guest`,r=e(`form`,{class:`modal rr-modal`,role:`dialog`,"aria-modal":`true`,"aria-labelledby":`cancel-booking-title`},[e(`div`,{class:`modal__head`},[e(`h2`,{class:`modal__title`,id:`cancel-booking-title`,text:`Cancel this booking?`})]),e(`div`,{class:`modal__body`},[e(`p`,{text:`${n} will get an email letting them know, and the time opens up again.`})]),e(`div`,{class:`modal__foot`},[e(`div`,{class:`spacer`}),e(`button`,{class:`btn`,type:`button`,text:`Keep it`,on:{click:()=>i()}}),e(`button`,{class:`btn btn--danger`,type:`submit`,text:`Cancel booking`})])]);r.addEventListener(`submit`,e=>{e.preventDefault(),i();let r=b&&b.querySelector(`.view__cancel-booking`),a=e=>{r&&(r.disabled=e,r.setAttribute(`aria-busy`,String(e)))};a(!0),Promise.resolve(f.cancelBooking(t.booking.id)).then(e=>{Q();let t=e&&e.notified===!0;u(t?`Booking cancelled — cancellation email sent to ${n}.`:`Booking cancelled, but no cancellation email was sent.`,{variant:t?`success`:`default`})}).catch(e=>{a(!1),!Qn(e)&&(console.error(e),u(e.message||`Could not cancel the booking. Please try again.`,{variant:`danger`}))})});let i=Jr(r);requestAnimationFrame(()=>r.querySelector(`.btn--danger`).focus())}function on(t){let n=e(`div`,{class:`modal__head modal__head--view`},[e(`span`,{class:`view__kind`,text:`Public holiday`}),e(`button`,{class:`icon-btn`,type:`button`,"aria-label":`Close`,title:`Close (Esc)`,html:s(`close`),on:{click:Q}})]),r=[zt(`clock`,[e(`div`,{text:`${me(new Date(t.start))} · All day`})])],i=t.bridged?`A working day between two holidays, which makes it one as well.`:t.observed?`The day off for a holiday that falls on a weekend this year.`:``;r.push(zt(`calendar`,[e(`div`,{text:`Holidays in ${t.countryName}`}),i?e(`div`,{class:`view__muted`,text:i}):null,e(`div`,{class:`view__muted`,text:`Built into the calendar · not editable`})]));let a=m?e(`div`,{class:`modal__foot modal__foot--view`},[e(`button`,{class:`btn btn--ghost`,type:`button`,html:s(`settings`,{size:`sm`})+`<span>Change country…</span>`,on:{click:()=>{Q(),m()}}})]):null;return e(`div`,{class:`modal modal--view modal--holiday`,role:`dialog`,"aria-modal":`true`,"aria-labelledby":`view-title`,tabindex:`-1`},[n,e(`div`,{class:`modal__body view__body`},[e(`div`,{class:`view__title-row`},[e(`span`,{class:`view__color view__color--holiday`,html:s(`flag`,{size:`sm`})}),e(`div`,{class:`view__title-main`},[e(`h2`,{class:`view__title`,id:`view-title`,text:t.title})])]),...r]),a])}function cn(n){let r={hour12:t.getSettings().hour12},i=e(`div`,{class:`modal__head modal__head--view`},[e(`span`,{class:`view__kind`,text:`Clock change`}),e(`button`,{class:`icon-btn`,type:`button`,"aria-label":`Close`,title:`Close (Esc)`,html:s(`close`),on:{click:Q}})]),a=Ce(n.at+n.before*6e4,`UTC`,r),o=Ce(n.at+n.after*6e4,`UTC`,r),c=n.after-n.before,l=24-c/60,u=[zt(`clock`,[e(`div`,{text:`${me(new Date(n.start))} · at ${a}`}),e(`div`,{class:`view__muted`,text:`${a} becomes ${o} · the day has ${Number.isInteger(l)?l:l.toFixed(1)} hours`})]),zt(`calendar`,[e(`div`,{text:`${Te(n.zone)} time (${Oe(n.before)} → ${Oe(n.after)})`}),e(`div`,{class:`view__muted`,text:`From your browser’s time zone · not editable`})])],d=h?e(`div`,{class:`modal__foot modal__foot--view`},[e(`button`,{class:`btn btn--ghost`,type:`button`,html:s(`settings`,{size:`sm`})+`<span>Clock change settings…</span>`,on:{click:()=>{Q(),h()}}})]):null;return e(`div`,{class:`modal modal--view modal--holiday`,role:`dialog`,"aria-modal":`true`,"aria-labelledby":`view-title`,tabindex:`-1`},[i,e(`div`,{class:`modal__body view__body`},[e(`div`,{class:`view__title-row`},[e(`span`,{class:`view__color view__color--holiday`,html:s(`clock`,{size:`sm`})}),e(`div`,{class:`view__title-main`},[e(`h2`,{class:`view__title`,id:`view-title`,text:`${n.title} ${sn(c)}`})])]),...u]),d])}function ln(t){if(t.holiday)return on(t);if(t.dst)return cn(t);let n=!!t.isTask,r=n?`Task`:t.ooo?`Out of office`:`Event`,i=e(`div`,{class:`modal__head modal__head--view`},[e(`span`,{class:`view__kind`,text:r}),e(`button`,{class:`icon-btn`,type:`button`,"aria-label":`Edit ${r.toLowerCase()}`,title:`Edit (e)`,html:s(`edit`,{size:`sm`}),on:{click:()=>At(t,null)}}),e(`button`,{class:`icon-btn`,type:`button`,"aria-label":`Delete ${r.toLowerCase()}`,title:`Delete`,html:s(`trash`,{size:`sm`}),on:{click:Tt}}),e(`button`,{class:`icon-btn`,type:`button`,"aria-label":`Close`,title:`Close (Esc)`,html:s(`close`),on:{click:Q}})]),o=[];n&&t.done&&o.push(e(`span`,{class:`view__badge`,text:`Completed`})),!n&&t.declined&&o.push(e(`span`,{class:`view__badge`,text:`Declined`})),!n&&t.invite&&o.push(e(`span`,{class:`view__badge`,text:`From email`}));let c=[],l=[Lt(t),Rt(t)].filter(Boolean);c.push(zt(!n&&t.ooo?`plane`:`clock`,[e(`div`,{text:It(t)}),...l.map(t=>e(`div`,{class:`view__muted`,text:t}))]));let u=!n&&!t.ooo&&!t.allDay&&Array.isArray(t.reminders)?[...t.reminders].sort((e,t)=>e-t):[];if(u.length&&c.push(zt(`bell`,u.map(t=>e(`div`,{text:We(t)})))),!n&&t.location&&c.push(zt(`map-pin`,[e(`div`,{},a(t.location))])),!n&&!t.ooo&&t.meeting&&t.meeting.url&&c.push(zt(`video`,[e(`div`,{},[e(`a`,{class:`linkified view__join`,href:t.meeting.url,text:`Join meeting`,target:`_blank`,rel:`noopener noreferrer`})]),e(`div`,{class:`view__muted view__join-url`,text:t.meeting.url})])),!n&&Array.isArray(t.guests)&&t.guests.length&&c.push(zt(`users`,$t(t))),!n&&t.booking){let n=t.booking.pageTitle||`your booking link`;c.push(zt(`link`,[e(`div`,{text:`Booked via “${n}”`}),t.booking.email?e(`div`,{class:`view__muted`,text:t.booking.name?`${t.booking.name} · ${t.booking.email}`:t.booking.email}):null]))}let d=n?t.notes:t.description;d&&c.push(zt(`align-left`,[e(`div`,{class:`view__desc`},a(d))]));let p=n?null:en(t),m=!!(p&&t.organizer&&t.organizer.email!==p.email),h=[];if(n)h.push(e(`button`,{class:`btn btn--ghost`,type:`button`,dataset:{focusKey:`view:done`},html:s(`check`,{size:`sm`})+`<span>${t.done?`Mark as not done`:`Mark as done`}</span>`,on:{click:nn}}));else if(m){let t=(t,n)=>e(`button`,{class:`view__going-chip`,type:`button`,text:t,dataset:{focusKey:`view:going:${n}`},"aria-pressed":String(p.status===n),on:{click:()=>tn(n)}});h.push(e(`span`,{class:`view__going-label`,id:`view-going-label`,text:`Going?`}),e(`div`,{class:`segmented view__going`,role:`group`,"aria-labelledby":`view-going-label`},[t(`Yes`,`accepted`),t(`No`,`declined`),t(`Maybe`,`tentative`)]))}else t.declined&&!t.seriesId&&h.push(e(`button`,{class:`btn btn--ghost`,type:`button`,text:`Restore (accept)`,on:{click:rn}}));return!n&&t.booking&&f&&!t.seriesId&&t.end>Date.now()&&h.push(e(`button`,{class:`btn btn--ghost view__cancel-booking`,type:`button`,html:s(`close`,{size:`sm`})+`<span>Cancel booking…</span>`,on:{click:()=>an(t)}})),e(`div`,{class:`modal modal--view`,role:`dialog`,"aria-modal":`true`,"aria-labelledby":`view-title`,tabindex:`-1`},[i,e(`div`,{class:`modal__body view__body`},[e(`div`,{class:`view__title-row`},[e(`span`,{class:`view__color`,style:{background:Ft(t.color)}}),e(`div`,{class:`view__title-main`},[e(`h2`,{class:`view__title`,id:`view-title`,text:t.title||`(Untitled)`}),o.length?e(`div`,{class:`view__badges`},o):null])]),...c]),h.length?e(`div`,{class:`modal__foot modal__foot--view`},h):null])}function un(e){if(!z||!b)return;if(!e)return Q();let t=document.activeElement,r=b.contains(t),i=r&&t?t.getAttribute(`data-focus-key`):null;x=e;let a=ln(e);a.classList.add(`modal--settled`),n(b).append(a),jt(),r&&((i?[...a.querySelectorAll(`[data-focus-key]`)].find(e=>e.dataset.focusKey===i):null)||a).focus()}function dn(e){if(!document.querySelector(`.dialog-scrim`))if(e.key===`Escape`)e.preventDefault(),Q();else if(e.key===`Tab`)Ot(e);else if(x&&x.readOnly)return;else(e.key===`e`||e.key===`E`)&&!e.metaKey&&!e.ctrlKey&&!e.altKey?(e.preventDefault(),x&&At(x,null)):(e.key===`Delete`||e.key===`Backspace`)&&(e.preventDefault(),Tt())}function fn(t){if(!t)return;Q(),x=t,S=t.isTask?`task`:t.ooo?`ooo`:`event`,z=!0,R=document.activeElement;let n=ln(t);b=e(`div`,{class:`modal-scrim modal-scrim--anchored`},[n]),b.addEventListener(`pointerdown`,e=>{e.target===b&&Q()}),document.body.append(b),document.addEventListener(`keydown`,dn,!0),window.addEventListener(`resize`,Nt),jt(),requestAnimationFrame(()=>n.focus()),!M&&t.organizer&&Array.isArray(t.guests)&&t.guests.length&&ve().then(e=>{e&&z&&x===t&&un(x)}),c&&Ht(t)&&Array.isArray(t.guests)&&t.guests.length&&c.refreshEvent(Vt(t))}c&&c.onUpdate(e=>{!z||!x||x.isTask||Vt(x)===e&&(document.querySelector(`.dialog-scrim`)||un(t.getEvent(x.id)||x))});function pn(e){At(null,e)}function mn(e){At(e,null)}function Q(){if(!b)return;d&&d.settle&&d.settle(),document.removeEventListener(`keydown`,kt,!0),document.removeEventListener(`keydown`,dn,!0),Pt(),z=!1,b.remove(),b=null,x=null;let e=te;te=null,e&&e(),hn(),R=null}function hn(){if(!R)return;if(R.isConnected&&R.focus){R.focus();return}let e=R.dataset&&R.dataset.focusKey;if(e&&typeof CSS<`u`&&CSS.escape){let t=document.querySelector(`[data-focus-key="${CSS.escape(e)}"]`);t&&t.focus&&t.focus()}}return{openNew:pn,openEdit:mn,openView:fn,close:Q,isOpen:U}}var na=40,ra=400;function ia({store:t,onPick:r}){let i=null,a=null,o=null,c=[],l=[],u=-1,d=null;function f(){return!!i}function p(e,t,n,r){return e.recurrence?t&&t.length?t.reduce((e,t)=>t.start<e.start?t:e):n&&n.length?n.reduce((e,t)=>t.start>e.start?t:e):ht(e,r)||e:e}function m(e){let t=new Map;for(let n of e){if(!n.seriesId)continue;let e=t.get(n.seriesId);e||t.set(n.seriesId,e=[]),e.push(n)}return t}function h(){let e=Date.now(),n=ra*k,r=m(t.getEventsInRange(e,e+n,{includeHidden:!0})),i=m(t.getEventsInRange(e-n,e,{includeHidden:!0}));c=t.getAllEvents().map(t=>({event:t,rep:p(t,r.get(t.id),i.get(t.id),e),title:t.title||``,hay:`${t.title||``}\n${t.location||``}\n${t.description||``}`.toLowerCase()}));for(let e of t.getAllEvents()){if(!e.recurrence)continue;let n=new Set((e.exdates||[]).map(Number));for(let[r,i]of Object.entries(e.overrides||{})){if(!i||n.has(Number(r))||![`title`,`location`,`description`].some(t=>i[t]!=null&&i[t]!==e[t]))continue;let a=t.getEvent(`${e.id}::${r}`);a&&c.push({event:a,rep:a,title:a.title||``,hay:`${a.title||``}\n${a.location||``}\n${a.description||``}`.toLowerCase()})}}for(let e of t.getAllTasks())c.push({event:e,rep:{...e,start:e.due,end:e.due},title:e.title||``,hay:`${e.title||``}\n${e.notes||``}`.toLowerCase()})}function g(){if(i){a.focus(),a.select();return}d=document.activeElement,h(),v(),document.body.append(i),document.addEventListener(`keydown`,D,!0),requestAnimationFrame(()=>a&&a.focus()),b(``)}function _(){i&&(document.removeEventListener(`keydown`,D,!0),i.remove(),i=null,a=null,o=null,c=[],l=[],u=-1,d&&d.focus&&d.focus(),d=null)}function v(){a=e(`input`,{class:`search__input`,type:`text`,placeholder:`Search events and tasks…`,autocomplete:`off`,autocapitalize:`off`,"aria-label":`Search events and tasks`,role:`combobox`,"aria-expanded":`true`,"aria-controls":`search-results`,"aria-autocomplete":`list`,on:{input:()=>b(a.value)}}),a.spellcheck=!1,o=e(`div`,{class:`search__results`,id:`search-results`,role:`listbox`,"aria-label":`Search results`}),i=e(`div`,{class:`search-scrim`},[e(`div`,{class:`search__panel`,role:`dialog`,"aria-modal":`true`,"aria-label":`Search events and tasks`},[e(`div`,{class:`search__bar`},[e(`span`,{class:`search__icon`,html:s(`search`,{size:`sm`})}),a,e(`kbd`,{class:`search__esc`,text:`Esc`})]),o])]),i.addEventListener(`pointerdown`,e=>{e.target===i&&_()})}function y(e,t){let n=e.toLowerCase();return n.startsWith(t)?0:n.includes(t)?1:2}function b(e){let t=e.trim().toLowerCase(),n=Date.now(),r=t?c.filter(e=>e.hay.includes(t)):c.slice();r.sort((e,r)=>{let i=t?y(e.title,t):0,a=t?y(r.title,t):0;if(i!==a)return i-a;let o=e.rep.end>n;return o===r.rep.end>n?o?e.rep.start-r.rep.start:r.rep.start-e.rep.start:o?-1:1}),l=r.slice(0,na),x(t,e.trim())}function x(r,i=r){if(n(o),l.length===0){let t=c.length===0?`Nothing to search yet`:r?`No events or tasks match “${i}”`:`No events or tasks`;o.append(e(`div`,{class:`search__empty`},[e(`p`,{text:t})])),u=-1,a.removeAttribute(`aria-activedescendant`);return}let s=t.getSettings().hour12;l.forEach((e,t)=>o.append(w(e,t,r,s))),T(0,!1)}function w(t,n,r,i){let a=t.event,o=t.rep,c=new Date(o.start),l=new Date(o.end),d=!!a.isTask,f;f=d?o.allDay?`To-do`:X(c,{hour12:i}):o.allDay?`All day`:_e(c,l,{hour12:i});let p=a.recurrence?`${xt(a.recurrence,a.start)} · ${f}`:`${me(c)} · ${f}`;a.location&&(p+=` · ${a.location}`),d&&a.done&&(p+=` · Done`);let m=d?`(Untitled task)`:`(Untitled)`,h=e(`span`,{class:`search__title`});h.append(aa(a.title||m,r));let g=d?e(`span`,{class:`search__check${a.done?` is-checked`:``}`,style:{"--chip-color":S(a.color),"--ev-fg":C(a.color)},html:a.done?s(`check`,{size:`sm`}):``,"aria-hidden":`true`}):e(`span`,{class:`search__dot`,style:{"--chip-color":S(a.color)}}),_=e(`div`,{class:`search__result${d?` search__result--task`:``}${d&&a.done?` is-done`:``}`,role:`option`,id:`search-opt-${n}`,"aria-selected":`false`,title:a.title||m},[g,e(`span`,{class:`search__text`},[h,e(`span`,{class:`search__meta`,text:p})]),a.recurrence?e(`span`,{class:`search__badge`,html:s(`repeat`,{size:`sm`}),title:`Repeats`}):null]);return _.addEventListener(`click`,()=>E(n)),_.addEventListener(`pointermove`,()=>{u!==n&&T(n,!1)}),_}function T(e,t=!0){l.length&&(u=Math.max(0,Math.min(e,l.length-1)),o.querySelectorAll(`.search__result`).forEach((e,n)=>{let r=n===u;e.setAttribute(`aria-selected`,String(r)),r&&t&&e.scrollIntoView({block:`nearest`})}),a.setAttribute(`aria-activedescendant`,`search-opt-${u}`))}function E(e){let t=l[e];if(!t)return;let n=t.event.isTask?t.event:t.rep;_(),r(n)}function D(e){e.isComposing||e.keyCode===229||(e.key===`Escape`?(e.preventDefault(),_()):e.key===`ArrowDown`?(e.preventDefault(),T(u+1)):e.key===`ArrowUp`?(e.preventDefault(),T(u-1)):e.key===`Enter`?u>=0&&(e.preventDefault(),E(u)):e.key===`Tab`&&e.preventDefault())}return{open:g,close:_,isOpen:f}}function aa(t,n){let r=document.createDocumentFragment();if(!n)return r.append(document.createTextNode(t)),r;let i=t.toLowerCase();if(i.length!==t.length)return r.append(document.createTextNode(t)),r;let a=0,o;for(;(o=i.indexOf(n,a))!==-1;)o>a&&r.append(document.createTextNode(t.slice(a,o))),r.append(e(`mark`,{text:t.slice(o,o+n.length)})),a=o+n.length;return a<t.length&&r.append(document.createTextNode(t.slice(a))),r}var oa=1;function sa({store:t,file:n=null}){let r=e(`div`,{class:`io__status`,role:`status`,"aria-live":`polite`,style:{display:`none`}}),i=e(`div`,{class:`io-progress__fill`}),a=e(`div`,{class:`io-progress__track`,role:`progressbar`,"aria-label":`Import progress`,"aria-valuemin":`0`,"aria-valuemax":`100`,"aria-valuenow":`0`},[i]),o=e(`span`,{class:`io-progress__text`}),c=e(`div`,{class:`io-progress`,style:{display:`none`}},[a,o]),l=!1,d=e(`input`,{type:`file`,accept:`.ics,.ical,.json,text/calendar,application/json`,style:{display:`none`},on:{change:x}}),f=e(`button`,{class:`btn`,type:`button`,html:s(`upload`,{size:`sm`})+`<span>Choose file…</span>`,on:{click:()=>d.click()}}),p=null,m=e(`button`,{class:`btn`,type:`button`,style:{display:`none`},html:s(`upload`,{size:`sm`})+`<span>Retry failed</span>`,on:{click:()=>{p&&!l&&C(p)}}}),h=e(`form`,{class:`modal io-modal`,role:`dialog`,"aria-modal":`true`,"aria-labelledby":`io-title`},[e(`div`,{class:`modal__head`},[e(`h2`,{class:`modal__title`,id:`io-title`,text:`Import & export`}),e(`button`,{class:`icon-btn`,type:`button`,"aria-label":`Close`,html:s(`close`),on:{click:()=>w()}})]),e(`div`,{class:`modal__body`},[e(`div`,{class:`io-section`},[e(`span`,{class:`field__label`,text:`Export`}),e(`p`,{class:`io-hint`,text:`Download all your events to back them up or move them to another calendar app.`}),e(`div`,{class:`io-actions`},[e(`button`,{class:`btn`,type:`button`,html:s(`download`,{size:`sm`})+`<span>iCalendar (.ics)</span>`,on:{click:y}}),e(`button`,{class:`btn`,type:`button`,html:s(`download`,{size:`sm`})+`<span>JSON backup</span>`,on:{click:b}})])]),e(`div`,{class:`io-section`},[e(`span`,{class:`field__label`,text:`Import`}),e(`p`,{class:`io-hint`,text:`Choose an .ics or .json file, or drop one onto the calendar. Imported events are added to your calendar; nothing is overwritten.`}),e(`div`,{class:`io-actions`},[f,m]),d,c,r])]),e(`div`,{class:`modal__foot`},[e(`div`,{class:`spacer`}),e(`button`,{class:`btn btn--primary`,type:`submit`,text:`Done`})])]);h.addEventListener(`submit`,e=>{e.preventDefault(),w()});function g(e,t){r.textContent=e,r.dataset.variant=t||``,r.style.display=e?`block`:`none`}function _(e,t){let n=t>0?Math.round(e/t*100):0;i.style.width=n+`%`,a.setAttribute(`aria-valuenow`,String(n)),o.textContent=t>0?`Importing ${e} of ${t}…`:`Importing…`,c.style.display=``}function v(){c.style.display=`none`,i.style.width=`0%`,a.setAttribute(`aria-valuenow`,`0`),o.textContent=``}function y(){let e=t.getAllEvents();if(!e.length)return g(`There are no events to export.`,`warn`);la(`calendar-${ua()}.ics`,ai(e),`text/calendar`),u(`Exported ${e.length} event${e.length===1?``:`s`}`,{variant:`success`})}function b(){let e=t.getAllEvents();if(!e.length)return g(`There are no events to export.`,`warn`);let n={version:oa,exportedAt:new Date().toISOString(),events:e};la(`calendar-${ua()}.json`,JSON.stringify(n,null,2),`application/json`),u(`Exported ${e.length} event${e.length===1?``:`s`}`,{variant:`success`})}async function x(e){await S(e.target.files&&e.target.files[0]),d.value=``}async function S(e){if(!(!e||l)){l=!0,f.disabled=!0,m.disabled=!0,g(`Reading file…`);try{let t=await e.text(),n=ca(e.name,t);if(!n.length){g(`No events found in that file.`,`warn`);return}await C(n)}catch(e){console.error(e),g(`Could not read that file. Make sure it is a valid .ics or .json export.`,`danger`)}finally{l=!1,f.disabled=!1,m.disabled=!1}}}async function C(e){l=!0,f.disabled=!0,m.style.display=`none`,g(`Importing…`),_(0,e.length);let n=e=>`${e} event${e===1?``:`s`}`,r=e===p;try{let{imported:i,failed:a,failedEvents:o}=await t.importEvents(e,{onProgress:_}),s=r?[]:p||[];a>0?(p=s.length?[...s,...o]:o,m.style.display=``,g(`Imported ${n(i)}; ${p.length} couldn't be saved. Retry saves just the missing ones — no duplicates.`,`warn`),u(`Imported ${n(i)} — ${a} failed`,{variant:`default`})):(p=s.length?s:null,p&&(m.style.display=``),g(`Imported ${n(i)}.`,`success`),u(`Imported ${n(i)}`,{variant:`success`})),i>0&&$i(`Calendar Imported`)}catch(e){p&&(m.style.display=``),Qn(e)?g(`You're offline — reconnect to import events.`,`warn`):(console.error(e),g(`Import failed. Please try again.`,`danger`))}finally{l=!1,f.disabled=!1,v()}}let w=Jr(h);requestAnimationFrame(()=>h.querySelector(`.btn`).focus()),n&&S(n)}function ca(e,t){let n=(e||``).toLowerCase(),r=t.trimStart();if((n.endsWith(`.json`)||r.startsWith(`{`)||r.startsWith(`[`))&&!n.endsWith(`.ics`)&&!n.endsWith(`.ical`)){let e=JSON.parse(t);return(Array.isArray(e)?e:e&&Array.isArray(e.events)?e.events:[]).filter(e=>e&&typeof e==`object`&&Number.isFinite(e.start))}return ui(t)}function la(t,n,r){let i=new Blob([n],{type:`${r};charset=utf-8`}),a=URL.createObjectURL(i),o=e(`a`,{href:a,download:t});document.body.append(o),o.click(),o.remove(),setTimeout(()=>URL.revokeObjectURL(a),1e3)}function ua(){let e=new Date,t=e=>String(e).padStart(2,`0`);return`${e.getFullYear()}-${t(e.getMonth()+1)}-${t(e.getDate())}`}function da(e,{store:t,canImport:n}){let r=0,i=e=>Array.from(e.dataTransfer?.types||[]).includes(`Files`),a=t=>e.contains(t.target)&&n(),o=()=>{r=0,e.classList.remove(`is-file-drop-target`)};function s(t){!i(t)||!a(t)||(r++,e.classList.add(`is-file-drop-target`))}function c(t){e.contains(t.target)&&--r<=0&&o()}function l(t){if(!i(t))return;t.preventDefault();let n=a(t);t.dataTransfer.dropEffect=n?`copy`:`none`,e.classList.toggle(`is-file-drop-target`,n)}function d(e){if(o(),!i(e)||(e.preventDefault(),!a(e)))return;let n=Array.from(e.dataTransfer.files||[]);if(n.length!==1){u(`Drop one calendar file at a time.`,{variant:`danger`});return}let r=n[0];if(!/\.(ics|ical|json)$/i.test(r.name)){u(`Choose an .ics, .ical, or .json calendar file.`,{variant:`danger`});return}sa({store:t,file:r})}let f={dragenter:s,dragleave:c,dragover:l,drop:d,dragend:o};for(let[e,t]of Object.entries(f))document.addEventListener(e,t);return window.addEventListener(`blur`,o),()=>{o();for(let[e,t]of Object.entries(f))document.removeEventListener(e,t);window.removeEventListener(`blur`,o)}}var fa=`https://meetings.puter.com/`,pa=`abcdefghijklmnopqrstuvwxyz`,ma=12,ha=4;function ga(e){return typeof e!=`string`||e.length>100?!1:/^https:\/\/meetings\.puter\.com\/#\/m\/(?:[a-z]{3}-[a-z]{4}-[a-z]{3}|[a-z]{4}-[a-z]{4}-[a-z]{4})$/.test(e)}function _a({origin:e=fa}={}){return{available(){return typeof crypto<`u`&&typeof crypto.getRandomValues==`function`},mintLink(){let t=[];for(;t.length<ma;){let e=crypto.getRandomValues(new Uint8Array(ma-t.length));for(let n of e)n<234&&t.push(pa[n%26])}let n=[];for(let e=0;e<ma;e+=ha)n.push(t.slice(e,e+ha).join(``));let r=n.join(`-`);return{code:r,url:`${e}#/m/${r}`}}}}var va=`cal:book:pages`,ya=`cal:book:state`,ba=25,xa=90,Sa=25e3,Ca=3e4,wa=5*6e4,Ta=10*6e4,Ea=30*6e4,Da=2*6e4,Oa=[15,30,45,60,90,120];function ka(e){if(e==null)return null;if(typeof e==`string`)try{return JSON.parse(e)}catch{return null}return e}function Aa(){let e=new Uint8Array(5);crypto.getRandomValues(e);let t=``;for(let n of e)t+=n.toString(16).padStart(2,`0`);return t}var ja=/^[a-z0-9][a-z0-9-]{2,30}[a-z0-9]$/,Ma=/^https:\/\/cal-([a-z0-9][a-z0-9-]{0,58})\.puter\.work$/,Na=`https://calendar.puter.com`;function Pa(){try{let e=typeof location<`u`&&location?String(location.origin||``):``;return/^https?:\/\/[^/]+$/.test(e)?e:Na}catch{return Na}}function Fa(e){let t=String(e??``).normalize(`NFKD`).replace(/[\u0300-\u036f]/g,``).toLowerCase().replace(/[^a-z0-9]+/g,`-`).replace(/^-+|-+$/g,``).slice(0,32).replace(/-+$/,``);return ja.test(t)?t:``}function Ia(){try{return Intl.DateTimeFormat().resolvedOptions().timeZone||``}catch{return``}}function La(e,t,n,r){let i=Number(e);return Number.isFinite(i)?Math.min(n,Math.max(t,Math.round(i))):r}function Ra(e,t){return typeof e==`string`?e.slice(0,t):``}function za(e){return typeof e==`string`?e.replace(/[\u0000-\u001f\u007f-\u009f\u2028\u2029]/g,` `).replace(/\s+/g,` `).trim().slice(0,80).trim():``}function Ba(){let e={};for(let t of[1,2,3,4,5])e[t]=[{start:540,end:1020}];return e}function Va(e){let t={};if(!e||typeof e!=`object`)return t;for(let n=0;n<7;n++){let r=e[n]==null?e[String(n)]:e[n];if(!Array.isArray(r))continue;let i=[];for(let e of r.slice(0,6)){if(!e||typeof e!=`object`)continue;let t=La(e.start,0,1439,NaN),n=La(e.end,1,1440,NaN);!Number.isFinite(t)||!Number.isFinite(n)||n<=t||i.push({start:t,end:n})}if(!i.length)continue;i.sort((e,t)=>e.start-t.start);let a=[];for(let e of i){let t=a[a.length-1];t&&e.start<=t.end?t.end=Math.max(t.end,e.end):a.push(e)}t[n]=a}return t}function Ha(e={},t=Date.now()){let n=La(e.durationMin,5,720,30);return{id:typeof e.id==`string`&&ja.test(e.id)?e.id:Aa(),title:Ra(e.title,200).trim()||`${n} minute meeting`,description:Ra(e.description,2e3).trim(),location:Ra(e.location,500).trim(),durationMin:n,incrementMin:La(e.incrementMin||n,5,720,n),bufferBeforeMin:La(e.bufferBeforeMin,0,240,0),bufferAfterMin:La(e.bufferAfterMin,0,240,0),minNoticeMin:La(e.minNoticeMin,0,40320,120),maxAdvanceDays:La(e.maxAdvanceDays,1,xa,60),maxPerDay:La(e.maxPerDay,0,50,0),tz:ye(e.tz)?e.tz:Ia()||`UTC`,hours:Va(e.hours==null?Ba():e.hours),color:x(e.color)?e.color:y,meet:e.meet!==!1,avatar:e.avatar===!0,enabled:e.enabled!==!1,createdAt:Number.isFinite(e.createdAt)?e.createdAt:t,updatedAt:t}}function Ua(e,t,n=Date.now(),{alreadyKnown:r}={}){let i=B(new Date(n)).getTime(),a=i+(t+1)*k,o=[];for(let t of e.getEventsInRange(i,a,{includeHidden:!0})){if(t.declined||t.allDay&&!t.ooo||r&&r(t))continue;let e=Math.max(t.start,i),n=Math.min(t.end,a);n>e&&o.push([e,n])}o.sort((e,t)=>e[0]-t[0]);let s=[];for(let e of o){let t=s[s.length-1];t&&e[0]<=t[1]?t[1]=Math.max(t[1],e[1]):s.push(e)}return s}function Wa({kv:e,store:t,rsvp:n,user:r,toast:i=u,blocked:a=ir,requestUser:o=h,readPicture:s=_r,syncDelayMs:c=1500,pullMinMs:l=Sa,pollMs:d=Ca,orphanGraceMs:f=Ta,now:p=()=>Date.now(),pageOrigin:m=Pa()}){let g=new Map,_=String(m||``).replace(/\/+$/,``)||Na,v=0,y={applied:{}},b=!1,x=!1,S=null,C=null,w=()=>{},T=()=>{},E=Promise.resolve(),D=0,O=``,A=r&&typeof r.email==`string`?r.email.trim().toLowerCase():``,j=r&&typeof r.username==`string`&&r.username||``,M=``,N=0,P=!1,F=new Set,I=()=>a()||typeof navigator<`u`&&navigator.onLine===!1;function L(){for(let e of F)try{e()}catch{}}async function ee({authoritative:t=!1}={}){let n=v,r=ka(await e.get(va));if(v!==n)return!1;if(r==null&&g.size){if(!t)throw Error(`booking: could not read the page map`);return!1}let i=r&&typeof r==`object`?r:{},a=new Map;for(let e of Object.values(i)){if(!e||typeof e!=`object`)continue;let t=Ha(e,e.updatedAt||Date.now());a.set(t.id,t)}let o=!1;if(t){o=a.size!==g.size;for(let[e,t]of a){let n=g.get(e);(!n||n.updatedAt!==t.updatedAt)&&(o=!0)}g.clear();for(let[e,t]of a)g.set(e,t)}else for(let[e,t]of a){let n=g.get(e);(!n||(t.updatedAt||0)>=(n.updatedAt||0))&&((!n||n.updatedAt!==t.updatedAt)&&(o=!0),g.set(e,t))}return o}async function R(){await e.set(va,Object.fromEntries(g))}let te=()=>e&&typeof e.fallbackCount==`function`?e.fallbackCount():0,ne=0,z=0,B=-1/0;async function V(){if(typeof t.load!=`function`||z===ne)return!0;let e=te();try{await t.load()}catch{return!1}return z=ne,Y=null,te()===e}async function H(){if(b)return;let t=te(),n=ka(await e.get(ya));if(te()!==t)throw Error(`booking: the applied-state read did not reach the cloud`);n&&n.applied&&typeof n.applied==`object`&&(y={applied:n.applied}),b=!0}async function re(){try{let t=ka(await e.get(ya)),n=t&&t.applied&&typeof t.applied==`object`?t.applied:null;if(n){let e=p()-200*k;for(let[t,r]of Object.entries(n))!r||typeof r!=`object`||t in y.applied||(Number.isFinite(r.start)?r.start:0)<e||(y.applied[t]=r)}}catch{}await e.set(ya,y)}function U(){return[...g.values()].sort((e,t)=>e.createdAt-t.createdAt||(e.id<t.id?-1:1))}function ie(e){return g.get(e)||null}async function W(e){if(I())throw Error(`You're offline — reconnect to change booking links.`);try{await ee()}catch{throw Error(`Could not save the booking link. Please try again.`)}let t=e&&e.id?g.get(e.id):null;if(!t&&g.size>=ba)throw Error(`You can have at most ${ba} booking links.`);let n=Ha({...t,...e},p());return t||(n.id=G(n.title)),g.set(n.id,n),v+=1,await R(),L(),we(),n}function G(e){let t=Fa(e);if(!t)return Aa();if(!g.has(t))return t;for(let e=2;e<=26;e++){let n=`-${e}`,r=t.slice(0,32-n.length).replace(/-+$/,``)+n;if(ja.test(r)&&!g.has(r))return r}return Aa()}async function K(e){if(I())throw Error(`You're offline — reconnect to change booking links.`);try{await ee()}catch{throw Error(`Could not delete the booking link. Please try again.`)}let t=g.get(e);return t?(g.delete(e),v+=1,await R(),L(),we(),t):null}function ae(){return n&&typeof n.workerOrigin==`function`?n.workerOrigin():null}function q(e){let t=ae();if(!t||!g.has(e)||!ja.test(e))return null;let n=Ma.exec(t);return n?`${_}/#/${n[1]}/${e}`:`${t}/book/${e}`}function oe(){return za(t.getSettings().bookingName)||j}async function se(e){if(I())throw Error(`You're offline — reconnect to change your name.`);let n=za(e),r=n===j?``:n;return r!==(t.getSettings().bookingName||``)&&await t.saveSettings({bookingName:r}),oe()}function J(e){let t=0;for(let n of Object.values(y.applied))!n||n.status!==`confirmed`||n.pageId===e&&Number.isFinite(n.start)&&n.start>p()&&t++;return t}let Y=null;function ce(){if(Y)return Y;Y=new Map;for(let e of t.getAllEvents()){let t=e.booking&&e.booking.id;typeof t==`string`&&!Y.has(t)&&Y.set(t,e)}return Y}function le(e){let n=y.applied[e];if(n&&n.eventId){let e=t.getEvent(n.eventId);if(e)return e}return ce().get(e)||null}function ue(e){let t=[`Booked by ${e.name?`${e.name} (${e.email})`:e.email} via your "${e.pageTitle||`booking`}" link.`];return e.notes&&t.push(``,e.notes),t.join(`
`)}function de(e){let n={hour12:t.getSettings().hour12!==!1};return`${me(new Date(e))}, ${X(new Date(e),n)}`}async function fe(e){Y=null;let n=!1,r=[],a=[];for(let i of Array.isArray(e)?e:[]){if(!i||typeof i.id!=`string`||!/^[a-z0-9]{6,64}$/.test(i.id)||!Number.isFinite(i.start)||!Number.isFinite(i.end))continue;let e=y.applied[i.id],o={status:i.status,at:Number.isFinite(i.updatedAt)?i.updatedAt:0,start:i.start,end:i.end,pageId:typeof i.pageId==`string`?i.pageId:``,name:typeof i.name==`string`?i.name:``,email:typeof i.email==`string`?i.email:``};try{if(i.status===`confirmed`){if(e&&e.status===`confirmed`){e.end!==i.end&&(e.end=i.end,n=!0);continue}let a=le(i.id);if(!a&&!e&&(await V(),a=le(i.id)),a){y.applied[i.id]={...o,eventId:a.id},n=!0;continue}if(e)continue;let s=g.get(i.pageId)||null,c=await t.saveEvent({id:i.id,title:`${i.name||i.email} — ${i.pageTitle||s&&s.title||`Booking`}`,start:i.start,end:i.end,location:typeof i.location==`string`&&i.location||s&&s.location||``,description:ue(i),meeting:ga(i.meetingUrl)?{url:i.meetingUrl}:null,color:s&&s.color||`indigo`,guests:[{email:i.email,name:i.name||``,status:`accepted`}],organizer:A?{email:A}:null,booking:{id:i.id,pageId:i.pageId,pageTitle:i.pageTitle||s&&s.title||``,name:i.name||``,email:i.email||``}});y.applied[i.id]={...o,eventId:c.id},n=!0,r.push(i)}else if(i.status===`cancelled`){let r=le(i.id);r&&(await t.deleteEvent(r.id),i.cancelledBy===`guest`&&i.start>p()&&a.push(i)),(!e||e.status!==`cancelled`)&&(n=!0),y.applied[i.id]={...o,eventId:null}}}catch(e){console.warn(`booking: could not apply booking`,i.id,e)}}if(ye()&&(n=!0),r.length===1){let e=r[0];i(`New booking: ${e.name||e.email} · ${de(e.start)}`,{variant:`success`})}else r.length>1&&i(`${r.length} new bookings added to your calendar`,{variant:`success`});for(let e of a.slice(0,3))i(`${e.name||e.email} cancelled their booking for ${de(e.start)}.`);return n&&(await re(),L()),n}async function pe(){if(!b||t.revision()===null||I())return;if(Y=null,typeof t.load==`function`&&Object.entries(y.applied).filter(([e,t])=>t&&t.status===`confirmed`&&Number.isFinite(t.start)&&t.start>p()&&!le(e)).some(([,e])=>!Number.isFinite(e.missingSince)||p()-e.missingSince>=f)){let e=te();try{await t.load()}catch{return}if(te()!==e)return;Y=null}let e=!1;for(let[t,r]of Object.entries(y.applied))if(!(!r||r.status!==`confirmed`)&&!(!Number.isFinite(r.start)||r.start<=p())){if(le(t)){r.missingSince&&(delete r.missingSince,e=!0);continue}if(!r.missingSince){r.missingSince=p(),e=!0;continue}if(!(p()-r.missingSince<f))try{let a=await n.adminRequest(`/admin/booking/cancel`,{id:t,notify:!0});r.status=`cancelled`,delete r.missingSince,e=!0,i(a&&a.emailed===!0?`Cancelled ${r.name||r.email||`the guest`}'s booking and let them know.`:`Cancelled ${r.name||r.email||`the guest`}'s booking, but no cancellation email was sent.`)}catch(n){n&&n.status===404?(r.status=`cancelled`,delete r.missingSince,e=!0):console.warn(`booking: orphan cancel failed`,t,n)}}e&&(await re(),L())}async function he(e){if(I())throw Error(`You're offline — reconnect to cancel this booking.`);let r=!1;try{let t=await n.adminRequest(`/admin/booking/cancel`,{id:e,notify:!0});r=!!(t&&t.emailed===!0)}catch(e){if(!e||e.status!==404)throw e;r=!1}let i=y.applied[e]||{},a=le(e);return a&&await t.deleteEvent(a.id),y.applied[e]={...i,status:`cancelled`,at:p(),eventId:null},delete y.applied[e].missingSince,await re(),L(),{notified:r}}async function ge(e){if(!e)return``;let t=P?Ea:Da;if(N&&p()-N<t)return M;N=p();let n=await Promise.resolve(s(r)).catch(()=>null),i=n&&n.state;return i===`found`?M=n.picture:i===`none`&&(M=``),P=i===`found`||i===`none`,M}function _e(e){let t=e.booking&&e.booking.id;if(!t)return!1;let n=y.applied[t];return!!(n&&n.status===`confirmed`&&n.start===e.start&&n.end===e.end)}function ve(e){return JSON.stringify([e.pages,e.busy,e.organizerName,e.organizerEmail,e.organizerPicture,e.hour12])}function ye(){let e=!1;for(let[t,n]of Object.entries(y.applied))(n&&Number.isFinite(n.start)?n.start:0)<p()-200*864e5&&(delete y.applied[t],e=!0);return e}async function be(){if(I())return 0;if(ne+=1,t.revision()===null)return 1;let e=0;if(!b)try{await H()}catch(t){e+=1,console.warn(`booking: applied-state read failed`,t)}try{await ee({authoritative:!0})&&L()}catch{}if(!A&&p()-B>=wa){B=p();let e=await Promise.resolve(o()).catch(()=>null);e&&typeof e.email==`string`&&e.email&&(A=e.email.trim().toLowerCase())}let r=U(),i=!!ae();if(!r.length&&!i&&!Object.keys(y.applied).length)return 0;let a=r.filter(e=>e.enabled),s=Math.min(91,a.length?Math.max(...a.map(e=>e.maxAdvanceDays))+1:1),c={pages:r,busy:Ua(t,s,p(),{alreadyKnown:_e}),organizerName:oe(),organizerEmail:A,organizerPicture:await ge(r.some(e=>e.avatar)),hour12:t.getSettings().hour12!==!1},u=ve(c);if(u!==O&&(r.length||i)&&(await V(),c.busy=Ua(t,s,p(),{alreadyKnown:_e}),u=ve(c)),u!==O&&(r.length||i))try{await n.adminRequest(`/admin/booking/sync`,c),O=u,L()}catch(t){e+=1,console.warn(`booking: sync failed`,t)}if(b&&ae()&&(g.size||Object.keys(y.applied).length)&&p()-D>l)try{let e=await n.adminRequest(`/admin/booking/list`);D=p(),await fe(e&&e.bookings||[])}catch(t){e+=1,console.warn(`booking: pull failed`,t)}try{await pe()}catch(t){e+=1,console.warn(`booking: orphan check failed`,t)}return e}let xe=0,Se=null;function Ce(){return E=E.then(async()=>{if(!await be()){xe=0;return}xe>=6||(xe+=1,Se&&clearTimeout(Se),Se=setTimeout(()=>{Se=null,Ce()},Math.min(3e4,5e3*xe)))}).catch(()=>{}),E}function we(){xe=0,S&&clearTimeout(S),S=setTimeout(()=>{S=null,Ce()},c)}function Te(){typeof document<`u`&&document.visibilityState!==`visible`||I()||Ce()}async function Ee(){if(!x){x=!0;try{await ee()}catch{}try{await H()}catch{}if(w=t.subscribe(()=>{Y=null,we()}),n&&typeof n.onUpdate==`function`){let e=!!ae();T=n.onUpdate(()=>{let t=!!ae();t!==e&&(e=t,L())})}C=setInterval(()=>{typeof document<`u`&&document.visibilityState===`hidden`||I()||Ce()},d),typeof document<`u`&&document.addEventListener(`visibilitychange`,Te),typeof window<`u`&&window.addEventListener(`focus`,Te),L(),we()}}function De(){S&&clearTimeout(S),Se&&clearTimeout(Se),C&&clearInterval(C),S=Se=C=null,w(),w=()=>{},T(),T=()=>{},typeof document<`u`&&document.removeEventListener(`visibilitychange`,Te),typeof window<`u`&&window.removeEventListener(`focus`,Te)}function Oe(e){return F.add(e),()=>F.delete(e)}return{start:Ee,stop:De,getPages:U,getPage:ie,savePage:W,deletePage:K,linkFor:q,displayName:oe,setDisplayName:se,upcomingCount:J,cancelBooking:he,onUpdate:Oe,refresh:Ce,whenIdle:()=>E}}var Ga=[[0,`No minimum`],[60,`1 hour`],[120,`2 hours`],[240,`4 hours`],[720,`12 hours`],[1440,`1 day`],[2880,`2 days`]],Ka=[[7,`1 week`],[14,`2 weeks`],[30,`30 days`],[60,`60 days`],[90,`90 days`]],qa=[0,5,10,15,30,45,60],Ja=[0,1,2,3,4,5,6,8,10],Ya=[[``,`Same as duration`],[`10`,`10 minutes`],[`15`,`15 minutes`],[`20`,`20 minutes`],[`30`,`30 minutes`],[`60`,`1 hour`]];function Xa(e){return String(e).padStart(2,`0`)}function Za(e){return`${Xa(Math.floor(e/60))}:${Xa(e%60)}`}function Qa(e){let t=/^(\d{1,2}):(\d{2})$/.exec(String(e||``));if(!t)return NaN;let n=Number(t[1])*60+Number(t[2]);return n>=0&&n<1440?n:NaN}function $a(e){if(e%60==0){let t=e/60;return t===1?`1 hour`:`${t} hours`}return`${e} minutes`}function eo(t,n,r){let i=e(`select`,{class:`select`,"aria-label":t}),a=n.map(([e])=>String(e));r!=null&&!a.includes(String(r))&&i.append(e(`option`,{value:String(r),text:String(r),selected:!0}));for(let[t,a]of n){let n=e(`option`,{value:String(t),text:a});String(t)===String(r)&&(n.selected=!0),i.append(n)}return i}function to(t){let n=e(`select`,{class:`select`,"aria-label":`Availability time zone`});return n.append(e(`option`,{value:`UTC`,text:`UTC`,selected:t===`UTC`})),Me(t).forEach(({label:r,zones:i})=>{n.append(e(`optgroup`,{label:r},i.map(n=>e(`option`,{value:n.id,text:`${n.city} (${Oe(n.offset)})`,selected:n.id===t}))))}),n}function no({booking:t,store:r,user:i=null,page:a=null,onDone:o,requestEmail:c=g,readPicture:l=_r}={}){if(ir())return u(`You're offline — reconnect to change booking links`),null;Promise.resolve().then(()=>c()).then(e=>{e&&t&&typeof t.refresh==`function`&&t.refresh()}).catch(()=>{});let d=!!a,f=r.getSettings(),p={},m=a?a.hours:Ba();for(let e=0;e<7;e++)p[e]=(m&&(m[e]||m[String(e)])||[]).map(e=>({start:e.start,end:e.end}));let h=a&&a.color||`blue`,_=e(`input`,{class:`input input--title`,type:`text`,placeholder:`30 minute meeting`,autocomplete:`off`,"aria-label":`Booking link name`,value:a&&a.title||``}),y=eo(`Duration`,Oa.map(e=>[e,$a(e)]),a&&a.durationMin||30),b=e(`input`,{class:`input`,type:`text`,placeholder:`Add a place or call link (shared once booked)`,autocomplete:`off`,"aria-label":`Location`,value:a&&a.location||``}),x=e(`textarea`,{class:`textarea`,rows:`2`,placeholder:`Shown on your booking page`,"aria-label":`Description`,value:a&&a.description||``}),S=e(`div`,{class:`swatches`,role:`radiogroup`,"aria-label":`Event color`});v.forEach(t=>{let n=T(t.key,f.categoryNames),r=e(`button`,{class:`swatch`,type:`button`,role:`radio`,title:n,"aria-label":n,style:{background:t.hex,"--swatch-color":t.hex},on:{click:()=>{h=t.key,C()}}});r.dataset.color=t.key,S.append(r)});function C(){S.querySelectorAll(`.swatch`).forEach(e=>{e.setAttribute(`aria-checked`,String(e.dataset.color===h))})}C();let w=e(`div`,{class:`field__label modal__error`,style:{color:`var(--danger-ink)`,display:`none`},role:`alert`});function E(e){w.textContent=e,w.style.display=e?`block`:`none`,e&&typeof w.scrollIntoView==`function`&&w.scrollIntoView({block:`nearest`})}let D=e(`div`,{class:`bk-hours`,role:`group`,"aria-label":`Weekly hours`});function O(){n(D),J(f.weekStartsOn).forEach(t=>{let n=p[t].length>0,r=e(`label`,{class:`bk-day__head`},[e(`span`,{class:`switch`},[e(`input`,{type:`checkbox`,role:`switch`,checked:n,"aria-label":`Available on ${j[t]}`,on:{change:e=>{p[t]=e.target.checked?[{start:540,end:1020}]:[],O()}}}),e(`span`,{class:`switch__track`}),e(`span`,{class:`switch__thumb`})]),e(`span`,{class:`bk-day__name`,text:j[t]})]),i=e(`div`,{class:`bk-day__body`});n||i.append(e(`span`,{class:`bk-day__off`,text:`Unavailable`})),p[t].forEach((n,r)=>{let a=(e,t,r)=>{let i=Qa(t.value);Number.isFinite(i)?n[e]=i:t.value=r()},o=()=>Za(n.start),c=()=>Za(n.end===1440?1439:n.end),l=Kr({label:`${j[t]} start time`,hour12:f.hour12,className:`bk-time`});l.value=o(),l.addEventListener(`change`,()=>a(`start`,l,o));let u=Kr({label:`${j[t]} end time`,hour12:f.hour12,className:`bk-time`});u.value=c(),u.addEventListener(`change`,()=>a(`end`,u,c));let d=e(`button`,{class:`icon-btn reminders__remove`,type:`button`,"aria-label":`Remove ${j[t]} interval`,title:`Remove interval`,html:s(`close`,{size:`sm`}),on:{click:()=>{p[t].splice(r,1),O()}}});i.append(e(`div`,{class:`bk-interval`},[l.el,e(`span`,{class:`bk-interval__dash`,text:`–`}),u.el,d]))});let a=e=>e.length?1440-e[e.length-1].end:1440;n&&p[t].length<6&&a(p[t])>15&&i.append(e(`button`,{class:`btn btn--ghost bk-day__add`,type:`button`,html:s(`plus`,{size:`sm`})+`<span>Add interval</span>`,on:{click:()=>{if(a(p[t])<=15)return O();let e=Math.min(p[t][p[t].length-1].end+60,1425);p[t].push({start:e,end:Math.min(e+60,1440)}),O()}}})),D.append(e(`div`,{class:`bk-day`},[r,i]))})}O();let k=eo(`How far ahead people can book`,Ka,a&&a.maxAdvanceDays||60),A=eo(`Minimum notice`,Ga,a?a.minNoticeMin:120),M=eo(`Buffer before`,qa.map(e=>[e,e===0?`None`:`${e} min`]),a&&a.bufferBeforeMin||0),N=eo(`Buffer after`,qa.map(e=>[e,e===0?`None`:`${e} min`]),a&&a.bufferAfterMin||0),P=eo(`Maximum bookings per day`,Ja.map(e=>[e,e===0?`No limit`:String(e)]),a&&a.maxPerDay||0),F=eo(`Start time increments`,Ya,a&&a.incrementMin!==a.durationMin?String(a.incrementMin):``),I=to(a&&a.tz||Intl.DateTimeFormat().resolvedOptions().timeZone||`UTC`),L=e(`input`,{type:`checkbox`,role:`switch`,checked:!a||a.enabled!==!1}),ee=e(`label`,{class:`inline-field`,style:{cursor:`pointer`}},[e(`span`,{class:`field__label`,text:`Accepting bookings`}),e(`span`,{class:`switch`},[L,e(`span`,{class:`switch__track`}),e(`span`,{class:`switch__thumb`})])]),R=e(`input`,{type:`checkbox`,role:`switch`,checked:!a||a.meet!==!1}),te=e(`label`,{class:`inline-field`,style:{cursor:`pointer`}},[e(`span`,{class:`field__label`,text:`Puter Meetings link`}),e(`span`,{class:`switch`},[R,e(`span`,{class:`switch__track`}),e(`span`,{class:`switch__thumb`})])]),ne=e(`input`,{type:`checkbox`,role:`switch`,checked:!a||a.avatar===!0}),z=e(`span`,{class:`bk-avatar`}),B=e(`span`,{class:`bk-hint`}),V=e(`label`,{class:`inline-field`,style:{cursor:`pointer`}},[e(`span`,{class:`field__label`,text:`Profile picture`}),e(`span`,{class:`bk-avatar-row`},[e(`span`,{class:`switch`},[ne,e(`span`,{class:`switch__track`}),e(`span`,{class:`switch__thumb`})]),z,B])]);Promise.resolve().then(()=>l(i)).then(t=>{if(!(!t||!V.isConnected))if(t.state===`found`){let n=e(`img`,{class:`bk-avatar__img`,alt:``,draggable:!1});n.addEventListener(`error`,()=>n.remove(),{once:!0}),n.src=t.picture,z.replaceChildren(n)}else t.state===`none`&&(B.textContent=`No picture is available from your Puter account`)}).catch(()=>{});let H=typeof t.displayName==`function`&&typeof t.setDisplayName==`function`,re=H&&t.displayName()||``,U=i&&typeof i.username==`string`&&i.username||``,ie=e(`input`,{class:`input bk-name`,type:`text`,maxlength:`80`,autocomplete:`off`,placeholder:U||`Your name`,"aria-label":`Your name, as guests see it`,value:re}),W=H?e(`div`,{class:`field`},[e(`span`,{class:`field__label`,text:`Your name`}),ie,e(`span`,{class:`bk-hint`,text:U?`Shown to guests on all your booking links. Leave blank to use your username, ${U}.`:`Shown to guests on all your booking links.`})]):null;async function G(){if(!(!H||ie.value.trim()===re))try{await t.setDisplayName(ie.value)}catch(e){u(e&&e.message||`Could not save your name.`,{variant:`danger`})}}let K=null;function ae(){if(!d)return null;let n=e(`div`),r,i=()=>{r=t.linkFor(a.id)||``,n.replaceChildren(q(r))};return i(),K=t.onUpdate(()=>{(t.linkFor(a.id)||``)!==r&&i()}),n}function q(t){if(!t)return e(`div`,{class:`field`},[e(`span`,{class:`field__label`,text:`Share`}),e(`span`,{class:`bk-share__pending`,text:`Your link is being prepared. It will appear here in a moment.`})]);let n=e(`input`,{class:`input bk-share__url`,type:`text`,readOnly:!0,value:t,"aria-label":`Booking link URL`,on:{focus:e=>e.target.select()}}),r=e(`button`,{class:`btn`,type:`button`,html:s(`copy`,{size:`sm`})+`<span>Copy</span>`,on:{click:()=>{(navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(t):Promise.reject(Error(`clipboard unavailable`))).then(()=>u(`Booking link copied`,{variant:`success`})).catch(()=>u(`Could not copy — clipboard access was blocked.`,{variant:`danger`}))}}});return e(`div`,{class:`field`},[e(`span`,{class:`field__label`,text:`Share`}),e(`div`,{class:`bk-share`},[n,r]),e(`span`,{class:`bk-hint`,text:`Anyone with this link can book the times you are free.`})])}function oe(){for(let e=0;e<7;e++){for(let t of p[e])if(!Number.isFinite(t.start)||!Number.isFinite(t.end)||t.end<=t.start)return E(`${j[e]}: each interval needs an end after its start.`),null;let t=[...p[e]].sort((e,t)=>e.start-t.start);for(let n=1;n<t.length;n++)if(t[n].start<t[n-1].end)return E(`${j[e]}: two of these intervals overlap. Move them apart, or make them one.`),null}if(![0,1,2,3,4,5,6].some(e=>p[e].length))return E(`Add at least one weekly interval so people have times to pick.`),null;let e=Number(y.value),t=0;for(let e=0;e<7;e++)for(let n of p[e])t=Math.max(t,n.end-n.start);return t<e?(E(`A ${$a(e)} meeting needs an interval at least that long — your longest is ${$a(t)}. Lengthen an interval, or shorten the meeting.`),null):{id:a?a.id:void 0,title:_.value.trim(),description:x.value.trim(),location:b.value.trim(),durationMin:e,incrementMin:F.value===``?e:Number(F.value),bufferBeforeMin:Number(M.value),bufferAfterMin:Number(N.value),minNoticeMin:Number(A.value),maxAdvanceDays:Number(k.value),maxPerDay:Number(P.value),tz:I.value,hours:p,color:h,meet:R.checked,avatar:ne.checked,enabled:L.checked}}function se(){let n=t.upcomingCount(a.id),r=e(`form`,{class:`modal rr-modal`,role:`dialog`,"aria-modal":`true`,"aria-labelledby":`bk-del-title`},[e(`div`,{class:`modal__head`},[e(`h2`,{class:`modal__title`,id:`bk-del-title`,text:`Delete booking link?`})]),e(`div`,{class:`modal__body`},[e(`p`,{text:`The page stops working immediately, and anyone holding the link sees that it is gone.`+(n?` Your ${n===1?`upcoming booking stays`:`${n} upcoming bookings stay`} on your calendar.`:``)})]),e(`div`,{class:`modal__foot`},[e(`div`,{class:`spacer`}),e(`button`,{class:`btn`,type:`button`,text:`Keep it`,on:{click:()=>i()}}),e(`button`,{class:`btn btn--danger`,type:`submit`,text:`Delete link`})])]);r.addEventListener(`submit`,e=>{e.preventDefault(),i(),Promise.resolve(t.deletePage(a.id)).then(()=>{u(`Booking link deleted`),X(),o&&o(null)}).catch(e=>u(e.message||`Could not delete the booking link.`,{variant:`danger`}))});let i=Jr(r);requestAnimationFrame(()=>r.querySelector(`.btn--danger`).focus())}let Y=e(`form`,{class:`modal modal--editor modal--booking`,role:`dialog`,"aria-modal":`true`,"aria-labelledby":`bk-title`},[e(`div`,{class:`modal__head`},[e(`h2`,{class:`modal__title`,id:`bk-title`,text:d?`Edit booking link`:`New booking link`}),e(`button`,{class:`icon-btn`,type:`button`,"aria-label":`Close`,html:s(`close`),on:{click:()=>X()}})]),e(`div`,{class:`modal__body`},[e(`div`,{class:`field field--title`},[_]),ae(),ee,e(`div`,{class:`field`},[e(`span`,{class:`field__label`,text:`Duration`}),y]),e(`div`,{class:`field`},[e(`span`,{class:`field__label`,text:`Location`}),b]),te,e(`div`,{class:`field`},[e(`span`,{class:`field__label`,text:`Description`}),x]),V,W,e(`hr`,{class:`modal__sep`}),e(`div`,{class:`field`},[e(`span`,{class:`field__label`,text:`Weekly hours`}),D,w]),e(`div`,{class:`field`},[e(`span`,{class:`field__label`,text:`Time zone`}),I]),e(`hr`,{class:`modal__sep`}),e(`div`,{class:`field`},[e(`span`,{class:`field__label`,text:`Book ahead`}),k]),e(`div`,{class:`field`},[e(`span`,{class:`field__label`,text:`Min notice`}),A]),e(`div`,{class:`field`},[e(`span`,{class:`field__label`,text:`Buffers`}),e(`div`,{class:`bk-two`},[e(`div`,{class:`bk-two__cell`},[e(`span`,{class:`bk-hint`,text:`Before`}),M]),e(`div`,{class:`bk-two__cell`},[e(`span`,{class:`bk-hint`,text:`After`}),N])])]),e(`div`,{class:`field`},[e(`span`,{class:`field__label`,text:`Per day`}),P]),e(`div`,{class:`field`},[e(`span`,{class:`field__label`,text:`Increments`}),F]),e(`div`,{class:`field`},[e(`span`,{class:`field__label`,text:`Color`}),S])]),e(`div`,{class:`modal__foot`},[d?e(`button`,{class:`btn btn--danger`,type:`button`,html:s(`trash`,{size:`sm`})+`<span>Delete</span>`,on:{click:se}}):null,e(`div`,{class:`spacer`}),e(`button`,{class:`btn`,type:`button`,text:`Cancel`,on:{click:()=>X()}}),e(`button`,{class:`btn btn--primary`,type:`submit`,text:d?`Save`:`Create link`})])]),ce=!1;function le(e){ce=e,Y.querySelectorAll(`.modal__foot button`).forEach(t=>{t.disabled=e});let t=Y.querySelector(`button[type="submit"]`);t.textContent=e?`Saving…`:d?`Save`:`Create link`,e?t.setAttribute(`aria-busy`,`true`):t.removeAttribute(`aria-busy`)}Y.addEventListener(`submit`,e=>{if(e.preventDefault(),ce)return;E(``);let n=oe();n&&(le(!0),Promise.resolve(t.savePage(n)).then(async e=>{await G();let n=t.linkFor(e.id);d||$i(`Booking Link Created`),u(d?`Booking link saved`:n?`Booking link created`:`Booking link created. Preparing your link…`,n?{variant:`success`,action:{label:`Copy link`,onClick:()=>navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(n).then(()=>u(`Booking link copied`,{variant:`success`})).catch(()=>{}):void 0}}:{variant:`success`}),X(),o&&o(e)}).catch(e=>{le(!1),u(e.message||`Could not save the booking link.`,{variant:`danger`})}))});let X=Jr(Y,()=>{K&&K()});return requestAnimationFrame(()=>_.focus()),X}function ro({key:t,names:n={},onSave:r}){let i=w(t),a=typeof n[t]==`string`?n[t].trim():``,o=e(`input`,{class:`input`,type:`text`,maxlength:`24`,placeholder:i,"aria-label":`Category name`,autocomplete:`off`,value:a});o.spellcheck=!1;let s=e(`form`,{class:`modal rr-modal cat-rename`,role:`dialog`,"aria-modal":`true`,"aria-labelledby":`cat-rename-title`},[e(`div`,{class:`modal__head`},[e(`h2`,{class:`modal__title`,id:`cat-rename-title`,text:`Rename “${T(t,n)}”`})]),e(`div`,{class:`modal__body`},[e(`div`,{class:`cat-rename__row`},[e(`span`,{class:`cat-rename__dot`,style:{background:S(t)}}),o]),e(`p`,{class:`cat-rename__hint`,text:`Leave it empty to go back to “${i}”. The color doesn’t change.`})]),e(`div`,{class:`modal__foot`},[e(`div`,{class:`spacer`}),e(`button`,{class:`btn`,type:`button`,text:`Cancel`,on:{click:()=>c()}}),e(`button`,{class:`btn btn--primary`,type:`submit`,text:`Save`})])]);s.addEventListener(`submit`,e=>{e.preventDefault();let t=o.value.trim().slice(0,24).trim();c(),t!==a&&r(t)});let c=Jr(s);return requestAnimationFrame(()=>{o.focus(),o.select()}),c}var io=[{value:`known`,label:`People I know`,hint:`Added automatically when the sender is authenticated and already someone you know.`},{value:`never`,label:`Nobody — just show them`,hint:`Every invitation waits below for you to add it.`}],ao={off:`Not connected — connect to add invitations sent to your Puter mailbox automatically.`,connecting:`Connecting…`,ok:`Connected — invitations are checked automatically.`,foreground:`Checked while the calendar is open.`,suspended:`Paused.`,unavailable:`Not available here.`},oo={off:`Connect`,suspended:`Reconnect`,unavailable:`Reconnect`,ok:`Check now`,foreground:`Check now`};function so({mailbox:t,intake:r,store:i,toast:a=u}){let o=!1,c=e(`div`,{class:`mail-dialog__state`}),l=e(`div`,{class:`field`}),d=e(`div`,{class:`field`}),f=e(`div`);function p(){let r=t.status(),i=ao[r.state]||`Not available here.`;r.state===`off`&&r.lastError?i=r.lastError:r.state===`suspended`?i=r.suspendedReason||i:r.state===`unavailable`&&r.lastError&&(i=r.lastError),n(c),c.append(e(`span`,{text:i})),r.state===`connecting`?c.append(e(`button`,{class:`btn`,type:`button`,text:`Connecting…`,disabled:!0})):oo[r.state]&&c.append(e(`button`,{class:`btn btn--primary`,type:`button`,text:oo[r.state],disabled:o,dataset:{focusKey:`mail-primary-action`},on:{click:()=>m(r.state)}}))}function m(e){if(o)return;o=!0,p();let n=()=>{o=!1,p()};e===`off`?Promise.resolve(t.connect()).then(n,n):e===`suspended`||e===`unavailable`?Promise.resolve(t.reconnect()).then(n,n):Promise.resolve(t.rescan({force:!0})).then(n,n)}function h(){n(l);let t=(i.getSettings()||{}).mailInvites||`known`;l.append(e(`span`,{class:`field__label`,text:`Add invitations from`})),io.forEach(n=>{let r=e(`input`,{type:`radio`,name:`mail-policy`,value:n.value,checked:n.value===t,dataset:{focusKey:`mail-policy-${n.value}`}});r.addEventListener(`change`,()=>{r.checked&&Promise.resolve(i.saveSettings({mailInvites:n.value})).catch(()=>a(`Could not save your invitation settings.`,{variant:`danger`}))}),l.append(e(`label`,{style:{display:`flex`,alignItems:`flex-start`,gap:`var(--sp-2)`,padding:`var(--sp-1) 0`}},[r,e(`span`,{},[e(`span`,{style:{display:`block`},text:n.label}),e(`span`,{class:`muted`,style:{display:`block`},text:n.hint})])]))})}function g(){n(d);let t=e(`input`,{type:`checkbox`,checked:!!(i.getSettings()||{}).mailInvitesShowUnknown,dataset:{focusKey:`mail-show-unknown`}});t.addEventListener(`change`,()=>{Promise.resolve(i.saveSettings({mailInvitesShowUnknown:t.checked})).catch(()=>a(`Could not save your invitation settings.`,{variant:`danger`}))}),d.append(e(`label`,{style:{display:`flex`,alignItems:`flex-start`,gap:`var(--sp-2)`,padding:`var(--sp-1) 0`}},[t,e(`span`,{text:`Show invitations from people I haven't interacted with`})]))}function _(){n(f);let t=r.getBlocked();if(!t.length)return;let i=e(`div`,{class:`field`},[e(`span`,{class:`field__label`,text:`Blocked senders`})]);t.forEach(t=>{i.append(e(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,gap:`var(--sp-2)`,padding:`var(--sp-1) 0`}},[e(`span`,{text:t}),e(`button`,{class:`btn`,type:`button`,text:`Unblock`,dataset:{focusKey:`mail-unblock-${t}`},on:{click:()=>Promise.resolve(r.unblock(t)).catch(()=>a(`Could not unblock the sender.`,{variant:`danger`}))}})]))}),f.append(i)}p(),h(),g(),_();let v=t.onChange(p),y=r.onChange(_),b=typeof i.subscribe==`function`?i.subscribe(()=>{h(),g()}):()=>{};function x(){Promise.resolve(t.disconnect()).catch(()=>a(`Could not disconnect the mailbox.`,{variant:`danger`}))}let S=e(`form`,{class:`modal mail-dialog`,role:`dialog`,"aria-modal":`true`,"aria-labelledby":`mail-dialog-title`},[e(`div`,{class:`modal__head`},[e(`h2`,{class:`modal__title`,id:`mail-dialog-title`,text:`Mailbox invitations`}),e(`button`,{class:`icon-btn`,type:`button`,"aria-label":`Close`,html:s(`close`),on:{click:()=>C()}})]),e(`div`,{class:`modal__body`},[c,e(`hr`,{class:`modal__sep`}),l,d,f,e(`p`,{class:`muted`,text:`Calendar can read your Puter mailbox and run in the background to detect invitations. To revoke that access entirely, use Puter’s own app permissions settings.`})]),e(`div`,{class:`modal__foot`},[e(`button`,{class:`btn`,type:`button`,text:`Disconnect`,on:{click:x}}),e(`div`,{class:`spacer`}),e(`button`,{class:`btn btn--primary`,type:`submit`,text:`Done`})])]);S.addEventListener(`submit`,e=>{e.preventDefault(),C()});let C=Jr(S,()=>{v(),y(),b()});return requestAnimationFrame(()=>(S.querySelector(`.mail-dialog__state .btn`)||S.querySelector(`.btn`)).focus()),C}var co=`side-booking`,lo=`side-mail`,uo=`side-categories`;function fo(t){let{store:n,settings:r,cursor:i,miniCursor:a,now:o,actions:c}=t,l=e(`aside`,{class:`sidebar`,"aria-label":`Calendar navigation`});return l.append(e(`button`,{class:`btn btn--primary sidebar__create`,type:`button`,html:s(`plus`,{size:`sm`})+`<span>Create</span>`,on:{click:()=>c.createAt({start:vo(i)})}})),l.append(yo(t)),l.append(mo(t)),l.append(ho(t)),l.append(xo(t)),l}function po({title:t,noun:n,listId:r,collapsed:i,note:a,focusKey:o,onToggle:c}){let l=e(`div`,{class:`side-section${i?` is-collapsed`:``}`});return l.append(e(`h2`,{class:`side-section__title`},[e(`button`,{class:`side-section__toggle`,type:`button`,"aria-expanded":String(!i),"aria-controls":r,title:`${i?`Show`:`Hide`} ${n}`,dataset:{focusKey:o},on:{click:c}},[e(`span`,{text:t}),i&&a?e(`span`,{class:`side-section__note`,text:a}):null,e(`span`,{class:`side-section__caret`,html:s(`chevron-down`,{size:`sm`})})])])),l}function mo(t){let{booking:n,settings:r,actions:i}=t;if(!n)return e(`div`,{hidden:!0});let a=n.getPages(),o=!!r.bookingLinksCollapsed,c=a.filter(e=>!e.enabled).length,l=po({title:`Booking links`,noun:`booking links`,listId:co,collapsed:o,note:c?`${c} off`:null,focusKey:`book-collapse`,onToggle:()=>i.toggleBookingLinks()}),u=e(`div`,{class:`book-list`,id:co,hidden:o});return a.forEach(t=>{let r=n.linkFor(t.id);u.append(e(`div`,{class:`book-item`},[e(`button`,{class:`book-item__open`,type:`button`,title:`Edit booking link`,dataset:{focusKey:`book-${t.id}`},on:{click:()=>i.editBookingPage(t)}},[e(`span`,{class:`book-item__title`,text:t.title}),e(`span`,{class:`book-item__meta`},[`${t.durationMin} min`,t.enabled?null:e(`span`,{class:`book-item__off`,text:`Off`})])]),e(`button`,{class:`icon-btn book-item__copy`,type:`button`,"aria-label":r?`Copy link for ${t.title}`:`Preparing your link…`,title:r?`Copy booking link`:`Preparing your link…`,disabled:!r,dataset:{focusKey:`book-copy-${t.id}`},html:s(`copy`,{size:`sm`}),on:{click:()=>i.copyBookingLink(t)}})]))}),u.append(e(`button`,{class:`btn btn--ghost book-new`,type:`button`,dataset:{focusKey:`book-new`},html:s(`plus`,{size:`sm`})+`<span>New booking link</span>`,title:`Share a link that lets others book time with you`,on:{click:()=>i.newBookingPage()}})),l.append(u),l}function ho(t){let{mail:n,settings:r,actions:i}=t;if(!n)return e(`div`,{hidden:!0});let a=n.intake.getPending();if(!a.length)return e(`div`,{hidden:!0});let o=!!r.mailInvitesCollapsed,s=po({title:`Invitations`,noun:`invitations`,listId:lo,collapsed:o,note:`${a.length} waiting`,focusKey:`mail-collapse`,onToggle:()=>i.toggleMailInvites()}),c=e(`div`,{class:`mail-list`,id:lo,hidden:o});return a.forEach(e=>c.append(go(e,i))),s.append(c),s}function go(t,n){let r=t.fromName?`${t.fromName} · ${t.fromEmail}`:t.fromEmail;return e(`div`,{class:`mail-item`},[e(`div`,{class:`mail-item__title`},[e(`span`,{text:t.title||`(No title)`}),t.hint?e(`span`,{class:`mail-item__pill`,text:t.hint}):null]),t.whenText?e(`div`,{class:`mail-item__meta`,text:t.whenText}):null,r?e(`div`,{class:`mail-item__meta`,text:r}):null,t.blockedReason?e(`div`,{class:`mail-item__meta${t.canApply===!1?` mail-item__warn`:``}`,text:t.blockedReason}):null,e(`div`,{class:`mail-item__actions`},[t.canApply===!1?null:e(`button`,{class:`btn btn--primary`,type:`button`,text:t.action||`Add`,dataset:{focusKey:`mail-add-${t.id}`},on:{click:()=>n.addMailInvite(t.id)}}),e(`button`,{class:`btn`,type:`button`,text:`Ignore`,dataset:{focusKey:`mail-ignore-${t.id}`},on:{click:()=>n.ignoreMailInvite(t.id)}}),_o(t,n)])])}function _o(t,n){let r=e(`button`,{class:`icon-btn`,type:`button`,"aria-label":`Block ${t.fromEmail}`,title:`Block sender`,dataset:{focusKey:`mail-block-${t.id}`},html:s(`close`,{size:`sm`})}),i=null;return r.addEventListener(`click`,()=>{if(r.dataset.confirm===`1`){n.blockMailSender(t.id);return}r.dataset.confirm=`1`,r.classList.add(`is-confirm`),r.title=`Click again to block ${t.fromEmail}`,r.setAttribute(`aria-label`,`Click again to block ${t.fromEmail}`),clearTimeout(i),i=setTimeout(()=>{delete r.dataset.confirm,r.classList.remove(`is-confirm`),r.title=`Block sender`,r.setAttribute(`aria-label`,`Block ${t.fromEmail}`)},4e3)}),r}function vo(e){let t=B(e);return t.setHours(9,0,0,0),t.getTime()}function yo(t){let{store:n,settings:r,cursor:i,miniCursor:a,now:o,actions:c}=t,l=e(`div`,{class:`mini`});l.append(e(`div`,{class:`mini__head`},[e(`span`,{class:`mini__title`,text:fe(a)}),e(`div`,{class:`mini__nav`},[e(`button`,{class:`icon-btn`,type:`button`,"aria-label":`Previous month`,dataset:{focusKey:`mini-prev`},html:s(`chevron-left`,{size:`sm`}),on:{click:()=>c.miniShift(-1)}}),e(`button`,{class:`icon-btn`,type:`button`,"aria-label":`Next month`,dataset:{focusKey:`mini-next`},html:s(`chevron-right`,{size:`sm`}),on:{click:()=>c.miniShift(1)}})])]));let u=e(`div`,{class:`mini__grid`});J(r.weekStartsOn).forEach(t=>{u.append(e(`div`,{class:`mini__dow`,text:N[t]}))});let d=oe(a,r.weekStartsOn),f=bo(n,d);return d.forEach(t=>{let n=[`mini__cell`];G(t,a)||n.push(`is-muted`),K(t,o)&&n.push(`is-today`),W(t,i)&&n.push(`is-selected`),f.has(B(t).getTime())&&n.push(`has-events`),u.append(e(`button`,{class:n.join(` `),type:`button`,text:String(t.getDate()),"aria-label":`${t.toDateString()}${W(t,i)?`, selected`:``}`,"aria-current":K(t,o)?`date`:null,dataset:{focusKey:`mini-${B(t).getTime()}`},on:{click:()=>c.selectDate(t)}}))}),l.append(u),l}function bo(e,t){if(!t.length)return new Set;let n=B(t[0]).getTime(),r=L(B(t[t.length-1]),1).getTime(),i=new Set;for(let t of e.getEventsInRange(n,r)){let e=B(new Date(Math.max(t.start,n))),a=Math.min(t.end,r);for(;e.getTime()<a;)i.add(e.getTime()),e=L(e,1)}return i}function xo(t){let{store:n,settings:r,actions:i}=t,a=new Set;for(let e of n.getAllEvents())if(a.add(e.color),e.overrides)for(let t of Object.values(e.overrides))t&&t.color&&a.add(t.color);for(let e of n.getAllTasks())a.add(e.color);let o=r.categoryNames||{},c=v.filter(e=>a.has(e.key)||o[e.key]);if(c.length===0)return e(`div`,{hidden:!0});let l=new Set(r.hiddenColors),u=!!r.categoriesCollapsed,d=c.filter(e=>l.has(e.key)).length,f=po({title:`Categories`,noun:`categories`,listId:uo,collapsed:u,note:d?`${d} hidden`:null,focusKey:`filter-collapse`,onToggle:()=>i.toggleCategories()}),p=e(`div`,{class:`cal-filter`,id:uo,hidden:u});return c.forEach(t=>{let n=!l.has(t.key),r=T(t.key,o),a=e(`div`,{class:`cal-filter__toggle`,role:`checkbox`,tabindex:`0`,"aria-checked":String(n),dataset:{focusKey:`filter-${t.key}`},on:{click:()=>i.toggleColor(t.key),keydown:e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),i.toggleColor(t.key))}}});a.append(e(`span`,{class:`cal-filter__check`,html:s(`check`,{size:`sm`})}),e(`span`,{class:`cal-filter__label`,text:r})),p.append(e(`div`,{class:`cal-filter__item`,style:{"--dot-color":t.hex,"--ev-fg":C(t.key)}},[a,e(`button`,{class:`icon-btn cal-filter__rename`,type:`button`,"aria-label":`Rename ${r}`,title:`Rename ${r}`,dataset:{focusKey:`filter-rename-${t.key}`},html:s(`edit`,{size:`sm`}),on:{click:()=>i.renameCategory(t.key)}})]))}),f.append(p),f}var So=null;function Co(){try{return typeof puter<`u`&&puter.ui&&typeof puter.ui.contextMenu==`function`&&(puter.env===`app`||puter.env===`gui`)}catch{return!1}}var wo=new Set;function To(e){return wo.add(e),()=>wo.delete(e)}function Eo(){if(So){So.cleanup(),So=null;for(let e of[...wo])try{e()}catch{}}}function Do(){return So!==null}function Oo(e,t){e.preventDefault(),Eo();let n=t.filter(Boolean);if(n.length){if(Co()){let e=n.map(e=>e===`-`?`-`:{label:e.label,disabled:!!e.disabled,action:e.action||(()=>{})});try{puter.ui.contextMenu({items:e});return}catch{}}ko(e.clientX,e.clientY,n)}}function ko(t,n,r){let i=document.activeElement,a=e(`div`,{class:`ctx-menu`,role:`menu`,tabindex:`-1`}),o=[];r.forEach(t=>{if(t===`-`){a.append(e(`div`,{class:`ctx-menu__sep`,role:`separator`}));return}let n=e(`button`,{class:`ctx-menu__item${t.danger?` is-danger`:``}`,type:`button`,role:`menuitem`,"aria-disabled":t.disabled?`true`:null});t.colorHex&&n.append(e(`span`,{class:`ctx-menu__swatch`,style:{background:t.colorHex}})),n.append(e(`span`,{text:t.label})),t.disabled||(n.addEventListener(`click`,()=>{Eo(),t.action&&t.action()}),o.push(n)),a.append(n)}),document.body.append(a);let s=a.getBoundingClientRect(),c=Math.min(t,window.innerWidth-s.width-8),l=Math.min(n,window.innerHeight-s.height-8);a.style.left=`${Math.max(8,c)}px`,a.style.top=`${Math.max(8,l)}px`;let u=-1,d=e=>{u=(e+o.length)%o.length,o.forEach((e,t)=>e.classList.toggle(`is-focused`,t===u)),o[u]?.focus()},f=e=>{e.key===`Escape`?(e.preventDefault(),Eo()):e.key===`ArrowDown`?(e.preventDefault(),d(u+1)):e.key===`ArrowUp`?(e.preventDefault(),d(u<=0?o.length-1:u-1)):e.key===`Tab`?(e.preventDefault(),e.shiftKey?d(u<=0?o.length-1:u-1):d(u+1)):e.key===`Enter`&&u>=0&&(e.preventDefault(),o[u].click())},p=e=>{a.contains(e.target)||Eo()},m=()=>Eo();document.addEventListener(`keydown`,f,!0),document.addEventListener(`pointerdown`,p,!0),document.addEventListener(`contextmenu`,p,!0),window.addEventListener(`blur`,m),window.addEventListener(`resize`,m),document.addEventListener(`scroll`,m,!0),So={cleanup(){document.removeEventListener(`keydown`,f,!0),document.removeEventListener(`pointerdown`,p,!0),document.removeEventListener(`contextmenu`,p,!0),window.removeEventListener(`blur`,m),window.removeEventListener(`resize`,m),document.removeEventListener(`scroll`,m,!0);let e=a.contains(document.activeElement);a.remove(),e&&i&&i!==document.body&&typeof i.focus==`function`&&document.contains(i)&&i.focus()}},a.focus()}var Ao=320,jo=10,Mo=!1,No=new Set;function Po(e){return No.add(e),()=>No.delete(e)}function Fo(){for(let e of[...No])try{e()}catch{}}function Io(e,{onStart:t,onMove:n,onDrop:r,onCancel:i,canStart:a}={}){let o=!1,s=null,c=0,l=0,u=!1,d=null,f=null;function p(){d!==null&&(clearTimeout(d),d=null)}function m(e){o&&e.preventDefault()}function h(e){e.preventDefault(),e.stopImmediatePropagation()}function g(n){if(!Mo){if(!e.isConnected){y();return}Mo=!0,o=!0,document.body.classList.add(`is-dragging`),u&&(window.addEventListener(`touchmove`,m,{passive:!1,capture:!0}),window.addEventListener(`contextmenu`,h,!0)),t?.(n,{x:c,y:l})}}function _(e){s??(e.button!=null&&e.button!==0||e.ctrlKey||e.metaKey||e.shiftKey||e.altKey||a&&!a(e)||(s=e.pointerId,c=e.clientX,l=e.clientY,o=!1,u=e.pointerType===`touch`,f=e,window.addEventListener(`pointermove`,v,!0),window.addEventListener(`pointerup`,x,!0),window.addEventListener(`pointercancel`,S,!0),window.addEventListener(`keydown`,C,!0),u&&(d=setTimeout(()=>{d=null,s!=null&&!o&&g(f)},Ao))))}function v(e){if(e.pointerId===s){if(f=e,!o){let t=Math.abs(e.clientX-c),n=Math.abs(e.clientY-l);if(u){d!==null&&(t>jo||n>jo)&&y();return}if(t<4&&n<4||(g(e),!o))return}e.preventDefault(),n?.(e)}}function y(){p(),window.removeEventListener(`pointermove`,v,!0),window.removeEventListener(`pointerup`,x,!0),window.removeEventListener(`pointercancel`,S,!0),window.removeEventListener(`keydown`,C,!0),window.removeEventListener(`touchmove`,m,{capture:!0}),window.removeEventListener(`contextmenu`,h,!0),s=null}function b(e,t){p(),window.removeEventListener(`pointermove`,v,!0),window.removeEventListener(`pointerup`,x,!0),window.removeEventListener(`pointercancel`,S,!0),window.removeEventListener(`keydown`,C,!0),window.removeEventListener(`touchmove`,m,{capture:!0}),window.removeEventListener(`contextmenu`,h,!0),s=null,o&&(o=!1,Mo=!1,document.body.classList.remove(`is-dragging`),e?(r?.(t),Lo()):i?.(),Fo())}function x(e){e.pointerId===s&&b(!0,e)}function S(e){e.pointerId===s&&b(!1,e)}function C(e){if(e.key!==`Escape`)return;if(!o){b(!1,e);return}o=!1,Mo=!1,document.body.classList.remove(`is-dragging`),i?.(),Fo(),window.removeEventListener(`pointermove`,v,!0),window.removeEventListener(`pointerup`,x,!0),window.removeEventListener(`pointercancel`,S,!0),window.removeEventListener(`keydown`,C,!0),window.removeEventListener(`touchmove`,m,{capture:!0}),window.removeEventListener(`contextmenu`,h,!0);let t=e=>{e.pointerId===s&&(window.removeEventListener(`pointerup`,t,!0),window.removeEventListener(`pointercancel`,t,!0),s=null,Lo())};window.addEventListener(`pointerup`,t,!0),window.addEventListener(`pointercancel`,t,!0)}return e.addEventListener(`pointerdown`,_),()=>e.removeEventListener(`pointerdown`,_)}function Lo(){let e=t=>{t.stopImmediatePropagation(),t.preventDefault(),window.removeEventListener(`click`,e,!0)};window.addEventListener(`click`,e,!0),setTimeout(()=>window.removeEventListener(`click`,e,!0),0)}function Ro(t){let{store:n,cursor:r}=t,i=r.getFullYear(),a=Bo(n,new Date(i,0,1).getTime(),new Date(i+1,0,1).getTime()),o=e(`div`,{class:`view year`}),s=e(`div`,{class:`year__grid`});for(let e=0;e<12;e++)s.append(zo(new Date(i,e,1),t,a));return o.append(s),{node:o}}function zo(t,n,r){let{settings:i,cursor:a,now:o,actions:s}=n,c=e(`div`,{class:`year__month`});c.append(e(`button`,{class:`year__month-name`,type:`button`,text:P[t.getMonth()],title:`Open ${P[t.getMonth()]}`,on:{click:()=>s.gotoMonthView(t)}}));let l=e(`div`,{class:`year__days`});return J(i.weekStartsOn).forEach(t=>{l.append(e(`div`,{class:`year__dow`,text:N[t]}))}),oe(t,i.weekStartsOn).forEach(n=>{if(!G(n,t)){l.append(e(`div`,{class:`year__day is-muted`,"aria-hidden":`true`,text:String(n.getDate())}));return}let i=[`year__day`];K(n,o)&&i.push(`is-today`),W(n,a)&&i.push(`is-selected`),r.has(B(n).getTime())&&i.push(`has-events`),l.append(e(`button`,{class:i.join(` `),type:`button`,text:String(n.getDate()),"aria-label":`${n.toDateString()}${W(n,a)?`, selected`:``}`,"aria-current":K(n,o)?`date`:null,on:{click:()=>s.gotoDayView(n)}}))}),c.append(l),c}function Bo(e,t,n){let r=new Set;for(let i of e.getEventsInRange(t,n)){let e=B(new Date(Math.max(i.start,t))),a=Math.min(i.end,n);for(;e.getTime()<a;)r.add(e.getTime()),e=L(e,1)}return r}var Vo=40,Ho=300,Uo=500,Wo=4,Go=24,Ko=16;function qo({getBounds:e,onPage:t,onScroll:n}={}){let r=0,i=0,a=null,o=!1,s=0,c=0,l=0,u=0;function d(){s=0,c=0,l=0}function f(e,n){if(t){if(e!==s){s=e,c=n,l=0;return}n-c>=Ho&&n-l>=Uo&&(l=n,t(e))}}function p(t){if(!o)return;a=requestAnimationFrame(p);let s=u?Math.min(50,t-u):Ko;u=t;let c=e();if(!c){d();return}let l=r<=c.left+Vo?-1:+(r>=c.right-Vo),m=0,h=0;if(i<=c.top+Vo?(m=-1,h=c.top+Vo-i):i>=c.bottom-Vo&&(m=1,h=i-(c.bottom-Vo)),n&&m!==0&&l===0){d();let e=Math.min(1,h/Vo);n(m,(Wo+e*(Go-Wo))*(s/Ko));return}let g=l===0?n?0:m:l;if(g===0){d();return}f(g,t)}return{move(e,t){r=e,i=t,o||(o=!0,u=0,a=requestAnimationFrame(p))},stop(){o=!1,a&&cancelAnimationFrame(a),a=null,d(),u=0}}}var Jo=`is-drop-target`;function Yo(t){let{store:n,settings:r,cursor:i,now:a,actions:o}=t,s=oe(i,r.weekStartsOn),c=e(`div`,{class:`view month`}),l=e(`div`,{class:`month__dow`});J(r.weekStartsOn).forEach(t=>{l.append(e(`div`,{class:`month__dow-cell`,text:M[t]}))}),c.append(l);let u=e(`div`,{class:`month__grid`}),d=[];s.forEach(r=>{let s=e(`div`,{class:`month__cell`+(G(r,i)?``:` is-othermonth`)+(K(r,a)?` is-today`:``)+(ae(r)?` is-weekend`:``),"aria-current":K(r,a)?`date`:null,dataset:{day:String(B(r).getTime())},on:{click:e=>{e.target.closest(`.chip`)||e.target.closest(`.month__more`)||(window.matchMedia(`(max-width: 520px)`).matches?o.gotoDayView(r):o.createAt({start:Xo(r),allDay:!1}))},contextmenu:e=>{e.target.closest(`.chip`)||o.slotContextMenu(e,Xo(r))}}});s.append(e(`span`,{class:`month__daynum`,text:String(r.getDate()),role:`button`,tabindex:`0`,title:`Open day`,"aria-label":`Open ${me(r)}`,style:{cursor:`pointer`},on:{click:e=>{e.stopPropagation(),o.gotoDayView(r)},keydown:e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),e.stopPropagation(),o.gotoDayView(r))}}}));let c=e(`div`,{class:`month__events`}),l=B(r).getTime(),f=V(r).getTime(),p=n.getEventsInRange(l,f+1,{includeHolidays:!0}),m=n.getTasksInRange(l,f+1);p.forEach(e=>c.append(e.readOnly?Qo(e,t):Zo(e,r,t,d))),m.forEach(e=>c.append($o(e,r,t,d))),s.append(c),u.append(s),d.push({cell:s,eventsWrap:c,count:p.length+m.length,day:r})}),c.append(u);function f(){if(window.matchMedia(`(max-width: 520px)`).matches)return;let t=d.find(({count:e})=>e>0);if(!t)return;let n=t.eventsWrap.firstElementChild,r=parseFloat(getComputedStyle(t.eventsWrap).gap)||0,i=(n?n.offsetHeight:0)+r;if(!(i>r))return;let a=d.map(({cell:e,eventsWrap:t,count:n})=>n?e.clientHeight-t.offsetTop-parseFloat(getComputedStyle(e).paddingBottom):0);d.forEach(({eventsWrap:t,count:n,day:s},c)=>{if(n===0)return;let l=[...t.querySelectorAll(`.chip`)];l.forEach(e=>e.hidden=!1);let u=t.querySelector(`.month__more`);u&&u.remove();let d=Math.max(1,Math.floor((a[c]+r)/i));if(n<=d)return;let f=Math.max(1,d-1);l.forEach((e,t)=>{e.hidden=t>=f});let p=e(`button`,{class:`month__more`,type:`button`,text:`${n-f} more`,on:{click:e=>{e.stopPropagation(),o.gotoDayView(s)}}});t.append(p)})}return{node:c,afterMount:f}}function Xo(e){let t=B(e);return t.setHours(9,0,0,0),t.getTime()}function Zo(t,n,r,i){let a=S(t.color),o=B(new Date(t.start)).getTime()!==B(new Date(t.end)).getTime(),c=t.allDay||t.end-t.start>=24*36e5&&o,l=Math.max(t.start,B(n).getTime()),u=e(`div`,{class:`chip${c?` chip--filled`:``}${t.ooo?` is-ooo`:``}${t.declined?` is-declined`:``}`,style:{"--chip-color":a,"--ev-fg":C(t.color)},tabindex:`0`,role:`button`,dataset:{focusKey:`ev:${t.id}`},title:t.title||`(Untitled)`,"aria-label":`${t.ooo?`Out of office: `:``}${t.title||`Untitled`}${t.declined?` (declined)`:``}${t.allDay?`, all day`:`, `+X(new Date(l),{hour12:r.settings.hour12})}`});return t.ooo&&u.append(e(`span`,{class:`chip__ooo-icon`,html:s(`plane`,{size:`sm`})})),!c&&!t.ooo&&u.append(e(`span`,{class:`chip__dot`})),!c&&!t.allDay&&u.append(e(`span`,{class:`chip__time`,text:X(new Date(l),{hour12:r.settings.hour12})})),u.append(e(`span`,{class:`chip__title`,text:t.title||`(Untitled)`})),u.addEventListener(`click`,e=>{e.stopPropagation(),r.actions.openEvent(t)}),u.addEventListener(`keydown`,e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),r.actions.openEvent(t))}),u.addEventListener(`contextmenu`,e=>{e.stopPropagation(),r.actions.eventContextMenu(e,t)}),i&&es(u,n,r,e=>{let n=L(new Date(t.start),e).getTime(),i=L(new Date(t.end),e).getTime();r.actions.moveEvent(t,n,i)}),u}function Qo(t,n){let r=t.dst?`Clock change`:`Public holiday`,i=e(`div`,{class:`chip chip--holiday`,tabindex:`0`,role:`button`,dataset:{focusKey:t.id},title:t.dst?t.title:`${t.title} · ${t.countryName}`,"aria-label":`${r}: ${t.title}`},[e(`span`,{class:`chip__holiday-icon`,html:s(t.dst?`clock`:`flag`,{size:`sm`}),"aria-hidden":`true`}),e(`span`,{class:`chip__title`,text:t.title})]);return i.addEventListener(`click`,e=>{e.stopPropagation(),n.actions.openEvent(t)}),i.addEventListener(`keydown`,e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),n.actions.openEvent(t))}),i}function $o(t,n,r,i){let a=e(`div`,{class:`chip chip--task${t.done?` is-done`:``}`,style:{"--chip-color":S(t.color),"--ev-fg":C(t.color)},tabindex:`0`,role:`button`,dataset:{focusKey:`task:${t.id}`},title:t.title||`(Untitled task)`,"aria-label":`Task: ${t.title||`Untitled`}${t.done?`, done`:``}`}),o=e(`button`,{class:`chip__check${t.done?` is-checked`:``}`,type:`button`,role:`checkbox`,"aria-checked":String(t.done),"aria-label":t.done?`Mark as not done`:`Mark as done`,html:t.done?s(`check`,{size:`sm`}):``,on:{click:e=>{e.stopPropagation(),r.actions.toggleTask(t)}}});return a.append(o,e(`span`,{class:`chip__title`,text:t.title||`(Untitled task)`})),a.addEventListener(`click`,e=>{e.stopPropagation(),r.actions.openTask(t)}),a.addEventListener(`keydown`,e=>{if(e.key===`Enter`||e.key===` `){if(e.target.closest(`.chip__check`))return;e.preventDefault(),r.actions.openTask(t)}}),a.addEventListener(`contextmenu`,e=>{e.stopPropagation(),r.actions.taskContextMenu(e,t)}),i&&es(a,n,r,e=>r.actions.moveTask(t,L(new Date(t.due),e).getTime())),a}function es(e,t,n,r){let i=null,a=null,o=0,s=0,c=()=>{i&&i.classList.remove(Jo),i=null,a=null},l=(e,t)=>{let n=ts(e,t),r=n?n.cell:null;r!==i&&(i&&i.classList.remove(Jo),i=r,a=n?n.day:null,i&&i.classList.add(Jo))},u=qo({getBounds:()=>document.querySelector(`.month__grid`)?.getBoundingClientRect()||null,onPage:e=>{n.actions.edgePage(e),l(o,s)}});Io(e,{canStart:e=>!e.target.closest(`.chip__check`),onStart(t){e.classList.add(`chip--drag-source`),o=t.clientX,s=t.clientY,u.move(o,s)},onMove(e){o=e.clientX,s=e.clientY,l(o,s),u.move(o,s)},onDrop(){u.stop(),e.classList.remove(`chip--drag-source`);let n=a;if(c(),!n)return;let i=q(t,n);i!==0&&r(i)},onCancel(){u.stop(),e.classList.remove(`chip--drag-source`),c()}})}function ts(e,t){let n=document.querySelectorAll(`.month__grid .month__cell`);for(let r of n){let n=r.getBoundingClientRect();if(e>=n.left&&e<=n.right&&t>=n.top&&t<=n.bottom)return{cell:r,day:new Date(Number(r.dataset.day))}}return null}function ns(e){let t=e.map(e=>({event:e,start:e.start,end:Math.max(e.end,e.start+1),colIndex:0,colCount:1})).sort((e,t)=>e.start-t.start||t.end-e.end),n=[],r=[],i=-1/0,a=()=>{let e=Math.max(r.length,1);for(let t of n)t.colCount=e;n=[],r=[],i=-1/0};for(let e of t){n.length&&e.start>=i&&a();let t=!1;for(let n=0;n<r.length;n++)if(r[n]<=e.start){r[n]=e.end,e.colIndex=n,t=!0;break}t||(e.colIndex=r.length,r.push(e.end)),n.push(e),i=Math.max(i,e.end)}return a(),t.map(({event:e,colIndex:t,colCount:n})=>({event:e,colIndex:t,colCount:n}))}function rs(e,t,n){let r=[],i=[];for(let a of e){let e=a.start>=t&&a.end<=n;a.allDay||a.end-a.start>=24*36e5&&!e?r.push(a):i.push({...a,start:Math.max(a.start,t),end:Math.min(a.end,n)})}return{allDay:r,timed:i}}var is=52,as=56,os=18,ss=15,cs=1440,ls=30*6e4;function us(e,t){let n=new Date(e);return q(new Date(t),n)*cs+n.getHours()*60+n.getMinutes()+n.getSeconds()/60+n.getMilliseconds()/6e4}function ds(e,t){return Re(new Date(e),t).getTime()}function fs(e,t,n){let r=Math.floor(e/6e4),i=e-r*6e4;return ds(t,n+r)+i}function ps(e,t){let n=Math.max(ss,Math.ceil(t/6e4));return Math.min(Math.max(0,e),Math.max(0,cs-n))}function ms(e,t,n,r){return e===`top`?{s:Math.max(0,Math.min(t,Math.max(n,r-ss))),en:r}:{s:n,en:Math.min(cs,Math.max(t,Math.min(r,n+ss)))}}function hs(t,n){let{store:r,settings:i,now:a,actions:o}=n,s=i.hour12,c=ye(i.secondaryTz)?i.secondaryTz:``,l=c?104:as,u=B(t[0]).getTime(),d=e(`div`,{class:`view timegrid${c?` has-secondary-tz`:``}`,style:{"--hour-h":`${is}px`,"--gutter":`${l}px`}}),f=t.map(e=>{let t=B(e).getTime(),n=V(e).getTime(),i=r.getEventsInRange(t,n+1,{includeHolidays:!0}),a=r.getTasksInRange(t,n+1);return{day:e,dayStart:t,dayEnd:n,railTasks:a.filter(e=>e.allDay),timedTasks:a.filter(e=>!e.allDay),...rs(i,t,n)}}),p=f.some(e=>e.allDay.length>0),m=f.some(e=>e.railTasks.length>0),h=e(`div`,{class:`timegrid__head-cols`});t.forEach(t=>{let n=e(`div`,{class:`timegrid__head-col${K(t,a)?` is-today`:``}`,"aria-current":K(t,a)?`date`:null,role:`button`,tabindex:`0`,"aria-label":`Go to ${me(t)}`,on:{click:()=>o.gotoDayView(t),keydown:e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),o.gotoDayView(t))}}});n.append(e(`span`,{class:`timegrid__dow`,text:M[t.getDay()]}),e(`span`,{class:`timegrid__datenum`,text:String(t.getDate())})),h.append(n)});let g=e(`div`,{class:`timegrid__head-gutter`});if(c&&g.append(e(`span`,{class:`timegrid__tz-abbr timegrid__tz-abbr--secondary`,text:we(c,u)}),e(`span`,{class:`timegrid__tz-abbr timegrid__tz-abbr--local`,text:`Local`})),d.append(e(`div`,{class:`timegrid__head`},[g,h])),p){let t=e(`div`,{class:`timegrid__allday-cols`});f.forEach(({day:r,allDay:i})=>{let o=e(`div`,{class:`timegrid__allday-col${K(r,a)?` is-today`:``}`});i.forEach(e=>o.append(e.readOnly?Ts(e,n):ws(e,n))),t.append(o)}),d.append(e(`div`,{class:`timegrid__allday`},[e(`div`,{class:`timegrid__allday-label`,text:`All-day`}),t]))}if(m){let t=e(`div`,{class:`timegrid__allday-cols`});f.forEach(({day:r,railTasks:i})=>{let o=e(`div`,{class:`timegrid__allday-col${K(r,a)?` is-today`:``}`});i.forEach(e=>o.append(Es(e,n))),t.append(o)}),d.append(e(`div`,{class:`timegrid__allday timegrid__tasks`},[e(`div`,{class:`timegrid__allday-label`,text:`Tasks`}),t]))}let _=e(`div`,{class:`timegrid__axis`});for(let t=0;t<24;t++){let n=[];t!==0&&(c&&n.push(e(`span`,{class:`timegrid__hour-label timegrid__hour-label--secondary`,text:Ce(ds(u,t*60),c,{hour12:s})})),n.push(e(`span`,{class:`timegrid__hour-label`,text:ue(t,{hour12:s})}))),_.append(e(`div`,{class:`timegrid__hour`},n))}let v=e(`div`,{class:`timegrid__cols`}),y={cols:v,days:t,hourH:is};f.forEach(({day:t,dayStart:r,dayEnd:i,timed:s,timedTasks:c})=>{let l=e(`div`,{class:`timegrid__col${K(t,a)?` is-today`:``}`,dataset:{day:String(r)}});for(let t=0;t<24;t++)l.append(e(`div`,{class:`timegrid__slot`}));if(l.addEventListener(`click`,e=>{e.target.closest(`.tevent`)||o.createAt({start:gs(e,l,t)})}),l.addEventListener(`contextmenu`,e=>{e.target.closest(`.tevent`)||o.slotContextMenu(e,gs(e,l,t))}),vs(l,t,n,is),ns([...s.map(e=>({...e,__task:!1})),...c.map(e=>({...e,__task:!0,start:e.due,end:e.due+ls}))]).forEach(({event:e,colIndex:t,colCount:a})=>{l.append(e.__task?Ds(e,t,a,r,n,y):ys(e,t,a,r,i,n,y))}),K(t,a)){let t=Y(a)/60*is;l.append(e(`div`,{class:`now-line`,style:{top:`${t}px`}}))}v.append(l)});let b=e(`div`,{class:`timegrid__scroll`},[e(`div`,{class:`timegrid__body`},[_,v])]);d.append(b);function x(){d.style.setProperty(`--sbw`,`${b.offsetWidth-b.clientWidth}px`);let e=f.some(e=>K(e.day,a))?Math.max(0,Y(a)-120):480;b.scrollTop=e/60*is}return{node:d,afterMount:x}}function gs(e,t,n){let r=t.getBoundingClientRect(),i=Math.max(0,e.clientY-r.top);return Re(n,Math.min(1410,Math.round(i/is/.5)*30)).getTime()}function _s(e,t,{snap:n=ss,minDur:r=ss,dayMinutes:i=cs}={}){let a=e=>Math.min(Math.max(Math.round(e/n)*n,0),i),o=a(e),s=a(t),c=Math.min(o,s),l=Math.max(o,s);return l-c<r&&(l=Math.min(c+r,i),c=l-r),{start:c,end:l}}function vs(t,n,r,i){let a=null,o=0,s=null;Io(t,{canStart:e=>!e.target.closest(`.tevent, .task-chip`),onStart(n,r){let s=t.getBoundingClientRect();o=(r.y-s.top)/i*60,a=e(`div`,{class:`tg-draft`,"aria-hidden":`true`,style:{"--draft-fill":S(y),"--ev-fg":C(y)}},[e(`span`,{class:`tg-draft__time`})]),t.append(a),c(n)},onMove:c,onDrop(){let e=s;if(!e)return l();let t=B(n).getTime(),i=a;a=null,s=null,r.actions.createAt({start:ds(t,e.start),end:ds(t,e.end),onClose:()=>i.remove()})},onCancel:l});function c(e){let c=Ss(t,B(n).getTime());if(!c){s=null;return}t=c,a&&a.parentElement!==c&&c.append(a);let l=t.getBoundingClientRect(),u=(e.clientY-l.top)/i*60;s=_s(o,u),a.style.top=`${s.start/60*i}px`,a.style.height=`${Math.max((s.end-s.start)/60*i,os)}px`;let d=B(n).getTime(),f=a.querySelector(`.tg-draft__time`);f&&(f.textContent=_e(new Date(ds(d,s.start)),new Date(ds(d,s.end)),{hour12:r.settings.hour12}))}function l(){a&&a.remove(),a=null,s=null}}function ys(t,n,r,i,a,o,s){let c=o.store.getEvent(t.id)||t,l=Math.max(t.start,i),u=Math.min(t.end,a),d=us(l,i),f=Math.max(us(u,i)-d,15),p=d/60*is,m=Math.max(f/60*is,os),h=m<34,g=S(c.color),_=e(`div`,{class:`tevent${h?` is-short`:``}${c.ooo?` is-ooo`:``}${c.declined?` is-declined`:``}`,style:{top:`${p}px`,height:`${m}px`,left:`calc(${n/r*100}% + 2px)`,width:`calc(${1/r*100}% - 4px)`,"--ev-fill":g,"--ev-fg":C(c.color)},tabindex:`0`,role:`button`,dataset:{focusKey:`ev:${c.id}`},title:c.title||`(Untitled)`,"aria-label":`${c.title||`Untitled`}, ${_e(new Date(c.start),new Date(c.end),{hour12:o.settings.hour12})}`});_.append(e(`span`,{class:`tevent__title`,text:c.title||`(Untitled)`})),h?_.append(e(`span`,{class:`tevent__time`,text:X(new Date(c.start),{hour12:o.settings.hour12})})):_.append(e(`span`,{class:`tevent__time`,text:_e(new Date(c.start),new Date(c.end),{hour12:o.settings.hour12})})),ks(_,c,o);let v=c.start>=i&&c.end<=a+1;return s&&v&&(xs(_,c,o,s),bs(_,c,o,s,i)),_}function bs(t,n,r,i,a){let{hourH:o}=i,s=Math.round(us(n.start,a)),c=Math.round(us(n.end,a));[`top`,`bottom`].forEach(i=>{let l=e(`div`,{class:`tevent__resize tevent__resize--${i}`,"aria-hidden":`true`});l.addEventListener(`pointerdown`,e=>e.stopPropagation()),t.append(l);let u=null,d=null;Io(l,{onStart(){u={col:t.closest(`.timegrid__col`)||t.parentElement,top:t.style.top,height:t.style.height,short:t.classList.contains(`is-short`),timeText:t.querySelector(`.tevent__time`)?.textContent},t.classList.add(`tevent--resizing`),d=null},onMove(e){let l=Ss(u.col,a);if(!l){d=null;return}u.col=l;let f=e.clientY-l.getBoundingClientRect().top,{s:p,en:m}=ms(i,Math.round(f/o*60/ss)*ss,s,c),h=Math.max((m-p)/60*o,os);t.style.top=`${p/60*o}px`,t.style.height=`${h}px`,t.classList.toggle(`is-short`,h<34),d={start:i===`top`?ds(a,p):n.start,end:i===`bottom`?ds(a,m):n.end};let g=t.querySelector(`.tevent__time`);g&&(g.textContent=_e(new Date(d.start),new Date(d.end),{hour12:r.settings.hour12}))},onDrop(){t.classList.remove(`tevent--resizing`);let e=d;d=null,!(!e||e.start===n.start&&e.end===n.end)&&r.actions.resizeEvent(n,e.start,e.end)},onCancel(){if(t.classList.remove(`tevent--resizing`),u){t.style.top=u.top,t.style.height=u.height,t.classList.toggle(`is-short`,u.short);let e=t.querySelector(`.tevent__time`);e&&u.timeText!=null&&(e.textContent=u.timeText)}d=null}})})}function xs(e,t,n,r){let{hourH:i}=r,a=t.end-t.start,o=Math.max(ss,Math.round(a/6e4)),s=null,c=0,l=null,u=0,d=0,f=qo({getBounds:()=>{let e=document.querySelector(`.timegrid__scroll`);if(!e)return null;let t=e.getBoundingClientRect(),n=document.querySelector(`.timegrid__cols`),r=n?n.getBoundingClientRect():t;return{left:r.left,right:r.right,top:t.top,bottom:t.bottom}},onPage:e=>{n.actions.edgePage(e),p(u,d)},onScroll:(e,t)=>{let n=document.querySelector(`.timegrid__scroll`);n&&(n.scrollTop+=e*t,p(u,d))}});Io(e,{onStart(t,n){let r=parseFloat(e.style.top)||0,i=(e.closest(`.timegrid__col`)||e.parentElement).getBoundingClientRect();c=n.y-i.top-r,s=e.cloneNode(!0),s.classList.add(`tevent--ghost`),s.classList.remove(`tevent--drag-source`),s.removeAttribute(`tabindex`),s.removeAttribute(`role`),s.setAttribute(`aria-hidden`,`true`),e.classList.add(`tevent--drag-source`),u=t.clientX,d=t.clientY,p(u,d),f.move(u,d)},onMove(e){u=e.clientX,d=e.clientY,p(u,d),f.move(u,d)},onDrop(){f.stop();let e=l;if(m(),!e)return;let r=B(e.day).getTime(),i=ds(r,e.startMin);if(i===t.start)return;let o=fs(a,r,e.startMin);n.actions.moveEvent(t,i,o)},onCancel(){f.stop(),m()}});function p(e,t){let r=Cs(e);if(!r){l=null,s&&s.remove();return}let u=t-r.rect.top-c,d=ps(Math.round(u/i*60/ss)*ss,a);l={day:new Date(r.dayMs),startMin:d},s.parentElement!==r.el&&r.el.append(s),s.style.top=`${d/60*i}px`,s.style.height=`${Math.max(o/60*i,os)}px`,s.style.left=`2px`,s.style.width=`calc(100% - 4px)`;let f=B(l.day).getTime(),p=new Date(ds(f,d)),m=new Date(fs(a,f,d)),h=s.querySelector(`.tevent__time`);if(h){let e={hour12:n.settings.hour12};h.textContent=s.classList.contains(`is-short`)?X(p,e):_e(p,m,e)}}function m(){e.classList.remove(`tevent--drag-source`),s?.remove(),s=null,l=null}}function Ss(e,t){return e&&e.isConnected?e:document.querySelector(`.timegrid__cols > .timegrid__col[data-day="${t}"]`)}function Cs(e){let t=document.querySelectorAll(`.timegrid__cols > .timegrid__col`);if(!t.length)return null;let n=t.length-1;for(let r=0;r<=n;r++){let i=t[r].getBoundingClientRect();if(e<i.right||r===n)return{idx:r,el:t[r],rect:i,dayMs:Number(t[r].dataset.day)}}let r=t[0];return{idx:0,el:r,rect:r.getBoundingClientRect(),dayMs:Number(r.dataset.day)}}function ws(t,n){let r=e(`div`,{class:`allday-chip${t.ooo?` is-ooo`:``}${t.declined?` is-declined`:``}`,style:{"--chip-color":S(t.color),"--ev-fg":C(t.color)},tabindex:`0`,role:`button`,dataset:{focusKey:`ev:${t.id}`},title:t.title||`(Untitled)`,"aria-label":`${t.ooo?`Out of office: `:``}${t.title||`Untitled`}, all day`});return t.ooo&&r.append(e(`span`,{class:`allday-chip__icon`,html:s(`plane`,{size:`sm`})})),r.append(e(`span`,{class:`allday-chip__title`,text:t.title||`(Untitled)`})),ks(r,t,n),r}function Ts(t,n){let r=t.dst?`Clock change`:`Public holiday`,i=e(`div`,{class:`allday-chip allday-chip--holiday`,tabindex:`0`,role:`button`,dataset:{focusKey:t.id},title:t.dst?t.title:`${t.title} · ${t.countryName}`,"aria-label":`${r}: ${t.title}`},[e(`span`,{class:`allday-chip__icon`,html:s(t.dst?`clock`:`flag`,{size:`sm`}),"aria-hidden":`true`}),e(`span`,{class:`allday-chip__title`,text:t.title})]);return i.addEventListener(`click`,e=>{e.stopPropagation(),n.actions.openEvent(t)}),i.addEventListener(`keydown`,e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),n.actions.openEvent(t))}),i}function Es(t,n){let r=t.allDay?``:X(new Date(t.due),{hour12:n.settings.hour12}),i=e(`div`,{class:`allday-chip task-chip${t.done?` is-done`:``}`,style:{"--chip-color":S(t.color),"--ev-fg":C(t.color)},tabindex:`0`,role:`button`,dataset:{focusKey:`task:${t.id}`},title:t.title||`(Untitled task)`,"aria-label":`Task: ${t.title||`Untitled`}${t.done?`, done`:``}`}),a=e(`button`,{class:`chip__check${t.done?` is-checked`:``}`,type:`button`,role:`checkbox`,"aria-checked":String(t.done),"aria-label":t.done?`Mark as not done`:`Mark as done`,html:t.done?s(`check`,{size:`sm`}):``,on:{click:e=>{e.stopPropagation(),n.actions.toggleTask(t)}}});i.append(a);let o=e(`span`,{class:`allday-chip__title`,text:t.title||`(Untitled task)`});return r&&o.append(e(`span`,{class:`allday-chip__time`,text:r})),i.append(o),i.addEventListener(`click`,e=>{e.stopPropagation(),n.actions.openTask(t)}),i.addEventListener(`keydown`,e=>{if(e.key===`Enter`||e.key===` `){if(e.target.closest(`.chip__check`))return;e.preventDefault(),n.actions.openTask(t)}}),i.addEventListener(`contextmenu`,e=>{e.stopPropagation(),n.actions.taskContextMenu(e,t)}),i}function Ds(e,t,n,r,i,a){let o=Es(e,i);o.classList.add(`task-chip--grid`);let s=us(e.due,r);return o.style.top=`${s/60*is}px`,o.style.left=`calc(${t/n*100}% + 2px)`,o.style.width=`calc(${1/n*100}% - 4px)`,a&&Os(o,e,i,a),o}function Os(e,t,n,r){let{hourH:i}=r,a=null,o=0,s=null,c=0,l=0,u=qo({getBounds:()=>{let e=document.querySelector(`.timegrid__scroll`);if(!e)return null;let t=e.getBoundingClientRect(),n=document.querySelector(`.timegrid__cols`),r=n?n.getBoundingClientRect():t;return{left:r.left,right:r.right,top:t.top,bottom:t.bottom}},onPage:e=>{n.actions.edgePage(e),d(c,l)},onScroll:(e,t)=>{let n=document.querySelector(`.timegrid__scroll`);n&&(n.scrollTop+=e*t,d(c,l))}});Io(e,{canStart:e=>!e.target.closest(`.chip__check`),onStart(t,n){let r=parseFloat(e.style.top)||0,i=(e.closest(`.timegrid__col`)||e.parentElement).getBoundingClientRect();o=n.y-i.top-r,a=e.cloneNode(!0),a.classList.add(`task-chip--ghost`),a.removeAttribute(`tabindex`),a.removeAttribute(`role`),a.setAttribute(`aria-hidden`,`true`),e.classList.add(`task-chip--drag-source`),c=t.clientX,l=t.clientY,d(c,l),u.move(c,l)},onMove(e){c=e.clientX,l=e.clientY,d(c,l),u.move(c,l)},onDrop(){u.stop();let e=s;if(f(),!e)return;let r=ds(B(e.day).getTime(),e.startMin);r!==t.due&&n.actions.moveTask(t,r)},onCancel(){u.stop(),f()}});function d(e,t){let r=Cs(e);if(!r){s=null,a&&a.remove();return}let c=t-r.rect.top-o,l=Math.round(c/i*60/ss)*ss,u=Math.min(Math.max(0,l),cs-ss);s={day:new Date(r.dayMs),startMin:u},a.parentElement!==r.el&&r.el.append(a),a.style.top=`${u/60*i}px`,a.style.left=`2px`,a.style.width=`calc(100% - 4px)`;let d=B(s.day).getTime(),f=new Date(ds(d,u)),p=a.querySelector(`.allday-chip__time`);p&&(p.textContent=X(f,{hour12:n.settings.hour12}))}function f(){e.classList.remove(`task-chip--drag-source`),a?.remove(),a=null,s=null}}function ks(e,t,n){e.addEventListener(`click`,e=>{e.stopPropagation(),n.actions.openEvent(t)}),e.addEventListener(`keydown`,e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),n.actions.openEvent(t))}),e.addEventListener(`contextmenu`,e=>{e.stopPropagation(),n.actions.eventContextMenu(e,t)})}function As(e){return hs(se(e.cursor,e.settings.weekStartsOn),e)}function js(e){let t=B(e.cursor);return hs(Array.from({length:4},(e,n)=>L(t,n)),e)}function Ms(e){return hs([I(e.cursor)],e)}var Ns=60;function Ps(t){let{store:n,settings:r,cursor:i,now:a,actions:o}=t,c=B(i).getTime(),l=L(i,Ns).getTime(),u=n.getEventsInRange(c,l,{includeHolidays:!0}),d=n.getTasksInRange(c,l),f=u.filter(e=>!e.readOnly),p=e(`div`,{class:`view agenda`}),m=e(`div`,{class:`agenda__inner`});if(p.append(m),f.length===0&&d.length===0){let t=n.getEventsInRange(c,l,{includeHidden:!0}).filter(e=>!e.readOnly).length,r=n.getTasksInRange(c,l,{includeHidden:!0}).length,a=t+r,u=(e,t)=>`${e} ${t}${e===1?``:`s`}`,d=[t?u(t,`event`):``,r?u(r,`task`):``].filter(Boolean).join(` and `);return p.append(e(`div`,{class:`empty`},[e(`span`,{class:`icon icon--lg`,html:s(`calendar-blank`)}),e(`p`,{text:a?`${d} in the next 60 days ${a===1?`is`:`are`} hidden by your category filter.`:`No upcoming events in the next 60 days.`}),e(`button`,{class:`btn btn--primary`,type:`button`,html:a?s(`check`,{size:`sm`})+`<span>Show all categories</span>`:s(`plus`,{size:`sm`})+`<span>New event</span>`,on:{click:()=>a?o.showAllCategories():o.createAt({start:Fs(i)})}})])),m.remove(),{node:p,afterMount(){}}}let h=new Map,g=(e,t)=>{h.has(e)||h.set(e,[]),h.get(e).push(t)};return u.forEach(e=>{let t=Math.min(e.end,l),n=B(new Date(Math.max(e.start,c)));for(;n.getTime()<t;)g(n.getTime(),{kind:e.readOnly?`holiday`:`event`,item:e,when:e.start,allDay:e.allDay}),n=L(n,1)}),d.forEach(e=>{g(B(new Date(e.due)).getTime(),{kind:`task`,item:e,when:e.due,allDay:e.allDay})}),[...h.keys()].sort((e,t)=>e-t).forEach(n=>{let r=new Date(n),i=e(`div`,{class:`agenda__events`});h.get(n).sort((e,t)=>Number(t.allDay)-Number(e.allDay)||e.when-t.when).forEach(e=>{e.kind===`task`?i.append(zs(e.item,t)):e.kind===`holiday`?i.append(Rs(e.item,t)):i.append(Ls(e.item,n,t))}),m.append(e(`div`,{class:`agenda__day`},[e(`div`,{class:`agenda__date`},[e(`div`,{class:`agenda__date-num${K(r,a)?` is-today`:``}`,"aria-current":K(r,a)?`date`:null,text:String(r.getDate())}),e(`div`,{class:`agenda__date-dow`,text:`${M[r.getDay()]} · ${F[r.getMonth()]}`})]),i]))}),{node:p,afterMount(){}}}function Fs(e){let t=B(e);return t.setHours(9,0,0,0),t.getTime()}function Is(e,t,n,r){let i={hour12:r};if(t<=L(new Date(n),1).getTime())return _e(new Date(e),new Date(t),i);let a=new Date(t),o=`${F[a.getMonth()]} ${a.getDate()}`;return`${X(new Date(e),i)} – ${o}, ${X(a,i)}`}function Ls(t,n,r){let{hour12:i}=r.settings,a=Math.max(t.start,n),o=t.allDay?`All day`:Is(a,t.end,n,i),c=e(`div`,{class:`agenda__event${t.ooo?` is-ooo`:``}${t.declined?` is-declined`:``}`,tabindex:`0`,role:`button`,dataset:{focusKey:`ev:${t.id}`},title:t.title||`(Untitled)`,"aria-label":`${t.ooo?`Out of office: `:``}${t.title||`Untitled`}${t.declined?` (declined)`:``}, ${o}`});return c.append(t.ooo?e(`span`,{class:`agenda__event-icon`,style:{"--chip-color":S(t.color)},html:s(`plane`,{size:`sm`})}):e(`span`,{class:`agenda__event-dot`,style:{"--chip-color":S(t.color)}}),e(`span`,{class:`agenda__event-time`,text:o}),e(`span`,{class:`agenda__event-title`,text:t.title||`(Untitled)`})),c.addEventListener(`click`,()=>r.actions.openEvent(t)),c.addEventListener(`keydown`,e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),r.actions.openEvent(t))}),c.addEventListener(`contextmenu`,e=>r.actions.eventContextMenu(e,t)),c}function Rs(t,n){let r=t.dst?`Clock change`:`Public holiday`,i=e(`div`,{class:`agenda__event agenda__event--holiday`,tabindex:`0`,role:`button`,dataset:{focusKey:t.id},title:t.dst?t.title:`${t.title} · ${t.countryName}`,"aria-label":`${r}: ${t.title}`},[e(`span`,{class:`agenda__event-icon`,html:s(t.dst?`clock`:`flag`,{size:`sm`}),"aria-hidden":`true`}),e(`span`,{class:`agenda__event-time`,text:t.dst?`Clocks`:`Holiday`}),e(`span`,{class:`agenda__event-title`,text:t.title})]);return i.addEventListener(`click`,()=>n.actions.openEvent(t)),i.addEventListener(`keydown`,e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),n.actions.openEvent(t))}),i}function zs(t,n){let{hour12:r}=n.settings,i=t.allDay?`To-do`:X(new Date(t.due),{hour12:r}),a=e(`div`,{class:`agenda__event agenda__task${t.done?` is-done`:``}`,tabindex:`0`,role:`button`,dataset:{focusKey:`task:${t.id}`},title:t.title||`(Untitled task)`,"aria-label":`Task: ${t.title||`Untitled`}, ${i}${t.done?`, done`:``}`}),o=e(`button`,{class:`agenda__task-check${t.done?` is-checked`:``}`,type:`button`,role:`checkbox`,"aria-checked":String(t.done),"aria-label":t.done?`Mark as not done`:`Mark as done`,style:{"--chip-color":S(t.color),"--ev-fg":C(t.color)},html:t.done?s(`check`,{size:`sm`}):``,on:{click:e=>{e.stopPropagation(),n.actions.toggleTask(t)}}});return a.append(o,e(`span`,{class:`agenda__event-time`,text:i}),e(`span`,{class:`agenda__event-title agenda__task-title`,text:t.title||`(Untitled task)`})),a.addEventListener(`click`,()=>n.actions.openTask(t)),a.addEventListener(`keydown`,e=>{if(e.key===`Enter`||e.key===` `){if(e.target.closest(`.agenda__task-check`))return;e.preventDefault(),n.actions.openTask(t)}}),a.addEventListener(`contextmenu`,e=>n.actions.taskContextMenu(e,t)),a}var Bs=[{key:`year`,label:`Year`},{key:`month`,label:`Month`},{key:`week`,label:`Week`},{key:`4day`,label:`4 Day`},{key:`day`,label:`Day`},{key:`agenda`,label:`List`}];function Vs(t,{store:r,user:i,rsvp:a=null,contacts:o=null,invites:c=null,booking:l=null,meetings:d=null,mail:f=null}){let p={view:Hs(r.getSettings().defaultView),cursor:B(new Date),miniCursor:U(new Date),sidebarOpen:!1};Ks(r.getSettings().theme);let h=ta({store:r,user:i,rsvp:a,contacts:o,invites:c,booking:l,meetings:d,mail:f,onHolidaySettings:()=>le({focus:`holidays`}),onClockChangeSettings:()=>le({focus:`clock-changes`})}),g=ia({store:r,onPick:e=>{let t=e.isTask?e.due:e.start;p.cursor=B(new Date(t)),p.miniCursor=U(new Date(t)),q(),h.openView(e)}});function v(e){return t=>{Qn(t)||(console.error(t),u(e,{variant:`danger`}))}}function y(e){Promise.resolve(r.saveSettings({[e]:!r.getSettings()[e]})).catch(v(`Could not save the sidebar layout.`))}let b={createAt:e=>{j(),h.openNew(e)},openEvent:e=>h.openView(e),selectDate:e=>{p.cursor=B(e),p.miniCursor=U(e),j(),q()},gotoDayView:e=>{p.cursor=B(e),p.miniCursor=U(e),p.view=`day`,q()},gotoMonthView:e=>{p.cursor=B(e),p.miniCursor=U(e),p.view=`month`,q()},miniShift:e=>{p.miniCursor=te(p.miniCursor,e),q()},toggleColor:e=>{let t=new Set(r.getSettings().hiddenColors);t.has(e)?t.delete(e):t.add(e),r.saveSettings({hiddenColors:[...t]})},toggleCategories:()=>y(`categoriesCollapsed`),toggleBookingLinks:()=>y(`bookingLinksCollapsed`),showAllCategories:()=>{Promise.resolve(r.saveSettings({hiddenColors:[]})).catch(v(`Could not update the category filter.`))},renameCategory:e=>{ro({key:e,names:r.getSettings().categoryNames||{},onSave:t=>{Promise.resolve(r.saveSettings({categoryNames:{[e]:t}})).catch(v(`Could not rename the category.`))}})},moveEvent:(e,t,n)=>E(e,t,n,`Event rescheduled`),resizeEvent:(e,t,n)=>E(e,t,n,`Event updated`),edgePage:e=>D(e),eventContextMenu:(e,t)=>Oo(e,[{label:`Edit`,action:()=>h.openEdit(t)},{label:`Duplicate`,action:()=>S(t)},...t.declined&&!t.seriesId?[{label:`Restore (accept)`,action:()=>Promise.resolve(r.setDeclined(t.id,!1)).catch(v(`Could not restore event.`))}]:[],`-`,{label:`Delete`,danger:!0,action:()=>w(t)}]),slotContextMenu:(e,t)=>Oo(e,[{label:`New event`,action:()=>h.openNew({start:t})},{label:`New all-day event`,action:()=>h.openNew({start:t,allDay:!0})},{label:`New task`,action:()=>h.openNew({mode:`task`,due:t})},{label:`New out of office`,action:()=>h.openNew({start:t,ooo:!0,allDay:!0})}]),createTask:e=>{j(),h.openNew({...e,mode:`task`})},openTask:e=>h.openView(e),toggleTask:e=>Promise.resolve(r.toggleTask(e.id)).catch(v(`Could not update task.`)),moveTask:(e,t)=>{let n={due:e.due,allDay:e.allDay};Promise.resolve(r.saveTask({...e,due:t})).then(()=>u(`Task rescheduled`,{action:{label:`Undo`,onClick:()=>Promise.resolve(r.saveTask({...r.getTask(e.id)||e,...n})).catch(v(`Could not undo — please try again.`))}}),v(`Could not reschedule task.`))},taskContextMenu:(e,t)=>Oo(e,[{label:t.done?`Mark as not done`:`Mark as done`,action:()=>b.toggleTask(t)},{label:`Edit`,action:()=>h.openEdit(t)},`-`,{label:`Delete`,danger:!0,action:()=>x(t)}]),newBookingPage:()=>{j(),no({booking:l,store:r,user:i})},editBookingPage:e=>{j(),no({booking:l,store:r,user:i,page:e})},copyBookingLink:e=>{let t=l&&l.linkFor(e.id);if(!t){u(`Your booking link is still being prepared. Try again in a moment.`);return}(navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(t):Promise.reject(Error(`clipboard unavailable`))).then(()=>u(`Booking link copied`,{variant:`success`})).catch(()=>u(`Could not copy — clipboard access was blocked.`,{variant:`danger`}))},toggleMailInvites:()=>y(`mailInvitesCollapsed`),addMailInvite:e=>f&&Promise.resolve(f.intake.accept(e)).catch(v(`Could not add the invitation.`)),ignoreMailInvite:e=>f&&Promise.resolve(f.intake.ignore(e)).catch(v(`Could not ignore the invitation.`)),blockMailSender:e=>f&&Promise.resolve(f.intake.blockSender(e)).catch(v(`Could not block the sender.`)),openMailInvites:()=>{f&&(j(),so({mailbox:f.mailbox,intake:f.intake,store:r,toast:u}))},showMailInvites:()=>{r.getSettings().mailInvitesCollapsed&&Promise.resolve(r.saveSettings({mailInvitesCollapsed:!1})).catch(v(`Could not open the invitations list.`)),p.sidebarOpen=!0,q()}};function x(e){Promise.resolve(r.deleteTask(e.id)).then(()=>u(`Task deleted`,{action:{label:`Undo`,onClick:()=>Promise.resolve(r.saveTask(e)).catch(v(`Could not undo — please try again.`))}}),v(`Could not delete task.`))}function S(e){Promise.resolve(r.saveEvent({...e,id:void 0,declined:!1,booking:null})).then(()=>u(`Event duplicated`,{variant:`success`}),v(`Could not duplicate event.`))}function C(e){if(typeof e==`function`)return{label:`Undo`,onClick:()=>{if(ir())return void u(`You're offline — reconnect to make changes`);Promise.resolve(e()).catch(v(`Could not undo — please try again.`))}}}function w(e){if(e.seriesId){Qr({mode:`delete`,onConfirm:t=>T(e,t)});return}let t=c?c.cancellationFor(e):null;Promise.resolve(r.deleteEvent(e.id)).then(()=>{u(`Event deleted`,{action:{label:`Undo`,onClick:()=>Promise.resolve(r.saveEvent(e)).catch(v(`Could not undo — please try again.`))}}),t&&Xi({invites:c,store:r,cancel:t,toast:u})},v(`Could not delete event.`))}function T(e,t){let n=c?t===`future`?c.cancellationFor(e,{future:!0}):c.cancellationFor(t===`one`?e:{id:e.seriesId}):null,i,a;i=t===`one`?r.deleteOccurrence(e.seriesId,e.recurrenceId):t===`future`?r.deleteFuture(e.seriesId,e.recurrenceId):Promise.resolve(r.deleteEvent(e.seriesId)).then(e=>(a=e?()=>r.saveEvent(e):null,null)),Promise.resolve(i).then(e=>{u(`Event deleted`,{action:C(e&&e.undo?e.undo:a)}),n&&(t===`all`||e)&&Xi({invites:c,store:r,cancel:n,toast:u})},v(`Could not delete event.`))}function E(e,t,n,i){if(t===e.start&&n===e.end)return;let a=!1,o=()=>{e.booking||Zi({eventId:e.seriesId||e.id,invites:c,store:r,canSend:()=>{let i=r.getEvent(e.id);return!a&&i&&i.start===t&&i.end===n}})};if(e.booking&&(t!==e.start||n!==e.end)){let t=e.booking.name||e.booking.email||`the guest`;i=`${i} — ${t} won't be notified of the change`}if(e.seriesId){Promise.resolve(r.updateOccurrence(e.seriesId,e.recurrenceId,{start:t,end:n})).then(e=>{e&&(u(i,{action:C(e.undo&&(()=>(a=!0,e.undo())))}),o())},v(`Could not save the new time.`));return}let s={start:e.start,end:e.end};Promise.resolve(r.saveEvent({...e,start:t,end:n})).then(()=>{u(i,{action:{label:`Undo`,onClick:()=>(a=!0,Promise.resolve(r.saveEvent({...r.getEvent(e.id)||e,...s})).catch(v(`Could not undo — please try again.`)))}}),o()},v(`Could not save the new time.`))}function D(e){p.view===`year`?p.cursor=R(p.cursor,e):p.view===`month`?p.cursor=te(p.cursor,e):p.view===`week`?p.cursor=ee(p.cursor,e):p.view===`4day`?p.cursor=L(p.cursor,e*4):p.view===`day`?p.cursor=L(p.cursor,e):p.cursor=te(p.cursor,e),p.miniCursor=U(p.cursor),q()}function O(){p.cursor=B(new Date),p.miniCursor=U(new Date),q()}function k(e){p.view=e,r.saveSettings({defaultView:e})}function A(){let e=r.getSettings();return p.view===`year`?{main:String(p.cursor.getFullYear())}:p.view===`month`?{main:de(p.cursor)}:p.view===`week`?{main:ge(p.cursor,e.weekStartsOn)}:p.view===`4day`?{main:he(p.cursor,L(p.cursor,3))}:p.view===`day`?{main:pe(p.cursor)}:{main:de(p.cursor),muted:`and beyond`}}function j(){p.sidebarOpen=!1,W.classList.remove(`sidebar-open`),W.querySelectorAll(`.scrim`).forEach(e=>e.remove()),ne=null,ie.setAttribute(`aria-expanded`,`false`)}function M(){p.sidebarOpen||(p.sidebarOpen=!0,W.classList.add(`sidebar-open`),ne=e(`div`,{class:`scrim`,on:{click:j}}),W.append(ne),ie.setAttribute(`aria-expanded`,`true`))}function N(){p.sidebarOpen?j():M()}let P=e(`h1`,{class:`header__title`}),F=e(`main`,{class:`main`}),I=e(`div`,{style:{display:`contents`}}),ne=null,z=e(`div`,{class:`segmented`,role:`group`,"aria-label":`Calendar view`}),V=e(`nav`,{class:`tabbar`,"aria-label":`Calendar view`});Bs.forEach(t=>{z.append(e(`button`,{type:`button`,text:t.label,title:`${t.label} view`,dataset:{view:t.key},on:{click:()=>k(t.key)}})),V.append(e(`button`,{type:`button`,class:`tabbar__btn`,dataset:{view:t.key},html:s(Ws(t.key),{size:`sm`})+`<span class="tabbar__label">${t.label}</span>`,on:{click:()=>k(t.key)}}))});let H=e(`button`,{class:`icon-btn`,type:`button`,"aria-label":`Search events and tasks`,title:`Search events and tasks`,html:s(`search`),on:{click:()=>g.open()}}),re=e(`button`,{class:`avatar`,type:`button`,"aria-label":`Account and settings`,"aria-haspopup":`dialog`,text:_(i),on:{click:e=>ce(e)}});Dr(re,i);let ie=e(`button`,{class:`icon-btn menu-toggle`,type:`button`,"aria-label":`Toggle menu`,"aria-expanded":`false`,html:s(`menu`),on:{click:N}}),W=e(`div`,{class:`app`},[e(`header`,{class:`header`},[ie,e(`div`,{class:`header__brand`},[e(`span`,{class:`brand-mark`},[e(`img`,{src:`/icon-192.png`,alt:``,width:`30`,height:`30`})]),e(`span`,{class:`brand-name`,text:`Calendar`})]),e(`div`,{class:`header__nav`},[e(`button`,{class:`btn hide-xs`,type:`button`,text:`Today`,on:{click:O}}),e(`div`,{class:`nav-arrows`},[e(`button`,{class:`icon-btn`,type:`button`,"aria-label":`Previous`,html:s(`chevron-left`),on:{click:()=>D(-1)}}),e(`button`,{class:`icon-btn`,type:`button`,"aria-label":`Next`,html:s(`chevron-right`),on:{click:()=>D(1)}})]),P]),e(`div`,{class:`header__spacer`}),e(`div`,{class:`header__tools`},[H,z,re])]),I,F,V]);n(t),t.removeAttribute(`aria-busy`),t.append(W);let G=null,K=null,ae=!1;function q(){ae=!1,Eo();let t=r.getSettings();Ks(t.theme);let i=new Date,a={store:r,settings:t,cursor:p.cursor,miniCursor:p.miniCursor,now:i,actions:b,booking:l,mail:f},o=A();n(P),P.append(document.createTextNode(o.main)),o.muted&&P.append(e(`span`,{class:`muted`,text:` `+o.muted})),z.querySelectorAll(`button`).forEach(e=>e.setAttribute(`aria-pressed`,String(e.dataset.view===p.view))),V.querySelectorAll(`button`).forEach(e=>{let t=e.dataset.view===p.view;e.classList.toggle(`is-active`,t),e.setAttribute(`aria-pressed`,String(t))});let s=document.activeElement,c=s&&(I.contains(s)||F.contains(s))?s.getAttribute(`data-focus-key`):null,u=fo(a);I.firstChild?I.firstChild.replaceWith(u):I.append(u);let d=`.timegrid__scroll, .year, .agenda`,m=F.querySelector(d),h=m?.scrollTop,g=p.cursor.getTime(),_=p.view===G&&h!=null&&(g===K||!m.classList.contains(`agenda`)),v=se(p.view,a);if(n(F),F.append(v.node),v.afterMount?.(),_){let e=F.querySelector(d);e&&(e.scrollTop=h)}G=p.view,K=g,c&&oe(c)}function oe(e){for(let t of W.querySelectorAll(`[data-focus-key]`))if(t.dataset.focusKey===e){t.focus&&t.focus({preventScroll:!0});return}}function se(e,t){return e===`year`?Ro(t):e===`month`?Yo(t):e===`week`?As(t):e===`4day`?js(t):e===`day`?Ms(t):Ps(t)}let J=null;function Y(){if(!J)return;let e=J.box&&J.box.contains(document.activeElement);J.cleanup(),J=null,e&&re.focus&&re.focus()}function ce(e){if(e.stopPropagation(),J)return Y();le()}function le({focus:t}={}){J&&Y();let n=r.getSettings(),a=e(`div`,{class:`segmented`,style:{width:`100%`},role:`group`,"aria-label":`Theme`});[[`system`,`monitor`,`Auto`],[`light`,`sun`,`Light`],[`dark`,`moon`,`Dark`]].forEach(([t,i,o])=>{a.append(e(`button`,{type:`button`,style:{flex:`1`,whiteSpace:`nowrap`},"aria-pressed":String(n.theme===t),html:s(i,{size:`sm`})+`<span>${o}</span>`,on:{click:()=>{Ks(t),r.saveSettings({theme:t}),Y()}}}))});let o=e(`div`,{class:`popover`,role:`dialog`,"aria-label":`Account and settings`,tabindex:`-1`,style:{minWidth:`284px`}},[e(`div`,{class:`popover__header`},[e(`span`,{class:`popover__name`,text:i&&i.username||`Signed in`}),i&&i.email?e(`span`,{class:`popover__meta`,text:i.email}):null]),e(`div`,{style:{padding:`4px 8px 8px`}},[e(`span`,{class:`field__label`,style:{display:`block`,marginBottom:`6px`},text:`Appearance`}),a]),fe(`Start week on Monday`,n.weekStartsOn===1,e=>{r.saveSettings({weekStartsOn:+!!e})}),fe(`24-hour time`,!n.hour12,e=>{r.saveSettings({hour12:!e})}),e(`div`,{style:{padding:`4px 8px 8px`}},[e(`span`,{class:`field__label`,style:{display:`block`,marginBottom:`6px`},text:`Secondary time zone`}),X(n.secondaryTz)]),e(`div`,{style:{padding:`4px 8px 8px`}},[e(`span`,{class:`field__label`,style:{display:`block`,marginBottom:`6px`},text:`Public holidays`}),ue(n.holidayCountry)]),fe(`Clock changes (daylight saving)`,n.clockChanges!==!1,e=>{r.saveSettings({clockChanges:e})},{name:`clockChanges`}),e(`div`,{class:`ctx-menu__sep`}),f&&f.mailbox.available()?e(`button`,{class:`menu-item`,type:`button`,html:s(`mail`,{size:`sm`})+`<span>Mailbox invitations…${Us(f)}</span>`,on:{click:()=>{Y(),b.openMailInvites()}}}):null,e(`button`,{class:`menu-item`,type:`button`,html:s(`swap-vertical`,{size:`sm`})+`<span>Import &amp; export</span>`,on:{click:()=>{Y(),sa({store:r})}}}),e(`div`,{class:`ctx-menu__sep`}),e(`button`,{class:`menu-item`,type:`button`,html:s(`logout`,{size:`sm`})+`<span>Sign out</span>`,on:{click:me}})]);document.body.append(o);let c=re.getBoundingClientRect();o.style.top=`${c.bottom+8}px`,o.style.right=`${window.innerWidth-c.right}px`,((t===`holidays`?o.querySelector(`select[aria-label="Public holidays"]`):t===`clock-changes`?o.querySelector(`input[data-setting="clockChanges"]`):null)||o).focus();let l=e=>{!o.contains(e.target)&&!re.contains(e.target)&&Y()},u=e=>e.key===`Escape`&&Y();setTimeout(()=>{document.addEventListener(`pointerdown`,l,!0),document.addEventListener(`keydown`,u,!0)},0),J={box:o,cleanup(){document.removeEventListener(`pointerdown`,l,!0),document.removeEventListener(`keydown`,u,!0),o.remove()}}}function X(t){let n=e(`select`,{class:`select`,style:{width:`100%`},"aria-label":`Secondary time zone`});return n.append(e(`option`,{value:``,text:`None`})),n.append(e(`option`,{value:`UTC`,text:`UTC`,selected:t===`UTC`})),Me(t).forEach(({label:r,zones:i})=>{n.append(e(`optgroup`,{label:r},i.map(n=>e(`option`,{value:n.id,text:`${n.city} (${Oe(n.offset)})`,selected:n.id===t}))))}),n.addEventListener(`change`,()=>{r.saveSettings({secondaryTz:n.value})}),n}function ue(t){let n=qt(),i=e(`select`,{class:`select`,style:{width:`100%`},"aria-label":`Public holidays`});return i.append(e(`option`,{value:`auto`,text:n?`Automatic (${Pt(n)})`:`Automatic (none detected)`,selected:t===`auto`||t==null}),e(`option`,{value:``,text:`None`,selected:t===``})),Mt.forEach(n=>{i.append(e(`option`,{value:n.id,text:n.name,selected:n.id===t}))}),i.addEventListener(`change`,()=>{r.saveSettings({holidayCountry:i.value})}),i}function fe(t,n,r,{name:i=``}={}){let a=e(`input`,{type:`checkbox`,role:`switch`,checked:n,dataset:i?{setting:i}:{},on:{change:e=>r(e.target.checked)}});return e(`label`,{class:`menu-item`,style:{cursor:`pointer`,justifyContent:`space-between`}},[e(`span`,{text:t}),e(`span`,{class:`switch`},[a,e(`span`,{class:`switch__track`}),e(`span`,{class:`switch__thumb`})])])}async function me(){Y(),jr(),xr(),o&&(o.invalidate(),o.dispose());try{await m()}finally{window.location.reload()}}function _e(){return h.isOpen()||Do()||!!J||!!document.querySelector(`.dialog-scrim`)}function ve(e){if(Ae())return;if((e.metaKey||e.ctrlKey)&&(e.key===`k`||e.key===`K`)){e.preventDefault(),_e()||g.open();return}if(g.isOpen()||_e())return;if(e.key===`Escape`&&p.sidebarOpen){j(),ie.focus();return}let t=(e.target.tagName||``).toLowerCase();if(!(t===`input`||t===`textarea`||t===`select`||e.metaKey||e.ctrlKey||e.altKey))switch(e.key.length===1?e.key.toLowerCase():e.key){case`/`:e.preventDefault(),g.open();break;case`t`:O();break;case`y`:k(`year`);break;case`m`:k(`month`);break;case`w`:k(`week`);break;case`x`:k(`4day`);break;case`d`:k(`day`);break;case`a`:k(`agenda`);break;case`n`:e.preventDefault(),h.openNew({start:ye()});break;case`ArrowLeft`:D(-1);break;case`ArrowRight`:D(1);break;default:return}}function ye(){let e=B(p.cursor);return e.setHours(9,0,0,0),e.getTime()}let be=()=>{document.body.classList.contains(`is-dragging`)||Do()?ae=!0:q()},xe=r.subscribe(be),Se=l?l.onUpdate(be):()=>{},Ce=f?f.intake.onChange(be):()=>{},we=f?f.mailbox.onChange(be):()=>{},Te=()=>{ae&&q()},Ee=Po(Te),De=To(Te),ke=Je({store:r});ke.start(),document.addEventListener(`keydown`,ve);let Ae=()=>document.body.classList.contains(`is-dragging`),je=da(F,{store:r,canImport:()=>!_e()&&!g.isOpen()&&!Ae()}),Ne=null,Pe=()=>{Ae()||(Y(),!window.matchMedia(`(max-width: 720px)`).matches&&p.sidebarOpen&&j(),Ne&&cancelAnimationFrame(Ne),Ne=requestAnimationFrame(q))};window.addEventListener(`resize`,Pe);let Fe=setInterval(()=>{if(_e()||g.isOpen()||Ae())return;let e=document.activeElement;e&&(F.contains(e)||I.contains(e))&&!e.getAttribute(`data-focus-key`)||q()},6e4);return q(),{render:q,showDate(e,t=`week`){p.cursor=B(e),p.miniCursor=U(e),p.view=Hs(t),q()},notifyMailDetected(e){let t=Number(e)||0;t<=0||u(`${t} invitation${t===1?``:`s`} detected`,{action:{label:`Show`,onClick:()=>b.showMailInvites()}})},destroy(){je(),xe(),Se(),Ce(),we(),Ee(),De(),ke.stop(),clearInterval(Fe),Ne&&cancelAnimationFrame(Ne),document.removeEventListener(`keydown`,ve),window.removeEventListener(`resize`,Pe),Y(),Eo(),g.close()}}}function Hs(e){return Bs.some(t=>t.key===e)?e:`week`}function Us(e){let t=e.intake.getPending().length;return t?` (${t})`:``}function Ws(e){return{year:`grid`,month:`calendar`,week:`calendar-blank`,"4day":`columns`,day:`clock`,agenda:`align-left`}[e]||`align-left`}var Gs={light:`#ffffff`,dark:`#0e0f13`};function Ks(e){let t=document.documentElement;e===`light`||e===`dark`?t.dataset.theme=e:delete t.dataset.theme;for(let t of document.querySelectorAll(`meta[name="theme-color"][media]`)){let n=(t.getAttribute(`media`)||``).includes(`dark`)?`dark`:`light`;t.setAttribute(`content`,Gs[e]||Gs[n])}}var qs=`/**\r
 * RSVP + booking endpoint — a Puter serverless worker deployed into the\r
 * calendar user's own account (see src/js/rsvp-links.js for the deploy/sync\r
 * side, and src/js/booking.js for the booking side).\r
 *\r
 * Guests hold capability URLs: /rsvp/<token>, one unguessable 160-bit token per\r
 * guest per event. Only a SHA-256 hash of each token is stored, so a leak of\r
 * this worker's KV reveals no usable links; the raw token exists only in the\r
 * link itself (and in the host's private link cache in the calendar app).\r
 *\r
 * This worker serves NO HTML — it is a JSON API plus redirects (Puter\r
 * guidance: workers as API-like endpoints). All human-facing UI lives on the\r
 * calendar app's own static hosting at PAGE_URL (public/rsvp.html), which\r
 * calls this API from the guest's browser.\r
 *\r
 *   JSON API (the only data surface):\r
 *     GET  /api/rsvp/<token>        -> invitation details + current answer\r
 *                                      (+ this guest's own pending suggestions)\r
 *     POST /api/rsvp/<token>        -> { status, comment? } records an answer\r
 *     PUT  /api/rsvp/<token>        -> same as POST (idempotent set)\r
 *     POST /api/rsvp/<token>/guests -> { email, name? } suggests adding a\r
 *       guest. Suggestions are proposals, not invitations: the organizer\r
 *       reviews them in the calendar app and only their approval puts anyone\r
 *       on the guest list (which is also what mails the actual invitation).\r
 *   Errors are JSON with machine-readable codes (not_found, event_ended,\r
 *   invalid_status, invalid_email, already_invited, suggestion_limit) and\r
 *   matching HTTP statuses (404 / 410 / 400 / 409 / 429).\r
 *\r
 *   Human links (both 303-redirect to PAGE_URL#w=<worker>&t=<token>):\r
 *     GET /rsvp/<token>                       — just redirects; the page\r
 *       fetches the invitation over the API and renders the buttons.\r
 *     GET /rsvp/<token>/accept|decline|maybe  — self-contained one-click:\r
 *       records the answer FIRST, then redirects (with &s=1 so the page shows\r
 *       "Response saved"). Because a GET that mutates is exactly what email\r
 *       scanners and chat unfurlers (Slack, SafeLinks, iMessage previews…)\r
 *       trip over, requests that look like prefetchers — bot user-agents,\r
 *       missing user-agent, or an explicit prefetch/preview Purpose header —\r
 *       are redirected WITHOUT recording. Same tradeoff and mitigation\r
 *       Google Calendar's emailed one-click RSVP links use.\r
 *\r
 * The calendar app manages this worker over /admin/* routes, authenticated\r
 * with \`Authorization: Bearer <secret>\`. Only SHA-256(secret) is baked into\r
 * this source (below), so the deployed file itself contains no credential.\r
 *\r
 * KV layout (this worker's own namespace):\r
 *   rsvpw:tok:<sha256(token)>       -> { eventId, email }\r
 *   rsvpw:evt:<eventId>             -> { snapshot, guests: { [email]:\r
 *                                        { name, tokenHash } }, updatedAt }\r
 *   rsvpw:resp:<eventId>:<email>    -> { status, comment, respondedAt }\r
 *   rsvpw:sug:<eventId>:<email>     -> { email, name, by, at } — a pending\r
 *                                      guest suggestion, keyed by the PROPOSED\r
 *                                      address (re-suggesting is idempotent)\r
 *\r
 * Responses live in per-guest keys ON PURPOSE: a guest's POST writes only\r
 * their own key, so it can never race an /admin/sync (which rewrites the\r
 * membership record) or another guest's answer — no shared read-modify-write.\r
 * Suggestions get the same treatment for the same reason; a suggestion is\r
 * settled the moment its address shows up in membership (the organizer\r
 * approved, or invited them independently) — every read filters settled\r
 * entries out, and their keys are deleted on the next /admin/sync (the one\r
 * path that grows membership) or by /admin/suggestions/dismiss.\r
 *\r
 * This worker ALSO serves the calendar's Calendly-style booking pages — the\r
 * second half of this file. Same account, same admin secret, same deploy\r
 * pipeline; see the "Booking" banner comment below for its routes and KV.\r
 */\r
\r
/* Placeholders replaced at deploy time by rsvp-links.js. */\r
const ADMIN_SECRET_HASH = '__RSVP_ADMIN_SECRET_HASH__';\r
const WORKER_VERSION = '__RSVP_WORKER_VERSION__';\r
const PAGE_URL = '__RSVP_PAGE_URL__'; // the app-hosted RSVP page (public/rsvp.html)\r
// A booking page id is the last segment of the link its host hands out, so it\r
// is held to what reads and travels well: 4-32 of [a-z0-9], hyphens inside.\r
// Kept in step with PAGE_ID_RE in src/js/booking.js and public/book.html.\r
const PAGE_ID_RE = /^[a-z0-9][a-z0-9-]{2,30}[a-z0-9]$/;\r
\r
const TOK_PREFIX = 'rsvpw:tok:';\r
const EVT_PREFIX = 'rsvpw:evt:';\r
const RESP_PREFIX = 'rsvpw:resp:';\r
const SUG_PREFIX = 'rsvpw:sug:';\r
const RESPONSE_STATUSES = ['accepted', 'declined', 'tentative'];\r
const MAX_COMMENT = 500;\r
// Pending guest suggestions per event. Guests are semi-trusted (they hold a\r
// real capability link) but this still bounds what one prankster can queue up\r
// for the organizer to wade through.\r
const MAX_SUGGESTIONS = 10;\r
\r
/* ---- Small utilities --------------------------------------------------- */\r
\r
/** The puter.js build the platform baked into this deploy (its preamble's\r
 *  first line). Null under the test harness, which has no preamble. */\r
function workerRuntime() {\r
  return typeof __PUTER_PREAMBLE_VERSION__ === 'string' ? __PUTER_PREAMBLE_VERSION__ : null;\r
}\r
\r
function kvOf(ctx) {\r
  const owner = (ctx && ctx.me) || (typeof me !== 'undefined' ? me : null);\r
  return owner.puter.kv;\r
}\r
\r
function respKey(eventId, email) {\r
  return \`\${RESP_PREFIX}\${eventId}:\${email}\`;\r
}\r
\r
function sugKey(eventId, email) {\r
  return \`\${SUG_PREFIX}\${eventId}:\${email}\`;\r
}\r
\r
/** puter.kv values may come back as parsed objects or JSON strings. */\r
function coerce(value) {\r
  if (value == null) return null;\r
  if (typeof value === 'string') {\r
    try {\r
      return JSON.parse(value);\r
    } catch {\r
      return null;\r
    }\r
  }\r
  return value;\r
}\r
\r
async function sha256Hex(text) {\r
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(String(text)));\r
  let out = '';\r
  for (const b of new Uint8Array(buf)) out += b.toString(16).padStart(2, '0');\r
  return out;\r
}\r
\r
/** 20 crypto-random bytes as 40 hex chars (160 bits — unguessable). */\r
function newToken() {\r
  const bytes = new Uint8Array(20);\r
  crypto.getRandomValues(bytes);\r
  let out = '';\r
  for (const b of bytes) out += b.toString(16).padStart(2, '0');\r
  return out;\r
}\r
\r
/**\r
 * The value if it is exactly a Puter Meetings room link, else ''. The RSVP\r
 * page and the booking emails render this as a clickable "Join" link, and\r
 * meeting URLs reach this worker from outside (the app pushes whatever an\r
 * imported ICS carried) — held to the exact room-link shape so a foreign URL\r
 * can never be served or mailed under the calendar's name. Both live code\r
 * forms: 3-4-3 (classic) and 4-4-4 (open — what mintMeetingUrl makes).\r
 * (meetings.js and email-worker.js keep their own copies of this test: the\r
 * workers deploy as single files and cannot import it.)\r
 */\r
function meetingLink(value) {\r
  if (typeof value !== 'string' || value.length > 100) return '';\r
  return /^https:\\/\\/meetings\\.puter\\.com\\/#\\/m\\/(?:[a-z]{3}-[a-z]{4}-[a-z]{3}|[a-z]{4}-[a-z]{4}-[a-z]{4})$/.test(value)\r
    ? value\r
    : '';\r
}\r
\r
/**\r
 * Mint an open Puter Meetings room link — the same stateless recipe the app's\r
 * meetings.js follows (see its header): 12 crypto-random lowercase letters,\r
 * grouped abcd-efgh-ijkl, wrapped in the Meetings URL. Nothing exists anywhere\r
 * until someone opens the link and starts the meeting, so minting here is\r
 * synchronous and free, and a cancelled booking's link simply never was.\r
 * Rejection sampling: 256 % 26 !== 0, so a bare modulo would skew the letters.\r
 */\r
function mintMeetingUrl() {\r
  const letters = 'abcdefghijklmnopqrstuvwxyz';\r
  const limit = 256 - (256 % letters.length);\r
  const out = [];\r
  while (out.length < 12) {\r
    const bytes = crypto.getRandomValues(new Uint8Array(12 - out.length));\r
    for (const byte of bytes) {\r
      if (byte < limit) out.push(letters[byte % letters.length]);\r
    }\r
  }\r
  const code = \`\${out.slice(0, 4).join('')}-\${out.slice(4, 8).join('')}-\${out.slice(8, 12).join('')}\`;\r
  return \`https://meetings.puter.com/#/m/\${code}\`;\r
}\r
\r
/**\r
 * Every key under a prefix. puter.kv.list silently truncates large result\r
 * sets (observed ~1k entries), so when the flat result is big enough to be\r
 * suspect, fan out one sub-list per hex char and merge — every event id from\r
 * the app starts with a lowercase hex char.\r
 */\r
async function listAllKeys(kv, prefix) {\r
  const flat = (await kv.list(\`\${prefix}*\`)) || [];\r
  if (flat.length < 400) return flat;\r
  const merged = new Set(flat);\r
  for (const c of '0123456789abcdef') {\r
    for (const key of (await kv.list(\`\${prefix}\${c}*\`)) || []) merged.add(key);\r
  }\r
  return [...merged];\r
}\r
\r
// The cut point of a truncated list scales with the size of the values, not\r
// only their number (store.js documents the live observation): a few hundred\r
// booking records carrying 2,000-character notes weigh what a couple of\r
// thousand bare keys do. So a value-carrying list is suspect by bytes as\r
// well as by count — the same guard the app applies to its own calendar.\r
const LIST_SUSPECT_BYTES = 512 * 1024;\r
\r
function looksTruncated(entries) {\r
  if (entries.length >= 400) return true;\r
  let bytes = 0;\r
  for (const e of entries) {\r
    const v = e && e.value;\r
    bytes += new TextEncoder().encode(typeof v === 'string' ? v : v ? JSON.stringify(v) : '').length;\r
    if (bytes >= LIST_SUSPECT_BYTES) return true;\r
  }\r
  return false;\r
}\r
\r
/** listAllKeys for value-carrying lists: same truncation fan-out, same\r
 *  hex-first-char assumption, deduped by key — suspect by payload size too,\r
 *  since a missing booking record is a slot offered twice. */\r
async function listAllEntries(kv, prefix) {\r
  const flat = (await kv.list(\`\${prefix}*\`, true)) || [];\r
  if (!looksTruncated(flat)) return flat;\r
  const merged = new Map();\r
  for (const entry of flat) {\r
    if (entry && typeof entry.key === 'string') merged.set(entry.key, entry);\r
  }\r
  for (const c of '0123456789abcdef') {\r
    for (const entry of (await kv.list(\`\${prefix}\${c}*\`, true)) || []) {\r
      if (entry && typeof entry.key === 'string') merged.set(entry.key, entry);\r
    }\r
  }\r
  return [...merged.values()];\r
}\r
\r
function lowerEmail(v) {\r
  const s = typeof v === 'string' ? v.trim().toLowerCase() : '';\r
  return /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(s) && s.length <= 254 ? s : '';\r
}\r
\r
function str(v, cap) {\r
  return typeof v === 'string' ? v.slice(0, cap) : '';\r
}\r
\r
function json(body, status = 200) {\r
  return new Response(JSON.stringify(body), {\r
    status,\r
    headers: {\r
      'content-type': 'application/json',\r
      // Invitation payloads carry personal data and are keyed by capability\r
      // URLs — nothing here may be cached by proxies or the browser.\r
      'cache-control': 'no-store',\r
      'x-content-type-options': 'nosniff',\r
    },\r
  });\r
}\r
\r
/** Send the visitor to the app-hosted RSVP page. The worker origin + token\r
 *  travel in the URL FRAGMENT, which browsers never send over the wire — the\r
 *  capability token stays out of server logs and referrer headers. */\r
function redirectToPage(ctx, token, saved) {\r
  // Belt and braces: if a botched deploy left PAGE_URL non-absolute (e.g. the\r
  // raw placeholder), a relative Location would resolve back onto this very\r
  // route and redirect-loop forever. Fall back to the production page.\r
  const page = /^https?:\\/\\//i.test(PAGE_URL) ? PAGE_URL : 'https://calendar.puter.com/rsvp.html';\r
  const params = new URLSearchParams({ w: new URL(ctx.request.url).origin, t: token });\r
  if (saved) params.set('s', '1');\r
  return new Response(null, {\r
    status: 303,\r
    headers: {\r
      location: \`\${page}#\${params.toString()}\`,\r
      'cache-control': 'no-store',\r
      'referrer-policy': 'no-referrer',\r
      'x-robots-tag': 'noindex, nofollow',\r
    },\r
  });\r
}\r
\r
/* ---- Admin auth --------------------------------------------------------- */\r
\r
async function isAdmin(request) {\r
  const header = request.headers.get('authorization') || '';\r
  const match = header.match(/^Bearer\\s+(\\S+)$/i);\r
  if (!match) return false;\r
  // Hash-then-compare: the plaintext secret is never in this file, and the\r
  // comparison leaks nothing useful about it.\r
  return (await sha256Hex(match[1])) === ADMIN_SECRET_HASH;\r
}\r
\r
/* ---- Event snapshot (what the guest page may show) ---------------------- */\r
\r
// Beyond ±8.64e15 (±100M days) \`new Date(ms)\` is invalid and date formatting\r
// throws — clamp stored instants so a poisoned snapshot can't make every\r
// guest's later read of it blow up instead of rendering.\r
const MAX_INSTANT_MS = 8.64e15;\r
\r
function instant(value, fallback) {\r
  return Number.isFinite(value) && Math.abs(value) <= MAX_INSTANT_MS ? Math.round(value) : fallback;\r
}\r
\r
function sanitizeSnapshot(event) {\r
  return {\r
    title: str(event.title, 500),\r
    start: instant(event.start, 0),\r
    end: instant(event.end, 0),\r
    allDay: Boolean(event.allDay),\r
    location: str(event.location, 500),\r
    description: str(event.description, 2000),\r
    meetingUrl: meetingLink(event.meetingUrl),\r
    organizerName: str(event.organizerName, 200),\r
    organizerEmail: lowerEmail(event.organizerEmail),\r
    recurLabel: str(event.recurLabel, 200),\r
    // Links answer until the event (or the series' last occurrence) ends;\r
    // null = no known end (an endless series) — the link never expires.\r
    expiresAt: instant(event.expiresAt, null),\r
    tz: str(event.tz, 100),\r
    hour12: event.hour12 !== false,\r
  };\r
}\r
\r
function hasEnded(snapshot) {\r
  return snapshot.expiresAt != null && Date.now() > snapshot.expiresAt;\r
}\r
\r
function cleanResponse(value) {\r
  const r = coerce(value);\r
  if (!r || !RESPONSE_STATUSES.includes(r.status)) return null;\r
  return {\r
    status: r.status,\r
    respondedAt: Number.isFinite(r.respondedAt) ? r.respondedAt : 0,\r
    comment: typeof r.comment === 'string' ? r.comment : '',\r
  };\r
}\r
\r
/** Membership + per-guest response keys, merged into the shape the app pulls\r
 *  ({ email: { status, respondedAt, comment, name } } — never tokenHash). */\r
async function responsesFor(kv, eventId, membership) {\r
  const entries = (await kv.list(\`\${respKey(eventId, '')}*\`, true)) || [];\r
  const byEmail = {};\r
  for (const entry of entries) {\r
    if (!entry || typeof entry.key !== 'string') continue;\r
    const r = cleanResponse(entry.value);\r
    if (r) byEmail[entry.key.slice(respKey(eventId, '').length)] = r;\r
  }\r
  return mergeResponses(byEmail, membership);\r
}\r
\r
/** Every guest's answer for every event, in ONE list call — what the\r
 *  per-minute /admin/responses pull uses instead of a list per event. Event\r
 *  ids carry no ':' (validated at sync), so the first one after the prefix\r
 *  ends the id; the rest is the guest's address, ':' and all. */\r
async function allResponses(kv) {\r
  const byEvent = new Map();\r
  for (const entry of await listAllEntries(kv, RESP_PREFIX)) {\r
    if (!entry || typeof entry.key !== 'string') continue;\r
    const rest = entry.key.slice(RESP_PREFIX.length);\r
    const cut = rest.indexOf(':');\r
    if (cut < 1) continue;\r
    const r = cleanResponse(entry.value);\r
    if (!r) continue;\r
    const id = rest.slice(0, cut);\r
    if (!byEvent.has(id)) byEvent.set(id, {});\r
    byEvent.get(id)[rest.slice(cut + 1)] = r;\r
  }\r
  return byEvent;\r
}\r
\r
/** One event's membership laid over its guests' answers (\`byEmail\`, as the\r
 *  two readers above collect it): every current guest, answered or not. */\r
function mergeResponses(byEmail, membership) {\r
  byEmail = byEmail || {};\r
  const out = {};\r
  for (const [email, g] of Object.entries(membership || {})) {\r
    const r = byEmail[email];\r
    out[email] = {\r
      status: r ? r.status : 'needs-action',\r
      respondedAt: r ? r.respondedAt : 0,\r
      comment: r ? r.comment : '',\r
      name: (g && g.name) || '',\r
    };\r
  }\r
  return out;\r
}\r
\r
function cleanSuggestion(value) {\r
  const s = coerce(value);\r
  const email = s ? lowerEmail(s.email) : '';\r
  if (!email) return null;\r
  return {\r
    email,\r
    name: str(s.name, 200),\r
    by: lowerEmail(s.by),\r
    at: Number.isFinite(s.at) ? s.at : 0,\r
  };\r
}\r
\r
/** Suggestions whose address reached \`membership\` are settled — approved, or\r
 *  the organizer invited them independently. Every read filters them out;\r
 *  only /admin/sync (the one path that grows membership) deletes their keys. */\r
function pendingOf(list, membership) {\r
  return (Array.isArray(list) ? list : [])\r
    .filter((s) => !(membership && membership[s.email]))\r
    .sort((a, b) => a.at - b.at);\r
}\r
\r
/**\r
 * One event's pending suggestions, oldest first. With \`settle\`, the entries\r
 * membership has since absorbed are also deleted — passed by /admin/sync so\r
 * approval needs no route of its own; plain reads must stay reads (a guest\r
 * opening their page shouldn't pay for the organizer's cleanup).\r
 */\r
async function suggestionsFor(kv, eventId, membership, settle = false) {\r
  const entries = (await kv.list(\`\${sugKey(eventId, '')}*\`, true)) || [];\r
  const all = [];\r
  const settled = [];\r
  for (const entry of entries) {\r
    if (!entry || typeof entry.key !== 'string') continue;\r
    const s = cleanSuggestion(entry.value);\r
    if (!s) continue;\r
    if (settle && membership && membership[s.email]) settled.push(entry.key);\r
    all.push(s);\r
  }\r
  if (settled.length) await Promise.all(settled.map((key) => kv.del(key)));\r
  return pendingOf(all, membership);\r
}\r
\r
/** Every pending suggestion, grouped by event, in ONE list call — what the\r
 *  per-minute /admin/responses pull uses instead of a list per event (almost\r
 *  always empty). Event ids carry no ':' (validated at sync), so the first\r
 *  one after the prefix ends the id. */\r
async function allSuggestions(kv) {\r
  const entries = await listAllEntries(kv, SUG_PREFIX);\r
  const byEvent = new Map();\r
  for (const entry of entries) {\r
    if (!entry || typeof entry.key !== 'string') continue;\r
    const rest = entry.key.slice(SUG_PREFIX.length);\r
    const cut = rest.indexOf(':');\r
    if (cut < 1) continue;\r
    const s = cleanSuggestion(entry.value);\r
    if (!s) continue;\r
    const id = rest.slice(0, cut);\r
    if (!byEvent.has(id)) byEvent.set(id, []);\r
    byEvent.get(id).push(s);\r
  }\r
  return byEvent;\r
}\r
\r
/* ---- Admin routes -------------------------------------------------------- */\r
\r
router.get('/admin/ping', async (ctx) => {\r
  if (!(await isAdmin(ctx.request))) return json({ error: 'unauthorized' }, 401);\r
  return json({ ok: true, version: WORKER_VERSION, runtime: workerRuntime() });\r
});\r
\r
/**\r
 * Upsert an event: refresh its snapshot, issue tokens for new (or reissue-\r
 * listed) guests, and revoke tokens of guests no longer on the list. Raw\r
 * tokens are returned ONLY here, only for the guests that just got one —\r
 * they are not recoverable later (only their hash is stored).\r
 */\r
router.post('/admin/sync', async (ctx) => {\r
  if (!(await isAdmin(ctx.request))) return json({ error: 'unauthorized' }, 401);\r
  let body = null;\r
  try {\r
    body = await ctx.request.json();\r
  } catch {\r
    /* handled below */\r
  }\r
  const event = body && body.event;\r
  // Ids become KV-key segments and glob-pattern prefixes — restrict them to\r
  // the app's uid() alphabet so a stray '*', ':' or whitespace can never\r
  // corrupt key parsing or list patterns. Guests are capped to the app's own\r
  // MAX_GUESTS so a runaway payload can't mint thousands of tokens.\r
  if (!event || typeof event.id !== 'string' || !/^[A-Za-z0-9._-]{1,200}$/.test(event.id)) {\r
    return json({ error: 'event with id required' }, 400);\r
  }\r
  const incoming = (Array.isArray(body.guests) ? body.guests : []).slice(0, 200);\r
  const reissue = new Set(\r
    (Array.isArray(body.reissue) ? body.reissue : []).map(lowerEmail).filter(Boolean),\r
  );\r
\r
  const kv = kvOf(ctx);\r
  const record = coerce(await kv.get(EVT_PREFIX + event.id)) || { guests: {} };\r
  const prev = record.guests || {};\r
  const next = {};\r
  const links = {};\r
  const writes = [];\r
  const stale = [];\r
\r
  for (const g of incoming) {\r
    const email = lowerEmail(g && g.email);\r
    if (!email || next[email]) continue;\r
    const known = prev[email];\r
    if (known && known.tokenHash && !reissue.has(email)) {\r
      next[email] = { name: str(g && g.name, 200) || known.name || '', tokenHash: known.tokenHash };\r
      continue;\r
    }\r
    if (known && known.tokenHash) stale.push(TOK_PREFIX + known.tokenHash);\r
    const token = newToken();\r
    const tokenHash = await sha256Hex(token);\r
    next[email] = { name: str(g && g.name, 200), tokenHash };\r
    writes.push({ key: TOK_PREFIX + tokenHash, value: { eventId: event.id, email } });\r
    links[email] = token;\r
  }\r
\r
  // Guests removed from the event: their capability — and their stored\r
  // answer — die with their entry.\r
  for (const [email, g] of Object.entries(prev)) {\r
    if (next[email]) continue;\r
    if (g && g.tokenHash) stale.push(TOK_PREFIX + g.tokenHash);\r
    stale.push(respKey(event.id, email));\r
  }\r
\r
  writes.push({\r
    key: EVT_PREFIX + event.id,\r
    value: { snapshot: sanitizeSnapshot(event), guests: next, updatedAt: Date.now() },\r
  });\r
  await kv.set(writes);\r
  for (const key of stale) await kv.del(key);\r
\r
  return json({\r
    ok: true,\r
    links,\r
    guests: await responsesFor(kv, event.id, next),\r
    suggestions: await suggestionsFor(kv, event.id, next, true), // settles approved ones\r
  });\r
});\r
\r
/** Current responses (and pending guest suggestions) for every synced event\r
 *  — the app merges these back. */\r
router.get('/admin/responses', async (ctx) => {\r
  if (!(await isAdmin(ctx.request))) return json({ error: 'unauthorized' }, 401);\r
  const kv = kvOf(ctx);\r
  // Three value-carrying lists for the whole account, not a read and a list\r
  // per event: this route is polled every minute for as long as the calendar\r
  // is open, and an event stays synced (and so listed here) for as long as it\r
  // has guests — a host's list only ever grows.\r
  const [records, responses, suggestions] = await Promise.all([\r
    listAllEntries(kv, EVT_PREFIX),\r
    allResponses(kv),\r
    allSuggestions(kv),\r
  ]);\r
  const events = {};\r
  for (const entry of records) {\r
    if (!entry || typeof entry.key !== 'string') continue;\r
    const id = entry.key.slice(EVT_PREFIX.length);\r
    const record = coerce(entry.value);\r
    if (!record || typeof record !== 'object') continue;\r
    events[id] = {\r
      guests: mergeResponses(responses.get(id), record.guests),\r
      suggestions: pendingOf(suggestions.get(id), record.guests),\r
      updatedAt: record.updatedAt || 0,\r
    };\r
  }\r
  return json({ ok: true, events });\r
});\r
\r
/** The organizer turned a suggestion down: drop it. (Approvals need no route\r
 *  — adding the guest settles the suggestion on the next read, see\r
 *  suggestionsFor.) Idempotent: dismissing what's already gone is ok:true. */\r
router.post('/admin/suggestions/dismiss', async (ctx) => {\r
  if (!(await isAdmin(ctx.request))) return json({ error: 'unauthorized' }, 401);\r
  let body = null;\r
  try {\r
    body = await ctx.request.json();\r
  } catch {\r
    /* handled below */\r
  }\r
  const eventId = body && typeof body.eventId === 'string' ? body.eventId : '';\r
  const email = lowerEmail(body && body.email);\r
  // The del below is exact-key, so a metacharacter is harmless here — the id\r
  // alphabet is enforced anyway so every admin route speaks the same rule.\r
  if (!eventId || !/^[A-Za-z0-9._-]{1,200}$/.test(eventId) || !email) {\r
    return json({ error: 'eventId and email required' }, 400);\r
  }\r
  await kvOf(ctx).del(sugKey(eventId, email));\r
  return json({ ok: true });\r
});\r
\r
/** Drop an event and kill every guest link (and answer) that pointed at it. */\r
router.post('/admin/revoke', async (ctx) => {\r
  if (!(await isAdmin(ctx.request))) return json({ error: 'unauthorized' }, 401);\r
  let body = null;\r
  try {\r
    body = await ctx.request.json();\r
  } catch {\r
    /* handled below */\r
  }\r
  const eventId = body && typeof body.eventId === 'string' ? body.eventId : '';\r
  // Same alphabet /admin/sync enforces, for the same reason: the id becomes a\r
  // glob-pattern prefix below, where a stray '*' or ':' would sweep up every\r
  // event's answers instead of this one's. Nothing outside this alphabet can\r
  // ever have been synced, so there is nothing to revoke for such an id.\r
  if (!eventId || !/^[A-Za-z0-9._-]{1,200}$/.test(eventId)) {\r
    return json({ error: 'eventId required' }, 400);\r
  }\r
  const kv = kvOf(ctx);\r
  const record = coerce(await kv.get(EVT_PREFIX + eventId));\r
  if (record && record.guests) {\r
    for (const g of Object.values(record.guests)) {\r
      if (g && g.tokenHash) await kv.del(TOK_PREFIX + g.tokenHash);\r
    }\r
  }\r
  for (const key of (await kv.list(\`\${respKey(eventId, '')}*\`)) || []) await kv.del(key);\r
  for (const key of (await kv.list(\`\${sugKey(eventId, '')}*\`)) || []) await kv.del(key);\r
  await kv.del(EVT_PREFIX + eventId);\r
  return json({ ok: true });\r
});\r
\r
/* ---- Guest-facing routes -------------------------------------------------- */\r
\r
/** Resolve a token to its event, guest entry, and stored answer — or null. */\r
async function lookupToken(ctx, token) {\r
  if (typeof token !== 'string' || !/^[0-9a-f]{40}$/.test(token)) return null;\r
  const kv = kvOf(ctx);\r
  const tokenHash = await sha256Hex(token);\r
  const ref = coerce(await kv.get(TOK_PREFIX + tokenHash));\r
  if (!ref || typeof ref.eventId !== 'string' || typeof ref.email !== 'string') return null;\r
  const record = coerce(await kv.get(EVT_PREFIX + ref.eventId));\r
  const guest = record && record.guests ? record.guests[ref.email] : null;\r
  // The guest entry must still exist AND still point at this token — a token\r
  // whose guest was since reissued or removed is dead even if its tok key\r
  // somehow lingered.\r
  if (!guest || guest.tokenHash !== tokenHash) return null;\r
  const response = cleanResponse(await kv.get(respKey(ref.eventId, ref.email)));\r
  return {\r
    eventId: ref.eventId,\r
    email: ref.email,\r
    record,\r
    answer: response || { status: 'needs-action', respondedAt: 0, comment: '' },\r
  };\r
}\r
\r
/** Parse a guest-facing form POST (urlencoded from the page — which keeps the\r
 *  cross-origin request CORS-simple — JSON also accepted). */\r
async function readResponseBody(request) {\r
  const type = (request.headers.get('content-type') || '').toLowerCase();\r
  try {\r
    if (type.includes('application/json')) {\r
      const body = await request.json();\r
      return body && typeof body === 'object' ? body : {};\r
    }\r
    return Object.fromEntries(new URLSearchParams(await request.text()));\r
  } catch {\r
    return {};\r
  }\r
}\r
\r
/** Validate + store an answer in the guest's own key — this write can never\r
 *  clobber an /admin/sync or another guest's response. Null = bad status. */\r
async function recordAnswer(ctx, found, body) {\r
  const status = String((body && body.status) || '');\r
  if (!RESPONSE_STATUSES.includes(status)) return null;\r
  const comment =\r
    body && typeof body.comment === 'string' ? body.comment.trim().slice(0, MAX_COMMENT) : '';\r
  const answer = { status, comment, respondedAt: Date.now() };\r
  await kvOf(ctx).set(respKey(found.eventId, found.email), answer);\r
  found.answer = answer;\r
  return answer;\r
}\r
\r
/* ---- Guest-facing JSON API ------------------------------------------------ */\r
\r
/** The invitation as a machine-readable object (what GET /api/rsvp returns). */\r
function inviteView(found) {\r
  const s = found.record.snapshot || {};\r
  const membership = (found.record.guests || {})[found.email] || {};\r
  return {\r
    ok: true,\r
    event: {\r
      title: s.title || '',\r
      start: s.start,\r
      end: s.end,\r
      allDay: Boolean(s.allDay),\r
      when: fmtWhen(s),\r
      timezone: s.tz || '',\r
      location: s.location || '',\r
      meetingUrl: s.meetingUrl || '',\r
      description: s.description || '',\r
      organizer: s.organizerName || s.organizerEmail || '',\r
      recurrence: s.recurLabel || '',\r
      ended: hasEnded(s),\r
      expiresAt: s.expiresAt,\r
    },\r
    guest: { email: found.email, name: membership.name || '' },\r
    response: found.answer,\r
    allowedStatuses: RESPONSE_STATUSES,\r
  };\r
}\r
\r
router.get('/api/rsvp/:token', async (ctx) => {\r
  const found = await lookupToken(ctx, ctx.params.token);\r
  if (!found) return json({ error: 'not_found' }, 404);\r
  const view = inviteView(found);\r
  // Only THIS guest's pending suggestions ride along (so the page can show\r
  // "waiting for the organizer") — whom other guests proposed is between\r
  // them and the organizer.\r
  const pending = await suggestionsFor(kvOf(ctx), found.eventId, found.record.guests || {});\r
  view.suggestions = pending\r
    .filter((s) => s.by === found.email)\r
    .map(({ email, name, at }) => ({ email, name, at }));\r
  return json(view);\r
});\r
\r
async function apiRespond(ctx) {\r
  const found = await lookupToken(ctx, ctx.params.token);\r
  if (!found) return json({ error: 'not_found' }, 404);\r
  if (hasEnded(found.record.snapshot || {})) return json({ error: 'event_ended' }, 410);\r
  const answer = await recordAnswer(ctx, found, await readResponseBody(ctx.request));\r
  if (!answer) return json({ error: 'invalid_status', allowedStatuses: RESPONSE_STATUSES }, 400);\r
  return json({ ok: true, response: answer });\r
}\r
\r
// POST and PUT are equivalent: both SET the guest's current answer.\r
router.post('/api/rsvp/:token', apiRespond);\r
router.put('/api/rsvp/:token', apiRespond);\r
\r
/**\r
 * A guest suggests adding someone. This never touches the guest list and\r
 * never mints a token — it queues a proposal the ORGANIZER approves in the\r
 * calendar app (approval is what invites the person, from the organizer, so\r
 * the host's calendar is never bypassed the way a mail-client forward is).\r
 * Keyed by the proposed address: re-suggesting the same person (by anyone)\r
 * updates the one entry instead of stacking duplicates, and keeps the\r
 * original \`at\` so the app's "new suggestion" notice doesn't re-fire.\r
 */\r
router.post('/api/rsvp/:token/guests', async (ctx) => {\r
  const found = await lookupToken(ctx, ctx.params.token);\r
  if (!found) return json({ error: 'not_found' }, 404);\r
  if (hasEnded(found.record.snapshot || {})) return json({ error: 'event_ended' }, 410);\r
  const body = await readResponseBody(ctx.request);\r
  const email = lowerEmail(body.email);\r
  if (!email) return json({ error: 'invalid_email' }, 400);\r
  const membership = found.record.guests || {};\r
  const organizer = lowerEmail((found.record.snapshot || {}).organizerEmail);\r
  if (membership[email] || email === organizer) return json({ error: 'already_invited' }, 409);\r
  const kv = kvOf(ctx);\r
  const pending = await suggestionsFor(kv, found.eventId, membership);\r
  const existing = pending.find((s) => s.email === email);\r
  if (!existing && pending.length >= MAX_SUGGESTIONS) {\r
    return json({ error: 'suggestion_limit' }, 429);\r
  }\r
  const suggestion = {\r
    email,\r
    name: str(body.name, 200).trim(),\r
    by: found.email,\r
    at: existing ? existing.at : Date.now(),\r
  };\r
  await kv.set(sugKey(found.eventId, email), suggestion);\r
  return json({\r
    ok: true,\r
    suggestion: { email: suggestion.email, name: suggestion.name, at: suggestion.at },\r
  });\r
});\r
\r
/* ---- One-click links (GET records — with prefetcher protection) ----------- */\r
\r
/** Friendly action words (plus the canonical statuses as aliases). */\r
const ACTION_STATUS = {\r
  accept: 'accepted',\r
  yes: 'accepted',\r
  accepted: 'accepted',\r
  decline: 'declined',\r
  no: 'declined',\r
  declined: 'declined',\r
  maybe: 'tentative',\r
  tentative: 'tentative',\r
};\r
\r
/**\r
 * True when the request smells like an email scanner, link unfurler, or\r
 * browser prefetch rather than a human click. Those must never record an\r
 * answer — they'd RSVP on the guest's behalf the moment the link is pasted\r
 * into Slack or scanned by Outlook. Erring toward "prefetch" is safe: the\r
 * guest still lands on the page and can confirm with one more click.\r
 */\r
function looksLikePrefetch(request) {\r
  const ua = request.headers.get('user-agent') || '';\r
  if (!ua) return true; // real browsers always send one\r
  if (\r
    /bot|crawl|spider|preview|prefetch|scan|probe|monitor|validator|expand|unfurl|embed|proxy|slack|discord|telegram|whatsapp|facebookexternalhit|skype|teams|linkedin|bingpreview|curl|wget|python-requests|go-http-client|okhttp|headless/i.test(\r
      ua,\r
    )\r
  ) {\r
    return true;\r
  }\r
  const purpose =\r
    request.headers.get('sec-purpose') ||\r
    request.headers.get('purpose') ||\r
    request.headers.get('x-purpose') ||\r
    request.headers.get('x-moz') ||\r
    '';\r
  return /pre(fetch|view|render)/i.test(purpose);\r
}\r
\r
router.get('/rsvp/:token/:action', async (ctx) => {\r
  // Own keys only: the action comes off the URL, and \`constructor\` or\r
  // \`__proto__\` would otherwise read a truthy "status" off Object.prototype,\r
  // record nothing, and still redirect with the "Response saved" flag.\r
  const action = String(ctx.params.action || '').toLowerCase();\r
  const status = Object.prototype.hasOwnProperty.call(ACTION_STATUS, action) ? ACTION_STATUS[action] : null;\r
  // Prefetchers/unfurlers never record — they land on the page like any\r
  // visitor; a dead token or ended event also just redirects, and the page\r
  // reports the state it gets from the API.\r
  if (status && !looksLikePrefetch(ctx.request)) {\r
    const found = await lookupToken(ctx, ctx.params.token);\r
    if (found && !hasEnded(found.record.snapshot || {})) {\r
      // A one-click answer keeps any note the guest left earlier.\r
      await recordAnswer(ctx, found, { status, comment: found.answer.comment });\r
      return redirectToPage(ctx, ctx.params.token, true);\r
    }\r
  }\r
  return redirectToPage(ctx, ctx.params.token, false);\r
});\r
\r
// The plain link in an email/chat: hand the human straight to the app page,\r
// which renders the invitation from GET /api/rsvp/<token>.\r
router.get('/rsvp/:token', async (ctx) => redirectToPage(ctx, ctx.params.token, false));\r
\r
/* ---- Formatting (the API's human-readable \`when\` string) ---------------- */\r
\r
function fmtWhen(s) {\r
  const base = {};\r
  if (s.tz) {\r
    try {\r
      new Intl.DateTimeFormat('en-US', { timeZone: s.tz });\r
      base.timeZone = s.tz;\r
    } catch {\r
      /* unknown zone — fall back to UTC-less default */\r
    }\r
  }\r
  const start = new Date(s.start);\r
  const end = new Date(s.end);\r
  const dayFmt = new Intl.DateTimeFormat('en-US', {\r
    ...base,\r
    weekday: 'short',\r
    month: 'short',\r
    day: 'numeric',\r
    year: 'numeric',\r
  });\r
  if (s.allDay) {\r
    const a = dayFmt.format(start);\r
    const b = dayFmt.format(end);\r
    return a === b ? a : \`\${a} – \${b}\`;\r
  }\r
  const timeFmt = new Intl.DateTimeFormat('en-US', {\r
    ...base,\r
    hour: 'numeric',\r
    minute: '2-digit',\r
    hour12: s.hour12 !== false,\r
  });\r
  const zoneFmt = new Intl.DateTimeFormat('en-US', {\r
    ...base,\r
    hour: 'numeric',\r
    timeZoneName: 'short',\r
  });\r
  const zonePart = (zoneFmt.formatToParts(end).find((p) => p.type === 'timeZoneName') || {}).value;\r
  const zone = zonePart ? \` (\${zonePart})\` : '';\r
  if (dayFmt.format(start) === dayFmt.format(end)) {\r
    return \`\${dayFmt.format(start)} · \${timeFmt.format(start)} – \${timeFmt.format(end)}\${zone}\`;\r
  }\r
  return \`\${dayFmt.format(start)}, \${timeFmt.format(start)} – \${dayFmt.format(end)}, \${timeFmt.format(end)}\${zone}\`;\r
}\r
\r
/* ==========================================================================\r
 * Booking — Calendly-style "book time with me" pages.\r
 *\r
 * The calendar app (src/js/booking.js) pushes this worker the host's booking\r
 * pages plus a merged list of BUSY intervals derived from their calendar; the\r
 * worker is then the single authority guests talk to. It computes bookable\r
 * slots (availability windows in the host's time zone, minus busy times,\r
 * existing bookings, buffers, minimum notice, and the rolling horizon),\r
 * records bookings, and mints each booking an unguessable manage token so the\r
 * guest can cancel — the same capability-URL pattern as RSVP links, and like\r
 * them only the token's hash is stored.\r
 *\r
 * Slot truth lives HERE, not in the page: POST /api/book re-runs the exact\r
 * slot computation the guest page listed from, so the two can never disagree,\r
 * and a stale page simply gets slot_taken. Two guests racing for one slot are\r
 * resolved with a claim key (write-then-read-back on bookw:slot:<start>) plus\r
 * a final overlap re-check across all bookings — puter.kv has no transactions,\r
 * so this narrows the race to KV round-trip time rather than eliminating it in\r
 * theory; in practice both guests are staring at the same slot grid, and the\r
 * exact-start claim catches that case outright.\r
 *\r
 * Confirmation emails are sent from the worker itself (me.puter.email — the\r
 * host's own account sends and pays, exactly like their invitations) and are\r
 * strictly best-effort: a booking whose email fails is still a booking, and\r
 * the API says which mails actually went out so the page never promises one\r
 * that didn't. Guests are anonymous, so sends are capped per day, and the only\r
 * links a mail carries point back at this worker's own origin.\r
 *\r
 *   JSON API (guest-facing):\r
 *     GET  /api/book/<page>            -> page details + first available slot\r
 *     GET  /api/book/<page>/slots      -> bookable slot starts (?from=&to=)\r
 *     POST /api/book/<page>            -> { start, name, email, notes, tz }\r
 *     GET  /api/booking/<token>        -> one booking (the guest's manage view)\r
 *     POST /api/booking/<token>/cancel -> guest cancels (until the start time)\r
 *   Human links (303-redirect to the app-hosted book.html, params in the\r
 *   URL FRAGMENT so tokens stay out of logs):\r
 *     GET /book/<page>       GET /booking/<token>\r
 *   Admin (Bearer <secret>, like the RSVP admin routes):\r
 *     POST /admin/booking/sync    push pages + busy + organizer\r
 *     GET  /admin/booking/list    every booking (the app merges these back)\r
 *     POST /admin/booking/cancel  host cancels; optionally emails the guest\r
 *\r
 * KV layout (booking half):\r
 *   bookw:cfg                 -> { pages, busy, organizerName, organizerEmail,\r
 *                                  organizerPicture, hour12, updatedAt }\r
 *   bookw:bkg:<id>            -> the booking record (incl. tokenHash)\r
 *   bookw:tok:<sha256(token)> -> { bookingId }\r
 *   bookw:slot:<startMs>      -> { bookingId }   (the claim key)\r
 *   bookw:mail:<YYYY-MM-DD>   -> emails sent today (cap)\r
 *   bookw:new:<pageId>:<YYYY-MM-DD> -> bookings created today (per-page cap)\r
 * ========================================================================== */\r
\r
const BOOK_CFG_KEY = 'bookw:cfg';\r
const BOOK_PREFIX = 'bookw:bkg:';\r
const BOOK_TOK_PREFIX = 'bookw:tok:';\r
const BOOK_SLOT_PREFIX = 'bookw:slot:';\r
const BOOK_MAIL_PREFIX = 'bookw:mail:';\r
const BOOK_NEW_PREFIX = 'bookw:new:';\r
\r
const BOOK_MAX_PAGES = 25;\r
const BOOK_MAX_BUSY = 20000;\r
const BOOK_MAX_ADVANCE_DAYS = 90;\r
const BOOK_SLOT_QUERY_MAX_DAYS = 45;\r
const BOOK_MAX_PER_PAGE_PER_DAY = 50; // anti-abuse: new bookings per page per day\r
const BOOK_MAX_MAILS_PER_DAY = 200;\r
// The host's profile picture rides in the config every public request reads, so\r
// what it may cost is capped here. The app publishes a copy well under this\r
// (see fetchSharePicture in src/js/profile.js); the headroom is for a client\r
// whose idea of "small" is a little different, not for an unbounded one.\r
const BOOK_MAX_PICTURE_CHARS = 96 * 1024;\r
const BOOK_COUNTER_TTL = 3 * 24 * 60 * 60; // seconds\r
const MIN_MS = 60_000;\r
const BOOK_DAY_MS = 86_400_000;\r
\r
/* ---- Booking: small helpers --------------------------------------------- */\r
\r
function bookOwner(ctx) {\r
  return (ctx && ctx.me) || (typeof me !== 'undefined' ? me : null);\r
}\r
\r
/**\r
 * The platform's transactional send under whichever name this runtime's SDK\r
 * carries: \`sendTransactional\` now, \`send\` before the rename (still served\r
 * until every caller has moved). Null when the runtime grants no mailer.\r
 */\r
function bookMailer(email) {\r
  if (!email) return null;\r
  if (typeof email.sendTransactional === 'function') {\r
    return (message) => email.sendTransactional(message);\r
  }\r
  if (typeof email.send === 'function') return (message) => email.send(message);\r
  return null;\r
}\r
\r
/**\r
 * The host's mail transport, in every arrangement the platform has been seen\r
 * to accept (the same duality email-worker.js negotiates — observed live,\r
 * 2026-08: a bare owner send is REJECTED; the payer must be named via\r
 * requesterToken). Booking guests are anonymous, so unlike the invites worker\r
 * there is no caller to bill: the host's own token fills BOTH halves — their\r
 * account authorizes the send and pays for it, which is exactly this\r
 * feature's deal. Null means the runtime grants no mailer at all; bookings\r
 * still work — they just aren't announced by email.\r
 */\r
function bookSendForms(ctx) {\r
  const owner = bookOwner(ctx);\r
  const send = bookMailer(owner && owner.puter && owner.puter.email);\r
  if (!send) return null;\r
  const token = owner.puter.authToken;\r
  const forms = [(message) => send(message)];\r
  if (token) {\r
    forms.unshift((message) => send({ ...message, requesterToken: token }));\r
    forms.push((message) => send({ ...message, emailAccessToken: token }));\r
  }\r
  return forms;\r
}\r
\r
/** Which send form this runtime last accepted — remembered so later mails\r
 *  skip straight to it instead of re-probing. */\r
let bookSendFormIndex = 0;\r
\r
/* Same gating as email-worker.js: only an error that reads as a rejected\r
 * REQUEST (bad parameter, bad token) may fall through to another form.\r
 * Anything the transport said about the message itself — or anything\r
 * unrecognizable — is final, because the message may already have been\r
 * accepted and a retry would double-send it. */\r
const BOOK_DELIVERY_ERROR = /deliver|recipient|suppress|unsubscrib|mailbox|smtp|bounce|spam|quota|rate|limit/i;\r
const BOOK_REQUEST_ERROR = /token|auth|unauthor|forbidden|permission|denied|unknown|unrecognized|unsupported|invalid|missing|required|not a function|undefined/i;\r
\r
function bookValidTz(tz) {\r
  if (!tz || typeof tz !== 'string' || tz.length > 100) return false;\r
  try {\r
    new Intl.DateTimeFormat('en-US', { timeZone: tz });\r
    return true;\r
  } catch {\r
    return false;\r
  }\r
}\r
\r
/**\r
 * One wall-clock formatter per zone, reused. Constructing an\r
 * Intl.DateTimeFormat costs roughly eight times what formatting with it does,\r
 * and the slot engine converts every candidate start individually: a month\r
 * query on a page with 15-minute increments is ~1000 conversions, on a public\r
 * endpoint anyone holding the link can hit. Zones only ever come from the\r
 * host's own (validated) pages, so the map is bounded by their page count —\r
 * the cap is belt and braces for a long-lived worker instance.\r
 */\r
const bookZoneFmts = new Map();\r
\r
function bookZoneFmt(tz) {\r
  const known = bookZoneFmts.get(tz);\r
  if (known) return known;\r
  const fmt = new Intl.DateTimeFormat('en-US', {\r
    timeZone: tz,\r
    hour12: false,\r
    year: 'numeric',\r
    month: '2-digit',\r
    day: '2-digit',\r
    hour: '2-digit',\r
    minute: '2-digit',\r
  });\r
  if (bookZoneFmts.size >= 64) bookZoneFmts.clear();\r
  bookZoneFmts.set(tz, fmt);\r
  return fmt;\r
}\r
\r
/** Calendar-date fields (and wall clock) of an instant in \`tz\`. Some engines\r
 *  render midnight as hour "24" of the PRIOR day — normalize that back to\r
 *  00:00 of the correct date, or a midnight booking would count against the\r
 *  wrong day's caps. */\r
function bookZonedDate(ms, tz) {\r
  const parts = bookZoneFmt(tz).formatToParts(new Date(ms));\r
  const get = (t) => Number((parts.find((p) => p.type === t) || {}).value);\r
  let y = get('year');\r
  let m = get('month');\r
  let d = get('day');\r
  let hour = get('hour');\r
  const minute = get('minute');\r
  if (hour === 24) {\r
    const rolled = new Date(Date.UTC(y, m - 1, d + 1));\r
    y = rolled.getUTCFullYear();\r
    m = rolled.getUTCMonth() + 1;\r
    d = rolled.getUTCDate();\r
    hour = 0;\r
  }\r
  return { y, m, d, hour, minute };\r
}\r
\r
/** How far \`tz\` runs ahead of UTC at the instant \`ms\`. */\r
function bookZoneOffset(ms, tz) {\r
  const p = bookZonedDate(ms, tz);\r
  return Date.UTC(p.y, p.m - 1, p.d, p.hour, p.minute) - ms;\r
}\r
\r
/**\r
 * UTC instant of a wall-clock (date + minutes-since-midnight) in \`tz\`.\r
 *\r
 * The offset that matters is the one in force AT THE ANSWER, not at the first\r
 * guess — and treating the wall clock as UTC puts that guess a whole offset\r
 * away from the answer, so within |offset| hours of a DST change the two\r
 * disagree and a single pass lands an hour off. That is not a fringe hour: a\r
 * Los Angeles page offering 08:00 on the spring-forward Sunday listed it at\r
 * 09:00 (and so listed 09:00 twice, losing a slot), and a Berlin page's 01:00\r
 * became 00:00, an hour before the host said they were free. So: guess, then\r
 * re-resolve with the offset that guess landed in.\r
 *\r
 * A nonexistent spring-forward wall clock has no instant at all; it resolves\r
 * to the instant just past the gap (the usual "spring forward" convention) —\r
 * in every zone — rather than NaN, which the busy/overlap checks then judge\r
 * on its merits. An ambiguous fall-back wall clock resolves to its first\r
 * (pre-transition) occurrence, again in every zone.\r
 */\r
function bookZonedToUtc(y, m, d, minutes, tz) {\r
  // Hour "24" rolls into the next day via Date.UTC — no clamping (see the\r
  // same reasoning in the app's zonedTimeToUTC).\r
  const guess = Date.UTC(y, m - 1, d, Math.floor(minutes / 60), minutes % 60);\r
  // Try every offset in force around this day (at most two: before and after\r
  // a transition) and keep the candidates that reproduce the wall clock.\r
  // Symmetric by construction — the old two-pass guess resolved a\r
  // nonexistent hour BACKWARD in zones east of UTC (a Berlin page offered\r
  // 01:00 for a window that opened at 02:00) and an ambiguous one to its\r
  // second occurrence there, while doing the opposite west of UTC.\r
  const offsets = new Set([\r
    bookZoneOffset(guess - BOOK_DAY_MS, tz),\r
    bookZoneOffset(guess, tz),\r
    bookZoneOffset(guess + BOOK_DAY_MS, tz),\r
  ]);\r
  const all = [];\r
  const valid = [];\r
  for (const off of offsets) {\r
    const ts = guess - off;\r
    all.push(ts);\r
    if (bookZoneOffset(ts, tz) === off) valid.push(ts);\r
  }\r
  // An ambiguous fall-back wall clock is its first occurrence; a nonexistent\r
  // spring-forward one is the instant just past the gap.\r
  return valid.length ? Math.min(...valid) : Math.max(...all);\r
}\r
\r
function bookInt(v, min, max, dflt) {\r
  const n = Number(v);\r
  if (!Number.isFinite(n)) return dflt;\r
  return Math.min(max, Math.max(min, Math.round(n)));\r
}\r
\r
/** Sorted, merged minute-intervals ({ start, end } within one day). */\r
function bookMergeMinutes(intervals) {\r
  const sorted = [...intervals].sort((a, b) => a.start - b.start);\r
  const out = [];\r
  for (const iv of sorted) {\r
    const last = out[out.length - 1];\r
    if (last && iv.start <= last.end) last.end = Math.max(last.end, iv.end);\r
    else out.push({ start: iv.start, end: iv.end });\r
  }\r
  return out;\r
}\r
\r
/** True when [s, e) intersects any of the sorted, merged [start, end] pairs. */\r
function bookOverlaps(intervals, s, e) {\r
  for (const iv of intervals) {\r
    if (iv[0] >= e) break;\r
    if (iv[1] > s) return true;\r
  }\r
  return false;\r
}\r
\r
/**\r
 * The host's profile picture, as it may be published. Inline image data only,\r
 * base64 only, and small: the page renders this straight into an <img src>, so\r
 * an http(s) URL (a tracker, a dead host), a percent-encoded SVG (markup we\r
 * would be handing a guest's browser), or a picture too big to belong in a\r
 * config are all answered the same way — no picture. Applied on the way IN and\r
 * again on the way OUT, like meetingLink.\r
 */\r
function bookPicture(value) {\r
  if (typeof value !== 'string') return '';\r
  const v = value.trim();\r
  if (!v || v.length > BOOK_MAX_PICTURE_CHARS) return '';\r
  // Case-insensitive on the scheme and type only (a media type is), which is\r
  // what the app's own check is — the two must agree, or a picture the host can\r
  // see in the editor would silently never reach their page.\r
  return /^data:image\\/(?:png|jpeg|gif|webp|avif);base64,[A-Za-z0-9+/]+={0,2}$/i.test(v) ? v : '';\r
}\r
\r
/**\r
 * True when an existing confirmed booking makes [slotStart, slotEnd)\r
 * unbookable. The gap between the two meetings must fit the adjacent buffer\r
 * of EACH — the candidate slot's own, and the booked meeting's (from its\r
 * page's config; a meeting whose page is gone keeps no buffer). max, not sum:\r
 * one shared gap serves as both meetings' breathing room. Padding only the\r
 * candidate would let a new booking start the minute an existing one ends,\r
 * ignoring that booking's after-buffer.\r
 */\r
function bookingBlocks(cfg, page, other, slotStart, slotEnd) {\r
  const otherPage = (cfg.pages || {})[other.pageId];\r
  const gapBefore =\r
    Math.max(page.bufferBeforeMin, otherPage ? otherPage.bufferAfterMin : 0) * MIN_MS;\r
  const gapAfter =\r
    Math.max(page.bufferAfterMin, otherPage ? otherPage.bufferBeforeMin : 0) * MIN_MS;\r
  return other.start < slotEnd + gapAfter && other.end > slotStart - gapBefore;\r
}\r
\r
/* ---- Booking: config sanitizing ------------------------------------------ */\r
\r
function sanitizeBookingHours(input) {\r
  const out = {};\r
  if (!input || typeof input !== 'object') return out;\r
  for (let day = 0; day < 7; day++) {\r
    const raw = input[day] != null ? input[day] : input[String(day)];\r
    if (!Array.isArray(raw)) continue;\r
    const intervals = [];\r
    for (const iv of raw.slice(0, 6)) {\r
      if (!iv || typeof iv !== 'object') continue;\r
      const start = bookInt(iv.start, 0, 1439, NaN);\r
      const end = bookInt(iv.end, 1, 1440, NaN);\r
      if (!Number.isFinite(start) || !Number.isFinite(end) || end <= start) continue;\r
      intervals.push({ start, end });\r
    }\r
    if (intervals.length) out[day] = bookMergeMinutes(intervals);\r
  }\r
  return out;\r
}\r
\r
function sanitizeBookingPage(input) {\r
  if (!input || typeof input !== 'object') return null;\r
  const id = typeof input.id === 'string' && PAGE_ID_RE.test(input.id) ? input.id : '';\r
  if (!id) return null;\r
  const durationMin = bookInt(input.durationMin, 5, 720, 30);\r
  return {\r
    id,\r
    title: str(input.title, 200).trim() || 'Meeting',\r
    description: str(input.description, 2000),\r
    location: str(input.location, 500).trim(),\r
    durationMin,\r
    // 0 / absent means "same as the duration" (see the app's normalizePage) —\r
    // resolved via the falsy check, never clamped up to the 5-minute floor.\r
    incrementMin: bookInt(input.incrementMin || durationMin, 5, 720, durationMin),\r
    bufferBeforeMin: bookInt(input.bufferBeforeMin, 0, 240, 0),\r
    bufferAfterMin: bookInt(input.bufferAfterMin, 0, 240, 0),\r
    minNoticeMin: bookInt(input.minNoticeMin, 0, 40320, 120),\r
    maxAdvanceDays: bookInt(input.maxAdvanceDays, 1, BOOK_MAX_ADVANCE_DAYS, 60),\r
    maxPerDay: bookInt(input.maxPerDay, 0, 50, 0),\r
    tz: bookValidTz(input.tz) ? input.tz : 'UTC',\r
    hours: sanitizeBookingHours(input.hours),\r
    // Mint a Puter Meetings link for each booking. Defaults ON (absent =\r
    // true, matching the app's normalizePage) so pages pushed by an app that\r
    // predates the field get video links the moment this worker does.\r
    meet: input.meet !== false,\r
    // Show the host's profile picture to guests. Defaults OFF (absent =\r
    // false, matching the app's normalizePage): publishing a face is the\r
    // host's call, so a page that has never said yes doesn't.\r
    avatar: input.avatar === true,\r
    enabled: input.enabled !== false,\r
  };\r
}\r
\r
function sanitizeBookingSync(body) {\r
  const src = body && typeof body === 'object' ? body : {};\r
  const pages = {};\r
  for (const raw of (Array.isArray(src.pages) ? src.pages : []).slice(0, BOOK_MAX_PAGES)) {\r
    const page = sanitizeBookingPage(raw);\r
    if (page) pages[page.id] = page;\r
  }\r
  const busy = [];\r
  for (const iv of (Array.isArray(src.busy) ? src.busy : []).slice(0, BOOK_MAX_BUSY)) {\r
    const s = Array.isArray(iv) ? Number(iv[0]) : NaN;\r
    const e = Array.isArray(iv) ? Number(iv[1]) : NaN;\r
    if (Number.isFinite(s) && Number.isFinite(e) && e > s) busy.push([Math.round(s), Math.round(e)]);\r
  }\r
  busy.sort((a, b) => a[0] - b[0]);\r
  const merged = [];\r
  for (const iv of busy) {\r
    const last = merged[merged.length - 1];\r
    if (last && iv[0] <= last[1]) last[1] = Math.max(last[1], iv[1]);\r
    else merged.push(iv);\r
  }\r
  return {\r
    pages,\r
    busy: merged,\r
    organizerName: str(src.organizerName, 200).trim(),\r
    organizerEmail: lowerEmail(src.organizerEmail),\r
    organizerPicture: bookPicture(src.organizerPicture),\r
    hour12: src.hour12 !== false,\r
    updatedAt: Date.now(),\r
  };\r
}\r
\r
async function loadBookingCfg(kv) {\r
  const cfg = coerce(await kv.get(BOOK_CFG_KEY));\r
  if (!cfg || typeof cfg !== 'object') {\r
    return { pages: {}, busy: [], organizerName: '', organizerEmail: '', organizerPicture: '', hour12: true };\r
  }\r
  return {\r
    pages: cfg.pages && typeof cfg.pages === 'object' ? cfg.pages : {},\r
    busy: Array.isArray(cfg.busy) ? cfg.busy : [],\r
    organizerName: typeof cfg.organizerName === 'string' ? cfg.organizerName : '',\r
    organizerEmail: typeof cfg.organizerEmail === 'string' ? cfg.organizerEmail : '',\r
    organizerPicture: typeof cfg.organizerPicture === 'string' ? cfg.organizerPicture : '',\r
    hour12: cfg.hour12 !== false,\r
  };\r
}\r
\r
/** Every booking record, from ONE value-carrying list. Every public booking\r
 *  route runs this (a page's slots, a POST twice over), and records are kept\r
 *  for months after their meeting, so a read per record would make each\r
 *  anonymous request cost as many round-trips as the page has ever had\r
 *  bookings. */\r
async function loadBookings(kv) {\r
  const out = [];\r
  for (const entry of await listAllEntries(kv, BOOK_PREFIX)) {\r
    const b = coerce(entry && entry.value);\r
    if (b && typeof b === 'object' && typeof b.id === 'string' && Number.isFinite(b.start)) out.push(b);\r
  }\r
  return out;\r
}\r
\r
/* ---- Booking: the slot engine --------------------------------------------- */\r
\r
/**\r
 * Bookable slot starts (UTC ms, sorted) for \`page\` intersecting [fromMs, toMs).\r
 * Every rule lives here — availability windows walked in the page's own time\r
 * zone (each slot converted individually, so DST days are right), minimum\r
 * notice, the rolling horizon, buffers against the host's busy intervals and\r
 * against confirmed bookings, and the per-day booking cap. POST /api/book\r
 * re-runs this same function to validate the requested start, so the listed\r
 * grid and the accepted set can never drift apart.\r
 */\r
function bookableSlots(cfg, page, bookings, fromMs, toMs, now, { ignoreConflicts = false } = {}) {\r
  const tz = bookValidTz(page.tz) ? page.tz : 'UTC';\r
  const durMs = page.durationMin * MIN_MS;\r
  const stepMin = Math.max(5, page.incrementMin || page.durationMin);\r
  const notBefore = now + page.minNoticeMin * MIN_MS;\r
  const horizonEnd = now + page.maxAdvanceDays * BOOK_DAY_MS;\r
  const busy = ignoreConflicts ? [] : cfg.busy || [];\r
  const active = ignoreConflicts\r
    ? []\r
    : bookings.filter((b) => b && b.status === 'confirmed' && Number.isFinite(b.start) && Number.isFinite(b.end));\r
  const out = new Set();\r
\r
  const first = bookZonedDate(Math.max(fromMs, 0), tz);\r
  const cursor = new Date(Date.UTC(first.y, first.m - 1, first.d));\r
  for (let i = 0; i <= BOOK_MAX_ADVANCE_DAYS + BOOK_SLOT_QUERY_MAX_DAYS + 2; i++) {\r
    const y = cursor.getUTCFullYear();\r
    const m = cursor.getUTCMonth() + 1;\r
    const d = cursor.getUTCDate();\r
    const dayStart = bookZonedToUtc(y, m, d, 0, tz);\r
    if (dayStart >= toMs || dayStart > horizonEnd) break;\r
    // The weekday of the calendar DATE (zone-independent once we hold y/m/d).\r
    const weekday = new Date(Date.UTC(y, m - 1, d)).getUTCDay();\r
    const windows = (page.hours && (page.hours[weekday] || page.hours[String(weekday)])) || [];\r
\r
    let dayFull = false;\r
    if (!ignoreConflicts && page.maxPerDay > 0 && windows.length) {\r
      let count = 0;\r
      for (const b of active) {\r
        if (b.pageId !== page.id) continue;\r
        const bd = bookZonedDate(b.start, tz);\r
        if (bd.y === y && bd.m === m && bd.d === d) count++;\r
      }\r
      dayFull = count >= page.maxPerDay;\r
    }\r
\r
    if (!dayFull) {\r
      for (const w of windows) {\r
        for (let t = w.start; t + page.durationMin <= w.end; t += stepMin) {\r
          const slotStart = bookZonedToUtc(y, m, d, t, tz);\r
          if (!Number.isFinite(slotStart)) continue;\r
          const slotEnd = slotStart + durMs;\r
          if (slotStart < notBefore) continue;\r
          if (slotStart > horizonEnd) continue;\r
          if (slotStart < fromMs || slotStart >= toMs) continue;\r
          const padS = slotStart - page.bufferBeforeMin * MIN_MS;\r
          const padE = slotEnd + page.bufferAfterMin * MIN_MS;\r
          if (bookOverlaps(busy, padS, padE)) continue;\r
          let clash = false;\r
          for (const b of active) {\r
            if (bookingBlocks(cfg, page, b, slotStart, slotEnd)) {\r
              clash = true;\r
              break;\r
            }\r
          }\r
          if (clash) continue;\r
          out.add(slotStart);\r
        }\r
      }\r
    }\r
    cursor.setUTCDate(cursor.getUTCDate() + 1);\r
  }\r
  return [...out].sort((a, b) => a - b);\r
}\r
\r
/** The first bookable slot from \`now\`, or null. Scans week by week so a mostly\r
 *  free calendar answers after one small pass instead of a full-horizon walk. */\r
function firstBookableSlot(cfg, page, bookings, now) {\r
  const horizonEnd = now + page.maxAdvanceDays * BOOK_DAY_MS;\r
  for (let from = now; from < horizonEnd; from += 7 * BOOK_DAY_MS) {\r
    const to = Math.min(from + 7 * BOOK_DAY_MS, horizonEnd + BOOK_DAY_MS);\r
    const slots = bookableSlots(cfg, page, bookings, from, to, now);\r
    if (slots.length) return slots[0];\r
  }\r
  return null;\r
}\r
\r
/* ---- Booking: views -------------------------------------------------------- */\r
\r
function publicPageView(cfg, page) {\r
  return {\r
    id: page.id,\r
    title: page.title,\r
    description: page.description,\r
    location: page.location,\r
    durationMin: page.durationMin,\r
    minNoticeMin: page.minNoticeMin,\r
    maxAdvanceDays: page.maxAdvanceDays,\r
    // The host's name only — their email is shared in the confirmation, not on\r
    // the public page.\r
    organizer: cfg.organizerName || '',\r
    // …and their picture, only where the page asked for it. Re-validated here\r
    // because this is what a guest's browser renders.\r
    organizerPicture: page.avatar ? bookPicture(cfg.organizerPicture) : '',\r
    timeZone: page.tz,\r
  };\r
}\r
\r
/** A booking as the guest may see it (their manage view / POST reply). */\r
function guestBookingView(cfg, booking, now = Date.now()) {\r
  return {\r
    id: booking.id,\r
    pageId: booking.pageId,\r
    title: booking.pageTitle || 'Meeting',\r
    start: booking.start,\r
    end: booking.end,\r
    location: booking.location || '',\r
    // Validated on the way OUT too: booking records are worker-authored, but\r
    // this view is what the public page turns into a clickable link.\r
    meetingUrl: meetingLink(booking.meetingUrl),\r
    organizer: cfg.organizerName || '',\r
    name: booking.name || '',\r
    email: booking.email,\r
    notes: booking.notes || '',\r
    status: booking.status,\r
    cancelledBy: booking.status === 'cancelled' ? booking.cancelledBy || '' : '',\r
    canCancel: booking.status === 'confirmed' && booking.start > now,\r
  };\r
}\r
\r
/** A booking as the app pulls it (admin view — everything but the token hash,\r
 *  and the transient \`pending\` mark a reservation carries mid-request). */\r
function adminBookingView(booking) {\r
  const { tokenHash, pending, ...rest } = booking;\r
  return rest;\r
}\r
\r
/**\r
 * True while \`b\` may still be inside the request that reserved it. A\r
 * reservation is written BEFORE its request checks the slot (see POST\r
 * /api/book/:page) and carries \`pending: true\` until that check passes, so a\r
 * concurrent request can tell a booking that exists from one that is still\r
 * deciding whether it does. The mark is trusted only for as long as a request\r
 * can plausibly run; a \`pending\` older than that was left by a request that\r
 * died before clearing it, and the record stands as the booking it says it is\r
 * — exactly as it did before the mark existed.\r
 */\r
const BOOK_SETTLE_MAX_MS = 2 * MIN_MS;\r
function bookingSettling(b, now) {\r
  return Boolean(b && b.pending) && now - (Number(b.createdAt) || 0) < BOOK_SETTLE_MAX_MS;\r
}\r
\r
/* ---- Booking: emails (strictly best-effort) -------------------------------- */\r
\r
function bookEscapeHtml(v) {\r
  return String(v)\r
    .replace(/&/g, '&amp;')\r
    .replace(/</g, '&lt;')\r
    .replace(/>/g, '&gt;')\r
    .replace(/"/g, '&quot;')\r
    .replace(/'/g, '&#39;');\r
}\r
\r
function bookEscapeBlock(v) {\r
  return bookEscapeHtml(v).replace(/\\r?\\n/g, '<br>');\r
}\r
\r
/** Header-safe single line (a stray CR/LF in a subject is header injection). */\r
function bookLine(v, cap) {\r
  return str(v, cap).replace(/[\\r\\n]+/g, ' ').trim();\r
}\r
\r
const BOOK_B64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';\r
\r
function bookBase64Utf8(value) {\r
  const bytes = new TextEncoder().encode(String(value));\r
  let out = '';\r
  for (let i = 0; i < bytes.length; i += 3) {\r
    const a = bytes[i];\r
    const b = bytes[i + 1];\r
    const c = bytes[i + 2];\r
    out += BOOK_B64[a >> 2];\r
    out += BOOK_B64[((a & 3) << 4) | ((b || 0) >> 4)];\r
    out += b === undefined ? '=' : BOOK_B64[((b & 15) << 2) | ((c || 0) >> 6)];\r
    out += c === undefined ? '=' : BOOK_B64[c & 63];\r
  }\r
  return out;\r
}\r
\r
function bookIcsEscape(v) {\r
  // Normalize every line-break form — CRLF, lone LF, and lone CR — to an\r
  // escaped \\n. A bare CR left raw is treated as a line split by lenient\r
  // parsers, orphaning the tail into a line with no ':' that gets dropped\r
  // (silently truncating the value) or re-parsed as an injected property.\r
  return String(v)\r
    .replace(/\\\\/g, '\\\\\\\\')\r
    .replace(/;/g, '\\\\;')\r
    .replace(/,/g, '\\\\,')\r
    .replace(/\\r\\n|\\r|\\n/g, '\\\\n');\r
}\r
\r
/**\r
 * \`;CN="…"\` parameter for a display name, or '' when absent. QUOTED, because a\r
 * bare param value ends at the next ':' or ';' — a guest called\r
 * "Eve:mailto:evil@example.com" typed their own address out of the ATTENDEE\r
 * line and someone else's in. Quotes and control characters are dropped\r
 * instead (an RFC 5545 param value cannot hold a DQUOTE at all, and a newline\r
 * would break the property mid-line). Same routine as the app's ics.js\r
 * cnParam, for the same reasons — the worker deploys as one file and cannot\r
 * import it.\r
 */\r
function bookCnParam(name) {\r
  const n =\r
    typeof name === 'string'\r
      ? name.replace(/["\\u0000-\\u001f\\u007f]/g, ' ').replace(/\\s+/g, ' ').trim()\r
      : '';\r
  return n ? \`;CN="\${n}"\` : '';\r
}\r
\r
function bookIcsDate(ms) {\r
  return new Date(ms).toISOString().replace(/[-:]/g, '').replace(/\\.\\d{3}/, '');\r
}\r
\r
/**\r
 * RFC 5545 line folding: at most 75 octets per line, counted in UTF-8 and\r
 * broken only between whole code points. Slicing by UTF-16 units instead\r
 * splits an astral character's surrogate pair across the fold, and the two\r
 * orphaned halves encode as U+FFFD — an emoji landing on the boundary of a\r
 * page title reached the guest's .ics as a pair of replacement characters.\r
 * (Same routine as the app's ics.js foldLine, for the same reason.)\r
 */\r
function bookIcsFold(line) {\r
  const octets = (cp) => (cp <= 0x7f ? 1 : cp <= 0x7ff ? 2 : cp <= 0xffff ? 3 : 4);\r
  let out = '';\r
  let lineBytes = 0;\r
  for (const ch of line) {\r
    const b = octets(ch.codePointAt(0));\r
    if (lineBytes + b > 75) {\r
      out += '\\r\\n ';\r
      lineBytes = 1; // the leading space of the continuation line\r
    }\r
    out += ch;\r
    lineBytes += b;\r
  }\r
  return out;\r
}\r
\r
/** A minimal, valid .ics for the confirmed booking so the guest can put it on\r
 *  their own calendar. METHOD:REQUEST (with the host as organizer) when we\r
 *  know the host's address — that's what makes mail clients treat it as a\r
 *  real invitation; PUBLISH otherwise. */\r
function bookingIcs(cfg, booking) {\r
  const method = cfg.organizerEmail ? 'REQUEST' : 'PUBLISH';\r
  const lines = [\r
    'BEGIN:VCALENDAR',\r
    'VERSION:2.0',\r
    'PRODID:-//Puter Calendar//Booking//EN',\r
    \`METHOD:\${method}\`,\r
    'BEGIN:VEVENT',\r
    \`UID:\${booking.id}@calendar.puter.com\`,\r
    \`DTSTAMP:\${bookIcsDate(Date.now())}\`,\r
    \`DTSTART:\${bookIcsDate(booking.start)}\`,\r
    \`DTEND:\${bookIcsDate(booking.end)}\`,\r
    \`SUMMARY:\${bookIcsEscape(booking.pageTitle || 'Meeting')}\`,\r
  ];\r
  // The meeting link rides in the four places clients look (same reasoning as\r
  // the app's ics.js): URL (Apple), X-GOOGLE-CONFERENCE (Google Calendar /\r
  // Gmail render a conference row), CONFERENCE (RFC 7986), and a trailing\r
  // "Join:" description line (Outlook.com). Never LOCATION — Gmail draws a\r
  // location as a mappable place, sending guests to Google Maps. The\r
  // properties are URI values, emitted raw: meetingLink() only ever passes an\r
  // exact Meetings room URL, which has no TEXT-special characters anyway.\r
  const joinUrl = meetingLink(booking.meetingUrl);\r
  const description = joinUrl\r
    ? \`\${booking.notes ? \`\${booking.notes}\\n\\n\` : ''}Join: \${joinUrl}\`\r
    : booking.notes;\r
  if (booking.location) lines.push(\`LOCATION:\${bookIcsEscape(booking.location)}\`);\r
  if (description) lines.push(\`DESCRIPTION:\${bookIcsEscape(description)}\`);\r
  if (joinUrl) {\r
    lines.push(\`URL:\${joinUrl}\`);\r
    lines.push(\`X-GOOGLE-CONFERENCE:\${joinUrl}\`);\r
    lines.push(\`CONFERENCE;VALUE=URI;FEATURE=VIDEO:\${joinUrl}\`);\r
  }\r
  if (cfg.organizerEmail) {\r
    lines.push(\`ORGANIZER\${bookCnParam(cfg.organizerName)}:mailto:\${cfg.organizerEmail}\`);\r
    lines.push(\r
      \`ATTENDEE\${bookCnParam(booking.name)};PARTSTAT=ACCEPTED;ROLE=REQ-PARTICIPANT:mailto:\${booking.email}\`,\r
    );\r
  }\r
  lines.push('STATUS:CONFIRMED', 'END:VEVENT', 'END:VCALENDAR');\r
  return lines.map(bookIcsFold).join('\\r\\n') + '\\r\\n';\r
}\r
\r
/** The when-line for booking emails, in whichever zone the reader lives. */\r
function bookWhen(booking, tz, hour12) {\r
  return fmtWhen({\r
    start: booking.start,\r
    end: booking.end,\r
    allDay: false,\r
    tz: bookValidTz(tz) ? tz : '',\r
    hour12: hour12 !== false,\r
  });\r
}\r
\r
async function bookMailBudget(kv) {\r
  const key = \`\${BOOK_MAIL_PREFIX}\${new Date().toISOString().slice(0, 10)}\`;\r
  const used = Number(coerce(await kv.get(key))) || 0;\r
  return { key, remaining: Math.max(0, BOOK_MAX_MAILS_PER_DAY - used) };\r
}\r
\r
async function bookBumpCounter(kv, key, n = 1) {\r
  try {\r
    if (typeof kv.incr === 'function') await kv.incr(key, n);\r
    else await kv.set(key, (Number(coerce(await kv.get(key))) || 0) + n);\r
    if (typeof kv.expire === 'function') await kv.expire(key, BOOK_COUNTER_TTL);\r
  } catch {\r
    /* counters are guard rails, never a reason to fail the booking */\r
  }\r
}\r
\r
/**\r
 * Send one booking email, counted against the daily cap. Returns true only\r
 * when the transport accepted it. Every failure mode — no mailer in this\r
 * runtime, cap reached, transport error — lands on \`false\`, and the caller\r
 * reports that honestly instead of promising mail that never left.\r
 */\r
async function sendBookingMail(ctx, message) {\r
  const forms = bookSendForms(ctx);\r
  if (!forms) return false;\r
  const kv = kvOf(ctx);\r
  let budget;\r
  try {\r
    budget = await bookMailBudget(kv);\r
  } catch {\r
    return false;\r
  }\r
  if (!budget.remaining) return false;\r
  // Try the form that last worked first, then the rest in declared order.\r
  const order = forms.map((_, i) => i);\r
  if (bookSendFormIndex > 0 && bookSendFormIndex < forms.length) {\r
    order.splice(order.indexOf(bookSendFormIndex), 1);\r
    order.unshift(bookSendFormIndex);\r
  }\r
  for (const index of order) {\r
    try {\r
      await forms[index](message);\r
      bookSendFormIndex = index;\r
      await bookBumpCounter(kv, budget.key, 1);\r
      return true;\r
    } catch (err) {\r
      const reason = String((err && err.message) || err || '');\r
      if (BOOK_DELIVERY_ERROR.test(reason) || !BOOK_REQUEST_ERROR.test(reason)) return false;\r
    }\r
  }\r
  return false;\r
}\r
\r
function bookFooterHtml() {\r
  return \`<p style="margin:20px 0 0;font-size:12px;color:#6b7280">Scheduled with Puter Calendar</p>\`;\r
}\r
\r
/** The mark that leads a booking mail: a white check in a green disc beside\r
 *  the heading, so "this went through" reads at a glance — before a word of\r
 *  the body does, and in the preview pane. It is markup, not an image: mail\r
 *  clients block remote images by default and drop <style> blocks, so the\r
 *  disc is an inline-styled table cell around a Unicode check — the one\r
 *  rendering Gmail, Apple Mail and Outlook all show (Outlook ignores the\r
 *  border-radius and draws a green square, which still reads as a check).\r
 *  The glyph is decorative; the heading beside it carries the meaning, so\r
 *  screen readers announce the words and not "check mark". The green is the\r
 *  app's --success token, the same one the booking page's own badge uses. */\r
function bookStatusHtml(heading) {\r
  return (\r
    \`<table role="presentation" cellpadding="0" cellspacing="0" style="border-collapse:collapse;margin:0 0 16px">\` +\r
    \`<tr>\` +\r
    \`<td aria-hidden="true" style="width:40px;height:40px;border-radius:20px;background:#2fa66b;color:#ffffff;\` +\r
    \`font-size:22px;font-weight:700;line-height:40px;text-align:center;vertical-align:middle">&#10003;</td>\` +\r
    \`<td style="padding:0 0 0 12px;vertical-align:middle">\` +\r
    \`<h1 style="margin:0;color:#111827;font-size:20px;line-height:1.3">\${heading}</h1>\` +\r
    \`</td>\` +\r
    \`</tr></table>\`\r
  );\r
}\r
\r
/** Guest confirmation mail (with the .ics and their private manage link). */\r
async function sendGuestConfirmMail(ctx, cfg, booking, token, origin) {\r
  const host = cfg.organizerName || 'the organizer';\r
  const when = bookWhen(booking, booking.tz, true);\r
  const manageUrl = \`\${origin}/booking/\${token}\`;\r
  const joinUrl = meetingLink(booking.meetingUrl);\r
  const subject = bookLine(\`Confirmed: \${booking.pageTitle} with \${host} — \${when}\`, 200);\r
  const text = [\r
    \`Hi \${booking.name || 'there'},\`,\r
    '',\r
    \`\\u2713 You're scheduled. Your booking is confirmed.\`,\r
    '',\r
    booking.pageTitle,\r
    \`When: \${when}\`,\r
    ...(booking.location ? [\`Where: \${booking.location}\`] : []),\r
    ...(joinUrl ? [\`Join: \${joinUrl}\`] : []),\r
    \`With: \${cfg.organizerName || cfg.organizerEmail || 'the organizer'}\`,\r
    ...(booking.notes ? ['', \`Your notes: \${booking.notes}\`] : []),\r
    '',\r
    \`Need to cancel? \${manageUrl}\`,\r
  ].join('\\n');\r
  const row = (label, value) =>\r
    \`<tr><td style="padding:4px 12px 4px 0;color:#6b7280;font-size:14px;vertical-align:top">\${label}</td>\` +\r
    \`<td style="padding:4px 0;color:#111827;font-size:14px">\${value}</td></tr>\`;\r
  const html =\r
    \`<div style="background:#f6f7f9;padding:24px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif">\` +\r
    \`<div style="max-width:560px;margin:0 auto;background:#ffffff;border:1px solid #e5e7eb;border-radius:12px;padding:24px">\` +\r
    bookStatusHtml('You&rsquo;re scheduled') +\r
    \`<p style="margin:0 0 16px;color:#6b7280;font-size:14px">Your booking is confirmed.</p>\` +\r
    \`<h2 style="margin:0 0 12px;color:#111827;font-size:17px;font-weight:600;line-height:1.3">\${bookEscapeHtml(booking.pageTitle)}</h2>\` +\r
    \`<table role="presentation" cellpadding="0" cellspacing="0" style="border-collapse:collapse">\` +\r
    row('When', bookEscapeHtml(when)) +\r
    (booking.location ? row('Where', bookEscapeHtml(booking.location)) : '') +\r
    (joinUrl\r
      ? row('Join', \`<a href="\${bookEscapeHtml(joinUrl)}" style="color:#2563eb">\${bookEscapeHtml(joinUrl)}</a>\`)\r
      : '') +\r
    row('With', bookEscapeHtml(cfg.organizerName || cfg.organizerEmail || 'the organizer')) +\r
    \`</table>\` +\r
    (booking.notes\r
      ? \`<p style="margin:16px 0 0;color:#374151;font-size:14px;white-space:pre-wrap">\${bookEscapeBlock(booking.notes)}</p>\`\r
      : '') +\r
    \`<p style="margin:24px 0 0;font-size:13px;color:#6b7280">Need to cancel? \` +\r
    \`<a href="\${bookEscapeHtml(manageUrl)}" style="color:#2563eb">\${bookEscapeHtml(manageUrl)}</a></p>\` +\r
    bookFooterHtml() +\r
    \`</div></div>\`;\r
  const ics = bookingIcs(cfg, booking);\r
  const method = /^METHOD:([A-Za-z-]+)\\s*$/m.exec(ics);\r
  return sendBookingMail(ctx, {\r
    to: booking.email,\r
    subject,\r
    text,\r
    html,\r
    replyTo: cfg.organizerEmail || undefined,\r
    attachments: [\r
      {\r
        filename: 'meeting.ics',\r
        content: bookBase64Utf8(ics),\r
        contentType: \`text/calendar; charset=utf-8\${method ? \`; method=\${method[1].toUpperCase()}\` : ''}\`,\r
      },\r
    ],\r
  });\r
}\r
\r
/** New-booking notice to the host (their calendar shows it on next open; this\r
 *  is the "someone booked you" ping in between). */\r
async function sendHostBookedMail(ctx, cfg, page, booking) {\r
  if (!cfg.organizerEmail) return false;\r
  const when = bookWhen(booking, page.tz, cfg.hour12);\r
  const who = booking.name ? \`\${booking.name} (\${booking.email})\` : booking.email;\r
  const joinUrl = meetingLink(booking.meetingUrl);\r
  const subject = bookLine(\`New booking: \${booking.name || booking.email} — \${when}\`, 200);\r
  const text = [\r
    \`\\u2713 New booking\`,\r
    '',\r
    \`\${who} booked "\${booking.pageTitle}".\`,\r
    '',\r
    \`When: \${when}\`,\r
    ...(booking.location ? [\`Where: \${booking.location}\`] : []),\r
    ...(joinUrl ? [\`Join: \${joinUrl}\`] : []),\r
    ...(booking.notes ? ['', \`Notes: \${booking.notes}\`] : []),\r
    '',\r
    'It will appear on your calendar the next time you open it.',\r
  ].join('\\n');\r
  const html =\r
    \`<div style="background:#f6f7f9;padding:24px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif">\` +\r
    \`<div style="max-width:560px;margin:0 auto;background:#ffffff;border:1px solid #e5e7eb;border-radius:12px;padding:24px">\` +\r
    bookStatusHtml('New booking') +\r
    \`<p style="margin:0 0 8px;color:#111827;font-size:14px"><strong>\${bookEscapeHtml(who)}</strong> booked &ldquo;\${bookEscapeHtml(booking.pageTitle)}&rdquo;.</p>\` +\r
    \`<p style="margin:0 0 8px;color:#111827;font-size:14px">\${bookEscapeHtml(when)}</p>\` +\r
    (booking.location ? \`<p style="margin:0 0 8px;color:#111827;font-size:14px">\${bookEscapeHtml(booking.location)}</p>\` : '') +\r
    (joinUrl\r
      ? \`<p style="margin:0 0 8px;font-size:14px">Join: <a href="\${bookEscapeHtml(joinUrl)}" style="color:#2563eb">\${bookEscapeHtml(joinUrl)}</a></p>\`\r
      : '') +\r
    (booking.notes ? \`<p style="margin:16px 0 0;color:#374151;font-size:14px;white-space:pre-wrap">\${bookEscapeBlock(booking.notes)}</p>\` : '') +\r
    \`<p style="margin:16px 0 0;font-size:13px;color:#6b7280">It will appear on your calendar the next time you open it.</p>\` +\r
    bookFooterHtml() +\r
    \`</div></div>\`;\r
  return sendBookingMail(ctx, { to: cfg.organizerEmail, subject, text, html, replyTo: booking.email });\r
}\r
\r
/** Cancellation notice to the host, including a receipt for their own cancellation. */\r
async function sendHostCancelMail(ctx, cfg, booking, cancelledBy) {\r
  if (!cfg.organizerEmail) return false;\r
  const who = booking.name ? \`\${booking.name} (\${booking.email})\` : booking.email;\r
  const hostWhen = bookWhen(booking, (cfg.pages[booking.pageId] || {}).tz || booking.tz, cfg.hour12);\r
  const hostCancelled = cancelledBy === 'host';\r
  const reason = booking.cancelReason ? \`\\n\\n\${hostCancelled ? 'Your' : 'Their'} note: \${booking.cancelReason}\` : '';\r
  const intro = hostCancelled\r
    ? \`You cancelled the "\${booking.pageTitle}" booking with \${who}.\`\r
    : \`\${who} cancelled their "\${booking.pageTitle}" booking.\`;\r
  return sendBookingMail(ctx, {\r
    to: cfg.organizerEmail,\r
    subject: bookLine(\`Cancelled: \${booking.name || booking.email} — \${hostWhen}\`, 200),\r
    text: \`\${intro}\\n\\nWhen: \${hostWhen}\${reason}\\n\\nThe time is open again, and the event will leave your calendar the next time you open it.\`,\r
    html:\r
      \`<div style="background:#f6f7f9;padding:24px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif">\` +\r
      \`<div style="max-width:560px;margin:0 auto;background:#ffffff;border:1px solid #e5e7eb;border-radius:12px;padding:24px">\` +\r
      \`<h1 style="margin:0 0 16px;color:#111827;font-size:20px;line-height:1.3">Booking cancelled</h1>\` +\r
      \`<p style="margin:0 0 8px;color:#111827;font-size:14px">\${hostCancelled\r
        ? \`You cancelled the &ldquo;\${bookEscapeHtml(booking.pageTitle)}&rdquo; booking with <strong>\${bookEscapeHtml(who)}</strong>.\`\r
        : \`<strong>\${bookEscapeHtml(who)}</strong> cancelled &ldquo;\${bookEscapeHtml(booking.pageTitle)}&rdquo;.\`}</p>\` +\r
      \`<p style="margin:0 0 8px;color:#111827;font-size:14px">\${bookEscapeHtml(hostWhen)}</p>\` +\r
      (booking.cancelReason\r
        ? \`<p style="margin:16px 0 0;color:#374151;font-size:14px;white-space:pre-wrap">\${bookEscapeBlock(booking.cancelReason)}</p>\`\r
        : '') +\r
      bookFooterHtml() +\r
      \`</div></div>\`,\r
    replyTo: booking.email,\r
  });\r
}\r
\r
/** Guest cancellation notifies the host; a host cancellation offers the guest a rebook link. */\r
async function sendCancelMail(ctx, cfg, booking, cancelledBy, origin) {\r
  if (cancelledBy === 'guest') return sendHostCancelMail(ctx, cfg, booking, cancelledBy);\r
  const when = bookWhen(booking, booking.tz, true);\r
  // Host cancelled — tell the guest, and offer the page again if it's live.\r
  const page = cfg.pages[booking.pageId];\r
  const rebook = page && page.enabled ? \`\${origin}/book/\${page.id}\` : '';\r
  return sendBookingMail(ctx, {\r
    to: booking.email,\r
    subject: bookLine(\`Cancelled: \${booking.pageTitle} — \${when}\`, 200),\r
    text:\r
      \`Hi \${booking.name || 'there'},\\n\\n\${cfg.organizerName || 'The organizer'} cancelled your booking.\\n\\n\${booking.pageTitle}\\nWhen: \${when}\` +\r
      (rebook ? \`\\n\\nPick a new time: \${rebook}\` : ''),\r
    html:\r
      \`<div style="background:#f6f7f9;padding:24px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif">\` +\r
      \`<div style="max-width:560px;margin:0 auto;background:#ffffff;border:1px solid #e5e7eb;border-radius:12px;padding:24px">\` +\r
      \`<h1 style="margin:0 0 16px;color:#111827;font-size:20px;line-height:1.3">Booking cancelled</h1>\` +\r
      \`<p style="margin:0 0 8px;color:#111827;font-size:14px">\${bookEscapeHtml(cfg.organizerName || 'The organizer')} cancelled your booking.</p>\` +\r
      \`<p style="margin:0 0 4px;color:#111827;font-size:14px"><strong>\${bookEscapeHtml(booking.pageTitle)}</strong></p>\` +\r
      \`<p style="margin:0 0 8px;color:#111827;font-size:14px">\${bookEscapeHtml(when)}</p>\` +\r
      (rebook\r
        ? \`<p style="margin:16px 0 0;font-size:13px;color:#6b7280">Pick a new time: <a href="\${bookEscapeHtml(rebook)}" style="color:#2563eb">\${bookEscapeHtml(rebook)}</a></p>\`\r
        : '') +\r
      bookFooterHtml() +\r
      \`</div></div>\`,\r
    replyTo: cfg.organizerEmail || undefined,\r
  });\r
}\r
\r
/* ---- Booking: shared route plumbing ---------------------------------------- */\r
\r
/** Parse a guest POST body — urlencoded (the page's format: it keeps the\r
 *  cross-origin POST a CORS "simple request", exactly like the RSVP page) or\r
 *  JSON. Returns a plain { field: string } object. */\r
async function bookReadBody(request) {\r
  const type = (request.headers.get('content-type') || '').toLowerCase();\r
  try {\r
    if (type.includes('application/json')) {\r
      const body = await request.json();\r
      return body && typeof body === 'object' ? body : {};\r
    }\r
    const params = new URLSearchParams(await request.text());\r
    const out = {};\r
    for (const [key, value] of params) out[key] = value;\r
    return out;\r
  } catch {\r
    return {};\r
  }\r
}\r
\r
/** Send the visitor to the app-hosted booking page (public/book.html), params\r
 *  in the fragment like the RSVP redirect — tokens never hit logs/referrers. */\r
function bookPageUrl() {\r
  const base = /^https?:\\/\\//i.test(PAGE_URL) ? PAGE_URL : 'https://calendar.puter.com/rsvp.html';\r
  try {\r
    return new URL('book.html', base).toString();\r
  } catch {\r
    return 'https://calendar.puter.com/book.html';\r
  }\r
}\r
\r
function redirectToBookPage(ctx, params) {\r
  const search = new URLSearchParams({ w: new URL(ctx.request.url).origin, ...params });\r
  return new Response(null, {\r
    status: 303,\r
    headers: {\r
      location: \`\${bookPageUrl()}#\${search.toString()}\`,\r
      'cache-control': 'no-store',\r
      'referrer-policy': 'no-referrer',\r
      'x-robots-tag': 'noindex, nofollow',\r
    },\r
  });\r
}\r
\r
function validBookingPageId(id) {\r
  return typeof id === 'string' && PAGE_ID_RE.test(id);\r
}\r
\r
/** The page \`id\` names in \`cfg\`, or null. Own keys only: \`cfg.pages\` is a\r
 *  parsed JSON object, so a URL asking for \`constructor\` would otherwise find\r
 *  Object's — a "page" with \`enabled\` undefined, answered 410 "page off" with\r
 *  the host's name attached, for a page that never existed. */\r
function bookingPageOf(cfg, id) {\r
  if (!validBookingPageId(id) || !Object.prototype.hasOwnProperty.call(cfg.pages, id)) return null;\r
  const page = cfg.pages[id];\r
  return page && typeof page === 'object' ? page : null;\r
}\r
\r
/** Resolve a manage token to its booking, or null. Mirrors the RSVP token\r
 *  lookup: hash the token, follow the pointer, and require the booking to\r
 *  still carry this very hash. */\r
async function lookupBookingToken(ctx, token) {\r
  if (typeof token !== 'string' || !/^[0-9a-f]{40}$/.test(token)) return null;\r
  const kv = kvOf(ctx);\r
  const tokenHash = await sha256Hex(token);\r
  const ref = coerce(await kv.get(BOOK_TOK_PREFIX + tokenHash));\r
  if (!ref || typeof ref.bookingId !== 'string') return null;\r
  const booking = coerce(await kv.get(BOOK_PREFIX + ref.bookingId));\r
  if (!booking || booking.tokenHash !== tokenHash) return null;\r
  return booking;\r
}\r
\r
async function markBookingCancelled(kv, booking, by, reason) {\r
  booking.status = 'cancelled';\r
  booking.cancelledAt = Date.now();\r
  booking.cancelledBy = by;\r
  booking.updatedAt = Date.now();\r
  const note = str(reason, 500).trim();\r
  if (note) booking.cancelReason = note;\r
  await kv.set(BOOK_PREFIX + booking.id, booking);\r
  // Free the slot claim — but only if it is still ours. The record above is\r
  // what actually frees the time; the claim is a backstop, and a stale one\r
  // blocks nothing, so it must not be able to fail the cancellation.\r
  try {\r
    const claim = coerce(await kv.get(BOOK_SLOT_PREFIX + booking.start));\r
    if (claim && claim.bookingId === booking.id) await kv.del(BOOK_SLOT_PREFIX + booking.start);\r
  } catch {\r
    /* leave it; nothing consults a claim without also checking the record */\r
  }\r
}\r
\r
/* ---- Booking: admin routes -------------------------------------------------- */\r
\r
router.post('/admin/booking/sync', async (ctx) => {\r
  if (!(await isAdmin(ctx.request))) return json({ error: 'unauthorized' }, 401);\r
  let body = null;\r
  try {\r
    body = await ctx.request.json();\r
  } catch {\r
    /* refused below */\r
  }\r
  // A body that isn't an object is a broken request, not an instruction to\r
  // publish no pages and no busy time. Writing the sanitizer's empty config\r
  // over the live one answered 200 — so the app recorded the push as done\r
  // and every booking link 404ed until something else changed. (An intended\r
  // clearing still arrives as an object with \`pages: []\`.)\r
  if (!body || typeof body !== 'object' || Array.isArray(body)) {\r
    return json({ error: 'booking config required' }, 400);\r
  }\r
  const cfg = sanitizeBookingSync(body);\r
  await kvOf(ctx).set(BOOK_CFG_KEY, cfg);\r
  return json({ ok: true, pages: Object.keys(cfg.pages).length, busy: cfg.busy.length });\r
});\r
\r
router.get('/admin/booking/list', async (ctx) => {\r
  if (!(await isAdmin(ctx.request))) return json({ error: 'unauthorized' }, 401);\r
  const kv = kvOf(ctx);\r
  const bookings = await loadBookings(kv);\r
  const keep = [];\r
  for (const b of bookings) {\r
    // A reservation still inside the request that wrote it is not a booking\r
    // yet: that request may roll it back (a storage error, the both-racers-\r
    // yield case), and an event the app created from it would then outlive\r
    // it for good — the app only adopts and cancels what is LISTED. It is\r
    // listed on the next pull, once committed (or once the settle window has\r
    // lapsed and the mark is no longer trusted).\r
    if (bookingSettling(b, Date.now())) continue;\r
    // Records long past their meeting are dead weight in the host's storage;\r
    // 200 days comfortably outlives every "what was that meeting?" question.\r
    if (Number.isFinite(b.end) && Date.now() - b.end > 200 * BOOK_DAY_MS) {\r
      // Housekeeping, not the job: a delete that will not go through must not\r
      // fail this route. It is the app's only way to learn about bookings at\r
      // all, so one undeletable record from last year would otherwise stop\r
      // every future booking from ever reaching the calendar. Skip it and try\r
      // again on the next pull.\r
      try {\r
        await kv.del(BOOK_PREFIX + b.id);\r
        if (b.tokenHash) await kv.del(BOOK_TOK_PREFIX + b.tokenHash);\r
        const claim = coerce(await kv.get(BOOK_SLOT_PREFIX + b.start));\r
        if (claim && claim.bookingId === b.id) await kv.del(BOOK_SLOT_PREFIX + b.start);\r
      } catch {\r
        /* leave it for next time */\r
      }\r
      continue;\r
    }\r
    keep.push(adminBookingView(b));\r
  }\r
  return json({ ok: true, bookings: keep });\r
});\r
\r
router.post('/admin/booking/cancel', async (ctx) => {\r
  if (!(await isAdmin(ctx.request))) return json({ error: 'unauthorized' }, 401);\r
  let body = null;\r
  try {\r
    body = await ctx.request.json();\r
  } catch {\r
    /* handled below */\r
  }\r
  const id = body && typeof body.id === 'string' ? body.id : '';\r
  if (!/^[0-9a-f]{6,64}$/.test(id)) return json({ error: 'id required' }, 400);\r
  const kv = kvOf(ctx);\r
  const booking = coerce(await kv.get(BOOK_PREFIX + id));\r
  if (!booking || typeof booking !== 'object') return json({ error: 'not_found' }, 404);\r
  if (booking.status === 'cancelled') return json({ ok: true, booking: adminBookingView(booking) });\r
  await markBookingCancelled(kv, booking, 'host', body && body.reason);\r
  let emailed = false;\r
  if (!body || body.notify !== false) {\r
    // The cancellation is recorded by now; notifying both people is best-effort,\r
    // and a throw here would answer 500 to an app that has just cancelled\r
    // successfully, leaving the event on the host's calendar until a later\r
    // pull happened to clean it up.\r
    emailed = await loadBookingCfg(kv)\r
      .then(async (cfg) => {\r
        const guestEmailed = await sendCancelMail(ctx, cfg, booking, 'host', new URL(ctx.request.url).origin).catch(() => false);\r
        await sendHostCancelMail(ctx, cfg, booking, 'host').catch(() => false);\r
        return guestEmailed;\r
      })\r
      .catch(() => false);\r
  }\r
  return json({ ok: true, booking: adminBookingView(booking), emailed });\r
});\r
\r
/* ---- Booking: guest-facing JSON API ------------------------------------------ */\r
\r
router.get('/api/book/:page', async (ctx) => {\r
  if (!validBookingPageId(ctx.params.page)) return json({ error: 'not_found' }, 404);\r
  const kv = kvOf(ctx);\r
  const cfg = await loadBookingCfg(kv);\r
  const page = bookingPageOf(cfg, ctx.params.page);\r
  if (!page) return json({ error: 'not_found' }, 404);\r
  if (!page.enabled) return json({ error: 'page_off', organizer: cfg.organizerName || '' }, 410);\r
  const bookings = await loadBookings(kv);\r
  return json({\r
    ok: true,\r
    page: publicPageView(cfg, page),\r
    firstAvailable: firstBookableSlot(cfg, page, bookings, Date.now()),\r
    now: Date.now(),\r
  });\r
});\r
\r
router.get('/api/book/:page/slots', async (ctx) => {\r
  if (!validBookingPageId(ctx.params.page)) return json({ error: 'not_found' }, 404);\r
  const kv = kvOf(ctx);\r
  const cfg = await loadBookingCfg(kv);\r
  const page = bookingPageOf(cfg, ctx.params.page);\r
  if (!page) return json({ error: 'not_found' }, 404);\r
  if (!page.enabled) return json({ error: 'page_off' }, 410);\r
  const now = Date.now();\r
  const url = new URL(ctx.request.url);\r
  // Absent params must fall to the defaults — Number(null) is 0, which would\r
  // "pass" isFinite and turn a missing ?to= into an empty result.\r
  const fromRaw = url.searchParams.get('from');\r
  const toRaw = url.searchParams.get('to');\r
  let from = fromRaw == null || fromRaw === '' ? NaN : Number(fromRaw);\r
  let to = toRaw == null || toRaw === '' ? NaN : Number(toRaw);\r
  if (!Number.isFinite(from)) from = now;\r
  if (!Number.isFinite(to)) to = from + 31 * BOOK_DAY_MS;\r
  // Clamp to what can possibly hold slots, and bound the work per request.\r
  from = Math.max(from, now - BOOK_DAY_MS);\r
  to = Math.min(to, now + (page.maxAdvanceDays + 2) * BOOK_DAY_MS);\r
  to = Math.min(to, from + BOOK_SLOT_QUERY_MAX_DAYS * BOOK_DAY_MS);\r
  if (to <= from) return json({ ok: true, slots: [], durationMin: page.durationMin });\r
  const bookings = await loadBookings(kv);\r
  return json({\r
    ok: true,\r
    slots: bookableSlots(cfg, page, bookings, from, to, now),\r
    durationMin: page.durationMin,\r
  });\r
});\r
\r
router.post('/api/book/:page', async (ctx) => {\r
  if (!validBookingPageId(ctx.params.page)) return json({ error: 'not_found' }, 404);\r
  const kv = kvOf(ctx);\r
  const cfg = await loadBookingCfg(kv);\r
  const page = bookingPageOf(cfg, ctx.params.page);\r
  if (!page) return json({ error: 'not_found' }, 404);\r
  if (!page.enabled) return json({ error: 'page_off' }, 410);\r
\r
  const body = await bookReadBody(ctx.request);\r
  const name = bookLine(body.name, 200);\r
  const email = lowerEmail(body.email);\r
  const notes = str(body.notes, 2000).trim();\r
  const guestTz = bookValidTz(body.tz) ? body.tz : '';\r
  const start = Number(body.start);\r
  if (!name) return json({ error: 'name_required' }, 400);\r
  if (!email) return json({ error: 'email_required' }, 400);\r
  if (!Number.isFinite(start)) return json({ error: 'invalid_slot' }, 400);\r
\r
  // A start outside what the slot engine could possibly offer is a bad\r
  // request. Checking the range here (the same bounds the GET route clamps to)\r
  // also keeps a finite-but-absurd value — e.g. 9e15, beyond Date's ±8.64e15\r
  // range — from reaching Intl inside bookableSlots, where it would throw a\r
  // RangeError instead of answering 400.\r
  const now = Date.now();\r
  if (start < now - BOOK_DAY_MS || start > now + (page.maxAdvanceDays + 2) * BOOK_DAY_MS) {\r
    return json({ error: 'invalid_slot' }, 400);\r
  }\r
\r
  // Is this start on the page's grid AT ALL — right weekday, inside a window,\r
  // on the increment, within notice and horizon? Pure computation over the\r
  // config we already hold, so a malformed or stale start is answered without\r
  // touching storage, and only a start that could really be booked goes on to\r
  // reserve keys below.\r
  const scheduled = bookableSlots(cfg, page, [], start, start + 1, now, { ignoreConflicts: true });\r
  if (!scheduled.includes(start)) return json({ error: 'invalid_slot' }, 400);\r
\r
  // Anti-abuse: the page is public, so cap how many bookings a day it accepts.\r
  const newKey = \`\${BOOK_NEW_PREFIX}\${page.id}:\${new Date(now).toISOString().slice(0, 10)}\`;\r
  const createdToday = Number(coerce(await kv.get(newKey))) || 0;\r
  if (createdToday >= BOOK_MAX_PER_PAGE_PER_DAY) return json({ error: 'too_many' }, 429);\r
\r
  const id = newToken().slice(0, 32); // 128 bits, hex — also the calendar event id\r
  const token = newToken();\r
  const tokenHash = await sha256Hex(token);\r
  const booking = {\r
    id,\r
    pageId: page.id,\r
    pageTitle: page.title,\r
    location: page.location,\r
    // Each booking gets its own room (different guests must never share one).\r
    // Minted before the record is written so the confirmation email, the .ics,\r
    // the manage page, and the host's pulled event all carry the same link.\r
    ...(page.meet ? { meetingUrl: mintMeetingUrl() } : {}),\r
    durationMin: page.durationMin,\r
    start,\r
    end: start + page.durationMin * MIN_MS,\r
    name,\r
    email,\r
    notes,\r
    tz: guestTz,\r
    status: 'confirmed',\r
    createdAt: now,\r
    updatedAt: now,\r
    tokenHash,\r
  };\r
\r
  /**\r
   * RESERVE, then check — the order is what makes the race safe.\r
   *\r
   * puter.kv has no transactions, so two guests can only be separated by what\r
   * each can SEE of the other. Writing the record before the (storage-heavy)\r
   * availability check means every request's own check runs against a store\r
   * that already holds its reservation, and that is enough to prove no pair\r
   * can both survive: for racers A and B, A surviving needs B's record to\r
   * arrive after A's check, and B surviving needs A's record to arrive after\r
   * B's check — and since each record is written before that same request's\r
   * check, the two conditions chain into a contradiction. (Validating first,\r
   * as this route used to, left the opposite: a slower older request could\r
   * finish behind a faster younger one, and both were confirmed for the same\r
   * minute.) Two exactly-simultaneous racers can now both yield, which is a\r
   * "pick another time" on a slot that is in fact free — the safe direction,\r
   * and one more press settles it.\r
   */\r
  const rollback = async () => {\r
    // Best effort, each key on its own: a reservation that cannot be deleted\r
    // must at least stop blocking the slot and stop reaching the host's\r
    // calendar, so fall back to marking it cancelled.\r
    try {\r
      await kv.del(BOOK_PREFIX + id);\r
    } catch {\r
      try {\r
        await kv.set(BOOK_PREFIX + id, { ...booking, status: 'cancelled', cancelledBy: 'system' });\r
      } catch {\r
        /* nothing else to try */\r
      }\r
    }\r
    try {\r
      await kv.del(BOOK_TOK_PREFIX + tokenHash);\r
    } catch {\r
      /* an orphan token points at a cancelled/absent booking — harmless */\r
    }\r
    try {\r
      const held = coerce(await kv.get(BOOK_SLOT_PREFIX + start));\r
      if (held && held.bookingId === id) await kv.del(BOOK_SLOT_PREFIX + start);\r
    } catch {\r
      /* the claim is only ever a backstop; a stale one blocks nothing */\r
    }\r
  };\r
\r
  // \`pending\` marks a reservation that has not yet passed its own check, so\r
  // a concurrent request can tell it from a committed booking (see\r
  // bookingSettling). Cleared — by rewriting the record — once settle() lets\r
  // this booking stand.\r
  try {\r
    await kv.set(BOOK_PREFIX + id, { ...booking, pending: true });\r
    await kv.set(BOOK_TOK_PREFIX + tokenHash, { bookingId: id });\r
  } catch {\r
    // The record may have landed without its token pointer. Left there it is\r
    // the worst of both: the admin view strips \`pending\`, so the host's\r
    // calendar adopts a booking whose guest was told it failed, who holds no\r
    // link to cancel it — and once the settle window lapses it blocks the slot\r
    // for everyone else. Take it back, best-effort, and say the request\r
    // failed; the guest's retry starts clean.\r
    await rollback().catch(() => {});\r
    return json({ error: 'unavailable' }, 503);\r
  }\r
\r
  /** Everything between the reservation and the commit. Resolves to the reply\r
   *  to send when the reservation must be given up, or null to go ahead. */\r
  const settle = async () => {\r
    // Everything but our own reservation — which must not be allowed to block\r
    // the very slot it is reserving (nor count against the per-day cap).\r
    const others = (await loadBookings(kv)).filter((b) => b && b.id !== id);\r
    if (!bookableSlots(cfg, page, others, start, start + 1, now).includes(start)) {\r
      await rollback();\r
      // A resubmit — the guest pressed Schedule again after a reply went\r
      // missing — is not a lost slot: they already hold this booking, so hand\r
      // it back instead of telling them to pick another time they cannot have.\r
      //\r
      // ...provided it IS a booking. A same-guest record still inside its own\r
      // settle() is the other half of a double-submit racing us — two tabs, or\r
      // a retry overtaking a slow first request — and it yields on seeing OUR\r
      // reservation exactly as we yield on seeing its, so both would answer\r
      // "you already hold this" while both records vanish: a confirmation\r
      // for a meeting that does not exist, that the host never hears of. Have\r
      // that guest press again instead. By then the other request has either\r
      // committed (and this branch hands its booking back) or rolled back\r
      // (and the slot is simply free) — the same one-more-press the\r
      // different-guest race settles with.\r
      const mine = others.find(\r
        (b) =>\r
          b.status === 'confirmed' &&\r
          b.start === start &&\r
          b.pageId === page.id &&\r
          b.email === email,\r
      );\r
      if (mine && !bookingSettling(mine, now)) {\r
        return json({\r
          ok: true,\r
          duplicate: true,\r
          booking: guestBookingView(cfg, mine, now),\r
          emailed: { guest: false, host: false },\r
        });\r
      }\r
      return json({ error: 'slot_taken' }, 409);\r
    }\r
\r
    // Backstop for the exact-start case: claim the minute and read it back —\r
    // whoever's id is there wins. Written only now that the slot has been won,\r
    // so a request on its way to yielding can never overwrite (and then, on\r
    // rollback, delete) the claim of the booking that beat it.\r
    await kv.set(BOOK_SLOT_PREFIX + start, { bookingId: id });\r
    const claim = coerce(await kv.get(BOOK_SLOT_PREFIX + start));\r
    if (claim && claim.bookingId !== id) {\r
      await rollback();\r
      return json({ error: 'slot_taken' }, 409);\r
    }\r
\r
    // Second backstop, against a fresh read: a booking that arrived since the\r
    // check above. Deterministic loser, so a pair that reaches here still\r
    // settles to one — the later (or lexicographically larger) booking yields.\r
    for (const other of await loadBookings(kv)) {\r
      if (!other || other.id === id || other.status !== 'confirmed') continue;\r
      if (bookingBlocks(cfg, page, other, booking.start, booking.end)) {\r
        if (other.createdAt < booking.createdAt || (other.createdAt === booking.createdAt && other.id < id)) {\r
          await rollback();\r
          return json({ error: 'slot_taken' }, 409);\r
        }\r
      }\r
    }\r
    return null;\r
  };\r
\r
  let verdict;\r
  try {\r
    verdict = await settle();\r
  } catch (err) {\r
    // Storage went wrong somewhere in there. The reservation is already\r
    // written, so doing nothing would leave a booking on the host's calendar\r
    // that its guest was told had failed — the one outcome worse than\r
    // failing. Give it up and say so; the guest's retry starts clean, and if\r
    // the rollback itself could not land, their retry is recognised as the\r
    // resubmit it is.\r
    await rollback().catch(() => {});\r
    return json({ error: 'unavailable' }, 503);\r
  }\r
  if (verdict) return verdict;\r
\r
  // The booking stands: clear the reservation's \`pending\` mark. Best-effort —\r
  // the booking is committed by now, and bookingSettling() stops trusting a\r
  // stale mark on its own, so a failed rewrite costs nothing but a resubmit\r
  // within the next two minutes being asked to press once more.\r
  await kv.set(BOOK_PREFIX + id, booking).catch(() => {});\r
\r
  await bookBumpCounter(kv, newKey, 1);\r
  const origin = new URL(ctx.request.url).origin;\r
  // Mail is best-effort by design, and that has to include THROWING: the\r
  // booking is committed by now, so a formatting or transport surprise must\r
  // cost the announcement, not the guest's reply.\r
  const emailedGuest = await sendGuestConfirmMail(ctx, cfg, booking, token, origin).catch(() => false);\r
  const emailedHost = await sendHostBookedMail(ctx, cfg, page, booking).catch(() => false);\r
\r
  return json({\r
    ok: true,\r
    token,\r
    booking: guestBookingView(cfg, booking, now),\r
    emailed: { guest: emailedGuest, host: emailedHost },\r
  });\r
});\r
\r
router.get('/api/booking/:token', async (ctx) => {\r
  const booking = await lookupBookingToken(ctx, ctx.params.token);\r
  if (!booking) return json({ error: 'not_found' }, 404);\r
  const cfg = await loadBookingCfg(kvOf(ctx));\r
  const page = cfg.pages[booking.pageId];\r
  return json({\r
    ok: true,\r
    booking: guestBookingView(cfg, booking),\r
    page: page ? { id: page.id, enabled: Boolean(page.enabled) } : null,\r
  });\r
});\r
\r
router.post('/api/booking/:token/cancel', async (ctx) => {\r
  const booking = await lookupBookingToken(ctx, ctx.params.token);\r
  if (!booking) return json({ error: 'not_found' }, 404);\r
  const kv = kvOf(ctx);\r
  const cfg = await loadBookingCfg(kv);\r
  if (booking.status === 'cancelled') {\r
    return json({ ok: true, booking: guestBookingView(cfg, booking) });\r
  }\r
  if (booking.start <= Date.now()) return json({ error: 'started' }, 410);\r
  const body = await bookReadBody(ctx.request);\r
  await markBookingCancelled(kv, booking, 'guest', body.reason);\r
  // Same reasoning as the host route: the cancellation is already recorded, so\r
  // a mail failure must not answer 500 and tell the guest it didn't happen.\r
  await sendCancelMail(ctx, cfg, booking, 'guest', new URL(ctx.request.url).origin).catch(() => false);\r
  return json({ ok: true, booking: guestBookingView(cfg, booking) });\r
});\r
\r
/* ---- Booking: human links ------------------------------------------------- */\r
\r
// The link the host shares. Nothing here mutates, so prefetchers are harmless.\r
router.get('/book/:page', async (ctx) =>\r
  redirectToBookPage(ctx, validBookingPageId(ctx.params.page) ? { p: ctx.params.page } : {}),\r
);\r
\r
// The guest's private manage link (from their confirmation email/page).\r
router.get('/booking/:token', async (ctx) =>\r
  redirectToBookPage(\r
    ctx,\r
    /^[0-9a-f]{40}$/.test(String(ctx.params.token || '')) ? { t: ctx.params.token } : {},\r
  ),\r
);\r
`,Js=`cal:rsvp:cfg`,Ys=`cal:rsvp:links:`,Xs=`cal:rsvp:suggestions-seen`,Zs=6e4,Qs=6e4,$s=5*6e4,ec=3e4,tc=200*365*864e5;function nc(e){if(e==null)return null;if(typeof e==`string`)try{return JSON.parse(e)}catch{return null}return e}function rc(e){let t=new Uint8Array(e);crypto.getRandomValues(t);let n=``;for(let e of t)n+=e.toString(16).padStart(2,`0`);return n}function ic(e){let t=String(e??``).toLowerCase().replace(/[^a-z0-9]+/g,`-`).replace(/^-+|-+$/g,``).slice(0,24).replace(/-+$/,``),n=[];return t.length>=2&&n.push(`cal-${t}`,`cal-${t}-${rc(2)}`),n.push(`cal-rsvp-${rc(5)}`),n}async function ac(e){let t=await crypto.subtle.digest(`SHA-256`,new TextEncoder().encode(String(e))),n=``;for(let e of new Uint8Array(t))n+=e.toString(16).padStart(2,`0`);return n}function oc(){try{return Intl.DateTimeFormat().resolvedOptions().timeZone||``}catch{return``}}function sc(e){if(!e.recurrence)return e.end;let t=e.recurrence;if(t.until==null&&t.count==null)return null;let n=gt(e,e.start,e.start+tc),r=e.end;for(let e of n)Number.isFinite(e.end)&&e.end>r&&(r=e.end);return r}function cc({kv:e,store:t,user:n,getPuter:r=()=>typeof puter<`u`?puter:null,fetchFn:i=(...e)=>fetch(...e),blocked:a=ir,requestUser:o=h,toast:s=u,syncDelayMs:c=1500,pollMs:l=Qs,pullMinMs:d=Zs,verifyAttempts:f=7,verifyDelayMs:p=1500,createRetryMs:m=400,adminTimeoutMs:g=25e3,verifyPingTimeoutMs:_=8e3,source:v=qs,pageUrl:y=(typeof location<`u`&&location.origin&&location.origin!==`null`?location.origin:`https://calendar.puter.com`)+`/rsvp.html`}){let b=null,x=n&&typeof n.email==`string`?n.email.trim().toLowerCase():``,S=!1,C=null,w=null,T=-1/0,E=()=>{},D=Promise.resolve(),O=0,k=new Map,A=new Map,j=new Map,M=new Map,N={},P=!1,F=null,I=new Map,L=new Set,ee=()=>a()||typeof navigator<`u`&&navigator.onLine===!1;function R(e){for(let t of L)try{t(e)}catch{}}function te(e){let t=!!ae(b);b=e,!t&&ae(b)&&R()}function ne(e){let t=e.organizer?e.organizer.email:x;return(Array.isArray(e.guests)?e.guests:[]).filter(e=>e.email&&e.email!==t&&e.email!==x)}function z(e){return!e||e.isTask||e.ooo||e.invite||e.organizer&&(!x||e.organizer.email!==x)?!1:ne(e).length>0}function B(e,n){return JSON.stringify([e.title,e.start,e.end,e.allDay,e.location,e.description,e.meeting&&e.meeting.url||``,e.organizer||null,e.recurrence||null,e.exdates||null,oc(),t.getSettings().hour12!==!1,n.map(e=>[e.email,e.name||``])])}function V(e){return v.replace(`__RSVP_ADMIN_SECRET_HASH__`,e).replace(`__RSVP_WORKER_VERSION__`,`30`).replace(`__RSVP_PAGE_URL__`,y)}let H=!1;async function re(){await e.set(Js,b),H=!0}async function U(){let t=nc(await e.get(Js));return t&&t.secret&&(te(t),H=!0),b}let ie=0;async function W(e,t){let n=p;for(let r=0;r<f;r++){try{let n=await i(`${e}/admin/ping`,{headers:{authorization:`Bearer ${t}`},signal:se(_)});if(n.ok){let e=await n.json();if(e&&e.version===`30`){ie=0;return}}}catch{}await new Promise(e=>setTimeout(e,n)),n=Math.min(8e3,n+2e3)}throw ie=Date.now()+12e4,Error(`rsvp: deployed worker did not come up on the expected version`)}let G=null;function K(){return G||(G=oe().finally(()=>{G=null})),G}function ae(e){return e&&e.url&&q(e.version)?e.url:null}function q(e){if(e===`30`)return!0;let t=Number(e);return Number.isFinite(t)&&t>30}async function oe(t=0){if(b||await U(),b&&b.secret&&b.url&&q(b.version))return H||await re(),b;let i=r();if(!i||!i.workers||!i.fs)throw Error(`rsvp: Puter workers are unavailable`);if(b&&b.secret&&b.name){if(Date.now()<ie)throw Error(`rsvp: worker deploy pending (cooling down after a failed verify)`);let e=V(await ac(b.secret)),t=`rsvp-worker.js`;try{let e=await i.workers.get(b.name);e&&e.file_path&&(t=e.file_path)}catch{}return await i.fs.write(t,e,{createMissingParents:!0}),await W(b.url,b.secret),te({...b,version:`30`}),await re(),b}if(Date.now()<ie)throw Error(`rsvp: worker deploy pending (cooling down after a failed verify)`);let a=rc(32),o=V(await ac(a)),s=`rsvp-worker.js`;await i.fs.write(s,o,{createMissingParents:!0});let c=null,l=ic(n&&n.username);for(let n=0;n<l.length;n++){if(t<2&&await U().catch(()=>null))return oe(t+1);let r=l[n],o;try{o=await i.workers.create(r,s)}catch{await new Promise(e=>setTimeout(e,m));try{o=await i.workers.create(r,s)}catch(e){c=e;continue}}let u=String(o&&o.url||`https://${r}.puter.work`).replace(/\/+$/,``);b={name:r,url:u,secret:a,version:null,createdAt:Date.now()},H=!1;try{await re()}catch{}let d=async()=>{let t=nc(await e.get(Js));return!t||!t.secret||!t.name||t.name===r?!1:(typeof i.workers.delete==`function`&&await i.workers.delete(r).catch(()=>{}),te(t),H=!0,!0)};try{if(await d())return b}catch{}await W(u,a);try{if(await d())return b}catch{}return te({...b,version:`30`}),await re(),b}throw c||Error(`rsvp: could not deploy the RSVP worker`)}function se(e){if(e>0)try{if(typeof AbortSignal<`u`&&typeof AbortSignal.timeout==`function`)return AbortSignal.timeout(e);if(typeof AbortController==`function`){let t=new AbortController;return setTimeout(()=>t.abort(),e),t.signal}}catch{}}async function J(e,t){let n=await K(),r=await i(n.url+e,{method:t?`POST`:`GET`,headers:{authorization:`Bearer ${n.secret}`,...t?{"content-type":`application/json`}:{}},body:t?JSON.stringify(t):void 0,signal:se(g)});if(!r.ok){let t=Error(`rsvp: ${e} failed (${r.status})`);throw t.status=r.status,t}return r.json()}async function Y(e,n){let r=Object.entries(n||{}).map(([e,t])=>({email:e,status:t&&t.status,respondedAt:t&&t.respondedAt,comment:t&&t.comment}));r.length&&await Promise.resolve(t.applyRsvpResponses(e,r)).catch(()=>null)&&R(e)}function ce(e,n){let r=t.getEvent(e);if(!r)return;let i=new Set((Array.isArray(r.guests)?r.guests:[]).map(e=>e.email)),a=r.organizer?r.organizer.email:x,o=new Set,s=[];for(let t of Array.isArray(n)?n:[]){let n=t&&typeof t.email==`string`?t.email.trim().toLowerCase():``;!n||o.has(n)||i.has(n)||n===a||n===x||Date.now()-(I.get(`${e}:${n}`)||-1/0)<3e5||(o.add(n),s.push({email:n,name:typeof t.name==`string`?t.name.trim().slice(0,200):``,by:typeof t.by==`string`?t.by.trim().toLowerCase():``,at:Number.isFinite(t.at)?t.at:0}))}let c=M.get(e)||[];JSON.stringify(s)!==JSON.stringify(c)&&(s.length?M.set(e,s):M.delete(e),X(e,r.title,s),R(e))}function le(){return P?Promise.resolve():(F||(F=(async()=>{let n=nc(await e.get(Xs)),r=t.revision()!==null;if(n&&typeof n==`object`&&!Array.isArray(n))for(let[e,i]of Object.entries(n))!Number.isFinite(i)||e in N||r&&!t.getEvent(e.slice(0,e.indexOf(`:`)))||(N[e]=i);P=!0})().finally(()=>{F=null})),F)}async function X(t,n,r){await le().catch(()=>{});let i=r.filter(e=>e.at>(N[`${t}:${e.email}`]||0));if(!i.length)return;for(let e of i)N[`${t}:${e.email}`]=e.at;P&&e.set(Xs,N).catch(()=>{});let a=n?`“${n}”`:`your event`;s(i.length===1?`${i[0].by||`A guest`} suggested adding ${i[0].email} to ${a} — open the event to review.`:`${i.length} guest suggestions for ${a} — open the event to review.`)}async function ue(){let e=await J(`/admin/responses`);O=Date.now();for(let[n,r]of Object.entries(e.events||{}))t.getEvent(n)&&(await Y(n,r.guests),ce(n,r.suggestions))}async function de(n,r,i){let a=await K(),o=k.get(n.id)||{},s=JSON.stringify(o),c=nc(await e.get(Ys+n.id));c&&c.links&&(o={...o,...c.links});let l=r.filter(e=>!o[e.email]).map(e=>e.email),u=await J(`/admin/sync`,{event:{id:n.id,title:n.title,start:n.start,end:n.end,allDay:n.allDay,location:n.location,description:n.description,meetingUrl:n.meeting&&n.meeting.url||``,organizerName:n.organizer&&n.organizer.name||``,organizerEmail:n.organizer&&n.organizer.email||x,recurLabel:n.recurrence?xt(n.recurrence,n.start):``,expiresAt:sc(n),tz:oc(),hour12:t.getSettings().hour12!==!1},guests:r.map(e=>({email:e.email,name:e.name||``})),reissue:l}),d={...o};for(let[e,t]of Object.entries(u.links||{}))d[e]=`${a.url}/rsvp/${t}`;for(let e of Object.keys(d))r.some(t=>t.email===e)||delete d[e];let f=JSON.stringify(d)!==s;(f||A.get(n.id)!==i)&&await e.set(Ys+n.id,{links:d,digest:i}),k.set(n.id,d),A.set(n.id,i),await Y(n.id,u.guests),ce(n.id,u.suggestions),f&&R(n.id)}async function fe(t){await J(`/admin/revoke`,{eventId:t}),k.delete(t),A.delete(t),M.delete(t),await e.del(Ys+t).catch(()=>{}),R(t)}async function pe(){if(ee())return 0;let e=0;if(!x&&Date.now()-T>=$s){T=Date.now();let e=await Promise.resolve(o()).catch(()=>null);e&&typeof e.email==`string`&&e.email&&(x=e.email.trim().toLowerCase())}let n=t.getAllEvents().filter(z),r=new Set(n.map(e=>e.id));function i(e){let n=t.getEvent(e);return!n||n.isTask||n.ooo?!0:n.organizer&&(!x||n.organizer.email!==x)?!1:ne(n).length===0}if(b||k.size){for(let t of[...k.keys()])if(!(r.has(t)||!i(t)))try{await fe(t)}catch(t){e+=1,console.warn(`rsvp: revoke failed`,t)}}if(b||await U().catch(()=>null),b&&n.length&&Date.now()-O>=d)try{await ue()}catch(t){e+=1,console.warn(`rsvp: pull failed`,t)}for(let t of n){let n=ne(t),r=B(t,n),i=k.get(t.id)||{},a=n.some(e=>!i[e.email]);if(!(A.get(t.id)===r&&!a))try{await de(t,n,r)}catch(n){e+=1,console.warn(`rsvp: sync failed for event`,t.id,n)}}return e}let me=0,he=null;function ge(){return D=D.then(async()=>{if(!await pe()){me=0;return}me>=6||(me+=1,he&&clearTimeout(he),he=setTimeout(()=>{he=null,ge()},Math.min(3e4,5e3*me)))}).catch(()=>{}),D}function _e(){me=0,C&&clearTimeout(C),C=setTimeout(()=>{C=null,ge()},c)}function ve(){typeof document<`u`&&document.visibilityState!==`visible`||ee()||ge()}async function ye(){if(!S){S=!0;try{await U();let t=await e.list(`${Ys}*`,!0)||[];for(let e of t){if(!e||typeof e.key!=`string`)continue;let t=nc(e.value);if(!t||typeof t!=`object`)continue;let n=e.key.slice(15);k.set(n,t.links||{}),typeof t.digest==`string`&&A.set(n,t.digest)}}catch{}await le().catch(()=>{}),E=t.subscribe(_e),w=setInterval(()=>{typeof document<`u`&&document.visibilityState===`hidden`||ee()||ge()},l),typeof document<`u`&&document.addEventListener(`visibilitychange`,ve),typeof window<`u`&&window.addEventListener(`focus`,ve),_e()}}function be(e){let t=k.get(e);return t?{...t}:null}function xe(e){if(ee())return Promise.resolve();let n=t.getEvent(e);if(!n||!z(n))return Promise.resolve();let r=j.get(n.id)||0;return Date.now()-r<ec?Promise.resolve():(j.set(n.id,Date.now()),D=D.then(()=>de(n,ne(n),B(n,ne(n)))).catch(e=>console.warn(`rsvp: refresh failed`,e)),D)}function Se(e){return L.add(e),()=>L.delete(e)}function Ce(e){let n=M.get(e);if(!n||!n.length)return[];let r=t.getEvent(e),i=new Set(r&&Array.isArray(r.guests)?r.guests.map(e=>e.email):[]);return n.filter(e=>!i.has(e.email)).map(e=>({...e}))}async function we(e,t){if(ee())throw Error(`You're offline — reconnect to make changes.`);await J(`/admin/suggestions/dismiss`,{eventId:e,email:t}),I.set(`${e}:${t}`,Date.now());let n=(M.get(e)||[]).filter(e=>e.email!==t);n.length?M.set(e,n):M.delete(e),R(e)}function Te(){C&&clearTimeout(C),he&&clearTimeout(he),w&&clearInterval(w),C=he=w=null,E(),E=()=>{},typeof document<`u`&&document.removeEventListener(`visibilitychange`,ve),typeof window<`u`&&window.removeEventListener(`focus`,ve),S=!1}return{start:ye,stop:Te,isHosted:z,linkableGuests:ne,linksFor:be,refreshEvent:xe,onUpdate:Se,suggestionsFor:Ce,dismissSuggestion:we,adminRequest:J,workerOrigin:()=>ae(b),whenIdle:()=>D}}var lc=`contacts-api`,uc=1,dc=`contacts-api`,fc=`contacts`,pc=3600*1e3,mc=60*1e3,hc=120*1e3,gc=60*1e3,_c=5e3,vc=8e3,yc=12e3,bc=6e4,xc=600*1e3,Sc=1e3,Cc=10,wc=1e4,Tc=`cal:contacts:dir:`,Ec=1,Dc=15e5;function Oc(){try{return typeof localStorage<`u`?localStorage:null}catch{return null}}var kc=e=>typeof e==`string`?e:e==null?``:String(e);function Ac({name:e,company:t,jobTitle:n,email:r,tags:i}){return[e,t,n,r,...Array.isArray(i)?i:[]].filter(Boolean).join(`
`).toLowerCase()}function jc(e){if(!e||typeof e!=`object`)return[];let t=Array.isArray(e.emails)?e.emails:[],n=kc(e.name).trim(),r=kc(e.company).trim(),i=[],a=new Set;for(let o of t){let t=kc(o&&o.value).trim().toLowerCase();!t||a.has(t)||(a.add(t),i.push({contactId:kc(e.id),name:n,email:t,label:kc(o&&o.label),company:r,favorite:!!e.favorite,pos:i.length,hay:Ac({name:n,company:r,jobTitle:e.jobTitle,email:t,tags:e.tags})}))}return i}function Mc(e){if(!e||typeof e!=`object`)return null;let t=kc(e.email).trim().toLowerCase();if(!t)return null;let n=kc(e.name).trim(),r=kc(e.company).trim();return{contactId:kc(e.contactId),name:n,email:t,label:kc(e.label),company:r,favorite:!!e.favorite,pos:Number.isFinite(e.pos)?e.pos:0,hay:typeof e.hay==`string`&&e.hay?e.hay:Ac({name:n,company:r,email:t})}}var Nc=2166136261,Pc=16777619;function Fc(e,t){let n=typeof t==`string`?t:String(t),r=e;for(let e=0;e<n.length;e++)r^=n.charCodeAt(e),r=Math.imul(r,Pc);return r^=31,Math.imul(r,Pc)}function Ic(e){if(!e)return null;let t=Nc;for(let n of e)t=Fc(t,n.contactId),t=Fc(t,n.email),t=Fc(t,n.name),t=Fc(t,n.company),t=Fc(t,n.label),t=Fc(t,n.favorite?`1`:`0`),t=Fc(t,n.pos),t=Fc(t,n.hay);return`${e.length}:${t>>>0}`}function Lc(e,t){let n=e.name.toLowerCase();return n.startsWith(t)||e.email.startsWith(t)||n.split(/\s+/).some(e=>e.startsWith(t))?0:n.includes(t)||e.email.includes(t)?1:2}function Rc({getPuter:e=()=>typeof puter<`u`?puter:null,appName:t=fc,now:n=()=>Date.now(),userKey:r=``,refreshAfterMs:i=pc,emptyRefreshMs:a=mc,revalidateMs:o=hc,missRefreshMs:s=gc,idleCloseMs:c=_c,requestTimeoutMs:l=vc,launchTimeoutMs:u=yc,retryAfterMs:d=bc,maxRetryMs:f=xc,pageSize:p=Sc,maxPages:m=Cc}={}){let h=null,g=null,_=new Map,v=1,y=null,b=0,x=null,S=0,C=!1,w=null,T=0,E=0,D=0,O=!1,k=!1,A=!1,j=new Set,M=()=>r?`${Tc}${r}`:``;function N(){let t=e();return!!(t&&t.env===`app`&&t.ui&&typeof t.ui.launchApp==`function`)}function P(){return N()&&n()>=T}function F(e){E+=1;let t=Math.min(d*2**(E-1),f);T=n()+t,e&&console.warn(`[calendar] contacts unavailable:`,e.message||e)}function I(){y&&clearTimeout(y),y=null}function L(){I(),h&&(y=setTimeout(()=>{if(y=null,_.size)return L();R()},c))}function ee(e){let t=Error(e);for(let{reject:e,timer:n}of _.values())clearTimeout(n),e(t);_=new Map}function R({gone:e=!1}={}){I(),b++;let t=h;h=null,g=null,ee(`The contacts service closed`),t&&!e&&te(t)}function te(e){try{e.close()}catch{}}function ne(){for(let e of[...j])try{e()}catch(e){console.warn(`[calendar] contacts listener failed:`,e&&e.message)}}function z(){C=!0;let e=Oc(),t=M();if(!e||!t)return null;try{let n=[];for(let r=0;r<e.length;r++){let i=e.key(r);i&&i.startsWith(Tc)&&i!==t&&n.push(i)}for(let t of n)e.removeItem(t)}catch{}try{let r=e.getItem(t);if(!r)return null;let i=JSON.parse(r);if(!i||i.v!==Ec||!Array.isArray(i.entries))return e.removeItem(t),null;let a=i.entries.map(Mc).filter(Boolean);return i.entries.length&&!a.length?(e.removeItem(t),null):(x=a,S=Math.min(Number(i.fetchedAt)||0,n()),x)}catch{try{e.removeItem(t)}catch{}return null}}function B(){let e=Oc(),t=M();if(!(!e||!t||!x))try{let n=JSON.stringify({v:Ec,fetchedAt:S,entries:x});if(n.length>Dc)return;e.setItem(t,n)}catch{}}function V(){let e=!!(x&&x.length);x=null,S=0,C=!1;let t=Oc(),n=M();if(t&&n)try{t.removeItem(n)}catch{}e&&ne()}function H(e){if(!e||typeof e!=`object`||e.$!==lc)return;if(e.type===`changed`){G({force:!0}).then(e=>{e||V()});return}let t=e.id?_.get(e.id):null;t&&(_.delete(e.id),clearTimeout(t.timer),e.ok?t.resolve(e.result):t.reject(Error(e.error&&e.error.message||`The request failed`)))}function re(){if(h)return Promise.resolve(h);if(g)return g;if(!P())return Promise.reject(Error(`Contacts is not available here`));let n=e(),r=b;return g=new Promise((e,i)=>{let a=!1,o=null,s=null,c=e=>{a||(a=!0,clearTimeout(s),o&&te(o),i(e))};s=setTimeout(()=>c(Error(`Contacts did not respond`)),u),Promise.resolve(n.ui.launchApp({name:t,args:{service:dc},background:!0})).then(t=>{if(!t||t.usesSDK===!1)throw Error(`Contacts did not open with messaging support`);if(o=t,a||r!==b){te(t),c(Error(`Contacts was closed`));return}t.on(`message`,H),t.on(`close`,()=>{if(h===t){R({gone:!0});return}c(Error(`Contacts closed before it was ready`))});let n=i=>{if(!(!i||i.$!==lc||i.type!==`ready`)&&(typeof t.off==`function`&&t.off(`message`,n),!a)){if(r!==b){te(t),c(Error(`Contacts was closed`));return}a=!0,clearTimeout(s),h=t,e(t)}};t.on(`message`,n)}).catch(c)}).catch(e=>{throw F(e),e}).finally(()=>{g=null}),g}async function U(e,t={}){let n=await re(),r=`c${v++}`;I();let i=new Promise((t,n)=>{let i=setTimeout(()=>{_.delete(r),n(Error(`Contacts timed out on "${e}"`))},l);_.set(r,{resolve:t,reject:n,timer:i})});try{return n.postMessage({$:lc,v:uc,id:r,method:e,params:t}),await i}catch(e){let t=_.get(r);throw t&&(clearTimeout(t.timer),_.delete(r)),e}finally{L()}}function ie(){return!x&&!C&&z(),x}async function W(){let e=[],t=new Set,n=new Set,r=0,i=0;for(let a=0;a<m;a++){let a=await U(`list`,{limit:p,offset:r}),o=a&&Array.isArray(a.contacts)&&a.contacts||[];i=Number(a&&a.total)||i;for(let r of o){let i=kc(r&&r.id);if(i){if(t.has(i))continue;t.add(i)}for(let t of jc(r))n.has(t.email)||(n.add(t.email),e.push(t))}if(r+=o.length,!o.length||o.length<p||r>=i||e.length>=wc)break}return i>t.size&&console.warn(`[calendar] suggesting from ${t.size} of ${i} contacts`),e.slice(0,wc)}function G({force:e=!1}={}){if(w)return e&&(k=!0),w;if(!e&&!P()||e&&!N())return Promise.resolve(null);let t=Ic(x);return w=W().then(e=>(E=0,T=0,x=e,S=n(),B(),Ic(e)!==t&&ne(),x)).catch(e=>(e&&console.warn(`[calendar] could not read contacts:`,e.message||e),n()>=T&&F(),null)).finally(()=>{w=null,k&&(k=!1,G({force:!0}))}),w}function K(e){return e.length?i:a}function ae(){let e=ie();return e&&n()-S<K(e)?Promise.resolve(e):!e||!e.length?G():(G(),Promise.resolve(e))}function q({maxAgeMs:e=o}={}){if(w)return w;if(!P())return Promise.resolve(null);let t=ie();return t&&n()-S<Math.min(e,K(t))?Promise.resolve(t):G()}function oe(){if(w||!P())return;let e=x&&x.length?Math.max(S,D):D;n()-e<s||(D=n(),G())}return{available:P,ready(){let e=ie();return!!(e&&e.length||N())},warm(){return ae().then(()=>void 0)},revalidate:q,onChange(e){return typeof e==`function`?(j.add(e),()=>j.delete(e)):()=>{}},inUse(){return A},suggest(e,t=6){A=!0;let n=ie();if(!n||!n.length)return kc(e).trim()&&(O=!0),ae(),[];let r=kc(e).trim().toLowerCase();try{let e=r?r.split(/\s+/):[],i=e.length?n.filter(t=>e.every(e=>t.hay.includes(e))):n;return r&&!i.length&&(O=!0),i.map(e=>({e,r:r?Lc(e,r):0})).sort((e,t)=>e.r-t.r||Number(t.e.favorite)-Number(e.e.favorite)||e.e.name.localeCompare(t.e.name,void 0,{sensitivity:`base`})||e.e.pos-t.e.pos||e.e.email.localeCompare(t.e.email)).slice(0,t).map(({e})=>({contactId:e.contactId,name:e.name,email:e.email,label:e.label,company:e.company,favorite:e.favorite}))}catch(e){return console.warn(`[calendar] dropping an unusable contacts snapshot:`,e&&e.message),V(),G(),[]}},knows(e){let t=kc(e).trim().toLowerCase();if(!t)return!1;let n=ie();return!!(n&&n.some(e=>e.email===t))},noteTyped(e){let t=kc(e).trim().toLowerCase();if(!t)return;let n=ie();(!n||!n.some(e=>e.email===t))&&(O=!0)},settle(){O&&(O=!1,oe())},invalidate:V,call:U,search:(e,t={})=>U(`search`,{query:e,...t}),get:e=>U(`get`,{id:e}).then(e=>e&&e.contact),dispose(){R(),j.clear(),x=null,S=0,C=!1,A=!1,O=!1,k=!1}}}var zc=`/**\r
 * Published Puter events handler for \`fs:~/.mail/objects/**:add\`. Runs on the\r
 * app's events worker and, in-page, as the foreground/rescan path via\r
 * mailbox.js's \`new Function\` instantiation of this same source — one\r
 * implementation, one hash.\r
 *\r
 * MUST stay a single bare async function expression: no imports, no exports,\r
 * no statement before or after it (a leading comment is fine). Everything it\r
 * needs is declared INSIDE the function — it cannot close over anything, and\r
 * the publish-time free-variable scan refuses any global outside a fixed\r
 * allowlist (fetch/crypto/atob/TextDecoder/… — no \`puter\`, no \`me\`).\r
 *\r
 * It only ever extracts and records; it never writes \`cal:evt:\` — every\r
 * calendar mutation happens in-app (mail-intake.js), where contacts,\r
 * settings, the recurrence engine and the offline gate exist.\r
 *\r
 * Message reading is \`user.email.get({ id })\` (puter.email API) — no\r
 * hand-written MIME parsing here. The iCalendar allowlist filter below is\r
 * what bounds and sanitizes what actually gets stored.\r
 */\r
async function calendarMailHandler({ event, ctx, user, fetch, ack }) {\r
  const RECORD_VERSION = 1;\r
\r
  // ---- caps ---------------------------------------------------------------\r
  const MAX_MESSAGE_BYTES = 3 << 20; // 3 MiB — Outlook invites with inline images\r
  const MAX_CALENDAR_PARTS = 4;\r
  const MAX_VEVENTS = 30;\r
  const MAX_ICAL_LINES = 400;\r
  const MAX_ICAL_CHARS = 12288;\r
  const MAX_PER_DAY = 60; // records WRITTEN\r
  const MAX_SCANNED_PER_DAY = 600; // files PROCESSED\r
  const MAX_RECORDS = 150;\r
  const RECORD_TTL = 30 * 86400;\r
  const SEEN_TTL = 45 * 86400;\r
  const MAX_RECORD_CHARS = 20000;\r
\r
  // A mail object is named \`<uuidv7 id>--<base64url subject>\`.\r
  const ID_RE = /^([0-9a-f]{8}-[0-9a-f]{4}-7[0-9a-f]{3}-[0-9a-f]{4}-[0-9a-f]{12})--/i;\r
\r
  const VEVENT_PROP_ALLOW = new Set([\r
    'UID', 'SEQUENCE', 'DTSTAMP', 'DTSTART', 'DTEND', 'DURATION', 'SUMMARY', 'LOCATION',\r
    'DESCRIPTION', 'URL', 'ORGANIZER', 'ATTENDEE', 'RRULE', 'EXDATE', 'RECURRENCE-ID', 'STATUS',\r
    'TRANSP', 'COMMENT', 'CLASS',\r
  ]);\r
  const PARAM_ALLOW = new Set([\r
    'TZID', 'VALUE', 'CN', 'PARTSTAT', 'ROLE', 'RSVP', 'RANGE', 'CUTYPE',\r
    'DELEGATED-FROM', 'DELEGATED-TO',\r
  ]);\r
\r
  /* ---- small primitives ------------------------------------------------ */\r
\r
  function pad2(n) {\r
    return String(n).padStart(2, '0');\r
  }\r
\r
  function yyyymmdd(ms) {\r
    const d = new Date(ms);\r
    return \`\${d.getUTCFullYear()}\${pad2(d.getUTCMonth() + 1)}\${pad2(d.getUTCDate())}\`;\r
  }\r
\r
  // 64-bit FNV-1a as two 32-bit halves, hex — same shape as invites.js's\r
  // digest(). Not a secret: only used to fingerprint an id for idempotency.\r
  function hash64(str) {\r
    const s = String(str);\r
    let h1 = 0x811c9dc5;\r
    let h2 = 0x811c9dc5;\r
    for (let i = 0; i < s.length; i++) {\r
      const c = s.charCodeAt(i);\r
      h1 = Math.imul(h1 ^ c, 0x01000193) >>> 0;\r
      h2 = Math.imul(h2 ^ (c + i), 0x85ebca6b) >>> 0;\r
    }\r
    return h1.toString(16).padStart(8, '0') + h2.toString(16).padStart(8, '0');\r
  }\r
\r
  function ts36() {\r
    return Date.now().toString(36).padStart(9, '0');\r
  }\r
\r
  function isTransientError(err) {\r
    const code = err && (err.code || err.status);\r
    if (code === 429 || code === 'too_many_requests') return true;\r
    if (typeof code === 'number' && code >= 500) return true;\r
    const msg = (err && (err.message || (typeof err === 'string' ? err : ''))) || '';\r
    if (!msg) return true; // no message at all — treat as transient, per spec\r
    return /\\b429\\b|\\b5\\d\\d\\b|network|timeout|econn/i.test(String(msg));\r
  }\r
\r
  function sanitizeText(s, max) {\r
    return String(s || '').replace(/\\p{Cc}/gu, ' ').replace(/\\s+/g, ' ').trim().slice(0, max);\r
  }\r
\r
  function normalizeEmail(v) {\r
    const s = String(v || '').trim().toLowerCase();\r
    return /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(s) ? s : '';\r
  }\r
\r
  // For headers postal-mime doesn't parse into a structured address (e.g.\r
  // Sender): pull the address out of "Name <addr>" or a bare address.\r
  function extractAddress(value) {\r
    const v = String(value || '').trim();\r
    const m = /<([^>]*)>/.exec(v);\r
    const raw = (m ? m[1] : v).replace(/^mailto:/i, '').trim().toLowerCase();\r
    return /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(raw) ? raw : '';\r
  }\r
\r
  function domainOf(email) {\r
    const at = String(email || '').lastIndexOf('@');\r
    return at === -1 ? '' : email.slice(at + 1).toLowerCase();\r
  }\r
\r
  function domainMatches(dkimDomain, fromDomain) {\r
    if (!dkimDomain || !fromDomain) return false;\r
    return dkimDomain === fromDomain || fromDomain.endsWith('.' + dkimDomain);\r
  }\r
\r
  /**\r
   * Only the FIRST Authentication-Results header counts — the topmost one,\r
   * which is the one our own MX prepended. A sender can put anything they\r
   * like in the body of the message they submit, \`Authentication-Results:\r
   * x; dkim=pass header.d=puter.email\` included; honouring every occurrence\r
   * would let that forged line supply the verdict and the signing domain.\r
   */\r
  function parseAuthResults(value) {\r
    const v = String(value || '');\r
    const result = (re) => {\r
      const m = re.exec(v);\r
      if (!m) return 'none';\r
      const r = m[1].toLowerCase();\r
      return r === 'pass' ? 'pass' : r === 'fail' ? 'fail' : 'none';\r
    };\r
    const dd = /header\\.d=([a-z0-9.-]+)/i.exec(v);\r
    return {\r
      dkim: result(/dkim=(\\w+)/i),\r
      spf: result(/spf=(\\w+)/i),\r
      dkimDomain: dd ? dd[1].toLowerCase() : '',\r
    };\r
  }\r
\r
  function parseDateMs(value) {\r
    const t = Date.parse(value);\r
    return Number.isFinite(t) ? t : 0;\r
  }\r
\r
  function looksLikeCalendarStart(text) {\r
    const s = String(text || '').replace(/^[ \\t\\r\\n\\uFEFF]+/, '');\r
    return s.slice(0, 15).toUpperCase() === 'BEGIN:VCALENDAR';\r
  }\r
\r
  function decodeAttachmentText(att) {\r
    try {\r
      return new TextDecoder('utf-8').decode(att && att.content);\r
    } catch {\r
      return '';\r
    }\r
  }\r
\r
  function idFromFilename(name) {\r
    const m = ID_RE.exec(String(name || ''));\r
    return m ? m[1].toLowerCase() : '';\r
  }\r
\r
  /* ---- iCalendar filter (bounded, allowlisted; not a full parse) --------- */\r
\r
  function sanitizeICalValue(v) {\r
    return String(v).replace(/\\p{Cc}/gu, '');\r
  }\r
\r
  // RFC 5545 line unfolding: continuation lines start with a space or tab,\r
  // and real-world calendars sometimes use a lone '\\r' as a terminator.\r
  function unfoldIcalLines(text) {\r
    const raw = String(text).split(/\\r\\n|\\n|\\r/);\r
    const out = [];\r
    for (const line of raw) {\r
      if ((line.startsWith(' ') || line.startsWith('\\t')) && out.length) {\r
        out[out.length - 1] += line;\r
      } else if (line.length) {\r
        out.push(line);\r
      }\r
    }\r
    return out;\r
  }\r
\r
  function parseICalLine(line) {\r
    let idx = -1;\r
    let inQuote = false;\r
    for (let i = 0; i < line.length; i++) {\r
      const ch = line[i];\r
      if (ch === '"') inQuote = !inQuote;\r
      else if (ch === ':' && !inQuote) {\r
        idx = i;\r
        break;\r
      }\r
    }\r
    if (idx === -1) return null;\r
    const left = line.slice(0, idx);\r
    const value = line.slice(idx + 1);\r
    const semi = left.indexOf(';');\r
    return {\r
      name: (semi === -1 ? left : left.slice(0, semi)).toUpperCase().trim(),\r
      paramsRaw: semi === -1 ? '' : left.slice(semi + 1),\r
      value,\r
    };\r
  }\r
\r
  function parseICalParams(paramsRaw) {\r
    const out = [];\r
    let i = 0;\r
    const n = paramsRaw.length;\r
    while (i < n) {\r
      while (i < n && paramsRaw[i] === ';') i++;\r
      const start = i;\r
      while (i < n && paramsRaw[i] !== '=' && paramsRaw[i] !== ';') i++;\r
      const name = paramsRaw.slice(start, i).toUpperCase().trim();\r
      let value = '';\r
      if (i < n && paramsRaw[i] === '=') {\r
        i++;\r
        if (paramsRaw[i] === '"') {\r
          i++;\r
          const vstart = i;\r
          while (i < n && paramsRaw[i] !== '"') i++;\r
          value = paramsRaw.slice(vstart, i);\r
          if (i < n) i++;\r
        } else {\r
          const vstart = i;\r
          while (i < n && paramsRaw[i] !== ';') i++;\r
          value = paramsRaw.slice(vstart, i);\r
        }\r
      }\r
      if (name) out.push({ name, value });\r
      while (i < n && paramsRaw[i] !== ';') i++;\r
    }\r
    return out;\r
  }\r
\r
  function mailtoAddress(value) {\r
    const v = String(value || '').trim().replace(/^"|"$/g, '').replace(/^mailto:/i, '').trim().toLowerCase();\r
    return /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(v) ? v : '';\r
  }\r
\r
  function cleanICalProperty(prop) {\r
    if (prop.name === 'URL') {\r
      const val = sanitizeICalValue(prop.value).trim();\r
      if (!/^https?:\\/\\//i.test(val)) return null; // never an anchor either way — kept only as text\r
    }\r
    const params = parseICalParams(prop.paramsRaw || '')\r
      .filter((p) => PARAM_ALLOW.has(p.name))\r
      .map((p) => ({ name: p.name, value: sanitizeICalValue(p.value).slice(0, 200) }));\r
    const value = sanitizeICalValue(prop.value);\r
    const paramStr = params\r
      .map((p) => {\r
        const quoted = /[:;,]/.test(p.value) ? '"' + p.value + '"' : p.value;\r
        return ';' + p.name + '=' + quoted;\r
      })\r
      .join('');\r
    const line = \`\${prop.name}\${paramStr}:\${value}\`;\r
    return line.length > 900 ? line.slice(0, 900) : line;\r
  }\r
\r
  function findValue(props, name) {\r
    const p = props.find((x) => x.name === name);\r
    return p ? p.value : '';\r
  }\r
\r
  function assembleICal(calMethod, cleanedEvents) {\r
    const header = ['BEGIN:VCALENDAR', 'VERSION:2.0'];\r
    if (calMethod) header.push('METHOD:' + calMethod);\r
    const footer = ['END:VCALENDAR'];\r
\r
    let truncated = cleanedEvents.length > MAX_VEVENTS;\r
    const capped = cleanedEvents.slice(0, MAX_VEVENTS);\r
\r
    const lines = [...header];\r
    let usedEvents = 0;\r
    for (const evLines of capped) {\r
      const block = ['BEGIN:VEVENT', ...evLines, 'END:VEVENT'];\r
      const nextLineCount = lines.length + block.length + footer.length;\r
      const nextChars = [...lines, ...block, ...footer].join('\\r\\n').length + 2;\r
      if (nextLineCount > MAX_ICAL_LINES || nextChars > MAX_ICAL_CHARS) {\r
        truncated = true;\r
        break;\r
      }\r
      lines.push(...block);\r
      usedEvents++;\r
    }\r
    lines.push(...footer);\r
    return { text: lines.join('\\r\\n') + '\\r\\n', count: usedEvents, truncated };\r
  }\r
\r
  function filterICalText(text, mimeMethod) {\r
    const lines = unfoldIcalLines(text);\r
    let calMethod = '';\r
    const stack = [];\r
    let curEventProps = null;\r
    const veventsRaw = [];\r
\r
    for (const original of lines) {\r
      const line = original.length > 900 ? original.slice(0, 900) : original;\r
      const beginM = /^BEGIN:([A-Za-z0-9-]+)/i.exec(line);\r
      if (beginM) {\r
        const name = beginM[1].toUpperCase();\r
        // VCALENDAR itself isn't tracked: it's the document, not a component\r
        // to nest under, and "calendar-level" (stack empty) below means\r
        // exactly here — directly inside VCALENDAR, not inside anything else.\r
        if (name !== 'VCALENDAR') stack.push(name);\r
        if (name === 'VEVENT') curEventProps = [];\r
        continue;\r
      }\r
      const endM = /^END:([A-Za-z0-9-]+)/i.exec(line);\r
      if (endM) {\r
        const name = endM[1].toUpperCase();\r
        if (name === 'VEVENT' && stack[stack.length - 1] === 'VEVENT') {\r
          veventsRaw.push(curEventProps || []);\r
          curEventProps = null;\r
        }\r
        if (name !== 'VCALENDAR' && stack.length) stack.pop();\r
        continue;\r
      }\r
      const parentIsVEvent = stack[stack.length - 1] === 'VEVENT';\r
      if (!parentIsVEvent) {\r
        if (stack.length === 0 && /^METHOD[:;]/i.test(line)) {\r
          const v = line.slice(line.indexOf(':') + 1).trim().toUpperCase();\r
          if (/^[A-Z-]{1,20}$/.test(v)) calMethod = v;\r
        }\r
        continue;\r
      }\r
      if (!curEventProps) continue;\r
      const prop = parseICalLine(line);\r
      if (!prop || !VEVENT_PROP_ALLOW.has(prop.name)) continue;\r
      // Bounded well above the final per-VEVENT line cap: a hostile VEVENT\r
      // with thousands of ATTENDEEs must not grow this array unbounded.\r
      if (curEventProps.length < MAX_ICAL_LINES) curEventProps.push(prop);\r
    }\r
    // An unterminated VEVENT at EOF (missing END): keep what was parsed rather\r
    // than drop the whole message over one malformed line.\r
    if (curEventProps && curEventProps.length) veventsRaw.push(curEventProps);\r
\r
    if (!veventsRaw.length) return null;\r
\r
    const first = veventsRaw[0];\r
    const uid = (findValue(first, 'UID') || '').trim().slice(0, 255);\r
    const summary = sanitizeICalValue(findValue(first, 'SUMMARY') || '').slice(0, 120);\r
    const organizer = mailtoAddress(findValue(first, 'ORGANIZER') || '');\r
    const attendees = [];\r
    for (const p of first) {\r
      if (p.name !== 'ATTENDEE') continue;\r
      const email = mailtoAddress(p.value);\r
      if (email && !attendees.includes(email) && attendees.length < 20) attendees.push(email);\r
    }\r
\r
    const cleanedEvents = veventsRaw.map((props) => props.map(cleanICalProperty).filter(Boolean));\r
    const assembled = assembleICal(calMethod, cleanedEvents);\r
\r
    return {\r
      method: calMethod,\r
      mimeMethod: mimeMethod || '',\r
      uid,\r
      summary,\r
      organizer,\r
      attendees,\r
      count: assembled.count,\r
      truncated: assembled.truncated,\r
      text: assembled.text,\r
    };\r
  }\r
\r
  /* ---- record size ceiling ------------------------------------------------ */\r
\r
  function firstVeventOnly(icalText) {\r
    const start = icalText.indexOf('BEGIN:VEVENT');\r
    const end = icalText.indexOf('END:VEVENT');\r
    if (start === -1 || end === -1) return 'BEGIN:VCALENDAR\\r\\nVERSION:2.0\\r\\nEND:VCALENDAR\\r\\n';\r
    const inner = icalText.slice(start, end + 'END:VEVENT'.length);\r
    const methodLine = /METHOD:[A-Z-]+/.exec(icalText);\r
    const header = ['BEGIN:VCALENDAR', 'VERSION:2.0', ...(methodLine ? [methodLine[0]] : [])];\r
    return header.join('\\r\\n') + '\\r\\n' + inner + '\\r\\nEND:VCALENDAR\\r\\n';\r
  }\r
\r
  function shrinkToFit(record) {\r
    if (JSON.stringify(record).length <= MAX_RECORD_CHARS) return record;\r
    const noSnippet = { ...record, snippet: '' };\r
    if (JSON.stringify(noSnippet).length <= MAX_RECORD_CHARS) return noSnippet;\r
    const shrunk = { ...noSnippet, ical: firstVeventOnly(noSnippet.ical), events: 1, truncated: true };\r
    if (JSON.stringify(shrunk).length <= MAX_RECORD_CHARS) return shrunk;\r
    return null;\r
  }\r
\r
  /* ---- main flow ----------------------------------------------------------- */\r
\r
  let seenKey = null;\r
  let recordWritten = false;\r
\r
  async function markSeen() {\r
    if (!seenKey) return;\r
    await user.kv.set(seenKey, 1);\r
    await user.kv.expire(seenKey, SEEN_TTL);\r
  }\r
\r
  async function trimRecords() {\r
    const keys = await user.kv.list('cal:mail:inv:*'); // keys only — never flat-list with values\r
    if (!Array.isArray(keys) || keys.length <= MAX_RECORDS) return;\r
    const sorted = [...keys].sort();\r
    const toDelete = sorted.slice(0, sorted.length - MAX_RECORDS);\r
    for (const k of toDelete) {\r
      try {\r
        await user.kv.del(k);\r
      } catch {\r
        /* best-effort — a stray extra record is not worth failing the run over */\r
      }\r
    }\r
  }\r
\r
  try {\r
    if (!event || typeof event !== 'object') return;\r
\r
    if (event.op === 'gap') {\r
      const reason = typeof event.reason === 'string' ? event.reason.slice(0, 200) : '';\r
      await user.kv.set('cal:mail:gap', { at: Date.now(), reason });\r
      return;\r
    }\r
    if (event.op !== 'add') return;\r
    if (typeof event.path !== 'string' || event.path.indexOf('/.mail/objects/') === -1) return;\r
\r
    const path = event.path;\r
    const filename = path.slice(path.lastIndexOf('/') + 1);\r
    const id = idFromFilename(filename);\r
    if (!id) return; // not a mail object name we understand — nothing to get\r
\r
    // Keyed on the message id, not the path: a worker delivery and the\r
    // in-page rescan spell the same file's path differently, but both agree\r
    // on the id, so whichever sees a message first makes the other a no-op.\r
    const h = hash64(id);\r
    seenKey = 'cal:mail:seen:' + h;\r
    if (await user.kv.get(seenKey)) return; // redelivery, or an already-scanned message\r
\r
    // Files SCANNED and records WRITTEN are separate budgets, so a\r
    // mailbox full of newsletters can't starve the afternoon's invitations.\r
    const day = yyyymmdd(Date.now());\r
    const scanKey = 'cal:mail:scan:' + day;\r
    const scanned = await user.kv.incr(scanKey);\r
    await user.kv.expire(scanKey, 3 * 86400);\r
    if (scanned > MAX_SCANNED_PER_DAY) return;\r
\r
    const st = await user.fs.stat(path);\r
    const size = st ? Number(st.size) : NaN;\r
    if (Number.isFinite(size) && size > MAX_MESSAGE_BYTES) {\r
      await markSeen();\r
      return;\r
    }\r
\r
    let msg;\r
    try {\r
      msg = await user.email.get({ id });\r
    } catch (err) {\r
      if (err && err.code === 'not_found') {\r
        await markSeen(); // the file vanished between the fs event and the read\r
        return;\r
      }\r
      throw err; // let the outer catch apply the transient-vs-ignore policy\r
    }\r
\r
    const attachments = Array.isArray(msg.attachments) ? msg.attachments : [];\r
    const calendarTexts = [];\r
    for (const att of attachments) {\r
      if (calendarTexts.length >= MAX_CALENDAR_PARTS) break;\r
      if (!att) continue;\r
      const mimeType = String(att.mimeType || '').toLowerCase();\r
      const filenameAtt = String(att.filename || '');\r
      if (mimeType === 'text/calendar' || mimeType === 'application/ics' || /\\.(ics|ical)$/i.test(filenameAtt)) {\r
        calendarTexts.push(decodeAttachmentText(att));\r
      } else if (mimeType === 'application/octet-stream') {\r
        const text = decodeAttachmentText(att);\r
        if (looksLikeCalendarStart(text)) calendarTexts.push(text);\r
      }\r
    }\r
\r
    let filtered = null;\r
    for (const text of calendarTexts) {\r
      const f = filterICalText(text);\r
      if (f && f.count > 0) {\r
        filtered = f;\r
        break; // document order, first usable wins — not largest-first\r
      }\r
    }\r
    if (!filtered) {\r
      await markSeen(); // a normal, extremely common outcome — most mail isn't an invitation\r
      return;\r
    }\r
\r
    // Only a message that actually carries a usable invitation spends\r
    // the (much smaller) records-written budget — incremented right after a\r
    // calendar part is found, before anything is built or written.\r
    const dayKey = 'cal:mail:day:' + day;\r
    const n = await user.kv.incr(dayKey);\r
    await user.kv.expire(dayKey, 3 * 86400);\r
    if (n > MAX_PER_DAY) {\r
      await markSeen();\r
      return;\r
    }\r
\r
    const headers = Array.isArray(msg.headers) ? msg.headers : [];\r
    // Only the FIRST Authentication-Results header counts.\r
    const authHeader = headers.find((hd) => hd && hd.key === 'authentication-results');\r
    const hasAuthResults = Boolean(authHeader);\r
    const received = headers.some((hd) => hd && hd.key === 'received');\r
    const senderHeader = headers.find((hd) => hd && hd.key === 'sender');\r
\r
    // Identity is the From header — never the iCalendar ORGANIZER/ATTENDEE,\r
    // which the filter below still records, but only as event data, not as a\r
    // trust decision. Sender: is kept for display only.\r
    const fromEmail = normalizeEmail(msg.from && msg.from.address);\r
    const fromDomain = domainOf(fromEmail);\r
    const isPuterDomain = fromDomain === 'puter.email' || fromDomain === 'puterstaging.email';\r
    const authResults = parseAuthResults(authHeader && authHeader.value);\r
\r
    const from = { email: fromEmail, name: sanitizeText(msg.from && msg.from.name, 100) };\r
    const replyTo = normalizeEmail(msg.replyTo && msg.replyTo[0] && msg.replyTo[0].address);\r
    const sender = extractAddress(senderHeader && senderHeader.value);\r
    const subject = sanitizeText(msg.subject, 200);\r
    const date = parseDateMs(msg.date);\r
    const auth = {\r
      internal: isPuterDomain && !received && !hasAuthResults,\r
      dkim: authResults.dkim,\r
      dkimAligned: authResults.dkim === 'pass' && domainMatches(authResults.dkimDomain, fromDomain),\r
      spf: authResults.spf,\r
      received,\r
    };\r
\r
    let record = {\r
      v: RECORD_VERSION,\r
      at: Date.now(),\r
      file: { path: path.slice(0, 400), uid: String(event.uid || '').slice(0, 80) },\r
      from,\r
      replyTo,\r
      sender,\r
      subject,\r
      date,\r
      auth,\r
      method: filtered.method,\r
      mimeMethod: filtered.mimeMethod,\r
      uid: filtered.uid,\r
      summary: filtered.summary,\r
      organizer: filtered.organizer,\r
      attendees: filtered.attendees,\r
      events: filtered.count,\r
      truncated: filtered.truncated,\r
      snippet: sanitizeText(msg.text, 500), // msg.html is never read\r
      ical: filtered.text,\r
    };\r
\r
    record = shrinkToFit(record);\r
    if (!record) {\r
      await markSeen();\r
      return;\r
    }\r
\r
    const key = 'cal:mail:inv:' + ts36() + '-' + h.slice(0, 8);\r
    await user.kv.set(key, record);\r
    await user.kv.expire(key, RECORD_TTL);\r
    recordWritten = true;\r
\r
    await markSeen();\r
    await user.kv.set('cal:mail:tick', Date.now());\r
\r
    if (n % 20 === 0) await trimRecords();\r
  } catch (err) {\r
    if (recordWritten) return; // the record landed — ack, don't retry\r
    if (isTransientError(err)) throw err; // let the lease retry\r
    // Never terminal: anything else the handler can't use is ignored.\r
    try {\r
      await markSeen();\r
    } catch {\r
      /* best-effort */\r
    }\r
  }\r
}\r
`,Bc=`calendar-mail-v2`,Vc=`fs:~/.mail/objects/**:add`,Hc=`cal:mail:cfg`,Uc=`cal:mail:gap`,Wc=5*6e4,Gc=100,Kc=200,qc=3<<20,Jc=14*864e5;function Yc(e){if(e==null)return null;if(typeof e==`string`)try{return JSON.parse(e)}catch{return null}return e}function Xc(e){return e&&(e.code||e.error&&e.error.code)||``}function Zc(e){return e?typeof e==`string`?e:e.message||(typeof e.error==`string`?e.error:``)||``:``}function Qc(e){return e===`handler_not_found`||e===`failures`?`This needs the developer to republish the mail handler.`:e===`no_credit`?`Add credit to your Puter account to resume.`:e===`permission_revoked`?`Permission was revoked — reconnect to resume.`:e||`Paused.`}function $c({kv:e,store:t,user:n,getPuter:r=()=>typeof puter<`u`?puter:null,blocked:i=ir,source:a=zc,now:o=()=>Date.now()}){let s=null,c=`off`,l=``,u=``,d=0,f=null,p=null,m=new Set;function h(){for(let e of m)try{e()}catch{}}function g(){return n&&n.username||``}function _(){return n&&typeof n.email==`string`&&n.email.trim().toLowerCase()||``}function v(){let e=r();return!!(e&&e.events&&typeof e.events.onPersistent==`function`&&e.perms&&!i())}async function y(){return s=Yc(await e.get(Hc))||null,s}async function b(t){return s={v:1,mode:`off`,subId:``,handlerName:Bc,subject:Vc,watermark:``,...s,...t},await e.set(Hc,s),h(),s}function x(){if(p!==null)return p;try{p=Function(`return (
`+a+`
)`)()}catch{p=!1}return p}function S(){return{mode:s&&s.mode||`off`,state:c,subId:s&&s.subId||``,suspendedReason:l,lastError:u,watermark:s&&s.watermark||``,lastScanAt:d}}async function C(){return r().perms.request([{resource:`permission`,permission:`fs:/${g()}/.mail:read`,create:!0},{resource:`permission`,permission:`events:background`}])}async function w(){let e=r(),t=null;try{let n=await e.events.list();t=(Array.isArray(n)?n:[]).find(e=>e&&e.subject===`fs:~/.mail/objects/**:add`&&e.handlerName===`calendar-mail-v2`&&!e.suspendedAt)}catch{}if(t)return{subId:t.id||t.subId||``};let n=await e.events.onPersistent({subject:Vc,delivery:`single`,targets:[`worker`],handlerName:Bc,context:{v:1,self:_(),user:g()}});return{subId:n&&(n.id||n.subId)||``}}async function T(){let{subId:e}=await w();return await b({mode:`background`,subId:e,connectedAt:o(),lastError:``}),c=`ok`,u=``,h(),await j(),S()}async function E(e){return u=e||``,await b({mode:`foreground`,subId:``}),await j(),c=x()?`foreground`:`unavailable`,h(),S()}async function D(){if(u=``,l=``,!v())return c=`unavailable`,h(),S();c=`connecting`,h();try{let e=await C(),[t,n]=Array.isArray(e)?e:[e,e];if(!t)return u=`Calendar needs access to your Puter mailbox to detect invitations.`,c=`off`,await b({mode:`off`}),S();if(!n)return E(`Background permission was declined.`)}catch(e){let t=Xc(e);if(t===`events_disabled`)return u=`Not available on this Puter server.`,c=`off`,await b({mode:`off`}),S();if(t===`events_durable_requires_account`)return u=`Needs a full Puter account (not a temporary one).`,c=`off`,await b({mode:`off`}),S();if(t===`events_background_consent_required`)try{await r().perms.request({resource:`permission`,permission:`events:background`})}catch{return E(`Background permission was declined.`)}else if(t===`invalid_targets`)return E(`No app identity is available here.`);else return u=Zc(e)||`Could not request permission.`,c=`off`,h(),S()}try{return await T()}catch(e){let t=Xc(e);if(t===`subject_does_not_exist`)try{return await r().perms.request({resource:`permission`,permission:`fs:/${g()}/.mail:read`,create:!0}),await T()}catch(e){return u=Zc(e)||`Could not set up the mailbox.`,c=`off`,h(),S()}return t===`invalid_targets`?E(`No app identity is available here.`):t===`events_background_consent_required`?E(`Background permission was declined.`):t===`events_handler_not_found`||t===`events_handler_hash_mismatch`?(u=`The calendar's mail handler is not deployed.`,c=`off`,await b({mode:`off`}),S()):t===`events_subscription_limit`||t===`too_many_requests`?(u=`Too many requests — try again in a moment.`,c=`off`,h(),S()):(u=Zc(e)||`Could not connect.`,c=`off`,h(),S())}}async function O(){return D()}async function k(){let e=r(),t=s&&s.subId;if(t&&e&&e.events&&typeof e.events.unsubscribe==`function`)try{await e.events.unsubscribe(t)}catch{}await b({mode:`off`,subId:``}),c=`off`,l=``,h()}async function A(){if(await y(),!s||s.mode===`off`)return c=`off`,h(),S();if(s.mode===`foreground`)return await j(),c=x()?`foreground`:`unavailable`,h(),S();if(!v())return c=`unavailable`,h(),S();try{let e=await r().events.list(),t=(Array.isArray(e)?e:[]).find(e=>(e.id||e.subId)===s.subId);t&&t.suspendedAt?(l=Qc(t.suspendedReason),c=`suspended`):c=`ok`}catch{c=`ok`}return h(),await j(),S()}async function j({force:e=!1}={}){if(f)return f;if(!e&&o()-d<Wc)return;let t=x();if(!t){u=`Local scanning is unavailable.`,h();return}return f=M(t).finally(()=>{f=null}),f}async function M(t){let n=r(),i=n&&n.email;if(!i||typeof i.list!=`function`)return;d=o();let a=null;try{a=Yc(await e.get(Uc))}catch{}let c=!!a,l=c?``:s&&s.watermark||``,u=Object.freeze({v:1,self:_(),user:g()}),f=o()-Jc,p=0,m=l,h;for(;p<Kc;){let e;try{e=await i.list({limit:Gc,cursor:h})}catch{break}let r=Array.isArray(e&&e.items)?e.items:[],a=!1;for(let e of r){if(p>=Kc)break;if(!e||!e.id)continue;if(l&&e.id<=l){a=!0;break}let r=Date.parse(e.date);if(Number.isFinite(r)&&r<f){a=!0;break}p++,(!m||e.id>m)&&(m=e.id);let i=Number(e.size);if(!(Number.isFinite(i)&&i>qc))try{await t({event:{id:`scan-`+e.id,op:`add`,uid:e.uid,path:e.path,self:!0,ts:o()},ctx:u,user:n,fetch:typeof fetch<`u`?fetch:void 0,ack(){}})}catch{}}if(a||!e||!e.cursor)break;h=e.cursor}if(m&&m!==(s&&s.watermark||``)&&await b({watermark:m}),c)try{await e.del(Uc)}catch{}}return{start:A,status:S,connect:D,disconnect:k,reconnect:O,rescan:j,onChange(e){return typeof e==`function`?(m.add(e),()=>m.delete(e)):()=>{}},available:v}}var el=`cal:mail:senders`,tl=`cal:mail:corr`,nl=`@calendar.puter.com`,rl=864e5,il=60,al=50,ol=25,sl=60,cl=100,ll=200,ul=3e4,dl=8,fl=500,pl=100,ml=256*1024,hl=rl;function gl(e){if(e==null)return null;if(typeof e==`string`)try{return JSON.parse(e)}catch{return null}return e}function _l(e,t){let n=new Set,r=[];for(let i of e||[]){let e=typeof i==`string`?i.trim().toLowerCase():``;if(!(!e||n.has(e))&&(n.add(e),r.push(e),r.length>=t))break}return r}function vl({kv:e,store:t,mailbox:n,contacts:r=null,user:i,toast:a=u,blocked:o=ir,getPuter:s=()=>typeof puter<`u`?puter:null,onDetected:c=null}){let l=new Map,d=new Map,f=new Set,p=new Map,m={blocked:[],allowed:[],at:0},h=new Set,g=new Set,_={v:1,at:0,watermark:``,addresses:[]},v=new Set,y=!1,b=0,x=0,S=null,C=!1,w=null,T=new Set;function E(){for(let e of T)try{e()}catch{}}function D(){return i&&i.username||``}function O(){return i&&typeof i.email==`string`&&i.email.trim().toLowerCase()||``}async function k(){let t=gl(await e.get(el));return{blocked:_l(t&&t.blocked,cl),allowed:_l(t&&t.allowed,ll),at:t&&t.at||0}}async function A(t){let n;try{n=await k()}catch{n={blocked:m.blocked,allowed:m.allowed}}let r=t({blocked:_l([...m.blocked,...n.blocked],cl),allowed:_l([...m.allowed,...n.allowed],ll)});m={blocked:_l(r.blocked,cl),allowed:_l(r.allowed,ll),at:Date.now()},h=new Set(m.blocked),g=new Set(m.allowed),await e.set(el,m),E()}async function j(e){let t=String(e||``).trim().toLowerCase();t&&await A(e=>({blocked:[t,...e.blocked.filter(e=>e!==t)],allowed:e.allowed.filter(e=>e!==t)}))}async function M(e){let t=String(e||``).trim().toLowerCase();t&&await A(e=>({blocked:e.blocked,allowed:[t,...e.allowed.filter(e=>e!==t)]}))}function N(e,t){let n=String(t||``).trim().toLowerCase();return n?!!(e.from&&e.from.email===n):!1}function P(e){return e&&e.from&&e.from.email||``}function F(e,t,n){return I(P(e))?!0:n!==`CANCEL`&&n!==`COUNTER`?!1:!!(t&&t.uid&&z(t.uid))}function I(e){if(!e)return!1;if(g.has(e)||v.has(e)||r&&typeof r.knows==`function`&&r.knows(e))return!0;for(let n of t.getAllEvents()){if(n.invite){if(n.invite.from===e)return!0;continue}if(n.organizer&&n.organizer.email===e||Array.isArray(n.guests)&&n.guests.some(t=>t.email===e))return!0}return!1}function L(e){return!!(e.auth&&(e.auth.internal||e.auth.dkimAligned))}function ee(e,n){return o()||((t.getSettings()||{}).mailInvites||`known`)===`never`||!L(e)?!1:n}function R(e){let t=[];for(let n of[`to`,`cc`,`bcc`])for(let r of Array.isArray(e&&e[n])?e[n]:[]){let e=r&&typeof r.address==`string`?r.address.trim().toLowerCase():``;e&&t.push(e)}return t}async function te(){let t=gl(await e.get(tl));return{v:1,at:t&&t.at||0,watermark:t&&typeof t.watermark==`string`?t.watermark:``,addresses:_l(t&&t.addresses,fl)}}async function ne(){if(y)return;y=!0;let t=s();if(!(!t||!t.email||typeof t.email.list!=`function`||typeof t.email.get!=`function`)&&!(Date.now()-(_.at||0)<hl))try{let n=await t.email.list({folder:`sent`,limit:pl}),r=Array.isArray(n&&n.items)?n.items:[],i=_.watermark||``,a=i,o=[];for(let e of r)if(!(!e||typeof e.id!=`string`)&&!(i&&e.id<=i)&&(e.id>a&&(a=e.id),!(Number.isFinite(e.size)&&e.size>ml)))try{o.push(...R(await t.email.get({id:e.id,folder:`sent`})))}catch{}let s=_l([...o,..._.addresses],fl);_={v:1,at:Date.now(),watermark:a,addresses:s},v=new Set(s),await e.set(tl,_)}catch{}}function z(e){if(!e)return null;if(e.endsWith(nl)){let n=t.getEvent(e.slice(0,-19));if(n)return n}return t.getAllEvents().find(t=>t.invite&&t.invite.uid===e)||null}function B(e){try{return di(String(e||``))}catch{return null}}function V(e,t){return e.method?e.method:t&&t.organizer&&t.attendees&&t.attendees.length?`REQUEST`:``}function H(e){let t=D()?`${D()}@puter.email`:``,n=Array.isArray(e.attendees)?e.attendees:[];if(t&&n.includes(t))return t;let r=O();return r&&n.includes(r)?r:t}function re(e,t){let n=new Map((e||[]).map(e=>[e.email,e])),r=[];for(let e of t||[]){let t=n.get(e.email);if(t)r.push(e.name?{...t,name:e.name}:t);else{let t={email:e.email,status:e.status||`needs-action`};e.name&&(t.name=e.name),r.push(t)}}return r}function U(e,t){if(!t||!t.invite)return!1;let n=t.invite.from||t.organizer&&t.organizer.email||``;return!!n&&N(e,n)}async function ie(e,n,r,i=``,{forceNew:o=!1}={}){let s=n.uid;if(!s)return!1;let c=P(e),l={uid:s,seq:n.sequence,stamp:n.dtstamp,from:c,attendee:H(e)},u=z(s),d=u&&U(e,u)?u:null;if(u&&!d&&!o)return null;let f=d&&d.invite&&d.invite.seq||0,p=d&&d.invite&&d.invite.stamp||0,m=n.sequence>f||n.sequence===f&&n.dtstamp>p;if(d&&d.recurrence&&n.recurrenceId){let e=K(d,n.recurrenceId.ms);if(e!=null){if(!m)return d;let r=await t.updateOccurrence(d.id,e,{title:n.event.title,description:n.event.description,location:n.event.location,allDay:n.event.allDay,start:n.event.start,end:n.event.end});if(r)return r.event}if(!o)return null;d=null}if(!d){let e={title:n.event.title,description:n.event.description,location:n.event.location,allDay:n.event.allDay,start:n.event.start,end:n.event.end,recurrence:n.event.recurrence||null,exdates:n.event.exdates||[]};u||(e.invite=l),r===`REQUEST`?(e.organizer=n.organizer||null,n.attendees&&n.attendees.length&&(e.guests=n.attendees.map(e=>e.name?{email:e.email,name:e.name,status:e.status}:{email:e.email,status:e.status}))):(e.organizer=null,e.guests=[]);let o=await t.saveEvent(e);return a(`Added "${o.title||`(No title)`}" from ${c}`,{action:{label:`Undo`,onClick:()=>W(o.id,i)}}),o}if(!m)return d;let h={id:d.id,title:n.event.title,description:n.event.description,location:n.event.location,allDay:n.event.allDay,start:n.event.start,end:n.event.end,invite:l};return n.recurrenceId||(h.recurrence=n.event.recurrence||null,h.exdates=n.event.exdates||[]),r===`REQUEST`&&(h.organizer=n.organizer||d.organizer,h.guests=re(d.guests,n.attendees)),t.saveEvent(h)}async function W(n,r){n&&await t.deleteEvent(n);let i=p.get(r);if(!i)return!1;p.delete(r),f.delete(r),l.set(r,i),d.set(r,J(r,i.record,i.item,i.method,i.known));try{await e.set(r,i.record)}catch{}return E(),!0}function G(e,t){if(!t||!L(e))return!1;let n=t.organizer&&t.organizer.email||t.invite&&t.invite.from||``;return n?N(e,n):!1}function K(e,t){if(!e||!e.recurrence||!Number.isFinite(t))return null;if(vt(e,t))return t;let n=new Date(t);n.setHours(0,0,0,0);let r=n.getTime(),i=r+rl,a=gt(e,r-rl,i+rl),o=[...new Set(a.map(e=>e.recurrenceId).filter(e=>Number.isFinite(e)&&e>=r&&e<i))];return o.length===1?o[0]:null}async function ae(e,n){if(o())return!1;let r=n.uid?z(n.uid):null;if(!G(e,r))return!1;if(n.recurrenceId&&r.recurrence){let e=K(r,n.recurrenceId.ms);if(e==null)return!1;let i=n.recurrenceRange===`THISANDFUTURE`?await t.deleteFuture(r.id,e):await t.deleteOccurrence(r.id,e);return i?(a(`Cancelled an occurrence of "${r.title||`(No title)`}"`,{action:{label:`Undo`,onClick:()=>i.undo()}}),!0):!1}let i=await t.deleteEvent(r.id);return i?(a(`Cancelled "${i.title||`(No title)`}"`,{action:{label:`Undo`,onClick:()=>t.saveEvent(i)}}),!0):!1}function q(e){let t=z(e);if(!t)return null;let n=O();return!t.organizer||n&&t.organizer.email===n?t:null}function oe(e){if(!e||!e.endsWith(nl))return null;let n=t.getEvent(e.slice(0,-19));if(!n)return null;let r=O();return!n.organizer||r&&n.organizer.email===r?n:null}async function se(e,n){if(o()||!L(e))return!1;let r=n.uid?q(n.uid):null;if(!r)return!1;let i=(n.attendees||[]).find(t=>N(e,t.email));return!i||!(r.guests||[]).some(e=>e.email===i.email)?!1:(await t.applyRsvpResponses(r.id,[{email:i.email,status:i.status,respondedAt:n.dtstamp||Date.now()}]),!0)}function J(e,n,r,i,a=!0){let o=i===`CANCEL`?`cancel`:i===`COUNTER`?`counter`:i===`PUBLISH`?`publish`:`request`,s=``;o===`cancel`?s=`Cancellation`:o===`counter`?s=`Proposed time`:a?n.auth&&n.auth.internal&&(s=`Puter user`):s=`Unknown sender`;let c=``;try{r&&r.event&&Number.isFinite(r.event.start)&&Number.isFinite(r.event.end)&&(c=Ki(r.event,{hour12:(t.getSettings()||{}).hour12!==!1}))}catch{c=``}let l=r.uid?z(r.uid):null,u=o!==`cancel`||!!(l&&G(n,l)),d=o!==`cancel`&&!!l&&!U(n,l);return{id:e,kind:o,action:o===`cancel`?`Remove event`:o===`counter`||d?`Add as new`:`Add`,canApply:u,blockedReason:o===`cancel`&&!u?l?`Not from the organizer of that event.`:`No matching event on this calendar.`:d?`Conflicts with an existing event — this will be added separately.`:``,title:r&&r.event&&r.event.title||n.summary||``,whenText:c,start:r&&r.event?r.event.start:null,end:r&&r.event?r.event.end:null,allDay:!!(r&&r.event&&r.event.allDay),fromEmail:P(n),fromName:n.from&&n.from.name||``,hint:s,authenticated:L(n),known:!!a,at:n.at||0}}async function Y(t){let n=l.get(t);n&&(p.set(t,n),p.size>dl&&p.delete(p.keys().next().value)),l.delete(t),d.delete(t),f.add(t);try{await e.del(t)}catch{}}async function ce(e,t,{autoApply:n=!0}={}){if(t&&t.v!==1)return await Y(e),!1;let r=P(t);if(r&&h.has(r))return await Y(e),!1;let i=B(t.ical),a=i&&i.items||[],o=a.find(e=>e.uid&&!e.recurrenceId)||a.find(e=>e.uid)||a[0]||null;if(!o)return await Y(e),!1;let s=V(t,o);if(s===`REPLY`){try{await se(t,o)}catch{}return await Y(e),!1}if(!s||![`REQUEST`,`PUBLISH`,`CANCEL`,`COUNTER`].includes(s))return await Y(e),!1;if(s===`COUNTER`){let n=F(t,o,s);return l.set(e,{record:t,item:o,method:s,known:n}),d.set(e,J(e,t,o,s,n)),!1}if(s===`CANCEL`){if(n&&await ae(t,o).catch(()=>!1))return await Y(e),!0;let r=F(t,o,s);return l.set(e,{record:t,item:o,method:s,known:r}),d.set(e,J(e,t,o,s,r)),!1}if(s===`REQUEST`&&oe(o.uid))return await Y(e),!1;let c=I(r);if(n&&ee(t,c))try{if(await ie(t,o,s,e))return await Y(e),!0}catch{}return l.set(e,{record:t,item:o,method:s,known:c}),d.set(e,J(e,t,o,s,c)),!1}async function le(){if(!o())return S||(S=de().finally(()=>{S=null}),S)}function X(){return!!(t.getSettings()||{}).mailInvitesShowUnknown}function ue(){let e=X(),t=new Set;for(let[n,r]of d)(r.known||e)&&t.add(n);return t}async function de(){let t=!C;C=!0,t||await ne();let n=ue(),r;try{r=await e.list(`cal:mail:inv:*`)}catch{return}if(!Array.isArray(r))return;let i=r.filter(e=>typeof e==`string`&&!f.has(e)).sort().reverse().slice(0,il),a=0;for(let t of i){if(f.has(t)||l.has(t))continue;let n;try{n=gl(await e.get(t))}catch{continue}if(!n){f.add(t);continue}await ce(t,n,{autoApply:!(a>=ol||b>=sl)})&&(a++,b++)}let o=[...ue()].filter(e=>!n.has(e)).length;if(E(),o&&!t&&typeof c==`function`)try{c(o)}catch{}}function fe(){let e=X();return[...d.values()].filter(t=>t.known||e).sort((e,t)=>t.at-e.at).slice(0,al)}async function pe(e){let n=l.get(e);if(!n)return!1;let{record:r,item:i,method:a}=n,o=P(r);try{if(a===`COUNTER`)await t.saveEvent({title:i.event.title||r.summary||``,description:i.event.description,location:i.event.location,allDay:i.event.allDay,start:i.event.start,end:i.event.end});else if(a===`CANCEL`){let e=i.uid?z(i.uid):null;if(e&&G(r,e))if(i.recurrenceId&&e.recurrence){let n=K(e,i.recurrenceId.ms);n!=null&&(i.recurrenceRange===`THISANDFUTURE`?await t.deleteFuture(e.id,n):await t.deleteOccurrence(e.id,n))}else await t.deleteEvent(e.id)}else if(!await ie(r,i,a,e,{forceNew:!0}))return!1}catch(e){throw E(),e}return o&&await M(o),await Y(e),E(),!0}async function me(e){return l.has(e)?(await Y(e),E(),!0):!1}async function he(e){let t=l.get(e);if(!t)return!1;let n=P(t.record);n&&await j(n);for(let[e,t]of[...l.entries()]){let r=P(t.record);r&&r===n&&await Y(e)}return E(),!0}async function ge(e){let t=String(e||``).trim().toLowerCase();t&&await A(e=>({blocked:e.blocked.filter(e=>e!==t),allowed:e.allowed}))}function _e(){return[...m.blocked]}function ve(){if(typeof document>`u`||document.visibilityState!==`visible`)return;let e=Date.now();e-x<ul||(x=e,le())}function ye(){let e=(n&&typeof n.status==`function`&&n.status().mode||`off`)===`background`;if(e!==!!w){if(!e){try{w.off()}catch{}w=null;return}try{let e=s(),t=e&&e.appID;if(!t||!e.events||typeof e.events.onLocal!=`function`)return;let n=e.events.onLocal(`kv:${t}:cal:mail:tick`,()=>le());w=n&&typeof n.then==`function`?{off:()=>n.then(e=>e.off())}:n}catch{}}}async function be(){try{m=await k(),h=new Set(m.blocked),g=new Set(m.allowed)}catch{}try{_=await te(),v=new Set(_.addresses)}catch{}if(ye(),n&&typeof n.onChange==`function`)try{n.onChange(()=>{ye(),le()})}catch{}typeof document<`u`&&typeof document.addEventListener==`function`&&document.addEventListener(`visibilitychange`,ve),await le()}function xe(){return!!(n&&typeof n.available==`function`&&n.available())}return{start:be,pump:le,getPending:fe,accept:pe,ignore:me,blockSender:he,unblock:ge,undoAdd:W,getBlocked:_e,onChange(e){return typeof e==`function`?(T.add(e),()=>T.delete(e)):()=>{}},available:xe}}var yl={accepted:`Accepted`,declined:`Declined`,tentative:`Tentative`},bl={accepted:`has accepted this invitation.`,declined:`has declined this invitation.`,tentative:`has tentatively accepted this invitation.`},xl=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/`;function Sl(e){return typeof e==`string`?e.trim().toLowerCase():``}function Cl(e){let t=``;for(let n=0;n<e.length;n+=3){let r=e[n],i=e[n+1],a=e[n+2];t+=xl[r>>2],t+=xl[(r&3)<<4|(i||0)>>4],t+=i===void 0?`=`:xl[(i&15)<<2|(a||0)>>6],t+=a===void 0?`=`:xl[a&63]}return t}function wl(e,t){let n=String(t??``).replace(/[^\x20-\x7e]+/g,`?`).trim().slice(0,200),r=/[^\s?]/.test(n)?n:`invitation`;return`${yl[e]}: ${r}`}function Tl(){try{return Intl.DateTimeFormat().resolvedOptions().timeZone||``}catch{return``}}function El(e,t){let n=(Array.isArray(e&&e.guests)?e.guests:[]).find(e=>Sl(e&&e.email)===t);return n&&n.name||``}function Dl(e,t){let n=t&&t.error||``;return e===401||n===`sign_in_required`?`Sign in to Puter again to send your reply.`:e===429||n===`daily_limit`?`You've reached today's email limit. Try again tomorrow.`:e===403||n===`attendee_mismatch`?`Sign in to Puter again — this reply would not be sent from your account.`:e===404||n===`invalid_ics`?`The email service needs an update before it can send your reply.`:`Could not send the reply. Please try again.`}function Ol(e){return e===`offline`?`you're offline.`:e===`unavailable`||e===`none`?`sending is not available right now.`:e===`no_organizer`?`this event has no organizer to reply to.`:e===`no_self_email`?`your email address could not be confirmed.`:e===`ics_failed`?`the reply could not be prepared.`:typeof e==`string`&&e.trim()?e:`please try again.`}function kl(e){return e?e.sent?{message:`Reply sent to ${e.organizerEmail}`,variant:`success`}:{message:`Saved. The reply email could not be sent — ${Ol(e.reason)}`,variant:`danger`}:{message:`Could not send the reply.`,variant:`danger`}}function Al({store:e,user:t,getPuter:n=()=>typeof puter<`u`?puter:null,workerUrl:r=zi,blocked:i=ir,toast:a=u,requestUser:o=h,requestEmail:s=g}){let c=Sl(t&&t.email),l=t&&t.username||``;async function d(){if(!c||!l)try{let e=await o();e&&(l=l||e.username||``,c=c||Sl(e.email))}catch{}if(!c)try{c=Sl(await s())}catch{}return{email:c,username:l}}function f(){let e=n();if(!e)return!1;let t=!!(e.email&&typeof e.email.send==`function`),r=!!(e.workers&&typeof e.workers.exec==`function`);return t||r}async function p(e,t){try{if(!e||!e.perms||typeof e.perms.request!=`function`||!t)return;await e.perms.request(`permission`,{permission:`fs:/${t}/.mail:write`,create:!0})}catch{}}function m(e,t){return(e&&Array.isArray(e.delivered)?e.delivered:[]).some(e=>Sl(e)===t)}async function _(e,t,n,r=!1){let i;try{i=await e.email.send(t)}catch{return{ok:!1,fallback:!0,reason:`send_error`}}if(m(i,Sl(t.to)))return{ok:!0,body:i};let a=i&&i.code;return a===`forbidden`&&!r?(await p(e,n),_(e,t,n,!0)):a===`too_many_requests`?{ok:!1,fallback:!1,reason:`You've reached today's email limit. Try again tomorrow.`}:{ok:!1,fallback:!0,reason:a||`unknown`}}function v(e){let{message:t,variant:n}=kl(e);return a(t,{variant:n}),e}function y(e){return e.invite&&typeof e.invite.uid==`string`&&e.invite.uid||``}function b(e,t,{organizer:n}={}){let r=n||e&&e.organizer,a=Sl(r&&r.email);!a||!e||i()||!f()||jl({email:a,onConfirm:()=>{x({...e,organizer:r},t)}})}async function x(t,a){if(!yl[a])throw Error(`Unknown RSVP status.`);let o=t&&t.organizer,s=Sl(o&&o.email);if(!s)return v({ok:!1,sent:!1,reason:`no_organizer`,organizerEmail:``});if(i())return v({ok:!1,sent:!1,reason:`offline`,organizerEmail:s});if(!f())return v({ok:!1,sent:!1,reason:`unavailable`,organizerEmail:s});let c=await d();if(!c.username)return v({ok:!1,sent:!1,reason:`no_self_email`,organizerEmail:s});let l=(t.invite&&typeof t.invite.attendee==`string`?Sl(t.invite.attendee):``)||c.email||`${c.username}@puter.email`,u=t.title||`(No title)`,p=Ki(t,{hour12:e.getSettings().hour12!==!1}),m=El(t,l)||c.username,h=t.id,g=y(t),b=t.invite&&Number.isFinite(t.invite.seq)?t.invite.seq:0,x=``;try{x=ai([{id:h,title:t.title,start:t.start,end:t.end,allDay:!!t.allDay,organizer:{email:s,name:o.name||``},guests:[{email:l,name:m,status:a}]}],{method:`REPLY`,tzid:Tl(),sequence:b,uid:g})}catch{return v({ok:!1,sent:!1,reason:`ics_failed`,organizerEmail:s})}let S=n(),C=wl(a,u),w=[`${m||l} ${bl[a]}`,``,u,...p?[p]:[]].join(`
`),T={ok:!1,fallback:!0,reason:`unavailable`};if(S.email&&typeof S.email.send==`function`&&(T=await _(S,{to:s,subject:C,text:w,attachments:[{filename:`reply.ics`,content:Cl(new TextEncoder().encode(x)),contentType:`text/calendar; charset=utf-8; method=REPLY`}]},c.username)),T.ok)return v({ok:!0,sent:!0,method:`api`,organizerEmail:s,data:T.body});if(!T.fallback)return v({ok:!1,sent:!1,method:`api`,reason:T.reason,organizerEmail:s});if(!S.workers||typeof S.workers.exec!=`function`)return v({ok:!1,sent:!1,method:`none`,reason:T.reason,organizerEmail:s});let E=Wi([h,a,s,u,p]),D;try{let e=await S.workers.exec(`${r}/replies`,{method:`POST`,headers:{"content-type":`application/json`},body:JSON.stringify({event:{id:h,title:u,when:p,organizerEmail:s,organizerName:o.name||``},attendee:{email:l,name:m},partstat:a,ics:x,version:E})}),t=await e.json().catch(()=>null);D=e.ok&&t&&t.ok?{ok:!0,data:t}:{ok:!1,reason:Dl(e.status,t)}}catch{D={ok:!1,reason:`Could not send the reply. Please try again.`}}return D.ok?v({ok:!0,sent:!0,method:`worker`,organizerEmail:s,data:D.data}):v({ok:!1,sent:!1,method:`worker`,reason:D.reason,organizerEmail:s})}return{available:f,offerReply:b,sendReply:x,describeResult:kl}}function jl({email:t,onConfirm:n}){let r=e(`form`,{class:`modal rr-modal invite-ask`,role:`dialog`,"aria-modal":`true`,"aria-labelledby":`mail-reply-title`},[e(`div`,{class:`modal__head`},[e(`h2`,{class:`modal__title`,id:`mail-reply-title`,text:`Send your answer by email?`})]),e(`div`,{class:`modal__body`},[e(`p`,{text:`Email your answer to ${t}?`})]),e(`div`,{class:`modal__foot`},[e(`div`,{class:`spacer`}),e(`button`,{class:`btn`,type:`button`,text:`Don't send`,on:{click:()=>i()}}),e(`button`,{class:`btn btn--primary`,type:`submit`,text:`Send`})])]);r.addEventListener(`submit`,e=>{e.preventDefault(),i(),n()});let i=Jr(r);requestAnimationFrame(()=>r.querySelector(`.btn--primary`).focus())}var Ml=`calendar-api`,Nl=[`calendar-api`],Pl=[`ping`,`list`,`search`,`get`,`create`,`update`,`delete`],Fl=[`meeting`,`location`,`description`,`guests`,`reminders`,`organizer`],Il={contacts:[`ping`,`search`,`create`,`update`,`delete`],meetings:{methods:[`ping`,`list`],has:[`meeting`]}},$={FORBIDDEN:`forbidden`,UNKNOWN_METHOD:`unknown_method`,BAD_REQUEST:`bad_request`,NOT_FOUND:`not_found`,INVALID:`invalid`,STORAGE:`storage_error`,VERSION:`unsupported_version`},Ll=class extends Error{constructor(e,t,n){super(t||e),this.name=`ApiError`,this.code=e,n&&(this.details=n)}};function Rl(e,t){let n=String(e||``);return Object.prototype.hasOwnProperty.call(t,n)?t[n]:void 0}function zl(e,t=Il){let n=Rl(e,t);return n&&typeof n==`object`&&!Array.isArray(n)&&(n=n.methods),n===`*`?[...Pl]:Array.isArray(n)?n.filter(e=>Pl.includes(e)):[]}function Bl(e,t=Il){let n=Rl(e,t);if(!n||typeof n!=`object`||Array.isArray(n))return null;let r=Array.isArray(n.has)?[...new Set(n.has.map(e=>String(e).trim()).filter(Boolean))]:[];return r.length?{has:r}:null}function Vl(e=typeof window<`u`?window:void 0){let t={callerApp:``,serviceMode:!1,inPuterApp:!1};if(!e)return t;let n=e.puter,r=!!(n&&n.env===`app`);if(!r)return t;let i=``;try{i=(new URLSearchParams(e.location.search).get(`puter.source_app.name`)||``).trim().toLowerCase()}catch{}let a=n&&n.args||{};return{callerApp:i,serviceMode:Nl.includes(a.service),inPuterApp:r}}function Hl(e){return!!(e&&typeof e==`object`&&e.$===`calendar-api`&&typeof e.method==`string`&&typeof e.id==`string`)}var Ul=864e5,Wl=31*Ul,Gl=400*Ul,Kl=864e13,ql=100,Jl=500,Yl=50,Xl=1e4,Zl=15e3,Ql=[`title`,`description`,`location`,`start`,`end`,`allDay`,`color`,`reminders`,`guests`,`organizer`,`recurrence`],$l=[`title`,`description`,`location`,`start`,`end`,`allDay`,`color`,`reminders`],eu=`::`;function tu(e){return typeof e==`string`?e:e==null?``:String(e)}var nu={meeting:e=>!!(e.meeting&&e.meeting.url),location:e=>!!tu(e.location).trim(),description:e=>!!tu(e.description).trim(),guests:e=>Array.isArray(e.guests)&&e.guests.length>0,reminders:e=>Array.isArray(e.reminders)&&e.reminders.length>0,organizer:e=>!!(e.organizer&&tu(e.organizer.email).trim())};function ru(e){if(e==null||e===``)return[];let t=Array.isArray(e)?e:[e],n=[];for(let e of t){let t=tu(e).trim();if(t){if(!Fl.includes(t))throw new Ll($.BAD_REQUEST,`\`has\` names an unknown field "${t}" (one of: ${Fl.join(`, `)})`);n.includes(t)||n.push(t)}}return n}function iu(e){let t=e.map(e=>nu[e]||(()=>!1));return e=>t.every(t=>t(e))}function au(e,t,n){let r=Number(e);return!Number.isFinite(r)||r<=0?t:Math.min(Math.floor(r),n)}var ou=e=>tu(e).trim().toLowerCase();function su(e){let t={};if(!e||typeof e!=`object`)return t;for(let n of Ql)e[n]!==void 0&&(t[n]=e[n]);return t}function cu({from:e,to:t}={},n){let r=e=>{if(typeof e==`number`)return Number.isFinite(e)?e:void 0;if(typeof e==`string`&&e.trim()!==``&&Number.isFinite(Number(e)))return Number(e)},i=r(e),a=r(t),o=i===void 0?n:Math.round(i),s=a===void 0?o+Wl:Math.round(a);if(s<=o)throw new Ll($.BAD_REQUEST,"`to` must be after `from`");if(Math.abs(o)>Kl||Math.abs(s)>Kl)throw new Ll($.BAD_REQUEST,"`from` and `to` must be within the range a date can hold");return s-o>Gl&&(s=o+Gl),{from:o,to:s}}function lu(e){if(e==null||e===``)return null;let t=Array.isArray(e)?e:[e],n=new Set;for(let e of t){let t=ou(e);if(t&&n.add(t),n.size>=Yl)break}return n.size?n:null}function uu(e){let t={id:e.id,title:e.title||``,description:e.description||``,location:e.location||``,start:e.start,end:e.end,allDay:!!e.allDay,color:e.color,reminders:[...e.reminders||[]],organizer:e.organizer||null,guests:(e.guests||[]).map(e=>({...e})),declined:!!e.declined,recurring:!!(e.recurrence||e.seriesId),createdAt:e.createdAt,updatedAt:e.updatedAt};return e.seriesId&&(t.seriesId=e.seriesId,t.recurrenceId=e.recurrenceId),e.recurrence&&(t.recurrence={...e.recurrence}),e.ooo&&(t.ooo=!0),e.meeting&&e.meeting.url&&(t.meeting={...e.meeting}),t}function du(e){let t=(e.guests||[]).map(e=>`${e.name||``} ${e.email||``}`).join(` `),n=e.organizer?`${e.organizer.name||``} ${e.organizer.email||``}`:``;return`${e.title||``}\n${e.location||``}\n${e.description||``}\n${t}\n${n}`.toLowerCase()}function fu(e,t){return e.organizer&&t.has(ou(e.organizer.email))?!0:(e.guests||[]).some(e=>t.has(ou(e.email)))}function pu(e,t){return e.start-t.start||Number(t.allDay)-Number(e.allDay)||e.end-t.end}function mu({store:e,scope:t=null,now:n=()=>Date.now(),freshMs:r=Xl,retryAfterMs:i=Zl}){let a=0,o=null,s=0,c=t&&Array.isArray(t.has)?t.has.map(tu).filter(Boolean):[],l=c.length?iu(c):()=>!0;function u(t,n){let r=e.getEventsInRange(t.from,t.to,{includeHidden:!0}),i=[...new Set([...c,...ru(n)])];return i.length?r.filter(iu(i)):r}async function d(){if(a&&n()-a<r)return;let t=a>0;if(!(t&&s&&n()-s<i)){o||(o=Promise.resolve(e.load()).then(()=>{a=n(),s=0},e=>{throw s=n(),e}).finally(()=>{o=null}));try{await o}catch(e){if(t)return;throw new Ll($.STORAGE,`Could not read the calendar: ${e.message}`)}}}function f(){a=n()}function p(t,{scoped:n=!0}={}){let r=e.getEvent(tu(t).trim());if(!r||n&&!l(r))throw new Ll($.NOT_FOUND,`No event with id "${tu(t)}"`);return r}function m(e){let t=tu(e).trim(),n=t.indexOf(eu);if(n===-1)return null;let r=t.slice(0,n),i=t.slice(n+2).trim(),a=i?Number(i):NaN;return!r||!Number.isFinite(a)?null:{seriesId:r,recurrenceId:a}}function h(e,{requireStart:t}){if(t&&e.start===void 0)throw new Ll($.BAD_REQUEST,"`start` is required (epoch milliseconds)");for(let t of[`start`,`end`]){if(e[t]!==void 0&&!Number.isFinite(e[t]))throw new Ll($.INVALID,`\`${t}\` must be epoch milliseconds`);if(e[t]!==void 0&&Math.abs(e[t])>Kl)throw new Ll($.INVALID,`\`${t}\` must be within the range a date can hold`)}if(e.guests!==void 0&&!Array.isArray(e.guests))throw new Ll($.INVALID,"`guests` must be an array of { email, name? }");if(e.recurrence!==void 0&&e.recurrence!==null){let t=Number.isFinite(e.start)?e.start:n();if(!nt(e.recurrence,t))throw new Ll($.INVALID,"`recurrence.freq` must be one of daily, weekly, monthly, yearly")}}async function g(e,t){try{let t=await e();return f(),t}catch(e){throw new Ll($.STORAGE,`Could not ${t}: ${e.message}`)}}return{async ping(){return{app:`calendar`,methods:[...Pl],time:n()}},async list({from:e,to:t,has:r,limit:i}={}){await d();let a=cu({from:e,to:t},n()),o=u(a,r).sort(pu),s=au(i,ql,Jl);return{events:o.slice(0,s).map(uu),total:o.length,from:a.from,to:a.to}},async search({query:e,guest:t,from:r,to:i,has:a,limit:o}={}){await d();let s=tu(e).trim().toLowerCase(),c=lu(t);if(!s&&!c)throw new Ll($.BAD_REQUEST,"Pass `query`, `guest`, or both");let l=cu({from:r,to:i},n()),f=u(l,a).filter(e=>(!c||fu(e,c))&&(!s||du(e).includes(s))).sort(pu),p=au(o,ql,Jl);return{events:f.slice(0,p).map(uu),total:f.length,from:l.from,to:l.to}},async get({id:e}={}){if(await d(),!tu(e).trim())throw new Ll($.BAD_REQUEST,"`id` is required");return{event:uu(p(e))}},async create({event:t}={}){await d();let n=su(t);if(!Object.keys(n).length)throw new Ll($.BAD_REQUEST,"`event` is required");if(h(n,{requireStart:!0}),!l(Wn(n)))throw new Ll($.FORBIDDEN,`This app may only add events that have: ${c.join(`, `)}`);return{event:uu(await g(()=>e.saveEvent({...n,id:void 0}),`save the event`))}},async update({id:t,patch:n}={}){if(await d(),!tu(t).trim())throw new Ll($.BAD_REQUEST,"`id` is required");let r=p(t),i=su(n);if(!Object.keys(i).length)throw new Ll($.BAD_REQUEST,"`patch` must set at least one field");h(i,{requireStart:!1});let a=m(t);if(a){let n=Object.keys(i).filter(e=>!$l.includes(e));if(n.length)throw new Ll($.BAD_REQUEST,`${n.map(e=>`\`${e}\``).join(`, `)} belongs to the whole series — patch \`${a.seriesId}\` instead`);if(!await g(()=>e.updateOccurrence(a.seriesId,a.recurrenceId,i),`save the occurrence`))throw new Ll($.NOT_FOUND,`No event with id "${tu(t)}"`);return{event:uu(p(t,{scoped:!1}))}}if(r.recurrence){let n={...i};`start`in n!=`end`in n&&(`start`in n||(n.start=r.start),`end`in n||(n.end=r.end));let a=await g(()=>e.updateSeries(r.id,n),`save the event`);if(!a)throw new Ll($.NOT_FOUND,`No event with id "${tu(t)}"`);return{event:uu(a.event)}}return{event:uu(await g(()=>e.saveEvent({...r,...i,id:r.id}),`save the event`))}},async delete({id:t}={}){if(await d(),!tu(t).trim())throw new Ll($.BAD_REQUEST,"`id` is required");let n=p(t),r=m(t);if(r){if(!await g(()=>e.deleteOccurrence(r.seriesId,r.recurrenceId),`cancel the occurrence`))throw new Ll($.NOT_FOUND,`No event with id "${tu(t)}"`);return{deleted:!0,id:n.id,scope:`occurrence`}}return await g(()=>e.deleteEvent(n.id),`delete the event`),{deleted:!0,id:n.id,scope:`event`}}}}var hu=250;function gu({connection:e,callerApp:t,methods:n,scope:r=null,allowed:i=Il,subscribe:a=null,revision:o=null,onActivity:s=null}){if(!e||typeof e.postMessage!=`function`)return null;let c=zl(t,i);if(!c.length)return null;let l=new Set(c);function u(t,n){e.postMessage({$:Ml,v:1,id:t,...n})}function d(e,t,n,r){u(e,{ok:!1,error:r?{code:t,message:n,details:r}:{code:t,message:n}})}function f(e){if(s)try{s(e)}catch{}}async function p(e){let{id:t,method:r}=e;if(e.v!==void 0&&e.v!==1){d(t,$.VERSION,`This app speaks calendar-api v1`);return}if(!l.has(r)||typeof n[r]!=`function`){d(t,$.UNKNOWN_METHOD,`"${r}" is not available to this app`);return}let i=e.params&&typeof e.params==`object`?e.params:{};f(r);try{let e=await n[r](i);r===`ping`&&e&&typeof e==`object`&&`methods`in e&&(e={...e,methods:[...c]}),u(t,{ok:!0,result:e})}catch(e){e instanceof Ll?d(t,e.code,e.message,e.details):(console.error(`[calendar-api]`,r,e),d(t,$.STORAGE,`The request could not be completed`))}}let m=e=>{Hl(e)&&p(e).catch(e=>console.error(`[calendar-api]`,e))};e.on(`message`,m);let h=()=>{if(typeof o!=`function`)return null;try{return o()}catch{return null}},g=h(),_=typeof o==`function`;function v(){if(!_)return!0;let e=h();return e===null?!1:g===null?(g=e,!1):e===g?!1:(g=e,!0)}let y=null,b=a?a(()=>{if(_&&g===null){let e=h();e!==null&&(g=e)}y||(y=setTimeout(()=>{y=null,v()&&e.postMessage({$:Ml,v:1,type:`changed`})},hu))}):null,x={$:Ml,v:1,type:`ready`,methods:c};return r&&Array.isArray(r.has)&&r.has.length&&(x.scope={has:[...r.has]}),e.postMessage(x),{granted:c,stop(){typeof e.off==`function`&&e.off(`message`,m),y&&clearTimeout(y),y=null,b&&b()}}}function _u(e=new Date){let t=B(e);t.setDate(t.getDate()-(t.getDay()+6)%7);let n=(e,n,r=0)=>{let i=L(t,e);return i.setHours(n,r,0,0),i.getTime()},r=[[0,9,30,`Weekly planning`,`indigo`,`Studio table`],[0,14,60,`Brand direction review`,`violet`,`Design room`],[1,10,60,`Customer discovery`,`blue`,`Research studio`],[1,13,45,`Lunch with Amelia`,`orange`,`Garden cafe`],[2,9,45,`Product walkthrough`,`indigo`,`Studio table`],[2,15,60,`Website design critique`,`violet`,`Design room`],[3,10,90,`Launch campaign workshop`,`pink`,`Workshop space`],[3,14,30,`Partner catch-up`,`teal`,`Studio table`],[4,9,45,`Team demo & coffee`,`indigo`,`Lounge`],[4,14,60,`Weekly reflection`,`green`,`Quiet room`],[5,10,120,`Coastal trail walk`,`green`,`Trailhead`],[6,11,90,`Sunday brunch`,`orange`,`Garden cafe`],[-7,9,60,`Project kickoff`,`blue`,`Studio table`],[-4,14,90,`Creative exploration`,`violet`,`Design room`],[7,10,60,`Prototype review`,`blue`,`Design room`],[9,14,60,`Launch readiness`,`pink`,`Studio table`],[11,15,60,`Studio showcase`,`teal`,`Lounge`],[16,10,60,`Next chapter planning`,`indigo`,`Studio table`]].map(([e,t,r,i,a,o])=>({title:i,color:a,location:o,start:n(e,t),end:n(e,t,r),description:`Fictional sample event for the Northwind Studio demo.`,reminders:[]}));return r.push({title:`Focus time`,color:`teal`,start:n(0,11),end:n(0,12),description:`Fictional sample series. A quiet hour for meaningful work.`,reminders:[],recurrence:{freq:`weekly`,interval:1,byWeekday:[1,2,3,4,5],count:20}},{title:`Northwind launch week`,color:`pink`,allDay:!0,start:n(7,0),end:n(12,0),reminders:[],description:`Fictional sample milestone. No invitations are sent.`}),{events:r,tasks:[`Share the creative brief`,`Review homepage copy`,`Approve the launch checklist`,`Send workshop notes`,`Prepare next week’s priorities`].map((e,t)=>({title:e,due:n(t,16),allDay:!1,done:t===0,color:`green`,notes:`Fictional sample task for the Northwind Studio demo.`}))}}function vu(e){let t=null;return function(){return t||(t=Promise.resolve().then(async()=>{let t=e();if(!t)throw Error(`Sign in and wait for Calendar to finish loading before populating sample data.`);let{store:n,app:r}=t,i=new Date,{events:a,tasks:o}=_u(i),s=[],c=[];try{for(let r of a){if(e()!==t)throw Error(`The Calendar session changed.`);s.push((await n.saveEvent(r)).id)}for(let r of o){if(e()!==t)throw Error(`The Calendar session changed.`);c.push((await n.saveTask(r)).id)}}catch(e){throw Error(`Sample data stopped after ${s.length} events and ${c.length} tasks were saved. Those records remain in your calendar.`,{cause:e})}return r.showDate(i,`week`),{events:s.length,tasks:c.length,eventIds:s,taskIds:c}}).finally(()=>{t=null})),t}}var yu=null;window.calendar={populateSampleData:vu(()=>f()?yu:null)};var bu=document.getElementById(`app`),xu={callerApp:``,serviceMode:!1,inPuterApp:!1};function Su(t=`Loading your calendar…`){n(bu),bu.append(e(`div`,{class:`screen loading-screen`},[e(`div`,{class:`spinner`}),e(`p`,{text:t})]))}function Cu(t){n(bu),bu.removeAttribute(`aria-busy`),bu.append(e(`div`,{class:`screen`},[e(`div`,{class:`auth-card`},[e(`img`,{class:`auth-card__logo`,src:`/icon-192.png`,alt:`Calendar`,width:`56`,height:`56`}),e(`h1`,{class:`auth-card__title`,text:`Something went wrong`}),e(`p`,{class:`auth-card__sub`,text:t}),e(`button`,{class:`btn btn--primary btn--block`,type:`button`,text:`Reload`,on:{click:()=>window.location.reload()}})])]))}function wu(){n(bu),bu.removeAttribute(`aria-busy`);let t=e(`button`,{class:`btn btn--primary btn--block`,type:`button`,html:s(`calendar`,{size:`sm`})+`<span>Sign in</span>`});t.addEventListener(`click`,async()=>{t.disabled=!0;try{await p(),ku()}catch{t.disabled=!1}}),bu.append(e(`div`,{class:`screen`},[e(`div`,{class:`auth-card`},[e(`img`,{class:`auth-card__logo`,src:`/icon-192.png`,alt:`Calendar`,width:`56`,height:`56`}),e(`h1`,{class:`auth-card__title`,text:`Calendar`}),e(`p`,{class:`auth-card__sub`,text:`Sign in with your free Puter account to keep your events synced across every device. Your data stays in your own storage.`}),t])]))}function Tu(e,t=3e3){typeof requestIdleCallback==`function`?requestIdleCallback(e,{timeout:t}):setTimeout(e,1200)}function Eu(e=8e3){return new Promise((t,n)=>{if(typeof puter<`u`&&puter.kv)return t();let r=Date.now(),i=setInterval(()=>{typeof puter<`u`&&puter.kv?(clearInterval(i),t()):Date.now()-r>e&&(clearInterval(i),n(Error(`timeout`)))},60)})}function Du(){if(`serviceWorker`in navigator&&!(typeof puter<`u`&&(puter.env===`app`||puter.env===`gui`))){let e=()=>navigator.serviceWorker.register(`./sw.js`,{updateViaCache:`none`}).catch(()=>{});document.readyState===`complete`?e():window.addEventListener(`load`,e,{once:!0})}}var Ou=!1;async function ku(){if(!Ou){Ou=!0;try{await Au()}finally{Ou=!1}}}async function Au(){yu=null,Su();try{await Eu()}catch{navigator.onLine===!1?or(bu,{onRetry:ku}):Cu(`Could not load Puter.js. Please check your connection and reload.`);return}if(xu=Vl(window),xu.serviceMode){await Pu();return}if(Du(),!f()){navigator.onLine===!1?or(bu,{onRetry:ku}):wu();return}try{let e=await h(),t=Ar(puter.kv);t.ensureUser(e&&(e.uuid||e.id||e.username));let n=Xn(t);t.resetReachable(),await n.load();let r=navigator.onLine===!1||t.wasOffline();if(r&&!t.hasSnapshot()){or(bu,{onRetry:ku});return}Ks(n.getSettings().theme);let i=ar({toast:u,onReconnectRefresh:async()=>(t.resetReachable(),await n.load(),!t.wasOffline())}),a=i.gate(n);xu.callerApp&&Nu(xu.callerApp,{store:a});let o=cc({kv:t,store:a,user:e}),s=Yi({kv:t,store:a,rsvp:o,user:e}),c=Rc({userKey:e&&(e.uuid||e.id||e.username)||``}),l=Wa({kv:t,store:a,rsvp:o,user:e}),d=_a(),f=null,p=null;try{let n=$c({kv:t,store:a,user:e});f={mailbox:n,intake:vl({kv:t,store:a,mailbox:n,contacts:c,user:e,onDetected:e=>p&&p(e)}),reply:Al({store:a,user:e})}}catch(e){console.error(e),f=null}let m=Vs(bu,{store:a,user:e,rsvp:o,contacts:c,invites:s,booking:l,meetings:d,mail:f});yu={store:a,app:m},p=e=>m.notifyMailDetected(e),i.bindRender(m.render),i.start({online:!r}),Promise.resolve(o.start()).catch(()=>{}),Promise.resolve(s.start()).catch(()=>{}),Promise.resolve(l.start()).catch(()=>{}),f&&(Promise.resolve(f.mailbox.start()).catch(()=>{}),Promise.resolve(f.intake.start()).catch(()=>{})),r||Tu(()=>c.warm()),document.addEventListener(`visibilitychange`,()=>{document.visibilityState===`visible`&&(navigator.onLine===!1||!c.inUse()||c.revalidate())})}catch(e){console.error(e),navigator.onLine===!1?or(bu,{onRetry:ku}):f()?Cu(`We could not load your calendar. Please try again.`):wu()}}var ju=300*1e3,Mu=null;function Nu(e,{store:t,onActivity:n}={}){let r=null;try{r=puter.ui.parentApp()}catch{return null}if(!r)return null;Mu&&Mu.stop();let i=Bl(e);return Mu=gu({connection:r,callerApp:e,methods:mu({store:t,scope:i}),scope:i,subscribe:e=>t.subscribe(e),revision:()=>t.revision(),onActivity:n}),Mu}async function Pu(){if(Lu(),!f()){console.warn(`[calendar] the calendar API needs a signed-in Puter session`),Iu(xu.callerApp,`signed-out`),zu()||Ru();return}let e=Xn(puter.kv),t=null,n=()=>{t&&clearTimeout(t),t=setTimeout(()=>{Mu&&Mu.stop(),zu()||(Iu(xu.callerApp,`idle`),Ru())},ju)};if(!Nu(xu.callerApp,{store:e,onActivity:n})){console.warn(`[calendar] "${xu.callerApp||`an unidentified app`}" is not allowed to use the calendar API`),Iu(xu.callerApp,`denied`),zu()||Ru();return}Iu(xu.callerApp,`serving`),n()}var Fu={serving:e=>`${e} is using your calendar. Nothing leaves your Puter account, and you can close this window at any time.`,denied:e=>`${e} asked to use your calendar and was not allowed to. You can close this window.`,"signed-out":e=>`${e} asked to use your calendar, but nobody is signed in to Puter. You can close this window.`,idle:e=>`${e} finished using your calendar. You can close this window.`};function Iu(t,r){n(bu),bu.removeAttribute(`aria-busy`);let i=t?t[0].toUpperCase()+t.slice(1):`Another app`;bu.append(e(`div`,{class:`screen`},[e(`div`,{class:`auth-card`},[e(`img`,{class:`auth-card__logo`,src:`/icon-192.png`,alt:`Calendar`,width:`56`,height:`56`}),e(`h1`,{class:`auth-card__title`,text:`Calendar`}),e(`p`,{class:`auth-card__sub`,text:(Fu[r]||Fu.serving)(i)})])]))}function Lu(){try{puter.ui.hideWindow()}catch{}}function Ru(){try{puter.ui.showWindow()}catch{}}function zu(){try{return typeof puter.exit==`function`?(puter.exit(0),!0):!1}catch{return!1}}ku();
//# sourceMappingURL=index-Bn7YXy-G.js.map