<template>
	<div class="prototype_nheritance">
		<h1>点击延迟</h1>
		<article>
			<address>作者：周天</address>
			<time>2018-2-5 20:27:00</time>
			<section class="content">
				<span ref='span1'>点击</span>
				<p>touchstart:{{start}}</p>
				<p>touchend:{{end}}</p>
				<p>点击事件延迟:{{click1}}</p>
			</section>
		</article>
	</div>
</template>
<script>

	export default{
		data(){
			return{
				start:0,
				end:0,
				click1:0,
				click2:0,

			}
		},
		mounted(){
			const self = this;
			document.addEventListener('touchstart',function(){
				let date =new Date();
				self.start = date.getTime();
			});
			document.addEventListener('touchend',function(){
				let date =new Date();
				self.end = date.getTime();
			});
			this.$refs.span1.onclick = function(){
				let date =new Date();
				self.click1 = date.getTime();
			}
		},
		methods:{
		}
	}
</script>
<style lang='less' scoped>
	@defaultFontSize : 10px;
	@colorTwo:#999;
	.prototype_nheritance{
		padding: 6% 6%;
		h1{
			font-size: 2*@defaultFontSize;
			text-align: center;
		}
		article{
			padding-top: 10px;
			address{
				font-size: @defaultFontSize;
				color: @colorTwo;
				float: left;
				margin-left: 15%;
			}
			time{
				font-size: @defaultFontSize;
				color: @colorTwo;
				float: right;
				margin-right: 15%;
			}
			section{
				padding-top: 5px;
				clear: both;
				font-size: 1.4*@defaultFontSize;

				p{
					margin: 5px 0;
				}
				img{
					width: 100%;

				}
			}
		}
	}
</style>