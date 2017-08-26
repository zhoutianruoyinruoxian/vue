<template>
	<div class="home">
		<h1 class="ani" @click="click($event)">home</h1>
		<router-link :to="{path:'/'}">首页</router-link>
		<router-link :to="{path:'/list'}">list</router-link>
		<router-link :to="{path:'/numberOption'}">输入框数值操作</router-link>
	</div>
</template>
<script>
	import Vue from 'vue'
	import VueResource from 'vue-resource'
	import $ from 'jquery'
	// import velo from 'velocity'

	Vue.use(VueResource)
	export default{
		mounted(){
			// this.$http({
			// 	method:'GET',
			// 	url:'http://127.0.0.1:8085/server/server.json',
			// 	data:{},
			// 	type:"JSON",
			// 	headers: {"X-Requested-With": "XMLHttpRequest"},
			// 	emulateJSON: true
			// })
			// .then(function(data){//es5写法
			// 	console.log(data)
			// })
		},
		methods:{
			// click:function(e){
			// 	Velocity(e.target,{"margin-left": "200px"}, 450);
			// }
		}
	}
</script>
<style type="text/css">

</style>