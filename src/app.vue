<template>
	<div id="app" class="app">
		<head-nav :titles="title" sll="这是静态的属性"></head-nav>
		<div id="main_content">
			<transition mode="out-in" name="route">
				<router-view></router-view>
			</transition>
		</div>
		<foot-nav></foot-nav>
	</div>
</template>
<script>
	import Vconsole from 'vconsole'

	import headNav from './components/page/header.vue'
	import footNav from './components/page/footer.vue'
	// const vconsole = new Vconsole()
	export default{
		data () {
			return {
				title:'这是动态的属性',
				transitionName: null,
				transitionMode: null
			}
		},
		watch:{
			'$route'(to,from){
				const toDepth = to.path.split('/').length;
				const fromDepth = from.path.split('/').length; 
				this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left';
				this.transitionMode = toDepth < fromDepth ? '' : 'out-in';
			}
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
	.slide-right-leave-active{transition: left 0.5s;position: absolute;background-color: #eee;width: 100vw;}
	.slide-right-leave-to{left: 100vw;}
	.slide-right-leave{left: 0vw;}
	.slide-left-enter-active{transition: left 0.5s;position: absolute;background-color: #eee;width: 100vw;}
	.slide-left-enter{left: 100vw;}
	.slide-left-enter-to{left: 0vw;}
	.slide-left-leave-active{transition: left 0.45s;position: absolute;}
	.slide-left-leave{opacity: 1;}
	.slide-left-leave-to{opacity: 1;}
	#app{
		/*min-height: 100vh;*/
	}
	#main_content{
		min-height: calc(~'100vh - 4rem');
		background-color: #eee;
	}
</style>