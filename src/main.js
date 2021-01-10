import Vue from 'vue'
import App from './App.vue'
import router from './router'

import Amplify, * as AmplifyModules from 'aws-amplify'
import { AmplifyPlugin, AmplifyEventBus } from 'aws-amplify-vue'
import awsexports from './aws-exports'

Amplify.configure(awsexports)

Vue.use(AmplifyPlugin, AmplifyModules)
AmplifyEventBus.$on('authState', info => {
  console.log(`Here is the auth event that was just emitted by an Amplify component: ${info}`)
  router.push('home')
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
