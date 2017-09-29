<template>
	<div class="home">
		<canvas ref='myCanvas' id="myCanvas"  >Your browser does not support the canvas element.</canvas>
	</div>
</template>
<script>
	// import velo from 'velocity'
	export default{
		data(){
			return{

			}
		},
		mounted(){ 
			var el = this.$refs.myCanvas;
			volution(el);
			function  volution(el){

				window.onload= function(){
					start();
				};

				const c=el;
				const ctx=c.getContext("2d");
				c.width=window.innerWidth;
				c.height=window.innerHeight-80;
				var setting = {
					speed: 0.03,//由于动画周期时间是固定的，所以动画速度由该属性控制(单位:px)
					time: 0,//此参数放在animate里面用于对时间进行计数
					pause:false,//是否暂停
					number: 5,//实例数量
					current: 0,//当前实例数量
					pack:[],//实例数组
					colors:[],//颜色数组
					space:17,//颜色变化跨度
				};				
				function start(){//动画开始函数
					ctx.clearRect(0, 0, c.width, c.height);
					setting.current=0;
					setting.time=0;
					setting.pack=[];
					setting.colors =  GenerateColor(setting.space,setting.number);
					animate();
				};
				function Paint(i,color){//每个实例的绘画函数
					this.X = c.width/2;
					this.Y = c.height/2;
					this.radius = 4;
					this.color = color;
					this.state = i*3;
				};
				Paint.prototype.gopaint=function(){
						ctx.save();
				        ctx.beginPath();
				        ctx.arc( this.X, this.Y, this.radius , 0, 2 * Math.PI);
						ctx.fillStyle = this.color;
						ctx.globalAlpha=1;
						ctx.fill();
						ctx.restore();
				};
				function animate(){//动画执行函数
					ctx.clearRect(0, 0, c.width, c.height);
					if (setting.current>=setting.number) {
						// cancelAnimationFrame(animate);
					}else{
						var new_color = setting.colors[setting.time];//获取颜色
						let ele = new Paint(setting.current,new_color);//生成实例
						setting.pack.push(ele);
						setting.current++;
					};
					setting.pack.forEach(function(o){
						o.X=Math.cos(Math.PI*setting.speed*(setting.time-o.state))*50+c.width/2;
						o.Y=Math.sin(Math.PI*setting.speed*(setting.time-o.state))*50+c.width/2;
						o.gopaint();
					});

					setting.time++;
				    if (!setting.pause) {
				        if ("requestAnimationFrame" in window) {
				            requestAnimationFrame(animate);
				        }
				        else if ("webkitRequestAnimationFrame" in window) {
				            webkitRequestAnimationFrame(animate);
				        }
				        else if ("msRequestAnimationFrame" in window) {
				            msRequestAnimationFrame(animate);
				        }
				        else if ("mozRequestAnimationFrame" in window) {
				            mozRequestAnimationFrame(animate);
				        }
				    };
				};
			}
			
			// Array.prototype.forEach = function (callback) {
			//     for (var i = 0; i < this.length; i++) {
			//         callback.call(this[i]);
			//     }
			// };

			// GenerateColor(100,15);
			function GenerateColor(space,number){//生成有序的随机颜色
				let [r,g,b,colors] = [255,0,0,[]];
				function color(){
					this.R = r;
					this.G = g;
					this.B = b;
				};
				color.prototype ={
					getColor (){
						return "rgb("+this.R+","+this.G+","+this.B+")"
					}
				};
				for(let i=0 ; i<number; i++){
					if(r==255&&g==0&&b<255){
						b+=space;
					}
					else if (r>0&&g==0&&b==255) {
						r-=space;
					}
					else if(r==0&&g<255&&b==255){
						g+=space;
					}
					else if(r==0&&g==255&&b>0){
						b-=space;
					}
					else if(r<255&&g==255&&b==0){
						r+=space;
					}
					else if(r==255&&g>0&&b==0){
						g-=space;
					};
					let Color= (new color(r,g,b)).getColor();
					colors.push(Color);
				};
				return colors;
			};
		},
		methods:{

		}
	}
</script>
<style lang='less'>
	.home{
		width: 100%;
		height: calc(~'100vh - 4rem');
		#myCanvas{
			border:1px solid #c3c3c3;
			background-color: #eee;
		}
	}
</style>