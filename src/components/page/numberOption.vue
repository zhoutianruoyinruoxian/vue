<template>
	<div class="home">
		<h1 class="ani">输入框数值操作</h1>
		<router-link :to="{path:'/'}">首页</router-link>
		<router-link :to="{path:'/numberOption'}">输入框数值操作</router-link>
		<div id="number" style="width: 120px;height: 30px;">
		</div>
		<span class="num"></span>
	</div>
</template>
<script>
	import $ from 'jquery'
	// import velo from 'velocity'
	import '../plugin/numberOption.js'

	export default{
		data(){
			return{
				
			}
		},
		mounted(){
			$('#number').numberOption({
				name: 'menumber',
				max: 20,
				min:0,
				change(output){
					$('.num').text(output)
				}
			});
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