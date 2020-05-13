import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
// import patientRoutes from './patient'

Vue.use(Router)

const router = new Router({
  routes: [{
      path: '/',
      name: 'login',
      meta: {
        "keepAlive": false
      },
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      meta: {
        "keepAlive": false
      },
      component: Home
    },
    {
      path: '/sevenDayVisit',
      name: 'sevenDayVisit',
      meta: {
        "keepAlive": false
      },
      component: () => import( /* webpackChunkName: "sevenDayVisit" */ '../views/SevenDayVisit.vue')
    },
    {
      path: '/diseaseRank',
      name: 'diseaseRank',
      meta: {
        "keepAlive": false
      },
      component: () => import( /* webpackChunkName: "diseaseRank" */ '../views/DiseaseRank.vue')
    },
    // {
    //   path: '/patient', // 患者详情
    //   meta: {
    //     "keepAlive": false
    //   },
    //   component: () => import( /* webpackChunkName: "patient" */ '../views/Patient.vue'),
    //   children: patientRoutes
    // }
  ]
})


export default router;