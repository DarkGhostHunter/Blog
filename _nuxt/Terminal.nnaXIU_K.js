import{u as m}from"./index.AE4JnmOg.js";import{d as v,r as h,H as f,b as e,c as o,L as i,f as p,e as t,F as y,Y as k,p as C,i as g,t as S,k as b}from"./entry.N2qn9pGF.js";const n=s=>(C("data-v-6f4c3275"),s=s(),g(),s),w={key:0,class:"copied"},x=n(()=>t("div",{class:"scrim"},null,-1)),B=n(()=>t("div",{class:"content"}," Copied! ",-1)),I=[x,B],T=n(()=>t("div",{class:"header"},[t("div",{class:"controls"},[t("div"),t("div"),t("div")]),t("div",{class:"title"}," Bash ")],-1)),F={class:"window"},L=n(()=>t("span",{class:"sign"},"$",-1)),N={class:"content"},V={key:1,class:"prompt"},j=v({__name:"Terminal",props:{content:{type:[Array,String],required:!0}},setup(s){const a=s,{copy:l}=m(),c=h("init"),r=f(()=>typeof a.content=="string"?[a.content]:a.content),_=u=>{l(r.value.join(`
`)).then(()=>{c.value="copied",setTimeout(()=>{c.value="init"},1e3)}).catch(()=>{console.warn("Couldn't copy to clipboard!")})};return(u,q)=>(e(),o("div",{class:"terminal",onClick:_},[i(c)==="copied"?(e(),o("div",w,I)):p("",!0),T,t("div",F,[(e(!0),o(y,null,k(i(r),d=>(e(),o("span",{key:d,class:"line"},[L,t("span",N,S(d),1)]))),128))]),i(c)!=="copied"?(e(),o("div",V," Click to copy ")):p("",!0)]))}}),E=b(j,[["__scopeId","data-v-6f4c3275"]]);export{E as default};
