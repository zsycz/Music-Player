webpackJsonp([1],{"+qfY":function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",[t._v("搜索")])},staticRenderFns:[]}},"06aH":function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"my-tab"},[n("router-link",{staticClass:"tab-item",attrs:{tag:"div",to:{name:"recommend"}}},[n("span",{staticClass:"tab-link"},[t._v("推荐")])]),t._v(" "),n("router-link",{staticClass:"tab-item",attrs:{tag:"div",to:{name:"singer"}}},[n("span",{staticClass:"tab-link"},[t._v("歌手")])]),t._v(" "),n("router-link",{staticClass:"tab-item",attrs:{tag:"div",to:{name:"rank"}}},[n("span",{staticClass:"tab-link"},[t._v("排行\n    ")])]),t._v(" "),n("router-link",{staticClass:"tab-item",attrs:{tag:"div",to:{name:"search"}}},[n("span",{staticClass:"tab-link"},[t._v("搜索")])])],1)},staticRenderFns:[]}},"0da8":function(t,e,n){n("J/4K");var i=n("8+ys")(n("X3Js"),n("VpoV"),"data-v-66fd4484",null);t.exports=i.exports},"4Xo3":function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("m-header"),t._v(" "),n("m-tab"),t._v(" "),n("keep-alive",[n("router-view")],1)],1)},staticRenderFns:[]}},"4i+0":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"search"}},CAmB:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"slider",staticClass:"slider"},[n("div",{ref:"sliderGroup",staticClass:"slider-group clearfix"},[t._t("default")],2),t._v(" "),n("div",{staticClass:"dots"},t._l(t.dots,function(e,i){return n("span",{key:e,staticClass:"dots-item",class:{active:t.currentIndex===i}})}))])},staticRenderFns:[]}},CH0M:function(t,e,n){n("DpCA");var i=n("8+ys")(n("gZ5M"),n("CAmB"),"data-v-1b746f67",null);t.exports=i.exports},D1eJ:function(t,e){},DpCA:function(t,e){},FKKE:function(t,e,n){n("Wxb2");var i=n("8+ys")(n("Qheh"),n("S6K0"),"data-v-8ae32fa4",null);t.exports=i.exports},Gak4:function(t,e,n){"use strict";function i(t,e,n){return t=-1!==t.indexOf("?")?t:t+"?"+r(e),new a.a(function(e,i){o()(t,n,function(t,n){t?i(t):e(n)})})}function r(t){if(!t)return"";var e="";for(var n in t)e+="&"+n+"="+t[n];return e.substring(1)}e.a=i;var s=n("UIuv"),a=n.n(s),c=n("YHeI"),o=n.n(c)},"J/4K":function(t,e){},LXBz:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"MHeader"}},M93x:function(t,e,n){n("rbSV");var i=n("8+ys")(n("dY2U"),n("4Xo3"),null,null);t.exports=i.exports},Mfpu:function(t,e,n){n("qhx2");var i=n("8+ys")(n("N8zh"),n("dQf9"),"data-v-059bcd60",null);t.exports=i.exports},N8zh:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("m40h"),r=n("T452"),s=n("CH0M"),a=n.n(s),c=n("HFUh"),o=n.n(c),l=n("xY2u");n.n(l);e.default={name:"recommend",data:function(){return{picData:[],songList:[]}},created:function(){this.getRecommendPic(),this.getRecommendMusicList(),this.initScroll()},methods:{getRecommendPic:function(){var t=this;n.i(i.a)(r.a,r.b,r.c).then(function(e){e.code===r.d&&(t.picData=e.data.slider,t.initScroll())})},getRecommendMusicList:function(){var t=this;n.i(i.b)(r.e,r.f).then(function(e){e.data.code===r.d&&(t.songList=e.data.data.list,t.initScroll())})},initScroll:function(){var t=this;this.$nextTick(function(){if(t.slider)return void t.slider.refresh();t.slider=new o.a(t.$refs.scrollWrap,{click:!0})})}},components:{Slider:a.a}}},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("5XB1"),r=(n.n(i),n("gt1m")),s=n("M93x"),a=n.n(s),c=n("YaEn"),o=n("TaEZ"),l=n.n(o),u=n("cN2K");n.n(u);l.a.attach(document.body),r.a.config.productionTip=!1,new r.a({el:"#app",router:c.a,render:function(t){return t(a.a)}})},QFs9:function(t,e){},Qheh:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"rank"}},RGpE:function(t,e,n){n("fzl8");var i=n("8+ys")(n("jvNd"),n("06aH"),"data-v-d6fb162c",null);t.exports=i.exports},RMDe:function(t,e,n){n("QFs9");var i=n("8+ys")(n("LXBz"),n("Y38V"),"data-v-7cbc2eae",null);t.exports=i.exports},S6K0:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",[t._v("排行")])},staticRenderFns:[]}},T452:function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"b",function(){return r}),n.d(e,"e",function(){return s}),n.d(e,"c",function(){return a}),n.d(e,"f",function(){return c}),n.d(e,"d",function(){return o});var i="https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg",r={g_tk:5381,inCharset:"utf-8",outCharset:"utf-8",notice:0,format:"jsonp"},s="/api/getMusicList",a={param:"jsonpCallback"},c={rnd:Math.random(),g_tk:1928093487,format:"json",inCharset:"utf-8",outCharset:"utf-8",notice:0,hostUin:0,platform:"yqq",needNewCode:0,categoryId:1e7,sortId:5,sin:0,ein:29},o=0},Vbaa:function(t,e,n){n("D1eJ");var i=n("8+ys")(n("4i+0"),n("+qfY"),"data-v-4c1f78ea",null);t.exports=i.exports},VpoV:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",[t._v("歌手")])},staticRenderFns:[]}},Wxb2:function(t,e){},X3Js:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"singer"}},Y38V:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"my-header"},[n("div",{staticClass:"icon"}),t._v(" "),n("h1",{staticClass:"text"},[t._v("Music")])])}]}},YaEn:function(t,e,n){"use strict";var i=n("gt1m"),r=n("nYn5"),s=n("Mfpu"),a=n.n(s),c=n("0da8"),o=n.n(c),l=n("FKKE"),u=n.n(l),d=n("Vbaa"),f=n.n(d);i.a.use(r.a),e.a=new r.a({routes:[{path:"/",redirect:"/recommend"},{path:"/recommend",name:"recommend",component:a.a},{path:"/singer",name:"singer",component:o.a},{path:"/rank",name:"rank",component:u.a},{path:"/search",name:"search",component:f.a}]})},cN2K:function(t,e){},dQf9:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"scrollWrap",staticClass:"recommend"},[n("div",{staticClass:"scroll-wrap"},[t.picData.length?n("div",{staticClass:"slider-wrap"},[n("slider",t._l(t.picData,function(t){return n("div",{key:t.id,staticClass:"pic-list"},[n("a",{attrs:{href:t.linkUrl}},[n("img",{attrs:{src:t.picUrl,alt:""}})])])}))],1):t._e(),t._v(" "),n("div",{staticClass:"recommend-list"},[n("div",{staticClass:"list-wrap"},[n("h1",{staticClass:"title"},[t._v("热门歌单推荐")]),t._v(" "),n("ul",{staticClass:"content"},t._l(t.songList,function(e){return n("li",{key:e.id,staticClass:"content-item"},[n("div",{staticClass:"list-pic"},[n("img",{attrs:{src:e.imgurl,alt:"",width:"60",height:"60"}})]),t._v(" "),n("div",{staticClass:"list-content"},[n("h2",{staticClass:"name"},[t._v(t._s(e.creator.name))]),t._v(" "),n("p",{staticClass:"dissname"},[t._v(t._s(e.dissname))])])])}))])])])])},staticRenderFns:[]}},dY2U:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("RMDe"),r=n.n(i),s=n("RGpE"),a=n.n(s);e.default={name:"app",components:{MHeader:r.a,MTab:a.a}}},fzl8:function(t,e){},gZ5M:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("HFUh"),r=n.n(i);e.default={name:"slider",data:function(){return{dots:[],currentIndex:0}},props:{loop:{type:Boolean,default:!0},autoPlay:{type:Boolean,default:!0},interval:{type:Number,default:1500}},mounted:function(){var t=this;this.$nextTick(function(){t._setSliderWidth(),t._initSliderScroll(),t._initDots(),t.autoPlay&&t._autoPlay()}),window.addEventListener("resize",function(){t.slider&&(t._setSliderWidth(!0),t.slider.refresh())})},methods:{_setSliderWidth:function(t){this.sliderChildren=this.$refs.sliderGroup.children;var e=this.$refs.slider.clientWidth,n=this.sliderChildren.length;n&&!t&&(n+=2),this.$refs.sliderGroup.style.width=e*n+"px",[].map.call(this.sliderChildren,function(t){t.style.width=e+"px"})},_initSliderScroll:function(){this.slider=new r.a(this.$refs.slider,{scrollX:!0,scrollY:!1,momentum:!1,snap:!0,snapLoop:this.loop,snapThreshold:.3,snapSpeed:400})},_initDots:function(){var t=this;this.dots=new Array(this.sliderChildren.length-2),this.slider.on("scrollEnd",function(){var e=t.slider.getCurrentPage().pageX-1;t.currentIndex=e,t._autoPlay()}),this.slider.on("beforeScrollStart",function(){clearTimeout(t.timer)})},_autoPlay:function(){var t=this,e=this.currentIndex+1;this.timer=setTimeout(function(){e++,t.slider.goToPage(e,0,400)},this.interval)}},destroyed:function(){clearTimeout(this.timer)}}},jvNd:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"MTab"}},m40h:function(t,e,n){"use strict";function i(t,e,i){return n.i(s.a)(t,e,i)}function r(t,e,n){return c.a.get(t,{params:e})}e.a=i,e.b=r;var s=n("Gak4"),a=n("xY2u"),c=n.n(a)},qhx2:function(t,e){},rbSV:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.4d1545f9ac0b97328fa2.js.map