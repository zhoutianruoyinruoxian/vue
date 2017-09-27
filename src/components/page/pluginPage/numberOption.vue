<template>
	<div class="home">
		<h1 class="ani">输入框数值操作</h1>
		<router-link :to="{path:'/'}">首页</router-link>
		<router-link :to="{path:'/pluginPage/numberOption'}">输入框数值操作</router-link>
		<div id="number" style="width: 120px;height: 30px;">
		</div>
		<span class="num"></span>
	</div>
</template>
<script>
	import Vue from 'vue'
	import VueResource from 'vue-resource'
	import $ from 'jquery'
	// import velo from 'velocity'
	import numberOption from '../../plugin/numberOption.js'

	Vue.use(VueResource)
	export default{
		mounted(){
			$('#number').numberOption({
				name: 'menumber',
				max: 20,
				min:0,
				change: function(output){
					$('.num').text(output)
				}
			});
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
<style lang="less" scoped>

</style>