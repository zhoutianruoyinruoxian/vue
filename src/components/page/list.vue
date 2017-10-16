<template>
	<div class="home">
		<h1 class="ani">首页</h1>
		<router-link :to="{path:'/'}">首页</router-link>
		<router-link :to="{path:'/numberOption'}">输入框数值操作</router-link>
		<div id="number" style="width: 120px;height: 30px;">
		</div>
		<span class="num"></span>
	</div>
</template>
<script>

	export default{
		mounted(){
			
			this.$ajax.get('http://127.0.0.1:8085/server/server')
			.then(data=>{//es5写法
				console.log(data)
			})
			.catch(error=>{
				console.log(error)
			})
			this.$ajax.get('http://127.0.0.1:8085/server/demo')
			.then(function(data){//es5写法
				console.log(data)
			})
			.catch(error=>{
				console.log(error)
			})
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