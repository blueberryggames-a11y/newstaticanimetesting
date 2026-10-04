var iI=Object.defineProperty;var sI=(t,e,n)=>e in t?iI(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var ry=(t,e,n)=>sI(t,typeof e!="symbol"?e+"":e,n);function oI(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function aI(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var _0={exports:{}},ad={},w0={exports:{}},le={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dl=Symbol.for("react.element"),lI=Symbol.for("react.portal"),uI=Symbol.for("react.fragment"),cI=Symbol.for("react.strict_mode"),dI=Symbol.for("react.profiler"),hI=Symbol.for("react.provider"),fI=Symbol.for("react.context"),pI=Symbol.for("react.forward_ref"),mI=Symbol.for("react.suspense"),gI=Symbol.for("react.memo"),yI=Symbol.for("react.lazy"),iy=Symbol.iterator;function vI(t){return t===null||typeof t!="object"?null:(t=iy&&t[iy]||t["@@iterator"],typeof t=="function"?t:null)}var x0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E0=Object.assign,T0={};function Vo(t,e,n){this.props=t,this.context=e,this.refs=T0,this.updater=n||x0}Vo.prototype.isReactComponent={};Vo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Vo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function I0(){}I0.prototype=Vo.prototype;function kp(t,e,n){this.props=t,this.context=e,this.refs=T0,this.updater=n||x0}var bp=kp.prototype=new I0;bp.constructor=kp;E0(bp,Vo.prototype);bp.isPureReactComponent=!0;var sy=Array.isArray,S0=Object.prototype.hasOwnProperty,Rp={current:null},A0={key:!0,ref:!0,__self:!0,__source:!0};function k0(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)S0.call(e,r)&&!A0.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),d=0;d<l;d++)u[d]=arguments[d+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Dl,type:t,key:s,ref:o,props:i,_owner:Rp.current}}function _I(t,e){return{$$typeof:Dl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Cp(t){return typeof t=="object"&&t!==null&&t.$$typeof===Dl}function wI(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var oy=/\/+/g;function sh(t,e){return typeof t=="object"&&t!==null&&t.key!=null?wI(""+t.key):e.toString(36)}function Gu(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Dl:case lI:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+sh(o,0):r,sy(i)?(n="",t!=null&&(n=t.replace(oy,"$&/")+"/"),Gu(i,e,n,"",function(d){return d})):i!=null&&(Cp(i)&&(i=_I(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(oy,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",sy(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+sh(s,l);o+=Gu(s,e,n,u,i)}else if(u=vI(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+sh(s,l++),o+=Gu(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Eu(t,e,n){if(t==null)return t;var r=[],i=0;return Gu(t,r,"","",function(s){return e.call(n,s,i++)}),r}function xI(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Mt={current:null},Ku={transition:null},EI={ReactCurrentDispatcher:Mt,ReactCurrentBatchConfig:Ku,ReactCurrentOwner:Rp};function b0(){throw Error("act(...) is not supported in production builds of React.")}le.Children={map:Eu,forEach:function(t,e,n){Eu(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Eu(t,function(){e++}),e},toArray:function(t){return Eu(t,function(e){return e})||[]},only:function(t){if(!Cp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};le.Component=Vo;le.Fragment=uI;le.Profiler=dI;le.PureComponent=kp;le.StrictMode=cI;le.Suspense=mI;le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=EI;le.act=b0;le.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=E0({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Rp.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)S0.call(e,u)&&!A0.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var d=0;d<u;d++)l[d]=arguments[d+2];r.children=l}return{$$typeof:Dl,type:t.type,key:i,ref:s,props:r,_owner:o}};le.createContext=function(t){return t={$$typeof:fI,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:hI,_context:t},t.Consumer=t};le.createElement=k0;le.createFactory=function(t){var e=k0.bind(null,t);return e.type=t,e};le.createRef=function(){return{current:null}};le.forwardRef=function(t){return{$$typeof:pI,render:t}};le.isValidElement=Cp;le.lazy=function(t){return{$$typeof:yI,_payload:{_status:-1,_result:t},_init:xI}};le.memo=function(t,e){return{$$typeof:gI,type:t,compare:e===void 0?null:e}};le.startTransition=function(t){var e=Ku.transition;Ku.transition={};try{t()}finally{Ku.transition=e}};le.unstable_act=b0;le.useCallback=function(t,e){return Mt.current.useCallback(t,e)};le.useContext=function(t){return Mt.current.useContext(t)};le.useDebugValue=function(){};le.useDeferredValue=function(t){return Mt.current.useDeferredValue(t)};le.useEffect=function(t,e){return Mt.current.useEffect(t,e)};le.useId=function(){return Mt.current.useId()};le.useImperativeHandle=function(t,e,n){return Mt.current.useImperativeHandle(t,e,n)};le.useInsertionEffect=function(t,e){return Mt.current.useInsertionEffect(t,e)};le.useLayoutEffect=function(t,e){return Mt.current.useLayoutEffect(t,e)};le.useMemo=function(t,e){return Mt.current.useMemo(t,e)};le.useReducer=function(t,e,n){return Mt.current.useReducer(t,e,n)};le.useRef=function(t){return Mt.current.useRef(t)};le.useState=function(t){return Mt.current.useState(t)};le.useSyncExternalStore=function(t,e,n){return Mt.current.useSyncExternalStore(t,e,n)};le.useTransition=function(){return Mt.current.useTransition()};le.version="18.3.1";w0.exports=le;var R=w0.exports;const R0=aI(R),TI=oI({__proto__:null,default:R0},[R]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var II=R,SI=Symbol.for("react.element"),AI=Symbol.for("react.fragment"),kI=Object.prototype.hasOwnProperty,bI=II.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,RI={key:!0,ref:!0,__self:!0,__source:!0};function C0(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)kI.call(e,r)&&!RI.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:SI,type:t,key:s,ref:o,props:i,_owner:bI.current}}ad.Fragment=AI;ad.jsx=C0;ad.jsxs=C0;_0.exports=ad;var c=_0.exports,tf={},P0={exports:{}},on={},N0={exports:{}},D0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(q,Z){var K=q.length;q.push(Z);e:for(;0<K;){var he=K-1>>>1,te=q[he];if(0<i(te,Z))q[he]=Z,q[K]=te,K=he;else break e}}function n(q){return q.length===0?null:q[0]}function r(q){if(q.length===0)return null;var Z=q[0],K=q.pop();if(K!==Z){q[0]=K;e:for(var he=0,te=q.length,_e=te>>>1;he<_e;){var fe=2*(he+1)-1,wn=q[fe],xn=fe+1,En=q[xn];if(0>i(wn,K))xn<te&&0>i(En,wn)?(q[he]=En,q[xn]=K,he=xn):(q[he]=wn,q[fe]=K,he=fe);else if(xn<te&&0>i(En,K))q[he]=En,q[xn]=K,he=xn;else break e}}return Z}function i(q,Z){var K=q.sortIndex-Z.sortIndex;return K!==0?K:q.id-Z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],d=[],f=1,m=null,g=3,I=!1,C=!1,b=!1,P=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function A(q){for(var Z=n(d);Z!==null;){if(Z.callback===null)r(d);else if(Z.startTime<=q)r(d),Z.sortIndex=Z.expirationTime,e(u,Z);else break;Z=n(d)}}function O(q){if(b=!1,A(q),!C)if(n(u)!==null)C=!0,Qt(M);else{var Z=n(d);Z!==null&&ct(O,Z.startTime-q)}}function M(q,Z){C=!1,b&&(b=!1,x(y),y=-1),I=!0;var K=g;try{for(A(Z),m=n(u);m!==null&&(!(m.expirationTime>Z)||q&&!N());){var he=m.callback;if(typeof he=="function"){m.callback=null,g=m.priorityLevel;var te=he(m.expirationTime<=Z);Z=t.unstable_now(),typeof te=="function"?m.callback=te:m===n(u)&&r(u),A(Z)}else r(u);m=n(u)}if(m!==null)var _e=!0;else{var fe=n(d);fe!==null&&ct(O,fe.startTime-Z),_e=!1}return _e}finally{m=null,g=K,I=!1}}var D=!1,T=null,y=-1,E=5,S=-1;function N(){return!(t.unstable_now()-S<E)}function L(){if(T!==null){var q=t.unstable_now();S=q;var Z=!0;try{Z=T(!0,q)}finally{Z?k():(D=!1,T=null)}}else D=!1}var k;if(typeof _=="function")k=function(){_(L)};else if(typeof MessageChannel<"u"){var Ge=new MessageChannel,Ye=Ge.port2;Ge.port1.onmessage=L,k=function(){Ye.postMessage(null)}}else k=function(){P(L,0)};function Qt(q){T=q,D||(D=!0,k())}function ct(q,Z){y=P(function(){q(t.unstable_now())},Z)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(q){q.callback=null},t.unstable_continueExecution=function(){C||I||(C=!0,Qt(M))},t.unstable_forceFrameRate=function(q){0>q||125<q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<q?Math.floor(1e3/q):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(q){switch(g){case 1:case 2:case 3:var Z=3;break;default:Z=g}var K=g;g=Z;try{return q()}finally{g=K}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(q,Z){switch(q){case 1:case 2:case 3:case 4:case 5:break;default:q=3}var K=g;g=q;try{return Z()}finally{g=K}},t.unstable_scheduleCallback=function(q,Z,K){var he=t.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?he+K:he):K=he,q){case 1:var te=-1;break;case 2:te=250;break;case 5:te=1073741823;break;case 4:te=1e4;break;default:te=5e3}return te=K+te,q={id:f++,callback:Z,priorityLevel:q,startTime:K,expirationTime:te,sortIndex:-1},K>he?(q.sortIndex=K,e(d,q),n(u)===null&&q===n(d)&&(b?(x(y),y=-1):b=!0,ct(O,K-he))):(q.sortIndex=te,e(u,q),C||I||(C=!0,Qt(M))),q},t.unstable_shouldYield=N,t.unstable_wrapCallback=function(q){var Z=g;return function(){var K=g;g=Z;try{return q.apply(this,arguments)}finally{g=K}}}})(D0);N0.exports=D0;var CI=N0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var PI=R,sn=CI;function H(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var j0=new Set,tl={};function _s(t,e){xo(t,e),xo(t+"Capture",e)}function xo(t,e){for(tl[t]=e,t=0;t<e.length;t++)j0.add(e[t])}var Tr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),nf=Object.prototype.hasOwnProperty,NI=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ay={},ly={};function DI(t){return nf.call(ly,t)?!0:nf.call(ay,t)?!1:NI.test(t)?ly[t]=!0:(ay[t]=!0,!1)}function jI(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function LI(t,e,n,r){if(e===null||typeof e>"u"||jI(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Vt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var yt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){yt[t]=new Vt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];yt[e]=new Vt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){yt[t]=new Vt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){yt[t]=new Vt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){yt[t]=new Vt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){yt[t]=new Vt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){yt[t]=new Vt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){yt[t]=new Vt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){yt[t]=new Vt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Pp=/[\-:]([a-z])/g;function Np(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Pp,Np);yt[e]=new Vt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Pp,Np);yt[e]=new Vt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Pp,Np);yt[e]=new Vt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){yt[t]=new Vt(t,1,!1,t.toLowerCase(),null,!1,!1)});yt.xlinkHref=new Vt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){yt[t]=new Vt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Dp(t,e,n,r){var i=yt.hasOwnProperty(e)?yt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(LI(e,n,i,r)&&(n=null),r||i===null?DI(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Pr=PI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Tu=Symbol.for("react.element"),Ys=Symbol.for("react.portal"),Xs=Symbol.for("react.fragment"),jp=Symbol.for("react.strict_mode"),rf=Symbol.for("react.profiler"),L0=Symbol.for("react.provider"),O0=Symbol.for("react.context"),Lp=Symbol.for("react.forward_ref"),sf=Symbol.for("react.suspense"),of=Symbol.for("react.suspense_list"),Op=Symbol.for("react.memo"),Xr=Symbol.for("react.lazy"),M0=Symbol.for("react.offscreen"),uy=Symbol.iterator;function ya(t){return t===null||typeof t!="object"?null:(t=uy&&t[uy]||t["@@iterator"],typeof t=="function"?t:null)}var ze=Object.assign,oh;function Ca(t){if(oh===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);oh=e&&e[1]||""}return`
`+oh+t}var ah=!1;function lh(t,e){if(!t||ah)return"";ah=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(d){var r=d}Reflect.construct(t,[],e)}else{try{e.call()}catch(d){r=d}t.call(e.prototype)}else{try{throw Error()}catch(d){r=d}t()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{ah=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ca(t):""}function OI(t){switch(t.tag){case 5:return Ca(t.type);case 16:return Ca("Lazy");case 13:return Ca("Suspense");case 19:return Ca("SuspenseList");case 0:case 2:case 15:return t=lh(t.type,!1),t;case 11:return t=lh(t.type.render,!1),t;case 1:return t=lh(t.type,!0),t;default:return""}}function af(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Xs:return"Fragment";case Ys:return"Portal";case rf:return"Profiler";case jp:return"StrictMode";case sf:return"Suspense";case of:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case O0:return(t.displayName||"Context")+".Consumer";case L0:return(t._context.displayName||"Context")+".Provider";case Lp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Op:return e=t.displayName||null,e!==null?e:af(t.type)||"Memo";case Xr:e=t._payload,t=t._init;try{return af(t(e))}catch{}}return null}function MI(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return af(e);case 8:return e===jp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ti(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function V0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function VI(t){var e=V0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Iu(t){t._valueTracker||(t._valueTracker=VI(t))}function U0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=V0(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function mc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function lf(t,e){var n=e.checked;return ze({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function cy(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Ti(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function F0(t,e){e=e.checked,e!=null&&Dp(t,"checked",e,!1)}function uf(t,e){F0(t,e);var n=Ti(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?cf(t,e.type,n):e.hasOwnProperty("defaultValue")&&cf(t,e.type,Ti(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function dy(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function cf(t,e,n){(e!=="number"||mc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Pa=Array.isArray;function uo(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Ti(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function df(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(H(91));return ze({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function hy(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(H(92));if(Pa(n)){if(1<n.length)throw Error(H(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ti(n)}}function z0(t,e){var n=Ti(e.value),r=Ti(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function fy(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function $0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function hf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?$0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Su,B0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Su=Su||document.createElement("div"),Su.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Su.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function nl(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var za={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},UI=["Webkit","ms","Moz","O"];Object.keys(za).forEach(function(t){UI.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),za[e]=za[t]})});function H0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||za.hasOwnProperty(t)&&za[t]?(""+e).trim():e+"px"}function W0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=H0(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var FI=ze({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ff(t,e){if(e){if(FI[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(H(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(H(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(H(61))}if(e.style!=null&&typeof e.style!="object")throw Error(H(62))}}function pf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var mf=null;function Mp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var gf=null,co=null,ho=null;function py(t){if(t=Ol(t)){if(typeof gf!="function")throw Error(H(280));var e=t.stateNode;e&&(e=hd(e),gf(t.stateNode,t.type,e))}}function q0(t){co?ho?ho.push(t):ho=[t]:co=t}function G0(){if(co){var t=co,e=ho;if(ho=co=null,py(t),e)for(t=0;t<e.length;t++)py(e[t])}}function K0(t,e){return t(e)}function Q0(){}var uh=!1;function Y0(t,e,n){if(uh)return t(e,n);uh=!0;try{return K0(t,e,n)}finally{uh=!1,(co!==null||ho!==null)&&(Q0(),G0())}}function rl(t,e){var n=t.stateNode;if(n===null)return null;var r=hd(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(H(231,e,typeof n));return n}var yf=!1;if(Tr)try{var va={};Object.defineProperty(va,"passive",{get:function(){yf=!0}}),window.addEventListener("test",va,va),window.removeEventListener("test",va,va)}catch{yf=!1}function zI(t,e,n,r,i,s,o,l,u){var d=Array.prototype.slice.call(arguments,3);try{e.apply(n,d)}catch(f){this.onError(f)}}var $a=!1,gc=null,yc=!1,vf=null,$I={onError:function(t){$a=!0,gc=t}};function BI(t,e,n,r,i,s,o,l,u){$a=!1,gc=null,zI.apply($I,arguments)}function HI(t,e,n,r,i,s,o,l,u){if(BI.apply(this,arguments),$a){if($a){var d=gc;$a=!1,gc=null}else throw Error(H(198));yc||(yc=!0,vf=d)}}function ws(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function X0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function my(t){if(ws(t)!==t)throw Error(H(188))}function WI(t){var e=t.alternate;if(!e){if(e=ws(t),e===null)throw Error(H(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return my(i),t;if(s===r)return my(i),e;s=s.sibling}throw Error(H(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(H(189))}}if(n.alternate!==r)throw Error(H(190))}if(n.tag!==3)throw Error(H(188));return n.stateNode.current===n?t:e}function J0(t){return t=WI(t),t!==null?Z0(t):null}function Z0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Z0(t);if(e!==null)return e;t=t.sibling}return null}var ew=sn.unstable_scheduleCallback,gy=sn.unstable_cancelCallback,qI=sn.unstable_shouldYield,GI=sn.unstable_requestPaint,Qe=sn.unstable_now,KI=sn.unstable_getCurrentPriorityLevel,Vp=sn.unstable_ImmediatePriority,tw=sn.unstable_UserBlockingPriority,vc=sn.unstable_NormalPriority,QI=sn.unstable_LowPriority,nw=sn.unstable_IdlePriority,ld=null,Hn=null;function YI(t){if(Hn&&typeof Hn.onCommitFiberRoot=="function")try{Hn.onCommitFiberRoot(ld,t,void 0,(t.current.flags&128)===128)}catch{}}var Rn=Math.clz32?Math.clz32:ZI,XI=Math.log,JI=Math.LN2;function ZI(t){return t>>>=0,t===0?32:31-(XI(t)/JI|0)|0}var Au=64,ku=4194304;function Na(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function _c(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Na(l):(s&=o,s!==0&&(r=Na(s)))}else o=n&~i,o!==0?r=Na(o):s!==0&&(r=Na(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Rn(e),i=1<<n,r|=t[n],e&=~i;return r}function eS(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function tS(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Rn(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=eS(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function _f(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function rw(){var t=Au;return Au<<=1,!(Au&4194240)&&(Au=64),t}function ch(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function jl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Rn(e),t[e]=n}function nS(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Rn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Up(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Rn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var xe=0;function iw(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var sw,Fp,ow,aw,lw,wf=!1,bu=[],ui=null,ci=null,di=null,il=new Map,sl=new Map,Zr=[],rS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function yy(t,e){switch(t){case"focusin":case"focusout":ui=null;break;case"dragenter":case"dragleave":ci=null;break;case"mouseover":case"mouseout":di=null;break;case"pointerover":case"pointerout":il.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":sl.delete(e.pointerId)}}function _a(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Ol(e),e!==null&&Fp(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function iS(t,e,n,r,i){switch(e){case"focusin":return ui=_a(ui,t,e,n,r,i),!0;case"dragenter":return ci=_a(ci,t,e,n,r,i),!0;case"mouseover":return di=_a(di,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return il.set(s,_a(il.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,sl.set(s,_a(sl.get(s)||null,t,e,n,r,i)),!0}return!1}function uw(t){var e=ts(t.target);if(e!==null){var n=ws(e);if(n!==null){if(e=n.tag,e===13){if(e=X0(n),e!==null){t.blockedOn=e,lw(t.priority,function(){ow(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Qu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=xf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);mf=r,n.target.dispatchEvent(r),mf=null}else return e=Ol(n),e!==null&&Fp(e),t.blockedOn=n,!1;e.shift()}return!0}function vy(t,e,n){Qu(t)&&n.delete(e)}function sS(){wf=!1,ui!==null&&Qu(ui)&&(ui=null),ci!==null&&Qu(ci)&&(ci=null),di!==null&&Qu(di)&&(di=null),il.forEach(vy),sl.forEach(vy)}function wa(t,e){t.blockedOn===e&&(t.blockedOn=null,wf||(wf=!0,sn.unstable_scheduleCallback(sn.unstable_NormalPriority,sS)))}function ol(t){function e(i){return wa(i,t)}if(0<bu.length){wa(bu[0],t);for(var n=1;n<bu.length;n++){var r=bu[n];r.blockedOn===t&&(r.blockedOn=null)}}for(ui!==null&&wa(ui,t),ci!==null&&wa(ci,t),di!==null&&wa(di,t),il.forEach(e),sl.forEach(e),n=0;n<Zr.length;n++)r=Zr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Zr.length&&(n=Zr[0],n.blockedOn===null);)uw(n),n.blockedOn===null&&Zr.shift()}var fo=Pr.ReactCurrentBatchConfig,wc=!0;function oS(t,e,n,r){var i=xe,s=fo.transition;fo.transition=null;try{xe=1,zp(t,e,n,r)}finally{xe=i,fo.transition=s}}function aS(t,e,n,r){var i=xe,s=fo.transition;fo.transition=null;try{xe=4,zp(t,e,n,r)}finally{xe=i,fo.transition=s}}function zp(t,e,n,r){if(wc){var i=xf(t,e,n,r);if(i===null)wh(t,e,r,xc,n),yy(t,r);else if(iS(i,t,e,n,r))r.stopPropagation();else if(yy(t,r),e&4&&-1<rS.indexOf(t)){for(;i!==null;){var s=Ol(i);if(s!==null&&sw(s),s=xf(t,e,n,r),s===null&&wh(t,e,r,xc,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else wh(t,e,r,null,n)}}var xc=null;function xf(t,e,n,r){if(xc=null,t=Mp(r),t=ts(t),t!==null)if(e=ws(t),e===null)t=null;else if(n=e.tag,n===13){if(t=X0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return xc=t,null}function cw(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(KI()){case Vp:return 1;case tw:return 4;case vc:case QI:return 16;case nw:return 536870912;default:return 16}default:return 16}}var si=null,$p=null,Yu=null;function dw(){if(Yu)return Yu;var t,e=$p,n=e.length,r,i="value"in si?si.value:si.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Yu=i.slice(t,1<r?1-r:void 0)}function Xu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ru(){return!0}function _y(){return!1}function an(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ru:_y,this.isPropagationStopped=_y,this}return ze(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ru)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ru)},persist:function(){},isPersistent:Ru}),e}var Uo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Bp=an(Uo),Ll=ze({},Uo,{view:0,detail:0}),lS=an(Ll),dh,hh,xa,ud=ze({},Ll,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==xa&&(xa&&t.type==="mousemove"?(dh=t.screenX-xa.screenX,hh=t.screenY-xa.screenY):hh=dh=0,xa=t),dh)},movementY:function(t){return"movementY"in t?t.movementY:hh}}),wy=an(ud),uS=ze({},ud,{dataTransfer:0}),cS=an(uS),dS=ze({},Ll,{relatedTarget:0}),fh=an(dS),hS=ze({},Uo,{animationName:0,elapsedTime:0,pseudoElement:0}),fS=an(hS),pS=ze({},Uo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),mS=an(pS),gS=ze({},Uo,{data:0}),xy=an(gS),yS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},vS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_S={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=_S[t])?!!e[t]:!1}function Hp(){return wS}var xS=ze({},Ll,{key:function(t){if(t.key){var e=yS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Xu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?vS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hp,charCode:function(t){return t.type==="keypress"?Xu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Xu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ES=an(xS),TS=ze({},ud,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ey=an(TS),IS=ze({},Ll,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hp}),SS=an(IS),AS=ze({},Uo,{propertyName:0,elapsedTime:0,pseudoElement:0}),kS=an(AS),bS=ze({},ud,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),RS=an(bS),CS=[9,13,27,32],Wp=Tr&&"CompositionEvent"in window,Ba=null;Tr&&"documentMode"in document&&(Ba=document.documentMode);var PS=Tr&&"TextEvent"in window&&!Ba,hw=Tr&&(!Wp||Ba&&8<Ba&&11>=Ba),Ty=" ",Iy=!1;function fw(t,e){switch(t){case"keyup":return CS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function pw(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Js=!1;function NS(t,e){switch(t){case"compositionend":return pw(e);case"keypress":return e.which!==32?null:(Iy=!0,Ty);case"textInput":return t=e.data,t===Ty&&Iy?null:t;default:return null}}function DS(t,e){if(Js)return t==="compositionend"||!Wp&&fw(t,e)?(t=dw(),Yu=$p=si=null,Js=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return hw&&e.locale!=="ko"?null:e.data;default:return null}}var jS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Sy(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!jS[t.type]:e==="textarea"}function mw(t,e,n,r){q0(r),e=Ec(e,"onChange"),0<e.length&&(n=new Bp("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ha=null,al=null;function LS(t){Aw(t,0)}function cd(t){var e=to(t);if(U0(e))return t}function OS(t,e){if(t==="change")return e}var gw=!1;if(Tr){var ph;if(Tr){var mh="oninput"in document;if(!mh){var Ay=document.createElement("div");Ay.setAttribute("oninput","return;"),mh=typeof Ay.oninput=="function"}ph=mh}else ph=!1;gw=ph&&(!document.documentMode||9<document.documentMode)}function ky(){Ha&&(Ha.detachEvent("onpropertychange",yw),al=Ha=null)}function yw(t){if(t.propertyName==="value"&&cd(al)){var e=[];mw(e,al,t,Mp(t)),Y0(LS,e)}}function MS(t,e,n){t==="focusin"?(ky(),Ha=e,al=n,Ha.attachEvent("onpropertychange",yw)):t==="focusout"&&ky()}function VS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return cd(al)}function US(t,e){if(t==="click")return cd(e)}function FS(t,e){if(t==="input"||t==="change")return cd(e)}function zS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Pn=typeof Object.is=="function"?Object.is:zS;function ll(t,e){if(Pn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!nf.call(e,i)||!Pn(t[i],e[i]))return!1}return!0}function by(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ry(t,e){var n=by(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=by(n)}}function vw(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?vw(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function _w(){for(var t=window,e=mc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=mc(t.document)}return e}function qp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function $S(t){var e=_w(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&vw(n.ownerDocument.documentElement,n)){if(r!==null&&qp(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Ry(n,s);var o=Ry(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var BS=Tr&&"documentMode"in document&&11>=document.documentMode,Zs=null,Ef=null,Wa=null,Tf=!1;function Cy(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Tf||Zs==null||Zs!==mc(r)||(r=Zs,"selectionStart"in r&&qp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Wa&&ll(Wa,r)||(Wa=r,r=Ec(Ef,"onSelect"),0<r.length&&(e=new Bp("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Zs)))}function Cu(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var eo={animationend:Cu("Animation","AnimationEnd"),animationiteration:Cu("Animation","AnimationIteration"),animationstart:Cu("Animation","AnimationStart"),transitionend:Cu("Transition","TransitionEnd")},gh={},ww={};Tr&&(ww=document.createElement("div").style,"AnimationEvent"in window||(delete eo.animationend.animation,delete eo.animationiteration.animation,delete eo.animationstart.animation),"TransitionEvent"in window||delete eo.transitionend.transition);function dd(t){if(gh[t])return gh[t];if(!eo[t])return t;var e=eo[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in ww)return gh[t]=e[n];return t}var xw=dd("animationend"),Ew=dd("animationiteration"),Tw=dd("animationstart"),Iw=dd("transitionend"),Sw=new Map,Py="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ri(t,e){Sw.set(t,e),_s(e,[t])}for(var yh=0;yh<Py.length;yh++){var vh=Py[yh],HS=vh.toLowerCase(),WS=vh[0].toUpperCase()+vh.slice(1);Ri(HS,"on"+WS)}Ri(xw,"onAnimationEnd");Ri(Ew,"onAnimationIteration");Ri(Tw,"onAnimationStart");Ri("dblclick","onDoubleClick");Ri("focusin","onFocus");Ri("focusout","onBlur");Ri(Iw,"onTransitionEnd");xo("onMouseEnter",["mouseout","mouseover"]);xo("onMouseLeave",["mouseout","mouseover"]);xo("onPointerEnter",["pointerout","pointerover"]);xo("onPointerLeave",["pointerout","pointerover"]);_s("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));_s("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));_s("onBeforeInput",["compositionend","keypress","textInput","paste"]);_s("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));_s("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));_s("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Da="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),qS=new Set("cancel close invalid load scroll toggle".split(" ").concat(Da));function Ny(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,HI(r,e,void 0,t),t.currentTarget=null}function Aw(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,d=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;Ny(i,l,d),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,d=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;Ny(i,l,d),s=u}}}if(yc)throw t=vf,yc=!1,vf=null,t}function Ce(t,e){var n=e[bf];n===void 0&&(n=e[bf]=new Set);var r=t+"__bubble";n.has(r)||(kw(e,t,2,!1),n.add(r))}function _h(t,e,n){var r=0;e&&(r|=4),kw(n,t,r,e)}var Pu="_reactListening"+Math.random().toString(36).slice(2);function ul(t){if(!t[Pu]){t[Pu]=!0,j0.forEach(function(n){n!=="selectionchange"&&(qS.has(n)||_h(n,!1,t),_h(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Pu]||(e[Pu]=!0,_h("selectionchange",!1,e))}}function kw(t,e,n,r){switch(cw(e)){case 1:var i=oS;break;case 4:i=aS;break;default:i=zp}n=i.bind(null,e,n,t),i=void 0,!yf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function wh(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=ts(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}Y0(function(){var d=s,f=Mp(n),m=[];e:{var g=Sw.get(t);if(g!==void 0){var I=Bp,C=t;switch(t){case"keypress":if(Xu(n)===0)break e;case"keydown":case"keyup":I=ES;break;case"focusin":C="focus",I=fh;break;case"focusout":C="blur",I=fh;break;case"beforeblur":case"afterblur":I=fh;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":I=wy;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":I=cS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":I=SS;break;case xw:case Ew:case Tw:I=fS;break;case Iw:I=kS;break;case"scroll":I=lS;break;case"wheel":I=RS;break;case"copy":case"cut":case"paste":I=mS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":I=Ey}var b=(e&4)!==0,P=!b&&t==="scroll",x=b?g!==null?g+"Capture":null:g;b=[];for(var _=d,A;_!==null;){A=_;var O=A.stateNode;if(A.tag===5&&O!==null&&(A=O,x!==null&&(O=rl(_,x),O!=null&&b.push(cl(_,O,A)))),P)break;_=_.return}0<b.length&&(g=new I(g,C,null,n,f),m.push({event:g,listeners:b}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",I=t==="mouseout"||t==="pointerout",g&&n!==mf&&(C=n.relatedTarget||n.fromElement)&&(ts(C)||C[Ir]))break e;if((I||g)&&(g=f.window===f?f:(g=f.ownerDocument)?g.defaultView||g.parentWindow:window,I?(C=n.relatedTarget||n.toElement,I=d,C=C?ts(C):null,C!==null&&(P=ws(C),C!==P||C.tag!==5&&C.tag!==6)&&(C=null)):(I=null,C=d),I!==C)){if(b=wy,O="onMouseLeave",x="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(b=Ey,O="onPointerLeave",x="onPointerEnter",_="pointer"),P=I==null?g:to(I),A=C==null?g:to(C),g=new b(O,_+"leave",I,n,f),g.target=P,g.relatedTarget=A,O=null,ts(f)===d&&(b=new b(x,_+"enter",C,n,f),b.target=A,b.relatedTarget=P,O=b),P=O,I&&C)t:{for(b=I,x=C,_=0,A=b;A;A=Ws(A))_++;for(A=0,O=x;O;O=Ws(O))A++;for(;0<_-A;)b=Ws(b),_--;for(;0<A-_;)x=Ws(x),A--;for(;_--;){if(b===x||x!==null&&b===x.alternate)break t;b=Ws(b),x=Ws(x)}b=null}else b=null;I!==null&&Dy(m,g,I,b,!1),C!==null&&P!==null&&Dy(m,P,C,b,!0)}}e:{if(g=d?to(d):window,I=g.nodeName&&g.nodeName.toLowerCase(),I==="select"||I==="input"&&g.type==="file")var M=OS;else if(Sy(g))if(gw)M=FS;else{M=VS;var D=MS}else(I=g.nodeName)&&I.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(M=US);if(M&&(M=M(t,d))){mw(m,M,n,f);break e}D&&D(t,g,d),t==="focusout"&&(D=g._wrapperState)&&D.controlled&&g.type==="number"&&cf(g,"number",g.value)}switch(D=d?to(d):window,t){case"focusin":(Sy(D)||D.contentEditable==="true")&&(Zs=D,Ef=d,Wa=null);break;case"focusout":Wa=Ef=Zs=null;break;case"mousedown":Tf=!0;break;case"contextmenu":case"mouseup":case"dragend":Tf=!1,Cy(m,n,f);break;case"selectionchange":if(BS)break;case"keydown":case"keyup":Cy(m,n,f)}var T;if(Wp)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Js?fw(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(hw&&n.locale!=="ko"&&(Js||y!=="onCompositionStart"?y==="onCompositionEnd"&&Js&&(T=dw()):(si=f,$p="value"in si?si.value:si.textContent,Js=!0)),D=Ec(d,y),0<D.length&&(y=new xy(y,t,null,n,f),m.push({event:y,listeners:D}),T?y.data=T:(T=pw(n),T!==null&&(y.data=T)))),(T=PS?NS(t,n):DS(t,n))&&(d=Ec(d,"onBeforeInput"),0<d.length&&(f=new xy("onBeforeInput","beforeinput",null,n,f),m.push({event:f,listeners:d}),f.data=T))}Aw(m,e)})}function cl(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ec(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=rl(t,n),s!=null&&r.unshift(cl(t,s,i)),s=rl(t,e),s!=null&&r.push(cl(t,s,i))),t=t.return}return r}function Ws(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Dy(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,d=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&d!==null&&(l=d,i?(u=rl(n,s),u!=null&&o.unshift(cl(n,u,l))):i||(u=rl(n,s),u!=null&&o.push(cl(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var GS=/\r\n?/g,KS=/\u0000|\uFFFD/g;function jy(t){return(typeof t=="string"?t:""+t).replace(GS,`
`).replace(KS,"")}function Nu(t,e,n){if(e=jy(e),jy(t)!==e&&n)throw Error(H(425))}function Tc(){}var If=null,Sf=null;function Af(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var kf=typeof setTimeout=="function"?setTimeout:void 0,QS=typeof clearTimeout=="function"?clearTimeout:void 0,Ly=typeof Promise=="function"?Promise:void 0,YS=typeof queueMicrotask=="function"?queueMicrotask:typeof Ly<"u"?function(t){return Ly.resolve(null).then(t).catch(XS)}:kf;function XS(t){setTimeout(function(){throw t})}function xh(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),ol(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ol(e)}function hi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Oy(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Fo=Math.random().toString(36).slice(2),$n="__reactFiber$"+Fo,dl="__reactProps$"+Fo,Ir="__reactContainer$"+Fo,bf="__reactEvents$"+Fo,JS="__reactListeners$"+Fo,ZS="__reactHandles$"+Fo;function ts(t){var e=t[$n];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ir]||n[$n]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Oy(t);t!==null;){if(n=t[$n])return n;t=Oy(t)}return e}t=n,n=t.parentNode}return null}function Ol(t){return t=t[$n]||t[Ir],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function to(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(H(33))}function hd(t){return t[dl]||null}var Rf=[],no=-1;function Ci(t){return{current:t}}function De(t){0>no||(t.current=Rf[no],Rf[no]=null,no--)}function be(t,e){no++,Rf[no]=t.current,t.current=e}var Ii={},Rt=Ci(Ii),qt=Ci(!1),ls=Ii;function Eo(t,e){var n=t.type.contextTypes;if(!n)return Ii;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Gt(t){return t=t.childContextTypes,t!=null}function Ic(){De(qt),De(Rt)}function My(t,e,n){if(Rt.current!==Ii)throw Error(H(168));be(Rt,e),be(qt,n)}function bw(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(H(108,MI(t)||"Unknown",i));return ze({},n,r)}function Sc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ii,ls=Rt.current,be(Rt,t),be(qt,qt.current),!0}function Vy(t,e,n){var r=t.stateNode;if(!r)throw Error(H(169));n?(t=bw(t,e,ls),r.__reactInternalMemoizedMergedChildContext=t,De(qt),De(Rt),be(Rt,t)):De(qt),be(qt,n)}var pr=null,fd=!1,Eh=!1;function Rw(t){pr===null?pr=[t]:pr.push(t)}function eA(t){fd=!0,Rw(t)}function Pi(){if(!Eh&&pr!==null){Eh=!0;var t=0,e=xe;try{var n=pr;for(xe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}pr=null,fd=!1}catch(i){throw pr!==null&&(pr=pr.slice(t+1)),ew(Vp,Pi),i}finally{xe=e,Eh=!1}}return null}var ro=[],io=0,Ac=null,kc=0,fn=[],pn=0,us=null,mr=1,gr="";function Xi(t,e){ro[io++]=kc,ro[io++]=Ac,Ac=t,kc=e}function Cw(t,e,n){fn[pn++]=mr,fn[pn++]=gr,fn[pn++]=us,us=t;var r=mr;t=gr;var i=32-Rn(r)-1;r&=~(1<<i),n+=1;var s=32-Rn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,mr=1<<32-Rn(e)+i|n<<i|r,gr=s+t}else mr=1<<s|n<<i|r,gr=t}function Gp(t){t.return!==null&&(Xi(t,1),Cw(t,1,0))}function Kp(t){for(;t===Ac;)Ac=ro[--io],ro[io]=null,kc=ro[--io],ro[io]=null;for(;t===us;)us=fn[--pn],fn[pn]=null,gr=fn[--pn],fn[pn]=null,mr=fn[--pn],fn[pn]=null}var rn=null,tn=null,Le=!1,bn=null;function Pw(t,e){var n=mn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Uy(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,rn=t,tn=hi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,rn=t,tn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=us!==null?{id:mr,overflow:gr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=mn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,rn=t,tn=null,!0):!1;default:return!1}}function Cf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Pf(t){if(Le){var e=tn;if(e){var n=e;if(!Uy(t,e)){if(Cf(t))throw Error(H(418));e=hi(n.nextSibling);var r=rn;e&&Uy(t,e)?Pw(r,n):(t.flags=t.flags&-4097|2,Le=!1,rn=t)}}else{if(Cf(t))throw Error(H(418));t.flags=t.flags&-4097|2,Le=!1,rn=t}}}function Fy(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;rn=t}function Du(t){if(t!==rn)return!1;if(!Le)return Fy(t),Le=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Af(t.type,t.memoizedProps)),e&&(e=tn)){if(Cf(t))throw Nw(),Error(H(418));for(;e;)Pw(t,e),e=hi(e.nextSibling)}if(Fy(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(H(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){tn=hi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}tn=null}}else tn=rn?hi(t.stateNode.nextSibling):null;return!0}function Nw(){for(var t=tn;t;)t=hi(t.nextSibling)}function To(){tn=rn=null,Le=!1}function Qp(t){bn===null?bn=[t]:bn.push(t)}var tA=Pr.ReactCurrentBatchConfig;function Ea(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(H(309));var r=n.stateNode}if(!r)throw Error(H(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(H(284));if(!n._owner)throw Error(H(290,t))}return t}function ju(t,e){throw t=Object.prototype.toString.call(e),Error(H(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function zy(t){var e=t._init;return e(t._payload)}function Dw(t){function e(x,_){if(t){var A=x.deletions;A===null?(x.deletions=[_],x.flags|=16):A.push(_)}}function n(x,_){if(!t)return null;for(;_!==null;)e(x,_),_=_.sibling;return null}function r(x,_){for(x=new Map;_!==null;)_.key!==null?x.set(_.key,_):x.set(_.index,_),_=_.sibling;return x}function i(x,_){return x=gi(x,_),x.index=0,x.sibling=null,x}function s(x,_,A){return x.index=A,t?(A=x.alternate,A!==null?(A=A.index,A<_?(x.flags|=2,_):A):(x.flags|=2,_)):(x.flags|=1048576,_)}function o(x){return t&&x.alternate===null&&(x.flags|=2),x}function l(x,_,A,O){return _===null||_.tag!==6?(_=Rh(A,x.mode,O),_.return=x,_):(_=i(_,A),_.return=x,_)}function u(x,_,A,O){var M=A.type;return M===Xs?f(x,_,A.props.children,O,A.key):_!==null&&(_.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Xr&&zy(M)===_.type)?(O=i(_,A.props),O.ref=Ea(x,_,A),O.return=x,O):(O=ic(A.type,A.key,A.props,null,x.mode,O),O.ref=Ea(x,_,A),O.return=x,O)}function d(x,_,A,O){return _===null||_.tag!==4||_.stateNode.containerInfo!==A.containerInfo||_.stateNode.implementation!==A.implementation?(_=Ch(A,x.mode,O),_.return=x,_):(_=i(_,A.children||[]),_.return=x,_)}function f(x,_,A,O,M){return _===null||_.tag!==7?(_=os(A,x.mode,O,M),_.return=x,_):(_=i(_,A),_.return=x,_)}function m(x,_,A){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Rh(""+_,x.mode,A),_.return=x,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Tu:return A=ic(_.type,_.key,_.props,null,x.mode,A),A.ref=Ea(x,null,_),A.return=x,A;case Ys:return _=Ch(_,x.mode,A),_.return=x,_;case Xr:var O=_._init;return m(x,O(_._payload),A)}if(Pa(_)||ya(_))return _=os(_,x.mode,A,null),_.return=x,_;ju(x,_)}return null}function g(x,_,A,O){var M=_!==null?_.key:null;if(typeof A=="string"&&A!==""||typeof A=="number")return M!==null?null:l(x,_,""+A,O);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case Tu:return A.key===M?u(x,_,A,O):null;case Ys:return A.key===M?d(x,_,A,O):null;case Xr:return M=A._init,g(x,_,M(A._payload),O)}if(Pa(A)||ya(A))return M!==null?null:f(x,_,A,O,null);ju(x,A)}return null}function I(x,_,A,O,M){if(typeof O=="string"&&O!==""||typeof O=="number")return x=x.get(A)||null,l(_,x,""+O,M);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case Tu:return x=x.get(O.key===null?A:O.key)||null,u(_,x,O,M);case Ys:return x=x.get(O.key===null?A:O.key)||null,d(_,x,O,M);case Xr:var D=O._init;return I(x,_,A,D(O._payload),M)}if(Pa(O)||ya(O))return x=x.get(A)||null,f(_,x,O,M,null);ju(_,O)}return null}function C(x,_,A,O){for(var M=null,D=null,T=_,y=_=0,E=null;T!==null&&y<A.length;y++){T.index>y?(E=T,T=null):E=T.sibling;var S=g(x,T,A[y],O);if(S===null){T===null&&(T=E);break}t&&T&&S.alternate===null&&e(x,T),_=s(S,_,y),D===null?M=S:D.sibling=S,D=S,T=E}if(y===A.length)return n(x,T),Le&&Xi(x,y),M;if(T===null){for(;y<A.length;y++)T=m(x,A[y],O),T!==null&&(_=s(T,_,y),D===null?M=T:D.sibling=T,D=T);return Le&&Xi(x,y),M}for(T=r(x,T);y<A.length;y++)E=I(T,x,y,A[y],O),E!==null&&(t&&E.alternate!==null&&T.delete(E.key===null?y:E.key),_=s(E,_,y),D===null?M=E:D.sibling=E,D=E);return t&&T.forEach(function(N){return e(x,N)}),Le&&Xi(x,y),M}function b(x,_,A,O){var M=ya(A);if(typeof M!="function")throw Error(H(150));if(A=M.call(A),A==null)throw Error(H(151));for(var D=M=null,T=_,y=_=0,E=null,S=A.next();T!==null&&!S.done;y++,S=A.next()){T.index>y?(E=T,T=null):E=T.sibling;var N=g(x,T,S.value,O);if(N===null){T===null&&(T=E);break}t&&T&&N.alternate===null&&e(x,T),_=s(N,_,y),D===null?M=N:D.sibling=N,D=N,T=E}if(S.done)return n(x,T),Le&&Xi(x,y),M;if(T===null){for(;!S.done;y++,S=A.next())S=m(x,S.value,O),S!==null&&(_=s(S,_,y),D===null?M=S:D.sibling=S,D=S);return Le&&Xi(x,y),M}for(T=r(x,T);!S.done;y++,S=A.next())S=I(T,x,y,S.value,O),S!==null&&(t&&S.alternate!==null&&T.delete(S.key===null?y:S.key),_=s(S,_,y),D===null?M=S:D.sibling=S,D=S);return t&&T.forEach(function(L){return e(x,L)}),Le&&Xi(x,y),M}function P(x,_,A,O){if(typeof A=="object"&&A!==null&&A.type===Xs&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case Tu:e:{for(var M=A.key,D=_;D!==null;){if(D.key===M){if(M=A.type,M===Xs){if(D.tag===7){n(x,D.sibling),_=i(D,A.props.children),_.return=x,x=_;break e}}else if(D.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Xr&&zy(M)===D.type){n(x,D.sibling),_=i(D,A.props),_.ref=Ea(x,D,A),_.return=x,x=_;break e}n(x,D);break}else e(x,D);D=D.sibling}A.type===Xs?(_=os(A.props.children,x.mode,O,A.key),_.return=x,x=_):(O=ic(A.type,A.key,A.props,null,x.mode,O),O.ref=Ea(x,_,A),O.return=x,x=O)}return o(x);case Ys:e:{for(D=A.key;_!==null;){if(_.key===D)if(_.tag===4&&_.stateNode.containerInfo===A.containerInfo&&_.stateNode.implementation===A.implementation){n(x,_.sibling),_=i(_,A.children||[]),_.return=x,x=_;break e}else{n(x,_);break}else e(x,_);_=_.sibling}_=Ch(A,x.mode,O),_.return=x,x=_}return o(x);case Xr:return D=A._init,P(x,_,D(A._payload),O)}if(Pa(A))return C(x,_,A,O);if(ya(A))return b(x,_,A,O);ju(x,A)}return typeof A=="string"&&A!==""||typeof A=="number"?(A=""+A,_!==null&&_.tag===6?(n(x,_.sibling),_=i(_,A),_.return=x,x=_):(n(x,_),_=Rh(A,x.mode,O),_.return=x,x=_),o(x)):n(x,_)}return P}var Io=Dw(!0),jw=Dw(!1),bc=Ci(null),Rc=null,so=null,Yp=null;function Xp(){Yp=so=Rc=null}function Jp(t){var e=bc.current;De(bc),t._currentValue=e}function Nf(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function po(t,e){Rc=t,Yp=so=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Wt=!0),t.firstContext=null)}function yn(t){var e=t._currentValue;if(Yp!==t)if(t={context:t,memoizedValue:e,next:null},so===null){if(Rc===null)throw Error(H(308));so=t,Rc.dependencies={lanes:0,firstContext:t}}else so=so.next=t;return e}var ns=null;function Zp(t){ns===null?ns=[t]:ns.push(t)}function Lw(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Zp(e)):(n.next=i.next,i.next=n),e.interleaved=n,Sr(t,r)}function Sr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Jr=!1;function em(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ow(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function wr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function fi(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ge&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Sr(t,n)}return i=r.interleaved,i===null?(e.next=e,Zp(r)):(e.next=i.next,i.next=e),r.interleaved=e,Sr(t,n)}function Ju(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Up(t,n)}}function $y(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Cc(t,e,n,r){var i=t.updateQueue;Jr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,d=u.next;u.next=null,o===null?s=d:o.next=d,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=d:l.next=d,f.lastBaseUpdate=u))}if(s!==null){var m=i.baseState;o=0,f=d=u=null,l=s;do{var g=l.lane,I=l.eventTime;if((r&g)===g){f!==null&&(f=f.next={eventTime:I,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var C=t,b=l;switch(g=e,I=n,b.tag){case 1:if(C=b.payload,typeof C=="function"){m=C.call(I,m,g);break e}m=C;break e;case 3:C.flags=C.flags&-65537|128;case 0:if(C=b.payload,g=typeof C=="function"?C.call(I,m,g):C,g==null)break e;m=ze({},m,g);break e;case 2:Jr=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,g=i.effects,g===null?i.effects=[l]:g.push(l))}else I={eventTime:I,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(d=f=I,u=m):f=f.next=I,o|=g;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;g=l,l=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(f===null&&(u=m),i.baseState=u,i.firstBaseUpdate=d,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);ds|=o,t.lanes=o,t.memoizedState=m}}function By(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(H(191,i));i.call(r)}}}var Ml={},Wn=Ci(Ml),hl=Ci(Ml),fl=Ci(Ml);function rs(t){if(t===Ml)throw Error(H(174));return t}function tm(t,e){switch(be(fl,e),be(hl,t),be(Wn,Ml),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:hf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=hf(e,t)}De(Wn),be(Wn,e)}function So(){De(Wn),De(hl),De(fl)}function Mw(t){rs(fl.current);var e=rs(Wn.current),n=hf(e,t.type);e!==n&&(be(hl,t),be(Wn,n))}function nm(t){hl.current===t&&(De(Wn),De(hl))}var Ve=Ci(0);function Pc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Th=[];function rm(){for(var t=0;t<Th.length;t++)Th[t]._workInProgressVersionPrimary=null;Th.length=0}var Zu=Pr.ReactCurrentDispatcher,Ih=Pr.ReactCurrentBatchConfig,cs=0,Ue=null,nt=null,at=null,Nc=!1,qa=!1,pl=0,nA=0;function xt(){throw Error(H(321))}function im(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Pn(t[n],e[n]))return!1;return!0}function sm(t,e,n,r,i,s){if(cs=s,Ue=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Zu.current=t===null||t.memoizedState===null?oA:aA,t=n(r,i),qa){s=0;do{if(qa=!1,pl=0,25<=s)throw Error(H(301));s+=1,at=nt=null,e.updateQueue=null,Zu.current=lA,t=n(r,i)}while(qa)}if(Zu.current=Dc,e=nt!==null&&nt.next!==null,cs=0,at=nt=Ue=null,Nc=!1,e)throw Error(H(300));return t}function om(){var t=pl!==0;return pl=0,t}function zn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return at===null?Ue.memoizedState=at=t:at=at.next=t,at}function vn(){if(nt===null){var t=Ue.alternate;t=t!==null?t.memoizedState:null}else t=nt.next;var e=at===null?Ue.memoizedState:at.next;if(e!==null)at=e,nt=t;else{if(t===null)throw Error(H(310));nt=t,t={memoizedState:nt.memoizedState,baseState:nt.baseState,baseQueue:nt.baseQueue,queue:nt.queue,next:null},at===null?Ue.memoizedState=at=t:at=at.next=t}return at}function ml(t,e){return typeof e=="function"?e(t):e}function Sh(t){var e=vn(),n=e.queue;if(n===null)throw Error(H(311));n.lastRenderedReducer=t;var r=nt,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,d=s;do{var f=d.lane;if((cs&f)===f)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:t(r,d.action);else{var m={lane:f,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(l=u=m,o=r):u=u.next=m,Ue.lanes|=f,ds|=f}d=d.next}while(d!==null&&d!==s);u===null?o=r:u.next=l,Pn(r,e.memoizedState)||(Wt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Ue.lanes|=s,ds|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ah(t){var e=vn(),n=e.queue;if(n===null)throw Error(H(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Pn(s,e.memoizedState)||(Wt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Vw(){}function Uw(t,e){var n=Ue,r=vn(),i=e(),s=!Pn(r.memoizedState,i);if(s&&(r.memoizedState=i,Wt=!0),r=r.queue,am($w.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||at!==null&&at.memoizedState.tag&1){if(n.flags|=2048,gl(9,zw.bind(null,n,r,i,e),void 0,null),lt===null)throw Error(H(349));cs&30||Fw(n,e,i)}return i}function Fw(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ue.updateQueue,e===null?(e={lastEffect:null,stores:null},Ue.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function zw(t,e,n,r){e.value=n,e.getSnapshot=r,Bw(e)&&Hw(t)}function $w(t,e,n){return n(function(){Bw(e)&&Hw(t)})}function Bw(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Pn(t,n)}catch{return!0}}function Hw(t){var e=Sr(t,1);e!==null&&Cn(e,t,1,-1)}function Hy(t){var e=zn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ml,lastRenderedState:t},e.queue=t,t=t.dispatch=sA.bind(null,Ue,t),[e.memoizedState,t]}function gl(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ue.updateQueue,e===null?(e={lastEffect:null,stores:null},Ue.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Ww(){return vn().memoizedState}function ec(t,e,n,r){var i=zn();Ue.flags|=t,i.memoizedState=gl(1|e,n,void 0,r===void 0?null:r)}function pd(t,e,n,r){var i=vn();r=r===void 0?null:r;var s=void 0;if(nt!==null){var o=nt.memoizedState;if(s=o.destroy,r!==null&&im(r,o.deps)){i.memoizedState=gl(e,n,s,r);return}}Ue.flags|=t,i.memoizedState=gl(1|e,n,s,r)}function Wy(t,e){return ec(8390656,8,t,e)}function am(t,e){return pd(2048,8,t,e)}function qw(t,e){return pd(4,2,t,e)}function Gw(t,e){return pd(4,4,t,e)}function Kw(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Qw(t,e,n){return n=n!=null?n.concat([t]):null,pd(4,4,Kw.bind(null,e,t),n)}function lm(){}function Yw(t,e){var n=vn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&im(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Xw(t,e){var n=vn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&im(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Jw(t,e,n){return cs&21?(Pn(n,e)||(n=rw(),Ue.lanes|=n,ds|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Wt=!0),t.memoizedState=n)}function rA(t,e){var n=xe;xe=n!==0&&4>n?n:4,t(!0);var r=Ih.transition;Ih.transition={};try{t(!1),e()}finally{xe=n,Ih.transition=r}}function Zw(){return vn().memoizedState}function iA(t,e,n){var r=mi(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ex(t))tx(e,n);else if(n=Lw(t,e,n,r),n!==null){var i=jt();Cn(n,t,r,i),nx(n,e,r)}}function sA(t,e,n){var r=mi(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ex(t))tx(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,Pn(l,o)){var u=e.interleaved;u===null?(i.next=i,Zp(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=Lw(t,e,i,r),n!==null&&(i=jt(),Cn(n,t,r,i),nx(n,e,r))}}function ex(t){var e=t.alternate;return t===Ue||e!==null&&e===Ue}function tx(t,e){qa=Nc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function nx(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Up(t,n)}}var Dc={readContext:yn,useCallback:xt,useContext:xt,useEffect:xt,useImperativeHandle:xt,useInsertionEffect:xt,useLayoutEffect:xt,useMemo:xt,useReducer:xt,useRef:xt,useState:xt,useDebugValue:xt,useDeferredValue:xt,useTransition:xt,useMutableSource:xt,useSyncExternalStore:xt,useId:xt,unstable_isNewReconciler:!1},oA={readContext:yn,useCallback:function(t,e){return zn().memoizedState=[t,e===void 0?null:e],t},useContext:yn,useEffect:Wy,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ec(4194308,4,Kw.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ec(4194308,4,t,e)},useInsertionEffect:function(t,e){return ec(4,2,t,e)},useMemo:function(t,e){var n=zn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=zn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=iA.bind(null,Ue,t),[r.memoizedState,t]},useRef:function(t){var e=zn();return t={current:t},e.memoizedState=t},useState:Hy,useDebugValue:lm,useDeferredValue:function(t){return zn().memoizedState=t},useTransition:function(){var t=Hy(!1),e=t[0];return t=rA.bind(null,t[1]),zn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ue,i=zn();if(Le){if(n===void 0)throw Error(H(407));n=n()}else{if(n=e(),lt===null)throw Error(H(349));cs&30||Fw(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Wy($w.bind(null,r,s,t),[t]),r.flags|=2048,gl(9,zw.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=zn(),e=lt.identifierPrefix;if(Le){var n=gr,r=mr;n=(r&~(1<<32-Rn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=pl++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=nA++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},aA={readContext:yn,useCallback:Yw,useContext:yn,useEffect:am,useImperativeHandle:Qw,useInsertionEffect:qw,useLayoutEffect:Gw,useMemo:Xw,useReducer:Sh,useRef:Ww,useState:function(){return Sh(ml)},useDebugValue:lm,useDeferredValue:function(t){var e=vn();return Jw(e,nt.memoizedState,t)},useTransition:function(){var t=Sh(ml)[0],e=vn().memoizedState;return[t,e]},useMutableSource:Vw,useSyncExternalStore:Uw,useId:Zw,unstable_isNewReconciler:!1},lA={readContext:yn,useCallback:Yw,useContext:yn,useEffect:am,useImperativeHandle:Qw,useInsertionEffect:qw,useLayoutEffect:Gw,useMemo:Xw,useReducer:Ah,useRef:Ww,useState:function(){return Ah(ml)},useDebugValue:lm,useDeferredValue:function(t){var e=vn();return nt===null?e.memoizedState=t:Jw(e,nt.memoizedState,t)},useTransition:function(){var t=Ah(ml)[0],e=vn().memoizedState;return[t,e]},useMutableSource:Vw,useSyncExternalStore:Uw,useId:Zw,unstable_isNewReconciler:!1};function An(t,e){if(t&&t.defaultProps){e=ze({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Df(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ze({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var md={isMounted:function(t){return(t=t._reactInternals)?ws(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=jt(),i=mi(t),s=wr(r,i);s.payload=e,n!=null&&(s.callback=n),e=fi(t,s,i),e!==null&&(Cn(e,t,i,r),Ju(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=jt(),i=mi(t),s=wr(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=fi(t,s,i),e!==null&&(Cn(e,t,i,r),Ju(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=jt(),r=mi(t),i=wr(n,r);i.tag=2,e!=null&&(i.callback=e),e=fi(t,i,r),e!==null&&(Cn(e,t,r,n),Ju(e,t,r))}};function qy(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!ll(n,r)||!ll(i,s):!0}function rx(t,e,n){var r=!1,i=Ii,s=e.contextType;return typeof s=="object"&&s!==null?s=yn(s):(i=Gt(e)?ls:Rt.current,r=e.contextTypes,s=(r=r!=null)?Eo(t,i):Ii),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=md,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Gy(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&md.enqueueReplaceState(e,e.state,null)}function jf(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},em(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=yn(s):(s=Gt(e)?ls:Rt.current,i.context=Eo(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Df(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&md.enqueueReplaceState(i,i.state,null),Cc(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Ao(t,e){try{var n="",r=e;do n+=OI(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function kh(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Lf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var uA=typeof WeakMap=="function"?WeakMap:Map;function ix(t,e,n){n=wr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Lc||(Lc=!0,Wf=r),Lf(t,e)},n}function sx(t,e,n){n=wr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Lf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Lf(t,e),typeof r!="function"&&(pi===null?pi=new Set([this]):pi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Ky(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new uA;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=TA.bind(null,t,e,n),e.then(t,t))}function Qy(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Yy(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=wr(-1,1),e.tag=2,fi(n,e,1))),n.lanes|=1),t)}var cA=Pr.ReactCurrentOwner,Wt=!1;function Dt(t,e,n,r){e.child=t===null?jw(e,null,n,r):Io(e,t.child,n,r)}function Xy(t,e,n,r,i){n=n.render;var s=e.ref;return po(e,i),r=sm(t,e,n,r,s,i),n=om(),t!==null&&!Wt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Ar(t,e,i)):(Le&&n&&Gp(e),e.flags|=1,Dt(t,e,r,i),e.child)}function Jy(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!gm(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,ox(t,e,s,r,i)):(t=ic(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ll,n(o,r)&&t.ref===e.ref)return Ar(t,e,i)}return e.flags|=1,t=gi(s,r),t.ref=e.ref,t.return=e,e.child=t}function ox(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(ll(s,r)&&t.ref===e.ref)if(Wt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Wt=!0);else return e.lanes=t.lanes,Ar(t,e,i)}return Of(t,e,n,r,i)}function ax(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},be(ao,en),en|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,be(ao,en),en|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,be(ao,en),en|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,be(ao,en),en|=r;return Dt(t,e,i,n),e.child}function lx(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Of(t,e,n,r,i){var s=Gt(n)?ls:Rt.current;return s=Eo(e,s),po(e,i),n=sm(t,e,n,r,s,i),r=om(),t!==null&&!Wt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Ar(t,e,i)):(Le&&r&&Gp(e),e.flags|=1,Dt(t,e,n,i),e.child)}function Zy(t,e,n,r,i){if(Gt(n)){var s=!0;Sc(e)}else s=!1;if(po(e,i),e.stateNode===null)tc(t,e),rx(e,n,r),jf(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,d=n.contextType;typeof d=="object"&&d!==null?d=yn(d):(d=Gt(n)?ls:Rt.current,d=Eo(e,d));var f=n.getDerivedStateFromProps,m=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==d)&&Gy(e,o,r,d),Jr=!1;var g=e.memoizedState;o.state=g,Cc(e,r,o,i),u=e.memoizedState,l!==r||g!==u||qt.current||Jr?(typeof f=="function"&&(Df(e,n,f,r),u=e.memoizedState),(l=Jr||qy(e,n,l,r,g,u,d))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=d,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Ow(t,e),l=e.memoizedProps,d=e.type===e.elementType?l:An(e.type,l),o.props=d,m=e.pendingProps,g=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=yn(u):(u=Gt(n)?ls:Rt.current,u=Eo(e,u));var I=n.getDerivedStateFromProps;(f=typeof I=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==m||g!==u)&&Gy(e,o,r,u),Jr=!1,g=e.memoizedState,o.state=g,Cc(e,r,o,i);var C=e.memoizedState;l!==m||g!==C||qt.current||Jr?(typeof I=="function"&&(Df(e,n,I,r),C=e.memoizedState),(d=Jr||qy(e,n,d,r,g,C,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,C,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,C,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=C),o.props=r,o.state=C,o.context=u,r=d):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return Mf(t,e,n,r,s,i)}function Mf(t,e,n,r,i,s){lx(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Vy(e,n,!1),Ar(t,e,s);r=e.stateNode,cA.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Io(e,t.child,null,s),e.child=Io(e,null,l,s)):Dt(t,e,l,s),e.memoizedState=r.state,i&&Vy(e,n,!0),e.child}function ux(t){var e=t.stateNode;e.pendingContext?My(t,e.pendingContext,e.pendingContext!==e.context):e.context&&My(t,e.context,!1),tm(t,e.containerInfo)}function ev(t,e,n,r,i){return To(),Qp(i),e.flags|=256,Dt(t,e,n,r),e.child}var Vf={dehydrated:null,treeContext:null,retryLane:0};function Uf(t){return{baseLanes:t,cachePool:null,transitions:null}}function cx(t,e,n){var r=e.pendingProps,i=Ve.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),be(Ve,i&1),t===null)return Pf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=vd(o,r,0,null),t=os(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Uf(n),e.memoizedState=Vf,t):um(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return dA(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=gi(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=gi(l,s):(s=os(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Uf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Vf,r}return s=t.child,t=s.sibling,r=gi(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function um(t,e){return e=vd({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Lu(t,e,n,r){return r!==null&&Qp(r),Io(e,t.child,null,n),t=um(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function dA(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=kh(Error(H(422))),Lu(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=vd({mode:"visible",children:r.children},i,0,null),s=os(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Io(e,t.child,null,o),e.child.memoizedState=Uf(o),e.memoizedState=Vf,s);if(!(e.mode&1))return Lu(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(H(419)),r=kh(s,r,void 0),Lu(t,e,o,r)}if(l=(o&t.childLanes)!==0,Wt||l){if(r=lt,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Sr(t,i),Cn(r,t,i,-1))}return mm(),r=kh(Error(H(421))),Lu(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=IA.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,tn=hi(i.nextSibling),rn=e,Le=!0,bn=null,t!==null&&(fn[pn++]=mr,fn[pn++]=gr,fn[pn++]=us,mr=t.id,gr=t.overflow,us=e),e=um(e,r.children),e.flags|=4096,e)}function tv(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Nf(t.return,e,n)}function bh(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function dx(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Dt(t,e,r.children,n),r=Ve.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&tv(t,n,e);else if(t.tag===19)tv(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(be(Ve,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Pc(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),bh(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Pc(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}bh(e,!0,n,null,s);break;case"together":bh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function tc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ar(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ds|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(H(153));if(e.child!==null){for(t=e.child,n=gi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=gi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function hA(t,e,n){switch(e.tag){case 3:ux(e),To();break;case 5:Mw(e);break;case 1:Gt(e.type)&&Sc(e);break;case 4:tm(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;be(bc,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(be(Ve,Ve.current&1),e.flags|=128,null):n&e.child.childLanes?cx(t,e,n):(be(Ve,Ve.current&1),t=Ar(t,e,n),t!==null?t.sibling:null);be(Ve,Ve.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return dx(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),be(Ve,Ve.current),r)break;return null;case 22:case 23:return e.lanes=0,ax(t,e,n)}return Ar(t,e,n)}var hx,Ff,fx,px;hx=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ff=function(){};fx=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,rs(Wn.current);var s=null;switch(n){case"input":i=lf(t,i),r=lf(t,r),s=[];break;case"select":i=ze({},i,{value:void 0}),r=ze({},r,{value:void 0}),s=[];break;case"textarea":i=df(t,i),r=df(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Tc)}ff(n,r);var o;n=null;for(d in i)if(!r.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var l=i[d];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(tl.hasOwnProperty(d)?s||(s=[]):(s=s||[]).push(d,null));for(d in r){var u=r[d];if(l=i!=null?i[d]:void 0,r.hasOwnProperty(d)&&u!==l&&(u!=null||l!=null))if(d==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(d,n)),n=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(tl.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&Ce("scroll",t),s||l===u||(s=[])):(s=s||[]).push(d,u))}n&&(s=s||[]).push("style",n);var d=s;(e.updateQueue=d)&&(e.flags|=4)}};px=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ta(t,e){if(!Le)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Et(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function fA(t,e,n){var r=e.pendingProps;switch(Kp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Et(e),null;case 1:return Gt(e.type)&&Ic(),Et(e),null;case 3:return r=e.stateNode,So(),De(qt),De(Rt),rm(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Du(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,bn!==null&&(Kf(bn),bn=null))),Ff(t,e),Et(e),null;case 5:nm(e);var i=rs(fl.current);if(n=e.type,t!==null&&e.stateNode!=null)fx(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(H(166));return Et(e),null}if(t=rs(Wn.current),Du(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[$n]=e,r[dl]=s,t=(e.mode&1)!==0,n){case"dialog":Ce("cancel",r),Ce("close",r);break;case"iframe":case"object":case"embed":Ce("load",r);break;case"video":case"audio":for(i=0;i<Da.length;i++)Ce(Da[i],r);break;case"source":Ce("error",r);break;case"img":case"image":case"link":Ce("error",r),Ce("load",r);break;case"details":Ce("toggle",r);break;case"input":cy(r,s),Ce("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Ce("invalid",r);break;case"textarea":hy(r,s),Ce("invalid",r)}ff(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Nu(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Nu(r.textContent,l,t),i=["children",""+l]):tl.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&Ce("scroll",r)}switch(n){case"input":Iu(r),dy(r,s,!0);break;case"textarea":Iu(r),fy(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Tc)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=$0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[$n]=e,t[dl]=r,hx(t,e,!1,!1),e.stateNode=t;e:{switch(o=pf(n,r),n){case"dialog":Ce("cancel",t),Ce("close",t),i=r;break;case"iframe":case"object":case"embed":Ce("load",t),i=r;break;case"video":case"audio":for(i=0;i<Da.length;i++)Ce(Da[i],t);i=r;break;case"source":Ce("error",t),i=r;break;case"img":case"image":case"link":Ce("error",t),Ce("load",t),i=r;break;case"details":Ce("toggle",t),i=r;break;case"input":cy(t,r),i=lf(t,r),Ce("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ze({},r,{value:void 0}),Ce("invalid",t);break;case"textarea":hy(t,r),i=df(t,r),Ce("invalid",t);break;default:i=r}ff(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?W0(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&B0(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&nl(t,u):typeof u=="number"&&nl(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(tl.hasOwnProperty(s)?u!=null&&s==="onScroll"&&Ce("scroll",t):u!=null&&Dp(t,s,u,o))}switch(n){case"input":Iu(t),dy(t,r,!1);break;case"textarea":Iu(t),fy(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Ti(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?uo(t,!!r.multiple,s,!1):r.defaultValue!=null&&uo(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Tc)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Et(e),null;case 6:if(t&&e.stateNode!=null)px(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(H(166));if(n=rs(fl.current),rs(Wn.current),Du(e)){if(r=e.stateNode,n=e.memoizedProps,r[$n]=e,(s=r.nodeValue!==n)&&(t=rn,t!==null))switch(t.tag){case 3:Nu(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Nu(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[$n]=e,e.stateNode=r}return Et(e),null;case 13:if(De(Ve),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Le&&tn!==null&&e.mode&1&&!(e.flags&128))Nw(),To(),e.flags|=98560,s=!1;else if(s=Du(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(H(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(H(317));s[$n]=e}else To(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Et(e),s=!1}else bn!==null&&(Kf(bn),bn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ve.current&1?rt===0&&(rt=3):mm())),e.updateQueue!==null&&(e.flags|=4),Et(e),null);case 4:return So(),Ff(t,e),t===null&&ul(e.stateNode.containerInfo),Et(e),null;case 10:return Jp(e.type._context),Et(e),null;case 17:return Gt(e.type)&&Ic(),Et(e),null;case 19:if(De(Ve),s=e.memoizedState,s===null)return Et(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Ta(s,!1);else{if(rt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Pc(t),o!==null){for(e.flags|=128,Ta(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return be(Ve,Ve.current&1|2),e.child}t=t.sibling}s.tail!==null&&Qe()>ko&&(e.flags|=128,r=!0,Ta(s,!1),e.lanes=4194304)}else{if(!r)if(t=Pc(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ta(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Le)return Et(e),null}else 2*Qe()-s.renderingStartTime>ko&&n!==1073741824&&(e.flags|=128,r=!0,Ta(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Qe(),e.sibling=null,n=Ve.current,be(Ve,r?n&1|2:n&1),e):(Et(e),null);case 22:case 23:return pm(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?en&1073741824&&(Et(e),e.subtreeFlags&6&&(e.flags|=8192)):Et(e),null;case 24:return null;case 25:return null}throw Error(H(156,e.tag))}function pA(t,e){switch(Kp(e),e.tag){case 1:return Gt(e.type)&&Ic(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return So(),De(qt),De(Rt),rm(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return nm(e),null;case 13:if(De(Ve),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(H(340));To()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return De(Ve),null;case 4:return So(),null;case 10:return Jp(e.type._context),null;case 22:case 23:return pm(),null;case 24:return null;default:return null}}var Ou=!1,At=!1,mA=typeof WeakSet=="function"?WeakSet:Set,Y=null;function oo(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){We(t,e,r)}else n.current=null}function zf(t,e,n){try{n()}catch(r){We(t,e,r)}}var nv=!1;function gA(t,e){if(If=wc,t=_w(),qp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,d=0,f=0,m=t,g=null;t:for(;;){for(var I;m!==n||i!==0&&m.nodeType!==3||(l=o+i),m!==s||r!==0&&m.nodeType!==3||(u=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(I=m.firstChild)!==null;)g=m,m=I;for(;;){if(m===t)break t;if(g===n&&++d===i&&(l=o),g===s&&++f===r&&(u=o),(I=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=I}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Sf={focusedElem:t,selectionRange:n},wc=!1,Y=e;Y!==null;)if(e=Y,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Y=t;else for(;Y!==null;){e=Y;try{var C=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(C!==null){var b=C.memoizedProps,P=C.memoizedState,x=e.stateNode,_=x.getSnapshotBeforeUpdate(e.elementType===e.type?b:An(e.type,b),P);x.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var A=e.stateNode.containerInfo;A.nodeType===1?A.textContent="":A.nodeType===9&&A.documentElement&&A.removeChild(A.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(H(163))}}catch(O){We(e,e.return,O)}if(t=e.sibling,t!==null){t.return=e.return,Y=t;break}Y=e.return}return C=nv,nv=!1,C}function Ga(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&zf(e,n,s)}i=i.next}while(i!==r)}}function gd(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function $f(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function mx(t){var e=t.alternate;e!==null&&(t.alternate=null,mx(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[$n],delete e[dl],delete e[bf],delete e[JS],delete e[ZS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function gx(t){return t.tag===5||t.tag===3||t.tag===4}function rv(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||gx(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Bf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Tc));else if(r!==4&&(t=t.child,t!==null))for(Bf(t,e,n),t=t.sibling;t!==null;)Bf(t,e,n),t=t.sibling}function Hf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Hf(t,e,n),t=t.sibling;t!==null;)Hf(t,e,n),t=t.sibling}var ht=null,kn=!1;function Wr(t,e,n){for(n=n.child;n!==null;)yx(t,e,n),n=n.sibling}function yx(t,e,n){if(Hn&&typeof Hn.onCommitFiberUnmount=="function")try{Hn.onCommitFiberUnmount(ld,n)}catch{}switch(n.tag){case 5:At||oo(n,e);case 6:var r=ht,i=kn;ht=null,Wr(t,e,n),ht=r,kn=i,ht!==null&&(kn?(t=ht,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ht.removeChild(n.stateNode));break;case 18:ht!==null&&(kn?(t=ht,n=n.stateNode,t.nodeType===8?xh(t.parentNode,n):t.nodeType===1&&xh(t,n),ol(t)):xh(ht,n.stateNode));break;case 4:r=ht,i=kn,ht=n.stateNode.containerInfo,kn=!0,Wr(t,e,n),ht=r,kn=i;break;case 0:case 11:case 14:case 15:if(!At&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&zf(n,e,o),i=i.next}while(i!==r)}Wr(t,e,n);break;case 1:if(!At&&(oo(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){We(n,e,l)}Wr(t,e,n);break;case 21:Wr(t,e,n);break;case 22:n.mode&1?(At=(r=At)||n.memoizedState!==null,Wr(t,e,n),At=r):Wr(t,e,n);break;default:Wr(t,e,n)}}function iv(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new mA),e.forEach(function(r){var i=SA.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Sn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:ht=l.stateNode,kn=!1;break e;case 3:ht=l.stateNode.containerInfo,kn=!0;break e;case 4:ht=l.stateNode.containerInfo,kn=!0;break e}l=l.return}if(ht===null)throw Error(H(160));yx(s,o,i),ht=null,kn=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(d){We(i,e,d)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)vx(e,t),e=e.sibling}function vx(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Sn(e,t),Un(t),r&4){try{Ga(3,t,t.return),gd(3,t)}catch(b){We(t,t.return,b)}try{Ga(5,t,t.return)}catch(b){We(t,t.return,b)}}break;case 1:Sn(e,t),Un(t),r&512&&n!==null&&oo(n,n.return);break;case 5:if(Sn(e,t),Un(t),r&512&&n!==null&&oo(n,n.return),t.flags&32){var i=t.stateNode;try{nl(i,"")}catch(b){We(t,t.return,b)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&F0(i,s),pf(l,o);var d=pf(l,s);for(o=0;o<u.length;o+=2){var f=u[o],m=u[o+1];f==="style"?W0(i,m):f==="dangerouslySetInnerHTML"?B0(i,m):f==="children"?nl(i,m):Dp(i,f,m,d)}switch(l){case"input":uf(i,s);break;case"textarea":z0(i,s);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var I=s.value;I!=null?uo(i,!!s.multiple,I,!1):g!==!!s.multiple&&(s.defaultValue!=null?uo(i,!!s.multiple,s.defaultValue,!0):uo(i,!!s.multiple,s.multiple?[]:"",!1))}i[dl]=s}catch(b){We(t,t.return,b)}}break;case 6:if(Sn(e,t),Un(t),r&4){if(t.stateNode===null)throw Error(H(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(b){We(t,t.return,b)}}break;case 3:if(Sn(e,t),Un(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ol(e.containerInfo)}catch(b){We(t,t.return,b)}break;case 4:Sn(e,t),Un(t);break;case 13:Sn(e,t),Un(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(hm=Qe())),r&4&&iv(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(At=(d=At)||f,Sn(e,t),At=d):Sn(e,t),Un(t),r&8192){if(d=t.memoizedState!==null,(t.stateNode.isHidden=d)&&!f&&t.mode&1)for(Y=t,f=t.child;f!==null;){for(m=Y=f;Y!==null;){switch(g=Y,I=g.child,g.tag){case 0:case 11:case 14:case 15:Ga(4,g,g.return);break;case 1:oo(g,g.return);var C=g.stateNode;if(typeof C.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,C.props=e.memoizedProps,C.state=e.memoizedState,C.componentWillUnmount()}catch(b){We(r,n,b)}}break;case 5:oo(g,g.return);break;case 22:if(g.memoizedState!==null){ov(m);continue}}I!==null?(I.return=g,Y=I):ov(m)}f=f.sibling}e:for(f=null,m=t;;){if(m.tag===5){if(f===null){f=m;try{i=m.stateNode,d?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=m.stateNode,u=m.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=H0("display",o))}catch(b){We(t,t.return,b)}}}else if(m.tag===6){if(f===null)try{m.stateNode.nodeValue=d?"":m.memoizedProps}catch(b){We(t,t.return,b)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;f===m&&(f=null),m=m.return}f===m&&(f=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Sn(e,t),Un(t),r&4&&iv(t);break;case 21:break;default:Sn(e,t),Un(t)}}function Un(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(gx(n)){var r=n;break e}n=n.return}throw Error(H(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(nl(i,""),r.flags&=-33);var s=rv(t);Hf(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=rv(t);Bf(t,l,o);break;default:throw Error(H(161))}}catch(u){We(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function yA(t,e,n){Y=t,_x(t)}function _x(t,e,n){for(var r=(t.mode&1)!==0;Y!==null;){var i=Y,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ou;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||At;l=Ou;var d=At;if(Ou=o,(At=u)&&!d)for(Y=i;Y!==null;)o=Y,u=o.child,o.tag===22&&o.memoizedState!==null?av(i):u!==null?(u.return=o,Y=u):av(i);for(;s!==null;)Y=s,_x(s),s=s.sibling;Y=i,Ou=l,At=d}sv(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,Y=s):sv(t)}}function sv(t){for(;Y!==null;){var e=Y;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:At||gd(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!At)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:An(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&By(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}By(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var d=e.alternate;if(d!==null){var f=d.memoizedState;if(f!==null){var m=f.dehydrated;m!==null&&ol(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(H(163))}At||e.flags&512&&$f(e)}catch(g){We(e,e.return,g)}}if(e===t){Y=null;break}if(n=e.sibling,n!==null){n.return=e.return,Y=n;break}Y=e.return}}function ov(t){for(;Y!==null;){var e=Y;if(e===t){Y=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Y=n;break}Y=e.return}}function av(t){for(;Y!==null;){var e=Y;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{gd(4,e)}catch(u){We(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){We(e,i,u)}}var s=e.return;try{$f(e)}catch(u){We(e,s,u)}break;case 5:var o=e.return;try{$f(e)}catch(u){We(e,o,u)}}}catch(u){We(e,e.return,u)}if(e===t){Y=null;break}var l=e.sibling;if(l!==null){l.return=e.return,Y=l;break}Y=e.return}}var vA=Math.ceil,jc=Pr.ReactCurrentDispatcher,cm=Pr.ReactCurrentOwner,gn=Pr.ReactCurrentBatchConfig,ge=0,lt=null,Ze=null,mt=0,en=0,ao=Ci(0),rt=0,yl=null,ds=0,yd=0,dm=0,Ka=null,Bt=null,hm=0,ko=1/0,fr=null,Lc=!1,Wf=null,pi=null,Mu=!1,oi=null,Oc=0,Qa=0,qf=null,nc=-1,rc=0;function jt(){return ge&6?Qe():nc!==-1?nc:nc=Qe()}function mi(t){return t.mode&1?ge&2&&mt!==0?mt&-mt:tA.transition!==null?(rc===0&&(rc=rw()),rc):(t=xe,t!==0||(t=window.event,t=t===void 0?16:cw(t.type)),t):1}function Cn(t,e,n,r){if(50<Qa)throw Qa=0,qf=null,Error(H(185));jl(t,n,r),(!(ge&2)||t!==lt)&&(t===lt&&(!(ge&2)&&(yd|=n),rt===4&&ei(t,mt)),Kt(t,r),n===1&&ge===0&&!(e.mode&1)&&(ko=Qe()+500,fd&&Pi()))}function Kt(t,e){var n=t.callbackNode;tS(t,e);var r=_c(t,t===lt?mt:0);if(r===0)n!==null&&gy(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&gy(n),e===1)t.tag===0?eA(lv.bind(null,t)):Rw(lv.bind(null,t)),YS(function(){!(ge&6)&&Pi()}),n=null;else{switch(iw(r)){case 1:n=Vp;break;case 4:n=tw;break;case 16:n=vc;break;case 536870912:n=nw;break;default:n=vc}n=kx(n,wx.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function wx(t,e){if(nc=-1,rc=0,ge&6)throw Error(H(327));var n=t.callbackNode;if(mo()&&t.callbackNode!==n)return null;var r=_c(t,t===lt?mt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Mc(t,r);else{e=r;var i=ge;ge|=2;var s=Ex();(lt!==t||mt!==e)&&(fr=null,ko=Qe()+500,ss(t,e));do try{xA();break}catch(l){xx(t,l)}while(!0);Xp(),jc.current=s,ge=i,Ze!==null?e=0:(lt=null,mt=0,e=rt)}if(e!==0){if(e===2&&(i=_f(t),i!==0&&(r=i,e=Gf(t,i))),e===1)throw n=yl,ss(t,0),ei(t,r),Kt(t,Qe()),n;if(e===6)ei(t,r);else{if(i=t.current.alternate,!(r&30)&&!_A(i)&&(e=Mc(t,r),e===2&&(s=_f(t),s!==0&&(r=s,e=Gf(t,s))),e===1))throw n=yl,ss(t,0),ei(t,r),Kt(t,Qe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(H(345));case 2:Ji(t,Bt,fr);break;case 3:if(ei(t,r),(r&130023424)===r&&(e=hm+500-Qe(),10<e)){if(_c(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){jt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=kf(Ji.bind(null,t,Bt,fr),e);break}Ji(t,Bt,fr);break;case 4:if(ei(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Rn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Qe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*vA(r/1960))-r,10<r){t.timeoutHandle=kf(Ji.bind(null,t,Bt,fr),r);break}Ji(t,Bt,fr);break;case 5:Ji(t,Bt,fr);break;default:throw Error(H(329))}}}return Kt(t,Qe()),t.callbackNode===n?wx.bind(null,t):null}function Gf(t,e){var n=Ka;return t.current.memoizedState.isDehydrated&&(ss(t,e).flags|=256),t=Mc(t,e),t!==2&&(e=Bt,Bt=n,e!==null&&Kf(e)),t}function Kf(t){Bt===null?Bt=t:Bt.push.apply(Bt,t)}function _A(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Pn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ei(t,e){for(e&=~dm,e&=~yd,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Rn(e),r=1<<n;t[n]=-1,e&=~r}}function lv(t){if(ge&6)throw Error(H(327));mo();var e=_c(t,0);if(!(e&1))return Kt(t,Qe()),null;var n=Mc(t,e);if(t.tag!==0&&n===2){var r=_f(t);r!==0&&(e=r,n=Gf(t,r))}if(n===1)throw n=yl,ss(t,0),ei(t,e),Kt(t,Qe()),n;if(n===6)throw Error(H(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ji(t,Bt,fr),Kt(t,Qe()),null}function fm(t,e){var n=ge;ge|=1;try{return t(e)}finally{ge=n,ge===0&&(ko=Qe()+500,fd&&Pi())}}function hs(t){oi!==null&&oi.tag===0&&!(ge&6)&&mo();var e=ge;ge|=1;var n=gn.transition,r=xe;try{if(gn.transition=null,xe=1,t)return t()}finally{xe=r,gn.transition=n,ge=e,!(ge&6)&&Pi()}}function pm(){en=ao.current,De(ao)}function ss(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,QS(n)),Ze!==null)for(n=Ze.return;n!==null;){var r=n;switch(Kp(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ic();break;case 3:So(),De(qt),De(Rt),rm();break;case 5:nm(r);break;case 4:So();break;case 13:De(Ve);break;case 19:De(Ve);break;case 10:Jp(r.type._context);break;case 22:case 23:pm()}n=n.return}if(lt=t,Ze=t=gi(t.current,null),mt=en=e,rt=0,yl=null,dm=yd=ds=0,Bt=Ka=null,ns!==null){for(e=0;e<ns.length;e++)if(n=ns[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}ns=null}return t}function xx(t,e){do{var n=Ze;try{if(Xp(),Zu.current=Dc,Nc){for(var r=Ue.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Nc=!1}if(cs=0,at=nt=Ue=null,qa=!1,pl=0,cm.current=null,n===null||n.return===null){rt=1,yl=e,Ze=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=mt,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,f=l,m=f.tag;if(!(f.mode&1)&&(m===0||m===11||m===15)){var g=f.alternate;g?(f.updateQueue=g.updateQueue,f.memoizedState=g.memoizedState,f.lanes=g.lanes):(f.updateQueue=null,f.memoizedState=null)}var I=Qy(o);if(I!==null){I.flags&=-257,Yy(I,o,l,s,e),I.mode&1&&Ky(s,d,e),e=I,u=d;var C=e.updateQueue;if(C===null){var b=new Set;b.add(u),e.updateQueue=b}else C.add(u);break e}else{if(!(e&1)){Ky(s,d,e),mm();break e}u=Error(H(426))}}else if(Le&&l.mode&1){var P=Qy(o);if(P!==null){!(P.flags&65536)&&(P.flags|=256),Yy(P,o,l,s,e),Qp(Ao(u,l));break e}}s=u=Ao(u,l),rt!==4&&(rt=2),Ka===null?Ka=[s]:Ka.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var x=ix(s,u,e);$y(s,x);break e;case 1:l=u;var _=s.type,A=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||A!==null&&typeof A.componentDidCatch=="function"&&(pi===null||!pi.has(A)))){s.flags|=65536,e&=-e,s.lanes|=e;var O=sx(s,l,e);$y(s,O);break e}}s=s.return}while(s!==null)}Ix(n)}catch(M){e=M,Ze===n&&n!==null&&(Ze=n=n.return);continue}break}while(!0)}function Ex(){var t=jc.current;return jc.current=Dc,t===null?Dc:t}function mm(){(rt===0||rt===3||rt===2)&&(rt=4),lt===null||!(ds&268435455)&&!(yd&268435455)||ei(lt,mt)}function Mc(t,e){var n=ge;ge|=2;var r=Ex();(lt!==t||mt!==e)&&(fr=null,ss(t,e));do try{wA();break}catch(i){xx(t,i)}while(!0);if(Xp(),ge=n,jc.current=r,Ze!==null)throw Error(H(261));return lt=null,mt=0,rt}function wA(){for(;Ze!==null;)Tx(Ze)}function xA(){for(;Ze!==null&&!qI();)Tx(Ze)}function Tx(t){var e=Ax(t.alternate,t,en);t.memoizedProps=t.pendingProps,e===null?Ix(t):Ze=e,cm.current=null}function Ix(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=pA(n,e),n!==null){n.flags&=32767,Ze=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{rt=6,Ze=null;return}}else if(n=fA(n,e,en),n!==null){Ze=n;return}if(e=e.sibling,e!==null){Ze=e;return}Ze=e=t}while(e!==null);rt===0&&(rt=5)}function Ji(t,e,n){var r=xe,i=gn.transition;try{gn.transition=null,xe=1,EA(t,e,n,r)}finally{gn.transition=i,xe=r}return null}function EA(t,e,n,r){do mo();while(oi!==null);if(ge&6)throw Error(H(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(H(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(nS(t,s),t===lt&&(Ze=lt=null,mt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Mu||(Mu=!0,kx(vc,function(){return mo(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=gn.transition,gn.transition=null;var o=xe;xe=1;var l=ge;ge|=4,cm.current=null,gA(t,n),vx(n,t),$S(Sf),wc=!!If,Sf=If=null,t.current=n,yA(n),GI(),ge=l,xe=o,gn.transition=s}else t.current=n;if(Mu&&(Mu=!1,oi=t,Oc=i),s=t.pendingLanes,s===0&&(pi=null),YI(n.stateNode),Kt(t,Qe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Lc)throw Lc=!1,t=Wf,Wf=null,t;return Oc&1&&t.tag!==0&&mo(),s=t.pendingLanes,s&1?t===qf?Qa++:(Qa=0,qf=t):Qa=0,Pi(),null}function mo(){if(oi!==null){var t=iw(Oc),e=gn.transition,n=xe;try{if(gn.transition=null,xe=16>t?16:t,oi===null)var r=!1;else{if(t=oi,oi=null,Oc=0,ge&6)throw Error(H(331));var i=ge;for(ge|=4,Y=t.current;Y!==null;){var s=Y,o=s.child;if(Y.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var d=l[u];for(Y=d;Y!==null;){var f=Y;switch(f.tag){case 0:case 11:case 15:Ga(8,f,s)}var m=f.child;if(m!==null)m.return=f,Y=m;else for(;Y!==null;){f=Y;var g=f.sibling,I=f.return;if(mx(f),f===d){Y=null;break}if(g!==null){g.return=I,Y=g;break}Y=I}}}var C=s.alternate;if(C!==null){var b=C.child;if(b!==null){C.child=null;do{var P=b.sibling;b.sibling=null,b=P}while(b!==null)}}Y=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Y=o;else e:for(;Y!==null;){if(s=Y,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ga(9,s,s.return)}var x=s.sibling;if(x!==null){x.return=s.return,Y=x;break e}Y=s.return}}var _=t.current;for(Y=_;Y!==null;){o=Y;var A=o.child;if(o.subtreeFlags&2064&&A!==null)A.return=o,Y=A;else e:for(o=_;Y!==null;){if(l=Y,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:gd(9,l)}}catch(M){We(l,l.return,M)}if(l===o){Y=null;break e}var O=l.sibling;if(O!==null){O.return=l.return,Y=O;break e}Y=l.return}}if(ge=i,Pi(),Hn&&typeof Hn.onPostCommitFiberRoot=="function")try{Hn.onPostCommitFiberRoot(ld,t)}catch{}r=!0}return r}finally{xe=n,gn.transition=e}}return!1}function uv(t,e,n){e=Ao(n,e),e=ix(t,e,1),t=fi(t,e,1),e=jt(),t!==null&&(jl(t,1,e),Kt(t,e))}function We(t,e,n){if(t.tag===3)uv(t,t,n);else for(;e!==null;){if(e.tag===3){uv(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(pi===null||!pi.has(r))){t=Ao(n,t),t=sx(e,t,1),e=fi(e,t,1),t=jt(),e!==null&&(jl(e,1,t),Kt(e,t));break}}e=e.return}}function TA(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=jt(),t.pingedLanes|=t.suspendedLanes&n,lt===t&&(mt&n)===n&&(rt===4||rt===3&&(mt&130023424)===mt&&500>Qe()-hm?ss(t,0):dm|=n),Kt(t,e)}function Sx(t,e){e===0&&(t.mode&1?(e=ku,ku<<=1,!(ku&130023424)&&(ku=4194304)):e=1);var n=jt();t=Sr(t,e),t!==null&&(jl(t,e,n),Kt(t,n))}function IA(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Sx(t,n)}function SA(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(H(314))}r!==null&&r.delete(e),Sx(t,n)}var Ax;Ax=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||qt.current)Wt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Wt=!1,hA(t,e,n);Wt=!!(t.flags&131072)}else Wt=!1,Le&&e.flags&1048576&&Cw(e,kc,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;tc(t,e),t=e.pendingProps;var i=Eo(e,Rt.current);po(e,n),i=sm(null,e,r,t,i,n);var s=om();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Gt(r)?(s=!0,Sc(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,em(e),i.updater=md,e.stateNode=i,i._reactInternals=e,jf(e,r,t,n),e=Mf(null,e,r,!0,s,n)):(e.tag=0,Le&&s&&Gp(e),Dt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(tc(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=kA(r),t=An(r,t),i){case 0:e=Of(null,e,r,t,n);break e;case 1:e=Zy(null,e,r,t,n);break e;case 11:e=Xy(null,e,r,t,n);break e;case 14:e=Jy(null,e,r,An(r.type,t),n);break e}throw Error(H(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:An(r,i),Of(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:An(r,i),Zy(t,e,r,i,n);case 3:e:{if(ux(e),t===null)throw Error(H(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Ow(t,e),Cc(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Ao(Error(H(423)),e),e=ev(t,e,r,n,i);break e}else if(r!==i){i=Ao(Error(H(424)),e),e=ev(t,e,r,n,i);break e}else for(tn=hi(e.stateNode.containerInfo.firstChild),rn=e,Le=!0,bn=null,n=jw(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(To(),r===i){e=Ar(t,e,n);break e}Dt(t,e,r,n)}e=e.child}return e;case 5:return Mw(e),t===null&&Pf(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Af(r,i)?o=null:s!==null&&Af(r,s)&&(e.flags|=32),lx(t,e),Dt(t,e,o,n),e.child;case 6:return t===null&&Pf(e),null;case 13:return cx(t,e,n);case 4:return tm(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Io(e,null,r,n):Dt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:An(r,i),Xy(t,e,r,i,n);case 7:return Dt(t,e,e.pendingProps,n),e.child;case 8:return Dt(t,e,e.pendingProps.children,n),e.child;case 12:return Dt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,be(bc,r._currentValue),r._currentValue=o,s!==null)if(Pn(s.value,o)){if(s.children===i.children&&!qt.current){e=Ar(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=wr(-1,n&-n),u.tag=2;var d=s.updateQueue;if(d!==null){d=d.shared;var f=d.pending;f===null?u.next=u:(u.next=f.next,f.next=u),d.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Nf(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(H(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Nf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Dt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,po(e,n),i=yn(i),r=r(i),e.flags|=1,Dt(t,e,r,n),e.child;case 14:return r=e.type,i=An(r,e.pendingProps),i=An(r.type,i),Jy(t,e,r,i,n);case 15:return ox(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:An(r,i),tc(t,e),e.tag=1,Gt(r)?(t=!0,Sc(e)):t=!1,po(e,n),rx(e,r,i),jf(e,r,i,n),Mf(null,e,r,!0,t,n);case 19:return dx(t,e,n);case 22:return ax(t,e,n)}throw Error(H(156,e.tag))};function kx(t,e){return ew(t,e)}function AA(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mn(t,e,n,r){return new AA(t,e,n,r)}function gm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function kA(t){if(typeof t=="function")return gm(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Lp)return 11;if(t===Op)return 14}return 2}function gi(t,e){var n=t.alternate;return n===null?(n=mn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ic(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")gm(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Xs:return os(n.children,i,s,e);case jp:o=8,i|=8;break;case rf:return t=mn(12,n,e,i|2),t.elementType=rf,t.lanes=s,t;case sf:return t=mn(13,n,e,i),t.elementType=sf,t.lanes=s,t;case of:return t=mn(19,n,e,i),t.elementType=of,t.lanes=s,t;case M0:return vd(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case L0:o=10;break e;case O0:o=9;break e;case Lp:o=11;break e;case Op:o=14;break e;case Xr:o=16,r=null;break e}throw Error(H(130,t==null?t:typeof t,""))}return e=mn(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function os(t,e,n,r){return t=mn(7,t,r,e),t.lanes=n,t}function vd(t,e,n,r){return t=mn(22,t,r,e),t.elementType=M0,t.lanes=n,t.stateNode={isHidden:!1},t}function Rh(t,e,n){return t=mn(6,t,null,e),t.lanes=n,t}function Ch(t,e,n){return e=mn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function bA(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ch(0),this.expirationTimes=ch(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ch(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function ym(t,e,n,r,i,s,o,l,u){return t=new bA(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=mn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},em(s),t}function RA(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ys,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function bx(t){if(!t)return Ii;t=t._reactInternals;e:{if(ws(t)!==t||t.tag!==1)throw Error(H(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Gt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(H(171))}if(t.tag===1){var n=t.type;if(Gt(n))return bw(t,n,e)}return e}function Rx(t,e,n,r,i,s,o,l,u){return t=ym(n,r,!0,t,i,s,o,l,u),t.context=bx(null),n=t.current,r=jt(),i=mi(n),s=wr(r,i),s.callback=e??null,fi(n,s,i),t.current.lanes=i,jl(t,i,r),Kt(t,r),t}function _d(t,e,n,r){var i=e.current,s=jt(),o=mi(i);return n=bx(n),e.context===null?e.context=n:e.pendingContext=n,e=wr(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=fi(i,e,o),t!==null&&(Cn(t,i,o,s),Ju(t,i,o)),o}function Vc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function cv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function vm(t,e){cv(t,e),(t=t.alternate)&&cv(t,e)}function CA(){return null}var Cx=typeof reportError=="function"?reportError:function(t){console.error(t)};function _m(t){this._internalRoot=t}wd.prototype.render=_m.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(H(409));_d(t,e,null,null)};wd.prototype.unmount=_m.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;hs(function(){_d(null,t,null,null)}),e[Ir]=null}};function wd(t){this._internalRoot=t}wd.prototype.unstable_scheduleHydration=function(t){if(t){var e=aw();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Zr.length&&e!==0&&e<Zr[n].priority;n++);Zr.splice(n,0,t),n===0&&uw(t)}};function wm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function xd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function dv(){}function PA(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var d=Vc(o);s.call(d)}}var o=Rx(e,r,t,0,null,!1,!1,"",dv);return t._reactRootContainer=o,t[Ir]=o.current,ul(t.nodeType===8?t.parentNode:t),hs(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var d=Vc(u);l.call(d)}}var u=ym(t,0,!1,null,null,!1,!1,"",dv);return t._reactRootContainer=u,t[Ir]=u.current,ul(t.nodeType===8?t.parentNode:t),hs(function(){_d(e,u,n,r)}),u}function Ed(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=Vc(o);l.call(u)}}_d(e,o,t,i)}else o=PA(n,e,t,i,r);return Vc(o)}sw=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Na(e.pendingLanes);n!==0&&(Up(e,n|1),Kt(e,Qe()),!(ge&6)&&(ko=Qe()+500,Pi()))}break;case 13:hs(function(){var r=Sr(t,1);if(r!==null){var i=jt();Cn(r,t,1,i)}}),vm(t,1)}};Fp=function(t){if(t.tag===13){var e=Sr(t,134217728);if(e!==null){var n=jt();Cn(e,t,134217728,n)}vm(t,134217728)}};ow=function(t){if(t.tag===13){var e=mi(t),n=Sr(t,e);if(n!==null){var r=jt();Cn(n,t,e,r)}vm(t,e)}};aw=function(){return xe};lw=function(t,e){var n=xe;try{return xe=t,e()}finally{xe=n}};gf=function(t,e,n){switch(e){case"input":if(uf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=hd(r);if(!i)throw Error(H(90));U0(r),uf(r,i)}}}break;case"textarea":z0(t,n);break;case"select":e=n.value,e!=null&&uo(t,!!n.multiple,e,!1)}};K0=fm;Q0=hs;var NA={usingClientEntryPoint:!1,Events:[Ol,to,hd,q0,G0,fm]},Ia={findFiberByHostInstance:ts,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},DA={bundleType:Ia.bundleType,version:Ia.version,rendererPackageName:Ia.rendererPackageName,rendererConfig:Ia.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Pr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=J0(t),t===null?null:t.stateNode},findFiberByHostInstance:Ia.findFiberByHostInstance||CA,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Vu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Vu.isDisabled&&Vu.supportsFiber)try{ld=Vu.inject(DA),Hn=Vu}catch{}}on.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=NA;on.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!wm(e))throw Error(H(200));return RA(t,e,null,n)};on.createRoot=function(t,e){if(!wm(t))throw Error(H(299));var n=!1,r="",i=Cx;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=ym(t,1,!1,null,null,n,!1,r,i),t[Ir]=e.current,ul(t.nodeType===8?t.parentNode:t),new _m(e)};on.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(H(188)):(t=Object.keys(t).join(","),Error(H(268,t)));return t=J0(e),t=t===null?null:t.stateNode,t};on.flushSync=function(t){return hs(t)};on.hydrate=function(t,e,n){if(!xd(e))throw Error(H(200));return Ed(null,t,e,!0,n)};on.hydrateRoot=function(t,e,n){if(!wm(t))throw Error(H(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Cx;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Rx(e,null,t,1,n??null,i,!1,s,o),t[Ir]=e.current,ul(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new wd(e)};on.render=function(t,e,n){if(!xd(e))throw Error(H(200));return Ed(null,t,e,!1,n)};on.unmountComponentAtNode=function(t){if(!xd(t))throw Error(H(40));return t._reactRootContainer?(hs(function(){Ed(null,null,t,!1,function(){t._reactRootContainer=null,t[Ir]=null})}),!0):!1};on.unstable_batchedUpdates=fm;on.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!xd(n))throw Error(H(200));if(t==null||t._reactInternals===void 0)throw Error(H(38));return Ed(t,e,n,!1,r)};on.version="18.3.1-next-f1338f8080-20240426";function Px(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Px)}catch(t){console.error(t)}}Px(),P0.exports=on;var jA=P0.exports,hv=jA;tf.createRoot=hv.createRoot,tf.hydrateRoot=hv.hydrateRoot;/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function vl(){return vl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},vl.apply(null,arguments)}var ai;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(ai||(ai={}));const fv="popstate";function LA(t){t===void 0&&(t={});function e(i,s){let{pathname:o="/",search:l="",hash:u=""}=xs(i.location.hash.substr(1));return!o.startsWith("/")&&!o.startsWith(".")&&(o="/"+o),Qf("",{pathname:o,search:l,hash:u},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(i,s){let o=i.document.querySelector("base"),l="";if(o&&o.getAttribute("href")){let u=i.location.href,d=u.indexOf("#");l=d===-1?u:u.slice(0,d)}return l+"#"+(typeof s=="string"?s:Uc(s))}function r(i,s){xm(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return MA(e,n,r,t)}function Fe(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function xm(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function OA(){return Math.random().toString(36).substr(2,8)}function pv(t,e){return{usr:t.state,key:t.key,idx:e}}function Qf(t,e,n,r){return n===void 0&&(n=null),vl({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?xs(e):e,{state:n,key:e&&e.key||r||OA()})}function Uc(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function xs(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function MA(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=ai.Pop,u=null,d=f();d==null&&(d=0,o.replaceState(vl({},o.state,{idx:d}),""));function f(){return(o.state||{idx:null}).idx}function m(){l=ai.Pop;let P=f(),x=P==null?null:P-d;d=P,u&&u({action:l,location:b.location,delta:x})}function g(P,x){l=ai.Push;let _=Qf(b.location,P,x);n&&n(_,P),d=f()+1;let A=pv(_,d),O=b.createHref(_);try{o.pushState(A,"",O)}catch(M){if(M instanceof DOMException&&M.name==="DataCloneError")throw M;i.location.assign(O)}s&&u&&u({action:l,location:b.location,delta:1})}function I(P,x){l=ai.Replace;let _=Qf(b.location,P,x);n&&n(_,P),d=f();let A=pv(_,d),O=b.createHref(_);o.replaceState(A,"",O),s&&u&&u({action:l,location:b.location,delta:0})}function C(P){let x=i.location.origin!=="null"?i.location.origin:i.location.href,_=typeof P=="string"?P:Uc(P);return _=_.replace(/ $/,"%20"),Fe(x,"No window.location.(origin|href) available to create URL for href: "+_),new URL(_,x)}let b={get action(){return l},get location(){return t(i,o)},listen(P){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(fv,m),u=P,()=>{i.removeEventListener(fv,m),u=null}},createHref(P){return e(i,P)},createURL:C,encodeLocation(P){let x=C(P);return{pathname:x.pathname,search:x.search,hash:x.hash}},push:g,replace:I,go(P){return o.go(P)}};return b}var mv;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(mv||(mv={}));function VA(t,e,n){return n===void 0&&(n="/"),UA(t,e,n)}function UA(t,e,n,r){let i=typeof e=="string"?xs(e):e,s=bo(i.pathname||"/",n);if(s==null)return null;let o=Nx(t);FA(o);let l=null,u=XA(s);for(let d=0;l==null&&d<o.length;++d)l=QA(o[d],u);return l}function Nx(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let u={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(Fe(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let d=yi([r,u.relativePath]),f=n.concat(u);s.children&&s.children.length>0&&(Fe(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),Nx(s.children,e,f,d)),!(s.path==null&&!s.index)&&e.push({path:d,score:GA(d,s.index),routesMeta:f})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let u of Dx(s.path))i(s,o,u)}),e}function Dx(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=Dx(r.join("/")),l=[];return l.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&l.push(...o),l.map(u=>t.startsWith("/")&&u===""?"/":u)}function FA(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:KA(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const zA=/^:[\w-]+$/,$A=3,BA=2,HA=1,WA=10,qA=-2,gv=t=>t==="*";function GA(t,e){let n=t.split("/"),r=n.length;return n.some(gv)&&(r+=qA),e&&(r+=BA),n.filter(i=>!gv(i)).reduce((i,s)=>i+(zA.test(s)?$A:s===""?HA:WA),r)}function KA(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function QA(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let l=0;l<r.length;++l){let u=r[l],d=l===r.length-1,f=s==="/"?e:e.slice(s.length)||"/",m=Yf({path:u.relativePath,caseSensitive:u.caseSensitive,end:d},f),g=u.route;if(!m)return null;Object.assign(i,m.params),o.push({params:i,pathname:yi([s,m.pathname]),pathnameBase:ek(yi([s,m.pathnameBase])),route:g}),m.pathnameBase!=="/"&&(s=yi([s,m.pathnameBase]))}return o}function Yf(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=YA(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((d,f,m)=>{let{paramName:g,isOptional:I}=f;if(g==="*"){let b=l[m]||"";o=s.slice(0,s.length-b.length).replace(/(.)\/+$/,"$1")}const C=l[m];return I&&!C?d[g]=void 0:d[g]=(C||"").replace(/%2F/g,"/"),d},{}),pathname:s,pathnameBase:o,pattern:t}}function YA(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),xm(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function XA(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return xm(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function bo(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function JA(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?xs(t):t,s;return n?(n=jx(n),n.startsWith("/")?s=yv(n.substring(1),"/"):s=yv(n,e)):s=e,{pathname:s,search:tk(r),hash:nk(i)}}function yv(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Ph(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function ZA(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Em(t,e){let n=ZA(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Tm(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=xs(t):(i=vl({},t),Fe(!i.pathname||!i.pathname.includes("?"),Ph("?","pathname","search",i)),Fe(!i.pathname||!i.pathname.includes("#"),Ph("#","pathname","hash",i)),Fe(!i.search||!i.search.includes("#"),Ph("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let m=e.length-1;if(!r&&o.startsWith("..")){let g=o.split("/");for(;g[0]==="..";)g.shift(),m-=1;i.pathname=g.join("/")}l=m>=0?e[m]:"/"}let u=JA(i,l),d=o&&o!=="/"&&o.endsWith("/"),f=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(d||f)&&(u.pathname+="/"),u}const jx=t=>t.replace(/\/\/+/g,"/"),yi=t=>jx(t.join("/")),ek=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),tk=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,nk=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function rk(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Lx=["post","put","patch","delete"];new Set(Lx);const ik=["get",...Lx];new Set(ik);/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function _l(){return _l=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},_l.apply(null,arguments)}const Td=R.createContext(null),Ox=R.createContext(null),Nr=R.createContext(null),Id=R.createContext(null),Dr=R.createContext({outlet:null,matches:[],isDataRoute:!1}),Mx=R.createContext(null);function sk(t,e){let{relative:n}=e===void 0?{}:e;zo()||Fe(!1);let{basename:r,navigator:i}=R.useContext(Nr),{hash:s,pathname:o,search:l}=Sd(t,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:yi([r,o])),i.createHref({pathname:u,search:l,hash:s})}function zo(){return R.useContext(Id)!=null}function Es(){return zo()||Fe(!1),R.useContext(Id).location}function Vx(t){R.useContext(Nr).static||R.useLayoutEffect(t)}function jr(){let{isDataRoute:t}=R.useContext(Dr);return t?vk():ok()}function ok(){zo()||Fe(!1);let t=R.useContext(Td),{basename:e,future:n,navigator:r}=R.useContext(Nr),{matches:i}=R.useContext(Dr),{pathname:s}=Es(),o=JSON.stringify(Em(i,n.v7_relativeSplatPath)),l=R.useRef(!1);return Vx(()=>{l.current=!0}),R.useCallback(function(d,f){if(f===void 0&&(f={}),!l.current)return;if(typeof d=="number"){r.go(d);return}let m=Tm(d,JSON.parse(o),s,f.relative==="path");t==null&&e!=="/"&&(m.pathname=m.pathname==="/"?e:yi([e,m.pathname])),(f.replace?r.replace:r.push)(m,f.state,f)},[e,r,o,s,t])}function Ux(){let{matches:t}=R.useContext(Dr),e=t[t.length-1];return e?e.params:{}}function Sd(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=R.useContext(Nr),{matches:i}=R.useContext(Dr),{pathname:s}=Es(),o=JSON.stringify(Em(i,r.v7_relativeSplatPath));return R.useMemo(()=>Tm(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function ak(t,e){return lk(t,e)}function lk(t,e,n,r){zo()||Fe(!1);let{navigator:i}=R.useContext(Nr),{matches:s}=R.useContext(Dr),o=s[s.length-1],l=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let d=Es(),f;if(e){var m;let P=typeof e=="string"?xs(e):e;u==="/"||(m=P.pathname)!=null&&m.startsWith(u)||Fe(!1),f=P}else f=d;let g=f.pathname||"/",I=g;if(u!=="/"){let P=u.replace(/^\//,"").split("/");I="/"+g.replace(/^\//,"").split("/").slice(P.length).join("/")}let C=VA(t,{pathname:I}),b=fk(C&&C.map(P=>Object.assign({},P,{params:Object.assign({},l,P.params),pathname:yi([u,i.encodeLocation?i.encodeLocation(P.pathname).pathname:P.pathname]),pathnameBase:P.pathnameBase==="/"?u:yi([u,i.encodeLocation?i.encodeLocation(P.pathnameBase).pathname:P.pathnameBase])})),s,n,r);return e&&b?R.createElement(Id.Provider,{value:{location:_l({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:ai.Pop}},b):b}function uk(){let t=yk(),e=rk(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return R.createElement(R.Fragment,null,R.createElement("h2",null,"Unexpected Application Error!"),R.createElement("h3",{style:{fontStyle:"italic"}},e),n?R.createElement("pre",{style:i},n):null,null)}const ck=R.createElement(uk,null);class dk extends R.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?R.createElement(Dr.Provider,{value:this.props.routeContext},R.createElement(Mx.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function hk(t){let{routeContext:e,match:n,children:r}=t,i=R.useContext(Td);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),R.createElement(Dr.Provider,{value:e},r)}function fk(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,l=(i=n)==null?void 0:i.errors;if(l!=null){let f=o.findIndex(m=>m.route.id&&(l==null?void 0:l[m.route.id])!==void 0);f>=0||Fe(!1),o=o.slice(0,Math.min(o.length,f+1))}let u=!1,d=-1;if(n&&r&&r.v7_partialHydration)for(let f=0;f<o.length;f++){let m=o[f];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(d=f),m.route.id){let{loaderData:g,errors:I}=n,C=m.route.loader&&g[m.route.id]===void 0&&(!I||I[m.route.id]===void 0);if(m.route.lazy||C){u=!0,d>=0?o=o.slice(0,d+1):o=[o[0]];break}}}return o.reduceRight((f,m,g)=>{let I,C=!1,b=null,P=null;n&&(I=l&&m.route.id?l[m.route.id]:void 0,b=m.route.errorElement||ck,u&&(d<0&&g===0?(_k("route-fallback"),C=!0,P=null):d===g&&(C=!0,P=m.route.hydrateFallbackElement||null)));let x=e.concat(o.slice(0,g+1)),_=()=>{let A;return I?A=b:C?A=P:m.route.Component?A=R.createElement(m.route.Component,null):m.route.element?A=m.route.element:A=f,R.createElement(hk,{match:m,routeContext:{outlet:f,matches:x,isDataRoute:n!=null},children:A})};return n&&(m.route.ErrorBoundary||m.route.errorElement||g===0)?R.createElement(dk,{location:n.location,revalidation:n.revalidation,component:b,error:I,children:_(),routeContext:{outlet:null,matches:x,isDataRoute:!0}}):_()},null)}var Fx=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(Fx||{}),zx=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(zx||{});function pk(t){let e=R.useContext(Td);return e||Fe(!1),e}function mk(t){let e=R.useContext(Ox);return e||Fe(!1),e}function gk(t){let e=R.useContext(Dr);return e||Fe(!1),e}function $x(t){let e=gk(),n=e.matches[e.matches.length-1];return n.route.id||Fe(!1),n.route.id}function yk(){var t;let e=R.useContext(Mx),n=mk(),r=$x();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function vk(){let{router:t}=pk(Fx.UseNavigateStable),e=$x(zx.UseNavigateStable),n=R.useRef(!1);return Vx(()=>{n.current=!0}),R.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,_l({fromRouteId:e},s)))},[t,e])}const vv={};function _k(t,e,n){vv[t]||(vv[t]=!0)}function wk(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function xk(t){let{to:e,replace:n,state:r,relative:i}=t;zo()||Fe(!1);let{future:s,static:o}=R.useContext(Nr),{matches:l}=R.useContext(Dr),{pathname:u}=Es(),d=jr(),f=Tm(e,Em(l,s.v7_relativeSplatPath),u,i==="path"),m=JSON.stringify(f);return R.useEffect(()=>d(JSON.parse(m),{replace:n,state:r,relative:i}),[d,m,i,n,r]),null}function Jt(t){Fe(!1)}function Ek(t){let{basename:e="/",children:n=null,location:r,navigationType:i=ai.Pop,navigator:s,static:o=!1,future:l}=t;zo()&&Fe(!1);let u=e.replace(/^\/*/,"/"),d=R.useMemo(()=>({basename:u,navigator:s,static:o,future:_l({v7_relativeSplatPath:!1},l)}),[u,l,s,o]);typeof r=="string"&&(r=xs(r));let{pathname:f="/",search:m="",hash:g="",state:I=null,key:C="default"}=r,b=R.useMemo(()=>{let P=bo(f,u);return P==null?null:{location:{pathname:P,search:m,hash:g,state:I,key:C},navigationType:i}},[u,f,m,g,I,C,i]);return b==null?null:R.createElement(Nr.Provider,{value:d},R.createElement(Id.Provider,{children:n,value:b}))}function Tk(t){let{children:e,location:n}=t;return ak(Xf(e),n)}new Promise(()=>{});function Xf(t,e){e===void 0&&(e=[]);let n=[];return R.Children.forEach(t,(r,i)=>{if(!R.isValidElement(r))return;let s=[...e,i];if(r.type===R.Fragment){n.push.apply(n,Xf(r.props.children,s));return}r.type!==Jt&&Fe(!1),!r.props.index||!r.props.children||Fe(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Xf(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Fc(){return Fc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Fc.apply(null,arguments)}function Bx(t,e){if(t==null)return{};var n={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(e.indexOf(r)!==-1)continue;n[r]=t[r]}return n}function Ik(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function Sk(t,e){return t.button===0&&(!e||e==="_self")&&!Ik(t)}function Jf(t){return t===void 0&&(t=""),new URLSearchParams(typeof t=="string"||Array.isArray(t)||t instanceof URLSearchParams?t:Object.keys(t).reduce((e,n)=>{let r=t[n];return e.concat(Array.isArray(r)?r.map(i=>[n,i]):[[n,r]])},[]))}function Ak(t,e){let n=Jf(t);return e&&e.forEach((r,i)=>{n.has(i)||e.getAll(i).forEach(s=>{n.append(i,s)})}),n}const kk=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],bk=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],Rk="6";try{window.__reactRouterVersion=Rk}catch{}const Ck=R.createContext({isTransitioning:!1}),Pk="startTransition",_v=TI[Pk];function Nk(t){let{basename:e,children:n,future:r,window:i}=t,s=R.useRef();s.current==null&&(s.current=LA({window:i,v5Compat:!0}));let o=s.current,[l,u]=R.useState({action:o.action,location:o.location}),{v7_startTransition:d}=r||{},f=R.useCallback(m=>{d&&_v?_v(()=>u(m)):u(m)},[u,d]);return R.useLayoutEffect(()=>o.listen(f),[o,f]),R.useEffect(()=>wk(r),[r]),R.createElement(Ek,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}const Dk=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",jk=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Pe=R.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:u,to:d,preventScrollReset:f,viewTransition:m}=e,g=Bx(e,kk),{basename:I}=R.useContext(Nr),C,b=!1;if(typeof d=="string"&&jk.test(d)&&(C=d,Dk))try{let A=new URL(window.location.href),O=d.startsWith("//")?new URL(A.protocol+d):new URL(d),M=bo(O.pathname,I);O.origin===A.origin&&M!=null?d=M+O.search+O.hash:b=!0}catch{}let P=sk(d,{relative:i}),x=Mk(d,{replace:o,state:l,target:u,preventScrollReset:f,relative:i,viewTransition:m});function _(A){r&&r(A),A.defaultPrevented||x(A)}return R.createElement("a",Fc({},g,{href:C||P,onClick:b||s?r:_,ref:n,target:u}))}),Lk=R.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:l,to:u,viewTransition:d,children:f}=e,m=Bx(e,bk),g=Sd(u,{relative:m.relative}),I=Es(),C=R.useContext(Ox),{navigator:b,basename:P}=R.useContext(Nr),x=C!=null&&Vk(g)&&d===!0,_=b.encodeLocation?b.encodeLocation(g).pathname:g.pathname,A=I.pathname,O=C&&C.navigation&&C.navigation.location?C.navigation.location.pathname:null;i||(A=A.toLowerCase(),O=O?O.toLowerCase():null,_=_.toLowerCase()),O&&P&&(O=bo(O,P)||O);const M=_!=="/"&&_.endsWith("/")?_.length-1:_.length;let D=A===_||!o&&A.startsWith(_)&&A.charAt(M)==="/",T=O!=null&&(O===_||!o&&O.startsWith(_)&&O.charAt(_.length)==="/"),y={isActive:D,isPending:T,isTransitioning:x},E=D?r:void 0,S;typeof s=="function"?S=s(y):S=[s,D?"active":null,T?"pending":null,x?"transitioning":null].filter(Boolean).join(" ");let N=typeof l=="function"?l(y):l;return R.createElement(Pe,Fc({},m,{"aria-current":E,className:S,ref:n,style:N,to:u,viewTransition:d}),typeof f=="function"?f(y):f)});var Zf;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Zf||(Zf={}));var wv;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(wv||(wv={}));function Ok(t){let e=R.useContext(Td);return e||Fe(!1),e}function Mk(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,viewTransition:l}=e===void 0?{}:e,u=jr(),d=Es(),f=Sd(t,{relative:o});return R.useCallback(m=>{if(Sk(m,n)){m.preventDefault();let g=r!==void 0?r:Uc(d)===Uc(f);u(t,{replace:g,state:i,preventScrollReset:s,relative:o,viewTransition:l})}},[d,u,f,r,i,n,t,s,o,l])}function Hx(t){let e=R.useRef(Jf(t)),n=R.useRef(!1),r=Es(),i=R.useMemo(()=>Ak(r.search,n.current?null:e.current),[r.search]),s=jr(),o=R.useCallback((l,u)=>{const d=Jf(typeof l=="function"?l(i):l);n.current=!0,s("?"+d,u)},[s,i]);return[i,o]}function Vk(t,e){e===void 0&&(e={});let n=R.useContext(Ck);n==null&&Fe(!1);let{basename:r}=Ok(Zf.useViewTransitionState),i=Sd(t,{relative:e.relative});if(!n.isTransitioning)return!1;let s=bo(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=bo(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Yf(i.pathname,o)!=null||Yf(i.pathname,s)!=null}/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uk=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Wx=(...t)=>t.filter((e,n,r)=>!!e&&r.indexOf(e)===n).join(" ");/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Fk={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zk=R.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:s,iconNode:o,...l},u)=>R.createElement("svg",{ref:u,...Fk,width:e,height:e,stroke:t,strokeWidth:r?Number(n)*24/Number(e):n,className:Wx("lucide",i),...l},[...o.map(([d,f])=>R.createElement(d,f)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ie=(t,e)=>{const n=R.forwardRef(({className:r,...i},s)=>R.createElement(zk,{ref:s,iconNode:e,className:Wx(`lucide-${Uk(t)}`,r),...i}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qx=ie("Bookmark",[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gx=ie("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $k=ie("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ad=ie("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vl=ie("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $o=ie("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bk=ie("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hk=ie("CircleHelp",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kx=ie("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wk=ie("Compass",[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qk=ie("Dices",[["rect",{width:"12",height:"12",x:"2",y:"10",rx:"2",ry:"2",key:"6agr2n"}],["path",{d:"m17.92 14 3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6",key:"1o487t"}],["path",{d:"M6 18h.01",key:"uhywen"}],["path",{d:"M10 14h.01",key:"ssrbsk"}],["path",{d:"M15 6h.01",key:"cblpky"}],["path",{d:"M18 9h.01",key:"2061c0"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qx=ie("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gk=ie("Film",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 3v18",key:"bbkbws"}],["path",{d:"M3 7.5h4",key:"zfgn84"}],["path",{d:"M3 12h18",key:"1i2n21"}],["path",{d:"M3 16.5h4",key:"1230mu"}],["path",{d:"M17 3v18",key:"in4fa5"}],["path",{d:"M17 7.5h4",key:"myr1c1"}],["path",{d:"M17 16.5h4",key:"go4c1d"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kk=ie("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yx=ie("History",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qk=ie("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yk=ie("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xk=ie("Languages",[["path",{d:"m5 8 6 6",key:"1wu5hv"}],["path",{d:"m4 14 6-6 2-3",key:"1k1g8d"}],["path",{d:"M2 5h12",key:"or177f"}],["path",{d:"M7 2h1",key:"1t2jsx"}],["path",{d:"m22 22-5-10-5 10",key:"don7ne"}],["path",{d:"M14 18h6",key:"1m8k6r"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jk=ie("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zk=ie("ListFilter",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M7 12h10",key:"b7w52i"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _n=ie("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xx=ie("LogIn",[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}],["polyline",{points:"10 17 15 12 10 7",key:"1ail0h"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jx=ie("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eb=ie("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tb=ie("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nb=ie("Pencil",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Im=ie("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zx=ie("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rb=ie("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ib=ie("Reply",[["polyline",{points:"9 17 4 12 9 7",key:"hvgpf2"}],["path",{d:"M20 18v-2a4 4 0 0 0-4-4H4",key:"5vmcpk"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xv=ie("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sb=ie("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zc=ie("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ob=ie("Server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eE=ie("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kd=ie("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ab=ie("ThumbsDown",[["path",{d:"M17 14V2",key:"8ymqnk"}],["path",{d:"M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z",key:"m61m77"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lb=ie("ThumbsUp",[["path",{d:"M7 10v12",key:"1qc93n"}],["path",{d:"M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z",key:"emmmcr"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tE=ie("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ub=ie("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ev=ie("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cb=ie("Tv",[["rect",{width:"20",height:"15",x:"2",y:"7",rx:"2",ry:"2",key:"10ag99"}],["polyline",{points:"17 2 12 7 7 2",key:"11pgbg"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nE=ie("UserPlus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rE=ie("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ul=ie("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);var Tv={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},db=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},sE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,d=u?t[i+2]:0,f=s>>2,m=(s&3)<<4|l>>4;let g=(l&15)<<2|d>>6,I=d&63;u||(I=64,o||(g=64)),r.push(n[f],n[m],n[g],n[I])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(iE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):db(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const d=i<t.length?n[t.charAt(i)]:64;++i;const m=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||d==null||m==null)throw new hb;const g=s<<2|l>>4;if(r.push(g),d!==64){const I=l<<4&240|d>>2;if(r.push(I),m!==64){const C=d<<6&192|m;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class hb extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const fb=function(t){const e=iE(t);return sE.encodeByteArray(e,!0)},$c=function(t){return fb(t).replace(/\./g,"")},oE=function(t){try{return sE.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pb(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mb=()=>pb().__FIREBASE_DEFAULTS__,gb=()=>{if(typeof process>"u"||typeof Tv>"u")return;const t=Tv.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},yb=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&oE(t[1]);return e&&JSON.parse(e)},bd=()=>{try{return mb()||gb()||yb()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},aE=t=>{var e,n;return(n=(e=bd())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},vb=t=>{const e=aE(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},lE=()=>{var t;return(t=bd())===null||t===void 0?void 0:t.config},uE=t=>{var e;return(e=bd())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _b{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wb(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[$c(JSON.stringify(n)),$c(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ct(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function xb(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ct())}function Eb(){var t;const e=(t=bd())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Tb(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Ib(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Sb(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ab(){const t=Ct();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function kb(){return!Eb()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function bb(){try{return typeof indexedDB=="object"}catch{return!1}}function Rb(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cb="FirebaseError";class Lr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Cb,Object.setPrototypeOf(this,Lr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Fl.prototype.create)}}class Fl{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Pb(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Lr(i,l,r)}}function Pb(t,e){return t.replace(Nb,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Nb=/\{\$([^}]+)}/g;function Db(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Bc(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Iv(s)&&Iv(o)){if(!Bc(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Iv(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zl(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ja(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function La(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function jb(t,e){const n=new Lb(t,e);return n.subscribe.bind(n)}class Lb{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Ob(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Nh),i.error===void 0&&(i.error=Nh),i.complete===void 0&&(i.complete=Nh);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ob(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Nh(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qe(t){return t&&t._delegate?t._delegate:t}class fs{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zi="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mb{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new _b;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ub(e))try{this.getOrInitializeService({instanceIdentifier:Zi})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Zi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Zi){return this.instances.has(e)}getOptions(e=Zi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Vb(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Zi){return this.component?this.component.multipleInstances?e:Zi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Vb(t){return t===Zi?void 0:t}function Ub(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fb{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Mb(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var de;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(de||(de={}));const zb={debug:de.DEBUG,verbose:de.VERBOSE,info:de.INFO,warn:de.WARN,error:de.ERROR,silent:de.SILENT},$b=de.INFO,Bb={[de.DEBUG]:"log",[de.VERBOSE]:"log",[de.INFO]:"info",[de.WARN]:"warn",[de.ERROR]:"error"},Hb=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Bb[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Sm{constructor(e){this.name=e,this._logLevel=$b,this._logHandler=Hb,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in de))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?zb[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,de.DEBUG,...e),this._logHandler(this,de.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,de.VERBOSE,...e),this._logHandler(this,de.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,de.INFO,...e),this._logHandler(this,de.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,de.WARN,...e),this._logHandler(this,de.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,de.ERROR,...e),this._logHandler(this,de.ERROR,...e)}}const Wb=(t,e)=>e.some(n=>t instanceof n);let Sv,Av;function qb(){return Sv||(Sv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Gb(){return Av||(Av=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const cE=new WeakMap,ep=new WeakMap,dE=new WeakMap,Dh=new WeakMap,Am=new WeakMap;function Kb(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(vi(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&cE.set(n,t)}).catch(()=>{}),Am.set(e,t),e}function Qb(t){if(ep.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});ep.set(t,e)}let tp={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ep.get(t);if(e==="objectStoreNames")return t.objectStoreNames||dE.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return vi(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Yb(t){tp=t(tp)}function Xb(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(jh(this),e,...n);return dE.set(r,e.sort?e.sort():[e]),vi(r)}:Gb().includes(t)?function(...e){return t.apply(jh(this),e),vi(cE.get(this))}:function(...e){return vi(t.apply(jh(this),e))}}function Jb(t){return typeof t=="function"?Xb(t):(t instanceof IDBTransaction&&Qb(t),Wb(t,qb())?new Proxy(t,tp):t)}function vi(t){if(t instanceof IDBRequest)return Kb(t);if(Dh.has(t))return Dh.get(t);const e=Jb(t);return e!==t&&(Dh.set(t,e),Am.set(e,t)),e}const jh=t=>Am.get(t);function Zb(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=vi(o);return r&&o.addEventListener("upgradeneeded",u=>{r(vi(o.result),u.oldVersion,u.newVersion,vi(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),l}const eR=["get","getKey","getAll","getAllKeys","count"],tR=["put","add","delete","clear"],Lh=new Map;function kv(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Lh.get(e))return Lh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=tR.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||eR.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let d=u.store;return r&&(d=d.index(l.shift())),(await Promise.all([d[n](...l),i&&u.done]))[0]};return Lh.set(e,s),s}Yb(t=>({...t,get:(e,n,r)=>kv(e,n)||t.get(e,n,r),has:(e,n)=>!!kv(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nR{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(rR(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function rR(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const np="@firebase/app",bv="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kr=new Sm("@firebase/app"),iR="@firebase/app-compat",sR="@firebase/analytics-compat",oR="@firebase/analytics",aR="@firebase/app-check-compat",lR="@firebase/app-check",uR="@firebase/auth",cR="@firebase/auth-compat",dR="@firebase/database",hR="@firebase/data-connect",fR="@firebase/database-compat",pR="@firebase/functions",mR="@firebase/functions-compat",gR="@firebase/installations",yR="@firebase/installations-compat",vR="@firebase/messaging",_R="@firebase/messaging-compat",wR="@firebase/performance",xR="@firebase/performance-compat",ER="@firebase/remote-config",TR="@firebase/remote-config-compat",IR="@firebase/storage",SR="@firebase/storage-compat",AR="@firebase/firestore",kR="@firebase/vertexai-preview",bR="@firebase/firestore-compat",RR="firebase",CR="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rp="[DEFAULT]",PR={[np]:"fire-core",[iR]:"fire-core-compat",[oR]:"fire-analytics",[sR]:"fire-analytics-compat",[lR]:"fire-app-check",[aR]:"fire-app-check-compat",[uR]:"fire-auth",[cR]:"fire-auth-compat",[dR]:"fire-rtdb",[hR]:"fire-data-connect",[fR]:"fire-rtdb-compat",[pR]:"fire-fn",[mR]:"fire-fn-compat",[gR]:"fire-iid",[yR]:"fire-iid-compat",[vR]:"fire-fcm",[_R]:"fire-fcm-compat",[wR]:"fire-perf",[xR]:"fire-perf-compat",[ER]:"fire-rc",[TR]:"fire-rc-compat",[IR]:"fire-gcs",[SR]:"fire-gcs-compat",[AR]:"fire-fst",[bR]:"fire-fst-compat",[kR]:"fire-vertex","fire-js":"fire-js",[RR]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wl=new Map,NR=new Map,ip=new Map;function Rv(t,e){try{t.container.addComponent(e)}catch(n){kr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ro(t){const e=t.name;if(ip.has(e))return kr.debug(`There were multiple attempts to register component ${e}.`),!1;ip.set(e,t);for(const n of wl.values())Rv(n,t);for(const n of NR.values())Rv(n,t);return!0}function km(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Bn(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DR={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},_i=new Fl("app","Firebase",DR);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jR{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new fs("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw _i.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bo=CR;function hE(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:rp,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw _i.create("bad-app-name",{appName:String(i)});if(n||(n=lE()),!n)throw _i.create("no-options");const s=wl.get(i);if(s){if(Bc(n,s.options)&&Bc(r,s.config))return s;throw _i.create("duplicate-app",{appName:i})}const o=new Fb(i);for(const u of ip.values())o.addComponent(u);const l=new jR(n,r,o);return wl.set(i,l),l}function fE(t=rp){const e=wl.get(t);if(!e&&t===rp&&lE())return hE();if(!e)throw _i.create("no-app",{appName:t});return e}function Cv(){return Array.from(wl.values())}function wi(t,e,n){var r;let i=(r=PR[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),kr.warn(l.join(" "));return}Ro(new fs(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LR="firebase-heartbeat-database",OR=1,xl="firebase-heartbeat-store";let Oh=null;function pE(){return Oh||(Oh=Zb(LR,OR,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(xl)}catch(n){console.warn(n)}}}}).catch(t=>{throw _i.create("idb-open",{originalErrorMessage:t.message})})),Oh}async function MR(t){try{const n=(await pE()).transaction(xl),r=await n.objectStore(xl).get(mE(t));return await n.done,r}catch(e){if(e instanceof Lr)kr.warn(e.message);else{const n=_i.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});kr.warn(n.message)}}}async function Pv(t,e){try{const r=(await pE()).transaction(xl,"readwrite");await r.objectStore(xl).put(e,mE(t)),await r.done}catch(n){if(n instanceof Lr)kr.warn(n.message);else{const r=_i.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});kr.warn(r.message)}}}function mE(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VR=1024,UR=30*24*60*60*1e3;class FR{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new $R(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Nv();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=UR}),this._storage.overwrite(this._heartbeatsCache))}catch(r){kr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Nv(),{heartbeatsToSend:r,unsentEntries:i}=zR(this._heartbeatsCache.heartbeats),s=$c(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return kr.warn(n),""}}}function Nv(){return new Date().toISOString().substring(0,10)}function zR(t,e=VR){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Dv(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Dv(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class $R{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return bb()?Rb().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await MR(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Pv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Pv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Dv(t){return $c(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BR(t){Ro(new fs("platform-logger",e=>new nR(e),"PRIVATE")),Ro(new fs("heartbeat",e=>new FR(e),"PRIVATE")),wi(np,bv,t),wi(np,bv,"esm2017"),wi("fire-js","")}BR("");function bm(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function gE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const HR=gE,yE=new Fl("auth","Firebase",gE());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hc=new Sm("@firebase/auth");function WR(t,...e){Hc.logLevel<=de.WARN&&Hc.warn(`Auth (${Bo}): ${t}`,...e)}function sc(t,...e){Hc.logLevel<=de.ERROR&&Hc.error(`Auth (${Bo}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nn(t,...e){throw Rm(t,...e)}function qn(t,...e){return Rm(t,...e)}function vE(t,e,n){const r=Object.assign(Object.assign({},HR()),{[e]:n});return new Fl("auth","Firebase",r).create(e,{appName:t.name})}function xr(t){return vE(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Rm(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return yE.create(t,...e)}function ne(t,e,...n){if(!t)throw Rm(e,...n)}function yr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw sc(e),new Error(e)}function br(t,e){t||yr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function qR(){return jv()==="http:"||jv()==="https:"}function jv(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GR(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(qR()||Ib()||"connection"in navigator)?navigator.onLine:!0}function KR(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{constructor(e,n){this.shortDelay=e,this.longDelay=n,br(n>e,"Short delay should be less than long delay!"),this.isMobile=xb()||Sb()}get(){return GR()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cm(t,e){br(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _E{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;yr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;yr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;yr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QR={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YR=new $l(3e4,6e4);function Or(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Zn(t,e,n,r,i={}){return wE(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=zl(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const d=Object.assign({method:e,headers:u},s);return Tb()||(d.referrerPolicy="no-referrer"),_E.fetch()(xE(t,t.config.apiHost,n,l),d)})}async function wE(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},QR),e);try{const i=new JR(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Uu(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,d]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Uu(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Uu(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Uu(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw vE(t,f,d);Nn(t,f)}}catch(i){if(i instanceof Lr)throw i;Nn(t,"network-request-failed",{message:String(i)})}}async function Bl(t,e,n,r,i={}){const s=await Zn(t,e,n,r,i);return"mfaPendingCredential"in s&&Nn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function xE(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Cm(t.config,i):`${t.config.apiScheme}://${i}`}function XR(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class JR{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(qn(this.auth,"network-request-failed")),YR.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Uu(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=qn(t,e,r);return i.customData._tokenResponse=n,i}function Lv(t){return t!==void 0&&t.enterprise!==void 0}class ZR{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return XR(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function eC(t,e){return Zn(t,"GET","/v2/recaptchaConfig",Or(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tC(t,e){return Zn(t,"POST","/v1/accounts:delete",e)}async function EE(t,e){return Zn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ya(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function nC(t,e=!1){const n=qe(t),r=await n.getIdToken(e),i=Pm(r);ne(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ya(Mh(i.auth_time)),issuedAtTime:Ya(Mh(i.iat)),expirationTime:Ya(Mh(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Mh(t){return Number(t)*1e3}function Pm(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return sc("JWT malformed, contained fewer than 3 sections"),null;try{const i=oE(n);return i?JSON.parse(i):(sc("Failed to decode base64 JWT payload"),null)}catch(i){return sc("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Ov(t){const e=Pm(t);return ne(e,"internal-error"),ne(typeof e.exp<"u","internal-error"),ne(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Co(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Lr&&rC(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function rC({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class op{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ya(this.lastLoginAt),this.creationTime=Ya(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wc(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Co(t,EE(n,{idToken:r}));ne(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?TE(s.providerUserInfo):[],l=oC(t.providerData,o),u=t.isAnonymous,d=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),f=u?d:!1,m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new op(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(t,m)}async function sC(t){const e=qe(t);await Wc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function oC(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function TE(t){return t.map(e=>{var{providerId:n}=e,r=bm(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aC(t,e){const n=await wE(t,{},async()=>{const r=zl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=xE(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",_E.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function lC(t,e){return Zn(t,"POST","/v2/accounts:revokeToken",Or(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ne(e.idToken,"internal-error"),ne(typeof e.idToken<"u","internal-error"),ne(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ov(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ne(e.length!==0,"internal-error");const n=Ov(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ne(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await aC(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new go;return r&&(ne(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(ne(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(ne(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new go,this.toJSON())}_performRefresh(){return yr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qr(t,e){ne(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class vr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=bm(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new iC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new op(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Co(this,this.stsTokenManager.getToken(this.auth,e));return ne(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return nC(this,e)}reload(){return sC(this)}_assign(e){this!==e&&(ne(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new vr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ne(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Wc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Bn(this.auth.app))return Promise.reject(xr(this.auth));const e=await this.getIdToken();return await Co(this,tC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,u,d,f;const m=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(i=n.email)!==null&&i!==void 0?i:void 0,I=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,C=(o=n.photoURL)!==null&&o!==void 0?o:void 0,b=(l=n.tenantId)!==null&&l!==void 0?l:void 0,P=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,x=(d=n.createdAt)!==null&&d!==void 0?d:void 0,_=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:A,emailVerified:O,isAnonymous:M,providerData:D,stsTokenManager:T}=n;ne(A&&T,e,"internal-error");const y=go.fromJSON(this.name,T);ne(typeof A=="string",e,"internal-error"),qr(m,e.name),qr(g,e.name),ne(typeof O=="boolean",e,"internal-error"),ne(typeof M=="boolean",e,"internal-error"),qr(I,e.name),qr(C,e.name),qr(b,e.name),qr(P,e.name),qr(x,e.name),qr(_,e.name);const E=new vr({uid:A,auth:e,email:g,emailVerified:O,displayName:m,isAnonymous:M,photoURL:C,phoneNumber:I,tenantId:b,stsTokenManager:y,createdAt:x,lastLoginAt:_});return D&&Array.isArray(D)&&(E.providerData=D.map(S=>Object.assign({},S))),P&&(E._redirectEventId=P),E}static async _fromIdTokenResponse(e,n,r=!1){const i=new go;i.updateFromServerResponse(n);const s=new vr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Wc(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];ne(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?TE(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new go;l.updateFromIdToken(r);const u=new vr({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new op(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,d),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mv=new Map;function _r(t){br(t instanceof Function,"Expected a class definition");let e=Mv.get(t);return e?(br(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Mv.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}IE.type="NONE";const Vv=IE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oc(t,e,n){return`firebase:${t}:${e}:${n}`}class yo{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=oc(this.userKey,i.apiKey,s),this.fullPersistenceKey=oc("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?vr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new yo(_r(Vv),e,r);const i=(await Promise.all(n.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let s=i[0]||_r(Vv);const o=oc(r,e.config.apiKey,e.name);let l=null;for(const d of n)try{const f=await d._get(o);if(f){const m=vr._fromJSON(e,f);d!==s&&(l=m),s=d;break}}catch{}const u=i.filter(d=>d._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new yo(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async d=>{if(d!==s)try{await d._remove(o)}catch{}})),new yo(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uv(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(bE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(SE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(CE(e))return"Blackberry";if(PE(e))return"Webos";if(AE(e))return"Safari";if((e.includes("chrome/")||kE(e))&&!e.includes("edge/"))return"Chrome";if(RE(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function SE(t=Ct()){return/firefox\//i.test(t)}function AE(t=Ct()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function kE(t=Ct()){return/crios\//i.test(t)}function bE(t=Ct()){return/iemobile/i.test(t)}function RE(t=Ct()){return/android/i.test(t)}function CE(t=Ct()){return/blackberry/i.test(t)}function PE(t=Ct()){return/webos/i.test(t)}function Nm(t=Ct()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function uC(t=Ct()){var e;return Nm(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function cC(){return Ab()&&document.documentMode===10}function NE(t=Ct()){return Nm(t)||RE(t)||PE(t)||CE(t)||/windows phone/i.test(t)||bE(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DE(t,e=[]){let n;switch(t){case"Browser":n=Uv(Ct());break;case"Worker":n=`${Uv(Ct())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Bo}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hC(t,e={}){return Zn(t,"GET","/v2/passwordPolicy",Or(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fC=6;class pC{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:fC,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mC{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Fv(this),this.idTokenSubscription=new Fv(this),this.beforeStateQueue=new dC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=yE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=_r(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await yo.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await EE(this,{idToken:e}),r=await vr._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Bn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ne(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Wc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=KR()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Bn(this.app))return Promise.reject(xr(this));const n=e?qe(e):null;return n&&ne(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ne(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Bn(this.app)?Promise.reject(xr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Bn(this.app)?Promise.reject(xr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(_r(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await hC(this),n=new pC(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Fl("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await lC(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&_r(e)||this._popupRedirectResolver;ne(n,this,"argument-error"),this.redirectPersistenceManager=await yo.create(this,[_r(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(ne(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ne(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=DE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&WR(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ni(t){return qe(t)}class Fv{constructor(e){this.auth=e,this.observer=null,this.addObserver=jb(n=>this.observer=n)}get next(){return ne(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function gC(t){Rd=t}function jE(t){return Rd.loadJS(t)}function yC(){return Rd.recaptchaEnterpriseScript}function vC(){return Rd.gapiScript}function _C(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const wC="recaptcha-enterprise",xC="NO_RECAPTCHA";class EC{constructor(e){this.type=wC,this.auth=Ni(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{eC(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const d=new ZR(u);return s.tenantId==null?s._agentRecaptchaConfig=d:s._tenantRecaptchaConfigs[s.tenantId]=d,o(d.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;Lv(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(d=>{o(d)}).catch(()=>{o(xC)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&Lv(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=yC();u.length!==0&&(u+=l),jE(u).then(()=>{i(l,s,o)}).catch(d=>{o(d)})}}).catch(l=>{o(l)})})}}async function zv(t,e,n,r=!1){const i=new EC(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function qc(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await zv(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await zv(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TC(t,e){const n=km(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Bc(s,e??{}))return i;Nn(i,"already-initialized")}return n.initialize({options:e})}function IC(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(_r);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function SC(t,e,n){const r=Ni(t);ne(r._canInitEmulator,r,"emulator-config-failed"),ne(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=LE(e),{host:o,port:l}=AC(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),kC()}function LE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function AC(t){const e=LE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:$v(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:$v(o)}}}function $v(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function kC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dm{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return yr("not implemented")}_getIdTokenResponse(e){return yr("not implemented")}_linkToIdToken(e,n){return yr("not implemented")}_getReauthenticationResolver(e){return yr("not implemented")}}async function bC(t,e){return Zn(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RC(t,e){return Bl(t,"POST","/v1/accounts:signInWithPassword",Or(t,e))}async function CC(t,e){return Zn(t,"POST","/v1/accounts:sendOobCode",Or(t,e))}async function PC(t,e){return CC(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NC(t,e){return Bl(t,"POST","/v1/accounts:signInWithEmailLink",Or(t,e))}async function DC(t,e){return Bl(t,"POST","/v1/accounts:signInWithEmailLink",Or(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El extends Dm{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new El(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new El(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return qc(e,n,"signInWithPassword",RC);case"emailLink":return NC(e,{email:this._email,oobCode:this._password});default:Nn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return qc(e,r,"signUpPassword",bC);case"emailLink":return DC(e,{idToken:n,email:this._email,oobCode:this._password});default:Nn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vo(t,e){return Bl(t,"POST","/v1/accounts:signInWithIdp",Or(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jC="http://localhost";class ps extends Dm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ps(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Nn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=bm(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new ps(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return vo(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,vo(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,vo(e,n)}buildRequest(){const e={requestUri:jC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=zl(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LC(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function OC(t){const e=ja(La(t)).link,n=e?ja(La(e)).deep_link_id:null,r=ja(La(t)).deep_link_id;return(r?ja(La(r)).link:null)||r||n||e||t}class jm{constructor(e){var n,r,i,s,o,l;const u=ja(La(e)),d=(n=u.apiKey)!==null&&n!==void 0?n:null,f=(r=u.oobCode)!==null&&r!==void 0?r:null,m=LC((i=u.mode)!==null&&i!==void 0?i:null);ne(d&&f&&m,"argument-error"),this.apiKey=d,this.operation=m,this.code=f,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=OC(e);try{return new jm(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{constructor(){this.providerId=Ho.PROVIDER_ID}static credential(e,n){return El._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=jm.parseLink(n);return ne(r,"argument-error"),El._fromEmailAndCode(e,r.code,r.tenantId)}}Ho.PROVIDER_ID="password";Ho.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ho.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OE{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl extends OE{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti extends Hl{constructor(){super("facebook.com")}static credential(e){return ps._fromParams({providerId:ti.PROVIDER_ID,signInMethod:ti.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ti.credentialFromTaggedObject(e)}static credentialFromError(e){return ti.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ti.credential(e.oauthAccessToken)}catch{return null}}}ti.FACEBOOK_SIGN_IN_METHOD="facebook.com";ti.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni extends Hl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ps._fromParams({providerId:ni.PROVIDER_ID,signInMethod:ni.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ni.credentialFromTaggedObject(e)}static credentialFromError(e){return ni.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return ni.credential(n,r)}catch{return null}}}ni.GOOGLE_SIGN_IN_METHOD="google.com";ni.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri extends Hl{constructor(){super("github.com")}static credential(e){return ps._fromParams({providerId:ri.PROVIDER_ID,signInMethod:ri.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ri.credentialFromTaggedObject(e)}static credentialFromError(e){return ri.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ri.credential(e.oauthAccessToken)}catch{return null}}}ri.GITHUB_SIGN_IN_METHOD="github.com";ri.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii extends Hl{constructor(){super("twitter.com")}static credential(e,n){return ps._fromParams({providerId:ii.PROVIDER_ID,signInMethod:ii.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ii.credentialFromTaggedObject(e)}static credentialFromError(e){return ii.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return ii.credential(n,r)}catch{return null}}}ii.TWITTER_SIGN_IN_METHOD="twitter.com";ii.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MC(t,e){return Bl(t,"POST","/v1/accounts:signUp",Or(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await vr._fromIdTokenResponse(e,r,i),o=Bv(r);return new ms({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Bv(r);return new ms({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Bv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc extends Lr{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Gc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Gc(e,n,r,i)}}function ME(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Gc._fromErrorAndOperation(t,s,e,r):s})}async function VC(t,e,n=!1){const r=await Co(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ms._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UC(t,e,n=!1){const{auth:r}=t;if(Bn(r.app))return Promise.reject(xr(r));const i="reauthenticate";try{const s=await Co(t,ME(r,i,e,t),n);ne(s.idToken,r,"internal-error");const o=Pm(s.idToken);ne(o,r,"internal-error");const{sub:l}=o;return ne(t.uid===l,r,"user-mismatch"),ms._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Nn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VE(t,e,n=!1){if(Bn(t.app))return Promise.reject(xr(t));const r="signIn",i=await ME(t,r,e),s=await ms._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function FC(t,e){return VE(Ni(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UE(t){const e=Ni(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function zC(t,e,n){const r=Ni(t);await qc(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",PC)}async function $C(t,e,n){if(Bn(t.app))return Promise.reject(xr(t));const r=Ni(t),o=await qc(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",MC).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&UE(t),u}),l=await ms._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function BC(t,e,n){return Bn(t.app)?Promise.reject(xr(t)):FC(qe(t),Ho.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&UE(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HC(t,e){return Zn(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FE(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=qe(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Co(r,HC(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const l=r.providerData.find(({providerId:u})=>u==="password");l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function WC(t,e,n,r){return qe(t).onIdTokenChanged(e,n,r)}function qC(t,e,n){return qe(t).beforeAuthStateChanged(e,n)}function GC(t,e,n,r){return qe(t).onAuthStateChanged(e,n,r)}function KC(t){return qe(t).signOut()}const Kc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Kc,"1"),this.storage.removeItem(Kc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QC=1e3,YC=10;class $E extends zE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=NE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);cC()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,YC):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},QC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}$E.type="LOCAL";const XC=$E;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BE extends zE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}BE.type="SESSION";const HE=BE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JC(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cd{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Cd(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async d=>d(n.origin,s)),u=await JC(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Cd.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lm(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const d=Lm("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(m){const g=m;if(g.data.eventId===d)switch(g.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(g.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:d,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gn(){return window}function eP(t){Gn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WE(){return typeof Gn().WorkerGlobalScope<"u"&&typeof Gn().importScripts=="function"}async function tP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function nP(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function rP(){return WE()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qE="firebaseLocalStorageDb",iP=1,Qc="firebaseLocalStorage",GE="fbase_key";class Wl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Pd(t,e){return t.transaction([Qc],e?"readwrite":"readonly").objectStore(Qc)}function sP(){const t=indexedDB.deleteDatabase(qE);return new Wl(t).toPromise()}function ap(){const t=indexedDB.open(qE,iP);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Qc,{keyPath:GE})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Qc)?e(r):(r.close(),await sP(),e(await ap()))})})}async function Hv(t,e,n){const r=Pd(t,!0).put({[GE]:e,value:n});return new Wl(r).toPromise()}async function oP(t,e){const n=Pd(t,!1).get(e),r=await new Wl(n).toPromise();return r===void 0?null:r.value}function Wv(t,e){const n=Pd(t,!0).delete(e);return new Wl(n).toPromise()}const aP=800,lP=3;class KE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ap(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>lP)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return WE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Cd._getInstance(rP()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await tP(),!this.activeServiceWorker)return;this.sender=new ZC(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||nP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ap();return await Hv(e,Kc,"1"),await Wv(e,Kc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Hv(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>oP(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Wv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Pd(i,!1).getAll();return new Wl(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),aP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}KE.type="LOCAL";const uP=KE;new $l(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cP(t,e){return e?_r(e):(ne(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Om extends Dm{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return vo(e,this._buildIdpRequest())}_linkToIdToken(e,n){return vo(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return vo(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function dP(t){return VE(t.auth,new Om(t),t.bypassAuthState)}function hP(t){const{auth:e,user:n}=t;return ne(n,e,"internal-error"),UC(n,new Om(t),t.bypassAuthState)}async function fP(t){const{auth:e,user:n}=t;return ne(n,e,"internal-error"),VC(n,new Om(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QE{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return dP;case"linkViaPopup":case"linkViaRedirect":return fP;case"reauthViaPopup":case"reauthViaRedirect":return hP;default:Nn(this.auth,"internal-error")}}resolve(e){br(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){br(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pP=new $l(2e3,1e4);class lo extends QE{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,lo.currentPopupAction&&lo.currentPopupAction.cancel(),lo.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ne(e,this.auth,"internal-error"),e}async onExecution(){br(this.filter.length===1,"Popup operations only handle one event");const e=Lm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(qn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(qn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,lo.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(qn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,pP.get())};e()}}lo.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mP="pendingRedirect",ac=new Map;class gP extends QE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ac.get(this.auth._key());if(!e){try{const r=await yP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ac.set(this.auth._key(),e)}return this.bypassAuthState||ac.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function yP(t,e){const n=wP(e),r=_P(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function vP(t,e){ac.set(t._key(),e)}function _P(t){return _r(t._redirectPersistence)}function wP(t){return oc(mP,t.config.apiKey,t.name)}async function xP(t,e,n=!1){if(Bn(t.app))return Promise.reject(xr(t));const r=Ni(t),i=cP(r,e),o=await new gP(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EP=10*60*1e3;class TP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!IP(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!YE(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(qn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=EP&&this.cachedEventUids.clear(),this.cachedEventUids.has(qv(e))}saveEventToCache(e){this.cachedEventUids.add(qv(e)),this.lastProcessedEventTime=Date.now()}}function qv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function YE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function IP(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return YE(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SP(t,e={}){return Zn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,kP=/^https?/;async function bP(t){if(t.config.emulator)return;const{authorizedDomains:e}=await SP(t);for(const n of e)try{if(RP(n))return}catch{}Nn(t,"unauthorized-domain")}function RP(t){const e=sp(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!kP.test(n))return!1;if(AP.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CP=new $l(3e4,6e4);function Gv(){const t=Gn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function PP(t){return new Promise((e,n)=>{var r,i,s;function o(){Gv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Gv(),n(qn(t,"network-request-failed"))},timeout:CP.get()})}if(!((i=(r=Gn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Gn().gapi)===null||s===void 0)&&s.load)o();else{const l=_C("iframefcb");return Gn()[l]=()=>{gapi.load?o():n(qn(t,"network-request-failed"))},jE(`${vC()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw lc=null,e})}let lc=null;function NP(t){return lc=lc||PP(t),lc}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DP=new $l(5e3,15e3),jP="__/auth/iframe",LP="emulator/auth/iframe",OP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},MP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function VP(t){const e=t.config;ne(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Cm(e,LP):`https://${t.config.authDomain}/${jP}`,r={apiKey:e.apiKey,appName:t.name,v:Bo},i=MP.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${zl(r).slice(1)}`}async function UP(t){const e=await NP(t),n=Gn().gapi;return ne(n,t,"internal-error"),e.open({where:document.body,url:VP(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:OP,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=qn(t,"network-request-failed"),l=Gn().setTimeout(()=>{s(o)},DP.get());function u(){Gn().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},zP=500,$P=600,BP="_blank",HP="http://localhost";class Kv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function WP(t,e,n,r=zP,i=$P){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},FP),{width:r.toString(),height:i.toString(),top:s,left:o}),d=Ct().toLowerCase();n&&(l=kE(d)?BP:n),SE(d)&&(e=e||HP,u.scrollbars="yes");const f=Object.entries(u).reduce((g,[I,C])=>`${g}${I}=${C},`,"");if(uC(d)&&l!=="_self")return qP(e||"",l),new Kv(null);const m=window.open(e||"",l,f);ne(m,t,"popup-blocked");try{m.focus()}catch{}return new Kv(m)}function qP(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GP="__/auth/handler",KP="emulator/auth/handler",QP=encodeURIComponent("fac");async function Qv(t,e,n,r,i,s){ne(t.config.authDomain,t,"auth-domain-config-required"),ne(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Bo,eventId:i};if(e instanceof OE){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Db(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,m]of Object.entries({}))o[f]=m}if(e instanceof Hl){const f=e.getScopes().filter(m=>m!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),d=u?`#${QP}=${encodeURIComponent(u)}`:"";return`${YP(t)}?${zl(l).slice(1)}${d}`}function YP({config:t}){return t.emulator?Cm(t,KP):`https://${t.authDomain}/${GP}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vh="webStorageSupport";class XP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=HE,this._completeRedirectFn=xP,this._overrideRedirectResult=vP}async _openPopup(e,n,r,i){var s;br((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Qv(e,n,r,sp(),i);return WP(e,o,Lm())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Qv(e,n,r,sp(),i);return eP(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(br(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await UP(e),r=new TP(e);return n.register("authEvent",i=>(ne(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Vh,{type:Vh},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Vh];o!==void 0&&n(!!o),Nn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=bP(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return NE()||AE()||Nm()}}const JP=XP;var Yv="@firebase/auth",Xv="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZP{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ne(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e2(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function t2(t){Ro(new fs("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;ne(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:DE(t)},d=new mC(r,i,s,u);return IC(d,n),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ro(new fs("auth-internal",e=>{const n=Ni(e.getProvider("auth").getImmediate());return(r=>new ZP(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),wi(Yv,Xv,e2(t)),wi(Yv,Xv,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n2=5*60,r2=uE("authIdTokenMaxAge")||n2;let Jv=null;const i2=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>r2)return;const i=n==null?void 0:n.token;Jv!==i&&(Jv=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function s2(t=fE()){const e=km(t,"auth");if(e.isInitialized())return e.getImmediate();const n=TC(t,{popupRedirectResolver:JP,persistence:[uP,XC,HE]}),r=uE("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=i2(s.toString());qC(n,o,()=>o(n.currentUser)),WC(n,l=>o(l))}}const i=aE("auth");return i&&SC(n,`http://${i}`),n}function o2(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}gC({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=qn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",o2().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});t2("Browser");var Zv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var as,XE;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,y){function E(){}E.prototype=y.prototype,T.D=y.prototype,T.prototype=new E,T.prototype.constructor=T,T.C=function(S,N,L){for(var k=Array(arguments.length-2),Ge=2;Ge<arguments.length;Ge++)k[Ge-2]=arguments[Ge];return y.prototype[N].apply(S,k)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(T,y,E){E||(E=0);var S=Array(16);if(typeof y=="string")for(var N=0;16>N;++N)S[N]=y.charCodeAt(E++)|y.charCodeAt(E++)<<8|y.charCodeAt(E++)<<16|y.charCodeAt(E++)<<24;else for(N=0;16>N;++N)S[N]=y[E++]|y[E++]<<8|y[E++]<<16|y[E++]<<24;y=T.g[0],E=T.g[1],N=T.g[2];var L=T.g[3],k=y+(L^E&(N^L))+S[0]+3614090360&4294967295;y=E+(k<<7&4294967295|k>>>25),k=L+(N^y&(E^N))+S[1]+3905402710&4294967295,L=y+(k<<12&4294967295|k>>>20),k=N+(E^L&(y^E))+S[2]+606105819&4294967295,N=L+(k<<17&4294967295|k>>>15),k=E+(y^N&(L^y))+S[3]+3250441966&4294967295,E=N+(k<<22&4294967295|k>>>10),k=y+(L^E&(N^L))+S[4]+4118548399&4294967295,y=E+(k<<7&4294967295|k>>>25),k=L+(N^y&(E^N))+S[5]+1200080426&4294967295,L=y+(k<<12&4294967295|k>>>20),k=N+(E^L&(y^E))+S[6]+2821735955&4294967295,N=L+(k<<17&4294967295|k>>>15),k=E+(y^N&(L^y))+S[7]+4249261313&4294967295,E=N+(k<<22&4294967295|k>>>10),k=y+(L^E&(N^L))+S[8]+1770035416&4294967295,y=E+(k<<7&4294967295|k>>>25),k=L+(N^y&(E^N))+S[9]+2336552879&4294967295,L=y+(k<<12&4294967295|k>>>20),k=N+(E^L&(y^E))+S[10]+4294925233&4294967295,N=L+(k<<17&4294967295|k>>>15),k=E+(y^N&(L^y))+S[11]+2304563134&4294967295,E=N+(k<<22&4294967295|k>>>10),k=y+(L^E&(N^L))+S[12]+1804603682&4294967295,y=E+(k<<7&4294967295|k>>>25),k=L+(N^y&(E^N))+S[13]+4254626195&4294967295,L=y+(k<<12&4294967295|k>>>20),k=N+(E^L&(y^E))+S[14]+2792965006&4294967295,N=L+(k<<17&4294967295|k>>>15),k=E+(y^N&(L^y))+S[15]+1236535329&4294967295,E=N+(k<<22&4294967295|k>>>10),k=y+(N^L&(E^N))+S[1]+4129170786&4294967295,y=E+(k<<5&4294967295|k>>>27),k=L+(E^N&(y^E))+S[6]+3225465664&4294967295,L=y+(k<<9&4294967295|k>>>23),k=N+(y^E&(L^y))+S[11]+643717713&4294967295,N=L+(k<<14&4294967295|k>>>18),k=E+(L^y&(N^L))+S[0]+3921069994&4294967295,E=N+(k<<20&4294967295|k>>>12),k=y+(N^L&(E^N))+S[5]+3593408605&4294967295,y=E+(k<<5&4294967295|k>>>27),k=L+(E^N&(y^E))+S[10]+38016083&4294967295,L=y+(k<<9&4294967295|k>>>23),k=N+(y^E&(L^y))+S[15]+3634488961&4294967295,N=L+(k<<14&4294967295|k>>>18),k=E+(L^y&(N^L))+S[4]+3889429448&4294967295,E=N+(k<<20&4294967295|k>>>12),k=y+(N^L&(E^N))+S[9]+568446438&4294967295,y=E+(k<<5&4294967295|k>>>27),k=L+(E^N&(y^E))+S[14]+3275163606&4294967295,L=y+(k<<9&4294967295|k>>>23),k=N+(y^E&(L^y))+S[3]+4107603335&4294967295,N=L+(k<<14&4294967295|k>>>18),k=E+(L^y&(N^L))+S[8]+1163531501&4294967295,E=N+(k<<20&4294967295|k>>>12),k=y+(N^L&(E^N))+S[13]+2850285829&4294967295,y=E+(k<<5&4294967295|k>>>27),k=L+(E^N&(y^E))+S[2]+4243563512&4294967295,L=y+(k<<9&4294967295|k>>>23),k=N+(y^E&(L^y))+S[7]+1735328473&4294967295,N=L+(k<<14&4294967295|k>>>18),k=E+(L^y&(N^L))+S[12]+2368359562&4294967295,E=N+(k<<20&4294967295|k>>>12),k=y+(E^N^L)+S[5]+4294588738&4294967295,y=E+(k<<4&4294967295|k>>>28),k=L+(y^E^N)+S[8]+2272392833&4294967295,L=y+(k<<11&4294967295|k>>>21),k=N+(L^y^E)+S[11]+1839030562&4294967295,N=L+(k<<16&4294967295|k>>>16),k=E+(N^L^y)+S[14]+4259657740&4294967295,E=N+(k<<23&4294967295|k>>>9),k=y+(E^N^L)+S[1]+2763975236&4294967295,y=E+(k<<4&4294967295|k>>>28),k=L+(y^E^N)+S[4]+1272893353&4294967295,L=y+(k<<11&4294967295|k>>>21),k=N+(L^y^E)+S[7]+4139469664&4294967295,N=L+(k<<16&4294967295|k>>>16),k=E+(N^L^y)+S[10]+3200236656&4294967295,E=N+(k<<23&4294967295|k>>>9),k=y+(E^N^L)+S[13]+681279174&4294967295,y=E+(k<<4&4294967295|k>>>28),k=L+(y^E^N)+S[0]+3936430074&4294967295,L=y+(k<<11&4294967295|k>>>21),k=N+(L^y^E)+S[3]+3572445317&4294967295,N=L+(k<<16&4294967295|k>>>16),k=E+(N^L^y)+S[6]+76029189&4294967295,E=N+(k<<23&4294967295|k>>>9),k=y+(E^N^L)+S[9]+3654602809&4294967295,y=E+(k<<4&4294967295|k>>>28),k=L+(y^E^N)+S[12]+3873151461&4294967295,L=y+(k<<11&4294967295|k>>>21),k=N+(L^y^E)+S[15]+530742520&4294967295,N=L+(k<<16&4294967295|k>>>16),k=E+(N^L^y)+S[2]+3299628645&4294967295,E=N+(k<<23&4294967295|k>>>9),k=y+(N^(E|~L))+S[0]+4096336452&4294967295,y=E+(k<<6&4294967295|k>>>26),k=L+(E^(y|~N))+S[7]+1126891415&4294967295,L=y+(k<<10&4294967295|k>>>22),k=N+(y^(L|~E))+S[14]+2878612391&4294967295,N=L+(k<<15&4294967295|k>>>17),k=E+(L^(N|~y))+S[5]+4237533241&4294967295,E=N+(k<<21&4294967295|k>>>11),k=y+(N^(E|~L))+S[12]+1700485571&4294967295,y=E+(k<<6&4294967295|k>>>26),k=L+(E^(y|~N))+S[3]+2399980690&4294967295,L=y+(k<<10&4294967295|k>>>22),k=N+(y^(L|~E))+S[10]+4293915773&4294967295,N=L+(k<<15&4294967295|k>>>17),k=E+(L^(N|~y))+S[1]+2240044497&4294967295,E=N+(k<<21&4294967295|k>>>11),k=y+(N^(E|~L))+S[8]+1873313359&4294967295,y=E+(k<<6&4294967295|k>>>26),k=L+(E^(y|~N))+S[15]+4264355552&4294967295,L=y+(k<<10&4294967295|k>>>22),k=N+(y^(L|~E))+S[6]+2734768916&4294967295,N=L+(k<<15&4294967295|k>>>17),k=E+(L^(N|~y))+S[13]+1309151649&4294967295,E=N+(k<<21&4294967295|k>>>11),k=y+(N^(E|~L))+S[4]+4149444226&4294967295,y=E+(k<<6&4294967295|k>>>26),k=L+(E^(y|~N))+S[11]+3174756917&4294967295,L=y+(k<<10&4294967295|k>>>22),k=N+(y^(L|~E))+S[2]+718787259&4294967295,N=L+(k<<15&4294967295|k>>>17),k=E+(L^(N|~y))+S[9]+3951481745&4294967295,T.g[0]=T.g[0]+y&4294967295,T.g[1]=T.g[1]+(N+(k<<21&4294967295|k>>>11))&4294967295,T.g[2]=T.g[2]+N&4294967295,T.g[3]=T.g[3]+L&4294967295}r.prototype.u=function(T,y){y===void 0&&(y=T.length);for(var E=y-this.blockSize,S=this.B,N=this.h,L=0;L<y;){if(N==0)for(;L<=E;)i(this,T,L),L+=this.blockSize;if(typeof T=="string"){for(;L<y;)if(S[N++]=T.charCodeAt(L++),N==this.blockSize){i(this,S),N=0;break}}else for(;L<y;)if(S[N++]=T[L++],N==this.blockSize){i(this,S),N=0;break}}this.h=N,this.o+=y},r.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var y=1;y<T.length-8;++y)T[y]=0;var E=8*this.o;for(y=T.length-8;y<T.length;++y)T[y]=E&255,E/=256;for(this.u(T),T=Array(16),y=E=0;4>y;++y)for(var S=0;32>S;S+=8)T[E++]=this.g[y]>>>S&255;return T};function s(T,y){var E=l;return Object.prototype.hasOwnProperty.call(E,T)?E[T]:E[T]=y(T)}function o(T,y){this.h=y;for(var E=[],S=!0,N=T.length-1;0<=N;N--){var L=T[N]|0;S&&L==y||(E[N]=L,S=!1)}this.g=E}var l={};function u(T){return-128<=T&&128>T?s(T,function(y){return new o([y|0],0>y?-1:0)}):new o([T|0],0>T?-1:0)}function d(T){if(isNaN(T)||!isFinite(T))return m;if(0>T)return P(d(-T));for(var y=[],E=1,S=0;T>=E;S++)y[S]=T/E|0,E*=4294967296;return new o(y,0)}function f(T,y){if(T.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(T.charAt(0)=="-")return P(f(T.substring(1),y));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var E=d(Math.pow(y,8)),S=m,N=0;N<T.length;N+=8){var L=Math.min(8,T.length-N),k=parseInt(T.substring(N,N+L),y);8>L?(L=d(Math.pow(y,L)),S=S.j(L).add(d(k))):(S=S.j(E),S=S.add(d(k)))}return S}var m=u(0),g=u(1),I=u(16777216);t=o.prototype,t.m=function(){if(b(this))return-P(this).m();for(var T=0,y=1,E=0;E<this.g.length;E++){var S=this.i(E);T+=(0<=S?S:4294967296+S)*y,y*=4294967296}return T},t.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(C(this))return"0";if(b(this))return"-"+P(this).toString(T);for(var y=d(Math.pow(T,6)),E=this,S="";;){var N=O(E,y).g;E=x(E,N.j(y));var L=((0<E.g.length?E.g[0]:E.h)>>>0).toString(T);if(E=N,C(E))return L+S;for(;6>L.length;)L="0"+L;S=L+S}},t.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function C(T){if(T.h!=0)return!1;for(var y=0;y<T.g.length;y++)if(T.g[y]!=0)return!1;return!0}function b(T){return T.h==-1}t.l=function(T){return T=x(this,T),b(T)?-1:C(T)?0:1};function P(T){for(var y=T.g.length,E=[],S=0;S<y;S++)E[S]=~T.g[S];return new o(E,~T.h).add(g)}t.abs=function(){return b(this)?P(this):this},t.add=function(T){for(var y=Math.max(this.g.length,T.g.length),E=[],S=0,N=0;N<=y;N++){var L=S+(this.i(N)&65535)+(T.i(N)&65535),k=(L>>>16)+(this.i(N)>>>16)+(T.i(N)>>>16);S=k>>>16,L&=65535,k&=65535,E[N]=k<<16|L}return new o(E,E[E.length-1]&-2147483648?-1:0)};function x(T,y){return T.add(P(y))}t.j=function(T){if(C(this)||C(T))return m;if(b(this))return b(T)?P(this).j(P(T)):P(P(this).j(T));if(b(T))return P(this.j(P(T)));if(0>this.l(I)&&0>T.l(I))return d(this.m()*T.m());for(var y=this.g.length+T.g.length,E=[],S=0;S<2*y;S++)E[S]=0;for(S=0;S<this.g.length;S++)for(var N=0;N<T.g.length;N++){var L=this.i(S)>>>16,k=this.i(S)&65535,Ge=T.i(N)>>>16,Ye=T.i(N)&65535;E[2*S+2*N]+=k*Ye,_(E,2*S+2*N),E[2*S+2*N+1]+=L*Ye,_(E,2*S+2*N+1),E[2*S+2*N+1]+=k*Ge,_(E,2*S+2*N+1),E[2*S+2*N+2]+=L*Ge,_(E,2*S+2*N+2)}for(S=0;S<y;S++)E[S]=E[2*S+1]<<16|E[2*S];for(S=y;S<2*y;S++)E[S]=0;return new o(E,0)};function _(T,y){for(;(T[y]&65535)!=T[y];)T[y+1]+=T[y]>>>16,T[y]&=65535,y++}function A(T,y){this.g=T,this.h=y}function O(T,y){if(C(y))throw Error("division by zero");if(C(T))return new A(m,m);if(b(T))return y=O(P(T),y),new A(P(y.g),P(y.h));if(b(y))return y=O(T,P(y)),new A(P(y.g),y.h);if(30<T.g.length){if(b(T)||b(y))throw Error("slowDivide_ only works with positive integers.");for(var E=g,S=y;0>=S.l(T);)E=M(E),S=M(S);var N=D(E,1),L=D(S,1);for(S=D(S,2),E=D(E,2);!C(S);){var k=L.add(S);0>=k.l(T)&&(N=N.add(E),L=k),S=D(S,1),E=D(E,1)}return y=x(T,N.j(y)),new A(N,y)}for(N=m;0<=T.l(y);){for(E=Math.max(1,Math.floor(T.m()/y.m())),S=Math.ceil(Math.log(E)/Math.LN2),S=48>=S?1:Math.pow(2,S-48),L=d(E),k=L.j(y);b(k)||0<k.l(T);)E-=S,L=d(E),k=L.j(y);C(L)&&(L=g),N=N.add(L),T=x(T,k)}return new A(N,T)}t.A=function(T){return O(this,T).h},t.and=function(T){for(var y=Math.max(this.g.length,T.g.length),E=[],S=0;S<y;S++)E[S]=this.i(S)&T.i(S);return new o(E,this.h&T.h)},t.or=function(T){for(var y=Math.max(this.g.length,T.g.length),E=[],S=0;S<y;S++)E[S]=this.i(S)|T.i(S);return new o(E,this.h|T.h)},t.xor=function(T){for(var y=Math.max(this.g.length,T.g.length),E=[],S=0;S<y;S++)E[S]=this.i(S)^T.i(S);return new o(E,this.h^T.h)};function M(T){for(var y=T.g.length+1,E=[],S=0;S<y;S++)E[S]=T.i(S)<<1|T.i(S-1)>>>31;return new o(E,T.h)}function D(T,y){var E=y>>5;y%=32;for(var S=T.g.length-E,N=[],L=0;L<S;L++)N[L]=0<y?T.i(L+E)>>>y|T.i(L+E+1)<<32-y:T.i(L+E);return new o(N,T.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,XE=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=d,o.fromString=f,as=o}).apply(typeof Zv<"u"?Zv:typeof self<"u"?self:typeof window<"u"?window:{});var Fu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var JE,Oa,ZE,uc,lp,e1,t1,n1;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,p){return a==Array.prototype||a==Object.prototype||(a[h]=p.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Fu=="object"&&Fu];for(var h=0;h<a.length;++h){var p=a[h];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function i(a,h){if(h)e:{var p=r;a=a.split(".");for(var v=0;v<a.length-1;v++){var V=a[v];if(!(V in p))break e;p=p[V]}a=a[a.length-1],v=p[a],h=h(v),h!=v&&h!=null&&e(p,a,{configurable:!0,writable:!0,value:h})}}function s(a,h){a instanceof String&&(a+="");var p=0,v=!1,V={next:function(){if(!v&&p<a.length){var U=p++;return{value:h(U,a[U]),done:!1}}return v=!0,{done:!0,value:void 0}}};return V[Symbol.iterator]=function(){return V},V}i("Array.prototype.values",function(a){return a||function(){return s(this,function(h,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function d(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function f(a,h,p){return a.call.apply(a.bind,arguments)}function m(a,h,p){if(!a)throw Error();if(2<arguments.length){var v=Array.prototype.slice.call(arguments,2);return function(){var V=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(V,v),a.apply(h,V)}}return function(){return a.apply(h,arguments)}}function g(a,h,p){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:m,g.apply(null,arguments)}function I(a,h){var p=Array.prototype.slice.call(arguments,1);return function(){var v=p.slice();return v.push.apply(v,arguments),a.apply(this,v)}}function C(a,h){function p(){}p.prototype=h.prototype,a.aa=h.prototype,a.prototype=new p,a.prototype.constructor=a,a.Qb=function(v,V,U){for(var G=Array(arguments.length-2),Ae=2;Ae<arguments.length;Ae++)G[Ae-2]=arguments[Ae];return h.prototype[V].apply(v,G)}}function b(a){const h=a.length;if(0<h){const p=Array(h);for(let v=0;v<h;v++)p[v]=a[v];return p}return[]}function P(a,h){for(let p=1;p<arguments.length;p++){const v=arguments[p];if(u(v)){const V=a.length||0,U=v.length||0;a.length=V+U;for(let G=0;G<U;G++)a[V+G]=v[G]}else a.push(v)}}class x{constructor(h,p){this.i=h,this.j=p,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function _(a){return/^[\s\xa0]*$/.test(a)}function A(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function O(a){return O[" "](a),a}O[" "]=function(){};var M=A().indexOf("Gecko")!=-1&&!(A().toLowerCase().indexOf("webkit")!=-1&&A().indexOf("Edge")==-1)&&!(A().indexOf("Trident")!=-1||A().indexOf("MSIE")!=-1)&&A().indexOf("Edge")==-1;function D(a,h,p){for(const v in a)h.call(p,a[v],v,a)}function T(a,h){for(const p in a)h.call(void 0,a[p],p,a)}function y(a){const h={};for(const p in a)h[p]=a[p];return h}const E="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function S(a,h){let p,v;for(let V=1;V<arguments.length;V++){v=arguments[V];for(p in v)a[p]=v[p];for(let U=0;U<E.length;U++)p=E[U],Object.prototype.hasOwnProperty.call(v,p)&&(a[p]=v[p])}}function N(a){var h=1;a=a.split(":");const p=[];for(;0<h&&a.length;)p.push(a.shift()),h--;return a.length&&p.push(a.join(":")),p}function L(a){l.setTimeout(()=>{throw a},0)}function k(){var a=Z;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class Ge{constructor(){this.h=this.g=null}add(h,p){const v=Ye.get();v.set(h,p),this.h?this.h.next=v:this.g=v,this.h=v}}var Ye=new x(()=>new Qt,a=>a.reset());class Qt{constructor(){this.next=this.g=this.h=null}set(h,p){this.h=h,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let ct,q=!1,Z=new Ge,K=()=>{const a=l.Promise.resolve(void 0);ct=()=>{a.then(he)}};var he=()=>{for(var a;a=k();){try{a.h.call(a.g)}catch(p){L(p)}var h=Ye;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}q=!1};function te(){this.s=this.s,this.C=this.C}te.prototype.s=!1,te.prototype.ma=function(){this.s||(this.s=!0,this.N())},te.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function _e(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}_e.prototype.h=function(){this.defaultPrevented=!0};var fe=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const p=()=>{};l.addEventListener("test",p,h),l.removeEventListener("test",p,h)}catch{}return a}();function wn(a,h){if(_e.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var p=this.type=a.type,v=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(M){e:{try{O(h.nodeName);var V=!0;break e}catch{}V=!1}V||(h=null)}}else p=="mouseover"?h=a.fromElement:p=="mouseout"&&(h=a.toElement);this.relatedTarget=h,v?(this.clientX=v.clientX!==void 0?v.clientX:v.pageX,this.clientY=v.clientY!==void 0?v.clientY:v.pageY,this.screenX=v.screenX||0,this.screenY=v.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:xn[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&wn.aa.h.call(this)}}C(wn,_e);var xn={2:"touch",3:"pen",4:"mouse"};wn.prototype.h=function(){wn.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var En="closure_listenable_"+(1e6*Math.random()|0),Qd=0;function Yd(a,h,p,v,V){this.listener=a,this.proxy=null,this.src=h,this.type=p,this.capture=!!v,this.ha=V,this.key=++Qd,this.da=this.fa=!1}function Ss(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Li(a){this.src=a,this.g={},this.h=0}Li.prototype.add=function(a,h,p,v,V){var U=a.toString();a=this.g[U],a||(a=this.g[U]=[],this.h++);var G=As(a,h,v,V);return-1<G?(h=a[G],p||(h.fa=!1)):(h=new Yd(h,this.src,U,!!v,V),h.fa=p,a.push(h)),h};function Xo(a,h){var p=h.type;if(p in a.g){var v=a.g[p],V=Array.prototype.indexOf.call(v,h,void 0),U;(U=0<=V)&&Array.prototype.splice.call(v,V,1),U&&(Ss(h),a.g[p].length==0&&(delete a.g[p],a.h--))}}function As(a,h,p,v){for(var V=0;V<a.length;++V){var U=a[V];if(!U.da&&U.listener==h&&U.capture==!!p&&U.ha==v)return V}return-1}var Te="closure_lm_"+(1e6*Math.random()|0),Oi={};function Se(a,h,p,v,V){if(Array.isArray(h)){for(var U=0;U<h.length;U++)Se(a,h[U],p,v,V);return null}return p=Zo(p),a&&a[En]?a.K(h,p,d(v)?!!v.capture:!1,V):Jo(a,h,p,!1,v,V)}function Jo(a,h,p,v,V,U){if(!h)throw Error("Invalid event type");var G=d(V)?!!V.capture:!!V,Ae=Mi(a);if(Ae||(a[Te]=Ae=new Li(a)),p=Ae.add(h,p,v,G,U),p.proxy)return p;if(v=ln(),p.proxy=v,v.src=a,v.listener=p,a.addEventListener)fe||(V=G),V===void 0&&(V=!1),a.addEventListener(h.toString(),v,V);else if(a.attachEvent)a.attachEvent(Tn(h.toString()),v);else if(a.addListener&&a.removeListener)a.addListener(v);else throw Error("addEventListener and attachEvent are unavailable.");return p}function ln(){function a(p){return h.call(a.src,a.listener,p)}const h=ou;return a}function Vr(a,h,p,v,V){if(Array.isArray(h))for(var U=0;U<h.length;U++)Vr(a,h[U],p,v,V);else v=d(v)?!!v.capture:!!v,p=Zo(p),a&&a[En]?(a=a.i,h=String(h).toString(),h in a.g&&(U=a.g[h],p=As(U,p,v,V),-1<p&&(Ss(U[p]),Array.prototype.splice.call(U,p,1),U.length==0&&(delete a.g[h],a.h--)))):a&&(a=Mi(a))&&(h=a.g[h.toString()],a=-1,h&&(a=As(h,p,v,V)),(p=-1<a?h[a]:null)&&ks(p))}function ks(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[En])Xo(h.i,a);else{var p=a.type,v=a.proxy;h.removeEventListener?h.removeEventListener(p,v,a.capture):h.detachEvent?h.detachEvent(Tn(p),v):h.addListener&&h.removeListener&&h.removeListener(v),(p=Mi(h))?(Xo(p,a),p.h==0&&(p.src=null,h[Te]=null)):Ss(a)}}}function Tn(a){return a in Oi?Oi[a]:Oi[a]="on"+a}function ou(a,h){if(a.da)a=!0;else{h=new wn(h,this);var p=a.listener,v=a.ha||a.src;a.fa&&ks(a),a=p.call(v,h)}return a}function Mi(a){return a=a[Te],a instanceof Li?a:null}var bs="__closure_events_fn_"+(1e9*Math.random()>>>0);function Zo(a){return typeof a=="function"?a:(a[bs]||(a[bs]=function(h){return a.handleEvent(h)}),a[bs])}function Re(){te.call(this),this.i=new Li(this),this.M=this,this.F=null}C(Re,te),Re.prototype[En]=!0,Re.prototype.removeEventListener=function(a,h,p,v){Vr(this,a,h,p,v)};function Me(a,h){var p,v=a.F;if(v)for(p=[];v;v=v.F)p.push(v);if(a=a.M,v=h.type||h,typeof h=="string")h=new _e(h,a);else if(h instanceof _e)h.target=h.target||a;else{var V=h;h=new _e(v,a),S(h,V)}if(V=!0,p)for(var U=p.length-1;0<=U;U--){var G=h.g=p[U];V=un(G,v,!0,h)&&V}if(G=h.g=a,V=un(G,v,!0,h)&&V,V=un(G,v,!1,h)&&V,p)for(U=0;U<p.length;U++)G=h.g=p[U],V=un(G,v,!1,h)&&V}Re.prototype.N=function(){if(Re.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var p=a.g[h],v=0;v<p.length;v++)Ss(p[v]);delete a.g[h],a.h--}}this.F=null},Re.prototype.K=function(a,h,p,v){return this.i.add(String(a),h,!1,p,v)},Re.prototype.L=function(a,h,p,v){return this.i.add(String(a),h,!0,p,v)};function un(a,h,p,v){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var V=!0,U=0;U<h.length;++U){var G=h[U];if(G&&!G.da&&G.capture==p){var Ae=G.listener,dt=G.ha||G.src;G.fa&&Xo(a.i,G),V=Ae.call(dt,v)!==!1&&V}}return V&&!v.defaultPrevented}function Rs(a,h,p){if(typeof a=="function")p&&(a=g(a,p));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function Vi(a){a.g=Rs(()=>{a.g=null,a.i&&(a.i=!1,Vi(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class Cs extends te{constructor(h,p){super(),this.m=h,this.l=p,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Vi(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function nr(a){te.call(this),this.h=a,this.g={}}C(nr,te);var rr=[];function Ui(a){D(a.g,function(h,p){this.g.hasOwnProperty(p)&&ks(h)},a),a.g={}}nr.prototype.N=function(){nr.aa.N.call(this),Ui(this)},nr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ur=l.JSON.stringify,au=l.JSON.parse,lu=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Ps(){}Ps.prototype.h=null;function Ns(a){return a.h||(a.h=a.i())}function Ds(){}var cn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function jn(){_e.call(this,"d")}C(jn,_e);function js(){_e.call(this,"c")}C(js,_e);var Ln={},ea=null;function Fi(){return ea=ea||new Re}Ln.La="serverreachability";function ta(a){_e.call(this,Ln.La,a)}C(ta,_e);function On(a){const h=Fi();Me(h,new ta(h))}Ln.STAT_EVENT="statevent";function zi(a,h){_e.call(this,Ln.STAT_EVENT,a),this.stat=h}C(zi,_e);function ke(a){const h=Fi();Me(h,new zi(h,a))}Ln.Ma="timingevent";function ir(a,h){_e.call(this,Ln.Ma,a),this.size=h}C(ir,_e);function sr(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function or(){this.g=!0}or.prototype.xa=function(){this.g=!1};function Xd(a,h,p,v,V,U){a.info(function(){if(a.g)if(U)for(var G="",Ae=U.split("&"),dt=0;dt<Ae.length;dt++){var ye=Ae[dt].split("=");if(1<ye.length){var _t=ye[0];ye=ye[1];var wt=_t.split("_");G=2<=wt.length&&wt[1]=="type"?G+(_t+"="+ye+"&"):G+(_t+"=redacted&")}}else G=null;else G=U;return"XMLHTTP REQ ("+v+") [attempt "+V+"]: "+h+`
`+p+`
`+G})}function uu(a,h,p,v,V,U,G){a.info(function(){return"XMLHTTP RESP ("+v+") [ attempt "+V+"]: "+h+`
`+p+`
`+U+" "+G})}function Mn(a,h,p,v){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+na(a,p)+(v?" "+v:"")})}function cu(a,h){a.info(function(){return"TIMEOUT: "+h})}or.prototype.info=function(){};function na(a,h){if(!a.g)return h;if(!h)return null;try{var p=JSON.parse(h);if(p){for(a=0;a<p.length;a++)if(Array.isArray(p[a])){var v=p[a];if(!(2>v.length)){var V=v[1];if(Array.isArray(V)&&!(1>V.length)){var U=V[0];if(U!="noop"&&U!="stop"&&U!="close")for(var G=1;G<V.length;G++)V[G]=""}}}}return Ur(p)}catch{return h}}var Ls={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Fr={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ra;function Os(){}C(Os,Ps),Os.prototype.g=function(){return new XMLHttpRequest},Os.prototype.i=function(){return{}},ra=new Os;function we(a,h,p,v){this.j=a,this.i=h,this.l=p,this.R=v||1,this.U=new nr(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ar}function ar(){this.i=null,this.g="",this.h=!1}var du={},Ms={};function $i(a,h,p){a.L=1,a.v=qi(Ft(h)),a.m=p,a.P=!0,ia(a,null)}function ia(a,h){a.F=Date.now(),Vs(a),a.A=Ft(a.v);var p=a.A,v=a.R;Array.isArray(v)||(v=[String(v)]),J(p.i,"t",v),a.C=0,p=a.j.J,a.h=new ar,a.g=Zg(a.j,p?h:null,!a.m),0<a.O&&(a.M=new Cs(g(a.Y,a,a.g),a.O)),h=a.U,p=a.g,v=a.ca;var V="readystatechange";Array.isArray(V)||(V&&(rr[0]=V.toString()),V=rr);for(var U=0;U<V.length;U++){var G=Se(p,V[U],v||h.handleEvent,!1,h.h||h);if(!G)break;h.g[G.key]=G}h=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),On(),Xd(a.i,a.u,a.A,a.l,a.R,a.m)}we.prototype.ca=function(a){a=a.target;const h=this.M;h&&hr(a)==3?h.j():this.Y(a)},we.prototype.Y=function(a){try{if(a==this.g)e:{const wt=hr(this.g);var h=this.g.Ba();const Hs=this.g.Z();if(!(3>wt)&&(wt!=3||this.g&&(this.h.h||this.g.oa()||$g(this.g)))){this.J||wt!=4||h==7||(h==8||0>=Hs?On(3):On(2)),oa(this);var p=this.g.Z();this.X=p;t:if(sa(this)){var v=$g(this.g);a="";var V=v.length,U=hr(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Vn(this),Ut(this);var G="";break t}this.h.i=new l.TextDecoder}for(h=0;h<V;h++)this.h.h=!0,a+=this.h.i.decode(v[h],{stream:!(U&&h==V-1)});v.length=0,this.h.g+=a,this.C=0,G=this.h.g}else G=this.g.oa();if(this.o=p==200,uu(this.i,this.u,this.A,this.l,this.R,wt,p),this.o){if(this.T&&!this.K){t:{if(this.g){var Ae,dt=this.g;if((Ae=dt.g?dt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(Ae)){var ye=Ae;break t}}ye=null}if(p=ye)Mn(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,zr(this,p);else{this.o=!1,this.s=3,ke(12),Vn(this),Ut(this);break e}}if(this.P){p=!0;let In;for(;!this.J&&this.C<G.length;)if(In=Jd(this,G),In==Ms){wt==4&&(this.s=4,ke(14),p=!1),Mn(this.i,this.l,null,"[Incomplete Response]");break}else if(In==du){this.s=4,ke(15),Mn(this.i,this.l,G,"[Invalid Chunk]"),p=!1;break}else Mn(this.i,this.l,In,null),zr(this,In);if(sa(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),wt!=4||G.length!=0||this.h.h||(this.s=1,ke(16),p=!1),this.o=this.o&&p,!p)Mn(this.i,this.l,G,"[Invalid Chunked Response]"),Vn(this),Ut(this);else if(0<G.length&&!this.W){this.W=!0;var _t=this.j;_t.g==this&&_t.ba&&!_t.M&&(_t.j.info("Great, no buffering proxy detected. Bytes received: "+G.length),rh(_t),_t.M=!0,ke(11))}}else Mn(this.i,this.l,G,null),zr(this,G);wt==4&&Vn(this),this.o&&!this.J&&(wt==4?Qg(this.j,this):(this.o=!1,Vs(this)))}else nI(this.g),p==400&&0<G.indexOf("Unknown SID")?(this.s=3,ke(12)):(this.s=0,ke(13)),Vn(this),Ut(this)}}}catch{}finally{}};function sa(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function Jd(a,h){var p=a.C,v=h.indexOf(`
`,p);return v==-1?Ms:(p=Number(h.substring(p,v)),isNaN(p)?du:(v+=1,v+p>h.length?Ms:(h=h.slice(v,v+p),a.C=v+p,h)))}we.prototype.cancel=function(){this.J=!0,Vn(this)};function Vs(a){a.S=Date.now()+a.I,hu(a,a.I)}function hu(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=sr(g(a.ba,a),h)}function oa(a){a.B&&(l.clearTimeout(a.B),a.B=null)}we.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(cu(this.i,this.A),this.L!=2&&(On(),ke(17)),Vn(this),this.s=2,Ut(this)):hu(this,this.S-a)};function Ut(a){a.j.G==0||a.J||Qg(a.j,a)}function Vn(a){oa(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,Ui(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function zr(a,h){try{var p=a.j;if(p.G!=0&&(p.g==a||la(p.h,a))){if(!a.K&&la(p.h,a)&&p.G==3){try{var v=p.Da.g.parse(h)}catch{v=null}if(Array.isArray(v)&&v.length==3){var V=v;if(V[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<a.F)_u(p),yu(p);else break e;nh(p),ke(18)}}else p.za=V[1],0<p.za-p.T&&37500>V[2]&&p.F&&p.v==0&&!p.C&&(p.C=sr(g(p.Za,p),6e3));if(1>=aa(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else Qi(p,11)}else if((a.K||p.g==a)&&_u(p),!_(h))for(V=p.Da.g.parse(h),h=0;h<V.length;h++){let ye=V[h];if(p.T=ye[0],ye=ye[1],p.G==2)if(ye[0]=="c"){p.K=ye[1],p.ia=ye[2];const _t=ye[3];_t!=null&&(p.la=_t,p.j.info("VER="+p.la));const wt=ye[4];wt!=null&&(p.Aa=wt,p.j.info("SVER="+p.Aa));const Hs=ye[5];Hs!=null&&typeof Hs=="number"&&0<Hs&&(v=1.5*Hs,p.L=v,p.j.info("backChannelRequestTimeoutMs_="+v)),v=p;const In=a.g;if(In){const xu=In.g?In.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(xu){var U=v.h;U.g||xu.indexOf("spdy")==-1&&xu.indexOf("quic")==-1&&xu.indexOf("h2")==-1||(U.j=U.l,U.g=new Set,U.h&&(Us(U,U.h),U.h=null))}if(v.D){const ih=In.g?In.g.getResponseHeader("X-HTTP-Session-Id"):null;ih&&(v.ya=ih,Ie(v.I,v.D,ih))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-a.F,p.j.info("Handshake RTT: "+p.R+"ms")),v=p;var G=a;if(v.qa=Jg(v,v.J?v.ia:null,v.W),G.K){ua(v.h,G);var Ae=G,dt=v.L;dt&&(Ae.I=dt),Ae.B&&(oa(Ae),Vs(Ae)),v.g=G}else Gg(v);0<p.i.length&&vu(p)}else ye[0]!="stop"&&ye[0]!="close"||Qi(p,7);else p.G==3&&(ye[0]=="stop"||ye[0]=="close"?ye[0]=="stop"?Qi(p,7):th(p):ye[0]!="noop"&&p.l&&p.l.ta(ye),p.v=0)}}On(4)}catch{}}var lr=class{constructor(a,h){this.g=a,this.map=h}};function fu(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Bi(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function aa(a){return a.h?1:a.g?a.g.size:0}function la(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function Us(a,h){a.g?a.g.add(h):a.h=h}function ua(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}fu.prototype.cancel=function(){if(this.i=Hi(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Hi(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const p of a.g.values())h=h.concat(p.D);return h}return b(a.i)}function ca(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var h=[],p=a.length,v=0;v<p;v++)h.push(a[v]);return h}h=[],p=0;for(v in a)h[p++]=a[v];return h}function Fs(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var h=[];a=a.length;for(var p=0;p<a;p++)h.push(p);return h}h=[],p=0;for(const v in a)h[p++]=v;return h}}}function ur(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var p=Fs(a),v=ca(a),V=v.length,U=0;U<V;U++)h.call(void 0,v[U],p&&p[U],a)}var $r=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function dn(a,h){if(a){a=a.split("&");for(var p=0;p<a.length;p++){var v=a[p].indexOf("="),V=null;if(0<=v){var U=a[p].substring(0,v);V=a[p].substring(v+1)}else U=a[p];h(U,V?decodeURIComponent(V.replace(/\+/g," ")):"")}}}function cr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof cr){this.h=a.h,zs(this,a.j),this.o=a.o,this.g=a.g,Wi(this,a.s),this.l=a.l;var h=a.i,p=new w;p.i=h.i,h.g&&(p.g=new Map(h.g),p.h=h.h),dr(this,p),this.m=a.m}else a&&(h=String(a).match($r))?(this.h=!1,zs(this,h[1]||"",!0),this.o=Gi(h[2]||""),this.g=Gi(h[3]||"",!0),Wi(this,h[4]),this.l=Gi(h[5]||"",!0),dr(this,h[6]||"",!0),this.m=Gi(h[7]||"")):(this.h=!1,this.i=new w(null,this.h))}cr.prototype.toString=function(){var a=[],h=this.j;h&&a.push(Br(h,pu,!0),":");var p=this.g;return(p||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Br(h,pu,!0),"@"),a.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&a.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&a.push("/"),a.push(Br(p,p.charAt(0)=="/"?$s:mu,!0))),(p=this.i.toString())&&a.push("?",p),(p=this.m)&&a.push("#",Br(p,B)),a.join("")};function Ft(a){return new cr(a)}function zs(a,h,p){a.j=p?Gi(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Wi(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function dr(a,h,p){h instanceof w?(a.i=h,ue(a.i,a.h)):(p||(h=Br(h,da)),a.i=new w(h,a.h))}function Ie(a,h,p){a.i.set(h,p)}function qi(a){return Ie(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Gi(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Br(a,h,p){return typeof a=="string"?(a=encodeURI(a).replace(h,Zd),p&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Zd(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var pu=/[#\/\?@]/g,mu=/[#\?:]/g,$s=/[#\?]/g,da=/[#\?@]/g,B=/#/g;function w(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function j(a){a.g||(a.g=new Map,a.h=0,a.i&&dn(a.i,function(h,p){a.add(decodeURIComponent(h.replace(/\+/g," ")),p)}))}t=w.prototype,t.add=function(a,h){j(this),this.i=null,a=se(this,a);var p=this.g.get(a);return p||this.g.set(a,p=[]),p.push(h),this.h+=1,this};function z(a,h){j(a),h=se(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function W(a,h){return j(a),h=se(a,h),a.g.has(h)}t.forEach=function(a,h){j(this),this.g.forEach(function(p,v){p.forEach(function(V){a.call(h,V,v,this)},this)},this)},t.na=function(){j(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),p=[];for(let v=0;v<h.length;v++){const V=a[v];for(let U=0;U<V.length;U++)p.push(h[v])}return p},t.V=function(a){j(this);let h=[];if(typeof a=="string")W(this,a)&&(h=h.concat(this.g.get(se(this,a))));else{a=Array.from(this.g.values());for(let p=0;p<a.length;p++)h=h.concat(a[p])}return h},t.set=function(a,h){return j(this),this.i=null,a=se(this,a),W(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function J(a,h,p){z(a,h),0<p.length&&(a.i=null,a.g.set(se(a,h),b(p)),a.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var p=0;p<h.length;p++){var v=h[p];const U=encodeURIComponent(String(v)),G=this.V(v);for(v=0;v<G.length;v++){var V=U;G[v]!==""&&(V+="="+encodeURIComponent(String(G[v]))),a.push(V)}}return this.i=a.join("&")};function se(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function ue(a,h){h&&!a.j&&(j(a),a.i=null,a.g.forEach(function(p,v){var V=v.toLowerCase();v!=V&&(z(this,v),J(this,V,p))},a)),a.j=h}function je(a,h){const p=new or;if(l.Image){const v=new Image;v.onload=I(Be,p,"TestLoadImage: loaded",!0,h,v),v.onerror=I(Be,p,"TestLoadImage: error",!1,h,v),v.onabort=I(Be,p,"TestLoadImage: abort",!1,h,v),v.ontimeout=I(Be,p,"TestLoadImage: timeout",!1,h,v),l.setTimeout(function(){v.ontimeout&&v.ontimeout()},1e4),v.src=a}else h(!1)}function zt(a,h){const p=new or,v=new AbortController,V=setTimeout(()=>{v.abort(),Be(p,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:v.signal}).then(U=>{clearTimeout(V),U.ok?Be(p,"TestPingServer: ok",!0,h):Be(p,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(V),Be(p,"TestPingServer: error",!1,h)})}function Be(a,h,p,v,V){try{V&&(V.onload=null,V.onerror=null,V.onabort=null,V.ontimeout=null),v(p)}catch{}}function Hr(){this.g=new lu}function ha(a,h,p){const v=p||"";try{ur(a,function(V,U){let G=V;d(V)&&(G=Ur(V)),h.push(v+U+"="+encodeURIComponent(G))})}catch(V){throw h.push(v+"type="+encodeURIComponent("_badmap")),V}}function Xe(a){this.l=a.Ub||null,this.j=a.eb||!1}C(Xe,Ps),Xe.prototype.g=function(){return new Ki(this.l,this.j)},Xe.prototype.i=function(a){return function(){return a}}({});function Ki(a,h){Re.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(Ki,Re),t=Ki.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,pa(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,fa(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,pa(this)),this.g&&(this.readyState=3,pa(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Og(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Og(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?fa(this):pa(this),this.readyState==3&&Og(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,fa(this))},t.Qa=function(a){this.g&&(this.response=a,fa(this))},t.ga=function(){this.g&&fa(this)};function fa(a){a.readyState=4,a.l=null,a.j=null,a.v=null,pa(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var p=h.next();!p.done;)p=p.value,a.push(p[0]+": "+p[1]),p=h.next();return a.join(`\r
`)};function pa(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Ki.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Mg(a){let h="";return D(a,function(p,v){h+=v,h+=":",h+=p,h+=`\r
`}),h}function eh(a,h,p){e:{for(v in p){var v=!1;break e}v=!0}v||(p=Mg(p),typeof a=="string"?p!=null&&encodeURIComponent(String(p)):Ie(a,h,p))}function He(a){Re.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(He,Re);var eI=/^https?$/i,tI=["POST","PUT"];t=He.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,p,v){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ra.g(),this.v=this.o?Ns(this.o):Ns(ra),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(U){Vg(this,U);return}if(a=p||"",p=new Map(this.headers),v)if(Object.getPrototypeOf(v)===Object.prototype)for(var V in v)p.set(V,v[V]);else if(typeof v.keys=="function"&&typeof v.get=="function")for(const U of v.keys())p.set(U,v.get(U));else throw Error("Unknown input type for opt_headers: "+String(v));v=Array.from(p.keys()).find(U=>U.toLowerCase()=="content-type"),V=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(tI,h,void 0))||v||V||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[U,G]of p)this.g.setRequestHeader(U,G);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{zg(this),this.u=!0,this.g.send(a),this.u=!1}catch(U){Vg(this,U)}};function Vg(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,Ug(a),gu(a)}function Ug(a){a.A||(a.A=!0,Me(a,"complete"),Me(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,Me(this,"complete"),Me(this,"abort"),gu(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),gu(this,!0)),He.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Fg(this):this.bb())},t.bb=function(){Fg(this)};function Fg(a){if(a.h&&typeof o<"u"&&(!a.v[1]||hr(a)!=4||a.Z()!=2)){if(a.u&&hr(a)==4)Rs(a.Ea,0,a);else if(Me(a,"readystatechange"),hr(a)==4){a.h=!1;try{const G=a.Z();e:switch(G){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var p;if(!(p=h)){var v;if(v=G===0){var V=String(a.D).match($r)[1]||null;!V&&l.self&&l.self.location&&(V=l.self.location.protocol.slice(0,-1)),v=!eI.test(V?V.toLowerCase():"")}p=v}if(p)Me(a,"complete"),Me(a,"success");else{a.m=6;try{var U=2<hr(a)?a.g.statusText:""}catch{U=""}a.l=U+" ["+a.Z()+"]",Ug(a)}}finally{gu(a)}}}}function gu(a,h){if(a.g){zg(a);const p=a.g,v=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||Me(a,"ready");try{p.onreadystatechange=v}catch{}}}function zg(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function hr(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<hr(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),au(h)}};function $g(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function nI(a){const h={};a=(a.g&&2<=hr(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let v=0;v<a.length;v++){if(_(a[v]))continue;var p=N(a[v]);const V=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const U=h[V]||[];h[V]=U,U.push(p)}T(h,function(v){return v.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ma(a,h,p){return p&&p.internalChannelParams&&p.internalChannelParams[a]||h}function Bg(a){this.Aa=0,this.i=[],this.j=new or,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ma("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ma("baseRetryDelayMs",5e3,a),this.cb=ma("retryDelaySeedMs",1e4,a),this.Wa=ma("forwardChannelMaxRetries",2,a),this.wa=ma("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new fu(a&&a.concurrentRequestLimit),this.Da=new Hr,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Bg.prototype,t.la=8,t.G=1,t.connect=function(a,h,p,v){ke(0),this.W=a,this.H=h||{},p&&v!==void 0&&(this.H.OSID=p,this.H.OAID=v),this.F=this.X,this.I=Jg(this,null,this.W),vu(this)};function th(a){if(Hg(a),a.G==3){var h=a.U++,p=Ft(a.I);if(Ie(p,"SID",a.K),Ie(p,"RID",h),Ie(p,"TYPE","terminate"),ga(a,p),h=new we(a,a.j,h),h.L=2,h.v=qi(Ft(p)),p=!1,l.navigator&&l.navigator.sendBeacon)try{p=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!p&&l.Image&&(new Image().src=h.v,p=!0),p||(h.g=Zg(h.j,null),h.g.ea(h.v)),h.F=Date.now(),Vs(h)}Xg(a)}function yu(a){a.g&&(rh(a),a.g.cancel(),a.g=null)}function Hg(a){yu(a),a.u&&(l.clearTimeout(a.u),a.u=null),_u(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function vu(a){if(!Bi(a.h)&&!a.s){a.s=!0;var h=a.Ga;ct||K(),q||(ct(),q=!0),Z.add(h,a),a.B=0}}function rI(a,h){return aa(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=sr(g(a.Ga,a,h),Yg(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const V=new we(this,this.j,a);let U=this.o;if(this.S&&(U?(U=y(U),S(U,this.S)):U=this.S),this.m!==null||this.O||(V.H=U,U=null),this.P)e:{for(var h=0,p=0;p<this.i.length;p++){t:{var v=this.i[p];if("__data__"in v.map&&(v=v.map.__data__,typeof v=="string")){v=v.length;break t}v=void 0}if(v===void 0)break;if(h+=v,4096<h){h=p;break e}if(h===4096||p===this.i.length-1){h=p+1;break e}}h=1e3}else h=1e3;h=qg(this,V,h),p=Ft(this.I),Ie(p,"RID",a),Ie(p,"CVER",22),this.D&&Ie(p,"X-HTTP-Session-Id",this.D),ga(this,p),U&&(this.O?h="headers="+encodeURIComponent(String(Mg(U)))+"&"+h:this.m&&eh(p,this.m,U)),Us(this.h,V),this.Ua&&Ie(p,"TYPE","init"),this.P?(Ie(p,"$req",h),Ie(p,"SID","null"),V.T=!0,$i(V,p,null)):$i(V,p,h),this.G=2}}else this.G==3&&(a?Wg(this,a):this.i.length==0||Bi(this.h)||Wg(this))};function Wg(a,h){var p;h?p=h.l:p=a.U++;const v=Ft(a.I);Ie(v,"SID",a.K),Ie(v,"RID",p),Ie(v,"AID",a.T),ga(a,v),a.m&&a.o&&eh(v,a.m,a.o),p=new we(a,a.j,p,a.B+1),a.m===null&&(p.H=a.o),h&&(a.i=h.D.concat(a.i)),h=qg(a,p,1e3),p.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Us(a.h,p),$i(p,v,h)}function ga(a,h){a.H&&D(a.H,function(p,v){Ie(h,v,p)}),a.l&&ur({},function(p,v){Ie(h,v,p)})}function qg(a,h,p){p=Math.min(a.i.length,p);var v=a.l?g(a.l.Na,a.l,a):null;e:{var V=a.i;let U=-1;for(;;){const G=["count="+p];U==-1?0<p?(U=V[0].g,G.push("ofs="+U)):U=0:G.push("ofs="+U);let Ae=!0;for(let dt=0;dt<p;dt++){let ye=V[dt].g;const _t=V[dt].map;if(ye-=U,0>ye)U=Math.max(0,V[dt].g-100),Ae=!1;else try{ha(_t,G,"req"+ye+"_")}catch{v&&v(_t)}}if(Ae){v=G.join("&");break e}}}return a=a.i.splice(0,p),h.D=a,v}function Gg(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;ct||K(),q||(ct(),q=!0),Z.add(h,a),a.v=0}}function nh(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=sr(g(a.Fa,a),Yg(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Kg(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=sr(g(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ke(10),yu(this),Kg(this))};function rh(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Kg(a){a.g=new we(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=Ft(a.qa);Ie(h,"RID","rpc"),Ie(h,"SID",a.K),Ie(h,"AID",a.T),Ie(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&Ie(h,"TO",a.ja),Ie(h,"TYPE","xmlhttp"),ga(a,h),a.m&&a.o&&eh(h,a.m,a.o),a.L&&(a.g.I=a.L);var p=a.g;a=a.ia,p.L=1,p.v=qi(Ft(h)),p.m=null,p.P=!0,ia(p,a)}t.Za=function(){this.C!=null&&(this.C=null,yu(this),nh(this),ke(19))};function _u(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Qg(a,h){var p=null;if(a.g==h){_u(a),rh(a),a.g=null;var v=2}else if(la(a.h,h))p=h.D,ua(a.h,h),v=1;else return;if(a.G!=0){if(h.o)if(v==1){p=h.m?h.m.length:0,h=Date.now()-h.F;var V=a.B;v=Fi(),Me(v,new ir(v,p)),vu(a)}else Gg(a);else if(V=h.s,V==3||V==0&&0<h.X||!(v==1&&rI(a,h)||v==2&&nh(a)))switch(p&&0<p.length&&(h=a.h,h.i=h.i.concat(p)),V){case 1:Qi(a,5);break;case 4:Qi(a,10);break;case 3:Qi(a,6);break;default:Qi(a,2)}}}function Yg(a,h){let p=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(p*=2),p*h}function Qi(a,h){if(a.j.info("Error code "+h),h==2){var p=g(a.fb,a),v=a.Xa;const V=!v;v=new cr(v||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||zs(v,"https"),qi(v),V?je(v.toString(),p):zt(v.toString(),p)}else ke(2);a.G=0,a.l&&a.l.sa(h),Xg(a),Hg(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),ke(2)):(this.j.info("Failed to ping google.com"),ke(1))};function Xg(a){if(a.G=0,a.ka=[],a.l){const h=Hi(a.h);(h.length!=0||a.i.length!=0)&&(P(a.ka,h),P(a.ka,a.i),a.h.i.length=0,b(a.i),a.i.length=0),a.l.ra()}}function Jg(a,h,p){var v=p instanceof cr?Ft(p):new cr(p);if(v.g!="")h&&(v.g=h+"."+v.g),Wi(v,v.s);else{var V=l.location;v=V.protocol,h=h?h+"."+V.hostname:V.hostname,V=+V.port;var U=new cr(null);v&&zs(U,v),h&&(U.g=h),V&&Wi(U,V),p&&(U.l=p),v=U}return p=a.D,h=a.ya,p&&h&&Ie(v,p,h),Ie(v,"VER",a.la),ga(a,v),v}function Zg(a,h,p){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new He(new Xe({eb:p})):new He(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function ey(){}t=ey.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function wu(){}wu.prototype.g=function(a,h){return new Yt(a,h)};function Yt(a,h){Re.call(this),this.g=new Bg(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!_(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!_(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new Bs(this)}C(Yt,Re),Yt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Yt.prototype.close=function(){th(this.g)},Yt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var p={};p.__data__=a,a=p}else this.u&&(p={},p.__data__=Ur(a),a=p);h.i.push(new lr(h.Ya++,a)),h.G==3&&vu(h)},Yt.prototype.N=function(){this.g.l=null,delete this.j,th(this.g),delete this.g,Yt.aa.N.call(this)};function ty(a){jn.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const p in h){a=p;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}C(ty,jn);function ny(){js.call(this),this.status=1}C(ny,js);function Bs(a){this.g=a}C(Bs,ey),Bs.prototype.ua=function(){Me(this.g,"a")},Bs.prototype.ta=function(a){Me(this.g,new ty(a))},Bs.prototype.sa=function(a){Me(this.g,new ny)},Bs.prototype.ra=function(){Me(this.g,"b")},wu.prototype.createWebChannel=wu.prototype.g,Yt.prototype.send=Yt.prototype.o,Yt.prototype.open=Yt.prototype.m,Yt.prototype.close=Yt.prototype.close,n1=function(){return new wu},t1=function(){return Fi()},e1=Ln,lp={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ls.NO_ERROR=0,Ls.TIMEOUT=8,Ls.HTTP_ERROR=6,uc=Ls,Fr.COMPLETE="complete",ZE=Fr,Ds.EventType=cn,cn.OPEN="a",cn.CLOSE="b",cn.ERROR="c",cn.MESSAGE="d",Re.prototype.listen=Re.prototype.K,Oa=Ds,He.prototype.listenOnce=He.prototype.L,He.prototype.getLastError=He.prototype.Ka,He.prototype.getLastErrorCode=He.prototype.Ba,He.prototype.getStatus=He.prototype.Z,He.prototype.getResponseJson=He.prototype.Oa,He.prototype.getResponseText=He.prototype.oa,He.prototype.send=He.prototype.ea,He.prototype.setWithCredentials=He.prototype.Ha,JE=He}).apply(typeof Fu<"u"?Fu:typeof self<"u"?self:typeof window<"u"?window:{});const e_="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}St.UNAUTHENTICATED=new St(null),St.GOOGLE_CREDENTIALS=new St("google-credentials-uid"),St.FIRST_PARTY=new St("first-party-uid"),St.MOCK_USER=new St("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wo="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gs=new Sm("@firebase/firestore");function Sa(){return gs.logLevel}function X(t,...e){if(gs.logLevel<=de.DEBUG){const n=e.map(Mm);gs.debug(`Firestore (${Wo}): ${t}`,...n)}}function Rr(t,...e){if(gs.logLevel<=de.ERROR){const n=e.map(Mm);gs.error(`Firestore (${Wo}): ${t}`,...n)}}function Po(t,...e){if(gs.logLevel<=de.WARN){const n=e.map(Mm);gs.warn(`Firestore (${Wo}): ${t}`,...n)}}function Mm(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function re(t="Unexpected state"){const e=`FIRESTORE (${Wo}) INTERNAL ASSERTION FAILED: `+t;throw Rr(e),new Error(e)}function Ee(t,e){t||re()}function ae(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Q extends Lr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r1{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class a2{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(St.UNAUTHENTICATED))}shutdown(){}}class l2{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class u2{constructor(e){this.t=e,this.currentUser=St.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Ee(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Er;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Er,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{X("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(X("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Er)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(X("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ee(typeof r.accessToken=="string"),new r1(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ee(e===null||typeof e=="string"),new St(e)}}class c2{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=St.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class d2{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new c2(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(St.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class h2{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class f2{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){Ee(this.o===void 0);const r=s=>{s.error!=null&&X("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,X("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{X("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):X("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ee(typeof n.token=="string"),this.R=n.token,new h2(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p2(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i1{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=p2(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ve(t,e){return t<e?-1:t>e?1:0}function No(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new Q(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Q(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new Q(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Q(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return st.fromMillis(Date.now())}static fromDate(e){return st.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new st(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ve(this.nanoseconds,e.nanoseconds):ve(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(e){this.timestamp=e}static fromTimestamp(e){return new oe(e)}static min(){return new oe(new st(0,0))}static max(){return new oe(new st(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{constructor(e,n,r){n===void 0?n=0:n>e.length&&re(),r===void 0?r=e.length-n:r>e.length-n&&re(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Tl.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Tl?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ne extends Tl{construct(e,n,r){return new Ne(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new Q(F.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Ne(n)}static emptyPath(){return new Ne([])}}const m2=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class pt extends Tl{construct(e,n,r){return new pt(e,n,r)}static isValidIdentifier(e){return m2.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),pt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new pt(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new Q(F.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new Q(F.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new Q(F.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new Q(F.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new pt(n)}static emptyPath(){return new pt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e){this.path=e}static fromPath(e){return new ee(Ne.fromString(e))}static fromName(e){return new ee(Ne.fromString(e).popFirst(5))}static empty(){return new ee(Ne.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ne.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ne.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ee(new Ne(e.slice()))}}function g2(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=oe.fromTimestamp(r===1e9?new st(n+1,0):new st(n,r));return new Si(i,ee.empty(),e)}function y2(t){return new Si(t.readTime,t.key,-1)}class Si{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Si(oe.min(),ee.empty(),-1)}static max(){return new Si(oe.max(),ee.empty(),-1)}}function v2(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ee.comparator(t.documentKey,e.documentKey),n!==0?n:ve(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _2="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class w2{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ql(t){if(t.code!==F.FAILED_PRECONDITION||t.message!==_2)throw t;X("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&re(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new $((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof $?n:$.resolve(n)}catch(n){return $.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):$.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):$.reject(n)}static resolve(e){return new $((n,r)=>{n(e)})}static reject(e){return new $((n,r)=>{r(e)})}static waitFor(e){return new $((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=$.resolve(!1);for(const r of e)n=n.next(i=>i?$.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new $((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const d=u;n(e[d]).next(f=>{o[d]=f,++l,l===s&&r(o)},f=>i(f))}})}static doWhile(e,n){return new $((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function x2(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Gl(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vm{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Vm.oe=-1;function Nd(t){return t==null}function Yc(t){return t===0&&1/t==-1/0}function E2(t){return typeof t=="number"&&Number.isInteger(t)&&!Yc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t_(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ts(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function s1(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e,n){this.comparator=e,this.root=n||ft.EMPTY}insert(e,n){return new $e(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ft.BLACK,null,null))}remove(e){return new $e(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ft.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new zu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new zu(this.root,e,this.comparator,!1)}getReverseIterator(){return new zu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new zu(this.root,e,this.comparator,!0)}}class zu{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ft{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??ft.RED,this.left=i??ft.EMPTY,this.right=s??ft.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new ft(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ft.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return ft.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ft.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ft.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw re();const e=this.left.check();if(e!==this.right.check())throw re();return e+(this.isRed()?0:1)}}ft.EMPTY=null,ft.RED=!0,ft.BLACK=!1;ft.EMPTY=new class{constructor(){this.size=0}get key(){throw re()}get value(){throw re()}get color(){throw re()}get left(){throw re()}get right(){throw re()}copy(e,n,r,i,s){return this}insert(e,n,r){return new ft(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e){this.comparator=e,this.data=new $e(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new n_(this.data.getIterator())}getIteratorFrom(e){return new n_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof gt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new gt(this.comparator);return n.data=e,n}}class n_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(e){this.fields=e,e.sort(pt.comparator)}static empty(){return new nn([])}unionWith(e){let n=new gt(pt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new nn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return No(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o1 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new o1("Invalid base64 string: "+s):s}}(e);return new vt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new vt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ve(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}vt.EMPTY_BYTE_STRING=new vt("");const T2=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ai(t){if(Ee(!!t),typeof t=="string"){let e=0;const n=T2.exec(t);if(Ee(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ke(t.seconds),nanos:Ke(t.nanos)}}function Ke(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ys(t){return typeof t=="string"?vt.fromBase64String(t):vt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Um(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Fm(t){const e=t.mapValue.fields.__previous_value__;return Um(e)?Fm(e):e}function Il(t){const e=Ai(t.mapValue.fields.__local_write_time__.timestampValue);return new st(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I2{constructor(e,n,r,i,s,o,l,u,d){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=d}}class Sl{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Sl("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Sl&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $u={mapValue:{}};function vs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Um(t)?4:A2(t)?9007199254740991:S2(t)?10:11:re()}function Yn(t,e){if(t===e)return!0;const n=vs(t);if(n!==vs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Il(t).isEqual(Il(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Ai(i.timestampValue),l=Ai(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return ys(i.bytesValue).isEqual(ys(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Ke(i.geoPointValue.latitude)===Ke(s.geoPointValue.latitude)&&Ke(i.geoPointValue.longitude)===Ke(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Ke(i.integerValue)===Ke(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Ke(i.doubleValue),l=Ke(s.doubleValue);return o===l?Yc(o)===Yc(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return No(t.arrayValue.values||[],e.arrayValue.values||[],Yn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(t_(o)!==t_(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!Yn(o[u],l[u])))return!1;return!0}(t,e);default:return re()}}function Al(t,e){return(t.values||[]).find(n=>Yn(n,e))!==void 0}function Do(t,e){if(t===e)return 0;const n=vs(t),r=vs(e);if(n!==r)return ve(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ve(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=Ke(s.integerValue||s.doubleValue),u=Ke(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return r_(t.timestampValue,e.timestampValue);case 4:return r_(Il(t),Il(e));case 5:return ve(t.stringValue,e.stringValue);case 6:return function(s,o){const l=ys(s),u=ys(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let d=0;d<l.length&&d<u.length;d++){const f=ve(l[d],u[d]);if(f!==0)return f}return ve(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=ve(Ke(s.latitude),Ke(o.latitude));return l!==0?l:ve(Ke(s.longitude),Ke(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return i_(t.arrayValue,e.arrayValue);case 10:return function(s,o){var l,u,d,f;const m=s.fields||{},g=o.fields||{},I=(l=m.value)===null||l===void 0?void 0:l.arrayValue,C=(u=g.value)===null||u===void 0?void 0:u.arrayValue,b=ve(((d=I==null?void 0:I.values)===null||d===void 0?void 0:d.length)||0,((f=C==null?void 0:C.values)===null||f===void 0?void 0:f.length)||0);return b!==0?b:i_(I,C)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===$u.mapValue&&o===$u.mapValue)return 0;if(s===$u.mapValue)return 1;if(o===$u.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),d=o.fields||{},f=Object.keys(d);u.sort(),f.sort();for(let m=0;m<u.length&&m<f.length;++m){const g=ve(u[m],f[m]);if(g!==0)return g;const I=Do(l[u[m]],d[f[m]]);if(I!==0)return I}return ve(u.length,f.length)}(t.mapValue,e.mapValue);default:throw re()}}function r_(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ve(t,e);const n=Ai(t),r=Ai(e),i=ve(n.seconds,r.seconds);return i!==0?i:ve(n.nanos,r.nanos)}function i_(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=Do(n[i],r[i]);if(s)return s}return ve(n.length,r.length)}function jo(t){return up(t)}function up(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Ai(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return ys(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ee.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=up(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${up(n.fields[o])}`;return i+"}"}(t.mapValue):re()}function s_(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function cp(t){return!!t&&"integerValue"in t}function zm(t){return!!t&&"arrayValue"in t}function o_(t){return!!t&&"nullValue"in t}function a_(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function cc(t){return!!t&&"mapValue"in t}function S2(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Xa(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ts(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Xa(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Xa(t.arrayValue.values[n]);return e}return Object.assign({},t)}function A2(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e){this.value=e}static empty(){return new Ht({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!cc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Xa(n)}setAll(e){let n=pt.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=Xa(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());cc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Yn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];cc(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Ts(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Ht(Xa(this.value))}}function a1(t){const e=[];return Ts(t.fields,(n,r)=>{const i=new pt([n]);if(cc(r)){const s=a1(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new nn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new kt(e,0,oe.min(),oe.min(),oe.min(),Ht.empty(),0)}static newFoundDocument(e,n,r,i){return new kt(e,1,n,oe.min(),r,i,0)}static newNoDocument(e,n){return new kt(e,2,n,oe.min(),oe.min(),Ht.empty(),0)}static newUnknownDocument(e,n){return new kt(e,3,n,oe.min(),oe.min(),Ht.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(oe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ht.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ht.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=oe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof kt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new kt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc{constructor(e,n){this.position=e,this.inclusive=n}}function l_(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=ee.comparator(ee.fromName(o.referenceValue),n.key):r=Do(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function u_(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Yn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl{constructor(e,n="asc"){this.field=e,this.dir=n}}function k2(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l1{}class et extends l1{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new R2(e,n,r):n==="array-contains"?new N2(e,r):n==="in"?new D2(e,r):n==="not-in"?new j2(e,r):n==="array-contains-any"?new L2(e,r):new et(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new C2(e,r):new P2(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Do(n,this.value)):n!==null&&vs(this.value)===vs(n)&&this.matchesComparison(Do(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return re()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Dn extends l1{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Dn(e,n)}matches(e){return u1(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function u1(t){return t.op==="and"}function c1(t){return b2(t)&&u1(t)}function b2(t){for(const e of t.filters)if(e instanceof Dn)return!1;return!0}function dp(t){if(t instanceof et)return t.field.canonicalString()+t.op.toString()+jo(t.value);if(c1(t))return t.filters.map(e=>dp(e)).join(",");{const e=t.filters.map(n=>dp(n)).join(",");return`${t.op}(${e})`}}function d1(t,e){return t instanceof et?function(r,i){return i instanceof et&&r.op===i.op&&r.field.isEqual(i.field)&&Yn(r.value,i.value)}(t,e):t instanceof Dn?function(r,i){return i instanceof Dn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&d1(o,i.filters[l]),!0):!1}(t,e):void re()}function h1(t){return t instanceof et?function(n){return`${n.field.canonicalString()} ${n.op} ${jo(n.value)}`}(t):t instanceof Dn?function(n){return n.op.toString()+" {"+n.getFilters().map(h1).join(" ,")+"}"}(t):"Filter"}class R2 extends et{constructor(e,n,r){super(e,n,r),this.key=ee.fromName(r.referenceValue)}matches(e){const n=ee.comparator(e.key,this.key);return this.matchesComparison(n)}}class C2 extends et{constructor(e,n){super(e,"in",n),this.keys=f1("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class P2 extends et{constructor(e,n){super(e,"not-in",n),this.keys=f1("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function f1(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>ee.fromName(r.referenceValue))}class N2 extends et{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return zm(n)&&Al(n.arrayValue,this.value)}}class D2 extends et{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Al(this.value.arrayValue,n)}}class j2 extends et{constructor(e,n){super(e,"not-in",n)}matches(e){if(Al(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Al(this.value.arrayValue,n)}}class L2 extends et{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!zm(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Al(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O2{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.ue=null}}function c_(t,e=null,n=[],r=[],i=null,s=null,o=null){return new O2(t,e,n,r,i,s,o)}function $m(t){const e=ae(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>dp(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Nd(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>jo(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>jo(r)).join(",")),e.ue=n}return e.ue}function Bm(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!k2(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!d1(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!u_(t.startAt,e.startAt)&&u_(t.endAt,e.endAt)}function hp(t){return ee.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function M2(t,e,n,r,i,s,o,l){return new qo(t,e,n,r,i,s,o,l)}function Dd(t){return new qo(t)}function d_(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function p1(t){return t.collectionGroup!==null}function Ja(t){const e=ae(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new gt(pt.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(d=>{d.isInequality()&&(l=l.add(d.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new kl(s,r))}),n.has(pt.keyField().canonicalString())||e.ce.push(new kl(pt.keyField(),r))}return e.ce}function Kn(t){const e=ae(t);return e.le||(e.le=V2(e,Ja(t))),e.le}function V2(t,e){if(t.limitType==="F")return c_(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new kl(i.field,s)});const n=t.endAt?new Xc(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Xc(t.startAt.position,t.startAt.inclusive):null;return c_(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function fp(t,e){const n=t.filters.concat([e]);return new qo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Jc(t,e,n){return new qo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function jd(t,e){return Bm(Kn(t),Kn(e))&&t.limitType===e.limitType}function m1(t){return`${$m(Kn(t))}|lt:${t.limitType}`}function qs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>h1(i)).join(", ")}]`),Nd(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>jo(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>jo(i)).join(",")),`Target(${r})`}(Kn(t))}; limitType=${t.limitType})`}function Ld(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):ee.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Ja(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const d=l_(o,l,u);return o.inclusive?d<=0:d<0}(r.startAt,Ja(r),i)||r.endAt&&!function(o,l,u){const d=l_(o,l,u);return o.inclusive?d>=0:d>0}(r.endAt,Ja(r),i))}(t,e)}function U2(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function g1(t){return(e,n)=>{let r=!1;for(const i of Ja(t)){const s=F2(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function F2(t,e,n){const r=t.field.isKeyField()?ee.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),d=l.data.field(s);return u!==null&&d!==null?Do(u,d):re()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return re()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Ts(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return s1(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z2=new $e(ee.comparator);function Cr(){return z2}const y1=new $e(ee.comparator);function Ma(...t){let e=y1;for(const n of t)e=e.insert(n.key,n);return e}function v1(t){let e=y1;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function is(){return Za()}function _1(){return Za()}function Za(){return new Go(t=>t.toString(),(t,e)=>t.isEqual(e))}const $2=new $e(ee.comparator),B2=new gt(ee.comparator);function ce(...t){let e=B2;for(const n of t)e=e.add(n);return e}const H2=new gt(ve);function W2(){return H2}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hm(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Yc(e)?"-0":e}}function w1(t){return{integerValue:""+t}}function x1(t,e){return E2(e)?w1(e):Hm(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od{constructor(){this._=void 0}}function q2(t,e,n){return t instanceof bl?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Um(s)&&(s=Fm(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof Rl?T1(t,e):t instanceof Cl?I1(t,e):function(i,s){const o=E1(i,s),l=h_(o)+h_(i.Pe);return cp(o)&&cp(i.Pe)?w1(l):Hm(i.serializer,l)}(t,e)}function G2(t,e,n){return t instanceof Rl?T1(t,e):t instanceof Cl?I1(t,e):n}function E1(t,e){return t instanceof Pl?function(r){return cp(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class bl extends Od{}class Rl extends Od{constructor(e){super(),this.elements=e}}function T1(t,e){const n=S1(e);for(const r of t.elements)n.some(i=>Yn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Cl extends Od{constructor(e){super(),this.elements=e}}function I1(t,e){let n=S1(e);for(const r of t.elements)n=n.filter(i=>!Yn(i,r));return{arrayValue:{values:n}}}class Pl extends Od{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function h_(t){return Ke(t.integerValue||t.doubleValue)}function S1(t){return zm(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A1{constructor(e,n){this.field=e,this.transform=n}}function K2(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Rl&&i instanceof Rl||r instanceof Cl&&i instanceof Cl?No(r.elements,i.elements,Yn):r instanceof Pl&&i instanceof Pl?Yn(r.Pe,i.Pe):r instanceof bl&&i instanceof bl}(t.transform,e.transform)}class Q2{constructor(e,n){this.version=e,this.transformResults=n}}class Lt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Lt}static exists(e){return new Lt(void 0,e)}static updateTime(e){return new Lt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function dc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Md{}function k1(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Vd(t.key,Lt.none()):new Kl(t.key,t.data,Lt.none());{const n=t.data,r=Ht.empty();let i=new gt(pt.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Di(t.key,r,new nn(i.toArray()),Lt.none())}}function Y2(t,e,n){t instanceof Kl?function(i,s,o){const l=i.value.clone(),u=p_(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Di?function(i,s,o){if(!dc(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=p_(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(b1(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function el(t,e,n,r){return t instanceof Kl?function(s,o,l,u){if(!dc(s.precondition,o))return l;const d=s.value.clone(),f=m_(s.fieldTransforms,u,o);return d.setAll(f),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),null}(t,e,n,r):t instanceof Di?function(s,o,l,u){if(!dc(s.precondition,o))return l;const d=m_(s.fieldTransforms,u,o),f=o.data;return f.setAll(b1(s)),f.setAll(d),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(s,o,l){return dc(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function X2(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=E1(r.transform,i||null);s!=null&&(n===null&&(n=Ht.empty()),n.set(r.field,s))}return n||null}function f_(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&No(r,i,(s,o)=>K2(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Kl extends Md{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Di extends Md{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function b1(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function p_(t,e,n){const r=new Map;Ee(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,G2(o,l,n[i]))}return r}function m_(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,q2(s,o,e))}return r}class Vd extends Md{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class J2 extends Md{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z2{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&Y2(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=el(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=el(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=_1();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=k1(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(oe.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ce())}isEqual(e){return this.batchId===e.batchId&&No(this.mutations,e.mutations,(n,r)=>f_(n,r))&&No(this.baseMutations,e.baseMutations,(n,r)=>f_(n,r))}}class Wm{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Ee(e.mutations.length===r.length);let i=function(){return $2}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Wm(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eN{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tN{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Je,pe;function nN(t){switch(t){default:return re();case F.CANCELLED:case F.UNKNOWN:case F.DEADLINE_EXCEEDED:case F.RESOURCE_EXHAUSTED:case F.INTERNAL:case F.UNAVAILABLE:case F.UNAUTHENTICATED:return!1;case F.INVALID_ARGUMENT:case F.NOT_FOUND:case F.ALREADY_EXISTS:case F.PERMISSION_DENIED:case F.FAILED_PRECONDITION:case F.ABORTED:case F.OUT_OF_RANGE:case F.UNIMPLEMENTED:case F.DATA_LOSS:return!0}}function R1(t){if(t===void 0)return Rr("GRPC error has no .code"),F.UNKNOWN;switch(t){case Je.OK:return F.OK;case Je.CANCELLED:return F.CANCELLED;case Je.UNKNOWN:return F.UNKNOWN;case Je.DEADLINE_EXCEEDED:return F.DEADLINE_EXCEEDED;case Je.RESOURCE_EXHAUSTED:return F.RESOURCE_EXHAUSTED;case Je.INTERNAL:return F.INTERNAL;case Je.UNAVAILABLE:return F.UNAVAILABLE;case Je.UNAUTHENTICATED:return F.UNAUTHENTICATED;case Je.INVALID_ARGUMENT:return F.INVALID_ARGUMENT;case Je.NOT_FOUND:return F.NOT_FOUND;case Je.ALREADY_EXISTS:return F.ALREADY_EXISTS;case Je.PERMISSION_DENIED:return F.PERMISSION_DENIED;case Je.FAILED_PRECONDITION:return F.FAILED_PRECONDITION;case Je.ABORTED:return F.ABORTED;case Je.OUT_OF_RANGE:return F.OUT_OF_RANGE;case Je.UNIMPLEMENTED:return F.UNIMPLEMENTED;case Je.DATA_LOSS:return F.DATA_LOSS;default:return re()}}(pe=Je||(Je={}))[pe.OK=0]="OK",pe[pe.CANCELLED=1]="CANCELLED",pe[pe.UNKNOWN=2]="UNKNOWN",pe[pe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",pe[pe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",pe[pe.NOT_FOUND=5]="NOT_FOUND",pe[pe.ALREADY_EXISTS=6]="ALREADY_EXISTS",pe[pe.PERMISSION_DENIED=7]="PERMISSION_DENIED",pe[pe.UNAUTHENTICATED=16]="UNAUTHENTICATED",pe[pe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",pe[pe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",pe[pe.ABORTED=10]="ABORTED",pe[pe.OUT_OF_RANGE=11]="OUT_OF_RANGE",pe[pe.UNIMPLEMENTED=12]="UNIMPLEMENTED",pe[pe.INTERNAL=13]="INTERNAL",pe[pe.UNAVAILABLE=14]="UNAVAILABLE",pe[pe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rN(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iN=new as([4294967295,4294967295],0);function g_(t){const e=rN().encode(t),n=new XE;return n.update(e),new Uint8Array(n.digest())}function y_(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new as([n,r],0),new as([i,s],0)]}class qm{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Va(`Invalid padding: ${n}`);if(r<0)throw new Va(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Va(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Va(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=as.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(as.fromNumber(r)));return i.compare(iN)===1&&(i=new as([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=g_(e),[r,i]=y_(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new qm(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=g_(e),[r,i]=y_(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Va extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ud{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Ql.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Ud(oe.min(),i,new $e(ve),Cr(),ce())}}class Ql{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ql(r,n,ce(),ce(),ce())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class C1{constructor(e,n){this.targetId=e,this.me=n}}class P1{constructor(e,n,r=vt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class v_{constructor(){this.fe=0,this.ge=w_(),this.pe=vt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ce(),n=ce(),r=ce();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:re()}}),new Ql(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=w_()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Ee(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class sN{constructor(e){this.Le=e,this.Be=new Map,this.ke=Cr(),this.qe=__(),this.Qe=new $e(ve)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:re()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(hp(s))if(r===0){const o=new ee(s.path);this.Ue(n,o,kt.newNoDocument(o,oe.min()))}else Ee(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),u=l?this.Xe(l,e,o):1;if(u!==0){this.je(n);const d=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,d)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=ys(r).toUint8Array()}catch(u){if(u instanceof o1)return Po("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new qm(o,i,s)}catch(u){return Po(u instanceof Va?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const l=this.Je(o);if(l){if(s.current&&hp(l.target)){const u=new ee(l.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,kt.newNoDocument(u,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=ce();this.qe.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const d=this.Je(u);return!d||d.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new Ud(e,n,this.Qe,this.ke,r);return this.ke=Cr(),this.qe=__(),this.Qe=new $e(ve),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new v_,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new gt(ve),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||X("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new v_),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function __(){return new $e(ee.comparator)}function w_(){return new $e(ee.comparator)}const oN={asc:"ASCENDING",desc:"DESCENDING"},aN={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},lN={and:"AND",or:"OR"};class uN{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function pp(t,e){return t.useProto3Json||Nd(e)?e:{value:e}}function Zc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function N1(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function cN(t,e){return Zc(t,e.toTimestamp())}function Qn(t){return Ee(!!t),oe.fromTimestamp(function(n){const r=Ai(n);return new st(r.seconds,r.nanos)}(t))}function Gm(t,e){return mp(t,e).canonicalString()}function mp(t,e){const n=function(i){return new Ne(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function D1(t){const e=Ne.fromString(t);return Ee(V1(e)),e}function gp(t,e){return Gm(t.databaseId,e.path)}function Uh(t,e){const n=D1(e);if(n.get(1)!==t.databaseId.projectId)throw new Q(F.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Q(F.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ee(L1(n))}function j1(t,e){return Gm(t.databaseId,e)}function dN(t){const e=D1(t);return e.length===4?Ne.emptyPath():L1(e)}function yp(t){return new Ne(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function L1(t){return Ee(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function x_(t,e,n){return{name:gp(t,e),fields:n.value.mapValue.fields}}function hN(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:re()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(d,f){return d.useProto3Json?(Ee(f===void 0||typeof f=="string"),vt.fromBase64String(f||"")):(Ee(f===void 0||f instanceof Buffer||f instanceof Uint8Array),vt.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(d){const f=d.code===void 0?F.UNKNOWN:R1(d.code);return new Q(f,d.message||"")}(o);n=new P1(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Uh(t,r.document.name),s=Qn(r.document.updateTime),o=r.document.createTime?Qn(r.document.createTime):oe.min(),l=new Ht({mapValue:{fields:r.document.fields}}),u=kt.newFoundDocument(i,s,o,l),d=r.targetIds||[],f=r.removedTargetIds||[];n=new hc(d,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Uh(t,r.document),s=r.readTime?Qn(r.readTime):oe.min(),o=kt.newNoDocument(i,s),l=r.removedTargetIds||[];n=new hc([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Uh(t,r.document),s=r.removedTargetIds||[];n=new hc([],s,i,null)}else{if(!("filter"in e))return re();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new tN(i,s),l=r.targetId;n=new C1(l,o)}}return n}function fN(t,e){let n;if(e instanceof Kl)n={update:x_(t,e.key,e.value)};else if(e instanceof Vd)n={delete:gp(t,e.key)};else if(e instanceof Di)n={update:x_(t,e.key,e.data),updateMask:EN(e.fieldMask)};else{if(!(e instanceof J2))return re();n={verify:gp(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof bl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Rl)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Cl)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Pl)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw re()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:cN(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:re()}(t,e.precondition)),n}function pN(t,e){return t&&t.length>0?(Ee(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?Qn(i.updateTime):Qn(s);return o.isEqual(oe.min())&&(o=Qn(s)),new Q2(o,i.transformResults||[])}(n,e))):[]}function mN(t,e){return{documents:[j1(t,e.path)]}}function gN(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=j1(t,i);const s=function(d){if(d.length!==0)return M1(Dn.create(d,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(d){if(d.length!==0)return d.map(f=>function(g){return{field:Gs(g.field),direction:_N(g.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=pp(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{_t:n,parent:i}}function yN(t){let e=dN(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Ee(r===1);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];n.where&&(s=function(m){const g=O1(m);return g instanceof Dn&&c1(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(m){return m.map(g=>function(C){return new kl(Ks(C.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(m){let g;return g=typeof m=="object"?m.value:m,Nd(g)?null:g}(n.limit));let u=null;n.startAt&&(u=function(m){const g=!!m.before,I=m.values||[];return new Xc(I,g)}(n.startAt));let d=null;return n.endAt&&(d=function(m){const g=!m.before,I=m.values||[];return new Xc(I,g)}(n.endAt)),M2(e,i,o,s,l,"F",u,d)}function vN(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return re()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function O1(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ks(n.unaryFilter.field);return et.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Ks(n.unaryFilter.field);return et.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Ks(n.unaryFilter.field);return et.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ks(n.unaryFilter.field);return et.create(o,"!=",{nullValue:"NULL_VALUE"});default:return re()}}(t):t.fieldFilter!==void 0?function(n){return et.create(Ks(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return re()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Dn.create(n.compositeFilter.filters.map(r=>O1(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return re()}}(n.compositeFilter.op))}(t):re()}function _N(t){return oN[t]}function wN(t){return aN[t]}function xN(t){return lN[t]}function Gs(t){return{fieldPath:t.canonicalString()}}function Ks(t){return pt.fromServerFormat(t.fieldPath)}function M1(t){return t instanceof et?function(n){if(n.op==="=="){if(a_(n.value))return{unaryFilter:{field:Gs(n.field),op:"IS_NAN"}};if(o_(n.value))return{unaryFilter:{field:Gs(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(a_(n.value))return{unaryFilter:{field:Gs(n.field),op:"IS_NOT_NAN"}};if(o_(n.value))return{unaryFilter:{field:Gs(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Gs(n.field),op:wN(n.op),value:n.value}}}(t):t instanceof Dn?function(n){const r=n.getFilters().map(i=>M1(i));return r.length===1?r[0]:{compositeFilter:{op:xN(n.op),filters:r}}}(t):re()}function EN(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function V1(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(e,n,r,i,s=oe.min(),o=oe.min(),l=vt.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new li(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new li(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new li(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new li(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TN{constructor(e){this.ct=e}}function IN(t){const e=yN({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Jc(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SN{constructor(){this.un=new AN}addToCollectionParentIndex(e,n){return this.un.add(n),$.resolve()}getCollectionParents(e,n){return $.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return $.resolve()}deleteFieldIndex(e,n){return $.resolve()}deleteAllFieldIndexes(e){return $.resolve()}createTargetIndexes(e,n){return $.resolve()}getDocumentsMatchingTarget(e,n){return $.resolve(null)}getIndexType(e,n){return $.resolve(0)}getFieldIndexes(e,n){return $.resolve([])}getNextCollectionGroupToUpdate(e){return $.resolve(null)}getMinOffset(e,n){return $.resolve(Si.min())}getMinOffsetFromCollectionGroup(e,n){return $.resolve(Si.min())}updateCollectionGroup(e,n,r){return $.resolve()}updateIndexEntries(e,n){return $.resolve()}}class AN{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new gt(Ne.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new gt(Ne.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Lo(0)}static kn(){return new Lo(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kN{constructor(){this.changes=new Go(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,kt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?$.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bN{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RN{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&el(r.mutation,i,nn.empty(),st.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ce()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ce()){const i=is();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Ma();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=is();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ce()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=Cr();const o=Za(),l=function(){return Za()}();return n.forEach((u,d)=>{const f=r.get(d.key);i.has(d.key)&&(f===void 0||f.mutation instanceof Di)?s=s.insert(d.key,d):f!==void 0?(o.set(d.key,f.mutation.getFieldMask()),el(f.mutation,d,f.mutation.getFieldMask(),st.now())):o.set(d.key,nn.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((d,f)=>o.set(d,f)),n.forEach((d,f)=>{var m;return l.set(d,new bN(f,(m=o.get(d))!==null&&m!==void 0?m:null))}),l))}recalculateAndSaveOverlays(e,n){const r=Za();let i=new $e((o,l)=>o-l),s=ce();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const d=n.get(u);if(d===null)return;let f=r.get(u)||nn.empty();f=l.applyToLocalView(d,f),r.set(u,f);const m=(i.get(l.batchId)||ce()).add(u);i=i.insert(l.batchId,m)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),d=u.key,f=u.value,m=_1();f.forEach(g=>{if(!s.has(g)){const I=k1(n.get(g),r.get(g));I!==null&&m.set(g,I),s=s.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,d,m))}return $.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return ee.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):p1(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):$.resolve(is());let l=-1,u=s;return o.next(d=>$.forEach(d,(f,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),s.get(f)?$.resolve():this.remoteDocumentCache.getEntry(e,f).next(g=>{u=u.insert(f,g)}))).next(()=>this.populateOverlays(e,d,s)).next(()=>this.computeViews(e,u,d,ce())).next(f=>({batchId:l,changes:v1(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ee(n)).next(r=>{let i=Ma();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Ma();return this.indexManager.getCollectionParents(e,s).next(l=>$.forEach(l,u=>{const d=function(m,g){return new qo(g,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,d,r,i).next(f=>{f.forEach((m,g)=>{o=o.insert(m,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,d)=>{const f=d.getKey();o.get(f)===null&&(o=o.insert(f,kt.newInvalidDocument(f)))});let l=Ma();return o.forEach((u,d)=>{const f=s.get(u);f!==void 0&&el(f.mutation,d,nn.empty(),st.now()),Ld(n,d)&&(l=l.insert(u,d))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CN{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return $.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Qn(i.createTime)}}(n)),$.resolve()}getNamedQuery(e,n){return $.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:IN(i.bundledQuery),readTime:Qn(i.readTime)}}(n)),$.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PN{constructor(){this.overlays=new $e(ee.comparator),this.Ir=new Map}getOverlay(e,n){return $.resolve(this.overlays.get(n))}getOverlays(e,n){const r=is();return $.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),$.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),$.resolve()}getOverlaysForCollection(e,n,r){const i=is(),s=n.length+1,o=new ee(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,d=u.getKey();if(!n.isPrefixOf(d.path))break;d.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return $.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new $e((d,f)=>d-f);const o=this.overlays.getIterator();for(;o.hasNext();){const d=o.getNext().value;if(d.getKey().getCollectionGroup()===n&&d.largestBatchId>r){let f=s.get(d.largestBatchId);f===null&&(f=is(),s=s.insert(d.largestBatchId,f)),f.set(d.getKey(),d)}}const l=is(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((d,f)=>l.set(d,f)),!(l.size()>=i)););return $.resolve(l)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new eN(n,r));let s=this.Ir.get(n);s===void 0&&(s=ce(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NN{constructor(){this.sessionToken=vt.EMPTY_BYTE_STRING}getSessionToken(e){return $.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,$.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Km{constructor(){this.Tr=new gt(ot.Er),this.dr=new gt(ot.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new ot(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new ot(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new ee(new Ne([])),r=new ot(n,e),i=new ot(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new ee(new Ne([])),r=new ot(n,e),i=new ot(n,e+1);let s=ce();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new ot(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ot{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return ee.comparator(e.key,n.key)||ve(e.wr,n.wr)}static Ar(e,n){return ve(e.wr,n.wr)||ee.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DN{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new gt(ot.Er)}checkEmpty(e){return $.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Z2(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.br=this.br.add(new ot(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return $.resolve(o)}lookupMutationBatch(e,n){return $.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return $.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return $.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return $.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ot(n,0),i=new ot(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const l=this.Dr(o.wr);s.push(l)}),$.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new gt(ve);return n.forEach(i=>{const s=new ot(i,0),o=new ot(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],l=>{r=r.add(l.wr)})}),$.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;ee.isDocumentKey(s)||(s=s.child(""));const o=new ot(new ee(s),0);let l=new gt(ve);return this.br.forEachWhile(u=>{const d=u.key.path;return!!r.isPrefixOf(d)&&(d.length===i&&(l=l.add(u.wr)),!0)},o),$.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Ee(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return $.forEach(n.mutations,i=>{const s=new ot(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new ot(n,0),i=this.br.firstAfterOrEqual(r);return $.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,$.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jN{constructor(e){this.Mr=e,this.docs=function(){return new $e(ee.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return $.resolve(r?r.document.mutableCopy():kt.newInvalidDocument(n))}getEntries(e,n){let r=Cr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():kt.newInvalidDocument(i))}),$.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Cr();const o=n.path,l=new ee(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:d,value:{document:f}}=u.getNext();if(!o.isPrefixOf(d.path))break;d.path.length>o.length+1||v2(y2(f),r)<=0||(i.has(f.key)||Ld(n,f))&&(s=s.insert(f.key,f.mutableCopy()))}return $.resolve(s)}getAllFromCollectionGroup(e,n,r,i){re()}Or(e,n){return $.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new LN(this)}getSize(e){return $.resolve(this.size)}}class LN extends kN{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),$.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ON{constructor(e){this.persistence=e,this.Nr=new Go(n=>$m(n),Bm),this.lastRemoteSnapshotVersion=oe.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Km,this.targetCount=0,this.kr=Lo.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),$.resolve()}getLastRemoteSnapshotVersion(e){return $.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return $.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),$.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),$.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Lo(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,$.resolve()}updateTargetData(e,n){return this.Kn(n),$.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,$.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),$.waitFor(s).next(()=>i)}getTargetCount(e){return $.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return $.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),$.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),$.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),$.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return $.resolve(r)}containsKey(e,n){return $.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MN{constructor(e,n){this.qr={},this.overlays={},this.Qr=new Vm(0),this.Kr=!1,this.Kr=!0,this.$r=new NN,this.referenceDelegate=e(this),this.Ur=new ON(this),this.indexManager=new SN,this.remoteDocumentCache=function(i){return new jN(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new TN(n),this.Gr=new CN(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new PN,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new DN(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){X("MemoryPersistence","Starting transaction:",e);const i=new VN(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return $.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class VN extends w2{constructor(e){super(),this.currentSequenceNumber=e}}class Qm{constructor(e){this.persistence=e,this.Jr=new Km,this.Yr=null}static Zr(e){return new Qm(e)}get Xr(){if(this.Yr)return this.Yr;throw re()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),$.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),$.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),$.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return $.forEach(this.Xr,r=>{const i=ee.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,oe.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return $.or([()=>$.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ym{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=ce(),i=ce();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Ym(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UN{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FN{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return kb()?8:x2(Ct())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new UN;return this.Xi(e,n,o).next(l=>{if(s.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(Sa()<=de.DEBUG&&X("QueryEngine","SDK will not create cache indexes for query:",qs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),$.resolve()):(Sa()<=de.DEBUG&&X("QueryEngine","Query:",qs(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(Sa()<=de.DEBUG&&X("QueryEngine","The SDK decides to create cache indexes for query:",qs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Kn(n))):$.resolve())}Yi(e,n){if(d_(n))return $.resolve(null);let r=Kn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Jc(n,null,"F"),r=Kn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ce(...s);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const d=this.ts(n,l);return this.ns(n,d,o,u.readTime)?this.Yi(e,Jc(n,null,"F")):this.rs(e,d,n,u)}))})))}Zi(e,n,r,i){return d_(n)||i.isEqual(oe.min())?$.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?$.resolve(null):(Sa()<=de.DEBUG&&X("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),qs(n)),this.rs(e,o,n,g2(i,-1)).next(l=>l))})}ts(e,n){let r=new gt(g1(e));return n.forEach((i,s)=>{Ld(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return Sa()<=de.DEBUG&&X("QueryEngine","Using full collection scan to execute query:",qs(n)),this.Ji.getDocumentsMatchingQuery(e,n,Si.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zN{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new $e(ve),this._s=new Go(s=>$m(s),Bm),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new RN(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function $N(t,e,n,r){return new zN(t,e,n,r)}async function U1(t,e){const n=ae(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=ce();for(const d of i){o.push(d.batchId);for(const f of d.mutations)u=u.add(f.key)}for(const d of s){l.push(d.batchId);for(const f of d.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(d=>({hs:d,removedBatchIds:o,addedBatchIds:l}))})})}function BN(t,e){const n=ae(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,d,f){const m=d.batch,g=m.keys();let I=$.resolve();return g.forEach(C=>{I=I.next(()=>f.getEntry(u,C)).next(b=>{const P=d.docVersions.get(C);Ee(P!==null),b.version.compareTo(P)<0&&(m.applyToRemoteDocument(b,d),b.isValidDocument()&&(b.setReadTime(d.commitVersion),f.addEntry(b)))})}),I.next(()=>l.mutationQueue.removeMutationBatch(u,m))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=ce();for(let d=0;d<l.mutationResults.length;++d)l.mutationResults[d].transformResults.length>0&&(u=u.add(l.batch.mutations[d].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function F1(t){const e=ae(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function HN(t,e){const n=ae(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const l=[];e.targetChanges.forEach((f,m)=>{const g=i.get(m);if(!g)return;l.push(n.Ur.removeMatchingKeys(s,f.removedDocuments,m).next(()=>n.Ur.addMatchingKeys(s,f.addedDocuments,m)));let I=g.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(m)!==null?I=I.withResumeToken(vt.EMPTY_BYTE_STRING,oe.min()).withLastLimboFreeSnapshotVersion(oe.min()):f.resumeToken.approximateByteSize()>0&&(I=I.withResumeToken(f.resumeToken,r)),i=i.insert(m,I),function(b,P,x){return b.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-b.snapshotVersion.toMicroseconds()>=3e8?!0:x.addedDocuments.size+x.modifiedDocuments.size+x.removedDocuments.size>0}(g,I,f)&&l.push(n.Ur.updateTargetData(s,I))});let u=Cr(),d=ce();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(WN(s,o,e.documentUpdates).next(f=>{u=f.Ps,d=f.Is})),!r.isEqual(oe.min())){const f=n.Ur.getLastRemoteSnapshotVersion(s).next(m=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(f)}return $.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,d)).next(()=>u)}).then(s=>(n.os=i,s))}function WN(t,e,n){let r=ce(),i=ce();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Cr();return n.forEach((l,u)=>{const d=s.get(l);u.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(oe.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!d.isValidDocument()||u.version.compareTo(d.version)>0||u.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):X("LocalStore","Ignoring outdated watch update for ",l,". Current version:",d.version," Watch version:",u.version)}),{Ps:o,Is:i}})}function qN(t,e){const n=ae(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function GN(t,e){const n=ae(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,$.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new li(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function vp(t,e,n){const r=ae(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Gl(o))throw o;X("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function E_(t,e,n){const r=ae(t);let i=oe.min(),s=ce();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,d,f){const m=ae(u),g=m._s.get(f);return g!==void 0?$.resolve(m.os.get(g)):m.Ur.getTargetData(d,f)}(r,o,Kn(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:oe.min(),n?s:ce())).next(l=>(KN(r,U2(e),l),{documents:l,Ts:s})))}function KN(t,e,n){let r=t.us.get(e)||oe.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class T_{constructor(){this.activeTargetIds=W2()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class QN{constructor(){this.so=new T_,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new T_,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YN{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I_{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){X("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){X("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bu=null;function Fh(){return Bu===null?Bu=function(){return 268435456+Math.round(2147483648*Math.random())}():Bu++,"0x"+Bu.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XN={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JN{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tt="WebChannelConnection";class ZN extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const l=Fh(),u=this.xo(n,r.toUriEncodedString());X("RestConnection",`Sending RPC '${n}' ${l}:`,u,i);const d={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(d,s,o),this.No(n,u,d,i).then(f=>(X("RestConnection",`Received RPC '${n}' ${l}: `,f),f),f=>{throw Po("RestConnection",`RPC '${n}' ${l} failed with error: `,f,"url: ",u,"request:",i),f})}Lo(n,r,i,s,o,l){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Wo}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=XN[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=Fh();return new Promise((o,l)=>{const u=new JE;u.setWithCredentials(!0),u.listenOnce(ZE.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case uc.NO_ERROR:const f=u.getResponseJson();X(Tt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(f)),o(f);break;case uc.TIMEOUT:X(Tt,`RPC '${e}' ${s} timed out`),l(new Q(F.DEADLINE_EXCEEDED,"Request time out"));break;case uc.HTTP_ERROR:const m=u.getStatus();if(X(Tt,`RPC '${e}' ${s} failed with status:`,m,"response text:",u.getResponseText()),m>0){let g=u.getResponseJson();Array.isArray(g)&&(g=g[0]);const I=g==null?void 0:g.error;if(I&&I.status&&I.message){const C=function(P){const x=P.toLowerCase().replace(/_/g,"-");return Object.values(F).indexOf(x)>=0?x:F.UNKNOWN}(I.status);l(new Q(C,I.message))}else l(new Q(F.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new Q(F.UNAVAILABLE,"Connection failed."));break;default:re()}}finally{X(Tt,`RPC '${e}' ${s} completed.`)}});const d=JSON.stringify(i);X(Tt,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",d,r,15)})}Bo(e,n,r){const i=Fh(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=n1(),l=t1(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(u.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const f=s.join("");X(Tt,`Creating RPC '${e}' stream ${i}: ${f}`,u);const m=o.createWebChannel(f,u);let g=!1,I=!1;const C=new JN({Io:P=>{I?X(Tt,`Not sending because RPC '${e}' stream ${i} is closed:`,P):(g||(X(Tt,`Opening RPC '${e}' stream ${i} transport.`),m.open(),g=!0),X(Tt,`RPC '${e}' stream ${i} sending:`,P),m.send(P))},To:()=>m.close()}),b=(P,x,_)=>{P.listen(x,A=>{try{_(A)}catch(O){setTimeout(()=>{throw O},0)}})};return b(m,Oa.EventType.OPEN,()=>{I||(X(Tt,`RPC '${e}' stream ${i} transport opened.`),C.yo())}),b(m,Oa.EventType.CLOSE,()=>{I||(I=!0,X(Tt,`RPC '${e}' stream ${i} transport closed`),C.So())}),b(m,Oa.EventType.ERROR,P=>{I||(I=!0,Po(Tt,`RPC '${e}' stream ${i} transport errored:`,P),C.So(new Q(F.UNAVAILABLE,"The operation could not be completed")))}),b(m,Oa.EventType.MESSAGE,P=>{var x;if(!I){const _=P.data[0];Ee(!!_);const A=_,O=A.error||((x=A[0])===null||x===void 0?void 0:x.error);if(O){X(Tt,`RPC '${e}' stream ${i} received error:`,O);const M=O.status;let D=function(E){const S=Je[E];if(S!==void 0)return R1(S)}(M),T=O.message;D===void 0&&(D=F.INTERNAL,T="Unknown error status: "+M+" with message "+O.message),I=!0,C.So(new Q(D,T)),m.close()}else X(Tt,`RPC '${e}' stream ${i} received:`,_),C.bo(_)}}),b(l,e1.STAT_EVENT,P=>{P.stat===lp.PROXY?X(Tt,`RPC '${e}' stream ${i} detected buffering proxy`):P.stat===lp.NOPROXY&&X(Tt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{C.wo()},0),C}}function zh(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fd(t){return new uN(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z1{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&X("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $1{constructor(e,n,r,i,s,o,l,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new z1(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===F.RESOURCE_EXHAUSTED?(Rr(n.toString()),Rr("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===F.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new Q(F.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return X("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(X("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class eD extends $1{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=hN(this.serializer,e),r=function(s){if(!("targetChange"in s))return oe.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?oe.min():o.readTime?Qn(o.readTime):oe.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=yp(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=hp(u)?{documents:mN(s,u)}:{query:gN(s,u)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=N1(s,o.resumeToken);const d=pp(s,o.expectedCount);d!==null&&(l.expectedCount=d)}else if(o.snapshotVersion.compareTo(oe.min())>0){l.readTime=Zc(s,o.snapshotVersion.toTimestamp());const d=pp(s,o.expectedCount);d!==null&&(l.expectedCount=d)}return l}(this.serializer,e);const r=vN(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=yp(this.serializer),n.removeTarget=e,this.a_(n)}}class tD extends $1{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return Ee(!!e.streamToken),this.lastStreamToken=e.streamToken,Ee(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Ee(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=pN(e.writeResults,e.commitTime),r=Qn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=yp(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>fN(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nD extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new Q(F.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,mp(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new Q(F.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,mp(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new Q(F.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class rD{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Rr(n),this.D_=!1):X("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iD{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{Is(this)&&(X("RemoteStore","Restarting streams for network reachability change."),await async function(u){const d=ae(u);d.L_.add(4),await Yl(d),d.q_.set("Unknown"),d.L_.delete(4),await zd(d)}(this))})}),this.q_=new rD(r,i)}}async function zd(t){if(Is(t))for(const e of t.B_)await e(!0)}async function Yl(t){for(const e of t.B_)await e(!1)}function B1(t,e){const n=ae(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),eg(n)?Zm(n):Ko(n).r_()&&Jm(n,e))}function Xm(t,e){const n=ae(t),r=Ko(n);n.N_.delete(e),r.r_()&&H1(n,e),n.N_.size===0&&(r.r_()?r.o_():Is(n)&&n.q_.set("Unknown"))}function Jm(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(oe.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ko(t).A_(e)}function H1(t,e){t.Q_.xe(e),Ko(t).R_(e)}function Zm(t){t.Q_=new sN({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Ko(t).start(),t.q_.v_()}function eg(t){return Is(t)&&!Ko(t).n_()&&t.N_.size>0}function Is(t){return ae(t).L_.size===0}function W1(t){t.Q_=void 0}async function sD(t){t.q_.set("Online")}async function oD(t){t.N_.forEach((e,n)=>{Jm(t,e)})}async function aD(t,e){W1(t),eg(t)?(t.q_.M_(e),Zm(t)):t.q_.set("Unknown")}async function lD(t,e,n){if(t.q_.set("Online"),e instanceof P1&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.N_.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.N_.delete(l),i.Q_.removeTarget(l))}(t,e)}catch(r){X("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ed(t,r)}else if(e instanceof hc?t.Q_.Ke(e):e instanceof C1?t.Q_.He(e):t.Q_.We(e),!n.isEqual(oe.min()))try{const r=await F1(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.Q_.rt(o);return l.targetChanges.forEach((u,d)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.N_.get(d);f&&s.N_.set(d,f.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,d)=>{const f=s.N_.get(u);if(!f)return;s.N_.set(u,f.withResumeToken(vt.EMPTY_BYTE_STRING,f.snapshotVersion)),H1(s,u);const m=new li(f.target,u,d,f.sequenceNumber);Jm(s,m)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){X("RemoteStore","Failed to raise snapshot:",r),await ed(t,r)}}async function ed(t,e,n){if(!Gl(e))throw e;t.L_.add(1),await Yl(t),t.q_.set("Offline"),n||(n=()=>F1(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{X("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await zd(t)})}function q1(t,e){return e().catch(n=>ed(t,n,e))}async function $d(t){const e=ae(t),n=ki(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;uD(e);)try{const i=await qN(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,cD(e,i)}catch(i){await ed(e,i)}G1(e)&&K1(e)}function uD(t){return Is(t)&&t.O_.length<10}function cD(t,e){t.O_.push(e);const n=ki(t);n.r_()&&n.V_&&n.m_(e.mutations)}function G1(t){return Is(t)&&!ki(t).n_()&&t.O_.length>0}function K1(t){ki(t).start()}async function dD(t){ki(t).p_()}async function hD(t){const e=ki(t);for(const n of t.O_)e.m_(n.mutations)}async function fD(t,e,n){const r=t.O_.shift(),i=Wm.from(r,e,n);await q1(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await $d(t)}async function pD(t,e){e&&ki(t).V_&&await async function(r,i){if(function(o){return nN(o)&&o!==F.ABORTED}(i.code)){const s=r.O_.shift();ki(r).s_(),await q1(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await $d(r)}}(t,e),G1(t)&&K1(t)}async function S_(t,e){const n=ae(t);n.asyncQueue.verifyOperationInProgress(),X("RemoteStore","RemoteStore received new credentials");const r=Is(n);n.L_.add(3),await Yl(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await zd(n)}async function mD(t,e){const n=ae(t);e?(n.L_.delete(2),await zd(n)):e||(n.L_.add(2),await Yl(n),n.q_.set("Unknown"))}function Ko(t){return t.K_||(t.K_=function(n,r,i){const s=ae(n);return s.w_(),new eD(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:sD.bind(null,t),Ro:oD.bind(null,t),mo:aD.bind(null,t),d_:lD.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),eg(t)?Zm(t):t.q_.set("Unknown")):(await t.K_.stop(),W1(t))})),t.K_}function ki(t){return t.U_||(t.U_=function(n,r,i){const s=ae(n);return s.w_(),new tD(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:dD.bind(null,t),mo:pD.bind(null,t),f_:hD.bind(null,t),g_:fD.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await $d(t)):(await t.U_.stop(),t.O_.length>0&&(X("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tg{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Er,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new tg(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Q(F.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ng(t,e){if(Rr("AsyncQueue",`${e}: ${t}`),Gl(t))return new Q(F.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{constructor(e){this.comparator=e?(n,r)=>e(n,r)||ee.comparator(n.key,r.key):(n,r)=>ee.comparator(n.key,r.key),this.keyedMap=Ma(),this.sortedSet=new $e(this.comparator)}static emptySet(e){return new _o(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof _o)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new _o;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A_{constructor(){this.W_=new $e(ee.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):re():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Oo{constructor(e,n,r,i,s,o,l,u,d){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=d}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Oo(e,n,_o.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&jd(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gD{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class yD{constructor(){this.queries=k_(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=ae(n),s=i.queries;i.queries=k_(),s.forEach((o,l)=>{for(const u of l.j_)u.onError(r)})})(this,new Q(F.ABORTED,"Firestore shutting down"))}}function k_(){return new Go(t=>m1(t),jd)}async function rg(t,e){const n=ae(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new gD,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=ng(o,`Initialization of query '${qs(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&sg(n)}async function ig(t,e){const n=ae(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function vD(t,e){const n=ae(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.j_)l.X_(i)&&(r=!0);o.z_=i}}r&&sg(n)}function _D(t,e,n){const r=ae(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function sg(t){t.Y_.forEach(e=>{e.next()})}var _p,b_;(b_=_p||(_p={})).ea="default",b_.Cache="cache";class og{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Oo(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=Oo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==_p.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q1{constructor(e){this.key=e}}class Y1{constructor(e){this.key=e}}class wD{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ce(),this.mutatedKeys=ce(),this.Aa=g1(e),this.Ra=new _o(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new A_,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,m)=>{const g=i.get(f),I=Ld(this.query,m)?m:null,C=!!g&&this.mutatedKeys.has(g.key),b=!!I&&(I.hasLocalMutations||this.mutatedKeys.has(I.key)&&I.hasCommittedMutations);let P=!1;g&&I?g.data.isEqual(I.data)?C!==b&&(r.track({type:3,doc:I}),P=!0):this.ga(g,I)||(r.track({type:2,doc:I}),P=!0,(u&&this.Aa(I,u)>0||d&&this.Aa(I,d)<0)&&(l=!0)):!g&&I?(r.track({type:0,doc:I}),P=!0):g&&!I&&(r.track({type:1,doc:g}),P=!0,(u||d)&&(l=!0)),P&&(I?(o=o.add(I),s=b?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{Ra:o,fa:r,ns:l,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((f,m)=>function(I,C){const b=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return re()}};return b(I)-b(C)}(f.type,m.type)||this.Aa(f.doc,m.doc)),this.pa(r),i=i!=null&&i;const l=n&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,d=u!==this.Ea;return this.Ea=u,o.length!==0||d?{snapshot:new Oo(this.query,e.Ra,s,o,e.mutatedKeys,u===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new A_,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ce(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new Y1(r))}),this.da.forEach(r=>{e.has(r)||n.push(new Q1(r))}),n}ba(e){this.Ta=e.Ts,this.da=ce();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return Oo.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class xD{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class ED{constructor(e){this.key=e,this.va=!1}}class TD{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Go(l=>m1(l),jd),this.Ma=new Map,this.xa=new Set,this.Oa=new $e(ee.comparator),this.Na=new Map,this.La=new Km,this.Ba={},this.ka=new Map,this.qa=Lo.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function ID(t,e,n=!0){const r=nT(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await X1(r,e,n,!0),i}async function SD(t,e){const n=nT(t);await X1(n,e,!0,!1)}async function X1(t,e,n,r){const i=await GN(t.localStore,Kn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await AD(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&B1(t.remoteStore,i),l}async function AD(t,e,n,r,i){t.Ka=(m,g,I)=>async function(b,P,x,_){let A=P.view.ma(x);A.ns&&(A=await E_(b.localStore,P.query,!1).then(({documents:T})=>P.view.ma(T,A)));const O=_&&_.targetChanges.get(P.targetId),M=_&&_.targetMismatches.get(P.targetId)!=null,D=P.view.applyChanges(A,b.isPrimaryClient,O,M);return C_(b,P.targetId,D.wa),D.snapshot}(t,m,g,I);const s=await E_(t.localStore,e,!0),o=new wD(e,s.Ts),l=o.ma(s.documents),u=Ql.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),d=o.applyChanges(l,t.isPrimaryClient,u);C_(t,n,d.wa);const f=new xD(e,n,o);return t.Fa.set(e,f),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),d.snapshot}async function kD(t,e,n){const r=ae(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!jd(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await vp(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Xm(r.remoteStore,i.targetId),wp(r,i.targetId)}).catch(ql)):(wp(r,i.targetId),await vp(r.localStore,i.targetId,!0))}async function bD(t,e){const n=ae(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Xm(n.remoteStore,r.targetId))}async function RD(t,e,n){const r=OD(t);try{const i=await function(o,l){const u=ae(o),d=st.now(),f=l.reduce((I,C)=>I.add(C.key),ce());let m,g;return u.persistence.runTransaction("Locally write mutations","readwrite",I=>{let C=Cr(),b=ce();return u.cs.getEntries(I,f).next(P=>{C=P,C.forEach((x,_)=>{_.isValidDocument()||(b=b.add(x))})}).next(()=>u.localDocuments.getOverlayedDocuments(I,C)).next(P=>{m=P;const x=[];for(const _ of l){const A=X2(_,m.get(_.key).overlayedDocument);A!=null&&x.push(new Di(_.key,A,a1(A.value.mapValue),Lt.exists(!0)))}return u.mutationQueue.addMutationBatch(I,d,x,l)}).next(P=>{g=P;const x=P.applyToLocalDocumentSet(m,b);return u.documentOverlayCache.saveOverlays(I,P.batchId,x)})}).then(()=>({batchId:g.batchId,changes:v1(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let d=o.Ba[o.currentUser.toKey()];d||(d=new $e(ve)),d=d.insert(l,u),o.Ba[o.currentUser.toKey()]=d}(r,i.batchId,n),await Xl(r,i.changes),await $d(r.remoteStore)}catch(i){const s=ng(i,"Failed to persist write");n.reject(s)}}async function J1(t,e){const n=ae(t);try{const r=await HN(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(Ee(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?Ee(o.va):i.removedDocuments.size>0&&(Ee(o.va),o.va=!1))}),await Xl(n,r,e)}catch(r){await ql(r)}}function R_(t,e,n){const r=ae(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const l=o.view.Z_(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=ae(o);u.onlineState=l;let d=!1;u.queries.forEach((f,m)=>{for(const g of m.j_)g.Z_(l)&&(d=!0)}),d&&sg(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function CD(t,e,n){const r=ae(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new $e(ee.comparator);o=o.insert(s,kt.newNoDocument(s,oe.min()));const l=ce().add(s),u=new Ud(oe.min(),new Map,new $e(ve),o,l);await J1(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),ag(r)}else await vp(r.localStore,e,!1).then(()=>wp(r,e,n)).catch(ql)}async function PD(t,e){const n=ae(t),r=e.batch.batchId;try{const i=await BN(n.localStore,e);eT(n,r,null),Z1(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Xl(n,i)}catch(i){await ql(i)}}async function ND(t,e,n){const r=ae(t);try{const i=await function(o,l){const u=ae(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let f;return u.mutationQueue.lookupMutationBatch(d,l).next(m=>(Ee(m!==null),f=m.keys(),u.mutationQueue.removeMutationBatch(d,m))).next(()=>u.mutationQueue.performConsistencyCheck(d)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(d,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,f)).next(()=>u.localDocuments.getDocuments(d,f))})}(r.localStore,e);eT(r,e,n),Z1(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Xl(r,i)}catch(i){await ql(i)}}function Z1(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function eT(t,e,n){const r=ae(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function wp(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||tT(t,r)})}function tT(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(Xm(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),ag(t))}function C_(t,e,n){for(const r of n)r instanceof Q1?(t.La.addReference(r.key,e),DD(t,r)):r instanceof Y1?(X("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||tT(t,r.key)):re()}function DD(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(X("SyncEngine","New document in limbo: "+n),t.xa.add(r),ag(t))}function ag(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new ee(Ne.fromString(e)),r=t.qa.next();t.Na.set(r,new ED(n)),t.Oa=t.Oa.insert(n,r),B1(t.remoteStore,new li(Kn(Dd(n.path)),r,"TargetPurposeLimboResolution",Vm.oe))}}async function Xl(t,e,n){const r=ae(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{o.push(r.Ka(u,e,n).then(d=>{var f;if((d||n)&&r.isPrimaryClient){const m=d?!d.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(d){i.push(d);const m=Ym.Wi(u.targetId,d);s.push(m)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(u,d){const f=ae(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>$.forEach(d,g=>$.forEach(g.$i,I=>f.persistence.referenceDelegate.addReference(m,g.targetId,I)).next(()=>$.forEach(g.Ui,I=>f.persistence.referenceDelegate.removeReference(m,g.targetId,I)))))}catch(m){if(!Gl(m))throw m;X("LocalStore","Failed to update sequence numbers: "+m)}for(const m of d){const g=m.targetId;if(!m.fromCache){const I=f.os.get(g),C=I.snapshotVersion,b=I.withLastLimboFreeSnapshotVersion(C);f.os=f.os.insert(g,b)}}}(r.localStore,s))}async function jD(t,e){const n=ae(t);if(!n.currentUser.isEqual(e)){X("SyncEngine","User change. New user:",e.toKey());const r=await U1(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(l=>{l.forEach(u=>{u.reject(new Q(F.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Xl(n,r.hs)}}function LD(t,e){const n=ae(t),r=n.Na.get(e);if(r&&r.va)return ce().add(r.key);{let i=ce();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const l=n.Fa.get(o);i=i.unionWith(l.view.Va)}return i}}function nT(t){const e=ae(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=J1.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=LD.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=CD.bind(null,e),e.Ca.d_=vD.bind(null,e.eventManager),e.Ca.$a=_D.bind(null,e.eventManager),e}function OD(t){const e=ae(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=PD.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=ND.bind(null,e),e}class td{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Fd(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return $N(this.persistence,new FN,e.initialUser,this.serializer)}Ga(e){return new MN(Qm.Zr,this.serializer)}Wa(e){return new QN}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}td.provider={build:()=>new td};class xp{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>R_(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=jD.bind(null,this.syncEngine),await mD(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new yD}()}createDatastore(e){const n=Fd(e.databaseInfo.databaseId),r=function(s){return new ZN(s)}(e.databaseInfo);return function(s,o,l,u){return new nD(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new iD(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>R_(this.syncEngine,n,0),function(){return I_.D()?new I_:new YN}())}createSyncEngine(e,n){return function(i,s,o,l,u,d,f){const m=new TD(i,s,o,l,u,d);return f&&(m.Qa=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=ae(i);X("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await Yl(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}xp.provider={build:()=>new xp};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lg{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Rr("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MD{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=St.UNAUTHENTICATED,this.clientId=i1.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{X("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(X("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Er;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=ng(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function $h(t,e){t.asyncQueue.verifyOperationInProgress(),X("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await U1(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function P_(t,e){t.asyncQueue.verifyOperationInProgress();const n=await VD(t);X("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>S_(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>S_(e.remoteStore,i)),t._onlineComponents=e}async function VD(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){X("FirestoreClient","Using user provided OfflineComponentProvider");try{await $h(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===F.FAILED_PRECONDITION||i.code===F.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Po("Error using user provided cache. Falling back to memory cache: "+n),await $h(t,new td)}}else X("FirestoreClient","Using default OfflineComponentProvider"),await $h(t,new td);return t._offlineComponents}async function rT(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(X("FirestoreClient","Using user provided OnlineComponentProvider"),await P_(t,t._uninitializedComponentsProvider._online)):(X("FirestoreClient","Using default OnlineComponentProvider"),await P_(t,new xp))),t._onlineComponents}function UD(t){return rT(t).then(e=>e.syncEngine)}async function nd(t){const e=await rT(t),n=e.eventManager;return n.onListen=ID.bind(null,e.syncEngine),n.onUnlisten=kD.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=SD.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=bD.bind(null,e.syncEngine),n}function FD(t,e,n={}){const r=new Er;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,d){const f=new lg({next:g=>{f.Za(),o.enqueueAndForget(()=>ig(s,m));const I=g.docs.has(l);!I&&g.fromCache?d.reject(new Q(F.UNAVAILABLE,"Failed to get document because the client is offline.")):I&&g.fromCache&&u&&u.source==="server"?d.reject(new Q(F.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(g)},error:g=>d.reject(g)}),m=new og(Dd(l.path),f,{includeMetadataChanges:!0,_a:!0});return rg(s,m)}(await nd(t),t.asyncQueue,e,n,r)),r.promise}function zD(t,e,n={}){const r=new Er;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,d){const f=new lg({next:g=>{f.Za(),o.enqueueAndForget(()=>ig(s,m)),g.fromCache&&u.source==="server"?d.reject(new Q(F.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(g)},error:g=>d.reject(g)}),m=new og(l,f,{includeMetadataChanges:!0,_a:!0});return rg(s,m)}(await nd(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iT(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N_=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sT(t,e,n){if(!n)throw new Q(F.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function $D(t,e,n,r){if(e===!0&&r===!0)throw new Q(F.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function D_(t){if(!ee.isDocumentKey(t))throw new Q(F.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function j_(t){if(ee.isDocumentKey(t))throw new Q(F.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Bd(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":re()}function Ot(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Q(F.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Bd(t);throw new Q(F.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function BD(t,e){if(e<=0)throw new Q(F.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L_{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new Q(F.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new Q(F.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}$D("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=iT((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new Q(F.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new Q(F.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new Q(F.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Hd{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new L_({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Q(F.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Q(F.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new L_(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new a2;switch(r.type){case"firstParty":return new d2(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Q(F.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=N_.get(n);r&&(X("ComponentProvider","Removing Datastore"),N_.delete(n),r.terminate())}(this),Promise.resolve()}}function HD(t,e,n,r={}){var i;const s=(t=Ot(t,Hd))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Po("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=St.MOCK_USER;else{l=wb(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new Q(F.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new St(d)}t._authCredentials=new l2(new r1(l,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Mr(this.firestore,e,this._query)}}class bt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new xi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new bt(this.firestore,e,this._key)}}class xi extends Mr{constructor(e,n,r){super(e,n,Dd(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new bt(this.firestore,null,new ee(e))}withConverter(e){return new xi(this.firestore,e,this._path)}}function Qo(t,e,...n){if(t=qe(t),sT("collection","path",e),t instanceof Hd){const r=Ne.fromString(e,...n);return j_(r),new xi(t,null,r)}{if(!(t instanceof bt||t instanceof xi))throw new Q(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ne.fromString(e,...n));return j_(r),new xi(t.firestore,null,r)}}function Pt(t,e,...n){if(t=qe(t),arguments.length===1&&(e=i1.newId()),sT("doc","path",e),t instanceof Hd){const r=Ne.fromString(e,...n);return D_(r),new bt(t,null,new ee(r))}{if(!(t instanceof bt||t instanceof xi))throw new Q(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ne.fromString(e,...n));return D_(r),new bt(t.firestore,t instanceof xi?t.converter:null,new ee(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O_{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new z1(this,"async_queue_retry"),this.Vu=()=>{const r=zh();r&&X("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=zh();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=zh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new Er;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Gl(e))throw e;X("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw Rr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=tg.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&re()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function M_(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class Xn extends Hd{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new O_,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new O_(e),this._firestoreClient=void 0,await e}}}function WD(t,e){const n=typeof t=="object"?t:fE(),r=typeof t=="string"?t:"(default)",i=km(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=vb("firestore");s&&HD(i,...s)}return i}function Jl(t){if(t._terminated)throw new Q(F.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||qD(t),t._firestoreClient}function qD(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,d,f){return new I2(l,u,d,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,iT(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new MD(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Mo(vt.fromBase64String(e))}catch(n){throw new Q(F.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Mo(vt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new Q(F.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new pt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ug{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new Q(F.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new Q(F.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ve(this._lat,e._lat)||ve(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cg{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GD=/^__.*__$/;class KD{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Di(e,this.data,this.fieldMask,n,this.fieldTransforms):new Kl(e,this.data,n,this.fieldTransforms)}}class oT{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Di(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function aT(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw re()}}class dg{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new dg(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return rd(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(aT(this.Cu)&&GD.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class QD{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Fd(e)}Qu(e,n,r,i=!1){return new dg({Cu:e,methodName:n,qu:r,path:pt.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function tu(t){const e=t._freezeSettings(),n=Fd(t._databaseId);return new QD(t._databaseId,!!e.ignoreUndefinedProperties,n)}function hg(t,e,n,r,i,s={}){const o=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);mg("Data must be an object, but it was:",o,r);const l=cT(r,o);let u,d;if(s.merge)u=new nn(o.fieldMask),d=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const m of s.mergeFields){const g=Ep(e,m,n);if(!o.contains(g))throw new Q(F.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);hT(f,g)||f.push(g)}u=new nn(f),d=o.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,d=o.fieldTransforms;return new KD(new Ht(l),u,d)}class Wd extends eu{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Wd}}class fg extends eu{_toFieldTransform(e){return new A1(e.path,new bl)}isEqual(e){return e instanceof fg}}class pg extends eu{constructor(e,n){super(e),this.$u=n}_toFieldTransform(e){const n=new Pl(e.serializer,x1(e.serializer,this.$u));return new A1(e.path,n)}isEqual(e){return e instanceof pg&&this.$u===e.$u}}function lT(t,e,n,r){const i=t.Qu(1,e,n);mg("Data must be an object, but it was:",i,r);const s=[],o=Ht.empty();Ts(r,(u,d)=>{const f=gg(e,u,n);d=qe(d);const m=i.Nu(f);if(d instanceof Wd)s.push(f);else{const g=nu(d,m);g!=null&&(s.push(f),o.set(f,g))}});const l=new nn(s);return new oT(o,l,i.fieldTransforms)}function uT(t,e,n,r,i,s){const o=t.Qu(1,e,n),l=[Ep(e,r,n)],u=[i];if(s.length%2!=0)throw new Q(F.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<s.length;g+=2)l.push(Ep(e,s[g])),u.push(s[g+1]);const d=[],f=Ht.empty();for(let g=l.length-1;g>=0;--g)if(!hT(d,l[g])){const I=l[g];let C=u[g];C=qe(C);const b=o.Nu(I);if(C instanceof Wd)d.push(I);else{const P=nu(C,b);P!=null&&(d.push(I),f.set(I,P))}}const m=new nn(d);return new oT(f,m,o.fieldTransforms)}function YD(t,e,n,r=!1){return nu(n,t.Qu(r?4:3,e))}function nu(t,e){if(dT(t=qe(t)))return mg("Unsupported field value:",e,t),cT(t,e);if(t instanceof eu)return function(r,i){if(!aT(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=nu(l,i.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=qe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return x1(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=st.fromDate(r);return{timestampValue:Zc(i.serializer,s)}}if(r instanceof st){const s=new st(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Zc(i.serializer,s)}}if(r instanceof ug)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Mo)return{bytesValue:N1(i.serializer,r._byteString)};if(r instanceof bt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Gm(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof cg)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return Hm(l.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${Bd(r)}`)}(t,e)}function cT(t,e){const n={};return s1(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ts(t,(r,i)=>{const s=nu(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function dT(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof st||t instanceof ug||t instanceof Mo||t instanceof bt||t instanceof eu||t instanceof cg)}function mg(t,e,n){if(!dT(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Bd(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function Ep(t,e,n){if((e=qe(e))instanceof Zl)return e._internalPath;if(typeof e=="string")return gg(t,e);throw rd("Field path arguments must be of type string or ",t,!1,void 0,n)}const XD=new RegExp("[~\\*/\\[\\]]");function gg(t,e,n){if(e.search(XD)>=0)throw rd(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Zl(...e.split("."))._internalPath}catch{throw rd(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function rd(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new Q(F.INVALID_ARGUMENT,l+t+u)}function hT(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fT{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new bt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new JD(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(yg("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class JD extends fT{data(){return super.data()}}function yg(t,e){return typeof e=="string"?gg(t,e):e instanceof Zl?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pT(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new Q(F.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class vg{}class _g extends vg{}function wg(t,e,...n){let r=[];e instanceof vg&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof Eg).length,l=s.filter(u=>u instanceof xg).length;if(o>1||o>0&&l>0)throw new Q(F.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class xg extends _g{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new xg(e,n,r)}_apply(e){const n=this._parse(e);return gT(e._query,n),new Mr(e.firestore,e.converter,fp(e._query,n))}_parse(e){const n=tu(e.firestore);return function(s,o,l,u,d,f,m){let g;if(d.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new Q(F.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){U_(m,f);const I=[];for(const C of m)I.push(V_(u,s,C));g={arrayValue:{values:I}}}else g=V_(u,s,m)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||U_(m,f),g=YD(l,o,m,f==="in"||f==="not-in");return et.create(d,f,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class Eg extends vg{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Eg(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Dn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const l=s.getFlattenedFilters();for(const u of l)gT(o,u),o=fp(o,u)}(e._query,n),new Mr(e.firestore,e.converter,fp(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Tg extends _g{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Tg(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new Q(F.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new Q(F.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new kl(s,o)}(e._query,this._field,this._direction);return new Mr(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new qo(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function Ig(t,e="asc"){const n=e,r=yg("orderBy",t);return Tg._create(r,n)}class Sg extends _g{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new Sg(e,n,r)}_apply(e){return new Mr(e.firestore,e.converter,Jc(e._query,this._limit,this._limitType))}}function mT(t){return BD("limit",t),Sg._create("limit",t,"F")}function V_(t,e,n){if(typeof(n=qe(n))=="string"){if(n==="")throw new Q(F.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!p1(e)&&n.indexOf("/")!==-1)throw new Q(F.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ne.fromString(n));if(!ee.isDocumentKey(r))throw new Q(F.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return s_(t,new ee(r))}if(n instanceof bt)return s_(t,n._key);throw new Q(F.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Bd(n)}.`)}function U_(t,e){if(!Array.isArray(t)||t.length===0)throw new Q(F.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function gT(t,e){const n=function(i,s){for(const o of i)for(const l of o.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new Q(F.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new Q(F.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class ZD{convertValue(e,n="none"){switch(vs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ke(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ys(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw re()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Ts(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>Ke(o.doubleValue));return new cg(s)}convertGeoPoint(e){return new ug(Ke(e.latitude),Ke(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Fm(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Il(e));default:return null}}convertTimestamp(e){const n=Ai(e);return new st(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ne.fromString(e);Ee(V1(r));const i=new Sl(r.get(1),r.get(3)),s=new ee(r.popFirst(5));return i.isEqual(n)||Rr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ag(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class yT extends fT{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new fc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(yg("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class fc extends yT{data(e={}){return super.data(e)}}class vT{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Ua(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new fc(this._firestore,this._userDataWriter,r.key,r,new Ua(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new Q(F.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new fc(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Ua(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new fc(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Ua(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let d=-1,f=-1;return l.type!==0&&(d=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:ej(l.type),doc:u,oldIndex:d,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function ej(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return re()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qd(t){t=Ot(t,bt);const e=Ot(t.firestore,Xn);return FD(Jl(e),t._key).then(n=>xT(e,t,n))}class kg extends ZD{constructor(e){super(),this.firestore=e}convertBytes(e){return new Mo(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new bt(this.firestore,null,n)}}function bg(t){t=Ot(t,Mr);const e=Ot(t.firestore,Xn),n=Jl(e),r=new kg(e);return pT(t._query),zD(n,t._query).then(i=>new vT(e,r,t,i))}function ru(t,e,n){t=Ot(t,bt);const r=Ot(t.firestore,Xn),i=Ag(t.converter,e,n);return iu(r,[hg(tu(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Lt.none())])}function tj(t,e,n,...r){t=Ot(t,bt);const i=Ot(t.firestore,Xn),s=tu(i);let o;return o=typeof(e=qe(e))=="string"||e instanceof Zl?uT(s,"updateDoc",t._key,e,n,r):lT(s,"updateDoc",t._key,e),iu(i,[o.toMutation(t._key,Lt.exists(!0))])}function Gd(t){return iu(Ot(t.firestore,Xn),[new Vd(t._key,Lt.none())])}function _T(t,e){const n=Ot(t.firestore,Xn),r=Pt(t),i=Ag(t.converter,e);return iu(n,[hg(tu(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Lt.exists(!1))]).then(()=>r)}function wT(t,...e){var n,r,i;t=qe(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||M_(e[o])||(s=e[o],o++);const l={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(M_(e[o])){const m=e[o];e[o]=(n=m.next)===null||n===void 0?void 0:n.bind(m),e[o+1]=(r=m.error)===null||r===void 0?void 0:r.bind(m),e[o+2]=(i=m.complete)===null||i===void 0?void 0:i.bind(m)}let u,d,f;if(t instanceof bt)d=Ot(t.firestore,Xn),f=Dd(t._key.path),u={next:m=>{e[o]&&e[o](xT(d,t,m))},error:e[o+1],complete:e[o+2]};else{const m=Ot(t,Mr);d=Ot(m.firestore,Xn),f=m._query;const g=new kg(d);u={next:I=>{e[o]&&e[o](new vT(d,g,m,I))},error:e[o+1],complete:e[o+2]},pT(t._query)}return function(g,I,C,b){const P=new lg(b),x=new og(I,P,C);return g.asyncQueue.enqueueAndForget(async()=>rg(await nd(g),x)),()=>{P.Za(),g.asyncQueue.enqueueAndForget(async()=>ig(await nd(g),x))}}(Jl(d),f,l,u)}function iu(t,e){return function(r,i){const s=new Er;return r.asyncQueue.enqueueAndForget(async()=>RD(await UD(r),i,s)),s.promise}(Jl(t),e)}function xT(t,e,n){const r=n.docs.get(e._key),i=new kg(t);return new yT(t,i,e._key,r,new Ua(n.hasPendingWrites,n.fromCache),e.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nj{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=tu(e)}set(e,n,r){this._verifyNotCommitted();const i=Bh(e,this._firestore),s=Ag(i.converter,n,r),o=hg(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,Lt.none())),this}update(e,n,r,...i){this._verifyNotCommitted();const s=Bh(e,this._firestore);let o;return o=typeof(n=qe(n))=="string"||n instanceof Zl?uT(this._dataReader,"WriteBatch.update",s._key,n,r,i):lT(this._dataReader,"WriteBatch.update",s._key,n),this._mutations.push(o.toMutation(s._key,Lt.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=Bh(e,this._firestore);return this._mutations=this._mutations.concat(new Vd(n._key,Lt.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new Q(F.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Bh(t,e){if((t=qe(t)).firestore!==e)throw new Q(F.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}function ji(){return new fg("serverTimestamp")}function F_(t){return new pg("increment",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rj(t){return Jl(t=Ot(t,Xn)),new nj(t,e=>iu(t,e))}(function(e,n=!0){(function(i){Wo=i})(Bo),Ro(new fs("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new Xn(new u2(r.getProvider("auth-internal")),new f2(r.getProvider("app-check-internal")),function(d,f){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new Q(F.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Sl(d.options.projectId,f)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),wi(e_,"4.7.3",e),wi(e_,"4.7.3","esm2017")})();var ij="firebase",sj="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */wi(ij,sj,"app");const pc={apiKey:"AIzaSyCqWiCyTRyy0DC5DURAulfDpdCJSt8a0Bw",authDomain:"hoshii-a4717.firebaseapp.com",projectId:"hoshii-a4717",storageBucket:"hoshii-a4717.firebasestorage.app",messagingSenderId:"1016457575048",appId:"1:1016457575048:web:ad2c75e86127181db2bd3d"},Jn=!!(pc.apiKey&&pc.projectId&&pc.appId);let Hh=null,bi=null,Oe=null;Jn&&(Hh=Cv().length?Cv()[0]:hE(pc),bi=s2(Hh),Oe=WD(Hh));function Yo(){if(!Jn||!bi)throw new Error("Firebase is not configured. Add your credentials to a .env file (see README).")}async function oj(t,e,n){Yo();const r=await $C(bi,t,e);return n&&await FE(r.user,{displayName:n}),await ru(Pt(Oe,"users",r.user.uid),{uid:r.user.uid,displayName:n||t.split("@")[0],email:t,avatarUrl:null,createdAt:ji()}),r.user}async function aj(t,e){return Yo(),(await BC(bi,t,e)).user}async function lj(){Yo(),await KC(bi)}async function uj(t){Yo(),await zC(bi,t)}async function cj(t,{displayName:e,photoURL:n}){Yo(),await FE(t,{displayName:e,photoURL:n}),await ru(Pt(Oe,"users",t.uid),{displayName:e??t.displayName,avatarUrl:n??t.photoURL},{merge:!0})}async function dj(t){Yo();const e=await qd(Pt(Oe,"users",t));return e.exists()?e.data():null}function hj(t){return!Jn||!bi?(t(null),()=>{}):GC(bi,t)}const ET=R.createContext(null);function fj({children:t}){const[e,n]=R.useState(null),[r,i]=R.useState(!0);R.useEffect(()=>{const o=hj(l=>{n(l),i(!1)});return()=>o&&o()},[]);const s={user:e,loading:r,signIn:aj,signUp:oj,signOut:lj,resetPassword:uj};return c.jsx(ET.Provider,{value:s,children:t})}function er(){const t=R.useContext(ET);if(!t)throw new Error("useAuth must be used within AuthProvider");return t}const pj="https://graphql.anilist.co",id=new Map,Yi=new Map,Rg="hoshii:al:",Wh=4*1024*1024,mj=500*1024,Nl={byId:{soft:6*60*60*1e3,hard:7*24*60*60*1e3},list:{soft:60*60*1e3,hard:24*60*60*1e3},schedule:{soft:30*60*1e3,hard:6*60*60*1e3},search:{soft:5*60*1e3,hard:30*60*1e3},suggestion:{soft:60*1e3,hard:10*60*1e3}};function gj(t){let e=5381;for(let n=0;n<t.length;n++)e=(e<<5)+e+t.charCodeAt(n)|0;return(e>>>0).toString(36)}function yj(t,e){const n={};if(e)for(const r of Object.keys(e).sort())e[r]!==void 0&&(n[r]=e[r]);return Rg+gj(t+"|"+JSON.stringify(n))}function vj(t){const e=id.get(t);if(e)return e;try{const n=localStorage.getItem(t);if(!n)return null;const r=JSON.parse(n);return!r||typeof r.t!="number"?(localStorage.removeItem(t),null):(id.set(t,r),r)}catch{return null}}function z_(t,e){const n={t:Date.now(),v:e};id.set(t,n);try{const r=JSON.stringify(n);if(r.length>mj)return;localStorage.setItem(t,r),$_()}catch(r){r&&(r.name==="QuotaExceededError"||r.code===22)&&$_(!0)}}function $_(t=!1){try{const e=[];let n=0;for(let s=0;s<localStorage.length;s++){const o=localStorage.key(s);if(!o||!o.startsWith(Rg))continue;const l=localStorage.getItem(o);if(l){n+=l.length;try{const u=JSON.parse(l);e.push({k:o,t:u.t||0,size:l.length})}catch{localStorage.removeItem(o)}}}if(!t&&n<Wh)return;e.sort((s,o)=>s.t-o.t);const r=t?Wh*.5:Wh*.8;let i=0;for(const s of e){if(n-i<r)break;localStorage.removeItem(s.k),i+=s.size}}catch{}}function _j(){id.clear();try{const t=[];for(let e=0;e<localStorage.length;e++){const n=localStorage.key(e);n&&n.startsWith(Rg)&&t.push(n)}t.forEach(e=>localStorage.removeItem(e))}catch{}}async function B_(t,e,n){var s;const r=await fetch(pj,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({query:t,variables:e}),signal:n});if(r.status===429){const o=r.headers.get("Retry-After")||60;throw new Error(`AniList rate limited. Try again in ~${o}s.`)}if(!r.ok)throw new Error(`AniList request failed (${r.status})`);const i=await r.json();if(i.errors)throw console.error("AniList GraphQL error:",i.errors),new Error(((s=i.errors[0])==null?void 0:s.message)||"AniList error");return i.data}async function Cg(t,e={},n={}){const{signal:r,ttl:i=Nl.list,skipCache:s=!1}=n,o=yj(t,e),l=Date.now();if(!s){const d=vj(o);if(d){const f=l-d.t;if(f<i.soft)return d.v;if(f<i.hard){if(!Yi.has(o)){const m=B_(t,e,null).then(g=>(z_(o,g),g)).catch(()=>{}).finally(()=>Yi.delete(o));Yi.set(o,m)}return d.v}}}if(!r&&Yi.has(o))return Yi.get(o);const u=B_(t,e,r).then(d=>(s||z_(o,d),d));return r||(Yi.set(o,u),u.finally(()=>Yi.delete(o))),u}const TT=`
  id
  title { romaji english native userPreferred }
  description
  coverImage { extraLarge large color }
  bannerImage
  format
  status
  season
  seasonYear
  episodes
  duration
  averageScore
  meanScore
  popularity
  favourites
  genres
  isAdult
  countryOfOrigin
  startDate { year month day }
  endDate { year month day }
  trailer { id site thumbnail }
  studios(isMain: true) { nodes { id name } }
  nextAiringEpisode { episode airingAt timeUntilAiring }
`,wj=`
  query (
    $page: Int,
    $perPage: Int,
    $search: String,
    $genre: String,
    $tag: String,
    $year: Int,
    $season: MediaSeason,
    $status: MediaStatus,
    $format: MediaFormat,
    $sort: [MediaSort],
    $averageScoreGreater: Int,
    $country: CountryCode,
    $isAdult: Boolean
  ) {
    Page(page: $page, perPage: $perPage) {
      pageInfo { total currentPage lastPage hasNextPage perPage }
      media(
        search: $search,
        genre: $genre,
        tag: $tag,
        seasonYear: $year,
        season: $season,
        status: $status,
        format: $format,
        sort: $sort,
        averageScore_greater: $averageScoreGreater,
        countryOfOrigin: $country,
        isAdult: $isAdult,
        type: ANIME
      ) {
        ${TT}
      }
    }
  }
`;async function tr({query:t,page:e=1,perPage:n=30,genre:r,tag:i,year:s,season:o,status:l,format:u,sort:d=["POPULARITY_DESC"],minimumScore:f,country:m,isAdult:g=!1,signal:I,isSuggestion:C=!1,noCache:b=!1}={}){const P={page:e,perPage:n,search:t||void 0,genre:r||void 0,tag:i||void 0,year:s||void 0,season:o||void 0,status:l||void 0,format:u||void 0,sort:d,averageScoreGreater:f||void 0,country:m||void 0,isAdult:g},x=C?Nl.suggestion:Nl.search;return(await Cg(wj,P,{signal:I,ttl:x,skipCache:b})).Page}async function IT(t){const e=`
    query ($id: Int) {
      Media(id: $id, type: ANIME) {
        ${TT}
        relations {
          edges {
            relationType
            node {
              id
              title { romaji english userPreferred }
              coverImage { large extraLarge }
              format
              seasonYear
              episodes
              averageScore
            }
          }
        }
        recommendations(sort: RATING_DESC, perPage: 12) {
          nodes {
            mediaRecommendation {
              id
              title { romaji english userPreferred }
              coverImage { large extraLarge }
              format
              seasonYear
              episodes
              averageScore
            }
          }
        }
        externalLinks { id url site type }
      }
    }
  `;return(await Cg(e,{id:Number(t)},{ttl:Nl.byId})).Media}async function sd(t=1,e=30){return tr({page:t,perPage:e,sort:["TRENDING_DESC"]})}async function ST(t=1,e=30){return tr({page:t,perPage:e,sort:["POPULARITY_DESC"]})}async function AT(t=1,e=30){return tr({page:t,perPage:e,sort:["SCORE_DESC"]})}async function kT(t=1,e=30){const n=new Date().getFullYear();return tr({page:t,perPage:e,year:n,sort:["POPULARITY_DESC"]})}async function xj(t=1,e=30){return tr({page:t,perPage:e,status:"RELEASING",sort:["POPULARITY_DESC"]})}async function Ej(t=1,e=30){return tr({page:t,perPage:e,status:"NOT_YET_RELEASED",sort:["POPULARITY_DESC"]})}async function Tj(t=1,e=30){return tr({page:t,perPage:e,format:"MOVIE",sort:["POPULARITY_DESC"]})}async function Ij({page:t=1,perPage:e=50,airingAtGreater:n,airingAtLesser:r}={}){const i=`
    query ($page: Int, $perPage: Int, $airingAtGreater: Int, $airingAtLesser: Int) {
      Page(page: $page, perPage: $perPage) {
        pageInfo { total currentPage lastPage hasNextPage }
        airingSchedules(
          airingAt_greater: $airingAtGreater,
          airingAt_lesser: $airingAtLesser,
          sort: TIME
        ) {
          id
          episode
          airingAt
          timeUntilAiring
          media {
            id
            title { romaji english userPreferred }
            coverImage { large extraLarge }
            format
            status
            episodes
            averageScore
            genres
          }
        }
      }
    }
  `,o=u=>u?Math.floor(u/3600)*3600:void 0;return(await Cg(i,{page:t,perPage:e,airingAtGreater:o(n),airingAtLesser:o(r)},{ttl:Nl.schedule})).Page}async function Sj(){const t=Math.floor(Math.random()*5)+1,n=(await tr({page:t,perPage:30,sort:["POPULARITY_DESC"]})).media||[];if(!n.length)throw new Error("No anime found");return n[Math.floor(Math.random()*n.length)]}const bT=["Action","Adventure","Comedy","Drama","Ecchi","Fantasy","Horror","Mahou Shoujo","Mecha","Music","Mystery","Psychological","Romance","Sci-Fi","Slice of Life","Sports","Supernatural","Thriller"],Aj=["TV","TV_SHORT","MOVIE","SPECIAL","OVA","ONA","MUSIC"],kj=["WINTER","SPRING","SUMMER","FALL"],bj=[{value:"POPULARITY_DESC",label:"Popularity"},{value:"TRENDING_DESC",label:"Trending"},{value:"SCORE_DESC",label:"Highest Rated"},{value:"START_DATE_DESC",label:"Newest"},{value:"TITLE_ROMAJI",label:"Title A-Z"}];function su({open:t,onClose:e,initialMode:n="login"}){const{signIn:r,signUp:i,resetPassword:s}=er(),[o,l]=R.useState(n),[u,d]=R.useState(""),[f,m]=R.useState(""),[g,I]=R.useState(""),[C,b]=R.useState(!1),[P,x]=R.useState(""),[_,A]=R.useState("");if(R.useEffect(()=>{t&&(l(n),x(""),A(""))},[t,n]),R.useEffect(()=>{const M=D=>D.key==="Escape"&&e();return document.addEventListener("keydown",M),()=>document.removeEventListener("keydown",M)},[e]),!t)return null;const O=async M=>{M.preventDefault(),x(""),A(""),b(!0);try{if(!Jn)throw new Error("Firebase not configured. See README.");o==="login"?(await r(u,f),e()):o==="signup"?(await i(u,f,g),e()):o==="reset"&&(await s(u),A("Password reset email sent."))}catch(D){x(D.message||"Something went wrong")}finally{b(!1)}};return c.jsx("div",{className:"modal-backdrop",onClick:e,children:c.jsxs("div",{className:"modal glass",onClick:M=>M.stopPropagation(),role:"dialog","aria-modal":"true",children:[c.jsxs("div",{className:"modal-head",children:[c.jsxs("h2",{children:[o==="login"&&"Welcome back",o==="signup"&&"Create your account",o==="reset"&&"Reset password"]}),c.jsx("button",{className:"icon-btn",onClick:e,"aria-label":"Close",children:c.jsx(Ul,{size:18})})]}),!Jn&&c.jsxs("div",{className:"notice",children:["Firebase isn't configured yet. Add your keys to ",c.jsx("code",{children:".env"})," — see the README for setup steps."]}),c.jsxs("form",{onSubmit:O,className:"modal-form",children:[o==="signup"&&c.jsxs("label",{children:["Display name",c.jsx("input",{value:g,onChange:M=>I(M.target.value),placeholder:"Your name",required:!0,minLength:2})]}),c.jsxs("label",{children:["Email",c.jsx("input",{type:"email",value:u,onChange:M=>d(M.target.value),placeholder:"you@example.com",required:!0})]}),o!=="reset"&&c.jsxs("label",{children:["Password",c.jsx("input",{type:"password",value:f,onChange:M=>m(M.target.value),placeholder:"••••••••",required:!0,minLength:6})]}),P&&c.jsx("div",{className:"error",children:P}),_&&c.jsx("div",{className:"info",children:_}),c.jsxs("button",{className:"btn primary full",disabled:C,type:"submit",children:[C&&c.jsx(_n,{size:16,className:"spin"}),o==="login"?"Log In":o==="signup"?"Create Account":"Send Reset Email"]})]}),c.jsxs("div",{className:"modal-foot",children:[o==="login"&&c.jsxs(c.Fragment,{children:[c.jsx("button",{className:"link-btn",onClick:()=>l("reset"),children:"Forgot password?"}),c.jsx("span",{className:"muted",children:"New here? "}),c.jsx("button",{className:"link-btn accent",onClick:()=>l("signup"),children:"Sign up"})]}),o==="signup"&&c.jsxs(c.Fragment,{children:[c.jsx("span",{className:"muted",children:"Have an account? "}),c.jsx("button",{className:"link-btn accent",onClick:()=>l("login"),children:"Log in"})]}),o==="reset"&&c.jsx("button",{className:"link-btn accent",onClick:()=>l("login"),children:"Back to login"})]}),c.jsx("style",{children:`
          .modal-backdrop {
            position: fixed; inset: 0; z-index: 300;
            background: rgba(0,0,0,0.6); backdrop-filter: blur(8px);
            display: flex; align-items: center; justify-content: center; padding: 20px;
            animation: fadeIn 0.2s ease;
          }
          .modal {
            width: 100%; max-width: 420px; border-radius: 16px;
            padding: 24px; animation: fadeIn 0.25s ease;
          }
          .modal-head { display: flex; align-items: center; justify-content: space-between; margin-bottom: 16px; }
          .modal-head h2 { margin: 0; font-size: 20px; }
          .modal-form { display: flex; flex-direction: column; gap: 14px; }
          .modal-form label { display: flex; flex-direction: column; gap: 6px; font-size: 13px; color: var(--text-dim); font-weight: 500; }
          .modal-form input {
            background: var(--panel-2); border: 1px solid var(--border);
            border-radius: 10px; padding: 12px 14px; color: var(--text);
            font-size: 14px; outline: none; transition: var(--transition);
          }
          .modal-form input:focus { border-color: var(--accent); box-shadow: 0 0 0 3px var(--accent-soft); }
          .full { width: 100%; justify-content: center; padding: 12px; }
          .error { padding: 10px; background: rgba(248,113,113,0.12); border: 1px solid rgba(248,113,113,0.35); color: var(--danger); border-radius: 8px; font-size: 13px; }
          .info { padding: 10px; background: var(--accent-soft); border: 1px solid var(--accent); border-radius: 8px; font-size: 13px; color: var(--accent); }
          .notice { padding: 10px; background: rgba(96,165,250,0.1); border: 1px solid rgba(96,165,250,0.3); border-radius: 8px; font-size: 12px; color: var(--blue); margin-bottom: 16px; }
          .notice code { background: rgba(0,0,0,0.3); padding: 1px 5px; border-radius: 4px; }
          .modal-foot { margin-top: 18px; display: flex; align-items: center; justify-content: center; gap: 6px; font-size: 13px; }
          .link-btn { background: transparent; border: none; color: var(--text-dim); font-size: 13px; padding: 2px; }
          .link-btn.accent { color: var(--accent); font-weight: 600; }
          .link-btn:hover { text-decoration: underline; }
          .spin { animation: spin 0.9s linear infinite; }
          @keyframes spin { to { transform: rotate(360deg); } }
        `})]})})}function Rj({onMenu:t}){const e=jr(),{user:n,signOut:r}=er(),[i,s]=R.useState(""),[o,l]=R.useState([]),[u,d]=R.useState(!1),[f,m]=R.useState(!1),[g,I]=R.useState(!1),[C,b]=R.useState(-1),P=R.useRef(null),x=R.useRef(null),_=R.useRef(null);R.useEffect(()=>{if(!i.trim()){l([]),d(!1);return}const D=setTimeout(async()=>{_.current&&_.current.abort();const T=new AbortController;_.current=T;try{const y=await tr({query:i,perPage:8,signal:T.signal,isSuggestion:!0});l(y.media||[]),d(!0),b(-1)}catch(y){y.name!=="AbortError"&&console.warn(y)}},300);return()=>clearTimeout(D)},[i]),R.useEffect(()=>{const D=T=>{P.current&&!P.current.contains(T.target)&&d(!1),x.current&&!x.current.contains(T.target)&&m(!1)};return document.addEventListener("mousedown",D),()=>document.removeEventListener("mousedown",D)},[]),R.useEffect(()=>{const D=T=>{var y,E;T.key==="/"&&!["INPUT","TEXTAREA"].includes((y=document.activeElement)==null?void 0:y.tagName)&&(T.preventDefault(),(E=document.getElementById("hoshii-search"))==null||E.focus())};return document.addEventListener("keydown",D),()=>document.removeEventListener("keydown",D)},[]);const A=D=>{D==null||D.preventDefault(),i.trim()&&(e(`/search?query=${encodeURIComponent(i.trim())}`),d(!1))},O=D=>{if(!(!u||!o.length))if(D.key==="ArrowDown")D.preventDefault(),b(T=>Math.min(T+1,o.length-1));else if(D.key==="ArrowUp")D.preventDefault(),b(T=>Math.max(T-1,0));else if(D.key==="Enter"&&C>=0){D.preventDefault();const T=o[C];e(`/anime/${T.id}`),d(!1),s("")}else D.key==="Escape"&&d(!1)},M=async()=>{try{const D=await Sj();D&&e(`/anime/${D.id}`)}catch(D){console.warn(D)}};return c.jsxs(c.Fragment,{children:[c.jsxs("header",{className:"nav",children:[c.jsx("button",{className:"icon-btn",onClick:t,"aria-label":"Open menu",children:c.jsx(eb,{size:22})}),c.jsxs(Pe,{to:"/",className:"brand","aria-label":"Hoshii home",children:[c.jsxs("svg",{width:"26",height:"26",viewBox:"0 0 64 64","aria-hidden":"true",children:[c.jsx("path",{d:"M20 14v36M20 32h14M44 14v36",stroke:"var(--accent)",strokeWidth:"6",strokeLinecap:"round",fill:"none"}),c.jsx("circle",{cx:"44",cy:"20",r:"3",fill:"var(--accent)"})]}),c.jsxs("span",{className:"brand-text",children:["HOSHII",c.jsx("em",{children:".tv"})]})]}),c.jsxs("form",{className:"nav-search",onSubmit:A,ref:P,children:[c.jsx(zc,{size:18,className:"search-icon"}),c.jsx("input",{id:"hoshii-search",type:"text",placeholder:"Search Anime",value:i,onChange:D=>s(D.target.value),onFocus:()=>i&&d(!0),onKeyDown:O,autoComplete:"off","aria-label":"Search anime"}),i&&c.jsx("button",{type:"button",className:"icon-btn sm","aria-label":"Clear",onClick:()=>{s(""),l([]),d(!1)},children:c.jsx(Ul,{size:16})}),c.jsx("span",{className:"kbd",children:"/"}),c.jsx("button",{type:"submit",className:"icon-btn sm","aria-label":"Search",children:c.jsx(zc,{size:16})}),c.jsx("button",{type:"button",className:"icon-btn sm","aria-label":"Random anime",onClick:M,children:c.jsx(qk,{size:16})}),u&&o.length>0&&c.jsx("div",{className:"suggest glass",children:o.map((D,T)=>{var y,E,S,N;return c.jsxs("button",{className:`suggest-row ${T===C?"active":""}`,onMouseEnter:()=>b(T),onClick:()=>{e(`/anime/${D.id}`),d(!1),s("")},children:[c.jsx("img",{src:(y=D.coverImage)==null?void 0:y.large,alt:"",loading:"lazy"}),c.jsxs("div",{className:"suggest-info",children:[c.jsx("span",{className:"suggest-title",children:((E=D.title)==null?void 0:E.english)||((S=D.title)==null?void 0:S.userPreferred)||((N=D.title)==null?void 0:N.romaji)}),c.jsxs("span",{className:"suggest-meta",children:[D.seasonYear||"—"," · ",D.format||"—",D.averageScore?` · ★ ${D.averageScore}`:""]})]})]},D.id)})})]}),c.jsx("div",{className:"nav-right",ref:x,children:n?c.jsxs(c.Fragment,{children:[c.jsxs("button",{className:"avatar-btn",onClick:()=>m(D=>!D),"aria-label":"Open profile menu",children:[n.photoURL?c.jsx("img",{src:n.photoURL,alt:""}):c.jsx("span",{className:"avatar-fallback",children:(n.displayName||n.email||"U")[0].toUpperCase()}),c.jsx(Ad,{size:14})]}),f&&c.jsxs("div",{className:"dropdown glass",onClick:()=>m(!1),children:[c.jsxs(Pe,{to:"/profile",className:"dropdown-item",children:[c.jsx(rE,{size:16})," Profile"]}),c.jsxs(Pe,{to:"/history",className:"dropdown-item",children:[c.jsx(Yx,{size:16})," Watch History"]}),c.jsxs(Pe,{to:"/watchlist",className:"dropdown-item",children:[c.jsx(qx,{size:16})," Watchlist"]}),c.jsxs(Pe,{to:"/settings",className:"dropdown-item",children:[c.jsx(eE,{size:16})," Settings"]}),c.jsxs("button",{className:"dropdown-item danger",onClick:async()=>{await r(),e("/")},children:[c.jsx(Jx,{size:16})," Log Out"]})]})]}):c.jsxs("div",{className:"auth-buttons",children:[c.jsxs("button",{className:"btn ghost sm",onClick:()=>I(!0),children:[c.jsx(Xx,{size:16})," Log In"]}),c.jsxs("button",{className:"btn primary sm",onClick:()=>I(!0),children:[c.jsx(nE,{size:16})," Sign Up"]})]})})]}),c.jsx(su,{open:g,onClose:()=>I(!1)}),c.jsx("style",{children:`
        .nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          display: flex; align-items: center; gap: 16px;
          height: var(--navbar-h);
          padding: 0 20px;
          background: rgba(8,8,12,0.75);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--border-soft);
        }
        .icon-btn {
          display: inline-flex; align-items: center; justify-content: center;
          width: 38px; height: 38px; border-radius: 10px;
          background: transparent; border: 1px solid transparent;
          color: var(--text); transition: var(--transition);
        }
        .icon-btn:hover { background: var(--panel-2); border-color: var(--border); }
        .icon-btn.sm { width: 30px; height: 30px; }
        .brand { display: flex; align-items: center; gap: 8px; font-weight: 800; letter-spacing: 0.5px; }
        .brand-text { font-size: 18px; }
        .brand-text em { color: var(--accent); font-style: normal; font-weight: 600; font-size: 11px; }
        .nav-search {
          position: relative; flex: 1; max-width: 720px; margin: 0 auto;
          display: flex; align-items: center; gap: 6px;
          background: var(--panel); border: 1px solid var(--border);
          border-radius: 12px; padding: 0 8px 0 14px; height: 44px;
          transition: var(--transition);
        }
        .nav-search:focus-within { border-color: var(--accent); box-shadow: 0 0 0 3px var(--accent-soft); }
        .nav-search input {
          flex: 1; background: transparent; border: none; outline: none;
          color: var(--text); font-size: 14px;
        }
        .search-icon { color: var(--text-muted); flex-shrink: 0; }
        .kbd {
          font-size: 11px; font-weight: 600; padding: 2px 6px; border-radius: 6px;
          background: var(--panel-2); color: var(--text-muted);
          border: 1px solid var(--border);
        }
        .suggest {
          position: absolute; top: calc(100% + 8px); left: 0; right: 0;
          border-radius: 12px; padding: 6px; z-index: 200;
          max-height: 420px; overflow-y: auto;
          animation: fadeIn 0.15s ease;
        }
        .suggest-row {
          display: flex; gap: 10px; align-items: center;
          padding: 8px; width: 100%; text-align: left;
          background: transparent; border: none; color: var(--text);
          border-radius: 8px; transition: var(--transition);
        }
        .suggest-row:hover, .suggest-row.active { background: var(--accent-soft); }
        .suggest-row img { width: 40px; height: 56px; object-fit: cover; border-radius: 6px; }
        .suggest-info { display: flex; flex-direction: column; gap: 2px; min-width: 0; }
        .suggest-title { font-weight: 600; font-size: 13px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
        .suggest-meta { font-size: 11px; color: var(--text-muted); }
        .nav-right { display: flex; align-items: center; gap: 8px; position: relative; }
        .auth-buttons { display: flex; gap: 6px; }
        .btn.sm { padding: 8px 12px; font-size: 13px; }
        .avatar-btn {
          display: flex; align-items: center; gap: 6px;
          background: var(--panel); border: 1px solid var(--border);
          border-radius: 10px; padding: 4px 8px 4px 4px; color: var(--text);
          transition: var(--transition);
        }
        .avatar-btn:hover { border-color: var(--accent); }
        .avatar-btn img { width: 28px; height: 28px; border-radius: 8px; object-fit: cover; }
        .avatar-fallback {
          width: 28px; height: 28px; border-radius: 8px;
          background: linear-gradient(135deg, var(--accent-strong), var(--accent));
          color: #0b0b12; font-weight: 700;
          display: flex; align-items: center; justify-content: center; font-size: 13px;
        }
        .dropdown {
          position: absolute; right: 0; top: calc(100% + 8px);
          min-width: 220px; padding: 6px; border-radius: 12px; z-index: 200;
          animation: fadeIn 0.15s ease;
        }
        .dropdown-item {
          display: flex; align-items: center; gap: 10px;
          padding: 10px 12px; border-radius: 8px;
          background: transparent; border: none; color: var(--text);
          font-size: 13px; font-weight: 500; width: 100%; text-align: left;
          transition: var(--transition);
        }
        .dropdown-item:hover { background: var(--accent-soft); }
        .dropdown-item.danger { color: var(--danger); }
        @media (max-width: 720px) {
          .nav { padding: 0 12px; gap: 8px; }
          .brand-text { display: none; }
          .auth-buttons .btn span { display: none; }
          .kbd { display: none; }
        }
      `})]})}const Cj=[{to:"/",label:"Home",icon:Qk,end:!0},{to:"/trending",label:"Trending",icon:ub},{to:"/search",label:"Search",icon:zc},{to:"/seasonal",label:"Seasonal Anime",icon:Wk},{to:"/schedule",label:"Schedule",icon:Gx},{to:"/history",label:"Watch History",icon:Yx},{to:"/watchlist",label:"Watchlist",icon:qx},{to:"/settings",label:"Settings",icon:eE},{to:"/profile",label:"Profile",icon:rE}];function Pj({open:t,onClose:e}){const{user:n}=er();return R.useEffect(()=>{const r=i=>i.key==="Escape"&&e();return document.addEventListener("keydown",r),()=>document.removeEventListener("keydown",r)},[e]),c.jsxs(c.Fragment,{children:[c.jsx("div",{className:`sidebar-backdrop ${t?"show":""}`,onClick:e,"aria-hidden":"true"}),c.jsxs("aside",{className:`sidebar ${t?"open":""}`,"aria-hidden":!t,children:[c.jsxs("div",{className:"sidebar-head",children:[c.jsxs("div",{className:"sidebar-brand",children:[c.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 64 64","aria-hidden":"true",children:[c.jsx("path",{d:"M20 14v36M20 32h14M44 14v36",stroke:"var(--accent)",strokeWidth:"6",strokeLinecap:"round",fill:"none"}),c.jsx("circle",{cx:"44",cy:"20",r:"3",fill:"var(--accent)"})]}),c.jsx("span",{children:"HOSHII"})]}),c.jsx("button",{className:"icon-btn",onClick:e,"aria-label":"Close menu",children:c.jsx(Ul,{size:18})})]}),c.jsx("nav",{className:"sidebar-nav",children:Cj.map(({to:r,label:i,icon:s,end:o})=>c.jsxs(Lk,{to:r,end:o,className:({isActive:l})=>`sidebar-link ${l?"active":""}`,onClick:e,children:[c.jsx(s,{size:18}),c.jsx("span",{children:i})]},r))}),c.jsxs("div",{className:"sidebar-foot",children:[c.jsx("div",{className:"sidebar-user",children:n?c.jsxs(c.Fragment,{children:[c.jsx("div",{className:"avatar-sm",children:n.photoURL?c.jsx("img",{src:n.photoURL,alt:""}):(n.displayName||n.email||"U")[0].toUpperCase()}),c.jsxs("div",{className:"meta",children:[c.jsx("span",{className:"name",children:n.displayName||"User"}),c.jsx("span",{className:"email",children:n.email})]})]}):c.jsx("span",{className:"muted",children:"Not signed in"})}),c.jsx("div",{className:"version",children:"Hoshii · v1.0.0"})]})]}),c.jsx("style",{children:`
        .sidebar-backdrop {
          position: fixed; inset: 0; background: rgba(0,0,0,0.55);
          backdrop-filter: blur(6px);
          opacity: 0; pointer-events: none; transition: var(--transition); z-index: 150;
        }
        .sidebar-backdrop.show { opacity: 1; pointer-events: auto; }
        .sidebar {
          position: fixed; top: 0; left: 0; bottom: 0; width: 280px;
          background: rgba(14,14,20,0.96);
          backdrop-filter: blur(24px);
          border-right: 1px solid var(--border);
          transform: translateX(-100%);
          transition: transform 0.3s cubic-bezier(.4,0,.2,1);
          display: flex; flex-direction: column; z-index: 200;
        }
        .sidebar.open { transform: translateX(0); }
        .sidebar-head {
          display: flex; align-items: center; justify-content: space-between;
          padding: 16px 20px; border-bottom: 1px solid var(--border-soft);
        }
        .sidebar-brand { display: flex; align-items: center; gap: 10px; font-weight: 800; letter-spacing: 0.5px; }
        .sidebar-nav { flex: 1; padding: 12px; display: flex; flex-direction: column; gap: 4px; overflow-y: auto; }
        .sidebar-link {
          display: flex; align-items: center; gap: 12px;
          padding: 11px 14px; border-radius: 10px;
          color: var(--text-dim); font-weight: 600; font-size: 14px;
          border-left: 2px solid transparent;
          transition: var(--transition);
        }
        .sidebar-link:hover { background: var(--panel); color: var(--text); }
        .sidebar-link.active {
          background: var(--accent-soft); color: var(--text);
          border-left-color: var(--accent);
        }
        .sidebar-foot {
          padding: 14px 20px; border-top: 1px solid var(--border-soft);
          display: flex; flex-direction: column; gap: 12px;
        }
        .sidebar-user { display: flex; align-items: center; gap: 10px; }
        .avatar-sm {
          width: 34px; height: 34px; border-radius: 10px;
          background: linear-gradient(135deg, var(--accent-strong), var(--accent));
          color: #0b0b12; font-weight: 700; display: flex; align-items: center; justify-content: center;
          overflow: hidden;
        }
        .avatar-sm img { width: 100%; height: 100%; object-fit: cover; }
        .sidebar-user .meta { display: flex; flex-direction: column; min-width: 0; }
        .sidebar-user .name { font-size: 13px; font-weight: 600; }
        .sidebar-user .email { font-size: 11px; color: var(--text-muted); overflow: hidden; text-overflow: ellipsis; }
        .version { font-size: 11px; color: var(--text-muted); text-align: center; }
      `})]})}function Nj(){return c.jsxs("footer",{className:"footer",children:[c.jsxs("div",{className:"container footer-grid",children:[c.jsxs("div",{children:[c.jsxs("div",{className:"footer-brand",children:[c.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 64 64","aria-hidden":"true",children:[c.jsx("path",{d:"M20 14v36M20 32h14M44 14v36",stroke:"var(--accent)",strokeWidth:"6",strokeLinecap:"round",fill:"none"}),c.jsx("circle",{cx:"44",cy:"20",r:"3",fill:"var(--accent)"})]}),c.jsx("span",{children:"HOSHII"})]}),c.jsx("p",{className:"muted footer-desc",children:"Hoshii is an anime discovery interface. Anime metadata is provided by the AniList GraphQL API. Hoshii does not host or stream any video files."})]}),c.jsxs("div",{children:[c.jsx("h4",{children:"Browse"}),c.jsx(Pe,{to:"/",children:"Home"}),c.jsx(Pe,{to:"/trending",children:"Trending"}),c.jsx(Pe,{to:"/schedule",children:"Schedule"})]}),c.jsxs("div",{children:[c.jsx("h4",{children:"Account"}),c.jsx(Pe,{to:"/profile",children:"Profile"}),c.jsx(Pe,{to:"/watchlist",children:"Watchlist"}),c.jsx(Pe,{to:"/settings",children:"Settings"})]}),c.jsxs("div",{children:[c.jsx("h4",{children:"About"}),c.jsx("a",{href:"https://anilist.co",target:"_blank",rel:"noreferrer",children:"AniList"}),c.jsx("a",{href:"https://github.com",target:"_blank",rel:"noreferrer",children:"GitHub"}),c.jsx(Pe,{to:"/search",children:"Search"})]})]}),c.jsxs("div",{className:"container footer-bottom",children:[c.jsxs("span",{className:"muted-2",children:["© ",new Date().getFullYear()," Hoshii"]}),c.jsx("span",{className:"muted-2",children:"Data provided by AniList"})]}),c.jsx("style",{children:`
        .footer {
          margin-top: 60px;
          border-top: 1px solid var(--border-soft);
          background: var(--bg-soft);
          padding: 40px 0 20px;
        }
        .footer-grid {
          display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 32px;
        }
        .footer-grid h4 { font-size: 13px; margin: 0 0 12px; letter-spacing: 0.05em; text-transform: uppercase; color: var(--text-dim); }
        .footer-grid a { display: block; padding: 4px 0; color: var(--text-dim); font-size: 13px; }
        .footer-grid a:hover { color: var(--accent); }
        .footer-brand { display: flex; align-items: center; gap: 10px; font-weight: 800; margin-bottom: 12px; }
        .footer-desc { font-size: 13px; max-width: 420px; line-height: 1.6; }
        .footer-bottom {
          margin-top: 32px; padding-top: 20px; border-top: 1px solid var(--border-soft);
          display: flex; justify-content: space-between; font-size: 12px;
        }
        @media (max-width: 720px) {
          .footer-grid { grid-template-columns: 1fr 1fr; }
        }
      `})]})}function Dj({children:t}){const[e,n]=R.useState(!1);return c.jsxs(c.Fragment,{children:[c.jsx(Rj,{onMenu:()=>n(!0)}),c.jsx(Pj,{open:e,onClose:()=>n(!1)}),c.jsx("main",{children:t}),c.jsx(Nj,{})]})}function jj({items:t=[]}){var I,C,b,P;const e=jr(),[n,r]=R.useState(0),[i,s]=R.useState(!1),[o,l]=R.useState(!1),u=R.useRef(null);if(R.useEffect(()=>{if(!(i||o||t.length<=1))return u.current=setInterval(()=>{r(x=>(x+1)%t.length)},8e3),()=>clearInterval(u.current)},[i,o,t.length]),!t.length)return null;const d=t[n],f=((I=d.title)==null?void 0:I.userPreferred)||((C=d.title)==null?void 0:C.english)||((b=d.title)==null?void 0:b.romaji),m=d.bannerImage||((P=d.coverImage)==null?void 0:P.extraLarge),g=(d.description||"").replace(/<[^>]*>/g,"").replace(/&quot;/g,'"').replace(/&amp;/g,"&");return c.jsxs("div",{className:"hero",onMouseEnter:()=>l(!0),onMouseLeave:()=>l(!1),children:[c.jsx("div",{className:"hero-bg",style:{backgroundImage:`url(${m})`}}),c.jsx("div",{className:"hero-shade"}),c.jsxs("div",{className:"hero-content container",children:[c.jsxs("div",{className:"hero-meta",children:[d.format&&c.jsx("span",{className:"pill",children:d.format}),d.averageScore&&c.jsxs("span",{className:"pill gold",children:[c.jsx(kd,{size:12})," ",d.averageScore]}),d.duration&&c.jsxs("span",{className:"pill",children:[c.jsx(Kx,{size:12})," ",d.duration," mins"]})]}),c.jsx("h1",{children:f}),c.jsxs("p",{className:"hero-desc",children:[g.slice(0,320),g.length>320?"…":""]}),c.jsxs("div",{className:"hero-actions",children:[c.jsxs("button",{className:"btn",onClick:()=>e(`/anime/${d.id}`),children:[c.jsx(Yk,{size:16})," Details"]}),c.jsxs("button",{className:"btn primary",onClick:()=>e(`/watch/${d.id}`),children:[c.jsx(Im,{size:16})," Watch Now"]})]})]}),t.length>1&&c.jsxs(c.Fragment,{children:[c.jsx("button",{className:"hero-nav left","aria-label":"Previous",onClick:()=>{r(x=>(x-1+t.length)%t.length),s(!0)},children:c.jsx(Vl,{size:22})}),c.jsx("button",{className:"hero-nav right","aria-label":"Next",onClick:()=>{r(x=>(x+1)%t.length),s(!0)},children:c.jsx($o,{size:22})}),c.jsx("div",{className:"hero-dots",children:t.map((x,_)=>c.jsx("button",{className:_===n?"active":"",onClick:()=>{r(_),s(!0)},"aria-label":`Go to slide ${_+1}`},_))})]}),c.jsx("style",{children:`
        .hero {
          position: relative; width: 100%; aspect-ratio: 21/9; min-height: 380px; max-height: 620px;
          overflow: hidden; border-bottom: 1px solid var(--border-soft);
        }
        .hero-bg {
          position: absolute; inset: 0;
          background-size: cover; background-position: center;
          filter: blur(1px);
          transform: scale(1.03);
        }
        .hero-shade {
          position: absolute; inset: 0;
          background:
            linear-gradient(to top, rgba(8,8,12,0.98) 0%, rgba(8,8,12,0.5) 40%, rgba(8,8,12,0.2) 70%, rgba(8,8,12,0.7) 100%),
            linear-gradient(to right, rgba(8,8,12,0.85) 0%, transparent 60%);
        }
        .hero-content {
          position: absolute; left: 0; right: 0; bottom: 40px;
          max-width: 720px; padding: 0 40px;
          display: flex; flex-direction: column; gap: 12px;
          animation: fadeIn 0.5s ease;
        }
        .hero-meta { display: flex; gap: 8px; flex-wrap: wrap; }
        .pill {
          display: inline-flex; align-items: center; gap: 5px;
          background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.15);
          color: #fff; font-size: 12px; font-weight: 600;
          padding: 5px 10px; border-radius: 999px; backdrop-filter: blur(8px);
        }
        .pill.gold { color: #fcd34d; border-color: rgba(252,211,77,0.3); }
        .hero h1 {
          margin: 0; font-size: clamp(28px, 4.5vw, 52px); font-weight: 800;
          letter-spacing: -0.02em; line-height: 1.05;
          text-shadow: 0 4px 30px rgba(0,0,0,0.7);
        }
        .hero-desc { margin: 0; font-size: 14px; line-height: 1.6; color: #d6d6e2; max-width: 640px; }
        .hero-actions { display: flex; gap: 10px; margin-top: 8px; flex-wrap: wrap; }
        .hero-nav {
          position: absolute; top: 50%; transform: translateY(-50%);
          background: rgba(0,0,0,0.5); color: #fff; border: 1px solid rgba(255,255,255,0.15);
          width: 44px; height: 44px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          opacity: 0; transition: opacity 0.25s;
        }
        .hero:hover .hero-nav { opacity: 1; }
        .hero-nav.left { left: 16px; }
        .hero-nav.right { right: 16px; }
        .hero-nav:hover { background: var(--accent); color: #0b0b12; }
        .hero-dots {
          position: absolute; bottom: 18px; left: 50%; transform: translateX(-50%);
          display: flex; gap: 6px;
        }
        .hero-dots button {
          width: 24px; height: 4px; border-radius: 4px; border: none;
          background: rgba(255,255,255,0.25); transition: var(--transition);
        }
        .hero-dots button.active { background: var(--accent); width: 32px; }
        @media (max-width: 720px) {
          .hero { aspect-ratio: 4/5; min-height: 460px; }
          .hero-content { padding: 0 20px; bottom: 20px; }
          .hero-desc { display: -webkit-box; -webkit-line-clamp: 4; -webkit-box-orient: vertical; overflow: hidden; }
        }
      `})]})}function Lj(){const t=jr(),e=R.useRef(null),n=r=>{e.current&&e.current.scrollBy({left:r*400,behavior:"smooth"})};return c.jsxs("div",{className:"genre-bar",children:[c.jsx("button",{className:"genre-nav",onClick:()=>n(-1),"aria-label":"Scroll left",children:c.jsx(Vl,{size:18})}),c.jsx("div",{className:"genre-scroll",ref:e,children:bT.map(r=>c.jsx("button",{className:"genre-chip",onClick:()=>t(`/search?genre=${encodeURIComponent(r)}`),children:r},r))}),c.jsx("button",{className:"genre-nav",onClick:()=>n(1),"aria-label":"Scroll right",children:c.jsx($o,{size:18})}),c.jsx("style",{children:`
        .genre-bar {
          display: flex; align-items: center; gap: 8px;
          margin: 24px 0 8px;
        }
        .genre-scroll {
          flex: 1; display: flex; gap: 8px; overflow-x: auto;
          scrollbar-width: none; scroll-behavior: smooth;
        }
        .genre-scroll::-webkit-scrollbar { display: none; }
        .genre-chip {
          flex: 0 0 auto; padding: 8px 16px; border-radius: 999px;
          background: var(--panel); border: 1px solid var(--border);
          color: var(--text-dim); font-weight: 600; font-size: 13px;
          transition: var(--transition);
        }
        .genre-chip:hover {
          background: var(--accent-soft); color: var(--text); border-color: var(--accent);
          transform: translateY(-1px);
        }
        .genre-nav {
          flex-shrink: 0; width: 34px; height: 34px; border-radius: 50%;
          background: var(--panel); border: 1px solid var(--border); color: var(--text);
          display: flex; align-items: center; justify-content: center;
          transition: var(--transition);
        }
        .genre-nav:hover { background: var(--accent-soft); border-color: var(--accent); }
      `})]})}function od({anime:t,showMeta:e=!0}){var i,s,o,l,u,d;if(!t)return null;const n=((i=t.title)==null?void 0:i.english)||((s=t.title)==null?void 0:s.userPreferred)||((o=t.title)==null?void 0:o.romaji)||"Untitled",r=((l=t.coverImage)==null?void 0:l.extraLarge)||((u=t.coverImage)==null?void 0:u.large)||((d=t.coverImage)==null?void 0:d.medium);return c.jsxs(Pe,{to:`/anime/${t.id}`,className:"anime-card",children:[c.jsxs("div",{className:"poster",children:[r?c.jsx("img",{src:r,alt:n,loading:"lazy"}):c.jsx("div",{className:"poster-fallback",children:n[0]}),c.jsx("div",{className:"overlay",children:c.jsxs("span",{className:"quick-view",children:[c.jsx(Im,{size:14})," Quick View"]})}),t.averageScore?c.jsxs("span",{className:"score",children:[c.jsx(kd,{size:12})," ",t.averageScore]}):null]}),c.jsxs("div",{className:"info",children:[c.jsx("h3",{className:"title",title:n,children:n}),e&&c.jsxs("div",{className:"meta",children:[t.format&&c.jsxs("span",{children:[c.jsx(Gk,{size:11})," ",t.format]}),t.seasonYear&&c.jsxs("span",{children:[c.jsx(Gx,{size:11})," ",t.seasonYear]}),t.episodes?c.jsxs("span",{children:[c.jsx(Jk,{size:11})," ",t.episodes," EP"]}):null]})]}),c.jsx("style",{children:`
        .anime-card {
          display: flex; flex-direction: column; gap: 8px;
          transition: transform 0.25s cubic-bezier(.4,0,.2,1);
          position: relative;
        }
        .anime-card:hover { transform: translateY(-4px); }
        .poster {
          position: relative; aspect-ratio: 2/3; border-radius: 12px;
          overflow: hidden; background: var(--panel);
          border: 1px solid var(--border-soft);
          transition: var(--transition);
        }
        .anime-card:hover .poster { border-color: var(--accent); box-shadow: 0 8px 30px rgba(167,139,250,0.15); }
        .poster img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease; }
        .anime-card:hover .poster img { transform: scale(1.06); }
        .poster-fallback {
          width: 100%; height: 100%; display: flex; align-items: center; justify-content: center;
          font-size: 40px; font-weight: 800; color: var(--text-muted);
        }
        .overlay {
          position: absolute; inset: 0; display: flex; align-items: flex-end; justify-content: center;
          background: linear-gradient(to top, rgba(0,0,0,0.85), transparent 55%);
          opacity: 0; transition: opacity 0.25s ease;
        }
        .anime-card:hover .overlay { opacity: 1; }
        .quick-view {
          display: inline-flex; align-items: center; gap: 6px;
          background: var(--accent); color: #0b0b12; font-weight: 700; font-size: 12px;
          padding: 8px 14px; border-radius: 8px; margin-bottom: 12px;
          transform: translateY(8px); transition: transform 0.25s ease;
        }
        .anime-card:hover .quick-view { transform: translateY(0); }
        .score {
          position: absolute; top: 8px; right: 8px;
          display: inline-flex; align-items: center; gap: 3px;
          background: rgba(0,0,0,0.75); color: #fcd34d;
          font-size: 11px; font-weight: 700; padding: 3px 8px; border-radius: 6px;
          backdrop-filter: blur(4px);
        }
        .info { min-width: 0; }
        .title {
          font-size: 13px; font-weight: 600; margin: 0; line-height: 1.3;
          display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .meta { display: flex; flex-wrap: wrap; gap: 8px; font-size: 11px; color: var(--text-muted); margin-top: 4px; }
        .meta span { display: inline-flex; align-items: center; gap: 3px; }
      `})]})}function qh({w:t="100%",h:e=16,r:n=8,style:r={}}){return c.jsx("div",{className:"skeleton",style:{width:t,height:e,borderRadius:n,...r},"aria-hidden":"true"})}function RT(){return c.jsxs("div",{className:"skeleton-card",children:[c.jsx(qh,{h:260,r:12}),c.jsx(qh,{h:14,w:"80%",style:{marginTop:10}}),c.jsx(qh,{h:12,w:"50%",style:{marginTop:6}}),c.jsx("style",{children:`
        .skeleton-card { display: flex; flex-direction: column; }
        .skeleton {
          background: linear-gradient(90deg, #14141d 0%, #1e1e2a 50%, #14141d 100%);
          background-size: 200% 100%;
          animation: shimmer 1.4s ease-in-out infinite;
        }
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `})]})}function Oj({count:t=12}){return c.jsx("div",{className:"anime-grid",children:Array.from({length:t}).map((e,n)=>c.jsx(RT,{},n))})}function Kd({anime:t=[],loading:e=!1,error:n=null,empty:r="No anime found."}){return e?c.jsx(Oj,{count:12}):n?c.jsxs("div",{className:"empty-state",children:["Failed to load: ",n.message||"Unknown error"]}):t.length?c.jsxs("div",{className:"anime-grid",children:[t.map(i=>c.jsx(od,{anime:i},i.id)),c.jsx("style",{children:`
        .anime-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
          gap: 16px;
        }
        @media (max-width: 720px) {
          .anime-grid { grid-template-columns: repeat(2, 1fr); gap: 12px; }
        }
        @media (min-width: 1200px) {
          .anime-grid { grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); }
        }
        .empty-state {
          padding: 60px 20px; text-align: center; color: var(--text-muted);
          border: 1px dashed var(--border); border-radius: 12px;
        }
      `})]}):c.jsx("div",{className:"empty-state",children:r})}function Nt(){if(!Jn||!Oe)throw new Error("Firebase is not configured. Add your credentials to a .env file (see README).")}async function Pg(t,e,n="PLANNED"){var i,s,o,l,u;Nt();const r=Pt(Oe,"users",t,"watchlist",String(e.id));await ru(r,{animeId:e.id,title:((i=e.title)==null?void 0:i.userPreferred)||((s=e.title)==null?void 0:s.romaji)||((o=e.title)==null?void 0:o.english),coverImage:((l=e.coverImage)==null?void 0:l.large)||((u=e.coverImage)==null?void 0:u.extraLarge),format:e.format,episodes:e.episodes||null,score:e.averageScore||null,seasonYear:e.seasonYear||null,status:n,addedAt:ji()},{merge:!0})}async function Ng(t,e){Nt(),await Gd(Pt(Oe,"users",t,"watchlist",String(e)))}async function Dg(t){return Nt(),(await bg(Qo(Oe,"users",t,"watchlist"))).docs.map(n=>({id:n.id,...n.data()}))}async function CT(t,e){Nt();const n=await qd(Pt(Oe,"users",t,"watchlist",String(e)));return n.exists()?n.data():null}async function PT(t,e){var n,r,i,s;Nt(),await ru(Pt(Oe,"users",t,"favorites",String(e.id)),{animeId:e.id,title:((n=e.title)==null?void 0:n.userPreferred)||((r=e.title)==null?void 0:r.romaji),coverImage:((i=e.coverImage)==null?void 0:i.large)||((s=e.coverImage)==null?void 0:s.extraLarge),addedAt:ji()})}async function NT(t,e){Nt(),await Gd(Pt(Oe,"users",t,"favorites",String(e)))}async function DT(t){return Nt(),(await bg(Qo(Oe,"users",t,"favorites"))).docs.map(n=>({id:n.id,...n.data()}))}async function jT(t,e){Nt();const n=`${e.animeId}_${e.episode}`;await ru(Pt(Oe,"users",t,"history",n),{...e,updatedAt:ji()},{merge:!0})}async function LT(t){Nt();const e=wg(Qo(Oe,"users",t,"history"),Ig("updatedAt","desc"),mT(50));return(await bg(e)).docs.map(r=>({id:r.id,...r.data()}))}async function OT(t,e){Nt(),await Gd(Pt(Oe,"users",t,"history",e))}const MT=t=>Qo(Oe,"animeComments",String(t),"comments");async function VT({animeId:t,episode:e,user:n,text:r,parentId:i=null}){Nt();const s=ji();await _T(MT(t),{authorId:n.uid,authorName:n.displayName||"Anonymous",authorAvatar:n.photoURL||null,text:r,episode:e??null,parentId:i,likeCount:0,createdAt:s,updatedAt:s})}async function UT(t,e,n){Nt(),await tj(Pt(Oe,"animeComments",String(t),"comments",e),{text:n,updatedAt:ji()})}async function FT(t,e){Nt(),await Gd(Pt(Oe,"animeComments",String(t),"comments",e))}async function zT({animeId:t,commentId:e,user:n,text:r}){Nt();const i=ji();await _T(Qo(Oe,"animeComments",String(t),"comments",e,"replies"),{authorId:n.uid,authorName:n.displayName||"Anonymous",authorAvatar:n.photoURL||null,text:r,likeCount:0,createdAt:i,updatedAt:i})}function $T(t,e){if(!Jn)return e([]),()=>{};const n=wg(MT(t),Ig("createdAt","desc"),mT(200));return wT(n,r=>{e(r.docs.map(i=>({id:i.id,...i.data()})))},r=>{console.error("comments subscription error",r),e([])})}function BT(t,e,n){if(!Jn)return n([]),()=>{};const r=wg(Qo(Oe,"animeComments",String(t),"comments",e,"replies"),Ig("createdAt","asc"));return wT(r,i=>{n(i.docs.map(s=>({id:s.id,...s.data()})))})}async function jg({animeId:t,commentId:e,uid:n}){Nt();const r=Pt(Oe,"animeComments",String(t),"comments",e,"likes",n),i=Pt(Oe,"animeComments",String(t),"comments",e),s=await qd(r),o=rj(Oe);s.exists()?(o.delete(r),o.update(i,{likeCount:F_(-1)})):(o.set(r,{uid:n,createdAt:ji()}),o.update(i,{likeCount:F_(1)})),await o.commit()}async function HT({animeId:t,commentId:e,uid:n}){return Nt(),(await qd(Pt(Oe,"animeComments",String(t),"comments",e,"likes",n))).exists()}const H_=Object.freeze(Object.defineProperty({__proto__:null,addFavorite:PT,addToWatchlist:Pg,deleteComment:FT,deleteHistoryEntry:OT,editComment:UT,getFavorites:DT,getHistory:LT,getWatchlist:Dg,hasLiked:HT,isInWatchlist:CT,postComment:VT,postReply:zT,removeFavorite:NT,removeFromWatchlist:Ng,saveHistory:jT,subscribeComments:$T,subscribeReplies:BT,toggleLike:jg},Symbol.toStringTag,{value:"Module"})),WT="hoshii:history";function Hu(){try{const t=localStorage.getItem(WT);return t?JSON.parse(t):[]}catch{return[]}}function W_(t){localStorage.setItem(WT,JSON.stringify(t))}function Lg(){const{user:t}=er(),[e,n]=R.useState(()=>Hu()),[r,i]=R.useState(!1);R.useEffect(()=>{let l=!0;return t?(i(!0),LT(t.uid).then(u=>{l&&n(u)}).catch(()=>{}).finally(()=>{l&&i(!1)})):n(Hu()),()=>{l=!1}},[t]);const s=R.useCallback(async l=>{const u={...l,updatedAt:Date.now()};if(t)try{await jT(t.uid,u)}catch(d){console.warn("history save failed",d)}else{const f=Hu().filter(m=>!(m.animeId===l.animeId&&m.episode===l.episode));f.unshift(u),W_(f.slice(0,60))}n(d=>{const f=d.filter(m=>!(m.animeId===l.animeId&&m.episode===l.episode));return[u,...f].slice(0,60)})},[t]),o=R.useCallback(async(l,u)=>{if(t){const d=`${l}_${u}`;try{await OT(t.uid,d)}catch{}}else{const d=Hu().filter(f=>!(f.animeId===l&&f.episode===u));W_(d)}n(d=>d.filter(f=>!(f.animeId===l&&f.episode===u)))},[t]);return{history:e,loading:r,addEntry:s,removeEntry:o}}function Mj(){const[t,e]=R.useState([]),[n,r]=R.useState("POPULAR"),[i,s]=R.useState({media:[]}),[o,l]=R.useState(!0),[u,d]=R.useState(null),[f,m]=R.useState({}),[g,I]=R.useState(!0),{history:C}=Lg();return R.useEffect(()=>{let b=!0;return(async()=>{try{const P=await sd(1,30);if(!b)return;e((P.media||[]).slice(0,5))}catch(P){console.warn(P)}})(),()=>{b=!1}},[]),R.useEffect(()=>{let b=!0;return l(!0),d(null),{POPULAR:ST,TRENDING:sd,TOP:AT,NEWEST:kT}[n](1,24).then(x=>{b&&(s(x),l(!1))}).catch(x=>{b&&(d(x),l(!1))}),()=>{b=!1}},[n]),R.useEffect(()=>{let b=!0;return I(!0),(async()=>{const P={},x=[["airing",xj],["upcoming",Ej],["movies",Tj]];for(const[_,A]of x){try{const O=await A(1,12);P[_]=O.media||[]}catch{P[_]=[]}if(!b)return}b&&(m(P),I(!1))})(),()=>{b=!1}},[]),c.jsxs("div",{className:"page home",children:[c.jsx(jj,{items:t}),c.jsxs("div",{className:"container",children:[c.jsx(Lj,{}),C.length>0&&c.jsxs("section",{className:"section",children:[c.jsxs("div",{className:"section-head",children:[c.jsx("h2",{children:"Continue Watching"}),c.jsxs(Pe,{to:"/history",className:"btn ghost sm",children:["View all ",c.jsx($o,{size:14})]})]}),c.jsx("div",{className:"history-row",children:C.slice(0,6).map(b=>c.jsxs(Pe,{to:`/watch/${b.animeId}/${b.episode}`,className:"history-card",children:[c.jsxs("div",{className:"thumb",style:{backgroundImage:`url(${b.image})`},children:[c.jsxs("span",{className:"ep-badge",children:["EP ",b.episode]}),c.jsx("div",{className:"progress",children:c.jsx("div",{className:"progress-fill",style:{width:`${Math.min(100,(b.position||0)/(b.duration||1)*100)}%`}})})]}),c.jsx("p",{className:"history-title",children:b.title})]},b.id||`${b.animeId}-${b.episode}`))})]}),c.jsxs("section",{className:"section",children:[c.jsxs("div",{className:"section-head",children:[c.jsx("h2",{children:"Browse Anime"}),c.jsx("div",{className:"tabs",children:[{key:"NEWEST",label:"Newest"},{key:"POPULAR",label:"Popular"},{key:"TOP",label:"Top Rated"},{key:"TRENDING",label:"Trending"}].map(b=>c.jsx("button",{className:b.key===n?"active":"",onClick:()=>r(b.key),children:b.label},b.key))})]}),c.jsx(Kd,{anime:i.media||[],loading:o,error:u})]}),c.jsxs("div",{className:"two-col",children:[c.jsxs("div",{className:"main-col",children:[c.jsx(Gh,{title:"Currently Airing",items:f.airing,loading:g}),c.jsx(Gh,{title:"Upcoming",items:f.upcoming,loading:g}),c.jsx(Gh,{title:"Top Movies",items:f.movies,loading:g})]}),c.jsxs("aside",{className:"right-col",children:[c.jsx(q_,{title:"Top Airing",children:(f.airing||[]).slice(0,6).map(b=>c.jsx(G_,{anime:b},b.id))}),c.jsx(q_,{title:"Trending Now",children:t.slice(0,6).map(b=>c.jsx(G_,{anime:b},b.id))})]})]})]}),c.jsx("style",{children:`
        .home { padding-top: 0; }
        .section { margin-top: 36px; }
        .history-row {
          display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 14px;
        }
        .history-card { display: flex; flex-direction: column; gap: 8px; }
        .thumb {
          position: relative; aspect-ratio: 16/9; border-radius: 10px;
          background-size: cover; background-position: center;
          background-color: var(--panel); border: 1px solid var(--border-soft);
          overflow: hidden; transition: var(--transition);
        }
        .history-card:hover .thumb { border-color: var(--accent); }
        .ep-badge {
          position: absolute; top: 8px; left: 8px;
          background: rgba(0,0,0,0.75); color: #fff;
          font-size: 10px; font-weight: 700; padding: 3px 7px;
          border-radius: 5px; backdrop-filter: blur(4px);
        }
        .progress {
          position: absolute; left: 0; right: 0; bottom: 0; height: 3px;
          background: rgba(0,0,0,0.55);
        }
        .progress-fill { height: 100%; background: var(--accent); }
        .history-title {
          margin: 0; font-size: 13px; font-weight: 600;
          overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
        }
        .two-col {
          display: grid; grid-template-columns: minmax(0, 1fr) 320px;
          gap: 28px; margin-top: 36px;
        }
        @media (max-width: 1000px) { .two-col { grid-template-columns: 1fr; } }
        .main-col { min-width: 0; }
        .right-col { display: flex; flex-direction: column; gap: 16px; }
        .btn.sm { padding: 6px 10px; font-size: 12px; }
      `})]})}function Gh({title:t,items:e,loading:n}){return c.jsxs("section",{className:"section",children:[c.jsx("div",{className:"section-head",children:c.jsx("h2",{children:t})}),n?c.jsx("div",{className:"anime-grid",children:Array.from({length:6}).map((r,i)=>c.jsx(RT,{},i))}):c.jsx("div",{className:"anime-grid",children:e==null?void 0:e.map(r=>c.jsx(od,{anime:r},r.id))})]})}function q_({title:t,children:e}){return c.jsxs("div",{className:"sidebar-panel glass",children:[c.jsx("h3",{children:t}),c.jsx("div",{className:"mini-list",children:e}),c.jsx("style",{children:`
        .sidebar-panel { border-radius: var(--radius); padding: 14px; }
        .sidebar-panel h3 {
          margin: 0 0 12px; font-size: 14px; letter-spacing: 0.05em;
          text-transform: uppercase; color: var(--text-dim);
        }
        .mini-list { display: flex; flex-direction: column; gap: 8px; }
      `})]})}function G_({anime:t}){var n,r,i,s;const e=((n=t.title)==null?void 0:n.english)||((r=t.title)==null?void 0:r.userPreferred)||((i=t.title)==null?void 0:i.romaji);return c.jsxs(Pe,{to:`/anime/${t.id}`,className:"mini-row",children:[c.jsx("img",{src:(s=t.coverImage)==null?void 0:s.large,alt:"",loading:"lazy"}),c.jsxs("div",{className:"mini-info",children:[c.jsx("span",{className:"mini-title",children:e}),c.jsxs("span",{className:"mini-meta",children:[t.format," · ",t.seasonYear||"—",t.averageScore?` · ★ ${t.averageScore}`:""]})]}),c.jsx("style",{children:`
        .mini-row {
          display: flex; gap: 10px; padding: 6px; border-radius: 8px;
          transition: var(--transition);
        }
        .mini-row:hover { background: var(--panel-2); }
        .mini-row img {
          width: 44px; height: 62px; object-fit: cover;
          border-radius: 6px; flex-shrink: 0;
        }
        .mini-info {
          min-width: 0; display: flex; flex-direction: column; gap: 3px;
          justify-content: center;
        }
        .mini-title {
          font-size: 12.5px; font-weight: 600; line-height: 1.25;
          display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .mini-meta { font-size: 10.5px; color: var(--text-muted); }
      `})]})}function Vj({filters:t,onChange:e,onApply:n,onReset:r}){const[i,s]=R.useState(!1),o=(d,f)=>e({...t,[d]:f}),l=t.year||"",u=Array.from({length:60},(d,f)=>new Date().getFullYear()+5-f);return c.jsxs("div",{className:"filter-panel",children:[c.jsxs("div",{className:"filters-row",children:[c.jsx(Gr,{label:"Genre",value:t.genre||"",onChange:d=>o("genre",d),options:[{value:"",label:"Any Genre"},...bT.map(d=>({value:d,label:d}))]}),c.jsx(Gr,{label:"Year",value:l,onChange:d=>o("year",d?Number(d):""),options:[{value:"",label:"Any Year"},...u.map(d=>({value:d,label:String(d)}))]}),c.jsx(Gr,{label:"Status",value:t.status||"",onChange:d=>o("status",d),options:[{value:"",label:"Any Status"},{value:"RELEASING",label:"Airing"},{value:"FINISHED",label:"Finished"},{value:"NOT_YET_RELEASED",label:"Upcoming"},{value:"CANCELLED",label:"Cancelled"},{value:"HIATUS",label:"Hiatus"}]}),c.jsx(Gr,{label:"Format",value:t.format||"",onChange:d=>o("format",d),options:[{value:"",label:"Any Format"},...Aj.map(d=>({value:d,label:d.replace("_"," ")}))]}),c.jsx(Gr,{label:"Sort",value:t.sort||"POPULARITY_DESC",onChange:d=>o("sort",d),options:bj})]}),i&&c.jsxs("div",{className:"filters-row",children:[c.jsx(Gr,{label:"Season",value:t.season||"",onChange:d=>o("season",d),options:[{value:"",label:"Any Season"},...kj.map(d=>({value:d,label:d}))]}),c.jsx(Gr,{label:"Min Score",value:t.minimumScore||"",onChange:d=>o("minimumScore",d?Number(d):""),options:[{value:"",label:"Any Score"},...[90,80,70,60,50].map(d=>({value:d,label:`${d}+`}))]}),c.jsx(Gr,{label:"Country",value:t.country||"",onChange:d=>o("country",d),options:[{value:"",label:"Any Country"},{value:"JP",label:"Japan"},{value:"KR",label:"South Korea"},{value:"CN",label:"China"},{value:"TW",label:"Taiwan"}]}),c.jsxs("label",{className:"checkbox-label",children:[c.jsx("input",{type:"checkbox",checked:!!t.isAdult,onChange:d=>o("isAdult",d.target.checked)}),"Include adult"]})]}),c.jsxs("div",{className:"filters-actions",children:[c.jsx("button",{className:"btn primary",onClick:n,children:"Apply Filters"}),c.jsxs("button",{className:"btn ghost",onClick:r,children:[c.jsx(Ul,{size:14})," Reset"]}),c.jsxs("button",{className:"btn ghost",onClick:()=>s(d=>!d),children:[c.jsx(Ad,{size:14,style:{transform:i?"rotate(180deg)":"none",transition:"transform 0.2s"}}),i?"Collapse":"Expand"," Filters"]})]}),c.jsx("style",{children:`
        .filter-panel {
          background: var(--panel); border: 1px solid var(--border);
          border-radius: var(--radius); padding: 16px; display: flex; flex-direction: column; gap: 12px;
        }
        .filters-row { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 10px; }
        .filters-actions { display: flex; gap: 8px; flex-wrap: wrap; }
        .checkbox-label {
          display: flex; align-items: center; gap: 8px;
          font-size: 13px; color: var(--text-dim);
          padding: 10px 12px; background: var(--panel-2); border: 1px solid var(--border);
          border-radius: 10px;
        }
      `})]})}function Gr({label:t,value:e,onChange:n,options:r}){return c.jsxs("label",{className:"select-wrap",children:[c.jsx("span",{className:"select-label",children:t}),c.jsx("select",{value:e,onChange:i=>n(i.target.value),children:r.map(i=>c.jsx("option",{value:i.value,children:i.label},i.value))}),c.jsx(Ad,{size:14,className:"select-arrow"}),c.jsx("style",{children:`
        .select-wrap {
          position: relative; display: flex; flex-direction: column; gap: 4px;
          background: var(--panel-2); border: 1px solid var(--border);
          border-radius: 10px; padding: 6px 34px 6px 12px; cursor: pointer;
        }
        .select-label {
          font-size: 10px; text-transform: uppercase; letter-spacing: 0.05em;
          color: var(--text-muted); font-weight: 600;
        }
        .select-wrap select {
          background: transparent; border: none; color: var(--text);
          font-size: 13px; font-weight: 500; outline: none; appearance: none;
          padding: 2px 0; cursor: pointer;
        }
        .select-arrow {
          position: absolute; right: 12px; bottom: 12px; color: var(--text-muted); pointer-events: none;
        }
      `})]})}function Uj(){var _,A,O;const[t,e]=Hx(),[n,r]=R.useState(()=>K_(t)),[i,s]=R.useState(null),[o,l]=R.useState(!1),[u,d]=R.useState(null),[f,m]=R.useState(Number(t.get("page")||1)),g=R.useRef(null);R.useEffect(()=>{r(K_(t)),m(Number(t.get("page")||1))},[t.toString()]),R.useEffect(()=>{g.current&&g.current.abort();const M=new AbortController;return g.current=M,l(!0),d(null),tr({query:n.query,genre:n.genre,tag:n.tag,year:n.year,season:n.season,status:n.status,format:n.format,sort:n.sort?[n.sort]:["POPULARITY_DESC"],minimumScore:n.minimumScore,country:n.country,isAdult:!!n.isAdult,page:f,perPage:30,signal:M.signal}).then(D=>{M.signal.aborted||s(D)}).catch(D=>{D.name!=="AbortError"&&d(D)}).finally(()=>{M.signal.aborted||l(!1)}),()=>M.abort()},[n,f]);const I=()=>{const M=new URLSearchParams;n.query&&M.set("query",n.query),n.genre&&M.set("genre",n.genre),n.tag&&M.set("tag",n.tag),n.year&&M.set("year",String(n.year)),n.season&&M.set("season",n.season),n.status&&M.set("status",n.status),n.format&&M.set("format",n.format),n.sort&&M.set("sort",n.sort),n.minimumScore&&M.set("minimumScore",String(n.minimumScore)),n.country&&M.set("country",n.country),n.isAdult&&M.set("isAdult","1"),f>1&&M.set("page",String(f)),e(M)},C=()=>{r({sort:"POPULARITY_DESC"}),m(1),e(new URLSearchParams)},b=((_=i==null?void 0:i.pageInfo)==null?void 0:_.total)||0,P=((A=i==null?void 0:i.pageInfo)==null?void 0:A.lastPage)||1,x=((O=i==null?void 0:i.pageInfo)==null?void 0:O.currentPage)||f;return c.jsxs("div",{className:"page",children:[c.jsxs("div",{className:"container",children:[c.jsxs("div",{className:"search-head",children:[c.jsxs("div",{children:[c.jsx("h1",{children:"Search Anime"}),i&&c.jsxs("p",{className:"muted",children:[b.toLocaleString()," results"]})]}),c.jsx("input",{className:"search-input",value:n.query||"",onChange:M=>r(D=>({...D,query:M.target.value})),onKeyDown:M=>M.key==="Enter"&&I(),placeholder:"Search by title…"})]}),c.jsx(Vj,{filters:n,onChange:r,onApply:()=>{m(1),I()},onReset:C}),c.jsx("div",{className:"results-wrap",children:c.jsx(Kd,{anime:(i==null?void 0:i.media)||[],loading:o,error:u,empty:"No anime matched your filters."})}),i&&P>1&&c.jsxs("div",{className:"pagination",children:[c.jsxs("button",{className:"btn ghost",disabled:x<=1,onClick:()=>{m(M=>Math.max(1,M-1)),window.scrollTo({top:0})},children:[c.jsx(Vl,{size:14})," Prev"]}),c.jsxs("span",{className:"muted",children:["Page ",x," / ",P]}),c.jsxs("button",{className:"btn ghost",disabled:x>=P,onClick:()=>{m(M=>M+1),window.scrollTo({top:0})},children:["Next ",c.jsx($o,{size:14})]})]})]}),c.jsx("style",{children:`
        .search-head { display: flex; align-items: flex-end; justify-content: space-between; gap: 16px; flex-wrap: wrap; margin-bottom: 16px; }
        .search-head h1 { margin: 0 0 4px; font-size: 28px; }
        .search-head p { margin: 0; font-size: 13px; }
        .search-input {
          background: var(--panel); border: 1px solid var(--border);
          border-radius: 10px; padding: 12px 16px; color: var(--text);
          font-size: 14px; outline: none; width: 100%; max-width: 380px;
          transition: var(--transition);
        }
        .search-input:focus { border-color: var(--accent); box-shadow: 0 0 0 3px var(--accent-soft); }
        .results-wrap { margin-top: 20px; }
        .pagination { display: flex; align-items: center; justify-content: center; gap: 14px; margin-top: 32px; }
      `})]})}function K_(t){return{query:t.get("query")||"",genre:t.get("genre")||"",tag:t.get("tag")||"",year:t.get("year")?Number(t.get("year")):"",season:t.get("season")||"",status:t.get("status")||"",format:t.get("format")||"",sort:t.get("sort")||"POPULARITY_DESC",minimumScore:t.get("minimumScore")?Number(t.get("minimumScore")):"",country:t.get("country")||"",isAdult:t.get("isAdult")==="1"}}/*! @license DOMPurify 3.4.16 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.4.16/LICENSE */function Q_(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}function Fj(t){if(Array.isArray(t))return t}function zj(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r,i,s,o,l=[],u=!0,d=!1;try{if(s=(n=n.call(t)).next,e!==0)for(;!(u=(r=s.call(n)).done)&&(l.push(r.value),l.length!==e);u=!0);}catch(f){d=!0,i=f}finally{try{if(!u&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(d)throw i}}return l}}function $j(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */function Bj(t,e){return Fj(t)||zj(t,e)||Hj(t,e)||$j()}function Hj(t,e){if(t){if(typeof t=="string")return Q_(t,e);var n={}.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Q_(t,e):void 0}}const qT=Object.entries,Y_=Object.setPrototypeOf,Wj=Object.isFrozen,qj=Object.getPrototypeOf,Gj=Object.getOwnPropertyDescriptor;let it=Object.freeze,ut=Object.seal,Qs=Object.create,GT=typeof Reflect<"u"&&Reflect,Tp=GT.apply,Ip=GT.construct;it||(it=function(e){return e});ut||(ut=function(e){return e});Tp||(Tp=function(e,n){for(var r=arguments.length,i=new Array(r>2?r-2:0),s=2;s<r;s++)i[s-2]=arguments[s];return e.apply(n,i)});Ip||(Ip=function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return new e(...r)});const es=tt(Array.prototype.forEach),Kj=tt(Array.prototype.lastIndexOf),X_=tt(Array.prototype.pop),Aa=tt(Array.prototype.push),Qj=tt(Array.prototype.splice),wo=Array.isArray,Fa=tt(String.prototype.toLowerCase),Kh=tt(String.prototype.toString),J_=tt(String.prototype.match),ka=tt(String.prototype.replace),Z_=tt(String.prototype.indexOf),Yj=tt(String.prototype.trim),Xj=tt(Number.prototype.toString),Jj=tt(Boolean.prototype.toString),e0=typeof BigInt>"u"?null:tt(BigInt.prototype.toString),t0=typeof Symbol>"u"?null:tt(Symbol.prototype.toString),$t=tt(Object.prototype.hasOwnProperty),ba=tt(Object.prototype.toString),It=tt(RegExp.prototype.test),Kr=Zj(TypeError);function tt(t){return function(e){e instanceof RegExp&&(e.lastIndex=0);for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return Tp(t,e,r)}}function Zj(t){return function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return Ip(t,n)}}function me(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Fa;if(Y_&&Y_(t,null),!wo(e))return t;let r=e.length;for(;r--;){let i=e[r];if(typeof i=="string"){const s=n(i);s!==i&&(Wj(e)||(e[r]=s),i=s)}t[i]=!0}return t}function eL(t){for(let e=0;e<t.length;e++)$t(t,e)||(t[e]=null);return t}function Zt(t){const e=Qs(null);for(const r of qT(t)){var n=Bj(r,2);const i=n[0],s=n[1];$t(t,i)&&(wo(s)?e[i]=eL(s):s&&typeof s=="object"&&s.constructor===Object?e[i]=Zt(s):e[i]=s)}return e}function tL(t){switch(typeof t){case"string":return t;case"number":return Xj(t);case"boolean":return Jj(t);case"bigint":return e0?e0(t):"0";case"symbol":return t0?t0(t):"Symbol()";case"undefined":return ba(t);case"function":case"object":{if(t===null)return ba(t);const e=t,n=hn(e,"toString");if(typeof n=="function"){const r=n(e);return typeof r=="string"?r:ba(r)}return ba(t)}default:return ba(t)}}function hn(t,e){for(;t!==null;){const r=Gj(t,e);if(r){if(r.get)return tt(r.get);if(typeof r.value=="function")return tt(r.value)}t=qj(t)}function n(){return null}return n}function nL(t){try{return It(t,""),!0}catch{return!1}}const n0=it(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),Qh=it(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","enterkeyhint","exportparts","filter","font","g","glyph","glyphref","hkern","image","inputmode","line","lineargradient","marker","mask","metadata","mpath","part","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),Yh=it(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),rL=it(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),Xh=it(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),iL=it(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),r0=it(["#text"]),i0=it(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","command","commandfor","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","exportparts","face","for","headers","height","hidden","high","href","hreflang","id","inert","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","part","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","slot","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns"]),Jh=it(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dominant-baseline","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","mask-type","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","pointer-events","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-orientation","text-rendering","textlength","type","u1","u2","unicode","values","vector-effect","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),s0=it(["accent","accentunder","align","bevelled","close","columnalign","columnlines","columnspacing","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lquote","lspace","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),Wu=it(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),sL=ut(/{{[\w\W]*|^[\w\W]*}}/g),oL=ut(/<%[\w\W]*|^[\w\W]*%>/g),aL=ut(/\${[\w\W]*/g),lL=ut(/^data-[\-\w.\u00B7-\uFFFF]+$/),uL=ut(/^aria-[\-\w]+$/),o0=ut(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),cL=ut(/^(?:\w+script|data):/i),dL=ut(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),hL=ut(/^html$/i),fL=ut(/^[a-z][.\w]*(-[.\w]+)+$/i),a0=ut(/<[/\w!]/g),l0=ut(/<[/\w]/g),pL=ut(/<\/no(script|embed|frames)/i),mL=ut(/\/>/i),Xt={element:1,attribute:2,text:3,cdataSection:4,entityReference:5,entityNode:6,processingInstruction:7,comment:8,document:9,documentType:10,documentFragment:11,notation:12},KT=["style","script","xmp","iframe","noembed","noframes","plaintext","noscript"],gL=it(me({},KT)),yL=function(){const t={};return es(KT,e=>{t[e]=ut(new RegExp("</"+e+"(?=[\\t\\n\\f\\r />])","i"))}),it(t)}(),vL=function(){return typeof window>"u"?null:window},_L=function(e,n){if(typeof e!="object"||typeof e.createPolicy!="function")return null;let r=null;const i="data-tt-policy-suffix";n&&n.hasAttribute(i)&&(r=n.getAttribute(i));const s="dompurify"+(r?"#"+r:"");try{return e.createPolicy(s,{createHTML(o){return o},createScriptURL(o){return o}})}catch{return console.warn("TrustedTypes policy "+s+" could not be created."),null}},u0=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}},Qr=function(e,n,r,i){return $t(e,n)&&wo(e[n])?me(i.base?Zt(i.base):{},e[n],i.transform):r},Zh=function(e,n,r){const i=$t(e,n)?e[n]:void 0;return i&&typeof i=="object"?Zt(i):r()};function QT(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:vL();const e=B=>QT(B);if(e.version="3.4.16",e.removed=[],!t||!t.document||t.document.nodeType!==Xt.document||!t.Element)return e.isSupported=!1,e;let n=t.document;const r=n,i=r.currentScript;t.DocumentFragment;const s=t.HTMLTemplateElement,o=t.Node,l=t.Element,u=t.NodeFilter;t.NamedNodeMap===void 0&&(t.NamedNodeMap||t.MozNamedAttrMap),t.HTMLFormElement;const d=t.DOMParser,f=t.trustedTypes,m=l.prototype,g=hn(m,"cloneNode"),I=hn(m,"remove"),C=hn(m,"removeAttributeNode"),b=hn(m,"nextSibling"),P=hn(m,"childNodes"),x=hn(m,"parentNode"),_=hn(m,"shadowRoot"),A=hn(m,"attributes"),O=o&&o.prototype?hn(o.prototype,"nodeType"):null,M=o&&o.prototype?hn(o.prototype,"nodeName"):null,D=o&&o.prototype?hn(o.prototype,"ownerDocument"):null,T=function(w){return O?O(w):w.nodeType},y=function(w){return M?M(w):w.nodeName};if(typeof s=="function"){const B=n.createElement("template");B.content&&B.content.ownerDocument&&(n=B.content.ownerDocument)}let E,S="",N,L=!1,k=0;const Ge=function(){if(k>0)throw Kr('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.')},Ye=function(w){Ge(),k++;try{return E.createHTML(w)}finally{k--}},Qt=function(w){Ge(),k++;try{return E.createScriptURL(w)}finally{k--}},ct=function(){return L||(N=_L(f,i),L=!0),N},q=n,Z=q.implementation,K=q.createNodeIterator,he=q.createDocumentFragment,te=q.getElementsByTagName,_e=r.importNode;let fe=u0();e.isSupported=typeof qT=="function"&&typeof x=="function"&&Z&&Z.createHTMLDocument!==void 0;const wn=sL,xn=oL,En=aL,Qd=lL,Yd=uL,Ss=cL,Li=dL,Xo=fL;let As=o0,Te=null;const Oi=me({},[...n0,...Qh,...Yh,...Xh,...r0]);let Se=null;const Jo=me({},[...i0,...Jh,...s0,...Wu]);let ln=Object.seal(Qs(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),Vr=null,ks=null;const Tn=Object.seal(Qs(null,{tagCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeCheck:{writable:!0,configurable:!1,enumerable:!0,value:null}}));let ou=!0,Mi=!0,bs=!1,Zo=!0,Re=!1,Me=!0,un=!1,Rs=!1,Vi=null,Cs=null,nr=!1,rr=!1,Ui=!1,Ur=!1,au=!0,lu=!1;const Ps="user-content-";let Ns=!0,Ds=!1,cn={},jn=null;const js=me({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","selectedcontent","style","svg","template","thead","title","video","xmp"]);let Ln=null;const ea=me({},["audio","video","img","source","image","track"]);let Fi=null;const ta=me({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),On="http://www.w3.org/1998/Math/MathML",zi="http://www.w3.org/2000/svg",ke="http://www.w3.org/1999/xhtml";let ir=ke,sr=!1,or=null;const Xd=me({},[On,zi,ke],Kh),uu=it(["mi","mo","mn","ms","mtext"]);let Mn=me({},uu);const cu=it(["annotation-xml"]);let na=me({},cu);const Ls=me({},["title","style","font","a","script"]);let Fr=null;const ra=["application/xhtml+xml","text/html"],Os="text/html";let we=null,ar=null;const du=n.createElement("form"),Ms=function(w){return w instanceof RegExp||w instanceof Function},$i=function(){let w=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(ar&&ar===w)return;(!w||typeof w!="object")&&(w={}),w=Zt(w),Fr=ra.indexOf(w.PARSER_MEDIA_TYPE)===-1?Os:w.PARSER_MEDIA_TYPE,we=Fr==="application/xhtml+xml"?Kh:Fa,Te=Qr(w,"ALLOWED_TAGS",Oi,{transform:we}),Se=Qr(w,"ALLOWED_ATTR",Jo,{transform:we}),or=Qr(w,"ALLOWED_NAMESPACES",Xd,{transform:Kh}),Fi=Qr(w,"ADD_URI_SAFE_ATTR",ta,{transform:we,base:ta}),Ln=Qr(w,"ADD_DATA_URI_TAGS",ea,{transform:we,base:ea}),jn=Qr(w,"FORBID_CONTENTS",js,{transform:we}),Vr=Qr(w,"FORBID_TAGS",Zt({}),{transform:we}),ks=Qr(w,"FORBID_ATTR",Zt({}),{transform:we}),cn=$t(w,"USE_PROFILES")?w.USE_PROFILES&&typeof w.USE_PROFILES=="object"?Zt(w.USE_PROFILES):w.USE_PROFILES:!1,ou=w.ALLOW_ARIA_ATTR!==!1,Mi=w.ALLOW_DATA_ATTR!==!1,bs=w.ALLOW_UNKNOWN_PROTOCOLS||!1,Zo=w.ALLOW_SELF_CLOSE_IN_ATTR!==!1,Re=w.SAFE_FOR_TEMPLATES||!1,Me=w.SAFE_FOR_XML!==!1,un=w.WHOLE_DOCUMENT||!1,rr=w.RETURN_DOM||!1,Ui=w.RETURN_DOM_FRAGMENT||!1,Ur=w.RETURN_TRUSTED_TYPE||!1,nr=w.FORCE_BODY||!1,au=w.SANITIZE_DOM!==!1,lu=w.SANITIZE_NAMED_PROPS||!1,Ns=w.KEEP_CONTENT!==!1,Ds=w.IN_PLACE||!1,As=nL(w.ALLOWED_URI_REGEXP)?w.ALLOWED_URI_REGEXP:o0,ir=typeof w.NAMESPACE=="string"?w.NAMESPACE:ke,Mn=Zh(w,"MATHML_TEXT_INTEGRATION_POINTS",()=>me({},uu)),na=Zh(w,"HTML_INTEGRATION_POINTS",()=>me({},cu));const j=Zh(w,"CUSTOM_ELEMENT_HANDLING",()=>Qs(null));if(ln=Qs(null),$t(j,"tagNameCheck")&&Ms(j.tagNameCheck)&&(ln.tagNameCheck=j.tagNameCheck),$t(j,"attributeNameCheck")&&Ms(j.attributeNameCheck)&&(ln.attributeNameCheck=j.attributeNameCheck),$t(j,"allowCustomizedBuiltInElements")&&typeof j.allowCustomizedBuiltInElements=="boolean"&&(ln.allowCustomizedBuiltInElements=j.allowCustomizedBuiltInElements),ut(ln),Re&&(Mi=!1),Ui&&(rr=!0),cn&&(Te=me({},r0),Se=Qs(null),cn.html===!0&&(me(Te,n0),me(Se,i0)),cn.svg===!0&&(me(Te,Qh),me(Se,Jh),me(Se,Wu)),cn.svgFilters===!0&&(me(Te,Yh),me(Se,Jh),me(Se,Wu)),cn.mathMl===!0&&(me(Te,Xh),me(Se,s0),me(Se,Wu))),Tn.tagCheck=null,Tn.attributeCheck=null,$t(w,"ADD_TAGS")&&(typeof w.ADD_TAGS=="function"?Tn.tagCheck=w.ADD_TAGS:wo(w.ADD_TAGS)&&(Te===Oi&&(Te=Zt(Te)),me(Te,w.ADD_TAGS,we))),$t(w,"ADD_ATTR")&&(typeof w.ADD_ATTR=="function"?Tn.attributeCheck=w.ADD_ATTR:wo(w.ADD_ATTR)&&(Se===Jo&&(Se=Zt(Se)),me(Se,w.ADD_ATTR,we))),$t(w,"ADD_FORBID_CONTENTS")&&wo(w.ADD_FORBID_CONTENTS)&&(jn===js&&(jn=Zt(jn)),me(jn,w.ADD_FORBID_CONTENTS,we)),Ns&&(Te["#text"]=!0),un&&me(Te,["html","head","body"]),Te.table&&(me(Te,["tbody"]),delete Vr.tbody),w.TRUSTED_TYPES_POLICY){if(typeof w.TRUSTED_TYPES_POLICY.createHTML!="function")throw Kr('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof w.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw Kr('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');const z=E;E=w.TRUSTED_TYPES_POLICY;try{S=Ye("")}catch(W){throw E=z,W}}else w.TRUSTED_TYPES_POLICY===null?(E=void 0,S=""):(E===void 0&&(E=ct()),E&&typeof S=="string"&&(S=Ye("")));it&&it(w),ar=w},ia=me({},[...Qh,...Yh,...rL]),sa=me({},[...Xh,...iL]),Jd=function(w,j,z){return j.namespaceURI===ke?w==="svg":j.namespaceURI===On?w==="svg"&&(z==="annotation-xml"||Mn[z]):!!ia[w]},Vs=function(w,j,z){return j.namespaceURI===ke?w==="math":j.namespaceURI===zi?w==="math"&&na[z]:!!sa[w]},hu=function(w,j,z){return j.namespaceURI===zi&&!na[z]||j.namespaceURI===On&&!Mn[z]?!1:!sa[w]&&(Ls[w]||!ia[w])},oa=function(w){let j=x(w);(!j||!j.tagName)&&(j={namespaceURI:ir,tagName:"template"});const z=Fa(w.tagName),W=Fa(j.tagName);return or[w.namespaceURI]?w.namespaceURI===zi?Jd(z,j,W):w.namespaceURI===On?Vs(z,j,W):w.namespaceURI===ke?hu(z,j,W):!!(Fr==="application/xhtml+xml"&&or[w.namespaceURI]):!1},Ut=function(w){Aa(e.removed,{element:w});try{x(w).removeChild(w)}catch{if(I(w),!x(w))throw Kr("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place")}},Vn=function(w,j,z){try{C(w,j)}catch{try{w.removeAttribute(z)}catch{}}},zr=function(w){Bi(w);const j=P(w);if(j){const W=[];es(j,J=>{Aa(W,J)}),es(W,J=>{try{I(J)}catch{}})}const z=A(w);if(z)for(let W=z.length-1;W>=0;--W){const J=z[W],se=J&&J.name;typeof se=="string"&&Vn(w,J,se)}},lr=function(w,j,z){if(!z)try{z=j.getAttributeNode(w)}catch{z=null}Aa(e.removed,{attribute:z||null,from:j});try{z?C(j,z):j.removeAttribute(w)}catch{try{j.removeAttribute(w)}catch{}}if(w==="is")if(rr||Ui)try{Ut(j)}catch{}else try{j.setAttribute(w,"")}catch{}},fu=function(w){const j=A(w);if(j)for(let z=j.length-1;z>=0;--z){const W=j[z],J=W&&W.name;typeof J!="string"||Se[we(J)]||Vn(w,W,J)}},Bi=function(w){const j=[w];for(;j.length>0;){const z=j.pop();T(z)===Xt.element&&fu(z);const W=P(z);if(W)for(let J=W.length-1;J>=0;--J)j.push(W[J])}},aa=function(w,j){return Me?w==="patchsrc"?!0:w==="for"&&j!=="label"&&j!=="output":!1},la=function(w){if(!Me)return;const j=[w];for(;j.length>0;){const z=j.pop(),W=T(z);if(W===Xt.processingInstruction||W===Xt.comment&&It(l0,z.data)){try{I(z)}catch{}continue}if(W===Xt.element){const se=z,ue=we(y(z));try{se.hasAttribute&&se.hasAttribute("patchsrc")&&se.removeAttribute("patchsrc"),se.hasAttribute&&se.hasAttribute("for")&&aa("for",ue)&&se.removeAttribute("for")}catch{}}const J=P(z);if(J)for(let se=J.length-1;se>=0;--se)j.push(J[se])}},Us=function(w){let j=null,z=null;if(nr)w="<remove></remove>"+w;else{const se=J_(w,/^[\r\n\t ]+/);z=se&&se[0]}Fr==="application/xhtml+xml"&&ir===ke&&(w='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+w+"</body></html>");const W=E?Ye(w):w;if(ir===ke)try{j=new d().parseFromString(W,Fr)}catch{}if(!j||!j.documentElement){j=Z.createDocument(ir,"template",null);try{j.documentElement.innerHTML=sr?S:W}catch{}}const J=j.body||j.documentElement;return w&&z&&J.insertBefore(n.createTextNode(z),J.childNodes[0]||null),ir===ke?te.call(j,un?"html":"body")[0]:un?j.documentElement:J},ua=function(w){const j=D?D(w):w.ownerDocument;return K.call(j||w,w,u.SHOW_ELEMENT|u.SHOW_COMMENT|u.SHOW_TEXT|u.SHOW_PROCESSING_INSTRUCTION|u.SHOW_CDATA_SECTION,null)},Hi=function(w){return w=ka(w,wn," "),w=ka(w,xn," "),w=ka(w,En," "),w},ca=function(w){var j;w.normalize();const z=D?D(w):w.ownerDocument,W=K.call(z||w,w,u.SHOW_TEXT|u.SHOW_COMMENT|u.SHOW_CDATA_SECTION|u.SHOW_PROCESSING_INSTRUCTION,null);let J=W.nextNode();for(;J;)J.data=Hi(J.data),J=W.nextNode();const se=(j=w.querySelectorAll)===null||j===void 0?void 0:j.call(w,"template");se&&es(se,ue=>{ur(ue.content)&&ca(ue.content)})},Fs=function(w){const j=M?M(w):null;return typeof j!="string"||we(j)!=="form"?!1:typeof w.nodeName!="string"||typeof w.textContent!="string"||typeof w.removeChild!="function"||w.attributes!==A(w)||typeof w.removeAttribute!="function"||typeof w.removeAttributeNode!="function"||typeof w.getAttributeNode!="function"||typeof w.setAttribute!="function"||typeof w.namespaceURI!="string"||typeof w.insertBefore!="function"||typeof w.hasChildNodes!="function"||w.nodeType!==O(w)||w.childNodes!==P(w)},ur=function(w){if(!O||typeof w!="object"||w===null)return!1;try{return O(w)===Xt.documentFragment}catch{return!1}},$r=function(w){if(!O||typeof w!="object"||w===null)return!1;try{return typeof O(w)=="number"}catch{return!1}};function dn(B,w,j){B.length!==0&&es(B,z=>{z.call(e,w,j,ar)})}const cr=function(w,j){return!!(Me&&w.hasChildNodes()&&!$r(w.firstElementChild)&&It(a0,w.textContent)&&It(a0,w.innerHTML)||Me&&w.namespaceURI===ke&&gL[j]&&($r(w.firstElementChild)||typeof w.textContent=="string"&&It(yL[j],w.textContent))||w.nodeType===Xt.processingInstruction||Me&&w.nodeType===Xt.comment&&It(l0,w.data))},Ft=function(w,j){if(w instanceof RegExp)return It(w,j);if(w instanceof Function){for(var z=arguments.length,W=new Array(z>2?z-2:0),J=2;J<z;J++)W[J-2]=arguments[J];return!!w(j,...W)}return!1},zs=function(w,j,z){if(!Vr[j]&&Br(j)&&Ft(ln.tagNameCheck,j))return!1;if(Ns&&!jn[j]){const W=x(w),J=P(w);if(J&&W){const se=J.length;for(let ue=se-1;ue>=0;--ue){const je=w===z?g(J[ue],!0):J[ue];W.insertBefore(je,b(w))}}}return Ut(w),!0},Wi=function(w,j,z,W){return w.length===0?j:j===z||j===W?Zt(j):j},dr=function(w,j){return w===j||x(w)!==null?!1:(Ds&&Bi(w),!0)},Ie=function(w,j){if(dn(fe.beforeSanitizeElements,w,null),dr(w,j))return!0;if(Fs(w))return Ut(w),!0;const z=we(y(w));if(Te=Wi(fe.uponSanitizeElement,Te,Oi,Vi),dn(fe.uponSanitizeElement,w,{tagName:z,allowedTags:Te}),dr(w,j))return!0;if(cr(w,z))return Ut(w),!0;if(Vr[z]||!(Tn.tagCheck instanceof Function&&Tn.tagCheck(z))&&!Te[z]){const W=zs(w,z,j);return W===!1&&(dn(fe.afterSanitizeElements,w,null),dr(w,j))?!0:W}if(T(w)===Xt.element&&!oa(w)||(z==="noscript"||z==="noembed"||z==="noframes")&&It(pL,w.innerHTML))return Ut(w),!0;if(Re&&w.nodeType===Xt.text){const W=Hi(w.textContent);w.textContent!==W&&(Aa(e.removed,{element:w.cloneNode()}),w.textContent=W)}return dn(fe.afterSanitizeElements,w,null),dr(w,j)},qi=function(w,j,z){if(ks[j]||aa(j,w)||au&&(j==="id"||j==="name")&&(z in n||z in du))return!1;const W=Se[j]||Tn.attributeCheck instanceof Function&&Tn.attributeCheck(j,w);return Mi&&It(Qd,j)||ou&&It(Yd,j)?!0:W?Fi[j]||It(As,ka(z,Li,""))||(j==="src"||j==="xlink:href"||j==="href")&&w!=="script"&&Z_(z,"data:")===0&&Ln[w]||bs&&!It(Ss,ka(z,Li,""))?!0:!z:Br(w)&&Ft(ln.tagNameCheck,w)&&Ft(ln.attributeNameCheck,j,w)||j==="is"&&ln.allowCustomizedBuiltInElements&&Ft(ln.tagNameCheck,z)},Gi=me({},["annotation-xml","color-profile","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","missing-glyph"]),Br=function(w){return!Gi[Fa(w)]&&It(Xo,w)},Zd=function(w,j,z,W){if(E&&typeof f=="object"&&typeof f.getAttributeType=="function"&&!z)switch(f.getAttributeType(w,j)){case"TrustedHTML":return Ye(W);case"TrustedScriptURL":return Qt(W)}return W},pu=function(w,j,z,W){try{return z?w.setAttributeNS(z,j,W):w.setAttribute(j,W),Fs(w)?(Ut(w),!1):!0}catch{return lr(j,w),!1}},mu=function(w,j){if(dn(fe.beforeSanitizeAttributes,w,null),dr(w,j))return;const z=w.attributes;if(!z||Fs(w))return;Se=Wi(fe.uponSanitizeAttribute,Se,Jo,Cs);const W={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:Se,forceKeepAttr:void 0};let J=z.length;const se=we(w.nodeName);for(;J--;){const ue=z[J],je=ue.name,zt=ue.namespaceURI,Be=ue.value,Hr=we(je),ha=Be;let Xe=je==="value"?ha:Yj(ha),Ki=!1;if(W.attrName=Hr,W.attrValue=Xe,W.keepAttr=!0,W.forceKeepAttr=void 0,dn(fe.uponSanitizeAttribute,w,W),Xe=W.attrValue,lu&&(Hr==="id"||Hr==="name")&&Z_(Xe,Ps)!==0&&(lr(je,w,ue),Xe=Ps+Xe,Ki=!0),Me&&It(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i,Xe)){lr(je,w,ue);continue}if(Hr==="attributename"&&J_(Xe,"href")){lr(je,w,ue);continue}if(!W.forceKeepAttr){if(!W.keepAttr){lr(je,w,ue);continue}if(!Zo&&It(mL,Xe)){lr(je,w,ue);continue}if(Re&&(Xe=Hi(Xe)),!qi(se,Hr,Xe)){lr(je,w,ue);continue}Xe=Zd(se,Hr,zt,Xe),Xe!==ha&&pu(w,je,zt,Xe)&&Ki&&X_(e.removed)}}dn(fe.afterSanitizeAttributes,w,null),dr(w,j)},$s=function(w){let j=null;const z=ua(w);for(dn(fe.beforeSanitizeShadowDOM,w,null);j=z.nextNode();)if(dn(fe.uponSanitizeShadowNode,j,null),Ie(j,w),mu(j,w),ur(j.content)&&$s(j.content),T(j)===Xt.element){const W=_(j);ur(W)&&(da(W),$s(W))}dn(fe.afterSanitizeShadowDOM,w,null)},da=function(w){const j=[{node:w,shadow:null}];for(;j.length>0;){const z=j.pop();if(z.shadow){$s(z.shadow);continue}const W=z.node,J=T(W)===Xt.element,se=P(W);if(se)for(let ue=se.length-1;ue>=0;--ue)j.push({node:se[ue],shadow:null});if(J){const ue=M?M(W):null;if(typeof ue=="string"&&we(ue)==="template"){const je=W.content;ur(je)&&j.push({node:je,shadow:null})}}if(J){const ue=_(W);ur(ue)&&j.push({node:null,shadow:ue},{node:ue,shadow:null})}}};return e.sanitize=function(B){let w=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},j=null,z=null,W=null,J=null;if(sr=!B,sr&&(B="<!-->"),typeof B!="string"&&!$r(B)&&(B=tL(B),typeof B!="string"))throw Kr("dirty is not a string, aborting");if(!e.isSupported)return B;Rs?(Te=Vi,Se=Cs):$i(w),(fe.uponSanitizeElement.length>0||fe.uponSanitizeAttribute.length>0)&&(Te=Zt(Te)),fe.uponSanitizeAttribute.length>0&&(Se=Zt(Se)),e.removed=[];const se=Ds&&typeof B!="string"&&$r(B);if(se){la(B);const zt=y(B);if(typeof zt=="string"){const Be=we(zt);if(!Te[Be]||Vr[Be])throw zr(B),Kr("root node is forbidden and cannot be sanitized in-place")}if(Fs(B))throw zr(B),Kr("root node is clobbered and cannot be sanitized in-place");try{da(B)}catch(Be){throw zr(B),Be}}else if($r(B))j=Us("<!---->"),z=j.ownerDocument.importNode(B,!0),z.nodeType===Xt.element&&z.nodeName==="BODY"||z.nodeName==="HTML"?j=z:j.appendChild(z),da(j);else{if(!rr&&!Re&&!un&&B.indexOf("<")===-1)return E&&Ur?Ye(B):B;if(j=Us(B),!j)return rr?null:Ur?S:""}j&&nr&&Ut(j.firstChild);const ue=se?B:j;try{const zt=ua(ue);for(;W=zt.nextNode();)Ie(W,ue),mu(W,ue),ur(W.content)&&$s(W.content)}catch(zt){throw se&&(zr(B),es(e.removed,Be=>{Be.element&&Bi(Be.element)})),zt}if(se){let zt=!1;if(es(e.removed,Be=>{Be.element&&(Be.element===B&&(zt=!0),Bi(Be.element))}),zt)throw Kr("a node selected for removal could not be safely returned; refusing to sanitize in place");return Re&&ca(B),B}if(rr){if(Re&&ca(j),Ui)for(J=he.call(j.ownerDocument);j.firstChild;)J.appendChild(j.firstChild);else J=j;return(Se.shadowroot||Se.shadowrootmode)&&(J=_e.call(r,J,!0)),J}let je=un?j.outerHTML:j.innerHTML;return un&&Te["!doctype"]&&j.ownerDocument&&j.ownerDocument.doctype&&j.ownerDocument.doctype.name&&It(hL,j.ownerDocument.doctype.name)&&(je="<!DOCTYPE "+j.ownerDocument.doctype.name+`>
`+je),Re&&(je=Hi(je)),E&&Ur?Ye(je):je},e.setConfig=function(){let B=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};$i(B),Rs=!0,Vi=Te,Cs=Se},e.clearConfig=function(){ar=null,Rs=!1,Vi=null,Cs=null,E=N,S=""},e.isValidAttribute=function(B,w,j){ar||$i({});const z=we(B),W=we(w);return qi(z,W,j)},e.addHook=function(B,w){typeof w=="function"&&$t(fe,B)&&Aa(fe[B],w)},e.removeHook=function(B,w){if($t(fe,B)){if(w!==void 0){const j=Kj(fe[B],w);return j===-1?void 0:Qj(fe[B],j,1)[0]}return X_(fe[B])}},e.removeHooks=function(B){$t(fe,B)&&(fe[B]=[])},e.removeAllHooks=function(){fe=u0()},e}var YT=QT();function wL(){var y,E,S,N,L,k,Ge,Ye,Qt,ct,q,Z,K,he;const{id:t}=Ux(),e=jr(),{user:n}=er(),[r,i]=R.useState(null),[s,o]=R.useState(!0),[l,u]=R.useState(null),[d,f]=R.useState(!1),[m,g]=R.useState(!1),[I,C]=R.useState(!1),[b,P]=R.useState(!1);if(R.useEffect(()=>{let te=!0;return o(!0),u(null),IT(t).then(_e=>{te&&(i(_e),o(!1))}).catch(_e=>{te&&(u(_e),o(!1))}),()=>{te=!1}},[t]),R.useEffect(()=>{!n||!r||CT(n.uid,r.id).then(f).catch(()=>{})},[n,r]),s)return c.jsx("div",{className:"container page",children:c.jsx(_n,{className:"spin",size:32})});if(l)return c.jsx("div",{className:"container page",children:c.jsxs("div",{className:"empty-state",children:["Failed to load anime: ",l.message]})});if(!r)return null;const x=((y=r.title)==null?void 0:y.english)||((E=r.title)==null?void 0:E.userPreferred)||((S=r.title)==null?void 0:S.romaji),_=r.bannerImage||((N=r.coverImage)==null?void 0:N.extraLarge),A=YT.sanitize(r.description||"<p>No description available.</p>"),O=(((L=r.recommendations)==null?void 0:L.nodes)||[]).map(te=>te.mediaRecommendation).filter(Boolean),M=(((k=r.relations)==null?void 0:k.edges)||[]).map(te=>te.node).filter(Boolean),D=async()=>{if(!n)return C(!0);P(!0);try{d?(await Ng(n.uid,r.id),f(!1)):(await Pg(n.uid,r,"PLANNED"),f(!0))}catch(te){console.warn(te)}P(!1)},T=async()=>{if(!n)return C(!0);P(!0);try{m?(await NT(n.uid,r.id),g(!1)):(await PT(n.uid,r),g(!0))}catch(te){console.warn(te)}P(!1)};return(Ge=r.externalLinks)==null||Ge.find(te=>te.site==="MyAnimeList"),c.jsxs("div",{className:"page details",children:[c.jsxs("div",{className:"details-hero",style:{backgroundImage:`url(${_})`},children:[c.jsx("div",{className:"details-overlay"}),c.jsxs("div",{className:"container details-hero-inner",children:[c.jsx("div",{className:"details-cover",children:c.jsx("img",{src:(Ye=r.coverImage)==null?void 0:Ye.extraLarge,alt:x})}),c.jsxs("div",{className:"details-info",children:[c.jsx("h1",{children:x}),((Qt=r.title)==null?void 0:Qt.native)&&c.jsx("p",{className:"native",children:r.title.native}),c.jsxs("div",{className:"details-meta",children:[r.format&&c.jsx("span",{className:"pill",children:r.format}),r.seasonYear&&c.jsxs("span",{className:"pill",children:[r.season," ",r.seasonYear]}),r.averageScore&&c.jsxs("span",{className:"pill gold",children:[c.jsx(kd,{size:12})," ",r.averageScore]}),r.episodes&&c.jsxs("span",{className:"pill",children:[r.episodes," Episodes"]}),r.status&&c.jsx("span",{className:"pill",children:r.status.replace("_"," ")})]}),c.jsx("div",{className:"genre-list",children:(r.genres||[]).map(te=>c.jsx("span",{className:"chip",children:te},te))}),c.jsx("div",{className:"description",dangerouslySetInnerHTML:{__html:A}}),c.jsxs("div",{className:"details-actions",children:[c.jsxs("button",{className:"btn primary",onClick:()=>e(`/watch/${r.id}`),children:[c.jsx(Im,{size:16})," Watch Now"]}),c.jsxs("button",{className:"btn",onClick:D,disabled:b,children:[c.jsx(Zx,{size:16})," ",d?"In Watchlist":"Add to Watchlist"]}),c.jsxs("button",{className:"btn",onClick:T,disabled:b,children:[c.jsx(Kk,{size:16,fill:m?"currentColor":"none"})," ",m?"Favorited":"Favorite"]}),((ct=r.trailer)==null?void 0:ct.id)&&r.trailer.site==="youtube"&&c.jsxs("a",{className:"btn",href:`https://www.youtube.com/watch?v=${r.trailer.id}`,target:"_blank",rel:"noreferrer",children:[c.jsx(Qx,{size:16})," Trailer"]})]})]})]})]}),c.jsx("div",{className:"container details-body",children:c.jsxs("div",{className:"details-main",children:[c.jsxs("div",{className:"info-grid",children:[c.jsx(Fn,{label:"Format",value:r.format}),c.jsx(Fn,{label:"Status",value:(q=r.status)==null?void 0:q.replace("_"," ")}),c.jsx(Fn,{label:"Episodes",value:r.episodes}),c.jsx(Fn,{label:"Duration",value:r.duration?`${r.duration} min`:null}),c.jsx(Fn,{label:"Start Date",value:c0(r.startDate)}),c.jsx(Fn,{label:"End Date",value:c0(r.endDate)}),c.jsx(Fn,{label:"Studios",value:(((Z=r.studios)==null?void 0:Z.nodes)||[]).map(te=>te.name).join(", ")}),c.jsx(Fn,{label:"Country",value:r.countryOfOrigin}),c.jsx(Fn,{label:"Popularity",value:(K=r.popularity)==null?void 0:K.toLocaleString()}),c.jsx(Fn,{label:"Favorites",value:(he=r.favourites)==null?void 0:he.toLocaleString()})]}),(O.length>0||M.length>0)&&c.jsxs("section",{style:{marginTop:32},children:[c.jsx("div",{className:"section-head",children:c.jsx("h2",{children:"Recommendations"})}),c.jsx(Kd,{anime:[...O,...M].slice(0,12)})]})]})}),c.jsx(su,{open:I,onClose:()=>C(!1)}),c.jsx("style",{children:`
        .details-hero {
          position: relative; aspect-ratio: 21/9; min-height: 420px;
          background-size: cover; background-position: center;
        }
        .details-overlay {
          position: absolute; inset: 0;
          background:
            linear-gradient(to bottom, rgba(8,8,12,0.55), rgba(8,8,12,0.98)),
            linear-gradient(to right, rgba(8,8,12,0.85), transparent);
        }
        .details-hero-inner {
          position: relative; height: 100%; display: flex; gap: 32px;
          align-items: flex-end; padding-bottom: 32px; flex-wrap: wrap;
        }
        .details-cover {
          width: 200px; flex-shrink: 0; border-radius: 14px; overflow: hidden;
          border: 1px solid var(--border); box-shadow: var(--shadow);
        }
        .details-cover img { width: 100%; aspect-ratio: 2/3; object-fit: cover; }
        .details-info { flex: 1; min-width: 260px; display: flex; flex-direction: column; gap: 10px; }
        .details-info h1 {
          margin: 0; font-size: clamp(24px, 3vw, 40px);
          font-weight: 800; letter-spacing: -0.02em;
        }
        .native { margin: 0; font-size: 13px; color: var(--text-dim); }
        .details-meta { display: flex; flex-wrap: wrap; gap: 8px; }
        .pill {
          display: inline-flex; align-items: center; gap: 5px;
          background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.15);
          padding: 5px 10px; border-radius: 999px; font-size: 12px; font-weight: 600;
        }
        .pill.gold { color: #fcd34d; }
        .genre-list { display: flex; flex-wrap: wrap; gap: 6px; }
        .description { font-size: 14px; line-height: 1.65; color: var(--text-dim); max-width: 780px; }
        .description p { margin: 0 0 8px; }
        .details-actions { display: flex; gap: 8px; flex-wrap: wrap; margin-top: 8px; }
        .details-body { margin-top: 40px; }
        .details-main { max-width: 1000px; }
        .info-grid {
          display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 14px; background: var(--panel); border: 1px solid var(--border);
          border-radius: var(--radius); padding: 20px;
        }
        .info-cell { display: flex; flex-direction: column; gap: 4px; }
        .info-cell .lbl {
          font-size: 11px; color: var(--text-muted); text-transform: uppercase;
          letter-spacing: 0.05em; font-weight: 600;
        }
        .info-cell .val { font-size: 14px; font-weight: 600; }
        @media (max-width: 720px) {
          .details-hero { aspect-ratio: auto; padding: 40px 0 24px; }
          .details-hero-inner { padding: 0 20px; }
          .details-cover { width: 130px; }
        }
        .spin { animation: spin 0.9s linear infinite; }
        @keyframes spin { to { transform: rotate(360deg); } }
      `})]})}function Fn({label:t,value:e}){return c.jsxs("div",{className:"info-cell",children:[c.jsx("span",{className:"lbl",children:t}),c.jsx("span",{className:"val",children:e||"—"})]})}function c0(t){return!t||!t.year?null:`${["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][(t.month||1)-1]} ${t.day||1}, ${t.year}`}function xL({url:t,title:e,onProgress:n,onComplete:r,onError:i}){const s=R.useRef(null),[o,l]=R.useState(!0),[u,d]=R.useState(null),f=R.useRef(Date.now()),m=R.useRef(0);return R.useEffect(()=>{l(!0),d(null),f.current=Date.now(),m.current=0},[t]),R.useEffect(()=>{const g=I=>{const C=/^https:\/\/([a-z0-9-]+\.)*megaplay\.buzz$/.test(I.origin),b=/^https:\/\/([a-z0-9-]+\.)*filmu\.in$/.test(I.origin);if(!C&&!b)return;let P=I.data;if(typeof P=="string")try{P=JSON.parse(P)}catch{return}!P||typeof P!="object"||(P.event==="time"&&typeof P.time=="number"&&(n&&n(P.time,P.duration||0),m.current=Date.now()),P.event==="complete"&&r&&r(),P.event==="error"&&(d("The player reported a playback error."),i&&i(P)),P.type==="watching-log"&&typeof P.currentTime=="number"&&(n&&n(P.currentTime,P.duration||0),m.current=Date.now()))};return window.addEventListener("message",g),()=>window.removeEventListener("message",g)},[n,r,i]),R.useEffect(()=>{const g=setInterval(()=>{if(!n)return;if(Date.now()-m.current>15e3){const C=Math.floor((Date.now()-f.current)/1e3);n(C,0)}},2e4);return()=>clearInterval(g)},[n]),t?c.jsxs("div",{className:"embed-player",children:[o&&c.jsxs("div",{className:"player-overlay",children:[c.jsx(_n,{size:40,className:"spin"}),c.jsx("p",{children:"Loading stream…"})]}),u&&c.jsxs("div",{className:"player-overlay error",children:[c.jsx(Ev,{size:36}),c.jsx("p",{children:u}),c.jsxs("button",{className:"btn sm",onClick:()=>window.location.reload(),children:[c.jsx(rb,{size:14})," Reload"]})]}),c.jsx("iframe",{ref:s,src:t,title:e||"Anime stream",onLoad:()=>l(!1),frameBorder:"0",scrolling:"no",allowFullScreen:!0,allow:"autoplay; encrypted-media; picture-in-picture; fullscreen; clipboard-write"}),c.jsx("style",{children:`
        .embed-player {
          position: relative; width: 100%; aspect-ratio: 16/9;
          background: #000; border-radius: 14px; overflow: hidden;
          border: 1px solid var(--border);
        }
        .embed-player iframe {
          position: absolute; inset: 0;
          width: 100%; height: 100%;
        }
        .player-overlay {
          position: absolute; inset: 0; z-index: 2;
          display: flex; flex-direction: column;
          align-items: center; justify-content: center; gap: 12px;
          background: rgba(0,0,0,0.85); color: var(--accent);
          backdrop-filter: blur(6px);
        }
        .player-overlay p { margin: 0; color: var(--text-dim); font-size: 13px; }
        .player-overlay.error { color: var(--danger); }
        .btn.sm { padding: 6px 12px; font-size: 12px; }
        .spin { animation: spin 0.9s linear infinite; }
        @keyframes spin { to { transform: rotate(360deg); } }
      `})]}):c.jsxs("div",{className:"player-empty",children:[c.jsx(Ev,{size:36}),c.jsx("h3",{children:"No stream available for this episode"}),c.jsx("p",{className:"muted",children:"Try switching servers above, or pick a different episode."}),c.jsx("style",{children:`
          .player-empty {
            aspect-ratio: 16/9; display: flex; flex-direction: column;
            align-items: center; justify-content: center; gap: 10px;
            background: linear-gradient(135deg, #0e0e16, #16161f);
            border: 1px solid var(--border); border-radius: 14px;
            padding: 40px; text-align: center;
          }
          .player-empty svg { color: var(--accent); }
          .player-empty h3 { margin: 0; font-size: 18px; }
          .player-empty p { margin: 0; max-width: 420px; font-size: 13px; line-height: 1.6; }
        `})]})}const EL="https://anikotoapi.site",Sp=new Map,d0=1e3*60*60;function Ap(t){return`anikoto:${t}`}function TL(t){const e=Ap(t),n=Sp.get(e);if(n&&Date.now()-n.t<d0)return n.v;try{const r=sessionStorage.getItem(e);if(!r)return null;const i=JSON.parse(r);return Date.now()-i.t>d0?(sessionStorage.removeItem(e),null):(Sp.set(e,i),i.v)}catch{return null}}function IL(t,e){const n={t:Date.now(),v:e};Sp.set(Ap(t),n);try{sessionStorage.setItem(Ap(t),JSON.stringify(n))}catch{}}async function SL(t,{signal:e}={}){const n=TL(t);if(n)return n;const r=await fetch(`${EL}${t}`,{signal:e,headers:{Accept:"application/json"}});if(r.status===429)throw new Error("Anikoto rate limit reached. Try again shortly.");if(r.status===403)throw new Error("Anikoto blocked this request.");if(!r.ok)throw new Error(`Anikoto request failed (${r.status})`);const i=await r.json();return IL(t,i),i}async function AL(t,e){if(!t)throw new Error("Series id is required");return SL(`/series/${encodeURIComponent(t)}`,e)}function h0(t,e){var s,o,l;const n=(t==null?void 0:t.episodes)||((s=t==null?void 0:t.data)==null?void 0:s.episodes)||((o=t==null?void 0:t.series)==null?void 0:o.episodes)||((l=t==null?void 0:t.result)==null?void 0:l.episodes)||[];if(!Array.isArray(n)||n.length===0)return null;const r=Number(e),i=n.find(u=>Number(u.episode)===r||Number(u.number)===r||Number(u.ep)===r);return i||(r>=1&&r<=n.length?n[r-1]:null)}function kL(t){if(!t)return null;const e=t.episode_embed_id||t.embed_id||t.embedId||t.id||t.episodeId;return e?String(e).replace(/^ep_/,""):null}const Ei=[{id:"megaplay",label:"MegaPlay",languages:["sub","dub"],buildUrl({anilistId:t,episode:e,language:n,anikotoEpisode:r}){const i=kL(r);return i?`https://megaplay.buzz/stream/s-2/${i}/${n}`:t&&e?`https://megaplay.buzz/stream/ani/${t}/${e}/${n}`:null}},{id:"filmu",label:"FilmU",languages:["sub","dub"],buildUrl({anilistId:t,episode:e,language:n}){return!t||!e?null:`https://embed.filmu.in/anime/${t}/1/${e}`}}],bL=Object.fromEntries(Ei.map(t=>[t.id,t]));function RL(t){return bL[t]||Ei[0]}function CL({providerId:t,language:e,onProviderChange:n,onLanguageChange:r,status:i}){const[s,o]=R.useState(!1),l=R.useRef(null);R.useEffect(()=>{const d=f=>{l.current&&!l.current.contains(f.target)&&o(!1)};return document.addEventListener("mousedown",d),()=>document.removeEventListener("mousedown",d)},[]);const u=Ei.find(d=>d.id===t)||Ei[0];return c.jsxs("div",{className:"server-selector",ref:l,children:[c.jsxs("button",{className:"server-btn",onClick:()=>o(d=>!d),"aria-haspopup":"listbox","aria-expanded":s,children:[c.jsx(ob,{size:14}),c.jsx("span",{className:"label",children:u.label}),c.jsx("span",{className:"status-dot","data-status":i||"idle"}),c.jsx(Ad,{size:14,className:s?"rot":""})]}),c.jsx("div",{className:"language-toggle",role:"group","aria-label":"Language",children:u.languages.map(d=>c.jsxs("button",{className:d===e?"active":"",onClick:()=>r(d),children:[c.jsx(Xk,{size:12}),d.toUpperCase()]},d))}),s&&c.jsxs("div",{className:"server-menu glass",role:"listbox",children:[c.jsx("div",{className:"menu-head",children:"Servers"}),Ei.map(d=>c.jsxs("button",{className:`server-item ${d.id===u.id?"active":""}`,role:"option","aria-selected":d.id===u.id,onClick:()=>{n(d.id),o(!1)},children:[c.jsxs("div",{className:"item-info",children:[c.jsx("span",{className:"item-label",children:d.label}),c.jsx("span",{className:"item-langs",children:d.languages.map(f=>f.toUpperCase()).join(" · ")})]}),d.id===u.id&&c.jsx($k,{size:14})]},d.id)),c.jsx("div",{className:"menu-foot",children:"Both servers are third-party embeds. Hoshii does not host video."})]}),c.jsx("style",{children:`
        .server-selector {
          position: relative; display: flex; align-items: center; gap: 8px;
        }
        .server-btn {
          display: inline-flex; align-items: center; gap: 8px;
          background: var(--panel); border: 1px solid var(--border);
          color: var(--text); font-size: 13px; font-weight: 600;
          padding: 8px 12px; border-radius: 10px; transition: var(--transition);
        }
        .server-btn:hover { border-color: var(--accent); }
        .server-btn .label { min-width: 60px; text-align: left; }
        .server-btn svg.rot { transform: rotate(180deg); }
        .status-dot {
          width: 7px; height: 7px; border-radius: 50%;
          background: var(--text-muted); flex-shrink: 0;
        }
        .status-dot[data-status='ready'] { background: #4ade80; }
        .status-dot[data-status='loading'] { background: #fcd34d; }
        .status-dot[data-status='error'] { background: var(--danger); }
        .language-toggle {
          display: inline-flex; background: var(--panel); border: 1px solid var(--border);
          border-radius: 10px; padding: 3px; gap: 2px;
        }
        .language-toggle button {
          display: inline-flex; align-items: center; gap: 4px;
          background: transparent; border: none; color: var(--text-dim);
          font-weight: 700; font-size: 11px; padding: 6px 10px; border-radius: 7px;
          transition: var(--transition);
        }
        .language-toggle button.active { background: var(--accent-soft); color: var(--accent); }
        .language-toggle button:hover:not(.active) { color: var(--text); }
        .server-menu {
          position: absolute; top: calc(100% + 8px); left: 0;
          min-width: 260px; border-radius: 12px; padding: 6px; z-index: 50;
          animation: fadeIn 0.15s ease;
        }
        .menu-head {
          font-size: 10px; text-transform: uppercase; letter-spacing: 0.08em;
          color: var(--text-muted); padding: 8px 10px 4px; font-weight: 700;
        }
        .server-item {
          display: flex; align-items: center; justify-content: space-between;
          width: 100%; padding: 10px 12px; border-radius: 8px;
          background: transparent; border: none; color: var(--text);
          text-align: left; transition: var(--transition);
        }
        .server-item:hover { background: var(--accent-soft); }
        .server-item.active { background: var(--accent-soft); color: var(--accent); }
        .item-info { display: flex; flex-direction: column; gap: 2px; }
        .item-label { font-size: 13px; font-weight: 600; }
        .item-langs { font-size: 10px; color: var(--text-muted); letter-spacing: 0.06em; }
        .menu-foot {
          font-size: 10.5px; color: var(--text-muted); padding: 8px 12px 6px;
          border-top: 1px solid var(--border-soft); margin-top: 4px; line-height: 1.5;
        }
      `})]})}const PL="modulepreload",NL=function(t){return"/"+t},f0={},p0=function(e,n,r){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),l=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));i=Promise.allSettled(n.map(u=>{if(u=NL(u),u in f0)return;f0[u]=!0;const d=u.endsWith(".css"),f=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${f}`))return;const m=document.createElement("link");if(m.rel=d?"stylesheet":PL,d||(m.as="script"),m.crossOrigin="",m.href=u,l&&m.setAttribute("nonce",l),document.head.appendChild(m),d)return new Promise((g,I)=>{m.addEventListener("load",g),m.addEventListener("error",()=>I(new Error(`Unable to preload CSS for ${u}`)))})}))}function s(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return i.then(o=>{for(const l of o||[])l.status==="rejected"&&s(l.reason);return e().catch(s)})};function XT({comment:t,animeId:e,user:n,onLike:r,onEdit:i,onDelete:s,depth:o=0}){const[l,u]=R.useState(o===0),[d,f]=R.useState([]),[m,g]=R.useState(""),[I,C]=R.useState(!1),[b,P]=R.useState(!1),[x,_]=R.useState(t.text),[A,O]=R.useState(!1);R.useEffect(()=>{if(!l)return;const y=BT(e,t.id,f);return()=>y()},[l,e,t.id]),R.useEffect(()=>{if(!n){O(!1);return}HT({animeId:e,commentId:t.id,uid:n.uid}).then(O).catch(()=>{})},[n,e,t.id]);const M=async()=>{if(n&&m.trim()){C(!0);try{await zT({animeId:e,commentId:t.id,user:n,text:m.trim()}),g("")}catch(y){console.warn(y)}finally{C(!1)}}},D=async()=>{x.trim()&&(await i(x.trim()),P(!1))},T=n&&t.authorId===n.uid;return c.jsxs("div",{className:`comment ${o>0?"nested":""}`,children:[c.jsxs("div",{className:"comment-head",children:[c.jsx("div",{className:"avatar-sm",children:t.authorAvatar?c.jsx("img",{src:t.authorAvatar,alt:""}):(t.authorName||"U")[0].toUpperCase()}),c.jsxs("div",{className:"name-row",children:[c.jsx("span",{className:"name",children:t.authorName||"Anonymous"}),c.jsx("span",{className:"dot",children:"•"}),c.jsx("span",{className:"time",children:DL(t.createdAt)})]})]}),c.jsx("div",{className:"comment-body",children:b?c.jsxs("div",{className:"edit-wrap",children:[c.jsx("textarea",{value:x,onChange:y=>_(y.target.value),rows:3}),c.jsxs("div",{className:"edit-actions",children:[c.jsx("button",{className:"btn ghost",onClick:()=>P(!1),children:"Cancel"}),c.jsx("button",{className:"btn primary",onClick:D,children:"Save"})]})]}):c.jsx("p",{className:"text",children:t.text})}),c.jsxs("div",{className:"comment-actions",children:[c.jsxs("button",{className:`action ${A?"active":""}`,onClick:async()=>{if(!n){r==null||r();return}await(r==null?void 0:r()),O(y=>!y)},children:[c.jsx(lb,{size:13})," ",t.likeCount||0]}),c.jsx("button",{className:"action",disabled:!0,children:c.jsx(ab,{size:13})}),o<2&&c.jsxs("button",{className:"action",onClick:()=>u(y=>!y),children:[c.jsx(ib,{size:13})," Reply"]}),T&&!b&&c.jsxs(c.Fragment,{children:[c.jsxs("button",{className:"action",onClick:()=>P(!0),children:[c.jsx(nb,{size:12})," Edit"]}),c.jsxs("button",{className:"action danger",onClick:s,children:[c.jsx(tE,{size:12})," Delete"]})]})]}),o<2&&l&&c.jsxs("div",{className:"replies-wrap",children:[d.length>0&&c.jsx("div",{className:"replies",children:d.map(y=>c.jsx(XT,{comment:y,animeId:e,user:n,depth:o+1,onLike:async()=>{if(n)try{await jg({animeId:e,commentId:y.id,uid:n.uid})}catch(E){console.warn(E)}},onEdit:async E=>{const{editComment:S}=await p0(async()=>{const{editComment:N}=await Promise.resolve().then(()=>H_);return{editComment:N}},void 0);await S(e,y.id,E)},onDelete:async()=>{const{deleteComment:E}=await p0(async()=>{const{deleteComment:S}=await Promise.resolve().then(()=>H_);return{deleteComment:S}},void 0);confirm("Delete this reply?")&&await E(e,y.id)}},y.id))}),n&&c.jsxs("div",{className:"reply-editor",children:[c.jsx("input",{value:m,onChange:y=>g(y.target.value),placeholder:"Write a reply...",onKeyDown:y=>y.key==="Enter"&&M()}),c.jsxs("button",{className:"btn primary sm",onClick:M,disabled:I,children:[I&&c.jsx(_n,{size:12,className:"spin"})," Reply"]})]})]}),c.jsx("style",{children:`
        .comment { padding: 12px 0; }
        .comment.nested {
          padding-left: 20px; margin-left: 14px;
          border-left: 1px solid var(--border-soft);
        }
        .comment-head { display: flex; align-items: center; gap: 10px; }
        .avatar-sm {
          width: 32px; height: 32px; border-radius: 8px; display: flex; align-items: center; justify-content: center;
          background: linear-gradient(135deg, var(--accent-strong), var(--accent)); color: #0b0b12; font-weight: 700;
          font-size: 13px; overflow: hidden; flex-shrink: 0;
        }
        .avatar-sm img { width: 100%; height: 100%; object-fit: cover; }
        .name-row { display: flex; align-items: center; gap: 6px; font-size: 13px; }
        .name { font-weight: 600; }
        .dot, .time { color: var(--text-muted); font-size: 12px; }
        .comment-body { margin: 8px 0 8px 42px; }
        .text { margin: 0; font-size: 14px; line-height: 1.55; color: var(--text); white-space: pre-wrap; word-wrap: break-word; }
        .edit-wrap { display: flex; flex-direction: column; gap: 8px; }
        .edit-wrap textarea {
          background: var(--panel-2); border: 1px solid var(--border); border-radius: 8px;
          padding: 10px; color: var(--text); font-family: inherit; font-size: 14px; resize: vertical;
        }
        .edit-actions { display: flex; gap: 8px; justify-content: flex-end; }
        .comment-actions { display: flex; gap: 4px; margin-left: 42px; }
        .action {
          background: transparent; border: none; color: var(--text-dim);
          display: inline-flex; align-items: center; gap: 5px;
          padding: 5px 8px; border-radius: 6px; font-size: 12px; font-weight: 500;
          transition: var(--transition);
        }
        .action:hover:not(:disabled) { background: var(--panel-2); color: var(--text); }
        .action.active { color: var(--accent); }
        .action.danger { color: var(--danger); }
        .action:disabled { opacity: 0.5; cursor: default; }
        .replies-wrap { margin-left: 42px; margin-top: 6px; animation: fadeIn 0.2s ease; }
        .replies { display: flex; flex-direction: column; }
        .reply-editor { display: flex; gap: 8px; margin-top: 8px; }
        .reply-editor input {
          flex: 1; background: var(--panel-2); border: 1px solid var(--border);
          border-radius: 8px; padding: 8px 12px; color: var(--text); font-family: inherit; font-size: 13px;
          outline: none;
        }
        .reply-editor input:focus { border-color: var(--accent); }
        .btn.sm { padding: 6px 12px; font-size: 12px; }
        .spin { animation: spin 0.9s linear infinite; }
        @keyframes spin { to { transform: rotate(360deg); } }
      `})]})}function DL(t){if(!t)return"just now";const e=t.seconds?new Date(t.seconds*1e3):new Date(t),n=Math.floor((Date.now()-e.getTime())/1e3);return n<60?"just now":n<3600?`${Math.floor(n/60)} minutes ago`:n<86400?`${Math.floor(n/3600)} hours ago`:n<2592e3?`${Math.floor(n/86400)} days ago`:n<31536e3?`${Math.floor(n/2592e3)} months ago`:`${Math.floor(n/31536e3)} years ago`}function jL({animeId:t,episode:e,animeTitle:n}){const{user:r}=er(),[i,s]=R.useState([]),[o,l]=R.useState(!0),[u,d]=R.useState("newest"),[f,m]=R.useState(""),[g,I]=R.useState(!1),[C,b]=R.useState(""),[P,x]=R.useState(!1);R.useEffect(()=>{if(!Jn){l(!1);return}l(!0);const M=$T(t,D=>{s(D),l(!1)});return()=>M()},[t]);const _=R.useMemo(()=>{const M=[...i];return u==="newest"&&M.sort((D,T)=>{var y,E;return(((y=T.createdAt)==null?void 0:y.seconds)||0)-(((E=D.createdAt)==null?void 0:E.seconds)||0)}),u==="oldest"&&M.sort((D,T)=>{var y,E;return(((y=D.createdAt)==null?void 0:y.seconds)||0)-(((E=T.createdAt)==null?void 0:E.seconds)||0)}),u==="top"&&M.sort((D,T)=>(T.likeCount||0)-(D.likeCount||0)),M},[i,u]),A=async()=>{if(!r){x(!0);return}if(f.trim()){I(!0),b("");try{await VT({animeId:t,episode:e,user:r,text:f.trim()}),m("")}catch(M){b(M.message||"Failed to post comment.")}finally{I(!1)}}},O=i.length+i.reduce((M,D)=>M+(D.replyCount||0),0);return c.jsxs("section",{className:"comments",children:[c.jsxs("div",{className:"comments-head",children:[c.jsxs("div",{children:[c.jsx("h2",{children:"The Anime Community"}),c.jsxs("p",{className:"muted",children:["Discuss ",n,e?` — Episode ${e}`:""]})]}),c.jsxs("span",{className:"chip",children:[c.jsx(tb,{size:14})," ",O," Comments"]})]}),c.jsxs("div",{className:"comments-toolbar",children:[c.jsxs("button",{className:"ghost-link",type:"button",children:[c.jsx(Hk,{size:14})," Rules"]}),c.jsx("button",{className:"ghost-link",type:"button",children:"FAQ"}),c.jsx("div",{className:"spacer"}),c.jsxs("label",{className:"sort-label",children:["Sort by:",c.jsxs("select",{value:u,onChange:M=>d(M.target.value),children:[c.jsx("option",{value:"newest",children:"Newest"}),c.jsx("option",{value:"oldest",children:"Oldest"}),c.jsx("option",{value:"top",children:"Top"})]})]})]}),!Jn&&c.jsxs("div",{className:"notice",children:["Firebase isn't configured. Add your keys to ",c.jsx("code",{children:".env"})," to enable comments."]}),c.jsx("div",{className:"comment-editor glass",children:r?c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"editor-user",children:[c.jsx("div",{className:"avatar-sm",children:r.photoURL?c.jsx("img",{src:r.photoURL,alt:""}):(r.displayName||"U")[0].toUpperCase()}),c.jsx("span",{children:r.displayName||"User"})]}),c.jsx("textarea",{placeholder:"Share your thoughts...",value:f,onChange:M=>m(M.target.value),rows:3,maxLength:3e3}),C&&c.jsx("div",{className:"error",children:C}),c.jsxs("div",{className:"editor-actions",children:[c.jsxs("span",{className:"muted-2",children:[f.length," / 3000"]}),c.jsxs("button",{className:"btn primary",onClick:A,disabled:g||!f.trim(),children:[g&&c.jsx(_n,{size:14,className:"spin"})," Post Comment"]})]})]}):c.jsxs("div",{className:"logged-out",children:[c.jsx("p",{children:"Log in to comment"}),c.jsxs("div",{className:"btn-row",children:[c.jsxs("button",{className:"btn",onClick:()=>x(!0),children:[c.jsx(Xx,{size:14})," Log In"]}),c.jsxs("button",{className:"btn primary",onClick:()=>x(!0),children:[c.jsx(nE,{size:14})," Sign Up"]})]})]})}),o?c.jsxs("div",{className:"loading-row",children:[c.jsx(_n,{size:20,className:"spin"})," Loading comments…"]}):_.length===0?c.jsx("div",{className:"empty-state",children:"No comments yet. Be the first to share your thoughts."}):c.jsx("div",{className:"comment-list",children:_.map(M=>c.jsx(XT,{comment:M,animeId:t,user:r,onLike:async()=>{if(!r){x(!0);return}try{await jg({animeId:t,commentId:M.id,uid:r.uid})}catch(D){console.warn(D)}},onEdit:async D=>{await UT(t,M.id,D)},onDelete:async()=>{confirm("Delete this comment?")&&await FT(t,M.id)}},M.id))}),c.jsx(su,{open:P,onClose:()=>x(!1)}),c.jsx("style",{children:`
        .comments {
          background: var(--panel); border: 1px solid var(--border);
          border-radius: var(--radius); padding: 22px; margin-top: 24px;
        }
        .comments-head { display: flex; align-items: center; justify-content: space-between; gap: 12px; flex-wrap: wrap; }
        .comments-head h2 { margin: 0 0 4px; font-size: 20px; }
        .comments-head p { margin: 0; font-size: 13px; }
        .comments-toolbar {
          display: flex; align-items: center; gap: 14px; margin: 16px 0;
          padding-bottom: 14px; border-bottom: 1px solid var(--border-soft);
        }
        .ghost-link { background: transparent; border: none; color: var(--text-dim); font-size: 13px; display: inline-flex; align-items: center; gap: 6px; }
        .ghost-link:hover { color: var(--accent); }
        .spacer { flex: 1; }
        .sort-label { font-size: 13px; color: var(--text-dim); display: inline-flex; align-items: center; gap: 8px; }
        .sort-label select { background: var(--panel-2); color: var(--text); border: 1px solid var(--border); border-radius: 8px; padding: 6px 10px; font-size: 13px; }
        .comment-editor { border-radius: 12px; padding: 14px; display: flex; flex-direction: column; gap: 10px; }
        .editor-user { display: flex; align-items: center; gap: 10px; font-size: 13px; font-weight: 600; }
        .avatar-sm {
          width: 30px; height: 30px; border-radius: 8px; display: flex; align-items: center; justify-content: center;
          background: linear-gradient(135deg, var(--accent-strong), var(--accent)); color: #0b0b12; font-weight: 700; overflow: hidden;
        }
        .avatar-sm img { width: 100%; height: 100%; object-fit: cover; }
        .comment-editor textarea {
          background: transparent; border: none; outline: none; color: var(--text);
          font-family: inherit; font-size: 14px; resize: vertical; min-height: 60px;
        }
        .editor-actions { display: flex; align-items: center; justify-content: space-between; }
        .logged-out { display: flex; flex-direction: column; align-items: center; gap: 12px; padding: 12px; }
        .logged-out p { margin: 0; font-weight: 600; }
        .btn-row { display: flex; gap: 10px; }
        .comment-list { display: flex; flex-direction: column; gap: 6px; margin-top: 18px; }
        .loading-row { display: flex; align-items: center; gap: 10px; padding: 30px; justify-content: center; color: var(--text-muted); }
        .notice { padding: 10px; background: rgba(96,165,250,0.1); border: 1px solid rgba(96,165,250,0.3); border-radius: 8px; font-size: 12px; color: var(--blue); }
        .notice code { background: rgba(0,0,0,0.3); padding: 1px 5px; border-radius: 4px; }
        .error { color: var(--danger); font-size: 13px; }
        .spin { animation: spin 0.9s linear infinite; }
        @keyframes spin { to { transform: rotate(360deg); } }
      `})]})}function LL({animeId:t,totalEpisodes:e,currentEpisode:n}){const[r,i]=R.useState(""),s=R.useMemo(()=>{const l=Number(e)||0;return l?Array.from({length:l},(u,d)=>d+1):[]},[e]),o=R.useMemo(()=>r.trim()?s.filter(l=>String(l).includes(r.trim())):s,[s,r]);return c.jsxs("div",{className:"episode-sidebar glass",children:[c.jsx("div",{className:"ep-header",children:c.jsxs("div",{className:"ep-range",children:[c.jsx(Zk,{size:13}),c.jsx("span",{children:s.length?`1 – ${s.length}`:"No episodes"})]})}),c.jsxs("div",{className:"ep-search",children:[c.jsx(zc,{size:14}),c.jsx("input",{value:r,onChange:l=>i(l.target.value),placeholder:"Filter episodes…","aria-label":"Filter episodes"})]}),s.length===0?c.jsx("p",{className:"ep-empty muted",children:"AniList hasn't published an episode count for this title yet."}):c.jsxs("div",{className:"ep-grid",role:"list",children:[o.map(l=>c.jsx(Pe,{to:`/watch/${t}/${l}`,role:"listitem",className:`ep-btn ${l===Number(n)?"active":""}`,"aria-current":l===Number(n)?"page":void 0,children:l},l)),o.length===0&&c.jsx("p",{className:"ep-empty muted",children:"No matching episodes."})]}),c.jsx("style",{children:`
        .episode-sidebar { border-radius: var(--radius); padding: 14px; }
        .ep-header {
          display: flex; align-items: center; justify-content: space-between;
          margin-bottom: 10px;
        }
        .ep-range {
          display: inline-flex; align-items: center; gap: 6px;
          font-size: 12px; font-weight: 700; letter-spacing: 0.04em;
          color: var(--text-dim); background: var(--panel-2);
          border: 1px solid var(--border); border-radius: 8px;
          padding: 6px 10px;
        }
        .ep-search {
          display: flex; align-items: center; gap: 8px;
          background: var(--panel-2); border: 1px solid var(--border);
          border-radius: 8px; padding: 8px 10px; margin-bottom: 10px;
          transition: var(--transition);
        }
        .ep-search:focus-within { border-color: var(--accent); }
        .ep-search svg { color: var(--text-muted); flex-shrink: 0; }
        .ep-search input {
          flex: 1; min-width: 0; background: transparent; border: none;
          outline: none; color: var(--text); font-size: 13px;
        }
        .ep-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(42px, 1fr));
          gap: 6px;
          max-height: 260px; overflow-y: auto;
          padding-right: 4px;
        }
        .ep-btn {
          display: flex; align-items: center; justify-content: center;
          aspect-ratio: 1 / 1; border-radius: 8px;
          background: var(--panel-2); border: 1px solid var(--border);
          color: var(--text-dim); font-size: 13px; font-weight: 600;
          transition: var(--transition);
        }
        .ep-btn:hover {
          border-color: var(--accent); color: var(--text);
          transform: translateY(-1px);
        }
        .ep-btn.active {
          background: var(--accent);
          border-color: var(--accent);
          color: #0b0b12;
          font-weight: 800;
          box-shadow: 0 6px 18px rgba(167,139,250,0.35);
        }
        .ep-empty {
          grid-column: 1 / -1; font-size: 12px; margin: 4px 0;
        }
      `})]})}function OL({providerId:t,anilistId:e,episode:n,language:r}){const[i,s]=R.useState({url:null,status:"idle",error:null,source:null}),o=R.useRef(null),l=R.useRef(new Map);return R.useEffect(()=>{if(!e||!n)return;o.current&&o.current.abort();const u=new AbortController;o.current=u;const d=RL(t);return s({url:null,status:"loading",error:null,source:null}),(async()=>{try{let f=null;if(d.id==="megaplay"){const g=l.current.get(String(e));if(g)f=h0(g,n);else try{const I=await AL(e,{signal:u.signal});l.current.set(String(e),I),f=h0(I,n)}catch(I){console.warn("Anikoto lookup failed:",I.message)}}if(u.signal.aborted)return;const m=d.buildUrl({anilistId:e,episode:n,language:r,anikotoEpisode:f});if(!m){s({url:null,status:"error",error:`No source available on ${d.label} for episode ${n}. Try the other server.`,source:d.id});return}s({url:m,status:"ready",error:null,source:d.id})}catch(f){if(f.name==="AbortError")return;s({url:null,status:"error",error:f.message,source:d.id})}})(),()=>u.abort()},[t,e,n,r]),i}const qu={accent:"#a78bfa",reducedMotion:!1,autoplay:!0,autoNext:!0,subtitleLang:"en",streamProvider:"megaplay",streamLanguage:"sub"},JT=R.createContext(null);function ML({children:t}){const[e,n]=R.useState(()=>{try{const s=localStorage.getItem("hoshii:settings");return s?{...qu,...JSON.parse(s)}:qu}catch{return qu}});R.useEffect(()=>{localStorage.setItem("hoshii:settings",JSON.stringify(e)),document.documentElement.style.setProperty("--accent",e.accent),document.documentElement.style.setProperty("--accent-soft",VL(e.accent,.15))},[e]);const r=s=>n(o=>({...o,...s})),i=()=>n(qu);return c.jsx(JT.Provider,{value:{settings:e,update:r,reset:i},children:t})}function VL(t,e){const n=t.replace("#",""),r=parseInt(n.length===3?n.split("").map(l=>l+l).join(""):n,16),i=r>>16&255,s=r>>8&255,o=r&255;return`rgba(${i},${s},${o},${e})`}function ZT(){const t=R.useContext(JT);if(!t)throw new Error("useSettings must be used within SettingsProvider");return t}function m0(){var E,S,N,L,k,Ge,Ye,Qt,ct,q,Z;const{animeId:t,episode:e}=Ux(),n=jr(),{user:r}=er(),{settings:i,update:s}=ZT(),{addEntry:o}=Lg(),[l,u]=R.useState(null),[d,f]=R.useState(!0),[m,g]=R.useState(null),I=Number(e||1),C=i.streamLanguage||"sub",b=i.streamProvider||"megaplay";R.useEffect(()=>{let K=!0;return f(!0),g(null),IT(t).then(he=>{K&&(u(he),f(!1))}).catch(he=>{K&&(g(he),f(!1))}),()=>{K=!1}},[t]);const P=OL({providerId:b,anilistId:l==null?void 0:l.id,episode:I,language:C});if(d)return c.jsx("div",{className:"container page",children:c.jsx(_n,{size:32,className:"spin"})});if(m)return c.jsx("div",{className:"container page",children:c.jsxs("div",{className:"empty-state",children:["Failed to load: ",m.message]})});if(!l)return null;const x=((E=l.title)==null?void 0:E.english)||((S=l.title)==null?void 0:S.userPreferred)||((N=l.title)==null?void 0:N.romaji),_=l.episodes||0,A=YT.sanitize(l.description||""),O=(((L=l.recommendations)==null?void 0:L.nodes)||[]).map(K=>K.mediaRecommendation).filter(Boolean),M=(((k=l.relations)==null?void 0:k.edges)||[]).map(K=>K.node).filter(Boolean),D=(Ge=l.externalLinks)==null?void 0:Ge.find(K=>K.site==="MyAnimeList"),T=async(K,he)=>{var te,_e;K&&await o({animeId:l.id,title:x,episode:I,position:K,duration:he||0,image:((te=l.coverImage)==null?void 0:te.extraLarge)||((_e=l.coverImage)==null?void 0:_e.large),provider:b,language:C})},y=()=>{i.autoNext&&(!_||I<_)&&n(`/watch/${l.id}/${I+1}`)};return c.jsxs("div",{className:"page watch",children:[c.jsxs("div",{className:"container watch-grid",children:[c.jsxs("div",{className:"watch-main",children:[c.jsxs("div",{className:"watch-title-bar",children:[c.jsxs("div",{children:[c.jsx("h1",{children:x}),c.jsxs("p",{className:"muted",children:["Episode ",I,_?` of ${_}`:""]})]}),c.jsx(CL,{providerId:b,language:C,status:P.status,onProviderChange:K=>s({streamProvider:K}),onLanguageChange:K=>s({streamLanguage:K})})]}),c.jsx(xL,{url:P.url,title:`${x} — Episode ${I}`,onProgress:T,onComplete:y}),P.error&&P.status==="error"&&c.jsxs("div",{className:"stream-warning",children:[c.jsx(Bk,{size:16}),c.jsx("span",{children:P.error})]}),c.jsxs("div",{className:"ep-nav-bar",children:[c.jsxs("button",{className:"btn ghost sm",disabled:I<=1,onClick:()=>n(`/watch/${l.id}/${I-1}`),children:[c.jsx(Vl,{size:14})," Previous Episode"]}),c.jsxs("button",{className:"btn ghost sm",disabled:_?I>=_:!1,onClick:()=>n(`/watch/${l.id}/${I+1}`),children:["Next Episode ",c.jsx($o,{size:14})]})]}),c.jsxs("div",{className:"anime-info-card glass",children:[c.jsx("img",{src:(Ye=l.coverImage)==null?void 0:Ye.extraLarge,alt:x}),c.jsxs("div",{className:"anime-info-body",children:[c.jsx("h2",{children:x}),((Qt=l.title)==null?void 0:Qt.native)&&c.jsx("p",{className:"native",children:l.title.native}),c.jsx("div",{className:"genre-list",children:(l.genres||[]).map(K=>c.jsx("span",{className:"chip",children:K},K))}),c.jsx("div",{className:"description",dangerouslySetInnerHTML:{__html:A}}),c.jsxs("div",{className:"info-grid",children:[c.jsx(Yr,{label:"Format",value:l.format}),c.jsx(Yr,{label:"Season",value:l.season&&l.seasonYear?`${l.season} ${l.seasonYear}`:null}),c.jsx(Yr,{label:"Status",value:(ct=l.status)==null?void 0:ct.replace("_"," ")}),c.jsx(Yr,{label:"Episodes",value:l.episodes}),c.jsx(Yr,{label:"Score",value:l.averageScore?`${l.averageScore} / 100`:null}),c.jsx(Yr,{label:"Duration",value:l.duration?`${l.duration} min`:null}),c.jsx(Yr,{label:"Studios",value:(((q=l.studios)==null?void 0:q.nodes)||[]).map(K=>K.name).join(", ")}),c.jsx(Yr,{label:"Country",value:l.countryOfOrigin})]}),c.jsxs("div",{className:"actions-row",children:[((Z=l.trailer)==null?void 0:Z.id)&&l.trailer.site==="youtube"&&c.jsxs("a",{className:"btn sm",href:`https://www.youtube.com/watch?v=${l.trailer.id}`,target:"_blank",rel:"noreferrer",children:[c.jsx(Qx,{size:14})," Trailer"]}),c.jsxs("button",{className:"btn sm",onClick:()=>r?Pg(r.uid,l,"WATCHING"):null,disabled:!r,children:[c.jsx(Zx,{size:14})," Watchlist"]}),c.jsxs("a",{className:"btn sm",href:`https://anilist.co/anime/${l.id}`,target:"_blank",rel:"noreferrer",children:[c.jsx(kd,{size:14})," AniList"]}),D&&c.jsxs("a",{className:"btn sm",href:D.url,target:"_blank",rel:"noreferrer",children:[c.jsx(cb,{size:14})," MyAnimeList"]})]})]})]}),c.jsx(jL,{animeId:l.id,episode:I,animeTitle:x})]}),c.jsxs("aside",{className:"watch-side",children:[c.jsx(LL,{animeId:l.id,totalEpisodes:_,currentEpisode:I}),c.jsx(g0,{title:"Related Anime",children:(M.length?M:O).slice(0,8).map(K=>c.jsx(od,{anime:K,showMeta:!1},K.id))}),c.jsx(g0,{title:"Recommendations",children:O.slice(0,8).map(K=>c.jsx(od,{anime:K,showMeta:!1},K.id))})]})]}),c.jsx("style",{children:`
        .watch-grid { display: grid; grid-template-columns: minmax(0, 1fr) 320px; gap: 24px; }
        @media (max-width: 1000px) { .watch-grid { grid-template-columns: 1fr; } }
        .watch-main { display: flex; flex-direction: column; gap: 16px; min-width: 0; }
        .watch-title-bar {
          display: flex; align-items: center; justify-content: space-between;
          gap: 12px; flex-wrap: wrap;
        }
        .watch-title-bar h1 { margin: 0 0 4px; font-size: 22px; }
        .stream-warning {
          display: flex; align-items: center; gap: 10px;
          padding: 10px 14px; border-radius: 10px;
          background: rgba(248,113,113,0.1);
          border: 1px solid rgba(248,113,113,0.3);
          color: var(--danger); font-size: 13px;
        }
        .ep-nav-bar { display: flex; gap: 8px; justify-content: space-between; }
        .anime-info-card {
          border-radius: var(--radius); padding: 18px;
          display: grid; grid-template-columns: 160px 1fr; gap: 20px;
        }
        @media (max-width: 600px) { .anime-info-card { grid-template-columns: 1fr; } }
        .anime-info-card img {
          width: 100%; border-radius: 12px; aspect-ratio: 2/3; object-fit: cover;
        }
        .anime-info-body { display: flex; flex-direction: column; gap: 12px; min-width: 0; }
        .anime-info-body h2 { margin: 0; font-size: 22px; }
        .native { margin: 0; font-size: 13px; color: var(--text-dim); }
        .genre-list { display: flex; flex-wrap: wrap; gap: 6px; }
        .description { font-size: 13.5px; line-height: 1.6; color: var(--text-dim); }
        .description p { margin: 0 0 8px; }
        .info-grid {
          display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 12px;
        }
        .info-cell { display: flex; flex-direction: column; gap: 2px; }
        .info-cell .lbl {
          font-size: 10.5px; color: var(--text-muted); text-transform: uppercase;
          letter-spacing: 0.05em; font-weight: 700;
        }
        .info-cell .val { font-size: 13px; font-weight: 600; }
        .actions-row { display: flex; gap: 6px; flex-wrap: wrap; }
        .btn.sm { padding: 6px 12px; font-size: 12px; }
        .watch-side { display: flex; flex-direction: column; gap: 16px; }
        .spin { animation: spin 0.9s linear infinite; }
        @keyframes spin { to { transform: rotate(360deg); } }
      `})]})}function Yr({label:t,value:e}){return c.jsxs("div",{className:"info-cell",children:[c.jsx("span",{className:"lbl",children:t}),c.jsx("span",{className:"val",children:e||"—"})]})}function g0({title:t,children:e}){return c.jsxs("div",{className:"side-panel glass",children:[c.jsx("h3",{children:t}),c.jsx("div",{className:"side-grid",children:e}),c.jsx("style",{children:`
        .side-panel { border-radius: var(--radius); padding: 14px; }
        .side-panel h3 {
          margin: 0 0 12px; font-size: 13px; letter-spacing: 0.05em;
          text-transform: uppercase; color: var(--text-dim);
        }
        .side-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
      `})]})}const y0=[{key:"TRENDING",label:"Trending",fn:sd},{key:"POPULAR",label:"Popular",fn:ST},{key:"TOP",label:"Highest Rated",fn:AT},{key:"NEWEST",label:"Newest",fn:kT}];function UL(){var m;const[t,e]=Hx(),[n,r]=R.useState(t.get("sort")||"TRENDING"),[i,s]=R.useState(Number(t.get("page")||1)),[o,l]=R.useState(null),[u,d]=R.useState(!0);R.useEffect(()=>{const g=new URLSearchParams;n!=="TRENDING"&&g.set("sort",n),i>1&&g.set("page",String(i)),e(g)},[n,i]),R.useEffect(()=>{var C;let g=!0;return d(!0),(((C=y0.find(b=>b.key===n))==null?void 0:C.fn)||sd)(i,30).then(b=>{g&&(l(b),d(!1))}).catch(()=>{g&&d(!1)}),()=>{g=!1}},[n,i]);const f=((m=o==null?void 0:o.pageInfo)==null?void 0:m.lastPage)||1;return c.jsxs("div",{className:"page",children:[c.jsxs("div",{className:"container",children:[c.jsxs("div",{className:"search-head",children:[c.jsx("h1",{children:"Trending"}),c.jsx("div",{className:"tabs",children:y0.map(g=>c.jsx("button",{className:g.key===n?"active":"",onClick:()=>{r(g.key),s(1)},children:g.label},g.key))})]}),c.jsx(Kd,{anime:(o==null?void 0:o.media)||[],loading:u}),f>1&&c.jsxs("div",{className:"pagination",children:[c.jsxs("button",{className:"btn ghost",disabled:i<=1,onClick:()=>s(g=>g-1),children:[c.jsx(Vl,{size:14})," Prev"]}),c.jsxs("span",{className:"muted",children:["Page ",i," / ",f]}),c.jsxs("button",{className:"btn ghost",disabled:i>=f,onClick:()=>s(g=>g+1),children:["Next ",c.jsx($o,{size:14})]})]})]}),c.jsx("style",{children:`
        .search-head { display: flex; align-items: center; justify-content: space-between; gap: 12px; flex-wrap: wrap; margin-bottom: 20px; }
        .search-head h1 { margin: 0; font-size: 28px; }
        .pagination { display: flex; align-items: center; justify-content: center; gap: 14px; margin-top: 32px; }
      `})]})}const Ra=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];function FL(){const[t,e]=R.useState(null),[n,r]=R.useState(!0),[i,s]=R.useState(new Date().getDay());R.useEffect(()=>{let l=!0;r(!0);const u=Math.floor(Date.now()/1e3),d=u+60*60*24*7;return Ij({perPage:100,airingAtGreater:u,airingAtLesser:d}).then(f=>{l&&(e(f),r(!1))}).catch(()=>{l&&r(!1)}),()=>{l=!1}},[]);const o=R.useMemo(()=>{const l=new Map;return Ra.forEach(u=>l.set(u,[])),((t==null?void 0:t.airingSchedules)||[]).forEach(u=>{const d=new Date(u.airingAt*1e3),f=Ra[d.getDay()];l.get(f).push(u)}),l},[t]);return c.jsxs("div",{className:"page",children:[c.jsxs("div",{className:"container",children:[c.jsx("div",{className:"search-head",children:c.jsxs("div",{children:[c.jsx("h1",{children:"Airing Schedule"}),c.jsx("p",{className:"muted",children:"Times shown in your local timezone."})]})}),c.jsx("div",{className:"day-tabs",children:Ra.map((l,u)=>c.jsxs("button",{className:u===i?"active":"",onClick:()=>s(u),children:[l,c.jsx("span",{className:"count",children:(o.get(l)||[]).length})]},l))}),n?c.jsxs("div",{className:"loading-row",children:[c.jsx(_n,{size:24,className:"spin"})," Loading schedule…"]}):c.jsxs("div",{className:"schedule-list",children:[(o.get(Ra[i])||[]).map(l=>{var f;const u=new Date(l.airingAt*1e3).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),d=l.media.title.english||l.media.title.userPreferred||l.media.title.romaji;return c.jsxs(Pe,{to:`/anime/${l.media.id}`,className:"schedule-row",children:[c.jsxs("span",{className:"time",children:[c.jsx(Kx,{size:12})," ",u]}),c.jsx("img",{src:(f=l.media.coverImage)==null?void 0:f.large,alt:"",loading:"lazy"}),c.jsxs("div",{className:"info",children:[c.jsx("span",{className:"title",children:d}),c.jsxs("span",{className:"muted",children:["Episode ",l.episode," · ",l.media.format]})]}),c.jsxs("span",{className:"ep-badge",children:["EP ",l.episode]})]},l.id)}),(o.get(Ra[i])||[]).length===0&&c.jsx("div",{className:"empty-state",children:"No airings this day."})]})]}),c.jsx("style",{children:`
        .search-head { margin-bottom: 20px; }
        .search-head h1 { margin: 0 0 4px; font-size: 28px; }
        .day-tabs {
          display: flex; gap: 6px; overflow-x: auto;
          padding-bottom: 8px; margin-bottom: 20px;
          scrollbar-width: none;
        }
        .day-tabs::-webkit-scrollbar { display: none; }
        .day-tabs button {
          flex: 0 0 auto; display: inline-flex; align-items: center; gap: 6px;
          padding: 10px 16px; border-radius: 10px; border: 1px solid var(--border);
          background: var(--panel); color: var(--text-dim);
          font-weight: 600; font-size: 13px; transition: var(--transition);
        }
        .day-tabs button:hover { color: var(--text); }
        .day-tabs button.active {
          background: var(--accent-soft); color: var(--text);
          border-color: var(--accent);
        }
        .day-tabs .count { font-size: 11px; color: var(--text-muted); }
        .schedule-list { display: flex; flex-direction: column; gap: 6px; }
        .schedule-row {
          display: flex; align-items: center; gap: 14px;
          padding: 10px 14px; border-radius: 12px;
          background: var(--panel); border: 1px solid var(--border-soft);
          transition: var(--transition);
        }
        .schedule-row:hover {
          border-color: var(--accent); background: var(--panel-2);
        }
        .schedule-row img {
          width: 48px; height: 68px; border-radius: 8px; object-fit: cover;
        }
        .schedule-row .time {
          display: inline-flex; align-items: center; gap: 5px;
          font-size: 12px; font-weight: 700; color: var(--cyan); width: 70px;
        }
        .schedule-row .info {
          flex: 1; display: flex; flex-direction: column; gap: 3px; min-width: 0;
        }
        .schedule-row .title {
          font-weight: 600; font-size: 14px;
          overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
        }
        .ep-badge {
          background: var(--accent-soft); color: var(--accent);
          font-size: 11px; font-weight: 700; padding: 4px 10px; border-radius: 6px;
        }
        .loading-row {
          display: flex; align-items: center; justify-content: center;
          gap: 10px; padding: 60px; color: var(--text-muted);
        }
        .spin { animation: spin 0.9s linear infinite; }
        @keyframes spin { to { transform: rotate(360deg); } }
      `})]})}function zL(){var O,M;const{user:t}=er(),[e,n]=R.useState(null),[r,i]=R.useState([]),[s,o]=R.useState([]),[l,u]=R.useState(!0),[d,f]=R.useState(!1),[m,g]=R.useState(!1),[I,C]=R.useState(""),[b,P]=R.useState(""),[x,_]=R.useState(!1);if(R.useEffect(()=>{if(!t){u(!1);return}u(!0),Promise.all([dj(t.uid),Dg(t.uid).catch(()=>[]),DT(t.uid).catch(()=>[])]).then(([D,T,y])=>{n(D),i(T),o(y),C(t.displayName||""),P(t.photoURL||"")}).finally(()=>u(!1))},[t]),!t)return c.jsxs("div",{className:"page container",children:[c.jsxs("div",{className:"empty-state",children:[c.jsx("h2",{children:"Profile"}),c.jsx("p",{children:"Sign in to view your profile."}),c.jsx("button",{className:"btn primary",onClick:()=>f(!0),children:"Sign In"})]}),c.jsx(su,{open:d,onClose:()=>f(!1)})]});const A=async()=>{_(!0);try{await cj(t,{displayName:I,photoURL:b||null}),g(!1)}catch(D){console.warn(D)}_(!1)};return c.jsxs("div",{className:"page container",children:[l?c.jsxs("div",{className:"loading-row",children:[c.jsx(_n,{size:24,className:"spin"})," Loading profile…"]}):c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"profile-head glass",children:[c.jsx("div",{className:"avatar-lg",children:t.photoURL?c.jsx("img",{src:t.photoURL,alt:""}):(t.displayName||"U")[0].toUpperCase()}),c.jsx("div",{className:"profile-info",children:m?c.jsxs(c.Fragment,{children:[c.jsx("input",{value:I,onChange:D=>C(D.target.value),placeholder:"Display name"}),c.jsx("input",{value:b,onChange:D=>P(D.target.value),placeholder:"Avatar image URL"}),c.jsxs("div",{className:"btn-row",children:[c.jsxs("button",{className:"btn primary",onClick:A,disabled:x,children:[x&&c.jsx(_n,{size:14,className:"spin"})," ",c.jsx(sb,{size:14})," Save"]}),c.jsx("button",{className:"btn ghost",onClick:()=>g(!1),children:"Cancel"})]})]}):c.jsxs(c.Fragment,{children:[c.jsx("h1",{children:t.displayName||"User"}),c.jsx("p",{className:"muted",children:t.email}),(e==null?void 0:e.createdAt)&&c.jsxs("p",{className:"muted-2",children:["Joined ",((M=(O=e.createdAt).toDate)==null?void 0:M.call(O).toLocaleDateString())||"recently"]}),c.jsx("button",{className:"btn ghost sm",onClick:()=>g(!0),children:"Edit Profile"})]})})]}),c.jsxs("section",{style:{marginTop:32},children:[c.jsx("div",{className:"section-head",children:c.jsx("h2",{children:"Favorites"})}),s.length===0?c.jsx("div",{className:"empty-state",children:"No favorites yet."}):c.jsx("div",{className:"mini-grid",children:s.map(D=>c.jsxs(Pe,{to:`/anime/${D.id}`,className:"mini-card",children:[c.jsx("img",{src:D.coverImage,alt:D.title}),c.jsx("span",{children:D.title})]},D.id))})]}),c.jsxs("section",{style:{marginTop:32},children:[c.jsx("div",{className:"section-head",children:c.jsx("h2",{children:"Watchlist"})}),r.length===0?c.jsx("div",{className:"empty-state",children:"Your watchlist is empty."}):c.jsx("div",{className:"mini-grid",children:r.map(D=>c.jsxs(Pe,{to:`/anime/${D.id}`,className:"mini-card",children:[c.jsx("img",{src:D.coverImage,alt:D.title}),c.jsx("span",{children:D.title})]},D.id))})]})]}),c.jsx("style",{children:`
        .profile-head { display: flex; gap: 24px; padding: 24px; border-radius: var(--radius); align-items: center; flex-wrap: wrap; }
        .avatar-lg {
          width: 96px; height: 96px; border-radius: 20px;
          background: linear-gradient(135deg, var(--accent-strong), var(--accent));
          color: #0b0b12; display: flex; align-items: center; justify-content: center;
          font-size: 36px; font-weight: 800; overflow: hidden; flex-shrink: 0;
        }
        .avatar-lg img { width: 100%; height: 100%; object-fit: cover; }
        .profile-info { display: flex; flex-direction: column; gap: 6px; min-width: 0; flex: 1; }
        .profile-info h1 { margin: 0; font-size: 26px; }
        .profile-info p { margin: 0; font-size: 13px; }
        .profile-info input {
          background: var(--panel-2); border: 1px solid var(--border);
          border-radius: 8px; padding: 8px 12px; color: var(--text); font-size: 14px;
          max-width: 340px; outline: none;
        }
        .btn-row { display: flex; gap: 8px; margin-top: 6px; }
        .btn.sm { padding: 6px 12px; font-size: 12px; }
        .mini-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 12px; }
        .mini-card { display: flex; flex-direction: column; gap: 6px; }
        .mini-card img { width: 100%; aspect-ratio: 2/3; border-radius: 10px; object-fit: cover; }
        .mini-card span { font-size: 12px; font-weight: 600; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
        .loading-row { display: flex; align-items: center; gap: 10px; padding: 60px; justify-content: center; color: var(--text-muted); }
        .spin { animation: spin 0.9s linear infinite; }
        @keyframes spin { to { transform: rotate(360deg); } }
      `})]})}function $L(){const{user:t}=er(),[e,n]=R.useState([]),[r,i]=R.useState(!0),[s,o]=R.useState(!1);if(R.useEffect(()=>{if(!t){i(!1);return}i(!0),Dg(t.uid).then(n).catch(()=>{}).finally(()=>i(!1))},[t]),!t)return c.jsxs("div",{className:"page container",children:[c.jsxs("div",{className:"empty-state",children:[c.jsx("h2",{children:"Your Watchlist"}),c.jsx("p",{children:"Sign in to save and track anime."}),c.jsx("button",{className:"btn primary",onClick:()=>o(!0),children:"Sign In"})]}),c.jsx(su,{open:s,onClose:()=>o(!1)})]});const l=async u=>{await Ng(t.uid,u),n(d=>d.filter(f=>f.id!==u))};return c.jsxs("div",{className:"page container",children:[c.jsx("h1",{children:"Your Watchlist"}),r?c.jsxs("div",{className:"loading-row",children:[c.jsx(_n,{size:24,className:"spin"})," Loading…"]}):e.length===0?c.jsxs("div",{className:"empty-state",children:[c.jsx("p",{children:"Your watchlist is empty."}),c.jsx(Pe,{className:"btn primary",to:"/search",children:"Browse Anime"})]}):c.jsx("div",{className:"watchlist-grid",children:e.map(u=>c.jsxs("div",{className:"watchlist-card",children:[c.jsxs(Pe,{to:`/anime/${u.id}`,children:[c.jsx("img",{src:u.coverImage,alt:u.title,loading:"lazy"}),c.jsxs("div",{className:"wc-info",children:[c.jsx("span",{className:"wc-title",children:u.title}),c.jsxs("span",{className:"muted",children:[u.format," · ",u.seasonYear," · ",u.status]})]})]}),c.jsx("button",{className:"wc-remove",onClick:()=>l(u.id),"aria-label":"Remove",children:c.jsx(tE,{size:14})})]},u.id))}),c.jsx("style",{children:`
        h1 { margin: 0 0 20px; font-size: 28px; }
        .watchlist-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 16px; }
        .watchlist-card { position: relative; background: var(--panel); border: 1px solid var(--border); border-radius: 12px; overflow: hidden; transition: var(--transition); }
        .watchlist-card:hover { border-color: var(--accent); }
        .watchlist-card img { width: 100%; aspect-ratio: 2/3; object-fit: cover; }
        .wc-info { padding: 10px; display: flex; flex-direction: column; gap: 4px; }
        .wc-title { font-size: 13px; font-weight: 600; line-height: 1.3; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
        .wc-remove {
          position: absolute; top: 8px; right: 8px;
          background: rgba(0,0,0,0.7); color: var(--danger); border: none;
          width: 30px; height: 30px; border-radius: 8px; display: flex; align-items: center; justify-content: center;
          transition: var(--transition); opacity: 0;
        }
        .watchlist-card:hover .wc-remove { opacity: 1; }
        .wc-remove:hover { background: rgba(248,113,113,0.2); }
        .loading-row { display: flex; align-items: center; gap: 10px; padding: 60px; justify-content: center; color: var(--text-muted); }
        .spin { animation: spin 0.9s linear infinite; }
        @keyframes spin { to { transform: rotate(360deg); } }
      `})]})}function BL(){const{history:t,loading:e,removeEntry:n}=Lg();return c.jsxs("div",{className:"page container",children:[c.jsx("h1",{children:"Watch History"}),e?c.jsxs("div",{className:"loading-row",children:[c.jsx(_n,{size:24,className:"spin"})," Loading…"]}):t.length===0?c.jsxs("div",{className:"empty-state",children:[c.jsx("p",{children:"No watch history yet."}),c.jsx(Pe,{className:"btn primary",to:"/",children:"Browse Anime"})]}):c.jsx("div",{className:"history-grid",children:t.map(r=>{const i=r.duration?Math.min(100,r.position/r.duration*100):0;return c.jsxs("div",{className:"history-card",children:[c.jsxs(Pe,{to:`/watch/${r.animeId}/${r.episode}`,children:[c.jsxs("div",{className:"thumb",style:{backgroundImage:`url(${r.image})`},children:[c.jsxs("span",{className:"ep-badge",children:["EP ",r.episode]}),c.jsx("div",{className:"progress",children:c.jsx("div",{className:"progress-fill",style:{width:`${i}%`}})})]}),c.jsx("p",{className:"title",children:r.title}),c.jsxs("p",{className:"meta",children:[v0(r.position)," / ",v0(r.duration)]})]}),c.jsx("button",{className:"remove",onClick:()=>n(r.animeId,r.episode),"aria-label":"Remove",children:c.jsx(Ul,{size:14})})]},r.id||`${r.animeId}-${r.episode}`)})}),c.jsx("style",{children:`
        h1 { margin: 0 0 20px; font-size: 28px; }
        .history-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 16px; }
        .history-card { position: relative; }
        .history-card .thumb {
          aspect-ratio: 16/9; border-radius: 10px; background-size: cover; background-position: center;
          background-color: var(--panel); border: 1px solid var(--border); overflow: hidden;
          transition: var(--transition);
        }
        .history-card:hover .thumb { border-color: var(--accent); }
        .ep-badge {
          position: absolute; top: 8px; left: 8px; background: rgba(0,0,0,0.75); color: #fff;
          font-size: 10px; font-weight: 700; padding: 3px 7px; border-radius: 5px; backdrop-filter: blur(4px);
        }
        .progress { position: absolute; left: 0; right: 0; bottom: 0; height: 3px; background: rgba(0,0,0,0.5); }
        .progress-fill { height: 100%; background: var(--accent); }
        .title { margin: 8px 0 4px; font-size: 13px; font-weight: 600; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
        .meta { margin: 0; font-size: 11px; color: var(--text-muted); }
        .remove {
          position: absolute; top: 8px; right: 8px;
          background: rgba(0,0,0,0.75); color: #fff; border: none;
          width: 26px; height: 26px; border-radius: 6px; display: flex; align-items: center; justify-content: center;
          opacity: 0; transition: var(--transition);
        }
        .history-card:hover .remove { opacity: 1; }
        .loading-row { display: flex; align-items: center; gap: 10px; padding: 60px; justify-content: center; color: var(--text-muted); }
        .spin { animation: spin 0.9s linear infinite; }
        @keyframes spin { to { transform: rotate(360deg); } }
      `})]})}function v0(t){if(!t||!isFinite(t))return"0:00";const e=Math.floor(t/60),n=Math.floor(t%60).toString().padStart(2,"0");return`${e}:${n}`}const HL=[{name:"Lavender",value:"#a78bfa"},{name:"Cyan",value:"#67e8f9"},{name:"Blue",value:"#60a5fa"},{name:"Pink",value:"#f472b6"},{name:"Green",value:"#4ade80"},{name:"Orange",value:"#fb923c"}];function WL(){const{settings:t,update:e,reset:n}=ZT(),{user:r,signOut:i}=er(),s=jr(),o=Array.from(new Set(Ei.flatMap(l=>l.languages)));return c.jsxs("div",{className:"page container settings",children:[c.jsx("h1",{children:"Settings"}),c.jsxs("section",{className:"settings-card glass",children:[c.jsx("h2",{children:"Appearance"}),c.jsxs("div",{className:"setting-row",children:[c.jsxs("div",{children:[c.jsx("label",{children:"Accent color"}),c.jsx("p",{className:"muted",children:"Choose the highlight color used throughout Hoshii."})]}),c.jsx("div",{className:"accent-swatches",children:HL.map(l=>c.jsx("button",{className:`swatch ${t.accent===l.value?"active":""}`,style:{background:l.value},onClick:()=>e({accent:l.value}),"aria-label":l.name},l.value))})]}),c.jsxs("div",{className:"setting-row",children:[c.jsxs("div",{children:[c.jsx("label",{children:"Reduced motion"}),c.jsx("p",{className:"muted",children:"Disable animations and transitions."})]}),c.jsx(ef,{checked:t.reducedMotion,onChange:l=>e({reducedMotion:l})})]})]}),c.jsxs("section",{className:"settings-card glass",children:[c.jsx("h2",{children:"Playback"}),c.jsxs("div",{className:"setting-row",children:[c.jsxs("div",{children:[c.jsx("label",{children:"Autoplay"}),c.jsx("p",{className:"muted",children:"Start playing as soon as the page loads."})]}),c.jsx(ef,{checked:t.autoplay,onChange:l=>e({autoplay:l})})]}),c.jsxs("div",{className:"setting-row",children:[c.jsxs("div",{children:[c.jsx("label",{children:"Auto Next"}),c.jsx("p",{className:"muted",children:"Automatically continue to the next episode."})]}),c.jsx(ef,{checked:t.autoNext,onChange:l=>e({autoNext:l})})]}),c.jsxs("div",{className:"setting-row",children:[c.jsxs("div",{children:[c.jsx("label",{children:"Subtitle Language"}),c.jsx("p",{className:"muted",children:"Default subtitle track when available."})]}),c.jsxs("select",{value:t.subtitleLang,onChange:l=>e({subtitleLang:l.target.value}),children:[c.jsx("option",{value:"en",children:"English"}),c.jsx("option",{value:"es",children:"Spanish"}),c.jsx("option",{value:"fr",children:"French"}),c.jsx("option",{value:"off",children:"Off"})]})]})]}),c.jsxs("section",{className:"settings-card glass",children:[c.jsx("h2",{children:"Streaming"}),c.jsxs("div",{className:"setting-row",children:[c.jsxs("div",{children:[c.jsx("label",{children:"Default server"}),c.jsx("p",{className:"muted",children:"Preferred embed provider on the watch page."})]}),c.jsx("select",{value:t.streamProvider||"megaplay",onChange:l=>e({streamProvider:l.target.value}),children:Ei.map(l=>c.jsx("option",{value:l.id,children:l.label},l.id))})]}),c.jsxs("div",{className:"setting-row",children:[c.jsxs("div",{children:[c.jsx("label",{children:"Default language"}),c.jsx("p",{className:"muted",children:"Sub or dub, when the selected server supports it."})]}),c.jsx("select",{value:t.streamLanguage||"sub",onChange:l=>e({streamLanguage:l.target.value}),children:o.map(l=>c.jsx("option",{value:l,children:l.charAt(0).toUpperCase()+l.slice(1)},l))})]}),c.jsxs("div",{className:"setting-row",children:[c.jsxs("div",{children:[c.jsx("label",{children:"Available servers"}),c.jsx("p",{className:"muted",children:"Hoshii embeds third-party players. It never hosts or proxies video."})]}),c.jsx("div",{className:"server-pills",children:Ei.map(l=>c.jsxs("span",{className:"chip",children:[l.label,c.jsx("span",{className:"langs",children:l.languages.map(u=>u.toUpperCase()).join(" · ")})]},l.id))})]})]}),c.jsxs("section",{className:"settings-card glass",children:[c.jsx("h2",{children:"Data"}),c.jsxs("div",{className:"setting-row",children:[c.jsxs("div",{children:[c.jsx("label",{children:"Clear AniList cache"}),c.jsx("p",{className:"muted",children:"Forces the next page load to re-fetch all anime data from AniList. Cached entries are otherwise refreshed automatically in the background."})]}),c.jsxs("button",{className:"btn",onClick:()=>{_j(),alert("AniList cache cleared. Reload to fetch fresh data.")},children:[c.jsx(xv,{size:14})," Clear"]})]}),c.jsxs("div",{className:"setting-row",children:[c.jsxs("div",{children:[c.jsx("label",{children:"Clear local cache"}),c.jsx("p",{className:"muted",children:"Removes locally stored settings, cache, and logged-out watch history."})]}),c.jsxs("button",{className:"btn",onClick:()=>{confirm("Clear local cache and preferences?")&&(localStorage.clear(),n())},children:[c.jsx(xv,{size:14})," Clear"]})]}),r&&c.jsxs("div",{className:"setting-row",children:[c.jsxs("div",{children:[c.jsx("label",{children:"Log out"}),c.jsx("p",{className:"muted",children:"Sign out of your Hoshii account."})]}),c.jsxs("button",{className:"btn",onClick:async()=>{await i(),s("/")},children:[c.jsx(Jx,{size:14})," Log Out"]})]})]}),c.jsx("style",{children:`
        h1 { margin: 0 0 20px; font-size: 28px; }
        .settings { display: flex; flex-direction: column; gap: 20px; }
        .settings-card { border-radius: var(--radius); padding: 22px; }
        .settings-card h2 {
          margin: 0 0 16px; font-size: 16px; letter-spacing: 0.02em;
        }
        .setting-row {
          display: flex; align-items: center; justify-content: space-between;
          gap: 20px; padding: 14px 0; border-top: 1px solid var(--border-soft);
          flex-wrap: wrap;
        }
        .setting-row:first-of-type { border-top: none; }
        .setting-row label {
          font-weight: 600; font-size: 14px; display: block; margin-bottom: 4px;
        }
        .setting-row p { margin: 0; font-size: 12.5px; max-width: 440px; }
        .setting-row select {
          background: var(--panel-2); border: 1px solid var(--border);
          border-radius: 8px; padding: 8px 12px; color: var(--text);
          font-size: 13px; outline: none; transition: var(--transition);
        }
        .setting-row select:focus { border-color: var(--accent); }
        .accent-swatches { display: flex; gap: 8px; }
        .swatch {
          width: 30px; height: 30px; border-radius: 50%;
          border: 2px solid transparent; transition: var(--transition);
        }
        .swatch.active { border-color: var(--text); transform: scale(1.1); }
        .server-pills { display: flex; gap: 8px; flex-wrap: wrap; }
        .server-pills .chip {
          background: var(--panel-2); border: 1px solid var(--border);
          color: var(--text-dim); font-weight: 600; padding: 6px 10px;
          border-radius: 999px; display: inline-flex; align-items: center; gap: 8px;
        }
        .server-pills .langs {
          font-size: 10px; color: var(--text-muted);
          letter-spacing: 0.06em; font-weight: 700;
        }
      `})]})}function ef({checked:t,onChange:e}){return c.jsxs("button",{className:`toggle ${t?"on":""}`,onClick:()=>e(!t),role:"switch","aria-checked":t,children:[c.jsx("span",{className:"knob"}),c.jsx("style",{children:`
        .toggle {
          width: 46px; height: 26px; border-radius: 999px;
          background: var(--panel-2); border: 1px solid var(--border);
          padding: 2px; display: flex; align-items: center;
          transition: var(--transition); position: relative;
        }
        .toggle .knob {
          width: 20px; height: 20px; border-radius: 50%;
          background: var(--text-dim); transition: var(--transition);
        }
        .toggle.on { background: var(--accent); border-color: var(--accent); }
        .toggle.on .knob { background: #0b0b12; transform: translateX(20px); }
      `})]})}class qL extends R.Component{constructor(){super(...arguments);ry(this,"state",{error:null})}static getDerivedStateFromError(n){return{error:n}}componentDidCatch(n,r){console.error("ErrorBoundary",n,r)}render(){var n;return this.state.error?c.jsxs("div",{className:"container",style:{padding:80},children:[c.jsx("h1",{children:"Something went wrong"}),c.jsx("p",{className:"muted",children:String(((n=this.state.error)==null?void 0:n.message)||this.state.error)}),c.jsx("button",{className:"btn primary",onClick:()=>location.reload(),children:"Reload"})]}):this.props.children}}function GL(){return c.jsx(qL,{children:c.jsx(Dj,{children:c.jsxs(Tk,{children:[c.jsx(Jt,{path:"/",element:c.jsx(Mj,{})}),c.jsx(Jt,{path:"/search",element:c.jsx(Uj,{})}),c.jsx(Jt,{path:"/anime/:id",element:c.jsx(wL,{})}),c.jsx(Jt,{path:"/watch/:animeId",element:c.jsx(m0,{})}),c.jsx(Jt,{path:"/watch/:animeId/:episode",element:c.jsx(m0,{})}),c.jsx(Jt,{path:"/trending",element:c.jsx(UL,{})}),c.jsx(Jt,{path:"/schedule",element:c.jsx(FL,{})}),c.jsx(Jt,{path:"/profile",element:c.jsx(zL,{})}),c.jsx(Jt,{path:"/watchlist",element:c.jsx($L,{})}),c.jsx(Jt,{path:"/history",element:c.jsx(BL,{})}),c.jsx(Jt,{path:"/settings",element:c.jsx(WL,{})}),c.jsx(Jt,{path:"*",element:c.jsx(xk,{to:"/",replace:!0})})]})})})}tf.createRoot(document.getElementById("root")).render(c.jsx(R0.StrictMode,{children:c.jsx(Nk,{children:c.jsx(ML,{children:c.jsx(fj,{children:c.jsx(GL,{})})})})}));
