import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../components/page/home.vue'
import test from '../components/page/test.vue'
import text from '../components/page/text.vue'
import plugin from '../components/page/pluginPage/index.vue'
import numberOption from '../components/page/pluginPage/numberOption.vue'
import routerJson from './router.json'
import three from '../components/page/pluginPage/three/threedemo.vue'
import vr from '../components/page/pluginPage/three/vr.vue'
import fileUpload from '../components/page/fileUpload.vue'
import list from '../components/page/list.vue'

import prototypeInheritance from '../components/page/article/prototypeInheritance/prototypeInheritance.vue'
import clickDelay from '../components/page/article/clickDelay/clickDelay.vue'

import websocket from '../components/page/websocket.vue'


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
	// mode: 'history',
	routes:
		[
			{
				path: "/",
				name: "home",
				component: home,
				meta: {
					title: '首页',
				}
			},
			{
				path: "/text",
				name: "text",
				component: text
			},
			{
				path: "/test",
				name: "test",
				component: test
			},
			{
				path: "/numberOption",
				name: "numberOption",
				component: numberOption
			},
			{
				path: "/fileUpload",
				name: "fileUpload",
				component: fileUpload
			},
			{
				path: "/list",
				name: "list",
				component: list
			},
			// {
			// 	path: "/article",
			// 	name: "article",
			// 	component: prototypeInheritance,
			// 	children:[
			// 		{
			// 			path:'prototypeInheritance',
			// 			name: "prototypeInheritance",
			// 			component: prototypeInheritance,
			// 		},
			// 	]
			// },
			{
				path: "/article",
				name: "article",
				component: clickDelay,
			},
			{
				path: "/pluginPage",
				name: "plugin",
				component: plugin,
				children: [
					{
						path: "numberOption",
						name: "numberOption",
						component: numberOption,
					},
					{
						path: "three",
						name: "three",
						component: three,
					},
					{
						path: "vr",
						name: "vr",
						component: vr,
					},
					{
						path: "websocket",
						name: "websocket",
						component: websocket,
					},
				]
			},
			{
				path: "/notes",
				name: "notes",
				component: plugin,
			},
			{
				path: "/websocket",
				name: "websocket",
				component: websocket,
			}
		]
})

// router.beforeEach((to, from, next) => {
// 	console.log(to.path)
// 	let _path = to.path.split('/');
// 	_path.shift();

// 	if(_path[0]==''){
// 		router.push()
// 	}
// 	for (let i = 1; i < _path.length; i++) {
// 		_path[i]
// 	}
// 	_path.forEach((o)=>{
// 		if(o==''){
// 			let target = {
// 				path: "/",
// 				name: "home",
// 				component: require('../components/page/home.vue'),
// 			}
// 			return;
// 		}else{

// 		}
// 		console.log(233)
// 	})
// // ../components/page/
// next()
// })
export default router