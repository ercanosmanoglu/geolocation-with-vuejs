import Vue from "vue";
import App from "./App.vue";
import VueGtag from 'vue-gtag';

Vue.use(VueGtag, {
  config:{
    id:"G-L7Q8GR6C68"
  }
});

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");