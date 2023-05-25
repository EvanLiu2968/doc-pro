import { createRouter, createWebHistory } from 'vue-router'
import { useUserInfo } from '@/hooks/useUserInfo'

export const routes = [
  {
    path: '/',
    component: () => import('../views/index.vue'),
    name: 'Index',
    meta: {
      title: '首页'
    }
  },
  {
    path: '/doc',
    component: () => import('@/views/doc/index.vue'),
    redirect: '/doc/report',
    meta: {
      title: '格式检测',
    },
    children: [
      {
        path: 'report',
        component: () => import('@/views/doc/report/index.vue'),
        name: 'Report',
        meta: {
          title: '报告',
        }
      },
      {
        path: 'correct',
        component: () => import('@/views/doc/correct/index.vue'),
        name: 'Correct',
        meta: {
          title: '批注',
        }
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('../views/404.vue'),
    name: 'PageNotFound',
    meta: {
      title: '404 - 页面未找到'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

router.beforeEach(async(to, from, next) => {
  next()
})

router.afterEach(() => {
  // done
})

export const replaceRouteQuery = (query = {}) => {
  const route = router.currentRoute.value
  router.replace({
    path: route.path,
    hash: route.hash,
    params: route.params,
    query: Object.assign({}, route.query, query)
  })
}

function objectToQueryString(obj) {
  return Object.entries(obj).map(([key, value]) => {
    return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
  }).join('&');
}

export const getShareUrl = () => {
  const route = router.currentRoute.value
  const { userInfo } = useUserInfo()
  const obj = {}
  const source = route.query.source || ''
  const inviteCode = route.query.inviteCode || userInfo.value.inviteCode || ''
  if (source) {
    obj.source = source
  }
  if (inviteCode) {
    obj.inviteCode = inviteCode
  }
  const query = objectToQueryString(obj)
  return `${location.origin}${location.pathname}${query ? `?${query}` : ''}`
}

export default router
