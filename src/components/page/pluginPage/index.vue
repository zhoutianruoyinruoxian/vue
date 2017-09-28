<template>
	<div class="plugin">
		<div class="plugin_nav">
			<ul>
				<li>
					<router-link :to="{path:'numberOption'}" append></router-link>	
				</li>
			</ul>
		</div>
		<div>
			<h1>插件</h1>
			<transition mode="out-in" name="route">
				<router-view></router-view>
			</transition>
		</div>
	</div>
</template>
<script>
	export default{
		mounted(){
		},
		methods:{
		}
	}
</script>
<style lang="less" scoped>

	.route-enter-active,.route-leave-active{transition: opacity 0.3s;}
	.route-enter,.route-leave-to{opacity: 0;}
	.route-enter-to,.route-leave{opacity: 1;}
</style>