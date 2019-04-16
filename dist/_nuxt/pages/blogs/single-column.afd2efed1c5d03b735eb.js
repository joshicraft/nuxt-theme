webpackJsonp([15],{"/6oq":function(t,a,s){"use strict";a.a={methods:{isArray:function(t){return!!t&&t.constructor===Array},isObject:function(t){return!!t&&t.constructor===Object}}}},"7gi1":function(t,a,s){"use strict";var i=s("Xxa5"),e=s.n(i),n=s("exGp"),r=s.n(n),l=s("hYtS"),o=s("/6oq");a.a={name:"blogs-single-column",layout:"base",mixins:[o.a],created:function(){this.$store.commit("SET_PAGE_TITLE","Single column blog layout")},components:{Pagination:l.a},data:function(){return{blogs:[],error:null}},mounted:function(){this.error&&this.$toast.open({duration:5e3,message:this.error.message,position:"is-bottom",type:"is-danger"})},asyncData:function(){var t=r()(e.a.mark(function t(a){var s,i=a.app;return e.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.$axios.$get("/blogs?_expand=user&_sort=createdAt&_order=desc");case 3:return s=t.sent,t.abrupt("return",{blogs:s});case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",{error:{message:"An unexpected error occurred, blog contents could not be retrieved."}});case 10:case"end":return t.stop()}},t,this,[[0,7]])}));return function(a){return t.apply(this,arguments)}}()}},EH6O:function(t,a,s){"use strict";var i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("main",{staticClass:"container"},[s("section",{staticClass:"section"},[s("div",{staticClass:"columns is-centered is-multiline"},[s("div",{staticClass:"column is-9"},t._l(t.blogs,function(a,i){return s("div",{key:a.id,staticClass:"column is-full mb4",attrs:{"data-aos":i?"fade-up":"fade"}},[s("figure",{staticClass:"image mb3"},[t.isArray(a.tags)?s("ul",{staticClass:"tags absolute top-1 right-1"},t._l(a.tags,function(a){return s("li",{key:a.id,staticClass:"tag is-size-8 is-secondary ttu"},[t._v(t._s(a.title))])})):t._e(),t.isObject(a.tags)?s("ul",{staticClass:"tags absolute top-1 right-1"},[s("li",{key:a.tags.id,staticClass:"tag is-size-8 is-secondary ttu"},[t._v(t._s(a.tags.title))])]):t._e(),s("img",{staticClass:"br3",attrs:{alt:a.title,src:a.image,srcset:a.image+" 1x, "+a.retina+" 2x"}})]),s("div",{staticClass:"content-wrapper"},[s("h2",{staticClass:"ttu fw7 is-size-6"},[t._v(t._s(a.title))]),s("p",{staticClass:"mv3 opacity-70"},[t._v(t._s(a.description))]),s("div",{staticClass:"card ph3 pv2 br3 is-size-7 ttu"},[s("div",{staticClass:"flex flex-column-ns items-center"},[s("div",{staticClass:"flex items-center mr-auto"},[s("figure",{staticClass:"mr3 image is-32x32"},[s("img",{staticClass:"box-shadow-1 br-100",attrs:{src:a.user.avatar,alt:a.user.name}})]),s("time",{attrs:{datetime:a.createdAt}},[t._v(t._s(t._f("moment")(a.createdAt,"dddd, MMMM Do YYYY")))])]),s("nuxt-link",{staticClass:"b is-size-7 has-text-dark",attrs:{to:"/blogs/"+a.id}},[s("span",{staticClass:"mr2"},[t._v("Read more")]),s("font-awesome-icon",{attrs:{icon:"arrow-right"}})],1)],1)])])])}))]),s("Pagination")],1)])};i._withStripped=!0;var e={render:i,staticRenderFns:[]};a.a=e},MOOa:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=s("7gi1"),e=s("EH6O"),n=s("VU/8")(i.a,e.a,!1,null,null,null);n.options.__file="pages/blogs/single-column.vue",a.default=n.exports},h477:function(t,a,s){"use strict";var i=function(){var t=this.$createElement;this._self._c;return this._m(0)};i._withStripped=!0;var e={render:i,staticRenderFns:[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("nav",{staticClass:"pagination is-centered",attrs:{role:"navigation","aria-label":"pagination"}},[s("a",{staticClass:"pagination-previous"},[t._v("Previous")]),s("a",{staticClass:"pagination-next"},[t._v("Next page")]),s("ul",{staticClass:"pagination-list"},[s("li",[s("a",{staticClass:"pagination-link",attrs:{"aria-label":"Goto page 1"}},[t._v("1")])]),s("li",[s("span",{staticClass:"pagination-ellipsis"},[t._v("…")])]),s("li",[s("a",{staticClass:"pagination-link",attrs:{"aria-label":"Goto page 45"}},[t._v("45")])]),s("li",[s("a",{staticClass:"pagination-link is-current",attrs:{"aria-label":"Page 46","aria-current":"page"}},[t._v("46")])]),s("li",[s("a",{staticClass:"pagination-link",attrs:{"aria-label":"Goto page 47"}},[t._v("47")])]),s("li",[s("span",{staticClass:"pagination-ellipsis"},[t._v("…")])]),s("li",[s("a",{staticClass:"pagination-link",attrs:{"aria-label":"Goto page 86"}},[t._v("86")])])])])}]};a.a=e},hYtS:function(t,a,s){"use strict";var i=s("h477"),e=s("VU/8")(null,i.a,!1,null,null,null);e.options.__file="components/Pagination.vue",a.a=e.exports}});