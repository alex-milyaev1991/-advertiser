import{B as v,f as y,o as b,c as m,m as h,j as g,aL as x,aM as _,F as p,aN as S}from"./index-D50FFBti.js";var k=function(n){var t=n.dt;return`
.p-inputtext {
    font-family: inherit;
    font-feature-settings: inherit;
    font-size: 1rem;
    color: `.concat(t("inputtext.color"),`;
    background: `).concat(t("inputtext.background"),`;
    padding: `).concat(t("inputtext.padding.y")," ").concat(t("inputtext.padding.x"),`;
    border: 1px solid `).concat(t("inputtext.border.color"),`;
    transition: background `).concat(t("inputtext.transition.duration"),", color ").concat(t("inputtext.transition.duration"),", border-color ").concat(t("inputtext.transition.duration"),", outline-color ").concat(t("inputtext.transition.duration"),", box-shadow ").concat(t("inputtext.transition.duration"),`;
    appearance: none;
    border-radius: `).concat(t("inputtext.border.radius"),`;
    outline-color: transparent;
    box-shadow: `).concat(t("inputtext.shadow"),`;
}

.p-inputtext:enabled:hover {
    border-color: `).concat(t("inputtext.hover.border.color"),`;
}

.p-inputtext:enabled:focus {
    border-color: `).concat(t("inputtext.focus.border.color"),`;
    box-shadow: `).concat(t("inputtext.focus.ring.shadow"),`;
    outline: `).concat(t("inputtext.focus.ring.width")," ").concat(t("inputtext.focus.ring.style")," ").concat(t("inputtext.focus.ring.color"),`;
    outline-offset: `).concat(t("inputtext.focus.ring.offset"),`;
}

.p-inputtext.p-invalid {
    border-color: `).concat(t("inputtext.invalid.border.color"),`;
}

.p-inputtext.p-variant-filled {
    background: `).concat(t("inputtext.filled.background"),`;
}

.p-inputtext.p-variant-filled:enabled:hover {
    background: `).concat(t("inputtext.filled.hover.background"),`;
}

.p-inputtext.p-variant-filled:enabled:focus {
    background: `).concat(t("inputtext.filled.focus.background"),`;
}

.p-inputtext:disabled {
    opacity: 1;
    background: `).concat(t("inputtext.disabled.background"),`;
    color: `).concat(t("inputtext.disabled.color"),`;
}

.p-inputtext::placeholder {
    color: `).concat(t("inputtext.placeholder.color"),`;
}

.p-inputtext-sm {
    font-size: `).concat(t("inputtext.sm.font.size"),`;
    padding: `).concat(t("inputtext.sm.padding.y")," ").concat(t("inputtext.sm.padding.x"),`;
}

.p-inputtext-lg {
    font-size: `).concat(t("inputtext.lg.font.size"),`;
    padding: `).concat(t("inputtext.lg.padding.y")," ").concat(t("inputtext.lg.padding.x"),`;
}

.p-inputtext-fluid {
    width: 100%;
}
`)},P={root:function(n){var t=n.instance,r=n.props;return["p-inputtext p-component",{"p-filled":t.filled,"p-inputtext-sm":r.size==="small","p-inputtext-lg":r.size==="large","p-invalid":r.invalid,"p-variant-filled":r.variant?r.variant==="filled":t.$primevue.config.inputStyle==="filled"||t.$primevue.config.inputVariant==="filled","p-inputtext-fluid":t.hasFluid}]}},w=v.extend({name:"inputtext",theme:k,classes:P}),$={name:"BaseInputText",extends:g,props:{modelValue:null,size:{type:String,default:null},invalid:{type:Boolean,default:!1},variant:{type:String,default:null},fluid:{type:Boolean,default:null}},style:w,provide:function(){return{$pcInputText:this,$parentInstance:this}}},C={name:"InputText",extends:$,inheritAttrs:!1,emits:["update:modelValue"],inject:{$pcFluid:{default:null}},methods:{getPTOptions:function(n){var t=n==="root"?this.ptmi:this.ptm;return t(n,{context:{filled:this.filled,disabled:this.$attrs.disabled||this.$attrs.disabled===""}})},onInput:function(n){this.$emit("update:modelValue",n.target.value)}},computed:{filled:function(){return this.modelValue!=null&&this.modelValue.toString().length>0},hasFluid:function(){return y(this.fluid)?!!this.$pcFluid:this.fluid}}},O=["value","aria-invalid"];function T(e,n,t,r,o,i){return b(),m("input",h({type:"text",class:e.cx("root"),value:e.modelValue,"aria-invalid":e.invalid||void 0,onInput:n[0]||(n[0]=function(){return i.onInput&&i.onInput.apply(i,arguments)})},i.getPTOptions("root")),null,16,O)}C.render=T;function l(e){"@babel/helpers - typeof";return l=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},l(e)}function j(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function A(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,E(r.key),r)}}function I(e,n,t){return n&&A(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function E(e){var n=B(e,"string");return l(n)=="symbol"?n:n+""}function B(e,n){if(l(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(l(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var W=function(){function e(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:function(){};j(this,e),this.element=n,this.listener=t}return I(e,[{key:"bindScrollListener",value:function(){this.scrollableParents=_(this.element);for(var t=0;t<this.scrollableParents.length;t++)this.scrollableParents[t].addEventListener("scroll",this.listener)}},{key:"unbindScrollListener",value:function(){if(this.scrollableParents)for(var t=0;t<this.scrollableParents.length;t++)this.scrollableParents[t].removeEventListener("scroll",this.listener)}},{key:"destroy",value:function(){this.unbindScrollListener(),this.element=null,this.listener=null,this.scrollableParents=null}}])}();function u(e){"@babel/helpers - typeof";return u=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},u(e)}function L(e){return M(e)||F(e)||V(e)||z()}function z(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function V(e,n){if(e){if(typeof e=="string")return s(e,n);var t={}.toString.call(e).slice(8,-1);return t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set"?Array.from(e):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?s(e,n):void 0}}function F(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function M(e){if(Array.isArray(e))return s(e)}function s(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=Array(n);t<n;t++)r[t]=e[t];return r}function H(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function U(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,f(r.key),r)}}function K(e,n,t){return n&&U(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function d(e,n,t){return(n=f(n))in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function f(e){var n=N(e,"string");return u(n)=="symbol"?n:n+""}function N(e,n){if(u(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(u(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var Z=function(){function e(n){var t=n.init,r=n.type;H(this,e),d(this,"helpers",void 0),d(this,"type",void 0),this.helpers=new Set(t),this.type=r}return K(e,[{key:"add",value:function(t){this.helpers.add(t)}},{key:"update",value:function(){}},{key:"delete",value:function(t){this.helpers.delete(t)}},{key:"clear",value:function(){this.helpers.clear()}},{key:"get",value:function(t,r){var o=this._get(t,r),i=o?this._recursive(L(this.helpers),o):null;return p(i)?i:null}},{key:"_isMatched",value:function(t,r){var o,i=t==null?void 0:t.parent;return(i==null||(o=i.vnode)===null||o===void 0?void 0:o.key)===r||i&&this._isMatched(i,r)||!1}},{key:"_get",value:function(t,r){var o,i;return((o=r||(t==null?void 0:t.$slots))===null||o===void 0||(i=o.default)===null||i===void 0?void 0:i.call(o))||null}},{key:"_recursive",value:function(){var t=this,r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],i=[];return o.forEach(function(a){a.children instanceof Array?i=i.concat(t._recursive(i,a.children)):a.type.name===t.type?i.push(a):p(a.key)&&(i=i.concat(r.filter(function(c){return t._isMatched(c,a.key)}).map(function(c){return c.vnode})))}),i}}])}();function D(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"pv_id_";return x(e)}function G(e,n){if(e){var t=e.props;if(t){var r=n.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),o=Object.prototype.hasOwnProperty.call(t,r)?r:n;return e.type.extends.props[n].type===Boolean&&t[o]===""?!0:t[o]}}return null}var J=S();export{W as C,J as O,D as U,Z as _,G as g,C as s};
