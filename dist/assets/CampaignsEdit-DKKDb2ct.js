import{d as m,y as c,J as p,o as t,c as e,t as r,v as l,p as u,L as d}from"./index-D50FFBti.js";import{u as _}from"./campaigns-DFH-nRZa.js";import{C as g}from"./CampaignsForm-LfmfRGO7.js";import"./index-ETHR17tF.js";import"./index-e7WAjRi9.js";import"./index-CCpiHejS.js";import"./index-BOBEIKV-.js";const f={class:"card"},C={key:0,class:"text-left"},v={key:2},L=m({__name:"CampaignsEdit",setup(k){const i=d(),o=_(),a=c(null);return p(async()=>{await o.getCampaigns();const s=i.params.id;a.value=o.campaigns.find(n=>n.id===parseInt(s))}),(s,n)=>(t(),e("div",f,[a.value?(t(),e("h2",C," Edit Campaign: "+r(a.value.name),1)):l("",!0),a.value?(t(),u(g,{key:1,campaign:a.value},null,8,["campaign"])):(t(),e("p",v,"Loading campaign..."))]))}});export{L as default};
