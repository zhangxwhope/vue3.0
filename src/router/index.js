import { createRouter, createMemoryHistory, createWebHistory } from 'vue-router';

const isServer = typeof window === 'undefined';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/composition',
    name: 'Composition',
    component: () => import(/* webpackChunkName: "composition" */ '../views/Composition.vue'),
  },
];

export default function () {
  return createRouter({
    history: isServer ? createMemoryHistory() : createWebHistory(process.env.BASE_URL),
    routes,
  });
}
