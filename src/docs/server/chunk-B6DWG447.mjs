import './polyfills.server.mjs';
import{$ as Ve,A as c,B as u,C as M,D as w,E as f,F as s,G as h,H as ce,I as de,J as he,K as pe,L as fe,M as z,N as me,P as ge,V as _e,W as ye,X as Z,Z as ve,_ as Ce,a as ie,aa as be,b as ne,ba as we,c as re,d as O,e as T,ea as De,f as oe,g as H,h as V,i as a,j as l,k as L,ka as Fe,l as W,m as b,n as $,o as se,p as ae,q as le,r as d,s as m,t as q,u as ue,v as x,w as A,x as p,y as P,z as N}from"./chunk-MQSA2B3Q.mjs";import{a as y,b as C}from"./chunk-VVCT4QZE.mjs";var D=[{id:0,link:" assets/logos/twitch.png",primary:"#9146FF",secondary:"#FFFFFF",others:["#000000"],category:"websites",name:"Twitch"},{id:1,link:" assets/logos/instagram.png",primary:"",secondary:"",others:["#8503FC","#FC00D9","#FF073F","#FFC500","#FFFFFF"],category:"websites",name:"Instagram"},{id:2,link:" assets/logos/youtube.png",primary:"#FF0000",secondary:"#FFFFFF",others:[],category:"websites",name:"YouTube"},{id:3,link:" assets/logos/google.png",primary:"",secondary:"",others:["#EA4335","#FBBC05","#34A853","#4285F4"],category:"websites",name:"Google"},{id:4,link:" assets/logos/facebook.png",primary:"#1877F2",secondary:"#FFFFFF",others:[],category:"websites",name:"Facebook"},{id:5,link:" assets/logos/wikipedia.png",primary:"#FAFAFA",secondary:"#848484",others:["#000000"],category:"websites",name:"Wikipedia"},{id:6,link:" assets/logos/linkedin.png",primary:"#0075B4",secondary:"#FFFFFF",others:[],category:"websites",name:"LinkedIn"},{id:7,link:" assets/logos/snapchat.png",primary:"#FFFC00",secondary:"#FFFFFF",others:["#000000"],category:"websites",name:"SnapChat"},{id:8,link:" assets/logos/tiktok.png",primary:"#000000",secondary:"#FFFFFF",others:["#F20544","#05F2DB"],category:"websites",name:"TikTok"},{id:9,link:" assets/logos/whatsapp.png",primary:"#35DB53",secondary:"#FAFAFA",others:[],category:"websites",name:"WhatsApp"},{id:9,link:" assets/logos/whatsapp.png",primary:"#35DB53",secondary:"#FAFAFA",others:[],category:"websites",name:"WhatsApp"},{id:10,link:" assets/logos/duolingo.png",primary:"#58CC02",secondary:"#89E219",others:["#FFC200","#F48000","#4B4B4B"],category:"websites",name:"Duolingo"},{id:11,link:" assets/logos/shopee.png",primary:"#FF6533",secondary:"#FFFFFF",others:["#F6402D"],category:"websites",name:"Shopee"},{id:12,link:" assets/logos/spotify.png",primary:"#1ED760",secondary:"#000000",others:[],category:"websites",name:"Spotify"},{id:13,link:" assets/logos/tinder.jpeg",primary:"#FC267E",secondary:"#FFFFFF",others:["#FF7755"],category:"websites",name:"Tinder"},{id:14,link:" assets/logos/telegram.png",primary:"#239CD7",secondary:"#FFFFFF",others:[],category:"websites",name:"Telegram"},{id:15,link:" assets/logos/chatgpt.png",primary:"#02A67E",secondary:"#000000",others:[],category:"websites",name:"ChatGPT"},{id:16,link:" assets/logos/powerpoint.png",primary:"#C23B23",secondary:"#F9F7F7",others:["#D15035","#FD8D6F","#EB6A4C"],category:"websites",name:"PowerPoint"},{id:17,link:" assets/logos/edge.png",primary:"",secondary:"",others:["#017AD5","#0F5196","#32C1E6","#36C752"],category:"websites",name:"Microsoft Edge"},{id:18,link:" assets/logos/lazada.png",primary:"#140D97",secondary:"",others:["#CC3C7B","#EF7622","#FFFFFF"],category:"websites",name:"Lazada"},{id:19,link:" assets/logos/discord.png",primary:"#5C6BC0",secondary:"#FFFFFF",others:[],category:"websites",name:"Discord"},{id:20,link:" assets/logos/minecraft.png",primary:"",secondary:"",others:["#5A9A30","#4F3624","#946A49"],category:"websites",name:"Minecraft"},{id:21,link:" assets/logos/among-us.png",primary:"#F01717",secondary:"#000000",others:["#75DBF4","#FFFFFF","#FCDD2A"],category:"websites",name:"Among Us"},{id:22,link:" assets/logos/reddit.png",primary:"#FF4500",secondary:"#FFFFFF",others:[],category:"websites",name:"Reddit"}];var xe=[],Y=[];function Ae(t,e,i){if(t===e)return 0;if(t.length===0)return e.length;if(e.length===0)return t.length;i&&(t=t.toLowerCase(),e=e.toLowerCase());let r=0;for(;r<t.length;)xe[r]=t.charCodeAt(r),Y[r]=++r;let n=0,o;for(;n<e.length;){let v=e.charCodeAt(n),g=-1,_=n++;for(o=_;++g<t.length;){let S=v===xe[g]?_:_+1;_=Y[g],o=_>o?S>o?o+1:S:S>_?_+1:S,Y[g]=o}}return o}var Pe=(()=>{let e=class e{constructor(r,n){this._renderer=r,this._elementRef=n,this.onChange=o=>{},this.onTouched=()=>{}}setProperty(r,n){this._renderer.setProperty(this._elementRef.nativeElement,r,n)}registerOnTouched(r){this.onTouched=r}registerOnChange(r){this.onChange=r}setDisabledState(r){this.setProperty("disabled",r)}};e.\u0275fac=function(n){return new(n||e)(m(q),m(L))},e.\u0275dir=V({type:e});let t=e;return t})(),Je=(()=>{let e=class e extends Pe{};e.\u0275fac=(()=>{let r;return function(o){return(r||(r=ae(e)))(o||e)}})(),e.\u0275dir=V({type:e,features:[x]});let t=e;return t})(),Ne=new b("");var et={provide:Ne,useExisting:$(()=>R),multi:!0};function tt(){let t=Z()?Z().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var it=new b(""),R=(()=>{let e=class e extends Pe{constructor(r,n,o){super(r,n),this._compositionMode=o,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!tt())}writeValue(r){let n=r??"";this.setProperty("value",n)}_handleInput(r){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(r)}_compositionStart(){this._composing=!0}_compositionEnd(r){this._composing=!1,this._compositionMode&&this.onChange(r)}};e.\u0275fac=function(n){return new(n||e)(m(q),m(L),m(it,8))},e.\u0275dir=V({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(n,o){n&1&&f("input",function(g){return o._handleInput(g.target.value)})("blur",function(){return o.onTouched()})("compositionstart",function(){return o._compositionStart()})("compositionend",function(g){return o._compositionEnd(g.target.value)})},features:[z([et]),x]});let t=e;return t})();var nt=new b(""),rt=new b("");function Ge(t){return t!=null}function Be(t){return ge(t)?ie(t):t}function je(t){let e={};return t.forEach(i=>{e=i!=null?y(y({},e),i):e}),Object.keys(e).length===0?null:e}function Re(t,e){return e.map(i=>i(t))}function ot(t){return!t.validate}function Ue(t){return t.map(e=>ot(e)?e:i=>e.validate(i))}function st(t){if(!t)return null;let e=t.filter(Ge);return e.length==0?null:function(i){return je(Re(i,e))}}function He(t){return t!=null?st(Ue(t)):null}function at(t){if(!t)return null;let e=t.filter(Ge);return e.length==0?null:function(i){let r=Re(i,e).map(Be);return re(r).pipe(ne(je))}}function Le(t){return t!=null?at(Ue(t)):null}function Me(t,e){return t===null?[e]:Array.isArray(t)?[...t,e]:[t,e]}function lt(t){return t._rawValidators}function ut(t){return t._rawAsyncValidators}function Q(t){return t?Array.isArray(t)?t:[t]:[]}function B(t,e){return Array.isArray(t)?t.includes(e):t===e}function Ee(t,e){let i=Q(e);return Q(t).forEach(n=>{B(i,n)||i.push(n)}),i}function Ie(t,e){return Q(e).filter(i=>!B(t,i))}var j=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=He(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=Le(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,i){return this.control?this.control.hasError(e,i):!1}getError(e,i){return this.control?this.control.getError(e,i):null}},X=class extends j{get formDirective(){return null}get path(){return null}},k=class extends j{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},K=class{constructor(e){this._cd=e}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},ct={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},pi=C(y({},ct),{"[class.ng-submitted]":"isSubmitted"}),We=(()=>{let e=class e extends K{constructor(r){super(r)}};e.\u0275fac=function(n){return new(n||e)(m(k,2))},e.\u0275dir=V({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(n,o){n&2&&N("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)},features:[x]});let t=e;return t})();var E="VALID",G="INVALID",F="PENDING",I="DISABLED";function dt(t){return(U(t)?t.validators:t)||null}function ht(t){return Array.isArray(t)?He(t):t||null}function pt(t,e){return(U(e)?e.asyncValidators:t)||null}function ft(t){return Array.isArray(t)?Le(t):t||null}function U(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}var J=class{constructor(e,i){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(i)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===E}get invalid(){return this.status===G}get pending(){return this.status==F}get disabled(){return this.status===I}get enabled(){return this.status!==I}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(Ee(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(Ee(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(Ie(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(Ie(e,this._rawAsyncValidators))}hasValidator(e){return B(this._rawValidators,e)}hasAsyncValidator(e){return B(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){this.touched=!0,this._parent&&!e.onlySelf&&this._parent.markAsTouched(e)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(e=>e.markAllAsTouched())}markAsUntouched(e={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(i=>{i.markAsUntouched({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}markAsDirty(e={}){this.pristine=!1,this._parent&&!e.onlySelf&&this._parent.markAsDirty(e)}markAsPristine(e={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(i=>{i.markAsPristine({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}markAsPending(e={}){this.status=F,e.emitEvent!==!1&&this.statusChanges.emit(this.status),this._parent&&!e.onlySelf&&this._parent.markAsPending(e)}disable(e={}){let i=this._parentMarkedDirty(e.onlySelf);this.status=I,this.errors=null,this._forEachChild(r=>{r.disable(C(y({},e),{onlySelf:!0}))}),this._updateValue(),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(C(y({},e),{skipPristineCheck:i})),this._onDisabledChange.forEach(r=>r(!0))}enable(e={}){let i=this._parentMarkedDirty(e.onlySelf);this.status=E,this._forEachChild(r=>{r.enable(C(y({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(C(y({},e),{skipPristineCheck:i})),this._onDisabledChange.forEach(r=>r(!1))}_updateAncestors(e){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===E||this.status===F)&&this._runAsyncValidator(e.emitEvent)),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(e)}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(i=>i._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?I:E}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e){if(this.asyncValidator){this.status=F,this._hasOwnPendingAsyncValidator=!0;let i=Be(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(r=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(r,{emitEvent:e})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(e,i={}){this.errors=e,this._updateControlsErrors(i.emitEvent!==!1)}get(e){let i=e;return i==null||(Array.isArray(i)||(i=i.split(".")),i.length===0)?null:i.reduce((r,n)=>r&&r._find(n),this)}getError(e,i){let r=i?this.get(i):this;return r&&r.errors?r.errors[e]:null}hasError(e,i){return!!this.getError(e,i)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(e)}_initObservables(){this.valueChanges=new O,this.statusChanges=new O}_calculateStatus(){return this._allControlsDisabled()?I:this.errors?G:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(F)?F:this._anyControlsHaveStatus(G)?G:E}_anyControlsHaveStatus(e){return this._anyControls(i=>i.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e={}){this.pristine=!this._anyControlsDirty(),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}_updateTouched(e={}){this.touched=this._anyControlsTouched(),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){U(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let i=this._parent&&this._parent.dirty;return!e&&!!i&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=ht(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=ft(this._rawAsyncValidators)}};var $e=new b("CallSetDisabledState",{providedIn:"root",factory:()=>ee}),ee="always";function mt(t,e){return[...e.path,t]}function gt(t,e,i=ee){yt(t,e),e.valueAccessor.writeValue(t.value),(t.disabled||i==="always")&&e.valueAccessor.setDisabledState?.(t.disabled),vt(t,e),Vt(t,e),Ct(t,e),_t(t,e)}function ke(t,e){t.forEach(i=>{i.registerOnValidatorChange&&i.registerOnValidatorChange(e)})}function _t(t,e){if(e.valueAccessor.setDisabledState){let i=r=>{e.valueAccessor.setDisabledState(r)};t.registerOnDisabledChange(i),e._registerOnDestroy(()=>{t._unregisterOnDisabledChange(i)})}}function yt(t,e){let i=lt(t);e.validator!==null?t.setValidators(Me(i,e.validator)):typeof i=="function"&&t.setValidators([i]);let r=ut(t);e.asyncValidator!==null?t.setAsyncValidators(Me(r,e.asyncValidator)):typeof r=="function"&&t.setAsyncValidators([r]);let n=()=>t.updateValueAndValidity();ke(e._rawValidators,n),ke(e._rawAsyncValidators,n)}function vt(t,e){e.valueAccessor.registerOnChange(i=>{t._pendingValue=i,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&qe(t,e)})}function Ct(t,e){e.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&qe(t,e),t.updateOn!=="submit"&&t.markAsTouched()})}function qe(t,e){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function Vt(t,e){let i=(r,n)=>{e.valueAccessor.writeValue(r),n&&e.viewToModelUpdate(r)};t.registerOnChange(i),e._registerOnDestroy(()=>{t._unregisterOnChange(i)})}function bt(t,e){if(!t.hasOwnProperty("model"))return!1;let i=t.model;return i.isFirstChange()?!0:!Object.is(e,i.currentValue)}function wt(t){return Object.getPrototypeOf(t.constructor)===Je}function Dt(t,e){if(!e)return null;Array.isArray(e);let i,r,n;return e.forEach(o=>{o.constructor===R?i=o:wt(o)?r=o:n=o}),n||r||i||null}function Se(t,e){let i=t.indexOf(e);i>-1&&t.splice(i,1)}function Oe(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var Ft=class extends J{constructor(e=null,i,r){super(dt(i),pt(r,i)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(i),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),U(i)&&(i.nonNullable||i.initialValueIsDefault)&&(Oe(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,i={}){this.value=this._pendingValue=e,this._onChange.length&&i.emitModelToViewChange!==!1&&this._onChange.forEach(r=>r(this.value,i.emitViewToModelChange!==!1)),this.updateValueAndValidity(i)}patchValue(e,i={}){this.setValue(e,i)}reset(e=this.defaultValue,i={}){this._applyFormState(e),this.markAsPristine(i),this.markAsUntouched(i),this.setValue(this.value,i),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){Se(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){Se(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){Oe(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var xt={provide:k,useExisting:$(()=>te)},Te=Promise.resolve(),te=(()=>{let e=class e extends k{constructor(r,n,o,v,g,_){super(),this._changeDetectorRef=g,this.callSetDisabledState=_,this.control=new Ft,this._registered=!1,this.name="",this.update=new O,this._parent=r,this._setValidators(n),this._setAsyncValidators(o),this.valueAccessor=Dt(this,v)}ngOnChanges(r){if(this._checkForErrors(),!this._registered||"name"in r){if(this._registered&&(this._checkName(),this.formDirective)){let n=r.name.previousValue;this.formDirective.removeControl({name:n,path:this._getPath(n)})}this._setUpControl()}"isDisabled"in r&&this._updateDisabled(r),bt(r,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(r){this.viewModel=r,this.update.emit(r)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){gt(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(r){Te.then(()=>{this.control.setValue(r,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(r){let n=r.isDisabled.currentValue,o=n!==0&&_e(n);Te.then(()=>{o&&!this.control.disabled?this.control.disable():!o&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(r){return this._parent?mt(r,this._parent):[r]}};e.\u0275fac=function(n){return new(n||e)(m(X,9),m(nt,10),m(rt,10),m(Ne,10),m(ue,8),m($e,8))},e.\u0275dir=V({type:e,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[T.None,"disabled","isDisabled"],model:[T.None,"ngModel","model"],options:[T.None,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[z([xt]),x,se]});let t=e;return t})();var At=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=H({type:e}),e.\u0275inj=W({});let t=e;return t})();var ze=(()=>{let e=class e{static withConfig(r){return{ngModule:e,providers:[{provide:$e,useValue:r.callSetDisabledState??ee}]}}};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=H({type:e}),e.\u0275inj=W({imports:[At]});let t=e;return t})();function Et(t,e){if(t&1){let i=w();c(0,"div",5)(1,"p"),h(2,"Choose a theme to get started"),u(),c(3,"div",6)(4,"button",7),f("click",function(){a(i);let n=s();return n.selectTheme("websites"),l(n.goToNextPage())})("mouseenter",function(){a(i);let n=s();return l(n.onMouseEnter())})("mouseleave",function(){a(i);let n=s();return l(n.onMouseLeave())}),h(5,"Websites"),u(),c(6,"button",8),f("click",function(){a(i);let n=s();return n.selectTheme("companies"),l(n.goToNextPage())})("mouseenter",function(){a(i);let n=s();return l(n.onMouseEnter())})("mouseleave",function(){a(i);let n=s();return l(n.onMouseLeave())}),h(7,"Famous Companies"),u(),c(8,"button",8),f("click",function(){a(i);let n=s();return n.selectTheme("fnb"),l(n.goToNextPage())})("mouseenter",function(){a(i);let n=s();return l(n.onMouseEnter())})("mouseleave",function(){a(i);let n=s();return l(n.onMouseLeave())}),h(9,"F&B"),u(),c(10,"button",8),f("click",function(){a(i);let n=s();return n.selectTheme("football"),l(n.goToNextPage())})("mouseenter",function(){a(i);let n=s();return l(n.onMouseEnter())})("mouseleave",function(){a(i);let n=s();return l(n.onMouseLeave())}),h(11,"Football Club Logos"),u()()()}}function It(t,e){if(t&1){let i=w();c(0,"div",9)(1,"p"),h(2,"Select your difficulty!"),u(),c(3,"div",10)(4,"button",7),f("click",function(){a(i);let n=s();return n.selectDifficulty(0),l(n.goToGame())})("mouseenter",function(){a(i);let n=s();return l(n.onMouseEnter())})("mouseleave",function(){a(i);let n=s();return l(n.onMouseLeave())}),h(5,"Easy"),u(),c(6,"button",7),f("click",function(){a(i);let n=s();return n.selectDifficulty(1),l(n.goToGame())})("mouseenter",function(){a(i);let n=s();return l(n.onMouseEnter())})("mouseleave",function(){a(i);let n=s();return l(n.onMouseLeave())}),h(7,"Hard"),u(),c(8,"button",7),f("click",function(){a(i);let n=s();return n.selectDifficulty(2),l(n.goToGame())})("mouseenter",function(){a(i);let n=s();return l(n.onMouseEnter())})("mouseleave",function(){a(i);let n=s();return l(n.onMouseLeave())}),h(9,"\u{1F480}\u{1F480}\u{1F480}"),u(),c(10,"button",7),f("click",function(){a(i);let n=s();return l(n.goToHomePage())})("mouseenter",function(){a(i);let n=s();return l(n.onMouseEnter())})("mouseleave",function(){a(i);let n=s();return l(n.onMouseLeave())}),h(11,"Back"),u()()()}}function kt(t,e){if(t&1&&(c(0,"div",23)(1,"p",24),h(2,"primary"),u()()),t&2){let i=s(3);P("background-color",i.primary)}}function St(t,e){if(t&1&&(c(0,"div",25)(1,"p",24),h(2,"secondary"),u()()),t&2){let i=s(3);P("background-color",i.secondary)}}function Ot(t,e){if(t&1&&M(0,"div",26),t&2){let i=e.$implicit;P("background-color",i)}}function Tt(t,e){if(t&1&&(c(0,"div",19),A(1,kt,3,2,"div",20)(2,St,3,2,"div",21)(3,Ot,1,2,"div",22),u()),t&2){let i=s(2);d(),p("ngIf",i.primary.includes("#")),d(),p("ngIf",i.secondary.includes("#")),d(),p("ngForOf",i.others)}}function Pt(t,e){if(t&1&&(c(0,"div"),M(1,"img",27),u()),t&2){let i=s(2);d(),p("src",i.answersrc,le)}}function Nt(t,e){if(t&1&&M(0,"span",30),t&2){let i=e.$implicit;N("empty",i.empty)}}function Gt(t,e){if(t&1&&(c(0,"div",28),A(1,Nt,1,2,"span",29),u()),t&2){let i=s(2);d(),p("ngForOf",i.hearts)}}function Bt(t,e){if(t&1){let i=w();c(0,"div",31)(1,"input",32),fe("ngModelChange",function(n){a(i);let o=s(2);return pe(o.inputValue,n)||(o.inputValue=n),l(n)}),f("keydown.enter",function(){a(i);let n=s(2);return l(n.checkSimilarity())}),u()()}if(t&2){let i=s(2);d(),he("ngModel",i.inputValue)}}function jt(t,e){if(t&1){let i=w();c(0,"div",33)(1,"button",7),f("click",function(){a(i);let n=s(2);return l(n.answered!==5?n.goToGame():n.finishGame())})("mouseenter",function(){a(i);let n=s(2);return l(n.onMouseEnter())})("mouseleave",function(){a(i);let n=s(2);return l(n.onMouseLeave())}),h(2,"Oke"),u()()}}function Rt(t,e){if(t&1){let i=w();c(0,"div",34)(1,"p"),h(2,"Wow!"),u(),c(3,"p"),h(4),u(),c(5,"button",7),f("click",function(){a(i);let n=s(2);return l(n.refreshGame())})("mouseenter",function(){a(i);let n=s(2);return l(n.onMouseEnter())})("mouseleave",function(){a(i);let n=s(2);return l(n.onMouseLeave())}),h(6,"Noted with thanks"),u()()}if(t&2){let i=s(2);d(4),ce("You got ",i.score,"/5!")}}function Ut(t,e){if(t&1&&(c(0,"div",11)(1,"p",12),h(2),u(),A(3,Tt,4,3,"div",13)(4,Pt,2,1,"div",14)(5,Gt,2,1,"div",15)(6,Bt,2,1,"div",16)(7,jt,3,0,"div",17)(8,Rt,7,1,"div",18),u()),t&2){let i=s();d(2),de("",i.promptText,"",i.answerText,""),d(),p("ngIf",i.showColourRack),d(),p("ngIf",i.showAnswerImg),d(),p("ngIf",i.showTextBox),d(),p("ngIf",i.showTextBox),d(),p("ngIf",i.showAnswerImg),d(),p("ngIf",i.showResult)}}var Ze=(()=>{let e=class e{constructor(){this.title="angular-material-app",this.isHovered=!1,this.selection="-",this.difficulty=-1,this.hearts=Array(5).fill({empty:!1}),this.picked=[],this.score=0,this.answered=0,this.randomIndex=-1,this.inputValue="",this.showNextPage=!1,this.goGame=!1,this.answersrc="",this.showColourRack=!0,this.showTextBox=!0,this.showAnswerImg=!1,this.showResult=!1,this.answerText="",this.promptText="What is this logo?",this.primary="",this.secondary="",this.others=[]}selectTheme(r){this.selection=r}selectDifficulty(r){this.difficulty=r}goToNextPage(){this.showNextPage=!0}goToHomePage(){this.showNextPage=!1}getColours(){this.promptText="What is this logo?",this.answerText="";function r(o){return Math.floor(Math.random()*o)}let n;console.log(this.picked),console.log(this.picked.length);do this.randomIndex=r(D.length),n=D[this.randomIndex];while(n.category!==this.selection||this.isAlreadyPicked(this.randomIndex));this.picked.push({empty:n.id}),this.difficulty==0?(this.primary=n.primary,this.secondary=n.secondary,this.others=n.others):this.difficulty==1?(this.primary="",this.secondary="",this.others=n.others,n.primary.includes("#")&&this.others.push(n.primary),n.secondary.includes("#")&&this.others.push(n.secondary),this.shuffleArray(this.others)):this.difficulty==2&&(this.hearts.splice(3),this.primary="",this.secondary="",this.others=n.others,n.primary.includes("#")&&this.others.push(n.primary),n.secondary.includes("#")&&this.others.push(n.secondary),this.shuffleArray(this.others),this.others.length>3&&this.others.splice(3)),this.answersrc=n.link}isAlreadyPicked(r){return this.picked.some(n=>n.empty===r)}shuffleArray(r){for(let n=r.length-1;n>0;n--){let o=Math.floor(Math.random()*(n+1));[r[n],r[o]]=[r[o],r[n]]}}checkSimilarity(){Ae(this.inputValue,D[this.randomIndex].name)<=2?(console.log("Input is similar."),this.score+=1,this.showColourRack=!1,this.showTextBox=!1,this.showAnswerImg=!0,this.promptText="",this.answerText="The colour palette is for "+D[this.randomIndex].name):(console.log("Input is not similar."),this.hearts=this.hearts.slice(0,this.hearts.length-1),this.hearts.length==0&&(this.showColourRack=!1,this.showTextBox=!1,this.showAnswerImg=!0,this.promptText="",this.answerText="The colour palette is for "+D[this.randomIndex].name+"!")),this.answered==5&&this.finishGame(),this.inputValue=""}refreshGame(){this.selection="-",this.difficulty=-1,this.hearts=Array(5).fill({empty:!1}),this.picked=[],this.score=0,this.answered=5,this.randomIndex=-1,this.inputValue="",this.showNextPage=!1,this.goGame=!1,this.answersrc="",this.showColourRack=!0,this.showTextBox=!0,this.showAnswerImg=!1,this.answerText="",this.promptText="What is this logo?"}goToGame(){this.hearts=Array(5).fill({empty:!1}),this.answered+=1,this.showColourRack=!0,this.goGame=!0,this.showTextBox=!0,this.showAnswerImg=!1,this.showResult=!1,this.promptText="What is this logo?",this.answerText="",setTimeout(()=>{this.getColours()})}finishGame(){this.showResult=!0,this.showAnswerImg=!1,this.showTextBox=!1}onMouseEnter(){this.isHovered=!0}onMouseLeave(){this.isHovered=!1}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=oe({type:e,selectors:[["app-root"]],standalone:!0,features:[me],decls:5,vars:3,consts:[[1,"logo-main"],["src","assets/images/logo.png",1,"logo-img"],["class","body-main",4,"ngIf"],["class","next-page",4,"ngIf"],["class","game",4,"ngIf"],[1,"body-main"],[1,"start-buttons"],[3,"click","mouseenter","mouseleave"],["disabled","",3,"click","mouseenter","mouseleave"],[1,"next-page"],[1,"difficulty-buttons"],[1,"game"],[1,"what-is"],["class","colour-rack",4,"ngIf"],[4,"ngIf"],["class","hearts",4,"ngIf"],["class","text-box",4,"ngIf"],["class","nextQuestion",4,"ngIf"],["class","finishGame",4,"ngIf"],[1,"colour-rack"],["class","primary-color",3,"background-color",4,"ngIf"],["class","secondary-color",3,"background-color",4,"ngIf"],["class","other-color",3,"background-color",4,"ngFor","ngForOf"],[1,"primary-color"],[1,"col-clue"],[1,"secondary-color"],[1,"other-color"],[1,"answer-img",3,"src"],[1,"hearts"],["class","heart",3,"empty",4,"ngFor","ngForOf"],[1,"heart"],[1,"text-box"],["type","text",1,"answer-input",3,"ngModel","ngModelChange","keydown.enter"],[1,"nextQuestion"],[1,"finishGame"]],template:function(n,o){n&1&&(c(0,"div",0),M(1,"img",1),u(),A(2,Et,12,0,"div",2)(3,It,12,0,"div",3)(4,Ut,9,8,"div",4)),n&2&&(d(2),p("ngIf",!o.showNextPage&&!o.goGame),d(),p("ngIf",o.showNextPage&&!o.goGame),d(),p("ngIf",o.showNextPage&&o.goGame))},dependencies:[Ve,ve,Ce,ze,R,We,te],styles:[".logo-main[_ngcontent-%COMP%], .body-main[_ngcontent-%COMP%], .next-page[_ngcontent-%COMP%], .game[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center}.logo-img[_ngcontent-%COMP%]{max-height:128px}h1[_ngcontent-%COMP%]{font-family:Anta;font-size:64px}p[_ngcontent-%COMP%]{font-family:Helvetica;font-size:32px}.start-buttons[_ngcontent-%COMP%], .difficulty-buttons[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;height:350px;justify-content:space-around}button[_ngcontent-%COMP%]{width:250px;display:inline-block;outline:none;cursor:pointer;font-size:16px;line-height:20px;font-weight:600;border-radius:8px;padding:13px 23px;border:1px solid #222222;transition:box-shadow .2s ease 0s,-ms-transform .1s ease 0s,-webkit-transform .1s ease 0s,transform .1s ease 0s;background:#f5f5f5;color:#222;font-family:Helvetica}button[_ngcontent-%COMP%]:hover{border-color:#000;background:#e7f7f7}button.transition[_ngcontent-%COMP%]{transition:background-color .8s ease}.colour-rack[_ngcontent-%COMP%]{width:400px;display:flex;flex-direction:row;justify-content:space-evenly;align-items:center;justify-items:center;margin-top:20px;margin-bottom:60px}.primary-color[_ngcontent-%COMP%], .secondary-color[_ngcontent-%COMP%], .other-color[_ngcontent-%COMP%]{font-family:Helvetica;width:50px;height:50px;border:2px solid #040404;text-align:center;display:flex;align-items:center;justify-content:center}.col-clue[_ngcontent-%COMP%]{font-size:16px;display:flex;position:relative;top:50px}.answer-input[_ngcontent-%COMP%]{font-family:Helvetica;width:100%;color:#24232a;font-size:16px;line-height:24px;min-height:36px;border-radius:4px;border:2px solid transparent;box-shadow:#0000001f 0 1px 3px,#0000003d 0 1px 2px;background:#fbfbfb;transition:all .1s ease 0s}.answer-input[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:focus{border:2px solid rgb(124,138,255)}.hearts[_ngcontent-%COMP%]{display:flex;flex-direction:row;width:250px;justify-items:left;padding-bottom:40px}.heart[_ngcontent-%COMP%]{display:block;--c: red;width:40px;height:40px;margin-right:10px;aspect-ratio:1;background:radial-gradient(circle at 60% 65%,var(--c) 64%,#0000 65%) top left/50% 50%,radial-gradient(circle at 40% 65%,var(--c) 64%,#0000 65%) top right/50% 50%,conic-gradient(from -45deg at 50% 85.5%,var(--c) 90deg,#0000 0) bottom/100% 50%;background-repeat:no-repeat}.answer-img[_ngcontent-%COMP%]{max-height:180px}.nextQuestion[_ngcontent-%COMP%]{padding-top:20px}button[_ngcontent-%COMP%]:disabled{opacity:.5;cursor:not-allowed}"]});let t=e;return t})();var Ye=[];var Qe={providers:[Fe(Ye),we()]};var Ht={providers:[De()]},Xe=ye(Qe,Ht);var Lt=()=>be(Ze,Xe),Ti=Lt;export{Ti as a};
