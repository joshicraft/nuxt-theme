webpackJsonp([24],{"6cEm":function(t,s,e){"use strict";var a=e("Xxa5"),i=e.n(a),r=e("exGp"),o=e.n(r);s.a={name:"portfolio",layout:"base",components:{},computed:{backgroundOpacity:function(){return["mobile-small","mobile-medium","mobile-large","tablet"].indexOf(this.$mq)>-1?.35:.8}},data:function(){return{portfolio:[],error:null}},mounted:function(){this.error&&this.$toast.open({duration:5e3,message:this.error.message,position:"is-bottom",type:"is-danger"})},created:function(){this.$store.commit("SET_PAGE_TITLE","Portfolio - single column")},asyncData:function(){var t=o()(i.a.mark(function t(s){var e,a=s.app;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,a.$axios.$get("/portfolios?_sort=createdAt");case 3:return e=t.sent,t.abrupt("return",{portfolio:e});case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",{error:{message:"An unexpected error occurred, portfolio contents could not be retrieved."}});case 10:case"end":return t.stop()}},t,this,[[0,7]])}));return function(s){return t.apply(this,arguments)}}()}},"7kss":function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("main",[e("section",{staticClass:"section"},[e("div",{staticClass:"container"},[e("div",{staticClass:"columns is-multiline"},[t._l(t.portfolio,function(s){return[e("div",{key:s.id,staticClass:"column is-full mb4",attrs:{"data-aos":"fade-up","data-aos-delay":"100"}},[e("div",{staticClass:"background-wrapper lazy br3 box-shadow-1",attrs:{"data-image":s.image,"data-retina":"p.retina"}},[e("div",{staticClass:"columns is-gapless"},[e("div",{staticClass:"column is-8 is-6-desktop"},[e("div",{staticClass:"hero is-medium br3 br--left",style:"background-color: rgba(255,255,255, "+t.backgroundOpacity+")"},[e("div",{staticClass:"hero-body"},[e("div",{staticClass:"ph5-l"},[e("h3",{staticClass:"is-size-7 ttu tracked has-text-grey"},[t._v(t._s(s.tags[0].title))]),e("h2",{staticClass:"title"},[t._v(t._s(s.title))]),e("p",[t._v(t._s(s.description))]),e("p",{staticClass:"mt3"},[e("nuxt-link",{staticClass:"button is-rounded",attrs:{to:"/portfolio/"+s.id}},[e("span",{staticClass:"fw7 ttu is-size-7 ph3"},[t._v("Preview")])])],1)])])])])])])])]})],2)])])])};a._withStripped=!0;var i={render:a,staticRenderFns:[]};s.a=i},acQA:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e("6cEm"),i=e("7kss"),r=e("VU/8")(a.a,i.a,!1,null,null,null);r.options.__file="pages/portfolio/single-column.vue",s.default=r.exports}});