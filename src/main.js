// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false
let app

firebase.auth().onAuthStateChanged(user => {
  /* eslint-disable no-new */
  if (!app) {
    new Vue({
      el: '#app',
      router,
      components: { App },
      template: '<App/>'
    })
  }
})
/* eslint-disable no-new */

Vue.config.productionTip = false

const config = {
  apiKey: 'AIzaSyDK1OEQt9qfgc46JVBaNiZz8YI7t3pvd0Q',
  authDomain: 'ureteku-mvp.firebaseapp.com',
  databaseURL: 'https://ureteku-mvp.firebaseio.com',
  projectId: 'ureteku-mvp',
  storageBucket: 'ureteku-mvp.appspot.com',
  messagingSenderId: '761747549302'
}
firebase.initializeApp(config)

