import{B as P,F as k,R as x,j as $,G as T,H as B,o as d,c as b,a as m,n as C,I as E,m as f,v as I,t as V,d as O,y as w,J as R,l,w as u,z as r,k as N,K as j}from"./index-D50FFBti.js";import{s as g,a as z}from"./index-CLLq3gts.js";import{u as M}from"./campaigns-DFH-nRZa.js";import"./index-ETHR17tF.js";import"./index-e7WAjRi9.js";import"./index-CCpiHejS.js";import"./index-Cpde-KwR.js";var U=function(n){var t=n.dt;return`
.p-togglebutton {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    color: `.concat(t("togglebutton.color"),`;
    background: `).concat(t("togglebutton.background"),`;
    border: 1px solid `).concat(t("togglebutton.border.color"),`;
    padding: `).concat(t("togglebutton.padding"),`;
    font-size: 1rem;
    font-family: inherit;
    font-feature-settings: inherit;
    transition: background `).concat(t("togglebutton.transition.duration"),", color ").concat(t("togglebutton.transition.duration"),", border-color ").concat(t("togglebutton.transition.duration"),`,
        outline-color `).concat(t("togglebutton.transition.duration"),", box-shadow ").concat(t("togglebutton.transition.duration"),`;
    border-radius: `).concat(t("togglebutton.border.radius"),`;
    outline-color: transparent;
    font-weight: `).concat(t("togglebutton.font.weight"),`;
}

.p-togglebutton-content {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: `).concat(t("togglebutton.gap"),`;
}

.p-togglebutton-label,
.p-togglebutton-icon {
    position: relative;
    transition: none;
}

.p-togglebutton::before {
    content: "";
    background: transparent;
    transition: background `).concat(t("togglebutton.transition.duration"),", color ").concat(t("togglebutton.transition.duration"),", border-color ").concat(t("togglebutton.transition.duration"),`,
            outline-color `).concat(t("togglebutton.transition.duration"),", box-shadow ").concat(t("togglebutton.transition.duration"),`;
    position: absolute;
    left: `).concat(t("togglebutton.content.left"),`;
    top: `).concat(t("togglebutton.content.top"),`;
    width: calc(100% - calc(2 *  `).concat(t("togglebutton.content.left"),`));
    height: calc(100% - calc(2 *  `).concat(t("togglebutton.content.top"),`));
    border-radius: `).concat(t("togglebutton.border.radius"),`;
}

.p-togglebutton.p-togglebutton-checked::before {
    background: `).concat(t("togglebutton.content.checked.background"),`;
    box-shadow: `).concat(t("togglebutton.content.checked.shadow"),`;
}

.p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover {
    background: `).concat(t("togglebutton.hover.background"),`;
    color: `).concat(t("togglebutton.hover.color"),`;
}

.p-togglebutton.p-togglebutton-checked {
    background: `).concat(t("togglebutton.checked.background"),`;
    border-color: `).concat(t("togglebutton.checked.border.color"),`;
    color: `).concat(t("togglebutton.checked.color"),`;
}

.p-togglebutton:focus-visible {
    box-shadow: `).concat(t("togglebutton.focus.ring.shadow"),`;
    outline: `).concat(t("togglebutton.focus.ring.width")," ").concat(t("togglebutton.focus.ring.style")," ").concat(t("togglebutton.focus.ring.color"),`;
    outline-offset: `).concat(t("togglebutton.focus.ring.offset"),`;
}

.p-togglebutton.p-invalid {
    border-color: `).concat(t("togglebutton.invalid.border.color"),`;
}

.p-togglebutton:disabled {
    opacity: 1;
    cursor: default;
    background: `).concat(t("togglebutton.disabled.background"),`;
    border-color: `).concat(t("togglebutton.disabled.border.color"),`;
    color: `).concat(t("togglebutton.disabled.color"),`;
}

.p-togglebutton-icon {
    color: `).concat(t("togglebutton.icon.color"),`;
}

.p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover .p-togglebutton-icon {
    color: `).concat(t("togglebutton.icon.hover.color"),`;
}

.p-togglebutton.p-togglebutton-checked .p-togglebutton-icon {
    color: `).concat(t("togglebutton.icon.checked.color"),`;
}

.p-togglebutton:disabled .p-togglebutton-icon {
    color: `).concat(t("togglebutton.icon.disabled.color"),`;
}
`)},A={root:function(n){var t=n.instance,i=n.props;return["p-togglebutton p-component",{"p-togglebutton-checked":t.active,"p-invalid":i.invalid}]},content:"p-togglebutton-content",icon:"p-togglebutton-icon",label:"p-togglebutton-label"},D=P.extend({name:"togglebutton",theme:U,classes:A}),F={name:"BaseToggleButton",extends:$,props:{modelValue:Boolean,onIcon:String,offIcon:String,onLabel:{type:String,default:"Yes"},offLabel:{type:String,default:"No"},iconPos:{type:String,default:"left"},invalid:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},tabindex:{type:Number,default:null},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:D,provide:function(){return{$pcToggleButton:this,$parentInstance:this}}},S={name:"ToggleButton",extends:F,inheritAttrs:!1,emits:["update:modelValue","change"],methods:{getPTOptions:function(n){var t=n==="root"?this.ptmi:this.ptm;return t(n,{context:{active:this.active,disabled:this.disabled}})},onChange:function(n){!this.disabled&&!this.readonly&&(this.$emit("update:modelValue",!this.modelValue),this.$emit("change",n))}},computed:{active:function(){return this.modelValue===!0},hasLabel:function(){return k(this.onLabel)&&k(this.offLabel)},label:function(){return this.hasLabel?this.modelValue?this.onLabel:this.offLabel:"&nbsp;"}},directives:{ripple:x}},G=["tabindex","disabled","aria-pressed","aria-labelledby","data-p-checked","data-p-disabled"];function H(o,n,t,i,h,c){var v=T("ripple");return B((d(),b("button",f({type:"button",class:o.cx("root"),tabindex:o.tabindex,disabled:o.disabled,"aria-pressed":o.modelValue,onClick:n[0]||(n[0]=function(){return c.onChange&&c.onChange.apply(c,arguments)})},c.getPTOptions("root"),{"aria-labelledby":o.ariaLabelledby,"data-p-checked":c.active,"data-p-disabled":o.disabled}),[m("span",f({class:o.cx("content")},c.getPTOptions("content")),[C(o.$slots,"default",{},function(){return[C(o.$slots,"icon",{value:o.modelValue,class:E(o.cx("icon"))},function(){return[o.onIcon||o.offIcon?(d(),b("span",f({key:0,class:[o.cx("icon"),o.modelValue?o.onIcon:o.offIcon]},c.getPTOptions("icon")),null,16)):I("",!0)]}),m("span",f({class:o.cx("label")},c.getPTOptions("label")),V(c.label),17)]})],16)],16,G)),[[v]])}S.render=H;const J={class:"card"},K={class:"flex flex-wrap justify-content-end gap-2"},W={key:0},Y=["onUpdate:modelValue","onBlur"],q=["onClick"],at=O({__name:"CampaignsList",setup(o){const n=M(),t=w([]),i=w({limit:10,totalRecords:0,currentPage:1});R(async()=>{await h()});const h=async()=>{await n.getCampaigns(i.value.limit,i.value.currentPage),t.value=n.campaigns.map(a=>({...a,isEditing:!1})),i.value.totalRecords=n.pagination.totalRecords},c=a=>{i.value.currentPage=Math.floor(a.first/a.rows)+1,i.value.limit=a.rows,h()},v=a=>{n.activateCampaign(a)},_=a=>{n.inactivateCampaign(a)},L=(a,y)=>{y?v(a):_(a)};return(a,y)=>{const p=N("Button");return d(),b("div",J,[l(r(z),{value:t.value,tableStyle:"min-width: 50rem",paginator:!0,rows:i.value.limit,totalRecords:i.value.totalRecords,first:(i.value.currentPage-1)*i.value.limit,onPage:c},{header:u(()=>[m("div",K,[l(p,{as:"router-link",to:"/campaigns/create",label:"Create campaign",class:"flex items-center"})])]),default:u(()=>[l(r(g),{field:"name",header:"Name"}),l(r(g),{header:"Activity"},{body:u(({data:e})=>[l(r(S),{modelValue:e.is_active,"onUpdate:modelValue":s=>e.is_active=s,onLabel:"On",offLabel:"Off",onChange:s=>L(e.id,e.is_active)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),_:1}),l(r(g),{field:"moderation_status",header:"Moderation Status"}),l(r(g),{field:"condition_status",header:"Work Status"}),l(r(g),{header:"Bid"},{body:u(({data:e})=>[e.isEditing?(d(),b("div",W,[B(m("input",{type:"number","onUpdate:modelValue":s=>e.bid=s,onBlur:s=>e.isEditing=!1,class:"p-inputtext p-component",style:{width:"80px"}},null,40,Y),[[j,e.bid]]),l(p,{label:"Save",size:"small",onClick:s=>e.isEditing=!1,class:"ml-2"},null,8,["onClick"])])):(d(),b("div",{key:1,onClick:s=>e.isEditing=!0,style:{cursor:"pointer",color:"blue"}},V(e.bid),9,q))]),_:1}),l(r(g),{header:"Edit"},{body:u(({data:e})=>[l(p,{as:"router-link",to:`/campaigns/${e.id}`,label:"Edit"},null,8,["to"])]),_:1}),l(r(g),{header:"Creatives"},{body:u(({data:e})=>[l(p,{as:"router-link",to:`/campaigns/${e.id}/creatives`,label:"Creatives"},null,8,["to"])]),_:1})]),_:1},8,["value","rows","totalRecords","first"])])}}});export{at as default};
