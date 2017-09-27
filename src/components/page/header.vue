<template>
	<div class="header">
		<div class="left"></div>
		<ul>
			<li>
				<router-link :to="{path:'/'}">首页</router-link>
			</li>
			<li>
				<router-link :to="{path:'/pluginPage/numberOption'}">插件</router-link>
			</li>
			<li>
				<router-link :to="{path:'/text'}">文档</router-link>
			</li>
		</ul>
	</div>
</template>
<script>
	
</script>
<style lang='less' scoped>
	.header{
		height: 80px;
		background-color: #74A8FF;
		ul{
			max-width: 1440px;
			margin: 0 auto;
			font-size: 16px;
			li{
				float: left;
				a{
					color: #fff;
				}
			}
		}
	}
</style>