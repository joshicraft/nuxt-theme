webpackJsonp([6],{"6Fm4":function(t,s,a){"use strict";var i=function(){var t=this.$createElement,s=this._self._c||t;return s("section",{staticClass:"section hero"},[s("div",{staticClass:"hero-body"},[s("div",{staticClass:"container"},[this._t("default")],2)])])};i._withStripped=!0;var e={render:i,staticRenderFns:[]};s.a=e},ExLz:function(t,s,a){"use strict";var i=a("6Fm4"),e=a("VU/8")(null,i.a,!1,null,null,null);e.options.__file="components/Section.vue",s.a=e.exports},Hkk6:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=a("TO3V"),e=a("qPDv"),n=a("VU/8")(i.a,e.a,!1,null,null,null);n.options.__file="pages/pricing.vue",s.default=n.exports},SXEa:function(t,s,a){"use strict";var i=a("zyM6"),e=a("WjwI"),n=a("VU/8")(i.a,e.a,!1,null,null,null);n.options.__file="components/Subscribe.vue",s.a=n.exports},TO3V:function(t,s,a){"use strict";var i=a("ExLz"),e=a("SXEa"),n=a("olM8");s.a={name:"pricing",layout:"base",components:{Section:i.a,Subscribe:e.a,Faq:n.a},created:function(){this.$store.commit("SET_PAGE_TITLE","Pricing plans")}}},WjwI:function(t,s,a){"use strict";var i=function(){var t=this.$createElement,s=this._self._c||t;return s("Section",[s("h3",{staticClass:"title"},[this._v("Subscribe")]),s("div",{staticClass:"columns items-center"},[s("div",{staticClass:"column is-5"},[s("article",{staticClass:"content"},[s("p",[this._v("Subscribe to our newsletter to receive exclusive offers and the latest news on our products and services.")])])]),s("div",{staticClass:"column is-7 is-6-desktop is-offset-1-desktop"},[s("b-field",{attrs:{grouped:""}},[s("b-input",{attrs:{type:"email",placeholder:"email@example.com",rounded:"",expanded:""}}),s("p",{staticClass:"control"},[s("button",{staticClass:"button is-rounded is-outlined is-primary"},[this._v("Subscribe")])])],1)],1)])])};i._withStripped=!0;var e={render:i,staticRenderFns:[]};s.a=e},bIuE:function(t,s,a){"use strict";var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"columns is-multiline items-stretch is-desktop"},[t._l(t.faq,function(s,i){return[a("div",{key:s.id,staticClass:"column is-half-desktop",attrs:{"data-aos":"zoom-out","data-aos-delay":100*i}},[a("article",{staticClass:"content"},[a("h2",{staticClass:"title has-text-weight-semibold is-size-6"},[t._v(t._s(s.title))]),a("p",[t._v(t._s(s.body))])])])]})],2)};i._withStripped=!0;var e={render:i,staticRenderFns:[]};s.a=e},kHgo:function(t,s,a){"use strict";s.a={components:{},data:function(){return{faq:[]}},mounted:function(){var t=this,s=this;this.$axios.$get("/faq?_sort=weight").then(function(t){s.faq=t}).catch(function(s){t.$toast.open({duration:5e3,message:"An unexpected error occurred, FAQ contents could not be retrieved.",position:"is-bottom",type:"is-danger"})})}}},olM8:function(t,s,a){"use strict";var i=a("kHgo"),e=a("bIuE"),n=a("VU/8")(i.a,e.a,!1,null,null,null);n.options.__file="components/Faq.vue",s.a=n.exports},qPDv:function(t,s,a){"use strict";var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("main",[a("Section",[a("div",{staticClass:"columns"},[a("div",{staticClass:"column",attrs:{"data-aos":"flip-up"}},[a("div",{staticClass:"message is-large br3"},[a("div",{staticClass:"message-body content is-medium"},[a("h2",[t._v("Pricing plans")]),a("p",[t._v("This is our pricing section where you can find our price plans for any budget and demand. With the price level we set for every budget, everyone can get the best service from individual customers to corporate companies.")])])])])]),a("div",{staticClass:"pricing-table mt5"},[a("div",{staticClass:"pricing-plan",attrs:{"data-aos":"fade-up","data-aos-delay":"100"}},[a("div",{staticClass:"plan-header ttu is-size-6"},[t._v("Starter")]),a("div",{staticClass:"plan-price"},[a("span",{staticClass:"plan-price-amount"},[a("span",{staticClass:"plan-price-currency"},[t._v("$")]),t._v("20")]),t._v("/month")]),a("div",{staticClass:"plan-items"},[a("div",{staticClass:"plan-item"},[t._v("20GB Storage")]),a("div",{staticClass:"plan-item"},[t._v("100 Domains")]),a("div",{staticClass:"plan-item"},[t._v("-")]),a("div",{staticClass:"plan-item"},[t._v("-")])]),a("div",{staticClass:"plan-footer"},[a("button",{staticClass:"button is-fullwidth",attrs:{disabled:"disabled"}},[t._v("Current plan")])])]),a("div",{staticClass:"pricing-plan",attrs:{"data-aos":"fade-up","data-aos-delay":"200"}},[a("div",{staticClass:"plan-header ttu is-size-6"},[t._v("Startups")]),a("div",{staticClass:"plan-price"},[a("span",{staticClass:"plan-price-amount"},[a("span",{staticClass:"plan-price-currency"},[t._v("$")]),t._v("40")]),t._v("/month")]),a("div",{staticClass:"plan-items"},[a("div",{staticClass:"plan-item"},[t._v("20GB Storage")]),a("div",{staticClass:"plan-item"},[t._v("25 Domains")]),a("div",{staticClass:"plan-item"},[t._v("1TB Bandwidth")]),a("div",{staticClass:"plan-item"},[t._v("-")])]),a("div",{staticClass:"plan-footer"},[a("button",{staticClass:"button is-fullwidth"},[t._v("Choose")])])]),a("div",{staticClass:"pricing-plan is-active",attrs:{"data-aos":"fade-up","data-aos-delay":"300"}},[a("div",{staticClass:"plan-header ttu is-size-6"},[t._v("Growing Team")]),a("div",{staticClass:"plan-price"},[a("span",{staticClass:"plan-price-amount"},[a("span",{staticClass:"plan-price-currency"},[t._v("$")]),t._v("60")]),t._v("/month")]),a("div",{staticClass:"plan-items"},[a("div",{staticClass:"plan-item"},[t._v("200GB Storage")]),a("div",{staticClass:"plan-item"},[t._v("50 Domains")]),a("div",{staticClass:"plan-item"},[t._v("1TB Bandwidth")]),a("div",{staticClass:"plan-item"},[t._v("100 Email Boxes")])]),a("div",{staticClass:"plan-footer"},[a("button",{staticClass:"button is-fullwidth"},[t._v("Choose")])])]),a("div",{staticClass:"pricing-plan",attrs:{"data-aos":"fade-up","data-aos-delay":"400"}},[a("div",{staticClass:"plan-header ttu is-size-6"},[t._v("Enterprise")]),a("div",{staticClass:"plan-price"},[a("span",{staticClass:"plan-price-amount"},[a("span",{staticClass:"plan-price-currency"},[t._v("$")]),t._v("100")]),t._v("/month")]),a("div",{staticClass:"plan-items"},[a("div",{staticClass:"plan-item"},[t._v("2TB Storage")]),a("div",{staticClass:"plan-item"},[t._v("100 Domains")]),a("div",{staticClass:"plan-item"},[t._v("1TB Bandwidth")]),a("div",{staticClass:"plan-item"},[t._v("1000 Email Boxes")])]),a("div",{staticClass:"plan-footer"},[a("button",{staticClass:"button is-fullwidth"},[t._v("Choose")])])])])]),a("section",{staticClass:"section hero is-light",attrs:{"data-aos":"zoom-out","data-aos-delay":"250"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"hero-body"},[a("h2",{staticClass:"is-size-3 has-text-weight-semibold has-text-centered mb5"},[t._v("Frequently Asked Questions")]),a("Faq")],1)])]),a("Subscribe",{attrs:{"data-aos":"zoom-out","data-aos-delay":"250"}})],1)};i._withStripped=!0;var e={render:i,staticRenderFns:[]};s.a=e},zyM6:function(t,s,a){"use strict";var i=a("ExLz");s.a={name:"subscribe",components:{Section:i.a}}}});