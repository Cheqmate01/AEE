import {  createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import PlayerRegistration from '@/views/PlayerRegView.vue';
import AboutView from '@/views/AboutView.vue';
import ContactUs from '@/views/ContactUs.vue';
import PastEvents from '@/views/PastEventsView.vue';
import CommunityEngagement from '@/views/CommunityEngagementView.vue';

const router = createRouter({
  history: createWebHistory('/'),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'About',
    },
    {
      path: '/register',
      name: 'Register',
      component: PlayerRegistration
    },
    {
      path: '/about-us',
      name: 'AboutUs',
      component: AboutView
    },
    {
      path: '/contact-us',
      name: 'ContactUs',
      component: ContactUs
    },
    {
      path: '/past-events',
      name: 'PastEvents',
      component: PastEvents
    },
    {
      path: '/community-engagement',
      name: 'CommunityEngagement',
      component: CommunityEngagement
    }
  ]
});

export default router;