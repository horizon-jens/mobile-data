import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'

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
    {
      path: '/EHRRate',
      name: 'EHRRate',
      meta: {
        "keepAlive": false
      },
      component: () => import( /* webpackChunkName: "EHRRate" */ '../views/EHRRate.vue')
    },
    {
      path: '/incomeAnalyse',
      name: 'incomeAnalyse',
      meta: {
        "keepAlive": false
      },
      component: () => import( /* webpackChunkName: "incomeAnalyse" */ '../views/IncomeAnalyse.vue')
    },
    {
      path: '/hospitalizedAnalyse',
      name: 'hospitalizedAnalyse',
      meta: {
        "keepAlive": false
      },
      component: () => import( /* webpackChunkName: "hospitalizedAnalyse" */ '../views/HospitalizedAnalyse.vue')
    },
    // {
    //   path: '/patient',
    //   meta: {
    //     "keepAlive": false
    //   },
    //   component: () => import( /* webpackChunkName: "patient" */ '../views/Patient.vue'),
    //   children: patientRoutes
    // }
  ]
})


export default router;