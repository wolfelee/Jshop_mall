(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-member-order-invitation_group"],{"172f":function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".share-pop[data-v-758a7c03]{height:%?300?%;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.share-item[data-v-758a7c03]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;text-align:center;font-size:%?26?%;color:#333;padding:%?20?% 0}.share-item uni-image[data-v-758a7c03]{width:%?80?%;height:%?80?%;margin:%?20?%}.share-item .btn[data-v-758a7c03]{line-height:1;display:block;font-size:%?26?%;background-color:#fff}",""])},"218d":function(t,e,n){var r=n("172f");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var o=n("4f06").default;o("712dcf36",r,!0,{sourceMap:!1,shadowMode:!1})},2510:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticStyle:{width:"100%",height:"300upx",background:"#FFFFFF",position:"absolute",left:"0",bottom:"0"}},[n("v-uni-view",{staticClass:"share-pop"},t._l(t.providerList,function(e,r){return n("v-uni-view",{key:r,staticClass:"share-item",on:{click:function(n){n=t.$handleEvent(n),t.clickHandler(e)}}},[n("v-uni-image",{attrs:{src:e.img,mode:""}}),n("v-uni-view",{},[t._v(t._s(e.name))])],1)}),1),n("v-uni-view",{staticClass:"button-bottom"},[n("v-uni-button",{staticClass:"btn btn-w btn-square",on:{click:function(e){e=t.$handleEvent(e),t.close()}}},[t._v("关闭")])],1)],1)},o=[];n.d(e,"a",function(){return r}),n.d(e,"b",function(){return o})},2590:function(t,e,n){"use strict";n.r(e);var r=n("f547"),o=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,function(){return r[t]})}(i);e["default"]=o.a},"29d9":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"content"},[n("v-uni-view",{staticClass:"ig-top"},[n("v-uni-view",{staticClass:"ig-top-t"},[n("v-uni-view",{},[t._v("剩余时间："),n("uni-countdown",{attrs:{day:t.lasttime.day,hour:t.lasttime.hour,minute:t.lasttime.minute,second:t.lasttime.second}})],1)],1),n("v-uni-view",{staticClass:"ig-top-m"},[t._l(t.teamInfo.list,function(e,r){return n("v-uni-view",{key:r,staticClass:"user-head-img-c"},[e.id==e.team_id?n("v-uni-view",{staticClass:"user-head-img-tip"},[t._v("拼主")]):t._e(),n("v-uni-image",{staticClass:"user-head-img cell-hd-icon have-none",attrs:{src:e.user_avatar,mode:""}})],1)}),t._l(t.teamInfo.team_nums,function(e){return t.teamInfo.team_nums?n("v-uni-view",{key:e,staticClass:"user-head-img-c uhihn"},[n("v-uni-text",[t._v("?")])],1):t._e()})],2),n("v-uni-view",{staticClass:"ig-top-b"},[n("v-uni-view",{staticClass:"igtb-top"},[t._v("还差"),n("v-uni-text",{staticClass:"red-price"},[t._v(t._s(t.teamInfo.team_nums))]),t._v("人，赶快邀请好友来拼单吧")],1),n("v-uni-view",{staticClass:"igtb-mid"},[n("v-uni-button",{staticClass:"btn",on:{click:function(e){e=t.$handleEvent(e),t.goShare()}}},[t._v("邀请好友拼单")])],1),n("v-uni-view",{staticClass:"igtb-bot"},[t._v("分享好友越多，成团越快")])],1)],1),n("lvv-popup",{ref:"share",attrs:{position:"bottom"}},[n("shareByH5",{attrs:{shareType:3,goodsId:t.goodsInfo.goods_id,teamId:t.teamInfo.team_id,groupId:t.teamInfo.rule_id,shareImg:t.goodsInfo.image_url,shareTitle:t.goodsInfo.name,shareContent:t.goodsInfo.brief,shareHref:t.shareHref},on:{close:function(e){e=t.$handleEvent(e),t.closeShare()}}})],1),n("v-uni-view",{staticClass:"cell-group margin-cell-group"},[n("v-uni-view",{staticClass:"cell-item"},[n("v-uni-view",{staticClass:"cell-item-hd"},[n("v-uni-view",{staticClass:"cell-hd-title"},[t._v("商品名称")])],1),n("v-uni-view",{staticClass:"cell-item-ft"},[n("v-uni-text",{staticClass:"cell-ft-text"},[t._v(t._s(t.goodsInfo.name))])],1)],1),n("v-uni-view",{staticClass:"cell-item"},[n("v-uni-view",{staticClass:"cell-item-hd"},[n("v-uni-view",{staticClass:"cell-hd-title"},[t._v("拼单时间")])],1),n("v-uni-view",{staticClass:"cell-item-ft"},[n("v-uni-text",{staticClass:"cell-ft-text"},[t._v(t._s(t.orderInfo.ctime))])],1)],1),n("v-uni-view",{staticClass:"cell-item"},[n("v-uni-view",{staticClass:"cell-item-hd"},[n("v-uni-view",{staticClass:"cell-hd-title"},[t._v("拼单须知")])],1),n("v-uni-view",{staticClass:"cell-item-ft group-notice"},[n("v-uni-text",{staticClass:"cell-ft-text"},[t._v("* 好友拼单")]),n("v-uni-text",{staticClass:"cell-ft-text"},[t._v("* 人满发货")]),n("v-uni-text",{staticClass:"cell-ft-text"},[t._v("* 人不满退款")])],1)],1)],1)],1)},o=[];n.d(e,"a",function(){return r}),n.d(e,"b",function(){return o})},"2aea":function(t,e,n){"use strict";n.r(e);var r=n("2510"),o=n("2e8e");for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);n("9564");var a=n("2877"),s=Object(a["a"])(o["default"],r["a"],r["b"],!1,null,"758a7c03",null);e["default"]=s.exports},"2d4c":function(t,e,n){"use strict";var r=n("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("a481");var o=r(n("795b"));n("96cf");var i=r(n("3b8d"));n("c5f6");var a=n("52b4"),s={props:{goodsId:{type:Number,default:0},shareImg:{type:String,default:""},shareTitle:{type:String,default:""},shareContent:{type:String,default:""},shareHref:{type:String,default:""}},data:function(){return{shareType:0,providerList:[]}},mounted:function(){this.$common.isWeiXinBrowser()||(this.providerList=[{name:"分享给好友",cate:"share",id:"share",img:"/static/image/share-f.png",sort:0},{name:"生成海报",cate:"poster",id:"poster",img:"/static/image/poster.png",sort:1}])},methods:{close:function(){this.$emit("close")},clickHandler:function(t){"poster"===t.cate?this.createPoster():this.share(t)},createPoster:function(){var t=this,e={id:this.goodsId,type:1},n=getCurrentPages();n[n.length-1];e.source=1,e.return_url=a.apiBaseUrl+"wap/pages/share/jump";var r=this.$db.get("userToken");r&&(e.user_id=r),this.$api.createPoster(e,function(e){e.status?(t.close(),t.$common.navigateTo("/pages/share?poster="+e.data)):t.$common.errorToShow(e.msg)})},share:function(){var t=(0,i.default)(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),compress:function(){var t=this.shareImg;return new o.default(function(e){var n=plus.io.convertAbsoluteFileSystem(t.replace("file://",""));plus.io.resolveLocalFileSystemURL(n,function(n){n.file(function(n){n.size>20480&&plus.zip.compressImage({src:t,dst:t.replace(".jpg","2222.jpg").replace(".JPG","2222.JPG"),width:"10%",height:"10%",quality:1,overwrite:!0},function(n){var r=t.replace(".jpg","2222.jpg").replace(".JPG","2222.JPG");e(r)},function(t){uni.showModal({content:"分享图片太大,需要请重新选择图片!",showCancel:!1})})})},function(t){uni.showModal({content:"分享图片太大,需要请重新选择图片!",showCancel:!1})})})}}};e.default=s},"2e8e":function(t,e,n){"use strict";n.r(e);var r=n("2d4c"),o=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,function(){return r[t]})}(i);e["default"]=o.a},3604:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".ig-top[data-v-69baaa84]{text-align:center;background-color:#fff;padding:%?20?% %?26?%}.ig-top-m[data-v-69baaa84],.ig-top-t[data-v-69baaa84]{margin-bottom:%?20?%}.ig-top-t>uni-view[data-v-69baaa84]{display:inline-block;padding:0 %?10?%;color:#999}.user-head-img-c[data-v-69baaa84]{position:relative;width:%?80?%;height:%?80?%;border-radius:50%;margin-right:%?20?%;-webkit-box-sizing:border-box;box-sizing:border-box;display:inline-block;\n\t/* float: left; */border:1px solid #f3f3f3}.user-head-img-tip[data-v-69baaa84]{position:absolute;top:%?-6?%;left:%?-10?%;display:inline-block;background-color:#ff7159;color:#fff;font-size:%?22?%;z-index:98;padding:0 %?10?%;border-radius:%?10?%;-webkit-transform:scale(.8);-ms-transform:scale(.8);transform:scale(.8)}.user-head-img-c .user-head-img[data-v-69baaa84]{width:100%;height:100%;border-radius:50%}.user-head-img-c[data-v-69baaa84]:first-child{border:1px solid #ff7159}.uhihn[data-v-69baaa84]{width:%?80?%;height:%?80?%;border-radius:50%;display:inline-block;border:%?2?% dashed #e1e1e1;text-align:center;color:#d1d1d1;font-size:%?40?%;-webkit-box-sizing:border-box;box-sizing:border-box;position:relative}.uhihn>uni-text[data-v-69baaa84]{position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.igtb-top[data-v-69baaa84]{font-size:%?32?%;color:#333;margin-bottom:%?16?%}.igtb-mid[data-v-69baaa84]{margin-bottom:%?16?%}.igtb-mid .btn[data-v-69baaa84]{width:100%;background-color:#ff7159;color:#fff}.igtb-bot[data-v-69baaa84]{font-size:%?24?%;color:#666}.cell-ft-text[data-v-69baaa84]{max-width:%?520?%;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;white-space:nowrap}.group-notice .cell-ft-text[data-v-69baaa84]{color:#999;margin-left:%?20?%;font-size:%?26?%}",""])},"3b8d":function(t,e,n){"use strict";n.r(e),n.d(e,"default",function(){return a});var r=n("795b"),o=n.n(r);function i(t,e,n,r,i,a,s){try{var c=t[a](s),l=c.value}catch(u){return void n(u)}c.done?e(l):o.a.resolve(l).then(r,i)}function a(t){return function(){var e=this,n=arguments;return new o.a(function(r,o){var a=t.apply(e,n);function s(t){i(a,r,o,s,c,"next",t)}function c(t){i(a,r,o,s,c,"throw",t)}s(void 0)})}}},6477:function(t,e,n){"use strict";n.r(e);var r=n("29d9"),o=n("2590");for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);n("be79");var a=n("2877"),s=Object(a["a"])(o["default"],r["a"],r["b"],!1,null,"69baaa84",null);e["default"]=s.exports},"6b27":function(t,e,n){"use strict";n.r(e);var r=n("d0a7"),o=n("b5af");for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);n("f94a");var a=n("2877"),s=Object(a["a"])(o["default"],r["a"],r["b"],!1,null,"24857154",null);e["default"]=s.exports},"77b3":function(t,e,n){var r=n("8740");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var o=n("4f06").default;o("008316de",r,!0,{sourceMap:!1,shadowMode:!1})},8740:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.uni-countdown[data-v-24857154]{padding:%?2?% 0;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.uni-countdown__splitor[data-v-24857154]{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;line-height:%?44?%;padding:0 %?5?%;font-size:%?24?%}.uni-countdown__number[data-v-24857154]{line-height:%?44?%;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;height:%?44?%;border-radius:%?6?%;font-size:%?24?%;font-size:%?24?%}',""])},9564:function(t,e,n){"use strict";var r=n("218d"),o=n.n(r);o.a},"96cf":function(t,e){!function(e){"use strict";var n,r=Object.prototype,o=r.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag",l="object"===typeof t,u=e.regeneratorRuntime;if(u)l&&(t.exports=u);else{u=e.regeneratorRuntime=l?t.exports:{},u.wrap=y;var d="suspendedStart",f="suspendedYield",h="executing",p="completed",v={},m={};m[a]=function(){return this};var g=Object.getPrototypeOf,b=g&&g(g(T([])));b&&b!==r&&o.call(b,a)&&(m=b);var w=k.prototype=x.prototype=Object.create(m);C.prototype=w.constructor=k,k.constructor=C,k[c]=C.displayName="GeneratorFunction",u.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===C||"GeneratorFunction"===(e.displayName||e.name))},u.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,k):(t.__proto__=k,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(w),t},u.awrap=function(t){return{__await:t}},I(S.prototype),S.prototype[s]=function(){return this},u.AsyncIterator=S,u.async=function(t,e,n,r){var o=new S(y(t,e,n,r));return u.isGeneratorFunction(e)?o:o.next().then(function(t){return t.done?t.value:o.next()})},I(w),w[c]="Generator",w[a]=function(){return this},w.toString=function(){return"[object Generator]"},u.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},u.values=T,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach($),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,o){return s.type="throw",s.arg=t,e.next=r,o&&(e.method="next",e.arg=n),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=o.call(a,"catchLoc"),l=o.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),$(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;$(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:T(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),v}}}function y(t,e,n,r){var o=e&&e.prototype instanceof x?e:x,i=Object.create(o.prototype),a=new P(r||[]);return i._invoke=L(t,n,a),i}function _(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(r){return{type:"throw",arg:r}}}function x(){}function C(){}function k(){}function I(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function S(t){function e(n,r,i,a){var s=_(t[n],t,r);if("throw"!==s.type){var c=s.arg,l=c.value;return l&&"object"===typeof l&&o.call(l,"__await")?Promise.resolve(l.__await).then(function(t){e("next",t,i,a)},function(t){e("throw",t,i,a)}):Promise.resolve(l).then(function(t){c.value=t,i(c)},function(t){return e("throw",t,i,a)})}a(s.arg)}var n;function r(t,r){function o(){return new Promise(function(n,o){e(t,r,n,o)})}return n=n?n.then(o,o):o()}this._invoke=r}function L(t,e,n){var r=d;return function(o,i){if(r===h)throw new Error("Generator is already running");if(r===p){if("throw"===o)throw i;return O()}n.method=o,n.arg=i;while(1){var a=n.delegate;if(a){var s=j(a,n);if(s){if(s===v)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===d)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var c=_(t,e,n);if("normal"===c.type){if(r=n.done?p:f,c.arg===v)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=p,n.method="throw",n.arg=c.arg)}}}function j(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,j(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=_(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,v;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,v):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function $(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function T(t){if(t){var e=t[a];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function e(){while(++r<t.length)if(o.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=n,e.done=!0,e};return i.next=i}}return{next:O}}function O(){return{value:n,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},b5af:function(t,e,n){"use strict";n.r(e);var r=n("ef69"),o=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,function(){return r[t]})}(i);e["default"]=o.a},b9a9:function(t,e,n){var r=n("3604");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var o=n("4f06").default;o("75994760",r,!0,{sourceMap:!1,shadowMode:!1})},be79:function(t,e,n){"use strict";var r=n("b9a9"),o=n.n(r);o.a},d0a7:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"uni-countdown"},[t.showDay&&0!=t.d?n("v-uni-view",{staticClass:"uni-countdown__number",style:{borderColor:t.borderColor,color:t.color,background:t.backgroundColor}},[t._v(t._s(t.d))]):t._e(),t.showDay&&0!=t.d?n("v-uni-view",{staticClass:"uni-countdown__splitor",style:{color:t.textColor}},[t._v("天")]):t._e(),n("v-uni-view",{staticClass:"uni-countdown__number",style:{borderColor:t.borderColor,color:t.color,background:t.backgroundColor}},[t._v(t._s(t.h))]),n("v-uni-view",{staticClass:"uni-countdown__splitor",style:{color:t.textColor}},[t._v(t._s(t.showColon?":":"时"))]),n("v-uni-view",{staticClass:"uni-countdown__number",style:{borderColor:t.borderColor,color:t.color,background:t.backgroundColor}},[t._v(t._s(t.i))]),n("v-uni-view",{staticClass:"uni-countdown__splitor",style:{color:t.textColor}},[t._v(t._s(t.showColon?":":"分"))]),n("v-uni-view",{staticClass:"uni-countdown__number",style:{borderColor:t.borderColor,color:t.color,background:t.backgroundColor}},[t._v(t._s(t.s))]),t.showColon?t._e():n("v-uni-view",{staticClass:"uni-countdown__splitor",style:{color:t.textColor}},[t._v("秒")])],1)},o=[];n.d(e,"a",function(){return r}),n.d(e,"b",function(){return o})},e32d:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("28a5"),n("7f7f"),n("3b2b"),n("a481"),n("4917");var r=/^<([-A-Za-z0-9_]+)((?:\s+[a-zA-Z_:][-a-zA-Z0-9_:.]*(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,o=/^<\/([-A-Za-z0-9_]+)[^>]*>/,i=/([a-zA-Z_:][-a-zA-Z0-9_:.]*)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,a=h("area,base,basefont,br,col,frame,hr,img,input,link,meta,param,embed,command,keygen,source,track,wbr"),s=h("a,address,article,applet,aside,audio,blockquote,button,canvas,center,dd,del,dir,div,dl,dt,fieldset,figcaption,figure,footer,form,frameset,h1,h2,h3,h4,h5,h6,header,hgroup,hr,iframe,isindex,li,map,menu,noframes,noscript,object,ol,output,p,pre,section,script,table,tbody,td,tfoot,th,thead,tr,ul,video"),c=h("abbr,acronym,applet,b,basefont,bdo,big,br,button,cite,code,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var"),l=h("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr"),u=h("checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected"),d=h("script,style");function f(t,e){var n,f,h,p=[],v=t;p.last=function(){return this[this.length-1]};while(t){if(f=!0,p.last()&&d[p.last()])t=t.replace(new RegExp("([\\s\\S]*?)</"+p.last()+"[^>]*>"),function(t,n){return n=n.replace(/<!--([\s\S]*?)-->|<!\[CDATA\[([\s\S]*?)]]>/g,"$1$2"),e.chars&&e.chars(n),""}),b("",p.last());else if(0==t.indexOf("\x3c!--")?(n=t.indexOf("--\x3e"),n>=0&&(e.comment&&e.comment(t.substring(4,n)),t=t.substring(n+3),f=!1)):0==t.indexOf("</")?(h=t.match(o),h&&(t=t.substring(h[0].length),h[0].replace(o,b),f=!1)):0==t.indexOf("<")&&(h=t.match(r),h&&(t=t.substring(h[0].length),h[0].replace(r,g),f=!1)),f){n=t.indexOf("<");var m=n<0?t:t.substring(0,n);t=n<0?"":t.substring(n),e.chars&&e.chars(m)}if(t==v)throw"Parse Error: "+t;v=t}function g(t,n,r,o){if(n=n.toLowerCase(),s[n])while(p.last()&&c[p.last()])b("",p.last());if(l[n]&&p.last()==n&&b("",n),o=a[n]||!!o,o||p.push(n),e.start){var d=[];r.replace(i,function(t,e){var n=arguments[2]?arguments[2]:arguments[3]?arguments[3]:arguments[4]?arguments[4]:u[e]?e:"";d.push({name:e,value:n,escaped:n.replace(/(^|[^\\])"/g,'$1\\"')})}),e.start&&e.start(n,d,o)}}function b(t,n){if(n){for(r=p.length-1;r>=0;r--)if(p[r]==n)break}else var r=0;if(r>=0){for(var o=p.length-1;o>=r;o--)e.end&&e.end(p[o]);p.length=r}}b()}function h(t){for(var e={},n=t.split(","),r=0;r<n.length;r++)e[n[r]]=!0;return e}function p(t){return t.replace(/<\?xml.*\?>\n/,"").replace(/<!doctype.*>\n/,"").replace(/<!DOCTYPE.*>\n/,"")}function v(t){return t.reduce(function(t,e){var n=e.value,r=e.name;return t[r]?t[r]=t[r]+" "+n:t[r]=n,t},{})}function m(t){t=p(t);var e=[],n={node:"root",children:[]};return f(t,{start:function(t,r,o){var i={name:t};if(0!==r.length&&(i.attrs=v(r)),o){var a=e[0]||n;a.children||(a.children=[]),a.children.push(i)}else e.unshift(i)},end:function(t){var r=e.shift();if(r.name!==t&&console.error("invalid state: mismatch end tag"),0===e.length)n.children.push(r);else{var o=e[0];o.children||(o.children=[]),o.children.push(r)}},chars:function(t){var r={type:"text",text:t};if(0===e.length)n.children.push(r);else{var o=e[0];o.children||(o.children=[]),o.children.push(r)}},comment:function(t){var n={node:"comment",text:t},r=e[0];r.children||(r.children=[]),r.children.push(n)}}),n.children}var g=m;e.default=g},ef69:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("c5f6");var r={name:"uni-countdown",props:{showDay:{type:Boolean,default:!0},showColon:{type:Boolean,default:!0},backgroundColor:{type:String,default:"#FFFFFF"},borderColor:{type:String,default:"#000000"},color:{type:String},textColor:{type:String,default:"#000000"},splitorColor:{type:String,default:"#000"},day:{type:Number,default:0},hour:{type:Number,default:0},minute:{type:Number,default:0},second:{type:Number,default:0}},data:function(){return{timer:null,d:"00",h:"00",i:"00",s:"00",leftTime:0,seconds:0}},created:function(t){var e=this;this.seconds=this.toSeconds(this.day,this.hour,this.minute,this.second),this.countDown(),this.timer=setInterval(function(){e.seconds--,e.seconds<0?e.timeUp():e.countDown()},1e3)},beforeDestroy:function(){clearInterval(this.timer)},methods:{toSeconds:function(t,e,n,r){return 60*t*60*24+60*e*60+60*n+r},timeUp:function(){clearInterval(this.timer),this.$emit("timeup")},countDown:function(){var t=this.seconds,e=0,n=0,r=0,o=0;t>0?(e=Math.floor(t/86400),n=Math.floor(t/3600)-24*e,r=Math.floor(t/60)-24*e*60-60*n,o=Math.floor(t)-24*e*60*60-60*n*60-60*r):this.timeUp(),e<10&&(e="0"+e),n<10&&(n="0"+n),r<10&&(r="0"+r),o<10&&(o="0"+o),this.d=e,this.h=n,this.i=r,this.s=o}}};e.default=r},f547:function(t,e,n){"use strict";var r=n("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("7f7f");var o=r(n("45c4")),i=r(n("6b27")),a=(n("d64d"),n("52b4")),s=r(n("2aea")),c=r(n("ca58")),l=(r(n("e32d")),{components:{lvvPopup:o.default,uniCountdown:i.default,share:s.default,shareByH5:c.default},data:function(){return{myShareCode:"",shareType:3,providerList:[],swiper:{indicatorDots:!0,autoplay:!0,interval:3e3,duration:800},goodsInfo:[],teamInfo:[],favLogo:["/static/image/ic-me-collect.png","/static/image/ic-me-collect2.png"],horizontal:"right",vertical:"bottom",direction:"vertical",pattern:{color:"#7A7E83",backgroundColor:"#fff",selectedColor:"#007AFF",buttonColor:"#FF7159"},query:"",indicatorDots:!1,autoplay:!1,interval:2e3,duration:500,lasttime:{day:0,hour:0,minute:0,second:0},userToken:0,time:0,order_id:"",orderInfo:{}}},onLoad:function(t){var e,n;t.order_id?this.order_id=t.order_id:this.$common.errorToShow("参数错误");var r=getCurrentPages(),o=r[r.length-2];"undefined"!=typeof o&&(e=o.teamInfo,n=o.orderInfo),e&&n?(this.teamInfo=e,this.orderInfo=n,this.goodsInfo=n.items[0]):(this.orderDetail(),this.getTeam());var i=Date.parse(new Date)/1e3;this.lasttime=this.$common.timeToDateObj(t.close_time-i),this.getMyShareCode()},computed:{shareHref:function(){var t=getCurrentPages(),e=t[t.length-1];return a.apiBaseUrl+"wap/"+e.route+"?scene="+this.query}},onReachBottom:function(){2===this.current&&"more"===this.goodsComments.loadStatus&&this.getGoodsComments()},methods:{getTeam:function(){var t=this;this.$api.getOrderPintuanTeamInfo({order_id:this.order_id},function(e){e.status?t.teamInfo={list:e.data.teams,current_count:e.data.teams.length,people_number:e.data.people_number,team_nums:e.data.team_nums,close_time:e.data.close_time,id:e.data.id,team_id:e.data.team_id,rule_id:e.data.rule_id}:t.$common.errorToShow(e.msg)})},orderDetail:function(){var t=this,e={order_id:t.order_id};t.$api.orderDetail(e,function(e){if(e.status){var n=e.data;null!==n.ctime&&(n.ctime=t.$common.timeToDate(n.ctime)),t.orderInfo=n,t.goodsInfo=n.items[0]}else t.$common.errorToShow(e.msg)})},close:function(){this.$emit("close")},clickHandler:function(t){"poster"===t.cate?this.createPoster():this.share(t)},toshow:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;1==t&&(this.lvvpopref_type=1),0!==e&&(this.team_id=e),this.$refs.lvvpopref.show()},toclose:function(){this.$refs.lvvpopref.close()},goShare:function(){this.$refs.share.show()},closeShare:function(){this.$refs.share.close()},getMyShareCode:function(){var t=this,e=this.$db.get("userToken");e&&""!=e&&this.$api.shareCode({},function(e){e.status&&(t.myShareCode=e.data?e.data:"")})}},onShareAppMessage:function(){var t=this.myShareCode?this.myShareCode:"",e=this.teamInfo.list[0].team_id,n=this.$common.shareParameterDecode("type=5&invite="+t+"&id="+this.goodsInfo.goods_id+"&team_id="+e),r="/pages/share/jump?scene="+n;return{title:this.goodsInfo.name,imageUrl:this.goodsInfo.image_url,path:r}}});e.default=l},f94a:function(t,e,n){"use strict";var r=n("77b3"),o=n.n(r);o.a}}]);