(self.webpackChunkdocu_notion_sample_site=self.webpackChunkdocu_notion_sample_site||[]).push([[435],{8779:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>u});var o=n(7294),r=n(6809),i=n(3645),a=n(2389);function c(e){let{children:t,fallback:n}=e;return(0,a.Z)()?o.createElement(o.Fragment,null,null==t?void 0:t()):null!=n?n:null}var l=n(8765);const u=()=>{const e=r.default.customFields.GOOGLE_CLIENT_ID,t=r.default.customFields.BACKEND_API_URL,[a,u]=(0,o.useState)(null),[s,d]=(0,o.useState)(!1),[f,p]=(0,o.useState)(!1),[g,m]=(0,o.useState)(!1);(0,o.useEffect)((()=>{(async()=>{n.e(581).then(n.bind(n,6581)).then((t=>{let{gapi:n}=t;n.load("client:auth2",(()=>{n.client.init({clientId:e,scope:""})}))}))})()})),(0,o.useEffect)((()=>{if(!a&&g)return void m(!1);p(!0);(async()=>{const e=await fetch(t+"/?email="+a.email,{method:"GET"}),n=await e.json();console.log(e),console.log(n),200===e.status&&null!=n&&n.isAuthorized?m(!0):g&&m(!1),p(!1)})()}),[a,g]);const y=e=>{console.log("success:",e),u(e.profileObj)},h=e=>{console.log("failed:",e)},b=()=>{u(null)};console.log("profile",a);const v=()=>{d(!0),console.log("email",a.email),fetch(t+"?email="+a.email,{method:"POST"}).then((e=>e.json())).then((e=>{console.log(e),d(!1)})).catch((e=>{console.log(e),d(!1)}))};return o.createElement(l.Z,null,o.createElement("div",{style:{marginTop:"20px"}}),o.createElement(c,{fallback:o.createElement("div",null,"Loading...")},(()=>o.createElement("div",{style:{width:"100%",display:"flex",justifyContent:"center",marginTop:"72px"}},a?o.createElement("div",null,o.createElement("img",{src:a.imageUrl,alt:"user image"}),o.createElement("h3",null,"User Logged in"),o.createElement("p",null,"Name: ",a.name),o.createElement("p",null,"Email Address: ",a.email),o.createElement("br",null),o.createElement(i.GoogleLogout,{clientId:e,buttonText:"Log out",onLogoutSuccess:b}),o.createElement("br",null),o.createElement("div",{style:{marginTop:"12px"}}),f?o.createElement("div",null,"Check authorized..."):g?o.createElement("div",null,o.createElement("button",{type:"button",onClick:v},"Build Notion Pages"),s&&o.createElement("div",null,"loading...")):o.createElement("div",null,o.createElement("p",null,"You are not in the Notion workspace"),o.createElement("div",null,"Please contact team to be editor"))):o.createElement(i.GoogleLogin,{clientId:e,buttonText:"Sign in with Google",onSuccess:y,onFailure:h,cookiePolicy:"single_host_origin",isSignedIn:!0})))))}},3645:function(e,t,n){"undefined"!=typeof self&&self,e.exports=function(e){return o={},t.m=n=[function(t){t.exports=e},function(e,t,n){e.exports=n(2)()},function(e,t,n){"use strict";function o(){}function r(){}var i=n(3);r.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,r,a){if(a!==i){var c=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}var n={array:e.isRequired=e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:r,resetWarningCache:o};return n.PropTypes=n}},function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],o=!0,r=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(o=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){r=!0,i=e}finally{try{o||null==c.return||c.return()}finally{if(r)throw i}}return n}}(e,t)||function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,t){null!=t&&t<=e.length||(t=e.length);for(var n=0,o=Array(t);n<t;n++)o[n]=e[n];return o}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],o=!0,r=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(o=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){r=!0,i=e}finally{try{o||null==c.return||c.return()}finally{if(r)throw i}}return n}}(e,t)||function(e,t){if(e){if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){null!=t&&t<=e.length||(t=e.length);for(var n=0,o=Array(t);n<t;n++)o[n]=e[n];return o}function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],o=!0,r=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(o=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){r=!0,i=e}finally{try{o||null==c.return||c.return()}finally{if(r)throw i}}return n}}(e,t)||function(e,t){if(e){if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){null!=t&&t<=e.length||(t=e.length);for(var n=0,o=Array(t);n<t;n++)o[n]=e[n];return o}function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],o=!0,r=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(o=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){r=!0,i=e}finally{try{o||null==c.return||c.return()}finally{if(r)throw i}}return n}}(e,t)||function(e,t){if(e){if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){null!=t&&t<=e.length||(t=e.length);for(var n=0,o=Array(t);n<t;n++)o[n]=e[n];return o}function d(e,t,n,o,r,i){var a=e.getElementsByTagName(t)[0],c=a,l=a;(l=e.createElement(t)).id=n,l.src=o,c&&c.parentNode?c.parentNode.insertBefore(l,c):e.head.appendChild(l),l.onerror=i,l.onload=r}function f(e,t){var n=e.getElementById(t);n&&n.parentNode.removeChild(n)}function p(e){return h.a.createElement("span",{style:{paddingRight:10,fontWeight:500,paddingLeft:e.icon?0:10,paddingTop:10,paddingBottom:10}},e.children)}function g(e){return h.a.createElement("div",{style:{marginRight:10,background:e.active?"#eee":"#fff",padding:10,borderRadius:2}},h.a.createElement("svg",{width:"18",height:"18",xmlns:"http://www.w3.org/2000/svg"},h.a.createElement("g",{fill:"#000",fillRule:"evenodd"},h.a.createElement("path",{d:"M9 3.48c1.69 0 2.83.73 3.48 1.34l2.54-2.48C13.46.89 11.43 0 9 0 5.48 0 2.44 2.02.96 4.96l2.91 2.26C4.6 5.05 6.62 3.48 9 3.48z",fill:"#EA4335"}),h.a.createElement("path",{d:"M17.64 9.2c0-.74-.06-1.28-.19-1.84H9v3.34h4.96c-.1.83-.64 2.08-1.84 2.92l2.84 2.2c1.7-1.57 2.68-3.88 2.68-6.62z",fill:"#4285F4"}),h.a.createElement("path",{d:"M3.88 10.78A5.54 5.54 0 0 1 3.58 9c0-.62.11-1.22.29-1.78L.96 4.96A9.008 9.008 0 0 0 0 9c0 1.45.35 2.82.96 4.04l2.92-2.26z",fill:"#FBBC05"}),h.a.createElement("path",{d:"M9 18c2.43 0 4.47-.8 5.96-2.18l-2.84-2.2c-.76.53-1.78.9-3.12.9-2.38 0-4.4-1.57-5.12-3.74L.97 13.04C2.45 15.98 5.48 18 9 18z",fill:"#34A853"}),h.a.createElement("path",{fill:"none",d:"M0 0h18v18H0z"}))))}function m(e){var t=i(Object(y.useState)(!1),2),n=t[0],o=t[1],r=i(Object(y.useState)(!1),2),a=r[0],c=r[1],l=e.tag,u=e.type,s=e.className,d=e.disabledStyle,f=e.buttonText,m=e.children,v=e.render,S=e.theme,E=e.icon,j=e.disabled,O=b({onSuccess:e.onSuccess,onAutoLoadFinished:e.onAutoLoadFinished,onRequest:e.onRequest,onFailure:e.onFailure,onScriptLoadFailure:e.onScriptLoadFailure,clientId:e.clientId,cookiePolicy:e.cookiePolicy,loginHint:e.loginHint,hostedDomain:e.hostedDomain,autoLoad:e.autoLoad,isSignedIn:e.isSignedIn,fetchBasicProfile:e.fetchBasicProfile,redirectUri:e.redirectUri,discoveryDocs:e.discoveryDocs,uxMode:e.uxMode,scope:e.scope,accessType:e.accessType,responseType:e.responseType,jsSrc:e.jsSrc,prompt:e.prompt}),I=O.signIn,k=j||!O.loaded;if(v)return v({onClick:I,disabled:k});var _={backgroundColor:"dark"===S?"rgb(66, 133, 244)":"#fff",display:"inline-flex",alignItems:"center",color:"dark"===S?"#fff":"rgba(0, 0, 0, .54)",boxShadow:"0 2px 2px 0 rgba(0, 0, 0, .24), 0 0 1px 0 rgba(0, 0, 0, .24)",padding:0,borderRadius:2,border:"1px solid transparent",fontSize:14,fontWeight:"500",fontFamily:"Roboto, sans-serif"},w={cursor:"pointer",backgroundColor:"dark"===S?"#3367D6":"#eee",color:"dark"===S?"#fff":"rgba(0, 0, 0, .54)",opacity:1},x=k?Object.assign({},_,d):a?Object.assign({},_,w):n?Object.assign({},_,{cursor:"pointer",opacity:.9}):_;return h.a.createElement(l,{onMouseEnter:function(){return o(!0)},onMouseLeave:function(){o(!1),c(!1)},onMouseDown:function(){return c(!0)},onMouseUp:function(){return c(!1)},onClick:I,style:x,type:u,disabled:k,className:s},[E&&h.a.createElement(g,{key:1,active:a}),h.a.createElement(p,{icon:E,key:2},m||f)])}n.r(t),n.d(t,"default",(function(){return S})),n.d(t,"GoogleLogin",(function(){return S})),n.d(t,"GoogleLogout",(function(){return j})),n.d(t,"useGoogleLogin",(function(){return b})),n.d(t,"useGoogleLogout",(function(){return E}));var y=n(0),h=n.n(y),b=(n(1),function(e){function t(e){var t=e.getBasicProfile(),n=e.getAuthResponse(!0);e.googleId=t.getId(),e.tokenObj=n,e.tokenId=n.id_token,e.accessToken=n.access_token,e.profileObj={googleId:t.getId(),imageUrl:t.getImageUrl(),email:t.getEmail(),name:t.getName(),givenName:t.getGivenName(),familyName:t.getFamilyName()},i(e)}function n(e){if(e&&e.preventDefault(),C){var n=window.gapi.auth2.getAuthInstance(),o={prompt:L};p(),"code"===x?n.grantOfflineAccess(o).then((function(e){return i(e)}),(function(e){return u(e)})):n.signIn(o).then((function(e){return t(e)}),(function(e){return u(e)}))}}var r=e.onSuccess,i=void 0===r?function(){}:r,a=e.onAutoLoadFinished,c=void 0===a?function(){}:a,l=e.onFailure,u=void 0===l?function(){}:l,s=e.onRequest,p=void 0===s?function(){}:s,g=e.onScriptLoadFailure,m=e.clientId,h=e.cookiePolicy,b=e.loginHint,v=e.hostedDomain,S=e.autoLoad,E=e.isSignedIn,j=e.fetchBasicProfile,O=e.redirectUri,I=e.discoveryDocs,k=e.uxMode,_=e.scope,w=e.accessType,x=e.responseType,A=e.jsSrc,T=void 0===A?"https://apis.google.com/js/api.js":A,L=e.prompt,P=o(Object(y.useState)(!1),2),C=P[0],M=P[1];return Object(y.useEffect)((function(){var e=!1,n=g||u;return d(document,"script","google-login",T,(function(){var o={client_id:m,cookie_policy:h,login_hint:b,hosted_domain:v,fetch_basic_profile:j,discoveryDocs:I,ux_mode:k,redirect_uri:O,scope:_,access_type:w};"code"===x&&(o.access_type="offline"),window.gapi.load("auth2",(function(){var r=window.gapi.auth2.getAuthInstance();r?r.then((function(){e||(E&&r.isSignedIn.get()?(M(!0),c(!0),t(r.currentUser.get())):(M(!0),c(!1)))}),(function(e){u(e)})):window.gapi.auth2.init(o).then((function(n){if(!e){M(!0);var o=E&&n.isSignedIn.get();c(o),o&&t(n.currentUser.get())}}),(function(e){M(!0),c(!1),n(e)}))}))}),(function(e){n(e)})),function(){e=!0,f(document,"google-login")}}),[]),Object(y.useEffect)((function(){S&&n()}),[C]),{signIn:n,loaded:C}});function v(e){var t=u(Object(y.useState)(!1),2),n=t[0],o=t[1],r=u(Object(y.useState)(!1),2),i=r[0],a=r[1],c=e.tag,l=e.type,s=e.className,d=e.disabledStyle,f=e.buttonText,m=e.children,b=e.render,v=e.theme,S=e.icon,j=e.disabled,O=E({jsSrc:e.jsSrc,onFailure:e.onFailure,onScriptLoadFailure:e.onScriptLoadFailure,clientId:e.clientId,cookiePolicy:e.cookiePolicy,loginHint:e.loginHint,hostedDomain:e.hostedDomain,fetchBasicProfile:e.fetchBasicProfile,discoveryDocs:e.discoveryDocs,uxMode:e.uxMode,redirectUri:e.redirectUri,scope:e.scope,accessType:e.accessType,onLogoutSuccess:e.onLogoutSuccess}),I=O.signOut,k=j||!O.loaded;if(b)return b({onClick:I,disabled:k});var _={backgroundColor:"dark"===v?"rgb(66, 133, 244)":"#fff",display:"inline-flex",alignItems:"center",color:"dark"===v?"#fff":"rgba(0, 0, 0, .54)",boxShadow:"0 2px 2px 0 rgba(0, 0, 0, .24), 0 0 1px 0 rgba(0, 0, 0, .24)",padding:0,borderRadius:2,border:"1px solid transparent",fontSize:14,fontWeight:"500",fontFamily:"Roboto, sans-serif"},w={cursor:"pointer",backgroundColor:"dark"===v?"#3367D6":"#eee",color:"dark"===v?"#fff":"rgba(0, 0, 0, .54)",opacity:1},x=k?Object.assign({},_,d):i?Object.assign({},_,w):n?Object.assign({},_,{cursor:"pointer",opacity:.9}):_;return h.a.createElement(c,{onMouseEnter:function(){return o(!0)},onMouseLeave:function(){o(!1),a(!1)},onMouseDown:function(){return a(!0)},onMouseUp:function(){return a(!1)},onClick:I,style:x,type:l,disabled:k,className:s},[S&&h.a.createElement(g,{key:1,active:i}),h.a.createElement(p,{icon:S,key:2},m||f)])}m.defaultProps={type:"button",tag:"button",buttonText:"Sign in with Google",scope:"profile email",accessType:"online",prompt:"",cookiePolicy:"single_host_origin",fetchBasicProfile:!0,isSignedIn:!1,uxMode:"popup",disabledStyle:{opacity:.6},icon:!0,theme:"light",onRequest:function(){}};var S=m,E=function(e){var t=e.jsSrc,n=void 0===t?"https://apis.google.com/js/api.js":t,o=e.onFailure,r=e.onScriptLoadFailure,i=e.clientId,a=e.cookiePolicy,l=e.loginHint,u=e.hostedDomain,s=e.fetchBasicProfile,p=e.discoveryDocs,g=e.uxMode,m=e.redirectUri,h=e.scope,b=e.accessType,v=e.onLogoutSuccess,S=c(Object(y.useState)(!1),2),E=S[0],j=S[1],O=Object(y.useCallback)((function(){if(window.gapi){var e=window.gapi.auth2.getAuthInstance();null!=e&&e.then((function(){e.signOut().then((function(){e.disconnect(),v()}))}),(function(e){return o(e)}))}}),[v]);return Object(y.useEffect)((function(){var e=r||o;return d(document,"script","google-login",n,(function(){var t={client_id:i,cookie_policy:a,login_hint:l,hosted_domain:u,fetch_basic_profile:s,discoveryDocs:p,ux_mode:g,redirect_uri:m,scope:h,access_type:b};window.gapi.load("auth2",(function(){window.gapi.auth2.getAuthInstance()?j(!0):window.gapi.auth2.init(t).then((function(){return j(!0)}),(function(t){return e(t)}))}))}),(function(t){e(t)})),function(){f(document,"google-login")}}),[]),{signOut:O,loaded:E}};v.defaultProps={type:"button",tag:"button",buttonText:"Logout of Google",disabledStyle:{opacity:.6},icon:!0,theme:"light",jsSrc:"https://apis.google.com/js/api.js"};var j=v}],t.c=o,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(t){return e[t]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=4);function t(e){if(o[e])return o[e].exports;var r=o[e]={i:e,l:!1,exports:{}};return n[e].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n,o}(n(7294))}}]);