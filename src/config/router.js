import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../components/page/home.vue'
import list from '../components/page/list.vue'
import numberOption from '../components/page/numberOption.vue'
import routerJson from './router.json'


Vue.use(VueRouter)

// var pageRoutes=[];

// routerJson.page.forEach(function(el,index){
// 	// import _path from el.component;
// 	let obj = {
// 		path: el.path,
// 		name: el.name,
// 		// component: _path
// 	}
// 	pageRoutes.push(obj)
	
// })

const router = new VueRouter({
	routes: 
	[
		{
			path:"/",
			name:"home",
			component: home
		},
		{
			path:"/list",
			name:"list",
			component: list
		},
		{
			path:"/numberOption",
			name:"numberOption",
			component: numberOption
		}
	]
})
export default router