import Vue from 'vue';
import VueRouter from 'vue-router'
import singleSpaVue from 'single-spa-vue';

import App from './App.vue';
Vue.use(VueRouter)

// 路由组件
const Foo = { template: "<div>foo</div>" }
const Bar = { template: "<div>bar</div>" }

const routes = [
  {path:"/foo",component:Foo},
  {path:"/bar",component:Bar}
]
const router = new VueRouter({
  routes,
  mode:'history',
  base:'/realworld'
})

Vue.config.productionTip = false;

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    router,
    render(h) {
      return h(App, {
        props: {
          // single-spa props are available on the "this" object. Forward them to your component as needed.
          // https://single-spa.js.org/docs/building-applications#lifecyle-props
          // if you uncomment these, remember to add matching prop definitions for them in your App.vue file.
          
          name: this.name,
          mountParcel: this.mountParcel,
          singleSpa: this.singleSpa,
        
        },
      });
    },
  },
});

export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;
