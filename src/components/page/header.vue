<template>
	<div class="main_header">
		<mt-header title="我的vue" class="header_content">
			<mt-button icon="more" slot="right" @click.stop="navShow()">
			</mt-button>
		</mt-header>
		<ul class="right">
			<li v-for="(item,index) in nav" @click.stop="navShow()">
				<router-link :to="{path:item.path}">{{item.name}}</router-link>
			</li>
		</ul>
	</div>
</template>
<script>
	export default {
		data(){
			return{
				navToggle:true,
				nav:[
					{
						name:'首页',
						path:'/',
					},
					{
						name:'插件',
						path:'/pluginPage/numberOption',
					},
					{
						name:'文档',
						path:'/text',
					},
				]
			}
		},
		mounted(){
			var self = this;
			document.onclick = ()=>{
				self.navToggle = false
				self.navShow()
			}
		},
		methods:{
			navShow(){
				let toggleClass = document.getElementsByClassName('right')[0];
				toggleClass.className = this.navToggle?"right active":'right';
				this.navToggle = !this.navToggle;
			}
		}
	}
</script>
<style lang='less'>
	.main_header{
		@navLength: 3;
		.header_content{
			font-size: 0.8rem;
			height: 2rem;
			background-color: #74A8FF;
			color: #fff;
			text-shadow: 0 0 1px rgba(0,0,0,0.3);
		}
		ul.right{
			max-width: 1440px;
			font-size: 0.8rem;
			position: absolute;
			right: 0;
			top: 2rem;
			z-index: 1000;
			li{
				a{
					display: block;
					color: #fff;
					opacity: 0;
					width: 4rem;
					line-height: 1.5rem;
					font-size: 0.7rem;
					transition: transform 0.15s,opacity 0.30s;
					transform: translate(0.5rem,-0.5rem);
					text-align: center;
					background-color: #74A8FF;
				}
			}
			.loop(@counter) when (@counter <= @navLength) {
			  .loop((@counter + 1));
			  li:nth-child(@{counter}) {
			  	a{
				  	transition-delay: (0.075s * @counter);
			  	}
				}
			}
			.loop(1);
			&.active{
				li{
					a{
						transform: translate(0,0);
						opacity: 1;
					}
				}
			}
		}
	}
</style>