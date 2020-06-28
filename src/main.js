import Vue from 'vue'
import App from './App.vue'
import router from './router';
// main.js
// 在生产环境中让sentry报错

import * as Sentry from '@sentry/browser';
import { Vue as VueIntegration } from '@sentry/integrations';

process.env.NODE_ENV === "production" && Sentry.init({
  dsn: 'https://ff990e378b09446cbc3f7d1f3de33d27@o406404.ingest.sentry.io/5299644',
  integrations: [new VueIntegration({Vue, attachProps: true})],
});
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
