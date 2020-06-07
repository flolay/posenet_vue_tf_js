import Vue from 'vue'
import App from './App.vue'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'

import io from 'socket.io-client'
import VueSocketIO from 'vue-socket.io'

Vue.config.productionTip = false

export const ServerAddress = window.location.protocol + '//' + window.location.hostname + ':5000'
console.log(ServerAddress)
export const SocketInstance = io(ServerAddress, { secure: true })

Vue.use(VueMaterial)

Vue.use(new VueSocketIO({
  debug: true,
  connection: SocketInstance
}))

new Vue({
  render: h => h(App),
}).$mount('#app')
