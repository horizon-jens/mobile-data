export default [
  {
		path : '/',
		name : 'patientInfo',
		meta : {
			title : '病人信息',
		},
		component: () => import(/* webpackChunkName: "patientInfo" */ '../views/PatientInfo.vue')
  }
]
