<template>
	<div id="app" class="app">
		<transition mode="out-in" name="route">
			<router-view></router-view>
		</transition>
	</div>
</template>
<script>
	
</script>
<style>
*{box-sizing: border-box;}
	.route-enter-active,.route-leave-active{transition: opacity 0.3s;}
	.route-enter,.route-leave-to{opacity: 0;}
	.route-enter-to,.route-leave{opacity: 1;}
</style>