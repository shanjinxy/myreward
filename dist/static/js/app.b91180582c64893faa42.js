webpackJsonp([1,2],[,,,,,,,,,function(t,e,a){"use strict";function n(t){var e=";"+document.cookie,a=e.split(t+"=");return 2===a.length?a.pop().split(";").shift():""}function s(t){t||(t=window.location.pathname);var e=t.split("/"),a=e[e.length-1].shift();return parseInt(a)}e.a=n,e.b=s},function(t,e,a){a(40);var n=a(1)(a(34),a(46),null,null);t.exports=n.exports},function(t,e,a){a(42);var n=a(1)(a(35),a(48),null,null);t.exports=n.exports},function(t,e,a){a(39);var n=a(1)(a(36),a(45),null,null);t.exports=n.exports},function(t,e,a){a(41);var n=a(1)(a(37),a(47),null,null);t.exports=n.exports},,,,,,,,,,,,,,,,,,,,function(t,e,a){"use strict";var n=a(3),s=a.n(n);s.a.defaults.baseURL="http://192.168.101.108:3000"},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(3),s=a.n(n),o=a(9),i=a(9),r=a(38),c=a.n(r);a(33);e.default={data:function(){return{menuWrapperX:0,AuthorName:"",TipperPortraits:["","http://baoimage.wallstreetcn.com/user_250702_1479280948.jpg","http://baoimage.wallstreetcn.com/user_250702_1479280948.jpg","http://baoimage.wallstreetcn.com/user_250702_1479280948.jpg","","","http://baoimage.wallstreetcn.com/user_250702_1479280948.jpg","http://baoimage.wallstreetcn.com/user_250702_1479280948.jpg","http://baoimage.wallstreetcn.com/user_250702_1479280948.jpg","http://baoimage.wallstreetcn.com/user_250702_1479280948.jpg","http://baoimage.wallstreetcn.com/user_250702_1479280948.jpg","http://baoimage.wallstreetcn.com/user_250702_1479280948.jpg","","http://baoimage.wallstreetcn.com/user_250702_1479280948.jpg","http://baoimage.wallstreetcn.com/user_250702_1479280948.jpg","http://baoimage.wallstreetcn.com/user_250702_1479280948.jpg","http://baoimage.wallstreetcn.com/user_250702_1479280948.jpg","http://baoimage.wallstreetcn.com/user_250702_1479280948.jpg","http://baoimage.wallstreetcn.com/user_250702_1479280948.jpg","","http://baoimage.wallstreetcn.com/user_250702_1479280948.jpg","http://baoimage.wallstreetcn.com/user_250702_1479280948.jpg","http://baoimage.wallstreetcn.com/user_250702_1479280948.jpg","http://baoimage.wallstreetcn.com/user_250702_1479280948.jpg"],priceLists:["5.8","8.8","18.8","28.8","58.8","88.8"],activeName:"",unloginText:" 请至 首页左上角-我的主页-登陆并充值才可以给作者打赏哦",popShow:!1,unloginMessage:"您还未注册登陆",tipCount:"",messageid:123,tipper:{},token:""}},created:function(){var t=this;s.a.get("/api/premium/authorTips",{params:{messageid:this.messageid}}).then(function(e){console.log(e.data),t.tipper=e.data,t.tipCount=e.data.TipCount,t.AuthorName=e.data.AuthorName,t.TipperPortraits=e.data.TipperPortraits.slice(0,10),t.$nextTick(function(){t._initScroll()})})},methods:{_initScroll:function(){var t=this;this.menuWrapper=new c.a(this.$refs.menuWrapper,{scrollX:!0,click:!0,startX:0,startY:0,momentum:!0,snap:!0}),this.menuWrapper.on("scroll",function(e){t.menuWrapperX=Math.abs(Math.round(e.x))})},selected:function(t){this.activeName=t,ga("send","event",{eventCategory:"打赏金额"+t,eventAction:"click",eventLabel:"打赏活动"})},showValue:function(){console.log("111")},openPop:function(){var t=this;ga("send","event",{eventCategory:"打赏按钮点击",eventAction:"click",eventLabel:"打赏活动"});var e=this.activeName;if(!e)return alert("请选择要打赏的金额"),!1;this.token=a.i(o.a)("X-Appgo-Token")||"",s.a.post("/api/premium/authorTip",{params:{MessageId:this.MessageId,TipAmount:e},headers:{"X-Appgo-Token":this.token,"Content-Type":"application/json"}}).then(function(e){console.log(e.data),40100===e.data.errcode&&(t.unloginMessage="您还未注册登录",t.unloginText="请至 首页左上角-我的主页-登陆并充值才可以给作者打赏哦",t.popShow=!0),40001===e.data.errcode&&(t.unloginMessage="您的余额不足",t.unloginText="请至 首页左上角-我的主页-我的钱包进行充值",t.popShow=!0),5e4===e.data.errcode&&(t.unloginMessage="打赏失败",t.unloginText=" ",t.popShow=!0),e.data.TipId&&(t.unloginMessage="打赏成功",t.unloginText=t.AuthorName+"老师已经收到您的打赏，感谢支持！",t.popShow=!0)})},closePop:function(){this.popShow=!1,this.activeName=""},myTip:function(){this.cookie=a.i(o.a)("USERID")||"",console.log(this.cookie)}},watcher:{messageid:function(){var t=window.location.pathname;return a.i(i.b)(t)||" "}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"goods"}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"ratings"}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"seller"}},,function(t,e){},function(t,e){},function(t,e){},function(t,e){},,function(t,e,a){t.exports=a.p+"static/img/footer-0.7a26369.png"},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",[t._v("\n  ratings\n")])},staticRenderFns:[]}},function(t,e,a){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"wrapper"},[a("header",[a("div",{staticClass:"titleText"},[a("i",{staticClass:"icon iconfont icon-xiangzuojiantou arrowLeft"}),t._v(" "),a("span",{staticClass:"titleWord"},[t._v("赞赏 作者 "+t._s(t.AuthorName))])])]),t._v(" "),a("div",{ref:"menuWrapper",staticClass:"avatarBox "},[a("ul",{staticClass:"clearfix"},t._l(t.TipperPortraits,function(e){return a("li",{staticClass:"avatarItems"},[e?a("img",{attrs:{src:e,alt:""}}):t._e()])}))]),t._v(" "),a("div",{staticClass:"rewardPeople"},[t._v("\n      共\n      "),a("span",[t._v(t._s(t.tipCount))]),t._v("赞赏\n      "),a("i",{staticClass:"con iconfont icon-xiangyoujiantou"})]),t._v(" "),a("div",{staticClass:"mainAvatar"},[a("img",{attrs:{src:t.tipper.AuthorPortrait,width:"100",height:"100"},on:{click:function(e){t.myTip()}}})]),t._v(" "),a("div",{staticClass:"pricebox"},[a("ul",{staticClass:"clearfix ",attrs:{id:"listbox"}},t._l(t.priceLists,function(e){return a("li",{staticClass:"priceitem ",class:{active:t.activeName==e},on:{click:function(a){t.selected(e)}}},[a("span",[t._v(t._s(e)+"元")])])}))]),t._v(" "),a("div",{staticClass:"buttonBox"},[a("button",{attrs:{id:"supportAuthor"},on:{click:function(e){t.openPop()}}},[t._v("打 赏")])]),t._v(" "),t._m(0),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.popShow,expression:"popShow"}],staticClass:"bulletinWrapper",on:{click:function(e){t.closePop()}}},[a("div",{staticClass:"popimg"},[a("div",{staticClass:"popbox"},[a("p",{staticClass:"title"},[t._v(t._s(t.unloginMessage))]),t._v(" "),a("p",{staticClass:"text"},[t._v(t._s(t.unloginText))])])])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",[n("p",[t._v("* 请确保您的余额充足，充值请至首页左上角")]),t._v(" "),n("p",[t._v("--我的主页-我的钱包 进行充值")]),t._v(" "),n("div",{staticClass:"logo"},[n("img",{attrs:{src:a(44),alt:""}})])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",[t._v("\n  seller\n")])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",[t._v("\n  goods\n")])},staticRenderFns:[]}},,,function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(15),s=a(14),o=a(10),i=a.n(o),r=a(11),c=a.n(r),p=a(13),l=a.n(p),u=a(12),m=a.n(u);n.a.use(s.a);var _=new s.a({routes:[{path:"/index",component:c.a},{path:"/seller",component:l.a},{path:"/ratings",component:m.a}],linkActiveClass:"active"});new n.a({router:_,template:"<App/>",components:{App:i.a},data:{eventHub:new n.a}}).$mount("#app"),_.push("index")}],[51]);
//# sourceMappingURL=app.b91180582c64893faa42.js.map