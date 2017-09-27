<template>
	<div class="test">
		<h1 class="ani" @click="click($event)">home</h1>
		<router-link :to="{path:'/'}">首页</router-link>
		<router-link :to="{path:'/list'}">list</router-link>
		<router-link :to="{path:'/numberOption'}">输入框数值操作</router-link>

		<div>
			
		</div>
	</div>
</template>
<script>
	import Vue from 'vue'
	export default{
		mounted(){
			function then(){
				console.log('continue')
			}
			(function(){
				console.log('strat')
				then();

				console.log('end')
			})()
			console.log(222)
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