import { createApp } from 'vue';
import App from './App.vue';
import './assets/main.css';
import { autoAnimatePlugin } from '@formkit/auto-animate/vue';
import { createRouter, createWebHistory } from 'vue-router';

import Home from './pages/Home.vue';
import Favorites from './pages/Favorites.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/favorites', name: 'Favorites', component: Favorites },
];

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
});

createApp(App).use(autoAnimatePlugin).use(router).mount('#app');
