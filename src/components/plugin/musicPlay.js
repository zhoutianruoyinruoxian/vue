/*!
 * jQuery plugin numberOption v1.0.0
 * 音频播放插件
 * author: ruoyinruoxian
 * Date: 2017-08-26
 */


const doc = document;
let defaults = {
  el: doc.querySelector('body'), //放入的位置
  icon: '', //图标url
  music: '', //音频url
  speed: 3, //动画速度
};

function music(param) {

  'use strict';

  let obj = Object.assign({}, defaults, param);

  let content = `
		<div class="musicSection">
			<div class="musicSection_icon_back">
		  		<img class="musicSection_icon" src="${obj.icon}">
			</div>
			<audio  loop='loop' id="music" src="${obj.music}" style="display: none;" ></audio>
		</div>
		<style type="text/css">
			body{position: relative;}
			.musicSection{width: 40px;height: 40px;position: absolute;top:10px;left:10px;}
			.musicSection_icon_back{width: 100%;height: 100%;}
			.musicSection_icon{width: 100%;height: 100%;border-radius: 50%;}
			.animate {animation: music_round ${obj.speed}s linear infinite;}
			@keyframes music_round {
				100% {transform: rotate(1turn);}
			}
		</style>
	`;

  obj.el.innerHTML = content;

  let isPlaying = false;
  const container = doc.querySelector('.musicSection_icon_back');
  const image = container.querySelector('.musicSection_icon');

  image.addEventListener('click', () => {
    isPlaying ? _music(false) : _music(true);
  });

  function _music(o) {
    if (o) {
      isPlaying = true;
      image.classList.add('animate');
      doc.getElementById('music').play();
    } else {
      doc.getElementById('music').pause();
      isPlaying = false;
      const iTransform = getComputedStyle(image).transform;
      const cTransform = getComputedStyle(container).transform;
      container.style.transform = cTransform === 'none' ? iTransform : cTransform.concat(iTransform);
      image.classList.remove('animate');
    }
  }
}


export default music;
