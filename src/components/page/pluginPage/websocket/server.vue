<template>
	<div id="chat_div" class="chat_div clearfix">
		<ul class=" chat_list left">
			<li v-for="item in chat.msg" class="left">
				<img :src="chat.avater">
				<h1>{{chat.name}}</h1>
				<p>{{item.message}}</p>
			</li>
		</ul>
		<div class="buttom">
			<input type="text" v-model="data" value="shenme">
			<span @click="send" style="cursor: pointer;">发送</span>
		</div>
		<input type="text" v-model='user.id' value="001">
		<input type="text" v-model='user.name' value="zhoutian">
		<input type="text" v-model='user.toUser' value="002">
		<span @click='go' style="cursor: pointer;">ok</span>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				socket:undefined,
				returnData:'',
				data:'',
				chat:[],
				user:{
					name:'周天',
					avater:'./img/avater.jpg',
					id:'',
					toUser:'',
				}
			}
		},
		mounted(){
			// var ws =  new WebSocket('ws://localhost:3000/ws');
			function setUser(obj){
				local.storage.setItem(obj)
			}
			// this.user = {
			// 	name:'',
			// 	avater:'./img/avater.jpg',
			// 	id:'',
			// };
			// setUser(this.user)
			this.startWebsocket();
		},
		methods:{
			startWebsocket(){
				const self = this;
				// 打开一个WebSocket:
				self.socket = new WebSocket('ws://192.168.13.141:8000/ws');
				self.socket.onopen = function(){
	                  // Web Socket 已连接上，使用 send() 方法发送数据
	                  console.log('连接成功')
               	};
				// 响应onmessage事件: 
				self.socket.onmessage = function(msg) { 
					self.returnData = msg.data;
					console.log(msg,333);
				};
				window.onunload = function() {
			        self.socket.close();
			    }
			    window.onbeforeunload = function() {
			        self.socket.close();
			    }
			},
			send(){
				// 给服务器发送一个字符串:
				if(!this.data){
					return;
				};
				let  post_msg = {
					user:this.user,
					msg:this.data
				}
				this.socket.send(post_msg);
				this.chat.push({message:this.data});
				this.data='';

			},
			close(){
				// 给服务器发送一个字符串:
				this.socket.close();
			},
			go(){
				// setUser(this.user)
			}
		}
	}
</script>
<style lang='less' scoped>
	.chat_div{
		overflow: auto;
		.chat_list{
			li{
				clear: both;
				max-width: 70%;
			}
			.left{
				float: left;
				padding-left: 30px;
			}
			.right{
				float: right;

				padding-right: 30px;
			}
		}

	}
</style>