;my.defineComponent || (my.defineComponent = Component);(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["components/uLink"],{4377:function(t,e,n){"use strict";var u;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return u}));var a=function(){var t=this,e=t.$createElement;t._self._c},i=[]},"638d":function(t,e,n){"use strict";n.r(e);var u=n("eb12"),a=n.n(u);for(var i in u)"default"!==i&&function(t){n.d(e,t,(function(){return u[t]}))}(i);e["default"]=a.a},bfd0:function(t,e,n){"use strict";n.r(e);var u=n("4377"),a=n("638d");for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);var r,o=n("f0c5"),f=Object(o["a"])(a["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],r);e["default"]=f.exports},eb12:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"u-link",props:{href:{type:String,default:""},text:{type:String,default:""},inWhiteList:{type:Boolean,default:!1}},methods:{openURL:function(){this.inWhiteList?t.navigateTo({url:"/pages/component/web-view/web-view?url="+this.href}):(t.setClipboardData({data:this.href}),t.showModal({content:"本网址无法直接在小程序内打开。已自动复制网址，请在手机浏览器里粘贴该网址",showCancel:!1}))}}};e.default=n}).call(this,n("c11b")["default"])}}]);
;(my["webpackJsonp"] = my["webpackJsonp"] || []).push([
    'components/uLink-create-component',
    {
        'components/uLink-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('c11b')['createComponent'](__webpack_require__("bfd0"))
        })
    },
    [['components/uLink-create-component']]
]);
