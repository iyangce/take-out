(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"4afc":function(e,t,n){},"52bf":function(e,t,n){"use strict";(function(e){n("b2cd");a(n("66fd"));var t=a(n("7ac8"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},6191:function(e,t,n){"use strict";n.r(t);var a=n("c20f"),i=n.n(a);for(var c in a)"default"!==c&&function(e){n.d(t,e,(function(){return a[e]}))}(c);t["default"]=i.a},"7ac8":function(e,t,n){"use strict";n.r(t);var a=n("9062"),i=n("6191");for(var c in i)"default"!==c&&function(e){n.d(t,e,(function(){return i[e]}))}(c);n("e44d");var o,f=n("f0c5"),r=Object(f["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],o);t["default"]=r.exports},9062:function(e,t,n){"use strict";var a;n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return a}));var i=function(){var e=this,t=e.$createElement;e._self._c},c=[]},c20f:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(){n.e("wxcomponents/redflower-showTips/redflower-showTips").then(function(){return resolve(n("9219"))}.bind(null,n)).catch(n.oe)},i={components:{showTips:a},onLoad:function(){},data:function(){return{indicatorDots:!1,circular:!0,autoplay:!0,interval:2e3,duration:500,list:[{Id:1,num:32,type:"ele",title:"饿了么外卖红包",des:"饿了么天天领红包",app_id:"wxece3a9a4c82f58c9",path:"pages/sharePid/web/index?scene=s.click.ele.me%2Fb2Wq2wu"},{Id:2,num:56,type:"mt",title:"美团外卖红包",des:"吃喝玩乐红包不停",app_id:"wxde8ac0a21135c07d",path:"/index/pages/h5/h5?f_token=0&weburl=https%3a%2f%2fi.meituan.com%2fawp%2fhfe%2fblock%2fa13b87919a9ace9cfab4%2f89400%2findex.html"},{Id:3,num:32,type:"mt",title:"美团商超生鲜",des:"最高32元商超生鲜红包",app_id:"wxde8ac0a21135c07d",path:"/index/pages/h5/h5?f_token=0&weburl=https%3a%2f%2fi.meituan.com%2fawp%2fhfe%2fblock%2fc9ff59b58f6f5bf385b6%2f94455%2findex.html"},{Id:4,num:20,type:"ele",title:"饿了么超级红包",des:"20元红包天天领",app_id:"wxece3a9a4c82f58c9",path:"ele-recommend-price/pages/guest/index?inviterId=d535deb"}]}},onShareAppMessage:function(e){var t=e.target.dataset.index,n=this.projects[t],a=n.description;return a||(a="Hi~,偷偷地告诉你，这里有很多优惠券哦！"),"button"===e.from?{title:a,imageUrl:n.image,path:"/pages/index/index"}:{title:"这里有好多吃喝优惠券，快来领券吧~~",path:"/pages/index/index",imageUrl:"https://yc-develop.oss-cn-shanghai.aliyuncs.com/take-out/chihe-share.png"}},methods:{goToProject:function(t){var n=this.list[t];e.navigateToMiniProgram({appId:n.app_id,path:n.path,success:function(e){}})},shareProject:function(t){var n=this.projects[t];e.navigateToMiniProgram({appId:n.app_id,path:n.path,success:function(e){}})},previewImage:function(e){},notify:function(){var t=this.$http;console.log(t);var n="kXBmBC98SYth6HltqOVc-3_Y2EncSybE2-0TMvyCXDk";e.requestSubscribeMessage({tmplIds:[n],success:function(e){console.log(e)},fail:function(e){console.log(e)}})}}};t.default=i}).call(this,n("543d")["default"])},e44d:function(e,t,n){"use strict";var a=n("4afc"),i=n.n(a);i.a}},[["52bf","common/runtime","common/vendor"]]]);