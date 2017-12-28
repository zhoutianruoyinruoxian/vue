<template>
	<div class="test">
		<h1 class="ani" @click="click($event)">home</h1>
		<router-link :to="{path:'/'}">首页</router-link>
		<router-link :to="{path:'/list'}">list</router-link>
		<router-link :to="{path:'/numberOption'}">输入框数值操作</router-link>

		<div>
			<canvas id="can"></canvas>
		</div>
	</div>
</template>
<script>
	import Vue from 'vue'
	export default{
		mounted(){

			let c=document.getElementById("can");
			let ctx=c.getContext("2d");
			c.height=c.width=300;
			ctx.translate(c.width/2,c.width/2);
			ctx.rotate(30);
    		ctx.beginPath();
			ctx.fillStyle = 'red';
			ctx.moveTo(0,0);
		    ctx.arc( 0, 0, c.width/2 , 0.5*Math.PI, 1*Math.PI);
		    ctx.closePath();
			ctx.fill();
			

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