;my.defineComponent || (my.defineComponent = Component);(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["components/uni-badge/uni-badge"],{"3a84":function(t,e,n){"use strict";var u=n("5e79"),i=n.n(u);i.a},"5e79":function(t,e,n){},6022:function(t,e,n){"use strict";n.r(e);var u=n("7324"),i=n.n(u);for(var a in u)"default"!==a&&function(t){n.d(e,t,(function(){return u[t]}))}(a);e["default"]=i.a},7324:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u={name:"UniBadge",props:{type:{type:String,default:"default"},inverted:{type:Boolean,default:!1},text:{type:[String,Number],default:""},size:{type:String,default:"normal"}},data:function(){return{badgeStyle:""}},watch:{text:function(){this.setStyle()}},mounted:function(){this.setStyle()},methods:{setStyle:function(){this.badgeStyle="width: ".concat(8*String(this.text).length+12,"px")},onClick:function(){this.$emit("click")}}};e.default=u},"92b5":function(t,e,n){"use strict";var u;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return u}));var i=function(){var t=this,e=t.$createElement;t._self._c},a=[]},af46:function(t,e,n){"use strict";n.r(e);var u=n("92b5"),i=n("6022");for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);n("3a84");var r,c=n("f0c5"),f=Object(c["a"])(i["default"],u["b"],u["c"],!1,null,"4d5fd890",null,!1,u["a"],r);e["default"]=f.exports}}]);
;(my["webpackJsonp"] = my["webpackJsonp"] || []).push([
    'components/uni-badge/uni-badge-create-component',
    {
        'components/uni-badge/uni-badge-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('c11b')['createComponent'](__webpack_require__("af46"))
        })
    },
    [['components/uni-badge/uni-badge-create-component']]
]);
