import{c as s,j as a,bD as g,bE as m,bG as p,bH as k,cA as x,d as y,as as r}from"./index-Bf-BoKFl.js";import{idiomaAtual as j,trocarIdioma as v}from"./traducao-BcvsC3Pk.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S=s("KeyRound",[["path",{d:"M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z",key:"1s6t7t"}],["circle",{cx:"16.5",cy:"7.5",r:".5",fill:"currentColor",key:"w0ekpg"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=s("Languages",[["path",{d:"m5 8 6 6",key:"1wu5hv"}],["path",{d:"m4 14 6-6 2-3",key:"1k1g8d"}],["path",{d:"M2 5h12",key:"or177f"}],["path",{d:"M7 2h1",key:"1t2jsx"}],["path",{d:"m22 22-5-10-5 10",key:"don7ne"}],["path",{d:"M14 18h6",key:"1m8k6r"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I=s("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=s("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]),u=[{valor:"pt",rotulo:"Português",curto:"PT"},{valor:"en",rotulo:"English",curto:"EN"},{valor:"es",rotulo:"Español",curto:"ES"}];function N(){var t;const o=j();return a.jsx("div",{"data-sem-traducao":!0,children:a.jsxs(g,{value:o,onValueChange:e=>v(e),children:[a.jsxs(m,{className:"h-9 w-auto gap-1.5 border-none bg-transparent px-2 shadow-none","aria-label":"Idioma / Language",children:[a.jsx(f,{className:"h-4 w-4",strokeWidth:1.5,"aria-hidden":!0}),a.jsx("span",{className:"text-sm font-medium",children:(t=u.find(e=>e.valor===o))==null?void 0:t.curto})]}),a.jsx(p,{align:"end","data-sem-traducao":!0,children:u.map(e=>a.jsx(k,{value:e.valor,children:e.rotulo},e.valor))})]})})}function n(...o){return x(y(o))}function E({className:o,regularClassName:t,onDark:e}){var c,d,i,h;const l=e?((c=r.logoImage)==null?void 0:c.onDark)??((d=r.logoImage)==null?void 0:d.onLight):((i=r.logoImage)==null?void 0:i.onLight)??((h=r.logoImage)==null?void 0:h.onDark);return l?a.jsx("img",{src:l,alt:r.productName,className:n("h-8 w-auto",o)}):a.jsxs("span",{className:n("logo-mark",o),children:[a.jsx("span",{className:"logo-mark-light",children:r.logo.light}),a.jsx("span",{className:n("logo-mark-regular",t),children:r.logo.regular})]})}export{E as B,S as K,I as L,b as S,N as a,n as c};
