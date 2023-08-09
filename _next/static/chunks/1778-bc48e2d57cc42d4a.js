"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1778],{1778:function(e,t,r){r.d(t,{q:function(){return ru},q_:function(){return t0}});var n,s,i,a=r(6006),o=Object.defineProperty,u={};((e,t)=>{for(var r in t)o(e,r,{get:t[r],enumerable:!0})})(u,{assign:()=>N,colors:()=>F,createStringInterpolator:()=>n,skipAnimation:()=>z,to:()=>s,willAdvance:()=>T});var l=S(),d=e=>w(e,l),h=S();d.write=e=>w(e,h);var c=S();d.onStart=e=>w(e,c);var p=S();d.onFrame=e=>w(e,p);var f=S();d.onFinish=e=>w(e,f);var m=[];d.setTimeout=(e,t)=>{let r=d.now()+t,n=()=>{let e=m.findIndex(e=>e.cancel==n);~e&&m.splice(e,1),_-=~e?1:0},s={time:r,handler:e,cancel:n};return m.splice(g(r),0,s),_+=1,k(),s};var g=e=>~(~m.findIndex(t=>t.time>e)||~m.length);d.cancel=e=>{c.delete(e),p.delete(e),f.delete(e),l.delete(e),h.delete(e)},d.sync=e=>{b=!0,d.batchedUpdates(e),b=!1},d.throttle=e=>{let t;function r(){try{e(...t)}finally{t=null}}function n(...e){t=e,d.onStart(r)}return n.handler=e,n.cancel=()=>{c.delete(r),t=null},n};var y="undefined"!=typeof window?window.requestAnimationFrame:()=>{};d.use=e=>y=e,d.now="undefined"!=typeof performance?()=>performance.now():Date.now,d.batchedUpdates=e=>e(),d.catch=console.error,d.frameLoop="always",d.advance=()=>{"demand"!==d.frameLoop?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):x()};var v=-1,_=0,b=!1;function w(e,t){b?(t.delete(e),e(0)):(t.add(e),k())}function k(){v<0&&(v=0,"demand"!==d.frameLoop&&y(P))}function P(){~v&&(y(P),d.batchedUpdates(x))}function x(){let e=v;v=d.now();let t=g(v);if(t&&(A(m.splice(0,t),e=>e.handler()),_-=t),!_){v=-1;return}c.flush(),l.flush(e?Math.min(64,v-e):16.667),p.flush(),h.flush(),f.flush()}function S(){let e=new Set,t=e;return{add(r){_+=t!=e||e.has(r)?0:1,e.add(r)},delete:r=>(_-=t==e&&e.has(r)?1:0,e.delete(r)),flush(r){t.size&&(e=new Set,_-=t.size,A(t,t=>t(r)&&e.add(t)),_+=e.size,t=e)}}}function A(e,t){e.forEach(e=>{try{t(e)}catch(e){d.catch(e)}})}function C(){}var I=(e,t,r)=>Object.defineProperty(e,t,{value:r,writable:!0,configurable:!0}),V={arr:Array.isArray,obj:e=>!!e&&"Object"===e.constructor.name,fun:e=>"function"==typeof e,str:e=>"string"==typeof e,num:e=>"number"==typeof e,und:e=>void 0===e};function R(e,t){if(V.arr(e)){if(!V.arr(t)||e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}return e===t}var O=(e,t)=>e.forEach(t);function j(e,t,r){if(V.arr(e)){for(let n=0;n<e.length;n++)t.call(r,e[n],`${n}`);return}for(let n in e)e.hasOwnProperty(n)&&t.call(r,e[n],n)}var M=e=>V.und(e)?[]:V.arr(e)?e:[e];function E(e,t){if(e.size){let r=Array.from(e);e.clear(),O(r,t)}}var q=(e,...t)=>E(e,e=>e(...t)),$=()=>"undefined"==typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),F=null,z=!1,T=C,N=e=>{e.to&&(s=e.to),e.now&&(d.now=e.now),void 0!==e.colors&&(F=e.colors),null!=e.skipAnimation&&(z=e.skipAnimation),e.createStringInterpolator&&(n=e.createStringInterpolator),e.requestAnimationFrame&&d.use(e.requestAnimationFrame),e.batchedUpdates&&(d.batchedUpdates=e.batchedUpdates),e.willAdvance&&(T=e.willAdvance),e.frameLoop&&(d.frameLoop=e.frameLoop)},U=new Set,Q=[],D=[],L=0,W={get idle(){return!U.size&&!Q.length},start(e){L>e.priority?(U.add(e),d.onStart(G)):(Z(e),d(H))},advance:H,sort(e){if(L)d.onFrame(()=>W.sort(e));else{let t=Q.indexOf(e);~t&&(Q.splice(t,1),B(e))}},clear(){Q=[],U.clear()}};function G(){U.forEach(Z),U.clear(),d(H)}function Z(e){Q.includes(e)||B(e)}function B(e){Q.splice(function(e,t){let r=e.findIndex(t);return r<0?e.length:r}(Q,t=>t.priority>e.priority),0,e)}function H(e){let t=D;for(let r=0;r<Q.length;r++){let n=Q[r];L=n.priority,n.idle||(T(n),n.advance(e),n.idle||t.push(n))}return L=0,(D=Q).length=0,(Q=t).length>0}var J="[-+]?\\d*\\.?\\d+",X=J+"%";function Y(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}var K=RegExp("rgb"+Y(J,J,J)),ee=RegExp("rgba"+Y(J,J,J,J)),et=RegExp("hsl"+Y(J,X,X)),er=RegExp("hsla"+Y(J,X,X,J)),en=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,es=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,ei=/^#([0-9a-fA-F]{6})$/,ea=/^#([0-9a-fA-F]{8})$/;function eo(e,t,r){return(r<0&&(r+=1),r>1&&(r-=1),r<1/6)?e+(t-e)*6*r:r<.5?t:r<2/3?e+(t-e)*(2/3-r)*6:e}function eu(e,t,r){let n=r<.5?r*(1+t):r+t-r*t,s=2*r-n,i=eo(s,n,e+1/3),a=eo(s,n,e),o=eo(s,n,e-1/3);return Math.round(255*i)<<24|Math.round(255*a)<<16|Math.round(255*o)<<8}function el(e){let t=parseInt(e,10);return t<0?0:t>255?255:t}function ed(e){let t=parseFloat(e);return(t%360+360)%360/360}function eh(e){let t=parseFloat(e);return t<0?0:t>1?255:Math.round(255*t)}function ec(e){let t=parseFloat(e);return t<0?0:t>100?1:t/100}function ep(e){let t;let r="number"==typeof e?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=ei.exec(e))?parseInt(t[1]+"ff",16)>>>0:F&&void 0!==F[e]?F[e]:(t=K.exec(e))?(el(t[1])<<24|el(t[2])<<16|el(t[3])<<8|255)>>>0:(t=ee.exec(e))?(el(t[1])<<24|el(t[2])<<16|el(t[3])<<8|eh(t[4]))>>>0:(t=en.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=ea.exec(e))?parseInt(t[1],16)>>>0:(t=es.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=et.exec(e))?(255|eu(ed(t[1]),ec(t[2]),ec(t[3])))>>>0:(t=er.exec(e))?(eu(ed(t[1]),ec(t[2]),ec(t[3]))|eh(t[4]))>>>0:null;if(null===r)return e;r=r||0;let n=(4278190080&r)>>>24,s=(16711680&r)>>>16,i=(65280&r)>>>8,a=(255&r)/255;return`rgba(${n}, ${s}, ${i}, ${a})`}var ef=(e,t,r)=>{if(V.fun(e))return e;if(V.arr(e))return ef({range:e,output:t,extrapolate:r});if(V.str(e.output[0]))return n(e);let s=e.output,i=e.range||[0,1],a=e.extrapolateLeft||e.extrapolate||"extend",o=e.extrapolateRight||e.extrapolate||"extend",u=e.easing||(e=>e);return t=>{let r=function(e,t){for(var r=1;r<t.length-1&&!(t[r]>=e);++r);return r-1}(t,i);return function(e,t,r,n,s,i,a,o,u){let l=u?u(e):e;if(l<t){if("identity"===a)return l;"clamp"===a&&(l=t)}if(l>r){if("identity"===o)return l;"clamp"===o&&(l=r)}return n===s?n:t===r?e<=t?n:s:(t===-1/0?l=-l:r===1/0?l-=t:l=(l-t)/(r-t),l=i(l),n===-1/0?l=-l:s===1/0?l+=n:l=l*(s-n)+n,l)}(t,i[r],i[r+1],s[r],s[r+1],u,a,o,e.map)}},em=Symbol.for("FluidValue.get"),eg=Symbol.for("FluidValue.observers"),ey=e=>!!(e&&e[em]),ev=e=>e&&e[em]?e[em]():e,e_=e=>e[eg]||null;function eb(e,t){let r=e[eg];r&&r.forEach(e=>{e.eventObserved?e.eventObserved(t):e(t)})}var ew=class{constructor(e){if(!e&&!(e=this.get))throw Error("Unknown getter");ek(this,e)}},ek=(e,t)=>eS(e,em,t);function eP(e,t){if(e[em]){let r=e[eg];r||eS(e,eg,r=new Set),!r.has(t)&&(r.add(t),e.observerAdded&&e.observerAdded(r.size,t))}return t}function ex(e,t){let r=e[eg];if(r&&r.has(t)){let n=r.size-1;n?r.delete(t):e[eg]=null,e.observerRemoved&&e.observerRemoved(n,t)}}var eS=(e,t,r)=>Object.defineProperty(e,t,{value:r,writable:!0,configurable:!0}),eA=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,eC=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,eI=RegExp(`(${eA.source})(%|[a-z]+)`,"i"),eV=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,eR=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,eO=e=>{let[t,r]=ej(e);if(!t||$())return e;let n=window.getComputedStyle(document.documentElement).getPropertyValue(t);if(n)return n.trim();if(r&&r.startsWith("--")){let e=window.getComputedStyle(document.documentElement).getPropertyValue(r);if(e)return e}else if(r&&eR.test(r))return eO(r);else if(r)return r;return e},ej=e=>{let t=eR.exec(e);if(!t)return[,];let[,r,n]=t;return[r,n]},eM=(e,t,r,n,s)=>`rgba(${Math.round(t)}, ${Math.round(r)}, ${Math.round(n)}, ${s})`,eE=e=>{i||(i=F?RegExp(`(${Object.keys(F).join("|")})(?!\\w)`,"g"):/^\b$/);let t=e.output.map(e=>ev(e).replace(eR,eO).replace(eC,ep).replace(i,ep)),r=t.map(e=>e.match(eA).map(Number)),n=r[0].map((e,t)=>r.map(e=>{if(!(t in e))throw Error('The arity of each "output" value must be equal');return e[t]})),s=n.map(t=>ef({...e,output:t}));return e=>{let r=!eI.test(t[0])&&t.find(e=>eI.test(e))?.replace(eA,""),n=0;return t[0].replace(eA,()=>`${s[n++](e)}${r||""}`).replace(eV,eM)}},eq="react-spring: ",e$=e=>{let t=!1;if("function"!=typeof e)throw TypeError(`${eq}once requires a function parameter`);return(...r)=>{t||(e(...r),t=!0)}},eF=e$(console.warn),ez=e$(console.warn);function eT(e){return V.str(e)&&("#"==e[0]||/\d/.test(e)||!$()&&eR.test(e)||e in(F||{}))}new WeakMap,new WeakMap,new WeakMap,new WeakMap;var eN=$()?a.useEffect:a.useLayoutEffect,eU=()=>{let e=(0,a.useRef)(!1);return eN(()=>(e.current=!0,()=>{e.current=!1}),[]),e};function eQ(){let e=(0,a.useState)()[1],t=eU();return()=>{t.current&&e(Math.random())}}var eD=e=>(0,a.useEffect)(e,eL),eL=[];function eW(e){let t=(0,a.useRef)();return(0,a.useEffect)(()=>{t.current=e}),t.current}var eG=Symbol.for("Animated:node"),eZ=e=>!!e&&e[eG]===e,eB=e=>e&&e[eG],eH=(e,t)=>I(e,eG,t),eJ=e=>e&&e[eG]&&e[eG].getPayload(),eX=class{constructor(){eH(this,this)}getPayload(){return this.payload||[]}},eY=class extends eX{constructor(e){super(),this._value=e,this.done=!0,this.durationProgress=0,V.num(this._value)&&(this.lastPosition=this._value)}static create(e){return new eY(e)}getPayload(){return[this]}getValue(){return this._value}setValue(e,t){return V.num(e)&&(this.lastPosition=e,t&&(e=Math.round(e/t)*t,this.done&&(this.lastPosition=e))),this._value!==e&&(this._value=e,!0)}reset(){let{done:e}=this;this.done=!1,V.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}},eK=class extends eY{constructor(e){super(0),this._string=null,this._toString=ef({output:[e,e]})}static create(e){return new eK(e)}getValue(){let e=this._string;return null==e?this._string=this._toString(this._value):e}setValue(e){if(V.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else{if(!super.setValue(e))return!1;this._string=null}return!0}reset(e){e&&(this._toString=ef({output:[this.getValue(),e]})),this._value=0,super.reset()}},e0={dependencies:null},e1=class extends eX{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){let t={};return j(this.source,(r,n)=>{eZ(r)?t[n]=r.getValue(e):ey(r)?t[n]=ev(r):e||(t[n]=r)}),t}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&O(this.payload,e=>e.reset())}_makePayload(e){if(e){let t=new Set;return j(e,this._addToPayload,t),Array.from(t)}}_addToPayload(e){e0.dependencies&&ey(e)&&e0.dependencies.add(e);let t=eJ(e);t&&O(t,e=>this.add(e))}},e2=class extends e1{constructor(e){super(e)}static create(e){return new e2(e)}getValue(){return this.source.map(e=>e.getValue())}setValue(e){let t=this.getPayload();return e.length==t.length?t.map((t,r)=>t.setValue(e[r])).some(Boolean):(super.setValue(e.map(e5)),!0)}};function e5(e){let t=eT(e)?eK:eY;return t.create(e)}function e3(e){let t=eB(e);return t?t.constructor:V.arr(e)?e2:eT(e)?eK:eY}var e4=(e,t)=>{let r=!V.fun(e)||e.prototype&&e.prototype.isReactComponent;return(0,a.forwardRef)((n,s)=>{let i=(0,a.useRef)(null),o=r&&(0,a.useCallback)(e=>{i.current=(s&&(V.fun(s)?s(e):s.current=e),e)},[s]),[u,l]=function(e,t){let r=new Set;return e0.dependencies=r,e.style&&(e={...e,style:t.createAnimatedStyle(e.style)}),e=new e1(e),e0.dependencies=null,[e,r]}(n,t),h=eQ(),c=()=>{let e=i.current;if(r&&!e)return;let n=!!e&&t.applyAnimatedValues(e,u.getValue(!0));!1===n&&h()},p=new e9(c,l),f=(0,a.useRef)();eN(()=>(f.current=p,O(l,e=>eP(e,p)),()=>{f.current&&(O(f.current.deps,e=>ex(e,f.current)),d.cancel(f.current.update))})),(0,a.useEffect)(c,[]),eD(()=>()=>{let e=f.current;O(e.deps,t=>ex(t,e))});let m=t.getComponentProps(u.getValue());return a.createElement(e,{...m,ref:o})})},e9=class{constructor(e,t){this.update=e,this.deps=t}eventObserved(e){"change"==e.type&&d.write(this.update)}},e7=Symbol.for("AnimatedComponent"),e8=e=>V.str(e)?e:e&&V.str(e.displayName)?e.displayName:V.fun(e)&&e.name||null;function e6(e,...t){return V.fun(e)?e(...t):e}var te=(e,t)=>!0===e||!!(t&&e&&(V.fun(e)?e(t):M(e).includes(t))),tt=(e,t)=>V.obj(e)?t&&e[t]:e,tr=(e,t)=>!0===e.default?e[t]:e.default?e.default[t]:void 0,tn=e=>e,ts=(e,t=tn)=>{let r=ti;e.default&&!0!==e.default&&(r=Object.keys(e=e.default));let n={};for(let s of r){let r=t(e[s],s);V.und(r)||(n[s]=r)}return n},ti=["config","onProps","onStart","onChange","onPause","onResume","onRest"],ta={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function to(e){let t=function(e){let t={},r=0;if(j(e,(e,n)=>{!ta[n]&&(t[n]=e,r++)}),r)return t}(e);if(t){let r={to:t};return j(e,(e,n)=>n in t||(r[n]=e)),r}return{...e}}function tu(e){return e=ev(e),V.arr(e)?e.map(tu):eT(e)?u.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function tl(e){return V.fun(e)||V.arr(e)&&V.obj(e[0])}var td={tension:170,friction:26,mass:1,damping:1,easing:e=>e,clamp:!1},th=class{constructor(){this.velocity=0,Object.assign(this,td)}};function tc(e,t){if(V.und(t.decay)){let r=!V.und(t.tension)||!V.und(t.friction);!r&&V.und(t.frequency)&&V.und(t.damping)&&V.und(t.mass)||(e.duration=void 0,e.decay=void 0),r&&(e.frequency=void 0)}else e.duration=void 0}var tp=[],tf=class{constructor(){this.changed=!1,this.values=tp,this.toValues=null,this.fromValues=tp,this.config=new th,this.immediate=!1}};function tm(e,{key:t,props:r,defaultProps:n,state:s,actions:i}){return new Promise((a,o)=>{let l,h;let c=te(r.cancel??n?.cancel,t);if(c)m();else{V.und(r.pause)||(s.paused=te(r.pause,t));let e=n?.pause;!0!==e&&(e=s.paused||te(e,t)),l=e6(r.delay||0,t),e?(s.resumeQueue.add(f),i.pause()):(i.resume(),f())}function p(){s.resumeQueue.add(f),s.timeouts.delete(h),h.cancel(),l=h.time-d.now()}function f(){l>0&&!u.skipAnimation?(s.delayed=!0,h=d.setTimeout(m,l),s.pauseQueue.add(p),s.timeouts.add(h)):m()}function m(){s.delayed&&(s.delayed=!1),s.pauseQueue.delete(p),s.timeouts.delete(h),e<=(s.cancelId||0)&&(c=!0);try{i.start({...r,callId:e,cancel:c},a)}catch(e){o(e)}}})}var tg=(e,t)=>1==t.length?t[0]:t.some(e=>e.cancelled)?t_(e.get()):t.every(e=>e.noop)?ty(e.get()):tv(e.get(),t.every(e=>e.finished)),ty=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),tv=(e,t,r=!1)=>({value:e,finished:t,cancelled:r}),t_=e=>({value:e,cancelled:!0,finished:!1});function tb(e,t,r,n){let{callId:s,parentId:i,onRest:a}=t,{asyncTo:o,promise:l}=r;return i||e!==o||t.reset?r.promise=(async()=>{let h,c,p;r.asyncId=s,r.asyncTo=e;let f=ts(t,(e,t)=>"onRest"===t?void 0:e),m=new Promise((e,t)=>(h=e,c=t)),g=e=>{let t=s<=(r.cancelId||0)&&t_(n)||s!==r.asyncId&&tv(n,!1);if(t)throw e.result=t,c(e),e},y=(e,t)=>{let i=new tk,a=new tP;return(async()=>{if(u.skipAnimation)throw tw(r),a.result=tv(n,!1),c(a),a;g(i);let o=V.obj(e)?{...e}:{...t,to:e};o.parentId=s,j(f,(e,t)=>{V.und(o[t])&&(o[t]=e)});let l=await n.start(o);return g(i),r.paused&&await new Promise(e=>{r.resumeQueue.add(e)}),l})()};if(u.skipAnimation)return tw(r),tv(n,!1);try{let t;t=V.arr(e)?(async e=>{for(let t of e)await y(t)})(e):Promise.resolve(e(y,n.stop.bind(n))),await Promise.all([t.then(h),m]),p=tv(n.get(),!0,!1)}catch(e){if(e instanceof tk)p=e.result;else if(e instanceof tP)p=e.result;else throw e}finally{s==r.asyncId&&(r.asyncId=i,r.asyncTo=i?o:void 0,r.promise=i?l:void 0)}return V.fun(a)&&d.batchedUpdates(()=>{a(p,n,n.item)}),p})():l}function tw(e,t){E(e.timeouts,e=>e.cancel()),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,t&&(e.cancelId=t)}var tk=class extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")}},tP=class extends Error{constructor(){super("SkipAnimationSignal")}},tx=e=>e instanceof tA,tS=1,tA=class extends ew{constructor(){super(...arguments),this.id=tS++,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}get(){let e=eB(this);return e&&e.getValue()}to(...e){return u.to(this,e)}interpolate(...e){return eF(`${eq}The "interpolate" function is deprecated in v9 (use "to" instead)`),u.to(this,e)}toJSON(){return this.get()}observerAdded(e){1==e&&this._attach()}observerRemoved(e){0==e&&this._detach()}_attach(){}_detach(){}_onChange(e,t=!1){eb(this,{type:"change",parent:this,value:e,idle:t})}_onPriorityChange(e){this.idle||W.sort(this),eb(this,{type:"priority",parent:this,priority:e})}},tC=Symbol.for("SpringPhase"),tI=e=>(1&e[tC])>0,tV=e=>(2&e[tC])>0,tR=e=>(4&e[tC])>0,tO=(e,t)=>t?e[tC]|=3:e[tC]&=-3,tj=(e,t)=>t?e[tC]|=4:e[tC]&=-5,tM=class extends tA{constructor(e,t){if(super(),this.animation=new tf,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!V.und(e)||!V.und(t)){let r=V.obj(e)?{...e}:{...t,from:e};V.und(r.default)&&(r.default=!0),this.start(r)}}get idle(){return!(tV(this)||this._state.asyncTo)||tR(this)}get goal(){return ev(this.animation.to)}get velocity(){let e=eB(this);return e instanceof eY?e.lastVelocity||0:e.getPayload().map(e=>e.lastVelocity||0)}get hasAnimated(){return tI(this)}get isAnimating(){return tV(this)}get isPaused(){return tR(this)}get isDelayed(){return this._state.delayed}advance(e){let t=!0,r=!1,n=this.animation,{toValues:s}=n,{config:i}=n,a=eJ(n.to);!a&&ey(n.to)&&(s=M(ev(n.to))),n.values.forEach((o,u)=>{if(o.done)return;let l=o.constructor==eK?1:a?a[u].lastPosition:s[u],d=n.immediate,h=l;if(!d){let t;if(h=o.lastPosition,i.tension<=0){o.done=!0;return}let r=o.elapsedTime+=e,s=n.fromValues[u],a=null!=o.v0?o.v0:o.v0=V.arr(i.velocity)?i.velocity[u]:i.velocity,c=i.precision||(s==l?.005:Math.min(1,.001*Math.abs(l-s)));if(V.und(i.duration)){if(i.decay){let e=!0===i.decay?.998:i.decay,n=Math.exp(-(1-e)*r);h=s+a/(1-e)*(1-n),d=Math.abs(o.lastPosition-h)<=c,t=a*n}else{t=null==o.lastVelocity?a:o.lastVelocity;let r=i.restVelocity||c/10,n=i.clamp?0:i.bounce,u=!V.und(n),p=s==l?o.v0>0:s<l,f=Math.ceil(e/1);for(let e=0;e<f&&!(!(Math.abs(t)>r)&&(d=Math.abs(l-h)<=c));++e){u&&(h==l||h>l==p)&&(t=-t*n,h=l);let e=-(1e-6*i.tension)*(h-l),r=-(.001*i.friction)*t,s=(e+r)/i.mass;t+=1*s,h+=1*t}}}else{let n=1;i.duration>0&&(this._memoizedDuration!==i.duration&&(this._memoizedDuration=i.duration,o.durationProgress>0&&(o.elapsedTime=i.duration*o.durationProgress,r=o.elapsedTime+=e)),n=(n=(i.progress||0)+r/this._memoizedDuration)>1?1:n<0?0:n,o.durationProgress=n),t=((h=s+i.easing(n)*(l-s))-o.lastPosition)/e,d=1==n}o.lastVelocity=t,Number.isNaN(h)&&(console.warn("Got NaN while animating:",this),d=!0)}a&&!a[u].done&&(d=!1),d?o.done=!0:t=!1,o.setValue(h,i.round)&&(r=!0)});let o=eB(this),u=o.getValue();if(t){let e=ev(n.to);(u!==e||r)&&!i.decay?(o.setValue(e),this._onChange(e)):r&&i.decay&&this._onChange(u),this._stop()}else r&&this._onChange(u)}set(e){return d.batchedUpdates(()=>{this._stop(),this._focus(e),this._set(e)}),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(tV(this)){let{to:e,config:t}=this.animation;d.batchedUpdates(()=>{this._onStart(),t.decay||this._set(e,!1),this._stop()})}return this}update(e){let t=this.queue||(this.queue=[]);return t.push(e),this}start(e,t){let r;return V.und(e)?(r=this.queue||[],this.queue=[]):r=[V.obj(e)?e:{...t,to:e}],Promise.all(r.map(e=>{let t=this._update(e);return t})).then(e=>tg(this,e))}stop(e){let{to:t}=this.animation;return this._focus(this.get()),tw(this._state,e&&this._lastCallId),d.batchedUpdates(()=>this._stop(t,e)),this}reset(){this._update({reset:!0})}eventObserved(e){"change"==e.type?this._start():"priority"==e.type&&(this.priority=e.priority+1)}_prepareNode(e){let t=this.key||"",{to:r,from:n}=e;(null==(r=V.obj(r)?r[t]:r)||tl(r))&&(r=void 0),null==(n=V.obj(n)?n[t]:n)&&(n=void 0);let s={to:r,from:n};return tI(this)||(e.reverse&&([r,n]=[n,r]),n=ev(n),V.und(n)?eB(this)||this._set(r):this._set(n)),s}_update({...e},t){let{key:r,defaultProps:n}=this;e.default&&Object.assign(n,ts(e,(e,t)=>/^on/.test(t)?tt(e,r):e)),tT(this,e,"onProps"),tN(this,"onProps",e,this);let s=this._prepareNode(e);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");let i=this._state;return tm(++this._lastCallId,{key:r,props:e,defaultProps:n,state:i,actions:{pause:()=>{tR(this)||(tj(this,!0),q(i.pauseQueue),tN(this,"onPause",tv(this,tE(this,this.animation.to)),this))},resume:()=>{tR(this)&&(tj(this,!1),tV(this)&&this._resume(),q(i.resumeQueue),tN(this,"onResume",tv(this,tE(this,this.animation.to)),this))},start:this._merge.bind(this,s)}}).then(r=>{if(e.loop&&r.finished&&!(t&&r.noop)){let t=tq(e);if(t)return this._update(t,!0)}return r})}_merge(e,t,r){if(t.cancel)return this.stop(!0),r(t_(this));let n=!V.und(e.to),s=!V.und(e.from);if(n||s){if(!(t.callId>this._lastToId))return r(t_(this));this._lastToId=t.callId}let{key:i,defaultProps:a,animation:o}=this,{to:u,from:l}=o,{to:h=u,from:c=l}=e;s&&!n&&(!t.default||V.und(h))&&(h=c),t.reverse&&([h,c]=[c,h]);let p=!R(c,l);p&&(o.from=c),c=ev(c);let f=!R(h,u);f&&this._focus(h);let m=tl(t.to),{config:g}=o,{decay:y,velocity:v}=g;(n||s)&&(g.velocity=0),t.config&&!m&&function(e,t,r){for(let n in r&&(tc(r={...r},t),t={...r,...t}),tc(e,t),Object.assign(e,t),td)null==e[n]&&(e[n]=td[n]);let{frequency:n,damping:s}=e,{mass:i}=e;V.und(n)||(n<.01&&(n=.01),s<0&&(s=0),e.tension=Math.pow(2*Math.PI/n,2)*i,e.friction=4*Math.PI*s*i/n)}(g,e6(t.config,i),t.config!==a.config?e6(a.config,i):void 0);let _=eB(this);if(!_||V.und(h))return r(tv(this,!0));let b=V.und(t.reset)?s&&!t.default:!V.und(c)&&te(t.reset,i),w=b?c:this.get(),k=tu(h),P=V.num(k)||V.arr(k)||eT(k),x=!m&&(!P||te(a.immediate||t.immediate,i));if(f){let e=e3(h);if(e!==_.constructor){if(x)_=this._set(k);else throw Error(`Cannot animate between ${_.constructor.name} and ${e.name}, as the "to" prop suggests`)}}let S=_.constructor,A=ey(h),C=!1;if(!A){let e=b||!tI(this)&&p;(f||e)&&(A=!(C=R(tu(w),k))),(R(o.immediate,x)||x)&&R(g.decay,y)&&R(g.velocity,v)||(A=!0)}if(C&&tV(this)&&(o.changed&&!b?A=!0:A||this._stop(u)),!m&&((A||ey(u))&&(o.values=_.getPayload(),o.toValues=ey(h)?null:S==eK?[1]:M(k)),o.immediate==x||(o.immediate=x,x||b||this._set(u)),A)){let{onRest:e}=o;O(tz,e=>tT(this,t,e));let n=tv(this,tE(this,u));q(this._pendingCalls,n),this._pendingCalls.add(r),o.changed&&d.batchedUpdates(()=>{o.changed=!b,e?.(n,this),b?e6(a.onRest,n):o.onStart?.(n,this)})}b&&this._set(w),m?r(tb(t.to,t,this._state,this)):A?this._start():tV(this)&&!f?this._pendingCalls.add(r):r(ty(w))}_focus(e){let t=this.animation;e!==t.to&&(e_(this)&&this._detach(),t.to=e,e_(this)&&this._attach())}_attach(){let e=0,{to:t}=this.animation;ey(t)&&(eP(t,this),tx(t)&&(e=t.priority+1)),this.priority=e}_detach(){let{to:e}=this.animation;ey(e)&&ex(e,this)}_set(e,t=!0){let r=ev(e);if(!V.und(r)){let e=eB(this);if(!e||!R(r,e.getValue())){let n=e3(r);e&&e.constructor==n?e.setValue(r):eH(this,n.create(r)),e&&d.batchedUpdates(()=>{this._onChange(r,t)})}}return eB(this)}_onStart(){let e=this.animation;e.changed||(e.changed=!0,tN(this,"onStart",tv(this,tE(this,e.to)),this))}_onChange(e,t){t||(this._onStart(),e6(this.animation.onChange,e,this)),e6(this.defaultProps.onChange,e,this),super._onChange(e,t)}_start(){let e=this.animation;eB(this).reset(ev(e.to)),e.immediate||(e.fromValues=e.values.map(e=>e.lastPosition)),tV(this)||(tO(this,!0),tR(this)||this._resume())}_resume(){u.skipAnimation?this.finish():W.start(this)}_stop(e,t){if(tV(this)){tO(this,!1);let r=this.animation;O(r.values,e=>{e.done=!0}),r.toValues&&(r.onChange=r.onPause=r.onResume=void 0),eb(this,{type:"idle",parent:this});let n=t?t_(this.get()):tv(this.get(),tE(this,e??r.to));q(this._pendingCalls,n),r.changed&&(r.changed=!1,tN(this,"onRest",n,this))}}};function tE(e,t){let r=tu(t),n=tu(e.get());return R(n,r)}function tq(e,t=e.loop,r=e.to){let n=e6(t);if(n){let s=!0!==n&&to(n),i=(s||e).reverse,a=!s||s.reset;return t$({...e,loop:t,default:!1,pause:void 0,to:!i||tl(r)?r:void 0,from:a?e.from:void 0,reset:a,...s})}}function t$(e){let{to:t,from:r}=e=to(e),n=new Set;return V.obj(t)&&tF(t,n),V.obj(r)&&tF(r,n),e.keys=n.size?Array.from(n):null,e}function tF(e,t){j(e,(e,r)=>null!=e&&t.add(r))}var tz=["onStart","onRest","onChange","onPause","onResume"];function tT(e,t,r){e.animation[r]=t[r]!==tr(t,r)?tt(t[r],e.key):void 0}function tN(e,t,...r){e.animation[t]?.(...r),e.defaultProps[t]?.(...r)}var tU=["onStart","onChange","onRest"],tQ=1,tD=class{constructor(e,t){this.id=tQ++,this.springs={},this.queue=[],this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),t&&(this._flush=t),e&&this.start({default:!0,...e})}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every(e=>e.idle&&!e.isDelayed&&!e.isPaused)}get item(){return this._item}set item(e){this._item=e}get(){let e={};return this.each((t,r)=>e[r]=t.get()),e}set(e){for(let t in e){let r=e[t];V.und(r)||this.springs[t].set(r)}}update(e){return e&&this.queue.push(t$(e)),this}start(e){let{queue:t}=this;return(e?t=M(e).map(t$):this.queue=[],this._flush)?this._flush(this,t):(tJ(this,t),tL(this,t))}stop(e,t){if(!!e!==e&&(t=e),t){let r=this.springs;O(M(t),t=>r[t].stop(!!e))}else tw(this._state,this._lastAsyncId),this.each(t=>t.stop(!!e));return this}pause(e){if(V.und(e))this.start({pause:!0});else{let t=this.springs;O(M(e),e=>t[e].pause())}return this}resume(e){if(V.und(e))this.start({pause:!1});else{let t=this.springs;O(M(e),e=>t[e].resume())}return this}each(e){j(this.springs,e)}_onFrame(){let{onStart:e,onChange:t,onRest:r}=this._events,n=this._active.size>0,s=this._changed.size>0;(n&&!this._started||s&&!this._started)&&(this._started=!0,E(e,([e,t])=>{t.value=this.get(),e(t,this,this._item)}));let i=!n&&this._started,a=s||i&&r.size?this.get():null;s&&t.size&&E(t,([e,t])=>{t.value=a,e(t,this,this._item)}),i&&(this._started=!1,E(r,([e,t])=>{t.value=a,e(t,this,this._item)}))}eventObserved(e){if("change"==e.type)this._changed.add(e.parent),e.idle||this._active.add(e.parent);else{if("idle"!=e.type)return;this._active.delete(e.parent)}d.onFrame(this._onFrame)}};function tL(e,t){return Promise.all(t.map(t=>tW(e,t))).then(t=>tg(e,t))}async function tW(e,t,r){let{keys:n,to:s,from:i,loop:a,onRest:o,onResolve:u}=t,l=V.obj(t.default)&&t.default;a&&(t.loop=!1),!1===s&&(t.to=null),!1===i&&(t.from=null);let h=V.arr(s)||V.fun(s)?s:void 0;h?(t.to=void 0,t.onRest=void 0,l&&(l.onRest=void 0)):O(tU,r=>{let n=t[r];if(V.fun(n)){let s=e._events[r];t[r]=({finished:e,cancelled:t})=>{let r=s.get(n);r?(e||(r.finished=!1),t&&(r.cancelled=!0)):s.set(n,{value:null,finished:e||!1,cancelled:t||!1})},l&&(l[r]=t[r])}});let c=e._state;!c.paused===t.pause?(c.paused=t.pause,q(t.pause?c.pauseQueue:c.resumeQueue)):c.paused&&(t.pause=!0);let p=(n||Object.keys(e.springs)).map(r=>e.springs[r].start(t)),f=!0===t.cancel||!0===tr(t,"cancel");(h||f&&c.asyncId)&&p.push(tm(++e._lastAsyncId,{props:t,state:c,actions:{pause:C,resume:C,start(t,r){f?(tw(c,e._lastAsyncId),r(t_(e))):(t.onRest=o,r(tb(h,t,c,e)))}}})),c.paused&&await new Promise(e=>{c.resumeQueue.add(e)});let m=tg(e,await Promise.all(p));if(a&&m.finished&&!(r&&m.noop)){let r=tq(t,a,s);if(r)return tJ(e,[r]),tW(e,r,!0)}return u&&d.batchedUpdates(()=>u(m,e,e.item)),m}function tG(e,t){let r={...e.springs};return t&&O(M(t),e=>{V.und(e.keys)&&(e=t$(e)),V.obj(e.to)||(e={...e,to:void 0}),tH(r,e,e=>tB(e))}),tZ(e,r),r}function tZ(e,t){j(t,(t,r)=>{e.springs[r]||(e.springs[r]=t,eP(t,e))})}function tB(e,t){let r=new tM;return r.key=e,t&&eP(r,t),r}function tH(e,t,r){t.keys&&O(t.keys,n=>{let s=e[n]||(e[n]=r(n));s._prepareNode(t)})}function tJ(e,t){O(t,t=>{tH(e.springs,t,t=>tB(t,e))})}var tX=({children:e,...t})=>{let r=(0,a.useContext)(tY),n=t.pause||!!r.pause,s=t.immediate||!!r.immediate;t=function(e,t){let[r]=(0,a.useState)(()=>({inputs:t,result:e()})),n=(0,a.useRef)(),s=n.current,i=s;if(i){let r=!!(t&&i.inputs&&function(e,t){if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}(t,i.inputs));r||(i={inputs:t,result:e()})}else i=r;return(0,a.useEffect)(()=>{n.current=i,s==r&&(r.inputs=r.result=void 0)},[i]),i.result}(()=>({pause:n,immediate:s}),[n,s]);let{Provider:i}=tY;return a.createElement(i,{value:t},e)},tY=(Object.assign(tX,a.createContext({})),tX.Provider._context=tX,tX.Consumer._context=tX,tX);tX.Provider=tY.Provider,tX.Consumer=tY.Consumer;var tK=()=>{let e=[],t=function(t){ez(`${eq}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);let n=[];return O(e,(e,s)=>{if(V.und(t))n.push(e.start());else{let i=r(t,e,s);i&&n.push(e.start(i))}}),n};t.current=e,t.add=function(t){e.includes(t)||e.push(t)},t.delete=function(t){let r=e.indexOf(t);~r&&e.splice(r,1)},t.pause=function(){return O(e,e=>e.pause(...arguments)),this},t.resume=function(){return O(e,e=>e.resume(...arguments)),this},t.set=function(t){O(e,(e,r)=>{let n=V.fun(t)?t(r,e):t;n&&e.set(n)})},t.start=function(t){let r=[];return O(e,(e,n)=>{if(V.und(t))r.push(e.start());else{let s=this._getProps(t,e,n);s&&r.push(e.start(s))}}),r},t.stop=function(){return O(e,e=>e.stop(...arguments)),this},t.update=function(t){return O(e,(e,r)=>e.update(this._getProps(t,e,r))),this};let r=function(e,t,r){return V.fun(e)?e(r,t):e};return t._getProps=r,t};function t0(e,t){let r=V.fun(e),[[n],s]=function(e,t,r){let n=V.fun(t)&&t;n&&!r&&(r=[]);let s=(0,a.useMemo)(()=>n||3==arguments.length?tK():void 0,[]),i=(0,a.useRef)(0),o=eQ(),u=(0,a.useMemo)(()=>({ctrls:[],queue:[],flush(e,t){let r=tG(e,t),n=i.current>0&&!u.queue.length&&!Object.keys(r).some(t=>!e.springs[t]);return n?tL(e,t):new Promise(n=>{tZ(e,r),u.queue.push(()=>{n(tL(e,t))}),o()})}}),[]),l=(0,a.useRef)([...u.ctrls]),d=[],h=eW(e)||0;function c(e,r){for(let s=e;s<r;s++){let e=l.current[s]||(l.current[s]=new tD(null,u.flush)),r=n?n(s,e):t[s];r&&(d[s]=function(e){let t=t$(e);return V.und(t.default)&&(t.default=ts(t)),t}(r))}}(0,a.useMemo)(()=>{O(l.current.slice(e,h),e=>{e.ref?.delete(e),s?.delete(e),e.stop(!0)}),l.current.length=e,c(h,e)},[e]),(0,a.useMemo)(()=>{c(0,Math.min(h,e))},r);let p=l.current.map((e,t)=>tG(e,d[t])),f=(0,a.useContext)(tX),m=eW(f),g=f!==m&&function(e){for(let t in e)return!0;return!1}(f);eN(()=>{i.current++,u.ctrls=l.current;let{queue:e}=u;e.length&&(u.queue=[],O(e,e=>e())),O(l.current,(e,t)=>{s?.add(e),g&&e.start({default:f});let r=d[t];if(r){var n;(n=r.ref)&&e.ref!==n&&(e.ref?.delete(e),n.add(e),e.ref=n),e.ref?e.queue.push(r):e.start(r)}})}),eD(()=>()=>{O(u.ctrls,e=>e.stop(!0))});let y=p.map(e=>({...e}));return s?[y,s]:y}(1,r?e:[e],r?t||[]:t);return r||2==arguments.length?[n,s]:n}var t1=class extends tA{constructor(e,t){super(),this.source=e,this.idle=!0,this._active=new Set,this.calc=ef(...t);let r=this._get(),n=e3(r);eH(this,n.create(r))}advance(e){let t=this._get(),r=this.get();R(t,r)||(eB(this).setValue(t),this._onChange(t,this.idle)),!this.idle&&t5(this._active)&&t3(this)}_get(){let e=V.arr(this.source)?this.source.map(ev):M(ev(this.source));return this.calc(...e)}_start(){this.idle&&!t5(this._active)&&(this.idle=!1,O(eJ(this),e=>{e.done=!1}),u.skipAnimation?(d.batchedUpdates(()=>this.advance()),t3(this)):W.start(this))}_attach(){let e=1;O(M(this.source),t=>{ey(t)&&eP(t,this),tx(t)&&(t.idle||this._active.add(t),e=Math.max(e,t.priority+1))}),this.priority=e,this._start()}_detach(){O(M(this.source),e=>{ey(e)&&ex(e,this)}),this._active.clear(),t3(this)}eventObserved(e){"change"==e.type?e.idle?this.advance():(this._active.add(e.parent),this._start()):"idle"==e.type?this._active.delete(e.parent):"priority"==e.type&&(this.priority=M(this.source).reduce((e,t)=>Math.max(e,(tx(t)?t.priority:0)+1),0))}};function t2(e){return!1!==e.idle}function t5(e){return!e.size||Array.from(e).every(t2)}function t3(e){e.idle||(e.idle=!0,O(eJ(e),e=>{e.done=!0}),eb(e,{type:"idle",parent:e}))}u.assign({createStringInterpolator:eE,to:(e,t)=>new t1(e,t)}),W.advance;var t4=r(8431),t9=/^--/,t7={},t8={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},t6=(e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1),re=["Webkit","Ms","Moz","O"];t8=Object.keys(t8).reduce((e,t)=>(re.forEach(r=>e[t6(r,t)]=e[t]),e),t8);var rt=/^(matrix|translate|scale|rotate|skew)/,rr=/^(translate)/,rn=/^(rotate|skew)/,rs=(e,t)=>V.num(e)&&0!==e?e+t:e,ri=(e,t)=>V.arr(e)?e.every(e=>ri(e,t)):V.num(e)?e===t:parseFloat(e)===t,ra=class extends e1{constructor({x:e,y:t,z:r,...n}){let s=[],i=[];(e||t||r)&&(s.push([e||0,t||0,r||0]),i.push(e=>[`translate3d(${e.map(e=>rs(e,"px")).join(",")})`,ri(e,0)])),j(n,(e,t)=>{if("transform"===t)s.push([e||""]),i.push(e=>[e,""===e]);else if(rt.test(t)){if(delete n[t],V.und(e))return;let r=rr.test(t)?"px":rn.test(t)?"deg":"";s.push(M(e)),i.push("rotate3d"===t?([e,t,n,s])=>[`rotate3d(${e},${t},${n},${rs(s,r)})`,ri(s,0)]:e=>[`${t}(${e.map(e=>rs(e,r)).join(",")})`,ri(e,t.startsWith("scale")?1:0)])}}),s.length&&(n.transform=new ro(s,i)),super(n)}},ro=class extends ew{constructor(e,t){super(),this.inputs=e,this.transforms=t,this._value=null}get(){return this._value||(this._value=this._get())}_get(){let e="",t=!0;return O(this.inputs,(r,n)=>{let s=ev(r[0]),[i,a]=this.transforms[n](V.arr(s)?s:r.map(ev));e+=" "+i,t=t&&a}),t?"none":e}observerAdded(e){1==e&&O(this.inputs,e=>O(e,e=>ey(e)&&eP(e,this)))}observerRemoved(e){0==e&&O(this.inputs,e=>O(e,e=>ey(e)&&ex(e,this)))}eventObserved(e){"change"==e.type&&(this._value=null),eb(this,e)}};u.assign({batchedUpdates:t4.unstable_batchedUpdates,createStringInterpolator:eE,colors:{transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199}});var ru=((e,{applyAnimatedValues:t=()=>!1,createAnimatedStyle:r=e=>new e1(e),getComponentProps:n=e=>e}={})=>{let s={applyAnimatedValues:t,createAnimatedStyle:r,getComponentProps:n},i=e=>{let t=e8(e)||"Anonymous";return(e=V.str(e)?i[e]||(i[e]=e4(e,s)):e[e7]||(e[e7]=e4(e,s))).displayName=`Animated(${t})`,e};return j(e,(t,r)=>{V.arr(e)&&(r=e8(t)),i[r]=i(t)}),{animated:i}})(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],{applyAnimatedValues:function(e,t){if(!e.nodeType||!e.setAttribute)return!1;let r="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName,{style:n,children:s,scrollTop:i,scrollLeft:a,viewBox:o,...u}=t,l=Object.values(u),d=Object.keys(u).map(t=>r||e.hasAttribute(t)?t:t7[t]||(t7[t]=t.replace(/([A-Z])/g,e=>"-"+e.toLowerCase())));for(let t in void 0!==s&&(e.textContent=s),n)if(n.hasOwnProperty(t)){var h;let r=null==(h=n[t])||"boolean"==typeof h||""===h?"":"number"!=typeof h||0===h||t9.test(t)||t8.hasOwnProperty(t)&&t8[t]?(""+h).trim():h+"px";t9.test(t)?e.style.setProperty(t,r):e.style[t]=r}d.forEach((t,r)=>{e.setAttribute(t,l[r])}),void 0!==i&&(e.scrollTop=i),void 0!==a&&(e.scrollLeft=a),void 0!==o&&e.setAttribute("viewBox",o)},createAnimatedStyle:e=>new ra(e),getComponentProps:({scrollTop:e,scrollLeft:t,...r})=>r}).animated}}]);