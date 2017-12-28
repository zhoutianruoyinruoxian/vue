<template>
	<div class="demo" id="threedemo">
		<!-- <canvas ref='myCanvas' id="myCanvas"  >Your browser does not support the canvas element.</canvas> -->
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
			// var scene = new THREE.Scene();  // 场景
			// var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);// 透视相机
			// var renderer = new THREE.WebGLRenderer({antialias:true});   // 渲染器
			// renderer.setSize(window.innerWidth, window.innerHeight);    // 设置渲染器的大小为窗口的内宽度，也就是内容区的宽度
	        
	  //       document.getElementById("threedemo").appendChild(renderer.domElement);
	  //       var geometry = new THREE.CubeGeometry(1,1,1);//3D.立方体几何(X轴长度,Y轴长度，Z轴长度)
	  //       var material = new THREE.MeshBasicMaterial({color: 0x00ff00});
	  //       var cube = new THREE.Mesh(geometry, material); scene.add(cube);
	  //       camera.position.z = 5;
	  //       function render() {
	  //           requestAnimationFrame(render);
	  //           cube.rotation.x += 0.01;
	  //           // cube.rotation.y += 0.1;
	  //           renderer.render(scene, camera);
	  //       }
	  //       render();


                var width = window.innerWidth;
                var height = window.innerHeight;

		 	 	var renderer;
	            function initThree() {//新建一个渲染器
	                renderer = new THREE.WebGLRenderer({
	                    antialias : true//抗锯齿
	                });
	                renderer.setSize(width, height);
	                document.getElementById('threedemo').appendChild(renderer.domElement);
	                renderer.setClearColor(0xff6600, 1.0);



				// var stats = new Stats();
				// stats.setMode(1); // 0: fps, 1: ms
				// // 将stats的界面对应左上角
				// stats.domElement.style.position = 'absolute';
				// stats.domElement.style.left = '0px';
				// stats.domElement.style.top = '0px';
				// document.body.appendChild( stats.domElement );
				// setInterval( function () {
				//     stats.begin();
				//     // 你的每一帧的代码
				//     stats.end();
				// }, 1000 / 60 );
	            }

	            var camera;
	            function initCamera() {//新建一个相机
	                camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);
	                camera.position.x = 0;
	                camera.position.y = 0;
	                camera.position.z = 3000;
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

	            var cube;
	            // function initObject() {

	            //     var geometry = new THREE.Geometry();
	            //     var material = new THREE.LineBasicMaterial( { vertexColors: THREE.VertexColors} );//线条材质
	            //     var color1 = new THREE.Color( 0x444444 ), color2 = new THREE.Color( 0xFF9900 );//定点颜色

	            //     // 线的材质可以由2点的颜色决定
	            //     var p1 = new THREE.Vector3( -2,0,1 );
	            //     var p2 = new THREE.Vector3(  1, 1,1 );
	            //     geometry.vertices.push(p1);
	            //     geometry.vertices.push(p2);
	            //     geometry.colors.push( color1, color2 );

	            //     var line = new THREE.Line( geometry, material, THREE.LineSegments );
	            //     scene.add(line);
	            // }
	            function initObject() {
	                var geometry = new THREE.Geometry();
	                geometry.vertices.push( new THREE.Vector3( - 500, 0, 0 ) );
	                geometry.vertices.push( new THREE.Vector3( 500, 0, 0 ) );

	                for ( var i = 0; i <= 20; i ++ ) {

	                    var line = new THREE.Line( geometry, new THREE.LineBasicMaterial( { color: 0x000000, opacity: 0.2 } ) );
	                    line.position.y = ( i * 50 ) - 500;
	                    scene.add( line );

	                    var line = new THREE.Line( geometry, new THREE.LineBasicMaterial( { color: 0x333333, opacity: 0.2 } ) );
	                    line.rotation.z = 90 * Math.PI / 180;
	                    line.position.x = ( i * 50 ) - 500;
	                    scene.add( line );

	                }
	            }
	            function render()
	            {
	                renderer.clear();
	                renderer.render(scene, camera);
	                requestAnimationFrame(render);
	            }
	            (function threeStart() {
	                initThree();
	                initCamera();
	                initScene();
	                initLight();
	                initObject();
	                render();
	            })()

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