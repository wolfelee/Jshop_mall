(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-member-distribution-store_setting"],{"62a6":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"content"},[a("v-uni-view",{staticClass:"content-top"},[a("v-uni-view",{staticClass:"cell-group"},[a("v-uni-view",{staticClass:"cell-item"},[a("v-uni-view",{staticClass:"cell-item-hd"},[a("v-uni-view",{staticClass:"cell-hd-title"},[t._v("名称")])],1),a("v-uni-view",{staticClass:"cell-item-bd"},[a("v-uni-input",{staticClass:"cell-bd-input",attrs:{placeholder:"请输入店铺名称"},model:{value:t.store_name,callback:function(e){t.store_name=e},expression:"store_name"}})],1)],1),a("v-uni-view",{staticClass:"cell-item user-head"},[a("v-uni-view",{staticClass:"cell-item-hd"},[a("v-uni-view",{staticClass:"cell-hd-title"},[t._v("图标")])],1),a("v-uni-view",{staticClass:"cell-item-ft"},[a("v-uni-image",{staticClass:"cell-ft-next user-head-img have-none",attrs:{mode:"aspectFill",src:t.logo},on:{click:function(e){e=t.$handleEvent(e),t.uploadLogo(e)}}})],1)],1)],1),a("v-uni-view",{staticClass:"cell-group"},[a("v-uni-view",{staticClass:"cell-item right-img"},[a("v-uni-view",{staticClass:"cell-item-hd"},[a("v-uni-view",{staticClass:"cell-hd-title"},[t._v("店招")])],1)],1),a("v-uni-view",{},[a("v-uni-view",{staticClass:"evaluate-c-b"},[t._l(t.images,function(e,i){return a("v-uni-view",{key:i,staticClass:"goods-img-item"},[a("v-uni-image",{staticClass:"del",attrs:{src:"/static/image/del.png",mode:""},on:{click:function(a){a=t.$handleEvent(a),t.delImage(e)}}}),a("v-uni-image",{attrs:{src:e.url,mode:""},on:{click:function(a){a=t.$handleEvent(a),t.clickImg(e.url)}}})],1)}),a("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.isImage,expression:"isImage"}],staticClass:"upload-img",on:{click:function(e){e=t.$handleEvent(e),t.upImage(e)}}},[a("v-uni-image",{staticClass:"icon",attrs:{src:"/static/image/camera.png",mode:""}}),a("v-uni-view",{},[t._v("上传照片")])],1)],2)],1)],1),a("v-uni-view",{staticClass:"cell-group"},[a("v-uni-view",{staticClass:"cell-item right-img"},[a("v-uni-view",{staticClass:"cell-item-hd"},[a("v-uni-view",{staticClass:"cell-hd-title"},[t._v("简介")])],1)],1),a("v-uni-view",{staticClass:"cell-textarea "},[a("v-uni-textarea",{attrs:{placeholder:"请您在此描述问题(最多200字)",maxlength:"200"},model:{value:t.store_desc,callback:function(e){t.store_desc=e},expression:"store_desc"}})],1)],1)],1),a("v-uni-view",{staticClass:"button-bottom"},[a("v-uni-button",{staticClass:"btn btn-square btn-b",attrs:{"hover-class":"btn-hover2"},on:{click:function(e){e=t.$handleEvent(e),t.submitHandler()}}},[t._v("保存")])],1)],1)},s=[];a.d(e,"a",function(){return i}),a.d(e,"b",function(){return s})},"9e47":function(t,e,a){"use strict";a.r(e);var i=a("f093"),s=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(e,t,function(){return i[t]})}(o);e["default"]=s.a},b936:function(t,e,a){var i=a("dd3d");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var s=a("4f06").default;s("c440f99a",i,!0,{sourceMap:!1,shadowMode:!1})},ce0a:function(t,e,a){"use strict";var i=a("b936"),s=a.n(i);s.a},dd3d:function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,".user-head[data-v-e46776aa]{height:%?100?%}.user-head-img[data-v-e46776aa]{height:%?90?%;width:%?90?%;border-radius:50%}.cell-hd-title[data-v-e46776aa]{color:#333}.cell-item-bd[data-v-e46776aa]{color:#666;font-size:%?26?%}.list-goods-name[data-v-e46776aa]{width:100%!important}.cart-checkbox-item[data-v-e46776aa]{position:relative}.invoice-type .uni-list-cell[data-v-e46776aa]{display:inline-block;font-size:%?26?%;color:#333;position:relative;margin-left:%?50?%}.invoice-type .uni-list-cell>uni-view[data-v-e46776aa]{display:inline-block}.invoice-type-icon[data-v-e46776aa]{position:absolute;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%)}.invoice-type-c[data-v-e46776aa]{margin-left:%?50?%;line-height:2}.cell-item-ft .cell-bd-input[data-v-e46776aa]{text-align:right;width:%?500?%;font-size:%?28?%}.right-img[data-v-e46776aa]{border-bottom:0}.cell-textarea[data-v-e46776aa]{padding:0 %?26?% %?20?%}.cell-textarea uni-textarea[data-v-e46776aa]{width:100%;height:%?200?%;font-size:%?26?%;color:#333}.evaluate-c-b[data-v-e46776aa]{overflow:hidden;padding:0 %?20?%}.upload-img[data-v-e46776aa]{width:%?146?%;height:%?146?%;margin:%?14?%;text-align:center;color:#999;font-size:%?22?%;border:%?2?% solid #e1e1e1;border-radius:%?4?%;display:inline-block;float:left;padding:%?24?% 0}.goods-img-item[data-v-e46776aa]{width:%?174?%;height:%?174?%;padding:%?14?%;float:left;position:relative}.goods-img-item[data-v-e46776aa]:nth-child(4n){margin-right:0}.goods-img-item uni-image[data-v-e46776aa]{width:100%;height:100%}.del[data-v-e46776aa]{width:%?30?%!important;height:%?30?%!important;position:absolute;right:0;top:0;z-index:999}.cell-textarea uni-textarea[data-v-e46776aa]{background-color:#f8f8f8;padding:%?12?% %?20?%;-webkit-box-sizing:border-box;box-sizing:border-box}",""])},dfb0:function(t,e,a){"use strict";a.r(e);var i=a("62a6"),s=a("9e47");for(var o in s)"default"!==o&&function(t){a.d(e,t,function(){return s[t]})}(o);a("ce0a");var n=a("2877"),r=Object(n["a"])(s["default"],i["a"],i["b"],!1,null,"e46776aa",null);e["default"]=r.exports},f093:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("28a5");var i={data:function(){return{title:"picker",logo:"",index:2,images:[],image_max:1,store_name:"",store_logo:"",store_banner:"",store_desc:"",store_logo_src:"",store_banner_src:""}},computed:{isImage:function(){var t=this.image_max-this.images.length;return t>0}},methods:{uploadLogo:function(){var t=this;this.$api.uploadFiles(function(e){e.status?(t.store_logo=e.data.image_id,t.logo=e.data.url):t.$common.errorToShow(e.msg)})},submitHandler:function(){var t=this;this.store_name&&""!=this.store_name?this.images.length<=0?this.$common.errorToShow("请上传店招"):this.store_logo?(this.store_banner=this.images[0].image_id,this.$api.setStore({store_name:this.store_name,store_logo:this.store_logo,store_banner:this.store_banner,store_desc:this.store_desc},function(e){e.status?t.$common.successToShow(e.msg,function(t){uni.navigateBack({delta:1})}):t.$common.errorToShow(e.msg)})):this.$common.errorToShow("请上传图标"):this.$common.errorToShow("请填写店铺名称")},upImage:function(){var t=this,e=this.image_max-this.images.length;e>0&&this.$api.uploadImage(e,function(e){e.status?(t.images.push(e.data),t.$common.successToShow(e.msg)):t.$common.errorToShow(e.msg)})},delImage:function(t){for(var e=[],a=0;a<this.images.length;a++)this.images[a].image_id!=t.image_id&&e.push(this.images[a]);this.images=e},clickImg:function(t){uni.previewImage({urls:t.split()})}},onLoad:function(){var t=this;t.$api.getDistributioninfo({check_condition:!1},function(e){e.status?(t.store_name=e.data.store_name,t.store_desc=e.data.store_desc,t.store_logo=e.data.store_logo,e.data.store_logo&&(t.logo=e.data.store_logo_src),t.store_banner=e.data.store_banner,t.store_banner&&t.images.push({image_id:e.data.store_banner,url:e.data.store_banner_src})):t.$common.errorToShow(e.msg)})}};e.default=i}}]);