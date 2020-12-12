(function(t){function e(e){for(var n,c,r=e[0],l=e[1],s=e[2],d=0,p=[];d<r.length;d++)c=r[d],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&p.push(a[c][0]),a[c]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(p.length)p.shift()();return i.push.apply(i,s||[]),o()}function o(){for(var t,e=0;e<i.length;e++){for(var o=i[e],n=!0,r=1;r<o.length;r++){var l=o[r];0!==a[l]&&(n=!1)}n&&(i.splice(e--,1),t=c(c.s=o[0]))}return t}var n={},a={app:0},i=[];function c(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,c),o.l=!0,o.exports}c.m=t,c.c=n,c.d=function(t,e,o){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(c.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(o,n,function(e){return t[e]}.bind(null,n));return o},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var s=0;s<r.length;s++)e(r[s]);var u=l;i.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"034f":function(t,e,o){"use strict";o("85ec")},"56d7":function(t,e,o){"use strict";o.r(e);var n=o("2b0e"),a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("div",{staticStyle:{width:"300px",margin:"auto"}},[o("h3",{staticStyle:{margin:"40px 0"}},[t._v("Geolocation with VueJs")]),o("section",{staticStyle:{"text-align":"left"}},[o("h3",[t._v("Select Type")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.type,expression:"type"}],attrs:{type:"radio",value:"current"},domProps:{checked:t._q(t.type,"current")},on:{change:function(e){t.type="current"}}}),t._v("getCurrentPosition"),o("br"),o("input",{directives:[{name:"model",rawName:"v-model",value:t.type,expression:"type"}],attrs:{type:"radio",value:"watch"},domProps:{checked:t._q(t.type,"watch")},on:{change:function(e){t.type="watch"}}}),t._v("watchPosition"),o("br")]),o("br"),t.location?o("div",{staticStyle:{"text-align":"left"}},[o("span",{staticStyle:{"font-weight":"bold"}},[t._v("Time : ")]),t._v(t._s(new Date(t.location.timestamp).toLocaleString())),o("br"),o("span",{staticStyle:{"font-weight":"bold"}},[t._v("latitude : ")]),t._v(t._s(t.location.coords.latitude.toFixed(4))),o("br"),o("span",{staticStyle:{"font-weight":"bold"}},[t._v("longitude : ")]),t._v(t._s(t.location.coords.longitude.toFixed(4))),o("br"),o("span",{staticStyle:{"font-weight":"bold"}},[t._v("accuracy : ")]),t._v(t._s(t.location.coords.accuracy.toFixed(2))+" - m"),o("br"),o("span",{staticStyle:{"font-weight":"bold"}},[t._v("altitude : ")]),t._v(t._s(null!==t.location.coords.altitude?t.location.coords.altitude.toFixed(2):null)+" - m "),o("br"),o("span",{staticStyle:{"font-weight":"bold"}},[t._v("heading : ")]),t._v(t._s(null!==t.location.coords.heading?t.location.coords.heading.toFixed(2):null)+" "),o("br"),o("span",{staticStyle:{"font-weight":"bold"}},[t._v("speed : ")]),t._v(t._s(null!==t.location.coords.speed?t.location.coords.speed.toFixed(2):null)+" - m/s"),o("br"),t.watchId?o("span",{staticStyle:{"font-weight":"bold"}},[t._v("watchId : ")]):t._e(),t._v(t._s(t.watchId)+" ")]):o("div",[t._v("Type is not selected...")]),o("div",{staticClass:"about-section"},[t._v(" by "),o("span",{staticClass:"aboutme",on:{click:t.toMyPage}},[t._v("Ercan")])])])])},i=[],c={name:"App",components:{},data(){return{location:"",type:"",watchId:""}},mounted(){console.log("Mounted here")},methods:{toMyPage(){this.$gtag.event("direct_to_myMedium",{event_category:"AboutMe",event_label:"ToMyMedium"});const t="https://medium.com/@ercanosmanoglu";window.open(t,"_blank")}},watch:{type(t){console.log("Type Changed to:",t),"geolocation"in navigator&&("current"===this.type?(navigator.geolocation.clearWatch(this.watchId),this.watchId=null,navigator.geolocation.getCurrentPosition(t=>{console.log(t),this.location=t},t=>console.log(t),{enableHighAccuracy:!0,timeout:5e3})):"watch"===this.type&&(this.watchId=navigator.geolocation.watchPosition(t=>{console.log(t),this.location=t},t=>console.log(t),{enableHighAccuracy:!0,timeout:5e3})))}}},r=c,l=(o("034f"),o("2877")),s=Object(l["a"])(r,a,i,!1,null,null,null),u=s.exports,d=o("a584");n["a"].use(d["a"],{config:{id:"G-L7Q8GR6C68"}}),n["a"].config.productionTip=!1,new n["a"]({render:t=>t(u)}).$mount("#app")},"85ec":function(t,e,o){}});
//# sourceMappingURL=app.ef735fba.js.map