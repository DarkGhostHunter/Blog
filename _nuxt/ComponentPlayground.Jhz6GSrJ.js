import{L as m,H as p,d as c,ac as i,r as u,M as e,k as l}from"./entry.N2qn9pGF.js";import{u as d}from"./asyncData.AeDkNLAS.js";import f from"./Ellipsis.cIBkn6Hp.js";import y from"./ComponentPlaygroundData.dTUnnEaw.js";import"./TabsHeader.XrNIP-z5.js";import"./ComponentPlaygroundProps.eSIjHYyO.js";import"./ProseH4.mRCQK1_B.js";import"./ProseCodeInline.n6Tes3oh.js";import"./Badge.7Nri0_zK.js";import"./MDCSlot.3GEyuKQw.js";import"./slot.i7Pvtf4h.js";import"./ProseP.sDU6Woif.js";import"./index.AE4JnmOg.js";import"./ComponentPlaygroundSlots.vue.MsVWsiiy.js";import"./ComponentPlaygroundTokens.vue.TAJT-34T.js";async function g(o){const t=m(o);{const{data:n}=await d(`nuxt-component-meta${t?`-${t}`:""}`,()=>$fetch(`/api/component-meta${t?`/${t}`:""}`));return p(()=>n.value)}}const h=c({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(o){const t=p(()=>i(o.component)),n=u({...o.props}),r=await g(o.component);return{as:t,formProps:n,componentData:r}},render(o){const t=Object.entries(this.$slots).reduce((n,[r,a])=>{if(r.startsWith("component-")){const s=r.replace("component-","");n[s]=a}return n},{});return e("div",{class:"component-playground"},[e("div",{class:"component-playground-wrapper"},[e(f,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),e(o.as,{...o.formProps,class:"component-playground-component"},{...t})]),e(y,{modelValue:o.formProps,componentData:o.componentData,"onUpdate:modelValue":n=>o.formProps=n})])}}),E=l(h,[["__scopeId","data-v-d3db963d"]]);export{E as default};