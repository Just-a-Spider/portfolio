var YM=Object.defineProperty,ZM=Object.defineProperties;var KM=Object.getOwnPropertyDescriptors;var Yy=Object.getOwnPropertySymbols;var JM=Object.prototype.hasOwnProperty,QM=Object.prototype.propertyIsEnumerable;var Zy=(n,e,t)=>e in n?YM(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,_e=(n,e)=>{for(var t in e||={})JM.call(e,t)&&Zy(n,t,e[t]);if(Yy)for(var t of Yy(e))QM.call(e,t)&&Zy(n,t,e[t]);return n},xt=(n,e)=>ZM(n,KM(e));var wn=null,El=!1,po=1,ew=null,Cn=Symbol("SIGNAL");function Fe(n){let e=wn;return wn=n,e}function Cl(){return wn}var rs={version:0,lastCleanEpoch:0,dirty:!1,producers:void 0,producersTail:void 0,consumers:void 0,consumersTail:void 0,recomputing:!1,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,kind:"unknown",producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function os(n){if(El)throw new Error("");if(wn===null)return;wn.consumerOnSignalRead(n);let e=wn.producersTail;if(e!==void 0&&e.producer===n)return;let t,i=wn.recomputing;if(i&&(t=e!==void 0?e.nextProducer:wn.producers,t!==void 0&&t.producer===n)){wn.producersTail=t,t.lastReadVersion=n.version,t.knownValidAtEpoch=po;return}let r=n.consumersTail;if(r!==void 0&&r.consumer===wn&&(!i||r.knownValidAtEpoch===po))return;let o=as(wn),s={producer:n,consumer:wn,nextProducer:t,prevConsumer:void 0,knownValidAtEpoch:po,lastReadVersion:n.version,nextConsumer:void 0};wn.producersTail=s,e!==void 0?e.nextProducer=s:wn.producers=s,o&&e_(n,s)}function Ky(){po++}function Tl(n){if(!(as(n)&&!n.dirty)&&!(!n.dirty&&n.lastCleanEpoch===po)){if(!n.producerMustRecompute(n)&&!Dl(n)){wl(n);return}n.producerRecomputeValue(n),wl(n)}}function Wh(n){if(n.consumers===void 0)return;let e=El;El=!0;try{for(let t=n.consumers;t!==void 0;t=t.nextConsumer){let i=t.consumer;i.dirty||tw(i)}}finally{El=e}}function $h(){return wn?.consumerAllowSignalWrites!==!1}function tw(n){n.dirty=!0,Wh(n),n.consumerMarkedDirty?.(n)}function wl(n){n.dirty=!1,n.lastCleanEpoch=po}function ss(n){return n&&Jy(n),Fe(n)}function Jy(n){if(n.producersTail?.knownValidAtEpoch===po){let e=n.producers;for(;e!==void 0;)e.knownValidAtEpoch=null,e=e.nextProducer}n.producersTail=void 0,n.recomputing=!0}function wa(n,e){Fe(e),n&&Qy(n)}function Qy(n){n.recomputing=!1;let e=n.producersTail,t=e!==void 0?e.nextProducer:n.producers;if(t!==void 0){if(as(n))do t=qh(t);while(t!==void 0);e!==void 0?e.nextProducer=void 0:n.producers=void 0}}function Dl(n){for(let e=n.producers;e!==void 0;e=e.nextProducer){let t=e.producer,i=e.lastReadVersion;if(i!==t.version||(Tl(t),i!==t.version))return!0}return!1}function Ca(n){if(as(n)){let e=n.producers;for(;e!==void 0;)e=qh(e)}n.producers=void 0,n.producersTail=void 0,n.consumers=void 0,n.consumersTail=void 0}function e_(n,e){let t=n.consumersTail,i=as(n);if(t!==void 0?(e.nextConsumer=t.nextConsumer,t.nextConsumer=e):(e.nextConsumer=void 0,n.consumers=e),e.prevConsumer=t,n.consumersTail=e,!i)for(let r=n.producers;r!==void 0;r=r.nextProducer)e_(r.producer,r)}function qh(n){let e=n.producer,t=n.nextProducer,i=n.nextConsumer,r=n.prevConsumer;if(n.nextConsumer=void 0,n.prevConsumer=void 0,i!==void 0?i.prevConsumer=r:e.consumersTail=r,r!==void 0)r.nextConsumer=i;else if(e.consumers=i,!as(e)){let o=e.producers;for(;o!==void 0;)o=qh(o)}return t}function as(n){return n.consumerIsAlwaysLive||n.consumers!==void 0}function Al(n){ew?.(n)}function Il(n,e){return Object.is(n,e)}function Rl(n,e){let t=Object.create(nw);t.computation=n,e!==void 0&&(t.equal=e);let i=()=>{if(Tl(t),os(t),t.value===Ma)throw t.error;return t.value};return i[Cn]=t,Al(t),i}var bl=Symbol("UNSET"),Ml=Symbol("COMPUTING"),Ma=Symbol("ERRORED"),nw=xt(_e({},rs),{value:bl,dirty:!0,error:null,equal:Il,kind:"computed",producerMustRecompute(n){return n.value===bl||n.value===Ml},producerRecomputeValue(n){if(n.value===Ml)throw new Error("");let e=n.value;n.value=Ml;let t=ss(n),i,r=!1;try{i=n.computation(),Fe(null),r=e!==bl&&e!==Ma&&i!==Ma&&n.equal(e,i)}catch(o){i=Ma,n.error=o}finally{wa(n,t)}if(r){n.value=e;return}n.value=i,n.version++}});function iw(){throw new Error}var t_=iw;function n_(n){t_(n)}function Xh(n){t_=n}var rw=null;function Yh(n,e){let t=Object.create(Nl);t.value=n,e!==void 0&&(t.equal=e);let i=()=>i_(t);return i[Cn]=t,Al(t),[i,s=>cs(t,s),s=>Zh(t,s)]}function i_(n){return os(n),n.value}function cs(n,e){$h()||n_(n),n.equal(n.value,e)||(n.value=e,ow(n))}function Zh(n,e){$h()||n_(n),cs(n,e(n.value))}var Nl=xt(_e({},rs),{equal:Il,value:void 0,kind:"signal"});function ow(n){n.version++,Ky(),Wh(n),rw?.(n)}var Kh;function Pl(){return Kh}function Bi(n){let e=Kh;return Kh=n,e}var r_=Symbol("NotFound");function ls(n){return n===r_||n?.name==="\u0275NotFound"}function o_(n){let e=Fe(null);try{return n()}finally{Fe(e)}}function ze(n){return typeof n=="function"}function us(n){let t=n(i=>{Error.call(i),i.stack=new Error().stack});return t.prototype=Object.create(Error.prototype),t.prototype.constructor=t,t}var Ll=us(n=>function(t){n(this),this.message=t?`${t.length} errors occurred during unsubscription:
${t.map((i,r)=>`${r+1}) ${i.toString()}`).join(`
  `)}`:"",this.name="UnsubscriptionError",this.errors=t});function Ta(n,e){if(n){let t=n.indexOf(e);0<=t&&n.splice(t,1)}}var ln=class n{constructor(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let e;if(!this.closed){this.closed=!0;let{_parentage:t}=this;if(t)if(this._parentage=null,Array.isArray(t))for(let o of t)o.remove(this);else t.remove(this);let{initialTeardown:i}=this;if(ze(i))try{i()}catch(o){e=o instanceof Ll?o.errors:[o]}let{_finalizers:r}=this;if(r){this._finalizers=null;for(let o of r)try{s_(o)}catch(s){e=e??[],s instanceof Ll?e=[...e,...s.errors]:e.push(s)}}if(e)throw new Ll(e)}}add(e){var t;if(e&&e!==this)if(this.closed)s_(e);else{if(e instanceof n){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=(t=this._finalizers)!==null&&t!==void 0?t:[]).push(e)}}_hasParent(e){let{_parentage:t}=this;return t===e||Array.isArray(t)&&t.includes(e)}_addParent(e){let{_parentage:t}=this;this._parentage=Array.isArray(t)?(t.push(e),t):t?[t,e]:e}_removeParent(e){let{_parentage:t}=this;t===e?this._parentage=null:Array.isArray(t)&&Ta(t,e)}remove(e){let{_finalizers:t}=this;t&&Ta(t,e),e instanceof n&&e._removeParent(this)}};ln.EMPTY=(()=>{let n=new ln;return n.closed=!0,n})();var Jh=ln.EMPTY;function Ol(n){return n instanceof ln||n&&"closed"in n&&ze(n.remove)&&ze(n.add)&&ze(n.unsubscribe)}function s_(n){ze(n)?n():n.unsubscribe()}var mi={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var ds={setTimeout(n,e,...t){let{delegate:i}=ds;return i?.setTimeout?i.setTimeout(n,e,...t):setTimeout(n,e,...t)},clearTimeout(n){let{delegate:e}=ds;return(e?.clearTimeout||clearTimeout)(n)},delegate:void 0};function Fl(n){ds.setTimeout(()=>{let{onUnhandledError:e}=mi;if(e)e(n);else throw n})}function Da(){}var a_=Qh("C",void 0,void 0);function c_(n){return Qh("E",void 0,n)}function l_(n){return Qh("N",n,void 0)}function Qh(n,e,t){return{kind:n,value:e,error:t}}var mo=null;function fs(n){if(mi.useDeprecatedSynchronousErrorHandling){let e=!mo;if(e&&(mo={errorThrown:!1,error:null}),n(),e){let{errorThrown:t,error:i}=mo;if(mo=null,t)throw i}}else n()}function u_(n){mi.useDeprecatedSynchronousErrorHandling&&mo&&(mo.errorThrown=!0,mo.error=n)}var go=class extends ln{constructor(e){super(),this.isStopped=!1,e?(this.destination=e,Ol(e)&&e.add(this)):this.destination=uw}static create(e,t,i){return new hs(e,t,i)}next(e){this.isStopped?tp(l_(e),this):this._next(e)}error(e){this.isStopped?tp(c_(e),this):(this.isStopped=!0,this._error(e))}complete(){this.isStopped?tp(a_,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(e){this.destination.next(e)}_error(e){try{this.destination.error(e)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}},cw=Function.prototype.bind;function ep(n,e){return cw.call(n,e)}var np=class{constructor(e){this.partialObserver=e}next(e){let{partialObserver:t}=this;if(t.next)try{t.next(e)}catch(i){kl(i)}}error(e){let{partialObserver:t}=this;if(t.error)try{t.error(e)}catch(i){kl(i)}else kl(e)}complete(){let{partialObserver:e}=this;if(e.complete)try{e.complete()}catch(t){kl(t)}}},hs=class extends go{constructor(e,t,i){super();let r;if(ze(e)||!e)r={next:e??void 0,error:t??void 0,complete:i??void 0};else{let o;this&&mi.useDeprecatedNextContext?(o=Object.create(e),o.unsubscribe=()=>this.unsubscribe(),r={next:e.next&&ep(e.next,o),error:e.error&&ep(e.error,o),complete:e.complete&&ep(e.complete,o)}):r=e}this.destination=new np(r)}};function kl(n){mi.useDeprecatedSynchronousErrorHandling?u_(n):Fl(n)}function lw(n){throw n}function tp(n,e){let{onStoppedNotification:t}=mi;t&&ds.setTimeout(()=>t(n,e))}var uw={closed:!0,next:Da,error:lw,complete:Da};var ps=typeof Symbol=="function"&&Symbol.observable||"@@observable";function gi(n){return n}function ip(...n){return rp(n)}function rp(n){return n.length===0?gi:n.length===1?n[0]:function(t){return n.reduce((i,r)=>r(i),t)}}var nt=class n{constructor(e){e&&(this._subscribe=e)}lift(e){let t=new n;return t.source=this,t.operator=e,t}subscribe(e,t,i){let r=fw(e)?e:new hs(e,t,i);return fs(()=>{let{operator:o,source:s}=this;r.add(o?o.call(r,s):s?this._subscribe(r):this._trySubscribe(r))}),r}_trySubscribe(e){try{return this._subscribe(e)}catch(t){e.error(t)}}forEach(e,t){return t=d_(t),new t((i,r)=>{let o=new hs({next:s=>{try{e(s)}catch(a){r(a),o.unsubscribe()}},error:r,complete:i});this.subscribe(o)})}_subscribe(e){var t;return(t=this.source)===null||t===void 0?void 0:t.subscribe(e)}[ps](){return this}pipe(...e){return rp(e)(this)}toPromise(e){return e=d_(e),new e((t,i)=>{let r;this.subscribe(o=>r=o,o=>i(o),()=>t(r))})}};nt.create=n=>new nt(n);function d_(n){var e;return(e=n??mi.Promise)!==null&&e!==void 0?e:Promise}function dw(n){return n&&ze(n.next)&&ze(n.error)&&ze(n.complete)}function fw(n){return n&&n instanceof go||dw(n)&&Ol(n)}function hw(n){return ze(n?.lift)}function pt(n){return e=>{if(hw(e))return e.lift(function(t){try{return n(t,this)}catch(i){this.error(i)}});throw new TypeError("Unable to lift unknown Observable type")}}function Et(n,e,t,i,r){return new op(n,e,t,i,r)}var op=class extends go{constructor(e,t,i,r,o,s){super(e),this.onFinalize=o,this.shouldUnsubscribe=s,this._next=t?function(a){try{t(a)}catch(c){e.error(c)}}:super._next,this._error=r?function(a){try{r(a)}catch(c){e.error(c)}finally{this.unsubscribe()}}:super._error,this._complete=i?function(){try{i()}catch(a){e.error(a)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var e;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){let{closed:t}=this;super.unsubscribe(),!t&&((e=this.onFinalize)===null||e===void 0||e.call(this))}}};var f_=us(n=>function(){n(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var $t=class extends nt{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(e){let t=new Ul(this,this);return t.operator=e,t}_throwIfClosed(){if(this.closed)throw new f_}next(e){fs(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let t of this.currentObservers)t.next(e)}})}error(e){fs(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=e;let{observers:t}=this;for(;t.length;)t.shift().error(e)}})}complete(){fs(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:e}=this;for(;e.length;)e.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var e;return((e=this.observers)===null||e===void 0?void 0:e.length)>0}_trySubscribe(e){return this._throwIfClosed(),super._trySubscribe(e)}_subscribe(e){return this._throwIfClosed(),this._checkFinalizedStatuses(e),this._innerSubscribe(e)}_innerSubscribe(e){let{hasError:t,isStopped:i,observers:r}=this;return t||i?Jh:(this.currentObservers=null,r.push(e),new ln(()=>{this.currentObservers=null,Ta(r,e)}))}_checkFinalizedStatuses(e){let{hasError:t,thrownError:i,isStopped:r}=this;t?e.error(i):r&&e.complete()}asObservable(){let e=new nt;return e.source=this,e}};$t.create=(n,e)=>new Ul(n,e);var Ul=class extends $t{constructor(e,t){super(),this.destination=e,this.source=t}next(e){var t,i;(i=(t=this.destination)===null||t===void 0?void 0:t.next)===null||i===void 0||i.call(t,e)}error(e){var t,i;(i=(t=this.destination)===null||t===void 0?void 0:t.error)===null||i===void 0||i.call(t,e)}complete(){var e,t;(t=(e=this.destination)===null||e===void 0?void 0:e.complete)===null||t===void 0||t.call(e)}_subscribe(e){var t,i;return(i=(t=this.source)===null||t===void 0?void 0:t.subscribe(e))!==null&&i!==void 0?i:Jh}};var un=class extends $t{constructor(e){super(),this._value=e}get value(){return this.getValue()}_subscribe(e){let t=super._subscribe(e);return!t.closed&&e.next(this._value),t}getValue(){let{hasError:e,thrownError:t,_value:i}=this;if(e)throw t;return this._throwIfClosed(),i}next(e){super.next(this._value=e)}};var dn=new nt(n=>n.complete());function h_(n){return n&&ze(n.schedule)}function p_(n){return n[n.length-1]}function m_(n){return ze(p_(n))?n.pop():void 0}function Pr(n){return h_(p_(n))?n.pop():void 0}function v_(n,e,t,i){function r(o){return o instanceof t?o:new t(function(s){s(o)})}return new(t||(t=Promise))(function(o,s){function a(u){try{l(i.next(u))}catch(f){s(f)}}function c(u){try{l(i.throw(u))}catch(f){s(f)}}function l(u){u.done?o(u.value):r(u.value).then(a,c)}l((i=i.apply(n,e||[])).next())})}function g_(n){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&n[e],i=0;if(t)return t.call(n);if(n&&typeof n.length=="number")return{next:function(){return n&&i>=n.length&&(n=void 0),{value:n&&n[i++],done:!n}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function vo(n){return this instanceof vo?(this.v=n,this):new vo(n)}function y_(n,e,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=t.apply(n,e||[]),r,o=[];return r=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),a("next"),a("throw"),a("return",s),r[Symbol.asyncIterator]=function(){return this},r;function s(h){return function(p){return Promise.resolve(p).then(h,f)}}function a(h,p){i[h]&&(r[h]=function(x){return new Promise(function(g,m){o.push([h,x,g,m])>1||c(h,x)})},p&&(r[h]=p(r[h])))}function c(h,p){try{l(i[h](p))}catch(x){d(o[0][3],x)}}function l(h){h.value instanceof vo?Promise.resolve(h.value.v).then(u,f):d(o[0][2],h)}function u(h){c("next",h)}function f(h){c("throw",h)}function d(h,p){h(p),o.shift(),o.length&&c(o[0][0],o[0][1])}}function __(n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=n[Symbol.asyncIterator],t;return e?e.call(n):(n=typeof g_=="function"?g_(n):n[Symbol.iterator](),t={},i("next"),i("throw"),i("return"),t[Symbol.asyncIterator]=function(){return this},t);function i(o){t[o]=n[o]&&function(s){return new Promise(function(a,c){s=n[o](s),r(a,c,s.done,s.value)})}}function r(o,s,a,c){Promise.resolve(c).then(function(l){o({value:l,done:a})},s)}}var Bl=(n=>n&&typeof n.length=="number"&&typeof n!="function");function Vl(n){return ze(n?.then)}function Hl(n){return ze(n[ps])}function zl(n){return Symbol.asyncIterator&&ze(n?.[Symbol.asyncIterator])}function Gl(n){return new TypeError(`You provided ${n!==null&&typeof n=="object"?"an invalid object":`'${n}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}function pw(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var jl=pw();function Wl(n){return ze(n?.[jl])}function $l(n){return y_(this,arguments,function*(){let t=n.getReader();try{for(;;){let{value:i,done:r}=yield vo(t.read());if(r)return yield vo(void 0);yield yield vo(i)}}finally{t.releaseLock()}})}function ql(n){return ze(n?.getReader)}function on(n){if(n instanceof nt)return n;if(n!=null){if(Hl(n))return mw(n);if(Bl(n))return gw(n);if(Vl(n))return vw(n);if(zl(n))return x_(n);if(Wl(n))return yw(n);if(ql(n))return _w(n)}throw Gl(n)}function mw(n){return new nt(e=>{let t=n[ps]();if(ze(t.subscribe))return t.subscribe(e);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function gw(n){return new nt(e=>{for(let t=0;t<n.length&&!e.closed;t++)e.next(n[t]);e.complete()})}function vw(n){return new nt(e=>{n.then(t=>{e.closed||(e.next(t),e.complete())},t=>e.error(t)).then(null,Fl)})}function yw(n){return new nt(e=>{for(let t of n)if(e.next(t),e.closed)return;e.complete()})}function x_(n){return new nt(e=>{xw(n,e).catch(t=>e.error(t))})}function _w(n){return x_($l(n))}function xw(n,e){var t,i,r,o;return v_(this,void 0,void 0,function*(){try{for(t=__(n);i=yield t.next(),!i.done;){let s=i.value;if(e.next(s),e.closed)return}}catch(s){r={error:s}}finally{try{i&&!i.done&&(o=t.return)&&(yield o.call(t))}finally{if(r)throw r.error}}e.complete()})}function Pn(n,e,t,i=0,r=!1){let o=e.schedule(function(){t(),r?n.add(this.schedule(null,i)):this.unsubscribe()},i);if(n.add(o),!r)return o}function Xl(n,e=0){return pt((t,i)=>{t.subscribe(Et(i,r=>Pn(i,n,()=>i.next(r),e),()=>Pn(i,n,()=>i.complete(),e),r=>Pn(i,n,()=>i.error(r),e)))})}function Yl(n,e=0){return pt((t,i)=>{i.add(n.schedule(()=>t.subscribe(i),e))})}function S_(n,e){return on(n).pipe(Yl(e),Xl(e))}function E_(n,e){return on(n).pipe(Yl(e),Xl(e))}function b_(n,e){return new nt(t=>{let i=0;return e.schedule(function(){i===n.length?t.complete():(t.next(n[i++]),t.closed||this.schedule())})})}function M_(n,e){return new nt(t=>{let i;return Pn(t,e,()=>{i=n[jl](),Pn(t,e,()=>{let r,o;try{({value:r,done:o}=i.next())}catch(s){t.error(s);return}o?t.complete():t.next(r)},0,!0)}),()=>ze(i?.return)&&i.return()})}function Zl(n,e){if(!n)throw new Error("Iterable cannot be null");return new nt(t=>{Pn(t,e,()=>{let i=n[Symbol.asyncIterator]();Pn(t,e,()=>{i.next().then(r=>{r.done?t.complete():t.next(r.value)})},0,!0)})})}function w_(n,e){return Zl($l(n),e)}function C_(n,e){if(n!=null){if(Hl(n))return S_(n,e);if(Bl(n))return b_(n,e);if(Vl(n))return E_(n,e);if(zl(n))return Zl(n,e);if(Wl(n))return M_(n,e);if(ql(n))return w_(n,e)}throw Gl(n)}function qt(n,e){return e?C_(n,e):on(n)}function Ke(...n){let e=Pr(n);return qt(n,e)}function sp(n,e){let t=ze(n)?n:()=>n,i=r=>r.error(t());return new nt(e?r=>e.schedule(i,0,r):i)}function Kl(n){return!!n&&(n instanceof nt||ze(n.lift)&&ze(n.subscribe))}var yo=us(n=>function(){n(this),this.name="EmptyError",this.message="no elements in sequence"});function kt(n,e){return pt((t,i)=>{let r=0;t.subscribe(Et(i,o=>{i.next(n.call(e,o,r++))}))})}var{isArray:Sw}=Array;function Ew(n,e){return Sw(e)?n(...e):n(e)}function T_(n){return kt(e=>Ew(n,e))}var{isArray:bw}=Array,{getPrototypeOf:Mw,prototype:ww,keys:Cw}=Object;function D_(n){if(n.length===1){let e=n[0];if(bw(e))return{args:e,keys:null};if(Tw(e)){let t=Cw(e);return{args:t.map(i=>e[i]),keys:t}}}return{args:n,keys:null}}function Tw(n){return n&&typeof n=="object"&&Mw(n)===ww}function A_(n,e){return n.reduce((t,i,r)=>(t[i]=e[r],t),{})}function ap(...n){let e=Pr(n),t=m_(n),{args:i,keys:r}=D_(n);if(i.length===0)return qt([],e);let o=new nt(Dw(i,e,r?s=>A_(r,s):gi));return t?o.pipe(T_(t)):o}function Dw(n,e,t=gi){return i=>{I_(e,()=>{let{length:r}=n,o=new Array(r),s=r,a=r;for(let c=0;c<r;c++)I_(e,()=>{let l=qt(n[c],e),u=!1;l.subscribe(Et(i,f=>{o[c]=f,u||(u=!0,a--),a||i.next(t(o.slice()))},()=>{--s||i.complete()}))},i)},i)}}function I_(n,e,t){n?Pn(t,n,e):e()}function R_(n,e,t,i,r,o,s,a){let c=[],l=0,u=0,f=!1,d=()=>{f&&!c.length&&!l&&e.complete()},h=x=>l<i?p(x):c.push(x),p=x=>{o&&e.next(x),l++;let g=!1;on(t(x,u++)).subscribe(Et(e,m=>{r?.(m),o?h(m):e.next(m)},()=>{g=!0},void 0,()=>{if(g)try{for(l--;c.length&&l<i;){let m=c.shift();s?Pn(e,s,()=>p(m)):p(m)}d()}catch(m){e.error(m)}}))};return n.subscribe(Et(e,h,()=>{f=!0,d()})),()=>{a?.()}}function Tn(n,e,t=1/0){return ze(e)?Tn((i,r)=>kt((o,s)=>e(i,o,r,s))(on(n(i,r))),t):(typeof e=="number"&&(t=e),pt((i,r)=>R_(i,r,n,t)))}function N_(n=1/0){return Tn(gi,n)}function P_(){return N_(1)}function ms(...n){return P_()(qt(n,Pr(n)))}function Aa(n){return new nt(e=>{on(n()).subscribe(e)})}function lr(n,e){return pt((t,i)=>{let r=0;t.subscribe(Et(i,o=>n.call(e,o,r++)&&i.next(o)))})}function Ia(n){return pt((e,t)=>{let i=null,r=!1,o;i=e.subscribe(Et(t,void 0,void 0,s=>{o=on(n(s,Ia(n)(e))),i?(i.unsubscribe(),i=null,o.subscribe(t)):r=!0})),r&&(i.unsubscribe(),i=null,o.subscribe(t))})}function Jl(n,e){return ze(e)?Tn(n,e,1):Tn(n,1)}function L_(n){return pt((e,t)=>{let i=!1;e.subscribe(Et(t,r=>{i=!0,t.next(r)},()=>{i||t.next(n),t.complete()}))})}function ur(n){return n<=0?()=>dn:pt((e,t)=>{let i=0;e.subscribe(Et(t,r=>{++i<=n&&(t.next(r),n<=i&&t.complete())}))})}function O_(n=Aw){return pt((e,t)=>{let i=!1;e.subscribe(Et(t,r=>{i=!0,t.next(r)},()=>i?t.complete():t.error(n())))})}function Aw(){return new yo}function cp(n){return pt((e,t)=>{try{e.subscribe(t)}finally{t.add(n)}})}function dr(n,e){let t=arguments.length>=2;return i=>i.pipe(n?lr((r,o)=>n(r,o,i)):gi,ur(1),t?L_(e):O_(()=>new yo))}function Ql(n){return n<=0?()=>dn:pt((e,t)=>{let i=[];e.subscribe(Et(t,r=>{i.push(r),n<i.length&&i.shift()},()=>{for(let r of i)t.next(r);t.complete()},void 0,()=>{i=null}))})}function lp(...n){let e=Pr(n);return pt((t,i)=>{(e?ms(n,t,e):ms(n,t)).subscribe(i)})}function oi(n,e){return pt((t,i)=>{let r=null,o=0,s=!1,a=()=>s&&!r&&i.complete();t.subscribe(Et(i,c=>{r?.unsubscribe();let l=0,u=o++;on(n(c,u)).subscribe(r=Et(i,f=>i.next(e?e(c,f,u,l++):f),()=>{r=null,a()}))},()=>{s=!0,a()}))})}function Ra(n){return pt((e,t)=>{on(n).subscribe(Et(t,()=>t.complete(),Da)),!t.closed&&e.subscribe(t)})}function si(n,e,t){let i=ze(n)||e||t?{next:n,error:e,complete:t}:n;return i?pt((r,o)=>{var s;(s=i.subscribe)===null||s===void 0||s.call(i);let a=!0;r.subscribe(Et(o,c=>{var l;(l=i.next)===null||l===void 0||l.call(i,c),o.next(c)},()=>{var c;a=!1,(c=i.complete)===null||c===void 0||c.call(i),o.complete()},c=>{var l;a=!1,(l=i.error)===null||l===void 0||l.call(i,c),o.error(c)},()=>{var c,l;a&&((c=i.unsubscribe)===null||c===void 0||c.call(i)),(l=i.finalize)===null||l===void 0||l.call(i)}))}):gi}var ou="https://angular.dev/best-practices/security#preventing-cross-site-scripting-xss",Re=class extends Error{code;constructor(e,t){super(Oa(e,t)),this.code=e}};function Iw(n){return`NG0${Math.abs(n)}`}function Oa(n,e){return`${Iw(n)}${e?": "+e:""}`}function mt(n){for(let e in n)if(n[e]===mt)return e;throw Error("")}function Fa(n){if(typeof n=="string")return n;if(Array.isArray(n))return`[${n.map(Fa).join(", ")}]`;if(n==null)return""+n;let e=n.overriddenName||n.name;if(e)return`${e}`;let t=n.toString();if(t==null)return""+t;let i=t.indexOf(`
`);return i>=0?t.slice(0,i):t}function su(n,e){return n?e?`${n} ${e}`:n:e||""}var Rw=mt({__forward_ref__:mt});function au(n){return n.__forward_ref__=au,n}function Hn(n){return V_(n)?n():n}function V_(n){return typeof n=="function"&&n.hasOwnProperty(Rw)&&n.__forward_ref__===au}function gt(n){return{token:n.token,providedIn:n.providedIn||null,factory:n.factory,value:void 0}}function ka(n){return{providers:n.providers||[],imports:n.imports||[]}}function Ua(n){return Nw(n,cu)}function wp(n){return Ua(n)!==null}function Nw(n,e){return n.hasOwnProperty(e)&&n[e]||null}function Pw(n){let e=n?.[cu]??null;return e||null}function dp(n){return n&&n.hasOwnProperty(tu)?n[tu]:null}var cu=mt({\u0275prov:mt}),tu=mt({\u0275inj:mt}),Ne=class{_desc;ngMetadataName="InjectionToken";\u0275prov;constructor(e,t){this._desc=e,this.\u0275prov=void 0,typeof t=="number"?this.__NG_ELEMENT_ID__=t:t!==void 0&&(this.\u0275prov=gt({token:this,providedIn:t.providedIn||"root",factory:t.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}};function Cp(n){return n&&!!n.\u0275providers}var Tp=mt({\u0275cmp:mt}),Dp=mt({\u0275dir:mt}),Ap=mt({\u0275pipe:mt}),Ip=mt({\u0275mod:mt}),fp=mt({\u0275fac:mt}),Eo=mt({__NG_ELEMENT_ID__:mt}),F_=mt({__NG_ENV_ID__:mt});function H_(n){return lu(n,"@NgModule"),n[Ip]||null}function bo(n){return lu(n,"@Component"),n[Tp]||null}function Rp(n){return lu(n,"@Directive"),n[Dp]||null}function z_(n){return lu(n,"@Pipe"),n[Ap]||null}function lu(n,e){if(n==null)throw new Re(-919,!1)}function Np(n){return typeof n=="string"?n:n==null?"":String(n)}var G_=mt({ngErrorCode:mt}),Lw=mt({ngErrorMessage:mt}),Ow=mt({ngTokenPath:mt});function Pp(n,e){return j_("",-200,e)}function uu(n,e){throw new Re(-201,!1)}function j_(n,e,t){let i=new Re(e,n);return i[G_]=e,i[Lw]=n,t&&(i[Ow]=t),i}function Fw(n){return n[G_]}var hp;function W_(){return hp}function Vn(n){let e=hp;return hp=n,e}function Lp(n,e,t){let i=Ua(n);if(i&&i.providedIn=="root")return i.value===void 0?i.value=i.factory():i.value;if(t&8)return null;if(e!==void 0)return e;uu(n,"")}var kw={},_o=kw,Uw="__NG_DI_FLAG__",pp=class{injector;constructor(e){this.injector=e}retrieve(e,t){let i=xo(t)||0;try{return this.injector.get(e,i&8?null:_o,i)}catch(r){if(ls(r))return r;throw r}}};function Bw(n,e=0){let t=Pl();if(t===void 0)throw new Re(-203,!1);if(t===null)return Lp(n,void 0,e);{let i=Vw(e),r=t.retrieve(n,i);if(ls(r)){if(i.optional)return null;throw r}return r}}function Xe(n,e=0){return(W_()||Bw)(Hn(n),e)}function re(n,e){return Xe(n,xo(e))}function xo(n){return typeof n>"u"||typeof n=="number"?n:0|(n.optional&&8)|(n.host&&1)|(n.self&&2)|(n.skipSelf&&4)}function Vw(n){return{optional:!!(n&8),host:!!(n&1),self:!!(n&2),skipSelf:!!(n&4)}}function mp(n){let e=[];for(let t=0;t<n.length;t++){let i=Hn(n[t]);if(Array.isArray(i)){if(i.length===0)throw new Re(900,!1);let r,o=0;for(let s=0;s<i.length;s++){let a=i[s],c=Hw(a);typeof c=="number"?c===-1?r=a.token:o|=c:r=a}e.push(Xe(r,o))}else e.push(Xe(i))}return e}function Hw(n){return n[Uw]}function vs(n,e){let t=n.hasOwnProperty(fp);return t?n[fp]:null}function $_(n,e,t){if(n.length!==e.length)return!1;for(let i=0;i<n.length;i++){let r=n[i],o=e[i];if(t&&(r=t(r),o=t(o)),o!==r)return!1}return!0}function q_(n){return n.flat(Number.POSITIVE_INFINITY)}function du(n,e){n.forEach(t=>Array.isArray(t)?du(t,e):e(t))}function Op(n,e,t){e>=n.length?n.push(t):n.splice(e,0,t)}function Ba(n,e){return e>=n.length-1?n.pop():n.splice(e,1)[0]}function X_(n,e,t,i){let r=n.length;if(r==e)n.push(t,i);else if(r===1)n.push(i,n[0]),n[0]=t;else{for(r--,n.push(n[r-1],n[r]);r>e;){let o=r-2;n[r]=n[o],r--}n[e]=t,n[e+1]=i}}function fu(n,e,t){let i=xs(n,e);return i>=0?n[i|1]=t:(i=~i,X_(n,i,e,t)),i}function hu(n,e){let t=xs(n,e);if(t>=0)return n[t|1]}function xs(n,e){return zw(n,e,1)}function zw(n,e,t){let i=0,r=n.length>>t;for(;r!==i;){let o=i+(r-i>>1),s=n[o<<t];if(e===s)return o<<t;s>e?r=o:i=o+1}return~(r<<t)}var Mo={},Ln=[],Ss=new Ne(""),Va=new Ne("",-1),Fp=new Ne(""),ys=class{get(e,t=_o){if(t===_o){let r=j_("",-201);throw r.name="\u0275NotFound",r}return t}};function wo(n){return{\u0275providers:n}}function Y_(n){return wo([{provide:Ss,multi:!0,useValue:n}])}function Z_(...n){return{\u0275providers:kp(!0,n),\u0275fromNgModule:!0}}function kp(n,...e){let t=[],i=new Set,r,o=s=>{t.push(s)};return du(e,s=>{let a=s;nu(a,o,[],i)&&(r||=[],r.push(a))}),r!==void 0&&K_(r,o),t}function K_(n,e){for(let t=0;t<n.length;t++){let{ngModule:i,providers:r}=n[t];Up(r,o=>{e(o,i)})}}function nu(n,e,t,i){if(n=Hn(n),!n)return!1;let r=null,o=dp(n),s=!o&&bo(n);if(!o&&!s){let c=n.ngModule;if(o=dp(c),o)r=c;else return!1}else{if(s&&!s.standalone)return!1;r=n}let a=i.has(r);if(s){if(a)return!1;if(i.add(r),s.dependencies){let c=typeof s.dependencies=="function"?s.dependencies():s.dependencies;for(let l of c)nu(l,e,t,i)}}else if(o){if(o.imports!=null&&!a){i.add(r);let l;du(o.imports,u=>{nu(u,e,t,i)&&(l||=[],l.push(u))}),l!==void 0&&K_(l,e)}if(!a){let l=vs(r)||(()=>new r);e({provide:r,useFactory:l,deps:Ln},r),e({provide:Fp,useValue:r,multi:!0},r),e({provide:Ss,useValue:()=>Xe(r),multi:!0},r)}let c=o.providers;if(c!=null&&!a){let l=n;Up(c,u=>{e(u,l)})}}else return!1;return r!==n&&n.providers!==void 0}function Up(n,e){for(let t of n)Cp(t)&&(t=t.\u0275providers),Array.isArray(t)?Up(t,e):e(t)}var Gw=mt({provide:String,useValue:mt});function J_(n){return n!==null&&typeof n=="object"&&Gw in n}function jw(n){return!!(n&&n.useExisting)}function Ww(n){return!!(n&&n.useFactory)}function iu(n){return typeof n=="function"}var Ha=new Ne(""),eu={},k_={},up;function za(){return up===void 0&&(up=new ys),up}var Jt=class{},So=class extends Jt{parent;source;scopes;records=new Map;_ngOnDestroyHooks=new Set;_onDestroyHooks=[];get destroyed(){return this._destroyed}_destroyed=!1;injectorDefTypes;constructor(e,t,i,r){super(),this.parent=t,this.source=i,this.scopes=r,vp(e,s=>this.processProvider(s)),this.records.set(Va,gs(void 0,this)),r.has("environment")&&this.records.set(Jt,gs(void 0,this));let o=this.records.get(Ha);o!=null&&typeof o.value=="string"&&this.scopes.add(o.value),this.injectorDefTypes=new Set(this.get(Fp,Ln,{self:!0}))}retrieve(e,t){let i=xo(t)||0;try{return this.get(e,_o,i)}catch(r){if(ls(r))return r;throw r}}destroy(){Na(this),this._destroyed=!0;let e=Fe(null);try{for(let i of this._ngOnDestroyHooks)i.ngOnDestroy();let t=this._onDestroyHooks;this._onDestroyHooks=[];for(let i of t)i()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),Fe(e)}}onDestroy(e){return Na(this),this._onDestroyHooks.push(e),()=>this.removeOnDestroy(e)}runInContext(e){Na(this);let t=Bi(this),i=Vn(void 0),r;try{return e()}finally{Bi(t),Vn(i)}}get(e,t=_o,i){if(Na(this),e.hasOwnProperty(F_))return e[F_](this);let r=xo(i),o,s=Bi(this),a=Vn(void 0);try{if(!(r&4)){let l=this.records.get(e);if(l===void 0){let u=Zw(e)&&Ua(e);u&&this.injectableDefInScope(u)?l=gs(gp(e),eu):l=null,this.records.set(e,l)}if(l!=null)return this.hydrate(e,l,r)}let c=r&2?za():this.parent;return t=r&8&&t===_o?null:t,c.get(e,t)}catch(c){let l=Fw(c);throw l===-200||l===-201?new Re(l,null):c}finally{Vn(a),Bi(s)}}resolveInjectorInitializers(){let e=Fe(null),t=Bi(this),i=Vn(void 0),r;try{let o=this.get(Ss,Ln,{self:!0});for(let s of o)s()}finally{Bi(t),Vn(i),Fe(e)}}toString(){return"R3Injector[...]"}processProvider(e){e=Hn(e);let t=iu(e)?e:Hn(e&&e.provide),i=qw(e);if(!iu(e)&&e.multi===!0){let r=this.records.get(t);r||(r=gs(void 0,eu,!0),r.factory=()=>mp(r.multi),this.records.set(t,r)),t=e,r.multi.push(e)}this.records.set(t,i)}hydrate(e,t,i){let r=Fe(null);try{if(t.value===k_)throw Pp("");return t.value===eu&&(t.value=k_,t.value=t.factory(void 0,i)),typeof t.value=="object"&&t.value&&Yw(t.value)&&this._ngOnDestroyHooks.add(t.value),t.value}finally{Fe(r)}}injectableDefInScope(e){if(!e.providedIn)return!1;let t=Hn(e.providedIn);return typeof t=="string"?t==="any"||this.scopes.has(t):this.injectorDefTypes.has(t)}removeOnDestroy(e){let t=this._onDestroyHooks.indexOf(e);t!==-1&&this._onDestroyHooks.splice(t,1)}};function gp(n){let e=Ua(n),t=e!==null?e.factory:vs(n);if(t!==null)return t;if(n instanceof Ne)throw new Re(-204,!1);if(n instanceof Function)return $w(n);throw new Re(-204,!1)}function $w(n){if(n.length>0)throw new Re(-204,!1);let t=Pw(n);return t!==null?()=>t.factory(n):()=>new n}function qw(n){if(J_(n))return gs(void 0,n.useValue);{let e=Q_(n);return gs(e,eu)}}function Q_(n,e,t){let i;if(iu(n)){let r=Hn(n);return vs(r)||gp(r)}else if(J_(n))i=()=>Hn(n.useValue);else if(Ww(n))i=()=>n.useFactory(...mp(n.deps||[]));else if(jw(n))i=(r,o)=>Xe(Hn(n.useExisting),o!==void 0&&o&8?8:void 0);else{let r=Hn(n&&(n.useClass||n.provide));if(Xw(n))i=()=>new r(...mp(n.deps));else return vs(r)||gp(r)}return i}function Na(n){if(n.destroyed)throw new Re(-205,!1)}function gs(n,e,t=!1){return{factory:n,value:e,multi:t?[]:void 0}}function Xw(n){return!!n.deps}function Yw(n){return n!==null&&typeof n=="object"&&typeof n.ngOnDestroy=="function"}function Zw(n){return typeof n=="function"||typeof n=="object"&&n.ngMetadataName==="InjectionToken"}function vp(n,e){for(let t of n)Array.isArray(t)?vp(t,e):t&&Cp(t)?vp(t.\u0275providers,e):e(t)}function yn(n,e){let t;n instanceof So?(Na(n),t=n):t=new pp(n);let i,r=Bi(t),o=Vn(void 0);try{return e()}finally{Bi(r),Vn(o)}}function e0(){return W_()!==void 0||Pl()!=null}var vi=0,Pe=1,He=2,Qt=3,ai=4,zn=5,Es=6,bs=7,zt=8,Hi=9,yi=10,Xt=11,Ms=12,Bp=13,Lr=14,Gn=15,Or=16,Co=17,zi=18,Gi=19,Vp=20,fr=21,pu=22,Ga=23,jn=24,mu=25,ji=26,fn=27,t0=1,Hp=6,To=7,ja=8,Do=9,Rt=10;function Fr(n){return Array.isArray(n)&&typeof n[t0]=="object"}function ci(n){return Array.isArray(n)&&n[t0]===!0}function zp(n){return(n.flags&4)!==0}function kr(n){return n.componentOffset>-1}function gu(n){return(n.flags&1)===1}function Ao(n){return!!n.template}function ws(n){return(n[He]&512)!==0}function Io(n){return(n[He]&256)===256}var vu=(function(n){return n[n.NONE=0]="NONE",n[n.HTML=1]="HTML",n[n.STYLE=2]="STYLE",n[n.SCRIPT=3]="SCRIPT",n[n.URL=4]="URL",n[n.RESOURCE_URL=5]="RESOURCE_URL",n[n.ATTRIBUTE_NO_BINDING=6]="ATTRIBUTE_NO_BINDING",n})(vu||{});var n0="svg",i0="math";function hn(n){for(;Array.isArray(n);)n=n[vi];return n}function Gp(n,e){return hn(e[n])}function Wi(n,e){return hn(e[n.index])}function yu(n,e){return n.data[e]}function $i(n,e){let t=e[n];return Fr(t)?t:t[vi]}function r0(n){return(n[He]&4)===4}function _u(n){return(n[He]&128)===128}function o0(n){return ci(n[Qt])}function qi(n,e){return e==null?null:n[e]}function jp(n){n[Co]=0}function Wp(n){n[He]&1024||(n[He]|=1024,_u(n)&&$a(n))}function s0(n,e){for(;n>0;)e=e[Lr],n--;return e}function Wa(n){return!!(n[He]&9216||n[jn]?.dirty)}function xu(n){n[yi].changeDetectionScheduler?.notify(8),n[He]&64&&(n[He]|=1024),Wa(n)&&$a(n)}function $a(n){n[yi].changeDetectionScheduler?.notify(0);let e=hr(n);for(;e!==null&&!(e[He]&8192||(e[He]|=8192,!_u(e)));)e=hr(e)}function Su(n,e){if(Io(n))throw new Re(911,!1);n[fr]===null&&(n[fr]=[]),n[fr].push(e)}function a0(n,e){if(n[fr]===null)return;let t=n[fr].indexOf(e);t!==-1&&n[fr].splice(t,1)}function hr(n){let e=n[Qt];return ci(e)?e[Qt]:e}function $p(n){return n[bs]??=[]}function qp(n){return n.cleanup??=[]}function c0(n,e,t,i){let r=$p(e);r.push(t),n.firstCreatePass&&qp(n).push(i,r.length-1)}var Je={lFrame:S0(null),bindingsEnabled:!0,skipHydrationRootTNode:null};var yp=!1;function l0(){return Je.lFrame.elementDepthCount}function u0(){Je.lFrame.elementDepthCount++}function Xp(){Je.lFrame.elementDepthCount--}function d0(){return Je.bindingsEnabled}function f0(){return Je.skipHydrationRootTNode!==null}function Yp(n){return Je.skipHydrationRootTNode===n}function Zp(){Je.skipHydrationRootTNode=null}function ct(){return Je.lFrame.lView}function Wn(){return Je.lFrame.tView}function $n(n){return Je.lFrame.contextLView=n,n[zt]}function qn(n){return Je.lFrame.contextLView=null,n}function _i(){let n=Kp();for(;n!==null&&n.type===64;)n=n.parent;return n}function Kp(){return Je.lFrame.currentTNode}function h0(){let n=Je.lFrame,e=n.currentTNode;return n.isParent?e:e.parent}function Cs(n,e){let t=Je.lFrame;t.currentTNode=n,t.isParent=e}function Jp(){return Je.lFrame.isParent}function p0(){Je.lFrame.isParent=!1}function Qp(){return yp}function em(n){let e=yp;return yp=n,e}function m0(n){return Je.lFrame.bindingIndex=n}function qa(){return Je.lFrame.bindingIndex++}function tm(n){let e=Je.lFrame,t=e.bindingIndex;return e.bindingIndex=e.bindingIndex+n,t}function g0(){return Je.lFrame.inI18n}function v0(n,e){let t=Je.lFrame;t.bindingIndex=t.bindingRootIndex=n,Eu(e)}function y0(){return Je.lFrame.currentDirectiveIndex}function Eu(n){Je.lFrame.currentDirectiveIndex=n}function _0(n){let e=Je.lFrame.currentDirectiveIndex;return e===-1?null:n[e]}function nm(){return Je.lFrame.currentQueryIndex}function bu(n){Je.lFrame.currentQueryIndex=n}function Kw(n){let e=n[Pe];return e.type===2?e.declTNode:e.type===1?n[zn]:null}function im(n,e,t){if(t&4){let r=e,o=n;for(;r=r.parent,r===null&&!(t&1);)if(r=Kw(o),r===null||(o=o[Lr],r.type&10))break;if(r===null)return!1;e=r,n=o}let i=Je.lFrame=x0();return i.currentTNode=e,i.lView=n,!0}function Mu(n){let e=x0(),t=n[Pe];Je.lFrame=e,e.currentTNode=t.firstChild,e.lView=n,e.tView=t,e.contextLView=n,e.bindingIndex=t.bindingStartIndex,e.inI18n=!1}function x0(){let n=Je.lFrame,e=n===null?null:n.child;return e===null?S0(n):e}function S0(n){let e={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:n,child:null,inI18n:!1};return n!==null&&(n.child=e),e}function E0(){let n=Je.lFrame;return Je.lFrame=n.parent,n.currentTNode=null,n.lView=null,n}var rm=E0;function wu(){let n=E0();n.isParent=!0,n.tView=null,n.selectedIndex=-1,n.contextLView=null,n.elementDepthCount=0,n.currentDirectiveIndex=-1,n.currentNamespace=null,n.bindingRootIndex=-1,n.bindingIndex=-1,n.currentQueryIndex=0}function b0(n){return(Je.lFrame.contextLView=s0(n,Je.lFrame.contextLView))[zt]}function gr(){return Je.lFrame.selectedIndex}function Ur(n){Je.lFrame.selectedIndex=n}function M0(){let n=Je.lFrame;return yu(n.tView,n.selectedIndex)}function om(){return Je.lFrame.currentNamespace}var w0=!0;function Cu(){return w0}function Tu(n){w0=n}function _p(n,e=null,t=null,i){let r=sm(n,e,t,i);return r.resolveInjectorInitializers(),r}function sm(n,e=null,t=null,i,r=new Set){let o=[t||Ln,Z_(n)],s;return new So(o,e||za(),s||null,r)}var pr=class n{static THROW_IF_NOT_FOUND=_o;static NULL=new ys;static create(e,t){if(Array.isArray(e))return _p({name:""},t,e,"");{let i=e.name??"";return _p({name:i},e.parent,e.providers,i)}}static \u0275prov=gt({token:n,providedIn:"any",factory:()=>Xe(Va)});static __NG_ELEMENT_ID__=-1},Yt=new Ne(""),Vi=class{static __NG_ELEMENT_ID__=Jw;static __NG_ENV_ID__=e=>e},xp=class extends Vi{_lView;constructor(e){super(),this._lView=e}get destroyed(){return Io(this._lView)}onDestroy(e){let t=this._lView;return Su(t,e),()=>a0(t,e)}};function Jw(){return new xp(ct())}var C0=!1,T0=new Ne(""),Br=(()=>{class n{taskId=0;pendingTasks=new Set;destroyed=!1;pendingTask=new un(!1);debugTaskTracker=re(T0,{optional:!0});get hasPendingTasks(){return this.destroyed?!1:this.pendingTask.value}get hasPendingTasksObservable(){return this.destroyed?new nt(t=>{t.next(!1),t.complete()}):this.pendingTask}add(){!this.hasPendingTasks&&!this.destroyed&&this.pendingTask.next(!0);let t=this.taskId++;return this.pendingTasks.add(t),this.debugTaskTracker?.add(t),t}has(t){return this.pendingTasks.has(t)}remove(t){this.pendingTasks.delete(t),this.debugTaskTracker?.remove(t),this.pendingTasks.size===0&&this.hasPendingTasks&&this.pendingTask.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this.hasPendingTasks&&this.pendingTask.next(!1),this.destroyed=!0,this.pendingTask.unsubscribe()}static \u0275prov=gt({token:n,providedIn:"root",factory:()=>new n})}return n})(),Sp=class extends $t{__isAsync;destroyRef=void 0;pendingTasks=void 0;constructor(e=!1){super(),this.__isAsync=e,e0()&&(this.destroyRef=re(Vi,{optional:!0})??void 0,this.pendingTasks=re(Br,{optional:!0})??void 0)}emit(e){let t=Fe(null);try{super.next(e)}finally{Fe(t)}}subscribe(e,t,i){let r=e,o=t||(()=>null),s=i;if(e&&typeof e=="object"){let c=e;r=c.next?.bind(c),o=c.error?.bind(c),s=c.complete?.bind(c)}this.__isAsync&&(o=this.wrapInTimeout(o),r&&(r=this.wrapInTimeout(r)),s&&(s=this.wrapInTimeout(s)));let a=super.subscribe({next:r,error:o,complete:s});return e instanceof ln&&e.add(a),a}wrapInTimeout(e){return t=>{let i=this.pendingTasks?.add();setTimeout(()=>{try{e(t)}finally{i!==void 0&&this.pendingTasks?.remove(i)}})}}},Dn=Sp;function ru(...n){}function am(n){let e,t;function i(){n=ru;try{t!==void 0&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(t),e!==void 0&&clearTimeout(e)}catch{}}return e=setTimeout(()=>{n(),i()}),typeof requestAnimationFrame=="function"&&(t=requestAnimationFrame(()=>{n(),i()})),()=>i()}function D0(n){return queueMicrotask(()=>n()),()=>{n=ru}}var cm="isAngularZone",Pa=cm+"_ID",Qw=0,On=class n{hasPendingMacrotasks=!1;hasPendingMicrotasks=!1;isStable=!0;onUnstable=new Dn(!1);onMicrotaskEmpty=new Dn(!1);onStable=new Dn(!1);onError=new Dn(!1);constructor(e){let{enableLongStackTrace:t=!1,shouldCoalesceEventChangeDetection:i=!1,shouldCoalesceRunChangeDetection:r=!1,scheduleInRootZone:o=C0}=e;if(typeof Zone>"u")throw new Re(908,!1);Zone.assertZonePatched();let s=this;s._nesting=0,s._outer=s._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(s._inner=s._inner.fork(new Zone.TaskTrackingZoneSpec)),t&&Zone.longStackTraceZoneSpec&&(s._inner=s._inner.fork(Zone.longStackTraceZoneSpec)),s.shouldCoalesceEventChangeDetection=!r&&i,s.shouldCoalesceRunChangeDetection=r,s.callbackScheduled=!1,s.scheduleInRootZone=o,nC(s)}static isInAngularZone(){return typeof Zone<"u"&&Zone.current.get(cm)===!0}static assertInAngularZone(){if(!n.isInAngularZone())throw new Re(909,!1)}static assertNotInAngularZone(){if(n.isInAngularZone())throw new Re(909,!1)}run(e,t,i){return this._inner.run(e,t,i)}runTask(e,t,i,r){let o=this._inner,s=o.scheduleEventTask("NgZoneEvent: "+r,e,eC,ru,ru);try{return o.runTask(s,t,i)}finally{o.cancelTask(s)}}runGuarded(e,t,i){return this._inner.runGuarded(e,t,i)}runOutsideAngular(e){return this._outer.run(e)}},eC={};function lm(n){if(n._nesting==0&&!n.hasPendingMicrotasks&&!n.isStable)try{n._nesting++,n.onMicrotaskEmpty.emit(null)}finally{if(n._nesting--,!n.hasPendingMicrotasks)try{n.runOutsideAngular(()=>n.onStable.emit(null))}finally{n.isStable=!0}}}function tC(n){if(n.isCheckStableRunning||n.callbackScheduled)return;n.callbackScheduled=!0;function e(){am(()=>{n.callbackScheduled=!1,Ep(n),n.isCheckStableRunning=!0,lm(n),n.isCheckStableRunning=!1})}n.scheduleInRootZone?Zone.root.run(()=>{e()}):n._outer.run(()=>{e()}),Ep(n)}function nC(n){let e=()=>{tC(n)},t=Qw++;n._inner=n._inner.fork({name:"angular",properties:{[cm]:!0,[Pa]:t,[Pa+t]:!0},onInvokeTask:(i,r,o,s,a,c)=>{if(iC(c))return i.invokeTask(o,s,a,c);try{return U_(n),i.invokeTask(o,s,a,c)}finally{(n.shouldCoalesceEventChangeDetection&&s.type==="eventTask"||n.shouldCoalesceRunChangeDetection)&&e(),B_(n)}},onInvoke:(i,r,o,s,a,c,l)=>{try{return U_(n),i.invoke(o,s,a,c,l)}finally{n.shouldCoalesceRunChangeDetection&&!n.callbackScheduled&&!rC(c)&&e(),B_(n)}},onHasTask:(i,r,o,s)=>{i.hasTask(o,s),r===o&&(s.change=="microTask"?(n._hasPendingMicrotasks=s.microTask,Ep(n),lm(n)):s.change=="macroTask"&&(n.hasPendingMacrotasks=s.macroTask))},onHandleError:(i,r,o,s)=>(i.handleError(o,s),n.runOutsideAngular(()=>n.onError.emit(s)),!1)})}function Ep(n){n._hasPendingMicrotasks||(n.shouldCoalesceEventChangeDetection||n.shouldCoalesceRunChangeDetection)&&n.callbackScheduled===!0?n.hasPendingMicrotasks=!0:n.hasPendingMicrotasks=!1}function U_(n){n._nesting++,n.isStable&&(n.isStable=!1,n.onUnstable.emit(null))}function B_(n){n._nesting--,lm(n)}var La=class{hasPendingMicrotasks=!1;hasPendingMacrotasks=!1;isStable=!0;onUnstable=new Dn;onMicrotaskEmpty=new Dn;onStable=new Dn;onError=new Dn;run(e,t,i){return e.apply(t,i)}runGuarded(e,t,i){return e.apply(t,i)}runOutsideAngular(e){return e()}runTask(e,t,i,r){return e.apply(t,i)}};function iC(n){return A0(n,"__ignore_ng_zone__")}function rC(n){return A0(n,"__scheduler_tick__")}function A0(n,e){return!Array.isArray(n)||n.length!==1?!1:n[0]?.data?.[e]===!0}var mr=class{_console=console;handleError(e){this._console.error("ERROR",e)}},Xi=new Ne("",{factory:()=>{let n=re(On),e=re(Jt),t;return i=>{n.runOutsideAngular(()=>{e.destroyed&&!t?setTimeout(()=>{throw i}):(t??=e.get(mr),t.handleError(i))})}}}),I0={provide:Ss,useValue:()=>{let n=re(mr,{optional:!0})},multi:!0},oC=new Ne("",{factory:()=>{let n=re(Yt).defaultView;if(!n)return;let e=re(Xi),t=o=>{e(o.reason),o.preventDefault()},i=o=>{o.error?e(o.error):e(new Error(o.message,{cause:o})),o.preventDefault()},r=()=>{n.addEventListener("unhandledrejection",t),n.addEventListener("error",i)};typeof Zone<"u"?Zone.root.run(r):r(),re(Vi).onDestroy(()=>{n.removeEventListener("error",i),n.removeEventListener("unhandledrejection",t)})}});function um(){return wo([Y_(()=>{re(oC)})])}function Xn(n,e){let[t,i,r]=Yh(n,e?.equal),o=t,s=o[Cn];return o.set=i,o.update=r,o.asReadonly=R0.bind(o),o}function R0(){let n=this[Cn];if(n.readonlyFn===void 0){let e=()=>this();e[Cn]=n,n.readonlyFn=e}return n.readonlyFn}var Xa=new Ne("",{factory:()=>sC}),sC="ng";var Du=new Ne(""),Ya=new Ne("",{providedIn:"platform",factory:()=>"unknown"});var Au=new Ne("",{factory:()=>re(Yt).body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce")||null});var _s=class{},Za=new Ne("",{factory:()=>!0});var dm=new Ne(""),fm=(()=>{class n{static \u0275prov=gt({token:n,providedIn:"root",factory:()=>new bp})}return n})(),bp=class{dirtyEffectCount=0;queues=new Map;add(e){this.enqueue(e),this.schedule(e)}schedule(e){e.dirty&&this.dirtyEffectCount++}remove(e){let t=e.zone,i=this.queues.get(t);i.has(e)&&(i.delete(e),e.dirty&&this.dirtyEffectCount--)}enqueue(e){let t=e.zone;this.queues.has(t)||this.queues.set(t,new Set);let i=this.queues.get(t);i.has(e)||i.add(e)}flush(){for(;this.dirtyEffectCount>0;){let e=!1;for(let[t,i]of this.queues)t===null?e||=this.flushQueue(i):e||=t.run(()=>this.flushQueue(i));e||(this.dirtyEffectCount=0)}}flushQueue(e){let t=!1;for(let i of e)i.dirty&&(this.dirtyEffectCount--,t=!0,i.run());return t}},Mp=class{[Cn];constructor(e){this[Cn]=e}destroy(){this[Cn].destroy()}};function Ku(n){return{toString:n}.toString()}var ht=(function(n){return n[n.TemplateCreateStart=0]="TemplateCreateStart",n[n.TemplateCreateEnd=1]="TemplateCreateEnd",n[n.TemplateUpdateStart=2]="TemplateUpdateStart",n[n.TemplateUpdateEnd=3]="TemplateUpdateEnd",n[n.LifecycleHookStart=4]="LifecycleHookStart",n[n.LifecycleHookEnd=5]="LifecycleHookEnd",n[n.OutputStart=6]="OutputStart",n[n.OutputEnd=7]="OutputEnd",n[n.BootstrapApplicationStart=8]="BootstrapApplicationStart",n[n.BootstrapApplicationEnd=9]="BootstrapApplicationEnd",n[n.BootstrapComponentStart=10]="BootstrapComponentStart",n[n.BootstrapComponentEnd=11]="BootstrapComponentEnd",n[n.ChangeDetectionStart=12]="ChangeDetectionStart",n[n.ChangeDetectionEnd=13]="ChangeDetectionEnd",n[n.ChangeDetectionSyncStart=14]="ChangeDetectionSyncStart",n[n.ChangeDetectionSyncEnd=15]="ChangeDetectionSyncEnd",n[n.AfterRenderHooksStart=16]="AfterRenderHooksStart",n[n.AfterRenderHooksEnd=17]="AfterRenderHooksEnd",n[n.ComponentStart=18]="ComponentStart",n[n.ComponentEnd=19]="ComponentEnd",n[n.DeferBlockStateStart=20]="DeferBlockStateStart",n[n.DeferBlockStateEnd=21]="DeferBlockStateEnd",n[n.DynamicComponentStart=22]="DynamicComponentStart",n[n.DynamicComponentEnd=23]="DynamicComponentEnd",n[n.HostBindingsUpdateStart=24]="HostBindingsUpdateStart",n[n.HostBindingsUpdateEnd=25]="HostBindingsUpdateEnd",n})(ht||{}),Ou=class{previousValue;currentValue;firstChange;constructor(e,t,i){this.previousValue=e,this.currentValue=t,this.firstChange=i}isFirstChange(){return this.firstChange}};function cx(n,e,t,i){e!==null?e.applyValueToInputSignal(e,i):n[t]=i}var lx=null,Ju=(()=>{lx=N0;let n=()=>N0;return n.ngInherit=!0,n})();function bC(){return lx}function N0(n){return n.type.prototype.ngOnChanges&&(n.setInput=wC),MC}function MC(){let n=ux(this),e=n?.current;if(e){let t=n.previous;if(t===Mo)n.previous=e;else for(let i in e)t[i]=e[i];n.current=null,this.ngOnChanges(e)}}function wC(n,e,t,i,r){let o=this.declaredInputs[i],s=ux(n)||CC(n,{previous:Mo,current:null}),a=s.current||(s.current={}),c=s.previous,l=c[o];a[o]=new Ou(l&&l.currentValue,t,c===Mo),cx(n,e,r,t)}var xm="__ngSimpleChanges__";function ux(n){return Object.hasOwn(n,xm)&&n[xm]||null}function CC(n,e){return n[xm]=e}var P0=[];var bt=function(n,e=null,t){for(let i=0;i<P0.length;i++){let r=P0[i];r(n,e,t)}};function TC(n,e,t){let{ngOnChanges:i,ngOnInit:r,ngDoCheck:o}=e.type.prototype;if(i){let s=bC()(e);(t.preOrderHooks??=[]).push(n,s),(t.preOrderCheckHooks??=[]).push(n,s)}r&&(t.preOrderHooks??=[]).push(0-n,r),o&&((t.preOrderHooks??=[]).push(n,o),(t.preOrderCheckHooks??=[]).push(n,o))}function DC(n,e){for(let t=e.directiveStart,i=e.directiveEnd;t<i;t++){let o=n.data[t].type.prototype,{ngAfterContentInit:s,ngAfterContentChecked:a,ngAfterViewInit:c,ngAfterViewChecked:l,ngOnDestroy:u}=o;s&&(n.contentHooks??=[]).push(-t,s),a&&((n.contentHooks??=[]).push(t,a),(n.contentCheckHooks??=[]).push(t,a)),c&&(n.viewHooks??=[]).push(-t,c),l&&((n.viewHooks??=[]).push(t,l),(n.viewCheckHooks??=[]).push(t,l)),u!=null&&(n.destroyHooks??=[]).push(t,u)}}function Ru(n,e,t){dx(n,e,3,t)}function Nu(n,e,t,i){(n[He]&3)===t&&dx(n,e,t,i)}function hm(n,e){let t=n[He];(t&3)===e&&(t&=16383,t+=1,n[He]=t)}function dx(n,e,t,i){let r=i!==void 0?n[Co]&65535:0,o=i??-1,s=e.length-1,a=0;for(let c=r;c<s;c++)if(typeof e[c+1]=="number"){if(a=e[c],i!=null&&a>=i)break}else e[c]<0&&(n[Co]+=65536),(a<o||o==-1)&&(AC(n,t,e,c),n[Co]=(n[Co]&4294901760)+c+2),c++}function L0(n,e){bt(ht.LifecycleHookStart,n,e);let t=Fe(null);try{e.call(n)}finally{Fe(t),bt(ht.LifecycleHookEnd,n,e)}}function AC(n,e,t,i){let r=t[i]<0,o=t[i+1],s=r?-t[i]:t[i],a=n[s];r?n[He]>>14<n[Co]>>16&&(n[He]&3)===e&&(n[He]+=16384,L0(a,o)):L0(a,o)}var Ds=-1,ec=class{factory;name;injectImpl;resolving=!1;canSeeViewProviders;multi;componentProviders;index;providerFactory;constructor(e,t,i,r){this.factory=e,this.name=r,this.canSeeViewProviders=t,this.injectImpl=i}};function IC(n){return(n.flags&8)!==0}function RC(n){return(n.flags&16)!==0}function NC(n,e,t){let i=0;for(;i<t.length;){let r=t[i];if(typeof r=="number"){if(r!==0)break;i++;let o=t[i++],s=t[i++],a=t[i++];n.setAttribute(e,s,a,o)}else{let o=r,s=t[++i];LC(o)?n.setProperty(e,o,s):n.setAttribute(e,o,s),i++}}return i}function PC(n){return n===3||n===4||n===6}function LC(n){return n.charCodeAt(0)===64}function Qu(n,e){if(!(e===null||e.length===0))if(n===null||n.length===0)n=e.slice();else{let t=-1;for(let i=0;i<e.length;i++){let r=e[i];typeof r=="number"?t=r:t===0||(t===-1||t===2?O0(n,t,r,null,e[++i]):O0(n,t,r,null,null))}}return n}function O0(n,e,t,i,r){let o=0,s=n.length;if(e===-1)s=-1;else for(;o<n.length;){let a=n[o++];if(typeof a=="number"){if(a===e){s=-1;break}else if(a>e){s=o-1;break}}}for(;o<n.length;){let a=n[o];if(typeof a=="number")break;if(a===t){r!==null&&(n[o+1]=r);return}o++,r!==null&&o++}s!==-1&&(n.splice(s,0,e),o=s+1),n.splice(o++,0,t),r!==null&&n.splice(o++,0,r)}function fx(n){return n!==Ds}function Fu(n){return n&32767}function OC(n){return n>>16}function ku(n,e){let t=OC(n),i=e;for(;t>0;)i=i[Lr],t--;return i}var Sm=!0;function F0(n){let e=Sm;return Sm=n,e}var FC=256,hx=FC-1,px=5,kC=0,Yi={};function UC(n,e,t){let i;typeof t=="string"?i=t.charCodeAt(0)||0:t.hasOwnProperty(Eo)&&(i=t[Eo]),i==null&&(i=t[Eo]=kC++);let r=i&hx,o=1<<r;e.data[n+(r>>px)]|=o}function mx(n,e){let t=gx(n,e);if(t!==-1)return t;let i=e[Pe];i.firstCreatePass&&(n.injectorIndex=e.length,pm(i.data,n),pm(e,null),pm(i.blueprint,null));let r=qm(n,e),o=n.injectorIndex;if(fx(r)){let s=Fu(r),a=ku(r,e),c=a[Pe].data;for(let l=0;l<8;l++)e[o+l]=a[s+l]|c[s+l]}return e[o+8]=r,o}function pm(n,e){n.push(0,0,0,0,0,0,0,0,e)}function gx(n,e){return n.injectorIndex===-1||n.parent&&n.parent.injectorIndex===n.injectorIndex||e[n.injectorIndex+8]===null?-1:n.injectorIndex}function qm(n,e){if(n.parent&&n.parent.injectorIndex!==-1)return n.parent.injectorIndex;let t=0,i=null,r=e;for(;r!==null;){if(i=Sx(r),i===null)return Ds;if(t++,r=r[Lr],i.injectorIndex!==-1)return i.injectorIndex|t<<16}return Ds}function BC(n,e,t){UC(n,e,t)}function vx(n,e,t){if(t&8||n!==void 0)return n;uu(e,"NodeInjector")}function yx(n,e,t,i){if(t&8&&i===void 0&&(i=null),(t&3)===0){let r=n[Hi],o=Vn(void 0);try{return r?r.get(e,i,t&8):Lp(e,i,t&8)}finally{Vn(o)}}return vx(i,e,t)}function _x(n,e,t,i=0,r){if(n!==null){if(e[He]&2048&&!(i&2)){let s=GC(n,e,t,i,Yi);if(s!==Yi)return s}let o=xx(n,e,t,i,Yi);if(o!==Yi)return o}return yx(e,t,i,r)}function xx(n,e,t,i,r){let o=HC(t);if(typeof o=="function"){if(!im(e,n,i))return i&1?vx(r,t,i):yx(e,t,i,r);try{let s;if(s=o(i),s==null&&!(i&8))uu(t);else return s}finally{rm()}}else if(typeof o=="number"){let s=null,a=gx(n,e),c=Ds,l=i&1?e[Gn][zn]:null;for((a===-1||i&4)&&(c=a===-1?qm(n,e):e[a+8],c===Ds||!U0(i,!1)?a=-1:(s=e[Pe],a=Fu(c),e=ku(c,e)));a!==-1;){let u=e[Pe];if(k0(o,a,u.data)){let f=VC(a,e,t,s,i,l);if(f!==Yi)return f}c=e[a+8],c!==Ds&&U0(i,e[Pe].data[a+8]===l)&&k0(o,a,e)?(s=u,a=Fu(c),e=ku(c,e)):a=-1}}return r}function VC(n,e,t,i,r,o){let s=e[Pe],a=s.data[n+8],c=i==null?kr(a)&&Sm:i!=s&&(a.type&3)!==0,l=r&1&&o===a,u=Pu(a,s,t,c,l);return u!==null?Uu(e,s,u,a,r):Yi}function Pu(n,e,t,i,r){let o=n.providerIndexes,s=e.data,a=o&1048575,c=n.directiveStart,l=n.directiveEnd,u=o>>20,f=i?a:a+u,d=r?a+u:l;for(let h=f;h<d;h++){let p=s[h];if(h<c&&t===p||h>=c&&p.type===t)return h}if(r){let h=s[c];if(h&&Ao(h)&&h.type===t)return c}return null}function Uu(n,e,t,i,r){let o=n[t],s=e.data;if(o instanceof ec){let a=o;if(a.resolving)throw Pp("");let c=F0(a.canSeeViewProviders);a.resolving=!0;let l=s[t].type||s[t],u,f=a.injectImpl?Vn(a.injectImpl):null,d=im(n,i,0);try{o=n[t]=a.factory(void 0,r,s,n,i),e.firstCreatePass&&t>=i.directiveStart&&TC(t,s[t],e)}finally{f!==null&&Vn(f),F0(c),a.resolving=!1,rm()}}return o}function HC(n){if(typeof n=="string")return n.charCodeAt(0)||0;let e=n.hasOwnProperty(Eo)?n[Eo]:void 0;return typeof e=="number"?e>=0?e&hx:zC:e}function k0(n,e,t){let i=1<<n;return!!(t[e+(n>>px)]&i)}function U0(n,e){return!(n&2)&&!(n&1&&e)}var Vr=class{_tNode;_lView;constructor(e,t){this._tNode=e,this._lView=t}get(e,t,i){return _x(this._tNode,this._lView,e,xo(i),t)}};function zC(){return new Vr(_i(),ct())}function GC(n,e,t,i,r){let o=n,s=e;for(;o!==null&&s!==null&&s[He]&2048&&!ws(s);){let a=xx(o,s,t,i|2,Yi);if(a!==Yi)return a;let c=o.parent;if(!c){let l=s[Vp];if(l){let u=l.get(t,Yi,i&-5);if(u!==Yi)return u}c=Sx(s),s=s[Lr]}o=c}return r}function Sx(n){let e=n[Pe],t=e.type;return t===2?e.declTNode:t===1?n[zn]:null}function en(n){return{token:n.token,providedIn:n.autoProvided===!1?null:"root",factory:n.factory,value:void 0}}function jC(){return Ps(_i(),ct())}function Ps(n,e){return new Ls(Wi(n,e))}var Ls=(()=>{class n{nativeElement;constructor(t){this.nativeElement=t}static __NG_ELEMENT_ID__=jC}return n})();function WC(n){return n instanceof Ls?n.nativeElement:n}function $C(){return this._results[Symbol.iterator]()}var Bu=class{_emitDistinctChangesOnly;dirty=!0;_onDirty=void 0;_results=[];_changesDetected=!1;_changes=void 0;length=0;first=void 0;last=void 0;get changes(){return this._changes??=new $t}constructor(e=!1){this._emitDistinctChangesOnly=e}get(e){return this._results[e]}map(e){return this._results.map(e)}filter(e){return this._results.filter(e)}find(e){return this._results.find(e)}reduce(e,t){return this._results.reduce(e,t)}forEach(e){this._results.forEach(e)}some(e){return this._results.some(e)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(e,t){this.dirty=!1;let i=q_(e);(this._changesDetected=!$_(this._results,i,t))&&(this._results=i,this.length=i.length,this.last=i[this.length-1],this.first=i[0])}notifyOnChanges(){this._changes!==void 0&&(this._changesDetected||!this._emitDistinctChangesOnly)&&this._changes.next(this)}onDirty(e){this._onDirty=e}setDirty(){this.dirty=!0,this._onDirty?.()}destroy(){this._changes!==void 0&&(this._changes.complete(),this._changes.unsubscribe())}[Symbol.iterator]=$C};function Ex(n){return(n.flags&128)===128}var Xm=(function(n){return n[n.OnPush=0]="OnPush",n[n.Eager=1]="Eager",n[n.Default=1]="Default",n})(Xm||{}),bx=new Map,qC=0;function XC(){return qC++}function YC(n){bx.set(n[Gi],n)}function Em(n){bx.delete(n[Gi])}var B0="__ngContext__";function As(n,e){Fr(e)?(n[B0]=e[Gi],YC(e)):n[B0]=e}function Mx(n){return Cx(n[Ms])}function wx(n){return Cx(n[ai])}function Cx(n){for(;n!==null&&!ci(n);)n=n[ai];return n}var bm;function Ym(n){bm=n}function Tx(){if(bm!==void 0)return bm;if(typeof document<"u")return document;throw new Re(210,!1)}var Dx="r";var Ax="di";var Ix=!1,Rx=new Ne("",{factory:()=>Ix});var V0=new WeakMap;function ZC(n,e){if(n==null||typeof n!="object")return;let t=V0.get(n);t||(t=new WeakSet,V0.set(n,t)),t.add(e)}var KC=(n,e,t,i)=>{};function JC(n,e,t,i){KC(n,e,t,i)}function Zm(n){return(n.flags&32)===32}var QC=()=>null;function Nx(n,e,t=!1){return QC(n,e,t)}function Px(n,e){let t=n.contentQueries;if(t!==null){let i=Fe(null);try{for(let r=0;r<t.length;r+=2){let o=t[r],s=t[r+1];if(s!==-1){let a=n.data[s];bu(o),a.contentQueries(2,e[s],s)}}}finally{Fe(i)}}}function Mm(n,e,t){bu(0);let i=Fe(null);try{e(n,t)}finally{Fe(i)}}function Lx(n,e,t){if(zp(e)){let i=Fe(null);try{let r=e.directiveStart,o=e.directiveEnd;for(let s=r;s<o;s++){let a=n.data[s];if(a.contentQueries){let c=t[s];a.contentQueries(1,c,s)}}}finally{Fe(i)}}}var Ei=(function(n){return n[n.Emulated=0]="Emulated",n[n.None=2]="None",n[n.ShadowDom=3]="ShadowDom",n[n.ExperimentalIsolatedShadowDom=4]="ExperimentalIsolatedShadowDom",n})(Ei||{});var Vu=class{changingThisBreaksApplicationSecurity;constructor(e){this.changingThisBreaksApplicationSecurity=e}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${ou})`}};function ed(n){return n instanceof Vu?n.changingThisBreaksApplicationSecurity:n}function Ox(n,e){let t=Fx(n);if(t!=null&&t!==e){if(t==="ResourceURL"&&e==="URL")return!0;throw new Error(`Required a safe ${e}, got a ${t} (see ${ou})`)}return t===e}function Fx(n){return n instanceof Vu&&n.getTypeName()||null}var eT=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;function kx(n){return n=String(n),n.match(eT)?n:"unsafe:"+n}function tT(n,e){return n.createText(e)}function nT(n,e,t){n.setValue(e,t)}function Ux(n,e,t){return n.createElement(e,t)}function Ro(n,e,t,i,r){n.insertBefore(e,t,i,r)}function Bx(n,e,t){n.appendChild(e,t)}function H0(n,e,t,i,r){i!==null?Ro(n,e,t,i,r):Bx(n,e,t)}function Vx(n,e,t,i){n.removeChild(null,e,t,i)}function iT(n,e,t){n.setAttribute(e,"style",t)}function rT(n,e,t){t===""?n.removeAttribute(e,"class"):n.setAttribute(e,"class",t)}function Hx(n,e,t){let{mergedAttrs:i,classes:r,styles:o}=t;i!==null&&NC(n,e,i),r!==null&&rT(n,e,r),o!==null&&iT(n,e,o)}function li(n){let e=oT();return e?e.sanitize(vu.URL,n)||"":Ox(n,"URL")?ed(n):kx(Np(n))}function oT(){let n=ct();return n&&n[yi].sanitizer}function sT(n){return n instanceof Function?n():n}function aT(n,e,t){let i=n.length;for(;;){let r=n.indexOf(e,t);if(r===-1)return r;if(r===0||n.charCodeAt(r-1)<=32){let o=e.length;if(r+o===i||n.charCodeAt(r+o)<=32)return r}t=r+1}}var zx="ng-template";function cT(n,e,t,i){let r=0;if(i){for(;r<e.length&&typeof e[r]=="string";r+=2)if(e[r]==="class"&&aT(e[r+1].toLowerCase(),t,0)!==-1)return!0}else if(Km(n))return!1;if(r=e.indexOf(1,r),r>-1){let o;for(;++r<e.length&&typeof(o=e[r])=="string";)if(o.toLowerCase()===t)return!0}return!1}function Km(n){return n.type===4&&n.value!==zx}function lT(n,e,t){let i=n.type===4&&!t?zx:n.value;return e===i}function uT(n,e,t){let i=4,r=n.attrs,o=r!==null?hT(r):0,s=!1;for(let a=0;a<e.length;a++){let c=e[a];if(typeof c=="number"){if(!s&&!xi(i)&&!xi(c))return!1;if(s&&xi(c))continue;s=!1,i=c|i&1;continue}if(!s)if(i&4){if(i=2|i&1,c!==""&&!lT(n,c,t)||c===""&&e.length===1){if(xi(i))return!1;s=!0}}else if(i&8){if(r===null||!cT(n,r,c,t)){if(xi(i))return!1;s=!0}}else{let l=e[++a],u=dT(c,r,Km(n),t);if(u===-1){if(xi(i))return!1;s=!0;continue}if(l!==""){let f;if(u>o?f="":f=r[u+1].toLowerCase(),i&2&&l!==f){if(xi(i))return!1;s=!0}}}}return xi(i)||s}function xi(n){return(n&1)===0}function dT(n,e,t,i){if(e===null)return-1;let r=0;if(i||!t){let o=!1;for(;r<e.length;){let s=e[r];if(s===n)return r;if(s===3||s===6)o=!0;else if(s===1||s===2){let a=e[++r];for(;typeof a=="string";)a=e[++r];continue}else{if(s===4)break;if(s===0){r+=4;continue}}r+=o?1:2}return-1}else return pT(e,n)}function fT(n,e,t=!1){for(let i=0;i<e.length;i++)if(uT(n,e[i],t))return!0;return!1}function hT(n){for(let e=0;e<n.length;e++){let t=n[e];if(PC(t))return e}return n.length}function pT(n,e){let t=n.indexOf(4);if(t>-1)for(t++;t<n.length;){let i=n[t];if(typeof i=="number")return-1;if(i===e)return t;t++}return-1}function z0(n,e){return n?":not("+e.trim()+")":e}function mT(n){let e=n[0],t=1,i=2,r="",o=!1;for(;t<n.length;){let s=n[t];if(typeof s=="string")if(i&2){let a=n[++t];r+="["+s+(a.length>0?'="'+a+'"':"")+"]"}else i&8?r+="."+s:i&4&&(r+=" "+s);else r!==""&&!xi(s)&&(e+=z0(o,r),r=""),i=s,o=o||!xi(i);t++}return r!==""&&(e+=z0(o,r)),e}function gT(n){return n.map(mT).join(",")}function vT(n){let e=[],t=[],i=1,r=2;for(;i<n.length;){let o=n[i];if(typeof o=="string")r===2?o!==""&&e.push(o,n[++i]):r===8&&t.push(o);else{if(!xi(r))break;r=o}i++}return t.length&&e.push(1,...t),e}var bi={},vr=(function(n){return n[n.Important=1]="Important",n[n.DashCase=2]="DashCase",n})(vr||{}),yT;function Jm(n,e){return yT(n,e)}var Az=typeof document<"u"&&typeof document?.documentElement?.getAnimations=="function";var wm=new WeakMap;function Gx(n){return n?n[Lr]??n:null}var Ka=new WeakSet;function _T(n,e,t){let i=wm.get(n);if(!i||i.length===0)return;let r=e.parentNode,o=e.previousSibling,s=Gx(t);for(let a=i.length-1;a>=0;a--){let{el:c,declarationView:l}=i[a],u=c.parentNode;c===e?(i.splice(a,1),Ka.add(c),c.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}}))):o&&c===o?(i.splice(a,1),c.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}})),c.parentNode?.removeChild(c)):u&&r&&u!==r&&(s===null||l===null||s===l)&&(i.splice(a,1),c.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}})),c.parentNode?.removeChild(c))}}function xT(n,e,t){let i=Gx(t),r=wm.get(n);r?r.some(o=>o.el===e)||r.push({el:e,declarationView:i}):wm.set(n,[{el:e,declarationView:i}])}var Hr=new Set,Qm=(function(n){return n[n.CHANGE_DETECTION=0]="CHANGE_DETECTION",n[n.AFTER_NEXT_RENDER=1]="AFTER_NEXT_RENDER",n})(Qm||{}),Os=new Ne(""),G0=new Set;function Lo(n){G0.has(n)||(G0.add(n),performance?.mark?.("mark_feature_usage",{detail:{feature:n}}))}var jx=(()=>{class n{impl=null;execute(){this.impl?.execute()}static \u0275prov=gt({token:n,providedIn:"root",factory:()=>new n})}return n})();var eg=new Ne("",{factory:()=>{let n=re(Jt),e=new Set;return n.onDestroy(()=>e.clear()),{queue:e,isScheduled:!1,scheduler:null,injector:n}}});function Wx(n,e,t){let i=n.get(eg);if(Array.isArray(e))for(let r of e)i.queue.add(r),t?.detachedLeaveAnimationFns?.push(r);else i.queue.add(e),t?.detachedLeaveAnimationFns?.push(e);i.scheduler&&i.scheduler(n)}function ST(n,e){let t=n.get(eg);if(Array.isArray(e))for(let i of e)t.queue.delete(i);else t.queue.delete(e)}function ET(n,e){let t=n.get(eg);if(e.detachedLeaveAnimationFns){for(let i of e.detachedLeaveAnimationFns)t.queue.delete(i);e.detachedLeaveAnimationFns=void 0}}function bT(n,e){for(let[t,i]of e)Wx(n,i.animateFns)}function j0(n,e,t,i){let r=n?.[ji]?.enter;e!==null&&r&&r.has(t.index)&&bT(i,r)}function W0(n,e,t,i){try{t.get(Va)}catch{return i(!1)}let r=n?.[ji];r?.enter?.has(e.index)&&ST(t,r.enter.get(e.index).animateFns);let o=MT(n,e,r);if(o.size===0){let s=!1;if(n){let a=[];td(n,e,a),s=a.length>0}if(!s)return i(!1)}n&&Hr.add(n[Gi]),Wx(t,()=>wT(n,e,r||void 0,o,i),r||void 0)}function MT(n,e,t){let i=new Map,r=t?.leave;if(r&&r.has(e.index)&&i.set(e.index,r.get(e.index)),n&&r)for(let[o,s]of r){if(i.has(o))continue;let c=n[Pe].data[o].parent;for(;c;){if(c===e){i.set(o,s);break}c=c.parent}}return i}function wT(n,e,t,i,r){let o=[];if(t&&t.leave)for(let[s]of i){if(!t.leave.has(s))continue;let a=t.leave.get(s);for(let c of a.animateFns){let{promise:l}=c();o.push(l)}t.detachedLeaveAnimationFns=void 0}if(n&&td(n,e,o),o.length>0){let s=t||n?.[ji];if(s){let a=s.running;a&&o.push(a),s.running=Promise.allSettled(o),TT(n,s.running,r)}else Promise.allSettled(o).then(()=>{n&&Hr.delete(n[Gi]),r(!0)})}else n&&Hr.delete(n[Gi]),r(!1)}function td(n,e,t){if(e.type&12){let r=n[e.index];if(ci(r))for(let o=Rt;o<r.length;o++){let s=r[o];s[Pe].type===2&&CT(s,t)}}let i=e.child;for(;i;)td(n,i,t),i=i.next}function CT(n,e){let t=n[ji];if(t&&t.leave)for(let r of t.leave.values())for(let o of r.animateFns){let{promise:s}=o();e.push(s)}let i=n[Pe].firstChild;for(;i;)td(n,i,e),i=i.next}function TT(n,e,t){e.then(()=>{n[ji]?.running===e&&(n[ji].running=void 0,Hr.delete(n[Gi])),t(!0)})}function Ts(n,e,t,i,r,o,s,a){if(r!=null){let c,l=!1;ci(r)?c=r:Fr(r)&&(l=!0,r=r[vi]);let u=hn(r);n===0&&i!==null?(j0(a,i,o,t),s==null?Bx(e,i,u):Ro(e,i,u,s||null,!0)):n===1&&i!==null?(j0(a,i,o,t),Ro(e,i,u,s||null,!0),_T(o,u,a)):n===2?(a?.[ji]?.leave?.has(o.index)&&xT(o,u,a),Ka.delete(u),W0(a,o,t,f=>{if(Ka.has(u)){Ka.delete(u);return}Vx(e,u,l,f)})):n===3&&(Ka.delete(u),W0(a,o,t,()=>{e.destroyNode(u)})),c!=null&&VT(e,n,t,c,o,i,s)}}function DT(n,e){$x(n,e),e[vi]=null,e[zn]=null}function AT(n,e,t,i,r,o){i[vi]=r,i[zn]=e,id(n,i,t,1,r,o)}function $x(n,e){e[yi].changeDetectionScheduler?.notify(9),id(n,e,e[Xt],2,null,null)}function IT(n){let e=n[Ms];if(!e)return mm(n[Pe],n);for(;e;){let t=null;if(Fr(e))t=e[Ms];else{let i=e[Rt];i&&(t=i)}if(!t){for(;e&&!e[ai]&&e!==n;)Fr(e)&&mm(e[Pe],e),e=e[Qt];e===null&&(e=n),Fr(e)&&mm(e[Pe],e),t=e&&e[ai]}e=t}}function tg(n,e){let t=n[Do],i=t.indexOf(e);t.splice(i,1)}function nd(n,e){if(Io(e))return;let t=e[Xt];t.destroyNode&&id(n,e,t,3,null,null),IT(e)}function mm(n,e){if(Io(e))return;let t=Fe(null);try{e[He]&=-129,e[He]|=256,e[jn]&&Ca(e[jn]),NT(n,e),RT(n,e),e[Pe].type===1&&e[Xt].destroy();let i=e[Or];if(i!==null&&ci(e[Qt])){i!==e[Qt]&&tg(i,e);let r=e[zi];r!==null&&r.detachView(n)}Em(e)}finally{Fe(t)}}function RT(n,e){let t=n.cleanup,i=e[bs];if(t!==null)for(let s=0;s<t.length-1;s+=2)if(typeof t[s]=="string"){let a=t[s+3];a>=0?i[a]():i[-a].unsubscribe(),s+=2}else{let a=i[t[s+1]];t[s].call(a)}i!==null&&(e[bs]=null);let r=e[fr];if(r!==null){e[fr]=null;for(let s=0;s<r.length;s++){let a=r[s];a()}}let o=e[Ga];if(o!==null){e[Ga]=null;for(let s of o)s.destroy()}}function NT(n,e){let t;if(n!=null&&(t=n.destroyHooks)!=null)for(let i=0;i<t.length;i+=2){let r=e[t[i]];if(!(r instanceof ec)){let o=t[i+1];if(Array.isArray(o))for(let s=0;s<o.length;s+=2){let a=r[o[s]],c=o[s+1];bt(ht.LifecycleHookStart,a,c);try{c.call(a)}finally{bt(ht.LifecycleHookEnd,a,c)}}else{bt(ht.LifecycleHookStart,r,o);try{o.call(r)}finally{bt(ht.LifecycleHookEnd,r,o)}}}}}function PT(n,e,t){return LT(n,e.parent,t)}function LT(n,e,t){let i=e;for(;i!==null&&i.type&168;)e=i,i=e.parent;if(i===null)return t[vi];if(kr(i)){let{encapsulation:r}=n.data[i.directiveStart+i.componentOffset];if(r===Ei.None||r===Ei.Emulated)return null}return Wi(i,t)}function OT(n,e,t){return kT(n,e,t)}function FT(n,e,t){return n.type&40?Wi(n,t):null}var kT=FT,$0;function ng(n,e,t,i){let r=PT(n,i,e),o=e[Xt],s=i.parent||e[zn],a=OT(s,i,e);if(r!=null)if(Array.isArray(t))for(let c=0;c<t.length;c++)H0(o,r,t[c],a,!1);else H0(o,r,t,a,!1);$0!==void 0&&$0(o,i,e,t,r)}function Ja(n,e){if(e!==null){let t=e.type;if(t&3)return Wi(e,n);if(t&4)return Cm(-1,n[e.index]);if(t&8){let i=e.child;if(i!==null)return Ja(n,i);{let r=n[e.index];return ci(r)?Cm(-1,r):hn(r)}}else{if(t&128)return Ja(n,e.next);if(t&32)return Jm(e,n)()||hn(n[e.index]);{let i=qx(n,e);if(i!==null){if(Array.isArray(i))return i[0];let r=hr(n[Gn]);return Ja(r,i)}else return Ja(n,e.next)}}}return null}function qx(n,e){if(e!==null){let i=n[Gn][zn],r=e.projection;return i.projection[r]}return null}function Cm(n,e){let t=Rt+n+1;if(t<e.length){let i=e[t],r=i[Pe].firstChild;if(r!==null)return Ja(i,r)}return e[To]}function ig(n,e,t,i,r,o,s){for(;t!=null;){let a=i[Hi];if(t.type===128){t=t.next;continue}let c=i[t.index],l=t.type;if(s&&e===0&&(c&&As(hn(c),i),t.flags|=2),!Zm(t))if(l&8)ig(n,e,t.child,i,r,o,!1),Ts(e,n,a,r,c,t,o,i);else if(l&32){let u=Jm(t,i),f;for(;f=u();)Ts(e,n,a,r,f,t,o,i);Ts(e,n,a,r,c,t,o,i)}else l&16?BT(n,e,i,t,r,o):Ts(e,n,a,r,c,t,o,i);t=s?t.projectionNext:t.next}}function id(n,e,t,i,r,o){n.type===3?UT(t,i,e,r,o):ig(t,i,n.firstChild,e,r,o,!1)}function UT(n,e,t,i,r){let s=t[Pe].firstChild,a=s.next,c=hn(t[s.index]),l=hn(t[a.index]),u=a.index+1,f=t[u];if(e===1||e===0)i!==null&&(f&&f.hasChildNodes()?Ro(n,i,f,r,!0):(Ro(n,i,c,r,!0),Ro(n,i,l,r,!0)));else if(e===2){if(f||(f=document.createDocumentFragment(),t[u]=f),c&&c.parentNode===f)return;let d=c;for(;d!==null;){let h=d.nextSibling;if(f.appendChild(d),d===l)break;d=h}}}function BT(n,e,t,i,r,o){let s=t[Gn],c=s[zn].projection[i.projection];if(Array.isArray(c))for(let l=0;l<c.length;l++){let u=c[l];Ts(e,n,t[Hi],r,u,i,o,t)}else{let l=c,u=s[Qt];Ex(i)&&(l.flags|=128),ig(n,e,l,u,r,o,!0)}}function VT(n,e,t,i,r,o,s){let a=i[To],c=hn(i);if(a!==c&&Ts(e,n,t,o,a,r,s),(i[He]&4)===0)for(let l=Rt;l<i.length;l++){let u=i[l];id(u[Pe],u,n,e,o,a)}}function HT(n,e,t,i,r){if(e)r?n.addClass(t,i):n.removeClass(t,i);else{let o=i.indexOf("-")===-1?void 0:vr.DashCase;r==null?n.removeStyle(t,i,o):(typeof r=="string"&&r.endsWith("!important")&&(r=r.slice(0,-10),o|=vr.Important),n.setStyle(t,i,r,o))}}function rg(n,e,t,i,r,o,s,a,c,l,u){let f=fn+i,d=f+r,h=zT(f,d),p=typeof l=="function"?l():l;return h[Pe]={type:n,blueprint:h,template:t,queries:null,viewQuery:a,declTNode:e,data:h.slice().fill(null,f),bindingStartIndex:f,expandoStartIndex:d,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:typeof o=="function"?o():o,pipeRegistry:typeof s=="function"?s():s,firstChild:null,schemas:c,consts:p,incompleteFirstPass:!1,ssrId:u}}function zT(n,e){let t=[];for(let i=0;i<e;i++)t.push(i<n?null:bi);return t}function GT(n){let e=n.tView;return e===null||e.incompleteFirstPass?n.tView=rg(1,null,n.template,n.decls,n.vars,n.directiveDefs,n.pipeDefs,n.viewQuery,n.schemas,n.consts,n.id):e}function og(n,e,t,i,r,o,s,a,c,l,u){let f=e.blueprint.slice();return f[vi]=r,f[He]=i|4|128|8|64|1024,(l!==null||n&&n[He]&2048)&&(f[He]|=2048),jp(f),f[Qt]=f[Lr]=n,f[zt]=t,f[yi]=s||n&&n[yi],f[Xt]=a||n&&n[Xt],f[Hi]=c||n&&n[Hi]||null,f[zn]=o,f[Gi]=XC(),f[Es]=u,f[Vp]=l,f[Gn]=e.type==2?n[Gn]:f,f}function jT(n,e,t){let i=Wi(e,n),r=GT(t),o=n[yi].rendererFactory,s=sg(n,og(n,r,null,Xx(t),i,e,null,o.createRenderer(i,t),null,null,null));return n[e.index]=s}function Xx(n){let e=16;return n.signals?e=4096:n.onPush&&(e=64),e}function Yx(n,e,t,i){if(t===0)return-1;let r=e.length;for(let o=0;o<t;o++)e.push(i),n.blueprint.push(i),n.data.push(null);return r}function sg(n,e){return n[Ms]?n[Bp][ai]=e:n[Ms]=e,n[Bp]=e,e}function Q(n=1){Zx(Wn(),ct(),gr()+n,!1)}function Zx(n,e,t,i){if(!i)if((e[He]&3)===3){let o=n.preOrderCheckHooks;o!==null&&Ru(e,o,t)}else{let o=n.preOrderHooks;o!==null&&Nu(e,o,0,t)}Ur(t)}var rd=(function(n){return n[n.None=0]="None",n[n.SignalBased=1]="SignalBased",n[n.HasDecoratorInputTransform=2]="HasDecoratorInputTransform",n})(rd||{});function Tm(n,e,t,i){let r=Fe(null);try{let[o,s,a]=n.inputs[t],c=null;(s&rd.SignalBased)!==0&&(c=e[o][Cn]),c!==null&&c.transformFn!==void 0?i=c.transformFn(i):a!==null&&(i=a.call(e,i)),n.setInput!==null?n.setInput(e,c,i,t,o):cx(e,c,o,i)}finally{Fe(r)}}function Kx(n,e,t,i,r){let o=gr(),s=i&2;try{Ur(-1),s&&e.length>fn&&Zx(n,e,fn,!1);let a=s?ht.TemplateUpdateStart:ht.TemplateCreateStart;bt(a,r,t),t(i,r)}finally{Ur(o);let a=s?ht.TemplateUpdateEnd:ht.TemplateCreateEnd;bt(a,r,t)}}function Jx(n,e,t){YT(n,e,t),(t.flags&64)===64&&ZT(n,e,t)}function ag(n,e,t=Wi){let i=e.localNames;if(i!==null){let r=e.index+1;for(let o=0;o<i.length;o+=2){let s=i[o+1],a=s===-1?t(e,n):n[s];n[r++]=a}}}function WT(n,e,t,i){let o=i.get(Rx,Ix)||t===Ei.ShadowDom||t===Ei.ExperimentalIsolatedShadowDom,s=n.selectRootElement(e,o);return $T(s),s}function $T(n){qT(n)}var qT=()=>null;function XT(n,e,t,i,r,o){if(n.type&3){let s=Wi(n,e);i=o!=null?o(i,n.value||"",t):i,r.setProperty(s,t,i)}else n.type&12}function YT(n,e,t){let i=t.directiveStart,r=t.directiveEnd;kr(t)&&jT(e,t,n.data[i+t.componentOffset]),n.firstCreatePass||mx(t,e);let o=t.initialInputs;for(let s=i;s<r;s++){let a=n.data[s],c=Uu(e,n,s,t);if(As(c,e),o!==null&&QT(e,s-i,c,a,t,o),Ao(a)){let l=$i(t.index,e);l[zt]=Uu(e,n,s,t)}}}function ZT(n,e,t){let i=t.directiveStart,r=t.directiveEnd,o=t.index,s=y0();try{Ur(o);for(let a=i;a<r;a++){let c=n.data[a],l=e[a];Eu(a),(c.hostBindings!==null||c.hostVars!==0||c.hostAttrs!==null)&&KT(c,l)}}finally{Ur(-1),Eu(s)}}function KT(n,e){n.hostBindings!==null&&n.hostBindings(1,e)}function JT(n,e){let t=n.directiveRegistry,i=null;if(t)for(let r=0;r<t.length;r++){let o=t[r];fT(e,o.selectors,!1)&&(i??=[],Ao(o)?i.unshift(o):i.push(o))}return i}function QT(n,e,t,i,r,o){let s=o[e];if(s!==null)for(let a=0;a<s.length;a+=2){let c=s[a],l=s[a+1];Tm(i,t,c,l)}}function Qx(n,e,t,i,r){let o=fn+t,s=e[Pe],a=r(s,e,n,i,t);e[o]=a,Cs(n,!0);let c=n.type===2;return c?(Hx(e[Xt],a,n),(l0()===0||gu(n))&&As(a,e),u0()):As(a,e),Cu()&&(!c||!Zm(n))&&ng(s,e,a,n),n}function eS(n){let e=n;return Jp()?p0():(e=e.parent,Cs(e,!1)),e}function eD(n,e){let t=n[Hi];if(!t)return;let i;try{i=t.get(Xi,null)}catch{i=null}i?.(e)}function tS(n,e,t,i,r){let o=n.inputs?.[i],s=n.hostDirectiveInputs?.[i],a=!1;if(s)for(let c=0;c<s.length;c+=2){let l=s[c],u=s[c+1],f=e.data[l];Tm(f,t[l],u,r),a=!0}if(o)for(let c of o){let l=t[c],u=e.data[c];Tm(u,l,i,r),a=!0}return a}function tD(n,e){let t=$i(e,n),i=t[Pe];nD(i,t);let r=t[vi];r!==null&&t[Es]===null&&(t[Es]=Nx(r,t[Hi])),bt(ht.ComponentStart);try{cg(i,t,t[zt])}finally{bt(ht.ComponentEnd,t[zt])}}function nD(n,e){for(let t=e.length;t<n.blueprint.length;t++)e.push(n.blueprint[t])}function cg(n,e,t){Mu(e);try{let i=n.viewQuery;i!==null&&Mm(1,i,t);let r=n.template;r!==null&&Kx(n,e,r,1,t),n.firstCreatePass&&(n.firstCreatePass=!1),e[zi]?.finishViewCreation(n),n.staticContentQueries&&Px(n,e),n.staticViewQueries&&Mm(2,n.viewQuery,t);let o=n.components;o!==null&&iD(e,o)}catch(i){throw n.firstCreatePass&&(n.incompleteFirstPass=!0,n.firstCreatePass=!1),i}finally{e[He]&=-5,wu()}}function iD(n,e){for(let t=0;t<e.length;t++)tD(n,e[t])}function od(n,e,t,i){let r=Fe(null);try{let o=e.tView,a=n[He]&4096?4096:16,c=og(n,o,t,a,null,e,null,null,i?.injector??null,i?.embeddedViewInjector??null,i?.dehydratedView??null),l=n[e.index];c[Or]=l;let u=n[zi];return u!==null&&(c[zi]=u.createEmbeddedView(o)),cg(o,c,t),c}finally{Fe(r)}}function tc(n,e){return!e||e.firstChild===null||Ex(n)}function nc(n,e,t,i,r=!1){if(n.type===3){let o=n.firstChild,s=o.next,a=hn(e[o.index]),c=hn(e[s.index]),l=a;for(;l!==null&&(i.push(l),l!==c);)l=l.nextSibling;return i}for(;t!==null;){if(t.type===128){t=r?t.projectionNext:t.next;continue}let o=e[t.index];if(o!==null)if(ci(o)){let a=o[To];a!==o[vi]&&i.push(hn(o)),o[He]&4||nS(o,i),i.push(a)}else i.push(hn(o));let s=t.type;if(s&8)nc(n,e,t.child,i);else if(s&32){let a=Jm(t,e),c;for(;c=a();)i.push(c)}else if(s&16){let a=qx(e,t);if(Array.isArray(a))i.push(...a);else{let c=hr(e[Gn]);nc(c[Pe],c,a,i,!0)}}t=r?t.projectionNext:t.next}return i}function nS(n,e){for(let t=Rt;t<n.length;t++){let i=n[t],r=i[Pe].firstChild;r!==null&&nc(i[Pe],i,r,e)}}function iS(n){if(n[mu]!==null){for(let e of n[mu])e.impl.addSequence(e);n[mu].length=0}}var rS=[];function rD(n){return n[jn]??oD(n)}function oD(n){let e=rS.pop()??Object.create(aD);return e.lView=n,e}function sD(n){n.lView[jn]!==n&&(n.lView=null,rS.push(n))}var aD=xt(_e({},rs),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:n=>{$a(n.lView)},consumerOnSignalRead(){this.lView[jn]=this}});function cD(n){let e=n[jn]??Object.create(lD);return e.lView=n,e}var lD=xt(_e({},rs),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:n=>{let e=hr(n.lView);for(;e&&!oS(e[Pe]);)e=hr(e);e&&Wp(e)},consumerOnSignalRead(){this.lView[jn]=this}});function oS(n){return n.type!==2}function sS(n){if(n[Ga]===null)return;let e=!0;for(;e;){let t=!1;for(let i of n[Ga])i.dirty&&(t=!0,i.zone===null||Zone.current===i.zone?i.run():i.zone.run(()=>i.run()));e=t&&!!(n[He]&8192)}}var uD=100;function aS(n,e=0){let i=n[yi].rendererFactory,r=!1;r||i.begin?.();try{dD(n,e)}finally{r||i.end?.()}}function dD(n,e){let t=Qp();try{em(!0),Dm(n,e);let i=0;for(;Wa(n);){if(i===uD)throw new Re(103,!1);i++,Dm(n,1)}}finally{em(t)}}function fD(n,e,t,i){if(Io(e))return;let r=e[He],o=!1,s=!1;Mu(e);let a=!0,c=null,l=null;o||(oS(n)?(l=rD(e),c=ss(l)):Cl()===null?(a=!1,l=cD(e),c=ss(l)):e[jn]&&(Ca(e[jn]),e[jn]=null));try{jp(e),m0(n.bindingStartIndex),t!==null&&Kx(n,e,t,2,i);let u=(r&3)===3;if(!o)if(u){let h=n.preOrderCheckHooks;h!==null&&Ru(e,h,null)}else{let h=n.preOrderHooks;h!==null&&Nu(e,h,0,null),hm(e,0)}if(s||hD(e),sS(e),cS(e,0),n.contentQueries!==null&&Px(n,e),!o)if(u){let h=n.contentCheckHooks;h!==null&&Ru(e,h)}else{let h=n.contentHooks;h!==null&&Nu(e,h,1),hm(e,1)}mD(n,e);let f=n.components;f!==null&&uS(e,f,0);let d=n.viewQuery;if(d!==null&&Mm(2,d,i),!o)if(u){let h=n.viewCheckHooks;h!==null&&Ru(e,h)}else{let h=n.viewHooks;h!==null&&Nu(e,h,2),hm(e,2)}if(n.firstUpdatePass===!0&&(n.firstUpdatePass=!1),e[pu]){for(let h of e[pu])h();e[pu]=null}o||(iS(e),e[He]&=-73)}catch(u){throw o||$a(e),u}finally{l!==null&&(wa(l,c),a&&sD(l)),wu()}}function cS(n,e){for(let t=Mx(n);t!==null;t=wx(t))for(let i=Rt;i<t.length;i++){let r=t[i];lS(r,e)}}function hD(n){for(let e=Mx(n);e!==null;e=wx(e)){if(!(e[He]&2))continue;let t=e[Do];for(let i=0;i<t.length;i++){let r=t[i];Wp(r)}}}function pD(n,e,t){bt(ht.ComponentStart);let i=$i(e,n);try{lS(i,t)}finally{bt(ht.ComponentEnd,i[zt])}}function lS(n,e){_u(n)&&Dm(n,e)}function Dm(n,e){let i=n[Pe],r=n[He],o=n[jn],s=!!(e===0&&r&16);if(s||=!!(r&64&&e===0),s||=!!(r&1024),s||=!!(o?.dirty&&Dl(o)),s||=!1,o&&(o.dirty=!1),n[He]&=-9217,s)fD(i,n,i.template,n[zt]);else if(r&8192){let a=Fe(null);try{sS(n),cS(n,1);let c=i.components;c!==null&&uS(n,c,1),iS(n)}finally{Fe(a)}}}function uS(n,e,t){for(let i=0;i<e.length;i++)pD(n,e[i],t)}function mD(n,e){let t=n.hostBindingOpCodes;if(t!==null)try{for(let i=0;i<t.length;i++){let r=t[i];if(r<0)Ur(~r);else{let o=r,s=t[++i],a=t[++i];v0(s,o);let c=e[o];bt(ht.HostBindingsUpdateStart,c);try{a(2,c)}finally{bt(ht.HostBindingsUpdateEnd,c)}}}}finally{Ur(-1)}}function lg(n,e){let t=Qp()?64:1088;for(n[yi].changeDetectionScheduler?.notify(e);n;){n[He]|=t;let i=hr(n);if(ws(n)&&!i)return n;n=i}return null}function dS(n,e,t,i){return[n,!0,0,e,null,i,null,t,null,null]}function fS(n,e){let t=Rt+e;if(t<n.length)return n[t]}function sd(n,e,t,i=!0){let r=e[Pe];if(gD(r,e,n,t),i){let s=Cm(t,n),a=e[Xt],c=a.parentNode(n[To]);c!==null&&AT(r,n[zn],a,e,c,s)}let o=e[Es];o!==null&&o.firstChild!==null&&(o.firstChild=null)}function hS(n,e){let t=ic(n,e);return t!==void 0&&nd(t[Pe],t),t}function ic(n,e){if(n.length<=Rt)return;let t=Rt+e,i=n[t];if(i){let r=i[Or];r!==null&&r!==n&&tg(r,i),e>0&&(n[t-1][ai]=i[ai]);let o=Ba(n,Rt+e);DT(i[Pe],i);let s=o[zi];s!==null&&s.detachView(o[Pe]),i[Qt]=null,i[ai]=null,i[He]&=-129}return i}function gD(n,e,t,i){let r=Rt+i,o=t.length;i>0&&(t[r-1][ai]=e),i<o-Rt?(e[ai]=t[r],Op(t,Rt+i,e)):(t.push(e),e[ai]=null),e[Qt]=t;let s=e[Or];s!==null&&t!==s&&pS(s,e);let a=e[zi];a!==null&&a.insertView(n),xu(e),e[He]|=128}function pS(n,e){let t=n[Do],i=e[Qt];if(Fr(i))n[He]|=2;else{let r=i[Qt][Gn];e[Gn]!==r&&(n[He]|=2)}t===null?n[Do]=[e]:t.push(e)}var zr=class{_lView;_cdRefInjectingView;_appRef=null;_attachedToViewContainer=!1;exhaustive;get rootNodes(){let e=this._lView,t=e[Pe];return nc(t,e,t.firstChild,[])}constructor(e,t){this._lView=e,this._cdRefInjectingView=t}get context(){return this._lView[zt]}set context(e){this._lView[zt]=e}get destroyed(){return Io(this._lView)}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){let e=this._lView[Qt];if(ci(e)){let t=e[ja],i=t?t.indexOf(this):-1;i>-1&&(ic(e,i),Ba(t,i))}this._attachedToViewContainer=!1}nd(this._lView[Pe],this._lView)}onDestroy(e){Su(this._lView,e)}markForCheck(){lg(this._cdRefInjectingView||this._lView,4)}detach(){this._lView[He]&=-129}reattach(){xu(this._lView),this._lView[He]|=128}detectChanges(){this._lView[He]|=1024,aS(this._lView)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new Re(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null;let e=ws(this._lView),t=this._lView[Or];t!==null&&!e&&tg(t,this._lView),$x(this._lView[Pe],this._lView)}attachToAppRef(e){if(this._attachedToViewContainer)throw new Re(902,!1);this._appRef=e;let t=ws(this._lView),i=this._lView[Or];i!==null&&!t&&pS(i,this._lView),xu(this._lView)}};var Is=(()=>{class n{_declarationLView;_declarationTContainer;elementRef;static __NG_ELEMENT_ID__=vD;constructor(t,i,r){this._declarationLView=t,this._declarationTContainer=i,this.elementRef=r}get ssrId(){return this._declarationTContainer.tView?.ssrId||null}createEmbeddedView(t,i){return this.createEmbeddedViewImpl(t,i)}createEmbeddedViewImpl(t,i,r){let o=od(this._declarationLView,this._declarationTContainer,t,{embeddedViewInjector:i,dehydratedView:r});return new zr(o)}}return n})();function vD(){return ug(_i(),ct())}function ug(n,e){return n.type&4?new Is(e,n,Ps(n,e)):null}function ad(n,e,t,i,r){let o=n.data[e];if(o===null)o=yD(n,e,t,i,r),g0()&&(o.flags|=32);else if(o.type&64){o.type=t,o.value=i,o.attrs=r;let s=h0();o.injectorIndex=s===null?-1:s.injectorIndex}return Cs(o,!0),o}function yD(n,e,t,i,r){let o=Kp(),s=Jp(),a=s?o:o&&o.parent,c=n.data[e]=xD(n,a,t,e,i,r);return _D(n,c,o,s),c}function _D(n,e,t,i){n.firstChild===null&&(n.firstChild=e),t!==null&&(i?t.child==null&&e.parent!==null&&(t.child=e):t.next===null&&(t.next=e,e.prev=t))}function xD(n,e,t,i,r,o){let s=e?e.injectorIndex:-1,a=0;return f0()&&(a|=128),{type:t,index:i,insertBeforeIndex:null,injectorIndex:s,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,controlDirectiveIndex:-1,customControlIndex:-1,propertyBindings:null,flags:a,providerIndexes:0,value:r,namespace:om(),attrs:o,mergedAttrs:null,localNames:null,initialInputs:null,inputs:null,hostDirectiveInputs:null,outputs:null,hostDirectiveOutputs:null,directiveToIndex:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:e,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}function SD(n){let e=n[Hp]??[],i=n[Qt][Xt],r=[];for(let o of e)o.data[Ax]!==void 0?r.push(o):ED(o,i);n[Hp]=r}function ED(n,e){let t=0,i=n.firstChild;if(i){let r=n.data[Dx];for(;t<r;){let o=i.nextSibling;Vx(e,i,!1),i=o,t++}}}var bD=()=>null,MD=()=>null;function Am(n,e){return bD(n,e)}function mS(n,e,t){return MD(n,e,t)}var gS=class{},No=class{};var vS=(()=>{class n{static \u0275prov=gt({token:n,providedIn:"root",factory:()=>null})}return n})();function yS(n){return n.debugInfo?.className||n.type.name||null}var Lu={},Hu=class{injector;parentInjector;constructor(e,t){this.injector=e,this.parentInjector=t}get(e,t,i){let r=this.injector.get(e,Lu,i);return r!==Lu||t===Lu?r:this.parentInjector.get(e,t,i)}};function Fs(n,e,t){if(t===bi)return!1;let i=n[e];return Object.is(i,t)?!1:(n[e]=t,!0)}function wD(n,e,t){return function i(r){let o=i.__ngNativeEl__;o!==void 0&&ZC(r,o);let s=kr(n)?$i(n.index,e):e;lg(s,5);let a=e[zt],c=q0(e,a,t,r),l=i.__ngNextListenerFn__;for(;l;)c=q0(e,a,l,r)&&c,l=l.__ngNextListenerFn__;return c}}function q0(n,e,t,i){let r=Fe(null);try{return bt(ht.OutputStart,e,t),t(i)!==!1}catch(o){return eD(n,o),!1}finally{bt(ht.OutputEnd,e,t),Fe(r)}}function CD(n,e,t,i,r,o,s,a){let c=gu(n),l=!1,u=null;if(!i&&c&&(u=DD(e,t,o,n.index)),u!==null){let f=u.__ngLastListenerFn__||u;f.__ngNextListenerFn__=s,u.__ngLastListenerFn__=s,l=!0}else{let f=Wi(n,t),d=i?i(f):f;JC(t,d,o,a),i||(a.__ngNativeEl__=f);let h=r.listen(d,o,a);if(!TD(o)){let p=i?x=>i(hn(x[n.index])):n.index;AD(p,e,t,o,a,h,!1)}}return l}function TD(n){return n.startsWith("animation")||n.startsWith("transition")}function DD(n,e,t,i){let r=n.cleanup;if(r!=null)for(let o=0;o<r.length-1;o+=2){let s=r[o];if(s===t&&r[o+1]===i){let a=e[bs],c=r[o+2];return a&&a.length>c?a[c]:null}typeof s=="string"&&(o+=2)}return null}function AD(n,e,t,i,r,o,s){let a=e.firstCreatePass?qp(e):null,c=$p(t),l=c.length;c.push(r,o),a&&a.push(i,n,l,(l+1)*(s?-1:1))}var Im=Symbol("BINDING");var Oo=new Ne("");function zu(n,e,t){let i=t?n.styles:null,r=t?n.classes:null,o=0;if(e!==null)for(let s=0;s<e.length;s++){let a=e[s];if(typeof a=="number")o=a;else if(o==1)r=su(r,a);else if(o==2){let c=a,l=e[++s];i=su(i,c+": "+l+";")}}t?n.styles=i:n.stylesWithoutHost=i,t?n.classes=r:n.classesWithoutHost=r}function dg(n,e=0){let t=ct();if(t===null)return Xe(n,e);let i=_i();return _x(i,t,Hn(n),e)}function ID(n,e,t,i,r){let o=i===null?null:{"":-1},s=r(n,t);if(s!==null){let a=s,c=null,l=null;for(let u of s)if(u.resolveHostDirectives!==null){[a,c,l]=u.resolveHostDirectives(s);break}PD(n,e,t,a,o,c,l)}o!==null&&i!==null&&RD(t,i,o)}function RD(n,e,t){let i=n.localNames=[];for(let r=0;r<e.length;r+=2){let o=t[e[r+1]];if(o==null)throw new Re(-301,!1);i.push(e[r],o)}}function ND(n,e,t){e.componentOffset=t,(n.components??=[]).push(e.index)}function PD(n,e,t,i,r,o,s){let a=i.length,c=null;for(let d=0;d<a;d++){let h=i[d];c===null&&Ao(h)&&(c=h,ND(n,t,d)),BC(mx(t,e),n,h.type)}BD(t,n.data.length,a),c?.viewProvidersResolver&&c.viewProvidersResolver(c);for(let d=0;d<a;d++){let h=i[d];h.providersResolver&&h.providersResolver(h)}let l=!1,u=!1,f=Yx(n,e,a,null);a>0&&(t.directiveToIndex=new Map);for(let d=0;d<a;d++){let h=i[d];if(t.mergedAttrs=Qu(t.mergedAttrs,h.hostAttrs),OD(n,t,e,f,h),UD(f,h,r),s!==null&&s.has(h)){let[x,g]=s.get(h);t.directiveToIndex.set(h.type,[f,x+t.directiveStart,g+t.directiveStart])}else(o===null||!o.has(h))&&t.directiveToIndex.set(h.type,f);h.contentQueries!==null&&(t.flags|=4),(h.hostBindings!==null||h.hostAttrs!==null||h.hostVars!==0)&&(t.flags|=64);let p=h.type.prototype;!l&&(p.ngOnChanges||p.ngOnInit||p.ngDoCheck)&&((n.preOrderHooks??=[]).push(t.index),l=!0),!u&&(p.ngOnChanges||p.ngDoCheck)&&((n.preOrderCheckHooks??=[]).push(t.index),u=!0),f++}LD(n,t,o)}function LD(n,e,t){for(let i=e.directiveStart;i<e.directiveEnd;i++){let r=n.data[i];if(t===null||!t.has(r))X0(0,e,r,i),X0(1,e,r,i),Z0(e,i,!1);else{let o=t.get(r);Y0(0,e,o,i),Y0(1,e,o,i),Z0(e,i,!0)}}}function X0(n,e,t,i){let r=n===0?t.inputs:t.outputs;for(let o in r)if(r.hasOwnProperty(o)){let s;n===0?s=e.inputs??={}:s=e.outputs??={},s[o]??=[],s[o].push(i),_S(e,o)}}function Y0(n,e,t,i){let r=n===0?t.inputs:t.outputs;for(let o in r)if(r.hasOwnProperty(o)){let s=r[o],a;n===0?a=e.hostDirectiveInputs??={}:a=e.hostDirectiveOutputs??={},a[s]??=[],a[s].push(i,o),_S(e,s)}}function _S(n,e){e==="class"?n.flags|=8:e==="style"&&(n.flags|=16)}function Z0(n,e,t){let{attrs:i,inputs:r,hostDirectiveInputs:o}=n;if(i===null||!t&&r===null||t&&o===null||Km(n)){n.initialInputs??=[],n.initialInputs.push(null);return}let s=null,a=0;for(;a<i.length;){let c=i[a];if(c===0){a+=4;continue}else if(c===5){a+=2;continue}else if(typeof c=="number")break;if(!t&&r.hasOwnProperty(c)){let l=r[c];for(let u of l)if(u===e){s??=[],s.push(c,i[a+1]);break}}else if(t&&o.hasOwnProperty(c)){let l=o[c];for(let u=0;u<l.length;u+=2)if(l[u]===e){s??=[],s.push(l[u+1],i[a+1]);break}}a+=2}n.initialInputs??=[],n.initialInputs.push(s)}function OD(n,e,t,i,r){n.data[i]=r;let o=r.factory||(r.factory=vs(r.type,!0)),s=new ec(o,Ao(r),dg,null);n.blueprint[i]=s,t[i]=s,FD(n,e,i,Yx(n,t,r.hostVars,bi),r)}function FD(n,e,t,i,r){let o=r.hostBindings;if(o){let s=n.hostBindingOpCodes;s===null&&(s=n.hostBindingOpCodes=[]);let a=~e.index;kD(s)!=a&&s.push(a),s.push(t,i,o)}}function kD(n){let e=n.length;for(;e>0;){let t=n[--e];if(typeof t=="number"&&t<0)return t}return 0}function UD(n,e,t){if(t){if(e.exportAs)for(let i=0;i<e.exportAs.length;i++)t[e.exportAs[i]]=n;Ao(e)&&(t[""]=n)}}function BD(n,e,t){n.flags|=1,n.directiveStart=e,n.directiveEnd=e+t,n.providerIndexes=e}function xS(n,e,t,i,r,o,s,a){let c=e[Pe],l=c.consts,u=qi(l,s),f=ad(c,n,t,i,u);return o&&ID(c,e,f,qi(l,a),r),f.mergedAttrs=Qu(f.mergedAttrs,f.attrs),f.attrs!==null&&zu(f,f.attrs,!1),f.mergedAttrs!==null&&zu(f,f.mergedAttrs,!0),c.queries!==null&&c.queries.elementStart(c,f),f}function SS(n,e){DC(n,e),zp(e)&&n.queries.elementEnd(e)}function VD(n,e,t,i,r,o){let s=e.consts,a=qi(s,r),c=ad(e,n,t,i,a);if(c.mergedAttrs=Qu(c.mergedAttrs,c.attrs),o!=null){let l=qi(s,o);c.localNames=[];for(let u=0;u<l.length;u+=2)c.localNames.push(l[u],-1)}return c.attrs!==null&&zu(c,c.attrs,!1),c.mergedAttrs!==null&&zu(c,c.mergedAttrs,!0),e.queries!==null&&e.queries.elementStart(e,c),c}var ES=typeof ShadowRoot<"u",HD=typeof Document<"u";function zD(n){return Object.keys(n).map(e=>{let[t,i,r]=n[e],o={propName:t,templateName:e,isSignal:(i&rd.SignalBased)!==0};return r&&(o.transform=r),o})}function GD(n){return Object.keys(n).map(e=>({propName:n[e],templateName:e}))}function jD(n,e,t){let i=e instanceof Jt?e:e?.injector;return i&&n.getStandaloneInjector!==null&&(i=n.getStandaloneInjector(i)||i),i?new Hu(t,i):t}function WD(n){let e=n.get(No,null);if(e===null)throw new Re(407,!1);let t=n.get(vS,null),i=n.get(_s,null),r=n.get(Os,null,{optional:!0});return{rendererFactory:e,sanitizer:t,changeDetectionScheduler:i,ngReflect:!1,tracingService:r}}function $D(n,e){let t=bS(n);return Ux(e,t,t==="svg"?n0:t==="math"?i0:null)}function qD(n){if(n?.toLowerCase()==="script")throw new Re(905,!1)}function bS(n){return(n.selectors[0][0]||"div").toLowerCase()}var rc=class{componentDef;ngModule;selector;componentType;ngContentSelectors;isBoundToModule;cachedInputs=null;cachedOutputs=null;get inputs(){return this.cachedInputs??=zD(this.componentDef.inputs),this.cachedInputs}get outputs(){return this.cachedOutputs??=GD(this.componentDef.outputs),this.cachedOutputs}constructor(e,t){this.componentDef=e,this.ngModule=t,this.componentType=e.type,this.selector=gT(e.selectors),this.ngContentSelectors=e.ngContentSelectors??[],this.isBoundToModule=!!t}create(e,t,i,r,o,s){bt(ht.DynamicComponentStart);let a=Fe(null);try{let c=this.componentDef,l=jD(c,r||this.ngModule,e),u=WD(l),f=u.tracingService;return f&&f.componentCreate?f.componentCreate(yS(c),()=>this.createComponentRef(u,l,t,i,o,s)):this.createComponentRef(u,l,t,i,o,s)}finally{Fe(a)}}createComponentRef(e,t,i,r,o,s){let a=this.componentDef,c=XD(r,a,s,o),l=e.rendererFactory.createRenderer(null,a),u=r?WT(l,r,a.encapsulation,t):$D(a,l);qD(u?.tagName);let f=t.get(Oo,null),d=YD(u,()=>t.get(Yt,null)??Tx());f&&f.addHost(d);let h=s?.some(K0)||o?.some(g=>typeof g!="function"&&g.bindings.some(K0)),p=og(null,c,null,512|Xx(a),null,null,e,l,t,null,Nx(u,t,!0));f&&ES&&d instanceof ShadowRoot&&Su(p,()=>{f.removeHost(d)}),p[fn]=u,Mu(p);let x=null;try{let g=xS(fn,p,2,"#host",()=>c.directiveRegistry,!0,0);Hx(l,u,g),As(u,p),Jx(c,p,g),Lx(c,g,p),SS(c,g),i!==void 0&&KD(g,this.ngContentSelectors,i),x=$i(g.index,p),p[zt]=x[zt],cg(c,p,null)}catch(g){throw x!==null&&Em(x),Em(p),g}finally{bt(ht.DynamicComponentEnd),wu()}return new Gu(this.componentType,p,!!h)}};function XD(n,e,t,i){let r=n?["ng-version","22.1.0"]:vT(e.selectors[0]),o=null,s=null,a=0;if(t)for(let u of t)a+=u[Im].requiredVars,u.create&&(u.targetIdx=0,(o??=[]).push(u)),u.update&&(u.targetIdx=0,(s??=[]).push(u));if(i)for(let u=0;u<i.length;u++){let f=i[u];if(typeof f!="function")for(let d of f.bindings){a+=d[Im].requiredVars;let h=u+1;d.create&&(d.targetIdx=h,(o??=[]).push(d)),d.update&&(d.targetIdx=h,(s??=[]).push(d))}}let c=[e];if(i)for(let u of i){let f=typeof u=="function"?u:u.type,d=Rp(f);c.push(d)}return rg(0,null,ZD(o,s),1,a,c,null,null,null,[r],null)}function YD(n,e){let t=n.getRootNode?.();return HD&&t instanceof Document?t.head:t&&ES&&t instanceof ShadowRoot?t:e().head}function ZD(n,e){return!n&&!e?null:t=>{if(t&1&&n)for(let i of n)i.create();if(t&2&&e)for(let i of e)i.update()}}function K0(n){let e=n[Im].kind;return e==="input"||e==="twoWay"}var Gu=class extends gS{_rootLView;_hasInputBindings;instance;hostView;changeDetectorRef;componentType;location;previousInputValues=null;_tNode;constructor(e,t,i){super(),this._rootLView=t,this._hasInputBindings=i,this._tNode=yu(t[Pe],fn),this.location=Ps(this._tNode,t),this.instance=$i(this._tNode.index,t)[zt],this.hostView=this.changeDetectorRef=new zr(t,void 0),this.componentType=e}setInput(e,t){this._hasInputBindings;let i=this._tNode;if(this.previousInputValues??=new Map,this.previousInputValues.has(e)&&Object.is(this.previousInputValues.get(e),t))return;let r=this._rootLView,o=tS(i,r[Pe],r,e,t);this.previousInputValues.set(e,t);let s=$i(i.index,r);lg(s,1)}get injector(){return new Vr(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(e){this.hostView.onDestroy(e)}};function KD(n,e,t){let i=n.projection=[];for(let r=0;r<e.length;r++){let o=t[r];i.push(o!=null&&o.length?Array.from(o):null)}}var Fo=(()=>{class n{static __NG_ELEMENT_ID__=JD}return n})();function JD(){let n=_i();return MS(n,ct())}var Rm=class n extends Fo{_lContainer;_hostTNode;_hostLView;constructor(e,t,i){super(),this._lContainer=e,this._hostTNode=t,this._hostLView=i}get element(){return Ps(this._hostTNode,this._hostLView)}get injector(){return new Vr(this._hostTNode,this._hostLView)}get parentInjector(){let e=qm(this._hostTNode,this._hostLView);if(fx(e)){let t=ku(e,this._hostLView),i=Fu(e),r=t[Pe].data[i+8];return new Vr(r,t)}else return new Vr(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(e){let t=J0(this._lContainer);return t!==null&&t[e]||null}get length(){return this._lContainer.length-Rt}createEmbeddedView(e,t,i){let r,o;typeof i=="number"?r=i:i!=null&&(r=i.index,o=i.injector);let s=Am(this._lContainer,e.ssrId),a=e.createEmbeddedViewImpl(t||{},o,s);return this.insertImpl(a,r,tc(this._hostTNode,s)),a}createComponent(e,t,i,r,o,s,a){let c,l=t||{};c=l.index,i=l.injector,r=l.projectableNodes,o=l.environmentInjector||l.ngModuleRef,s=l.directives,a=l.bindings;let u=new rc(bo(e)),f=i||this.parentInjector;if(!o&&u.ngModule==null){let m=this.parentInjector.get(Jt,null);m&&(o=m)}let d=bo(u.componentType??{}),h=Am(this._lContainer,d?.id??null),p=h?.firstChild??null,x=u.create(f,r,p,o,s,a);return this.insertImpl(x.hostView,c,tc(this._hostTNode,h)),x}insert(e,t){return this.insertImpl(e,t,!0)}insertImpl(e,t,i){let r=e._lView;if(o0(r)){let a=this.indexOf(e);if(a!==-1)this.detach(a);else{let c=r[Qt],l=new n(c,c[zn],c[Qt]);l.detach(l.indexOf(e))}}let o=this._adjustIndex(t),s=this._lContainer;return sd(s,r,o,i),e.attachToViewContainerRef(),Op(gm(s),o,e),e}move(e,t){return this.insert(e,t)}indexOf(e){let t=J0(this._lContainer);return t!==null?t.indexOf(e):-1}remove(e){let t=this._adjustIndex(e,-1),i=ic(this._lContainer,t);i&&(Ba(gm(this._lContainer),t),nd(i[Pe],i))}detach(e){let t=this._adjustIndex(e,-1),i=ic(this._lContainer,t);return i&&Ba(gm(this._lContainer),t)!=null?new zr(i):null}_adjustIndex(e,t=0){return e??this.length+t}};function J0(n){return n[ja]}function gm(n){return n[ja]||(n[ja]=[])}function MS(n,e){let t,i=e[n.index];return ci(i)?t=i:(t=dS(i,e,null,n),e[n.index]=t,sg(e,t)),eA(t,e,n,i),new Rm(t,n,e)}function QD(n,e){let t=n[Xt],i=t.createComment(""),r=Wi(e,n),o=t.parentNode(r);return Ro(t,o,i,t.nextSibling(r),!1),i}var eA=iA,tA=()=>!1;function nA(n,e,t){return tA(n,e,t)}function iA(n,e,t,i){if(n[To])return;let r;t.type&8?r=hn(i):r=QD(e,t),n[To]=r}var Nm=class n{queryList;matches=null;constructor(e){this.queryList=e}clone(){return new n(this.queryList)}setDirty(){this.queryList.setDirty()}},Pm=class n{queries;constructor(e=[]){this.queries=e}createEmbeddedView(e){let t=e.queries;if(t!==null){let i=e.contentQueries!==null?e.contentQueries[0]:t.length,r=[];for(let o=0;o<i;o++){let s=t.getByIndex(o),a=this.queries[s.indexInDeclarationView];r.push(a.clone())}return new n(r)}return null}insertView(e){this.dirtyQueriesWithMatches(e)}detachView(e){this.dirtyQueriesWithMatches(e)}finishViewCreation(e){this.dirtyQueriesWithMatches(e)}dirtyQueriesWithMatches(e){for(let t=0;t<this.queries.length;t++)fg(e,t).matches!==null&&this.queries[t].setDirty()}},Lm=class{flags;read;predicate;constructor(e,t,i=null){this.flags=t,this.read=i,typeof e=="string"?this.predicate=dA(e):this.predicate=e}},Om=class n{queries;constructor(e=[]){this.queries=e}elementStart(e,t){for(let i=0;i<this.queries.length;i++)this.queries[i].elementStart(e,t)}elementEnd(e){for(let t=0;t<this.queries.length;t++)this.queries[t].elementEnd(e)}embeddedTView(e){let t=null;for(let i=0;i<this.length;i++){let r=t!==null?t.length:0,o=this.getByIndex(i).embeddedTView(e,r);o&&(o.indexInDeclarationView=i,t!==null?t.push(o):t=[o])}return t!==null?new n(t):null}template(e,t){for(let i=0;i<this.queries.length;i++)this.queries[i].template(e,t)}getByIndex(e){return this.queries[e]}get length(){return this.queries.length}track(e){this.queries.push(e)}},Fm=class n{metadata;matches=null;indexInDeclarationView=-1;crossesNgTemplate=!1;_declarationNodeIndex;_appliesToNextNode=!0;constructor(e,t=-1){this.metadata=e,this._declarationNodeIndex=t}elementStart(e,t){this.isApplyingToNode(t)&&this.matchTNode(e,t)}elementEnd(e){this._declarationNodeIndex===e.index&&(this._appliesToNextNode=!1)}template(e,t){this.elementStart(e,t)}embeddedTView(e,t){return this.isApplyingToNode(e)?(this.crossesNgTemplate=!0,this.addMatch(-e.index,t),new n(this.metadata)):null}isApplyingToNode(e){if(this._appliesToNextNode&&(this.metadata.flags&1)!==1){let t=this._declarationNodeIndex,i=e.parent;for(;i!==null&&i.type&8&&i.index!==t;)i=i.parent;return t===(i!==null?i.index:-1)}return this._appliesToNextNode}matchTNode(e,t){let i=this.metadata.predicate;if(Array.isArray(i))for(let r=0;r<i.length;r++){let o=i[r];this.matchTNodeWithReadOption(e,t,rA(t,o)),this.matchTNodeWithReadOption(e,t,Pu(t,e,o,!1,!1))}else i===Is?t.type&4&&this.matchTNodeWithReadOption(e,t,-1):this.matchTNodeWithReadOption(e,t,Pu(t,e,i,!1,!1))}matchTNodeWithReadOption(e,t,i){if(i!==null){let r=this.metadata.read;if(r!==null)if(r===Ls||r===Fo||r===Is&&t.type&4)this.addMatch(t.index,-2);else{let o=Pu(t,e,r,!1,!1);o!==null&&this.addMatch(t.index,o)}else this.addMatch(t.index,i)}}addMatch(e,t){this.matches===null?this.matches=[e,t]:this.matches.push(e,t)}};function rA(n,e){let t=n.localNames;if(t!==null){for(let i=0;i<t.length;i+=2)if(t[i]===e)return t[i+1]}return null}function oA(n,e){return n.type&11?Ps(n,e):n.type&4?ug(n,e):null}function sA(n,e,t,i){return t===-1?oA(e,n):t===-2?aA(n,e,i):Uu(n,n[Pe],t,e)}function aA(n,e,t){if(t===Ls)return Ps(e,n);if(t===Is)return ug(e,n);if(t===Fo)return MS(e,n)}function wS(n,e,t,i){let r=e[zi].queries[i];if(r.matches===null){let o=n.data,s=t.matches,a=[];for(let c=0;s!==null&&c<s.length;c+=2){let l=s[c];if(l<0)a.push(null);else{let u=o[l];a.push(sA(e,u,s[c+1],t.metadata.read))}}r.matches=a}return r.matches}function km(n,e,t,i){let r=n.queries.getByIndex(t),o=r.matches;if(o!==null){let s=wS(n,e,r,t);for(let a=0;a<o.length;a+=2){let c=o[a];if(c>0)i.push(s[a/2]);else{let l=o[a+1],u=e[-c];for(let f=Rt;f<u.length;f++){let d=u[f];d[Or]===d[Qt]&&km(d[Pe],d,l,i)}if(u[Do]!==null){let f=u[Do];for(let d=0;d<f.length;d++){let h=f[d];km(h[Pe],h,l,i)}}}}}return i}function cA(n,e){return n[zi].queries[e].queryList}function lA(n,e,t){let i=new Bu((t&4)===4);return c0(n,e,i,i.destroy),(e[zi]??=new Pm).queries.push(new Nm(i))-1}function uA(n,e,t){let i=Wn();return i.firstCreatePass&&(fA(i,new Lm(n,e,t),-1),(e&2)===2&&(i.staticViewQueries=!0)),lA(i,ct(),e)}function dA(n){return n.split(",").map(e=>e.trim())}function fA(n,e,t){n.queries===null&&(n.queries=new Om),n.queries.track(new Fm(e,t))}function fg(n,e){return n.queries.getByIndex(e)}function hA(n,e){let t=n[Pe],i=fg(t,e);return i.crossesNgTemplate?km(t,n,e,[]):wS(t,n,i,e)}function ac(n){return!!n&&typeof n.then=="function"}function CS(n){return!!n&&typeof n.subscribe=="function"}var Rs=class{},cd=class{};var ju=class extends Rs{ngModuleType;_parent;_bootstrapComponents=[];_r3Injector;instance;destroyCbs=[];constructor(e,t,i,r=!0){super(),this.ngModuleType=e,this._parent=t;let o=H_(e);this._bootstrapComponents=sT(o.bootstrap),this._r3Injector=sm(e,t,[{provide:Rs,useValue:this},...i],Fa(e),new Set(["environment"])),r&&this.resolveInjectorInitializers()}resolveInjectorInitializers(){this._r3Injector.resolveInjectorInitializers(),this.instance=this._r3Injector.get(this.ngModuleType)}get injector(){return this._r3Injector}destroy(){let e=this._r3Injector;!e.destroyed&&e.destroy(),this.destroyCbs.forEach(t=>t()),this.destroyCbs=null}onDestroy(e){this.destroyCbs.push(e)}},Wu=class extends cd{moduleType;constructor(e){super(),this.moduleType=e}create(e){return new ju(this.moduleType,e,[])}};var oc=class extends Rs{injector;instance=null;constructor(e){super();let t=new So([...e.providers,{provide:Rs,useValue:this}],e.parent||za(),e.debugName,new Set(["environment"]));this.injector=t,e.runEnvironmentInitializers&&t.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(e){this.injector.onDestroy(e)}};function cc(n,e,t=null){return new oc({providers:n,parent:e,debugName:t,runEnvironmentInitializers:!0}).injector}var pA=(()=>{class n{_injector;cachedInjectors=new Map;constructor(t){this._injector=t}getOrCreateStandaloneInjector(t){if(!t.standalone)return null;if(!this.cachedInjectors.has(t)){let i=kp(!1,t.type),r=i.length>0?cc([i],this._injector,""):null;this.cachedInjectors.set(t,r)}return this.cachedInjectors.get(t)}ngOnDestroy(){try{for(let t of this.cachedInjectors.values())t!==null&&t.destroy()}finally{this.cachedInjectors.clear()}}static \u0275prov=gt({token:n,providedIn:"environment",factory:()=>new n(Xe(Jt))})}return n})();function lc(n){return Ku(()=>{let e=TS(n),t=xt(_e({},e),{decls:n.decls,vars:n.vars,template:n.template,consts:n.consts||null,ngContentSelectors:n.ngContentSelectors,onPush:n.changeDetection!==Xm.Eager,directiveDefs:null,pipeDefs:null,dependencies:e.standalone&&n.dependencies||null,getStandaloneInjector:e.standalone?r=>r.get(pA).getOrCreateStandaloneInjector(t):null,getExternalStyles:null,signals:n.signals??!1,data:n.data||{},encapsulation:n.encapsulation||Ei.Emulated,styles:n.styles||Ln,_:null,schemas:n.schemas||null,tView:null,id:""});e.standalone&&Lo("NgStandalone"),DS(t);let i=n.dependencies;return t.directiveDefs=Q0(i,mA),t.pipeDefs=Q0(i,z_),t.id=yA(t),t})}function mA(n){return bo(n)||Rp(n)}function ld(n){return Ku(()=>({type:n.type,bootstrap:n.bootstrap||Ln,declarations:n.declarations||Ln,imports:n.imports||Ln,exports:n.exports||Ln,transitiveCompileScopes:null,schemas:n.schemas||null,id:n.id||null}))}function gA(n,e){if(n==null)return Mo;let t={};for(let i in n)if(n.hasOwnProperty(i)){let r=n[i],o,s,a,c;Array.isArray(r)?(a=r[0],o=r[1],s=r[2]??o,c=r[3]||null):(o=r,s=r,a=rd.None,c=null),t[o]=[i,a,c],e[o]=s}return t}function vA(n){if(n==null)return Mo;let e={};for(let t in n)n.hasOwnProperty(t)&&(e[n[t]]=t);return e}function ud(n){return Ku(()=>{let e=TS(n);return DS(e),e})}function TS(n){let e={};return{type:n.type,providersResolver:null,viewProvidersResolver:null,factory:null,hostBindings:n.hostBindings||null,hostVars:n.hostVars||0,hostAttrs:n.hostAttrs||null,contentQueries:n.contentQueries||null,declaredInputs:e,inputConfig:n.inputs||Mo,exportAs:n.exportAs||null,standalone:n.standalone??!0,signals:n.signals===!0,selectors:n.selectors||Ln,viewQuery:n.viewQuery||null,features:n.features||null,setInput:null,resolveHostDirectives:null,hostDirectives:null,controlDef:null,signalFormsInputPresence:null,inputs:gA(n.inputs,e),outputs:vA(n.outputs),debugInfo:null}}function DS(n){n.features?.forEach(e=>e(n))}function Q0(n,e){return n?()=>{let t=typeof n=="function"?n():n,i=[];for(let r of t){let o=e(r);o!==null&&i.push(o)}return i}:null}function yA(n){let e=0,t=typeof n.consts=="function"?"":n.consts,i=[n.selectors,n.ngContentSelectors,n.hostVars,n.hostAttrs,t,n.vars,n.decls,n.encapsulation,n.standalone,n.signals,n.exportAs,JSON.stringify(n.inputs),JSON.stringify(n.outputs),Object.getOwnPropertyNames(n.type.prototype),!!n.contentQueries,!!n.viewQuery];for(let o of i.join("|"))e=Math.imul(31,e)+o.charCodeAt(0)<<0;return e+=2147483648,"c"+e}var AS=new Ne("");var hg=(()=>{class n{resolve;reject;initialized=!1;done=!1;donePromise=new Promise((t,i)=>{this.resolve=t,this.reject=i});appInits=re(AS,{optional:!0})??[];injector=re(pr);constructor(){}runInitializers(){if(this.initialized)return;let t=[];for(let r of this.appInits){let o=yn(this.injector,r);if(ac(o))t.push(o);else if(CS(o)){let s=new Promise((a,c)=>{o.subscribe({complete:a,error:c})});t.push(s)}}let i=()=>{this.done=!0,this.resolve()};Promise.all(t).then(()=>{i()}).catch(r=>{this.reject(r)}),t.length===0&&i(),this.initialized=!0}static \u0275fac=function(i){return new(i||n)};static \u0275prov=en({token:n,factory:n.\u0275fac})}return n})();function _A(n,e,t,i,r,o,s,a){if(t.firstCreatePass){n.mergedAttrs=Qu(n.mergedAttrs,n.attrs);let u=n.tView=rg(2,n,r,o,s,t.directiveRegistry,t.pipeRegistry,null,t.schemas,t.consts,null);t.queries!==null&&(t.queries.template(t,n),u.queries=t.queries.embeddedTView(n))}a&&(n.flags|=a),Cs(n,!1);let c=xA(t,e,n,i);Cu()&&ng(t,e,c,n),As(c,e);let l=dS(c,e,c,n);e[i+fn]=l,sg(e,l),nA(l,n,e)}function $u(n,e,t,i,r,o,s,a,c,l,u){let f=t+fn,d;if(e.firstCreatePass){if(d=ad(e,f,4,s||null,a||null),l!=null){let h=qi(e.consts,l);d.localNames=[];for(let p=0;p<h.length;p+=2)d.localNames.push(h[p],-1)}}else d=e.data[f];return _A(d,n,e,t,i,r,o,c),l!=null&&ag(n,d,u),d}var xA=SA;function SA(n,e,t,i){return Tu(!0),e[Xt].createComment("")}var pg=(()=>{class n{log(t){console.log(t)}warn(t){console.warn(t)}static \u0275fac=function(i){return new(i||n)};static \u0275prov=gt({token:n,factory:n.\u0275fac,providedIn:"platform"})}return n})();var mg=new Ne("");var dd=new Ne("");function IS(){Xh(()=>{let n="";throw new Re(600,n)})}var EA=10;var ks=(()=>{class n{_runningTick=!1;_destroyed=!1;_destroyListeners=[];_views=[];internalErrorHandler=re(Xi);afterRenderManager=re(jx);zonelessEnabled=re(Za);rootEffectScheduler=re(fm);dirtyFlags=0;tracingSnapshot=null;allTestViews=new Set;autoDetectTestViews=new Set;includeAllTestViews=!1;afterTick=new $t;get allViews(){return[...(this.includeAllTestViews?this.allTestViews:this.autoDetectTestViews).keys(),...this._views]}get destroyed(){return this._destroyed}componentTypes=[];components=[];internalPendingTask=re(Br);get isStable(){return this.internalPendingTask.hasPendingTasksObservable.pipe(kt(t=>!t))}constructor(){re(Os,{optional:!0})}whenStable(){let t;return new Promise(i=>{t=this.isStable.subscribe({next:r=>{r&&i()}})}).finally(()=>{t.unsubscribe()})}_injector=re(Jt);_rendererFactory=null;get injector(){return this._injector}bootstrap(t,i){return this.bootstrapImpl(t,i)}bootstrapImpl(t,i,r=pr.NULL){return this._injector.get(On).run(()=>{if(bt(ht.BootstrapComponentStart),!this._injector.get(hg).done){let m="";throw new Re(405,m)}let a=bo(t),c=this._injector.get(Rs),l=new rc(a,c);this.componentTypes.push(t);let{hostElement:u,directives:f,bindings:d}=bA(i),h=u||l.selector,p=l.create(r,[],h,c.injector,f,d),x=p.location.nativeElement,g=p.injector.get(mg,null);return g?.registerApplication(x),p.onDestroy(()=>{this.detachView(p.hostView),Qa(this.components,p),g?.unregisterApplication(x)}),this._loadComponent(p),bt(ht.BootstrapComponentEnd,p),p})}tick(){this.zonelessEnabled||(this.dirtyFlags|=1),this._tick()}_tick(){bt(ht.ChangeDetectionStart),this.tracingSnapshot!==null?this.tracingSnapshot.run(Qm.CHANGE_DETECTION,this.tickImpl):this.tickImpl()}tickImpl=()=>{if(this._runningTick)throw bt(ht.ChangeDetectionEnd),new Re(101,!1);let t=Fe(null);try{this._runningTick=!0,this.synchronize()}finally{this._runningTick=!1,this.tracingSnapshot?.dispose(),this.tracingSnapshot=null,Fe(t),this.afterTick.next(),bt(ht.ChangeDetectionEnd)}};synchronize(){this._rendererFactory===null&&!this._injector.destroyed&&(this._rendererFactory=this._injector.get(No,null,{optional:!0}));let t=0;for(;this.dirtyFlags!==0&&t++<EA;){bt(ht.ChangeDetectionSyncStart);try{this.synchronizeOnce()}finally{bt(ht.ChangeDetectionSyncEnd)}}}synchronizeOnce(){this.dirtyFlags&16&&(this.dirtyFlags&=-17,this.rootEffectScheduler.flush());let t=!1;if(this.dirtyFlags&7){let i=!!(this.dirtyFlags&1);this.dirtyFlags&=-8,this.dirtyFlags|=8;for(let{_lView:r}of this.allViews){if(!i&&!Wa(r))continue;let o=i&&!this.zonelessEnabled?0:1;aS(r,o),t=!0}if(this.dirtyFlags&=-5,this.syncDirtyFlagsWithViews(),this.dirtyFlags&23)return}t||(this._rendererFactory?.begin?.(),this._rendererFactory?.end?.()),this.dirtyFlags&8&&(this.dirtyFlags&=-9,this.afterRenderManager.execute()),this.syncDirtyFlagsWithViews()}syncDirtyFlagsWithViews(){if(this.allViews.some(({_lView:t})=>Wa(t))){this.dirtyFlags|=2;return}else this.dirtyFlags&=-8}attachView(t){let i=t;this._views.push(i),i.attachToAppRef(this)}detachView(t){let i=t;Qa(this._views,i),i.detachFromAppRef()}_loadComponent(t){this.attachView(t.hostView);try{this.tick()}catch(r){this.internalErrorHandler(r)}this.components.push(t),this._injector.get(dd,[]).forEach(r=>r(t))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(t=>t()),this._views.slice().forEach(t=>t.destroy())}finally{this._destroyed=!0,this._views=[],this._destroyListeners=[]}}onDestroy(t){return this._destroyListeners.push(t),()=>Qa(this._destroyListeners,t)}destroy(){if(this._destroyed)throw new Re(406,!1);let t=this._injector;t.destroy&&!t.destroyed&&t.destroy()}get viewCount(){return this._views.length}static \u0275fac=function(i){return new(i||n)};static \u0275prov=en({token:n,factory:n.\u0275fac})}return n})();function bA(n){return n===void 0||typeof n=="string"||n instanceof Element?{hostElement:n}:n}function Qa(n,e){let t=n.indexOf(e);t>-1&&n.splice(t,1)}var Um=class{destroy(e){}updateValue(e,t){}swap(e,t){let i=Math.min(e,t),r=Math.max(e,t),o=this.detach(r);if(r-i>1){let s=this.detach(i);this.attach(i,o),this.attach(r,s)}else this.attach(i,o)}move(e,t){this.attach(t,this.detach(e))}};function vm(n,e,t,i,r){return n===t&&Object.is(e,i)?1:Object.is(r(n,e),r(t,i))?-1:0}function MA(n,e,t,i){let r,o,s=0,a=n.length-1,c=void 0;if(Array.isArray(e)){Fe(i);let l=e.length-1;for(Fe(null);s<=a&&s<=l;){let u=n.at(s),f=e[s],d=vm(s,u,s,f,t);if(d!==0){d<0&&n.updateValue(s,f),s++;continue}let h=n.at(a),p=e[l],x=vm(a,h,l,p,t);if(x!==0){x<0&&n.updateValue(a,p),a--,l--;continue}let g=t(s,u),m=t(a,h),C=t(s,f);if(Object.is(C,m)){let T=t(l,p);Object.is(T,g)?(n.swap(s,a),n.updateValue(a,p),l--,a--):n.move(a,s),n.updateValue(s,f),s++;continue}if(r??=new qu,o??=tx(n,s,a,t),Bm(n,r,s,C))n.updateValue(s,f),s++,a++;else if(o.has(C))r.set(g,n.detach(s)),a--;else{let T=n.create(s,e[s]);n.attach(s,T),s++,a++}}for(;s<=l;)ex(n,r,t,s,e[s]),s++}else if(e!=null){Fe(i);let l=e[Symbol.iterator]();Fe(null);let u=l.next();for(;!u.done&&s<=a;){let f=n.at(s),d=u.value,h=vm(s,f,s,d,t);if(h!==0)h<0&&n.updateValue(s,d),s++,u=l.next();else{r??=new qu,o??=tx(n,s,a,t);let p=t(s,d);if(Bm(n,r,s,p))n.updateValue(s,d),s++,a++,u=l.next();else if(!o.has(p))n.attach(s,n.create(s,d)),s++,a++,u=l.next();else{let x=t(s,f);r.set(x,n.detach(s)),a--}}}for(;!u.done;)ex(n,r,t,n.length,u.value),u=l.next()}for(;s<=a;)n.destroy(n.detach(a--));r?.forEach(l=>{n.destroy(l)})}function Bm(n,e,t,i){return e!==void 0&&e.has(i)?(n.attach(t,e.get(i)),e.delete(i),!0):!1}function ex(n,e,t,i,r){if(Bm(n,e,i,t(i,r)))n.updateValue(i,r);else{let o=n.create(i,r);n.attach(i,o)}}function tx(n,e,t,i){let r=new Set;for(let o=e;o<=t;o++)r.add(i(o,n.at(o)));return r}var qu=class{kvMap=new Map;_vMap=void 0;has(e){return this.kvMap.has(e)}delete(e){if(!this.has(e))return!1;let t=this.kvMap.get(e);return this._vMap!==void 0&&this._vMap.has(t)?(this.kvMap.set(e,this._vMap.get(t)),this._vMap.delete(t)):this.kvMap.delete(e),!0}get(e){return this.kvMap.get(e)}set(e,t){if(this.kvMap.has(e)){let i=this.kvMap.get(e);this._vMap===void 0&&(this._vMap=new Map);let r=this._vMap;for(;r.has(i);)i=r.get(i);r.set(i,t)}else this.kvMap.set(e,t)}forEach(e){for(let[t,i]of this.kvMap)if(e(i,t),this._vMap!==void 0){let r=this._vMap;for(;r.has(i);)i=r.get(i),e(i,t)}}};function _n(n,e,t,i,r,o,s,a){Lo("NgControlFlow");let c=ct(),l=Wn(),u=qi(l.consts,o);return $u(c,l,n,e,t,i,r,u,256,s,a),gg}function gg(n,e,t,i,r,o,s,a){Lo("NgControlFlow");let c=ct(),l=Wn(),u=qi(l.consts,o);return $u(c,l,n,e,t,i,r,u,512,s,a),gg}function xn(n,e){Lo("NgControlFlow");let t=ct(),i=qa(),r=t[i]!==bi?t[i]:-1,o=r!==-1?Xu(t,fn+r):void 0,s=0;if(Fs(t,i,n)){let a=Fe(null);try{if(o!==void 0&&hS(o,s),n!==-1){let c=fn+n,l=Xu(t,c),u=Gm(t[Pe],c),f=mS(l,u,t),d=od(t,u,e,{dehydratedView:f});sd(l,d,s,tc(u,f))}}finally{Fe(a)}}else if(o!==void 0){let a=fS(o,s);a!==void 0&&(a[zt]=e)}}var Vm=class{lContainer;$implicit;$index;constructor(e,t,i){this.lContainer=e,this.$implicit=t,this.$index=i}get $count(){return this.lContainer.length-Rt}};function ko(n,e){return e}var Hm=class{hasEmptyBlock;trackByFn;liveCollection;constructor(e,t,i){this.hasEmptyBlock=e,this.trackByFn=t,this.liveCollection=i}};function Mi(n,e,t,i,r,o,s,a,c,l,u,f,d){Lo("NgControlFlow");let h=ct(),p=Wn(),x=c!==void 0,g=ct(),m=a?s.bind(g[Gn][zt]):s,C=new Hm(x,m);g[fn+n]=C,$u(h,p,n+1,e,t,i,r,qi(p.consts,o),256),x&&$u(h,p,n+2,c,l,u,f,qi(p.consts,d),512)}var zm=class extends Um{lContainer;hostLView;templateTNode;operationsCounter=void 0;needsIndexUpdate=!1;constructor(e,t,i){super(),this.lContainer=e,this.hostLView=t,this.templateTNode=i}get length(){return this.lContainer.length-Rt}at(e){return this.getLView(e)[zt].$implicit}attach(e,t){let i=t[Es];this.needsIndexUpdate||=e!==this.length,sd(this.lContainer,t,e,tc(this.templateTNode,i)),wA(this.lContainer,e)}detach(e){return this.needsIndexUpdate||=e!==this.length-1,CA(this.lContainer,e),TA(this.lContainer,e)}create(e,t){let i=Am(this.lContainer,this.templateTNode.tView.ssrId);return od(this.hostLView,this.templateTNode,new Vm(this.lContainer,t,e),{dehydratedView:i})}destroy(e){nd(e[Pe],e)}updateValue(e,t){this.getLView(e)[zt].$implicit=t}reset(){this.needsIndexUpdate=!1}updateIndexes(){if(this.needsIndexUpdate)for(let e=0;e<this.length;e++)this.getLView(e)[zt].$index=e}getLView(e){return DA(this.lContainer,e)}};function wi(n){let e=Fe(null),t=gr();try{let i=ct(),r=i[Pe],o=i[t],s=t+1,a=Xu(i,s);if(o.liveCollection===void 0){let l=Gm(r,s);o.liveCollection=new zm(a,i,l)}else o.liveCollection.reset();let c=o.liveCollection;if(MA(c,n,o.trackByFn,e),c.updateIndexes(),o.hasEmptyBlock){let l=qa(),u=c.length===0;if(Fs(i,l,u)){let f=t+2,d=Xu(i,f);if(u){let h=Gm(r,f),p=mS(d,h,i),x=od(i,h,void 0,{dehydratedView:p});sd(d,x,0,tc(h,p))}else r.firstUpdatePass&&SD(d),hS(d,0)}}}finally{Fe(e)}}function Xu(n,e){return n[e]}function wA(n,e){if(n.length<=Rt)return;let t=Rt+e,i=n[t],r=i?i[ji]:void 0;if(i&&r&&r.detachedLeaveAnimationFns&&r.detachedLeaveAnimationFns.length>0){let o=i[Hi];ET(o,r),Hr.delete(i[Gi]),r.detachedLeaveAnimationFns=void 0}}function CA(n,e){if(n.length<=Rt)return;let t=Rt+e,i=n[t],r=i?i[ji]:void 0;r&&r.leave&&r.leave.size>0&&(r.detachedLeaveAnimationFns=[])}function TA(n,e){return ic(n,e)}function DA(n,e){return fS(n,e)}function Gm(n,e){return yu(n,e)}function jm(n,e,t,i,r){tS(e,n,t,r?"class":"style",i)}function Yu(n,e,t,i){let r=ct(),o=r[Pe],s=n+fn,a=o.firstCreatePass?xS(s,r,2,e,JT,d0(),t,i):o.data[s];if(kr(a)){let c=r[yi].tracingService;if(c&&c.componentCreate){let l=o.data[a.directiveStart+a.componentOffset];return c.componentCreate(yS(l),()=>(nx(n,e,r,a,i),Yu))}}return nx(n,e,r,a,i),Yu}function nx(n,e,t,i,r){if(Qx(i,t,n,e,RS),gu(i)){let o=t[Pe];Jx(o,t,i),Lx(o,i,t)}r!=null&&ag(t,i)}function vg(){let n=Wn(),e=_i(),t=eS(e);return n.firstCreatePass&&SS(n,t),Yp(t)&&Zp(),Xp(),t.classesWithoutHost!=null&&IC(t)&&jm(n,t,ct(),t.classesWithoutHost,!0),t.stylesWithoutHost!=null&&RC(t)&&jm(n,t,ct(),t.stylesWithoutHost,!1),vg}function fd(n,e,t,i){return Yu(n,e,t,i),vg(),fd}function ne(n,e,t,i){let r=ct(),o=r[Pe],s=n+fn,a=o.firstCreatePass?VD(s,o,2,e,t,i):o.data[s];return Qx(a,r,n,e,RS),i!=null&&ag(r,a),ne}function ce(){let n=_i(),e=eS(n);return Yp(e)&&Zp(),Xp(),ce}function rt(n,e,t,i){return ne(n,e,t,i),ce(),rt}var RS=(n,e,t,i,r)=>(Tu(!0),Ux(e[Xt],i,om()));function Us(){return ct()}function Yn(n,e,t){let i=ct(),r=qa();if(Fs(i,r,e)){let o=Wn(),s=M0();XT(s,i,n,e,i[Xt],t)}return Yn}var uc="en-US";var AA=uc;function NS(n){typeof n=="string"&&(AA=n.toLowerCase().replace(/_/g,"-"))}function Nt(n,e,t){let i=ct(),r=Wn(),o=_i();return(o.type&3||t)&&CD(o,r,i,t,i[Xt],n,e,wD(o,i,e)),Nt}function lt(n=1){return b0(n)}function hd(n,e,t){return uA(n,e,t),hd}function pd(n){let e=ct(),t=Wn(),i=nm();bu(i+1);let r=fg(t,i);if(n.dirty&&r0(e)===((r.metadata.flags&2)===2)){if(r.matches===null)n.reset([]);else{let o=hA(e,i);n.reset(o,WC),n.notifyOnChanges()}return!0}return!1}function md(){return cA(ct(),nm())}function Iu(n,e){return n<<17|e<<2}function Po(n){return n>>17&32767}function IA(n){return(n&2)==2}function RA(n,e){return n&131071|e<<17}function Wm(n){return n|2}function Ns(n){return(n&131068)>>2}function ym(n,e){return n&-131069|e<<2}function NA(n){return(n&1)===1}function $m(n){return n|1}function PA(n,e,t,i,r,o){let s=o?e.classBindings:e.styleBindings,a=Po(s),c=Ns(s);n[i]=t;let l=!1,u;if(Array.isArray(t)){let f=t;u=f[1],(u===null||xs(f,u)>0)&&(l=!0)}else u=t;if(r)if(c!==0){let d=Po(n[a+1]);n[i+1]=Iu(d,a),d!==0&&(n[d+1]=ym(n[d+1],i)),n[a+1]=RA(n[a+1],i)}else n[i+1]=Iu(a,0),a!==0&&(n[a+1]=ym(n[a+1],i)),a=i;else n[i+1]=Iu(c,0),a===0?a=i:n[c+1]=ym(n[c+1],i),c=i;l&&(n[i+1]=Wm(n[i+1])),ix(n,u,i,!0),ix(n,u,i,!1),LA(e,u,n,i,o),s=Iu(a,c),o?e.classBindings=s:e.styleBindings=s}function LA(n,e,t,i,r){let o=r?n.residualClasses:n.residualStyles;o!=null&&typeof e=="string"&&xs(o,e)>=0&&(t[i+1]=$m(t[i+1]))}function ix(n,e,t,i){let r=n[t+1],o=e===null,s=i?Po(r):Ns(r),a=!1;for(;s!==0&&(a===!1||o);){let c=n[s],l=n[s+1];OA(c,e)&&(a=!0,n[s+1]=i?$m(l):Wm(l)),s=i?Po(l):Ns(l)}a&&(n[t+1]=i?Wm(r):$m(r))}function OA(n,e){return n===null||e==null||(Array.isArray(n)?n[1]:n)===e?!0:Array.isArray(n)&&typeof e=="string"?xs(n,e)>=0:!1}var Si={textEnd:0,key:0,keyEnd:0,value:0,valueEnd:0};function FA(n){return n.substring(Si.key,Si.keyEnd)}function kA(n){return UA(n),PS(n,LS(n,0,Si.textEnd))}function PS(n,e){let t=Si.textEnd;return t===e?-1:(e=Si.keyEnd=BA(n,Si.key=e,t),LS(n,e,t))}function UA(n){Si.key=0,Si.keyEnd=0,Si.value=0,Si.valueEnd=0,Si.textEnd=n.length}function LS(n,e,t){for(;e<t&&n.charCodeAt(e)<=32;)e++;return e}function BA(n,e,t){for(;e<t&&n.charCodeAt(e)>32;)e++;return e}function dc(n,e,t){return OS(n,e,t,!1),dc}function An(n,e){return OS(n,e,null,!0),An}function fc(n){HA(qA,VA,n,!0)}function VA(n,e){for(let t=kA(e);t>=0;t=PS(e,t))fu(n,FA(e),!0)}function OS(n,e,t,i){let r=ct(),o=Wn(),s=tm(2);if(o.firstUpdatePass&&kS(o,n,s,i),e!==bi&&Fs(r,s,e)){let a=o.data[gr()];US(o,a,r,r[Xt],n,r[s+1]=YA(e,t),i,s)}}function HA(n,e,t,i){let r=Wn(),o=tm(2);r.firstUpdatePass&&kS(r,null,o,i);let s=ct();if(t!==bi&&Fs(s,o,t)){let a=r.data[gr()];if(BS(a,i)&&!FS(r,o)){let c=i?a.classesWithoutHost:a.stylesWithoutHost;c!==null&&(t=su(c,t||"")),jm(r,a,s,t,i)}else XA(r,a,s,s[Xt],s[o+1],s[o+1]=$A(n,e,t),i,o)}}function FS(n,e){return e>=n.expandoStartIndex}function kS(n,e,t,i){let r=n.data;if(r[t+1]===null){let o=r[gr()],s=FS(n,t);BS(o,i)&&e===null&&!s&&(e=!1),e=zA(r,o,e,i),PA(r,o,e,t,s,i)}}function zA(n,e,t,i){let r=_0(n),o=i?e.residualClasses:e.residualStyles;if(r===null)(i?e.classBindings:e.styleBindings)===0&&(t=_m(null,n,e,t,i),t=sc(t,e.attrs,i),o=null);else{let s=e.directiveStylingLast;if(s===-1||n[s]!==r)if(t=_m(r,n,e,t,i),o===null){let c=GA(n,e,i);c!==void 0&&Array.isArray(c)&&(c=_m(null,n,e,c[1],i),c=sc(c,e.attrs,i),jA(n,e,i,c))}else o=WA(n,e,i)}return o!==void 0&&(i?e.residualClasses=o:e.residualStyles=o),t}function GA(n,e,t){let i=t?e.classBindings:e.styleBindings;if(Ns(i)!==0)return n[Po(i)]}function jA(n,e,t,i){let r=t?e.classBindings:e.styleBindings;n[Po(r)]=i}function WA(n,e,t){let i,r=e.directiveEnd;for(let o=1+e.directiveStylingLast;o<r;o++){let s=n[o].hostAttrs;i=sc(i,s,t)}return sc(i,e.attrs,t)}function _m(n,e,t,i,r){let o=null,s=t.directiveEnd,a=t.directiveStylingLast;for(a===-1?a=t.directiveStart:a++;a<s&&(o=e[a],i=sc(i,o.hostAttrs,r),o!==n);)a++;return n!==null&&(t.directiveStylingLast=a),i}function sc(n,e,t){let i=t?1:2,r=-1;if(e!==null)for(let o=0;o<e.length;o++){let s=e[o];typeof s=="number"?r=s:r===i&&(Array.isArray(n)||(n=n===void 0?[]:["",n]),fu(n,s,t?!0:e[++o]))}return n===void 0?null:n}function $A(n,e,t){if(t==null||t==="")return Ln;let i=[],r=ed(t);if(Array.isArray(r))for(let o=0;o<r.length;o++)n(i,r[o],!0);else if(r instanceof Set)for(let o of r)n(i,o,!0);else if(typeof r=="object")for(let o in r)Object.hasOwn(r,o)&&n(i,o,r[o]);else typeof r=="string"&&e(i,r);return i}function qA(n,e,t){let i=String(e);i!==""&&!i.includes(" ")&&fu(n,i,t)}function XA(n,e,t,i,r,o,s,a){r===bi&&(r=Ln);let c=0,l=0,u=0<r.length?r[0]:null,f=0<o.length?o[0]:null;for(;u!==null||f!==null;){let d=c<r.length?r[c+1]:void 0,h=l<o.length?o[l+1]:void 0,p=null,x;u===f?(c+=2,l+=2,d!==h&&(p=f,x=h)):f===null||u!==null&&u<f?(c+=2,p=u):(l+=2,p=f,x=h),p!==null&&US(n,e,t,i,p,x,s,a),u=c<r.length?r[c]:null,f=l<o.length?o[l]:null}}function US(n,e,t,i,r,o,s,a){if(!(e.type&3))return;let c=n.data,l=c[a+1],u=NA(l)?rx(c,e,t,r,Ns(l),s):void 0;if(!Zu(u)){Zu(o)||IA(l)&&(o=rx(c,null,t,r,a,s));let f=Gp(gr(),t);HT(i,s,f,r,o)}}function rx(n,e,t,i,r,o){let s=e===null,a;for(;r>0;){let c=n[r],l=Array.isArray(c),u=l?c[1]:c,f=u===null,d=t[r+1];d===bi&&(d=f?Ln:void 0);let h=f?hu(d,i):u===i?d:void 0;if(l&&!Zu(h)&&(h=hu(c,i)),Zu(h)&&(a=h,s))return a;let p=n[r+1];r=s?Po(p):Ns(p)}if(e!==null){let c=o?e.residualClasses:e.residualStyles;c!=null&&(a=hu(c,i))}return a}function Zu(n){return n!==void 0}function YA(n,e){return n==null||n===""||(typeof e=="string"?n=n+e:typeof n=="object"&&(n=Fa(ed(n)))),n}function BS(n,e){return(n.flags&(e?8:16))!==0}function De(n,e=""){let t=ct(),i=Wn(),r=n+fn,o=i.firstCreatePass?ad(i,r,1,e,null):i.data[r],s=ZA(i,t,o,e);t[r]=s,Cu()&&ng(i,t,s,o),Cs(o,!1)}var ZA=(n,e,t,i)=>(Tu(!0),tT(e[Xt],i));function VS(n,e,t,i=""){return Fs(n,qa(),t)?e+Np(t)+i:bi}function et(n){return Gt("",n),et}function Gt(n,e,t){let i=ct(),r=VS(i,n,e,t);return r!==bi&&KA(i,gr(),r),Gt}function KA(n,e,t){let i=Gp(e,n);nT(n[Xt],i,t)}function hc(n,e,t=""){return VS(ct(),n,e,t)}var HS=(()=>{class n{applicationErrorHandler=re(Xi);appRef=re(ks);taskService=re(Br);ngZone=re(On);zonelessEnabled=re(Za);tracing=re(Os,{optional:!0});zoneIsDefined=typeof Zone<"u"&&!!Zone.root.run;schedulerTickApplyArgs=[{data:{__scheduler_tick__:!0}}];subscriptions=new ln;angularZoneId=this.zoneIsDefined?this.ngZone._inner?.get(Pa):null;scheduleInRootZone=!this.zonelessEnabled&&this.zoneIsDefined&&(re(dm,{optional:!0})??!1);cancelScheduledCallback=null;useMicrotaskScheduler=!1;runningTick=!1;pendingRenderTaskId=null;constructor(){this.subscriptions.add(this.appRef.afterTick.subscribe(()=>{let t=this.taskService.add();if(!this.runningTick&&(this.cleanup(),!this.zonelessEnabled||this.appRef.includeAllTestViews)){this.taskService.remove(t);return}this.switchToMicrotaskScheduler(),this.taskService.remove(t)})),this.subscriptions.add(this.ngZone.onUnstable.subscribe(()=>{this.runningTick||this.cleanup()}))}switchToMicrotaskScheduler(){this.ngZone.runOutsideAngular(()=>{let t=this.taskService.add();this.useMicrotaskScheduler=!0,queueMicrotask(()=>{this.useMicrotaskScheduler=!1,this.taskService.remove(t)})})}notify(t){if(!this.zonelessEnabled&&t===5)return;switch(t){case 0:case 2:{this.appRef.dirtyFlags|=2;break}case 3:case 4:case 5:case 1:{this.appRef.dirtyFlags|=4;break}case 6:{this.appRef.dirtyFlags|=2;break}case 12:{this.appRef.dirtyFlags|=16;break}case 13:{this.appRef.dirtyFlags|=2;break}case 11:break;default:this.appRef.dirtyFlags|=8}if(this.appRef.tracingSnapshot=this.tracing?.snapshot(this.appRef.tracingSnapshot)??null,!this.shouldScheduleTick())return;let i=this.useMicrotaskScheduler?D0:am;this.pendingRenderTaskId=this.taskService.add(),this.scheduleInRootZone?this.cancelScheduledCallback=Zone.root.run(()=>i(()=>this.tick())):this.cancelScheduledCallback=this.ngZone.runOutsideAngular(()=>i(()=>this.tick()))}shouldScheduleTick(){return!(this.appRef.destroyed||this.pendingRenderTaskId!==null||this.runningTick||this.appRef._runningTick||!this.zonelessEnabled&&this.zoneIsDefined&&Zone.current.get(Pa+this.angularZoneId))}tick(){if(this.runningTick||this.appRef.destroyed)return;if(this.appRef.dirtyFlags===0){this.cleanup();return}!this.zonelessEnabled&&this.appRef.dirtyFlags&7&&(this.appRef.dirtyFlags|=1);let t=this.taskService.add();try{this.ngZone.run(()=>{this.runningTick=!0,this.appRef._tick()},void 0,this.schedulerTickApplyArgs)}catch(i){this.applicationErrorHandler(i)}finally{this.taskService.remove(t),this.cleanup()}}ngOnDestroy(){this.subscriptions.unsubscribe(),this.cleanup()}cleanup(){if(this.runningTick=!1,this.cancelScheduledCallback?.(),this.cancelScheduledCallback=null,this.pendingRenderTaskId!==null){let t=this.pendingRenderTaskId;this.pendingRenderTaskId=null,this.taskService.remove(t)}}static \u0275fac=function(i){return new(i||n)};static \u0275prov=en({token:n,factory:n.\u0275fac})}return n})();function zS(){return[{provide:_s,useExisting:HS},{provide:On,useClass:La},{provide:Za,useValue:!0}]}var yg=(()=>{class n{compileModuleSync(t){return new Wu(t)}compileModuleAsync(t){return Promise.resolve(this.compileModuleSync(t))}clearCache(){}clearCacheFor(t){}getModuleId(t){}static \u0275fac=function(i){return new(i||n)};static \u0275prov=en({token:n,factory:n.\u0275fac})}return n})();function JA(){return typeof $localize<"u"&&$localize.locale||uc}var _g=new Ne("",{factory:()=>re(_g,{optional:!0,skipSelf:!0})||JA()});function Fn(n,e){return Rl(n,e?.equal)}function Gr(n){return o_(n)}var GS=class n extends Error{_brand;constructor(e){super(e)}static IDLE=new n("IDLE");static LOADING=new n("LOADING")};var $S=Symbol("InputSignalNode#UNSET"),gI=xt(_e({},Nl),{transformFn:void 0,applyValueToInputSignal(n,e){cs(n,e)}});function qS(n,e){let t=Object.create(gI);t.value=n,t.transformFn=e?.transform;function i(){if(os(t),t.value===$S){let r=null;throw new Re(-950,r)}return t.value}return i[Cn]=t,i}function Sg(n){return vI(n)?n.default:n}function vI(n){return n&&typeof n=="object"&&"default"in n}function jS(n,e){return qS(n,e)}function yI(n){return qS($S,n)}var Eg=(jS.required=yI,jS);var _I=1e4;var M$=_I-1e3;var bg=(()=>{class n{static __NG_ELEMENT_ID__=xI}return n})();function xI(n){return SI(_i(),ct(),(n&16)===16)}function SI(n,e,t){if(kr(n)&&!t){let i=$i(n.index,e);return new zr(i,i)}else if(n.type&175){let i=e[Gn];return new zr(i,e)}return null}var xg=new Ne(""),EI=new Ne("");function pc(n){return!n.moduleRef}function bI(n){let e=pc(n)?n.r3Injector:n.moduleRef.injector,t=e.get(On);return t.run(()=>{pc(n)?n.r3Injector.resolveInjectorInitializers():n.moduleRef.resolveInjectorInitializers();let i=e.get(Xi),r;if(t.runOutsideAngular(()=>{r=t.onError.subscribe({next:i})}),pc(n)){let o=()=>e.destroy(),s=n.platformInjector.get(xg);s.add(o),e.onDestroy(()=>{r.unsubscribe(),s.delete(o)})}else{let o=()=>n.moduleRef.destroy(),s=n.platformInjector.get(xg);s.add(o),n.moduleRef.onDestroy(()=>{Qa(n.allPlatformModules,n.moduleRef),r.unsubscribe(),s.delete(o)})}return wI(i,t,()=>{let o=e.get(Br),s=o.add(),a=e.get(hg);return a.runInitializers(),a.donePromise.then(()=>{let c=e.get(_g,uc);if(NS(c||uc),!e.get(EI,!0))return pc(n)?e.get(ks):(n.allPlatformModules.push(n.moduleRef),n.moduleRef);if(pc(n)){let u=e.get(ks);return n.rootComponent!==void 0&&u.bootstrap(n.rootComponent),u}else return MI?.(n.moduleRef,n.allPlatformModules),n.moduleRef}).finally(()=>{o.remove(s)})})})}var MI;function wI(n,e,t){try{let i=t();return ac(i)?i.catch(r=>{throw e.runOutsideAngular(()=>n(r)),r}):i}catch(i){throw e.runOutsideAngular(()=>n(i)),i}}var gd=null;function CI(n=[],e){return pr.create({name:e,providers:[{provide:Ha,useValue:"platform"},{provide:xg,useValue:new Set([()=>gd=null])},...n]})}function TI(n=[]){if(gd)return gd;let e=CI(n);return gd=e,IS(),DI(e),e}function DI(n){let e=n.get(Du,null);yn(n,()=>{e?.forEach(t=>t())})}function XS(n){let{rootComponent:e,appProviders:t,platformProviders:i,platformRef:r}=n;bt(ht.BootstrapApplicationStart);try{let o=r?.injector??TI(i),s=[zS(),I0,...t||[]],a=new oc({providers:s,parent:o,debugName:"",runEnvironmentInitializers:!1});return bI({r3Injector:a.injector,platformInjector:o,rootComponent:e})}catch(o){return Promise.reject(o)}finally{bt(ht.BootstrapApplicationEnd)}}var YS=null;function yr(){return YS}function Mg(n){YS??=n}var mc=class{},vd=(()=>{class n{historyGo(t){throw new Error("")}static \u0275fac=function(i){return new(i||n)};static \u0275prov=gt({token:n,factory:()=>re(ZS),providedIn:"platform"})}return n})();var ZS=(()=>{class n extends vd{_location;_history;_doc=re(Yt);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return yr().getBaseHref(this._doc)}onPopState(t){let i=yr().getGlobalEventTarget(this._doc,"window");return i.addEventListener("popstate",t,!1),()=>i.removeEventListener("popstate",t)}onHashChange(t){let i=yr().getGlobalEventTarget(this._doc,"window");return i.addEventListener("hashchange",t,!1),()=>i.removeEventListener("hashchange",t)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(t){this._location.pathname=t}pushState(t,i,r){this._history.pushState(t,i,r)}replaceState(t,i,r){this._history.replaceState(t,i,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(t=0){this._history.go(t)}getState(){return this._history.state}static \u0275fac=function(i){return new(i||n)};static \u0275prov=gt({token:n,factory:()=>new n,providedIn:"platform"})}return n})();function QS(n,e){return n?e?n.endsWith("/")?e.startsWith("/")?n+e.slice(1):n+e:e.startsWith("/")?n+e:`${n}/${e}`:n:e}function KS(n){let e=n.search(/#|\?|$/);return n[e-1]==="/"?n.slice(0,e-1)+n.slice(e):n}function Wr(n){return n&&n[0]!=="?"?`?${n}`:n}var yd=(()=>{class n{historyGo(t){throw new Error("")}static \u0275fac=function(i){return new(i||n)};static \u0275prov=gt({token:n,factory:()=>re(II),providedIn:"root"})}return n})(),AI=new Ne(""),II=(()=>{class n extends yd{_platformLocation;_baseHref;_removeListenerFns=[];constructor(t,i){super(),this._platformLocation=t,this._baseHref=i??this._platformLocation.getBaseHrefFromDOM()??re(Yt).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(t){this._removeListenerFns.push(this._platformLocation.onPopState(t),this._platformLocation.onHashChange(t))}getBaseHref(){return this._baseHref}prepareExternalUrl(t){return QS(this._baseHref,t)}path(t=!1){let i=this._platformLocation.pathname+Wr(this._platformLocation.search),r=this._platformLocation.hash;return r&&t?`${i}${r}`:i}pushState(t,i,r,o){let s=this.prepareExternalUrl(r+Wr(o));this._platformLocation.pushState(t,i,s)}replaceState(t,i,r,o){let s=this.prepareExternalUrl(r+Wr(o));this._platformLocation.replaceState(t,i,s)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(t=0){this._platformLocation.historyGo?.(t)}static \u0275fac=function(i){return new(i||n)(Xe(vd),Xe(AI,8))};static \u0275prov=gt({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Bs=(()=>{class n{_subject=new $t;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(t){this._locationStrategy=t;let i=this._locationStrategy.getBaseHref();this._basePath=PI(KS(JS(i))),this._locationStrategy.onPopState(r=>{this._subject.next({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(t=!1){return this.normalize(this._locationStrategy.path(t))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(t,i=""){return this.path()==this.normalize(t+Wr(i))}normalize(t){return n.stripTrailingSlash(NI(this._basePath,JS(t)))}prepareExternalUrl(t){return t&&t[0]!=="/"&&(t="/"+t),this._locationStrategy.prepareExternalUrl(t)}go(t,i="",r=null){this._locationStrategy.pushState(r,"",t,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+Wr(i)),r)}replaceState(t,i="",r=null){this._locationStrategy.replaceState(r,"",t,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+Wr(i)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(t=0){this._locationStrategy.historyGo?.(t)}onUrlChange(t){return this._urlChangeListeners.push(t),this._urlChangeSubscription??=this.subscribe(i=>{this._notifyUrlChangeListeners(i.url,i.state)}),()=>{let i=this._urlChangeListeners.indexOf(t);this._urlChangeListeners.splice(i,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(t="",i){this._urlChangeListeners.forEach(r=>r(t,i))}subscribe(t,i,r){return this._subject.subscribe({next:t,error:i??void 0,complete:r??void 0})}static normalizeQueryParams=Wr;static joinWithSlash=QS;static stripTrailingSlash=KS;static \u0275fac=function(i){return new(i||n)(Xe(yd))};static \u0275prov=gt({token:n,factory:()=>RI(),providedIn:"root"})}return n})();function RI(){return new Bs(Xe(yd))}function NI(n,e){if(!n||!e.startsWith(n))return e;let t=e.substring(n.length);return t===""||["/",";","?","#"].includes(t[0])?t:e}function JS(n){return n.replace(/\/index\.html$/,"")}function PI(n){if(new RegExp("^(https?:)?//").test(n)){let[,t]=n.split(/\/\/[^\/]+/);return t}return n}var _d=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=ld({type:n});static \u0275inj=ka({})}return n})();function wg(n,e){e=encodeURIComponent(e);for(let t of n.split(";")){let i=t.indexOf("="),[r,o]=i==-1?[t,""]:[t.slice(0,i),t.slice(i+1)];if(r.trim()===e)return decodeURIComponent(o)}return null}var eE="browser";var gc=class{_doc;constructor(e){this._doc=e}manager},xd=(()=>{class n extends gc{constructor(t){super(t)}supports(t){return!0}addEventListener(t,i,r,o){return t.addEventListener(i,r,o),()=>this.removeEventListener(t,i,r,o)}removeEventListener(t,i,r,o){return t.removeEventListener(i,r,o)}static \u0275fac=function(i){return new(i||n)(Xe(Yt))};static \u0275prov=gt({token:n,factory:n.\u0275fac})}return n})(),bd=new Ne(""),Ag=(()=>{class n{_zone;_plugins;_eventNameToPlugin=new Map;constructor(t,i){this._zone=i,t.forEach(s=>{s.manager=this});let r=t.filter(s=>!(s instanceof xd));this._plugins=r.slice().reverse();let o=t.find(s=>s instanceof xd);o&&this._plugins.push(o)}addEventListener(t,i,r,o){return this._findPluginFor(i).addEventListener(t,i,r,o)}getZone(){return this._zone}_findPluginFor(t){let i=this._eventNameToPlugin.get(t);if(i)return i;if(i=this._plugins.find(o=>o.supports(t)),!i)throw new Re(-5101,!1);return this._eventNameToPlugin.set(t,i),i}static \u0275fac=function(i){return new(i||n)(Xe(bd),Xe(On))};static \u0275prov=gt({token:n,factory:n.\u0275fac})}return n})(),Cg="ng-app-id";function tE(n){for(let e of n)e.remove()}function nE(n,e){let t=e.createElement("style");return t.textContent=n,t}function OI(n,e,t,i){let r=n.head?.querySelectorAll(`style[${Cg}="${e}"],link[${Cg}="${e}"]`);if(!r||r.length===0)return!1;for(let o of r)o.removeAttribute(Cg),o instanceof HTMLLinkElement?i.set(o.href.slice(o.href.lastIndexOf("/")+1),{usage:0,elements:[o]}):o.textContent&&t.set(o.textContent,{usage:0,elements:[o]});return!0}function Dg(n,e){let t=e.createElement("link");return t.setAttribute("rel","stylesheet"),t.setAttribute("href",n),t}var Ig=(()=>{class n{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(t,i,r,o={}){this.doc=t,this.appId=i,this.nonce=r,OI(t,i,this.inline,this.external)&&this.hosts.add(t.head)}addStyles(t,i){for(let r of t)this.addUsage(r,this.inline,nE);i?.forEach(r=>this.addUsage(r,this.external,Dg))}removeStyles(t,i){for(let r of t)this.removeUsage(r,this.inline);i?.forEach(r=>this.removeUsage(r,this.external))}addUsage(t,i,r){let o=i.get(t);o?o.usage++:i.set(t,{usage:1,elements:[...this.hosts].map(s=>this.addElement(s,r(t,this.doc)))})}removeUsage(t,i){let r=i.get(t);r&&(r.usage--,r.usage<=0&&(tE(r.elements),i.delete(t)))}ngOnDestroy(){for(let[,{elements:t}]of[...this.inline,...this.external])tE(t);this.hosts.clear()}addHost(t){if(!this.hosts.has(t)){this.hosts.add(t);for(let[i,{elements:r}]of this.inline)r.push(this.addElement(t,nE(i,this.doc)));for(let[i,{elements:r}]of this.external)r.push(this.addElement(t,Dg(i,this.doc)))}}removeHost(t){this.hosts.delete(t);for(let i of[...this.inline.values(),...this.external.values()]){let r=[];for(let o of i.elements)o.parentNode===t?o.remove():r.push(o);i.elements=r}}addElement(t,i){return this.nonce&&i.setAttribute("nonce",this.nonce),t.appendChild(i)}static \u0275fac=function(i){return new(i||n)(Xe(Yt),Xe(Xa),Xe(Au,8),Xe(Ya))};static \u0275prov=gt({token:n,factory:n.\u0275fac})}return n})(),Tg={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},Rg=/%COMP%/g;var rE="%COMP%",FI=`_nghost-${rE}`,kI=`_ngcontent-${rE}`,UI=!0,BI=new Ne("",{factory:()=>UI}),VI=new Ne("");function HI(n){return kI.replace(Rg,n)}function zI(n){return FI.replace(Rg,n)}function oE(n,e){return e.map(t=>t.replace(Rg,n))}var Ng=(()=>{class n{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;cssVarNamespace;constructor(t,i,r,o,s,a,c=null,l=null,u=null){this.eventManager=t,this.sharedStylesHost=i,this.appId=r,this.removeStylesOnCompDestroy=o,this.doc=s,this.ngZone=a,this.nonce=c,this.tracingService=l,this.cssVarNamespace=u??"",this.defaultRenderer=new vc(t,s,a,this.tracingService,this.cssVarNamespace)}createRenderer(t,i){if(!t||!i)return this.defaultRenderer;let r=this.getOrCreateRenderer(t,i);return r instanceof Ed?r.applyToHost(t):r instanceof yc&&r.applyStyles(),r}getOrCreateRenderer(t,i){let r=this.rendererByCompId,o=r.get(i.id);if(!o){let s=this.doc,a=this.ngZone,c=this.eventManager,l=this.sharedStylesHost,u=this.removeStylesOnCompDestroy,f=this.tracingService;switch(i.encapsulation){case Ei.Emulated:o=new Ed(c,l,i,this.appId,u,s,a,f,this.cssVarNamespace);break;case Ei.ShadowDom:return new Sd(c,t,i,s,a,this.nonce,f,this.cssVarNamespace,l);case Ei.ExperimentalIsolatedShadowDom:return new Sd(c,t,i,s,a,this.nonce,f,this.cssVarNamespace);default:o=new yc(c,l,i,u,s,a,f,this.cssVarNamespace);break}r.set(i.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(t){this.rendererByCompId.delete(t)}static \u0275fac=function(i){return new(i||n)(Xe(Ag),Xe(Oo),Xe(Xa),Xe(BI),Xe(Yt),Xe(On),Xe(Au),Xe(Os,8),Xe(VI,8))};static \u0275prov=gt({token:n,factory:n.\u0275fac})}return n})(),vc=class{eventManager;doc;ngZone;tracingService;cssVarNamespace;data=Object.create(null);throwOnSyntheticProps=!0;constructor(e,t,i,r,o=""){this.eventManager=e,this.doc=t,this.ngZone=i,this.tracingService=r,this.cssVarNamespace=o}destroy(){}destroyNode=null;createElement(e,t){return t?this.doc.createElementNS(Tg[t]||t,e):this.doc.createElement(e)}createComment(e){return this.doc.createComment(e)}createText(e){return this.doc.createTextNode(e)}appendChild(e,t){(iE(e)?e.content:e).appendChild(t)}insertBefore(e,t,i){e&&(iE(e)?e.content:e).insertBefore(t,i)}removeChild(e,t){t.remove()}selectRootElement(e,t){let i=typeof e=="string"?this.doc.querySelector(e):e;if(!i)throw new Re(-5104,!1);return t||(i.textContent=""),i}parentNode(e){return e.parentNode}nextSibling(e){return e.nextSibling}setAttribute(e,t,i,r){if(r){t=r+":"+t;let o=Tg[r];o?e.setAttributeNS(o,t,i):e.setAttribute(t,i)}else e.setAttribute(t,i)}removeAttribute(e,t,i){if(i){let r=Tg[i];r?e.removeAttributeNS(r,t):e.removeAttribute(`${i}:${t}`)}else e.removeAttribute(t)}addClass(e,t){e.classList.add(t)}removeClass(e,t){e.classList.remove(t)}setStyle(e,t,i,r){let o=t.startsWith("--");o&&(t=t.replace("%NS%",this.cssVarNamespace)),o||r&(vr.DashCase|vr.Important)?e.style.setProperty(t,i,r&vr.Important?"important":""):e.style[t]=i}removeStyle(e,t,i){let r=t.startsWith("--");r&&(t=t.replace("%NS%",this.cssVarNamespace)),r||i&vr.DashCase?e.style.removeProperty(t):e.style[t]=""}setProperty(e,t,i){e!=null&&(e[t]=i)}setValue(e,t){e.nodeValue=t}listen(e,t,i,r){if(typeof e=="string"&&(e=yr().getGlobalEventTarget(this.doc,e),!e))throw new Re(-5102,!1);let o=this.decoratePreventDefault(i);return this.tracingService?.wrapEventListener&&(o=this.tracingService.wrapEventListener(e,t,o)),this.eventManager.addEventListener(e,t,o,r)}decoratePreventDefault(e){return t=>{if(t==="__ngUnwrap__")return e;e(t)===!1&&t.preventDefault()}}};function iE(n){return n.tagName==="TEMPLATE"&&n.content!==void 0}var Sd=class extends vc{hostEl;sharedStylesHost;shadowRoot;constructor(e,t,i,r,o,s,a,c,l){super(e,r,o,a,c),this.hostEl=t,this.sharedStylesHost=l,this.shadowRoot=t.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let u=i.styles;u=oE(i.id,u).map(d=>d.replace(/%NS%/g,c));for(let d of u){let h=document.createElement("style");s&&h.setAttribute("nonce",s),h.textContent=d,this.shadowRoot.appendChild(h)}let f=i.getExternalStyles?.();if(f)for(let d of f){let h=Dg(d,r);s&&h.setAttribute("nonce",s),this.shadowRoot.appendChild(h)}}nodeOrShadowRoot(e){return e===this.hostEl?this.shadowRoot:e}appendChild(e,t){return super.appendChild(this.nodeOrShadowRoot(e),t)}insertBefore(e,t,i){return super.insertBefore(this.nodeOrShadowRoot(e),t,i)}removeChild(e,t){return super.removeChild(null,t)}parentNode(e){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(e)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},yc=class extends vc{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(e,t,i,r,o,s,a,c,l){super(e,o,s,a,c),this.sharedStylesHost=t,this.removeStylesOnCompDestroy=r;let u=i.styles,f=l?oE(l,u):u;this.styles=f.map(d=>d.replace(/%NS%/g,c)),this.styleUrls=i.getExternalStyles?.(l)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&Hr.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},Ed=class extends yc{contentAttr;hostAttr;constructor(e,t,i,r,o,s,a,c,l){let u=r+"-"+i.id;super(e,t,i,o,s,a,c,l,u),this.contentAttr=HI(u),this.hostAttr=zI(u)}applyToHost(e){this.applyStyles(),this.setAttribute(e,this.hostAttr,"")}createElement(e,t){let i=super.createElement(e,t);return super.setAttribute(i,this.contentAttr,""),i}};var Md=class n extends mc{supportsDOMEvents=!0;static makeCurrent(){Mg(new n)}onAndCancel(e,t,i,r){return e.addEventListener(t,i,r),()=>{e.removeEventListener(t,i,r)}}dispatchEvent(e,t){e.dispatchEvent(t)}remove(e){e.remove()}createElement(e,t){return t=t||this.getDefaultDocument(),t.createElement(e)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(e){return e.nodeType===Node.ELEMENT_NODE}isShadowRoot(e){return e instanceof DocumentFragment}getGlobalEventTarget(e,t){return t==="window"?window:t==="document"?e:t==="body"?e.body:null}getBaseHref(e){let t=GI();return t==null?null:jI(t)}resetBaseElement(){_c=null}getUserAgent(){return window.navigator.userAgent}getCookie(e){return wg(document.cookie,e)}},_c=null;function GI(){return _c=_c||document.head.querySelector("base"),_c?_c.getAttribute("href"):null}function jI(n){return new URL(n,document.baseURI).pathname}var sE=["alt","control","meta","shift"],WI={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},$I={alt:n=>n.altKey,control:n=>n.ctrlKey,meta:n=>n.metaKey,shift:n=>n.shiftKey},aE=(()=>{class n extends gc{constructor(t){super(t)}supports(t){return n.parseEventName(t)!=null}addEventListener(t,i,r,o){let s=n.parseEventName(i),a=n.eventCallback(s.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>yr().onAndCancel(t,s.domEventName,a,o))}static parseEventName(t){let i=t.toLowerCase().split("."),r=i.shift();if(i.length===0||!(r==="keydown"||r==="keyup"))return null;let o=n._normalizeKey(i.pop()),s="",a=i.indexOf("code");if(a>-1&&(i.splice(a,1),s="code."),sE.forEach(l=>{let u=i.indexOf(l);u>-1&&(i.splice(u,1),s+=l+".")}),s+=o,i.length!=0||o.length===0)return null;let c={};return c.domEventName=r,c.fullKey=s,c}static matchEventFullKeyCode(t,i){let r=WI[t.key]||t.key,o="";return i.indexOf("code.")>-1&&(r=t.code,o="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),sE.forEach(s=>{if(s!==r){let a=$I[s];a(t)&&(o+=s+".")}}),o+=r,o===i)}static eventCallback(t,i,r){return o=>{n.matchEventFullKeyCode(o,t)&&r.runGuarded(()=>i(o))}}static _normalizeKey(t){return t==="esc"?"escape":t}static \u0275fac=function(i){return new(i||n)(Xe(Yt))};static \u0275prov=gt({token:n,factory:n.\u0275fac})}return n})();async function Pg(n,e,t){let i=_e({rootComponent:n},qI(e,t));return XS(i)}function qI(n,e){return{platformRef:e?.platformRef,appProviders:[...JI,...n?.providers??[]],platformProviders:KI}}function XI(){Md.makeCurrent()}function YI(){return new mr}function ZI(){return Ym(document),document}var KI=[{provide:Ya,useValue:eE},{provide:Du,useValue:XI,multi:!0},{provide:Yt,useFactory:ZI}];var JI=[{provide:Ha,useValue:"root"},{provide:mr,useFactory:YI},{provide:bd,useClass:xd,multi:!0},{provide:bd,useClass:aE,multi:!0},Ng,{provide:Oo,useClass:Ig},{provide:Ig,useExisting:Oo},Ag,{provide:No,useExisting:Ng},[]];var cE=(()=>{class n{_doc;constructor(t){this._doc=t}getTitle(){return this._doc.title}setTitle(t){this._doc.title=t||""}static \u0275fac=function(i){return new(i||n)(Xe(Yt))};static \u0275prov=gt({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Ge="primary",Rc=Symbol("RouteTitle"),Ug=class{params;constructor(e){this.params=e||{}}has(e){return Object.prototype.hasOwnProperty.call(this.params,e)}get(e){if(this.has(e)){let t=this.params[e];return Array.isArray(t)?t[0]:t}return null}getAll(e){if(this.has(e)){let t=this.params[e];return Array.isArray(t)?t:[t]}return[]}get keys(){return Object.keys(this.params)}};function Gs(n){return new Ug(n)}function Lg(n,e,t){for(let i=0;i<n.length;i++){let r=n[i],o=e[i];if(r[0]===":")t[r.substring(1)]=o;else if(r!==o.path)return!1}return!0}function eR(n,e,t){let i=t.path.split("/"),r=i.indexOf("**");if(r===-1){if(i.length>n.length||t.pathMatch==="full"&&(e.hasChildren()||i.length<n.length))return null;let c={},l=n.slice(0,i.length);return Lg(i,l,c)?{consumed:l,posParams:c}:null}if(r!==i.lastIndexOf("**"))return null;let o=i.slice(0,r),s=i.slice(r+1);if(o.length+s.length>n.length||t.pathMatch==="full"&&e.hasChildren()&&t.path!=="**")return null;let a={};return!Lg(o,n.slice(0,o.length),a)||!Lg(s,n.slice(n.length-s.length),a)?null:{consumed:n,posParams:a}}function Id(n){return new Promise((e,t)=>{n.pipe(dr()).subscribe({next:i=>e(i),error:i=>t(i)})})}function tR(n,e){if(n.length!==e.length)return!1;for(let t=0;t<n.length;++t)if(!Zi(n[t],e[t]))return!1;return!0}function Zi(n,e){let t=n?Bg(n):void 0,i=e?Bg(e):void 0;if(!t||!i||t.length!=i.length)return!1;let r;for(let o=0;o<t.length;o++)if(r=t[o],!vE(n[r],e[r]))return!1;return!0}function Bg(n){return[...Object.keys(n),...Object.getOwnPropertySymbols(n)]}function vE(n,e){if(Array.isArray(n)&&Array.isArray(e)){if(n.length!==e.length)return!1;let t=[...n].sort(),i=[...e].sort();return t.every((r,o)=>i[o]===r)}else return n===e}function nR(n){return n.length>0?n[n.length-1]:null}function zo(n){return Kl(n)?n:ac(n)?qt(Promise.resolve(n)):Ke(n)}function yE(n){return Kl(n)?Id(n):Promise.resolve(n)}var iR={exact:SE,subset:EE},_E={exact:rR,subset:oR,ignored:()=>!0},xE={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},Vg={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};function lE(n,e,t){return iR[t.paths](n.root,e.root,t.matrixParams)&&_E[t.queryParams](n.queryParams,e.queryParams)&&!(t.fragment==="exact"&&n.fragment!==e.fragment)}function rR(n,e){return Zi(n,e)}function SE(n,e,t){if(!Bo(n.segments,e.segments)||!Td(n.segments,e.segments,t)||n.numberOfChildren!==e.numberOfChildren)return!1;for(let i in e.children)if(!n.children[i]||!SE(n.children[i],e.children[i],t))return!1;return!0}function oR(n,e){return Object.keys(e).length<=Object.keys(n).length&&Object.keys(e).every(t=>vE(n[t],e[t]))}function EE(n,e,t){return bE(n,e,e.segments,t)}function bE(n,e,t,i){if(n.segments.length>t.length){let r=n.segments.slice(0,t.length);return!(!Bo(r,t)||e.hasChildren()||!Td(r,t,i))}else if(n.segments.length===t.length){if(!Bo(n.segments,t)||!Td(n.segments,t,i))return!1;for(let r in e.children)if(!n.children[r]||!EE(n.children[r],e.children[r],i))return!1;return!0}else{let r=t.slice(0,n.segments.length),o=t.slice(n.segments.length);return!Bo(n.segments,r)||!Td(n.segments,r,i)||!n.children[Ge]?!1:bE(n.children[Ge],e,o,i)}}function Td(n,e,t){return e.every((i,r)=>_E[t](n[r].parameters,i.parameters))}var Di=class{root;queryParams;fragment;_queryParamMap;constructor(e=new vt([],{}),t={},i=null){this.root=e,this.queryParams=t,this.fragment=i}get queryParamMap(){return this._queryParamMap??=Gs(this.queryParams),this._queryParamMap}toString(){return cR.serialize(this)}},vt=class{segments;children;parent=null;constructor(e,t){this.segments=e,this.children=t,Object.values(t).forEach(i=>i.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return Dd(this)}},Uo=class{path;parameters;_parameterMap;constructor(e,t){this.path=e,this.parameters=t}get parameterMap(){return this._parameterMap??=Gs(this.parameters),this._parameterMap}toString(){return wE(this)}};function sR(n,e){return Bo(n,e)&&n.every((t,i)=>Zi(t.parameters,e[i].parameters))}function Bo(n,e){return n.length!==e.length?!1:n.every((t,i)=>t.path===e[i].path)}function aR(n,e){let t=[];return Object.entries(n.children).forEach(([i,r])=>{i===Ge&&(t=t.concat(e(r,i)))}),Object.entries(n.children).forEach(([i,r])=>{i!==Ge&&(t=t.concat(e(r,i)))}),t}var Vd=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275prov=en({token:n,factory:()=>new Vo})}return n})(),Vo=class{parse(e){let t=new zg(e);return new Di(t.parseRootSegment(),t.parseQueryParams(),t.parseFragment())}serialize(e){let t=`/${xc(e.root,!0)}`,i=dR(e.queryParams),r=typeof e.fragment=="string"?`#${lR(e.fragment)}`:"";return`${t}${i}${r}`}},cR=new Vo;function Dd(n){return n.segments.map(e=>wE(e)).join("/")}function xc(n,e){if(!n.hasChildren())return Dd(n);if(e){let t=n.children[Ge]?xc(n.children[Ge],!1):"",i=[];return Object.entries(n.children).forEach(([r,o])=>{r!==Ge&&i.push(`${r}:${xc(o,!1)}`)}),i.length>0?`${t}(${i.join("//")})`:t}else{let t=aR(n,(i,r)=>r===Ge?[xc(n.children[Ge],!1)]:[`${r}:${xc(i,!1)}`]);return Object.keys(n.children).length===1&&n.children[Ge]!=null?`${Dd(n)}/${t[0]}`:`${Dd(n)}/(${t.join("//")})`}}function ME(n){return encodeURIComponent(n).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function wd(n){return ME(n).replace(/%3B/gi,";")}function lR(n){return encodeURI(n)}function Hg(n){return ME(n).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function Ad(n){return decodeURIComponent(n)}function uE(n){return Ad(n.replace(/\+/g,"%20"))}function wE(n){return`${Hg(n.path)}${uR(n.parameters)}`}function uR(n){return Object.entries(n).map(([e,t])=>`;${Hg(e)}=${Hg(t)}`).join("")}function dR(n){let e=Object.entries(n).map(([t,i])=>Array.isArray(i)?i.map(r=>`${wd(t)}=${wd(r)}`).join("&"):`${wd(t)}=${wd(i)}`).filter(t=>t);return e.length?`?${e.join("&")}`:""}var fR=/^[^\/()?;#]+/;function Og(n){let e=n.match(fR);return e?e[0]:""}var hR=/^[^\/()?;=#]+/;function pR(n){let e=n.match(hR);return e?e[0]:""}var mR=/^[^=?&#]+/;function gR(n){let e=n.match(mR);return e?e[0]:""}var vR=/^[^&#]+/;function yR(n){let e=n.match(vR);return e?e[0]:""}var zg=class{url;remaining;constructor(e){this.url=e,this.remaining=e}parseRootSegment(){for(;this.consumeOptional("/"););return this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new vt([],{}):new vt([],this.parseChildren())}parseQueryParams(){let e={};if(this.consumeOptional("?"))do this.parseQueryParam(e);while(this.consumeOptional("&"));return e}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(e=0){if(e>50)throw new Re(4010,!1);if(this.remaining==="")return{};this.consumeOptional("/");let t=[];for(this.peekStartsWith("(")||t.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),t.push(this.parseSegment());let i={};this.peekStartsWith("/(")&&(this.capture("/"),i=this.parseParens(!0,e));let r={};return this.peekStartsWith("(")&&(r=this.parseParens(!1,e)),(t.length>0||Object.keys(i).length>0)&&(r[Ge]=new vt(t,i)),r}parseSegment(){let e=Og(this.remaining);if(e===""&&this.peekStartsWith(";"))throw new Re(4009,!1);return this.capture(e),new Uo(Ad(e),this.parseMatrixParams())}parseMatrixParams(){let e={};for(;this.consumeOptional(";");)this.parseParam(e);return e}parseParam(e){let t=pR(this.remaining);if(!t)return;this.capture(t);let i="";if(this.consumeOptional("=")){let r=Og(this.remaining);r&&(i=r,this.capture(i))}e[Ad(t)]=Ad(i)}parseQueryParam(e){let t=gR(this.remaining);if(!t)return;this.capture(t);let i="";if(this.consumeOptional("=")){let s=yR(this.remaining);s&&(i=s,this.capture(i))}let r=uE(t),o=uE(i);if(Object.hasOwn(e,r)){let s=e[r];Array.isArray(s)||(s=[s],e[r]=s),s.push(o)}else e[r]=o}parseParens(e,t){let i=Object.create(null);for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let r=Og(this.remaining),o=this.remaining[r.length];if(o!=="/"&&o!==")"&&o!==";")throw new Re(4010,!1);let s;r.indexOf(":")>-1?(s=r.slice(0,r.indexOf(":")),this.capture(s),this.capture(":")):e&&(s=Ge);let a=this.parseChildren(t+1);i[s??Ge]=Object.keys(a).length===1&&a[Ge]?a[Ge]:new vt([],a),this.consumeOptional("//")}return i}peekStartsWith(e){return this.remaining.startsWith(e)}consumeOptional(e){return this.peekStartsWith(e)?(this.remaining=this.remaining.substring(e.length),!0):!1}capture(e){if(!this.consumeOptional(e))throw new Re(4011,!1)}};function CE(n){return n.segments.length>0?new vt([],{[Ge]:n}):n}function TE(n){let e=Object.create(null);for(let[i,r]of Object.entries(n.children)){let o=TE(r);if(i===Ge&&o.segments.length===0&&o.hasChildren())for(let[s,a]of Object.entries(o.children))e[s]=a;else(o.segments.length>0||o.hasChildren())&&(e[i]=o)}let t=new vt(n.segments,e);return _R(t)}function _R(n){if(n.numberOfChildren===1&&n.children[Ge]){let e=n.children[Ge];return new vt(n.segments.concat(e.segments),e.children)}return n}function js(n){return n instanceof Di}function xR(n,e,t=null,i=null,r=new Vo){let o=DE(n);return AE(o,e,t,i,r)}function DE(n){let e;function t(o){let s={};for(let c of o.children){let l=t(c);s[c.outlet]=l}let a=new vt(o.url,s);return o===n&&(e=a),a}let i=t(n.root),r=CE(i);return e??r}function AE(n,e,t,i,r){let o=n;for(;o.parent;)o=o.parent;if(e.length===0)return Fg(o,o,o,t,i,r);let s=SR(e);if(s.toRoot())return Fg(o,o,new vt([],{}),t,i,r);let a=ER(s,o,n),c=a.processChildren?Ec(a.segmentGroup,a.index,s.commands):RE(a.segmentGroup,a.index,s.commands);return Fg(o,a.segmentGroup,c,t,i,r)}function Rd(n){return typeof n=="object"&&n!=null&&!n.outlets&&!n.segmentPath}function wc(n){return typeof n=="object"&&n!=null&&n.outlets}function dE(n,e,t){n||="\u0275";let i=new Di;return i.queryParams={[n]:e},t.parse(t.serialize(i)).queryParams[n]}function Fg(n,e,t,i,r,o){let s={};for(let[l,u]of Object.entries(i??{}))s[l]=Array.isArray(u)?u.map(f=>dE(l,f,o)):dE(l,u,o);let a;n===e?a=t:a=IE(n,e,t);let c=CE(TE(a));return new Di(c,s,r)}function IE(n,e,t){let i=Object.create(null);return Object.entries(n.children).forEach(([r,o])=>{o===e?i[r]=t:i[r]=IE(o,e,t)}),new vt(n.segments,i)}var Nd=class{isAbsolute;numberOfDoubleDots;commands;constructor(e,t,i){if(this.isAbsolute=e,this.numberOfDoubleDots=t,this.commands=i,e&&i.length>0&&Rd(i[0]))throw new Re(4003,!1);let r=i.find(wc);if(r&&r!==nR(i))throw new Re(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function SR(n){if(typeof n[0]=="string"&&n.length===1&&n[0]==="/")return new Nd(!0,0,n);let e=0,t=!1,i=n.reduce((r,o,s)=>{if(typeof o=="object"&&o!=null){if(o.outlets){let a={};return Object.entries(o.outlets).forEach(([c,l])=>{a[c]=typeof l=="string"?l.split("/"):l}),[...r,{outlets:a}]}if(o.segmentPath)return[...r,o.segmentPath]}return typeof o!="string"?[...r,o]:s===0?(o.split("/").forEach((a,c)=>{c==0&&a==="."||(c==0&&a===""?t=!0:a===".."?e++:a!=""&&r.push(a))}),r):[...r,o]},[]);return new Nd(t,e,i)}var Hs=class{segmentGroup;processChildren;index;constructor(e,t,i){this.segmentGroup=e,this.processChildren=t,this.index=i}};function ER(n,e,t){if(n.isAbsolute)return new Hs(e,!0,0);if(!t)return new Hs(e,!1,NaN);if(t.parent===null)return new Hs(t,!0,0);let i=Rd(n.commands[0])?0:1,r=t.segments.length-1+i;return bR(t,r,n.numberOfDoubleDots)}function bR(n,e,t){let i=n,r=e,o=t;for(;o>r;){if(o-=r,i=i.parent,!i)throw new Re(4005,!1);r=i.segments.length}return new Hs(i,!1,r-o)}function MR(n){return wc(n[0])?n[0].outlets:{[Ge]:n}}function RE(n,e,t){if(n??=new vt([],{}),n.segments.length===0&&n.hasChildren())return Ec(n,e,t);let i=wR(n,e,t),r=t.slice(i.commandIndex);if(i.match&&i.pathIndex<n.segments.length){let o=new vt(n.segments.slice(0,i.pathIndex),{});return o.children[Ge]=new vt(n.segments.slice(i.pathIndex),n.children),Ec(o,0,r)}else return i.match&&r.length===0?new vt(n.segments,{}):i.match&&!n.hasChildren()?Gg(n,e,t):i.match?Ec(n,0,r):Gg(n,e,t)}function Ec(n,e,t){if(t.length===0)return new vt(n.segments,{});{let i=MR(t),r=Object.create(null);if(Object.keys(i).some(o=>o!==Ge)&&n.children[Ge]&&n.numberOfChildren===1&&n.children[Ge].segments.length===0){let o=Ec(n.children[Ge],e,t);return new vt(n.segments,o.children)}return Object.entries(i).forEach(([o,s])=>{typeof s=="string"&&(s=[s]),s!==null&&(r[o]=RE(n.children[o],e,s))}),Object.entries(n.children).forEach(([o,s])=>{i[o]===void 0&&(r[o]=s)}),new vt(n.segments,r)}}function wR(n,e,t){let i=0,r=e,o={match:!1,pathIndex:0,commandIndex:0};for(;r<n.segments.length;){if(i>=t.length)return o;let s=n.segments[r],a=t[i];if(wc(a))break;let c=`${a}`,l=i<t.length-1?t[i+1]:null;if(r>0&&c===void 0)break;if(c&&l&&typeof l=="object"&&l.outlets===void 0){if(!hE(c,l,s))return o;i+=2}else{if(!hE(c,{},s))return o;i++}r++}return{match:!0,pathIndex:r,commandIndex:i}}function Gg(n,e,t){let i=n.segments.slice(0,e),r=0;for(;r<t.length;){let o=t[r];if(wc(o)){let c=CR(o.outlets);return new vt(i,c)}if(r===0&&Rd(t[0])){let c=n.segments[e];i.push(new Uo(c.path,fE(t[0]))),r++;continue}let s=wc(o)?o.outlets[Ge]:`${o}`,a=r<t.length-1?t[r+1]:null;s&&a&&Rd(a)?(i.push(new Uo(s,fE(a))),r+=2):(i.push(new Uo(s,{})),r++)}return new vt(i,{})}function CR(n){let e={};return Object.entries(n).forEach(([t,i])=>{typeof i=="string"&&(i=[i]),i!==null&&(e[t]=Gg(new vt([],{}),0,i))}),e}function fE(n){let e={};return Object.entries(n).forEach(([t,i])=>e[t]=`${i}`),e}function hE(n,e,t){return n==t.path&&Zi(e,t.parameters)}var bc="imperative",pn=(function(n){return n[n.NavigationStart=0]="NavigationStart",n[n.NavigationEnd=1]="NavigationEnd",n[n.NavigationCancel=2]="NavigationCancel",n[n.NavigationError=3]="NavigationError",n[n.RoutesRecognized=4]="RoutesRecognized",n[n.ResolveStart=5]="ResolveStart",n[n.ResolveEnd=6]="ResolveEnd",n[n.GuardsCheckStart=7]="GuardsCheckStart",n[n.GuardsCheckEnd=8]="GuardsCheckEnd",n[n.RouteConfigLoadStart=9]="RouteConfigLoadStart",n[n.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",n[n.ChildActivationStart=11]="ChildActivationStart",n[n.ChildActivationEnd=12]="ChildActivationEnd",n[n.ActivationStart=13]="ActivationStart",n[n.ActivationEnd=14]="ActivationEnd",n[n.Scroll=15]="Scroll",n[n.NavigationSkipped=16]="NavigationSkipped",n})(pn||{}),ui=class{id;url;constructor(e,t){this.id=e,this.url=t}},Ws=class extends ui{type=pn.NavigationStart;navigationTrigger;restoredState;constructor(e,t,i="imperative",r=null){super(e,t),this.navigationTrigger=i,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},$r=class extends ui{urlAfterRedirects;type=pn.NavigationEnd;constructor(e,t,i){super(e,t),this.urlAfterRedirects=i}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},In=(function(n){return n[n.Redirect=0]="Redirect",n[n.SupersededByNewNavigation=1]="SupersededByNewNavigation",n[n.NoDataFromResolver=2]="NoDataFromResolver",n[n.GuardRejected=3]="GuardRejected",n[n.Aborted=4]="Aborted",n})(In||{}),Pd=(function(n){return n[n.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",n[n.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",n})(Pd||{}),Ci=class extends ui{reason;code;type=pn.NavigationCancel;constructor(e,t,i,r){super(e,t),this.reason=i,this.code=r}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}};function NE(n){return n instanceof Ci&&(n.code===In.Redirect||n.code===In.SupersededByNewNavigation)}var qr=class extends ui{reason;code;type=pn.NavigationSkipped;constructor(e,t,i,r){super(e,t),this.reason=i,this.code=r}},$s=class extends ui{error;target;type=pn.NavigationError;constructor(e,t,i,r){super(e,t),this.error=i,this.target=r}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},Ld=class extends ui{urlAfterRedirects;state;type=pn.RoutesRecognized;constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},jg=class extends ui{urlAfterRedirects;state;type=pn.GuardsCheckStart;constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Wg=class extends ui{urlAfterRedirects;state;shouldActivate;type=pn.GuardsCheckEnd;constructor(e,t,i,r,o){super(e,t),this.urlAfterRedirects=i,this.state=r,this.shouldActivate=o}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},$g=class extends ui{urlAfterRedirects;state;type=pn.ResolveStart;constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},qg=class extends ui{urlAfterRedirects;state;type=pn.ResolveEnd;constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Xg=class{route;type=pn.RouteConfigLoadStart;constructor(e){this.route=e}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},Yg=class{route;type=pn.RouteConfigLoadEnd;constructor(e){this.route=e}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},Zg=class{snapshot;type=pn.ChildActivationStart;constructor(e){this.snapshot=e}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Kg=class{snapshot;type=pn.ChildActivationEnd;constructor(e){this.snapshot=e}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Jg=class{snapshot;type=pn.ActivationStart;constructor(e){this.snapshot=e}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Qg=class{snapshot;type=pn.ActivationEnd;constructor(e){this.snapshot=e}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}};var qs=class{},Cc=class{},Xs=class{url;navigationBehaviorOptions;constructor(e,t){this.url=e,this.navigationBehaviorOptions=t}};function TR(n){return!(n instanceof qs)&&!(n instanceof Xs)&&!(n instanceof Cc)}var ev=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return this.route?.snapshot._environmentInjector??this.rootInjector}constructor(e){this.rootInjector=e,this.children=new Nc(this.rootInjector)}},Nc=(()=>{class n{rootInjector;contexts=new Map;constructor(t){this.rootInjector=t}onChildOutletCreated(t,i){let r=this.getOrCreateContext(t);r.outlet=i,this.contexts.set(t,r)}onChildOutletDestroyed(t){let i=this.getContext(t);i&&(i.outlet=null,i.attachRef=null)}onOutletDeactivated(){let t=this.contexts;return this.contexts=new Map,t}onOutletReAttached(t){this.contexts=t}getOrCreateContext(t){let i=this.getContext(t);return i||(i=new ev(this.rootInjector),this.contexts.set(t,i)),i}getContext(t){return this.contexts.get(t)||null}static \u0275fac=function(i){return new(i||n)(Xe(Jt))};static \u0275prov=gt({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Od=class{_root;constructor(e){this._root=e}get root(){return this._root.value}parent(e){let t=this.pathFromRoot(e);return t.length>1?t[t.length-2]:null}children(e){let t=tv(e,this._root);return t?t.children.map(i=>i.value):[]}firstChild(e){let t=tv(e,this._root);return t&&t.children.length>0?t.children[0].value:null}siblings(e){let t=nv(e,this._root);return t.length<2?[]:t[t.length-2].children.map(r=>r.value).filter(r=>r!==e)}pathFromRoot(e){return nv(e,this._root).map(t=>t.value)}};function tv(n,e){if(n===e.value)return e;for(let t of e.children){let i=tv(n,t);if(i)return i}return null}function nv(n,e){if(n===e.value)return[e];for(let t of e.children){let i=nv(n,t);if(i.length)return i.unshift(e),i}return[]}var Zn=class{value;children;constructor(e,t){this.value=e,this.children=t}toString(){return`TreeNode(${this.value})`}};function Vs(n){let e={};return n&&n.children.forEach(t=>e[t.value.outlet]=t),e}var Fd=class extends Od{snapshot;constructor(e,t){super(e),this.snapshot=t,fv(this,e)}toString(){return this.snapshot.toString()}};function PE(n,e){let t=DR(n,e),i=new un([new Uo("",{})]),r=new un({}),o=new un({}),s=new un({}),a=new un(""),c=new Ho(i,r,s,a,o,Ge,n,t.root);return c.snapshot=t.root,new Fd(new Zn(c,[]),t)}function DR(n,e){let t={},i={},r={},s=new Tc([],t,r,"",i,Ge,n,null,{},e);return new kd("",new Zn(s,[]))}var Ho=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;_localInjector;constructor(e,t,i,r,o,s,a,c){this.urlSubject=e,this.paramsSubject=t,this.queryParamsSubject=i,this.fragmentSubject=r,this.dataSubject=o,this.outlet=s,this.component=a,this._futureSnapshot=c,this.title=this.dataSubject?.pipe(kt(l=>l[Rc]))??Ke(void 0),this.url=e,this.params=t,this.queryParams=i,this.fragment=r,this.data=o}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(kt(e=>Gs(e))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(kt(e=>Gs(e))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}},AR="always";function dv(n,e,t){let i,{routeConfig:r}=n;return e!==null&&(t==="always"||r?.path===""||!e.component&&!e.routeConfig?.loadComponent)?i={params:_e(_e({},e.params),n.params),data:_e(_e({},e.data),n.data),resolve:_e(_e(_e(_e({},n.data),e.data),r?.data),n._resolvedData)}:i={params:_e({},n.params),data:_e({},n.data),resolve:_e(_e({},n.data),n._resolvedData??{})},r&&OE(r)&&(i.resolve[Rc]=r.title),i}var Tc=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;_environmentInjector;get title(){return this.data?.[Rc]}constructor(e,t,i,r,o,s,a,c,l,u){this.url=e,this.params=t,this.queryParams=i,this.fragment=r,this.data=o,this.outlet=s,this.component=a,this.routeConfig=c,this._resolve=l,this._environmentInjector=u}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=Gs(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=Gs(this.queryParams),this._queryParamMap}toString(){let e=this.url.map(i=>i.toString()).join("/"),t=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${e}', path:'${t}')`}},kd=class extends Od{url;constructor(e,t){super(t),this.url=e,fv(this,t)}toString(){return LE(this._root)}};function fv(n,e){e.value._routerState=n,e.children.forEach(t=>fv(n,t))}function LE(n){let e=n.children.length>0?` { ${n.children.map(LE).join(", ")} } `:"";return`${n.value}${e}`}function kg(n){if(n.snapshot){let e=n.snapshot,t=n._futureSnapshot;n.snapshot=t,Zi(e.queryParams,t.queryParams)||n.queryParamsSubject.next(t.queryParams),e.fragment!==t.fragment&&n.fragmentSubject.next(t.fragment),Zi(e.params,t.params)||n.paramsSubject.next(t.params),tR(e.url,t.url)||n.urlSubject.next(t.url),Zi(e.data,t.data)||n.dataSubject.next(t.data)}else n.snapshot=n._futureSnapshot,n.dataSubject.next(n._futureSnapshot.data)}function iv(n,e){let t=Zi(n.params,e.params)&&sR(n.url,e.url),i=!n.parent!=!e.parent;return t&&!i&&(!n.parent||iv(n.parent,e.parent))}function OE(n){return typeof n.title=="string"||n.title===null}var IR=new Ne(""),FE=(()=>{class n{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=Ge;activateEvents=new Dn;deactivateEvents=new Dn;attachEvents=new Dn;detachEvents=new Dn;routerOutletData=Eg();parentContexts=re(Nc);location=re(Fo);changeDetector=re(bg);inputBinder=re(Hd,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(t){if(t.name){let{firstChange:i,previousValue:r}=t.name;if(i)return;this.isTrackedInParentContexts(r)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(r)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(t){return this.parentContexts.getContext(t)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let t=this.parentContexts.getContext(this.name);t?.route&&(t.attachRef?this.attach(t.attachRef,t.route):this.activateWith(t.route,t.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new Re(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new Re(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new Re(4012,!1);this.location.detach();let t=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(t.instance),t}attach(t,i){this.activated=t,this._activatedRoute=i,this.location.insert(t.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(t.instance)}deactivate(){if(this.activated){let t=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(t)}}activateWith(t,i){if(this.isActivated)throw new Re(4013,!1);this._activatedRoute=t;let r=this.location,s=t.snapshot.component,a=this.parentContexts.getOrCreateContext(this.name).children,c=new rv(t,a,r.injector,this.routerOutletData);this.activated=r.createComponent(s,{index:r.length,injector:c,environmentInjector:i}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(i){return new(i||n)};static \u0275dir=ud({type:n,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[Ju]})}return n})(),rv=class{route;childContexts;parent;outletData;constructor(e,t,i,r){this.route=e,this.childContexts=t,this.parent=i,this.outletData=r}get(e,t){return e===Ho?this.route:e===Nc?this.childContexts:e===IR?this.outletData:this.parent.get(e,t)}},Hd=new Ne("");var kE=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275cmp=lc({type:n,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(i,r){i&1&&fd(0,"router-outlet")},dependencies:[FE],encapsulation:2,changeDetection:1})}return n})();function hv(n){let e=n.children&&n.children.map(hv),t=e?xt(_e({},n),{children:e}):_e({},n);return!t.component&&!t.loadComponent&&(e||t.loadChildren)&&t.outlet&&t.outlet!==Ge&&(t.component=kE),t}function RR(n,e,t){let i=new Set,r=Dc(n,e._root,t?t._root:void 0,i);return{newlyCreatedRoutes:i,state:new Fd(r,e)}}function Dc(n,e,t,i){if(t&&n.shouldReuseRoute(e.value,t.value.snapshot)){let r=t.value;r._futureSnapshot=e.value;let o=NR(n,e,t,i);return new Zn(r,o)}else{if(n.shouldAttach(e.value)){let s=n.retrieve(e.value);if(s!==null){let a=s.route;return a.value._futureSnapshot=e.value,a.children=e.children.map(c=>Dc(n,c,void 0,i)),a}}let r=PR(e.value);i.add(r);let o=e.children.map(s=>Dc(n,s,void 0,i));return new Zn(r,o)}}function NR(n,e,t,i){return e.children.map(r=>{for(let o of t.children)if(n.shouldReuseRoute(r.value,o.value.snapshot))return Dc(n,r,o,i);return Dc(n,r,void 0,i)})}function PR(n){return new Ho(new un(n.url),new un(n.params),new un(n.queryParams),new un(n.fragment),new un(n.data),n.outlet,n.component,n)}var Ac=class{redirectTo;navigationBehaviorOptions;constructor(e,t){this.redirectTo=e,this.navigationBehaviorOptions=t}},UE="ngNavigationCancelingError";function Ud(n,e){let{redirectTo:t,navigationBehaviorOptions:i}=js(e)?{redirectTo:e,navigationBehaviorOptions:void 0}:e,r=BE(!1,In.Redirect);return r.url=t,r.navigationBehaviorOptions=i,r}function BE(n,e){let t=new Error(`NavigationCancelingError: ${n||""}`);return t[UE]=!0,t.cancellationCode=e,t}function LR(n){return VE(n)&&js(n.url)}function VE(n){return!!n&&n[UE]}var ov=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(e,t,i,r,o){this.routeReuseStrategy=e,this.futureState=t,this.currState=i,this.forwardEvent=r,this.inputBindingEnabled=o}activate(e){let t=this.futureState._root,i=this.currState?this.currState._root:null;this.deactivateChildRoutes(t,i,e),kg(this.futureState.root),this.activateChildRoutes(t,i,e)}deactivateChildRoutes(e,t,i){let r=Vs(t);e.children.forEach(o=>{let s=o.value.outlet;this.deactivateRoutes(o,r[s],i),delete r[s]}),Object.values(r).forEach(o=>{this.deactivateRouteAndItsChildren(o,i)})}deactivateRoutes(e,t,i){let r=e.value,o=t?t.value:null;if(r===o)if(r.component){let s=i.getContext(r.outlet);s&&this.deactivateChildRoutes(e,t,s.children)}else this.deactivateChildRoutes(e,t,i);else o&&this.deactivateRouteAndItsChildren(t,i)}deactivateRouteAndItsChildren(e,t){e.value.component&&this.routeReuseStrategy.shouldDetach(e.value.snapshot)?this.detachAndStoreRouteSubtree(e,t):this.deactivateRouteAndOutlet(e,t)}detachAndStoreRouteSubtree(e,t){let i=t.getContext(e.value.outlet),r=i&&e.value.component?i.children:t,o=Vs(e);for(let s of Object.values(o))this.deactivateRouteAndItsChildren(s,r);if(i&&i.outlet){let s=i.outlet.detach(),a=i.children.onOutletDeactivated();this.routeReuseStrategy.store(e.value.snapshot,{componentRef:s,route:e,contexts:a})}}deactivateRouteAndOutlet(e,t){let i=t.getContext(e.value.outlet),r=i&&e.value.component?i.children:t,o=Vs(e);for(let s of Object.values(o))this.deactivateRouteAndItsChildren(s,r);i&&(i.outlet&&(i.outlet.deactivate(),i.children.onOutletDeactivated()),i.attachRef=null,i.route=null),e.value._localInjector?.destroy()}activateChildRoutes(e,t,i){let r=Vs(t);e.children.forEach(o=>{this.activateRoutes(o,r[o.value.outlet],i),this.forwardEvent(new Qg(o.value.snapshot))}),e.children.length&&this.forwardEvent(new Kg(e.value.snapshot))}activateRoutes(e,t,i){let r=e.value,o=t?t.value:null;if(kg(r),r===o)if(r.component){let s=i.getOrCreateContext(r.outlet);this.activateChildRoutes(e,t,s.children)}else this.activateChildRoutes(e,t,i);else if(r.component){let s=i.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let a=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),s.children.onOutletReAttached(a.contexts),s.attachRef=a.componentRef,s.route=a.route.value,s.outlet&&s.outlet.attach(a.componentRef,a.route.value),kg(a.route.value),this.activateChildRoutes(e,null,s.children)}else s.attachRef=null,s.route=r,s.outlet&&s.outlet.activateWith(r,s.injector),this.activateChildRoutes(e,null,s.children)}else this.activateChildRoutes(e,null,i)}},Bd=class{path;route;constructor(e){this.path=e,this.route=this.path[this.path.length-1]}},zs=class{component;route;constructor(e,t){this.component=e,this.route=t}};function OR(n,e,t){let i=n._root,r=e?e._root:null;return Sc(i,r,t,[i.value])}function FR(n){let e=n.routeConfig?n.routeConfig.canActivateChild:null;return!e||e.length===0?null:{node:n,guards:e}}function Zs(n,e){let t=Symbol(),i=e.get(n,t);return i===t?typeof n=="function"&&!wp(n)?n:e.get(n):i}function Sc(n,e,t,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=Vs(e);return n.children.forEach(s=>{kR(s,o[s.value.outlet],t,i.concat([s.value]),r),delete o[s.value.outlet]}),Object.entries(o).forEach(([s,a])=>Mc(a,t.getContext(s),r)),r}function kR(n,e,t,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=n.value,s=e?e.value:null,a=t?t.getContext(n.value.outlet):null;if(s&&o.routeConfig===s.routeConfig){let c=UR(s,o,o.routeConfig.runGuardsAndResolvers);c?r.canActivateChecks.push(new Bd(i)):(o.data=s.data,o._resolvedData=s._resolvedData),o.component?Sc(n,e,a?a.children:null,i,r):Sc(n,e,t,i,r),c&&a&&a.outlet&&a.outlet.isActivated&&r.canDeactivateChecks.push(new zs(a.outlet.component,s))}else s&&Mc(e,a,r),r.canActivateChecks.push(new Bd(i)),o.component?Sc(n,null,a?a.children:null,i,r):Sc(n,null,t,i,r);return r}function UR(n,e,t){if(typeof t=="function")return yn(e._environmentInjector,()=>t(n,e));switch(t){case"pathParamsChange":return!Bo(n.url,e.url);case"pathParamsOrQueryParamsChange":return!Bo(n.url,e.url)||!Zi(n.queryParams,e.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!iv(n,e)||!Zi(n.queryParams,e.queryParams);default:return!iv(n,e)}}function Mc(n,e,t){let i=Vs(n),r=n.value;Object.entries(i).forEach(([o,s])=>{r.component?e?Mc(s,e.children.getContext(o),t):Mc(s,null,t):Mc(s,e,t)}),r.component?e&&e.outlet&&e.outlet.isActivated?t.canDeactivateChecks.push(new zs(e.outlet.component,r)):t.canDeactivateChecks.push(new zs(null,r)):t.canDeactivateChecks.push(new zs(null,r))}function Pc(n){return typeof n=="function"}function BR(n){return typeof n=="boolean"}function VR(n){return n&&Pc(n.canLoad)}function HR(n){return n&&Pc(n.canActivate)}function zR(n){return n&&Pc(n.canActivateChild)}function GR(n){return n&&Pc(n.canDeactivate)}function jR(n){return n&&Pc(n.canMatch)}function HE(n){return n instanceof yo||n?.name==="EmptyError"}var Cd=Symbol("INITIAL_VALUE");function Ys(){return oi(n=>ap(n.map(e=>e.pipe(ur(1),lp(Cd)))).pipe(kt(e=>{for(let t of e)if(t!==!0){if(t===Cd)return Cd;if(t===!1||WR(t))return t}return!0}),lr(e=>e!==Cd),ur(1)))}function WR(n){return js(n)||n instanceof Ac}function zE(n){return n.aborted?Ke(void 0).pipe(ur(1)):new nt(e=>{let t=()=>{e.next(),e.complete()};return n.addEventListener("abort",t),()=>n.removeEventListener("abort",t)})}function GE(n){return Ra(zE(n))}function $R(n){return Tn(e=>{let{targetSnapshot:t,currentSnapshot:i,guards:{canActivateChecks:r,canDeactivateChecks:o}}=e;return o.length===0&&r.length===0?Ke(xt(_e({},e),{guardsResult:!0})):qR(o,t,i).pipe(Tn(s=>s&&BR(s)?XR(t,r,n):Ke(s)),kt(s=>xt(_e({},e),{guardsResult:s})))})}function qR(n,e,t){return qt(n).pipe(Tn(i=>QR(i.component,i.route,t,e)),dr(i=>i!==!0,!0))}function XR(n,e,t){return qt(e).pipe(Jl(i=>ms(ZR(i.route.parent,t),YR(i.route,t),JR(n,i.path),KR(n,i.route))),dr(i=>i!==!0,!0))}function YR(n,e){return n!==null&&e&&e(new Jg(n)),Ke(!0)}function ZR(n,e){return n!==null&&e&&e(new Zg(n)),Ke(!0)}function KR(n,e){let t=e.routeConfig?e.routeConfig.canActivate:null;if(!t||t.length===0)return Ke(!0);let i=t.map(r=>Aa(()=>{let o=e._environmentInjector,s=Zs(r,o),a=HR(s)?s.canActivate(e,n):yn(o,()=>s(e,n));return zo(a).pipe(dr())}));return Ke(i).pipe(Ys())}function JR(n,e){let t=e[e.length-1],r=e.slice(0,e.length-1).reverse().map(o=>FR(o)).filter(o=>o!==null).map(o=>Aa(()=>{let s=o.guards.map(a=>{let c=o.node._environmentInjector,l=Zs(a,c),u=zR(l)?l.canActivateChild(t,n):yn(c,()=>l(t,n));return zo(u).pipe(dr())});return Ke(s).pipe(Ys())}));return Ke(r).pipe(Ys())}function QR(n,e,t,i){let r=e&&e.routeConfig?e.routeConfig.canDeactivate:null;if(!r||r.length===0)return Ke(!0);let o=r.map(s=>{let a=e._environmentInjector,c=Zs(s,a),l=GR(c)?c.canDeactivate(n,e,t,i):yn(a,()=>c(n,e,t,i));return zo(l).pipe(dr())});return Ke(o).pipe(Ys())}function e1(n,e,t,i,r){let o=e.canLoad;if(o===void 0||o.length===0)return Ke(!0);let s=o.map(a=>{let c=Zs(a,n),l=VR(c)?c.canLoad(e,t):yn(n,()=>c(e,t)),u=zo(l);return r?u.pipe(GE(r)):u});return Ke(s).pipe(Ys(),jE(i))}function jE(n){return ip(si(e=>{if(typeof e!="boolean")throw Ud(n,e)}),kt(e=>e===!0))}function t1(n,e,t,i,r,o){let s=e.canMatch;if(!s||s.length===0)return Ke(!0);let a=s.map(c=>{let l=Zs(c,n),u=jR(l)?l.canMatch(e,t,r):yn(n,()=>l(e,t,r));return zo(u).pipe(GE(o))});return Ke(a).pipe(Ys(),jE(i))}var _r=class n extends Error{segmentGroup;constructor(e){super(),this.segmentGroup=e||null,Object.setPrototypeOf(this,n.prototype)}},Ic=class n extends Error{urlTree;constructor(e){super(),this.urlTree=e,Object.setPrototypeOf(this,n.prototype)}};function n1(n){throw new Re(4e3,!1)}function i1(n){throw BE(!1,In.GuardRejected)}var sv=class{urlSerializer;urlTree;constructor(e,t){this.urlSerializer=e,this.urlTree=t}async lineralizeSegments(e,t){let i=[],r=t.root;for(;;){if(i=i.concat(r.segments),r.numberOfChildren===0)return i;if(r.numberOfChildren>1||!r.children[Ge])throw n1(`${e.redirectTo}`);r=r.children[Ge]}}async applyRedirectCommands(e,t,i,r,o){let s=await r1(t,r,o);if(s instanceof Di)throw new Ic(s);let a=this.applyRedirectCreateUrlTree(s,this.urlSerializer.parse(s),e,i);if(s[0]==="/")throw new Ic(a);return a}applyRedirectCreateUrlTree(e,t,i,r){let o=this.createSegmentGroup(e,t.root,i,r);return new Di(o,this.createQueryParams(t.queryParams,this.urlTree.queryParams),t.fragment)}createQueryParams(e,t){let i={};return Object.entries(e).forEach(([r,o])=>{if(typeof o=="string"&&o[0]===":"){let a=o.substring(1);i[r]=t[a]}else i[r]=o}),i}createSegmentGroup(e,t,i,r){let o=this.createSegments(e,t.segments,i,r),s=Object.create(null);return Object.entries(t.children).forEach(([a,c])=>{s[a]=this.createSegmentGroup(e,c,i,r)}),new vt(o,s)}createSegments(e,t,i,r){return t.map(o=>o.path[0]===":"?this.findPosParam(e,o,r):this.findOrReturn(o,i))}findPosParam(e,t,i){let r=i[t.path.substring(1)];if(!r)throw new Re(4001,!1);return r}findOrReturn(e,t){let i=0;for(let r of t){if(r.path===e.path)return t.splice(i),r;i++}return e}};function r1(n,e,t){if(typeof n=="string")return Promise.resolve(n);let i=n;return Id(zo(yn(t,()=>i(e))))}function o1(n,e){return n.providers&&!n._injector&&(n._injector=cc(n.providers,e,`Route: ${n.path}`)),n._injector??e}function Ti(n){return n.outlet||Ge}function s1(n,e){let t=n.filter(i=>Ti(i)===e);return t.push(...n.filter(i=>Ti(i)!==e)),t}var av={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function WE(n){return{routeConfig:n.routeConfig,url:n.url,params:n.params,queryParams:n.queryParams,fragment:n.fragment,data:n.data,outlet:n.outlet,title:n.title,paramMap:n.paramMap,queryParamMap:n.queryParamMap}}function a1(n,e,t,i,r,o,s){let a=$E(n,e,t);if(!a.matched)return Ke(a);let c=WE(o(a));return i=o1(e,i),t1(i,e,t,r,c,s).pipe(kt(l=>l===!0?a:_e({},av)))}function $E(n,e,t){if(e.path==="")return e.pathMatch==="full"&&(n.hasChildren()||t.length>0)?_e({},av):{matched:!0,consumedSegments:[],remainingSegments:t,parameters:{},positionalParamSegments:{}};let r=(e.matcher||eR)(t,n,e);if(!r)return _e({},av);let o={};Object.entries(r.posParams??{}).forEach(([a,c])=>{o[a]=c.path});let s=r.consumed.length>0?_e(_e({},o),r.consumed[r.consumed.length-1].parameters):o;return{matched:!0,consumedSegments:r.consumed,remainingSegments:t.slice(r.consumed.length),parameters:s,positionalParamSegments:r.posParams??{}}}function pE(n,e,t,i,r){return t.length>0&&u1(n,t,i,r)?{segmentGroup:new vt(e,l1(i,new vt(t,n.children))),slicedSegments:[]}:t.length===0&&d1(n,t,i)?{segmentGroup:new vt(n.segments,c1(n,t,i,n.children)),slicedSegments:t}:{segmentGroup:new vt(n.segments,n.children),slicedSegments:t}}function c1(n,e,t,i){let r={};for(let o of t)if(zd(n,e,o)&&!i[Ti(o)]){let s=new vt([],{});r[Ti(o)]=s}return _e(_e({},i),r)}function l1(n,e){let t={};t[Ge]=e;for(let i of n)if(i.path===""&&Ti(i)!==Ge){let r=new vt([],{});t[Ti(i)]=r}return t}function u1(n,e,t,i){return t.some(r=>!zd(n,e,r)||!(Ti(r)!==Ge)?!1:!(i!==void 0&&Ti(r)===i))}function d1(n,e,t){return t.some(i=>zd(n,e,i))}function zd(n,e,t){return(n.hasChildren()||e.length>0)&&t.pathMatch==="full"?!1:t.path===""}function f1(n,e,t){return e.length===0&&!n.children[t]}var cv=class{};async function h1(n,e,t,i,r,o,s,a){return new lv(n,e,t,i,r,s,o,a).recognize()}var p1=31,lv=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;abortSignal;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(e,t,i,r,o,s,a,c){this.injector=e,this.configLoader=t,this.rootComponentType=i,this.config=r,this.urlTree=o,this.paramsInheritanceStrategy=s,this.urlSerializer=a,this.abortSignal=c,this.applyRedirects=new sv(this.urlSerializer,this.urlTree)}noMatchError(e){return new Re(4002,`'${e.segmentGroup}'`)}async recognize(){let e=pE(this.urlTree.root,[],[],this.config).segmentGroup,{children:t,rootSnapshot:i}=await this.match(e),r=new Zn(i,t),o=new kd("",r),s=xR(i,[],this.urlTree.queryParams,this.urlTree.fragment);return s.queryParams=this.urlTree.queryParams,o.url=this.urlSerializer.serialize(s),{state:o,tree:s}}async match(e){let t=new Tc([],Object.freeze({}),Object.freeze(_e({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),Ge,this.rootComponentType,null,{},this.injector);try{return{children:await this.processSegmentGroup(this.injector,this.config,e,Ge,t),rootSnapshot:t}}catch(i){if(i instanceof Ic)return this.urlTree=i.urlTree,this.match(i.urlTree.root);throw i instanceof _r?this.noMatchError(i):i}}async processSegmentGroup(e,t,i,r,o){if(i.segments.length===0&&i.hasChildren())return this.processChildren(e,t,i,o);let s=await this.processSegment(e,t,i,i.segments,r,!0,o);return s instanceof Zn?[s]:[]}async processChildren(e,t,i,r){let o=[];for(let c of Object.keys(i.children))c==="primary"?o.unshift(c):o.push(c);let s=[];for(let c of o){let l=i.children[c],u=s1(t,c),f=await this.processSegmentGroup(e,u,l,c,r);s.push(...f)}let a=qE(s);return m1(a),a}async processSegment(e,t,i,r,o,s,a){for(let c of t)try{return await this.processSegmentAgainstRoute(c._injector??e,t,c,i,r,o,s,a)}catch(l){if(l instanceof _r||HE(l))continue;throw l}if(f1(i,r,o))return new cv;throw new _r(i)}async processSegmentAgainstRoute(e,t,i,r,o,s,a,c){if(Ti(i)!==s&&(s===Ge||!zd(r,o,i)))throw new _r(r);if(i.redirectTo===void 0)return this.matchSegmentAgainstRoute(e,r,i,o,s,c);if(this.allowRedirects&&a)return this.expandSegmentAgainstRouteUsingRedirect(e,r,t,i,o,s,c);throw new _r(r)}async expandSegmentAgainstRouteUsingRedirect(e,t,i,r,o,s,a){let{matched:c,parameters:l,consumedSegments:u,positionalParamSegments:f,remainingSegments:d}=$E(t,r,o);if(!c)throw new _r(t);typeof r.redirectTo=="string"&&r.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>p1&&(this.allowRedirects=!1));let h=this.createSnapshot(e,r,o,l,a);if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let p=await this.applyRedirects.applyRedirectCommands(u,r.redirectTo,f,WE(h),e),x=await this.applyRedirects.lineralizeSegments(r,p);return this.processSegment(e,i,t,x.concat(d),s,!1,a)}createSnapshot(e,t,i,r,o){let s=new Tc(i,r,Object.freeze(_e({},this.urlTree.queryParams)),this.urlTree.fragment,v1(t),Ti(t),t.component??t._loadedComponent??null,t,y1(t),e),a=dv(s,o,this.paramsInheritanceStrategy);return s.params=Object.freeze(a.params),s.data=Object.freeze(a.data),s}async matchSegmentAgainstRoute(e,t,i,r,o,s){if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let a=T=>this.createSnapshot(e,i,T.consumedSegments,T.parameters,s),c=await Id(a1(t,i,r,e,this.urlSerializer,a,this.abortSignal));if(i.path==="**"&&(t.children={}),!c?.matched)throw new _r(t);e=i._injector??e;let{routes:l}=await this.getChildConfig(e,i,r),u=i._loadedInjector??e,{parameters:f,consumedSegments:d,remainingSegments:h}=c,p=this.createSnapshot(e,i,d,f,s),{segmentGroup:x,slicedSegments:g}=pE(t,d,h,l,o);if(g.length===0&&x.hasChildren()){let T=await this.processChildren(u,l,x,p);return new Zn(p,T)}if(l.length===0&&g.length===0)return new Zn(p,[]);let m=Ti(i)===o,C=await this.processSegment(u,l,x,g,m?Ge:o,!0,p);return new Zn(p,C instanceof Zn?[C]:[])}async getChildConfig(e,t,i){if(t.children)return{routes:t.children,injector:e};if(t.loadChildren){if(t._loadedRoutes!==void 0){let o=t._loadedNgModuleFactory;return o&&!t._loadedInjector&&(t._loadedInjector=o.create(e).injector),{routes:t._loadedRoutes,injector:t._loadedInjector}}if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);if(await Id(e1(e,t,i,this.urlSerializer,this.abortSignal))){let o=await this.configLoader.loadChildren(e,t);return t._loadedRoutes=o.routes,t._loadedInjector=o.injector,t._loadedNgModuleFactory=o.factory,o}throw i1(t)}return{routes:[],injector:e}}};function m1(n){n.sort((e,t)=>e.value.outlet===Ge?-1:t.value.outlet===Ge?1:e.value.outlet.localeCompare(t.value.outlet))}function g1(n){let e=n.value.routeConfig;return e&&e.path===""}function qE(n){let e=[],t=new Set;for(let i of n){if(!g1(i)){e.push(i);continue}let r=e.find(o=>i.value.routeConfig===o.value.routeConfig);r!==void 0?(r.children.push(...i.children),t.add(r)):e.push(i)}for(let i of t){let r=qE(i.children);e.push(new Zn(i.value,r))}return e.filter(i=>!t.has(i))}function v1(n){return n.data||{}}function y1(n){return n.resolve||{}}function _1(n,e,t,i,r,o,s){return Tn(async a=>{let{state:c,tree:l}=await h1(n,e,t,i,a.extractedUrl,r,o,s);return xt(_e({},a),{targetSnapshot:c,urlAfterRedirects:l})})}function x1(n){return Tn(e=>{let{targetSnapshot:t,guards:{canActivateChecks:i}}=e;if(!i.length)return Ke(e);let r=new Set(i.map(a=>a.route)),o=new Set;for(let a of r)if(!o.has(a))for(let c of XE(a))o.add(c);let s=0;return qt(o).pipe(Jl(a=>r.has(a)?S1(a,t,n):(a.data=dv(a,a.parent,n).resolve,Ke(void 0))),si(()=>s++),Ql(1),Tn(a=>s===o.size?Ke(e):dn))})}function XE(n){let e=n.children.map(t=>XE(t)).flat();return[n,...e]}function S1(n,e,t){let i=n.routeConfig,r=n._resolve;return i?.title!==void 0&&!OE(i)&&(r[Rc]=i.title),Aa(()=>(n.data=dv(n,n.parent,t).resolve,E1(r,n,e).pipe(kt(o=>(n._resolvedData=o,n.data=_e(_e({},n.data),o),null)))))}function E1(n,e,t){let i=Bg(n);if(i.length===0)return Ke({});let r={};return qt(i).pipe(Tn(o=>b1(n[o],e,t).pipe(dr(),si(s=>{if(s instanceof Ac)throw Ud(new Vo,s);r[o]=s}))),Ql(1),kt(()=>r),Ia(o=>HE(o)?dn:sp(o)))}function b1(n,e,t){let i=e._environmentInjector,r=Zs(n,i),o=r.resolve?r.resolve(e,t):yn(i,()=>r(e,t));return zo(o)}function mE(n){return oi(e=>{let t=n(e);return t?qt(t).pipe(kt(()=>e)):Ke(e)})}var YE=(()=>{class n{buildTitle(t){let i,r=t.root;for(;r!==void 0;)i=this.getResolvedTitleForRoute(r)??i,r=r.children.find(o=>o.outlet===Ge);return i}getResolvedTitleForRoute(t){return t.data[Rc]}static \u0275fac=function(i){return new(i||n)};static \u0275prov=en({token:n,factory:()=>re(M1)})}return n})(),M1=(()=>{class n extends YE{title;constructor(t){super(),this.title=t}updateTitle(t){let i=this.buildTitle(t);i!==void 0&&this.title.setTitle(i)}static \u0275fac=function(i){return new(i||n)(Xe(cE))};static \u0275prov=gt({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Gd=new Ne("",{factory:()=>({})}),jd=new Ne(""),ZE=(()=>{class n{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=re(yg);async loadComponent(t,i){if(this.componentLoaders.get(i))return this.componentLoaders.get(i);if(i._loadedComponent)return Promise.resolve(i._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(i);let r=(async()=>{try{let o=await yE(yn(t,()=>i.loadComponent())),s=await KE(Sg(o));return this.onLoadEndListener&&this.onLoadEndListener(i),i._loadedComponent=s,s}finally{this.componentLoaders.delete(i)}})();return this.componentLoaders.set(i,r),r}loadChildren(t,i){if(this.childrenLoaders.get(i))return this.childrenLoaders.get(i);if(i._loadedRoutes)return Promise.resolve({routes:i._loadedRoutes,injector:i._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(i);let r=(async()=>{try{let o=await w1(i,this.compiler,t,this.onLoadEndListener);return i._loadedRoutes=o.routes,i._loadedInjector=o.injector,i._loadedNgModuleFactory=o.factory,o}finally{this.childrenLoaders.delete(i)}})();return this.childrenLoaders.set(i,r),r}static \u0275fac=function(i){return new(i||n)};static \u0275prov=en({token:n,factory:n.\u0275fac})}return n})();async function w1(n,e,t,i){let r=await yE(yn(t,()=>n.loadChildren())),o=await KE(Sg(r)),s;o instanceof cd||Array.isArray(o)?s=o:s=await e.compileModuleAsync(o),i&&i(n);let a,c,l=!1,u;return Array.isArray(s)?(c=s,l=!0):(a=s.create(t).injector,u=s,c=a.get(jd,[],{optional:!0,self:!0}).flat()),{routes:c.map(hv),injector:a,factory:u}}async function KE(n){return n}var pv=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275prov=en({token:n,factory:()=>re(C1)})}return n})(),C1=(()=>{class n{shouldProcessUrl(t){return!0}extract(t){return t}merge(t,i){return t}static \u0275fac=function(i){return new(i||n)};static \u0275prov=en({token:n,factory:n.\u0275fac})}return n})(),JE=new Ne("");var QE=new Ne(""),T1=()=>{},eb=new Ne(""),tb=(()=>{class n{currentNavigation=Xn(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=Xn(null);events=new $t;transitionAbortWithErrorSubject=new $t;configLoader=re(ZE);environmentInjector=re(Jt);destroyRef=re(Vi);urlSerializer=re(Vd);rootContexts=re(Nc);location=re(Bs);inputBindingEnabled=re(Hd,{optional:!0})!==null;titleStrategy=re(YE);options=re(Gd,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||AR;urlHandlingStrategy=re(pv);createViewTransition=re(JE,{optional:!0});navigationErrorHandler=re(eb,{optional:!0});activatedRouteInjectorFeature=re(QE,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>Ke(void 0);rootComponentType=null;destroyed=!1;constructor(){let t=r=>this.events.next(new Xg(r)),i=r=>this.events.next(new Yg(r));this.configLoader.onLoadEndListener=i,this.configLoader.onLoadStartListener=t,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(t){let i=++this.navigationId;Gr(()=>{this.transitions?.next(xt(_e({},t),{extractedUrl:this.urlHandlingStrategy.extract(t.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:i,routesRecognizeHandler:{},beforeActivateHandler:{}}))})}setupNavigations(t){return this.transitions=new un(null),this.transitions.pipe(lr(i=>i!==null),oi(i=>{let r=!0,o=!1,s=new AbortController,a=()=>!o&&this.currentTransition?.id===i.id;return Ke(i).pipe(oi(c=>{if(this.navigationId>i.id)return this.cancelNavigationTransition(i,"",In.SupersededByNewNavigation),dn;this.currentTransition=i;let l=this.lastSuccessfulNavigation();this.currentNavigation.set({id:c.id,initialUrl:c.rawUrl,extractedUrl:c.extractedUrl,targetBrowserUrl:typeof c.extras.browserUrl=="string"?this.urlSerializer.parse(c.extras.browserUrl):c.extras.browserUrl,trigger:c.source,extras:c.extras,previousNavigation:l?xt(_e({},l),{previousNavigation:null}):null,abort:()=>s.abort(),routesRecognizeHandler:c.routesRecognizeHandler,beforeActivateHandler:c.beforeActivateHandler});let u=!t.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),f=c.extras.onSameUrlNavigation??t.onSameUrlNavigation;if(!u&&f!=="reload")return this.events.next(new qr(c.id,this.urlSerializer.serialize(c.rawUrl),"",Pd.IgnoredSameUrlNavigation)),c.resolve(!1),dn;if(this.urlHandlingStrategy.shouldProcessUrl(c.rawUrl))return Ke(c).pipe(oi(d=>(this.events.next(new Ws(d.id,this.urlSerializer.serialize(d.extractedUrl),d.source,d.restoredState)),d.id!==this.navigationId?dn:Promise.resolve(d))),_1(this.environmentInjector,this.configLoader,this.rootComponentType,t.config,this.urlSerializer,this.paramsInheritanceStrategy,s.signal),si(d=>{i.targetSnapshot=d.targetSnapshot,i.urlAfterRedirects=d.urlAfterRedirects,this.currentNavigation.update(h=>(h.finalUrl=d.urlAfterRedirects,h)),this.events.next(new Cc)}),oi(d=>qt(i.routesRecognizeHandler.deferredHandle??Ke(void 0)).pipe(kt(()=>d))),si(()=>{let d=new Ld(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot);this.events.next(d)}));if(u&&this.urlHandlingStrategy.shouldProcessUrl(c.currentRawUrl)){let{id:d,extractedUrl:h,source:p,restoredState:x,extras:g}=c,m=new Ws(d,this.urlSerializer.serialize(h),p,x);this.events.next(m);let C=PE(this.rootComponentType,this.environmentInjector).snapshot;return this.currentTransition=i=xt(_e({},c),{targetSnapshot:C,urlAfterRedirects:h,extras:xt(_e({},g),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(T=>(T.finalUrl=h,T)),Ke(i)}else return this.events.next(new qr(c.id,this.urlSerializer.serialize(c.extractedUrl),"",Pd.IgnoredByUrlHandlingStrategy)),c.resolve(!1),dn}),kt(c=>{let l=new jg(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot);return this.events.next(l),this.currentTransition=i=xt(_e({},c),{guards:OR(c.targetSnapshot,c.currentSnapshot,this.rootContexts)}),i}),$R(c=>this.events.next(c)),oi(c=>{if(i.guardsResult=c.guardsResult,c.guardsResult&&typeof c.guardsResult!="boolean")throw Ud(this.urlSerializer,c.guardsResult);let l=new Wg(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot,!!c.guardsResult);if(this.events.next(l),!a())return dn;if(!c.guardsResult)return this.cancelNavigationTransition(c,"",In.GuardRejected),dn;if(c.guards.canActivateChecks.length===0)return Ke(c);let u=new $g(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot);if(this.events.next(u),!a())return dn;let f=!1;return Ke(c).pipe(x1(this.paramsInheritanceStrategy),si({next:()=>{f=!0;let d=new qg(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot);this.events.next(d)},complete:()=>{f||this.cancelNavigationTransition(c,"",In.NoDataFromResolver)}}))}),mE(c=>{let l=f=>{let d=[];if(f.routeConfig?._loadedComponent)f.component=f.routeConfig?._loadedComponent;else if(f.routeConfig?.loadComponent){let h=f._environmentInjector;d.push(this.configLoader.loadComponent(h,f.routeConfig).then(p=>{f.component=p}))}for(let h of f.children)d.push(...l(h));return d},u=l(c.targetSnapshot.root);return u.length===0?Ke(c):qt(Promise.all(u).then(()=>c))}),oi(c=>{let{newlyCreatedRoutes:l,state:u}=RR(t.routeReuseStrategy,c.targetSnapshot,c.currentRouterState);return this.currentTransition=i=c=xt(_e({},c),{targetRouterState:u,newlyCreatedRoutes:l}),this.currentNavigation.update(f=>(f.targetRouterState=u,f)),Ke(c)}),this.activatedRouteInjectorFeature?.operator()??(c=>c),mE(()=>this.afterPreactivation()),oi(()=>{let{currentSnapshot:c,targetSnapshot:l}=i,u=this.createViewTransition?.(this.environmentInjector,c.root,l.root);return u?qt(u).pipe(kt(()=>i)):Ke(i)}),ur(1),oi(c=>{r=!1,this.events.next(new qs);let l=i.beforeActivateHandler.deferredHandle;return l?qt(l.then(()=>c)):Ke(c)}),si(c=>{new ov(t.routeReuseStrategy,i.targetRouterState,i.currentRouterState,l=>this.events.next(l),this.inputBindingEnabled).activate(this.rootContexts),c.newlyCreatedRoutes?.clear(),a()&&(o=!0,this.currentNavigation.update(l=>(l.abort=T1,l)),this.lastSuccessfulNavigation.set(Gr(this.currentNavigation)),this.events.next(new $r(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects))),this.titleStrategy?.updateTitle(c.targetRouterState.snapshot),c.resolve(!0))}),Ra(zE(s.signal).pipe(lr(()=>!o&&r),si(()=>{this.cancelNavigationTransition(i,s.signal.reason+"",In.Aborted)}))),si({complete:()=>{o=!0}}),Ra(this.transitionAbortWithErrorSubject.pipe(si(c=>{throw c}))),cp(()=>{s.abort(),o||this.cancelNavigationTransition(i,"",In.SupersededByNewNavigation),this.currentTransition?.id===i.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),Ia(c=>{if(o=!0,gE(i),this.destroyed)return i.resolve(!1),dn;if(VE(c))this.events.next(new Ci(i.id,this.urlSerializer.serialize(i.extractedUrl),c.message,c.cancellationCode)),LR(c)?this.events.next(new Xs(c.url,c.navigationBehaviorOptions)):i.resolve(!1);else{let l=new $s(i.id,this.urlSerializer.serialize(i.extractedUrl),c,i.targetSnapshot??void 0);try{let u=yn(this.environmentInjector,()=>this.navigationErrorHandler?.(l));if(u instanceof Ac){let{message:f,cancellationCode:d}=Ud(this.urlSerializer,u);this.events.next(new Ci(i.id,this.urlSerializer.serialize(i.extractedUrl),f,d)),this.events.next(new Xs(u.redirectTo,u.navigationBehaviorOptions))}else throw this.events.next(l),c}catch(u){this.options.resolveNavigationPromiseOnError?i.resolve(!1):i.reject(u)}}return dn}))}))}cancelNavigationTransition(t,i,r){gE(t);let o=new Ci(t.id,this.urlSerializer.serialize(t.extractedUrl),i,r);this.events.next(o),t.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let t=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),i=Gr(this.currentNavigation),r=i?.targetBrowserUrl??i?.extractedUrl;return t.toString()!==r?.toString()&&!i?.extras.skipLocationChange}static \u0275fac=function(i){return new(i||n)};static \u0275prov=en({token:n,factory:n.\u0275fac})}return n})();function D1(n){return n!==bc}function gE(n){if(n.newlyCreatedRoutes)for(let e of n.newlyCreatedRoutes)e._localInjector?.destroy()}var nb=new Ne("");var A1=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275prov=en({token:n,factory:()=>re(I1)})}return n})(),uv=class{shouldDetach(e){return!1}store(e,t){}shouldAttach(e){return!1}retrieve(e){return null}shouldReuseRoute(e,t){return e.routeConfig===t.routeConfig}shouldDestroyInjector(e){return!0}},I1=(()=>{class n extends uv{static \u0275fac=function(i){return new(i||n)};static \u0275prov=en({token:n,factory:n.\u0275fac})}return n})(),mv=(()=>{class n{urlSerializer=re(Vd);options=re(Gd,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=re(Bs);urlHandlingStrategy=re(pv);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new Di;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:t,initialUrl:i,targetBrowserUrl:r}){let o=t!==void 0?this.urlHandlingStrategy.merge(t,i):i,s=r??o;return s instanceof Di?this.urlSerializer.serialize(s):s}routerUrlState(t){return t?.targetBrowserUrl===void 0||t?.finalUrl===void 0?{}:{\u0275routerUrl:this.urlSerializer.serialize(t.finalUrl)}}commitTransition({targetRouterState:t,finalUrl:i,initialUrl:r}){i&&t?(this.currentUrlTree=i,this.rawUrlTree=this.urlHandlingStrategy.merge(i,r),this.routerState=t):this.rawUrlTree=r}routerState=PE(null,re(Jt));getRouterState(){return this.routerState}_stateMemento=this.createStateMemento();get stateMemento(){return this._stateMemento}updateStateMemento(){this._stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}restoredState(){return this.location.getState()}static \u0275fac=function(i){return new(i||n)};static \u0275prov=en({token:n,factory:()=>re(R1)})}return n})(),R1=(()=>{class n extends mv{currentPageId=0;lastSuccessfulId=-1;get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(t){return this.location.subscribe(i=>{i.type==="popstate"&&setTimeout(()=>{t(i.url,i.state,"popstate",{replaceUrl:!0})})})}handleRouterEvent(t,i){t instanceof Ws?this.updateStateMemento():t instanceof qr?this.commitTransition(i):t instanceof Ld?this.urlUpdateStrategy==="eager"&&(i.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(i),i)):t instanceof qs?(this.commitTransition(i),this.urlUpdateStrategy==="deferred"&&!i.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(i),i)):t instanceof Ci&&!NE(t)?this.restoreHistory(i):t instanceof $s?this.restoreHistory(i,!0):t instanceof $r&&(this.lastSuccessfulId=t.id,this.currentPageId=this.browserPageId)}setBrowserUrl(t,i){let{extras:r,id:o}=i,{replaceUrl:s,state:a}=r;if(this.location.isCurrentPathEqualTo(t)||s){let c=this.browserPageId,l=_e(_e({},a),this.generateNgRouterState(o,c,i));this.location.replaceState(t,"",l)}else{let c=_e(_e({},a),this.generateNgRouterState(o,this.browserPageId+1,i));this.location.go(t,"",c)}}restoreHistory(t,i=!1){if(this.canceledNavigationResolution==="computed"){let r=this.browserPageId,o=this.currentPageId-r;o!==0?this.location.historyGo(o):this.getCurrentUrlTree()===t.finalUrl&&o===0&&(this.resetInternalState(t),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(i&&this.resetInternalState(t),this.resetUrlToCurrentUrlTree())}resetInternalState({finalUrl:t}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,t??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(t,i,r){return this.canceledNavigationResolution==="computed"?_e({navigationId:t,\u0275routerPageId:i},this.routerUrlState(r)):_e({navigationId:t},this.routerUrlState(r))}static \u0275fac=function(i){return new(i||n)};static \u0275prov=en({token:n,factory:n.\u0275fac})}return n})();function ib(n,e){n.events.pipe(lr(t=>t instanceof $r||t instanceof Ci||t instanceof $s||t instanceof qr),kt(t=>t instanceof $r||t instanceof qr?0:(t instanceof Ci?t.code===In.Redirect||t.code===In.SupersededByNewNavigation:!1)?2:1),lr(t=>t!==2),ur(1)).subscribe(()=>{e()})}var gv=(()=>{class n{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=re(pg);stateManager=re(mv);options=re(Gd,{optional:!0})||{};pendingTasks=re(Br);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=re(tb);urlSerializer=re(Vd);location=re(Bs);urlHandlingStrategy=re(pv);injector=re(Jt);_events=new $t;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=re(A1);injectorCleanup=re(nb,{optional:!0});onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=re(jd,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!re(Hd,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:t=>{}}),this.subscribeToNavigationEvents()}eventsSubscription=new ln;subscribeToNavigationEvents(){let t=this.navigationTransitions.events.subscribe(i=>{try{let r=this.navigationTransitions.currentTransition,o=Gr(this.navigationTransitions.currentNavigation);if(r!==null&&o!==null){if(this.stateManager.handleRouterEvent(i,o),i instanceof Ci&&i.code!==In.Redirect&&i.code!==In.SupersededByNewNavigation)this.navigated=!0;else if(i instanceof $r)this.navigated=!0,this.injectorCleanup?.(this.routeReuseStrategy,this.routerState,this.config);else if(i instanceof Xs){let s=i.navigationBehaviorOptions,a=this.urlHandlingStrategy.merge(i.url,r.currentRawUrl),c=_e({scroll:r.extras.scroll,browserUrl:r.extras.browserUrl,info:r.extras.info,skipLocationChange:r.extras.skipLocationChange,replaceUrl:r.extras.replaceUrl||this.urlUpdateStrategy==="eager"||D1(r.source)},s);this.scheduleNavigation(a,bc,null,c,{resolve:r.resolve,reject:r.reject,promise:r.promise})}}TR(i)&&this._events.next(i)}catch(r){this.navigationTransitions.transitionAbortWithErrorSubject.next(r)}});this.eventsSubscription.add(t)}resetRootComponentType(t){this.routerState.root.component=t,this.navigationTransitions.rootComponentType=t}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),bc,this.stateManager.restoredState(),{replaceUrl:!0})}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((t,i,r,o)=>{this.navigateToSyncWithBrowser(t,r,i,o)})}navigateToSyncWithBrowser(t,i,r,o){let s=r?.navigationId?r:null,a=r?.\u0275routerUrl??t;if(r?.\u0275routerUrl&&(o=xt(_e({},o),{browserUrl:t})),r){let l=_e({},r);delete l.navigationId,delete l.\u0275routerPageId,delete l.\u0275routerUrl,Object.keys(l).length!==0&&(o.state=l)}let c=this.parseUrl(a);this.scheduleNavigation(c,i,s,o).catch(l=>{this.disposed||this.injector.get(Xi)(l)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return Gr(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(t){this.config=t.map(hv),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0,this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(t,i={}){let{relativeTo:r,queryParams:o,fragment:s,queryParamsHandling:a,preserveFragment:c}=i,l=c?this.currentUrlTree.fragment:s,u=null;switch(a??this.options.defaultQueryParamsHandling){case"merge":u=_e(_e({},this.currentUrlTree.queryParams),o);break;case"preserve":u=this.currentUrlTree.queryParams;break;default:u=o||null}u!==null&&(u=this.removeEmptyProps(u));let f;try{let d=r?r.snapshot:this.routerState.snapshot.root;f=DE(d)}catch{(typeof t[0]!="string"||t[0][0]!=="/")&&(t=[]),f=this.currentUrlTree.root}return AE(f,t,u,l??null,this.urlSerializer)}navigateByUrl(t,i={skipLocationChange:!1}){let r=js(t)?t:this.parseUrl(t),o=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(o,bc,null,i)}navigate(t,i={skipLocationChange:!1}){return N1(t),this.navigateByUrl(this.createUrlTree(t,i),i)}serializeUrl(t){return this.urlSerializer.serialize(t)}parseUrl(t){try{return this.urlSerializer.parse(t)}catch{return this.console.warn(Oa(4018,!1)),this.urlSerializer.parse("/")}}isActive(t,i){let r;if(i===!0?r=_e({},xE):i===!1?r=_e({},Vg):r=_e(_e({},Vg),i),js(t))return lE(this.currentUrlTree,t,r);let o=this.parseUrl(t);return lE(this.currentUrlTree,o,r)}removeEmptyProps(t){return Object.entries(t).reduce((i,[r,o])=>(o!=null&&(i[r]=o),i),{})}scheduleNavigation(t,i,r,o,s){if(this.disposed)return Promise.resolve(!1);let a,c,l;s?(a=s.resolve,c=s.reject,l=s.promise):l=new Promise((f,d)=>{a=f,c=d});let u=this.pendingTasks.add();return ib(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(u))}),this.navigationTransitions.handleNavigationRequest({source:i,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:t,extras:o,resolve:a,reject:c,promise:l,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),l.catch(Promise.reject.bind(Promise))}static \u0275fac=function(i){return new(i||n)};static \u0275prov=en({token:n,factory:n.\u0275fac})}return n})();function N1(n){for(let e=0;e<n.length;e++)if(n[e]==null)throw new Re(4008,!1)}var P1=new Ne("");function vv(n,...e){return wo([{provide:jd,multi:!0,useValue:n},{provide:Ho,useFactory:L1},{provide:dd,multi:!0,useFactory:O1},e.map(t=>t.\u0275providers)])}function L1(){return re(gv).routerState.root}function O1(){let n=re(pr);return e=>{let t=n.get(ks);if(e!==t.components[0])return;let i=n.get(gv),r=n.get(F1);n.get(k1)===1&&i.initialNavigation(),n.get(U1,null,{optional:!0})?.setUpPreloading(),n.get(P1,null,{optional:!0})?.init(),i.resetRootComponentType(t.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var F1=new Ne("",{factory:()=>new $t}),k1=new Ne("",{factory:()=>1});var U1=new Ne("");var rb=[];var ob={providers:[um(),vv(rb)]};var Db=0,ey=1,Ab=2;var sl=1,Ib=2,ya=3,Cr=0,Rn=1,ir=2,rr=0,Zo=1,al=2,ty=3,ny=4,Rb=5;var to=100,Nb=101,Pb=102,Lb=103,Ob=104,Fb=200,kb=201,Ub=202,Bb=203,mf=204,gf=205,Vb=206,Hb=207,zb=208,Gb=209,jb=210,Wb=211,$b=212,qb=213,Xb=214,vf=0,yf=1,_f=2,Ko=3,xf=4,Sf=5,Ef=6,bf=7,iy=0,Yb=1,Zb=2,Pi=0,ry=1,oy=2,sy=3,ay=4,cy=5,ly=6,uy=7;var zv=300,ao=301,Qo=302,qf=303,Xf=304,cl=306,Mf=1e3,Qi=1001,wf=1002,an=1003,Kb=1004;var ll=1005;var gn=1006,Yf=1007;var co=1008;var Un=1009,dy=1010,fy=1011,_a=1012,Zf=1013,Li=1014,Oi=1015,or=1016,Kf=1017,Jf=1018,xa=1020,hy=35902,py=35899,my=1021,gy=1022,pi=1023,er=1026,lo=1027,vy=1028,Qf=1029,uo=1030,eh=1031;var th=1033,ul=33776,dl=33777,fl=33778,hl=33779,nh=35840,ih=35841,rh=35842,oh=35843,sh=36196,ah=37492,ch=37496,lh=37488,uh=37489,pl=37490,dh=37491,fh=37808,hh=37809,ph=37810,mh=37811,gh=37812,vh=37813,yh=37814,_h=37815,xh=37816,Sh=37817,Eh=37818,bh=37819,Mh=37820,wh=37821,Ch=36492,Th=36494,Dh=36495,Ah=36283,Ih=36284,ml=36285,Rh=36286;var Bc=2300,Cf=2301,pf=2302,Gv=2303,jv=2400,Wv=2401,$v=2402;var Jb=3200;var yy=0,Qb=1,Dr="",Qn="srgb",Vc="srgb-linear",Hc="linear",yt="srgb";var qo=7680;var qv=519,eM=512,tM=513,nM=514,Nh=515,iM=516,rM=517,Ph=518,oM=519,Xv=35044;var _y="300 es",Ni=2e3,ua=2001;function V1(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function H1(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function zc(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function sM(){let n=zc("canvas");return n.style.display="block",n}var sb={},da=null;function xy(...n){let e="THREE."+n.shift();da?da("log",e,...n):console.log(e,...n)}function aM(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function ke(...n){n=aM(n);let e="THREE."+n.shift();if(da)da("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Ue(...n){n=aM(n);let e="THREE."+n.shift();if(da)da("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Yo(...n){let e=n.join(" ");e in sb||(sb[e]=!0,ke(...n))}function cM(n,e,t){return new Promise(function(i,r){function o(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:i()}}setTimeout(o,t)})}var lM={[vf]:yf,[_f]:Ef,[xf]:bf,[Ko]:Sf,[yf]:vf,[Ef]:_f,[bf]:xf,[Sf]:Ko},tr=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let o=r.indexOf(t);o!==-1&&r.splice(o,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let o=0,s=r.length;o<s;o++)r[o].call(this,e);e.target=null}}},Sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var yv=Math.PI/180,Tf=180/Math.PI;function gl(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Sn[n&255]+Sn[n>>8&255]+Sn[n>>16&255]+Sn[n>>24&255]+"-"+Sn[e&255]+Sn[e>>8&255]+"-"+Sn[e>>16&15|64]+Sn[e>>24&255]+"-"+Sn[t&63|128]+Sn[t>>8&255]+"-"+Sn[t>>16&255]+Sn[t>>24&255]+Sn[i&255]+Sn[i>>8&255]+Sn[i>>16&255]+Sn[i>>24&255]).toLowerCase()}function it(n,e,t){return Math.max(e,Math.min(t,n))}function z1(n,e){return(n%e+e)%e}function _v(n,e,t){return(1-t)*n+t*e}function Lc(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function kn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var ot=class n{static{n.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(it(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),o=this.x-e.x,s=this.y-e.y;return this.x=o*i-s*r+e.x,this.y=o*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},nr=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,o,s,a){let c=i[r+0],l=i[r+1],u=i[r+2],f=i[r+3],d=o[s+0],h=o[s+1],p=o[s+2],x=o[s+3];if(f!==x||c!==d||l!==h||u!==p){let g=c*d+l*h+u*p+f*x;g<0&&(d=-d,h=-h,p=-p,x=-x,g=-g);let m=1-a;if(g<.9995){let C=Math.acos(g),T=Math.sin(C);m=Math.sin(m*C)/T,a=Math.sin(a*C)/T,c=c*m+d*a,l=l*m+h*a,u=u*m+p*a,f=f*m+x*a}else{c=c*m+d*a,l=l*m+h*a,u=u*m+p*a,f=f*m+x*a;let C=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=C,l*=C,u*=C,f*=C}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,o,s){let a=i[r],c=i[r+1],l=i[r+2],u=i[r+3],f=o[s],d=o[s+1],h=o[s+2],p=o[s+3];return e[t]=a*p+u*f+c*h-l*d,e[t+1]=c*p+u*d+l*f-a*h,e[t+2]=l*p+u*h+a*d-c*f,e[t+3]=u*p-a*f-c*d-l*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,o=e._z,s=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(r/2),f=a(o/2),d=c(i/2),h=c(r/2),p=c(o/2);switch(s){case"XYZ":this._x=d*u*f+l*h*p,this._y=l*h*f-d*u*p,this._z=l*u*p+d*h*f,this._w=l*u*f-d*h*p;break;case"YXZ":this._x=d*u*f+l*h*p,this._y=l*h*f-d*u*p,this._z=l*u*p-d*h*f,this._w=l*u*f+d*h*p;break;case"ZXY":this._x=d*u*f-l*h*p,this._y=l*h*f+d*u*p,this._z=l*u*p+d*h*f,this._w=l*u*f-d*h*p;break;case"ZYX":this._x=d*u*f-l*h*p,this._y=l*h*f+d*u*p,this._z=l*u*p-d*h*f,this._w=l*u*f+d*h*p;break;case"YZX":this._x=d*u*f+l*h*p,this._y=l*h*f+d*u*p,this._z=l*u*p-d*h*f,this._w=l*u*f-d*h*p;break;case"XZY":this._x=d*u*f-l*h*p,this._y=l*h*f-d*u*p,this._z=l*u*p+d*h*f,this._w=l*u*f+d*h*p;break;default:ke("Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],o=t[8],s=t[1],a=t[5],c=t[9],l=t[2],u=t[6],f=t[10],d=i+a+f;if(d>0){let h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(u-c)*h,this._y=(o-l)*h,this._z=(s-r)*h}else if(i>a&&i>f){let h=2*Math.sqrt(1+i-a-f);this._w=(u-c)/h,this._x=.25*h,this._y=(r+s)/h,this._z=(o+l)/h}else if(a>f){let h=2*Math.sqrt(1+a-i-f);this._w=(o-l)/h,this._x=(r+s)/h,this._y=.25*h,this._z=(c+u)/h}else{let h=2*Math.sqrt(1+f-i-a);this._w=(s-r)/h,this._x=(o+l)/h,this._y=(c+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(it(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,o=e._z,s=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+s*a+r*l-o*c,this._y=r*u+s*c+o*a-i*l,this._z=o*u+s*l+i*c-r*a,this._w=s*u-i*a-r*c-o*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,o=e._z,s=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,o=-o,s=-s,a=-a);let c=1-t;if(a<.9995){let l=Math.acos(a),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+i*t,this._y=this._y*c+r*t,this._z=this._z*c+o*t,this._w=this._w*c+s*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+r*t,this._z=this._z*c+o*t,this._w=this._w*c+s*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},k=class n{static{n.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ab.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ab.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[3]*i+o[6]*r,this.y=o[1]*t+o[4]*i+o[7]*r,this.z=o[2]*t+o[5]*i+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,o=e.elements,s=1/(o[3]*t+o[7]*i+o[11]*r+o[15]);return this.x=(o[0]*t+o[4]*i+o[8]*r+o[12])*s,this.y=(o[1]*t+o[5]*i+o[9]*r+o[13])*s,this.z=(o[2]*t+o[6]*i+o[10]*r+o[14])*s,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,o=e.x,s=e.y,a=e.z,c=e.w,l=2*(s*r-a*i),u=2*(a*t-o*r),f=2*(o*i-s*t);return this.x=t+c*l+s*f-a*u,this.y=i+c*u+a*l-o*f,this.z=r+c*f+o*u-s*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r,this.y=o[1]*t+o[5]*i+o[9]*r,this.z=o[2]*t+o[6]*i+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,o=e.z,s=t.x,a=t.y,c=t.z;return this.x=r*c-o*a,this.y=o*s-i*c,this.z=i*a-r*s,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return xv.copy(this).projectOnVector(e),this.sub(xv)}reflect(e){return this.sub(xv.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(it(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},xv=new k,ab=new nr,Ve=class n{static{n.prototype.isMatrix3=!0}constructor(e,t,i,r,o,s,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,o,s,a,c,l)}set(e,t,i,r,o,s,a,c,l){let u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=o,u[5]=c,u[6]=i,u[7]=s,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,o=this.elements,s=i[0],a=i[3],c=i[6],l=i[1],u=i[4],f=i[7],d=i[2],h=i[5],p=i[8],x=r[0],g=r[3],m=r[6],C=r[1],T=r[4],S=r[7],w=r[2],b=r[5],D=r[8];return o[0]=s*x+a*C+c*w,o[3]=s*g+a*T+c*b,o[6]=s*m+a*S+c*D,o[1]=l*x+u*C+f*w,o[4]=l*g+u*T+f*b,o[7]=l*m+u*S+f*D,o[2]=d*x+h*C+p*w,o[5]=d*g+h*T+p*b,o[8]=d*m+h*S+p*D,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*s*u-t*a*l-i*o*u+i*a*c+r*o*l-r*s*c}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],c=e[6],l=e[7],u=e[8],f=u*s-a*l,d=a*c-u*o,h=l*o-s*c,p=t*f+i*d+r*h;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return e[0]=f*x,e[1]=(r*l-u*i)*x,e[2]=(a*i-r*s)*x,e[3]=d*x,e[4]=(u*t-r*c)*x,e[5]=(r*o-a*t)*x,e[6]=h*x,e[7]=(i*c-l*t)*x,e[8]=(s*t-i*o)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,o,s,a){let c=Math.cos(o),l=Math.sin(o);return this.set(i*c,i*l,-i*(c*s+l*a)+s+e,-r*l,r*c,-r*(-l*s+c*a)+a+t,0,0,1),this}scale(e,t){return Yo("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Sv.makeScale(e,t)),this}rotate(e){return Yo("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Sv.makeRotation(-e)),this}translate(e,t){return Yo("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Sv.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Sv=new Ve,cb=new Ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),lb=new Ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function G1(){let n={enabled:!0,workingColorSpace:Vc,spaces:{},convert:function(r,o,s){return this.enabled===!1||o===s||!o||!s||(this.spaces[o].transfer===yt&&(r.r=wr(r.r),r.g=wr(r.g),r.b=wr(r.b)),this.spaces[o].primaries!==this.spaces[s].primaries&&(r.applyMatrix3(this.spaces[o].toXYZ),r.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===yt&&(r.r=la(r.r),r.g=la(r.g),r.b=la(r.b))),r},workingToColorSpace:function(r,o){return this.convert(r,this.workingColorSpace,o)},colorSpaceToWorking:function(r,o){return this.convert(r,o,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Dr?Hc:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,o=this.workingColorSpace){return r.fromArray(this.spaces[o].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,o,s){return r.copy(this.spaces[o].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,o){return Yo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,o)},toWorkingColorSpace:function(r,o){return Yo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,o)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Vc]:{primaries:e,whitePoint:i,transfer:Hc,toXYZ:cb,fromXYZ:lb,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Qn},outputColorSpaceConfig:{drawingBufferColorSpace:Qn}},[Qn]:{primaries:e,whitePoint:i,transfer:yt,toXYZ:cb,fromXYZ:lb,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Qn}}}),n}var tt=G1();function wr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function la(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Ks,Df=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ks===void 0&&(Ks=zc("canvas")),Ks.width=e.width,Ks.height=e.height;let r=Ks.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Ks}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=zc("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),o=r.data;for(let s=0;s<o.length;s++)o[s]=wr(o[s]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(wr(t[i]/255)*255):t[i]=wr(t[i]);return{data:t,width:e.width,height:e.height}}else return ke("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},j1=0,fa=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:j1++}),this.uuid=gl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let s=0,a=r.length;s<a;s++)r[s].isDataTexture?o.push(Ev(r[s].image)):o.push(Ev(r[s]))}else o=Ev(r);i.url=o}return t||(e.images[this.uuid]=i),i}};function Ev(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Df.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(ke("Texture: Unable to serialize Texture."),{})}var W1=0,bv=new k,sr=(()=>{class n extends tr{constructor(t=n.DEFAULT_IMAGE,i=n.DEFAULT_MAPPING,r=Qi,o=Qi,s=gn,a=co,c=pi,l=Un,u=n.DEFAULT_ANISOTROPY,f=Dr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:W1++}),this.uuid=gl(),this.name="",this.source=new fa(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=c,this.internalFormat=null,this.type=l,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(bv).x}get height(){return this.source.getSize(bv).y}get depth(){return this.source.getSize(bv).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let i in t){let r=t[i];if(r===void 0){ke(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}let o=this[i];if(o===void 0){ke(`Texture.setValues(): property '${i}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[i]=r}}toJSON(t){let i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==zv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Mf:t.x=t.x-Math.floor(t.x);break;case Qi:t.x=t.x<0?0:1;break;case wf:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Mf:t.y=t.y-Math.floor(t.y);break;case Qi:t.y=t.y<0?0:1;break;case wf:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}return n.DEFAULT_IMAGE=null,n.DEFAULT_MAPPING=zv,n.DEFAULT_ANISOTROPY=1,n})(),It=class n{static{n.prototype.isVector4=!0}constructor(e=0,t=0,i=0,r=1){this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,o=this.w,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r+s[12]*o,this.y=s[1]*t+s[5]*i+s[9]*r+s[13]*o,this.z=s[2]*t+s[6]*i+s[10]*r+s[14]*o,this.w=s[3]*t+s[7]*i+s[11]*r+s[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,o,c=e.elements,l=c[0],u=c[4],f=c[8],d=c[1],h=c[5],p=c[9],x=c[2],g=c[6],m=c[10];if(Math.abs(u-d)<.01&&Math.abs(f-x)<.01&&Math.abs(p-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+x)<.1&&Math.abs(p+g)<.1&&Math.abs(l+h+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let T=(l+1)/2,S=(h+1)/2,w=(m+1)/2,b=(u+d)/4,D=(f+x)/4,y=(p+g)/4;return T>S&&T>w?T<.01?(i=0,r=.707106781,o=.707106781):(i=Math.sqrt(T),r=b/i,o=D/i):S>w?S<.01?(i=.707106781,r=0,o=.707106781):(r=Math.sqrt(S),i=b/r,o=y/r):w<.01?(i=.707106781,r=.707106781,o=0):(o=Math.sqrt(w),i=D/o,r=y/o),this.set(i,r,o,t),this}let C=Math.sqrt((g-p)*(g-p)+(f-x)*(f-x)+(d-u)*(d-u));return Math.abs(C)<.001&&(C=1),this.x=(g-p)/C,this.y=(f-x)/C,this.z=(d-u)/C,this.w=Math.acos((l+h+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this.w=it(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this.w=it(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Af=class extends tr{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new It(0,0,e,t),this.scissorTest=!1,this.viewport=new It(0,0,e,t),this.textures=[];let r={width:e,height:t,depth:i.depth},o=new sr(r),s=i.count;for(let a=0;a<s;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:gn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,o=this.textures.length;r<o;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new fa(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},ei=class extends Af{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Gc=class extends sr{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=an,this.minFilter=an,this.wrapR=Qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var If=class extends sr{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=an,this.minFilter=an,this.wrapR=Qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var At=class n{static{n.prototype.isMatrix4=!0}constructor(e,t,i,r,o,s,a,c,l,u,f,d,h,p,x,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,o,s,a,c,l,u,f,d,h,p,x,g)}set(e,t,i,r,o,s,a,c,l,u,f,d,h,p,x,g){let m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=r,m[1]=o,m[5]=s,m[9]=a,m[13]=c,m[2]=l,m[6]=u,m[10]=f,m[14]=d,m[3]=h,m[7]=p,m[11]=x,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,r=1/Js.setFromMatrixColumn(e,0).length(),o=1/Js.setFromMatrixColumn(e,1).length(),s=1/Js.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*o,t[5]=i[5]*o,t[6]=i[6]*o,t[7]=0,t[8]=i[8]*s,t[9]=i[9]*s,t[10]=i[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,o=e.z,s=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(o),f=Math.sin(o);if(e.order==="XYZ"){let d=s*u,h=s*f,p=a*u,x=a*f;t[0]=c*u,t[4]=-c*f,t[8]=l,t[1]=h+p*l,t[5]=d-x*l,t[9]=-a*c,t[2]=x-d*l,t[6]=p+h*l,t[10]=s*c}else if(e.order==="YXZ"){let d=c*u,h=c*f,p=l*u,x=l*f;t[0]=d+x*a,t[4]=p*a-h,t[8]=s*l,t[1]=s*f,t[5]=s*u,t[9]=-a,t[2]=h*a-p,t[6]=x+d*a,t[10]=s*c}else if(e.order==="ZXY"){let d=c*u,h=c*f,p=l*u,x=l*f;t[0]=d-x*a,t[4]=-s*f,t[8]=p+h*a,t[1]=h+p*a,t[5]=s*u,t[9]=x-d*a,t[2]=-s*l,t[6]=a,t[10]=s*c}else if(e.order==="ZYX"){let d=s*u,h=s*f,p=a*u,x=a*f;t[0]=c*u,t[4]=p*l-h,t[8]=d*l+x,t[1]=c*f,t[5]=x*l+d,t[9]=h*l-p,t[2]=-l,t[6]=a*c,t[10]=s*c}else if(e.order==="YZX"){let d=s*c,h=s*l,p=a*c,x=a*l;t[0]=c*u,t[4]=x-d*f,t[8]=p*f+h,t[1]=f,t[5]=s*u,t[9]=-a*u,t[2]=-l*u,t[6]=h*f+p,t[10]=d-x*f}else if(e.order==="XZY"){let d=s*c,h=s*l,p=a*c,x=a*l;t[0]=c*u,t[4]=-f,t[8]=l*u,t[1]=d*f+x,t[5]=s*u,t[9]=h*f-p,t[2]=p*f-h,t[6]=a*u,t[10]=x*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose($1,e,q1)}lookAt(e,t,i){let r=this.elements;return Kn.subVectors(e,t),Kn.lengthSq()===0&&(Kn.z=1),Kn.normalize(),Xr.crossVectors(i,Kn),Xr.lengthSq()===0&&(Math.abs(i.z)===1?Kn.x+=1e-4:Kn.z+=1e-4,Kn.normalize(),Xr.crossVectors(i,Kn)),Xr.normalize(),Wd.crossVectors(Kn,Xr),r[0]=Xr.x,r[4]=Wd.x,r[8]=Kn.x,r[1]=Xr.y,r[5]=Wd.y,r[9]=Kn.y,r[2]=Xr.z,r[6]=Wd.z,r[10]=Kn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,o=this.elements,s=i[0],a=i[4],c=i[8],l=i[12],u=i[1],f=i[5],d=i[9],h=i[13],p=i[2],x=i[6],g=i[10],m=i[14],C=i[3],T=i[7],S=i[11],w=i[15],b=r[0],D=r[4],y=r[8],M=r[12],P=r[1],I=r[5],O=r[9],$=r[13],Y=r[2],B=r[6],W=r[10],z=r[14],K=r[3],ee=r[7],pe=r[11],ye=r[15];return o[0]=s*b+a*P+c*Y+l*K,o[4]=s*D+a*I+c*B+l*ee,o[8]=s*y+a*O+c*W+l*pe,o[12]=s*M+a*$+c*z+l*ye,o[1]=u*b+f*P+d*Y+h*K,o[5]=u*D+f*I+d*B+h*ee,o[9]=u*y+f*O+d*W+h*pe,o[13]=u*M+f*$+d*z+h*ye,o[2]=p*b+x*P+g*Y+m*K,o[6]=p*D+x*I+g*B+m*ee,o[10]=p*y+x*O+g*W+m*pe,o[14]=p*M+x*$+g*z+m*ye,o[3]=C*b+T*P+S*Y+w*K,o[7]=C*D+T*I+S*B+w*ee,o[11]=C*y+T*O+S*W+w*pe,o[15]=C*M+T*$+S*z+w*ye,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],o=e[12],s=e[1],a=e[5],c=e[9],l=e[13],u=e[2],f=e[6],d=e[10],h=e[14],p=e[3],x=e[7],g=e[11],m=e[15],C=c*h-l*d,T=a*h-l*f,S=a*d-c*f,w=s*h-l*u,b=s*d-c*u,D=s*f-a*u;return t*(x*C-g*T+m*S)-i*(p*C-g*w+m*b)+r*(p*T-x*w+m*D)-o*(p*S-x*b+g*D)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],r=e[8],o=e[1],s=e[5],a=e[9],c=e[2],l=e[6],u=e[10];return t*(s*u-a*l)-i*(o*u-a*c)+r*(o*l-s*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],c=e[6],l=e[7],u=e[8],f=e[9],d=e[10],h=e[11],p=e[12],x=e[13],g=e[14],m=e[15],C=t*a-i*s,T=t*c-r*s,S=t*l-o*s,w=i*c-r*a,b=i*l-o*a,D=r*l-o*c,y=u*x-f*p,M=u*g-d*p,P=u*m-h*p,I=f*g-d*x,O=f*m-h*x,$=d*m-h*g,Y=C*$-T*O+S*I+w*P-b*M+D*y;if(Y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let B=1/Y;return e[0]=(a*$-c*O+l*I)*B,e[1]=(r*O-i*$-o*I)*B,e[2]=(x*D-g*b+m*w)*B,e[3]=(d*b-f*D-h*w)*B,e[4]=(c*P-s*$-l*M)*B,e[5]=(t*$-r*P+o*M)*B,e[6]=(g*S-p*D-m*T)*B,e[7]=(u*D-d*S+h*T)*B,e[8]=(s*O-a*P+l*y)*B,e[9]=(i*P-t*O-o*y)*B,e[10]=(p*b-x*S+m*C)*B,e[11]=(f*S-u*b-h*C)*B,e[12]=(a*M-s*I-c*y)*B,e[13]=(t*I-i*M+r*y)*B,e[14]=(x*T-p*w-g*C)*B,e[15]=(u*w-f*T+d*C)*B,this}scale(e){let t=this.elements,i=e.x,r=e.y,o=e.z;return t[0]*=i,t[4]*=r,t[8]*=o,t[1]*=i,t[5]*=r,t[9]*=o,t[2]*=i,t[6]*=r,t[10]*=o,t[3]*=i,t[7]*=r,t[11]*=o,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),o=1-i,s=e.x,a=e.y,c=e.z,l=o*s,u=o*a;return this.set(l*s+i,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+i,u*c-r*s,0,l*c-r*a,u*c+r*s,o*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,o,s){return this.set(1,i,o,0,e,1,s,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,o=t._x,s=t._y,a=t._z,c=t._w,l=o+o,u=s+s,f=a+a,d=o*l,h=o*u,p=o*f,x=s*u,g=s*f,m=a*f,C=c*l,T=c*u,S=c*f,w=i.x,b=i.y,D=i.z;return r[0]=(1-(x+m))*w,r[1]=(h+S)*w,r[2]=(p-T)*w,r[3]=0,r[4]=(h-S)*b,r[5]=(1-(d+m))*b,r[6]=(g+C)*b,r[7]=0,r[8]=(p+T)*D,r[9]=(g-C)*D,r[10]=(1-(d+x))*D,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let o=this.determinantAffine();if(o===0)return i.set(1,1,1),t.identity(),this;let s=Js.set(r[0],r[1],r[2]).length(),a=Js.set(r[4],r[5],r[6]).length(),c=Js.set(r[8],r[9],r[10]).length();o<0&&(s=-s),Ai.copy(this);let l=1/s,u=1/a,f=1/c;return Ai.elements[0]*=l,Ai.elements[1]*=l,Ai.elements[2]*=l,Ai.elements[4]*=u,Ai.elements[5]*=u,Ai.elements[6]*=u,Ai.elements[8]*=f,Ai.elements[9]*=f,Ai.elements[10]*=f,t.setFromRotationMatrix(Ai),i.x=s,i.y=a,i.z=c,this}makePerspective(e,t,i,r,o,s,a=Ni,c=!1){let l=this.elements,u=2*o/(t-e),f=2*o/(i-r),d=(t+e)/(t-e),h=(i+r)/(i-r),p,x;if(c)p=o/(s-o),x=s*o/(s-o);else if(a===Ni)p=-(s+o)/(s-o),x=-2*s*o/(s-o);else if(a===ua)p=-s/(s-o),x=-s*o/(s-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=f,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,o,s,a=Ni,c=!1){let l=this.elements,u=2/(t-e),f=2/(i-r),d=-(t+e)/(t-e),h=-(i+r)/(i-r),p,x;if(c)p=1/(s-o),x=s/(s-o);else if(a===Ni)p=-2/(s-o),x=-(s+o)/(s-o);else if(a===ua)p=-1/(s-o),x=-o/(s-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=f,l[9]=0,l[13]=h,l[2]=0,l[6]=0,l[10]=p,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Js=new k,Ai=new At,$1=new k(0,0,0),q1=new k(1,1,1),Xr=new k,Wd=new k,Kn=new k,ub=new At,db=new nr,jc=(()=>{class n{constructor(t=0,i=0,r=0,o=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=o}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,o=this._order){return this._x=t,this._y=i,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){let o=t.elements,s=o[0],a=o[4],c=o[8],l=o[1],u=o[5],f=o[9],d=o[2],h=o[6],p=o[10];switch(i){case"XYZ":this._y=Math.asin(it(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-f,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-it(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(c,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(it(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-it(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(it(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,u),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(c,p));break;case"XZY":this._z=Math.asin(-it(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(c,s)):(this._x=Math.atan2(-f,p),this._y=0);break;default:ke("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return ub.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ub,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return db.setFromEuler(this),this.setFromQuaternion(db,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}return n.DEFAULT_ORDER="XYZ",n})(),Wc=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},X1=0,fb=new k,Qs=new nr,xr=new At,$d=new k,Oc=new k,Y1=new k,Z1=new nr,hb=new k(1,0,0),pb=new k(0,1,0),mb=new k(0,0,1),gb={type:"added"},K1={type:"removed"},ea={type:"childadded",child:null},Mv={type:"childremoved",child:null},Ar=(()=>{class n extends tr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:X1++}),this.uuid=gl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new k,i=new jc,r=new nr,o=new k(1,1,1);function s(){r.setFromEuler(i,!1)}function a(){i.setFromQuaternion(r,void 0,!1)}i._onChange(s),r._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new At},normalMatrix:{value:new Ve}}),this.matrix=new At,this.matrixWorld=new At,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Qs.setFromAxisAngle(t,i),this.quaternion.multiply(Qs),this}rotateOnWorldAxis(t,i){return Qs.setFromAxisAngle(t,i),this.quaternion.premultiply(Qs),this}rotateX(t){return this.rotateOnAxis(hb,t)}rotateY(t){return this.rotateOnAxis(pb,t)}rotateZ(t){return this.rotateOnAxis(mb,t)}translateOnAxis(t,i){return fb.copy(t).applyQuaternion(this.quaternion),this.position.add(fb.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(hb,t)}translateY(t){return this.translateOnAxis(pb,t)}translateZ(t){return this.translateOnAxis(mb,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(xr.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?$d.copy(t):$d.set(t,i,r);let o=this.parent;this.updateWorldMatrix(!0,!1),Oc.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xr.lookAt(Oc,$d,this.up):xr.lookAt($d,Oc,this.up),this.quaternion.setFromRotationMatrix(xr),o&&(xr.extractRotation(o.matrixWorld),Qs.setFromRotationMatrix(xr),this.quaternion.premultiply(Qs.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Ue("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(gb),ea.child=t,this.dispatchEvent(ea),ea.child=null):Ue("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(K1),Mv.child=t,this.dispatchEvent(Mv),Mv.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),xr.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),xr.multiply(t.parent.matrixWorld)),t.applyMatrix4(xr),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(gb),ea.child=t,this.dispatchEvent(ea),ea.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,o=this.children.length;r<o;r++){let a=this.children[r].getObjectByProperty(t,i);if(a!==void 0)return a}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);let o=this.children;for(let s=0,a=o.length;s<a;s++)o[s].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oc,t,Y1),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oc,Z1,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].traverseVisible(t)}traverseAncestors(t){let i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let i=t.x,r=t.y,o=t.z,s=this.matrix.elements;s[12]+=i-s[0]*i-s[4]*r-s[8]*o,s[13]+=r-s[1]*i-s[5]*r-s[9]*o,s[14]+=o-s[2]*i-s[6]*r-s[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i,r=!1){let o=this.parent;if(t===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),i===!0){let s=this.children;for(let a=0,c=s.length;a<c;a++)s[a].updateWorldMatrix(!1,!0,r)}}toJSON(t){let i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(c=>xt(_e({},c),{boundingBox:c.boundingBox?c.boundingBox.toJSON():void 0,boundingSphere:c.boundingSphere?c.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(c=>_e({},c)),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(t),o.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function s(c,l){return c[l.uuid]===void 0&&(c[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=s(t.geometries,this.geometry);let c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){let l=c.shapes;if(Array.isArray(l))for(let u=0,f=l.length;u<f;u++){let d=l[u];s(t.shapes,d)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let c=[];for(let l=0,u=this.material.length;l<u;l++)c.push(s(t.materials,this.material[l]));o.material=c}else o.material=s(t.materials,this.material);if(this.children.length>0){o.children=[];for(let c=0;c<this.children.length;c++)o.children.push(this.children[c].toJSON(t).object)}if(this.animations.length>0){o.animations=[];for(let c=0;c<this.animations.length;c++){let l=this.animations[c];o.animations.push(s(t.animations,l))}}if(i){let c=a(t.geometries),l=a(t.materials),u=a(t.textures),f=a(t.images),d=a(t.shapes),h=a(t.skeletons),p=a(t.animations),x=a(t.nodes);c.length>0&&(r.geometries=c),l.length>0&&(r.materials=l),u.length>0&&(r.textures=u),f.length>0&&(r.images=f),d.length>0&&(r.shapes=d),h.length>0&&(r.skeletons=h),p.length>0&&(r.animations=p),x.length>0&&(r.nodes=x)}return r.object=o,r;function a(c){let l=[];for(let u in c){let f=c[u];delete f.metadata,l.push(f)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){let o=t.children[r];this.add(o.clone())}return this}}return n.DEFAULT_UP=new k(0,1,0),n.DEFAULT_MATRIX_AUTO_UPDATE=!0,n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0,n})(),Xo=class extends Ar{constructor(){super(),this.isGroup=!0,this.type="Group"}},J1={type:"move"},ha=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,o=null,s=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){s=!0;for(let x of e.hand.values()){let g=t.getJointPose(x,i),m=this._getHandJoint(l,x);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],d=u.position.distanceTo(f.position),h=.02,p=.005;l.inputState.pinching&&d>h+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=h-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,i),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&o!==null&&(r=o),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(J1)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=o!==null),l!==null&&(l.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Xo;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},uM={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yr={h:0,s:0,l:0},qd={h:0,s:0,l:0};function wv(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var qe=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Qn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=tt.workingColorSpace){return this.r=e,this.g=t,this.b=i,tt.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=tt.workingColorSpace){if(e=z1(e,1),t=it(t,0,1),i=it(i,0,1),t===0)this.r=this.g=this.b=i;else{let o=i<=.5?i*(1+t):i+t-i*t,s=2*i-o;this.r=wv(s,o,e+1/3),this.g=wv(s,o,e),this.b=wv(s,o,e-1/3)}return tt.colorSpaceToWorking(this,r),this}setStyle(e,t=Qn){function i(o){o!==void 0&&parseFloat(o)<1&&ke("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o,s=r[1],a=r[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:ke("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let o=r[1],s=o.length;if(s===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(o,16),t);ke("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Qn){let i=uM[e.toLowerCase()];return i!==void 0?this.setHex(i,t):ke("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=wr(e.r),this.g=wr(e.g),this.b=wr(e.b),this}copyLinearToSRGB(e){return this.r=la(e.r),this.g=la(e.g),this.b=la(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Qn){return tt.workingToColorSpace(En.copy(this),e),Math.round(it(En.r*255,0,255))*65536+Math.round(it(En.g*255,0,255))*256+Math.round(it(En.b*255,0,255))}getHexString(e=Qn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tt.workingColorSpace){tt.workingToColorSpace(En.copy(this),t);let i=En.r,r=En.g,o=En.b,s=Math.max(i,r,o),a=Math.min(i,r,o),c,l,u=(a+s)/2;if(a===s)c=0,l=0;else{let f=s-a;switch(l=u<=.5?f/(s+a):f/(2-s-a),s){case i:c=(r-o)/f+(r<o?6:0);break;case r:c=(o-i)/f+2;break;case o:c=(i-r)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=tt.workingColorSpace){return tt.workingToColorSpace(En.copy(this),t),e.r=En.r,e.g=En.g,e.b=En.b,e}getStyle(e=Qn){tt.workingToColorSpace(En.copy(this),e);let t=En.r,i=En.g,r=En.b;return e!==Qn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Yr),this.setHSL(Yr.h+e,Yr.s+t,Yr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Yr),e.getHSL(qd);let i=_v(Yr.h,qd.h,t),r=_v(Yr.s,qd.s,t),o=_v(Yr.l,qd.l,t);return this.setHSL(i,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,o=e.elements;return this.r=o[0]*t+o[3]*i+o[6]*r,this.g=o[1]*t+o[4]*i+o[7]*r,this.b=o[2]*t+o[5]*i+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},En=new qe;qe.NAMES=uM;var $c=class n{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new qe(e),this.density=t}clone(){return new n(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var qc=class extends Ar{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new jc,this.environmentIntensity=1,this.environmentRotation=new jc,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Ii=new k,Sr=new k,Cv=new k,Er=new k,ta=new k,na=new k,vb=new k,Tv=new k,Dv=new k,Av=new k,Iv=new It,Rv=new It,Nv=new It,eo=class n{constructor(e=new k,t=new k,i=new k){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Ii.subVectors(e,t),r.cross(Ii);let o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,t,i,r,o){Ii.subVectors(r,t),Sr.subVectors(i,t),Cv.subVectors(e,t);let s=Ii.dot(Ii),a=Ii.dot(Sr),c=Ii.dot(Cv),l=Sr.dot(Sr),u=Sr.dot(Cv),f=s*l-a*a;if(f===0)return o.set(0,0,0),null;let d=1/f,h=(l*c-a*u)*d,p=(s*u-a*c)*d;return o.set(1-h-p,p,h)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Er)===null?!1:Er.x>=0&&Er.y>=0&&Er.x+Er.y<=1}static getInterpolation(e,t,i,r,o,s,a,c){return this.getBarycoord(e,t,i,r,Er)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(o,Er.x),c.addScaledVector(s,Er.y),c.addScaledVector(a,Er.z),c)}static getInterpolatedAttribute(e,t,i,r,o,s){return Iv.setScalar(0),Rv.setScalar(0),Nv.setScalar(0),Iv.fromBufferAttribute(e,t),Rv.fromBufferAttribute(e,i),Nv.fromBufferAttribute(e,r),s.setScalar(0),s.addScaledVector(Iv,o.x),s.addScaledVector(Rv,o.y),s.addScaledVector(Nv,o.z),s}static isFrontFacing(e,t,i,r){return Ii.subVectors(i,t),Sr.subVectors(e,t),Ii.cross(Sr).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ii.subVectors(this.c,this.b),Sr.subVectors(this.a,this.b),Ii.cross(Sr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,o){return n.getInterpolation(e,this.a,this.b,this.c,t,i,r,o)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,o=this.c,s,a;ta.subVectors(r,i),na.subVectors(o,i),Tv.subVectors(e,i);let c=ta.dot(Tv),l=na.dot(Tv);if(c<=0&&l<=0)return t.copy(i);Dv.subVectors(e,r);let u=ta.dot(Dv),f=na.dot(Dv);if(u>=0&&f<=u)return t.copy(r);let d=c*f-u*l;if(d<=0&&c>=0&&u<=0)return s=c/(c-u),t.copy(i).addScaledVector(ta,s);Av.subVectors(e,o);let h=ta.dot(Av),p=na.dot(Av);if(p>=0&&h<=p)return t.copy(o);let x=h*l-c*p;if(x<=0&&l>=0&&p<=0)return a=l/(l-p),t.copy(i).addScaledVector(na,a);let g=u*p-h*f;if(g<=0&&f-u>=0&&h-p>=0)return vb.subVectors(o,r),a=(f-u)/(f-u+(h-p)),t.copy(r).addScaledVector(vb,a);let m=1/(g+x+d);return s=x*m,a=d*m,t.copy(i).addScaledVector(ta,s).addScaledVector(na,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},no=class{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Ri.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Ri.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Ri.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let o=i.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let s=0,a=o.count;s<a;s++)e.isMesh===!0?e.getVertexPosition(s,Ri):Ri.fromBufferAttribute(o,s),Ri.applyMatrix4(e.matrixWorld),this.expandByPoint(Ri);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Xd.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Xd.copy(i.boundingBox)),Xd.applyMatrix4(e.matrixWorld),this.union(Xd)}let r=e.children;for(let o=0,s=r.length;o<s;o++)this.expandByObject(r[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ri),Ri.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Fc),Yd.subVectors(this.max,Fc),ia.subVectors(e.a,Fc),ra.subVectors(e.b,Fc),oa.subVectors(e.c,Fc),Zr.subVectors(ra,ia),Kr.subVectors(oa,ra),Go.subVectors(ia,oa);let t=[0,-Zr.z,Zr.y,0,-Kr.z,Kr.y,0,-Go.z,Go.y,Zr.z,0,-Zr.x,Kr.z,0,-Kr.x,Go.z,0,-Go.x,-Zr.y,Zr.x,0,-Kr.y,Kr.x,0,-Go.y,Go.x,0];return!Pv(t,ia,ra,oa,Yd)||(t=[1,0,0,0,1,0,0,0,1],!Pv(t,ia,ra,oa,Yd))?!1:(Zd.crossVectors(Zr,Kr),t=[Zd.x,Zd.y,Zd.z],Pv(t,ia,ra,oa,Yd))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ri).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ri).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(br[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),br[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),br[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),br[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),br[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),br[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),br[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),br[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(br),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},br=[new k,new k,new k,new k,new k,new k,new k,new k],Ri=new k,Xd=new no,ia=new k,ra=new k,oa=new k,Zr=new k,Kr=new k,Go=new k,Fc=new k,Yd=new k,Zd=new k,jo=new k;function Pv(n,e,t,i,r){for(let o=0,s=n.length-3;o<=s;o+=3){jo.fromArray(n,o);let a=r.x*Math.abs(jo.x)+r.y*Math.abs(jo.y)+r.z*Math.abs(jo.z),c=e.dot(jo),l=t.dot(jo),u=i.dot(jo);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var Zt=new k,Kd=new ot,Q1=0,bn=class extends tr{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Q1++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Xv,this.updateRanges=[],this.gpuType=Oi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Kd.fromBufferAttribute(this,t),Kd.applyMatrix3(e),this.setXY(t,Kd.x,Kd.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix3(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix4(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.applyNormalMatrix(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.transformDirection(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Lc(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=kn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Lc(t,this.array)),t}setX(e,t){return this.normalized&&(t=kn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Lc(t,this.array)),t}setY(e,t){return this.normalized&&(t=kn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Lc(t,this.array)),t}setZ(e,t){return this.normalized&&(t=kn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Lc(t,this.array)),t}setW(e,t){return this.normalized&&(t=kn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=kn(t,this.array),i=kn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=kn(t,this.array),i=kn(i,this.array),r=kn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,o){return e*=this.itemSize,this.normalized&&(t=kn(t,this.array),i=kn(i,this.array),r=kn(r,this.array),o=kn(o,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Xv&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}};var Xc=class extends bn{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Yc=class extends bn{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var fi=class extends bn{constructor(e,t,i){super(new Float32Array(e),t,i)}},eN=new no,kc=new k,Lv=new k,Jo=class{constructor(e=new k,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):eN.setFromPoints(e).getCenter(i);let r=0;for(let o=0,s=e.length;o<s;o++)r=Math.max(r,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;kc.subVectors(e,this.center);let t=kc.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(kc,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Lv.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(kc.copy(e.center).add(Lv)),this.expandByPoint(kc.copy(e.center).sub(Lv))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},tN=0,di=new At,Ov=new Ar,sa=new k,Jn=new no,Uc=new no,sn=new k,ti=class n extends tr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:tN++}),this.uuid=gl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(V1(e)?Yc:Xc)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let o=new Ve().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return di.makeRotationFromQuaternion(e),this.applyMatrix4(di),this}rotateX(e){return di.makeRotationX(e),this.applyMatrix4(di),this}rotateY(e){return di.makeRotationY(e),this.applyMatrix4(di),this}rotateZ(e){return di.makeRotationZ(e),this.applyMatrix4(di),this}translate(e,t,i){return di.makeTranslation(e,t,i),this.applyMatrix4(di),this}scale(e,t,i){return di.makeScale(e,t,i),this.applyMatrix4(di),this}lookAt(e){return Ov.lookAt(e),Ov.updateMatrix(),this.applyMatrix4(Ov.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(sa).negate(),this.translate(sa.x,sa.y,sa.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let r=0,o=e.length;r<o;r++){let s=e[r];i.push(s.x,s.y,s.z||0)}this.setAttribute("position",new fi(i,3))}else{let i=Math.min(e.length,t.count);for(let r=0;r<i;r++){let o=e[r];t.setXYZ(r,o.x,o.y,o.z||0)}e.length>t.count&&ke("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new no);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ue("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let o=t[i];Jn.setFromBufferAttribute(o),this.morphTargetsRelative?(sn.addVectors(this.boundingBox.min,Jn.min),this.boundingBox.expandByPoint(sn),sn.addVectors(this.boundingBox.max,Jn.max),this.boundingBox.expandByPoint(sn)):(this.boundingBox.expandByPoint(Jn.min),this.boundingBox.expandByPoint(Jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ue('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Jo);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ue("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){let i=this.boundingSphere.center;if(Jn.setFromBufferAttribute(e),t)for(let o=0,s=t.length;o<s;o++){let a=t[o];Uc.setFromBufferAttribute(a),this.morphTargetsRelative?(sn.addVectors(Jn.min,Uc.min),Jn.expandByPoint(sn),sn.addVectors(Jn.max,Uc.max),Jn.expandByPoint(sn)):(Jn.expandByPoint(Uc.min),Jn.expandByPoint(Uc.max))}Jn.getCenter(i);let r=0;for(let o=0,s=e.count;o<s;o++)sn.fromBufferAttribute(e,o),r=Math.max(r,i.distanceToSquared(sn));if(t)for(let o=0,s=t.length;o<s;o++){let a=t[o],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)sn.fromBufferAttribute(a,l),c&&(sa.fromBufferAttribute(e,l),sn.add(sa)),r=Math.max(r,i.distanceToSquared(sn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Ue('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ue("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,r=t.normal,o=t.uv,s=this.getAttribute("tangent");(s===void 0||s.count!==i.count)&&(s=new bn(new Float32Array(4*i.count),4),this.setAttribute("tangent",s));let a=[],c=[];for(let y=0;y<i.count;y++)a[y]=new k,c[y]=new k;let l=new k,u=new k,f=new k,d=new ot,h=new ot,p=new ot,x=new k,g=new k;function m(y,M,P){l.fromBufferAttribute(i,y),u.fromBufferAttribute(i,M),f.fromBufferAttribute(i,P),d.fromBufferAttribute(o,y),h.fromBufferAttribute(o,M),p.fromBufferAttribute(o,P),u.sub(l),f.sub(l),h.sub(d),p.sub(d);let I=1/(h.x*p.y-p.x*h.y);isFinite(I)&&(x.copy(u).multiplyScalar(p.y).addScaledVector(f,-h.y).multiplyScalar(I),g.copy(f).multiplyScalar(h.x).addScaledVector(u,-p.x).multiplyScalar(I),a[y].add(x),a[M].add(x),a[P].add(x),c[y].add(g),c[M].add(g),c[P].add(g))}let C=this.groups;C.length===0&&(C=[{start:0,count:e.count}]);for(let y=0,M=C.length;y<M;++y){let P=C[y],I=P.start,O=P.count;for(let $=I,Y=I+O;$<Y;$+=3)m(e.getX($+0),e.getX($+1),e.getX($+2))}let T=new k,S=new k,w=new k,b=new k;function D(y){w.fromBufferAttribute(r,y),b.copy(w);let M=a[y];T.copy(M),T.sub(w.multiplyScalar(w.dot(M))).normalize(),S.crossVectors(b,M);let I=S.dot(c[y])<0?-1:1;s.setXYZW(y,T.x,T.y,T.z,I)}for(let y=0,M=C.length;y<M;++y){let P=C[y],I=P.start,O=P.count;for(let $=I,Y=I+O;$<Y;$+=3)D(e.getX($+0)),D(e.getX($+1)),D(e.getX($+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new bn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,h=i.count;d<h;d++)i.setXYZ(d,0,0,0);let r=new k,o=new k,s=new k,a=new k,c=new k,l=new k,u=new k,f=new k;if(e)for(let d=0,h=e.count;d<h;d+=3){let p=e.getX(d+0),x=e.getX(d+1),g=e.getX(d+2);r.fromBufferAttribute(t,p),o.fromBufferAttribute(t,x),s.fromBufferAttribute(t,g),u.subVectors(s,o),f.subVectors(r,o),u.cross(f),a.fromBufferAttribute(i,p),c.fromBufferAttribute(i,x),l.fromBufferAttribute(i,g),a.add(u),c.add(u),l.add(u),i.setXYZ(p,a.x,a.y,a.z),i.setXYZ(x,c.x,c.y,c.z),i.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,h=t.count;d<h;d+=3)r.fromBufferAttribute(t,d+0),o.fromBufferAttribute(t,d+1),s.fromBufferAttribute(t,d+2),u.subVectors(s,o),f.subVectors(r,o),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)sn.fromBufferAttribute(e,t),sn.normalize(),e.setXYZ(t,sn.x,sn.y,sn.z)}toNonIndexed(){function e(a,c){let l=a.array,u=a.itemSize,f=a.normalized,d=new l.constructor(c.length*u),h=0,p=0;for(let x=0,g=c.length;x<g;x++){a.isInterleavedBufferAttribute?h=c[x]*a.data.stride+a.offset:h=c[x]*u;for(let m=0;m<u;m++)d[p++]=l[h++]}return new bn(d,u,f)}if(this.index===null)return ke("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,r=this.attributes;for(let a in r){let c=r[a],l=e(c,i);t.setAttribute(a,l)}let o=this.morphAttributes;for(let a in o){let c=[],l=o[a];for(let u=0,f=l.length;u<f;u++){let d=l[u],h=e(d,i);c.push(h)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let a=0,c=s.length;a<c;a++){let l=s[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let r={},o=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let f=0,d=l.length;f<d;f++){let h=l[f];u.push(h.toJSON(e.data))}u.length>0&&(r[c]=u,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let r=e.attributes;for(let l in r){let u=r[l];this.setAttribute(l,u.clone(t))}let o=e.morphAttributes;for(let l in o){let u=[],f=o[l];for(let d=0,h=f.length;d<h;d++)u.push(f[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let s=e.groups;for(let l=0,u=s.length;l<u;l++){let f=s[l];this.addGroup(f.start,f.count,f.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var nN=0,io=class extends tr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:nN++}),this.uuid=gl(),this.name="",this.type="Material",this.blending=Zo,this.side=Cr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=mf,this.blendDst=gf,this.blendEquation=to,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=Ko,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qo,this.stencilZFail=qo,this.stencilZPass=qo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){ke(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){ke(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Zo&&(i.blending=this.blending),this.side!==Cr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==mf&&(i.blendSrc=this.blendSrc),this.blendDst!==gf&&(i.blendDst=this.blendDst),this.blendEquation!==to&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ko&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==qv&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qo&&(i.stencilFail=this.stencilFail),this.stencilZFail!==qo&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==qo&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(o){let s=[];for(let a in o){let c=o[a];delete c.metadata,s.push(c)}return s}if(t){let o=r(e.textures),s=r(e.images);o.length>0&&(i.textures=o),s.length>0&&(i.images=s)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new qe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ot().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ot().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let o=0;o!==r;++o)i[o]=t[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Mr=new k,Fv=new k,Jd=new k,Jr=new k,kv=new k,Qd=new k,Uv=new k,Zc=class{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Mr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Mr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Mr.copy(this.origin).addScaledVector(this.direction,t),Mr.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Fv.copy(e).add(t).multiplyScalar(.5),Jd.copy(t).sub(e).normalize(),Jr.copy(this.origin).sub(Fv);let o=e.distanceTo(t)*.5,s=-this.direction.dot(Jd),a=Jr.dot(this.direction),c=-Jr.dot(Jd),l=Jr.lengthSq(),u=Math.abs(1-s*s),f,d,h,p;if(u>0)if(f=s*c-a,d=s*a-c,p=o*u,f>=0)if(d>=-p)if(d<=p){let x=1/u;f*=x,d*=x,h=f*(f+s*d+2*a)+d*(s*f+d+2*c)+l}else d=o,f=Math.max(0,-(s*d+a)),h=-f*f+d*(d+2*c)+l;else d=-o,f=Math.max(0,-(s*d+a)),h=-f*f+d*(d+2*c)+l;else d<=-p?(f=Math.max(0,-(-s*o+a)),d=f>0?-o:Math.min(Math.max(-o,-c),o),h=-f*f+d*(d+2*c)+l):d<=p?(f=0,d=Math.min(Math.max(-o,-c),o),h=d*(d+2*c)+l):(f=Math.max(0,-(s*o+a)),d=f>0?o:Math.min(Math.max(-o,-c),o),h=-f*f+d*(d+2*c)+l);else d=s>0?-o:o,f=Math.max(0,-(s*d+a)),h=-f*f+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Fv).addScaledVector(Jd,d),h}intersectSphere(e,t){Mr.subVectors(e.center,this.origin);let i=Mr.dot(this.direction),r=Mr.dot(Mr)-i*i,o=e.radius*e.radius;if(r>o)return null;let s=Math.sqrt(o-r),a=i-s,c=i+s;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,o,s,a,c,l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),u>=0?(o=(e.min.y-d.y)*u,s=(e.max.y-d.y)*u):(o=(e.max.y-d.y)*u,s=(e.min.y-d.y)*u),i>s||o>r||((o>i||isNaN(i))&&(i=o),(s<r||isNaN(r))&&(r=s),f>=0?(a=(e.min.z-d.z)*f,c=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,c=(e.min.z-d.z)*f),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Mr)!==null}intersectTriangle(e,t,i,r,o){kv.subVectors(t,e),Qd.subVectors(i,e),Uv.crossVectors(kv,Qd);let s=this.direction.dot(Uv),a;if(s>0){if(r)return null;a=1}else if(s<0)a=-1,s=-s;else return null;Jr.subVectors(this.origin,e);let c=a*this.direction.dot(Qd.crossVectors(Jr,Qd));if(c<0)return null;let l=a*this.direction.dot(kv.cross(Jr));if(l<0||c+l>s)return null;let u=-a*Jr.dot(Uv);return u<0?null:this.at(u/s,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Kc=class extends io{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jc,this.combine=iy,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},yb=new At,Wo=new Zc,ef=new Jo,_b=new k,tf=new k,nf=new k,rf=new k,Bv=new k,of=new k,xb=new k,sf=new k,hi=class extends Ar{constructor(e=new ti,t=new Kc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){let a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,o=i.morphAttributes.position,s=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(o&&a){of.set(0,0,0);for(let c=0,l=o.length;c<l;c++){let u=a[c],f=o[c];u!==0&&(Bv.fromBufferAttribute(f,e),s?of.addScaledVector(Bv,u):of.addScaledVector(Bv.sub(t),u))}t.add(of)}return t}raycast(e,t){let i=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ef.copy(i.boundingSphere),ef.applyMatrix4(o),Wo.copy(e.ray).recast(e.near),!(ef.containsPoint(Wo.origin)===!1&&(Wo.intersectSphere(ef,_b)===null||Wo.origin.distanceToSquared(_b)>(e.far-e.near)**2))&&(yb.copy(o).invert(),Wo.copy(e.ray).applyMatrix4(yb),!(i.boundingBox!==null&&Wo.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Wo)))}_computeIntersections(e,t,i){let r,o=this.geometry,s=this.material,a=o.index,c=o.attributes.position,l=o.attributes.uv,u=o.attributes.uv1,f=o.attributes.normal,d=o.groups,h=o.drawRange;if(a!==null)if(Array.isArray(s))for(let p=0,x=d.length;p<x;p++){let g=d[p],m=s[g.materialIndex],C=Math.max(g.start,h.start),T=Math.min(a.count,Math.min(g.start+g.count,h.start+h.count));for(let S=C,w=T;S<w;S+=3){let b=a.getX(S),D=a.getX(S+1),y=a.getX(S+2);r=af(this,m,e,i,l,u,f,b,D,y),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{let p=Math.max(0,h.start),x=Math.min(a.count,h.start+h.count);for(let g=p,m=x;g<m;g+=3){let C=a.getX(g),T=a.getX(g+1),S=a.getX(g+2);r=af(this,s,e,i,l,u,f,C,T,S),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(s))for(let p=0,x=d.length;p<x;p++){let g=d[p],m=s[g.materialIndex],C=Math.max(g.start,h.start),T=Math.min(c.count,Math.min(g.start+g.count,h.start+h.count));for(let S=C,w=T;S<w;S+=3){let b=S,D=S+1,y=S+2;r=af(this,m,e,i,l,u,f,b,D,y),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{let p=Math.max(0,h.start),x=Math.min(c.count,h.start+h.count);for(let g=p,m=x;g<m;g+=3){let C=g,T=g+1,S=g+2;r=af(this,s,e,i,l,u,f,C,T,S),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}};function iN(n,e,t,i,r,o,s,a){let c;if(e.side===Rn?c=i.intersectTriangle(s,o,r,!0,a):c=i.intersectTriangle(r,o,s,e.side===Cr,a),c===null)return null;sf.copy(a),sf.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(sf);return l<t.near||l>t.far?null:{distance:l,point:sf.clone(),object:n}}function af(n,e,t,i,r,o,s,a,c,l){n.getVertexPosition(a,tf),n.getVertexPosition(c,nf),n.getVertexPosition(l,rf);let u=iN(n,e,t,i,tf,nf,rf,xb);if(u){let f=new k;eo.getBarycoord(xb,tf,nf,rf,f),r&&(u.uv=eo.getInterpolatedAttribute(r,a,c,l,f,new ot)),o&&(u.uv1=eo.getInterpolatedAttribute(o,a,c,l,f,new ot)),s&&(u.normal=eo.getInterpolatedAttribute(s,a,c,l,f,new k),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new k,materialIndex:0};eo.getNormal(tf,nf,rf,d.normal),u.face=d,u.barycoord=f}return u}var Rf=class extends sr{constructor(e=null,t=1,i=1,r,o,s,a,c,l=an,u=an,f,d){super(null,s,a,c,l,u,r,o,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Vv=new k,rN=new k,oN=new Ve,Ji=class{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=Vv.subVectors(i,t).cross(rN.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let r=e.delta(Vv),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/o;return i===!0&&(s<0||s>1)?null:t.copy(e.start).addScaledVector(r,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||oN.getNormalMatrix(e),r=this.coplanarPoint(Vv).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},$o=new Jo,sN=new ot(.5,.5),cf=new k,pa=class{constructor(e=new Ji,t=new Ji,i=new Ji,r=new Ji,o=new Ji,s=new Ji){this.planes=[e,t,i,r,o,s]}set(e,t,i,r,o,s){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(o),a[5].copy(s),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ni,i=!1){let r=this.planes,o=e.elements,s=o[0],a=o[1],c=o[2],l=o[3],u=o[4],f=o[5],d=o[6],h=o[7],p=o[8],x=o[9],g=o[10],m=o[11],C=o[12],T=o[13],S=o[14],w=o[15];if(r[0].setComponents(l-s,h-u,m-p,w-C).normalize(),r[1].setComponents(l+s,h+u,m+p,w+C).normalize(),r[2].setComponents(l+a,h+f,m+x,w+T).normalize(),r[3].setComponents(l-a,h-f,m-x,w-T).normalize(),i)r[4].setComponents(c,d,g,S).normalize(),r[5].setComponents(l-c,h-d,m-g,w-S).normalize();else if(r[4].setComponents(l-c,h-d,m-g,w-S).normalize(),t===Ni)r[5].setComponents(l+c,h+d,m+g,w+S).normalize();else if(t===ua)r[5].setComponents(c,d,g,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),$o.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),$o.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere($o)}intersectsSprite(e){$o.center.set(0,0,0);let t=sN.distanceTo(e.center);return $o.radius=.7071067811865476+t,$o.applyMatrix4(e.matrixWorld),this.intersectsSphere($o)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(cf.x=r.normal.x>0?e.max.x:e.min.x,cf.y=r.normal.y>0?e.max.y:e.min.y,cf.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(cf)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ma=class extends io{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new qe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Sb=new At,Yv=new Zc,lf=new Jo,uf=new k,Jc=class extends Ar{constructor(e=new ti,t=new ma){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,r=this.matrixWorld,o=e.params.Points.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),lf.copy(i.boundingSphere),lf.applyMatrix4(r),lf.radius+=o,e.ray.intersectsSphere(lf)===!1)return;Sb.copy(r).invert(),Yv.copy(e.ray).applyMatrix4(Sb);let a=o/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,f=i.attributes.position;if(l!==null){let d=Math.max(0,s.start),h=Math.min(l.count,s.start+s.count);for(let p=d,x=h;p<x;p++){let g=l.getX(p);uf.fromBufferAttribute(f,g),Eb(uf,g,c,r,e,t,this)}}else{let d=Math.max(0,s.start),h=Math.min(f.count,s.start+s.count);for(let p=d,x=h;p<x;p++)uf.fromBufferAttribute(f,p),Eb(uf,p,c,r,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){let a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}};function Eb(n,e,t,i,r,o,s){let a=Yv.distanceSqToPoint(n);if(a<t){let c=new k;Yv.closestPointToPoint(n,c),c.applyMatrix4(i);let l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;o.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:s})}}var Qc=class extends sr{constructor(e=[],t=ao,i,r,o,s,a,c,l,u){super(e,t,i,r,o,s,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},el=class extends sr{constructor(e,t,i,r,o,s,a,c,l){super(e,t,i,r,o,s,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Tr=class extends sr{constructor(e,t,i=Li,r,o,s,a=an,c=an,l,u=er,f=1){if(u!==er&&u!==lo)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:f};super(d,r,o,s,a,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new fa(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Nf=class extends Tr{constructor(e,t=Li,i=ao,r,o,s=an,a=an,c,l=er){let u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,t,i,r,o,s,a,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},tl=class extends sr{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},ga=class n extends ti{constructor(e=1,t=1,i=1,r=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:o,depthSegments:s};let a=this;r=Math.floor(r),o=Math.floor(o),s=Math.floor(s);let c=[],l=[],u=[],f=[],d=0,h=0;p("z","y","x",-1,-1,i,t,e,s,o,0),p("z","y","x",1,-1,i,t,-e,s,o,1),p("x","z","y",1,1,e,i,t,r,s,2),p("x","z","y",1,-1,e,i,-t,r,s,3),p("x","y","z",1,-1,e,t,i,r,o,4),p("x","y","z",-1,-1,e,t,-i,r,o,5),this.setIndex(c),this.setAttribute("position",new fi(l,3)),this.setAttribute("normal",new fi(u,3)),this.setAttribute("uv",new fi(f,2));function p(x,g,m,C,T,S,w,b,D,y,M){let P=S/D,I=w/y,O=S/2,$=w/2,Y=b/2,B=D+1,W=y+1,z=0,K=0,ee=new k;for(let pe=0;pe<W;pe++){let ye=pe*I-$;for(let Ee=0;Ee<B;Ee++){let ut=Ee*P-O;ee[x]=ut*C,ee[g]=ye*T,ee[m]=Y,l.push(ee.x,ee.y,ee.z),ee[x]=0,ee[g]=0,ee[m]=b>0?1:-1,u.push(ee.x,ee.y,ee.z),f.push(Ee/D),f.push(1-pe/y),z+=1}}for(let pe=0;pe<y;pe++)for(let ye=0;ye<D;ye++){let Ee=d+ye+B*pe,ut=d+ye+B*(pe+1),Pt=d+(ye+1)+B*(pe+1),dt=d+(ye+1)+B*pe;c.push(Ee,ut,dt),c.push(ut,Pt,dt),K+=6}a.addGroup(h,K,M),h+=K,d+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var nl=class n extends ti{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let o=e/2,s=t/2,a=Math.floor(i),c=Math.floor(r),l=a+1,u=c+1,f=e/a,d=t/c,h=[],p=[],x=[],g=[];for(let m=0;m<u;m++){let C=m*d-s;for(let T=0;T<l;T++){let S=T*f-o;p.push(S,-C,0),x.push(0,0,1),g.push(T/a),g.push(1-m/c)}}for(let m=0;m<c;m++)for(let C=0;C<a;C++){let T=C+l*m,S=C+l*(m+1),w=C+1+l*(m+1),b=C+1+l*m;h.push(T,S,b),h.push(S,w,b)}this.setIndex(h),this.setAttribute("position",new fi(p,3)),this.setAttribute("normal",new fi(x,3)),this.setAttribute("uv",new fi(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};function es(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let r=n[t][i];if(bb(r))r.isRenderTargetTexture?(ke("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone();else if(Array.isArray(r))if(bb(r[0])){let o=[];for(let s=0,a=r.length;s<a;s++)o[s]=r[s].clone();e[t][i]=o}else e[t][i]=r.slice();else e[t][i]=r}}return e}function Mn(n){let e={};for(let t=0;t<n.length;t++){let i=es(n[t]);for(let r in i)e[r]=i[r]}return e}function bb(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function aN(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Sy(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tt.workingColorSpace}var dM={clone:es,merge:Mn},cN=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lN=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ni=class extends io{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cN,this.fragmentShader=lN,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=es(e.uniforms),this.uniformsGroups=aN(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=t[r.value]||null;break;case"c":this.uniforms[i].value=new qe().setHex(r.value);break;case"v2":this.uniforms[i].value=new ot().fromArray(r.value);break;case"v3":this.uniforms[i].value=new k().fromArray(r.value);break;case"v4":this.uniforms[i].value=new It().fromArray(r.value);break;case"m3":this.uniforms[i].value=new Ve().fromArray(r.value);break;case"m4":this.uniforms[i].value=new At().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Pf=class extends ni{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Lf=class extends io{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Jb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Of=class extends io{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function df(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}var ro=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],o=t[i-1];n:{e:{let s;t:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<o)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(o=r,r=t[++i],e<r)break e}s=t.length;break t}if(!(e>=o)){let a=t[1];e<a&&(i=2,o=a);for(let c=i-2;;){if(o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(r=o,o=t[--i-1],e>=o)break e}s=i,i=0;break t}break n}for(;i<s;){let a=i+s>>>1;e<t[a]?s=a:i=a+1}if(r=t[i],o=t[i-1],o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,o,r)}return this.interpolate_(i,o,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,o=e*r;for(let s=0;s!==r;++s)t[s]=i[o+s];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ff=class extends ro{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:jv,endingEnd:jv}}intervalChanged_(e,t,i){let r=this.parameterPositions,o=e-2,s=e+1,a=r[o],c=r[s];if(a===void 0)switch(this.getSettings_().endingStart){case Wv:o=e,a=2*t-i;break;case $v:o=r.length-2,a=t+r[o]-r[o+1];break;default:o=e,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case Wv:s=e,c=2*i-t;break;case $v:s=1,c=i+r[1]-r[0];break;default:s=e-1,c=t}let l=(i-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-i),this._offsetPrev=o*u,this._offsetNext=s*u}interpolate_(e,t,i,r){let o=this.resultBuffer,s=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,h=this._weightNext,p=(i-t)/(r-t),x=p*p,g=x*p,m=-d*g+2*d*x-d*p,C=(1+d)*g+(-1.5-2*d)*x+(-.5+d)*p+1,T=(-1-h)*g+(1.5+h)*x+.5*p,S=h*g-h*x;for(let w=0;w!==a;++w)o[w]=m*s[u+w]+C*s[l+w]+T*s[c+w]+S*s[f+w];return o}},kf=class extends ro{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let o=this.resultBuffer,s=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(i-t)/(r-t),f=1-u;for(let d=0;d!==a;++d)o[d]=s[l+d]*f+s[c+d]*u;return o}},Uf=class extends ro{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Bf=class extends ro{interpolate_(e,t,i,r){let o=this.resultBuffer,s=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this.inTangents,f=this.outTangents;if(!u||!f){let p=(i-t)/(r-t),x=1-p;for(let g=0;g!==a;++g)o[g]=s[l+g]*x+s[c+g]*p;return o}let d=a*2,h=e-1;for(let p=0;p!==a;++p){let x=s[l+p],g=s[c+p],m=h*d+p*2,C=f[m],T=f[m+1],S=e*d+p*2,w=u[S],b=u[S+1],D=(i-t)/(r-t),y,M,P,I,O;for(let $=0;$<8;$++){y=D*D,M=y*D,P=1-D,I=P*P,O=I*P;let B=O*t+3*I*D*C+3*P*y*w+M*r-i;if(Math.abs(B)<1e-10)break;let W=3*I*(C-t)+6*P*D*(w-C)+3*y*(r-w);if(Math.abs(W)<1e-10)break;D=D-B/W,D=Math.max(0,Math.min(1,D))}o[p]=O*x+3*I*D*T+3*P*y*b+M*g}return o}},ii=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=df(t,this.TimeBufferType),this.values=df(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:df(e.times,Array),values:df(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Uf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new kf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ff(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Bf(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Bc:t=this.InterpolantFactoryMethodDiscrete;break;case Cf:t=this.InterpolantFactoryMethodLinear;break;case pf:t=this.InterpolantFactoryMethodSmooth;break;case Gv:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return ke("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Bc;case this.InterpolantFactoryMethodLinear:return Cf;case this.InterpolantFactoryMethodSmooth:return pf;case this.InterpolantFactoryMethodBezier:return Gv}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){let i=this.times,r=i.length,o=0,s=r-1;for(;o!==r&&i[o]<e;)++o;for(;s!==-1&&i[s]>t;)--s;if(++s,o!==0||s!==r){o>=s&&(s=Math.max(s,1),o=s-1);let a=this.getValueSize();this.times=i.slice(o,s),this.values=this.values.slice(o*a,s*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ue("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,o=i.length;o===0&&(Ue("KeyframeTrack: Track is empty.",this),e=!1);let s=null;for(let a=0;a!==o;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){Ue("KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(s!==null&&s>c){Ue("KeyframeTrack: Out of order keys.",this,a,c,s),e=!1;break}s=c}if(r!==void 0&&H1(r))for(let a=0,c=r.length;a!==c;++a){let l=r[a];if(isNaN(l)){Ue("KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===pf,o=e.length-1,s=1;for(let a=1;a<o;++a){let c=!1,l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(r)c=!0;else{let f=a*i,d=f-i,h=f+i;for(let p=0;p!==i;++p){let x=t[f+p];if(x!==t[d+p]||x!==t[h+p]){c=!0;break}}}if(c){if(a!==s){e[s]=e[a];let f=a*i,d=s*i;for(let h=0;h!==i;++h)t[d+h]=t[f+h]}++s}}if(o>0){e[s]=e[o];for(let a=o*i,c=s*i,l=0;l!==i;++l)t[c+l]=t[a+l];++s}return s!==e.length?(this.times=e.slice(0,s),this.values=t.slice(0,s*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};ii.prototype.ValueTypeName="";ii.prototype.TimeBufferType=Float32Array;ii.prototype.ValueBufferType=Float32Array;ii.prototype.DefaultInterpolation=Cf;var oo=class extends ii{constructor(e,t,i){super(e,t,i)}};oo.prototype.ValueTypeName="bool";oo.prototype.ValueBufferType=Array;oo.prototype.DefaultInterpolation=Bc;oo.prototype.InterpolantFactoryMethodLinear=void 0;oo.prototype.InterpolantFactoryMethodSmooth=void 0;var Vf=class extends ii{constructor(e,t,i,r){super(e,t,i,r)}};Vf.prototype.ValueTypeName="color";var Hf=class extends ii{constructor(e,t,i,r){super(e,t,i,r)}};Hf.prototype.ValueTypeName="number";var zf=class extends ro{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let o=this.resultBuffer,s=this.sampleValues,a=this.valueSize,c=(i-t)/(r-t),l=e*a;for(let u=l+a;l!==u;l+=4)nr.slerpFlat(o,0,s,l-a,s,l,c);return o}},il=class extends ii{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new zf(this.times,this.values,this.getValueSize(),e)}};il.prototype.ValueTypeName="quaternion";il.prototype.InterpolantFactoryMethodSmooth=void 0;var so=class extends ii{constructor(e,t,i){super(e,t,i)}};so.prototype.ValueTypeName="string";so.prototype.ValueBufferType=Array;so.prototype.DefaultInterpolation=Bc;so.prototype.InterpolantFactoryMethodLinear=void 0;so.prototype.InterpolantFactoryMethodSmooth=void 0;var Gf=class extends ii{constructor(e,t,i,r){super(e,t,i,r)}};Gf.prototype.ValueTypeName="vector";var jf=class extends Ar{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new qe(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};var Hv=new At,Mb=new k,wb=new k,Zv=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ot(512,512),this.mapType=Un,this.map=null,this.mapPass=null,this.matrix=new At,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new pa,this._frameExtents=new ot(1,1),this._viewportCount=1,this._viewports=[new It(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Mb.setFromMatrixPosition(e.matrixWorld),t.position.copy(Mb),wb.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(wb),t.updateMatrixWorld(),Hv.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Hv,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===ua||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Hv)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},ff=new k,hf=new nr,Ki=new k,rl=class extends Ar{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new At,this.projectionMatrix=new At,this.projectionMatrixInverse=new At,this.coordinateSystem=Ni,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ff,hf,Ki),Ki.x===1&&Ki.y===1&&Ki.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ff,hf,Ki.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(ff,hf,Ki),Ki.x===1&&Ki.y===1&&Ki.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ff,hf,Ki.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Qr=new k,Cb=new ot,Tb=new ot,mn=class extends rl{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Tf*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(yv*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Tf*2*Math.atan(Math.tan(yv*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Qr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Qr.x,Qr.y).multiplyScalar(-e/Qr.z),Qr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Qr.x,Qr.y).multiplyScalar(-e/Qr.z)}getViewSize(e,t){return this.getViewBounds(e,Cb,Tb),t.subVectors(Tb,Cb)}setViewOffset(e,t,i,r,o,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(yv*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,o=-.5*r,s=this.view;if(this.view!==null&&this.view.enabled){let c=s.fullWidth,l=s.fullHeight;o+=s.offsetX*r/c,t-=s.offsetY*i/l,r*=s.width/c,i*=s.height/l}let a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Kv=class extends Zv{constructor(){super(new mn(90,1,.5,500)),this.isPointLightShadow=!0}},va=class extends jf{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Kv}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},ol=class extends rl{constructor(e=-1,t=1,i=1,r=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,o=i-e,s=i+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=l*this.view.offsetX,s=o+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(o,s,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};var aa=-90,ca=1,Wf=class extends Ar{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new mn(aa,ca,e,t);r.layers=this.layers,this.add(r);let o=new mn(aa,ca,e,t);o.layers=this.layers,this.add(o);let s=new mn(aa,ca,e,t);s.layers=this.layers,this.add(s);let a=new mn(aa,ca,e,t);a.layers=this.layers,this.add(a);let c=new mn(aa,ca,e,t);c.layers=this.layers,this.add(c);let l=new mn(aa,ca,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,o,s,a,c]=t;for(let l of t)this.remove(l);if(e===Ni)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ua)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[o,s,a,c,l,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,1,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,2,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,4,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(f,d,h),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},$f=class extends mn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Ey="\\[\\]\\.:\\/",uN=new RegExp("["+Ey+"]","g"),by="[^"+Ey+"]",dN="[^"+Ey.replace("\\.","")+"]",fN=/((?:WC+[\/:])*)/.source.replace("WC",by),hN=/(WCOD+)?/.source.replace("WCOD",dN),pN=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",by),mN=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",by),gN=new RegExp("^"+fN+hN+pN+mN+"$"),vN=["material","materials","bones","map"],Jv=class{constructor(e,t,i){let r=i||Ut.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,o=i.length;r!==o;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Ut=(()=>{class n{constructor(t,i,r){this.path=i,this.parsedPath=r||n.parseTrackName(i),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,i,r){return t&&t.isAnimationObjectGroup?new n.Composite(t,i,r):new n(t,i,r)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(uN,"")}static parseTrackName(t){let i=gN.exec(t);if(i===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let r={nodeName:i[2],objectName:i[3],objectIndex:i[4],propertyName:i[5],propertyIndex:i[6]},o=r.nodeName&&r.nodeName.lastIndexOf(".");if(o!==void 0&&o!==-1){let s=r.nodeName.substring(o+1);vN.indexOf(s)!==-1&&(r.nodeName=r.nodeName.substring(0,o),r.objectName=s)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return r}static findNode(t,i){if(i===void 0||i===""||i==="."||i===-1||i===t.name||i===t.uuid)return t;if(t.skeleton){let r=t.skeleton.getBoneByName(i);if(r!==void 0)return r}if(t.children){let r=function(s){for(let a=0;a<s.length;a++){let c=s[a];if(c.name===i||c.uuid===i)return c;let l=r(c.children);if(l)return l}return null},o=r(t.children);if(o)return o}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,i){t[i]=this.targetObject[this.propertyName]}_getValue_array(t,i){let r=this.resolvedProperty;for(let o=0,s=r.length;o!==s;++o)t[i++]=r[o]}_getValue_arrayElement(t,i){t[i]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,i){this.resolvedProperty.toArray(t,i)}_setValue_direct(t,i){this.targetObject[this.propertyName]=t[i]}_setValue_direct_setNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,i){let r=this.resolvedProperty;for(let o=0,s=r.length;o!==s;++o)r[o]=t[i++]}_setValue_array_setNeedsUpdate(t,i){let r=this.resolvedProperty;for(let o=0,s=r.length;o!==s;++o)r[o]=t[i++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,i){let r=this.resolvedProperty;for(let o=0,s=r.length;o!==s;++o)r[o]=t[i++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,i){this.resolvedProperty[this.propertyIndex]=t[i]}_setValue_arrayElement_setNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,i){this.resolvedProperty.fromArray(t,i)}_setValue_fromArray_setNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,i){this.bind(),this.getValue(t,i)}_setValue_unbound(t,i){this.bind(),this.setValue(t,i)}bind(){let t=this.node,i=this.parsedPath,r=i.objectName,o=i.propertyName,s=i.propertyIndex;if(t||(t=n.findNode(this.rootNode,i.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){ke("PropertyBinding: No target node found for track: "+this.path+".");return}if(r){let u=i.objectIndex;switch(r){case"materials":if(!t.material){Ue("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Ue("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Ue("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let f=0;f<t.length;f++)if(t[f].name===u){u=f;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Ue("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Ue("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[r]===void 0){Ue("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[r]}if(u!==void 0){if(t[u]===void 0){Ue("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[u]}}let a=t[o];if(a===void 0){let u=i.nodeName;Ue("PropertyBinding: Trying to update property for track: "+u+"."+o+" but it wasn't found.",t);return}let c=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?c=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(o==="morphTargetInfluences"){if(!t.geometry){Ue("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Ue("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=o;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}return n.Composite=Jv,n})();Ut.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ut.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ut.prototype.GetterByBindingType=[Ut.prototype._getValue_direct,Ut.prototype._getValue_array,Ut.prototype._getValue_arrayElement,Ut.prototype._getValue_toArray];Ut.prototype.SetterByBindingTypeAndVersioning=[[Ut.prototype._setValue_direct,Ut.prototype._setValue_direct_setNeedsUpdate,Ut.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ut.prototype._setValue_array,Ut.prototype._setValue_array_setNeedsUpdate,Ut.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ut.prototype._setValue_arrayElement,Ut.prototype._setValue_arrayElement_setNeedsUpdate,Ut.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ut.prototype._setValue_fromArray,Ut.prototype._setValue_fromArray_setNeedsUpdate,Ut.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Xq=new Float32Array(1);var Qv=class n{static{n.prototype.isMatrix2=!0}constructor(e,t,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,r){let o=this.elements;return o[0]=e,o[2]=t,o[1]=i,o[3]=r,this}};function My(n,e,t,i){let r=yN(i);switch(t){case my:return n*e;case vy:return n*e/r.components*r.byteLength;case Qf:return n*e/r.components*r.byteLength;case uo:return n*e*2/r.components*r.byteLength;case eh:return n*e*2/r.components*r.byteLength;case gy:return n*e*3/r.components*r.byteLength;case pi:return n*e*4/r.components*r.byteLength;case th:return n*e*4/r.components*r.byteLength;case ul:case dl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case fl:case hl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ih:case oh:return Math.max(n,16)*Math.max(e,8)/4;case nh:case rh:return Math.max(n,8)*Math.max(e,8)/2;case sh:case ah:case lh:case uh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ch:case pl:case dh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case fh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case hh:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case ph:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case mh:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case gh:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case vh:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case yh:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case _h:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case xh:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Sh:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Eh:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case bh:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Mh:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case wh:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Ch:case Th:case Dh:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Ah:case Ih:return Math.ceil(n/4)*Math.ceil(e/4)*8;case ml:case Rh:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function yN(n){switch(n){case Un:case dy:return{byteLength:1,components:1};case _a:case fy:case or:return{byteLength:2,components:1};case Kf:case Jf:return{byteLength:2,components:4};case Li:case Zf:case Oi:return{byteLength:4,components:1};case hy:case py:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}}));typeof window<"u"&&(window.__THREE__?ke("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="185");function LM(){let n=null,e=!1,t=null,i=null;function r(o,s){t(o,s),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){n=o}}}function xN(n){let e=new WeakMap;function t(a,c){let l=a.array,u=a.usage,f=l.byteLength,d=n.createBuffer();n.bindBuffer(c,d),n.bufferData(c,l,u),a.onUploadCallback();let h;if(l instanceof Float32Array)h=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)h=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?h=n.HALF_FLOAT:h=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)h=n.SHORT;else if(l instanceof Uint32Array)h=n.UNSIGNED_INT;else if(l instanceof Int32Array)h=n.INT;else if(l instanceof Int8Array)h=n.BYTE;else if(l instanceof Uint8Array)h=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)h=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:h,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,c,l){let u=c.array,f=c.updateRanges;if(n.bindBuffer(l,a),f.length===0)n.bufferSubData(l,0,u);else{f.sort((h,p)=>h.start-p.start);let d=0;for(let h=1;h<f.length;h++){let p=f[d],x=f[h];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++d,f[d]=x)}f.length=d+1;for(let h=0,p=f.length;h<p;h++){let x=f[h];n.bufferSubData(l,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function s(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:r,remove:o,update:s}}var SN=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,EN=`#ifdef USE_ALPHAHASH
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
#endif`,bN=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,MN=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wN=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,CN=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,TN=`#ifdef USE_AOMAP
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
#endif`,DN=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,AN=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,IN=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,RN=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,NN=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,PN=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,LN=`#ifdef USE_IRIDESCENCE
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
#endif`,ON=`#ifdef USE_BUMPMAP
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
#endif`,FN=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,kN=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,UN=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,BN=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,VN=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,HN=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,zN=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,GN=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,jN=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,WN=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,$N=`vec3 transformedNormal = objectNormal;
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
#endif`,qN=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,XN=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,YN=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ZN=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,KN="gl_FragColor = linearToOutputTexel( gl_FragColor );",JN=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,QN=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,eP=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,tP=`#ifdef USE_ENVMAP
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
#endif`,nP=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,iP=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,rP=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,oP=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sP=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,aP=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cP=`#ifdef USE_GRADIENTMAP
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
}`,lP=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,uP=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,dP=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fP=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#endif
#include <lightprobes_pars_fragment>`,hP=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
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
#endif`,pP=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,mP=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gP=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vP=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yP=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,_P=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,xP=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,SP=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
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
#endif`,EP=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bP=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,MP=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wP=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,CP=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,TP=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,DP=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,AP=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,IP=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,RP=`#if defined( USE_POINTS_UV )
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
#endif`,NP=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,PP=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,LP=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,OP=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,FP=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kP=`#ifdef USE_MORPHTARGETS
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
#endif`,UP=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,BP=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,VP=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,HP=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zP=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,GP=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,jP=`#ifdef USE_NORMALMAP
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
#endif`,WP=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$P=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qP=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,XP=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,YP=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ZP=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,KP=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,JP=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,QP=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,eL=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tL=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,nL=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,iL=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,rL=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,oL=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
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
#endif`,sL=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,aL=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cL=`#ifdef USE_SKINNING
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
#endif`,lL=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,uL=`#ifdef USE_SKINNING
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
#endif`,dL=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fL=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hL=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pL=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,mL=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,gL=`#ifdef USE_TRANSMISSION
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
#endif`,vL=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yL=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_L=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xL=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,SL=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,EL=`uniform sampler2D t2D;
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
}`,bL=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ML=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wL=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,CL=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TL=`#include <common>
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
}`,DL=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,AL=`#define DISTANCE
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
}`,IL=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,RL=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,NL=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,PL=`uniform float scale;
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
}`,LL=`uniform vec3 diffuse;
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
}`,OL=`#include <common>
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
}`,FL=`uniform vec3 diffuse;
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
}`,kL=`#define LAMBERT
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
}`,UL=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,BL=`#define MATCAP
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
}`,VL=`#define MATCAP
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
}`,HL=`#define NORMAL
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
}`,zL=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,GL=`#define PHONG
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
}`,jL=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,WL=`#define STANDARD
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
}`,$L=`#define STANDARD
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,qL=`#define TOON
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
}`,XL=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,YL=`uniform float size;
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
}`,ZL=`uniform vec3 diffuse;
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
}`,KL=`#include <common>
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
}`,JL=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,QL=`uniform float rotation;
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
}`,eO=`uniform vec3 diffuse;
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
}`,Ye={alphahash_fragment:SN,alphahash_pars_fragment:EN,alphamap_fragment:bN,alphamap_pars_fragment:MN,alphatest_fragment:wN,alphatest_pars_fragment:CN,aomap_fragment:TN,aomap_pars_fragment:DN,batching_pars_vertex:AN,batching_vertex:IN,begin_vertex:RN,beginnormal_vertex:NN,bsdfs:PN,iridescence_fragment:LN,bumpmap_pars_fragment:ON,clipping_planes_fragment:FN,clipping_planes_pars_fragment:kN,clipping_planes_pars_vertex:UN,clipping_planes_vertex:BN,color_fragment:VN,color_pars_fragment:HN,color_pars_vertex:zN,color_vertex:GN,common:jN,cube_uv_reflection_fragment:WN,defaultnormal_vertex:$N,displacementmap_pars_vertex:qN,displacementmap_vertex:XN,emissivemap_fragment:YN,emissivemap_pars_fragment:ZN,colorspace_fragment:KN,colorspace_pars_fragment:JN,envmap_fragment:QN,envmap_common_pars_fragment:eP,envmap_pars_fragment:tP,envmap_pars_vertex:nP,envmap_physical_pars_fragment:hP,envmap_vertex:iP,fog_vertex:rP,fog_pars_vertex:oP,fog_fragment:sP,fog_pars_fragment:aP,gradientmap_pars_fragment:cP,lightmap_pars_fragment:lP,lights_lambert_fragment:uP,lights_lambert_pars_fragment:dP,lights_pars_begin:fP,lights_toon_fragment:pP,lights_toon_pars_fragment:mP,lights_phong_fragment:gP,lights_phong_pars_fragment:vP,lights_physical_fragment:yP,lights_physical_pars_fragment:_P,lights_fragment_begin:xP,lights_fragment_maps:SP,lights_fragment_end:EP,lightprobes_pars_fragment:bP,logdepthbuf_fragment:MP,logdepthbuf_pars_fragment:wP,logdepthbuf_pars_vertex:CP,logdepthbuf_vertex:TP,map_fragment:DP,map_pars_fragment:AP,map_particle_fragment:IP,map_particle_pars_fragment:RP,metalnessmap_fragment:NP,metalnessmap_pars_fragment:PP,morphinstance_vertex:LP,morphcolor_vertex:OP,morphnormal_vertex:FP,morphtarget_pars_vertex:kP,morphtarget_vertex:UP,normal_fragment_begin:BP,normal_fragment_maps:VP,normal_pars_fragment:HP,normal_pars_vertex:zP,normal_vertex:GP,normalmap_pars_fragment:jP,clearcoat_normal_fragment_begin:WP,clearcoat_normal_fragment_maps:$P,clearcoat_pars_fragment:qP,iridescence_pars_fragment:XP,opaque_fragment:YP,packing:ZP,premultiplied_alpha_fragment:KP,project_vertex:JP,dithering_fragment:QP,dithering_pars_fragment:eL,roughnessmap_fragment:tL,roughnessmap_pars_fragment:nL,shadowmap_pars_fragment:iL,shadowmap_pars_vertex:rL,shadowmap_vertex:oL,shadowmask_pars_fragment:sL,skinbase_vertex:aL,skinning_pars_vertex:cL,skinning_vertex:lL,skinnormal_vertex:uL,specularmap_fragment:dL,specularmap_pars_fragment:fL,tonemapping_fragment:hL,tonemapping_pars_fragment:pL,transmission_fragment:mL,transmission_pars_fragment:gL,uv_pars_fragment:vL,uv_pars_vertex:yL,uv_vertex:_L,worldpos_vertex:xL,background_vert:SL,background_frag:EL,backgroundCube_vert:bL,backgroundCube_frag:ML,cube_vert:wL,cube_frag:CL,depth_vert:TL,depth_frag:DL,distance_vert:AL,distance_frag:IL,equirect_vert:RL,equirect_frag:NL,linedashed_vert:PL,linedashed_frag:LL,meshbasic_vert:OL,meshbasic_frag:FL,meshlambert_vert:kL,meshlambert_frag:UL,meshmatcap_vert:BL,meshmatcap_frag:VL,meshnormal_vert:HL,meshnormal_frag:zL,meshphong_vert:GL,meshphong_frag:jL,meshphysical_vert:WL,meshphysical_frag:$L,meshtoon_vert:qL,meshtoon_frag:XL,points_vert:YL,points_frag:ZL,shadow_vert:KL,shadow_frag:JL,sprite_vert:QL,sprite_frag:eO},he={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new k},probesMax:{value:new k},probesResolution:{value:new k}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},cr={basic:{uniforms:Mn([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:Mn([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new qe(0)},envMapIntensity:{value:1}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:Mn([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:Mn([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:Mn([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new qe(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:Mn([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:Mn([he.points,he.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:Mn([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:Mn([he.common,he.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:Mn([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:Mn([he.sprite,he.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distance:{uniforms:Mn([he.common,he.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distance_vert,fragmentShader:Ye.distance_frag},shadow:{uniforms:Mn([he.lights,he.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};cr.physical={uniforms:Mn([cr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};var Lh={r:0,b:0,g:0},tO=new At,OM=new Ve;OM.set(-1,0,0,0,1,0,0,0,1);function nO(n,e,t,i,r,o){let s=new qe(0),a=r===!0?0:1,c,l,u=null,f=0,d=null;function h(C){let T=C.isScene===!0?C.background:null;if(T&&T.isTexture){let S=C.backgroundBlurriness>0;T=e.get(T,S)}return T}function p(C){let T=!1,S=h(C);S===null?g(s,a):S&&S.isColor&&(g(S,1),T=!0);let w=n.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,o),(n.autoClear||T)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function x(C,T){let S=h(T);S&&(S.isCubeTexture||S.mapping===cl)?(l===void 0&&(l=new hi(new ga(1,1,1),new ni({name:"BackgroundCubeMaterial",uniforms:es(cr.backgroundCube.uniforms),vertexShader:cr.backgroundCube.vertexShader,fragmentShader:cr.backgroundCube.fragmentShader,side:Rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(w,b,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=S,l.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(tO.makeRotationFromEuler(T.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(OM),l.material.toneMapped=tt.getTransfer(S.colorSpace)!==yt,(u!==S||f!==S.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,u=S,f=S.version,d=n.toneMapping),l.layers.enableAll(),C.unshift(l,l.geometry,l.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new hi(new nl(2,2),new ni({name:"BackgroundMaterial",uniforms:es(cr.background.uniforms),vertexShader:cr.background.vertexShader,fragmentShader:cr.background.fragmentShader,side:Cr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=tt.getTransfer(S.colorSpace)!==yt,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||f!==S.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,u=S,f=S.version,d=n.toneMapping),c.layers.enableAll(),C.unshift(c,c.geometry,c.material,0,0,null))}function g(C,T){C.getRGB(Lh,Sy(n)),t.buffers.color.setClear(Lh.r,Lh.g,Lh.b,T,o)}function m(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return s},setClearColor:function(C,T=1){s.set(C),a=T,g(s,a)},getClearAlpha:function(){return a},setClearAlpha:function(C){a=C,g(s,a)},render:p,addToRenderList:x,dispose:m}}function iO(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null),o=r,s=!1;function a(I,O,$,Y,B){let W=!1,z=f(I,Y,$,O);o!==z&&(o=z,l(o.object)),W=h(I,Y,$,B),W&&p(I,Y,$,B),B!==null&&e.update(B,n.ELEMENT_ARRAY_BUFFER),(W||s)&&(s=!1,S(I,O,$,Y),B!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function c(){return n.createVertexArray()}function l(I){return n.bindVertexArray(I)}function u(I){return n.deleteVertexArray(I)}function f(I,O,$,Y){let B=Y.wireframe===!0,W=i[O.id];W===void 0&&(W={},i[O.id]=W);let z=I.isInstancedMesh===!0?I.id:0,K=W[z];K===void 0&&(K={},W[z]=K);let ee=K[$.id];ee===void 0&&(ee={},K[$.id]=ee);let pe=ee[B];return pe===void 0&&(pe=d(c()),ee[B]=pe),pe}function d(I){let O=[],$=[],Y=[];for(let B=0;B<t;B++)O[B]=0,$[B]=0,Y[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:$,attributeDivisors:Y,object:I,attributes:{},index:null}}function h(I,O,$,Y){let B=o.attributes,W=O.attributes,z=0,K=$.getAttributes();for(let ee in K)if(K[ee].location>=0){let ye=B[ee],Ee=W[ee];if(Ee===void 0&&(ee==="instanceMatrix"&&I.instanceMatrix&&(Ee=I.instanceMatrix),ee==="instanceColor"&&I.instanceColor&&(Ee=I.instanceColor)),ye===void 0||ye.attribute!==Ee||Ee&&ye.data!==Ee.data)return!0;z++}return o.attributesNum!==z||o.index!==Y}function p(I,O,$,Y){let B={},W=O.attributes,z=0,K=$.getAttributes();for(let ee in K)if(K[ee].location>=0){let ye=W[ee];ye===void 0&&(ee==="instanceMatrix"&&I.instanceMatrix&&(ye=I.instanceMatrix),ee==="instanceColor"&&I.instanceColor&&(ye=I.instanceColor));let Ee={};Ee.attribute=ye,ye&&ye.data&&(Ee.data=ye.data),B[ee]=Ee,z++}o.attributes=B,o.attributesNum=z,o.index=Y}function x(){let I=o.newAttributes;for(let O=0,$=I.length;O<$;O++)I[O]=0}function g(I){m(I,0)}function m(I,O){let $=o.newAttributes,Y=o.enabledAttributes,B=o.attributeDivisors;$[I]=1,Y[I]===0&&(n.enableVertexAttribArray(I),Y[I]=1),B[I]!==O&&(n.vertexAttribDivisor(I,O),B[I]=O)}function C(){let I=o.newAttributes,O=o.enabledAttributes;for(let $=0,Y=O.length;$<Y;$++)O[$]!==I[$]&&(n.disableVertexAttribArray($),O[$]=0)}function T(I,O,$,Y,B,W,z){z===!0?n.vertexAttribIPointer(I,O,$,B,W):n.vertexAttribPointer(I,O,$,Y,B,W)}function S(I,O,$,Y){x();let B=Y.attributes,W=$.getAttributes(),z=O.defaultAttributeValues;for(let K in W){let ee=W[K];if(ee.location>=0){let pe=B[K];if(pe===void 0&&(K==="instanceMatrix"&&I.instanceMatrix&&(pe=I.instanceMatrix),K==="instanceColor"&&I.instanceColor&&(pe=I.instanceColor)),pe!==void 0){let ye=pe.normalized,Ee=pe.itemSize,ut=e.get(pe);if(ut===void 0)continue;let Pt=ut.buffer,dt=ut.type,Z=ut.bytesPerElement,se=dt===n.INT||dt===n.UNSIGNED_INT||pe.gpuType===Zf;if(pe.isInterleavedBufferAttribute){let te=pe.data,Be=te.stride,je=pe.offset;if(te.isInstancedInterleavedBuffer){for(let Le=0;Le<ee.locationSize;Le++)m(ee.location+Le,te.meshPerAttribute);I.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let Le=0;Le<ee.locationSize;Le++)g(ee.location+Le);n.bindBuffer(n.ARRAY_BUFFER,Pt);for(let Le=0;Le<ee.locationSize;Le++)T(ee.location+Le,Ee/ee.locationSize,dt,ye,Be*Z,(je+Ee/ee.locationSize*Le)*Z,se)}else{if(pe.isInstancedBufferAttribute){for(let te=0;te<ee.locationSize;te++)m(ee.location+te,pe.meshPerAttribute);I.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let te=0;te<ee.locationSize;te++)g(ee.location+te);n.bindBuffer(n.ARRAY_BUFFER,Pt);for(let te=0;te<ee.locationSize;te++)T(ee.location+te,Ee/ee.locationSize,dt,ye,Ee*Z,Ee/ee.locationSize*te*Z,se)}}else if(z!==void 0){let ye=z[K];if(ye!==void 0)switch(ye.length){case 2:n.vertexAttrib2fv(ee.location,ye);break;case 3:n.vertexAttrib3fv(ee.location,ye);break;case 4:n.vertexAttrib4fv(ee.location,ye);break;default:n.vertexAttrib1fv(ee.location,ye)}}}}C()}function w(){M();for(let I in i){let O=i[I];for(let $ in O){let Y=O[$];for(let B in Y){let W=Y[B];for(let z in W)u(W[z].object),delete W[z];delete Y[B]}}delete i[I]}}function b(I){if(i[I.id]===void 0)return;let O=i[I.id];for(let $ in O){let Y=O[$];for(let B in Y){let W=Y[B];for(let z in W)u(W[z].object),delete W[z];delete Y[B]}}delete i[I.id]}function D(I){for(let O in i){let $=i[O];for(let Y in $){let B=$[Y];if(B[I.id]===void 0)continue;let W=B[I.id];for(let z in W)u(W[z].object),delete W[z];delete B[I.id]}}}function y(I){for(let O in i){let $=i[O],Y=I.isInstancedMesh===!0?I.id:0,B=$[Y];if(B!==void 0){for(let W in B){let z=B[W];for(let K in z)u(z[K].object),delete z[K];delete B[W]}delete $[Y],Object.keys($).length===0&&delete i[O]}}}function M(){P(),s=!0,o!==r&&(o=r,l(o.object))}function P(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:M,resetDefaultState:P,dispose:w,releaseStatesOfGeometry:b,releaseStatesOfObject:y,releaseStatesOfProgram:D,initAttributes:x,enableAttribute:g,disableUnusedAttributes:C}}function rO(n,e,t){let i;function r(c){i=c}function o(c,l){n.drawArrays(i,c,l),t.update(l,i,1)}function s(c,l,u){u!==0&&(n.drawArraysInstanced(i,c,l,u),t.update(l,i,u))}function a(c,l,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,u);let d=0;for(let h=0;h<u;h++)d+=l[h];t.update(d,i,1)}this.setMode=r,this.render=o,this.renderInstances=s,this.renderMultiDraw=a}function oO(n,e,t,i){let r;function o(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let D=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(D){return!(D!==pi&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(D){let y=D===or&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==Un&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==Oi&&!y)}function c(D){if(D==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",u=c(l);u!==l&&(ke("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let f=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&ke("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),C=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),T=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),w=n.getParameter(n.MAX_SAMPLES),b=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:c,textureFormatReadable:s,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:h,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:C,maxVaryings:T,maxFragmentUniforms:S,maxSamples:w,samples:b}}function sO(n){let e=this,t=null,i=0,r=!1,o=!1,s=new Ji,a=new Ve,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){let h=f.length!==0||d||i!==0||r;return r=d,i=f.length,h},this.beginShadows=function(){o=!0,u(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,h){let p=f.clippingPlanes,x=f.clipIntersection,g=f.clipShadows,m=n.get(f);if(!r||p===null||p.length===0||o&&!g)o?u(null):l();else{let C=o?0:i,T=C*4,S=m.clippingState||null;c.value=S,S=u(p,d,T,h);for(let w=0;w!==T;++w)S[w]=t[w];m.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=C}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,h,p){let x=f!==null?f.length:0,g=null;if(x!==0){if(g=c.value,p!==!0||g===null){let m=h+x*4,C=d.matrixWorldInverse;a.getNormalMatrix(C),(g===null||g.length<m)&&(g=new Float32Array(m));for(let T=0,S=h;T!==x;++T,S+=4)s.copy(f[T]).applyMatrix4(C,a),s.normal.toArray(g,S),g[S+3]=s.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}var fo=4,fM=[.125,.215,.35,.446,.526,.582],ts=20,aO=256,vl=new ol,hM=new qe,wy=null,Cy=0,Ty=0,Dy=!1,cO=new k,Fh=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,o={}){let{size:s=256,position:a=cO}=o;wy=this._renderer.getRenderTarget(),Cy=this._renderer.getActiveCubeFace(),Ty=this._renderer.getActiveMipmapLevel(),Dy=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gM(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mM(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(wy,Cy,Ty),this._renderer.xr.enabled=Dy,e.scissorTest=!1,Sa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ao||e.mapping===Qo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),wy=this._renderer.getRenderTarget(),Cy=this._renderer.getActiveCubeFace(),Ty=this._renderer.getActiveMipmapLevel(),Dy=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:gn,minFilter:gn,generateMipmaps:!1,type:or,format:pi,colorSpace:Vc,depthBuffer:!1},r=pM(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=pM(e,t,i);let{_lodMax:o}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=lO(o)),this._blurMaterial=dO(o,e,t),this._ggxMaterial=uO(o,e,t)}return r}_compileMaterial(e){let t=new hi(new ti,e);this._renderer.compile(t,vl)}_sceneToCubeUV(e,t,i,r,o){let c=new mn(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,h=f.toneMapping;f.getClearColor(hM),f.toneMapping=Pi,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new hi(new ga,new Kc({name:"PMREM.Background",side:Rn,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,g=x.material,m=!1,C=e.background;C?C.isColor&&(g.color.copy(C),e.background=null,m=!0):(g.color.copy(hM),m=!0);for(let T=0;T<6;T++){let S=T%3;S===0?(c.up.set(0,l[T],0),c.position.set(o.x,o.y,o.z),c.lookAt(o.x+u[T],o.y,o.z)):S===1?(c.up.set(0,0,l[T]),c.position.set(o.x,o.y,o.z),c.lookAt(o.x,o.y+u[T],o.z)):(c.up.set(0,l[T],0),c.position.set(o.x,o.y,o.z),c.lookAt(o.x,o.y,o.z+u[T]));let w=this._cubeSize;Sa(r,S*w,T>2?w:0,w,w),f.setRenderTarget(r),m&&f.render(x,c),f.render(e,c)}f.toneMapping=h,f.autoClear=d,e.background=C}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===ao||e.mapping===Qo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=gM()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=mM());let o=r?this._cubemapMaterial:this._equirectMaterial,s=this._lodMeshes[0];s.material=o;let a=o.uniforms;a.envMap.value=e;let c=this._cubeSize;Sa(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(s,vl)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let o=1;o<r;o++)this._applyGGXFilter(e,o-1,o);t.autoClear=i}_applyGGXFilter(e,t,i){let r=this._renderer,o=this._pingPongRenderTarget,s=this._ggxMaterial,a=this._lodMeshes[i];a.material=s;let c=s.uniforms,l=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),f=Math.sqrt(l*l-u*u),d=0+l*1.25,h=f*d,{_lodMax:p}=this,x=this._sizeLods[i],g=3*x*(i>p-fo?i-p+fo:0),m=4*(this._cubeSize-x);c.envMap.value=e.texture,c.roughness.value=h,c.mipInt.value=p-t,Sa(o,g,m,3*x,2*x),r.setRenderTarget(o),r.render(a,vl),c.envMap.value=o.texture,c.roughness.value=0,c.mipInt.value=p-i,Sa(e,g,m,3*x,2*x),r.setRenderTarget(e),r.render(a,vl)}_blur(e,t,i,r,o){let s=this._pingPongRenderTarget;this._halfBlur(e,s,t,i,r,"latitudinal",o),this._halfBlur(s,e,i,i,r,"longitudinal",o)}_halfBlur(e,t,i,r,o,s,a){let c=this._renderer,l=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&Ue("blur direction must be either latitudinal or longitudinal!");let u=3,f=this._lodMeshes[r];f.material=l;let d=l.uniforms,h=this._sizeLods[i]-1,p=isFinite(o)?Math.PI/(2*h):2*Math.PI/(2*ts-1),x=o/p,g=isFinite(o)?1+Math.floor(u*x):ts;g>ts&&ke(`sigmaRadians, ${o}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${ts}`);let m=[],C=0;for(let D=0;D<ts;++D){let y=D/x,M=Math.exp(-y*y/2);m.push(M),D===0?C+=M:D<g&&(C+=2*M)}for(let D=0;D<m.length;D++)m[D]=m[D]/C;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=m,d.latitudinal.value=s==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:T}=this;d.dTheta.value=p,d.mipInt.value=T-i;let S=this._sizeLods[r],w=3*S*(r>T-fo?r-T+fo:0),b=4*(this._cubeSize-S);Sa(t,w,b,3*S,2*S),c.setRenderTarget(t),c.render(f,vl)}};function lO(n){let e=[],t=[],i=[],r=n,o=n-fo+1+fM.length;for(let s=0;s<o;s++){let a=Math.pow(2,r);e.push(a);let c=1/a;s>n-fo?c=fM[s-n+fo-1]:s===0&&(c=0),t.push(c);let l=1/(a-2),u=-l,f=1+l,d=[u,u,f,u,f,f,u,u,f,f,u,f],h=6,p=6,x=3,g=2,m=1,C=new Float32Array(x*p*h),T=new Float32Array(g*p*h),S=new Float32Array(m*p*h);for(let b=0;b<h;b++){let D=b%3*2/3-1,y=b>2?0:-1,M=[D,y,0,D+2/3,y,0,D+2/3,y+1,0,D,y,0,D+2/3,y+1,0,D,y+1,0];C.set(M,x*p*b),T.set(d,g*p*b);let P=[b,b,b,b,b,b];S.set(P,m*p*b)}let w=new ti;w.setAttribute("position",new bn(C,x)),w.setAttribute("uv",new bn(T,g)),w.setAttribute("faceIndex",new bn(S,m)),i.push(new hi(w,null)),r>fo&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function pM(n,e,t){let i=new ei(n,e,t);return i.texture.mapping=cl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Sa(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function uO(n,e,t){return new ni({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:aO,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Bh(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:rr,depthTest:!1,depthWrite:!1})}function dO(n,e,t){let i=new Float32Array(ts),r=new k(0,1,0);return new ni({name:"SphericalGaussianBlur",defines:{n:ts,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Bh(),fragmentShader:`

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
		`,blending:rr,depthTest:!1,depthWrite:!1})}function mM(){return new ni({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bh(),fragmentShader:`

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
		`,blending:rr,depthTest:!1,depthWrite:!1})}function gM(){return new ni({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:rr,depthTest:!1,depthWrite:!1})}function Bh(){return`

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
	`}var kh=class extends ei{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Qc(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ga(5,5,5),o=new ni({name:"CubemapFromEquirect",uniforms:es(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Rn,blending:rr});o.uniforms.tEquirect.value=t;let s=new hi(r,o),a=t.minFilter;return t.minFilter===co&&(t.minFilter=gn),new Wf(1,10,this).update(e,s),t.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){let o=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,i,r);e.setRenderTarget(o)}};function fO(n){let e=new WeakMap,t=new WeakMap,i=null;function r(d,h=!1){return d==null?null:h?s(d):o(d)}function o(d){if(d&&d.isTexture){let h=d.mapping;if(h===qf||h===Xf)if(e.has(d)){let p=e.get(d).texture;return a(p,d.mapping)}else{let p=d.image;if(p&&p.height>0){let x=new kh(p.height);return x.fromEquirectangularTexture(n,d),e.set(d,x),d.addEventListener("dispose",l),a(x.texture,d.mapping)}else return null}}return d}function s(d){if(d&&d.isTexture){let h=d.mapping,p=h===qf||h===Xf,x=h===ao||h===Qo;if(p||x){let g=t.get(d),m=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==m)return i===null&&(i=new Fh(n)),g=p?i.fromEquirectangular(d,g):i.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),g.texture;if(g!==void 0)return g.texture;{let C=d.image;return p&&C&&C.height>0||x&&C&&c(C)?(i===null&&(i=new Fh(n)),g=p?i.fromEquirectangular(d):i.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),d.addEventListener("dispose",u),g.texture):null}}}return d}function a(d,h){return h===qf?d.mapping=ao:h===Xf&&(d.mapping=Qo),d}function c(d){let h=0,p=6;for(let x=0;x<p;x++)d[x]!==void 0&&h++;return h===p}function l(d){let h=d.target;h.removeEventListener("dispose",l);let p=e.get(h);p!==void 0&&(e.delete(h),p.dispose())}function u(d){let h=d.target;h.removeEventListener("dispose",u);let p=t.get(h);p!==void 0&&(t.delete(h),p.dispose())}function f(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function hO(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let r=t(i);return r===null&&Yo("WebGLRenderer: "+i+" extension not supported."),r}}}function pO(n,e,t,i){let r={},o=new WeakMap;function s(f){let d=f.target;d.index!==null&&e.remove(d.index);for(let p in d.attributes)e.remove(d.attributes[p]);d.removeEventListener("dispose",s),delete r[d.id];let h=o.get(d);h&&(e.remove(h),o.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",s),r[d.id]=!0,t.memory.geometries++),d}function c(f){let d=f.attributes;for(let h in d)e.update(d[h],n.ARRAY_BUFFER)}function l(f){let d=[],h=f.index,p=f.attributes.position,x=0;if(p===void 0)return;if(h!==null){let C=h.array;x=h.version;for(let T=0,S=C.length;T<S;T+=3){let w=C[T+0],b=C[T+1],D=C[T+2];d.push(w,b,b,D,D,w)}}else{let C=p.array;x=p.version;for(let T=0,S=C.length/3-1;T<S;T+=3){let w=T+0,b=T+1,D=T+2;d.push(w,b,b,D,D,w)}}let g=new(p.count>=65535?Yc:Xc)(d,1);g.version=x;let m=o.get(f);m&&e.remove(m),o.set(f,g)}function u(f){let d=o.get(f);if(d){let h=f.index;h!==null&&d.version<h.version&&l(f)}else l(f);return o.get(f)}return{get:a,update:c,getWireframeAttribute:u}}function mO(n,e,t){let i;function r(f){i=f}let o,s;function a(f){o=f.type,s=f.bytesPerElement}function c(f,d){n.drawElements(i,d,o,f*s),t.update(d,i,1)}function l(f,d,h){h!==0&&(n.drawElementsInstanced(i,d,o,f*s,h),t.update(d,i,h))}function u(f,d,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,o,f,0,h);let x=0;for(let g=0;g<h;g++)x+=d[g];t.update(x,i,1)}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function gO(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,s,a){switch(t.calls++,s){case n.TRIANGLES:t.triangles+=a*(o/3);break;case n.LINES:t.lines+=a*(o/2);break;case n.LINE_STRIP:t.lines+=a*(o-1);break;case n.LINE_LOOP:t.lines+=a*o;break;case n.POINTS:t.points+=a*o;break;default:Ue("WebGLInfo: Unknown draw mode:",s);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function vO(n,e,t){let i=new WeakMap,r=new It;function o(s,a,c){let l=s.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0,d=i.get(a);if(d===void 0||d.count!==f){let M=function(){D.dispose(),i.delete(a),a.removeEventListener("dispose",M)};d!==void 0&&d.texture.dispose();let h=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],C=a.morphAttributes.color||[],T=0;h===!0&&(T=1),p===!0&&(T=2),x===!0&&(T=3);let S=a.attributes.position.count*T,w=1;S>e.maxTextureSize&&(w=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);let b=new Float32Array(S*w*4*f),D=new Gc(b,S,w,f);D.type=Oi,D.needsUpdate=!0;let y=T*4;for(let P=0;P<f;P++){let I=g[P],O=m[P],$=C[P],Y=S*w*4*P;for(let B=0;B<I.count;B++){let W=B*y;h===!0&&(r.fromBufferAttribute(I,B),b[Y+W+0]=r.x,b[Y+W+1]=r.y,b[Y+W+2]=r.z,b[Y+W+3]=0),p===!0&&(r.fromBufferAttribute(O,B),b[Y+W+4]=r.x,b[Y+W+5]=r.y,b[Y+W+6]=r.z,b[Y+W+7]=0),x===!0&&(r.fromBufferAttribute($,B),b[Y+W+8]=r.x,b[Y+W+9]=r.y,b[Y+W+10]=r.z,b[Y+W+11]=$.itemSize===4?r.w:1)}}d={count:f,texture:D,size:new ot(S,w)},i.set(a,d),a.addEventListener("dispose",M)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",s.morphTexture,t);else{let h=0;for(let x=0;x<l.length;x++)h+=l[x];let p=a.morphTargetsRelative?1:1-h;c.getUniforms().setValue(n,"morphTargetBaseInfluence",p),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:o}}function yO(n,e,t,i,r){let o=new WeakMap;function s(l){let u=r.render.frame,f=l.geometry,d=e.get(l,f);if(o.get(d)!==u&&(e.update(d),o.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),o.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),o.set(l,u))),l.isSkinnedMesh){let h=l.skeleton;o.get(h)!==u&&(h.update(),o.set(h,u))}return d}function a(){o=new WeakMap}function c(l){let u=l.target;u.removeEventListener("dispose",c),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:a}}var _O={[ry]:"LINEAR_TONE_MAPPING",[oy]:"REINHARD_TONE_MAPPING",[sy]:"CINEON_TONE_MAPPING",[ay]:"ACES_FILMIC_TONE_MAPPING",[ly]:"AGX_TONE_MAPPING",[uy]:"NEUTRAL_TONE_MAPPING",[cy]:"CUSTOM_TONE_MAPPING"};function xO(n,e,t,i,r,o){let s=new ei(e,t,{type:n,depthBuffer:r,stencilBuffer:o,samples:i?4:0,depthTexture:r?new Tr(e,t):void 0}),a=new ei(e,t,{type:or,depthBuffer:!1,stencilBuffer:!1}),c=new ti;c.setAttribute("position",new fi([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new fi([0,2,0,0,2,0],2));let l=new Pf({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new hi(c,l),f=new ol(-1,1,1,-1,0,1),d=null,h=null,p=!1,x,g=null,m=[],C=!1;this.setSize=function(T,S){s.setSize(T,S),a.setSize(T,S);for(let w=0;w<m.length;w++){let b=m[w];b.setSize&&b.setSize(T,S)}},this.setEffects=function(T){m=T,C=m.length>0&&m[0].isRenderPass===!0;let S=s.width,w=s.height;for(let b=0;b<m.length;b++){let D=m[b];D.setSize&&D.setSize(S,w)}},this.begin=function(T,S){if(p||T.toneMapping===Pi&&m.length===0)return!1;if(g=S,S!==null){let w=S.width,b=S.height;(s.width!==w||s.height!==b)&&this.setSize(w,b)}return C===!1&&T.setRenderTarget(s),x=T.toneMapping,T.toneMapping=Pi,!0},this.hasRenderPass=function(){return C},this.end=function(T,S){T.toneMapping=x,p=!0;let w=s,b=a;for(let D=0;D<m.length;D++){let y=m[D];if(y.enabled!==!1&&(y.render(T,b,w,S),y.needsSwap!==!1)){let M=w;w=b,b=M}}if(d!==T.outputColorSpace||h!==T.toneMapping){d=T.outputColorSpace,h=T.toneMapping,l.defines={},tt.getTransfer(d)===yt&&(l.defines.SRGB_TRANSFER="");let D=_O[h];D&&(l.defines[D]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=w.texture,T.setRenderTarget(g),T.render(u,f),g=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){s.depthTexture&&s.depthTexture.dispose(),s.dispose(),a.dispose(),c.dispose(),l.dispose()}}var FM=new sr,Ry=new Tr(1,1),kM=new Gc,UM=new If,BM=new Qc,vM=[],yM=[],_M=new Float32Array(16),xM=new Float32Array(9),SM=new Float32Array(4);function ba(n,e,t){let i=n[0];if(i<=0||i>0)return n;let r=e*t,o=vM[r];if(o===void 0&&(o=new Float32Array(r),vM[r]=o),e!==0){i.toArray(o,0);for(let s=1,a=0;s!==e;++s)a+=t,n[s].toArray(o,a)}return o}function tn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function nn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Vh(n,e){let t=yM[e];t===void 0&&(t=new Int32Array(e),yM[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function SO(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function EO(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;n.uniform2fv(this.addr,e),nn(t,e)}}function bO(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(tn(t,e))return;n.uniform3fv(this.addr,e),nn(t,e)}}function MO(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;n.uniform4fv(this.addr,e),nn(t,e)}}function wO(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(tn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,i))return;SM.set(i),n.uniformMatrix2fv(this.addr,!1,SM),nn(t,i)}}function CO(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(tn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,i))return;xM.set(i),n.uniformMatrix3fv(this.addr,!1,xM),nn(t,i)}}function TO(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(tn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,i))return;_M.set(i),n.uniformMatrix4fv(this.addr,!1,_M),nn(t,i)}}function DO(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function AO(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;n.uniform2iv(this.addr,e),nn(t,e)}}function IO(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;n.uniform3iv(this.addr,e),nn(t,e)}}function RO(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;n.uniform4iv(this.addr,e),nn(t,e)}}function NO(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function PO(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;n.uniform2uiv(this.addr,e),nn(t,e)}}function LO(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;n.uniform3uiv(this.addr,e),nn(t,e)}}function OO(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;n.uniform4uiv(this.addr,e),nn(t,e)}}function FO(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let o;this.type===n.SAMPLER_2D_SHADOW?(Ry.compareFunction=t.isReversedDepthBuffer()?Ph:Nh,o=Ry):o=FM,t.setTexture2D(e||o,r)}function kO(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||UM,r)}function UO(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||BM,r)}function BO(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||kM,r)}function VO(n){switch(n){case 5126:return SO;case 35664:return EO;case 35665:return bO;case 35666:return MO;case 35674:return wO;case 35675:return CO;case 35676:return TO;case 5124:case 35670:return DO;case 35667:case 35671:return AO;case 35668:case 35672:return IO;case 35669:case 35673:return RO;case 5125:return NO;case 36294:return PO;case 36295:return LO;case 36296:return OO;case 35678:case 36198:case 36298:case 36306:case 35682:return FO;case 35679:case 36299:case 36307:return kO;case 35680:case 36300:case 36308:case 36293:return UO;case 36289:case 36303:case 36311:case 36292:return BO}}function HO(n,e){n.uniform1fv(this.addr,e)}function zO(n,e){let t=ba(e,this.size,2);n.uniform2fv(this.addr,t)}function GO(n,e){let t=ba(e,this.size,3);n.uniform3fv(this.addr,t)}function jO(n,e){let t=ba(e,this.size,4);n.uniform4fv(this.addr,t)}function WO(n,e){let t=ba(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function $O(n,e){let t=ba(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function qO(n,e){let t=ba(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function XO(n,e){n.uniform1iv(this.addr,e)}function YO(n,e){n.uniform2iv(this.addr,e)}function ZO(n,e){n.uniform3iv(this.addr,e)}function KO(n,e){n.uniform4iv(this.addr,e)}function JO(n,e){n.uniform1uiv(this.addr,e)}function QO(n,e){n.uniform2uiv(this.addr,e)}function eF(n,e){n.uniform3uiv(this.addr,e)}function tF(n,e){n.uniform4uiv(this.addr,e)}function nF(n,e,t){let i=this.cache,r=e.length,o=Vh(t,r);tn(i,o)||(n.uniform1iv(this.addr,o),nn(i,o));let s;this.type===n.SAMPLER_2D_SHADOW?s=Ry:s=FM;for(let a=0;a!==r;++a)t.setTexture2D(e[a]||s,o[a])}function iF(n,e,t){let i=this.cache,r=e.length,o=Vh(t,r);tn(i,o)||(n.uniform1iv(this.addr,o),nn(i,o));for(let s=0;s!==r;++s)t.setTexture3D(e[s]||UM,o[s])}function rF(n,e,t){let i=this.cache,r=e.length,o=Vh(t,r);tn(i,o)||(n.uniform1iv(this.addr,o),nn(i,o));for(let s=0;s!==r;++s)t.setTextureCube(e[s]||BM,o[s])}function oF(n,e,t){let i=this.cache,r=e.length,o=Vh(t,r);tn(i,o)||(n.uniform1iv(this.addr,o),nn(i,o));for(let s=0;s!==r;++s)t.setTexture2DArray(e[s]||kM,o[s])}function sF(n){switch(n){case 5126:return HO;case 35664:return zO;case 35665:return GO;case 35666:return jO;case 35674:return WO;case 35675:return $O;case 35676:return qO;case 5124:case 35670:return XO;case 35667:case 35671:return YO;case 35668:case 35672:return ZO;case 35669:case 35673:return KO;case 5125:return JO;case 36294:return QO;case 36295:return eF;case 36296:return tF;case 35678:case 36198:case 36298:case 36306:case 35682:return nF;case 35679:case 36299:case 36307:return iF;case 35680:case 36300:case 36308:case 36293:return rF;case 36289:case 36303:case 36311:case 36292:return oF}}var Ny=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=VO(t.type)}},Py=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=sF(t.type)}},Ly=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let o=0,s=r.length;o!==s;++o){let a=r[o];a.setValue(e,t[a.id],i)}}},Ay=/(\w+)(\])?(\[|\.)?/g;function EM(n,e){n.seq.push(e),n.map[e.id]=e}function aF(n,e,t){let i=n.name,r=i.length;for(Ay.lastIndex=0;;){let o=Ay.exec(i),s=Ay.lastIndex,a=o[1],c=o[2]==="]",l=o[3];if(c&&(a=a|0),l===void 0||l==="["&&s+2===r){EM(t,l===void 0?new Ny(a,n,e):new Py(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new Ly(a),EM(t,f)),t=f}}}var Ea=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let a=e.getActiveUniform(t,s),c=e.getUniformLocation(t,a.name);aF(a,c,this)}let r=[],o=[];for(let s of this.seq)s.type===e.SAMPLER_2D_SHADOW||s.type===e.SAMPLER_CUBE_SHADOW||s.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(s):o.push(s);r.length>0&&(this.seq=r.concat(o))}setValue(e,t,i,r){let o=this.map[t];o!==void 0&&o.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let o=0,s=t.length;o!==s;++o){let a=t[o],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,o=e.length;r!==o;++r){let s=e[r];s.id in t&&i.push(s)}return i}};function bM(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var cF=37297,lF=0;function uF(n,e){let t=n.split(`
`),i=[],r=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let s=r;s<o;s++){let a=s+1;i.push(`${a===e?">":" "} ${a}: ${t[s]}`)}return i.join(`
`)}var MM=new Ve;function dF(n){tt._getMatrix(MM,tt.workingColorSpace,n);let e=`mat3( ${MM.elements.map(t=>t.toFixed(4))} )`;switch(tt.getTransfer(n)){case Hc:return[e,"LinearTransferOETF"];case yt:return[e,"sRGBTransferOETF"];default:return ke("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function wM(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),o=(n.getShaderInfoLog(e)||"").trim();if(i&&o==="")return"";let s=/ERROR: 0:(\d+)/.exec(o);if(s){let a=parseInt(s[1]);return t.toUpperCase()+`

`+o+`

`+uF(n.getShaderSource(e),a)}else return o}function fF(n,e){let t=dF(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var hF={[ry]:"Linear",[oy]:"Reinhard",[sy]:"Cineon",[ay]:"ACESFilmic",[ly]:"AgX",[uy]:"Neutral",[cy]:"Custom"};function pF(n,e){let t=hF[e];return t===void 0?(ke("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Oh=new k;function mF(){tt.getLuminanceCoefficients(Oh);let n=Oh.x.toFixed(4),e=Oh.y.toFixed(4),t=Oh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function gF(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(_l).join(`
`)}function vF(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function yF(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let o=n.getActiveAttrib(e,r),s=o.name,a=1;o.type===n.FLOAT_MAT2&&(a=2),o.type===n.FLOAT_MAT3&&(a=3),o.type===n.FLOAT_MAT4&&(a=4),t[s]={type:o.type,location:n.getAttribLocation(e,s),locationSize:a}}return t}function _l(n){return n!==""}function CM(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function TM(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var _F=/^[ \t]*#include +<([\w\d./]+)>/gm;function Oy(n){return n.replace(_F,SF)}var xF=new Map;function SF(n,e){let t=Ye[e];if(t===void 0){let i=xF.get(e);if(i!==void 0)t=Ye[i],ke('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Oy(t)}var EF=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function DM(n){return n.replace(EF,bF)}function bF(n,e,t,i){let r="";for(let o=parseInt(e);o<parseInt(t);o++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function AM(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}var MF={[sl]:"SHADOWMAP_TYPE_PCF",[ya]:"SHADOWMAP_TYPE_VSM"};function wF(n){return MF[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var CF={[ao]:"ENVMAP_TYPE_CUBE",[Qo]:"ENVMAP_TYPE_CUBE",[cl]:"ENVMAP_TYPE_CUBE_UV"};function TF(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":CF[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var DF={[Qo]:"ENVMAP_MODE_REFRACTION"};function AF(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":DF[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var IF={[iy]:"ENVMAP_BLENDING_MULTIPLY",[Yb]:"ENVMAP_BLENDING_MIX",[Zb]:"ENVMAP_BLENDING_ADD"};function RF(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":IF[n.combine]||"ENVMAP_BLENDING_NONE"}function NF(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function PF(n,e,t,i){let r=n.getContext(),o=t.defines,s=t.vertexShader,a=t.fragmentShader,c=wF(t),l=TF(t),u=AF(t),f=RF(t),d=NF(t),h=gF(t),p=vF(o),x=r.createProgram(),g,m,C=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(_l).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(_l).join(`
`),m.length>0&&(m+=`
`)):(g=[AM(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_l).join(`
`),m=[AM(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Pi?"#define TONE_MAPPING":"",t.toneMapping!==Pi?Ye.tonemapping_pars_fragment:"",t.toneMapping!==Pi?pF("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,fF("linearToOutputTexel",t.outputColorSpace),mF(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(_l).join(`
`)),s=Oy(s),s=CM(s,t),s=TM(s,t),a=Oy(a),a=CM(a,t),a=TM(a,t),s=DM(s),a=DM(a),t.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,g=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===_y?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===_y?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let T=C+g+s,S=C+m+a,w=bM(r,r.VERTEX_SHADER,T),b=bM(r,r.FRAGMENT_SHADER,S);r.attachShader(x,w),r.attachShader(x,b),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function D(I){if(n.debug.checkShaderErrors){let O=r.getProgramInfoLog(x)||"",$=r.getShaderInfoLog(w)||"",Y=r.getShaderInfoLog(b)||"",B=O.trim(),W=$.trim(),z=Y.trim(),K=!0,ee=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(K=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,x,w,b);else{let pe=wM(r,w,"vertex"),ye=wM(r,b,"fragment");Ue("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+B+`
`+pe+`
`+ye)}else B!==""?ke("WebGLProgram: Program Info Log:",B):(W===""||z==="")&&(ee=!1);ee&&(I.diagnostics={runnable:K,programLog:B,vertexShader:{log:W,prefix:g},fragmentShader:{log:z,prefix:m}})}r.deleteShader(w),r.deleteShader(b),y=new Ea(r,x),M=yF(r,x)}let y;this.getUniforms=function(){return y===void 0&&D(this),y};let M;this.getAttributes=function(){return M===void 0&&D(this),M};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=r.getProgramParameter(x,cF)),P},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=lF++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=w,this.fragmentShader=b,this}var LF=0,Fy=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new ky(e),t.set(e,i)),i}},ky=class{constructor(e){this.id=LF++,this.code=e,this.usedTimes=0}};function OF(n){return n===uo||n===pl||n===ml}function FF(n,e,t,i,r,o){let s=new Wc,a=new Fy,c=new Set,l=[],u=new Map,f=i.logarithmicDepthBuffer,d=i.precision,h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(y){return c.add(y),y===0?"uv":`uv${y}`}function x(y,M,P,I,O,$){let Y=I.fog,B=O.geometry,W=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?I.environment:null,z=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,K=e.get(y.envMap||W,z),ee=K&&K.mapping===cl?K.image.height:null,pe=h[y.type];y.precision!==null&&(d=i.getMaxPrecision(y.precision),d!==y.precision&&ke("WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));let ye=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Ee=ye!==void 0?ye.length:0,ut=0;B.morphAttributes.position!==void 0&&(ut=1),B.morphAttributes.normal!==void 0&&(ut=2),B.morphAttributes.color!==void 0&&(ut=3);let Pt,dt,Z,se;if(pe){let be=cr[pe];Pt=be.vertexShader,dt=be.fragmentShader}else{Pt=y.vertexShader,dt=y.fragmentShader;let be=a.getVertexShaderStage(y),Ot=a.getFragmentShaderStage(y);a.update(y,be,Ot),Z=be.id,se=Ot.id}let te=n.getRenderTarget(),Be=n.state.buffers.depth.getReversed(),je=O.isInstancedMesh===!0,Le=O.isBatchedMesh===!0,Bt=!!y.map,Qe=!!y.matcap,Mt=!!K,ft=!!y.aoMap,st=!!y.lightMap,jt=!!y.bumpMap&&y.wireframe===!1,Kt=!!y.normalMap,rn=!!y.displacementMap,cn=!!y.emissiveMap,Lt=!!y.metalnessMap,Wt=!!y.roughnessMap,R=y.anisotropy>0,Nn=y.clearcoat>0,_t=y.dispersion>0,E=y.iridescence>0,v=y.sheen>0,L=y.transmission>0,V=R&&!!y.anisotropyMap,G=Nn&&!!y.clearcoatMap,ie=Nn&&!!y.clearcoatNormalMap,ae=Nn&&!!y.clearcoatRoughnessMap,j=E&&!!y.iridescenceMap,X=E&&!!y.iridescenceThicknessMap,le=v&&!!y.sheenColorMap,Ce=v&&!!y.sheenRoughnessMap,fe=!!y.specularMap,ue=!!y.specularColorMap,Ie=!!y.specularIntensityMap,Oe=L&&!!y.transmissionMap,We=L&&!!y.thicknessMap,A=!!y.gradientMap,oe=!!y.alphaMap,q=y.alphaTest>0,de=!!y.alphaHash,ve=!!y.extensions,J=Pi;y.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(J=n.toneMapping);let we={shaderID:pe,shaderType:y.type,shaderName:y.name,vertexShader:Pt,fragmentShader:dt,defines:y.defines,customVertexShaderID:Z,customFragmentShaderID:se,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:Le,batchingColor:Le&&O._colorsTexture!==null,instancing:je,instancingColor:je&&O.instanceColor!==null,instancingMorph:je&&O.morphTexture!==null,outputColorSpace:te===null?n.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:tt.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:Bt,matcap:Qe,envMap:Mt,envMapMode:Mt&&K.mapping,envMapCubeUVHeight:ee,aoMap:ft,lightMap:st,bumpMap:jt,normalMap:Kt,displacementMap:rn,emissiveMap:cn,normalMapObjectSpace:Kt&&y.normalMapType===Qb,normalMapTangentSpace:Kt&&y.normalMapType===yy,packedNormalMap:Kt&&y.normalMapType===yy&&OF(y.normalMap.format),metalnessMap:Lt,roughnessMap:Wt,anisotropy:R,anisotropyMap:V,clearcoat:Nn,clearcoatMap:G,clearcoatNormalMap:ie,clearcoatRoughnessMap:ae,dispersion:_t,iridescence:E,iridescenceMap:j,iridescenceThicknessMap:X,sheen:v,sheenColorMap:le,sheenRoughnessMap:Ce,specularMap:fe,specularColorMap:ue,specularIntensityMap:Ie,transmission:L,transmissionMap:Oe,thicknessMap:We,gradientMap:A,opaque:y.transparent===!1&&y.blending===Zo&&y.alphaToCoverage===!1,alphaMap:oe,alphaTest:q,alphaHash:de,combine:y.combine,mapUv:Bt&&p(y.map.channel),aoMapUv:ft&&p(y.aoMap.channel),lightMapUv:st&&p(y.lightMap.channel),bumpMapUv:jt&&p(y.bumpMap.channel),normalMapUv:Kt&&p(y.normalMap.channel),displacementMapUv:rn&&p(y.displacementMap.channel),emissiveMapUv:cn&&p(y.emissiveMap.channel),metalnessMapUv:Lt&&p(y.metalnessMap.channel),roughnessMapUv:Wt&&p(y.roughnessMap.channel),anisotropyMapUv:V&&p(y.anisotropyMap.channel),clearcoatMapUv:G&&p(y.clearcoatMap.channel),clearcoatNormalMapUv:ie&&p(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&p(y.clearcoatRoughnessMap.channel),iridescenceMapUv:j&&p(y.iridescenceMap.channel),iridescenceThicknessMapUv:X&&p(y.iridescenceThicknessMap.channel),sheenColorMapUv:le&&p(y.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&p(y.sheenRoughnessMap.channel),specularMapUv:fe&&p(y.specularMap.channel),specularColorMapUv:ue&&p(y.specularColorMap.channel),specularIntensityMapUv:Ie&&p(y.specularIntensityMap.channel),transmissionMapUv:Oe&&p(y.transmissionMap.channel),thicknessMapUv:We&&p(y.thicknessMap.channel),alphaMapUv:oe&&p(y.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(Kt||R),vertexNormals:!!B.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!B.attributes.uv&&(Bt||oe),fog:!!Y,useFog:y.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||B.attributes.normal===void 0&&Kt===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Be,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:Ee,morphTextureStride:ut,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:$.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:J,decodeVideoTexture:Bt&&y.map.isVideoTexture===!0&&tt.getTransfer(y.map.colorSpace)===yt,decodeVideoTextureEmissive:cn&&y.emissiveMap.isVideoTexture===!0&&tt.getTransfer(y.emissiveMap.colorSpace)===yt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===ir,flipSided:y.side===Rn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:ve&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ve&&y.extensions.multiDraw===!0||Le)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return we.vertexUv1s=c.has(1),we.vertexUv2s=c.has(2),we.vertexUv3s=c.has(3),c.clear(),we}function g(y){let M=[];if(y.shaderID?M.push(y.shaderID):(M.push(y.customVertexShaderID),M.push(y.customFragmentShaderID)),y.defines!==void 0)for(let P in y.defines)M.push(P),M.push(y.defines[P]);return y.isRawShaderMaterial===!1&&(m(M,y),C(M,y),M.push(n.outputColorSpace)),M.push(y.customProgramCacheKey),M.join()}function m(y,M){y.push(M.precision),y.push(M.outputColorSpace),y.push(M.envMapMode),y.push(M.envMapCubeUVHeight),y.push(M.mapUv),y.push(M.alphaMapUv),y.push(M.lightMapUv),y.push(M.aoMapUv),y.push(M.bumpMapUv),y.push(M.normalMapUv),y.push(M.displacementMapUv),y.push(M.emissiveMapUv),y.push(M.metalnessMapUv),y.push(M.roughnessMapUv),y.push(M.anisotropyMapUv),y.push(M.clearcoatMapUv),y.push(M.clearcoatNormalMapUv),y.push(M.clearcoatRoughnessMapUv),y.push(M.iridescenceMapUv),y.push(M.iridescenceThicknessMapUv),y.push(M.sheenColorMapUv),y.push(M.sheenRoughnessMapUv),y.push(M.specularMapUv),y.push(M.specularColorMapUv),y.push(M.specularIntensityMapUv),y.push(M.transmissionMapUv),y.push(M.thicknessMapUv),y.push(M.combine),y.push(M.fogExp2),y.push(M.sizeAttenuation),y.push(M.morphTargetsCount),y.push(M.morphAttributeCount),y.push(M.numDirLights),y.push(M.numPointLights),y.push(M.numSpotLights),y.push(M.numSpotLightMaps),y.push(M.numHemiLights),y.push(M.numRectAreaLights),y.push(M.numDirLightShadows),y.push(M.numPointLightShadows),y.push(M.numSpotLightShadows),y.push(M.numSpotLightShadowsWithMaps),y.push(M.numLightProbes),y.push(M.shadowMapType),y.push(M.toneMapping),y.push(M.numClippingPlanes),y.push(M.numClipIntersection),y.push(M.depthPacking)}function C(y,M){s.disableAll(),M.instancing&&s.enable(0),M.instancingColor&&s.enable(1),M.instancingMorph&&s.enable(2),M.matcap&&s.enable(3),M.envMap&&s.enable(4),M.normalMapObjectSpace&&s.enable(5),M.normalMapTangentSpace&&s.enable(6),M.clearcoat&&s.enable(7),M.iridescence&&s.enable(8),M.alphaTest&&s.enable(9),M.vertexColors&&s.enable(10),M.vertexAlphas&&s.enable(11),M.vertexUv1s&&s.enable(12),M.vertexUv2s&&s.enable(13),M.vertexUv3s&&s.enable(14),M.vertexTangents&&s.enable(15),M.anisotropy&&s.enable(16),M.alphaHash&&s.enable(17),M.batching&&s.enable(18),M.dispersion&&s.enable(19),M.batchingColor&&s.enable(20),M.gradientMap&&s.enable(21),M.packedNormalMap&&s.enable(22),M.vertexNormals&&s.enable(23),y.push(s.mask),s.disableAll(),M.fog&&s.enable(0),M.useFog&&s.enable(1),M.flatShading&&s.enable(2),M.logarithmicDepthBuffer&&s.enable(3),M.reversedDepthBuffer&&s.enable(4),M.skinning&&s.enable(5),M.morphTargets&&s.enable(6),M.morphNormals&&s.enable(7),M.morphColors&&s.enable(8),M.premultipliedAlpha&&s.enable(9),M.shadowMapEnabled&&s.enable(10),M.doubleSided&&s.enable(11),M.flipSided&&s.enable(12),M.useDepthPacking&&s.enable(13),M.dithering&&s.enable(14),M.transmission&&s.enable(15),M.sheen&&s.enable(16),M.opaque&&s.enable(17),M.pointsUvs&&s.enable(18),M.decodeVideoTexture&&s.enable(19),M.decodeVideoTextureEmissive&&s.enable(20),M.alphaToCoverage&&s.enable(21),M.numLightProbeGrids>0&&s.enable(22),M.hasPositionAttribute&&s.enable(23),y.push(s.mask)}function T(y){let M=h[y.type],P;if(M){let I=cr[M];P=dM.clone(I.uniforms)}else P=y.uniforms;return P}function S(y,M){let P=u.get(M);return P!==void 0?++P.usedTimes:(P=new PF(n,M,y,r),l.push(P),u.set(M,P)),P}function w(y){if(--y.usedTimes===0){let M=l.indexOf(y);l[M]=l[l.length-1],l.pop(),u.delete(y.cacheKey),y.destroy()}}function b(y){a.remove(y)}function D(){a.dispose()}return{getParameters:x,getProgramCacheKey:g,getUniforms:T,acquireProgram:S,releaseProgram:w,releaseShaderCache:b,programs:l,dispose:D}}function kF(){let n=new WeakMap;function e(s){return n.has(s)}function t(s){let a=n.get(s);return a===void 0&&(a={},n.set(s,a)),a}function i(s){n.delete(s)}function r(s,a,c){n.get(s)[a]=c}function o(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:o}}function UF(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function IM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function RM(){let n=[],e=0,t=[],i=[],r=[];function o(){e=0,t.length=0,i.length=0,r.length=0}function s(d){let h=0;return d.isInstancedMesh&&(h+=2),d.isSkinnedMesh&&(h+=1),h}function a(d,h,p,x,g,m){let C=n[e];return C===void 0?(C={id:d.id,object:d,geometry:h,material:p,materialVariant:s(d),groupOrder:x,renderOrder:d.renderOrder,z:g,group:m},n[e]=C):(C.id=d.id,C.object=d,C.geometry=h,C.material=p,C.materialVariant=s(d),C.groupOrder=x,C.renderOrder=d.renderOrder,C.z=g,C.group=m),e++,C}function c(d,h,p,x,g,m){let C=a(d,h,p,x,g,m);p.transmission>0?i.push(C):p.transparent===!0?r.push(C):t.push(C)}function l(d,h,p,x,g,m){let C=a(d,h,p,x,g,m);p.transmission>0?i.unshift(C):p.transparent===!0?r.unshift(C):t.unshift(C)}function u(d,h,p){t.length>1&&t.sort(d||UF),i.length>1&&i.sort(h||IM),r.length>1&&r.sort(h||IM),p&&(t.reverse(),i.reverse(),r.reverse())}function f(){for(let d=e,h=n.length;d<h;d++){let p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:o,push:c,unshift:l,finish:f,sort:u}}function BF(){let n=new WeakMap;function e(i,r){let o=n.get(i),s;return o===void 0?(s=new RM,n.set(i,[s])):r>=o.length?(s=new RM,o.push(s)):s=o[r],s}function t(){n=new WeakMap}return{get:e,dispose:t}}function VF(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new k,color:new qe};break;case"SpotLight":t={position:new k,direction:new k,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":t={color:new qe,position:new k,halfWidth:new k,halfHeight:new k};break}return n[e.id]=t,t}}}function HF(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var zF=0;function GF(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function jF(n){let e=new VF,t=HF(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new k);let r=new k,o=new At,s=new At;function a(l){let u=0,f=0,d=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let h=0,p=0,x=0,g=0,m=0,C=0,T=0,S=0,w=0,b=0,D=0;l.sort(GF);for(let M=0,P=l.length;M<P;M++){let I=l[M],O=I.color,$=I.intensity,Y=I.distance,B=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===uo?B=I.shadow.map.texture:B=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)u+=O.r*$,f+=O.g*$,d+=O.b*$;else if(I.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(I.sh.coefficients[W],$);D++}else if(I.isDirectionalLight){let W=e.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let z=I.shadow,K=t.get(I);K.shadowIntensity=z.intensity,K.shadowBias=z.bias,K.shadowNormalBias=z.normalBias,K.shadowRadius=z.radius,K.shadowMapSize=z.mapSize,i.directionalShadow[h]=K,i.directionalShadowMap[h]=B,i.directionalShadowMatrix[h]=I.shadow.matrix,C++}i.directional[h]=W,h++}else if(I.isSpotLight){let W=e.get(I);W.position.setFromMatrixPosition(I.matrixWorld),W.color.copy(O).multiplyScalar($),W.distance=Y,W.coneCos=Math.cos(I.angle),W.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),W.decay=I.decay,i.spot[x]=W;let z=I.shadow;if(I.map&&(i.spotLightMap[w]=I.map,w++,z.updateMatrices(I),I.castShadow&&b++),i.spotLightMatrix[x]=z.matrix,I.castShadow){let K=t.get(I);K.shadowIntensity=z.intensity,K.shadowBias=z.bias,K.shadowNormalBias=z.normalBias,K.shadowRadius=z.radius,K.shadowMapSize=z.mapSize,i.spotShadow[x]=K,i.spotShadowMap[x]=B,S++}x++}else if(I.isRectAreaLight){let W=e.get(I);W.color.copy(O).multiplyScalar($),W.halfWidth.set(I.width*.5,0,0),W.halfHeight.set(0,I.height*.5,0),i.rectArea[g]=W,g++}else if(I.isPointLight){let W=e.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),W.distance=I.distance,W.decay=I.decay,I.castShadow){let z=I.shadow,K=t.get(I);K.shadowIntensity=z.intensity,K.shadowBias=z.bias,K.shadowNormalBias=z.normalBias,K.shadowRadius=z.radius,K.shadowMapSize=z.mapSize,K.shadowCameraNear=z.camera.near,K.shadowCameraFar=z.camera.far,i.pointShadow[p]=K,i.pointShadowMap[p]=B,i.pointShadowMatrix[p]=I.shadow.matrix,T++}i.point[p]=W,p++}else if(I.isHemisphereLight){let W=e.get(I);W.skyColor.copy(I.color).multiplyScalar($),W.groundColor.copy(I.groundColor).multiplyScalar($),i.hemi[m]=W,m++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=he.LTC_FLOAT_1,i.rectAreaLTC2=he.LTC_FLOAT_2):(i.rectAreaLTC1=he.LTC_HALF_1,i.rectAreaLTC2=he.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;let y=i.hash;(y.directionalLength!==h||y.pointLength!==p||y.spotLength!==x||y.rectAreaLength!==g||y.hemiLength!==m||y.numDirectionalShadows!==C||y.numPointShadows!==T||y.numSpotShadows!==S||y.numSpotMaps!==w||y.numLightProbes!==D)&&(i.directional.length=h,i.spot.length=x,i.rectArea.length=g,i.point.length=p,i.hemi.length=m,i.directionalShadow.length=C,i.directionalShadowMap.length=C,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=C,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=S+w-b,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=D,y.directionalLength=h,y.pointLength=p,y.spotLength=x,y.rectAreaLength=g,y.hemiLength=m,y.numDirectionalShadows=C,y.numPointShadows=T,y.numSpotShadows=S,y.numSpotMaps=w,y.numLightProbes=D,i.version=zF++)}function c(l,u){let f=0,d=0,h=0,p=0,x=0,g=u.matrixWorldInverse;for(let m=0,C=l.length;m<C;m++){let T=l[m];if(T.isDirectionalLight){let S=i.directional[f];S.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(g),f++}else if(T.isSpotLight){let S=i.spot[h];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(g),h++}else if(T.isRectAreaLight){let S=i.rectArea[p];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(g),s.identity(),o.copy(T.matrixWorld),o.premultiply(g),s.extractRotation(o),S.halfWidth.set(T.width*.5,0,0),S.halfHeight.set(0,T.height*.5,0),S.halfWidth.applyMatrix4(s),S.halfHeight.applyMatrix4(s),p++}else if(T.isPointLight){let S=i.point[d];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(g),d++}else if(T.isHemisphereLight){let S=i.hemi[x];S.direction.setFromMatrixPosition(T.matrixWorld),S.direction.transformDirection(g),x++}}}return{setup:a,setupView:c,state:i}}function NM(n){let e=new jF(n),t=[],i=[],r=[];function o(d){f.camera=d,t.length=0,i.length=0,r.length=0}function s(d){t.push(d)}function a(d){i.push(d)}function c(d){r.push(d)}function l(){e.setup(t)}function u(d){e.setupView(t,d)}let f={lightsArray:t,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:o,state:f,setupLights:l,setupLightsView:u,pushLight:s,pushShadow:a,pushLightProbeGrid:c}}function WF(n){let e=new WeakMap;function t(r,o=0){let s=e.get(r),a;return s===void 0?(a=new NM(n),e.set(r,[a])):o>=s.length?(a=new NM(n),s.push(a)):a=s[o],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var $F=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qF=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,XF=[new k(1,0,0),new k(-1,0,0),new k(0,1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1)],YF=[new k(0,-1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1),new k(0,-1,0),new k(0,-1,0)],PM=new At,yl=new k,Iy=new k;function ZF(n,e,t){let i=new pa,r=new ot,o=new ot,s=new It,a=new Lf,c=new Of,l={},u=t.maxTextureSize,f={[Cr]:Rn,[Rn]:Cr,[ir]:ir},d=new ni({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:$F,fragmentShader:qF}),h=d.clone();h.defines.HORIZONTAL_PASS=1;let p=new ti;p.setAttribute("position",new bn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new hi(p,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=sl;let m=this.type;this.render=function(b,D,y){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||b.length===0)return;this.type===Ib&&(ke("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=sl);let M=n.getRenderTarget(),P=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),O=n.state;O.setBlending(rr),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let $=m!==this.type;$&&D.traverse(function(Y){Y.material&&(Array.isArray(Y.material)?Y.material.forEach(B=>B.needsUpdate=!0):Y.material.needsUpdate=!0)});for(let Y=0,B=b.length;Y<B;Y++){let W=b[Y],z=W.shadow;if(z===void 0){ke("WebGLShadowMap:",W,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;r.copy(z.mapSize);let K=z.getFrameExtents();r.multiply(K),o.copy(z.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(o.x=Math.floor(u/K.x),r.x=o.x*K.x,z.mapSize.x=o.x),r.y>u&&(o.y=Math.floor(u/K.y),r.y=o.y*K.y,z.mapSize.y=o.y));let ee=n.state.buffers.depth.getReversed();if(z.camera._reversedDepth=ee,z.map===null||$===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===ya){if(W.isPointLight){ke("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new ei(r.x,r.y,{format:uo,type:or,minFilter:gn,magFilter:gn,generateMipmaps:!1}),z.map.texture.name=W.name+".shadowMap",z.map.depthTexture=new Tr(r.x,r.y,Oi),z.map.depthTexture.name=W.name+".shadowMapDepth",z.map.depthTexture.format=er,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=an,z.map.depthTexture.magFilter=an}else W.isPointLight?(z.map=new kh(r.x),z.map.depthTexture=new Nf(r.x,Li)):(z.map=new ei(r.x,r.y),z.map.depthTexture=new Tr(r.x,r.y,Li)),z.map.depthTexture.name=W.name+".shadowMap",z.map.depthTexture.format=er,this.type===sl?(z.map.depthTexture.compareFunction=ee?Ph:Nh,z.map.depthTexture.minFilter=gn,z.map.depthTexture.magFilter=gn):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=an,z.map.depthTexture.magFilter=an);z.camera.updateProjectionMatrix()}let pe=z.map.isWebGLCubeRenderTarget?6:1;for(let ye=0;ye<pe;ye++){if(z.map.isWebGLCubeRenderTarget)n.setRenderTarget(z.map,ye),n.clear();else{ye===0&&(n.setRenderTarget(z.map),n.clear());let Ee=z.getViewport(ye);s.set(o.x*Ee.x,o.y*Ee.y,o.x*Ee.z,o.y*Ee.w),O.viewport(s)}if(W.isPointLight){let Ee=z.camera,ut=z.matrix,Pt=W.distance||Ee.far;Pt!==Ee.far&&(Ee.far=Pt,Ee.updateProjectionMatrix()),yl.setFromMatrixPosition(W.matrixWorld),Ee.position.copy(yl),Iy.copy(Ee.position),Iy.add(XF[ye]),Ee.up.copy(YF[ye]),Ee.lookAt(Iy),Ee.updateMatrixWorld(),ut.makeTranslation(-yl.x,-yl.y,-yl.z),PM.multiplyMatrices(Ee.projectionMatrix,Ee.matrixWorldInverse),z._frustum.setFromProjectionMatrix(PM,Ee.coordinateSystem,Ee.reversedDepth)}else z.updateMatrices(W);i=z.getFrustum(),S(D,y,z.camera,W,this.type)}z.isPointLightShadow!==!0&&this.type===ya&&C(z,y),z.needsUpdate=!1}m=this.type,g.needsUpdate=!1,n.setRenderTarget(M,P,I)};function C(b,D){let y=e.update(x);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,h.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,h.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new ei(r.x,r.y,{format:uo,type:or})),d.uniforms.shadow_pass.value=b.map.depthTexture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,n.setRenderTarget(b.mapPass),n.clear(),n.renderBufferDirect(D,null,y,d,x,null),h.uniforms.shadow_pass.value=b.mapPass.texture,h.uniforms.resolution.value=b.mapSize,h.uniforms.radius.value=b.radius,n.setRenderTarget(b.map),n.clear(),n.renderBufferDirect(D,null,y,h,x,null)}function T(b,D,y,M){let P=null,I=y.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(I!==void 0)P=I;else if(P=y.isPointLight===!0?c:a,n.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){let O=P.uuid,$=D.uuid,Y=l[O];Y===void 0&&(Y={},l[O]=Y);let B=Y[$];B===void 0&&(B=P.clone(),Y[$]=B,D.addEventListener("dispose",w)),P=B}if(P.visible=D.visible,P.wireframe=D.wireframe,M===ya?P.side=D.shadowSide!==null?D.shadowSide:D.side:P.side=D.shadowSide!==null?D.shadowSide:f[D.side],P.alphaMap=D.alphaMap,P.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,P.map=D.map,P.clipShadows=D.clipShadows,P.clippingPlanes=D.clippingPlanes,P.clipIntersection=D.clipIntersection,P.displacementMap=D.displacementMap,P.displacementScale=D.displacementScale,P.displacementBias=D.displacementBias,P.wireframeLinewidth=D.wireframeLinewidth,P.linewidth=D.linewidth,y.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let O=n.properties.get(P);O.light=y}return P}function S(b,D,y,M,P){if(b.visible===!1)return;if(b.layers.test(D.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&P===ya)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,b.matrixWorld);let $=e.update(b),Y=b.material;if(Array.isArray(Y)){let B=$.groups;for(let W=0,z=B.length;W<z;W++){let K=B[W],ee=Y[K.materialIndex];if(ee&&ee.visible){let pe=T(b,ee,M,P);b.onBeforeShadow(n,b,D,y,$,pe,K),n.renderBufferDirect(y,null,$,pe,b,K),b.onAfterShadow(n,b,D,y,$,pe,K)}}}else if(Y.visible){let B=T(b,Y,M,P);b.onBeforeShadow(n,b,D,y,$,B,null),n.renderBufferDirect(y,null,$,B,b,null),b.onAfterShadow(n,b,D,y,$,B,null)}}let O=b.children;for(let $=0,Y=O.length;$<Y;$++)S(O[$],D,y,M,P)}function w(b){b.target.removeEventListener("dispose",w);for(let y in l){let M=l[y],P=b.target.uuid;P in M&&(M[P].dispose(),delete M[P])}}}function KF(n,e){function t(){let A=!1,oe=new It,q=null,de=new It(0,0,0,0);return{setMask:function(ve){q!==ve&&!A&&(n.colorMask(ve,ve,ve,ve),q=ve)},setLocked:function(ve){A=ve},setClear:function(ve,J,we,be,Ot){Ot===!0&&(ve*=be,J*=be,we*=be),oe.set(ve,J,we,be),de.equals(oe)===!1&&(n.clearColor(ve,J,we,be),de.copy(oe))},reset:function(){A=!1,q=null,de.set(-1,0,0,0)}}}function i(){let A=!1,oe=!1,q=null,de=null,ve=null;return{setReversed:function(J){if(oe!==J){let we=e.get("EXT_clip_control");J?we.clipControlEXT(we.LOWER_LEFT_EXT,we.ZERO_TO_ONE_EXT):we.clipControlEXT(we.LOWER_LEFT_EXT,we.NEGATIVE_ONE_TO_ONE_EXT),oe=J;let be=ve;ve=null,this.setClear(be)}},getReversed:function(){return oe},setTest:function(J){J?te(n.DEPTH_TEST):Be(n.DEPTH_TEST)},setMask:function(J){q!==J&&!A&&(n.depthMask(J),q=J)},setFunc:function(J){if(oe&&(J=lM[J]),de!==J){switch(J){case vf:n.depthFunc(n.NEVER);break;case yf:n.depthFunc(n.ALWAYS);break;case _f:n.depthFunc(n.LESS);break;case Ko:n.depthFunc(n.LEQUAL);break;case xf:n.depthFunc(n.EQUAL);break;case Sf:n.depthFunc(n.GEQUAL);break;case Ef:n.depthFunc(n.GREATER);break;case bf:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}de=J}},setLocked:function(J){A=J},setClear:function(J){ve!==J&&(ve=J,oe&&(J=1-J),n.clearDepth(J))},reset:function(){A=!1,q=null,de=null,ve=null,oe=!1}}}function r(){let A=!1,oe=null,q=null,de=null,ve=null,J=null,we=null,be=null,Ot=null;return{setTest:function(Tt){A||(Tt?te(n.STENCIL_TEST):Be(n.STENCIL_TEST))},setMask:function(Tt){oe!==Tt&&!A&&(n.stencilMask(Tt),oe=Tt)},setFunc:function(Tt,Fi,ki){(q!==Tt||de!==Fi||ve!==ki)&&(n.stencilFunc(Tt,Fi,ki),q=Tt,de=Fi,ve=ki)},setOp:function(Tt,Fi,ki){(J!==Tt||we!==Fi||be!==ki)&&(n.stencilOp(Tt,Fi,ki),J=Tt,we=Fi,be=ki)},setLocked:function(Tt){A=Tt},setClear:function(Tt){Ot!==Tt&&(n.clearStencil(Tt),Ot=Tt)},reset:function(){A=!1,oe=null,q=null,de=null,ve=null,J=null,we=null,be=null,Ot=null}}}let o=new t,s=new i,a=new r,c=new WeakMap,l=new WeakMap,u={},f={},d={},h=new WeakMap,p=[],x=null,g=!1,m=null,C=null,T=null,S=null,w=null,b=null,D=null,y=new qe(0,0,0),M=0,P=!1,I=null,O=null,$=null,Y=null,B=null,W=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,K=0,ee=n.getParameter(n.VERSION);ee.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(ee)[1]),z=K>=1):ee.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),z=K>=2);let pe=null,ye={},Ee=n.getParameter(n.SCISSOR_BOX),ut=n.getParameter(n.VIEWPORT),Pt=new It().fromArray(Ee),dt=new It().fromArray(ut);function Z(A,oe,q,de){let ve=new Uint8Array(4),J=n.createTexture();n.bindTexture(A,J),n.texParameteri(A,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(A,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let we=0;we<q;we++)A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY?n.texImage3D(oe,0,n.RGBA,1,1,de,0,n.RGBA,n.UNSIGNED_BYTE,ve):n.texImage2D(oe+we,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ve);return J}let se={};se[n.TEXTURE_2D]=Z(n.TEXTURE_2D,n.TEXTURE_2D,1),se[n.TEXTURE_CUBE_MAP]=Z(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),se[n.TEXTURE_2D_ARRAY]=Z(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),se[n.TEXTURE_3D]=Z(n.TEXTURE_3D,n.TEXTURE_3D,1,1),o.setClear(0,0,0,1),s.setClear(1),a.setClear(0),te(n.DEPTH_TEST),s.setFunc(Ko),jt(!1),Kt(ey),te(n.CULL_FACE),ft(rr);function te(A){u[A]!==!0&&(n.enable(A),u[A]=!0)}function Be(A){u[A]!==!1&&(n.disable(A),u[A]=!1)}function je(A,oe){return d[A]!==oe?(n.bindFramebuffer(A,oe),d[A]=oe,A===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=oe),A===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=oe),!0):!1}function Le(A,oe){let q=p,de=!1;if(A){q=h.get(oe),q===void 0&&(q=[],h.set(oe,q));let ve=A.textures;if(q.length!==ve.length||q[0]!==n.COLOR_ATTACHMENT0){for(let J=0,we=ve.length;J<we;J++)q[J]=n.COLOR_ATTACHMENT0+J;q.length=ve.length,de=!0}}else q[0]!==n.BACK&&(q[0]=n.BACK,de=!0);de&&n.drawBuffers(q)}function Bt(A){return x!==A?(n.useProgram(A),x=A,!0):!1}let Qe={[to]:n.FUNC_ADD,[Nb]:n.FUNC_SUBTRACT,[Pb]:n.FUNC_REVERSE_SUBTRACT};Qe[Lb]=n.MIN,Qe[Ob]=n.MAX;let Mt={[Fb]:n.ZERO,[kb]:n.ONE,[Ub]:n.SRC_COLOR,[mf]:n.SRC_ALPHA,[jb]:n.SRC_ALPHA_SATURATE,[zb]:n.DST_COLOR,[Vb]:n.DST_ALPHA,[Bb]:n.ONE_MINUS_SRC_COLOR,[gf]:n.ONE_MINUS_SRC_ALPHA,[Gb]:n.ONE_MINUS_DST_COLOR,[Hb]:n.ONE_MINUS_DST_ALPHA,[Wb]:n.CONSTANT_COLOR,[$b]:n.ONE_MINUS_CONSTANT_COLOR,[qb]:n.CONSTANT_ALPHA,[Xb]:n.ONE_MINUS_CONSTANT_ALPHA};function ft(A,oe,q,de,ve,J,we,be,Ot,Tt){if(A===rr){g===!0&&(Be(n.BLEND),g=!1);return}if(g===!1&&(te(n.BLEND),g=!0),A!==Rb){if(A!==m||Tt!==P){if((C!==to||w!==to)&&(n.blendEquation(n.FUNC_ADD),C=to,w=to),Tt)switch(A){case Zo:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case al:n.blendFunc(n.ONE,n.ONE);break;case ty:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ny:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Ue("WebGLState: Invalid blending: ",A);break}else switch(A){case Zo:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case al:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case ty:Ue("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ny:Ue("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ue("WebGLState: Invalid blending: ",A);break}T=null,S=null,b=null,D=null,y.set(0,0,0),M=0,m=A,P=Tt}return}ve=ve||oe,J=J||q,we=we||de,(oe!==C||ve!==w)&&(n.blendEquationSeparate(Qe[oe],Qe[ve]),C=oe,w=ve),(q!==T||de!==S||J!==b||we!==D)&&(n.blendFuncSeparate(Mt[q],Mt[de],Mt[J],Mt[we]),T=q,S=de,b=J,D=we),(be.equals(y)===!1||Ot!==M)&&(n.blendColor(be.r,be.g,be.b,Ot),y.copy(be),M=Ot),m=A,P=!1}function st(A,oe){A.side===ir?Be(n.CULL_FACE):te(n.CULL_FACE);let q=A.side===Rn;oe&&(q=!q),jt(q),A.blending===Zo&&A.transparent===!1?ft(rr):ft(A.blending,A.blendEquation,A.blendSrc,A.blendDst,A.blendEquationAlpha,A.blendSrcAlpha,A.blendDstAlpha,A.blendColor,A.blendAlpha,A.premultipliedAlpha),s.setFunc(A.depthFunc),s.setTest(A.depthTest),s.setMask(A.depthWrite),o.setMask(A.colorWrite);let de=A.stencilWrite;a.setTest(de),de&&(a.setMask(A.stencilWriteMask),a.setFunc(A.stencilFunc,A.stencilRef,A.stencilFuncMask),a.setOp(A.stencilFail,A.stencilZFail,A.stencilZPass)),cn(A.polygonOffset,A.polygonOffsetFactor,A.polygonOffsetUnits),A.alphaToCoverage===!0?te(n.SAMPLE_ALPHA_TO_COVERAGE):Be(n.SAMPLE_ALPHA_TO_COVERAGE)}function jt(A){I!==A&&(A?n.frontFace(n.CW):n.frontFace(n.CCW),I=A)}function Kt(A){A!==Db?(te(n.CULL_FACE),A!==O&&(A===ey?n.cullFace(n.BACK):A===Ab?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Be(n.CULL_FACE),O=A}function rn(A){A!==$&&(z&&n.lineWidth(A),$=A)}function cn(A,oe,q){A?(te(n.POLYGON_OFFSET_FILL),(Y!==oe||B!==q)&&(Y=oe,B=q,s.getReversed()&&(oe=-oe),n.polygonOffset(oe,q))):Be(n.POLYGON_OFFSET_FILL)}function Lt(A){A?te(n.SCISSOR_TEST):Be(n.SCISSOR_TEST)}function Wt(A){A===void 0&&(A=n.TEXTURE0+W-1),pe!==A&&(n.activeTexture(A),pe=A)}function R(A,oe,q){q===void 0&&(pe===null?q=n.TEXTURE0+W-1:q=pe);let de=ye[q];de===void 0&&(de={type:void 0,texture:void 0},ye[q]=de),(de.type!==A||de.texture!==oe)&&(pe!==q&&(n.activeTexture(q),pe=q),n.bindTexture(A,oe||se[A]),de.type=A,de.texture=oe)}function Nn(){let A=ye[pe];A!==void 0&&A.type!==void 0&&(n.bindTexture(A.type,null),A.type=void 0,A.texture=void 0)}function _t(){try{n.compressedTexImage2D(...arguments)}catch(A){Ue("WebGLState:",A)}}function E(){try{n.compressedTexImage3D(...arguments)}catch(A){Ue("WebGLState:",A)}}function v(){try{n.texSubImage2D(...arguments)}catch(A){Ue("WebGLState:",A)}}function L(){try{n.texSubImage3D(...arguments)}catch(A){Ue("WebGLState:",A)}}function V(){try{n.compressedTexSubImage2D(...arguments)}catch(A){Ue("WebGLState:",A)}}function G(){try{n.compressedTexSubImage3D(...arguments)}catch(A){Ue("WebGLState:",A)}}function ie(){try{n.texStorage2D(...arguments)}catch(A){Ue("WebGLState:",A)}}function ae(){try{n.texStorage3D(...arguments)}catch(A){Ue("WebGLState:",A)}}function j(){try{n.texImage2D(...arguments)}catch(A){Ue("WebGLState:",A)}}function X(){try{n.texImage3D(...arguments)}catch(A){Ue("WebGLState:",A)}}function le(A){return f[A]!==void 0?f[A]:n.getParameter(A)}function Ce(A,oe){f[A]!==oe&&(n.pixelStorei(A,oe),f[A]=oe)}function fe(A){Pt.equals(A)===!1&&(n.scissor(A.x,A.y,A.z,A.w),Pt.copy(A))}function ue(A){dt.equals(A)===!1&&(n.viewport(A.x,A.y,A.z,A.w),dt.copy(A))}function Ie(A,oe){let q=l.get(oe);q===void 0&&(q=new WeakMap,l.set(oe,q));let de=q.get(A);de===void 0&&(de=n.getUniformBlockIndex(oe,A.name),q.set(A,de))}function Oe(A,oe){let de=l.get(oe).get(A);c.get(oe)!==de&&(n.uniformBlockBinding(oe,de,A.__bindingPointIndex),c.set(oe,de))}function We(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),s.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},f={},pe=null,ye={},d={},h=new WeakMap,p=[],x=null,g=!1,m=null,C=null,T=null,S=null,w=null,b=null,D=null,y=new qe(0,0,0),M=0,P=!1,I=null,O=null,$=null,Y=null,B=null,Pt.set(0,0,n.canvas.width,n.canvas.height),dt.set(0,0,n.canvas.width,n.canvas.height),o.reset(),s.reset(),a.reset()}return{buffers:{color:o,depth:s,stencil:a},enable:te,disable:Be,bindFramebuffer:je,drawBuffers:Le,useProgram:Bt,setBlending:ft,setMaterial:st,setFlipSided:jt,setCullFace:Kt,setLineWidth:rn,setPolygonOffset:cn,setScissorTest:Lt,activeTexture:Wt,bindTexture:R,unbindTexture:Nn,compressedTexImage2D:_t,compressedTexImage3D:E,texImage2D:j,texImage3D:X,pixelStorei:Ce,getParameter:le,updateUBOMapping:Ie,uniformBlockBinding:Oe,texStorage2D:ie,texStorage3D:ae,texSubImage2D:v,texSubImage3D:L,compressedTexSubImage2D:V,compressedTexSubImage3D:G,scissor:fe,viewport:ue,reset:We}}function JF(n,e,t,i,r,o,s){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ot,u=new WeakMap,f=new Set,d,h=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(E,v){return p?new OffscreenCanvas(E,v):zc("canvas")}function g(E,v,L){let V=1,G=_t(E);if((G.width>L||G.height>L)&&(V=L/Math.max(G.width,G.height)),V<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let ie=Math.floor(V*G.width),ae=Math.floor(V*G.height);d===void 0&&(d=x(ie,ae));let j=v?x(ie,ae):d;return j.width=ie,j.height=ae,j.getContext("2d").drawImage(E,0,0,ie,ae),ke("WebGLRenderer: Texture has been resized from ("+G.width+"x"+G.height+") to ("+ie+"x"+ae+")."),j}else return"data"in E&&ke("WebGLRenderer: Image in DataTexture is too big ("+G.width+"x"+G.height+")."),E;return E}function m(E){return E.generateMipmaps}function C(E){n.generateMipmap(E)}function T(E){return E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?n.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function S(E,v,L,V,G,ie=!1){if(E!==null){if(n[E]!==void 0)return n[E];ke("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let ae;V&&(ae=e.get("EXT_texture_norm16"),ae||ke("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let j=v;if(v===n.RED&&(L===n.FLOAT&&(j=n.R32F),L===n.HALF_FLOAT&&(j=n.R16F),L===n.UNSIGNED_BYTE&&(j=n.R8),L===n.UNSIGNED_SHORT&&ae&&(j=ae.R16_EXT),L===n.SHORT&&ae&&(j=ae.R16_SNORM_EXT)),v===n.RED_INTEGER&&(L===n.UNSIGNED_BYTE&&(j=n.R8UI),L===n.UNSIGNED_SHORT&&(j=n.R16UI),L===n.UNSIGNED_INT&&(j=n.R32UI),L===n.BYTE&&(j=n.R8I),L===n.SHORT&&(j=n.R16I),L===n.INT&&(j=n.R32I)),v===n.RG&&(L===n.FLOAT&&(j=n.RG32F),L===n.HALF_FLOAT&&(j=n.RG16F),L===n.UNSIGNED_BYTE&&(j=n.RG8),L===n.UNSIGNED_SHORT&&ae&&(j=ae.RG16_EXT),L===n.SHORT&&ae&&(j=ae.RG16_SNORM_EXT)),v===n.RG_INTEGER&&(L===n.UNSIGNED_BYTE&&(j=n.RG8UI),L===n.UNSIGNED_SHORT&&(j=n.RG16UI),L===n.UNSIGNED_INT&&(j=n.RG32UI),L===n.BYTE&&(j=n.RG8I),L===n.SHORT&&(j=n.RG16I),L===n.INT&&(j=n.RG32I)),v===n.RGB_INTEGER&&(L===n.UNSIGNED_BYTE&&(j=n.RGB8UI),L===n.UNSIGNED_SHORT&&(j=n.RGB16UI),L===n.UNSIGNED_INT&&(j=n.RGB32UI),L===n.BYTE&&(j=n.RGB8I),L===n.SHORT&&(j=n.RGB16I),L===n.INT&&(j=n.RGB32I)),v===n.RGBA_INTEGER&&(L===n.UNSIGNED_BYTE&&(j=n.RGBA8UI),L===n.UNSIGNED_SHORT&&(j=n.RGBA16UI),L===n.UNSIGNED_INT&&(j=n.RGBA32UI),L===n.BYTE&&(j=n.RGBA8I),L===n.SHORT&&(j=n.RGBA16I),L===n.INT&&(j=n.RGBA32I)),v===n.RGB&&(L===n.UNSIGNED_SHORT&&ae&&(j=ae.RGB16_EXT),L===n.SHORT&&ae&&(j=ae.RGB16_SNORM_EXT),L===n.UNSIGNED_INT_5_9_9_9_REV&&(j=n.RGB9_E5),L===n.UNSIGNED_INT_10F_11F_11F_REV&&(j=n.R11F_G11F_B10F)),v===n.RGBA){let X=ie?Hc:tt.getTransfer(G);L===n.FLOAT&&(j=n.RGBA32F),L===n.HALF_FLOAT&&(j=n.RGBA16F),L===n.UNSIGNED_BYTE&&(j=X===yt?n.SRGB8_ALPHA8:n.RGBA8),L===n.UNSIGNED_SHORT&&ae&&(j=ae.RGBA16_EXT),L===n.SHORT&&ae&&(j=ae.RGBA16_SNORM_EXT),L===n.UNSIGNED_SHORT_4_4_4_4&&(j=n.RGBA4),L===n.UNSIGNED_SHORT_5_5_5_1&&(j=n.RGB5_A1)}return(j===n.R16F||j===n.R32F||j===n.RG16F||j===n.RG32F||j===n.RGBA16F||j===n.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function w(E,v){let L;return E?v===null||v===Li||v===xa?L=n.DEPTH24_STENCIL8:v===Oi?L=n.DEPTH32F_STENCIL8:v===_a&&(L=n.DEPTH24_STENCIL8,ke("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Li||v===xa?L=n.DEPTH_COMPONENT24:v===Oi?L=n.DEPTH_COMPONENT32F:v===_a&&(L=n.DEPTH_COMPONENT16),L}function b(E,v){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==an&&E.minFilter!==gn?Math.log2(Math.max(v.width,v.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?v.mipmaps.length:1}function D(E){let v=E.target;v.removeEventListener("dispose",D),M(v),v.isVideoTexture&&u.delete(v),v.isHTMLTexture&&f.delete(v)}function y(E){let v=E.target;v.removeEventListener("dispose",y),I(v)}function M(E){let v=i.get(E);if(v.__webglInit===void 0)return;let L=E.source,V=h.get(L);if(V){let G=V[v.__cacheKey];G.usedTimes--,G.usedTimes===0&&P(E),Object.keys(V).length===0&&h.delete(L)}i.remove(E)}function P(E){let v=i.get(E);n.deleteTexture(v.__webglTexture);let L=E.source,V=h.get(L);delete V[v.__cacheKey],s.memory.textures--}function I(E){let v=i.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),i.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(v.__webglFramebuffer[V]))for(let G=0;G<v.__webglFramebuffer[V].length;G++)n.deleteFramebuffer(v.__webglFramebuffer[V][G]);else n.deleteFramebuffer(v.__webglFramebuffer[V]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[V])}else{if(Array.isArray(v.__webglFramebuffer))for(let V=0;V<v.__webglFramebuffer.length;V++)n.deleteFramebuffer(v.__webglFramebuffer[V]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let V=0;V<v.__webglColorRenderbuffer.length;V++)v.__webglColorRenderbuffer[V]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[V]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let L=E.textures;for(let V=0,G=L.length;V<G;V++){let ie=i.get(L[V]);ie.__webglTexture&&(n.deleteTexture(ie.__webglTexture),s.memory.textures--),i.remove(L[V])}i.remove(E)}let O=0;function $(){O=0}function Y(){return O}function B(E){O=E}function W(){let E=O;return E>=r.maxTextures&&ke("WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+r.maxTextures),O+=1,E}function z(E){let v=[];return v.push(E.wrapS),v.push(E.wrapT),v.push(E.wrapR||0),v.push(E.magFilter),v.push(E.minFilter),v.push(E.anisotropy),v.push(E.internalFormat),v.push(E.format),v.push(E.type),v.push(E.generateMipmaps),v.push(E.premultiplyAlpha),v.push(E.flipY),v.push(E.unpackAlignment),v.push(E.colorSpace),v.join()}function K(E,v){let L=i.get(E);if(E.isVideoTexture&&R(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&L.__version!==E.version){let V=E.image;if(V===null)ke("WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)ke("WebGLRenderer: Texture marked for update but image is incomplete");else{Be(L,E,v);return}}else E.isExternalTexture&&(L.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,L.__webglTexture,n.TEXTURE0+v)}function ee(E,v){let L=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&L.__version!==E.version){Be(L,E,v);return}else E.isExternalTexture&&(L.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,L.__webglTexture,n.TEXTURE0+v)}function pe(E,v){let L=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&L.__version!==E.version){Be(L,E,v);return}t.bindTexture(n.TEXTURE_3D,L.__webglTexture,n.TEXTURE0+v)}function ye(E,v){let L=i.get(E);if(E.isCubeDepthTexture!==!0&&E.version>0&&L.__version!==E.version){je(L,E,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+v)}let Ee={[Mf]:n.REPEAT,[Qi]:n.CLAMP_TO_EDGE,[wf]:n.MIRRORED_REPEAT},ut={[an]:n.NEAREST,[Kb]:n.NEAREST_MIPMAP_NEAREST,[ll]:n.NEAREST_MIPMAP_LINEAR,[gn]:n.LINEAR,[Yf]:n.LINEAR_MIPMAP_NEAREST,[co]:n.LINEAR_MIPMAP_LINEAR},Pt={[eM]:n.NEVER,[oM]:n.ALWAYS,[tM]:n.LESS,[Nh]:n.LEQUAL,[nM]:n.EQUAL,[Ph]:n.GEQUAL,[iM]:n.GREATER,[rM]:n.NOTEQUAL};function dt(E,v){if(v.type===Oi&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===gn||v.magFilter===Yf||v.magFilter===ll||v.magFilter===co||v.minFilter===gn||v.minFilter===Yf||v.minFilter===ll||v.minFilter===co)&&ke("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(E,n.TEXTURE_WRAP_S,Ee[v.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,Ee[v.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,Ee[v.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,ut[v.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,ut[v.minFilter]),v.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,Pt[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===an||v.minFilter!==ll&&v.minFilter!==co||v.type===Oi&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){let L=e.get("EXT_texture_filter_anisotropic");n.texParameterf(E,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function Z(E,v){let L=!1;E.__webglInit===void 0&&(E.__webglInit=!0,v.addEventListener("dispose",D));let V=v.source,G=h.get(V);G===void 0&&(G={},h.set(V,G));let ie=z(v);if(ie!==E.__cacheKey){G[ie]===void 0&&(G[ie]={texture:n.createTexture(),usedTimes:0},s.memory.textures++,L=!0),G[ie].usedTimes++;let ae=G[E.__cacheKey];ae!==void 0&&(G[E.__cacheKey].usedTimes--,ae.usedTimes===0&&P(v)),E.__cacheKey=ie,E.__webglTexture=G[ie].texture}return L}function se(E,v,L){return Math.floor(Math.floor(E/L)/v)}function te(E,v,L,V){let ie=E.updateRanges;if(ie.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,v.width,v.height,L,V,v.data);else{ie.sort((Ce,fe)=>Ce.start-fe.start);let ae=0;for(let Ce=1;Ce<ie.length;Ce++){let fe=ie[ae],ue=ie[Ce],Ie=fe.start+fe.count,Oe=se(ue.start,v.width,4),We=se(fe.start,v.width,4);ue.start<=Ie+1&&Oe===We&&se(ue.start+ue.count-1,v.width,4)===Oe?fe.count=Math.max(fe.count,ue.start+ue.count-fe.start):(++ae,ie[ae]=ue)}ie.length=ae+1;let j=t.getParameter(n.UNPACK_ROW_LENGTH),X=t.getParameter(n.UNPACK_SKIP_PIXELS),le=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,v.width);for(let Ce=0,fe=ie.length;Ce<fe;Ce++){let ue=ie[Ce],Ie=Math.floor(ue.start/4),Oe=Math.ceil(ue.count/4),We=Ie%v.width,A=Math.floor(Ie/v.width),oe=Oe,q=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,We),t.pixelStorei(n.UNPACK_SKIP_ROWS,A),t.texSubImage2D(n.TEXTURE_2D,0,We,A,oe,q,L,V,v.data)}E.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,j),t.pixelStorei(n.UNPACK_SKIP_PIXELS,X),t.pixelStorei(n.UNPACK_SKIP_ROWS,le)}}function Be(E,v,L){let V=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(V=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(V=n.TEXTURE_3D);let G=Z(E,v),ie=v.source;t.bindTexture(V,E.__webglTexture,n.TEXTURE0+L);let ae=i.get(ie);if(ie.version!==ae.__version||G===!0){if(t.activeTexture(n.TEXTURE0+L),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){let q=tt.getPrimaries(tt.workingColorSpace),de=v.colorSpace===Dr?null:tt.getPrimaries(v.colorSpace),ve=v.colorSpace===Dr||q===de?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve)}t.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment);let X=g(v.image,!1,r.maxTextureSize);X=Nn(v,X);let le=o.convert(v.format,v.colorSpace),Ce=o.convert(v.type),fe=S(v.internalFormat,le,Ce,v.normalized,v.colorSpace,v.isVideoTexture);dt(V,v);let ue,Ie=v.mipmaps,Oe=v.isVideoTexture!==!0,We=ae.__version===void 0||G===!0,A=ie.dataReady,oe=b(v,X);if(v.isDepthTexture)fe=w(v.format===lo,v.type),We&&(Oe?t.texStorage2D(n.TEXTURE_2D,1,fe,X.width,X.height):t.texImage2D(n.TEXTURE_2D,0,fe,X.width,X.height,0,le,Ce,null));else if(v.isDataTexture)if(Ie.length>0){Oe&&We&&t.texStorage2D(n.TEXTURE_2D,oe,fe,Ie[0].width,Ie[0].height);for(let q=0,de=Ie.length;q<de;q++)ue=Ie[q],Oe?A&&t.texSubImage2D(n.TEXTURE_2D,q,0,0,ue.width,ue.height,le,Ce,ue.data):t.texImage2D(n.TEXTURE_2D,q,fe,ue.width,ue.height,0,le,Ce,ue.data);v.generateMipmaps=!1}else Oe?(We&&t.texStorage2D(n.TEXTURE_2D,oe,fe,X.width,X.height),A&&te(v,X,le,Ce)):t.texImage2D(n.TEXTURE_2D,0,fe,X.width,X.height,0,le,Ce,X.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Oe&&We&&t.texStorage3D(n.TEXTURE_2D_ARRAY,oe,fe,Ie[0].width,Ie[0].height,X.depth);for(let q=0,de=Ie.length;q<de;q++)if(ue=Ie[q],v.format!==pi)if(le!==null)if(Oe){if(A)if(v.layerUpdates.size>0){let ve=My(ue.width,ue.height,v.format,v.type);for(let J of v.layerUpdates){let we=ue.data.subarray(J*ve/ue.data.BYTES_PER_ELEMENT,(J+1)*ve/ue.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,J,ue.width,ue.height,1,le,we)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,0,ue.width,ue.height,X.depth,le,ue.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,q,fe,ue.width,ue.height,X.depth,0,ue.data,0,0);else ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Oe?A&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,0,ue.width,ue.height,X.depth,le,Ce,ue.data):t.texImage3D(n.TEXTURE_2D_ARRAY,q,fe,ue.width,ue.height,X.depth,0,le,Ce,ue.data)}else{Oe&&We&&t.texStorage2D(n.TEXTURE_2D,oe,fe,Ie[0].width,Ie[0].height);for(let q=0,de=Ie.length;q<de;q++)ue=Ie[q],v.format!==pi?le!==null?Oe?A&&t.compressedTexSubImage2D(n.TEXTURE_2D,q,0,0,ue.width,ue.height,le,ue.data):t.compressedTexImage2D(n.TEXTURE_2D,q,fe,ue.width,ue.height,0,ue.data):ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?A&&t.texSubImage2D(n.TEXTURE_2D,q,0,0,ue.width,ue.height,le,Ce,ue.data):t.texImage2D(n.TEXTURE_2D,q,fe,ue.width,ue.height,0,le,Ce,ue.data)}else if(v.isDataArrayTexture)if(Oe){if(We&&t.texStorage3D(n.TEXTURE_2D_ARRAY,oe,fe,X.width,X.height,X.depth),A)if(v.layerUpdates.size>0){let q=My(X.width,X.height,v.format,v.type);for(let de of v.layerUpdates){let ve=X.data.subarray(de*q/X.data.BYTES_PER_ELEMENT,(de+1)*q/X.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,de,X.width,X.height,1,le,Ce,ve)}v.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,X.width,X.height,X.depth,le,Ce,X.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,fe,X.width,X.height,X.depth,0,le,Ce,X.data);else if(v.isData3DTexture)Oe?(We&&t.texStorage3D(n.TEXTURE_3D,oe,fe,X.width,X.height,X.depth),A&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,X.width,X.height,X.depth,le,Ce,X.data)):t.texImage3D(n.TEXTURE_3D,0,fe,X.width,X.height,X.depth,0,le,Ce,X.data);else if(v.isFramebufferTexture){if(We)if(Oe)t.texStorage2D(n.TEXTURE_2D,oe,fe,X.width,X.height);else{let q=X.width,de=X.height;for(let ve=0;ve<oe;ve++)t.texImage2D(n.TEXTURE_2D,ve,fe,q,de,0,le,Ce,null),q>>=1,de>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in n){let q=n.canvas;if(q.hasAttribute("layoutsubtree")||q.setAttribute("layoutsubtree","true"),X.parentNode!==q){q.appendChild(X),f.add(v),q.onpaint=de=>{let ve=de.changedElements;for(let J of f)ve.includes(J.image)&&(J.needsUpdate=!0)},q.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,X);else{let ve=n.RGBA,J=n.RGBA,we=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,ve,J,we,X)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Ie.length>0){if(Oe&&We){let q=_t(Ie[0]);t.texStorage2D(n.TEXTURE_2D,oe,fe,q.width,q.height)}for(let q=0,de=Ie.length;q<de;q++)ue=Ie[q],Oe?A&&t.texSubImage2D(n.TEXTURE_2D,q,0,0,le,Ce,ue):t.texImage2D(n.TEXTURE_2D,q,fe,le,Ce,ue);v.generateMipmaps=!1}else if(Oe){if(We){let q=_t(X);t.texStorage2D(n.TEXTURE_2D,oe,fe,q.width,q.height)}A&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,le,Ce,X)}else t.texImage2D(n.TEXTURE_2D,0,fe,le,Ce,X);m(v)&&C(V),ae.__version=ie.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function je(E,v,L){if(v.image.length!==6)return;let V=Z(E,v),G=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+L);let ie=i.get(G);if(G.version!==ie.__version||V===!0){t.activeTexture(n.TEXTURE0+L);let ae=tt.getPrimaries(tt.workingColorSpace),j=v.colorSpace===Dr?null:tt.getPrimaries(v.colorSpace),X=v.colorSpace===Dr||ae===j?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,X);let le=v.isCompressedTexture||v.image[0].isCompressedTexture,Ce=v.image[0]&&v.image[0].isDataTexture,fe=[];for(let J=0;J<6;J++)!le&&!Ce?fe[J]=g(v.image[J],!0,r.maxCubemapSize):fe[J]=Ce?v.image[J].image:v.image[J],fe[J]=Nn(v,fe[J]);let ue=fe[0],Ie=o.convert(v.format,v.colorSpace),Oe=o.convert(v.type),We=S(v.internalFormat,Ie,Oe,v.normalized,v.colorSpace),A=v.isVideoTexture!==!0,oe=ie.__version===void 0||V===!0,q=G.dataReady,de=b(v,ue);dt(n.TEXTURE_CUBE_MAP,v);let ve;if(le){A&&oe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,de,We,ue.width,ue.height);for(let J=0;J<6;J++){ve=fe[J].mipmaps;for(let we=0;we<ve.length;we++){let be=ve[we];v.format!==pi?Ie!==null?A?q&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,we,0,0,be.width,be.height,Ie,be.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,we,We,be.width,be.height,0,be.data):ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):A?q&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,we,0,0,be.width,be.height,Ie,Oe,be.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,we,We,be.width,be.height,0,Ie,Oe,be.data)}}}else{if(ve=v.mipmaps,A&&oe){ve.length>0&&de++;let J=_t(fe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,de,We,J.width,J.height)}for(let J=0;J<6;J++)if(Ce){A?q&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,fe[J].width,fe[J].height,Ie,Oe,fe[J].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,We,fe[J].width,fe[J].height,0,Ie,Oe,fe[J].data);for(let we=0;we<ve.length;we++){let Ot=ve[we].image[J].image;A?q&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,we+1,0,0,Ot.width,Ot.height,Ie,Oe,Ot.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,we+1,We,Ot.width,Ot.height,0,Ie,Oe,Ot.data)}}else{A?q&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Ie,Oe,fe[J]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,We,Ie,Oe,fe[J]);for(let we=0;we<ve.length;we++){let be=ve[we];A?q&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,we+1,0,0,Ie,Oe,be.image[J]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,we+1,We,Ie,Oe,be.image[J])}}}m(v)&&C(n.TEXTURE_CUBE_MAP),ie.__version=G.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function Le(E,v,L,V,G,ie){let ae=o.convert(L.format,L.colorSpace),j=o.convert(L.type),X=S(L.internalFormat,ae,j,L.normalized,L.colorSpace),le=i.get(v),Ce=i.get(L);if(Ce.__renderTarget=v,!le.__hasExternalTextures){let fe=Math.max(1,v.width>>ie),ue=Math.max(1,v.height>>ie);G===n.TEXTURE_3D||G===n.TEXTURE_2D_ARRAY?t.texImage3D(G,ie,X,fe,ue,v.depth,0,ae,j,null):t.texImage2D(G,ie,X,fe,ue,0,ae,j,null)}t.bindFramebuffer(n.FRAMEBUFFER,E),Wt(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,V,G,Ce.__webglTexture,0,Lt(v)):(G===n.TEXTURE_2D||G>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&G<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,V,G,Ce.__webglTexture,ie),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Bt(E,v,L){if(n.bindRenderbuffer(n.RENDERBUFFER,E),v.depthBuffer){let V=v.depthTexture,G=V&&V.isDepthTexture?V.type:null,ie=w(v.stencilBuffer,G),ae=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Wt(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Lt(v),ie,v.width,v.height):L?n.renderbufferStorageMultisample(n.RENDERBUFFER,Lt(v),ie,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,ie,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ae,n.RENDERBUFFER,E)}else{let V=v.textures;for(let G=0;G<V.length;G++){let ie=V[G],ae=o.convert(ie.format,ie.colorSpace),j=o.convert(ie.type),X=S(ie.internalFormat,ae,j,ie.normalized,ie.colorSpace);Wt(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Lt(v),X,v.width,v.height):L?n.renderbufferStorageMultisample(n.RENDERBUFFER,Lt(v),X,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,X,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Qe(E,v,L){let V=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,E),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let G=i.get(v.depthTexture);if(G.__renderTarget=v,(!G.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),V){if(G.__webglInit===void 0&&(G.__webglInit=!0,v.depthTexture.addEventListener("dispose",D)),G.__webglTexture===void 0){G.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture),dt(n.TEXTURE_CUBE_MAP,v.depthTexture);let le=o.convert(v.depthTexture.format),Ce=o.convert(v.depthTexture.type),fe;v.depthTexture.format===er?fe=n.DEPTH_COMPONENT24:v.depthTexture.format===lo&&(fe=n.DEPTH24_STENCIL8);for(let ue=0;ue<6;ue++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,fe,v.width,v.height,0,le,Ce,null)}}else K(v.depthTexture,0);let ie=G.__webglTexture,ae=Lt(v),j=V?n.TEXTURE_CUBE_MAP_POSITIVE_X+L:n.TEXTURE_2D,X=v.depthTexture.format===lo?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(v.depthTexture.format===er)Wt(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,X,j,ie,0,ae):n.framebufferTexture2D(n.FRAMEBUFFER,X,j,ie,0);else if(v.depthTexture.format===lo)Wt(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,X,j,ie,0,ae):n.framebufferTexture2D(n.FRAMEBUFFER,X,j,ie,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Mt(E){let v=i.get(E),L=E.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==E.depthTexture){let V=E.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),V){let G=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,V.removeEventListener("dispose",G)};V.addEventListener("dispose",G),v.__depthDisposeCallback=G}v.__boundDepthTexture=V}if(E.depthTexture&&!v.__autoAllocateDepthBuffer)if(L)for(let V=0;V<6;V++)Qe(v.__webglFramebuffer[V],E,V);else{let V=E.texture.mipmaps;V&&V.length>0?Qe(v.__webglFramebuffer[0],E,0):Qe(v.__webglFramebuffer,E,0)}else if(L){v.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[V]),v.__webglDepthbuffer[V]===void 0)v.__webglDepthbuffer[V]=n.createRenderbuffer(),Bt(v.__webglDepthbuffer[V],E,!1);else{let G=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ie=v.__webglDepthbuffer[V];n.bindRenderbuffer(n.RENDERBUFFER,ie),n.framebufferRenderbuffer(n.FRAMEBUFFER,G,n.RENDERBUFFER,ie)}}else{let V=E.texture.mipmaps;if(V&&V.length>0?t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),Bt(v.__webglDepthbuffer,E,!1);else{let G=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ie=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ie),n.framebufferRenderbuffer(n.FRAMEBUFFER,G,n.RENDERBUFFER,ie)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ft(E,v,L){let V=i.get(E);v!==void 0&&Le(V.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),L!==void 0&&Mt(E)}function st(E){let v=E.texture,L=i.get(E),V=i.get(v);E.addEventListener("dispose",y);let G=E.textures,ie=E.isWebGLCubeRenderTarget===!0,ae=G.length>1;if(ae||(V.__webglTexture===void 0&&(V.__webglTexture=n.createTexture()),V.__version=v.version,s.memory.textures++),ie){L.__webglFramebuffer=[];for(let j=0;j<6;j++)if(v.mipmaps&&v.mipmaps.length>0){L.__webglFramebuffer[j]=[];for(let X=0;X<v.mipmaps.length;X++)L.__webglFramebuffer[j][X]=n.createFramebuffer()}else L.__webglFramebuffer[j]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){L.__webglFramebuffer=[];for(let j=0;j<v.mipmaps.length;j++)L.__webglFramebuffer[j]=n.createFramebuffer()}else L.__webglFramebuffer=n.createFramebuffer();if(ae)for(let j=0,X=G.length;j<X;j++){let le=i.get(G[j]);le.__webglTexture===void 0&&(le.__webglTexture=n.createTexture(),s.memory.textures++)}if(E.samples>0&&Wt(E)===!1){L.__webglMultisampledFramebuffer=n.createFramebuffer(),L.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let j=0;j<G.length;j++){let X=G[j];L.__webglColorRenderbuffer[j]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,L.__webglColorRenderbuffer[j]);let le=o.convert(X.format,X.colorSpace),Ce=o.convert(X.type),fe=S(X.internalFormat,le,Ce,X.normalized,X.colorSpace,E.isXRRenderTarget===!0),ue=Lt(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,ue,fe,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+j,n.RENDERBUFFER,L.__webglColorRenderbuffer[j])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(L.__webglDepthRenderbuffer=n.createRenderbuffer(),Bt(L.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ie){t.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture),dt(n.TEXTURE_CUBE_MAP,v);for(let j=0;j<6;j++)if(v.mipmaps&&v.mipmaps.length>0)for(let X=0;X<v.mipmaps.length;X++)Le(L.__webglFramebuffer[j][X],E,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+j,X);else Le(L.__webglFramebuffer[j],E,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);m(v)&&C(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ae){for(let j=0,X=G.length;j<X;j++){let le=G[j],Ce=i.get(le),fe=n.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(fe=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(fe,Ce.__webglTexture),dt(fe,le),Le(L.__webglFramebuffer,E,le,n.COLOR_ATTACHMENT0+j,fe,0),m(le)&&C(fe)}t.unbindTexture()}else{let j=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(j=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(j,V.__webglTexture),dt(j,v),v.mipmaps&&v.mipmaps.length>0)for(let X=0;X<v.mipmaps.length;X++)Le(L.__webglFramebuffer[X],E,v,n.COLOR_ATTACHMENT0,j,X);else Le(L.__webglFramebuffer,E,v,n.COLOR_ATTACHMENT0,j,0);m(v)&&C(j),t.unbindTexture()}E.depthBuffer&&Mt(E)}function jt(E){let v=E.textures;for(let L=0,V=v.length;L<V;L++){let G=v[L];if(m(G)){let ie=T(E),ae=i.get(G).__webglTexture;t.bindTexture(ie,ae),C(ie),t.unbindTexture()}}}let Kt=[],rn=[];function cn(E){if(E.samples>0){if(Wt(E)===!1){let v=E.textures,L=E.width,V=E.height,G=n.COLOR_BUFFER_BIT,ie=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ae=i.get(E),j=v.length>1;if(j)for(let le=0;le<v.length;le++)t.bindFramebuffer(n.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer);let X=E.texture.mipmaps;X&&X.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ae.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let le=0;le<v.length;le++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(G|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(G|=n.STENCIL_BUFFER_BIT)),j){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ae.__webglColorRenderbuffer[le]);let Ce=i.get(v[le]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ce,0)}n.blitFramebuffer(0,0,L,V,0,0,L,V,G,n.NEAREST),c===!0&&(Kt.length=0,rn.length=0,Kt.push(n.COLOR_ATTACHMENT0+le),E.depthBuffer&&E.resolveDepthBuffer===!1&&(Kt.push(ie),rn.push(ie),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,rn)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Kt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),j)for(let le=0;le<v.length;le++){t.bindFramebuffer(n.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.RENDERBUFFER,ae.__webglColorRenderbuffer[le]);let Ce=i.get(v[le]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.TEXTURE_2D,Ce,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&c){let v=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function Lt(E){return Math.min(r.maxSamples,E.samples)}function Wt(E){let v=i.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function R(E){let v=s.render.frame;u.get(E)!==v&&(u.set(E,v),E.update())}function Nn(E,v){let L=E.colorSpace,V=E.format,G=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||L!==Vc&&L!==Dr&&(tt.getTransfer(L)===yt?(V!==pi||G!==Un)&&ke("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ue("WebGLTextures: Unsupported texture color space:",L)),v}function _t(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(l.width=E.naturalWidth||E.width,l.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(l.width=E.displayWidth,l.height=E.displayHeight):(l.width=E.width,l.height=E.height),l}this.allocateTextureUnit=W,this.resetTextureUnits=$,this.getTextureUnits=Y,this.setTextureUnits=B,this.setTexture2D=K,this.setTexture2DArray=ee,this.setTexture3D=pe,this.setTextureCube=ye,this.rebindTextures=ft,this.setupRenderTarget=st,this.updateRenderTargetMipmap=jt,this.updateMultisampleRenderTarget=cn,this.setupDepthRenderbuffer=Mt,this.setupFrameBufferTexture=Le,this.useMultisampledRTT=Wt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function QF(n,e){function t(i,r=Dr){let o,s=tt.getTransfer(r);if(i===Un)return n.UNSIGNED_BYTE;if(i===Kf)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Jf)return n.UNSIGNED_SHORT_5_5_5_1;if(i===hy)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===py)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===dy)return n.BYTE;if(i===fy)return n.SHORT;if(i===_a)return n.UNSIGNED_SHORT;if(i===Zf)return n.INT;if(i===Li)return n.UNSIGNED_INT;if(i===Oi)return n.FLOAT;if(i===or)return n.HALF_FLOAT;if(i===my)return n.ALPHA;if(i===gy)return n.RGB;if(i===pi)return n.RGBA;if(i===er)return n.DEPTH_COMPONENT;if(i===lo)return n.DEPTH_STENCIL;if(i===vy)return n.RED;if(i===Qf)return n.RED_INTEGER;if(i===uo)return n.RG;if(i===eh)return n.RG_INTEGER;if(i===th)return n.RGBA_INTEGER;if(i===ul||i===dl||i===fl||i===hl)if(s===yt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===ul)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===dl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===fl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===hl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===ul)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===dl)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===fl)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===hl)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===nh||i===ih||i===rh||i===oh)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===nh)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ih)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===rh)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===oh)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===sh||i===ah||i===ch||i===lh||i===uh||i===pl||i===dh)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(i===sh||i===ah)return s===yt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===ch)return s===yt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC;if(i===lh)return o.COMPRESSED_R11_EAC;if(i===uh)return o.COMPRESSED_SIGNED_R11_EAC;if(i===pl)return o.COMPRESSED_RG11_EAC;if(i===dh)return o.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===fh||i===hh||i===ph||i===mh||i===gh||i===vh||i===yh||i===_h||i===xh||i===Sh||i===Eh||i===bh||i===Mh||i===wh)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(i===fh)return s===yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===hh)return s===yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ph)return s===yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===mh)return s===yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===gh)return s===yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===vh)return s===yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===yh)return s===yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===_h)return s===yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===xh)return s===yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Sh)return s===yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Eh)return s===yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===bh)return s===yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Mh)return s===yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===wh)return s===yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ch||i===Th||i===Dh)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(i===Ch)return s===yt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Th)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Dh)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ah||i===Ih||i===ml||i===Rh)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(i===Ah)return o.COMPRESSED_RED_RGTC1_EXT;if(i===Ih)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ml)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Rh)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===xa?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var e2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,t2=`
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

}`,Uy=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new tl(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new ni({vertexShader:e2,fragmentShader:t2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new hi(new nl(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},By=class extends tr{constructor(e,t){super();let i=this,r=null,o=1,s=null,a="local-floor",c=1,l=null,u=null,f=null,d=null,h=null,p=null,x=typeof XRWebGLBinding<"u",g=new Uy,m={},C=t.getContextAttributes(),T=null,S=null,w=[],b=[],D=new ot,y=null,M=new mn;M.viewport=new It;let P=new mn;P.viewport=new It;let I=[M,P],O=new $f,$=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let se=w[Z];return se===void 0&&(se=new ha,w[Z]=se),se.getTargetRaySpace()},this.getControllerGrip=function(Z){let se=w[Z];return se===void 0&&(se=new ha,w[Z]=se),se.getGripSpace()},this.getHand=function(Z){let se=w[Z];return se===void 0&&(se=new ha,w[Z]=se),se.getHandSpace()};function B(Z){let se=b.indexOf(Z.inputSource);if(se===-1)return;let te=w[se];te!==void 0&&(te.update(Z.inputSource,Z.frame,l||s),te.dispatchEvent({type:Z.type,data:Z.inputSource}))}function W(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",z);for(let Z=0;Z<w.length;Z++){let se=b[Z];se!==null&&(b[Z]=null,w[Z].disconnect(se))}$=null,Y=null,g.reset();for(let Z in m)delete m[Z];e.setRenderTarget(T),h=null,d=null,f=null,r=null,S=null,dt.stop(),i.isPresenting=!1,e.setPixelRatio(y),e.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){o=Z,i.isPresenting===!0&&ke("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,i.isPresenting===!0&&ke("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||s},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return f===null&&x&&(f=new XRWebGLBinding(r,t)),f},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(Z){if(r=Z,r!==null){if(T=e.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",W),r.addEventListener("inputsourceschange",z),C.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(D),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let te=null,Be=null,je=null;C.depth&&(je=C.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=C.stencil?lo:er,Be=C.stencil?xa:Li);let Le={colorFormat:t.RGBA8,depthFormat:je,scaleFactor:o};f=this.getBinding(),d=f.createProjectionLayer(Le),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new ei(d.textureWidth,d.textureHeight,{format:pi,type:Un,depthTexture:new Tr(d.textureWidth,d.textureHeight,Be,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:C.stencil,colorSpace:e.outputColorSpace,samples:C.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let te={antialias:C.antialias,alpha:!0,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:o};h=new XRWebGLLayer(r,t,te),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),S=new ei(h.framebufferWidth,h.framebufferHeight,{format:pi,type:Un,colorSpace:e.outputColorSpace,stencilBuffer:C.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,s=await r.requestReferenceSpace(a),dt.setContext(r),dt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function z(Z){for(let se=0;se<Z.removed.length;se++){let te=Z.removed[se],Be=b.indexOf(te);Be>=0&&(b[Be]=null,w[Be].disconnect(te))}for(let se=0;se<Z.added.length;se++){let te=Z.added[se],Be=b.indexOf(te);if(Be===-1){for(let Le=0;Le<w.length;Le++)if(Le>=b.length){b.push(te),Be=Le;break}else if(b[Le]===null){b[Le]=te,Be=Le;break}if(Be===-1)break}let je=w[Be];je&&je.connect(te)}}let K=new k,ee=new k;function pe(Z,se,te){K.setFromMatrixPosition(se.matrixWorld),ee.setFromMatrixPosition(te.matrixWorld);let Be=K.distanceTo(ee),je=se.projectionMatrix.elements,Le=te.projectionMatrix.elements,Bt=je[14]/(je[10]-1),Qe=je[14]/(je[10]+1),Mt=(je[9]+1)/je[5],ft=(je[9]-1)/je[5],st=(je[8]-1)/je[0],jt=(Le[8]+1)/Le[0],Kt=Bt*st,rn=Bt*jt,cn=Be/(-st+jt),Lt=cn*-st;if(se.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Lt),Z.translateZ(cn),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),je[10]===-1)Z.projectionMatrix.copy(se.projectionMatrix),Z.projectionMatrixInverse.copy(se.projectionMatrixInverse);else{let Wt=Bt+cn,R=Qe+cn,Nn=Kt-Lt,_t=rn+(Be-Lt),E=Mt*Qe/R*Wt,v=ft*Qe/R*Wt;Z.projectionMatrix.makePerspective(Nn,_t,E,v,Wt,R),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function ye(Z,se){se===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(se.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(r===null)return;let se=Z.near,te=Z.far;g.texture!==null&&(g.depthNear>0&&(se=g.depthNear),g.depthFar>0&&(te=g.depthFar)),O.near=P.near=M.near=se,O.far=P.far=M.far=te,($!==O.near||Y!==O.far)&&(r.updateRenderState({depthNear:O.near,depthFar:O.far}),$=O.near,Y=O.far),O.layers.mask=Z.layers.mask|6,M.layers.mask=O.layers.mask&-5,P.layers.mask=O.layers.mask&-3;let Be=Z.parent,je=O.cameras;ye(O,Be);for(let Le=0;Le<je.length;Le++)ye(je[Le],Be);je.length===2?pe(O,M,P):O.projectionMatrix.copy(M.projectionMatrix),Ee(Z,O,Be)};function Ee(Z,se,te){te===null?Z.matrix.copy(se.matrixWorld):(Z.matrix.copy(te.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(se.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(se.projectionMatrix),Z.projectionMatrixInverse.copy(se.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Tf*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(d===null&&h===null))return c},this.setFoveation=function(Z){c=Z,d!==null&&(d.fixedFoveation=Z),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=Z)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(O)},this.getCameraTexture=function(Z){return m[Z]};let ut=null;function Pt(Z,se){if(u=se.getViewerPose(l||s),p=se,u!==null){let te=u.views;h!==null&&(e.setRenderTargetFramebuffer(S,h.framebuffer),e.setRenderTarget(S));let Be=!1;te.length!==O.cameras.length&&(O.cameras.length=0,Be=!0);for(let Qe=0;Qe<te.length;Qe++){let Mt=te[Qe],ft=null;if(h!==null)ft=h.getViewport(Mt);else{let jt=f.getViewSubImage(d,Mt);ft=jt.viewport,Qe===0&&(e.setRenderTargetTextures(S,jt.colorTexture,jt.depthStencilTexture),e.setRenderTarget(S))}let st=I[Qe];st===void 0&&(st=new mn,st.layers.enable(Qe),st.viewport=new It,I[Qe]=st),st.matrix.fromArray(Mt.transform.matrix),st.matrix.decompose(st.position,st.quaternion,st.scale),st.projectionMatrix.fromArray(Mt.projectionMatrix),st.projectionMatrixInverse.copy(st.projectionMatrix).invert(),st.viewport.set(ft.x,ft.y,ft.width,ft.height),Qe===0&&(O.matrix.copy(st.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Be===!0&&O.cameras.push(st)}let je=r.enabledFeatures;if(je&&je.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&x){f=i.getBinding();let Qe=f.getDepthInformation(te[0]);Qe&&Qe.isValid&&Qe.texture&&g.init(Qe,r.renderState)}if(je&&je.includes("camera-access")&&x){e.state.unbindTexture(),f=i.getBinding();for(let Qe=0;Qe<te.length;Qe++){let Mt=te[Qe].camera;if(Mt){let ft=m[Mt];ft||(ft=new tl,m[Mt]=ft);let st=f.getCameraImage(Mt);ft.sourceTexture=st}}}}for(let te=0;te<w.length;te++){let Be=b[te],je=w[te];Be!==null&&je!==void 0&&je.update(Be,se,l||s)}ut&&ut(Z,se),se.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:se}),p=null}let dt=new LM;dt.setAnimationLoop(Pt),this.setAnimationLoop=function(Z){ut=Z},this.dispose=function(){}}},n2=new At,VM=new Ve;VM.set(-1,0,0,0,1,0,0,0,1);function i2(n,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function i(g,m){m.color.getRGB(g.fogColor.value,Sy(n)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function r(g,m,C,T,S){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?o(g,m):m.isMeshLambertMaterial?(o(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(o(g,m),f(g,m)):m.isMeshPhongMaterial?(o(g,m),u(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(o(g,m),d(g,m),m.isMeshPhysicalMaterial&&h(g,m,S)):m.isMeshMatcapMaterial?(o(g,m),p(g,m)):m.isMeshDepthMaterial?o(g,m):m.isMeshDistanceMaterial?(o(g,m),x(g,m)):m.isMeshNormalMaterial?o(g,m):m.isLineBasicMaterial?(s(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?c(g,m,C,T):m.isSpriteMaterial?l(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function o(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Rn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Rn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let C=e.get(m),T=C.envMap,S=C.envMapRotation;T&&(g.envMap.value=T,g.envMapRotation.value.setFromMatrix4(n2.makeRotationFromEuler(S)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(VM),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function s(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function c(g,m,C,T){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*C,g.scale.value=T*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function l(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function f(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function h(g,m,C){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Rn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=C.texture,g.transmissionSamplerSize.value.set(C.width,C.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function x(g,m){let C=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(C.matrixWorld),g.nearDistance.value=C.shadow.camera.near,g.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function r2(n,e,t,i){let r={},o={},s=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,w){let b=w.program;i.uniformBlockBinding(S,b)}function l(S,w){let b=r[S.id];b===void 0&&(g(S),b=u(S),r[S.id]=b,S.addEventListener("dispose",C));let D=w.program;i.updateUBOMapping(S,D);let y=e.render.frame;o[S.id]!==y&&(d(S),o[S.id]=y)}function u(S){let w=f();S.__bindingPointIndex=w;let b=n.createBuffer(),D=S.__size,y=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,D,y),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,w,b),b}function f(){for(let S=0;S<a;S++)if(s.indexOf(S)===-1)return s.push(S),S;return Ue("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){let w=r[S.id],b=S.uniforms,D=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let y=0,M=b.length;y<M;y++){let P=b[y];if(Array.isArray(P))for(let I=0,O=P.length;I<O;I++)h(P[I],y,I,D);else h(P,y,0,D)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(S,w,b,D){if(x(S,w,b,D)===!0){let y=S.__offset,M=S.value;if(Array.isArray(M)){let P=0;for(let I=0;I<M.length;I++){let O=M[I],$=m(O);p(O,S.__data,P),typeof O!="number"&&typeof O!="boolean"&&!O.isMatrix3&&!ArrayBuffer.isView(O)&&(P+=$.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(M,S.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,y,S.__data)}}function p(S,w,b){typeof S=="number"||typeof S=="boolean"?w[0]=S:S.isMatrix3?(w[0]=S.elements[0],w[1]=S.elements[1],w[2]=S.elements[2],w[3]=0,w[4]=S.elements[3],w[5]=S.elements[4],w[6]=S.elements[5],w[7]=0,w[8]=S.elements[6],w[9]=S.elements[7],w[10]=S.elements[8],w[11]=0):ArrayBuffer.isView(S)?w.set(new S.constructor(S.buffer,S.byteOffset,w.length)):S.toArray(w,b)}function x(S,w,b,D){let y=S.value,M=w+"_"+b;if(D[M]===void 0)return typeof y=="number"||typeof y=="boolean"?D[M]=y:ArrayBuffer.isView(y)?D[M]=y.slice():D[M]=y.clone(),!0;{let P=D[M];if(typeof y=="number"||typeof y=="boolean"){if(P!==y)return D[M]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(P.equals(y)===!1)return P.copy(y),!0}}return!1}function g(S){let w=S.uniforms,b=0,D=16;for(let M=0,P=w.length;M<P;M++){let I=Array.isArray(w[M])?w[M]:[w[M]];for(let O=0,$=I.length;O<$;O++){let Y=I[O],B=Array.isArray(Y.value)?Y.value:[Y.value];for(let W=0,z=B.length;W<z;W++){let K=B[W],ee=m(K),pe=b%D,ye=pe%ee.boundary,Ee=pe+ye;b+=ye,Ee!==0&&D-Ee<ee.storage&&(b+=D-Ee),Y.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=b,b+=ee.storage}}}let y=b%D;return y>0&&(b+=D-y),S.__size=b,S.__cache={},this}function m(S){let w={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(w.boundary=4,w.storage=4):S.isVector2?(w.boundary=8,w.storage=8):S.isVector3||S.isColor?(w.boundary=16,w.storage=12):S.isVector4?(w.boundary=16,w.storage=16):S.isMatrix3?(w.boundary=48,w.storage=48):S.isMatrix4?(w.boundary=64,w.storage=64):S.isTexture?ke("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(w.boundary=16,w.storage=S.byteLength):ke("WebGLRenderer: Unsupported uniform value type.",S),w}function C(S){let w=S.target;w.removeEventListener("dispose",C);let b=s.indexOf(w.__bindingPointIndex);s.splice(b,1),n.deleteBuffer(r[w.id]),delete r[w.id],delete o[w.id]}function T(){for(let S in r)n.deleteBuffer(r[S]);s=[],r={},o={}}return{bind:c,update:l,dispose:T}}var o2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ar=null;function s2(){return ar===null&&(ar=new Rf(o2,16,16,uo,or),ar.name="DFG_LUT",ar.minFilter=gn,ar.magFilter=gn,ar.wrapS=Qi,ar.wrapT=Qi,ar.generateMipmaps=!1,ar.needsUpdate=!0),ar}var Uh=class{constructor(e={}){let{canvas:t=sM(),context:i=null,depth:r=!0,stencil:o=!1,alpha:s=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:h=Un}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=s;let x=h,g=new Set([th,eh,Qf]),m=new Set([Un,Li,_a,xa,Kf,Jf]),C=new Uint32Array(4),T=new Int32Array(4),S=new k,w=null,b=null,D=[],y=[],M=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Pi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,I=!1,O=null,$=null,Y=null,B=null;this._outputColorSpace=Qn;let W=0,z=0,K=null,ee=-1,pe=null,ye=new It,Ee=new It,ut=null,Pt=new qe(0),dt=0,Z=t.width,se=t.height,te=1,Be=null,je=null,Le=new It(0,0,Z,se),Bt=new It(0,0,Z,se),Qe=!1,Mt=new pa,ft=!1,st=!1,jt=new At,Kt=new k,rn=new It,cn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Lt=!1;function Wt(){return K===null?te:1}let R=i;function Nn(_,N){return t.getContext(_,N)}try{let _={alpha:!0,depth:r,stencil:o,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"185"}`),t.addEventListener("webglcontextlost",Ot,!1),t.addEventListener("webglcontextrestored",Tt,!1),t.addEventListener("webglcontextcreationerror",Fi,!1),R===null){let N="webgl2";if(R=Nn(N,_),R===null)throw Nn(N)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(_){throw Ue("WebGLRenderer: "+_.message),_}let _t,E,v,L,V,G,ie,ae,j,X,le,Ce,fe,ue,Ie,Oe,We,A,oe,q,de,ve,J;function we(){_t=new hO(R),_t.init(),de=new QF(R,_t),E=new oO(R,_t,e,de),v=new KF(R,_t),E.reversedDepthBuffer&&d&&v.buffers.depth.setReversed(!0),$=R.createFramebuffer(),Y=R.createFramebuffer(),B=R.createFramebuffer(),L=new gO(R),V=new kF,G=new JF(R,_t,v,V,E,de,L),ie=new fO(P),ae=new xN(R),ve=new iO(R,ae),j=new pO(R,ae,L,ve),X=new yO(R,j,ae,ve,L),A=new vO(R,E,G),Ie=new sO(V),le=new FF(P,ie,_t,E,ve,Ie),Ce=new i2(P,V),fe=new BF,ue=new WF(_t),We=new nO(P,ie,v,X,p,c),Oe=new ZF(P,X,E),J=new r2(R,L,E,v),oe=new rO(R,_t,L),q=new mO(R,_t,L),L.programs=le.programs,P.capabilities=E,P.extensions=_t,P.properties=V,P.renderLists=fe,P.shadowMap=Oe,P.state=v,P.info=L}we(),x!==Un&&(M=new xO(x,t.width,t.height,a,r,o));let be=new By(P,R);this.xr=be,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){let _=_t.get("WEBGL_lose_context");_&&_.loseContext()},this.forceContextRestore=function(){let _=_t.get("WEBGL_lose_context");_&&_.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(_){_!==void 0&&(te=_,this.setSize(Z,se,!1))},this.getSize=function(_){return _.set(Z,se)},this.setSize=function(_,N,H=!0){if(be.isPresenting){ke("WebGLRenderer: Can't change size while VR device is presenting.");return}Z=_,se=N,t.width=Math.floor(_*te),t.height=Math.floor(N*te),H===!0&&(t.style.width=_+"px",t.style.height=N+"px"),M!==null&&M.setSize(t.width,t.height),this.setViewport(0,0,_,N)},this.getDrawingBufferSize=function(_){return _.set(Z*te,se*te).floor()},this.setDrawingBufferSize=function(_,N,H){Z=_,se=N,te=H,t.width=Math.floor(_*H),t.height=Math.floor(N*H),this.setViewport(0,0,_,N)},this.setEffects=function(_){if(x===Un){Ue("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(_){for(let N=0;N<_.length;N++)if(_[N].isOutputPass===!0){ke("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}M.setEffects(_||[])},this.getCurrentViewport=function(_){return _.copy(ye)},this.getViewport=function(_){return _.copy(Le)},this.setViewport=function(_,N,H,F){_.isVector4?Le.set(_.x,_.y,_.z,_.w):Le.set(_,N,H,F),v.viewport(ye.copy(Le).multiplyScalar(te).round())},this.getScissor=function(_){return _.copy(Bt)},this.setScissor=function(_,N,H,F){_.isVector4?Bt.set(_.x,_.y,_.z,_.w):Bt.set(_,N,H,F),v.scissor(Ee.copy(Bt).multiplyScalar(te).round())},this.getScissorTest=function(){return Qe},this.setScissorTest=function(_){v.setScissorTest(Qe=_)},this.setOpaqueSort=function(_){Be=_},this.setTransparentSort=function(_){je=_},this.getClearColor=function(_){return _.copy(We.getClearColor())},this.setClearColor=function(){We.setClearColor(...arguments)},this.getClearAlpha=function(){return We.getClearAlpha()},this.setClearAlpha=function(){We.setClearAlpha(...arguments)},this.clear=function(_=!0,N=!0,H=!0){let F=0;if(_){let U=!1;if(K!==null){let ge=K.texture.format;U=g.has(ge)}if(U){let ge=K.texture.type,Se=m.has(ge),me=We.getClearColor(),Me=We.getClearAlpha(),Te=me.r,$e=me.g,Ze=me.b;Se?(C[0]=Te,C[1]=$e,C[2]=Ze,C[3]=Me,R.clearBufferuiv(R.COLOR,0,C)):(T[0]=Te,T[1]=$e,T[2]=Ze,T[3]=Me,R.clearBufferiv(R.COLOR,0,T))}else F|=R.COLOR_BUFFER_BIT}N&&(F|=R.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),H&&(F|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F!==0&&R.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(_){_.setRenderer(this),O=_},this.dispose=function(){t.removeEventListener("webglcontextlost",Ot,!1),t.removeEventListener("webglcontextrestored",Tt,!1),t.removeEventListener("webglcontextcreationerror",Fi,!1),We.dispose(),fe.dispose(),ue.dispose(),V.dispose(),ie.dispose(),X.dispose(),ve.dispose(),J.dispose(),le.dispose(),be.dispose(),be.removeEventListener("sessionstart",Hy),be.removeEventListener("sessionend",zy),ho.stop()};function Ot(_){_.preventDefault(),xy("WebGLRenderer: Context Lost."),I=!0}function Tt(){xy("WebGLRenderer: Context Restored."),I=!1;let _=L.autoReset,N=Oe.enabled,H=Oe.autoUpdate,F=Oe.needsUpdate,U=Oe.type;we(),L.autoReset=_,Oe.enabled=N,Oe.autoUpdate=H,Oe.needsUpdate=F,Oe.type=U}function Fi(_){Ue("WebGLRenderer: A WebGL context could not be created. Reason: ",_.statusMessage)}function ki(_){let N=_.target;N.removeEventListener("dispose",ki),zM(N)}function zM(_){GM(_),V.remove(_)}function GM(_){let N=V.get(_).programs;N!==void 0&&(N.forEach(function(H){le.releaseProgram(H)}),_.isShaderMaterial&&le.releaseShaderCache(_))}this.renderBufferDirect=function(_,N,H,F,U,ge){N===null&&(N=cn);let Se=U.isMesh&&U.matrixWorld.determinantAffine()<0,me=$M(_,N,H,F,U);v.setMaterial(F,Se);let Me=H.index,Te=1;if(F.wireframe===!0){if(Me=j.getWireframeAttribute(H),Me===void 0)return;Te=2}let $e=H.drawRange,Ze=H.attributes.position,Ae=$e.start*Te,St=($e.start+$e.count)*Te;ge!==null&&(Ae=Math.max(Ae,ge.start*Te),St=Math.min(St,(ge.start+ge.count)*Te)),Me!==null?(Ae=Math.max(Ae,0),St=Math.min(St,Me.count)):Ze!=null&&(Ae=Math.max(Ae,0),St=Math.min(St,Ze.count));let Vt=St-Ae;if(Vt<0||Vt===1/0)return;ve.setup(U,F,me,H,Me);let Ft,wt=oe;if(Me!==null&&(Ft=ae.get(Me),wt=q,wt.setIndex(Ft)),U.isMesh)F.wireframe===!0?(v.setLineWidth(F.wireframeLinewidth*Wt()),wt.setMode(R.LINES)):wt.setMode(R.TRIANGLES);else if(U.isLine){let vn=F.linewidth;vn===void 0&&(vn=1),v.setLineWidth(vn*Wt()),U.isLineSegments?wt.setMode(R.LINES):U.isLineLoop?wt.setMode(R.LINE_LOOP):wt.setMode(R.LINE_STRIP)}else U.isPoints?wt.setMode(R.POINTS):U.isSprite&&wt.setMode(R.TRIANGLES);if(U.isBatchedMesh)if(_t.get("WEBGL_multi_draw"))wt.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{let vn=U._multiDrawStarts,xe=U._multiDrawCounts,Bn=U._multiDrawCount,at=Me?ae.get(Me).bytesPerElement:1,ri=V.get(F).currentProgram.getUniforms();for(let Ui=0;Ui<Bn;Ui++)ri.setValue(R,"_gl_DrawID",Ui),wt.render(vn[Ui]/at,xe[Ui])}else if(U.isInstancedMesh)wt.renderInstances(Ae,Vt,U.count);else if(H.isInstancedBufferGeometry){let vn=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,xe=Math.min(H.instanceCount,vn);wt.renderInstances(Ae,Vt,xe)}else wt.render(Ae,Vt)};function Vy(_,N,H){_.transparent===!0&&_.side===ir&&_.forceSinglePass===!1?(_.side=Rn,_.needsUpdate=!0,Sl(_,N,H),_.side=Cr,_.needsUpdate=!0,Sl(_,N,H),_.side=ir):Sl(_,N,H)}this.compile=function(_,N,H=null){H===null&&(H=_),b=ue.get(H),b.init(N),y.push(b),H.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(b.pushLight(U),U.castShadow&&b.pushShadow(U))}),_!==H&&_.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(b.pushLight(U),U.castShadow&&b.pushShadow(U))}),b.setupLights();let F=new Set;return _.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;let ge=U.material;if(ge)if(Array.isArray(ge))for(let Se=0;Se<ge.length;Se++){let me=ge[Se];Vy(me,H,U),F.add(me)}else Vy(ge,H,U),F.add(ge)}),b=y.pop(),F},this.compileAsync=function(_,N,H=null){let F=this.compile(_,N,H);return new Promise(U=>{function ge(){if(F.forEach(function(Se){V.get(Se).currentProgram.isReady()&&F.delete(Se)}),F.size===0){U(_);return}setTimeout(ge,10)}_t.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let Gh=null;function jM(_){Gh&&Gh(_)}function Hy(){ho.stop()}function zy(){ho.start()}let ho=new LM;ho.setAnimationLoop(jM),typeof self<"u"&&ho.setContext(self),this.setAnimationLoop=function(_){Gh=_,be.setAnimationLoop(_),_===null?ho.stop():ho.start()},be.addEventListener("sessionstart",Hy),be.addEventListener("sessionend",zy),this.render=function(_,N){if(N!==void 0&&N.isCamera!==!0){Ue("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;O!==null&&O.renderStart(_,N);let H=be.enabled===!0&&be.isPresenting===!0,F=M!==null&&(K===null||H)&&M.begin(P,K);if(_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),be.enabled===!0&&be.isPresenting===!0&&(M===null||M.isCompositing()===!1)&&(be.cameraAutoUpdate===!0&&be.updateCamera(N),N=be.getCamera()),_.isScene===!0&&_.onBeforeRender(P,_,N,K),b=ue.get(_,y.length),b.init(N),b.state.textureUnits=G.getTextureUnits(),y.push(b),jt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Mt.setFromProjectionMatrix(jt,Ni,N.reversedDepth),st=this.localClippingEnabled,ft=Ie.init(this.clippingPlanes,st),w=fe.get(_,D.length),w.init(),D.push(w),be.enabled===!0&&be.isPresenting===!0){let Se=P.xr.getDepthSensingMesh();Se!==null&&jh(Se,N,-1/0,P.sortObjects)}jh(_,N,0,P.sortObjects),w.finish(),P.sortObjects===!0&&w.sort(Be,je,N.reversedDepth),Lt=be.enabled===!1||be.isPresenting===!1||be.hasDepthSensing()===!1,Lt&&We.addToRenderList(w,_),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ft===!0&&Ie.beginShadows();let U=b.state.shadowsArray;if(Oe.render(U,_,N),ft===!0&&Ie.endShadows(),(F&&M.hasRenderPass())===!1){let Se=w.opaque,me=w.transmissive;if(b.setupLights(),N.isArrayCamera){let Me=N.cameras;if(me.length>0)for(let Te=0,$e=Me.length;Te<$e;Te++){let Ze=Me[Te];jy(Se,me,_,Ze)}Lt&&We.render(_);for(let Te=0,$e=Me.length;Te<$e;Te++){let Ze=Me[Te];Gy(w,_,Ze,Ze.viewport)}}else me.length>0&&jy(Se,me,_,N),Lt&&We.render(_),Gy(w,_,N)}K!==null&&z===0&&(G.updateMultisampleRenderTarget(K),G.updateRenderTargetMipmap(K)),F&&M.end(P),_.isScene===!0&&_.onAfterRender(P,_,N),ve.resetDefaultState(),ee=-1,pe=null,y.pop(),y.length>0?(b=y[y.length-1],G.setTextureUnits(b.state.textureUnits),ft===!0&&Ie.setGlobalState(P.clippingPlanes,b.state.camera)):b=null,D.pop(),D.length>0?w=D[D.length-1]:w=null,O!==null&&O.renderEnd()};function jh(_,N,H,F){if(_.visible===!1)return;if(_.layers.test(N.layers)){if(_.isGroup)H=_.renderOrder;else if(_.isLOD)_.autoUpdate===!0&&_.update(N);else if(_.isLightProbeGrid)b.pushLightProbeGrid(_);else if(_.isLight)b.pushLight(_),_.castShadow&&b.pushShadow(_);else if(_.isSprite){if(!_.frustumCulled||Mt.intersectsSprite(_)){F&&rn.setFromMatrixPosition(_.matrixWorld).applyMatrix4(jt);let Se=X.update(_),me=_.material;me.visible&&w.push(_,Se,me,H,rn.z,null)}}else if((_.isMesh||_.isLine||_.isPoints)&&(!_.frustumCulled||Mt.intersectsObject(_))){let Se=X.update(_),me=_.material;if(F&&(_.boundingSphere!==void 0?(_.boundingSphere===null&&_.computeBoundingSphere(),rn.copy(_.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),rn.copy(Se.boundingSphere.center)),rn.applyMatrix4(_.matrixWorld).applyMatrix4(jt)),Array.isArray(me)){let Me=Se.groups;for(let Te=0,$e=Me.length;Te<$e;Te++){let Ze=Me[Te],Ae=me[Ze.materialIndex];Ae&&Ae.visible&&w.push(_,Se,Ae,H,rn.z,Ze)}}else me.visible&&w.push(_,Se,me,H,rn.z,null)}}let ge=_.children;for(let Se=0,me=ge.length;Se<me;Se++)jh(ge[Se],N,H,F)}function Gy(_,N,H,F){let{opaque:U,transmissive:ge,transparent:Se}=_;b.setupLightsView(H),ft===!0&&Ie.setGlobalState(P.clippingPlanes,H),F&&v.viewport(ye.copy(F)),U.length>0&&xl(U,N,H),ge.length>0&&xl(ge,N,H),Se.length>0&&xl(Se,N,H),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function jy(_,N,H,F){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[F.id]===void 0){let Ae=_t.has("EXT_color_buffer_half_float")||_t.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[F.id]=new ei(1,1,{generateMipmaps:!0,type:Ae?or:Un,minFilter:co,samples:Math.max(4,E.samples),stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:tt.workingColorSpace})}let ge=b.state.transmissionRenderTarget[F.id],Se=F.viewport||ye;ge.setSize(Se.z*P.transmissionResolutionScale,Se.w*P.transmissionResolutionScale);let me=P.getRenderTarget(),Me=P.getActiveCubeFace(),Te=P.getActiveMipmapLevel();P.setRenderTarget(ge),P.getClearColor(Pt),dt=P.getClearAlpha(),dt<1&&P.setClearColor(16777215,.5),P.clear(),Lt&&We.render(H);let $e=P.toneMapping;P.toneMapping=Pi;let Ze=F.viewport;if(F.viewport!==void 0&&(F.viewport=void 0),b.setupLightsView(F),ft===!0&&Ie.setGlobalState(P.clippingPlanes,F),xl(_,H,F),G.updateMultisampleRenderTarget(ge),G.updateRenderTargetMipmap(ge),_t.has("WEBGL_multisampled_render_to_texture")===!1){let Ae=!1;for(let St=0,Vt=N.length;St<Vt;St++){let Ft=N[St],{object:wt,geometry:vn,material:xe,group:Bn}=Ft;if(xe.side===ir&&wt.layers.test(F.layers)){let at=xe.side;xe.side=Rn,xe.needsUpdate=!0,Wy(wt,H,F,vn,xe,Bn),xe.side=at,xe.needsUpdate=!0,Ae=!0}}Ae===!0&&(G.updateMultisampleRenderTarget(ge),G.updateRenderTargetMipmap(ge))}P.setRenderTarget(me,Me,Te),P.setClearColor(Pt,dt),Ze!==void 0&&(F.viewport=Ze),P.toneMapping=$e}function xl(_,N,H){let F=N.isScene===!0?N.overrideMaterial:null;for(let U=0,ge=_.length;U<ge;U++){let Se=_[U],{object:me,geometry:Me,group:Te}=Se,$e=Se.material;$e.allowOverride===!0&&F!==null&&($e=F),me.layers.test(H.layers)&&Wy(me,N,H,Me,$e,Te)}}function Wy(_,N,H,F,U,ge){_.onBeforeRender(P,N,H,F,U,ge),_.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,_.matrixWorld),_.normalMatrix.getNormalMatrix(_.modelViewMatrix),U.onBeforeRender(P,N,H,F,_,ge),U.transparent===!0&&U.side===ir&&U.forceSinglePass===!1?(U.side=Rn,U.needsUpdate=!0,P.renderBufferDirect(H,N,F,U,_,ge),U.side=Cr,U.needsUpdate=!0,P.renderBufferDirect(H,N,F,U,_,ge),U.side=ir):P.renderBufferDirect(H,N,F,U,_,ge),_.onAfterRender(P,N,H,F,U,ge)}function Sl(_,N,H){N.isScene!==!0&&(N=cn);let F=V.get(_),U=b.state.lights,ge=b.state.shadowsArray,Se=U.state.version,me=le.getParameters(_,U.state,ge,N,H,b.state.lightProbeGridArray),Me=le.getProgramCacheKey(me),Te=F.programs;F.environment=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?N.environment:null,F.fog=N.fog;let $e=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap;F.envMap=ie.get(_.envMap||F.environment,$e),F.envMapRotation=F.environment!==null&&_.envMap===null?N.environmentRotation:_.envMapRotation,Te===void 0&&(_.addEventListener("dispose",ki),Te=new Map,F.programs=Te);let Ze=Te.get(Me);if(Ze!==void 0){if(F.currentProgram===Ze&&F.lightsStateVersion===Se)return qy(_,me),Ze}else me.uniforms=le.getUniforms(_),O!==null&&_.isNodeMaterial&&O.build(_,H,me),_.onBeforeCompile(me,P),Ze=le.acquireProgram(me,Me),Te.set(Me,Ze),F.uniforms=me.uniforms;let Ae=F.uniforms;return(!_.isShaderMaterial&&!_.isRawShaderMaterial||_.clipping===!0)&&(Ae.clippingPlanes=Ie.uniform),qy(_,me),F.needsLights=XM(_),F.lightsStateVersion=Se,F.needsLights&&(Ae.ambientLightColor.value=U.state.ambient,Ae.lightProbe.value=U.state.probe,Ae.directionalLights.value=U.state.directional,Ae.directionalLightShadows.value=U.state.directionalShadow,Ae.spotLights.value=U.state.spot,Ae.spotLightShadows.value=U.state.spotShadow,Ae.rectAreaLights.value=U.state.rectArea,Ae.ltc_1.value=U.state.rectAreaLTC1,Ae.ltc_2.value=U.state.rectAreaLTC2,Ae.pointLights.value=U.state.point,Ae.pointLightShadows.value=U.state.pointShadow,Ae.hemisphereLights.value=U.state.hemi,Ae.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Ae.spotLightMatrix.value=U.state.spotLightMatrix,Ae.spotLightMap.value=U.state.spotLightMap,Ae.pointShadowMatrix.value=U.state.pointShadowMatrix),F.lightProbeGrid=b.state.lightProbeGridArray.length>0,F.currentProgram=Ze,F.uniformsList=null,Ze}function $y(_){if(_.uniformsList===null){let N=_.currentProgram.getUniforms();_.uniformsList=Ea.seqWithValue(N.seq,_.uniforms)}return _.uniformsList}function qy(_,N){let H=V.get(_);H.outputColorSpace=N.outputColorSpace,H.batching=N.batching,H.batchingColor=N.batchingColor,H.instancing=N.instancing,H.instancingColor=N.instancingColor,H.instancingMorph=N.instancingMorph,H.skinning=N.skinning,H.morphTargets=N.morphTargets,H.morphNormals=N.morphNormals,H.morphColors=N.morphColors,H.morphTargetsCount=N.morphTargetsCount,H.numClippingPlanes=N.numClippingPlanes,H.numIntersection=N.numClipIntersection,H.vertexAlphas=N.vertexAlphas,H.vertexTangents=N.vertexTangents,H.toneMapping=N.toneMapping}function WM(_,N){if(_.length===0)return null;if(_.length===1)return _[0].texture!==null?_[0]:null;S.setFromMatrixPosition(N.matrixWorld);for(let H=0,F=_.length;H<F;H++){let U=_[H];if(U.texture!==null&&U.boundingBox.containsPoint(S))return U}return null}function $M(_,N,H,F,U){N.isScene!==!0&&(N=cn),G.resetTextureUnits();let ge=N.fog,Se=F.isMeshStandardMaterial||F.isMeshLambertMaterial||F.isMeshPhongMaterial?N.environment:null,me=K===null?P.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:tt.workingColorSpace,Me=F.isMeshStandardMaterial||F.isMeshLambertMaterial&&!F.envMap||F.isMeshPhongMaterial&&!F.envMap,Te=ie.get(F.envMap||Se,Me),$e=F.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Ze=!!H.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),Ae=!!H.morphAttributes.position,St=!!H.morphAttributes.normal,Vt=!!H.morphAttributes.color,Ft=Pi;F.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Ft=P.toneMapping);let wt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,vn=wt!==void 0?wt.length:0,xe=V.get(F),Bn=b.state.lights;if(ft===!0&&(st===!0||_!==pe)){let Dt=_===pe&&F.id===ee;Ie.setState(F,_,Dt)}let at=!1;F.version===xe.__version?(xe.needsLights&&xe.lightsStateVersion!==Bn.state.version||xe.outputColorSpace!==me||U.isBatchedMesh&&xe.batching===!1||!U.isBatchedMesh&&xe.batching===!0||U.isBatchedMesh&&xe.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&xe.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&xe.instancing===!1||!U.isInstancedMesh&&xe.instancing===!0||U.isSkinnedMesh&&xe.skinning===!1||!U.isSkinnedMesh&&xe.skinning===!0||U.isInstancedMesh&&xe.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&xe.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&xe.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&xe.instancingMorph===!1&&U.morphTexture!==null||xe.envMap!==Te||F.fog===!0&&xe.fog!==ge||xe.numClippingPlanes!==void 0&&(xe.numClippingPlanes!==Ie.numPlanes||xe.numIntersection!==Ie.numIntersection)||xe.vertexAlphas!==$e||xe.vertexTangents!==Ze||xe.morphTargets!==Ae||xe.morphNormals!==St||xe.morphColors!==Vt||xe.toneMapping!==Ft||xe.morphTargetsCount!==vn||!!xe.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(at=!0):(at=!0,xe.__version=F.version);let ri=xe.currentProgram;at===!0&&(ri=Sl(F,N,U),O&&F.isNodeMaterial&&O.onUpdateProgram(F,ri,xe));let Ui=!1,Ir=!1,ns=!1,Ct=ri.getUniforms(),Ht=xe.uniforms;if(v.useProgram(ri.program)&&(Ui=!0,Ir=!0,ns=!0),F.id!==ee&&(ee=F.id,Ir=!0),xe.needsLights){let Dt=WM(b.state.lightProbeGridArray,U);xe.lightProbeGrid!==Dt&&(xe.lightProbeGrid=Dt,Ir=!0)}if(Ui||pe!==_){v.buffers.depth.getReversed()&&_.reversedDepth!==!0&&(_._reversedDepth=!0,_.updateProjectionMatrix()),Ct.setValue(R,"projectionMatrix",_.projectionMatrix),Ct.setValue(R,"viewMatrix",_.matrixWorldInverse);let Nr=Ct.map.cameraPosition;Nr!==void 0&&Nr.setValue(R,Kt.setFromMatrixPosition(_.matrixWorld)),E.logarithmicDepthBuffer&&Ct.setValue(R,"logDepthBufFC",2/(Math.log(_.far+1)/Math.LN2)),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&Ct.setValue(R,"isOrthographic",_.isOrthographicCamera===!0),pe!==_&&(pe=_,Ir=!0,ns=!0)}if(xe.needsLights&&(Bn.state.directionalShadowMap.length>0&&Ct.setValue(R,"directionalShadowMap",Bn.state.directionalShadowMap,G),Bn.state.spotShadowMap.length>0&&Ct.setValue(R,"spotShadowMap",Bn.state.spotShadowMap,G),Bn.state.pointShadowMap.length>0&&Ct.setValue(R,"pointShadowMap",Bn.state.pointShadowMap,G)),U.isSkinnedMesh){Ct.setOptional(R,U,"bindMatrix"),Ct.setOptional(R,U,"bindMatrixInverse");let Dt=U.skeleton;Dt&&(Dt.boneTexture===null&&Dt.computeBoneTexture(),Ct.setValue(R,"boneTexture",Dt.boneTexture,G))}U.isBatchedMesh&&(Ct.setOptional(R,U,"batchingTexture"),Ct.setValue(R,"batchingTexture",U._matricesTexture,G),Ct.setOptional(R,U,"batchingIdTexture"),Ct.setValue(R,"batchingIdTexture",U._indirectTexture,G),Ct.setOptional(R,U,"batchingColorTexture"),U._colorsTexture!==null&&Ct.setValue(R,"batchingColorTexture",U._colorsTexture,G));let Rr=H.morphAttributes;if((Rr.position!==void 0||Rr.normal!==void 0||Rr.color!==void 0)&&A.update(U,H,ri),(Ir||xe.receiveShadow!==U.receiveShadow)&&(xe.receiveShadow=U.receiveShadow,Ct.setValue(R,"receiveShadow",U.receiveShadow)),(F.isMeshStandardMaterial||F.isMeshLambertMaterial||F.isMeshPhongMaterial)&&F.envMap===null&&N.environment!==null&&(Ht.envMapIntensity.value=N.environmentIntensity),Ht.dfgLUT!==void 0&&(Ht.dfgLUT.value=s2()),Ir){if(Ct.setValue(R,"toneMappingExposure",P.toneMappingExposure),xe.needsLights&&qM(Ht,ns),ge&&F.fog===!0&&Ce.refreshFogUniforms(Ht,ge),Ce.refreshMaterialUniforms(Ht,F,te,se,b.state.transmissionRenderTarget[_.id]),xe.needsLights&&xe.lightProbeGrid){let Dt=xe.lightProbeGrid;Ht.probesSH.value=Dt.texture,Ht.probesMin.value.copy(Dt.boundingBox.min),Ht.probesMax.value.copy(Dt.boundingBox.max),Ht.probesResolution.value.copy(Dt.resolution)}Ea.upload(R,$y(xe),Ht,G)}if(F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(Ea.upload(R,$y(xe),Ht,G),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&Ct.setValue(R,"center",U.center),Ct.setValue(R,"modelViewMatrix",U.modelViewMatrix),Ct.setValue(R,"normalMatrix",U.normalMatrix),Ct.setValue(R,"modelMatrix",U.matrixWorld),F.uniformsGroups!==void 0){let Dt=F.uniformsGroups;for(let Nr=0,is=Dt.length;Nr<is;Nr++){let Xy=Dt[Nr];J.update(Xy,ri),J.bind(Xy,ri)}}return ri}function qM(_,N){_.ambientLightColor.needsUpdate=N,_.lightProbe.needsUpdate=N,_.directionalLights.needsUpdate=N,_.directionalLightShadows.needsUpdate=N,_.pointLights.needsUpdate=N,_.pointLightShadows.needsUpdate=N,_.spotLights.needsUpdate=N,_.spotLightShadows.needsUpdate=N,_.rectAreaLights.needsUpdate=N,_.hemisphereLights.needsUpdate=N}function XM(_){return _.isMeshLambertMaterial||_.isMeshToonMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isShadowMaterial||_.isShaderMaterial&&_.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(_,N,H){let F=V.get(_);F.__autoAllocateDepthBuffer=_.resolveDepthBuffer===!1,F.__autoAllocateDepthBuffer===!1&&(F.__useRenderToTexture=!1),V.get(_.texture).__webglTexture=N,V.get(_.depthTexture).__webglTexture=F.__autoAllocateDepthBuffer?void 0:H,F.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(_,N){let H=V.get(_);H.__webglFramebuffer=N,H.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(_,N=0,H=0){K=_,W=N,z=H;let F=null,U=!1,ge=!1;if(_){let me=V.get(_);if(me.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(R.FRAMEBUFFER,me.__webglFramebuffer),ye.copy(_.viewport),Ee.copy(_.scissor),ut=_.scissorTest,v.viewport(ye),v.scissor(Ee),v.setScissorTest(ut),ee=-1;return}else if(me.__webglFramebuffer===void 0)G.setupRenderTarget(_);else if(me.__hasExternalTextures)G.rebindTextures(_,V.get(_.texture).__webglTexture,V.get(_.depthTexture).__webglTexture);else if(_.depthBuffer){let $e=_.depthTexture;if(me.__boundDepthTexture!==$e){if($e!==null&&V.has($e)&&(_.width!==$e.image.width||_.height!==$e.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");G.setupDepthRenderbuffer(_)}}let Me=_.texture;(Me.isData3DTexture||Me.isDataArrayTexture||Me.isCompressedArrayTexture)&&(ge=!0);let Te=V.get(_).__webglFramebuffer;_.isWebGLCubeRenderTarget?(Array.isArray(Te[N])?F=Te[N][H]:F=Te[N],U=!0):_.samples>0&&G.useMultisampledRTT(_)===!1?F=V.get(_).__webglMultisampledFramebuffer:Array.isArray(Te)?F=Te[H]:F=Te,ye.copy(_.viewport),Ee.copy(_.scissor),ut=_.scissorTest}else ye.copy(Le).multiplyScalar(te).floor(),Ee.copy(Bt).multiplyScalar(te).floor(),ut=Qe;if(H!==0&&(F=$),v.bindFramebuffer(R.FRAMEBUFFER,F)&&v.drawBuffers(_,F),v.viewport(ye),v.scissor(Ee),v.setScissorTest(ut),U){let me=V.get(_.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+N,me.__webglTexture,H)}else if(ge){let me=N;for(let Me=0;Me<_.textures.length;Me++){let Te=V.get(_.textures[Me]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+Me,Te.__webglTexture,H,me)}}else if(_!==null&&H!==0){let me=V.get(_.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,me.__webglTexture,H)}ee=-1},this.readRenderTargetPixels=function(_,N,H,F,U,ge,Se,me=0){if(!(_&&_.isWebGLRenderTarget)){Ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=V.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&Se!==void 0&&(Me=Me[Se]),Me){v.bindFramebuffer(R.FRAMEBUFFER,Me);try{let Te=_.textures[me],$e=Te.format,Ze=Te.type;if(_.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+me),!E.textureFormatReadable($e)){Ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!E.textureTypeReadable(Ze)){Ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=_.width-F&&H>=0&&H<=_.height-U&&R.readPixels(N,H,F,U,de.convert($e),de.convert(Ze),ge)}finally{let Te=K!==null?V.get(K).__webglFramebuffer:null;v.bindFramebuffer(R.FRAMEBUFFER,Te)}}},this.readRenderTargetPixelsAsync=async function(_,N,H,F,U,ge,Se,me=0){if(!(_&&_.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=V.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&Se!==void 0&&(Me=Me[Se]),Me)if(N>=0&&N<=_.width-F&&H>=0&&H<=_.height-U){v.bindFramebuffer(R.FRAMEBUFFER,Me);let Te=_.textures[me],$e=Te.format,Ze=Te.type;if(_.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+me),!E.textureFormatReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!E.textureTypeReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ae=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,Ae),R.bufferData(R.PIXEL_PACK_BUFFER,ge.byteLength,R.STREAM_READ),R.readPixels(N,H,F,U,de.convert($e),de.convert(Ze),0);let St=K!==null?V.get(K).__webglFramebuffer:null;v.bindFramebuffer(R.FRAMEBUFFER,St);let Vt=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await cM(R,Vt,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,Ae),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,ge),R.deleteBuffer(Ae),R.deleteSync(Vt),ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(_,N=null,H=0){let F=Math.pow(2,-H),U=Math.floor(_.image.width*F),ge=Math.floor(_.image.height*F),Se=N!==null?N.x:0,me=N!==null?N.y:0;G.setTexture2D(_,0),R.copyTexSubImage2D(R.TEXTURE_2D,H,0,0,Se,me,U,ge),v.unbindTexture()},this.copyTextureToTexture=function(_,N,H=null,F=null,U=0,ge=0){let Se,me,Me,Te,$e,Ze,Ae,St,Vt,Ft=_.isCompressedTexture?_.mipmaps[ge]:_.image;if(H!==null)Se=H.max.x-H.min.x,me=H.max.y-H.min.y,Me=H.isBox3?H.max.z-H.min.z:1,Te=H.min.x,$e=H.min.y,Ze=H.isBox3?H.min.z:0;else{let Ht=Math.pow(2,-U);Se=Math.floor(Ft.width*Ht),me=Math.floor(Ft.height*Ht),_.isDataArrayTexture?Me=Ft.depth:_.isData3DTexture?Me=Math.floor(Ft.depth*Ht):Me=1,Te=0,$e=0,Ze=0}F!==null?(Ae=F.x,St=F.y,Vt=F.z):(Ae=0,St=0,Vt=0);let wt=de.convert(N.format),vn=de.convert(N.type),xe;N.isData3DTexture?(G.setTexture3D(N,0),xe=R.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(G.setTexture2DArray(N,0),xe=R.TEXTURE_2D_ARRAY):(G.setTexture2D(N,0),xe=R.TEXTURE_2D),v.activeTexture(R.TEXTURE0),v.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,N.flipY),v.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),v.pixelStorei(R.UNPACK_ALIGNMENT,N.unpackAlignment);let Bn=v.getParameter(R.UNPACK_ROW_LENGTH),at=v.getParameter(R.UNPACK_IMAGE_HEIGHT),ri=v.getParameter(R.UNPACK_SKIP_PIXELS),Ui=v.getParameter(R.UNPACK_SKIP_ROWS),Ir=v.getParameter(R.UNPACK_SKIP_IMAGES);v.pixelStorei(R.UNPACK_ROW_LENGTH,Ft.width),v.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Ft.height),v.pixelStorei(R.UNPACK_SKIP_PIXELS,Te),v.pixelStorei(R.UNPACK_SKIP_ROWS,$e),v.pixelStorei(R.UNPACK_SKIP_IMAGES,Ze);let ns=_.isDataArrayTexture||_.isData3DTexture,Ct=N.isDataArrayTexture||N.isData3DTexture;if(_.isDepthTexture){let Ht=V.get(_),Rr=V.get(N),Dt=V.get(Ht.__renderTarget),Nr=V.get(Rr.__renderTarget);v.bindFramebuffer(R.READ_FRAMEBUFFER,Dt.__webglFramebuffer),v.bindFramebuffer(R.DRAW_FRAMEBUFFER,Nr.__webglFramebuffer);for(let is=0;is<Me;is++)ns&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,V.get(_).__webglTexture,U,Ze+is),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,V.get(N).__webglTexture,ge,Vt+is)),R.blitFramebuffer(Te,$e,Se,me,Ae,St,Se,me,R.DEPTH_BUFFER_BIT,R.NEAREST);v.bindFramebuffer(R.READ_FRAMEBUFFER,null),v.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(U!==0||_.isRenderTargetTexture||V.has(_)){let Ht=V.get(_),Rr=V.get(N);v.bindFramebuffer(R.READ_FRAMEBUFFER,Y),v.bindFramebuffer(R.DRAW_FRAMEBUFFER,B);for(let Dt=0;Dt<Me;Dt++)ns?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Ht.__webglTexture,U,Ze+Dt):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Ht.__webglTexture,U),Ct?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Rr.__webglTexture,ge,Vt+Dt):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Rr.__webglTexture,ge),U!==0?R.blitFramebuffer(Te,$e,Se,me,Ae,St,Se,me,R.COLOR_BUFFER_BIT,R.NEAREST):Ct?R.copyTexSubImage3D(xe,ge,Ae,St,Vt+Dt,Te,$e,Se,me):R.copyTexSubImage2D(xe,ge,Ae,St,Te,$e,Se,me);v.bindFramebuffer(R.READ_FRAMEBUFFER,null),v.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else Ct?_.isDataTexture||_.isData3DTexture?R.texSubImage3D(xe,ge,Ae,St,Vt,Se,me,Me,wt,vn,Ft.data):N.isCompressedArrayTexture?R.compressedTexSubImage3D(xe,ge,Ae,St,Vt,Se,me,Me,wt,Ft.data):R.texSubImage3D(xe,ge,Ae,St,Vt,Se,me,Me,wt,vn,Ft):_.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,ge,Ae,St,Se,me,wt,vn,Ft.data):_.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,ge,Ae,St,Ft.width,Ft.height,wt,Ft.data):R.texSubImage2D(R.TEXTURE_2D,ge,Ae,St,Se,me,wt,vn,Ft);v.pixelStorei(R.UNPACK_ROW_LENGTH,Bn),v.pixelStorei(R.UNPACK_IMAGE_HEIGHT,at),v.pixelStorei(R.UNPACK_SKIP_PIXELS,ri),v.pixelStorei(R.UNPACK_SKIP_ROWS,Ui),v.pixelStorei(R.UNPACK_SKIP_IMAGES,Ir),ge===0&&N.generateMipmaps&&R.generateMipmap(xe),v.unbindTexture()},this.initRenderTarget=function(_){V.get(_).__webglFramebuffer===void 0&&G.setupRenderTarget(_)},this.initTexture=function(_){_.isCubeTexture?G.setTextureCube(_,0):_.isData3DTexture?G.setTexture3D(_,0):_.isDataArrayTexture||_.isCompressedArrayTexture?G.setTexture2DArray(_,0):G.setTexture2D(_,0),v.unbindTexture()},this.resetState=function(){W=0,z=0,K=null,v.reset(),ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=tt._getUnpackColorSpace()}};var c2={en:{nav:{overview:"Overview",projects:"Projects",skills:"Skills",experience:"Experience",contact:"Contact"},hero:{status:"SYS_STATUS: ONLINE // ACCEPTING FREELANCE PROJECTS",titleMain:"Full-Stack Software Consultant",titleHighlight:"Solving Complex Problems",titleSuffix:"Through Scalable Systems",subtitle:"I build high-performance, conversion-focused web applications and cloud architectures. Whether you need a highly scalable event-driven backend or an AI-integrated business tool, I deliver robust technical solutions that drive business results.",exploreBtn:"View Featured Work",contactBtn:"Let's Discuss Your Project"},projects:{screenTag:"// PORTFOLIO",title:"Selected Works & Systems",all:"All Systems",fullstack:"Full-Stack",aiCloud:"AI & Cloud",systems:"Low-Level & Rust",viewArch:"// View Architecture",liveDemo:"Live Demo",repo:"Repository"},skills:{screenTag:"// SERVICES & EXPERTISE",title:"Consulting Services"},experience:{screenTag:"// PROFESSIONAL EXPERIENCE",title:"Experience & Track Record",honorsTitle:"Industry Recognitions"},contact:{screenTag:"// CONSULTATION",title:"Have a complex project in mind?",desc:"Let's discuss how we can bring it to life on time and within budget. I'm currently accepting new freelance clients.",sendEmail:"Send Direct Email"},modal:{sysHighlights:"// SYSTEM HIGHLIGHTS:",techStack:"TECH STACK:",repo:"Source Code",liveDemo:"Visit Live Site",close:"Close Window"},projectsList:[{id:"kuantum-educa",title:"Kuantum Educa Platform",category:"fullstack",featured:!0,badge:"Flagship Full-Stack System",icon:"fa-graduation-cap",liveUrl:"https://kuantumeduca.com",shortDesc:"Architected a highly scalable educational platform processing thousands of simultaneous exams with zero downtime, integrating AI for automated career matching.",fullDesc:"Delivered an end-to-end cloud solution for a major educational initiative. Built an event-driven backend (Firebase/PubSub) that processes massive exam analytics asynchronously, ensuring zero UI latency for end-users. Additionally, integrated a RAG-based AI service (FastAPI/pgvector) to provide automated, highly personalized career guidance.",techStack:["Angular","Firebase Cloud Functions","Pub/Sub","FastAPI","PostgreSQL (pgvector)","Gemini AI","PrimeNG","TailwindCSS"],metrics:["Asynchronous event processing for 1000s of exam results","200+ academic program RAG embeddings","5-8s AI latency handled via slick Async UI"]},{id:"sysmon-3ds",title:"SysMon - 3DS PC Monitor & Macro Pad",category:"systems",featured:!0,badge:"Rust & C Homebrew",icon:"fa-gamepad",repoUrl:"https://github.com/Just-a-Spider/SysMon",shortDesc:"Turns a Nintendo 3DS into a wireless live PC telemetry display, Pomodoro tracker, and tap-to-execute Linux macro controller.",fullDesc:"Built the host telemetry server in Rust (packaged natively as Linux RPM via cargo-generate-rpm) and the handheld client in C using devkitARM and libctru for Nintendo 3DS homebrew. Features real-time WebSockets telemetry streams, process manager (tap to kill), volume/media controls, and custom macro injection.",techStack:["Rust","C (devkitARM / libctru)","WebSockets","Linux RPM","HTTP API"],metrics:["Low latency Wi-Fi telemetry stream","Compiled native .cia for 3DS & RPM for Linux"]},{id:"ai-class-assistant",title:"AI Desktop Assistant for Class",category:"ai-cloud",featured:!1,icon:"fa-robot",repoUrl:"https://github.com/Just-a-Spider/AI_Assistant_For_Class",shortDesc:"PyQt6 desktop assistant utilizing natural language to automate system actions, open applications, and query OpenAI models.",fullDesc:"Personal assistant tool designed to streamline classroom workflows. Features browser integration, quick app launcher, and custom prompt execution via local desktop hotkeys.",techStack:["Python","PyQt6","OpenAI API","System Automation"]},{id:"papeletas-cv",title:"Automated Ticket System (YOLO Vision)",category:"ai-cloud",featured:!1,icon:"fa-camera",repoUrl:"https://github.com/Just-a-Spider/QR-Plates-Tickets",shortDesc:"Computer Vision traffic ticketing system with real-time license plate detection using YOLO model and PyQt6 GUI.",fullDesc:"Trained YOLO vision model to detect vehicle license plates and extract alphanumeric codes, generating automated digital infractions.",techStack:["Python","YOLO Vision","PyQt6","OpenCV"]},{id:"eventos-udh",title:"EventosUDH Management Platform",category:"fullstack",featured:!1,icon:"fa-calendar-check",repoUrl:"https://github.com/Just-a-Spider/EventosUDH",shortDesc:"Academic event & speaker management system for university faculty coordinators and student registrations.",fullDesc:"Designed to streamline conference speaker bookings, attendance tracking, and digital certificate issuing.",techStack:["Django Rest Framework","Angular","PostgreSQL","Python"]},{id:"gatilin-digital",title:"Gatil\xEDn Digital Cultural Tracker",category:"fullstack",featured:!1,badge:"Municipal Recognition",icon:"fa-map-marked-alt",shortDesc:"Real-time location and documentation platform for traditional Cofrad\xEDas during Festival de Negritos de Hu\xE1nuco 2024.",fullDesc:"Built tracking mobile-friendly app and historical documentation page. Recognized by the District Municipality of Amarilis for cultural innovation.",techStack:["Angular","Django Rest Framework","PostgreSQL","Heroku"]}],skillsList:[{name:"Backend & Databases",icon:"fa-server",skills:[{name:"Django & DRF",level:"Expert",highlight:!0},{name:"PostgreSQL (pgvector)",level:"Advanced",highlight:!0},{name:"Firebase (Functions, Data Connect)",level:"Expert",highlight:!0},{name:"FastAPI (Python)",level:"Advanced"},{name:"NestJS & Node.js",level:"Intermediate"}]},{name:"Frontend Engineering",icon:"fa-code",skills:[{name:"Angular (Signals, RxJS)",level:"Expert",highlight:!0},{name:"TypeScript & JavaScript",level:"Expert",highlight:!0},{name:"HTML5 & Modern CSS3",level:"Expert"},{name:"PrimeNG & TailwindCSS",level:"Advanced"}]},{name:"Cloud, Systems & AI",icon:"fa-microchip",skills:[{name:"Rust (Cargo RPM)",level:"Intermediate",highlight:!0},{name:"RAG & Vector Search (HNSW)",level:"Advanced",highlight:!0},{name:"GCP (Cloud Run, Vertex AI)",level:"Advanced"},{name:"Ollama & Local LLMs",level:"Advanced"},{name:"Docker & Hetzner Cloud",level:"Advanced"}]}],experiencesList:[{role:"Full-Stack Developer & Tech Lead",company:"Kuantum Innovations",period:"Feb 2025 - Jun 2026",location:"Peru",highlights:["Sole architect for Kuantum Educa platform handling large-scale student admissions exam simulations.","Engineered event-driven cloud architecture with Firebase Cloud Functions & Pub/Sub.","Created Angular state-driven management dashboard using Signals and PrimeNG.","Implemented semantic RAG career matching connecting student RIASEC profiles to 200+ academic programs using FastAPI & pgvector on Google Cloud Run."],stack:["Angular","Firebase","FastAPI","PostgreSQL","Gemini AI","GCP"]},{role:"Full-Stack Developer & DevOps",company:"Comienza Pro E-Learning",period:"Aug 2025 - Nov 2025",location:"Peru",highlights:["Provisioned and maintained Moodle e-learning infrastructure on Hetzner Cloud for 9 specialized courses.","Customized themes, user roles, and optimized database query execution."],stack:["Moodle","Hetzner Cloud","PHP","MySQL","Linux"]},{role:"Full-Stack Web Developer",company:"Private Client",period:"Sep 2024 - Dec 2024",location:"Hu\xE1nuco, Peru",highlights:["Designed and implemented a municipal construction licensing management portal.","Built full stack with DRF backend, Angular frontend, and PostgreSQL."],stack:["Django Rest Framework","Angular","PostgreSQL"]}],recognitionsList:[{title:"1st Place - Programming Contest",entity:"Universidad de Hu\xE1nuco",date:"Nov 2023",icon:"fa-trophy"},{title:"1st Place - Pitch Day 2023 Innovation",entity:"Universidad de Hu\xE1nuco",date:"Nov 2023",icon:"fa-award"},{title:"Official Recognition for Gatil\xEDn Digital",entity:"District Municipality of Amarilis",date:"Feb 2024",icon:"fa-certificate"}]},es:{nav:{overview:"Visi\xF3n General",projects:"Proyectos",skills:"Habilidades",experience:"Experiencia",contact:"Contacto"},hero:{status:"SYS_STATUS: EN L\xCDNEA // ACEPTANDO PROYECTOS FREELANCE",titleMain:"Consultor de Software Full-Stack",titleHighlight:"Resolviendo Problemas",titleSuffix:"con Sistemas Escalables",subtitle:"Construyo aplicaciones web y arquitecturas en la nube de alto rendimiento. Ya sea que necesites un backend escalable orientado a eventos o una herramienta empresarial integrada con IA, entrego soluciones t\xE9cnicas robustas que impulsan resultados de negocio.",exploreBtn:"Ver Trabajos Destacados",contactBtn:"Hablemos de tu Proyecto"},projects:{screenTag:"// PORTAFOLIO",title:"Proyectos y Sistemas Destacados",all:"Todos los Sistemas",fullstack:"Full-Stack",aiCloud:"IA y Nube",systems:"Bajo Nivel y Rust",viewArch:"// Ver Arquitectura",liveDemo:"Sitio en Vivo",repo:"Repositorio"},skills:{screenTag:"// SERVICIOS Y EXPERIENCIA",title:"Servicios de Consultor\xEDa"},experience:{screenTag:"// EXPERIENCIA PROFESIONAL",title:"Experiencia y Trayectoria",honorsTitle:"Reconocimientos"},contact:{screenTag:"// CONSULTOR\xCDA",title:"\xBFTienes un proyecto complejo en mente?",desc:"Hablemos sobre c\xF3mo podemos hacerlo realidad a tiempo y dentro del presupuesto. Actualmente estoy aceptando nuevos clientes freelance.",sendEmail:"Enviar Correo Directo"},modal:{sysHighlights:"// ASPECTOS DESTACADOS DEL SISTEMA:",techStack:"TECNOLOG\xCDAS:",repo:"C\xF3digo Fuente",liveDemo:"Visitar Sitio en Vivo",close:"Cerrar Ventana"},projectsList:[{id:"kuantum-educa",title:"Plataforma Kuantum Educa",category:"fullstack",featured:!0,badge:"Sistema Full-Stack Principal",icon:"fa-graduation-cap",liveUrl:"https://kuantumeduca.com",shortDesc:"Arquitect\xE9 una plataforma educativa de alta escalabilidad que procesa miles de ex\xE1menes simult\xE1neos sin interrupciones, integrando IA para orientaci\xF3n vocacional.",fullDesc:"Entregu\xE9 una soluci\xF3n integral en la nube para una importante iniciativa educativa. Desarroll\xE9 un backend orientado a eventos (Firebase/PubSub) que procesa an\xE1lisis masivos de ex\xE1menes as\xEDncronamente, asegurando cero latencia para los usuarios. Adem\xE1s, integr\xE9 un servicio de IA basado en RAG (FastAPI/pgvector) para brindar orientaci\xF3n profesional automatizada y altamente personalizada.",techStack:["Angular","Firebase Cloud Functions","Pub/Sub","FastAPI","PostgreSQL (pgvector)","Gemini AI","PrimeNG","TailwindCSS"],metrics:["Procesamiento as\xEDncrono de eventos para 1000s de ex\xE1menes","Embeddings RAG para +200 programas acad\xE9micos","Gesti\xF3n fluida de latencia de IA de 5-8s en la interfaz"]},{id:"sysmon-3ds",title:"SysMon - Monitor PC y Macro Pad en 3DS",category:"systems",featured:!0,badge:"Homebrew en Rust y C",icon:"fa-gamepad",repoUrl:"https://github.com/Just-a-Spider/SysMon",shortDesc:"Convierte una Nintendo 3DS en un monitor inal\xE1mbrico de telemetr\xEDa de PC en tiempo real, rastreador Pomodoro y controlador de macros en Linux.",fullDesc:"Desarroll\xE9 el servidor de telemetr\xEDa anfitri\xF3n en Rust (empaquetado nativamente como RPM para Linux v\xEDa cargo-generate-rpm) y el cliente en C utilizando devkitARM y libctru para homebrew de Nintendo 3DS. Incluye transmisi\xF3n WebSockets en tiempo real, gestor de procesos (tocar para cerrar), controles de volumen y ejecuci\xF3n de macros.",techStack:["Rust","C (devkitARM / libctru)","WebSockets","RPM Linux","HTTP API"],metrics:["Telemetr\xEDa Wi-Fi de ultra baja latencia","Compilado ejecutable nativo .cia para 3DS y RPM para Linux"]},{id:"ai-class-assistant",title:"Asistente de IA para Clases",category:"ai-cloud",featured:!1,icon:"fa-robot",repoUrl:"https://github.com/Just-a-Spider/AI_Assistant_For_Class",shortDesc:"Asistente de escritorio en PyQt6 que utiliza lenguaje natural para automatizar acciones del sistema, abrir aplicaciones y consultar modelos OpenAI.",fullDesc:"Herramienta de asistencia personal dise\xF1ada para agilizar flujos de trabajo en clases. Incluye integraci\xF3n con el navegador, lanzador r\xE1pido de apps y ejecuci\xF3n de prompts v\xEDa atajos globales.",techStack:["Python","PyQt6","OpenAI API","Automatizaci\xF3n de Sistema"]},{id:"papeletas-cv",title:"Sistema de Papeletas Autom\xE1ticas (Visi\xF3n YOLO)",category:"ai-cloud",featured:!1,icon:"fa-camera",repoUrl:"https://github.com/Just-a-Spider/QR-Plates-Tickets",shortDesc:"Sistema de fotopapeletas de tr\xE1nsito con detecci\xF3n de placas vehiculares en tiempo real usando modelo de visi\xF3n YOLO y GUI en PyQt6.",fullDesc:"Entrenamiento de modelo de visi\xF3n YOLO para detectar placas de veh\xEDculos y extraer c\xF3digo alfanum\xE9rico, generando infracciones digitales autom\xE1ticas.",techStack:["Python","Visi\xF3n YOLO","PyQt6","OpenCV"]},{id:"eventos-udh",title:"Plataforma EventosUDH",category:"fullstack",featured:!1,icon:"fa-calendar-check",repoUrl:"https://github.com/Just-a-Spider/EventosUDH",shortDesc:"Sistema de gesti\xF3n de eventos acad\xE9micos y ponentes para coordinadores de facultad e inscripciones de estudiantes.",fullDesc:"Dise\xF1ado para optimizar la agenda de ponentes, control de asistencia y emisi\xF3n digital de certificados.",techStack:["Django Rest Framework","Angular","PostgreSQL","Python"]},{id:"gatilin-digital",title:"Rastreador Cultural Gatil\xEDn Digital",category:"fullstack",featured:!1,badge:"Reconocimiento Municipal",icon:"fa-map-marked-alt",shortDesc:"Plataforma de documentaci\xF3n y ubicaci\xF3n en tiempo real de Cofrad\xEDas durante el Festival de Negritos de Hu\xE1nuco 2024.",fullDesc:"Desarrollo de aplicaci\xF3n web m\xF3vil de rastreo y p\xE1gina de documentaci\xF3n hist\xF3rica. Reconocido por la Municipalidad Distrital de Amarilis por innovaci\xF3n cultural.",techStack:["Angular","Django Rest Framework","PostgreSQL","Heroku"]}],skillsList:[{name:"Backend y Bases de Datos",icon:"fa-server",skills:[{name:"Django & DRF",level:"Experto",highlight:!0},{name:"PostgreSQL (pgvector)",level:"Avanzado",highlight:!0},{name:"Firebase (Functions, Data Connect)",level:"Experto",highlight:!0},{name:"FastAPI (Python)",level:"Avanzado"},{name:"NestJS & Node.js",level:"Intermedio"}]},{name:"Ingenier\xEDa Frontend",icon:"fa-code",skills:[{name:"Angular (Signals, RxJS)",level:"Experto",highlight:!0},{name:"TypeScript & JavaScript",level:"Experto",highlight:!0},{name:"HTML5 & Modern CSS3",level:"Experto"},{name:"PrimeNG & TailwindCSS",level:"Avanzado"}]},{name:"Nube, Sistemas e IA",icon:"fa-microchip",skills:[{name:"Rust (Cargo RPM)",level:"Intermedio",highlight:!0},{name:"RAG & Vector Search (HNSW)",level:"Avanzado",highlight:!0},{name:"GCP (Cloud Run, Vertex AI)",level:"Avanzado"},{name:"Ollama & Local LLMs",level:"Avanzado"},{name:"Docker & Hetzner Cloud",level:"Avanzado"}]}],experiencesList:[{role:"Desarrollador Full-Stack y Tech Lead",company:"Kuantum Innovations",period:"Feb 2025 - Jun 2026",location:"Per\xFA",highlights:["Arquitecto \xFAnico de la plataforma Kuantum Educa para procesamiento masivo de simulacros de admisi\xF3n.","Ingenier\xEDa de arquitectura en la nube orientada a eventos con Firebase Cloud Functions y Pub/Sub.","Creaci\xF3n de panel administrativo responsivo en Angular usando Signals y PrimeNG.","Implementaci\xF3n de orientaci\xF3n vocacional sem\xE1ntica RAG conectando perfiles RIASEC a 200+ carreras universitarias usando FastAPI y pgvector en Google Cloud Run."],stack:["Angular","Firebase","FastAPI","PostgreSQL","Gemini AI","GCP"]},{role:"Desarrollador Full-Stack y DevOps",company:"Comienza Pro E-Learning",period:"Ago 2025 - Nov 2025",location:"Per\xFA",highlights:["Aprovisionamiento y mantenimiento de infraestructura e-learning en Moodle sobre Hetzner Cloud para 9 cursos especializados.","Personalizaci\xF3n de temas, roles de usuario y optimizaci\xF3n de consultas a la base de datos."],stack:["Moodle","Hetzner Cloud","PHP","MySQL","Linux"]},{role:"Desarrollador Web Full-Stack",company:"Cliente Privado",period:"Set 2024 - Dic 2024",location:"Hu\xE1nuco, Per\xFA",highlights:["Dise\xF1o e implementaci\xF3n de portal de solicitudes y gesti\xF3n de licencias de construcci\xF3n municipal.","Desarrollo full-stack con backend DRF, frontend en Angular y PostgreSQL."],stack:["Django Rest Framework","Angular","PostgreSQL"]}],recognitionsList:[{title:"1er Lugar - Concurso de Programaci\xF3n",entity:"Universidad de Hu\xE1nuco",date:"Nov 2023",icon:"fa-trophy"},{title:"1er Lugar - Pitch Day 2023 Innovaci\xF3n",entity:"Universidad de Hu\xE1nuco",date:"Nov 2023",icon:"fa-award"},{title:"Reconocimiento Oficial por Gatil\xEDn Digital",entity:"Municipalidad Distrital de Amarilis",date:"Feb 2024",icon:"fa-certificate"}]}},Hh=class{currentLang=Xn("en");t=Fn(()=>c2[this.currentLang()]);toggleLang(){this.currentLang.update(e=>e==="en"?"es":"en")}setLang(e){this.currentLang.set(e)}};var l2=["nodeCanvas"],u2=["scroller"],d2=(n,e)=>e.id,HM=(n,e)=>e.name,f2=(n,e)=>e.company;function h2(n,e){if(n&1&&rt(0,"img",30),n&2){let t=lt(2);Yn("src",t.profilePhoto(),li)("alt",t.profile.name)}}function p2(n,e){n&1&&rt(0,"i",31)}function m2(n,e){if(n&1){let t=Us();ne(0,"section",21)(1,"div",27)(2,"div",28)(3,"div",29),_n(4,h2,1,2,"img",30)(5,p2,1,0,"i",31),ce(),ne(6,"div")(7,"div",32),rt(8,"div",33),ne(9,"span"),De(10),ce()(),ne(11,"h1",34),De(12),rt(13,"br"),ne(14,"span",35),De(15),ce(),De(16),ce()()(),ne(17,"p",36),De(18),ce(),ne(19,"div",37)(20,"button",38),Nt("click",function(){$n(t);let r=lt();return qn(r.scrollToSection("projects"))}),rt(21,"i",8),De(22),ce(),ne(23,"button",39),Nt("click",function(){$n(t);let r=lt();return qn(r.scrollToSection("contact"))}),rt(24,"i",11),De(25),ce()()()()}if(n&2){let t=lt();Q(4),xn(t.profilePhoto()?4:5),Q(6),et(t.t().hero.status),Q(2),Gt(" ",t.t().hero.titleMain," "),Q(3),et(t.t().hero.titleHighlight),Q(),Gt(" ",t.t().hero.titleSuffix,". "),Q(2),Gt(" ",t.t().hero.subtitle," "),Q(4),Gt(" ",t.t().hero.exploreBtn," "),Q(3),Gt(" ",t.t().hero.contactBtn," ")}}function g2(n,e){if(n&1&&(ne(0,"span",54),De(1),ce()),n&2){let t=lt().$implicit;Q(),et(t.badge)}}function v2(n,e){if(n&1&&(ne(0,"span",58),De(1),ce()),n&2){let t=e.$implicit;Q(),et(t)}}function y2(n,e){if(n&1&&(ne(0,"a",65),Nt("click",function(i){return i.stopPropagation()}),rt(1,"i",66),ce()),n&2){let t=lt().$implicit,i=lt(2);Yn("href",t.liveUrl,li)("title",i.t().projects.liveDemo)}}function _2(n,e){if(n&1&&(ne(0,"a",67),Nt("click",function(i){return i.stopPropagation()}),rt(1,"i",68),ce()),n&2){let t=lt().$implicit,i=lt(2);Yn("href",t.repoUrl,li)("title",i.t().projects.repo)}}function x2(n,e){if(n&1){let t=Us();ne(0,"div",51),Nt("click",function(){let r=$n(t).$implicit,o=lt(2);return qn(o.openProjectModal(r))}),ne(1,"div")(2,"div",52)(3,"div",53),rt(4,"i"),ce(),_n(5,g2,2,1,"span",54),ce(),ne(6,"h3",55),De(7),ce(),ne(8,"p",56),De(9),ce(),ne(10,"div",57),Mi(11,v2,2,1,"span",58,ko),ce()(),ne(13,"div",59)(14,"span",60),De(15),rt(16,"i",61),ce(),ne(17,"div",62),_n(18,y2,2,2,"a",63),_n(19,_2,2,2,"a",64),ce()()()}if(n&2){let t=e.$implicit,i=lt(2);An("glass-card-purple",t.id==="sysmon-3ds"),Q(4),fc(hc("fas ",t.icon)),Q(),xn(t.badge?5:-1),Q(2),et(t.title),Q(2),et(t.shortDesc),Q(2),wi(t.techStack),Q(4),Gt(" ",i.t().projects.viewArch," "),Q(3),xn(t.liveUrl?18:-1),Q(),xn(t.repoUrl?19:-1)}}function S2(n,e){if(n&1){let t=Us();ne(0,"section",22)(1,"div",40)(2,"div",41)(3,"span",42),De(4),ce(),ne(5,"h2",43),De(6),ce()(),ne(7,"div",44)(8,"button",45),Nt("click",function(){$n(t);let r=lt();return qn(r.setCategory("all"))}),rt(9,"i",46),De(10),ce(),ne(11,"button",45),Nt("click",function(){$n(t);let r=lt();return qn(r.setCategory("fullstack"))}),rt(12,"i",10),De(13),ce(),ne(14,"button",45),Nt("click",function(){$n(t);let r=lt();return qn(r.setCategory("ai-cloud"))}),rt(15,"i",47),De(16),ce(),ne(17,"button",45),Nt("click",function(){$n(t);let r=lt();return qn(r.setCategory("systems"))}),rt(18,"i",48),De(19),ce()(),ne(20,"div",49),Mi(21,x2,20,11,"div",50,d2),ce()()()}if(n&2){let t=lt();Q(4),et(t.t().projects.screenTag),Q(2),et(t.t().projects.title),Q(2),An("active",t.selectedCategory()==="all"),Q(2),Gt(" ",t.t().projects.all," "),Q(),An("active",t.selectedCategory()==="fullstack"),Q(2),Gt(" ",t.t().projects.fullstack," "),Q(),An("active",t.selectedCategory()==="ai-cloud"),Q(2),Gt(" ",t.t().projects.aiCloud," "),Q(),An("active",t.selectedCategory()==="systems"),Q(2),Gt(" ",t.t().projects.systems," "),Q(2),wi(t.filteredProjects())}}function E2(n,e){if(n&1&&(ne(0,"div",77)(1,"span"),De(2),ce(),ne(3,"span",78),De(4),ce()()),n&2){let t=e.$implicit;dc("border-color",t.highlight?"var(--cosmic-cyan)":"rgba(56, 189, 248, 0.2)"),Q(),dc("color",t.highlight?"#ffffff":"var(--text-main)")("font-weight",t.highlight?"600":"400"),Q(),Gt(" ",t.name," "),Q(2),Gt(" ",t.level," ")}}function b2(n,e){if(n&1&&(ne(0,"div",71)(1,"div",72),rt(2,"i",73),ne(3,"h3",74),De(4),ce()(),ne(5,"div",75),Mi(6,E2,5,8,"div",76,HM),ce()()),n&2){let t=e.$implicit;Q(2),fc(hc("fas ",t.icon)),Q(2),et(t.name),Q(2),wi(t.skills)}}function M2(n,e){if(n&1&&(ne(0,"section",23)(1,"div",40)(2,"div",69)(3,"span",42),De(4),ce(),ne(5,"h2",43),De(6),ce()(),ne(7,"div",70),Mi(8,b2,8,4,"div",71,HM),ce()()()),n&2){let t=lt();Q(4),et(t.t().skills.screenTag),Q(2),et(t.t().skills.title),Q(2),wi(t.skillCategories())}}function w2(n,e){if(n&1&&(ne(0,"li"),De(1),ce()),n&2){let t=e.$implicit;Q(),et(t)}}function C2(n,e){if(n&1&&(ne(0,"span",58),De(1),ce()),n&2){let t=e.$implicit;Q(),et(t)}}function T2(n,e){if(n&1&&(ne(0,"div",80),rt(1,"div",81),ne(2,"div",82)(3,"div",83)(4,"div")(5,"h3",84),De(6),ce(),ne(7,"span",85),De(8),ce(),De(9," \u2022 "),ne(10,"span",86),De(11),ce()(),ne(12,"span",87),De(13),ce()(),ne(14,"ul",88),Mi(15,w2,2,1,"li",null,ko),ce(),ne(17,"div",89),Mi(18,C2,2,1,"span",58,ko),ce()()()),n&2){let t=e.$implicit;Q(6),et(t.role),Q(2),et(t.company),Q(3),et(t.location),Q(2),et(t.period),Q(2),wi(t.highlights),Q(3),wi(t.stack)}}function D2(n,e){if(n&1&&(ne(0,"section",24)(1,"div",40)(2,"div",69)(3,"span",42),De(4),ce(),ne(5,"h2",43),De(6),ce()(),ne(7,"div",79),Mi(8,T2,20,4,"div",80,f2),ce()()()),n&2){let t=lt();Q(4),et(t.t().experience.screenTag),Q(2),et(t.t().experience.title),Q(2),wi(t.experiences())}}function A2(n,e){if(n&1&&(ne(0,"section",25)(1,"div",90)(2,"div",91)(3,"span",92),De(4),ce(),ne(5,"h2",93),De(6),ce(),ne(7,"p",94),De(8),ce(),ne(9,"div",95)(10,"a",96),rt(11,"i",11),De(12),ce(),ne(13,"a",97),rt(14,"i",17),De(15," GitHub "),ce(),ne(16,"a",97),rt(17,"i",19),De(18," LinkedIn "),ce()()()()()),n&2){let t=lt();Q(4),et(t.t().contact.screenTag),Q(2),et(t.t().contact.title),Q(2),Gt(" ",t.t().contact.desc," "),Q(2),Yn("href","mailto:"+t.profile.email,li),Q(2),Gt(" ",t.t().contact.sendEmail," "),Q(),Yn("href",t.profile.github,li),Q(3),Yn("href",t.profile.linkedin,li)}}function I2(n,e){if(n&1&&(ne(0,"span",105),De(1),ce()),n&2){let t=lt();Q(),et(t.badge)}}function R2(n,e){if(n&1&&(ne(0,"li"),De(1),ce()),n&2){let t=e.$implicit;Q(),et(t)}}function N2(n,e){if(n&1&&(ne(0,"div",107)(1,"h4",113),De(2),ce(),ne(3,"ul",114),Mi(4,R2,2,1,"li",null,ko),ce()()),n&2){let t=lt(),i=lt();Q(2),et(i.t().modal.sysHighlights),Q(2),wi(t.metrics)}}function P2(n,e){if(n&1&&(ne(0,"span",110),De(1),ce()),n&2){let t=e.$implicit;Q(),et(t)}}function L2(n,e){if(n&1&&(ne(0,"a",112),rt(1,"i",115),De(2),ce()),n&2){let t=lt(),i=lt();Yn("href",t.liveUrl,li),Q(2),Gt(" ",i.t().modal.liveDemo," ")}}function O2(n,e){if(n&1&&(ne(0,"a",97),rt(1,"i",17),De(2),ce()),n&2){let t=lt(),i=lt();Yn("href",t.repoUrl,li),Q(2),Gt(" ",i.t().modal.repo," ")}}function F2(n,e){if(n&1){let t=Us();ne(0,"div",98),Nt("click",function(){$n(t);let r=lt();return qn(r.closeModal())}),ne(1,"div",99),Nt("click",function(r){return r.stopPropagation()}),ne(2,"button",100),Nt("click",function(){$n(t);let r=lt();return qn(r.closeModal())}),rt(3,"i",101),ce(),ne(4,"div",102)(5,"div",103),rt(6,"i"),ce(),ne(7,"div")(8,"h2",104),De(9),ce(),_n(10,I2,2,1,"span",105),ce()(),ne(11,"p",106),De(12),ce(),_n(13,N2,6,1,"div",107),ne(14,"div",108)(15,"h4",109),De(16),ce(),ne(17,"div",89),Mi(18,P2,2,1,"span",110,ko),ce()(),ne(20,"div",111),_n(21,L2,3,2,"a",112),_n(22,O2,3,2,"a",97),ne(23,"button",39),Nt("click",function(){$n(t);let r=lt();return qn(r.closeModal())}),De(24),ce()()()()}if(n&2){let t=e,i=lt();Q(6),fc(hc("fas ",t.icon)),Q(3),et(t.title),Q(),xn(t.badge?10:-1),Q(2),Gt(" ",t.fullDesc," "),Q(),xn(t.metrics&&t.metrics.length>0?13:-1),Q(3),et(i.t().modal.techStack),Q(2),wi(t.techStack),Q(3),xn(t.liveUrl?21:-1),Q(),xn(t.repoUrl?22:-1),Q(2),et(i.t().modal.close)}}var zh=class n{canvasRef;scrollerRef;i18n=new Hh;t=this.i18n.t;currentLang=this.i18n.currentLang;profilePhoto=Xn(null);SECTIONS=["overview","projects","skills","experience","contact"];activeSection=Xn("overview");selectedCategory=Xn("all");selectedProject=Xn(null);currentSectionIndex=Fn(()=>{let e=this.SECTIONS.indexOf(this.activeSection());return e>=0?e:0});hasPrev=Fn(()=>this.currentSectionIndex()>0);hasNext=Fn(()=>this.currentSectionIndex()<this.SECTIONS.length-1);profile={name:"Gustavo Andre Argando\xF1a Becerra",shortName:"Andre Argando\xF1a",location:"Hu\xE1nuco, Per\xFA",email:"andre_arg_0116@outlook.com",github:"https://github.com/Just-a-Spider",linkedin:"https://www.linkedin.com/in/andre-argando%C3%B1a-3011a6263/"};projects=Fn(()=>this.t().projectsList);skillCategories=Fn(()=>this.t().skillsList);experiences=Fn(()=>this.t().experiencesList);recognitions=Fn(()=>this.t().recognitionsList);filteredProjects=Fn(()=>{let e=this.selectedCategory();return e==="all"?this.projects():this.projects().filter(t=>t.category===e)});scene;camera;renderer;starPoints;starPositions;starColors;animFrameId=null;isLowEnd=!1;starCount=3e3;mouse={x:0,y:0};ngAfterViewInit(){this.detectHardwareCapabilities(),this.initThreeSpaceEngine(),this.initVisibilityListener()}ngOnDestroy(){this.animFrameId&&cancelAnimationFrame(this.animFrameId),this.renderer&&this.renderer.dispose()}detectHardwareCapabilities(){let e=window.innerWidth<768,t=typeof navigator<"u"&&(navigator.hardwareConcurrency||4)<=4;this.isLowEnd=e||t,this.starCount=this.isLowEnd?1e3:3e3}initVisibilityListener(){document.addEventListener("visibilitychange",()=>{document.hidden&&this.animFrameId?(cancelAnimationFrame(this.animFrameId),this.animFrameId=null):!document.hidden&&!this.animFrameId&&this.animateThreeSpace()})}initThreeSpaceEngine(){let e=this.canvasRef?.nativeElement;if(!e)return;this.scene=new qc,this.scene.fog=new $c(330264,.008),this.camera=new mn(60,window.innerWidth/window.innerHeight,.1,1e3),this.camera.position.set(0,0,50),this.renderer=new Uh({canvas:e,alpha:!0,antialias:!this.isLowEnd,powerPreference:"high-performance"});let t=this.isLowEnd?1:Math.min(window.devicePixelRatio,2);this.renderer.setPixelRatio(t),this.renderer.setSize(window.innerWidth,window.innerHeight);let i=new ti;this.starPositions=new Float32Array(this.starCount*3),this.starColors=new Float32Array(this.starCount*3);let r=[new qe(61695),new qe(11032055),new qe(16722589)];for(let d=0;d<this.starCount;d++){this.starPositions[d*3]=(Math.random()-.5)*300,this.starPositions[d*3+1]=(Math.random()-.5)*200,this.starPositions[d*3+2]=(Math.random()-.5)*400;let h=Math.random(),p;h>.8?(p=r[Math.floor(Math.random()*r.length)].clone(),p.multiplyScalar(1.5)):h>.3?p=new qe(16777215):(p=new qe(16777215),p.multiplyScalar(.2+Math.random()*.2)),this.starColors[d*3]=p.r,this.starColors[d*3+1]=p.g,this.starColors[d*3+2]=p.b}i.setAttribute("position",new bn(this.starPositions,3)),i.setAttribute("color",new bn(this.starColors,3));let o=document.createElement("canvas");o.width=32,o.height=32;let s=o.getContext("2d"),a=s.createRadialGradient(16,16,0,16,16,16);a.addColorStop(0,"rgba(255, 255, 255, 1)"),a.addColorStop(.2,"rgba(255, 255, 255, 0.8)"),a.addColorStop(.5,"rgba(255, 255, 255, 0.2)"),a.addColorStop(1,"rgba(255, 255, 255, 0)"),s.fillStyle=a,s.fillRect(0,0,32,32);let c=new el(o),l=new ma({size:1.5,map:c,vertexColors:!0,transparent:!0,opacity:1,sizeAttenuation:!0,depthWrite:!1,blending:al});this.starPoints=new Jc(i,l),this.scene.add(this.starPoints);let u=new va(61695,2,200);u.position.set(20,20,30),this.scene.add(u);let f=new va(11032055,2,200);f.position.set(-20,-20,20),this.scene.add(f),window.addEventListener("mousemove",d=>{this.mouse.x=d.clientX/window.innerWidth*2-1,this.mouse.y=-(d.clientY/window.innerHeight)*2+1}),window.addEventListener("resize",()=>{this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}),this.animateThreeSpace()}animateThreeSpace=()=>{if(this.starPoints){this.starPoints.rotation.y+=2e-4,this.camera.rotation.y=-this.mouse.x*.05,this.camera.rotation.x=this.mouse.y*.05;let e=this.starPoints.geometry.attributes.position.array;for(let t=0;t<this.starCount;t++)e[t*3+2]+=.1,e[t*3+2]>100&&(e[t*3+2]=-300);this.starPoints.geometry.attributes.position.needsUpdate=!0}this.renderer.render(this.scene,this.camera),this.animFrameId=requestAnimationFrame(this.animateThreeSpace)};setLang(e){this.i18n.setLang(e)}toggleLang(){this.i18n.toggleLang()}scrollToSection(e){this.activeSection.set(e)}setCategory(e){this.selectedCategory.set(e)}openProjectModal(e){this.selectedProject.set(e)}closeModal(){this.selectedProject.set(null)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=lc({type:n,selectors:[["app-root"]],viewQuery:function(t,i){if(t&1&&hd(l2,5)(u2,5),t&2){let r;pd(r=md())&&(i.canvasRef=r.first),pd(r=md())&&(i.scrollerRef=r.first)}},decls:43,vars:27,consts:[["nodeCanvas",""],["id","node-canvas"],[1,"quick-nav"],[1,"hud-top-bar"],["aria-label","Space Navigation",1,"nav-buttons"],[1,"nav-btn",3,"click"],[1,"fas","fa-space-shuttle"],[1,"nav-text"],[1,"fas","fa-cubes"],[1,"fas","fa-code"],[1,"fas","fa-layer-group"],[1,"fas","fa-paper-plane"],[1,"hud-controls",2,"display","flex","align-items","center","gap","10px"],[1,"lang-toggle"],[1,"lang-btn",3,"click"],[2,"display","flex","gap","6px","align-items","center"],["target","_blank","title","GitHub",1,"btn","btn-secondary",2,"padding","4px 10px","font-size","0.8rem",3,"href"],[1,"fab","fa-github"],["target","_blank","title","LinkedIn",1,"btn","btn-secondary",2,"padding","4px 10px","font-size","0.8rem",3,"href"],[1,"fab","fa-linkedin"],[1,"tab-wrapper"],["id","overview",1,"tab-section","fade-in"],["id","projects",1,"tab-section","fade-in"],["id","skills",1,"tab-section","fade-in"],["id","experience",1,"tab-section","fade-in"],["id","contact",1,"tab-section","fade-in"],[2,"position","fixed","inset","0","background","rgba(5, 10, 24, 0.88)","backdrop-filter","blur(16px)","z-index","1000","display","flex","align-items","center","justify-content","center","padding","24px"],[1,"section-content",2,"max-width","960px","padding-top","10px"],[2,"display","flex","align-items","center","gap","28px","margin-bottom","24px","flex-wrap","wrap"],[1,"profile-frame","float-anim"],[1,"profile-img",3,"src","alt"],[1,"fas","fa-user-astronaut","profile-placeholder-icon"],[1,"eng-badge",2,"margin-bottom","12px"],[1,"dot-pulse"],[2,"font-size","3rem","font-weight","800","line-height","1.1"],[1,"text-gradient-animated"],[2,"font-size","1.1rem","color","var(--text-muted)","line-height","1.7","margin-bottom","28px","max-width","860px"],[2,"display","flex","gap","16px","flex-wrap","wrap"],[1,"btn","btn-primary","pulse-glow",3,"click"],[1,"btn","btn-secondary",3,"click"],[1,"section-content"],[2,"margin-bottom","20px"],[2,"color","var(--cosmic-cyan)","font-family","var(--font-code)","font-size","0.85rem","text-transform","uppercase"],[2,"font-size","2.2rem","font-weight","700"],[1,"category-filter"],[1,"filter-btn",3,"click"],[1,"fas","fa-border-all"],[1,"fas","fa-brain"],[1,"fas","fa-microchip"],[2,"display","grid","grid-template-columns","repeat(auto-fit, minmax(340px, 1fr))","gap","20px","max-height","calc(100vh - 250px)","overflow-y","auto","padding-right","8px"],[1,"glass-card","interactive-card",2,"padding","24px","cursor","pointer","display","flex","flex-direction","column","justify-content","space-between",3,"glass-card-purple"],[1,"glass-card","interactive-card",2,"padding","24px","cursor","pointer","display","flex","flex-direction","column","justify-content","space-between",3,"click"],[2,"display","flex","align-items","center","justify-content","space-between","margin-bottom","14px"],[2,"width","44px","height","44px","border-radius","10px","background","rgba(7, 14, 32, 0.9)","border","1.5px solid var(--border-glass-hover)","color","var(--cosmic-cyan)","display","flex","align-items","center","justify-content","center","font-size","1.15rem"],[1,"eng-badge",2,"font-size","0.725rem"],[2,"font-size","1.3rem","margin-bottom","8px"],[2,"color","var(--text-muted)","font-size","0.925rem","margin-bottom","18px","line-height","1.5"],[1,"tech-pills",2,"margin-bottom","18px"],[1,"tech-pill"],[2,"padding-top","14px","border-top","1px solid rgba(56, 189, 248, 0.15)","display","flex","align-items","center","justify-content","space-between"],[2,"font-size","0.8rem","color","var(--cosmic-cyan)","font-family","var(--font-code)","font-weight","500","display","inline-flex","align-items","center","gap","6px"],[1,"fas","fa-chevron-right"],[2,"display","flex","gap","14px","align-items","center"],["target","_blank",2,"color","var(--cosmic-cyan)",3,"href","title"],["target","_blank",2,"color","var(--text-dim)",3,"href","title"],["target","_blank",2,"color","var(--cosmic-cyan)",3,"click","href","title"],[1,"fas","fa-external-link-alt",2,"font-size","1rem"],["target","_blank",2,"color","var(--text-dim)",3,"click","href","title"],[1,"fab","fa-github",2,"font-size","1.15rem"],[2,"margin-bottom","32px"],[2,"display","grid","grid-template-columns","repeat(auto-fit, minmax(320px, 1fr))","gap","24px"],[1,"glass-card",2,"padding","28px"],[2,"display","flex","align-items","center","gap","12px","margin-bottom","18px"],[2,"color","var(--cosmic-cyan)","font-size","1.25rem"],[2,"font-size","1.15rem"],[2,"display","flex","flex-wrap","wrap","gap","10px"],[1,"tech-pill",2,"display","flex","align-items","center","gap","8px","font-size","0.825rem","padding","6px 14px",3,"border-color"],[1,"tech-pill",2,"display","flex","align-items","center","gap","8px","font-size","0.825rem","padding","6px 14px"],[2,"font-size","0.65rem","font-family","var(--font-code)","color","var(--text-dim)","opacity","0.8"],[1,"timeline-container",2,"max-height","calc(100dvh - 200px)","overflow-y","auto","padding-right","12px"],[1,"timeline-item"],[1,"timeline-node"],[1,"glass-card","interactive-card",2,"padding","24px"],[2,"display","flex","justify-content","space-between","align-items","flex-start","margin-bottom","12px","flex-wrap","wrap","gap","8px"],[2,"font-size","1.25rem"],[2,"color","var(--cosmic-cyan)","font-weight","600","font-size","0.95rem"],[2,"font-family","var(--font-code)","color","var(--text-dim)","font-size","0.85rem"],[1,"eng-badge"],[2,"padding-left","20px","color","var(--text-muted)","font-size","0.9rem","margin-bottom","16px","display","flex","flex-direction","column","gap","6px"],[1,"tech-pills"],[1,"section-content",2,"display","flex","align-items","center","justify-content","center","min-height","calc(100vh - 160px)"],[1,"glass-card","glass-card-purple",2,"padding","48px","text-align","center","max-width","680px","width","100%"],[2,"color","var(--cosmic-purple)","font-family","var(--font-code)","font-size","0.85rem","text-transform","uppercase"],[2,"font-size","2.2rem","margin","12px 0"],[2,"color","var(--text-muted)","margin-bottom","32px","font-size","1.05rem"],[2,"display","flex","justify-content","center","gap","16px","flex-wrap","wrap"],[1,"btn","btn-primary",3,"href"],["target","_blank",1,"btn","btn-secondary",3,"href"],[2,"position","fixed","inset","0","background","rgba(5, 10, 24, 0.88)","backdrop-filter","blur(16px)","z-index","1000","display","flex","align-items","center","justify-content","center","padding","24px",3,"click"],[1,"glass-card",2,"width","100%","max-width","700px","max-height","90vh","overflow-y","auto","padding","32px","position","relative",3,"click"],[2,"position","absolute","top","20px","right","20px","background","none","border","none","color","var(--text-muted)","font-size","1.25rem","cursor","pointer",3,"click"],[1,"fas","fa-times"],[2,"display","flex","align-items","center","gap","14px","margin-bottom","18px"],[2,"width","48px","height","48px","border-radius","12px","background","rgba(7, 14, 32, 0.9)","border","1.5px solid var(--border-glass-hover)","color","var(--cosmic-cyan)","display","flex","align-items","center","justify-content","center","font-size","1.25rem"],[2,"font-size","1.6rem"],[1,"eng-badge",2,"margin-top","4px"],[2,"color","var(--text-main)","font-size","1rem","line-height","1.7","margin-bottom","22px"],[2,"margin-bottom","22px","background","rgba(7, 14, 32, 0.8)","padding","16px","border-radius","10px","border","1px solid var(--border-glass)"],[2,"margin-bottom","26px"],[2,"font-size","0.825rem","margin-bottom","8px","color","var(--text-dim)","font-family","var(--font-code)"],[1,"tech-pill",2,"font-size","0.8rem","padding","6px 12px"],[2,"display","flex","gap","12px","justify-content","flex-end","flex-wrap","wrap"],["target","_blank",1,"btn","btn-primary",3,"href"],[2,"font-size","0.875rem","margin-bottom","8px","color","var(--cosmic-cyan)","font-family","var(--font-code)"],[2,"padding-left","20px","color","var(--text-muted)","font-size","0.9rem","display","flex","flex-direction","column","gap","6px"],[1,"fas","fa-external-link-alt"]],template:function(t,i){if(t&1&&(rt(0,"canvas",1,0),ne(2,"header",2)(3,"div",3)(4,"nav",4)(5,"button",5),Nt("click",function(){return i.scrollToSection("overview")}),rt(6,"i",6),ne(7,"span",7),De(8),ce()(),ne(9,"button",5),Nt("click",function(){return i.scrollToSection("projects")}),rt(10,"i",8),ne(11,"span",7),De(12),ce()(),ne(13,"button",5),Nt("click",function(){return i.scrollToSection("skills")}),rt(14,"i",9),ne(15,"span",7),De(16),ce()(),ne(17,"button",5),Nt("click",function(){return i.scrollToSection("experience")}),rt(18,"i",10),ne(19,"span",7),De(20),ce()(),ne(21,"button",5),Nt("click",function(){return i.scrollToSection("contact")}),rt(22,"i",11),ne(23,"span",7),De(24),ce()()(),ne(25,"div",12)(26,"div",13)(27,"button",14),Nt("click",function(){return i.setLang("en")}),De(28,"EN"),ce(),ne(29,"button",14),Nt("click",function(){return i.setLang("es")}),De(30,"ES"),ce()(),ne(31,"div",15)(32,"a",16),rt(33,"i",17),ce(),ne(34,"a",18),rt(35,"i",19),ce()()()()(),ne(36,"main",20),_n(37,m2,26,8,"section",21),_n(38,S2,23,14,"section",22),_n(39,M2,10,2,"section",23),_n(40,D2,10,2,"section",24),_n(41,A2,19,7,"section",25),ce(),_n(42,F2,25,11,"div",26)),t&2){let r;Q(5),An("active",i.activeSection()==="overview"),Q(3),et(i.t().nav.overview),Q(),An("active",i.activeSection()==="projects"),Q(3),et(i.t().nav.projects),Q(),An("active",i.activeSection()==="skills"),Q(3),et(i.t().nav.skills),Q(),An("active",i.activeSection()==="experience"),Q(3),et(i.t().nav.experience),Q(),An("active",i.activeSection()==="contact"),Q(3),et(i.t().nav.contact),Q(3),An("active",i.currentLang()==="en"),Q(2),An("active",i.currentLang()==="es"),Q(3),Yn("href",i.profile.github,li),Q(2),Yn("href",i.profile.linkedin,li),Q(3),xn(i.activeSection()==="overview"?37:-1),Q(),xn(i.activeSection()==="projects"?38:-1),Q(),xn(i.activeSection()==="skills"?39:-1),Q(),xn(i.activeSection()==="experience"?40:-1),Q(),xn(i.activeSection()==="contact"?41:-1),Q(),xn((r=i.selectedProject())?42:-1,r)}},dependencies:[_d],styles:[".navbar[_ngcontent-%COMP%]{position:sticky;top:16px;z-index:100;max-width:1200px;margin:0 auto 40px;padding:12px 24px;display:flex;align-items:center;justify-content:space-between;background:var(--%NS%frosted-bg);backdrop-filter:blur(20px) saturate(180%);-webkit-backdrop-filter:blur(20px) saturate(180%);border:1px solid var(--%NS%border-eng);border-radius:12px;box-shadow:0 10px 30px -5px #00000080}.nav-brand[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;font-weight:700;font-size:1.1rem;color:#fff;text-decoration:none}.brand-avatar[_ngcontent-%COMP%]{width:36px;height:36px;border-radius:8px;background:linear-gradient(135deg,#071e32,#561492);border:1px solid var(--%NS%border-eng);display:flex;align-items:center;justify-content:center;font-family:var(--%NS%font-code);font-weight:800;font-size:.9rem;color:var(--%NS%blue-highlight)}.nav-links[_ngcontent-%COMP%]{display:flex;align-items:center;gap:24px;list-style:none}.nav-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--%NS%text-muted);text-decoration:none;font-size:.9rem;font-weight:500;font-family:var(--%NS%font-code);transition:color .2s ease}.nav-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:var(--%NS%blue-highlight)}.container[_ngcontent-%COMP%]{max-width:1200px;margin:0 auto;padding:0 24px}.hero-section[_ngcontent-%COMP%]{padding:40px 0 80px;display:flex;flex-direction:column;align-items:flex-start;gap:24px}.hero-title[_ngcontent-%COMP%]{font-size:3.5rem;font-weight:800;line-height:1.1;max-width:900px}.hero-subtitle[_ngcontent-%COMP%]{font-size:1.15rem;color:var(--%NS%text-muted);max-width:760px;line-height:1.6}.hero-cta[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:16px;margin-top:12px}.section-header[_ngcontent-%COMP%]{margin-bottom:40px}.section-tag[_ngcontent-%COMP%]{color:var(--%NS%blue-highlight);font-family:var(--%NS%font-code);font-size:.85rem;text-transform:uppercase;letter-spacing:.1em;font-weight:600;display:block;margin-bottom:8px}.section-title[_ngcontent-%COMP%]{font-size:2.25rem;font-weight:700}.bento-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(12,1fr);gap:24px;margin-bottom:80px}.bento-card[_ngcontent-%COMP%]{padding:32px;display:flex;flex-direction:column;justify-content:space-between;position:relative;overflow:hidden;cursor:pointer}.bento-flagship[_ngcontent-%COMP%]{grid-column:span 8;background:linear-gradient(135deg,#071e32d9,#0e2844e6);border-color:#38bdf859}.bento-purple-card[_ngcontent-%COMP%]{grid-column:span 4;background:linear-gradient(135deg,#56149266,#071e32b3);border-color:#c084fc66}.bento-normal[_ngcontent-%COMP%]{grid-column:span 4}.card-top[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;margin-bottom:20px}.card-icon[_ngcontent-%COMP%]{width:48px;height:48px;border-radius:10px;background:#071e32e6;border:1px solid var(--%NS%border-eng);color:var(--%NS%blue-highlight);display:flex;align-items:center;justify-content:center;font-size:1.25rem}.card-title[_ngcontent-%COMP%]{font-size:1.4rem;margin-bottom:10px}.card-desc[_ngcontent-%COMP%]{color:var(--%NS%text-muted);font-size:.95rem;margin-bottom:20px;flex-grow:1}.tech-pills[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:8px}.tech-pill[_ngcontent-%COMP%]{font-family:var(--%NS%font-code);font-size:.75rem;padding:4px 10px;border-radius:4px;background:#071e32b3;color:var(--%NS%text-muted);border:1px solid rgba(56,189,248,.15)}.category-filter[_ngcontent-%COMP%]{display:flex;gap:12px;margin-bottom:32px;flex-wrap:wrap}.filter-btn[_ngcontent-%COMP%]{padding:8px 18px;border-radius:6px;font-family:var(--%NS%font-code);font-size:.85rem;font-weight:500;background:#071e3280;color:var(--%NS%text-muted);border:1px solid var(--%NS%border-eng);cursor:pointer;transition:all .2s ease}.filter-btn.active[_ngcontent-%COMP%], .filter-btn[_ngcontent-%COMP%]:hover{background:#0ea5e926;color:var(--%NS%blue-highlight);border-color:var(--%NS%blue-highlight)}.skills-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;margin-bottom:80px}.skill-category-card[_ngcontent-%COMP%]{padding:28px}.skill-list[_ngcontent-%COMP%]{list-style:none;display:flex;flex-direction:column;gap:14px;margin-top:20px}.skill-item[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;font-size:.95rem}.skill-name[_ngcontent-%COMP%]{font-weight:500}.skill-name.highlight[_ngcontent-%COMP%]{color:var(--%NS%blue-highlight);font-weight:600}.skill-level[_ngcontent-%COMP%]{font-size:.75rem;font-family:var(--%NS%font-code);color:var(--%NS%text-dim);background:#071e32cc;border:1px solid var(--%NS%border-eng);padding:2px 8px;border-radius:4px}.timeline[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:24px;margin-bottom:80px}.timeline-item[_ngcontent-%COMP%]{padding:32px}.timeline-header[_ngcontent-%COMP%]{display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:16px;flex-wrap:wrap;gap:12px}.timeline-role[_ngcontent-%COMP%]{font-size:1.3rem;font-weight:700}.timeline-company[_ngcontent-%COMP%]{color:var(--%NS%blue-highlight);font-weight:600;font-size:1rem}.timeline-period[_ngcontent-%COMP%]{font-family:var(--%NS%font-code);font-size:.85rem;color:var(--%NS%text-dim);background:#071e32cc;border:1px solid var(--%NS%border-eng);padding:4px 12px;border-radius:6px}.timeline-bullets[_ngcontent-%COMP%]{padding-left:20px;color:var(--%NS%text-muted);display:flex;flex-direction:column;gap:8px;margin-bottom:20px;font-size:.95rem}.modal-overlay[_ngcontent-%COMP%]{position:fixed;inset:0;background:#030812d9;-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px);z-index:1000;display:flex;align-items:center;justify-content:center;padding:24px}.modal-content[_ngcontent-%COMP%]{width:100%;max-width:720px;padding:36px;position:relative;max-height:90vh;overflow-y:auto;border:1px solid var(--%NS%border-eng)}.close-btn[_ngcontent-%COMP%]{position:absolute;top:20px;right:20px;background:none;border:none;color:var(--%NS%text-muted);font-size:1.25rem;cursor:pointer}.close-btn[_ngcontent-%COMP%]:hover{color:#fff}.footer[_ngcontent-%COMP%]{padding:40px 0;border-top:1px solid var(--%NS%border-eng);margin-top:80px;text-align:center;color:var(--%NS%text-dim);font-family:var(--%NS%font-code);font-size:.85rem}@media(max-width:992px){.bento-flagship[_ngcontent-%COMP%], .bento-purple-card[_ngcontent-%COMP%], .bento-normal[_ngcontent-%COMP%]{grid-column:span 12}.skills-grid[_ngcontent-%COMP%]{grid-template-columns:1fr}.hero-title[_ngcontent-%COMP%]{font-size:2.5rem}}"]})};Pg(zh,ob).catch(n=>console.error(n));
