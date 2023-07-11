import{D as w,l as m,z as y,m as f}from"./entry.29e79610.js";const u=/^[\u0009\u0020-\u007E\u0080-\u00FF]+$/;function h(e,r){if(typeof e!="string")throw new TypeError("argument str must be a string");const o={},a=(r||{}).decode||k;let n=0;for(;n<e.length;){const i=e.indexOf("=",n);if(i===-1)break;let s=e.indexOf(";",n);if(s===-1)s=e.length;else if(s<i){n=e.lastIndexOf(";",i-1)+1;continue}const d=e.slice(n,i).trim();if(o[d]===void 0){let c=e.slice(i+1,s).trim();c.codePointAt(0)===34&&(c=c.slice(1,-1)),o[d]=v(c,a)}n=s+1}return o}function l(e,r,o){const t=o||{},a=t.encode||S;if(typeof a!="function")throw new TypeError("option encode is invalid");if(!u.test(e))throw new TypeError("argument name is invalid");const n=a(r);if(n&&!u.test(n))throw new TypeError("argument val is invalid");let i=e+"="+n;if(t.maxAge!==void 0&&t.maxAge!==null){const s=t.maxAge-0;if(Number.isNaN(s)||!Number.isFinite(s))throw new TypeError("option maxAge is invalid");i+="; Max-Age="+Math.floor(s)}if(t.domain){if(!u.test(t.domain))throw new TypeError("option domain is invalid");i+="; Domain="+t.domain}if(t.path){if(!u.test(t.path))throw new TypeError("option path is invalid");i+="; Path="+t.path}if(t.expires){if(!g(t.expires)||Number.isNaN(t.expires.valueOf()))throw new TypeError("option expires is invalid");i+="; Expires="+t.expires.toUTCString()}if(t.httpOnly&&(i+="; HttpOnly"),t.secure&&(i+="; Secure"),t.priority)switch(typeof t.priority=="string"?t.priority.toLowerCase():t.priority){case"low":i+="; Priority=Low";break;case"medium":i+="; Priority=Medium";break;case"high":i+="; Priority=High";break;default:throw new TypeError("option priority is invalid")}if(t.sameSite)switch(typeof t.sameSite=="string"?t.sameSite.toLowerCase():t.sameSite){case!0:i+="; SameSite=Strict";break;case"lax":i+="; SameSite=Lax";break;case"strict":i+="; SameSite=Strict";break;case"none":i+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}return i}function g(e){return Object.prototype.toString.call(e)==="[object Date]"||e instanceof Date}function v(e,r){try{return r(e)}catch{return e}}function k(e){return e.includes("%")?decodeURIComponent(e):e}function S(e){return encodeURIComponent(e)}const x={path:"/",watch:!0,decode:e=>y(decodeURIComponent(e)),encode:e=>encodeURIComponent(typeof e=="string"?e:JSON.stringify(e))};function p(e,r){var n;const o={...x,...r},t=T(o)||{},a=w(t[e]??((n=o.default)==null?void 0:n.call(o)));{const i=()=>{C(e,a.value,o)};o.watch?m(a,i,{deep:o.watch!=="shallow"}):i()}return a}function T(e={}){return h(document.cookie,e)}function b(e,r,o={}){return r==null?l(e,r,{...o,maxAge:-1}):l(e,r,o)}function C(e,r,o={}){document.cookie=b(e,r,o)}const I=()=>({isEnabled:()=>{const t=f().query;return Object.prototype.hasOwnProperty.call(t,"preview")&&!t.preview?!1:!!(t.preview||p("previewToken").value||sessionStorage.getItem("previewToken"))},getPreviewToken:()=>p("previewToken").value||sessionStorage.getItem("previewToken")||void 0,setPreviewToken:t=>{p("previewToken").value=t,f().query.preview=t||"",t?sessionStorage.setItem("previewToken",t):sessionStorage.removeItem("previewToken"),window.location.reload()}});export{I as u};
