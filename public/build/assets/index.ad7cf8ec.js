import{b as w}from"./breadcrumb.2d4cfefa.js";import{_ as k}from"./paginator.8a8c3c80.js";import{c,r as i,a as e,b as s,d as o,e as t,w as y,u as l,F as u,g,n as x,t as a,h as v}from"./main.bac42695.js";const D={class:"card shadow-lg col-lg-9 mx-auto radius-20"},N={class:"card-body"},V={class:"mb-3 text-end"},B=t("i",{class:"fa fa-dollar-sign"},null,-1),C=v(" Request withdrawal "),S={class:"table-responsive"},W={class:"table"},j=t("thead",null,[t("tr",null,[t("th",null,"Reference"),t("th",null,"Amount"),t("th",null,"Status"),t("th",null,"Date")])],-1),F={key:0},H={key:1},R=t("tr",null,[t("td",{colspan:"10",class:"text-muted text-center"},"No withdrawals found")],-1),q=[R],A={key:0,class:"d-flex justify-content-center"},$={name:"index",props:{deposits:Object},setup(_){const d=_,r=c(()=>d.deposits.data),h=c(()=>d.deposits.links);return(m,E)=>{const b=i("Head"),f=i("inertia-link");return e(),s(u,null,[o(b,{title:"Withdrawals"}),o(w,{title:"Withdrawals",crumbs:["Dashboard","Withdrawals"]}),t("div",D,[t("div",N,[t("div",V,[o(f,{href:m.route("user.withdrawals.create"),class:"btn btn-outline-info btn-rounded"},{default:y(()=>[B,C]),_:1},8,["href"])]),t("div",S,[t("table",W,[j,l(r).length?(e(),s("tbody",F,[(e(!0),s(u,null,g(l(r),(n,p)=>(e(),s("tr",{key:p},[t("td",null,a(n.reference),1),t("td",null,a(n.amount)+" "+a(n.symbol),1),t("td",null,a(n.status),1),t("td",null,a(new Date(n.created_at).toDateString()),1)]))),128))])):(e(),s("tbody",H,q))])]),l(r).length?(e(),s("div",A,[o(k,{links:l(h)},null,8,["links"])])):x("",!0)])])],64)}}};export{$ as default};
