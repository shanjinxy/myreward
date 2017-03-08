// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import goods from "./components/goods/goods.vue";
import seller from "./components/seller/seller.vue";
import ratings from "./components/ratings/ratings.vue";
// impor index from "./components/index/index.vue";t
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/index',
      component: goods
    },
    {
      path: '/seller',
      component: seller
    },
    {
      path: '/ratings',
      component: ratings
    }
  ],
  linkActiveClass: 'active'
})
new Vue({
    router,
    template: '<App/>',
    components: {
      App
    },
    data: {
      eventHub: new Vue()
    }
  }
).$mount('#app')

router.push('index')
