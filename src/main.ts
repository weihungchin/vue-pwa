import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import * as firebase from 'firebase';

Vue.config.productionTip = false;

const config = {
  apiKey: 'AIzaSyBGca4owiCgM6kxPUaarzNmUoSvYh3JTuw',
  authDomain: 'vuepwa-89a45.firebaseapp.com',
  databaseURL: 'https://vuepwa-89a45.firebaseio.com',
  projectId: 'vuepwa-89a45',
  storageBucket: 'vuepwa-89a45.appspot.com',
  messagingSenderId: '313384925980'
};
firebase.initializeApp(config);
const messaging = firebase.messaging();

messaging.usePublicVapidKey(
  'BIdYnUrKHu6jM6uHwEo--X5XDieqllQB_8y56ZtKOKHtS_WqmwwnQWp0MEkvDFnk_AKc2kqoTaYlWnmmZNc6paE'
); // 1. Generate a new key pair

// Request Permission of Notifications
messaging
  .requestPermission()
  .then(() => {
    console.log('Notification permission granted.');

    // Get Token
    messaging.getToken().then(token => {
      console.log(token);
    });
  })
  .catch(err => {
    console.log('Unable to get permission to notify.', err);
  });

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
