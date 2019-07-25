<template>
	<div id="music_back">
		
	</div>
</template>
<script>
	import Vue from 'vue'
	import $ from 'jquery'
	import music from '../plugin/musicPlay'
	// var music = require('../plugin/musicPlay')

	export default{
		mounted(){
			

			music({
				icon:'https://sfault-avatar.b0.upaiyun.com/408/449/4084493968-55c2142e12b21_huge256',//图标url
				music:'',//动画速度
			});
		},
		methods:{
			// click:function(e){
			// 	Velocity(e.target,{"margin-left": "200px"}, 450);
			// }
		}
	}
</script>
<style lang='less' scoped>

</style>