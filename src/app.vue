<template>
	<div id="app" class="app">
		<head-nav></head-nav>
		<div id="main_content">
			<transition mode="out-in" name="route">
				<router-view></router-view>
			</transition>
		</div>
		<foot-nav></foot-nav>
	</div>
</template>
<script>
	import headNav from './components/page/header.vue'
	import footNav from './components/page/footer.vue'
	export default{
		created(){

		},
		components:{
			headNav,
			footNav,
		}
	}
</script>
<style lang="less" scoped>
*{box-sizing: border-box;}
	.route-enter-active,.route-leave-active{transition: opacity 0.3s;}
	.route-enter,.route-leave-to{opacity: 0;}
	.route-enter-to,.route-leave{opacity: 1;}
	#main_content{
		min-height: 500px;
		background-color: #eee;
	}
</style>