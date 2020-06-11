import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import store from './store'
import dateFilter from './filters/date.filter';
import messagePlugin from '@/utils/message.plugin'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

Vue.filter('date', dateFilter)
Vue.use(Vuelidate)
Vue.use(messagePlugin)

const firebaseConfig = {
  apiKey: "AIzaSyCxC0oGVzPsuP7tU23CukgpEGR34Xr13lo",
  authDomain: "study-crm.firebaseapp.com",
  databaseURL: "https://study-crm.firebaseio.com",
  projectId: "study-crm",
  storageBucket: "study-crm.appspot.com",
  messagingSenderId: "553256489079",
  appId: "1:553256489079:web:7be0863d1f2a5b745eb672",
  measurementId: "G-6DKWD9CDCB"
};

firebase.initializeApp(firebaseConfig);

let app;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
    
      render: h => h(App)
    }).$mount('#app')
  }
})

