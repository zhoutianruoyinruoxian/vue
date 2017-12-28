<template>
	<div class="demo" id="threedemo">
		<!-- <canvas ref='myCanvas' id="myCanvas"  >Your browser does not support the canvas element.</canvas> -->
	<img src="/src/components/static/img/abc.jpg" style="">
	</div>
</template>
<script>
	const THREE = require('three');
	// import THREE from 'three'//无效
	export default{
		data(){
			return{

			}
		},
		mounted(){
			console.log(222)
            var width = window.innerWidth;
            var height = window.innerHeight;
			initWord()
			function initWord(fov, width, height) {
				initScene();  // 场景
				initRenderer();  // 渲染器
				initCamera();  // 摄像机
				addPano('/src/components/static/img/abc.jpg')
	                render();
			};

			var renderer;
			function initRenderer() {//新建一个渲染器
                renderer = new THREE.WebGLRenderer({
                    antialias : true//抗锯齿
                });
                renderer.setSize(width, height);
                document.getElementById('threedemo').appendChild(renderer.domElement);
                renderer.setClearColor(0xff6600, 1.0); 
            }


            var camera;
            function initCamera() {//新建一个相机
                camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);
                camera.position.x = 0;
                camera.position.y = 0;
                camera.position.z = 0;
                camera.up.x = 0;
                camera.up.y = 0;
                camera.up.z = 1;
                // camera.lookAt({
                //     x : 1,
                //     y : 1,
                //     z : 1
                // });
            }

            var scene;
            function initScene() {
                scene = new THREE.Scene();//新建一个场景
            }

            var light;
            function initLight() {
                light = new THREE.DirectionalLight(0xFF0000, 1.0, 0);
                light.position.set(100, 100, 200);
                scene.add(light);
            }








			// 添加全景图
			function addPano(url) {
				THREE.ImageUtils.crossOrigin = '';
				// 使用全景图片生成纹理
				THREE.ImageUtils.loadTexture(url, undefined, function(texture) {
					// 设置属性
					texture.maxFilter = THREE.NearestFilter;
					texture.minFilter = THREE.NearestFilter;
					texture.format = THREE.RGBFormat;
					// 从纹理创建材质
					var material = new THREE.MeshLambertMaterial({map: texture});
					// 创建球体，并加入到场景中
					var mesh = new THREE.Mesh( new THREE.SphereGeometry( 955, 50, 50 ), material );
					mesh.scale.x = -1;
					scene.add( mesh );
				})
			};
	            function render()
	            {
	                renderer.clear();
	                renderer.render(scene, camera);
	                // requestAnimationFrame(render);
	            }

			 // 重新计算摄像机视觉中心
			function refreshCamera(){
			    var camera = camera, lat = lat, lon = lon;
			    // 控制维度处于－85和85之间
			    lat = Math.max( - 85, Math.min( 85, lat ) );
			    // 计算竖直夹角弧度 & 计算水平旋转度（弧度）
			    var phi = THREE.Math.degToRad( 90 - lat ), theta = THREE.Math.degToRad( lon );
			    // 设置相机视角中心点
			    camera.target.x = 500 * Math.sin( phi ) * Math.cos( theta );
			    camera.target.y = 500 * Math.cos( phi );
			    camera.target.z = 500 * Math.sin( phi ) * Math.sin( theta );
			    camera.lookAt( camera.target );
			}
			 // 开启用户控制
			function startUserControl(){
			    var elem = document.getElementById("container");
			    elem.addEventListener("mousedown", function(e){
			        // 鼠标按下，开始控制，记录初始位置等信息 
			    });
			    elem.addEventListener("mousemove", function(e){
			        // 鼠标拖动，根据鼠标位置和初始位置计算视图位置
			    });
			    elem.addEventListener("mouseup", function(e){
			        // 鼠标抬起，停止控制
			    })
			}

			// 持续渲染刷新
			function anim(){
			    requestAnimationFrame(anim);
			    refreshCamera();
			    renderer.render(scene, camera);
			}



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