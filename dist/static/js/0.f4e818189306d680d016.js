webpackJsonp([0],{"/3kT":function(e,t,n){t=e.exports=n("FZ+f")(!1),t.push([e.i,".loading[data-v-bde5e3e8]{margin:.133333rem}.loading .loading-wrap[data-v-bde5e3e8]{width:100%;text-align:center}.loading .loading-wrap img[data-v-bde5e3e8]{width:.666667rem;height:.666667rem}.loading .loading-wrap .info[data-v-bde5e3e8]{font-size:.373333rem}",""])},"0aAL":function(e,t,n){"use strict";var r=n("Zrlr"),a=n.n(r),s=function e(t){var n=t.id,r=t.name;a()(this,e),this.id=n,this.name=r,this.avatar="https://y.gtimg.cn/music/photo_new/T001R300x300M000"+n+".jpg?max_age=2592000"};t.a=s},"5Bia":function(e,t,n){t=e.exports=n("FZ+f")(!1),t.push([e.i,".search[data-v-4c1f78ea]{overflow:hidden;top:1.333333rem;left:0;bottom:0;right:0;position:fixed}.search .hot-search-wrap[data-v-4c1f78ea]{margin:.133333rem}.search .hot-search-wrap .title[data-v-4c1f78ea]{color:rgba(0,0,0,.6);font-size:.373333rem}.search .hot-search-wrap .hot-key[data-v-4c1f78ea]{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}.search .hot-search-wrap .hot-key .item[data-v-4c1f78ea]{font-size:.373333rem;padding:.133333rem;margin:.133333rem;background:#fff;border-radius:.066667rem}",""])},"5zde":function(e,t,n){n("zQR9"),n("qyJz"),e.exports=n("FeBl").Array.from},"8stH":function(e,t,n){"use strict";function r(){var e=o()({},c.g,{uin:0,needNewCode:1,platform:"h5"});return n.i(i.a)("https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg",e,c.h)}function a(e,t,r,a){var s=o()({},c.g,{w:e,p:t,perpage:a,n:a,catZhida:r?1:0,zhidaqu:1,t:0,flag:1,ie:"utf-8",sem:1,aggr:0,remoteplace:"txt.mqq.all",uin:0,needNewCode:1,platform:"h5"});return n.i(i.a)("https://c.y.qq.com/soso/fcgi-bin/search_for_qq_cp",s,c.h)}t.a=r,t.b=a;var s=n("woOf"),o=n.n(s),i=n("Gak4"),c=n("T452")},"9Nno":function(e,t,n){n("EeiT");var r=n("VU/8")(n("d+Lw"),n("vvng"),"data-v-bde5e3e8",null);e.exports=r.exports},AJI4:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"search"},[n("div",{staticClass:"search-box-wrap"},[n("search-box",{ref:"search",on:{query:e.query}})],1),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.queryData,expression:"queryData"}],staticClass:"suggest-wrap"},[n("Suggest",{attrs:{query:e.queryData}})],1),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!e.queryData,expression:"!queryData"}],staticClass:"hot-search-wrap"},[n("p",{staticClass:"title"},[e._v("热门搜索")]),e._v(" "),n("ul",{staticClass:"hot-key"},e._l(e.hotkey,function(t){return n("li",{key:t.id,staticClass:"item",on:{click:function(n){e.addQuery(t.k)}}},[e._v(e._s(t.k))])}))]),e._v(" "),n("router-view")],1)},staticRenderFns:[]}},DvO7:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("M4fF"),a=n.n(r);t.default={components:{},data:function(){return{query:""}},props:{placeholder:{type:String,default:"搜索歌曲、歌手"}},methods:{clear:function(){this.query=""},setQuery:function(e){this.query=e}},computed:{},created:function(){this.$watch("query",a.a.debounce(function(e){this.$emit("query",e)},500))},mounted:function(){},destroyed:function(){}}},EarI:function(e,t){function n(e){if(e=String(e),!(e.length>100)){var t=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(t){var n=parseFloat(t[1]);switch((t[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return n*l;case"days":case"day":case"d":return n*u;case"hours":case"hour":case"hrs":case"hr":case"h":return n*c;case"minutes":case"minute":case"mins":case"min":case"m":return n*i;case"seconds":case"second":case"secs":case"sec":case"s":return n*o;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return n;default:return}}}}function r(e){return e>=u?Math.round(e/u)+"d":e>=c?Math.round(e/c)+"h":e>=i?Math.round(e/i)+"m":e>=o?Math.round(e/o)+"s":e+"ms"}function a(e){return s(e,u,"day")||s(e,c,"hour")||s(e,i,"minute")||s(e,o,"second")||e+" ms"}function s(e,t,n){if(!(e<t))return e<1.5*t?Math.floor(e/t)+" "+n:Math.ceil(e/t)+" "+n+"s"}var o=1e3,i=60*o,c=60*i,u=24*c,l=365.25*u;e.exports=function(e,t){t=t||{};var s=typeof e;if("string"===s&&e.length>0)return n(e);if("number"===s&&!1===isNaN(e))return t.long?a(e):r(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},EeiT:function(e,t,n){var r=n("/3kT");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n("rjj0")("7a6d996a",r,!0)},"F4+m":function(e,t,n){"use strict";n.d(t,"a",function(){return o});var r=n("Dd8w"),a=n.n(r),s=n("NYxO"),o={computed:a()({},n.i(s.b)(["playList"])),mounted:function(){this.handlePlayList(this.playList)},activated:function(){this.handlePlayList(this.playList)},watch:{playList:function(e){this.handlePlayList(e)}},methods:{handlePlayList:function(){throw new Error("组件需要使用 handlePlayList")}}}},"Fy0/":function(e,t,n){(function(r){function a(){return!("undefined"==typeof window||!window.process||"renderer"!==window.process.type)||("undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))}function s(e){var n=this.useColors;if(e[0]=(n?"%c":"")+this.namespace+(n?" %c":" ")+e[0]+(n?"%c ":" ")+"+"+t.humanize(this.diff),n){var r="color: "+this.color;e.splice(1,0,r,"color: inherit");var a=0,s=0;e[0].replace(/%[a-zA-Z%]/g,function(e){"%%"!==e&&(a++,"%c"===e&&(s=a))}),e.splice(s,0,r)}}function o(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)}function i(e){try{null==e?t.storage.removeItem("debug"):t.storage.debug=e}catch(e){}}function c(){var e;try{e=t.storage.debug}catch(e){}return!e&&void 0!==r&&"env"in r&&(e=n.i({NODE_ENV:"production"}).DEBUG),e}t=e.exports=n("vmzn"),t.log=o,t.formatArgs=s,t.save=i,t.load=c,t.useColors=a,t.storage="undefined"!=typeof chrome&&void 0!==chrome.storage?chrome.storage.local:function(){try{return window.localStorage}catch(e){}}(),t.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],t.formatters.j=function(e){try{return JSON.stringify(e)}catch(e){return"[UnexpectedJSONParseError]: "+e.message}},t.enable(c())}).call(t,n("W2nU"))},G7KH:function(e,t,n){n("NJUt");var r=n("VU/8")(n("DvO7"),n("a+uU"),"data-v-4a8265d3",null);e.exports=r.exports},Gak4:function(e,t,n){"use strict";function r(e,t,n){return e=-1!==e.indexOf("?")?e:e+"?"+a(t),new o.a(function(t,r){c()(e,n,function(e,n){e?r(e):t(n)})})}function a(e){if(!e)return"";var t="";for(var n in e)t+="&"+n+"="+e[n];return t.substring(1)}t.a=r;var s=n("//Fk"),o=n.n(s),i=n("hU7x"),c=n.n(i)},Gu7T:function(e,t,n){"use strict";t.__esModule=!0;var r=n("c/Tr"),a=function(e){return e&&e.__esModule?e:{default:e}}(r);t.default=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return(0,a.default)(e)}},Lcvq:function(e,t){e.exports="data:image/gif;base64,R0lGODlhZABkAKIEAN7e3rq6uv///5mZmQAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpBRjA4RUZDMDI3MjA2ODExODA4M0Y1OTQyMzVDRDM3MyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpCMzE0Rjk3NDdDRTgxMUUzOUJCRjk0NjAxMUE1NzRBMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpCMzE0Rjk3MzdDRTgxMUUzOUJCRjk0NjAxMUE1NzRBMCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RDVBMTZDQjczOTIwNjgxMTgwODNGNTk0MjM1Q0QzNzMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QUYwOEVGQzAyNzIwNjgxMTgwODNGNTk0MjM1Q0QzNzMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++vby7urm4t7a1tLOysbCvrq2sq6qpqKempaSjoqGgn56dnJuamZiXlpWUk5KRkI+OjYyLiomIh4aFhIOCgYB/fn18e3p5eHd2dXRzcnFwb25tbGtqaWhnZmVkY2JhYF9eXVxbWllYV1ZVVFNSUVBPTk1MS0pJSEdGRURDQkFAPz49PDs6OTg3NjU0MzIxMC8uLSwrKikoJyYlJCMiISAfHh0cGxoZGBcWFRQTEhEQDw4NDAsKCQgHBgUEAwIBAAAh+QQFAAAEACwAAAAAZABkAAAD/0i63P4wykmrvTjrzbv/YCiOZGme6CasbOqObPvOXRzTeGbLeT/tK18KQLwABZeBUlghOgGVY0VJHTAlT2cUOK0ur4+s9sedeKngsBhK3lHO3zRjXZRIJfC4fEFv28xwew50bBB3EHlWgg2EEYcOiYtqYo5lD3mSk5QPjwyRmYNrhpYNmKChog6dCp+njKkNqwSmrq+wDG6QtD4BvRiNsX+lu296Hb3IARd9qjyegRZnH8nUTbfR0IDZG9TdFJsa0trEGd3eE08eVcWJihzm5ovt6x7w8WDz9CD25z35aCT4Vcvxz9gIgchwFJyBUOG8HvwckqNhT6K4K/1oXJST0P8HwFogQ4ocSbKkyVoFP8pJaRARS31MXsJ0KdNdzJo2L+FsqXFnzmE7r/j8CVRmmqDjXh7F2UXpSqMno0qdSrWq1ZNENWby4m/mzY0uJvYUa6JdV7NjW4XNZ1Ft2X9nH5ZIKYSuiIX44ILAu5StOr8RvGIQ/EwuB8OBuW4Aq9NtBseNCbOTXJjx4G14MDdVPJny5qyROS9gDJkmzxkTLZM95ZhcaVCQU6+WJ1v17D2lxb4WRLa3Zkmvff/mPZxV8VnH8x5fvfur5cqem3tMjvw5dJW4qd++HRe7ac/GRWcX/9176NNCwYcn//3qevXuz6OPn9g6/czw7xedrz9x//8KAAYo4IAEFthAAgAh+QQFAAAEACwLAAUAPwAjAAADxUi63P4QyAmrvfhNmrvP2/aNJBNyZdqdkvoFsMcCnmCTcB6AbGb/gpcuhpn5gLfOMFfsXZA/z5JoMT6hQeV0V3VWsEnt8mL9YkdbbsT7AGeF00rZ4U5t5ewGWJVenyB1fHEaeQt7Ln0Oc4aHiIMNiwqNjo8mIW2TCwObcGOQl3qZCpukA1KVCyJ0Zw6lrhl3I6IErrUYniRQELW2FzouQBW8vC7FDcPExsrIvcouzK/OxdCk0sbU1svI2drJ3NfR387V4hgJACH5BAUAAAQALBoABQA/ACMAAAPFSLrcHjC6Sau9L0LMu1ea9o0kE0pl6p2b6g3wynpATcL4wLEBV/+ATw63m2GAv9cwduEdkbbOkmlxXqBRzpRKsVawWe20afxiR1tdxTsBB9HbddnhTsW78wZYlcafKHV8YxNsDHsufRl/dIeIgw2FCo2OjyYhbZOUS4oohpkXAqEVd5CdnlAeoaoCFKQ0Zxirsq1DKaigsrO0XCRAsbm6LsIKwMDDwsXGxynJucsqzcHPI9Gq09DR1y7N2sjF3cPO4MfWHQkAIfkEBQAABAAsLgAFADEAMAAAA71Is0z+MMpJJ2s1a33v/qDTYWFJjYupSugQBvAKtR9sB7KI1ncs05qeLQfMCH2rIuWIVCknzJxiV2HiiFRoVPqEbLnZiFWqGy2P5HJHi053CV/3WjJOq1Pi+AbAz3jobR98gwAyehSEiYY9e4mKi02Ijo92kpOUlRCXk5kRm46dnp+EoZqjfaWmn6kSq6ytl6+Wg7IZtLW4ubq7vL2dAsDBwsPApcTHyL/Iy8GZzM/FdtDPztPHytbDodnCDgkAIfkEBQAABAAsOwAKACQAPwAAA69IujzOMMpJnB0062u1h1z3jeEzeqV5Zum6te6UYrFc1vaNR/De9D4FMDgLLoqngDLHSSqfkuHkSV3ympqqlunRbndeLy4sjpG/5jN1rLayz0a4kUCeL9B2BTTP7/v/gIERAISFhoeELoiLjCeMj4YjkJOJHpSTkpeLjpqIK52RgqKjpKUjAoECqqp+q66oea+vdrKyRrW2Qbi5O7u8OL6uusGsw8Fzx7S4fMt9sxEJACH5BAUAAAQALDsAGQAkAD8AAAOtSLrcziO+SV+8o2qL8f5d+GmhOHJldzZpuS6t+RKxOtO1dCv5DrU+VirokBGFmaNyyWw6n8yAdEqtSl/WrPak7VJH3vB1Iw6Dy1ku2rpaf6HwuHzuBMQBePwzz7cz+31LgIBHg4REhoc+iYo7jHyIj3oTApUCGpJ+DZaWG48PnJ2ehg6hoqONCqanqJOlq02rlbGyTLKXtrW5prSwu6G9vL/Aw6xHusW4yU/EOwkAIfkEBQAABAAsLgAtADEAMQAAA7lIutz+ZMhJq4Q4L8u7/k0nUmA5nlepoaf6sZ67wpb80pOt73zv/8CgcLgLEGWBZPIIUjqNTMzzGX1Mp1XGFZtVbLnZL7gqdnYJZWUPwAZo0lBbu/0p7+b0+laHz+vHCwKCgw59fn9LD4OEhYZCi4uNjkCQjA2GbJSVAg+Ybj+bnJ2YoJsYpD6hp6g8qqt9qaavsK2ys3i1lR+sNq4ZvDK+v7Q6wreZO8a3PcpdzVnP0JBnitPU1dcOCQAh+QQFAAAEACwaADoAPwAkAAADyEi63P4wkiGrvXhojbu3W0h9ZCmKZZqdqOo+7PnOTCzTs33jrh7yL99GIigKXIFkoCIcOYzGlFIJ0j2g0dKUWmVdsUXSltttMcBZBmDNdozJZecZ/WC33W8cOtyw2/F5L3tHDn53DW9Jgnt1hgAPiUsqgxCOj5CJk3SVjhGZJZSchp6fH4wRlhKlHaGifqqrFq2uf7CBF6cSqRWxRJu6nby3smAXu8JbrMUWx7ZTHlgYzc6SQIXB1jPT2Snb3CWj39qv4jRr5QwJACH5BAUAAAQALAsAOgA/ACQAAAPHSLrcJC7KSesUGNvNu8og5I3kE4Jlap2n6kZs+86xPKu1fZc5uuM9zS8VFE0ASIBrwBxccpZkMtVsSmob6bRUtTpiHO3W0/V+fVkx0hFoux1l80ytZLvbkbjzRq8z7ndwenN0EYBvgnEvfYaHAXmDKoyNhxJ6eyWFEo6PloqZmpSAE5egYhScFJEek5uOqqtpahWpsJ+yWha1tl0doRO7pLdRp7qvFsMVs8aVyGWsUhzBvJhDDdPWKtjZJdvcJM3fL+Hi450qCQAh+QQFAAAEACwFAC0AMQAxAAADukgq3P5MyUmrlTDryzvRoOONU2hG5HiaKblurfpCsTs3da7vfO//wKBwCAQQa4Bk8jhSOo1My/MZpUynVckVW91ymd7vMezMkpXmsyfADvDIo3Z75yXJ57pt6o7PUfd8bBUDhIVDgW6DhYRCiIkTi4tAjhaRhj+UipaYiBeWjD6dnp+hopWkPaanmzyZo6w6rq+RrYEjnwO1fLeosbu8sDm2wLS6giS4WavFypC9zQrJ0M6S09SX1s4SCQAh+QQFAAAEACwFABkAJAA/AAADrki6Ks4wytmcpRjb/bJfXPh5oThSZXlOqbpGrfmC8TZD9XUz+Q63vp8riOMQUZ2jcslsOp8MgHRKrUpf1qz2pO1SR97w1SMOg8tZLtq6Wn+h8Lh8Tj8F4oF83qnv35V+fkeBgUSEhTuHiDOKiy+NfT6QepKTGQOYAxOQHpmZEoofnp8RhyOjpBCCp6iYTK2aS7CxR7OvsLK4uai3rb2jv8BKtrvCxZ5Nvsm8TsYRCQAh+QQFAAAEACwFAAoAJAA/AAADrki63K4ivklnvKJqi+X+S3eBoOiRmnmilMqm7tvG8kPXjZrhzs1Dvl+Qp6MAjqii48gEkILN6AcalcIwj2p1g81qt7yv9icG18pWHJr5I6zbijI8/p0vzHa6M8/v+/+AGgGDhIWGgyyHioski46FII+SiBuTkpGWio2ZhyickIGhoqOkogOAA6mpfKqtp3Curm2xsT+0tTW3uC+6uyy9rTjAqsLDtr2wt3bKebI/CQA7"},NJUt:function(e,t,n){var r=n("xdrU");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n("rjj0")("3f9d99e9",r,!0)},PCjn:function(e,t,n){n("ukYI");var r=n("VU/8")(n("zv+q"),n("RgED"),"data-v-48373b58",null);e.exports=r.exports},PvFA:function(e,t,n){"use strict";function r(e){return new g({id:e.songid,mid:e.songmid,singer:a(e.singer),name:e.songname,album:e.albumname,duration:e.interval,image:"https://y.gtimg.cn/music/photo_new/T002R300x300M000"+e.albummid+".jpg?max_age=2592000",url:"http://ws.stream.qqmusic.qq.com/"+e.songid+".m4a?fromtag=46"})}function a(e){var t=[];return e?(e.forEach(function(e){t.push(e.name)}),t.join("/")):""}t.a=r;var s=n("//Fk"),o=n.n(s),i=n("Zrlr"),c=n.n(i),u=n("wxAW"),l=n.n(u),d=n("9cIF"),f=n("T452"),p=n("xrTZ"),g=(n.n(p),function(){function e(t){var n=t.id,r=t.mid,a=t.singer,s=t.name,o=t.album,i=t.duration,u=t.image,l=t.url;c()(this,e),this.id=n,this.mid=r,this.singer=a,this.name=s,this.album=o,this.duration=i,this.image=u,this.url=l}return l()(e,[{key:"getLyric",value:function(){var e=this;return this.lyric?o.a.resolve(this.lyric):new o.a(function(t,r){n.i(d.a)(e.mid).then(function(n){n.retcode===f.d?(e.lyric=p.Base64.decode(n.lyric),t(e.lyric)):r("no lyric")})})}}]),e}())},RCo6:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("G7KH"),a=n.n(r),s=n("PCjn"),o=n.n(s),i=n("8stH"),c=n("T452");t.default={name:"search",data:function(){return{hotkey:[],queryData:""}},created:function(){this._getHotKey()},methods:{_getHotKey:function(){var e=this;n.i(i.a)().then(function(t){t.code===c.d&&(e.hotkey=t.data.hotkey.slice(0,10))})},addQuery:function(e){this.$refs.search.setQuery(e)},query:function(e){this.queryData=e}},components:{SearchBox:a.a,Suggest:o.a}}},RgED:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Scroll",{ref:"scrollWrap",staticClass:"suggest-wrap",attrs:{data:e.result,pullUp:e.pullUp},on:{scrollToEnd:e.searchMoreData}},[n("ul",{staticClass:"suggest-list"},[e._l(e.result,function(t){return n("li",{key:t.id,staticClass:"suggest-item",on:{click:function(n){e.selectItem(t)}}},[n("div",{staticClass:"icon"},[n("i",{class:e.getIconCls(t)})]),e._v(" "),n("div",{staticClass:"name"},[n("p",{staticClass:"text",domProps:{innerHTML:e._s(e.getDisplayName(t))}})])])}),e._v(" "),n("Loading",{attrs:{show:e.loadMore,title:"加载更多"}})],2)])},staticRenderFns:[]}},T452:function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"b",function(){return a}),n.d(t,"c",function(){return s}),n.d(t,"e",function(){return o}),n.d(t,"f",function(){return i}),n.d(t,"l",function(){return c}),n.d(t,"m",function(){return u}),n.d(t,"n",function(){return l}),n.d(t,"j",function(){return d}),n.d(t,"i",function(){return f}),n.d(t,"k",function(){return p}),n.d(t,"g",function(){return g}),n.d(t,"h",function(){return h}),n.d(t,"d",function(){return m});var r="https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg",a={g_tk:5381,inCharset:"utf-8",outCharset:"utf-8",notice:0,format:"jsonp"},s={param:"jsonpCallback"},o="/api/getMusicList",i={rnd:Math.random(),g_tk:1928093487,format:"json",inCharset:"utf-8",outCharset:"utf-8",notice:0,hostUin:0,platform:"yqq",needNewCode:0,categoryId:1e7,sortId:5,sin:0,ein:30},c="https://c.y.qq.com/v8/fcg-bin/v8.fcg",u={channel:"singer",page:"list",key:"all_all_all",pagesize:100,pagenum:1,g_tk:5381,jsonpCallback:"",loginUin:0,hostUin:0,format:"jsonp",inCharset:"utf8",outCharset:"utf-8",notice:0,platform:"yqq",needNewCode:0},l={param:"jsonpCallback",prefix:"GetSingerListCallback"},d="https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg",f={g_tk:5381,loginUin:0,hostUin:0,format:"jsonp",inCharset:"utf8",outCharset:"utf-8",notice:0,platform:"yqq",needNewCode:0,order:"listen",begin:0,num:30,songstatus:1},p={param:"jsonpCallback",prefix:"MusicJsonCallbacksinger_track"},g={g_tk:1928093487,inCharset:"utf-8",outCharset:"utf-8",notice:0,format:"jsonp"},h={param:"jsonpCallback"},m=0},Uso6:function(e,t,n){var r=n("5Bia");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n("rjj0")("135d59c6",r,!0)},Vbaa:function(e,t,n){n("Uso6");var r=n("VU/8")(n("RCo6"),n("AJI4"),"data-v-4c1f78ea",null);e.exports=r.exports},Zrlr:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},"a+uU":function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"search-box"},[n("i",{staticClass:"icon-search"}),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.query,expression:"query"}],ref:"queryRef",staticClass:"box",attrs:{type:"text",placeholder:e.placeholder},domProps:{value:e.query},on:{input:function(t){t.target.composing||(e.query=t.target.value)}}}),e._v(" "),n("i",{directives:[{name:"show",rawName:"v-show",value:e.query,expression:"query"}],staticClass:"icon-dismiss",on:{click:e.clear}})])},staticRenderFns:[]}},"c/Tr":function(e,t,n){e.exports={default:n("5zde"),__esModule:!0}},"d+Lw":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"loading",props:{show:{type:Boolean,default:!0},title:{type:String,default:"玩命加载中..."}}}},fBQ2:function(e,t,n){"use strict";var r=n("evD5"),a=n("X8DO");e.exports=function(e,t,n){t in e?r.f(e,t,a(0,n)):e[t]=n}},hU7x:function(e,t,n){function r(){}function a(e,t,n){function a(){c.parentNode&&c.parentNode.removeChild(c),window[d]=r,u&&clearTimeout(u)}function i(){window[d]&&a()}"function"==typeof t&&(n=t,t={}),t||(t={});var c,u,l=t.prefix||"__jp",d=t.name||l+o++,f=t.param||"callback",p=null!=t.timeout?t.timeout:6e4,g=encodeURIComponent,h=document.getElementsByTagName("script")[0]||document.head;return p&&(u=setTimeout(function(){a(),n&&n(new Error("Timeout"))},p)),window[d]=function(e){s("jsonp got",e),a(),n&&n(null,e)},e+=(~e.indexOf("?")?"&":"?")+f+"="+g(d),e=e.replace("?&","?"),s('jsonp req "%s"',e),c=document.createElement("script"),c.src=e,h.parentNode.insertBefore(c,h),i}var s=n("Fy0/")("jsonp");e.exports=a;var o=0},kgCs:function(e,t,n){t=e.exports=n("FZ+f")(!1),t.push([e.i,".suggest-wrap[data-v-48373b58]{position:fixed;overflow:hidden;top:2.533333rem;left:0;right:0;bottom:0}.suggest-wrap .suggest-list[data-v-48373b58]{overflow:hidden;padding:0 .266667rem}.suggest-wrap .suggest-list .suggest-item[data-v-48373b58]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:.266667rem 0}.suggest-wrap .suggest-list .icon[data-v-48373b58]{width:.666667rem;line-height:1.5cm;font-size:.373333rem}.suggest-wrap .suggest-list .icon [class^=icon-][data-v-48373b58]{color:#000}.suggest-wrap .suggest-list .name[data-v-48373b58]{-webkit-box-flex:1;-ms-flex:1;flex:1;font-size:.373333rem;color:#000;overflow:hidden}.suggest-wrap .suggest-list .result[data-v-48373b58]{text-align:center;padding:.266667rem}.suggest-wrap .suggest-list .loading-wrap[data-v-48373b58]{height:.666667rem;margin-bottom:.266667rem}.suggest-wrap .no-result-wrapper[data-v-48373b58]{position:absolute;width:100%;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}",""])},qyJz:function(e,t,n){"use strict";var r=n("+ZMJ"),a=n("kM2E"),s=n("sB3e"),o=n("msXi"),i=n("Mhyx"),c=n("QRG4"),u=n("fBQ2"),l=n("3fs2");a(a.S+a.F*!n("dY0y")(function(e){Array.from(e)}),"Array",{from:function(e){var t,n,a,d,f=s(e),p="function"==typeof this?this:Array,g=arguments.length,h=g>1?arguments[1]:void 0,m=void 0!==h,v=0,A=l(f);if(m&&(h=r(h,g>2?arguments[2]:void 0,2)),void 0==A||p==Array&&i(A))for(t=c(f.length),n=new p(t);t>v;v++)u(n,v,m?h(f[v],v):f[v]);else for(d=A.call(f),n=new p;!(a=d.next()).done;v++)u(n,v,m?o(d,h,[a.value,v],!0):a.value);return n.length=v,n}})},ukYI:function(e,t,n){var r=n("kgCs");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n("rjj0")("7a4ac938",r,!0)},vmzn:function(e,t,n){function r(e){var n,r=0;for(n in e)r=(r<<5)-r+e.charCodeAt(n),r|=0;return t.colors[Math.abs(r)%t.colors.length]}function a(e){function n(){if(n.enabled){var e=n,r=+new Date,a=r-(u||r);e.diff=a,e.prev=u,e.curr=r,u=r;for(var s=new Array(arguments.length),o=0;o<s.length;o++)s[o]=arguments[o];s[0]=t.coerce(s[0]),"string"!=typeof s[0]&&s.unshift("%O");var i=0;s[0]=s[0].replace(/%([a-zA-Z%])/g,function(n,r){if("%%"===n)return n;i++;var a=t.formatters[r];if("function"==typeof a){var o=s[i];n=a.call(e,o),s.splice(i,1),i--}return n}),t.formatArgs.call(e,s);(n.log||t.log||console.log.bind(console)).apply(e,s)}}return n.namespace=e,n.enabled=t.enabled(e),n.useColors=t.useColors(),n.color=r(e),"function"==typeof t.init&&t.init(n),n}function s(e){t.save(e),t.names=[],t.skips=[];for(var n=("string"==typeof e?e:"").split(/[\s,]+/),r=n.length,a=0;a<r;a++)n[a]&&(e=n[a].replace(/\*/g,".*?"),"-"===e[0]?t.skips.push(new RegExp("^"+e.substr(1)+"$")):t.names.push(new RegExp("^"+e+"$")))}function o(){t.enable("")}function i(e){var n,r;for(n=0,r=t.skips.length;n<r;n++)if(t.skips[n].test(e))return!1;for(n=0,r=t.names.length;n<r;n++)if(t.names[n].test(e))return!0;return!1}function c(e){return e instanceof Error?e.stack||e.message:e}t=e.exports=a.debug=a.default=a,t.coerce=c,t.disable=o,t.enable=s,t.enabled=i,t.humanize=n("EarI"),t.names=[],t.skips=[],t.formatters={};var u},vvng:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"loading"},[r("div",{staticClass:"loading-wrap"},[r("img",{attrs:{src:n("Lcvq")}}),e._v(" "),r("div",{staticClass:"info"},[e._v(e._s(e.title))])])])},staticRenderFns:[]}},wxAW:function(e,t,n){"use strict";t.__esModule=!0;var r=n("C4MV"),a=function(e){return e&&e.__esModule?e:{default:e}}(r);t.default=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),(0,a.default)(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}()},xdrU:function(e,t,n){t=e.exports=n("FZ+f")(!1),t.push([e.i,".search-box[data-v-4a8265d3]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;box-sizing:border-box;width:100%;padding:0 .266667rem;height:1.066667rem;background:#fff;border-radius:.08rem}.search-box .icon-search[data-v-4a8265d3]{font-size:.8rem;color:#222}.search-box .box[data-v-4a8265d3]{-webkit-box-flex:1;-ms-flex:1;flex:1;margin:0 .066667rem;border:0;outline:none;background:#f4f4f4;line-height:1.5;color:#000;font-size:.373333rem}.search-box .box[data-v-4a8265d3]::-webkit-input-placeholder{color:grey}.search-box .box[data-v-4a8265d3]:-ms-input-placeholder{color:grey}.search-box .box[data-v-4a8265d3]::placeholder{color:grey}.search-box .icon-dismiss[data-v-4a8265d3]{font-size:.373333rem;color:#222}",""])},"zv+q":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("Gu7T"),a=n.n(r),s=n("Dd8w"),o=n.n(s),i=n("NYxO"),c=n("8stH"),u=n("T452"),l=n("PvFA"),d=n("0aAL"),f=n("zu6c"),p=n.n(f),g=n("F4+m"),h=n("9Nno"),m=n.n(h);t.default={mixins:[g.a],data:function(){return{page:1,perpage:20,result:[],pullUp:!0,loadMore:!0,loadEnd:!0}},props:{query:{type:String,default:""},showSinger:{type:Boolean,default:!0}},watch:{query:function(e){this.resetQuery(),e&&this.search()}},methods:o()({},n.i(i.c)({setSinger:"SET_SINGER"}),n.i(i.d)(["insertSong"]),{search:function(){var e=this;n.i(c.b)(this.query,this.page,this.showSinger,this.perpage).then(function(t){t.code===u.d&&(e.sloveResult(t.data).length,e.result=[].concat(a()(e.result),a()(e.sloveResult(t.data))),e.page++)})},searchMoreData:function(){this.search()},resetQuery:function(){this.result=[],this.page=1},sloveResult:function(e){var t=[];return e.zhida&&e.zhida.singerid&&t.push(o()({},e.zhida,{type:"singer"})),e.song&&(t=t.concat(this._normalizeSongs(e.song.list))),t},_normalizeSongs:function(e){var t=[];return e.forEach(function(e){e.songid&&e.albummid&&t.push(n.i(l.a)(e))}),t},getIconCls:function(e){return"singer"===e.type?"icon-mine":"icon-music"},getDisplayName:function(e){return"singer"===e.type?e.singername:e.name+"-"+e.singer},selectItem:function(e){if("singer"===e.type){var t=new d.a({id:e.singermid,name:e.singername});this.setSinger(t),this.$router.push({path:"/search/"+t.id})}else this.insertSong(e);this.$emit("select",e)},handlePlayList:function(e){var t=document.getElementsByClassName("mini-player")[0],n=getComputedStyle(t).height,r=e.length>0?n:"";this.$refs.scrollWrap.$el.style.bottom=r,this.$refs.scrollWrap.refresh()}}),computed:{},components:{Scroll:p.a,Loading:m.a}}}});