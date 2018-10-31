/*!
 * jQuery plugin numberOption v1.0.0
 * 输入框数字控制插件
 * author: ruoyinruoxian
 * Date: 2017-08-26
 */

import jQuery from 'jquery';



(function ($) {

  'use strict';

  const defaults = {
    name: 'number', //获取数据的name属性
    max: 100, //最大数值
    min: 1, //最小数值
    change() { }, //等同于下面3个函数
    inputChange() { },
    lessClick() { },
    plusClick() { },
  };

  const number_option = (el, settings) => {//主函数体
    const content = `
			<div id="numberOption">
				<a class="less" href="javascript:;">－</a>
				<input type="text" name="${settings.name}" value="${settings.min}">
				<a class="plus" href="javascript:;">＋</a>
			</div>
			<style type="text/css">
				#numberOption{width: 100%;height: 100%;border: 1px solid #999;}
				#numberOption a{width: 25%;height: 100%;float: left;font-size: 20px;color: #666;font-style: normal;text-align: center;line-height: 125%;text-decoration: none;}
				#numberOption a:hover{color: #f60;}
				#numberOption a{width: 25%;height: 100%;float: left;}
				#numberOption input{width: 50%;height: 100%;line-height: 100%;text-align: center;border: 0;border-style: solid;border-color: #999;border-left-width: 1px ;border-right-width: 1px;float: left;outline: none;color: #333;padding: 0 5%;border-radius:0;}
			</style>
		`;
    el.empty().append(content);

    let _input = el.find('input');

    _input[0].oninput = function () {
      this.value = this.value.replace(/\D/g, '');
      if (this.value < settings.min) {
        this.value = settings.min;
      }

      if (this.value > settings.max) {
        this.value = settings.max;
      }
      this.value = (Number(this.value));
      settings.change(this.value);
      settings.inputChange(this.value);
    };

    el.find('.less').click(function () {
      if (_input.val() > settings.min) {
        _input.val(Number(_input.val()) - 1);
        settings.change(_input.val());
        settings.lessClick(_input.val());
      }
    });

    el.find('.plus').click(function () {
      if (_input.val() < settings.max) {
        _input.val(Number(_input.val()) + 1);
        settings.change(_input.val());
        settings.plusClick(_input.val());
      }
    });

  };

  $.fn.numberOption = function (options) {

    const self = this;

    const settings = $.extend({}, defaults, options);

    number_option(self, settings);

    return self;
  };

})(jQuery);
