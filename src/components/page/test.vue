<template>
	<div class="test">
		<p><a href="https://cordova.apache.org/">cordova.js</a></p>
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