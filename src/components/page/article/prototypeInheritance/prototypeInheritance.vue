<template>
	<div class="prototype_nheritance">
		<h1>js原型继承解析</h1>
		<article>
			<address>作者：周天</address>
			<time>2018-2-5 20:27:00</time>
			<section class="content">
				<p>
				最近看到一篇js继承的博客，相对其应用场景加一描述。原理不再赘述，原文地址：<a href="https://www.cnblogs.com/humin/p/4556820.html" target="blank">https://www.cnblogs.com/humin/p/4556820.html</a></p>
				<p>js继承有好几种方法，有好有坏，这里就直接展示最完善的一种，先看代码：</p>
				<img src="./img/code1.jpg">
				<p>该代码运行结果如下:</p>
				<img src="./img/code2.jpg">
				<p>以上代码Man函数继承了People函数的原型。那么为什么要有原型继承呢，换句话说在什么情况下会用到原型继承呢？</p>
				<p>现假设一个应用场景为：假设我们要定义一种男人（Man）、一种女人（Woman）、一种小孩（Child），这三种人都会睡觉（sleep函数）、吃饭（eat函数），男人会工作（work函数）,女人会做饭（cook函数），小孩会哭（cry函数）。</p>
				<p>如果我们只用原型，不用继承，那么第一种方案：</p>
				<p>我们要创建三个构造函数（Man，Woman，Child），但是由于三种人都会睡觉、吃饭，那么我们要在每个构造函数里面都定义sleep函数和eat函数,这显然不合理。</p>
				<p>第二种方案：</p>
				<p>我们要创建1个构造函数（People），然后在构造函数里面定义sleep方法和eat方法,但是男人有自己独有的函数work，女人有cook函数，而小孩又是cry函数，如果我们把这3个函数也放进People函数里面，那么在new一个男人的时候也会带上cook和cry函数,这就达不到私有方法的目的了，这显然也不合理。</p>
				<p>现在我们采用继承来实现第三种方案：</p>
				<p>首先我们创建一个People主函数，然后在构造函数里面定义sleep方法和eat方法。然后分别定义男人（Man）、女人（Woman）、小孩（Child）三个构造函数，接下去再分别加入他们对应的私有方法。只要3个构造函数继承主函数People就又能直接集成到sleep方法和eat方法。</p>
				<p>通俗的来讲就是把他们共有的方法放入主函数，再自己分别构建私有方法，这样既不会像方案1那样导致公共方法重复定义，影响js美观和性能；也不会像方案2那样导致私有方法变成公共方法（比如Man函数可以直接调用cook方法）。</p>
				<p>全部代码如下图：</p>
				<!-- <img src="./img/code3.jpg"> -->
			</section>
		</article>
	</div>
</template>
<script>

	export default {
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