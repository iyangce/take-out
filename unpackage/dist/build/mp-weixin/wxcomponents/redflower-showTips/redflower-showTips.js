(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["wxcomponents/redflower-showTips/redflower-showTips"],{"1ca4":function(t,n,e){"use strict";e.r(n);var s=e("8285"),i=e.n(s);for(var a in s)"default"!==a&&function(t){e.d(n,t,(function(){return s[t]}))}(a);n["default"]=i.a},"1fa9":function(t,n,e){"use strict";var s=e("f51a"),i=e.n(s);i.a},7003:function(t,n,e){"use strict";var s;e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return s}));var i=function(){var t=this,n=t.$createElement;t._self._c},a=[]},8285:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={name:"showTips",data:function(){return{isFirst:!0,showTips:!1}},onReady:function(){var n=this,e=t.getStorageSync("isFirst");e?n.showTips=!1:(n.showTips=!0,t.setStorage({key:"isFirst",data:"0"}),setTimeout((function(){n.showTips=!1}),5e3))},methods:{closeTips:function(){var n=this;n.showTips=!1,t.setStorage({key:"isFirst",data:"0"})}}};n.default=e}).call(this,e("543d")["default"])},9219:function(t,n,e){"use strict";e.r(n);var s=e("7003"),i=e("1ca4");for(var a in i)"default"!==a&&function(t){e.d(n,t,(function(){return i[t]}))}(a);e("1fa9");var o,r=e("f0c5"),u=Object(r["a"])(i["default"],s["b"],s["c"],!1,null,null,null,!1,s["a"],o);n["default"]=u.exports},f51a:function(t,n,e){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'wxcomponents/redflower-showTips/redflower-showTips-create-component',
    {
        'wxcomponents/redflower-showTips/redflower-showTips-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("9219"))
        })
    },
    [['wxcomponents/redflower-showTips/redflower-showTips-create-component']]
]);
