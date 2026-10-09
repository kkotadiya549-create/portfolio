(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function FE(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var py={exports:{}},vh={},my={exports:{}},ct={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yc=Symbol.for("react.element"),OE=Symbol.for("react.portal"),kE=Symbol.for("react.fragment"),zE=Symbol.for("react.strict_mode"),BE=Symbol.for("react.profiler"),VE=Symbol.for("react.provider"),HE=Symbol.for("react.context"),GE=Symbol.for("react.forward_ref"),WE=Symbol.for("react.suspense"),XE=Symbol.for("react.memo"),jE=Symbol.for("react.lazy"),J_=Symbol.iterator;function YE(n){return n===null||typeof n!="object"?null:(n=J_&&n[J_]||n["@@iterator"],typeof n=="function"?n:null)}var gy={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_y=Object.assign,vy={};function ul(n,e,t){this.props=n,this.context=e,this.refs=vy,this.updater=t||gy}ul.prototype.isReactComponent={};ul.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};ul.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function xy(){}xy.prototype=ul.prototype;function vg(n,e,t){this.props=n,this.context=e,this.refs=vy,this.updater=t||gy}var xg=vg.prototype=new xy;xg.constructor=vg;_y(xg,ul.prototype);xg.isPureReactComponent=!0;var e0=Array.isArray,yy=Object.prototype.hasOwnProperty,yg={current:null},Sy={key:!0,ref:!0,__self:!0,__source:!0};function My(n,e,t){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)yy.call(e,i)&&!Sy.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=t;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(n&&n.defaultProps)for(i in o=n.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:Yc,type:n,key:s,ref:a,props:r,_owner:yg.current}}function $E(n,e){return{$$typeof:Yc,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function Sg(n){return typeof n=="object"&&n!==null&&n.$$typeof===Yc}function qE(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var t0=/\/+/g;function Gh(n,e){return typeof n=="object"&&n!==null&&n.key!=null?qE(""+n.key):e.toString(36)}function sf(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var a=!1;if(n===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(n.$$typeof){case Yc:case OE:a=!0}}if(a)return a=n,r=r(a),n=i===""?"."+Gh(a,0):i,e0(r)?(t="",n!=null&&(t=n.replace(t0,"$&/")+"/"),sf(r,e,t,"",function(c){return c})):r!=null&&(Sg(r)&&(r=$E(r,t+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(t0,"$&/")+"/")+n)),e.push(r)),1;if(a=0,i=i===""?".":i+":",e0(n))for(var o=0;o<n.length;o++){s=n[o];var l=i+Gh(s,o);a+=sf(s,e,t,l,r)}else if(l=YE(n),typeof l=="function")for(n=l.call(n),o=0;!(s=n.next()).done;)s=s.value,l=i+Gh(s,o++),a+=sf(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function su(n,e,t){if(n==null)return n;var i=[],r=0;return sf(n,i,"","",function(s){return e.call(t,s,r++)}),i}function KE(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var Wn={current:null},af={transition:null},ZE={ReactCurrentDispatcher:Wn,ReactCurrentBatchConfig:af,ReactCurrentOwner:yg};function Ey(){throw Error("act(...) is not supported in production builds of React.")}ct.Children={map:su,forEach:function(n,e,t){su(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return su(n,function(){e++}),e},toArray:function(n){return su(n,function(e){return e})||[]},only:function(n){if(!Sg(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};ct.Component=ul;ct.Fragment=kE;ct.Profiler=BE;ct.PureComponent=vg;ct.StrictMode=zE;ct.Suspense=WE;ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ZE;ct.act=Ey;ct.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=_y({},n.props),r=n.key,s=n.ref,a=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=yg.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var o=n.type.defaultProps;for(l in e)yy.call(e,l)&&!Sy.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:Yc,type:n.type,key:r,ref:s,props:i,_owner:a}};ct.createContext=function(n){return n={$$typeof:HE,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:VE,_context:n},n.Consumer=n};ct.createElement=My;ct.createFactory=function(n){var e=My.bind(null,n);return e.type=n,e};ct.createRef=function(){return{current:null}};ct.forwardRef=function(n){return{$$typeof:GE,render:n}};ct.isValidElement=Sg;ct.lazy=function(n){return{$$typeof:jE,_payload:{_status:-1,_result:n},_init:KE}};ct.memo=function(n,e){return{$$typeof:XE,type:n,compare:e===void 0?null:e}};ct.startTransition=function(n){var e=af.transition;af.transition={};try{n()}finally{af.transition=e}};ct.unstable_act=Ey;ct.useCallback=function(n,e){return Wn.current.useCallback(n,e)};ct.useContext=function(n){return Wn.current.useContext(n)};ct.useDebugValue=function(){};ct.useDeferredValue=function(n){return Wn.current.useDeferredValue(n)};ct.useEffect=function(n,e){return Wn.current.useEffect(n,e)};ct.useId=function(){return Wn.current.useId()};ct.useImperativeHandle=function(n,e,t){return Wn.current.useImperativeHandle(n,e,t)};ct.useInsertionEffect=function(n,e){return Wn.current.useInsertionEffect(n,e)};ct.useLayoutEffect=function(n,e){return Wn.current.useLayoutEffect(n,e)};ct.useMemo=function(n,e){return Wn.current.useMemo(n,e)};ct.useReducer=function(n,e,t){return Wn.current.useReducer(n,e,t)};ct.useRef=function(n){return Wn.current.useRef(n)};ct.useState=function(n){return Wn.current.useState(n)};ct.useSyncExternalStore=function(n,e,t){return Wn.current.useSyncExternalStore(n,e,t)};ct.useTransition=function(){return Wn.current.useTransition()};ct.version="18.3.1";my.exports=ct;var Pe=my.exports;const Ty=FE(Pe);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var QE=Pe,JE=Symbol.for("react.element"),eT=Symbol.for("react.fragment"),tT=Object.prototype.hasOwnProperty,nT=QE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,iT={key:!0,ref:!0,__self:!0,__source:!0};function wy(n,e,t){var i,r={},s=null,a=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)tT.call(e,i)&&!iT.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:JE,type:n,key:s,ref:a,props:r,_owner:nT.current}}vh.Fragment=eT;vh.jsx=wy;vh.jsxs=wy;py.exports=vh;var b=py.exports,fp={},Ay={exports:{}},Ci={},Cy={exports:{}},Ry={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(D,Y){var L=D.length;D.push(Y);e:for(;0<L;){var Q=L-1>>>1,se=D[Q];if(0<r(se,Y))D[Q]=Y,D[L]=se,L=Q;else break e}}function t(D){return D.length===0?null:D[0]}function i(D){if(D.length===0)return null;var Y=D[0],L=D.pop();if(L!==Y){D[0]=L;e:for(var Q=0,se=D.length,Te=se>>>1;Q<Te;){var X=2*(Q+1)-1,J=D[X],le=X+1,re=D[le];if(0>r(J,L))le<se&&0>r(re,J)?(D[Q]=re,D[le]=L,Q=le):(D[Q]=J,D[X]=L,Q=X);else if(le<se&&0>r(re,L))D[Q]=re,D[le]=L,Q=le;else break e}}return Y}function r(D,Y){var L=D.sortIndex-Y.sortIndex;return L!==0?L:D.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();n.unstable_now=function(){return a.now()-o}}var l=[],c=[],u=1,h=null,f=3,d=!1,_=!1,m=!1,g=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(D){for(var Y=t(c);Y!==null;){if(Y.callback===null)i(c);else if(Y.startTime<=D)i(c),Y.sortIndex=Y.expirationTime,e(l,Y);else break;Y=t(c)}}function y(D){if(m=!1,x(D),!_)if(t(l)!==null)_=!0,V(w);else{var Y=t(c);Y!==null&&z(y,Y.startTime-D)}}function w(D,Y){_=!1,m&&(m=!1,p(A),A=-1),d=!0;var L=f;try{for(x(Y),h=t(l);h!==null&&(!(h.expirationTime>Y)||D&&!P());){var Q=h.callback;if(typeof Q=="function"){h.callback=null,f=h.priorityLevel;var se=Q(h.expirationTime<=Y);Y=n.unstable_now(),typeof se=="function"?h.callback=se:h===t(l)&&i(l),x(Y)}else i(l);h=t(l)}if(h!==null)var Te=!0;else{var X=t(c);X!==null&&z(y,X.startTime-Y),Te=!1}return Te}finally{h=null,f=L,d=!1}}var T=!1,M=null,A=-1,E=5,S=-1;function P(){return!(n.unstable_now()-S<E)}function I(){if(M!==null){var D=n.unstable_now();S=D;var Y=!0;try{Y=M(!0,D)}finally{Y?U():(T=!1,M=null)}}else T=!1}var U;if(typeof v=="function")U=function(){v(I)};else if(typeof MessageChannel<"u"){var k=new MessageChannel,B=k.port2;k.port1.onmessage=I,U=function(){B.postMessage(null)}}else U=function(){g(I,0)};function V(D){M=D,T||(T=!0,U())}function z(D,Y){A=g(function(){D(n.unstable_now())},Y)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(D){D.callback=null},n.unstable_continueExecution=function(){_||d||(_=!0,V(w))},n.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<D?Math.floor(1e3/D):5},n.unstable_getCurrentPriorityLevel=function(){return f},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(D){switch(f){case 1:case 2:case 3:var Y=3;break;default:Y=f}var L=f;f=Y;try{return D()}finally{f=L}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(D,Y){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var L=f;f=D;try{return Y()}finally{f=L}},n.unstable_scheduleCallback=function(D,Y,L){var Q=n.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?Q+L:Q):L=Q,D){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=L+se,D={id:u++,callback:Y,priorityLevel:D,startTime:L,expirationTime:se,sortIndex:-1},L>Q?(D.sortIndex=L,e(c,D),t(l)===null&&D===t(c)&&(m?(p(A),A=-1):m=!0,z(y,L-Q))):(D.sortIndex=se,e(l,D),_||d||(_=!0,V(w))),D},n.unstable_shouldYield=P,n.unstable_wrapCallback=function(D){var Y=f;return function(){var L=f;f=Y;try{return D.apply(this,arguments)}finally{f=L}}}})(Ry);Cy.exports=Ry;var rT=Cy.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sT=Pe,Ti=rT;function ue(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var by=new Set,xc={};function ka(n,e){Xo(n,e),Xo(n+"Capture",e)}function Xo(n,e){for(xc[n]=e,n=0;n<e.length;n++)by.add(e[n])}var jr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),hp=Object.prototype.hasOwnProperty,aT=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,n0={},i0={};function oT(n){return hp.call(i0,n)?!0:hp.call(n0,n)?!1:aT.test(n)?i0[n]=!0:(n0[n]=!0,!1)}function lT(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function cT(n,e,t,i){if(e===null||typeof e>"u"||lT(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Xn(n,e,t,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Sn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){Sn[n]=new Xn(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];Sn[e]=new Xn(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){Sn[n]=new Xn(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){Sn[n]=new Xn(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){Sn[n]=new Xn(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){Sn[n]=new Xn(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){Sn[n]=new Xn(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){Sn[n]=new Xn(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){Sn[n]=new Xn(n,5,!1,n.toLowerCase(),null,!1,!1)});var Mg=/[\-:]([a-z])/g;function Eg(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(Mg,Eg);Sn[e]=new Xn(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(Mg,Eg);Sn[e]=new Xn(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(Mg,Eg);Sn[e]=new Xn(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){Sn[n]=new Xn(n,1,!1,n.toLowerCase(),null,!1,!1)});Sn.xlinkHref=new Xn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){Sn[n]=new Xn(n,1,!1,n.toLowerCase(),null,!0,!0)});function Tg(n,e,t,i){var r=Sn.hasOwnProperty(e)?Sn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(cT(e,t,r,i)&&(t=null),i||r===null?oT(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var Jr=sT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,au=Symbol.for("react.element"),ho=Symbol.for("react.portal"),po=Symbol.for("react.fragment"),wg=Symbol.for("react.strict_mode"),dp=Symbol.for("react.profiler"),Py=Symbol.for("react.provider"),Ly=Symbol.for("react.context"),Ag=Symbol.for("react.forward_ref"),pp=Symbol.for("react.suspense"),mp=Symbol.for("react.suspense_list"),Cg=Symbol.for("react.memo"),us=Symbol.for("react.lazy"),Ny=Symbol.for("react.offscreen"),r0=Symbol.iterator;function vl(n){return n===null||typeof n!="object"?null:(n=r0&&n[r0]||n["@@iterator"],typeof n=="function"?n:null)}var Wt=Object.assign,Wh;function Ol(n){if(Wh===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);Wh=e&&e[1]||""}return`
`+Wh+n}var Xh=!1;function jh(n,e){if(!n||Xh)return"";Xh=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(n,[],e)}else{try{e.call()}catch(c){i=c}n.call(e.prototype)}else{try{throw Error()}catch(c){i=c}n()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=a&&0<=o);break}}}finally{Xh=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?Ol(n):""}function uT(n){switch(n.tag){case 5:return Ol(n.type);case 16:return Ol("Lazy");case 13:return Ol("Suspense");case 19:return Ol("SuspenseList");case 0:case 2:case 15:return n=jh(n.type,!1),n;case 11:return n=jh(n.type.render,!1),n;case 1:return n=jh(n.type,!0),n;default:return""}}function gp(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case po:return"Fragment";case ho:return"Portal";case dp:return"Profiler";case wg:return"StrictMode";case pp:return"Suspense";case mp:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case Ly:return(n.displayName||"Context")+".Consumer";case Py:return(n._context.displayName||"Context")+".Provider";case Ag:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Cg:return e=n.displayName||null,e!==null?e:gp(n.type)||"Memo";case us:e=n._payload,n=n._init;try{return gp(n(e))}catch{}}return null}function fT(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return gp(e);case 8:return e===wg?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Us(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Dy(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function hT(n){var e=Dy(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function ou(n){n._valueTracker||(n._valueTracker=hT(n))}function Iy(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=Dy(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function Df(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function _p(n,e){var t=e.checked;return Wt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function s0(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=Us(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Uy(n,e){e=e.checked,e!=null&&Tg(n,"checked",e,!1)}function vp(n,e){Uy(n,e);var t=Us(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?xp(n,e.type,t):e.hasOwnProperty("defaultValue")&&xp(n,e.type,Us(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function a0(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function xp(n,e,t){(e!=="number"||Df(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var kl=Array.isArray;function bo(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+Us(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function yp(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ue(91));return Wt({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function o0(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(ue(92));if(kl(t)){if(1<t.length)throw Error(ue(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:Us(t)}}function Fy(n,e){var t=Us(e.value),i=Us(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function l0(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function Oy(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Sp(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?Oy(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var lu,ky=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(lu=lu||document.createElement("div"),lu.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=lu.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function yc(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var Kl={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},dT=["Webkit","ms","Moz","O"];Object.keys(Kl).forEach(function(n){dT.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),Kl[e]=Kl[n]})});function zy(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||Kl.hasOwnProperty(n)&&Kl[n]?(""+e).trim():e+"px"}function By(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=zy(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var pT=Wt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Mp(n,e){if(e){if(pT[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ue(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ue(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ue(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ue(62))}}function Ep(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Tp=null;function Rg(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var wp=null,Po=null,Lo=null;function c0(n){if(n=Kc(n)){if(typeof wp!="function")throw Error(ue(280));var e=n.stateNode;e&&(e=Eh(e),wp(n.stateNode,n.type,e))}}function Vy(n){Po?Lo?Lo.push(n):Lo=[n]:Po=n}function Hy(){if(Po){var n=Po,e=Lo;if(Lo=Po=null,c0(n),e)for(n=0;n<e.length;n++)c0(e[n])}}function Gy(n,e){return n(e)}function Wy(){}var Yh=!1;function Xy(n,e,t){if(Yh)return n(e,t);Yh=!0;try{return Gy(n,e,t)}finally{Yh=!1,(Po!==null||Lo!==null)&&(Wy(),Hy())}}function Sc(n,e){var t=n.stateNode;if(t===null)return null;var i=Eh(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(ue(231,e,typeof t));return t}var Ap=!1;if(jr)try{var xl={};Object.defineProperty(xl,"passive",{get:function(){Ap=!0}}),window.addEventListener("test",xl,xl),window.removeEventListener("test",xl,xl)}catch{Ap=!1}function mT(n,e,t,i,r,s,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(t,c)}catch(u){this.onError(u)}}var Zl=!1,If=null,Uf=!1,Cp=null,gT={onError:function(n){Zl=!0,If=n}};function _T(n,e,t,i,r,s,a,o,l){Zl=!1,If=null,mT.apply(gT,arguments)}function vT(n,e,t,i,r,s,a,o,l){if(_T.apply(this,arguments),Zl){if(Zl){var c=If;Zl=!1,If=null}else throw Error(ue(198));Uf||(Uf=!0,Cp=c)}}function za(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function jy(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function u0(n){if(za(n)!==n)throw Error(ue(188))}function xT(n){var e=n.alternate;if(!e){if(e=za(n),e===null)throw Error(ue(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return u0(r),n;if(s===i)return u0(r),e;s=s.sibling}throw Error(ue(188))}if(t.return!==i.return)t=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===t){a=!0,t=r,i=s;break}if(o===i){a=!0,i=r,t=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===t){a=!0,t=s,i=r;break}if(o===i){a=!0,i=s,t=r;break}o=o.sibling}if(!a)throw Error(ue(189))}}if(t.alternate!==i)throw Error(ue(190))}if(t.tag!==3)throw Error(ue(188));return t.stateNode.current===t?n:e}function Yy(n){return n=xT(n),n!==null?$y(n):null}function $y(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=$y(n);if(e!==null)return e;n=n.sibling}return null}var qy=Ti.unstable_scheduleCallback,f0=Ti.unstable_cancelCallback,yT=Ti.unstable_shouldYield,ST=Ti.unstable_requestPaint,qt=Ti.unstable_now,MT=Ti.unstable_getCurrentPriorityLevel,bg=Ti.unstable_ImmediatePriority,Ky=Ti.unstable_UserBlockingPriority,Ff=Ti.unstable_NormalPriority,ET=Ti.unstable_LowPriority,Zy=Ti.unstable_IdlePriority,xh=null,vr=null;function TT(n){if(vr&&typeof vr.onCommitFiberRoot=="function")try{vr.onCommitFiberRoot(xh,n,void 0,(n.current.flags&128)===128)}catch{}}var ir=Math.clz32?Math.clz32:CT,wT=Math.log,AT=Math.LN2;function CT(n){return n>>>=0,n===0?32:31-(wT(n)/AT|0)|0}var cu=64,uu=4194304;function zl(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Of(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,a=t&268435455;if(a!==0){var o=a&~r;o!==0?i=zl(o):(s&=a,s!==0&&(i=zl(s)))}else a=t&~r,a!==0?i=zl(a):s!==0&&(i=zl(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-ir(e),r=1<<t,i|=n[t],e&=~r;return i}function RT(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function bT(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var a=31-ir(s),o=1<<a,l=r[a];l===-1?(!(o&t)||o&i)&&(r[a]=RT(o,e)):l<=e&&(n.expiredLanes|=o),s&=~o}}function Rp(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Qy(){var n=cu;return cu<<=1,!(cu&4194240)&&(cu=64),n}function $h(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function $c(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-ir(e),n[e]=t}function PT(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-ir(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function Pg(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-ir(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var Mt=0;function Jy(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var e1,Lg,t1,n1,i1,bp=!1,fu=[],Ms=null,Es=null,Ts=null,Mc=new Map,Ec=new Map,hs=[],LT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function h0(n,e){switch(n){case"focusin":case"focusout":Ms=null;break;case"dragenter":case"dragleave":Es=null;break;case"mouseover":case"mouseout":Ts=null;break;case"pointerover":case"pointerout":Mc.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ec.delete(e.pointerId)}}function yl(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Kc(e),e!==null&&Lg(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function NT(n,e,t,i,r){switch(e){case"focusin":return Ms=yl(Ms,n,e,t,i,r),!0;case"dragenter":return Es=yl(Es,n,e,t,i,r),!0;case"mouseover":return Ts=yl(Ts,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return Mc.set(s,yl(Mc.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Ec.set(s,yl(Ec.get(s)||null,n,e,t,i,r)),!0}return!1}function r1(n){var e=ua(n.target);if(e!==null){var t=za(e);if(t!==null){if(e=t.tag,e===13){if(e=jy(t),e!==null){n.blockedOn=e,i1(n.priority,function(){t1(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function of(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=Pp(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);Tp=i,t.target.dispatchEvent(i),Tp=null}else return e=Kc(t),e!==null&&Lg(e),n.blockedOn=t,!1;e.shift()}return!0}function d0(n,e,t){of(n)&&t.delete(e)}function DT(){bp=!1,Ms!==null&&of(Ms)&&(Ms=null),Es!==null&&of(Es)&&(Es=null),Ts!==null&&of(Ts)&&(Ts=null),Mc.forEach(d0),Ec.forEach(d0)}function Sl(n,e){n.blockedOn===e&&(n.blockedOn=null,bp||(bp=!0,Ti.unstable_scheduleCallback(Ti.unstable_NormalPriority,DT)))}function Tc(n){function e(r){return Sl(r,n)}if(0<fu.length){Sl(fu[0],n);for(var t=1;t<fu.length;t++){var i=fu[t];i.blockedOn===n&&(i.blockedOn=null)}}for(Ms!==null&&Sl(Ms,n),Es!==null&&Sl(Es,n),Ts!==null&&Sl(Ts,n),Mc.forEach(e),Ec.forEach(e),t=0;t<hs.length;t++)i=hs[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<hs.length&&(t=hs[0],t.blockedOn===null);)r1(t),t.blockedOn===null&&hs.shift()}var No=Jr.ReactCurrentBatchConfig,kf=!0;function IT(n,e,t,i){var r=Mt,s=No.transition;No.transition=null;try{Mt=1,Ng(n,e,t,i)}finally{Mt=r,No.transition=s}}function UT(n,e,t,i){var r=Mt,s=No.transition;No.transition=null;try{Mt=4,Ng(n,e,t,i)}finally{Mt=r,No.transition=s}}function Ng(n,e,t,i){if(kf){var r=Pp(n,e,t,i);if(r===null)rd(n,e,i,zf,t),h0(n,i);else if(NT(r,n,e,t,i))i.stopPropagation();else if(h0(n,i),e&4&&-1<LT.indexOf(n)){for(;r!==null;){var s=Kc(r);if(s!==null&&e1(s),s=Pp(n,e,t,i),s===null&&rd(n,e,i,zf,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else rd(n,e,i,null,t)}}var zf=null;function Pp(n,e,t,i){if(zf=null,n=Rg(i),n=ua(n),n!==null)if(e=za(n),e===null)n=null;else if(t=e.tag,t===13){if(n=jy(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return zf=n,null}function s1(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(MT()){case bg:return 1;case Ky:return 4;case Ff:case ET:return 16;case Zy:return 536870912;default:return 16}default:return 16}}var ms=null,Dg=null,lf=null;function a1(){if(lf)return lf;var n,e=Dg,t=e.length,i,r="value"in ms?ms.value:ms.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var a=t-n;for(i=1;i<=a&&e[t-i]===r[s-i];i++);return lf=r.slice(n,1<i?1-i:void 0)}function cf(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function hu(){return!0}function p0(){return!1}function Ri(n){function e(t,i,r,s,a){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in n)n.hasOwnProperty(o)&&(t=n[o],this[o]=t?t(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?hu:p0,this.isPropagationStopped=p0,this}return Wt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=hu)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=hu)},persist:function(){},isPersistent:hu}),e}var fl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ig=Ri(fl),qc=Wt({},fl,{view:0,detail:0}),FT=Ri(qc),qh,Kh,Ml,yh=Wt({},qc,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ug,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Ml&&(Ml&&n.type==="mousemove"?(qh=n.screenX-Ml.screenX,Kh=n.screenY-Ml.screenY):Kh=qh=0,Ml=n),qh)},movementY:function(n){return"movementY"in n?n.movementY:Kh}}),m0=Ri(yh),OT=Wt({},yh,{dataTransfer:0}),kT=Ri(OT),zT=Wt({},qc,{relatedTarget:0}),Zh=Ri(zT),BT=Wt({},fl,{animationName:0,elapsedTime:0,pseudoElement:0}),VT=Ri(BT),HT=Wt({},fl,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),GT=Ri(HT),WT=Wt({},fl,{data:0}),g0=Ri(WT),XT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},jT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},YT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $T(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=YT[n])?!!e[n]:!1}function Ug(){return $T}var qT=Wt({},qc,{key:function(n){if(n.key){var e=XT[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=cf(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?jT[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ug,charCode:function(n){return n.type==="keypress"?cf(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?cf(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),KT=Ri(qT),ZT=Wt({},yh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_0=Ri(ZT),QT=Wt({},qc,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ug}),JT=Ri(QT),ew=Wt({},fl,{propertyName:0,elapsedTime:0,pseudoElement:0}),tw=Ri(ew),nw=Wt({},yh,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),iw=Ri(nw),rw=[9,13,27,32],Fg=jr&&"CompositionEvent"in window,Ql=null;jr&&"documentMode"in document&&(Ql=document.documentMode);var sw=jr&&"TextEvent"in window&&!Ql,o1=jr&&(!Fg||Ql&&8<Ql&&11>=Ql),v0=" ",x0=!1;function l1(n,e){switch(n){case"keyup":return rw.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function c1(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var mo=!1;function aw(n,e){switch(n){case"compositionend":return c1(e);case"keypress":return e.which!==32?null:(x0=!0,v0);case"textInput":return n=e.data,n===v0&&x0?null:n;default:return null}}function ow(n,e){if(mo)return n==="compositionend"||!Fg&&l1(n,e)?(n=a1(),lf=Dg=ms=null,mo=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return o1&&e.locale!=="ko"?null:e.data;default:return null}}var lw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function y0(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!lw[n.type]:e==="textarea"}function u1(n,e,t,i){Vy(i),e=Bf(e,"onChange"),0<e.length&&(t=new Ig("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var Jl=null,wc=null;function cw(n){S1(n,0)}function Sh(n){var e=vo(n);if(Iy(e))return n}function uw(n,e){if(n==="change")return e}var f1=!1;if(jr){var Qh;if(jr){var Jh="oninput"in document;if(!Jh){var S0=document.createElement("div");S0.setAttribute("oninput","return;"),Jh=typeof S0.oninput=="function"}Qh=Jh}else Qh=!1;f1=Qh&&(!document.documentMode||9<document.documentMode)}function M0(){Jl&&(Jl.detachEvent("onpropertychange",h1),wc=Jl=null)}function h1(n){if(n.propertyName==="value"&&Sh(wc)){var e=[];u1(e,wc,n,Rg(n)),Xy(cw,e)}}function fw(n,e,t){n==="focusin"?(M0(),Jl=e,wc=t,Jl.attachEvent("onpropertychange",h1)):n==="focusout"&&M0()}function hw(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Sh(wc)}function dw(n,e){if(n==="click")return Sh(e)}function pw(n,e){if(n==="input"||n==="change")return Sh(e)}function mw(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var ar=typeof Object.is=="function"?Object.is:mw;function Ac(n,e){if(ar(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!hp.call(e,r)||!ar(n[r],e[r]))return!1}return!0}function E0(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function T0(n,e){var t=E0(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=E0(t)}}function d1(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?d1(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function p1(){for(var n=window,e=Df();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=Df(n.document)}return e}function Og(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function gw(n){var e=p1(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&d1(t.ownerDocument.documentElement,t)){if(i!==null&&Og(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=T0(t,s);var a=T0(t,i);r&&a&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==a.node||n.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var _w=jr&&"documentMode"in document&&11>=document.documentMode,go=null,Lp=null,ec=null,Np=!1;function w0(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Np||go==null||go!==Df(i)||(i=go,"selectionStart"in i&&Og(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ec&&Ac(ec,i)||(ec=i,i=Bf(Lp,"onSelect"),0<i.length&&(e=new Ig("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=go)))}function du(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var _o={animationend:du("Animation","AnimationEnd"),animationiteration:du("Animation","AnimationIteration"),animationstart:du("Animation","AnimationStart"),transitionend:du("Transition","TransitionEnd")},ed={},m1={};jr&&(m1=document.createElement("div").style,"AnimationEvent"in window||(delete _o.animationend.animation,delete _o.animationiteration.animation,delete _o.animationstart.animation),"TransitionEvent"in window||delete _o.transitionend.transition);function Mh(n){if(ed[n])return ed[n];if(!_o[n])return n;var e=_o[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in m1)return ed[n]=e[t];return n}var g1=Mh("animationend"),_1=Mh("animationiteration"),v1=Mh("animationstart"),x1=Mh("transitionend"),y1=new Map,A0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Gs(n,e){y1.set(n,e),ka(e,[n])}for(var td=0;td<A0.length;td++){var nd=A0[td],vw=nd.toLowerCase(),xw=nd[0].toUpperCase()+nd.slice(1);Gs(vw,"on"+xw)}Gs(g1,"onAnimationEnd");Gs(_1,"onAnimationIteration");Gs(v1,"onAnimationStart");Gs("dblclick","onDoubleClick");Gs("focusin","onFocus");Gs("focusout","onBlur");Gs(x1,"onTransitionEnd");Xo("onMouseEnter",["mouseout","mouseover"]);Xo("onMouseLeave",["mouseout","mouseover"]);Xo("onPointerEnter",["pointerout","pointerover"]);Xo("onPointerLeave",["pointerout","pointerover"]);ka("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ka("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ka("onBeforeInput",["compositionend","keypress","textInput","paste"]);ka("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ka("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ka("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Bl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),yw=new Set("cancel close invalid load scroll toggle".split(" ").concat(Bl));function C0(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,vT(i,e,void 0,n),n.currentTarget=null}function S1(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;C0(r,o,c),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;C0(r,o,c),s=l}}}if(Uf)throw n=Cp,Uf=!1,Cp=null,n}function It(n,e){var t=e[Op];t===void 0&&(t=e[Op]=new Set);var i=n+"__bubble";t.has(i)||(M1(e,n,2,!1),t.add(i))}function id(n,e,t){var i=0;e&&(i|=4),M1(t,n,i,e)}var pu="_reactListening"+Math.random().toString(36).slice(2);function Cc(n){if(!n[pu]){n[pu]=!0,by.forEach(function(t){t!=="selectionchange"&&(yw.has(t)||id(t,!1,n),id(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[pu]||(e[pu]=!0,id("selectionchange",!1,e))}}function M1(n,e,t,i){switch(s1(e)){case 1:var r=IT;break;case 4:r=UT;break;default:r=Ng}t=r.bind(null,e,t,n),r=void 0,!Ap||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function rd(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=ua(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}Xy(function(){var c=s,u=Rg(t),h=[];e:{var f=y1.get(n);if(f!==void 0){var d=Ig,_=n;switch(n){case"keypress":if(cf(t)===0)break e;case"keydown":case"keyup":d=KT;break;case"focusin":_="focus",d=Zh;break;case"focusout":_="blur",d=Zh;break;case"beforeblur":case"afterblur":d=Zh;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":d=m0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":d=kT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":d=JT;break;case g1:case _1:case v1:d=VT;break;case x1:d=tw;break;case"scroll":d=FT;break;case"wheel":d=iw;break;case"copy":case"cut":case"paste":d=GT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":d=_0}var m=(e&4)!==0,g=!m&&n==="scroll",p=m?f!==null?f+"Capture":null:f;m=[];for(var v=c,x;v!==null;){x=v;var y=x.stateNode;if(x.tag===5&&y!==null&&(x=y,p!==null&&(y=Sc(v,p),y!=null&&m.push(Rc(v,y,x)))),g)break;v=v.return}0<m.length&&(f=new d(f,_,null,t,u),h.push({event:f,listeners:m}))}}if(!(e&7)){e:{if(f=n==="mouseover"||n==="pointerover",d=n==="mouseout"||n==="pointerout",f&&t!==Tp&&(_=t.relatedTarget||t.fromElement)&&(ua(_)||_[Yr]))break e;if((d||f)&&(f=u.window===u?u:(f=u.ownerDocument)?f.defaultView||f.parentWindow:window,d?(_=t.relatedTarget||t.toElement,d=c,_=_?ua(_):null,_!==null&&(g=za(_),_!==g||_.tag!==5&&_.tag!==6)&&(_=null)):(d=null,_=c),d!==_)){if(m=m0,y="onMouseLeave",p="onMouseEnter",v="mouse",(n==="pointerout"||n==="pointerover")&&(m=_0,y="onPointerLeave",p="onPointerEnter",v="pointer"),g=d==null?f:vo(d),x=_==null?f:vo(_),f=new m(y,v+"leave",d,t,u),f.target=g,f.relatedTarget=x,y=null,ua(u)===c&&(m=new m(p,v+"enter",_,t,u),m.target=x,m.relatedTarget=g,y=m),g=y,d&&_)t:{for(m=d,p=_,v=0,x=m;x;x=Ha(x))v++;for(x=0,y=p;y;y=Ha(y))x++;for(;0<v-x;)m=Ha(m),v--;for(;0<x-v;)p=Ha(p),x--;for(;v--;){if(m===p||p!==null&&m===p.alternate)break t;m=Ha(m),p=Ha(p)}m=null}else m=null;d!==null&&R0(h,f,d,m,!1),_!==null&&g!==null&&R0(h,g,_,m,!0)}}e:{if(f=c?vo(c):window,d=f.nodeName&&f.nodeName.toLowerCase(),d==="select"||d==="input"&&f.type==="file")var w=uw;else if(y0(f))if(f1)w=pw;else{w=hw;var T=fw}else(d=f.nodeName)&&d.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(w=dw);if(w&&(w=w(n,c))){u1(h,w,t,u);break e}T&&T(n,f,c),n==="focusout"&&(T=f._wrapperState)&&T.controlled&&f.type==="number"&&xp(f,"number",f.value)}switch(T=c?vo(c):window,n){case"focusin":(y0(T)||T.contentEditable==="true")&&(go=T,Lp=c,ec=null);break;case"focusout":ec=Lp=go=null;break;case"mousedown":Np=!0;break;case"contextmenu":case"mouseup":case"dragend":Np=!1,w0(h,t,u);break;case"selectionchange":if(_w)break;case"keydown":case"keyup":w0(h,t,u)}var M;if(Fg)e:{switch(n){case"compositionstart":var A="onCompositionStart";break e;case"compositionend":A="onCompositionEnd";break e;case"compositionupdate":A="onCompositionUpdate";break e}A=void 0}else mo?l1(n,t)&&(A="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(A="onCompositionStart");A&&(o1&&t.locale!=="ko"&&(mo||A!=="onCompositionStart"?A==="onCompositionEnd"&&mo&&(M=a1()):(ms=u,Dg="value"in ms?ms.value:ms.textContent,mo=!0)),T=Bf(c,A),0<T.length&&(A=new g0(A,n,null,t,u),h.push({event:A,listeners:T}),M?A.data=M:(M=c1(t),M!==null&&(A.data=M)))),(M=sw?aw(n,t):ow(n,t))&&(c=Bf(c,"onBeforeInput"),0<c.length&&(u=new g0("onBeforeInput","beforeinput",null,t,u),h.push({event:u,listeners:c}),u.data=M))}S1(h,e)})}function Rc(n,e,t){return{instance:n,listener:e,currentTarget:t}}function Bf(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Sc(n,t),s!=null&&i.unshift(Rc(n,s,r)),s=Sc(n,e),s!=null&&i.push(Rc(n,s,r))),n=n.return}return i}function Ha(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function R0(n,e,t,i,r){for(var s=e._reactName,a=[];t!==null&&t!==i;){var o=t,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=Sc(t,s),l!=null&&a.unshift(Rc(t,l,o))):r||(l=Sc(t,s),l!=null&&a.push(Rc(t,l,o)))),t=t.return}a.length!==0&&n.push({event:e,listeners:a})}var Sw=/\r\n?/g,Mw=/\u0000|\uFFFD/g;function b0(n){return(typeof n=="string"?n:""+n).replace(Sw,`
`).replace(Mw,"")}function mu(n,e,t){if(e=b0(e),b0(n)!==e&&t)throw Error(ue(425))}function Vf(){}var Dp=null,Ip=null;function Up(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Fp=typeof setTimeout=="function"?setTimeout:void 0,Ew=typeof clearTimeout=="function"?clearTimeout:void 0,P0=typeof Promise=="function"?Promise:void 0,Tw=typeof queueMicrotask=="function"?queueMicrotask:typeof P0<"u"?function(n){return P0.resolve(null).then(n).catch(ww)}:Fp;function ww(n){setTimeout(function(){throw n})}function sd(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),Tc(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);Tc(e)}function ws(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function L0(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var hl=Math.random().toString(36).slice(2),dr="__reactFiber$"+hl,bc="__reactProps$"+hl,Yr="__reactContainer$"+hl,Op="__reactEvents$"+hl,Aw="__reactListeners$"+hl,Cw="__reactHandles$"+hl;function ua(n){var e=n[dr];if(e)return e;for(var t=n.parentNode;t;){if(e=t[Yr]||t[dr]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=L0(n);n!==null;){if(t=n[dr])return t;n=L0(n)}return e}n=t,t=n.parentNode}return null}function Kc(n){return n=n[dr]||n[Yr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function vo(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(ue(33))}function Eh(n){return n[bc]||null}var kp=[],xo=-1;function Ws(n){return{current:n}}function Ut(n){0>xo||(n.current=kp[xo],kp[xo]=null,xo--)}function Pt(n,e){xo++,kp[xo]=n.current,n.current=e}var Fs={},Dn=Ws(Fs),Qn=Ws(!1),Ca=Fs;function jo(n,e){var t=n.type.contextTypes;if(!t)return Fs;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function Jn(n){return n=n.childContextTypes,n!=null}function Hf(){Ut(Qn),Ut(Dn)}function N0(n,e,t){if(Dn.current!==Fs)throw Error(ue(168));Pt(Dn,e),Pt(Qn,t)}function E1(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ue(108,fT(n)||"Unknown",r));return Wt({},t,i)}function Gf(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Fs,Ca=Dn.current,Pt(Dn,n),Pt(Qn,Qn.current),!0}function D0(n,e,t){var i=n.stateNode;if(!i)throw Error(ue(169));t?(n=E1(n,e,Ca),i.__reactInternalMemoizedMergedChildContext=n,Ut(Qn),Ut(Dn),Pt(Dn,n)):Ut(Qn),Pt(Qn,t)}var Ir=null,Th=!1,ad=!1;function T1(n){Ir===null?Ir=[n]:Ir.push(n)}function Rw(n){Th=!0,T1(n)}function Xs(){if(!ad&&Ir!==null){ad=!0;var n=0,e=Mt;try{var t=Ir;for(Mt=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}Ir=null,Th=!1}catch(r){throw Ir!==null&&(Ir=Ir.slice(n+1)),qy(bg,Xs),r}finally{Mt=e,ad=!1}}return null}var yo=[],So=0,Wf=null,Xf=0,Di=[],Ii=0,Ra=null,kr=1,zr="";function ta(n,e){yo[So++]=Xf,yo[So++]=Wf,Wf=n,Xf=e}function w1(n,e,t){Di[Ii++]=kr,Di[Ii++]=zr,Di[Ii++]=Ra,Ra=n;var i=kr;n=zr;var r=32-ir(i)-1;i&=~(1<<r),t+=1;var s=32-ir(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,kr=1<<32-ir(e)+r|t<<r|i,zr=s+n}else kr=1<<s|t<<r|i,zr=n}function kg(n){n.return!==null&&(ta(n,1),w1(n,1,0))}function zg(n){for(;n===Wf;)Wf=yo[--So],yo[So]=null,Xf=yo[--So],yo[So]=null;for(;n===Ra;)Ra=Di[--Ii],Di[Ii]=null,zr=Di[--Ii],Di[Ii]=null,kr=Di[--Ii],Di[Ii]=null}var Si=null,vi=null,Ft=!1,Ji=null;function A1(n,e){var t=ki(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function I0(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,Si=n,vi=ws(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,Si=n,vi=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=Ra!==null?{id:kr,overflow:zr}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=ki(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,Si=n,vi=null,!0):!1;default:return!1}}function zp(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Bp(n){if(Ft){var e=vi;if(e){var t=e;if(!I0(n,e)){if(zp(n))throw Error(ue(418));e=ws(t.nextSibling);var i=Si;e&&I0(n,e)?A1(i,t):(n.flags=n.flags&-4097|2,Ft=!1,Si=n)}}else{if(zp(n))throw Error(ue(418));n.flags=n.flags&-4097|2,Ft=!1,Si=n}}}function U0(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Si=n}function gu(n){if(n!==Si)return!1;if(!Ft)return U0(n),Ft=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!Up(n.type,n.memoizedProps)),e&&(e=vi)){if(zp(n))throw C1(),Error(ue(418));for(;e;)A1(n,e),e=ws(e.nextSibling)}if(U0(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(ue(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){vi=ws(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}vi=null}}else vi=Si?ws(n.stateNode.nextSibling):null;return!0}function C1(){for(var n=vi;n;)n=ws(n.nextSibling)}function Yo(){vi=Si=null,Ft=!1}function Bg(n){Ji===null?Ji=[n]:Ji.push(n)}var bw=Jr.ReactCurrentBatchConfig;function El(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(ue(309));var i=t.stateNode}if(!i)throw Error(ue(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof n!="string")throw Error(ue(284));if(!t._owner)throw Error(ue(290,n))}return n}function _u(n,e){throw n=Object.prototype.toString.call(e),Error(ue(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function F0(n){var e=n._init;return e(n._payload)}function R1(n){function e(p,v){if(n){var x=p.deletions;x===null?(p.deletions=[v],p.flags|=16):x.push(v)}}function t(p,v){if(!n)return null;for(;v!==null;)e(p,v),v=v.sibling;return null}function i(p,v){for(p=new Map;v!==null;)v.key!==null?p.set(v.key,v):p.set(v.index,v),v=v.sibling;return p}function r(p,v){return p=bs(p,v),p.index=0,p.sibling=null,p}function s(p,v,x){return p.index=x,n?(x=p.alternate,x!==null?(x=x.index,x<v?(p.flags|=2,v):x):(p.flags|=2,v)):(p.flags|=1048576,v)}function a(p){return n&&p.alternate===null&&(p.flags|=2),p}function o(p,v,x,y){return v===null||v.tag!==6?(v=dd(x,p.mode,y),v.return=p,v):(v=r(v,x),v.return=p,v)}function l(p,v,x,y){var w=x.type;return w===po?u(p,v,x.props.children,y,x.key):v!==null&&(v.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===us&&F0(w)===v.type)?(y=r(v,x.props),y.ref=El(p,v,x),y.return=p,y):(y=gf(x.type,x.key,x.props,null,p.mode,y),y.ref=El(p,v,x),y.return=p,y)}function c(p,v,x,y){return v===null||v.tag!==4||v.stateNode.containerInfo!==x.containerInfo||v.stateNode.implementation!==x.implementation?(v=pd(x,p.mode,y),v.return=p,v):(v=r(v,x.children||[]),v.return=p,v)}function u(p,v,x,y,w){return v===null||v.tag!==7?(v=va(x,p.mode,y,w),v.return=p,v):(v=r(v,x),v.return=p,v)}function h(p,v,x){if(typeof v=="string"&&v!==""||typeof v=="number")return v=dd(""+v,p.mode,x),v.return=p,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case au:return x=gf(v.type,v.key,v.props,null,p.mode,x),x.ref=El(p,null,v),x.return=p,x;case ho:return v=pd(v,p.mode,x),v.return=p,v;case us:var y=v._init;return h(p,y(v._payload),x)}if(kl(v)||vl(v))return v=va(v,p.mode,x,null),v.return=p,v;_u(p,v)}return null}function f(p,v,x,y){var w=v!==null?v.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return w!==null?null:o(p,v,""+x,y);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case au:return x.key===w?l(p,v,x,y):null;case ho:return x.key===w?c(p,v,x,y):null;case us:return w=x._init,f(p,v,w(x._payload),y)}if(kl(x)||vl(x))return w!==null?null:u(p,v,x,y,null);_u(p,x)}return null}function d(p,v,x,y,w){if(typeof y=="string"&&y!==""||typeof y=="number")return p=p.get(x)||null,o(v,p,""+y,w);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case au:return p=p.get(y.key===null?x:y.key)||null,l(v,p,y,w);case ho:return p=p.get(y.key===null?x:y.key)||null,c(v,p,y,w);case us:var T=y._init;return d(p,v,x,T(y._payload),w)}if(kl(y)||vl(y))return p=p.get(x)||null,u(v,p,y,w,null);_u(v,y)}return null}function _(p,v,x,y){for(var w=null,T=null,M=v,A=v=0,E=null;M!==null&&A<x.length;A++){M.index>A?(E=M,M=null):E=M.sibling;var S=f(p,M,x[A],y);if(S===null){M===null&&(M=E);break}n&&M&&S.alternate===null&&e(p,M),v=s(S,v,A),T===null?w=S:T.sibling=S,T=S,M=E}if(A===x.length)return t(p,M),Ft&&ta(p,A),w;if(M===null){for(;A<x.length;A++)M=h(p,x[A],y),M!==null&&(v=s(M,v,A),T===null?w=M:T.sibling=M,T=M);return Ft&&ta(p,A),w}for(M=i(p,M);A<x.length;A++)E=d(M,p,A,x[A],y),E!==null&&(n&&E.alternate!==null&&M.delete(E.key===null?A:E.key),v=s(E,v,A),T===null?w=E:T.sibling=E,T=E);return n&&M.forEach(function(P){return e(p,P)}),Ft&&ta(p,A),w}function m(p,v,x,y){var w=vl(x);if(typeof w!="function")throw Error(ue(150));if(x=w.call(x),x==null)throw Error(ue(151));for(var T=w=null,M=v,A=v=0,E=null,S=x.next();M!==null&&!S.done;A++,S=x.next()){M.index>A?(E=M,M=null):E=M.sibling;var P=f(p,M,S.value,y);if(P===null){M===null&&(M=E);break}n&&M&&P.alternate===null&&e(p,M),v=s(P,v,A),T===null?w=P:T.sibling=P,T=P,M=E}if(S.done)return t(p,M),Ft&&ta(p,A),w;if(M===null){for(;!S.done;A++,S=x.next())S=h(p,S.value,y),S!==null&&(v=s(S,v,A),T===null?w=S:T.sibling=S,T=S);return Ft&&ta(p,A),w}for(M=i(p,M);!S.done;A++,S=x.next())S=d(M,p,A,S.value,y),S!==null&&(n&&S.alternate!==null&&M.delete(S.key===null?A:S.key),v=s(S,v,A),T===null?w=S:T.sibling=S,T=S);return n&&M.forEach(function(I){return e(p,I)}),Ft&&ta(p,A),w}function g(p,v,x,y){if(typeof x=="object"&&x!==null&&x.type===po&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case au:e:{for(var w=x.key,T=v;T!==null;){if(T.key===w){if(w=x.type,w===po){if(T.tag===7){t(p,T.sibling),v=r(T,x.props.children),v.return=p,p=v;break e}}else if(T.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===us&&F0(w)===T.type){t(p,T.sibling),v=r(T,x.props),v.ref=El(p,T,x),v.return=p,p=v;break e}t(p,T);break}else e(p,T);T=T.sibling}x.type===po?(v=va(x.props.children,p.mode,y,x.key),v.return=p,p=v):(y=gf(x.type,x.key,x.props,null,p.mode,y),y.ref=El(p,v,x),y.return=p,p=y)}return a(p);case ho:e:{for(T=x.key;v!==null;){if(v.key===T)if(v.tag===4&&v.stateNode.containerInfo===x.containerInfo&&v.stateNode.implementation===x.implementation){t(p,v.sibling),v=r(v,x.children||[]),v.return=p,p=v;break e}else{t(p,v);break}else e(p,v);v=v.sibling}v=pd(x,p.mode,y),v.return=p,p=v}return a(p);case us:return T=x._init,g(p,v,T(x._payload),y)}if(kl(x))return _(p,v,x,y);if(vl(x))return m(p,v,x,y);_u(p,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,v!==null&&v.tag===6?(t(p,v.sibling),v=r(v,x),v.return=p,p=v):(t(p,v),v=dd(x,p.mode,y),v.return=p,p=v),a(p)):t(p,v)}return g}var $o=R1(!0),b1=R1(!1),jf=Ws(null),Yf=null,Mo=null,Vg=null;function Hg(){Vg=Mo=Yf=null}function Gg(n){var e=jf.current;Ut(jf),n._currentValue=e}function Vp(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function Do(n,e){Yf=n,Vg=Mo=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(Zn=!0),n.firstContext=null)}function Gi(n){var e=n._currentValue;if(Vg!==n)if(n={context:n,memoizedValue:e,next:null},Mo===null){if(Yf===null)throw Error(ue(308));Mo=n,Yf.dependencies={lanes:0,firstContext:n}}else Mo=Mo.next=n;return e}var fa=null;function Wg(n){fa===null?fa=[n]:fa.push(n)}function P1(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,Wg(e)):(t.next=r.next,r.next=t),e.interleaved=t,$r(n,i)}function $r(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var fs=!1;function Xg(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function L1(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Gr(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function As(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,dt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,$r(n,t)}return r=i.interleaved,r===null?(e.next=e,Wg(i)):(e.next=r.next,r.next=e),i.interleaved=e,$r(n,t)}function uf(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Pg(n,t)}}function O0(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var a={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=a:s=s.next=a,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function $f(n,e,t,i){var r=n.updateQueue;fs=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?s=c:a.next=c,a=l;var u=n.alternate;u!==null&&(u=u.updateQueue,o=u.lastBaseUpdate,o!==a&&(o===null?u.firstBaseUpdate=c:o.next=c,u.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;a=0,u=c=l=null,o=s;do{var f=o.lane,d=o.eventTime;if((i&f)===f){u!==null&&(u=u.next={eventTime:d,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var _=n,m=o;switch(f=e,d=t,m.tag){case 1:if(_=m.payload,typeof _=="function"){h=_.call(d,h,f);break e}h=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=m.payload,f=typeof _=="function"?_.call(d,h,f):_,f==null)break e;h=Wt({},h,f);break e;case 2:fs=!0}}o.callback!==null&&o.lane!==0&&(n.flags|=64,f=r.effects,f===null?r.effects=[o]:f.push(o))}else d={eventTime:d,lane:f,tag:o.tag,payload:o.payload,callback:o.callback,next:null},u===null?(c=u=d,l=h):u=u.next=d,a|=f;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;f=o,o=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(u===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Pa|=a,n.lanes=a,n.memoizedState=h}}function k0(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(ue(191,r));r.call(i)}}}var Zc={},xr=Ws(Zc),Pc=Ws(Zc),Lc=Ws(Zc);function ha(n){if(n===Zc)throw Error(ue(174));return n}function jg(n,e){switch(Pt(Lc,e),Pt(Pc,n),Pt(xr,Zc),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Sp(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=Sp(e,n)}Ut(xr),Pt(xr,e)}function qo(){Ut(xr),Ut(Pc),Ut(Lc)}function N1(n){ha(Lc.current);var e=ha(xr.current),t=Sp(e,n.type);e!==t&&(Pt(Pc,n),Pt(xr,t))}function Yg(n){Pc.current===n&&(Ut(xr),Ut(Pc))}var Bt=Ws(0);function qf(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var od=[];function $g(){for(var n=0;n<od.length;n++)od[n]._workInProgressVersionPrimary=null;od.length=0}var ff=Jr.ReactCurrentDispatcher,ld=Jr.ReactCurrentBatchConfig,ba=0,Gt=null,an=null,pn=null,Kf=!1,tc=!1,Nc=0,Pw=0;function Mn(){throw Error(ue(321))}function qg(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!ar(n[t],e[t]))return!1;return!0}function Kg(n,e,t,i,r,s){if(ba=s,Gt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ff.current=n===null||n.memoizedState===null?Iw:Uw,n=t(i,r),tc){s=0;do{if(tc=!1,Nc=0,25<=s)throw Error(ue(301));s+=1,pn=an=null,e.updateQueue=null,ff.current=Fw,n=t(i,r)}while(tc)}if(ff.current=Zf,e=an!==null&&an.next!==null,ba=0,pn=an=Gt=null,Kf=!1,e)throw Error(ue(300));return n}function Zg(){var n=Nc!==0;return Nc=0,n}function cr(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pn===null?Gt.memoizedState=pn=n:pn=pn.next=n,pn}function Wi(){if(an===null){var n=Gt.alternate;n=n!==null?n.memoizedState:null}else n=an.next;var e=pn===null?Gt.memoizedState:pn.next;if(e!==null)pn=e,an=n;else{if(n===null)throw Error(ue(310));an=n,n={memoizedState:an.memoizedState,baseState:an.baseState,baseQueue:an.baseQueue,queue:an.queue,next:null},pn===null?Gt.memoizedState=pn=n:pn=pn.next=n}return pn}function Dc(n,e){return typeof e=="function"?e(n):e}function cd(n){var e=Wi(),t=e.queue;if(t===null)throw Error(ue(311));t.lastRenderedReducer=n;var i=an,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,c=s;do{var u=c.lane;if((ba&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:n(i,c.action);else{var h={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=h,a=i):l=l.next=h,Gt.lanes|=u,Pa|=u}c=c.next}while(c!==null&&c!==s);l===null?a=i:l.next=o,ar(i,e.memoizedState)||(Zn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,Gt.lanes|=s,Pa|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function ud(n){var e=Wi(),t=e.queue;if(t===null)throw Error(ue(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var a=r=r.next;do s=n(s,a.action),a=a.next;while(a!==r);ar(s,e.memoizedState)||(Zn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function D1(){}function I1(n,e){var t=Gt,i=Wi(),r=e(),s=!ar(i.memoizedState,r);if(s&&(i.memoizedState=r,Zn=!0),i=i.queue,Qg(O1.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||pn!==null&&pn.memoizedState.tag&1){if(t.flags|=2048,Ic(9,F1.bind(null,t,i,r,e),void 0,null),mn===null)throw Error(ue(349));ba&30||U1(t,e,r)}return r}function U1(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=Gt.updateQueue,e===null?(e={lastEffect:null,stores:null},Gt.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function F1(n,e,t,i){e.value=t,e.getSnapshot=i,k1(e)&&z1(n)}function O1(n,e,t){return t(function(){k1(e)&&z1(n)})}function k1(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!ar(n,t)}catch{return!0}}function z1(n){var e=$r(n,1);e!==null&&rr(e,n,1,-1)}function z0(n){var e=cr();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Dc,lastRenderedState:n},e.queue=n,n=n.dispatch=Dw.bind(null,Gt,n),[e.memoizedState,n]}function Ic(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=Gt.updateQueue,e===null?(e={lastEffect:null,stores:null},Gt.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function B1(){return Wi().memoizedState}function hf(n,e,t,i){var r=cr();Gt.flags|=n,r.memoizedState=Ic(1|e,t,void 0,i===void 0?null:i)}function wh(n,e,t,i){var r=Wi();i=i===void 0?null:i;var s=void 0;if(an!==null){var a=an.memoizedState;if(s=a.destroy,i!==null&&qg(i,a.deps)){r.memoizedState=Ic(e,t,s,i);return}}Gt.flags|=n,r.memoizedState=Ic(1|e,t,s,i)}function B0(n,e){return hf(8390656,8,n,e)}function Qg(n,e){return wh(2048,8,n,e)}function V1(n,e){return wh(4,2,n,e)}function H1(n,e){return wh(4,4,n,e)}function G1(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function W1(n,e,t){return t=t!=null?t.concat([n]):null,wh(4,4,G1.bind(null,e,n),t)}function Jg(){}function X1(n,e){var t=Wi();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&qg(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function j1(n,e){var t=Wi();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&qg(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function Y1(n,e,t){return ba&21?(ar(t,e)||(t=Qy(),Gt.lanes|=t,Pa|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,Zn=!0),n.memoizedState=t)}function Lw(n,e){var t=Mt;Mt=t!==0&&4>t?t:4,n(!0);var i=ld.transition;ld.transition={};try{n(!1),e()}finally{Mt=t,ld.transition=i}}function $1(){return Wi().memoizedState}function Nw(n,e,t){var i=Rs(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},q1(n))K1(e,t);else if(t=P1(n,e,t,i),t!==null){var r=Gn();rr(t,n,i,r),Z1(t,e,i)}}function Dw(n,e,t){var i=Rs(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(q1(n))K1(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,t);if(r.hasEagerState=!0,r.eagerState=o,ar(o,a)){var l=e.interleaved;l===null?(r.next=r,Wg(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=P1(n,e,r,i),t!==null&&(r=Gn(),rr(t,n,i,r),Z1(t,e,i))}}function q1(n){var e=n.alternate;return n===Gt||e!==null&&e===Gt}function K1(n,e){tc=Kf=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function Z1(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Pg(n,t)}}var Zf={readContext:Gi,useCallback:Mn,useContext:Mn,useEffect:Mn,useImperativeHandle:Mn,useInsertionEffect:Mn,useLayoutEffect:Mn,useMemo:Mn,useReducer:Mn,useRef:Mn,useState:Mn,useDebugValue:Mn,useDeferredValue:Mn,useTransition:Mn,useMutableSource:Mn,useSyncExternalStore:Mn,useId:Mn,unstable_isNewReconciler:!1},Iw={readContext:Gi,useCallback:function(n,e){return cr().memoizedState=[n,e===void 0?null:e],n},useContext:Gi,useEffect:B0,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,hf(4194308,4,G1.bind(null,e,n),t)},useLayoutEffect:function(n,e){return hf(4194308,4,n,e)},useInsertionEffect:function(n,e){return hf(4,2,n,e)},useMemo:function(n,e){var t=cr();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=cr();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=Nw.bind(null,Gt,n),[i.memoizedState,n]},useRef:function(n){var e=cr();return n={current:n},e.memoizedState=n},useState:z0,useDebugValue:Jg,useDeferredValue:function(n){return cr().memoizedState=n},useTransition:function(){var n=z0(!1),e=n[0];return n=Lw.bind(null,n[1]),cr().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=Gt,r=cr();if(Ft){if(t===void 0)throw Error(ue(407));t=t()}else{if(t=e(),mn===null)throw Error(ue(349));ba&30||U1(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,B0(O1.bind(null,i,s,n),[n]),i.flags|=2048,Ic(9,F1.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=cr(),e=mn.identifierPrefix;if(Ft){var t=zr,i=kr;t=(i&~(1<<32-ir(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=Nc++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=Pw++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},Uw={readContext:Gi,useCallback:X1,useContext:Gi,useEffect:Qg,useImperativeHandle:W1,useInsertionEffect:V1,useLayoutEffect:H1,useMemo:j1,useReducer:cd,useRef:B1,useState:function(){return cd(Dc)},useDebugValue:Jg,useDeferredValue:function(n){var e=Wi();return Y1(e,an.memoizedState,n)},useTransition:function(){var n=cd(Dc)[0],e=Wi().memoizedState;return[n,e]},useMutableSource:D1,useSyncExternalStore:I1,useId:$1,unstable_isNewReconciler:!1},Fw={readContext:Gi,useCallback:X1,useContext:Gi,useEffect:Qg,useImperativeHandle:W1,useInsertionEffect:V1,useLayoutEffect:H1,useMemo:j1,useReducer:ud,useRef:B1,useState:function(){return ud(Dc)},useDebugValue:Jg,useDeferredValue:function(n){var e=Wi();return an===null?e.memoizedState=n:Y1(e,an.memoizedState,n)},useTransition:function(){var n=ud(Dc)[0],e=Wi().memoizedState;return[n,e]},useMutableSource:D1,useSyncExternalStore:I1,useId:$1,unstable_isNewReconciler:!1};function Zi(n,e){if(n&&n.defaultProps){e=Wt({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function Hp(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:Wt({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var Ah={isMounted:function(n){return(n=n._reactInternals)?za(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=Gn(),r=Rs(n),s=Gr(i,r);s.payload=e,t!=null&&(s.callback=t),e=As(n,s,r),e!==null&&(rr(e,n,r,i),uf(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=Gn(),r=Rs(n),s=Gr(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=As(n,s,r),e!==null&&(rr(e,n,r,i),uf(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=Gn(),i=Rs(n),r=Gr(t,i);r.tag=2,e!=null&&(r.callback=e),e=As(n,r,i),e!==null&&(rr(e,n,i,t),uf(e,n,i))}};function V0(n,e,t,i,r,s,a){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!Ac(t,i)||!Ac(r,s):!0}function Q1(n,e,t){var i=!1,r=Fs,s=e.contextType;return typeof s=="object"&&s!==null?s=Gi(s):(r=Jn(e)?Ca:Dn.current,i=e.contextTypes,s=(i=i!=null)?jo(n,r):Fs),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ah,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function H0(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&Ah.enqueueReplaceState(e,e.state,null)}function Gp(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs={},Xg(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Gi(s):(s=Jn(e)?Ca:Dn.current,r.context=jo(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Hp(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Ah.enqueueReplaceState(r,r.state,null),$f(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function Ko(n,e){try{var t="",i=e;do t+=uT(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function fd(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function Wp(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var Ow=typeof WeakMap=="function"?WeakMap:Map;function J1(n,e,t){t=Gr(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){Jf||(Jf=!0,em=i),Wp(n,e)},t}function eS(n,e,t){t=Gr(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){Wp(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){Wp(n,e),typeof i!="function"&&(Cs===null?Cs=new Set([this]):Cs.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),t}function G0(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new Ow;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=Zw.bind(null,n,e,t),e.then(n,n))}function W0(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function X0(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=Gr(-1,1),e.tag=2,As(t,e,1))),t.lanes|=1),n)}var kw=Jr.ReactCurrentOwner,Zn=!1;function zn(n,e,t,i){e.child=n===null?b1(e,null,t,i):$o(e,n.child,t,i)}function j0(n,e,t,i,r){t=t.render;var s=e.ref;return Do(e,r),i=Kg(n,e,t,i,s,r),t=Zg(),n!==null&&!Zn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,qr(n,e,r)):(Ft&&t&&kg(e),e.flags|=1,zn(n,e,i,r),e.child)}function Y0(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!o_(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,tS(n,e,s,i,r)):(n=gf(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var a=s.memoizedProps;if(t=t.compare,t=t!==null?t:Ac,t(a,i)&&n.ref===e.ref)return qr(n,e,r)}return e.flags|=1,n=bs(s,i),n.ref=e.ref,n.return=e,e.child=n}function tS(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(Ac(s,i)&&n.ref===e.ref)if(Zn=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(Zn=!0);else return e.lanes=n.lanes,qr(n,e,r)}return Xp(n,e,t,i,r)}function nS(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Pt(To,hi),hi|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,Pt(To,hi),hi|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,Pt(To,hi),hi|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,Pt(To,hi),hi|=i;return zn(n,e,r,t),e.child}function iS(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function Xp(n,e,t,i,r){var s=Jn(t)?Ca:Dn.current;return s=jo(e,s),Do(e,r),t=Kg(n,e,t,i,s,r),i=Zg(),n!==null&&!Zn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,qr(n,e,r)):(Ft&&i&&kg(e),e.flags|=1,zn(n,e,t,r),e.child)}function $0(n,e,t,i,r){if(Jn(t)){var s=!0;Gf(e)}else s=!1;if(Do(e,r),e.stateNode===null)df(n,e),Q1(e,t,i),Gp(e,t,i,r),i=!0;else if(n===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=t.contextType;typeof c=="object"&&c!==null?c=Gi(c):(c=Jn(t)?Ca:Dn.current,c=jo(e,c));var u=t.getDerivedStateFromProps,h=typeof u=="function"||typeof a.getSnapshotBeforeUpdate=="function";h||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==c)&&H0(e,a,i,c),fs=!1;var f=e.memoizedState;a.state=f,$f(e,i,a,r),l=e.memoizedState,o!==i||f!==l||Qn.current||fs?(typeof u=="function"&&(Hp(e,t,u,i),l=e.memoizedState),(o=fs||V0(e,t,o,i,f,l,c))?(h||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=c,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,L1(n,e),o=e.memoizedProps,c=e.type===e.elementType?o:Zi(e.type,o),a.props=c,h=e.pendingProps,f=a.context,l=t.contextType,typeof l=="object"&&l!==null?l=Gi(l):(l=Jn(t)?Ca:Dn.current,l=jo(e,l));var d=t.getDerivedStateFromProps;(u=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==h||f!==l)&&H0(e,a,i,l),fs=!1,f=e.memoizedState,a.state=f,$f(e,i,a,r);var _=e.memoizedState;o!==h||f!==_||Qn.current||fs?(typeof d=="function"&&(Hp(e,t,d,i),_=e.memoizedState),(c=fs||V0(e,t,c,i,f,_,l)||!1)?(u||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,_,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,_,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===n.memoizedProps&&f===n.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===n.memoizedProps&&f===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),a.props=i,a.state=_,a.context=l,i=c):(typeof a.componentDidUpdate!="function"||o===n.memoizedProps&&f===n.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===n.memoizedProps&&f===n.memoizedState||(e.flags|=1024),i=!1)}return jp(n,e,t,i,s,r)}function jp(n,e,t,i,r,s){iS(n,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&D0(e,t,!1),qr(n,e,s);i=e.stateNode,kw.current=e;var o=a&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&a?(e.child=$o(e,n.child,null,s),e.child=$o(e,null,o,s)):zn(n,e,o,s),e.memoizedState=i.state,r&&D0(e,t,!0),e.child}function rS(n){var e=n.stateNode;e.pendingContext?N0(n,e.pendingContext,e.pendingContext!==e.context):e.context&&N0(n,e.context,!1),jg(n,e.containerInfo)}function q0(n,e,t,i,r){return Yo(),Bg(r),e.flags|=256,zn(n,e,t,i),e.child}var Yp={dehydrated:null,treeContext:null,retryLane:0};function $p(n){return{baseLanes:n,cachePool:null,transitions:null}}function sS(n,e,t){var i=e.pendingProps,r=Bt.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=n!==null&&n.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),Pt(Bt,r&1),n===null)return Bp(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,n=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=bh(a,i,0,null),n=va(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=$p(t),e.memoizedState=Yp,n):e_(e,a));if(r=n.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return zw(n,e,a,i,o,r,t);if(s){s=i.fallback,a=e.mode,r=n.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=bs(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=bs(o,s):(s=va(s,a,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=n.child.memoizedState,a=a===null?$p(t):{baseLanes:a.baseLanes|t,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=n.childLanes&~t,e.memoizedState=Yp,i}return s=n.child,n=s.sibling,i=bs(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function e_(n,e){return e=bh({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function vu(n,e,t,i){return i!==null&&Bg(i),$o(e,n.child,null,t),n=e_(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function zw(n,e,t,i,r,s,a){if(t)return e.flags&256?(e.flags&=-257,i=fd(Error(ue(422))),vu(n,e,a,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=bh({mode:"visible",children:i.children},r,0,null),s=va(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&$o(e,n.child,null,a),e.child.memoizedState=$p(a),e.memoizedState=Yp,s);if(!(e.mode&1))return vu(n,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(ue(419)),i=fd(s,i,void 0),vu(n,e,a,i)}if(o=(a&n.childLanes)!==0,Zn||o){if(i=mn,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,$r(n,r),rr(i,n,r,-1))}return a_(),i=fd(Error(ue(421))),vu(n,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=Qw.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,vi=ws(r.nextSibling),Si=e,Ft=!0,Ji=null,n!==null&&(Di[Ii++]=kr,Di[Ii++]=zr,Di[Ii++]=Ra,kr=n.id,zr=n.overflow,Ra=e),e=e_(e,i.children),e.flags|=4096,e)}function K0(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),Vp(n.return,e,t)}function hd(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function aS(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(zn(n,e,i.children,t),i=Bt.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&K0(n,t,e);else if(n.tag===19)K0(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(Pt(Bt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&qf(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),hd(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&qf(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}hd(e,!0,t,null,s);break;case"together":hd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function df(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function qr(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),Pa|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(ue(153));if(e.child!==null){for(n=e.child,t=bs(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=bs(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function Bw(n,e,t){switch(e.tag){case 3:rS(e),Yo();break;case 5:N1(e);break;case 1:Jn(e.type)&&Gf(e);break;case 4:jg(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Pt(jf,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Pt(Bt,Bt.current&1),e.flags|=128,null):t&e.child.childLanes?sS(n,e,t):(Pt(Bt,Bt.current&1),n=qr(n,e,t),n!==null?n.sibling:null);Pt(Bt,Bt.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return aS(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Pt(Bt,Bt.current),i)break;return null;case 22:case 23:return e.lanes=0,nS(n,e,t)}return qr(n,e,t)}var oS,qp,lS,cS;oS=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};qp=function(){};lS=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,ha(xr.current);var s=null;switch(t){case"input":r=_p(n,r),i=_p(n,i),s=[];break;case"select":r=Wt({},r,{value:void 0}),i=Wt({},i,{value:void 0}),s=[];break;case"textarea":r=yp(n,r),i=yp(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=Vf)}Mp(t,i);var a;t=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(a in o)o.hasOwnProperty(a)&&(t||(t={}),t[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(xc.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(o=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(t||(t={}),t[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(t||(t={}),t[a]=l[a])}else t||(s||(s=[]),s.push(c,t)),t=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(xc.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&It("scroll",n),s||o===l||(s=[])):(s=s||[]).push(c,l))}t&&(s=s||[]).push("style",t);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};cS=function(n,e,t,i){t!==i&&(e.flags|=4)};function Tl(n,e){if(!Ft)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function En(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function Vw(n,e,t){var i=e.pendingProps;switch(zg(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return En(e),null;case 1:return Jn(e.type)&&Hf(),En(e),null;case 3:return i=e.stateNode,qo(),Ut(Qn),Ut(Dn),$g(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(gu(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Ji!==null&&(im(Ji),Ji=null))),qp(n,e),En(e),null;case 5:Yg(e);var r=ha(Lc.current);if(t=e.type,n!==null&&e.stateNode!=null)lS(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ue(166));return En(e),null}if(n=ha(xr.current),gu(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[dr]=e,i[bc]=s,n=(e.mode&1)!==0,t){case"dialog":It("cancel",i),It("close",i);break;case"iframe":case"object":case"embed":It("load",i);break;case"video":case"audio":for(r=0;r<Bl.length;r++)It(Bl[r],i);break;case"source":It("error",i);break;case"img":case"image":case"link":It("error",i),It("load",i);break;case"details":It("toggle",i);break;case"input":s0(i,s),It("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},It("invalid",i);break;case"textarea":o0(i,s),It("invalid",i)}Mp(t,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&mu(i.textContent,o,n),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&mu(i.textContent,o,n),r=["children",""+o]):xc.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&It("scroll",i)}switch(t){case"input":ou(i),a0(i,s,!0);break;case"textarea":ou(i),l0(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Vf)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Oy(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=a.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=a.createElement(t,{is:i.is}):(n=a.createElement(t),t==="select"&&(a=n,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):n=a.createElementNS(n,t),n[dr]=e,n[bc]=i,oS(n,e,!1,!1),e.stateNode=n;e:{switch(a=Ep(t,i),t){case"dialog":It("cancel",n),It("close",n),r=i;break;case"iframe":case"object":case"embed":It("load",n),r=i;break;case"video":case"audio":for(r=0;r<Bl.length;r++)It(Bl[r],n);r=i;break;case"source":It("error",n),r=i;break;case"img":case"image":case"link":It("error",n),It("load",n),r=i;break;case"details":It("toggle",n),r=i;break;case"input":s0(n,i),r=_p(n,i),It("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=Wt({},i,{value:void 0}),It("invalid",n);break;case"textarea":o0(n,i),r=yp(n,i),It("invalid",n);break;default:r=i}Mp(t,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?By(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&ky(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&yc(n,l):typeof l=="number"&&yc(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(xc.hasOwnProperty(s)?l!=null&&s==="onScroll"&&It("scroll",n):l!=null&&Tg(n,s,l,a))}switch(t){case"input":ou(n),a0(n,i,!1);break;case"textarea":ou(n),l0(n);break;case"option":i.value!=null&&n.setAttribute("value",""+Us(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?bo(n,!!i.multiple,s,!1):i.defaultValue!=null&&bo(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=Vf)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return En(e),null;case 6:if(n&&e.stateNode!=null)cS(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ue(166));if(t=ha(Lc.current),ha(xr.current),gu(e)){if(i=e.stateNode,t=e.memoizedProps,i[dr]=e,(s=i.nodeValue!==t)&&(n=Si,n!==null))switch(n.tag){case 3:mu(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&mu(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[dr]=e,e.stateNode=i}return En(e),null;case 13:if(Ut(Bt),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Ft&&vi!==null&&e.mode&1&&!(e.flags&128))C1(),Yo(),e.flags|=98560,s=!1;else if(s=gu(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(ue(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ue(317));s[dr]=e}else Yo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;En(e),s=!1}else Ji!==null&&(im(Ji),Ji=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||Bt.current&1?ln===0&&(ln=3):a_())),e.updateQueue!==null&&(e.flags|=4),En(e),null);case 4:return qo(),qp(n,e),n===null&&Cc(e.stateNode.containerInfo),En(e),null;case 10:return Gg(e.type._context),En(e),null;case 17:return Jn(e.type)&&Hf(),En(e),null;case 19:if(Ut(Bt),s=e.memoizedState,s===null)return En(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)Tl(s,!1);else{if(ln!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(a=qf(n),a!==null){for(e.flags|=128,Tl(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,n=a.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return Pt(Bt,Bt.current&1|2),e.child}n=n.sibling}s.tail!==null&&qt()>Zo&&(e.flags|=128,i=!0,Tl(s,!1),e.lanes=4194304)}else{if(!i)if(n=qf(a),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),Tl(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!Ft)return En(e),null}else 2*qt()-s.renderingStartTime>Zo&&t!==1073741824&&(e.flags|=128,i=!0,Tl(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(t=s.last,t!==null?t.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=qt(),e.sibling=null,t=Bt.current,Pt(Bt,i?t&1|2:t&1),e):(En(e),null);case 22:case 23:return s_(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?hi&1073741824&&(En(e),e.subtreeFlags&6&&(e.flags|=8192)):En(e),null;case 24:return null;case 25:return null}throw Error(ue(156,e.tag))}function Hw(n,e){switch(zg(e),e.tag){case 1:return Jn(e.type)&&Hf(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return qo(),Ut(Qn),Ut(Dn),$g(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return Yg(e),null;case 13:if(Ut(Bt),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(ue(340));Yo()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return Ut(Bt),null;case 4:return qo(),null;case 10:return Gg(e.type._context),null;case 22:case 23:return s_(),null;case 24:return null;default:return null}}var xu=!1,Rn=!1,Gw=typeof WeakSet=="function"?WeakSet:Set,Ie=null;function Eo(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){Xt(n,e,i)}else t.current=null}function Kp(n,e,t){try{t()}catch(i){Xt(n,e,i)}}var Z0=!1;function Ww(n,e){if(Dp=kf,n=p1(),Og(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var a=0,o=-1,l=-1,c=0,u=0,h=n,f=null;t:for(;;){for(var d;h!==t||r!==0&&h.nodeType!==3||(o=a+r),h!==s||i!==0&&h.nodeType!==3||(l=a+i),h.nodeType===3&&(a+=h.nodeValue.length),(d=h.firstChild)!==null;)f=h,h=d;for(;;){if(h===n)break t;if(f===t&&++c===r&&(o=a),f===s&&++u===i&&(l=a),(d=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=d}t=o===-1||l===-1?null:{start:o,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(Ip={focusedElem:n,selectionRange:t},kf=!1,Ie=e;Ie!==null;)if(e=Ie,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,Ie=n;else for(;Ie!==null;){e=Ie;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var m=_.memoizedProps,g=_.memoizedState,p=e.stateNode,v=p.getSnapshotBeforeUpdate(e.elementType===e.type?m:Zi(e.type,m),g);p.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ue(163))}}catch(y){Xt(e,e.return,y)}if(n=e.sibling,n!==null){n.return=e.return,Ie=n;break}Ie=e.return}return _=Z0,Z0=!1,_}function nc(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&Kp(e,t,s)}r=r.next}while(r!==i)}}function Ch(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function Zp(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function uS(n){var e=n.alternate;e!==null&&(n.alternate=null,uS(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[dr],delete e[bc],delete e[Op],delete e[Aw],delete e[Cw])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function fS(n){return n.tag===5||n.tag===3||n.tag===4}function Q0(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||fS(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Qp(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=Vf));else if(i!==4&&(n=n.child,n!==null))for(Qp(n,e,t),n=n.sibling;n!==null;)Qp(n,e,t),n=n.sibling}function Jp(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(Jp(n,e,t),n=n.sibling;n!==null;)Jp(n,e,t),n=n.sibling}var _n=null,Qi=!1;function ns(n,e,t){for(t=t.child;t!==null;)hS(n,e,t),t=t.sibling}function hS(n,e,t){if(vr&&typeof vr.onCommitFiberUnmount=="function")try{vr.onCommitFiberUnmount(xh,t)}catch{}switch(t.tag){case 5:Rn||Eo(t,e);case 6:var i=_n,r=Qi;_n=null,ns(n,e,t),_n=i,Qi=r,_n!==null&&(Qi?(n=_n,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):_n.removeChild(t.stateNode));break;case 18:_n!==null&&(Qi?(n=_n,t=t.stateNode,n.nodeType===8?sd(n.parentNode,t):n.nodeType===1&&sd(n,t),Tc(n)):sd(_n,t.stateNode));break;case 4:i=_n,r=Qi,_n=t.stateNode.containerInfo,Qi=!0,ns(n,e,t),_n=i,Qi=r;break;case 0:case 11:case 14:case 15:if(!Rn&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&Kp(t,e,a),r=r.next}while(r!==i)}ns(n,e,t);break;case 1:if(!Rn&&(Eo(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(o){Xt(t,e,o)}ns(n,e,t);break;case 21:ns(n,e,t);break;case 22:t.mode&1?(Rn=(i=Rn)||t.memoizedState!==null,ns(n,e,t),Rn=i):ns(n,e,t);break;default:ns(n,e,t)}}function J0(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new Gw),e.forEach(function(i){var r=Jw.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function ji(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:_n=o.stateNode,Qi=!1;break e;case 3:_n=o.stateNode.containerInfo,Qi=!0;break e;case 4:_n=o.stateNode.containerInfo,Qi=!0;break e}o=o.return}if(_n===null)throw Error(ue(160));hS(s,a,r),_n=null,Qi=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Xt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)dS(e,n),e=e.sibling}function dS(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(ji(e,n),lr(n),i&4){try{nc(3,n,n.return),Ch(3,n)}catch(m){Xt(n,n.return,m)}try{nc(5,n,n.return)}catch(m){Xt(n,n.return,m)}}break;case 1:ji(e,n),lr(n),i&512&&t!==null&&Eo(t,t.return);break;case 5:if(ji(e,n),lr(n),i&512&&t!==null&&Eo(t,t.return),n.flags&32){var r=n.stateNode;try{yc(r,"")}catch(m){Xt(n,n.return,m)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,a=t!==null?t.memoizedProps:s,o=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&Uy(r,s),Ep(o,a);var c=Ep(o,s);for(a=0;a<l.length;a+=2){var u=l[a],h=l[a+1];u==="style"?By(r,h):u==="dangerouslySetInnerHTML"?ky(r,h):u==="children"?yc(r,h):Tg(r,u,h,c)}switch(o){case"input":vp(r,s);break;case"textarea":Fy(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var d=s.value;d!=null?bo(r,!!s.multiple,d,!1):f!==!!s.multiple&&(s.defaultValue!=null?bo(r,!!s.multiple,s.defaultValue,!0):bo(r,!!s.multiple,s.multiple?[]:"",!1))}r[bc]=s}catch(m){Xt(n,n.return,m)}}break;case 6:if(ji(e,n),lr(n),i&4){if(n.stateNode===null)throw Error(ue(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(m){Xt(n,n.return,m)}}break;case 3:if(ji(e,n),lr(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{Tc(e.containerInfo)}catch(m){Xt(n,n.return,m)}break;case 4:ji(e,n),lr(n);break;case 13:ji(e,n),lr(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(i_=qt())),i&4&&J0(n);break;case 22:if(u=t!==null&&t.memoizedState!==null,n.mode&1?(Rn=(c=Rn)||u,ji(e,n),Rn=c):ji(e,n),lr(n),i&8192){if(c=n.memoizedState!==null,(n.stateNode.isHidden=c)&&!u&&n.mode&1)for(Ie=n,u=n.child;u!==null;){for(h=Ie=u;Ie!==null;){switch(f=Ie,d=f.child,f.tag){case 0:case 11:case 14:case 15:nc(4,f,f.return);break;case 1:Eo(f,f.return);var _=f.stateNode;if(typeof _.componentWillUnmount=="function"){i=f,t=f.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(m){Xt(i,t,m)}}break;case 5:Eo(f,f.return);break;case 22:if(f.memoizedState!==null){tv(h);continue}}d!==null?(d.return=f,Ie=d):tv(h)}u=u.sibling}e:for(u=null,h=n;;){if(h.tag===5){if(u===null){u=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=h.stateNode,l=h.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=zy("display",a))}catch(m){Xt(n,n.return,m)}}}else if(h.tag===6){if(u===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(m){Xt(n,n.return,m)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===n)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===n)break e;for(;h.sibling===null;){if(h.return===null||h.return===n)break e;u===h&&(u=null),h=h.return}u===h&&(u=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:ji(e,n),lr(n),i&4&&J0(n);break;case 21:break;default:ji(e,n),lr(n)}}function lr(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(fS(t)){var i=t;break e}t=t.return}throw Error(ue(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(yc(r,""),i.flags&=-33);var s=Q0(n);Jp(n,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=Q0(n);Qp(n,o,a);break;default:throw Error(ue(161))}}catch(l){Xt(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function Xw(n,e,t){Ie=n,pS(n)}function pS(n,e,t){for(var i=(n.mode&1)!==0;Ie!==null;){var r=Ie,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||xu;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||Rn;o=xu;var c=Rn;if(xu=a,(Rn=l)&&!c)for(Ie=r;Ie!==null;)a=Ie,l=a.child,a.tag===22&&a.memoizedState!==null?nv(r):l!==null?(l.return=a,Ie=l):nv(r);for(;s!==null;)Ie=s,pS(s),s=s.sibling;Ie=r,xu=o,Rn=c}ev(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Ie=s):ev(n)}}function ev(n){for(;Ie!==null;){var e=Ie;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Rn||Ch(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Rn)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:Zi(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&k0(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}k0(e,a,t)}break;case 5:var o=e.stateNode;if(t===null&&e.flags&4){t=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var h=u.dehydrated;h!==null&&Tc(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ue(163))}Rn||e.flags&512&&Zp(e)}catch(f){Xt(e,e.return,f)}}if(e===n){Ie=null;break}if(t=e.sibling,t!==null){t.return=e.return,Ie=t;break}Ie=e.return}}function tv(n){for(;Ie!==null;){var e=Ie;if(e===n){Ie=null;break}var t=e.sibling;if(t!==null){t.return=e.return,Ie=t;break}Ie=e.return}}function nv(n){for(;Ie!==null;){var e=Ie;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{Ch(4,e)}catch(l){Xt(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Xt(e,r,l)}}var s=e.return;try{Zp(e)}catch(l){Xt(e,s,l)}break;case 5:var a=e.return;try{Zp(e)}catch(l){Xt(e,a,l)}}}catch(l){Xt(e,e.return,l)}if(e===n){Ie=null;break}var o=e.sibling;if(o!==null){o.return=e.return,Ie=o;break}Ie=e.return}}var jw=Math.ceil,Qf=Jr.ReactCurrentDispatcher,t_=Jr.ReactCurrentOwner,Vi=Jr.ReactCurrentBatchConfig,dt=0,mn=null,tn=null,xn=0,hi=0,To=Ws(0),ln=0,Uc=null,Pa=0,Rh=0,n_=0,ic=null,$n=null,i_=0,Zo=1/0,Nr=null,Jf=!1,em=null,Cs=null,yu=!1,gs=null,eh=0,rc=0,tm=null,pf=-1,mf=0;function Gn(){return dt&6?qt():pf!==-1?pf:pf=qt()}function Rs(n){return n.mode&1?dt&2&&xn!==0?xn&-xn:bw.transition!==null?(mf===0&&(mf=Qy()),mf):(n=Mt,n!==0||(n=window.event,n=n===void 0?16:s1(n.type)),n):1}function rr(n,e,t,i){if(50<rc)throw rc=0,tm=null,Error(ue(185));$c(n,t,i),(!(dt&2)||n!==mn)&&(n===mn&&(!(dt&2)&&(Rh|=t),ln===4&&ds(n,xn)),ei(n,i),t===1&&dt===0&&!(e.mode&1)&&(Zo=qt()+500,Th&&Xs()))}function ei(n,e){var t=n.callbackNode;bT(n,e);var i=Of(n,n===mn?xn:0);if(i===0)t!==null&&f0(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&f0(t),e===1)n.tag===0?Rw(iv.bind(null,n)):T1(iv.bind(null,n)),Tw(function(){!(dt&6)&&Xs()}),t=null;else{switch(Jy(i)){case 1:t=bg;break;case 4:t=Ky;break;case 16:t=Ff;break;case 536870912:t=Zy;break;default:t=Ff}t=MS(t,mS.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function mS(n,e){if(pf=-1,mf=0,dt&6)throw Error(ue(327));var t=n.callbackNode;if(Io()&&n.callbackNode!==t)return null;var i=Of(n,n===mn?xn:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=th(n,i);else{e=i;var r=dt;dt|=2;var s=_S();(mn!==n||xn!==e)&&(Nr=null,Zo=qt()+500,_a(n,e));do try{qw();break}catch(o){gS(n,o)}while(!0);Hg(),Qf.current=s,dt=r,tn!==null?e=0:(mn=null,xn=0,e=ln)}if(e!==0){if(e===2&&(r=Rp(n),r!==0&&(i=r,e=nm(n,r))),e===1)throw t=Uc,_a(n,0),ds(n,i),ei(n,qt()),t;if(e===6)ds(n,i);else{if(r=n.current.alternate,!(i&30)&&!Yw(r)&&(e=th(n,i),e===2&&(s=Rp(n),s!==0&&(i=s,e=nm(n,s))),e===1))throw t=Uc,_a(n,0),ds(n,i),ei(n,qt()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(ue(345));case 2:na(n,$n,Nr);break;case 3:if(ds(n,i),(i&130023424)===i&&(e=i_+500-qt(),10<e)){if(Of(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){Gn(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=Fp(na.bind(null,n,$n,Nr),e);break}na(n,$n,Nr);break;case 4:if(ds(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var a=31-ir(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=qt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*jw(i/1960))-i,10<i){n.timeoutHandle=Fp(na.bind(null,n,$n,Nr),i);break}na(n,$n,Nr);break;case 5:na(n,$n,Nr);break;default:throw Error(ue(329))}}}return ei(n,qt()),n.callbackNode===t?mS.bind(null,n):null}function nm(n,e){var t=ic;return n.current.memoizedState.isDehydrated&&(_a(n,e).flags|=256),n=th(n,e),n!==2&&(e=$n,$n=t,e!==null&&im(e)),n}function im(n){$n===null?$n=n:$n.push.apply($n,n)}function Yw(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!ar(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ds(n,e){for(e&=~n_,e&=~Rh,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-ir(e),i=1<<t;n[t]=-1,e&=~i}}function iv(n){if(dt&6)throw Error(ue(327));Io();var e=Of(n,0);if(!(e&1))return ei(n,qt()),null;var t=th(n,e);if(n.tag!==0&&t===2){var i=Rp(n);i!==0&&(e=i,t=nm(n,i))}if(t===1)throw t=Uc,_a(n,0),ds(n,e),ei(n,qt()),t;if(t===6)throw Error(ue(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,na(n,$n,Nr),ei(n,qt()),null}function r_(n,e){var t=dt;dt|=1;try{return n(e)}finally{dt=t,dt===0&&(Zo=qt()+500,Th&&Xs())}}function La(n){gs!==null&&gs.tag===0&&!(dt&6)&&Io();var e=dt;dt|=1;var t=Vi.transition,i=Mt;try{if(Vi.transition=null,Mt=1,n)return n()}finally{Mt=i,Vi.transition=t,dt=e,!(dt&6)&&Xs()}}function s_(){hi=To.current,Ut(To)}function _a(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,Ew(t)),tn!==null)for(t=tn.return;t!==null;){var i=t;switch(zg(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Hf();break;case 3:qo(),Ut(Qn),Ut(Dn),$g();break;case 5:Yg(i);break;case 4:qo();break;case 13:Ut(Bt);break;case 19:Ut(Bt);break;case 10:Gg(i.type._context);break;case 22:case 23:s_()}t=t.return}if(mn=n,tn=n=bs(n.current,null),xn=hi=e,ln=0,Uc=null,n_=Rh=Pa=0,$n=ic=null,fa!==null){for(e=0;e<fa.length;e++)if(t=fa[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}t.pending=i}fa=null}return n}function gS(n,e){do{var t=tn;try{if(Hg(),ff.current=Zf,Kf){for(var i=Gt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Kf=!1}if(ba=0,pn=an=Gt=null,tc=!1,Nc=0,t_.current=null,t===null||t.return===null){ln=1,Uc=e,tn=null;break}e:{var s=n,a=t.return,o=t,l=e;if(e=xn,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=o,h=u.tag;if(!(u.mode&1)&&(h===0||h===11||h===15)){var f=u.alternate;f?(u.updateQueue=f.updateQueue,u.memoizedState=f.memoizedState,u.lanes=f.lanes):(u.updateQueue=null,u.memoizedState=null)}var d=W0(a);if(d!==null){d.flags&=-257,X0(d,a,o,s,e),d.mode&1&&G0(s,c,e),e=d,l=c;var _=e.updateQueue;if(_===null){var m=new Set;m.add(l),e.updateQueue=m}else _.add(l);break e}else{if(!(e&1)){G0(s,c,e),a_();break e}l=Error(ue(426))}}else if(Ft&&o.mode&1){var g=W0(a);if(g!==null){!(g.flags&65536)&&(g.flags|=256),X0(g,a,o,s,e),Bg(Ko(l,o));break e}}s=l=Ko(l,o),ln!==4&&(ln=2),ic===null?ic=[s]:ic.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=J1(s,l,e);O0(s,p);break e;case 1:o=l;var v=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Cs===null||!Cs.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=eS(s,o,e);O0(s,y);break e}}s=s.return}while(s!==null)}xS(t)}catch(w){e=w,tn===t&&t!==null&&(tn=t=t.return);continue}break}while(!0)}function _S(){var n=Qf.current;return Qf.current=Zf,n===null?Zf:n}function a_(){(ln===0||ln===3||ln===2)&&(ln=4),mn===null||!(Pa&268435455)&&!(Rh&268435455)||ds(mn,xn)}function th(n,e){var t=dt;dt|=2;var i=_S();(mn!==n||xn!==e)&&(Nr=null,_a(n,e));do try{$w();break}catch(r){gS(n,r)}while(!0);if(Hg(),dt=t,Qf.current=i,tn!==null)throw Error(ue(261));return mn=null,xn=0,ln}function $w(){for(;tn!==null;)vS(tn)}function qw(){for(;tn!==null&&!yT();)vS(tn)}function vS(n){var e=SS(n.alternate,n,hi);n.memoizedProps=n.pendingProps,e===null?xS(n):tn=e,t_.current=null}function xS(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=Hw(t,e),t!==null){t.flags&=32767,tn=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{ln=6,tn=null;return}}else if(t=Vw(t,e,hi),t!==null){tn=t;return}if(e=e.sibling,e!==null){tn=e;return}tn=e=n}while(e!==null);ln===0&&(ln=5)}function na(n,e,t){var i=Mt,r=Vi.transition;try{Vi.transition=null,Mt=1,Kw(n,e,t,i)}finally{Vi.transition=r,Mt=i}return null}function Kw(n,e,t,i){do Io();while(gs!==null);if(dt&6)throw Error(ue(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(ue(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(PT(n,s),n===mn&&(tn=mn=null,xn=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||yu||(yu=!0,MS(Ff,function(){return Io(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=Vi.transition,Vi.transition=null;var a=Mt;Mt=1;var o=dt;dt|=4,t_.current=null,Ww(n,t),dS(t,n),gw(Ip),kf=!!Dp,Ip=Dp=null,n.current=t,Xw(t),ST(),dt=o,Mt=a,Vi.transition=s}else n.current=t;if(yu&&(yu=!1,gs=n,eh=r),s=n.pendingLanes,s===0&&(Cs=null),TT(t.stateNode),ei(n,qt()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(Jf)throw Jf=!1,n=em,em=null,n;return eh&1&&n.tag!==0&&Io(),s=n.pendingLanes,s&1?n===tm?rc++:(rc=0,tm=n):rc=0,Xs(),null}function Io(){if(gs!==null){var n=Jy(eh),e=Vi.transition,t=Mt;try{if(Vi.transition=null,Mt=16>n?16:n,gs===null)var i=!1;else{if(n=gs,gs=null,eh=0,dt&6)throw Error(ue(331));var r=dt;for(dt|=4,Ie=n.current;Ie!==null;){var s=Ie,a=s.child;if(Ie.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(Ie=c;Ie!==null;){var u=Ie;switch(u.tag){case 0:case 11:case 15:nc(8,u,s)}var h=u.child;if(h!==null)h.return=u,Ie=h;else for(;Ie!==null;){u=Ie;var f=u.sibling,d=u.return;if(uS(u),u===c){Ie=null;break}if(f!==null){f.return=d,Ie=f;break}Ie=d}}}var _=s.alternate;if(_!==null){var m=_.child;if(m!==null){_.child=null;do{var g=m.sibling;m.sibling=null,m=g}while(m!==null)}}Ie=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,Ie=a;else e:for(;Ie!==null;){if(s=Ie,s.flags&2048)switch(s.tag){case 0:case 11:case 15:nc(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,Ie=p;break e}Ie=s.return}}var v=n.current;for(Ie=v;Ie!==null;){a=Ie;var x=a.child;if(a.subtreeFlags&2064&&x!==null)x.return=a,Ie=x;else e:for(a=v;Ie!==null;){if(o=Ie,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Ch(9,o)}}catch(w){Xt(o,o.return,w)}if(o===a){Ie=null;break e}var y=o.sibling;if(y!==null){y.return=o.return,Ie=y;break e}Ie=o.return}}if(dt=r,Xs(),vr&&typeof vr.onPostCommitFiberRoot=="function")try{vr.onPostCommitFiberRoot(xh,n)}catch{}i=!0}return i}finally{Mt=t,Vi.transition=e}}return!1}function rv(n,e,t){e=Ko(t,e),e=J1(n,e,1),n=As(n,e,1),e=Gn(),n!==null&&($c(n,1,e),ei(n,e))}function Xt(n,e,t){if(n.tag===3)rv(n,n,t);else for(;e!==null;){if(e.tag===3){rv(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Cs===null||!Cs.has(i))){n=Ko(t,n),n=eS(e,n,1),e=As(e,n,1),n=Gn(),e!==null&&($c(e,1,n),ei(e,n));break}}e=e.return}}function Zw(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=Gn(),n.pingedLanes|=n.suspendedLanes&t,mn===n&&(xn&t)===t&&(ln===4||ln===3&&(xn&130023424)===xn&&500>qt()-i_?_a(n,0):n_|=t),ei(n,e)}function yS(n,e){e===0&&(n.mode&1?(e=uu,uu<<=1,!(uu&130023424)&&(uu=4194304)):e=1);var t=Gn();n=$r(n,e),n!==null&&($c(n,e,t),ei(n,t))}function Qw(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),yS(n,t)}function Jw(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(ue(314))}i!==null&&i.delete(e),yS(n,t)}var SS;SS=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||Qn.current)Zn=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return Zn=!1,Bw(n,e,t);Zn=!!(n.flags&131072)}else Zn=!1,Ft&&e.flags&1048576&&w1(e,Xf,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;df(n,e),n=e.pendingProps;var r=jo(e,Dn.current);Do(e,t),r=Kg(null,e,i,n,r,t);var s=Zg();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Jn(i)?(s=!0,Gf(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Xg(e),r.updater=Ah,e.stateNode=r,r._reactInternals=e,Gp(e,i,n,t),e=jp(null,e,i,!0,s,t)):(e.tag=0,Ft&&s&&kg(e),zn(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(df(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=tA(i),n=Zi(i,n),r){case 0:e=Xp(null,e,i,n,t);break e;case 1:e=$0(null,e,i,n,t);break e;case 11:e=j0(null,e,i,n,t);break e;case 14:e=Y0(null,e,i,Zi(i.type,n),t);break e}throw Error(ue(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Zi(i,r),Xp(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Zi(i,r),$0(n,e,i,r,t);case 3:e:{if(rS(e),n===null)throw Error(ue(387));i=e.pendingProps,s=e.memoizedState,r=s.element,L1(n,e),$f(e,i,null,t);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ko(Error(ue(423)),e),e=q0(n,e,i,t,r);break e}else if(i!==r){r=Ko(Error(ue(424)),e),e=q0(n,e,i,t,r);break e}else for(vi=ws(e.stateNode.containerInfo.firstChild),Si=e,Ft=!0,Ji=null,t=b1(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Yo(),i===r){e=qr(n,e,t);break e}zn(n,e,i,t)}e=e.child}return e;case 5:return N1(e),n===null&&Bp(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,a=r.children,Up(i,r)?a=null:s!==null&&Up(i,s)&&(e.flags|=32),iS(n,e),zn(n,e,a,t),e.child;case 6:return n===null&&Bp(e),null;case 13:return sS(n,e,t);case 4:return jg(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=$o(e,null,i,t):zn(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Zi(i,r),j0(n,e,i,r,t);case 7:return zn(n,e,e.pendingProps,t),e.child;case 8:return zn(n,e,e.pendingProps.children,t),e.child;case 12:return zn(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,Pt(jf,i._currentValue),i._currentValue=a,s!==null)if(ar(s.value,a)){if(s.children===r.children&&!Qn.current){e=qr(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Gr(-1,t&-t),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),Vp(s.return,t,e),o.lanes|=t;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(ue(341));a.lanes|=t,o=a.alternate,o!==null&&(o.lanes|=t),Vp(a,t,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}zn(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Do(e,t),r=Gi(r),i=i(r),e.flags|=1,zn(n,e,i,t),e.child;case 14:return i=e.type,r=Zi(i,e.pendingProps),r=Zi(i.type,r),Y0(n,e,i,r,t);case 15:return tS(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Zi(i,r),df(n,e),e.tag=1,Jn(i)?(n=!0,Gf(e)):n=!1,Do(e,t),Q1(e,i,r),Gp(e,i,r,t),jp(null,e,i,!0,n,t);case 19:return aS(n,e,t);case 22:return nS(n,e,t)}throw Error(ue(156,e.tag))};function MS(n,e){return qy(n,e)}function eA(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ki(n,e,t,i){return new eA(n,e,t,i)}function o_(n){return n=n.prototype,!(!n||!n.isReactComponent)}function tA(n){if(typeof n=="function")return o_(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Ag)return 11;if(n===Cg)return 14}return 2}function bs(n,e){var t=n.alternate;return t===null?(t=ki(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function gf(n,e,t,i,r,s){var a=2;if(i=n,typeof n=="function")o_(n)&&(a=1);else if(typeof n=="string")a=5;else e:switch(n){case po:return va(t.children,r,s,e);case wg:a=8,r|=8;break;case dp:return n=ki(12,t,e,r|2),n.elementType=dp,n.lanes=s,n;case pp:return n=ki(13,t,e,r),n.elementType=pp,n.lanes=s,n;case mp:return n=ki(19,t,e,r),n.elementType=mp,n.lanes=s,n;case Ny:return bh(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case Py:a=10;break e;case Ly:a=9;break e;case Ag:a=11;break e;case Cg:a=14;break e;case us:a=16,i=null;break e}throw Error(ue(130,n==null?n:typeof n,""))}return e=ki(a,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function va(n,e,t,i){return n=ki(7,n,i,e),n.lanes=t,n}function bh(n,e,t,i){return n=ki(22,n,i,e),n.elementType=Ny,n.lanes=t,n.stateNode={isHidden:!1},n}function dd(n,e,t){return n=ki(6,n,null,e),n.lanes=t,n}function pd(n,e,t){return e=ki(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function nA(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=$h(0),this.expirationTimes=$h(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$h(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function l_(n,e,t,i,r,s,a,o,l){return n=new nA(n,e,t,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=ki(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Xg(s),n}function iA(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ho,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function ES(n){if(!n)return Fs;n=n._reactInternals;e:{if(za(n)!==n||n.tag!==1)throw Error(ue(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Jn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ue(171))}if(n.tag===1){var t=n.type;if(Jn(t))return E1(n,t,e)}return e}function TS(n,e,t,i,r,s,a,o,l){return n=l_(t,i,!0,n,r,s,a,o,l),n.context=ES(null),t=n.current,i=Gn(),r=Rs(t),s=Gr(i,r),s.callback=e??null,As(t,s,r),n.current.lanes=r,$c(n,r,i),ei(n,i),n}function Ph(n,e,t,i){var r=e.current,s=Gn(),a=Rs(r);return t=ES(t),e.context===null?e.context=t:e.pendingContext=t,e=Gr(s,a),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=As(r,e,a),n!==null&&(rr(n,r,a,s),uf(n,r,a)),a}function nh(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function sv(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function c_(n,e){sv(n,e),(n=n.alternate)&&sv(n,e)}function rA(){return null}var wS=typeof reportError=="function"?reportError:function(n){console.error(n)};function u_(n){this._internalRoot=n}Lh.prototype.render=u_.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(ue(409));Ph(n,e,null,null)};Lh.prototype.unmount=u_.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;La(function(){Ph(null,n,null,null)}),e[Yr]=null}};function Lh(n){this._internalRoot=n}Lh.prototype.unstable_scheduleHydration=function(n){if(n){var e=n1();n={blockedOn:null,target:n,priority:e};for(var t=0;t<hs.length&&e!==0&&e<hs[t].priority;t++);hs.splice(t,0,n),t===0&&r1(n)}};function f_(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Nh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function av(){}function sA(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=nh(a);s.call(c)}}var a=TS(e,i,n,0,null,!1,!1,"",av);return n._reactRootContainer=a,n[Yr]=a.current,Cc(n.nodeType===8?n.parentNode:n),La(),a}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=nh(l);o.call(c)}}var l=l_(n,0,!1,null,null,!1,!1,"",av);return n._reactRootContainer=l,n[Yr]=l.current,Cc(n.nodeType===8?n.parentNode:n),La(function(){Ph(e,l,t,i)}),l}function Dh(n,e,t,i,r){var s=t._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=nh(a);o.call(l)}}Ph(e,a,n,r)}else a=sA(t,e,n,r,i);return nh(a)}e1=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=zl(e.pendingLanes);t!==0&&(Pg(e,t|1),ei(e,qt()),!(dt&6)&&(Zo=qt()+500,Xs()))}break;case 13:La(function(){var i=$r(n,1);if(i!==null){var r=Gn();rr(i,n,1,r)}}),c_(n,1)}};Lg=function(n){if(n.tag===13){var e=$r(n,134217728);if(e!==null){var t=Gn();rr(e,n,134217728,t)}c_(n,134217728)}};t1=function(n){if(n.tag===13){var e=Rs(n),t=$r(n,e);if(t!==null){var i=Gn();rr(t,n,e,i)}c_(n,e)}};n1=function(){return Mt};i1=function(n,e){var t=Mt;try{return Mt=n,e()}finally{Mt=t}};wp=function(n,e,t){switch(e){case"input":if(vp(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=Eh(i);if(!r)throw Error(ue(90));Iy(i),vp(i,r)}}}break;case"textarea":Fy(n,t);break;case"select":e=t.value,e!=null&&bo(n,!!t.multiple,e,!1)}};Gy=r_;Wy=La;var aA={usingClientEntryPoint:!1,Events:[Kc,vo,Eh,Vy,Hy,r_]},wl={findFiberByHostInstance:ua,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},oA={bundleType:wl.bundleType,version:wl.version,rendererPackageName:wl.rendererPackageName,rendererConfig:wl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Jr.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Yy(n),n===null?null:n.stateNode},findFiberByHostInstance:wl.findFiberByHostInstance||rA,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Su=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Su.isDisabled&&Su.supportsFiber)try{xh=Su.inject(oA),vr=Su}catch{}}Ci.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=aA;Ci.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!f_(e))throw Error(ue(200));return iA(n,e,null,t)};Ci.createRoot=function(n,e){if(!f_(n))throw Error(ue(299));var t=!1,i="",r=wS;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=l_(n,1,!1,null,null,t,!1,i,r),n[Yr]=e.current,Cc(n.nodeType===8?n.parentNode:n),new u_(e)};Ci.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(ue(188)):(n=Object.keys(n).join(","),Error(ue(268,n)));return n=Yy(e),n=n===null?null:n.stateNode,n};Ci.flushSync=function(n){return La(n)};Ci.hydrate=function(n,e,t){if(!Nh(e))throw Error(ue(200));return Dh(null,n,e,!0,t)};Ci.hydrateRoot=function(n,e,t){if(!f_(n))throw Error(ue(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",a=wS;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),e=TS(e,null,n,1,t??null,r,!1,s,a),n[Yr]=e.current,Cc(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new Lh(e)};Ci.render=function(n,e,t){if(!Nh(e))throw Error(ue(200));return Dh(null,n,e,!1,t)};Ci.unmountComponentAtNode=function(n){if(!Nh(n))throw Error(ue(40));return n._reactRootContainer?(La(function(){Dh(null,null,n,!1,function(){n._reactRootContainer=null,n[Yr]=null})}),!0):!1};Ci.unstable_batchedUpdates=r_;Ci.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!Nh(t))throw Error(ue(200));if(n==null||n._reactInternals===void 0)throw Error(ue(38));return Dh(n,e,t,!1,i)};Ci.version="18.3.1-next-f1338f8080-20240426";function AS(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(AS)}catch(n){console.error(n)}}AS(),Ay.exports=Ci;var lA=Ay.exports,ov=lA;fp.createRoot=ov.createRoot,fp.hydrateRoot=ov.hydrateRoot;function cA(){const n=[["About","#about"],["Skills","#skills"],["Projects","#projects"],["Experience","#experience"],["Contact","#contact"]];return b.jsxs("nav",{className:"nav",children:[b.jsx("div",{className:"nav-left",children:b.jsxs("a",{href:"#home",className:"nav-logo",children:[b.jsx("span",{className:"nav-logo-bracket",children:"["}),b.jsx("span",{className:"nav-logo-name",children:"krunal.kotadiya"}),b.jsx("span",{className:"nav-logo-bracket",children:"]"})]})}),b.jsx("div",{className:"nav-links",children:n.map(([e,t])=>b.jsx("a",{href:t,className:"nav-link-item",children:e},t))})]})}const lv=n=>{const e=n.replace("#","").trim();return/^[0-9a-fA-F]{6}$/.test(e)?{r:parseInt(e.slice(0,2),16),g:parseInt(e.slice(2,4),16),b:parseInt(e.slice(4,6),16)}:null},uA=(n,e,t)=>({r:Math.round(n.r+(e.r-n.r)*t),g:Math.round(n.g+(e.g-n.g)*t),b:Math.round(n.b+(e.b-n.b)*t)}),fA=n=>`rgb(${n.r}, ${n.g}, ${n.b})`,md=(n,e,t)=>Math.min(Math.max(n,e),t),hA=n=>1-Math.pow(1-n,3),dA=(n,e,t,i)=>{if(typeof n=="number")return n;const r=document.createElement("span");r.textContent="M",r.style.position="absolute",r.style.visibility="hidden",r.style.pointerEvents="none",r.style.fontSize=n,r.style.fontWeight=String(t),r.style.fontFamily=i,e.appendChild(r);const s=parseFloat(window.getComputedStyle(r).fontSize)||96;return r.remove(),s},cv=async n=>{if("fonts"in document){try{await document.fonts.load(n)}catch{}await document.fonts.ready}},pA=({text:n="React Bits",particleSize:e=2,density:t=4,color:i="#ffffff",highlightColor:r="#8b5cf6",scatter:s=180,gatherDuration:a=1600,stagger:o=420,pointerRepel:l=40,repelRadius:c=120,idleDrift:u=.7,trigger:h="mount",fontSize:f="clamp(3rem, 12vw, 8rem)",fontWeight:d=800,fontFamily:_="inherit",glow:m=!0,className:g="",style:p})=>{const v=Pe.useRef(null),x=Pe.useRef(null);return Pe.useEffect(()=>{var ke,De;if(typeof window>"u")return;const y=v.current,w=x.current;if(!y||!w)return;const T=w.getContext("2d");if(!T)return;let M=[],A=null,E=null,S=0,P=!1,I=0,U=((ke=window.matchMedia)==null?void 0:ke.call(window,"(prefers-reduced-motion: reduce)").matches)??!1,k=0,B=0,V=1;const z={active:!1,x:0,y:0,smoothX:0,smoothY:0},D=(pe=!0)=>{if(!M.length)return;const O=performance.now(),Be=U?0:s;M.forEach(Ae=>{if(pe){const G=Ae.seed*Math.PI*2,Se=Be*(.35+Ae.depth*.75);Ae.x=Ae.targetX+Math.cos(G)*Se+(Ae.depth-.5)*Be*.55,Ae.y=Ae.targetY+Math.sin(G)*Se+(Ae.seed-.5)*Be*.55}Ae.startX=Ae.x,Ae.startY=Ae.y,Ae.delay=U?0:Ae.seed*o}),I=O,P=!0},Y=pe=>{const O=pe.size;if(T.fillStyle=pe.color,O<=2.1){T.fillRect(pe.x-O/2,pe.y-O/2,O,O);return}T.beginPath(),T.arc(pe.x,pe.y,O/2,0,Math.PI*2),T.fill()},L=pe=>{T.clearRect(0,0,k,B),m&&!U?(T.shadowBlur=e*3,T.shadowColor=r):T.shadowBlur=0,z.smoothX+=(z.x-z.smoothX)*.18,z.smoothY+=(z.y-z.smoothY)*.18;let O=!0;M.forEach(Be=>{let Ae=Be.targetX,G=Be.targetY,Se=1;if(P){const ve=(pe-I-Be.delay)/Math.max(1,U?1:a);Se=md(ve,0,1);const N=hA(Se);Ae=Be.startX+(Be.targetX-Be.startX)*N,G=Be.startY+(Be.targetY-Be.startY)*N,Se<1&&(O=!1)}else if(!U&&u>0){const ve=pe*.001;Ae+=Math.sin(ve*.9+Be.seed*10)*u*Be.depth,G+=Math.cos(ve*.75+Be.depth*10)*u*Be.depth}if(z.active&&!U&&l>0&&c>0){const ve=Ae-z.smoothX,N=G-z.smoothY,C=Math.hypot(ve,N);if(C>0&&C<c){const j=Math.pow(1-C/c,2)*l;Ae+=ve/C*j,G+=N/C*j}}const We=U?1:.22;Be.x+=(Ae-Be.x)*We,Be.y+=(G-Be.y)*We,T.globalAlpha=md(.35+Se*.65,0,1),Y(Be)}),T.globalAlpha=1,T.shadowBlur=0,P&&O&&(P=!1),A=window.requestAnimationFrame(L)},Q=()=>{A===null&&(A=window.requestAnimationFrame(L))},se=async()=>{const pe=++S,O=y.getBoundingClientRect();if(k=Math.floor(O.width),B=Math.floor(O.height),k<=0||B<=0)return;V=Math.min(window.devicePixelRatio||1,2),w.width=Math.max(1,Math.floor(k*V)),w.height=Math.max(1,Math.floor(B*V)),w.style.width="100%",w.style.height="100%",T.setTransform(V,0,0,V,0,0);const Be=window.getComputedStyle(y),Ae=_==="inherit"?Be.fontFamily||"sans-serif":_;let G=dA(f,y,d,Ae),Se=`${d} ${G}px ${Ae}`;if(await cv(Se),pe!==S)return;const We=document.createElement("canvas"),ve=We.getContext("2d",{willReadFrequently:!0});if(!ve)return;const N=String(n||" "),C=k*.92;ve.font=Se;let j=ve.measureText(N);const ie=Math.max(1,j.width);if(ie>C){if(G=Math.max(18,G*(C/ie)),Se=`${d} ${G}px ${Ae}`,await cv(Se),pe!==S)return;ve.font=Se,j=ve.measureText(N)}const ne=Math.ceil(j.actualBoundingBoxLeft||0),te=Math.ceil(j.actualBoundingBoxRight||j.width),ye=Math.ceil(j.actualBoundingBoxAscent||G*.78),ge=Math.ceil(j.actualBoundingBoxDescent||G*.22),xe=Math.max(12,Math.ceil(G*.08)),Ke=Math.max(1,ne+te),ce=Math.max(1,ye+ge);We.width=Ke+xe*2,We.height=ce+xe*2,ve.clearRect(0,0,We.width,We.height),ve.font=Se,ve.textAlign="left",ve.textBaseline="alphabetic",ve.fillStyle="#ffffff",ve.fillText(N,xe-ne,xe+ye);const me=ve.getImageData(0,0,We.width,We.height),He=[],Ve=Math.max(2,Math.floor(t));for(let oe=0;oe<We.height;oe+=Ve)for(let Z=0;Z<We.width;Z+=Ve){const ee=me.data[(oe*We.width+Z)*4+3];ee>40&&He.push({x:k/2-We.width/2+Z,y:B/2-We.height/2+oe,alpha:ee/255})}const be=Math.max(900,Math.min(5200,Math.floor(k*B/90))),Qe=Math.max(1,Math.ceil(He.length/be)),Xe=lv(i),rt=lv(r);M=He.filter((oe,Z)=>Z%Qe===0).map((oe,Z)=>{const ee=(Z*9301+49297)%233280/233280,_e=.45+(Z*233+97)%1e3/1e3*.9,Me=Xe&&rt?md(oe.x/Math.max(1,k)+(ee-.5)*.35,0,1):0,je=Xe&&rt?fA(uA(Xe,rt,Me)):i,ut=ee*Math.PI*2,Lt=(U?0:s)*(.35+_e*.75),Ce=oe.x+Math.cos(ut)*Lt+(ee-.5)*s*.45,Fe=oe.y+Math.sin(ut)*Lt+(_e-.9)*s*.45;return{x:U?oe.x:Ce,y:U?oe.y:Fe,startX:Ce,startY:Fe,targetX:oe.x,targetY:oe.y,size:Math.max(.6,e*(.75+oe.alpha*.45)),color:je,seed:ee,depth:_e,delay:ee*o}}),z.x=k/2,z.y=B/2,z.smoothX=z.x,z.smoothY=z.y,U?(M.forEach(oe=>{oe.x=oe.targetX,oe.y=oe.targetY,oe.startX=oe.targetX,oe.startY=oe.targetY,oe.delay=0}),P=!1):D(!1),Q()},Te=()=>{E&&window.cancelAnimationFrame(E),E=window.requestAnimationFrame(se)},X=pe=>{const O=w.getBoundingClientRect();z.x=pe.clientX-O.left,z.y=pe.clientY-O.top,z.active=!0},J=()=>{z.active=!1},le=pe=>{X(pe),h==="hover"&&D(!0)},re=()=>{h==="click"&&D(!0)},ae=(De=window.matchMedia)==null?void 0:De.call(window,"(prefers-reduced-motion: reduce)"),de=pe=>{U=pe.matches,se()};ae==null||ae.addEventListener("change",de),w.addEventListener("pointerenter",le),w.addEventListener("pointermove",X),w.addEventListener("pointerleave",J),w.addEventListener("click",re);const Ne=new ResizeObserver(Te);return Ne.observe(y),se(),()=>{S+=1,Ne.disconnect(),ae==null||ae.removeEventListener("change",de),w.removeEventListener("pointerenter",le),w.removeEventListener("pointermove",X),w.removeEventListener("pointerleave",J),w.removeEventListener("click",re),A!==null&&window.cancelAnimationFrame(A),E!==null&&window.cancelAnimationFrame(E)}},[n,e,t,i,r,s,a,o,l,c,u,h,f,d,_,m]),b.jsxs("div",{ref:v,className:`particle-text ${g}`,style:p,"aria-label":n,children:[b.jsx("canvas",{ref:x,className:"particle-text__canvas","aria-hidden":"true"}),b.jsx("span",{className:"particle-text__sr",children:n})]})},mA="linear-gradient(145deg, rgba(104, 62, 130, 0.34) 0%, rgba(113, 196, 255, 0.18) 100%)",Al={INITIAL_DURATION:1200,INITIAL_X_OFFSET:70,INITIAL_Y_OFFSET:60,DEVICE_BETA_OFFSET:20,ENTER_TRANSITION_MS:180},Cl=(n,e=0,t=100)=>Math.min(Math.max(n,e),t),rm=(n,e=3)=>parseFloat(n.toFixed(e)),uv=(n,e,t,i,r)=>rm(i+(r-i)*(n-e)/(t-e)),gA=({avatarUrl:n="/krunal-portrait.jpg",iconUrl:e="",grainUrl:t="",innerGradient:i,behindGlowEnabled:r=!0,behindGlowColor:s,behindGlowSize:a,className:o="",enableTilt:l=!0,enableMobileTilt:c=!1,mobileTiltSensitivity:u=5,miniAvatarUrl:h,name:f="Krunal Kotadiya",title:d="Web & AI Developer",handle:_="krunal",status:m="Available for work",contactText:g="Connect",showUserInfo:p=!0,onContactClick:v})=>{const x=Pe.useRef(null),y=Pe.useRef(null),w=Pe.useRef(null),T=Pe.useRef(null),M=Pe.useMemo(()=>{if(!l)return null;let B=null,V=!1,z=0,D=0,Y=0,L=0,Q=0;const se=.14,Te=.6;let X=0;const J=(ae,de)=>{const Ne=y.current,ke=x.current;if(!Ne||!ke)return;const De=Ne.clientWidth||1,pe=Ne.clientHeight||1,O=Cl(100/De*ae),Be=Cl(100/pe*de),Ae=O-50,G=Be-50,Se={"--pointer-x":`${O}%`,"--pointer-y":`${Be}%`,"--background-x":`${uv(O,0,100,35,65)}%`,"--background-y":`${uv(Be,0,100,35,65)}%`,"--pointer-from-center":`${Cl(Math.hypot(Be-50,O-50)/50,0,1)}`,"--pointer-from-top":`${Be/100}`,"--pointer-from-left":`${O/100}`,"--rotate-x":`${rm(-(Ae/5))}deg`,"--rotate-y":`${rm(G/4)}deg`};Object.entries(Se).forEach(([We,ve])=>ke.style.setProperty(We,ve))},le=ae=>{if(!V)return;z===0&&(z=ae);const de=(ae-z)/1e3;z=ae;const Ne=ae<X?Te:se,ke=1-Math.exp(-de/Ne);D+=(L-D)*ke,Y+=(Q-Y)*ke,J(D,Y),Math.abs(L-D)>.05||Math.abs(Q-Y)>.05||document.hasFocus()?B=requestAnimationFrame(le):(V=!1,z=0,B&&(cancelAnimationFrame(B),B=null))},re=()=>{V||(V=!0,z=0,B=requestAnimationFrame(le))};return{setImmediate(ae,de){D=ae,Y=de,J(D,Y)},setTarget(ae,de){L=ae,Q=de,re()},toCenter(){const ae=y.current;ae&&this.setTarget(ae.clientWidth/2,ae.clientHeight/2)},beginInitial(ae){X=performance.now()+ae,re()},getCurrent(){return{x:D,y:Y,tx:L,ty:Q}},cancel(){B&&cancelAnimationFrame(B),B=null,V=!1,z=0}}},[l]),A=(B,V)=>{const z=V.getBoundingClientRect();return{x:B.clientX-z.left,y:B.clientY-z.top}},E=Pe.useCallback(B=>{const V=y.current;if(!V||!M)return;const{x:z,y:D}=A(B,V);M.setTarget(z,D)},[M]),S=Pe.useCallback(B=>{const V=y.current;if(!V||!M)return;V.classList.add("active"),V.classList.add("entering"),w.current&&window.clearTimeout(w.current),w.current=window.setTimeout(()=>{V.classList.remove("entering")},Al.ENTER_TRANSITION_MS);const{x:z,y:D}=A(B,V);M.setTarget(z,D)},[M]),P=Pe.useCallback(()=>{const B=y.current;if(!B||!M)return;M.toCenter();const V=()=>{const{x:z,y:D,tx:Y,ty:L}=M.getCurrent();Math.hypot(Y-z,L-D)<.6?(B.classList.remove("active"),T.current=null):T.current=requestAnimationFrame(V)};T.current&&cancelAnimationFrame(T.current),T.current=requestAnimationFrame(V)},[M]),I=Pe.useCallback(B=>{const V=y.current;if(!V||!M)return;const{beta:z,gamma:D}=B;if(z==null||D==null)return;const Y=V.clientWidth/2,L=V.clientHeight/2,Q=Cl(Y+D*u,0,V.clientWidth),se=Cl(L+(z-Al.DEVICE_BETA_OFFSET)*u,0,V.clientHeight);M.setTarget(Q,se)},[M,u]);Pe.useEffect(()=>{if(!l||!M)return;const B=y.current;if(!B)return;const V=E,z=S,D=P,Y=I;B.addEventListener("pointerenter",z),B.addEventListener("pointermove",V),B.addEventListener("pointerleave",D);const L=()=>{if(!c||location.protocol!=="https:")return;const Te=window.DeviceMotionEvent;Te&&typeof Te.requestPermission=="function"?Te.requestPermission().then(X=>{X==="granted"&&window.addEventListener("deviceorientation",Y)}).catch(console.error):window.addEventListener("deviceorientation",Y)};B.addEventListener("click",L);const Q=(B.clientWidth||0)-Al.INITIAL_X_OFFSET,se=Al.INITIAL_Y_OFFSET;return M.setImmediate(Q,se),M.toCenter(),M.beginInitial(Al.INITIAL_DURATION),()=>{B.removeEventListener("pointerenter",z),B.removeEventListener("pointermove",V),B.removeEventListener("pointerleave",D),B.removeEventListener("click",L),window.removeEventListener("deviceorientation",Y),w.current&&window.clearTimeout(w.current),T.current&&cancelAnimationFrame(T.current),M.cancel(),B.classList.remove("entering")}},[l,c,M,E,S,P,I]);const U=Pe.useMemo(()=>({"--icon":e?`url(${e})`:"none","--grain":t?`url(${t})`:"none","--inner-gradient":i??mA,"--behind-glow-color":s??"rgba(125, 190, 255, 0.67)","--behind-glow-size":a??"50%"}),[e,t,i,s,a]),k=Pe.useCallback(()=>{var B;if(v){v();return}(B=document.getElementById("contact"))==null||B.scrollIntoView({behavior:"smooth",block:"start"})},[v]);return b.jsxs("div",{ref:x,className:`pc-card-wrapper ${o}`.trim(),style:U,children:[r&&b.jsx("div",{className:"pc-behind"}),b.jsx("div",{ref:y,className:"pc-card-shell",children:b.jsx("section",{className:"pc-card",children:b.jsxs("div",{className:"pc-inside",children:[b.jsx("div",{className:"pc-shine"}),b.jsx("div",{className:"pc-glare"}),b.jsxs("div",{className:"pc-content pc-avatar-content",children:[b.jsx("img",{className:"avatar",src:n,alt:`${f||"User"} avatar`,loading:"lazy",onError:B=>{B.target.style.display="none"}}),p&&b.jsxs("div",{className:"pc-user-info",children:[b.jsxs("div",{className:"pc-user-details",children:[b.jsx("div",{className:"pc-mini-avatar",children:b.jsx("img",{src:h||n,alt:`${f||"User"} mini avatar`,loading:"lazy",onError:B=>{B.target.style.opacity="0.6",B.target.src=n}})}),b.jsxs("div",{className:"pc-user-text",children:[b.jsxs("div",{className:"pc-handle",children:["@",_]}),b.jsx("div",{className:"pc-status",children:m})]})]}),b.jsx("button",{className:"pc-contact-btn",onClick:k,style:{pointerEvents:"auto"},type:"button","aria-label":`Contact ${f||"user"}`,children:g})]})]}),b.jsx("div",{className:"pc-content",children:b.jsxs("div",{className:"pc-details",children:[b.jsx("h3",{children:f}),b.jsx("p",{children:d})]})})]})})})]})},_A=Ty.memo(gA),xa={name:"Krunal",location:"Surat, Gujarat, India",tagline:"I design agentic AI systems that turn messy workflows into secure, reliable execution.",bio:["B.Tech CS/IT student at P P Savani University, graduating 2027, with a strong interest in software engineering, intelligent automation, and system hardening.","My focus is agentic AI and workflow automation using LangChain, LangGraph, and n8n, paired with cybersecurity thinking: prompt defense, auth hardening, and secure MLOps practices.","I also build for Gujarat-based SMBs, translating that same systems mindset into practical tools that improve operations without unnecessary complexity."]},vA=[{group:"Agentic AI",items:["LangChain","LangGraph","n8n","Multi-agent systems","Python","Pandas"]},{group:"Frontend",items:["React","Vite","Tailwind CSS","Component architecture"]},{group:"Backend",items:["Node.js","REST APIs","MongoDB (MERN)","JWT auth"]},{group:"Security-adjacent",items:["PII remediation","Auth hardening","Simulated attack ranges","Secure MLOps (learning)"]},{group:"Mobile",items:["Kotlin","Jetpack Compose","Room","MVVM"]}],xA=[{name:"CyberRange Platform",tag:"Cybersecurity",description:"A full-stack, TryHackMe-style training platform. Simulated in-browser terminal, JWT auth, badges, streaks, and leaderboards, built on the MERN stack with a dark hacker aesthetic.",stack:["MongoDB","Express","React","Node.js","JWT"],link:"https://github.com/krunal/cyberrange-platform"},{name:"DSA Loan Portal",tag:"Full-stack",description:"A role-based loan management portal for Lead Agents, Selling Agents, Admins, and Super Admins. Multi-step MSME subsidy forms, commission/payout tracking, CSV import, Excel export, and PDF agreement generation with a live preview/edit flow.",stack:["React","Vite","Tailwind","Node.js HTTP server","jsPDF"]},{name:"Chat-Based Shop-Floor Copilot",tag:"Agentic AI",description:"Built for MSME Idea Hackathon 6.0 — a multi-agent AI system that uses ordinary messaging apps as the interface for MSME factory monitoring, paired with a working React dashboard.",stack:["Multi-agent AI","React","Messaging APIs"]},{name:"FitSync",tag:"Mobile / B2B",description:"A B2B Android fitness app sold to local Surat gyms, with rule-based workout logic behind a clean MVVM architecture.",stack:["Kotlin","Jetpack Compose","Firebase","Room","MVVM"]},{name:"SEC 10-K Financial Analysis",tag:"Data / AI-adjacent",description:"Self-directed analysis of Microsoft, Tesla, and Apple filings (FY2023–2025) — data pipelines, charts, and an automated PDF report.",stack:["Python","Pandas","Matplotlib","ReportLab"]},{name:"AI/ML Notes Book",tag:"Content Engineering",description:"A ~500-page, 21-chapter study reference generated programmatically in a handwritten-notebook aesthetic.",stack:["Node.js","wkhtmltopdf"]},{name:"LearnHub",tag:"Full-stack",description:"A live MERN learning platform, deployed and in use.",stack:["MongoDB","Express","React","Node.js"],link:"https://larnhub.vercel.app"}],yA=[{role:"React.js Intern",org:"Appify Infotech",period:"Current",description:"Working under supervision on React.js development, contributing to production front-end work while building toward agentic AI specialization on the side."},{role:"Freelance Developer",org:"Independent — Gujarat SMBs",period:"Ongoing",description:"Adapting portal architecture built for larger projects into affordable tools for small and mid-sized local businesses."},{role:"B.Tech CS/IT",org:"P P Savani University, Surat",period:"Graduating 2027",description:"Coursework in computer science and IT, paired with a self-directed roadmap covering Python, LLMs, LangChain, LangGraph, n8n, and multi-agent systems."}],SA=[{title:"Android App Components — Intents, Activities, Services & Locations",issuer:"Android Development",year:"2025",category:"Android Development"},{title:"Android App Development",issuer:"Android Development",year:"2025",category:"Android Development"},{title:"AWS",issuer:"AWS",year:"2025",category:"Cloud Computing"},{title:"BCG X gen ai internship",issuer:"BCG X",year:"2026",category:"Business & Technology"},{title:"AI for Brainstorming",issuer:"Coursera",year:"2026",category:"Artificial Intelligence"},{title:"AI Fundamentals",issuer:"Coursera",year:"2026",category:"Artificial Intelligence"},{title:"App Building",issuer:"Coursera",year:"2026",category:"Application Development"},{title:"Data Analysis",issuer:"Coursera",year:"2026",category:"Data Science"},{title:"Google AI",issuer:"Coursera",year:"2026",category:"Artificial Intelligence"},{title:"Research & Insights",issuer:"Coursera",year:"2026",category:"Research"},{title:"Writing & Communication",issuer:"Coursera",year:"2026",category:"Professional Skills"},{title:"Digital Marketing",issuer:"Digital Marketing",year:"2025",category:"Marketing"},{title:"Engineering Maintainable Android Apps",issuer:"Android Development",year:"2025",category:"Android Development"},{title:"Accenture data analytics internship",issuer:"Accenture",year:"2026",category:"Professional Development"},{title:"Java for Android",issuer:"Android Development",year:"2025",category:"Android Development"},{title:"Linear Algebra",issuer:"Mathematics",year:"2025",category:"AI/ML Foundation"},{title:"Software Engineering",issuer:"wells fargo",year:"2026",category:"Software Engineering"},{title:"Tata data analytics internship",issuer:"Tata",year:"2026",category:"Professional Development"}],Ga={email:"kkotadiya549@gmail.com",github:"https://github.com/kkotadiya549-create",linkedin:"https://www.linkedin.com/in/krunal-kotadiya-b98057278",neetcode:"https://neetcode.io/u/RelentlessKakarot527"};function MA({onOpenCLI:n}){return b.jsxs("section",{className:"hero",id:"home",children:[b.jsxs("div",{className:"hero-layout",children:[b.jsxs("div",{className:"hero-content",children:[b.jsxs("div",{className:"hero-badge",children:[b.jsx("span",{className:"badge-pulse"}),b.jsx("span",{className:"badge-text",children:"// WEB & AI DEVELOPER"})]}),b.jsx("div",{className:"hero-particle-wrap","aria-label":"Agentic Systems built for secure execution",children:b.jsx(pA,{text:"Agentic Systems",particleSize:2.2,density:4,color:"#ffd6f5",highlightColor:"#ff4fd8",scatter:200,gatherDuration:1800,stagger:420,pointerRepel:28,repelRadius:110,idleDrift:.7,trigger:"hover",fontSize:"clamp(3rem, 7vw, 7rem)",fontWeight:800,fontFamily:"'Space Grotesk', sans-serif",glow:!0,className:"hero-particle-text",style:{width:"100%",height:"clamp(120px, 12vw, 160px)"}})}),b.jsx("p",{className:"hero-tagline",children:xa.tagline}),b.jsxs("p",{className:"hero-description",children:["Operator: ",b.jsx("strong",{className:"text-light",children:xa.name})," · Based in"," ",b.jsx("span",{className:"text-teal",children:xa.location}),". I design AI systems, agent workflows, and software products that are practical to ship and resilient under real-world pressure."]}),b.jsxs("div",{className:"hero-cta-group",children:[b.jsx("a",{href:"#projects",className:"btn-primary",children:"Explore Architectures"}),b.jsxs("a",{href:"#contact",className:"btn-secondary",children:[b.jsx("span",{className:"btn-icon",children:"✦"})," Let's Connect"]})]}),b.jsxs("div",{className:"hero-telemetry-strip",children:[b.jsxs("div",{className:"telemetry-item",children:[b.jsx("span",{className:"telemetry-label",children:"CORE ARCHITECTURE"}),b.jsx("span",{className:"telemetry-val text-teal",children:"LangGraph & Multi-Agent Swarms"})]}),b.jsx("div",{className:"telemetry-divider"}),b.jsxs("div",{className:"telemetry-item",children:[b.jsx("span",{className:"telemetry-label",children:"SECURITY POSTURE"}),b.jsx("span",{className:"telemetry-val text-amber",children:"Adversarial Red-Teaming Active"})]}),b.jsx("div",{className:"telemetry-divider"}),b.jsxs("div",{className:"telemetry-item",children:[b.jsx("span",{className:"telemetry-label",children:"SYSTEM MODE"}),b.jsx("span",{className:"telemetry-val text-violet",children:"Product First, Secure by Default"})]})]})]}),b.jsx("div",{className:"hero-visual-column",children:b.jsx(_A,{})})]}),b.jsxs("div",{className:"scroll-indicator",children:[b.jsx("div",{className:"scroll-mouse",children:b.jsx("div",{className:"scroll-wheel"})}),b.jsx("span",{className:"scroll-text",children:"SCROLL TO EXPLORE"})]})]})}function Dr(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function CS(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Mi={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Fc={duration:.5,overwrite:!1,delay:0},h_,yn,Ot,zi=1e8,Rt=1/zi,sm=Math.PI*2,EA=sm/4,TA=0,RS=Math.sqrt,wA=Math.cos,AA=Math.sin,gn=function(e){return typeof e=="string"},jt=function(e){return typeof e=="function"},Kr=function(e){return typeof e=="number"},d_=function(e){return typeof e>"u"},Mr=function(e){return typeof e=="object"},ti=function(e){return e!==!1},p_=function(){return typeof window<"u"},Mu=function(e){return jt(e)||gn(e)},bS=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Ln=Array.isArray,CA=/random\([^)]+\)/g,RA=/,\s*/g,fv=/(?:-?\.?\d|\.)+/gi,PS=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,wo=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,gd=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,LS=/[+-]=-?[.\d]+/,bA=/[^,'"\[\]\s]+/gi,PA=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Vt,ur,am,m_,wi={},ih={},NS,DS=function(e){return(ih=Qo(e,wi))&&ai},g_=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Oc=function(e,t){return!t&&console.warn(e)},IS=function(e,t){return e&&(wi[e]=t)&&ih&&(ih[e]=t)||wi},kc=function(){return 0},LA={suppressEvents:!0,isStart:!0,kill:!1},_f={suppressEvents:!0,kill:!1},NA={suppressEvents:!0},__={},Ps=[],om={},US,pi={},_d={},hv=30,vf=[],v_="",x_=function(e){var t=e[0],i,r;if(Mr(t)||jt(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(r=vf.length;r--&&!vf[r].targetTest(t););i=vf[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new iM(e[r],i)))||e.splice(r,1);return e},ya=function(e){return e._gsap||x_(Bi(e))[0]._gsap},FS=function(e,t,i){return(i=e[t])&&jt(i)?e[t]():d_(i)&&e.getAttribute&&e.getAttribute(t)||i},ni=function(e,t){return(e=e.split(",")).forEach(t)||e},$t=function(e){return Math.round(e*1e5)/1e5||0},zt=function(e){return Math.round(e*1e7)/1e7||0},Uo=function(e,t){var i=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},DA=function(e,t){for(var i=t.length,r=0;e.indexOf(t[r])<0&&++r<i;);return r<i},rh=function(){var e=Ps.length,t=Ps.slice(0),i,r;for(om={},Ps.length=0,i=0;i<e;i++)r=t[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},y_=function(e){return!!(e._initted||e._startAt||e.add)},OS=function(e,t,i,r){Ps.length&&!yn&&rh(),e.render(t,i,!!(yn&&t<0&&y_(e))),Ps.length&&!yn&&rh()},kS=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(bA).length<2?t:gn(e)?e.trim():e},zS=function(e){return e},Ai=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},IA=function(e){return function(t,i){for(var r in i)r in t||r==="duration"&&e||r==="ease"||(t[r]=i[r])}},Qo=function(e,t){for(var i in t)e[i]=t[i];return e},dv=function n(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=Mr(t[i])?n(e[i]||(e[i]={}),t[i]):t[i]);return e},sh=function(e,t){var i={},r;for(r in e)r in t||(i[r]=e[r]);return i},sc=function(e){var t=e.parent||Vt,i=e.keyframes?IA(Ln(e.keyframes)):Ai;if(ti(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},UA=function(e,t){for(var i=e.length,r=i===t.length;r&&i--&&e[i]===t[i];);return i<0},BS=function(e,t,i,r,s){var a=e[r],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[r]=t,t._prev=a,t.parent=t._dp=e,t},Ih=function(e,t,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=t._prev,a=t._next;s?s._next=a:e[i]===t&&(e[i]=a),a?a._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},Os=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Sa=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},FA=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},lm=function(e,t,i,r){return e._startAt&&(yn?e._startAt.revert(_f):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},OA=function n(e){return!e||e._ts&&n(e.parent)},pv=function(e){return e._repeat?Jo(e._tTime,e=e.duration()+e._rDelay)*e:0},Jo=function(e,t){var i=Math.floor(e=zt(e/t));return e&&i===e?i-1:i},ah=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Uh=function(e){return e._end=zt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Rt)||0))},Fh=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=zt(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Uh(e),i._dirty||Sa(i,e)),e},VS=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=ah(e.rawTime(),t),(!t._dur||Qc(0,t.totalDuration(),i)-t._tTime>Rt)&&t.render(i,!0)),Sa(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-Rt}},pr=function(e,t,i,r){return t.parent&&Os(t),t._start=zt((Kr(i)?i:i||e!==Vt?Li(e,i,t):e._time)+t._delay),t._end=zt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),BS(e,t,"_first","_last",e._sort?"_start":0),cm(t)||(e._recent=t),r||VS(e,t),e._ts<0&&Fh(e,e._tTime),e},HS=function(e,t){return(wi.ScrollTrigger||g_("scrollTrigger",t))&&wi.ScrollTrigger.create(t,e)},GS=function(e,t,i,r,s){if(M_(e,t,s),!e._initted)return 1;if(!i&&e._pt&&!yn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&US!==gi.frame)return Ps.push(e),e._lazy=[s,r],1},kA=function n(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||n(t))},cm=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},zA=function(e,t,i,r){var s=e.ratio,a=t<0||!t&&(!e._start&&kA(e)&&!(!e._initted&&cm(e))||(e._ts<0||e._dp._ts<0)&&!cm(e))?0:1,o=e._rDelay,l=0,c,u,h;if(o&&e._repeat&&(l=Qc(0,e._tDur,t),u=Jo(l,o),e._yoyo&&u&1&&(a=1-a),u!==Jo(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||yn||r||e._zTime===Rt||!t&&e._zTime){if(!e._initted&&GS(e,t,r,i,l))return;for(h=e._zTime,e._zTime=t||(i?Rt:0),i||(i=t&&!h),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&lm(e,t,i,!0),e._onUpdate&&!i&&xi(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&xi(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Os(e,1),!i&&!yn&&(xi(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},BA=function(e,t,i){var r;if(i>t)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},el=function(e,t,i,r){var s=e._repeat,a=zt(t)||0,o=e._tTime/e._tDur;return o&&!r&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:zt(a*(s+1)+e._rDelay*s):a,o>0&&!r&&Fh(e,e._tTime=e._tDur*o),e.parent&&Uh(e),i||Sa(e.parent,e),e},mv=function(e){return e instanceof Kn?Sa(e):el(e,e._dur)},VA={_start:0,endTime:kc,totalDuration:kc},Li=function n(e,t,i){var r=e.labels,s=e._recent||VA,a=e.duration()>=zi?s.endTime(!1):e._dur,o,l,c;return gn(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?s:i).totalDuration()/100:1)):o<0?(t in r||(r[t]=a),r[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&i&&(l=l/100*(Ln(i)?i[0]:i).totalDuration()),o>1?n(e,t.substr(0,o-1),i)+l:a+l)):t==null?a:+t},ac=function(e,t,i){var r=Kr(t[1]),s=(r?2:1)+(e<2?0:1),a=t[s],o,l;if(r&&(a.duration=t[1]),a.parent=i,e){for(o=a,l=i;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=ti(l.vars.inherit)&&l.parent;a.immediateRender=ti(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new en(t[0],a,t[s+1])},js=function(e,t){return e||e===0?t(e):t},Qc=function(e,t,i){return i<e?e:i>t?t:i},bn=function(e,t){return!gn(e)||!(t=PA.exec(e))?"":t[1]},HA=function(e,t,i){return js(i,function(r){return Qc(e,t,r)})},um=[].slice,WS=function(e,t){return e&&Mr(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Mr(e[0]))&&!e.nodeType&&e!==ur},GA=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(r){var s;return gn(r)&&!t||WS(r,1)?(s=i).push.apply(s,Bi(r)):i.push(r)})||i},Bi=function(e,t,i){return Ot&&!t&&Ot.selector?Ot.selector(e):gn(e)&&!i&&(am||!tl())?um.call((t||m_).querySelectorAll(e),0):Ln(e)?GA(e,i):WS(e)?um.call(e,0):e?[e]:[]},fm=function(e){return e=Bi(e)[0]||Oc("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return Bi(t,i.querySelectorAll?i:i===e?Oc("Invalid scope")||m_.createElement("div"):e)}},XS=function(e){return e.sort(function(){return .5-Math.random()})},jS=function(e){if(jt(e))return e;var t=Mr(e)?e:{each:e},i=Ma(t.ease),r=t.from||0,s=parseFloat(t.base)||0,a={},o=r>0&&r<1,l=isNaN(r)||o,c=t.axis,u=r,h=r;return gn(r)?u=h={center:.5,edges:.5,end:1}[r]||0:!o&&l&&(u=r[0],h=r[1]),function(f,d,_){var m=(_||t).length,g=a[m],p,v,x,y,w,T,M,A,E;if(!g){if(E=t.grid==="auto"?0:(t.grid||[1,zi])[1],!E){for(M=-zi;M<(M=_[E++].getBoundingClientRect().left)&&E<m;);E<m&&E--}for(g=a[m]=[],p=l?Math.min(E,m)*u-.5:r%E,v=E===zi?0:l?m*h/E-.5:r/E|0,M=0,A=zi,T=0;T<m;T++)x=T%E-p,y=v-(T/E|0),g[T]=w=c?Math.abs(c==="y"?y:x):RS(x*x+y*y),w>M&&(M=w),w<A&&(A=w);r==="random"&&XS(g),g.max=M-A,g.min=A,g.v=m=(parseFloat(t.amount)||parseFloat(t.each)*(E>m?m-1:c?c==="y"?m/E:E:Math.max(E,m/E))||0)*(r==="edges"?-1:1),g.b=m<0?s-m:s,g.u=bn(t.amount||t.each)||0,i=i&&m<0?nC(i):i}return m=(g[f]-g.min)/g.max||0,zt(g.b+(i?i(m):m)*g.v)+g.u}},hm=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=zt(Math.round(parseFloat(i)/e)*e*t);return(r-r%1)/t+(Kr(i)?0:bn(i))}},YS=function(e,t){var i=Ln(e),r,s;return!i&&Mr(e)&&(r=i=e.radius||zi,e.values?(e=Bi(e.values),(s=!Kr(e[0]))&&(r*=r)):e=hm(e.increment)),js(t,i?jt(e)?function(a){return s=e(a),Math.abs(s-a)<=r?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=zi,u=0,h=e.length,f,d;h--;)s?(f=e[h].x-o,d=e[h].y-l,f=f*f+d*d):f=Math.abs(e[h]-o),f<c&&(c=f,u=h);return u=!r||c<=r?e[u]:a,s||u===a||Kr(a)?u:u+bn(a)}:hm(e))},$S=function(e,t,i,r){return js(Ln(e)?!t:i===!0?!!(i=0):!r,function(){return Ln(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*r)/r})},WA=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(r){return t.reduce(function(s,a){return a(s)},r)}},XA=function(e,t){return function(i){return e(parseFloat(i))+(t||bn(i))}},jA=function(e,t,i){return KS(e,t,0,1,i)},qS=function(e,t,i){return js(i,function(r){return e[~~t(r)]})},YA=function n(e,t,i){var r=t-e;return Ln(e)?qS(e,n(0,e.length),t):js(i,function(s){return(r+(s-e)%r)%r+e})},$A=function n(e,t,i){var r=t-e,s=r*2;return Ln(e)?qS(e,n(0,e.length-1),t):js(i,function(a){return a=(s+(a-e)%s)%s||0,e+(a>r?s-a:a)})},zc=function(e){return e.replace(CA,function(t){var i=t.indexOf("[")+1,r=t.substring(i||7,i?t.indexOf("]"):t.length-1).split(RA);return $S(i?r:+r[0],i?0:+r[1],+r[2]||1e-5)})},KS=function(e,t,i,r,s){var a=t-e,o=r-i;return js(s,function(l){return i+((l-e)/a*o||0)})},qA=function n(e,t,i,r){var s=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!s){var a=gn(e),o={},l,c,u,h,f;if(i===!0&&(r=1)&&(i=null),a)e={p:e},t={p:t};else if(Ln(e)&&!Ln(t)){for(u=[],h=e.length,f=h-2,c=1;c<h;c++)u.push(n(e[c-1],e[c]));h--,s=function(_){_*=h;var m=Math.min(f,~~_);return u[m](_-m)},i=t}else r||(e=Qo(Ln(e)?[]:{},e));if(!u){for(l in t)S_.call(o,e,l,"get",t[l]);s=function(_){return w_(_,o)||(a?e.p:e)}}}return js(i,s)},gv=function(e,t,i){var r=e.labels,s=zi,a,o,l;for(a in r)o=r[a]-t,o<0==!!i&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},xi=function(e,t,i){var r=e.vars,s=r[t],a=Ot,o=e._ctx,l,c,u;if(s)return l=r[t+"Params"],c=r.callbackScope||e,i&&Ps.length&&rh(),o&&(Ot=o),u=l?s.apply(c,l):s.call(c),Ot=a,u},Vl=function(e){return Os(e),e.scrollTrigger&&e.scrollTrigger.kill(!!yn),e.progress()<1&&xi(e,"onInterrupt"),e},Ao,ZS=[],QS=function(e){if(e)if(e=!e.name&&e.default||e,p_()||e.headless){var t=e.name,i=jt(e),r=t&&!i&&e.init?function(){this._props=[]}:e,s={init:kc,render:w_,add:S_,kill:hC,modifier:fC,rawVars:0},a={targetTest:0,get:0,getSetter:T_,aliases:{},register:0};if(tl(),e!==r){if(pi[t])return;Ai(r,Ai(sh(e,s),a)),Qo(r.prototype,Qo(s,sh(e,a))),pi[r.prop=t]=r,e.targetTest&&(vf.push(r),__[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}IS(t,r),e.register&&e.register(ai,r,ii)}else ZS.push(e)},Ct=255,Hl={aqua:[0,Ct,Ct],lime:[0,Ct,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ct],navy:[0,0,128],white:[Ct,Ct,Ct],olive:[128,128,0],yellow:[Ct,Ct,0],orange:[Ct,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ct,0,0],pink:[Ct,192,203],cyan:[0,Ct,Ct],transparent:[Ct,Ct,Ct,0]},vd=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*Ct+.5|0},JS=function(e,t,i){var r=e?Kr(e)?[e>>16,e>>8&Ct,e&Ct]:0:Hl.black,s,a,o,l,c,u,h,f,d,_;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Hl[e])r=Hl[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&Ct,r&Ct,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&Ct,e&Ct]}else if(e.substr(0,3)==="hsl"){if(r=_=e.match(fv),!t)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,r.length>3&&(r[3]*=1),r[0]=vd(l+1/3,s,a),r[1]=vd(l,s,a),r[2]=vd(l-1/3,s,a);else if(~e.indexOf("="))return r=e.match(PS),i&&r.length<4&&(r[3]=1),r}else r=e.match(fv)||Hl.transparent;r=r.map(Number)}return t&&!_&&(s=r[0]/Ct,a=r[1]/Ct,o=r[2]/Ct,h=Math.max(s,a,o),f=Math.min(s,a,o),u=(h+f)/2,h===f?l=c=0:(d=h-f,c=u>.5?d/(2-h-f):d/(h+f),l=h===s?(a-o)/d+(a<o?6:0):h===a?(o-s)/d+2:(s-a)/d+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),i&&r.length<4&&(r[3]=1),r},eM=function(e){var t=[],i=[],r=-1;return e.split(Ls).forEach(function(s){var a=s.match(wo)||[];t.push.apply(t,a),i.push(r+=a.length+1)}),t.c=i,t},_v=function(e,t,i){var r="",s=(e+r).match(Ls),a=t?"hsla(":"rgba(",o=0,l,c,u,h;if(!s)return e;if(s=s.map(function(f){return(f=JS(f,t,1))&&a+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),i&&(u=eM(e),l=i.c,l.join(r)!==u.c.join(r)))for(c=e.replace(Ls,"1").split(wo),h=c.length-1;o<h;o++)r+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:i).shift());if(!c)for(c=e.split(Ls),h=c.length-1;o<h;o++)r+=c[o]+s[o];return r+c[h]},Ls=function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Hl)n+="|"+e+"\\b";return new RegExp(n+")","gi")}(),KA=/hsl[a]?\(/,tM=function(e){var t=e.join(" "),i;if(Ls.lastIndex=0,Ls.test(t))return i=KA.test(t),e[1]=_v(e[1],i),e[0]=_v(e[0],i,eM(e[1])),!0},Bc,gi=function(){var n=Date.now,e=500,t=33,i=n(),r=i,s=1e3/240,a=s,o=[],l,c,u,h,f,d,_=function m(g){var p=n()-r,v=g===!0,x,y,w,T;if((p>e||p<0)&&(i+=p-t),r+=p,w=r-i,x=w-a,(x>0||v)&&(T=++h.frame,f=w-h.time*1e3,h.time=w=w/1e3,a+=x+(x>=s?4:s-x),y=1),v||(l=c(m)),y)for(d=0;d<o.length;d++)o[d](w,f,T,g)};return h={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(g){return f/(1e3/(g||60))},wake:function(){NS&&(!am&&p_()&&(ur=am=window,m_=ur.document||{},wi.gsap=ai,(ur.gsapVersions||(ur.gsapVersions=[])).push(ai.version),DS(ih||ur.GreenSockGlobals||!ur.gsap&&ur||{}),ZS.forEach(QS)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(g){return setTimeout(g,a-h.time*1e3+1|0)},Bc=1,_(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Bc=0,c=kc},lagSmoothing:function(g,p){e=g||1/0,t=Math.min(p||33,e)},fps:function(g){s=1e3/(g||240),a=h.time*1e3+s},add:function(g,p,v){var x=p?function(y,w,T,M){g(y,w,T,M),h.remove(x)}:g;return h.remove(g),o[v?"unshift":"push"](x),tl(),x},remove:function(g,p){~(p=o.indexOf(g))&&o.splice(p,1)&&d>=p&&d--},_listeners:o},h}(),tl=function(){return!Bc&&gi.wake()},ft={},ZA=/^[\d.\-M][\d.\-,\s]/,QA=/["']/g,JA=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),r=i[0],s=1,a=i.length,o,l,c;s<a;s++)l=i[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[r]=isNaN(c)?c.replace(QA,"").trim():+c,r=l.substr(o+1).trim();return t},eC=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<i?e.indexOf(")",i+1):i)},tC=function(e){var t=(e+"").split("("),i=ft[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[JA(t[1])]:eC(e).split(",").map(kS)):ft._CE&&ZA.test(e)?ft._CE("",e):i},nC=function(e){return function(t){return 1-e(1-t)}},Ma=function(e,t){return e&&(jt(e)?e:ft[e]||tC(e))||t},Ba=function(e,t,i,r){i===void 0&&(i=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:r},a;return ni(e,function(o){ft[o]=wi[o]=s,ft[a=o.toLowerCase()]=i;for(var l in s)ft[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ft[o+"."+l]=s[l]}),s},nM=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},xd=function n(e,t,i){var r=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),a=s/sm*(Math.asin(1/r)||0),o=function(u){return u===1?1:r*Math.pow(2,-10*u)*AA((u-a)*s)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:nM(o);return s=sm/s,l.config=function(c,u){return n(e,c,u)},l},yd=function n(e,t){t===void 0&&(t=1.70158);var i=function(a){return a?--a*a*((t+1)*a+t)+1:0},r=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:nM(i);return r.config=function(s){return n(e,s)},r};ni("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,e){var t=e<5?e+1:e;Ba(n+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});ft.Linear.easeNone=ft.none=ft.Linear.easeIn;Ba("Elastic",xd("in"),xd("out"),xd());(function(n,e){var t=1/e,i=2*t,r=2.5*t,s=function(o){return o<t?n*o*o:o<i?n*Math.pow(o-1.5/e,2)+.75:o<r?n*(o-=2.25/e)*o+.9375:n*Math.pow(o-2.625/e,2)+.984375};Ba("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);Ba("Expo",function(n){return Math.pow(2,10*(n-1))*n+n*n*n*n*n*n*(1-n)});Ba("Circ",function(n){return-(RS(1-n*n)-1)});Ba("Sine",function(n){return n===1?1:-wA(n*EA)+1});Ba("Back",yd("in"),yd("out"),yd());ft.SteppedEase=ft.steps=wi.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,r=e+(t?0:1),s=t?1:0,a=1-Rt;return function(o){return((r*Qc(0,a,o)|0)+s)*i}}};Fc.ease=ft["quad.out"];ni("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return v_+=n+","+n+"Params,"});var iM=function(e,t){this.id=TA++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:FS,this.set=t?t.getSetter:T_},Vc=function(){function n(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,el(this,+t.duration,1,1),this.data=t.data,Ot&&(this._ctx=Ot,Ot.data.push(this)),Bc||gi.wake()}var e=n.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,el(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(tl(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Fh(this,i),!s._dp||s.parent||VS(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&pr(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===Rt||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),OS(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+pv(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+pv(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?Jo(this._tTime,s)+1:1},e.timeScale=function(i,r){if(!arguments.length)return this._rts===-Rt?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?ah(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-Rt?0:this._rts,this.totalTime(Qc(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),Uh(this),FA(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(tl(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Rt&&(this._tTime-=Rt)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=zt(i);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&pr(r,this,this._start-this._delay),this}return this._start},e.endTime=function(i){return this._start+(ti(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?ah(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=NA);var r=yn;return yn=i,y_(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),yn=r,this},e.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,mv(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,mv(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(Li(this,i),ti(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,ti(r)),this._dur||(this._zTime=-Rt),this},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-Rt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Rt,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-Rt)},e.eventCallback=function(i,r,s){var a=this.vars;return arguments.length>1?(r?(a[i]=r,s&&(a[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete a[i],this):a[i]},e.then=function(i){var r=this,s=r._prom;return new Promise(function(a){var o=jt(i)?i:zS,l=function(){var u=r.then;r.then=null,s&&s(),jt(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=u),a(o),r.then=u};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},e.kill=function(){Vl(this)},n}();Ai(Vc.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Rt,_prom:0,_ps:!1,_rts:1});var Kn=function(n){CS(e,n);function e(i,r){var s;return i===void 0&&(i={}),s=n.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=ti(i.sortChildren),Vt&&pr(i.parent||Vt,Dr(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&HS(Dr(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,a){return ac(0,arguments,this),this},t.from=function(r,s,a){return ac(1,arguments,this),this},t.fromTo=function(r,s,a,o){return ac(2,arguments,this),this},t.set=function(r,s,a){return s.duration=0,s.parent=this,sc(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new en(r,s,Li(this,a),1),this},t.call=function(r,s,a){return pr(this,en.delayedCall(0,r,s),a)},t.staggerTo=function(r,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new en(r,a,Li(this,l)),this},t.staggerFrom=function(r,s,a,o,l,c,u){return a.runBackwards=1,sc(a).immediateRender=ti(a.immediateRender),this.staggerTo(r,s,a,o,l,c,u)},t.staggerFromTo=function(r,s,a,o,l,c,u,h){return o.startAt=a,sc(o).immediateRender=ti(o.immediateRender),this.staggerTo(r,s,o,l,c,u,h)},t.render=function(r,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:zt(r),h=this._zTime<0!=r<0&&(this._initted||!c),f,d,_,m,g,p,v,x,y,w,T,M;if(this!==Vt&&u>l&&r>=0&&(u=l),u!==this._tTime||a||h){if(o!==this._time&&c&&(u+=this._time-o,r+=this._time-o),f=u,y=this._start,x=this._ts,p=!x,h&&(c||(o=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(T=this._yoyo,g=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(g*100+r,s,a);if(f=zt(u%g),u===l?(m=this._repeat,f=c):(w=zt(u/g),m=~~w,m&&m===w&&(f=c,m--),f>c&&(f=c)),w=Jo(this._tTime,g),!o&&this._tTime&&w!==m&&this._tTime-w*g-this._dur<=0&&(w=m),T&&m&1&&(f=c-f,M=1),m!==w&&!this._lock){var A=T&&w&1,E=A===(T&&m&1);if(m<w&&(A=!A),o=A?0:u%c?c:u,this._lock=1,this.render(o||(M?0:zt(m*g)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&xi(this,"onRepeat"),this.vars.repeatRefresh&&!M&&(this.invalidate()._lock=1,w=m),o&&o!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,E&&(this._lock=2,o=A?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!M&&this.invalidate()),this._lock=0,!this._ts&&!p)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=BA(this,zt(o),zt(f)),v&&(u-=f-(f=v._start))),this._tTime=u,this._time=f,this._act=!!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,o=0),!o&&u&&c&&!s&&!w&&(xi(this,"onStart"),this._tTime!==u))return this;if(f>=o&&r>=0)for(d=this._first;d;){if(_=d._next,(d._act||f>=d._start)&&d._ts&&v!==d){if(d.parent!==this)return this.render(r,s,a);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,s,a),f!==this._time||!this._ts&&!p){v=0,_&&(u+=this._zTime=-Rt);break}}d=_}else{d=this._last;for(var S=r<0?r:f;d;){if(_=d._prev,(d._act||S<=d._end)&&d._ts&&v!==d){if(d.parent!==this)return this.render(r,s,a);if(d.render(d._ts>0?(S-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(S-d._start)*d._ts,s,a||yn&&y_(d)),f!==this._time||!this._ts&&!p){v=0,_&&(u+=this._zTime=S?-Rt:Rt);break}}d=_}}if(v&&!s&&(this.pause(),v.render(f>=o?0:-Rt)._zTime=f>=o?1:-1,this._ts))return this._start=y,Uh(this),this.render(r,s,a);this._onUpdate&&!s&&xi(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(y===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Os(this,1),!s&&!(r<0&&!o)&&(u||o||!l)&&(xi(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var a=this;if(Kr(s)||(s=Li(this,s,r)),!(r instanceof Vc)){if(Ln(r))return r.forEach(function(o){return a.add(o,s)}),this;if(gn(r))return this.addLabel(r,s);if(jt(r))r=en.delayedCall(0,r);else return this}return this!==r?pr(this,r,s):this},t.getChildren=function(r,s,a,o){r===void 0&&(r=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-zi);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof en?s&&l.push(c):(a&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===r)return s[a]},t.remove=function(r){return gn(r)?this.removeLabel(r):jt(r)?this.killTweensOf(r):(r.parent===this&&Ih(this,r),r===this._recent&&(this._recent=this._last),Sa(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=zt(gi.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=Li(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,a){var o=en.delayedCall(0,s||kc,a);return o.data="isPause",this._hasPause=1,pr(this,o,Li(this,r))},t.removePause=function(r){var s=this._first;for(r=Li(this,r);s;)s._start===r&&s.data==="isPause"&&Os(s),s=s._next},t.killTweensOf=function(r,s,a){for(var o=this.getTweensOf(r,a),l=o.length;l--;)_s!==o[l]&&o[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var a=[],o=Bi(r),l=this._first,c=Kr(s),u;l;)l instanceof en?DA(l._targets,o)&&(c?(!_s||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},t.tweenTo=function(r,s){s=s||{};var a=this,o=Li(a,r),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,d,_=en.to(a,Ai({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||Rt,onStart:function(){if(a.pause(),!d){var g=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());_._dur!==g&&el(_,g,0,1).render(_._time,!0,!0),d=1}u&&u.apply(_,h||[])}},s));return f?_.render(0):_},t.tweenFromTo=function(r,s,a){return this.tweenTo(s,Ai({startAt:{time:Li(this,r)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),gv(this,Li(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),gv(this,Li(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+Rt)},t.shiftChildren=function(r,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(r=zt(r);o;)o._start>=a&&(o._start+=r,o._end+=r),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=r);return Sa(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return n.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),Sa(this)},t.totalDuration=function(r){var s=0,a=this,o=a._last,l=zi,c,u,h;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-r:r));if(a._dirty){for(h=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,pr(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!h&&!a._dp||h&&h.smoothChildTiming)&&(a._start+=zt(u/a._ts),a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;el(a,a===Vt&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(r){if(Vt._ts&&(OS(Vt,ah(r,Vt)),US=gi.frame),gi.frame>=hv){hv+=Mi.autoSleep||120;var s=Vt._first;if((!s||!s._ts)&&Mi.autoSleep&&gi._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||gi.sleep()}}},e}(Vc);Ai(Kn.prototype,{_lock:0,_hasPause:0,_forcing:0});var iC=function(e,t,i,r,s,a,o){var l=new ii(this._pt,e,t,0,1,cM,null,s),c=0,u=0,h,f,d,_,m,g,p,v;for(l.b=i,l.e=r,i+="",r+="",(p=~r.indexOf("random("))&&(r=zc(r)),a&&(v=[i,r],a(v,e,t),i=v[0],r=v[1]),f=i.match(gd)||[];h=gd.exec(r);)_=h[0],m=r.substring(c,h.index),d?d=(d+1)%5:m.substr(-5)==="rgba("&&(d=1),_!==f[u++]&&(g=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:m||u===1?m:",",s:g,c:_.charAt(1)==="="?Uo(g,_)-g:parseFloat(_)-g,m:d&&d<4?Math.round:0},c=gd.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=o,(LS.test(r)||p)&&(l.e=0),this._pt=l,l},S_=function(e,t,i,r,s,a,o,l,c,u){jt(r)&&(r=r(s||0,e,a));var h=e[t],f=i!=="get"?i:jt(h)?c?e[t.indexOf("set")||!jt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,d=jt(h)?c?lC:oM:E_,_;if(gn(r)&&(~r.indexOf("random(")&&(r=zc(r)),r.charAt(1)==="="&&(_=Uo(f,r)+(bn(f)||0),(_||_===0)&&(r=_))),!u||f!==r||dm)return!isNaN(f*r)&&r!==""?(_=new ii(this._pt,e,t,+f||0,r-(f||0),typeof h=="boolean"?uC:lM,0,d),c&&(_.fp=c),o&&_.modifier(o,this,e),this._pt=_):(!h&&!(t in e)&&g_(t,r),iC.call(this,e,t,f,r,d,l||Mi.stringFilter,c))},rC=function(e,t,i,r,s){if(jt(e)&&(e=oc(e,s,t,i,r)),!Mr(e)||e.style&&e.nodeType||Ln(e)||bS(e))return gn(e)?oc(e,s,t,i,r):e;var a={},o;for(o in e)a[o]=oc(e[o],s,t,i,r);return a},rM=function(e,t,i,r,s,a){var o,l,c,u;if(pi[e]&&(o=new pi[e]).init(s,o.rawVars?t[e]:rC(t[e],r,s,a,i),i,r,a)!==!1&&(i._pt=l=new ii(i._pt,s,e,0,1,o.render,o,0,o.priority),i!==Ao))for(c=i._ptLookup[i._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},_s,dm,M_=function n(e,t,i){var r=e.vars,s=r.ease,a=r.startAt,o=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.runBackwards,h=r.yoyoEase,f=r.keyframes,d=r.autoRevert,_=e._dur,m=e._startAt,g=e._targets,p=e.parent,v=p&&p.data==="nested"?p.vars.targets:g,x=e._overwrite==="auto"&&!h_,y=e.timeline,w=r.easeReverse||h,T,M,A,E,S,P,I,U,k,B,V,z,D;if(y&&(!f||!s)&&(s="none"),e._ease=Ma(s,Fc.ease),e._rEase=w&&(Ma(w)||e._ease),e._from=!y&&!!r.runBackwards,e._from&&(e.ratio=1),!y||f&&!r.stagger){if(U=g[0]?ya(g[0]).harness:0,z=U&&r[U.prop],T=sh(r,__),m&&(m._zTime<0&&m.progress(1),t<0&&u&&o&&!d?m.render(-1,!0):m.revert(u&&_?_f:LA),m._lazy=0),a){if(Os(e._startAt=en.set(g,Ai({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!m&&ti(l),startAt:null,delay:0,onUpdate:c&&function(){return xi(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(yn||!o&&!d)&&e._startAt.revert(_f),o&&_&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(u&&_&&!m){if(t&&(o=!1),A=Ai({overwrite:!1,data:"isFromStart",lazy:o&&!m&&ti(l),immediateRender:o,stagger:0,parent:p},T),z&&(A[U.prop]=z),Os(e._startAt=en.set(g,A)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(yn?e._startAt.revert(_f):e._startAt.render(-1,!0)),e._zTime=t,!o)n(e._startAt,Rt,Rt);else if(!t)return}for(e._pt=e._ptCache=0,l=_&&ti(l)||l&&!_,M=0;M<g.length;M++){if(S=g[M],I=S._gsap||x_(g)[M]._gsap,e._ptLookup[M]=B={},om[I.id]&&Ps.length&&rh(),V=v===g?M:v.indexOf(S),U&&(k=new U).init(S,z||T,e,V,v)!==!1&&(e._pt=E=new ii(e._pt,S,k.name,0,1,k.render,k,0,k.priority),k._props.forEach(function(Y){B[Y]=E}),k.priority&&(P=1)),!U||z)for(A in T)pi[A]&&(k=rM(A,T,e,V,S,v))?k.priority&&(P=1):B[A]=E=S_.call(e,S,A,"get",T[A],V,v,0,r.stringFilter);e._op&&e._op[M]&&e.kill(S,e._op[M]),x&&e._pt&&(_s=e,Vt.killTweensOf(S,B,e.globalTime(t)),D=!e.parent,_s=0),e._pt&&l&&(om[I.id]=1)}P&&uM(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!D,f&&t<=0&&y.render(zi,!0,!0)},sC=function(e,t,i,r,s,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,f,d;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,d=e._targets.length;d--;){if(u=f[d][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return dm=1,e.vars[t]="+=0",M_(e,o),dm=0,l?Oc(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(d=c.length;d--;)h=c[d],u=h._pt||h,u.s=(r||r===0)&&!s?r:u.s+(r||0)+a*u.c,u.c=i-u.s,h.e&&(h.e=$t(i)+bn(h.e)),h.b&&(h.b=u.s+bn(h.b))},aC=function(e,t){var i=e[0]?ya(e[0]).harness:0,r=i&&i.aliases,s,a,o,l;if(!r)return t;s=Qo({},t);for(a in r)if(a in s)for(l=r[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},oC=function(e,t,i,r){var s=t.ease||r||"power1.inOut",a,o;if(Ln(t))o=i[e]||(i[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:s})});else for(a in t)o=i[a]||(i[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},oc=function(e,t,i,r,s){return jt(e)?e.call(t,i,r,s):gn(e)&&~e.indexOf("random(")?zc(e):e},sM=v_+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",aM={};ni(sM+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return aM[n]=1});var en=function(n){CS(e,n);function e(i,r,s,a){var o;typeof r=="number"&&(s.duration=r,r=s,s=null),o=n.call(this,a?r:sc(r))||this;var l=o.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,d=l.overwrite,_=l.keyframes,m=l.defaults,g=l.scrollTrigger,p=r.parent||Vt,v=(Ln(i)||bS(i)?Kr(i[0]):"length"in r)?[i]:Bi(i),x,y,w,T,M,A,E,S;if(o._targets=v.length?x_(v):Oc("GSAP target "+i+" not found. https://gsap.com",!Mi.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=d,_||f||Mu(c)||Mu(u)){r=o.vars;var P=r.easeReverse||r.yoyoEase;if(x=o.timeline=new Kn({data:"nested",defaults:m||{},targets:p&&p.data==="nested"?p.vars.targets:v}),x.kill(),x.parent=x._dp=Dr(o),x._start=0,f||Mu(c)||Mu(u)){if(T=v.length,E=f&&jS(f),Mr(f))for(M in f)~sM.indexOf(M)&&(S||(S={}),S[M]=f[M]);for(y=0;y<T;y++)w=sh(r,aM),w.stagger=0,P&&(w.easeReverse=P),S&&Qo(w,S),A=v[y],w.duration=+oc(c,Dr(o),y,A,v),w.delay=(+oc(u,Dr(o),y,A,v)||0)-o._delay,!f&&T===1&&w.delay&&(o._delay=u=w.delay,o._start+=u,w.delay=0),x.to(A,w,E?E(y,A,v):0),x._ease=ft.none;x.duration()?c=u=0:o.timeline=0}else if(_){sc(Ai(x.vars.defaults,{ease:"none"})),x._ease=Ma(_.ease||r.ease||"none");var I=0,U,k,B;if(Ln(_))_.forEach(function(V){return x.to(v,V,">")}),x.duration();else{w={};for(M in _)M==="ease"||M==="easeEach"||oC(M,_[M],w,_.easeEach);for(M in w)for(U=w[M].sort(function(V,z){return V.t-z.t}),I=0,y=0;y<U.length;y++)k=U[y],B={ease:k.e,duration:(k.t-(y?U[y-1].t:0))/100*c},B[M]=k.v,x.to(v,B,I),I+=B.duration;x.duration()<c&&x.to({},{duration:c-x.duration()})}}c||o.duration(c=x.duration())}else o.timeline=0;return d===!0&&!h_&&(_s=Dr(o),Vt.killTweensOf(v),_s=0),pr(p,Dr(o),s),r.reversed&&o.reverse(),r.paused&&o.paused(!0),(h||!c&&!_&&o._start===zt(p._time)&&ti(h)&&OA(Dr(o))&&p.data!=="nested")&&(o._tTime=-Rt,o.render(Math.max(0,-u)||0)),g&&HS(Dr(o),g),o}var t=e.prototype;return t.render=function(r,s,a){var o=this._time,l=this._tDur,c=this._dur,u=r<0,h=r>l-Rt&&!u?l:r<Rt?0:r,f,d,_,m,g,p,v,x;if(!c)zA(this,r,s,a);else if(h!==this._tTime||!r||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(f=h,x=this.timeline,this._repeat){if(m=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(m*100+r,s,a);if(f=zt(h%m),h===l?(_=this._repeat,f=c):(g=zt(h/m),_=~~g,_&&_===g?(f=c,_--):f>c&&(f=c)),p=this._yoyo&&_&1,p&&(f=c-f),g=Jo(this._tTime,m),f===o&&!a&&this._initted&&_===g)return this._tTime=h,this;_!==g&&this.vars.repeatRefresh&&!p&&!this._lock&&f!==m&&this._initted&&(this._lock=a=1,this.render(zt(m*_),!0).invalidate()._lock=0)}if(!this._initted){if(GS(this,u?r:f,a,s,h))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&_!==g))return this;if(c!==this._dur)return this.render(r,s,a)}if(this._rEase){var y=f<o;if(y!==this._inv){var w=y?o:c-o;this._inv=y,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=w?(y?-1:1)/w:0,this._invScale=y?-this.ratio:1-this.ratio,this._invEase=y?this._rEase:this._ease}this.ratio=v=this._invRatio+this._invScale*this._invEase((f-this._invTime)*this._invRecip)}else this.ratio=v=this._ease(f/c);if(this._from&&(this.ratio=v=1-v),this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&h&&!s&&!g&&(xi(this,"onStart"),this._tTime!==h))return this;for(d=this._pt;d;)d.r(v,d.d),d=d._next;x&&x.render(r<0?r:x._dur*x._ease(f/this._dur),s,a)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(u&&lm(this,r,s,a),xi(this,"onUpdate")),this._repeat&&_!==g&&this.vars.onRepeat&&!s&&this.parent&&xi(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&lm(this,r,!0,!0),(r||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Os(this,1),!s&&!(u&&!o)&&(h||o||p)&&(xi(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,a,o,l){Bc||gi.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||M_(this,c),u=this._ease(c/this._dur),sC(this,r,s,a,o,u,c,l)?this.resetTo(r,s,a,o,1):(Fh(this,0),this.parent||BS(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Vl(this):this.scrollTrigger&&this.scrollTrigger.kill(!!yn),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,_s&&_s.vars.overwrite!==!0)._first||Vl(this),this.parent&&a!==this.timeline.totalDuration()&&el(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=r?Bi(r):o,c=this._ptLookup,u=this._pt,h,f,d,_,m,g,p;if((!s||s==="all")&&UA(o,l))return s==="all"&&(this._pt=0),Vl(this);for(h=this._op=this._op||[],s!=="all"&&(gn(s)&&(m={},ni(s,function(v){return m[v]=1}),s=m),s=aC(o,s)),p=o.length;p--;)if(~l.indexOf(o[p])){f=c[p],s==="all"?(h[p]=s,_=f,d={}):(d=h[p]=h[p]||{},_=s);for(m in _)g=f&&f[m],g&&((!("kill"in g.d)||g.d.kill(m)===!0)&&Ih(this,g,"_pt"),delete f[m]),d!=="all"&&(d[m]=1)}return this._initted&&!this._pt&&u&&Vl(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return ac(1,arguments)},e.delayedCall=function(r,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(r,s,a){return ac(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,a){return Vt.killTweensOf(r,s,a)},e}(Vc);Ai(en.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});ni("staggerTo,staggerFrom,staggerFromTo",function(n){en[n]=function(){var e=new Kn,t=um.call(arguments,0);return t.splice(n==="staggerFromTo"?5:4,0,0),e[n].apply(e,t)}});var E_=function(e,t,i){return e[t]=i},oM=function(e,t,i){return e[t](i)},lC=function(e,t,i,r){return e[t](r.fp,i)},cC=function(e,t,i){return e.setAttribute(t,i)},T_=function(e,t){return jt(e[t])?oM:d_(e[t])&&e.setAttribute?cC:E_},lM=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},uC=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},cM=function(e,t){var i=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=t.c}t.set(t.t,t.p,r,t)},w_=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},fC=function(e,t,i,r){for(var s=this._pt,a;s;)a=s._next,s.p===r&&s.modifier(e,t,i),s=a},hC=function(e){for(var t=this._pt,i,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?Ih(this,t,"_pt"):t.dep||(i=1),t=r;return!i},dC=function(e,t,i,r){r.mSet(e,t,r.m.call(r.tween,i,r.mt),r)},uM=function(e){for(var t=e._pt,i,r,s,a;t;){for(i=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:a)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:a=t,t=i}e._pt=s},ii=function(){function n(t,i,r,s,a,o,l,c,u){this.t=i,this.s=s,this.c=a,this.p=r,this.r=o||lM,this.d=l||this,this.set=c||E_,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=n.prototype;return e.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=dC,this.m=i,this.mt=s,this.tween=r},n}();ni(v_+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(n){return __[n]=1});wi.TweenMax=wi.TweenLite=en;wi.TimelineLite=wi.TimelineMax=Kn;Vt=new Kn({sortChildren:!1,defaults:Fc,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Mi.stringFilter=tM;var Ea=[],xf={},pC=[],vv=0,mC=0,Sd=function(e){return(xf[e]||pC).map(function(t){return t()})},pm=function(){var e=Date.now(),t=[];e-vv>2&&(Sd("matchMediaInit"),Ea.forEach(function(i){var r=i.queries,s=i.conditions,a,o,l,c;for(o in r)a=ur.matchMedia(r[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(i.revert(),l&&t.push(i))}),Sd("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),vv=e,Sd("matchMedia"))},fM=function(){function n(t,i){this.selector=i&&fm(i),this.data=[],this._r=[],this.isReverted=!1,this.id=mC++,t&&this.add(t)}var e=n.prototype;return e.add=function(i,r,s){jt(i)&&(s=r,r=i,i=jt);var a=this,o=function(){var c=Ot,u=a.selector,h;return c&&c!==a&&c.data.push(a),s&&(a.selector=fm(s)),Ot=a,h=r.apply(a,arguments),jt(h)&&a._r.push(h),Ot=c,a.selector=u,a.isReverted=!1,h};return a.last=o,i===jt?o(a,function(l){return a.add(null,l)}):i?a[i]=o:o},e.ignore=function(i){var r=Ot;Ot=null,i(this),Ot=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof en&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var s=this;if(i?function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(i)}),l=s.data.length;l--;)c=s.data[l],c instanceof Kn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof en)&&c.revert&&c.revert(i);s._r.forEach(function(u){return u(i,s)}),s.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),r)for(var a=Ea.length;a--;)Ea[a].id===this.id&&Ea.splice(a,1)},e.revert=function(i){this.kill(i||{})},n}(),gC=function(){function n(t){this.contexts=[],this.scope=t,Ot&&Ot.data.push(this)}var e=n.prototype;return e.add=function(i,r,s){Mr(i)||(i={matches:i});var a=new fM(0,s||this.scope),o=a.conditions={},l,c,u;Ot&&!a.selector&&(a.selector=Ot.selector),this.contexts.push(a),r=a.add("onMatch",r),a.queries=i;for(c in i)c==="all"?u=1:(l=ur.matchMedia(i[c]),l&&(Ea.indexOf(a)<0&&Ea.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(pm):l.addEventListener("change",pm)));return u&&r(a,function(h){return a.add(null,h)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n}(),oh={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(r){return QS(r)})},timeline:function(e){return new Kn(e)},getTweensOf:function(e,t){return Vt.getTweensOf(e,t)},getProperty:function(e,t,i,r){gn(e)&&(e=Bi(e)[0]);var s=ya(e||{}).get,a=i?zS:kS;return i==="native"&&(i=""),e&&(t?a((pi[t]&&pi[t].get||s)(e,t,i,r)):function(o,l,c){return a((pi[o]&&pi[o].get||s)(e,o,l,c))})},quickSetter:function(e,t,i){if(e=Bi(e),e.length>1){var r=e.map(function(u){return ai.quickSetter(u,t,i)}),s=r.length;return function(u){for(var h=s;h--;)r[h](u)}}e=e[0]||{};var a=pi[t],o=ya(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(u){var h=new a;Ao._pt=0,h.init(e,i?u+i:u,Ao,0,[e]),h.render(1,h),Ao._pt&&w_(1,Ao)}:o.set(e,l);return a?c:function(u){return c(e,l,i?u+i:u,o,1)}},quickTo:function(e,t,i){var r,s=ai.to(e,Ai((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),i||{})),a=function(l,c,u){return s.resetTo(t,l,c,u)};return a.tween=s,a},isTweening:function(e){return Vt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Ma(e.ease,Fc.ease)),dv(Fc,e||{})},config:function(e){return dv(Mi,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,r=e.plugins,s=e.defaults,a=e.extendTimeline;(r||"").split(",").forEach(function(o){return o&&!pi[o]&&!wi[o]&&Oc(t+" effect requires "+o+" plugin.")}),_d[t]=function(o,l,c){return i(Bi(o),Ai(l||{},s),c)},a&&(Kn.prototype[t]=function(o,l,c){return this.add(_d[t](o,Mr(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){ft[e]=Ma(t)},parseEase:function(e,t){return arguments.length?Ma(e,t):ft},getById:function(e){return Vt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new Kn(e),r,s;for(i.smoothChildTiming=ti(e.smoothChildTiming),Vt.remove(i),i._dp=0,i._time=i._tTime=Vt._time,r=Vt._first;r;)s=r._next,(t||!(!r._dur&&r instanceof en&&r.vars.onComplete===r._targets[0]))&&pr(i,r,r._start-r._delay),r=s;return pr(Vt,i,0),i},context:function(e,t){return e?new fM(e,t):Ot},matchMedia:function(e){return new gC(e)},matchMediaRefresh:function(){return Ea.forEach(function(e){var t=e.conditions,i,r;for(r in t)t[r]&&(t[r]=!1,i=1);i&&e.revert()})||pm()},addEventListener:function(e,t){var i=xf[e]||(xf[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=xf[e],r=i&&i.indexOf(t);r>=0&&i.splice(r,1)},utils:{wrap:YA,wrapYoyo:$A,distribute:jS,random:$S,snap:YS,normalize:jA,getUnit:bn,clamp:HA,splitColor:JS,toArray:Bi,selector:fm,mapRange:KS,pipe:WA,unitize:XA,interpolate:qA,shuffle:XS},install:DS,effects:_d,ticker:gi,updateRoot:Kn.updateRoot,plugins:pi,globalTimeline:Vt,core:{PropTween:ii,globals:IS,Tween:en,Timeline:Kn,Animation:Vc,getCache:ya,_removeLinkedListItem:Ih,reverting:function(){return yn},context:function(e){return e&&Ot&&(Ot.data.push(e),e._ctx=Ot),Ot},suppressOverwrites:function(e){return h_=e}}};ni("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return oh[n]=en[n]});gi.add(Kn.updateRoot);Ao=oh.to({},{duration:0});var _C=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},vC=function(e,t){var i=e._targets,r,s,a;for(r in t)for(s=i.length;s--;)a=e._ptLookup[s][r],a&&(a=a.d)&&(a._pt&&(a=_C(a,r)),a&&a.modifier&&a.modifier(t[r],e,i[s],r))},Md=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,s,a){a._onInit=function(o){var l,c;if(gn(s)&&(l={},ni(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}vC(o,s)}}}},ai=oh.registerPlugin({name:"attr",init:function(e,t,i,r,s){var a,o,l;this.tween=i;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],r,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var i=t._pt;i;)yn?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},Md("roundProps",hm),Md("modifiers"),Md("snap",YS))||oh;en.version=Kn.version=ai.version="3.15.0";NS=1;p_()&&tl();ft.Power0;ft.Power1;ft.Power2;ft.Power3;ft.Power4;ft.Linear;ft.Quad;ft.Cubic;ft.Quart;ft.Quint;ft.Strong;ft.Elastic;ft.Back;ft.SteppedEase;ft.Bounce;ft.Sine;ft.Expo;ft.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var xv,vs,Fo,A_,da,yv,C_,xC=function(){return typeof window<"u"},Zr={},ia=180/Math.PI,Oo=Math.PI/180,Wa=Math.atan2,Sv=1e8,R_=/([A-Z])/g,yC=/(left|right|width|margin|padding|x)/i,SC=/[\s,\(]\S/,mr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},mm=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},MC=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},EC=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},TC=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},wC=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},hM=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},dM=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},AC=function(e,t,i){return e.style[t]=i},CC=function(e,t,i){return e.style.setProperty(t,i)},RC=function(e,t,i){return e._gsap[t]=i},bC=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},PC=function(e,t,i,r,s){var a=e._gsap;a.scaleX=a.scaleY=i,a.renderTransform(s,a)},LC=function(e,t,i,r,s){var a=e._gsap;a[t]=i,a.renderTransform(s,a)},Ht="transform",ri=Ht+"Origin",NC=function n(e,t){var i=this,r=this.target,s=r.style,a=r._gsap;if(e in Zr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=mr[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return i.tfm[o]=Ur(r,o)}):this.tfm[e]=a.x?a[e]:Ur(r,e),e===ri&&(this.tfm.zOrigin=a.zOrigin);else return mr.transform.split(",").forEach(function(o){return n.call(i,o,t)});if(this.props.indexOf(Ht)>=0)return;a.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(ri,t,"")),e=Ht}(s||t)&&this.props.push(e,t,s[e])},pM=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},DC=function(){var e=this.props,t=this.target,i=t.style,r=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(R_,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)r[a]=this.tfm[a];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=C_(),(!s||!s.isStart)&&!i[Ht]&&(pM(i),r.zOrigin&&i[ri]&&(i[ri]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},mM=function(e,t){var i={target:e,props:[],revert:DC,save:NC};return e._gsap||ai.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return i.save(r)}),i},gM,gm=function(e,t){var i=vs.createElementNS?vs.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):vs.createElement(e);return i&&i.style?i:vs.createElement(e)},yi=function n(e,t,i){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(R_,"-$1").toLowerCase())||r.getPropertyValue(t)||!i&&n(e,nl(t)||t,1)||""},Mv="O,Moz,ms,Ms,Webkit".split(","),nl=function(e,t,i){var r=t||da,s=r.style,a=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(Mv[a]+e in s););return a<0?null:(a===3?"ms":a>=0?Mv[a]:"")+e},_m=function(){xC()&&window.document&&(xv=window,vs=xv.document,Fo=vs.documentElement,da=gm("div")||{style:{}},gm("div"),Ht=nl(Ht),ri=Ht+"Origin",da.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",gM=!!nl("perspective"),C_=ai.core.reverting,A_=1)},Ev=function(e){var t=e.ownerSVGElement,i=gm("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",i.appendChild(r),Fo.appendChild(i);try{s=r.getBBox()}catch{}return i.removeChild(r),Fo.removeChild(i),s},Tv=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},_M=function(e){var t,i;try{t=e.getBBox()}catch{t=Ev(e),i=1}return t&&(t.width||t.height)||i||(t=Ev(e)),t&&!t.width&&!t.x&&!t.y?{x:+Tv(e,["x","cx","x1"])||0,y:+Tv(e,["y","cy","y1"])||0,width:0,height:0}:t},vM=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&_M(e))},ks=function(e,t){if(t){var i=e.style,r;t in Zr&&t!==ri&&(t=Ht),i.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(r==="--"?t:t.replace(R_,"-$1").toLowerCase())):i.removeAttribute(t)}},xs=function(e,t,i,r,s,a){var o=new ii(e._pt,t,i,0,1,a?dM:hM);return e._pt=o,o.b=r,o.e=s,e._props.push(i),o},wv={deg:1,rad:1,turn:1},IC={grid:1,flex:1},zs=function n(e,t,i,r){var s=parseFloat(i)||0,a=(i+"").trim().substr((s+"").length)||"px",o=da.style,l=yC.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=r==="px",d=r==="%",_,m,g,p;if(r===a||!s||wv[r]||wv[a])return s;if(a!=="px"&&!f&&(s=n(e,t,i,"px")),p=e.getCTM&&vM(e),(d||a==="%")&&(Zr[t]||~t.indexOf("adius")))return _=p?e.getBBox()[l?"width":"height"]:e[u],$t(d?s/_*h:s/100*_);if(o[l?"width":"height"]=h+(f?a:r),m=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(m=(e.ownerSVGElement||{}).parentNode),(!m||m===vs||!m.appendChild)&&(m=vs.body),g=m._gsap,g&&d&&g.width&&l&&g.time===gi.time&&!g.uncache)return $t(s/g.width*h);if(d&&(t==="height"||t==="width")){var v=e.style[t];e.style[t]=h+r,_=e[u],v?e.style[t]=v:ks(e,t)}else(d||a==="%")&&!IC[yi(m,"display")]&&(o.position=yi(e,"position")),m===e&&(o.position="static"),m.appendChild(da),_=da[u],m.removeChild(da),o.position="absolute";return l&&d&&(g=ya(m),g.time=gi.time,g.width=m[u]),$t(f?_*s/h:_&&s?h/_*s:0)},Ur=function(e,t,i,r){var s;return A_||_m(),t in mr&&t!=="transform"&&(t=mr[t],~t.indexOf(",")&&(t=t.split(",")[0])),Zr[t]&&t!=="transform"?(s=Gc(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:ch(yi(e,ri))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=lh[t]&&lh[t](e,t,i)||yi(e,t)||FS(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?zs(e,t,s,i)+i:s},UC=function(e,t,i,r){if(!i||i==="none"){var s=nl(t,e,1),a=s&&yi(e,s,1);a&&a!==i?(t=s,i=a):t==="borderColor"&&(i=yi(e,"borderTopColor"))}var o=new ii(this._pt,e.style,t,0,1,cM),l=0,c=0,u,h,f,d,_,m,g,p,v,x,y,w;if(o.b=i,o.e=r,i+="",r+="",r.substring(0,6)==="var(--"&&(r=yi(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(m=e.style[t],e.style[t]=r,r=yi(e,t)||r,m?e.style[t]=m:ks(e,t)),u=[i,r],tM(u),i=u[0],r=u[1],f=i.match(wo)||[],w=r.match(wo)||[],w.length){for(;h=wo.exec(r);)g=h[0],v=r.substring(l,h.index),_?_=(_+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(_=1),g!==(m=f[c++]||"")&&(d=parseFloat(m)||0,y=m.substr((d+"").length),g.charAt(1)==="="&&(g=Uo(d,g)+y),p=parseFloat(g),x=g.substr((p+"").length),l=wo.lastIndex-x.length,x||(x=x||Mi.units[t]||y,l===r.length&&(r+=x,o.e+=x)),y!==x&&(d=zs(e,t,m,x)||0),o._pt={_next:o._pt,p:v||c===1?v:",",s:d,c:p-d,m:_&&_<4||t==="zIndex"?Math.round:0});o.c=l<r.length?r.substring(l,r.length):""}else o.r=t==="display"&&r==="none"?dM:hM;return LS.test(r)&&(o.e=0),this._pt=o,o},Av={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},FC=function(e){var t=e.split(" "),i=t[0],r=t[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),t[0]=Av[i]||i,t[1]=Av[r]||r,t.join(" ")},OC=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,r=i.style,s=t.u,a=i._gsap,o,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],Zr[o]&&(l=1,o=o==="transformOrigin"?ri:Ht),ks(i,o);l&&(ks(i,Ht),a&&(a.svg&&i.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",Gc(i,1),a.uncache=1,pM(r)))}},lh={clearProps:function(e,t,i,r,s){if(s.data!=="isFromStart"){var a=e._pt=new ii(e._pt,t,i,0,0,OC);return a.u=r,a.pr=-10,a.tween=s,e._props.push(i),1}}},Hc=[1,0,0,1,0,0],xM={},yM=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Cv=function(e){var t=yi(e,Ht);return yM(t)?Hc:t.substr(7).match(PS).map($t)},b_=function(e,t){var i=e._gsap||ya(e),r=e.style,s=Cv(e),a,o,l,c;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Hc:s):(s===Hc&&!e.offsetParent&&e!==Fo&&!i.svg&&(l=r.display,r.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,Fo.appendChild(e)),s=Cv(e),l?r.display=l:ks(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):Fo.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},vm=function(e,t,i,r,s,a){var o=e._gsap,l=s||b_(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,h=o.xOffset||0,f=o.yOffset||0,d=l[0],_=l[1],m=l[2],g=l[3],p=l[4],v=l[5],x=t.split(" "),y=parseFloat(x[0])||0,w=parseFloat(x[1])||0,T,M,A,E;i?l!==Hc&&(M=d*g-_*m)&&(A=y*(g/M)+w*(-m/M)+(m*v-g*p)/M,E=y*(-_/M)+w*(d/M)-(d*v-_*p)/M,y=A,w=E):(T=_M(e),y=T.x+(~x[0].indexOf("%")?y/100*T.width:y),w=T.y+(~(x[1]||x[0]).indexOf("%")?w/100*T.height:w)),r||r!==!1&&o.smooth?(p=y-c,v=w-u,o.xOffset=h+(p*d+v*m)-p,o.yOffset=f+(p*_+v*g)-v):o.xOffset=o.yOffset=0,o.xOrigin=y,o.yOrigin=w,o.smooth=!!r,o.origin=t,o.originIsAbsolute=!!i,e.style[ri]="0px 0px",a&&(xs(a,o,"xOrigin",c,y),xs(a,o,"yOrigin",u,w),xs(a,o,"xOffset",h,o.xOffset),xs(a,o,"yOffset",f,o.yOffset)),e.setAttribute("data-svg-origin",y+" "+w)},Gc=function(e,t){var i=e._gsap||new iM(e);if("x"in i&&!t&&!i.uncache)return i;var r=e.style,s=i.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=yi(e,ri)||"0",u,h,f,d,_,m,g,p,v,x,y,w,T,M,A,E,S,P,I,U,k,B,V,z,D,Y,L,Q,se,Te,X,J;return u=h=f=m=g=p=v=x=y=0,d=_=1,i.svg=!!(e.getCTM&&vM(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[Ht]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Ht]!=="none"?l[Ht]:"")),r.scale=r.rotate=r.translate="none"),M=b_(e,i.svg),i.svg&&(i.uncache?(D=e.getBBox(),c=i.xOrigin-D.x+"px "+(i.yOrigin-D.y)+"px",z=""):z=!t&&e.getAttribute("data-svg-origin"),vm(e,z||c,!!z||i.originIsAbsolute,i.smooth!==!1,M)),w=i.xOrigin||0,T=i.yOrigin||0,M!==Hc&&(P=M[0],I=M[1],U=M[2],k=M[3],u=B=M[4],h=V=M[5],M.length===6?(d=Math.sqrt(P*P+I*I),_=Math.sqrt(k*k+U*U),m=P||I?Wa(I,P)*ia:0,v=U||k?Wa(U,k)*ia+m:0,v&&(_*=Math.abs(Math.cos(v*Oo))),i.svg&&(u-=w-(w*P+T*U),h-=T-(w*I+T*k))):(J=M[6],Te=M[7],L=M[8],Q=M[9],se=M[10],X=M[11],u=M[12],h=M[13],f=M[14],A=Wa(J,se),g=A*ia,A&&(E=Math.cos(-A),S=Math.sin(-A),z=B*E+L*S,D=V*E+Q*S,Y=J*E+se*S,L=B*-S+L*E,Q=V*-S+Q*E,se=J*-S+se*E,X=Te*-S+X*E,B=z,V=D,J=Y),A=Wa(-U,se),p=A*ia,A&&(E=Math.cos(-A),S=Math.sin(-A),z=P*E-L*S,D=I*E-Q*S,Y=U*E-se*S,X=k*S+X*E,P=z,I=D,U=Y),A=Wa(I,P),m=A*ia,A&&(E=Math.cos(A),S=Math.sin(A),z=P*E+I*S,D=B*E+V*S,I=I*E-P*S,V=V*E-B*S,P=z,B=D),g&&Math.abs(g)+Math.abs(m)>359.9&&(g=m=0,p=180-p),d=$t(Math.sqrt(P*P+I*I+U*U)),_=$t(Math.sqrt(V*V+J*J)),A=Wa(B,V),v=Math.abs(A)>2e-4?A*ia:0,y=X?1/(X<0?-X:X):0),i.svg&&(z=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!yM(yi(e,Ht)),z&&e.setAttribute("transform",z))),Math.abs(v)>90&&Math.abs(v)<270&&(s?(d*=-1,v+=m<=0?180:-180,m+=m<=0?180:-180):(_*=-1,v+=v<=0?180:-180)),t=t||i.uncache,i.x=u-((i.xPercent=u&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+a,i.y=h-((i.yPercent=h&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+a,i.z=f+a,i.scaleX=$t(d),i.scaleY=$t(_),i.rotation=$t(m)+o,i.rotationX=$t(g)+o,i.rotationY=$t(p)+o,i.skewX=v+o,i.skewY=x+o,i.transformPerspective=y+a,(i.zOrigin=parseFloat(c.split(" ")[2])||!t&&i.zOrigin||0)&&(r[ri]=ch(c)),i.xOffset=i.yOffset=0,i.force3D=Mi.force3D,i.renderTransform=i.svg?zC:gM?SM:kC,i.uncache=0,i},ch=function(e){return(e=e.split(" "))[0]+" "+e[1]},Ed=function(e,t,i){var r=bn(t);return $t(parseFloat(t)+parseFloat(zs(e,"x",i+"px",r)))+r},kC=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,SM(e,t)},Ys="0deg",Rl="0px",$s=") ",SM=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,a=i.x,o=i.y,l=i.z,c=i.rotation,u=i.rotationY,h=i.rotationX,f=i.skewX,d=i.skewY,_=i.scaleX,m=i.scaleY,g=i.transformPerspective,p=i.force3D,v=i.target,x=i.zOrigin,y="",w=p==="auto"&&e&&e!==1||p===!0;if(x&&(h!==Ys||u!==Ys)){var T=parseFloat(u)*Oo,M=Math.sin(T),A=Math.cos(T),E;T=parseFloat(h)*Oo,E=Math.cos(T),a=Ed(v,a,M*E*-x),o=Ed(v,o,-Math.sin(T)*-x),l=Ed(v,l,A*E*-x+x)}g!==Rl&&(y+="perspective("+g+$s),(r||s)&&(y+="translate("+r+"%, "+s+"%) "),(w||a!==Rl||o!==Rl||l!==Rl)&&(y+=l!==Rl||w?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+$s),c!==Ys&&(y+="rotate("+c+$s),u!==Ys&&(y+="rotateY("+u+$s),h!==Ys&&(y+="rotateX("+h+$s),(f!==Ys||d!==Ys)&&(y+="skew("+f+", "+d+$s),(_!==1||m!==1)&&(y+="scale("+_+", "+m+$s),v.style[Ht]=y||"translate(0, 0)"},zC=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,a=i.x,o=i.y,l=i.rotation,c=i.skewX,u=i.skewY,h=i.scaleX,f=i.scaleY,d=i.target,_=i.xOrigin,m=i.yOrigin,g=i.xOffset,p=i.yOffset,v=i.forceCSS,x=parseFloat(a),y=parseFloat(o),w,T,M,A,E;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Oo,c*=Oo,w=Math.cos(l)*h,T=Math.sin(l)*h,M=Math.sin(l-c)*-f,A=Math.cos(l-c)*f,c&&(u*=Oo,E=Math.tan(c-u),E=Math.sqrt(1+E*E),M*=E,A*=E,u&&(E=Math.tan(u),E=Math.sqrt(1+E*E),w*=E,T*=E)),w=$t(w),T=$t(T),M=$t(M),A=$t(A)):(w=h,A=f,T=M=0),(x&&!~(a+"").indexOf("px")||y&&!~(o+"").indexOf("px"))&&(x=zs(d,"x",a,"px"),y=zs(d,"y",o,"px")),(_||m||g||p)&&(x=$t(x+_-(_*w+m*M)+g),y=$t(y+m-(_*T+m*A)+p)),(r||s)&&(E=d.getBBox(),x=$t(x+r/100*E.width),y=$t(y+s/100*E.height)),E="matrix("+w+","+T+","+M+","+A+","+x+","+y+")",d.setAttribute("transform",E),v&&(d.style[Ht]=E)},BC=function(e,t,i,r,s){var a=360,o=gn(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?ia:1),c=l-r,u=r+c+"deg",h,f;return o&&(h=s.split("_")[1],h==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),h==="cw"&&c<0?c=(c+a*Sv)%a-~~(c/a)*a:h==="ccw"&&c>0&&(c=(c-a*Sv)%a-~~(c/a)*a)),e._pt=f=new ii(e._pt,t,i,r,c,MC),f.e=u,f.u="deg",e._props.push(i),f},Rv=function(e,t){for(var i in t)e[i]=t[i];return e},VC=function(e,t,i){var r=Rv({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=i.style,o,l,c,u,h,f,d,_;r.svg?(c=i.getAttribute("transform"),i.setAttribute("transform",""),a[Ht]=t,o=Gc(i,1),ks(i,Ht),i.setAttribute("transform",c)):(c=getComputedStyle(i)[Ht],a[Ht]=t,o=Gc(i,1),a[Ht]=c);for(l in Zr)c=r[l],u=o[l],c!==u&&s.indexOf(l)<0&&(d=bn(c),_=bn(u),h=d!==_?zs(i,l,c,_):parseFloat(c),f=parseFloat(u),e._pt=new ii(e._pt,o,l,h,f-h,mm),e._pt.u=_||0,e._props.push(l));Rv(o,r)};ni("padding,margin,Width,Radius",function(n,e){var t="Top",i="Right",r="Bottom",s="Left",a=(e<3?[t,i,r,s]:[t+s,t+i,r+i,r+s]).map(function(o){return e<2?n+o:"border"+o+n});lh[e>1?"border"+n:n]=function(o,l,c,u,h){var f,d;if(arguments.length<4)return f=a.map(function(_){return Ur(o,_,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(u+"").split(" "),d={},a.forEach(function(_,m){return d[_]=f[m]=f[m]||f[(m-1)/2|0]}),o.init(l,d,h)}});var MM={name:"css",register:_m,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,r,s){var a=this._props,o=e.style,l=i.vars.startAt,c,u,h,f,d,_,m,g,p,v,x,y,w,T,M,A,E;A_||_m(),this.styles=this.styles||mM(e),A=this.styles.props,this.tween=i;for(m in t)if(m!=="autoRound"&&(u=t[m],!(pi[m]&&rM(m,t,i,r,e,s)))){if(d=typeof u,_=lh[m],d==="function"&&(u=u.call(i,r,e,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=zc(u)),_)_(this,e,m,u,i)&&(M=1);else if(m.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(m)+"").trim(),u+="",Ls.lastIndex=0,Ls.test(c)||(g=bn(c),p=bn(u),p?g!==p&&(c=zs(e,m,c,p)+p):g&&(u+=g)),this.add(o,"setProperty",c,u,r,s,0,0,m),a.push(m),A.push(m,0,o[m]);else if(d!=="undefined"){if(l&&m in l?(c=typeof l[m]=="function"?l[m].call(i,r,e,s):l[m],gn(c)&&~c.indexOf("random(")&&(c=zc(c)),bn(c+"")||c==="auto"||(c+=Mi.units[m]||bn(Ur(e,m))||""),(c+"").charAt(1)==="="&&(c=Ur(e,m))):c=Ur(e,m),f=parseFloat(c),v=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),v&&(u=u.substr(2)),h=parseFloat(u),m in mr&&(m==="autoAlpha"&&(f===1&&Ur(e,"visibility")==="hidden"&&h&&(f=0),A.push("visibility",0,o.visibility),xs(this,o,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),m!=="scale"&&m!=="transform"&&(m=mr[m],~m.indexOf(",")&&(m=m.split(",")[0]))),x=m in Zr,x){if(this.styles.save(m),E=u,d==="string"&&u.substring(0,6)==="var(--"){if(u=yi(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var S=e.style.perspective;e.style.perspective=u,u=yi(e,"perspective"),S?e.style.perspective=S:ks(e,"perspective")}h=parseFloat(u)}if(y||(w=e._gsap,w.renderTransform&&!t.parseTransform||Gc(e,t.parseTransform),T=t.smoothOrigin!==!1&&w.smooth,y=this._pt=new ii(this._pt,o,Ht,0,1,w.renderTransform,w,0,-1),y.dep=1),m==="scale")this._pt=new ii(this._pt,w,"scaleY",w.scaleY,(v?Uo(w.scaleY,v+h):h)-w.scaleY||0,mm),this._pt.u=0,a.push("scaleY",m),m+="X";else if(m==="transformOrigin"){A.push(ri,0,o[ri]),u=FC(u),w.svg?vm(e,u,0,T,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==w.zOrigin&&xs(this,w,"zOrigin",w.zOrigin,p),xs(this,o,m,ch(c),ch(u)));continue}else if(m==="svgOrigin"){vm(e,u,1,T,0,this);continue}else if(m in xM){BC(this,w,m,f,v?Uo(f,v+u):u);continue}else if(m==="smoothOrigin"){xs(this,w,"smooth",w.smooth,u);continue}else if(m==="force3D"){w[m]=u;continue}else if(m==="transform"){VC(this,u,e);continue}}else m in o||(m=nl(m)||m);if(x||(h||h===0)&&(f||f===0)&&!SC.test(u)&&m in o)g=(c+"").substr((f+"").length),h||(h=0),p=bn(u)||(m in Mi.units?Mi.units[m]:g),g!==p&&(f=zs(e,m,c,p)),this._pt=new ii(this._pt,x?w:o,m,f,(v?Uo(f,v+h):h)-f,!x&&(p==="px"||m==="zIndex")&&t.autoRound!==!1?wC:mm),this._pt.u=p||0,x&&E!==u?(this._pt.b=c,this._pt.e=E,this._pt.r=TC):g!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=EC);else if(m in o)UC.call(this,e,m,c,v?v+u:u);else if(m in e)this.add(e,m,c||e[m],v?v+u:u,r,s);else if(m!=="parseTransform"){g_(m,u);continue}x||(m in o?A.push(m,0,o[m]):typeof e[m]=="function"?A.push(m,2,e[m]()):A.push(m,1,c||e[m])),a.push(m)}}M&&uM(this)},render:function(e,t){if(t.tween._time||!C_())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:Ur,aliases:mr,getSetter:function(e,t,i){var r=mr[t];return r&&r.indexOf(",")<0&&(t=r),t in Zr&&t!==ri&&(e._gsap.x||Ur(e,"x"))?i&&yv===i?t==="scale"?bC:RC:(yv=i||{})&&(t==="scale"?PC:LC):e.style&&!d_(e.style[t])?AC:~t.indexOf("-")?CC:T_(e,t)},core:{_removeProperty:ks,_getMatrix:b_}};ai.utils.checkPrefix=nl;ai.core.getStyleSaver=mM;(function(n,e,t,i){var r=ni(n+","+e+","+t,function(s){Zr[s]=1});ni(e,function(s){Mi.units[s]="deg",xM[s]=1}),mr[r[13]]=n+","+e,ni(i,function(s){var a=s.split(":");mr[a[1]]=r[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");ni("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){Mi.units[n]="px"});ai.registerPlugin(MM);var lc=ai.registerPlugin(MM)||ai;lc.core.Tween;function HC(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function GC(n,e,t){return e&&HC(n.prototype,e),n}/*!
 * Observer 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var vn,yf,_i,ys,Ss,ko,EM,ra,zo,TM,Br,Ki,wM,AM=function(){return vn||typeof window<"u"&&(vn=window.gsap)&&vn.registerPlugin&&vn},CM=1,Co=[],ot=[],yr=[],cc=Date.now,xm=function(e,t){return t},WC=function(){var e=zo.core,t=e.bridge||{},i=e._scrollers,r=e._proxies;i.push.apply(i,ot),r.push.apply(r,yr),ot=i,yr=r,xm=function(a,o){return t[a](o)}},Ns=function(e,t){return~yr.indexOf(e)&&yr[yr.indexOf(e)+1][t]},uc=function(e){return!!~TM.indexOf(e)},Fn=function(e,t,i,r,s){return e.addEventListener(t,i,{passive:r!==!1,capture:!!s})},Un=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},Eu="scrollLeft",Tu="scrollTop",ym=function(){return Br&&Br.isPressed||ot.cache++},uh=function(e,t){var i=function r(s){if(s||s===0){CM&&(_i.history.scrollRestoration="manual");var a=Br&&Br.isPressed;s=r.v=Math.round(s)||(Br&&Br.iOS?1:0),e(s),r.cacheID=ot.cache,a&&xm("ss",s)}else(t||ot.cache!==r.cacheID||xm("ref"))&&(r.cacheID=ot.cache,r.v=e());return r.v+r.offset};return i.offset=0,e&&i},Hn={s:Eu,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:uh(function(n){return arguments.length?_i.scrollTo(n,on.sc()):_i.pageXOffset||ys[Eu]||Ss[Eu]||ko[Eu]||0})},on={s:Tu,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Hn,sc:uh(function(n){return arguments.length?_i.scrollTo(Hn.sc(),n):_i.pageYOffset||ys[Tu]||Ss[Tu]||ko[Tu]||0})},Yn=function(e,t){return(t&&t._ctx&&t._ctx.selector||vn.utils.toArray)(e)[0]||(typeof e=="string"&&vn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},XC=function(e,t){for(var i=t.length;i--;)if(t[i]===e||t[i].contains(e))return!0;return!1},Bs=function(e,t){var i=t.s,r=t.sc;uc(e)&&(e=ys.scrollingElement||Ss);var s=ot.indexOf(e),a=r===on.sc?1:2;!~s&&(s=ot.push(e)-1),ot[s+a]||Fn(e,"scroll",ym);var o=ot[s+a],l=o||(ot[s+a]=uh(Ns(e,i),!0)||(uc(e)?r:uh(function(c){return arguments.length?e[i]=c:e[i]})));return l.target=e,o||(l.smooth=vn.getProperty(e,"scrollBehavior")==="smooth"),l},Sm=function(e,t,i){var r=e,s=e,a=cc(),o=a,l=t||50,c=Math.max(500,l*3),u=function(_,m){var g=cc();m||g-a>l?(s=r,r=_,o=a,a=g):i?r+=_:r=s+(_-s)/(g-o)*(a-o)},h=function(){s=r=i?0:r,o=a=0},f=function(_){var m=o,g=s,p=cc();return(_||_===0)&&_!==r&&u(_),a===o||p-o>c?0:(r+(i?g:-g))/((i?p:a)-m)*1e3};return{update:u,reset:h,getVelocity:f}},bl=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},bv=function(e){var t=Math.max.apply(Math,e),i=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(i)?t:i},RM=function(){zo=vn.core.globals().ScrollTrigger,zo&&zo.core&&WC()},bM=function(e){return vn=e||AM(),!yf&&vn&&typeof document<"u"&&document.body&&(_i=window,ys=document,Ss=ys.documentElement,ko=ys.body,TM=[_i,ys,Ss,ko],vn.utils.clamp,wM=vn.core.context||function(){},ra="onpointerenter"in ko?"pointer":"mouse",EM=Zt.isTouch=_i.matchMedia&&_i.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in _i||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Ki=Zt.eventTypes=("ontouchstart"in Ss?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Ss?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return CM=0},500),yf=1),zo||RM(),yf};Hn.op=on;ot.cache=0;var Zt=function(){function n(t){this.init(t)}var e=n.prototype;return e.init=function(i){yf||bM(vn)||console.warn("Please gsap.registerPlugin(Observer)"),zo||RM();var r=i.tolerance,s=i.dragMinimum,a=i.type,o=i.target,l=i.lineHeight,c=i.debounce,u=i.preventDefault,h=i.onStop,f=i.onStopDelay,d=i.ignore,_=i.wheelSpeed,m=i.event,g=i.onDragStart,p=i.onDragEnd,v=i.onDrag,x=i.onPress,y=i.onRelease,w=i.onRight,T=i.onLeft,M=i.onUp,A=i.onDown,E=i.onChangeX,S=i.onChangeY,P=i.onChange,I=i.onToggleX,U=i.onToggleY,k=i.onHover,B=i.onHoverEnd,V=i.onMove,z=i.ignoreCheck,D=i.isNormalizer,Y=i.onGestureStart,L=i.onGestureEnd,Q=i.onWheel,se=i.onEnable,Te=i.onDisable,X=i.onClick,J=i.scrollSpeed,le=i.capture,re=i.allowClicks,ae=i.lockAxis,de=i.onLockAxis;this.target=o=Yn(o)||Ss,this.vars=i,d&&(d=vn.utils.toArray(d)),r=r||1e-9,s=s||0,_=_||1,J=J||1,a=a||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(_i.getComputedStyle(ko).lineHeight)||22);var Ne,ke,De,pe,O,Be,Ae,G=this,Se=0,We=0,ve=i.passive||!u&&i.passive!==!1,N=Bs(o,Hn),C=Bs(o,on),j=N(),ie=C(),ne=~a.indexOf("touch")&&!~a.indexOf("pointer")&&Ki[0]==="pointerdown",te=uc(o),ye=o.ownerDocument||ys,ge=[0,0,0],xe=[0,0,0],Ke=0,ce=function(){return Ke=cc()},me=function(Fe,et){return(G.event=Fe)&&d&&XC(Fe.target,d)||et&&ne&&Fe.pointerType!=="touch"||z&&z(Fe,et)},He=function(){G._vx.reset(),G._vy.reset(),ke.pause(),h&&h(G)},Ve=function(){var Fe=G.deltaX=bv(ge),et=G.deltaY=bv(xe),we=Math.abs(Fe)>=r,qe=Math.abs(et)>=r;P&&(we||qe)&&P(G,Fe,et,ge,xe),we&&(w&&G.deltaX>0&&w(G),T&&G.deltaX<0&&T(G),E&&E(G),I&&G.deltaX<0!=Se<0&&I(G),Se=G.deltaX,ge[0]=ge[1]=ge[2]=0),qe&&(A&&G.deltaY>0&&A(G),M&&G.deltaY<0&&M(G),S&&S(G),U&&G.deltaY<0!=We<0&&U(G),We=G.deltaY,xe[0]=xe[1]=xe[2]=0),(pe||De)&&(V&&V(G),De&&(g&&De===1&&g(G),v&&v(G),De=0),pe=!1),Be&&!(Be=!1)&&de&&de(G),O&&(Q(G),O=!1),Ne=0},be=function(Fe,et,we){ge[we]+=Fe,xe[we]+=et,G._vx.update(Fe),G._vy.update(et),c?Ne||(Ne=requestAnimationFrame(Ve)):Ve()},Qe=function(Fe,et){ae&&!Ae&&(G.axis=Ae=Math.abs(Fe)>Math.abs(et)?"x":"y",Be=!0),Ae!=="y"&&(ge[2]+=Fe,G._vx.update(Fe,!0)),Ae!=="x"&&(xe[2]+=et,G._vy.update(et,!0)),c?Ne||(Ne=requestAnimationFrame(Ve)):Ve()},Xe=function(Fe){if(!me(Fe,1)){Fe=bl(Fe,u);var et=Fe.clientX,we=Fe.clientY,qe=et-G.x,ze=we-G.y,$e=G.isDragging;G.x=et,G.y=we,($e||(qe||ze)&&(Math.abs(G.startX-et)>=s||Math.abs(G.startY-we)>=s))&&(De||(De=$e?2:1),$e||(G.isDragging=!0),Qe(qe,ze))}},rt=G.onPress=function(Ce){me(Ce,1)||Ce&&Ce.button||(G.axis=Ae=null,ke.pause(),G.isPressed=!0,Ce=bl(Ce),Se=We=0,G.startX=G.x=Ce.clientX,G.startY=G.y=Ce.clientY,G._vx.reset(),G._vy.reset(),Fn(D?o:ye,Ki[1],Xe,ve,!0),G.deltaX=G.deltaY=0,x&&x(G))},F=G.onRelease=function(Ce){if(!me(Ce,1)){Un(D?o:ye,Ki[1],Xe,!0);var Fe=!isNaN(G.y-G.startY),et=G.isDragging,we=et&&(Math.abs(G.x-G.startX)>3||Math.abs(G.y-G.startY)>3),qe=bl(Ce);!we&&Fe&&(G._vx.reset(),G._vy.reset(),u&&re&&vn.delayedCall(.08,function(){if(cc()-Ke>300&&!Ce.defaultPrevented){if(Ce.target.click)Ce.target.click();else if(ye.createEvent){var ze=ye.createEvent("MouseEvents");ze.initMouseEvent("click",!0,!0,_i,1,qe.screenX,qe.screenY,qe.clientX,qe.clientY,!1,!1,!1,!1,0,null),Ce.target.dispatchEvent(ze)}}})),G.isDragging=G.isGesturing=G.isPressed=!1,h&&et&&!D&&ke.restart(!0),De&&Ve(),p&&et&&p(G),y&&y(G,we)}},oe=function(Fe){return Fe.touches&&Fe.touches.length>1&&(G.isGesturing=!0)&&Y(Fe,G.isDragging)},Z=function(){return(G.isGesturing=!1)||L(G)},ee=function(Fe){if(!me(Fe)){var et=N(),we=C();be((et-j)*J,(we-ie)*J,1),j=et,ie=we,h&&ke.restart(!0)}},_e=function(Fe){if(!me(Fe)){Fe=bl(Fe,u),Q&&(O=!0);var et=(Fe.deltaMode===1?l:Fe.deltaMode===2?_i.innerHeight:1)*_;be(Fe.deltaX*et,Fe.deltaY*et,0),h&&!D&&ke.restart(!0)}},Me=function(Fe){if(!me(Fe)){var et=Fe.clientX,we=Fe.clientY,qe=et-G.x,ze=we-G.y;G.x=et,G.y=we,pe=!0,h&&ke.restart(!0),(qe||ze)&&Qe(qe,ze)}},je=function(Fe){G.event=Fe,k(G)},ut=function(Fe){G.event=Fe,B(G)},Lt=function(Fe){return me(Fe)||bl(Fe,u)&&X(G)};ke=G._dc=vn.delayedCall(f||.25,He).pause(),G.deltaX=G.deltaY=0,G._vx=Sm(0,50,!0),G._vy=Sm(0,50,!0),G.scrollX=N,G.scrollY=C,G.isDragging=G.isGesturing=G.isPressed=!1,wM(this),G.enable=function(Ce){return G.isEnabled||(Fn(te?ye:o,"scroll",ym),a.indexOf("scroll")>=0&&Fn(te?ye:o,"scroll",ee,ve,le),a.indexOf("wheel")>=0&&Fn(o,"wheel",_e,ve,le),(a.indexOf("touch")>=0&&EM||a.indexOf("pointer")>=0)&&(Fn(o,Ki[0],rt,ve,le),Fn(ye,Ki[2],F),Fn(ye,Ki[3],F),re&&Fn(o,"click",ce,!0,!0),X&&Fn(o,"click",Lt),Y&&Fn(ye,"gesturestart",oe),L&&Fn(ye,"gestureend",Z),k&&Fn(o,ra+"enter",je),B&&Fn(o,ra+"leave",ut),V&&Fn(o,ra+"move",Me)),G.isEnabled=!0,G.isDragging=G.isGesturing=G.isPressed=pe=De=!1,G._vx.reset(),G._vy.reset(),j=N(),ie=C(),Ce&&Ce.type&&rt(Ce),se&&se(G)),G},G.disable=function(){G.isEnabled&&(Co.filter(function(Ce){return Ce!==G&&uc(Ce.target)}).length||Un(te?ye:o,"scroll",ym),G.isPressed&&(G._vx.reset(),G._vy.reset(),Un(D?o:ye,Ki[1],Xe,!0)),Un(te?ye:o,"scroll",ee,le),Un(o,"wheel",_e,le),Un(o,Ki[0],rt,le),Un(ye,Ki[2],F),Un(ye,Ki[3],F),Un(o,"click",ce,!0),Un(o,"click",Lt),Un(ye,"gesturestart",oe),Un(ye,"gestureend",Z),Un(o,ra+"enter",je),Un(o,ra+"leave",ut),Un(o,ra+"move",Me),G.isEnabled=G.isPressed=G.isDragging=!1,Te&&Te(G))},G.kill=G.revert=function(){G.disable();var Ce=Co.indexOf(G);Ce>=0&&Co.splice(Ce,1),Br===G&&(Br=0)},Co.push(G),D&&uc(o)&&(Br=G),G.enable(m)},GC(n,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),n}();Zt.version="3.15.0";Zt.create=function(n){return new Zt(n)};Zt.register=bM;Zt.getAll=function(){return Co.slice()};Zt.getById=function(n){return Co.filter(function(e){return e.vars.id===n})[0]};AM()&&vn.registerPlugin(Zt);/*!
 * ScrollTrigger 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ue,lo,at,St,mi,xt,P_,fh,Wc,fc,Gl,wu,An,Oh,Mm,Bn,Pv,Lv,co,PM,Td,LM,kn,Em,NM,DM,cs,Tm,L_,Bo,N_,hc,wm,wd,Au=1,Cn=Date.now,Ad=Cn(),Hi=0,Wl=0,Nv=function(e,t,i){var r=di(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return i["_"+t+"Clamp"]=r,r?e.substr(6,e.length-7):e},Dv=function(e,t){return t&&(!di(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},jC=function n(){return Wl&&requestAnimationFrame(n)},Iv=function(){return Oh=1},Uv=function(){return Oh=0},fr=function(e){return e},Xl=function(e){return Math.round(e*1e5)/1e5||0},IM=function(){return typeof window<"u"},UM=function(){return Ue||IM()&&(Ue=window.gsap)&&Ue.registerPlugin&&Ue},Na=function(e){return!!~P_.indexOf(e)},FM=function(e){return(e==="Height"?N_:at["inner"+e])||mi["client"+e]||xt["client"+e]},OM=function(e){return Ns(e,"getBoundingClientRect")||(Na(e)?function(){return wf.width=at.innerWidth,wf.height=N_,wf}:function(){return Fr(e)})},YC=function(e,t,i){var r=i.d,s=i.d2,a=i.a;return(a=Ns(e,"getBoundingClientRect"))?function(){return a()[r]}:function(){return(t?FM(s):e["client"+s])||0}},$C=function(e,t){return!t||~yr.indexOf(e)?OM(e):function(){return wf}},gr=function(e,t){var i=t.s,r=t.d2,s=t.d,a=t.a;return Math.max(0,(i="scroll"+r)&&(a=Ns(e,i))?a()-OM(e)()[s]:Na(e)?(mi[i]||xt[i])-FM(r):e[i]-e["offset"+r])},Cu=function(e,t){for(var i=0;i<co.length;i+=3)(!t||~t.indexOf(co[i+1]))&&e(co[i],co[i+1],co[i+2])},di=function(e){return typeof e=="string"},Pn=function(e){return typeof e=="function"},jl=function(e){return typeof e=="number"},sa=function(e){return typeof e=="object"},Pl=function(e,t,i){return e&&e.progress(t?0:1)&&i&&e.pause()},Xa=function(e,t,i){if(e.enabled){var r=e._ctx?e._ctx.add(function(){return t(e,i)}):t(e,i);r&&r.totalTime&&(e.callbackAnimation=r)}},ja=Math.abs,kM="left",zM="top",D_="right",I_="bottom",Ta="width",wa="height",dc="Right",pc="Left",mc="Top",gc="Bottom",Jt="padding",Ui="margin",il="Width",U_="Height",sn="px",Fi=function(e){return at.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},qC=function(e){var t=Fi(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Fv=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},Fr=function(e,t){var i=t&&Fi(e)[Mm]!=="matrix(1, 0, 0, 1, 0, 0)"&&Ue.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return i&&i.progress(0).kill(),r},hh=function(e,t){var i=t.d2;return e["offset"+i]||e["client"+i]||0},BM=function(e){var t=[],i=e.labels,r=e.duration(),s;for(s in i)t.push(i[s]/r);return t},KC=function(e){return function(t){return Ue.utils.snap(BM(e),t)}},F_=function(e){var t=Ue.utils.snap(e),i=Array.isArray(e)&&e.slice(0).sort(function(r,s){return r-s});return i?function(r,s,a){a===void 0&&(a=.001);var o;if(!s)return t(r);if(s>0){for(r-=a,o=0;o<i.length;o++)if(i[o]>=r)return i[o];return i[o-1]}else for(o=i.length,r+=a;o--;)if(i[o]<=r)return i[o];return i[0]}:function(r,s,a){a===void 0&&(a=.001);var o=t(r);return!s||Math.abs(o-r)<a||o-r<0==s<0?o:t(s<0?r-e:r+e)}},ZC=function(e){return function(t,i){return F_(BM(e))(t,i.direction)}},Ru=function(e,t,i,r){return i.split(",").forEach(function(s){return e(t,s,r)})},dn=function(e,t,i,r,s){return e.addEventListener(t,i,{passive:!r,capture:!!s})},hn=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},bu=function(e,t,i){i=i&&i.wheelHandler,i&&(e(t,"wheel",i),e(t,"touchmove",i))},Ov={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Pu={toggleActions:"play",anticipatePin:0},dh={top:0,left:0,center:.5,bottom:1,right:1},Sf=function(e,t){if(di(e)){var i=e.indexOf("="),r=~i?+(e.charAt(i-1)+1)*parseFloat(e.substr(i+1)):0;~i&&(e.indexOf("%")>i&&(r*=t/100),e=e.substr(0,i-1)),e=r+(e in dh?dh[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Lu=function(e,t,i,r,s,a,o,l){var c=s.startColor,u=s.endColor,h=s.fontSize,f=s.indent,d=s.fontWeight,_=St.createElement("div"),m=Na(i)||Ns(i,"pinType")==="fixed",g=e.indexOf("scroller")!==-1,p=m?xt:i.tagName==="IFRAME"?i.contentDocument.body:i,v=e.indexOf("start")!==-1,x=v?c:u,y="border-color:"+x+";font-size:"+h+";color:"+x+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((g||l)&&m?"fixed;":"absolute;"),(g||l||!m)&&(y+=(r===on?D_:I_)+":"+(a+parseFloat(f))+"px;"),o&&(y+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),_._isStart=v,_.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),_.style.cssText=y,_.innerText=t||t===0?e+"-"+t:e,p.children[0]?p.insertBefore(_,p.children[0]):p.appendChild(_),_._offset=_["offset"+r.op.d2],Mf(_,0,r,v),_},Mf=function(e,t,i,r){var s={display:"block"},a=i[r?"os2":"p2"],o=i[r?"p2":"os2"];e._isFlipped=r,s[i.a+"Percent"]=r?-100:0,s[i.a]=r?"1px":0,s["border"+a+il]=1,s["border"+o+il]=0,s[i.p]=t+"px",Ue.set(e,s)},it=[],Am={},Xc,kv=function(){return Cn()-Hi>34&&(Xc||(Xc=requestAnimationFrame(Wr)))},Ya=function(){(!kn||!kn.isPressed||kn.startX>xt.clientWidth)&&(ot.cache++,kn?Xc||(Xc=requestAnimationFrame(Wr)):Wr(),Hi||Ia("scrollStart"),Hi=Cn())},Cd=function(){DM=at.innerWidth,NM=at.innerHeight},Yl=function(e){ot.cache++,(e===!0||!An&&!LM&&!St.fullscreenElement&&!St.webkitFullscreenElement&&(!Em||DM!==at.innerWidth||Math.abs(at.innerHeight-NM)>at.innerHeight*.25))&&fh.restart(!0)},Da={},QC=[],VM=function n(){return hn(lt,"scrollEnd",n)||pa(!0)},Ia=function(e){return Da[e]&&Da[e].map(function(t){return t()})||QC},fi=[],HM=function(e){for(var t=0;t<fi.length;t+=5)(!e||fi[t+4]&&fi[t+4].query===e)&&(fi[t].style.cssText=fi[t+1],fi[t].getBBox&&fi[t].setAttribute("transform",fi[t+2]||""),fi[t+3].uncache=1)},GM=function(){return ot.forEach(function(e){return Pn(e)&&++e.cacheID&&(e.rec=e())})},O_=function(e,t){var i;for(Bn=0;Bn<it.length;Bn++)i=it[Bn],i&&(!t||i._ctx===t)&&(e?i.kill(1):i.revert(!0,!0));hc=!0,t&&HM(t),t||Ia("revert")},WM=function(e,t){ot.cache++,(t||!Vn)&&ot.forEach(function(i){return Pn(i)&&i.cacheID++&&(i.rec=0)}),di(e)&&(at.history.scrollRestoration=L_=e)},Vn,Aa=0,zv,JC=function(){if(zv!==Aa){var e=zv=Aa;requestAnimationFrame(function(){return e===Aa&&pa(!0)})}},XM=function(){xt.appendChild(Bo),N_=!kn&&Bo.offsetHeight||at.innerHeight,xt.removeChild(Bo)},Bv=function(e){return Wc(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},pa=function(e,t){if(mi=St.documentElement,xt=St.body,P_=[at,St,mi,xt],Hi&&!e&&!hc){dn(lt,"scrollEnd",VM);return}XM(),Vn=lt.isRefreshing=!0,hc||GM();var i=Ia("refreshInit");PM&&lt.sort(),t||O_(),ot.forEach(function(r){Pn(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),it.slice(0).forEach(function(r){return r.refresh()}),hc=!1,it.forEach(function(r){if(r._subPinOffset&&r.pin){var s=r.vars.horizontal?"offsetWidth":"offsetHeight",a=r.pin[s];r.revert(!0,1),r.adjustPinSpacing(r.pin[s]-a),r.refresh()}}),wm=1,Bv(!0),it.forEach(function(r){var s=gr(r.scroller,r._dir),a=r.vars.end==="max"||r._endClamp&&r.end>s,o=r._startClamp&&r.start>=s;(a||o)&&r.setPositions(o?s-1:r.start,a?Math.max(o?s:r.start+1,s):r.end,!0)}),Bv(!1),wm=0,i.forEach(function(r){return r&&r.render&&r.render(-1)}),ot.forEach(function(r){Pn(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),WM(L_,1),fh.pause(),Aa++,Vn=2,Wr(2),it.forEach(function(r){return Pn(r.vars.onRefresh)&&r.vars.onRefresh(r)}),Vn=lt.isRefreshing=!1,Ia("refresh")},Cm=0,Ef=1,_c,Wr=function(e){if(e===2||!Vn&&!hc){lt.isUpdating=!0,_c&&_c.update(0);var t=it.length,i=Cn(),r=i-Ad>=50,s=t&&it[0].scroll();if(Ef=Cm>s?-1:1,Vn||(Cm=s),r&&(Hi&&!Oh&&i-Hi>200&&(Hi=0,Ia("scrollEnd")),Gl=Ad,Ad=i),Ef<0){for(Bn=t;Bn-- >0;)it[Bn]&&it[Bn].update(0,r);Ef=1}else for(Bn=0;Bn<t;Bn++)it[Bn]&&it[Bn].update(0,r);lt.isUpdating=!1}Xc=0},Rm=[kM,zM,I_,D_,Ui+gc,Ui+dc,Ui+mc,Ui+pc,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Tf=Rm.concat([Ta,wa,"boxSizing","max"+il,"max"+U_,"position",Ui,Jt,Jt+mc,Jt+dc,Jt+gc,Jt+pc]),e2=function(e,t,i){Vo(i);var r=e._gsap;if(r.spacerIsNative)Vo(r.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},Rd=function(e,t,i,r){if(!e._gsap.swappedIn){for(var s=Rm.length,a=t.style,o=e.style,l;s--;)l=Rm[s],a[l]=i[l];a.position=i.position==="absolute"?"absolute":"relative",i.display==="inline"&&(a.display="inline-block"),o[I_]=o[D_]="auto",a.flexBasis=i.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[Ta]=hh(e,Hn)+sn,a[wa]=hh(e,on)+sn,a[Jt]=o[Ui]=o[zM]=o[kM]="0",Vo(r),o[Ta]=o["max"+il]=i[Ta],o[wa]=o["max"+U_]=i[wa],o[Jt]=i[Jt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},t2=/([A-Z])/g,Vo=function(e){if(e){var t=e.t.style,i=e.length,r=0,s,a;for((e.t._gsap||Ue.core.getCache(e.t)).uncache=1;r<i;r+=2)a=e[r+1],s=e[r],a?t[s]=a:t[s]&&t.removeProperty(s.replace(t2,"-$1").toLowerCase())}},Nu=function(e){for(var t=Tf.length,i=e.style,r=[],s=0;s<t;s++)r.push(Tf[s],i[Tf[s]]);return r.t=e,r},n2=function(e,t,i){for(var r=[],s=e.length,a=i?8:0,o;a<s;a+=2)o=e[a],r.push(o,o in t?t[o]:e[a+1]);return r.t=e.t,r},wf={left:0,top:0},Vv=function(e,t,i,r,s,a,o,l,c,u,h,f,d,_){Pn(e)&&(e=e(l)),di(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?Sf("0"+e.substr(3),i):0));var m=d?d.time():0,g,p,v;if(d&&d.seek(0),isNaN(e)||(e=+e),jl(e))d&&(e=Ue.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,f,e)),o&&Mf(o,i,r,!0);else{Pn(t)&&(t=t(l));var x=(e||"0").split(" "),y,w,T,M;v=Yn(t,l)||xt,y=Fr(v)||{},(!y||!y.left&&!y.top)&&Fi(v).display==="none"&&(M=v.style.display,v.style.display="block",y=Fr(v),M?v.style.display=M:v.style.removeProperty("display")),w=Sf(x[0],y[r.d]),T=Sf(x[1]||"0",i),e=y[r.p]-c[r.p]-u+w+s-T,o&&Mf(o,T,r,i-T<20||o._isStart&&T>20),i-=i-T}if(_&&(l[_]=e||-.001,e<0&&(e=0)),a){var A=e+i,E=a._isStart;g="scroll"+r.d2,Mf(a,A,r,E&&A>20||!E&&(h?Math.max(xt[g],mi[g]):a.parentNode[g])<=A+1),h&&(c=Fr(o),h&&(a.style[r.op.p]=c[r.op.p]-r.op.m-a._offset+sn))}return d&&v&&(g=Fr(v),d.seek(f),p=Fr(v),d._caScrollDist=g[r.p]-p[r.p],e=e/d._caScrollDist*f),d&&d.seek(m),d?e:Math.round(e)},i2=/(webkit|moz|length|cssText|inset)/i,Hv=function(e,t,i,r){if(e.parentNode!==t){var s=e.style,a,o;if(t===xt){e._stOrig=s.cssText,o=Fi(e);for(a in o)!+a&&!i2.test(a)&&o[a]&&typeof s[a]=="string"&&a!=="0"&&(s[a]=o[a]);s.top=i,s.left=r}else s.cssText=e._stOrig;Ue.core.getCache(e).uncache=1,t.appendChild(e)}},jM=function(e,t,i){var r=t,s=r;return function(a){var o=Math.round(e());return o!==r&&o!==s&&Math.abs(o-r)>3&&Math.abs(o-s)>3&&(a=o,i&&i()),s=r,r=Math.round(a),r}},Du=function(e,t,i){var r={};r[t.p]="+="+i,Ue.set(e,r)},Gv=function(e,t){var i=Bs(e,t),r="_scroll"+t.p2,s=function a(o,l,c,u,h){var f=a.tween,d=l.onComplete,_={};c=c||i();var m=jM(i,c,function(){f.kill(),a.tween=0});return h=u&&h||0,u=u||o-c,f&&f.kill(),l[r]=o,l.inherit=!1,l.modifiers=_,_[r]=function(){return m(c+u*f.ratio+h*f.ratio*f.ratio)},l.onUpdate=function(){ot.cache++,a.tween&&Wr()},l.onComplete=function(){a.tween=0,d&&d.call(f)},f=a.tween=Ue.to(e,l),f};return e[r]=i,i.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},dn(e,"wheel",i.wheelHandler),lt.isTouch&&dn(e,"touchmove",i.wheelHandler),s},lt=function(){function n(t,i){lo||n.register(Ue)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Tm(this),this.init(t,i)}var e=n.prototype;return e.init=function(i,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Wl){this.update=this.refresh=this.kill=fr;return}i=Fv(di(i)||jl(i)||i.nodeType?{trigger:i}:i,Pu);var s=i,a=s.onUpdate,o=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,h=s.scrub,f=s.trigger,d=s.pin,_=s.pinSpacing,m=s.invalidateOnRefresh,g=s.anticipatePin,p=s.onScrubComplete,v=s.onSnapComplete,x=s.once,y=s.snap,w=s.pinReparent,T=s.pinSpacer,M=s.containerAnimation,A=s.fastScrollEnd,E=s.preventOverlaps,S=i.horizontal||i.containerAnimation&&i.horizontal!==!1?Hn:on,P=!h&&h!==0,I=Yn(i.scroller||at),U=Ue.core.getCache(I),k=Na(I),B=("pinType"in i?i.pinType:Ns(I,"pinType")||k&&"fixed")==="fixed",V=[i.onEnter,i.onLeave,i.onEnterBack,i.onLeaveBack],z=P&&i.toggleActions.split(" "),D="markers"in i?i.markers:Pu.markers,Y=k?0:parseFloat(Fi(I)["border"+S.p2+il])||0,L=this,Q=i.onRefreshInit&&function(){return i.onRefreshInit(L)},se=YC(I,k,S),Te=$C(I,k),X=0,J=0,le=0,re=Bs(I,S),ae,de,Ne,ke,De,pe,O,Be,Ae,G,Se,We,ve,N,C,j,ie,ne,te,ye,ge,xe,Ke,ce,me,He,Ve,be,Qe,Xe,rt,F,oe,Z,ee,_e,Me,je,ut;if(L._startClamp=L._endClamp=!1,L._dir=S,g*=45,L.scroller=I,L.scroll=M?M.time.bind(M):re,ke=re(),L.vars=i,r=r||i.animation,"refreshPriority"in i&&(PM=1,i.refreshPriority===-9999&&(_c=L)),U.tweenScroll=U.tweenScroll||{top:Gv(I,on),left:Gv(I,Hn)},L.tweenTo=ae=U.tweenScroll[S.p],L.scrubDuration=function(we){oe=jl(we)&&we,oe?F?F.duration(we):F=Ue.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:oe,paused:!0,onComplete:function(){return p&&p(L)}}):(F&&F.progress(1).kill(),F=0)},r&&(r.vars.lazy=!1,r._initted&&!L.isReverted||r.vars.immediateRender!==!1&&i.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),L.animation=r.pause(),r.scrollTrigger=L,L.scrubDuration(h),Xe=0,l||(l=r.vars.id)),y&&((!sa(y)||y.push)&&(y={snapTo:y}),"scrollBehavior"in xt.style&&Ue.set(k?[xt,mi]:I,{scrollBehavior:"auto"}),ot.forEach(function(we){return Pn(we)&&we.target===(k?St.scrollingElement||mi:I)&&(we.smooth=!1)}),Ne=Pn(y.snapTo)?y.snapTo:y.snapTo==="labels"?KC(r):y.snapTo==="labelsDirectional"?ZC(r):y.directional!==!1?function(we,qe){return F_(y.snapTo)(we,Cn()-J<500?0:qe.direction)}:Ue.utils.snap(y.snapTo),Z=y.duration||{min:.1,max:2},Z=sa(Z)?fc(Z.min,Z.max):fc(Z,Z),ee=Ue.delayedCall(y.delay||oe/2||.1,function(){var we=re(),qe=Cn()-J<500,ze=ae.tween;if((qe||Math.abs(L.getVelocity())<10)&&!ze&&!Oh&&X!==we){var $e=(we-pe)/N,Yt=r&&!P?r.totalProgress():$e,st=qe?0:(Yt-rt)/(Cn()-Gl)*1e3||0,bt=Ue.utils.clamp(-$e,1-$e,ja(st/2)*st/.185),rn=$e+(y.inertia===!1?0:bt),wt,At,mt=y,oi=mt.onStart,Nt=mt.onInterrupt,In=mt.onComplete;if(wt=Ne(rn,L),jl(wt)||(wt=rn),At=Math.max(0,Math.round(pe+wt*N)),we<=O&&we>=pe&&At!==we){if(ze&&!ze._initted&&ze.data<=ja(At-we))return;y.inertia===!1&&(bt=wt-$e),ae(At,{duration:Z(ja(Math.max(ja(rn-Yt),ja(wt-Yt))*.185/st/.05||0)),ease:y.ease||"power3",data:ja(At-we),onInterrupt:function(){return ee.restart(!0)&&Nt&&Xa(L,Nt)},onComplete:function(){L.update(),X=re(),r&&!P&&(F?F.resetTo("totalProgress",wt,r._tTime/r._tDur):r.progress(wt)),Xe=rt=r&&!P?r.totalProgress():L.progress,v&&v(L),In&&Xa(L,In)}},we,bt*N,At-we-bt*N),oi&&Xa(L,oi,ae.tween)}}else L.isActive&&X!==we&&ee.restart(!0)}).pause()),l&&(Am[l]=L),f=L.trigger=Yn(f||d!==!0&&d),ut=f&&f._gsap&&f._gsap.stRevert,ut&&(ut=ut(L)),d=d===!0?f:Yn(d),di(o)&&(o={targets:f,className:o}),d&&(_===!1||_===Ui||(_=!_&&d.parentNode&&d.parentNode.style&&Fi(d.parentNode).display==="flex"?!1:Jt),L.pin=d,de=Ue.core.getCache(d),de.spacer?C=de.pinState:(T&&(T=Yn(T),T&&!T.nodeType&&(T=T.current||T.nativeElement),de.spacerIsNative=!!T,T&&(de.spacerState=Nu(T))),de.spacer=ne=T||St.createElement("div"),ne.classList.add("pin-spacer"),l&&ne.classList.add("pin-spacer-"+l),de.pinState=C=Nu(d)),i.force3D!==!1&&Ue.set(d,{force3D:!0}),L.spacer=ne=de.spacer,Qe=Fi(d),ce=Qe[_+S.os2],ye=Ue.getProperty(d),ge=Ue.quickSetter(d,S.a,sn),Rd(d,ne,Qe),ie=Nu(d)),D){We=sa(D)?Fv(D,Ov):Ov,G=Lu("scroller-start",l,I,S,We,0),Se=Lu("scroller-end",l,I,S,We,0,G),te=G["offset"+S.op.d2];var Lt=Yn(Ns(I,"content")||I);Be=this.markerStart=Lu("start",l,Lt,S,We,te,0,M),Ae=this.markerEnd=Lu("end",l,Lt,S,We,te,0,M),M&&(je=Ue.quickSetter([Be,Ae],S.a,sn)),!B&&!(yr.length&&Ns(I,"fixedMarkers")===!0)&&(qC(k?xt:I),Ue.set([G,Se],{force3D:!0}),He=Ue.quickSetter(G,S.a,sn),be=Ue.quickSetter(Se,S.a,sn))}if(M){var Ce=M.vars.onUpdate,Fe=M.vars.onUpdateParams;M.eventCallback("onUpdate",function(){L.update(0,0,1),Ce&&Ce.apply(M,Fe||[])})}if(L.previous=function(){return it[it.indexOf(L)-1]},L.next=function(){return it[it.indexOf(L)+1]},L.revert=function(we,qe){if(!qe)return L.kill(!0);var ze=we!==!1||!L.enabled,$e=An;ze!==L.isReverted&&(ze&&(_e=Math.max(re(),L.scroll.rec||0),le=L.progress,Me=r&&r.progress()),Be&&[Be,Ae,G,Se].forEach(function(Yt){return Yt.style.display=ze?"none":"block"}),ze&&(An=L,L.update(ze)),d&&(!w||!L.isActive)&&(ze?e2(d,ne,C):Rd(d,ne,Fi(d),me)),ze||L.update(ze),An=$e,L.isReverted=ze)},L.refresh=function(we,qe,ze,$e){if(!((An||!L.enabled)&&!qe)){if(d&&we&&Hi){dn(n,"scrollEnd",VM);return}!Vn&&Q&&Q(L),An=L,ae.tween&&!ze&&(ae.tween.kill(),ae.tween=0),F&&F.pause(),m&&r&&(r.revert({kill:!1}).invalidate(),r.getChildren?r.getChildren(!0,!0,!1).forEach(function(kt){return kt.vars.immediateRender&&kt.render(0,!0,!0)}):r.vars.immediateRender&&r.render(0,!0,!0)),L.isReverted||L.revert(!0,!0),L._subPinOffset=!1;var Yt=se(),st=Te(),bt=M?M.duration():gr(I,S),rn=N<=.01||!N,wt=0,At=$e||0,mt=sa(ze)?ze.end:i.end,oi=i.endTrigger||f,Nt=sa(ze)?ze.start:i.start||(i.start===0||!f?0:d?"0 0":"0 100%"),In=L.pinnedContainer=i.pinnedContainer&&Yn(i.pinnedContainer,L),R=f&&Math.max(0,it.indexOf(L))||0,H=R,$,q,W,fe,he,Ee,Le,Ye,Ze,Oe,Je,pt,gt;for(D&&sa(ze)&&(pt=Ue.getProperty(G,S.p),gt=Ue.getProperty(Se,S.p));H-- >0;)Ee=it[H],Ee.end||Ee.refresh(0,1)||(An=L),Le=Ee.pin,Le&&(Le===f||Le===d||Le===In)&&!Ee.isReverted&&(Oe||(Oe=[]),Oe.unshift(Ee),Ee.revert(!0,!0)),Ee!==it[H]&&(R--,H--);for(Pn(Nt)&&(Nt=Nt(L)),Nt=Nv(Nt,"start",L),pe=Vv(Nt,f,Yt,S,re(),Be,G,L,st,Y,B,bt,M,L._startClamp&&"_startClamp")||(d?-.001:0),Pn(mt)&&(mt=mt(L)),di(mt)&&!mt.indexOf("+=")&&(~mt.indexOf(" ")?mt=(di(Nt)?Nt.split(" ")[0]:"")+mt:(wt=Sf(mt.substr(2),Yt),mt=di(Nt)?Nt:(M?Ue.utils.mapRange(0,M.duration(),M.scrollTrigger.start,M.scrollTrigger.end,pe):pe)+wt,oi=f)),mt=Nv(mt,"end",L),O=Math.max(pe,Vv(mt||(oi?"100% 0":bt),oi,Yt,S,re()+wt,Ae,Se,L,st,Y,B,bt,M,L._endClamp&&"_endClamp"))||-.001,wt=0,H=R;H--;)Ee=it[H]||{},Le=Ee.pin,Le&&Ee.start-Ee._pinPush<=pe&&!M&&Ee.end>0&&($=Ee.end-(L._startClamp?Math.max(0,Ee.start):Ee.start),(Le===f&&Ee.start-Ee._pinPush<pe||Le===In)&&isNaN(Nt)&&(wt+=$*(1-Ee.progress)),Le===d&&(At+=$));if(pe+=wt,O+=wt,L._startClamp&&(L._startClamp+=wt),L._endClamp&&!Vn&&(L._endClamp=O||-.001,O=Math.min(O,gr(I,S))),N=O-pe||(pe-=.01)&&.001,rn&&(le=Ue.utils.clamp(0,1,Ue.utils.normalize(pe,O,_e))),L._pinPush=At,Be&&wt&&($={},$[S.a]="+="+wt,In&&($[S.p]="-="+re()),Ue.set([Be,Ae],$)),d&&!(wm&&L.end>=gr(I,S)))$=Fi(d),fe=S===on,W=re(),xe=parseFloat(ye(S.a))+At,!bt&&O>1&&(Je=(k?St.scrollingElement||mi:I).style,Je={style:Je,value:Je["overflow"+S.a.toUpperCase()]},k&&Fi(xt)["overflow"+S.a.toUpperCase()]!=="scroll"&&(Je.style["overflow"+S.a.toUpperCase()]="scroll")),Rd(d,ne,$),ie=Nu(d),q=Fr(d,!0),Ye=B&&Bs(I,fe?Hn:on)(),_?(me=[_+S.os2,N+At+sn],me.t=ne,H=_===Jt?hh(d,S)+N+At:0,H&&(me.push(S.d,H+sn),ne.style.flexBasis!=="auto"&&(ne.style.flexBasis=H+sn)),Vo(me),In&&it.forEach(function(kt){kt.pin===In&&kt.vars.pinSpacing!==!1&&(kt._subPinOffset=!0)}),B&&re(_e)):(H=hh(d,S),H&&ne.style.flexBasis!=="auto"&&(ne.style.flexBasis=H+sn)),B&&(he={top:q.top+(fe?W-pe:Ye)+sn,left:q.left+(fe?Ye:W-pe)+sn,boxSizing:"border-box",position:"fixed"},he[Ta]=he["max"+il]=Math.ceil(q.width)+sn,he[wa]=he["max"+U_]=Math.ceil(q.height)+sn,he[Ui]=he[Ui+mc]=he[Ui+dc]=he[Ui+gc]=he[Ui+pc]="0",he[Jt]=$[Jt],he[Jt+mc]=$[Jt+mc],he[Jt+dc]=$[Jt+dc],he[Jt+gc]=$[Jt+gc],he[Jt+pc]=$[Jt+pc],j=n2(C,he,w),Vn&&re(0)),r?(Ze=r._initted,Td(1),r.render(r.duration(),!0,!0),Ke=ye(S.a)-xe+N+At,Ve=Math.abs(N-Ke)>1,B&&Ve&&j.splice(j.length-2,2),r.render(0,!0,!0),Ze||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),Td(0)):Ke=N,Je&&(Je.value?Je.style["overflow"+S.a.toUpperCase()]=Je.value:Je.style.removeProperty("overflow-"+S.a));else if(f&&re()&&!M)for(q=f.parentNode;q&&q!==xt;)q._pinOffset&&(pe-=q._pinOffset,O-=q._pinOffset),q=q.parentNode;Oe&&Oe.forEach(function(kt){return kt.revert(!1,!0)}),L.start=pe,L.end=O,ke=De=Vn?_e:re(),!M&&!Vn&&(ke<_e&&re(_e),L.scroll.rec=0),L.revert(!1,!0),J=Cn(),ee&&(X=-1,ee.restart(!0)),An=0,r&&P&&(r._initted||Me)&&r.progress()!==Me&&r.progress(Me||0,!0).render(r.time(),!0,!0),(rn||le!==L.progress||M||m||r&&!r._initted)&&(r&&!P&&(r._initted||le||r.vars.immediateRender!==!1)&&r.totalProgress(M&&pe<-.001&&!le?Ue.utils.normalize(pe,O,0):le,!0),L.progress=rn||(ke-pe)/N===le?0:le),d&&_&&(ne._pinOffset=Math.round(L.progress*Ke)),F&&F.invalidate(),isNaN(pt)||(pt-=Ue.getProperty(G,S.p),gt-=Ue.getProperty(Se,S.p),Du(G,S,pt),Du(Be,S,pt-($e||0)),Du(Se,S,gt),Du(Ae,S,gt-($e||0))),rn&&!Vn&&L.update(),u&&!Vn&&!ve&&(ve=!0,u(L),ve=!1)}},L.getVelocity=function(){return(re()-De)/(Cn()-Gl)*1e3||0},L.endAnimation=function(){Pl(L.callbackAnimation),r&&(F?F.progress(1):r.paused()?P||Pl(r,L.direction<0,1):Pl(r,r.reversed()))},L.labelToScroll=function(we){return r&&r.labels&&(pe||L.refresh()||pe)+r.labels[we]/r.duration()*N||0},L.getTrailing=function(we){var qe=it.indexOf(L),ze=L.direction>0?it.slice(0,qe).reverse():it.slice(qe+1);return(di(we)?ze.filter(function($e){return $e.vars.preventOverlaps===we}):ze).filter(function($e){return L.direction>0?$e.end<=pe:$e.start>=O})},L.update=function(we,qe,ze){if(!(M&&!ze&&!we)){var $e=Vn===!0?_e:L.scroll(),Yt=we?0:($e-pe)/N,st=Yt<0?0:Yt>1?1:Yt||0,bt=L.progress,rn,wt,At,mt,oi,Nt,In,R;if(qe&&(De=ke,ke=M?re():$e,y&&(rt=Xe,Xe=r&&!P?r.totalProgress():st)),g&&d&&!An&&!Au&&Hi&&(!st&&pe<$e+($e-De)/(Cn()-Gl)*g?st=1e-4:st===1&&O>$e+($e-De)/(Cn()-Gl)*g&&(st=.9999)),st!==bt&&L.enabled){if(rn=L.isActive=!!st&&st<1,wt=!!bt&&bt<1,Nt=rn!==wt,oi=Nt||!!st!=!!bt,L.direction=st>bt?1:-1,L.progress=st,oi&&!An&&(At=st&&!bt?0:st===1?1:bt===1?2:3,P&&(mt=!Nt&&z[At+1]!=="none"&&z[At+1]||z[At],R=r&&(mt==="complete"||mt==="reset"||mt in r))),E&&(Nt||R)&&(R||h||!r)&&(Pn(E)?E(L):L.getTrailing(E).forEach(function(W){return W.endAnimation()})),P||(F&&!An&&!Au?(F._dp._time-F._start!==F._time&&F.render(F._dp._time-F._start),F.resetTo?F.resetTo("totalProgress",st,r._tTime/r._tDur):(F.vars.totalProgress=st,F.invalidate().restart())):r&&r.totalProgress(st,!!(An&&(J||we)))),d){if(we&&_&&(ne.style[_+S.os2]=ce),!B)ge(Xl(xe+Ke*st));else if(oi){if(In=!we&&st>bt&&O+1>$e&&$e+1>=gr(I,S),w)if(!we&&(rn||In)){var H=Fr(d,!0),$=$e-pe;Hv(d,xt,H.top+(S===on?$:0)+sn,H.left+(S===on?0:$)+sn)}else Hv(d,ne);Vo(rn||In?j:ie),Ve&&st<1&&rn||ge(xe+(st===1&&!In?Ke:0))}}y&&!ae.tween&&!An&&!Au&&ee.restart(!0),o&&(Nt||x&&st&&(st<1||!wd))&&Wc(o.targets).forEach(function(W){return W.classList[rn||x?"add":"remove"](o.className)}),a&&!P&&!we&&a(L),oi&&!An?(P&&(R&&(mt==="complete"?r.pause().totalProgress(1):mt==="reset"?r.restart(!0).pause():mt==="restart"?r.restart(!0):r[mt]()),a&&a(L)),(Nt||!wd)&&(c&&Nt&&Xa(L,c),V[At]&&Xa(L,V[At]),x&&(st===1?L.kill(!1,1):V[At]=0),Nt||(At=st===1?1:3,V[At]&&Xa(L,V[At]))),A&&!rn&&Math.abs(L.getVelocity())>(jl(A)?A:2500)&&(Pl(L.callbackAnimation),F?F.progress(1):Pl(r,mt==="reverse"?1:!st,1))):P&&a&&!An&&a(L)}if(be){var q=M?$e/M.duration()*(M._caScrollDist||0):$e;He(q+(G._isFlipped?1:0)),be(q)}je&&je(-$e/M.duration()*(M._caScrollDist||0))}},L.enable=function(we,qe){L.enabled||(L.enabled=!0,dn(I,"resize",Yl),k||dn(I,"scroll",Ya),Q&&dn(n,"refreshInit",Q),we!==!1&&(L.progress=le=0,ke=De=X=re()),qe!==!1&&L.refresh())},L.getTween=function(we){return we&&ae?ae.tween:F},L.setPositions=function(we,qe,ze,$e){if(M){var Yt=M.scrollTrigger,st=M.duration(),bt=Yt.end-Yt.start;we=Yt.start+bt*we/st,qe=Yt.start+bt*qe/st}L.refresh(!1,!1,{start:Dv(we,ze&&!!L._startClamp),end:Dv(qe,ze&&!!L._endClamp)},$e),L.update()},L.adjustPinSpacing=function(we){if(me&&we){var qe=me.indexOf(S.d)+1;me[qe]=parseFloat(me[qe])+we+sn,me[1]=parseFloat(me[1])+we+sn,Vo(me)}},L.disable=function(we,qe){if(we!==!1&&L.revert(!0,!0),L.enabled&&(L.enabled=L.isActive=!1,qe||F&&F.pause(),_e=0,de&&(de.uncache=1),Q&&hn(n,"refreshInit",Q),ee&&(ee.pause(),ae.tween&&ae.tween.kill()&&(ae.tween=0)),!k)){for(var ze=it.length;ze--;)if(it[ze].scroller===I&&it[ze]!==L)return;hn(I,"resize",Yl),k||hn(I,"scroll",Ya)}},L.kill=function(we,qe){L.disable(we,qe),F&&!qe&&F.kill(),l&&delete Am[l];var ze=it.indexOf(L);ze>=0&&it.splice(ze,1),ze===Bn&&Ef>0&&Bn--,ze=0,it.forEach(function($e){return $e.scroller===L.scroller&&(ze=1)}),ze||Vn||(L.scroll.rec=0),r&&(r.scrollTrigger=null,we&&r.revert({kill:!1}),qe||r.kill()),Be&&[Be,Ae,G,Se].forEach(function($e){return $e.parentNode&&$e.parentNode.removeChild($e)}),_c===L&&(_c=0),d&&(de&&(de.uncache=1),ze=0,it.forEach(function($e){return $e.pin===d&&ze++}),ze||(de.spacer=0)),i.onKill&&i.onKill(L)},it.push(L),L.enable(!1,!1),ut&&ut(L),r&&r.add&&!N){var et=L.update;L.update=function(){L.update=et,ot.cache++,pe||O||L.refresh()},Ue.delayedCall(.01,L.update),N=.01,pe=O=0}else L.refresh();d&&JC()},n.register=function(i){return lo||(Ue=i||UM(),IM()&&window.document&&n.enable(),lo=Wl),lo},n.defaults=function(i){if(i)for(var r in i)Pu[r]=i[r];return Pu},n.disable=function(i,r){Wl=0,it.forEach(function(a){return a[r?"kill":"disable"](i)}),hn(at,"wheel",Ya),hn(St,"scroll",Ya),clearInterval(wu),hn(St,"touchcancel",fr),hn(xt,"touchstart",fr),Ru(hn,St,"pointerdown,touchstart,mousedown",Iv),Ru(hn,St,"pointerup,touchend,mouseup",Uv),fh.kill(),Cu(hn);for(var s=0;s<ot.length;s+=3)bu(hn,ot[s],ot[s+1]),bu(hn,ot[s],ot[s+2])},n.enable=function(){if(at=window,St=document,mi=St.documentElement,xt=St.body,Ue){if(Wc=Ue.utils.toArray,fc=Ue.utils.clamp,Tm=Ue.core.context||fr,Td=Ue.core.suppressOverwrites||fr,L_=at.history.scrollRestoration||"auto",Cm=at.pageYOffset||0,Ue.core.globals("ScrollTrigger",n),xt){Wl=1,Bo=document.createElement("div"),Bo.style.height="100vh",Bo.style.position="absolute",XM(),jC(),Zt.register(Ue),n.isTouch=Zt.isTouch,cs=Zt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Em=Zt.isTouch===1,dn(at,"wheel",Ya),P_=[at,St,mi,xt],Ue.matchMedia?(n.matchMedia=function(u){var h=Ue.matchMedia(),f;for(f in u)h.add(f,u[f]);return h},Ue.addEventListener("matchMediaInit",function(){GM(),O_()}),Ue.addEventListener("matchMediaRevert",function(){return HM()}),Ue.addEventListener("matchMedia",function(){pa(0,1),Ia("matchMedia")}),Ue.matchMedia().add("(orientation: portrait)",function(){return Cd(),Cd})):console.warn("Requires GSAP 3.11.0 or later"),Cd(),dn(St,"scroll",Ya);var i=xt.hasAttribute("style"),r=xt.style,s=r.borderTopStyle,a=Ue.core.Animation.prototype,o,l;for(a.revert||Object.defineProperty(a,"revert",{value:function(){return this.time(-.01,!0)}}),r.borderTopStyle="solid",o=Fr(xt),on.m=Math.round(o.top+on.sc())||0,Hn.m=Math.round(o.left+Hn.sc())||0,s?r.borderTopStyle=s:r.removeProperty("border-top-style"),i||(xt.setAttribute("style",""),xt.removeAttribute("style")),wu=setInterval(kv,250),Ue.delayedCall(.5,function(){return Au=0}),dn(St,"touchcancel",fr),dn(xt,"touchstart",fr),Ru(dn,St,"pointerdown,touchstart,mousedown",Iv),Ru(dn,St,"pointerup,touchend,mouseup",Uv),Mm=Ue.utils.checkPrefix("transform"),Tf.push(Mm),lo=Cn(),fh=Ue.delayedCall(.2,pa).pause(),co=[St,"visibilitychange",function(){var u=at.innerWidth,h=at.innerHeight;St.hidden?(Pv=u,Lv=h):(Pv!==u||Lv!==h)&&Yl()},St,"DOMContentLoaded",pa,at,"load",pa,at,"resize",Yl],Cu(dn),it.forEach(function(u){return u.enable(0,1)}),l=0;l<ot.length;l+=3)bu(hn,ot[l],ot[l+1]),bu(hn,ot[l],ot[l+2])}else if(St){var c=function u(){n.enable(),St.removeEventListener("DOMContentLoaded",u)};St.addEventListener("DOMContentLoaded",c)}}},n.config=function(i){"limitCallbacks"in i&&(wd=!!i.limitCallbacks);var r=i.syncInterval;r&&clearInterval(wu)||(wu=r)&&setInterval(kv,r),"ignoreMobileResize"in i&&(Em=n.isTouch===1&&i.ignoreMobileResize),"autoRefreshEvents"in i&&(Cu(hn)||Cu(dn,i.autoRefreshEvents||"none"),LM=(i.autoRefreshEvents+"").indexOf("resize")===-1)},n.scrollerProxy=function(i,r){var s=Yn(i),a=ot.indexOf(s),o=Na(s);~a&&ot.splice(a,o?6:2),r&&(o?yr.unshift(at,r,xt,r,mi,r):yr.unshift(s,r))},n.clearMatchMedia=function(i){it.forEach(function(r){return r._ctx&&r._ctx.query===i&&r._ctx.kill(!0,!0)})},n.isInViewport=function(i,r,s){var a=(di(i)?Yn(i):i).getBoundingClientRect(),o=a[s?Ta:wa]*r||0;return s?a.right-o>0&&a.left+o<at.innerWidth:a.bottom-o>0&&a.top+o<at.innerHeight},n.positionInViewport=function(i,r,s){di(i)&&(i=Yn(i));var a=i.getBoundingClientRect(),o=a[s?Ta:wa],l=r==null?o/2:r in dh?dh[r]*o:~r.indexOf("%")?parseFloat(r)*o/100:parseFloat(r)||0;return s?(a.left+l)/at.innerWidth:(a.top+l)/at.innerHeight},n.killAll=function(i){if(it.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),i!==!0){var r=Da.killAll||[];Da={},r.forEach(function(s){return s()})}},n}();lt.version="3.15.0";lt.saveStyles=function(n){return n?Wc(n).forEach(function(e){if(e&&e.style){var t=fi.indexOf(e);t>=0&&fi.splice(t,5),fi.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Ue.core.getCache(e),Tm())}}):fi};lt.revert=function(n,e){return O_(!n,e)};lt.create=function(n,e){return new lt(n,e)};lt.refresh=function(n){return n?Yl(!0):(lo||lt.register())&&pa(!0)};lt.update=function(n){return++ot.cache&&Wr(n===!0?2:0)};lt.clearScrollMemory=WM;lt.maxScroll=function(n,e){return gr(n,e?Hn:on)};lt.getScrollFunc=function(n,e){return Bs(Yn(n),e?Hn:on)};lt.getById=function(n){return Am[n]};lt.getAll=function(){return it.filter(function(n){return n.vars.id!=="ScrollSmoother"})};lt.isScrolling=function(){return!!Hi};lt.snapDirectional=F_;lt.addEventListener=function(n,e){var t=Da[n]||(Da[n]=[]);~t.indexOf(e)||t.push(e)};lt.removeEventListener=function(n,e){var t=Da[n],i=t&&t.indexOf(e);i>=0&&t.splice(i,1)};lt.batch=function(n,e){var t=[],i={},r=e.interval||.016,s=e.batchMax||1e9,a=function(c,u){var h=[],f=[],d=Ue.delayedCall(r,function(){u(h,f),h=[],f=[]}).pause();return function(_){h.length||d.restart(!0),h.push(_.trigger),f.push(_),s<=h.length&&d.progress(1)}},o;for(o in e)i[o]=o.substr(0,2)==="on"&&Pn(e[o])&&o!=="onRefreshInit"?a(o,e[o]):e[o];return Pn(s)&&(s=s(),dn(lt,"refresh",function(){return s=e.batchMax()})),Wc(n).forEach(function(l){var c={};for(o in i)c[o]=i[o];c.trigger=l,t.push(lt.create(c))}),t};var Wv=function(e,t,i,r){return t>r?e(r):t<0&&e(0),i>r?(r-t)/(i-t):i<0?t/(t-i):1},bd=function n(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Zt.isTouch?" pinch-zoom":""):"none",e===mi&&n(xt,t)},Iu={auto:1,scroll:1},r2=function(e){var t=e.event,i=e.target,r=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,a=s._gsap||Ue.core.getCache(s),o=Cn(),l;if(!a._isScrollT||o-a._isScrollT>2e3){for(;s&&s!==xt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Iu[(l=Fi(s)).overflowY]||Iu[l.overflowX]));)s=s.parentNode;a._isScroll=s&&s!==i&&!Na(s)&&(Iu[(l=Fi(s)).overflowY]||Iu[l.overflowX]),a._isScrollT=o}(a._isScroll||r==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},YM=function(e,t,i,r){return Zt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:r=r&&r2,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return i&&dn(St,Zt.eventTypes[0],jv,!1,!0)},onDisable:function(){return hn(St,Zt.eventTypes[0],jv,!0)}})},s2=/(input|label|select|textarea)/i,Xv,jv=function(e){var t=s2.test(e.target.tagName);(t||Xv)&&(e._gsapAllow=!0,Xv=t)},a2=function(e){sa(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,i=t.normalizeScrollX,r=t.momentum,s=t.allowNestedScroll,a=t.onRelease,o,l,c=Yn(e.target)||mi,u=Ue.core.globals().ScrollSmoother,h=u&&u.get(),f=cs&&(e.content&&Yn(e.content)||h&&e.content!==!1&&!h.smooth()&&h.content()),d=Bs(c,on),_=Bs(c,Hn),m=1,g=(Zt.isTouch&&at.visualViewport?at.visualViewport.scale*at.visualViewport.width:at.outerWidth)/at.innerWidth,p=0,v=Pn(r)?function(){return r(o)}:function(){return r||2.8},x,y,w=YM(c,e.type,!0,s),T=function(){return y=!1},M=fr,A=fr,E=function(){l=gr(c,on),A=fc(cs?1:0,l),i&&(M=fc(0,gr(c,Hn))),x=Aa},S=function(){f._gsap.y=Xl(parseFloat(f._gsap.y)+d.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},P=function(){if(y){requestAnimationFrame(T);var D=Xl(o.deltaY/2),Y=A(d.v-D);if(f&&Y!==d.v+d.offset){d.offset=Y-d.v;var L=Xl((parseFloat(f&&f._gsap.y)||0)-d.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+L+", 0, 1)",f._gsap.y=L+"px",d.cacheID=ot.cache,Wr()}return!0}d.offset&&S(),y=!0},I,U,k,B,V=function(){E(),I.isActive()&&I.vars.scrollY>l&&(d()>l?I.progress(1)&&d(l):I.resetTo("scrollY",l))};return f&&Ue.set(f,{y:"+=0"}),e.ignoreCheck=function(z){return cs&&z.type==="touchmove"&&P()||m>1.05&&z.type!=="touchstart"||o.isGesturing||z.touches&&z.touches.length>1},e.onPress=function(){y=!1;var z=m;m=Xl((at.visualViewport&&at.visualViewport.scale||1)/g),I.pause(),z!==m&&bd(c,m>1.01?!0:i?!1:"x"),U=_(),k=d(),E(),x=Aa},e.onRelease=e.onGestureStart=function(z,D){if(d.offset&&S(),!D)B.restart(!0);else{ot.cache++;var Y=v(),L,Q;i&&(L=_(),Q=L+Y*.05*-z.velocityX/.227,Y*=Wv(_,L,Q,gr(c,Hn)),I.vars.scrollX=M(Q)),L=d(),Q=L+Y*.05*-z.velocityY/.227,Y*=Wv(d,L,Q,gr(c,on)),I.vars.scrollY=A(Q),I.invalidate().duration(Y).play(.01),(cs&&I.vars.scrollY>=l||L>=l-1)&&Ue.to({},{onUpdate:V,duration:Y})}a&&a(z)},e.onWheel=function(){I._ts&&I.pause(),Cn()-p>1e3&&(x=0,p=Cn())},e.onChange=function(z,D,Y,L,Q){if(Aa!==x&&E(),D&&i&&_(M(L[2]===D?U+(z.startX-z.x):_()+D-L[1])),Y){d.offset&&S();var se=Q[2]===Y,Te=se?k+z.startY-z.y:d()+Y-Q[1],X=A(Te);se&&Te!==X&&(k+=X-Te),d(X)}(Y||D)&&Wr()},e.onEnable=function(){bd(c,i?!1:"x"),lt.addEventListener("refresh",V),dn(at,"resize",V),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=_.smooth=!1),w.enable()},e.onDisable=function(){bd(c,!0),hn(at,"resize",V),lt.removeEventListener("refresh",V),w.kill()},e.lockAxis=e.lockAxis!==!1,o=new Zt(e),o.iOS=cs,cs&&!d()&&d(1),cs&&Ue.ticker.add(fr),B=o._dc,I=Ue.to(o,{ease:"power4",paused:!0,inherit:!1,scrollX:i?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:jM(d,d(),function(){return I.pause()})},onUpdate:Wr,onComplete:B.vars.onComplete}),o};lt.sort=function(n){if(Pn(n))return it.sort(n);var e=at.pageYOffset||0;return lt.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+at.innerHeight}),it.sort(n||function(t,i){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((i.vars.containerAnimation?1e6:i._sortY)+(i.vars.refreshPriority||0)*-1e6)})};lt.observe=function(n){return new Zt(n)};lt.normalizeScroll=function(n){if(typeof n>"u")return kn;if(n===!0&&kn)return kn.enable();if(n===!1){kn&&kn.kill(),kn=n;return}var e=n instanceof Zt?n:a2(n);return kn&&kn.target===e.target&&kn.kill(),Na(e.target)&&(kn=e),e};lt.core={_getVelocityProp:Sm,_inputObserver:YM,_scrollers:ot,_proxies:yr,bridge:{ss:function(){Hi||Ia("scrollStart"),Hi=Cn()},ref:function(){return An}}};UM()&&Ue.registerPlugin(lt);lc.registerPlugin(lt);const o2=({children:n,scrollContainerRef:e,enableBlur:t=!0,baseOpacity:i=.1,baseRotation:r=3,blurStrength:s=4,containerClassName:a="",textClassName:o="",rotationEnd:l="bottom bottom",wordAnimationEnd:c="bottom bottom"})=>{const u=Pe.useRef(null),h=Pe.useMemo(()=>(typeof n=="string"?n:"").split(/(\s+)/).map((d,_)=>d.match(/^\s+$/)?d:b.jsx("span",{className:"word",children:d},_)),[n]);return Pe.useEffect(()=>{const f=u.current;if(!f)return;const d=e&&e.current?e.current:window,_=f.querySelectorAll(".word"),m=lc.fromTo(f,{transformOrigin:"0% 50%",rotate:r},{ease:"none",rotate:0,scrollTrigger:{trigger:f,scroller:d,start:"top bottom",end:l,scrub:!0}}),g=lc.fromTo(_,{opacity:i,willChange:"opacity"},{ease:"none",opacity:1,stagger:.05,scrollTrigger:{trigger:f,scroller:d,start:"top bottom-=20%",end:c,scrub:!0}});let p=null;return t&&(p=lc.fromTo(_,{filter:`blur(${s}px)`},{ease:"none",filter:"blur(0px)",stagger:.05,scrollTrigger:{trigger:f,scroller:d,start:"top bottom-=20%",end:c,scrub:!0}})),()=>{m.kill(),g.kill(),p&&p.kill(),lt.getAll().forEach(v=>{v&&v.trigger&&v.trigger===f&&v.kill()})}},[e,t,r,i,l,c,s]),b.jsx("h2",{ref:u,className:`scroll-reveal ${a}`,children:b.jsx("span",{className:`scroll-reveal-text ${o}`,children:h})})};function l2(){return b.jsxs("section",{className:"section-container",id:"about",children:[b.jsxs("div",{className:"section-header",children:[b.jsxs("div",{className:"section-tag",children:[b.jsx("span",{className:"section-tag-dot text-teal",children:"01"})," SYSTEM DOSSIER"]}),b.jsx(o2,{baseOpacity:.1,enableBlur:!0,baseRotation:3,blurStrength:4,containerClassName:"about-reveal-title",textClassName:"section-title",children:"AI systems, hardened by design."}),b.jsx("p",{className:"section-subtitle",children:"I build agentic workflows and software products from the ground up, then stress-test them from the outside to make sure they remain dependable, secure, and useful."})]}),b.jsxs("div",{className:"about-grid",children:[b.jsxs("div",{className:"about-intel-card glass-panel",children:[b.jsxs("div",{className:"card-header-bar",children:[b.jsx("span",{className:"card-status-dot teal"}),b.jsx("span",{className:"card-header-title",children:"OPERATOR_PROFILE.LOG"}),b.jsx("span",{className:"card-header-meta",children:"CLEARANCE: LVL_4"})]}),b.jsx("div",{className:"about-bio-content",children:xa.bio.map((n,e)=>b.jsx("p",{className:"about-paragraph",children:n},e))}),b.jsxs("div",{className:"mission-badges",children:[b.jsxs("div",{className:"mission-badge teal",children:[b.jsx("span",{className:"badge-bullet",children:"◆"})," LangGraph Swarms"]}),b.jsxs("div",{className:"mission-badge violet",children:[b.jsx("span",{className:"badge-bullet",children:"◆"})," Secure MLOps"]}),b.jsxs("div",{className:"mission-badge amber",children:[b.jsx("span",{className:"badge-bullet",children:"◆"})," Threat Remediation"]})]})]}),b.jsxs("div",{className:"about-metrics-card glass-panel",children:[b.jsxs("div",{className:"card-header-bar",children:[b.jsx("span",{className:"card-status-dot violet"}),b.jsx("span",{className:"card-header-title",children:"TELEMETRY_PARAMETERS"})]}),b.jsxs("div",{className:"metrics-list",children:[b.jsxs("div",{className:"metric-row",children:[b.jsx("span",{className:"metric-label",children:"CURRENT STATUS"}),b.jsx("span",{className:"metric-val text-teal",children:"React.js Intern @ Appify Infotech"})]}),b.jsxs("div",{className:"metric-row",children:[b.jsx("span",{className:"metric-label",children:"ACADEMIC PATH"}),b.jsx("span",{className:"metric-val text-light",children:"B.Tech CS/IT · P P Savani Univ (2027)"})]}),b.jsxs("div",{className:"metric-row",children:[b.jsx("span",{className:"metric-label",children:"BASE STATION"}),b.jsx("span",{className:"metric-val text-violet",children:xa.location})]}),b.jsxs("div",{className:"metric-row",children:[b.jsx("span",{className:"metric-label",children:"SPECIALIZATION"}),b.jsx("span",{className:"metric-val text-amber",children:"Agentic AI & Red-Teaming Guardrails"})]}),b.jsxs("div",{className:"metric-row",children:[b.jsx("span",{className:"metric-label",children:"FIELD WORK"}),b.jsx("span",{className:"metric-val text-light",children:"Freelance Arch for Gujarat SMBs"})]})]}),b.jsxs("div",{className:"quote-callout",children:[b.jsx("span",{className:"quote-bracket",children:"“"}),xa.tagline,b.jsx("span",{className:"quote-bracket",children:"”"})]})]})]})]})}const uo={SMOOTH_TAU:.25,MIN_COPIES:2,COPY_HEADROOM:2},Pd=n=>typeof n=="number"?`${n}px`:n??void 0,c2=(n,e,t)=>{Pe.useEffect(()=>{if(!window.ResizeObserver){const r=()=>n();return window.addEventListener("resize",r),n(),()=>window.removeEventListener("resize",r)}const i=e.map(r=>{if(!r.current)return null;const s=new ResizeObserver(n);return s.observe(r.current),s});return n(),()=>{i.forEach(r=>r==null?void 0:r.disconnect())}},[n,e,t])},u2=(n,e,t)=>{Pe.useEffect(()=>{var a;const i=((a=n.current)==null?void 0:a.querySelectorAll("img"))??[];if(i.length===0){e();return}let r=i.length;const s=()=>{r-=1,r===0&&e()};return i.forEach(o=>{const l=o;l.complete?s():(l.addEventListener("load",s,{once:!0}),l.addEventListener("error",s,{once:!0}))}),()=>{i.forEach(o=>{o.removeEventListener("load",s),o.removeEventListener("error",s)})}},[e,n,t])},f2=(n,e,t,i,r,s,a)=>{const o=Pe.useRef(null),l=Pe.useRef(null),c=Pe.useRef(0),u=Pe.useRef(0);Pe.useEffect(()=>{const h=n.current;if(!h)return;const f=a?i:t;if(f>0){c.current=(c.current%f+f)%f;const _=a?`translate3d(0, ${-c.current}px, 0)`:`translate3d(${-c.current}px, 0, 0)`;h.style.transform=_}const d=_=>{l.current===null&&(l.current=_);const m=Math.max(0,_-l.current)/1e3;l.current=_;const g=r&&s!==void 0?s:e,p=1-Math.exp(-m/uo.SMOOTH_TAU);if(u.current+=(g-u.current)*p,f>0){let v=c.current+u.current*m;v=(v%f+f)%f,c.current=v;const x=a?`translate3d(0, ${-c.current}px, 0)`:`translate3d(${-c.current}px, 0, 0)`;h.style.transform=x}o.current=requestAnimationFrame(d)};return o.current=requestAnimationFrame(d),()=>{o.current!==null&&(cancelAnimationFrame(o.current),o.current=null),l.current=null}},[e,t,i,r,s,a,n])},$M=Pe.memo(({logos:n,speed:e=120,direction:t="left",width:i="100%",logoHeight:r=28,gap:s=32,pauseOnHover:a,hoverSpeed:o,fadeOut:l=!1,fadeOutColor:c,scaleOnHover:u=!1,renderItem:h,ariaLabel:f="Partner logos",className:d,style:_})=>{const m=Pe.useRef(null),g=Pe.useRef(null),p=Pe.useRef(null),[v,x]=Pe.useState(0),[y,w]=Pe.useState(0),[T,M]=Pe.useState(uo.MIN_COPIES),[A,E]=Pe.useState(!1),S=Pe.useMemo(()=>{if(o!==void 0)return o;if(a===!0)return 0;if(a!==!1)return 0},[o,a]),P=t==="up"||t==="down",I=Pe.useMemo(()=>{const Q=Math.abs(e);let se;P?se=t==="up"?1:-1:se=t==="left"?1:-1;const Te=e<0?-1:1;return Q*se*Te},[e,t,P]),U=Pe.useCallback(()=>{var J,le,re,ae,de,Ne;const Q=((J=m.current)==null?void 0:J.clientWidth)??0,se=(re=(le=p.current)==null?void 0:le.getBoundingClientRect)==null?void 0:re.call(le),Te=(se==null?void 0:se.width)??0,X=(se==null?void 0:se.height)??0;if(P){const ke=((de=(ae=m.current)==null?void 0:ae.parentElement)==null?void 0:de.clientHeight)??0;if(m.current&&ke>0){const De=Math.ceil(ke);m.current.style.height!==`${De}px`&&(m.current.style.height=`${De}px`)}if(X>0){w(Math.ceil(X));const De=((Ne=m.current)==null?void 0:Ne.clientHeight)??ke??X,pe=Math.ceil(De/X)+uo.COPY_HEADROOM;M(Math.max(uo.MIN_COPIES,pe))}}else if(Te>0){x(Math.ceil(Te));const ke=Math.ceil(Q/Te)+uo.COPY_HEADROOM;M(Math.max(uo.MIN_COPIES,ke))}},[P]);c2(U,[m,p],[n,s,r,P]),u2(p,U,[n,s,r,P]),f2(g,I,v,y,A,S,P);const k=Pe.useMemo(()=>({"--logoloop-gap":`${s}px`,"--logoloop-logoHeight":`${r}px`,...c&&{"--logoloop-fadeColor":c}}),[s,r,c]),B=Pe.useMemo(()=>["logoloop",P?"logoloop--vertical":"logoloop--horizontal",l&&"logoloop--fade",u&&"logoloop--scale-hover",d].filter(Boolean).join(" "),[P,l,u,d]),V=Pe.useCallback(()=>{S!==void 0&&E(!0)},[S]),z=Pe.useCallback(()=>{S!==void 0&&E(!1)},[S]),D=Pe.useCallback((Q,se)=>{if(h)return b.jsx("li",{className:"logoloop__item",role:"listitem",children:h(Q,se)},se);const Te="node"in Q,X=Te?b.jsx("span",{className:"logoloop__node","aria-hidden":!!Q.href&&!Q.ariaLabel,children:Q.node}):b.jsx("img",{src:Q.src,srcSet:Q.srcSet,sizes:Q.sizes,width:Q.width,height:Q.height,alt:Q.alt??"",title:Q.title,loading:"lazy",decoding:"async",draggable:!1}),J=Te?Q.ariaLabel??Q.title:Q.alt??Q.title,le=Q.href?b.jsx("a",{className:"logoloop__link",href:Q.href,"aria-label":J||"logo link",target:"_blank",rel:"noreferrer noopener",children:X}):X;return b.jsx("li",{className:"logoloop__item",role:"listitem",children:le},se)},[h]),Y=Pe.useMemo(()=>Array.from({length:T},(Q,se)=>b.jsx("ul",{className:"logoloop__list",role:"list","aria-hidden":se>0,ref:se===0?p:void 0,children:n.map((Te,X)=>D(Te,`${se}-${X}`))},`copy-${se}`)),[T,n,D]),L=Pe.useMemo(()=>({width:P?Pd(i)==="100%"?void 0:Pd(i):Pd(i)??"100%",...k,..._}),[i,k,_,P]);return b.jsx("div",{ref:m,className:B,style:L,role:"region","aria-label":f,children:b.jsx("div",{className:"logoloop__track",ref:g,onMouseEnter:V,onMouseLeave:z,children:Y})})});$M.displayName="LogoLoop";function h2(){const n=t=>t.toLowerCase().includes("agentic")?"teal":t.toLowerCase().includes("security")?"amber":"violet",e=[{node:b.jsx("span",{className:"logo-chip",children:"React"}),title:"React"},{node:b.jsx("span",{className:"logo-chip",children:"Vite"}),title:"Vite"},{node:b.jsx("span",{className:"logo-chip",children:"Node"}),title:"Node.js"},{node:b.jsx("span",{className:"logo-chip",children:"Python"}),title:"Python"},{node:b.jsx("span",{className:"logo-chip",children:"LangChain"}),title:"LangChain"},{node:b.jsx("span",{className:"logo-chip",children:"LangGraph"}),title:"LangGraph"},{node:b.jsx("span",{className:"logo-chip",children:"n8n"}),title:"n8n"},{node:b.jsx("span",{className:"logo-chip",children:"MongoDB"}),title:"MongoDB"},{node:b.jsx("span",{className:"logo-chip",children:"Tailwind"}),title:"Tailwind CSS"},{node:b.jsx("span",{className:"logo-chip",children:"Kotlin"}),title:"Kotlin"},{node:b.jsx("span",{className:"logo-chip",children:"AI"}),title:"AI Systems"},{node:b.jsx("span",{className:"logo-chip",children:"Security"}),title:"Security"}];return b.jsxs("section",{className:"section-container",id:"skills",children:[b.jsxs("div",{className:"section-header",children:[b.jsxs("div",{className:"section-tag",children:[b.jsx("span",{className:"section-tag-dot text-violet",children:"02"})," ARSENAL & CAPABILITIES"]}),b.jsx("h2",{className:"section-title",children:"Cognitive & Defense Toolchains"}),b.jsx("p",{className:"section-subtitle",children:"Autonomous orchestration platforms, secure API architectures, and simulated attack environments."})]}),b.jsxs("div",{className:"tech-loop-shell",children:[b.jsxs("div",{className:"tech-loop-header",children:[b.jsx("span",{className:"tech-loop-title",children:"Core stack"}),b.jsx("span",{className:"tech-loop-badge",children:"Live build"})]}),b.jsx($M,{logos:e,speed:68,direction:"left",logoHeight:42,gap:18,hoverSpeed:30,pauseOnHover:!0,fadeOut:!0,fadeOutColor:"#0b1017",scaleOnHover:!0,ariaLabel:"Technology stack marquee",className:"tech-loop"})]}),b.jsx("div",{className:"skills-grid",children:vA.map((t,i)=>{const r=n(t.group);return b.jsxs("div",{className:`skill-node-card glass-panel accent-${r}`,children:[b.jsxs("div",{className:"card-header-bar",children:[b.jsx("span",{className:`card-status-dot ${r}`}),b.jsx("span",{className:"skill-group-name",children:t.group}),b.jsxs("span",{className:"card-header-meta",children:["NODES: ",t.items.length]})]}),b.jsx("div",{className:"skill-tags-cloud",children:t.items.map((s,a)=>b.jsxs("div",{className:`skill-tag-pill ${r}`,children:[b.jsx("span",{className:"pill-dot"}),b.jsx("span",{className:"pill-label",children:s})]},a))}),b.jsx("div",{className:"skill-card-footer",children:b.jsxs("span",{className:"security-hash",children:["SEC_",r.toUpperCase(),"_0",i+1," // VERIFIED"]})})]},i)})})]})}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const k_="170",d2=0,Yv=1,p2=2,qM=1,m2=2,Lr=3,Vs=0,si=1,Or=2,Ds=0,Ho=1,$v=2,qv=3,Kv=4,g2=5,la=100,_2=101,v2=102,x2=103,y2=104,S2=200,M2=201,E2=202,T2=203,bm=204,Pm=205,w2=206,A2=207,C2=208,R2=209,b2=210,P2=211,L2=212,N2=213,D2=214,Lm=0,Nm=1,Dm=2,rl=3,Im=4,Um=5,Fm=6,Om=7,KM=0,I2=1,U2=2,Is=0,F2=1,O2=2,k2=3,z2=4,B2=5,V2=6,H2=7,ZM=300,sl=301,al=302,km=303,zm=304,kh=306,Bm=1e3,ma=1001,Vm=1002,sr=1003,G2=1004,Uu=1005,_r=1006,Ld=1007,ga=1008,Qr=1009,QM=1010,JM=1011,jc=1012,z_=1013,Ua=1014,Vr=1015,Jc=1016,B_=1017,V_=1018,ol=1020,eE=35902,tE=1021,nE=1022,er=1023,iE=1024,rE=1025,Go=1026,ll=1027,sE=1028,H_=1029,aE=1030,G_=1031,W_=1033,Af=33776,Cf=33777,Rf=33778,bf=33779,Hm=35840,Gm=35841,Wm=35842,Xm=35843,jm=36196,Ym=37492,$m=37496,qm=37808,Km=37809,Zm=37810,Qm=37811,Jm=37812,eg=37813,tg=37814,ng=37815,ig=37816,rg=37817,sg=37818,ag=37819,og=37820,lg=37821,Pf=36492,cg=36494,ug=36495,oE=36283,fg=36284,hg=36285,dg=36286,W2=3200,X2=3201,j2=0,Y2=1,ps="",Ni="srgb",dl="srgb-linear",zh="linear",Et="srgb",$a=7680,Zv=519,$2=512,q2=513,K2=514,lE=515,Z2=516,Q2=517,J2=518,eR=519,Qv=35044,Jv="300 es",Hr=2e3,ph=2001;class pl{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Nd=Math.PI/180,pg=180/Math.PI;function eu(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Tn[n&255]+Tn[n>>8&255]+Tn[n>>16&255]+Tn[n>>24&255]+"-"+Tn[e&255]+Tn[e>>8&255]+"-"+Tn[e>>16&15|64]+Tn[e>>24&255]+"-"+Tn[t&63|128]+Tn[t>>8&255]+"-"+Tn[t>>16&255]+Tn[t>>24&255]+Tn[i&255]+Tn[i>>8&255]+Tn[i>>16&255]+Tn[i>>24&255]).toLowerCase()}function qn(n,e,t){return Math.max(e,Math.min(t,n))}function tR(n,e){return(n%e+e)%e}function Dd(n,e,t){return(1-t)*n+t*e}function Ll(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function jn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class yt{constructor(e=0,t=0){yt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(qn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class tt{constructor(e,t,i,r,s,a,o,l,c){tt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],d=i[5],_=i[8],m=r[0],g=r[3],p=r[6],v=r[1],x=r[4],y=r[7],w=r[2],T=r[5],M=r[8];return s[0]=a*m+o*v+l*w,s[3]=a*g+o*x+l*T,s[6]=a*p+o*y+l*M,s[1]=c*m+u*v+h*w,s[4]=c*g+u*x+h*T,s[7]=c*p+u*y+h*M,s[2]=f*m+d*v+_*w,s[5]=f*g+d*x+_*T,s[8]=f*p+d*y+_*M,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,f=o*l-u*s,d=c*s-a*l,_=t*h+i*f+r*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/_;return e[0]=h*m,e[1]=(r*c-u*i)*m,e[2]=(o*i-r*a)*m,e[3]=f*m,e[4]=(u*t-r*l)*m,e[5]=(r*s-o*t)*m,e[6]=d*m,e[7]=(i*l-c*t)*m,e[8]=(a*t-i*s)*m,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Id.makeScale(e,t)),this}rotate(e){return this.premultiply(Id.makeRotation(-e)),this}translate(e,t){return this.premultiply(Id.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Id=new tt;function cE(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function mh(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function nR(){const n=mh("canvas");return n.style.display="block",n}const ex={};function $l(n){n in ex||(ex[n]=!0,console.warn(n))}function iR(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function rR(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function sR(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const ht={enabled:!0,workingColorSpace:dl,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Et&&(n.r=Xr(n.r),n.g=Xr(n.g),n.b=Xr(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Et&&(n.r=Wo(n.r),n.g=Wo(n.g),n.b=Wo(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===ps?zh:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Xr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Wo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const tx=[.64,.33,.3,.6,.15,.06],nx=[.2126,.7152,.0722],ix=[.3127,.329],rx=new tt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),sx=new tt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ht.define({[dl]:{primaries:tx,whitePoint:ix,transfer:zh,toXYZ:rx,fromXYZ:sx,luminanceCoefficients:nx,workingColorSpaceConfig:{unpackColorSpace:Ni},outputColorSpaceConfig:{drawingBufferColorSpace:Ni}},[Ni]:{primaries:tx,whitePoint:ix,transfer:Et,toXYZ:rx,fromXYZ:sx,luminanceCoefficients:nx,outputColorSpaceConfig:{drawingBufferColorSpace:Ni}}});let qa;class aR{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{qa===void 0&&(qa=mh("canvas")),qa.width=e.width,qa.height=e.height;const i=qa.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=qa}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=mh("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Xr(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Xr(t[i]/255)*255):t[i]=Xr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let oR=0;class uE{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:oR++}),this.uuid=eu(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Ud(r[a].image)):s.push(Ud(r[a]))}else s=Ud(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Ud(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?aR.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let lR=0,Er=class Lf extends pl{constructor(e=Lf.DEFAULT_IMAGE,t=Lf.DEFAULT_MAPPING,i=ma,r=ma,s=_r,a=ga,o=er,l=Qr,c=Lf.DEFAULT_ANISOTROPY,u=ps){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lR++}),this.uuid=eu(),this.name="",this.source=new uE(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new yt(0,0),this.repeat=new yt(1,1),this.center=new yt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ZM)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Bm:e.x=e.x-Math.floor(e.x);break;case ma:e.x=e.x<0?0:1;break;case Vm:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Bm:e.y=e.y-Math.floor(e.y);break;case ma:e.y=e.y<0?0:1;break;case Vm:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Er.DEFAULT_IMAGE=null;Er.DEFAULT_MAPPING=ZM;Er.DEFAULT_ANISOTROPY=1;class Kt{constructor(e=0,t=0,i=0,r=1){Kt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],_=l[9],m=l[2],g=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-m)<.01&&Math.abs(_-g)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+m)<.1&&Math.abs(_+g)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,y=(d+1)/2,w=(p+1)/2,T=(u+f)/4,M=(h+m)/4,A=(_+g)/4;return x>y&&x>w?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=T/i,s=M/i):y>w?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=T/r,s=A/r):w<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=M/s,r=A/s),this.set(i,r,s,t),this}let v=Math.sqrt((g-_)*(g-_)+(h-m)*(h-m)+(f-u)*(f-u));return Math.abs(v)<.001&&(v=1),this.x=(g-_)/v,this.y=(h-m)/v,this.z=(f-u)/v,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class cR extends pl{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Kt(0,0,e,t),this.scissorTest=!1,this.viewport=new Kt(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_r,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Er(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new uE(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fa extends cR{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class fE extends Er{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=sr,this.minFilter=sr,this.wrapR=ma,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class uR extends Er{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=sr,this.minFilter=sr,this.wrapR=ma,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class tu{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],h=i[r+3];const f=s[a+0],d=s[a+1],_=s[a+2],m=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=f,e[t+1]=d,e[t+2]=_,e[t+3]=m;return}if(h!==m||l!==f||c!==d||u!==_){let g=1-o;const p=l*f+c*d+u*_+h*m,v=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const w=Math.sqrt(x),T=Math.atan2(w,p*v);g=Math.sin(g*T)/w,o=Math.sin(o*T)/w}const y=o*v;if(l=l*g+f*y,c=c*g+d*y,u=u*g+_*y,h=h*g+m*y,g===1-o){const w=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=w,c*=w,u*=w,h*=w}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],h=s[a],f=s[a+1],d=s[a+2],_=s[a+3];return e[t]=o*_+u*h+l*d-c*f,e[t+1]=l*_+u*f+c*h-o*d,e[t+2]=c*_+u*d+o*f-l*h,e[t+3]=u*_-o*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),h=o(s/2),f=l(i/2),d=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=f*u*h+c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h-f*d*_;break;case"YXZ":this._x=f*u*h+c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h+f*d*_;break;case"ZXY":this._x=f*u*h-c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h-f*d*_;break;case"ZYX":this._x=f*u*h-c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h+f*d*_;break;case"YZX":this._x=f*u*h+c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h-f*d*_;break;case"XZY":this._x=f*u*h-c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h+f*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=i+o+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(a-r)*d}else if(i>o&&i>h){const d=2*Math.sqrt(1+i-o-h);this._w=(u-l)/d,this._x=.25*d,this._y=(r+a)/d,this._z=(s+c)/d}else if(o>h){const d=2*Math.sqrt(1+o-i-h);this._w=(s-c)/d,this._x=(r+a)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-i-o);this._w=(a-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qn(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-t;return this._w=d*a+t*this._w,this._x=d*i+t*this._x,this._y=d*r+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=a*h+this._w*f,this._x=i*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class K{constructor(e=0,t=0,i=0){K.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ax.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ax.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),u=2*(o*t-s*r),h=2*(s*i-a*t);return this.x=t+l*c+a*h-o*u,this.y=i+l*u+o*c-s*h,this.z=r+l*h+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Fd.copy(this).projectOnVector(e),this.sub(Fd)}reflect(e){return this.sub(Fd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(qn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Fd=new K,ax=new tu;class nu{constructor(e=new K(1/0,1/0,1/0),t=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Yi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Yi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Yi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Yi):Yi.fromBufferAttribute(s,a),Yi.applyMatrix4(e.matrixWorld),this.expandByPoint(Yi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Fu.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Fu.copy(i.boundingBox)),Fu.applyMatrix4(e.matrixWorld),this.union(Fu)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Yi),Yi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Nl),Ou.subVectors(this.max,Nl),Ka.subVectors(e.a,Nl),Za.subVectors(e.b,Nl),Qa.subVectors(e.c,Nl),is.subVectors(Za,Ka),rs.subVectors(Qa,Za),qs.subVectors(Ka,Qa);let t=[0,-is.z,is.y,0,-rs.z,rs.y,0,-qs.z,qs.y,is.z,0,-is.x,rs.z,0,-rs.x,qs.z,0,-qs.x,-is.y,is.x,0,-rs.y,rs.x,0,-qs.y,qs.x,0];return!Od(t,Ka,Za,Qa,Ou)||(t=[1,0,0,0,1,0,0,0,1],!Od(t,Ka,Za,Qa,Ou))?!1:(ku.crossVectors(is,rs),t=[ku.x,ku.y,ku.z],Od(t,Ka,Za,Qa,Ou))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Yi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Yi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ar[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ar[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ar[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ar[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ar[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ar[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ar[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ar[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ar),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ar=[new K,new K,new K,new K,new K,new K,new K,new K],Yi=new K,Fu=new nu,Ka=new K,Za=new K,Qa=new K,is=new K,rs=new K,qs=new K,Nl=new K,Ou=new K,ku=new K,Ks=new K;function Od(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Ks.fromArray(n,s);const o=r.x*Math.abs(Ks.x)+r.y*Math.abs(Ks.y)+r.z*Math.abs(Ks.z),l=e.dot(Ks),c=t.dot(Ks),u=i.dot(Ks);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const fR=new nu,Dl=new K,kd=new K;class X_{constructor(e=new K,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):fR.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Dl.subVectors(e,this.center);const t=Dl.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Dl,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(kd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Dl.copy(e.center).add(kd)),this.expandByPoint(Dl.copy(e.center).sub(kd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Cr=new K,zd=new K,zu=new K,ss=new K,Bd=new K,Bu=new K,Vd=new K;class hR{constructor(e=new K,t=new K(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Cr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Cr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Cr.copy(this.origin).addScaledVector(this.direction,t),Cr.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){zd.copy(e).add(t).multiplyScalar(.5),zu.copy(t).sub(e).normalize(),ss.copy(this.origin).sub(zd);const s=e.distanceTo(t)*.5,a=-this.direction.dot(zu),o=ss.dot(this.direction),l=-ss.dot(zu),c=ss.lengthSq(),u=Math.abs(1-a*a);let h,f,d,_;if(u>0)if(h=a*l-o,f=a*o-l,_=s*u,h>=0)if(f>=-_)if(f<=_){const m=1/u;h*=m,f*=m,d=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=s,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;else f<=-_?(h=Math.max(0,-(-a*s+o)),f=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c):f<=_?(h=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(h=Math.max(0,-(a*s+o)),f=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c);else f=a>0?-s:s,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(zd).addScaledVector(zu,f),d}intersectSphere(e,t){Cr.subVectors(e.center,this.origin);const i=Cr.dot(this.direction),r=Cr.dot(Cr)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Cr)!==null}intersectTriangle(e,t,i,r,s){Bd.subVectors(t,e),Bu.subVectors(i,e),Vd.crossVectors(Bd,Bu);let a=this.direction.dot(Vd),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ss.subVectors(this.origin,e);const l=o*this.direction.dot(Bu.crossVectors(ss,Bu));if(l<0)return null;const c=o*this.direction.dot(Bd.cross(ss));if(c<0||l+c>a)return null;const u=-o*ss.dot(Vd);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class nn{constructor(e,t,i,r,s,a,o,l,c,u,h,f,d,_,m,g){nn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,u,h,f,d,_,m,g)}set(e,t,i,r,s,a,o,l,c,u,h,f,d,_,m,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=_,p[11]=m,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new nn().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Ja.setFromMatrixColumn(e,0).length(),s=1/Ja.setFromMatrixColumn(e,1).length(),a=1/Ja.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=a*u,d=a*h,_=o*u,m=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+_*c,t[5]=f-m*c,t[9]=-o*l,t[2]=m-f*c,t[6]=_+d*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,_=c*u,m=c*h;t[0]=f+m*o,t[4]=_*o-d,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=d*o-_,t[6]=m+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,_=c*u,m=c*h;t[0]=f-m*o,t[4]=-a*h,t[8]=_+d*o,t[1]=d+_*o,t[5]=a*u,t[9]=m-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*u,d=a*h,_=o*u,m=o*h;t[0]=l*u,t[4]=_*c-d,t[8]=f*c+m,t[1]=l*h,t[5]=m*c+f,t[9]=d*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,d=a*c,_=o*l,m=o*c;t[0]=l*u,t[4]=m-f*h,t[8]=_*h+d,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=d*h+_,t[10]=f-m*h}else if(e.order==="XZY"){const f=a*l,d=a*c,_=o*l,m=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+m,t[5]=a*u,t[9]=d*h-_,t[2]=_*h-d,t[6]=o*u,t[10]=m*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(dR,e,pR)}lookAt(e,t,i){const r=this.elements;return ci.subVectors(e,t),ci.lengthSq()===0&&(ci.z=1),ci.normalize(),as.crossVectors(i,ci),as.lengthSq()===0&&(Math.abs(i.z)===1?ci.x+=1e-4:ci.z+=1e-4,ci.normalize(),as.crossVectors(i,ci)),as.normalize(),Vu.crossVectors(ci,as),r[0]=as.x,r[4]=Vu.x,r[8]=ci.x,r[1]=as.y,r[5]=Vu.y,r[9]=ci.y,r[2]=as.z,r[6]=Vu.z,r[10]=ci.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],d=i[13],_=i[2],m=i[6],g=i[10],p=i[14],v=i[3],x=i[7],y=i[11],w=i[15],T=r[0],M=r[4],A=r[8],E=r[12],S=r[1],P=r[5],I=r[9],U=r[13],k=r[2],B=r[6],V=r[10],z=r[14],D=r[3],Y=r[7],L=r[11],Q=r[15];return s[0]=a*T+o*S+l*k+c*D,s[4]=a*M+o*P+l*B+c*Y,s[8]=a*A+o*I+l*V+c*L,s[12]=a*E+o*U+l*z+c*Q,s[1]=u*T+h*S+f*k+d*D,s[5]=u*M+h*P+f*B+d*Y,s[9]=u*A+h*I+f*V+d*L,s[13]=u*E+h*U+f*z+d*Q,s[2]=_*T+m*S+g*k+p*D,s[6]=_*M+m*P+g*B+p*Y,s[10]=_*A+m*I+g*V+p*L,s[14]=_*E+m*U+g*z+p*Q,s[3]=v*T+x*S+y*k+w*D,s[7]=v*M+x*P+y*B+w*Y,s[11]=v*A+x*I+y*V+w*L,s[15]=v*E+x*U+y*z+w*Q,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],_=e[3],m=e[7],g=e[11],p=e[15];return _*(+s*l*h-r*c*h-s*o*f+i*c*f+r*o*d-i*l*d)+m*(+t*l*d-t*c*f+s*a*f-r*a*d+r*c*u-s*l*u)+g*(+t*c*h-t*o*d-s*a*h+i*a*d+s*o*u-i*c*u)+p*(-r*o*u-t*l*h+t*o*f+r*a*h-i*a*f+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],_=e[12],m=e[13],g=e[14],p=e[15],v=h*g*c-m*f*c+m*l*d-o*g*d-h*l*p+o*f*p,x=_*f*c-u*g*c-_*l*d+a*g*d+u*l*p-a*f*p,y=u*m*c-_*h*c+_*o*d-a*m*d-u*o*p+a*h*p,w=_*h*l-u*m*l-_*o*f+a*m*f+u*o*g-a*h*g,T=t*v+i*x+r*y+s*w;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const M=1/T;return e[0]=v*M,e[1]=(m*f*s-h*g*s-m*r*d+i*g*d+h*r*p-i*f*p)*M,e[2]=(o*g*s-m*l*s+m*r*c-i*g*c-o*r*p+i*l*p)*M,e[3]=(h*l*s-o*f*s-h*r*c+i*f*c+o*r*d-i*l*d)*M,e[4]=x*M,e[5]=(u*g*s-_*f*s+_*r*d-t*g*d-u*r*p+t*f*p)*M,e[6]=(_*l*s-a*g*s-_*r*c+t*g*c+a*r*p-t*l*p)*M,e[7]=(a*f*s-u*l*s+u*r*c-t*f*c-a*r*d+t*l*d)*M,e[8]=y*M,e[9]=(_*h*s-u*m*s-_*i*d+t*m*d+u*i*p-t*h*p)*M,e[10]=(a*m*s-_*o*s+_*i*c-t*m*c-a*i*p+t*o*p)*M,e[11]=(u*o*s-a*h*s-u*i*c+t*h*c+a*i*d-t*o*d)*M,e[12]=w*M,e[13]=(u*m*r-_*h*r+_*i*f-t*m*f-u*i*g+t*h*g)*M,e[14]=(_*o*r-a*m*r-_*i*l+t*m*l+a*i*g-t*o*g)*M,e[15]=(a*h*r-u*o*r+u*i*l-t*h*l-a*i*f+t*o*f)*M,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,h=o+o,f=s*c,d=s*u,_=s*h,m=a*u,g=a*h,p=o*h,v=l*c,x=l*u,y=l*h,w=i.x,T=i.y,M=i.z;return r[0]=(1-(m+p))*w,r[1]=(d+y)*w,r[2]=(_-x)*w,r[3]=0,r[4]=(d-y)*T,r[5]=(1-(f+p))*T,r[6]=(g+v)*T,r[7]=0,r[8]=(_+x)*M,r[9]=(g-v)*M,r[10]=(1-(f+m))*M,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Ja.set(r[0],r[1],r[2]).length();const a=Ja.set(r[4],r[5],r[6]).length(),o=Ja.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],$i.copy(this);const c=1/s,u=1/a,h=1/o;return $i.elements[0]*=c,$i.elements[1]*=c,$i.elements[2]*=c,$i.elements[4]*=u,$i.elements[5]*=u,$i.elements[6]*=u,$i.elements[8]*=h,$i.elements[9]*=h,$i.elements[10]*=h,t.setFromRotationMatrix($i),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=Hr){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),h=(t+e)/(t-e),f=(i+r)/(i-r);let d,_;if(o===Hr)d=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===ph)d=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=Hr){const l=this.elements,c=1/(t-e),u=1/(i-r),h=1/(a-s),f=(t+e)*c,d=(i+r)*u;let _,m;if(o===Hr)_=(a+s)*h,m=-2*h;else if(o===ph)_=s*h,m=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=m,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ja=new K,$i=new nn,dR=new K(0,0,0),pR=new K(1,1,1),as=new K,Vu=new K,ci=new K,ox=new nn,lx=new tu;let Oa=class hE{constructor(e=0,t=0,i=0,r=hE.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(qn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-qn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(qn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-qn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(qn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-qn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return ox.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ox,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return lx.setFromEuler(this),this.setFromQuaternion(lx,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Oa.DEFAULT_ORDER="XYZ";class dE{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let mR=0;const cx=new K,eo=new tu,Rr=new nn,Hu=new K,Il=new K,gR=new K,_R=new tu,ux=new K(1,0,0),fx=new K(0,1,0),hx=new K(0,0,1),dx={type:"added"},vR={type:"removed"},to={type:"childadded",child:null},Hd={type:"childremoved",child:null};class Ei extends pl{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mR++}),this.uuid=eu(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ei.DEFAULT_UP.clone();const e=new K,t=new Oa,i=new tu,r=new K(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new nn},normalMatrix:{value:new tt}}),this.matrix=new nn,this.matrixWorld=new nn,this.matrixAutoUpdate=Ei.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ei.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new dE,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return eo.setFromAxisAngle(e,t),this.quaternion.multiply(eo),this}rotateOnWorldAxis(e,t){return eo.setFromAxisAngle(e,t),this.quaternion.premultiply(eo),this}rotateX(e){return this.rotateOnAxis(ux,e)}rotateY(e){return this.rotateOnAxis(fx,e)}rotateZ(e){return this.rotateOnAxis(hx,e)}translateOnAxis(e,t){return cx.copy(e).applyQuaternion(this.quaternion),this.position.add(cx.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ux,e)}translateY(e){return this.translateOnAxis(fx,e)}translateZ(e){return this.translateOnAxis(hx,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Rr.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Hu.copy(e):Hu.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Il.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Rr.lookAt(Il,Hu,this.up):Rr.lookAt(Hu,Il,this.up),this.quaternion.setFromRotationMatrix(Rr),r&&(Rr.extractRotation(r.matrixWorld),eo.setFromRotationMatrix(Rr),this.quaternion.premultiply(eo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(dx),to.child=e,this.dispatchEvent(to),to.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(vR),Hd.child=e,this.dispatchEvent(Hd),Hd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Rr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Rr.multiply(e.parent.matrixWorld)),e.applyMatrix4(Rr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(dx),to.child=e,this.dispatchEvent(to),to.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Il,e,gR),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Il,_R,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),d=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ei.DEFAULT_UP=new K(0,1,0);Ei.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ei.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const qi=new K,br=new K,Gd=new K,Pr=new K,no=new K,io=new K,px=new K,Wd=new K,Xd=new K,jd=new K,Yd=new Kt,$d=new Kt,qd=new Kt;let Ul=class fo{constructor(e=new K,t=new K,i=new K){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),qi.subVectors(e,t),r.cross(qi);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){qi.subVectors(r,t),br.subVectors(i,t),Gd.subVectors(e,t);const a=qi.dot(qi),o=qi.dot(br),l=qi.dot(Gd),c=br.dot(br),u=br.dot(Gd),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const f=1/h,d=(c*l-o*u)*f,_=(a*u-o*l)*f;return s.set(1-d-_,_,d)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Pr)===null?!1:Pr.x>=0&&Pr.y>=0&&Pr.x+Pr.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,Pr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Pr.x),l.addScaledVector(a,Pr.y),l.addScaledVector(o,Pr.z),l)}static getInterpolatedAttribute(e,t,i,r,s,a){return Yd.setScalar(0),$d.setScalar(0),qd.setScalar(0),Yd.fromBufferAttribute(e,t),$d.fromBufferAttribute(e,i),qd.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Yd,s.x),a.addScaledVector($d,s.y),a.addScaledVector(qd,s.z),a}static isFrontFacing(e,t,i,r){return qi.subVectors(i,t),br.subVectors(e,t),qi.cross(br).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qi.subVectors(this.c,this.b),br.subVectors(this.a,this.b),qi.cross(br).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return fo.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return fo.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return fo.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return fo.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return fo.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;no.subVectors(r,i),io.subVectors(s,i),Wd.subVectors(e,i);const l=no.dot(Wd),c=io.dot(Wd);if(l<=0&&c<=0)return t.copy(i);Xd.subVectors(e,r);const u=no.dot(Xd),h=io.dot(Xd);if(u>=0&&h<=u)return t.copy(r);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(no,a);jd.subVectors(e,s);const d=no.dot(jd),_=io.dot(jd);if(_>=0&&d<=_)return t.copy(s);const m=d*c-l*_;if(m<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(i).addScaledVector(io,o);const g=u*_-d*h;if(g<=0&&h-u>=0&&d-_>=0)return px.subVectors(s,r),o=(h-u)/(h-u+(d-_)),t.copy(r).addScaledVector(px,o);const p=1/(g+m+f);return a=m*p,o=f*p,t.copy(i).addScaledVector(no,a).addScaledVector(io,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}};const pE={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},os={h:0,s:0,l:0},Gu={h:0,s:0,l:0};function Kd(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Tt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ni){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ht.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=ht.workingColorSpace){return this.r=e,this.g=t,this.b=i,ht.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=ht.workingColorSpace){if(e=tR(e,1),t=qn(t,0,1),i=qn(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=Kd(a,s,e+1/3),this.g=Kd(a,s,e),this.b=Kd(a,s,e-1/3)}return ht.toWorkingColorSpace(this,r),this}setStyle(e,t=Ni){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ni){const i=pE[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xr(e.r),this.g=Xr(e.g),this.b=Xr(e.b),this}copyLinearToSRGB(e){return this.r=Wo(e.r),this.g=Wo(e.g),this.b=Wo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ni){return ht.fromWorkingColorSpace(wn.copy(this),e),Math.round(qn(wn.r*255,0,255))*65536+Math.round(qn(wn.g*255,0,255))*256+Math.round(qn(wn.b*255,0,255))}getHexString(e=Ni){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ht.workingColorSpace){ht.fromWorkingColorSpace(wn.copy(this),t);const i=wn.r,r=wn.g,s=wn.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ht.workingColorSpace){return ht.fromWorkingColorSpace(wn.copy(this),t),e.r=wn.r,e.g=wn.g,e.b=wn.b,e}getStyle(e=Ni){ht.fromWorkingColorSpace(wn.copy(this),e);const t=wn.r,i=wn.g,r=wn.b;return e!==Ni?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(os),this.setHSL(os.h+e,os.s+t,os.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(os),e.getHSL(Gu);const i=Dd(os.h,Gu.h,t),r=Dd(os.s,Gu.s,t),s=Dd(os.l,Gu.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const wn=new Tt;Tt.NAMES=pE;let xR=0;class Bh extends pl{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xR++}),this.uuid=eu(),this.name="",this.blending=Ho,this.side=Vs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bm,this.blendDst=Pm,this.blendEquation=la,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Tt(0,0,0),this.blendAlpha=0,this.depthFunc=rl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$a,this.stencilZFail=$a,this.stencilZPass=$a,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ho&&(i.blending=this.blending),this.side!==Vs&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==bm&&(i.blendSrc=this.blendSrc),this.blendDst!==Pm&&(i.blendDst=this.blendDst),this.blendEquation!==la&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==rl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Zv&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$a&&(i.stencilFail=this.stencilFail),this.stencilZFail!==$a&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==$a&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class gh extends Bh{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Oa,this.combine=KM,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Qt=new K,Wu=new yt;class Sr{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Qv,this.updateRanges=[],this.gpuType=Vr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Wu.fromBufferAttribute(this,t),Wu.applyMatrix3(e),this.setXY(t,Wu.x,Wu.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix3(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix4(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Qt.fromBufferAttribute(this,t),Qt.applyNormalMatrix(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Qt.fromBufferAttribute(this,t),Qt.transformDirection(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ll(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=jn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ll(t,this.array)),t}setX(e,t){return this.normalized&&(t=jn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ll(t,this.array)),t}setY(e,t){return this.normalized&&(t=jn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ll(t,this.array)),t}setZ(e,t){return this.normalized&&(t=jn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ll(t,this.array)),t}setW(e,t){return this.normalized&&(t=jn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=jn(t,this.array),i=jn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=jn(t,this.array),i=jn(i,this.array),r=jn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=jn(t,this.array),i=jn(i,this.array),r=jn(r,this.array),s=jn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Qv&&(e.usage=this.usage),e}}class mE extends Sr{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class gE extends Sr{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Nn extends Sr{constructor(e,t,i){super(new Float32Array(e),t,i)}}let yR=0;const Pi=new nn,Zd=new Ei,ro=new K,ui=new nu,Fl=new nu,fn=new K;class Tr extends pl{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yR++}),this.uuid=eu(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(cE(e)?gE:mE)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new tt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Pi.makeRotationFromQuaternion(e),this.applyMatrix4(Pi),this}rotateX(e){return Pi.makeRotationX(e),this.applyMatrix4(Pi),this}rotateY(e){return Pi.makeRotationY(e),this.applyMatrix4(Pi),this}rotateZ(e){return Pi.makeRotationZ(e),this.applyMatrix4(Pi),this}translate(e,t,i){return Pi.makeTranslation(e,t,i),this.applyMatrix4(Pi),this}scale(e,t,i){return Pi.makeScale(e,t,i),this.applyMatrix4(Pi),this}lookAt(e){return Zd.lookAt(e),Zd.updateMatrix(),this.applyMatrix4(Zd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ro).negate(),this.translate(ro.x,ro.y,ro.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Nn(i,3))}else{for(let i=0,r=t.count;i<r;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new nu);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];ui.setFromBufferAttribute(s),this.morphTargetsRelative?(fn.addVectors(this.boundingBox.min,ui.min),this.boundingBox.expandByPoint(fn),fn.addVectors(this.boundingBox.max,ui.max),this.boundingBox.expandByPoint(fn)):(this.boundingBox.expandByPoint(ui.min),this.boundingBox.expandByPoint(ui.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new X_);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(e){const i=this.boundingSphere.center;if(ui.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Fl.setFromBufferAttribute(o),this.morphTargetsRelative?(fn.addVectors(ui.min,Fl.min),ui.expandByPoint(fn),fn.addVectors(ui.max,Fl.max),ui.expandByPoint(fn)):(ui.expandByPoint(Fl.min),ui.expandByPoint(Fl.max))}ui.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)fn.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(fn));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)fn.fromBufferAttribute(o,c),l&&(ro.fromBufferAttribute(e,c),fn.add(ro)),r=Math.max(r,i.distanceToSquared(fn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Sr(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let A=0;A<i.count;A++)o[A]=new K,l[A]=new K;const c=new K,u=new K,h=new K,f=new yt,d=new yt,_=new yt,m=new K,g=new K;function p(A,E,S){c.fromBufferAttribute(i,A),u.fromBufferAttribute(i,E),h.fromBufferAttribute(i,S),f.fromBufferAttribute(s,A),d.fromBufferAttribute(s,E),_.fromBufferAttribute(s,S),u.sub(c),h.sub(c),d.sub(f),_.sub(f);const P=1/(d.x*_.y-_.x*d.y);isFinite(P)&&(m.copy(u).multiplyScalar(_.y).addScaledVector(h,-d.y).multiplyScalar(P),g.copy(h).multiplyScalar(d.x).addScaledVector(u,-_.x).multiplyScalar(P),o[A].add(m),o[E].add(m),o[S].add(m),l[A].add(g),l[E].add(g),l[S].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let A=0,E=v.length;A<E;++A){const S=v[A],P=S.start,I=S.count;for(let U=P,k=P+I;U<k;U+=3)p(e.getX(U+0),e.getX(U+1),e.getX(U+2))}const x=new K,y=new K,w=new K,T=new K;function M(A){w.fromBufferAttribute(r,A),T.copy(w);const E=o[A];x.copy(E),x.sub(w.multiplyScalar(w.dot(E))).normalize(),y.crossVectors(T,E);const P=y.dot(l[A])<0?-1:1;a.setXYZW(A,x.x,x.y,x.z,P)}for(let A=0,E=v.length;A<E;++A){const S=v[A],P=S.start,I=S.count;for(let U=P,k=P+I;U<k;U+=3)M(e.getX(U+0)),M(e.getX(U+1)),M(e.getX(U+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Sr(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);const r=new K,s=new K,a=new K,o=new K,l=new K,c=new K,u=new K,h=new K;if(e)for(let f=0,d=e.count;f<d;f+=3){const _=e.getX(f+0),m=e.getX(f+1),g=e.getX(f+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,m),a.fromBufferAttribute(t,g),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,m),c.fromBufferAttribute(i,g),o.add(u),l.add(u),c.add(u),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(m,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)fn.fromBufferAttribute(e,t),fn.normalize(),e.setXYZ(t,fn.x,fn.y,fn.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u);let d=0,_=0;for(let m=0,g=l.length;m<g;m++){o.isInterleavedBufferAttribute?d=l[m]*o.data.stride+o.offset:d=l[m]*u;for(let p=0;p<u;p++)f[_++]=c[d++]}return new Sr(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Tr,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,i);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const mx=new nn,Zs=new hR,Xu=new X_,gx=new K,ju=new K,Yu=new K,$u=new K,Qd=new K,qu=new K,_x=new K,Ku=new K;let tr=class extends Ei{constructor(e=new Tr,t=new gh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){qu.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],h=s[l];u!==0&&(Qd.fromBufferAttribute(h,e),a?qu.addScaledVector(Qd,u):qu.addScaledVector(Qd.sub(t),u))}t.add(qu)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Xu.copy(i.boundingSphere),Xu.applyMatrix4(s),Zs.copy(e.ray).recast(e.near),!(Xu.containsPoint(Zs.origin)===!1&&(Zs.intersectSphere(Xu,gx)===null||Zs.origin.distanceToSquared(gx)>(e.far-e.near)**2))&&(mx.copy(s).invert(),Zs.copy(e.ray).applyMatrix4(mx),!(i.boundingBox!==null&&Zs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Zs)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,m=f.length;_<m;_++){const g=f[_],p=a[g.materialIndex],v=Math.max(g.start,d.start),x=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let y=v,w=x;y<w;y+=3){const T=o.getX(y),M=o.getX(y+1),A=o.getX(y+2);r=Zu(this,p,e,i,c,u,h,T,M,A),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const _=Math.max(0,d.start),m=Math.min(o.count,d.start+d.count);for(let g=_,p=m;g<p;g+=3){const v=o.getX(g),x=o.getX(g+1),y=o.getX(g+2);r=Zu(this,a,e,i,c,u,h,v,x,y),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,m=f.length;_<m;_++){const g=f[_],p=a[g.materialIndex],v=Math.max(g.start,d.start),x=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let y=v,w=x;y<w;y+=3){const T=y,M=y+1,A=y+2;r=Zu(this,p,e,i,c,u,h,T,M,A),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const _=Math.max(0,d.start),m=Math.min(l.count,d.start+d.count);for(let g=_,p=m;g<p;g+=3){const v=g,x=g+1,y=g+2;r=Zu(this,a,e,i,c,u,h,v,x,y),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}};function SR(n,e,t,i,r,s,a,o){let l;if(e.side===si?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Vs,o),l===null)return null;Ku.copy(o),Ku.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Ku);return c<t.near||c>t.far?null:{distance:c,point:Ku.clone(),object:n}}function Zu(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,ju),n.getVertexPosition(l,Yu),n.getVertexPosition(c,$u);const u=SR(n,e,t,i,ju,Yu,$u,_x);if(u){const h=new K;Ul.getBarycoord(_x,ju,Yu,$u,h),r&&(u.uv=Ul.getInterpolatedAttribute(r,o,l,c,h,new yt)),s&&(u.uv1=Ul.getInterpolatedAttribute(s,o,l,c,h,new yt)),a&&(u.normal=Ul.getInterpolatedAttribute(a,o,l,c,h,new K),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new K,materialIndex:0};Ul.getNormal(ju,Yu,$u,f.normal),u.face=f,u.barycoord=h}return u}class iu extends Tr{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],h=[];let f=0,d=0;_("z","y","x",-1,-1,i,t,e,a,s,0),_("z","y","x",1,-1,i,t,-e,a,s,1),_("x","z","y",1,1,e,i,t,r,a,2),_("x","z","y",1,-1,e,i,-t,r,a,3),_("x","y","z",1,-1,e,t,i,r,s,4),_("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Nn(c,3)),this.setAttribute("normal",new Nn(u,3)),this.setAttribute("uv",new Nn(h,2));function _(m,g,p,v,x,y,w,T,M,A,E){const S=y/M,P=w/A,I=y/2,U=w/2,k=T/2,B=M+1,V=A+1;let z=0,D=0;const Y=new K;for(let L=0;L<V;L++){const Q=L*P-U;for(let se=0;se<B;se++){const Te=se*S-I;Y[m]=Te*v,Y[g]=Q*x,Y[p]=k,c.push(Y.x,Y.y,Y.z),Y[m]=0,Y[g]=0,Y[p]=T>0?1:-1,u.push(Y.x,Y.y,Y.z),h.push(se/M),h.push(1-L/A),z+=1}}for(let L=0;L<A;L++)for(let Q=0;Q<M;Q++){const se=f+Q+B*L,Te=f+Q+B*(L+1),X=f+(Q+1)+B*(L+1),J=f+(Q+1)+B*L;l.push(se,Te,J),l.push(Te,X,J),D+=6}o.addGroup(d,D,E),d+=D,f+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new iu(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function cl(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function On(n){const e={};for(let t=0;t<n.length;t++){const i=cl(n[t]);for(const r in i)e[r]=i[r]}return e}function MR(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function _E(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ht.workingColorSpace}const ER={clone:cl,merge:On};var TR=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wR=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Hs extends Bh{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=TR,this.fragmentShader=wR,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=cl(e.uniforms),this.uniformsGroups=MR(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class vE extends Ei{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nn,this.projectionMatrix=new nn,this.projectionMatrixInverse=new nn,this.coordinateSystem=Hr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ls=new K,vx=new yt,xx=new yt;class Oi extends vE{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=pg*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Nd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return pg*2*Math.atan(Math.tan(Nd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ls.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ls.x,ls.y).multiplyScalar(-e/ls.z),ls.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ls.x,ls.y).multiplyScalar(-e/ls.z)}getViewSize(e,t){return this.getViewBounds(e,vx,xx),t.subVectors(xx,vx)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Nd*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const so=-90,ao=1;class AR extends Ei{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Oi(so,ao,e,t);r.layers=this.layers,this.add(r);const s=new Oi(so,ao,e,t);s.layers=this.layers,this.add(s);const a=new Oi(so,ao,e,t);a.layers=this.layers,this.add(a);const o=new Oi(so,ao,e,t);o.layers=this.layers,this.add(o);const l=new Oi(so,ao,e,t);l.layers=this.layers,this.add(l);const c=new Oi(so,ao,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===Hr)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ph)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const m=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=m,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class xE extends Er{constructor(e,t,i,r,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:sl,super(e,t,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class CR extends Fa{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new xE(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:_r}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new iu(5,5,5),s=new Hs({name:"CubemapFromEquirect",uniforms:cl(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:si,blending:Ds});s.uniforms.tEquirect.value=t;const a=new tr(r,s),o=t.minFilter;return t.minFilter===ga&&(t.minFilter=_r),new AR(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}const Jd=new K,RR=new K,bR=new tt;class aa{constructor(e=new K(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Jd.subVectors(i,t).cross(RR.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Jd),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||bR.getNormalMatrix(e),r=this.coplanarPoint(Jd).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Qs=new X_,Qu=new K;class yE{constructor(e=new aa,t=new aa,i=new aa,r=new aa,s=new aa,a=new aa){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Hr){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],u=r[5],h=r[6],f=r[7],d=r[8],_=r[9],m=r[10],g=r[11],p=r[12],v=r[13],x=r[14],y=r[15];if(i[0].setComponents(l-s,f-c,g-d,y-p).normalize(),i[1].setComponents(l+s,f+c,g+d,y+p).normalize(),i[2].setComponents(l+a,f+u,g+_,y+v).normalize(),i[3].setComponents(l-a,f-u,g-_,y-v).normalize(),i[4].setComponents(l-o,f-h,g-m,y-x).normalize(),t===Hr)i[5].setComponents(l+o,f+h,g+m,y+x).normalize();else if(t===ph)i[5].setComponents(o,h,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Qs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Qs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Qs)}intersectsSprite(e){return Qs.center.set(0,0,0),Qs.radius=.7071067811865476,Qs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Qs)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Qu.x=r.normal.x>0?e.max.x:e.min.x,Qu.y=r.normal.y>0?e.max.y:e.min.y,Qu.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Qu)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function SE(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function PR(n){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,h=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),o.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){const u=l.array,h=l.updateRanges;if(n.bindBuffer(c,o),h.length===0)n.bufferSubData(c,0,u);else{h.sort((d,_)=>d.start-_.start);let f=0;for(let d=1;d<h.length;d++){const _=h[f],m=h[d];m.start<=_.start+_.count+1?_.count=Math.max(_.count,m.start+m.count-_.start):(++f,h[f]=m)}h.length=f+1;for(let d=0,_=h.length;d<_;d++){const m=h[d];n.bufferSubData(c,m.start*u.BYTES_PER_ELEMENT,u,m.start,m.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}class Vh extends Tr{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,h=e/o,f=t/l,d=[],_=[],m=[],g=[];for(let p=0;p<u;p++){const v=p*f-a;for(let x=0;x<c;x++){const y=x*h-s;_.push(y,-v,0),m.push(0,0,1),g.push(x/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<o;v++){const x=v+c*p,y=v+c*(p+1),w=v+1+c*(p+1),T=v+1+c*p;d.push(x,y,T),d.push(y,w,T)}this.setIndex(d),this.setAttribute("position",new Nn(_,3)),this.setAttribute("normal",new Nn(m,3)),this.setAttribute("uv",new Nn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vh(e.width,e.height,e.widthSegments,e.heightSegments)}}var LR=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,NR=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,DR=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,IR=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,UR=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,FR=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,OR=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,kR=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zR=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,BR=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,VR=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,HR=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,GR=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,WR=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,XR=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,jR=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,YR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$R=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qR=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,KR=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ZR=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,QR=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,JR=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,eb=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,tb=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,nb=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ib=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,rb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ab=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ob="gl_FragColor = linearToOutputTexel( gl_FragColor );",lb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,cb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ub=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,fb=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,hb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,db=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,pb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,mb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,gb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_b=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vb=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,xb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,yb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Sb=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Mb=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Eb=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Tb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wb=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ab=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Cb=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Rb=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,bb=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Pb=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Lb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Nb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Db=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ib=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ub=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fb=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ob=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,kb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Bb=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Hb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Gb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Wb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Xb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jb=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Yb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$b=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,qb=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Kb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Jb=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,eP=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,tP=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,nP=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iP=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,rP=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sP=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,aP=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,oP=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,lP=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cP=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,uP=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fP=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hP=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,dP=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,pP=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,mP=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,gP=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_P=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,vP=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xP=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,yP=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,SP=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,MP=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,EP=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,TP=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,wP=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,AP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,CP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,RP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,bP=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const PP=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,LP=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,NP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,DP=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,IP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,UP=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,FP=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,OP=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,kP=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,zP=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,BP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,VP=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,HP=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,GP=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,WP=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,XP=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jP=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,YP=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$P=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,qP=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,KP=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ZP=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,QP=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,JP=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,e3=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,t3=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,n3=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,i3=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,r3=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,s3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,a3=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,o3=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,l3=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,c3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,nt={alphahash_fragment:LR,alphahash_pars_fragment:NR,alphamap_fragment:DR,alphamap_pars_fragment:IR,alphatest_fragment:UR,alphatest_pars_fragment:FR,aomap_fragment:OR,aomap_pars_fragment:kR,batching_pars_vertex:zR,batching_vertex:BR,begin_vertex:VR,beginnormal_vertex:HR,bsdfs:GR,iridescence_fragment:WR,bumpmap_pars_fragment:XR,clipping_planes_fragment:jR,clipping_planes_pars_fragment:YR,clipping_planes_pars_vertex:$R,clipping_planes_vertex:qR,color_fragment:KR,color_pars_fragment:ZR,color_pars_vertex:QR,color_vertex:JR,common:eb,cube_uv_reflection_fragment:tb,defaultnormal_vertex:nb,displacementmap_pars_vertex:ib,displacementmap_vertex:rb,emissivemap_fragment:sb,emissivemap_pars_fragment:ab,colorspace_fragment:ob,colorspace_pars_fragment:lb,envmap_fragment:cb,envmap_common_pars_fragment:ub,envmap_pars_fragment:fb,envmap_pars_vertex:hb,envmap_physical_pars_fragment:Eb,envmap_vertex:db,fog_vertex:pb,fog_pars_vertex:mb,fog_fragment:gb,fog_pars_fragment:_b,gradientmap_pars_fragment:vb,lightmap_pars_fragment:xb,lights_lambert_fragment:yb,lights_lambert_pars_fragment:Sb,lights_pars_begin:Mb,lights_toon_fragment:Tb,lights_toon_pars_fragment:wb,lights_phong_fragment:Ab,lights_phong_pars_fragment:Cb,lights_physical_fragment:Rb,lights_physical_pars_fragment:bb,lights_fragment_begin:Pb,lights_fragment_maps:Lb,lights_fragment_end:Nb,logdepthbuf_fragment:Db,logdepthbuf_pars_fragment:Ib,logdepthbuf_pars_vertex:Ub,logdepthbuf_vertex:Fb,map_fragment:Ob,map_pars_fragment:kb,map_particle_fragment:zb,map_particle_pars_fragment:Bb,metalnessmap_fragment:Vb,metalnessmap_pars_fragment:Hb,morphinstance_vertex:Gb,morphcolor_vertex:Wb,morphnormal_vertex:Xb,morphtarget_pars_vertex:jb,morphtarget_vertex:Yb,normal_fragment_begin:$b,normal_fragment_maps:qb,normal_pars_fragment:Kb,normal_pars_vertex:Zb,normal_vertex:Qb,normalmap_pars_fragment:Jb,clearcoat_normal_fragment_begin:eP,clearcoat_normal_fragment_maps:tP,clearcoat_pars_fragment:nP,iridescence_pars_fragment:iP,opaque_fragment:rP,packing:sP,premultiplied_alpha_fragment:aP,project_vertex:oP,dithering_fragment:lP,dithering_pars_fragment:cP,roughnessmap_fragment:uP,roughnessmap_pars_fragment:fP,shadowmap_pars_fragment:hP,shadowmap_pars_vertex:dP,shadowmap_vertex:pP,shadowmask_pars_fragment:mP,skinbase_vertex:gP,skinning_pars_vertex:_P,skinning_vertex:vP,skinnormal_vertex:xP,specularmap_fragment:yP,specularmap_pars_fragment:SP,tonemapping_fragment:MP,tonemapping_pars_fragment:EP,transmission_fragment:TP,transmission_pars_fragment:wP,uv_pars_fragment:AP,uv_pars_vertex:CP,uv_vertex:RP,worldpos_vertex:bP,background_vert:PP,background_frag:LP,backgroundCube_vert:NP,backgroundCube_frag:DP,cube_vert:IP,cube_frag:UP,depth_vert:FP,depth_frag:OP,distanceRGBA_vert:kP,distanceRGBA_frag:zP,equirect_vert:BP,equirect_frag:VP,linedashed_vert:HP,linedashed_frag:GP,meshbasic_vert:WP,meshbasic_frag:XP,meshlambert_vert:jP,meshlambert_frag:YP,meshmatcap_vert:$P,meshmatcap_frag:qP,meshnormal_vert:KP,meshnormal_frag:ZP,meshphong_vert:QP,meshphong_frag:JP,meshphysical_vert:e3,meshphysical_frag:t3,meshtoon_vert:n3,meshtoon_frag:i3,points_vert:r3,points_frag:s3,shadow_vert:a3,shadow_frag:o3,sprite_vert:l3,sprite_frag:c3},Re={common:{diffuse:{value:new Tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new tt}},envmap:{envMap:{value:null},envMapRotation:{value:new tt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new tt},normalScale:{value:new yt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0},uvTransform:{value:new tt}},sprite:{diffuse:{value:new Tt(16777215)},opacity:{value:1},center:{value:new yt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}}},hr={basic:{uniforms:On([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:nt.meshbasic_vert,fragmentShader:nt.meshbasic_frag},lambert:{uniforms:On([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new Tt(0)}}]),vertexShader:nt.meshlambert_vert,fragmentShader:nt.meshlambert_frag},phong:{uniforms:On([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new Tt(0)},specular:{value:new Tt(1118481)},shininess:{value:30}}]),vertexShader:nt.meshphong_vert,fragmentShader:nt.meshphong_frag},standard:{uniforms:On([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new Tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag},toon:{uniforms:On([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new Tt(0)}}]),vertexShader:nt.meshtoon_vert,fragmentShader:nt.meshtoon_frag},matcap:{uniforms:On([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:nt.meshmatcap_vert,fragmentShader:nt.meshmatcap_frag},points:{uniforms:On([Re.points,Re.fog]),vertexShader:nt.points_vert,fragmentShader:nt.points_frag},dashed:{uniforms:On([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nt.linedashed_vert,fragmentShader:nt.linedashed_frag},depth:{uniforms:On([Re.common,Re.displacementmap]),vertexShader:nt.depth_vert,fragmentShader:nt.depth_frag},normal:{uniforms:On([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:nt.meshnormal_vert,fragmentShader:nt.meshnormal_frag},sprite:{uniforms:On([Re.sprite,Re.fog]),vertexShader:nt.sprite_vert,fragmentShader:nt.sprite_frag},background:{uniforms:{uvTransform:{value:new tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nt.background_vert,fragmentShader:nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new tt}},vertexShader:nt.backgroundCube_vert,fragmentShader:nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nt.cube_vert,fragmentShader:nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nt.equirect_vert,fragmentShader:nt.equirect_frag},distanceRGBA:{uniforms:On([Re.common,Re.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nt.distanceRGBA_vert,fragmentShader:nt.distanceRGBA_frag},shadow:{uniforms:On([Re.lights,Re.fog,{color:{value:new Tt(0)},opacity:{value:1}}]),vertexShader:nt.shadow_vert,fragmentShader:nt.shadow_frag}};hr.physical={uniforms:On([hr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new tt},clearcoatNormalScale:{value:new yt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new tt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new tt},sheen:{value:0},sheenColor:{value:new Tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new tt},transmissionSamplerSize:{value:new yt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new tt},attenuationDistance:{value:0},attenuationColor:{value:new Tt(0)},specularColor:{value:new Tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new tt},anisotropyVector:{value:new yt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new tt}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag};const Ju={r:0,b:0,g:0},Js=new Oa,u3=new nn;function f3(n,e,t,i,r,s,a){const o=new Tt(0);let l=s===!0?0:1,c,u,h=null,f=0,d=null;function _(v){let x=v.isScene===!0?v.background:null;return x&&x.isTexture&&(x=(v.backgroundBlurriness>0?t:e).get(x)),x}function m(v){let x=!1;const y=_(v);y===null?p(o,l):y&&y.isColor&&(p(y,1),x=!0);const w=n.xr.getEnvironmentBlendMode();w==="additive"?i.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(v,x){const y=_(x);y&&(y.isCubeTexture||y.mapping===kh)?(u===void 0&&(u=new tr(new iu(1,1,1),new Hs({name:"BackgroundCubeMaterial",uniforms:cl(hr.backgroundCube.uniforms),vertexShader:hr.backgroundCube.vertexShader,fragmentShader:hr.backgroundCube.fragmentShader,side:si,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,T,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Js.copy(x.backgroundRotation),Js.x*=-1,Js.y*=-1,Js.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Js.y*=-1,Js.z*=-1),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(u3.makeRotationFromEuler(Js)),u.material.toneMapped=ht.getTransfer(y.colorSpace)!==Et,(h!==y||f!==y.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,h=y,f=y.version,d=n.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new tr(new Vh(2,2),new Hs({name:"BackgroundMaterial",uniforms:cl(hr.background.uniforms),vertexShader:hr.background.vertexShader,fragmentShader:hr.background.fragmentShader,side:Vs,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=ht.getTransfer(y.colorSpace)!==Et,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||f!==y.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,h=y,f=y.version,d=n.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function p(v,x){v.getRGB(Ju,_E(n)),i.buffers.color.setClear(Ju.r,Ju.g,Ju.b,x,a)}return{getClearColor:function(){return o},setClearColor:function(v,x=1){o.set(v),l=x,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,p(o,l)},render:m,addToRenderList:g}}function h3(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,a=!1;function o(S,P,I,U,k){let B=!1;const V=h(U,I,P);s!==V&&(s=V,c(s.object)),B=d(S,U,I,k),B&&_(S,U,I,k),k!==null&&e.update(k,n.ELEMENT_ARRAY_BUFFER),(B||a)&&(a=!1,y(S,P,I,U),k!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return n.createVertexArray()}function c(S){return n.bindVertexArray(S)}function u(S){return n.deleteVertexArray(S)}function h(S,P,I){const U=I.wireframe===!0;let k=i[S.id];k===void 0&&(k={},i[S.id]=k);let B=k[P.id];B===void 0&&(B={},k[P.id]=B);let V=B[U];return V===void 0&&(V=f(l()),B[U]=V),V}function f(S){const P=[],I=[],U=[];for(let k=0;k<t;k++)P[k]=0,I[k]=0,U[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:I,attributeDivisors:U,object:S,attributes:{},index:null}}function d(S,P,I,U){const k=s.attributes,B=P.attributes;let V=0;const z=I.getAttributes();for(const D in z)if(z[D].location>=0){const L=k[D];let Q=B[D];if(Q===void 0&&(D==="instanceMatrix"&&S.instanceMatrix&&(Q=S.instanceMatrix),D==="instanceColor"&&S.instanceColor&&(Q=S.instanceColor)),L===void 0||L.attribute!==Q||Q&&L.data!==Q.data)return!0;V++}return s.attributesNum!==V||s.index!==U}function _(S,P,I,U){const k={},B=P.attributes;let V=0;const z=I.getAttributes();for(const D in z)if(z[D].location>=0){let L=B[D];L===void 0&&(D==="instanceMatrix"&&S.instanceMatrix&&(L=S.instanceMatrix),D==="instanceColor"&&S.instanceColor&&(L=S.instanceColor));const Q={};Q.attribute=L,L&&L.data&&(Q.data=L.data),k[D]=Q,V++}s.attributes=k,s.attributesNum=V,s.index=U}function m(){const S=s.newAttributes;for(let P=0,I=S.length;P<I;P++)S[P]=0}function g(S){p(S,0)}function p(S,P){const I=s.newAttributes,U=s.enabledAttributes,k=s.attributeDivisors;I[S]=1,U[S]===0&&(n.enableVertexAttribArray(S),U[S]=1),k[S]!==P&&(n.vertexAttribDivisor(S,P),k[S]=P)}function v(){const S=s.newAttributes,P=s.enabledAttributes;for(let I=0,U=P.length;I<U;I++)P[I]!==S[I]&&(n.disableVertexAttribArray(I),P[I]=0)}function x(S,P,I,U,k,B,V){V===!0?n.vertexAttribIPointer(S,P,I,k,B):n.vertexAttribPointer(S,P,I,U,k,B)}function y(S,P,I,U){m();const k=U.attributes,B=I.getAttributes(),V=P.defaultAttributeValues;for(const z in B){const D=B[z];if(D.location>=0){let Y=k[z];if(Y===void 0&&(z==="instanceMatrix"&&S.instanceMatrix&&(Y=S.instanceMatrix),z==="instanceColor"&&S.instanceColor&&(Y=S.instanceColor)),Y!==void 0){const L=Y.normalized,Q=Y.itemSize,se=e.get(Y);if(se===void 0)continue;const Te=se.buffer,X=se.type,J=se.bytesPerElement,le=X===n.INT||X===n.UNSIGNED_INT||Y.gpuType===z_;if(Y.isInterleavedBufferAttribute){const re=Y.data,ae=re.stride,de=Y.offset;if(re.isInstancedInterleavedBuffer){for(let Ne=0;Ne<D.locationSize;Ne++)p(D.location+Ne,re.meshPerAttribute);S.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Ne=0;Ne<D.locationSize;Ne++)g(D.location+Ne);n.bindBuffer(n.ARRAY_BUFFER,Te);for(let Ne=0;Ne<D.locationSize;Ne++)x(D.location+Ne,Q/D.locationSize,X,L,ae*J,(de+Q/D.locationSize*Ne)*J,le)}else{if(Y.isInstancedBufferAttribute){for(let re=0;re<D.locationSize;re++)p(D.location+re,Y.meshPerAttribute);S.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let re=0;re<D.locationSize;re++)g(D.location+re);n.bindBuffer(n.ARRAY_BUFFER,Te);for(let re=0;re<D.locationSize;re++)x(D.location+re,Q/D.locationSize,X,L,Q*J,Q/D.locationSize*re*J,le)}}else if(V!==void 0){const L=V[z];if(L!==void 0)switch(L.length){case 2:n.vertexAttrib2fv(D.location,L);break;case 3:n.vertexAttrib3fv(D.location,L);break;case 4:n.vertexAttrib4fv(D.location,L);break;default:n.vertexAttrib1fv(D.location,L)}}}}v()}function w(){A();for(const S in i){const P=i[S];for(const I in P){const U=P[I];for(const k in U)u(U[k].object),delete U[k];delete P[I]}delete i[S]}}function T(S){if(i[S.id]===void 0)return;const P=i[S.id];for(const I in P){const U=P[I];for(const k in U)u(U[k].object),delete U[k];delete P[I]}delete i[S.id]}function M(S){for(const P in i){const I=i[P];if(I[S.id]===void 0)continue;const U=I[S.id];for(const k in U)u(U[k].object),delete U[k];delete I[S.id]}}function A(){E(),a=!0,s!==r&&(s=r,c(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:A,resetDefaultState:E,dispose:w,releaseStatesOfGeometry:T,releaseStatesOfProgram:M,initAttributes:m,enableAttribute:g,disableUnusedAttributes:v}}function d3(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function a(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),t.update(u,i,h))}function o(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let d=0;for(let _=0;_<h;_++)d+=u[_];t.update(d,i,1)}function l(c,u,h,f){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let _=0;_<c.length;_++)a(c[_],u[_],f[_]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,h);let _=0;for(let m=0;m<h;m++)_+=u[m]*f[m];t.update(_,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function p3(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const M=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(M){return!(M!==er&&i.convert(M)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(M){const A=M===Jc&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(M!==Qr&&i.convert(M)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&M!==Vr&&!A)}function l(M){if(M==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),x=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),w=_>0,T=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:_,maxTextureSize:m,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:v,maxVaryings:x,maxFragmentUniforms:y,vertexTextures:w,maxSamples:T}}function m3(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new aa,o=new tt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||i!==0||r;return r=f,i=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const _=h.clippingPlanes,m=h.clipIntersection,g=h.clipShadows,p=n.get(h);if(!r||_===null||_.length===0||s&&!g)s?u(null):c();else{const v=s?0:i,x=v*4;let y=p.clippingState||null;l.value=y,y=u(_,f,x,d);for(let w=0;w!==x;++w)y[w]=t[w];p.clippingState=y,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,d,_){const m=h!==null?h.length:0;let g=null;if(m!==0){if(g=l.value,_!==!0||g===null){const p=d+m*4,v=f.matrixWorldInverse;o.getNormalMatrix(v),(g===null||g.length<p)&&(g=new Float32Array(p));for(let x=0,y=d;x!==m;++x,y+=4)a.copy(h[x]).applyMatrix4(v,o),a.normal.toArray(g,y),g[y+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,g}}function g3(n){let e=new WeakMap;function t(a,o){return o===km?a.mapping=sl:o===zm&&(a.mapping=al),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===km||o===zm)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new CR(l.height);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class _3 extends vE{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ro=4,yx=[.125,.215,.35,.446,.526,.582],ca=20,ep=new _3,Sx=new Tt;let tp=null,np=0,ip=0,rp=!1;const oa=(1+Math.sqrt(5))/2,oo=1/oa,Mx=[new K(-oa,oo,0),new K(oa,oo,0),new K(-oo,0,oa),new K(oo,0,oa),new K(0,oa,-oo),new K(0,oa,oo),new K(-1,1,-1),new K(1,1,-1),new K(-1,1,1),new K(1,1,1)];class Ex{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){tp=this._renderer.getRenderTarget(),np=this._renderer.getActiveCubeFace(),ip=this._renderer.getActiveMipmapLevel(),rp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ax(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(tp,np,ip),this._renderer.xr.enabled=rp,e.scissorTest=!1,ef(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===sl||e.mapping===al?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),tp=this._renderer.getRenderTarget(),np=this._renderer.getActiveCubeFace(),ip=this._renderer.getActiveMipmapLevel(),rp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:_r,minFilter:_r,generateMipmaps:!1,type:Jc,format:er,colorSpace:dl,depthBuffer:!1},r=Tx(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Tx(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=v3(s)),this._blurMaterial=x3(s,e,t)}return r}_compileMaterial(e){const t=new tr(this._lodPlanes[0],e);this._renderer.compile(t,ep)}_sceneToCubeUV(e,t,i,r){const o=new Oi(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Sx),u.toneMapping=Is,u.autoClear=!1;const d=new gh({name:"PMREM.Background",side:si,depthWrite:!1,depthTest:!1}),_=new tr(new iu,d);let m=!1;const g=e.background;g?g.isColor&&(d.color.copy(g),e.background=null,m=!0):(d.color.copy(Sx),m=!0);for(let p=0;p<6;p++){const v=p%3;v===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):v===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const x=this._cubeSize;ef(r,v*x,p>2?x:0,x,x),u.setRenderTarget(r),m&&u.render(_,o),u.render(e,o)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=g}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===sl||e.mapping===al;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ax()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wx());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new tr(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;ef(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,ep)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Mx[(r-s-1)%Mx.length];this._blur(e,s-1,s,a,o)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new tr(this._lodPlanes[r],c),f=c.uniforms,d=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*ca-1),m=s/_,g=isFinite(s)?1+Math.floor(u*m):ca;g>ca&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${ca}`);const p=[];let v=0;for(let M=0;M<ca;++M){const A=M/m,E=Math.exp(-A*A/2);p.push(E),M===0?v+=E:M<g&&(v+=2*E)}for(let M=0;M<p.length;M++)p[M]=p[M]/v;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:x}=this;f.dTheta.value=_,f.mipInt.value=x-i;const y=this._sizeLods[r],w=3*y*(r>x-Ro?r-x+Ro:0),T=4*(this._cubeSize-y);ef(t,w,T,3*y,2*y),l.setRenderTarget(t),l.render(h,ep)}}function v3(n){const e=[],t=[],i=[];let r=n;const s=n-Ro+1+yx.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>n-Ro?l=yx[a-n+Ro-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,_=6,m=3,g=2,p=1,v=new Float32Array(m*_*d),x=new Float32Array(g*_*d),y=new Float32Array(p*_*d);for(let T=0;T<d;T++){const M=T%3*2/3-1,A=T>2?0:-1,E=[M,A,0,M+2/3,A,0,M+2/3,A+1,0,M,A,0,M+2/3,A+1,0,M,A+1,0];v.set(E,m*_*T),x.set(f,g*_*T);const S=[T,T,T,T,T,T];y.set(S,p*_*T)}const w=new Tr;w.setAttribute("position",new Sr(v,m)),w.setAttribute("uv",new Sr(x,g)),w.setAttribute("faceIndex",new Sr(y,p)),e.push(w),r>Ro&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Tx(n,e,t){const i=new Fa(n,e,t);return i.texture.mapping=kh,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ef(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function x3(n,e,t){const i=new Float32Array(ca),r=new K(0,1,0);return new Hs({name:"SphericalGaussianBlur",defines:{n:ca,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:j_(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ds,depthTest:!1,depthWrite:!1})}function wx(){return new Hs({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:j_(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ds,depthTest:!1,depthWrite:!1})}function Ax(){return new Hs({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:j_(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ds,depthTest:!1,depthWrite:!1})}function j_(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function y3(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===km||l===zm,u=l===sl||l===al;if(c||u){let h=e.get(o);const f=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new Ex(n)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const d=o.image;return c&&d&&d.height>0||u&&d&&r(d)?(t===null&&(t=new Ex(n)),h=c?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function S3(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&$l("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function M3(n,e,t,i){const r={},s=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);for(const _ in f.morphAttributes){const m=f.morphAttributes[_];for(let g=0,p=m.length;g<p;g++)e.remove(m[g])}f.removeEventListener("dispose",a),delete r[f.id];const d=s.get(f);d&&(e.remove(d),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const _ in f)e.update(f[_],n.ARRAY_BUFFER);const d=h.morphAttributes;for(const _ in d){const m=d[_];for(let g=0,p=m.length;g<p;g++)e.update(m[g],n.ARRAY_BUFFER)}}function c(h){const f=[],d=h.index,_=h.attributes.position;let m=0;if(d!==null){const v=d.array;m=d.version;for(let x=0,y=v.length;x<y;x+=3){const w=v[x+0],T=v[x+1],M=v[x+2];f.push(w,T,T,M,M,w)}}else if(_!==void 0){const v=_.array;m=_.version;for(let x=0,y=v.length/3-1;x<y;x+=3){const w=x+0,T=x+1,M=x+2;f.push(w,T,T,M,M,w)}}else return;const g=new(cE(f)?gE:mE)(f,1);g.version=m;const p=s.get(h);p&&e.remove(p),s.set(h,g)}function u(h){const f=s.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function E3(n,e,t){let i;function r(f){i=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,d){n.drawElements(i,d,s,f*a),t.update(d,i,1)}function c(f,d,_){_!==0&&(n.drawElementsInstanced(i,d,s,f*a,_),t.update(d,i,_))}function u(f,d,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,f,0,_);let g=0;for(let p=0;p<_;p++)g+=d[p];t.update(g,i,1)}function h(f,d,_,m){if(_===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<f.length;p++)c(f[p]/a,d[p],m[p]);else{g.multiDrawElementsInstancedWEBGL(i,d,0,s,f,0,m,0,_);let p=0;for(let v=0;v<_;v++)p+=d[v]*m[v];t.update(p,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function T3(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function w3(n,e,t){const i=new WeakMap,r=new Kt;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let f=i.get(o);if(f===void 0||f.count!==h){let S=function(){A.dispose(),i.delete(o),o.removeEventListener("dispose",S)};var d=S;f!==void 0&&f.texture.dispose();const _=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],v=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let y=0;_===!0&&(y=1),m===!0&&(y=2),g===!0&&(y=3);let w=o.attributes.position.count*y,T=1;w>e.maxTextureSize&&(T=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const M=new Float32Array(w*T*4*h),A=new fE(M,w,T,h);A.type=Vr,A.needsUpdate=!0;const E=y*4;for(let P=0;P<h;P++){const I=p[P],U=v[P],k=x[P],B=w*T*4*P;for(let V=0;V<I.count;V++){const z=V*E;_===!0&&(r.fromBufferAttribute(I,V),M[B+z+0]=r.x,M[B+z+1]=r.y,M[B+z+2]=r.z,M[B+z+3]=0),m===!0&&(r.fromBufferAttribute(U,V),M[B+z+4]=r.x,M[B+z+5]=r.y,M[B+z+6]=r.z,M[B+z+7]=0),g===!0&&(r.fromBufferAttribute(k,V),M[B+z+8]=r.x,M[B+z+9]=r.y,M[B+z+10]=r.z,M[B+z+11]=k.itemSize===4?r.w:1)}}f={count:h,texture:A,size:new yt(w,T)},i.set(o,f),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let _=0;for(let g=0;g<c.length;g++)_+=c[g];const m=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",m),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function A3(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return h}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}class ME extends Er{constructor(e,t,i,r,s,a,o,l,c,u=Go){if(u!==Go&&u!==ll)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Go&&(i=Ua),i===void 0&&u===ll&&(i=ol),super(null,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:sr,this.minFilter=l!==void 0?l:sr,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const EE=new Er,Cx=new ME(1,1),TE=new fE,wE=new uR,AE=new xE,Rx=[],bx=[],Px=new Float32Array(16),Lx=new Float32Array(9),Nx=new Float32Array(4);function ml(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Rx[r];if(s===void 0&&(s=new Float32Array(r),Rx[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function cn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function un(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Hh(n,e){let t=bx[e];t===void 0&&(t=new Int32Array(e),bx[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function C3(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function R3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;n.uniform2fv(this.addr,e),un(t,e)}}function b3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(cn(t,e))return;n.uniform3fv(this.addr,e),un(t,e)}}function P3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;n.uniform4fv(this.addr,e),un(t,e)}}function L3(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(cn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),un(t,e)}else{if(cn(t,i))return;Nx.set(i),n.uniformMatrix2fv(this.addr,!1,Nx),un(t,i)}}function N3(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(cn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),un(t,e)}else{if(cn(t,i))return;Lx.set(i),n.uniformMatrix3fv(this.addr,!1,Lx),un(t,i)}}function D3(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(cn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),un(t,e)}else{if(cn(t,i))return;Px.set(i),n.uniformMatrix4fv(this.addr,!1,Px),un(t,i)}}function I3(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function U3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;n.uniform2iv(this.addr,e),un(t,e)}}function F3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(cn(t,e))return;n.uniform3iv(this.addr,e),un(t,e)}}function O3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;n.uniform4iv(this.addr,e),un(t,e)}}function k3(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function z3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;n.uniform2uiv(this.addr,e),un(t,e)}}function B3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(cn(t,e))return;n.uniform3uiv(this.addr,e),un(t,e)}}function V3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;n.uniform4uiv(this.addr,e),un(t,e)}}function H3(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Cx.compareFunction=lE,s=Cx):s=EE,t.setTexture2D(e||s,r)}function G3(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||wE,r)}function W3(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||AE,r)}function X3(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||TE,r)}function j3(n){switch(n){case 5126:return C3;case 35664:return R3;case 35665:return b3;case 35666:return P3;case 35674:return L3;case 35675:return N3;case 35676:return D3;case 5124:case 35670:return I3;case 35667:case 35671:return U3;case 35668:case 35672:return F3;case 35669:case 35673:return O3;case 5125:return k3;case 36294:return z3;case 36295:return B3;case 36296:return V3;case 35678:case 36198:case 36298:case 36306:case 35682:return H3;case 35679:case 36299:case 36307:return G3;case 35680:case 36300:case 36308:case 36293:return W3;case 36289:case 36303:case 36311:case 36292:return X3}}function Y3(n,e){n.uniform1fv(this.addr,e)}function $3(n,e){const t=ml(e,this.size,2);n.uniform2fv(this.addr,t)}function q3(n,e){const t=ml(e,this.size,3);n.uniform3fv(this.addr,t)}function K3(n,e){const t=ml(e,this.size,4);n.uniform4fv(this.addr,t)}function Z3(n,e){const t=ml(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Q3(n,e){const t=ml(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function J3(n,e){const t=ml(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function eL(n,e){n.uniform1iv(this.addr,e)}function tL(n,e){n.uniform2iv(this.addr,e)}function nL(n,e){n.uniform3iv(this.addr,e)}function iL(n,e){n.uniform4iv(this.addr,e)}function rL(n,e){n.uniform1uiv(this.addr,e)}function sL(n,e){n.uniform2uiv(this.addr,e)}function aL(n,e){n.uniform3uiv(this.addr,e)}function oL(n,e){n.uniform4uiv(this.addr,e)}function lL(n,e,t){const i=this.cache,r=e.length,s=Hh(t,r);cn(i,s)||(n.uniform1iv(this.addr,s),un(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||EE,s[a])}function cL(n,e,t){const i=this.cache,r=e.length,s=Hh(t,r);cn(i,s)||(n.uniform1iv(this.addr,s),un(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||wE,s[a])}function uL(n,e,t){const i=this.cache,r=e.length,s=Hh(t,r);cn(i,s)||(n.uniform1iv(this.addr,s),un(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||AE,s[a])}function fL(n,e,t){const i=this.cache,r=e.length,s=Hh(t,r);cn(i,s)||(n.uniform1iv(this.addr,s),un(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||TE,s[a])}function hL(n){switch(n){case 5126:return Y3;case 35664:return $3;case 35665:return q3;case 35666:return K3;case 35674:return Z3;case 35675:return Q3;case 35676:return J3;case 5124:case 35670:return eL;case 35667:case 35671:return tL;case 35668:case 35672:return nL;case 35669:case 35673:return iL;case 5125:return rL;case 36294:return sL;case 36295:return aL;case 36296:return oL;case 35678:case 36198:case 36298:case 36306:case 35682:return lL;case 35679:case 36299:case 36307:return cL;case 35680:case 36300:case 36308:case 36293:return uL;case 36289:case 36303:case 36311:case 36292:return fL}}class dL{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=j3(t.type)}}class pL{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=hL(t.type)}}class mL{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const sp=/(\w+)(\])?(\[|\.)?/g;function Dx(n,e){n.seq.push(e),n.map[e.id]=e}function gL(n,e,t){const i=n.name,r=i.length;for(sp.lastIndex=0;;){const s=sp.exec(i),a=sp.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Dx(t,c===void 0?new dL(o,n,e):new pL(o,n,e));break}else{let h=t.map[o];h===void 0&&(h=new mL(o),Dx(t,h)),t=h}}}class Nf{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);gL(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function Ix(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const _L=37297;let vL=0;function xL(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const Ux=new tt;function yL(n){ht._getMatrix(Ux,ht.workingColorSpace,n);const e=`mat3( ${Ux.elements.map(t=>t.toFixed(4))} )`;switch(ht.getTransfer(n)){case zh:return[e,"LinearTransferOETF"];case Et:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Fx(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+xL(n.getShaderSource(e),a)}else return r}function SL(n,e){const t=yL(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function ML(n,e){let t;switch(e){case F2:t="Linear";break;case O2:t="Reinhard";break;case k2:t="Cineon";break;case z2:t="ACESFilmic";break;case V2:t="AgX";break;case H2:t="Neutral";break;case B2:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const tf=new K;function EL(){ht.getLuminanceCoefficients(tf);const n=tf.x.toFixed(4),e=tf.y.toFixed(4),t=tf.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function TL(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ql).join(`
`)}function wL(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function AL(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function ql(n){return n!==""}function Ox(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function kx(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const CL=/^[ \t]*#include +<([\w\d./]+)>/gm;function mg(n){return n.replace(CL,bL)}const RL=new Map;function bL(n,e){let t=nt[e];if(t===void 0){const i=RL.get(e);if(i!==void 0)t=nt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return mg(t)}const PL=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zx(n){return n.replace(PL,LL)}function LL(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Bx(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function NL(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===qM?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===m2?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Lr&&(e="SHADOWMAP_TYPE_VSM"),e}function DL(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case sl:case al:e="ENVMAP_TYPE_CUBE";break;case kh:e="ENVMAP_TYPE_CUBE_UV";break}return e}function IL(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case al:e="ENVMAP_MODE_REFRACTION";break}return e}function UL(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case KM:e="ENVMAP_BLENDING_MULTIPLY";break;case I2:e="ENVMAP_BLENDING_MIX";break;case U2:e="ENVMAP_BLENDING_ADD";break}return e}function FL(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function OL(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=NL(t),c=DL(t),u=IL(t),h=UL(t),f=FL(t),d=TL(t),_=wL(s),m=r.createProgram();let g,p,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ql).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ql).join(`
`),p.length>0&&(p+=`
`)):(g=[Bx(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ql).join(`
`),p=[Bx(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Is?"#define TONE_MAPPING":"",t.toneMapping!==Is?nt.tonemapping_pars_fragment:"",t.toneMapping!==Is?ML("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",nt.colorspace_pars_fragment,SL("linearToOutputTexel",t.outputColorSpace),EL(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ql).join(`
`)),a=mg(a),a=Ox(a,t),a=kx(a,t),o=mg(o),o=Ox(o,t),o=kx(o,t),a=zx(a),o=zx(o),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===Jv?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Jv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=v+g+a,y=v+p+o,w=Ix(r,r.VERTEX_SHADER,x),T=Ix(r,r.FRAGMENT_SHADER,y);r.attachShader(m,w),r.attachShader(m,T),t.index0AttributeName!==void 0?r.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function M(P){if(n.debug.checkShaderErrors){const I=r.getProgramInfoLog(m).trim(),U=r.getShaderInfoLog(w).trim(),k=r.getShaderInfoLog(T).trim();let B=!0,V=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(B=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,m,w,T);else{const z=Fx(r,w,"vertex"),D=Fx(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+I+`
`+z+`
`+D)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(U===""||k==="")&&(V=!1);V&&(P.diagnostics={runnable:B,programLog:I,vertexShader:{log:U,prefix:g},fragmentShader:{log:k,prefix:p}})}r.deleteShader(w),r.deleteShader(T),A=new Nf(r,m),E=AL(r,m)}let A;this.getUniforms=function(){return A===void 0&&M(this),A};let E;this.getAttributes=function(){return E===void 0&&M(this),E};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(m,_L)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=vL++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=w,this.fragmentShader=T,this}let kL=0;class zL{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new BL(e),t.set(e,i)),i}}class BL{constructor(e){this.id=kL++,this.code=e,this.usedTimes=0}}function VL(n,e,t,i,r,s,a){const o=new dE,l=new zL,c=new Set,u=[],h=r.logarithmicDepthBuffer,f=r.vertexTextures;let d=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(E){return c.add(E),E===0?"uv":`uv${E}`}function g(E,S,P,I,U){const k=I.fog,B=U.geometry,V=E.isMeshStandardMaterial?I.environment:null,z=(E.isMeshStandardMaterial?t:e).get(E.envMap||V),D=z&&z.mapping===kh?z.image.height:null,Y=_[E.type];E.precision!==null&&(d=r.getMaxPrecision(E.precision),d!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",d,"instead."));const L=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Q=L!==void 0?L.length:0;let se=0;B.morphAttributes.position!==void 0&&(se=1),B.morphAttributes.normal!==void 0&&(se=2),B.morphAttributes.color!==void 0&&(se=3);let Te,X,J,le;if(Y){const Ce=hr[Y];Te=Ce.vertexShader,X=Ce.fragmentShader}else Te=E.vertexShader,X=E.fragmentShader,l.update(E),J=l.getVertexShaderID(E),le=l.getFragmentShaderID(E);const re=n.getRenderTarget(),ae=n.state.buffers.depth.getReversed(),de=U.isInstancedMesh===!0,Ne=U.isBatchedMesh===!0,ke=!!E.map,De=!!E.matcap,pe=!!z,O=!!E.aoMap,Be=!!E.lightMap,Ae=!!E.bumpMap,G=!!E.normalMap,Se=!!E.displacementMap,We=!!E.emissiveMap,ve=!!E.metalnessMap,N=!!E.roughnessMap,C=E.anisotropy>0,j=E.clearcoat>0,ie=E.dispersion>0,ne=E.iridescence>0,te=E.sheen>0,ye=E.transmission>0,ge=C&&!!E.anisotropyMap,xe=j&&!!E.clearcoatMap,Ke=j&&!!E.clearcoatNormalMap,ce=j&&!!E.clearcoatRoughnessMap,me=ne&&!!E.iridescenceMap,He=ne&&!!E.iridescenceThicknessMap,Ve=te&&!!E.sheenColorMap,be=te&&!!E.sheenRoughnessMap,Qe=!!E.specularMap,Xe=!!E.specularColorMap,rt=!!E.specularIntensityMap,F=ye&&!!E.transmissionMap,oe=ye&&!!E.thicknessMap,Z=!!E.gradientMap,ee=!!E.alphaMap,_e=E.alphaTest>0,Me=!!E.alphaHash,je=!!E.extensions;let ut=Is;E.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(ut=n.toneMapping);const Lt={shaderID:Y,shaderType:E.type,shaderName:E.name,vertexShader:Te,fragmentShader:X,defines:E.defines,customVertexShaderID:J,customFragmentShaderID:le,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:d,batching:Ne,batchingColor:Ne&&U._colorsTexture!==null,instancing:de,instancingColor:de&&U.instanceColor!==null,instancingMorph:de&&U.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:re===null?n.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:dl,alphaToCoverage:!!E.alphaToCoverage,map:ke,matcap:De,envMap:pe,envMapMode:pe&&z.mapping,envMapCubeUVHeight:D,aoMap:O,lightMap:Be,bumpMap:Ae,normalMap:G,displacementMap:f&&Se,emissiveMap:We,normalMapObjectSpace:G&&E.normalMapType===Y2,normalMapTangentSpace:G&&E.normalMapType===j2,metalnessMap:ve,roughnessMap:N,anisotropy:C,anisotropyMap:ge,clearcoat:j,clearcoatMap:xe,clearcoatNormalMap:Ke,clearcoatRoughnessMap:ce,dispersion:ie,iridescence:ne,iridescenceMap:me,iridescenceThicknessMap:He,sheen:te,sheenColorMap:Ve,sheenRoughnessMap:be,specularMap:Qe,specularColorMap:Xe,specularIntensityMap:rt,transmission:ye,transmissionMap:F,thicknessMap:oe,gradientMap:Z,opaque:E.transparent===!1&&E.blending===Ho&&E.alphaToCoverage===!1,alphaMap:ee,alphaTest:_e,alphaHash:Me,combine:E.combine,mapUv:ke&&m(E.map.channel),aoMapUv:O&&m(E.aoMap.channel),lightMapUv:Be&&m(E.lightMap.channel),bumpMapUv:Ae&&m(E.bumpMap.channel),normalMapUv:G&&m(E.normalMap.channel),displacementMapUv:Se&&m(E.displacementMap.channel),emissiveMapUv:We&&m(E.emissiveMap.channel),metalnessMapUv:ve&&m(E.metalnessMap.channel),roughnessMapUv:N&&m(E.roughnessMap.channel),anisotropyMapUv:ge&&m(E.anisotropyMap.channel),clearcoatMapUv:xe&&m(E.clearcoatMap.channel),clearcoatNormalMapUv:Ke&&m(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ce&&m(E.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&m(E.iridescenceMap.channel),iridescenceThicknessMapUv:He&&m(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ve&&m(E.sheenColorMap.channel),sheenRoughnessMapUv:be&&m(E.sheenRoughnessMap.channel),specularMapUv:Qe&&m(E.specularMap.channel),specularColorMapUv:Xe&&m(E.specularColorMap.channel),specularIntensityMapUv:rt&&m(E.specularIntensityMap.channel),transmissionMapUv:F&&m(E.transmissionMap.channel),thicknessMapUv:oe&&m(E.thicknessMap.channel),alphaMapUv:ee&&m(E.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(G||C),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!B.attributes.uv&&(ke||ee),fog:!!k,useFog:E.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:ae,skinning:U.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:se,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:ut,decodeVideoTexture:ke&&E.map.isVideoTexture===!0&&ht.getTransfer(E.map.colorSpace)===Et,decodeVideoTextureEmissive:We&&E.emissiveMap.isVideoTexture===!0&&ht.getTransfer(E.emissiveMap.colorSpace)===Et,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Or,flipSided:E.side===si,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:je&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(je&&E.extensions.multiDraw===!0||Ne)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Lt.vertexUv1s=c.has(1),Lt.vertexUv2s=c.has(2),Lt.vertexUv3s=c.has(3),c.clear(),Lt}function p(E){const S=[];if(E.shaderID?S.push(E.shaderID):(S.push(E.customVertexShaderID),S.push(E.customFragmentShaderID)),E.defines!==void 0)for(const P in E.defines)S.push(P),S.push(E.defines[P]);return E.isRawShaderMaterial===!1&&(v(S,E),x(S,E),S.push(n.outputColorSpace)),S.push(E.customProgramCacheKey),S.join()}function v(E,S){E.push(S.precision),E.push(S.outputColorSpace),E.push(S.envMapMode),E.push(S.envMapCubeUVHeight),E.push(S.mapUv),E.push(S.alphaMapUv),E.push(S.lightMapUv),E.push(S.aoMapUv),E.push(S.bumpMapUv),E.push(S.normalMapUv),E.push(S.displacementMapUv),E.push(S.emissiveMapUv),E.push(S.metalnessMapUv),E.push(S.roughnessMapUv),E.push(S.anisotropyMapUv),E.push(S.clearcoatMapUv),E.push(S.clearcoatNormalMapUv),E.push(S.clearcoatRoughnessMapUv),E.push(S.iridescenceMapUv),E.push(S.iridescenceThicknessMapUv),E.push(S.sheenColorMapUv),E.push(S.sheenRoughnessMapUv),E.push(S.specularMapUv),E.push(S.specularColorMapUv),E.push(S.specularIntensityMapUv),E.push(S.transmissionMapUv),E.push(S.thicknessMapUv),E.push(S.combine),E.push(S.fogExp2),E.push(S.sizeAttenuation),E.push(S.morphTargetsCount),E.push(S.morphAttributeCount),E.push(S.numDirLights),E.push(S.numPointLights),E.push(S.numSpotLights),E.push(S.numSpotLightMaps),E.push(S.numHemiLights),E.push(S.numRectAreaLights),E.push(S.numDirLightShadows),E.push(S.numPointLightShadows),E.push(S.numSpotLightShadows),E.push(S.numSpotLightShadowsWithMaps),E.push(S.numLightProbes),E.push(S.shadowMapType),E.push(S.toneMapping),E.push(S.numClippingPlanes),E.push(S.numClipIntersection),E.push(S.depthPacking)}function x(E,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),E.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),E.push(o.mask)}function y(E){const S=_[E.type];let P;if(S){const I=hr[S];P=ER.clone(I.uniforms)}else P=E.uniforms;return P}function w(E,S){let P;for(let I=0,U=u.length;I<U;I++){const k=u[I];if(k.cacheKey===S){P=k,++P.usedTimes;break}}return P===void 0&&(P=new OL(n,S,E,s),u.push(P)),P}function T(E){if(--E.usedTimes===0){const S=u.indexOf(E);u[S]=u[u.length-1],u.pop(),E.destroy()}}function M(E){l.remove(E)}function A(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:y,acquireProgram:w,releaseProgram:T,releaseShaderCache:M,programs:u,dispose:A}}function HL(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function GL(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Vx(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Hx(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(h,f,d,_,m,g){let p=n[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:_,renderOrder:h.renderOrder,z:m,group:g},n[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=_,p.renderOrder=h.renderOrder,p.z=m,p.group=g),e++,p}function o(h,f,d,_,m,g){const p=a(h,f,d,_,m,g);d.transmission>0?i.push(p):d.transparent===!0?r.push(p):t.push(p)}function l(h,f,d,_,m,g){const p=a(h,f,d,_,m,g);d.transmission>0?i.unshift(p):d.transparent===!0?r.unshift(p):t.unshift(p)}function c(h,f){t.length>1&&t.sort(h||GL),i.length>1&&i.sort(f||Vx),r.length>1&&r.sort(f||Vx)}function u(){for(let h=e,f=n.length;h<f;h++){const d=n[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function WL(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new Hx,n.set(i,[a])):r>=s.length?(a=new Hx,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function XL(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new K,color:new Tt};break;case"SpotLight":t={position:new K,direction:new K,color:new Tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new K,color:new Tt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new K,skyColor:new Tt,groundColor:new Tt};break;case"RectAreaLight":t={color:new Tt,position:new K,halfWidth:new K,halfHeight:new K};break}return n[e.id]=t,t}}}function jL(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let YL=0;function $L(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function qL(n){const e=new XL,t=jL(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new K);const r=new K,s=new nn,a=new nn;function o(c){let u=0,h=0,f=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let d=0,_=0,m=0,g=0,p=0,v=0,x=0,y=0,w=0,T=0,M=0;c.sort($L);for(let E=0,S=c.length;E<S;E++){const P=c[E],I=P.color,U=P.intensity,k=P.distance,B=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=I.r*U,h+=I.g*U,f+=I.b*U;else if(P.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(P.sh.coefficients[V],U);M++}else if(P.isDirectionalLight){const V=e.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const z=P.shadow,D=t.get(P);D.shadowIntensity=z.intensity,D.shadowBias=z.bias,D.shadowNormalBias=z.normalBias,D.shadowRadius=z.radius,D.shadowMapSize=z.mapSize,i.directionalShadow[d]=D,i.directionalShadowMap[d]=B,i.directionalShadowMatrix[d]=P.shadow.matrix,v++}i.directional[d]=V,d++}else if(P.isSpotLight){const V=e.get(P);V.position.setFromMatrixPosition(P.matrixWorld),V.color.copy(I).multiplyScalar(U),V.distance=k,V.coneCos=Math.cos(P.angle),V.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),V.decay=P.decay,i.spot[m]=V;const z=P.shadow;if(P.map&&(i.spotLightMap[w]=P.map,w++,z.updateMatrices(P),P.castShadow&&T++),i.spotLightMatrix[m]=z.matrix,P.castShadow){const D=t.get(P);D.shadowIntensity=z.intensity,D.shadowBias=z.bias,D.shadowNormalBias=z.normalBias,D.shadowRadius=z.radius,D.shadowMapSize=z.mapSize,i.spotShadow[m]=D,i.spotShadowMap[m]=B,y++}m++}else if(P.isRectAreaLight){const V=e.get(P);V.color.copy(I).multiplyScalar(U),V.halfWidth.set(P.width*.5,0,0),V.halfHeight.set(0,P.height*.5,0),i.rectArea[g]=V,g++}else if(P.isPointLight){const V=e.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity),V.distance=P.distance,V.decay=P.decay,P.castShadow){const z=P.shadow,D=t.get(P);D.shadowIntensity=z.intensity,D.shadowBias=z.bias,D.shadowNormalBias=z.normalBias,D.shadowRadius=z.radius,D.shadowMapSize=z.mapSize,D.shadowCameraNear=z.camera.near,D.shadowCameraFar=z.camera.far,i.pointShadow[_]=D,i.pointShadowMap[_]=B,i.pointShadowMatrix[_]=P.shadow.matrix,x++}i.point[_]=V,_++}else if(P.isHemisphereLight){const V=e.get(P);V.skyColor.copy(P.color).multiplyScalar(U),V.groundColor.copy(P.groundColor).multiplyScalar(U),i.hemi[p]=V,p++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Re.LTC_FLOAT_1,i.rectAreaLTC2=Re.LTC_FLOAT_2):(i.rectAreaLTC1=Re.LTC_HALF_1,i.rectAreaLTC2=Re.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;const A=i.hash;(A.directionalLength!==d||A.pointLength!==_||A.spotLength!==m||A.rectAreaLength!==g||A.hemiLength!==p||A.numDirectionalShadows!==v||A.numPointShadows!==x||A.numSpotShadows!==y||A.numSpotMaps!==w||A.numLightProbes!==M)&&(i.directional.length=d,i.spot.length=m,i.rectArea.length=g,i.point.length=_,i.hemi.length=p,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=y+w-T,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=M,A.directionalLength=d,A.pointLength=_,A.spotLength=m,A.rectAreaLength=g,A.hemiLength=p,A.numDirectionalShadows=v,A.numPointShadows=x,A.numSpotShadows=y,A.numSpotMaps=w,A.numLightProbes=M,i.version=YL++)}function l(c,u){let h=0,f=0,d=0,_=0,m=0;const g=u.matrixWorldInverse;for(let p=0,v=c.length;p<v;p++){const x=c[p];if(x.isDirectionalLight){const y=i.directional[h];y.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(g),h++}else if(x.isSpotLight){const y=i.spot[d];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(g),d++}else if(x.isRectAreaLight){const y=i.rectArea[_];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(g),a.identity(),s.copy(x.matrixWorld),s.premultiply(g),a.extractRotation(s),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),_++}else if(x.isPointLight){const y=i.point[f];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(g),f++}else if(x.isHemisphereLight){const y=i.hemi[m];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(g),m++}}}return{setup:o,setupView:l,state:i}}function Gx(n){const e=new qL(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function a(u){i.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function KL(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Gx(n),e.set(r,[o])):s>=a.length?(o=new Gx(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}class ZL extends Bh{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=W2,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class QL extends Bh{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const JL=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,eN=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function tN(n,e,t){let i=new yE;const r=new yt,s=new yt,a=new Kt,o=new ZL({depthPacking:X2}),l=new QL,c={},u=t.maxTextureSize,h={[Vs]:si,[si]:Vs,[Or]:Or},f=new Hs({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new yt},radius:{value:4}},vertexShader:JL,fragmentShader:eN}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const _=new Tr;_.setAttribute("position",new Sr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new tr(_,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=qM;let p=this.type;this.render=function(T,M,A){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;const E=n.getRenderTarget(),S=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),I=n.state;I.setBlending(Ds),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const U=p!==Lr&&this.type===Lr,k=p===Lr&&this.type!==Lr;for(let B=0,V=T.length;B<V;B++){const z=T[B],D=z.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;r.copy(D.mapSize);const Y=D.getFrameExtents();if(r.multiply(Y),s.copy(D.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/Y.x),r.x=s.x*Y.x,D.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/Y.y),r.y=s.y*Y.y,D.mapSize.y=s.y)),D.map===null||U===!0||k===!0){const Q=this.type!==Lr?{minFilter:sr,magFilter:sr}:{};D.map!==null&&D.map.dispose(),D.map=new Fa(r.x,r.y,Q),D.map.texture.name=z.name+".shadowMap",D.camera.updateProjectionMatrix()}n.setRenderTarget(D.map),n.clear();const L=D.getViewportCount();for(let Q=0;Q<L;Q++){const se=D.getViewport(Q);a.set(s.x*se.x,s.y*se.y,s.x*se.z,s.y*se.w),I.viewport(a),D.updateMatrices(z,Q),i=D.getFrustum(),y(M,A,D.camera,z,this.type)}D.isPointLightShadow!==!0&&this.type===Lr&&v(D,A),D.needsUpdate=!1}p=this.type,g.needsUpdate=!1,n.setRenderTarget(E,S,P)};function v(T,M){const A=e.update(m);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Fa(r.x,r.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(M,null,A,f,m,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(M,null,A,d,m,null)}function x(T,M,A,E){let S=null;const P=A.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(P!==void 0)S=P;else if(S=A.isPointLight===!0?l:o,n.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const I=S.uuid,U=M.uuid;let k=c[I];k===void 0&&(k={},c[I]=k);let B=k[U];B===void 0&&(B=S.clone(),k[U]=B,M.addEventListener("dispose",w)),S=B}if(S.visible=M.visible,S.wireframe=M.wireframe,E===Lr?S.side=M.shadowSide!==null?M.shadowSide:M.side:S.side=M.shadowSide!==null?M.shadowSide:h[M.side],S.alphaMap=M.alphaMap,S.alphaTest=M.alphaTest,S.map=M.map,S.clipShadows=M.clipShadows,S.clippingPlanes=M.clippingPlanes,S.clipIntersection=M.clipIntersection,S.displacementMap=M.displacementMap,S.displacementScale=M.displacementScale,S.displacementBias=M.displacementBias,S.wireframeLinewidth=M.wireframeLinewidth,S.linewidth=M.linewidth,A.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const I=n.properties.get(S);I.light=A}return S}function y(T,M,A,E,S){if(T.visible===!1)return;if(T.layers.test(M.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&S===Lr)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,T.matrixWorld);const U=e.update(T),k=T.material;if(Array.isArray(k)){const B=U.groups;for(let V=0,z=B.length;V<z;V++){const D=B[V],Y=k[D.materialIndex];if(Y&&Y.visible){const L=x(T,Y,E,S);T.onBeforeShadow(n,T,M,A,U,L,D),n.renderBufferDirect(A,null,U,L,T,D),T.onAfterShadow(n,T,M,A,U,L,D)}}}else if(k.visible){const B=x(T,k,E,S);T.onBeforeShadow(n,T,M,A,U,B,null),n.renderBufferDirect(A,null,U,B,T,null),T.onAfterShadow(n,T,M,A,U,B,null)}}const I=T.children;for(let U=0,k=I.length;U<k;U++)y(I[U],M,A,E,S)}function w(T){T.target.removeEventListener("dispose",w);for(const A in c){const E=c[A],S=T.target.uuid;S in E&&(E[S].dispose(),delete E[S])}}}const nN={[Lm]:Nm,[Dm]:Fm,[Im]:Om,[rl]:Um,[Nm]:Lm,[Fm]:Dm,[Om]:Im,[Um]:rl};function iN(n,e){function t(){let F=!1;const oe=new Kt;let Z=null;const ee=new Kt(0,0,0,0);return{setMask:function(_e){Z!==_e&&!F&&(n.colorMask(_e,_e,_e,_e),Z=_e)},setLocked:function(_e){F=_e},setClear:function(_e,Me,je,ut,Lt){Lt===!0&&(_e*=ut,Me*=ut,je*=ut),oe.set(_e,Me,je,ut),ee.equals(oe)===!1&&(n.clearColor(_e,Me,je,ut),ee.copy(oe))},reset:function(){F=!1,Z=null,ee.set(-1,0,0,0)}}}function i(){let F=!1,oe=!1,Z=null,ee=null,_e=null;return{setReversed:function(Me){if(oe!==Me){const je=e.get("EXT_clip_control");oe?je.clipControlEXT(je.LOWER_LEFT_EXT,je.ZERO_TO_ONE_EXT):je.clipControlEXT(je.LOWER_LEFT_EXT,je.NEGATIVE_ONE_TO_ONE_EXT);const ut=_e;_e=null,this.setClear(ut)}oe=Me},getReversed:function(){return oe},setTest:function(Me){Me?re(n.DEPTH_TEST):ae(n.DEPTH_TEST)},setMask:function(Me){Z!==Me&&!F&&(n.depthMask(Me),Z=Me)},setFunc:function(Me){if(oe&&(Me=nN[Me]),ee!==Me){switch(Me){case Lm:n.depthFunc(n.NEVER);break;case Nm:n.depthFunc(n.ALWAYS);break;case Dm:n.depthFunc(n.LESS);break;case rl:n.depthFunc(n.LEQUAL);break;case Im:n.depthFunc(n.EQUAL);break;case Um:n.depthFunc(n.GEQUAL);break;case Fm:n.depthFunc(n.GREATER);break;case Om:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ee=Me}},setLocked:function(Me){F=Me},setClear:function(Me){_e!==Me&&(oe&&(Me=1-Me),n.clearDepth(Me),_e=Me)},reset:function(){F=!1,Z=null,ee=null,_e=null,oe=!1}}}function r(){let F=!1,oe=null,Z=null,ee=null,_e=null,Me=null,je=null,ut=null,Lt=null;return{setTest:function(Ce){F||(Ce?re(n.STENCIL_TEST):ae(n.STENCIL_TEST))},setMask:function(Ce){oe!==Ce&&!F&&(n.stencilMask(Ce),oe=Ce)},setFunc:function(Ce,Fe,et){(Z!==Ce||ee!==Fe||_e!==et)&&(n.stencilFunc(Ce,Fe,et),Z=Ce,ee=Fe,_e=et)},setOp:function(Ce,Fe,et){(Me!==Ce||je!==Fe||ut!==et)&&(n.stencilOp(Ce,Fe,et),Me=Ce,je=Fe,ut=et)},setLocked:function(Ce){F=Ce},setClear:function(Ce){Lt!==Ce&&(n.clearStencil(Ce),Lt=Ce)},reset:function(){F=!1,oe=null,Z=null,ee=null,_e=null,Me=null,je=null,ut=null,Lt=null}}}const s=new t,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,d=[],_=null,m=!1,g=null,p=null,v=null,x=null,y=null,w=null,T=null,M=new Tt(0,0,0),A=0,E=!1,S=null,P=null,I=null,U=null,k=null;const B=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,z=0;const D=n.getParameter(n.VERSION);D.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(D)[1]),V=z>=1):D.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(D)[1]),V=z>=2);let Y=null,L={};const Q=n.getParameter(n.SCISSOR_BOX),se=n.getParameter(n.VIEWPORT),Te=new Kt().fromArray(Q),X=new Kt().fromArray(se);function J(F,oe,Z,ee){const _e=new Uint8Array(4),Me=n.createTexture();n.bindTexture(F,Me),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let je=0;je<Z;je++)F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY?n.texImage3D(oe,0,n.RGBA,1,1,ee,0,n.RGBA,n.UNSIGNED_BYTE,_e):n.texImage2D(oe+je,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,_e);return Me}const le={};le[n.TEXTURE_2D]=J(n.TEXTURE_2D,n.TEXTURE_2D,1),le[n.TEXTURE_CUBE_MAP]=J(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),le[n.TEXTURE_2D_ARRAY]=J(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),le[n.TEXTURE_3D]=J(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),re(n.DEPTH_TEST),a.setFunc(rl),Ae(!1),G(Yv),re(n.CULL_FACE),O(Ds);function re(F){u[F]!==!0&&(n.enable(F),u[F]=!0)}function ae(F){u[F]!==!1&&(n.disable(F),u[F]=!1)}function de(F,oe){return h[F]!==oe?(n.bindFramebuffer(F,oe),h[F]=oe,F===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=oe),F===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=oe),!0):!1}function Ne(F,oe){let Z=d,ee=!1;if(F){Z=f.get(oe),Z===void 0&&(Z=[],f.set(oe,Z));const _e=F.textures;if(Z.length!==_e.length||Z[0]!==n.COLOR_ATTACHMENT0){for(let Me=0,je=_e.length;Me<je;Me++)Z[Me]=n.COLOR_ATTACHMENT0+Me;Z.length=_e.length,ee=!0}}else Z[0]!==n.BACK&&(Z[0]=n.BACK,ee=!0);ee&&n.drawBuffers(Z)}function ke(F){return _!==F?(n.useProgram(F),_=F,!0):!1}const De={[la]:n.FUNC_ADD,[_2]:n.FUNC_SUBTRACT,[v2]:n.FUNC_REVERSE_SUBTRACT};De[x2]=n.MIN,De[y2]=n.MAX;const pe={[S2]:n.ZERO,[M2]:n.ONE,[E2]:n.SRC_COLOR,[bm]:n.SRC_ALPHA,[b2]:n.SRC_ALPHA_SATURATE,[C2]:n.DST_COLOR,[w2]:n.DST_ALPHA,[T2]:n.ONE_MINUS_SRC_COLOR,[Pm]:n.ONE_MINUS_SRC_ALPHA,[R2]:n.ONE_MINUS_DST_COLOR,[A2]:n.ONE_MINUS_DST_ALPHA,[P2]:n.CONSTANT_COLOR,[L2]:n.ONE_MINUS_CONSTANT_COLOR,[N2]:n.CONSTANT_ALPHA,[D2]:n.ONE_MINUS_CONSTANT_ALPHA};function O(F,oe,Z,ee,_e,Me,je,ut,Lt,Ce){if(F===Ds){m===!0&&(ae(n.BLEND),m=!1);return}if(m===!1&&(re(n.BLEND),m=!0),F!==g2){if(F!==g||Ce!==E){if((p!==la||y!==la)&&(n.blendEquation(n.FUNC_ADD),p=la,y=la),Ce)switch(F){case Ho:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case $v:n.blendFunc(n.ONE,n.ONE);break;case qv:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Kv:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Ho:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case $v:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case qv:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Kv:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}v=null,x=null,w=null,T=null,M.set(0,0,0),A=0,g=F,E=Ce}return}_e=_e||oe,Me=Me||Z,je=je||ee,(oe!==p||_e!==y)&&(n.blendEquationSeparate(De[oe],De[_e]),p=oe,y=_e),(Z!==v||ee!==x||Me!==w||je!==T)&&(n.blendFuncSeparate(pe[Z],pe[ee],pe[Me],pe[je]),v=Z,x=ee,w=Me,T=je),(ut.equals(M)===!1||Lt!==A)&&(n.blendColor(ut.r,ut.g,ut.b,Lt),M.copy(ut),A=Lt),g=F,E=!1}function Be(F,oe){F.side===Or?ae(n.CULL_FACE):re(n.CULL_FACE);let Z=F.side===si;oe&&(Z=!Z),Ae(Z),F.blending===Ho&&F.transparent===!1?O(Ds):O(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),s.setMask(F.colorWrite);const ee=F.stencilWrite;o.setTest(ee),ee&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),We(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?re(n.SAMPLE_ALPHA_TO_COVERAGE):ae(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ae(F){S!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),S=F)}function G(F){F!==d2?(re(n.CULL_FACE),F!==P&&(F===Yv?n.cullFace(n.BACK):F===p2?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ae(n.CULL_FACE),P=F}function Se(F){F!==I&&(V&&n.lineWidth(F),I=F)}function We(F,oe,Z){F?(re(n.POLYGON_OFFSET_FILL),(U!==oe||k!==Z)&&(n.polygonOffset(oe,Z),U=oe,k=Z)):ae(n.POLYGON_OFFSET_FILL)}function ve(F){F?re(n.SCISSOR_TEST):ae(n.SCISSOR_TEST)}function N(F){F===void 0&&(F=n.TEXTURE0+B-1),Y!==F&&(n.activeTexture(F),Y=F)}function C(F,oe,Z){Z===void 0&&(Y===null?Z=n.TEXTURE0+B-1:Z=Y);let ee=L[Z];ee===void 0&&(ee={type:void 0,texture:void 0},L[Z]=ee),(ee.type!==F||ee.texture!==oe)&&(Y!==Z&&(n.activeTexture(Z),Y=Z),n.bindTexture(F,oe||le[F]),ee.type=F,ee.texture=oe)}function j(){const F=L[Y];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function ie(){try{n.compressedTexImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ne(){try{n.compressedTexImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function te(){try{n.texSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ye(){try{n.texSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ge(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function xe(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ke(){try{n.texStorage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ce(){try{n.texStorage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function me(){try{n.texImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function He(){try{n.texImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ve(F){Te.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),Te.copy(F))}function be(F){X.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),X.copy(F))}function Qe(F,oe){let Z=c.get(oe);Z===void 0&&(Z=new WeakMap,c.set(oe,Z));let ee=Z.get(F);ee===void 0&&(ee=n.getUniformBlockIndex(oe,F.name),Z.set(F,ee))}function Xe(F,oe){const ee=c.get(oe).get(F);l.get(oe)!==ee&&(n.uniformBlockBinding(oe,ee,F.__bindingPointIndex),l.set(oe,ee))}function rt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},Y=null,L={},h={},f=new WeakMap,d=[],_=null,m=!1,g=null,p=null,v=null,x=null,y=null,w=null,T=null,M=new Tt(0,0,0),A=0,E=!1,S=null,P=null,I=null,U=null,k=null,Te.set(0,0,n.canvas.width,n.canvas.height),X.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:re,disable:ae,bindFramebuffer:de,drawBuffers:Ne,useProgram:ke,setBlending:O,setMaterial:Be,setFlipSided:Ae,setCullFace:G,setLineWidth:Se,setPolygonOffset:We,setScissorTest:ve,activeTexture:N,bindTexture:C,unbindTexture:j,compressedTexImage2D:ie,compressedTexImage3D:ne,texImage2D:me,texImage3D:He,updateUBOMapping:Qe,uniformBlockBinding:Xe,texStorage2D:Ke,texStorage3D:ce,texSubImage2D:te,texSubImage3D:ye,compressedTexSubImage2D:ge,compressedTexSubImage3D:xe,scissor:Ve,viewport:be,reset:rt}}function Wx(n,e,t,i){const r=rN(i);switch(t){case tE:return n*e;case iE:return n*e;case rE:return n*e*2;case sE:return n*e/r.components*r.byteLength;case H_:return n*e/r.components*r.byteLength;case aE:return n*e*2/r.components*r.byteLength;case G_:return n*e*2/r.components*r.byteLength;case nE:return n*e*3/r.components*r.byteLength;case er:return n*e*4/r.components*r.byteLength;case W_:return n*e*4/r.components*r.byteLength;case Af:case Cf:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Rf:case bf:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Gm:case Xm:return Math.max(n,16)*Math.max(e,8)/4;case Hm:case Wm:return Math.max(n,8)*Math.max(e,8)/2;case jm:case Ym:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case $m:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case qm:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Km:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Zm:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Qm:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Jm:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case eg:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case tg:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case ng:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case ig:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case rg:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case sg:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case ag:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case og:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case lg:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Pf:case cg:case ug:return Math.ceil(n/4)*Math.ceil(e/4)*16;case oE:case fg:return Math.ceil(n/4)*Math.ceil(e/4)*8;case hg:case dg:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function rN(n){switch(n){case Qr:case QM:return{byteLength:1,components:1};case jc:case JM:case Jc:return{byteLength:2,components:1};case B_:case V_:return{byteLength:2,components:4};case Ua:case z_:case Vr:return{byteLength:4,components:1};case eE:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function sN(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new yt,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(N,C){return d?new OffscreenCanvas(N,C):mh("canvas")}function m(N,C,j){let ie=1;const ne=ve(N);if((ne.width>j||ne.height>j)&&(ie=j/Math.max(ne.width,ne.height)),ie<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const te=Math.floor(ie*ne.width),ye=Math.floor(ie*ne.height);h===void 0&&(h=_(te,ye));const ge=C?_(te,ye):h;return ge.width=te,ge.height=ye,ge.getContext("2d").drawImage(N,0,0,te,ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+te+"x"+ye+")."),ge}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),N;return N}function g(N){return N.generateMipmaps}function p(N){n.generateMipmap(N)}function v(N){return N.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?n.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function x(N,C,j,ie,ne=!1){if(N!==null){if(n[N]!==void 0)return n[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let te=C;if(C===n.RED&&(j===n.FLOAT&&(te=n.R32F),j===n.HALF_FLOAT&&(te=n.R16F),j===n.UNSIGNED_BYTE&&(te=n.R8)),C===n.RED_INTEGER&&(j===n.UNSIGNED_BYTE&&(te=n.R8UI),j===n.UNSIGNED_SHORT&&(te=n.R16UI),j===n.UNSIGNED_INT&&(te=n.R32UI),j===n.BYTE&&(te=n.R8I),j===n.SHORT&&(te=n.R16I),j===n.INT&&(te=n.R32I)),C===n.RG&&(j===n.FLOAT&&(te=n.RG32F),j===n.HALF_FLOAT&&(te=n.RG16F),j===n.UNSIGNED_BYTE&&(te=n.RG8)),C===n.RG_INTEGER&&(j===n.UNSIGNED_BYTE&&(te=n.RG8UI),j===n.UNSIGNED_SHORT&&(te=n.RG16UI),j===n.UNSIGNED_INT&&(te=n.RG32UI),j===n.BYTE&&(te=n.RG8I),j===n.SHORT&&(te=n.RG16I),j===n.INT&&(te=n.RG32I)),C===n.RGB_INTEGER&&(j===n.UNSIGNED_BYTE&&(te=n.RGB8UI),j===n.UNSIGNED_SHORT&&(te=n.RGB16UI),j===n.UNSIGNED_INT&&(te=n.RGB32UI),j===n.BYTE&&(te=n.RGB8I),j===n.SHORT&&(te=n.RGB16I),j===n.INT&&(te=n.RGB32I)),C===n.RGBA_INTEGER&&(j===n.UNSIGNED_BYTE&&(te=n.RGBA8UI),j===n.UNSIGNED_SHORT&&(te=n.RGBA16UI),j===n.UNSIGNED_INT&&(te=n.RGBA32UI),j===n.BYTE&&(te=n.RGBA8I),j===n.SHORT&&(te=n.RGBA16I),j===n.INT&&(te=n.RGBA32I)),C===n.RGB&&j===n.UNSIGNED_INT_5_9_9_9_REV&&(te=n.RGB9_E5),C===n.RGBA){const ye=ne?zh:ht.getTransfer(ie);j===n.FLOAT&&(te=n.RGBA32F),j===n.HALF_FLOAT&&(te=n.RGBA16F),j===n.UNSIGNED_BYTE&&(te=ye===Et?n.SRGB8_ALPHA8:n.RGBA8),j===n.UNSIGNED_SHORT_4_4_4_4&&(te=n.RGBA4),j===n.UNSIGNED_SHORT_5_5_5_1&&(te=n.RGB5_A1)}return(te===n.R16F||te===n.R32F||te===n.RG16F||te===n.RG32F||te===n.RGBA16F||te===n.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function y(N,C){let j;return N?C===null||C===Ua||C===ol?j=n.DEPTH24_STENCIL8:C===Vr?j=n.DEPTH32F_STENCIL8:C===jc&&(j=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):C===null||C===Ua||C===ol?j=n.DEPTH_COMPONENT24:C===Vr?j=n.DEPTH_COMPONENT32F:C===jc&&(j=n.DEPTH_COMPONENT16),j}function w(N,C){return g(N)===!0||N.isFramebufferTexture&&N.minFilter!==sr&&N.minFilter!==_r?Math.log2(Math.max(C.width,C.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?C.mipmaps.length:1}function T(N){const C=N.target;C.removeEventListener("dispose",T),A(C),C.isVideoTexture&&u.delete(C)}function M(N){const C=N.target;C.removeEventListener("dispose",M),S(C)}function A(N){const C=i.get(N);if(C.__webglInit===void 0)return;const j=N.source,ie=f.get(j);if(ie){const ne=ie[C.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&E(N),Object.keys(ie).length===0&&f.delete(j)}i.remove(N)}function E(N){const C=i.get(N);n.deleteTexture(C.__webglTexture);const j=N.source,ie=f.get(j);delete ie[C.__cacheKey],a.memory.textures--}function S(N){const C=i.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),i.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(C.__webglFramebuffer[ie]))for(let ne=0;ne<C.__webglFramebuffer[ie].length;ne++)n.deleteFramebuffer(C.__webglFramebuffer[ie][ne]);else n.deleteFramebuffer(C.__webglFramebuffer[ie]);C.__webglDepthbuffer&&n.deleteRenderbuffer(C.__webglDepthbuffer[ie])}else{if(Array.isArray(C.__webglFramebuffer))for(let ie=0;ie<C.__webglFramebuffer.length;ie++)n.deleteFramebuffer(C.__webglFramebuffer[ie]);else n.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&n.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&n.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let ie=0;ie<C.__webglColorRenderbuffer.length;ie++)C.__webglColorRenderbuffer[ie]&&n.deleteRenderbuffer(C.__webglColorRenderbuffer[ie]);C.__webglDepthRenderbuffer&&n.deleteRenderbuffer(C.__webglDepthRenderbuffer)}const j=N.textures;for(let ie=0,ne=j.length;ie<ne;ie++){const te=i.get(j[ie]);te.__webglTexture&&(n.deleteTexture(te.__webglTexture),a.memory.textures--),i.remove(j[ie])}i.remove(N)}let P=0;function I(){P=0}function U(){const N=P;return N>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+r.maxTextures),P+=1,N}function k(N){const C=[];return C.push(N.wrapS),C.push(N.wrapT),C.push(N.wrapR||0),C.push(N.magFilter),C.push(N.minFilter),C.push(N.anisotropy),C.push(N.internalFormat),C.push(N.format),C.push(N.type),C.push(N.generateMipmaps),C.push(N.premultiplyAlpha),C.push(N.flipY),C.push(N.unpackAlignment),C.push(N.colorSpace),C.join()}function B(N,C){const j=i.get(N);if(N.isVideoTexture&&Se(N),N.isRenderTargetTexture===!1&&N.version>0&&j.__version!==N.version){const ie=N.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(j,N,C);return}}t.bindTexture(n.TEXTURE_2D,j.__webglTexture,n.TEXTURE0+C)}function V(N,C){const j=i.get(N);if(N.version>0&&j.__version!==N.version){X(j,N,C);return}t.bindTexture(n.TEXTURE_2D_ARRAY,j.__webglTexture,n.TEXTURE0+C)}function z(N,C){const j=i.get(N);if(N.version>0&&j.__version!==N.version){X(j,N,C);return}t.bindTexture(n.TEXTURE_3D,j.__webglTexture,n.TEXTURE0+C)}function D(N,C){const j=i.get(N);if(N.version>0&&j.__version!==N.version){J(j,N,C);return}t.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture,n.TEXTURE0+C)}const Y={[Bm]:n.REPEAT,[ma]:n.CLAMP_TO_EDGE,[Vm]:n.MIRRORED_REPEAT},L={[sr]:n.NEAREST,[G2]:n.NEAREST_MIPMAP_NEAREST,[Uu]:n.NEAREST_MIPMAP_LINEAR,[_r]:n.LINEAR,[Ld]:n.LINEAR_MIPMAP_NEAREST,[ga]:n.LINEAR_MIPMAP_LINEAR},Q={[$2]:n.NEVER,[eR]:n.ALWAYS,[q2]:n.LESS,[lE]:n.LEQUAL,[K2]:n.EQUAL,[J2]:n.GEQUAL,[Z2]:n.GREATER,[Q2]:n.NOTEQUAL};function se(N,C){if(C.type===Vr&&e.has("OES_texture_float_linear")===!1&&(C.magFilter===_r||C.magFilter===Ld||C.magFilter===Uu||C.magFilter===ga||C.minFilter===_r||C.minFilter===Ld||C.minFilter===Uu||C.minFilter===ga)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(N,n.TEXTURE_WRAP_S,Y[C.wrapS]),n.texParameteri(N,n.TEXTURE_WRAP_T,Y[C.wrapT]),(N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY)&&n.texParameteri(N,n.TEXTURE_WRAP_R,Y[C.wrapR]),n.texParameteri(N,n.TEXTURE_MAG_FILTER,L[C.magFilter]),n.texParameteri(N,n.TEXTURE_MIN_FILTER,L[C.minFilter]),C.compareFunction&&(n.texParameteri(N,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(N,n.TEXTURE_COMPARE_FUNC,Q[C.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===sr||C.minFilter!==Uu&&C.minFilter!==ga||C.type===Vr&&e.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||i.get(C).__currentAnisotropy){const j=e.get("EXT_texture_filter_anisotropic");n.texParameterf(N,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,r.getMaxAnisotropy())),i.get(C).__currentAnisotropy=C.anisotropy}}}function Te(N,C){let j=!1;N.__webglInit===void 0&&(N.__webglInit=!0,C.addEventListener("dispose",T));const ie=C.source;let ne=f.get(ie);ne===void 0&&(ne={},f.set(ie,ne));const te=k(C);if(te!==N.__cacheKey){ne[te]===void 0&&(ne[te]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,j=!0),ne[te].usedTimes++;const ye=ne[N.__cacheKey];ye!==void 0&&(ne[N.__cacheKey].usedTimes--,ye.usedTimes===0&&E(C)),N.__cacheKey=te,N.__webglTexture=ne[te].texture}return j}function X(N,C,j){let ie=n.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(ie=n.TEXTURE_2D_ARRAY),C.isData3DTexture&&(ie=n.TEXTURE_3D);const ne=Te(N,C),te=C.source;t.bindTexture(ie,N.__webglTexture,n.TEXTURE0+j);const ye=i.get(te);if(te.version!==ye.__version||ne===!0){t.activeTexture(n.TEXTURE0+j);const ge=ht.getPrimaries(ht.workingColorSpace),xe=C.colorSpace===ps?null:ht.getPrimaries(C.colorSpace),Ke=C.colorSpace===ps||ge===xe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,C.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,C.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ke);let ce=m(C.image,!1,r.maxTextureSize);ce=We(C,ce);const me=s.convert(C.format,C.colorSpace),He=s.convert(C.type);let Ve=x(C.internalFormat,me,He,C.colorSpace,C.isVideoTexture);se(ie,C);let be;const Qe=C.mipmaps,Xe=C.isVideoTexture!==!0,rt=ye.__version===void 0||ne===!0,F=te.dataReady,oe=w(C,ce);if(C.isDepthTexture)Ve=y(C.format===ll,C.type),rt&&(Xe?t.texStorage2D(n.TEXTURE_2D,1,Ve,ce.width,ce.height):t.texImage2D(n.TEXTURE_2D,0,Ve,ce.width,ce.height,0,me,He,null));else if(C.isDataTexture)if(Qe.length>0){Xe&&rt&&t.texStorage2D(n.TEXTURE_2D,oe,Ve,Qe[0].width,Qe[0].height);for(let Z=0,ee=Qe.length;Z<ee;Z++)be=Qe[Z],Xe?F&&t.texSubImage2D(n.TEXTURE_2D,Z,0,0,be.width,be.height,me,He,be.data):t.texImage2D(n.TEXTURE_2D,Z,Ve,be.width,be.height,0,me,He,be.data);C.generateMipmaps=!1}else Xe?(rt&&t.texStorage2D(n.TEXTURE_2D,oe,Ve,ce.width,ce.height),F&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ce.width,ce.height,me,He,ce.data)):t.texImage2D(n.TEXTURE_2D,0,Ve,ce.width,ce.height,0,me,He,ce.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){Xe&&rt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,oe,Ve,Qe[0].width,Qe[0].height,ce.depth);for(let Z=0,ee=Qe.length;Z<ee;Z++)if(be=Qe[Z],C.format!==er)if(me!==null)if(Xe){if(F)if(C.layerUpdates.size>0){const _e=Wx(be.width,be.height,C.format,C.type);for(const Me of C.layerUpdates){const je=be.data.subarray(Me*_e/be.data.BYTES_PER_ELEMENT,(Me+1)*_e/be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Z,0,0,Me,be.width,be.height,1,me,je)}C.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Z,0,0,0,be.width,be.height,ce.depth,me,be.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Z,Ve,be.width,be.height,ce.depth,0,be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Xe?F&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Z,0,0,0,be.width,be.height,ce.depth,me,He,be.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Z,Ve,be.width,be.height,ce.depth,0,me,He,be.data)}else{Xe&&rt&&t.texStorage2D(n.TEXTURE_2D,oe,Ve,Qe[0].width,Qe[0].height);for(let Z=0,ee=Qe.length;Z<ee;Z++)be=Qe[Z],C.format!==er?me!==null?Xe?F&&t.compressedTexSubImage2D(n.TEXTURE_2D,Z,0,0,be.width,be.height,me,be.data):t.compressedTexImage2D(n.TEXTURE_2D,Z,Ve,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xe?F&&t.texSubImage2D(n.TEXTURE_2D,Z,0,0,be.width,be.height,me,He,be.data):t.texImage2D(n.TEXTURE_2D,Z,Ve,be.width,be.height,0,me,He,be.data)}else if(C.isDataArrayTexture)if(Xe){if(rt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,oe,Ve,ce.width,ce.height,ce.depth),F)if(C.layerUpdates.size>0){const Z=Wx(ce.width,ce.height,C.format,C.type);for(const ee of C.layerUpdates){const _e=ce.data.subarray(ee*Z/ce.data.BYTES_PER_ELEMENT,(ee+1)*Z/ce.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ee,ce.width,ce.height,1,me,He,_e)}C.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,me,He,ce.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ve,ce.width,ce.height,ce.depth,0,me,He,ce.data);else if(C.isData3DTexture)Xe?(rt&&t.texStorage3D(n.TEXTURE_3D,oe,Ve,ce.width,ce.height,ce.depth),F&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,me,He,ce.data)):t.texImage3D(n.TEXTURE_3D,0,Ve,ce.width,ce.height,ce.depth,0,me,He,ce.data);else if(C.isFramebufferTexture){if(rt)if(Xe)t.texStorage2D(n.TEXTURE_2D,oe,Ve,ce.width,ce.height);else{let Z=ce.width,ee=ce.height;for(let _e=0;_e<oe;_e++)t.texImage2D(n.TEXTURE_2D,_e,Ve,Z,ee,0,me,He,null),Z>>=1,ee>>=1}}else if(Qe.length>0){if(Xe&&rt){const Z=ve(Qe[0]);t.texStorage2D(n.TEXTURE_2D,oe,Ve,Z.width,Z.height)}for(let Z=0,ee=Qe.length;Z<ee;Z++)be=Qe[Z],Xe?F&&t.texSubImage2D(n.TEXTURE_2D,Z,0,0,me,He,be):t.texImage2D(n.TEXTURE_2D,Z,Ve,me,He,be);C.generateMipmaps=!1}else if(Xe){if(rt){const Z=ve(ce);t.texStorage2D(n.TEXTURE_2D,oe,Ve,Z.width,Z.height)}F&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,me,He,ce)}else t.texImage2D(n.TEXTURE_2D,0,Ve,me,He,ce);g(C)&&p(ie),ye.__version=te.version,C.onUpdate&&C.onUpdate(C)}N.__version=C.version}function J(N,C,j){if(C.image.length!==6)return;const ie=Te(N,C),ne=C.source;t.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture,n.TEXTURE0+j);const te=i.get(ne);if(ne.version!==te.__version||ie===!0){t.activeTexture(n.TEXTURE0+j);const ye=ht.getPrimaries(ht.workingColorSpace),ge=C.colorSpace===ps?null:ht.getPrimaries(C.colorSpace),xe=C.colorSpace===ps||ye===ge?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,C.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,C.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const Ke=C.isCompressedTexture||C.image[0].isCompressedTexture,ce=C.image[0]&&C.image[0].isDataTexture,me=[];for(let ee=0;ee<6;ee++)!Ke&&!ce?me[ee]=m(C.image[ee],!0,r.maxCubemapSize):me[ee]=ce?C.image[ee].image:C.image[ee],me[ee]=We(C,me[ee]);const He=me[0],Ve=s.convert(C.format,C.colorSpace),be=s.convert(C.type),Qe=x(C.internalFormat,Ve,be,C.colorSpace),Xe=C.isVideoTexture!==!0,rt=te.__version===void 0||ie===!0,F=ne.dataReady;let oe=w(C,He);se(n.TEXTURE_CUBE_MAP,C);let Z;if(Ke){Xe&&rt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,oe,Qe,He.width,He.height);for(let ee=0;ee<6;ee++){Z=me[ee].mipmaps;for(let _e=0;_e<Z.length;_e++){const Me=Z[_e];C.format!==er?Ve!==null?Xe?F&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,_e,0,0,Me.width,Me.height,Ve,Me.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,_e,Qe,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xe?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,_e,0,0,Me.width,Me.height,Ve,be,Me.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,_e,Qe,Me.width,Me.height,0,Ve,be,Me.data)}}}else{if(Z=C.mipmaps,Xe&&rt){Z.length>0&&oe++;const ee=ve(me[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,oe,Qe,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(ce){Xe?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,me[ee].width,me[ee].height,Ve,be,me[ee].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Qe,me[ee].width,me[ee].height,0,Ve,be,me[ee].data);for(let _e=0;_e<Z.length;_e++){const je=Z[_e].image[ee].image;Xe?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,_e+1,0,0,je.width,je.height,Ve,be,je.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,_e+1,Qe,je.width,je.height,0,Ve,be,je.data)}}else{Xe?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Ve,be,me[ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Qe,Ve,be,me[ee]);for(let _e=0;_e<Z.length;_e++){const Me=Z[_e];Xe?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,_e+1,0,0,Ve,be,Me.image[ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,_e+1,Qe,Ve,be,Me.image[ee])}}}g(C)&&p(n.TEXTURE_CUBE_MAP),te.__version=ne.version,C.onUpdate&&C.onUpdate(C)}N.__version=C.version}function le(N,C,j,ie,ne,te){const ye=s.convert(j.format,j.colorSpace),ge=s.convert(j.type),xe=x(j.internalFormat,ye,ge,j.colorSpace),Ke=i.get(C),ce=i.get(j);if(ce.__renderTarget=C,!Ke.__hasExternalTextures){const me=Math.max(1,C.width>>te),He=Math.max(1,C.height>>te);ne===n.TEXTURE_3D||ne===n.TEXTURE_2D_ARRAY?t.texImage3D(ne,te,xe,me,He,C.depth,0,ye,ge,null):t.texImage2D(ne,te,xe,me,He,0,ye,ge,null)}t.bindFramebuffer(n.FRAMEBUFFER,N),G(C)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ie,ne,ce.__webglTexture,0,Ae(C)):(ne===n.TEXTURE_2D||ne>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ie,ne,ce.__webglTexture,te),t.bindFramebuffer(n.FRAMEBUFFER,null)}function re(N,C,j){if(n.bindRenderbuffer(n.RENDERBUFFER,N),C.depthBuffer){const ie=C.depthTexture,ne=ie&&ie.isDepthTexture?ie.type:null,te=y(C.stencilBuffer,ne),ye=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ge=Ae(C);G(C)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ge,te,C.width,C.height):j?n.renderbufferStorageMultisample(n.RENDERBUFFER,ge,te,C.width,C.height):n.renderbufferStorage(n.RENDERBUFFER,te,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ye,n.RENDERBUFFER,N)}else{const ie=C.textures;for(let ne=0;ne<ie.length;ne++){const te=ie[ne],ye=s.convert(te.format,te.colorSpace),ge=s.convert(te.type),xe=x(te.internalFormat,ye,ge,te.colorSpace),Ke=Ae(C);j&&G(C)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ke,xe,C.width,C.height):G(C)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ke,xe,C.width,C.height):n.renderbufferStorage(n.RENDERBUFFER,xe,C.width,C.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ae(N,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,N),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ie=i.get(C.depthTexture);ie.__renderTarget=C,(!ie.__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),B(C.depthTexture,0);const ne=ie.__webglTexture,te=Ae(C);if(C.depthTexture.format===Go)G(C)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ne,0,te):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ne,0);else if(C.depthTexture.format===ll)G(C)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ne,0,te):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function de(N){const C=i.get(N),j=N.isWebGLCubeRenderTarget===!0;if(C.__boundDepthTexture!==N.depthTexture){const ie=N.depthTexture;if(C.__depthDisposeCallback&&C.__depthDisposeCallback(),ie){const ne=()=>{delete C.__boundDepthTexture,delete C.__depthDisposeCallback,ie.removeEventListener("dispose",ne)};ie.addEventListener("dispose",ne),C.__depthDisposeCallback=ne}C.__boundDepthTexture=ie}if(N.depthTexture&&!C.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");ae(C.__webglFramebuffer,N)}else if(j){C.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)if(t.bindFramebuffer(n.FRAMEBUFFER,C.__webglFramebuffer[ie]),C.__webglDepthbuffer[ie]===void 0)C.__webglDepthbuffer[ie]=n.createRenderbuffer(),re(C.__webglDepthbuffer[ie],N,!1);else{const ne=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,te=C.__webglDepthbuffer[ie];n.bindRenderbuffer(n.RENDERBUFFER,te),n.framebufferRenderbuffer(n.FRAMEBUFFER,ne,n.RENDERBUFFER,te)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer===void 0)C.__webglDepthbuffer=n.createRenderbuffer(),re(C.__webglDepthbuffer,N,!1);else{const ie=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ne=C.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ne),n.framebufferRenderbuffer(n.FRAMEBUFFER,ie,n.RENDERBUFFER,ne)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ne(N,C,j){const ie=i.get(N);C!==void 0&&le(ie.__webglFramebuffer,N,N.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),j!==void 0&&de(N)}function ke(N){const C=N.texture,j=i.get(N),ie=i.get(C);N.addEventListener("dispose",M);const ne=N.textures,te=N.isWebGLCubeRenderTarget===!0,ye=ne.length>1;if(ye||(ie.__webglTexture===void 0&&(ie.__webglTexture=n.createTexture()),ie.__version=C.version,a.memory.textures++),te){j.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(C.mipmaps&&C.mipmaps.length>0){j.__webglFramebuffer[ge]=[];for(let xe=0;xe<C.mipmaps.length;xe++)j.__webglFramebuffer[ge][xe]=n.createFramebuffer()}else j.__webglFramebuffer[ge]=n.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){j.__webglFramebuffer=[];for(let ge=0;ge<C.mipmaps.length;ge++)j.__webglFramebuffer[ge]=n.createFramebuffer()}else j.__webglFramebuffer=n.createFramebuffer();if(ye)for(let ge=0,xe=ne.length;ge<xe;ge++){const Ke=i.get(ne[ge]);Ke.__webglTexture===void 0&&(Ke.__webglTexture=n.createTexture(),a.memory.textures++)}if(N.samples>0&&G(N)===!1){j.__webglMultisampledFramebuffer=n.createFramebuffer(),j.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let ge=0;ge<ne.length;ge++){const xe=ne[ge];j.__webglColorRenderbuffer[ge]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,j.__webglColorRenderbuffer[ge]);const Ke=s.convert(xe.format,xe.colorSpace),ce=s.convert(xe.type),me=x(xe.internalFormat,Ke,ce,xe.colorSpace,N.isXRRenderTarget===!0),He=Ae(N);n.renderbufferStorageMultisample(n.RENDERBUFFER,He,me,N.width,N.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.RENDERBUFFER,j.__webglColorRenderbuffer[ge])}n.bindRenderbuffer(n.RENDERBUFFER,null),N.depthBuffer&&(j.__webglDepthRenderbuffer=n.createRenderbuffer(),re(j.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(te){t.bindTexture(n.TEXTURE_CUBE_MAP,ie.__webglTexture),se(n.TEXTURE_CUBE_MAP,C);for(let ge=0;ge<6;ge++)if(C.mipmaps&&C.mipmaps.length>0)for(let xe=0;xe<C.mipmaps.length;xe++)le(j.__webglFramebuffer[ge][xe],N,C,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,xe);else le(j.__webglFramebuffer[ge],N,C,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);g(C)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ye){for(let ge=0,xe=ne.length;ge<xe;ge++){const Ke=ne[ge],ce=i.get(Ke);t.bindTexture(n.TEXTURE_2D,ce.__webglTexture),se(n.TEXTURE_2D,Ke),le(j.__webglFramebuffer,N,Ke,n.COLOR_ATTACHMENT0+ge,n.TEXTURE_2D,0),g(Ke)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let ge=n.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(ge=N.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ge,ie.__webglTexture),se(ge,C),C.mipmaps&&C.mipmaps.length>0)for(let xe=0;xe<C.mipmaps.length;xe++)le(j.__webglFramebuffer[xe],N,C,n.COLOR_ATTACHMENT0,ge,xe);else le(j.__webglFramebuffer,N,C,n.COLOR_ATTACHMENT0,ge,0);g(C)&&p(ge),t.unbindTexture()}N.depthBuffer&&de(N)}function De(N){const C=N.textures;for(let j=0,ie=C.length;j<ie;j++){const ne=C[j];if(g(ne)){const te=v(N),ye=i.get(ne).__webglTexture;t.bindTexture(te,ye),p(te),t.unbindTexture()}}}const pe=[],O=[];function Be(N){if(N.samples>0){if(G(N)===!1){const C=N.textures,j=N.width,ie=N.height;let ne=n.COLOR_BUFFER_BIT;const te=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ye=i.get(N),ge=C.length>1;if(ge)for(let xe=0;xe<C.length;xe++)t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let xe=0;xe<C.length;xe++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(ne|=n.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(ne|=n.STENCIL_BUFFER_BIT)),ge){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ye.__webglColorRenderbuffer[xe]);const Ke=i.get(C[xe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ke,0)}n.blitFramebuffer(0,0,j,ie,0,0,j,ie,ne,n.NEAREST),l===!0&&(pe.length=0,O.length=0,pe.push(n.COLOR_ATTACHMENT0+xe),N.depthBuffer&&N.resolveDepthBuffer===!1&&(pe.push(te),O.push(te),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,O)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,pe))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ge)for(let xe=0;xe<C.length;xe++){t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.RENDERBUFFER,ye.__webglColorRenderbuffer[xe]);const Ke=i.get(C[xe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.TEXTURE_2D,Ke,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&l){const C=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[C])}}}function Ae(N){return Math.min(r.maxSamples,N.samples)}function G(N){const C=i.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function Se(N){const C=a.render.frame;u.get(N)!==C&&(u.set(N,C),N.update())}function We(N,C){const j=N.colorSpace,ie=N.format,ne=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||j!==dl&&j!==ps&&(ht.getTransfer(j)===Et?(ie!==er||ne!==Qr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",j)),C}function ve(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(c.width=N.naturalWidth||N.width,c.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(c.width=N.displayWidth,c.height=N.displayHeight):(c.width=N.width,c.height=N.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=I,this.setTexture2D=B,this.setTexture2DArray=V,this.setTexture3D=z,this.setTextureCube=D,this.rebindTextures=Ne,this.setupRenderTarget=ke,this.updateRenderTargetMipmap=De,this.updateMultisampleRenderTarget=Be,this.setupDepthRenderbuffer=de,this.setupFrameBufferTexture=le,this.useMultisampledRTT=G}function aN(n,e){function t(i,r=ps){let s;const a=ht.getTransfer(r);if(i===Qr)return n.UNSIGNED_BYTE;if(i===B_)return n.UNSIGNED_SHORT_4_4_4_4;if(i===V_)return n.UNSIGNED_SHORT_5_5_5_1;if(i===eE)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===QM)return n.BYTE;if(i===JM)return n.SHORT;if(i===jc)return n.UNSIGNED_SHORT;if(i===z_)return n.INT;if(i===Ua)return n.UNSIGNED_INT;if(i===Vr)return n.FLOAT;if(i===Jc)return n.HALF_FLOAT;if(i===tE)return n.ALPHA;if(i===nE)return n.RGB;if(i===er)return n.RGBA;if(i===iE)return n.LUMINANCE;if(i===rE)return n.LUMINANCE_ALPHA;if(i===Go)return n.DEPTH_COMPONENT;if(i===ll)return n.DEPTH_STENCIL;if(i===sE)return n.RED;if(i===H_)return n.RED_INTEGER;if(i===aE)return n.RG;if(i===G_)return n.RG_INTEGER;if(i===W_)return n.RGBA_INTEGER;if(i===Af||i===Cf||i===Rf||i===bf)if(a===Et)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Af)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Cf)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Rf)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===bf)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Af)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Cf)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Rf)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===bf)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Hm||i===Gm||i===Wm||i===Xm)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Hm)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Gm)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Wm)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Xm)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===jm||i===Ym||i===$m)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===jm||i===Ym)return a===Et?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===$m)return a===Et?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===qm||i===Km||i===Zm||i===Qm||i===Jm||i===eg||i===tg||i===ng||i===ig||i===rg||i===sg||i===ag||i===og||i===lg)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===qm)return a===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Km)return a===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Zm)return a===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Qm)return a===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Jm)return a===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===eg)return a===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===tg)return a===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ng)return a===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ig)return a===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===rg)return a===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===sg)return a===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ag)return a===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===og)return a===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===lg)return a===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Pf||i===cg||i===ug)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Pf)return a===Et?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===cg)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ug)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===oE||i===fg||i===hg||i===dg)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Pf)return s.COMPRESSED_RED_RGTC1_EXT;if(i===fg)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===hg)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===dg)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ol?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class oN extends Oi{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class nf extends Ei{constructor(){super(),this.isGroup=!0,this.type="Group"}}const lN={type:"move"};class ap{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new nf,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new nf,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new nf,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const m of e.hand.values()){const g=t.getJointPose(m,i),p=this._getHandJoint(c,m);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,_=.005;c.inputState.pinching&&f>d+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(lN)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new nf;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const cN=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,uN=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class fN{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new Er,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Hs({vertexShader:cN,fragmentShader:uN,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new tr(new Vh(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class hN extends pl{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,_=null;const m=new fN,g=t.getContextAttributes();let p=null,v=null;const x=[],y=[],w=new yt;let T=null;const M=new Oi;M.viewport=new Kt;const A=new Oi;A.viewport=new Kt;const E=[M,A],S=new oN;let P=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let J=x[X];return J===void 0&&(J=new ap,x[X]=J),J.getTargetRaySpace()},this.getControllerGrip=function(X){let J=x[X];return J===void 0&&(J=new ap,x[X]=J),J.getGripSpace()},this.getHand=function(X){let J=x[X];return J===void 0&&(J=new ap,x[X]=J),J.getHandSpace()};function U(X){const J=y.indexOf(X.inputSource);if(J===-1)return;const le=x[J];le!==void 0&&(le.update(X.inputSource,X.frame,c||a),le.dispatchEvent({type:X.type,data:X.inputSource}))}function k(){r.removeEventListener("select",U),r.removeEventListener("selectstart",U),r.removeEventListener("selectend",U),r.removeEventListener("squeeze",U),r.removeEventListener("squeezestart",U),r.removeEventListener("squeezeend",U),r.removeEventListener("end",k),r.removeEventListener("inputsourceschange",B);for(let X=0;X<x.length;X++){const J=y[X];J!==null&&(y[X]=null,x[X].disconnect(J))}P=null,I=null,m.reset(),e.setRenderTarget(p),d=null,f=null,h=null,r=null,v=null,Te.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",U),r.addEventListener("selectstart",U),r.addEventListener("selectend",U),r.addEventListener("squeeze",U),r.addEventListener("squeezestart",U),r.addEventListener("squeezeend",U),r.addEventListener("end",k),r.addEventListener("inputsourceschange",B),g.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(w),r.renderState.layers===void 0){const J={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,J),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new Fa(d.framebufferWidth,d.framebufferHeight,{format:er,type:Qr,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let J=null,le=null,re=null;g.depth&&(re=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,J=g.stencil?ll:Go,le=g.stencil?ol:Ua);const ae={colorFormat:t.RGBA8,depthFormat:re,scaleFactor:s};h=new XRWebGLBinding(r,t),f=h.createProjectionLayer(ae),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new Fa(f.textureWidth,f.textureHeight,{format:er,type:Qr,depthTexture:new ME(f.textureWidth,f.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Te.setContext(r),Te.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function B(X){for(let J=0;J<X.removed.length;J++){const le=X.removed[J],re=y.indexOf(le);re>=0&&(y[re]=null,x[re].disconnect(le))}for(let J=0;J<X.added.length;J++){const le=X.added[J];let re=y.indexOf(le);if(re===-1){for(let de=0;de<x.length;de++)if(de>=y.length){y.push(le),re=de;break}else if(y[de]===null){y[de]=le,re=de;break}if(re===-1)break}const ae=x[re];ae&&ae.connect(le)}}const V=new K,z=new K;function D(X,J,le){V.setFromMatrixPosition(J.matrixWorld),z.setFromMatrixPosition(le.matrixWorld);const re=V.distanceTo(z),ae=J.projectionMatrix.elements,de=le.projectionMatrix.elements,Ne=ae[14]/(ae[10]-1),ke=ae[14]/(ae[10]+1),De=(ae[9]+1)/ae[5],pe=(ae[9]-1)/ae[5],O=(ae[8]-1)/ae[0],Be=(de[8]+1)/de[0],Ae=Ne*O,G=Ne*Be,Se=re/(-O+Be),We=Se*-O;if(J.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(We),X.translateZ(Se),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),ae[10]===-1)X.projectionMatrix.copy(J.projectionMatrix),X.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const ve=Ne+Se,N=ke+Se,C=Ae-We,j=G+(re-We),ie=De*ke/N*ve,ne=pe*ke/N*ve;X.projectionMatrix.makePerspective(C,j,ie,ne,ve,N),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function Y(X,J){J===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(J.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;let J=X.near,le=X.far;m.texture!==null&&(m.depthNear>0&&(J=m.depthNear),m.depthFar>0&&(le=m.depthFar)),S.near=A.near=M.near=J,S.far=A.far=M.far=le,(P!==S.near||I!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),P=S.near,I=S.far),M.layers.mask=X.layers.mask|2,A.layers.mask=X.layers.mask|4,S.layers.mask=M.layers.mask|A.layers.mask;const re=X.parent,ae=S.cameras;Y(S,re);for(let de=0;de<ae.length;de++)Y(ae[de],re);ae.length===2?D(S,M,A):S.projectionMatrix.copy(M.projectionMatrix),L(X,S,re)};function L(X,J,le){le===null?X.matrix.copy(J.matrixWorld):(X.matrix.copy(le.matrixWorld),X.matrix.invert(),X.matrix.multiply(J.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(J.projectionMatrix),X.projectionMatrixInverse.copy(J.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=pg*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(X){l=X,f!==null&&(f.fixedFoveation=X),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=X)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(S)};let Q=null;function se(X,J){if(u=J.getViewerPose(c||a),_=J,u!==null){const le=u.views;d!==null&&(e.setRenderTargetFramebuffer(v,d.framebuffer),e.setRenderTarget(v));let re=!1;le.length!==S.cameras.length&&(S.cameras.length=0,re=!0);for(let de=0;de<le.length;de++){const Ne=le[de];let ke=null;if(d!==null)ke=d.getViewport(Ne);else{const pe=h.getViewSubImage(f,Ne);ke=pe.viewport,de===0&&(e.setRenderTargetTextures(v,pe.colorTexture,f.ignoreDepthValues?void 0:pe.depthStencilTexture),e.setRenderTarget(v))}let De=E[de];De===void 0&&(De=new Oi,De.layers.enable(de),De.viewport=new Kt,E[de]=De),De.matrix.fromArray(Ne.transform.matrix),De.matrix.decompose(De.position,De.quaternion,De.scale),De.projectionMatrix.fromArray(Ne.projectionMatrix),De.projectionMatrixInverse.copy(De.projectionMatrix).invert(),De.viewport.set(ke.x,ke.y,ke.width,ke.height),de===0&&(S.matrix.copy(De.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),re===!0&&S.cameras.push(De)}const ae=r.enabledFeatures;if(ae&&ae.includes("depth-sensing")){const de=h.getDepthInformation(le[0]);de&&de.isValid&&de.texture&&m.init(e,de,r.renderState)}}for(let le=0;le<x.length;le++){const re=y[le],ae=x[le];re!==null&&ae!==void 0&&ae.update(re,J,c||a)}Q&&Q(X,J),J.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:J}),_=null}const Te=new SE;Te.setAnimationLoop(se),this.setAnimationLoop=function(X){Q=X},this.dispose=function(){}}}const ea=new Oa,dN=new nn;function pN(n,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,_E(n)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function r(g,p,v,x,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(g,p):p.isMeshToonMaterial?(s(g,p),h(g,p)):p.isMeshPhongMaterial?(s(g,p),u(g,p)):p.isMeshStandardMaterial?(s(g,p),f(g,p),p.isMeshPhysicalMaterial&&d(g,p,y)):p.isMeshMatcapMaterial?(s(g,p),_(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),m(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,v,x):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===si&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===si&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const v=e.get(p),x=v.envMap,y=v.envMapRotation;x&&(g.envMap.value=x,ea.copy(y),ea.x*=-1,ea.y*=-1,ea.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ea.y*=-1,ea.z*=-1),g.envMapRotation.value.setFromMatrix4(dN.makeRotationFromEuler(ea)),g.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,v,x){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*v,g.scale.value=x*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function h(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,v){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===si&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,p){p.matcap&&(g.matcap.value=p.matcap)}function m(g,p){const v=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function mN(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,x){const y=x.program;i.uniformBlockBinding(v,y)}function c(v,x){let y=r[v.id];y===void 0&&(_(v),y=u(v),r[v.id]=y,v.addEventListener("dispose",g));const w=x.program;i.updateUBOMapping(v,w);const T=e.render.frame;s[v.id]!==T&&(f(v),s[v.id]=T)}function u(v){const x=h();v.__bindingPointIndex=x;const y=n.createBuffer(),w=v.__size,T=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,w,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,y),y}function h(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const x=r[v.id],y=v.uniforms,w=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let T=0,M=y.length;T<M;T++){const A=Array.isArray(y[T])?y[T]:[y[T]];for(let E=0,S=A.length;E<S;E++){const P=A[E];if(d(P,T,E,w)===!0){const I=P.__offset,U=Array.isArray(P.value)?P.value:[P.value];let k=0;for(let B=0;B<U.length;B++){const V=U[B],z=m(V);typeof V=="number"||typeof V=="boolean"?(P.__data[0]=V,n.bufferSubData(n.UNIFORM_BUFFER,I+k,P.__data)):V.isMatrix3?(P.__data[0]=V.elements[0],P.__data[1]=V.elements[1],P.__data[2]=V.elements[2],P.__data[3]=0,P.__data[4]=V.elements[3],P.__data[5]=V.elements[4],P.__data[6]=V.elements[5],P.__data[7]=0,P.__data[8]=V.elements[6],P.__data[9]=V.elements[7],P.__data[10]=V.elements[8],P.__data[11]=0):(V.toArray(P.__data,k),k+=z.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,I,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(v,x,y,w){const T=v.value,M=x+"_"+y;if(w[M]===void 0)return typeof T=="number"||typeof T=="boolean"?w[M]=T:w[M]=T.clone(),!0;{const A=w[M];if(typeof T=="number"||typeof T=="boolean"){if(A!==T)return w[M]=T,!0}else if(A.equals(T)===!1)return A.copy(T),!0}return!1}function _(v){const x=v.uniforms;let y=0;const w=16;for(let M=0,A=x.length;M<A;M++){const E=Array.isArray(x[M])?x[M]:[x[M]];for(let S=0,P=E.length;S<P;S++){const I=E[S],U=Array.isArray(I.value)?I.value:[I.value];for(let k=0,B=U.length;k<B;k++){const V=U[k],z=m(V),D=y%w,Y=D%z.boundary,L=D+Y;y+=Y,L!==0&&w-L<z.storage&&(y+=w-L),I.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=y,y+=z.storage}}}const T=y%w;return T>0&&(y+=w-T),v.__size=y,v.__cache={},this}function m(v){const x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function g(v){const x=v.target;x.removeEventListener("dispose",g);const y=a.indexOf(x.__bindingPointIndex);a.splice(y,1),n.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function p(){for(const v in r)n.deleteBuffer(r[v]);a=[],r={},s={}}return{bind:l,update:c,dispose:p}}class gN{constructor(e={}){const{canvas:t=nR(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=a;const _=new Uint32Array(4),m=new Int32Array(4);let g=null,p=null;const v=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ni,this.toneMapping=Is,this.toneMappingExposure=1;const y=this;let w=!1,T=0,M=0,A=null,E=-1,S=null;const P=new Kt,I=new Kt;let U=null;const k=new Tt(0);let B=0,V=t.width,z=t.height,D=1,Y=null,L=null;const Q=new Kt(0,0,V,z),se=new Kt(0,0,V,z);let Te=!1;const X=new yE;let J=!1,le=!1;const re=new nn,ae=new nn,de=new K,Ne=new Kt,ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let De=!1;function pe(){return A===null?D:1}let O=i;function Be(R,H){return t.getContext(R,H)}try{const R={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${k_}`),t.addEventListener("webglcontextlost",ee,!1),t.addEventListener("webglcontextrestored",_e,!1),t.addEventListener("webglcontextcreationerror",Me,!1),O===null){const H="webgl2";if(O=Be(H,R),O===null)throw Be(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Ae,G,Se,We,ve,N,C,j,ie,ne,te,ye,ge,xe,Ke,ce,me,He,Ve,be,Qe,Xe,rt,F;function oe(){Ae=new S3(O),Ae.init(),Xe=new aN(O,Ae),G=new p3(O,Ae,e,Xe),Se=new iN(O,Ae),G.reverseDepthBuffer&&f&&Se.buffers.depth.setReversed(!0),We=new T3(O),ve=new HL,N=new sN(O,Ae,Se,ve,G,Xe,We),C=new g3(y),j=new y3(y),ie=new PR(O),rt=new h3(O,ie),ne=new M3(O,ie,We,rt),te=new A3(O,ne,ie,We),Ve=new w3(O,G,N),ce=new m3(ve),ye=new VL(y,C,j,Ae,G,rt,ce),ge=new pN(y,ve),xe=new WL,Ke=new KL(Ae),He=new f3(y,C,j,Se,te,d,l),me=new tN(y,te,G),F=new mN(O,We,G,Se),be=new d3(O,Ae,We),Qe=new E3(O,Ae,We),We.programs=ye.programs,y.capabilities=G,y.extensions=Ae,y.properties=ve,y.renderLists=xe,y.shadowMap=me,y.state=Se,y.info=We}oe();const Z=new hN(y,O);this.xr=Z,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const R=Ae.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Ae.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return D},this.setPixelRatio=function(R){R!==void 0&&(D=R,this.setSize(V,z,!1))},this.getSize=function(R){return R.set(V,z)},this.setSize=function(R,H,$=!0){if(Z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=R,z=H,t.width=Math.floor(R*D),t.height=Math.floor(H*D),$===!0&&(t.style.width=R+"px",t.style.height=H+"px"),this.setViewport(0,0,R,H)},this.getDrawingBufferSize=function(R){return R.set(V*D,z*D).floor()},this.setDrawingBufferSize=function(R,H,$){V=R,z=H,D=$,t.width=Math.floor(R*$),t.height=Math.floor(H*$),this.setViewport(0,0,R,H)},this.getCurrentViewport=function(R){return R.copy(P)},this.getViewport=function(R){return R.copy(Q)},this.setViewport=function(R,H,$,q){R.isVector4?Q.set(R.x,R.y,R.z,R.w):Q.set(R,H,$,q),Se.viewport(P.copy(Q).multiplyScalar(D).round())},this.getScissor=function(R){return R.copy(se)},this.setScissor=function(R,H,$,q){R.isVector4?se.set(R.x,R.y,R.z,R.w):se.set(R,H,$,q),Se.scissor(I.copy(se).multiplyScalar(D).round())},this.getScissorTest=function(){return Te},this.setScissorTest=function(R){Se.setScissorTest(Te=R)},this.setOpaqueSort=function(R){Y=R},this.setTransparentSort=function(R){L=R},this.getClearColor=function(R){return R.copy(He.getClearColor())},this.setClearColor=function(){He.setClearColor.apply(He,arguments)},this.getClearAlpha=function(){return He.getClearAlpha()},this.setClearAlpha=function(){He.setClearAlpha.apply(He,arguments)},this.clear=function(R=!0,H=!0,$=!0){let q=0;if(R){let W=!1;if(A!==null){const fe=A.texture.format;W=fe===W_||fe===G_||fe===H_}if(W){const fe=A.texture.type,he=fe===Qr||fe===Ua||fe===jc||fe===ol||fe===B_||fe===V_,Ee=He.getClearColor(),Le=He.getClearAlpha(),Ye=Ee.r,Ze=Ee.g,Oe=Ee.b;he?(_[0]=Ye,_[1]=Ze,_[2]=Oe,_[3]=Le,O.clearBufferuiv(O.COLOR,0,_)):(m[0]=Ye,m[1]=Ze,m[2]=Oe,m[3]=Le,O.clearBufferiv(O.COLOR,0,m))}else q|=O.COLOR_BUFFER_BIT}H&&(q|=O.DEPTH_BUFFER_BIT),$&&(q|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ee,!1),t.removeEventListener("webglcontextrestored",_e,!1),t.removeEventListener("webglcontextcreationerror",Me,!1),xe.dispose(),Ke.dispose(),ve.dispose(),C.dispose(),j.dispose(),te.dispose(),rt.dispose(),F.dispose(),ye.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",we),Z.removeEventListener("sessionend",qe),ze.stop()};function ee(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function _e(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const R=We.autoReset,H=me.enabled,$=me.autoUpdate,q=me.needsUpdate,W=me.type;oe(),We.autoReset=R,me.enabled=H,me.autoUpdate=$,me.needsUpdate=q,me.type=W}function Me(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function je(R){const H=R.target;H.removeEventListener("dispose",je),ut(H)}function ut(R){Lt(R),ve.remove(R)}function Lt(R){const H=ve.get(R).programs;H!==void 0&&(H.forEach(function($){ye.releaseProgram($)}),R.isShaderMaterial&&ye.releaseShaderCache(R))}this.renderBufferDirect=function(R,H,$,q,W,fe){H===null&&(H=ke);const he=W.isMesh&&W.matrixWorld.determinant()<0,Ee=oi(R,H,$,q,W);Se.setMaterial(q,he);let Le=$.index,Ye=1;if(q.wireframe===!0){if(Le=ne.getWireframeAttribute($),Le===void 0)return;Ye=2}const Ze=$.drawRange,Oe=$.attributes.position;let Je=Ze.start*Ye,pt=(Ze.start+Ze.count)*Ye;fe!==null&&(Je=Math.max(Je,fe.start*Ye),pt=Math.min(pt,(fe.start+fe.count)*Ye)),Le!==null?(Je=Math.max(Je,0),pt=Math.min(pt,Le.count)):Oe!=null&&(Je=Math.max(Je,0),pt=Math.min(pt,Oe.count));const gt=pt-Je;if(gt<0||gt===1/0)return;rt.setup(W,q,Ee,$,Le);let kt,_t=be;if(Le!==null&&(kt=ie.get(Le),_t=Qe,_t.setIndex(kt)),W.isMesh)q.wireframe===!0?(Se.setLineWidth(q.wireframeLinewidth*pe()),_t.setMode(O.LINES)):_t.setMode(O.TRIANGLES);else if(W.isLine){let Ge=q.linewidth;Ge===void 0&&(Ge=1),Se.setLineWidth(Ge*pe()),W.isLineSegments?_t.setMode(O.LINES):W.isLineLoop?_t.setMode(O.LINE_LOOP):_t.setMode(O.LINE_STRIP)}else W.isPoints?_t.setMode(O.POINTS):W.isSprite&&_t.setMode(O.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)_t.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(Ae.get("WEBGL_multi_draw"))_t.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const Ge=W._multiDrawStarts,wr=W._multiDrawCounts,vt=W._multiDrawCount,Xi=Le?ie.get(Le).bytesPerElement:1,Va=ve.get(q).currentProgram.getUniforms();for(let li=0;li<vt;li++)Va.setValue(O,"_gl_DrawID",li),_t.render(Ge[li]/Xi,wr[li])}else if(W.isInstancedMesh)_t.renderInstances(Je,gt,W.count);else if($.isInstancedBufferGeometry){const Ge=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,wr=Math.min($.instanceCount,Ge);_t.renderInstances(Je,gt,wr)}else _t.render(Je,gt)};function Ce(R,H,$){R.transparent===!0&&R.side===Or&&R.forceSinglePass===!1?(R.side=si,R.needsUpdate=!0,wt(R,H,$),R.side=Vs,R.needsUpdate=!0,wt(R,H,$),R.side=Or):wt(R,H,$)}this.compile=function(R,H,$=null){$===null&&($=R),p=Ke.get($),p.init(H),x.push(p),$.traverseVisible(function(W){W.isLight&&W.layers.test(H.layers)&&(p.pushLight(W),W.castShadow&&p.pushShadow(W))}),R!==$&&R.traverseVisible(function(W){W.isLight&&W.layers.test(H.layers)&&(p.pushLight(W),W.castShadow&&p.pushShadow(W))}),p.setupLights();const q=new Set;return R.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const fe=W.material;if(fe)if(Array.isArray(fe))for(let he=0;he<fe.length;he++){const Ee=fe[he];Ce(Ee,$,W),q.add(Ee)}else Ce(fe,$,W),q.add(fe)}),x.pop(),p=null,q},this.compileAsync=function(R,H,$=null){const q=this.compile(R,H,$);return new Promise(W=>{function fe(){if(q.forEach(function(he){ve.get(he).currentProgram.isReady()&&q.delete(he)}),q.size===0){W(R);return}setTimeout(fe,10)}Ae.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let Fe=null;function et(R){Fe&&Fe(R)}function we(){ze.stop()}function qe(){ze.start()}const ze=new SE;ze.setAnimationLoop(et),typeof self<"u"&&ze.setContext(self),this.setAnimationLoop=function(R){Fe=R,Z.setAnimationLoop(R),R===null?ze.stop():ze.start()},Z.addEventListener("sessionstart",we),Z.addEventListener("sessionend",qe),this.render=function(R,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(H),H=Z.getCamera()),R.isScene===!0&&R.onBeforeRender(y,R,H,A),p=Ke.get(R,x.length),p.init(H),x.push(p),ae.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),X.setFromProjectionMatrix(ae),le=this.localClippingEnabled,J=ce.init(this.clippingPlanes,le),g=xe.get(R,v.length),g.init(),v.push(g),Z.enabled===!0&&Z.isPresenting===!0){const fe=y.xr.getDepthSensingMesh();fe!==null&&$e(fe,H,-1/0,y.sortObjects)}$e(R,H,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(Y,L),De=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,De&&He.addToRenderList(g,R),this.info.render.frame++,J===!0&&ce.beginShadows();const $=p.state.shadowsArray;me.render($,R,H),J===!0&&ce.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=g.opaque,W=g.transmissive;if(p.setupLights(),H.isArrayCamera){const fe=H.cameras;if(W.length>0)for(let he=0,Ee=fe.length;he<Ee;he++){const Le=fe[he];st(q,W,R,Le)}De&&He.render(R);for(let he=0,Ee=fe.length;he<Ee;he++){const Le=fe[he];Yt(g,R,Le,Le.viewport)}}else W.length>0&&st(q,W,R,H),De&&He.render(R),Yt(g,R,H);A!==null&&(N.updateMultisampleRenderTarget(A),N.updateRenderTargetMipmap(A)),R.isScene===!0&&R.onAfterRender(y,R,H),rt.resetDefaultState(),E=-1,S=null,x.pop(),x.length>0?(p=x[x.length-1],J===!0&&ce.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,v.pop(),v.length>0?g=v[v.length-1]:g=null};function $e(R,H,$,q){if(R.visible===!1)return;if(R.layers.test(H.layers)){if(R.isGroup)$=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(H);else if(R.isLight)p.pushLight(R),R.castShadow&&p.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||X.intersectsSprite(R)){q&&Ne.setFromMatrixPosition(R.matrixWorld).applyMatrix4(ae);const he=te.update(R),Ee=R.material;Ee.visible&&g.push(R,he,Ee,$,Ne.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||X.intersectsObject(R))){const he=te.update(R),Ee=R.material;if(q&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Ne.copy(R.boundingSphere.center)):(he.boundingSphere===null&&he.computeBoundingSphere(),Ne.copy(he.boundingSphere.center)),Ne.applyMatrix4(R.matrixWorld).applyMatrix4(ae)),Array.isArray(Ee)){const Le=he.groups;for(let Ye=0,Ze=Le.length;Ye<Ze;Ye++){const Oe=Le[Ye],Je=Ee[Oe.materialIndex];Je&&Je.visible&&g.push(R,he,Je,$,Ne.z,Oe)}}else Ee.visible&&g.push(R,he,Ee,$,Ne.z,null)}}const fe=R.children;for(let he=0,Ee=fe.length;he<Ee;he++)$e(fe[he],H,$,q)}function Yt(R,H,$,q){const W=R.opaque,fe=R.transmissive,he=R.transparent;p.setupLightsView($),J===!0&&ce.setGlobalState(y.clippingPlanes,$),q&&Se.viewport(P.copy(q)),W.length>0&&bt(W,H,$),fe.length>0&&bt(fe,H,$),he.length>0&&bt(he,H,$),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function st(R,H,$,q){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[q.id]===void 0&&(p.state.transmissionRenderTarget[q.id]=new Fa(1,1,{generateMipmaps:!0,type:Ae.has("EXT_color_buffer_half_float")||Ae.has("EXT_color_buffer_float")?Jc:Qr,minFilter:ga,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ht.workingColorSpace}));const fe=p.state.transmissionRenderTarget[q.id],he=q.viewport||P;fe.setSize(he.z,he.w);const Ee=y.getRenderTarget();y.setRenderTarget(fe),y.getClearColor(k),B=y.getClearAlpha(),B<1&&y.setClearColor(16777215,.5),y.clear(),De&&He.render($);const Le=y.toneMapping;y.toneMapping=Is;const Ye=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),p.setupLightsView(q),J===!0&&ce.setGlobalState(y.clippingPlanes,q),bt(R,$,q),N.updateMultisampleRenderTarget(fe),N.updateRenderTargetMipmap(fe),Ae.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let Oe=0,Je=H.length;Oe<Je;Oe++){const pt=H[Oe],gt=pt.object,kt=pt.geometry,_t=pt.material,Ge=pt.group;if(_t.side===Or&&gt.layers.test(q.layers)){const wr=_t.side;_t.side=si,_t.needsUpdate=!0,rn(gt,$,q,kt,_t,Ge),_t.side=wr,_t.needsUpdate=!0,Ze=!0}}Ze===!0&&(N.updateMultisampleRenderTarget(fe),N.updateRenderTargetMipmap(fe))}y.setRenderTarget(Ee),y.setClearColor(k,B),Ye!==void 0&&(q.viewport=Ye),y.toneMapping=Le}function bt(R,H,$){const q=H.isScene===!0?H.overrideMaterial:null;for(let W=0,fe=R.length;W<fe;W++){const he=R[W],Ee=he.object,Le=he.geometry,Ye=q===null?he.material:q,Ze=he.group;Ee.layers.test($.layers)&&rn(Ee,H,$,Le,Ye,Ze)}}function rn(R,H,$,q,W,fe){R.onBeforeRender(y,H,$,q,W,fe),R.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),W.onBeforeRender(y,H,$,q,R,fe),W.transparent===!0&&W.side===Or&&W.forceSinglePass===!1?(W.side=si,W.needsUpdate=!0,y.renderBufferDirect($,H,q,W,R,fe),W.side=Vs,W.needsUpdate=!0,y.renderBufferDirect($,H,q,W,R,fe),W.side=Or):y.renderBufferDirect($,H,q,W,R,fe),R.onAfterRender(y,H,$,q,W,fe)}function wt(R,H,$){H.isScene!==!0&&(H=ke);const q=ve.get(R),W=p.state.lights,fe=p.state.shadowsArray,he=W.state.version,Ee=ye.getParameters(R,W.state,fe,H,$),Le=ye.getProgramCacheKey(Ee);let Ye=q.programs;q.environment=R.isMeshStandardMaterial?H.environment:null,q.fog=H.fog,q.envMap=(R.isMeshStandardMaterial?j:C).get(R.envMap||q.environment),q.envMapRotation=q.environment!==null&&R.envMap===null?H.environmentRotation:R.envMapRotation,Ye===void 0&&(R.addEventListener("dispose",je),Ye=new Map,q.programs=Ye);let Ze=Ye.get(Le);if(Ze!==void 0){if(q.currentProgram===Ze&&q.lightsStateVersion===he)return mt(R,Ee),Ze}else Ee.uniforms=ye.getUniforms(R),R.onBeforeCompile(Ee,y),Ze=ye.acquireProgram(Ee,Le),Ye.set(Le,Ze),q.uniforms=Ee.uniforms;const Oe=q.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Oe.clippingPlanes=ce.uniform),mt(R,Ee),q.needsLights=In(R),q.lightsStateVersion=he,q.needsLights&&(Oe.ambientLightColor.value=W.state.ambient,Oe.lightProbe.value=W.state.probe,Oe.directionalLights.value=W.state.directional,Oe.directionalLightShadows.value=W.state.directionalShadow,Oe.spotLights.value=W.state.spot,Oe.spotLightShadows.value=W.state.spotShadow,Oe.rectAreaLights.value=W.state.rectArea,Oe.ltc_1.value=W.state.rectAreaLTC1,Oe.ltc_2.value=W.state.rectAreaLTC2,Oe.pointLights.value=W.state.point,Oe.pointLightShadows.value=W.state.pointShadow,Oe.hemisphereLights.value=W.state.hemi,Oe.directionalShadowMap.value=W.state.directionalShadowMap,Oe.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Oe.spotShadowMap.value=W.state.spotShadowMap,Oe.spotLightMatrix.value=W.state.spotLightMatrix,Oe.spotLightMap.value=W.state.spotLightMap,Oe.pointShadowMap.value=W.state.pointShadowMap,Oe.pointShadowMatrix.value=W.state.pointShadowMatrix),q.currentProgram=Ze,q.uniformsList=null,Ze}function At(R){if(R.uniformsList===null){const H=R.currentProgram.getUniforms();R.uniformsList=Nf.seqWithValue(H.seq,R.uniforms)}return R.uniformsList}function mt(R,H){const $=ve.get(R);$.outputColorSpace=H.outputColorSpace,$.batching=H.batching,$.batchingColor=H.batchingColor,$.instancing=H.instancing,$.instancingColor=H.instancingColor,$.instancingMorph=H.instancingMorph,$.skinning=H.skinning,$.morphTargets=H.morphTargets,$.morphNormals=H.morphNormals,$.morphColors=H.morphColors,$.morphTargetsCount=H.morphTargetsCount,$.numClippingPlanes=H.numClippingPlanes,$.numIntersection=H.numClipIntersection,$.vertexAlphas=H.vertexAlphas,$.vertexTangents=H.vertexTangents,$.toneMapping=H.toneMapping}function oi(R,H,$,q,W){H.isScene!==!0&&(H=ke),N.resetTextureUnits();const fe=H.fog,he=q.isMeshStandardMaterial?H.environment:null,Ee=A===null?y.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:dl,Le=(q.isMeshStandardMaterial?j:C).get(q.envMap||he),Ye=q.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Ze=!!$.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Oe=!!$.morphAttributes.position,Je=!!$.morphAttributes.normal,pt=!!$.morphAttributes.color;let gt=Is;q.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(gt=y.toneMapping);const kt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,_t=kt!==void 0?kt.length:0,Ge=ve.get(q),wr=p.state.lights;if(J===!0&&(le===!0||R!==S)){const bi=R===S&&q.id===E;ce.setState(q,R,bi)}let vt=!1;q.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==wr.state.version||Ge.outputColorSpace!==Ee||W.isBatchedMesh&&Ge.batching===!1||!W.isBatchedMesh&&Ge.batching===!0||W.isBatchedMesh&&Ge.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&Ge.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&Ge.instancing===!1||!W.isInstancedMesh&&Ge.instancing===!0||W.isSkinnedMesh&&Ge.skinning===!1||!W.isSkinnedMesh&&Ge.skinning===!0||W.isInstancedMesh&&Ge.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Ge.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Ge.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Ge.instancingMorph===!1&&W.morphTexture!==null||Ge.envMap!==Le||q.fog===!0&&Ge.fog!==fe||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==ce.numPlanes||Ge.numIntersection!==ce.numIntersection)||Ge.vertexAlphas!==Ye||Ge.vertexTangents!==Ze||Ge.morphTargets!==Oe||Ge.morphNormals!==Je||Ge.morphColors!==pt||Ge.toneMapping!==gt||Ge.morphTargetsCount!==_t)&&(vt=!0):(vt=!0,Ge.__version=q.version);let Xi=Ge.currentProgram;vt===!0&&(Xi=wt(q,H,W));let Va=!1,li=!1,gl=!1;const Dt=Xi.getUniforms(),or=Ge.uniforms;if(Se.useProgram(Xi.program)&&(Va=!0,li=!0,gl=!0),q.id!==E&&(E=q.id,li=!0),Va||S!==R){Se.buffers.depth.getReversed()?(re.copy(R.projectionMatrix),rR(re),sR(re),Dt.setValue(O,"projectionMatrix",re)):Dt.setValue(O,"projectionMatrix",R.projectionMatrix),Dt.setValue(O,"viewMatrix",R.matrixWorldInverse);const es=Dt.map.cameraPosition;es!==void 0&&es.setValue(O,de.setFromMatrixPosition(R.matrixWorld)),G.logarithmicDepthBuffer&&Dt.setValue(O,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Dt.setValue(O,"isOrthographic",R.isOrthographicCamera===!0),S!==R&&(S=R,li=!0,gl=!0)}if(W.isSkinnedMesh){Dt.setOptional(O,W,"bindMatrix"),Dt.setOptional(O,W,"bindMatrixInverse");const bi=W.skeleton;bi&&(bi.boneTexture===null&&bi.computeBoneTexture(),Dt.setValue(O,"boneTexture",bi.boneTexture,N))}W.isBatchedMesh&&(Dt.setOptional(O,W,"batchingTexture"),Dt.setValue(O,"batchingTexture",W._matricesTexture,N),Dt.setOptional(O,W,"batchingIdTexture"),Dt.setValue(O,"batchingIdTexture",W._indirectTexture,N),Dt.setOptional(O,W,"batchingColorTexture"),W._colorsTexture!==null&&Dt.setValue(O,"batchingColorTexture",W._colorsTexture,N));const _l=$.morphAttributes;if((_l.position!==void 0||_l.normal!==void 0||_l.color!==void 0)&&Ve.update(W,$,Xi),(li||Ge.receiveShadow!==W.receiveShadow)&&(Ge.receiveShadow=W.receiveShadow,Dt.setValue(O,"receiveShadow",W.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(or.envMap.value=Le,or.flipEnvMap.value=Le.isCubeTexture&&Le.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&H.environment!==null&&(or.envMapIntensity.value=H.environmentIntensity),li&&(Dt.setValue(O,"toneMappingExposure",y.toneMappingExposure),Ge.needsLights&&Nt(or,gl),fe&&q.fog===!0&&ge.refreshFogUniforms(or,fe),ge.refreshMaterialUniforms(or,q,D,z,p.state.transmissionRenderTarget[R.id]),Nf.upload(O,At(Ge),or,N)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Nf.upload(O,At(Ge),or,N),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Dt.setValue(O,"center",W.center),Dt.setValue(O,"modelViewMatrix",W.modelViewMatrix),Dt.setValue(O,"normalMatrix",W.normalMatrix),Dt.setValue(O,"modelMatrix",W.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const bi=q.uniformsGroups;for(let es=0,ts=bi.length;es<ts;es++){const Q_=bi[es];F.update(Q_,Xi),F.bind(Q_,Xi)}}return Xi}function Nt(R,H){R.ambientLightColor.needsUpdate=H,R.lightProbe.needsUpdate=H,R.directionalLights.needsUpdate=H,R.directionalLightShadows.needsUpdate=H,R.pointLights.needsUpdate=H,R.pointLightShadows.needsUpdate=H,R.spotLights.needsUpdate=H,R.spotLightShadows.needsUpdate=H,R.rectAreaLights.needsUpdate=H,R.hemisphereLights.needsUpdate=H}function In(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(R,H,$){ve.get(R.texture).__webglTexture=H,ve.get(R.depthTexture).__webglTexture=$;const q=ve.get(R);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=$===void 0,q.__autoAllocateDepthBuffer||Ae.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,H){const $=ve.get(R);$.__webglFramebuffer=H,$.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(R,H=0,$=0){A=R,T=H,M=$;let q=!0,W=null,fe=!1,he=!1;if(R){const Le=ve.get(R);if(Le.__useDefaultFramebuffer!==void 0)Se.bindFramebuffer(O.FRAMEBUFFER,null),q=!1;else if(Le.__webglFramebuffer===void 0)N.setupRenderTarget(R);else if(Le.__hasExternalTextures)N.rebindTextures(R,ve.get(R.texture).__webglTexture,ve.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Oe=R.depthTexture;if(Le.__boundDepthTexture!==Oe){if(Oe!==null&&ve.has(Oe)&&(R.width!==Oe.image.width||R.height!==Oe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");N.setupDepthRenderbuffer(R)}}const Ye=R.texture;(Ye.isData3DTexture||Ye.isDataArrayTexture||Ye.isCompressedArrayTexture)&&(he=!0);const Ze=ve.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ze[H])?W=Ze[H][$]:W=Ze[H],fe=!0):R.samples>0&&N.useMultisampledRTT(R)===!1?W=ve.get(R).__webglMultisampledFramebuffer:Array.isArray(Ze)?W=Ze[$]:W=Ze,P.copy(R.viewport),I.copy(R.scissor),U=R.scissorTest}else P.copy(Q).multiplyScalar(D).floor(),I.copy(se).multiplyScalar(D).floor(),U=Te;if(Se.bindFramebuffer(O.FRAMEBUFFER,W)&&q&&Se.drawBuffers(R,W),Se.viewport(P),Se.scissor(I),Se.setScissorTest(U),fe){const Le=ve.get(R.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+H,Le.__webglTexture,$)}else if(he){const Le=ve.get(R.texture),Ye=H||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Le.__webglTexture,$||0,Ye)}E=-1},this.readRenderTargetPixels=function(R,H,$,q,W,fe,he){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=ve.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&he!==void 0&&(Ee=Ee[he]),Ee){Se.bindFramebuffer(O.FRAMEBUFFER,Ee);try{const Le=R.texture,Ye=Le.format,Ze=Le.type;if(!G.textureFormatReadable(Ye)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!G.textureTypeReadable(Ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=R.width-q&&$>=0&&$<=R.height-W&&O.readPixels(H,$,q,W,Xe.convert(Ye),Xe.convert(Ze),fe)}finally{const Le=A!==null?ve.get(A).__webglFramebuffer:null;Se.bindFramebuffer(O.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=async function(R,H,$,q,W,fe,he){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=ve.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&he!==void 0&&(Ee=Ee[he]),Ee){const Le=R.texture,Ye=Le.format,Ze=Le.type;if(!G.textureFormatReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!G.textureTypeReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(H>=0&&H<=R.width-q&&$>=0&&$<=R.height-W){Se.bindFramebuffer(O.FRAMEBUFFER,Ee);const Oe=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Oe),O.bufferData(O.PIXEL_PACK_BUFFER,fe.byteLength,O.STREAM_READ),O.readPixels(H,$,q,W,Xe.convert(Ye),Xe.convert(Ze),0);const Je=A!==null?ve.get(A).__webglFramebuffer:null;Se.bindFramebuffer(O.FRAMEBUFFER,Je);const pt=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await iR(O,pt,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Oe),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,fe),O.deleteBuffer(Oe),O.deleteSync(pt),fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,H=null,$=0){R.isTexture!==!0&&($l("WebGLRenderer: copyFramebufferToTexture function signature has changed."),H=arguments[0]||null,R=arguments[1]);const q=Math.pow(2,-$),W=Math.floor(R.image.width*q),fe=Math.floor(R.image.height*q),he=H!==null?H.x:0,Ee=H!==null?H.y:0;N.setTexture2D(R,0),O.copyTexSubImage2D(O.TEXTURE_2D,$,0,0,he,Ee,W,fe),Se.unbindTexture()},this.copyTextureToTexture=function(R,H,$=null,q=null,W=0){R.isTexture!==!0&&($l("WebGLRenderer: copyTextureToTexture function signature has changed."),q=arguments[0]||null,R=arguments[1],H=arguments[2],W=arguments[3]||0,$=null);let fe,he,Ee,Le,Ye,Ze,Oe,Je,pt;const gt=R.isCompressedTexture?R.mipmaps[W]:R.image;$!==null?(fe=$.max.x-$.min.x,he=$.max.y-$.min.y,Ee=$.isBox3?$.max.z-$.min.z:1,Le=$.min.x,Ye=$.min.y,Ze=$.isBox3?$.min.z:0):(fe=gt.width,he=gt.height,Ee=gt.depth||1,Le=0,Ye=0,Ze=0),q!==null?(Oe=q.x,Je=q.y,pt=q.z):(Oe=0,Je=0,pt=0);const kt=Xe.convert(H.format),_t=Xe.convert(H.type);let Ge;H.isData3DTexture?(N.setTexture3D(H,0),Ge=O.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(N.setTexture2DArray(H,0),Ge=O.TEXTURE_2D_ARRAY):(N.setTexture2D(H,0),Ge=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,H.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,H.unpackAlignment);const wr=O.getParameter(O.UNPACK_ROW_LENGTH),vt=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Xi=O.getParameter(O.UNPACK_SKIP_PIXELS),Va=O.getParameter(O.UNPACK_SKIP_ROWS),li=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,gt.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,gt.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Le),O.pixelStorei(O.UNPACK_SKIP_ROWS,Ye),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Ze);const gl=R.isDataArrayTexture||R.isData3DTexture,Dt=H.isDataArrayTexture||H.isData3DTexture;if(R.isRenderTargetTexture||R.isDepthTexture){const or=ve.get(R),_l=ve.get(H),bi=ve.get(or.__renderTarget),es=ve.get(_l.__renderTarget);Se.bindFramebuffer(O.READ_FRAMEBUFFER,bi.__webglFramebuffer),Se.bindFramebuffer(O.DRAW_FRAMEBUFFER,es.__webglFramebuffer);for(let ts=0;ts<Ee;ts++)gl&&O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,ve.get(R).__webglTexture,W,Ze+ts),R.isDepthTexture?(Dt&&O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,ve.get(H).__webglTexture,W,pt+ts),O.blitFramebuffer(Le,Ye,fe,he,Oe,Je,fe,he,O.DEPTH_BUFFER_BIT,O.NEAREST)):Dt?O.copyTexSubImage3D(Ge,W,Oe,Je,pt+ts,Le,Ye,fe,he):O.copyTexSubImage2D(Ge,W,Oe,Je,pt+ts,Le,Ye,fe,he);Se.bindFramebuffer(O.READ_FRAMEBUFFER,null),Se.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else Dt?R.isDataTexture||R.isData3DTexture?O.texSubImage3D(Ge,W,Oe,Je,pt,fe,he,Ee,kt,_t,gt.data):H.isCompressedArrayTexture?O.compressedTexSubImage3D(Ge,W,Oe,Je,pt,fe,he,Ee,kt,gt.data):O.texSubImage3D(Ge,W,Oe,Je,pt,fe,he,Ee,kt,_t,gt):R.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,W,Oe,Je,fe,he,kt,_t,gt.data):R.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,W,Oe,Je,gt.width,gt.height,kt,gt.data):O.texSubImage2D(O.TEXTURE_2D,W,Oe,Je,fe,he,kt,_t,gt);O.pixelStorei(O.UNPACK_ROW_LENGTH,wr),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,vt),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Xi),O.pixelStorei(O.UNPACK_SKIP_ROWS,Va),O.pixelStorei(O.UNPACK_SKIP_IMAGES,li),W===0&&H.generateMipmaps&&O.generateMipmap(Ge),Se.unbindTexture()},this.copyTextureToTexture3D=function(R,H,$=null,q=null,W=0){return R.isTexture!==!0&&($l("WebGLRenderer: copyTextureToTexture3D function signature has changed."),$=arguments[0]||null,q=arguments[1]||null,R=arguments[2],H=arguments[3],W=arguments[4]||0),$l('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,H,$,q,W)},this.initRenderTarget=function(R){ve.get(R).__webglFramebuffer===void 0&&N.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?N.setTextureCube(R,0):R.isData3DTexture?N.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?N.setTexture2DArray(R,0):N.setTexture2D(R,0),Se.unbindTexture()},this.resetState=function(){T=0,M=0,A=null,Se.reset(),rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=ht._getDrawingBufferColorSpace(e),t.unpackColorSpace=ht._getUnpackColorSpace()}}class _N extends Ei{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Oa,this.environmentIntensity=1,this.environmentRotation=new Oa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class ru extends Tr{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};const s=[],a=[];o(r),c(i),u(),this.setAttribute("position",new Nn(s,3)),this.setAttribute("normal",new Nn(s.slice(),3)),this.setAttribute("uv",new Nn(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(v){const x=new K,y=new K,w=new K;for(let T=0;T<t.length;T+=3)d(t[T+0],x),d(t[T+1],y),d(t[T+2],w),l(x,y,w,v)}function l(v,x,y,w){const T=w+1,M=[];for(let A=0;A<=T;A++){M[A]=[];const E=v.clone().lerp(y,A/T),S=x.clone().lerp(y,A/T),P=T-A;for(let I=0;I<=P;I++)I===0&&A===T?M[A][I]=E:M[A][I]=E.clone().lerp(S,I/P)}for(let A=0;A<T;A++)for(let E=0;E<2*(T-A)-1;E++){const S=Math.floor(E/2);E%2===0?(f(M[A][S+1]),f(M[A+1][S]),f(M[A][S])):(f(M[A][S+1]),f(M[A+1][S+1]),f(M[A+1][S]))}}function c(v){const x=new K;for(let y=0;y<s.length;y+=3)x.x=s[y+0],x.y=s[y+1],x.z=s[y+2],x.normalize().multiplyScalar(v),s[y+0]=x.x,s[y+1]=x.y,s[y+2]=x.z}function u(){const v=new K;for(let x=0;x<s.length;x+=3){v.x=s[x+0],v.y=s[x+1],v.z=s[x+2];const y=g(v)/2/Math.PI+.5,w=p(v)/Math.PI+.5;a.push(y,1-w)}_(),h()}function h(){for(let v=0;v<a.length;v+=6){const x=a[v+0],y=a[v+2],w=a[v+4],T=Math.max(x,y,w),M=Math.min(x,y,w);T>.9&&M<.1&&(x<.2&&(a[v+0]+=1),y<.2&&(a[v+2]+=1),w<.2&&(a[v+4]+=1))}}function f(v){s.push(v.x,v.y,v.z)}function d(v,x){const y=v*3;x.x=e[y+0],x.y=e[y+1],x.z=e[y+2]}function _(){const v=new K,x=new K,y=new K,w=new K,T=new yt,M=new yt,A=new yt;for(let E=0,S=0;E<s.length;E+=9,S+=6){v.set(s[E+0],s[E+1],s[E+2]),x.set(s[E+3],s[E+4],s[E+5]),y.set(s[E+6],s[E+7],s[E+8]),T.set(a[S+0],a[S+1]),M.set(a[S+2],a[S+3]),A.set(a[S+4],a[S+5]),w.copy(v).add(x).add(y).divideScalar(3);const P=g(w);m(T,S+0,v,P),m(M,S+2,x,P),m(A,S+4,y,P)}}function m(v,x,y,w){w<0&&v.x===1&&(a[x]=v.x-1),y.x===0&&y.z===0&&(a[x]=w/2/Math.PI+.5)}function g(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ru(e.vertices,e.indices,e.radius,e.details)}}class Y_ extends ru{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Y_(e.radius,e.detail)}}class $_ extends ru{constructor(e=1,t=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new $_(e.radius,e.detail)}}class q_ extends ru{constructor(e=1,t=0){const i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],r=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,r,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new q_(e.radius,e.detail)}}class K_ extends Tr{constructor(e=1,t=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const a=[],o=[],l=[],c=[],u=new K,h=new K,f=new K;for(let d=0;d<=i;d++)for(let _=0;_<=r;_++){const m=_/r*s,g=d/i*Math.PI*2;h.x=(e+t*Math.cos(g))*Math.cos(m),h.y=(e+t*Math.cos(g))*Math.sin(m),h.z=t*Math.sin(g),o.push(h.x,h.y,h.z),u.x=e*Math.cos(m),u.y=e*Math.sin(m),f.subVectors(h,u).normalize(),l.push(f.x,f.y,f.z),c.push(_/r),c.push(d/i)}for(let d=1;d<=i;d++)for(let _=1;_<=r;_++){const m=(r+1)*d+_-1,g=(r+1)*(d-1)+_-1,p=(r+1)*(d-1)+_,v=(r+1)*d+_;a.push(m,g,v),a.push(g,p,v)}this.setIndex(a),this.setAttribute("position",new Nn(o,3)),this.setAttribute("normal",new Nn(l,3)),this.setAttribute("uv",new Nn(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new K_(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Z_ extends Tr{constructor(e=1,t=.4,i=64,r=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:i,radialSegments:r,p:s,q:a},i=Math.floor(i),r=Math.floor(r);const o=[],l=[],c=[],u=[],h=new K,f=new K,d=new K,_=new K,m=new K,g=new K,p=new K;for(let x=0;x<=i;++x){const y=x/i*s*Math.PI*2;v(y,s,a,e,d),v(y+.01,s,a,e,_),g.subVectors(_,d),p.addVectors(_,d),m.crossVectors(g,p),p.crossVectors(m,g),m.normalize(),p.normalize();for(let w=0;w<=r;++w){const T=w/r*Math.PI*2,M=-t*Math.cos(T),A=t*Math.sin(T);h.x=d.x+(M*p.x+A*m.x),h.y=d.y+(M*p.y+A*m.y),h.z=d.z+(M*p.z+A*m.z),l.push(h.x,h.y,h.z),f.subVectors(h,d).normalize(),c.push(f.x,f.y,f.z),u.push(x/i),u.push(w/r)}}for(let x=1;x<=i;x++)for(let y=1;y<=r;y++){const w=(r+1)*(x-1)+(y-1),T=(r+1)*x+(y-1),M=(r+1)*x+y,A=(r+1)*(x-1)+y;o.push(w,T,A),o.push(T,M,A)}this.setIndex(o),this.setAttribute("position",new Nn(l,3)),this.setAttribute("normal",new Nn(c,3)),this.setAttribute("uv",new Nn(u,2));function v(x,y,w,T,M){const A=Math.cos(x),E=Math.sin(x),S=w/y*x,P=Math.cos(S);M.x=T*(2+P)*.5*A,M.y=T*(2+P)*E*.5,M.z=T*Math.sin(S)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Z_(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:k_}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=k_);const Xx={amber:{color:"#fbbf24",glowColor:"rgba(245,158,11,0.55)",createGeo:()=>new $_(.78,0),rotSpeed:{x:.009,y:.022}},teal:{color:"#5eead4",glowColor:"rgba(20,184,166,0.55)",createGeo:()=>new Y_(.72,1),rotSpeed:{x:.014,y:.017}},violet:{color:"#a78bfa",glowColor:"rgba(139,92,246,0.55)",createGeo:()=>new K_(.54,.22,8,16),rotSpeed:{x:.016,y:.011}},rose:{color:"#fb7185",glowColor:"rgba(251,113,133,0.55)",createGeo:()=>new q_(.82,0),rotSpeed:{x:.011,y:.025}},cyan:{color:"#22d3ee",glowColor:"rgba(34,211,238,0.55)",createGeo:()=>new Z_(.46,.16,48,8,2,3),rotSpeed:{x:.008,y:.019}}};function vN({accent:n="teal",size:e=64}){const t=Pe.useRef(null);return Pe.useEffect(()=>{const i=t.current;if(!i)return;const r=Xx[n]??Xx.teal,s=new gN({canvas:i,alpha:!0,antialias:!0});s.setPixelRatio(Math.min(window.devicePixelRatio,2)),s.setSize(e,e,!1),s.setClearColor(0,0);const a=new _N,o=new Oi(42,1,.1,10);o.position.z=2.6;const l=r.createGeo(),c=new gh({color:r.color,wireframe:!0,transparent:!0,opacity:.9}),u=new tr(l,c),h=r.createGeo(),f=new gh({color:r.color,transparent:!0,opacity:.06}),d=new tr(h,f);a.add(d),a.add(u);let _,m=0;const g=()=>{_=requestAnimationFrame(g),m+=1;const p=m*r.rotSpeed.x,v=m*r.rotSpeed.y;u.rotation.x=p,u.rotation.y=v,d.rotation.x=p,d.rotation.y=v;const x=1+Math.sin(m*.038)*.055;u.scale.setScalar(x),d.scale.setScalar(x),s.render(a,o)};return g(),()=>{cancelAnimationFrame(_),s.dispose(),l.dispose(),c.dispose(),h.dispose(),f.dispose()}},[n,e]),b.jsx("canvas",{ref:t,width:e,height:e,style:{display:"block",width:e,height:e,flexShrink:0}})}function vc(n){let e=n[0],t=n[1],i=n[2];return Math.sqrt(e*e+t*t+i*i)}function gg(n,e){return n[0]=e[0],n[1]=e[1],n[2]=e[2],n}function xN(n,e,t,i){return n[0]=e,n[1]=t,n[2]=i,n}function jx(n,e,t){return n[0]=e[0]+t[0],n[1]=e[1]+t[1],n[2]=e[2]+t[2],n}function Yx(n,e,t){return n[0]=e[0]-t[0],n[1]=e[1]-t[1],n[2]=e[2]-t[2],n}function yN(n,e,t){return n[0]=e[0]*t[0],n[1]=e[1]*t[1],n[2]=e[2]*t[2],n}function SN(n,e,t){return n[0]=e[0]/t[0],n[1]=e[1]/t[1],n[2]=e[2]/t[2],n}function op(n,e,t){return n[0]=e[0]*t,n[1]=e[1]*t,n[2]=e[2]*t,n}function MN(n,e){let t=e[0]-n[0],i=e[1]-n[1],r=e[2]-n[2];return Math.sqrt(t*t+i*i+r*r)}function EN(n,e){let t=e[0]-n[0],i=e[1]-n[1],r=e[2]-n[2];return t*t+i*i+r*r}function $x(n){let e=n[0],t=n[1],i=n[2];return e*e+t*t+i*i}function TN(n,e){return n[0]=-e[0],n[1]=-e[1],n[2]=-e[2],n}function wN(n,e){return n[0]=1/e[0],n[1]=1/e[1],n[2]=1/e[2],n}function _g(n,e){let t=e[0],i=e[1],r=e[2],s=t*t+i*i+r*r;return s>0&&(s=1/Math.sqrt(s)),n[0]=e[0]*s,n[1]=e[1]*s,n[2]=e[2]*s,n}function CE(n,e){return n[0]*e[0]+n[1]*e[1]+n[2]*e[2]}function qx(n,e,t){let i=e[0],r=e[1],s=e[2],a=t[0],o=t[1],l=t[2];return n[0]=r*l-s*o,n[1]=s*a-i*l,n[2]=i*o-r*a,n}function AN(n,e,t,i){let r=e[0],s=e[1],a=e[2];return n[0]=r+i*(t[0]-r),n[1]=s+i*(t[1]-s),n[2]=a+i*(t[2]-a),n}function CN(n,e,t,i,r){const s=Math.exp(-i*r);let a=e[0],o=e[1],l=e[2];return n[0]=t[0]+(a-t[0])*s,n[1]=t[1]+(o-t[1])*s,n[2]=t[2]+(l-t[2])*s,n}function RN(n,e,t){let i=e[0],r=e[1],s=e[2],a=t[3]*i+t[7]*r+t[11]*s+t[15];return a=a||1,n[0]=(t[0]*i+t[4]*r+t[8]*s+t[12])/a,n[1]=(t[1]*i+t[5]*r+t[9]*s+t[13])/a,n[2]=(t[2]*i+t[6]*r+t[10]*s+t[14])/a,n}function bN(n,e,t){let i=e[0],r=e[1],s=e[2],a=t[3]*i+t[7]*r+t[11]*s+t[15];return a=a||1,n[0]=(t[0]*i+t[4]*r+t[8]*s)/a,n[1]=(t[1]*i+t[5]*r+t[9]*s)/a,n[2]=(t[2]*i+t[6]*r+t[10]*s)/a,n}function PN(n,e,t){let i=e[0],r=e[1],s=e[2];return n[0]=i*t[0]+r*t[3]+s*t[6],n[1]=i*t[1]+r*t[4]+s*t[7],n[2]=i*t[2]+r*t[5]+s*t[8],n}function LN(n,e,t){let i=e[0],r=e[1],s=e[2],a=t[0],o=t[1],l=t[2],c=t[3],u=o*s-l*r,h=l*i-a*s,f=a*r-o*i,d=o*f-l*h,_=l*u-a*f,m=a*h-o*u,g=c*2;return u*=g,h*=g,f*=g,d*=2,_*=2,m*=2,n[0]=i+u+d,n[1]=r+h+_,n[2]=s+f+m,n}const NN=function(){const n=[0,0,0],e=[0,0,0];return function(t,i){gg(n,t),gg(e,i),_g(n,n),_g(e,e);let r=CE(n,e);return r>1?0:r<-1?Math.PI:Math.acos(r)}}();function DN(n,e){return n[0]===e[0]&&n[1]===e[1]&&n[2]===e[2]}class nr extends Array{constructor(e=0,t=e,i=e){return super(e,t,i),this}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}set x(e){this[0]=e}set y(e){this[1]=e}set z(e){this[2]=e}set(e,t=e,i=e){return e.length?this.copy(e):(xN(this,e,t,i),this)}copy(e){return gg(this,e),this}add(e,t){return t?jx(this,e,t):jx(this,this,e),this}sub(e,t){return t?Yx(this,e,t):Yx(this,this,e),this}multiply(e){return e.length?yN(this,this,e):op(this,this,e),this}divide(e){return e.length?SN(this,this,e):op(this,this,1/e),this}inverse(e=this){return wN(this,e),this}len(){return vc(this)}distance(e){return e?MN(this,e):vc(this)}squaredLen(){return $x(this)}squaredDistance(e){return e?EN(this,e):$x(this)}negate(e=this){return TN(this,e),this}cross(e,t){return t?qx(this,e,t):qx(this,this,e),this}scale(e){return op(this,this,e),this}normalize(){return _g(this,this),this}dot(e){return CE(this,e)}equals(e){return DN(this,e)}applyMatrix3(e){return PN(this,this,e),this}applyMatrix4(e){return RN(this,this,e),this}scaleRotateMatrix4(e){return bN(this,this,e),this}applyQuaternion(e){return LN(this,this,e),this}angle(e){return NN(this,e)}lerp(e,t){return AN(this,this,e,t),this}smoothLerp(e,t,i){return CN(this,this,e,t,i),this}clone(){return new nr(this[0],this[1],this[2])}fromArray(e,t=0){return this[0]=e[t],this[1]=e[t+1],this[2]=e[t+2],this}toArray(e=[],t=0){return e[t]=this[0],e[t+1]=this[1],e[t+2]=this[2],e}transformDirection(e){const t=this[0],i=this[1],r=this[2];return this[0]=e[0]*t+e[4]*i+e[8]*r,this[1]=e[1]*t+e[5]*i+e[9]*r,this[2]=e[2]*t+e[6]*i+e[10]*r,this.normalize()}}const Kx=new nr;let IN=1,UN=1,Zx=!1;class FN{constructor(e,t={}){e.canvas||console.error("gl not passed as first argument to Geometry"),this.gl=e,this.attributes=t,this.id=IN++,this.VAOs={},this.drawRange={start:0,count:0},this.instancedCount=0,this.gl.renderer.bindVertexArray(null),this.gl.renderer.currentGeometry=null,this.glState=this.gl.renderer.state;for(let i in t)this.addAttribute(i,t[i])}addAttribute(e,t){if(this.attributes[e]=t,t.id=UN++,t.size=t.size||1,t.type=t.type||(t.data.constructor===Float32Array?this.gl.FLOAT:t.data.constructor===Uint16Array?this.gl.UNSIGNED_SHORT:this.gl.UNSIGNED_INT),t.target=e==="index"?this.gl.ELEMENT_ARRAY_BUFFER:this.gl.ARRAY_BUFFER,t.normalized=t.normalized||!1,t.stride=t.stride||0,t.offset=t.offset||0,t.count=t.count||(t.stride?t.data.byteLength/t.stride:t.data.length/t.size),t.divisor=t.instanced||0,t.needsUpdate=!1,t.usage=t.usage||this.gl.STATIC_DRAW,t.buffer||this.updateAttribute(t),t.divisor){if(this.isInstanced=!0,this.instancedCount&&this.instancedCount!==t.count*t.divisor)return console.warn("geometry has multiple instanced buffers of different length"),this.instancedCount=Math.min(this.instancedCount,t.count*t.divisor);this.instancedCount=t.count*t.divisor}else e==="index"?this.drawRange.count=t.count:this.attributes.index||(this.drawRange.count=Math.max(this.drawRange.count,t.count))}updateAttribute(e){const t=!e.buffer;t&&(e.buffer=this.gl.createBuffer()),this.glState.boundBuffer!==e.buffer&&(this.gl.bindBuffer(e.target,e.buffer),this.glState.boundBuffer=e.buffer),t?this.gl.bufferData(e.target,e.data,e.usage):this.gl.bufferSubData(e.target,0,e.data),e.needsUpdate=!1}setIndex(e){this.addAttribute("index",e)}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}setInstancedCount(e){this.instancedCount=e}createVAO(e){this.VAOs[e.attributeOrder]=this.gl.renderer.createVertexArray(),this.gl.renderer.bindVertexArray(this.VAOs[e.attributeOrder]),this.bindAttributes(e)}bindAttributes(e){e.attributeLocations.forEach((t,{name:i,type:r})=>{if(!this.attributes[i]){console.warn(`active attribute ${i} not being supplied`);return}const s=this.attributes[i];this.gl.bindBuffer(s.target,s.buffer),this.glState.boundBuffer=s.buffer;let a=1;r===35674&&(a=2),r===35675&&(a=3),r===35676&&(a=4);const o=s.size/a,l=a===1?0:a*a*4,c=a===1?0:a*4;for(let u=0;u<a;u++)this.gl.vertexAttribPointer(t+u,o,s.type,s.normalized,s.stride+l,s.offset+u*c),this.gl.enableVertexAttribArray(t+u),this.gl.renderer.vertexAttribDivisor(t+u,s.divisor)}),this.attributes.index&&this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,this.attributes.index.buffer)}draw({program:e,mode:t=this.gl.TRIANGLES}){var r;this.gl.renderer.currentGeometry!==`${this.id}_${e.attributeOrder}`&&(this.VAOs[e.attributeOrder]||this.createVAO(e),this.gl.renderer.bindVertexArray(this.VAOs[e.attributeOrder]),this.gl.renderer.currentGeometry=`${this.id}_${e.attributeOrder}`),e.attributeLocations.forEach((s,{name:a})=>{const o=this.attributes[a];o.needsUpdate&&this.updateAttribute(o)});let i=2;((r=this.attributes.index)==null?void 0:r.type)===this.gl.UNSIGNED_INT&&(i=4),this.isInstanced?this.attributes.index?this.gl.renderer.drawElementsInstanced(t,this.drawRange.count,this.attributes.index.type,this.attributes.index.offset+this.drawRange.start*i,this.instancedCount):this.gl.renderer.drawArraysInstanced(t,this.drawRange.start,this.drawRange.count,this.instancedCount):this.attributes.index?this.gl.drawElements(t,this.drawRange.count,this.attributes.index.type,this.attributes.index.offset+this.drawRange.start*i):this.gl.drawArrays(t,this.drawRange.start,this.drawRange.count)}getPosition(){const e=this.attributes.position;if(e.data)return e;if(!Zx)return console.warn("No position buffer data found to compute bounds"),Zx=!0}computeBoundingBox(e){e||(e=this.getPosition());const t=e.data,i=e.size;this.bounds||(this.bounds={min:new nr,max:new nr,center:new nr,scale:new nr,radius:1/0});const r=this.bounds.min,s=this.bounds.max,a=this.bounds.center,o=this.bounds.scale;r.set(1/0),s.set(-1/0);for(let l=0,c=t.length;l<c;l+=i){const u=t[l],h=t[l+1],f=t[l+2];r.x=Math.min(u,r.x),r.y=Math.min(h,r.y),r.z=Math.min(f,r.z),s.x=Math.max(u,s.x),s.y=Math.max(h,s.y),s.z=Math.max(f,s.z)}o.sub(s,r),a.add(r,s).divide(2)}computeBoundingSphere(e){e||(e=this.getPosition());const t=e.data,i=e.size;this.bounds||this.computeBoundingBox(e);let r=0;for(let s=0,a=t.length;s<a;s+=i)Kx.fromArray(t,s),r=Math.max(r,this.bounds.center.squaredDistance(Kx));this.bounds.radius=Math.sqrt(r)}remove(){for(let e in this.VAOs)this.gl.renderer.deleteVertexArray(this.VAOs[e]),delete this.VAOs[e];for(let e in this.attributes)this.gl.deleteBuffer(this.attributes[e].buffer),delete this.attributes[e]}}let ON=1;const Qx={};class RE{constructor(e,{vertex:t,fragment:i,uniforms:r={},transparent:s=!1,cullFace:a=e.BACK,frontFace:o=e.CCW,depthTest:l=!0,depthWrite:c=!0,depthFunc:u=e.LEQUAL}={}){e.canvas||console.error("gl not passed as first argument to Program"),this.gl=e,this.uniforms=r,this.id=ON++,t||console.warn("vertex shader not supplied"),i||console.warn("fragment shader not supplied"),this.transparent=s,this.cullFace=a,this.frontFace=o,this.depthTest=l,this.depthWrite=c,this.depthFunc=u,this.blendFunc={},this.blendEquation={},this.stencilFunc={},this.stencilOp={},this.transparent&&!this.blendFunc.src&&(this.gl.renderer.premultipliedAlpha?this.setBlendFunc(this.gl.ONE,this.gl.ONE_MINUS_SRC_ALPHA):this.setBlendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA)),this.vertexShader=e.createShader(e.VERTEX_SHADER),this.fragmentShader=e.createShader(e.FRAGMENT_SHADER),this.program=e.createProgram(),e.attachShader(this.program,this.vertexShader),e.attachShader(this.program,this.fragmentShader),this.setShaders({vertex:t,fragment:i})}setShaders({vertex:e,fragment:t}){if(e&&(this.gl.shaderSource(this.vertexShader,e),this.gl.compileShader(this.vertexShader),this.gl.getShaderInfoLog(this.vertexShader)!==""&&console.warn(`${this.gl.getShaderInfoLog(this.vertexShader)}
Vertex Shader
${Jx(e)}`)),t&&(this.gl.shaderSource(this.fragmentShader,t),this.gl.compileShader(this.fragmentShader),this.gl.getShaderInfoLog(this.fragmentShader)!==""&&console.warn(`${this.gl.getShaderInfoLog(this.fragmentShader)}
Fragment Shader
${Jx(t)}`)),this.gl.linkProgram(this.program),!this.gl.getProgramParameter(this.program,this.gl.LINK_STATUS))return console.warn(this.gl.getProgramInfoLog(this.program));this.uniformLocations=new Map;let i=this.gl.getProgramParameter(this.program,this.gl.ACTIVE_UNIFORMS);for(let a=0;a<i;a++){let o=this.gl.getActiveUniform(this.program,a);this.uniformLocations.set(o,this.gl.getUniformLocation(this.program,o.name));const l=o.name.match(/(\w+)/g);o.uniformName=l[0],o.nameComponents=l.slice(1)}this.attributeLocations=new Map;const r=[],s=this.gl.getProgramParameter(this.program,this.gl.ACTIVE_ATTRIBUTES);for(let a=0;a<s;a++){const o=this.gl.getActiveAttrib(this.program,a),l=this.gl.getAttribLocation(this.program,o.name);l!==-1&&(r[l]=o.name,this.attributeLocations.set(o,l))}this.attributeOrder=r.join("")}setBlendFunc(e,t,i,r){this.blendFunc.src=e,this.blendFunc.dst=t,this.blendFunc.srcAlpha=i,this.blendFunc.dstAlpha=r,e&&(this.transparent=!0)}setBlendEquation(e,t){this.blendEquation.modeRGB=e,this.blendEquation.modeAlpha=t}setStencilFunc(e,t,i){this.stencilRef=t,this.stencilFunc.func=e,this.stencilFunc.ref=t,this.stencilFunc.mask=i}setStencilOp(e,t,i){this.stencilOp.stencilFail=e,this.stencilOp.depthFail=t,this.stencilOp.depthPass=i}applyState(){this.depthTest?this.gl.renderer.enable(this.gl.DEPTH_TEST):this.gl.renderer.disable(this.gl.DEPTH_TEST),this.cullFace?this.gl.renderer.enable(this.gl.CULL_FACE):this.gl.renderer.disable(this.gl.CULL_FACE),this.blendFunc.src?this.gl.renderer.enable(this.gl.BLEND):this.gl.renderer.disable(this.gl.BLEND),this.cullFace&&this.gl.renderer.setCullFace(this.cullFace),this.gl.renderer.setFrontFace(this.frontFace),this.gl.renderer.setDepthMask(this.depthWrite),this.gl.renderer.setDepthFunc(this.depthFunc),this.blendFunc.src&&this.gl.renderer.setBlendFunc(this.blendFunc.src,this.blendFunc.dst,this.blendFunc.srcAlpha,this.blendFunc.dstAlpha),this.gl.renderer.setBlendEquation(this.blendEquation.modeRGB,this.blendEquation.modeAlpha),this.stencilFunc.func||this.stencilOp.stencilFail?this.gl.renderer.enable(this.gl.STENCIL_TEST):this.gl.renderer.disable(this.gl.STENCIL_TEST),this.gl.renderer.setStencilFunc(this.stencilFunc.func,this.stencilFunc.ref,this.stencilFunc.mask),this.gl.renderer.setStencilOp(this.stencilOp.stencilFail,this.stencilOp.depthFail,this.stencilOp.depthPass)}use({flipFaces:e=!1}={}){let t=-1;this.gl.renderer.state.currentProgram===this.id||(this.gl.useProgram(this.program),this.gl.renderer.state.currentProgram=this.id),this.uniformLocations.forEach((r,s)=>{let a=this.uniforms[s.uniformName];for(const o of s.nameComponents){if(!a)break;if(o in a)a=a[o];else{if(Array.isArray(a.value))break;a=void 0;break}}if(!a)return ey(`Active uniform ${s.name} has not been supplied`);if(a&&a.value===void 0)return ey(`${s.name} uniform is missing a value parameter`);if(a.value.texture)return t=t+1,a.value.update(t),lp(this.gl,s.type,r,t);if(a.value.length&&a.value[0].texture){const o=[];return a.value.forEach(l=>{t=t+1,l.update(t),o.push(t)}),lp(this.gl,s.type,r,o)}lp(this.gl,s.type,r,a.value)}),this.applyState(),e&&this.gl.renderer.setFrontFace(this.frontFace===this.gl.CCW?this.gl.CW:this.gl.CCW)}remove(){this.gl.deleteProgram(this.program)}}function lp(n,e,t,i){i=i.length?kN(i):i;const r=n.renderer.state.uniformLocations.get(t);if(i.length)if(r===void 0||r.length!==i.length)n.renderer.state.uniformLocations.set(t,i.slice(0));else{if(zN(r,i))return;r.set?r.set(i):BN(r,i),n.renderer.state.uniformLocations.set(t,r)}else{if(r===i)return;n.renderer.state.uniformLocations.set(t,i)}switch(e){case 5126:return i.length?n.uniform1fv(t,i):n.uniform1f(t,i);case 35664:return n.uniform2fv(t,i);case 35665:return n.uniform3fv(t,i);case 35666:return n.uniform4fv(t,i);case 35670:case 5124:case 35678:case 36306:case 35680:case 36289:return i.length?n.uniform1iv(t,i):n.uniform1i(t,i);case 35671:case 35667:return n.uniform2iv(t,i);case 35672:case 35668:return n.uniform3iv(t,i);case 35673:case 35669:return n.uniform4iv(t,i);case 35674:return n.uniformMatrix2fv(t,!1,i);case 35675:return n.uniformMatrix3fv(t,!1,i);case 35676:return n.uniformMatrix4fv(t,!1,i)}}function Jx(n){let e=n.split(`
`);for(let t=0;t<e.length;t++)e[t]=t+1+": "+e[t];return e.join(`
`)}function kN(n){const e=n.length,t=n[0].length;if(t===void 0)return n;const i=e*t;let r=Qx[i];r||(Qx[i]=r=new Float32Array(i));for(let s=0;s<e;s++)r.set(n[s],s*t);return r}function zN(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function BN(n,e){for(let t=0,i=n.length;t<i;t++)n[t]=e[t]}let cp=0;function ey(n){cp>100||(console.warn(n),cp++,cp>100&&console.warn("More than 100 program warnings - stopping logs."))}const up=new nr;let VN=1;class bE{constructor({canvas:e=document.createElement("canvas"),width:t=300,height:i=150,dpr:r=1,alpha:s=!1,depth:a=!0,stencil:o=!1,antialias:l=!1,premultipliedAlpha:c=!1,preserveDrawingBuffer:u=!1,powerPreference:h="default",autoClear:f=!0,webgl:d=2}={}){const _={alpha:s,depth:a,stencil:o,antialias:l,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:h};this.dpr=r,this.alpha=s,this.color=!0,this.depth=a,this.stencil=o,this.premultipliedAlpha=c,this.autoClear=f,this.id=VN++,d===2&&(this.gl=e.getContext("webgl2",_)),this.isWebgl2=!!this.gl,this.gl||(this.gl=e.getContext("webgl",_)),this.gl||console.error("unable to create webgl context"),this.gl.renderer=this,this.setSize(t,i),this.state={},this.state.blendFunc={src:this.gl.ONE,dst:this.gl.ZERO},this.state.blendEquation={modeRGB:this.gl.FUNC_ADD},this.state.cullFace=!1,this.state.frontFace=this.gl.CCW,this.state.depthMask=!0,this.state.depthFunc=this.gl.LEQUAL,this.state.premultiplyAlpha=!1,this.state.flipY=!1,this.state.unpackAlignment=4,this.state.framebuffer=null,this.state.viewport={x:0,y:0,width:null,height:null},this.state.textureUnits=[],this.state.activeTextureUnit=0,this.state.boundBuffer=null,this.state.uniformLocations=new Map,this.state.currentProgram=null,this.extensions={},this.isWebgl2?(this.getExtension("EXT_color_buffer_float"),this.getExtension("OES_texture_float_linear")):(this.getExtension("OES_texture_float"),this.getExtension("OES_texture_float_linear"),this.getExtension("OES_texture_half_float"),this.getExtension("OES_texture_half_float_linear"),this.getExtension("OES_element_index_uint"),this.getExtension("OES_standard_derivatives"),this.getExtension("EXT_sRGB"),this.getExtension("WEBGL_depth_texture"),this.getExtension("WEBGL_draw_buffers")),this.getExtension("WEBGL_compressed_texture_astc"),this.getExtension("EXT_texture_compression_bptc"),this.getExtension("WEBGL_compressed_texture_s3tc"),this.getExtension("WEBGL_compressed_texture_etc1"),this.getExtension("WEBGL_compressed_texture_pvrtc"),this.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),this.vertexAttribDivisor=this.getExtension("ANGLE_instanced_arrays","vertexAttribDivisor","vertexAttribDivisorANGLE"),this.drawArraysInstanced=this.getExtension("ANGLE_instanced_arrays","drawArraysInstanced","drawArraysInstancedANGLE"),this.drawElementsInstanced=this.getExtension("ANGLE_instanced_arrays","drawElementsInstanced","drawElementsInstancedANGLE"),this.createVertexArray=this.getExtension("OES_vertex_array_object","createVertexArray","createVertexArrayOES"),this.bindVertexArray=this.getExtension("OES_vertex_array_object","bindVertexArray","bindVertexArrayOES"),this.deleteVertexArray=this.getExtension("OES_vertex_array_object","deleteVertexArray","deleteVertexArrayOES"),this.drawBuffers=this.getExtension("WEBGL_draw_buffers","drawBuffers","drawBuffersWEBGL"),this.parameters={},this.parameters.maxTextureUnits=this.gl.getParameter(this.gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS),this.parameters.maxAnisotropy=this.getExtension("EXT_texture_filter_anisotropic")?this.gl.getParameter(this.getExtension("EXT_texture_filter_anisotropic").MAX_TEXTURE_MAX_ANISOTROPY_EXT):0}setSize(e,t){this.width=e,this.height=t,this.gl.canvas.width=e*this.dpr,this.gl.canvas.height=t*this.dpr,this.gl.canvas.style&&Object.assign(this.gl.canvas.style,{width:e+"px",height:t+"px"})}setViewport(e,t,i=0,r=0){this.state.viewport.width===e&&this.state.viewport.height===t||(this.state.viewport.width=e,this.state.viewport.height=t,this.state.viewport.x=i,this.state.viewport.y=r,this.gl.viewport(i,r,e,t))}setScissor(e,t,i=0,r=0){this.gl.scissor(i,r,e,t)}enable(e){this.state[e]!==!0&&(this.gl.enable(e),this.state[e]=!0)}disable(e){this.state[e]!==!1&&(this.gl.disable(e),this.state[e]=!1)}setBlendFunc(e,t,i,r){this.state.blendFunc.src===e&&this.state.blendFunc.dst===t&&this.state.blendFunc.srcAlpha===i&&this.state.blendFunc.dstAlpha===r||(this.state.blendFunc.src=e,this.state.blendFunc.dst=t,this.state.blendFunc.srcAlpha=i,this.state.blendFunc.dstAlpha=r,i!==void 0?this.gl.blendFuncSeparate(e,t,i,r):this.gl.blendFunc(e,t))}setBlendEquation(e,t){e=e||this.gl.FUNC_ADD,!(this.state.blendEquation.modeRGB===e&&this.state.blendEquation.modeAlpha===t)&&(this.state.blendEquation.modeRGB=e,this.state.blendEquation.modeAlpha=t,t!==void 0?this.gl.blendEquationSeparate(e,t):this.gl.blendEquation(e))}setCullFace(e){this.state.cullFace!==e&&(this.state.cullFace=e,this.gl.cullFace(e))}setFrontFace(e){this.state.frontFace!==e&&(this.state.frontFace=e,this.gl.frontFace(e))}setDepthMask(e){this.state.depthMask!==e&&(this.state.depthMask=e,this.gl.depthMask(e))}setDepthFunc(e){this.state.depthFunc!==e&&(this.state.depthFunc=e,this.gl.depthFunc(e))}setStencilMask(e){this.state.stencilMask!==e&&(this.state.stencilMask=e,this.gl.stencilMask(e))}setStencilFunc(e,t,i){this.state.stencilFunc===e&&this.state.stencilRef===t&&this.state.stencilFuncMask===i||(this.state.stencilFunc=e||this.gl.ALWAYS,this.state.stencilRef=t||0,this.state.stencilFuncMask=i||0,this.gl.stencilFunc(e||this.gl.ALWAYS,t||0,i||0))}setStencilOp(e,t,i){this.state.stencilFail===e&&this.state.stencilDepthFail===t&&this.state.stencilDepthPass===i||(this.state.stencilFail=e,this.state.stencilDepthFail=t,this.state.stencilDepthPass=i,this.gl.stencilOp(e,t,i))}activeTexture(e){this.state.activeTextureUnit!==e&&(this.state.activeTextureUnit=e,this.gl.activeTexture(this.gl.TEXTURE0+e))}bindFramebuffer({target:e=this.gl.FRAMEBUFFER,buffer:t=null}={}){this.state.framebuffer!==t&&(this.state.framebuffer=t,this.gl.bindFramebuffer(e,t))}getExtension(e,t,i){return t&&this.gl[t]?this.gl[t].bind(this.gl):(this.extensions[e]||(this.extensions[e]=this.gl.getExtension(e)),t?this.extensions[e]?this.extensions[e][i].bind(this.extensions[e]):null:this.extensions[e])}sortOpaque(e,t){return e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.program.id!==t.program.id?e.program.id-t.program.id:e.zDepth!==t.zDepth?e.zDepth-t.zDepth:t.id-e.id}sortTransparent(e,t){return e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.zDepth!==t.zDepth?t.zDepth-e.zDepth:t.id-e.id}sortUI(e,t){return e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.program.id!==t.program.id?e.program.id-t.program.id:t.id-e.id}getRenderList({scene:e,camera:t,frustumCull:i,sort:r}){let s=[];if(t&&i&&t.updateFrustum(),e.traverse(a=>{if(!a.visible)return!0;a.draw&&(i&&a.frustumCulled&&t&&!t.frustumIntersectsMesh(a)||s.push(a))}),r){const a=[],o=[],l=[];s.forEach(c=>{c.program.transparent?c.program.depthTest?o.push(c):l.push(c):a.push(c),c.zDepth=0,!(c.renderOrder!==0||!c.program.depthTest||!t)&&(c.worldMatrix.getTranslation(up),up.applyMatrix4(t.projectionViewMatrix),c.zDepth=up.z)}),a.sort(this.sortOpaque),o.sort(this.sortTransparent),l.sort(this.sortUI),s=a.concat(o,l)}return s}render({scene:e,camera:t,target:i=null,update:r=!0,sort:s=!0,frustumCull:a=!0,clear:o}){i===null?(this.bindFramebuffer(),this.setViewport(this.width*this.dpr,this.height*this.dpr)):(this.bindFramebuffer(i),this.setViewport(i.width,i.height)),(o||this.autoClear&&o!==!1)&&(this.depth&&(!i||i.depth)&&(this.enable(this.gl.DEPTH_TEST),this.setDepthMask(!0)),(this.stencil||!i||i.stencil)&&(this.enable(this.gl.STENCIL_TEST),this.setStencilMask(255)),this.gl.clear((this.color?this.gl.COLOR_BUFFER_BIT:0)|(this.depth?this.gl.DEPTH_BUFFER_BIT:0)|(this.stencil?this.gl.STENCIL_BUFFER_BIT:0))),r&&e.updateMatrixWorld(),t&&t.updateMatrixWorld(),this.getRenderList({scene:e,camera:t,frustumCull:a,sort:s}).forEach(c=>{c.draw({camera:t})})}}function HN(n,e){return n[0]=e[0],n[1]=e[1],n[2]=e[2],n[3]=e[3],n}function GN(n,e,t,i,r){return n[0]=e,n[1]=t,n[2]=i,n[3]=r,n}function WN(n,e){let t=e[0],i=e[1],r=e[2],s=e[3],a=t*t+i*i+r*r+s*s;return a>0&&(a=1/Math.sqrt(a)),n[0]=t*a,n[1]=i*a,n[2]=r*a,n[3]=s*a,n}function XN(n,e){return n[0]*e[0]+n[1]*e[1]+n[2]*e[2]+n[3]*e[3]}function jN(n){return n[0]=0,n[1]=0,n[2]=0,n[3]=1,n}function YN(n,e,t){t=t*.5;let i=Math.sin(t);return n[0]=i*e[0],n[1]=i*e[1],n[2]=i*e[2],n[3]=Math.cos(t),n}function ty(n,e,t){let i=e[0],r=e[1],s=e[2],a=e[3],o=t[0],l=t[1],c=t[2],u=t[3];return n[0]=i*u+a*o+r*c-s*l,n[1]=r*u+a*l+s*o-i*c,n[2]=s*u+a*c+i*l-r*o,n[3]=a*u-i*o-r*l-s*c,n}function $N(n,e,t){t*=.5;let i=e[0],r=e[1],s=e[2],a=e[3],o=Math.sin(t),l=Math.cos(t);return n[0]=i*l+a*o,n[1]=r*l+s*o,n[2]=s*l-r*o,n[3]=a*l-i*o,n}function qN(n,e,t){t*=.5;let i=e[0],r=e[1],s=e[2],a=e[3],o=Math.sin(t),l=Math.cos(t);return n[0]=i*l-s*o,n[1]=r*l+a*o,n[2]=s*l+i*o,n[3]=a*l-r*o,n}function KN(n,e,t){t*=.5;let i=e[0],r=e[1],s=e[2],a=e[3],o=Math.sin(t),l=Math.cos(t);return n[0]=i*l+r*o,n[1]=r*l-i*o,n[2]=s*l+a*o,n[3]=a*l-s*o,n}function ZN(n,e,t,i){let r=e[0],s=e[1],a=e[2],o=e[3],l=t[0],c=t[1],u=t[2],h=t[3],f,d,_,m,g;return d=r*l+s*c+a*u+o*h,d<0&&(d=-d,l=-l,c=-c,u=-u,h=-h),1-d>1e-6?(f=Math.acos(d),_=Math.sin(f),m=Math.sin((1-i)*f)/_,g=Math.sin(i*f)/_):(m=1-i,g=i),n[0]=m*r+g*l,n[1]=m*s+g*c,n[2]=m*a+g*u,n[3]=m*o+g*h,n}function QN(n,e){let t=e[0],i=e[1],r=e[2],s=e[3],a=t*t+i*i+r*r+s*s,o=a?1/a:0;return n[0]=-t*o,n[1]=-i*o,n[2]=-r*o,n[3]=s*o,n}function JN(n,e){return n[0]=-e[0],n[1]=-e[1],n[2]=-e[2],n[3]=e[3],n}function eD(n,e){let t=e[0]+e[4]+e[8],i;if(t>0)i=Math.sqrt(t+1),n[3]=.5*i,i=.5/i,n[0]=(e[5]-e[7])*i,n[1]=(e[6]-e[2])*i,n[2]=(e[1]-e[3])*i;else{let r=0;e[4]>e[0]&&(r=1),e[8]>e[r*3+r]&&(r=2);let s=(r+1)%3,a=(r+2)%3;i=Math.sqrt(e[r*3+r]-e[s*3+s]-e[a*3+a]+1),n[r]=.5*i,i=.5/i,n[3]=(e[s*3+a]-e[a*3+s])*i,n[s]=(e[s*3+r]+e[r*3+s])*i,n[a]=(e[a*3+r]+e[r*3+a])*i}return n}function tD(n,e,t="YXZ"){let i=Math.sin(e[0]*.5),r=Math.cos(e[0]*.5),s=Math.sin(e[1]*.5),a=Math.cos(e[1]*.5),o=Math.sin(e[2]*.5),l=Math.cos(e[2]*.5);return t==="XYZ"?(n[0]=i*a*l+r*s*o,n[1]=r*s*l-i*a*o,n[2]=r*a*o+i*s*l,n[3]=r*a*l-i*s*o):t==="YXZ"?(n[0]=i*a*l+r*s*o,n[1]=r*s*l-i*a*o,n[2]=r*a*o-i*s*l,n[3]=r*a*l+i*s*o):t==="ZXY"?(n[0]=i*a*l-r*s*o,n[1]=r*s*l+i*a*o,n[2]=r*a*o+i*s*l,n[3]=r*a*l-i*s*o):t==="ZYX"?(n[0]=i*a*l-r*s*o,n[1]=r*s*l+i*a*o,n[2]=r*a*o-i*s*l,n[3]=r*a*l+i*s*o):t==="YZX"?(n[0]=i*a*l+r*s*o,n[1]=r*s*l+i*a*o,n[2]=r*a*o-i*s*l,n[3]=r*a*l-i*s*o):t==="XZY"&&(n[0]=i*a*l-r*s*o,n[1]=r*s*l-i*a*o,n[2]=r*a*o+i*s*l,n[3]=r*a*l+i*s*o),n}const nD=HN,iD=GN,rD=XN,sD=WN;class aD extends Array{constructor(e=0,t=0,i=0,r=1){super(e,t,i,r),this.onChange=()=>{},this._target=this;const s=["0","1","2","3"];return new Proxy(this,{set(a,o){const l=Reflect.set(...arguments);return l&&s.includes(o)&&a.onChange(),l}})}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}get w(){return this[3]}set x(e){this._target[0]=e,this.onChange()}set y(e){this._target[1]=e,this.onChange()}set z(e){this._target[2]=e,this.onChange()}set w(e){this._target[3]=e,this.onChange()}identity(){return jN(this._target),this.onChange(),this}set(e,t,i,r){return e.length?this.copy(e):(iD(this._target,e,t,i,r),this.onChange(),this)}rotateX(e){return $N(this._target,this._target,e),this.onChange(),this}rotateY(e){return qN(this._target,this._target,e),this.onChange(),this}rotateZ(e){return KN(this._target,this._target,e),this.onChange(),this}inverse(e=this._target){return QN(this._target,e),this.onChange(),this}conjugate(e=this._target){return JN(this._target,e),this.onChange(),this}copy(e){return nD(this._target,e),this.onChange(),this}normalize(e=this._target){return sD(this._target,e),this.onChange(),this}multiply(e,t){return t?ty(this._target,e,t):ty(this._target,this._target,e),this.onChange(),this}dot(e){return rD(this._target,e)}fromMatrix3(e){return eD(this._target,e),this.onChange(),this}fromEuler(e,t){return tD(this._target,e,e.order),t||this.onChange(),this}fromAxisAngle(e,t){return YN(this._target,e,t),this.onChange(),this}slerp(e,t){return ZN(this._target,this._target,e,t),this.onChange(),this}fromArray(e,t=0){return this._target[0]=e[t],this._target[1]=e[t+1],this._target[2]=e[t+2],this._target[3]=e[t+3],this.onChange(),this}toArray(e=[],t=0){return e[t]=this[0],e[t+1]=this[1],e[t+2]=this[2],e[t+3]=this[3],e}}const oD=1e-6;function lD(n,e){return n[0]=e[0],n[1]=e[1],n[2]=e[2],n[3]=e[3],n[4]=e[4],n[5]=e[5],n[6]=e[6],n[7]=e[7],n[8]=e[8],n[9]=e[9],n[10]=e[10],n[11]=e[11],n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15],n}function cD(n,e,t,i,r,s,a,o,l,c,u,h,f,d,_,m,g){return n[0]=e,n[1]=t,n[2]=i,n[3]=r,n[4]=s,n[5]=a,n[6]=o,n[7]=l,n[8]=c,n[9]=u,n[10]=h,n[11]=f,n[12]=d,n[13]=_,n[14]=m,n[15]=g,n}function uD(n){return n[0]=1,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=1,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=1,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}function fD(n,e){let t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],_=e[12],m=e[13],g=e[14],p=e[15],v=t*o-i*a,x=t*l-r*a,y=t*c-s*a,w=i*l-r*o,T=i*c-s*o,M=r*c-s*l,A=u*m-h*_,E=u*g-f*_,S=u*p-d*_,P=h*g-f*m,I=h*p-d*m,U=f*p-d*g,k=v*U-x*I+y*P+w*S-T*E+M*A;return k?(k=1/k,n[0]=(o*U-l*I+c*P)*k,n[1]=(r*I-i*U-s*P)*k,n[2]=(m*M-g*T+p*w)*k,n[3]=(f*T-h*M-d*w)*k,n[4]=(l*S-a*U-c*E)*k,n[5]=(t*U-r*S+s*E)*k,n[6]=(g*y-_*M-p*x)*k,n[7]=(u*M-f*y+d*x)*k,n[8]=(a*I-o*S+c*A)*k,n[9]=(i*S-t*I-s*A)*k,n[10]=(_*T-m*y+p*v)*k,n[11]=(h*y-u*T-d*v)*k,n[12]=(o*E-a*P-l*A)*k,n[13]=(t*P-i*E+r*A)*k,n[14]=(m*x-_*w-g*v)*k,n[15]=(u*w-h*x+f*v)*k,n):null}function PE(n){let e=n[0],t=n[1],i=n[2],r=n[3],s=n[4],a=n[5],o=n[6],l=n[7],c=n[8],u=n[9],h=n[10],f=n[11],d=n[12],_=n[13],m=n[14],g=n[15],p=e*a-t*s,v=e*o-i*s,x=e*l-r*s,y=t*o-i*a,w=t*l-r*a,T=i*l-r*o,M=c*_-u*d,A=c*m-h*d,E=c*g-f*d,S=u*m-h*_,P=u*g-f*_,I=h*g-f*m;return p*I-v*P+x*S+y*E-w*A+T*M}function ny(n,e,t){let i=e[0],r=e[1],s=e[2],a=e[3],o=e[4],l=e[5],c=e[6],u=e[7],h=e[8],f=e[9],d=e[10],_=e[11],m=e[12],g=e[13],p=e[14],v=e[15],x=t[0],y=t[1],w=t[2],T=t[3];return n[0]=x*i+y*o+w*h+T*m,n[1]=x*r+y*l+w*f+T*g,n[2]=x*s+y*c+w*d+T*p,n[3]=x*a+y*u+w*_+T*v,x=t[4],y=t[5],w=t[6],T=t[7],n[4]=x*i+y*o+w*h+T*m,n[5]=x*r+y*l+w*f+T*g,n[6]=x*s+y*c+w*d+T*p,n[7]=x*a+y*u+w*_+T*v,x=t[8],y=t[9],w=t[10],T=t[11],n[8]=x*i+y*o+w*h+T*m,n[9]=x*r+y*l+w*f+T*g,n[10]=x*s+y*c+w*d+T*p,n[11]=x*a+y*u+w*_+T*v,x=t[12],y=t[13],w=t[14],T=t[15],n[12]=x*i+y*o+w*h+T*m,n[13]=x*r+y*l+w*f+T*g,n[14]=x*s+y*c+w*d+T*p,n[15]=x*a+y*u+w*_+T*v,n}function hD(n,e,t){let i=t[0],r=t[1],s=t[2],a,o,l,c,u,h,f,d,_,m,g,p;return e===n?(n[12]=e[0]*i+e[4]*r+e[8]*s+e[12],n[13]=e[1]*i+e[5]*r+e[9]*s+e[13],n[14]=e[2]*i+e[6]*r+e[10]*s+e[14],n[15]=e[3]*i+e[7]*r+e[11]*s+e[15]):(a=e[0],o=e[1],l=e[2],c=e[3],u=e[4],h=e[5],f=e[6],d=e[7],_=e[8],m=e[9],g=e[10],p=e[11],n[0]=a,n[1]=o,n[2]=l,n[3]=c,n[4]=u,n[5]=h,n[6]=f,n[7]=d,n[8]=_,n[9]=m,n[10]=g,n[11]=p,n[12]=a*i+u*r+_*s+e[12],n[13]=o*i+h*r+m*s+e[13],n[14]=l*i+f*r+g*s+e[14],n[15]=c*i+d*r+p*s+e[15]),n}function dD(n,e,t){let i=t[0],r=t[1],s=t[2];return n[0]=e[0]*i,n[1]=e[1]*i,n[2]=e[2]*i,n[3]=e[3]*i,n[4]=e[4]*r,n[5]=e[5]*r,n[6]=e[6]*r,n[7]=e[7]*r,n[8]=e[8]*s,n[9]=e[9]*s,n[10]=e[10]*s,n[11]=e[11]*s,n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15],n}function pD(n,e,t,i){let r=i[0],s=i[1],a=i[2],o=Math.hypot(r,s,a),l,c,u,h,f,d,_,m,g,p,v,x,y,w,T,M,A,E,S,P,I,U,k,B;return Math.abs(o)<oD?null:(o=1/o,r*=o,s*=o,a*=o,l=Math.sin(t),c=Math.cos(t),u=1-c,h=e[0],f=e[1],d=e[2],_=e[3],m=e[4],g=e[5],p=e[6],v=e[7],x=e[8],y=e[9],w=e[10],T=e[11],M=r*r*u+c,A=s*r*u+a*l,E=a*r*u-s*l,S=r*s*u-a*l,P=s*s*u+c,I=a*s*u+r*l,U=r*a*u+s*l,k=s*a*u-r*l,B=a*a*u+c,n[0]=h*M+m*A+x*E,n[1]=f*M+g*A+y*E,n[2]=d*M+p*A+w*E,n[3]=_*M+v*A+T*E,n[4]=h*S+m*P+x*I,n[5]=f*S+g*P+y*I,n[6]=d*S+p*P+w*I,n[7]=_*S+v*P+T*I,n[8]=h*U+m*k+x*B,n[9]=f*U+g*k+y*B,n[10]=d*U+p*k+w*B,n[11]=_*U+v*k+T*B,e!==n&&(n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15]),n)}function mD(n,e){return n[0]=e[12],n[1]=e[13],n[2]=e[14],n}function LE(n,e){let t=e[0],i=e[1],r=e[2],s=e[4],a=e[5],o=e[6],l=e[8],c=e[9],u=e[10];return n[0]=Math.hypot(t,i,r),n[1]=Math.hypot(s,a,o),n[2]=Math.hypot(l,c,u),n}function gD(n){let e=n[0],t=n[1],i=n[2],r=n[4],s=n[5],a=n[6],o=n[8],l=n[9],c=n[10];const u=e*e+t*t+i*i,h=r*r+s*s+a*a,f=o*o+l*l+c*c;return Math.sqrt(Math.max(u,h,f))}const NE=function(){const n=[1,1,1];return function(e,t){let i=n;LE(i,t);let r=1/i[0],s=1/i[1],a=1/i[2],o=t[0]*r,l=t[1]*s,c=t[2]*a,u=t[4]*r,h=t[5]*s,f=t[6]*a,d=t[8]*r,_=t[9]*s,m=t[10]*a,g=o+h+m,p=0;return g>0?(p=Math.sqrt(g+1)*2,e[3]=.25*p,e[0]=(f-_)/p,e[1]=(d-c)/p,e[2]=(l-u)/p):o>h&&o>m?(p=Math.sqrt(1+o-h-m)*2,e[3]=(f-_)/p,e[0]=.25*p,e[1]=(l+u)/p,e[2]=(d+c)/p):h>m?(p=Math.sqrt(1+h-o-m)*2,e[3]=(d-c)/p,e[0]=(l+u)/p,e[1]=.25*p,e[2]=(f+_)/p):(p=Math.sqrt(1+m-o-h)*2,e[3]=(l-u)/p,e[0]=(d+c)/p,e[1]=(f+_)/p,e[2]=.25*p),e}}();function _D(n,e,t,i){let r=vc([n[0],n[1],n[2]]);const s=vc([n[4],n[5],n[6]]),a=vc([n[8],n[9],n[10]]);PE(n)<0&&(r=-r),t[0]=n[12],t[1]=n[13],t[2]=n[14];const l=n.slice(),c=1/r,u=1/s,h=1/a;l[0]*=c,l[1]*=c,l[2]*=c,l[4]*=u,l[5]*=u,l[6]*=u,l[8]*=h,l[9]*=h,l[10]*=h,NE(e,l),i[0]=r,i[1]=s,i[2]=a}function vD(n,e,t,i){const r=n,s=e[0],a=e[1],o=e[2],l=e[3],c=s+s,u=a+a,h=o+o,f=s*c,d=s*u,_=s*h,m=a*u,g=a*h,p=o*h,v=l*c,x=l*u,y=l*h,w=i[0],T=i[1],M=i[2];return r[0]=(1-(m+p))*w,r[1]=(d+y)*w,r[2]=(_-x)*w,r[3]=0,r[4]=(d-y)*T,r[5]=(1-(f+p))*T,r[6]=(g+v)*T,r[7]=0,r[8]=(_+x)*M,r[9]=(g-v)*M,r[10]=(1-(f+m))*M,r[11]=0,r[12]=t[0],r[13]=t[1],r[14]=t[2],r[15]=1,r}function xD(n,e){let t=e[0],i=e[1],r=e[2],s=e[3],a=t+t,o=i+i,l=r+r,c=t*a,u=i*a,h=i*o,f=r*a,d=r*o,_=r*l,m=s*a,g=s*o,p=s*l;return n[0]=1-h-_,n[1]=u+p,n[2]=f-g,n[3]=0,n[4]=u-p,n[5]=1-c-_,n[6]=d+m,n[7]=0,n[8]=f+g,n[9]=d-m,n[10]=1-c-h,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}function yD(n,e,t,i,r){let s=1/Math.tan(e/2),a=1/(i-r);return n[0]=s/t,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=s,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=(r+i)*a,n[11]=-1,n[12]=0,n[13]=0,n[14]=2*r*i*a,n[15]=0,n}function SD(n,e,t,i,r,s,a){let o=1/(e-t),l=1/(i-r),c=1/(s-a);return n[0]=-2*o,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=-2*l,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=2*c,n[11]=0,n[12]=(e+t)*o,n[13]=(r+i)*l,n[14]=(a+s)*c,n[15]=1,n}function MD(n,e,t,i){let r=e[0],s=e[1],a=e[2],o=i[0],l=i[1],c=i[2],u=r-t[0],h=s-t[1],f=a-t[2],d=u*u+h*h+f*f;d===0?f=1:(d=1/Math.sqrt(d),u*=d,h*=d,f*=d);let _=l*f-c*h,m=c*u-o*f,g=o*h-l*u;return d=_*_+m*m+g*g,d===0&&(c?o+=1e-6:l?c+=1e-6:l+=1e-6,_=l*f-c*h,m=c*u-o*f,g=o*h-l*u,d=_*_+m*m+g*g),d=1/Math.sqrt(d),_*=d,m*=d,g*=d,n[0]=_,n[1]=m,n[2]=g,n[3]=0,n[4]=h*g-f*m,n[5]=f*_-u*g,n[6]=u*m-h*_,n[7]=0,n[8]=u,n[9]=h,n[10]=f,n[11]=0,n[12]=r,n[13]=s,n[14]=a,n[15]=1,n}function iy(n,e,t){return n[0]=e[0]+t[0],n[1]=e[1]+t[1],n[2]=e[2]+t[2],n[3]=e[3]+t[3],n[4]=e[4]+t[4],n[5]=e[5]+t[5],n[6]=e[6]+t[6],n[7]=e[7]+t[7],n[8]=e[8]+t[8],n[9]=e[9]+t[9],n[10]=e[10]+t[10],n[11]=e[11]+t[11],n[12]=e[12]+t[12],n[13]=e[13]+t[13],n[14]=e[14]+t[14],n[15]=e[15]+t[15],n}function ry(n,e,t){return n[0]=e[0]-t[0],n[1]=e[1]-t[1],n[2]=e[2]-t[2],n[3]=e[3]-t[3],n[4]=e[4]-t[4],n[5]=e[5]-t[5],n[6]=e[6]-t[6],n[7]=e[7]-t[7],n[8]=e[8]-t[8],n[9]=e[9]-t[9],n[10]=e[10]-t[10],n[11]=e[11]-t[11],n[12]=e[12]-t[12],n[13]=e[13]-t[13],n[14]=e[14]-t[14],n[15]=e[15]-t[15],n}function ED(n,e,t){return n[0]=e[0]*t,n[1]=e[1]*t,n[2]=e[2]*t,n[3]=e[3]*t,n[4]=e[4]*t,n[5]=e[5]*t,n[6]=e[6]*t,n[7]=e[7]*t,n[8]=e[8]*t,n[9]=e[9]*t,n[10]=e[10]*t,n[11]=e[11]*t,n[12]=e[12]*t,n[13]=e[13]*t,n[14]=e[14]*t,n[15]=e[15]*t,n}class _h extends Array{constructor(e=1,t=0,i=0,r=0,s=0,a=1,o=0,l=0,c=0,u=0,h=1,f=0,d=0,_=0,m=0,g=1){return super(e,t,i,r,s,a,o,l,c,u,h,f,d,_,m,g),this}get x(){return this[12]}get y(){return this[13]}get z(){return this[14]}get w(){return this[15]}set x(e){this[12]=e}set y(e){this[13]=e}set z(e){this[14]=e}set w(e){this[15]=e}set(e,t,i,r,s,a,o,l,c,u,h,f,d,_,m,g){return e.length?this.copy(e):(cD(this,e,t,i,r,s,a,o,l,c,u,h,f,d,_,m,g),this)}translate(e,t=this){return hD(this,t,e),this}rotate(e,t,i=this){return pD(this,i,e,t),this}scale(e,t=this){return dD(this,t,typeof e=="number"?[e,e,e]:e),this}add(e,t){return t?iy(this,e,t):iy(this,this,e),this}sub(e,t){return t?ry(this,e,t):ry(this,this,e),this}multiply(e,t){return e.length?t?ny(this,e,t):ny(this,this,e):ED(this,this,e),this}identity(){return uD(this),this}copy(e){return lD(this,e),this}fromPerspective({fov:e,aspect:t,near:i,far:r}={}){return yD(this,e,t,i,r),this}fromOrthogonal({left:e,right:t,bottom:i,top:r,near:s,far:a}){return SD(this,e,t,i,r,s,a),this}fromQuaternion(e){return xD(this,e),this}setPosition(e){return this.x=e[0],this.y=e[1],this.z=e[2],this}inverse(e=this){return fD(this,e),this}compose(e,t,i){return vD(this,e,t,i),this}decompose(e,t,i){return _D(this,e,t,i),this}getRotation(e){return NE(e,this),this}getTranslation(e){return mD(e,this),this}getScaling(e){return LE(e,this),this}getMaxScaleOnAxis(){return gD(this)}lookAt(e,t,i){return MD(this,e,t,i),this}determinant(){return PE(this)}fromArray(e,t=0){return this[0]=e[t],this[1]=e[t+1],this[2]=e[t+2],this[3]=e[t+3],this[4]=e[t+4],this[5]=e[t+5],this[6]=e[t+6],this[7]=e[t+7],this[8]=e[t+8],this[9]=e[t+9],this[10]=e[t+10],this[11]=e[t+11],this[12]=e[t+12],this[13]=e[t+13],this[14]=e[t+14],this[15]=e[t+15],this}toArray(e=[],t=0){return e[t]=this[0],e[t+1]=this[1],e[t+2]=this[2],e[t+3]=this[3],e[t+4]=this[4],e[t+5]=this[5],e[t+6]=this[6],e[t+7]=this[7],e[t+8]=this[8],e[t+9]=this[9],e[t+10]=this[10],e[t+11]=this[11],e[t+12]=this[12],e[t+13]=this[13],e[t+14]=this[14],e[t+15]=this[15],e}}function TD(n,e,t="YXZ"){return t==="XYZ"?(n[1]=Math.asin(Math.min(Math.max(e[8],-1),1)),Math.abs(e[8])<.99999?(n[0]=Math.atan2(-e[9],e[10]),n[2]=Math.atan2(-e[4],e[0])):(n[0]=Math.atan2(e[6],e[5]),n[2]=0)):t==="YXZ"?(n[0]=Math.asin(-Math.min(Math.max(e[9],-1),1)),Math.abs(e[9])<.99999?(n[1]=Math.atan2(e[8],e[10]),n[2]=Math.atan2(e[1],e[5])):(n[1]=Math.atan2(-e[2],e[0]),n[2]=0)):t==="ZXY"?(n[0]=Math.asin(Math.min(Math.max(e[6],-1),1)),Math.abs(e[6])<.99999?(n[1]=Math.atan2(-e[2],e[10]),n[2]=Math.atan2(-e[4],e[5])):(n[1]=0,n[2]=Math.atan2(e[1],e[0]))):t==="ZYX"?(n[1]=Math.asin(-Math.min(Math.max(e[2],-1),1)),Math.abs(e[2])<.99999?(n[0]=Math.atan2(e[6],e[10]),n[2]=Math.atan2(e[1],e[0])):(n[0]=0,n[2]=Math.atan2(-e[4],e[5]))):t==="YZX"?(n[2]=Math.asin(Math.min(Math.max(e[1],-1),1)),Math.abs(e[1])<.99999?(n[0]=Math.atan2(-e[9],e[5]),n[1]=Math.atan2(-e[2],e[0])):(n[0]=0,n[1]=Math.atan2(e[8],e[10]))):t==="XZY"&&(n[2]=Math.asin(-Math.min(Math.max(e[4],-1),1)),Math.abs(e[4])<.99999?(n[0]=Math.atan2(e[6],e[5]),n[1]=Math.atan2(e[8],e[0])):(n[0]=Math.atan2(-e[9],e[10]),n[1]=0)),n}const sy=new _h;class wD extends Array{constructor(e=0,t=e,i=e,r="YXZ"){super(e,t,i),this.order=r,this.onChange=()=>{},this._target=this;const s=["0","1","2"];return new Proxy(this,{set(a,o){const l=Reflect.set(...arguments);return l&&s.includes(o)&&a.onChange(),l}})}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}set x(e){this._target[0]=e,this.onChange()}set y(e){this._target[1]=e,this.onChange()}set z(e){this._target[2]=e,this.onChange()}set(e,t=e,i=e){return e.length?this.copy(e):(this._target[0]=e,this._target[1]=t,this._target[2]=i,this.onChange(),this)}copy(e){return this._target[0]=e[0],this._target[1]=e[1],this._target[2]=e[2],this.onChange(),this}reorder(e){return this._target.order=e,this.onChange(),this}fromRotationMatrix(e,t=this.order){return TD(this._target,e,t),this.onChange(),this}fromQuaternion(e,t=this.order,i){return sy.fromQuaternion(e),this._target.fromRotationMatrix(sy,t),i||this.onChange(),this}fromArray(e,t=0){return this._target[0]=e[t],this._target[1]=e[t+1],this._target[2]=e[t+2],this}toArray(e=[],t=0){return e[t]=this[0],e[t+1]=this[1],e[t+2]=this[2],e}}class AD{constructor(){this.parent=null,this.children=[],this.visible=!0,this.matrix=new _h,this.worldMatrix=new _h,this.matrixAutoUpdate=!0,this.worldMatrixNeedsUpdate=!1,this.position=new nr,this.quaternion=new aD,this.scale=new nr(1),this.rotation=new wD,this.up=new nr(0,1,0),this.rotation._target.onChange=()=>this.quaternion.fromEuler(this.rotation,!0),this.quaternion._target.onChange=()=>this.rotation.fromQuaternion(this.quaternion,void 0,!0)}setParent(e,t=!0){this.parent&&e!==this.parent&&this.parent.removeChild(this,!1),this.parent=e,t&&e&&e.addChild(this,!1)}addChild(e,t=!0){~this.children.indexOf(e)||this.children.push(e),t&&e.setParent(this,!1)}removeChild(e,t=!0){~this.children.indexOf(e)&&this.children.splice(this.children.indexOf(e),1),t&&e.setParent(null,!1)}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.worldMatrixNeedsUpdate||e)&&(this.parent===null?this.worldMatrix.copy(this.matrix):this.worldMatrix.multiply(this.parent.worldMatrix,this.matrix),this.worldMatrixNeedsUpdate=!1,e=!0);for(let t=0,i=this.children.length;t<i;t++)this.children[t].updateMatrixWorld(e)}updateMatrix(){this.matrix.compose(this.quaternion,this.position,this.scale),this.worldMatrixNeedsUpdate=!0}traverse(e){if(!e(this))for(let t=0,i=this.children.length;t<i;t++)this.children[t].traverse(e)}decompose(){this.matrix.decompose(this.quaternion._target,this.position,this.scale),this.rotation.fromQuaternion(this.quaternion)}lookAt(e,t=!1){t?this.matrix.lookAt(this.position,e,this.up):this.matrix.lookAt(e,this.position,this.up),this.matrix.getRotation(this.quaternion._target),this.rotation.fromQuaternion(this.quaternion)}}function CD(n,e){return n[0]=e[0],n[1]=e[1],n[2]=e[2],n[3]=e[4],n[4]=e[5],n[5]=e[6],n[6]=e[8],n[7]=e[9],n[8]=e[10],n}function RD(n,e){let t=e[0],i=e[1],r=e[2],s=e[3],a=t+t,o=i+i,l=r+r,c=t*a,u=i*a,h=i*o,f=r*a,d=r*o,_=r*l,m=s*a,g=s*o,p=s*l;return n[0]=1-h-_,n[3]=u-p,n[6]=f+g,n[1]=u+p,n[4]=1-c-_,n[7]=d-m,n[2]=f-g,n[5]=d+m,n[8]=1-c-h,n}function bD(n,e){return n[0]=e[0],n[1]=e[1],n[2]=e[2],n[3]=e[3],n[4]=e[4],n[5]=e[5],n[6]=e[6],n[7]=e[7],n[8]=e[8],n}function PD(n,e,t,i,r,s,a,o,l,c){return n[0]=e,n[1]=t,n[2]=i,n[3]=r,n[4]=s,n[5]=a,n[6]=o,n[7]=l,n[8]=c,n}function LD(n){return n[0]=1,n[1]=0,n[2]=0,n[3]=0,n[4]=1,n[5]=0,n[6]=0,n[7]=0,n[8]=1,n}function ND(n,e){let t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,f=-u*s+o*l,d=c*s-a*l,_=t*h+i*f+r*d;return _?(_=1/_,n[0]=h*_,n[1]=(-u*i+r*c)*_,n[2]=(o*i-r*a)*_,n[3]=f*_,n[4]=(u*t-r*l)*_,n[5]=(-o*t+r*s)*_,n[6]=d*_,n[7]=(-c*t+i*l)*_,n[8]=(a*t-i*s)*_,n):null}function ay(n,e,t){let i=e[0],r=e[1],s=e[2],a=e[3],o=e[4],l=e[5],c=e[6],u=e[7],h=e[8],f=t[0],d=t[1],_=t[2],m=t[3],g=t[4],p=t[5],v=t[6],x=t[7],y=t[8];return n[0]=f*i+d*a+_*c,n[1]=f*r+d*o+_*u,n[2]=f*s+d*l+_*h,n[3]=m*i+g*a+p*c,n[4]=m*r+g*o+p*u,n[5]=m*s+g*l+p*h,n[6]=v*i+x*a+y*c,n[7]=v*r+x*o+y*u,n[8]=v*s+x*l+y*h,n}function DD(n,e,t){let i=e[0],r=e[1],s=e[2],a=e[3],o=e[4],l=e[5],c=e[6],u=e[7],h=e[8],f=t[0],d=t[1];return n[0]=i,n[1]=r,n[2]=s,n[3]=a,n[4]=o,n[5]=l,n[6]=f*i+d*a+c,n[7]=f*r+d*o+u,n[8]=f*s+d*l+h,n}function ID(n,e,t){let i=e[0],r=e[1],s=e[2],a=e[3],o=e[4],l=e[5],c=e[6],u=e[7],h=e[8],f=Math.sin(t),d=Math.cos(t);return n[0]=d*i+f*a,n[1]=d*r+f*o,n[2]=d*s+f*l,n[3]=d*a-f*i,n[4]=d*o-f*r,n[5]=d*l-f*s,n[6]=c,n[7]=u,n[8]=h,n}function UD(n,e,t){let i=t[0],r=t[1];return n[0]=i*e[0],n[1]=i*e[1],n[2]=i*e[2],n[3]=r*e[3],n[4]=r*e[4],n[5]=r*e[5],n[6]=e[6],n[7]=e[7],n[8]=e[8],n}function FD(n,e){let t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],_=e[12],m=e[13],g=e[14],p=e[15],v=t*o-i*a,x=t*l-r*a,y=t*c-s*a,w=i*l-r*o,T=i*c-s*o,M=r*c-s*l,A=u*m-h*_,E=u*g-f*_,S=u*p-d*_,P=h*g-f*m,I=h*p-d*m,U=f*p-d*g,k=v*U-x*I+y*P+w*S-T*E+M*A;return k?(k=1/k,n[0]=(o*U-l*I+c*P)*k,n[1]=(l*S-a*U-c*E)*k,n[2]=(a*I-o*S+c*A)*k,n[3]=(r*I-i*U-s*P)*k,n[4]=(t*U-r*S+s*E)*k,n[5]=(i*S-t*I-s*A)*k,n[6]=(m*M-g*T+p*w)*k,n[7]=(g*y-_*M-p*x)*k,n[8]=(_*T-m*y+p*v)*k,n):null}class OD extends Array{constructor(e=1,t=0,i=0,r=0,s=1,a=0,o=0,l=0,c=1){return super(e,t,i,r,s,a,o,l,c),this}set(e,t,i,r,s,a,o,l,c){return e.length?this.copy(e):(PD(this,e,t,i,r,s,a,o,l,c),this)}translate(e,t=this){return DD(this,t,e),this}rotate(e,t=this){return ID(this,t,e),this}scale(e,t=this){return UD(this,t,e),this}multiply(e,t){return t?ay(this,e,t):ay(this,this,e),this}identity(){return LD(this),this}copy(e){return bD(this,e),this}fromMatrix4(e){return CD(this,e),this}fromQuaternion(e){return RD(this,e),this}fromBasis(e,t,i){return this.set(e[0],e[1],e[2],t[0],t[1],t[2],i[0],i[1],i[2]),this}inverse(e=this){return ND(this,e),this}getNormalMatrix(e){return FD(this,e),this}}let kD=0;class DE extends AD{constructor(e,{geometry:t,program:i,mode:r=e.TRIANGLES,frustumCulled:s=!0,renderOrder:a=0}={}){super(),e.canvas||console.error("gl not passed as first argument to Mesh"),this.gl=e,this.id=kD++,this.geometry=t,this.program=i,this.mode=r,this.frustumCulled=s,this.renderOrder=a,this.modelViewMatrix=new _h,this.normalMatrix=new OD,this.beforeRenderCallbacks=[],this.afterRenderCallbacks=[]}onBeforeRender(e){return this.beforeRenderCallbacks.push(e),this}onAfterRender(e){return this.afterRenderCallbacks.push(e),this}draw({camera:e}={}){e&&(this.program.uniforms.modelMatrix||Object.assign(this.program.uniforms,{modelMatrix:{value:null},viewMatrix:{value:null},modelViewMatrix:{value:null},normalMatrix:{value:null},projectionMatrix:{value:null},cameraPosition:{value:null}}),this.program.uniforms.projectionMatrix.value=e.projectionMatrix,this.program.uniforms.cameraPosition.value=e.worldPosition,this.program.uniforms.viewMatrix.value=e.viewMatrix,this.modelViewMatrix.multiply(e.viewMatrix,this.worldMatrix),this.normalMatrix.getNormalMatrix(this.modelViewMatrix),this.program.uniforms.modelMatrix.value=this.worldMatrix,this.program.uniforms.modelViewMatrix.value=this.modelViewMatrix,this.program.uniforms.normalMatrix.value=this.normalMatrix),this.beforeRenderCallbacks.forEach(i=>i&&i({mesh:this,camera:e}));let t=this.program.cullFace&&this.worldMatrix.determinant()<0;this.program.use({flipFaces:t}),this.geometry.draw({mode:this.mode,program:this.program}),this.afterRenderCallbacks.forEach(i=>i&&i({mesh:this,camera:e}))}}const oy=new Uint8Array(4);function ly(n){return(n&n-1)===0}let zD=1;class BD{constructor(e,{image:t,target:i=e.TEXTURE_2D,type:r=e.UNSIGNED_BYTE,format:s=e.RGBA,internalFormat:a=s,wrapS:o=e.CLAMP_TO_EDGE,wrapT:l=e.CLAMP_TO_EDGE,wrapR:c=e.CLAMP_TO_EDGE,generateMipmaps:u=i===(e.TEXTURE_2D||e.TEXTURE_CUBE_MAP),minFilter:h=u?e.NEAREST_MIPMAP_LINEAR:e.LINEAR,magFilter:f=e.LINEAR,premultiplyAlpha:d=!1,unpackAlignment:_=4,flipY:m=i==(e.TEXTURE_2D||e.TEXTURE_3D),anisotropy:g=0,level:p=0,width:v,height:x=v,length:y=1}={}){this.gl=e,this.id=zD++,this.image=t,this.target=i,this.type=r,this.format=s,this.internalFormat=a,this.minFilter=h,this.magFilter=f,this.wrapS=o,this.wrapT=l,this.wrapR=c,this.generateMipmaps=u,this.premultiplyAlpha=d,this.unpackAlignment=_,this.flipY=m,this.anisotropy=Math.min(g,this.gl.renderer.parameters.maxAnisotropy),this.level=p,this.width=v,this.height=x,this.length=y,this.texture=this.gl.createTexture(),this.store={image:null},this.glState=this.gl.renderer.state,this.state={},this.state.minFilter=this.gl.NEAREST_MIPMAP_LINEAR,this.state.magFilter=this.gl.LINEAR,this.state.wrapS=this.gl.REPEAT,this.state.wrapT=this.gl.REPEAT,this.state.anisotropy=0}bind(){this.glState.textureUnits[this.glState.activeTextureUnit]!==this.id&&(this.gl.bindTexture(this.target,this.texture),this.glState.textureUnits[this.glState.activeTextureUnit]=this.id)}update(e=0){const t=!(this.image===this.store.image&&!this.needsUpdate);if((t||this.glState.textureUnits[e]!==this.id)&&(this.gl.renderer.activeTexture(e),this.bind()),!!t){if(this.needsUpdate=!1,this.flipY!==this.glState.flipY&&(this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL,this.flipY),this.glState.flipY=this.flipY),this.premultiplyAlpha!==this.glState.premultiplyAlpha&&(this.gl.pixelStorei(this.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL,this.premultiplyAlpha),this.glState.premultiplyAlpha=this.premultiplyAlpha),this.unpackAlignment!==this.glState.unpackAlignment&&(this.gl.pixelStorei(this.gl.UNPACK_ALIGNMENT,this.unpackAlignment),this.glState.unpackAlignment=this.unpackAlignment),this.minFilter!==this.state.minFilter&&(this.gl.texParameteri(this.target,this.gl.TEXTURE_MIN_FILTER,this.minFilter),this.state.minFilter=this.minFilter),this.magFilter!==this.state.magFilter&&(this.gl.texParameteri(this.target,this.gl.TEXTURE_MAG_FILTER,this.magFilter),this.state.magFilter=this.magFilter),this.wrapS!==this.state.wrapS&&(this.gl.texParameteri(this.target,this.gl.TEXTURE_WRAP_S,this.wrapS),this.state.wrapS=this.wrapS),this.wrapT!==this.state.wrapT&&(this.gl.texParameteri(this.target,this.gl.TEXTURE_WRAP_T,this.wrapT),this.state.wrapT=this.wrapT),this.wrapR!==this.state.wrapR&&(this.gl.texParameteri(this.target,this.gl.TEXTURE_WRAP_R,this.wrapR),this.state.wrapR=this.wrapR),this.anisotropy&&this.anisotropy!==this.state.anisotropy&&(this.gl.texParameterf(this.target,this.gl.renderer.getExtension("EXT_texture_filter_anisotropic").TEXTURE_MAX_ANISOTROPY_EXT,this.anisotropy),this.state.anisotropy=this.anisotropy),this.image){if(this.image.width&&(this.width=this.image.width,this.height=this.image.height),this.target===this.gl.TEXTURE_CUBE_MAP)for(let i=0;i<6;i++)this.gl.texImage2D(this.gl.TEXTURE_CUBE_MAP_POSITIVE_X+i,this.level,this.internalFormat,this.format,this.type,this.image[i]);else if(ArrayBuffer.isView(this.image))this.target===this.gl.TEXTURE_2D?this.gl.texImage2D(this.target,this.level,this.internalFormat,this.width,this.height,0,this.format,this.type,this.image):(this.target===this.gl.TEXTURE_2D_ARRAY||this.target===this.gl.TEXTURE_3D)&&this.gl.texImage3D(this.target,this.level,this.internalFormat,this.width,this.height,this.length,0,this.format,this.type,this.image);else if(this.image.isCompressedTexture)for(let i=0;i<this.image.length;i++)this.gl.compressedTexImage2D(this.target,i,this.internalFormat,this.image[i].width,this.image[i].height,0,this.image[i].data);else this.target===this.gl.TEXTURE_2D?this.gl.texImage2D(this.target,this.level,this.internalFormat,this.format,this.type,this.image):this.gl.texImage3D(this.target,this.level,this.internalFormat,this.width,this.height,this.length,0,this.format,this.type,this.image);this.generateMipmaps&&(!this.gl.renderer.isWebgl2&&(!ly(this.image.width)||!ly(this.image.height))?(this.generateMipmaps=!1,this.wrapS=this.wrapT=this.gl.CLAMP_TO_EDGE,this.minFilter=this.gl.LINEAR):this.gl.generateMipmap(this.target)),this.onUpdate&&this.onUpdate()}else if(this.target===this.gl.TEXTURE_CUBE_MAP)for(let i=0;i<6;i++)this.gl.texImage2D(this.gl.TEXTURE_CUBE_MAP_POSITIVE_X+i,0,this.gl.RGBA,1,1,0,this.gl.RGBA,this.gl.UNSIGNED_BYTE,oy);else this.width?this.target===this.gl.TEXTURE_2D?this.gl.texImage2D(this.target,this.level,this.internalFormat,this.width,this.height,0,this.format,this.type,null):this.gl.texImage3D(this.target,this.level,this.internalFormat,this.width,this.height,this.length,0,this.format,this.type,null):this.gl.texImage2D(this.target,0,this.gl.RGBA,1,1,0,this.gl.RGBA,this.gl.UNSIGNED_BYTE,oy);this.store.image=this.image}}}class IE extends FN{constructor(e,{attributes:t={}}={}){Object.assign(t,{position:{size:2,data:new Float32Array([-1,-1,3,-1,-1,3])},uv:{size:2,data:new Float32Array([0,0,2,0,0,2])}}),super(e,t)}}const VD="https://picsum.photos/seed/halftone-reveal/1200/800",rf=n=>{const e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(n||"");return e?[parseInt(e[1],16)/255,parseInt(e[2],16)/255,parseInt(e[3],16)/255]:[0,0,0]},cy={mono:0,duotone:1,color:2},uy={circle:0,square:1,diamond:2,line:3},fy={off:0,hover:1,always:2},HD=`#version 300 es
in vec2 position;
out vec2 vUv;
void main() {
  vUv = position * 0.5 + 0.5;
  gl_Position = vec4(position, 0.0, 1.0);
}
`,GD=`#version 300 es
precision highp float;

uniform sampler2D tMap;
uniform vec2 iResolution;
uniform vec2 uImageSize;
uniform vec2 uMouse;
uniform float uActivity;

uniform float uDotSize;
uniform float uDensity;
uniform float uAngle;
uniform int uShape;
uniform vec3 uInk;
uniform vec3 uPaper;
uniform int uMode;
uniform float uContrast;
uniform float uInvert;

uniform float uRevealRadius;
uniform float uEdge;
uniform float uIdleReveal;
uniform int uTrigger;

in vec2 vUv;
out vec4 fragColor;

vec2 uAspect() {
  return vec2(iResolution.x / max(iResolution.y, 1.0), 1.0);
}

vec2 coverUv(vec2 uv) {
  float ia = uImageSize.x / max(uImageSize.y, 1.0);
  float pa = iResolution.x / max(iResolution.y, 1.0);
  vec2 s = pa > ia ? vec2(1.0, ia / pa) : vec2(pa / ia, 1.0);
  return (uv - 0.5) * s + 0.5;
}

vec3 gradeRGB(vec3 c) {
  c = clamp((c - 0.5) * uContrast + 0.5, 0.0, 1.0);
  return mix(c, 1.0 - c, uInvert);
}

float shapeDist(vec2 f) {
  if (uShape == 1) return max(abs(f.x), abs(f.y));
  if (uShape == 2) return abs(f.x) + abs(f.y);
  if (uShape == 3) return abs(f.y);
  return length(f);
}

mat2 rot(float a) {
  float c = cos(a);
  float s = sin(a);
  return mat2(c, -s, s, c);
}

vec4 sampleCell(vec2 st, float dens, float ang) {
  vec2 rp = rot(ang) * st * dens;
  vec2 center = floor(rp) + 0.5;
  vec2 stC = rot(-ang) * (center / dens);
  vec2 uvC = stC / uAspect();
  return texture(tMap, clamp(coverUv(uvC), 0.0, 1.0));
}

float coverage(vec2 st, float dens, float ang, float ink, float rscale) {
  vec2 rp = rot(ang) * st * dens;
  vec2 f = fract(rp) - 0.5;
  float d = shapeDist(f);
  float r = sqrt(clamp(ink, 0.0, 1.0)) * 0.72 * rscale * uDotSize;
  float w = length(fwidth(rp)) * 0.6 + 1e-4;
  return smoothstep(r + w, r - w, d);
}

void main() {
  vec2 aspect = uAspect();
  vec2 st = vUv * aspect;
  float ang = radians(uAngle);

  vec2 duv = (vUv - uMouse) * aspect;
  float dist = length(duv);

  float act = uTrigger == 2 ? 1.0 : (uTrigger == 0 ? 0.0 : uActivity);
  float radius = max(uRevealRadius, 1e-4) * mix(0.4, 1.0, act);

  float px = 1.4 / max(iResolution.y, 1.0);
  float band = max(px, radius * (1.0 - clamp(uEdge, 0.0, 1.0)) * 0.45);
  float loupe = 1.0 - smoothstep(radius - band, radius + band, dist);
  float focus = clamp(max(loupe * act, uIdleReveal), 0.0, 1.0);

  float dens = uDensity;

  vec3 print;
  if (uMode == 2) {
    vec3 gc = gradeRGB(sampleCell(st, dens, ang + radians(15.0)).rgb);
    vec3 gm = gradeRGB(sampleCell(st, dens, ang + radians(75.0)).rgb);
    vec3 gy = gradeRGB(sampleCell(st, dens, ang).rgb);
    vec3 gk = gradeRGB(sampleCell(st, dens, ang + radians(45.0)).rgb);
    float c = 1.0 - gc.r;
    float m = 1.0 - gm.g;
    float y = 1.0 - gy.b;
    float k = 1.0 - dot(gk, vec3(0.299, 0.587, 0.114));
    float gcr = min(min(c, m), y) * 0.5;
    c = clamp(c - gcr, 0.0, 1.0);
    m = clamp(m - gcr, 0.0, 1.0);
    y = clamp(y - gcr, 0.0, 1.0);
    k = clamp(max(gcr, k * k * 0.9), 0.0, 1.0);
    float covC = coverage(st, dens, ang + radians(15.0), c, 0.82);
    float covM = coverage(st, dens, ang + radians(75.0), m, 0.82);
    float covY = coverage(st, dens, ang, y, 0.82);
    float covK = coverage(st, dens, ang + radians(45.0), k, 0.78);
    print = uPaper;
    print = mix(print, print * vec3(0.10, 0.72, 0.90), covC);
    print = mix(print, print * vec3(0.92, 0.10, 0.52), covM);
    print = mix(print, print * vec3(0.98, 0.86, 0.10), covY);
    print = mix(print, print * vec3(0.08), covK);
  } else if (uMode == 1) {
    vec3 ink2 = mix(uInk.gbr, vec3(0.90, 0.24, 0.30), 0.7);
    float lumA = dot(gradeRGB(sampleCell(st, dens, ang).rgb), vec3(0.299, 0.587, 0.114));
    float lumB = dot(gradeRGB(sampleCell(st, dens, ang + radians(38.0)).rgb), vec3(0.299, 0.587, 0.114));
    float covA = coverage(st, dens, ang, 1.0 - lumA, 1.0);
    float covB = coverage(st, dens, ang + radians(38.0), pow(1.0 - lumB, 1.4), 0.92);
    print = uPaper;
    print = mix(print, ink2, covB * 0.85);
    print = mix(print, uInk, covA);
  } else {
    float lum = dot(gradeRGB(sampleCell(st, dens, ang).rgb), vec3(0.299, 0.587, 0.114));
    float cov = coverage(st, dens, ang, 1.0 - lum, 1.0);
    print = mix(uPaper, uInk, cov);
  }

  float t = clamp(dist / radius, 0.0, 1.0);
  float bend = t * t * t * t;
  vec2 dir = dist > 1e-5 ? duv / dist : vec2(0.0);
  vec2 off = dir * bend * radius * 0.22 / aspect;
  vec2 ca = dir * bend * 0.0045 / aspect;
  vec3 sharp = gradeRGB(vec3(
    texture(tMap, clamp(coverUv(vUv - off - ca), 0.0, 1.0)).r,
    texture(tMap, clamp(coverUv(vUv - off), 0.0, 1.0)).g,
    texture(tMap, clamp(coverUv(vUv - off + ca), 0.0, 1.0)).b
  ));

  vec3 col = mix(print, sharp, focus);
  fragColor = vec4(col, 1.0);
}
`,WD=({src:n=VD,inkColor:e="#141414",paperColor:t="#fff7e6",mode:i="mono",dotSize:r=1,dotDensity:s=71,angle:a=45,shape:o="circle",contrast:l=1.15,invert:c=!1,revealRadius:u=.4,edge:h=.8,follow:f=.37,idleReveal:d=0,trigger:_="hover",borderRadius:m="16px",className:g="",style:p})=>{const v=Pe.useRef(null),x=Pe.useRef(null),y=Pe.useRef(null),w=Pe.useRef(null),T=Pe.useRef(f),M=Pe.useRef({x:.5,y:.5,sx:.5,sy:.5,active:0,target:0});return Pe.useEffect(()=>{T.current=f},[f]),Pe.useEffect(()=>{const A=v.current;if(!A)return;const E=typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,S=new bE({dpr:Math.min(window.devicePixelRatio||1,2),alpha:!1,antialias:!0});x.current=S;const P=S.gl;P.clearColor(0,0,0,1),P.canvas.style.width="100%",P.canvas.style.height="100%",P.canvas.style.display="block",A.appendChild(P.canvas);const I=new BD(P,{generateMipmaps:!1}),U={tMap:{value:I},iResolution:{value:[1,1]},uImageSize:{value:[1,1]},uMouse:{value:[.5,.5]},uActivity:{value:0},uDotSize:{value:r},uDensity:{value:s},uAngle:{value:a},uShape:{value:uy[o]??0},uInk:{value:rf(e)},uPaper:{value:rf(t)},uMode:{value:cy[i]??0},uContrast:{value:l},uInvert:{value:c?1:0},uRevealRadius:{value:u},uEdge:{value:h},uIdleReveal:{value:d},uTrigger:{value:fy[_]??1}};y.current=U;const k=new RE(P,{vertex:HD,fragment:GD,uniforms:U}),B=new DE(P,{geometry:new IE(P),program:k}),V=new Image;V.crossOrigin="anonymous",V.src=n,V.onload=()=>{I.image=V,U.uImageSize.value=[V.naturalWidth,V.naturalHeight]};const z=()=>{const Te=A.clientWidth||1,X=A.clientHeight||1;S.setSize(Te,X),U.iResolution.value=[P.canvas.width,P.canvas.height]};z();const D=new ResizeObserver(z);D.observe(A);const Y=Te=>{const X=A.getBoundingClientRect();M.current.x=(Te.clientX-X.left)/X.width,M.current.y=1-(Te.clientY-X.top)/X.height,M.current.target=E?0:1},L=()=>{M.current.target=0};A.addEventListener("pointermove",Y,{passive:!0}),A.addEventListener("pointerenter",Y,{passive:!0}),A.addEventListener("pointerleave",L,{passive:!0});let Q=performance.now();const se=Te=>{w.current=requestAnimationFrame(se);const X=Math.min(.05,Math.max(.001,(Te-Q)/1e3));Q=Te;const J=M.current,le=1-Math.exp(-X/Math.max(.001,T.current));J.sx+=(J.x-J.sx)*le,J.sy+=(J.y-J.sy)*le;const re=1-Math.exp(-X/.18);J.active+=(J.target-J.active)*re,U.uMouse.value[0]=J.sx,U.uMouse.value[1]=J.sy,U.uActivity.value=J.active,S.render({scene:B})};return w.current=requestAnimationFrame(se),()=>{w.current&&cancelAnimationFrame(w.current),D.disconnect(),A.removeEventListener("pointermove",Y),A.removeEventListener("pointerenter",Y),A.removeEventListener("pointerleave",L);const Te=P.getExtension("WEBGL_lose_context");Te&&Te.loseContext(),P.canvas.parentNode&&P.canvas.parentNode.removeChild(P.canvas),x.current=null,y.current=null}},[n]),Pe.useEffect(()=>{const A=y.current;A&&(A.uDotSize.value=r,A.uDensity.value=s,A.uAngle.value=a,A.uShape.value=uy[o]??0,A.uInk.value=rf(e),A.uPaper.value=rf(t),A.uMode.value=cy[i]??0,A.uContrast.value=l,A.uInvert.value=c?1:0,A.uRevealRadius.value=u,A.uEdge.value=h,A.uIdleReveal.value=d,A.uTrigger.value=fy[_]??1)},[r,s,a,o,e,t,i,l,c,u,h,d,_]),b.jsx("div",{ref:v,className:`halftone-reveal ${g}`.trim(),style:{borderRadius:m,...p}})};function XD(n){const e=n.toLowerCase();return e.includes("cyber")||e.includes("security")?"amber":e.includes("agent")||e.includes("ai")?"teal":e.includes("mobile")||e.includes("b2b")?"rose":e.includes("data")||e.includes("content")?"cyan":"violet"}const hy={amber:"rgba(245,158,11,0.45)",teal:"rgba(20,184,166,0.45)",violet:"rgba(139,92,246,0.45)",rose:"rgba(251,113,133,0.45)",cyan:"rgba(34,211,238,0.45)"};function jD(n){return n==="rose"?"amber":n==="cyan"?"teal":n}function YD({onOpenCLI:n}){return b.jsxs("section",{className:"section-container",id:"projects",children:[b.jsxs("div",{className:"section-header",children:[b.jsxs("div",{className:"section-tag",children:[b.jsx("span",{className:"section-tag-dot text-amber",children:"03"})," DEPLOYED CONSTRUCTS"]}),b.jsx("h2",{className:"section-title",children:"Autonomous Agents & Security Deployments"}),b.jsx("p",{className:"section-subtitle",children:"Real-world platforms spanning offensive cybersecurity ranges, multi-agent shop-floor copilots, and full-stack enterprise portals."})]}),b.jsxs("div",{className:"projects-featured-panel glass-panel",children:[b.jsxs("div",{className:"projects-featured-copy",children:[b.jsx("div",{className:"section-tag",children:b.jsx("span",{className:"section-tag-dot text-violet",children:"SELECTED WORK"})}),b.jsx("h3",{className:"projects-featured-title",children:"AI systems, secure workflows, and product builds."}),b.jsx("p",{className:"projects-featured-text",children:"I build practical tools for automation, operations, and security-focused product work, turning complex ideas into usable systems that are easy to trust and easy to use."})]}),b.jsx("div",{className:"projects-featured-art",children:b.jsx(WD,{src:"https://picsum.photos/seed/agentic-portfolio/1400/900",inkColor:"#1f1b2d",paperColor:"#fdf4ff",mode:"mono",dotDensity:90,angle:28,revealRadius:.28,edge:.82,follow:.3,dotSize:1.1,trigger:"hover",borderRadius:"18px"})})]}),b.jsx("div",{className:"projects-grid",children:xA.map((e,t)=>{const i=XD(e.tag),r=jD(i);return b.jsxs("div",{className:"project-card glass-panel",children:[b.jsxs("div",{className:"project-card-header",children:[b.jsxs("div",{className:"project-header-left",children:[b.jsxs("div",{className:"project-index font-mono",children:["SYS_0",t+1]}),b.jsxs("span",{className:`project-tag-badge ${r}`,children:[b.jsx("span",{className:"tag-pulse-dot"}),e.tag]})]}),b.jsx("div",{className:"project-sigil-wrap",style:{boxShadow:`0 0 14px ${hy[i]}, inset 0 0 8px ${hy[i]}`},children:b.jsx(vN,{accent:i,size:64})})]}),b.jsx("h3",{className:"project-title",children:e.name}),b.jsx("p",{className:"project-description",children:e.description}),b.jsxs("div",{className:"project-stack-wrap",children:[b.jsx("div",{className:"stack-label font-mono",children:"DEPENDENCIES:"}),b.jsx("div",{className:"stack-pills",children:e.stack.map((s,a)=>b.jsx("span",{className:"stack-pill",children:s},a))})]}),b.jsxs("div",{className:"project-card-footer",children:[e.link?b.jsxs("a",{href:e.link,target:"_blank",rel:"noreferrer",className:"project-action-link",children:[b.jsx("span",{children:"Launch Live Uplink"}),b.jsx("span",{className:"link-arrow",children:"↗"})]}):b.jsx("span",{className:"project-internal-badge",children:b.jsx("span",{children:"Internal Architecture"})}),b.jsx("button",{className:"project-inspect-btn font-mono",onClick:n,title:"Inspect via Retro CLI",children:">_ CLI"})]})]},t)})})]})}function $D(){return b.jsxs("section",{className:"section-container",id:"achievements",children:[b.jsxs("div",{className:"section-header",children:[b.jsxs("div",{className:"section-tag",children:[b.jsx("span",{className:"section-tag-dot text-amber",children:"03"})," CERTIFICATIONS & ACCOMPLISHMENTS"]}),b.jsx("h2",{className:"section-title",children:"Validated learning across AI, cloud, and product engineering."}),b.jsx("p",{className:"section-subtitle",children:"Continuous skill-building across artificial intelligence, cloud infrastructure, software engineering, and practical application development."})]}),b.jsx("div",{className:"achievement-grid",children:SA.map((n,e)=>b.jsxs("article",{className:"achievement-card glass-panel",children:[b.jsxs("div",{className:"achievement-meta",children:[b.jsx("span",{className:"achievement-year font-mono",children:n.year}),b.jsx("span",{className:"achievement-category font-mono",children:n.category})]}),b.jsx("h3",{className:"achievement-title",children:n.title}),b.jsx("p",{className:"achievement-issuer",children:n.issuer})]},e))})]})}function qD(){return b.jsxs("section",{className:"section-container",id:"experience",children:[b.jsxs("div",{className:"section-header",children:[b.jsxs("div",{className:"section-tag",children:[b.jsx("span",{className:"section-tag-dot text-teal",children:"04"})," TRACK RECORD"]}),b.jsx("h2",{className:"section-title",children:"Operations & Engagements"}),b.jsx("p",{className:"section-subtitle",children:"Hands-on production frontend development, SMB portal engineering, and continuous agentic AI specialization."})]}),b.jsxs("div",{className:"timeline-cyber-wrap",children:[b.jsx("div",{className:"timeline-spine-line"}),b.jsx("div",{className:"timeline-nodes-list",children:yA.map((n,e)=>b.jsxs("div",{className:"timeline-node-item",children:[b.jsx("div",{className:"timeline-node-marker",children:b.jsx("div",{className:"marker-inner-core"})}),b.jsxs("div",{className:"timeline-node-content glass-panel",children:[b.jsxs("div",{className:"timeline-header-row",children:[b.jsxs("div",{children:[b.jsx("h3",{className:"timeline-role-title",children:n.role}),b.jsx("div",{className:"timeline-org-name text-teal",children:n.org})]}),b.jsx("div",{className:"timeline-period-badge font-mono",children:n.period})]}),b.jsx("p",{className:"timeline-description",children:n.description})]})]},e))})]})]})}function KD({onOpenCLI:n}){const[e,t]=Pe.useState(!1),i=()=>{navigator.clipboard.writeText(Ga.email),t(!0),setTimeout(()=>t(!1),2400)};return b.jsxs("section",{className:"section-container contact-section",id:"contact",children:[b.jsxs("div",{className:"section-header",children:[b.jsxs("div",{className:"section-tag",children:[b.jsx("span",{className:"section-tag-dot text-amber",children:"05"})," ENCRYPTED TRANSMISSION"]}),b.jsx("h2",{className:"section-title",children:"Initiate Uplink"}),b.jsx("p",{className:"section-subtitle",children:"Ready to collaborate on autonomous multi-agent architectures, security audits, or full-stack engineering."})]}),b.jsxs("div",{className:"contact-terminal-box glass-panel",children:[b.jsxs("div",{className:"terminal-header-bar",children:[b.jsxs("div",{className:"terminal-dots",children:[b.jsx("span",{className:"term-dot red"}),b.jsx("span",{className:"term-dot yellow"}),b.jsx("span",{className:"term-dot green"})]}),b.jsx("span",{className:"terminal-header-title font-mono",children:"SECURE_CHANNEL_v4.09 // RSA_4096_GCM"}),b.jsx("span",{className:"terminal-status-tag font-mono text-teal",children:"LISTENING..."})]}),b.jsxs("div",{className:"terminal-content-grid",children:[b.jsxs("div",{className:"terminal-left-pane",children:[b.jsxs("div",{className:"terminal-log-stream font-mono",children:[b.jsxs("div",{className:"log-line text-muted",children:["[00:00:01] Initializing handshake with ",xa.name,"..."]}),b.jsx("div",{className:"log-line text-muted",children:"[00:00:02] Establishing TLS 1.3 socket to Surat station..."}),b.jsx("div",{className:"log-line text-teal",children:"[00:00:03] Public key exchange verified. Secure comms open."})]}),b.jsxs("div",{className:"terminal-direct-prompt",children:[b.jsx("h3",{className:"contact-headline",children:"Send Direct Transmission"}),b.jsx("p",{className:"contact-subtext",children:"Whether you need an autonomous agent workflow built with LangGraph, a TryHackMe-style training lab, or a production React portal — reach out directly."}),b.jsxs("div",{className:"terminal-email-card",children:[b.jsx("div",{className:"email-meta font-mono",children:"PRIMARY INBOX:"}),b.jsx("div",{className:"email-val font-mono",children:Ga.email}),b.jsxs("div",{className:"email-action-row",children:[b.jsx("a",{href:`mailto:${Ga.email}`,className:"btn-primary-small",children:"Compose Dispatch ↗"}),b.jsx("button",{onClick:i,className:"btn-secondary-small font-mono",children:e?"[COPIED TO CLIPBOARD]":"[COPY ADDRESS]"})]})]})]})]}),b.jsxs("div",{className:"terminal-right-pane",children:[b.jsx("div",{className:"channels-label font-mono text-muted",children:"// PERIMETER LINKS"}),b.jsxs("div",{className:"contact-links-stack",children:[b.jsxs("a",{href:Ga.neetcode,target:"_blank",rel:"noreferrer",className:"contact-channel-card",children:[b.jsx("div",{className:"channel-icon-block",children:b.jsx("svg",{viewBox:"0 0 24 24",className:"brand-icon","aria-hidden":"true",children:b.jsx("path",{d:"M6 18V6h2.7l4.1 6.2V6H15v12h-2.7L8.2 11.8V18H6Zm12 0V6h2v12h-2Z",fill:"currentColor"})})}),b.jsxs("div",{className:"channel-info",children:[b.jsx("span",{className:"channel-name",children:"NeetCode"}),b.jsx("span",{className:"channel-url font-mono text-muted",children:"@RelentlessKakarot527"})]}),b.jsx("span",{className:"channel-arrow font-mono",children:"↗"})]}),b.jsxs("a",{href:Ga.github,target:"_blank",rel:"noreferrer",className:"contact-channel-card",children:[b.jsx("div",{className:"channel-icon-block",children:b.jsx("svg",{viewBox:"0 0 24 24",className:"brand-icon","aria-hidden":"true",children:b.jsx("path",{d:"M12 2.1A9.9 9.9 0 0 0 8.5 21.7c.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.2-3.4-1.2-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.6 1 1.6 1 .9 1.6 2.5 1.2 3.1.9.1-.7.4-1.2.7-1.5-2.2-.2-4.5-1.1-4.5-4.8 0-1.1.4-2 .9-2.7-.1-.2-.4-1.3.1-2.7 0 0 .8-.3 2.8 1a9.5 9.5 0 0 1 5.1 0c2-1.3 2.8-1 2.8-1 .5 1.4.2 2.5.1 2.7.6.7 1 1.6 1 2.7 0 3.7-2.3 4.6-4.5 4.8.4.3.7.9.7 1.9v2.8c0 .3.2.7.7.5A9.9 9.9 0 0 0 12 2.1Z",fill:"currentColor"})})}),b.jsxs("div",{className:"channel-info",children:[b.jsx("span",{className:"channel-name",children:"GitHub Matrix"}),b.jsx("span",{className:"channel-url font-mono text-muted",children:"@kkotadiya549-create"})]}),b.jsx("span",{className:"channel-arrow font-mono",children:"↗"})]}),b.jsxs("a",{href:Ga.linkedin,target:"_blank",rel:"noreferrer",className:"contact-channel-card",children:[b.jsx("div",{className:"channel-icon-block",children:b.jsx("svg",{viewBox:"0 0 24 24",className:"brand-icon","aria-hidden":"true",children:b.jsx("path",{d:"M6.5 8.7A1.7 1.7 0 1 1 6.5 5.3a1.7 1.7 0 0 1 0 3.4ZM4.9 10.1h3.2v9H4.9v-9Zm5.4 0h3.1v1.2h.1c.4-.8 1.5-1.7 3.1-1.7 3.3 0 3.9 2.1 3.9 4.9v5.6h-3.2v-5.2c0-1.2 0-2.8-1.7-2.8-1.7 0-2 1.3-2 2.7v5.3H10.3v-9Z",fill:"currentColor"})})}),b.jsxs("div",{className:"channel-info",children:[b.jsx("span",{className:"channel-name",children:"LinkedIn Dossier"}),b.jsx("span",{className:"channel-url font-mono text-muted",children:"linkedin.com/in/krunal-kotadiya-b98057278"})]}),b.jsx("span",{className:"channel-arrow font-mono",children:"↗"})]}),b.jsxs("div",{className:"contact-channel-card cli-shortcut-card",onClick:n,role:"button",tabIndex:0,children:[b.jsx("div",{className:"channel-icon-block amber",children:b.jsx("span",{className:"channel-sym font-mono",children:">_"})}),b.jsxs("div",{className:"channel-info",children:[b.jsx("span",{className:"channel-name",children:"Launch Terminal Shell"}),b.jsx("span",{className:"channel-url font-mono text-amber",children:"Interactive CLI with all data"})]}),b.jsx("span",{className:"channel-arrow font-mono",children:"ENTER"})]})]}),b.jsxs("div",{className:"terminal-security-badge font-mono",children:[b.jsx("span",{className:"shield-icon",children:"🛡"}),b.jsx("span",{children:"ZERO-TRUST TRANSMISSION PROTOCOL VERIFIED"})]})]})]})]}),b.jsxs("footer",{className:"footer-bar font-mono",children:[b.jsx("div",{className:"footer-left",children:b.jsx("span",{children:"KRUNAL // AGENTIC AI & CYBERSECURITY ARCHITECT"})}),b.jsxs("div",{className:"footer-center",children:[b.jsx("span",{className:"footer-pulse-dot"}),b.jsx("span",{children:"ALL SYSTEMS FUNCTIONAL"})]}),b.jsx("div",{className:"footer-right",children:b.jsx("span",{children:"B.TECH CS/IT · 2027"})})]})]})}const dy=8,UE=n=>{const e=n.replace("#","").padEnd(6,"0"),t=parseInt(e.slice(0,2),16)/255,i=parseInt(e.slice(2,4),16)/255,r=parseInt(e.slice(4,6),16)/255;return[t,i,r]},ZD=n=>{const e=(n&&n.length?n:["#A6C8FF","#5227FF","#FF9FFC"]).slice(0,dy),t=e.length,i=[];for(let s=0;s<dy;s++)i.push(UE(e[Math.min(s,e.length-1)]));const r=[0,0,0];for(let s=0;s<t;s++)r[0]+=i[s][0],r[1]+=i[s][1],r[2]+=i[s][2];return r[0]/=t,r[1]/=t,r[2]/=t,{arr:i,count:t,avg:r}},QD=`
attribute vec2 position;
attribute vec2 uv;
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 0.0, 1.0);
}
`,JD=`
precision highp float;

uniform vec3  iResolution;
uniform vec2  iMouse;
uniform float iTime;

uniform vec3  uColor0;
uniform vec3  uColor1;
uniform vec3  uColor2;
uniform vec3  uColor3;
uniform vec3  uColor4;
uniform vec3  uColor5;
uniform vec3  uColor6;
uniform vec3  uColor7;
uniform int   uColorCount;

uniform vec3  uBgColor;
uniform vec3  uMouseColor;
uniform float uSpeed;
uniform int   uStreakCount;
uniform float uStreakWidth;
uniform float uStreakLength;
uniform float uGlow;
uniform float uDensity;
uniform float uTwinkle;
uniform float uZoom;
uniform float uBgGlow;
uniform float uOpacity;
uniform float uMouseEnabled;
uniform float uMouseStrength;
uniform float uMouseRadius;
uniform float uLightMode;

varying vec2 vUv;

vec3 palette(float h) {
  int count = uColorCount;
  if (count < 1) count = 1;
  int idx = int(floor(clamp(h, 0.0, 0.999999) * float(count)));
  if (idx <= 0) return uColor0;
  if (idx == 1) return uColor1;
  if (idx == 2) return uColor2;
  if (idx == 3) return uColor3;
  if (idx == 4) return uColor4;
  if (idx == 5) return uColor5;
  if (idx == 6) return uColor6;
  return uColor7;
}

vec3 tanhv(vec3 x) {
  vec3 e = exp(-2.0 * x);
  return (1.0 - e) / (1.0 + e);
}

vec2 sceneC(vec2 frag, vec2 r) {
  vec2 P = (frag + frag - r) / r.x;
  float z = 0.0;
  float d = 1e3;
  vec4 O = vec4(0.0);
  for (int k = 0; k < 39; k++) {
    if (d <= 1e-4) break;
    O = z * normalize(vec4(P, uZoom, 0.0)) - vec4(0.0, 4.0, 1.0, 0.0) / 4.5;
    d = 1.0 - sqrt(length(O * O));
    z += d;
  }
  return vec2(O.x, atan(O.z, O.y));
}

void mainImage(out vec4 o, vec2 C) {
  vec2 r = iResolution.xy;
  vec2 uv0 = (C + C - r) / r.x;
  float T = 0.1 * iTime * uSpeed + 9.0;
  float angRings = max(1.0, floor(6.28318530718 * max(uDensity, 0.05) + 0.5));
  vec2 Y = vec2(5e-3, 6.28318530718 / angRings);

  vec2 c0 = sceneC(C, r);
  vec2 cdx = sceneC(C + vec2(1.0, 0.0), r);
  vec2 cdy = sceneC(C + vec2(0.0, 1.0), r);
  vec2 dCx = cdx - c0;
  vec2 dCy = cdy - c0;
  dCx.y -= 6.28318530718 * floor(dCx.y / 6.28318530718 + 0.5);
  dCy.y -= 6.28318530718 * floor(dCy.y / 6.28318530718 + 0.5);
  vec2 fw = abs(dCx) + abs(dCy);
  C = c0;

  vec2 P = vec2(2.0, 1.0) * uv0 - (r / r.x) * vec2(0.0, 1.0);
  vec4 O = uLightMode > 0.5
    ? vec4(0.0)
    : vec4(uBgColor * 90.0 * uBgGlow / (1e3 * dot(P, P) + 6.0), 0.0);

  float mGlow = 0.0;
  if (uMouseEnabled > 0.5) {
    vec2 mN = (iMouse + iMouse - r) / r.x;
    float md = length(uv0 - mN);
    mGlow = exp(-md * md / max(uMouseRadius * uMouseRadius, 1e-4)) * uMouseStrength;
    O.rgb += uMouseColor * mGlow * 0.25;
  }

  float zr = 5e-4 * uStreakWidth;
  vec2 rr = vec2(max(length(fw), 1e-5));
  float tail = 19.0 / max(uStreakLength, 0.05);

  for (int m = 0; m < 16; m++) {
    if (m >= uStreakCount) break;
    float jf = float(m) + 1.0;
    float ic = fract(sin(dot(vec2(jf, floor(C.x / Y.x + 0.5)), vec2(7.0, 11.0)) * 73.0));
    vec2 Pp = C - (T + T * ic) * vec2(0.0, 1.0);
    Pp -= floor(Pp / Y + 0.5) * Y;
    float h = fract(8663.0 * ic);
    vec3 col = palette(h);
    float weight = mix(1.5, 1.0 + sin(T + 7.0 * h + 4.0), uTwinkle);
    weight *= (1.0 + mGlow * 2.0);
    vec2 inner = vec2(length(max(Pp, vec2(-1.0, 0.0))), length(Pp) - zr) - zr;
    vec2 sm = vec2(1.0) - smoothstep(-rr, rr, inner);
    O.rgb += dot(sm, vec2(exp(tail * Pp.y), 3.0)) * col * weight;
    C.x += Y.x / 8.0;
  }

  vec3 colr = sqrt(tanhv(max(O.rgb * uGlow - vec3(0.04, 0.08, 0.02), 0.0)));
  if (uLightMode > 0.5) {
    float peak = max(colr.r, max(colr.g, colr.b));
    float coverage = smoothstep(0.035, 0.58, peak) * uOpacity;
    vec3 chroma = clamp(colr / max(peak, 1e-4), 0.0, 1.0);
    chroma = pow(chroma, vec3(1.35));
    float chromaPeak = max(chroma.r, max(chroma.g, chroma.b));
    chroma /= max(chromaPeak, 1e-4);
    o = vec4(mix(vec3(1.0), chroma, coverage * 0.94), 1.0);
  } else {
    o = vec4(colr, uOpacity);
  }
}

void main() {
  vec4 color;
  mainImage(color, vUv * iResolution.xy);
  gl_FragColor = color;
}
`,eI=({className:n,dpr:e,paused:t=!1,colors:i=["#A6C8FF","#5227FF","#FF9FFC"],backgroundColor:r="#0A29FF",speed:s=.5,streakCount:a=2,streakWidth:o=1,streakLength:l=1,glow:c=1,density:u=.6,twinkle:h=1,zoom:f=3,backgroundGlow:d=.5,opacity:_=1,mouseInteraction:m=!0,mouseStrength:g=.5,mouseRadius:p=1,mouseDampening:v=.15,lightMode:x=!1,mixBlendMode:y})=>{const w=Pe.useRef(null),T=Pe.useRef(null),M=Pe.useRef(null),A=Pe.useRef(null),E=Pe.useRef(null),S=Pe.useRef(null),P=Pe.useRef([0,0]),I=Pe.useRef(0);return Pe.useEffect(()=>{const U=w.current;if(!U)return;const k=new bE({dpr:e??(typeof window<"u"&&window.devicePixelRatio||1),alpha:!0,antialias:!0});S.current=k;const B=k.gl,V=B.canvas;V.style.width="100%",V.style.height="100%",V.style.display="block",U.appendChild(V);const{arr:z,count:D,avg:Y}=ZD(i),L={iResolution:{value:[B.drawingBufferWidth,B.drawingBufferHeight,1]},iMouse:{value:[0,0]},iTime:{value:0},uColor0:{value:z[0]},uColor1:{value:z[1]},uColor2:{value:z[2]},uColor3:{value:z[3]},uColor4:{value:z[4]},uColor5:{value:z[5]},uColor6:{value:z[6]},uColor7:{value:z[7]},uColorCount:{value:D},uBgColor:{value:UE(r)},uMouseColor:{value:Y},uSpeed:{value:s},uStreakCount:{value:Math.max(1,Math.min(16,Math.round(a)))},uStreakWidth:{value:o},uStreakLength:{value:l},uGlow:{value:c},uDensity:{value:u},uTwinkle:{value:h},uZoom:{value:f},uBgGlow:{value:d},uOpacity:{value:_},uMouseEnabled:{value:m?1:0},uMouseStrength:{value:g},uMouseRadius:{value:p},uLightMode:{value:x?1:0}},Q=new RE(B,{vertex:QD,fragment:JD,uniforms:L});M.current=Q;const se=new IE(B);E.current=se;const Te=new DE(B,{geometry:se,program:Q});A.current=Te;const X=()=>{const ae=U.getBoundingClientRect();k.setSize(ae.width,ae.height),L.iResolution.value=[B.drawingBufferWidth,B.drawingBufferHeight,1]};X();const J=new ResizeObserver(X);J.observe(U);const le=ae=>{const de=V.getBoundingClientRect(),Ne=k.dpr||1,ke=(ae.clientX-de.left)*Ne,De=(de.height-(ae.clientY-de.top))*Ne;P.current=[ke,De],v<=0&&(L.iMouse.value=[ke,De])};m&&V.addEventListener("pointermove",le);const re=ae=>{if(T.current=requestAnimationFrame(re),L.iTime.value=ae*.001,v>0){I.current||(I.current=ae);const de=(ae-I.current)/1e3;I.current=ae;const Ne=Math.max(1e-4,v);let ke=1-Math.exp(-de/Ne);ke>1&&(ke=1);const De=P.current,pe=L.iMouse.value;pe[0]+=(De[0]-pe[0])*ke,pe[1]+=(De[1]-pe[1])*ke}else I.current=ae;if(!t&&M.current&&A.current)try{k.render({scene:A.current})}catch(de){console.error(de)}};return T.current=requestAnimationFrame(re),()=>{T.current&&cancelAnimationFrame(T.current),m&&V.removeEventListener("pointermove",le),J.disconnect(),V.parentElement===U&&U.removeChild(V);const ae=(de,Ne)=>{de&&typeof de[Ne]=="function"&&de[Ne].call(de)};ae(M.current,"remove"),ae(E.current,"remove"),ae(A.current,"remove"),ae(S.current,"destroy"),M.current=null,E.current=null,A.current=null,S.current=null}},[e,t,i,r,s,a,o,l,c,u,h,f,d,_,m,g,p,v,x]),b.jsx("div",{ref:w,className:`lightfall-container ${n??""}`,style:{...y&&{mixBlendMode:y}}})};function tI(){const[n,e]=Pe.useState(0),t=Pe.useRef(0);return Pe.useEffect(()=>{let i=!1;const r=()=>{i||(window.requestAnimationFrame(()=>{const s=document.documentElement.scrollHeight-window.innerHeight;if(s>0){const a=window.scrollY/s,o=Math.min(Math.max(a,0),1);e(o),t.current=o}i=!1}),i=!0)};return window.addEventListener("scroll",r,{passive:!0}),r(),()=>{window.removeEventListener("scroll",r)}},[]),b.jsxs("div",{className:"portfolio-app-root",children:[b.jsx("div",{className:"lightfall-bg","aria-hidden":"true",children:b.jsx(eI,{colors:["#dff7ff","#7dd3fc","#8b5cf6","#f9a8d4","#5eead4"],backgroundColor:"#040b1d",speed:1.1,streakCount:7,streakWidth:1.1,streakLength:1.2,glow:2.4,density:1.1,twinkle:.9,zoom:1.5,backgroundGlow:1,opacity:1,mouseInteraction:!0,mouseStrength:.75,mouseRadius:.8,mouseDampening:.18,mixBlendMode:"screen"})}),b.jsxs("div",{className:"ambient-bg","aria-hidden":"true",children:[b.jsx("div",{className:"ambient-grid"}),b.jsx("div",{className:"ambient-orb orb-one"}),b.jsx("div",{className:"ambient-orb orb-two"}),b.jsx("div",{className:"ambient-orb orb-three"})]}),b.jsx(cA,{}),b.jsxs("main",{className:"content-layers",children:[b.jsx(MA,{}),b.jsx(l2,{}),b.jsx(h2,{}),b.jsx(YD,{}),b.jsx($D,{}),b.jsx(qD,{}),b.jsx(KD,{})]})]})}fp.createRoot(document.getElementById("root")).render(b.jsx(Ty.StrictMode,{children:b.jsx(tI,{})}));
