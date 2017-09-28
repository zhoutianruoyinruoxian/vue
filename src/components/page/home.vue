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
			var el = this.$refs.myCanvas
			volution(el);
			function  volution(el){

				const c=el;
				const ctx=c.getContext("2d");
				c.width=window.innerWidth;
				c.height=window.innerHeight-80;

				const setting = {
					speed: 20,//由于动画周期时间是固定的，所以动画速度由该属性控制(单位:px)
					time: 0,//此参数放在animate里面用于对时间进行计数
					pause:false,//是否暂停
					number: 1,//实例数量
					current: 0,//当前实例数量
					pack:[],//实例数组
					colors:[],//颜色数组
				};
				start();
				function start(){//动画开始函数
					ctx.clearRect(0, 0, c.width, c.height);
					setting.current=0;
					setting.time=0;
					animate();

				}
				function Paint(color){//每个实例的绘画函数
					this.X = c.width/2;
					this.Y = c.height/2;
					this.radius = 10;
					this.color = color;
				};
				Paint.prototype ={
					gopaint(){
						ctx.save();
				        ctx.beginPath();
				        ctx.arc( this.X, this.Y, this.radius , 0, 2 * Math.PI);
						ctx.fillStyle = this.color;
						ctx.fill();
						ctx.restore();
					}
				}


				function animate(){//动画执行函数
					setting.current++;
					if (setting.current>setting.number) {
						// cancelAnimationFrame(animate);
					}else{
						setting.time++;
						ctx.clearRect(0, 0, c.width, c.height);
						let new_color = GenerateColor();//生成颜色
						setting.pack=[];
						let ele = new Paint(new_color);//生成实例
					console.log(ele.gopaint())
						setting.pack.push(ele);
					};
					setting.pack.forEach(function(o){
						// console.log(o)
						o.X=Math.cos(Math.PI*setting.speed*setting.time);
						o.Y=Math.cos(Math.PI*setting.speed*setting.time);
						o.gopaint();
					});
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


			// GenerateColor(100,15);
			function GenerateColor(space){//生成有序的随机颜色
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
				return new color(r,g,b);
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