webpackJsonp([1,2],[,,,,,,,,,function(t,e,n){n(40);var a=n(1)(n(34),n(46),null,null);t.exports=a.exports},function(t,e,n){n(42);var a=n(1)(n(35),n(48),null,null);t.exports=a.exports},function(t,e,n){n(39);var a=n(1)(n(36),n(45),null,null);t.exports=a.exports},function(t,e,n){n(41);var a=n(1)(n(37),n(47),null,null);t.exports=a.exports},,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";var a=n(3),i=n.n(a);i.a.defaults.baseURL="http://192.168.101.108:3000"},function(t,e,n){"use strict";function a(t){var e=";"+document.cookie,n=e.split(t+"=");return 2===n.length?n.pop().split(";").shift():""}function i(t){var e=location.search.match(new RegExp("[?&]"+t+"=([^&]+)","i"));return null==e||e.length<1?"":e[1]}function s(t){return window.localStorage.getItem(t)}e.c=a,e.a=i,e.b=s},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(3),i=n.n(a),s=n(33),o=n(38),r=n.n(o);n(32);e.default={data:function(){return{menuWrapperX:0,AuthorName:"",TipperPortraits:[""],priceLists:["5.8","8.8","18.8","28.8","58.8","88.8"],activeName:"",unloginText:" 请至 首页左上角-我的主页-登陆并充值才可以给作者打赏哦",popShow:!1,unloginMessage:"您还未注册登陆",tipCount:"",messageid:123,tipper:{},token:""}},created:function(){var t=this;i.a.get("/api/premium/authorTips",{params:{messageid:n.i(s.a)("messageid")||123}}).then(function(e){console.log(e.data),t.tipper=e.data,t.tipCount=e.data.TipCount,t.AuthorName=e.data.AuthorName,t.TipperPortraits=e.data.TipperPortraits.slice(0,10),t.$nextTick(function(){t._initScroll()})})},methods:{_initScroll:function(){var t=this;this.menuWrapper=new r.a(this.$refs.menuWrapper,{scrollX:!0,click:!0,startX:0,startY:0,momentum:!0,snap:!0}),this.menuWrapper.on("scroll",function(e){t.menuWrapperX=Math.abs(Math.round(e.x))})},selected:function(t){this.activeName=t,ga("send","event",{eventCategory:"打赏金额"+t,eventAction:"click",eventLabel:"打赏活动"})},showValue:function(){console.log("111")},openPop:function(){var t=this;ga("send","event",{eventCategory:"打赏按钮点击",eventAction:"click",eventLabel:"打赏活动"});var e=this.activeName;if(!e)return alert("请选择要打赏的金额"),!1;i.a.post("/api/premium/authorTip",{params:{MessageId:this.MessageId,TipAmount:e},headers:{"X-Appgo-Token":n.i(s.b)("XAppgoToken"),"Content-Type":"application/json"}}).then(function(e){console.log(e.data),40100===e.data.errcode&&(t.unloginMessage="您还未登录",t.unloginText="请至 选股宝首页左上角-我的主页-登陆充值才可以给作者打赏哦",t.popShow=!0),40001===e.data.errcode&&(t.unloginMessage="您的余额不足",t.unloginText="请至 选股宝首页左上角-我的主页-我的钱包进行充值",t.popShow=!0),5e4===e.data.errcode&&(t.unloginMessage="打赏失败",t.unloginText=" ",t.popShow=!0),e.data.TipId&&(t.unloginMessage="打赏成功",t.unloginText=t.AuthorName+"老师已经收到您的打赏，感谢支持！",t.popShow=!0)})},closePop:function(){this.popShow=!1,this.activeName=""},myTip:function(){this.cookie=n.i(s.c)("_ga").toLowerCase()||"",console.log(this.cookie)}},watcher:{messageid:function(){return n.i(s.a)("messageid")||" "}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"goods"}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"ratings"}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"seller"}},,function(t,e){},function(t,e){},function(t,e){},function(t,e){},,function(t,e,n){t.exports=n.p+"static/img/footer-0.7a26369.png"},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",[t._v("\n  ratings\n")])},staticRenderFns:[]}},function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"wrapper"},[n("header",[n("div",{staticClass:"titleText"},[n("span",{staticClass:"titleWord"},[t._v("赞赏 作者 "+t._s(t.AuthorName))])])]),t._v(" "),n("div",{ref:"menuWrapper",staticClass:"avatarBox "},[n("ul",{staticClass:"clearfix"},t._l(t.TipperPortraits,function(e){return n("li",{staticClass:"avatarItems"},[e?n("img",{attrs:{src:e,alt:""}}):t._e()])}))]),t._v(" "),n("div",{staticClass:"rewardPeople"},[t._v("\n      共\n      "),n("span",[t._v(t._s(t.tipCount))]),t._v("赞赏\n      "),n("i",{staticClass:"con iconfont icon-xiangyoujiantou"})]),t._v(" "),n("div",{staticClass:"mainAvatar"},[n("img",{attrs:{src:t.tipper.AuthorPortrait,width:"100",height:"100"},on:{click:function(e){t.myTip()}}})]),t._v(" "),n("div",{staticClass:"pricebox"},[n("ul",{staticClass:"clearfix ",attrs:{id:"listbox"}},t._l(t.priceLists,function(e){return n("li",{staticClass:"priceitem ",class:{active:t.activeName==e},on:{click:function(n){t.selected(e)}}},[n("span",[t._v(t._s(e)+"元")])])}))]),t._v(" "),n("div",{staticClass:"buttonBox"},[n("button",{attrs:{id:"supportAuthor"},on:{click:function(e){t.openPop()}}},[t._v("打 赏")])]),t._v(" "),t._m(0),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.popShow,expression:"popShow"}],staticClass:"bulletinWrapper",on:{click:function(e){t.closePop()}}},[n("div",{staticClass:"popimg"},[n("div",{staticClass:"popbox"},[n("p",{staticClass:"title"},[t._v(t._s(t.unloginMessage))]),t._v(" "),n("p",{staticClass:"text"},[t._v(t._s(t.unloginText))])])])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",[a("p",[t._v("* 请确保您的余额充足，充值请至首页左上角")]),t._v(" "),a("p",[t._v("--我的主页-我的钱包 进行充值")]),t._v(" "),a("div",{staticClass:"logo"},[a("img",{attrs:{src:n(44),alt:""}})])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",[t._v("\n  seller\n")])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",[t._v("\n  goods\n")])},staticRenderFns:[]}},,,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(14),i=n(13),s=n(9),o=n.n(s),r=n(10),c=n.n(r),u=n(12),l=n.n(u),p=n(11),v=n.n(p);a.a.use(i.a);var d=new i.a({routes:[{path:"/index",component:c.a},{path:"/seller",component:l.a},{path:"/ratings",component:v.a}],linkActiveClass:"active"});new a.a({router:d,template:"<App/>",components:{App:o.a},data:{eventHub:new a.a}}).$mount("#app"),d.push("index")}],[51]);
//# sourceMappingURL=app.6d58cc0515141c88afb5.js.map