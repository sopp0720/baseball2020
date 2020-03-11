/* Lottie Animation을 위한 js */
var team = document.getElementById('wrap').getAttribute('data-theme');
var teamPath = 'res/json/team/team_' + team + '.json';
document.getElementById('teamSelect').addEventListener('change', function(event){ // Selectbox 삭제 후 개발
	document.getElementById('wrap').setAttribute('data-theme','');
	document.getElementById('wrap').setAttribute('data-theme',this.value);
	document.querySelector('.tab-team-info svg').remove();
	teamPath = 'res/json/team/team_' + this.value + '.json';
	animation2 = bodymovin.loadAnimation({
		container: document.getElementById('circle2'),
		renderer: 'svg',
		loop: false,
		autoplay: true,
		path: teamPath
	});
});
var animation1 = bodymovin.loadAnimation({
	container: document.getElementById('circle1'),
	renderer: 'svg',
	loop: false,
	autoplay: true,
	path: 'res/json/home.json'
});
var animation2 = bodymovin.loadAnimation({
	container: document.getElementById('circle2'),
	renderer: 'svg',
	loop: false,
	autoplay: true,
	path: teamPath
});
var animation3 = bodymovin.loadAnimation({
	container: document.getElementById('circle3'),
	renderer: 'svg',
	loop: false,
	autoplay: true,
	path: 'res/json/broadcast.json'
});
var animation4 = bodymovin.loadAnimation({
	container: document.getElementById('circle4'),
	renderer: 'svg',
	loop: false,
	autoplay: true,
	path: 'res/json/game.json'
});
var animation5 = bodymovin.loadAnimation({
	container: document.getElementById('circle5'),
	renderer: 'svg',
	loop: false,
	autoplay: true,
	path: 'res/json/my.json'
});
function getElementIndex(element, range) {
  if (!!range) return [].indexOf.call(element, range);
  return [].indexOf.call(element.parentNode.children, element);
}

[].forEach.call(document.querySelectorAll('.tab-button .tab'), function(el) {
	el.addEventListener('click', function(e) {
		var idx = webUI.getChildIndex(e.target) + 1;
		eval('var $animation = animation' + idx);
		console.log(idx);
		$animation.stop();
		setTimeout(function() {
			$animation.play();
		}, 100);
	});
});

var bnbUi = (function() {

	var $window = $(window);
	var $tab_container = $('.tab-container');
	var $tabbar = $('.tab-bar');
	var $tab_button = $('.tab-button');
	var $active_tab = $('.active-tab-container');
	var $active_label = $('.active-label-container');
	var active_tab = 0; // Active된 슬라이드 index
	var tab_length = $tab_button.find('.tab').length; // Tab 버튼의 개수
	var tab_width = $tab_button.find('.tab').outerWidth(); // 1개 tab 버튼의 width
	var middle_width = $tabbar.find('.middle').outerWidth(); // Active 탭바(탭바에 움푹 파진 영역)의 width 값
	var oversize = middle_width - tab_width - 30;
	var activeIndex = 0;
    return {
        "init" : function() {
			window.addEventListener('resize', function(){

			}, true);
			$tab_button.find('.tab').on('click', function(e) {
				var $this = $(this);

				// 탭 버튼의 index를 구합니다. //
				var index = $tab_button.find('.tab').index(this);

				// 이미 활성화 된 버튼을 다시 클릭한 경우 콜백함수를 종료합니다. //
				if (active_tab == index) {
					return false;
				}

				// goto_position(index);
				// 해당 index의 슬라이드를 이동시킵니다. //

				bnbUi.gotoPosition(index);
			});
			setTimeout(function() {
				$('.tab-container').animate({
					bottom: 0
				}, 300, function() {
					$('.tab-container').find('.active-tab-container').find('.tab').eq(0).addClass('active');
				});
			}, 0);
        },
        "fadeInOut": function(begin, end, delay) {
			setTimeout(function() {
				$active_tab.find('.tab').eq(begin).removeClass('active right left');
				$active_label.find('.label').eq(begin).removeClass('active');
				// 시작탭이 종료탭 보다 앞에 있을 경우 -> //
				if (begin < end) {
					$active_tab.removeClass('from-right');
					$active_tab.addClass('from-left');
					// 시작 지점부터 끝 지점까지 해당하는 tab 버튼에 hide 클래스를 추가합니다. //
					for (var i = begin; i <= end; i++) {
						$tab_button.find('.tab').eq(i).addClass('hide');
					}
				}

				// 시작탭이 종료탭 보다 뒤에 있을 경우 <- //
				else {
					$active_tab.removeClass('from-left');
					$active_tab.addClass('from-right');
					for (var i = begin; i >= end; i--) {
						// 시작 지점부터 끝 지점의 바로 전 탭 까지 해당하는 tab 버튼에 hide 클래스를 추가합니다. //
						$tab_button.find('.tab').eq(i).addClass('hide');
					}
				}
			}, 0);

			// Fade In //
			setTimeout(function() {
				$tab_button.find('.tab').removeClass('active');
				// 시작탭이 종료탭 보다 앞에 있을 경우 -> //
				if (begin < end) {
					// 시작 지점부터 끝 지점까지 해당하는 tab 버튼에 hide 클래스를 삭제합니다. //
					for (var i = begin; i < end; i++) {
						$tab_button.find('.tab').eq(i).removeClass('hide');
					}
					$active_label.find('.label').eq(end).addClass('active');
				}

				// 시작탭이 종료탭 보다 뒤에 있을 경우 <- //
				else {
					for (var i = begin; i > end; i--) {
						// 시작 지점부터 끝 지점의 바로 전 탭 까지 해당하는 tab 버튼에 hide 클래스를 추가합니다. //
						$tab_button.find('.tab').eq(i).removeClass('hide');
					}
					$active_label.find('.label').eq(end).addClass('active');
				}
			}, delay);

			// Active //
			setTimeout(function() {
				var date = new Date();
				$active_tab.find('.tab').eq(end).addClass('active');
				// $active_tab.find('.tab').eq(end).find('.circle').empty();
				// $active_tab.find('.tab').eq(end).find('.circle').append('<div class="img-box"><img src="../assets/images/' + active_list[end] +'?' + date.getTime() + '"></div>');

			}, delay - 0);
        },
        "gotoPosition": function(index) {
			var left_flex_grow = index;
			var right_flex_grow = (tab_length - 1) - index;

			bnbUi.fadeInOut(active_tab, index, 250);

			$tabbar.find('.left-side').css({
				'flex-grow': left_flex_grow,
				'-webkit-box-flex': left_flex_grow
			});
			$tabbar.find('.right-side').css({
				'flex-grow': right_flex_grow,
				'-webkit-box-flex': right_flex_grow
			});

			active_tab = index;
        }
    }
})();










