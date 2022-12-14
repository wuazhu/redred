"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[489],{13189:function(ue,O,t){t.r(O);var K=t(30279),S=t.n(K),Z=t(35290),o=t.n(Z),y=t(411),m=t.n(y),w=t(46686),p=t.n(w),z=t(67116),M=t(39722),C=t(37085),E=t(5223),U=t(55804),k=t(66268),$=t(39286),I=t(75142),h=t(57071),B=t(53049),i=t(93236),j=t(69760),n=t(62086),D=z.Z.UserController,G=D.queryUserList,R=D.updateToTalent,H=D.deleteUser,J=function(){var N=(0,i.useState)(!1),x=p()(N,2),Q=x[0],T=x[1],V=(0,i.useState)({}),A=p()(V,2),W=A[0],F=A[1],X=(0,i.useState)(""),L=p()(X,2),c=L[0],v=L[1],Y=(0,i.useState)(50),b=p()(Y,2),g=b[0],P=b[1],f=(0,i.useRef)(),q=[{title:"\u7528\u6237id",dataIndex:"id",valueType:"text",hideInSearch:!0,width:60},{title:"\u5F52\u5C5E\u516C\u53F8",valueType:"text",render:function(_,e){return(0,n.jsx)(C.Z,{color:e.appCode=="100"||e.appCode=="200"||e.appCode=="300"||e.appCode=="400"||e.appCode=="500"||e.appCode=="600"?"magenta":e.appCode.startsWith("7")?"green":e.appCode.startsWith("9")?"purple":e.appCode.startsWith("8")?"blue":"gold",children:j.Lp[e.appCode]})}},{title:"\u6635\u79F0",dataIndex:"nickname",valueType:"text",render:function(_,e){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(C.Z,{color:e.appCode=="100"||e.appCode=="200"||e.appCode=="300"||e.appCode=="400"||e.appCode=="500"||e.appCode=="600"?"magenta":e.appCode.startsWith("7")?"green":e.appCode.startsWith("9")?"purple":e.appCode.startsWith("8")?"blue":"gold",children:j.Fc[e.appCode]}),e.nickname]})}},{title:"\u5E73\u53F0",dataIndex:"platform",render:function(_,e){return(0,n.jsx)(C.Z,{color:e.platform==1?"blue":"error",children:e.platform==1?"\u6296\u97F3":"\u5FEB\u624B"})}},{title:"\u53E3\u4EE4",dataIndex:"token",hideInSearch:!0,hideInForm:!0},{title:"\u662F\u5426\u70ED\u95E8\u7528\u6237",dataIndex:"hotUserFlag",hideInSearch:!0,hideInForm:!0,valueEnum:{true:{text:"\u662F",status:"Success"},false:{text:"\u5426",status:"Error"}}},{title:"\u5206\u6210\u6BD4\u4F8B",dataIndex:"ratio",hideInSearch:!0,hideInForm:!0,render:function(_,e){return"".concat(e.ratio,"%")}},{title:"\u64CD\u4F5C",dataIndex:"option",valueType:"option",align:"right",render:function(_,e){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("a",{onClick:function(){var s=E.ZP.loading("\u8BBE\u7F6E\u4E2D");ae(e),setTimeout(function(){var u;(u=f.current)===null||u===void 0||u.reload(),s()},300)},children:e.hotUserFlag?"\u53D6\u6D88\u7F6E\u9876":"\u8BBE\u7F6E\u7F6E\u9876"}),(0,n.jsx)(U.Z,{type:"vertical"}),(0,n.jsx)("a",{onClick:function(){v(e.token),F(e),P(e.ratio),T(!0)},children:"\u4FEE\u6539\u53E3\u4EE4/\u5206\u6210\u6BD4\u4F8B"}),(0,n.jsx)(U.Z,{type:"vertical"}),(0,n.jsx)(k.Z,{title:"\u786E\u8BA4\u5220\u9664?",okText:"\u786E\u8BA4",cancelText:"\u53D6\u6D88",onConfirm:m()(o()().mark(function a(){var s;return o()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return s=E.ZP.loading("\u8BBE\u7F6E\u4E2D"),d.next=3,H(e.id);case 3:setTimeout(function(){var l;(l=f.current)===null||l===void 0||l.reload(),s()},300);case 4:case"end":return d.stop()}},a)})),children:(0,n.jsx)("a",{children:"\u5220\u9664"})},"delete")]})}}],ee=function(){var r=m()(o()().mark(function _(){var e,a;return o()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return(!c||!g)&&E.ZP.error("\u8BF7\u8F93\u5165\u53E3\u4EE4\u53CA\u5206\u6210\u6BD4\u4F8B\uFF01"),console.log(c,W),u.next=4,R({id:W.id,token:c,ratio:Number(g)});case 4:a=u.sent,a.code==0&&(E.ZP.success(a.message),T(!1),F({}),v(""),P(0)),(e=f.current)===null||e===void 0||e.reload();case 7:case"end":return u.stop()}},_)}));return function(){return r.apply(this,arguments)}}(),ne=function(_){v(_.target.value)},te=function(_){P(_.target.value)},ae=function(){var r=m()(o()().mark(function _(e){var a,s,u;return o()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return console.log(e),a=e.id,s=e.hotUserFlag,l.next=4,R({id:a,hotUserFlag:!s});case 4:u=l.sent;case 5:case"end":return l.stop()}},_)}));return function(e){return r.apply(this,arguments)}}();return(0,n.jsxs)(M._zJ,{header:{title:"\u6240\u6709\u8FBE\u4EBA"},children:[(0,n.jsx)(M.QVr,{headerTitle:"\u67E5\u8BE2\u8868\u683C",actionRef:f,rowKey:"id",search:{labelWidth:120},request:function(){var r=m()(o()().mark(function _(e){var a;return o()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,G(S()({userType:"2"},e));case 2:return a=u.sent,console.log("\u7528\u6237\u4FE1\u606F",a),u.abrupt("return",{data:(a==null?void 0:a.data.records)||[],success:(a==null?void 0:a.code)==0,total:(a==null?void 0:a.data.total)||0});case 5:case"end":return u.stop()}},_)}));return function(_){return r.apply(this,arguments)}}(),columns:q,rowSelection:{onChange:function(_,e){return setSelectedRows(e)}}}),(0,n.jsxs)($.Z,{title:"\u4FEE\u6539\u53E3\u4EE4\u53CA\u5206\u6210\u6BD4\u4F8B",open:Q,onOk:ee,onCancel:function(){T(!1),v("")},children:[(0,n.jsxs)(I.Z,{style:{marginBottom:20},children:[(0,n.jsx)(h.Z,{children:"\u8BF7\u8F93\u5165\u53E3\u4EE4\uFF1A"}),(0,n.jsx)(h.Z,{children:(0,n.jsx)(B.Z,{value:c,placeholder:"\u8F93\u5165\u8BBE\u7F6E\u53E3\u4EE4",onChange:ne})})]}),(0,n.jsxs)(I.Z,{children:[(0,n.jsx)(h.Z,{children:"\u8F93\u5165\u767E\u5206\u6BD4(\u53EA\u9700\u8981\u6570\u5B57)\uFF1A"}),(0,n.jsx)(h.Z,{children:(0,n.jsx)(B.Z,{value:g,max:100,type:"number",placeholder:"\u8F93\u5165\u5206\u6210\u6BD4\u4F8B",onChange:te})})]})]})]})};O.default=J}}]);
