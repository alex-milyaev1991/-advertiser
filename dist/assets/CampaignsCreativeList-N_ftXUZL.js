import{s as m,a as R}from"./index-CLLq3gts.js";import{B as j,j as z,o as y,c as C,a as k,m as S,n as Q,d as D,y as h,J as H,l as r,w as u,z as c,L as J,ag as p,E as V,a1 as P,a0 as W,v as q,_ as G}from"./index-D50FFBti.js";import{s as K}from"./index-BmUwq4vx.js";import{s as X}from"./index-ETHR17tF.js";import{s as U}from"./index-BOBEIKV-.js";import{u as Y}from"./campaigns-DFH-nRZa.js";import"./index-e7WAjRi9.js";import"./index-CCpiHejS.js";import"./index-Cpde-KwR.js";var Z=function(n){var e=n.dt;return`
.p-toggleswitch {
    display: inline-block;
    width: `.concat(e("toggleswitch.width"),`;
    height: `).concat(e("toggleswitch.height"),`;
}

.p-toggleswitch-input {
    cursor: pointer;
    appearance: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: 1;
    outline: 0 none;
    border-radius: `).concat(e("toggleswitch.border.radius"),`;
}

.p-toggleswitch-slider {
    display: inline-block;
    cursor: pointer;
    width: 100%;
    height: 100%;
    border-width: `).concat(e("toggleswitch.border.width"),`;
    border-style: solid;
    border-color: `).concat(e("toggleswitch.border.color"),`;
    background: `).concat(e("toggleswitch.background"),`;
    transition: background `).concat(e("toggleswitch.transition.duration"),", color ").concat(e("toggleswitch.transition.duration"),", border-color ").concat(e("toggleswitch.transition.duration"),", outline-color ").concat(e("toggleswitch.transition.duration"),", box-shadow ").concat(e("toggleswitch.transition.duration"),`;
    border-radius: `).concat(e("toggleswitch.border.radius"),`;
    outline-color: transparent;
    box-shadow: `).concat(e("toggleswitch.shadow"),`;
}

.p-toggleswitch-handle {
    position: absolute;
    top: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: `).concat(e("toggleswitch.handle.background"),`;
    color: `).concat(e("toggleswitch.handle.color"),`;
    width: `).concat(e("toggleswitch.handle.size"),`;
    height: `).concat(e("toggleswitch.handle.size"),`;
    left: `).concat(e("toggleswitch.gap"),`;
    margin-top: calc(-1 * calc(`).concat(e("toggleswitch.handle.size"),` / 2));
    border-radius: `).concat(e("toggleswitch.handle.border.radius"),`;
    transition: background `).concat(e("toggleswitch.transition.duration"),", color ").concat(e("toggleswitch.transition.duration"),", left ").concat(e("toggleswitch.slide.duration"),", box-shadow ").concat(e("toggleswitch.slide.duration"),`;
}

.p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-slider {
    background: `).concat(e("toggleswitch.checked.background"),`;
    border-color: `).concat(e("toggleswitch.checked.border.color"),`;
}

.p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-handle {
    background: `).concat(e("toggleswitch.handle.checked.background"),`;
    color: `).concat(e("toggleswitch.handle.checked.color"),`;
    left: calc(`).concat(e("toggleswitch.width")," - calc(").concat(e("toggleswitch.handle.size")," + ").concat(e("toggleswitch.gap"),`));
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-slider {
    background: `).concat(e("toggleswitch.hover.background"),`;
    border-color: `).concat(e("toggleswitch.hover.border.color"),`;
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-handle {
    background: `).concat(e("toggleswitch.handle.hover.background"),`;
    color: `).concat(e("toggleswitch.handle.hover.color"),`;
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-slider {
    background: `).concat(e("toggleswitch.checked.hover.background"),`;
    border-color: `).concat(e("toggleswitch.checked.hover.border.color"),`;
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-handle {
    background: `).concat(e("toggleswitch.handle.checked.hover.background"),`;
    color: `).concat(e("toggleswitch.handle.checked.hover.color"),`;
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:focus-visible) .p-toggleswitch-slider {
    box-shadow: `).concat(e("toggleswitch.focus.ring.shadow"),`;
    outline: `).concat(e("toggleswitch.focus.ring.width")," ").concat(e("toggleswitch.focus.ring.style")," ").concat(e("toggleswitch.focus.ring.color"),`;
    outline-offset: `).concat(e("toggleswitch.focus.ring.offset"),`;
}

.p-toggleswitch.p-invalid > .p-toggleswitch-slider {
    border-color: `).concat(e("toggleswitch.invalid.border.color"),`;
}

.p-toggleswitch.p-disabled {
    opacity: 1;
}

.p-toggleswitch.p-disabled .p-toggleswitch-slider {
    background: `).concat(e("toggleswitch.disabled.background"),`;
}

.p-toggleswitch.p-disabled .p-toggleswitch-handle {
    background: `).concat(e("toggleswitch.handle.disabled.background"),`;
}
`)},ee={root:{position:"relative"}},te={root:function(n){var e=n.instance,g=n.props;return["p-toggleswitch p-component",{"p-toggleswitch-checked":e.checked,"p-disabled":g.disabled,"p-invalid":g.invalid}]},input:"p-toggleswitch-input",slider:"p-toggleswitch-slider",handle:"p-toggleswitch-handle"},ae=j.extend({name:"toggleswitch",theme:Z,classes:te,inlineStyles:ee}),oe={name:"BaseToggleSwitch",extends:z,props:{modelValue:{type:null,default:!1},trueValue:{type:null,default:!0},falseValue:{type:null,default:!1},invalid:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},tabindex:{type:Number,default:null},inputId:{type:String,default:null},inputClass:{type:[String,Object],default:null},inputStyle:{type:Object,default:null},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:ae,provide:function(){return{$pcToggleSwitch:this,$parentInstance:this}}},E={name:"ToggleSwitch",extends:oe,inheritAttrs:!1,emits:["update:modelValue","change","focus","blur"],methods:{getPTOptions:function(n){var e=n==="root"?this.ptmi:this.ptm;return e(n,{context:{checked:this.checked,disabled:this.disabled}})},onChange:function(n){if(!this.disabled&&!this.readonly){var e=this.checked?this.falseValue:this.trueValue;this.$emit("update:modelValue",e),this.$emit("change",n)}},onFocus:function(n){this.$emit("focus",n)},onBlur:function(n){this.$emit("blur",n)}},computed:{checked:function(){return this.modelValue===this.trueValue}}},ne=["data-p-checked","data-p-disabled"],le=["id","checked","tabindex","disabled","readonly","aria-checked","aria-labelledby","aria-label","aria-invalid"];function ie(a,n,e,g,f,l){return y(),C("div",S({class:a.cx("root"),style:a.sx("root")},l.getPTOptions("root"),{"data-p-checked":l.checked,"data-p-disabled":a.disabled}),[k("input",S({id:a.inputId,type:"checkbox",role:"switch",class:[a.cx("input"),a.inputClass],style:a.inputStyle,checked:l.checked,tabindex:a.tabindex,disabled:a.disabled,readonly:a.readonly,"aria-checked":l.checked,"aria-labelledby":a.ariaLabelledby,"aria-label":a.ariaLabel,"aria-invalid":a.invalid||void 0,onFocus:n[0]||(n[0]=function(){return l.onFocus&&l.onFocus.apply(l,arguments)}),onBlur:n[1]||(n[1]=function(){return l.onBlur&&l.onBlur.apply(l,arguments)}),onChange:n[2]||(n[2]=function(){return l.onChange&&l.onChange.apply(l,arguments)})},l.getPTOptions("input")),null,16,le),k("div",S({class:a.cx("slider")},l.getPTOptions("slider")),[k("div",S({class:a.cx("handle")},l.getPTOptions("handle")),[Q(a.$slots,"handle",{checked:l.checked})],16)],16)],16,ne)}E.render=ie;const ce={class:"card"},se={class:"flex justify-content-end"},re={class:"preview-container"},de=["src","onClick"],ue=["src"],ge=["src"],he=D({__name:"CampaignsCreativeList",setup(a){const n=J(),e=h(n.params.id),g=Y(),f=h(g.creatives),l=h({}),w=h({limit:10,totalRecords:0,currentPage:1}),I=h({global:{value:null,matchMode:p.CONTAINS},id:{value:null,matchMode:p.EQUALS},name:{value:null,matchMode:p.CONTAINS},type:{value:null,matchMode:p.EQUALS},moderation_status:{value:null,matchMode:p.EQUALS}}),M=h(!1),v=h(null),B=h([{label:"Video",value:"video"}]),x=h([{label:"Approved",value:"approved"},{label:"Pending",value:"pending"},{label:"Rejected",value:"rejected"}]),L=async()=>{await g.getCreatives(e.value),f.value=g.creatives,w.value.totalRecords=g.pagination.totalRecords,f.value&&f.value.forEach(i=>{i.type==="video"&&N(i.file_url,o=>{l.value[i.id]=o})})},N=(i,o)=>{const s=document.createElement("video");s.src=i,s.crossOrigin="anonymous",s.addEventListener("loadeddata",()=>{s.currentTime=1}),s.addEventListener("seeked",()=>{const t=document.createElement("canvas");t.width=s.videoWidth,t.height=s.videoHeight;const d=t.getContext("2d");d&&(d.drawImage(s,0,0,t.width,t.height),o(t.toDataURL("image/jpeg")))}),s.load()},F=i=>{w.value.currentPage=Math.floor(i.first/i.rows)+1,w.value.limit=i.rows,L()},T=i=>{v.value=i,M.value=!0},_=i=>{f.value.sort((o,s)=>i.order===1?o.id-s.id:s.id-o.id)},A=(i,o)=>{g.activateCreativeInCampaign(i,o)},O=(i,o)=>{g.inactivateCreativeInCampaign(i,o)},$=(i,o)=>{const s=Number(e.value);o?A(s,i):O(s,i)};return H(async()=>{await L()}),(i,o)=>{var s;return y(),C("div",ce,[r(c(R),{filters:I.value,"onUpdate:filters":o[0]||(o[0]=t=>I.value=t),value:f.value,tableStyle:"min-width: 50rem",paginator:!0,rows:w.value.limit,totalRecords:w.value.totalRecords,showFilterMatchModes:!1,first:(w.value.currentPage-1)*w.value.limit,onPage:F,filterDisplay:"row"},{header:u(()=>[k("div",se,[r(c(V),{class:"mr-3",as:"router-link",to:"/creatives/create"},{default:u(()=>o[3]||(o[3]=[P("Create Creative")])),_:1}),r(c(V),{as:"router-link",to:`/campaigns/${e.value}/creatives/add`},{default:u(()=>o[4]||(o[4]=[P("Add Creative")])),_:1},8,["to"])])]),default:u(()=>[r(c(m),{field:"id",header:"ID",sortable:"",filter:!0,filterPlaceholder:"Filter by ID",filterMatchMode:c(p).EQUALS,sortFunction:_},null,8,["filterMatchMode"]),r(c(m),{field:"name",header:"Name",filter:!0,filterPlaceholder:"Filter by Name",filterMatchMode:c(p).CONTAINS,showFilterMatchModes:!1},{filter:u(({filterModel:t,filterCallback:d})=>[r(c(X),{modelValue:t.value,"onUpdate:modelValue":b=>t.value=b,type:"text",onInput:b=>d(),placeholder:"Search by name"},null,8,["modelValue","onUpdate:modelValue","onInput"])]),_:1},8,["filterMatchMode"]),r(c(m),{header:"Preview"},{body:u(({data:t})=>[k("div",re,[k("img",{src:l.value[t.id],alt:"Preview",class:"thumbnail",onClick:d=>T(t)},null,8,de),r(c(V),{onClick:d=>T(t),class:"ml-2"},{default:u(()=>o[5]||(o[5]=[P("View")])),_:2},1032,["onClick"])])]),_:1}),r(c(m),{field:"type",header:"Creative Type",filter:!0,filterMatchMode:c(p).EQUALS},{filter:u(({filterModel:t,filterCallback:d})=>[r(c(U),{modelValue:t.value,"onUpdate:modelValue":b=>t.value=b,options:B.value,optionLabel:"label",placeholder:"Select Type","option-value":"value",onChange:b=>d()},null,8,["modelValue","onUpdate:modelValue","options","onChange"])]),_:1},8,["filterMatchMode"]),r(c(m),{field:"moderation_status",header:"Moderation Status",filter:!0,filterMatchMode:c(p).EQUALS},{filter:u(({filterModel:t,filterCallback:d})=>[r(c(U),{modelValue:t.value,"onUpdate:modelValue":b=>t.value=b,options:x.value,optionLabel:"label","option-value":"value",placeholder:"Select Status",onChange:d},null,8,["modelValue","onUpdate:modelValue","options","onChange"])]),_:1},8,["filterMatchMode"]),r(c(m),{header:"Status"},{body:u(({data:t})=>[r(c(E),{modelValue:t.active,"onUpdate:modelValue":d=>t.active=d,onChange:d=>$(t.id,t.active)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),_:1}),r(c(m),{header:"Edit"},{body:u(({data:t})=>[r(c(V),{as:"router-link",to:`/creatives/${t.id}`,label:"Edit"},null,8,["to"])]),_:1})]),_:1},8,["filters","value","rows","totalRecords","first"]),r(c(K),{visible:M.value,"onUpdate:visible":o[1]||(o[1]=t=>M.value=t),header:(s=v.value)==null?void 0:s.name,style:{width:"50vw"},onHide:o[2]||(o[2]=t=>v.value=null)},{default:u(()=>[v.value?(y(),C(W,{key:0},[v.value.type!="video"?(y(),C("img",{key:0,src:l.value[v.value.id]||v.value.file_url,class:"large-preview"},null,8,ue)):(y(),C("video",{key:1,src:v.value.file_url,controls:""},null,8,ge))],64)):q("",!0)]),_:1},8,["visible","header"])])}}}),Se=G(he,[["__scopeId","data-v-81cddb18"]]);export{Se as default};
