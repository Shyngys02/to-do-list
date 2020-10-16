import Vue from 'vue';
import Router from 'vue-router';
import BlankLayout from './modules/app/views/layout/blank/BlankLayout.vue';
import DashboardLayout from '@/modules/app/views/layout/dashboard/DashboardLayout.vue';
import store from '@/store';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '',
      component: DashboardLayout,
      meta: {
        requiresAuth: true,
      },
      children: [
        {
          path: '/',
          name: 'main',
          component: () => import('@/modules/task/views/TheMain.vue'),
        },
        {
          path: '/tasks',
          name: 'tasks',
          component: () => import('@/modules/task/views/Tasks.vue'),
        },
        {
          path: '/test-api-tasks',
          name: 'test-api-tasks',
          component: () => import('@/modules/task/views/TestApiTasks.vue'),
        },
        {
          path: '/task/new',
          name: 'task-new',
          component: () => import('@/modules/task/views/TaskNew.vue'),
        },
        {
          path: '/task/edit/:uuid',
          name: 'task-edit',
          component: () => import('@/modules/task/views/TaskEdit.vue'),
        },
      ],
    },
    {
      path: '',
      name: '',
      component: BlankLayout,
      meta: {
        requiresAuth: false,
      },
      children: [
        {
          path: '*',
          name: 'not-found',
          component: () => import('./modules/app/views/error/NotFound.vue'),
        },
      ],
    },
  ],
});

export default router;
